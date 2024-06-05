import Head from 'next/head';
import { GetStaticProps } from 'next';
import withFooterTopApps from '@/utils/withFooterTopApps';

import SiteHeader from '@/components/siteHeader';
import CategoryPage from '@/components/CategoryPage/Category';

export const getStaticProps: GetStaticProps = withFooterTopApps();

export default function AppMainPage() {
  return (
    <>
      <Head>
        <title>Shopify Apps | Categories</title>
      </Head>
      <SiteHeader isSecondaryHeader={true} />

      <main className="bg-white max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        <CategoryPage />
      </main>
    </>
  );
}
