var C=Object.defineProperty;var d=(e,a)=>C(e,"name",{value:a,configurable:!0});import{_ as n,u as I,b as S}from"./useThemeProps.8c227988.js";import{r as m}from"./index.a4b8bac3.js";import{a as D,g as M,s as b,c as P,b as z}from"./styled.a662cef3.js";import{c as F}from"./createSvgIcon.255f8e10.js";import{j as f}from"./jsx-runtime.1558fe13.js";const N=F(f("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function j(e){return D("MuiAvatar",e)}d(j,"getAvatarUtilityClass");M("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const U=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],_=d(e=>{const{classes:a,variant:r,colorDefault:t}=e;return z({root:["root",r,t&&"colorDefault"],img:["img"],fallback:["fallback"]},j,a)},"useUtilityClasses"),L=b("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[r.variant],r.colorDefault&&a.colorDefault]}})(({theme:e,ownerState:a})=>n({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},a.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},a.variant==="square"&&{borderRadius:0},a.colorDefault&&n({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}))),q=b("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),T=b(N,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,a)=>a.fallback})({width:"75%",height:"75%"});function B({crossOrigin:e,referrerPolicy:a,src:r,srcSet:t}){const[s,l]=m.exports.useState(!1);return m.exports.useEffect(()=>{if(!r&&!t)return;l(!1);let i=!0;const o=new Image;return o.onload=()=>{!i||l("loaded")},o.onerror=()=>{!i||l("error")},o.crossOrigin=e,o.referrerPolicy=a,o.src=r,t&&(o.srcset=t),()=>{i=!1}},[e,a,r,t]),s}d(B,"useLoaded");const E=m.exports.forwardRef(d(function(a,r){const t=I({props:a,name:"MuiAvatar"}),{alt:s,children:l,className:i,component:o="div",imgProps:h,sizes:y,src:p,srcSet:v,variant:k="circular"}=t,R=S(t,U);let c=null;const w=B(n({},h,{src:p,srcSet:v})),A=p||v,x=A&&w!=="error",u=n({},t,{colorDefault:!x,component:o,variant:k}),g=_(u);return x?c=f(q,n({alt:s,srcSet:v,src:p,sizes:y,ownerState:u,className:g.img},h)):l!=null?c=l:A&&s?c=s[0]:c=f(T,{ownerState:u,className:g.fallback}),f(L,n({as:o,ownerState:u,className:P(g.root,i),ref:r},R,{children:c}))},"Avatar")),O=E;export{O as A};
//# sourceMappingURL=Avatar.cc768ef4.js.map