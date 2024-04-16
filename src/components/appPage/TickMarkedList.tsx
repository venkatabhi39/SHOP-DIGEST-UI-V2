import type { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { PropsWithClassName } from '@/types/common.types';
import tickMarkImg from '@/assets/green-tick.png';
import List from '../List';
import styles from './TickMarkedList.module.scss';

export type TickMarkedListProps = PropsWithClassName<{
  title?: ReactNode;
  list: ReactElement[] | string[];
  subdued?: boolean;
  // eslint-disable-next-line no-unused-vars
  renderTickMark?: (index: number) => ReactNode;
}>;

export default function TickMarkedList({
  title,
  className,
  list,
  renderTickMark,
  subdued = false,
}: TickMarkedListProps) {
  const tickIcon = <Image src={tickMarkImg} alt="Tick mark" className="w-5 h-5" />;

  return (
    <List
      className={classNames(className, styles.list__container)}
      listTitle={title}
      ulClassName={classNames('!ml-[0.625rem]', subdued && 'subduedText')}
    >
      {list.map((item, i) => (
        <>
          <span className="flex-shrink-0 mr-2 mt-0.5">{renderTickMark?.(i) ?? tickIcon}</span>
          <span className="leading-normal">{item}</span>
        </>
      ))}
    </List>
  );
}
