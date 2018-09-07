import * as mongoose from 'mongoose'
import option from './option'
import * as crypto from 'crypto'
import { createMd5Password } from '../../utils'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Hik的用户名唯一
    index: true 
  },
  password: {
    type: String,
    required: true,
    trim: true,
    set(password) {
      return createMd5Password(password)
    }
  }
}, option)

// 新增虚拟属性userId
UserSchema.virtual('userId').get(function (this: any) {
  return this._id
})

const User = mongoose.model('User', UserSchema)
export default User