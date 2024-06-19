import React from 'react';
import Tabs from '@/components/Tabs/TabsWithUnderline/Tabs'; // Assume Tabs is exported from a file named Tabs.tsx
import TabLinks from '@/components/Tabs/TabsWithUnderline/Links';
import ExpertCardList from './ArticleCards';
import { Heading } from '@/components/Heading';

const TabsWithOutline = () => {
  const tabs = [
    {
      id: 'all-templates',
      title: 'All Templates',
      content: <ExpertCardList />,
    },
    {
      id: 'my-templates',
      title: 'My Templates',
      content: <ExpertCardList />,
    },
    {
      id: 'other-templates',
      title: 'Other Templates',
      content: <ExpertCardList />,
    },
  ];

  return (
    <div>
      <Heading as="h2" className="mb-1.5">
        Top apps
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
