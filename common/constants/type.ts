export enum STATIC {
  I18N = 0, // 多语言
  IMG, // 图片
  ICON, // ICON图标
  SKIN, // 皮肤
  DIST // 前端包
}

export const STATIC_ARR = [
  STATIC.I18N,
  STATIC.IMG,
  STATIC.ICON,
  STATIC.SKIN,
  STATIC.DIST
]

export const STATIC_VIEW = [{
  label: '多语言',
  value: STATIC.I18N,
  color: 'blue300'
}, {
  label: '图片',
  value: STATIC.IMG,
  color: 'red300'
}, {
  label: '图标',
  value: STATIC.ICON,
  color: 'deepOrange300'
}, {
  label: '皮肤',
  value: STATIC.SKIN,
  color: 'lightGreen300'
}, {
  label: '前端包',
  value: STATIC.DIST,
  color: 'cyan300'
}]

