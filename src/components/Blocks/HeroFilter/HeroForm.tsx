import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal } from 'flowbite-react';

import { Divider } from '../../Divider';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { PopularLinks } from './PopularLinks';
import { IoSearch } from 'react-icons/io5';

const HeroForm: React.FC = ({ isStickyState }) => {
  const [openModal, setOpenModal] = useState(false);

  const [isSticky, setIsSticky] = useState(false);
  // const headerRef = useRef<HTMLDivElement>(null); // Create a ref for the header element

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Ensure the headerRef.current is not null before accessing `offsetTop`
  //     if (headerRef.current) {
  //       const sticky = headerRef.current.offsetTop;
  //       // console.log(window.scrollY, sticky - 301);
  //       setIsSticky(sticky - 301 > 0);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div
      // ref={headerRef}
      className={`w-full top-14 z-10  ${isSticky ? 'shadow-md bg-white' : 'shadow-none'}`}
    >
      <div
        className={`max-w-full lg:max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ${
          isStickyState ? 'pt-0 pb-4' : 'py-5'
        }`}
      >
        <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
          {/* <div className="text-center">
            <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
              Turn online shoppers into <span className="text-blue-500">lifetime customers</span>
            </h1>
          </div> */}

          <form>
            <div className="md:h-[58px] bg-white mx-auto max-w-2xl sm:flex items-center sm:space-x-3 p-2  border rounded-lg sm:rounded-full shadow-md  dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2] justify-start">
              {isStickyState && (
                <>
                  <div className="flex items-center pb-2 sm:pb-0 sm:flex-[1_0_0%] w-full xl:max-w-28 md:border-none border border-r-0 border-l-0 border-t-0">
                    <select
                      id="referring-domain"
                      className="placeholder-gray-900 font-medium bg-transparent  border-none focus:border-white focus:ring-0 w-full lg:min-w-28  text-gray-900 text-sm rounded-lg  block  py-2 lg:py-1 px-2 lg:px-2 pl-2 lg:pl-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value="" selected disabled>
                        Apps
                      </option>
                      <option>Agencies</option>
                      <option>Themes</option>
                      <option>Services</option>
                      <option>Agencies</option>
                    </select>
                  </div>
                  <Divider className="hidden lg:inline !self-center border-gray-100 h-[30px] mt-1" />
                </>
              )}

              <div className="flex items-center pb-2 sm:pb-0 pt-2 sm:pt-0 sm:flex-[1_0_0%] w-full xl:max-w-36">
                <select
                  id="referring-domain"
                  className="placeholder-gray-900 font-medium bg-transparent  border-none focus:border-white focus:ring-0 w-full lg:min-w-32  text-gray-900 text-sm rounded-lg  block  py-2 lg:py-1 px-4 lg:px-4 pl-2 lg:pl-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="" selected disabled>
                    Platform
                  </option>
                  <option>Flowbite.com</option>
                  <option>Facebook.com</option>
                  <option>Twitter.com</option>
                  <option>Google.com</option>
                </select>
              </div>
              <Divider className="hidden lg:inline !self-center border-gray-100 h-[30px] mt-1" />

              <div className="flex items-center lg:pb-0 sm:flex-[1_0_0%] border md:border-0 border-r-0 border-l-0 py-2.5 lg:py-0">
                <input
                  type="text"
                  id="hs-hero-name-1"
                  className="placeholder-gray-900 bg-transparent font-medium py-1 pl-2 px-4 block w-full border-transparent rounded-lg text-sm focus:border-white focus:ring-0  dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Category"
                />
              </div>

              <div className="flex items-center justify-start lg:justify-end py-2 lg:py-0 px-2 lg:px-0 lg:pt-0 sm:ps-3  border-gray-300 sm:border-t-0  sm:flex-[1_0_0%] dark:border-gray-700 !ml-auto">
                <Divider className="hidden lg:inline border-gray-100 !self-center h-[30px] mt-1" />
                <div className="flex items-center">
                  <HiOutlineAdjustmentsHorizontal />
                  <button
                    // onClick={() => setOpenModal(true)}
                    className="text-gray-800  dark:text-white hover:bg-transparent focus:ring-0 font-semibold rounded-lg text-sm px-2 lg:px-4 py-1 lg:px-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Filters
                  </button>
                </div>
              </div>

              <div className="flex items-center pt-2 sm:pt-0 sm:block sm:flex-[0_0_auto] !ml-auto">
                {isStickyState ? (
                  <a
                    className="w-full transition-all py-2 px-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-primary text-white hover:bg-primary-800 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    <IoSearch size={22} />
                  </a>
                ) : (
                  <a
                    className="w-full py-3 px-5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-primary text-white hover:bg-primary-800 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Search
                  </a>
                )}
              </div>
            </div>
          </form>

          {/* SVG Elements would be here. Remember to handle them appropriately if they need to be dynamic or interactive. */}
        </div>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy
              laws for its citizens, companies around the world are updating their terms of service
              agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on
              May 25 and is meant to ensure a common set of data rights in the European Union. It
              requires organizations to notify users as soon as possible of high-risk data breaches
              that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
      {/* {!isSticky && <PopularLinks />} */}
    </div>
  );
};

export default HeroForm;
