/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/label-has-associated-control,react/no-unescaped-entities,jsx-a11y/control-has-associated-label */
import { GetStaticPaths, GetStaticProps } from 'next';
import { BsPlusCircle, BsStopCircle } from 'react-icons/bs';
import { BiMinusCircle } from 'react-icons/bi';
import Head from 'next/head';
import PageContainer from '@/components/appPage/PageContainer';
import HeroSection from '@/components/appPage/HeroSection';
import AppDescription from '@/components/appPage/AppDescription';
import Navigation, { NavigationLink } from '@/components/appPage/Navigation';
import AppCard, { AppCardSection, AppCardSubSectionTitle } from '@/components/appPage/AppCard';
import AppPricingSection from '@/components/appPage/AppPricingSection';
import Faqs from '@/components/appPage/Faqs';
import { RelatedAppsTable } from '@/components/appPage/RelatedAppsTable';
import connectToWordpressDBMongoose from '@/utils/connectToWordpressDB.mongoose';
import { staticPropsPageNotFoundResult } from '@/constants';
import {
  formatAppName,
  getAlternateAppsData,
  getAppBySlug,
  getCategoryApps,
  getFirstPaidPlanIfExists,
} from '@/services/appPages.service';
import type { AppsData, PropsWithAppData } from '@/models/appsData.model';
import { FlexColumn } from '@/components/appPage/FlexColumn';
import TickMarkedList from '@/components/appPage/TickMarkedList';
import { StyledAnchor } from '@/components/StyledLink';
import {
  getLatestPositiveReview,
  getReviewsDistributionByCountry,
  ReviewDistributionByCountry,
} from '@/services/appRating.service';
import type { RatingData } from '@/models/appRating.model';
import AppComparisonSection from '@/components/appPage/AppComparisonSection';
import AppAlternativesSection from '@/components/appPage/AppAlternativesSection';
import AppInNutShellSection from '@/components/appPage/AppInNutShellSection';
import AppSupportSection from '@/components/appPage/AppSupportSection';
import AppImageGallerySection from '@/components/appPage/AppImageGallerySection';
import RelatedApps from '@/components/appPage/RelatedAppsSection';
import styles from './[appId].module.scss';
import withFooterTopApps from '@/utils/withFooterTopApps';
import SectionContainer from '@/components/appPage/SectionContainer';
import { HiHome } from 'react-icons/hi';
import { FaShopify } from 'react-icons/fa';
import List from '@/components/List';
import InlineBreadCrumb from '@/components/appPage/InlineBreadCrumb';
import { PropsWithFooterTopApps } from '@/types/common.types';
import SiteHeaderWithTopApps from '@/components/siteHeader/SiteHeaderWithTopApps';

type AppPageProps = PropsWithFooterTopApps<
  PropsWithAppData<{
    reviewsDistributionByCountry: ReviewDistributionByCountry;
    alternativeApps: AppsData[];
    comparedApps: AppsData[];
    relatedCategoryAppsData: Record<
      string,
      {
        totalPaidPlans: number;
        'app-slug': string;
        hasFreePlan: boolean;
        id: number;
        rating?: null | number;
        reviews?: null | number;
        appName?: null | string;
        planPrice?: null | string;
        planName?: null | string;
        icon?: null | string;
      }[]
    >;
    latestPositiveReview: RatingData | null;
  }>
>;

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps<AppPageProps, { appId: string }> = withFooterTopApps(
  async context => {
    if (!context.params) {
      return staticPropsPageNotFoundResult;
    }

    const { appId: appSlug } = context.params;
    await connectToWordpressDBMongoose();

    const app = await getAppBySlug(appSlug);
    if (!app) return staticPropsPageNotFoundResult;

    const appId = app.app_id;
    const [
      reviewsDistributionByCountry,
      latestPositiveReview,
      categoryApps,
      { comparedApps, alternativeApps },
    ] = await Promise.all([
      getReviewsDistributionByCountry(appId),
      getLatestPositiveReview(appId),
      getCategoryApps(app['categories-list']),
      getAlternateAppsData(app['related-apps-list'], app['related-apps-list-other']),
    ]);

    // const now = new Date();
    // const currWeek = now.getDay();
    // let daysToRevalidate = 0; // assume it's monday

    // // if sunday
    // if (currWeek === 0) {
    //   daysToRevalidate = 1;
    // } else if (currWeek > 1) {
    //   // day other than sunday and monday
    //   daysToRevalidate = 7 - currWeek;
    // }

    return {
      revalidate: 7 * 24 * 60 * 60, // Every week
      props: {
        appsData: app,
        reviewsDistributionByCountry,
        latestPositiveReview: JSON.parse(JSON.stringify(latestPositiveReview)),
        alternativeApps,
        comparedApps,
        relatedCategoryAppsData: Object.fromEntries(
          Object.keys(categoryApps).map(key => [
            key,
            categoryApps[key].map(appInCategory => {
              const firstPaidPlan = getFirstPaidPlanIfExists(appInCategory);

              return {
                'app-slug': appInCategory['app-slug'],
                id: appInCategory.app_id,
                reviews: appInCategory['total-reviews'],
                rating: appInCategory['overall-rating'],
                appName: appInCategory['app-name'],
                planPrice: firstPaidPlan?.planPrice ?? '-',
                planName: firstPaidPlan?.planName ?? '-',
                icon: appInCategory.icon,
                hasFreePlan: (appInCategory['free-plan-count'] || 0) > 0,
                developer: appInCategory.developer || null,
                totalPaidPlans: appInCategory['paid-plan-count'] || 0,
              };
            }),
          ]),
        ),
      },
    };
  },
);

// const GreenTick = ({ className }: PropsWithClassName) => (
//   <svg
//     className={classNames(
//       className,
//       'flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mr-2',
//     )}
//     fill="currentColor"
//     viewBox="0 0 20 20"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       fillRule="evenodd"
//       d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// const RedCross = ({ className }: PropsWithClassName) => (
//   <svg
//     className={classNames(
//       '!w-3 !h-3 mr-2 mt-2 text-orange-600 dark:text-orange-500 flex-shrink-0',
//       className,
//     )}
//     aria-hidden="true"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 14 14"
//   >
//     <path
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//     />
//   </svg>
// );

const TopBenefitsOfApp = ({ appsData }: { appsData: AppsData }) => {
  const benefits: { title: string; details: string }[] = [];
  for (let i = 1; i < 4; i += 1) {
    if (appsData[`benefit${i}`]) {
      benefits.push({
        title: appsData[`benefit${i}`],
        details: appsData[`benefit${i}-details`],
      });
    }
  }

  if (benefits.length === 0) return null;

  return (
    <List
      listTitle={`The top three benefits of using ${formatAppName(
        appsData['app-name'],
      )} Shopify app are:`}
      listStyle="disc"
    >
      {benefits.map((benefit, i) => (
        <span key={i}>
          <b>{benefit.title}:</b> <span>{benefit.details}</span>
        </span>
      ))}
    </List>
  );
};

export default function AppPage({
  footerTopApps,
  appsData,
  relatedCategoryAppsData,
  // reviewsDistributionByCountry,
  latestPositiveReview,
  alternativeApps,
  comparedApps,
}: AppPageProps) {
  const pageTitle = `${formatAppName(
    appsData['app-name'],
  )} | Features, Reviews, Pricing | Shop Digest`;
  const pageDescription = `Learn more about ${formatAppName(
    appsData['app-name'],
  )}.  Know more about its features, benefits, pricing plans, support details and also look at the detailed review analysis. Install ${formatAppName(
    appsData['app-name'],
  )} on your Shopify store now.`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
      </Head>
      <SiteHeaderWithTopApps topApps={footerTopApps} />
      <PageContainer className={styles.pageContainer}>
        <FlexColumn>
          {/* BreadCrumbs */}
          <SectionContainer>
            <InlineBreadCrumb
              items={[
                {
                  icon: HiHome,
                  content: <StyledAnchor href="/apps">Apps</StyledAnchor>,
                },
                {
                  icon: FaShopify,
                  content: <StyledAnchor href="/apps/shopify">Shopify</StyledAnchor>,
                },
                {
                  content: <span className="text-primary">{appsData['app-name']}</span>,
                },
              ]}
            />
          </SectionContainer>
          <AppDescription latestPositiveReview={latestPositiveReview} appData={appsData} />
          <div className="pb-8 bg-sdGray-light">
            <Navigation>
              <NavigationLink href="#about">About</NavigationLink>
              <NavigationLink href="#features">Features</NavigationLink>
              <NavigationLink href="#pricing">Pricing</NavigationLink>
              <NavigationLink href="#integrations">Integrations</NavigationLink>
              <NavigationLink href="#reviews">Reviews</NavigationLink>
              <NavigationLink href="#support">Support</NavigationLink>
              <NavigationLink href="#faq">Faqs</NavigationLink>
              <NavigationLink href="#relatedApps">Related Apps</NavigationLink>
            </Navigation>
            <HeroSection
              className="pt-4 lg:pt-6"
              rightSection={
                comparedApps.length > 0 && (
                  <AppAlternativesSection
                    mainSectionTitle="Alternatives"
                    comparedApps={comparedApps}
                    title={`Alternatives to ${formatAppName(appsData['app-name'])}:`}
                  />
                )
              }
            >
              <AppImageGallerySection appsData={appsData} />
              <AppInNutShellSection appsData={appsData} />
              <AppCard id="features" sectioned title="Salient Features" expandable>
                <AppCardSection>
                  <AppCardSubSectionTitle
                    title={`Key Features and Benefits of ${appsData['app-name']} App:`}
                  />
                  <div className="space-y-4">
                    <div className="mb-6">
                      <p className="mb-4">
                        {appsData['app-name']} offers the following key features to Shopify store
                        owners:
                      </p>
                      {appsData['features-list'] != null && (
                        <TickMarkedList list={appsData['features-list']} />
                      )}
                    </div>
                    <TopBenefitsOfApp appsData={appsData} />
                    {appsData['plus-certified'] === 'true' && (
                      <p>
                        Additionally, {appsData['app-name']} is a <b>Shopify Plus Certified app</b>{' '}
                        that is rigorously tested to meet the performance standards of larger
                        enterprises, making it a reliable choice for high-volume businesses.
                      </p>
                    )}
                    <p>
                      To know more information on {appsData['app-name']}, click{' '}
                      <StyledAnchor primary href={appsData['app-url'] || '#'}>
                        here.
                      </StyledAnchor>
                    </p>
                    {appsData['demo-store-url'] !== null && (
                      <p>
                        If you are interested, check out the{' '}
                        <StyledAnchor primary href={appsData['demo-store-url']}>
                          {appsData['app-name']}&apos;s demo store
                        </StyledAnchor>{' '}
                        before installing on your Shopify store.
                      </p>
                    )}
                    {appsData['featured-story-link'] && (
                      <p>
                        Also, check out how the {appsData['app-name']} app got{' '}
                        <StyledAnchor primary href={appsData['featured-story-link']}>
                          featured in Shopify guide
                        </StyledAnchor>{' '}
                        for running a successful store.
                      </p>
                    )}
                  </div>
                </AppCardSection>
              </AppCard>
              <AppPricingSection appsData={appsData} />
              <AppCard id="reviewsSection" title="Reviews" sectioned>
                <AppCardSection>
                  <AppCardSubSectionTitle
                    title={`${formatAppName(appsData['app-name'])} Reviews:`}
                  />
                  <FlexColumn>
                    <p>
                      {appsData['app-name']} has an overall rating of {appsData['overall-rating']}{' '}
                      stars from a total of {(appsData['total-reviews'] ?? 0).toLocaleString()}{' '}
                      reviews on the Shopify app store. Of these,{' '}
                      {(appsData['total-reviews']
                        ? (((appsData['4star-reviews'] || 0) + (appsData['5star-reviews'] || 0)) /
                            appsData['total-reviews']) *
                          100
                        : 0
                      ).toFixed(2)}
                      % are positive,{' '}
                      {(appsData['total-reviews']
                        ? ((appsData['3star-reviews'] || 0) / appsData['total-reviews']) * 100
                        : 0
                      ).toFixed(2)}
                      % are neutral, and{' '}
                      {(appsData['total-reviews']
                        ? (((appsData['1star-reviews'] || 0) + (appsData['2star-reviews'] || 0)) /
                            appsData['total-reviews']) *
                          100
                        : 0
                      ).toFixed(2)}
                      % are negative.
                    </p>
                    <div className="grid gap-x-24 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                      <div className="flex justify-between">
                        <p className="whitespace-nowrap flex flex-row items-center">
                          <BsPlusCircle className="reactIcon text-green-500" />{' '}
                          <span className="align-middle whitespace-nowrap">
                            <b className="font-medium">Positive Reviews</b> -{' '}
                            {(
                              (appsData['4star-reviews'] || 0) + (appsData['5star-reviews'] || 0)
                            ).toLocaleString()}
                          </span>
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="whitespace-nowrap flex flex-row items-center">
                          <BsStopCircle className="reactIcon" />{' '}
                          <span className="whitespace-nowrap">
                            <b className="font-medium">Neutral Reviews</b> -{' '}
                            {(appsData['3star-reviews'] || 0).toLocaleString()}
                          </span>
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="whitespace-nowrap flex flex-row items-center">
                          <BiMinusCircle className="reactIcon text-red-600" />{' '}
                          <span className="align-middle whitespace-nowrap">
                            <b className="font-medium">Negative Reviews</b> -{' '}
                            {(
                              (appsData['2star-reviews'] || 0) + (appsData['1star-reviews'] || 0)
                            ).toLocaleString()}
                          </span>
                        </p>
                      </div>
                    </div>
                  </FlexColumn>
                </AppCardSection>
              </AppCard>
              <AppComparisonSection appsData={appsData} alternativeApps={alternativeApps} />
              <AppSupportSection appsData={appsData} />
              <AppCard id="integrationsSection" title="Integrations" sectioned expandable>
                <AppCardSection>
                  <AppCardSubSectionTitle
                    title={`${appsData['app-name']} Featured Integrations:`}
                  />
                  <FlexColumn>
                    <p>
                      The list of top Shopify apps or features or software tools that{' '}
                      {appsData['app-name']} seamlessly integrates are given below:
                    </p>
                    {appsData['integrations-list'] && (
                      <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        {appsData['integrations-list'].map(integrationItem => (
                          <li>
                            <div className="inline-block max-w-[90%] align-top">
                              {integrationItem}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    <AppCard className="!bg-orange-50 dark:!bg-orange-700">
                      <FlexColumn>
                        <div className="space-y-2">
                          <AppCardSubSectionTitle
                            title={`Looking to install ${appsData['app-name']} app on your store?`}
                          />
                          <p>
                            ShopDigest helps businesses upgrade their Shopify stores by offering
                            easy app installation services.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <AppCardSubSectionTitle title="Why Choose ShopDigest?" />
                          <TickMarkedList
                            list={[
                              'Highly experienced and vetted team for successful apps installation',
                              'Assured support and guidance throughout the installation and beyond',
                              'Customized services to meet unique business needs',
                              '30-day no questions asked refund policy',
                              'Lowest pricing guaranteed (Starts at just $10/Hour)',
                            ]}
                          />
                        </div>
                        <p>
                          With our experts on board, you can have peace of mind and use your
                          valuable time to focus on improving your business.{' '}
                          <StyledAnchor
                            primary
                            href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_EMAIL}`}
                            target="_blank"
                          >
                            Contact us
                          </StyledAnchor>{' '}
                          today to experience the ease and convenience of our app installation
                          services!
                        </p>
                      </FlexColumn>
                    </AppCard>
                  </FlexColumn>
                </AppCardSection>
              </AppCard>
              {/* {appsData.developer && ( */}
              <AppCard id="developerSection" title="Developer Profile">
                <p>
                  {appsData.developer &&
                    `${appsData.developer} is the developer of the ${formatAppName(
                      appsData['app-name'],
                    )}.`}{' '}
                  They have about {appsData['developer-experience']} of experience in developing
                  Shopify apps with a portfolio of {appsData['developer-apps-count']} Shopify app(s)
                  and an average rating of {appsData['developer-rating']} stars.{' '}
                  {appsData['developer-website'] && (
                    <span>
                      To learn more about Developer and explore their app(s), visit their official
                      website at{' '}
                      <StyledAnchor href={appsData['developer-website']} target="_blank" primary>
                        {appsData['developer-website']}.
                      </StyledAnchor>
                    </span>
                  )}
                </p>
              </AppCard>
              {/* )} */}
              <Faqs appsData={appsData} />
              {appsData['categories-list']?.map((category, i) => (
                <AppCard
                  id="relatedAppsSection"
                  sectioned
                  key={i}
                  expandable
                  expandableMaxHeight={400}
                >
                  <AppCardSection key={i}>
                    <AppCardSubSectionTitle title={`Top ${category} Shopify Apps:`} />
                    <p className="mb-4">
                      Discover and compare ratings, total reviews, and prices of top Shopify apps in
                      the {category} category to find the perfect solution for your business.
                    </p>
                    <RelatedAppsTable apps={relatedCategoryAppsData[category]} />
                  </AppCardSection>
                </AppCard>
              ))}
            </HeroSection>
          </div>
        </FlexColumn>
        <RelatedApps relatedApps={relatedCategoryAppsData} />
      </PageContainer>
    </>
  );
}
