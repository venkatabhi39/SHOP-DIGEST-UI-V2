import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import classNames from 'classnames';
import Image from 'next/image';
import Head from 'next/head';
import { type FC } from 'react';
import { isAxiosError } from 'axios';
import { fetchPosts } from '@/services/api.service';
import PostsRow, { PostContextProvider } from '@/components/PostsRow';
import { EmbeddedPost } from '@/types/embedded-post.type';
import PostAuthorNames from '@/components/PostAuthorNames';
import { PostCardWithTitle } from '@/components/PostCardVariants';
import { StyledAnchor } from '@/components/StyledLink';
import { DontMissOutRowContainer } from '@/components/CategoryPagesContent/PostsSection';
import PostPageContentContainer, {
  PostPageContent,
  PostPageTitle as PostTitleContainer,
} from '@/components/PostPageContentContainer';
import formatDate from '@/utils/formatDate';
import { AppsData } from '@/models/appsData.model';
import connectToWordpressDBMongoose from '@/utils/connectToWordpressDB.mongoose';
import { getTopAppsForSectionWithAllFields } from '@/services/appPages.service';
import classes from './[postSlug].module.scss';
import withFooterTopApps from '@/utils/withFooterTopApps';
import { PropsWithFooterTopApps } from '@/types/common.types';
import SiteHeaderWithTopApps from '@/components/siteHeader/SiteHeaderWithTopApps';

export type Props = PropsWithFooterTopApps<{
  post: EmbeddedPost;
  latestPosts: EmbeddedPost[];
  topApps: AppsData[];
}>;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

// @ts-ignore
export const getStaticProps: GetStaticProps<Props, { postSlug: string }> = withFooterTopApps(
  async context => {
    try {
      if (!context.params?.postSlug) {
        return { notFound: true };
      }

      const {
        params: { postSlug },
      } = context;

      await connectToWordpressDBMongoose();
      const [{ data: result }, { data: latestPosts }, topApps] = await Promise.all([
        fetchPosts({
          slug: postSlug,
          _fields: ['id', 'title', 'excerpt', 'date_gmt', 'content', '_links', '_embedded'].join(
            ',',
          ),
        }),
        fetchPosts({
          per_page: 12,
          _fields: ['id', 'slug', 'title', 'excerpt', '_links', '_embedded'].join(','),
        }),
        getTopAppsForSectionWithAllFields(),
      ]);

      if (!result || result.length < 1)
        return {
          revalidate: true,
          notFound: true,
        };

      return {
        revalidate: 2_628_000, // Every month
        props: {
          post: result[0],
          latestPosts,
          topApps,
        },
      };
    } catch (e) {
      if (isAxiosError(e) && e.response?.status === 404) {
        return {
          revalidate: true,
          notFound: true,
        };
      }

      throw e;
    }
  },
);

function PostTitle({ post }: { post: EmbeddedPost }) {
  const {
    excerpt: { rendered: excerptHTML },
    date_gmt: dateGmt,
    title: { rendered: titleHTML },
  } = post;

  return (
    <>
      <PostTitleContainer title={titleHTML}>
        <div
          dangerouslySetInnerHTML={{ __html: excerptHTML }}
          id={classes.content}
          className="mt-2"
        />
      </PostTitleContainer>
      <div className="my-4">
        <div className="mr-1 inline-flex flex-row items-center gap-2">
          <PostContextProvider value={post}>
            <PostAuthorNames />
          </PostContextProvider>
        </div>
        <span className="text-gray-700 leading-tight text-sm">{formatDate(dateGmt)}</span>
      </div>
    </>
  );
}

const PostTagsSection: FC<{ post: EmbeddedPost }> = ({ post }) => {
  const [categories, tags] = post._embedded['wp:term'];

  return (
    <div
      className={classNames(
        'mt-8 py-4 border-y border-y-gray-300 flex flex-col gap-2',
        classes.postContentContainer,
      )}
    >
      <p>
        <span className="text-lg font-bold">Explore relevant categories</span>:{' '}
        {categories.map((category, i) => (
          <span key={category.id}>
            <StyledAnchor
              href={`/categories/${category.slug}`}
              dangerouslySetInnerHTML={{ __html: category.name }}
            />
            {i !== categories.length - 1 && <span>, </span>}
          </span>
        ))}
      </p>
      <p>
        <span className="text-lg font-bold">Explore relevant tags</span>:{' '}
        {tags.map((tag, i) => (
          <span key={tag.id}>
            <StyledAnchor
              href={`/tags/${tag.slug}`}
              dangerouslySetInnerHTML={{ __html: tag.name }}
            />
            {i !== tags.length - 1 && <span>, </span>}
          </span>
        ))}
      </p>
    </div>
  );
};

function PostContent({ post }: Pick<Props, 'post'>) {
  const {
    content: { rendered: contentHTML },
    _embedded: { 'wp:featuredmedia': featuredMedia },
  } = post;

  return (
    <>
      {featuredMedia?.[0] && (
        <>
          <Image
            src={featuredMedia[0].source_url}
            alt={featuredMedia[0].alt_text}
            width={1024}
            height={1024}
            className="w-[calc(100%+3rem)] md:w-full max-md:-mx-6 inline-block max-w-none md:max-w-full"
          />
          <span
            className="text-sm text-gray-700 inline-block mt-2"
            dangerouslySetInnerHTML={{ __html: featuredMedia?.[0].caption.rendered ?? '' }}
          />
        </>
      )}
      <PostPageContent html={contentHTML} />
      <PostTagsSection post={post} />
    </>
  );
}

const PostPage: NextPage<Props> = ({ post, latestPosts, topApps, footerTopApps }) => (
  <div className={classes.container}>
    <Head>
      <title>{post.title.rendered}</title>
      <meta name="description" content={post.excerpt.rendered} />
      <meta property="og:title" content={post.title.rendered} />
      <meta property="og:description" content={post.excerpt.rendered} />
    </Head>
    <SiteHeaderWithTopApps topApps={footerTopApps} />
    <div className="section mt-6">
      <PostTitle post={post} />
      <PostPageContentContainer topApps={topApps}>
        <PostContent post={post} />
      </PostPageContentContainer>
    </div>
    <DontMissOutRowContainer>
      <PostsRow className={classes.postRow__container}>
        {latestPosts.map((latestPost, index) => (
          <PostContextProvider value={latestPost} key={latestPost.id}>
            <PostCardWithTitle />
            {index !== latestPosts.length - 1 && (
              <>
                <div className={classes.hRule} />
                <div className={classes.vRule} />
              </>
            )}
          </PostContextProvider>
        ))}
      </PostsRow>
    </DontMissOutRowContainer>
  </div>
);

export default PostPage;
