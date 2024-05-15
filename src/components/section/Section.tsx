import React, { PropsWithChildren } from 'react';
import { Card, Button } from 'flowbite-react';

interface ISectionProps {}

export const Section: React.FC<PropsWithChildren<ISectionProps>> = ({ children }) => (
  <section className="bg-white dark:bg-gray-900">
    <div className="flex flex-wrap lg:flex-nowrap justify-between">
      <div className="py-16">{children}</div>
      <div className="py-16 min-w-full lg:min-w-[25%] w-full lg:w-1/4 px-0 lg:pl-8 flex flex-col justify-start lg:justify-start mt-4 lg:mt-0">
        <div className="mb-6 lg:mb-0 border rounded-md">
          <h3 className="rounded-tl-md rounded-tr-md text-lg font-semiboldmb-2 bg-black p-2 text-white text-center flex justify-center items-center">
            <span className="me-2 text-base">Join the community</span>
          </h3>
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-700 text-center">
              To know everything about Shopify
            </h3>

            <p className="text-gray-700 mb-4">
              Connect, share, and engage with community and build relationships.
            </p>
            <Button pill className="bg-primary hover:!bg-primary-900">
              Subscribe for $1
            </Button>
          </div>
        </div>

        <div className="mt-16 mb-6 lg:mb-0 border rounded-md">
          <h3 className="rounded-tl-md rounded-tr-md text-lg font-semiboldmb-2 bg-black p-2 text-white text-center flex justify-center items-center">
            <span className="me-2 text-base">Join the community</span>
          </h3>
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-700 text-center">
              To know everything about Shopify
            </h3>

            <p className="text-gray-700 mb-4">
              Connect, share, and engage with community and build relationships.
            </p>
            <Button pill className="bg-primary hover:!bg-primary-900">
              Subscribe for $1
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
