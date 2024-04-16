import { FC } from 'react';
import {
  PostCardContainer,
  PostCardDescription,
  PostImage,
  PostTitle,
} from '@/components/PostsRow';
import PostAuthorNames from '@/components/PostAuthorNames';
import classes from './PostCardVariants.module.scss';
import classNames from 'classnames';

export const PostCardWithTitle: FC<{ className?: string; noLink?: boolean }> = ({
  className,
  noLink,
}) => (
  <PostCardContainer className={classNames(className, classes.postsCard)}>
    <PostImage />
    <PostTitle noLink={noLink} />
  </PostCardContainer>
);

export const PostCardWithTitleAndDescription: FC<{ className?: string; noLink?: boolean }> = ({
  className,
  noLink,
}) => (
  <PostCardContainer className={classNames(className, classes.postsCard)}>
    <PostImage />
    <PostTitle noLink={noLink} />
    <PostCardDescription />
  </PostCardContainer>
);

export const PostCardWithAllElements: FC<{ className?: string; isLcpImage?: boolean }> = ({
  className = '',
  isLcpImage = false,
}) => (
  <PostCardContainer className={classNames(className, classes.postsCard)}>
    <PostImage isLcpImage={isLcpImage} />
    <PostTitle />
    <PostCardDescription />
    <PostAuthorNames />
  </PostCardContainer>
);
