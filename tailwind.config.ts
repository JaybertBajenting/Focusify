import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "musicNote":"url(/images/BGMusicNotes.png)",
          "mainBack":"url(/images/back.png)",
      },
      colors:{
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "maroon": "#A83332",
        "gold" : "#F8BD00",
        "gray": "#636363",
        "light-green" : "#DBFA29",
        "skyblue":"#49C5B6",
        "pinkish":"#FF4C4C",
        "mainBg":"#D9D9D9"
        
      }
    },
  },
  plugins: [],
};
export default config;
