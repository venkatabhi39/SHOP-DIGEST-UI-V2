/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/label-has-associated-control */
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { Fragment, PropsWithChildren, ReactNode } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import TableContainer from '@/components/appPage/TableContainer';
import { AppsData } from '@/models/appsData.model';
import formatDate from '@/utils/formatDate';
import Collapse from '@/components/appPage/Collapse';
import { StyledAnchor } from '@/components/StyledLink';
import Button from '@/components/Button';
import shopifyIconProps from '@/assets/shopify-icon.svg';
import styles from './AppComparisonTableByColumn.module.scss';
import StarRating from '../StarRating';
import Image from 'next/image';

const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

const TbodyHeadingRow = ({ children }: PropsWithChildren) => (
  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <th colSpan={4} scope="row" className="px-4 py-3 font-medium text-gray-900 dark:text-white">
      {children}
    </th>
  </tr>
);

const TbodyRow = ({ title, cells }: { title: ReactNode; cells: ReactNode[] }) => (
  <tr className="border-b dark:border-gray-700">
    <th scope="row" className="px-4 py-3 font-normal">
      {title}
    </th>
    {cells.map((cellContent, i) => (
      <td key={i} className="px-4 py-3 font-medium text-gray-900 dark:text-white">
        {cellContent}
      </td>
    ))}
  </tr>
);

const Table = ({ apps }: { apps: AppsData[] }) => (
  <TableContainer>
    <table
      className={classNames(
        'text-sm text-left text-gray-500 dark:text-gray-400 w-full',
        styles.table,
      )}
    >
      <thead className="text-gray-900 dark:text-white">
        <tr>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <th scope="col" className="px-4 py-3" />
          {apps.map(app => (
            <th
              key={app.app_id}
              scope="col"
              className="px-4 py-3 max-w-[250px] whitespace-normal align-bottom text-center space-y-4"
            >
              <div className="text-lg">
                <StyledAnchor
                  primary
                  className="mt-4 whitespace-normal !font-bold"
                  href={`/apps/shopify/${app['app-slug']}`}
                >
                  {app['app-name']}
                </StyledAnchor>
              </div>
              <Image
                src={app.icon || shopifyIconProps.src}
                alt={app['app-name'] || ''}
                className="w-auto mx-auto h-32"
                loader={({ src }) => src}
                height={128}
                width={128}
              />
              <div className="text-center">
                <Button key={app.app_id} primary>
                  Add To Cart
                </Button>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <TbodyHeadingRow>General Information</TbodyHeadingRow>
        <TbodyRow
          title="Ratings"
          cells={apps.map(app => (
            <div
              className="divide-x space-x-2 divide-gray-700 whitespace-normal"
              key={app['app-slug']}
            >
              <StarRating rating={app['overall-rating']} />
              <span className="pl-2 inline-block h-full">
                {(app['total-reviews'] ?? 0).toLocaleString()} Reviews
              </span>
            </div>
          ))}
        />
        <TbodyRow title="Developed by" cells={apps.map(app => app.developer)} />
        <TbodyRow
          title="Launch Date"
          cells={apps.map(app => app['launch-date'] && formatDate(app['launch-date']))}
        />
        <TbodyRow title="Pricing" cells={apps.map(app => app['price-summary'])} />
        <TbodyRow title="App objective" cells={apps.map(app => app.tagline)} />
        <TbodyRow title="Categories" cells={apps.map(app => app['categories-list']?.join(', '))} />
        <TbodyHeadingRow>Key Features & Highlights</TbodyHeadingRow>
        <TbodyRow
          title="Features List"
          cells={apps.map(
            app =>
              app['features-list'] && (
                <Collapse
                  key={app.app_id}
                  collapsible={app['features-list'].length > 3}
                  renderContent={open =>
                    app['features-list'] && (
                      <ul className="list-decimal list-inside space-y-2">
                        {(open ? app['features-list'] : app['features-list'].slice(0, 3)).map(
                          (feature, i) => (
                            <li key={i} className="!text-inherit">
                              {feature}
                            </li>
                          ),
                        )}
                      </ul>
                    )
                  }
                />
              ),
          )}
        />
        <TbodyRow
          title="Highlights"
          cells={apps.map(
            app =>
              app['highlights-list'] && (
                <ul className="list-decimal list-inside space-y-2" key={app.app_id}>
                  {app['highlights-list'].map(([highlightTitle, highlightValues], i) => (
                    <li className="!text-inherit" key={i}>
                      {highlightTitle}:{' '}
                      {Array.isArray(highlightValues)
                        ? highlightValues?.join(', ')
                        : highlightValues}
                    </li>
                  ))}
                </ul>
              ),
          )}
        />
        <TbodyHeadingRow>User Reviews and Ratings</TbodyHeadingRow>
        <TbodyRow
          title="Summary"
          cells={apps.map(app => (
            <div className="text-center max-w-[300px] mx-auto" key={app.app_id}>
              <GaugeChart
                animate={false}
                nrOfLevels={3}
                hideText
                percent={(app['overall-rating'] || 0) / 5}
                colors={['rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)']}
              />
              <div className="divide-x space-x-2 divide-gray-700">
                <StarRating rating={app['overall-rating']} />
                <span className="pl-2">{(app['total-reviews'] || 0).toLocaleString()} Reviews</span>
              </div>
            </div>
          ))}
        />
        {/* <TbodyRow */}
        {/*  title="Pros" */}
        {/*  cells={apps.map(apps => ( */}
        {/*    <ul className="list-decimal list-inside space-y-2"> */}
        {/*      {apps['highlights-list'].flat().map(highlight => ( */}
        {/*        <li>{highlight}</li> */}
        {/*      ))} */}
        {/*    </ul> */}
        {/*  ))} */}
        {/* /> */}
        {/* <TbodyRow */}
        {/*  title="Cons" */}
        {/*  cells={apps.map(apps => ( */}
        {/*    <ul className="list-decimal list-inside space-y-2"> */}
        {/*      {apps['highlights-list'].flat().map(highlight => ( */}
        {/*        <li>{highlight}</li> */}
        {/*      ))} */}
        {/*    </ul> */}
        {/*  ))} */}
        {/* /> */}
        <TbodyHeadingRow>Pricing and Plans</TbodyHeadingRow>
        <TbodyRow
          title="Total Pricing Plans"
          cells={apps.map(app => (app['free-plan-count'] || 0) + (app['paid-plan-count'] || 0))}
        />
        <TbodyRow
          title="Free plan(s)"
          cells={apps.map(app =>
            (app['free-plan-count'] || 0) > 0 ? 'Available' : 'Not available',
          )}
        />
        <TbodyRow
          title="Free Trial"
          cells={apps.map(app =>
            (app['trial-days'] ?? 0) > 0 ? `Yes, for ${app['trial-days']} day(s)` : 'No',
          )}
        />
        <TbodyRow
          title="Plan Details"
          cells={apps.map(app => (
            <div key={app.app_id}>
              {[...Array((app['free-plan-count'] || 0) + (app['paid-plan-count'] || 0))].map(
                (_, i) =>
                  app[`plan${i + 1}-name`] && (
                    <div key={i}>
                      {app[`plan${i + 1}-name`]}
                      {(app[`plan${i + 1}-cost`] || '').toLowerCase() !== 'free' &&
                        ` : ${app[`plan${i + 1}-cost`]}`}{' '}
                      <BsInfoCircle
                        id={`tooltip-comparison-${app.app_id}_${i}`}
                        className="reactIcon"
                      />
                      <Tooltip openOnClick anchorSelect={`#tooltip-comparison-${app.app_id}_${i}`}>
                        <p className="mb-2 !text-inherit">Features:</p>
                        <ul className="list-inside list-disc">
                          {app[`plan${i + 1}-features-list`]?.map((feature: string, j: number) => (
                            <li key={j} className="!text-inherit">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </Tooltip>
                    </div>
                  ),
              )}
            </div>
          ))}
        />
        <TbodyHeadingRow>App Support</TbodyHeadingRow>
        <TbodyRow
          title="Support Channels"
          cells={apps.map(app => (
            <Fragment key={app.app_id}>
              {app['support-email']}
              {app['support-phone-numbers'] &&
                app['support-phone-numbers'].length > 0 &&
                `, ${app['support-phone-numbers'].join(', ')}`}
            </Fragment>
          ))}
        />
        <TbodyRow title="Support Email" cells={apps.map(app => app['support-email'])} />
        <TbodyRow
          title="Contact Number(s)"
          cells={apps.map(
            app =>
              app['support-phone-numbers'] &&
              app['support-phone-numbers'].length > 0 &&
              `, ${app['support-phone-numbers'].join(', ')}`,
          )}
        />
        <TbodyRow
          title="FAQ Page"
          cells={apps.map(
            app =>
              app['faq-url'] && (
                <StyledAnchor key={app.app_id} primary href={app['faq-url']} target="_blank">
                  FAQ details
                </StyledAnchor>
              ),
          )}
        />
        <TbodyRow
          title="Language Support"
          cells={apps.map(app => app['translated-languages']?.join(', '))}
        />
        <TbodyHeadingRow>Integrations</TbodyHeadingRow>
        <TbodyRow
          title="Integration list"
          cells={apps.map(app => app['integrations-list']?.join(', '))}
        />
        <TbodyRow
          title=""
          cells={apps.map(app => (
            <div className="text-sm" key={app.app_id}>
              <Button key={app.app_id} primary className="w-full">
                Add To Cart
              </Button>
            </div>
          ))}
        />
      </tbody>
    </table>
  </TableContainer>
);

export default function AppComparisonTableByColumn({
  apps,
  currentApp,
}: {
  apps: AppsData[];
  currentApp: AppsData;
}) {
  return <Table apps={[currentApp, ...apps]} />;
}
