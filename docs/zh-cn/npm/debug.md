# Debug

> Error: No PostCSS Config found in 

postcss.config.js

```js
module.exports = {  
    plugins: {  
      'autoprefixer': {browsers: 'last 5 version'}  
    }  
} 
```

>  ERROR in ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!.
Module build failed: SyntaxError: Unexpected token

使用vuex中的mapState报错Syntax Error: Unexpected token

::: danger Error
...mapGetters(
:::

.babelrc

```js
{
  "presets": [
    [
      "env",
      {
        "modules": false
      }
    ]
  ],
  "plugins": [
    "transform-object-rest-spread"
  ]
}
```

> core-js/modules/es6.function.name in ./node_modules/cache-loader

`npm install --save core-js`

+ core-js@2.6.11

`npm install --save vue`
"vue": "^2.6.10" -> `"vue": "^2.6.12"`,