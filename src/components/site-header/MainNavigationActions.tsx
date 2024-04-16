import React from 'react';
import { FaBell } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';
import { IconButton } from '../buttons/IconButton';
// import { Button } from '../buttons/Button';
import { Button } from 'flowbite-react';
import { IoIosArrowRoundForward } from 'react-icons/io';

interface IMainNavigationActionsProps {}

export const MainNavigationActions: React.FC<IMainNavigationActionsProps> = () => (
  <div className="flex items-center gap-3">
    <IconButton
      description="Open notification"
      icon={<FaBell />}
      className="hover:text-primary-600"
    />
    <IconButton description="Open search" icon={<HiSearch />} className="hover:text-primary-600" />
    {/* <a href="/">
      <Button size="md" colorScheme="white" variant="outline">
        Add post
      </Button>
    </a> */}
    <a href="/">
      <Button
        size="md"
        className="bg-transparent hover:!bg-transparent text-gray-500 hover:text-primary-600"
      >
        Login
      </Button>
    </a>
    <Button
      size="md"
      className="font-semibold bg-transparent rounded-none bg-primary hover:!bg-primary-800"
    >
      Add post <IoIosArrowRoundForward size={22} />
    </Button>
  </div>
);
