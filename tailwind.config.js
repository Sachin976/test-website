/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,scss,css}',
    './src/components/**/*.{js,ts,jsx,tsx,scss,css}',
    './src/**/*.{js.ts.jsx.tsx,scss,css}',
    './styles/**/*{.scss,css}',
    './src/containers/**/*.{.scss,tsx,jsx,ts,scss,css}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
    colors: {
      // custom color palette
      primary: '#441151',
      secondary: '#EE85B5',
      violet: '#883677',
      congo: '##FF958C',
      blue: {
        500: '#00C3FF',
        700: '#003EC8',
      },
      success: '#5FC790',
      warning: '#FFA600',
      danger: '#FF5630',
      dark: '#2E3A44',
      info: '#1CA7EC',
      black: '#000000',
      grey1: '#A0AABF',
      grey2: '#C0C6D4',
      grey3: '#E3E8F1',
      light: '#F9FBFC',
      white: '#FFF',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
