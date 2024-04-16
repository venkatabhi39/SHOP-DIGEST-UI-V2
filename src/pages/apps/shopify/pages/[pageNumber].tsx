import { GetStaticPaths, GetStaticProps } from 'next';
import { Rating } from 'flowbite-react';
import connectToWordpressDBMongoose from '@/utils/connectToWordpressDB.mongoose';
import { staticPropsPageNotFoundResult } from '@/constants';
import {
  getAppsWithPagination,
  GetAppsWithPaginationResult,
  getTotalAppsCountWithoutLimit,
  PAGINATION_LIMIT,
} from '@/services/appPages.service';
import PageContainer from '@/components/appPage/PageContainer';
import Pagination from '@/components/appHomePage/Pagination';
import { StyledAnchor } from '@/components/StyledLink';
import SectionContainer from '@/components/appPage/SectionContainer';
import { FlexColumn } from '@/components/appPage/FlexColumn';
import AppCard from '@/components/appPage/AppCard';
import shopifyIconProps from '@/assets/shopify-icon.svg';
import styles from '../[appId].module.scss';
import withFooterTopApps from '@/utils/withFooterTopApps';
import SiteHeaderWithTopApps from '@/components/siteHeader/SiteHeaderWithTopApps';
import { PropsWithFooterTopApps } from '@/types/common.types';

type Props = PropsWithFooterTopApps<{
  totalPages: number;
  currPage: number;
  apps: GetAppsWithPaginationResult;
}>;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps<Props, { pageNumber: string }> = withFooterTopApps(
  async context => {
    if (!context.params) {
      return staticPropsPageNotFoundResult;
    }
    const { pageNumber: pageNumberStr } = context.params;
    const pageNumber = Number.parseInt(pageNumberStr, 10);

    await connectToWordpressDBMongoose();

    const [totalApps, apps] = await Promise.all([
      getTotalAppsCountWithoutLimit(),
      getAppsWithPagination(pageNumber, PAGINATION_LIMIT),
    ]);
    const totalPages = Math.ceil(totalApps / PAGINATION_LIMIT);

    if (pageNumber > totalPages || pageNumber < 1) return staticPropsPageNotFoundResult;

    return {
      props: {
        totalPages,
        currPage: pageNumber,
        apps,
      },
      revalidate: 604800, // Every 7 days
    };
  },
);

export default function AppPaginatedHomePage({ totalPages, currPage, apps, footerTopApps }: Props) {
  return (
    <>
      <SiteHeaderWithTopApps topApps={footerTopApps} />
      <PageContainer className={styles.pageContainer}>
        <SectionContainer className="pb-8">
          <FlexColumn>
            <h1>Shopify App Directory - Page {currPage}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {apps.map(
                ({
                  'app-slug': slug,
                  icon,
                  'app-name': appName,
                  'overall-rating': overallRating,
                  'total-reviews': totalReviews,
                }) => (
                  <AppCard className="!py-4">
                    <article className="flex flex-row xl:flex-row items-start max-w-full">
                      <a href={`/apps/shopify/${slug}`} className="mb-2 xl:mb-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={icon || shopifyIconProps.src}
                          className="mr-4 max-w-[60px] border"
                          alt={appName!}
                        />
                      </a>
                      <div className="flex flex-col justify-center">
                        <span className="mb-2 text-base font-semibold leading-tight">
                          <StyledAnchor href={`/apps/shopify/${slug}`}>
                            <h4 className="!font-medium">{appName}</h4>
                          </StyledAnchor>
                        </span>
                        <p className="max-w-sm">
                          <div className="divide-gray-700 whitespace-normal">
                            <Rating className="inline-flex">
                              <span>{overallRating}</span>
                              <Rating.Star />
                            </Rating>{' '}
                            <span>from {(totalReviews ?? 0).toLocaleString()} Reviews</span>
                          </div>
                        </p>
                      </div>
                    </article>
                  </AppCard>
                ),
              )}
            </div>
            <Pagination currPage={currPage} totalPages={totalPages} />
          </FlexColumn>
        </SectionContainer>
      </PageContainer>
    </>
  );
}
