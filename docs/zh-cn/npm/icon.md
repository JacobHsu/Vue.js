# icon

[![NPM](https://nodei.co/npm/vg-sprite-loader.png?downloads=true&stars=true)](https://nodei.co/npm/vg-sprite-loader/)

[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) login form icon

vue-element-admin/src/[icons](https://github.com/PanJiaChen/vue-element-admin/tree/master/src/icons)

src\icons\index.js

```js
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)

const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
```

vue-element-admin/[vue.config.js](https://github.com/PanJiaChen/vue-element-admin/blob/master/vue.config.js)

```js
module.exports = {
    chainWebpack(config) {
        // set svg-sprite-loader
        config.module
        .rule('svg')
        .exclude.add(resolve('src/icons'))
        .end()
        config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        })
        .end()
```

[使用 svg-sprite-loader、svgo-loader 優化專案中的 Icon](https://www.mdeditor.tw/pl/pKgt/zh-tw)
[icon-svg 标签的问题](https://github.com/PanJiaChen/vue-element-admin/issues/225) `yarn add --dev svg-sprite-loader`
