import '@/styles/globals.scss';
import { type AppProps } from 'next/app';

import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Flowbite } from 'flowbite-react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
// import Header from '@/components/Header';
import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ['latin'] });

const IS_DEV = process.env.NODE_ENV === 'development';
console.log('IS_DEV'), IS_DEV;
const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  // weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

// const titleFont = Inter({
//   weight: '600',
//   subsets: ['latin'],
// });

// const titleFont = Libre_Bodoni({
//   weight: '600',
//   subsets: ['latin'],
// });

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  const router = useRouter();

  const { footerTopApps, ...componentProps } = pageProps;

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: ` :root { --font-sans: 'Inter', sans-serif; } `,
          }}
        />
      </Head>

      <div>
        <Flowbite>
          <Component {...componentProps} footerTopApps={footerTopApps} />
        </Flowbite>
        <Footer
          footerTopApps={footerTopApps}
          className={classNames(router.pathname.startsWith('/apps/') && '!mt-0')}
        />
      </div>
    </>
  );
}
