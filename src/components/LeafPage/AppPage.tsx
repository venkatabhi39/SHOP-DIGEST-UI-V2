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
import Breadcrumb from '../Links/Breadcrumb/Breadcrumb';
import ComparisionTable from '@/components/Tables/ComparisionTable';
import ProductImageSlider from '@/components/Blocks/ProductImageSlider';
import AppFeaturesList from '@/components/LeafPage/Sections/Features';
import ProductInformation from '@/components/LeafPage/Sections/ProductInformation';
import TestimonalCarousel from '@/components/Blocks/TestimonalCarousel';
import ReviewAndRatings from '@/components/LeafPage/Sections/Reviews';
import CustomerLogos from '@/components/LeafPage/Sections/CustomerLogos';
import FaqSection from '@/components/LeafPage/Sections/FaqSection';
import TrustedSection from '@/components/LeafPage/Sections/TrustedSection';
import CtaCardSection from '@/components/LeafPage/Sections/CtaCardSection';
import CustomTable from '@/components/Tables/CustomTable';
import ComparisionCards from '@/components/LeafPage/Sections/ComparisionCards';
import CardsList from '@/components/LeafPage/Sections/CardsList';
import AppCards from '@/components/LeafPage/Sections/AppCardsList';
import SimilarAppCards from '@/components/LeafPage/Sections/SimilarAppCards';
import TechnicalDetails from '@/components/LeafPage/Sections/TechnicalDetails';

export interface PricingPlan {
  type: string; // You might want to refine this to specific color names if you have a limited set
  amount: string;
}

export interface AppDetails {
  logoUrl: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  reviewsCount: string;
  pricing: PricingPlan[];
  highlights: string[];
}

const AppPage: React.FC = () => {
  const appDetails: AppDetails = {
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nS7Jma37tmWqTtuQEL6emOoR-fexuh3M4uy1OngUrg&s',
    name: 'Teemill',
    title: 'Teemill: Eco Print on Demand Shopify App by Teemill',
    description:
      'Shopify Inbox is a free messaging tool that lets you chat with customers as they shop. In fact, 70% of all Inbox conversations are with shoppers making a purchase',
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
      <div className="mt-6">
        <Breadcrumb />
      </div>
      <ProductOverview appDetails={appDetails} />
      <div className="mt-8">
        <ProductImageSlider />
      </div>
      <div className="border-gray-100 border mt-5 mb-10"></div>
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
        <AppFeaturesList />
      </div>
      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <ProsCons />
      </div>
      <div className="mt-8">
        <Heading as="h2" className="mt-2 text-gray-900 dark:text-white">
          Related Articles
        </Heading>
        <ExpertCardList />
      </div>
      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <ComparisionTable />
      </div>
      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <ProductInformation />
      </div>

      <div className="mt-8">
        <TestimonalCarousel />
      </div>
      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <ReviewAndRatings />
      </div>

      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <CustomerLogos />
      </div>

      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <FaqSection />
      </div>
      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <TrustedSection />
      </div>
      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <CtaCardSection />
      </div>

      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <CustomTable />
      </div>

      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <ComparisionCards />
      </div>
      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <CardsList />
      </div>
      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <AppCards />
      </div>
      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <SimilarAppCards />
      </div>
      <div className="border-gray-100 border mt-10"></div>
      <div className="mt-8">
        <TechnicalDetails />
      </div>
      <div className="border-gray-100 border mt-10"></div>
      {/* <div className="mt-8">
        <PlainSections />
      </div> */}
    </div>
  );
};

export default AppPage;
