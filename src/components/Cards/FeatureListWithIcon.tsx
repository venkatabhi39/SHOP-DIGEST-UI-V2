// ServiceSection.tsx
import React from 'react';

interface FeatureItem {
  iconPath: string; // SVG content as a string
  title: string;
  description: string;
  iconRounded: Boolean;
  boxClasses: string;
  iconClasses: string;
}

const FeatureListWithIcon: React.FC<FeatureItem> = ({
  iconRounded,
  iconPath,
  title,
  description,
  boxClasses,
  iconClasses
}) => (
  <div className={`card ${boxClasses}`}>
    <div
      className={`flex justify-center items-center mb-4 w-10 h-10 rounded-full ${
        iconClasses
      } bg-blue-100 lg:h-12 lg:w-12 dark:bg-primary-900`}
    >
      <svg
        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        dangerouslySetInnerHTML={{ __html: iconPath }}
      />
    </div>
    <h3 className="">{title}</h3>
    <p className="">{description}</p>
  </div>
);

export default FeatureListWithIcon;
