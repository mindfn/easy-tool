import * as path from 'path'
const moment = require('moment')
import { STATIC_I18N_TABLE_COLUMNS } from '../../../common/constants/type'
import { EXPRESS } from '../../constant'
import * as fs from 'fs'
import { Response } from 'express'
const archiver = require('archiver')
import { delDir }  from '../../utils'

// 获取各个语言的key, 6是chiense的位置
const STATIC_I18N_TABLE_LANGUAGE_COLUMNS = STATIC_I18N_TABLE_COLUMNS.slice(6)

export default {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-10-08 14:03:38  
   * @Desc:   多语言下载Json文件 
   * @Parm:    
   */  
  processDownloadJson(i18nData: any, file: string, res: Response) {
    this.downloadAllLanguage(i18nData, file, res)
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-10-08 14:14:32  
   * @Desc:   下载所有多语言 
   * @Parm:    
   */  
  downloadAllLanguage(i18nData: any, file: string, res: Response) {
    try {
      // 需要被压缩的多语言目录
      const i18nDirPath = path.join(__dirname, `files/${moment().format('YYYY-MM-DD-HH-mm-ss')}`)
      // 压缩后的多语言目录
      const zipDirPath = path.join(__dirname, `files/${moment().format('YYYY-MM-DD-HH-mm-ss')}temp`)

      let i18n = {}

      fs.mkdirSync(i18nDirPath)
      fs.mkdirSync(zipDirPath)

      // 遍历每一行数据
      for(let row of i18nData) {
        if(!row.key) continue
        for(let key of Object.keys(row)) {
          // 判断是否是语言属性
          if(!STATIC_I18N_TABLE_LANGUAGE_COLUMNS.includes(key)) continue
          i18n[key] = i18n[key] || {}
          // 创建当前语言对应的文件和文件夹
          const i18nFileDir = path.join(i18nDirPath, EXPRESS.I18N_FILE_NAMES[key])
          if(!fs.existsSync(i18nFileDir)) {
            fs.mkdirSync(i18nFileDir)
            fs.writeFileSync(`${i18nFileDir}/README.md`, '')
            fs.writeFileSync(`${i18nFileDir}/${file||'index'}.json`, '')
          }

          // 保存当前语言对应的数据，
          // 需要注意相同的key会被覆盖
          i18n[key][row.key] = row[key]
        }
      }

      // 将多语言数据写入各个语言类型对应的json文件
      for(let language of Object.keys(i18n)) {
        let languagePath = path.join(i18nDirPath, `${EXPRESS.I18N_FILE_NAMES[language]}/${file||'index'}.json`)
        fs.writeFileSync(languagePath, JSON.stringify(i18n[language]))
      }

      // 压缩文件夹
      const archive = archiver('zip')
      const time = moment().format('YYYY-MM-DD-HH-mm-ss')
      // 将i18nDirPath目录下的文件压缩到zipDirPath目录下
      const zipPath = path.join(zipDirPath, `${time}.zip`)
      let output = fs.createWriteStream(zipPath)
      let fsReadStream

      output.on('close', () => {
        res.set({
          'Content-type': 'application/octet-stream',
          'Content-Disposition': 'attachment;filename=' + encodeURI(`${time}.zip`)
        })

        fsReadStream = fs.createReadStream(zipPath)
        fsReadStream.on('data', (chunk) => res.write(chunk, 'binary'))
        fsReadStream.on('end',  () => {
          delDir(i18nDirPath)
          delDir(zipDirPath)
          res.end()
        })
      })

      archive.on('error', (err) => {
        if (err) {
          console.error(err.message)
          res.send(err.message)
        }
      })

      archive.pipe(output)
      // 将i18nDirPath目录下的文件进行压缩，并重名成time目录
      archive.directory(i18nDirPath, time)
      archive.finalize()

    } catch(err) {
      console.error(err.message)
      res.send(err.message)
    }
  }
}