(this.webpackJsonpsearch_for_edh=this.webpackJsonpsearch_for_edh||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(5),i=c.n(a),r=(c(10),c(11),c(4)),s=c(3),d=(c(12),function(e){return new Promise((function(t){fetch("https://api.scryfall.com/cards/search?q=lang:ja+name="+e.cardName).then((function(e){return e.json()})).then((function(e){t(e.data)}))}))}),j=c(0);var l=function(e){return Object(j.jsxs)("div",{children:["\u30ab\u30fc\u30c9\u540d\u3000",Object(j.jsx)("input",{type:"search",value:e.searchWord,onChange:function(t){return e.handleChange(t)}})]})};var u=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)({}),u=Object(s.a)(i,2),h=u[0],o=u[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){d(h).then((function(e){a(e?e.map((function(e){return function(e){var t=e.image_uris?e.image_uris:{};return Object(j.jsxs)("div",{className:"searchResultContainer",children:[Object(j.jsxs)("div",{className:"cardContainer",children:[Object(j.jsx)("div",{className:"item_title",children:"\u65e5\u672c\u8a9e\u540d"}),Object(j.jsx)("div",{className:"card_item",children:e.printed_name}),Object(j.jsx)("div",{className:"item_title",children:"\u82f1\u8a9e\u540d"}),Object(j.jsx)("div",{className:"card_item",children:e.name}),Object(j.jsx)("div",{className:"item_title",children:"\u56fa\u6709\u8272"}),Object(j.jsx)("div",{className:"card_item",children:e.color_identity}),Object(j.jsx)("div",{className:"item_title",children:"\u30c6\u30ad\u30b9\u30c8"}),Object(j.jsx)("div",{className:"card_item",children:e.printed_text})]}),Object(j.jsx)("div",{id:"cardImage",children:Object(j.jsx)("img",{src:t.small})})]})}(e)})):[])}))}),500);return function(){clearTimeout(e)}}),[h]),Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{searchWord:h.cardName,handleChange:function(e){return function(e){o(Object(r.a)(Object(r.a)({},h),{},{cardName:e.target.value}))}(e)}}),Object(j.jsx)("div",{children:c})]})};c(14);var h=function(){return Object(j.jsx)("h1",{children:"EDH\u7528\u691c\u7d22\u30c4\u30fc\u30eb"})};var o=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)(h,{})}),Object(j.jsx)("div",{className:"main",children:Object(j.jsx)(u,{})})]})};i.a.render(Object(j.jsx)(o,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.0762cb3e.chunk.js.map