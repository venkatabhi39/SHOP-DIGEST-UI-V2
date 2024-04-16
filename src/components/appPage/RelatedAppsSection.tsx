import { Fragment } from 'react';
import shopifyIconProps from '@/assets/shopify-icon.svg';
import SectionContainer from './SectionContainer';
import styles from './RelatedAppsSection.module.scss';
import StarRating from '../StarRating';
import Carousel from './Carousel';
import Image from 'next/image';

export default function RelatedApps({
  relatedApps,
}: {
  relatedApps: Record<
    string,
    {
      'app-slug': string;
      hasFreePlan: boolean;
      id: number;
      rating?: null | number;
      reviews?: null | number;
      appName?: null | string;
      planPrice?: null | string;
      planName?: null | string;
      icon?: null | string;
    }[]
  >;
}) {
  const categories = Object.keys(relatedApps);

  return (
    <div className="border-t">
      <SectionContainer className="py-8">
        <div className="flex flex-col gap-4">
          {categories.map((category, i) => (
            <Fragment key={category}>
              <div>
                <h2 className="mb-2">Top {category} apps</h2>
                <Carousel arrowBtnClass="top-14 md:top-16">
                  {relatedApps[category].map(appsData => (
                    <a
                      href={`/apps/shopify/${appsData['app-slug']}`}
                      key={appsData.appName}
                      className={styles.cardContainer}
                    >
                      <div>
                        <Image
                          loader={({ src }) => src}
                          className="object-cover object-top rounded-3xl block mx-auto w-24 h-auto"
                          src={appsData.icon || shopifyIconProps.src}
                          alt=""
                          height={96}
                          width={96}
                        />
                        <div className="mt-4 space-y-2">
                          <div className="font-medium underline-offset-4">{appsData.appName}</div>
                          <div className="flex flex-row flex-wrap gap-x-2 items-center">
                            <StarRating rating={appsData.rating} />
                            <span className="text-sm">({appsData.reviews?.toLocaleString()})</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </Carousel>
              </div>
              {i !== categories.length - 1 && <hr />}
            </Fragment>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
