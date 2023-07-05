var E=Object.defineProperty;var r=(e,a)=>E(e,"name",{value:a,configurable:!0});import{r as g,j as t,a as c}from"./jsx-runtime.03a443f3.js";import{H as F}from"./index.fdc0a589.js";import{u as V}from"./useBreakpoints.0db965e3.js";import{l as M,a as O,L as j,S as H,B as D,A as G}from"./ListOrTabNav.69cbd573.js";import{g as U,a as J,s as A,r as z,c as X,b as K}from"./styled.8bc47fa6.js";import{P as y}from"./Paper.31fef2f4.js";import{S as b}from"./Stack.a04ad4c8.js";import{T as Q}from"./Typography.81dcbb5a.js";import{A as P}from"./ActionBar.0ee0a2e2.js";import{ListedCardMinimalViable as W,ListedCardWarningVariant as Y}from"./ListedCard.stories.de169f73.js";import{C as Z}from"./Card.df7c4928.js";import{M as ee}from"./MenuList.edb11fd1.js";import{_ as f,h as v,c as te,j as ae}from"./useThemeProps.524cd10b.js";import{a as w}from"./List.62f93254.js";import{B as ie}from"./ButtonBase.9c5da696.js";import{d as L}from"./dividerClasses.4698614e.js";import{u as ne}from"./useEnhancedEffect.77f3f6f1.js";import{u as re}from"./useForkRef.a800d31c.js";import"./iframe.3ee781c9.js";import"./useTheme.bc974d8d.js";import"./createSvgIcon.db6576d1.js";import"./index.cd759284.js";import"./ownerWindow.08944ff6.js";import"./isMuiElement.c08b8eb4.js";import"./isHostComponent.c8fe3a80.js";import"./Box.89c4618f.js";import"./TextGroupText.388938a4.js";import"./Avatar.f0ab0824.js";import"./useId.ed1f6cab.js";import"./useControlled.a4322aea.js";import"./useIsFocusVisible.fca6b816.js";import"./emotion-react.browser.esm.6ea6ef1a.js";import"./getScrollbarSize.bc370221.js";import"./TransitionGroupContext.bd2cb9c4.js";function oe(e){return J("MuiMenuItem",e)}r(oe,"getMenuItemUtilityClass");const se=U("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),m=se,le=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],ce=r((e,a)=>{const{ownerState:i}=e;return[a.root,i.dense&&a.dense,i.divider&&a.divider,!i.disableGutters&&a.gutters]},"overridesResolver"),de=r(e=>{const{disabled:a,dense:i,divider:n,disableGutters:o,selected:p,classes:s}=e,l=K({root:["root",i&&"dense",a&&"disabled",!o&&"gutters",n&&"divider",p&&"selected"]},oe,s);return f({},s,l)},"useUtilityClasses"),pe=A(ie,{shouldForwardProp:e=>z(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ce})(({theme:e,ownerState:a})=>f({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:v(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${m.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:v(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${m.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:v(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:v(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${m.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${m.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${L.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${L.inset}`]:{marginLeft:52},[`& .${O.root}`]:{marginTop:0,marginBottom:0},[`& .${O.inset}`]:{paddingLeft:36},[`& .${M.root}`]:{minWidth:36}},!a.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&f({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${M.root} svg`]:{fontSize:"1.25rem"}}))),ue=g.exports.forwardRef(r(function(a,i){const n=te({props:a,name:"MuiMenuItem"}),{autoFocus:o=!1,component:p="li",dense:s=!1,divider:u=!1,disableGutters:l=!1,focusVisibleClassName:x,role:_="menuitem",tabIndex:k}=n,T=ae(n,le),q=g.exports.useContext(w),S={dense:s||q.dense||!1,disableGutters:l},C=g.exports.useRef(null);ne(()=>{o&&C.current&&C.current.focus()},[o]);const N=f({},n,{dense:S.dense,divider:u,disableGutters:l}),$=de(n),R=re(C,i);let B;return n.disabled||(B=k!==void 0?k:-1),t(w.Provider,{value:S,children:t(pe,f({ref:R,role:_,tabIndex:B,component:p,focusVisibleClassName:X($.focusVisible,x)},T,{ownerState:N,classes:$}))})},"MenuItem")),h=ue;function me({headline:e,text:a,children:i,actionBar:n}){return c(y,{id:"page-content",variant:"outlined",sx:{display:"flex",flexDirection:"column",p:3,gap:5},children:[c(b,{spacing:2,children:[t(F,{children:e}),t(Q,{variant:"body1",children:a})]}),i,n]})}r(me,"Content");function d(e){const a=V(),[i,n]=g.exports.useState(0);if(g.exports.useEffect(()=>{n(e.activePageId)},[e==null?void 0:e.activePageId]),!(e!=null&&e.navItems))return t(me,{...e});const{leftSpace:o=280,navItems:p,innerPages:s}=e,u=typeof o=="string"?o:`${o}px`,l={navItems:p,width:u,setActiveId:n,activeId:i},x=a?"100%":`calc(100% - ${u} - 2rem)`;return c(y,{variant:"outlined",sx:{display:"flex",flexWrap:"wrap"},children:[t(j,{...l}),t(ge,{sx:{width:x},children:s[i]})]})}r(d,"Page");const ge=A(y)({boxShadow:"none","*#page-content":{borderWidth:0}});try{d.displayName="Page",d.__docgenInfo={description:"",displayName:"Page",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},actionBar:{defaultValue:null,description:"",name:"actionBar",required:!1,type:{name:"ReactElement<({ primary, primaryAsSecondary, secondary, alternate }: ActionBarProps) => Element, string | JSXElementConstructor<any>>"}},leftSpace:{defaultValue:null,description:"",name:"leftSpace",required:!1,type:{name:"string | number"}},navItems:{defaultValue:null,description:"",name:"navItems",required:!1,type:{name:'{ icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>; label: string; link: string; }[]'}},innerPages:{defaultValue:null,description:"",name:"innerPages",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>[]"}},activePageId:{defaultValue:null,description:"",name:"activePageId",required:!1,type:{name:"number"}}}}}catch{}const at={title:"Components/Page",component:Z,tags:["docsPage"],argTypes:{leftSpace:{options:[0,140,280,420],control:{type:"select"}},activePageId:{options:[0,1,2],control:{type:"select"}}},parameters:{docs:{description:{component:`
Page component as a top level component of a view. It is responsive and has two different appearances depending on screen width mode.

[Figma Design](https://www.figma.com/file/p7Vfl63kqlJJBdaia8H9ku/UI-Anatomy?node-id=4%3A4267&t=vsrPFhtcVpXPyuzR-11)
`}}}},fe=r(({width:e=0})=>{const a=V();return t(b,{marginLeft:2,children:t(y,{sx:{width:e,flex:1},children:c(ee,{sx:{display:a?"flex":"block"},children:[t(h,{children:"Tab"}),t(h,{children:"Account"}),t(h,{children:"Logout"})]})})})},"FakeLevel3Nav"),ve=r(e=>t(d,{headline:"Page Simple",text:I,actionBar:t(P,{primary:{children:"Primary Action",onClick:()=>alert("Primary Action")},secondary:{children:"Secondary Action",onClick:()=>alert("Secondary Action")}}),children:t("div",{children:"Replace component"})}),"Page1Simple"),ye=r(e=>c(d,{headline:"Page With Children",text:I.slice(10),actionBar:t(P,{primary:{children:"Save",onClick:()=>alert("Saved")},secondary:{children:"Cancel",onClick:()=>alert("Canceled")}}),children:[t(W,{}),t(Y,{})]}),"Page2WithChildren"),be=r(({leftSpace:e=280,key:a=0})=>c(b,{direction:"row",flexWrap:"wrap",spacing:2,children:[!!e&&t(fe,{width:e}),t(d,{headline:"Page With Level 3 Nav",text:I.slice(20),leftSpace:e,actionBar:t(P,{primary:{children:"Save",onClick:()=>alert("Saved")},secondary:{children:"Cancel",onClick:()=>alert("Canceled")}}),children:t(W,{})})]}),"Page3WithLevel3Nav"),it=r(({leftSpace:e=280,activePageId:a=1})=>t(b,{direction:"row",flexWrap:"wrap",spacing:2,children:t(d,{leftSpace:e,navItems:xe,innerPages:Ce,activePageId:a})}),"MultiPagesWithListOrTabNavDetectBreakpoint"),I="Habitant non faucibus justo est metus curabitur proin nibh lobortis ridiculus, primis sociis facilisis nunc fermentum class commodo viverra. Nostra taciti gravida venenatis nisl neque ligula, sapien orci aliquam lacus nunc quisque, litora torquent per consectetur imperdiet. Cum mollis potenti purus ligula molestie convallis, rutrum sit leo facilisi dui venenatis, quam donec faucibus vel hac.",xe=[{icon:H,label:"Settings",link:"app/settings/"},{icon:D,label:"Business",link:"app/business/"},{icon:G,label:"Account Box",link:"app/account-box/"}],Ce=[t(ve,{},0),t(ye,{},1),t(be,{},2)],nt=["Page1Simple","Page2WithChildren","Page3WithLevel3Nav","MultiPagesWithListOrTabNavDetectBreakpoint"];export{it as MultiPagesWithListOrTabNavDetectBreakpoint,ve as Page1Simple,ye as Page2WithChildren,be as Page3WithLevel3Nav,nt as __namedExportsOrder,at as default};
//# sourceMappingURL=Page.stories.fdaa1bb2.js.map