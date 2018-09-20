import * as mongoose from 'mongoose'
import option from './option'
const { Schema } = mongoose

// 多语言
const i18nSchema = new Schema({
  staticId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true
  },

  // 前端多语言
  i18nFrontEndData: {
    type: String,
    trim: true
  },

  // 后端多语言
  i18nBackEndData: {
    type: String,
    trim: true
  },

  // 前端多语言导入时间
  i18nFrontImportTime: {
    type: String,
    trim: true
  },

  // 后端多语言导入时间
  i18nBackEndImportTime: {
    type: String,
    trim: true
  },

  // 前端多语言同步时间
  i18nFrontSyncTime: {
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

const I18n = mongoose.model('I18n', i18nSchema)
export default I18n
