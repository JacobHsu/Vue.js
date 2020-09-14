# request

## humps

[![NPM](https://nodei.co/npm/humps.png?downloads=true&stars=true)](https://nodei.co/npm/humps/)

Converting object keys

```js
var object = { attr_one: 'foo', attr_two: 'bar' }
humps.camelizeKeys(object); // { attrOne: 'foo', attrTwo: 'bar' }
```

```js
import { camelizeKeys } from 'humps'

.then((response) => {
        const { data, message, status } = camelizeKeys(response.data)
```
