import user from './user.resolvers'
import project from './project.resolvers'

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