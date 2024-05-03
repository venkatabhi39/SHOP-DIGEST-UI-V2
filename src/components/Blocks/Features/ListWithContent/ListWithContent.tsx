import React from 'react';
import { Heading } from '@/components/Heading';
import FeatureItem from '@/components/Features/FeatureItem';

interface ListWithContentProps {
  title: string;
  description: string[];
  features: FeatureItemProps[];
  actions: {
    text: string;
    url: string;
    primary?: boolean;
    icon?: React.ReactNode; // Allows passing custom icons
  }[];
}

const ListWithContent: React.FC<ListWithContentProps> = ({
  title,
  description,
  features,
  actions,
}) => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-5xl lg:max-w-[90%] sm:py-16 lg:px-6">
      <div className="grid  pb-8  lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="mr-auto lg:col-span-7 sectionHeader">
          <Heading as="h2" className="mb-4">
            {title}
          </Heading>

          {description.map((desc, index) => (
            <p key={index} className="mb-4">
              {desc}
            </p>
          ))}
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:block lg:pl-12 m-0 lg:ml-auto">
          <ul role="list" className="sm:!pt-0 lg:mt-0 pt-2 my-7 space-y-5 ">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-8 sm:flex-row">
            {actions.map((action, index) => (
              <a
                key={index}
                href={action.url}
                className={`sDbtn inline-flex items-center justify-center rounded-lg focus:ring-4 ${
                  action.primary
                    ? 'text-white bg-sdBlue hover:bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-900'
                    : 'text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
                }`}
              >
                {action.text}
                {action.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListWithContent;
