# Backbone 源码解析

### Meathill 

[@meathill](https://weibo.com/meathill) | [Gmail](mailto:meathill@gmail.com) 

2016-01-18

--------

* 如何读源码
* Backbone 的设计目标
* 源码解析

--------

## 如何读源码

> 我不赞成新人以“读源码”的方式进行学习，因为相比于看文档、看范例、实操开发，“读源码”的效率实在太低了。

--------

1. 只能看懂“How”，无从知晓“Why”。
2. “读源码”不包含演进的过程，上来就是别人提炼过、推导过的精髓，更加难以理解。
3. “读源码”因为成果难以衡量，里程碑难以界定，学到多少东西更是只有本人知道。

--------

### 什么时候读源码？

1. 文档中语焉不详，只能读源码。
2. 他们做到了自己没有做到的事情，学习怎么做。
3. 阅读功能性的库，比如 [undersocre](http://underscorejs.org/) ，学习编程技巧。

--------

### 怎么阅读源码？

1. 先看文档
2. 确定范围
3. 随手加注释
4. 善用IDE

--------

## Backbone 的设计目标

> Backbone n. 支柱；骨干；龙骨

前端代码有临时性和随意性，缺少组织，难以实现复杂应用。

引入UI界比较成熟的MVC模式。

较低的侵入性。

========

### MVP

和传统概念相比，Web 开发有一些不同：

1. HTML + CSS 构成视图，不受 Backbone 控制
2. 用户操作通过 DOM 事件传递给 JavaScript 环境

所以，Backbone 的实现也有所不同：

1. View 实际上是 Presenter
2. Model + Collection 构成数据模型
3. Router = 全局控制器

--------

## 源码解析

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

1. `.on()`，`.off()`，`.trigger()`
2. 内建参数传递
3. 实用的小功能：`.once()`，`.off(null, null, null)`

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