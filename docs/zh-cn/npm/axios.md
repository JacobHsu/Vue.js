# axios

[![NPM](https://nodei.co/npm/axios.png?downloads=true&stars=true)](https://nodei.co/npm/axios/)

## axios API

```js
import axios from 'axios';
// Send a POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone',
  },
});
```

```js
import axios from 'axios';


const HEADER = {
  'Content-Type': isLogin
    ? 'application/x-www-form-urlencoded; charset=UTF-8'
    : 'application/json; charset=UTF-8',
  ...headers,
};
axios({
  method: isLogin ? 'POST' : 'GET',
  headers: HEADER,
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone',
  },
});
```

## vue-resource

[![NPM](https://nodei.co/npm/vue-resource.png?downloads=true&stars=true)](https://nodei.co/npm/vue-resource/)

main.js

```js
import vueResource from 'vue-resource';

Vue.use(vueResource);

Vue.prototype.host = "https://api.xxxx.com"

Vue.http.options.credentials = true;
Vue.http.options.emulateJSON = true;
Vue.http.options.headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Content-Type': 'application/json;charset=utf-8'
};
```

```js
Vue.http.interceptors.push((request, next) => {
    //登录成功后将后台返回的TOKEN在本地存下来,每次请求从sessionStorage中拿到存储的TOKEN值
    request.headers.set('x-auth-token', localStorage.getItem('TOKEN'));
    next((response) => {
        //登录极验证时需获取后台返回的TOKEN值
        var xAuthToken = response.headers.get('x-auth-token');
        if (xAuthToken != null && xAuthToken != '') {
            localStorage.setItem('TOKEN', xAuthToken);
        }

        if (response.body.code == '4000' || response.body.code == '3000') {
            store.commit('setMember', null);
            router.push('/login');
            return false;
        }
        return response;
    });
});
```