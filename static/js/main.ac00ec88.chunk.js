(this.webpackJsonpme=this.webpackJsonpme||[]).push([[0],{53:function(o,t,e){},54:function(o,t,e){"use strict";e.r(t);var i=e(0),n=e(1),r=e.n(n),c=e(4),s=e.n(c),l=e(3),d=e(2);function a(o){var t=o.height,e=void 0===t?"20vh":t,n=o.color,r=void 0===n?"#eee":n;return Object(i.jsx)("div",{style:{height:e,backgroundColor:r,width:"100vw"}})}var j=e(9),h=e(8);function u(o){var t=o.to,e=void 0===t?"":t,r=o.color,c=void 0===r?"#fff":r,s=o.toolTip,a=void 0===s?"":s,u=Object(n.useState)(!1),p=Object(l.a)(u,2),v=p[0],b=p[1];function w(){b(!v)}return Object(i.jsx)(d.Spring,{to:{size:v?"60px":"40px",marginTop:v?"10px":"0",marginLeft:v?"-10px":"0",opacity:v?1:0},children:function(o){return Object(i.jsxs)("div",{style:{display:"flex",width:"auto",justifyContent:"row",alignItems:"center"},children:[Object(i.jsx)(h.Link,{to:e,smooth:!0,onMouseEnter:w,onMouseLeave:w,duration:"500",children:Object(i.jsx)(j.a,{color:c,size:o.size,style:{cursor:"pointer",marginLeft:"".concat(o.marginLeft),marginTop:"".concat(o.marginTop),display:"inline"}})}),Object(i.jsx)("h5",{style:{color:"".concat(c),opacity:"".concat(o.opacity),display:"inline-block"},children:a})]})}})}var p="#fff",v="#99ced3",b="#DB925A";function w(o){var t=o.title,e=void 0===t?"Title":t,n=o.style,r=void 0===n?{}:n,c=o.textColor,s=void 0===c?"white":c,l=o.downArrowTo,a=void 0===l?"":l,j=o.downArrowToolTip,h=void 0===j?"":j,v=[];return v.push(Object(i.jsx)("h1",{style:{fontSize:"6rem",color:"".concat(s)},children:e},"1"),Object(i.jsx)("h2",{style:{color:"".concat(s)},children:"Part III Software Engineering Student at UoA"},"2"),Object(i.jsx)("h2",{style:{color:"".concat(s)},children:"Always looking to learn"},"3"),Object(i.jsx)("h2",{style:{color:"".concat(s)},children:"Loves dogs"},"4"),Object(i.jsx)("div",{style:{marginTop:"2.5rem"},children:Object(i.jsx)(u,{to:a,color:p,toolTip:h})})),Object(i.jsx)("div",{style:r,children:Object(i.jsx)(d.Trail,{from:{marginTop:"-10rem"},to:{marginTop:"0"},config:d.config.gentle,items:v,keys:function(o){return o.key},delay:"500",children:function(o){return function(t){return Object(i.jsx)("div",{style:t,children:o})}}})})}function f(o){for(var t=o.downArrowTo,e=void 0===t?"":t,r=o.title,c=void 0===r?"Title":r,s=o.downArrowToolTip,j=void 0===s?"":s,h=o.id,u=void 0===h?"":h,p=Object(n.useState)(!1),b=Object(l.a)(p,2),f=b[0],g=b[1],x=v,T=[],m=0;m<5;m++)T.push(Object(i.jsx)(a,{height:"20vh",color:x},m));return Object(i.jsxs)("div",{style:{width:"100vw",height:"100vh"},id:u,children:[Object(i.jsx)(w,{title:c,style:{margin:"25vh 0 0 15vw",position:"absolute",overflowY:"hidden"},downArrowTo:e,downArrowToolTip:j}),f?Object(i.jsx)("div",{style:{height:"100vh",width:"100vw",backgroundColor:"".concat(x)}}):Object(i.jsx)(d.Trail,{items:T,from:{marginLeft:"-100vw"},to:{marginLeft:"0"},keys:function(o){return o.key},config:d.config.slow,onRest:function(){return setTimeout((function(){return g(!0)}),1200)},children:function(o){return function(t){return Object(i.jsx)("div",{style:t,children:o})}}})]})}function g(o){var t=o.to,e=void 0===t?"":t,r=o.color,c=void 0===r?"#fff":r,s=o.toolTip,a=void 0===s?"":s,u=Object(n.useState)(!1),p=Object(l.a)(u,2),v=p[0],b=p[1];function w(){b(!v)}return Object(i.jsx)(d.Spring,{to:{size:v?"60px":"40px",marginLeft:v?"-10px":"0",marginBottom:v?"10px":"0",opacity:v?"1":"0"},children:function(o){return Object(i.jsxs)("div",{style:{cursor:"pointer",display:"flex",justifyContent:"row",alignItems:"center"},children:[Object(i.jsx)(h.Link,{to:e,smooth:!0,onMouseEnter:w,onMouseLeave:w,duration:"500",children:Object(i.jsx)(j.b,{color:c,size:o.size,style:{cursor:"pointer",marginLeft:"".concat(o.marginLeft),marginBottom:"".concat(o.marginBottom)}})}),Object(i.jsx)("h5",{style:{color:"".concat(c),opacity:"".concat(o.opacity)},children:a})]})}})}function x(o){var t=o.upArrowTo,e=void 0===t?"":t,n=o.downArrowTo,r=void 0===n?"":n,c=o.upArrowToolTip,s=void 0===c?"":c,l=o.downArrowToolTip,d=void 0===l?"":l,a=o.id,j=void 0===a?"":a;return Object(i.jsx)("div",{style:{height:"100vh",backgroundColor:"#fff"},id:j,children:Object(i.jsxs)("div",{style:{margin:"25vh 0 0 15vw",position:"absolute"},children:[Object(i.jsx)(g,{to:e,color:b,toolTip:s}),Object(i.jsx)("h1",{style:{fontSize:"6rem",color:"".concat(b)},children:"About Me"}),Object(i.jsxs)("div",{style:{width:"40vw",marginBottom:"2.5rem"},children:[Object(i.jsx)("h2",{style:{color:"".concat(b),marginBottom:"1rem"},children:"Hey there! I'm a Penultimate Year Software Engineering Student at the University of Auckland. I'm passionate about what I do with a firm appreciation for good design. I enjoy photography, painting, hiking, running, and playing with dogs."}),Object(i.jsx)("h5",{style:{color:"".concat(b)},children:"If only I had a dog."})]}),Object(i.jsx)(u,{to:r,color:b,toolTip:d})]})})}function T(o){var t=o.id,e=void 0===t?"":t,n=o.upArrowTo,r=void 0===n?"":n,c=o.downArrowTo,s=void 0===c?"":c,l=o.upArrowToolTip,d=void 0===l?"":l,a=o.downArrowToolTip,j=void 0===a?"":a;return Object(i.jsx)("div",{id:e,style:{height:"100vh",width:"100vw",backgroundColor:"".concat(b)},children:Object(i.jsxs)("div",{style:{margin:"25vh 0 0 15vw",position:"absolute"},children:[Object(i.jsx)(g,{to:r,color:p,toolTip:d}),Object(i.jsx)("h1",{style:{fontSize:"6rem",color:"".concat(p)},children:"Technologies"}),Object(i.jsx)(u,{to:s,color:p,toolTip:j})]})})}e(53);function m(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(f,{title:"Beverley Sun :-)",downArrowTo:"about",downArrowToolTip:"about",id:"splash"}),Object(i.jsx)(x,{upArrowTo:"splash",downArrowTo:"technologies",upArrowToolTip:"home",downArrowToolTip:"technologies",id:"about"}),Object(i.jsx)(T,{upArrowTo:"about",downArrowTo:"",upArrowToolTip:"about",downArrowToolTip:"somewhere",id:"technologies"})]})}s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.ac00ec88.chunk.js.map