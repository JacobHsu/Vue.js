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

## [相对时间](http://momentjs.cn/)

```js
import moment from 'moment'

export const fromNowTime = (
    data: string, 
    format = 'YYYY/MM/DD A hh:mm:ss'
  ) => {
  if (!data) return ''
  moment.locale('zh-tw')
  return moment(data, format).fromNow()
}
```

src\filters\index.ts

```js
export { fromNowTime } from '@/utils'
```

main.ts

```js
import * as filters from '@/filters'
```

18 小時前

xx.vue

```html
<span>{{ data.createdOn | fromNowTime }}</span>
```
