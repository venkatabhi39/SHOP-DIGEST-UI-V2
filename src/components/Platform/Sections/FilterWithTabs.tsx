import React from 'react';
import classNames from 'classnames';
import styles from '@/components/FormFields/Dropdown.module.scss';
import { Heading } from '@/components/Heading';
import Dropdown from '@/components/FormFields/Dropdown';
interface Block {
  id: string;
  name: string;
  ticker: string;
  price: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

const data: Block[] = [
  {
    id: '1',
    name: 'Tech Mahindra Ltd',
    ticker: 'TECHM',
    price: '₹1,278.75',
    change: '7.43%',
    changeType: 'increase',
  },
  {
    id: '2',
    name: 'Indian Railway Finance Corp Ltd',
    ticker: 'IRFC',
    price: '₹158.05',
    change: '5.19%',
    changeType: 'increase',
  },
  {
    id: '3',
    name: 'Havells India Ltd',
    ticker: 'HAVELLS',
    price: '₹1,640.05',
    change: '5.09%',
    changeType: 'increase',
  },
];

const BlockList: React.FC = () => {
  return (
    <div className="">
      <div className="flex mb-6 justify-between">
        <Heading as="h2" className="mt-2 text-center">
          Today's stocks
        </Heading>
        <div className="border border-gray-300 inline-flex rounded-full whitespace-nowrap">
          <Dropdown
            //icon={<ImCalendar />}
            classes={classNames(styles.smDropdownContainer)}
            value={'orderby'}
            //onChange={newCategory => setCategory(newCategory)}
            label="Order By"
            items={[
              {
                label: 'Order By',
                value: 'orderby',
              },
              {
                label: 'Sort',
                value: 'sort',
              },
            ]}
          />
        </div>
      </div>
      <div className="flex gap-3 mb-4">
        <button className="bg-blue-700 px-4 py-2 text-sm font-medium border text-white rounded-full">
          Gainers
        </button>
        <button className="px-4 py-2 text-sm font-medium border hover:bg-blue-700 hover:text-white text-gray-600  rounded-full">
          Losers
        </button>
        <button className="px-4 py-2 text-sm font-medium border hover:bg-blue-700 hover:text-white text-gray-600  rounded-full">
          Most Active
        </button>
        <button className="px-4 py-2 text-sm font-medium border hover:bg-blue-700 hover:text-white text-gray-600  rounded-full">
          52W High
        </button>
        <button className="px-4 py-2 text-sm font-medium border hover:bg-blue-700 hover:text-white text-gray-600  rounded-full">
          52W Low
        </button>
      </div>
      <div className="bg-white  rounded-lg">
        <div className="relative overflow-x-auto  sm:rounded-lg">
          <table className="w-full border text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-sm">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3 text-sm">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-sm">
                  Change
                </th>
                <th scope="col" className="px-6 py-3 text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">Wordpress</div>
                    <div className="font-normal text-gray-500">CMS</div>
                  </div>
                </th>
                <td className="px-6 py-4">$999</td>

                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">Wordpress</div>
                    <div className="font-normal text-gray-500">CMS</div>
                  </div>
                </th>
                <td className="px-6 py-4">$999</td>

                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">Wordpress</div>
                    <div className="font-normal text-gray-500">CMS</div>
                  </div>
                </th>
                <td className="px-6 py-4">$999</td>

                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">Wordpress</div>
                    <div className="font-normal text-gray-500">CMS</div>
                  </div>
                </th>
                <td className="px-6 py-4">$999</td>

                <td className="px-6 py-4">$799</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">Wordpress</div>
                    <div className="font-normal text-gray-500">CMS</div>
                  </div>
                </th>
                <td className="px-6 py-4">$999</td>

                <td className="px-6 py-4">$999</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlockList;
