import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  devServer: {
    port: 9000,
    host: "0.0.0.0"
  },
  buildDir: "/root/docs"
})
