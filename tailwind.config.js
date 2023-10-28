/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {},
  colors: {
    ...colors,
  },
  screens: {
    xl: { max: '1279px' },

    lg: { max: '1000px' },

    md: { max: '767px' },

    sm: { max: '639px' },
  },
};
export const plugins = [];
export const darkMode = 'class';
