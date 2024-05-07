import React from 'react';
import { Card, Rating } from 'flowbite-react';
import Link, { LinkProps } from 'next/link';
interface AppListEntry {
  rank: number;
  title: string;
  rating: number;
  price: string;
  description: string;
  imageSrc: string;
}

interface AppListProps {
  apps: AppListEntry[];
}

const AppListItem: React.FC<AppListEntry> = ({
  rank,
  title,
  rating,
  price,
  description,
  imageSrc,
}) => {
  return (
    <Card className="flex mb-4 shadow-none card-plain hover:bg-gray-100 p-4">
      {/* <div className="text-center w-10">{rank}</div> */}
      <div className="flex flex-row">
        <img
          src={imageSrc}
          className="mr-4 w-20 h-20 max-w-full align-middle rounded-lg"
          alt={title}
        />
        <div className="flex flex-col justify-center">
          <h5 className="text-md font-medium leading-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <div className="text-yellow-500 flex mt-1 mb-0.5">
            <Rating>
              <Rating.Star className="text-yellow-400 w-4 h-4 mr-2" />
            </Rating>
            <span className="text-sm mr-2">{rating} </span>
            <span className="text-green-500 text-sm">{price}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </Card>
  );
};

const AppList: React.FC<AppListProps> = ({ apps }) => {
  return (
    <div className="grid grid-cols-1 gap-5 py-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:py-6 xl:grid-cols-3 xl:py-7 2xl:py-12">
      {apps.map((app, index) => (
        <Link href="#" className="">
          <AppListItem key={index} {...app} />
        </Link>
      ))}
    </div>
  );
};

const sampleApps: AppListEntry[] = [
  {
    rank: 1,
    title: 'High Sea Saga DX',
    rating: 4.4,
    price: 'Free',
    description: 'Games',
    imageSrc:
      'https://play-lh.googleusercontent.com/p2tUrLVX2qSAYqiTn9VilCUSLtQ9bWz2dMFlQBWy0zgB7QdG_RLQhja3ggeaVrLpJn8=s256-rw',
  },
  {
    rank: 2,
    title: 'Dungeon Renovation Sim...',
    rating: 4,
    price: 'Free',
    description: 'Games',
    imageSrc:
      'https://play-lh.googleusercontent.com/DfYkSl-nQoMNLX2bec7EwHemrvyDYmDgzIR1jcsyt0ZAcmO_SKjuu0a1o1iSwtnl8_g=s64-rw',
  },
  {
    rank: 3,
    title: 'Estate Agent Simulator',
    rating: 5,
    price: 'Free',
    description: 'Games',
    imageSrc:
      'https://play-lh.googleusercontent.com/QJJMmVOWoMpzIBfkZIJcJkVrOvL_h7lXBRAFIcJUAYwEXKmLSFLXnb8fykNB_xAgBQ=s64-rw',
  },
  {
    rank: 4,
    title: 'Estate Agent Simulator',
    rating: 5,
    price: 'Free',
    description: 'Games',
    imageSrc:
      'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht=s64-rw',
  },
  {
    rank: 5,
    title: 'Estate Agent Simulator',
    rating: 5,
    price: 'Free',
    description: 'Games',
    imageSrc:
      'https://play-lh.googleusercontent.com/3DdjrqH7RlSMjV28TdX2C0bvcp9mPBd81Q65TR9SVFJ4YOiAOMFqlIBvvCbS7nFRsd0=s64-rw',
  },
  {
    rank: 6,
    title: 'Estate Agent Simulator',
    rating: 5,
    price: 'Free',
    description: 'Games',
    imageSrc:
      'https://play-lh.googleusercontent.com/SpGvEZ4TTdoGOcrCMYBUit1EBnAnUndY5RyidJNVaUzJ9qf6qDGDqk-CfLdAph2cYJo=s64-rw',
  },
  {
    rank: 3,
    title: 'Estate Agent Simulator',
    rating: 5,
    price: 'Free',
    description: 'Games',
    imageSrc:
      'https://play-lh.googleusercontent.com/R0qgNDYYHbRhw6JFsdEbDMqONplEvJx0m0W9wzYVvY3eNF1c2rfBWYjQxW0sLEzFe1E=s64-rw',
  },
  {
    rank: 4,
    title: 'Estate Agent Simulator',
    rating: 5,
    price: 'Free',
    description: 'Games',
    imageSrc:
      'https://play-lh.googleusercontent.com/0iXkY-uS9VRHK6ggs4WQyNyv8BvCp88S_QMrpaxaQd1XaHIRU8pO-EfKfZueub3CBaI=s64-rw',
  },
  {
    rank: 5,
    title: 'Estate Agent Simulator',
    rating: 5,
    price: 'Free',
    description: 'Games',
    imageSrc:
      'https://play-lh.googleusercontent.com/3DdjrqH7RlSMjV28TdX2C0bvcp9mPBd81Q65TR9SVFJ4YOiAOMFqlIBvvCbS7nFRsd0=s64-rw',
  },
];

const AppCards2: React.FC = () => {
  return <AppList apps={sampleApps} />;
};

export default AppCards2;
