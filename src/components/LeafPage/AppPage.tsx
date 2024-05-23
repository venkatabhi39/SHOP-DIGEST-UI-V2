// pages/index.tsx
import React from 'react';
import ProductOverview from './ProductOverview';
import { Heading } from '@/components/Heading';
import ExpertCardList from '@/components/Cards/ImageCards/ExpertCard';
import PricingPlan from './Sections/PricingPlan';
import SearchTags from './Sections/SearchTags';
import ProsCons from './Sections/ProsCons';
import Highlights from './Sections/Highlights';
import PlainSections from './Sections/PlainSections';

export interface PricingPlan {
  type: string; // You might want to refine this to specific color names if you have a limited set
  amount: string;
}

export interface AppDetails {
  logoUrl: string;
  name: string;
  title: string;
  rating: number;
  reviewsCount: string;
  pricing: PricingPlan[];
  highlights: string[];
}

const AppPage: React.FC = () => {
  const appDetails: AppDetails = {
    logoUrl: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/playstation.png',
    name: 'Teemill',
    title: 'Teemill: Eco Print on Demand Shopify App by Teemill',
    rating: 5.0,
    reviewsCount: '34.5k',
    pricing: [
      { type: 'blue', amount: 'Free' },
      { type: 'green', amount: '$24 / month' },
      { type: 'green', amount: '$36 / month' },
    ],
    highlights: [
      'Unlimited requests for email reviews with pictures and videos, and feedback within the email for review.',
      'Show star ratings, product and store feedback, trust badges, and a clear display of reviews.',
    ],
  };

  return (
    <div className="">
      <ProductOverview appDetails={appDetails} />
      <div className="mt-8">
        <Heading as="h2" className="mt-2 text-gray-900 dark:text-white">
          Related Articles
        </Heading>
        <ExpertCardList />
      </div>
      <div className="mt-8">
        <PricingPlan />
      </div>
      <div className="border-gray-100 border mt-5 mb-10"></div>
      <div className="mt-8">
        <SearchTags />
      </div>

      <div className="mt-8">
        <Highlights />
      </div>
      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <ProsCons />
      </div>

      <div className="mt-8">
        <PlainSections />
      </div>
    </div>
  );
};

export default AppPage;
