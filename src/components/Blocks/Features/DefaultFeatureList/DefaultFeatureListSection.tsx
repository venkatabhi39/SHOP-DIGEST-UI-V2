// ServicesSection.tsx
import React from 'react';
import { SectionHeader } from '@/components/section/SectionHeader';

import FeatureListWithIcon from '@/components/Cards/FeatureListWithIcon';

interface ServicesSectionProps {
  title: string;
  description: string;
  services: ServiceItem[];
  cardClasses: string;
  iconClasses: string;
}
const ServicesSection: React.FC<ServicesSectionProps> = ({ title, description, services, cardClasses, iconClasses }) => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 sm:py-16 w-full mx-auto">
      {/* <div className="mb-8 max-w-screen-md lg:mb-16 sectionHeader">
        <Heading as="h2" className="mb-4">
          {title}
        </Heading>

        <p className="">{description}</p>
      </div> */}
      <SectionHeader title={title} description={description}/>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {services.map(service => (
          <FeatureListWithIcon key={service.title} {...service} iconClasses={iconClasses} boxClasses={cardClasses}/>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
