import user from './user.resolvers'

const resolvers = {
  Mutation: {
    ...user.mutation
  },
  Query: {
    ...user.query
  }
}

export default resolvers