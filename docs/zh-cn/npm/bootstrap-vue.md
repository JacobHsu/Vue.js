# [bootstrap-vue](https://bootstrap-vue.js.org/)

[Getting Started](https://bootstrap-vue.js.org/docs/)

```js
# With npm
npm install vue bootstrap-vue bootstrap

# With yarn
yarn add vue bootstrap-vue bootstrap
```

main.js

```js
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
```

## [Bootstrap Icons](https://bootstrap-vue.org/docs/icons)

main.js

```js
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
```

## bootstrap.css

getbootstrap [Download](https://getbootstrap.com/docs/4.5/getting-started/download/#yarn)

Compiled CSS and JS > Bootstrap v4.5.0  > Download  
bootstrap-4.5.0-dist / css / bootstrap.css  

bootstrap.css -> src\assets\bootstrap.css

main.js

```js
import '@/assets/bootstrap.css'
```

bootstrap.css

```css
.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}
```

src\views\components\TabBar.vue

```js
<template>
  <div>
    <b-container fluid class="tabBar fixed-bottom" v-if="isEntry">
    hello tab
    </b-container>
  </div>
</template>
```
