# [事件处理](https://cn.vuejs.org/v2/guide/events.html)

## 方法处理器

---
可以用 `v-on` 指令监听 DOM 事件：

```html
<div id="example">
  <button v-on:click="greet">Greet</button>
</div>
```

我们绑定了一个单击事件处理器到一个方法 `greet`。下面在 Vue 实例中定义这个方法：

```js
var vm = new Vue({
  el: '#example',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // 方法内 `this` 指向 vm
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      alert(event.target.tagName)
    }
  }
})
// 也可以在 JavaScript 代码中调用方法
vm.greet() // -> 'Hello Vue.js!'
```

<iframe width="100%" height="300" src="//jsfiddle.net/JacobHsu/grkt30po/3/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 内联语句处理器

---
除了直接绑定到一个方法，也可以用内联 JavaScript 语句：

```html
<div id="example-2">
  <button v-on:click="say('hi')">Say Hi</button>
  <button v-on:click="say('what')">Say What</button>
</div>
```

```js
new Vue({
  el: '#example-2',
  methods: {
    say: function (msg) {
      alert(msg)
    }
  }
})
```

类似于内联表达式，事件处理器限制为 **一个语句**。

有时也需要在内联语句处理器中访问原生 DOM 事件。可以用特殊变量 `$event` 把它传入方法：

```html
<button v-on:click="say('hello!', $event)">Submit</button>
```

```js
// ...
methods: {
  say: function (msg, event) {
    // 现在我们可以访问原生事件对象
    event.preventDefault()
  }
}
```

<iframe width="100%" height="300" src="//jsfiddle.net/JacobHsu/ksd7p1yx/9/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## [事件修饰符](https://cn.vuejs.org/v2/guide/events.html#事件修饰符)

---

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 v-on 提供了 **事件修饰符**。之前提过，修饰符是由点开头的指令后缀来表示的。

* .stop
* .prevent
* .capture
* .self
* .once
* .passive

```html
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<!-- 冒泡事件由内而外，捕捉事件可由外而内-->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

::: danger
使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止所有的点击，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。
:::

<iframe width="100%" height="300" src="//jsfiddle.net/JacobHsu/kd7L1ct0/12/embedded/js,html,result,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

事件修饰符：`.prevent`

<iframe width="100%" height="300" src="//jsfiddle.net/JacobHsu/gcen1jp2/3/embedded/html,js,result,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

事件修饰符：`.self`

<iframe width="100%" height="300" src="//jsfiddle.net/JacobHsu/u0jsomnt/21/embedded/html,js,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

::: tip
2.1.4 新增
:::

```html
<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

::: tip
2.3.0 新增
:::

Vue 还对应 `addEventListener` 中的 passive 选项提供了 `.passive` 修饰符。

```html
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

这个 `.passive` 修饰符尤其能够提升移动端的性能。

::: danger
不要把 `.passive` 和 `.prevent` 一起使用，因为 `.prevent` 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，`.passive` 会告诉浏览器你不想阻止事件的默认行为。
:::

## [按键修饰符](https://cn.vuejs.org/v2/guide/events.html#按键修饰符)

---

在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符：

```html
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input v-on:keyup.enter="submit">
```

你可以直接将 `KeyboardEvent.key` 暴露的任意有效按键名转换为 kebab-case 来作为修饰符。

```html
<input v-on:keyup.page-down="onPageDown">
```

在上述示例中，处理函数只会在 `$event.key` 等于 PageDown 时被调用。

Vue 提供了绝大多数常用的按键码的别名：

* `.enter`
* `.tab`
* `.delete` (捕获“删除”和“退格”键)
* `.esc`
* `.space`
* `.up`
* `.down`
* `.left`
* `.right`
