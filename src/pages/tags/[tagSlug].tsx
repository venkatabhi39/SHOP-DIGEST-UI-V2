import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import Head from 'next/head';
import {
  CategoryPagePostList,
  fetchPostsForCategoryPages,
  fetchTagsBySlug,
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
  topApps: TopAppsForSection;
  totalPages: number;
  tagId: number;
  tagName: string;
}>;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps<Props, { tagSlug: string }> = withFooterTopApps(
  async ({ params }) => {
    if (!params) {
      return staticPropsPageNotFoundResult;
    }

    const { tagSlug } = params;
    const pageUrl = `/tags/${tagSlug}`;

    const [{ data: tagsList }, { topApps, currPage }] = await Promise.all([
      fetchTagsBySlug(tagSlug),
      getTopAppsForSection(pageUrl),
    ]);
    if (tagsList.length < 1) {
      return staticPropsPageNotFoundResult;
    }

    const [{ id: tagId, name }] = tagsList;
    const { posts, totalPages } = await fetchPostsForCategoryPages({ tags: tagId });

    if (posts.length < 1) {
      return staticPropsPageNotFoundResult;
    }

    updateLatestPageGenerated(pageUrl, currPage);
    return {
      props: {
        posts,
        totalPages,
        tagId,
        tagName: name,
        topApps,
      },
      revalidate: 86400, // Every day
    };
  },
);

const PostsByCategoriesPage: FC<Props> = ({
  tagName,
  topApps,
  posts,
  totalPages,
  tagId,
  footerTopApps,
}) => {
  const title = `${tagName} | Shop Digest`;

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
            tagId,
          }}
          totalPages={totalPages}
          posts={posts}
        />
      </main>
    </>
  );
};

export default PostsByCategoriesPage;
