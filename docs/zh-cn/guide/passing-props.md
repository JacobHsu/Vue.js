# [路由组件传参](https://router.vuejs.org/zh/guide/essentials/passing-props.html)

在组件中使用 `$route` 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

使用 `props` 将组件和路由解耦：

**取代与 `$route` 的耦合**

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})
```

**通过 `props` 解耦** 

```js
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },

    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
  ]
})
```

这样你便可以在任何地方使用该组件，使得该组件更易于重用和测试。

## 布尔模式 `props: true`

如果 `props` 被设置为 `true`，`route.params` 将会被设置为组件属性

router/index.js

```js
name: 'User'
component: User,
redirect: { name: 'UserMain' },
children: [
{
    path: 'user/:userID?/:userType?',
    name: 'UserMain',
    component: UserMain,
    props: true // 可用 `this.$route.params.userID` 
},
```

## vue的[router-view如何传递props](https://segmentfault.com/q/1010000005362842)  

多級路由，所以問題就在這了，從最外層的`<router-view>`設置props，
想在下面的某一級sub-router接收，那麻煩點，你得在中間路過的每一級都把props透傳下去，直至你最裡層的那個組件。

一個三級的[jsfiddle範例](http://jsfiddle.net/leftstick/L50pdx95/)，最外層放:room，中間透傳，三層組件Bar接收。  

App 一開始設定 data `room`  

`<router-view :room="room"></router-view>`  

app.vue

```js
<a v-link="{ path: '/foo/bar' }">Go to /foo/bar</a>
```

router.js

```js
subRoutes: {
    '/bar': {
         component: Bar
     },
```

app.vue  

```js
var Bar = Vue.extend({
    props: {
        room: {
            type: Array,
            default: function(){
                return [];
            }
        }
    },
    template: '<p v-for="v of room" track-by="$index">This is bar!{{ v }} </p>'
})
```
