/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {},
  colors: {
    primary: {
      400: '#ff4500',
    },
    ...colors,
  },
};
export const plugins = [];
