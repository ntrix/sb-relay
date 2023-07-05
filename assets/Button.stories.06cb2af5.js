var m=Object.defineProperty;var o=(t,r)=>m(t,"name",{value:r,configurable:!0});import{P as n,B as i,S as a,A as l}from"./ActionBar.0ee0a2e2.js";import{j as e,a as s}from"./jsx-runtime.03a443f3.js";import{S as c}from"./Stack.a04ad4c8.js";import{T as u}from"./Typography.81dcbb5a.js";import"./useThemeProps.524cd10b.js";import"./styled.8bc47fa6.js";import"./ButtonBase.9c5da696.js";import"./emotion-react.browser.esm.6ea6ef1a.js";import"./TransitionGroupContext.bd2cb9c4.js";import"./useForkRef.a800d31c.js";import"./useEnhancedEffect.77f3f6f1.js";import"./useIsFocusVisible.fca6b816.js";import"./Box.89c4618f.js";import"./iframe.3ee781c9.js";const _={title:"Components/Button",tags:["docsPage"],argTypes:{size:{options:["small","medium","large"],control:{type:"select"}},color:{options:["Creative","Neutral","Destructive"],control:{type:"select"}}},parameters:{docs:{description:{component:'To keep our code maintainable and to ensure an easy way to make centralized updates,we should import the short hand components from `./app/mui-custom/Button/[PrimaryButton|SecondaryButton]`, which nest the native MUI component with some presets.\n\n* For [primary actions](https://www.figma.com/file/mYAbqvQ0h7Odo1PP89X6Hs/Design-Guidelines?node-id=103%3A56&viewport=1011%2C-838%2C0.46&t=K09beyPstLvNKlQR-11), the shorthand would be `<PrimaryButton />`.\n* For [secondary actions](https://www.figma.com/file/mYAbqvQ0h7Odo1PP89X6Hs/Design-Guidelines?node-id=103%3A56&viewport=1011%2C-838%2C0.46&t=K09beyPstLvNKlQR-11), the shorthand would be `<SecondaryButton />`.\n\n\nThe colors can still be adapted. Therefore, use the `ButtonColor` enum which you can import from `./app/types/mui-custom.d.ts`, too. Use the color concept from the [guidelines](https://www.figma.com/file/mYAbqvQ0h7Odo1PP89X6Hs/Design-Guidelines?node-id=103%3A38&viewport=938%2C-731%2C0.46&t=K09beyPstLvNKlQR-11) and choose one of the colors Creative, Neutral, Destructive.\n\n```export enum ButtonColor {\n    Creative = "primary",\n    Neutral = "secondary",\n    Destructive = "error",\n}```\n\nThe default color for primary actions will be `ButtonColor.Creative`.\nFor secondary actions, the default color is `ButtonColor.Neutral`.\n\nA complete example of a primary destructive action button would be:\n\n```<PrimaryButton color={ButtonColor.Destructive}>My destructive Button</PrimaryButton>```\n\n> \u{1F913} **Advise** \n\n> Consider using the [ActionBar](/?path=/story/components-actionbars--simple-action-bar) component prior to single button usage.\n\n---'}}}},d=o(({color:t,...r})=>e(n,{color:i[t],...r,children:"Primary Button"}),"Primary");d.args={color:"Creative"};const p=o(({color:t,...r})=>e(a,{color:i[t],...r,children:"Secondary Button"}),"Secondary");p.args={color:"Neutral"};const E=o(t=>e("div",{children:s(c,{direction:"row",spacing:3,children:[e(a,{...t,children:"Cancel"}),e(n,{...t,children:"Submit"})]})}),"_ExampleCreativeButtonGroup"),N=o(t=>e("div",{children:s(c,{direction:"row",spacing:3,children:[e(a,{...t,children:"Cancel"}),e(n,{color:i.Destructive,...t,children:"Delete"})]})}),"_ExampleDestructiveButtonGroup"),G=o(t=>e("div",{children:s(c,{spacing:2,sx:{maxWidth:400},children:[e(u,{variant:"h1",children:"Amet consectetur montes fermentum etiam conubia himenaeos"}),e(u,{variant:"body1",children:"Ridiculus accumsan curae dictum penatibus sit purus rhoncus, inceptos libero nascetur habitant cum consectetur curabitur, praesent senectus auctor in quisque eros. Euismod a sit ad aenean praesent velit cursus cubilia facilisi, est commodo curabitur laoreet lobortis urna quis dui, quam vulputate ut porttitor amet eros taciti fringilla. Rhoncus integer arcu fames neque cum congue nisi, parturient natoque porta hendrerit risus posuere convallis, class mauris quisque etiam penatibus taciti."}),e(l,{primary:{children:"Read more"},primaryAsSecondary:!0})]})}),"_ExampleButtonInContent"),T=["Primary","Secondary","_ExampleCreativeButtonGroup","_ExampleDestructiveButtonGroup","_ExampleButtonInContent"];export{d as Primary,p as Secondary,G as _ExampleButtonInContent,E as _ExampleCreativeButtonGroup,N as _ExampleDestructiveButtonGroup,T as __namedExportsOrder,_ as default};
//# sourceMappingURL=Button.stories.06cb2af5.js.map