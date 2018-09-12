import user from './user.resolver'
import project from './project.resolver'

const resolvers = {
  Mutation: {
    ...user.mutation,
    ...project.mutation
  },
  Query: {
    ...user.query,
    ...project.query
  }
}

export default resolvers