import { Lokka } from 'lokka'
import { Transport } from 'lokka-transport-http'
import config from '../nuxt.config'

export default new Lokka({
  transport: new Transport(config.proxyHttp)
})