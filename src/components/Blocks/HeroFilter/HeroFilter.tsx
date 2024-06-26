import React from 'react';
import { Category } from './Category';
import HeroBannerBg from '@/assets/red-lines-bg.png';
import Image from 'next/image';
import { PopularLinks } from './PopularLinks';
import HeroForm from './HeroForm';

type ButtonProps = {
  name: string;
  onClick: (data: any) => void; // If you are actually using 'data' in your onClick functions
};
const guestCompData1 = [
  { option: 'Add guests' },
  { option: '1' },
  { option: '2' },
  { option: '3' },
  { option: '4' },
  { option: '5+' },
];

const handleBtnClick = (data: any) => {
  console.log('data', data);
};

const buttons: ButtonProps[] = [
  { name: 'Apps', onClick: handleBtnClick },
  { name: 'Agencies', onClick: handleBtnClick },
  { name: 'Themes', onClick: handleBtnClick },
  { name: 'Services', onClick: handleBtnClick },
  { name: 'Jobs', onClick: handleBtnClick },
];

interface GuestOption {
  option: string;
}

interface GuestCompProps {
  data: GuestOption[];
}

const GuestComp: React.FC<GuestCompProps> = ({ data }) => (
  <select
    id="guests"
    className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  >
    {data.map((option: GuestOption) => (
      <option key={option.option} value={option.option}>
        {option.option}
      </option>
    ))}
  </select>
);

export const HeroFilter = () => (
  <section className="border border-b-0 border-x-0 border-t-0 border-gray-200 overflow-hidden">
    {/* <div
      className="lg:block absolute w-full h-[100%] top-0"
      style={{
        background:
          'radial-gradient(at 50% 40%, rgb(255, 255, 255), transparent 80%) 0% 0% repeat scroll, radial-gradient(at 50% -47%, rgb(172, 224, 249), transparent 80%) 0% 0% repeat scroll, radial-gradient(at 0% 0%, rgb(232, 225, 255) 0px, transparent 32%) 0% 0% repeat scroll, radial-gradient(at 100% 98%, rgb(255, 241, 235), transparent) 0% 0% repeat scroll, radial-gradient(at 0px 97%, rgb(227, 235, 255), white) 0% 0% repeat scroll rgba(0, 0, 0, 0)',
        zIndex: '-1',
      }}
    /> */}
    <div
      className="hidden lg:bg-[right_top_22%] xl:bg-[right_top_40%] lg:block bg-[url('../assets/red-lines-bg.svg')] absolute w-full h-[438px]"
      style={{
        backgroundRepeat: 'no-repeat',
        top: '-2px',
        backgroundSize: 'cover',
        opacity: '0.5',
        zIndex: '-1',
        filter: 'hue-rotate(285deg)',
      }}
    />
    {/* <div
      className="hidden lg:block bg-[url('../assets/red-lines-bg.svg')] absolute w-full h-[438px]"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '46%',
        top: '-2px',
        backgroundSize: 'cover',
        opacity: '0.5',
        zIndex: '-1',
        transform: 'rotateX(180deg) rotateY(180deg)',
      }}
    /> */}
    <div className="flex flex-col items-center justify-between pb-0 p-4 lg:p-8 lg:pb-0">
      {/* Top Navigation Bar for Categories */}

      {/* <h2 className="max-w-xs text-center mb-0 md:mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Find the best apps for your Shopify store
      </h2> */}

      <h2 className="max-w-xs md:max-w-[400px] text-center mb-0 md:mb-2 text-2xl md:text-[2rem] md:leading-10 font-bold tracking-tight text-gray-900 dark:text-white">
        Find the best <span className="text-primary">Shopify apps</span> for your Shopify store
      </h2>
      {/* text-gradient */}
      <div className=" mt-1 px-2 sm:px-4 py-1 rounded hidden md:block lg:block">
        <div className="flex flex-wrap gap-2">
          <Category buttonProps={buttons} />
        </div>
      </div>
      {/* <HeroForm /> */}
      {/* <div className="relative  mx-auto max-w-screen-xl lg:max-w-screen-lg text-white xl:px-0 z-1 mb-3">
          <form
            action="#"
            className="grid p-4 lg:px-16 mt-2 xl:w-full lg:w-full w-72 bg-white rounded gap-2 lg:gap-0 lg:grid-cols-9 lg:mt-2 dark:bg-gray-800"
          >
            <div className="lg:col-span-2">
              <label htmlFor="location-form" className="sr-only">
                Location
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <LocationIcon />
                </div>
                <input
                  type="text"
                  id="location-form"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search destinations"
                />
              </div>
            </div>
            <div className="lg:col-span-2 relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <CalendarIcon />
              </div>
              <label htmlFor="guests" className="sr-only">
                Select number of guests
              </label>
              <GuestComp data={guestCompData1} />
            </div>
            <div className="lg:col-span-2 relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <CalendarIcon />
              </div>
              <label htmlFor="guests" className="sr-only">
                Select number of guests
              </label>
              <GuestComp data={guestCompData1} />
            </div>
            <div className="lg:col-span-2 relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <CalendarIcon />
              </div>
              <label htmlFor="guests" className="sr-only">
                Select number of guests
              </label>
              <GuestComp data={guestCompData1} />
            </div>
            <button
              type="submit"
              className="lg:col-span-1 justify-center md:w-auto text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-2 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center"
            >
              <SearchIcon
                classProp={'w-[18px] h-[18px] text-white dark:text-white'}
              />
              <span className="ps-2">Search</span>
            </button>
          </form>
        </div> */}
    </div>
  </section>
);
