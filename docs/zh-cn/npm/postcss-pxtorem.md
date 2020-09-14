# postcss-pxtorem

[![NPM](https://nodei.co/npm/postcss-pxtorem.png?downloads=true&stars=true)](https://nodei.co/npm/postcss-pxtorem/)

postcss-pxtorem是PostCSS的插件，用于将像素单元生成rem单位。

`$ npm install postcss-pxtorem --save-dev`

## 配置

可以通过3个地方来添加配置,配置文件皆位于vue 项目根目录中，若文件不存在可以自行建立。

其中最重要的是这个:

* `rootValue` (Number)
    * 根元素的值，即1rem的值
    * 用于设计稿元素尺寸/rootValue

比如 rootValue = 192 时，在css中width: 960px; 最终会换算成width: 5rem;

还有一些其他的配置：

* `propList` (Array) 需要做单位转化的属性.
    * 必须精确匹配
    * 用 * 来选择所有属性. Example: `['*']`
    * 在句首和句尾使用 * (`['*position*']` 会匹配 background-position-y)
    * 使用 ! 来配置不匹配的属性. Example: `['*', '!letter-spacing']`
    * 组合使用. Example: `['*', '!font*']`
* `minPixelValue`(Number) 可以被替换的最小像素.
* `unitPrecision`(Number) rem单位的小数位数上限.

## 权重

> vue.config.js > .postcssrx.js > postcss.config.js

其中 postcssrc.js 和 postcss.config.js 可以热更新， 
vue.config.js 中做的修改要重启devServer

## References

[Vue中rem与postcss-pxtorem的应用](https://segmentfault.com/a/1190000021045487)
