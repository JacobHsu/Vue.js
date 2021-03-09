# json-server

[![NPM](https://nodei.co/npm/json-server.png?downloads=true&stars=true)](https://nodei.co/npm/json-server/)

`$ npm i -g json-server`

```js
$ json-server --watch db.json
```

> Resources  
  http://localhost:3000/posts  
  http://localhost:3000/comments  
  http://localhost:3000/profile  

>  Home
  http://localhost:3000

[Paginate](https://github.com/typicode/json-server#paginate)

```js
GET /posts?_page=7
GET /posts?_page=7&_limit=20
```

data/db.json

```json
{
  "jobs": [
      {"title":"ninja ux designer", "id":1, "details":"testing"}
    ]
}
```
