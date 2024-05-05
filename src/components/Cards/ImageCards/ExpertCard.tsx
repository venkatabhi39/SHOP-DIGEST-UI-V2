import React from 'react';
import { Card } from 'flowbite-react';
import { PiSealCheckFill } from 'react-icons/pi';

interface Expert {
  name: string;
  sessionPrice: string;
  description: string;
  imageSrc: string;
}

interface ExpertCardProps {
  name: string;
  sessionPrice: string;
  description: string;
  imageSrc: string;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ name, sessionPrice, description, imageSrc }) => {
  return (
    <div className="max-w-sm relative">
      <Card className="shadow-none card-plain">
        <div className="relative">
          <img className="rounded-md shadow-none mb-3" src={imageSrc} alt={name} />
          <div className="absolute bottom-5 left-2 bg-white text-gray-600 px-2 py-1 font-semibold text-xs rounded-md">
            Top Expert
          </div>
        </div>
        <h5 className="text-base font-medium tracking-tight text-gray-900 flex items-center">
          <span className="overflow-hidden whitespace-nowrap overflow-ellipsis">{name}</span>
          <PiSealCheckFill color="#e3a008" className="min-w-[16px] ml-1" />
        </h5>
        <div className="font-semibold text-gray-500 dark:text-white text-sm flex mt-0 mb-2.5">
          <span className="pr-6"> ${sessionPrice} </span>
          <span className="list-item list-disc">Session</span>
        </div>
        <p className="text-sm font-normal text-gray-600">{description}</p>
      </Card>
    </div>
  );
};

const experts: Expert[] = [
  {
    name: 'Alli Webb',
    sessionPrice: '500',
    description:
      'FOUNDER of Drybar (Sold for $255M), Shark Tank Judge, Best Selling Author, Advisor',
    imageSrc:
      'https://images.pexels.com/photos/6326346/pexels-photo-6326346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Alli Webb',
    sessionPrice: '500',
    description:
      'FOUNDER of Drybar (Sold for $255M), Shark Tank Judge, Best Selling Author, Advisor',
    imageSrc:
      'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Alli Webb',
    sessionPrice: '500',
    description:
      'FOUNDER of Drybar (Sold for $255M), Shark Tank Judge, Best Selling Author, Advisor',
    imageSrc:
      'https://images.pexels.com/photos/6326346/pexels-photo-6326346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Alli Webb',
    sessionPrice: '500',
    description:
      'FOUNDER of Drybar (Sold for $255M), Shark Tank Judge, Best Selling Author, Advisor',
    imageSrc:
      'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Alli Webb',
    sessionPrice: '500',
    description:
      'FOUNDER of Drybar (Sold for $255M), Shark Tank Judge, Best Selling Author, Advisor',
    imageSrc:
      'https://images.pexels.com/photos/6326346/pexels-photo-6326346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  // Add more items here...
];

const ExpertCardList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 py-4 sm:grid-cols-2 lg:grid-cols-4 sm:py-6 xl:grid-cols-5 xl:py-7 2xl:py-12">
      {experts.map((expert, index) => (
        <ExpertCard key={index} {...expert} />
      ))}
    </div>
  );
};

export default ExpertCardList;
