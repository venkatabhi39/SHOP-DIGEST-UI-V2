import { Navbar } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import { Dropdown } from '../Dropdown';
import { Divider } from '../Divider';
import { SecondaryHeaderLinks } from './SecondaryHeaderLinks';
import { SecondaryHeaderPayLinks } from './SecondaryHeaderPayLinks';

interface ISecondaryHeaderProps {}

export const FEATURES = [
  {
    id: '1',
    label: 'Apps',
  },
  {
    id: '2',
    label: 'Themes',
  },
  {
    id: '3',
    label: 'Agencies',
  },
  {
    id: '4',
    label: 'Find an Expert',
  },
  {
    id: '5',
    label: 'Stories',
  },
];

export const SecondaryHeader: React.FC<ISecondaryHeaderProps> = () => {
  const [isTopNavHidden, setIsTopNavHidden] = useState(false);
  let timeoutId = null;

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      // If scrolling down, hide the navbar
      setIsTopNavHidden(window.scrollY > 0);
    }
  };

  // Debounce function implemented directly
  const debounce =
    (func, delay) =>
    (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };

  const handleScroll = debounce(controlNavbar, 50);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(timeoutId);
    };
  }, []); // Empty array ensures effect is only run on mount and unmount -translate-y-full' : 'translate-y-0

  return (
    <div
      className={`bg-gray-50 border transition-transform duration-600 relative z-[99] ${
        isTopNavHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <Navbar id="secondaryNav" className="bg-gray-50 px-4 lg:px-10 py-2 mx-auto max-w-[85rem] ">
        {/* <Dropdown label="Features" items={FEATURES} /> */}
        {/* <Divider type="dark" /> */}
        <SecondaryHeaderLinks />
        {/* <Divider type="dark" className="hidden lg:inline ml-auto" /> */}
        <div className="hidden lg:inline-flex">
          <SecondaryHeaderPayLinks />
        </div>
      </Navbar>
    </div>
  );
};
