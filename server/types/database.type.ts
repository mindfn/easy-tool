import { Document, Model } from 'mongoose'
import * as Types from '../../common/types'

export interface UserModel extends Document,Types.User {}
export interface ProjectModel extends Document, Types.Project {}
export interface StaticModel extends Document, Types.Static {}

export interface Models {
  User: Model<UserModel>,
  Project: Model<ProjectModel>,
  Static: Model<StaticModel>
}