# Mock.js

[![NPM](https://nodei.co/npm/mockjs.png?downloads=true&stars=true)](https://nodei.co/npm/mockjs/)

`npm i mockjs -D`
`yarn add mockjs -D`

vue-cli-2

[改造vue-cli,使用mockjs搭建mock server](https://juejin.im/post/6844903590046203918)

vue.config.js

```js
module.exports = {
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },
```

vue-element-admin/tree/master/[mock](https://github.com/PanJiaChen/vue-element-admin/tree/master/mock)