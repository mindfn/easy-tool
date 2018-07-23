import * as axios from 'axios'
import config from '../nuxt.config.js'

let options = {}
// The server-side needs a full url to works
// if (process.server) {
//   options.baseURL = config.proxy_http || 'http://localhost:3000'
// }

options.baseURL = config.proxy_http || 'http://localhost:3000'

export default axios.create(options)
