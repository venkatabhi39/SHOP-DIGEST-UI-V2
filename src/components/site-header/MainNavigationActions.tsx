import React from 'react';
import { FaBell } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';
import { IconButton } from '../buttons/IconButton';
// import { Button } from '../buttons/Button';
import { Button } from 'flowbite-react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { ArrowRightIcon, SearchIcon } from '../SvgIcons/IconList';

interface IMainNavigationActionsProps {}

export const MainNavigationActions: React.FC<IMainNavigationActionsProps> = () => (
  <div className="flex items-left gap-3 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
    {/* <IconButton
      description="Open notification"
      icon={<FaBell />}
      className="hover:text-primary-600"
    /> */}
    {/* <IconButton description="Open search" icon={<HiSearch />} className="hover:text-black" /> */}
    {/* <a href="/">
      <Button size="md" colorScheme="white" variant="outline">
        Add post
      </Button>
    </a> */}
    {/* <SearchIcon classProp="text-gray-700 hover:text-black dark:text-white" /> */}

    <Button
      size="sm"
      pill
      className="border-primary-700 font-semibold md:ml-[-5px] lg:ml:0 text-left lg:text-center bg-transparent hover:!bg-primary-50 text-primary-700 hover:text-black focus:ring-0 px-3"
    >
      Login
    </Button>

    <Button
      size="sm"
      pill
      className="font-semibold bg-transparent  bg-primary hover:!bg-primary-900 focus:ring-0 px-3"
    >
      Add post <ArrowRightIcon classProp="ml-1 h-5 w-5" />
    </Button>
  </div>
);
