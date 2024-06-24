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
    <div className="grid grid-cols-5 gap-2">
      {items.map((item, index) => (
        <HeroCard key={index} item={item} />
      ))}
    </div>
  );
};

const sampleItems: ItemData[] = [
  {
    name: 'First app launch on',
    imageUrl:
      'https://cdn3.iconfinder.com/data/icons/galaxy-open-line-gradient-i/200/launcher-256.png',
    mainValue: 'JUN',
    changeValue: 2022,
    changePercentage: 4.68,
  },
  {
    name: 'Total Reviews',
    imageUrl:
      'https://cdn4.iconfinder.com/data/icons/materia-flat-social-free/24/038_031_like_social_network_friends_android_material-256.png',
    mainValue: 16.66,
    changeValue: -0.26,
    changePercentage: -1.54,
  },
  {
    name: 'Total Apps',
    imageUrl: 'https://www.svgrepo.com/show/408381/stack-apps-layers.svg',
    mainValue: 18.05,
    changeValue: -0.02,
    changePercentage: -0.11,
  },
  {
    name: 'Top 3 apps - SD Rating',
    imageUrl: 'https://www.svgrepo.com/show/135588/graph.svg',
    mainValue: 2.46,
    changeValue: 0.11,
    changePercentage: 4.68,
  },
  {
    name: 'Top 3 apps positions',
    imageUrl: 'https://www.svgrepo.com/show/135588/graph.svg',
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
