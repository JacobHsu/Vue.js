# ESLint

::: danger Vue error
Vue error: Parsing error: Unexpected token
:::

[eslint-plugin-vue](https://eslint.vuejs.org/user-guide/#installation)

```js
yarn add -D eslint eslint-plugin-vue@next
```

.eslint.js

```js
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
  }
}
```

restart

[使用Eslint报"Parsing error: x-invalid-end-tag"错误的解决方案](https://www.jianshu.com/p/d5eec7c90b43)
> vue将标签渲染为原生html标签时，由于这些标签是自闭合的，所以有end标签会报错。
适用于Elment-ui、iview  

::: danger Vue error
Vue js引用警告 "export 'default' (imported as 'Api') was not found in './api'
:::

ES6 编译器识别问题

[修改引用js的地方](https://juejin.im/post/6844903944401977357)

将`import Api from './api'` 改成`import * as Api from './api'`
