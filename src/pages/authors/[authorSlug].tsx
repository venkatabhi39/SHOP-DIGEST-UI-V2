import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import Head from 'next/head';
import {
  CategoryPagePostList,
  fetchPostsForCategoryPages,
  fetchUsersBySlug,
} from '@/services/api.service';
import { staticPropsPageNotFoundResult } from '@/constants';
import CategoryPagesContent from '@/components/CategoryPagesContent';
import { TopAppsForSection, getTopAppsForSection } from '@/services/appPages.service';
import withFooterTopApps from '@/utils/withFooterTopApps';
import { updateLatestPageGenerated } from '@/services/lastTimePageRegenerated.service';
import { PropsWithFooterTopApps } from '@/types/common.types';
import SiteHeaderWithTopApps from '@/components/siteHeader/SiteHeaderWithTopApps';

type Props = PropsWithFooterTopApps<{
  posts: CategoryPagePostList;
  totalPages: number;
  authorId: number;
  authorName: string;
  topApps: TopAppsForSection;
}>;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps<Props, { authorSlug: string }> = withFooterTopApps(
  async ({ params }) => {
    if (!params) {
      return staticPropsPageNotFoundResult;
    }

    const { authorSlug } = params;
    const pageUrl = `/authors/${authorSlug}`;

    const [{ data: authorsList }, { currPage, topApps }] = await Promise.all([
      fetchUsersBySlug(authorSlug),
      getTopAppsForSection(pageUrl),
    ]);
    if (authorsList.length < 1) {
      return staticPropsPageNotFoundResult;
    }

    const [{ id: authorId, name }] = authorsList;
    const { posts, totalPages } = await fetchPostsForCategoryPages({ author: authorId });

    if (posts.length < 1) {
      return staticPropsPageNotFoundResult;
    }

    updateLatestPageGenerated(pageUrl, currPage);
    return {
      props: {
        posts,
        totalPages,
        authorId,
        authorName: name,
        topApps,
      },
      revalidate: 86400, // Every day
    };
  },
);

const PostsByCategoriesPage: FC<Props> = ({
  posts,
  topApps,
  totalPages,
  authorId,
  authorName,
  footerTopApps,
}) => {
  const title = `${authorName} | Shop Digest`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <SiteHeaderWithTopApps topApps={footerTopApps} />
      <main className="mb-8">
        <CategoryPagesContent
          topApps={topApps}
          fetchParams={{
            authorId,
          }}
          totalPages={totalPages}
          posts={posts}
        />
      </main>
    </>
  );
};

export default PostsByCategoriesPage;
