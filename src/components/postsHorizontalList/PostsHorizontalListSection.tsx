import React from 'react';
import { PostsHorizontalCard } from './PostsHorizontalCard';
import { Section } from '../section/Section';

interface IPostsHorizontalListSectionProps {
  posts: any[];
}

export const PostsHorizontalListSection: React.FC<IPostsHorizontalListSectionProps> = ({
  posts,
}) => (
  <>
    {posts.map(post => (
      <React.Fragment key={post.id}>
        <PostsHorizontalCard post={post} />
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </React.Fragment>
    ))}
  </>
);
