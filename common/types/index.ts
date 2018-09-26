// 通用接口
export interface Common {
  [propName: string]: any
}

// 请求数据接口
export interface Res {
  code: number,
  msg: string,
  data?: any
}

// 用户接口
export interface User {
  username: string,
  password?: string,
  userId?: string
}

// 资源类型接口
export interface Static {
  staticId?: string,
  staticName: string,
  staticType: number,
  staticDesc: string,
  staticVersion: string,
  [propName: string]: any
}

// 项目接口
export interface Project {
  projectName: string,
  projectUrl?: string,
  projectId?: string,
  projectDesc?: string,
  projectMember?: User[],
  projectStatic?: Static[]
}

// 多语言接口
export interface I18n {
  staticId?: string,
  i18nName: string,
  i18nDesc: string,
  i18nData?: string,
  i18nId?: string
  i18nImportTime?: string
}
