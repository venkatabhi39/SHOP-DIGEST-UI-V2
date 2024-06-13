import React from 'react';

interface FeatureItemProps {
  icon?: React.ReactNode; // Allows passing custom icons
  title: string;
  description?: string; // Optional description
  titleClasess: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, titleClasess }) => (
  <li className="flex space-x-3 items-center">
    {icon}
    <div>
      <span className={titleClasess ? titleClasess : ''}>{title}</span>
      {description && <p className="">{description}</p>}
    </div>
  </li>
);

export default FeatureItem;
