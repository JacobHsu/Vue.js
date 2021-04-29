(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{362:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"处理边界情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理边界情况"}},[t._v("#")]),t._v(" 处理边界情况")]),t._v(" "),s("p",[t._v("该页面假设你已经阅读过了组件基础")]),t._v(" "),s("h3",{attrs:{id:"访问元素-组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问元素-组件"}},[t._v("#")]),t._v(" 访问元素 & 组件")]),t._v(" "),s("p",[t._v("在绝大多数情况下，我们最好不要触达另一个组件实例内部或手动操作 DOM")]),t._v(" "),s("h2",{attrs:{id:"访问父级组件实例-parent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问父级组件实例-parent"}},[t._v("#")]),t._v(" 访问父级组件实例 "),s("code",[t._v("$parent")])]),t._v(" "),s("p",[t._v("和 "),s("code",[t._v("$root")]),t._v(" 类似，"),s("code",[t._v("$parent")]),t._v(" 属性可以用来从一个子组件访问父组件的实例。它提供了一种机会，可以在后期随时触达父级组件，以替代将数据以 prop 的方式传入子组件的方式。")]),t._v(" "),s("blockquote",[s("p",[t._v("在绝大多数情况下，触达父级组件会使得你的应用更难调试和理解，尤其是当你变更了父级组件的数据的时候。当我们稍后回看那个组件的时候，很难找出那个变更是从哪里发起的。")])]),t._v(" "),s("p",[t._v("另外在一些可能适当的时候，你需要特别地共享一些组件库。举个例子，在和 JavaScript API 进行交互而不渲染 HTML 的抽象组件内，诸如这些假设性的 Google 地图组件一样：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("google-map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("google-map-markers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("places")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("iceCreamShops"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("google-map-markers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("google-map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("这个 "),s("code",[t._v("<google-map>")]),t._v(" 组件可以定义一个 map 属性，所有的子组件都需要访问它。在这种情况下 "),s("code",[t._v("<google-map-markers>")]),t._v(" 可能想要通过类似 "),s("code",[t._v("this.$parent.getMap")]),t._v(" 的方式访问那个地图，以便为其添加一组标记。你可以在这里查阅这种模式。")]),t._v(" "),s("iframe",{attrs:{width:"100%",height:"300",src:"//jsfiddle.net/chrisvfritz/ttzutdxh/embedded/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"}}),t._v(" "),s("p",[t._v("请留意，尽管如此，通过这种模式构建出来的那个组件的内部仍然是容易出现问题的。比如，设想一下我们添加一个新的 "),s("code",[t._v("<google-map-region>")]),t._v(" 组件，当 "),s("code",[t._v("<google-map-markers>")]),t._v(" 在其内部出现的时候，只会渲染那个区域内的标记：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("google-map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("google-map-region")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("shape")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cityBoundaries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("google-map-markers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("places")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("iceCreamShops"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("google-map-markers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("google-map-region")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("google-map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("那么在 "),s("code",[t._v("<google-map-markers>")]),t._v(" 内部你可能发现自己需要一些类似这样的 hack：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" map "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map\n")])])]),s("p",[t._v("很快它就会失控。这也是我们针对需要向任意更深层级的组件提供上下文信息时推荐 "),s("strong",[t._v("依赖注入")]),t._v(" 的原因。")]),t._v(" "),s("h2",{attrs:{id:"访问子组件实例或子元素-ref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问子组件实例或子元素-ref"}},[t._v("#")]),t._v(" 访问子组件实例或子元素  "),s("code",[t._v("ref")])]),t._v(" "),s("p",[t._v("尽管存在 prop 和事件，有的时候你仍可能需要在 JavaScript 里直接访问一个子组件。为了达到这个目的，你可以通过 "),s("code",[t._v("ref")]),t._v(" 这个 attribute 为子组件赋予一个 ID 引用。例如：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("base-input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("usernameInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("base-input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("现在在你已经定义了这个 "),s("code",[t._v("ref")]),t._v(" 的组件里，你可以使用：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usernameInput\n")])])]),s("p",[t._v("来访问这个 "),s("code",[t._v("<base-input>")]),t._v(" 实例，以便不时之需。比如程序化地从一个父级组件聚焦这个输入框。在刚才那个例子中，该 "),s("code",[t._v("<base-input>")]),t._v(" 组件也可以使用一个类似的 ref 提供对内部这个指定元素的访问，例如：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("甚至可以通过其父级组件定义方法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来从父级组件聚焦输入框")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样就允许父级组件通过下面的代码聚焦 "),s("code",[t._v("<base-input>")]),t._v(" 里的输入框：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usernameInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("当 "),s("code",[t._v("ref")]),t._v(" 和 "),s("code",[t._v("v-for")]),t._v(" 一起使用的时候，你得到的 ref 将会是一个包含了对应数据源的这些子组件的数组。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[s("code",[t._v("$refs")]),t._v(" 只会在组件渲染完成之后生效，并且它们不是响应式的。这仅作为一个用于直接操作子组件的“逃生舱”——你应该避免在模板或计算属性中访问 "),s("code",[t._v("$refs")]),t._v("。")])]),t._v(" "),s("p",[t._v("vue3-ref")]),t._v(" "),s("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/vue3-ref-9gkx4?fontsize=14&hidenavigation=1&theme=dark",title:"vue3-ref",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}}),t._v(" "),s("h2",{attrs:{id:"依赖注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入"}},[t._v("#")]),t._v(" 依赖注入")]),t._v(" "),s("p",[t._v("在我们描述访问父级组件实例的时候，展示过一个类似这样的例子：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("google-map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("google-map-region")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("shape")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cityBoundaries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("google-map-markers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("places")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("iceCreamShops"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("google-map-markers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("google-map-region")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("google-map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在这个组件里，所有 "),s("code",[t._v("<google-map>")]),t._v(" 的后代都需要访问一个 getMap 方法，以便知道要跟哪个地图进行交互。不幸的是，使用 "),s("code",[t._v("$parent")]),t._v(" 属性无法很好的扩展到更深层级的嵌套组件上。这也是依赖注入的用武之地，它用到了两个新的实例选项："),s("code",[t._v("provide")]),t._v(" 和 "),s("code",[t._v("inject")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("provide")]),t._v(" 选项允许我们指定我们想要提供给后代组件的数据/方法。在这个例子中，就是 "),s("code",[t._v("<google-map>")]),t._v(" 内部的 "),s("code",[t._v("getMap")]),t._v(" 方法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("provide")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    getMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getMap\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后在任何后代组件里，我们都可以使用 "),s("code",[t._v("inject")]),t._v(" 选项来接收指定的我们想要添加在这个实例上的属性：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("inject"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getMap'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("你可以在这里看到完整的示例。")]),t._v(" "),s("iframe",{attrs:{width:"100%",height:"300",src:"//jsfiddle.net/chrisvfritz/tdv8dt3s/embedded/js,html,css,result/dark/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"}}),t._v(" "),s("p",[t._v("相比 "),s("code",[t._v("$parent")]),t._v(" 来说，这个用法可以让我们在任意后代组件中访问 "),s("code",[t._v("getMap")]),t._v("，而不需要暴露整个 "),s("code",[t._v("<google-map>")]),t._v(" 实例。这允许我们更好的持续研发该组件，而不需要担心我们可能会改变/移除一些子组件依赖的东西。同时这些组件之间的接口是始终明确定义的，就和 "),s("code",[t._v("props")]),t._v(" 一样。")]),t._v(" "),s("p",[t._v("实际上，你可以把依赖注入看作一部分 "),s("em",[t._v("“大范围有效的 prop”")]),t._v(" ，除了：")]),t._v(" "),s("ul",[s("li",[t._v("祖先组件不需要知道哪些后代组件使用它提供的属性")]),t._v(" "),s("li",[t._v("后代组件不需要知道被注入的属性来自哪里")])]),t._v(" "),s("blockquote",[s("p",[t._v("然而，依赖注入还是有负面影响的。它将你应用程序中的组件与它们当前的组织方式耦合起来，使重构变得更加困难。同时所提供的属性是非响应式的。这是出于设计的考虑，因为使用它们来创建一个中心化规模化的数据跟使用 "),s("code",[t._v("$root")]),t._v("做这件事都是不够好的。如果你想要共享的这个属性是你的应用特有的，而不是通用化的，或者如果你想在祖先组件中更新所提供的数据，那么这意味着你可能需要换用一个像 "),s("code",[t._v("Vuex")]),t._v(" 这样真正的状态管理方案了。")])]),t._v(" "),s("p",[t._v("你可以在 "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#provide-inject",target:"_blank",rel:"noopener noreferrer"}},[t._v("API 参考文档"),s("OutboundLink")],1),t._v("学习更多关于依赖注入的知识。")])])}),[],!1,null,null,null);a.default=n.exports}}]);