import React from 'react';

type PricingPlan = {
  title: string;
  type: string;
  description: string;
  price: number;
  features: string[];
  supportDuration: number;
  updateDuration: number;
  isHighlighted: Boolean;
};

const PricingSection: React.FC<{ plans: PricingPlan[] }> = ({ plans }) => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-[85rem] lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Designed for business teams like yours
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
          long-term value and drive economic growth.
        </p>
      </div>
      <div className="flex justify-center mb-8 items-center">
        <span className="text-sm text-gray-600 mr-2 font-medium">Billed</span>

        <nav className="flex overflow-x-auto items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/5 rounded-full dark:bg-gray-500/20 border">
          <button
            role="tab"
            type="button"
            className="flex whitespace-nowrap items-center h-8 px-3 font-medium rounded-full outline-none focus:ring-2 focus:ring-transparent focus:ring-inset text-black shadow bg-white dark:text-white dark:bg-yellow-600"
            aria-selected=""
          >
            Yearly
          </button>
          <button
            role="tab"
            type="button"
            className="flex whitespace-nowrap items-center h-8 px-3 font-medium rounded-full outline-none text-gray-400 focus:ring-2 focus:ring-transparent focus:ring-inset hover:text-gray-800 focus:text-black dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400"
          >
            Quartely
          </button>
        </nav>
      </div>
      <div className="flex justify-center mb-8 items-center">
        <ul className="flex flex-wrap space-y-1 items-center list-disc justify-center text-gray-500 dark:text-white">
          <li className="list-none mr-4">24-hour refund policy</li>

          <li className="!mt-0 ml-2 pr-6">Cancel Anytime</li>

          <li className="!mt-0">Secured payment through stripe</li>
        </ul>
      </div>
      <div className="lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {plans.map(plan => (
          <div key={plan.title} className="mb-8">
            <div
              className={`p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-200 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white ${
                plan.isHighlighted ? 'border-sdBlue' : ''
              }`}
            >
              <div className="mb-2">
                {plan.type && (
                  <span className="py-1 px-3 text-sm text-sdBlue bg-blue-100 font-medium rounded dark:bg-primary-200 dark:text-primary-800">
                    {plan.type}
                  </span>
                )}
              </div>
              <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {plan.description}
              </p>
              <div className="flex justify-center items-baseline my-4">
                <span className="mr-2 text-5xl font-extrabold">${plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <p className="mt-4 mb-1 text-gray-500 text-light dark:text-gray-400">
                $19 USD per month, paid annually
              </p>
              <div>
                <a
                  href="#"
                  className="inline-flex justify-center items-center font-medium text-sdBlue hover:text-blue-800 dark:text-primary-500 dark:hover:text-primary-700"
                >
                  Go to annual plan
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className={`block w-full text-white my-8 ${
                    plan.isHighlighted ? 'bg-sdBlue' : 'bg-black'
                  } ${
                    plan.isHighlighted ? 'hover:bg-blue-800' : 'hover:bg-gray-500'
                  } focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900`}
                >
                  Get started
                </a>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
