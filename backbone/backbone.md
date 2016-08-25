# Backbone 源码解析

### Meathill 

[@meathill](https://weibo.com/meathill) | [Gmail](mailto:meathill@gmail.com) 

2016-01-18

--------

* 如何读源码
* Backbone 的由来
* Backbone 源码解析

--------

## 如何读源码

> 我不赞成新人以“读源码”的方式进行学习，因为相比于看文档、看范例、实操开发，“读源码”的效率实在太低了。

--------

1. 只能看懂“How”，无从知晓“Why”。
2. “读源码”不包含演进的过程，上来就是别人提炼过、推导过的精髓，更加难以理解。
3. “读源码”因为成果难以衡量，里程碑难以界定，难以形成系统的正反馈。

--------

### 什么时候读源码？

1. 文档中语焉不详，只能读源码。
2. 他们做到了自己没有做到的事情，针对性学习怎么做。
3. 阅读功能性的、代码片段一样的库，比如 [undersocre](http://underscorejs.org/)。

--------

### 怎么阅读源码？

1. 先看文档
2. 确定范围
3. 随手加注释
4. 善用IDE
5. 对比历史版本和提交日志

--------

## Backbone 的设计目标

> Backbone n. 支柱；骨干；龙骨

========

### 上古时期

JavaScript 被创造出来用作表单验证。

接着 DHTML 出现后用来实现“页面效果”，存在很多问题：

1. 兼容性不好
2. DOM 操作繁琐
3. 混在 HTML 里，不便于维护

========

### jQuery

> Write less, do More!

* 解决了兼容性问题
* 大大提高开发效率
* 但很容易写出“面条式”的代码。[例子](https://github.com/meathill/BaconPageBuilder/blob/e536a7b2ae8d56b6c454cbba6a017bcdb976a7fd/js/main.js)

========

JS有临时性和随意性，缺少组织，难以实现复杂应用。

要想改进它必须引入UI界比较成熟的开发模式。

**>>> MVC <<<**

========

### 为什么选择 Backbone

1. 侵入性较低。
2. 代码简单，容易读懂。
3. 抽象很合理。

========

### Backbone 的 MVP 模式

和传统概念相比，Web 开发有一些不同：

1. HTML + CSS 构成视图，不需要 JS
2. 用户操作通过 DOM 事件传递给 JavaScript 环境

所以，Backbone 的实现也有所不同：

1. View 实际上是 Presenter
2. Model + Collection 构成数据模型
3. Router = 全局控制器

--------

## Backbone 源码解析

[1.3.3](https://github.com/jashkenas/backbone/blob/master/backbone.js)

========

1. 环境支持
2. Events
3. Model + Collection
4. View
5. `Backbone.sync`
6. Router + History

--------

## 环境支持

1. AMD
2. CMD
3. 浏览器全局

--------

## Events

事件回调机制。

1. `.listenTo()`，`.stopListenTo()`，`.trigger()`
2. 内建参数传递
3. 实用的小功能：`.listenToOnce()`
4. 使用 `.listenTo()` 取代 `.on()`

========

## 全局事件处理

`Backbone.on`

========

### 观察者 vs 广播订阅

1. 广播订阅：DOM 冒泡机制
2. 观察者：针对性的，一对一

--------

## Model + Collection

Web 应用的基础模式：对象 + 集合

例子：

1. 邮件
2. 聊天
3. 微博

--------

常见交互模式：

<p class="fragment">on(model.change, handler)</p>
<p class="fragment">Model.set(key, value)</p>
<p class="fragment">View 重新渲染</p>

--------

[Underscore](http://underscorejs.org/) 的数据操作

--------

## Model

========

### `.set(key, value, options)`

========

### `.save(key, value, options)`

========

### `this.id`

========

### `.toJSON()`

========

### `.fetch()`

========

### `.parse()`

========

### `.validate()`

========

### `.changedAttributes` `.previousAttributes`

--------

## Collection

========

### `.add()` `.remove()` `.create()` `.destroy()`

========

### `.set()` `.reset()`

========

### `.at()` `.get()`

--------

## View

========

### events `.delegateEvents()`

========

### `this.el` `this.$el` `.setElement()` `tagName` `className`

========

### `.remove()`

--------

## `Backbone.sync`

--------

## Router + History

构成单页应用的控制器

========

### pushState

========

### `history.fragment` `history.loadUrl()`

--------

## 扩展阅读

* [Underscore](http://underscorejs.org/)
* [Backbone](http://backbonejs.org/)
* [谈学习：读源码](http://segmentfault.com/a/1190000000746354)
* [使用Backbone的正确姿势](http://blog.meathill.com/tech/js/best-practise-for-backbone.html)