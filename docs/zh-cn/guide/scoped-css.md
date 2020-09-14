# [有作用域的 CSS](https://vue-loader-v14.vuejs.org/zh-cn/features/scoped-css.html)

当 `<style>` 标签有 scoped 属性时，它的 CSS 只作用于当前组件中的元素。这类似于 Shadow DOM 中的样式封装。它有一些注意事项，但不需要任何 polyfill。它通过使用 PostCSS 来实现以下转换：

```html
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```

转换结果：

```html
<style>
.example[data-v-f3f3eg9] {
  color: red;
}
</style>

<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>
```

## 注意

---

## 混用本地和全局样式

你可以在一个组件中同时使用有作用域和无作用域的样式：

```html
<style>
/* 全局样式 */
</style>

<style scoped>
/* 本地样式 */
</style>
```

## 子组件的根元素

使用 `scoped` 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件有作用域的 CSS 和子组件有作用域的 CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

## 深度作用选择器

你很可能会遇到的问题  

vue组件编译后，会将 template 中的每个元素加入 [data-v-xxxx] 属性来确保 `style scoped` 仅本组件的元素而不会污染全局，但如果你引用了第三方组件

默认只会对组件的最外层（div）加入这个 [data-v-xxxx] 属性，但第二层开始就没有效果了。
如下所示： 第一层还有 `data-v-17bb9a05`, 但第二层的 `.ui-cells` 就没有了。

```html
<div data-v-17bb9a05 class="level1">
  <!---->
  <div class="ui-cells">
```

所以，如果你期待通过如下方式修改 ui-cells 的样式。是没有任何效果的：

```html
<style scoped>
    .level1 .ui-cells {
        // ...
    }
</style>
```

这是因为，所有的scoped中的css最终编译出来都会变成这样：

```html
.level1[data-v-17bb9a05] .ui-cells[data-v-17bb9a05]
```

解决方法一：除非你将 scoped 移除，或者新建一个没有 scoped 的 style（一个.vue文件允许多个style）  
解决方法二：深度作用选择器 `>>>` （注意，只作用于css）

```css
.level1 >>> .ui-cells {
    // ...
}
```
但如果是sass/less的话可能无法识别，这时候需要使用 `/deep/` 选择器。

---

如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 `>>>` 操作符：

```html
<style scoped>
.a >>> .b { /* ... */ }
</style>
```

上述代码将会编译成：

```css
.a[data-v-f3f3eg9] .b { /* ... */ }
```

有些像 Sass 之类的预处理器无法正确解析 `>>>`。这种情况下你可以使用 `/deep/` 操作符取而代之——这是一个 `>>>` 的别名，同样可以正常工作。

ex: bootstrap-vue form-select change border

```js
<style lang="scss" scoped>
.form-group /deep/ .custom-select {
  border: 1px solid #fff;
}
</style>
```
