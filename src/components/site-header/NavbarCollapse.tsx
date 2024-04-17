import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

interface INavbarCollapseProps {
  className?: string;
}

export const NavbarCollapse: React.FC<PropsWithChildren<INavbarCollapseProps>> = ({
  children,
  className,
}) => {
  const collapseClassName = classNames('w-full lg:w-auto z-[999]', className);

  return <div className={collapseClassName}>{children}</div>;
};
