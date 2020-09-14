# moment

[Moment.js](https://momentjs.com/docs/)

[![NPM](https://nodei.co/npm/moment.png?downloads=true&stars=true)](https://nodei.co/npm/moment/)

[string-format](https://momentjs.com/docs/#/parsing/string-format/)

```js
import moment from 'moment'

export function toLocal24Time(data, format = 'YYYY/MM/DD HH:mm:ss') {
  if (!data) return ''
  return moment(data).format(format)
}
export function toLocalDate(data, format = 'YYYY-MM-DD') {
  if (!data) return ''
  return moment(data).format(format)
}
```
