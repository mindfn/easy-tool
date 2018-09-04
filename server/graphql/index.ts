import * as graphql from "graphql-yoga"
import { importSchema } from 'graphql-import'
import { ContextCallback, ContextParameters, Options } from "graphql-yoga/dist/types"
import { GraphQLServer } from 'graphql-yoga/dist/index'
import models from '../database/models'
import resolvers from './resolvers'
import { Mongoose } from "mongoose"

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-08-31 18:50:56  
 * @Desc:   Start graphql server
 * @Parm:    
 */
export const startServer = (db : Promise<Mongoose>) : GraphQLServer => {

  const context: ContextCallback = (req: ContextParameters) => ({
    db,
    models,
    req: req.request
  })

  const port =  <string>process.env[`PORT_${process.env.DEV_TYPE}`] || '3000'

  const options: Options = {
    port,
    endpoint: '/graphql',
    playground: '/playground'
  }

  const server: GraphQLServer = new graphql.GraphQLServer({
    context,
    resolvers,
    typeDefs: importSchema('server/graphql/schemas/index.graphql')
  })

  server.start(options, () => {
    console.log(`🚀🚀🚀 Server is running on  http://localhost:${port}`)
  })

  return server
}
