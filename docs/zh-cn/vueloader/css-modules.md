# CSS Modules

[CSS Modules](https://github.com/css-modules/css-modules) 是一个流行的，用于模块化和组合 CSS 的系统。vue-loader 提供了与 CSS Modules 的一流集成，可以作为模拟 scoped CSS 的替代方案。

## 用法

::: tip
Vue Cli 使用的版本是 3.9.2，已經有整合 CSS Modules 到開發環境中，不需再另外設定
:::

首先，CSS Modules 必须通过向 css-loader 传入 modules: true 来开启：

```js
// webpack.config.js
{
  module: {
    rules: [
      // ... 其它规则省略
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              // 开启 CSS Modules
              modules: true,
              // 自定义生成的类名
              localIdentName: '[local]_[hash:base64:8]'
            }
          }
        ]
      }
    ]
  }
}
```

然后在你的 `<style>` 上添加 module 特性：

::: warning 注意
是單數喔！注意不是 modules，新手會犯的錯，找半天。
:::

```css
<style module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>
```

这个 `module` 特性指引 `Vue Loader` 作为名为 `$style` 的计算属性，向组件注入 CSS Modules 局部对象。然后你就可以在模板中通过一个动态类绑定来使用它了

```html
<template>
  <p :class="$style.red">
    This should be red
  </p>
</template>
```

因为这是一个计算属性，所以它也支持 :class 的对象/数组语法：

```html
<template>
  <div>
    <p :class="{ [$style.red]: isRed }">
      Am I red?
    </p>
    <p :class="[$style.red, $style.bold]">
      Red and bold
    </p>
  </div>
</template>
```

你也可以通过 JavaScript 访问到它：

```js
<script>
export default {
  created () {
    console.log(this.$style.red)
    // -> "red_1VyoJ-uZ"
    // 一个基于文件名和类名生成的标识符
  }
}
</script>
```

你可以查阅 [CSS Modules 规范](https://github.com/css-modules/css-modules)了解更多细节