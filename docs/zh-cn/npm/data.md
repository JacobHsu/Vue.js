# data

[faker.js](https://github.com/marak/Faker.js/)
> generate massive amounts of realistic fake data in Node.js and the browser

[![NPM](https://nodei.co/npm/faker.png?downloads=true&stars=true)](https://nodei.co/npm/faker/)

node

```js
var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
```

react

```js
import faker from 'faker'
<a href="/" className="avatar">
    <img alt="avatar" src={faker.image.avatar()}>
</a>
```
