import Head from 'next/head';
import { GetStaticProps } from 'next';
import withFooterTopApps from '@/utils/withFooterTopApps';

import SiteHeader from '@/components/siteHeader';
import AppPage from '@/components/LeafPage/AppPage';

export const getStaticProps: GetStaticProps = withFooterTopApps();

export default function AppMainPage() {
  return (
    <>
      <Head>
        <title>Shopify Apps | APP</title>
      </Head>
      <SiteHeader isSecondaryHeader={true} />

      <main className="bg-white max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <AppPage />
      </main>
    </>
  );
}
