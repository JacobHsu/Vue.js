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

## Case

[前端處理後端接口傳遞過來的圖片文件](https://codertw.com/程式語言/750541/)

如果後端返了一個圖片文件過來，而非圖片地址，那要怎麼做？

axios 添加option: `responseType: 'arraybuffer'

request-img.ts

```js
import axios from 'axios'
const service = axios.create({
  baseURL: 'https://ex-uat-api.com', 
  timeout: 5000
})
// Request interceptors
service.interceptors.request.use(
  (config) => {
    if (UserModule.token) {
      config.headers['X-Access-Token'] = UserModule.token
      config.headers.Authorization = `bearer ${UserModule.token}`
    } 

    config.headers['Accept-Language'] = 'zh-tw'
    config.responseType = 'arraybuffer' // <- add
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
// Response interceptors
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
```

獲取到了我們需要的二進制數組(arrayBuffer)  
下一步，我們要把圖片顯示處理，使用base64編碼即可  

```js
  const imgBinary = await getMemberIdImg(filename, {})
  this.imgUrl  = 'data:image/png;base64,' + btoa(new Uint8Array(imgBinary).reduce((data, byte) => data + String.fromCharCode(byte), ''))
```

```html
  <img :src="imgUrl" />
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
    let headers = {
        Authorization: "Bearer "
    };

    this.$http.post(
      process.env.API_HOST +'/Auth/Login',
      loginPayload,
      {headers}).then(response => {
        return response.body.data
    }).then(res => {
        // Promise {<pending>}
        // __proto__: Promise
        // [[PromiseState]]: "fulfilled"
        // [[PromiseResult]]: Object
        console.log(res)
    });
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

## axios post

POST 將 Request Payload 改成 Form data
`username=admin&password=abc1234&type=password`

utils\request.ts

```js
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000
  // withCredentials: true // send cookies when cross-domain requests
})


const convertSimpleObjToQueryString = (obj: string[]) => {
  return Object.keys(obj)
    .filter((k: any) => !isNil(obj[k]))
    .map((k: any) => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
    .join('&')
}

// Request interceptors
service.interceptors.request.use(
  (config) => {
    config.data = convertSimpleObjToQueryString(config.data)
    // Add X-Access-Token header to every request, you can add other custom headers here
    if (UserModule.token) {
      config.headers['X-Access-Token'] = UserModule.token
    }
    config.headers['Accept-Language'] = 'zh-tw'
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
```

## get ip

```js
export const getIP = () => {
  return axios('https://api.ipify.org?format=json')
}
```

```js
import { getIP } from '@/utils/request'
  mounted() {
    getIP().then(
      res => {
        this.ipAddress = res.data.ip
      }
    )
  private handleLogin() {
    this.loginForm = {
      ipAddress: this.ipAddress || '127.0.0.1'
    }
```

## swagger

[前后端联调之Form Data与Request Payload](https://segmentfault.com/a/1190000018774494)

> swagger

Parameter Type  body  
Parameter Type  formData

> Request Payload

```js
export const postAuthRegister = (address) => {
    return fetch(
        `${apiUat}/auth/register`,{
        method: 'POST',
        body: JSON.stringify({
          authorizedAddress:address
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept-Language': 'zh-tw'
        })
      }
    )
    .then((response) => response.json())
    .then((data) => {
  
    return data
    });
  };
```

> Form Data

```js
  function convertSimpleObjToQueryString(obj) {
    return Object.keys(obj)
      //.filter(k => !isNil(obj[k]))
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
      .join('&')
  }
  
  export const postAuthLogin = (params) => {
    return fetch(
        `${apiUat}/auth/login`,{
        method: 'POST',
        body: convertSimpleObjToQueryString( {signature: params, grant_type:'password'}),
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept-Language': 'zh-tw'
        })
      }
    )
    .then((response) => response.json())
    .then((data) => {
  
    return data
    });
  };
```