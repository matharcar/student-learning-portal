import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3fff6',
          100: '#dfffe9',
          200: '#baf5cd',
          300: '#8ae5a4',
          400: '#57cf78',
          500: '#2db35d',
          600: '#1f8d4c',
          700: '#1a6f3d',
          800: '#1d5934',
          900: '#1b472d',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(18, 73, 42, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
