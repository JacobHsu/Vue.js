# Visual Studio Code

## Eslint

[[Vue] 整合 Vue style guide, eslint-plugin-vue 和 VSCode](https://pjchender.blogspot.com/2019/07/vue-vue-style-guide-eslint-plugin-vue.html)

[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 
Vue tooling for VS Code
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
VS Code ESLint extension

設定 settings.json
[[VS Code] 入門-使用者設定](https://medium.com/az-%E4%B8%8B%E7%AD%86%E8%A8%98/vs-code-%E5%85%A5%E9%96%80-%E4%BD%BF%E7%94%A8%E8%80%85%E8%A8%AD%E5%AE%9A-85279307f510)

settings.json

```json
// VSCode settings.json
{
  // 存檔時可以自動排版
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // eslint 可以針對 .vue 檔進行檢驗
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
  ],
  // 因為安裝了 ESLint，因此就不需要 Vetur 針對 template 提供的驗證
  "vetur.validation.template": false,
}
```

## [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter

### Workspace

Manage > Settings / Workspace
Extensions > Prettier  

Usage`ctrl+shit+F`

.prettierrc

有 `.prettierrc` 設定檔時會優先使用該檔案設定
options 文件：https://prettier.io/docs/en/options.html

```js
tabWidth: 2
semi: false
singleQuote: true
# trailingComma: 'es5'
# bracketSpacing: true
arrowParens: 'avoid'
```

對應 Setting

```js
"editor.formatOnSave": true, // 编辑器保存自动格式化
"prettier.semi": false, // 语句结束不添加分号
"prettier.singleQuote": true // 字符串使用单引号
```

[在 VS Code 使用 Prettier 排版 Vue 程式碼](https://www.paultsai.com/vscode-prettier-vue/)

.eslintrc.js

```js
module.exports = {
  ...
  rules: {
    "space-before-function-paren": "off",
```

在eslint中添加`'space-before-function-paren': 0`  
是因为，`prettier`没有这个选项，所以直接去掉  
>   ✘  http://eslint.org/docs/rules/space-before-function-paren  Missing space before function parentheses

> App.vue{ parser: "babylon" } is deprecated; we now treat it as { parser: "babel"}

是prettier版本导致的，直接在项目中：npm install prettier@~1.12.0 -d
然后重新npm run dev

### User

[User] @settings > Extensions > Prettier

Prettier: `Semi`  
Whether to add a semicolon at the end of every line  

Prettier: `Single Quote`  
if true, will use single instead of double quotes 

.eslintrc.js

```js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
```

.vscode\settings.json  
存檔時可以自動修正   

```js
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## [VUE代码格式化配置vetur、eslint、prettier的故事](https://www.jianshu.com/p/f15b67c94c78)

.vscode\settings.json

```json
{
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "singleQuote": true,
      "semi": false
    }
  }
}
```

## Vue VSCode Snippets

[Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)

`vbase` tab

## [VSCode - 一键生成.vue模版](https://juejin.im/post/5e2151b85188254c3c2755f1)

VSCode支持用户自定义的一些常用的代码片段，从而实现快捷开发，提高工作效率。

### 新建模板配置文件`vue.json`

* 使用快捷`Ctrl + Shift + `P唤出控制台，然后输入`snippets`并选择,输入 `vue` ，然后`回车`。

* file > Preferences > User Snippets，当弹出搜索框之后，输入 `vue.json` ，然后回车

### 更改模板内容

主要的程式碼片段寫在 body 內，每一行都需要以 " " 雙上引號包覆，需要折行則加上 \n，若程式碼內需要使用到雙上引號，需要在前面加上反引號，如 \"。 另外範例中的 $1 為生成該程式碼片段後閃爍游標所在位置，$2 則是再次按下 Tab 鍵後游標的下一個位置，依此類推。

```js
{
    "vue template": {
        "prefix": "vue",
        "body": [
            "<template>",
            "    <div>\n",
            "    </div>",
            "</template>\n",
            "<script>",
            "export default {",
            "    props: {\n",
            "    },",
            "    data() {",
            "        return {\n",
            "        };",
            "    },",
            "    computed: {\n",
            "    },",
            "    created() {\n",
            "    },",
            "    mounted() {\n",
            "    },",
            "    watch: {\n",
            "    },",
            "    methods: {\n",
            "    },",
            "    components: {\n",
            "    },",
            "};",
            "</script>\n",
            "<style scoped lang=\"${1:scss}\">\n",
            "</style>\n",
        ],
        "description": "Create vue template"
    }
}
```

再來就可以新增 `.vue` 副檔名檔案，輸入 `vue` 並按 `tab` 鍵使用


## marketplace

[简体与繁体互转](https://marketplace.visualstudio.com/items?itemName=cipchk.zh-hans-tt-hant-vscode)

[vuejs/vetur](https://github.com/vuejs/vetur): Vue tooling for VS Code

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Visual Studio Marketplace
