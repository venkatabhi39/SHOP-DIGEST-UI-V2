import { NavbarLink } from 'flowbite-react';
import React from 'react';

interface ISecondaryHeaderLinkProps {
  key: string;
  label: string;
}

export const SecondaryHeaderLink: React.FC<ISecondaryHeaderLinkProps> = ({ key, label }) => (
  <NavbarLink
    href="/"
    className={`font-sans transition-colors block border-0 py-2 md:py-2 px-0 lg:p-0 font-medium text-xs tracking-wide text-gray-700 hover:!text-primary ${
      label.includes('Advertise') || label.includes('Careers') ? 'hidden sm:block' : ''
    }`}
    aria-current="page"
  >
    {label}
  </NavbarLink>
);
