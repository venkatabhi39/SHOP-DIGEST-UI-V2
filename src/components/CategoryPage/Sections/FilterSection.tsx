import { ComponentProps, ReactNode, useState } from 'react';
import classNames from 'classnames';
import styles from '@/components/FormFields/Dropdown.module.scss';
import GroupedButton from '@/components/buttons/GroupedButton';
import Dropdown from '@/components/FormFields/Dropdown';
import { Button } from 'flowbite-react';
import { SettingsIcon, CheckOutlineIcon } from '@/components/SvgIcons/IconList';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import AnchorLink from '@/components/Links/AcnhorLink';

type ItemValue = string | number;
const CustomDropdown = () => {
  const [category, setCategory] = useState<ItemValue | null>(null);
  return (
    <div className="flex justify-between items-center border-t border-b py-3.5">
      <div className="flex w-4/5 justify-start gap-2 items-center">
        <Button
          size="sm"
          className="bg-gray-100 border border-gray-300 text-gray-800 rounded-full font-semibold"
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

        <div className="border border-gray-300 inline-flex rounded-full">
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
        <div className="border border-gray-300 inline-flex rounded-full">
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
    </div>
  );
};

export default CustomDropdown;
