import React from 'react';
import Image from 'next/image';
import { Card, Rating } from 'flowbite-react';
import Link, { LinkProps } from 'next/link';
//import { StarIcon } from "@heroicons/react/solid";

interface AppCardProps {
  name: string;
  rating: number;
  imageSrc: string;
  category: string;
}

const AppCard: React.FC<AppCardProps> = ({ name, rating, imageSrc, category }) => {
  return (
    <div className="w-full">
      <Card className="shadow-none card-plain hover:bg-gray-100 px-4 py-2">
        <img className="rounded-3xl shadow-md mb-3" src={imageSrc} alt={name} />
        <h5 className="text-sm font-medium tracking-tight text-gray-700 dark:text-white">{name}</h5>
        {rating && (
          <div className="mt-1 mb-2 flex items-center">
            <span className="mr-1 text-sm font-medium text-gray-500">{rating}</span>
            <Rating>
              <Rating.Star className="text-yellow-400 w-3.5 h-3.5" />
            </Rating>
          </div>
        )}
        {category && <p className="text-sm mt-1">{category}</p>}
      </Card>
    </div>
  );
};

export default AppCard;
