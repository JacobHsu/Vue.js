# vuejs-datepicker

`$ npm i vuejs-datepicker`

To view a demo online: https://codesandbox.io/s/mpklq49wp

directly from a CDN

```html
<div id="app">
  <vuejs-datepicker></vuejs-datepicker>
</div>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuejs-datepicker"></script>
<script>
const app = new Vue({
  el: '#app',
  components: {
  	vuejsDatepicker
  }
})
</script> 
 
<!-- French language example -->
<div id="app">
  <vuejs-datepicker :language="fr"></vuejs-datepicker>
</div>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuejs-datepicker"></script>
<script src="https://unpkg.com/vuejs-datepicker/dist/locale/translations/fr.js"></script>
<script>
const app = new Vue({
  el: '#app',
  data() {
    return {
      fr: vdp_translation_fr.js
    }
  },
  components: {
  	vuejsDatepicker
  }
})
</script> 
```
