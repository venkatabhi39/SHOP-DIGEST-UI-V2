import classNames from 'classnames';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import shopifyIconProps from '@/assets/shopify-icon.svg';
import { FooterTopAppsList } from '@/services/appPages.service';
import { StyledAnchor } from './StyledLink';
import SectionContainer from './appPage/SectionContainer';
import styles from './TopAppsHomePageFooter.module.scss';
import Image from 'next/image';

export default function TopAppsHomePageFooter({ topApps }: { topApps: FooterTopAppsList }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="border-y max-w-full overflow-hidden">
      <div className="border-b py-3">
        <SectionContainer>
          <div className="flex justify-center relative">
            <button
              type="button"
              className="display flex w-full md:w-auto items-center justify-between gap-2 text-lg font-semibold"
              onClick={() => setExpanded(!expanded)}
            >
              <span>Today&apos;s Featured Shopify Apps</span>
              {!expanded ? <FaChevronRight /> : <FaChevronDown />}
            </button>
          </div>
        </SectionContainer>
      </div>
      <SectionContainer className={classNames('py-4', !expanded && 'hidden')}>
        <ul className="max-md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
          {topApps.map(({ app_id: appId, icon, 'app-name': appName, 'app-slug': slug }) => (
            <li
              className={classNames('whitespace-nowrap overflow-hidden text-ellipsis', styles.li)}
              key={appId}
            >
              <Image
                className="object-cover w-6 h-6 rounded-full shrink-0 mr-3 inline-block"
                src={icon || shopifyIconProps.src}
                alt={appName!}
                loader={({ src }) => src}
                width={24}
                height={24}
              />
              <StyledAnchor
                primary
                href={`/apps/shopify/${slug}`}
                className="inline min-w-0 !font-normal"
              >
                {appName}
              </StyledAnchor>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </div>
  );
}
