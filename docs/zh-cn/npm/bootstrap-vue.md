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

## [layout](https://bootstrap-vue.org/docs/components/layout)

Use `<b-container>` for a responsive pixel width or
`<b-container fluid>` for `width: 100%` across all viewport and device sizes.


[Variable width content](https://bootstrap-vue.org/docs/components/layout)

[getbootstrap flex](https://getbootstrap.com/docs/4.4/utilities/flex/)

```js
<b-container class="bv-example-row">
  <b-row class="justify-content-md-center">
    <b-col col lg="2">1 of 3</b-col>
    <b-col cols="12" md="auto">Variable width content</b-col>
    <b-col col lg="2">3 of 3</b-col>
  </b-row>
</b-container>
```

## [color-variants-and-css-class-mapping](https://bootstrap-vue.org/docs/reference/color-variants#color-variants-and-css-class-mapping)

src/assets/bootstrap-custom.css

```css
.btn-info2 {
  color: #fff;
  background-color: #0f929d;
  border-color: #0f929d;
}
```

main.js

```js
import '@/assets/bootstrap-custom.css'
```

.vue

```js
  <b-btn class="w-100 border-0" variant="info2"
          type="submit"
          @click.prevent="nextStep">
    <span v-text="$t('g_next')"></span>
  </b-btn>
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
