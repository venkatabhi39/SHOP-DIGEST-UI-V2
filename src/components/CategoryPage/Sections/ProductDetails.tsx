import React from 'react';
import { Heading } from '@/components/Heading';

interface Feature {
  title: string;
  description: string;
}

interface ProductDetailsProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, subtitle, features }) => {
  return (
    <div className="bg-white ">
      <Heading as="h2" className="mt-2 mb-3 text-left">
        {title}
      </Heading>

      <p className="text-gray-600  leading-7">{subtitle}</p>
      <h4 className="mt-5">
        <strong>Key Features and benefits</strong>
      </h4>
      <ul className="list-disc space-y-2 mt-4 ml-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-800 leading-6 mb-4  leading-7">
            <strong>{feature.title}:</strong> {feature.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

const sampleData: ProductDetailsProps = {
  title: 'Flowbite - Tailwind CSS component library',
  subtitle:
    "The studio-quality three-mic array is designed to reduce feedback, so The studio-quality three-mic array is designed to reduce feedback, so beamforming technology helps the mics ignore background noise. Which means everyone hears you - not what's going on around you.",
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
    <div className="container mx-auto mt-10">
      <ProductDetails {...sampleData} />
    </div>
  );
};

export default ProductDetailsSection;
