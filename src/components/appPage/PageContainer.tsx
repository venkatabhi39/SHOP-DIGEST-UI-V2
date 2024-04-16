import { type PropsWithChildren } from 'react';
import classNames from 'classnames';
import { PropsWithClassName } from '@/types/common.types';

export default function PageContainer({
  children,
  className,
}: PropsWithChildren<PropsWithClassName>) {
  return (
    <div
      className={classNames(
        'w-full bg-white dark:bg-gray-900 overflow-hidden pt-4 pb-4',
        className,
      )}
    >
      {children}
    </div>
  );
}
