# element-ui

[element](https://element.eleme.io/?ref=madewithvuejs.com#/zh-CN/component/quickstart)

[![NPM](https://nodei.co/npm/element-ui.png?downloads=true&stars=true)](https://nodei.co/npm/element-ui/)

```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

[Dropdown 下拉菜单](https://element.eleme.cn/#/zh-CN/component/dropdown)

指令事件 `@command="handleCommand"`