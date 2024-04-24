// ServicesSection.tsx
import React from 'react';
import { Heading } from '@/components/Heading';
import FeatureListWithIcon from '@/components/Cards/FeatureListWithIcon';

interface ServicesSectionProps {
  title: string;
  description: string;
  services: ServiceItem[];
}
const ServicesSection: React.FC<ServicesSectionProps> = ({ title, description, services }) => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 max-w-screen-xl sm:py-16 lg:px-0">
      <div className="max-w-screen-md mb-8 lg:mb-16 sectionHeaderLeft">
        <Heading as="h2" className="mb-4">
          {title}
        </Heading>

        <p className="">{description}</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {services.map(service => (
          <FeatureListWithIcon key={service.title} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
