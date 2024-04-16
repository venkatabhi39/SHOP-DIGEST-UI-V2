import React from 'react';

interface ISecondaryHeaderPayLinksProps {}

export const SecondaryHeaderPayLinks: React.FC<ISecondaryHeaderPayLinksProps> = () => (
  <ul className="hidden lg:flex flex-col mt-4 font-medium text-xs  text-gray-800 lg:flex-row lg:space-x-6 lg:mt-0 xl:space-x-8">
    <li>
      Become a <span className="font-medium underline">Partner</span>
    </li>
    <li>
      Create a <span className="font-medium underline">Store</span>
    </li>
  </ul>
);
