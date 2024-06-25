import React from 'react';
import { Heading } from '@/components/Heading';
import TabCards from './TabCards';
import ReviewBarChart from './ChartBlocks/ReviewBarChart';
import LineChart from './ChartBlocks/LineChart';
import AveragePerMonthBlock from './AveragePerMonthBlock';
import AppBarChart from './ChartBlocks/AppBarChart';

const CategoryContent: React.FC = () => {
  return (
    <>
      <div className="">
        <Heading as="h3" className="mt-2">
          Top category reviews by total reviews
        </Heading>
        <TabCards />
      </div>
      <div className="">
        <div className="mt-2 mb-6">
          <AppBarChart />
        </div>
        <div className="mt-2 mb-6">
          <LineChart />
        </div>

        <div className="mt-2">
          <AveragePerMonthBlock />
        </div>
      </div>
    </>
  );
};

export default CategoryContent;
