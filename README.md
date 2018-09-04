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


## 依赖

- [nuxt-property-decorator](https://github.com/nuxt-community/nuxt-property-decorator)
- [muse-ui](https://muse-ui.org/#/zh-CN)
