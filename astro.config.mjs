// @ts-check
import mdx from "@astrojs/mdx";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://learn.colinkim.dev",
  integrations: [mdx()],
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.fontsource(),
    },
    {
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      provider: fontProviders.fontsource(),
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
