// eslint-disable-next-line import/prefer-default-export
import AppsDataModel, { AppsData, AppsDataDocument } from '@/models/appsData.model';
import {
  findLastPageRegeneratedDoc,
  getLastPageRegeneratedForUrl,
  updateLatestPageGenerated,
} from './lastTimePageRegenerated.service';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';

export const PAGINATION_LIMIT = 50;

export const formatAppName = (appName?: string | null) =>
  appName
    ? `${(appName.endsWith(' App')
        ? `${appName.slice(0, appName.length - 4)}`
        : appName
      ).trim()} Shopify App`
    : '';

export const getAppBySlug = async (slug: string) =>
  AppsDataModel.findOne<AppsDataDocument>({
    'app-slug': slug,
    'app-name': { $exists: true, $ne: '' },
  })
    .lean()
    .exec();

export const getAllAppsSlugs = async (): Promise<string[]> => {
  const docs = await AppsDataModel.find(
    { 'app-name': { $exists: true, $ne: '' } },
    { 'app-slug': 1 },
  )
    .lean()
    .exec();

  return docs.map(doc => doc['app-slug']);
};

export const getFreePlanCostsInIncreasingOrder = (appsData: AppsData) => {
  const regex = /plan\d-cost/g;
  const keys = Object.keys(appsData).filter(key => regex.test(key));
  const prices = keys
    .map(key => appsData[key as keyof AppsData])
    .filter((price: string) => price != null && (price === '0' || price.toLowerCase() === 'free'));

  prices.sort();
  return prices as string[];
};

export const getPaidPlanCostsInIncreasingOrder = (appsData: AppsData) => {
  const regex = /plan\d-cost/g;
  const keys = Object.keys(appsData).filter(key => regex.test(key));
  const prices = keys
    .map(key => appsData[key as keyof AppsData])
    .filter((price: string) => price != null && price !== '0' && price.toLowerCase() !== 'free');

  prices.sort();
  return prices as string[];
};

export const getCategoryApps = async (categoriesList: AppsData['categories-list']) => {
  const obj: Record<string, AppsData[]> = {};

  if (!categoriesList) {
    return obj;
  }

  await Promise.all(
    categoriesList.map(async category => {
      obj[category] = (await AppsDataModel.find({ 'categories-list': category })
        .sort({ 'overall-rating': -1, 'total-reviews': -1 })
        .limit(10)
        .exec()) as any as AppsData[];
    }),
  );

  return obj;
};

// noinspection JSUnusedGlobalSymbols
export const getFirstNonNullPlan = (appsData: AppsData) => {
  let planName: string | undefined;
  let planPrice: string | undefined;

  for (
    let i = 0;
    i < (appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0);
    i += 1
  ) {
    if (appsData[`plan${i + 1}-cost`] != null || appsData[`plan${i + 1}-name`] != null) {
      planName = (appsData[`plan${i + 1}-name`] as string) || '';
      planPrice = (appsData[`plan${i + 1}-cost`] as string) || '';
      return { planName, planPrice };
    }
  }

  return null;
};
export const getFirstPaidPlanIfExists = (appsData: AppsData) => {
  const paidPlans: { planPrice: string; planName: string }[] = [];
  for (
    let i = 0;
    i < (appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0);
    i += 1
  ) {
    const planCost = appsData[`plan${i + 1}-cost`];
    if (planCost != null && planCost.toLowerCase() !== 'free') {
      const planName = (appsData[`plan${i + 1}-name`] as string) || '';
      paidPlans.push({ planPrice: planCost, planName });
    }
  }

  paidPlans.sort((a, b) => a.planPrice.localeCompare(b.planPrice));

  return paidPlans[0] ?? null;
};

export const getAlternateAppsData = async (
  relatedAppsList: AppsData['related-apps-list'],
  relatedAppsListOther: AppsData['related-apps-list-other'],
) => {
  const idsToFind: AppsData['related-apps-list'] = [...(relatedAppsListOther || [])];
  if (idsToFind.length < 3 && relatedAppsList && relatedAppsList.length > 0) {
    idsToFind.push(...relatedAppsList.slice(0, 3 - idsToFind.length));
  }

  const [comparedAppDocs, alternativeAppDocs] = await Promise.all([
    relatedAppsList && relatedAppsList.length > 0
      ? await AppsDataModel.find({ app_id: { $in: relatedAppsList } })
          .lean()
          .exec()
      : Promise.resolve([]),
    idsToFind.length > 0
      ? await AppsDataModel.find({ app_id: { $in: idsToFind } })
          .lean()
          .exec()
      : Promise.resolve([]),
  ]);

  const comparedApps =
    idsToFind.length < 1
      ? []
      : comparedAppDocs.map(app => JSON.parse(JSON.stringify(app)) as AppsData);

  return {
    comparedApps,
    alternativeApps: alternativeAppDocs.map(app => JSON.parse(JSON.stringify(app)) as AppsData),
  };
};

export const getTotalAppsCountWithoutLimit = async (): Promise<number> =>
  AppsDataModel.count({ 'app-name': { $exists: true, $ne: '' } }).exec();

export const getTotalAppsCount = async (limit: number): Promise<number> =>
  AppsDataModel.count({ 'app-name': { $exists: true, $ne: '' } })
    .limit(limit)
    .exec();

export type GetAppsWithPaginationResult = Pick<
  AppsDataDocument,
  'app-slug' | 'icon' | 'app-name' | 'overall-rating' | 'total-reviews'
>[];
export const getAppsWithPagination = async (
  currPage: number,
  limit: number,
): Promise<GetAppsWithPaginationResult> =>
  AppsDataModel.find({ 'app-name': { $exists: true, $ne: '' } })
    .select({
      'app-slug': 1,
      icon: 1,
      'app-name': 1,
      'overall-rating': 1,
      'total-reviews': 1,
      _id: 0,
    })
    .limit(limit)
    .skip(limit * (currPage - 1))
    .lean<GetAppsWithPaginationResult>()
    .exec();

export const isYoutubeEmbedUrl = (url: string) => url.includes('youtube');

export type TopAppsForSection = Pick<
  AppsDataDocument,
  'overall-rating' | 'app_id' | 'app-slug' | 'icon' | 'app-name'
>[];

export const getTotalPagesForTopAppsSection = async (): Promise<number> => {
  const totalDocs = await AppsDataModel.count({
    'total-reviews': { $gte: 25, $lt: 200 },
  });
  return totalDocs / 45;
};

export const getTopAppsForSection = async (
  pageUrl: string,
): Promise<{
  topApps: TopAppsForSection;
  currPage: number;
}> => {
  const LIMIT = 45;

  const [lastPageGenerated, totalPagesForTopApps] = await Promise.all([
    getLastPageRegeneratedForUrl(pageUrl),
    getTotalPagesForTopAppsSection(),
  ]);

  const skipPages = Math.ceil((lastPageGenerated ?? 0) + 1) % totalPagesForTopApps;

  const docs = await AppsDataModel.find({
    'total-reviews': { $gte: 25, $lt: 200 },
  })
    .select({
      'overall-rating': 1,
      app_id: 1,
      'app-slug': 1,
      icon: 1,
      'app-name': 1,
      _id: 0,
    })
    .sort({ 'total-reviews': -1 })
    .limit(LIMIT)
    .skip(LIMIT * skipPages)
    .lean<TopAppsForSection>()
    .exec();

  return { topApps: docs, currPage: skipPages };
};

export const getTopAppsForSectionWithAllFields = async (): Promise<AppsData[]> =>
  AppsDataModel.find({ 'total-reviews': { $gte: 200 } })
    .sort({ 'total-reviews': -1 })
    .limit(30)
    .lean<AppsDataDocument[]>()
    .exec();

export type FooterTopAppsList = Pick<
  AppsDataDocument,
  'app_id' | 'icon' | 'app-name' | 'app-slug' | 'overall-rating'
>[];
export const getTopAppsForFooterSection = async (): Promise<FooterTopAppsList> => {
  const LIMIT = 30;

  const [totalDocs, lastPageGenerated] = await Promise.all([
    AppsDataModel.count({ 'total-reviews': { $gt: 200 } }),
    findLastPageRegeneratedDoc('topAppsFooter'),
  ]);

  const daysSinceLastGenerated = lastPageGenerated
    ? differenceInCalendarDays(lastPageGenerated.regeneratedAt, new Date())
    : 0;
  const totalPages = totalDocs / LIMIT;

  const currPage =
    daysSinceLastGenerated >= 1 ? Math.ceil((lastPageGenerated!.currentPage + 1) % totalPages) : 1;

  if (daysSinceLastGenerated >= 1) {
    updateLatestPageGenerated('topAppsFooter', currPage);
  }

  return AppsDataModel.find({ 'total-reviews': { $gt: 200 } })
    .select({
      app_id: 1,
      icon: 1,
      'app-name': 1,
      'app-slug': 1,
      'overall-rating': 1,
      _id: 0,
    })
    .sort({ 'total-reviews': -1 })
    .limit(LIMIT)
    .skip(currPage * LIMIT)
    .lean<FooterTopAppsList>()
    .exec();
};
