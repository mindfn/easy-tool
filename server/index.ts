
import * as dotenv from 'dotenv'
import * as mongoose from './database'
import * as graphql from './graphql'
import { GraphQLServer } from 'graphql-yoga/dist/index'
import { Mongoose } from 'mongoose'
import { Nuxt, Builder } from 'nuxt'

// 设置Node环境变量
dotenv.config()

// 启动Mongodb服务
const db: Promise<Mongoose> = mongoose.startDB()

// 启动Graphql服务
const server: GraphQLServer = graphql.startServer(db)

// 配置中间件Nuxt
const nuxt: Nuxt = new Nuxt(require('../nuxt.config.js'))

if (process.env.DEV_TYPE && process.env.DEV_TYPE === 'nuxt') {
  const builder: Builder = new Builder(nuxt)
  builder.build()
}

server.express.use(nuxt.render)

