import type { ComponentProps, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
// import { subHeadingFont } from '@/constants';
import classes from './DontMissOutRowContainer.module.scss';

export const DontMissOutRowTitle: FC<
  Omit<HTMLAttributes<HTMLHeadElement>, 'children'> & { rowTitle?: string }
> = ({ className, rowTitle, ...props }) => (
  <h3
    className={classNames(
      // subHeadingFont.className,
      classes.title,
      className,
    )}
    {...props}
  >
    {rowTitle || "Don't miss out!"}
  </h3>
);

type DontMissOutRowContainerProps = ComponentProps<'section'>;

const DontMissOutRowContainer: FC<DontMissOutRowContainerProps> = ({ className, ...props }) => (
  <section className={classNames(classes.container, className)} {...props} />
);

export const DontMissOutRowContainerWithSection: FC<DontMissOutRowContainerProps> = ({
  children,
  ...props
}) => (
  <DontMissOutRowContainer {...props}>
    <div className={classNames('section', classes.sectionContainer)}>{children}</div>
  </DontMissOutRowContainer>
);

export default DontMissOutRowContainer;
