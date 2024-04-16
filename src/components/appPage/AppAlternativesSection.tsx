import { useState } from 'react';
import classNames from 'classnames';
import { AppsData } from '@/models/appsData.model';
import AppCard, { AppCardSection, AppCardSubSectionTitle } from '@/components/appPage/AppCard';
import { StyledAnchor } from '@/components/StyledLink';
import { FlexColumn } from '@/components/appPage/FlexColumn';
import shopifyIconProps from '@/assets/shopify-icon.svg';
import StarRating from '../StarRating';

const ComparedAppCard = ({ comparedApp }: { comparedApp: AppsData }) => (
  <>
    <a
      href={`/apps/shopify/${comparedApp['app-slug']}`}
      className="shrink-0 inline-block min-w-[60px]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={comparedApp.icon || shopifyIconProps.src}
        className="max-w-[60px] w-full border"
        alt={comparedApp['app-name'] || ''}
        width={60}
        height={60}
        loading="lazy"
      />
    </a>
    <div className="flex flex-col justify-center">
      <StyledAnchor
        href={`/apps/shopify/${comparedApp['app-slug']}`}
        className="inline-block mb-2 text-base leading-tight"
      >
        <h4 className="!font-medium">{comparedApp['app-name']}</h4>
      </StyledAnchor>
      <div className="flex flex-row flex-wrap gap-x-2 items-center">
        <StarRating rating={comparedApp['overall-rating']} />{' '}
        <span className="text-sm">
          {(comparedApp['total-reviews'] ?? 0).toLocaleString()} Reviews
        </span>
      </div>
    </div>
  </>
);

export default function AppAlternativesSection({
  title,
  comparedApps,
  mainSectionTitle,
}: {
  comparedApps: AppsData[];
  title?: string;
  mainSectionTitle: string;
}) {
  const [expanded, setExpanded] = useState(false);

  if (comparedApps.length < 1) return null;

  return (
    <FlexColumn className="!gap-4">
      <AppCard sectioned title={title ? mainSectionTitle : undefined}>
        <AppCardSection className={classNames('!border-b-0 !pb-0', title && '!p-4')}>
          <AppCardSubSectionTitle className="!text-base !mb-0" title={title || mainSectionTitle} />
        </AppCardSection>

        <AppCardSection
          className={classNames(
            '!p-4',
            !title && '!pb-0',
            'flex flex-row items-start max-w-full gap-4',
          )}
        >
          <ComparedAppCard comparedApp={comparedApps[0]} />
        </AppCardSection>
      </AppCard>
      {comparedApps.slice(1, 10).map(comparedApp => (
        <AppCard key={comparedApp.app_id} className="flex flex-row items-start max-w-full gap-4">
          <ComparedAppCard comparedApp={comparedApp} />
        </AppCard>
      ))}
      {comparedApps.slice(10).map(comparedApp => (
        <AppCard
          className={classNames(
            !expanded && 'hidden',
            'flex flex-row items-start max-w-full gap-4',
          )}
          key={comparedApp.app_id}
        >
          <ComparedAppCard comparedApp={comparedApp} />
        </AppCard>
      ))}
      {comparedApps.length > 10 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary text-center"
          type="button"
        >
          See {expanded ? 'less' : 'more'}
        </button>
      )}
    </FlexColumn>
  );
}
