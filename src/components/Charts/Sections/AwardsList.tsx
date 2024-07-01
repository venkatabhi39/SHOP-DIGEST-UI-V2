import React from 'react';
import AnchorLink from '@/components/Links/AcnhorLink';
import { Heading } from '@/components/Heading';
// types/CardData.ts
export interface CardData {
  id: number;
  title: string;
  team: string;
  dueDate: string;
  progress: number;
  teamMembers: string[];
  icon: string;
  bgColor: string;
}

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="relative bg-gray-50 py-6 px-6 rounded-3xl w-64 my-4 shadow border">
      <div
        className={`text-white flex items-center absolute rounded-full py-4 px-4 ${data.bgColor} left-[50%] -ml-[36px] -top-6`}
      >
        <svg
          className="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
        </svg>
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2  text-center text-blue-600">{data.title}</p>
        {/* <div className="flex space-x-2 text-gray-400 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p>{data.team}</p>
        </div>
        <div className="flex space-x-2 text-gray-400 text-sm my-3 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p>{data.dueDate}</p>
        </div> */}
        <div className="border-t-2"></div>
        <div className="">
          <div className="my-2">
            <p className="font-medium text-base mb-2 text-center">Lorem ipsum content</p>
          </div>
          <div className="my-2">
            <p className="font-extrabold text-base mb-2 text-center">2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const sampleData: CardData[] = [
  {
    id: 1,
    title: 'Top 100',
    team: 'Marketing Team',
    dueDate: '1 Weeks Left',
    progress: 34,
    teamMembers: [
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU',
    ],
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    bgColor: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Top 100',
    team: 'Core UI Team',
    dueDate: '3 Weeks Left',
    progress: 76,
    teamMembers: [
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    bgColor: 'bg-blue-500',
  },
  {
    id: 3,
    title: 'Top 50',
    team: 'Marketing Team',
    dueDate: '2 Days Left',
    progress: 4,
    teamMembers: [
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU',
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
    ],
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    bgColor: 'bg-blue-500',
  },
  {
    id: 4,
    title: 'Top 50',
    team: 'Marketing Team',
    dueDate: '1 Month Left',
    progress: 90,
    teamMembers: [
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
    ],
    icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
    bgColor: 'bg-blue-500',
  },
];

const AwardsListWrapper: React.FC = () => {
  return (
    <div className="pt-0 pb-0 px-4 rounded-lg">
      <Heading as="h3" className="mb-8 text-center">
        Awards
      </Heading>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {sampleData.map(data => (
            <Card key={data.id} data={data} />
          ))}
        </div>
        <AnchorLink
          href="#"
          variant="bordered"
          size="small"
          classProp="mt-0 px-9 border-blue-500 text-blue-500 hover:bg-blue-100 text-blue-500"
        >
          See All
        </AnchorLink>
      </div>
    </div>
  );
};

export default AwardsListWrapper;
