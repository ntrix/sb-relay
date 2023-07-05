var ae=Object.defineProperty;var l=(e,t)=>ae(e,"name",{value:t,configurable:!0});import{u as ie}from"./useBreakpoints.0db965e3.js";import{r as x,j as g,a as E}from"./jsx-runtime.03a443f3.js";import{u as se}from"./useTranslation.2ffeb8c5.js";import{_ as m,c as z,j as N,l as W,k as U,g as C,H as le,h as P,G as ce}from"./useThemeProps.524cd10b.js";import{a as _,g as G,s as H,c as D,b as A}from"./styled.8bc47fa6.js";import{e as pe,T as q}from"./Typography.81dcbb5a.js";import{u as O}from"./useTheme.bc974d8d.js";import"./useEnhancedEffect.77f3f6f1.js";import"./iframe.3ee781c9.js";const de=x.exports.createContext(),J=de;function ge(e){return _("MuiGrid",e)}l(ge,"getGridUtilityClass");const ue=[0,1,2,3,4,5,6,7,8,9,10],me=["column-reverse","column","row-reverse","row"],fe=["nowrap","wrap-reverse","wrap"],w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],xe=G("MuiGrid",["root","container","item","zeroMinWidth",...ue.map(e=>`spacing-xs-${e}`),...me.map(e=>`direction-xs-${e}`),...fe.map(e=>`wrap-xs-${e}`),...w.map(e=>`grid-xs-${e}`),...w.map(e=>`grid-sm-${e}`),...w.map(e=>`grid-md-${e}`),...w.map(e=>`grid-lg-${e}`),...w.map(e=>`grid-xl-${e}`)]),j=xe,be=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function $(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}l($,"getOffset");function he({theme:e,ownerState:t}){let o;return e.breakpoints.keys.reduce((r,n)=>{let a={};if(t[n]&&(o=t[n]),!o)return r;if(o===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=W({values:t.columns,breakpoints:e.breakpoints.values}),i=typeof s=="object"?s[n]:s;if(i==null)return r;const d=`${Math.round(o/i*1e8)/1e6}%`;let c={};if(t.container&&t.item&&t.columnSpacing!==0){const p=e.spacing(t.columnSpacing);if(p!=="0px"){const u=`calc(${d} + ${$(p)})`;c={flexBasis:u,maxWidth:u}}}a=m({flexBasis:d,flexGrow:0,maxWidth:d},c)}return e.breakpoints.values[n]===0?Object.assign(r,a):r[e.breakpoints.up(n)]=a,r},{})}l(he,"generateGrid");function ve({theme:e,ownerState:t}){const o=W({values:t.direction,breakpoints:e.breakpoints.values});return U({theme:e},o,r=>{const n={flexDirection:r};return r.indexOf("column")===0&&(n[`& > .${j.item}`]={maxWidth:"none"}),n})}l(ve,"generateDirection");function Ce({theme:e,ownerState:t}){const{container:o,rowSpacing:r}=t;let n={};if(o&&r!==0){const a=W({values:r,breakpoints:e.breakpoints.values});n=U({theme:e},a,s=>{const i=e.spacing(s);return i!=="0px"?{marginTop:`-${$(i)}`,[`& > .${j.item}`]:{paddingTop:$(i)}}:{}})}return n}l(Ce,"generateRowGap");function $e({theme:e,ownerState:t}){const{container:o,columnSpacing:r}=t;let n={};if(o&&r!==0){const a=W({values:r,breakpoints:e.breakpoints.values});n=U({theme:e},a,s=>{const i=e.spacing(s);return i!=="0px"?{width:`calc(100% + ${$(i)})`,marginLeft:`-${$(i)}`,[`& > .${j.item}`]:{paddingLeft:$(i)}}:{}})}return n}l($e,"generateColumnGap");function X(e,t,o={}){if(!t||!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[o[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:r,sm:n,md:a,lg:s,xl:i}=e;return[Number(r)>0&&(o[`spacing-xs-${String(r)}`]||`spacing-xs-${String(r)}`),Number(n)>0&&(o[`spacing-sm-${String(n)}`]||`spacing-sm-${String(n)}`),Number(a)>0&&(o[`spacing-md-${String(a)}`]||`spacing-md-${String(a)}`),Number(s)>0&&(o[`spacing-lg-${String(s)}`]||`spacing-lg-${String(s)}`),Number(i)>0&&(o[`spacing-xl-${String(i)}`]||`spacing-xl-${String(i)}`)]}l(X,"resolveSpacingClasses");const ye=H("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:o,direction:r,item:n,lg:a,md:s,sm:i,spacing:d,wrap:c,xl:p,xs:u,zeroMinWidth:b}=e.ownerState;return[t.root,o&&t.container,n&&t.item,b&&t.zeroMinWidth,...X(d,o,t),r!=="row"&&t[`direction-xs-${String(r)}`],c!=="wrap"&&t[`wrap-xs-${String(c)}`],u!==!1&&t[`grid-xs-${String(u)}`],i!==!1&&t[`grid-sm-${String(i)}`],s!==!1&&t[`grid-md-${String(s)}`],a!==!1&&t[`grid-lg-${String(a)}`],p!==!1&&t[`grid-xl-${String(p)}`]]}})(({ownerState:e})=>m({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),ve,Ce,$e,he),Te=l(e=>{const{classes:t,container:o,direction:r,item:n,lg:a,md:s,sm:i,spacing:d,wrap:c,xl:p,xs:u,zeroMinWidth:b}=e,f={root:["root",o&&"container",n&&"item",b&&"zeroMinWidth",...X(d,o),r!=="row"&&`direction-xs-${String(r)}`,c!=="wrap"&&`wrap-xs-${String(c)}`,u!==!1&&`grid-xs-${String(u)}`,i!==!1&&`grid-sm-${String(i)}`,s!==!1&&`grid-md-${String(s)}`,a!==!1&&`grid-lg-${String(a)}`,p!==!1&&`grid-xl-${String(p)}`]};return A(f,ge,t)},"useUtilityClasses$3"),we=x.exports.forwardRef(l(function(t,o){const r=z({props:t,name:"MuiGrid"}),n=pe(r),{className:a,columns:s,columnSpacing:i,component:d="div",container:c=!1,direction:p="row",item:u=!1,lg:b=!1,md:f=!1,rowSpacing:v,sm:k=!1,spacing:h=0,wrap:T="wrap",xl:S=!1,xs:M=!1,zeroMinWidth:B=!1}=n,R=N(n,be),te=v||h,oe=i||h,re=x.exports.useContext(J),F=c?s||12:re,L=m({},n,{columns:F,container:c,direction:p,item:u,lg:b,md:f,sm:k,rowSpacing:te,columnSpacing:oe,wrap:T,xl:S,xs:M,zeroMinWidth:B}),ne=Te(L);return g(J.Provider,{value:F,children:g(ye,m({ownerState:L,className:D(ne.root,a),as:d,ref:o},R))})},"Grid")),ke=we,Se=x.exports.createContext(),Y=Se;function Me(e){return _("MuiTable",e)}l(Me,"getTableUtilityClass");G("MuiTable",["root","stickyHeader"]);const Re=["className","component","padding","size","stickyHeader"],Pe=l(e=>{const{classes:t,stickyHeader:o}=e;return A({root:["root",o&&"stickyHeader"]},Me,t)},"useUtilityClasses$2"),ze=H("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>m({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":m({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),Z="table",Ne=x.exports.forwardRef(l(function(t,o){const r=z({props:t,name:"MuiTable"}),{className:n,component:a=Z,padding:s="normal",size:i="medium",stickyHeader:d=!1}=r,c=N(r,Re),p=m({},r,{component:a,padding:s,size:i,stickyHeader:d}),u=Pe(p),b=x.exports.useMemo(()=>({padding:s,size:i,stickyHeader:d}),[s,i,d]);return g(Y.Provider,{value:b,children:g(ze,m({as:a,role:a===Z?null:"table",ref:o,className:D(u.root,n),ownerState:p},c))})},"Table")),I=Ne,We=x.exports.createContext(),ee=We;function _e(e){return _("MuiTableCell",e)}l(_e,"getTableCellUtilityClass");const Ge=G("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),He=Ge,De=["align","className","component","padding","scope","size","sortDirection","variant"],Ae=l(e=>{const{classes:t,variant:o,align:r,padding:n,size:a,stickyHeader:s}=e,i={root:["root",o,s&&"stickyHeader",r!=="inherit"&&`align${C(r)}`,n!=="normal"&&`padding${C(n)}`,`size${C(a)}`]};return A(i,_e,t)},"useUtilityClasses$1"),Oe=H("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${C(o.size)}`],o.padding!=="normal"&&t[`padding${C(o.padding)}`],o.align!=="inherit"&&t[`align${C(o.align)}`],o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>m({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid
    ${e.palette.mode==="light"?le(P(e.palette.divider,1),.88):ce(P(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:e.palette.text.primary},t.variant==="footer"&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${He.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default})),Be=x.exports.forwardRef(l(function(t,o){const r=z({props:t,name:"MuiTableCell"}),{align:n="inherit",className:a,component:s,padding:i,scope:d,size:c,sortDirection:p,variant:u}=r,b=N(r,De),f=x.exports.useContext(Y),v=x.exports.useContext(ee),k=v&&v.variant==="head";let h;s?h=s:h=k?"th":"td";let T=d;!T&&k&&(T="col");const S=u||v&&v.variant,M=m({},r,{align:n,component:h,padding:i||(f&&f.padding?f.padding:"normal"),size:c||(f&&f.size?f.size:"medium"),sortDirection:p,stickyHeader:S==="head"&&f&&f.stickyHeader,variant:S}),B=Ae(M);let R=null;return p&&(R=p==="asc"?"ascending":"descending"),g(Oe,m({as:h,ref:o,className:D(B.root,a),"aria-sort":R,scope:T,ownerState:M},b))},"TableCell")),Ue=Be;function je(e){return _("MuiTableRow",e)}l(je,"getTableRowUtilityClass");const Ie=G("MuiTableRow",["root","selected","hover","head","footer"]),K=Ie,Ve=["className","component","hover","selected"],Fe=l(e=>{const{classes:t,selected:o,hover:r,head:n,footer:a}=e;return A({root:["root",o&&"selected",r&&"hover",n&&"head",a&&"footer"]},je,t)},"useUtilityClasses"),Le=H("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${K.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${K.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:P(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:P(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),Q="tr",Ee=x.exports.forwardRef(l(function(t,o){const r=z({props:t,name:"MuiTableRow"}),{className:n,component:a=Q,hover:s=!1,selected:i=!1}=r,d=N(r,Ve),c=x.exports.useContext(ee),p=m({},r,{component:a,hover:s,selected:i,head:c&&c.variant==="head",footer:c&&c.variant==="footer"}),u=Fe(p);return g(Le,m({as:a,ref:o,className:D(u.root,n),role:a===Q?null:"row",ownerState:p},d))},"TableRow")),V=Ee;function y({price:e="",children:t="",variant:o=""}){const{t:r}=se(),{palette:n}=O(),a=ie(),s=o==="isMobile"||a;return g(Ue,{sx:{px:0},children:E(ke,{sx:{backgroundColor:n.infoShades4p,p:2,pr:4,borderRadius:2,width:s?"100%":"fit-content"},children:[E(q,{variant:"h1",sx:{p:2},children:[e,",- \u20AC"]}),g(q,{variant:"body2",sx:{p:2,pt:0,color:n.text.secondary},children:t||r("admin:account_pricing_monthly_mwst")})]})})}l(y,"PriceTagCell");try{y.displayName="PriceTagCell",y.__docgenInfo={description:"",displayName:"PriceTagCell",props:{price:{defaultValue:{value:""},description:"",name:"price",required:!1,type:{name:"string"}},variant:{defaultValue:{value:""},description:"",name:"variant",required:!1,type:{name:"string"}}}}}catch{}const rt={title:"Components/PriceTagCell",component:y,tags:["docsPage"],argTypes:{variant:{options:["","isMobile","isDesktop"],control:{type:"select"}}},parameters:{docs:{description:{component:`Typography/PriceTagCell

Component for price-tag (used as a cell in a table) that embraces responsive behavior out of the box, to save time in development

[Figma Design]()
`}}}},nt=l(({variant:e=""})=>{const t=O();return g(I,{sx:{p:t.spacing("15px",2)},children:g(V,{children:g(y,{variant:e||"isMobile",price:"49",children:"PriceTagCell on Mobile (full width background)"})})})},"PriceTagCellForMobile"),at=l(({variant:e=""})=>{const t=O();return g(I,{sx:{p:t.spacing("15px",2)},children:g(V,{children:g(y,{variant:e||"isDesktop",price:"149",children:"PriceTagCell on Desktop (auto width background)"})})})},"PriceTagCellForDesktop"),it=l(({variant:e=""})=>{const t=O();return g(I,{sx:{p:t.spacing("15px",2)},children:g(V,{children:g(y,{variant:e,price:"1149",children:"PriceTagCell should switch between mobile and desktop mode."})})})},"PriceTagCellDetectBreakpoint"),st=["PriceTagCellForMobile","PriceTagCellForDesktop","PriceTagCellDetectBreakpoint"];export{it as PriceTagCellDetectBreakpoint,at as PriceTagCellForDesktop,nt as PriceTagCellForMobile,st as __namedExportsOrder,rt as default};
//# sourceMappingURL=PriceTagCell.stories.e80fd64a.js.map