# cors

[![NPM](https://nodei.co/npm/cors.png?downloads=true&stars=true)](https://nodei.co/npm/cors/)

根据 CORS 的标准，当浏览器发送跨域请求时，如果请求不是GET或者特定POST（Content-Type只能是 application/x-www-form-urlencoded, multipart/form-data 或 text/plain的一种）时，强烈要求浏览器必须先以 OPTIONS 请求方式发送一个预请求(preflight request)，从而获知服务器端对跨源请求所支持 HTTP 方法。

所以，使用 axios 直接发送 POST 的跨域请求，如果web后端对 `OPTIONS` 的响应有问题，就会报错。

::: danger
Access to XMLHttpRequest at 'http://localhost:3000/products' from origin 'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
GET http://localhost:3000/products net::ERR_FAILED
:::

main.js

```js
import Api from './config/api';
Vue.prototype.api = Api;

Vue.http.options.emulateJSON = true
Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  'Content-Type': 'application/json;charset=utf-8'
}
```

Enabling CORS Pre-Flight

`app.options`

node

```js
var express = require('express')
var cors = require('cors')
var app = express()

app.options('/products/:id', cors()) // enable pre-flight request for DELETE request
app.del('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(8000, function () {
  console.log('CORS-enabled web server listening on port 8000')
})
```


瀏覽器會自動拒絕沒有 Access-Control-Allow-Credentials 的回應，也因此如果要能夠將身份訊息傳到跨網域的伺服器當中，必須額外加上 `Access-Control-Allow-Credentials: true`。

[和 CORS 跟 cookie 打交道](https://medium.com/d-d-mag/%E5%92%8C-cors-%E8%B7%9F-cookie-%E6%89%93%E4%BA%A4%E9%81%93-dd420ccc7399)


main.js

```js
...
Vue.http.options.credentials = true //<---
Vue.http.options.emulateJSON = true
Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  'Content-Type': 'application/json;charset=utf-8'
}
```

node index.js

```js
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors({credentials: true, origin: true})) //<---

app.options('/products') // enable pre-flight request for DELETE request
app.get('/products', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})
```

## examples

[vue-webpack-api](https://github.com/JacobHsu/vue-webpack-api)