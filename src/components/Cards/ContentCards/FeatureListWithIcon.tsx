// ServiceSection.tsx
import React from 'react';
import IconLink from '@/components/Links/IconLink';
import AnchorLink from '@/components/Links/AcnhorLink';
import { LineDownRight } from '@/components/SvgIcons/IconList';
interface FeatureItem {
  iconPath: string; // SVG content as a string
  title: string;
  description: string;
  iconRounded: Boolean;
  boxClasses: string;
  iconClasses: string;
  alignment: string;
  variant: string;
  iconDimension: string;
  linkText: string;
  linkUrl: string;
}

const FeatureListWithIcon: React.FC<FeatureItem> = ({
  iconRounded,
  iconPath,
  title,
  description,
  boxClasses,
  iconClasses,
  alignment,
  variant,
  iconDimension,
  linkText,
  linkUrl,
}) => (
  <div className={`card ${boxClasses} ${alignment === 'center' ? 'text-center' : ''}`}>
    <div
      className={`flex justify-center items-center mb-4 w-10 h-10 rounded-full ${iconClasses} ${
        variant === 'primary' ? 'bg-transparent' : 'bg-primary-50'
      } lg:h-12 lg:w-12 dark:bg-primary-900 ${alignment === 'center' ? 'm-auto' : ''}`}
    >
      <svg
        className={`${
          iconDimension || 'w-5 h-5 lg:w-6 lg:h-6'
        } text-primary-600  dark:text-primary-300`}
        fill="currentColor"
        viewBox="0 0 20 20"
        dangerouslySetInnerHTML={{ __html: iconPath }}
      />
    </div>
    <h3 className="">{title}</h3>
    <p className="">{description}</p>
    {linkText && (
      <div className="mt-4">
        <AnchorLink
          href={linkUrl || '#'}
          variant="default"
          classProp="text-sm font-semibold inline-flex items-center hover:underline"
          icon={LineDownRight}
        >
          {linkText}
        </AnchorLink>
      </div>
    )}
  </div>
);

export default FeatureListWithIcon;
