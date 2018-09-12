import * as mongoose from 'mongoose'
import option from './option'
const { Schema } = mongoose

const MemberSchema = new Schema({
  username: {
    type: String,
    trim: true,
    index: true,
    unique: true
  },

  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    index: true
  }
}, {
  ...option,
  _id: false,
  timestamps: {
    createdAt: false,
    updatedAt: false
  },
})

const ProjectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
    trim: true
  },
  // 项目bitbucket地址
  projectUrl: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true
  },
  // 项目创建者ID
  // projectUserId: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // 项目成员
  projectMember: [MemberSchema],
  projectDesc: String
}, option)

// 新增虚拟属性projectId
ProjectSchema.virtual('projectId').get(function (this: any) {
  return this._id.toString()
})

const Project = mongoose.model('Project', ProjectSchema)
export default Project
