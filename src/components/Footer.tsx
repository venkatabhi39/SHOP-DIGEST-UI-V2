import classNames from 'classnames';
import type { FC } from 'react';
import { StyledAnchor, StyledAnchorProps } from '@/components/StyledLink';
import { PropsWithClassName } from '@/types/common.types';
import { FooterTopAppsList } from '@/services/appPages.service';
import TopAppsHomePageFooter from './TopAppsHomePageFooter';

const FooterLink: FC<StyledAnchorProps> = props => <StyledAnchor {...props} className="text-md" />;

export default function Footer({
  className,
  footerTopApps,
}: PropsWithClassName<{ footerTopApps?: FooterTopAppsList }>) {
  return (
    <footer className={classNames('mt-8', className)}>
      {footerTopApps && <TopAppsHomePageFooter topApps={footerTopApps} />}
      <div className={classNames('border-t-300')}>
        <div className="py-8 section">
          <div className="flex flex-row items-center justify-between gap-8 max-md:flex-col">
            <div className="flex flex-row gap-4 items-center">
              <span className="text-md">&copy; Shop Digest</span>
            </div>
            <div className="flex flex-row flex-wrap justify-center relative gap-8">
              <FooterLink href="/apps/shopify/pages/1">Apps</FooterLink>
              <FooterLink href="/page/about-us">About Us</FooterLink>
              <FooterLink href="/page/our-services">Services</FooterLink>
              <FooterLink href="/page/terms">Privacy</FooterLink>
              <FooterLink href="/page/privacy">Terms</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
