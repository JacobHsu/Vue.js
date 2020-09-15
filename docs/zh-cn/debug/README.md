# Debug

> assign to read only property’exports‘ of object`#<Object>`

[assign to read only property’exports‘ of object`#<Object>`的解決方法](https://www.itread01.com/content/1565151603.html)

程式碼沒毛病，在webpack打包的時候，可以在js檔案中混用require和export。但是不能混用import 以及module.exports 。

因為webpack 2中不允許混用import和module.exports

解決辦法就是統一改成ES6的方式編寫即可.

lang/en.js

```js
module.exports = {
  common: {
    login: 'Log In',
```

OK

```js
export default {
  common: {
    login: 'Log In',
```

> Access to XMLHttpRequest at 'http://localhost:8000/market/symbol-thumb' from origin 'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.