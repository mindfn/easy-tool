import * as axios from 'axios'
import config from '../nuxt.config.js'

let options = {
  baseURL:  process.env.NODE_ENV === 'development' ? config.proxy_http : config.env.baseUrl
}

export default axios.create(options)
