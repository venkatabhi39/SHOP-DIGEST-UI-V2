import React from 'react';
import { Category } from '@/components/Blocks/HeroFilter/Category';
import ToggleButtonGroup from '@/components/Tabs/RoundedTabs';
// import { Toggle } from 'flowbite-react';

// Define the feature type
interface Feature {
  iconPath: string;
  text: string;
}

// Define props for the PricingCard component
interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  buttonLabel: string;
  onButtonClick: () => void;
}

const handleBtnClick = (data: any) => {
  console.log('data', data);
};

const buttons: ButtonProps[] = [
  { name: 'Apps', onClick: handleBtnClick },
  { name: 'Agencies', onClick: handleBtnClick },
  { name: 'Themes', onClick: handleBtnClick },
];

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonLabel,
  onButtonClick,
}) => (
  <div className="flex flex-col p-6 mx-auto max-w-xl text-center bg-white rounded-lg border border-gray-200 shadow xl:max-w-lg dark:border-gray-700 dark:bg-gray-800 xl:p-8">
    <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">{title}</h3>
    <span className="text-5xl font-extrabold text-gray-900 dark:text-white">${price}</span>
    <p className="mt-4 mb-1 text-gray-500 text-light dark:text-gray-400">{description}</p>
    <button
      onClick={onButtonClick}
      className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-8 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 dark:focus:ring-gray-600"
    >
      {buttonLabel}
    </button>
    <ul role="list" className="space-y-4 text-left text-gray-900 dark:text-gray-400">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={feature.iconPath} />
          </svg>
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Define props for the PricingSection component
interface PricingSectionProps {
  title: string;
  description: string;
  toggleLeftLabel: string;
  toggleRightLabel: string;
  cards: PricingCardProps[];
}

const PricingSection: React.FC<PricingSectionProps> = ({
  title,
  description,
  toggleLeftLabel,
  toggleRightLabel,
  cards,
}) => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">{description}</p>
        <div className="flex justify-center items-center">
          <ToggleButtonGroup options={['Yearly', 'Quarterly']} />

          {/* <span className="text-base font-medium text-gray-500 dark:text-gray-400">
            {toggleRightLabel}
          </span> */}
        </div>
      </div>
      <div className="grid gap-8 xl:grid-cols-3 xl:gap-10">
        {cards.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
