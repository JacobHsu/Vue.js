# 优先级 A：必要的

> (规避错误)

## 组件名为多个单词 <Badge text="ESSENTIAL" type="error"/> 

这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是`单个单词`的。

```js
// Bad
Vue.component('todo', {
  // ...
})

export default {
  name: 'Todo',
  // ...
}
```

```js
// Good
Vue.component('todo-item', {
  // ...
})

export default {
  name: 'TodoItem',
  // ...
}
```

## 组件数据 <Badge text="ESSENTIAL" type="error"/> 

组件的 `data` 必须是一个函数。

当在组件中使用 `data` property 的时候 (除了 `new Vue` 外的任何地方)，它的值必须是返回一个对象的函数。


```js
// Bad
Vue.component('some-comp', {
  data: {
    foo: 'bar'
  }
})

export default {
  data: {
    foo: 'bar'
  }
}
```

```js
// Good
Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    }
  }
})

// In a .vue file
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```

## Prop 定义 <Badge text="ESSENTIAL" type="error"/> 

Prop 定义应该尽量详细。

在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

```js
// Bad
// 这样做只有开发原型系统时可以接受
props: ['status']
```

```js
// Good
props: {
  status: String
}
```

```js
// Even better!
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```