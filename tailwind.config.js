/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        common: '#d8eefb',
        holistic: '#ffbbb2',
        elective: '#c6e8ac',
        internship: '#ffeca8',
        english: '#99d5cb',
        speciality_elective: '#a3d977',
        thesis: '#d2bcd1',
      },
    },
  },
  plugins: [],
};
