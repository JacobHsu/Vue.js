# UI

[![NPM](https://nodei.co/npm/sass-loader.png?downloads=true&stars=true)](https://nodei.co/npm/sass-loader/)

[![NPM](https://nodei.co/npm/semantic-ui.png?downloads=true&stars=true)](https://nodei.co/npm/semantic-ui/)

[![NPM](https://nodei.co/npm/vant.png?downloads=true&stars=true)](https://nodei.co/npm/vant/)

[![NPM](https://nodei.co/npm/postcss-pxtorem.png?downloads=true&stars=true)](https://nodei.co/npm/postcss-pxtorem/)

[Vant](https://youzan.github.io/vant/#/zh-CN/) 轻量、可靠的移动端 Vue 组件库

## iView

[iView](http://iview.talkingdata.com/) 一套基于 Vue.js 的高质量 UI 组件库

[![NPM](https://nodei.co/npm/iview.png?downloads=true&stars=true)](https://nodei.co/npm/iview/)

main.js

```js
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

iView.LoadingBar.config({
    color: '#F90',
    failedColor: '#f0ad4e',
    height: 2
});

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
    iView.LoadingBar.finish();
});
```

## [Font Awesome 6](https://fontawesome.com/)

\public\index.html

[cdnjs](https://cdnjs.com/libraries/font-awesome)

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
```

[Basic Use](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use)

```html
<i
  v-if="tab.loading"
  class="fas fa-spinner fa-pulse fa-2x"
></i>
```

[user-circle](https://fontawesome.com/icons/user-circle?style=solid)

```html
<i class="fas fa-user-circle fa-2x"></i>
```

## codepen

[Font Awesome icon as background image](https://codepen.io/astrotim/details/IjJzL)
