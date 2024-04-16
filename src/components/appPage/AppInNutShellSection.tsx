import AppCard, { AppCardSection, AppCardSubSectionTitle } from '@/components/appPage/AppCard';
import formatDate from '@/utils/formatDate';
import { PropsWithAppData } from '@/models/appsData.model';
import { FlexColumn } from '@/components/appPage/FlexColumn';
import { formatAppName, getPaidPlanCostsInIncreasingOrder } from '@/services/appPages.service';
import TableContainer from '@/components/appPage/TableContainer';
import classes from './AppInNutShellSection.module.scss';
import Table from './Table';

const AppInNutShellTable = ({ appsData }: PropsWithAppData) => (
  <TableContainer className={classes.tableContainer}>
    <Table headings={['Title', 'Description']}>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          App Name
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['app-name']}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          App Benefit
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{appsData.tagline}</td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          App Objective
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{appsData.purpose}</td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          {appsData['categories-list'] && appsData['categories-list'].length < 2
            ? 'Category'
            : 'List of Categories'}
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['categories-list']?.join(', ')}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Developed by
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData.developer}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Launch Date
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['launch-date'] && formatDate(appsData['launch-date'])}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Total Pricing Plan(s)
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {(appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0)} (
          {appsData['free-plan-count'] || 0} free plan(s), {appsData['paid-plan-count'] || 0} paid
          plan(s))
        </td>
      </tr>
      {(appsData['paid-plan-count'] || 0) !== 0 && (
        <tr className="border-b dark:border-gray-700">
          <th scope="row" className="px-4 py-3 font-normal">
            Paid plan price(s)
          </th>
          <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
            {getPaidPlanCostsInIncreasingOrder(appsData).join(', ')}
          </td>
        </tr>
      )}
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Free Trial Available
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['trial-days'] != null && appsData['trial-days'] > 0
            ? `Yes, for ${appsData['trial-days']} day(s)`
            : 'No'}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          App Rating
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['overall-rating']}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Total Reviews
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {(appsData['total-reviews'] ?? 0).toLocaleString()}
        </td>
      </tr>
    </Table>
  </TableContainer>
);

export default function AppInNutShellSection({ appsData }: PropsWithAppData) {
  return (
    <AppCard id="about" title="About the App" sectioned expandable>
      <AppCardSection className="py-4">
        <AppCardSubSectionTitle title={`Overview of ${formatAppName(appsData['app-name'])}:`} />
        <FlexColumn>
          {appsData['categories-list'] && (
            <p>
              The {appsData['app-name']} is a Shopify app listed under{' '}
              {appsData['categories-list'][0]}{' '}
              {appsData['categories-list'][1]
                ? `and ${appsData['categories-list'][1]} categories`
                : 'category'}
              . The app was developed by {appsData.developer} and launched on{' '}
              {appsData['launch-date'] && formatDate(appsData['launch-date'])} on the Shopify app
              store. The main purpose of the app is: &quot;{appsData.purpose}&quot;
            </p>
          )}
          {(appsData['overall-rating'] || 0) >= 4 ? (
            <p>
              The {appsData['app-name']} is one of the highest-rated{' '}
              {appsData['categories-list']?.[0]} Shopify apps with an average rating of{' '}
              {appsData['overall-rating']} starts out of{' '}
              {(appsData['total-reviews'] ?? 0).toLocaleString()} reviews on the Shopify app store.
            </p>
          ) : (
            <p>
              The {appsData['app-name']} has been reviewed{' '}
              {(appsData['total-reviews'] ?? 0).toLocaleString()} times by Shopify merchants all
              across the globe and holds an overall rating of {appsData['overall-rating']} stars.
            </p>
          )}
          {(appsData['paid-plan-count'] || 0) === 0 &&
            ((appsData['free-plan-count'] || 0) === 1 ? (
              <p>The app offers {appsData['free-plan-count'] || 0} plan that is forever-free.</p>
            ) : (appsData['free-plan-count'] || 0) > 1 ? (
              <p>The app offers {appsData['free-plan-count'] || 0} plans that are forever-free.</p>
            ) : null)}
          {(appsData['free-plan-count'] || 0) === 0 && (appsData['paid-plan-count'] || 0) === 1 && (
            <p>
              The app offers {appsData['paid-plan-count'] || 0} paid plan, which costs{' '}
              {appsData['plan1-cost']}, and{' '}
              {appsData['trial-days'] != null && appsData['trial-days'] !== 0
                ? `comes with a ${appsData['trial-days']}-day free trial period`
                : 'has no free trial period'}
            </p>
          )}
          {(appsData['free-plan-count'] || 0) === 0 && (appsData['paid-plan-count'] || 0) > 1 && (
            <p>
              The app offers {appsData['paid-plan-count'] || 0} paid plans, which costs{' '}
              {getPaidPlanCostsInIncreasingOrder(appsData).join(', ')}.{' '}
              {appsData['trial-days'] !== 0
                ? `The paid plans also come with a ${appsData['trial-days']}-day free trial period.`
                : `The paid plans have no free trial period.`}
            </p>
          )}
          {(appsData['free-plan-count'] || 0) !== 0 && (appsData['paid-plan-count'] || 0) === 1 && (
            <p>
              The app has {(appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0)}{' '}
              pricing plans: {appsData['free-plan-count'] || 0} free and{' '}
              {appsData['paid-plan-count'] || 0} paid. The paid plan costs {appsData['plan1-cost']},
              and
              {appsData['trial-days'] !== 0
                ? `comes with a ${appsData['trial-days']}-day free trial period.`
                : `has no free trial period.`}
            </p>
          )}
          {(appsData['free-plan-count'] || 0) !== 0 && (appsData['paid-plan-count'] || 0) > 1 && (
            <p>
              The app has {(appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0)}{' '}
              pricing plans: {appsData['free-plan-count'] || 0} free and{' '}
              {appsData['paid-plan-count'] || 0} paid. The paid plans cost{' '}
              {getPaidPlanCostsInIncreasingOrder(appsData).join(', ')}, and
              {appsData['trial-days'] !== 0
                ? `come with a ${appsData['trial-days']}-day free trial period.`
                : `have no free trial period.`}
            </p>
          )}
        </FlexColumn>
      </AppCardSection>
      <AppCardSection>
        <AppCardSubSectionTitle title={`${formatAppName(appsData['app-name'])} In A Nutshell:`} />
        <AppInNutShellTable appsData={appsData} />
      </AppCardSection>
    </AppCard>
  );
}
