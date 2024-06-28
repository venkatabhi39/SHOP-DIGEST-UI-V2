import React from 'react';
import classNames from 'classnames';
import styles from '@/components/FormFields/Dropdown.module.scss';
import { Heading } from '@/components/Heading';
import Dropdown from '@/components/FormFields/Dropdown';

const GroupedDropdown = ({ filters, isSmall }) => {
  return (
    <div className="">
      <div className="flex items-center">
        {filters.map((filter, index) => (
          <div
            key={filter.id}
            className={`border border-gray-300 inline-flex rounded-full whitespace-nowrap ${
              index === 0 ? '' : 'ml-3'
            }`}
          >
            <Dropdown
              classes={classNames(styles.smDropdownContainer, isSmall ? styles.smallDropdown : '')}
              value={filter.default}
              label={filter.label}
              items={filter.items}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupedDropdown;
