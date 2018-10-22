const parseArgs = require("minimist")

const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

let env = process.env

module.exports = {
  // 前后端共用环境变量
  env: {
    NODE_ENV: env.NODE_ENV,
    // Web前端请求地址
    PROXY_HTTP: env[`URI_${env.NODE_ENV}`] + `:${env.DEV_TYPE ? env.DEV_PORT_server : env.PRO_PORT}/graphql`
  },
 
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
  css: [{
    src:'~/assets/font-awesome-4.7.0/css/font-awesome.min.css'
  }, {
    src:'~/assets/style/scrollbar.css' 
  }, {
    src: '~/assets/style/transition.css'
  }],
  build: {
    vendor: [
      'muse-ui', 
      'lokka', 
      'lokka-transport-http', 
      'muse-ui-toast/dist/muse-ui-toast.common',
      'vuedraggable',
      'jsencrypt'
    ]
  },

  plugins: [
    '~/plugins/museui', 
    '~/plugins/upload',
    {src: '~/plugins/jsencrypt.ts', ssr: false}
  ],

  modules: ["~/modules/typescript.js"],

  router: {
    middleware: 'userAuth'
  }
}
