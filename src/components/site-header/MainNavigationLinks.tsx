import React from 'react';
import { MainNavigationLink } from './MainNavigationLink';
import FlyoutMenu from '@/components/Nav/FlyoutMenu';

interface IMainNavigationLinksProps {}

export const FEATURES = [
  // {
  //   id: '1',
  //   label: 'Apps',
  //   hasMenu: ['Shopify', 'Wordpress'],
  // },
  {
    id: '2',
    label: 'Themes',
    hasMenu: ['Eventual', 'Organizer', 'Enroute'],
  },
  {
    id: '3',
    label: 'Developers',
  },
  {
    id: '4',
    label: 'Companies',
  },
  {
    id: '5',
    label: 'Jobs',
  },
];

export const HEADER_NAVIGATION_LINKS = FEATURES.map(item => ({
  href: '/',
  ...item,
}));

export const MainNavigationLinks: React.FC<IMainNavigationLinksProps> = () => (
  <ul className="flex flex-col font-medium lg:flex-row lg:space-x-4 xl:space-x-8">
    <li>
      <FlyoutMenu />
    </li>
    {HEADER_NAVIGATION_LINKS.map(item => (
      <MainNavigationLink
        key={item.id}
        label={item.label as string}
        hasMenu={item.hasMenu as Array<any>}
      />
    ))}
  </ul>
);
