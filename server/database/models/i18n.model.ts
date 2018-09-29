import * as mongoose from 'mongoose'
import option from './option'
const { Schema } = mongoose

// 多语言
const i18nSchema = new Schema({
  staticId: {
    type: String,
    required: true,
    trim: true
  },

  i18nVersion: {
    type: String,
    required: true,
    trim: true
  },

  i18nName: {
    type: String,
    required: true,
    trim: true
  },

  i18nDesc: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  i18nData: {
    type: String,
    trim: true
  },

  i18nImportFileName: {
    type: String,
    trim: true
  },

  i18nImportTime: {
    type: String,
    trim: true
  }
}, {
  ...option,
  timestamps: {
    createdAt: false,
    updatedAt: false
  }
})

// 新增虚拟属性userId
i18nSchema.virtual('i18nId').get(function (this: any) {
  return this._id.toString()
})

const I18n = mongoose.model('I18n', i18nSchema)
export default I18n
