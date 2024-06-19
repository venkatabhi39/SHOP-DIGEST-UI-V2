import React from 'react';
import Tabs from '@/components/Tabs/TabsWithUnderline/Tabs'; // Assume Tabs is exported from a file named Tabs.tsx
import TabLinks from '@/components/Tabs/TabsWithUnderline/Links';
import AppLogoCards from '@/components/Cards/ImageCards/AppLogoCards';
import { Heading } from '@/components/Heading';

const TabsWithOutline = () => {
  const tabs = [
    {
      id: 'windows',
      title: 'Windows',
      content: <AppLogoCards />,
    },
    {
      id: 'android',
      title: 'Android',
      content: <AppLogoCards />,
    },
    {
      id: 'mac',
      title: 'Mac',
      content: <AppLogoCards />,
    },
    {
      id: 'Iphone',
      title: 'iphone',
      content: <AppLogoCards />,
    },
  ];

  return (
    <div>
      <Heading as="h2" className="mb-1.5">
        Most Popular Categories
      </Heading>
      <p>
        Browse the template gallery to discover what's possible in evolt. Click on any template to
        duplicate it and make it your own.
      </p>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsWithOutline;
