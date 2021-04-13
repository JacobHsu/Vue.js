# [计算属性和侦听器](https://cn.vuejs.org/v2/guide/computed.html)

## 计算属性

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：

```js
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 `message` 的翻转字符串。当你想要在模板中多包含此处的翻转字符串时，就会更加难以处理。

所以，对于任何复杂逻辑，你都应当使用**计算属性**。

## 基础例子

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello' // Original message: "Hello"
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
      // Computed reversed message: "olleH"
    }
  }
})
```

vue3 computed

```js
<template>
  <div>
    <input type="text" v-model="search">
    <div v-for="name in matchingNames" :key="name">{{ name}}</div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
  setup() {
    const search = ref('')
    const names = ref(['Jacob','Jason','Eric','Kelly'])
    const matchingNames = computed(()=>{
      return names.value.filter((name)=>name.includess(search.value))
    })
    return { names, matchingNames, search}
  }
} 
</script>
```

## 计算属性 vs 侦听属性

相同：`computed`和`watch`都起到監聽/依賴一個數據，並進行處理的作用

異同：它們其實都是vue對監聽器的實現，只不過
`computed`主要用於對同步數據的處理，
`watch`則主要用於觀測某個值的變化去完成一段開銷較大的複雜業務邏輯。

能用computed的時候**優先用computed**，避免了多個數據影響其中某個數據時多次調用watch的尷尬情況。


Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：**侦听属性**。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 `watch`。然而，通常更好的做法是使用计算属性而不是命令式的 `watch` 回调。细想一下这个例子：

```html
<div id="demo">{{ fullName }}</div>
```

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

上面代码是命令式且重复的。将它与计算属性的版本进行比较：

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```

watch ex: https://jsbin.com/zesijokaju/edit?html,output

## watch 深度监听  字符串形式监听

[Vue.js中 watch 的高级用法](https://juejin.im/post/6844903600737484808)

如果我们需要监听obj里的属性a的值呢？ 这时候deep属性就派上用场了！

watch 里面还有一个属性 deep，默认值是 `false`，代表是否深度监听

```js
watch: {
  obj: {
    handler(newName, oldName) {
      console.log('obj.a changed');
    },
    immediate: true,
    deep: true
  }
} 
```

deep的意思就是深入观察，监听器会一层层的往下遍历，给对象的所有属性都加上这个监听器，但是这样性能开销就会非常大了，任何修改obj里面任何一个属性都会触发这个监听器里的 handler。

优化，我们可以是使用**字符串形式监听**。

```js
watch: {
  'obj.a': {
    handler(newName, oldName) {
      console.log('obj.a changed');
    },
    immediate: true,
    // deep: true
  }
} 
```

这样Vue.js才会一层一层解析下去，直到遇到属性a，然后才给a设置监听函数。

## 计算属性的 setter

计算属性`默认只有 getter`，不过在需要时你也可以提供一个 setter：

```js
// ...
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
```

现在再运行 `vm.fullName = 'John Doe'` 时，`setter` 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新。