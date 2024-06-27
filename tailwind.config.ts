import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary0: '#A2D9CE',
        primary1: '#138D75',
        primary2: '#0B5345',
        secondary0: '#D7BDE2',
        secondary1: '#9B59B6',
        secondary2: '#512E5F',
      },
    },
  },
  plugins: [],
};
export default config;
