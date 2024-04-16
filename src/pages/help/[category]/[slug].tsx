import { type GetStaticProps, type GetStaticPaths } from 'next';
import Head from 'next/head';
import { staticPropsPageNotFoundResult } from '@/constants';
import connectToWordpressDB from '@/utils/connectToWordpressDB.mongoose';
import PostPageContentContainer, {
  PostPageContent,
  PostPageTitle,
} from '@/components/PostPageContentContainer';
import { findLiveOneByCategoryAndUrl } from '@/services/helpPages.service';
import { AppsData } from '@/models/appsData.model';
import { getTopAppsForSectionWithAllFields } from '@/services/appPages.service';
import withFooterTopApps from '@/utils/withFooterTopApps';
import { PropsWithFooterTopApps } from '@/types/common.types';
import SiteHeaderWithTopApps from '@/components/siteHeader/SiteHeaderWithTopApps';

type Props = PropsWithFooterTopApps<{
  html: string;
  title: string;
  topApps: AppsData[];
}>;

type Params = {
  category: string;
  slug: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => ({
  fallback: 'blocking',
  paths: [],
});

export const getStaticProps: GetStaticProps<Props, Params> = withFooterTopApps(
  async ({ params }) => {
    if (!params) {
      return staticPropsPageNotFoundResult;
    }

    await connectToWordpressDB();
    const [doc, topApps] = await Promise.all([
      findLiveOneByCategoryAndUrl(params.category, params.slug),
      getTopAppsForSectionWithAllFields(),
    ]);

    if (!doc) return staticPropsPageNotFoundResult;

    return {
      props: {
        html: doc.html,
        title: doc.title,
        topApps,
      },
      revalidate: 2_628_000, // Every month
    };
  },
);

export default function HelpPage({ html, title, topApps, footerTopApps }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <SiteHeaderWithTopApps topApps={footerTopApps} />
      <div className="section mt-6">
        <PostPageTitle title={title} />
        <PostPageContentContainer topApps={topApps} className="mt-4">
          <div>
            <PostPageContent html={html} />
          </div>
        </PostPageContentContainer>
      </div>
    </div>
  );
}
