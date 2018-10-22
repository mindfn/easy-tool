import { Transport } from 'lokka-transport-http'
import { Lokka } from 'lokka'

console.log(`🚀🚀🚀 Client is requesting on ${process.env.PROXY_HTTP}`)

export const client = new Lokka({
  transport: new Transport(process.env.PROXY_HTTP)
})