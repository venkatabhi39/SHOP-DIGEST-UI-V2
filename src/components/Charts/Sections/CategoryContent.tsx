import React from 'react';
import TabCards from './TabCards';
import ReviewBarChart from './ChartBlocks/ReviewBarChart';
import LineChart from './ChartBlocks/LineChart';
import AveragePerMonthBlock from './AveragePerMonthBlock';

const CategoryContent: React.FC = () => {
  return (
    <>
      <div className="mt-6">
        <TabCards />
      </div>
      <div className="max-w-5xl">
        <div className="mt-6 mb-10">
          <ReviewBarChart />
        </div>
        <div className="mt-6 mb-10">
          <LineChart />
        </div>

        <div className="mt-6">
          <AveragePerMonthBlock />
        </div>
      </div>
    </>
  );
};

export default CategoryContent;
