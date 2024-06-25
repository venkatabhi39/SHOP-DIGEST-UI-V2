import React from 'react';
import ChartsHero from '@/components/Charts/Sections/ChartsHero';
import HeroCards from '@/components/Charts/Sections/HeroCards';
import TabsSection from '@/components/Charts/Sections/TabsSection';
import TopDownloads from '@/components/Charts/Sections/TopDownloadsList';

const ChartsBlock: React.FC = () => {
  return (
    <>
      <div className="mt-6">
        <ChartsHero />
      </div>
      <div className="mt-4">
        <HeroCards />
      </div>
      <div className="mt-8">
        <TabsSection />
      </div>

      <div className="mt-8">
        <TopDownloads />
      </div>
    </>
  );
};

export default ChartsBlock;
