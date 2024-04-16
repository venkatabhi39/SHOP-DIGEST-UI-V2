import classNames from 'classnames';
import React from 'react';

interface ISiteLogoProps {
  type?: 'dark' | 'light';
}

export const SiteLogo: React.FC<ISiteLogoProps> = ({ type = 'light' }) => {
  const className = classNames(
    'text-lg sm:text-2xl lg:text-3xl font-sans font-[700] whitespace-nowrap',
    type === 'light' ? 'text-primary dark:text-white' : 'text-sdGray-text dark:text-sdGray-text',
  );

  return <b className={className}>ShopDigest</b>;
};
