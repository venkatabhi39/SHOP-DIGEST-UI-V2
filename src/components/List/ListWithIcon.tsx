import React from 'react';
import { Heading } from '@/components/Heading';
import FeatureItem from '@/components/Features/FeatureItem';

interface ListWithContentProps {
  titleAlignment: string;
  title: string;
  description: string[];

  list1: {
    title: string;
    data: [];
  };
  list2: {
    title: string;
    data: [];
  };

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
  list1,
  list2,
  titleAlignment,
}) => (
  <section className="bg-white dark:bg-gray-900">
    {title || description ? (
      <div className={`mr-auto sectionHeader mb-8 ${titleAlignment || 'text-center'}`}>
        {title && (
          <Heading as="h2" className="mb-3">
            {title}
          </Heading>
        )}

        {description && <p className="mb-4">{description}</p>}
      </div>
    ) : null}
    <div className="mx-auto">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="border rounded-lg p-6 px-6">
          {list1?.title && (
            <Heading as="h3" className="mb-4 text-gray-500">
              {list1?.title}
            </Heading>
          )}
          <ul role="list" className="sm:!pt-0 lg:mt-0 pt-2 my-7 space-y-4 mb-0">
            {list1?.data?.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </ul>
        </div>
        <div className="border rounded-lg p-6 px-6">
          {list2?.title && (
            <Heading as="h3" className="mb-4 text-gray-500">
              {list2?.title}
            </Heading>
          )}
          <ul role="list" className="sm:!pt-0 lg:mt-0 pt-2 my-7 space-y-4 mb-0">
            {list2?.data?.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ListWithContent;
