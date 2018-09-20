import user from './user.resolver'
import project from './project.resolver'
import sta from './static.resolver'

const resolvers = {
  Mutation: {
    ...user.mutation,
    ...project.mutation,
    ...sta.mutation
  },
  Query: {
    ...user.query,
    ...project.query,
    ...sta.query
  }
}

export default resolvers