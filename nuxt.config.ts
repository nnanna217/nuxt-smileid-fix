// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['@smileid/web-components']
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
