// components/UserTable.tsx
import React from 'react';
import { NextPage } from 'next';
import { Table, Pagination, TextInput, Checkbox, Rating } from 'flowbite-react';
import classNames from 'classnames';
import { Heading } from '@/components/Heading';
import GroupedDropdown from '@/components/FormFields/GroupedDropdown';
import styles from '@/components/FormFields/Dropdown.module.scss';
import Dropdown from '@/components/FormFields/Dropdown';

type User = {
  id: number;
  name: string;
  imgUrl: string;
  email: string;
  department: string;
  status: string;
  checked: Boolean;
};

type UserTableProps = {
  users: User[];
};

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;

  const filterConfig = [
    {
      id: 'criteria',
      default: 'today',
      label: 'Criteria',
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
      id: 'date-pair',
      default: 'reviews',
      label: 'Reviews',
      items: [
        {
          label: 'Reviews',
          value: 'reviews',
        },
        {
          label: 'Ratings',
          value: 'ratings',
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

  const OrderBy = [
    {
      id: 'criteria',
      default: 'today',
      label: 'Criteria',
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
  ];

  return (
    <section className="">
      <div className="">
        <div className="bg-white dark:bg-gray-800 border relative sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <GroupedDropdown filters={filterConfig} />
              </form>
            </div>
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <GroupedDropdown filters={OrderBy} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Department
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Promote
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <div className=" flex  items-center">
                          <img src={user.imgUrl} className="w-5 h-5 rounded-full mr-2" />
                          <div className="text-base font-medium">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.department}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          checked={user.checked}
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center">
                        <button
                          id={`user-dropdown-button-${user.id}`}
                          data-dropdown-toggle={`user-dropdown-${user.id}`}
                          className="inline-flex items-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"
                          type="button"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0zm5 0a2 2 0 114 0 2 2 0 01-4 0zM8 14a2 2 0 110 4 2 2 0 010-4zm5 0a2 2 0 110 4 2 2 0 010-4z"></path>
                          </svg>
                        </button>
                        <div
                          id={`user-dropdown-${user.id}`}
                          className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                        >
                          <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby={`user-dropdown-button-${user.id}`}
                          >
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Show
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </a>
                            </li>
                          </ul>
                          <div className="py-1">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid px-0 border-t-0 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row text-center justify-center sm:justify-between my-4 px-4">
              <div className="inline-flex justify-center sm:justify-start items-center space-x-3">
                <label for="rows" class="text-xs font-normal text-gray-500 dark:text-gray-400">
                  Rows per page
                </label>
                <select
                  id="rows"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block py-1.5 pl-3.5 pr-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="" value="10">
                    10
                  </option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <div className="text-xs font-normal text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                  of
                  <span className="font-semibold text-gray-900 dark:text-white">100</span>
                </div>
              </div>
              <div className="-mt-2">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(users.length / itemsPerPage)}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TopAppsTable: NextPage = () => {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      imgUrl: 'https://flowbite.com/application-ui/demo/images/users/bonnie-green.png',
      email: 'john@example.com',
      department: 'Engineering',
      checked: true,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      imgUrl: 'https://flowbite.com/application-ui/demo/images/users/jese-leos.png',
      email: 'jane@example.com',
      department: 'Marketing',
      checked: false,
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'Sam Brown',
      imgUrl: 'https://flowbite.com/application-ui/demo/images/users/leslie-livingston.png',
      email: 'sam@example.com',
      department: 'Sales',
      checked: true,
      status: 'Active',
    },
    {
      id: 4,
      name: 'John Doe',
      imgUrl: 'https://flowbite.com/application-ui/demo/images/users/bonnie-green.png',
      email: 'john@example.com',
      department: 'Engineering',
      checked: true,
      status: 'Active',
    },
    {
      id: 5,
      name: 'Jane Smith',
      imgUrl: 'https://flowbite.com/application-ui/demo/images/users/jese-leos.png',
      email: 'jane@example.com',
      department: 'Marketing',
      checked: false,
      status: 'Inactive',
    },
    {
      id: 6,
      name: 'Sam Brown',
      imgUrl: 'https://flowbite.com/application-ui/demo/images/users/leslie-livingston.png',
      email: 'sam@example.com',
      department: 'Sales',
      checked: true,
      status: 'Active',
    },
  ];

  return (
    <div>
      <UserTable users={users} />
    </div>
  );
};

export default TopAppsTable;
