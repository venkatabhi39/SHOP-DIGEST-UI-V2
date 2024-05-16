import React from 'react';
import AnchorLink from '@/components/Links/AcnhorLink';
import { ArrowRightIcon } from '../SvgIcons/IconList';
import CategoryLinks from '@/components/Blocks/CategoryLinks';
import CategoryLinksWithIcon from '@/components/Blocks/CategoryLinksWithIcon';

const AnchorLinkList = () => {
  return (
    <div className="mt-6">
      <div className="py-5">
        <h3>Default Links</h3>
        <ul className="flex flex-wrap gap-3 p-4 px-0">
          <li className="mr-4">
            <AnchorLink href="#" variant="default">
              Writers near Delhi
            </AnchorLink>
          </li>
          <li className="mr-4">
            <AnchorLink href="#" variant="default">
              Writers near Delhi
            </AnchorLink>
          </li>
          <li className="mr-4">
            <AnchorLink href="#" variant="default">
              Writers near Delhi
            </AnchorLink>
          </li>
          <li className="mr-4">
            <AnchorLink href="#" variant="default">
              Writers near Delhi
            </AnchorLink>
          </li>
        </ul>
      </div>
      <div className="py-5">
        <h3>Button with href</h3>
        <AnchorLink href="#" variant="button" size="small" icon={ArrowRightIcon} classProp="mt-0">
          Go to page
        </AnchorLink>

        <AnchorLink href="#" variant="button" size="" icon={ArrowRightIcon} classProp="mt-0 ml-3">
          Go to page
        </AnchorLink>
      </div>
      {/* <div className="py-5">
        <h3>Beliebte Motorrad-Modelle</h3>
        <AnchorLink href="#" variant="subtle" classProp="ml-0">
          Subtle one
        </AnchorLink>
        <AnchorLink href="#" variant="subtle" classProp="ml-3">
          Subtle two
        </AnchorLink>
        <AnchorLink href="#" variant="subtle" classProp="ml-3">
          Subtle Three
        </AnchorLink>
      </div> */}

      <div className="py-5">
        <CategoryLinks />
      </div>

      <div className="py-5 mt-2">
        <CategoryLinksWithIcon />
      </div>
    </div>
  );
};

export default AnchorLinkList;
