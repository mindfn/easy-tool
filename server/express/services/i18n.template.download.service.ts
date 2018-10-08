import { Request, Response } from 'express'
import * as path from 'path'

export default function(req: Request, res: Response) {
  res.download(path.join(__dirname,'files/多语言模板文件.xlsx'))
}