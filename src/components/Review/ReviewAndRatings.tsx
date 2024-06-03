import React from 'react';
import { Button } from 'flowbite-react';

interface RatingData {
  rating: number;
  count: number;
}

interface RatingComponentProps {
  averageRating: number;
  totalRatings: number;
  ratings: RatingData[];
}

const RatingComponent: React.FC<RatingComponentProps> = ({
  averageRating,
  totalRatings,
  ratings,
}) => {
  return (
    <div className="w-full shrink-0 space-y-6 lg:max-w-sm">
      <div className="space-y-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <p className="text-3xl font-semibold leading-none text-gray-900 dark:text-white">
              {averageRating}
            </p>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${
                    i < averageRating ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-600'
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"></path>
                </svg>
              ))}
            </div>
          </div>
          <p className="text-base font-medium leading-none text-gray-900 dark:text-white">
            based on {totalRatings} ratings
          </p>
        </div>
        <div className="min-w-0 flex-1 space-y-3">
          {ratings.map(({ rating, count }) => (
            <div key={rating} className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                {rating}
              </p>
              <svg
                className="h-4 w-4 shrink-0 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"></path>
              </svg>
              <div className="h-3 w-48 max-w-xs rounded-sm bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-3 rounded-sm bg-green-500"
                  style={{ width: `${(count / totalRatings) * 100}%` }}
                ></div>
              </div>
              <a
                href="#"
                className="shrink-0 text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500"
              >
                {' '}
                {count} reviews{' '}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* <button
        type="button"
        data-drawer-target="add-review-drawer"
        data-drawer-show="add-review-drawer"
        data-drawer-placement="right"
        className="mb-2 me-2 rounded-lg border border-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      ></button> */}

      <Button
        size="sm"
        pill
        className="border-primary-700 font-semibold text-left lg:text-center bg-transparent hover:!bg-primary-50 text-primary-700 hover:text-black focus:ring-0 px-3"
      >
        Write a review
      </Button>
    </div>
  );
};

const sampleRatings = [
  { rating: 5, count: 239 },
  { rating: 4, count: 75 },
  { rating: 3, count: 106 },
  { rating: 2, count: 40 },
  { rating: 1, count: 20 },
];

const ReviewAndRating: React.FC = () => {
  const totalRatings = sampleRatings.reduce((acc, curr) => acc + curr.count, 0);
  const averageRating = (
    sampleRatings.reduce((acc, curr) => acc + curr.rating * curr.count, 0) / totalRatings
  ).toFixed(1);

  return (
    <div className="container mx-auto p-4">
      <RatingComponent
        averageRating={parseFloat(averageRating)}
        totalRatings={totalRatings}
        ratings={sampleRatings}
      />
    </div>
  );
};

export default ReviewAndRating;
