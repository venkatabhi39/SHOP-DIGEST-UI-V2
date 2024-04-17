import React from 'react';
import { Button } from 'flowbite-react';

import {
  DribbbleIcon,
  ShopifyIcon,
  BloggerIcon,
  WordpressIcon,
  EnvatoIcon,
} from '../../SvgIcons/IconList';

const popularLinks = [
  { name: 'Dribbble', component: 'DribbbleIcon' },
  { name: 'Shopify', component: 'ShopifyIcon' },
  { name: 'Blogger', component: 'BloggerIcon' },
  { name: 'Wordpress', component: 'WordpressIcon' },
  { name: 'Envato', component: 'EnvatoIcon' },
];

const componentMap = {
  DribbbleIcon,
  ShopifyIcon,
  BloggerIcon,
  WordpressIcon,
  EnvatoIcon,
};

export const PopularLinks = () => (
  <div className="flex flex-wrap gap-2 items-center justify-center mb-7 mx-4">
    <span className="font-semibold text-sm me-2">Popular now:</span>
    {popularLinks.map((pl, i) => {
      const ComponentName = pl.component as keyof typeof componentMap;
      const ComponentToRender = componentMap[ComponentName];
      return (
        <Button size="xs" color="light" pill className="shadow border-gray-200" key={i}>
          {React.createElement(ComponentToRender)}
          <span className="ms-1">{pl.name}</span>
        </Button>
      );
    })}
  </div>
);
