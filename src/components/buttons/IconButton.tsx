import classNames from 'classnames';
import { ButtonProps } from 'flowbite-react';
import React from 'react';

interface IIconButtonProps extends ButtonProps {
  icon: React.ReactNode;
  description: string;
  colorScheme?: 'light' | 'dark';
}

export const IconButton: React.FC<IIconButtonProps> = ({
  icon,
  description,
  className,
  colorScheme = 'light',
  ...props
}) => {
  const btnClassName = classNames(
    className,
    'rounded-0 bg-transparent focus:ring-2 focus:outline-none p-1.5 text-center inline-flex items-center text-xl',
    {
      'text-gray-500': colorScheme === 'light',
      'text-sdGray-text': colorScheme === 'dark',
    },
  );

  return (
    <button type="button" {...props} className={btnClassName}>
      {icon}
      <span className="sr-only">{description}</span>
    </button>
  );
};
