import{s as j,r as l,j as t,P as h,b as v,u as _,c as b,d as B,B as E,e as H,A as I,f as y,g as k}from"./sanity-aacb020c.js";function C(e){const{actionHandlers:n,index:o,menuItems:s,menuItemGroups:r,title:i}=e,{features:a}=_();return!(s!=null&&s.length)&&!i?null:t.jsx(b,{actions:t.jsx(B,{menuItems:s,menuItemGroups:r,actionHandlers:n}),backButton:a.backButton&&o>0&&t.jsx(E,{as:H,"data-as":"a",icon:I,mode:"bleed"}),title:i})}var d=Object.freeze,g=Object.defineProperty,w=(e,n)=>d(g(e,"raw",{value:d(n||e.slice())})),u;const A=j(y)(u||(u=w([`
  position: relative;
`])));function R(e){const{children:n}=e,{collapsed:o}=k();return t.jsx(A,{hidden:o,height:"fill",overflow:"auto",children:n})}function G(e){const{index:n,pane:o,paneKey:s,...r}=e,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:U,...x}=o,[c,P]=l.useState(null);return t.jsxs(h,{id:s,minWidth:320,selected:r.isSelected,children:[t.jsx(C,{actionHandlers:c==null?void 0:c.actionHandlers,index:n,menuItems:m,menuItemGroups:p,title:f}),t.jsxs(R,{children:[v.isValidElementType(a)&&l.createElement(a,{...r,...x,ref:P,child:i,paneKey:s}),l.isValidElement(a)&&a]})]})}export{G as default};
