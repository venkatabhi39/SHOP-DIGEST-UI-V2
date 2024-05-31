// components/ProductInfo.tsx
import React from 'react';
import { Card, Rating } from 'flowbite-react';
import AnchorLink from '@/components/Links/AcnhorLink';
import { ProductOverviewCta } from './Sections/ProductOverviewCta';
import { Heading } from '@/components/Heading';
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

const ProductOverview: React.FC<ProductInfoProps> = ({ appDetails }) => {
  return (
    <div className="bg-white border-b pb-4">
      <div className="gap-12 lg:flex">
        <div className="min-w-0 flex-1 gap-8 sm:flex sm:items-start">
          <div className="w-72">
            <img
              src={appDetails.logoUrl}
              alt={`${appDetails.name} Logo`}
              className="w-full  rounded-lg border"
            />
            <button className="text-blue-600 hover:text-blue-800 mt-3 text-center w-full font-medium">
              Open gallery
            </button>
          </div>
          <div>
            <Heading as="h2" className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
              {appDetails.title}
            </Heading>
            <p className="mb-8">{appDetails.description}</p>
            <div className="flex items-center mb-4">
              <span className="py-1 px-1.5 bg-green-500 flex rounded-md">
                <span className="text-sm font-medium text-white mr-1">{appDetails.rating}</span>

                <Rating>
                  <Rating.Star className="text-white w-4" />
                </Rating>
              </span>
              <span className="ml-2 text-sm font-medium">({appDetails.reviewsCount} Ratings)</span>
              <AnchorLink
                href="#"
                variant="default"
                className="underline text-primary-600 ml-3 text-sm font-semibold"
              >
                View seller information
              </AnchorLink>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-2">
              {appDetails.pricing.map((price, index) => (
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
            <div className="border-t mt-8">
              <dl className="grid gap-4 mt-4 text-gray-900 sm:grid-cols-2 lg:gap-10 lg:mt-6 mb-5 lg:grid-cols-4 dark:text-white">
                <div className="flex flex-col">
                  <dt className="mb-2 text-xl md:text-xl font-semibold tracking-tight text-center">
                    <div className="flex justify-center">
                      4.0
                      <Rating>
                        <Rating.Star className="text-black w-4 ml-3" />
                      </Rating>
                    </div>
                  </dt>
                  <dd className="font-normal text-gray-500 dark:text-gray-400 text-center">
                    1.79Cr Review
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="mb-2 text-xl md:text-xl font-semibold text-center">1KCr+</dt>
                  <dd className="font-normal text-gray-500 dark:text-gray-400 text-center">
                    Downloads
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="mb-2 text-xl md:text-xl font-semibold text-center">
                    <b>E</b>
                  </dt>
                  <dd className="font-normal text-gray-500 dark:text-gray-400 text-center">
                    Everyone
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="mb-2 text-xl md:text-xl font-semibold text-center">&lt;1KCr+ </dt>
                  <dd className="font-normal text-gray-500 dark:text-gray-400 text-center">
                    Downloads
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="mt-6 shrink-0 space-y-8 sm:mt-8 lg:mt-0 lg:w-full lg:max-w-sm">
          <ProductOverviewCta />
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
