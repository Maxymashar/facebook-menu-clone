(this["webpackJsonpfb-menu-clone"]=this["webpackJsonpfb-menu-clone"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),o=n(2),j=n.n(o),r=n(4),u=n(17),x=function(e){var t=e.icon,n=e.text,s=e.reverse,i=e.gotoMenu;return Object(c.jsxs)("div",{className:"menu-item",style:s?{flexDirection:"row-reverse"}:{},onClick:function(){i&&i()},children:[t&&Object(c.jsx)("span",{className:"icon",children:t}),n&&Object(c.jsx)("span",{className:"text",children:n})]})},a=function(e){var t=e.children;return Object(c.jsx)("div",{className:"menu",children:t})},l=function(){var e=Object(s.useState)("settings"),t=Object(r.a)(e,2),n=t[0],i=t[1],o=Object(s.useRef)(null),j=Object(s.useState)(null),l=Object(r.a)(j,2),b=l[0],O=l[1];function m(e){O(e.offsetHeight+32)}return Object(s.useEffect)((function(){O(o.current.offsetHeight)}),[o]),Object(c.jsxs)("div",{className:"dropdown",style:{height:b},ref:o,children:[Object(c.jsx)(u.a,{in:"main"===n,timeout:500,classNames:"menu-primary",unmountOnExit:!0,onEnter:m,children:Object(c.jsxs)(a,{children:[Object(c.jsx)(x,{icon:"\ud83d\ude12",text:"not happy",reverse:!0}),Object(c.jsx)(x,{icon:"\u2699",text:"settings",gotoMenu:function(){i("settings")}}),Object(c.jsx)(x,{icon:"\ud83d\ude0e",text:"cool"}),Object(c.jsx)(x,{icon:"\ud83d\ude0d",text:"love"}),Object(c.jsx)(x,{icon:"\ud83d\ude0e",text:"cool"}),Object(c.jsx)(x,{icon:"\u2753",text:"Help Menu",reverse:!0,gotoMenu:function(){i("help")}})]})}),Object(c.jsx)(u.a,{in:"settings"===n,timeout:500,classNames:"menu-secondary",unmountOnExit:!0,onEnter:m,children:Object(c.jsxs)(a,{children:[Object(c.jsx)(x,{icon:"\ud83d\ude12",text:"not happy"}),Object(c.jsx)(x,{icon:"\ud83e\udd23",text:"main",gotoMenu:function(){i("main")}})]})}),Object(c.jsx)(u.a,{in:"help"===n,timeout:500,classNames:"menu-secondary",unmountOnExit:!0,onEnter:m,children:Object(c.jsxs)(a,{children:[Object(c.jsx)(x,{icon:"\u2753",text:"Help"}),Object(c.jsx)(x,{icon:"\u2753",text:"Help"}),Object(c.jsx)(x,{icon:"\u2753",text:"Help"}),Object(c.jsx)(x,{icon:"\ud83e\udd23",text:"main",gotoMenu:function(){i("main")}})]})})]})},b=function(){return Object(c.jsx)(l,{})};var O=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(b,{})})};n(14);j.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f909b3ad.chunk.js.map