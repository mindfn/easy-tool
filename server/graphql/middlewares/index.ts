import auth from './auth.middleware'

const middlewares = [
  ...auth
]

export default middlewares