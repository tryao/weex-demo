// { "framework": "Vue"} 

!function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:{logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"World"},methods:{update:function(e){this.target="Weex",console.log("target:",this.target)}}}},function(e,t){e.exports={wrapper:{alignItems:"center",marginTop:120},title:{paddingTop:40,paddingBottom:40,fontSize:48},logo:{width:360,height:156},desc:{paddingTop:20,color:"#888888",fontSize:24}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["wrapper"],on:{click:e.update}},[r("image",{staticClass:["logo"],attrs:{src:e.logoUrl}}),r("text",{staticClass:["title"]},[e._v("Hello "+e._s(e.target))]),r("text",{staticClass:["desc"]},[e._v("Now, let's use vue to build your weex app.")])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,r){var o,n,s=[];s.push(r(1)),o=r(0);var a=r(2);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/rongyao/mywork/weex/weex-app/src/index.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-309c339f",n.style=n.style||{},s.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,s),e.exports=o,e.exports.el="true",new Vue(e.exports)}]);