import { ComponentProps, DOMAttributes, FC, PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import classNames from 'classnames';
import classes from './StyledLink.module.scss';

export type StyledLinkProps = PropsWithChildren<
  LinkProps & { className?: string } & Pick<DOMAttributes<any>, 'dangerouslySetInnerHTML'> & {
      primary?: boolean;
      target?: string;
    }
>;

export type StyledAnchorProps = ComponentProps<'a'> & { primary?: boolean };

export const StyledAnchor: FC<StyledAnchorProps> = ({ primary, className, children, ...props }) => (
  <a
    {...props}
    className={classNames(
      className,
      classes.link,
      primary &&
        'no-underline hover:underline underline-offset-4 text-sdBlue hover:!text-sdBlue dark:text-primary-400  cursor-pointer',
    )}
  >
    {children}
  </a>
);

const StyledLink: FC<StyledLinkProps> = ({ className, primary, ...props }) => (
  <Link
    {...props}
    className={classNames(
      className,
      classes.link,
      primary &&
        'no-underline hover:underline underline-offset-4 text-sdBlue hover:!text-sdBlue dark:text-primary-400  cursor-pointer',
    )}
  />
);

export const StyledLinkWithoutUnderline: FC<StyledLinkProps> = ({ className, ...props }) => (
  <StyledLink {...props} className={classNames(className, '!no-underline')} />
);

export const StyledAnchorWithoutUnderline: FC<
  ComponentProps<'a'> & {
    noLink?: boolean;
  }
> = ({
  className,
  noLink,
  href,
  ...props
  // eslint-disable-next-line jsx-a11y/anchor-has-content
}) => {
  const tagClassNames = classNames(classes.link, className, '!no-underline');

  return noLink ? (
    // @ts-ignore
    <div {...props} className={tagClassNames} />
  ) : (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a {...props} href={href} className={tagClassNames} />
  );
};

export default StyledLink;
