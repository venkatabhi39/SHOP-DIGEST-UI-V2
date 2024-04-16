import { PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';
import SectionContainer from '@/components/appPage/SectionContainer';
import { PropsWithClassName } from '@/types/common.types';

export type HeroSectionProps = PropsWithChildren<{
  rightSection?: ReactNode;
  showRightSection?: boolean;
}>;

export default function HeroSection({
  children,
  rightSection,
  showRightSection = true,
  className,
}: PropsWithClassName<HeroSectionProps>) {
  return (
    // <SectionContainer className="grid lg:gap-8 lg:grid-cols-12">
    <SectionContainer className={classNames('flex flex-col lg:flex-row gap-6 lg:gap-4', className)}>
      {/* <div className="mb-10 lg:col-span-8 xl:col-span-8 xl:mb-0 flex flex-col gap-6 max-w-full"> */}
      <div
        className={classNames(
          'xl:mb-0 flex flex-grow flex-col gap-4 w-auto min-w-0',
          showRightSection && 'lg:max-w-[70%]',
        )}
      >
        {/* Left side content */}
        {children}
      </div>
      {rightSection && (
        <div className="justify-center w-full lg:w-[30%] lg:min-w-[30%]">{rightSection}</div>
      )}
    </SectionContainer>
  );
}
