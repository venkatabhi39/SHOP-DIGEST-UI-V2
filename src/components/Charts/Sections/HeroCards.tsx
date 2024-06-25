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
    <div className="grid grid-cols-5 gap-5">
      {items.map((item, index) => (
        <HeroCard key={index} item={item} />
      ))}
    </div>
  );
};

const sampleItems: ItemData[] = [
  {
    name: 'First app launch on',
    imageUrl: 'https://img.icons8.com/?size=48&id=dmEAznTHC4Ci&format=png',
    mainValue: 'JUN',
    changeValue: 2022,
    changePercentage: 4.68,
  },
  {
    name: 'Total Reviews',
    imageUrl: 'https://img.icons8.com/?size=48&id=ZAASfo9L21mn&format=png',
    mainValue: 16.66,
    changeValue: -0.26,
    changePercentage: -1.54,
  },
  {
    name: 'Total Apps',
    imageUrl:
      'data:image/png;base64,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',
    mainValue: 18.05,
    changeValue: -0.02,
    changePercentage: -0.11,
  },
  {
    name: 'Top 3 apps - SD Rating',
    imageUrl: 'https://img.icons8.com/?size=48&id=CnsAhdkyB9wu&format=png',
    mainValue: 2.46,
    changeValue: 0.11,
    changePercentage: 4.68,
  },
  {
    name: 'Top 3 apps positions',
    imageUrl: 'https://img.icons8.com/?size=48&id=CnsAhdkyB9wu&format=png',
    mainValue: 16.66,
    changeValue: -0.26,
    changePercentage: -1.54,
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
