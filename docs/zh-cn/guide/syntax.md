# 模板语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

如果你熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，你也可以不用模板，[直接写渲染 (render) 函数](https://cn.vuejs.org/v2/guide/render-function.html)，使用可选的 JSX 语法。

## 插值

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：

```html
<span>Message: {{ msg }}</span>
```

Mustache 标签将会被替代为对应数据对象上 `msg property` 的值。无论何时，绑定的数据对象上 `msg` property 发生了改变，插值处的内容都会更新。

通过使用 [`v-once` 指令](https://cn.vuejs.org/v2/api/#v-once)，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：

```html
<span v-once>这个将不会改变: {{ msg }}</span>
```

## 原始 HTML

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 [`v-html` 指令](https://cn.vuejs.org/v2/api/#v-html)：

```html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

这个 `span` 的内容将会被替换成为 property 值 `rawHtml`，直接作为 HTML——会忽略解析 property 值中的数据绑定。注意，你不能使用 `v-html` 来复合局部模板，因为 Vue 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。

### [vuejs v-text 和 v-html的区别](https://www.cnblogs.com/jinbang/p/6790592.html)

`{{` message `}}`：將數據解析為純文本，不能輸出真正的html，在頁面加載時顯示花括號，所以通常使用v-html和v-text代替，且花括號方式在以後可能被取消

`v-html="html"`：輸出真正的html

`v-text="text"`：將數據解析為純文本，不能輸出真正的html，與花括號的區別是在頁面加載時不顯示花括號

[https://jsbin.com/wadoyiqabo/edit?html,output](https://jsbin.com/wadoyiqabo/edit?html,output)

```html
<div id="app">
　　<p>{{message}}</p> <!-- 輸出：<span>通過雙括號綁定</span> -->
　　<p v-html="html"></p> <!-- 輸出：html標籤在渲染的時候被解析 -->
　　<p v-text="text"></p> <!-- 輸出：<span>html標籤在渲染的時候被源碼輸出</span> -->
</div>


<script>
　　let app = new Vue({
　　el: "#app",
　　data: {
　　　　message: "<span>通過雙括號綁定</span>",
　　　　html: "<span>html標籤在渲染的時候被解析</span>",
　　　　text: "<span>html標籤在渲染的時候被源碼輸出</span>",
　　}
});
</script>

```