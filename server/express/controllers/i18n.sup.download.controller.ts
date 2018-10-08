
import { Request, Response } from 'express'
import { STATIC_I18N_DOWNLOAD_TYPE } from '../../../common/constants'
import i18nExcelService from '../services/i18n.excel.download.service'
import i18nJsonService from '../services/i18n.json.download.service'
import i18nPropertiesService from '../services/i18n.properties.download.service'
import  { COMMON_CODE }  from '../../../common/constants'
import models from '../../database/models'
import { delFile }  from '../../utils'
const { TRUE, ERROR } = COMMON_CODE

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-08 19:25:38  
 * @Desc:   导出当前多语言资源类型的所有多语言 
 * @Parm:    
 */
export default async function(req: Request, res: Response) {
  try {
    const { params } = req
    const { file } = params
    // 数据库已存在的多语言信息
    let i18nStoreDatas: any  = await models.I18n.find({ staticId: params.staticId })

    let i18nStoreData: any[] = []

    for(let data of i18nStoreDatas) {
      i18nStoreData = i18nStoreData.concat(JSON.parse(data.i18nData))
    }

    switch(params.format) {
      // 下载xlsx
      case STATIC_I18N_DOWNLOAD_TYPE[0].value:
        processDownloadExcel(i18nStoreData, file, res)
        break
      // 下载json  
      case STATIC_I18N_DOWNLOAD_TYPE[1].value:
        i18nJsonService.processDownloadJson(i18nStoreData, file, res)
        break
      // 下载properties
      case STATIC_I18N_DOWNLOAD_TYPE[2].value:
        i18nPropertiesService.processDownloadProperties(i18nStoreData, file, res)
        break  
      default:
        break  
    }

  } catch(err) {
    console.error(err.message)
    res.json({
      code: ERROR,
      msg: err.message,
      data: null
    })
  }
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-08 13:58:30  
 * @Desc:   下载Excel处理 
 * @Parm:    
 */
function processDownloadExcel(i18nStoreData: any, file:string, res: Response) {
  i18nExcelService.processDownloadExcel(i18nStoreData, file, (code, msg, data) => {
    if(code === TRUE) {
      res.download(data, err => {
        if(err) {
          res.send(err.message)
        }
        // 删除xlsx文件
        delFile(data)
      })
    } else {
      res.send(msg)
    }
  })
}