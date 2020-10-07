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

## Steps 步骤条 [steps](https://element.eleme.io/#/zh-CN/component/steps)

[element-ui修改el-steps默认样式](https://blog.csdn.net/sinat_42888557/article/details/100119754)

```js
<style lang="scss" scoped>
.el-step__icon /deep/.el-step__icon-inner{
    color: #fff;
}
</style>
```
