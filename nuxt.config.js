const parseArgs = require("minimist")
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

module.exports = {
  
  // Web前端请求代理地址
  proxyHttp: '10.13.64.122:3000/graphql',

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
    src:'~/assets/scrollbar/scrollbar.css' 
  }],
  build: {
    vendor: [
      'muse-ui', 
      'lokka', 
      'lokka-transport-http', 
      'muse-ui-toast/dist/muse-ui-toast.common',
      'vuedraggable'
    ]
  },

  plugins: ['~/plugins/museui', '~/plugins/lokka.ts'],

  modules: ["~/modules/typescript.js"]
}
