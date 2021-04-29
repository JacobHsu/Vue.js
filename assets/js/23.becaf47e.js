(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{367:function(e,t,s){"use strict";s.r(t);var a=s(42),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"模式和环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式和环境变量"}},[e._v("#")]),e._v(" "),s("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#",target:"_blank",rel:"noopener noreferrer"}},[e._v("模式和环境变量"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[e._v("#")]),e._v(" 模式")]),e._v(" "),s("p",[s("strong",[e._v("模式")]),e._v("是 Vue CLI 项目中一个重要的概念。默认情况下，一个 Vue CLI 项目有三个模式：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("development")]),e._v(" 模式用于 "),s("code",[e._v("vue-cli-service serve")])]),e._v(" "),s("li",[s("code",[e._v("test")]),e._v(" 模式用于 "),s("code",[e._v("vue-cli-service test:unit")])]),e._v(" "),s("li",[s("code",[e._v("production")]),e._v(" 模式用于 "),s("code",[e._v("vue-cli-service build")]),e._v(" 和 "),s("code",[e._v("vue-cli-service test:e2e")])])]),e._v(" "),s("p",[e._v("你可以通过传递 "),s("code",[e._v("--mode")]),e._v(" 选项参数为命令行覆写默认的模式。例如，如果你想要在构建命令中使用开发环境变量：")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("vue"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("cli"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("service build "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("mode development\n")])])]),s("p",[e._v("当运行 "),s("code",[e._v("vue-cli-service")]),e._v(" 命令时，所有的环境变量都从对应的"),s("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("环境文件"),s("OutboundLink")],1),e._v("中载入。\n如果文件内部不包含 NODE_ENV 变量，它的值将取决于模式，例如，在 "),s("code",[e._v("production")]),e._v(" 模式下被设置为 "),s("code",[e._v('"production"')]),e._v("，在 "),s("code",[e._v("test")]),e._v(" 模式下被设置为 "),s("code",[e._v('"test"')]),e._v("，默认则是 "),s("code",[e._v('"development"')]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[e._v("#")]),e._v(" 环境变量")]),e._v(" "),s("p",[e._v("你可以在你的项目根目录中放置下列文件来指定环境变量：")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v(".env                "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 在所有的环境中被载入")]),e._v("\n.env.local          "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 在所有的环境中被载入，但会被 git 忽略")]),e._v("\n.env."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 只在指定的模式中被载入")]),e._v("\n.env."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(".local   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 只在指定的模式中被载入，但会被 git 忽略")]),e._v("\n")])])]),s("p",[e._v("一个环境文件只包含环境变量的“键=值”对：")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("FOO")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("bar\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("VUE_APP_NOT_SECRET_CODE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("some_value\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("警告")]),e._v(" "),s("p",[e._v("不要在你的应用程序中存储任何机密信息（例如私有 API 密钥）！\n环境变量会随着构建打包嵌入到输出代码，意味着任何人都有机会能够看到它。")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),s("p",[e._v("请注意，只有 "),s("code",[e._v("NODE_ENV")]),e._v("，"),s("code",[e._v("BASE_URL")]),e._v(" 和以 "),s("code",[e._v("VUE_APP_")]),e._v(" 开头的变量将通过 "),s("code",[e._v("webpack.DefinePlugin")]),e._v(" 静态地嵌入到_客户端侧_的代码中。这是为了避免意外公开机器上可能具有相同名称的私钥。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);