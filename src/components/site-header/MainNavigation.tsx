import { Badge, Navbar, NavbarBrand } from 'flowbite-react';
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
        <div className="p-0.5 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
          <ShopifyIcon />
        </div>
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
        <div className="p-0.5 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
          <WordpressIcon />
        </div>
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
      className="bg-white border border-t-0"
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
            <NavbarBrand href="/">
              <SiteLogo />
            </NavbarBrand>
            <Divider className="h-5 !self-center" />
            <Dropdown
              arrowIcon={false}
              label={
                <>
                  <span className="hidden font-sans text-gray-600 font-montserrat font-semibold me-1 text-md md:hidden xl:inline-block">
                    Shopify
                  </span>
                  <span className="inline xl:hidden mr-1">
                    <BsShop />
                  </span>
                  <IoCaretDownSharp className="text-gray-500 text-xs" />
                </>
              }
              items={PLATFORMS}
            />
          </div>
          <NavbarToggle onClick={() => setIsHidden(!isHidden)} />
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
