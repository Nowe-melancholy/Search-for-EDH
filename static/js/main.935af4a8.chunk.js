(this.webpackJsonpsearch_for_edh=this.webpackJsonpsearch_for_edh||[]).push([[0],[,,,,,,,,function(e,n,t){},,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,,,,,,,,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(6),i=t.n(a),s=(t(17),t(18),t(2)),d="https://api.scryfall.com/cards/search?order=cmc&q=",l=function(e,n){return e.cmc<n.cmc?-1:1},o=function(e,n,t){var c=[],r=new Set,a=0,i=d;if(e.cardName&&(i+="+name:"+e.cardName),e.idColor&&(i+="+id>="+e.idColor),e.cardType&&e.cardType.forEach((function(e){i+=" t:"+e})),i===d)return n(c),void t(0);fetch(i+"+lang:ja").then((function(e){return e.json()})).then((function(e){e.data&&(c=Object.keys(e.data).map((function(n){return e.data[n]})),a=e.total_cards),c.forEach((function(e){return r.add(e.oracle_id)}))})).then((function(){fetch(i).then((function(e){return e.json()})).then((function(e){return e.total_cards&&(a=e.total_cards),e.data})).then((function(e){e&&e.forEach((function(e){r.has(e.oracle_id)||c.push(e)}))})).then((function(){n(c.sort(l)),t(a)}))}))},j=(t(8),t(19),t(0)),h=function(e){var n="";if((e.type_line.match("Legendary")&&e.type_line.match("Creature")||e.oracle_text.match("can be your commander"))&&(n="https://edhrec.com/commanders/"+e.name.replace(/, /g,"-").replace(/ /g,"-").toLowerCase()),e.printed_name){var t="http://mtgwiki.com/wiki/"+e.printed_name+"/"+e.name;return n?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:[e.printed_name," // ",e.name]})}),Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:n,style:{fontSize:13},target:"_blank",rel:"noopener noreferrer",children:"EDHREC"})})]}):Object(j.jsx)("div",{children:Object(j.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:[e.printed_name," // ",e.name]})})}var c="http://mtgwiki.com/wiki/"+e.name;return n?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:e.name})}),Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:n,style:{fontSize:13},target:"_blank",rel:"noopener noreferrer",children:"EDHREC"})})]}):Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:e.name})})},u=function(e){if(e.printed_text){var n=e.printed_text;return Object(j.jsx)("div",{children:n})}var t=e.oracle_text;return Object(j.jsx)("div",{children:t})},b=function(e){return Object(j.jsxs)("div",{className:"cardContainer",children:[Object(j.jsx)("div",{className:"item_title",children:"\u30ab\u30fc\u30c9\u540d"}),Object(j.jsx)("div",{className:"card_item",children:h(e)}),Object(j.jsx)("div",{className:"item_title",children:"\u56fa\u6709\u8272"}),Object(j.jsx)("div",{className:"card_item",children:e.color_identity}),Object(j.jsx)("div",{className:"item_title",children:"\u30c6\u30ad\u30b9\u30c8"}),Object(j.jsx)("div",{className:"card_item",children:u(e)})]})},x=function(e){var n=e.image_uris;return Object(j.jsxs)("div",{className:"searchResultContainer",children:[b(e),Object(j.jsx)("div",{className:"cardImage",children:Object(j.jsx)("img",{src:n.small})})]})},O=(t(21),function(e,n,t){var c=e.image_uris,r=e.card_faces.map(b);return Object(j.jsxs)("div",{className:"searchResultContainer",children:[Object(j.jsxs)("div",{className:"splitContainer",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"splitCardLayout",ref:n,children:r[0]}),Object(j.jsx)("div",{style:{textAlign:"center"},children:Object(j.jsx)("button",{id:"scrollRight",type:"button",onClick:function(e){t.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},style:{display:"inline-block"},children:Object(j.jsx)("font",{style:{fontSize:"30px"},children:"\u25b6\ufe0e"})})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"splitCardLayout",ref:t,children:r[1]}),Object(j.jsx)("div",{style:{textAlign:"center"},children:Object(j.jsx)("button",{id:"scrollLeft",type:"button",onClick:function(e){n.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},style:{display:"inline-block"},children:Object(j.jsx)("font",{style:{fontSize:"30px"},children:"\u25c0"})})})]})]}),Object(j.jsx)("div",{id:"cardImage",children:Object(j.jsx)("img",{src:c.small})})]})}),f=(t(22),function(e,n,t){var c=e.card_faces[0].image_uris,r=e.card_faces[1].image_uris,a=e.card_faces.map(b);return Object(j.jsx)("div",{className:"searchResultContainer",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"wrap is-front",ref:n,children:[Object(j.jsx)("div",{className:"card_front",children:Object(j.jsxs)("div",{className:"doubleFacesContainer",children:[a[0],Object(j.jsx)("div",{className:"cardImage",children:Object(j.jsx)("img",{src:c.small})})]})}),Object(j.jsx)("div",{className:"card_back",ref:t,children:Object(j.jsxs)("div",{className:"doubleFacesContainer",children:[a[1],Object(j.jsx)("div",{className:"cardImage",children:Object(j.jsx)("img",{src:r.small})})]})})]}),Object(j.jsx)("button",{id:"rotate",type:"button",className:"rotateButton",onClick:function(){n.current.classList.contains("is-front")?(n.current.classList.remove("is-front"),n.current.classList.add("is-back"),n.current.style.height=t.current.clientHeight+"px"):(n.current.classList.remove("is-back"),n.current.classList.add("is-front"))},children:"\u56de\u8ee2"})]})})}),m=function(e,n,t){return"normal"===e.layout?Object(j.jsx)("div",{children:x(e)}):"transform"===e.layout||"modal_dfc"===e.layout?Object(j.jsx)("div",{children:f(e,n.current[2*t],n.current[2*t+1])}):"split"===e.layout?Object(j.jsx)("div",{children:O(e,n.current[2*t],n.current[2*t+1])}):void 0},v=t(3),p=(t(23),t(24),t(7)),C=t.n(p);C.a.setAppElement("#root");var y=function(e){var n=e.searchedCardType||[];return Object(j.jsxs)("div",{className:"wrap",children:[Object(j.jsx)("div",{children:"\u30ab\u30fc\u30c9\u30bf\u30a4\u30d7"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"checkbox",name:"cardType",value:"creature",checked:n.includes("creature"),onChange:function(n){return e.handleCardTypeChange(n)}}),"\u30af\u30ea\u30fc\u30c1\u30e3\u30fc"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"checkbox",name:"cardType",value:"artifact",checked:n.includes("artifact"),onChange:function(n){return e.handleCardTypeChange(n)}}),"\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"checkbox",name:"cardType",value:"sorcery",checked:n.includes("sorcery"),onChange:function(n){return e.handleCardTypeChange(n)}}),"\u30bd\u30fc\u30b5\u30ea\u30fc"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"checkbox",name:"cardType",value:"instant",checked:n.includes("instant"),onChange:function(n){return e.handleCardTypeChange(n)}}),"\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"checkbox",name:"cardType",value:"enchant",checked:n.includes("enchant"),onChange:function(n){return e.handleCardTypeChange(n)}}),"\u30a8\u30f3\u30c1\u30e3\u30f3\u30c8"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"checkbox",name:"cardType",value:"planeswalker",checked:n.includes("planeswalker"),onChange:function(n){return e.handleCardTypeChange(n)}}),"\u30d7\u30ec\u30a4\u30f3\u30ba\u30a6\u30a9\u30fc\u30ab\u30fc"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"checkbox",name:"cardType",value:"land",checked:n.includes("land"),onChange:function(n){return e.handleCardTypeChange(n)}}),"\u571f\u5730"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"checkbox",name:"cardType",value:"legendary",checked:n.includes("legendary"),onChange:function(n){return e.handleCardTypeChange(n)}}),"\u4f1d\u8aac"]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return e.clilckCloseModal()},children:"\u9589\u3058\u308b"})})]})},g=function(e){var n=Object(c.useState)(!1),t=Object(s.a)(n,2),r=t[0],a=t[1],i=function(n){var t=e.searchConditions.idColor||"";n.target.checked?t+=n.target.value:t=t.toString().replace(n.target.value,""),e.setSearchConditions(Object(v.a)(Object(v.a)({},e.searchConditions),{},{idColor:t}))};return Object(j.jsxs)("div",{className:"searchContainer",children:[Object(j.jsx)("div",{className:"search_title",children:"\u30ab\u30fc\u30c9\u540d"}),Object(j.jsx)("div",{className:"search_item",children:Object(j.jsx)("input",{type:"search",value:e.searchConditions.searchWord,onChange:function(n){return function(n){e.setSearchConditions(Object(v.a)(Object(v.a)({},e.searchConditions),{},{cardName:n.target.value}))}(n)}})}),Object(j.jsx)("div",{className:"search_title",children:"\u56fa\u6709\u8272"}),Object(j.jsxs)("div",{className:"search_item",children:[Object(j.jsx)("input",{type:"checkbox",name:"idColor",value:"W",onChange:function(e){return i(e)}}),"\u767d",Object(j.jsx)("input",{type:"checkbox",name:"idColor",value:"U",onChange:function(e){return i(e)}}),"\u9752",Object(j.jsx)("input",{type:"checkbox",name:"idColor",value:"B",onChange:function(e){return i(e)}}),"\u9ed2",Object(j.jsx)("input",{type:"checkbox",name:"idColor",value:"R",onChange:function(e){return i(e)}}),"\u8d64",Object(j.jsx)("input",{type:"checkbox",name:"idColor",value:"G",onChange:function(e){return i(e)}}),"\u7dd1",Object(j.jsx)("input",{type:"checkbox",name:"idColor",value:"C",onChange:function(e){return i(e)}}),"\u7121\u8272"]}),Object(j.jsx)("div",{className:"search_title",children:"\u30ab\u30fc\u30c9\u30bf\u30a4\u30d7"}),Object(j.jsxs)("div",{className:"search_item",children:[Object(j.jsx)("button",{onClick:function(){return a(!0)},children:"\u5225\u753b\u9762\u3067\u9078\u629e"}),Object(j.jsx)(C.a,{isOpen:r,className:"modal",children:Object(j.jsx)(y,{handleCardTypeChange:function(n){return function(n){var t=e.searchConditions.cardType||[];n.target.checked?t.push(n.target.value):t=t.filter((function(e){return e!==n.target.value})),e.setSearchConditions(Object(v.a)(Object(v.a)({},e.searchConditions),{},{cardType:t}))}(n)},clilckCloseModal:function(){return a(!1)},searchedCardType:e.searchConditions.cardType})})]})]})};var k=r.a.forwardRef((function(e,n){return e.cardList.map((function(e,t){return m(e,n,t)}))})),_=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)({}),d=Object(s.a)(i,2),l=d[0],h=d[1],u=Object(c.useState)(0),b=Object(s.a)(u,2),x=b[0],O=b[1],f=Object(c.useState)(0),m=Object(s.a)(f,2),v=m[0],p=m[1],C=Object(c.useRef)(Array(400).fill().map((function(e){return r.a.createRef()})));return Object(c.useEffect)((function(){clearTimeout(v),p(setTimeout((function(){o(l,a,O)}),800))}),[l]),Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{searchConditions:l,setSearchConditions:function(e){return h(e)}}),Object(j.jsxs)("div",{children:["\u691c\u7d22\u7d50\u679c\uff1a",x,"\u4ef6"]}),Object(j.jsx)("div",{children:Object(j.jsx)(k,{cardList:t,ref:C})})]})};t(36);var N=function(){return Object(j.jsx)("h1",{children:"EDH\u7528\u691c\u7d22\u30c4\u30fc\u30eb"})};var T=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)(N,{})}),Object(j.jsx)("div",{className:"main",children:Object(j.jsx)(_,{})})]})};i.a.render(Object(j.jsx)(T,{}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.935af4a8.chunk.js.map