export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GinJack Nuxt學習專案',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: []
  },

  loading: { color: '#499537', height: '2px', duration: 3000 },

  transition: {
    name: 'layout',
    mode: 'out-in'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    "swiper/swiper-bundle.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/datepicker.js', mode: 'client' },
    { src: '~/plugins/gsap.js', mode: 'clinet'},
    { src: "~/plugins/vue-swiper.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/',
  },
  env: {
    firebaseApiKey: 'AIzaSyBNwZR_rKdf03VoYPnF9zYO704hXy3i7BQ'
  },
  fontawesome:{
    component: 'fa',
    icons:{
        solid: true,
        regular: true
    }
  },

  serverMiddleware: [
    { path: '/api', handler: '~/server/api.js' },
    { path: '/auth', handler: '~/server/auth.js' }
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      imgUrl: { limit: 100000 }
    },
    extractCSS: true,
    extend (config, ctx) {
      console.log(config)
    }
  }
}
