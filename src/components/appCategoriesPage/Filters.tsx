import { Accordion, AccordionTitleProps } from 'flowbite-react';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import styles from './Filters.module.scss';

const Checkbox = ({ id, children }: PropsWithChildren<{ id: string }>) => (
  <label htmlFor={id} className="cursor-pointer flex flex-row items-start">
    <input
      id={id}
      type="checkbox"
      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
    />
    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">{children}</span>
  </label>
);

const AccordionTitle = ({ className, ...props }: AccordionTitleProps) => (
  <Accordion.Title as="h6" {...props} className={classNames(className, styles.title)} />
);

export default function Filters({ transparentBg = false }: { transparentBg?: boolean }) {
  return (
    <Accordion
      className={classNames(styles.container, transparentBg && styles.container__withTransparentBg)}
      flush
      alwaysOpen
      collapseAll={false}
    >
      <Accordion.Panel isOpen>
        <AccordionTitle>Price</AccordionTitle>
        <Accordion.Content className={styles.content}>
          <ul className="space-y-2">
            <li>
              <Checkbox id="free">Free</Checkbox>
            </li>
            <li>
              <Checkbox id="paid">Paid</Checkbox>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel isOpen>
        <AccordionTitle>Industry</AccordionTitle>
        <Accordion.Content className={styles.content}>
          <ul className="space-y-2">
            <li>
              <Checkbox id="artsAndCrafts">Arts and crafts</Checkbox>
            </li>
            <li>
              <Checkbox id="babyAndKids">Baby and kids</Checkbox>
            </li>
            <li>
              <Checkbox id="booksMusicAndVideos">Books, music and video</Checkbox>
            </li>
            <li>
              <Checkbox id="businessEquipmentSupplies">Business equipment and supplies</Checkbox>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
