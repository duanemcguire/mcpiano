import global from './utils/global';
import getRoutes from './utils/getRoutes';
import getSiteMeta from './utils/getSiteMeta';

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'mcpiano',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://mcguirepiano.com/favicon.ico' },
    { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" },
    { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
    ],
  },
  target: 'static',
  ssr: true,
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/components',
    '@/plugins/lightbox.client',
    { src: '~plugins/ga.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,


  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-responsive-loader',
    '@nuxtjs/sitemap'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  server: {
    port: 3000,
    host: '0.0.0.0' // default: localhost
  },
  sitemap: {
    hostname: global.siteUrl,
    routes() {
      return getRoutes();
    }
  },

}
