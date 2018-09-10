import { Document, Model, Schema } from 'mongoose'

export type UserModel = Document & {
  username: string,
  password: string,
  userId?: string
}

export type MemberModel = Document & {
  username: string,
  userId: Schema.Types.ObjectId
}

export type ProjectMode = Document & {
  projectName: string,
  projectMember: MemberModel,
  projectDesc: string
}

export interface Models {
  User: Model<UserModel>,
  Project: Model<ProjectMode>
}