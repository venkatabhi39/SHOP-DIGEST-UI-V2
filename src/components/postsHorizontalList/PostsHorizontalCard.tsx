import Image from 'next/image';
import React from 'react';
import placeholderImgProps from '@/assets/placeholder-image.png';
import moment from 'moment';
import { EmbeddedPost } from '@/types/embedded-post.type';
import { Heading } from '../Heading';
import { StyledAnchorWithoutUnderline } from '../StyledLink';

interface IPostsHorizontalCardProps {
  post: EmbeddedPost;
}

export const PostsHorizontalCard: React.FC<IPostsHorizontalCardProps> = ({ post }) => (
  <article className="gap-10 flex flex-col lg:flex-row items-start justify-between bg-white dark:bg-gray-800 dark:border-gray-700">
    <div className="flex-grow basis-1/3">
      <StyledAnchorWithoutUnderline href={`/${post.slug}`}>
        <Heading as="h3" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      </StyledAnchorWithoutUnderline>

      <p>{moment(post.date).format('MMMM D, YYYY')}</p>
    </div>
    <div
      className="flex-grow basis-1/3 line-clamp-6"
      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
    />
    <div className="flex-grow basis-1/3">
      <Image
        className="aspect-video w-full rounded-lg"
        alt={post.title.rendered}
        width={300}
        height={300}
        src={
          post._embedded['wp:featuredmedia']?.[0]?.media_details.sizes.full.source_url ??
          placeholderImgProps.src
        }
      />
    </div>
  </article>
);
