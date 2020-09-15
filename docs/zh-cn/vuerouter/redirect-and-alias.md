# 重定向和别名

## 重定向

重定向也是通过 routes 配置来完成，下面例子是从 `/a` 重定向到 `/b`：

```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```

```js
export const constantRoutes = [
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    redirect: 'HelloWorld'
  }
]
export default new Router({
  routes: constantRoutes
})
```
