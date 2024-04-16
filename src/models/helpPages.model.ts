import { Schema, models, model, type Model } from 'mongoose';

export type IHelpPage = {
  page_id: number;
  category: string;
  category_slug: string;
  title: string;
  url: string;
  html: string;
  status: 'live' | 'draft';
};

const HelpPagesSchema = new Schema<IHelpPage>(
  {
    page_id: { type: Number, required: true },
    category: { type: String, required: true },
    category_slug: { type: String, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
    html: { type: String, required: true },
    status: { type: String, required: true, enum: ['live', 'draft'] },
  },
  {
    strict: false,
    timestamps: false,
  },
);

const HELP_PAGE__MODEL_NAME = 'helpPages';

const HelpPage: Model<IHelpPage> =
  models[HELP_PAGE__MODEL_NAME] ||
  model<IHelpPage>(HELP_PAGE__MODEL_NAME, HelpPagesSchema, 'shopifyHelpPostData');

export default HelpPage;
