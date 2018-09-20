# nuxt-typescript-template

## 命令
``` bash
// 前端开发
npm run dev:client
// 后端开发
npm run dev:server
// 部署
npm run build
npm run pro
```

## 踩坑

- ts-node不支持commonjs以外的任何模板语法
- 引入@types/module后需要使用import * as module from 'module'的形式，具体查看[ts-模块-使用其它的JavaScript库](https://www.tslang.cn/docs/handbook/declaration-files/deep-dive.html)和[ts-声明文件-使用](https://www.tslang.cn/docs/handbook/declaration-files/consumption.html)
- [Mongoose forces the db option forceServerObjectId false and cannot be overridden. Mongoose defaults the server auto_reconnect options to true which can be overridden. See the node-mongodb-native driver instance for options that it understands.](https://stackoverflow.com/questions/18761595/mongoose-id-affected-before-saving)
- [This would not work directly via PlayGround, because of fetch options. I've created an [issue](https://github.com/graphcool/graphql-yoga/issues/255) for the same. https://github.com/prisma/graphql-yoga/pull/256/commits/c4c168cfdbcf885b0f3802ce428b8f2491194255,https://github.com/prisma/graphql-yoga/issues/255
- lokka不支持文件上传功能

## 依赖

- [nuxt-property-decorator](https://github.com/nuxt-community/nuxt-property-decorator)
- [muse-ui](https://muse-ui.org/#/zh-CN)
