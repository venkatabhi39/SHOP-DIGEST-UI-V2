import React from 'react';
import { Card } from 'flowbite-react';

interface RoundedCardProps {
  name: string;
  imageSrc: string;
}

const RoundedCard: React.FC<RoundedCardProps> = ({ name, imageSrc }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imageSrc} alt={name} className="w-24 h-24 rounded-full object-cover mb-2" />
      <p className="text-sm font-medium tracking-tight text-gray-700 dark:text-white">{name}</p>
    </div>
  );
};

const roundedCards = [
  {
    name: 'All Experts',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png',
  },
  {
    name: 'Top Experts',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png',
  },
  {
    name: 'Home',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png',
  },
  {
    name: 'Wellness',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png',
  },
  {
    name: 'Career & Business',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png',
  },
  {
    name: 'Style & Beauty',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png',
  },
];

const RoundedImageCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-5 py-4 sm:grid-cols-2 lg:grid-cols-48 sm:py-6 xl:grid-cols-8 xl:py-7 2xl:py-12">
      {roundedCards.map((card, index) => (
        <RoundedCard key={index} {...card} />
      ))}
    </div>
  );
};

export default RoundedImageCards;
