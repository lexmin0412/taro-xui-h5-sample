(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"102":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a(32),n=function pxTransform(e){return i.default.pxTransform(e,750)}},"103":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(32);var i=function handleViewDocs(e){var t="all"===e?"/":"/".concat(e),a="https://taro-xui.vercel.app/#".concat(t);window.open(a)}},"104":function(e,t,a){e.exports=a.p+"static/images/logo.png"},"131":function(e,t,a){},"139":function(e,t,a){"use strict";a.r(t);var i=a(6),n=a(32),r=a(105),o=a(15),s=a.n(o),l=a(106),c=a(103),m=a(102),d=(a(131),a(104)),u=a.n(d);t.default=function XLoadMoreIndex(){n.default.useShareAppMessage((function(){return{"title":"Taro X UI - LoadMore","path":"/pages/home/index?source=share","imageUrl":u.a}})),n.default.useShareTimeline((function(){return{"title":"Taro X UI - LoadMore","query":"source=timeline","imageUrl":u.a}})),n.default.useAddToFavorites((function(){return{"title":"Taro X UI - LoadMore","query":"source=favorites","imageUrl":u.a}}));var e=Object(o.useState)(!0),t=Object(i.a)(e,2),a=t[0],d=t[1];return setTimeout((function(){d(!1)}),2e3),s.a.createElement(r.View,{"className":"load-more-index"},s.a.createElement(r.View,{"className":"bg-white x-item padding-sm-x solid-border-b"},s.a.createElement(r.View,{"className":"x-item-text"},"默认 - 加载中")),s.a.createElement(r.View,{"className":"bg-white x-item padding-sm-x flex justify-between align-center"},s.a.createElement(l.XLoadMore,{"hasMore":!0,"loadingText":""})),s.a.createElement(r.View,{"className":"margin-top bg-white x-item padding-sm-x solid-border-b"},s.a.createElement(r.View,{"className":"x-item-text"},"默认 - 加载完成")),s.a.createElement(r.View,{"className":"bg-white x-item padding-sm-x flex justify-between align-center"},s.a.createElement(l.XLoadMore,{"hasMore":!1,"loadingText":""})),s.a.createElement(r.View,{"className":"margin-top bg-white x-item padding-sm-x solid-border-b"},s.a.createElement(r.View,{"className":"x-item-text"},"自定义文字 - 加载中")),s.a.createElement(r.View,{"className":"bg-white x-item padding-sm-x flex justify-between align-center"},s.a.createElement(l.XLoadMore,{"hasMore":!0,"loadingText":"loading text ..."})),s.a.createElement(r.View,{"className":"margin-top bg-white x-item padding-sm-x solid-border-b"},s.a.createElement(r.View,{"className":"x-item-text"},"自定义文字 - 加载完成")),s.a.createElement(r.View,{"className":"bg-white x-item padding-sm-x flex justify-between align-center"},s.a.createElement(l.XLoadMore,{"hasMore":!1,"loadedText":"load finished."})),s.a.createElement(r.View,{"className":"margin-top bg-white x-item padding-sm-x solid-border-b"},s.a.createElement(r.View,{"className":"x-item-text"},"异步状态")),s.a.createElement(r.View,{"className":"bg-white x-item padding-sm-x flex justify-between align-center"},s.a.createElement(l.XLoadMore,{"hasMore":a,"loadingText":"加载中...","loadedText":"加载完成"})),s.a.createElement(l.XButton,{"customStyle":{"position":"fixed","left":0,"bottom":0,"width":"100%","height":Object(m.a)(90)},"onClick":function onClick(){return Object(c.a)("loadMore")}},"查看文档"))}}}]);