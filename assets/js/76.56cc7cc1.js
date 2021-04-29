(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{423:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"html5-history-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html5-history-模式"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML5 History 模式"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("vue-router")]),t._v(" 默认 "),e("strong",[t._v("hash 模式")]),t._v(" —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。")]),t._v(" "),e("p",[t._v("如果不想要很丑的 hash，我们可以用路由的 "),e("strong",[t._v("history 模式")]),t._v("，这种模式充分利用 "),e("code",[t._v("history.pushState")]),t._v(" API 来完成 URL 跳转而无须重新加载页面。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  routes"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("当你使用 history 模式时，URL 就像正常的 url，例如 "),e("code",[t._v("http://yoursite.com/user/id")])]),t._v(" "),e("p",[e("code",[t._v("history")]),t._v(" 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 "),e("code",[t._v("http://yoursite.com/user/id")]),t._v("。如果后端缺少对 "),e("code",[t._v("/user/id")]),t._v(" 的路由处理，将返回 "),e("code",[t._v("404")]),t._v(" 错误。")]),t._v(" "),e("p",[t._v("不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 "),e("code",[t._v("http://oursite.com/user/id")]),t._v(" 就会返回 "),e("code",[t._v("404")]),t._v("，这就不好看了。")]),t._v(" "),e("p",[t._v("所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 "),e("code",[t._v("index.html")]),t._v(" 页面，这个页面就是你 app 依赖的页面。")]),t._v(" "),e("h2",{attrs:{id:"vue-router的-hash-和-history-两种模式的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router的-hash-和-history-两种模式的区别"}},[t._v("#")]),t._v(" vue-router的 "),e("code",[t._v("hash")]),t._v(" 和 "),e("code",[t._v("history")]),t._v(" 两种模式的区别")]),t._v(" "),e("h3",{attrs:{id:"为什么要有-hash-和-history"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有-hash-和-history"}},[t._v("#")]),t._v(" 为什么要有 hash 和 history")]),t._v(" "),e("p",[t._v("对于 Vue 这类渐进式前端开发框架，为了构建 "),e("strong",[t._v("SPA（单页面应用）")]),t._v("，需要引入前端路由系统，这也就是 Vue-Router 存在的意义。前端路由的核心，就在于 —— "),e("strong",[t._v("改变视图的同时不会向后端发出请求")]),t._v("。")]),t._v(" "),e("p",[t._v("为了达到这一目的，浏览器当前提供了以下两种支持：")]),t._v(" "),e("p",[e("code",[t._v("hash")]),t._v(" —— 即地址栏 URL 中的 "),e("code",[t._v("#")]),t._v(" 符号。比如这个 URL：http://www.abc.com/#/hello，hash 的值为 #/hello。它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。")]),t._v(" "),e("p",[e("code",[t._v("history")]),t._v(" —— 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。 （需要特定浏览器支持）这两个方法应用于浏览器的历史记录栈，在当前已有的"),e("code",[t._v("back")]),t._v("、"),e("code",[t._v("forward")]),t._v("、"),e("code",[t._v("go")]),t._v(" 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。")]),t._v(" "),e("p",[t._v("因此可以说，hash 模式和 history 模式都属于浏览器自身的特性，Vue-Router 只是利用了这两个特性（通过调用浏览器提供的接口）来实现前端路由。")]),t._v(" "),e("p",[t._v("结合自身例子，对于一般的"),e("code",[t._v("Vue + Vue-Router + Webpack + XXX")]),t._v(" 形式的Web 开发场景，用"),e("code",[t._v("history")]),t._v(" 模式即可，只需在后端（"),e("code",[t._v("Apache 或Nginx")]),t._v("）进行简单的路由配置，同时搭配前端路由的404 页面支持。")]),t._v(" "),e("h1",{attrs:{id:"stackoverflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stackoverflow"}},[t._v("#")]),t._v(" stackoverflow")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://stackoverflow.com/questions/47824660/optional-param-in-vuejs-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("Optional param in vuejs router"),e("OutboundLink")],1),e("br"),t._v("\nJust adding a question mark "),e("code",[t._v("?")]),t._v(" will make it optional.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/offers/:member?'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);