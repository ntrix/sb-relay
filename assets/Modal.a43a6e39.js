var Le=Object.defineProperty;var a=(n,r)=>Le(n,"name",{value:r,configurable:!0});import{j as V,_ as g,c as ve}from"./useThemeProps.cb18d8c8.js";import{r as u,a as ye,j as I,R as ne}from"./jsx-runtime.e33d60e0.js";import{a as Te,g as Re,c as ke,b as Se,s as ie}from"./styled.bd1beb39.js";import{u as Ue}from"./useTheme.26b62596.js";import{_ as _e,T as Ce}from"./TransitionGroupContext.97a255f7.js";import{r as $e,R as oe}from"./index.84bc0df4.js";import{u as q,s as fe,a as pe}from"./useForkRef.aea557aa.js";import{i as Ne}from"./isHostComponent.c8fe3a80.js";import{g as He}from"./getScrollbarSize.bc370221.js";import{a as K,o as ae}from"./ownerWindow.08944ff6.js";import{c as he}from"./useId.05e58455.js";import{u as me}from"./useEnhancedEffect.67846e2c.js";function Ke(n){return typeof n=="function"?n():n}a(Ke,"getContainer$1");const je=u.exports.forwardRef(a(function(r,s){const{children:t,container:o,disablePortal:e=!1}=r,[i,l]=u.exports.useState(null),c=q(u.exports.isValidElement(t)?t.ref:null,s);return me(()=>{e||l(Ke(o)||document.body)},[o,e]),me(()=>{if(i&&!e)return fe(s,i),()=>{fe(s,null)}},[s,i,e]),e?u.exports.isValidElement(t)?u.exports.cloneElement(t,{ref:c}):t:i&&$e.exports.createPortal(t,i)},"Portal")),We=je;function Ge(n){const r=K(n);return r.body===n?ae(n).innerWidth>r.documentElement.clientWidth:n.scrollHeight>n.clientHeight}a(Ge,"isOverflowing");function Y(n,r){r?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden")}a(Y,"ariaHidden");function xe(n){return parseInt(ae(n).getComputedStyle(n).paddingRight,10)||0}a(xe,"getPaddingRight");function Ee(n,r,s,t=[],o){const e=[r,s,...t],i=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(n.children,l=>{e.indexOf(l)===-1&&i.indexOf(l.tagName)===-1&&Y(l,o)})}a(Ee,"ariaHiddenSiblings");function re(n,r){let s=-1;return n.some((t,o)=>r(t)?(s=o,!0):!1),s}a(re,"findIndexOf");function ze(n,r){const s=[],t=n.container;if(!r.disableScrollLock){if(Ge(t)){const c=He(K(t));s.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${xe(t)+c}px`;const p=K(t).querySelectorAll(".mui-fixed");[].forEach.call(p,f=>{s.push({value:f.style.paddingRight,property:"padding-right",el:f}),f.style.paddingRight=`${xe(f)+c}px`})}const e=t.parentElement,i=ae(t),l=(e==null?void 0:e.nodeName)==="HTML"&&i.getComputedStyle(e).overflowY==="scroll"?e:t;s.push({value:l.style.overflow,property:"overflow",el:l},{value:l.style.overflowX,property:"overflow-x",el:l},{value:l.style.overflowY,property:"overflow-y",el:l}),l.style.overflow="hidden"}return a(()=>{s.forEach(({value:e,el:i,property:l})=>{e?i.style.setProperty(l,e):i.style.removeProperty(l)})},"restore")}a(ze,"handleContainer");function Xe(n){const r=[];return[].forEach.call(n.children,s=>{s.getAttribute("aria-hidden")==="true"&&r.push(s)}),r}a(Xe,"getHiddenSiblings");class Me{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(r,s){let t=this.modals.indexOf(r);if(t!==-1)return t;t=this.modals.length,this.modals.push(r),r.modalRef&&Y(r.modalRef,!1);const o=Xe(s);Ee(s,r.mount,r.modalRef,o,!0);const e=re(this.containers,i=>i.container===s);return e!==-1?(this.containers[e].modals.push(r),t):(this.containers.push({modals:[r],container:s,restore:null,hiddenSiblings:o}),t)}mount(r,s){const t=re(this.containers,e=>e.modals.indexOf(r)!==-1),o=this.containers[t];o.restore||(o.restore=ze(o,s))}remove(r){const s=this.modals.indexOf(r);if(s===-1)return s;const t=re(this.containers,e=>e.modals.indexOf(r)!==-1),o=this.containers[t];if(o.modals.splice(o.modals.indexOf(r),1),this.modals.splice(s,1),o.modals.length===0)o.restore&&o.restore(),r.modalRef&&Y(r.modalRef,!0),Ee(o.container,r.mount,r.modalRef,o.hiddenSiblings,!1),this.containers.splice(t,1);else{const e=o.modals[o.modals.length-1];e.modalRef&&Y(e.modalRef,!1)}return s}isTopModal(r){return this.modals.length>0&&this.modals[this.modals.length-1]===r}}a(Me,"ModalManager");const Ye=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function qe(n){const r=parseInt(n.getAttribute("tabindex"),10);return Number.isNaN(r)?n.contentEditable==="true"||(n.nodeName==="AUDIO"||n.nodeName==="VIDEO"||n.nodeName==="DETAILS")&&n.getAttribute("tabindex")===null?0:n.tabIndex:r}a(qe,"getTabIndex");function Ve(n){if(n.tagName!=="INPUT"||n.type!=="radio"||!n.name)return!1;const r=a(t=>n.ownerDocument.querySelector(`input[type="radio"]${t}`),"getRadio");let s=r(`[name="${n.name}"]:checked`);return s||(s=r(`[name="${n.name}"]`)),s!==n}a(Ve,"isNonTabbableRadio");function Je(n){return!(n.disabled||n.tagName==="INPUT"&&n.type==="hidden"||Ve(n))}a(Je,"isNodeMatchingSelectorFocusable");function Qe(n){const r=[],s=[];return Array.from(n.querySelectorAll(Ye)).forEach((t,o)=>{const e=qe(t);e===-1||!Je(t)||(e===0?r.push(t):s.push({documentOrder:o,tabIndex:e,node:t}))}),s.sort((t,o)=>t.tabIndex===o.tabIndex?t.documentOrder-o.documentOrder:t.tabIndex-o.tabIndex).map(t=>t.node).concat(r)}a(Qe,"defaultGetTabbable");function Ze(){return!0}a(Ze,"defaultIsEnabled");function et(n){const{children:r,disableAutoFocus:s=!1,disableEnforceFocus:t=!1,disableRestoreFocus:o=!1,getTabbable:e=Qe,isEnabled:i=Ze,open:l}=n,c=u.exports.useRef(),p=u.exports.useRef(null),f=u.exports.useRef(null),E=u.exports.useRef(null),v=u.exports.useRef(null),y=u.exports.useRef(!1),h=u.exports.useRef(null),M=q(r.ref,h),T=u.exports.useRef(null);u.exports.useEffect(()=>{!l||!h.current||(y.current=!s)},[s,l]),u.exports.useEffect(()=>{if(!l||!h.current)return;const d=K(h.current);return h.current.contains(d.activeElement)||(h.current.hasAttribute("tabIndex")||h.current.setAttribute("tabIndex",-1),y.current&&h.current.focus()),()=>{o||(E.current&&E.current.focus&&(c.current=!0,E.current.focus()),E.current=null)}},[l]),u.exports.useEffect(()=>{if(!l||!h.current)return;const d=K(h.current),b=a(m=>{const{current:B}=h;if(B!==null){if(!d.hasFocus()||t||!i()||c.current){c.current=!1;return}if(!B.contains(d.activeElement)){if(m&&v.current!==m.target||d.activeElement!==v.current)v.current=null;else if(v.current!==null)return;if(!y.current)return;let P=[];if((d.activeElement===p.current||d.activeElement===f.current)&&(P=e(h.current)),P.length>0){var N,U;const _=Boolean(((N=T.current)==null?void 0:N.shiftKey)&&((U=T.current)==null?void 0:U.key)==="Tab"),j=P[0],W=P[P.length-1];_?W.focus():j.focus()}else B.focus()}}},"contain"),R=a(m=>{T.current=m,!(t||!i()||m.key!=="Tab")&&d.activeElement===h.current&&m.shiftKey&&(c.current=!0,f.current.focus())},"loopFocus");d.addEventListener("focusin",b),d.addEventListener("keydown",R,!0);const O=setInterval(()=>{d.activeElement.tagName==="BODY"&&b()},50);return()=>{clearInterval(O),d.removeEventListener("focusin",b),d.removeEventListener("keydown",R,!0)}},[s,t,o,i,l,e]);const S=a(d=>{E.current===null&&(E.current=d.relatedTarget),y.current=!0,v.current=d.target;const b=r.props.onFocus;b&&b(d)},"onFocus"),w=a(d=>{E.current===null&&(E.current=d.relatedTarget),y.current=!0},"handleFocusSentinel");return ye(u.exports.Fragment,{children:[I("div",{tabIndex:0,onFocus:w,ref:p,"data-test":"sentinelStart"}),u.exports.cloneElement(r,{ref:M,onFocus:S}),I("div",{tabIndex:0,onFocus:w,ref:f,"data-test":"sentinelEnd"})]})}a(et,"TrapFocus");function tt(n){return Te("MuiModal",n)}a(tt,"getModalUtilityClass");Re("MuiModal",["root","hidden"]);const nt=["BackdropComponent","BackdropProps","children","classes","className","closeAfterTransition","component","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","theme","onTransitionEnter","onTransitionExited"],ot=a(n=>{const{open:r,exited:s,classes:t}=n;return Se({root:["root",!r&&s&&"hidden"]},tt,t)},"useUtilityClasses$1");function rt(n){return typeof n=="function"?n():n}a(rt,"getContainer");function st(n){return n.children?n.children.props.hasOwnProperty("in"):!1}a(st,"getHasTransition");const it=new Me,at=u.exports.forwardRef(a(function(r,s){const{BackdropComponent:t,BackdropProps:o,children:e,classes:i,className:l,closeAfterTransition:c=!1,component:p="div",components:f={},componentsProps:E={},container:v,disableAutoFocus:y=!1,disableEnforceFocus:h=!1,disableEscapeKeyDown:M=!1,disablePortal:T=!1,disableRestoreFocus:S=!1,disableScrollLock:w=!1,hideBackdrop:d=!1,keepMounted:b=!1,manager:R=it,onBackdropClick:O,onClose:m,onKeyDown:B,open:N,theme:U,onTransitionEnter:P,onTransitionExited:_}=r,j=V(r,nt),[W,x]=u.exports.useState(!0),C=u.exports.useRef({}),F=u.exports.useRef(null),G=u.exports.useRef(null),Pe=q(G,s),J=st(r),Ie=a(()=>K(F.current),"getDoc"),Q=a(()=>(C.current.modalRef=G.current,C.current.mountNode=F.current,C.current),"getModal"),le=a(()=>{R.mount(Q(),{disableScrollLock:w}),G.current.scrollTop=0},"handleMounted"),ce=pe(()=>{const k=rt(v)||Ie().body;R.add(Q(),k),G.current&&le()}),ee=u.exports.useCallback(()=>R.isTopModal(Q()),[R]),we=pe(k=>{F.current=k,k&&(N&&ee()?le():Y(G.current,!0))}),z=u.exports.useCallback(()=>{R.remove(Q())},[R]);u.exports.useEffect(()=>()=>{z()},[z]),u.exports.useEffect(()=>{N?ce():(!J||!c)&&z()},[N,z,J,c,ce]);const ue=g({},r,{classes:i,closeAfterTransition:c,disableAutoFocus:y,disableEnforceFocus:h,disableEscapeKeyDown:M,disablePortal:T,disableRestoreFocus:S,disableScrollLock:w,exited:W,hideBackdrop:d,keepMounted:b}),Fe=ot(ue);if(!b&&!N&&(!J||W))return null;const De=a(()=>{x(!1),P&&P()},"handleEnter"),Oe=a(()=>{x(!0),_&&_(),c&&z()},"handleExited"),Be=a(k=>{k.target===k.currentTarget&&(O&&O(k),m&&m(k,"backdropClick"))},"handleBackdropClick"),Ae=a(k=>{B&&B(k),!(k.key!=="Escape"||!ee())&&(M||(k.stopPropagation(),m&&m(k,"escapeKeyDown")))},"handleKeyDown"),Z={};e.props.tabIndex===void 0&&(Z.tabIndex="-1"),J&&(Z.onEnter=he(De,e.props.onEnter),Z.onExited=he(Oe,e.props.onExited));const de=f.Root||p,te=E.root||{};return I(We,{ref:we,container:v,disablePortal:T,children:ye(de,g({role:"presentation"},te,!Ne(de)&&{as:p,ownerState:g({},ue,te.ownerState),theme:U},j,{ref:Pe,onKeyDown:Ae,className:ke(Fe.root,te.className,l),children:[!d&&t?I(t,g({"aria-hidden":!0,open:N,onClick:Be},o)):null,I(et,{disableEnforceFocus:h,disableAutoFocus:y,disableRestoreFocus:S,isEnabled:ee,open:N,children:u.exports.cloneElement(e,Z)})]}))})},"ModalUnstyled")),lt=at,be={disabled:!1};var X="unmounted",A="exited",L="entering",H="entered",se="exiting",D=function(n){_e(r,n);function r(t,o){var e;e=n.call(this,t,o)||this;var i=o,l=i&&!i.isMounting?t.enter:t.appear,c;return e.appearStatus=null,t.in?l?(c=A,e.appearStatus=L):c=H:t.unmountOnExit||t.mountOnEnter?c=X:c=A,e.state={status:c},e.nextCallback=null,e}a(r,"Transition"),r.getDerivedStateFromProps=a(function(o,e){var i=o.in;return i&&e.status===X?{status:A}:null},"getDerivedStateFromProps");var s=r.prototype;return s.componentDidMount=a(function(){this.updateStatus(!0,this.appearStatus)},"componentDidMount"),s.componentDidUpdate=a(function(o){var e=null;if(o!==this.props){var i=this.state.status;this.props.in?i!==L&&i!==H&&(e=L):(i===L||i===H)&&(e=se)}this.updateStatus(!1,e)},"componentDidUpdate"),s.componentWillUnmount=a(function(){this.cancelNextCallback()},"componentWillUnmount"),s.getTimeouts=a(function(){var o=this.props.timeout,e,i,l;return e=i=l=o,o!=null&&typeof o!="number"&&(e=o.exit,i=o.enter,l=o.appear!==void 0?o.appear:i),{exit:e,enter:i,appear:l}},"getTimeouts"),s.updateStatus=a(function(o,e){o===void 0&&(o=!1),e!==null?(this.cancelNextCallback(),e===L?this.performEnter(o):this.performExit()):this.props.unmountOnExit&&this.state.status===A&&this.setState({status:X})},"updateStatus"),s.performEnter=a(function(o){var e=this,i=this.props.enter,l=this.context?this.context.isMounting:o,c=this.props.nodeRef?[l]:[oe.findDOMNode(this),l],p=c[0],f=c[1],E=this.getTimeouts(),v=l?E.appear:E.enter;if(!o&&!i||be.disabled){this.safeSetState({status:H},function(){e.props.onEntered(p)});return}this.props.onEnter(p,f),this.safeSetState({status:L},function(){e.props.onEntering(p,f),e.onTransitionEnd(v,function(){e.safeSetState({status:H},function(){e.props.onEntered(p,f)})})})},"performEnter"),s.performExit=a(function(){var o=this,e=this.props.exit,i=this.getTimeouts(),l=this.props.nodeRef?void 0:oe.findDOMNode(this);if(!e||be.disabled){this.safeSetState({status:A},function(){o.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:se},function(){o.props.onExiting(l),o.onTransitionEnd(i.exit,function(){o.safeSetState({status:A},function(){o.props.onExited(l)})})})},"performExit"),s.cancelNextCallback=a(function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},"cancelNextCallback"),s.safeSetState=a(function(o,e){e=this.setNextCallback(e),this.setState(o,e)},"safeSetState"),s.setNextCallback=a(function(o){var e=this,i=!0;return this.nextCallback=function(l){i&&(i=!1,e.nextCallback=null,o(l))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},"setNextCallback"),s.onTransitionEnd=a(function(o,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:oe.findDOMNode(this),l=o==null&&!this.props.addEndListener;if(!i||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],p=c[0],f=c[1];this.props.addEndListener(p,f)}o!=null&&setTimeout(this.nextCallback,o)},"onTransitionEnd"),s.render=a(function(){var o=this.state.status;if(o===X)return null;var e=this.props,i=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var l=V(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return I(Ce.Provider,{value:null,children:typeof i=="function"?i(o,l):ne.cloneElement(ne.Children.only(i),l)})},"render"),r}(ne.Component);D.contextType=Ce;D.propTypes={};function $(){}a($,"noop");D.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:$,onEntering:$,onEntered:$,onExit:$,onExiting:$,onExited:$};D.UNMOUNTED=X;D.EXITED=A;D.ENTERING=L;D.ENTERED=H;D.EXITING=se;const ct=D,ut=a(n=>n.scrollTop,"reflow");function ge(n,r){var s,t;const{timeout:o,easing:e,style:i={}}=n;return{duration:(s=i.transitionDuration)!=null?s:typeof o=="number"?o:o[r.mode]||0,easing:(t=i.transitionTimingFunction)!=null?t:typeof e=="object"?e[r.mode]:e,delay:i.transitionDelay}}a(ge,"getTransitionProps");const dt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ft={entering:{opacity:1},entered:{opacity:1}},pt=u.exports.forwardRef(a(function(r,s){const t=Ue(),o={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:e,appear:i=!0,children:l,easing:c,in:p,onEnter:f,onEntered:E,onEntering:v,onExit:y,onExited:h,onExiting:M,style:T,timeout:S=o,TransitionComponent:w=ct}=r,d=V(r,dt),b=u.exports.useRef(null),R=q(l.ref,s),O=q(b,R),m=a(x=>C=>{if(x){const F=b.current;C===void 0?x(F):x(F,C)}},"normalizedTransitionCallback"),B=m(v),N=m((x,C)=>{ut(x);const F=ge({style:T,timeout:S,easing:c},{mode:"enter"});x.style.webkitTransition=t.transitions.create("opacity",F),x.style.transition=t.transitions.create("opacity",F),f&&f(x,C)}),U=m(E),P=m(M),_=m(x=>{const C=ge({style:T,timeout:S,easing:c},{mode:"exit"});x.style.webkitTransition=t.transitions.create("opacity",C),x.style.transition=t.transitions.create("opacity",C),y&&y(x)}),j=m(h);return I(w,g({appear:i,in:p,nodeRef:b,onEnter:N,onEntered:U,onEntering:B,onExit:_,onExited:j,onExiting:P,addEndListener:a(x=>{e&&e(b.current,x)},"handleAddEndListener"),timeout:S},d,{children:(x,C)=>u.exports.cloneElement(l,g({style:g({opacity:0,visibility:x==="exited"&&!p?"hidden":void 0},ft[x],T,l.props.style),ref:O},C))}))},"Fade")),ht=pt;function mt(n){return Te("MuiBackdrop",n)}a(mt,"getBackdropUtilityClass");Re("MuiBackdrop",["root","invisible"]);const xt=["children","component","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],Et=a(n=>{const{classes:r,invisible:s}=n;return Se({root:["root",s&&"invisible"]},mt,r)},"useUtilityClasses"),bt=ie("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:s}=n;return[r.root,s.invisible&&r.invisible]}})(({ownerState:n})=>g({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})),gt=u.exports.forwardRef(a(function(r,s){var t,o;const e=ve({props:r,name:"MuiBackdrop"}),{children:i,component:l="div",components:c={},componentsProps:p={},className:f,invisible:E=!1,open:v,transitionDuration:y,TransitionComponent:h=ht}=e,M=V(e,xt),T=g({},e,{component:l,invisible:E}),S=Et(T);return I(h,g({in:v,timeout:y},M,{children:I(bt,{"aria-hidden":!0,as:(t=c.Root)!=null?t:l,className:ke(S.root,f),ownerState:g({},T,(o=p.root)==null?void 0:o.ownerState),classes:S,ref:s,children:i})}))},"Backdrop")),vt=gt,yt=["BackdropComponent","closeAfterTransition","children","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted"],Tt=a(n=>n.classes,"extendUtilityClasses"),Rt=ie("div",{name:"MuiModal",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:s}=n;return[r.root,!s.open&&s.exited&&r.hidden]}})(({theme:n,ownerState:r})=>g({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!r.open&&r.exited&&{visibility:"hidden"})),kt=ie(vt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(n,r)=>r.backdrop})({zIndex:-1}),St=u.exports.forwardRef(a(function(r,s){var t;const o=ve({name:"MuiModal",props:r}),{BackdropComponent:e=kt,closeAfterTransition:i=!1,children:l,components:c={},componentsProps:p={},disableAutoFocus:f=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:v=!1,disablePortal:y=!1,disableRestoreFocus:h=!1,disableScrollLock:M=!1,hideBackdrop:T=!1,keepMounted:S=!1}=o,w=V(o,yt),[d,b]=u.exports.useState(!0),R={closeAfterTransition:i,disableAutoFocus:f,disableEnforceFocus:E,disableEscapeKeyDown:v,disablePortal:y,disableRestoreFocus:h,disableScrollLock:M,hideBackdrop:T,keepMounted:S},O=g({},o,R,{exited:d}),m=Tt(O);return I(lt,g({components:g({Root:Rt},c),componentsProps:{root:g({},p.root,(!c.Root||!Ne(c.Root))&&{ownerState:g({},(t=p.root)==null?void 0:t.ownerState)})},BackdropComponent:e,onTransitionEnter:()=>b(!1),onTransitionExited:()=>b(!0),ref:s},w,{classes:m},R,{children:l}))},"Modal")),_t=St;export{vt as B,ht as F,_t as M,ct as T,ge as g,ut as r};
//# sourceMappingURL=Modal.a43a6e39.js.map
