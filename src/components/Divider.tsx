import classNames from 'classnames';
import React from 'react';

interface IDividerProps {
  type?: 'dark' | 'light';
  className?: string;
}

export const Divider: React.FC<IDividerProps> = ({ type = 'light', className }) => {
  const dividerClassName = classNames(
    className,
    'border-s self-stretch mx-3',
    type === 'light' ? 'border-gray-300' : 'border-gray-300',
  );

  return <div className={dividerClassName} />;
};
