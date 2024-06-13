import classNames from 'classnames';
import type { FC } from 'react';
import { StyledAnchor, StyledAnchorProps } from '@/components/StyledLink';
import { PropsWithClassName } from '@/types/common.types';
import { FooterTopAppsList } from '@/services/appPages.service';
import TopAppsHomePageFooter from './TopAppsHomePageFooter';
import PricingPlan from '@/components/Blocks/PricingPlan/PricingPlan';
import ListWithContent from '@/components/Blocks/Features/ListWithContent/index';
import TestimonalCarousel from '@/components/Blocks/TestimonalCarousel';
import DefaultFeatureList from '@/components/Blocks/Features/DefaultFeatureList';
import ThreeColumnsFeatureList from '@/components/Blocks/Features/ThreeColumnFeatures';
import NewsletterSubscription from '@/components/Blocks/NewLetterSubscription';
import TabsComponent from '@/components/Tabs/TabsWithUnderline';
import FooterSection from '@/components/Blocks/FooterSections/FooterVariant';
import { Accordion, Button } from 'flowbite-react';

const FooterLink: FC<StyledAnchorProps> = props => <StyledAnchor {...props} className="text-md" />;

export default function Footer({
  className,
  footerTopApps,
}: PropsWithClassName<{ footerTopApps?: FooterTopAppsList }>) {
  return (
    <footer className={classNames('', className)}>
      {/* {footerTopApps && <TopAppsHomePageFooter topApps={footerTopApps} />} */}
      <div className={classNames('border-t-300')}>
        <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-10 lg:pb-14 mx-auto">
          <PricingPlan />
          <ListWithContent />
          <TestimonalCarousel />
          <DefaultFeatureList />
          <ThreeColumnsFeatureList />

          {/* <div className="flex flex-row items-center justify-between gap-8 max-md:flex-col">
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
          </div> */}
        </div>
        <NewsletterSubscription />
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-10 lg:py-10 mx-auto">
          <TabsComponent />
          <div className="border-b mb-2"></div>
          <FooterSection />
        </div>
      </div>
    </footer>
  );
}
