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

## Do not mutate vuex store state outside mutation handlers

vuex 中操作数组，报错 [Do not mutate vuex store state outside mutation handlers](https://www.jianshu.com/p/09327119b009)  

> vuex不允许直接改变state中的东西，必须通过mutations！！

操作是这样，每次赋值新数组（selection）给temp,然后actions中commit motations改变state值currentseletedRows就报这个错。  

`Array.prototype.shift()` - [JavaScript | MDN - Mozilla](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)  
`shift()` 方法會移除並回傳陣列的第一個元素。此方法會改變陣列的長度。

引用数据类型，vuex里的currentSelectedRows引用selection变量，如果不加slice,改变selection就直接改变vuex里的state,而vuex不允许直接改变state中的东西，必须通过mutations。
