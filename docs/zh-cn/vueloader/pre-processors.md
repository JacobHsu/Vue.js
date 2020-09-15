# 使用预处理器

在 webpack 中，所有的预处理器需要匹配对应的 loader。Vue Loader 允许你使用其它 webpack loader 处理 Vue 组件的某一部分。它会根据 `lang` 特性以及你 webpack 配置中的规则自动推断出要使用的 loader

# Sass

例如，为了通过 Sass/SCSS 编译我们的 `<style>` 标签：

```s
npm install -D sass-loader node-sass
```

> TypeError: loaderContext.getResolve is not a function

sass-loader 版本过高 

```s
npm install -D sass-loader@6.0.6
```

## Less

```s
npm install -D less less-loader@4.1.0
```

```js
// webpack.config.js -> module.rules
{
  test: /\.less$/,
  use: [
    'vue-style-loader',
    'css-loader',
    'less-loader'
  ]
}
```

[vue 安装 less less-loader 之后，运行项目报错](https://www.jianshu.com/p/ad59d4b2a0e9)：
> TypeError: loaderContext.getResolve is not a function

网上查找资料，说是less-loader 版本过高，此时的less版本是v3.几，less-loader版本v6.几

```json
"less": "^3.0.4",
"less-loader": "^4.1.0",
```

```vue
<style lang="less" scoped>
@import "../theme/index.less";
```
