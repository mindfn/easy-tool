import { Models } from './database.type'
import { Request } from "express"
import * as Types from '../../common/types'

export interface resolveArgs extends Types.Common {}

export interface resolveCtx {
  req: Request,
  models: Models
}

export interface resolveRes extends Types.Res {}



