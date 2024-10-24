/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/Home/Hero.png')",
        'custom-bg2': "url('/src/assets/Home/hero2.png')",
      },
    },
  },
  plugins: [],
};
