import * as express from 'express'
import i18nSubController from '../controllers/i18n.sub.controller'
import i18nSupController from '../controllers/i18n.sup.controller'
const router = express.Router()

// 导入当前多语言资源类型的一个子类型多语言
router.post('/upload/sub', i18nSubController)
// 导入当前多语言资源类型的所有多语言
router.post('/upload/sup', i18nSupController)

export default router