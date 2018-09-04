const express = require('express')
const Builder = require('nuxt').Builder
const Nuxt = require('nuxt').Nuxt
const users = require('./routes/users')
const app = express()
const config = require('../easy-tool.config')
import { GraphQLServer } from "graphql-yoga"
console.log(GraphQLServer)

const host = config.serverIP || '127.0.0.1'
const port = config.serverPort || 3000

// Import and set Nuxt.js options
const nuxt = new Nuxt(require('../nuxt.config.js'))

// Start build process in dev mode
if (!(process.env.NODE_ENV === 'production')) {
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

// Start express server
app.listen(port, host, () => {
  console.log('easy-tool listening at http://%s:%s', host, port)
})



