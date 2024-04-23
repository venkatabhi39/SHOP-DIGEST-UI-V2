import classNames from 'classnames';
import React from 'react';

interface ISiteLogoProps {
  type?: 'dark' | 'light';
}

export const SiteLogo: React.FC<ISiteLogoProps> = ({ type = 'light' }) => {
  const className = classNames(
    'text-xl xl:text-2xl whitespace-nowrap',
    type === 'light' ? 'text-primary dark:text-white' : 'text-sdGray-text dark:text-sdGray-text',
  );

  return (
    <>
      <b className={`${className} hidden sm:inline-block`}>ShopDigest</b>{' '}
      <b className={`${className} inline-block sm:hidden`}>SD</b>
    </>
  );
};
