import { PropsWithChildren, Children, ComponentProps } from 'react';
import SectionContainer from './SectionContainer';
import styles from './Navigation.module.scss';
import { PropsWithClassName } from '@/types/common.types';
import classNames from 'classnames';

export const NavigationLink = ({ children, ...props }: Omit<ComponentProps<'a'>, 'className'>) => (
  <a
    {...props}
    className="block py-3 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0"
  >
    {children}
  </a>
);

export default function Navigation({ children, className }: PropsWithChildren<PropsWithClassName>) {
  return (
    <nav className={classNames('bg-white lg:block w-full border-y lg:py-3', className)}>
      <SectionContainer className="px-0">
        <ul className={styles.scrollContainer}>
          {Children.map(children, (child, i) => (
            <li key={i} className="block lg:inline lg:border-b-0">
              {child}
            </li>
          ))}
        </ul>
      </SectionContainer>
    </nav>
  );
}
