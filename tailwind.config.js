/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  prefix: 'gb-',
  plugins: [
    require('flowbite/plugin')
  ],
}

