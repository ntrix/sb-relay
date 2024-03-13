var C=Object.defineProperty;var p=(o,e)=>C(o,"name",{value:e,configurable:!0});import{k as v,u as w,b,_ as S}from"./useThemeProps.8c227988.js";import{r as g}from"./index.a4b8bac3.js";import{a as R,j as _}from"./jsx-runtime.1558fe13.js";import{a as N,g as A,s as B,c as M,b as T}from"./styled.a662cef3.js";function j(o){return N("MuiSvgIcon",o)}p(j,"getSvgIconUtilityClass");A("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const U=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],k=p(o=>{const{color:e,fontSize:t,classes:r}=o,n={root:["root",e!=="inherit"&&`color${v(e)}`,`fontSize${v(t)}`]};return T(n,j,r)},"useUtilityClasses"),V=B("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${v(t.color)}`],e[`fontSize${v(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,r,n,u,f,a,h,d,m,l,s,c,i;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(r=t.create)==null?void 0:r.call(t,"fill",{duration:(n=o.transitions)==null||(n=n.duration)==null?void 0:n.shorter}),fontSize:{inherit:"inherit",small:((u=o.typography)==null||(f=u.pxToRem)==null?void 0:f.call(u,20))||"1.25rem",medium:((a=o.typography)==null||(h=a.pxToRem)==null?void 0:h.call(a,24))||"1.5rem",large:((d=o.typography)==null||(m=d.pxToRem)==null?void 0:m.call(d,35))||"2.1875rem"}[e.fontSize],color:(l=(s=(o.vars||o).palette)==null||(s=s[e.color])==null?void 0:s.main)!=null?l:{action:(c=(o.vars||o).palette)==null||(c=c.action)==null?void 0:c.active,disabled:(i=(o.vars||o).palette)==null||(i=i.action)==null?void 0:i.disabled,inherit:void 0}[e.color]}}),z=g.exports.forwardRef(p(function(e,t){const r=w({props:e,name:"MuiSvgIcon"}),{children:n,className:u,color:f="inherit",component:a="svg",fontSize:h="medium",htmlColor:d,inheritViewBox:m=!1,titleAccess:l,viewBox:s="0 0 24 24"}=r,c=b(r,U),i=g.exports.isValidElement(n)&&n.type==="svg",y=S({},r,{color:f,component:a,fontSize:h,instanceFontSize:e.fontSize,inheritViewBox:m,viewBox:s,hasSvgAsChild:i}),x={};m||(x.viewBox=s);const I=k(y);return R(V,S({as:a,className:M(I.root,u),focusable:"false",color:d,"aria-hidden":l?void 0:!0,role:l?"img":void 0,ref:t},x,c,i&&n.props,{ownerState:y,children:[i?n.props.children:n,l?_("title",{children:l}):null]}))},"SvgIcon"));z.muiName="SvgIcon";const $=z;function W(o,e){function t(r,n){return _($,S({"data-testid":`${e}Icon`,ref:n},r,{children:o}))}return p(t,"Component"),t.muiName=$.muiName,g.exports.memo(g.exports.forwardRef(t))}p(W,"createSvgIcon");export{W as c};
//# sourceMappingURL=createSvgIcon.255f8e10.js.map