import { SiteHeader } from '@/components/site-header';
import { HeroFilter } from '@/components/Blocks/HeroFilter/HeroFilter';
import HeroForm from '@/components/Blocks/HeroFilter/HeroForm';
import { PopularLinks } from '@/components/Blocks/HeroFilter/PopularLinks';

import { SecondaryHeader } from '@/components/site-header/SecondaryHeader';

export default function HeroHeader() {
  return (
    <>
      <SecondaryHeader />
      <SiteHeader />
      <header className="max-w-full">
        {/* <NeedHelpSection /> */}

        <div
          style={{
            background:
              'linear-gradient(to top, rgb(255 255 255) 0, hsla(0, 0%, 100%, 0) 100%), linear-gradient(to right, #f4f9fd 0, #f4f9fd1f 100%)',
            //background:'linear-gradient(to top, rgb(255 255 255) 0, hsla(0, 0%, 100%, 0) 100%), linear-gradient(to right, rgb(247 185 85 / 8%) 0, rgb(255 0 128 / 8%) 100%)',
          }}
        >
          <HeroFilter />
          <HeroForm />
          <PopularLinks />
        </div>
      </header>
    </>
  );
}
