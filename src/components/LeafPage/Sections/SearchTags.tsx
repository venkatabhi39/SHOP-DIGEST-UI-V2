import React from 'react';
import AnchorLink from '@/components/Links/AcnhorLink';
import { Heading } from '@/components/Heading';

const CategoryLinks = () => {
  return (
    <div className="">
      <Heading as="h3" className="mt-5 mb-6 text-gray-900 dark:text-white">
        Seacrh Tags
      </Heading>
      <ul className="flex flex-wrap gap-3 p-4 px-0">
        <li className="">
          <AnchorLink href="#" variant="category">
            Writers near Delhi
          </AnchorLink>
        </li>
        <li className="">
          <AnchorLink href="#" variant="category">
            Writers near Delhi
          </AnchorLink>
        </li>
        <li className="">
          <AnchorLink href="#" variant="category">
            Writers near Delhi
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default CategoryLinks;
