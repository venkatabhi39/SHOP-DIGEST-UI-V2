// pages/index.tsx
import React from 'react';
import Breadcrumb from '../Links/Breadcrumb/Breadcrumb';
const breadcrumbData = [
  { name: 'Home', href: '#' },
  { name: 'Category', href: '#' },
  { name: 'Subcategory', href: '#' },
  { name: 'Item', href: '#' },
];
const Category: React.FC = () => {
  return (
    <div className="">
      <div className="mt-6">
        <Breadcrumb items={breadcrumbData} />
      </div>
    </div>
  );
};

export default Category;
