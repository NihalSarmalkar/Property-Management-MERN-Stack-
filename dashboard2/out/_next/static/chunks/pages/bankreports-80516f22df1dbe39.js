(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{3441:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var i=r(n(4938)),a=n(5893),o=(0,i.default)((0,a.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");t.Z=o},6336:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(1420);function i(e){return(0,r.Z)("MuiListItemText",e)}const a=(0,n(1271).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=a},431:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var r=n(3366),i=n(7462),a=n(7294),o=(n(5697),n(6010)),s=n(7463),l=n(1796),d=n(1496),c=n(3616),u=n(9773),p=n(7739),m=n(8974),h=n(1705),x=n(5097),Z=n(1271);var v=(0,Z.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),b=n(6336),f=n(1420);function g(e){return(0,f.Z)("MuiMenuItem",e)}var j=(0,Z.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),y=n(5893);const w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],C=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,i.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${j.selected}`]:{backgroundColor:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${j.focusVisible}`]:{backgroundColor:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${j.selected}:hover`]:{backgroundColor:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${j.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${j.disabled}`]:{opacity:e.palette.action.disabledOpacity},[`& + .${x.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${x.Z.inset}`]:{marginLeft:52},[`& .${b.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${b.Z.inset}`]:{paddingLeft:36},[`& .${v.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${v.root} svg`]:{fontSize:"1.25rem"}}))));var M=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:d="li",dense:p=!1,divider:x=!1,disableGutters:Z=!1,focusVisibleClassName:v,role:b="menuitem",tabIndex:f}=n,j=(0,r.Z)(n,w),M=a.useContext(u.Z),S={dense:p||M.dense||!1,disableGutters:Z},E=a.useRef(null);(0,m.Z)((()=>{l&&E.current&&E.current.focus()}),[l]);const N=(0,i.Z)({},n,{dense:S.dense,divider:x,disableGutters:Z}),T=(e=>{const{disabled:t,dense:n,divider:r,disableGutters:a,selected:o,classes:l}=e,d={root:["root",n&&"dense",t&&"disabled",!a&&"gutters",r&&"divider",o&&"selected"]},c=(0,s.Z)(d,g,l);return(0,i.Z)({},l,c)})(n),k=(0,h.Z)(E,t);let I;return n.disabled||(I=void 0!==f?f:-1),(0,y.jsx)(u.Z.Provider,{value:S,children:(0,y.jsx)(C,(0,i.Z)({ref:k,role:b,tabIndex:I,component:d,focusVisibleClassName:(0,o.Z)(T.focusVisible,v)},j,{ownerState:N,classes:T}))})}))},2882:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(7462),i=n(3366),a=n(7294),o=(n(5697),n(6010)),s=n(7463),l=n(3616),d=n(1496),c=n(1420);function u(e){return(0,c.Z)("MuiTableContainer",e)}(0,n(1271).Z)("MuiTableContainer",["root"]);var p=n(5893);const m=["className","component"],h=(0,d.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var x=a.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiTableContainer"}),{className:a,component:d="div"}=n,c=(0,i.Z)(n,m),x=(0,r.Z)({},n,{component:d}),Z=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(x);return(0,p.jsx)(h,(0,r.Z)({ref:t,as:d,className:(0,o.Z)(Z.root,a),ownerState:x},c))}))},772:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bankreports",function(){return n(516)}])},516:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(7294),a=n(9008),o=n(657),s=n(1057),l=n(7357),d=n(7948),c=n(4054),u=n(7312),p=n(3575),m=n(4674),h=n(6447),x=n(1425),Z=n(6580),v=n(135),b=n(7645),f=n(7906),g=n(295),j=n(3252),y=n(2882),w=n(3184),C=n(3816),M=n(5113),S=n(431),E=n(3441);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T=[{value:"Enable the award"},{value:"Expire the award"}],k=function(){var e=N(i.useState(!1),2),t=e[0],n=e[1],h=N(i.useState(0),2),k=(h[0],h[1]),I=N(i.useState(0),2),F=(I[0],I[1]),O=N(i.useState("Enable the award"),2),P=O[0],R=O[1],$=function(){n(!1)},_=[{sl:1,awardPoints:2500,status:"Not Expired"},{sl:2,awardPoints:500,status:"Not Expired"},{sl:3,awardPoints:850,status:"Not Expired"}];i.useEffect((function(){var e=0;_.map((function(t){e+=t.awardPoints})),k(e)}),[]);var A=N(i.useState("January"),2),V=A[0],W=A[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Z,{open:t,onClose:$,"aria-labelledby":"alert-dialog-title",fullWidth:!0,maxWidth:"sm","aria-describedby":"alert-dialog-description",children:[(0,r.jsx)(b.Z,{children:"Assign Awards"}),(0,r.jsxs)(Z.Z,{children:[(0,r.jsx)(v.Z,{id:"Reward-point-basic",label:"Reward point",variant:"outlined",fullWidth:!0,type:"number",sx:{marginTop:"1rem"}}),(0,r.jsx)(v.Z,{id:"outlined-select-status",select:!0,label:"Status",value:P,onChange:function(e){R(e.target.value)},SelectProps:{native:!0},fullWidth:!0,sx:{marginTop:"1rem"},children:T.map((function(e){return(0,r.jsx)("option",{value:e.value,children:e.value},e.value)}))}),(0,r.jsx)(v.Z,{id:"description-basic",label:"Description",variant:"outlined",fullWidth:!0,multiline:!0,rows:2,sx:{marginTop:"1rem"}})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(s.Z,{color:"error",onClick:$,autoFocus:!0,children:"Cancel"}),(0,r.jsx)(s.Z,{color:"primary",onClick:function(){var e=0;_.map((function(t){e+=t.awardPoints})),F(e),k(0),n(!1)},autoFocus:!0,children:"Assign"})]})]}),(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Bank Reports"})}),(0,r.jsx)(l.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,r.jsxs)(d.Z,{maxWidth:"xl",children:[(0,r.jsxs)(d.Z,{fullWidth:!0,sx:{display:"flex",justifyContent:"space-between",mb:2},children:[(0,r.jsxs)(c.Z,{sx:{width:"50%"},children:[(0,r.jsx)(u.Z,{id:"demo-simple-select-label",children:"Month"}),(0,r.jsxs)(p.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:V,label:"Month",onChange:function(e){W(e.target.value)},children:[(0,r.jsx)(S.Z,{value:"January",children:"January"}),(0,r.jsx)(S.Z,{value:"February",children:"February"}),(0,r.jsx)(S.Z,{value:"March",children:"March"}),(0,r.jsx)(S.Z,{value:"April",children:"April"}),(0,r.jsx)(S.Z,{value:"May",children:"May"}),(0,r.jsx)(S.Z,{value:"June",children:"June"}),(0,r.jsx)(S.Z,{value:"July",children:"July"}),(0,r.jsx)(S.Z,{value:"August",children:"August"}),(0,r.jsx)(S.Z,{value:"September",children:"September"}),(0,r.jsx)(S.Z,{value:"October",children:"October"}),(0,r.jsx)(S.Z,{value:"November",children:"November"}),(0,r.jsx)(S.Z,{value:"December",children:"December"})]})]}),(0,r.jsx)(s.Z,{sx:{float:"right",mb:2},variant:"contained",color:"primary",children:"Download CSV Report"})]}),(0,r.jsx)(y.Z,{component:M.Z,children:(0,r.jsxs)(f.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,r.jsx)(w.Z,{children:(0,r.jsxs)(C.Z,{children:[(0,r.jsx)(j.Z,{children:"Sl No."}),(0,r.jsx)(j.Z,{align:"center",children:"Case Name"}),(0,r.jsx)(j.Z,{align:"center",children:"Submitted On"}),(0,r.jsx)(j.Z,{align:"center",children:"Type"}),(0,r.jsx)(j.Z,{align:"center",children:"Action"})]})}),(0,r.jsx)(g.Z,{children:[{id:1,name:"Testing",date:"27-10-22",type:"Expired"},{id:2,name:"Completed",date:"27-10-22",type:"Expired"},{id:3,name:"Download",date:"27-10-22",type:"Expired"},{id:4,name:"Completed",date:"27-10-22",type:"Expired"},{id:5,name:"Completed",date:"27-10-22",type:"Expired"}].map((function(e){return(0,r.jsxs)(C.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,r.jsx)(j.Z,{component:"th",scope:"row",children:e.id}),(0,r.jsx)(j.Z,{align:"center",children:e.name}),(0,r.jsxs)(j.Z,{align:"center",children:[e.date,"a"]}),(0,r.jsx)(j.Z,{align:"center",children:e.type}),(0,r.jsx)(j.Z,{align:"center",children:(0,r.jsx)(m.Z,{color:"primary",children:(0,r.jsx)(E.Z,{})})})]},1)}))})]})})]})})]})};k.getLayout=function(e){return(0,r.jsx)(h.c,{children:e})},t.default=k}},function(e){e.O(0,[363,261,962,135,325,203,447,774,888,179],(function(){return t=772,e(e.s=t);var t}));var t=e.O();_N_E=t}]);