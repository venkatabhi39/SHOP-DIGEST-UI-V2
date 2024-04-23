import React from 'react';

interface FeatureItemProps {
  icon?: React.ReactNode; // Allows passing custom icons
  title: string;
  description?: string; // Optional description
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <li className="flex space-x-3">
    {icon}
    <div>
      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
        {title}
      </span>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  </li>
);

export default FeatureItem;
