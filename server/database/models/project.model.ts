import * as mongoose from 'mongoose'
import option from './option'
const { Schema } = mongoose
import * as CON from '../../../common/constants'

// 项目成员
const MemberSchema = new Schema({
  username: {
    type: String,
    trim: true,
    index: true,
    unique: true
  },

  userId: {
    type: String,
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

// 项目静态资源类型
const StaticSchema = new Schema({
  staticName: {
    type: String,
    unique: true,
    trim: true,
    index: true,
    required: true
  },
  staticVersion: {
    type: String,
    unique: true,
    trim: true,
    index: true,
    required: true
  },
  staticType: {
    type: Number,
    required: true,
    enum: CON.STATIC_ARR
  },
  staticDesc: String
}, {
  ...option
})

// 新增虚拟属性staticId
StaticSchema.virtual('staticId').get(function (this: any) {
  return this._id.toString()
})

// 项目
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

  // 项目成员
  projectMember: [MemberSchema],
  projectDesc: String,

  // 项目创建者
  projectCreator: String,
  // 项目创建者Id
  projectCreatorId: String,

  // 项目静态资源
  projectStatic: [StaticSchema]
}, option)

// 新增虚拟属性projectId
ProjectSchema.virtual('projectId').get(function (this: any) {
  return this._id.toString()
})

const Project = mongoose.model('Project', ProjectSchema)
export default Project
