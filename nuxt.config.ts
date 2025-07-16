import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  modules: ["@nuxthub/core"],
  hub: {
    database: true,
  },
  nitro: {
    experimental: {
      tasks: true,
    },
  },
});
