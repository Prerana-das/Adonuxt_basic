'use strict'

const resolve = require('path').resolve


module.exports = {
  /*
  ** Headers of the page
  */
 modules: [
  '@nuxtjs/axios',

],
axios: {
  //  baseURL: 'https://tradister.com/'
},


 plugins: [
  '~plugins/vuecommon',
  '~plugins/iview',
  // '~plugins/vuetify'
],



  head: {
    title: 'First Adonuxt Project',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      },
      // { rel: 'stylesheet', href: "/css/bootstrap.css" },
      { rel: 'stylesheet', href: "/css/main.css" }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#744d82' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources')
}
