import React from 'react';
import { MainNavigationLink } from './MainNavigationLink';

interface IMainNavigationLinksProps {}

export const FEATURES = [
  {
    id: '1',
    label: 'Apps',
    hasMenu: ['Shopify', 'Wordpress'],
  },
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
  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-1 xl:space-x-8">
    {HEADER_NAVIGATION_LINKS.map(item => (
      <MainNavigationLink
        key={item.id}
        label={item.label as string}
        hasMenu={item.hasMenu as Array<any>}
      />
    ))}
  </ul>
);
