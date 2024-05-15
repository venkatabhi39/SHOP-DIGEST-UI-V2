const flowBitePlugin = require('flowbite/plugin');
const flowBiteTypographyPlugin = require('flowbite-typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/pages/**/*.{js,ts,jsx,tsx,mdx}'],
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
          dark: '#1d4ed8',
          800: '#1d4ed8'
        },
        sdGray: {
          light: '#f9fafb',
          DEFAULT: '#f6f7f8',
          dark: '#f3f4f6',
          border: '#111827',
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
          DEFAULT: '#820ad1',//#primary
          50: '#fbf3ff',
          100: '#f4e4ff',
          200: '#ecceff',
          300: '#dda7ff',
          400: '#c86fff',
          500: '#b438ff',
          600: '#a213ff',
          700: '#8d04ec',
          800: '#820ad1', //#primary
          900: '#62099a', //#primary hover
          950: '#430074',
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
