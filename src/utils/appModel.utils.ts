/* eslint-disable no-param-reassign */
import { type AppsData } from '@/models/appsData.model';

// eslint-disable-next-line import/prefer-default-export
export const replaceWithGptFields = (appsData: AppsData) => {
  for (let i = 1; i < 4; i += 1) {
    appsData[`benefit${i}`] = appsData[`benefit${i}-gpt`] ?? appsData[`benefit${i}`] ?? null;
    appsData[`benefit${i}-details`] =
      appsData[`benefit${i}-details-gpt`] ?? appsData[`benefit${i}-details`] ?? null;
  }

  appsData['features-list'] = appsData['features-list-gpt'] ?? appsData['features-list'] ?? null;
  appsData.purpose = appsData['purpose-gpt'] ?? appsData.purpose ?? null;
  appsData.tagline = appsData['tagline-gpt'] ?? appsData.tagline ?? null;
  appsData['purpose-details'] =
    appsData['purpose-details-gpt'] ?? appsData['purpose-details'] ?? null;

  const developerWebsite = appsData['developer-website'];
  if (developerWebsite && developerWebsite.startsWith('/')) {
    appsData['developer-website'] = `https://apps.shopify.com${developerWebsite}`;
  }
};
