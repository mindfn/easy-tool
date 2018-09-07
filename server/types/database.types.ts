import { Document, Model } from 'mongoose'

export type UserModel = Document & {
  username: string,
  password: string
}

export interface Models {
  User: Model<UserModel>
}