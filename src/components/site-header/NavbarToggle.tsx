import { ButtonProps } from 'flowbite-react';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IconButton } from '../buttons/IconButton';

interface INavbarToggleProps extends ButtonProps {}

export const NavbarToggle: React.FC<INavbarToggleProps> = ({ onClick }) => (
  <IconButton
    description="Open main menu"
    data-collapse-toggle="mobile-menu-2"
    className="ml-1 ring-gray-100 lg:hidden hover:bg-white hover:text-sdGray-text focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="mobile-menu-2"
    aria-expanded="false"
    icon={<RxHamburgerMenu className="w-6 h-6" size="20px" />}
    onClick={onClick}
  />
);
