# iView

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

## iview v3.x 官方文档手册

[BackTop 返回顶部](https://www.bookstack.cn/read/iviewui/b43de131c2572433.md)
