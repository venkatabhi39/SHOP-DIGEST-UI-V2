import { Badge, Navbar, NavbarBrand, Button } from 'flowbite-react';
import React from 'react';

import { BsShop } from 'react-icons/bs';
import { MainNavigationActions } from './MainNavigationActions';
import { MainNavigationLinks } from './MainNavigationLinks';
import { NavbarCollapse } from './NavbarCollapse';
import { NavbarToggle } from './NavbarToggle';
import { SiteLogo } from '../SiteLogo';
import { Dropdown } from '../Dropdown';
import { IoCaretDownSharp } from 'react-icons/io5';
import { Divider } from '../Divider';
import { ShopifyIcon, WordpressIcon } from '../SvgIcons/IconList';

interface IMainNavigationProps {}

export const PLATFORMS = [
  {
    id: '1',
    label: (
      <a href="/" className="flex items-center p-0 rounded-lg">
        {/* <div className="p-0.5 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
          <ShopifyIcon />
        </div> */}
        <div>
          <div className="font-medium text-sm text-left">Shopify</div>
        </div>
      </a>
    ),
  },
  {
    id: '2',
    label: (
      <a href="/" className="flex items-center p-0 rounded-lg">
        {/* <div className="p-0.5 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
          <WordpressIcon />
        </div> */}
        <div>
          <div className="font-medium text-sm text-left mb-1">Wordpress</div>
          <Badge color="success">Coming Soon</Badge>
        </div>
      </a>
    ),
  },
];

export const MainNavigation: React.FC<IMainNavigationProps> = () => {
  const [isHidden, setIsHidden] = React.useState<boolean>(true);

  return (
    <div
      className="bg-white  border-t-0"
      // style={{
      //   boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      // }}
    >
      <Navbar
        id="primaryNav"
        className=" relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      >
        <div className="w-full flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            <NavbarToggle onClick={() => setIsHidden(!isHidden)} />
            <NavbarBrand href="/">
              <SiteLogo />
            </NavbarBrand>
            <Divider className="h-5 !self-center" />
            <Dropdown
              arrowIcon={false}
              className="z-50"
              label={
                <>
                  <span className="font-sans text-gray-600 font-montserrat font-semibold me-1 text-md md:inline-block">
                    Shopify
                  </span>
                  {/* <span className="inline md:hidden mr-1">
                    <BsShop />
                  </span> */}
                  <IoCaretDownSharp className="text-gray-500 text-xs" />
                </>
              }
              items={PLATFORMS}
            />
          </div>
          <div className="flex items-center ml-auto lg:hidden">
            <Button
              size="xs"
              className="font-medium bg-transparent rounded-md ml-2 mr-2 bg-primary hover:!bg-primary-800 focus:ring-0"
            >
              Add post
            </Button>
            <a href="/" className="mr-0.5 login">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </a>
          </div>

          <NavbarCollapse className={isHidden ? 'max-lg:hidden' : 'block'}>
            <MainNavigationLinks />
          </NavbarCollapse>
          <NavbarCollapse className={isHidden ? 'max-lg:hidden' : 'block'}>
            <MainNavigationActions />
          </NavbarCollapse>
        </div>
      </Navbar>
    </div>
  );
};
