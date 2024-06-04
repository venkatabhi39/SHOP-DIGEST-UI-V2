import React from 'react';
import AnchorLink from '@/components/Links/AcnhorLink';
import { Heading } from '@/components/Heading';

interface CTASectionProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  lightImageSrc: string;
  darkImageSrc: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonLabel,
  buttonLink,
  lightImageSrc,
  darkImageSrc,
}) => (
  <section className="bg-white dark:bg-gray-900 border shadow-lg rounded-lg">
    <div className="items-center py-10 px-10 mx-auto flex flex-col sm:flex-row">
      <div className="max-w-62">
        <img className="w-full rounded-full" src={lightImageSrc} alt="dashboard image" />
      </div>

      <div className="mt-4 md:mt-0 pl-0 sm:pl-8">
        <Heading as="h2" className="mt-2 mb-3">
          {title}
        </Heading>

        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{description}</p>
        <AnchorLink href="#" variant="button" size="" classProp="mt-0">
          Add Friend
        </AnchorLink>

        <AnchorLink href="#" variant="bordered" size="" classProp="mt-0 ml-4">
          Message
        </AnchorLink>
      </div>
    </div>
  </section>
);

export default CTASection;
