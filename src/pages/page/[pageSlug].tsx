import { GetStaticPaths, GetStaticProps } from 'next';
import { isAxiosError } from 'axios';
import { FC, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Libre_Bodoni as LibreBodoni } from 'next/font/google';
import { fetchPageBySlug } from '@/services/api.service';
import { EmbeddedPost } from '@/types/embedded-post.type';
import { staticPropsPageNotFoundResult } from '@/constants';
import classes from '@/pages/[postSlug].module.scss';
import withFooterTopApps from '@/utils/withFooterTopApps';
import { PropsWithFooterTopApps } from '@/types/common.types';
import SiteHeaderWithTopApps from '@/components/siteHeader/SiteHeaderWithTopApps';
// eslint-disable-next-line camelcase

const blockQuoteFont = LibreBodoni({
  subsets: ['latin'],
  weight: '400',
});

type Props = PropsWithFooterTopApps<{ postData: EmbeddedPost }>;

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps<Props, { pageSlug: string }> = withFooterTopApps(
  async context => {
    if (!context.params) {
      return staticPropsPageNotFoundResult;
    }

    const { pageSlug } = context.params;
    if (!pageSlug) return staticPropsPageNotFoundResult;

    try {
      const {
        data: [post],
      } = await fetchPageBySlug(pageSlug);

      if (!post) return staticPropsPageNotFoundResult;

      return {
        props: {
          postData: post,
        },
        revalidate: 2_628_000, // Every month
      };
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 404) {
        return {
          notFound: true,
          revalidate: true,
        };
      }

      throw err;
    }
  },
);

const WpPage: FC<Props> = ({ postData, footerTopApps }) => {
  const {
    title: { rendered: titleString },
    content: { rendered: contentHTML },
  } = postData;
  const pageTitle = `${titleString} | Shop Digest`;
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const blockQuotes = ref.current?.querySelectorAll('blockquote p');
    blockQuotes.forEach(item => item.classList.add(blockQuoteFont.className));
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
      </Head>
      <SiteHeaderWithTopApps topApps={footerTopApps} />
      <main className="mb-8">
        <div className="section mt-5">
          <div className={classes.postContentContainer}>
            <div
              id={classes.content}
              ref={ref}
              dangerouslySetInnerHTML={{
                __html: contentHTML
                  .replaceAll('<script', '<script defer')
                  .replaceAll('platform.twitter.com', 'platform.fastertwitter.com'),
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default WpPage;
