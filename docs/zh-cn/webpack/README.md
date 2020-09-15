# Vue Webpack

build\webpack.base.conf.js

```js
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@js':resolve('src/assets/js'),
    }
  },
```

```js
import $ from "@js/jquery.min.js";
require(["@js/charting_library/charting_library.min.js"], function(tv) {
```
