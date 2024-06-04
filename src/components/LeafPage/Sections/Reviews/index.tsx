import React from 'react';
import RatingComponent from '@/components/Review/ReviewAndRatings';
import ReviewsInfo from './ReviewsInfo';

const sampleRatings = [
  { rating: 5, count: 239 },
  { rating: 4, count: 75 },
  { rating: 3, count: 106 },
  { rating: 2, count: 40 },
  { rating: 1, count: 20 },
];

const AppReviews: React.FC = () => {
  const totalRatings = sampleRatings.reduce((acc, curr) => acc + curr.count, 0);
  const averageRating = (
    sampleRatings.reduce((acc, curr) => acc + curr.rating * curr.count, 0) / totalRatings
  ).toFixed(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[35%_65%] grid-rows-[auto]">
      <div className="border-r">
        <RatingComponent
          averageRating={parseFloat(averageRating)}
          totalRatings={totalRatings}
          ratings={sampleRatings}
        />
      </div>
      <div className="px-12 pt-12 ">
        <ReviewsInfo />
      </div>
    </div>
  );
};

export default AppReviews;
