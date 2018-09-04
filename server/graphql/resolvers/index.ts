import user from './user.resolvers'


const resolvers = {
  Query: {
    ...user.Query
  }
}

export default resolvers