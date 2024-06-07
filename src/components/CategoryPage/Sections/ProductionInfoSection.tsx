import type { NextPage } from 'next';
import { useState } from 'react';
import { AccordionComponent } from '@/components/Accordion/Accordion';
import { Heading } from '@/components/Heading';
import { ProductForm } from '@/components/Cards/Forms/ProductForm';

export const sampleAccordionData: AccordionItem[] = [
  {
    title: 'Warranty',
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on top of Tailwind CSS
          including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to&nbsp;
          <a
            href="https://flowbite.com/docs/getting-started/introduction/"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            get started&nbsp;
          </a>
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </>
    ),
  },
  {
    title: 'Questions',
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software so everything you
          see in the library has a design equivalent in our Figma file.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out the
          <a
            href="https://flowbite.com/figma/"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            Figma design system
          </a>
          based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </>
    ),
  },
  {
    title: 'More details',
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Flowbite are open source under the
          MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite
          relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as
          there is no technical reason stopping you from using the best of two worlds.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
          <li>
            <a
              href="https://flowbite.com/pro/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Flowbite Pro
            </a>
          </li>
          <li>
            <a
              href="https://tailwindui.com/"
              rel="nofollow"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Tailwind UI
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

const ProductionInfoSection: NextPage = () => {
  return (
    <div className="border rounded-xl">
      <Heading as="h3" className="p-4 text-gray-900 bg-gray-100 rounded-tl-xl rounded-tr-xl">
        Product Features
      </Heading>
      <div className="flex">
        <div className="w-full lg:w-9/12 p-6">
          <p className="mb-4">
            A-Grade/CR: iMacs are in 9/10 Cosmetic Condition and are 100% Fully Functional. iMacs
            will be shipped in generic packaging and will contain generic accessories. 90 Days
            Seller Warranty Included. iMacs may show signs of wear like scratches, scuffs and minor
            dents.
          </p>
          <AccordionComponent items={sampleAccordionData} />
        </div>
        <div className="w-full lg:w-1/4 p-6 bg-gray-50 border my-6 mr-6 rounded-lg">
          <ProductForm />
        </div>
      </div>
    </div>
  );
};

export default ProductionInfoSection;
