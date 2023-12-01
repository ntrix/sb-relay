var Ue=Object.defineProperty;var f=(e,r)=>Ue(e,"name",{value:r,configurable:!0});import{_ as Y,b as te,u as be}from"./useThemeProps.5f9fbf4d.js";import{r as a,R as H}from"./index.898f2cd4.js";import{c as E,g as ge,s as ne,a as ze,b as je}from"./styled.a0cfaa0d.js";import{j as U,a as Oe}from"./jsx-runtime.dbbc4e6b.js";import{k as oe}from"./emotion-react.browser.esm.61d128a0.js";import{_ as Ke,T as ce}from"./Paper.10a3f7ff.js";import{u as pe,a as G}from"./useForkRef.8c9269dc.js";import{u as Xe}from"./useIsFocusVisible.bba83061.js";function Ye(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}f(Ye,"_assertThisInitialized");function re(e,r){var i=f(function(t){return r&&a.exports.isValidElement(t)?r(t):t},"mapper"),l=Object.create(null);return e&&a.exports.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=i(n)}),l}f(re,"getChildMapping");function Ae(e,r){e=e||{},r=r||{};function i(h){return h in r?r[h]:e[h]}f(i,"getValueForKey");var l=Object.create(null),n=[];for(var t in e)t in r?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in r){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=i(p)}c[u]=i(u)}for(o=0;o<n.length;o++)c[n[o]]=i(n[o]);return c}f(Ae,"mergeChildMappings");function F(e,r,i){return i[r]!=null?i[r]:e.props[r]}f(F,"getProp");function We(e,r){return re(e.children,function(i){return a.exports.cloneElement(i,{onExited:r.bind(null,i),in:!0,appear:F(i,"appear",e),enter:F(i,"enter",e),exit:F(i,"exit",e)})})}f(We,"getInitialChildMapping");function He(e,r,i){var l=re(e.children),n=Ae(r,l);return Object.keys(n).forEach(function(t){var o=n[t];if(!!a.exports.isValidElement(o)){var c=t in r,u=t in l,p=r[t],h=a.exports.isValidElement(p)&&!p.props.in;u&&(!c||h)?n[t]=a.exports.cloneElement(o,{onExited:i.bind(null,o),in:!0,exit:F(o,"exit",e),enter:F(o,"enter",e)}):!u&&c&&!h?n[t]=a.exports.cloneElement(o,{in:!1}):u&&c&&a.exports.isValidElement(p)&&(n[t]=a.exports.cloneElement(o,{onExited:i.bind(null,o),in:p.props.in,exit:F(o,"exit",e),enter:F(o,"enter",e)}))}}),n}f(He,"getNextChildMapping");var Ge=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},qe={component:"div",childFactory:f(function(r){return r},"childFactory")},se=function(e){Ke(r,e);function r(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Ye(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}f(r,"TransitionGroup");var i=r.prototype;return i.componentDidMount=f(function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},"componentDidMount"),i.componentWillUnmount=f(function(){this.mounted=!1},"componentWillUnmount"),r.getDerivedStateFromProps=f(function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?We(n,c):He(n,o,c),firstRender:!1}},"getDerivedStateFromProps"),i.handleExited=f(function(n,t){var o=re(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=Y({},c.children);return delete u[n.key],{children:u}}))},"handleExited"),i.render=f(function(){var n=this.props,t=n.component,o=n.childFactory,c=te(n,["component","childFactory"]),u=this.state.contextValue,p=Ge(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?H.createElement(ce.Provider,{value:u},p):H.createElement(ce.Provider,{value:u},H.createElement(t,c,p))},"render"),r}(H.Component);se.propTypes={};se.defaultProps=qe;const Je=se;function Qe(e){const{className:r,classes:i,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[h,x]=a.exports.useState(!1),g=E(r,i.ripple,i.rippleVisible,l&&i.ripplePulsate),v={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},m=E(i.child,h&&i.childLeaving,l&&i.childPulsate);return!c&&!h&&x(!0),a.exports.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),U("span",{className:g,style:v,children:U("span",{className:m})})}f(Qe,"Ripple");const Ze=ge("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),b=Ze,et=["center","classes","className"];let q=f(e=>e,"_"),de,fe,he,me;const ee=550,tt=80,nt=oe(de||(de=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ot=oe(fe||(fe=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),rt=oe(he||(he=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),st=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),it=ne(Qe,{name:"MuiTouchRipple",slot:"Ripple"})(me||(me=q`
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
`),b.rippleVisible,nt,ee,({theme:e})=>e.transitions.easing.easeInOut,b.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,b.child,b.childLeaving,ot,ee,({theme:e})=>e.transitions.easing.easeInOut,b.childPulsate,rt,({theme:e})=>e.transitions.easing.easeInOut),at=a.exports.forwardRef(f(function(r,i){const l=be({props:r,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=te(l,et),[u,p]=a.exports.useState([]),h=a.exports.useRef(0),x=a.exports.useRef(null);a.exports.useEffect(()=>{x.current&&(x.current(),x.current=null)},[u]);const g=a.exports.useRef(!1),v=a.exports.useRef(0),m=a.exports.useRef(null),R=a.exports.useRef(null);a.exports.useEffect(()=>()=>{v.current&&clearTimeout(v.current)},[]);const z=a.exports.useCallback(d=>{const{pulsate:M,rippleX:T,rippleY:k,rippleSize:I,cb:O}=d;p(y=>[...y,U(it,{classes:{ripple:E(t.ripple,b.ripple),rippleVisible:E(t.rippleVisible,b.rippleVisible),ripplePulsate:E(t.ripplePulsate,b.ripplePulsate),child:E(t.child,b.child),childLeaving:E(t.childLeaving,b.childLeaving),childPulsate:E(t.childPulsate,b.childPulsate)},timeout:ee,pulsate:M,rippleX:T,rippleY:k,rippleSize:I},h.current)]),h.current+=1,x.current=O},[t]),N=a.exports.useCallback((d={},M={},T=()=>{})=>{const{pulsate:k=!1,center:I=n||M.pulsate,fakeElement:O=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&g.current){g.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(g.current=!0);const y=O?null:R.current,S=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,w,D;if(I||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)V=Math.round(S.width/2),w=Math.round(S.height/2);else{const{clientX:L,clientY:B}=d.touches&&d.touches.length>0?d.touches[0]:d;V=Math.round(L-S.left),w=Math.round(B-S.top)}if(I)D=Math.sqrt((2*S.width**2+S.height**2)/3),D%2===0&&(D+=1);else{const L=Math.max(Math.abs((y?y.clientWidth:0)-V),V)*2+2,B=Math.max(Math.abs((y?y.clientHeight:0)-w),w)*2+2;D=Math.sqrt(L**2+B**2)}d!=null&&d.touches?m.current===null&&(m.current=()=>{z({pulsate:k,rippleX:V,rippleY:w,rippleSize:D,cb:T})},v.current=setTimeout(()=>{m.current&&(m.current(),m.current=null)},tt)):z({pulsate:k,rippleX:V,rippleY:w,rippleSize:D,cb:T})},[n,z]),j=a.exports.useCallback(()=>{N({},{pulsate:!0})},[N]),_=a.exports.useCallback((d,M)=>{if(clearTimeout(v.current),(d==null?void 0:d.type)==="touchend"&&m.current){m.current(),m.current=null,v.current=setTimeout(()=>{_(d,M)});return}m.current=null,p(T=>T.length>0?T.slice(1):T),x.current=M},[]);return a.exports.useImperativeHandle(i,()=>({pulsate:j,start:N,stop:_}),[j,N,_]),U(st,Y({className:E(b.root,t.root,o),ref:R},c,{children:U(Je,{component:null,exit:!0,children:u})}))},"TouchRipple")),lt=at;function ut(e){return ze("MuiButtonBase",e)}f(ut,"getButtonBaseUtilityClass");const ct=ge("MuiButtonBase",["root","disabled","focusVisible"]),pt=ct,dt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ft=f(e=>{const{disabled:r,focusVisible:i,focusVisibleClassName:l,classes:n}=e,o=je({root:["root",r&&"disabled",i&&"focusVisible"]},ut,n);return i&&l&&(o.root+=` ${l}`),o},"useUtilityClasses"),ht=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${pt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),mt=a.exports.forwardRef(f(function(r,i){const l=be({props:r,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:h=!1,disableTouchRipple:x=!1,focusRipple:g=!1,LinkComponent:v="a",onBlur:m,onClick:R,onContextMenu:z,onDragLeave:N,onFocus:j,onFocusVisible:_,onKeyDown:d,onKeyUp:M,onMouseDown:T,onMouseLeave:k,onMouseUp:I,onTouchEnd:O,onTouchMove:y,onTouchStart:S,tabIndex:V=0,TouchRippleProps:w,touchRippleRef:D,type:L}=l,B=te(l,dt),K=a.exports.useRef(null),C=a.exports.useRef(null),xe=pe(C,D),{isFocusVisibleRef:ie,onFocus:Re,onBlur:Me,ref:Te}=Xe(),[$,A]=a.exports.useState(!1);p&&$&&A(!1),a.exports.useImperativeHandle(n,()=>({focusVisible:()=>{A(!0),K.current.focus()}}),[]);const[J,ye]=a.exports.useState(!1);a.exports.useEffect(()=>{ye(!0)},[]);const Ce=J&&!h&&!p;a.exports.useEffect(()=>{$&&g&&!h&&J&&C.current.pulsate()},[h,g,$,J]);function P(s,le,Ie=x){return G(ue=>(le&&le(ue),!Ie&&C.current&&C.current[s](ue),!0))}f(P,"useRippleHandler");const Ee=P("start",T),ve=P("stop",z),Ve=P("stop",N),Be=P("stop",I),Pe=P("stop",s=>{$&&s.preventDefault(),k&&k(s)}),Se=P("start",S),we=P("stop",O),De=P("stop",y),ke=P("stop",s=>{Me(s),ie.current===!1&&A(!1),m&&m(s)},!1),Le=G(s=>{K.current||(K.current=s.currentTarget),Re(s),ie.current===!0&&(A(!0),_&&_(s)),j&&j(s)}),Q=f(()=>{const s=K.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},"isNonNativeButton"),Z=a.exports.useRef(!1),$e=G(s=>{g&&!Z.current&&$&&C.current&&s.key===" "&&(Z.current=!0,C.current.stop(s,()=>{C.current.start(s)})),s.target===s.currentTarget&&Q()&&s.key===" "&&s.preventDefault(),d&&d(s),s.target===s.currentTarget&&Q()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),Fe=G(s=>{g&&s.key===" "&&C.current&&$&&!s.defaultPrevented&&(Z.current=!1,C.current.stop(s,()=>{C.current.pulsate(s)})),M&&M(s),R&&s.target===s.currentTarget&&Q()&&s.key===" "&&!s.defaultPrevented&&R(s)});let W=u;W==="button"&&(B.href||B.to)&&(W=v);const X={};W==="button"?(X.type=L===void 0?"button":L,X.disabled=p):(!B.href&&!B.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const Ne=pe(i,Te,K),ae=Y({},l,{centerRipple:t,component:u,disabled:p,disableRipple:h,disableTouchRipple:x,focusRipple:g,tabIndex:V,focusVisible:$}),_e=ft(ae);return Oe(ht,Y({as:W,className:E(_e.root,c),ownerState:ae,onBlur:ke,onClick:R,onContextMenu:ve,onFocus:Le,onKeyDown:$e,onKeyUp:Fe,onMouseDown:Ee,onMouseLeave:Pe,onMouseUp:Be,onDragLeave:Ve,onTouchEnd:we,onTouchMove:De,onTouchStart:Se,ref:Ne,tabIndex:p?-1:V,type:L},X,B,{children:[o,Ce?U(lt,Y({ref:xe,center:t},w)):null]}))},"ButtonBase")),Vt=mt;export{Vt as B,Ye as _};
//# sourceMappingURL=ButtonBase.20d6bb62.js.map
