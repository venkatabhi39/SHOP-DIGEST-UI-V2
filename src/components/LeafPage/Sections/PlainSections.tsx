// pages/index.tsx
import React from 'react';
import TestimonalCarousel from '@/components/Blocks/TestimonalCarousel';
import { Heading } from '@/components/Heading';

const PlainSections: React.FC = () => {
  return (
    <div className="">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            The most trusted cryptocurrency platform
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here are a few reasons why you should choose Flowbite
          </p>
          <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <svg
                viewBox="0 0 20 20"
                className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Secure storage</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                We store the vast majority of the digital assets in secure offline storage.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
              >
                Learn how to keep your funds safe{' '}
                <svg
                  viewBox="0 0 20 20"
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div>
              <svg
                viewBox="0 0 20 20"
                className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Insurance</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Flowbite maintains crypto insurance and all USD cash balances are covered.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
              >
                Learn how your crypto is covered{' '}
                <svg
                  viewBox="0 0 20 20"
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div>
              <svg
                viewBox="0 0 20 20"
                className="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Best practices</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Flowbite marketplace supports a variety of the most popular digital currencies.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
              >
                How to implement best practices{' '}
                <svg
                  viewBox="0 0 20 20"
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-3 sm:py-5 ">
        <div className="">
          <div className="border relative overflow-hidden bg-white shadow-md dark:bg-gray-900 sm:rounded-lg">
            <div className="flex flex-col items-start justify-between p-4 space-y-3 dark:bg-gray-800 md:flex-row md:items-center md:space-y-0 md:space-x-4">
              <div className="flex items-center">
                <h5 className="mr-3 font-semibold dark:text-white">Compare Products</h5>
                <div data-tooltip-target="info-tooltip">
                  <svg
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-400"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    />
                  </svg>
                  <span className="sr-only">More info</span>
                </div>
                <div
                  id="info-tooltip"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Selected Xbox Series S, PlayStation 5, and Xbox Series X
                  <div className="tooltip-arrow" data-popper-arrow=""></div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-end flex-shrink-0 w-auto space-x-3">
                <button
                  type="button"
                  className="flex items-center justify-center flex-shrink-0 px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3.5 w-3.5 mr-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    ></path>
                  </svg>
                  Add new product
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    viewBox="0 0 20 20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-2 text-gray-400"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    />
                  </svg>
                  Reset all
                </button>
              </div>
            </div>
            <div className="mx-4 dark:mx-0 border-t dark:border-gray-700 dark:bg-gray-800"></div>
            <div className="flex flex-col items-center justify-between p-4 space-y-3 dark:bg-gray-800 md:flex-row md:space-y-0 md:space-x-4">
              <ul className="flex-wrap hidden text-sm font-medium text-center text-gray-500 md:flex dark:text-gray-400">
                <li className="mr-4">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    General Information
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-white rounded-full bg-primary-600 active"
                    aria-current="page"
                  >
                    Technical Information
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Delivery Information
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Ratings
                  </a>
                </li>
              </ul>

              <select
                id="list-navigation"
                className="md:hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected>Overview</option>
                <option value="general">General Information</option>
                <option value="technical">Technical Information</option>
                <option value="delivery">Delivery Information</option>
                <option value="ratings">Ratings</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-900 dark:text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3"></th>
                    <th scope="col" className="px-4 py-3">
                      <div className="text-lg">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png"
                          alt="iMac Front Image"
                          className="w-auto h-32"
                        />
                        <div className="mt-4">Xbox Series S</div>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <div className="text-lg">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/playstation-5.png"
                          alt="iMac Front Image"
                          className="w-auto h-32"
                        />
                        <div className="mt-4">PlayStation 5</div>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <div className="text-lg">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-x.png"
                          alt="iMac Front Image"
                          className="w-auto h-32"
                        />
                        <div className="mt-4">Xbox Series X</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      colspan="4"
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      General Information
                    </th>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Brand
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Microsoft
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Sony
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Microsoft
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Product Name
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Xbox Series S
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      PlayStation 5
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Xbox Series X
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Colors
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      White
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      White/Black
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Black
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Category
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Gaming/Console
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Gaming/Console
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Gaming/Console
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Price
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $499
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $599
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $299
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      colspan="4"
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Technical Information
                    </th>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Platform
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Xbox Series S
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      PlayStation 5 Digital Edition
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Xbox Series X
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      RAM
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      16GB GDDR6
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      16GB GDDR6
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      16GB GDDR
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      CPU
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      8-core, 3.6 GHz AMD Zen 2
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      8-core 3.5 GHz AMD Zen 2
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      8-core 3.8 GHz AMD Zen 2
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      GPU
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      4 teraflop AMD RDNA 2
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      10.3 teraflop AMD RDNA 2
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      12 teraflop AMD RDNA 2
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Storage
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      512 GB custom NVMe SSD
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      825 GB custom SSD
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1 TB custom SSD
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Resolution
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Up to 2K
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Up to 8K
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Up to 8K
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Frame Rate
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Up to 120 fps
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Up to 120 fps
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Up to 120 fps
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Optical Drive
                    </th>
                    <td className="px-4 py-3 text-red-500 whitespace-nowrap">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </td>
                    <td className="px-4 py-3 font-medium text-green-500 whitespace-nowrap">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </td>
                    <td className="px-4 py-3 font-medium text-green-500 whitespace-nowrap">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Controller
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Web Connection
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Ethernet/Wi-Fi
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Ethernet/Wi-Fi
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Ethernet/Wi-Fi
                    </td>
                  </tr>

                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      colspan="4"
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Delivery
                    </th>
                  </tr>

                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Country
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Worldwide
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Worldwide
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Worldwide
                    </td>
                  </tr>

                  <tr className="border-b dark:border-gray-600">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Duration
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      5-10 Days
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      30 Days
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      30 Days
                    </td>
                  </tr>

                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Tax
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      2.5%
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      2.5%
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      2.5%
                    </td>
                  </tr>

                  <tr className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-normal whitespace-nowrap">
                      Tax
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      2.5%
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      2.5%
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      2.5%
                    </td>
                  </tr>

                  <tr>
                    <th scope="row" className="px-4 py-3"></th>
                    <td className="px-4 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <button
                        type="button"
                        className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        Add to cart
                      </button>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <button
                        type="button"
                        className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        Add to cart
                      </button>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <button
                        type="button"
                        className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        Add to cart
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div
            id="accordion-flush"
            data-accordion="open"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-xl font-semibold leading-none text-gray-900 dark:border-gray-700 dark:text-white sm:text-2xl rtl:text-right"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span> Product description </span>
                <svg
                  viewBox="0 0 20 20"
                  data-accordion-icon
                  className="h-6 w-6 shrink-0"
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
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              className=""
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="border-b border-gray-200 py-6 dark:border-gray-700 lg:py-8">
                <div className="space-y-6 lg:space-y-16">
                  <div className="grid lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-6">
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        The iMac "M1" 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2021) model
                        features a 5-nm Apple M1 processor with 8 cores (4 performance cores and 4
                        efficiency cores), an 8-core GPU, a 16-core Neural Engine, 8 GB of onboard
                        RAM, and a 1 TB onboard SSD.
                      </p>

                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        This all is housed in a wafer thin aluminum case with flat edges that
                        includes a 23.5" 4480x2520, 218 PPI, LED-backlit, "True Tone" widescreen
                        "Retina 4.5K" display mounted on a svelte aluminum stand. This specific
                        model is offered in the a two-tone Blue color. It also has an integrated
                        1080p FaceTime HD camera, a "studio-quality three-mic array" and a
                        "high-fidelity six-speaker system" that supports Spatial Audio with Dolby
                        Atmos.
                      </p>

                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Connectivity includes two Thunderbolt / USB 4 ports and two USB 3 ports (all
                        with a USB-C connector), a 3.5 mm headphone jack conveniently mounted on the
                        left edge of the display, Wi-Fi 6 (802.11ax), and Bluetooth 5.0.
                      </p>
                    </div>
                    <div className="mx-auto hidden max-w-md shrink-0 lg:flex lg:max-w-lg">
                      <img
                        className="w-full dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg"
                        alt=""
                      />
                      <img
                        className="hidden w-full dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-xl font-semibold leading-none text-gray-900 dark:border-gray-700 dark:text-white sm:text-2xl rtl:text-right"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <span> Technical details </span>
                <svg
                  viewBox="0 0 20 20"
                  data-accordion-icon
                  className="h-6 w-6 shrink-0"
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
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              className="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="border-b border-gray-200 py-6 dark:border-gray-700 lg:py-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-gray-500 dark:text-gray-400">
                    <thead>
                      <tr>
                        <th scope="col" className="min-w-72">
                          <span className="sr-only">Name</span>
                        </th>
                        <th scope="col" className="min-w-[36rem] whitespace-nowrap">
                          <span className="sr-only">Description</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th scope="row" className="p-4 font-medium text-gray-900 dark:text-white">
                          Display
                        </th>
                        <td className="p-4">
                          24-inch 4.5K Retina display, 4480x2520 resolution at 218 pixels per inch
                          with support for 1 billion colours, 500 nits brightness, Wide colour (P3),
                          True Tone technology
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                        >
                          Processor
                        </td>
                        <td className="p-4">
                          Apple M1 chip, 8-core CPU with 4 performance cores and 4 efficiency cores,
                          7-core GPU
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td
                          scope="row"
                          className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                        >
                          Video Support and Camera
                        </td>
                        <td className="p-4">
                          1080p FaceTime HD camera with M1 image signal processor, Thunderbolt 3
                          digital video output
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                        >
                          Connections and Expansion
                        </td>
                        <td className="p-4">
                          Two Thunderbolt / USB 4 ports with support for: DisplayPort, Thunderbolt 3
                          (up to 40Gb/s), USB 4 (up to 40Gb/s), USB 3.1 Gen 2 (up to 10Gb/s),
                          Thunderbolt 2, HDMI, DVI and VGA supported using adapters (sold
                          separately), 3.5mm headphone jack, Configurable with Gigabit Ethernet
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td
                          scope="row"
                          className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                        >
                          Wireless
                        </td>
                        <td className="p-4 text-gray-500 dark:text-gray-400 ">
                          Wi‑Fi, 802.11ax Wi‑Fi 6 wireless networking, IEEE 802.11a/b/g/n/ac
                          compatible, Bluetooth, Bluetooth 5.0 wireless technology
                        </td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                        >
                          In the Box
                        </td>
                        <td className="p-4">
                          iMac, Magic Keyboard, Magic Mouse, 143W power adapter, Power lead (2m),
                          USB‑C to Lightning Cable
                        </td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td
                          scope="row"
                          className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                        >
                          Height
                        </td>
                        <td className="p-4">46.1 cm (18.1 inches)</td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                        >
                          Width
                        </td>
                        <td className="p-4">54.7 cm (21.5 inches)</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td
                          scope="row"
                          className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                        >
                          Depth
                        </td>
                        <td className="p-4">14.7 cm (5.8 inches)</td>
                      </tr>
                      <tr>
                        <td
                          scope="row"
                          className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                        >
                          Weight
                        </td>
                        <td className="p-4">4.46 kg (9.83 pounds)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h2 id="accordion-flush-heading-3">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-xl font-semibold leading-none text-gray-900 dark:border-gray-700 dark:text-white sm:text-2xl rtl:text-right"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <span> Questions </span>
                <svg
                  viewBox="0 0 20 20"
                  data-accordion-icon
                  className="h-6 w-6 shrink-0"
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
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-3"
              className="hidden"
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="border-b border-gray-200 py-6 dark:border-gray-700 lg:py-8">
                <div className="flow-root">
                  <div className="divide-y divide-gray-200 dark:divide-gray-800">
                    <div className="space-y-4 pb-8">
                      <div className="md:flex md:flex-row-reverse md:items-center md:justify-end md:gap-4">
                        <span className="me-2 shrink-0 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          {' '}
                          1 answer{' '}
                        </span>

                        <p className="mt-4 text-xl font-semibold text-gray-900 dark:text-white sm:mt-0">
                          “The specs say this model has 2 USB ports. The one I received has none.
                          Are they hidden somewhere?”
                        </p>
                      </div>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        It’s a USB-C port it’s a smaller port. Not the regular size USB port. See
                        the picture below. It fits the newer Apple chargers.
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Answered 1 day ago by
                        <a href="#" className="text-gray-900 dark:text-white hover:underline">
                          Bonnie Green
                        </a>
                      </p>
                    </div>

                    <div className="space-y-4 py-8">
                      <div className="md:flex md:flex-row-reverse md:items-center md:justify-end md:gap-4">
                        <span className="me-2 shrink-0 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          {' '}
                          3 answers{' '}
                        </span>
                        <p className="mt-4 text-xl font-semibold text-gray-900 dark:text-white sm:mt-0">
                          “Is this just the monitor?”
                        </p>
                      </div>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        It's an all-in-one (AIO). Which means everything in one structure. So it's
                        not just a monitor it uses Apple's operating System, macOS and it has
                        storage, CPU, GPU etc.
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Answered 1 day ago by
                        <a href="#" className="text-gray-900 dark:text-white hover:underline">
                          Jese Leos
                        </a>
                      </p>
                    </div>

                    <div className="space-y-4 py-8">
                      <div className="md:flex md:flex-row-reverse md:items-center md:justify-end md:gap-4">
                        <span className="me-2 shrink-0 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          {' '}
                          12 answers{' '}
                        </span>

                        <p className="mt-4 text-xl font-semibold text-gray-900 dark:text-white sm:mt-0">
                          “For an inexpert 85-year-old general user with a ten-year old iMac (OSX
                          Yosemite version 10.10.5), is this latest model 24" iMac with Retina 4.5K
                          display Apple M1 8GB memory - 256GB SSD a decent upgrade?”
                        </p>
                      </div>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        It's basically the same system as your older machine, but bigger, lighter
                        and faster. There is no disc drive and it has fewer ports.
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Answered 2 days ago by
                        <a href="#" className="text-gray-900 dark:text-white hover:underline">
                          Bonnie Green
                        </a>
                      </p>
                    </div>

                    <div className="space-y-4 py-8">
                      <div className="md:flex md:flex-row-reverse md:items-center md:justify-end md:gap-4">
                        <span className="me-2 shrink-0 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          {' '}
                          5 answers{' '}
                        </span>

                        <p className="mt-4 text-xl font-semibold text-gray-900 dark:text-white sm:mt-0">
                          “I just brought home the Imac24". It saysthe mouse and Keyboard are
                          wireless. Where do I install the power for them?”
                        </p>
                      </div>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        You can charge the mouse and keyboard with a lightning charger. Once
                        charged, they last months before having to charge again.
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Answered 2 days ago by
                        <a href="#" className="text-gray-900 dark:text-white hover:underline">
                          Roberta Casas
                        </a>
                      </p>
                    </div>

                    <div className="space-y-4 pt-8">
                      <div className="md:flex md:flex-row-reverse md:items-center md:justify-end md:gap-4">
                        <span className="me-2 shrink-0 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          {' '}
                          2 answers{' '}
                        </span>

                        <p className="mt-4 text-xl font-semibold text-gray-900 dark:text-white sm:mt-0">
                          “Does this include the keyboard and mouse?”
                        </p>
                      </div>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Yes it does, color matched to the Mac. And the keyboard has Touch ID.
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Answered 1 week ago by
                        <a href="#" className="text-gray-900 dark:text-white hover:underline">
                          Joseph McFallen
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="accordion-flush-heading-4">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-xl font-semibold leading-none text-gray-900 dark:border-gray-700 dark:text-white sm:text-2xl rtl:text-right"
                data-accordion-target="#accordion-flush-body-4"
                aria-expanded="false"
                aria-controls="accordion-flush-body-4"
              >
                <span> Warranty </span>
                <svg
                  viewBox="0 0 20 20"
                  data-accordion-icon
                  className="h-6 w-6 shrink-0"
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
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-4"
              className="hidden"
              aria-labelledby="accordion-flush-heading-4"
            >
              <div className="py-6 lg:py-8">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <TestimonalCarousel />
      </div>

      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="lg:flex lg:items-start lg:gap-12">
            <div className="w-full shrink-0 space-y-6 lg:max-w-sm">
              <div className="space-y-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-3xl font-semibold leading-none text-gray-900 dark:text-white">
                      4.0
                    </p>
                    <div className="flex items-center gap-0.5">
                      <svg
                        className="h-5 w-5 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-gray-300 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-base font-medium leading-none text-gray-900 dark:text-white">
                    based on 23 ratings
                  </p>
                </div>

                <div className="min-w-0 flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                      5
                    </p>
                    <svg
                      className="h-4 w-4 shrink-0 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>

                    <div className="h-3 w-48 max-w-xs rounded-sm bg-gray-200 dark:bg-gray-700">
                      <div className="h-3 rounded-sm bg-green-500" style={{ width: '60%' }}></div>
                    </div>
                    <a
                      href="#"
                      className="shrink-0 text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500"
                    >
                      {' '}
                      239 reviews{' '}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                      4
                    </p>
                    <svg
                      className="h-4 w-4 shrink-0 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>

                    <div className="h-3 w-48 max-w-xs rounded-sm bg-gray-200 dark:bg-gray-700">
                      <div className="h-3 rounded-sm bg-green-400" style={{ width: '20%' }}></div>
                    </div>
                    <a
                      href="#"
                      className="shrink-0 text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500"
                    >
                      {' '}
                      75 reviews{' '}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                      3
                    </p>
                    <svg
                      className="h-4 w-4 shrink-0 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>

                    <div className="h-3 w-48 max-w-xs rounded-sm bg-gray-200 dark:bg-gray-700">
                      <div className="h-3 rounded-sm bg-yellow-300" style={{ width: '30%' }}></div>
                    </div>
                    <a
                      href="#"
                      className="shrink-0 text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500"
                    >
                      {' '}
                      106 reviews{' '}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                      2
                    </p>
                    <svg
                      className="h-4 w-4 shrink-0 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>

                    <div className="h-3 w-48 max-w-xs rounded-sm bg-gray-200 dark:bg-gray-700">
                      <div className="h-3 rounded-sm bg-orange-500" style={{ width: '30%' }}></div>
                    </div>
                    <a
                      href="#"
                      className="shrink-0 text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500"
                    >
                      {' '}
                      40 reviews{' '}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                      1
                    </p>
                    <svg
                      className="h-4 w-4 shrink-0 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>

                    <div className="h-3 w-48 max-w-xs rounded-sm bg-gray-200 dark:bg-gray-700">
                      <div className="h-3 rounded-sm bg-red-600" style={{ width: '10%' }}></div>
                    </div>
                    <a
                      href="#"
                      className="shrink-0 text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500"
                    >
                      {' '}
                      20 reviews{' '}
                    </a>
                  </div>
                </div>
              </div>

              <button
                type="button"
                data-drawer-target="add-review-drawer"
                data-drawer-show="add-review-drawer"
                data-drawer-placement="right"
                className="mb-2 me-2 rounded-lg border border-primary-700 px-5 py-2.5 text-sm font-medium text-primary-500 hover:bg-primary-200 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Show more...
              </button>
            </div>

            <div className="mt-0 min-w-0 flex-1 lg:mt-0">
              <div className="mt-6 divide-y divide-gray-200 pl-10  border-l dark:divide-gray-700 dark:border-gray-700">
                <div className="gap-8 py-6 sm:flex sm:items-start ">
                  <div className="min-w-0 flex-1 space-y-4">
                    <h3 className=" text-gray-900 dark:text-white">Loved the most</h3>
                    <ul className="mt-2 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                      <li className="flex items-center gap-1.5">
                        <svg
                          className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                        Top-notch peripherals
                      </li>
                      <li className="flex items-center gap-1.5">
                        <svg
                          className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                        Fair offer
                      </li>
                      <li className="flex items-center gap-1.5">
                        <svg
                          className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500"
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
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                        Extended warranty
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 shrink-0 sm:mt-0 md:w-64">
                    <h3 className=" text-gray-900 dark:text-white">Disliked the most</h3>
                    <ul className="mt-2 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                      <li className="flex items-center gap-1.5"></li>
                      <li className="flex items-center gap-1.5">
                        <svg
                          className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500"
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
                            d="M6 18 17.94 6M18 18 6.06 6"
                          />
                        </svg>
                        Shipping time
                      </li>
                      <li className="flex items-center gap-1.5"></li>
                      <li className="flex items-center gap-1.5">
                        <svg
                          className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500"
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
                            d="M6 18 17.94 6M18 18 6.06 6"
                          />
                        </svg>
                        Lack of premium materials
                      </li>
                      <li className="flex items-center gap-1.5"></li>
                      <li className="flex items-center gap-1.5">
                        <svg
                          className="h-5 w-5 shrink-0 text-red-600 dark:text-red-500"
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
                            d="M6 18 17.94 6M18 18 6.06 6"
                          />
                        </svg>
                        Does not come with OS installed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <div className="mt-6 flex items-center justify-center sm:mt-8 lg:mt-12">
                <button
                  type="button"
                  className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  View more reviews
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlainSections;
