import Image from 'next/image';
import shopifyIcon from '@/assets/shopify-icon.svg';
import AppCard from '../appPage/AppCard';
import StarRating from '../StarRating';
import TickMarkedList from '../appPage/TickMarkedList';
import { FlexColumn } from '../appPage/FlexColumn';
import PositiveReview from '../appPage/PositiveReview';
import Button from '../Button';

export default function AppFilterCard() {
  return (
    <AppCard className="max-w-full overflow-hidden">
      <FlexColumn size="l" className="lg:flex-row justify-center items-center lg:items-start">
        <Image src={shopifyIcon} alt="Shopify App" className="rounded-3xl w-20 h-20" />
        <FlexColumn size="s">
          <div>
            <div className="flex flex-row flex-wrap gap-x-2 items-center">
              <h3 className="inline">Happy Birthday Marketing</h3>
              <StarRating rating={5} />
              <span className="text-sm">(748 Ratings)</span>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laborum deleniti ut
              voluptatum debitis assumenda accusamus quaerat veritatis, excepturi sint.
            </p>
          </div>
          <TickMarkedList
            list={[
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, odit.',
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, odit.',
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, odit.',
            ]}
          />
          <PositiveReview
            latestPositiveReview={{
              country: 'India',
              date: new Date().toISOString(),
              rating: 5,
              reply_message:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, odit.',
              review_id: 1,
              app_id: 1,
              time_spent: '5 years',
              review_message:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, odit.',
              store_name: 'sdf',
              timestamp: new Date().toISOString(),
              total_pages_crawled: 1,
            }}
          />
        </FlexColumn>
        <FlexColumn size="s" className="flex flex-col max-lg:w-full lg:min-w-[20%]">
          <div>
            <div className="!leading-none !text-primary !text-2xl font-semibold">$14.99</div>{' '}
            <span>per month</span>
          </div>
          <Button
            secondary
            submitBtn
            className="w-full !py-2.5 flex flex-row gap-2 items-center justify-center"
          >
            <span>Continue</span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Button>
          <Button
            primary
            submitBtn
            className="w-full !py-2.5 flex flex-row gap-2 items-center justify-center focus:!ring-0"
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
            <span>Book call</span>
          </Button>
        </FlexColumn>
      </FlexColumn>
    </AppCard>
  );
}
