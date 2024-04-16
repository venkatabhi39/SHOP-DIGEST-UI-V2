import axios from 'axios';
import type { EmbeddedPost } from '@/types/embedded-post.type';
import { WpCategory } from '@/types/wp-category.type';
import { POSTS_PER_CATEGORY_PAGE } from '@/constants';
import { WpTag } from '@/types/wp-tag.type';
import { WpUser } from '@/types/wp-user.type';

const wordpressApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const COMMON_FETCH_POSTS_PARAMS = {
  _embed: true,
  status: 'publish',
};

// eslint-disable-next-line import/prefer-default-export
export const fetchPosts = (params: Record<string, any>) =>
  wordpressApi.get<EmbeddedPost[]>('/posts', {
    params: {
      ...params,
      ...COMMON_FETCH_POSTS_PARAMS,
    },
  });

export type CategoryPagePostList = Pick<
  EmbeddedPost,
  'id' | 'slug' | 'title' | 'excerpt' | '_links' | '_embedded'
>[];

export const fetchPostsForCategoryPages = async (
  params: Record<Exclude<string, 'page' | 'per_page'>, any> = {},
  page = 1,
): Promise<{
  totalPages: number;
  posts: CategoryPagePostList;
}> => {
  const { data, headers } = await fetchPosts({
    ...params,
    page,
    _fields: ['id', 'slug', 'title', 'excerpt', '_links', '_embedded'].join(','),
    per_page: page === 1 ? POSTS_PER_CATEGORY_PAGE : POSTS_PER_CATEGORY_PAGE + 2,
  });
  const totalPages = Number.parseInt(headers['x-wp-totalpages'] || '1', 10);

  return {
    posts: data,
    totalPages,
  };
};

export const fetchCategoriesBySlug = (slug: string) =>
  wordpressApi.get<WpCategory[]>('/categories', {
    params: {
      slug,
    },
  });

export const fetchTagsBySlug = (slug: string) =>
  wordpressApi.get<WpTag[]>('/tags', {
    params: {
      slug,
    },
  });

export const fetchUsersBySlug = (slug: string) =>
  wordpressApi.get<WpUser[]>('/users', {
    params: {
      slug,
    },
  });

export const fetchPageBySlug = (slug: string) =>
  wordpressApi.get<EmbeddedPost[]>('/pages', {
    params: {
      slug,
      ...COMMON_FETCH_POSTS_PARAMS,
    },
  });
