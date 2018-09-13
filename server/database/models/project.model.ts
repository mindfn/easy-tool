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

// 项目多语言
const I18nSchema = new Schema({
  i18nName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true
  },
  i18nVersion: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  i18nDesc: String,
  // 前端多语言
  i18nFrontData: String,
  // 后端多语言
  i18nBackEndData: String
}, option)


// 新增虚拟属性staticId
I18nSchema.virtual('i18nId').get(function (this: any) {
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

  // 项目多语言
  projectI18n: [I18nSchema]
}, option)

// 新增虚拟属性projectId
ProjectSchema.virtual('projectId').get(function (this: any) {
  return this._id.toString()
})

const Project = mongoose.model('Project', ProjectSchema)
export default Project
