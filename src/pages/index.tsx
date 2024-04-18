import Head from 'next/head';
import { GetStaticProps } from 'next';
import { isAxiosError } from 'axios';
import { CategoryPagePostList, fetchPostsForCategoryPages } from '@/services/api.service';
import CategoryPagesContent from '@/components/CategoryPagesContent';
import { TopAppsForSection, getTopAppsForSection } from '@/services/appPages.service';
import connectToWordpressDBMongoose from '@/utils/connectToWordpressDB.mongoose';
import withFooterTopApps from '@/utils/withFooterTopApps';
import { updateLatestPageGenerated } from '@/services/lastTimePageRegenerated.service';
import { SiteHeader } from '@/components/site-header';
import { HeroFilter } from '@/components/Blocks/HeroFilter/HeroFilter';
import HeroForm from '@/components/Blocks/HeroFilter/HeroForm';
import { PopularLinks } from '@/components/Blocks/HeroFilter/PopularLinks';

import { SecondaryHeader } from '@/components/site-header/SecondaryHeader';

export type Props = {
  posts: CategoryPagePostList;
  totalPages: number;
  topApps: TopAppsForSection;
};

export const getStaticProps: GetStaticProps<Props> = withFooterTopApps(async () => {
  try {
    await connectToWordpressDBMongoose();
    const [{ totalPages, posts }, { currPage, topApps }] = await Promise.all([
      fetchPostsForCategoryPages(),
      getTopAppsForSection('/'),
    ]);

    updateLatestPageGenerated('/', currPage);

    return {
      revalidate: 60 * 60 * 24 * 7, // Every seven days
      props: {
        posts,
        totalPages,
        topApps,
      },
    };
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      // eslint-disable-next-line no-console
      console.error(err.response.data);
    }
    throw err;
  }
});

export default function Home({ posts, topApps, totalPages }: Props) {
  return (
    <>
      <Head>
        <title>Shop Digest</title>
        <meta property="og:title" content="Shop Digest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Explore, Learn, and Stay Updated with ShopDigest: Your Trusted Source for Informative Articles, Curated Content, and Engaging Resources. Start your Journey to Knowledge and Discovery with Us!"
        />
      </Head>
      <SecondaryHeader />
      <SiteHeader />

      <HeroFilter />
      <HeroForm />
      <PopularLinks />
      {/* <div className="border border-t-0 border-x-0 sticky top-40 z-50" /> */}
      <main className="bg-white">
        <CategoryPagesContent topApps={topApps} totalPages={totalPages} posts={posts} />
      </main>
    </>
  );
}
