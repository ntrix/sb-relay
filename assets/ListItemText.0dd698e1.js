var et=Object.defineProperty;var n=(t,e)=>et(t,"name",{value:e,configurable:!0});import{_ as a,u as _,k as O,j as B}from"./useThemeProps.c5a60eed.js";import{r as u,j as b,a as V}from"./jsx-runtime.432ff4b3.js";import{g as A,a as T,s as U,c as P,b as j}from"./styled.79a06d59.js";import{a as S}from"./List.5560a429.js";import{B as st}from"./ButtonBase.6b31cd24.js";import{u as ot}from"./useEnhancedEffect.41b5b2ee.js";import{i as at}from"./isMuiElement.7fbe1d34.js";import{u as nt}from"./useForkRef.65fd2ee2.js";import{i as H}from"./isHostComponent.c8fe3a80.js";import{T as G}from"./Typography.90f27e13.js";function it(t){return T("MuiListItem",t)}n(it,"getListItemUtilityClass");const rt=A("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),v=rt;function _t(t){return T("MuiListItemButton",t)}n(_t,"getListItemButtonUtilityClass");const ct=A("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),lt=ct;function dt(t){return T("MuiListItemSecondaryAction",t)}n(dt,"getListItemSecondaryActionClassesUtilityClass");A("MuiListItemSecondaryAction",["root","disableGutters"]);const pt=["className"],mt=n(t=>{const{disableGutters:e,classes:s}=t;return j({root:["root",e&&"disableGutters"]},dt,s)},"useUtilityClasses$2"),ut=U("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>a({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),q=u.exports.forwardRef(n(function(e,s){const o=_({props:e,name:"MuiListItemSecondaryAction"}),{className:c}=o,i=O(o,pt),r=u.exports.useContext(S),d=a({},o,{disableGutters:r.disableGutters}),p=mt(d);return b(ut,a({className:P(p.root,c),ownerState:d,ref:s},i))},"ListItemSecondaryAction"));q.muiName="ListItemSecondaryAction";const yt=q,ft=["className"],gt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],bt=n((t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},"overridesResolver"),It=n(t=>{const{alignItems:e,button:s,classes:o,dense:c,disabled:i,disableGutters:r,disablePadding:d,divider:p,hasSecondaryAction:y,selected:C}=t;return j({root:["root",c&&"dense",!r&&"gutters",!d&&"padding",p&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",y&&"secondaryAction",C&&"selected"],container:["container"]},it,o)},"useUtilityClasses$1"),vt=U("div",{name:"MuiListItem",slot:"Root",overridesResolver:bt})(({theme:t,ownerState:e})=>a({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&a({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${lt.root}`]:{paddingRight:48}},{[`&.${v.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${v.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:B(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${v.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:B(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${v.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${v.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:B(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:B(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),Ct=U("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),xt=u.exports.forwardRef(n(function(e,s){const o=_({props:e,name:"MuiListItem"}),{alignItems:c="center",autoFocus:i=!1,button:r=!1,children:d,className:p,component:y,components:C={},componentsProps:R={},ContainerComponent:N="li",ContainerProps:{className:M}={},dense:m=!1,disabled:l=!1,disableGutters:x=!1,disablePadding:L=!1,divider:J=!1,focusVisibleClassName:K,secondaryAction:E,selected:Q=!1}=o,X=O(o.ContainerProps,ft),Z=O(o,gt),tt=u.exports.useContext(S),w={dense:m||tt.dense||!1,alignItems:c,disableGutters:x},F=u.exports.useRef(null);ot(()=>{i&&F.current&&F.current.focus()},[i]);const I=u.exports.Children.toArray(d),D=I.length&&at(I[I.length-1],["ListItemSecondaryAction"]),$=a({},o,{alignItems:c,autoFocus:i,button:r,dense:w.dense,disabled:l,disableGutters:x,disablePadding:L,divider:J,hasSecondaryAction:D,selected:Q}),W=It($),z=nt(F,s),k=C.Root||vt,h=R.root||{},f=a({className:P(W.root,h.className,p),disabled:l},Z);let g=y||"li";return r&&(f.component=y||"div",f.focusVisibleClassName=P(v.focusVisible,K),g=st),D?(g=!f.component&&!y?"div":g,N==="li"&&(g==="li"?g="div":f.component==="li"&&(f.component="div")),b(S.Provider,{value:w,children:V(Ct,a({as:N,className:P(W.container,M),ref:z,ownerState:$},X,{children:[b(k,a({},h,!H(k)&&{as:g,ownerState:a({},$,h.ownerState)},f,{children:I})),I.pop()]}))})):b(S.Provider,{value:w,children:V(k,a({},h,{as:g,ref:z,ownerState:$},!H(k)&&{ownerState:a({},$,h.ownerState)},f,{children:[I,E&&b(yt,{children:E})]}))})},"ListItem")),jt=xt;function Et(t){return T("MuiListItemIcon",t)}n(Et,"getListItemIconUtilityClass");const Lt=A("MuiListItemIcon",["root","alignItemsFlexStart"]),Dt=Lt;function $t(t){return T("MuiListItemText",t)}n($t,"getListItemTextUtilityClass");const ht=A("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Y=ht,Pt=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],St=n(t=>{const{classes:e,inset:s,primary:o,secondary:c,dense:i}=t;return j({root:["root",s&&"inset",i&&"dense",o&&c&&"multiline"],primary:["primary"],secondary:["secondary"]},$t,e)},"useUtilityClasses"),At=U("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[{[`& .${Y.primary}`]:e.primary},{[`& .${Y.secondary}`]:e.secondary},e.root,s.inset&&e.inset,s.primary&&s.secondary&&e.multiline,s.dense&&e.dense]}})(({ownerState:t})=>a({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),Tt=u.exports.forwardRef(n(function(e,s){const o=_({props:e,name:"MuiListItemText"}),{children:c,className:i,disableTypography:r=!1,inset:d=!1,primary:p,primaryTypographyProps:y,secondary:C,secondaryTypographyProps:R}=o,N=O(o,Pt),{dense:M}=u.exports.useContext(S);let m=p!=null?p:c,l=C;const x=a({},o,{disableTypography:r,inset:d,primary:!!m,secondary:!!l,dense:M}),L=St(x);return m!=null&&m.type!==G&&!r&&(m=b(G,a({variant:M?"body2":"body1",className:L.primary,component:"span",display:"block"},y,{children:m}))),l!=null&&l.type!==G&&!r&&(l=b(G,a({variant:"body2",className:L.secondary,color:"text.secondary",display:"block"},R,{children:l}))),V(At,a({className:P(L.root,i),ownerState:x,ref:s},N,{children:[m,l]}))},"ListItemText")),Wt=Tt;export{jt as L,Wt as a,Y as b,lt as c,Et as d,_t as g,Dt as l};
//# sourceMappingURL=ListItemText.0dd698e1.js.map
