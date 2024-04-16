import type { ComponentProps } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export type ButtonProps = Omit<ComponentProps<'button'>, 'type'> & {
  primary?: boolean;
  secondary?: boolean;
  outlined?: boolean;
  submitBtn?: boolean;
  size?: 's' | 'm' | 'l';
  animation?: 'splash';
};

export default function Button({
  size = 'm',
  primary = false,
  secondary = false,
  outlined = false,
  submitBtn = false,
  children,
  className,
  animation,
  ...props
}: ButtonProps) {
  return (
    <button
      type={submitBtn ? 'submit' : 'button'}
      {...props}
      className={classNames(
        className,
        styles.btn,
        !primary && !secondary && !outlined && 'text-orange-400 hover:text-orange-300',
        primary &&
          'text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-primary dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary active:bg-primary-700',
        secondary &&
          'text-white focus:outline-none focus:ring-4 focus:ring-secondary-300 dark:focus:ring-secondary-900 bg-secondary hover:bg-secondary-700 dark:hover:bg-secondary active:bg-secondary-700',
        outlined && styles.outlinedBtn,
        size === 's' && styles.small,
        size === 'l' && styles.large,
        animation === 'splash' && styles.splashBtn,
      )}
    >
      <div className="flex flex-row gap-2 items-center justify-center">{children}</div>
    </button>
  );
}
