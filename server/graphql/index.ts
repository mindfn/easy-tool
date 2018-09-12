import * as graphql from "graphql-yoga"
import { importSchema } from 'graphql-import'
import { ContextCallback, ContextParameters, Options } from "graphql-yoga/dist/types"
import { GraphQLServer } from 'graphql-yoga/dist/index'
import models from '../database/models'
import resolvers from './resolvers'
import middlewares from './middlewares'
const session = require('express-session')
import * as dotenv from 'dotenv'
dotenv.config()

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-08-31 18:50:56  
 * @Desc:   Start graphql server
 * @Parm:    
 */
export const startServer = () : GraphQLServer => {

  const context: ContextCallback = (req: ContextParameters) => ({
    models,
    req: req.request
  })

  const port =  <string>process.env[`DEV_PORT_${process.env.DEV_TYPE}`] || process.env.PRO_PORT

  // 跨域请求设置
  const cors = process.env.NODE_ENV === 'production' 
    ? {
      origin: false
    }
    : {
      credentials: true,
      methods: "*",
      origin: /^http(s?):\/\/10\.\w*/
    }

  const options: Options = {
    cors,
    port,
    endpoint: '/graphql',
    playground: process.env.DEV_TYPE === 'server' ?  '/playground' : false
  }

  const server: GraphQLServer = new graphql.GraphQLServer({
    context,
    resolvers,
    middlewares,
    typeDefs: importSchema('server/graphql/schemas/index.graphql')
  })

  // 启动会话功能
  server.express.use(session({
    secret: `some-random-secret-here`,
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 12
    }
  }))

  server.start(options, () => {
    console.log(`🚀🚀🚀 Server is running on  http://localhost:${port}`)
  })

  return server
}
