import { FC, useMemo, useState } from 'react';
import { CategoryPagePostList, fetchPostsForCategoryPages } from '@/services/api.service';
import { TopAppsForSection } from '@/services/appPages.service';
import PostsSection from './PostsSection';
import Paginator from './Paginator';
import { PostsHorizontalListSection } from '../postsHorizontalList/PostsHorizontalListSection';
import { Section } from '../section/Section';

const CategoryPagesContent: FC<{
  posts: CategoryPagePostList;
  totalPages: number;
  fetchParams?: Record<string, any>;
  topApps: TopAppsForSection;
}> = ({ posts, topApps, totalPages, fetchParams = {} }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [extraPosts, setExtraPosts] = useState<CategoryPagePostList>(() => posts);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const postRows = useMemo(() => {
    const postsArr = extraPosts;
    const bunch: CategoryPagePostList[] = [];

    for (let i = 0; i < postsArr.length; i += 12) {
      const chunk = postsArr.slice(i, i + 12);
      bunch.push(chunk);
    }

    return bunch;
  }, [extraPosts]);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-10 lg:py-14 mx-auto">
      {postRows.map((postsForRow, i) =>
        i === 0 ? (
          <PostsSection sectionIndex={i} key={i} posts={postsForRow} topApps={topApps} />
        ) : (
          <Section>
            <PostsHorizontalListSection posts={[...postsForRow]} />
            <Paginator
              isLoading={isLoading}
              onLoadMoreClicked={() => {
                const newPageNumber = pageNumber + 1;
                setPageNumber(pageNumber + 1);
                setIsLoading(true);

                fetchPostsForCategoryPages(fetchParams, newPageNumber)
                  .then(({ posts: newPosts }) => {
                    setExtraPosts([...extraPosts, ...newPosts]);
                  })
                  .finally(() => {
                    setIsLoading(false);
                  });
              }}
              currPageNumber={pageNumber}
              totalPages={totalPages}
            />
          </Section>
        ),
      )}
    </div>
  );
};

export default CategoryPagesContent;
