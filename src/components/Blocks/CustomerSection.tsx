// CustomerSection.tsx
import React from 'react';
import { Heading } from '@/components/Heading';
import CustomerCard from '@/components/Cards/CustomerCard';

export interface Customer {
  since: number;
  logo: string;
  description: string;
  website: string;
}

interface CustomerSectionProps {
  customers: Customer[];
}

const CustomerSection: React.FC<CustomerSectionProps> = ({ customers }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
        <Heading as="h2" className="mt-2 text-center">
          You'll be in good company
        </Heading>
        <p className="text-center max-w-lg mx-auto mt-3">
          We use an agile approach to test assumptions and connect with the needs of your audience
          early and often.
        </p>
        <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0 md:mb-8 md:mt-12">
          {customers.map((customer, index) => (
            <CustomerCard key={index} customer={customer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
