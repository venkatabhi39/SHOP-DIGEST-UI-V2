import React from 'react';
import Image from 'next/image';
import { Card, Rating } from 'flowbite-react';
//import { StarIcon } from "@heroicons/react/solid";

interface CardComponentProps {
  imageSrc: string;
  title: string;
  description: string;
  rating: number;
  isFree: boolean;
}

const cardItems: CardComponentProps[] = [
  {
    imageSrc:
      'https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Adveen Desuza',
    description: 'A unique take on your medieval simulation games',
    rating: 4,
    isFree: true,
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Adveen Desuza',
    description: 'A unique take on your medieval simulation games',
    rating: 4,
    isFree: false,
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/4491492/pexels-photo-4491492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Adveen Desuza',
    description: 'A unique take on your medieval simulation games',
    rating: 4,
    isFree: false,
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/5239790/pexels-photo-5239790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Adveen Desuza',
    description: 'A unique take on your medieval simulation games',
    rating: 4,
    isFree: true,
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/6913825/pexels-photo-6913825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Adveen Desuza',
    description: 'A unique take on your medieval simulation games',
    rating: 4,
    isFree: true,
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/6913714/pexels-photo-6913714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Adveen Desuza',
    description: 'A unique take on your medieval simulation games',
    rating: 4,
    isFree: true,
  },
];

const cardItems2: CardComponentProps[] = [
  {
    imageSrc:
      'https://images.pexels.com/photos/6312359/pexels-photo-6312359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Adveen Desuza',
    description: 'A unique take on your medieval simulation games',
    rating: 4,
    isFree: true,
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/5667458/pexels-photo-5667458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Adveen Desuza',
    description: 'A unique take on your medieval simulation games',
    rating: 4,
    isFree: false,
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/19916610/pexels-photo-19916610/free-photo-of-top-view-of-simple-christmas-decorations-lying-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Adveen Desuza',
    description: 'A unique take on your medieval simulation games',
    rating: 4,
    isFree: false,
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/4107348/pexels-photo-4107348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Adveen Desuza',
    description: 'A unique take on your medieval simulation games',
    rating: 4,
    isFree: true,
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/4525359/pexels-photo-4525359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Adveen Desuza',
    description: 'A unique take on your medieval simulation games',
    rating: 4,
    isFree: true,
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/9815700/pexels-photo-9815700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Adveen Desuza',
    description: 'A unique take on your medieval simulation games',
    rating: 4,
    isFree: true,
  },
];

export const CardWithReview: React.FC<CardComponentProps> = () => {
  return (
    <div className="grid grid-cols-1 gap-5 py-4 sm:grid-cols-2 lg:grid-cols-4 sm:py-6 xl:grid-cols-6 xl:py-7 2xl:py-12">
      {cardItems.map((item, index) => (
        <div key={index}>
          <Card className="shadow-none card-plain">
            <img className="rounded-md shadow-md mb-3" src={item.imageSrc} alt={item.title} />
            {/* <Image
              className="rounded"
              src={item.imageSrc}
              alt={item.title}
              width={300}
              height={300}
            /> */}
            <h5 className="text-base font-medium tracking-tight text-gray-900 overflow-hidden whitespace-nowrap overflow-ellipsis">
              {item.title}
            </h5>
            <div className="mt-1 mb-2 flex items-center">
              <Rating>
                <Rating.Star className="text-yellow-400" />
              </Rating>
              {/* <Rating>
                {Array.from({ length: item.rating }, (_, index) => (
                  <Rating.Star key={index} filled={true} />
                ))}
                {Array.from({ length: 5 - item.rating }, (_, index) => (
                  <Rating.Star key={index} filled={false} />
                ))}
              </Rating> */}
              <span className="ml-2 text-sm font-medium text-gray-500">{item.rating}</span>
              {item.isFree && (
                <span className="ml-3 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                  Free
                </span>
              )}
            </div>
            <p className="text-sm font-normal text-gray-700">{item.description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const CardWithReview2: React.FC<CardComponentProps> = () => {
  return (
    <div className="grid grid-cols-1 gap-5 py-4 sm:grid-cols-2 lg:grid-cols-4 sm:py-6 xl:grid-cols-6 xl:py-7 2xl:py-12">
      {cardItems2.map((item, index) => (
        <div key={index}>
          <Card className="shadow-none card-plain">
            <img className="rounded-md shadow-md mb-3" src={item.imageSrc} alt={item.title} />
            {/* <Image
              className="rounded"
              src={item.imageSrc}
              alt={item.title}
              width={300}
              height={300}
            /> */}
            <h5 className="text-base font-medium tracking-tight text-gray-900 overflow-hidden whitespace-nowrap overflow-ellipsis">
              {item.title}
            </h5>
            <div className="mt-1 mb-2 flex items-center">
              <Rating>
                <Rating.Star className="text-yellow-400" />
              </Rating>
              {/* <Rating>
                {Array.from({ length: item.rating }, (_, index) => (
                  <Rating.Star key={index} filled={true} />
                ))}
                {Array.from({ length: 5 - item.rating }, (_, index) => (
                  <Rating.Star key={index} filled={false} />
                ))}
              </Rating> */}
              <span className="ml-2 text-sm font-medium text-gray-500">{item.rating}</span>
              {item.isFree && (
                <span className="ml-3 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                  Free
                </span>
              )}
            </div>
            <p className="text-sm font-normal text-gray-700">{item.description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
};
