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
    '~/assets/css/play-overlay.global.css',
    '~/assets/css/star-rating.css',
    '~/assets/css/base-price-text.css',
    '@/assets/css/tailwind.css',
    '~/assets/css/tabs.css',
    '~/assets/css/subscription-cta.css',
  ],
  hooks: {
    'build:manifest': (manifest) => {
      // find the app entry, css list
      const css = Object.values(manifest).find(options => options.isEntry)?.css
      if (css) {
        // start from the end of the array and go to the beginning
        for (let i = css.length - 1; i >= 0; i--) {
          // if it starts with 'entry', remove it from the list
          if (css[i].startsWith('entry')) css.splice(i, 1)
        }
      }
    },
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-custom-media': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  // modules: ['@nuxtjs/tailwindcss'],
  // shadcn: {
  //   /**
  //    * Prefix for all the imported component
  //    */
  //   prefix: '',
  //   /**
  //    * Directory that the component lives in.
  //    * @default "./components/ui"
  //    */
  //   componentDir: './components/ui'
  // },
  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix: false,
  //   },
  // ]
})