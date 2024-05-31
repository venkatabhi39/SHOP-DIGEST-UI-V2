// ServicesSection.tsx
import React from 'react';
import { SectionHeader } from '@/components/section/SectionHeader';

import FeatureListWithIcon from '@/components/Cards/ContentCards/FeatureListWithIcon';

interface ServiceItem {
  iconPath: string; // SVG content as a string
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

interface ServicesSectionProps {
  title: string;
  description: string;
  services: ServiceItem[];
  cardClasses: string;
  iconClasses: string;
  variant: string;
  iconDimension: string;
}
const servicesData: ServiceItem[] = [
  {
    iconPath:
      '<svg class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>', // SVG paths for each icon
    title: 'Marketing',
    description:
      'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
    linkText: 'Learn how to keep your funds safe',
    linkUrl: '',
  },
  {
    iconPath:
      '<svg class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>', // SVG paths for each icon
    title: 'Legal',
    description:
      'Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.',
    linkText: 'Learn how to keep your funds safe',
    linkUrl: '',
  },
  {
    iconPath:
      '<svg class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>', // SVG paths for each icon
    title: 'Business Automation',
    description:
      'Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.',
    linkText: 'Learn how to keep your funds safe',
    linkUrl: '',
  },

  // Add other services similarly
];

const Features: React.FC<ServicesSectionProps> = ({
  title,
  description,
  services,
  cardClasses,
  iconClasses,
}) => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 sm:py-16 w-full mx-auto">
      {/* <div className="mb-8 max-w-screen-md lg:mb-16 sectionHeader">
        <Heading as="h2" className="mb-4">
          {title}
        </Heading>

        <p className="">{description}</p>
      </div> */}
      <SectionHeader title={title} description={description} />
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {services.map(service => (
          <FeatureListWithIcon
            key={service.title}
            {...service}
            iconClasses={iconClasses}
            boxClasses={cardClasses}
            alignment="center"
            variant="primary"
            iconDimension="w-6 h-6 lg:w-9 lg:h-9"
          />
        ))}
      </div>
    </div>
  </section>
);

const AppFeaturesList: React.FC = () => (
  <div className="">
    <Features
      title="Designed for business teams like yours"
      description="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
      services={servicesData}
    />
  </div>
);
export default AppFeaturesList;
