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

### vue-element-admin

main.js

```js
import Element from 'element-ui'

import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

Vue.config.productionTip = false

Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

[styles/element-variables.scss](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/styles/element-variables.scss)

```css
@import "~element-ui/packages/theme-chalk/src/index";
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

## [NavMenu 导航菜单](https://element.eleme.io/#/zh-CN/component/menu)

Menu Attribute 
mode > horizontal / vertical

```js
<el-menu
  :default-active="activeMenu"
  :collapse="isCollapse"
  :background-color="variables.menuBg"
  :text-color="variables.menuText"
  :unique-opened="false"
  :active-text-color="variables.menuActiveText"
  :collapse-transition="false"
  mode="vertical"
>
  <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
</el-menu>
```

> `<el-menu-item index="1">处理中心</el-menu-item>` not working check  `import './styles/element-variables.scss'`


## element-ui中表单验证

vue-typescript-admin-template [/views/login/index.vue](https://github.com/Armour/vue-typescript-admin-template/blob/master/src/views/login/index.vue)

```html
 <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
 
 private loginRules = {
    username: [{ validator: this.validateUsername, trigger: 'blur' }],
    password: [{ validator: this.validatePassword, trigger: 'blur' }]
  }

  private validatePassword = (rule: any, value: string, callback: Function) => {
    if (value.length < 6) {
      callback(new Error('The password can not be less than 6 digits'))
    } else {
      callback()
    }
  }
```

## element-ui中表单

[表单](https://element.eleme.io/#/zh-CN/component/form) [el-tooltip](https://element.eleme.io/#/zh-CN/component/tooltip)

```html
  <el-form-item prop="deposit">
      <label slot="label">
        {{$t('member.deposit')}}
      <el-tooltip placement="right">
        <div slot="content">tooltip</div>
        <i class="el-icon-info" />
      </el-tooltip>
    </label>
    <el-switch
      :disabled="item.memberLevel === 0"
      v-model="item.deposit"
      :active-text="$t('switchOn')"
      :inactive-text="$t('switchOff')">
    </el-switch>
  </el-form-item>
```

## el-input

[[Bug Report] v-model.number cannot enter decimal points](https://github.com/ElemeFE/element/issues/14330)

v-model.number 無法輸入小數

```html
<el-form-item :label="$t('em.cannot_decimal')" prop="cannot_decimal">
  <el-input
    ref="cannot_decimal"
    name="cannot_decimal"
    v-model.number="item.cannot_decimal"
    :placeholder="$t('cannot_decimal')"
  />
</el-form-item>
<el-form-item :label="$t('decimal')" prop="decimal">
  <el-input
    ref="decimal"
    name="decimal"
    type="number"
    v-model="item.decimal"
    :placeholder="$t('decimal')"
  />
</el-form-item>
```