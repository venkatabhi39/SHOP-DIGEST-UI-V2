import React from 'react';
import LogoSection from '@/components/Home/Sections/LogoSection';
import TabsWithArticleCards from '@/components/Home/Sections/TabsWithArticleCard';

const Category: React.FC = () => {
  return (
    <>
      <div className="">
        <LogoSection />
      </div>

      <div className="">
        <TabsWithArticleCards />
      </div>

      <div className="">
        <TabsWithArticleCards />
      </div>

      <div className="">
        <TabsWithArticleCards />
      </div>
    </>
  );
};

export default Category;
