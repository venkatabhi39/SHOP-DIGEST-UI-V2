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
      <span className="">{title}</span>
      {description && <p className="">{description}</p>}
    </div>
  </li>
);

export default FeatureItem;
