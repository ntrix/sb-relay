var a=Object.defineProperty;var r=(e,t)=>a(e,"name",{value:t,configurable:!0});import{b as f,_ as l,H as x,F as P}from"./useThemeProps.8c227988.js";const h=["sx"],m=r(e=>{var t,o;const n={systemProps:{},otherProps:{}},i=(t=e==null||(o=e.theme)==null?void 0:o.unstable_sxConfig)!=null?t:x;return Object.keys(e).forEach(s=>{i[s]?n.systemProps[s]=e[s]:n.otherProps[s]=e[s]}),n},"splitProps");function b(e){const{sx:t}=e,o=f(e,h),{systemProps:n,otherProps:i}=m(o);let s;return Array.isArray(t)?s=[n,...t]:typeof t=="function"?s=r((...c)=>{const u=t(...c);return P(u)?l({},n,u):n},"finalSx"):s=l({},n,t),l({},i,{sx:s})}r(b,"extendSxProp");export{b as e};
//# sourceMappingURL=extendSxProp.0b45a4c6.js.map