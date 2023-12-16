// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  css: ['~/assets/styles/index.css'],
  postcss: {
    plugins: {
      tailwindcss: {config: './tailwind/tailwind.config.js'},
      autoprefixer: {},
    },
  },
  devServer: {
    port: 2000,
  },
})
