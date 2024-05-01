import React from 'react';

export interface ILinkProps {
  url: string;
  svg: JSX.Element;
  className?: string;
  targetAttr?: string;
  label: string;
  iconPlacement: string;
}

const IconLink: React.FC<ILinkProps> = ({
  url,
  svg,
  className,
  targetAttr,
  label,
  iconPlacement,
}) => {
  return (
    <a
      href={url}
      target={targetAttr}
      className={`text-gray-500 inline-flex items-center ${
        label && iconPlacement === 'right' ? 'flex-row-reverse' : null
      } hover:text-gray-900 dark:hover:text-white dark:text-gray-400 ${className}`}
    >
      {svg ? React.createElement(svg) : null}
      {label ? <span className="">{label}</span> : null}
    </a>
  );
};

export default IconLink;
