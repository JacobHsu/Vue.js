# signalr

[![NPM](https://nodei.co/npm/signalr.png?downloads=true&stars=true)](https://nodei.co/npm/signalr/)

`$ npm i signalr`

main.js

```js
import 'signalr'
```

::: danger
Uncaught Error: jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.
:::


build\webpack.base.conf.js

```js
const webpack = require('webpack')

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          'root.jQuery': 'jquery'
        }),
      ],
     module: {
        rules: [
```