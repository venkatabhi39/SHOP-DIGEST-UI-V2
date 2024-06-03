import React from 'react';
import CtaCard from '@/components/Cards/CtaCard';

const CTASection: React.FC = () => {
  const ctaData = {
    title: "Let's create more tools and ideas that brings us together.",
    description:
      'Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.',
    buttonLabel: 'Get started',
    buttonLink: '#',
    lightImageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    darkImageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
  };

  return (
    <div>
      <CtaCard {...ctaData} />
    </div>
  );
};

export default CTASection;
