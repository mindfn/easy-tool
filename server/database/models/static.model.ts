import * as mongoose from 'mongoose'
import option from './option'
const { Schema } = mongoose


const StaticSchema = new Schema({
  // 资源所属项目ID
  projectId: String,

  staticName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true
  },

  // 资源类型(多语言除外)
  staticType: {
    type: Number,
    required: true
  },

  staticDesc: String
}, option)


// 新增虚拟属性staticId
StaticSchema.virtual('staticId').get(function (this: any) {
  return this._id.toString()
})

const Static = mongoose.model('Project', StaticSchema)
export default Static




