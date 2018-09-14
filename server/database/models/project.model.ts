import * as mongoose from 'mongoose'
import option from './option'
const { Schema } = mongoose

// 项目成员
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

// 项目资源
const StaticDataSchema = new Schema({
  staticVersion: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },

  staticData: {
    type: Array,
    required: true
  },

  staticTag: {
    type: Number
  }
})


// 新增虚拟属性staticTypeId
StaticDataSchema.virtual('staticDataId').get(function (this: any) {
  return this._id.toString()
})


// 项目静态类型
const StaticTypeSchema = new Schema({
  typeName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true
  },
  typeValue: {
    type: Number,
    required: true
  },
  typeDesc: String,
  typeData: [StaticDataSchema]
}, option)


// 新增虚拟属性staticTypeId
StaticTypeSchema.virtual('staticTypeId').get(function (this: any) {
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
  // 项目创建者ID
  // projectUserId: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // 项目成员
  projectMember: [MemberSchema],
  projectDesc: String,

  // 项目静态资源
  projectStatic: [StaticTypeSchema]
}, option)

// 新增虚拟属性projectId
ProjectSchema.virtual('projectId').get(function (this: any) {
  return this._id.toString()
})

const Project = mongoose.model('Project', ProjectSchema)
export default Project
