# Debug

> vue路由跳转错误：Error: Redirected when going from "/login" to "/home" via a navigation guard.

以上运行时第一次点击登陆出现错误，第二次点击登陆正常进入主页，原因是在第一次登陆时守卫路由没有拿到token的值
第二次登陆能够登入首页是因为第一次登陆已经放好了token，因此正常拿到token也就能正常走这个函数了。

解决办法：把push方法放到存储token信息以后即可

how to use sequelize logout with async / await?

```js
  private async logout() {
    const { data } = await getIP()
    this.logoutForm = {
      ip:  data.ip || '127.0.0.1'
    }
    await UserModule.LogOut(this.logoutForm)
    this.$router.push(`/login?redirect=${this.$route.fullPath}`).catch(err => {
      console.warn(err)
    })
  }
```
