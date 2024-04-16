import classNames from 'classnames';
import { ButtonProps } from 'flowbite-react';
import React, { PropsWithChildren } from 'react';

interface IButtonProps extends ButtonProps {
  fluid?: boolean;
  colorScheme?: 'primary' | 'secondary' | 'white';
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md';
}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  children,
  variant = 'solid',
  colorScheme = 'primary',
  size = 'md',
  fluid = false,
  className,
}) => {
  const btnClassName = classNames(
    className,
    'rounded-none font-semibold focus:outline-none focus:ring-4 border transition-colors',
    {
      'px-3 py-1.5 text-sm': size === 'sm',

      'px-4 lg:px-5 py-2 lg:py-2.5': size === 'md',

      'text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 border-primary-600 hover:border-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800':
        variant === 'solid' && colorScheme === 'primary',

      // 'bg-transparent hover:bg-primary-800 text-primary-700 hover:text-white border-primary-700 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800':
      //   variant === 'outline' && colorScheme === 'primary',

      'text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-200 border-secondary-600 hover:border-secondary-700 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800':
        variant === 'solid' && colorScheme === 'secondary',

      // 'bg-transparent hover:bg-secondary-800 text-secondary-700 hover:text-white border-secondary-700 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800':
      //   variant === 'outline' && colorScheme === 'secondary',

      'bg-white hover:bg-gray-100 border-white hover:border-gray-100 focus:ring-gray-200 dark:bg-white dark:text-sdGray-text dark:border-white dark:hover:bg-gray-500 dark:hover:border-gray-500 dark:focus:ring-gray-700':
        variant === 'solid' && colorScheme === 'white',

      'text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800':
        variant === 'outline' && colorScheme === 'white',

      'w-full': fluid,
    },
  );

  return (
    <button type="button" className={btnClassName}>
      {children}
    </button>
  );
};
