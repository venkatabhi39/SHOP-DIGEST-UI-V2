import React from 'react';
import PricingSection from '@/components/PricingSection';
// Adjust the path as necessary
const headerDetails = {
  title: 'Designed for business teams like yours',
  description:
    'Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth',
};

const pricingPlans = [
  {
    title: 'Starter',
    type: '',
    description: 'Best option for personal use & for your next project.',
    price: 29,
    features: ['Individual configuration', 'No setup, or hidden fees', 'Team size: 1 developer'],
    supportDuration: 6,
    updateDuration: 6,
    isHighlighted: false,
  },
  {
    title: 'Premium',
    type: 'Most Popular',
    description: 'Relevant for multiple users, extended & premium support.',
    price: 99,
    features: [
      'Individual configuration',
      'No setup, or hidden fees',
      'Team size: 10 developers',
      'Premium support: 24 months',
      'Free updates: 24 months',
    ],
    supportDuration: 24,
    updateDuration: 24,
    isHighlighted: true,
  },
  {
    title: 'Enterprise',
    type: '',
    description: 'Best for large scale uses and extended redistribution rights.',
    price: 499,
    features: [
      'Individual configuration',
      'No setup, or hidden fees',
      'Team size: 100+ developers',
    ],
    supportDuration: 36,
    updateDuration: 36,
    isHighlighted: false,
  },
];

const PricingBlock: React.FC = () => (
  <div>
    <PricingSection plans={pricingPlans} headerData={headerDetails} />
  </div>
);

export default PricingBlock;
