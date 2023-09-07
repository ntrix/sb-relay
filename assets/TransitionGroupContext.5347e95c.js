var g=Object.defineProperty;var r=(e,o)=>g(e,"name",{value:o,configurable:!0});import{_ as s,j as c,c as x,k as y}from"./useThemeProps.40258d65.js";import{r as b,j as O,R}from"./jsx-runtime.8ab2f9dd.js";import{a as $,g as j,s as m,c as k,b as q}from"./styled.52d58c79.js";function M(e){return $("MuiPaper",e)}r(M,"getPaperUtilityClass");j("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const C=["className","component","elevation","square","variant"],p=r(e=>{let o;return e<1?o=5.11916*e**2:o=4.5*Math.log(e+1)+2,(o/100).toFixed(2)},"getOverlayAlpha"),U=r(e=>{const{square:o,elevation:a,variant:t,classes:n}=e,i={root:["root",t,!o&&"rounded",t==="elevation"&&`elevation${a}`]};return q(i,M,n)},"useUtilityClasses"),N=m("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,o[a.variant],!a.square&&o.rounded,a.variant==="elevation"&&o[`elevation${a.elevation}`]]}})(({theme:e,ownerState:o})=>{var a;return s({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},o.variant==="elevation"&&s({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${c("#fff",p(o.elevation))}, ${c("#fff",p(o.elevation))})`},e.vars&&{backgroundImage:(a=e.vars.overlays)==null?void 0:a[o.elevation]}))}),T=b.exports.forwardRef(r(function(o,a){const t=x({props:o,name:"MuiPaper"}),{className:n,component:i="div",elevation:u=1,square:d=!1,variant:f="elevation"}=t,P=y(t,C),v=s({},t,{component:i,elevation:u,square:d,variant:f}),_=U(v);return O(N,s({as:i,ownerState:v,className:k(_.root,n),ref:a},P))},"Paper")),F=T;function l(e,o){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():r(function(t,n){return t.__proto__=n,t},"_setPrototypeOf"),l(e,o)}r(l,"_setPrototypeOf");function G(e,o){e.prototype=Object.create(o.prototype),e.prototype.constructor=e,l(e,o)}r(G,"_inheritsLoose");const V=R.createContext(null);export{F as P,V as T,G as _};
//# sourceMappingURL=TransitionGroupContext.5347e95c.js.map
