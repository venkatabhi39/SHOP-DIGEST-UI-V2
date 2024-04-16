import React from 'react';
import { Dropdown, Navbar } from 'flowbite-react';
import { SecondaryHeaderLink } from './SecondaryHeaderLink';

interface ISecondaryHeaderLinksProps {}

export const SECONDARY_HEADER_LINKS = [
  {
    id: '1',
    label: 'Email Updates',
  },
  {
    id: '2',
    label: 'Subscribe',
  },
  {
    id: '3',
    label: 'Contact',
  },
  {
    id: '4',
    label: 'Careers',
  },
  {
    id: '5',
    label: 'Advertise',
  },
];

export const SecondaryHeaderLinks: React.FC<ISecondaryHeaderLinksProps> = () => (
  <div className="flex lg:inline-flex">
    <ul className="flex mt-0 font-medium lg:flex-row space-x-4 lg:mt-0 xl:space-x-8">
      {SECONDARY_HEADER_LINKS.map(item => (
        <SecondaryHeaderLink key={item.id as string} label={item.label as string} />
      ))}
    </ul>

    <div className="inline-flex sm:hidden">
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <svg
            className="w-5 h-5 text-gray-700 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        }
      >
        <Dropdown.Item>Careers</Dropdown.Item>
        <Dropdown.Item>Advertise</Dropdown.Item>
      </Dropdown>
    </div>
  </div>
);
