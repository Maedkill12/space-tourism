/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./util/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop": "url('/background-home-desktop.jpg')",
        "home-tablet": "url('/background-home-tablet.jpg')",
        "home-mobile": "url('/background-home-mobile.jpg')",
        "destination-desktop": "url('/background-destination-desktop.jpg')",
        "destination-tablet": "url('/background-destination-tablet.jpg')",
        "destination-mobile": "url('/background-destination-mobile.jpg')",
        "crew-desktop": "url('/background-crew-desktop.jpg')",
        "crew-tablet": "url('/background-crew-tablet.jpg')",
        "crew-mobile": "url('/background-crew-mobile.jpg')",
        "technology-desktop": "url('/background-technology-desktop.jpg')",
        "technology-tablet": "url('/background-technology-tablet.jpg')",
        "technology-mobile": "url('/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
