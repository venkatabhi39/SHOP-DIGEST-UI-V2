import { Model, Schema, model, models } from 'mongoose';

export type ILastTimePageRegenerated = {
  pageUrlOrSectionId: string | null;
  regeneratedAt: Date;
  currentPage: number;
};

const LastTimePageRegeneratedSchema = new Schema<ILastTimePageRegenerated>(
  {
    // Page Url or section id
    pageUrlOrSectionId: { type: String, unique: true, required: true },
    regeneratedAt: { type: Date, default: Date.now, required: true },
    currentPage: { type: Number, required: true, default: 1 },
  },
  {
    versionKey: false,
    timestamps: false,
  },
);

const LAST_TIME_PAGE_REGENERATED_MODEL_NAME = 'lastTimePageRegenerated';

const LastTimePageRegenerated: Model<ILastTimePageRegenerated> =
  models?.[LAST_TIME_PAGE_REGENERATED_MODEL_NAME] ??
  model(
    LAST_TIME_PAGE_REGENERATED_MODEL_NAME,
    LastTimePageRegeneratedSchema,
    LAST_TIME_PAGE_REGENERATED_MODEL_NAME,
  );

export default LastTimePageRegenerated;
