import  { COMMON_CODE }  from '../../../common/constants'
const { TRUE, ERROR } = COMMON_CODE
import { STATIC_I18N_TABLE_COLUMNS } from '../../../common/constants/type'
import { EXPRESS } from '../../constant'
const moment = require('moment')
import xlsx from 'node-xlsx'
import * as fs from 'fs'
import * as path from 'path'


export default {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-10-08 11:27:04  
   * @Desc:   多语言下载Excel文件 
   * @Parm:    
   */  
  processDownloadExcel(i18nData: any, file: string, cb: Function) {
    try {
      let xlsxData: any[] = []

      // 遍历数据库的多语言数据
      for(let row of i18nData) {
        let xlsxRowData: any[] = []

        // 设置每一列的数据值，查看对应的STATIC_I18N_TABLE_COLUMNS是否有值，有值则设置值，否则设置为空
        for(let key of STATIC_I18N_TABLE_COLUMNS) {
          xlsxRowData.push(row[key] || '')
        }

        xlsxData.push(xlsxRowData)
      }

      // 插入表头信息
      xlsxData.unshift(EXPRESS.TEMP_EXCEL.CAPTION)

      let buffer = xlsx.build([{name: "Sheet1", data: xlsxData}])
      
      let downloadPath = path.join(__dirname,`/files/${file || moment().format('YYYY-MM-DD-HH-mm-ss')}.xlsx`)
      
      fs.writeFile(downloadPath, buffer, 'binary', (err) => {
        if(err) {
          console.error(err.message)
          cb (
            ERROR,
            err.message,
            null
          )
        }

        cb (
          TRUE,
          '',
          downloadPath
        )
      })

    } catch(err) {
      console.error(err.message)
      cb (
        ERROR,
        err.message,
        null
      )
    }
  }
}