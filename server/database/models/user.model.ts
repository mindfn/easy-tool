import * as mongoose from 'mongoose'
import option from './option'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true // Hik的用户名唯一
  }
}, {
  ...option,
  timestamps: {
    updatedAt: false
  }
})

// 新增虚拟属性userId
UserSchema.virtual('userId').get(function (this: any) {
  return this._id.toString()
})

const User = mongoose.model('User', UserSchema)
export default User