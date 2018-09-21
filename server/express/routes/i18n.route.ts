import * as express from 'express'
import i18nController from '../controllers/i18n.controller'
const router = express.Router()

// 导入开发态多语言
router.post('/upload/dev', i18nController.upload)
// 导入翻译态多语言
router.post('/upload/translate', i18nController.uploadTranslate)

export default router