import React from 'react';
import { Dropdown, NavbarLink } from 'flowbite-react';

interface IMainNavigationLinkProps {
  label: string;
  hasMenu?: Array<any>; // Make hasMenu prop optional
}

export const MainNavigationLink: React.FC<IMainNavigationLinkProps> = ({ label, hasMenu }) => (
  <>
    {hasMenu?.length ? (
      <Dropdown
        label={
          <div className="text-gray-600 hover:!text-primary text-sm lg:text-sm xl:text-base border-b border-gray-100 lg:border-none w-full lg:w-auto text-left py-2 pr-4 pl-3 lg:py-0 lg:pr-0 lg:pl-0 md:px-1">
            {label}
          </div>
        }
        inline
        className="w-full lg:w-auto shadow-none lg:shadow-md !-left-1 !ml-0"
      >
        {hasMenu.map((menuItem, index) => (
          <Dropdown.Item key={index} className="px-6 py-3">
            {menuItem}
          </Dropdown.Item>
        ))}
      </Dropdown>
    ) : (
      <NavbarLink
        href="#"
        className="text-gray-600 hover:!text-primary text-sm lg:text-sm xl:text-base dark:text-gray-400 dark:hover:text-gray-500 !py-2 !pr-4 !pl-3 lg:!py-0 lg:!pr-0 lg:!pl-0 md:!px-1"
        // className="transition-colors block border-0 py-2 md:py-2 px-0 lg:p-0 font-montserrat text-sm font-medium text-white"
        aria-current="page"
      >
        {label}
      </NavbarLink>
    )}
  </>
);

export default MainNavigationLink;
