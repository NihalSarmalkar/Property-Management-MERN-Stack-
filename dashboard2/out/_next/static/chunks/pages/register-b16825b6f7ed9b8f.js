(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},1023:function(e,n,r){"use strict";var t=r(5318);n.Z=void 0;var o=t(r(4938)),a=r(5893),i=(0,o.default)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");n.Z=i},4938:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=r(8372)},9368:function(e,n,r){"use strict";r.d(n,{Z:function(){return C}});var t=r(3366),o=r(7462),a=r(7294),i=(r(5697),r(7463)),s=r(1796),l=r(1964),c=r(2066),u=r(5893),d=(0,c.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,c.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,c.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=r(8216),f=r(3616),Z=r(1496),x=r(1420);function v(e){return(0,x.Z)("MuiCheckbox",e)}var b=(0,r(1271).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],g=(0,Z.ZP)(l.Z,{shouldForwardProp:e=>(0,Z.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,r.indeterminate&&n.indeterminate,"default"!==r.color&&n[`color${(0,p.Z)(r.color)}`]]}})((({theme:e,ownerState:n})=>(0,o.Z)({color:e.palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:(0,s.Fq)("default"===n.color?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{[`&.${b.checked}, &.${b.indeterminate}`]:{color:e.palette[n.color].main},[`&.${b.disabled}`]:{color:e.palette.action.disabled}}))),k=(0,u.jsx)(h,{}),w=(0,u.jsx)(d,{}),j=(0,u.jsx)(m,{});var C=a.forwardRef((function(e,n){var r,s;const l=(0,f.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=k,color:d="primary",icon:h=w,indeterminate:m=!1,indeterminateIcon:Z=j,inputProps:x,size:b="medium"}=l,C=(0,t.Z)(l,y),S=m?Z:h,N=m?Z:c,B=(0,o.Z)({},l,{color:d,indeterminate:m,size:b}),F=(e=>{const{classes:n,indeterminate:r,color:t}=e,a={root:["root",r&&"indeterminate",`color${(0,p.Z)(t)}`]},s=(0,i.Z)(a,v,n);return(0,o.Z)({},n,s)})(B);return(0,u.jsx)(g,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":m},x),icon:a.cloneElement(S,{fontSize:null!=(r=S.props.fontSize)?r:b}),checkedIcon:a.cloneElement(N,{fontSize:null!=(s=N.props.fontSize)?s:b}),ownerState:B,ref:n},C,{classes:F}))}))},1964:function(e,n,r){"use strict";r.d(n,{Z:function(){return b}});var t=r(3366),o=r(7462),a=r(7294),i=(r(5697),r(6010)),s=r(7463),l=r(8216),c=r(1496),u=r(9299),d=r(4423),h=r(7739),m=r(1420);function p(e){return(0,m.Z)("PrivateSwitchBase",e)}(0,r(1271).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var f=r(5893);const Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,c.ZP)(h.Z,{skipSx:!0})((({ownerState:e})=>(0,o.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),v=(0,c.ZP)("input",{skipSx:!0})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var b=a.forwardRef((function(e,n){const{autoFocus:r,checked:a,checkedIcon:c,className:h,defaultChecked:m,disabled:b,disableFocusRipple:y=!1,edge:g=!1,icon:k,id:w,inputProps:j,inputRef:C,name:S,onBlur:N,onChange:B,onFocus:F,readOnly:P,required:_,tabIndex:R,type:I,value:z}=e,M=(0,t.Z)(e,Z),[E,q]=(0,u.Z)({controlled:a,default:Boolean(m),name:"SwitchBase",state:"checked"}),H=(0,d.Z)();let T=b;H&&"undefined"===typeof T&&(T=H.disabled);const O="checkbox"===I||"radio"===I,V=(0,o.Z)({},e,{checked:E,disabled:T,disableFocusRipple:y,edge:g}),L=(e=>{const{classes:n,checked:r,disabled:t,edge:o}=e,a={root:["root",r&&"checked",t&&"disabled",o&&`edge${(0,l.Z)(o)}`],input:["input"]};return(0,s.Z)(a,p,n)})(V);return(0,f.jsxs)(x,(0,o.Z)({component:"span",className:(0,i.Z)(L.root,h),centerRipple:!0,focusRipple:!y,disabled:T,tabIndex:null,role:void 0,onFocus:e=>{F&&F(e),H&&H.onFocus&&H.onFocus(e)},onBlur:e=>{N&&N(e),H&&H.onBlur&&H.onBlur(e)},ownerState:V,ref:n},M,{children:[(0,f.jsx)(v,(0,o.Z)({autoFocus:r,checked:a,defaultChecked:m,className:L.input,disabled:T,id:O&&w,name:S,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const n=e.target.checked;q(n),B&&B(e,n)},readOnly:P,ref:C,required:_,ownerState:V,tabIndex:R,type:I},"checkbox"===I&&void 0===z?{}:{value:z},j)),E?c:k]}))}))},7450:function(e,n,r){"use strict";var t=r(9064);n.Z=t.Z},8372:function(e,n,r){"use strict";r.r(n),r.d(n,{capitalize:function(){return t.Z},createChainedFunction:function(){return o.Z},createSvgIcon:function(){return a.Z},debounce:function(){return i.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return l.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return d},setRef:function(){return h},unstable_ClassNameGenerator:function(){return y.Z},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return p.Z},unsupportedProp:function(){return f},useControlled:function(){return Z.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return b.Z}});var t=r(8216),o=r(7450),a=r(2066),i=r(7144);var s=function(e,n){return()=>null},l=r(1579),c=r(8038),u=r(5340);r(7462);var d=function(e,n){return()=>null},h=r(7960).Z,m=r(8974),p=r(7909);var f=function(e,n,r,t,o){return null},Z=r(9299),x=r(2068),v=r(1705),b=r(8791),y=r(3202)},7909:function(e,n,r){"use strict";var t=r(7579);n.Z=t.Z},7579:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(7294);function o(e){const[n,r]=t.useState(e),o=e||n;return t.useEffect((()=>{null==n&&r(`mui-${Math.round(1e9*Math.random())}`)}),[n]),o}},8740:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return r(1627)}])},1627:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return E}});var t=r(5893),o=r(9008),a=r(1664),i=r(1163),s=r(2175),l=r(4231),c=r(3366),u=r(7462),d=r(7294),h=(r(5697),r(6010)),m=r(7463),p=r(4844),f=r(1796),Z=r(8216),x=r(1496),v=r(3616),b=r(8791),y=r(1705),g=r(5861),k=r(1420);function w(e){return(0,k.Z)("MuiLink",e)}var j=(0,r(1271).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);const C=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],S={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},N=(0,x.ZP)(g.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[`underline${(0,Z.Z)(r.underline)}`],"button"===r.component&&n.button]}})((({theme:e,ownerState:n})=>{const r=(0,p.D)(e,`palette.${(e=>S[e]||e)(n.color)}`)||n.color;return(0,u.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,f.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${j.focusVisible}`]:{outline:"auto"}})}));var B=d.forwardRef((function(e,n){const r=(0,v.Z)({props:e,name:"MuiLink"}),{className:o,color:a="primary",component:i="a",onBlur:s,onFocus:l,TypographyClasses:p,underline:f="always",variant:x="inherit"}=r,g=(0,c.Z)(r,C),{isFocusVisibleRef:k,onBlur:j,onFocus:S,ref:B}=(0,b.Z)(),[F,P]=d.useState(!1),_=(0,y.Z)(n,B),R=(0,u.Z)({},r,{color:a,component:i,focusVisible:F,underline:f,variant:x}),I=(e=>{const{classes:n,component:r,focusVisible:t,underline:o}=e,a={root:["root",`underline${(0,Z.Z)(o)}`,"button"===r&&"button",t&&"focusVisible"]};return(0,m.Z)(a,w,n)})(R);return(0,t.jsx)(N,(0,u.Z)({className:(0,h.Z)(I.root,o),classes:p,color:a,component:i,onBlur:e=>{j(e),!1===k.current&&P(!1),s&&s(e)},onFocus:e=>{S(e),!0===k.current&&P(!0),l&&l(e)},ref:_,ownerState:R,variant:x},g))})),F=r(7357),P=r(7948),_=r(1057),R=r(135),I=r(9368),z=r(6815),M=r(1023),E=function(){var e=(0,i.useRouter)(),n=(0,s.TA)({initialValues:{email:"",firstName:"",lastName:"",password:"",policy:!1},validationSchema:l.Ry({email:l.Z_().email("Must be a valid email").max(255).required("Email is required"),firstName:l.Z_().max(255).required("First name is required"),lastName:l.Z_().max(255).required("Last name is required"),password:l.Z_().max(255).required("Password is required"),policy:l.O7().oneOf([!0],"This field must be checked")}),onSubmit:function(){e.push("/")}});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.default,{children:(0,t.jsx)("title",{children:"Register | Material Kit"})}),(0,t.jsx)(F.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%"},children:(0,t.jsxs)(P.Z,{maxWidth:"sm",children:[(0,t.jsx)(a.default,{href:"/",passHref:!0,children:(0,t.jsx)(_.Z,{component:"a",startIcon:(0,t.jsx)(M.Z,{fontSize:"small"}),children:"Dashboard"})}),(0,t.jsxs)("form",{onSubmit:n.handleSubmit,children:[(0,t.jsxs)(F.Z,{sx:{my:3},children:[(0,t.jsx)(g.Z,{color:"textPrimary",variant:"h4",children:"Create a new account"}),(0,t.jsx)(g.Z,{color:"textSecondary",gutterBottom:!0,variant:"body2",children:"Use your email to create a new account"})]}),(0,t.jsx)(R.Z,{error:Boolean(n.touched.firstName&&n.errors.firstName),fullWidth:!0,helperText:n.touched.firstName&&n.errors.firstName,label:"First Name",margin:"normal",name:"firstName",onBlur:n.handleBlur,onChange:n.handleChange,value:n.values.firstName,variant:"outlined"}),(0,t.jsx)(R.Z,{error:Boolean(n.touched.lastName&&n.errors.lastName),fullWidth:!0,helperText:n.touched.lastName&&n.errors.lastName,label:"Last Name",margin:"normal",name:"lastName",onBlur:n.handleBlur,onChange:n.handleChange,value:n.values.lastName,variant:"outlined"}),(0,t.jsx)(R.Z,{error:Boolean(n.touched.email&&n.errors.email),fullWidth:!0,helperText:n.touched.email&&n.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:n.handleBlur,onChange:n.handleChange,type:"email",value:n.values.email,variant:"outlined"}),(0,t.jsx)(R.Z,{error:Boolean(n.touched.password&&n.errors.password),fullWidth:!0,helperText:n.touched.password&&n.errors.password,label:"Password",margin:"normal",name:"password",onBlur:n.handleBlur,onChange:n.handleChange,type:"password",value:n.values.password,variant:"outlined"}),(0,t.jsxs)(F.Z,{sx:{alignItems:"center",display:"flex",ml:-1},children:[(0,t.jsx)(I.Z,{checked:n.values.policy,name:"policy",onChange:n.handleChange}),(0,t.jsxs)(g.Z,{color:"textSecondary",variant:"body2",children:["I have read the"," ",(0,t.jsx)(a.default,{href:"#",passHref:!0,children:(0,t.jsx)(B,{color:"primary",underline:"always",variant:"subtitle2",children:"Terms and Conditions"})})]})]}),Boolean(n.touched.policy&&n.errors.policy)&&(0,t.jsx)(z.Z,{error:!0,children:n.errors.policy}),(0,t.jsx)(F.Z,{sx:{py:2},children:(0,t.jsx)(_.Z,{color:"primary",disabled:n.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign Up Now"})}),(0,t.jsxs)(g.Z,{color:"textSecondary",variant:"body2",children:["Have an account?"," ",(0,t.jsx)(a.default,{href:"/login",passHref:!0,children:(0,t.jsx)(B,{variant:"subtitle2",underline:"hover",children:"Sign In"})})]})]})]})})]})}}},function(e){e.O(0,[63,387,135,141,774,888,179],(function(){return n=8740,e(e.s=n);var n}));var n=e.O();_N_E=n}]);