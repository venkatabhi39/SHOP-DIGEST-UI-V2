import AppRating from '@/models/appRating.model';

export type ReviewDistributionByCountry = { country: string; count: number }[];

// eslint-disable-next-line import/prefer-default-export
export const getReviewsDistributionByCountry = async (
  appId: number,
): Promise<ReviewDistributionByCountry> => {
  const res = await AppRating.aggregate<{ _id: string; count: number }>([
    {
      $match: {
        app_id: appId,
      },
    },
    {
      $group: {
        _id: '$country',
        count: { $sum: 1 },
      },
    },
  ]).exec();

  return res.map(doc => ({
    country: doc._id,
    count: doc.count,
  }));
};

export const getLatestPositiveReview = async (appId: number) =>
  AppRating.findOne({ app_id: appId }).sort({ rating: -1, date: -1 }).lean().exec();
