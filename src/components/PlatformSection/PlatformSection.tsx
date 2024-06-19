import React from 'react';

import TabsWithArticleCards from '@/components/Home/Sections/TabsWithArticleCard';
import FilterWithTabs from './Sections/FilterWithTabs';
import MostPopularList from './Sections/MostPopularList';
import LogoListSection from './Sections/LogoSection';
import BannerCard from './Sections/HeroSection';
import CategorySection from './Sections/CategorySection';
import PopularApps from './Sections/PopularApps';

const Category: React.FC = () => {
  return (
    <>
      <div className="pt-6">
        <BannerCard />
      </div>

      <div className="mt-6">
        <CategorySection />
      </div>
      <div className="mt-6">
        <PopularApps />
      </div>
      <div className="pt-6">
        <TabsWithArticleCards />
      </div>

      <div className="">
        <TabsWithArticleCards />
      </div>

      <div className="">
        <TabsWithArticleCards />
      </div>

      <div className="">
        <FilterWithTabs />
      </div>

      <div className="mt-8">
        <MostPopularList />
      </div>
      <div className="mt-6">
        <LogoListSection />
      </div>
    </>
  );
};

export default Category;
