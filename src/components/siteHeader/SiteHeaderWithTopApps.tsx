import { FooterTopAppsList } from '@/services/appPages.service';
import SectionContainer from '../appPage/SectionContainer';
import MainNavigation from './MainNavigation';
import NeedHelpSection from './NeedHelpSection';
import { SearchAndBookContent } from './SearchAndBookSection';
import shopifyIconProps from '@/assets/shopify-icon.svg';
import { StyledAnchor } from '../StyledLink';
import Carousel from '../appPage/Carousel';
import Navigation, { NavigationLink } from '../appPage/Navigation';
import styles from './SiteHeaderWithTopApps.module.scss';
import Image from 'next/image';

export default function SiteHeaderWithTopApps({ topApps }: { topApps?: FooterTopAppsList }) {
  return (
    <header className="max-w-full overflow-hidden">
      <NeedHelpSection />
      <MainNavigation>
        {/* <NavigationItems /> */}
        <SearchAndBookContent className="border max-lg:mt-4" />
      </MainNavigation>
      <Navigation className="lg:!py-2">
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/about">About</NavigationLink>
        <NavigationLink href="#features">Features</NavigationLink>
        <NavigationLink href="#pricing">Pricing</NavigationLink>
        <NavigationLink href="#integrations">Integrations</NavigationLink>
        <NavigationLink href="#reviews">Reviews</NavigationLink>
        <NavigationLink href="#support">Support</NavigationLink>
        <NavigationLink href="#faq">Faqs</NavigationLink>
        <NavigationLink href="#relatedApps">Related Apps</NavigationLink>
      </Navigation>
      {topApps && (
        <div className="bg-sdGray border-b">
          <SectionContainer className="py-3">
            <div className="flex flex-row items-center gap-4 overflow-hidden md:px-12">
              <h3 className="text-center font-semibold max-md:hidden">Recommended Apps</h3>
              <Carousel className="md:px-6 grow overflow-hidden" arrowBtnClass={styles.arrowBtn}>
                {topApps.map(appsData => (
                  <div
                    key={appsData['app-name']}
                    className="basis-36 flex-shrink-0 text-center snap-start px-4"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image
                      loader={({ src }) => src}
                      className="object-cover object-top rounded-xl block mx-auto w-[4.6875rem] md:w-[4.25rem] h-auto"
                      src={appsData.icon || shopifyIconProps.src}
                      alt=""
                      width={68}
                      height={68}
                      loading="lazy"
                    />
                    <StyledAnchor
                      href={`/apps/shopify/${appsData['app-slug']}`}
                      className="mt-3 line-clamp-2 underline-offset-4 text-xs md:text-sm"
                    >
                      {appsData['app-name']}
                    </StyledAnchor>
                  </div>
                ))}
              </Carousel>
            </div>
          </SectionContainer>
        </div>
      )}
    </header>
  );
}
