import AppCard from '@/components/appPage/AppCard';
import { AppsData } from '@/models/appsData.model';
import { RatingData } from '@/models/appRating.model';
import shopifyIconProps from '@/assets/shopify-icon.svg';
import { formatAppName } from '@/services/appPages.service';
import Button from '@/components/Button';
import TickMarkedList from '@/components/appPage/TickMarkedList';
import { StyledAnchor } from '../StyledLink';
import StarRating from '../StarRating';
import PositiveReview from './PositiveReview';
import HeroSectionRegisterForm from './HeroSectionRegisterForm';
import SectionContainer from './SectionContainer';
import { PropsWithChildren } from 'react';
import { PropsWithClassName } from '@/types/common.types';
import classNames from 'classnames';
import sofieImage from '@/assets/sofia-mcguire.png';
import Image from 'next/image';

const Container = ({ children, className }: PropsWithChildren<PropsWithClassName>) => (
  <div className={classNames('space-y-3 lg:pl-6 lg:pr-14 overflow-hidden', className)}>
    {children}
  </div>
);

export default function AppDescription({
  appData,
  latestPositiveReview,
}: {
  appData: AppsData;
  latestPositiveReview: RatingData | null;
}) {
  return (
    <SectionContainer>
      <div className="grid grid-cols-1 max-lg:gap-y-4 max-w-full lg:grid-cols-[150px_auto_30%] grid-rows-[max-content_1fr]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-auto inline-block max-w-[150px] mx-auto rounded-lg bg-gray-200 dark:bg-gray-800 lg:row-span-2"
          alt=""
          src={appData.icon || shopifyIconProps.src}
        />
        <Container>
          <div>
            <h1 className="text-inherit font-extrabold inline">
              {formatAppName(appData['app-name'])}
            </h1>{' '}
            {appData.developer && (
              <span>
                by{' '}
                <StyledAnchor primary href="#">
                  {appData.developer}
                </StyledAnchor>
              </span>
            )}
          </div>
          <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-1">
            <StarRating rating={appData['overall-rating']} />
            {appData['total-reviews'] && (
              <span className="text-sm">({appData['total-reviews'].toLocaleString()} Ratings)</span>
            )}
            {appData['categories-list'] != null &&
              appData['categories-list'].slice(0.4).map(category => (
                <span
                  key={category}
                  className="inline-block bg-sdGray-light rounded px-2 py-1 text-sm font-medium border border-sdGray-border"
                >
                  {category}
                </span>
              ))}
          </div>
          <hr />
        </Container>
        <HeroSectionRegisterForm appsData={appData} className="lg:row-span-2" />
        <Container className="mt-3">
          <PositiveReview className="w-full" latestPositiveReview={latestPositiveReview} />
          <div>
            {(appData.tagline || appData['features-list-gpt'] != null) && (
              <p className="!text-primary font-bold">Highlights</p>
            )}
            <p>
              <b className="font-semibold">{appData.tagline}</b>
            </p>
            {appData['features-list'] != null && (
              <TickMarkedList className="my-3" list={appData['features-list'].slice(0, 3)} />
            )}
          </div>
          <AppCard isOnWhiteBg className="!py-4 border-2 !border-primary lg:w-11/12">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <p>
                <b className="font-normal">
                  Interested? Get in touch with our team and we&apos;ll provide you with a custom
                  estimate.
                </b>
              </p>
              <Button
                primary
                className="whitespace-nowrap max-md:w-full flex flex-row items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
                  />
                </svg>
                <span>Book now</span>
              </Button>
            </div>
          </AppCard>
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                width={24}
                height={24}
                className="w-6 h-6 mr-2 rounded-full border-2 border-white dark:border-gray-800"
                src={sofieImage}
                alt="bonnie avatar"
              />
              <span>
                Installation service $5/hour <span className="line-through">$9/hour</span> first 5
                hours
              </span>
            </div>
            <div className="flex items-center text-sm">
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
              </svg>
              <span>
                Installed by Ecomhero and guaranteed by{' '}
                <StyledAnchor primary href="/">
                  ShopDigest
                </StyledAnchor>
              </span>
            </div>
          </div>
        </Container>
      </div>
    </SectionContainer>
  );
}
