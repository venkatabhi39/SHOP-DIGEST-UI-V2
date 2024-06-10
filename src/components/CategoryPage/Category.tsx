// pages/index.tsx
import React from 'react';
import Breadcrumb from '../Links/Breadcrumb/Breadcrumb';
import CategoryItem from './Sections/CategoryItem';
import FilterSection from './Sections/FilterSection';
import CategoryHero from './Sections/CategoryHero';
import TableSection from './Sections/TableSection';
import ProductionInfoSection from './Sections/ProductionInfoSection';
import ProductDetailsSection from './Sections/ProductDetails';
import ProductDetailsV2 from './Sections/ProductDetailsV2';
import FaqSection from '@/components/LeafPage/Sections/FaqSection';
import RelatedArticles from './Sections/RelatedArticles';

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
      <div className="mt-6">
        <CategoryHero />
      </div>

      <div className="mt-6">
        <FilterSection />
      </div>

      <div className="mt-8">
        <CategoryItem />
      </div>
      <div className="border-gray-100 border mt-12 mb-10"></div>
      <div className="mt-8">
        <TableSection />
      </div>

      <div className="mt-8">
        <ProductionInfoSection />
      </div>

      <div className="mt-8">
        <ProductDetailsSection />
      </div>

      <div className="mt-8">
        <ProductDetailsV2 />
      </div>

      <div className="mt-8">
        <FaqSection />
      </div>

      <div className="mt-10">
        <RelatedArticles />
      </div>
    </div>
  );
};

export default Category;
