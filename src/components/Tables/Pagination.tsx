// components/Pagination.tsx

import React, { useState } from 'react';
import { Pagination as PaginationPrevNext } from 'flowbite-react';
import { LineDownRight } from '@/components/SvgIcons/IconList';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          <a
            href="#"
            onClick={() => onPageChange(i)}
            className={`flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              currentPage === i
                ? 'z-10 text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:bg-gray-700 dark:text-white'
                : ''
            }`}
            aria-current={currentPage === i ? 'page' : undefined}
          >
            {i}
          </a>
        </li>,
      );
    }
    return pages;
  };

  return (
    <section className="flex items-center">
      <div className="w-full mx-auto">
        <div className="border relative overflow-hidden bg-white rounded-lg dark:bg-gray-800">
          <nav
            className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing{' '}
              <span className="font-semibold text-gray-900 dark:text-white">{currentPage}</span> of{' '}
              <span className="font-semibold text-gray-900 dark:text-white">{totalPages}</span>
            </span>

            <PaginationPrevNext
              className="text-sm !mt-[-8px]"
              layout="navigation"
              currentPage={currentPage}
              totalPages={100}
              onPageChange={onPageChange}
            />

            <ul className="inline-flex items-stretch -space-x-px">
              {currentPage > 1 && (
                <li>
                  <a
                    href="#"
                    onClick={() => onPageChange(currentPage - 1)}
                    className="flex items-center justify-center h-full py-1 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <LineDownRight classProp="p-0 rotate-180" />
                  </a>
                </li>
              )}
              {renderPages()}
              {currentPage < totalPages && (
                <li>
                  <a
                    href="#"
                    onClick={() => onPageChange(currentPage + 1)}
                    className="flex items-center justify-center h-full py-1 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <LineDownRight classProp="p-0" />
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
