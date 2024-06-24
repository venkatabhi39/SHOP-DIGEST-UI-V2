// components/ComponentList.tsx
import React, { useState } from 'react';
import AnchorLink from '@/components/Links/AcnhorLink';
import { Heading } from '@/components/Heading';

interface ComponentItemProps {
  appName: string;
  description: string;
}

const ComponentItem: React.FC<ComponentItemProps> = ({ appName, description }) => {
  return (
    <div className="p-2">
      <AnchorLink href="#" variant="default" size="small" classProp="">
        {appName}
      </AnchorLink>
      : {description}
    </div>
  );
};

interface ComponentListProps {
  items: ComponentItemProps[];
}

const ComponentList: React.FC<ComponentListProps> = ({ items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="space-y-2">
      <AnchorLink
        href="#"
        variant="default"
        size="small"
        classProp="inline-block mt-2"
        onClick={toggleList}
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </AnchorLink>

      {isExpanded && (
        <div className="bg-gray-50 p-4 pt-2 rounded-md">
          <Heading as="h2" className="my-2">
            Tailwind CSS Component Library
          </Heading>

          <div className="">
            {items.map((item, index) => (
              <ComponentItem key={index} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const sampleItems = [
  {
    appName: 'Invoice Hero Shopify App',
    description: 'Best for invoices to print on PDFs in Shopify stores',
  },
  {
    appName: 'Invoice Hero Shopify App',
    description: 'Best for invoices to print on PDFs in Shopify stores',
  },
  {
    appName: 'Invoice Hero Shopify App',
    description: 'Best for invoices to print on PDFs in Shopify stores',
  },
  {
    appName: 'Invoice Hero Shopify App',
    description: 'Best for invoices to print on PDFs in Shopify stores',
  },
  {
    appName: 'Invoice Hero Shopify App',
    description: 'Best for invoices to print on PDFs in Shopify stores',
  },
  {
    appName: 'Invoice Hero Shopify App',
    description: 'Best for invoices to print on PDFs in Shopify stores',
  },
  {
    appName: 'Invoice Hero Shopify App',
    description: 'Best for invoices to print on PDFs in Shopify stores',
  },
  // Add more items as needed
];

const CategoryHero = () => {
  return (
    <div className="container">
      <Heading as="h1" className="my-2 font-bold">
        Python starter templates and themes Flowbite
      </Heading>

      <p>
        The studio-quality three-mic array is designed to reduce feedback, so The studio-quality
        three-mic array is designed to reduce feedback.
      </p>
      <ComponentList items={sampleItems} />
    </div>
  );
};

export default CategoryHero;
