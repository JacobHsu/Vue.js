# [HTML5 History 模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html)

`vue-router` 默认 **hash 模式** —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。

如果不想要很丑的 hash，我们可以用路由的 **history 模式**，这种模式充分利用 `history.pushState` API 来完成 URL 跳转而无须重新加载页面。

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

当你使用 history 模式时，URL 就像正常的 url，例如 `http://yoursite.com/user/id`

`history` 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 `http://yoursite.com/user/id`。如果后端缺少对 `/user/id` 的路由处理，将返回 `404` 错误。

不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 `http://oursite.com/user/id` 就会返回 `404`，这就不好看了。

所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 `index.html` 页面，这个页面就是你 app 依赖的页面。

## vue-router的 `hash` 和 `history` 两种模式的区别  

### 为什么要有 hash 和 history

对于 Vue 这类渐进式前端开发框架，为了构建 **SPA（单页面应用）**，需要引入前端路由系统，这也就是 Vue-Router 存在的意义。前端路由的核心，就在于 —— **改变视图的同时不会向后端发出请求**。

为了达到这一目的，浏览器当前提供了以下两种支持：

`hash` —— 即地址栏 URL 中的 `#` 符号。比如这个 URL：http://www.abc.com/#/hello，hash 的值为 #/hello。它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。  

`history` —— 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。 （需要特定浏览器支持）这两个方法应用于浏览器的历史记录栈，在当前已有的`back`、`forward`、`go` 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。

因此可以说，hash 模式和 history 模式都属于浏览器自身的特性，Vue-Router 只是利用了这两个特性（通过调用浏览器提供的接口）来实现前端路由。

结合自身例子，对于一般的`Vue + Vue-Router + Webpack + XXX` 形式的Web 开发场景，用`history` 模式即可，只需在后端（`Apache 或Nginx`）进行简单的路由配置，同时搭配前端路由的404 页面支持。

# stackoverflow

[Optional param in vuejs router](https://stackoverflow.com/questions/47824660/optional-param-in-vuejs-router)  
Just adding a question mark `?` will make it optional.  

```js
{
    path: '/offers/:member?',
    ...
},
```
