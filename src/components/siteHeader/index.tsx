import { SiteHeader } from '@/components/site-header';
import { useRouter } from 'next/router';
import { HeroFilter } from '@/components/Blocks/HeroFilter/HeroFilter';
import HeroForm from '@/components/Blocks/HeroFilter/HeroForm';
import { PopularLinks } from '@/components/Blocks/HeroFilter/PopularLinks';
import Alert from '@/components/Alert/Alert';
import { SecondaryHeader } from '@/components/site-header/SecondaryHeader';

export default function HeroHeader({ isSecondaryHeader }) {
  const isOnlySlashes = (path: any) => {
    return /^\/+$/.test(path);
  };
  const router = useRouter();

  return (
    <>
      <SecondaryHeader />

      <SiteHeader secondaryHeader={isSecondaryHeader} />
      {isOnlySlashes(router.pathname) && (
        <Alert
          type="info"
          message="<span class='p-0.5 bg-blue-100 px-2 mr-1 rounded-sm text-blue-800'>New</span>
        We have launched Flowbite Blocks featuring over 360+ website sections! <a href='#' class='underline'>Check it out</a> "
        />
      )}
      {!isSecondaryHeader && (
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
      )}
    </>
  );
}
