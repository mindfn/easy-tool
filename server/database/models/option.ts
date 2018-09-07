export default  {
  autoIndex: false, // 禁用ensureindex
  timestamps: {
    createdAt: 'createTime',
    updatedAt: 'updateTime'
  },
  toJSON: {
    getters: true,
    virtuals: true // 允许转换虚拟属性
  },
  toObject: {
    getters: true,
    virtuals: true
  },
  id: false,
  versionKey: false,
  minimize: false // 允许存储空对象
}