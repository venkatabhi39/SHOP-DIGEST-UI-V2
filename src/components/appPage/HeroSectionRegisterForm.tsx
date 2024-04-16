/* eslint-disable @next/next/no-img-element */
import { ChangeEventHandler, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import AppCard, { AppCardSection } from '@/components/appPage/AppCard';
import Button from '@/components/Button';
import { AppsData } from '@/models/appsData.model';
import { PropsWithClassName } from '@/types/common.types';
import thomasImage from '@/assets/thomas-lean.png';
import sofiaImage from '@/assets/sofia-mcguire.png';
import jeseImage from '@/assets/jese-leos.png';
import bonnieImage from '@/assets/bonnie-green.png';
import Image from 'next/image';

const PlanCost = ({ cost, currPlan }: { cost: string; currPlan: 'free' | number }) => {
  const [price, duration] = cost.includes('/') ? cost.split('/') : [];

  return (
    <div>
      <span className="!leading-none !text-primary !text-2xl !font-bold">
        {currPlan === 'free' ? 'Free' : price ?? cost}
      </span>{' '}
      {currPlan !== 'free' && duration && <p className="text-sm inline">per {duration}</p>}
    </div>
  );
};

export default function HeroSectionRegisterForm({
  appsData,
  className,
}: PropsWithClassName<{ appsData: AppsData }>) {
  const totalPlans = (appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0);
  const [currPlan, setCurrPlan] = useState<undefined | number | 'free'>(
    totalPlans === 1 && appsData['free-plan-count'] === 1 ? 'free' : 1,
  );
  const onPlanSelectionChange: ChangeEventHandler<HTMLSelectElement> = event => {
    setCurrPlan(event.target.value === 'free' ? 'free' : Number.parseInt(event.target.value, 10));
  };

  return (
    <div className={className}>
      <AppCard sectioned isOnWhiteBg className="!pt-0 pb-0 shadow-md !rounded-xl">
        <AppCardSection className="space-y-6 !mt-0 !py-4">
          <div className="space-y-4">
            <h3 className="!font-semibold">Install now on your store</h3>
            <div className="space-y-4">
              {currPlan && (
                <PlanCost
                  currPlan={currPlan}
                  cost={currPlan === 'free' ? 'free' : appsData[`plan${currPlan}-cost`]!}
                />
              )}
              <label htmlFor="countries" className="block">
                <div className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Select an option
                </div>
                <select
                  id="countries"
                  value={currPlan}
                  className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-4/5"
                  onChange={onPlanSelectionChange}
                >
                  {totalPlans === 1 && appsData['free-plan-count'] === 1 ? (
                    <option value="free">Free</option>
                  ) : (
                    [...new Array(totalPlans)].map((_, i) => {
                      const planName = appsData[`plan${i + 1}-name`];
                      const planCost = appsData[`plan${i + 1}-cost`];

                      if (!planCost) return null;

                      return (
                        <option value={i + 1} key={i}>
                          {planCost}
                          {planName && ` - ${planName}`}
                        </option>
                      );
                    })
                  )}
                </select>
              </label>
              <Button
                secondary
                submitBtn
                className="w-full !py-2.5 flex flex-row gap-2 items-center justify-center"
              >
                <span>Continue</span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </AppCardSection>
        <AppCardSection
          className="!border-t-0 bg-sdGray-dark !py-4"
          style={
            {
              // background: 'linear-gradient(0deg,rgba(248,149,0,.04),rgba(248,149,0,.04)),#FFFFFF',
              // background: '#fff4f1',
            }
          }
        >
          <div className="flex pr-3 -space-x-4 sm:pr-5 items-center justify-center">
            <Image
              height={40}
              width={40}
              className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
              src={bonnieImage}
              alt="bonnie avatar"
            />
            <Image
              height={40}
              width={40}
              className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
              src={jeseImage}
              alt="jese avatar"
            />
            <Image
              height={40}
              width={40}
              className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
              src={sofiaImage}
              alt="leslie avatar"
            />
            <Image
              height={40}
              width={40}
              className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
              src={thomasImage}
              alt="thomas avatar"
            />
          </div>
          <div className="text-center mt-2">
            <p className="mb-1 font-semibold !leading-tight text-lg">
              Need help with booking your test?
            </p>
            <p className="text-sm">Our experts are here to help you</p>
          </div>
          <Button
            animation="splash"
            primary
            submitBtn
            className="w-full !py-2.5 mt-4 focus:!ring-0 [&>div]:z-20"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
              />
            </svg>
            <span>Book a free call</span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Button>
          <div className="text-center mt-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline">
              72 customers choose this
            </span>
          </div>
        </AppCardSection>
      </AppCard>
      <AppCard className="mt-4 shadow-md !rounded-xl">
        <div className="font-bold mb-2 leading-none">Have questions?</div>
        <div className="flex flex-row flex-wrap gap-2">
          <button
            type="button"
            className="border border-blue-800 text-blue-800 rounded-[4px] px-3 leading-8 hover:bg-blue-50 flex items-center text-sm font-normal"
          >
            <BsWhatsapp className="mr-2" />
            <span>Whatsapp</span>
          </button>
          <button
            type="button"
            className="border border-blue-800 text-blue-800 rounded-[4px] px-3 leading-8 hover:bg-blue-50 flex items-center text-sm font-normal"
          >
            <svg
              className="w-3 h-3 inline mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            <span>Contact Us</span>
          </button>
        </div>
      </AppCard>
    </div>
  );
}
