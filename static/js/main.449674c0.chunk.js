(this.webpackJsonpsearch_for_edh=this.webpackJsonpsearch_for_edh||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),r=n.n(a),s=(n(9),n(3)),i=(n(10),n(0));var u=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),u=Object(s.a)(r,2),j=u[0],o=u[1],h=j instanceof Array?j.map((function(e){return function(e){return e.image_uris?Object(i.jsx)("li",{children:Object(i.jsx)("img",{src:e.image_uris.small})},e.id):Object(i.jsx)("li",{})}(e)})):[];return Object(i.jsxs)("div",{children:["\u30ab\u30fc\u30c9\u540d\u3000",Object(i.jsx)("input",{type:"search",value:n,onChange:function(e){a(e.target.value),fetch("https://api.scryfall.com/cards/search?q=lang:ja+name="+e.target.value).then((function(e){return e.json()})).then((function(e){o(e.data)}))}}),Object(i.jsx)("ul",{children:h})]})};r.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.449674c0.chunk.js.map