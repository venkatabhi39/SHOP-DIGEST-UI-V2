/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/label-has-associated-control */
import { useRouter } from 'next/router';
import AppCard from '@/components/appPage/AppCard';
import Button from '@/components/Button';
import TableContainer from '@/components/appPage/TableContainer';
import { StyledAnchor } from '@/components/StyledLink';
import shopifyIconProps from '@/assets/shopify-icon.svg';
import StarRating from '../StarRating';
import Table from './Table';
import Image from 'next/image';

type Props = {
  apps?: {
    totalPaidPlans: number;
    'app-slug': string;
    hasFreePlan: boolean;
    id: number;
    rating?: null | number;
    reviews?: null | number;
    appName?: null | string;
    planPrice?: null | string;
    planName?: null | string;
    icon?: null | string;
    developer?: null | string;
  }[];
};

export const RelatedAppsTable = ({ apps = [] }: Props) => {
  const router = useRouter();

  return (
    <TableContainer>
      <Table headings={['#', 'App Name', 'Developer', 'Rating (#Reviews)', 'Price', '']}>
        {apps.map((app, i) => (
          <tr
            key={app.id}
            className="border-b hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            onClick={() => router.push(`/apps/shopify/${app['app-slug']}`)}
          >
            <td className="px-4 py-2 w-4">{i + 1}</td>
            <th
              scope="row"
              className="px-4 py-2 font-normal text-gray-900 dark:text-white min-w-[200px]"
            >
              <div className="flex flex-row gap-3 justify-start items-center">
                <Image
                  loader={app.icon ? ({ src }) => src : undefined}
                  src={app.icon || shopifyIconProps}
                  alt={app.appName || ''}
                  width={50}
                  height={50}
                  className="w-6 h-6 rounded-full shadow-sm"
                />
                <StyledAnchor primary href={`/apps/shopify/${app['app-slug']}`}>
                  {app.appName}
                </StyledAnchor>
              </div>
            </th>
            <td className="px-2 py-2 max-w-[250px]">{app.developer}</td>
            <td className="px-4 py-2 whitespace-nowrap">
              <StarRating rating={app.rating} className="mr-2" />({app.reviews?.toLocaleString()})
            </td>
            <td className="px-4 py-2 font-normal whitespace-nowrap">
              <div className="flex flex-col items-start justify-start">
                <span>
                  {app.planPrice?.replace('month', 'mo')} {app.totalPaidPlans > 1 && 'onwards'}
                </span>
                <span className="text-secondary">
                  {app.hasFreePlan ? 'Free plan available' : ''}
                </span>
              </div>
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <Button primary onClick={() => router.push(`/apps/shopify/${app['app-slug']}`)}>
                Details
              </Button>
            </td>
          </tr>
        ))}
      </Table>
    </TableContainer>
  );
};

export default function AppComparisonTableContainer() {
  return (
    <AppCard sectioned title="Most Installed Shopify Apps According to Leads">
      <div className="max-w-[calc(100vw-3rem)] overflow-x-scroll">
        <RelatedAppsTable />
      </div>
      <nav
        className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing <b className="font-semibold text-gray-900 dark:text-white">1-10</b> of{' '}
          <b className="font-semibold text-gray-900 dark:text-white">1000</b>
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <a
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </AppCard>
  );
}
