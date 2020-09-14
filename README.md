# vue.js

## VuePress

docs\vue.js> `yarn s`  
success Generated static files in `docs\.vuepress\dist.`  

docs\vue.js> `yarn g`  
docs\vue.js> `yarn d`

[VuePress](https://vuepress.vuejs.org/)

[basic-config](https://vuepress.vuejs.org/zh/guide/basic-config.html)

```js
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

```js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/vue.js/',
}
```
