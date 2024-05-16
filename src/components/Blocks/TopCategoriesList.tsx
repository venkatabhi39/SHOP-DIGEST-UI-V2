// TopCategories.tsx
import React from 'react';
// TopCategories.tsx for Next.js
import Link, { LinkProps } from 'next/link';
import { Card } from 'flowbite-react';
import { IconType } from 'react-icons';
import { FaShoppingCart, FaFilm, FaTools, FaPalette, FaUniversalAccess } from 'react-icons/fa';
import { Heading } from '@/components/Heading';

interface Category {
  name: string;
  icon: IconType;
  color: string;
  hoverColor: string;
  href: string;
}

const categories: Category[] = [
  {
    name: 'Shopping',
    icon: FaShoppingCart,
    color: 'bg-blue-100',
    hoverColor: 'bg-blue-200',
    href: '#',
  },
  {
    name: 'Entertainment',
    icon: FaFilm,
    color: 'bg-gray-200',
    hoverColor: 'bg-gray-300',
    href: '#',
  },
  { name: 'Tools', icon: FaTools, color: 'bg-blue-100', hoverColor: 'bg-blue-200', href: '#' },
  {
    name: 'Art & Design',
    icon: FaPalette,
    color: 'bg-green-100',
    hoverColor: 'bg-green-200',
    href: '#',
  },
  {
    name: 'Accessibility',
    icon: FaUniversalAccess,
    color: 'bg-gray-200',
    hoverColor: 'bg-gray-300',
    href: '#',
  },
];

const TopCategories: React.FC = () => {
  return (
    <>
      <Heading as="h3" className="mt-5 mb-6 text-gray-900 dark:text-white">
        Top Categories
      </Heading>
      <div className="grid gap-y-6 grid-cols-1 gap-5 py-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 sm:py-6 xl:grid-cols-5 xl:py-4">
        {categories.map((category, index) => (
          <Link
            href={category.href}
            key={index}
            className={`flex-1 p-4 rounded-xl ${category.color} hover:opacity-75`}
          >
            <div className="items-center justify-center h-full bg-transparent shadow-none p-4 px-0 py-3">
              <div className="flex flex-row items-center justify-between">
                <div className="text-md font-medium text-center">{category.name}</div>
                <category.icon className="mt-0 text-2xl" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TopCategories;
