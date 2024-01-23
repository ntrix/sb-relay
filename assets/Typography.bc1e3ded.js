var B=Object.defineProperty;var n=(a,t)=>B(a,"name",{value:t,configurable:!0});import{k as f,_ as p,u as W,b as C}from"./useThemeProps.5298e059.js";import{r as M}from"./index.dc0abbdb.js";import{a as P,g as R,s as U,c as _,b as j}from"./styled.2fbbcad8.js";import{j as N}from"./jsx-runtime.5e6f1702.js";import{e as $}from"./extendSxProp.a73c5276.js";function L(a){return P("MuiTypography",a)}n(L,"getTypographyUtilityClass");R("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const k=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],z=n(a=>{const{align:t,gutterBottom:r,noWrap:i,paragraph:e,variant:o,classes:h}=a,s={root:["root",o,a.align!=="inherit"&&`align${f(t)}`,r&&"gutterBottom",i&&"noWrap",e&&"paragraph"]};return j(s,L,h)},"useUtilityClasses"),A=U("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${f(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>p({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},D={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},J=n(a=>D[a]||a,"transformDeprecatedColors"),O=M.exports.forwardRef(n(function(t,r){const i=W({props:t,name:"MuiTypography"}),e=J(i.color),o=$(p({},i,{color:e})),{align:h="inherit",className:s,component:l,gutterBottom:d=!1,noWrap:v=!1,paragraph:m=!1,variant:g="body1",variantMapping:c=u}=o,x=C(o,k),y=p({},o,{align:h,color:e,className:s,component:l,gutterBottom:d,noWrap:v,paragraph:m,variant:g,variantMapping:c}),b=l||(m?"p":c[g]||u[g])||"span",T=z(y);return N(A,p({as:b,ref:r,ownerState:y,className:_(T.root,s)},x))},"Typography")),H=O;export{H as T};
//# sourceMappingURL=Typography.bc1e3ded.js.map