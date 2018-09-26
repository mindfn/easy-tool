import user from './user.resolver'
import project from './project.resolver'
import sta from './static.resolver'
import i18n from './i18n.resolver'

const resolvers = {
  Mutation: {
    ...user.mutation,
    ...project.mutation,
    ...sta.mutation,
    ...i18n.mutation
  },
  Query: {
    ...user.query,
    ...project.query,
    ...sta.query,
    ...i18n.query
  }
}

export default resolvers