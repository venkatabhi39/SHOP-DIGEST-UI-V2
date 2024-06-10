// components/ProductInfo.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, Rating } from 'flowbite-react';
import AnchorLink from '@/components/Links/AcnhorLink';
import Pagination from '@/components/Tables/Pagination';
//import { ProductOverviewCta } from './Sections/ProductOverviewCta';
import CategoryDetails from './CategoryDetails';
import { Heading } from '@/components/Heading';
import categoryImg from '@/assets/category-img.jpg';
import { LineArrowDown, ImagePlaceholder, ShareIcon } from '@/components/SvgIcons/IconList';

export interface PricingPlan {
  type: string; // You might want to refine this to specific color names if you have a limited set
  amount: string;
}
export interface AppDetails {
  logoUrl: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  reviewsCount: string;
  pricing: PricingPlan[];
  highlights: string[];
}

interface ProductInfoProps {
  appDetails: AppDetails;
}

const appDetails: AppDetails = [
  {
    logoUrl:
      'https://images.pexels.com/photos/1083792/pexels-photo-1083792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Teemill',
    title: 'Teemill: Eco Print on Demand ',
    description:
      'Shopify Inbox is a free messaging tool that lets you email reviews with pictures and videos',
    rating: 5.0,
    reviewsCount: '34.5k',
    pricing: [
      { type: 'blue', amount: 'Free' },
      { type: 'green', amount: '$24 / month' },
      { type: 'green', amount: '$36 / month' },
    ],
    highlights: [
      'Unlimited requests for email reviews with pictures and videos, and feedback within the email for review.',
      'Show star ratings, product and store feedback, trust badges, and a clear display of reviews.',
    ],
  },
  {
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nS7Jma37tmWqTtuQEL6emOoR-fexuh3M4uy1OngUrg&s',
    name: 'Teemill',
    title: 'Teemill: Eco Print on Demand ',
    description:
      'Shopify Inbox is a free messaging tool that lets you email reviews with pictures and videos',
    rating: 5.0,
    reviewsCount: '34.5k',
    pricing: [
      { type: 'blue', amount: 'Free' },
      { type: 'green', amount: '$24 / month' },
      { type: 'green', amount: '$36 / month' },
    ],
    highlights: [
      'Unlimited requests for email reviews with pictures and videos, and feedback within the email for review.',
      'Show star ratings, product and store feedback, trust badges, and a clear display of reviews.',
    ],
  },
  {
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nS7Jma37tmWqTtuQEL6emOoR-fexuh3M4uy1OngUrg&s',
    name: 'Teemill',
    title: 'Teemill: Eco Print on Demand ',
    description:
      'Shopify Inbox is a free messaging tool that lets you email reviews with pictures and videos',
    rating: 5.0,
    reviewsCount: '34.5k',
    pricing: [
      { type: 'blue', amount: 'Free' },
      { type: 'green', amount: '$24 / month' },
      { type: 'green', amount: '$36 / month' },
    ],
    highlights: [
      'Unlimited requests for email reviews with pictures and videos, and feedback within the email for review.',
      'Show star ratings, product and store feedback, trust badges, and a clear display of reviews.',
    ],
  },
  {
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nS7Jma37tmWqTtuQEL6emOoR-fexuh3M4uy1OngUrg&s',
    name: 'Teemill',
    title: 'Teemill: Eco Print on Demand ',
    description:
      'Shopify Inbox is a free messaging tool that lets you email reviews with pictures and videos',
    rating: 5.0,
    reviewsCount: '34.5k',
    pricing: [
      { type: 'blue', amount: 'Free' },
      { type: 'green', amount: '$24 / month' },
      { type: 'green', amount: '$36 / month' },
    ],
    highlights: [
      'Unlimited requests for email reviews with pictures and videos, and feedback within the email for review.',
      'Show star ratings, product and store feedback, trust badges, and a clear display of reviews.',
    ],
  },
  {
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nS7Jma37tmWqTtuQEL6emOoR-fexuh3M4uy1OngUrg&s',
    name: 'Teemill',
    title: 'Teemill: Eco Print on Demand ',
    description:
      'Shopify Inbox is a free messaging tool that lets you email reviews with pictures and videos',
    rating: 5.0,
    reviewsCount: '34.5k',
    pricing: [
      { type: 'blue', amount: 'Free' },
      { type: 'green', amount: '$24 / month' },
      { type: 'green', amount: '$36 / month' },
    ],
    highlights: [
      'Unlimited requests for email reviews with pictures and videos, and feedback within the email for review.',
      'Show star ratings, product and store feedback, trust badges, and a clear display of reviews.',
    ],
  },
];

const CategoryItem: React.FC<ProductInfoProps> = () => {
  // Use an object to track expanded states, initialize all to false
  const [expandedStates, setExpandedStates] = useState<{ [key: number]: boolean }>(
    Object.fromEntries(appDetails.map((_, index) => [index, false])),
  );

  // Toggle function now accepts an index
  const toggleList = (index: number) => {
    setExpandedStates(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {appDetails.map((app, index) => (
        <div key={index} className="w-full  mb-5">
          <div className="flex flex-wrap lg:flex-nowrap justify-between">
            <div className="border rounded-md px-6 pt-6 pb-4 bg-white dark:bg-gray-800 dark:border-gray-700">
              <div className="gap-6 flex flex-col lg:flex-row items-start justify-between">
                <div className="flex-grow basis-1/3">
                  <div className="w-full">
                    {/* <img
                      src={'https://qwikui.com/images/qwik-ui-fluffy-creature-screen.webp'}
                      alt={`${appDetails.name} Logo`}
                      className="w-full rounded-lg border"
                    /> */}
                    <Image
                      src={categoryImg}
                      alt=""
                      className="shadow-md rounded-lg bg-slate-50 w-full sm:mb-0"
                    />
                  </div>
                </div>

                <div className="flex-grow basis-1/3">
                  <div className="relative flex flex-col sm:flex-row xl:flex-row items-start">
                    <div className="mt-2 md:mt-0 pl-0">
                      <Heading as="h3" className="mb-2 font-semibold text-gray-900 dark:text-white">
                        {app.title}
                      </Heading>
                      <p className="mb-4 text-sm">{app.description}</p>
                      <div className="flex items-center mb-3">
                        <span>
                          <svg
                            className="w-6 h-6 text-green-600 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M20.29 8.567c.133.323.334.613.59.85v.002a3.536 3.536 0 0 1 0 5.166 2.442 2.442 0 0 0-.776 1.868 3.534 3.534 0 0 1-3.651 3.653 2.483 2.483 0 0 0-1.87.776 3.537 3.537 0 0 1-5.164 0 2.44 2.44 0 0 0-1.87-.776 3.533 3.533 0 0 1-3.653-3.654 2.44 2.44 0 0 0-.775-1.868 3.537 3.537 0 0 1 0-5.166 2.44 2.44 0 0 0 .775-1.87 3.55 3.55 0 0 1 1.033-2.62 3.594 3.594 0 0 1 2.62-1.032 2.401 2.401 0 0 0 1.87-.775 3.535 3.535 0 0 1 5.165 0 2.444 2.444 0 0 0 1.869.775 3.532 3.532 0 0 1 3.652 3.652c-.012.35.051.697.184 1.02ZM9.927 7.371a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2h-.01Zm5.889 2.226a1 1 0 0 0-1.414-1.415L8.184 14.4a1 1 0 0 0 1.414 1.414l6.218-6.217Zm-2.79 5.028a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <Heading as="h4" className=" font-semibold ml-2">
                          Pricing plans 4
                        </Heading>
                        {/* <span className="py-1 px-1.5 bg-green-500 flex rounded-md">
                  <span className="text-sm font-medium text-white mr-1">{appDetails.rating}</span>

                  <Rating>
                    <Rating.Star className="text-white w-4" />
                  </Rating>
                </span> */}
                        {/* <span className="ml-2 text-sm font-medium">
                  ({appDetails.reviewsCount} Ratings)
                </span>
                <AnchorLink
                  href="#"
                  variant="default"
                  className="underline text-primary-600 ml-3 text-sm font-semibold"
                >
                  View seller information
                </AnchorLink> */}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        {app.pricing.map((price, index) => (
                          <label for="green" className="relative block">
                            <input
                              type="radio"
                              name="colour"
                              id="green"
                              className="absolute appearance-none top-2 left-2 peer"
                            />
                            <div className="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-primary-50 border border-gray-300 hover:border-primary-400 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600">
                              <p className="text-sm font-medium">{price.amount}</p>
                            </div>
                          </label>
                        ))}
                      </div>

                      {/* <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-2">
                {appDetails.pricing.map((price, index) => (
                  <span
                    key={index}
                    className={`bg-${price.type}-100 text-${price.type}-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-${price.type}-200 dark:text-${price.type}-800`}
                  >
                    {price.amount}
                  </span>
                ))}
              </div>
            </div> */}
                      <div className="border-t mt-5">
                        <dl className="grid gap-2 mt-2 text-gray-900 grid-cols-2 sm:grid-cols-3 lg:gap-1 lg:mt-3 lg:grid-cols-3 dark:text-white">
                          <div className="flex flex-col">
                            <dt className="text-base  font-semibold tracking-tight text-left">
                              <div className="flex justify-start">Points</div>
                            </dt>
                            <dd className="text-base font-medium text-gray-500 dark:text-gray-400 text-left">
                              122
                            </dd>
                          </div>
                          <div className="flex flex-col">
                            <dt className=" text-base  font-semibold text-left">Market Share</dt>
                            <dd className="text-base font-medium text-gray-500 dark:text-gray-400 text-left">
                              13%
                            </dd>
                          </div>
                          <div className="flex flex-col">
                            <dt className="text-base font-semibold text-left">Launch Date</dt>
                            <dd className="text-base font-medium text-gray-500 dark:text-gray-400 text-left">
                              12 May 23
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-grow basis-1/3 lg:basis-1/6 w-full">
                  <div className="w-full flex flex-col gap-y-3 lg:gap-y-[105px] lg:border-l lg:pl-5">
                    <div className="flex flex-row items-center justify-center lg:justify-end">
                      <span className="py-1 px-1.5 bg-green-500 flex rounded-md">
                        <span className="text-sm font-medium text-white mr-1">5</span>

                        <Rating>
                          <Rating.Star className="text-white w-4" />
                        </Rating>
                      </span>
                      <span className="ml-2 text-sm font-medium">
                        ({appDetails.reviewsCount} Ratings)
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <AnchorLink href="#" variant="button">
                        Install App
                      </AnchorLink>
                      <AnchorLink href="#" variant="bordered" classProp="mt-5">
                        View seller
                      </AnchorLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between ml-auto pt-4 border-t mt-5">
                <AnchorLink
                  //href={''}
                  variant="defaultIcon"
                  icon={LineArrowDown}
                  onClick={() => toggleList(index)}
                  classProp="cursor-pointer"
                >
                  {expandedStates[index] ? 'Show less' : 'Show more'}
                </AnchorLink>
                <div className="inline-flex">
                  <AnchorLink
                    href={'#'}
                    variant="defaultIcon"
                    icon={ImagePlaceholder}
                    classProp="flex-row-reverse"
                  >
                    <span className="ml-2">Open Gallery</span>
                  </AnchorLink>
                  <ShareIcon classProp="ml-2 text-green-500" />
                </div>
              </div>
              {expandedStates[index] && (
                <div>
                  <CategoryDetails />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const CategoryItemsSection: React.FC = () => {
  const handlePageChange = (page: number) => {
    console.log('Page changed to:', page);
    // Implement page change logic here
  };

  return (
    <div className="lg:w-10/12">
      <CategoryItem />
      <Pagination currentPage={2} totalPages={5} onPageChange={handlePageChange} />
    </div>
  );
};

export default CategoryItemsSection;
