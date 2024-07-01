import React from 'react';
import { Heading } from '@/components/Heading';
import GroupedDropdown from '@/components/FormFields/GroupedDropdown';
import Link from 'next/link';

const AppBarChart: React.FC = () => {
  const filterConfig = [
    {
      id: 'timePeriod',
      default: 'today',
      label: 'Today',
      items: [
        {
          label: 'Today',
          value: 'today',
        },
        {
          label: 'Last Week',
          value: 'last-week',
        },
      ],
    },
    {
      id: 'location',
      default: 'country',
      label: 'Country',
      items: [
        {
          label: 'Country',
          value: 'country',
        },
        {
          label: 'India',
          value: 'india',
        },
      ],
    },
  ];
  return (
    <div className="mb-4 rounded-lg bg-white">
      <div className="flex mb-6 justify-between">
        <Heading as="h3" className="mt-2">
          Toal Reviews
        </Heading>
        <GroupedDropdown filters={filterConfig} />
      </div>

      <ul className="space-y-6">
        <li className="w-full items-center sm:flex">
          <div className="mb-3 flex items-center sm:mb-0">
            <svg
              className="w-6 h-6 text-green-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                clip-rule="evenodd"
              />
              <path
                fill="currentColor"
                d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
              />
            </svg>

            <span className="mx-5 ml-3 w-32 text-base font-medium text-gray-900 dark:text-white sm:flex-none">
              Whatsapp
            </span>
          </div>
          <div className="h-5 w-full rounded-lg bg-gray-200 dark:bg-gray-700">
            <div
              className="h-5 relative rounded-md bg-blue-700 p-1 text-center text-xs font-bold leading-none text-blue-600"
              style={{ width: '35%' }}
            >
              <span className="absolute -left-2 -m-6 -mt-[0px]">35%</span>
            </div>
          </div>
        </li>
        <li className="w-full items-center sm:flex">
          <div className="mb-3 flex items-center sm:mb-0">
            <svg
              className="w-6 h-6 text-red-600 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="mx-5 ml-3 w-32 flex-none text-base font-medium text-gray-900 dark:text-white">
              YouTube
            </span>
          </div>
          <div className="h-5 w-full rounded-lg bg-gray-200 dark:bg-gray-700">
            <div
              className="h-5 relative rounded-md bg-blue-700 p-1 text-center text-xs font-bold leading-none text-blue-600"
              style={{ width: '26%' }}
            >
              <span className="absolute -left-2 -m-6 -mt-[0px]"> 26%</span>
            </div>
          </div>
        </li>
        <li className="w-full items-center sm:flex">
          <div className="mb-3 flex items-center sm:mb-0">
            <svg
              className="w-6 h-6 text-blue-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="mx-5 ml-3 w-32 flex-none text-base font-medium text-gray-900 dark:text-white">
              Facebook
            </span>
          </div>
          <div className="h-5 w-full rounded-lg bg-gray-200 dark:bg-gray-700">
            <div
              className="h-5 relative rounded-md bg-blue-700 p-1 text-center text-xs font-bold leading-none text-blue-600"
              style={{ width: '18%' }}
            >
              <span className="absolute -left-2 -m-6 -mt-[0px]"> 18%</span>
            </div>
          </div>
        </li>
        <li className="w-full items-center sm:flex">
          <div className="mb-3 flex items-center sm:mb-0">
            <svg
              className="w-6 h-6 text-blue-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="mx-5 ml-3 w-32 flex-none text-base font-medium text-gray-900 dark:text-white">
              Twitter
            </span>
          </div>
          <div className="h-5 w-full rounded-lg bg-gray-200 dark:bg-gray-700">
            <div
              className="h-5 relative rounded-md bg-blue-700 p-1 text-center text-xs font-bold leading-none text-blue-600"
              style={{ width: '14%' }}
            >
              <span className="absolute -left-2 -m-6 -mt-[0px]"> 14%</span>
            </div>
          </div>
        </li>
        <li className="w-full items-center sm:flex">
          <div className="mb-3 flex items-center sm:mb-0">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="mx-5 ml-3 w-32 flex-none text-base font-medium text-gray-900 dark:text-white">
              Github
            </span>
          </div>
          <div className="h-5 w-full rounded-lg bg-gray-200 dark:bg-gray-700">
            <div
              className="h-5 relative rounded-md bg-blue-700 p-1 text-center text-xs font-bold leading-none text-blue-600"
              style={{ width: '10%' }}
            >
              <span className="absolute -left-2 -m-6 -mt-[0px]"> 10%</span>
            </div>
          </div>
        </li>
        <li className="w-full items-center sm:flex">
          <div className="mb-3 flex items-center sm:mb-0">
            <svg
              className="w-6 h-6 text-blue-700 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>

            <span className="mx-5 ml-3 w-32 flex-none text-base font-medium text-gray-900 dark:text-white">
              Discord
            </span>
          </div>
          <div className="h-5 w-full rounded-lg bg-gray-200 dark:bg-gray-700">
            <div
              className="h-5 relative rounded-md bg-blue-700 p-1 text-center text-xs font-bold leading-none text-blue-600"
              style={{ width: '7%' }}
            >
              <span className="absolute -left-2 -m-6 -mt-[0px]"> 7%</span>
            </div>
          </div>
        </li>
      </ul>
      {/* <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">
        <div className="shrink-0">
          <Link
            href="#"
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm"
          >
            Location Overview
            <svg
              className="ml-1 h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default AppBarChart;
