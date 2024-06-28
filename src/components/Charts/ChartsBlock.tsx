import React from 'react';
import { Heading } from '@/components/Heading';
import ChartsHero from '@/components/Charts/Sections/ChartsHero';
import HeroCards from '@/components/Charts/Sections/HeroCards';
import TabsSection from '@/components/Charts/Sections/TabsSection';
import TopDownloads from '@/components/Charts/Sections/TopDownloadsList';
import ImageGrid from '@/components/Charts/Sections/ImageGrid';
import CountryMap from '@/components/Charts/Sections/ChartBlocks/CountryMap';

const ChartsBlock: React.FC = () => {
  return (
    <>
      <div className="mt-6">
        <ChartsHero />
      </div>
      <div className="mt-4">
        <HeroCards />
      </div>
      <div className="mt-12">
        <TabsSection />
      </div>

      <div className="mt-12">
        <Heading as="h3" className="mt-2 mb-6">
          Toal Review changes
        </Heading>
        <TopDownloads />
      </div>

      <div className="mt-12">
        <ImageGrid />
      </div>

      <div className="mt-12">
        <CountryMap />
      </div>
    </>
  );
};

export default ChartsBlock;
