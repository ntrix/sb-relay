var Ue=Object.defineProperty;var d=(e,r)=>Ue(e,"name",{value:r,configurable:!0});import{_ as Y,k as te,u as me}from"./useThemeProps.c5a60eed.js";import{r as a,j as P,R as ze,a as je}from"./jsx-runtime.432ff4b3.js";import{c as E,g as be,s as ne,a as Oe,b as Ke}from"./styled.79a06d59.js";import{k as oe}from"./emotion-react.browser.esm.ff18ff07.js";import{_ as Xe,T as ce}from"./TransitionGroupContext.dd305707.js";import{u as Z,a as H}from"./useForkRef.65fd2ee2.js";import{u as Ye}from"./useIsFocusVisible.2fdb266a.js";function Ae(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}d(Ae,"_assertThisInitialized");function re(e,r){var i=d(function(t){return r&&a.exports.isValidElement(t)?r(t):t},"mapper"),l=Object.create(null);return e&&a.exports.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=i(n)}),l}d(re,"getChildMapping");function We(e,r){e=e||{},r=r||{};function i(h){return h in r?r[h]:e[h]}d(i,"getValueForKey");var l=Object.create(null),n=[];for(var t in e)t in r?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in r){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=i(p)}c[u]=i(u)}for(o=0;o<n.length;o++)c[n[o]]=i(n[o]);return c}d(We,"mergeChildMappings");function N(e,r,i){return i[r]!=null?i[r]:e.props[r]}d(N,"getProp");function He(e,r){return re(e.children,function(i){return a.exports.cloneElement(i,{onExited:r.bind(null,i),in:!0,appear:N(i,"appear",e),enter:N(i,"enter",e),exit:N(i,"exit",e)})})}d(He,"getInitialChildMapping");function Ge(e,r,i){var l=re(e.children),n=We(r,l);return Object.keys(n).forEach(function(t){var o=n[t];if(!!a.exports.isValidElement(o)){var c=t in r,u=t in l,p=r[t],h=a.exports.isValidElement(p)&&!p.props.in;u&&(!c||h)?n[t]=a.exports.cloneElement(o,{onExited:i.bind(null,o),in:!0,exit:N(o,"exit",e),enter:N(o,"enter",e)}):!u&&c&&!h?n[t]=a.exports.cloneElement(o,{in:!1}):u&&c&&a.exports.isValidElement(p)&&(n[t]=a.exports.cloneElement(o,{onExited:i.bind(null,o),in:p.props.in,exit:N(o,"exit",e),enter:N(o,"enter",e)}))}}),n}d(Ge,"getNextChildMapping");var qe=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},Je={component:"div",childFactory:d(function(r){return r},"childFactory")},se=function(e){Xe(r,e);function r(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Ae(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}d(r,"TransitionGroup");var i=r.prototype;return i.componentDidMount=d(function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},"componentDidMount"),i.componentWillUnmount=d(function(){this.mounted=!1},"componentWillUnmount"),r.getDerivedStateFromProps=d(function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?He(n,c):Ge(n,o,c),firstRender:!1}},"getDerivedStateFromProps"),i.handleExited=d(function(n,t){var o=re(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=Y({},c.children);return delete u[n.key],{children:u}}))},"handleExited"),i.render=d(function(){var n=this.props,t=n.component,o=n.childFactory,c=te(n,["component","childFactory"]),u=this.state.contextValue,p=qe(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?P(ce.Provider,{value:u,children:p}):P(ce.Provider,{value:u,children:P(t,{...c,children:p})})},"render"),r}(ze.Component);se.propTypes={};se.defaultProps=Je;const Qe=se;function Ze(e){const{className:r,classes:i,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[h,x]=a.exports.useState(!1),g=E(r,i.ripple,i.rippleVisible,l&&i.ripplePulsate),w={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},m=E(i.child,h&&i.childLeaving,l&&i.childPulsate);return!c&&!h&&x(!0),a.exports.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),P("span",{className:g,style:w,children:P("span",{className:m})})}d(Ze,"Ripple");const et=be("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),b=et,tt=["center","classes","className"];let G=d(e=>e,"_"),pe,de,fe,he;const ee=550,nt=80,ot=oe(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),rt=oe(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),st=oe(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),it=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),at=ne(Ze,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),b.rippleVisible,ot,ee,({theme:e})=>e.transitions.easing.easeInOut,b.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,b.child,b.childLeaving,rt,ee,({theme:e})=>e.transitions.easing.easeInOut,b.childPulsate,st,({theme:e})=>e.transitions.easing.easeInOut),lt=a.exports.forwardRef(d(function(r,i){const l=me({props:r,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=te(l,tt),[u,p]=a.exports.useState([]),h=a.exports.useRef(0),x=a.exports.useRef(null);a.exports.useEffect(()=>{x.current&&(x.current(),x.current=null)},[u]);const g=a.exports.useRef(!1),w=a.exports.useRef(null),m=a.exports.useRef(null),R=a.exports.useRef(null);a.exports.useEffect(()=>()=>{clearTimeout(w.current)},[]);const z=a.exports.useCallback(f=>{const{pulsate:M,rippleX:T,rippleY:L,rippleSize:U,cb:O}=f;p(y=>[...y,P(at,{classes:{ripple:E(t.ripple,b.ripple),rippleVisible:E(t.rippleVisible,b.rippleVisible),ripplePulsate:E(t.ripplePulsate,b.ripplePulsate),child:E(t.child,b.child),childLeaving:E(t.childLeaving,b.childLeaving),childPulsate:E(t.childPulsate,b.childPulsate)},timeout:ee,pulsate:M,rippleX:T,rippleY:L,rippleSize:U},h.current)]),h.current+=1,x.current=O},[t]),_=a.exports.useCallback((f={},M={},T)=>{const{pulsate:L=!1,center:U=n||M.pulsate,fakeElement:O=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&g.current){g.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(g.current=!0);const y=O?null:R.current,S=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,k,D;if(U||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(S.width/2),k=Math.round(S.height/2);else{const{clientX:$,clientY:V}=f.touches?f.touches[0]:f;v=Math.round($-S.left),k=Math.round(V-S.top)}if(U)D=Math.sqrt((2*S.width**2+S.height**2)/3),D%2===0&&(D+=1);else{const $=Math.max(Math.abs((y?y.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((y?y.clientHeight:0)-k),k)*2+2;D=Math.sqrt($**2+V**2)}f!=null&&f.touches?m.current===null&&(m.current=()=>{z({pulsate:L,rippleX:v,rippleY:k,rippleSize:D,cb:T})},w.current=setTimeout(()=>{m.current&&(m.current(),m.current=null)},nt)):z({pulsate:L,rippleX:v,rippleY:k,rippleSize:D,cb:T})},[n,z]),j=a.exports.useCallback(()=>{_({},{pulsate:!0})},[_]),I=a.exports.useCallback((f,M)=>{if(clearTimeout(w.current),(f==null?void 0:f.type)==="touchend"&&m.current){m.current(),m.current=null,w.current=setTimeout(()=>{I(f,M)});return}m.current=null,p(T=>T.length>0?T.slice(1):T),x.current=M},[]);return a.exports.useImperativeHandle(i,()=>({pulsate:j,start:_,stop:I}),[j,_,I]),P(it,Y({className:E(t.root,b.root,o),ref:R},c,{children:P(Qe,{component:null,exit:!0,children:u})}))},"TouchRipple")),ut=lt;function ct(e){return Oe("MuiButtonBase",e)}d(ct,"getButtonBaseUtilityClass");const pt=be("MuiButtonBase",["root","disabled","focusVisible"]),dt=pt,ft=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ht=d(e=>{const{disabled:r,focusVisible:i,focusVisibleClassName:l,classes:n}=e,o=Ke({root:["root",r&&"disabled",i&&"focusVisible"]},ct,n);return i&&l&&(o.root+=` ${l}`),o},"useUtilityClasses"),mt=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${dt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),bt=a.exports.forwardRef(d(function(r,i){const l=me({props:r,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:h=!1,disableTouchRipple:x=!1,focusRipple:g=!1,LinkComponent:w="a",onBlur:m,onClick:R,onContextMenu:z,onDragLeave:_,onFocus:j,onFocusVisible:I,onKeyDown:f,onKeyUp:M,onMouseDown:T,onMouseLeave:L,onMouseUp:U,onTouchEnd:O,onTouchMove:y,onTouchStart:S,tabIndex:v=0,TouchRippleProps:k,touchRippleRef:D,type:$}=l,V=te(l,ft),K=a.exports.useRef(null),C=a.exports.useRef(null),ge=Z(C,D),{isFocusVisibleRef:ie,onFocus:xe,onBlur:Re,ref:Me}=Ye(),[F,A]=a.exports.useState(!1);p&&F&&A(!1),a.exports.useImperativeHandle(n,()=>({focusVisible:()=>{A(!0),K.current.focus()}}),[]);const[q,Te]=a.exports.useState(!1);a.exports.useEffect(()=>{Te(!0)},[]);const ye=q&&!h&&!p;a.exports.useEffect(()=>{F&&g&&!h&&q&&C.current.pulsate()},[h,g,F,q]);function B(s,le,Ie=x){return H(ue=>(le&&le(ue),!Ie&&C.current&&C.current[s](ue),!0))}d(B,"useRippleHandler");const Ce=B("start",T),Ee=B("stop",z),ve=B("stop",_),Ve=B("stop",U),Be=B("stop",s=>{F&&s.preventDefault(),L&&L(s)}),Pe=B("start",S),we=B("stop",O),Se=B("stop",y),ke=B("stop",s=>{Re(s),ie.current===!1&&A(!1),m&&m(s)},!1),De=H(s=>{K.current||(K.current=s.currentTarget),xe(s),ie.current===!0&&(A(!0),I&&I(s)),j&&j(s)}),J=d(()=>{const s=K.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},"isNonNativeButton"),Q=a.exports.useRef(!1),Le=H(s=>{g&&!Q.current&&F&&C.current&&s.key===" "&&(Q.current=!0,C.current.stop(s,()=>{C.current.start(s)})),s.target===s.currentTarget&&J()&&s.key===" "&&s.preventDefault(),f&&f(s),s.target===s.currentTarget&&J()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),$e=H(s=>{g&&s.key===" "&&C.current&&F&&!s.defaultPrevented&&(Q.current=!1,C.current.stop(s,()=>{C.current.pulsate(s)})),M&&M(s),R&&s.target===s.currentTarget&&J()&&s.key===" "&&!s.defaultPrevented&&R(s)});let W=u;W==="button"&&(V.href||V.to)&&(W=w);const X={};W==="button"?(X.type=$===void 0?"button":$,X.disabled=p):(!V.href&&!V.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const Fe=Z(Me,K),Ne=Z(i,Fe),ae=Y({},l,{centerRipple:t,component:u,disabled:p,disableRipple:h,disableTouchRipple:x,focusRipple:g,tabIndex:v,focusVisible:F}),_e=ht(ae);return je(mt,Y({as:W,className:E(_e.root,c),ownerState:ae,onBlur:ke,onClick:R,onContextMenu:Ee,onFocus:De,onKeyDown:Le,onKeyUp:$e,onMouseDown:Ce,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:ve,onTouchEnd:we,onTouchMove:Se,onTouchStart:Pe,ref:Ne,tabIndex:p?-1:v,type:$},X,V,{children:[o,ye?P(ut,Y({ref:ge,center:t},k)):null]}))},"ButtonBase")),Vt=bt;export{Vt as B,Ae as _};
//# sourceMappingURL=ButtonBase.6b31cd24.js.map
