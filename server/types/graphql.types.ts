import { Models } from './database.types'
import { Request } from "express"

export interface resolveArgs {
  [prop: string]: any
}

export interface resolveCtx {
  req: Request,
  models: Models
}

export interface resolveRes {
  code: number,
  data?: any,
  msg: string
}



