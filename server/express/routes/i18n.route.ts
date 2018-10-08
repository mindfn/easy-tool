import * as express from 'express'
import i18nSubUploadController from '../controllers/i18n.sub.upload.controller'
import i18nSupUploadController from '../controllers/i18n.sup.upload.controller'
import i18nSubDownloadController from '../controllers/i18n.sub.download.controller'
import i18nSupDownloadController from '../controllers/i18n.sup.download.controller'
import i18nDownloadTemplateService from '../services/i18n.template.download.service'
const router = express.Router()

// 导入当前多语言资源类型的一个子类型多语言
router.post('/upload/sub', i18nSubUploadController)
// 导入当前多语言资源类型的所有多语言
router.post('/upload/sup', i18nSupUploadController)
// 下载Excel模板文件
router.get('/download/template', i18nDownloadTemplateService)
// 下载子类型多语言
router.get('/download/sub/:format/:file/:i18nId', i18nSubDownloadController)
// 下载多语言列表
router.get('/download/sup/:format/:file/:staticId', i18nSupDownloadController)


export default router