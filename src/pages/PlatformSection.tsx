import Head from 'next/head';
import { GetStaticProps } from 'next';
import withFooterTopApps from '@/utils/withFooterTopApps';

import SiteHeader from '@/components/siteHeader';
import PlatformSection from '@/components/PlatformSection/PlatformSection';

export const getStaticProps: GetStaticProps = withFooterTopApps();

export default function HomeMainPage() {
  return (
    <>
      <Head>
        <title>Shopify Apps</title>
      </Head>
      <SiteHeader isSecondaryHeader={false} />

      <main className="bg-white max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-10 lg:pb-14 mx-auto">
        <PlatformSection />
      </main>
    </>
  );
}
