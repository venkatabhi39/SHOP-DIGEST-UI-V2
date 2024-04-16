import React from 'react';
import { Heading } from '../Heading';

interface ISectionHeaderProps {
  title: React.ReactNode;
  description?: string;
  isFirstSection?: boolean;
}

export const SectionHeader: React.FC<ISectionHeaderProps> = ({
  title,
  description,
  isFirstSection = false,
}) => (
  <div className="mx-auto max-w-screen-sm text-center mb-4.5">
    <Heading as={isFirstSection ? 'h1' : 'h2'}>{title}</Heading>
    <p className="dark:text-gray-400">{description}</p>
  </div>
);
