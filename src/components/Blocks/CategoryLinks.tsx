import React from 'react';
import AnchorLink from '@/components/Links/AcnhorLink';
import { LineArrowDown } from '../SvgIcons/IconList';

const CategoryLinks = () => {
  return (
    <div className="">
      <h3>Shop By Category</h3>
      <ul className="flex flex-wrap gap-3 p-4 px-0">
        <li className="">
          <AnchorLink href="#" variant="category" size="small" icon={LineArrowDown}>
            YAMAHA
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
