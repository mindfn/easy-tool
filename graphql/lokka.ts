import { Transport } from 'lokka-transport-http'
import { Lokka } from 'lokka'
import config from '~/nuxt.config'

export const client = new Lokka({
  transport: new Transport(config.proxyHttp)
})