import { ComponentProps, ReactNode, useState } from 'react';
import classNames from 'classnames';
import styles from '@/components/FormFields/Dropdown.module.scss';
import GroupedButton from '@/components/buttons/GroupedButton';
import Dropdown from '@/components/FormFields/Dropdown';
import { Button, Modal } from 'flowbite-react';
import { SettingsIcon, CheckOutlineIcon } from '@/components/SvgIcons/IconList';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import AnchorLink from '@/components/Links/AcnhorLink';
import { ArrowRightIcon, SearchIcon } from '@/components/SvgIcons/IconList';

type ItemValue = string | number;
const CustomDropdown = () => {
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState<ItemValue | null>(null);
  return (
    <div className="flex justify-between items-center border-t border-b py-3.5 overflow-x-auto px-1">
      <div className="flex lg:w-11/12  justify-start gap-1 md:gap-2 items-center">
        <Button
          size="sm"
          className="bg-gray-100 whitespace-nowrap border border-gray-300 text-gray-800 rounded-full font-semibold"
          onClick={() => setOpenModal(true)}
        >
          <SettingsIcon classProp="mr-2 h-5 w-5" />
          All Filters
        </Button>
        <div className="border inline-flex rounded-full">
          <Dropdown
            //icon={<ImCalendar />}
            classes={classNames(styles.smDropdownContainer, styles.dropdownActive)}
            value={category}
            //onChange={newCategory => setCategory(newCategory)}
            label="People"
            items={[
              {
                label: 'People',
                value: 'people',
              },
              {
                label: 'Invoicing',
                value: 'invoicing',
              },
            ]}
          />
        </div>
        <div className="border inline-flex rounded-full">
          <Dropdown
            //icon={<ImCalendar />}
            classes={classNames(styles.smDropdownContainer, styles.dropdownActive)}
            value={category}
            //onChange={newCategory => setCategory(newCategory)}
            label="Locations"
            items={[
              {
                label: 'Locations',
                value: 'locations',
              },
              {
                label: 'Invoicing',
                value: 'invoicing',
              },
            ]}
          />
        </div>
        <Button
          size="sm"
          className="bg-gray-100 border font-semibold border-gray-300 text-gray-800 rounded-full"
        >
          <CheckOutlineIcon classProp="mr-2 h-5 w-5" />
          Seniority
        </Button>

        <div className="">
          <GroupedButton options={['1st', '2nd', '3rd+']} />
        </div>

        <div className="border border-gray-300 inline-flex rounded-full  whitespace-nowrap">
          <Dropdown
            //icon={<ImCalendar />}
            classes={classNames(styles.smDropdownContainer)}
            value={category}
            //onChange={newCategory => setCategory(newCategory)}
            label="Current company"
            items={[
              {
                label: 'Current company',
                value: 'current',
              },
              {
                label: 'Invoicing',
                value: 'invoicing',
              },
            ]}
          />
        </div>

        <div>
          <AnchorLink
            href="#"
            variant="default"
            size="small"
            classProp="border-l border-gray-300 ml-2 p-1.5 pl-3 h-5"
          >
            Reset
          </AnchorLink>
        </div>
      </div>
      <div>
        <div className="border border-gray-300 inline-flex rounded-full whitespace-nowrap">
          <Dropdown
            //icon={<ImCalendar />}
            classes={classNames(styles.smDropdownContainer)}
            value={category}
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

      <Modal
        show={openModal}
        position={'center'}
        onClose={() => setOpenModal(false)}
        className="z-[9999] bg-gray-500 bg-opacity-80"
      >
        <Modal.Header>Add Filter</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
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
          <Button
            onClick={() => setOpenModal(false)}
            size="sm"
            pill
            className="font-semibold bg-transparent  bg-primary hover:!bg-primary-900 focus:ring-0 px-3"
          >
            Apply <ArrowRightIcon classProp="ml-1 h-5 w-5" />
          </Button>

          <Button
            onClick={() => setOpenModal(false)}
            size="sm"
            pill
            className="border-primary-700 font-semibold md:ml-[-5px] lg:ml:0 text-left lg:text-center bg-transparent hover:!bg-primary-50 text-primary-700 hover:text-black focus:ring-0 px-3"
          >
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomDropdown;
