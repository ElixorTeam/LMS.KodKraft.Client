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
      "@nuxtjs/color-mode",
      "nuxt-typed-router"
      // 'nuxt-oidc-auth'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  shadcn: {
    prefix: "",
    componentDir: "@/shared/ui"
  },
  // oidc: {
  //   defaultProvider: 'keycloak',
  //   providers: {
  //     keycloak: {
  //       audience: 'account',
  //       redirectUri: 'http://localhost:3000/auth/keycloak/callback',
  //       userNameClaim: 'preferred_username',
  //       logoutRedirectUri: 'http://localhost:3000',
  //     },
  //   }
  // },
})