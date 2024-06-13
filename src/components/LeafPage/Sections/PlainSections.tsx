// pages/index.tsx
import React from 'react';
import TestimonalCarousel from '@/components/Blocks/TestimonalCarousel';
import { Heading } from '@/components/Heading';
import AppCards from '@/components/Cards/ImageCards/AppCards';

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
                className="mx-auto mb-4 w-12 h-12 text-blue-600 dark:text-blue-500"
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
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-primary-500 dark:hover:text-blue-400"
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
                className="mx-auto mb-4 w-12 h-12 text-blue-600 dark:text-primary-500"
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
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-primary-500 dark:hover:text-primary-400"
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
                className="mx-auto mb-4 w-12 h-12 text-blue-600 dark:text-primary-500"
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
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
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
                          className="h-5 w-5 shrink-0 text-blue-600 dark:text-primary-500"
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

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:mb-8 lg:mb-16 dark:text-white md:text-4xl">
            Grow with Flowbite
          </h2>
          <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0 md:mb-8 md:mt-12">
            <a
              href="#"
              className="block py-12 px-8 text-center bg-gray-50 rounded dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="mx-auto h-9 text-gray-600 dark:text-gray-400"
                viewBox="0 0 128 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M75.8018 29.2452C74.9522 29.8977 74.0385 30.4855 73.1248 31.008V28.2668C73.646 28.0709 74.2344 27.8097 74.7569 27.6144C75.9312 27.0919 76.9786 28.3981 75.8006 29.2452H75.8018ZM82.0024 24.6749C82.0024 24.1524 81.8718 23.7606 81.7412 23.5652C81.154 22.8469 76.8455 22.1938 73.1248 23.3034V25.3267C75.4093 25.1314 78.0852 25.0655 78.7401 25.9127C79.6538 27.0223 77.6951 31.8527 76.8461 33.9413C76.5849 34.5944 77.1757 34.8569 77.7617 34.3991C80.6987 31.9186 81.939 27.4142 82.0043 25.0637V24.6761L82.0024 24.6749ZM73.1248 31.0073C66.2705 35.1199 57.3922 37.2745 49.6895 37.2745C37.2864 37.2745 26.1889 32.7054 17.7678 25.0673C17.05 24.4802 17.6372 23.6312 18.4862 24.0883C27.5603 29.374 38.7867 32.5723 50.4079 32.5741C57.7193 32.5741 65.618 31.2039 73.1254 28.2656V31.0073H73.1248ZM73.1248 23.3016C72.124 23.6119 71.1771 24.0745 70.3171 24.673C69.6653 25.1296 69.7953 25.7168 70.4453 25.6521C71.1637 25.5214 72.0774 25.4561 73.1223 25.3255V23.3046L73.1248 23.3016Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M125.268 5.09196V4.76603C125.483 4.76807 125.696 4.72724 125.895 4.64594C126.094 4.56463 126.275 4.44448 126.427 4.29251C126.579 4.14054 126.699 3.9598 126.78 3.76087C126.861 3.56194 126.902 3.3488 126.9 3.13394C126.9 2.21962 126.117 1.50184 125.268 1.50184V1.17591C126.312 1.17591 127.228 2.02431 127.228 3.13394C127.226 4.17887 126.313 5.09441 125.27 5.09441L125.268 5.09196ZM125.268 3.32925H125.333C125.464 3.32925 125.528 3.39639 125.528 3.52517C125.528 3.59231 125.596 4.11112 125.657 4.24357H126.113C126.032 4.05799 125.987 3.85834 125.983 3.65579C125.918 3.39456 125.918 3.19863 125.591 3.13394C125.787 3.06924 126.047 3.00332 126.047 2.61208C126.047 2.02431 125.525 2.02431 125.265 2.02431V2.35085C125.395 2.35085 125.588 2.35085 125.588 2.67739C125.588 2.80801 125.523 3.00393 125.262 3.00393V3.32925H125.268ZM125.268 1.1753V1.50123C124.355 1.50123 123.571 2.21901 123.571 3.13333C123.571 4.04886 124.352 4.76298 125.268 4.76542V5.09135C124.158 5.09135 123.244 4.24296 123.244 3.13333C123.244 2.0237 124.158 1.17591 125.27 1.1753H125.268ZM125.268 2.0237H124.485V4.24357H124.942V3.32925H125.268V3.00332H124.942V2.35085H125.268V2.0237ZM95.1344 22.2601V18.3434C97.9427 18.2781 98.0727 14.2308 98.0727 11.8157C98.0727 10.1836 98.0074 8.22493 97.4849 6.65814C97.0937 5.35259 96.3106 4.83012 95.1338 4.76542V0.848147C100.618 0.915287 103.624 5.68218 103.624 11.7491C103.623 17.625 100.294 22.1966 95.1362 22.2601H95.1344ZM110.868 21.8689H107.147C106.755 21.8036 106.428 21.5423 106.428 21.1505V1.89308C106.494 1.50123 106.755 1.24061 107.147 1.24061H110.672C110.998 1.24061 111.258 1.50306 111.325 1.82777V4.76542H111.391C112.434 2.089 113.936 0.848147 116.547 0.848147C118.179 0.848147 119.873 1.43409 120.923 3.13333C121.902 4.70194 121.9 7.24714 121.9 9.13924V21.2158C121.836 21.5417 121.574 21.8682 121.182 21.8682H117.396C117.07 21.8029 116.744 21.5417 116.744 21.2158V10.8366C116.744 8.68209 117.005 5.61443 114.393 5.61443C113.479 5.61443 112.63 6.20159 112.174 7.18061C111.652 8.35555 111.586 9.53109 111.586 10.836V21.1499C111.586 21.5435 111.262 21.867 110.865 21.8689H110.868ZM70.656 4.6348V1.89308C70.656 1.50123 70.9826 1.1753 71.3744 1.1753H83.7122C84.104 1.1753 84.4324 1.49879 84.4324 1.89308V4.24357C84.4324 4.63481 84.1065 5.15727 83.5187 6.00628L77.1185 15.1446C79.469 15.0799 82.0135 15.4741 84.1681 16.6466C84.6247 16.9701 84.7541 17.3669 84.8212 17.7557V20.628C84.8212 21.0192 84.3646 21.477 83.9075 21.2805C80.0555 19.2571 75.0298 19.0606 70.8513 21.2805C70.3948 21.5417 69.9376 21.0186 69.9376 20.628V17.8863C69.9376 17.4944 69.9376 16.7107 70.3948 15.9929L77.8363 5.35197H71.3738C70.9826 5.35075 70.6548 5.0944 70.6548 4.6348H70.656ZM95.1344 0.848147V4.76542C92.3286 4.76542 92.1974 8.55147 92.1974 10.902C92.1974 13.3171 92.1327 18.3422 95.0722 18.3434H95.1332V22.2601H95.0691C89.5856 22.2601 86.5833 17.4944 86.5833 11.5544C86.5833 5.54851 89.6503 0.848147 95.0691 0.848147C95.1344 0.846316 95.1362 0.846316 95.1362 0.848147H95.1344ZM57.9917 21.8029V18.3434C58.8401 18.1475 59.5585 17.5597 60.0803 16.6466C60.7987 15.3405 60.7987 14.1661 60.7987 12.6647V11.8816C59.8197 11.8816 58.8401 11.9463 57.9917 12.1428V9.13985C58.9707 9.00863 59.9497 8.94393 60.7987 8.87862V8.35615C60.7987 7.44245 60.8634 6.39813 60.3416 5.61504C59.8844 4.96196 58.9707 4.63541 58.1876 4.63541H57.9917V0.653443H58.7729C60.6004 0.653443 62.9478 1.17835 64.3882 2.54677C66.2157 4.24357 66.085 6.5263 66.085 9.00863V14.8845C66.085 16.6485 66.8053 17.4297 67.4583 18.3453C67.7202 18.6688 67.7879 19.0655 67.4583 19.3243C66.7406 19.9774 65.3691 21.1523 64.586 21.8048C64.3248 22.0007 63.9988 22.0007 63.6729 21.8719C62.432 20.8276 62.2361 20.3704 61.519 19.3914C60.2769 20.6951 59.2289 21.4093 57.9899 21.8029H57.9917ZM57.9917 0.652832V4.6348C56.6202 4.76542 55.5112 5.48381 55.184 6.91998C55.1193 7.24652 54.8575 7.57246 54.5316 7.63837L50.8755 7.18122C50.549 7.11591 50.2231 6.91998 50.3537 6.39752C51.1374 2.28676 54.5963 0.846315 57.9899 0.652832H57.9917ZM57.9917 9.13924V12.1422C56.4249 12.5987 55.184 13.5778 55.184 15.664C55.184 17.2936 56.0324 18.4045 57.4668 18.4057C57.6627 18.4057 57.7939 18.341 57.9893 18.341V21.8005C57.1143 22.0212 56.2152 22.1319 55.3128 22.1301C52.1793 22.1301 49.6988 20.1721 49.6988 16.3195C49.6988 13.2518 51.3309 11.1626 53.6807 10.1836C54.924 9.59274 56.4884 9.33639 57.9899 9.13924H57.9917ZM8.63998 21.8029V18.3434C9.4896 18.1475 10.2727 17.5597 10.7298 16.6466C11.5123 15.3405 11.4476 14.1661 11.4476 12.6647V11.8816C10.4686 11.8816 9.4896 11.9463 8.63998 12.1428V9.13985C9.6196 9.00863 10.5986 8.94393 11.4476 8.87862V8.35615C11.4476 7.44245 11.5123 6.39813 10.9911 5.61504C10.5339 4.96196 9.68491 4.63541 8.90182 4.63541H8.63998V0.653443H9.42124C11.2493 0.653443 13.5961 1.17835 15.0976 2.54555C16.9256 4.24235 16.7272 6.52508 16.7272 9.00741V14.8833C16.7272 16.6473 17.4474 17.4285 18.1616 18.3428C18.3569 18.6663 18.424 19.0606 18.0963 19.3194C17.3785 19.9725 16.0082 21.1474 15.2239 21.7999C14.9627 21.9958 14.6361 21.9958 14.3102 21.8652C13.07 20.8209 12.874 20.3637 12.1563 19.3847C10.9258 20.6951 9.88145 21.4093 8.64242 21.8029H8.63998ZM25.5481 21.8689H21.7621C21.3702 21.8036 21.109 21.5423 21.109 21.2164V1.95839C21.109 1.56654 21.4361 1.24061 21.828 1.24061H25.2869C25.6787 1.24061 26.0071 1.5641 26.0071 1.89308V4.43888H26.0724C26.9867 1.95839 28.6835 0.848147 31.0346 0.848147C33.3839 0.848147 34.886 1.959 35.9297 4.43888C36.8434 1.95839 38.8667 0.848147 41.0866 0.848147C42.7187 0.848147 44.4192 1.50123 45.4629 2.93557C46.6378 4.56522 46.4394 6.9151 46.4394 9.00618V21.1486C46.4394 21.5405 46.1129 21.867 45.6564 21.867H41.935C41.5432 21.8017 41.2819 21.5405 41.2819 21.1486V10.9667C41.2819 10.1836 41.3472 8.09431 41.1513 7.37653C40.8901 6.07037 40.0417 5.67913 38.932 5.67913C38.0177 5.67913 37.104 6.26629 36.7122 7.24775C36.3209 8.22676 36.3209 9.85885 36.3209 10.9685V21.1523C36.3209 21.5441 35.9938 21.8707 35.6025 21.8707H31.8159C31.4899 21.8054 31.1634 21.5441 31.1634 21.1523V10.9667C31.1634 8.8127 31.4899 5.61382 28.8788 5.61382C26.1377 5.61382 26.2671 8.74739 26.2671 10.9667V21.1505C26.2651 21.3403 26.1888 21.5217 26.0546 21.656C25.9205 21.7902 25.7391 21.8666 25.5493 21.8689H25.5481ZM8.63998 0.652832V4.6348C7.33503 4.76542 6.16009 5.48381 5.83355 6.91998C5.76825 7.24652 5.57232 7.57246 5.18047 7.63837L1.52504 7.18122C1.26441 7.11591 0.872564 6.91998 1.00318 6.39752C1.78627 2.28676 5.30987 0.846315 8.64242 0.652832H8.63998ZM8.63998 9.13924V12.1422C7.0738 12.5987 5.83355 13.5778 5.83355 15.6664C5.83355 17.2961 6.68195 18.4069 8.11629 18.4081C8.31161 18.4081 8.50753 18.3434 8.63754 18.3434V21.8029C7.76292 22.0241 6.86386 22.1338 5.96173 22.1295C2.82815 22.1295 0.347656 20.1715 0.347656 16.3189C0.347656 13.2512 1.97975 11.162 4.39494 10.183C5.63763 9.59274 7.14094 9.33639 8.64242 9.13924H8.63998Z"
                  fill="currentColor"
                />
              </svg>
              <p className="font-light text-gray-500 mt-3.5 mb-4">customers since 2016</p>
              <span
                href="#"
                className="flex justify-center items-center text-base font-medium text-primary-600 dark:text-primary-500"
              >
                Visit website
                <svg
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              href="#"
              className="block py-12 px-8 text-center bg-gray-50 rounded dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="mx-auto h-10 text-gray-600 dark:text-gray-400"
                viewBox="0 0 41 50"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.6522 17.1487C39.3672 17.3698 34.3359 20.2049 34.3359 26.5087C34.3359 33.8002 40.7381 36.3798 40.9297 36.4436C40.9002 36.6009 39.9126 39.9764 37.5542 43.4158C35.4512 46.4424 33.255 49.4642 29.9138 49.4642C26.5727 49.4642 25.7129 47.5234 21.8559 47.5234C18.0971 47.5234 16.7607 49.528 13.7045 49.528C10.6484 49.528 8.51598 46.7274 6.06419 43.288C3.22425 39.2492 0.929688 32.9748 0.929688 27.0197C0.929688 17.4681 7.14023 12.4024 13.2525 12.4024C16.5003 12.4024 19.2075 14.5348 21.2466 14.5348C23.1874 14.5348 26.2141 12.2746 29.9089 12.2746C31.3092 12.2746 36.3406 12.4024 39.6522 17.1487ZM28.1548 8.23089C29.6829 6.41784 30.7639 3.90218 30.7639 1.38652C30.7639 1.03767 30.7344 0.683903 30.6705 0.398926C28.1843 0.49228 25.2265 2.05474 23.4429 4.12328C22.0426 5.71523 20.7356 8.23089 20.7356 10.7809C20.7356 11.1642 20.7995 11.5474 20.829 11.6703C20.9862 11.6998 21.2417 11.7341 21.4972 11.7341C23.7279 11.7341 26.5334 10.2405 28.1548 8.23089Z"
                  fill="currentColor"
                />
              </svg>
              <p className="font-light text-gray-500 mt-3.5 mb-4">customers since 2005</p>
              <span
                href="#"
                className="flex justify-center items-center text-base font-medium text-primary-600 dark:text-primary-500"
              >
                Visit website
                <svg
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              href="#"
              className="block py-12 px-8 text-center bg-gray-50 rounded dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="mx-auto h-9 text-gray-600 dark:text-gray-400"
                viewBox="0 0 86 29"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                  fill="currentColor"
                />
              </svg>
              <p className="font-light text-gray-500 mt-3.5 mb-4">customers since 2019</p>
              <span
                href="#"
                className="flex justify-center items-center text-base font-medium text-primary-600 dark:text-primary-500"
              >
                Visit website
                <svg
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              href="#"
              className="block py-12 px-8 text-center bg-gray-50 rounded dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="mx-auto h-8 text-gray-600 dark:text-gray-400"
                viewBox="0 0 151 34"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3753_27919)">
                  <path
                    d="M150.059 16.1144V13.4753H146.783V9.37378L146.673 9.40894L143.596 10.3464H143.538V13.4519H138.682V11.7175C138.682 10.9207 138.869 10.2996 139.221 9.8894C139.572 9.47925 140.088 9.27417 140.721 9.27417C141.189 9.27417 141.682 9.39136 142.15 9.60229L142.268 9.64917V6.88237L142.221 6.85894C141.775 6.70073 141.166 6.6187 140.416 6.6187C139.467 6.6187 138.6 6.82964 137.838 7.24448C137.076 7.64292 136.479 8.24058 136.068 8.99058C135.646 9.74058 135.436 10.6078 135.436 11.557V13.4554H133.162V16.0921H135.447V27.2015H138.717V16.0921H143.577V23.1468C143.577 26.0531 144.943 27.5296 147.655 27.5296C148.1 27.5296 148.569 27.4734 149.038 27.3773C149.524 27.2718 149.858 27.1664 150.045 27.0609L150.092 27.0374V24.3773L149.96 24.4664C149.784 24.5835 149.561 24.6855 149.304 24.7558C149.046 24.8261 148.823 24.873 148.657 24.873C148.024 24.873 147.555 24.7089 147.267 24.3726C146.969 24.0386 146.821 23.4468 146.821 22.6148V16.1226H150.079L150.072 16.1062L150.059 16.1144ZM125.813 24.88C124.626 24.88 123.689 24.4851 123.024 23.7082C122.364 22.9289 122.028 21.8167 122.028 20.4035C122.028 18.9457 122.364 17.8019 123.028 17.0097C123.689 16.2222 124.617 15.8214 125.789 15.8214C126.925 15.8214 127.816 16.2035 128.472 16.9582C129.129 17.7175 129.457 18.8496 129.457 20.3238C129.457 21.8167 129.152 22.964 128.543 23.7304C127.933 24.4921 127.019 24.8789 125.824 24.8789L125.813 24.88ZM125.964 13.1449C123.703 13.1449 121.9 13.8082 120.616 15.1183C119.339 16.4308 118.685 18.2425 118.685 20.5089C118.685 22.6652 119.318 24.3937 120.575 25.6535C121.829 26.9191 123.536 27.5753 125.646 27.5753C127.839 27.5753 129.607 26.8957 130.886 25.5773C132.175 24.2507 132.815 22.4531 132.815 20.2417C132.815 18.055 132.206 16.3089 130.999 15.0621C129.792 13.8035 128.1 13.1683 125.96 13.1683L125.964 13.1449ZM113.397 13.1683C111.85 13.1683 110.58 13.5621 109.6 14.3402C108.625 15.123 108.124 16.1449 108.124 17.3871C108.124 18.0363 108.234 18.6058 108.447 19.098C108.658 19.5832 108.986 20.0121 109.425 20.373C109.858 20.7246 110.526 21.0996 111.417 21.4839C112.167 21.7886 112.718 22.0464 113.074 22.2574C113.425 22.4531 113.674 22.6558 113.8 22.8515C113.941 23.039 114.011 23.3085 114.011 23.625C114.011 24.5554 113.322 25.0031 111.902 25.0031C111.372 25.0031 110.77 24.8929 110.111 24.675C109.447 24.4593 108.83 24.1476 108.275 23.7468L108.134 23.6531V26.7937L108.181 26.8171C108.65 27.0281 109.228 27.2156 109.916 27.3562C110.601 27.5085 111.228 27.5789 111.767 27.5789C113.443 27.5789 114.791 27.1804 115.775 26.4023C116.759 25.6148 117.263 24.5625 117.263 23.2804C117.263 22.3546 116.994 21.5578 116.461 20.9191C115.933 20.2792 115.019 19.6957 113.738 19.18C112.727 18.7699 112.074 18.43 111.793 18.1722C111.535 17.9191 111.414 17.5628 111.414 17.1128C111.414 16.7144 111.579 16.3933 111.912 16.1355C112.248 15.8718 112.716 15.7406 113.302 15.7406C113.847 15.7406 114.404 15.8226 114.966 15.9925C115.517 16.166 116.004 16.391 116.408 16.6675L116.545 16.7613V13.7613L116.498 13.7378C116.117 13.5738 115.623 13.4367 115.021 13.3277C114.424 13.214 113.881 13.1636 113.41 13.1636L113.397 13.1683ZM99.582 24.8941C98.3984 24.8941 97.4609 24.5027 96.8047 23.7222C96.1367 22.9488 95.8027 21.8355 95.8027 20.4175C95.8027 18.9644 96.1379 17.816 96.8035 17.0273C97.4598 16.2398 98.3902 15.839 99.5574 15.839C100.694 15.839 101.596 16.221 102.247 16.9757C102.894 17.7375 103.231 18.8695 103.231 20.3437C103.231 21.8343 102.915 22.9804 102.305 23.748C101.708 24.5097 100.794 24.8964 99.5867 24.8964L99.582 24.8941ZM99.7508 13.166C97.4773 13.166 95.6727 13.8269 94.3953 15.1371C93.1098 16.4496 92.4617 18.2601 92.4617 20.5277C92.4617 22.6839 93.0945 24.4113 94.3402 25.6722C95.5965 26.9378 97.3004 27.5941 99.4086 27.5941C101.612 27.5941 103.37 26.9144 104.659 25.5902C105.941 24.2613 106.592 22.4636 106.592 20.2523C106.592 18.0644 105.983 16.3183 104.787 15.0726C103.58 13.8128 101.886 13.1777 99.7484 13.1777L99.7508 13.166ZM87.5164 15.8824V13.4917H84.282V27.2378H87.5164V20.2066C87.5164 19.0113 87.7859 18.0269 88.3215 17.2828C88.8488 16.5421 89.552 16.1812 90.4074 16.1812C90.7004 16.1812 91.0285 16.2281 91.3895 16.3218C91.741 16.4156 91.9941 16.5093 92.1395 16.6265L92.2801 16.7203V13.4625L92.2285 13.439C91.9238 13.3031 91.502 13.2375 90.9629 13.2375C90.1543 13.2375 89.4277 13.5 88.8043 14.0109C88.2535 14.4656 87.8586 15.0843 87.5562 15.8578H87.4977L87.527 15.8812L87.5164 15.8824ZM78.4695 13.1636C76.9812 13.1636 75.657 13.4742 74.532 14.1011C73.3977 14.7339 72.5281 15.6246 71.9305 16.773C71.3445 17.9097 71.0398 19.2398 71.0398 20.7222C71.0398 22.023 71.3352 23.2113 71.907 24.2636C72.4859 25.3183 73.3016 26.1386 74.3328 26.7128C75.357 27.2789 76.5477 27.5683 77.8648 27.5683C79.4023 27.5683 80.7125 27.2636 81.7672 26.6542L81.8141 26.6308V23.6636L81.6734 23.7609C81.1965 24.1124 80.6656 24.3878 80.0914 24.5871C79.5195 24.7863 78.9992 24.8871 78.5445 24.8871C77.2719 24.8871 76.2547 24.4886 75.5141 23.7093C74.7641 22.9124 74.3891 21.8109 74.3891 20.4281C74.3891 19.0218 74.7875 17.8968 75.5562 17.0765C76.3297 16.2328 77.3469 15.8109 78.5914 15.8109C79.6461 15.8109 80.6855 16.1742 81.6652 16.8773L81.8059 16.971V13.8539L81.7672 13.8304C81.398 13.6195 80.8965 13.4554 80.2672 13.3218C79.6508 13.1929 79.0437 13.1296 78.4648 13.1296L78.4695 13.1636ZM68.8203 13.4578H65.5906V27.2156H68.825V13.4578H68.8203ZM67.2266 7.61011C66.6945 7.61011 66.2305 7.79058 65.8484 8.14917C65.4664 8.51011 65.2719 8.96245 65.2719 9.49683C65.2719 10.0242 65.4676 10.4695 65.8461 10.821C66.2211 11.1726 66.6898 11.346 67.2289 11.346C67.768 11.346 68.2367 11.1703 68.6176 10.8187C69.002 10.4671 69.1965 10.0218 69.1965 9.49448C69.1965 8.97886 69.009 8.53355 68.634 8.15855C68.259 7.80698 67.7902 7.61948 67.2277 7.61948L67.2266 7.61011ZM59.1535 12.4593V27.2249H62.4582V8.05425H57.8879L52.0953 22.3019L46.4586 8.0519H41.7078V27.2378H44.8133V12.4781H44.9188L50.8719 27.2414H53.2098L59.0691 12.4792H59.1805L59.1629 12.4722L59.1535 12.4593ZM16.884 18.4242H32.0949V33.648H16.8605L16.8816 18.4347L16.884 18.4242ZM0.0828125 18.4335H15.2914V33.648H0.078125L0.0828125 18.4347V18.4335ZM16.8852 1.63237H32.0961V16.8433H16.8758L16.8852 1.62769V1.63237ZM0.0828125 1.63003H15.2914V16.8433H0.078125L0.0828125 1.62769V1.63003Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3753_27919">
                    <rect
                      width="150"
                      height="32.8125"
                      fill="white"
                      transform="translate(0.0820312 0.835449)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="font-light text-gray-500 mt-3.5 mb-4">customers since 1995</p>
              <span
                href="#"
                className="flex justify-center items-center text-base font-medium text-primary-600 dark:text-primary-500"
              >
                Visit website
                <svg
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
          <h2 className="mb-3 text-3.5xl font-bold dark:text-white  text-center">
            Frequently asked questions
          </h2>
          <div className="mx-auto max-w-screen-md">
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  className="flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-1"
                >
                  <span className="text-xl">Can I use Flowbite in open-source projects?</span>
                  <svg
                    data-accordion-icon=""
                    className="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-1"
                className=""
                aria-labelledby="accordion-flush-heading-1"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components built on top of
                    Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{' '}
                    <a href="#" className="text-primary-600 dark:text-primary-500 hover:underline">
                      get started
                    </a>{' '}
                    and start developing websites even faster with components on top of Tailwind
                    CSS.
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-2">
                <button
                  type="button"
                  className="flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-2"
                >
                  <span className="text-xl">Is there a Figma file available?</span>
                  <svg
                    data-accordion-icon=""
                    className="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-2"
                className="hidden"
                aria-labelledby="accordion-flush-heading-2"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the Figma software so
                    everything you see in the library has a design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out the{' '}
                    <a href="#" className="text-primary-600 dark:text-primary-500 hover:underline">
                      Figma design system
                    </a>{' '}
                    based on the utility classes from Tailwind CSS and components from Flowbite.
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-3">
                <button
                  type="button"
                  className="flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <span className="text-xl">
                    What are the differences between Flowbite and Tailwind UI?
                  </span>
                  <svg
                    data-accordion-icon=""
                    className="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-3"
                className="hidden"
                aria-labelledby="accordion-flush-heading-3"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from Flowbite are open source
                    under the MIT license, whereas Tailwind UI is a paid product. Another difference
                    is that Flowbite relies on smaller and standalone components, whereas Tailwind
                    UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite Pro, and even
                    Tailwind UI as there is no technical reason stopping you from using the best of
                    two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 id="accordion-flush-heading-4">
                <button
                  type="button"
                  className="flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-4"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-4"
                >
                  <span className="text-xl">What about browser support?</span>
                  <svg
                    data-accordion-icon=""
                    className="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-4"
                className="hidden"
                aria-labelledby="accordion-flush-heading-4"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from Flowbite are open source
                    under the MIT license, whereas Tailwind UI is a paid product. Another difference
                    is that Flowbite relies on smaller and standalone components, whereas Tailwind
                    UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite Pro, and even
                    Tailwind UI as there is no technical reason stopping you from using the best of
                    two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16 lg:px-6">
          <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-blue-600 dark:text-primary-500">
              Trusted Worldwide
            </p>
            <h2 className="mt-3 mb-4 text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white">
              Trusted by over 600 million users and 10,000 teams
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Our rigorous security and compliance standards are at the heart of all we do. We work
              tirelessly to protect you and your customers.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-blue-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
                >
                  Explore Legality Guide
                  <svg
                    className="ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-800 dark:text-primary-500 dark:hover:text-primary-700"
                >
                  Visit the Trust Center
                  <svg
                    className="ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <svg
                className="mb-2 w-10 h-10 text-blue-600 md:w-12 md:h-12 dark:text-primary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">99.99% uptime</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                For Flowbite, with zero maintenance downtime
              </p>
            </div>
            <div>
              <svg
                className="mb-2 w-10 h-10 text-blue-600 md:w-12 md:h-12 dark:text-primary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">600M+ Users</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Trusted by over 600 milion users around the world
              </p>
            </div>
            <div>
              <svg
                className="mb-2 w-10 h-10 text-blue-600 md:w-12 md:h-12 dark:text-primary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">100+ countries</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Have used Flowbite to create functional websites
              </p>
            </div>
            <div>
              <svg
                className="mb-2 w-10 h-10 text-blue-600 md:w-12 md:h-12 dark:text-primary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">5+ Million</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">Transactions per day</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>

          <div
            id="dropdown"
            className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Export Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-center pb-10">
          <div className="px-8 ">
            <img
              className="w-44  mb-3 rounded-full shadow-lg"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            />
          </div>
          <div>
            <h5 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">Bonnie Green</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation, and capital can
              unlock long-term value and drive economic growth
            </span>
            <div className="flex mt-4 md:mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Add friend
              </a>
              <a
                href="#"
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-14">
        <div className="mx-auto ">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
              <div className="flex items-center flex-1 space-x-4">
                <h5>
                  <span className="text-gray-500">All Products:</span>
                  <span className="dark:text-white">123456</span>
                </h5>
                <h5>
                  <span className="text-gray-500">Total sales:</span>
                  <span className="dark:text-white">$88.4k</span>
                </h5>
              </div>
              <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <svg
                    className="h-3.5 w-3.5 mr-2"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Add new product
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  Update stocks 1/250
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  Export
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Stock
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Sales/Day
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Sales/Month
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Rating
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Sales
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Revenue
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Last Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          onclick="event.stopPropagation()"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                        alt="iMac Front Image"
                        className="w-auto h-8 mr-3"
                      />
                      Apple iMac 27&#34;
                    </th>
                    <td className="px-4 py-2">
                      <span className="bg-primary-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        Desktop PC
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                        95
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1.47
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      0.47
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        1.6M
                      </div>
                    </td>
                    <td className="px-4 py-2">$3.2M</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Just now
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          onclick="event.stopPropagation()"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                        alt="iMac Front Image"
                        className="w-auto h-8 mr-3"
                      />
                      Apple iMac 20&#34;
                    </th>
                    <td className="px-4 py-2">
                      <span className="bg-primary-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        Desktop PC
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                        108
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1.15
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      0.32
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        6M
                      </div>
                    </td>
                    <td className="px-4 py-2">$785K</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      This week
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          onclick="event.stopPropagation()"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-iphone-14.png"
                        alt="iMac Front Image"
                        className="w-auto h-8 mr-3"
                      />
                      Apple iPhone 14
                    </th>
                    <td className="px-4 py-2">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        Phone
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <div className="inline-block w-4 h-4 mr-2 bg-green-400 rounded-full"></div>
                        24
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1.00
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      0.95
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400">4.0</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        1.2M
                      </div>
                    </td>
                    <td className="px-4 py-2">$3.2M</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Just now
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          onclick="event.stopPropagation()"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-ipad-air.png"
                        alt="iMac Front Image"
                        className="w-auto h-8 mr-3"
                      />
                      Apple iPad Air
                    </th>
                    <td className="px-4 py-2">
                      <span className="bg-primary-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        Tablet
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <div className="inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"></div>
                        287
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      0.47
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1.00
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400">4.0</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        298K
                      </div>
                    </td>
                    <td className="px-4 py-2">$425K</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Just now
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          onclick="event.stopPropagation()"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png"
                        alt="iMac Front Image"
                        className="w-auto h-8 mr-3"
                      />
                      Xbox Series S
                    </th>
                    <td className="px-4 py-2">
                      <span className="bg-primary-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        Console
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <div className="inline-block w-4 h-4 mr-2 bg-yellow-300 rounded-full"></div>
                        450
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1.61
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      0.30
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        99
                      </div>
                    </td>
                    <td className="px-4 py-2">$345K</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      This week
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          onclick="event.stopPropagation()"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/playstation-5.png"
                        alt="iMac Front Image"
                        className="w-auto h-8 mr-3"
                      />
                      PlayStation 5
                    </th>
                    <td className="px-4 py-2">
                      <span className="bg-primary-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        Console
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <div className="inline-block w-4 h-4 mr-2 bg-green-400 rounded-full"></div>
                        2435
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1.41
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      0.11
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400">4.0</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        2.1M
                      </div>
                    </td>
                    <td className="px-4 py-2">$4.2M</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      This week
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          onclick="event.stopPropagation()"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-x.png"
                        alt="iMac Front Image"
                        className="w-auto h-8 mr-3"
                      />
                      Xbox Series X
                    </th>
                    <td className="px-4 py-2">
                      <span className="bg-primary-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        Gaming/Console
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <div className="inline-block w-4 h-4 mr-2 bg-orange-500 rounded-full"></div>
                        235
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      7.09
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      3.32
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        989K
                      </div>
                    </td>
                    <td className="px-4 py-2">$2.27M</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      This week
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          onclick="event.stopPropagation()"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-watch-se.png"
                        alt="iMac Front Image"
                        className="w-auto h-8 mr-3"
                      />
                      Apple Watch SE
                    </th>
                    <td className="px-4 py-2">
                      <span className="bg-primary-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        Watch
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <div className="inline-block w-4 h-4 mr-2 bg-yellow-300 rounded-full"></div>
                        433
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      4.96
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      0.74
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400">5.0</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        102
                      </div>
                    </td>
                    <td className="px-4 py-2">$45K</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      2 weeks ago
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          onClick="event.stopPropagation()"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/nikon-d850.png"
                        alt="iMac Front Image"
                        className="w-auto h-8 mr-3"
                      />
                      NIKON D850
                    </th>
                    <td className="px-4 py-2">
                      <span className="bg-primary-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        Photo/Video
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <div className="inline-block w-4 h-4 mr-2 bg-orange-400 rounded-full"></div>
                        351
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      0.20
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      0.74
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400">3.0</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        1.2M
                      </div>
                    </td>
                    <td className="px-4 py-2">$1.52M</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      3 weeks ago
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          onclick="event.stopPropagation()"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/benq-ex2710q.png"
                        alt="iMac Front Image"
                        className="w-auto h-8 mr-3"
                      />
                      Monitor BenQ EX2710Q
                    </th>
                    <td className="px-4 py-2">
                      <span className="bg-primary-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        TV/Monitor
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <div className="inline-block w-4 h-4 mr-2 bg-green-500 rounded-full"></div>
                        1242
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      4.12
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      0.30
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400">4.0</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 text-gray-400"
                          aria-hidden="true"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        211K
                      </div>
                    </td>
                    <td className="px-4 py-2">$1.2M</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Just now
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">1000</span>
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
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-blue-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div className="border-gray-100 border mt-14 mb-5"></div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 mx-auto sm:py-16">
          <div className="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
            <div>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Compare Flowbite to other platforms on the market
              </h2>
              <p className="mb-4 text-gray-500 sm:text-xl dark:text-gray-400">
                Here we focus on markets where technology, innovation, and capital can unlock
                long-term value and drive economic growth.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium sm:text-lg text-blue-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
              >
                Learn what makes Flowbite different{' '}
                <svg
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
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
              <a
                href="#"
                className="flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 shadow dark:bg-gray-800 dark:hover:bg-gray-700 border-primary-600 dark:border-primary-500 hover:bg-gray-50"
              >
                <div>
                  <span className="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                    Simplicity and Affordability
                  </span>
                  <span className="text-xl font-semibold text-blue-600 dark:text-blue-500">
                    Flowbite vs Google
                  </span>
                </div>
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 border-purple-600 shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-purple-500 hover:bg-gray-50"
              >
                <div>
                  <span className="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                    Built for customer support
                  </span>
                  <span className="text-xl font-semibold text-purple-600 dark:text-purple-500">
                    Microsoft vs Apple
                  </span>
                </div>
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="flex justify-between items-center p-4 bg-white rounded-lg border-l-8 border-teal-600 shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-teal-500 hover:bg-gray-50"
              >
                <div>
                  <span className="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                    Modern and intuitive ui
                  </span>
                  <span className="text-xl font-semibold text-teal-600 dark:text-teal-500">
                    Zendesk vs Meet
                  </span>
                </div>
                <svg
                  className="w-6 h-6 text-teal-600 dark:text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="border-gray-100 border mt-5 mb-10"></div>

      <div className="grid grid-cols-3">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="border-gray-100 border mt-10 mb-10"></div>

      <div>
        <h3 className="mb-0 mt-0">More By this developer</h3>
        <AppCards />
      </div>

      <div className="border-gray-100 border mt-5 mb-10"></div>

      <div>
        <h3 className="mb-0 mt-0">You might also like</h3>
        <AppCards />
      </div>
    </div>
  );
};

export default PlainSections;
