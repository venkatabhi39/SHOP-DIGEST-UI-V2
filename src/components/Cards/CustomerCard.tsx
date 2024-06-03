// CustomerCard.tsx
import React from 'react';
import AnchorLink from '@/components/Links/AcnhorLink';
import { LineDownRight } from '@/components/SvgIcons/IconList';
// types.ts
export interface Customer {
  since: number;
  logo: string;
  description: string;
  website: string;
}

interface CustomerCardProps {
  customer: Customer;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer }) => {
  return (
    <div
      //href={customer.website}
      className="block py-12 px-8 text-center bg-gray-50 rounded dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <img
        src={customer.logo}
        alt="Customer Logo"
        className="mx-auto h-10 text-gray-600 dark:text-gray-400"
      />
      <p className="font-light text-gray-500 mt-3.5 mb-4">customers since {customer.since}</p>
      {customer.website && (
        <AnchorLink
          href={customer.website || '#'}
          variant="default"
          className="text-primary-600 text-sm font-semibold inline-flex items-center hover:underline"
          icon={LineDownRight}
        >
          Visit Website
        </AnchorLink>
      )}
      {/* <span className="flex justify-center items-center text-base font-medium text-primary-600 dark:text-primary-500">
        Visit website
        <svg
          className="ml-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span> */}
    </div>
  );
};

export default CustomerCard;
