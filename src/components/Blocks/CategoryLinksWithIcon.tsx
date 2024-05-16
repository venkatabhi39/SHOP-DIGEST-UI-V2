import React from 'react';
import AnchorLink from '@/components/Links/AcnhorLink';
import { LineDownRight } from '../SvgIcons/IconList';

const CategoryLinks = () => {
  return (
    <div className="">
      <h3>Category List</h3>
      <ul className="grid gap-y-6 grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:py-6 xl:grid-cols-6 xl:py-4">
        <li className="mr-4">
          <AnchorLink href="#" variant="categoryBox" icon={LineDownRight}>
            Entertainment
          </AnchorLink>
        </li>
        <li className="mr-4">
          <AnchorLink href="#" variant="categoryBox" icon={LineDownRight}>
            Shopping
          </AnchorLink>
        </li>
        <li className="mr-4">
          <AnchorLink href="#" variant="categoryBox" icon={LineDownRight}>
            Tools
          </AnchorLink>
        </li>
        <li className="mr-4">
          <AnchorLink href="#" variant="categoryBox" icon={LineDownRight}>
            Accessibility
          </AnchorLink>
        </li>
        <li className="mr-4">
          <AnchorLink href="#" variant="categoryBox" icon={LineDownRight}>
            Art & Design
          </AnchorLink>
        </li>
        <li className="mr-4">
          <AnchorLink href="#" variant="categoryBox" icon={LineDownRight}>
            Entertainment
          </AnchorLink>
        </li>
        <li className="mr-4">
          <AnchorLink href="#" variant="categoryBox" icon={LineDownRight}>
            Entertainment
          </AnchorLink>
        </li>
        <li className="mr-4">
          <AnchorLink href="#" variant="categoryBox" icon={LineDownRight}>
            Shopping
          </AnchorLink>
        </li>
        <li className="mr-4">
          <AnchorLink href="#" variant="categoryBox" icon={LineDownRight}>
            Tools
          </AnchorLink>
        </li>
        <li className="mr-4">
          <AnchorLink href="#" variant="categoryBox" icon={LineDownRight}>
            Accessibility
          </AnchorLink>
        </li>
        <li className="mr-4">
          <AnchorLink href="#" variant="categoryBox" icon={LineDownRight}>
            Art & Design
          </AnchorLink>
        </li>
        <li className="mr-4">
          <AnchorLink href="#" variant="categoryBox" icon={LineDownRight}>
            Entertainment
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default CategoryLinks;
