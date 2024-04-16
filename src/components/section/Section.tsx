import React, { PropsWithChildren } from 'react';

interface ISectionProps {}

export const Section: React.FC<PropsWithChildren<ISectionProps>> = ({ children }) => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-16 container">{children}</div>
  </section>
);
