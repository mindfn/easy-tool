
import * as dotenv from 'dotenv'
import * as mongoose from './database'
import * as graphql from './graphql'
import { GraphQLServer } from 'graphql-yoga/dist/index'
import { Nuxt, Builder } from 'nuxt'
import i18nRoute from './express/routes/i18n.route'

// 设置Node环境变量
dotenv.config()

// 启动Mongodb服务
mongoose.startDB()

// 启动Graphql服务
const server: GraphQLServer = graphql.startServer()

// 配置中间件Nuxt
const nuxt: Nuxt = new Nuxt(require('../nuxt.config.js'))

if (process.env.DEV_TYPE === 'nuxt') {
  const builder: Builder = new Builder(nuxt)
  builder.build()
}

// 上传路由处理
// server.express.use('easy-tool/ui', routes) 
server.express.use('/graphql/i18n', i18nRoute) 

server.express.use(nuxt.render)


