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

const sectionProps = {
  list1: {
    title: 'Highlights',
    data: [
      {
        title:
          'Unlimited requests for email reviews with pictures and videos, and within the email for review.',
        icon: (
          <svg
            className="flex-shrink-0 w-5 h-5 text-primary dark:text-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title:
          'Show star ratings, product and store feedback, trust badges, and a display of reviews.',
        icon: (
          <svg
            className="flex-shrink-0 w-5 h-5 text-primary dark:text-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title:
          'Unlimited requests for email reviews with pictures and videos, and within the email for review.',
        icon: (
          <svg
            className="flex-shrink-0 w-5 h-5 text-primary dark:text-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title:
          'Show star ratings, product and store feedback, trust badges, and a display of reviews.',
        icon: (
          <svg
            className="flex-shrink-0 w-5 h-5 text-primary dark:text-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  },
};

const Highlights: React.FC<ListWithContentProps> = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="mx-auto">
      <div className="">
        {sectionProps.list1?.title && (
          <Heading as="h3" className="mb-4 text-gray-500">
            {sectionProps.list1?.title}
          </Heading>
        )}
        <ul role="list" className="sm:!pt-0 lg:mt-0 pt-2 my-7 space-y-5 ">
          {sectionProps.list1?.data?.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Highlights;
