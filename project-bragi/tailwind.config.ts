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
      /*
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      */
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
