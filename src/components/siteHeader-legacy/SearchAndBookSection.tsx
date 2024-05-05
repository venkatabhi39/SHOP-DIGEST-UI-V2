import classNames from 'classnames';
import Button from '../Button';
import SectionContainer from '../appPage/SectionContainer';
import { ComponentProps, ReactNode, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { ImCalendar } from 'react-icons/im';
import styles from './SearchAndBookSection.module.scss';
import { Dropdown as FbDropdown } from 'flowbite-react';

type ItemValue = string | number;

const Dropdown = ({
  label,
  items,
  onChange,
  value,
  icon,
}: {
  icon?: ReactNode;
  label: ReactNode;
  items: { value: ItemValue; label: ReactNode }[];
  value: ItemValue | null;
  // eslint-disable-next-line no-unused-vars
  onChange?: (newValue: ItemValue) => void;
}) => (
  <div className={classNames('max-lg:grow bg-white', styles.dropdownContainer)}>
    <FbDropdown
      label={
        <div className="flex items-center justify-center w-full">
          <span className="[&>*]:w-6 [&>*]:h-6 inline-block mr-4 text-primary">{icon}</span>
          <span className="mr-auto">
            {value == null ? label : items.find(item => item.value === value)!.label}
          </span>
          <svg
            className="w-6 h-6 ml-4 text-primary"
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
    >
      {items.map(item => (
        <FbDropdown.Item onClick={() => onChange?.(item.value)}>{item.label}</FbDropdown.Item>
      ))}
    </FbDropdown>
  </div>
);

export function SearchAndBookContent({ className, ...props }: ComponentProps<'div'>) {
  const [platform, setPlatform] = useState<ItemValue | null>(null);
  const [category, setCategory] = useState<ItemValue | null>(null);

  return (
    <div {...props} className={classNames(className, styles.sectionContainer)}>
      <Dropdown
        icon={<CiLocationOn />}
        value={platform}
        onChange={newPlatform => setPlatform(newPlatform)}
        label="Platform"
        items={[
          {
            label: 'Shopify',
            value: 'shopify',
          },
        ]}
      />
      <Dropdown
        icon={<ImCalendar />}
        value={category}
        onChange={newCategory => setCategory(newCategory)}
        label="Category"
        items={[
          {
            label: 'SEO',
            value: 'seo',
          },
          {
            label: 'Invoicing',
            value: 'invoicing',
          },
        ]}
      />
      <Button secondary className="!rounded-none !h-full max-sm:w-full !py-2">
        Book Now
      </Button>
    </div>
  );
}

export default function SearchAndBookSection() {
  return (
    <div className="bg-primary">
      <SectionContainer className="py-4">
        <SearchAndBookContent />
      </SectionContainer>
    </div>
  );
}
