"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[88],{4088:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(9439),a=n(2791),i=n(9434),o=n(7239),l=n(9682),s=n(4554),c=n(1889),d=n(232),u=n(6729),m=n(184),h=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],h=t[1],x=(0,a.useState)(""),p=(0,r.Z)(x,2),f=p[0],b=p[1],j=(0,i.v9)(l.el),v=(0,i.I0)(),g=function(e){var t=e.target,n=t.value;"name"===t.name?h(n):b(n)};return(0,m.jsxs)(s.Z,{component:"form",onSubmit:function(e){e.preventDefault(),function(e){var t=j.items.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}));if(t)return alert("".concat(t.name," is already in contacts"));v((0,o.yH)(e)).unwrap().then((function(){v((0,o.mR)())})).catch((function(e){console.log(e)}))}({name:n,number:f}),h(""),b("")},sx:{mt:3},children:[(0,m.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,m.jsx)(c.ZP,{item:!0,xs:12,children:(0,m.jsx)(d.Z,{type:"text",name:"name",onChange:g,value:n,placeholder:"Darius Black",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,fullWidth:!0,label:"Name"})}),(0,m.jsx)(c.ZP,{item:!0,xs:12,children:(0,m.jsx)(d.Z,{inputProps:{inputMode:"numeric",pattern:"[0-9+]*"},type:"tel",name:"number",onChange:g,value:f,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,fullWidth:!0,label:"Number",placeholder:"+31 636363634"})})]}),(0,m.jsx)(u.Z,{type:"submit",variant:"contained",sx:{margin:"30px auto 20px",display:"block"},children:"Add contact"})]})},x=n(1413),p=n(3366);var f=n(7247),b=(0,n(9201).Z)((0,m.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit"),j=n(5632),v=["sx"];function g(e){var t=e.sx,n=function(e,t){if(null==e)return{};var n,r,a=(0,p.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,v);return(0,m.jsx)(s.Z,(0,x.Z)({sx:(0,x.Z)({bgcolor:function(e){return"dark"===e.palette.mode?"#101010":"#fff"},color:function(e){return"dark"===e.palette.mode?"grey.300":"grey.800"},border:"1px solid",borderColor:function(e){return"dark"===e.palette.mode?"grey.800":"grey.300"},p:1,m:1,borderRadius:2,fontSize:"0.875rem",fontWeight:"700"},t)},n))}var y=function(e){var t=e.name,n=e.number,r=e.onClickDelete,a=e.id,o=e.el,l=(0,i.I0)();return(0,m.jsx)("div",{style:{width:"100%"},children:(0,m.jsxs)(s.Z,{sx:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,m.jsxs)(g,{sx:{width:"300px",height:"35px",display:"flex",alignItems:"center"},children:[(0,m.jsxs)("h3",{children:[t,":"]}),(0,m.jsx)("h3",{style:{marginLeft:"10px"},children:n})]}),(0,m.jsx)(g,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:"35px"},children:(0,m.jsx)(u.Z,{variant:"text",type:"button",startIcon:(0,m.jsx)(b,{}),onClick:function(){return e=o,void l((0,j.h7)(e));var e},children:"Edit"})}),(0,m.jsx)(g,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:"35px"},children:(0,m.jsx)(u.Z,{variant:"text",type:"button",startIcon:(0,m.jsx)(f.Z,{}),onClick:function(){return r(a)},children:"Delete"})})]})})},Z="ContactList_list__csErn",w=n(890),C=n(237),k=function(e){return e.modal.showModal},N=function(e){return e.modal.element},P=n(1686),I=n.n(P),M={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function D(){var e=(0,i.I0)(),t=(0,i.v9)(k),n=(0,i.v9)(N),r=function(){return e((0,j.Mr)())};return t&&(0,m.jsx)("div",{children:(0,m.jsx)(C.Z,{open:t,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,m.jsxs)(s.Z,{sx:M,children:[(0,m.jsx)(w.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Enter edits"}),(0,m.jsxs)(s.Z,{component:"form",onSubmit:function(t){t.preventDefault();var a=new FormData(t.currentTarget);!function(t,n){e((0,o.hx)(t,n)).unwrap().then((function(){e((0,o.mR)())})).catch((function(e){I().Notify.failure("Edit failed"),console.log(e)}))}({name:a.get("name"),number:a.get("number"),id:n.id}),r()},sx:{mt:3},children:[(0,m.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,m.jsx)(c.ZP,{item:!0,xs:12,children:(0,m.jsx)(d.Z,{type:"text",defaultValue:n.name,name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",fullWidth:!0,label:"Name"})}),(0,m.jsx)(c.ZP,{item:!0,xs:12,children:(0,m.jsx)(d.Z,{inputProps:{inputMode:"numeric",pattern:"[0-9+]*"},type:"tel",defaultValue:n.number,name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",fullWidth:!0,label:"Number"})})]}),(0,m.jsx)(u.Z,{type:"submit",variant:"contained",sx:{margin:"30px auto 20px",display:"block"},children:"Edit contact"})]})]})})})}var S=function(){var e,t=(0,i.v9)(l.el),n=(0,i.v9)(l.Oc),r=(0,i.I0)(),a=function(e){r((0,o.xX)(e)).unwrap().then((function(){r((0,o.mR)())})).catch((function(e){console.log(e)}))};e=t.items.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));var c=function(e){return e.map((function(e){return(0,m.jsx)(s.Z,{component:"li",sx:{display:"flex",width:"100%"},children:(0,m.jsx)(y,{el:e,name:e.name,number:e.number,onClickDelete:a,id:e.id})},e.id)}))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("ul",{className:Z,children:c(e||t.items)}),(0,m.jsx)(D,{})]})},L=n(1106),O=function(){var e=(0,i.I0)();return(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(w.Z,{component:"h3",variant:"h3",children:"Filter contacts by Name"}),(0,m.jsx)(d.Z,{sx:{mt:3},type:"text",onChange:function(t){var n=t.target.value;e((0,L.xO)(n))},placeholder:"Darius Black",fullWidth:!0,label:"Name"})]})},z=function(){var e=(0,i.v9)(l.NM);return(0,m.jsxs)(s.Z,{sx:{margin:"20px auto 0px",width:"600px"},children:[(0,m.jsx)(w.Z,{component:"h2",variant:"h3",children:"Create contact"}),(0,m.jsx)(h,{}),e&&I().Notify.failure("Something with wrong"),(0,m.jsx)(O,{}),(0,m.jsx)(S,{})]})}},7247:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),i=n(184),o=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=o}}]);
//# sourceMappingURL=88.26a1c95a.chunk.js.map