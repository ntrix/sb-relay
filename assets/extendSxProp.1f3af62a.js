var u=Object.defineProperty;var n=(t,e)=>u(t,"name",{value:e,configurable:!0});import{k as a,_ as i,H as x}from"./useThemeProps.c5a60eed.js";import{p as P}from"./styled.79a06d59.js";const y=["sx"],m=n(t=>{const e={systemProps:{},otherProps:{}};return Object.keys(t).forEach(s=>{P[s]?e.systemProps[s]=t[s]:e.otherProps[s]=t[s]}),e},"splitProps");function _(t){const{sx:e}=t,s=a(t,y),{systemProps:o,otherProps:f}=m(s);let r;return Array.isArray(e)?r=[o,...e]:typeof e=="function"?r=n((...l)=>{const c=e(...l);return x(c)?i({},o,c):o},"finalSx"):r=i({},o,e),i({},f,{sx:r})}n(_,"extendSxProp");export{_ as e};
//# sourceMappingURL=extendSxProp.1f3af62a.js.map