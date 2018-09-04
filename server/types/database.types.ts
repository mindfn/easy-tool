import { Document } from 'mongoose'

export type UserModel = Document & {
  createTime: string,
  password: string
}

export interface Models {
  User: UserModel
}