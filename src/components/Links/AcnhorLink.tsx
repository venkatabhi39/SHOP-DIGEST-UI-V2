import React, { ReactNode, ElementType, useMemo } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const variants = {
  default: 'text-primary hover:text-primary-800 font-medium hover:underline',
  bordered:
    'text-sm border border-primary font-medium px-5 py-2.5 bg-primary inline-flex items-center justify-center rounded-full focus:ring-4 text-primary bg-transparent hover:bg-primary-100 focus:ring-blue-300 dark:focus:ring-blue-900',
  button:
    'font-medium px-5 py-2.5 bg-primary inline-flex items-center justify-center rounded-full focus:ring-4 text-white bg-primary hover:bg-primary-900 focus:ring-blue-300 dark:focus:ring-blue-900',
  bold: 'font-bold text-gray-900 hover:text-gray-700',
  subtle: 'text-gray-500 hover:text-gray-700',
  category:
    'p-2 px-4 font-semibold text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center rounded-full focus:ring-4',
  categoryBox:
    'w-full p-3 px-4 border font-semibold text-sm text-gray-600 bg-white-100 hover:bg-white-200 inline-flex items-center justify-between rounded-lg focus:ring-4 shadow-md hover:bg-primary-50',
};

interface AnchorLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: keyof typeof variants;
  icon?: ElementType | '';
  size?: 'small' | '';
  classProp?: string;
}

const AnchorLink: React.FC<AnchorLinkProps> = ({
  children,
  href,
  variant = 'default',
  icon = '',
  size = '',
  classProp = '',
  ...props
}) => {
  const variantClasses = useMemo(() => {
    let classes = variants[variant] || variants.default;
    if ((variant === 'button' || variant === 'bordered') && size === 'small') {
      classes = twMerge(classes, `py-2 px-4 text-sm ${variant === 'bordered' && 'py-[7px]'}`);
    }
    return twMerge(classes, classProp);
  }, [variant, size, classProp]);

  const isInternalLink = href.startsWith('/');

  const linkContent = (
    <>
      {children}
      {icon && (
        <span
          className={`ms-2 ${variant === 'categoryBox' ? 'bg-primary-100 rounded-full' : null}`}
        >
          {React.createElement(icon)}
        </span>
      )}
    </>
  );

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a className={`transition duration-300 ease-in-out ${variantClasses}`} {...props}>
          {linkContent}
        </a>
      </Link>
    );
  }

  return (
    <a href={href} className={`transition duration-300 ease-in-out ${variantClasses}`} {...props}>
      {linkContent}
    </a>
  );
};

export default React.memo(AnchorLink);
