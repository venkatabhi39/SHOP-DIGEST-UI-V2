import React from 'react';

import TeamOne from '@/components/Cards/ImageCards/TeamOne';
import TeamTwo from '@/components/Cards/ImageCards/TeamTwo';
import CardWithReview from '@/components/Cards/ImageCards/CardWithReview';
import ExpertCardList from '@/components/Cards/ImageCards/ExpertCard';
import ArticleCards from '@/components/Cards/ImageCards/ArticleCards';
import AppCards from '@/components/Cards/ImageCards/AppCards';
import RoundedImageCards from '@/components/Cards/ImageCards/RoundedImageCards';
import ArticleRowCards from '@/components/Cards/ImageCards/ArticleRowCards';

const Cards: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-7.5">
        {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h3 className="font-medium text-black dark:text-white">Cards Heading</h3>
          </div>

          <div className="p-4 sm:p-6 xl:p-9">
            <TeamTwo />
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h3 className="font-medium text-black dark:text-white">Cards Heading</h3>
          </div>

          <div className="p-4 sm:p-6 xl:p-9 2xl:p-15">
            <TeamOne />
          </div>
        </div> */}

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h2 className="mb-0 text-2xl font-bold text-gray-900 dark:text-white">Cards Heading</h2>
          </div>

          <div className="p-4 sm:p-6 xl:p-9 2xl:p-15">
            <CardWithReview />
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h2 className="mb-0 text-2xl font-bold text-gray-900 dark:text-white">Cards Heading</h2>
          </div>

          <div className="p-4 sm:p-6 xl:p-9 2xl:p-15">
            <ExpertCardList />
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h2 className="mb-0 text-2xl font-bold text-gray-900 dark:text-white">Cards Heading</h2>
          </div>

          <div className="p-4 sm:p-6 xl:p-9 2xl:p-15">
            <ArticleCards />
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h2 className="mb-0 text-2xl font-bold text-gray-900 dark:text-white">Cards Heading</h2>
          </div>

          <div className="p-4 sm:p-6 xl:p-9 2xl:p-15">
            <AppCards />
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h2 className="mb-0 text-2xl font-bold text-gray-900 dark:text-white">Cards Heading</h2>
          </div>

          <div className="p-4 sm:p-6 xl:p-9 2xl:p-15">
            <RoundedImageCards />
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h2 className="mb-0 text-2xl font-bold text-gray-900 dark:text-white">
              Related articles
            </h2>
          </div>

          <div className="p-4 sm:p-6 xl:p-9 2xl:p-15">
            <ArticleRowCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
