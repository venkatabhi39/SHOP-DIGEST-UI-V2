// pages/index.tsx
import React from 'react';
import Breadcrumb from './Breadcrumb';

const HomePage: React.FC = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '#' },
    { name: 'Shirts', href: '#' },
    { name: 'Plain Tee', href: '#' },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

export default HomePage;
