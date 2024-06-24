import React from 'react';
import classNames from 'classnames';
import styles from '@/components/FormFields/Dropdown.module.scss';
import { Heading } from '@/components/Heading';
import Dropdown from '@/components/FormFields/Dropdown';

const BlockList: React.FC = () => {
  return (
    <div className="">
      <div className="flex mb-6 justify-between">
        <Heading as="h3" className="mt-2 text-center">
          Toal Reviews
        </Heading>
        <div className="flex items-center">
          <div className="border border-gray-300 inline-flex rounded-full whitespace-nowrap mr-3">
            <Dropdown
              //icon={<ImCalendar />}
              classes={classNames(styles.smDropdownContainer)}
              value={'today'}
              //onChange={newCategory => setCategory(newCategory)}
              label="Today"
              items={[
                {
                  label: 'Today',
                  value: 'today',
                },
                {
                  label: 'Last Week',
                  value: 'last-week',
                },
              ]}
            />
          </div>
          <div className="border border-gray-300 inline-flex rounded-full whitespace-nowrap">
            <Dropdown
              //icon={<ImCalendar />}
              classes={classNames(styles.smDropdownContainer)}
              value={'country'}
              //onChange={newCategory => setCategory(newCategory)}
              label="Country"
              items={[
                {
                  label: 'Country',
                  value: 'country',
                },
                {
                  label: 'India',
                  value: 'india',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockList;
