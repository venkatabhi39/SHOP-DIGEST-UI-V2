import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Heading } from '../Heading';

interface ISectionHeaderProps {
  title: React.ReactNode;
  description?: string;
  isFirstSection?: boolean;
  className: string;
}

export const SectionHeader: React.FC<ISectionHeaderProps> = ({
  title,
  description,
  isFirstSection = false,
  className,
}) => (
  <div className={twMerge('mx-auto max-w-screen-sm text-center mb-8 lg:mb-16', className)}>
    <Heading as={isFirstSection ? 'h1' : 'h2'} className='mb-3'>{title}</Heading>
    <p className="">{description}</p>
  </div>
);
