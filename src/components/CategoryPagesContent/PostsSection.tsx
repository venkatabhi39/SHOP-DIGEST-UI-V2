import shopifyIconProps from '@/assets/shopify-icon.svg';
import Button from '@/components/Button';
import {
  DontMissOutRowContainerWithSection,
  DontMissOutRowTitle,
} from '@/components/DontMissOutRowContainer';
import { PostCardWithTitle } from '@/components/PostCardVariants';
import PostsRow, { PostContextProvider, PostImage, PostTitle } from '@/components/PostsRow';
import AppCard from '@/components/appPage/AppCard';
import { CategoryPagePostList } from '@/services/api.service';
import { TopAppsForSection } from '@/services/appPages.service';
import classNames from 'classnames';
import Image from 'next/image';
import { Fragment, PropsWithChildren, useState, type FC } from 'react';
import StarRating from '../StarRating';
import { StyledAnchor } from '../StyledLink';
import classes from './index.module.scss';

export const DontMissOutRowContainer: FC<PropsWithChildren> = ({ children }) => (
  <DontMissOutRowContainerWithSection className={classes.dontMissOutPost__container}>
    <DontMissOutRowTitle className="inline-block pb-2" />
    <div className={classes.dontMissOutPost__divider} />
    {children}
  </DontMissOutRowContainerWithSection>
);

export function TopAppsRow({ topApps }: { topApps: TopAppsForSection }) {
  const [expanded, setExpanded] = useState(false);
  if (topApps.length < 1) return null;

  return (
    <DontMissOutRowContainerWithSection className={classes.dontMissOutPost__container}>
      <DontMissOutRowTitle className="inline-block pb-2" rowTitle="Today's Featured Shopify Apps" />
      <div className="mt-2 max-md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
        {topApps.map(
          (
            {
              'overall-rating': overallRating,
              app_id: appId,
              'app-slug': slug,
              icon,
              'app-name': appName,
            },
            i,
          ) => (
            <AppCard
              sectioned={false}
              key={appId}
              className={classNames(
                'flex-grow py-4 px-4 h-full max-w-full flex items-center',
                !expanded && i >= 9 && 'hidden',
              )}
            >
              <span className="inline-block mr-4">{i + 1}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                className="object-cover w-10 h-10 rounded-[4px] shrink-0 mr-3 bg-sdGray"
                src={icon || shopifyIconProps.src}
                loading="lazy"
                width={40}
                height={40}
                alt={appName!}
                loader={({ src }) => src}
              />
              <div className="flex-1 min-w-0">
                <StyledAnchor
                  href={`/apps/shopify/${slug}`}
                  className="block max-w-full overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {appName}
                </StyledAnchor>
                <StarRating className="mt-1" rating={overallRating} />
              </div>
            </AppCard>
          ),
        )}
      </div>
      <Button
        primary
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center justify-center"
      >
        <span className="mr-2">{expanded ? 'Show less' : 'Show more'}</span>
        {expanded ? (
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        )}
      </Button>
    </DontMissOutRowContainerWithSection>
  );
}

// function DontMissOutRow({ posts }: { posts: CategoryPagePostList }) {
//   if (posts.length < 1) return null;

//   return (
//     <DontMissOutRowContainer>
//       <div className="grid grid-cols-1 sm:grid-cols-2 items-start justify-center gap-8 mt-4">
//         {posts.map(post => (
//           <div key={post.id} className={classes.dontMissOutPost}>
//             <PostContextProvider value={post}>
//               <PostTitle />
//               <PostImage className="lg:!w-6/12 inline-block" />
//             </PostContextProvider>
//           </div>
//         ))}
//       </div>
//     </DontMissOutRowContainer>
//   );
// }

const HomePagePostsRow: FC<{ posts: CategoryPagePostList }> = ({ posts }) => {
  const postCardElements = posts.map(post => (
    <Fragment key={post.id}>
      <PostContextProvider key={post.id} value={post}>
        {/* {index === 0 && (
          <PostCardWithAllElements
            isLcpImage={index === 0 && isFirstRow}
            className="md:col-span-3 lg:row-span-3 [&_h3]:text-[1.25rem] [&_h3]:lg:text-[1.6rem] [&_h3]:2xl:text-[1.6rem]"
          />
        )} */}
        <PostCardWithTitle className={classNames()} />
        {/* {index >= 5 && index <= 8 && <PostCardWithTitleAndDescription className={classNames()} />} */}
        {/* {index > 8 && <PostCardWithTitle className={classNames()} />} */}
      </PostContextProvider>
      {/* {index !== posts.length - 1 && (
        <>
          <div className={classes.vRuler} />
          <div className={classes.hRuler} />
        </>
      )} */}
    </Fragment>
  ));

  return <PostsRow className={classes.postsRow__container}>{postCardElements}</PostsRow>;
};

const PostsSection: FC<{
  posts: CategoryPagePostList;
  sectionIndex: number;
  topApps: TopAppsForSection;
}> = ({ posts, topApps, sectionIndex }) => {
  const hasEnoughPosts = posts.length > 13;
  if (posts.length < 1) return null;

  return (
    <>
      <HomePagePostsRow posts={posts.slice(0, 12)} />
      {/* {hasEnoughPosts &&
        (sectionIndex === 0 ? (
          <TopAppsRow topApps={topApps} />
        ) : (
          <DontMissOutRow posts={posts.slice(13)} />
        ))} */}
    </>
  );
};

export default PostsSection;
