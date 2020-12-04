# vue

[Vue](https://cn.vuejs.org/v2/guide/) (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，易于上手。Vue 也完全能够为复杂的单页应用提供驱动。

## 声明式渲染

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：

```html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

> Hello Vue!

```js
export default {
  data() {
    return {
      message:""
    }
  },
```

```js
export default {
  data: () => ({
      message:"",
  }),
```

## Vue CLI

[Vue CLI](https://cli.vuejs.org/zh/guide/) 是一个基于 Vue.js 进行快速开发的完整系统，提供：
* 通过 @vue/cli 搭建交互式的项目脚手架。

创建一个项目 vue create

```sh
vue create hello-world
```

```sh
vue init webpack hello-world
```

TypeScript 版本請看 [TypeScript支持](https://jacobhsu.github.io/VuePress/zh-cn/guide/typescript.html#工程创建)

<iframe
    src="https://codesandbox.io/embed/still-darkness-l7id6?fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="vue-cli"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

::: tip 提示
Vue CLI 需要 `Node.js 8.9` 或更高版本 (推荐 8.11.0+)。你可以使用 [nvm](https://github.com/nvm-sh/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
:::

可以使用下列任一命令安装这个新的包：

```js
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

安装之后，你就可以在命令行中访问 vue 命令。你可以通过简单运行 vue，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。

你还可以用这个命令来检查其版本是否正确：

```js
vue --version
# OR
vue -V
```

## Vue 3

[Vue-3-Firebase](https://github.com/iamshaunjp/Vue-3-Firebase)

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Learning Vue</title>
  <script src="https://unpkg.com/vue@3.0.0"></script>
</head>
<body>
  <h1>Hello, Vue :)</h1>

  <div id="app">
    <p>{{ title }} - by {{ author }}, {{ age }} years old</p>
  </div>

  <!-- does not work -->
  {{ title }}

  <script src="app.js"></script>
</body>
</html>
```

app.js

```js
const app = Vue.createApp({
  // data, functions etc
  // template: '<h2>I am the template</h2>',
  data() {
    return {
      title: 'The Way of Kings',
      author: 'Brandon Sanderson',
      age: 45
    }
  }
})

app.mount('#app')
```

## env

vue.config.js

```js
  devServer: {
    port: devServerPort,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    progress: false,
    proxy: {
      // change xxx-api/login => /mock-api/v1/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:${mockServerPort}/mock-api/v1`,
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
```

.env.development

```js
# Base api
VUE_APP_BASE_API = '/dev-api'
```

.env.production

```js
# Remeber to change this to your production server address
# Here I used my mock server for this project
VUE_APP_BASE_API = 'https://vue-typescript-admin-mock-server.armour.now.sh/mock-api/v1/'
```