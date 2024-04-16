/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 2629800,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.gravatar.com',
        port: '',
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'api1.shopdigest.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'superadmin.theshopdigest.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'www.shopdigest.com',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
