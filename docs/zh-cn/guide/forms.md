# [表单输入绑定](https://cn.vuejs.org/v2/guide/forms.html)

## 基础用法

---

你可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

::: danger
`v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 `data` 选项中声明初始值
:::

`v-model` 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

text 和 textarea 元素使用 `value` 属性和 `input` 事件；
checkbox 和 radio 使用 `checked` 属性和 `change` 事件；
select 字段将 `value` 作为 prop 并将 `change` 作为事件。

## 文本

```html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

# 修饰符

---

## .lazy

在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 `lazy` 修饰符，从而转变为使用 `change` 事件进行同步：

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >
```

## .number

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```html
<input v-model.number="age" type="number">
```

这通常很有用，因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。

## .trim

如果要自动过滤用户输入的**首尾空白字符**，可以给 `v-model` 添加 `trim` 修饰符：

```
<input v-model.trim="msg">
```


<iframe width="100%" height="300" src="//jsfiddle.net/JacobHsu/0v872p3z/7/embedded/html,js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>