// eslint-disable-next-line import/no-cycle
import { Document, Model, model, models, Schema } from 'mongoose';
import { replaceWithGptFields } from '@/utils/appModel.utils';

export type AppsData = Record<string, null | any> & {
  'app-slug': string;
  icon?: null | string;
  'app-name'?: null | string;
  app_id: number;
  'overall-rating'?: null | number;
  tagline?: null | string;
  'tagline-gpt'?: null | string;
  'categories-list'?: null | string[];
  'launch-date'?: null | string;
  purpose?: null | string;
  'purpose-details'?: null | string;
  'purpose-details-gpt'?: null | string;
  'purpose-gpt'?: null | string;
  'total-reviews'?: null | number;
  'paid-plan-count'?: null | number;
  'free-plan-count'?: null | number;
  'trial-days'?: number | null;
  'features-list'?: null | string[];
  'features-list-gpt'?: null | string[];
  benefit1?: string | null;
  'benefit1-gpt'?: string | null;
  'benefit1-details'?: string | null;
  'benefit1-details-gpt'?: string | null;
  benefit2: string | null;
  'benefit2-gpt': string | null;
  'benefit2-details': string | null;
  'benefit2-details-gpt': string | null;
  benefit3: string | null;
  'benefit3-gpt': string | null;
  'benefit3-details': string | null;
  'benefit3-details-gpt': string | null;
  'plus-certified'?: 'false' | 'true';
  'app-url'?: null | string;
  'demo-store-url': string | null;
  'featured-story-link': string | null;
  'plan1-cost'?: null | string;
  'plan1-name'?: null | string;
  'plan1-features-list'?: null | string[];
  'plan2-cost'?: string;
  'plan2-name'?: string;
  'plan2-features-list'?: string[];
  'plan3-cost'?: string;
  'plan3-name'?: string;
  'plan3-features-list'?: string[];
  'plan4-cost'?: string;
  'plan4-name'?: string;
  'plan4-features-list'?: string[];
  'price-summary'?: string;
  'pricing-external-link'?: null | string;
  'integrations-list'?: string[];
  'support-email'?: string | null;
  'support-phone-numbers'?: null | string[];
  'faq-url': string | null;
  developer: string | null;
  'developer-experience': string | null;
  'developer-rating': number | null;
  'developer-website': string | null;
  'translated-languages': null | string[];
  'privacy-policy-url': null | string;
  '1star-reviews'?: null | number;
  '2star-reviews'?: null | number;
  '3star-reviews'?: null | number;
  '4star-reviews'?: null | number;
  '5star-reviews'?: null | number;
  'related-apps-list'?: null | number[];
  'related-apps-list-other'?: null | number[];
  'highlights-list'?: null | [string, string[]][];
  'screenshots-list'?: null | [string, string][];
};

export type AppsDataDocument = AppsData & Document;
export type PropsWithAppData<P = {}> = { appsData: AppsData } & P;

const transformDoc = (ret: AppsDataDocument) => {
  if (ret._id != null) {
    // eslint-disable-next-line no-param-reassign
    ret._id = ret._id.toString();
  }
  replaceWithGptFields(ret);
};

const AppsDataSchema = new Schema<AppsData>(
  {},
  {
    versionKey: false,
    strict: false,
    timestamps: false,
    toJSON: {
      virtuals: false,
      transform(_doc: AppsDataDocument, ret: any) {
        return transformDoc(ret) as any;
      },
    },
  },
);

AppsDataSchema.post(['find', 'findOne'], function afterFindAndFindOne(res) {
  if (!res || !this.mongooseOptions().lean) {
    return;
  }

  if (Array.isArray(res)) {
    res.forEach(transformDoc);
    return;
  }

  transformDoc(res);
});

const APPS_DATA_MODEL_NAME = 'appsData';

const AppsPage: Model<AppsData> =
  models?.[APPS_DATA_MODEL_NAME] ??
  model<AppsData>(APPS_DATA_MODEL_NAME, AppsDataSchema, 'appsData');

export default AppsPage;
