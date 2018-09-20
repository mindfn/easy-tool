import * as mongoose from 'mongoose'
import option from './option'
import { createMd5Password } from '../../utils'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Hik的用户名唯一
    index: true  // secondary index
  },
  password: {
    type: String,
    required: true,
    trim: true,
    set(password) {
      return createMd5Password(password)
    }
  }
}, {
  ...option,
  timestamps: {
    updatedAt: false
  }
})

// 新增虚拟属性userId
// UserSchema.virtual('userId').get(function (this: any) {
//   return this._id.toString()
// })

const User = mongoose.model('User', UserSchema)
export default User