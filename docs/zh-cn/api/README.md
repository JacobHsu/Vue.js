# API

## 全局配置

`Vue.config` 是一个对象，包含 Vue 的全局配置。

## 选项 / 数据

### methods

* 类型：`{ [key: string]: Function }`

* 详细： methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 `this` 自动绑定为 Vue 实例。

::: danger
注意，**不应该使用箭头函数来定义 method 函数** (例如 `plus: () => this.a++`)。
理由是箭头函数绑定了父级作用域的上下文，所以 `this` 将不会按照期望指向 Vue 实例，`this.a` 将是 undefined。
:::

* 示例：

```js
var vm = new Vue({
  data: { a: 1 },
  methods: {
    plus: function () {
      this.a++
    }
  }
})
vm.plus()
vm.a // 2
```

* 参考：[事件处理器](https://cn.vuejs.org/v2/guide/events.html)

<iframe height="300" style="width: 100%;" scrolling="no" title="Solution 9 - Intro to Vue" src="https://codepen.io/GreggPollack/embed/JxgXvq?height=265&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/GreggPollack/pen/JxgXvq'>Solution 9 - Intro to Vue</a> by Gregg Pollack
  (<a href='https://codepen.io/GreggPollack'>@GreggPollack</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
