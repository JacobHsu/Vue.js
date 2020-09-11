# 列表渲染

## 用 `v-for` 把一个数组对应为一组元素

我们可以用 `v-for` 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的**别名**。

```js
<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
```

```js
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

## 维护状态

当 Vue 正在更新使用 `v-for` 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。这个类似 Vue 1.x 的 `track-by="$index"`。

这个默认的模式是高效的，但是**只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。**

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` attribute：

```js
<div v-for="item in items" v-bind:key="item.id">
  <!-- 内容 -->
</div>
```

::: danger
注意，**[vFor key避免使用index作为标识](https://juejin.im/post/5f0f1a045188252e415f642c?utm_source=gold_browser_extension)**  
当index作为标识的时候，插入一条数据的时候，列表中它后面的key都发生了变化，那么当前的 vFor 都会对key变化的 `Element` 重新渲染，但是其实它们除了插入的 `Element` 数据都没有发生改变，这就导致了没有必要的开销。所以，尽量不要用index作为标识，而去采用数据中的唯一值，如 `id` 等字段。
:::
