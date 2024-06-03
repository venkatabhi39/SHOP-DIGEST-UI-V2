import React from 'react';
import { Heading } from '@/components/Heading';
import FeatureItem from '@/components/Features/FeatureItem';

interface ListWithContentProps {
  title: string;
  description: string[];

  list1: {
    title: string;
    data: [];
  };
}

const sectionProps1 = {
  list1: {
    title: 'Loved the most',
    data: [
      {
        title: 'Unlimited requests for email',
        icon: (
          <svg
            className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 11.917 9.724 16.5 19 7.5"
            ></path>
          </svg>
        ),
      },
      {
        title: 'Show star ratings',
        icon: (
          <svg
            className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 11.917 9.724 16.5 19 7.5"
            ></path>
          </svg>
        ),
      },
      {
        title: 'Unlimited requests for email',
        icon: (
          <svg
            className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 11.917 9.724 16.5 19 7.5"
            ></path>
          </svg>
        ),
      },
      {
        title: 'display of reviews.',
        icon: (
          <svg
            className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 11.917 9.724 16.5 19 7.5"
            ></path>
          </svg>
        ),
      },
    ],
  },
};

const sectionProps2 = {
  list1: {
    title: 'Disliked the most',
    data: [
      {
        title: 'Unlimited requests for email',
        icon: (
          <svg
            className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            ></path>
          </svg>
        ),
      },
      {
        title: 'Show star ratings',
        icon: (
          <svg
            className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            ></path>
          </svg>
        ),
      },
      {
        title: 'Unlimited requests for email',
        icon: (
          <svg
            className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            ></path>
          </svg>
        ),
      },
      {
        title: 'display of reviews.',
        icon: (
          <svg
            className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            ></path>
          </svg>
        ),
      },
    ],
  },
};

const ReviewsInfoOne: React.FC<ListWithContentProps> = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="mx-auto">
      <div className="">
        {sectionProps1.list1?.title && (
          <Heading as="h3" className="mb-4 text-gray-500">
            {sectionProps1.list1?.title}
          </Heading>
        )}
        <ul role="list" className="sm:!pt-0 lg:mt-0 pt-2 my-7 space-y-5 ">
          {sectionProps1.list1?.data?.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const ReviewsInfoTwo: React.FC<ListWithContentProps> = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="mx-auto">
      <div className="">
        {sectionProps2.list1?.title && (
          <Heading as="h3" className="mb-4 text-gray-500">
            {sectionProps2.list1?.title}
          </Heading>
        )}
        <ul role="list" className="sm:!pt-0 lg:mt-0 pt-2 my-7 space-y-5 ">
          {sectionProps2.list1?.data?.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const ReviewsInfo: React.FC<ListWithContentProps> = () => (
  <section className="grid grid-cols-2 gap-4">
    <div>
      <ReviewsInfoOne />
    </div>
    <div>
      <ReviewsInfoTwo />
    </div>
  </section>
);

export default ReviewsInfo;
