// 通用接口
interface Common {
  [propName: string]: string | boolean
}

// graqhql请求响应接口
interface Res {
  code: number,
  msg: string,
  [propName: string]: any
}

// 登录数据接口
interface Login {
  username: string,
  password: string
}

// 项目Id
interface ProjectId {
  projectId: string
}

// 用户成员接口
interface Member {
  userId?: string,
  username: string,
  projectIds?: ProjectId[]
}

// 项目接口
interface Project {
  projectName: string,
  projectId?: string,
  projectUrl?: string,
  projectDesc?: string,
  projectMember?: Member[]
}

export {
  Common,
  Res,
  Login,
  Project,
  Member
}