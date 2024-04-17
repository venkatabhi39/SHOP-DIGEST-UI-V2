const flowBitePlugin = require('flowbite/plugin');
const flowBiteTypographyPlugin = require('flowbite-typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        sdBlue: {
          DEFAULT: '#0972d3',
        },
        sdGray: {
          light: '#f9fafb',
          DEFAULT: '#f6f7f8',
          dark: '#f3f4f6',
          border: '#ddd',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce6',
          200: '#bbf7ce',
          300: '#87eea9',
          400: '#4bdd7c',
          500: '#23c459',
          DEFAULT: '#1ab64f',
          600: '#1ab64f',
          700: '#167f3a',
          800: '#176432',
          900: '#15522b',
          950: '#052e15',
        },
        primary: {
          DEFAULT: '#FF5A5F',
          50: '#fff0f0',
          100: '#ffdddd',
          200: '#ffc1c1',
          300: '#ff9595',
          400: '#ff5959',
          500: '#ff2626',
          600: '#fc0606',
          700: '#e90000',
          800: '#af0505',
          900: '#900c0c',
          950: '#500000',
        },
      },
    },
    fontFamily: {
      body: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
  },
  plugins: [flowBitePlugin, flowBiteTypographyPlugin],
};
