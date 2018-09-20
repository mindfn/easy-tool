import * as express from 'express'
import i18nController from '../controllers/i18n.controller'
const router = express.Router()

router.post('/upload', i18nController.upload)

export default router