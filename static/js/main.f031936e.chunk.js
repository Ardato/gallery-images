(this["webpackJsonpgallery-image"]=this["webpackJsonpgallery-image"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/spinner.235b9b3e.gif"},17:function(e,t,a){e.exports=a.p+"static/media/our-gallery.6c980c6d.png"},18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=(a(23),a(2)),i=a.n(s),l=a(4),u=a(3),m=a(5),p=a.n(m),d=function(e){var t=e.getQuery,a=Object(n.useState)(""),c=Object(u.a)(a,2),o=c[0],s=c[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(e){return a=e.target.value,s(a),void t(a);var a},value:o})),r.a.createElement("div",null))};var f=function(e){var t=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.largeImageURL,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"comments:"))," ",t.comments,r.a.createElement("li",null,r.a.createElement("strong",null,"likes:")),t.likes,r.a.createElement("li",null,r.a.createElement("strong",null,"downloads:")),t.downloads))))},v=a(16),h=a.n(v);var E=function(){return r.a.createElement("div",{className:"center"},r.a.createElement("img",{src:h.a}))};var g=function(e){var t=e.isLoading,a=e.items;return t?r.a.createElement(E,null):r.a.createElement("section",{className:"cards"},a.map((function(e){return r.a.createElement(f,{key:e.id,item:e})})))},b=a(17),y=a.n(b);var k=function(){return r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:y.a,alt:""}))};a(42);var w=function(){var e="18531059-fadd493790965810e796ee1b9",t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!0),m=Object(u.a)(s,2),f=m[0],v=m[1],h=Object(n.useState)(""),E=Object(u.a)(h,2),b=E[0],y=E[1];Object(n.useEffect)((function(){(function(){var t=Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://pixabay.com/api/?key=".concat(e,"&q=").concat(b,"=photo"));case 2:a=t.sent,console.log(a.data.hits),o(a.data.hits),v(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[b]);var w=function(){var t=Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://pixabay.com/api/?key=".concat(e,"&q=sport=photo"));case 2:a=t.sent,o(a.data.hits);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://pixabay.com/api/?key=".concat(e,"&q=food=photo"));case 2:a=t.sent,o(a.data.hits);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://pixabay.com/api/?key=".concat(e,"&q=music=photo"));case 2:a=t.sent,o(a.data.hits);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(d,{getQuery:function(e){return y(e)}}),r.a.createElement(k,null),r.a.createElement("button",{className:"btn",onClick:w},"Sport"),r.a.createElement("button",{className:"btn",onClick:x},"Food"),r.a.createElement("button",{className:"btn",onClick:j},"Music"),r.a.createElement(g,{isLoading:f,items:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.f031936e.chunk.js.map