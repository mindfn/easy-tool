import * as mongoose from 'mongoose'
import * as crypto from 'crypto'
const moment = require('moment')

const UserSchema = new mongoose.Schema({
  createTime: {
    type: String,
    default: String(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'))
  },
  password: {
    type: String,
    required: true,
    trim: true,
    set(pwd) {
      
    }
  }
})

const User = mongoose.model('User', UserSchema)
export default User