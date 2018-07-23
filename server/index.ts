const express = require('express')
const Builder = require('nuxt').Builder
const Nuxt = require('nuxt').Nuxt
const users = require('./routes/users')
const app = express()

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000


// let str: string = '222'
// console.log(str)

// Import and set Nuxt.js options
let config = require('../nuxt.config.js')

config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)

// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Access control allow origin
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  next()
})

// Import API Routes
app.use('/api', users)

// Give nuxt middleware to express
app.use(nuxt.render)

console.log('easy-tool listening at http://%s:%s', host, port);
// Start express server
app.listen(port, host)
