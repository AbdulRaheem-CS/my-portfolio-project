// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',  // Look for content inside pages folder
    './src/components/**/*.{js,ts,jsx,tsx}',  // Look for content inside components
    './src/sections/**/*.{js,ts,jsx,tsx}',   // Look for content inside sections
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
