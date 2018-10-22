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
- 后端需要的properties文件的=前后不需要空格，因此需要修改node-properties库文件的write.js文件中的源码
- graphql-yoga Session无法生效问题查看https://github.com/prisma/graphql-yoga/tree/master/examples/authentication/express-session#usage,
 asyncData中使用lokka发请求拿不到session值, 是因为从服务端发请求是拿不到session值的，具体查看nuxt issue: 
 https://github.com/nuxt/nuxt.js/issues/1824, 解决方法是不能再asynData发的请求里使用session，这里我猜想应该在asyncData的请求里采用已经在vuex里存好的session值。
For everyone having this issue, look into nuxtServerInit for store hydration. Don't mistake the server middleware's context with Nuxt's context. The best approach here is to have nuxtServerInit pick up any data from the server's context (you can access res for instance) and save it in the Vuex store. This way it'll be properly hydrated on the client.
- session的cookie的secure属性需要设置为false，否则session只有在https下才生效。

## 依赖

- [nuxt-property-decorator](https://github.com/nuxt-community/nuxt-property-decorator)
- [muse-ui](https://muse-ui.org/#/zh-CN)
