import { type PropsWithChildren } from 'react';
import classNames from 'classnames';

export type SectionContainerProps = PropsWithChildren<{
  className?: string;
}>;

export default function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <section>
      <div className={classNames('px-4 md:px-6 mx-auto max-w-[calc(1288px+1.5rem)]', className)}>
        {children}
      </div>
    </section>
  );
}
