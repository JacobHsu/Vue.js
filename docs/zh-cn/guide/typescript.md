# TypeScript 支持

## [推荐配置](https://cn.vuejs.org/v2/guide/typescript.html#推荐配置)

```js
// tsconfig.json
{
  "compilerOptions": {
    // 与 Vue 的浏览器支持保持一致
    "target": "esnext",
    // 这可以对 `this` 上的数据 property 进行更严格的推断
    "strict": true,
    // 如果使用 webpack 2+ 或 rollup，可以利用 tree-shake:
    "module": "esnext",
    "moduleResolution": "node"
  }
}
```

注意你需要引入 `strict: true` (或者至少 noImplicitThis: true，这是 strict 模式的一部分) 以利用组件方法中 this 的类型检查，否则它会始终被看作 `any` 类型。

## 工程创建

[Vue CLI 3](https://github.com/vuejs/vue-cli) 可以使用 TypeScript 生成新工程。创建方式：

```js
# 1. 如果没有安装 Vue CLI 就先安装
npm install --global @vue/cli

# 2. 创建一个新工程，并选择 "Manually select features (手动选择特性)" 选项
vue create my-project-name
```

package.json

```js
  "dependencies": {
    "core-js": "^2.6.5",
    "vue": "^2.6.10",
    "vue-class-component": "^7.0.2",
    "vue-property-decorator": "^8.1.0",
    "vue-router": "^3.0.3",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.12.0",
    "@vue/cli-plugin-typescript": "^3.12.0",
    "@vue/cli-service": "^3.12.0",
    "typescript": "^3.4.3",
    "vue-template-compiler": "^2.6.10"
  }
```

[![NPM](https://nodei.co/npm/vue-class-component.png?downloads=true&stars=true)](https://nodei.co/npm/vue-class-component/)  
ECMAScript / TypeScript decorator for class-style Vue components.

[![NPM](https://nodei.co/npm/vue-property-decorator.png?downloads=true&stars=true)](https://nodei.co/npm/vue-property-decorator/)  
This library fully depends on vue-class-component