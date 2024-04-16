import { Model, model, models, Schema } from 'mongoose';

export type RatingData = Record<string, any> & {
  app_id: number;
  review_id: number;
  rating: number;
  date: string;
  review_message: string;
  store_name: string;
  country: string;
  time_spent: string;
  reply_message: null | string;
  timestamp: string;
  total_pages_crawled: number;
};

const AppRatingSchema = new Schema<RatingData>(
  {},
  {
    strict: false,
    timestamps: false,
  },
);

const RATING_DATA_MODEL_NAME = 'ratingData';

const AppRating: Model<RatingData> =
  models?.[RATING_DATA_MODEL_NAME] ??
  model<RatingData>(RATING_DATA_MODEL_NAME, AppRatingSchema, 'reviewsData');

export default AppRating;
