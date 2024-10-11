import daisyui from "daisyui";
import { DarkModeConfig, PluginsConfig } from "tailwindcss/types/config";

const config: {
  daisyui: { themes: string[] };
  plugins: PluginsConfig;
  darkMode: Partial<DarkModeConfig> | undefined;
  content: string[];
} = {
  darkMode: undefined,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./storyblok/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [daisyui, require("tailwindcss-animate")],
  daisyui: {
    themes: ["forest", "light", "dark", "cupcake"],
  },
};
export default config;
