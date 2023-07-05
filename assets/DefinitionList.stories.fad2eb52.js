var l=Object.defineProperty;var s=(e,n)=>l(e,"name",{value:n,configurable:!0});import{u as c}from"./useBreakpoints.0db965e3.js";import{j as i,a as p}from"./jsx-runtime.03a443f3.js";import{S as r}from"./Stack.a04ad4c8.js";import{D as d}from"./Divider.fedcd1f8.js";import{T as o}from"./Typography.81dcbb5a.js";import{u}from"./useTheme.bc974d8d.js";import"./useThemeProps.524cd10b.js";import"./useEnhancedEffect.77f3f6f1.js";import"./iframe.3ee781c9.js";import"./styled.8bc47fa6.js";import"./dividerClasses.4698614e.js";function f({item:e,dense:n}){const t=u(),m=c();return p(r,{spacing:3,direction:"row",sx:{p:n?t.spacing(1,0):t.spacing(2,0)},children:[i(o,{variant:"body1",sx:{flexBasis:m?t.spacing(11):t.spacing(20),color:t.palette.text.secondary,flexShrink:0,hyphens:"auto"},lang:"de",children:e.key}),i(o,{variant:"body1",sx:{color:t.palette.text.primary},children:e.value})]})}s(f,"DefinitionListItem");function a({items:e,dense:n=!1}){return i(r,{divider:i(d,{flexItem:!0}),children:e.map(t=>i(f,{item:t,dense:n},t.key))})}s(a,"DefinitionList");try{a.displayName="DefinitionList",a.__docgenInfo={description:"",displayName:"DefinitionList",props:{dense:{defaultValue:{value:"false"},description:"",name:"dense",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DefinitionListItem[]"}}}}}catch{}const E={title:"Components/DefinitionList",component:a,tags:["docsPage"],argTypes:{},parameters:{docs:{description:{component:`The DefinitionList relates to the same usage as meant by HTML definiton lists. Each item has a term and a definition.
				[Figma Design](https://www.figma.com/file/p7Vfl63kqlJJBdaia8H9ku/UI-Component-Profiles?node-id=21%3A2345&t=94s1AsFYqvAPGmW8-0)
				`}}}},h=[{key:"Unternehmen",value:"Schreinerei Hammerich"},{key:"Donaudampfschifffahrtselektrizit\xE4ten",value:"Ein extra langes Wort, dass durch Bindestriche geteilt wird. Das funktioniert nur wenn die Sprache auf Deutsch gesetzt ist."}],y=[{key:"This is so dense",value:"Handwerkerausweis"},{key:"I feel so compressed",value:"Imperdiet non potenti dictum dolor quam volutpat aptent senectus, mollis id lectus proin sit parturient hac blandit diam, donec euismod nostra orci tristique porttitor placerat. Laoreet phasellus cum mattis consectetur tincidunt venenatis ultricies torquent habitant nam bibendum."},{key:"Phone",value:"123123123"}],g=s(e=>i(a,{...e}),"DefinitionListNormal");g.args={dense:!1,items:h};const H=s(e=>i(a,{dense:!0,items:y}),"DefinitionListDense"),N=["DefinitionListNormal","DefinitionListDense"];export{H as DefinitionListDense,g as DefinitionListNormal,N as __namedExportsOrder,E as default};
//# sourceMappingURL=DefinitionList.stories.fad2eb52.js.map
