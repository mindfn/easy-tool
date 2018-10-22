export default function({ route, store, redirect }) {
  // 生产态不用判断权限
  if(process.env.NODE_ENV !== 'production') return
  // 过滤登录页
  if(route.path === '/') return
  // 判断用户是否已经登录，未登录则跳转到登录页
  if(!store.state.user) redirect('/') 
}