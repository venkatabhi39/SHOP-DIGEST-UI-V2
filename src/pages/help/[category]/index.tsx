import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getHelpPagesOfCategories } from '@/services/helpPages.service';
import { staticPropsPageNotFoundResult } from '@/constants';
import { IHelpPage } from '@/models/helpPages.model';
import { PostPageTitle } from '@/components/PostPageContentContainer';
import { StyledAnchor } from '@/components/StyledLink';
import withFooterTopApps from '@/utils/withFooterTopApps';
import { PropsWithFooterTopApps } from '@/types/common.types';
import SiteHeaderWithTopApps from '@/components/siteHeader/SiteHeaderWithTopApps';

type Props = PropsWithFooterTopApps<{
  helpPages: Pick<IHelpPage, 'title' | 'url'>[];
  category: string;
}>;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps<Props, { category: string }> = withFooterTopApps(
  async context => {
    if (!context?.params?.category) {
      return staticPropsPageNotFoundResult;
    }

    const helpPages = await getHelpPagesOfCategories(context.params.category);

    if (helpPages.length < 1) return staticPropsPageNotFoundResult;

    return {
      props: {
        helpPages: helpPages.map(doc => ({
          title: doc.title,
          url: doc.url,
        })),
        category: context.params.category,
      },
      revalidate: 86400, // Every day
    };
  },
);

export default function HelpPageCategoryPage({ helpPages, category, footerTopApps }: Props) {
  return (
    <>
      <Head>
        <title>Help Page Categories</title>
      </Head>
      <SiteHeaderWithTopApps topApps={footerTopApps} />
      <div className="section">
        <PostPageTitle title={category} />
        <ul className="mt-4 ml-4 list-disc">
          {helpPages.map(helpPage => (
            <li key={helpPage.url} className="mb-2">
              <StyledAnchor href={`/help/${category}/${helpPage.url}`}>
                {helpPage.title}
              </StyledAnchor>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
