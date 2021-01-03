(this["webpackJsonpcloth-shop"]=this["webpackJsonpcloth-shop"]||[]).push([[5],{129:function(n,t,e){},131:function(n,t,e){"use strict";e.r(t);var r=e(18),c=e(9),i=e(14),a=e(91),o=e(92),u=e(44),l=e(0),s=e.n(l),d=e(22),f=e(93),m=e(10),p=e(11);function b(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  @media screen and (max-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]);return b=function(){return n},n}function v(){var n=Object(m.a)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  &:hover {\n    color: grey;\n  }\n"]);return v=function(){return n},n}function h(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n  @media screen and (max-width: 800px) {\n    align-items: center;\n  }\n"]);return h=function(){return n},n}var g=p.c.div(h()),j=p.c.h1(v()),O=p.c.div(b()),x=Object(d.g)((function(n){var t=n.title,e=n.items,r=n.history,c=n.match,i=n.routeName;return s.a.createElement(g,null,s.a.createElement(j,{onClick:function(){return r.push("".concat(c.path,"/").concat(i))}},t.toUpperCase()),s.a.createElement(O,null,e.filter((function(n,t){return t<4})).map((function(n){return s.a.createElement(f.a,{key:n.id,item:n})}))))})),y=(e(129),Object(c.b)({collections:a.b})),w=Object(r.b)(y)((function(n){var t=n.collections;return s.a.createElement("div",{className:"collections-overview"},t.map((function(n){var t=n.id,e=Object(u.a)(n,["id"]);return s.a.createElement(x,Object.assign({key:t},e))})))})),E=Object(c.b)({isLoading:a.c}),k=Object(i.d)(Object(r.b)(E),o.a)(w);t.default=k},91:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"d",(function(){return l}));var r=e(9),c=function(n){return n.shop},i=Object(r.a)([c],(function(n){return n.collections})),a=Object(r.a)([i],(function(n){return n?Object.values(n):[]})),o=function(n){return Object(r.a)([i],(function(t){return t?t[n]:null}))},u=Object(r.a)([c],(function(n){return n.isFetching})),l=Object(r.a)([c],(function(n){return!!n.collections}))},92:function(n,t,e){"use strict";var r=e(44),c=e(0),i=e.n(c),a=e(46);t.a=function(n){return function(t){var e=t.isLoading,c=Object(r.a)(t,["isLoading"]);return e?i.a.createElement(a.a,null):i.a.createElement(n,c)}}},93:function(n,t,e){"use strict";var r=e(0),c=e.n(r),i=e(18),a=e(25),o=e(10),u=e(11),l=e(43);function s(){var n=Object(o.a)(["\n  width: 10%;\n  text-align: right;\n"]);return s=function(){return n},n}function d(){var n=Object(o.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return d=function(){return n},n}function f(){var n=Object(o.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return f=function(){return n},n}function m(){var n=Object(o.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return m=function(){return n},n}function p(){var n=Object(o.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px;\n  }\n"]);return p=function(){return n},n}function b(){var n=Object(o.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]);return b=function(){return n},n}var v=u.c.div(b()),h=Object(u.c)(l.a)(p()),g=u.c.div(m(),(function(n){var t=n.imageUrl;return"url(".concat(t,")")})),j=u.c.div(f()),O=u.c.span(d()),x=u.c.span(s());t.a=Object(i.b)(null,(function(n){return{addItem:function(t){return n(Object(a.a)(t))}}}))((function(n){var t=n.item,e=n.addItem,r=t.name,i=t.price,a=t.imageUrl;return c.a.createElement(v,null,c.a.createElement(g,{className:"image",imageUrl:a}),c.a.createElement(j,null,c.a.createElement(O,null,r),c.a.createElement(x,null,i)),c.a.createElement(h,{onClick:function(){return e(t)},inverted:!0},"Add to cart"))}))}}]);
//# sourceMappingURL=5.06ad12b9.chunk.js.map