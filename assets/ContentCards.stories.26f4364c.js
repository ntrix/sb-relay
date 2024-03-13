var u=Object.defineProperty;var r=(e,n)=>u(e,"name",{value:n,configurable:!0});import{H as h}from"./index.89f3ee4b.js";import{j as t,a as i}from"./jsx-runtime.1558fe13.js";import{P as C}from"./Paper.a8334572.js";import{S as l}from"./Stack.ada10a53.js";import{T as f}from"./Typography.444c9f58.js";import{A as s}from"./ActionBar.88a0ff81.js";import{ListedCardBasic as y}from"./ListedCard.stories.a23bf46d.js";import{PriceTagCellForMobile as b}from"./PriceTagCell.stories.060c29c6.js";import{C as v}from"./Card.6d38d1a7.js";import"./useBreakpoints.653b96a7.js";import"./index.a4b8bac3.js";import"./iframe.227814e8.js";import"./useThemeProps.8c227988.js";import"./useEnhancedEffect.acfecbd0.js";import"./useTheme.fef45b28.js";import"./styled.a662cef3.js";import"./extendSxProp.0b45a4c6.js";import"./SecondaryButton.f0180866.js";import"./interopRequireDefault.c7dd7eb9.js";import"./ButtonBase.9f86f376.js";import"./emotion-react.browser.esm.e1359c4e.js";import"./useForkRef.538eb251.js";import"./useIsFocusVisible.5906d204.js";import"./CircularProgress.b8ad8280.js";import"./useId.dbdf2a5e.js";import"./TextGroupText.e8c5bdae.js";import"./Avatar.cc768ef4.js";import"./createSvgIcon.255f8e10.js";import"./jsx-runtime_commonjs-proxy.df8a3e5f.js";import"./createChainedFunction.c18fbd13.js";import"./isMuiElement.5af097e7.js";import"./ownerWindow.bb519db8.js";import"./useControlled.838128d6.js";import"./useTranslation.6f001984.js";import"./unsupportedIterableToArray.7c1c80f8.js";import"./index.e06ba34b.js";import"./TableRow.66dbed77.js";import"./Grid.e4367fd2.js";const o=r(function({headline:n,text:m,children:p,actionBar:d,actionBarPosition:a="bottom",...c}){return t(C,{variant:"outlined",children:i(l,{padding:3,spacing:a==="top"?0:5,...c,children:[i(l,{spacing:2,...c,children:[t(h,{children:n}),t(f,{variant:"body1",children:m})]}),a==="top"&&d,p,a==="bottom"&&d]})})},"ContentCard2");try{o.displayName="ContentCard",o.__docgenInfo={description:"",displayName:"ContentCard",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"ReactNode"}},actionBar:{defaultValue:null,description:"",name:"actionBar",required:!1,type:{name:"ReactElement<({ primary, primaryAsSecondary, secondary, alternate, children, sx, ...rest }: ActionBarProps) => Element, string | JSXElementConstructor<any>>"}},actionBarPosition:{defaultValue:{value:"bottom"},description:"",name:"actionBarPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"Object"}}}}}catch{}const at={title:"Components/ContentCard",component:v,tags:["docsPage"],parameters:{docs:{description:{component:`
Content section used as part of the Page component. It can work as a group to separate mixed content.

[Figma Design](https://www.figma.com/file/p7Vfl63kqlJJBdaia8H9ku/UI-Component-Profiles?node-id=41%3A5473&t=ptpzRJ5kAWWzQyOm-0)
`}}}},dt=r(e=>i(o,{headline:"Headline example",text:"Some small text with 2 rows",children:[t("div",{children:"First child"}),t("div",{children:"Second child"}),t("div",{children:"Third child"}),t("div",{children:"Forth child"})]}),"SimpleContentCardWithoutButton"),ct=r(e=>i(o,{headline:"Headline example",text:g,actionBar:t(s,{primary:{children:"Link or Action",onClick:()=>alert("Alert")},primaryAsSecondary:!0}),children:[t("div",{children:"First child"}),t("div",{children:"Second child"})]}),"SimpleContentCardWithButton"),lt=r(e=>i(o,{headline:"ContentCard with actionBar before Children",text:t(b,{}),actionBar:t(s,{primary:{children:"Action Button",onClick:()=>alert("Example for ContentCard with actionBar/button(s) above of/before Children")}}),actionBarPosition:"top",children:[t("hr",{}),t("div",{children:"First child between Dividers"}),t("hr",{}),t(y,{}),t("div",{children:"Third child"}),t("div",{children:"Fourth child"})]}),"CardWithButtonsBeforeChildren"),g="Ridiculus accumsan curae dictum penatibus sit purus rhoncus, inceptos libero nasceturhabitant cum consectetur curabitur, praesent senectus auctor in quisque eros. Euismod asit ad aenean praesent velit cursus cubilia facilisi, est commodo curabitur laoreetlobortis urna quis dui, quam vulputate ut porttitor amet eros taciti fringilla. Rhoncusinteger arcu fames neque cum congue nisi, parturient natoque porta hendrerit risusposuere convallis, class mauris quisque etiam penatibus taciti.",st=["SimpleContentCardWithoutButton","SimpleContentCardWithButton","CardWithButtonsBeforeChildren"];export{lt as CardWithButtonsBeforeChildren,ct as SimpleContentCardWithButton,dt as SimpleContentCardWithoutButton,st as __namedExportsOrder,at as default};
//# sourceMappingURL=ContentCards.stories.26f4364c.js.map