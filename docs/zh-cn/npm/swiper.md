# Swiper

[swiperjs](https://swiperjs.com/)

most modern free mobile touch slider

[![NPM](https://nodei.co/npm/swiper.png?downloads=true&stars=true)](https://nodei.co/npm/swiper/)

main.js

```js
import 'swiper/dist/css/swiper.css';
```

index.vue

```js
import Swiper from 'swiper';

created() {
    this.init();
},

init() {
  var _this = this;
  setTimeout(function(){
              _this.initSwiper();
  },1000);
},

initSwiper(){
    var ss = new Swiper ('.swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // slidesPerView :4,
    spaceBetween : 25
    });
    var comtainer = document.getElementById('swiper_container');
    comtainer.onmouseenter = function () {
        ss.autoplay.stop();
    };
    comtainer.onmouseleave = function () {
        ss.autoplay.start();
    }
},
```

## CodePen

[swiper.js fullscreen slideshow](https://codepen.io/artem/pen/jWYgOL)