import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/utils/gtag';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {` 
            window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date()); 

            gtag('config', '${GA_TRACKING_ID}'); 
          `}
        </Script>
      </body>
    </Html>
  );
}
