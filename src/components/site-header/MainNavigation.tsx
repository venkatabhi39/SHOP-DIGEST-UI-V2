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

interface IMainNavigationProps {}

export const PLATFORMS = [
  {
    id: '1',
    label: (
      <a href="/" className="flex items-center p-0 rounded-lg">
        <div className="p-0.5 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
        </div>
        <div>
          <div className="font-semibold text-sm text-left">Shopify</div>
        </div>
      </a>
    ),
  },
  {
    id: '2',
    label: (
      <a href="/" className="flex items-center p-0 rounded-lg">
        <div className="p-0.5 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
        </div>
        <div>
          <div className="font-semibold text-md">Wordpress</div>
          <Badge color="success">Coming Soon</Badge>
        </div>
      </a>
    ),
  },
];

export const MainNavigation: React.FC<IMainNavigationProps> = () => {
  const [isHidden, setIsHidden] = React.useState<boolean>(true);

  return (
    <div className="bg-white">
      <Navbar className="bg-white relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="w-full flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            <NavbarBrand href="/">
              <SiteLogo />
            </NavbarBrand>
            <Divider />
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
                  <IoCaretDownSharp className="text-gray-500 text-sm" />
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
