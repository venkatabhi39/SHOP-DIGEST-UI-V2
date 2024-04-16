// eslint-disable-next-line camelcase
// import { Libre_Bodoni } from 'next/font/google';
import { GetStaticPropsResult } from 'next';

// eslint-disable-next-line import/prefer-default-export
// export const subHeadingFont = DM_Serif_Display({
//   weight: '400',
//   subsets: ['latin', 'latin-ext'],
// });

// export const subHeadingFont = Libre_Bodoni({
//   weight: '600',
//   subsets: ['latin', 'latin-ext'],
// });

export const staticPropsPageNotFoundResult: GetStaticPropsResult<any> = {
  notFound: true,
  revalidate: true,
};

export const POSTS_PER_CATEGORY_PAGE = 18;
