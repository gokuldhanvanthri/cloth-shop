(this["webpackJsonpcloth-shop"]=this["webpackJsonpcloth-shop"]||[]).push([[6],{130:function(n,t,e){},132:function(n,t,e){"use strict";e.r(t);var c=e(18),i=e(9),r=e(14),a=e(91),u=e(92),o=e(0),l=e.n(o),s=e(93),d=(e(130),{}),f=Object(c.b)((function(n,t){return{collection:Object(a.a)(t.match.params.collectionId)(n)}}))((function(n){var t=n.collection,e=void 0===t?d:t,c=e.title,i=e.items;return l.a.createElement("div",{className:"collection-page"},l.a.createElement("h2",{className:"title"},c),l.a.createElement("div",{className:"items"},i.map((function(n){return l.a.createElement(s.a,{key:n.id,item:n})}))))})),m=Object(i.b)({isLoading:function(n){return!Object(a.d)(n)}}),b=Object(r.d)(Object(c.b)(m),u.a)(f);t.default=b},91:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return l}));var c=e(9),i=function(n){return n.shop},r=Object(c.a)([i],(function(n){return n.collections})),a=Object(c.a)([r],(function(n){return n?Object.values(n):[]})),u=function(n){return Object(c.a)([r],(function(t){return t?t[n]:null}))},o=Object(c.a)([i],(function(n){return n.isFetching})),l=Object(c.a)([i],(function(n){return!!n.collections}))},92:function(n,t,e){"use strict";var c=e(44),i=e(0),r=e.n(i),a=e(46);t.a=function(n){return function(t){var e=t.isLoading,i=Object(c.a)(t,["isLoading"]);return e?r.a.createElement(a.a,null):r.a.createElement(n,i)}}},93:function(n,t,e){"use strict";var c=e(0),i=e.n(c),r=e(18),a=e(25),u=e(10),o=e(11),l=e(43);function s(){var n=Object(u.a)(["\n  width: 10%;\n  text-align: right;\n"]);return s=function(){return n},n}function d(){var n=Object(u.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return d=function(){return n},n}function f(){var n=Object(u.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return f=function(){return n},n}function m(){var n=Object(u.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return m=function(){return n},n}function b(){var n=Object(u.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px;\n  }\n"]);return b=function(){return n},n}function p(){var n=Object(u.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]);return p=function(){return n},n}var h=o.c.div(p()),v=Object(o.c)(l.a)(b()),g=o.c.div(m(),(function(n){var t=n.imageUrl;return"url(".concat(t,")")})),j=o.c.div(f()),O=o.c.span(d()),w=o.c.span(s());t.a=Object(r.b)(null,(function(n){return{addItem:function(t){return n(Object(a.a)(t))}}}))((function(n){var t=n.item,e=n.addItem,c=t.name,r=t.price,a=t.imageUrl;return i.a.createElement(h,null,i.a.createElement(g,{className:"image",imageUrl:a}),i.a.createElement(j,null,i.a.createElement(O,null,c),i.a.createElement(w,null,r)),i.a.createElement(v,{onClick:function(){return e(t)},inverted:!0},"Add to cart"))}))}}]);
//# sourceMappingURL=6.b28ab310.chunk.js.map