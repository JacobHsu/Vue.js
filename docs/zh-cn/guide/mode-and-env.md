# [模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html#)

## 模式

**模式**是 Vue CLI 项目中一个重要的概念。默认情况下，一个 Vue CLI 项目有三个模式：

* `development` 模式用于 `vue-cli-service serve`
* `test` 模式用于 `vue-cli-service test:unit`
* `production` 模式用于 `vue-cli-service build` 和 `vue-cli-service test:e2e`

你可以通过传递 `--mode` 选项参数为命令行覆写默认的模式。例如，如果你想要在构建命令中使用开发环境变量：

```js
vue-cli-service build --mode development
```

当运行 `vue-cli-service` 命令时，所有的环境变量都从对应的[环境文件](https://cli.vuejs.org/zh/guide/mode-and-env.html#环境变量)中载入。
如果文件内部不包含 NODE_ENV 变量，它的值将取决于模式，例如，在 `production` 模式下被设置为 `"production"`，在 `test` 模式下被设置为 `"test"`，默认则是 `"development"`。

## 环境变量

你可以在你的项目根目录中放置下列文件来指定环境变量：

```sh
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

一个环境文件只包含环境变量的“键=值”对：

```js
FOO=bar
VUE_APP_NOT_SECRET_CODE=some_value
```

::: warning 警告
不要在你的应用程序中存储任何机密信息（例如私有 API 密钥）！
环境变量会随着构建打包嵌入到输出代码，意味着任何人都有机会能够看到它。
:::

::: warning 注意
请注意，只有 `NODE_ENV`，`BASE_URL` 和以 `VUE_APP_` 开头的变量将通过 `webpack.DefinePlugin` 静态地嵌入到_客户端侧_的代码中。这是为了避免意外公开机器上可能具有相同名称的私钥。
:::