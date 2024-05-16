import styles from '../pages/apps/shopify/index.module.scss';
import Head from 'next/head';

import CategoryPagesContent from '@/components/CategoryPagesContent';
import { GetStaticProps } from 'next';
import withFooterTopApps from '@/utils/withFooterTopApps';

import SiteHeader from '@/components/siteHeader';
import Cards from '@/components/Blocks/Cards/Cards';
import AnchorLinkList from '@/components/Blocks/AnchorLinkList';
import TopCategories from '@/components/Blocks/TopCategoriesList';

export const getStaticProps: GetStaticProps = withFooterTopApps();

export default function Components() {
  return (
    <>
      <Head>
        <title>Shopify Apps | Components</title>
      </Head>
      <SiteHeader />

      <main className="bg-white max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <Cards />
        <AnchorLinkList />
        <TopCategories />
      </main>
    </>
  );
}
