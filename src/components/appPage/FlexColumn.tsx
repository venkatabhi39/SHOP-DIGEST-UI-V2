import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { PropsWithClassName } from '@/types/common.types';

type Props = {
  size?: 's' | 'm' | 'l';
};

// eslint-disable-next-line import/prefer-default-export
export const FlexColumn = ({
  children,
  size = 'm',
  className,
}: PropsWithChildren<PropsWithClassName<Props>>) => (
  <div
    className={classNames(
      'flex flex-col',
      size === 'm' && 'gap-4 lg:gap-6',
      size === 's' && 'gap-2 lg:gap-4',
      size === 'l' && 'gap-6 lg:gap-8',
      className,
    )}
  >
    {children}
  </div>
);
