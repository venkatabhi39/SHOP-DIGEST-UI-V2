import React from 'react';
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
    <div className="py-8 px-4 mx-auto max-w-[85rem] sm:py-16 lg:px-6">
      <div className="grid max-w-screen-xl  pt-20 pb-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto lg:col-span-7">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          {description.map((desc, index) => (
            <p key={index} className="text-gray-600 mb-4">
              {desc}
            </p>
          ))}
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:block lg:pl-12">
          <ul role="list" className="sm:!pt-0 lg:mt-0 pt-2 my-7 space-y-5 dark:border-gray-700">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-8 sm:flex-row">
            {actions.map((action, index) => (
              <a
                key={index}
                href={action.url}
                className={`inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg focus:ring-4 ${
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