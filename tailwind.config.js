/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {},
  colors: {
    ...colors,
  },
};
export const plugins = [];
export const darkMode = 'class';
