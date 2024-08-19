// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { disableVuex: true }],
    '@vueuse/nuxt',
    '@morpheme/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    // uncomment to enable storybook
    // '@nuxtjs/storybook',
    '@nuxt/test-utils/module',
    '@nuxt/fonts',
    '@vueuse/motion/nuxt',
    "nuxt-simple-robots",
    "@nuxtjs/sitemap",
  ],

  app: {
    head: {
      script: [
        {
          hid: 'gtmHead',
          innerHTML: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5MPVL83C');
      `,
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiUrl: '',
      appUrl: 'barongsolo.com',
    },
  },

  imports: {
    dirs: ['./api', './stores', './constants',],
  },

  // https://gitsindonesia.github.io/ui-component/
  morpheme: {
    darkMode: true,
    css: false,
    sass: true,
    theme: 'morpheme',
    transpileDeps: false,
    optimizeDeps: false,
  },

  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/themes.css'],

  robots: {
    allow: "/"
  }
})