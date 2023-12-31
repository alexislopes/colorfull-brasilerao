// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
