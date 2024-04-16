import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

interface IHeadingProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading: React.FC<PropsWithChildren<IHeadingProps>> = ({ as = 'h2', ...props }) => {
  const HeadingComp = as;

  const headingClassName = classNames(props.className, {
    'text-3.5xl font-bold dark:text-white': as === 'h2',
    'text-0.25xl font-bold dark:text-white': as === 'h3',
  });

  return <HeadingComp {...props} className={headingClassName} />;
};
