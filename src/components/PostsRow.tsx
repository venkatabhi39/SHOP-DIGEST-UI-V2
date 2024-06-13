import classNames from 'classnames';
import Image from 'next/image';
import type { FC, PropsWithChildren } from 'react';
// import { subHeadingFont } from '@/constants';
import { createContext, useContext } from 'react';
import placeholderImgProps from '@/assets/placeholder-image.png';
import { StyledAnchorWithoutUnderline } from '@/components/StyledLink';
import { CategoryPagePostList } from '@/services/api.service';
import classes from './PostsRow.module.scss';
import { Heading } from '@/components/Heading';

export const PostContext = createContext<CategoryPagePostList[number] | null>(null);

export const PostContextProvider = PostContext.Provider;

export const PostTitle: FC<{ className?: string; noLink?: boolean }> = ({
  className,
  noLink = false,
}) => {
  const post = useContext(PostContext)!;

  return (
    <StyledAnchorWithoutUnderline noLink={noLink} href={`/${post.slug}`}>
      <Heading as="h3" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      {/* <h3
        className={classNames(
          'text-[1.25rem] lg:text-[1.25rem] 2xl:text-[1.25rem] leading-[1.3] !font-medium',
          // subHeadingFont.className,
          className,
        )}
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      /> */}
    </StyledAnchorWithoutUnderline>
  );
};

PostTitle.defaultProps = {
  className: '',
};

export const PostImage: FC<{ className?: string; isLcpImage?: boolean }> = ({
  className,
  isLcpImage = false,
}) => {
  const post = useContext(PostContext)!;
  return (
    <Image
      priority={isLcpImage ? true : undefined}
      src={
        post._embedded['wp:featuredmedia']?.[0]?.media_details.sizes.full.source_url ??
        placeholderImgProps.src
      }
      alt={post.title.rendered}
      width={300}
      height={300}
      className={classNames(classes.postsCard__image, className)}
    />
  );
};
PostImage.defaultProps = {
  className: '',
};

export const PostCardContainer: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => <div className={classNames(className, '[&>*]:w-full')}>{children}</div>;

PostCardContainer.defaultProps = {
  className: '',
};

export const PostCardDescription: FC = () => {
  const {
    excerpt: { rendered },
  } = useContext(PostContext)!;

  return <div className="line-clamp-3" dangerouslySetInnerHTML={{ __html: rendered }} />;
};

const PostsRow: FC<
  PropsWithChildren & {
    className?: string;
  }
> = ({ children, className }) => (
  <section
    className={classNames(classes.postsCard__container, 'section', className)}
    style={{ marginLeft: '0', marginRight: '0' }}
  >
    {children}
  </section>
);

PostsRow.defaultProps = {
  className: '',
};

export default PostsRow;
