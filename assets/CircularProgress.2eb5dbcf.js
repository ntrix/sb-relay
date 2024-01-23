var U=Object.defineProperty;var a=(r,e)=>U(r,"name",{value:e,configurable:!0});import{k as l,_ as i,u as j,b as z}from"./useThemeProps.5298e059.js";import{r as I}from"./index.dc0abbdb.js";import{a as F,g as K,s as v,c as W,b as B}from"./styled.2fbbcad8.js";import{j as k}from"./jsx-runtime.5e6f1702.js";import{k as _,c as M}from"./emotion-react.browser.esm.37edbdaa.js";function E(r){return F("MuiCircularProgress",r)}a(E,"getCircularProgressUtilityClass");K("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const G=["className","color","disableShrink","size","style","thickness","value","variant"];let d=a(r=>r,"_"),S,b,$,D;const t=44,L=_(S||(S=d`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),T=_(b||(b=d`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),V=a(r=>{const{classes:e,variant:s,color:o,disableShrink:m}=r,u={root:["root",s,`color${l(o)}`],svg:["svg"],circle:["circle",`circle${l(s)}`,m&&"circleDisableShrink"]};return B(u,E,e)},"useUtilityClasses"),Z=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${l(s.color)}`]]}})(({ownerState:r,theme:e})=>i({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&M($||($=d`
      animation: ${0} 1.4s linear infinite;
    `),L)),q=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),A=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${l(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>i({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&M(D||(D=d`
      animation: ${0} 1.4s ease-in-out infinite;
    `),T)),H=I.exports.forwardRef(a(function(e,s){const o=j({props:e,name:"MuiCircularProgress"}),{className:m,color:u="primary",disableShrink:R=!1,size:f=40,style:w,thickness:c=3.6,value:p=0,variant:C="indeterminate"}=o,N=z(o,G),n=i({},o,{color:u,disableShrink:R,size:f,thickness:c,value:p,variant:C}),h=V(n),g={},x={},y={};if(C==="determinate"){const P=2*Math.PI*((t-c)/2);g.strokeDasharray=P.toFixed(3),y["aria-valuenow"]=Math.round(p),g.strokeDashoffset=`${((100-p)/100*P).toFixed(3)}px`,x.transform="rotate(-90deg)"}return k(Z,i({className:W(h.root,m),style:i({width:f,height:f},x,w),ownerState:n,ref:s,role:"progressbar"},y,N,{children:k(q,{className:h.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:k(A,{className:h.circle,style:g,ownerState:n,cx:t,cy:t,r:(t-c)/2,fill:"none",strokeWidth:c})})}))},"CircularProgress")),er=H;export{er as C};
//# sourceMappingURL=CircularProgress.2eb5dbcf.js.map
