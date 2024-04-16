import connectToWordpressDB from '@/utils/connectToWordpressDB.mongoose';
import HelpPageModel, { IHelpPage } from '@/models/helpPages.model';

// eslint-disable-next-line import/prefer-default-export
export const getAllLivePagesUrls = async () => {
  await connectToWordpressDB();

  return HelpPageModel.find<Pick<IHelpPage, 'category_slug' | 'url'>>({ status: 'live' })
    .select({ category_slug: 1, url: 1 })
    .exec();
};

export const findLiveOneByCategoryAndUrl = async (categorySlug: string, url: string) => {
  await connectToWordpressDB();

  return HelpPageModel.findOne({
    category_slug: categorySlug,
    url,
    status: 'live',
  }).exec();
};

export const getAnyOneCategory = async () => {
  await connectToWordpressDB();

  const firstDoc = await HelpPageModel.findOne<Pick<IHelpPage, 'category'>>()
    .select({ category: 1 })
    .exec();
  return firstDoc?.category ?? null;
};

export const getHelpPagesOfCategories = async (categorySlug: string) => {
  await connectToWordpressDB();

  return HelpPageModel.find({ category_slug: categorySlug, status: 'live' }).exec();
};
