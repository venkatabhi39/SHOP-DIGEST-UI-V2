import classNames from 'classnames';
import { ComponentProps, ReactNode, useState } from 'react';
import styles from './Dropdown.module.scss';
import { Dropdown as FbDropdown } from 'flowbite-react';

type ItemValue = string | number;

const Dropdown = ({
  label,
  items,
  onChange,
  value,
  icon,
  classes,
}: {
  icon?: ReactNode;
  label: ReactNode;
  items: { value: ItemValue; label: ReactNode }[];
  value: ItemValue | null;
  // eslint-disable-next-line no-unused-vars
  classes: String;
  onChange?: (newValue: ItemValue) => void;
}) => (
  <div className={classNames('max-lg:grow', classes)}>
    <FbDropdown
      label={
        <div className="flex items-center justify-center w-full">
          <span className="[&>*]:w-5 [&>*]:h-5 inline-block mr-4 text-primary">{icon}</span>
          <span className="mr-auto text-gray-500">
            {value == null ? label : items.find(item => item.value === value)!.label}
          </span>
          <svg
            className="w-5 h-5 ml-3 text-primary"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      }
      arrowIcon={false}
      size="sm"
    >
      {items.map(item => (
        <FbDropdown.Item onClick={() => onChange?.(item.value)}>{item.label}</FbDropdown.Item>
      ))}
    </FbDropdown>
  </div>
);

export default Dropdown;
