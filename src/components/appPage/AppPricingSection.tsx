/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import classNames from 'classnames';
import AppCard, { AppCardSection, AppCardSubSectionTitle } from '@/components/appPage/AppCard';
import { PropsWithAppData } from '@/models/appsData.model';
import {
  getFreePlanCostsInIncreasingOrder,
  getPaidPlanCostsInIncreasingOrder,
} from '@/services/appPages.service';
import { FlexColumn } from '@/components/appPage/FlexColumn';
import TableContainer from '@/components/appPage/TableContainer';
import Button from '@/components/Button';
import classes from './AppPricingSection.module.scss';
import Table from './Table';
import List from '../List';

const AppPricingTable = ({ appsData }: PropsWithAppData) => (
  <TableContainer className={classes.tableContainer}>
    <Table headings={['Title', 'Description']}>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Pricing summary
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['price-summary']}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Total Pricing Plan(s)
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {(appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0)}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Number of free plan(s)
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['free-plan-count'] || 0}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Number of paid plan(s)
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['paid-plan-count'] || 0}
        </td>
      </tr>
      {(appsData['paid-plan-count'] || 0) !== 0 && (
        <tr className="border-b dark:border-gray-700">
          <th scope="row" className="px-4 py-3 font-normal">
            Cost of Paid Plan(s)
          </th>
          <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
            {getPaidPlanCostsInIncreasingOrder(appsData)?.join(', ')}
          </td>
        </tr>
      )}
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Free trail available
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['trial-days'] != null && appsData['trial-days'] > 0
            ? `Yes, for ${appsData['trial-days']} day(s)`
            : 'No'}
        </td>
      </tr>
    </Table>
  </TableContainer>
);

const PriceOverviewCard = ({ planName, planCost }: { planName: string; planCost?: string }) => (
  <div className="w-full flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
    <div className="p-4 xl:px-6">
      <h4>{planName}</h4>
    </div>
    <hr />
    <div className="flex flex-col flex-grow justify-start items-center mt-6 px-4 xl:px-6">
      <p className="!text-primary text-2xl font-bold">{planCost?.split('/').at(0)}</p>
      {planCost?.split('/').at(1) && <p className="text-sm">per {planCost?.split('/').at(1)}</p>}
    </div>
    <div className="p-4 xl:p-6 flex flex-col">
      <Button secondary className="!px-4 !py-2.5">
        Choose
      </Button>
    </div>
  </div>
);

export default function AppPricingSection({ appsData }: PropsWithAppData) {
  const [pricingCardsVisible, setPricingCardsVisible] = useState(false);
  const totalPlans = (appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0);

  return (
    <AppCard
      id="pricing"
      // titleExtraContent={<span className="format format-sm">7 days free trial</span>}
      title="Pricing details"
      sectioned
    >
      <AppCardSection>
        <AppCardSubSectionTitle title={`${appsData['app-name']} Pricing Plans:`} />
        <FlexColumn>
          {(appsData['paid-plan-count'] || 0) === 0 && (
            <p>
              This app offers {appsData['free-plan-count'] || 0} free plan(s). The free plan(s)
              offered by {appsData['app-name']}:{' '}
              {getFreePlanCostsInIncreasingOrder(appsData).join(', ')}
            </p>
          )}
          {(appsData['free-plan-count'] || 0) === 0 && (
            <p>
              The app offers {appsData['paid-plan-count'] || 0} paid plan(s). The paid plan(s)
              offered by {appsData['app-name']}:{' '}
              {getPaidPlanCostsInIncreasingOrder(appsData).join(', ')}
            </p>
          )}
          {(appsData['free-plan-count'] || 0) !== 0 && (appsData['paid-plan-count'] || 0) !== 0 && (
            <p>
              The app has {(appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0)}{' '}
              pricing plans: {appsData['free-plan-count'] || 0} free and{' '}
              {appsData['paid-plan-count'] || 0} paid. The free plans(s) offered by{' '}
              {appsData['app-name']}: {getFreePlanCostsInIncreasingOrder(appsData)}. The paid
              plans(s) offered by {appsData['app-name']}:{' '}
              {getPaidPlanCostsInIncreasingOrder(appsData)}.
            </p>
          )}
          <AppPricingTable appsData={appsData} />
          {/* TODO: discount */}
        </FlexColumn>
      </AppCardSection>
      <AppCardSection>
        <AppCardSubSectionTitle
          title={`Here's an overview of ${appsData['app-name']} costs for each of the plan(s):`}
        />
        <FlexColumn className="!items-start">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:grid-cols-4 sm:gap-4 lg:space-y-0">
            {/* Pricing Card */}
            {totalPlans === 1 && appsData['free-plan-count'] === 1 ? (
              <PriceOverviewCard planName="Free" planCost="Free" />
            ) : (
              [
                ...new Array(
                  (appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0),
                ),
              ].map((_, i) => (
                <PriceOverviewCard
                  key={i}
                  planName={appsData[`plan${i + 1}-name`]}
                  planCost={appsData[`plan${i + 1}-cost`]}
                />
              ))
            )}
          </div>
          {totalPlans > 1 && (
            <>
              <button
                type="button"
                className="text-secondary underline"
                onClick={() => setPricingCardsVisible(!pricingCardsVisible)}
              >
                See {pricingCardsVisible ? 'less' : 'more'} details
              </button>
              <div
                className={classNames(
                  'space-y-8 lg:grid lg:grid-cols-2 sm:gap-4 lg:space-y-0',
                  !pricingCardsVisible && '!hidden',
                )}
              >
                {/* Pricing Card */}
                {[
                  ...new Array(
                    (appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0),
                  ),
                ].map((_, i) => (
                  <div
                    key={i}
                    className="w-full flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white pb-4"
                  >
                    <div className="px-6 py-4 xl:px-8">
                      <h4>{appsData[`plan${i + 1}-name`]}</h4>
                    </div>
                    <hr />
                    <div className="px-6 xl:px-8 flex-grow flex flex-col">
                      <div className="flex justify-center items-baseline my-4">
                        <p className="!text-primary text-2xl font-bold">
                          {appsData[`plan${i + 1}-cost`]}
                        </p>
                      </div>
                      {appsData[`plan${i + 1}-features-list`] && (
                        <ul className="mb-4 space-y-1 text-left flex-grow">
                          {appsData[`plan${i + 1}-features-list`].map(
                            (feature: string, featureIndex: number) => (
                              <li key={featureIndex} className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      )}
                      <Button secondary className="!px-5 !py-2.5">
                        Get started
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {appsData['pricing-external-link'] != null && (
            <p>
              For further information regarding {appsData['app-name']} app pricing plans, please
              visit - {appsData['pricing-external-link']}
            </p>
          )}
        </FlexColumn>
      </AppCardSection>
      {totalPlans > 1 && appsData['plan1-features-list'] && (
        <AppCardSection className={classNames(!pricingCardsVisible && '!hidden')}>
          <AppCardSubSectionTitle title="Details" />
          <div>
            {appsData['plan1-features-list'].length === 0 ? (
              <>The plan encompasses all the features provided by the app</>
            ) : (
              <List listTitle="The details of the plan(s) are outlined below:" listStyle="decimal">
                {[
                  ...new Array(
                    (appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0),
                  ),
                ].map((_, i) => (
                  <>
                    <b>{appsData[`plan${i + 1}-name`]}:</b>{' '}
                    {appsData[`plan${i + 1}-cost`] &&
                      (appsData[`plan${i + 1}-cost`].toLowerCase() === 'free'
                        ? `This plan is free forever, incurring no subscription costs. ${
                            appsData[`plan${i + 1}-features-list`]
                              ? `It offers a wide range of features like ${appsData[
                                  `plan${i + 1}-features-list`
                                ].join(', ')}`
                              : ''
                          }.`
                        : `The ${appsData[`plan${i + 1}-name`]} costs ${
                            appsData[`plan${i + 1}-cost`]
                          } and ${
                            appsData['trial-days']
                              ? `comes with a ${appsData['trial-days']}-day free trial period`
                              : `has no free trial period`
                          }. ${
                            appsData[`plan${i + 1}-features-list`]
                              ? `The plan offers a host of features, including ${appsData[
                                  `plan${i + 1}-features-list`
                                ].join(', ')}.`
                              : ''
                          }`)}
                  </>
                ))}
              </List>
            )}
          </div>
        </AppCardSection>
      )}
    </AppCard>
  );
}
