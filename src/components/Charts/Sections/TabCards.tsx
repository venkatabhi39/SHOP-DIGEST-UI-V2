// pages/index.tsx
import React from 'react';
import HeroCard from '@/components/Cards/HeroCard';

// types/ItemData.ts
export interface ItemData {
  name: string;
  imageUrl: string; // URL to the image
  mainValue: number;
  changeValue: number; // Value change (can be positive or negative)
  changePercentage: number;
}

interface DataListProps {
  items: ItemData[];
}

const DataList: React.FC<DataListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-6 gap-5 pt-3 pb-4">
      {items.map((item, index) => (
        <HeroCard key={index} item={item} />
      ))}
    </div>
  );
};

const sampleItems: ItemData[] = [
  {
    name: 'GTL Infrastructure',
    imageUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-256.png',
    mainValue: 2.46,
    changeValue: 0.11,
    changePercentage: 4.68,
  },
  {
    name: 'Vodafone Idea',
    imageUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/pinterest-256.png',
    mainValue: 16.66,
    changeValue: -0.26,
    changePercentage: -1.54,
  },
  {
    name: 'RattanIndia Power',
    imageUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/yahoo-128.png',
    mainValue: 18.05,
    changeValue: -0.02,
    changePercentage: -0.11,
  },
  {
    name: 'GTL Infrastructure',
    imageUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-256.png',
    mainValue: 2.46,
    changeValue: 0.11,
    changePercentage: 4.68,
  },
  {
    name: 'Vodafone Idea',
    imageUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/pinterest-256.png',
    mainValue: 16.66,
    changeValue: -0.26,
    changePercentage: -1.54,
  },
  {
    name: 'GTL Infrastructure',
    imageUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-256.png',
    mainValue: 2.46,
    changeValue: 0.11,
    changePercentage: 4.68,
  },
];

const CardsList: React.FC = () => {
  return (
    <div className="container mx-auto">
      <DataList items={sampleItems} />
    </div>
  );
};

export default CardsList;
