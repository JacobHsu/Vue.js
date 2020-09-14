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
