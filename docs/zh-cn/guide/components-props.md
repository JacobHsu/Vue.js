# [Prop](https://cn.vuejs.org/v2/guide/components-props.html)

## Prop 的大小写 (camelCase vs kebab-case)

HTML 中的 **attribute 名是大小写不敏感的**，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 `kebab-case (短横线分隔命名)` 命名：

```js
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
```

```html
<!-- 在 HTML 中是 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>
```

如果你使用字符串模板，那么这个限制就不存在了。

## 传递静态或动态 Prop

像这样，你已经知道了可以像这样给 prop 传入一个静态的值：

```html
<blog-post title="My journey with Vue"></blog-post>
```

你也知道 prop 可以通过 `v-bind` 动态赋值，例如：

```html
<!-- 动态赋予一个变量的值 -->
<blog-post v-bind:title="post.title"></blog-post>

<!-- 动态赋予一个复杂表达式的值 -->
<blog-post
  v-bind:title="post.title + ' by ' + post.author.name"
></blog-post>
```

在上述两个示例中，我们传入的值都是字符串类型的，但实际上任何类型的值都可以传给一个 prop。

## 单向数据流 `父子 prop`

所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

额外的，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你**不应该在一个子组件内部改变 prop**。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

## Image Example

KycForm.vue 父  

```html
<kyc-image v-for="img in imgArr"
    :key="img.pos"
    :text="img.text"
    :imgSrc.sync="form.imageList[img.pos]"
    :id="`img_${img.pos}`"
    class="mt-3">
</kyc-image>
```

KycImage.vue 子  

```html
<input accept="image/jpeg, image/png"
    type="file"
    :id="(id)"
    @change="handleLoad"
    :class="[$style.idimg__input]" />
```

```js
  // props 父組件 傳遞資料給 子組件
  props: {
    imgSrc: {
      type: String,
      default: null
    },
```


```js
  methods: {
    handleLoad(evt) {
      this.isLoading = true
      const imgFile = evt.target.files[0]
      // console.log(imgFile, 'orig image')
      if (!imgFile) {
        this.applyStyle(null)
        return
      } else {
        this.applyStyle(this.imgSrc) // this.imgSrc 從props來 
        return
      }
    },
    /**
     * 將圖片套用在CSS
     */
    applyStyle(src) {
      const imgStyle = this.$refs[this.id].style // $refs 取得 DOM Element 的資訊
      imgStyle.backgroundImage = ''
      if (src) {
        imgStyle.backgroundImage = `url(${src})`
        this.$emit('update:imgSrc', src) // 子組件 傳遞資料給 父組件 
        imgStyle.backgroundRepeat = 'no-repeat'
        imgStyle.backgroundPosition = 'center'
        imgStyle.backgroundSize = 'contain'
      } else {
        this.$emit('update:imgSrc', '')
      }
      this.isLoading = false
    },

```