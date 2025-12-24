// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: "src",

  dir: {
    pages: "@/app/routes",
    layouts: "@/app/layouts"
  },

  css: ["@/app/styles.css"],

  modules: [
      "shadcn-nuxt",
      "@nuxtjs/color-mode"
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  shadcn: {
    prefix: "",
    componentDir: "@/shared/ui"
  }
})