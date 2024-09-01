/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#225991",
        // red-100
        primaryLight:"#dce7fa",
        // red-100
        primaryLightest:"rgb(243 249 255)",
        // red-500
        primaryMedium:"#549ae0",
        // red/30
        primaryLight2:"rgb(190 222 253)",
        // red/30
        primaryDark:"rgb(25 74 125)",
        yellowLight:"#feffdd"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("preline/plugin")],
};
