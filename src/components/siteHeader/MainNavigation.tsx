/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import SectionContainer from '../appPage/SectionContainer';
import logo from '@/assets/shopdigest logo.svg';
import { PropsWithChildren } from 'react';
import { useToggle } from 'react-use';
import classNames from 'classnames';

export default function MainNavigation({ children }: PropsWithChildren) {
  const [visible, toggleVisible] = useToggle(false);

  return (
    <nav className="bg-white border-gray-200 py-2.5">
      <SectionContainer>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex flex-row gap-3">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => toggleVisible()}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <a href="/" className="flex items-center">
              <Image src={logo} className=" mr-3 h-6 w-6 sm:w-9 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-[1.35rem] font-semibold whitespace-nowrap dark:text-white">
                Shop Digest
              </span>
            </a>
          </div>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Get started
            </a>
          </div>
          <div
            className={classNames(
              'justify-between items-center w-full lg:flex lg:w-auto lg:order-1',
              !visible && 'max-lg:hidden',
            )}
            id="mobile-menu-2"
          >
            {children}
          </div>
        </div>
      </SectionContainer>
    </nav>
  );
}
