(this.webpackJsonpsearch_for_edh=this.webpackJsonpsearch_for_edh||[]).push([[0],[,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(6),a=n.n(i),s=(n(11),n(12),n(2)),o=n(3),l=function(e,t){return e.cmc<t.cmc?-1:1},d=function(e){return new Promise((function(t){var n=[],c=new Set,r="https://api.scryfall.com/cards/search?q=";e.cardName&&(r+="+name:"+e.cardName),e.idColor&&(r+="+id>="+e.idColor),"https://api.scryfall.com/cards/search?q="===r&&t(n),fetch(r+"+lang:ja").then((function(e){return e.json()})).then((function(e){e.data&&(n=Object.keys(e.data).map((function(t){return e.data[t]}))),n.forEach((function(e){return c.add(e.oracle_id)}))})).then((function(){fetch(r).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){e&&e.forEach((function(e){c.has(e.oracle_id)||n.push(e)}))})).then((function(){return t(n.sort(l))}))}))}))},u=(n(5),n(13),n(0)),j=function(e){return e.printed_name?Object(u.jsxs)("div",{children:[e.printed_name," // ",e.name]}):Object(u.jsx)("div",{children:e.name})},h=function(e){if(e.printed_text){var t=e.printed_text;return Object(u.jsx)("div",{children:t})}var n=e.oracle_text;return Object(u.jsx)("div",{children:n})},b=function(e){return Object(u.jsxs)("div",{className:"cardContainer",children:[Object(u.jsx)("div",{className:"item_title",children:"\u30ab\u30fc\u30c9\u540d"}),Object(u.jsx)("div",{className:"card_item",children:j(e)}),Object(u.jsx)("div",{className:"item_title",children:"\u56fa\u6709\u8272"}),Object(u.jsx)("div",{className:"card_item",children:e.color_identity}),Object(u.jsx)("div",{className:"item_title",children:"\u30c6\u30ad\u30b9\u30c8"}),Object(u.jsx)("div",{className:"card_item",children:h(e)})]})},f=function(e){var t=e.image_uris;return Object(u.jsxs)("div",{className:"searchResultContainer",children:[b(e),Object(u.jsx)("div",{className:"cardImage",children:Object(u.jsx)("img",{src:t.small})})]})},m=(n(15),function(e,t,n){var c=e.image_uris,r=e.card_faces.map((function(t){return t.color_identity=e.color_identity,b(t)}));return Object(u.jsxs)("div",{className:"searchResultContainer",children:[Object(u.jsxs)("div",{className:"splitContainer",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"splitCardLayout",ref:t,children:r[0]}),Object(u.jsx)("div",{style:{textAlign:"center"},children:Object(u.jsx)("button",{id:"scrollRight",type:"button",onClick:function(e){n.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},style:{display:"inline-block"},children:Object(u.jsx)("font",{style:{fontSize:"30px"},children:"\u25b6\ufe0e"})})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"splitCardLayout",ref:n,children:r[1]}),Object(u.jsx)("div",{style:{textAlign:"center"},children:Object(u.jsx)("button",{id:"scrollLeft",type:"button",onClick:function(e){t.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},style:{display:"inline-block"},children:Object(u.jsx)("font",{style:{fontSize:"30px"},children:"\u25c0"})})})]})]}),Object(u.jsx)("div",{id:"cardImage",children:Object(u.jsx)("img",{src:c.small})})]})}),x=(n(16),function(e,t,n){var c=e.card_faces[0].image_uris,r=e.card_faces[1].image_uris,i=e.card_faces.map((function(t){return t.color_identity=e.color_identity,b(t)}));return Object(u.jsx)("div",{className:"searchResultContainer",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"wrap is-front",ref:t,children:[Object(u.jsx)("div",{className:"card_front",children:Object(u.jsxs)("div",{className:"doubleFacesContainer",children:[i[0],Object(u.jsx)("div",{className:"cardImage",children:Object(u.jsx)("img",{src:c.small})})]})}),Object(u.jsx)("div",{className:"card_back",ref:n,children:Object(u.jsxs)("div",{className:"doubleFacesContainer",children:[i[1],Object(u.jsx)("div",{className:"cardImage",children:Object(u.jsx)("img",{src:r.small})})]})})]}),Object(u.jsx)("button",{id:"rotate",type:"button",className:"rotateButton",onClick:function(){t.current.classList.contains("is-front")?(t.current.classList.remove("is-front"),t.current.classList.add("is-back"),t.current.style.height=n.current.clientHeight+"px"):(t.current.classList.remove("is-back"),t.current.classList.add("is-front"))},children:"\u56de\u8ee2"})]})})}),O=function(e,t,n){return["normal","class"].includes(e.layout)?Object(u.jsx)("div",{children:f(e)}):"transform"===e.layout||"modal_dfc"===e.layout?Object(u.jsx)("div",{children:x(e,t.current[2*n],t.current[2*n+1])}):"split"===e.layout?Object(u.jsx)("div",{children:m(e,t.current[2*n],t.current[2*n+1])}):void 0},v=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:["\u30ab\u30fc\u30c9\u540d\u3000",Object(u.jsx)("input",{type:"search",value:e.searchWord,onChange:function(t){return e.handleCardNameChange(t)}})]}),Object(u.jsxs)("div",{children:["\u56fa\u6709\u8272\u3000\u3000",Object(u.jsx)("input",{type:"checkbox",name:"idColor",value:"W",onChange:function(t){return e.handleIdColorChange(t)}}),"\u767d",Object(u.jsx)("input",{type:"checkbox",name:"idColor",value:"U",onChange:function(t){return e.handleIdColorChange(t)}}),"\u9752",Object(u.jsx)("input",{type:"checkbox",name:"idColor",value:"B",onChange:function(t){return e.handleIdColorChange(t)}}),"\u9ed2",Object(u.jsx)("input",{type:"checkbox",name:"idColor",value:"R",onChange:function(t){return e.handleIdColorChange(t)}}),"\u8d64",Object(u.jsx)("input",{type:"checkbox",name:"idColor",value:"G",onChange:function(t){return e.handleIdColorChange(t)}}),"\u7dd1",Object(u.jsx)("input",{type:"checkbox",name:"idColor",value:"C",onChange:function(t){return e.handleIdColorChange(t)}}),"\u7121\u8272"]})]})};var C=r.a.forwardRef((function(e,t){return e.cardList.map((function(e,n){return O(e,t,n)}))})),p=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)({idColor:""}),l=Object(o.a)(a,2),j=l[0],h=l[1],b=Object(c.useState)(0),f=Object(o.a)(b,2),m=f[0],x=f[1],O=Object(c.useRef)(Array(400).fill().map((function(e){return r.a.createRef()})));return Object(c.useEffect)((function(){clearTimeout(m),x(setTimeout((function(){d(j).then((function(e){i(e)}))}),800))}),[j]),Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{searchWord:j.cardName,handleCardNameChange:function(e){return function(e){h(Object(s.a)(Object(s.a)({},j),{},{cardName:e.target.value}))}(e)},handleIdColorChange:function(e){return function(e){var t=j.idColor;e.target.checked?t+=e.target.value:t=t.toString().replace(e.target.value,""),h(Object(s.a)(Object(s.a)({},j),{},{idColor:t}))}(e)}}),Object(u.jsxs)("div",{children:["\u691c\u7d22\u7d50\u679c\uff1a",n.length,"\u4ef6"]}),Object(u.jsx)("div",{children:Object(u.jsx)(C,{cardList:n,ref:O})})]})};n(17);var g=function(){return Object(u.jsx)("h1",{children:"EDH\u7528\u691c\u7d22\u30c4\u30fc\u30eb"})};var y=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)(g,{})}),Object(u.jsx)("div",{className:"main",children:Object(u.jsx)(p,{})})]})};a.a.render(Object(u.jsx)(y,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.e79aa28f.chunk.js.map