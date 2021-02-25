# `<router-link>` Props

[to](https://router.vuejs.org/zh/api/#to)

```html
<!-- 字符串 -->
<router-link to="home">Home</router-link>
<!-- 渲染结果 -->
<a href="home">Home</a>

<!-- 使用 v-bind 的 JS 表达式 -->
<router-link v-bind:to="'home'">Home</router-link>

<!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
<router-link :to="'home'">Home</router-link>

<!-- 同上 -->
<router-link :to="{ path: 'home' }">Home</router-link>

<!-- 命名的路由 -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

<!-- 带查询参数，下面的结果为 /register?plan=private -->
<router-link :to="{ path: 'register', query: { plan: 'private' }}"
  >Register</router-link
>
```

Dynamic Links

```html
<div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id }}">{{job.title}}</router-link>
</div>
```

JobDetails.vue

```js
<template>
    <p>the job id is {{id}}</p>
</template>
<script>
    export default {
        props: ['id'],
        // data() {
        //  return  { id: this.$route.parms.id}    
        // }
    }
</script>
```
