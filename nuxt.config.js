import pkg from './package'

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/pilarverduga/'
        }
      }
    : {}

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:title', content: pkg.title },
      { property: 'og:description', content: pkg.description },
      { property: 'og:type', content: 'website' },
      // { property: 'og:url', content: `http://giovannipante.com` },
      { property: 'og:image', content: `/images/share.jpg` },
      { property: 'twitter:card', content: `summary_large_image` },
      { property: 'twitter:site', content: `@pilush` },
      { property: 'twitter:creator', content: `@pilush` },
      { name: 'theme-color', content: '#000000' },
      { hid: 'robots', name: 'robots', content: 'noindex,nofollow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'MyFontsWebfontsKit.css' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/scroll.js', '~/plugins/reveal.js', '~/plugins/lines.js', { src: '~plugins/ga.js', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', 'nuxt-basic-auth-module'],

  basic: {
    name: 'pilar',
    pass: 'pilar',
    enabled: true
    // enabled: process.env.BASIC_ENABLED === 'true' // require boolean value(nullable)
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },

  ...routerBase
}
