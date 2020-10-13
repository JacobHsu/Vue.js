# vee-validate

[VeeValidate](https://logaretm.github.io/vee-validate/) Template Based Form Validation Framework for Vue.js

[![NPM](https://nodei.co/npm/vee-validate.png?downloads=true&stars=true)](https://nodei.co/npm/vee-validate/)


main.js

```js
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
```

2.x

v-validate

```js
<input type="text" name="field" v-validate="'required'">
<span>{{ errors.first('field') }}</span>
```

::: danger Error
"export 'default' (imported as 'VeeValidate') was not found in 'vee-validate'
:::

this seems to happen in any version after 3.0. I installed vee-validate@2.2.15 and it worked.

`npm i vee-validate@2`

## [Using The Custom Rule](https://vee-validate.logaretm.com/v2/guide/custom-rules.html#object-form)

```js
<input type="password"
        v-model="form.password"
        v-validate="{ required: true, min: 6, max: 20, numAndText: true }"
```

```js
  import { isPwdValid } from '@/libs/ls'
  created() {
    this.$validator.extend('numAndText', {
      getMessage: field => "必須包含6-20文字和數字",
      validate: value => isPwdValid(value)
    })
  },
```

libs/ls

```js
export function isPwdValid(pwd) {
  return new RegExp(/^(?=.*\d+)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,20}$/).test(pwd)
}
```
