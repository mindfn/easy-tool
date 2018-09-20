/** 
 * @Author: zhuxiankang 
 * @Date:   2018-08-10 11:03:08  
 * @Desc:   graphql请求处理
 * @File:   index.ts 
 */


import user from './user'
import project from './project'
import sta from './static'
import  { COMMON_CODE, COMMON_MSG }  from '~/common/constants'
import Toast from 'muse-ui-toast/dist/muse-ui-toast.common'
import Loading from 'muse-ui-loading/dist/muse-ui-loading.common'
import toastConfig from '~/plugins/museui'
import { LoadingInstance } from 'muse-ui-loading'
Toast.config(toastConfig)



const lokka = {
  user,
  project,
  sta
}  

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-08-06 11:41:57  
 * @Desc:   lokka再封装 
 * @Parm:   type    -> mutate的类型
 *          parm:   -> 参数
 *          cb      -> 需要执行的回调
 *           
 */
export default async function(type: string, parm: any, cb?: Function,) {
  const loading: LoadingInstance = Loading({ text: '正在加载中...' })
  try {
    const graphql: string[] = type.split('-')
    // graphql[0] 当前graphql下的需要调用的文件名称
    // graphql[1] 调用文件名称中对应的函数名
    let { data }  = await lokka[graphql[0]][graphql[1]](parm)
    data.code !== COMMON_CODE.ERROR ? (cb || parm)(data) : Toast.error(data.msg)
  } catch(err) {
    // 没有登录则重定向到登录页
    if(err.rawError[0].message === COMMON_MSG.NOT_LOGIN) {
      window.location.href = '/'
    }
    Toast.error(err.msg)
  } finally {
    loading && loading.close && loading.close()
  }
} 