var r=Object.defineProperty;var i=(e,t)=>r(e,"name",{value:t,configurable:!0});import{H as n}from"./index.89f3ee4b.js";import{j as o}from"./jsx-runtime.1558fe13.js";import{S as a}from"./Stack.ada10a53.js";import{u as s}from"./useTheme.fef45b28.js";import"./useBreakpoints.653b96a7.js";import"./index.a4b8bac3.js";import"./iframe.227814e8.js";import"./useThemeProps.8c227988.js";import"./useEnhancedEffect.acfecbd0.js";import"./Typography.444c9f58.js";import"./styled.a662cef3.js";import"./extendSxProp.0b45a4c6.js";const D={title:"Components/Headline3",component:n,tags:["docsPage"],argTypes:{variant:{options:["","isMobile","isDesktop"],control:{type:"select"}}},parameters:{docs:{description:{component:`Typography/Headline3

Component which can contain a headline text which changes its style from a specified breakpoint on. Since MUI just provides a set of scalable headline styles, but has no solution for screen adaptable styles, we have to find our own solution. This could be a wrapper of the already existing MUI Typography component with screen reactive props.

Headline3 should be MUI variant \u201Ch5\u201D in the beginning and \u201Ch3\u201D after switching to desktop mode.

[Figma Design](https://www.figma.com/file/p7Vfl63kqlJJBdaia8H9ku/UI-Component-Profiles?node-id=3%3A1219&t=isfBHylww46jenZZ-4)
`}}}},x=i(({variant:e=""})=>{const t=s();return o(a,{sx:{p:t.spacing("15px",2)},children:o(n,{variant:e||"isMobile",children:"Headline3 on Mobile (h5 variant)"})})},"Headline3forMobile"),y=i(({variant:e=""})=>{const t=s();return o(a,{sx:{p:t.spacing("15px",2)},children:o(n,{variant:e||"isDesktop",children:"Headline3 on Desktop (h3 variant)"})})},"Headline3forDesktop"),v=i(({variant:e=""})=>{const t=s();return o(a,{sx:{p:t.spacing("15px",2)},children:o(n,{variant:e,children:"Headline3 should be MUI variant \u201Ch5\u201D in the beginning and \u201Ch3\u201D after switching to desktop mode."})})},"Headline3DetectBreakpoint"),M=["Headline3forMobile","Headline3forDesktop","Headline3DetectBreakpoint"];export{v as Headline3DetectBreakpoint,y as Headline3forDesktop,x as Headline3forMobile,M as __namedExportsOrder,D as default};
//# sourceMappingURL=Headline3.stories.05f13b44.js.map