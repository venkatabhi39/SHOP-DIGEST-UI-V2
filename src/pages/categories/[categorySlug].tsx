import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import Head from 'next/head';
import {
  CategoryPagePostList,
  fetchCategoriesBySlug,
  fetchPostsForCategoryPages,
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
  categoryId: number;
  categoryName: string;
  topApps: TopAppsForSection;
}>;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps<Props, { categorySlug: string }> = withFooterTopApps(
  async ({ params }) => {
    if (!params) {
      return staticPropsPageNotFoundResult;
    }

    const { categorySlug } = params;
    const pageUrl = `/categories/${categorySlug}`;

    const [{ data: categoriesList }, { topApps, currPage }] = await Promise.all([
      fetchCategoriesBySlug(categorySlug),
      getTopAppsForSection(pageUrl),
    ]);
    if (categoriesList.length < 1) {
      return staticPropsPageNotFoundResult;
    }

    const [{ id: categoryId, name }] = categoriesList;
    const { posts, totalPages } = await fetchPostsForCategoryPages({ categories: categoryId });

    if (posts.length < 1) {
      return staticPropsPageNotFoundResult;
    }

    updateLatestPageGenerated(pageUrl, currPage);
    return {
      props: {
        posts,
        totalPages,
        categoryId,
        categoryName: name,
        topApps,
      },
      revalidate: 86400, // Every day
    };
  },
);

const PostsByCategoriesPage: FC<Props> = ({
  posts,
  topApps,
  categoryName,
  totalPages,
  categoryId,
  footerTopApps,
}) => {
  const title = `${categoryName} | Shop Digest`;

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
            categories: categoryId,
          }}
          totalPages={totalPages}
          posts={posts}
        />
      </main>
    </>
  );
};

export default PostsByCategoriesPage;
