import { ComponentProps, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './TableContainer.module.scss';

type Props = PropsWithChildren<ComponentProps<'div'>>;

export default function TableContainer({ children, className, ...props }: Props) {
  return (
    <div {...props} className={classNames(styles.tableContainer, className)}>
      {children}
    </div>
  );
}
