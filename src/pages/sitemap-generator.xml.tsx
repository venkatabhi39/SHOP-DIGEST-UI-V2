import { GetServerSideProps } from 'next';
import { fetchPosts } from '@/services/api.service';
import { EmbeddedPost } from '@/types/embedded-post.type';
import { getAllLivePagesUrls } from '@/services/helpPages.service';
import { getAllAppsSlugs, PAGINATION_LIMIT } from '@/services/appPages.service';

function generateSiteMap(...listOfUrls: string[][]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${process.env.NEXT_PUBLIC_HOST_NAME}</loc>
     </url>
     ${listOfUrls
       .map(urls =>
         urls
           .map(
             url => `
               <url>
                   <loc>${`${process.env.NEXT_PUBLIC_HOST_NAME}/${
                     url.startsWith('/') ? url.slice(1) : url
                   }`}</loc>
               </url>
             `,
           )
           .join(''),
       )
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

const fetchFirstPage = async () => {
  const { data: posts, headers } = await fetchPosts({
    _fields: ['slug'],
    per_page: 100,
    page: 1,
  });

  const totalPages = Number.parseInt(headers['x-wp-totalpages'], 10);

  return { totalPages, posts };
};

async function fetchAllPostUrls() {
  const postsArr: EmbeddedPost[] = [];
  const firstPageRes = await fetchFirstPage();
  const { totalPages } = firstPageRes;
  postsArr.push(...firstPageRes.posts);

  await Promise.all(
    [...Array(totalPages - 1)].map(async (_, index) => {
      const currPage = index + 2;

      // We make an API call to gather the URLs for our site
      // eslint-disable-next-line no-await-in-loop
      const { data: posts } = await fetchPosts({
        _fields: ['slug'],
        per_page: 100,
        page: currPage,
      });

      postsArr.push(...posts);
    }),
  );

  return postsArr.map(post => post.slug);
}

async function fetchAllHelpPageUrls() {
  const helpPageDocs = await getAllLivePagesUrls();
  return helpPageDocs.map(({ category_slug: categorySlug, url }) => `help/${categorySlug}/${url}`);
}

async function fetchAllAppPageUrls(): Promise<string[]> {
  const appPageSlugs = await getAllAppsSlugs();

  return [
    ...appPageSlugs.map(slug => `apps/shopify/${slug}`),
    ...[...Array(Math.ceil(appPageSlugs.length / PAGINATION_LIMIT))].map(
      (_, i) => `apps/shopify/pages/${i + 1}`,
    ),
  ];
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const [postsArr, helpPageUrls, appPageUrls] = await Promise.all([
    fetchAllPostUrls(),
    fetchAllHelpPageUrls(),
    fetchAllAppPageUrls(),
  ]);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(postsArr, helpPageUrls, appPageUrls);

  res.setHeader('Content-Type', 'text/xml');
  /**  Set Cache Control in vercel @see https://vercel.com/docs/edge-network/caching#stale-while-revalidate */
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
