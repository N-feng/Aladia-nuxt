// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/header.global.css',
    '~/assets/css/smart-bar.css',
    '~/assets/css/icon.global.css',
    '~/assets/css/icon-button.global.css',
    '~/assets/css/button.global.css',
    '~/assets/css/mobile-header.css',
    '~/assets/css/desktop-header.css',
    '~/assets/css/search-form-autocomplete.global.css',
    '~/assets/css/text-input.global.css',
  ],
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ]
})