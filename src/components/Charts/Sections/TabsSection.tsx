import React from 'react';
import Tabs from '@/components/Tabs/TabsWithUnderline/Tabs'; // Assume Tabs is exported from a file named Tabs.tsx
import CategoryContent from './CategoryContent';

import { Heading } from '@/components/Heading';

const TabsContent = () => {
  return (
    <div className="pb-5 pt-5">
      <CategoryContent />
    </div>
  );
};

const TabsWithOutline = () => {
  const tabs = [
    {
      id: 'reviews',
      title: 'Reviews',
      content: <TabsContent />,
      //heading: 'Top Category apps by total reviews',
      mainHeading: false,
    },
    {
      id: 'rating',
      title: 'Rating',
      content: <div>Ratings</div>,
      //heading: 'Top Category apps by Rating',
      mainHeading: false,
    },
    {
      id: 'recommendation',
      title: 'Recommendation',
      content: <div>Recommendation</div>,
      //heading: 'Top Category apps by Recommendation',
      mainHeading: false,
    },
    {
      id: 'score',
      title: 'Score',
      content: <div>Score</div>,
      //heading: 'Top Category apps by Score',
      mainHeading: false,
    },
    {
      id: 'market-share',
      title: 'Market Share',
      content: <div>Market Share</div>,
      //heading: 'Top Category apps by Market Share',
      mainHeading: false,
    },
    {
      id: 'positions',
      title: 'Positions',
      content: <div>Positions</div>,
      //heading: 'Top Category apps by Positions',
      mainHeading: false,
    },
    {
      id: 'launch-date',
      title: 'Launch Date',
      content: <div>Launch Date</div>,
      //heading: 'Top Category apps by Launch Date',
      mainHeading: false,
    },
  ];

  return (
    <div>
      <Heading as="h2" className="mb-0">
        Analysis
      </Heading>
      <Tabs tabs={tabs} linkHide={true} />
    </div>
  );
};

export default TabsWithOutline;
