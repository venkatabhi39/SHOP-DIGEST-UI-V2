// components/ProductTable.tsx
import React from 'react';
import type { NextPage } from 'next';

interface ProductDetail {
  id: number;
  category: string;
  description: string;
  isDark: boolean;
}

interface Props {
  details: ProductDetail[];
}

const ProductTable: React.FC<Props> = ({ details }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-gray-500 dark:text-gray-400">
        <thead>
          <tr>
            <th scope="col" className="min-w-72">
              <span className="sr-only">Name</span>
            </th>
            <th scope="col" className="min-w-[36rem] whitespace-nowrap">
              <span className="sr-only">Description</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {details.map(detail => (
            <tr key={detail.id} className={detail.isDark ? 'bg-gray-50 dark:bg-gray-800' : ''}>
              <th scope="row" className="p-4 font-medium text-gray-900 dark:text-white">
                {detail.category}
              </th>
              <td className="p-4">{detail.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProductTableList: NextPage = () => {
  const productDetails: ProductDetail[] = [
    {
      id: 1,
      category: 'Display',
      description:
        '24-inch 4.5K Retina display, 4480x2520 resolution at 218 pixels per inch with support for 1 billion colours, 500 nits brightness, Wide colour (P3), True Tone technology',
      isDark: true,
    },
    {
      id: 2,
      category: 'Processor',
      description:
        'Apple M1 chip, 8-core CPU with 4 performance cores and 4 efficiency cores, 7-core GPU',
      isDark: false,
    },
    {
      id: 3,
      category: 'Video Support and Camera',
      description:
        '1080p FaceTime HD camera with M1 image signal processor, Thunderbolt 3 digital video output',
      isDark: true,
    },
    {
      id: 4,
      category: 'Connections and Expansion',
      description:
        'Two Thunderbolt / USB 4 ports with support for: DisplayPort, Thunderbolt 3 (up to 40Gb/s), USB 4 (up to 40Gb/s), USB 3.1 Gen 2 (up to 10Gb/s), Thunderbolt 2, HDMI, DVI and VGA supported using adapters (sold separately), 3.5mm headphone jack, Configurable with Gigabit Ethernet',
      isDark: false,
    },
    {
      id: 5,
      category: 'Wireless',
      description:
        'Wi‑Fi, 802.11ax Wi‑Fi 6 wireless networking, IEEE 802.11a/b/g/n/ac compatible, Bluetooth, Bluetooth 5.0 wireless technology',
      isDark: true,
    },
    {
      id: 6,
      category: 'In the Box',
      description:
        'iMac, Magic Keyboard, Magic Mouse, 143W power adapter, Power lead (2m), USB‑C to Lightning Cable',
      isDark: false,
    },
    { id: 7, category: 'Height', description: '46.1 cm (18.1 inches)', isDark: true },
    { id: 8, category: 'Width', description: '54.7 cm (21.5 inches)', isDark: false },
    { id: 9, category: 'Depth', description: '14.7 cm (5.8 inches)', isDark: true },
    { id: 10, category: 'Weight', description: '4.46 kg (9.83 pounds)', isDark: false },
    // Additional products can be added here...
  ];

  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white sm:mb-8 sm:text-2xl lg:mb-8">
        Technical details
      </h2>
      <ProductTable details={productDetails} />
    </div>
  );
};

export default ProductTableList;
