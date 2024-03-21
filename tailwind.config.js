/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    colors: {
      'custom_grey': '#444444',
      'bg_grey': '#f8f8f8',
      'custom_orange': '#FD5C01',
    },
    extend: {
      fontFamily :{ 
        ua_regular: ["ua_regular","sans-serif"], 
        ua_bold: ["ua_bold","sans-serif"], 
      } 
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
