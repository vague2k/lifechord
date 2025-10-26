// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
    fallback: {
      ja: "en"
    },
  },
});
