import daisyui from "daisyui";
import { Config } from "tailwindcss/types/config";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./storyblok/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [daisyui],
};
export default config;
