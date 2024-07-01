// pages/index.tsx
import React from 'react';

// types/ItemData.ts
export interface ItemData {
  name: string;
  imageUrl: string; // URL to the image
  mainValue: number;
  changeValue: number; // Value change (can be positive or negative)
  changePercentage: number;
}

interface DataCardProps {
  item: ItemData;
}

const HeroCard: React.FC<DataCardProps> = ({ item }) => {
  const { name, imageUrl, mainValue, changeValue, changePercentage } = item;
  const isPositive = changeValue >= 0;

  return (
    <div className="flex flex-col p-4 bg-white border rounded-lg">
      <img src={imageUrl} alt={`${name} logo`} className="w-12 h-12 mb-2" />
      <h2 className="text-sm font-semibold h-[45px]">{name}</h2>
      {name === 'First app launch on' ? (
        <>
          <p className="text-xl font-bold">{`${mainValue}`}</p>
          <p className={`text-sm font-medium ${isPositive ? 'text-green-500 ' : 'text-red-500'}`}>
            <span className="">{changeValue}</span>
          </p>
        </>
      ) : (
        <>
          <p className="text-xl font-bold">{`₹${mainValue.toFixed(2)}`}</p>
          <p className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}
            {changeValue.toFixed(2)} ({changePercentage.toFixed(2)}%)
          </p>
        </>
      )}
    </div>
  );
};

export default HeroCard;
