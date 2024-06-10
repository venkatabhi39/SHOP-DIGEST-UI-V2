import React from 'react';
import { Heading } from '@/components/Heading';
import FeatureItem from '@/components/Features/FeatureItem';

interface Feature {
  title: string;
  icon?: React.ReactNode; // Allows passing custom icons
  description: string;
}

interface ProductDetailsProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, subtitle, features }) => {
  return (
    <div className="">
      <Heading as="h2" className="mt-2 mb-3 text-left border-b p-4">
        {title}
      </Heading>
      <div className="px-6 py-3 pb-6">
        <p className="text-gray-600  leading-7">{subtitle}</p>

        <ul className="space-y-2 mt-4">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-500 mb-4 list-none">
              <div className="flex">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-primary dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="ml-2  leading-7">
                  <strong>{feature.title}:</strong> {feature.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const sampleData: ProductDetailsProps = {
  title: 'Product description',
  subtitle:
    'The iMac M1 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2021) model features a 5-nm Apple M1 processor with 8 cores (4 performance cores and 4 efficiency cores), an 8-core GPU, a 16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB onboard SSD.',
  features: [
    {
      title: 'Brilliant 4.5K Retina display',
      description:
        "See the big picture and all the detailsSee it all in sharp, glorious detail on the immersive 24-inch 4.5K Retina display. The P3 wide color gamut brings what you're watching to life in over a billion colors. Images shine with a brilliant 500 nits of brightness. Industry-leading anti-reflective coating delivers greater comfort and readability. And True Tone technology automatically adjusts the color comfort and readability.",
    },
    {
      title: 'Six-speaker sound system',
      description:
        'Audio that really fills a room: the sound system on iMac brings incredible, room-filling audio to any space. Two pairs of force-canceling woofers create rich, deep bass without unwanted vibrations. And each pair is balanced with a high-performance tweeter. The result is a massive, detailed soundstage that takes your movies, music, and more to the next level.',
    },
    {
      title: 'M1 chip',

      description:
        'With great power comes great capability: M1 is the most powerful chip Apple has ever made. macOS Big Sur is an advanced desktop operating system. Combined, they take iMac to entirely new levels of performance, efficiency, and security. iMac wakes from sleep almost instantly, apps launch in a flash, and the whole system feels more responsive.',
    },
  ],
};

const ProductDetailsSection: React.FC = () => {
  return (
    <div className="container mt-10 w-full lg:w-3/4 bg-gray-50  rounded-lg">
      <ProductDetails {...sampleData} />
    </div>
  );
};

export default ProductDetailsSection;
