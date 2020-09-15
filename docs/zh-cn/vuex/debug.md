# 踩坑

> 使用vuex中的mapState报错Syntax Error: Unexpected token

::: danger Error
babel预置的转换器是 babel-preset-es2015 ，并不能转换 Object Rest Operator 特性。
:::

::: danger Error
```js
  computed: {
   ...mapGetters([
```
:::
> regeneratorRuntime is not defined

```
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-vue-jsx", "transform-runtime"]
}
```

```s
npm install babel-preset-stage-2
```

接着在babel的配置文件 .babelrc 中应用插件：

.babelrc

```js
{
    "presets": ["stage-2","babel-preset-env"]
}
```

[使用vuex中的mapState踩坑记](https://www.jianshu.com/p/dad8d00dcddd)
