import LastTimePageRegenerated from '@/models/lastTimePageRegenerated.model';

export const findLastPageRegeneratedDoc = async (pageUrlOrSectionId: string) =>
  LastTimePageRegenerated.findOne({ pageUrlOrSectionId });

export const getLastPageRegeneratedForUrl = async (
  pageUrlOrSectionId: string,
): Promise<number | null> =>
  LastTimePageRegenerated.findOne({ pageUrlOrSectionId })
    .exec()
    .then(doc => doc?.currentPage ?? null);

export const updateLatestPageGenerated = async (
  pageUrlOrSectionId: string,
  currentPage: number,
): Promise<void> => {
  try {
    await LastTimePageRegenerated.updateOne(
      {
        pageUrlOrSectionId,
      },
      { $set: { pageUrlOrSectionId, regeneratedAt: new Date(), currentPage } },
      { upsert: true },
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      `Error while ${updateLatestPageGenerated.name} for "${pageUrlOrSectionId}:${currentPage}": ${
        (err as Error).stack
      }`,
    );
  }
};
