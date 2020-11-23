# [插槽](https://cn.vuejs.org/v2/guide/components-slots.html)

Slot 是一種內容分發(content distribution)的 API，中文翻譯為插槽，適合用在結構比較複雜，元件內容可以重複使用的地方。
簡單說就是在 component 中可以預留空間，在父層再把內容放進去。

```js
Vue.component("component-basic", {
  template: "<div>我是一般的component</div>"
});
```

```js
Vue.component("component-slot", {
  template:
    "<div><slot></slot></div>"
});

<template>
  <component-slot>我是指定的內容</component-slot>
</template>
```

編譯出： `<div>我是指定的內容</div>`

## 插槽内容

Vue 实现了一套内容分发的 API，将 `<slot>` 元素作为承载分发内容的出口。

它允许你像这样合成组件：

```html
<navigation-link url="/profile">
  Your Profile
</navigation-link>
```

然后你在 `<navigation-link>` 的模板中可能会写为：

```html
<a
  v-bind:href="url"
  class="nav-link"
>
  <slot></slot>
</a>
```

当组件渲染的时候，`<slot></slot>` 将会被替换为“Your Profile”。插槽内可以包含任何模板代码，包括 HTML：


```html
<navigation-link url="/profile">
  <!-- 添加一个 Font Awesome 图标 -->
  <span class="fa fa-user"></span>
  Your Profile
</navigation-link>
```

甚至其它的组件：

```html
<navigation-link url="/profile">
  <!-- 添加一个图标的组件 -->
  <font-awesome-icon name="user"></font-awesome-icon>
  Your Profile
</navigation-link>
```

如果 `<navigation-link>` 的 template 中**没有**包含一个 `<slot>` 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。

## 具名插槽（Named Slots）

使用属性 name 决定配置的内容。没有 name 的匿名插槽将成为预设插槽，匹配不到的内容会放置在此；若没有默认插槽，匹配不到的内容会被舍弃。

有时我们需要多个插槽。例如对于一个带有如下模板的 `<base-layout>` 组件：

```html
<div class="container">
  <header>
    <!-- 我们希望把页头放这里 -->
  </header>
  <main>
    <!-- 我们希望把主要内容放这里 -->
  </main>
  <footer>
    <!-- 我们希望把页脚放这里 -->
  </footer>
</div>
```

对于这样的情况，`<slot>` 元素有一个特殊的 attribute：`name`。这个 attribute 可以用来定义额外的插槽：

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

ex: https://codepen.io/JacobHsu/pen/zQwMdN

一个不带 name 的 `<slot>` 出口会带有隐含的名字“default”。

在向具名插槽提供内容的时候，我们可以在一个 `<template>` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其名称：

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

现在 `<template>` 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 v-slot 的 `<template>` 中的内容都会被视为默认插槽的内容。

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

任何一种写法都会渲染出：

```js
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```

::: warning 注意
 `v-slot` 只能添加在 `<template>` 上
 注意默认插槽的缩写语法**不能**和具名插槽混用，因为它会导致作用域不明确
:::

## 作用域插槽


有时让插槽内容能够访问子组件中才有的数据是很有用的。例如，设想一个带有如下模板的 `<current-user>` 组件：

```html
<span>
  <slot>{{ user.lastName }}</slot>
</span>
```

我们可能想换掉备用内容，用名而非姓来显示。如下：

```html
<current-user>
  {{ user.firstName }}
</current-user>
```

然而上述代码不会正常工作，因为只有 `<current-user>` 组件可以访问到 user 而我们提供的内容是在父级渲染的。

为了让 user 在父级的插槽内容中可用，我们可以将 `user` 作为 `<slot>` 元素的一个 attribute 绑定上去：

```html
<span>
  <slot v-bind:user="user">
    {{ user.lastName }}
  </slot>
</span>
```

绑定在 `<slot>` 元素上的 attribute 被称为**插槽 prop**。现在在父级作用域中，我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字：

```html
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```

在这个例子中，我们选择将包含所有插槽 prop 的对象命名为 `slotProps`，但你也可以使用任意你喜欢的名字。


> 自 2.6.0 起有所更新。已废弃的使用 slot-scope attribute 的语法在[这里](https://cn.vuejs.org/v2/guide/components-slots.html#废弃了的语法)。

带数据的插槽。样式父组件说了算，但内容可以显示子组件插槽绑定的。
在 `<template>` 上使用特殊的 slot-scope attribute，可以接收传递给插槽的 prop

父组件：

```html
template>
  <div class="father">
    <h3>这里是父组件</h3>
    <!--第一次使用：用flex展示数据-->
    <child>
      <template slot-scope="user">
        <div class="tmpl">
          <span v-for="item in user.data">{{item}}</span>
        </div>
      </template>
    </child>

    <!--第二次使用：用列表展示数据-->
    <child>
      <template slot-scope="user">
        <ul>
          <li v-for="item in user.data">{{item}}</li>
        </ul>
      </template>
    </child>

    <!--第三次使用：直接显示数据-->
    <child>
      <template slot-scope="user">
       {{user.data}}
      </template>
    </child>

    <!--第四次使用：不使用其提供的数据, 作用域插槽退变成匿名插槽-->
    <child>
      我就是模板
    </child>
  </div>
</template>
```

子组件：

```html
<template>
  <div class="child">
    <h3>这里是子组件</h3>
    // 作用域插槽
    <slot  :data="data"></slot>
  </div>
</template>

 export default {
    data: function(){
      return {
        data: ['Slots','Named Slots','slot-scope']
      }
    }
}
```
