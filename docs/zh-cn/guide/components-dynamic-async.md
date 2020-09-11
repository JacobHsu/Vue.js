# 动态组件 & 异步组件

## 在动态组件上使用 `keep-alive`

我们之前曾经在一个多标签的界面中使用 is attribute 来切换不同的组件：  
`<component v-bind:is="currentTabComponent"></component>`

当在这些组件之间切换的时候，你有时会想保持这些组件的状态，以避免反复重渲染导致的性能问题。  


为了解决这个问题，我们可以用一个 `<keep-alive>` 元素将其动态组件包裹起来。

```html
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

<iframe
     src="https://codesandbox.io/embed/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-keep-alive-with-dynamic-components?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-20-keep-alive-with-dynamic-components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

::: warning 注意
注意这个 `<keep-alive>` 要求被切换到的组件都有自己的名字，不论是通过组件的 name 选项还是局部/全局注册。
:::
