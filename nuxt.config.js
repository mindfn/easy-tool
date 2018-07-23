const parseArgs = require("minimist")
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

module.exports = {
  env: {
    baseUrl: `http://${host}:${port}`
  },

  proxy_http: 'http://10.13.64.122:3000',

  head: {
    title: "nuxt-type-template",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: [],
  build: {
    vendor: ['axios']
  },
  modules: [
    "@nuxtjs/axios",
    "~/modules/typescript.js"
  ],
  plugins: ['~/plugins/museui'],
  axios: {},

  // serverMiddleware: [
  //   // API middleware
  //   '~/api/index.js'
  // ]
}
