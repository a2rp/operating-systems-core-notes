(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))p(u);new MutationObserver(u=>{for(const x of u)if(x.type==="childList")for(const k of x.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&p(k)}).observe(document,{childList:!0,subtree:!0});function l(u){const x={};return u.integrity&&(x.integrity=u.integrity),u.referrerPolicy&&(x.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?x.credentials="include":u.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function p(u){if(u.ep)return;u.ep=!0;const x=l(u);fetch(u.href,x)}})();function oh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ia={exports:{}},ei={},Ra={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru;function ah(){if(ru)return se;ru=1;var o=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),k=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),A=Symbol.iterator;function V(g){return g===null||typeof g!="object"?null:(g=A&&g[A]||g["@@iterator"],typeof g=="function"?g:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,_={};function $(g,w,ee){this.props=g,this.context=w,this.refs=_,this.updater=ee||X}$.prototype.isReactComponent={},$.prototype.setState=function(g,w){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,w,"setState")},$.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function he(){}he.prototype=$.prototype;function de(g,w,ee){this.props=g,this.context=w,this.refs=_,this.updater=ee||X}var ie=de.prototype=new he;ie.constructor=de,I(ie,$.prototype),ie.isPureReactComponent=!0;var R=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function D(g,w,ee){var re,le={},oe=null,ue=null;if(w!=null)for(re in w.ref!==void 0&&(ue=w.ref),w.key!==void 0&&(oe=""+w.key),w)J.call(w,re)&&!O.hasOwnProperty(re)&&(le[re]=w[re]);var ce=arguments.length-2;if(ce===1)le.children=ee;else if(1<ce){for(var xe=Array(ce),Ce=0;Ce<ce;Ce++)xe[Ce]=arguments[Ce+2];le.children=xe}if(g&&g.defaultProps)for(re in ce=g.defaultProps,ce)le[re]===void 0&&(le[re]=ce[re]);return{$$typeof:o,type:g,key:oe,ref:ue,props:le,_owner:K.current}}function ve(g,w){return{$$typeof:o,type:g.type,key:w,ref:g.ref,props:g.props,_owner:g._owner}}function Oe(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function ae(g){var w={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(ee){return w[ee]})}var ze=/\/+/g;function be(g,w){return typeof g=="object"&&g!==null&&g.key!=null?ae(""+g.key):w.toString(36)}function Ke(g,w,ee,re,le){var oe=typeof g;(oe==="undefined"||oe==="boolean")&&(g=null);var ue=!1;if(g===null)ue=!0;else switch(oe){case"string":case"number":ue=!0;break;case"object":switch(g.$$typeof){case o:case c:ue=!0}}if(ue)return ue=g,le=le(ue),g=re===""?"."+be(ue,0):re,R(le)?(ee="",g!=null&&(ee=g.replace(ze,"$&/")+"/"),Ke(le,w,ee,"",function(Ce){return Ce})):le!=null&&(Oe(le)&&(le=ve(le,ee+(!le.key||ue&&ue.key===le.key?"":(""+le.key).replace(ze,"$&/")+"/")+g)),w.push(le)),1;if(ue=0,re=re===""?".":re+":",R(g))for(var ce=0;ce<g.length;ce++){oe=g[ce];var xe=re+be(oe,ce);ue+=Ke(oe,w,ee,xe,le)}else if(xe=V(g),typeof xe=="function")for(g=xe.call(g),ce=0;!(oe=g.next()).done;)oe=oe.value,xe=re+be(oe,ce++),ue+=Ke(oe,w,ee,xe,le);else if(oe==="object")throw w=String(g),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return ue}function Ze(g,w,ee){if(g==null)return g;var re=[],le=0;return Ke(g,re,"","",function(oe){return w.call(ee,oe,le++)}),re}function Qe(g){if(g._status===-1){var w=g._result;w=w(),w.then(function(ee){(g._status===0||g._status===-1)&&(g._status=1,g._result=ee)},function(ee){(g._status===0||g._status===-1)&&(g._status=2,g._result=ee)}),g._status===-1&&(g._status=0,g._result=w)}if(g._status===1)return g._result.default;throw g._result}var ye={current:null},E={transition:null},H={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:E,ReactCurrentOwner:K};function L(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:Ze,forEach:function(g,w,ee){Ze(g,function(){w.apply(this,arguments)},ee)},count:function(g){var w=0;return Ze(g,function(){w++}),w},toArray:function(g){return Ze(g,function(w){return w})||[]},only:function(g){if(!Oe(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},se.Component=$,se.Fragment=l,se.Profiler=u,se.PureComponent=de,se.StrictMode=p,se.Suspense=C,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,se.act=L,se.cloneElement=function(g,w,ee){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var re=I({},g.props),le=g.key,oe=g.ref,ue=g._owner;if(w!=null){if(w.ref!==void 0&&(oe=w.ref,ue=K.current),w.key!==void 0&&(le=""+w.key),g.type&&g.type.defaultProps)var ce=g.type.defaultProps;for(xe in w)J.call(w,xe)&&!O.hasOwnProperty(xe)&&(re[xe]=w[xe]===void 0&&ce!==void 0?ce[xe]:w[xe])}var xe=arguments.length-2;if(xe===1)re.children=ee;else if(1<xe){ce=Array(xe);for(var Ce=0;Ce<xe;Ce++)ce[Ce]=arguments[Ce+2];re.children=ce}return{$$typeof:o,type:g.type,key:le,ref:oe,props:re,_owner:ue}},se.createContext=function(g){return g={$$typeof:k,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:x,_context:g},g.Consumer=g},se.createElement=D,se.createFactory=function(g){var w=D.bind(null,g);return w.type=g,w},se.createRef=function(){return{current:null}},se.forwardRef=function(g){return{$$typeof:P,render:g}},se.isValidElement=Oe,se.lazy=function(g){return{$$typeof:W,_payload:{_status:-1,_result:g},_init:Qe}},se.memo=function(g,w){return{$$typeof:z,type:g,compare:w===void 0?null:w}},se.startTransition=function(g){var w=E.transition;E.transition={};try{g()}finally{E.transition=w}},se.unstable_act=L,se.useCallback=function(g,w){return ye.current.useCallback(g,w)},se.useContext=function(g){return ye.current.useContext(g)},se.useDebugValue=function(){},se.useDeferredValue=function(g){return ye.current.useDeferredValue(g)},se.useEffect=function(g,w){return ye.current.useEffect(g,w)},se.useId=function(){return ye.current.useId()},se.useImperativeHandle=function(g,w,ee){return ye.current.useImperativeHandle(g,w,ee)},se.useInsertionEffect=function(g,w){return ye.current.useInsertionEffect(g,w)},se.useLayoutEffect=function(g,w){return ye.current.useLayoutEffect(g,w)},se.useMemo=function(g,w){return ye.current.useMemo(g,w)},se.useReducer=function(g,w,ee){return ye.current.useReducer(g,w,ee)},se.useRef=function(g){return ye.current.useRef(g)},se.useState=function(g){return ye.current.useState(g)},se.useSyncExternalStore=function(g,w,ee){return ye.current.useSyncExternalStore(g,w,ee)},se.useTransition=function(){return ye.current.useTransition()},se.version="18.3.1",se}var tu;function el(){return tu||(tu=1,Ra.exports=ah()),Ra.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu;function lh(){if(nu)return ei;nu=1;var o=el(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,u=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function k(P,C,z){var W,A={},V=null,X=null;z!==void 0&&(V=""+z),C.key!==void 0&&(V=""+C.key),C.ref!==void 0&&(X=C.ref);for(W in C)p.call(C,W)&&!x.hasOwnProperty(W)&&(A[W]=C[W]);if(P&&P.defaultProps)for(W in C=P.defaultProps,C)A[W]===void 0&&(A[W]=C[W]);return{$$typeof:c,type:P,key:V,ref:X,props:A,_owner:u.current}}return ei.Fragment=l,ei.jsx=k,ei.jsxs=k,ei}var iu;function ch(){return iu||(iu=1,Ia.exports=lh()),Ia.exports}var t=ch(),ys={},La={exports:{}},lr={},Ma={exports:{}},_a={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su;function dh(){return su||(su=1,(function(o){function c(E,H){var L=E.length;E.push(H);e:for(;0<L;){var g=L-1>>>1,w=E[g];if(0<u(w,H))E[g]=H,E[L]=w,L=g;else break e}}function l(E){return E.length===0?null:E[0]}function p(E){if(E.length===0)return null;var H=E[0],L=E.pop();if(L!==H){E[0]=L;e:for(var g=0,w=E.length,ee=w>>>1;g<ee;){var re=2*(g+1)-1,le=E[re],oe=re+1,ue=E[oe];if(0>u(le,L))oe<w&&0>u(ue,le)?(E[g]=ue,E[oe]=L,g=oe):(E[g]=le,E[re]=L,g=re);else if(oe<w&&0>u(ue,L))E[g]=ue,E[oe]=L,g=oe;else break e}}return H}function u(E,H){var L=E.sortIndex-H.sortIndex;return L!==0?L:E.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var x=performance;o.unstable_now=function(){return x.now()}}else{var k=Date,P=k.now();o.unstable_now=function(){return k.now()-P}}var C=[],z=[],W=1,A=null,V=3,X=!1,I=!1,_=!1,$=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(E){for(var H=l(z);H!==null;){if(H.callback===null)p(z);else if(H.startTime<=E)p(z),H.sortIndex=H.expirationTime,c(C,H);else break;H=l(z)}}function R(E){if(_=!1,ie(E),!I)if(l(C)!==null)I=!0,Qe(J);else{var H=l(z);H!==null&&ye(R,H.startTime-E)}}function J(E,H){I=!1,_&&(_=!1,he(D),D=-1),X=!0;var L=V;try{for(ie(H),A=l(C);A!==null&&(!(A.expirationTime>H)||E&&!ae());){var g=A.callback;if(typeof g=="function"){A.callback=null,V=A.priorityLevel;var w=g(A.expirationTime<=H);H=o.unstable_now(),typeof w=="function"?A.callback=w:A===l(C)&&p(C),ie(H)}else p(C);A=l(C)}if(A!==null)var ee=!0;else{var re=l(z);re!==null&&ye(R,re.startTime-H),ee=!1}return ee}finally{A=null,V=L,X=!1}}var K=!1,O=null,D=-1,ve=5,Oe=-1;function ae(){return!(o.unstable_now()-Oe<ve)}function ze(){if(O!==null){var E=o.unstable_now();Oe=E;var H=!0;try{H=O(!0,E)}finally{H?be():(K=!1,O=null)}}else K=!1}var be;if(typeof de=="function")be=function(){de(ze)};else if(typeof MessageChannel!="undefined"){var Ke=new MessageChannel,Ze=Ke.port2;Ke.port1.onmessage=ze,be=function(){Ze.postMessage(null)}}else be=function(){$(ze,0)};function Qe(E){O=E,K||(K=!0,be())}function ye(E,H){D=$(function(){E(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(E){E.callback=null},o.unstable_continueExecution=function(){I||X||(I=!0,Qe(J))},o.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<E?Math.floor(1e3/E):5},o.unstable_getCurrentPriorityLevel=function(){return V},o.unstable_getFirstCallbackNode=function(){return l(C)},o.unstable_next=function(E){switch(V){case 1:case 2:case 3:var H=3;break;default:H=V}var L=V;V=H;try{return E()}finally{V=L}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(E,H){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=V;V=E;try{return H()}finally{V=L}},o.unstable_scheduleCallback=function(E,H,L){var g=o.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?g+L:g):L=g,E){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=L+w,E={id:W++,callback:H,priorityLevel:E,startTime:L,expirationTime:w,sortIndex:-1},L>g?(E.sortIndex=L,c(z,E),l(C)===null&&E===l(z)&&(_?(he(D),D=-1):_=!0,ye(R,L-g))):(E.sortIndex=w,c(C,E),I||X||(I=!0,Qe(J))),E},o.unstable_shouldYield=ae,o.unstable_wrapCallback=function(E){var H=V;return function(){var L=V;V=H;try{return E.apply(this,arguments)}finally{V=L}}}})(_a)),_a}var ou;function uh(){return ou||(ou=1,Ma.exports=dh()),Ma.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var au;function ph(){if(au)return lr;au=1;var o=el(),c=uh();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,u={};function x(e,r){k(e,r),k(e+"Capture",r)}function k(e,r){for(u[e]=r,e=0;e<r.length;e++)p.add(r[e])}var P=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),C=Object.prototype.hasOwnProperty,z=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W={},A={};function V(e){return C.call(A,e)?!0:C.call(W,e)?!1:z.test(e)?A[e]=!0:(W[e]=!0,!1)}function X(e,r,n,i){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,r,n,i){if(r===null||typeof r=="undefined"||X(e,r,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function _(e,r,n,i,s,a,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=d}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];$[r]=new _(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){$[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){$[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){$[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){$[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){$[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(he,de);$[r]=new _(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(he,de);$[r]=new _(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(he,de);$[r]=new _(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){$[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),$.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){$[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,r,n,i){var s=$.hasOwnProperty(r)?$[r]:null;(s!==null?s.type!==0:i||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(I(r,n,s,i)&&(n=null),i||s===null?V(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(r=s.attributeName,i=s.attributeNamespace,n===null?e.removeAttribute(r):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?e.setAttributeNS(i,r,n):e.setAttribute(r,n))))}var R=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),K=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Oe=Symbol.for("react.provider"),ae=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),E=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,g;function w(e){if(g===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);g=r&&r[1]||""}return`
`+g+e}var ee=!1;function re(e,r){if(!e||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(j){var i=j}Reflect.construct(e,[],r)}else{try{r.call()}catch(j){i=j}e.call(r.prototype)}else{try{throw Error()}catch(j){i=j}e()}}catch(j){if(j&&i&&typeof j.stack=="string"){for(var s=j.stack.split(`
`),a=i.stack.split(`
`),d=s.length-1,m=a.length-1;1<=d&&0<=m&&s[d]!==a[m];)m--;for(;1<=d&&0<=m;d--,m--)if(s[d]!==a[m]){if(d!==1||m!==1)do if(d--,m--,0>m||s[d]!==a[m]){var h=`
`+s[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=m);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w(e):""}function le(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case K:return"Portal";case ve:return"Profiler";case D:return"StrictMode";case be:return"Suspense";case Ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case Oe:return(e._context.displayName||"Context")+".Provider";case ze:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return r=e.displayName||null,r!==null?r:oe(e.type)||"Memo";case Qe:r=e._payload,e=e._init;try{return oe(e(r))}catch{}}return null}function ue(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(r);case 8:return r===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ce(e){var r=xe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),i=""+e[r];if(!e.hasOwnProperty(r)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return s.call(this)},set:function(d){i=""+d,a.call(this,d)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Ce(e))}function vt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),i="";return e&&(i=xe(e)?e.checked?"true":"false":e.value),e=i,e!==n?(r.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fs(e,r){var n=r.checked;return L({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ll(e,r){var n=r.defaultValue==null?"":r.defaultValue,i=r.checked!=null?r.checked:r.defaultChecked;n=ce(r.value!=null?r.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function cl(e,r){r=r.checked,r!=null&&ie(e,"checked",r,!1)}function Bs(e,r){cl(e,r);var n=ce(r.value),i=r.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?qs(e,r.type,n):r.hasOwnProperty("defaultValue")&&qs(e,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function dl(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var i=r.type;if(!(i!=="submit"&&i!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qs(e,r,n){(r!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fn=Array.isArray;function At(e,r,n,i){if(e=e.options,r){r={};for(var s=0;s<n.length;s++)r["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=r.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),r=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}r!==null||e[s].disabled||(r=e[s])}r!==null&&(r.selected=!0)}}function Ws(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return L({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ul(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(l(92));if(fn(n)){if(1<n.length)throw Error(l(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:ce(n)}}function pl(e,r){var n=ce(r.value),i=ce(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function ml(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function hl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ds(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?hl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,fl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,n,i,s){MSApp.execUnsafeLocalFunction(function(){return e(r,n,i,s)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function xn(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var gn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dp=["Webkit","ms","Moz","O"];Object.keys(gn).forEach(function(e){dp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),gn[r]=gn[e]})});function xl(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||gn.hasOwnProperty(e)&&gn[e]?(""+r).trim():r+"px"}function gl(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=xl(n,r[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,s):e[n]=s}}var up=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,r){if(r){if(up[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function Hs(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $s=null;function Vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,Ft=null,Bt=null;function vl(e){if(e=Bn(e)){if(typeof Ks!="function")throw Error(l(280));var r=e.stateNode;r&&(r=Li(r),Ks(e.stateNode,e.type,r))}}function yl(e){Ft?Bt?Bt.push(e):Bt=[e]:Ft=e}function jl(){if(Ft){var e=Ft,r=Bt;if(Bt=Ft=null,vl(e),r)for(e=0;e<r.length;e++)vl(r[e])}}function wl(e,r){return e(r)}function kl(){}var Qs=!1;function Nl(e,r,n){if(Qs)return e(r,n);Qs=!0;try{return wl(e,r,n)}finally{Qs=!1,(Ft!==null||Bt!==null)&&(kl(),jl())}}function vn(e,r){var n=e.stateNode;if(n===null)return null;var i=Li(n);if(i===null)return null;n=i[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,r,typeof n));return n}var Gs=!1;if(P)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){Gs=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{Gs=!1}function pp(e,r,n,i,s,a,d,m,h){var j=Array.prototype.slice.call(arguments,3);try{r.apply(n,j)}catch(b){this.onError(b)}}var jn=!1,pi=null,mi=!1,Ys=null,mp={onError:function(e){jn=!0,pi=e}};function hp(e,r,n,i,s,a,d,m,h){jn=!1,pi=null,pp.apply(mp,arguments)}function fp(e,r,n,i,s,a,d,m,h){if(hp.apply(this,arguments),jn){if(jn){var j=pi;jn=!1,pi=null}else throw Error(l(198));mi||(mi=!0,Ys=j)}}function yt(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function bl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Sl(e){if(yt(e)!==e)throw Error(l(188))}function xp(e){var r=e.alternate;if(!r){if(r=yt(e),r===null)throw Error(l(188));return r!==e?null:e}for(var n=e,i=r;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Sl(s),e;if(a===i)return Sl(s),r;a=a.sibling}throw Error(l(188))}if(n.return!==i.return)n=s,i=a;else{for(var d=!1,m=s.child;m;){if(m===n){d=!0,n=s,i=a;break}if(m===i){d=!0,i=s,n=a;break}m=m.sibling}if(!d){for(m=a.child;m;){if(m===n){d=!0,n=a,i=s;break}if(m===i){d=!0,i=a,n=s;break}m=m.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:r}function Cl(e){return e=xp(e),e!==null?Tl(e):null}function Tl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Tl(e);if(r!==null)return r;e=e.sibling}return null}var Pl=c.unstable_scheduleCallback,zl=c.unstable_cancelCallback,gp=c.unstable_shouldYield,vp=c.unstable_requestPaint,Ie=c.unstable_now,yp=c.unstable_getCurrentPriorityLevel,Xs=c.unstable_ImmediatePriority,El=c.unstable_UserBlockingPriority,hi=c.unstable_NormalPriority,jp=c.unstable_LowPriority,Ol=c.unstable_IdlePriority,fi=null,Mr=null;function wp(e){if(Mr&&typeof Mr.onCommitFiberRoot=="function")try{Mr.onCommitFiberRoot(fi,e,void 0,(e.current.flags&128)===128)}catch{}}var Cr=Math.clz32?Math.clz32:bp,kp=Math.log,Np=Math.LN2;function bp(e){return e>>>=0,e===0?32:31-(kp(e)/Np|0)|0}var xi=64,gi=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,r){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,a=e.pingedLanes,d=n&268435455;if(d!==0){var m=d&~s;m!==0?i=wn(m):(a&=d,a!==0&&(i=wn(a)))}else d=n&~s,d!==0?i=wn(d):a!==0&&(i=wn(a));if(i===0)return 0;if(r!==0&&r!==i&&(r&s)===0&&(s=i&-i,a=r&-r,s>=a||s===16&&(a&4194240)!==0))return r;if((i&4)!==0&&(i|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=i;0<r;)n=31-Cr(r),s=1<<n,i|=e[n],r&=~s;return i}function Sp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cp(e,r){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-Cr(a),m=1<<d,h=s[d];h===-1?((m&n)===0||(m&i)!==0)&&(s[d]=Sp(m,r)):h<=r&&(e.expiredLanes|=m),a&=~m}}function Js(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Il(){var e=xi;return xi<<=1,(xi&4194240)===0&&(xi=64),e}function Zs(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function kn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Cr(r),e[r]=n}function Tp(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Cr(n),a=1<<s;r[s]=0,i[s]=-1,e[s]=-1,n&=~a}}function eo(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var i=31-Cr(n),s=1<<i;s&r|e[i]&r&&(e[i]|=r),n&=~s}}var ge=0;function Rl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ll,ro,Ml,_l,Al,to=!1,yi=[],Xr=null,Jr=null,Zr=null,Nn=new Map,bn=new Map,et=[],Pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fl(e,r){switch(e){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Nn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(r.pointerId)}}function Sn(e,r,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},r!==null&&(r=Bn(r),r!==null&&ro(r)),e):(e.eventSystemFlags|=i,r=e.targetContainers,s!==null&&r.indexOf(s)===-1&&r.push(s),e)}function zp(e,r,n,i,s){switch(r){case"focusin":return Xr=Sn(Xr,e,r,n,i,s),!0;case"dragenter":return Jr=Sn(Jr,e,r,n,i,s),!0;case"mouseover":return Zr=Sn(Zr,e,r,n,i,s),!0;case"pointerover":var a=s.pointerId;return Nn.set(a,Sn(Nn.get(a)||null,e,r,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,bn.set(a,Sn(bn.get(a)||null,e,r,n,i,s)),!0}return!1}function Bl(e){var r=jt(e.target);if(r!==null){var n=yt(r);if(n!==null){if(r=n.tag,r===13){if(r=bl(n),r!==null){e.blockedOn=r,Al(e.priority,function(){Ml(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ji(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=io(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);$s=i,n.target.dispatchEvent(i),$s=null}else return r=Bn(n),r!==null&&ro(r),e.blockedOn=n,!1;r.shift()}return!0}function ql(e,r,n){ji(e)&&n.delete(r)}function Ep(){to=!1,Xr!==null&&ji(Xr)&&(Xr=null),Jr!==null&&ji(Jr)&&(Jr=null),Zr!==null&&ji(Zr)&&(Zr=null),Nn.forEach(ql),bn.forEach(ql)}function Cn(e,r){e.blockedOn===r&&(e.blockedOn=null,to||(to=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Ep)))}function Tn(e){function r(s){return Cn(s,e)}if(0<yi.length){Cn(yi[0],e);for(var n=1;n<yi.length;n++){var i=yi[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Xr!==null&&Cn(Xr,e),Jr!==null&&Cn(Jr,e),Zr!==null&&Cn(Zr,e),Nn.forEach(r),bn.forEach(r),n=0;n<et.length;n++)i=et[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Bl(n),n.blockedOn===null&&et.shift()}var qt=R.ReactCurrentBatchConfig,wi=!0;function Op(e,r,n,i){var s=ge,a=qt.transition;qt.transition=null;try{ge=1,no(e,r,n,i)}finally{ge=s,qt.transition=a}}function Ip(e,r,n,i){var s=ge,a=qt.transition;qt.transition=null;try{ge=4,no(e,r,n,i)}finally{ge=s,qt.transition=a}}function no(e,r,n,i){if(wi){var s=io(e,r,n,i);if(s===null)ko(e,r,i,ki,n),Fl(e,i);else if(zp(s,e,r,n,i))i.stopPropagation();else if(Fl(e,i),r&4&&-1<Pp.indexOf(e)){for(;s!==null;){var a=Bn(s);if(a!==null&&Ll(a),a=io(e,r,n,i),a===null&&ko(e,r,i,ki,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else ko(e,r,i,null,n)}}var ki=null;function io(e,r,n,i){if(ki=null,e=Vs(i),e=jt(e),e!==null)if(r=yt(e),r===null)e=null;else if(n=r.tag,n===13){if(e=bl(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return ki=e,null}function Wl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yp()){case Xs:return 1;case El:return 4;case hi:case jp:return 16;case Ol:return 536870912;default:return 16}default:return 16}}var rt=null,so=null,Ni=null;function Dl(){if(Ni)return Ni;var e,r=so,n=r.length,i,s="value"in rt?rt.value:rt.textContent,a=s.length;for(e=0;e<n&&r[e]===s[e];e++);var d=n-e;for(i=1;i<=d&&r[n-i]===s[a-i];i++);return Ni=s.slice(e,1<i?1-i:void 0)}function bi(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function Ul(){return!1}function ur(e){function r(n,i,s,a,d){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(a):a[m]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Si:Ul,this.isPropagationStopped=Ul,this}return L(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),r}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=ur(Wt),Pn=L({},Wt,{view:0,detail:0}),Rp=ur(Pn),ao,lo,zn,Ci=L({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(ao=e.screenX-zn.screenX,lo=e.screenY-zn.screenY):lo=ao=0,zn=e),ao)},movementY:function(e){return"movementY"in e?e.movementY:lo}}),Hl=ur(Ci),Lp=L({},Ci,{dataTransfer:0}),Mp=ur(Lp),_p=L({},Pn,{relatedTarget:0}),co=ur(_p),Ap=L({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Fp=ur(Ap),Bp=L({},Wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qp=ur(Bp),Wp=L({},Wt,{data:0}),$l=ur(Wp),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $p(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Hp[e])?!!r[e]:!1}function uo(){return $p}var Vp=L({},Pn,{key:function(e){if(e.key){var r=Dp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uo,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kp=ur(Vp),Qp=L({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vl=ur(Qp),Gp=L({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uo}),Yp=ur(Gp),Xp=L({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=ur(Xp),Zp=L({},Ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),em=ur(Zp),rm=[9,13,27,32],po=P&&"CompositionEvent"in window,En=null;P&&"documentMode"in document&&(En=document.documentMode);var tm=P&&"TextEvent"in window&&!En,Kl=P&&(!po||En&&8<En&&11>=En),Ql=" ",Gl=!1;function Yl(e,r){switch(e){case"keyup":return rm.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dt=!1;function nm(e,r){switch(e){case"compositionend":return Xl(r);case"keypress":return r.which!==32?null:(Gl=!0,Ql);case"textInput":return e=r.data,e===Ql&&Gl?null:e;default:return null}}function im(e,r){if(Dt)return e==="compositionend"||!po&&Yl(e,r)?(e=Dl(),Ni=so=rt=null,Dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Kl&&r.locale!=="ko"?null:r.data;default:return null}}var sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!sm[e.type]:r==="textarea"}function Zl(e,r,n,i){yl(i),r=Oi(r,"onChange"),0<r.length&&(n=new oo("onChange","change",null,n,i),e.push({event:n,listeners:r}))}var On=null,In=null;function om(e){gc(e,0)}function Ti(e){var r=Kt(e);if(vt(r))return e}function am(e,r){if(e==="change")return r}var ec=!1;if(P){var mo;if(P){var ho="oninput"in document;if(!ho){var rc=document.createElement("div");rc.setAttribute("oninput","return;"),ho=typeof rc.oninput=="function"}mo=ho}else mo=!1;ec=mo&&(!document.documentMode||9<document.documentMode)}function tc(){On&&(On.detachEvent("onpropertychange",nc),In=On=null)}function nc(e){if(e.propertyName==="value"&&Ti(In)){var r=[];Zl(r,In,e,Vs(e)),Nl(om,r)}}function lm(e,r,n){e==="focusin"?(tc(),On=r,In=n,On.attachEvent("onpropertychange",nc)):e==="focusout"&&tc()}function cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(In)}function dm(e,r){if(e==="click")return Ti(r)}function um(e,r){if(e==="input"||e==="change")return Ti(r)}function pm(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Tr=typeof Object.is=="function"?Object.is:pm;function Rn(e,r){if(Tr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),i=Object.keys(r);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!C.call(r,s)||!Tr(e[s],r[s]))return!1}return!0}function ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sc(e,r){var n=ic(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=r&&i>=r)return{node:n,offset:r-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ic(n)}}function oc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?oc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function ac(){for(var e=window,r=Sr();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Sr(e.document)}return r}function fo(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function mm(e){var r=ac(),n=e.focusedElem,i=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&oc(n.ownerDocument.documentElement,n)){if(i!==null&&fo(n)){if(r=i.start,e=i.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(i.start,s);i=i.end===void 0?a:Math.min(i.end,s),!e.extend&&a>i&&(s=i,i=a,a=s),s=sc(n,a);var d=sc(n,i);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(s.node,s.offset),e.removeAllRanges(),a>i?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hm=P&&"documentMode"in document&&11>=document.documentMode,Ut=null,xo=null,Ln=null,go=!1;function lc(e,r,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;go||Ut==null||Ut!==Sr(i)||(i=Ut,"selectionStart"in i&&fo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ln&&Rn(Ln,i)||(Ln=i,i=Oi(xo,"onSelect"),0<i.length&&(r=new oo("onSelect","select",null,r,n),e.push({event:r,listeners:i}),r.target=Ut)))}function Pi(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Ht={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},vo={},cc={};P&&(cc=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function zi(e){if(vo[e])return vo[e];if(!Ht[e])return e;var r=Ht[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in cc)return vo[e]=r[n];return e}var dc=zi("animationend"),uc=zi("animationiteration"),pc=zi("animationstart"),mc=zi("transitionend"),hc=new Map,fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tt(e,r){hc.set(e,r),x(r,[e])}for(var yo=0;yo<fc.length;yo++){var jo=fc[yo],fm=jo.toLowerCase(),xm=jo[0].toUpperCase()+jo.slice(1);tt(fm,"on"+xm)}tt(dc,"onAnimationEnd"),tt(uc,"onAnimationIteration"),tt(pc,"onAnimationStart"),tt("dblclick","onDoubleClick"),tt("focusin","onFocus"),tt("focusout","onBlur"),tt(mc,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),x("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),x("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),x("onBeforeInput",["compositionend","keypress","textInput","paste"]),x("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function xc(e,r,n){var i=e.type||"unknown-event";e.currentTarget=n,fp(i,r,void 0,e),e.currentTarget=null}function gc(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var a=void 0;if(r)for(var d=i.length-1;0<=d;d--){var m=i[d],h=m.instance,j=m.currentTarget;if(m=m.listener,h!==a&&s.isPropagationStopped())break e;xc(s,m,j),a=h}else for(d=0;d<i.length;d++){if(m=i[d],h=m.instance,j=m.currentTarget,m=m.listener,h!==a&&s.isPropagationStopped())break e;xc(s,m,j),a=h}}}if(mi)throw e=Ys,mi=!1,Ys=null,e}function we(e,r){var n=r[Po];n===void 0&&(n=r[Po]=new Set);var i=e+"__bubble";n.has(i)||(vc(r,e,2,!1),n.add(i))}function wo(e,r,n){var i=0;r&&(i|=4),vc(n,e,i,r)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function _n(e){if(!e[Ei]){e[Ei]=!0,p.forEach(function(n){n!=="selectionchange"&&(gm.has(n)||wo(n,!1,e),wo(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ei]||(r[Ei]=!0,wo("selectionchange",!1,r))}}function vc(e,r,n,i){switch(Wl(r)){case 1:var s=Op;break;case 4:s=Ip;break;default:s=no}n=s.bind(null,r,n,e),s=void 0,!Gs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(r,n,{capture:!0,passive:s}):e.addEventListener(r,n,!0):s!==void 0?e.addEventListener(r,n,{passive:s}):e.addEventListener(r,n,!1)}function ko(e,r,n,i,s){var a=i;if((r&1)===0&&(r&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var m=i.stateNode.containerInfo;if(m===s||m.nodeType===8&&m.parentNode===s)break;if(d===4)for(d=i.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===s||h.nodeType===8&&h.parentNode===s))return;d=d.return}for(;m!==null;){if(d=jt(m),d===null)return;if(h=d.tag,h===5||h===6){i=a=d;continue e}m=m.parentNode}}i=i.return}Nl(function(){var j=a,b=Vs(n),S=[];e:{var N=hc.get(e);if(N!==void 0){var M=oo,B=e;switch(e){case"keypress":if(bi(n)===0)break e;case"keydown":case"keyup":M=Kp;break;case"focusin":B="focus",M=co;break;case"focusout":B="blur",M=co;break;case"beforeblur":case"afterblur":M=co;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Hl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Yp;break;case dc:case uc:case pc:M=Fp;break;case mc:M=Jp;break;case"scroll":M=Rp;break;case"wheel":M=em;break;case"copy":case"cut":case"paste":M=qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Vl}var q=(r&4)!==0,Re=!q&&e==="scroll",v=q?N!==null?N+"Capture":null:N;q=[];for(var f=j,y;f!==null;){y=f;var T=y.stateNode;if(y.tag===5&&T!==null&&(y=T,v!==null&&(T=vn(f,v),T!=null&&q.push(An(f,T,y)))),Re)break;f=f.return}0<q.length&&(N=new M(N,B,null,n,b),S.push({event:N,listeners:q}))}}if((r&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",N&&n!==$s&&(B=n.relatedTarget||n.fromElement)&&(jt(B)||B[qr]))break e;if((M||N)&&(N=b.window===b?b:(N=b.ownerDocument)?N.defaultView||N.parentWindow:window,M?(B=n.relatedTarget||n.toElement,M=j,B=B?jt(B):null,B!==null&&(Re=yt(B),B!==Re||B.tag!==5&&B.tag!==6)&&(B=null)):(M=null,B=j),M!==B)){if(q=Hl,T="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(q=Vl,T="onPointerLeave",v="onPointerEnter",f="pointer"),Re=M==null?N:Kt(M),y=B==null?N:Kt(B),N=new q(T,f+"leave",M,n,b),N.target=Re,N.relatedTarget=y,T=null,jt(b)===j&&(q=new q(v,f+"enter",B,n,b),q.target=y,q.relatedTarget=Re,T=q),Re=T,M&&B)r:{for(q=M,v=B,f=0,y=q;y;y=$t(y))f++;for(y=0,T=v;T;T=$t(T))y++;for(;0<f-y;)q=$t(q),f--;for(;0<y-f;)v=$t(v),y--;for(;f--;){if(q===v||v!==null&&q===v.alternate)break r;q=$t(q),v=$t(v)}q=null}else q=null;M!==null&&yc(S,N,M,q,!1),B!==null&&Re!==null&&yc(S,Re,B,q,!0)}}e:{if(N=j?Kt(j):window,M=N.nodeName&&N.nodeName.toLowerCase(),M==="select"||M==="input"&&N.type==="file")var U=am;else if(Jl(N))if(ec)U=um;else{U=cm;var Q=lm}else(M=N.nodeName)&&M.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(U=dm);if(U&&(U=U(e,j))){Zl(S,U,n,b);break e}Q&&Q(e,N,j),e==="focusout"&&(Q=N._wrapperState)&&Q.controlled&&N.type==="number"&&qs(N,"number",N.value)}switch(Q=j?Kt(j):window,e){case"focusin":(Jl(Q)||Q.contentEditable==="true")&&(Ut=Q,xo=j,Ln=null);break;case"focusout":Ln=xo=Ut=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,lc(S,n,b);break;case"selectionchange":if(hm)break;case"keydown":case"keyup":lc(S,n,b)}var G;if(po)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Dt?Yl(e,n)&&(Y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Y="onCompositionStart");Y&&(Kl&&n.locale!=="ko"&&(Dt||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Dt&&(G=Dl()):(rt=b,so="value"in rt?rt.value:rt.textContent,Dt=!0)),Q=Oi(j,Y),0<Q.length&&(Y=new $l(Y,e,null,n,b),S.push({event:Y,listeners:Q}),G?Y.data=G:(G=Xl(n),G!==null&&(Y.data=G)))),(G=tm?nm(e,n):im(e,n))&&(j=Oi(j,"onBeforeInput"),0<j.length&&(b=new $l("onBeforeInput","beforeinput",null,n,b),S.push({event:b,listeners:j}),b.data=G))}gc(S,r)})}function An(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Oi(e,r){for(var n=r+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=vn(e,n),a!=null&&i.unshift(An(e,a,s)),a=vn(e,r),a!=null&&i.push(An(e,a,s))),e=e.return}return i}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yc(e,r,n,i,s){for(var a=r._reactName,d=[];n!==null&&n!==i;){var m=n,h=m.alternate,j=m.stateNode;if(h!==null&&h===i)break;m.tag===5&&j!==null&&(m=j,s?(h=vn(n,a),h!=null&&d.unshift(An(n,h,m))):s||(h=vn(n,a),h!=null&&d.push(An(n,h,m)))),n=n.return}d.length!==0&&e.push({event:r,listeners:d})}var vm=/\r\n?/g,ym=/\u0000|\uFFFD/g;function jc(e){return(typeof e=="string"?e:""+e).replace(vm,`
`).replace(ym,"")}function Ii(e,r,n){if(r=jc(r),jc(e)!==r&&n)throw Error(l(425))}function Ri(){}var No=null,bo=null;function So(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Co=typeof setTimeout=="function"?setTimeout:void 0,jm=typeof clearTimeout=="function"?clearTimeout:void 0,wc=typeof Promise=="function"?Promise:void 0,wm=typeof queueMicrotask=="function"?queueMicrotask:typeof wc!="undefined"?function(e){return wc.resolve(null).then(e).catch(km)}:Co;function km(e){setTimeout(function(){throw e})}function To(e,r){var n=r,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){e.removeChild(s),Tn(r);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Tn(r)}function nt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function kc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Vt=Math.random().toString(36).slice(2),_r="__reactFiber$"+Vt,Fn="__reactProps$"+Vt,qr="__reactContainer$"+Vt,Po="__reactEvents$"+Vt,Nm="__reactListeners$"+Vt,bm="__reactHandles$"+Vt;function jt(e){var r=e[_r];if(r)return r;for(var n=e.parentNode;n;){if(r=n[qr]||n[_r]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=kc(e);e!==null;){if(n=e[_r])return n;e=kc(e)}return r}e=n,n=e.parentNode}return null}function Bn(e){return e=e[_r]||e[qr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Li(e){return e[Fn]||null}var zo=[],Qt=-1;function it(e){return{current:e}}function ke(e){0>Qt||(e.current=zo[Qt],zo[Qt]=null,Qt--)}function je(e,r){Qt++,zo[Qt]=e.current,e.current=r}var st={},Ge=it(st),nr=it(!1),wt=st;function Gt(e,r){var n=e.type.contextTypes;if(!n)return st;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===r)return i.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=r[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),s}function ir(e){return e=e.childContextTypes,e!=null}function Mi(){ke(nr),ke(Ge)}function Nc(e,r,n){if(Ge.current!==st)throw Error(l(168));je(Ge,r),je(nr,n)}function bc(e,r,n){var i=e.stateNode;if(r=r.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in r))throw Error(l(108,ue(e)||"Unknown",s));return L({},n,i)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||st,wt=Ge.current,je(Ge,e),je(nr,nr.current),!0}function Sc(e,r,n){var i=e.stateNode;if(!i)throw Error(l(169));n?(e=bc(e,r,wt),i.__reactInternalMemoizedMergedChildContext=e,ke(nr),ke(Ge),je(Ge,e)):ke(nr),je(nr,n)}var Wr=null,Ai=!1,Eo=!1;function Cc(e){Wr===null?Wr=[e]:Wr.push(e)}function Sm(e){Ai=!0,Cc(e)}function ot(){if(!Eo&&Wr!==null){Eo=!0;var e=0,r=ge;try{var n=Wr;for(ge=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Wr=null,Ai=!1}catch(s){throw Wr!==null&&(Wr=Wr.slice(e+1)),Pl(Xs,ot),s}finally{ge=r,Eo=!1}}return null}var Yt=[],Xt=0,Fi=null,Bi=0,gr=[],vr=0,kt=null,Dr=1,Ur="";function Nt(e,r){Yt[Xt++]=Bi,Yt[Xt++]=Fi,Fi=e,Bi=r}function Tc(e,r,n){gr[vr++]=Dr,gr[vr++]=Ur,gr[vr++]=kt,kt=e;var i=Dr;e=Ur;var s=32-Cr(i)-1;i&=~(1<<s),n+=1;var a=32-Cr(r)+s;if(30<a){var d=s-s%5;a=(i&(1<<d)-1).toString(32),i>>=d,s-=d,Dr=1<<32-Cr(r)+s|n<<s|i,Ur=a+e}else Dr=1<<a|n<<s|i,Ur=e}function Oo(e){e.return!==null&&(Nt(e,1),Tc(e,1,0))}function Io(e){for(;e===Fi;)Fi=Yt[--Xt],Yt[Xt]=null,Bi=Yt[--Xt],Yt[Xt]=null;for(;e===kt;)kt=gr[--vr],gr[vr]=null,Ur=gr[--vr],gr[vr]=null,Dr=gr[--vr],gr[vr]=null}var pr=null,mr=null,Se=!1,Pr=null;function Pc(e,r){var n=kr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function zc(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,pr=e,mr=nt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,pr=e,mr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=kt!==null?{id:Dr,overflow:Ur}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=kr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,pr=e,mr=null,!0):!1;default:return!1}}function Ro(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lo(e){if(Se){var r=mr;if(r){var n=r;if(!zc(e,r)){if(Ro(e))throw Error(l(418));r=nt(n.nextSibling);var i=pr;r&&zc(e,r)?Pc(i,n):(e.flags=e.flags&-4097|2,Se=!1,pr=e)}}else{if(Ro(e))throw Error(l(418));e.flags=e.flags&-4097|2,Se=!1,pr=e}}}function Ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pr=e}function qi(e){if(e!==pr)return!1;if(!Se)return Ec(e),Se=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!So(e.type,e.memoizedProps)),r&&(r=mr)){if(Ro(e))throw Oc(),Error(l(418));for(;r;)Pc(e,r),r=nt(r.nextSibling)}if(Ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){mr=nt(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}mr=null}}else mr=pr?nt(e.stateNode.nextSibling):null;return!0}function Oc(){for(var e=mr;e;)e=nt(e.nextSibling)}function Jt(){mr=pr=null,Se=!1}function Mo(e){Pr===null?Pr=[e]:Pr.push(e)}var Cm=R.ReactCurrentBatchConfig;function qn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var i=n.stateNode}if(!i)throw Error(l(147,e));var s=i,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(d){var m=s.refs;d===null?delete m[a]:m[a]=d},r._stringRef=a,r)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function Wi(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Ic(e){var r=e._init;return r(e._payload)}function Rc(e){function r(v,f){if(e){var y=v.deletions;y===null?(v.deletions=[f],v.flags|=16):y.push(f)}}function n(v,f){if(!e)return null;for(;f!==null;)r(v,f),f=f.sibling;return null}function i(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function s(v,f){return v=ht(v,f),v.index=0,v.sibling=null,v}function a(v,f,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<f?(v.flags|=2,f):y):(v.flags|=2,f)):(v.flags|=1048576,f)}function d(v){return e&&v.alternate===null&&(v.flags|=2),v}function m(v,f,y,T){return f===null||f.tag!==6?(f=Ca(y,v.mode,T),f.return=v,f):(f=s(f,y),f.return=v,f)}function h(v,f,y,T){var U=y.type;return U===O?b(v,f,y.props.children,T,y.key):f!==null&&(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Qe&&Ic(U)===f.type)?(T=s(f,y.props),T.ref=qn(v,f,y),T.return=v,T):(T=us(y.type,y.key,y.props,null,v.mode,T),T.ref=qn(v,f,y),T.return=v,T)}function j(v,f,y,T){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Ta(y,v.mode,T),f.return=v,f):(f=s(f,y.children||[]),f.return=v,f)}function b(v,f,y,T,U){return f===null||f.tag!==7?(f=Ot(y,v.mode,T,U),f.return=v,f):(f=s(f,y),f.return=v,f)}function S(v,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ca(""+f,v.mode,y),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case J:return y=us(f.type,f.key,f.props,null,v.mode,y),y.ref=qn(v,null,f),y.return=v,y;case K:return f=Ta(f,v.mode,y),f.return=v,f;case Qe:var T=f._init;return S(v,T(f._payload),y)}if(fn(f)||H(f))return f=Ot(f,v.mode,y,null),f.return=v,f;Wi(v,f)}return null}function N(v,f,y,T){var U=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return U!==null?null:m(v,f,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case J:return y.key===U?h(v,f,y,T):null;case K:return y.key===U?j(v,f,y,T):null;case Qe:return U=y._init,N(v,f,U(y._payload),T)}if(fn(y)||H(y))return U!==null?null:b(v,f,y,T,null);Wi(v,y)}return null}function M(v,f,y,T,U){if(typeof T=="string"&&T!==""||typeof T=="number")return v=v.get(y)||null,m(f,v,""+T,U);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case J:return v=v.get(T.key===null?y:T.key)||null,h(f,v,T,U);case K:return v=v.get(T.key===null?y:T.key)||null,j(f,v,T,U);case Qe:var Q=T._init;return M(v,f,y,Q(T._payload),U)}if(fn(T)||H(T))return v=v.get(y)||null,b(f,v,T,U,null);Wi(f,T)}return null}function B(v,f,y,T){for(var U=null,Q=null,G=f,Y=f=0,De=null;G!==null&&Y<y.length;Y++){G.index>Y?(De=G,G=null):De=G.sibling;var me=N(v,G,y[Y],T);if(me===null){G===null&&(G=De);break}e&&G&&me.alternate===null&&r(v,G),f=a(me,f,Y),Q===null?U=me:Q.sibling=me,Q=me,G=De}if(Y===y.length)return n(v,G),Se&&Nt(v,Y),U;if(G===null){for(;Y<y.length;Y++)G=S(v,y[Y],T),G!==null&&(f=a(G,f,Y),Q===null?U=G:Q.sibling=G,Q=G);return Se&&Nt(v,Y),U}for(G=i(v,G);Y<y.length;Y++)De=M(G,v,Y,y[Y],T),De!==null&&(e&&De.alternate!==null&&G.delete(De.key===null?Y:De.key),f=a(De,f,Y),Q===null?U=De:Q.sibling=De,Q=De);return e&&G.forEach(function(ft){return r(v,ft)}),Se&&Nt(v,Y),U}function q(v,f,y,T){var U=H(y);if(typeof U!="function")throw Error(l(150));if(y=U.call(y),y==null)throw Error(l(151));for(var Q=U=null,G=f,Y=f=0,De=null,me=y.next();G!==null&&!me.done;Y++,me=y.next()){G.index>Y?(De=G,G=null):De=G.sibling;var ft=N(v,G,me.value,T);if(ft===null){G===null&&(G=De);break}e&&G&&ft.alternate===null&&r(v,G),f=a(ft,f,Y),Q===null?U=ft:Q.sibling=ft,Q=ft,G=De}if(me.done)return n(v,G),Se&&Nt(v,Y),U;if(G===null){for(;!me.done;Y++,me=y.next())me=S(v,me.value,T),me!==null&&(f=a(me,f,Y),Q===null?U=me:Q.sibling=me,Q=me);return Se&&Nt(v,Y),U}for(G=i(v,G);!me.done;Y++,me=y.next())me=M(G,v,Y,me.value,T),me!==null&&(e&&me.alternate!==null&&G.delete(me.key===null?Y:me.key),f=a(me,f,Y),Q===null?U=me:Q.sibling=me,Q=me);return e&&G.forEach(function(sh){return r(v,sh)}),Se&&Nt(v,Y),U}function Re(v,f,y,T){if(typeof y=="object"&&y!==null&&y.type===O&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case J:e:{for(var U=y.key,Q=f;Q!==null;){if(Q.key===U){if(U=y.type,U===O){if(Q.tag===7){n(v,Q.sibling),f=s(Q,y.props.children),f.return=v,v=f;break e}}else if(Q.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Qe&&Ic(U)===Q.type){n(v,Q.sibling),f=s(Q,y.props),f.ref=qn(v,Q,y),f.return=v,v=f;break e}n(v,Q);break}else r(v,Q);Q=Q.sibling}y.type===O?(f=Ot(y.props.children,v.mode,T,y.key),f.return=v,v=f):(T=us(y.type,y.key,y.props,null,v.mode,T),T.ref=qn(v,f,y),T.return=v,v=T)}return d(v);case K:e:{for(Q=y.key;f!==null;){if(f.key===Q)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(v,f.sibling),f=s(f,y.children||[]),f.return=v,v=f;break e}else{n(v,f);break}else r(v,f);f=f.sibling}f=Ta(y,v.mode,T),f.return=v,v=f}return d(v);case Qe:return Q=y._init,Re(v,f,Q(y._payload),T)}if(fn(y))return B(v,f,y,T);if(H(y))return q(v,f,y,T);Wi(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(v,f.sibling),f=s(f,y),f.return=v,v=f):(n(v,f),f=Ca(y,v.mode,T),f.return=v,v=f),d(v)):n(v,f)}return Re}var Zt=Rc(!0),Lc=Rc(!1),Di=it(null),Ui=null,en=null,_o=null;function Ao(){_o=en=Ui=null}function Fo(e){var r=Di.current;ke(Di),e._currentValue=r}function Bo(e,r,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,i!==null&&(i.childLanes|=r)):i!==null&&(i.childLanes&r)!==r&&(i.childLanes|=r),e===n)break;e=e.return}}function rn(e,r){Ui=e,_o=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(sr=!0),e.firstContext=null)}function yr(e){var r=e._currentValue;if(_o!==e)if(e={context:e,memoizedValue:r,next:null},en===null){if(Ui===null)throw Error(l(308));en=e,Ui.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return r}var bt=null;function qo(e){bt===null?bt=[e]:bt.push(e)}function Mc(e,r,n,i){var s=r.interleaved;return s===null?(n.next=n,qo(r)):(n.next=s.next,s.next=n),r.interleaved=n,Hr(e,i)}function Hr(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _c(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $r(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function lt(e,r,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(pe&2)!==0){var s=i.pending;return s===null?r.next=r:(r.next=s.next,s.next=r),i.pending=r,Hr(e,n)}return s=i.interleaved,s===null?(r.next=r,qo(i)):(r.next=s.next,s.next=r),i.interleaved=r,Hr(e,n)}function Hi(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var i=r.lanes;i&=e.pendingLanes,n|=i,r.lanes=n,eo(e,n)}}function Ac(e,r){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=d:a=a.next=d,n=n.next}while(n!==null);a===null?s=a=r:a=a.next=r}else s=a=r;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function $i(e,r,n,i){var s=e.updateQueue;at=!1;var a=s.firstBaseUpdate,d=s.lastBaseUpdate,m=s.shared.pending;if(m!==null){s.shared.pending=null;var h=m,j=h.next;h.next=null,d===null?a=j:d.next=j,d=h;var b=e.alternate;b!==null&&(b=b.updateQueue,m=b.lastBaseUpdate,m!==d&&(m===null?b.firstBaseUpdate=j:m.next=j,b.lastBaseUpdate=h))}if(a!==null){var S=s.baseState;d=0,b=j=h=null,m=a;do{var N=m.lane,M=m.eventTime;if((i&N)===N){b!==null&&(b=b.next={eventTime:M,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var B=e,q=m;switch(N=r,M=n,q.tag){case 1:if(B=q.payload,typeof B=="function"){S=B.call(M,S,N);break e}S=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=q.payload,N=typeof B=="function"?B.call(M,S,N):B,N==null)break e;S=L({},S,N);break e;case 2:at=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,N=s.effects,N===null?s.effects=[m]:N.push(m))}else M={eventTime:M,lane:N,tag:m.tag,payload:m.payload,callback:m.callback,next:null},b===null?(j=b=M,h=S):b=b.next=M,d|=N;if(m=m.next,m===null){if(m=s.shared.pending,m===null)break;N=m,m=N.next,N.next=null,s.lastBaseUpdate=N,s.shared.pending=null}}while(!0);if(b===null&&(h=S),s.baseState=h,s.firstBaseUpdate=j,s.lastBaseUpdate=b,r=s.shared.interleaved,r!==null){s=r;do d|=s.lane,s=s.next;while(s!==r)}else a===null&&(s.shared.lanes=0);Tt|=d,e.lanes=d,e.memoizedState=S}}function Fc(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var i=e[r],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(l(191,s));s.call(i)}}}var Wn={},Ar=it(Wn),Dn=it(Wn),Un=it(Wn);function St(e){if(e===Wn)throw Error(l(174));return e}function Do(e,r){switch(je(Un,r),je(Dn,e),je(Ar,Wn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ds(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Ds(r,e)}ke(Ar),je(Ar,r)}function tn(){ke(Ar),ke(Dn),ke(Un)}function Bc(e){St(Un.current);var r=St(Ar.current),n=Ds(r,e.type);r!==n&&(je(Dn,e),je(Ar,n))}function Uo(e){Dn.current===e&&(ke(Ar),ke(Dn))}var Te=it(0);function Vi(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ho=[];function $o(){for(var e=0;e<Ho.length;e++)Ho[e]._workInProgressVersionPrimary=null;Ho.length=0}var Ki=R.ReactCurrentDispatcher,Vo=R.ReactCurrentBatchConfig,Ct=0,Pe=null,Ae=null,qe=null,Qi=!1,Hn=!1,$n=0,Tm=0;function Ye(){throw Error(l(321))}function Ko(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Tr(e[n],r[n]))return!1;return!0}function Qo(e,r,n,i,s,a){if(Ct=a,Pe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ki.current=e===null||e.memoizedState===null?Om:Im,e=n(i,s),Hn){a=0;do{if(Hn=!1,$n=0,25<=a)throw Error(l(301));a+=1,qe=Ae=null,r.updateQueue=null,Ki.current=Rm,e=n(i,s)}while(Hn)}if(Ki.current=Xi,r=Ae!==null&&Ae.next!==null,Ct=0,qe=Ae=Pe=null,Qi=!1,r)throw Error(l(300));return e}function Go(){var e=$n!==0;return $n=0,e}function Fr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Pe.memoizedState=qe=e:qe=qe.next=e,qe}function jr(){if(Ae===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var r=qe===null?Pe.memoizedState:qe.next;if(r!==null)qe=r,Ae=e;else{if(e===null)throw Error(l(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},qe===null?Pe.memoizedState=qe=e:qe=qe.next=e}return qe}function Vn(e,r){return typeof r=="function"?r(e):r}function Yo(e){var r=jr(),n=r.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=Ae,s=i.baseQueue,a=n.pending;if(a!==null){if(s!==null){var d=s.next;s.next=a.next,a.next=d}i.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,i=i.baseState;var m=d=null,h=null,j=a;do{var b=j.lane;if((Ct&b)===b)h!==null&&(h=h.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),i=j.hasEagerState?j.eagerState:e(i,j.action);else{var S={lane:b,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};h===null?(m=h=S,d=i):h=h.next=S,Pe.lanes|=b,Tt|=b}j=j.next}while(j!==null&&j!==a);h===null?d=i:h.next=m,Tr(i,r.memoizedState)||(sr=!0),r.memoizedState=i,r.baseState=d,r.baseQueue=h,n.lastRenderedState=i}if(e=n.interleaved,e!==null){s=e;do a=s.lane,Pe.lanes|=a,Tt|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Xo(e){var r=jr(),n=r.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=r.memoizedState;if(s!==null){n.pending=null;var d=s=s.next;do a=e(a,d.action),d=d.next;while(d!==s);Tr(a,r.memoizedState)||(sr=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),n.lastRenderedState=a}return[a,i]}function qc(){}function Wc(e,r){var n=Pe,i=jr(),s=r(),a=!Tr(i.memoizedState,s);if(a&&(i.memoizedState=s,sr=!0),i=i.queue,Jo(Hc.bind(null,n,i,e),[e]),i.getSnapshot!==r||a||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Kn(9,Uc.bind(null,n,i,s,r),void 0,null),We===null)throw Error(l(349));(Ct&30)!==0||Dc(n,r,s)}return s}function Dc(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Pe.updateQueue,r===null?(r={lastEffect:null,stores:null},Pe.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Uc(e,r,n,i){r.value=n,r.getSnapshot=i,$c(r)&&Vc(e)}function Hc(e,r,n){return n(function(){$c(r)&&Vc(e)})}function $c(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Tr(e,n)}catch{return!0}}function Vc(e){var r=Hr(e,1);r!==null&&Ir(r,e,1,-1)}function Kc(e){var r=Fr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},r.queue=e,e=e.dispatch=Em.bind(null,Pe,e),[r.memoizedState,e]}function Kn(e,r,n,i){return e={tag:e,create:r,destroy:n,deps:i,next:null},r=Pe.updateQueue,r===null?(r={lastEffect:null,stores:null},Pe.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,r.lastEffect=e)),e}function Qc(){return jr().memoizedState}function Gi(e,r,n,i){var s=Fr();Pe.flags|=e,s.memoizedState=Kn(1|r,n,void 0,i===void 0?null:i)}function Yi(e,r,n,i){var s=jr();i=i===void 0?null:i;var a=void 0;if(Ae!==null){var d=Ae.memoizedState;if(a=d.destroy,i!==null&&Ko(i,d.deps)){s.memoizedState=Kn(r,n,a,i);return}}Pe.flags|=e,s.memoizedState=Kn(1|r,n,a,i)}function Gc(e,r){return Gi(8390656,8,e,r)}function Jo(e,r){return Yi(2048,8,e,r)}function Yc(e,r){return Yi(4,2,e,r)}function Xc(e,r){return Yi(4,4,e,r)}function Jc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Zc(e,r,n){return n=n!=null?n.concat([e]):null,Yi(4,4,Jc.bind(null,r,e),n)}function Zo(){}function ed(e,r){var n=jr();r=r===void 0?null:r;var i=n.memoizedState;return i!==null&&r!==null&&Ko(r,i[1])?i[0]:(n.memoizedState=[e,r],e)}function rd(e,r){var n=jr();r=r===void 0?null:r;var i=n.memoizedState;return i!==null&&r!==null&&Ko(r,i[1])?i[0]:(e=e(),n.memoizedState=[e,r],e)}function td(e,r,n){return(Ct&21)===0?(e.baseState&&(e.baseState=!1,sr=!0),e.memoizedState=n):(Tr(n,r)||(n=Il(),Pe.lanes|=n,Tt|=n,e.baseState=!0),r)}function Pm(e,r){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var i=Vo.transition;Vo.transition={};try{e(!1),r()}finally{ge=n,Vo.transition=i}}function nd(){return jr().memoizedState}function zm(e,r,n){var i=pt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},id(e))sd(r,n);else if(n=Mc(e,r,n,i),n!==null){var s=rr();Ir(n,e,i,s),od(n,r,i)}}function Em(e,r,n){var i=pt(e),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(id(e))sd(r,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var d=r.lastRenderedState,m=a(d,n);if(s.hasEagerState=!0,s.eagerState=m,Tr(m,d)){var h=r.interleaved;h===null?(s.next=s,qo(r)):(s.next=h.next,h.next=s),r.interleaved=s;return}}catch{}finally{}n=Mc(e,r,s,i),n!==null&&(s=rr(),Ir(n,e,i,s),od(n,r,i))}}function id(e){var r=e.alternate;return e===Pe||r!==null&&r===Pe}function sd(e,r){Hn=Qi=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function od(e,r,n){if((n&4194240)!==0){var i=r.lanes;i&=e.pendingLanes,n|=i,r.lanes=n,eo(e,n)}}var Xi={readContext:yr,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},Om={readContext:yr,useCallback:function(e,r){return Fr().memoizedState=[e,r===void 0?null:r],e},useContext:yr,useEffect:Gc,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Gi(4194308,4,Jc.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Gi(4194308,4,e,r)},useInsertionEffect:function(e,r){return Gi(4,2,e,r)},useMemo:function(e,r){var n=Fr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var i=Fr();return r=n!==void 0?n(r):r,i.memoizedState=i.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=zm.bind(null,Pe,e),[i.memoizedState,e]},useRef:function(e){var r=Fr();return e={current:e},r.memoizedState=e},useState:Kc,useDebugValue:Zo,useDeferredValue:function(e){return Fr().memoizedState=e},useTransition:function(){var e=Kc(!1),r=e[0];return e=Pm.bind(null,e[1]),Fr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var i=Pe,s=Fr();if(Se){if(n===void 0)throw Error(l(407));n=n()}else{if(n=r(),We===null)throw Error(l(349));(Ct&30)!==0||Dc(i,r,n)}s.memoizedState=n;var a={value:n,getSnapshot:r};return s.queue=a,Gc(Hc.bind(null,i,a,e),[e]),i.flags|=2048,Kn(9,Uc.bind(null,i,a,n,r),void 0,null),n},useId:function(){var e=Fr(),r=We.identifierPrefix;if(Se){var n=Ur,i=Dr;n=(i&~(1<<32-Cr(i)-1)).toString(32)+n,r=":"+r+"R"+n,n=$n++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Tm++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Im={readContext:yr,useCallback:ed,useContext:yr,useEffect:Jo,useImperativeHandle:Zc,useInsertionEffect:Yc,useLayoutEffect:Xc,useMemo:rd,useReducer:Yo,useRef:Qc,useState:function(){return Yo(Vn)},useDebugValue:Zo,useDeferredValue:function(e){var r=jr();return td(r,Ae.memoizedState,e)},useTransition:function(){var e=Yo(Vn)[0],r=jr().memoizedState;return[e,r]},useMutableSource:qc,useSyncExternalStore:Wc,useId:nd,unstable_isNewReconciler:!1},Rm={readContext:yr,useCallback:ed,useContext:yr,useEffect:Jo,useImperativeHandle:Zc,useInsertionEffect:Yc,useLayoutEffect:Xc,useMemo:rd,useReducer:Xo,useRef:Qc,useState:function(){return Xo(Vn)},useDebugValue:Zo,useDeferredValue:function(e){var r=jr();return Ae===null?r.memoizedState=e:td(r,Ae.memoizedState,e)},useTransition:function(){var e=Xo(Vn)[0],r=jr().memoizedState;return[e,r]},useMutableSource:qc,useSyncExternalStore:Wc,useId:nd,unstable_isNewReconciler:!1};function zr(e,r){if(e&&e.defaultProps){r=L({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function ea(e,r,n,i){r=e.memoizedState,n=n(i,r),n=n==null?r:L({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ji={isMounted:function(e){return(e=e._reactInternals)?yt(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var i=rr(),s=pt(e),a=$r(i,s);a.payload=r,n!=null&&(a.callback=n),r=lt(e,a,s),r!==null&&(Ir(r,e,s,i),Hi(r,e,s))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var i=rr(),s=pt(e),a=$r(i,s);a.tag=1,a.payload=r,n!=null&&(a.callback=n),r=lt(e,a,s),r!==null&&(Ir(r,e,s,i),Hi(r,e,s))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=rr(),i=pt(e),s=$r(n,i);s.tag=2,r!=null&&(s.callback=r),r=lt(e,s,i),r!==null&&(Ir(r,e,i,n),Hi(r,e,i))}};function ad(e,r,n,i,s,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,d):r.prototype&&r.prototype.isPureReactComponent?!Rn(n,i)||!Rn(s,a):!0}function ld(e,r,n){var i=!1,s=st,a=r.contextType;return typeof a=="object"&&a!==null?a=yr(a):(s=ir(r)?wt:Ge.current,i=r.contextTypes,a=(i=i!=null)?Gt(e,s):st),r=new r(n,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ji,e.stateNode=r,r._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),r}function cd(e,r,n,i){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,i),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,i),r.state!==e&&Ji.enqueueReplaceState(r,r.state,null)}function ra(e,r,n,i){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Wo(e);var a=r.contextType;typeof a=="object"&&a!==null?s.context=yr(a):(a=ir(r)?wt:Ge.current,s.context=Gt(e,a)),s.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(ea(e,r,a,n),s.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Ji.enqueueReplaceState(s,s.state,null),$i(e,n,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,r){try{var n="",i=r;do n+=le(i),i=i.return;while(i);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:s,digest:null}}function ta(e,r,n){return{value:e,source:null,stack:n!=null?n:null,digest:r!=null?r:null}}function na(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Lm=typeof WeakMap=="function"?WeakMap:Map;function dd(e,r,n){n=$r(-1,n),n.tag=3,n.payload={element:null};var i=r.value;return n.callback=function(){ss||(ss=!0,va=i),na(e,r)},n}function ud(e,r,n){n=$r(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=r.value;n.payload=function(){return i(s)},n.callback=function(){na(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){na(e,r),typeof i!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),n}function pd(e,r,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Lm;var s=new Set;i.set(r,s)}else s=i.get(r),s===void 0&&(s=new Set,i.set(r,s));s.has(n)||(s.add(n),e=Qm.bind(null,e,r,n),r.then(e,e))}function md(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function hd(e,r,n,i,s){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=$r(-1,1),r.tag=2,lt(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Mm=R.ReactCurrentOwner,sr=!1;function er(e,r,n,i){r.child=e===null?Lc(r,null,n,i):Zt(r,e.child,n,i)}function fd(e,r,n,i,s){n=n.render;var a=r.ref;return rn(r,s),i=Qo(e,r,n,i,a,s),n=Go(),e!==null&&!sr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Vr(e,r,s)):(Se&&n&&Oo(r),r.flags|=1,er(e,r,i,s),r.child)}function xd(e,r,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Sa(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=a,gd(e,r,a,i,s)):(e=us(n.type,null,i,r,r.mode,s),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&s)===0){var d=a.memoizedProps;if(n=n.compare,n=n!==null?n:Rn,n(d,i)&&e.ref===r.ref)return Vr(e,r,s)}return r.flags|=1,e=ht(a,i),e.ref=r.ref,e.return=r,r.child=e}function gd(e,r,n,i,s){if(e!==null){var a=e.memoizedProps;if(Rn(a,i)&&e.ref===r.ref)if(sr=!1,r.pendingProps=i=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(sr=!0);else return r.lanes=e.lanes,Vr(e,r,s)}return ia(e,r,n,i,s)}function vd(e,r,n){var i=r.pendingProps,s=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(on,hr),hr|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,je(on,hr),hr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,je(on,hr),hr|=i}else a!==null?(i=a.baseLanes|n,r.memoizedState=null):i=n,je(on,hr),hr|=i;return er(e,r,s,n),r.child}function yd(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function ia(e,r,n,i,s){var a=ir(n)?wt:Ge.current;return a=Gt(r,a),rn(r,s),n=Qo(e,r,n,i,a,s),i=Go(),e!==null&&!sr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Vr(e,r,s)):(Se&&i&&Oo(r),r.flags|=1,er(e,r,n,s),r.child)}function jd(e,r,n,i,s){if(ir(n)){var a=!0;_i(r)}else a=!1;if(rn(r,s),r.stateNode===null)es(e,r),ld(r,n,i),ra(r,n,i,s),i=!0;else if(e===null){var d=r.stateNode,m=r.memoizedProps;d.props=m;var h=d.context,j=n.contextType;typeof j=="object"&&j!==null?j=yr(j):(j=ir(n)?wt:Ge.current,j=Gt(r,j));var b=n.getDerivedStateFromProps,S=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==i||h!==j)&&cd(r,d,i,j),at=!1;var N=r.memoizedState;d.state=N,$i(r,i,d,s),h=r.memoizedState,m!==i||N!==h||nr.current||at?(typeof b=="function"&&(ea(r,n,b,i),h=r.memoizedState),(m=at||ad(r,n,m,i,N,h,j))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=i,r.memoizedState=h),d.props=i,d.state=h,d.context=j,i=m):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),i=!1)}else{d=r.stateNode,_c(e,r),m=r.memoizedProps,j=r.type===r.elementType?m:zr(r.type,m),d.props=j,S=r.pendingProps,N=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=yr(h):(h=ir(n)?wt:Ge.current,h=Gt(r,h));var M=n.getDerivedStateFromProps;(b=typeof M=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==S||N!==h)&&cd(r,d,i,h),at=!1,N=r.memoizedState,d.state=N,$i(r,i,d,s);var B=r.memoizedState;m!==S||N!==B||nr.current||at?(typeof M=="function"&&(ea(r,n,M,i),B=r.memoizedState),(j=at||ad(r,n,j,i,N,B,h)||!1)?(b||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,B,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,B,h)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&N===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&N===e.memoizedState||(r.flags|=1024),r.memoizedProps=i,r.memoizedState=B),d.props=i,d.state=B,d.context=h,i=j):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&N===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&N===e.memoizedState||(r.flags|=1024),i=!1)}return sa(e,r,n,i,a,s)}function sa(e,r,n,i,s,a){yd(e,r);var d=(r.flags&128)!==0;if(!i&&!d)return s&&Sc(r,n,!1),Vr(e,r,a);i=r.stateNode,Mm.current=r;var m=d&&typeof n.getDerivedStateFromError!="function"?null:i.render();return r.flags|=1,e!==null&&d?(r.child=Zt(r,e.child,null,a),r.child=Zt(r,null,m,a)):er(e,r,m,a),r.memoizedState=i.state,s&&Sc(r,n,!0),r.child}function wd(e){var r=e.stateNode;r.pendingContext?Nc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Nc(e,r.context,!1),Do(e,r.containerInfo)}function kd(e,r,n,i,s){return Jt(),Mo(s),r.flags|=256,er(e,r,n,i),r.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,r,n){var i=r.pendingProps,s=Te.current,a=!1,d=(r.flags&128)!==0,m;if((m=d)||(m=e!==null&&e.memoizedState===null?!1:(s&2)!==0),m?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),je(Te,s&1),e===null)return Lo(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=i.children,e=i.fallback,a?(i=r.mode,a=r.child,d={mode:"hidden",children:d},(i&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=ps(d,i,0,null),e=Ot(e,i,n,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=aa(n),r.memoizedState=oa,e):la(r,d));if(s=e.memoizedState,s!==null&&(m=s.dehydrated,m!==null))return _m(e,r,d,i,m,s,n);if(a){a=i.fallback,d=r.mode,s=e.child,m=s.sibling;var h={mode:"hidden",children:i.children};return(d&1)===0&&r.child!==s?(i=r.child,i.childLanes=0,i.pendingProps=h,r.deletions=null):(i=ht(s,h),i.subtreeFlags=s.subtreeFlags&14680064),m!==null?a=ht(m,a):(a=Ot(a,d,n,null),a.flags|=2),a.return=r,i.return=r,i.sibling=a,r.child=i,i=a,a=r.child,d=e.child.memoizedState,d=d===null?aa(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~n,r.memoizedState=oa,i}return a=e.child,e=a.sibling,i=ht(a,{mode:"visible",children:i.children}),(r.mode&1)===0&&(i.lanes=n),i.return=r,i.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=i,r.memoizedState=null,i}function la(e,r){return r=ps({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Zi(e,r,n,i){return i!==null&&Mo(i),Zt(r,e.child,null,n),e=la(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function _m(e,r,n,i,s,a,d){if(n)return r.flags&256?(r.flags&=-257,i=ta(Error(l(422))),Zi(e,r,d,i)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=i.fallback,s=r.mode,i=ps({mode:"visible",children:i.children},s,0,null),a=Ot(a,s,d,null),a.flags|=2,i.return=r,a.return=r,i.sibling=a,r.child=i,(r.mode&1)!==0&&Zt(r,e.child,null,d),r.child.memoizedState=aa(d),r.memoizedState=oa,a);if((r.mode&1)===0)return Zi(e,r,d,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var m=i.dgst;return i=m,a=Error(l(419)),i=ta(a,i,void 0),Zi(e,r,d,i)}if(m=(d&e.childLanes)!==0,sr||m){if(i=We,i!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(i.suspendedLanes|d))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Hr(e,s),Ir(i,e,s,-1))}return ba(),i=ta(Error(l(421))),Zi(e,r,d,i)}return s.data==="$?"?(r.flags|=128,r.child=e.child,r=Gm.bind(null,e),s._reactRetry=r,null):(e=a.treeContext,mr=nt(s.nextSibling),pr=r,Se=!0,Pr=null,e!==null&&(gr[vr++]=Dr,gr[vr++]=Ur,gr[vr++]=kt,Dr=e.id,Ur=e.overflow,kt=r),r=la(r,i.children),r.flags|=4096,r)}function bd(e,r,n){e.lanes|=r;var i=e.alternate;i!==null&&(i.lanes|=r),Bo(e.return,r,n)}function ca(e,r,n,i,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s)}function Sd(e,r,n){var i=r.pendingProps,s=i.revealOrder,a=i.tail;if(er(e,r,i.children,n),i=Te.current,(i&2)!==0)i=i&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bd(e,n,r);else if(e.tag===19)bd(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(je(Te,i),(r.mode&1)===0)r.memoizedState=null;else switch(s){case"forwards":for(n=r.child,s=null;n!==null;)e=n.alternate,e!==null&&Vi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=r.child,r.child=null):(s=n.sibling,n.sibling=null),ca(r,!1,s,n,a);break;case"backwards":for(n=null,s=r.child,r.child=null;s!==null;){if(e=s.alternate,e!==null&&Vi(e)===null){r.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ca(r,!0,n,null,a);break;case"together":ca(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function es(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Vr(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),Tt|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,n=ht(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Am(e,r,n){switch(r.tag){case 3:wd(r),Jt();break;case 5:Bc(r);break;case 1:ir(r.type)&&_i(r);break;case 4:Do(r,r.stateNode.containerInfo);break;case 10:var i=r.type._context,s=r.memoizedProps.value;je(Di,i._currentValue),i._currentValue=s;break;case 13:if(i=r.memoizedState,i!==null)return i.dehydrated!==null?(je(Te,Te.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?Nd(e,r,n):(je(Te,Te.current&1),e=Vr(e,r,n),e!==null?e.sibling:null);je(Te,Te.current&1);break;case 19:if(i=(n&r.childLanes)!==0,(e.flags&128)!==0){if(i)return Sd(e,r,n);r.flags|=128}if(s=r.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),je(Te,Te.current),i)break;return null;case 22:case 23:return r.lanes=0,vd(e,r,n)}return Vr(e,r,n)}var Cd,da,Td,Pd;Cd=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},da=function(){},Td=function(e,r,n,i){var s=e.memoizedProps;if(s!==i){e=r.stateNode,St(Ar.current);var a=null;switch(n){case"input":s=Fs(e,s),i=Fs(e,i),a=[];break;case"select":s=L({},s,{value:void 0}),i=L({},i,{value:void 0}),a=[];break;case"textarea":s=Ws(e,s),i=Ws(e,i),a=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ri)}Us(n,i);var d;n=null;for(j in s)if(!i.hasOwnProperty(j)&&s.hasOwnProperty(j)&&s[j]!=null)if(j==="style"){var m=s[j];for(d in m)m.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(u.hasOwnProperty(j)?a||(a=[]):(a=a||[]).push(j,null));for(j in i){var h=i[j];if(m=s!=null?s[j]:void 0,i.hasOwnProperty(j)&&h!==m&&(h!=null||m!=null))if(j==="style")if(m){for(d in m)!m.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&m[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(a||(a=[]),a.push(j,n)),n=h;else j==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,m=m?m.__html:void 0,h!=null&&m!==h&&(a=a||[]).push(j,h)):j==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(j,""+h):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(u.hasOwnProperty(j)?(h!=null&&j==="onScroll"&&we("scroll",e),a||m===h||(a=[])):(a=a||[]).push(j,h))}n&&(a=a||[]).push("style",n);var j=a;(r.updateQueue=j)&&(r.flags|=4)}},Pd=function(e,r,n,i){n!==i&&(r.flags|=4)};function Qn(e,r){if(!Se)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Xe(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(r)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,r}function Fm(e,r,n){var i=r.pendingProps;switch(Io(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(r),null;case 1:return ir(r.type)&&Mi(),Xe(r),null;case 3:return i=r.stateNode,tn(),ke(nr),ke(Ge),$o(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(qi(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Pr!==null&&(wa(Pr),Pr=null))),da(e,r),Xe(r),null;case 5:Uo(r);var s=St(Un.current);if(n=r.type,e!==null&&r.stateNode!=null)Td(e,r,n,i,s),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!i){if(r.stateNode===null)throw Error(l(166));return Xe(r),null}if(e=St(Ar.current),qi(r)){i=r.stateNode,n=r.type;var a=r.memoizedProps;switch(i[_r]=r,i[Fn]=a,e=(r.mode&1)!==0,n){case"dialog":we("cancel",i),we("close",i);break;case"iframe":case"object":case"embed":we("load",i);break;case"video":case"audio":for(s=0;s<Mn.length;s++)we(Mn[s],i);break;case"source":we("error",i);break;case"img":case"image":case"link":we("error",i),we("load",i);break;case"details":we("toggle",i);break;case"input":ll(i,a),we("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},we("invalid",i);break;case"textarea":ul(i,a),we("invalid",i)}Us(n,a),s=null;for(var d in a)if(a.hasOwnProperty(d)){var m=a[d];d==="children"?typeof m=="string"?i.textContent!==m&&(a.suppressHydrationWarning!==!0&&Ii(i.textContent,m,e),s=["children",m]):typeof m=="number"&&i.textContent!==""+m&&(a.suppressHydrationWarning!==!0&&Ii(i.textContent,m,e),s=["children",""+m]):u.hasOwnProperty(d)&&m!=null&&d==="onScroll"&&we("scroll",i)}switch(n){case"input":Yr(i),dl(i,a,!0);break;case"textarea":Yr(i),ml(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Ri)}i=s,r.updateQueue=i,i!==null&&(r.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=d.createElement(n,{is:i.is}):(e=d.createElement(n),n==="select"&&(d=e,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):e=d.createElementNS(e,n),e[_r]=r,e[Fn]=i,Cd(e,r,!1,!1),r.stateNode=e;e:{switch(d=Hs(n,i),n){case"dialog":we("cancel",e),we("close",e),s=i;break;case"iframe":case"object":case"embed":we("load",e),s=i;break;case"video":case"audio":for(s=0;s<Mn.length;s++)we(Mn[s],e);s=i;break;case"source":we("error",e),s=i;break;case"img":case"image":case"link":we("error",e),we("load",e),s=i;break;case"details":we("toggle",e),s=i;break;case"input":ll(e,i),s=Fs(e,i),we("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=L({},i,{value:void 0}),we("invalid",e);break;case"textarea":ul(e,i),s=Ws(e,i),we("invalid",e);break;default:s=i}Us(n,s),m=s;for(a in m)if(m.hasOwnProperty(a)){var h=m[a];a==="style"?gl(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&fl(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&xn(e,h):typeof h=="number"&&xn(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(u.hasOwnProperty(a)?h!=null&&a==="onScroll"&&we("scroll",e):h!=null&&ie(e,a,h,d))}switch(n){case"input":Yr(e),dl(e,i,!1);break;case"textarea":Yr(e),ml(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ce(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?At(e,!!i.multiple,a,!1):i.defaultValue!=null&&At(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ri)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Xe(r),null;case 6:if(e&&r.stateNode!=null)Pd(e,r,e.memoizedProps,i);else{if(typeof i!="string"&&r.stateNode===null)throw Error(l(166));if(n=St(Un.current),St(Ar.current),qi(r)){if(i=r.stateNode,n=r.memoizedProps,i[_r]=r,(a=i.nodeValue!==n)&&(e=pr,e!==null))switch(e.tag){case 3:Ii(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ii(i.nodeValue,n,(e.mode&1)!==0)}a&&(r.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_r]=r,r.stateNode=i}return Xe(r),null;case 13:if(ke(Te),i=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&mr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Oc(),Jt(),r.flags|=98560,a=!1;else if(a=qi(r),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[_r]=r}else Jt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Xe(r),a=!1}else Pr!==null&&(wa(Pr),Pr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Te.current&1)!==0?Fe===0&&(Fe=3):ba())),r.updateQueue!==null&&(r.flags|=4),Xe(r),null);case 4:return tn(),da(e,r),e===null&&_n(r.stateNode.containerInfo),Xe(r),null;case 10:return Fo(r.type._context),Xe(r),null;case 17:return ir(r.type)&&Mi(),Xe(r),null;case 19:if(ke(Te),a=r.memoizedState,a===null)return Xe(r),null;if(i=(r.flags&128)!==0,d=a.rendering,d===null)if(i)Qn(a,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=Vi(e),d!==null){for(r.flags|=128,Qn(a,!1),i=d.updateQueue,i!==null&&(r.updateQueue=i,r.flags|=4),r.subtreeFlags=0,i=n,n=r.child;n!==null;)a=n,e=i,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Te,Te.current&1|2),r.child}e=e.sibling}a.tail!==null&&Ie()>an&&(r.flags|=128,i=!0,Qn(a,!1),r.lanes=4194304)}else{if(!i)if(e=Vi(d),e!==null){if(r.flags|=128,i=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Qn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Se)return Xe(r),null}else 2*Ie()-a.renderingStartTime>an&&n!==1073741824&&(r.flags|=128,i=!0,Qn(a,!1),r.lanes=4194304);a.isBackwards?(d.sibling=r.child,r.child=d):(n=a.last,n!==null?n.sibling=d:r.child=d,a.last=d)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=Ie(),r.sibling=null,n=Te.current,je(Te,i?n&1|2:n&1),r):(Xe(r),null);case 22:case 23:return Na(),i=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(r.flags|=8192),i&&(r.mode&1)!==0?(hr&1073741824)!==0&&(Xe(r),r.subtreeFlags&6&&(r.flags|=8192)):Xe(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function Bm(e,r){switch(Io(r),r.tag){case 1:return ir(r.type)&&Mi(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return tn(),ke(nr),ke(Ge),$o(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Uo(r),null;case 13:if(ke(Te),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));Jt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ke(Te),null;case 4:return tn(),null;case 10:return Fo(r.type._context),null;case 22:case 23:return Na(),null;case 24:return null;default:return null}}var rs=!1,Je=!1,qm=typeof WeakSet=="function"?WeakSet:Set,F=null;function sn(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ee(e,r,i)}else n.current=null}function ua(e,r,n){try{n()}catch(i){Ee(e,r,i)}}var zd=!1;function Wm(e,r){if(No=wi,e=ac(),fo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var d=0,m=-1,h=-1,j=0,b=0,S=e,N=null;r:for(;;){for(var M;S!==n||s!==0&&S.nodeType!==3||(m=d+s),S!==a||i!==0&&S.nodeType!==3||(h=d+i),S.nodeType===3&&(d+=S.nodeValue.length),(M=S.firstChild)!==null;)N=S,S=M;for(;;){if(S===e)break r;if(N===n&&++j===s&&(m=d),N===a&&++b===i&&(h=d),(M=S.nextSibling)!==null)break;S=N,N=S.parentNode}S=M}n=m===-1||h===-1?null:{start:m,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(bo={focusedElem:e,selectionRange:n},wi=!1,F=r;F!==null;)if(r=F,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,F=e;else for(;F!==null;){r=F;try{var B=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var q=B.memoizedProps,Re=B.memoizedState,v=r.stateNode,f=v.getSnapshotBeforeUpdate(r.elementType===r.type?q:zr(r.type,q),Re);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=r.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(T){Ee(r,r.return,T)}if(e=r.sibling,e!==null){e.return=r.return,F=e;break}F=r.return}return B=zd,zd=!1,B}function Gn(e,r,n){var i=r.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&ua(r,n,a)}s=s.next}while(s!==i)}}function ts(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==r)}}function pa(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Ed(e){var r=e.alternate;r!==null&&(e.alternate=null,Ed(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[_r],delete r[Fn],delete r[Po],delete r[Nm],delete r[bm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Od(e){return e.tag===5||e.tag===3||e.tag===4}function Id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ma(e,r,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Ri));else if(i!==4&&(e=e.child,e!==null))for(ma(e,r,n),e=e.sibling;e!==null;)ma(e,r,n),e=e.sibling}function ha(e,r,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(ha(e,r,n),e=e.sibling;e!==null;)ha(e,r,n),e=e.sibling}var Ue=null,Er=!1;function ct(e,r,n){for(n=n.child;n!==null;)Rd(e,r,n),n=n.sibling}function Rd(e,r,n){if(Mr&&typeof Mr.onCommitFiberUnmount=="function")try{Mr.onCommitFiberUnmount(fi,n)}catch{}switch(n.tag){case 5:Je||sn(n,r);case 6:var i=Ue,s=Er;Ue=null,ct(e,r,n),Ue=i,Er=s,Ue!==null&&(Er?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Er?(e=Ue,n=n.stateNode,e.nodeType===8?To(e.parentNode,n):e.nodeType===1&&To(e,n),Tn(e)):To(Ue,n.stateNode));break;case 4:i=Ue,s=Er,Ue=n.stateNode.containerInfo,Er=!0,ct(e,r,n),Ue=i,Er=s;break;case 0:case 11:case 14:case 15:if(!Je&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var a=s,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&ua(n,r,d),s=s.next}while(s!==i)}ct(e,r,n);break;case 1:if(!Je&&(sn(n,r),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(m){Ee(n,r,m)}ct(e,r,n);break;case 21:ct(e,r,n);break;case 22:n.mode&1?(Je=(i=Je)||n.memoizedState!==null,ct(e,r,n),Je=i):ct(e,r,n);break;default:ct(e,r,n)}}function Ld(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qm),r.forEach(function(i){var s=Ym.bind(null,e,i);n.has(i)||(n.add(i),i.then(s,s))})}}function Or(e,r){var n=r.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var a=e,d=r,m=d;e:for(;m!==null;){switch(m.tag){case 5:Ue=m.stateNode,Er=!1;break e;case 3:Ue=m.stateNode.containerInfo,Er=!0;break e;case 4:Ue=m.stateNode.containerInfo,Er=!0;break e}m=m.return}if(Ue===null)throw Error(l(160));Rd(a,d,s),Ue=null,Er=!1;var h=s.alternate;h!==null&&(h.return=null),s.return=null}catch(j){Ee(s,r,j)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Md(r,e),r=r.sibling}function Md(e,r){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Or(r,e),Br(e),i&4){try{Gn(3,e,e.return),ts(3,e)}catch(q){Ee(e,e.return,q)}try{Gn(5,e,e.return)}catch(q){Ee(e,e.return,q)}}break;case 1:Or(r,e),Br(e),i&512&&n!==null&&sn(n,n.return);break;case 5:if(Or(r,e),Br(e),i&512&&n!==null&&sn(n,n.return),e.flags&32){var s=e.stateNode;try{xn(s,"")}catch(q){Ee(e,e.return,q)}}if(i&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,d=n!==null?n.memoizedProps:a,m=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{m==="input"&&a.type==="radio"&&a.name!=null&&cl(s,a),Hs(m,d);var j=Hs(m,a);for(d=0;d<h.length;d+=2){var b=h[d],S=h[d+1];b==="style"?gl(s,S):b==="dangerouslySetInnerHTML"?fl(s,S):b==="children"?xn(s,S):ie(s,b,S,j)}switch(m){case"input":Bs(s,a);break;case"textarea":pl(s,a);break;case"select":var N=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var M=a.value;M!=null?At(s,!!a.multiple,M,!1):N!==!!a.multiple&&(a.defaultValue!=null?At(s,!!a.multiple,a.defaultValue,!0):At(s,!!a.multiple,a.multiple?[]:"",!1))}s[Fn]=a}catch(q){Ee(e,e.return,q)}}break;case 6:if(Or(r,e),Br(e),i&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(q){Ee(e,e.return,q)}}break;case 3:if(Or(r,e),Br(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Tn(r.containerInfo)}catch(q){Ee(e,e.return,q)}break;case 4:Or(r,e),Br(e);break;case 13:Or(r,e),Br(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(ga=Ie())),i&4&&Ld(e);break;case 22:if(b=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(j=Je)||b,Or(r,e),Je=j):Or(r,e),Br(e),i&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!b&&(e.mode&1)!==0)for(F=e,b=e.child;b!==null;){for(S=F=b;F!==null;){switch(N=F,M=N.child,N.tag){case 0:case 11:case 14:case 15:Gn(4,N,N.return);break;case 1:sn(N,N.return);var B=N.stateNode;if(typeof B.componentWillUnmount=="function"){i=N,n=N.return;try{r=i,B.props=r.memoizedProps,B.state=r.memoizedState,B.componentWillUnmount()}catch(q){Ee(i,n,q)}}break;case 5:sn(N,N.return);break;case 22:if(N.memoizedState!==null){Fd(S);continue}}M!==null?(M.return=N,F=M):Fd(S)}b=b.sibling}e:for(b=null,S=e;;){if(S.tag===5){if(b===null){b=S;try{s=S.stateNode,j?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(m=S.stateNode,h=S.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,m.style.display=xl("display",d))}catch(q){Ee(e,e.return,q)}}}else if(S.tag===6){if(b===null)try{S.stateNode.nodeValue=j?"":S.memoizedProps}catch(q){Ee(e,e.return,q)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;b===S&&(b=null),S=S.return}b===S&&(b=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Or(r,e),Br(e),i&4&&Ld(e);break;case 21:break;default:Or(r,e),Br(e)}}function Br(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Od(n)){var i=n;break e}n=n.return}throw Error(l(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(xn(s,""),i.flags&=-33);var a=Id(e);ha(e,a,s);break;case 3:case 4:var d=i.stateNode.containerInfo,m=Id(e);ma(e,m,d);break;default:throw Error(l(161))}}catch(h){Ee(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Dm(e,r,n){F=e,_d(e)}function _d(e,r,n){for(var i=(e.mode&1)!==0;F!==null;){var s=F,a=s.child;if(s.tag===22&&i){var d=s.memoizedState!==null||rs;if(!d){var m=s.alternate,h=m!==null&&m.memoizedState!==null||Je;m=rs;var j=Je;if(rs=d,(Je=h)&&!j)for(F=s;F!==null;)d=F,h=d.child,d.tag===22&&d.memoizedState!==null?Bd(s):h!==null?(h.return=d,F=h):Bd(s);for(;a!==null;)F=a,_d(a),a=a.sibling;F=s,rs=m,Je=j}Ad(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,F=a):Ad(e)}}function Ad(e){for(;F!==null;){var r=F;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Je||ts(5,r);break;case 1:var i=r.stateNode;if(r.flags&4&&!Je)if(n===null)i.componentDidMount();else{var s=r.elementType===r.type?n.memoizedProps:zr(r.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Fc(r,a,i);break;case 3:var d=r.updateQueue;if(d!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Fc(r,d,n)}break;case 5:var m=r.stateNode;if(n===null&&r.flags&4){n=m;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var j=r.alternate;if(j!==null){var b=j.memoizedState;if(b!==null){var S=b.dehydrated;S!==null&&Tn(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Je||r.flags&512&&pa(r)}catch(N){Ee(r,r.return,N)}}if(r===e){F=null;break}if(n=r.sibling,n!==null){n.return=r.return,F=n;break}F=r.return}}function Fd(e){for(;F!==null;){var r=F;if(r===e){F=null;break}var n=r.sibling;if(n!==null){n.return=r.return,F=n;break}F=r.return}}function Bd(e){for(;F!==null;){var r=F;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{ts(4,r)}catch(h){Ee(r,n,h)}break;case 1:var i=r.stateNode;if(typeof i.componentDidMount=="function"){var s=r.return;try{i.componentDidMount()}catch(h){Ee(r,s,h)}}var a=r.return;try{pa(r)}catch(h){Ee(r,a,h)}break;case 5:var d=r.return;try{pa(r)}catch(h){Ee(r,d,h)}}}catch(h){Ee(r,r.return,h)}if(r===e){F=null;break}var m=r.sibling;if(m!==null){m.return=r.return,F=m;break}F=r.return}}var Um=Math.ceil,ns=R.ReactCurrentDispatcher,fa=R.ReactCurrentOwner,wr=R.ReactCurrentBatchConfig,pe=0,We=null,Le=null,He=0,hr=0,on=it(0),Fe=0,Yn=null,Tt=0,is=0,xa=0,Xn=null,or=null,ga=0,an=1/0,Kr=null,ss=!1,va=null,dt=null,os=!1,ut=null,as=0,Jn=0,ya=null,ls=-1,cs=0;function rr(){return(pe&6)!==0?Ie():ls!==-1?ls:ls=Ie()}function pt(e){return(e.mode&1)===0?1:(pe&2)!==0&&He!==0?He&-He:Cm.transition!==null?(cs===0&&(cs=Il()),cs):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Wl(e.type)),e)}function Ir(e,r,n,i){if(50<Jn)throw Jn=0,ya=null,Error(l(185));kn(e,n,i),((pe&2)===0||e!==We)&&(e===We&&((pe&2)===0&&(is|=n),Fe===4&&mt(e,He)),ar(e,i),n===1&&pe===0&&(r.mode&1)===0&&(an=Ie()+500,Ai&&ot()))}function ar(e,r){var n=e.callbackNode;Cp(e,r);var i=vi(e,e===We?He:0);if(i===0)n!==null&&zl(n),e.callbackNode=null,e.callbackPriority=0;else if(r=i&-i,e.callbackPriority!==r){if(n!=null&&zl(n),r===1)e.tag===0?Sm(Wd.bind(null,e)):Cc(Wd.bind(null,e)),wm(function(){(pe&6)===0&&ot()}),n=null;else{switch(Rl(i)){case 1:n=Xs;break;case 4:n=El;break;case 16:n=hi;break;case 536870912:n=Ol;break;default:n=hi}n=Gd(n,qd.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function qd(e,r){if(ls=-1,cs=0,(pe&6)!==0)throw Error(l(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var i=vi(e,e===We?He:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||r)r=ds(e,i);else{r=i;var s=pe;pe|=2;var a=Ud();(We!==e||He!==r)&&(Kr=null,an=Ie()+500,zt(e,r));do try{Vm();break}catch(m){Dd(e,m)}while(!0);Ao(),ns.current=a,pe=s,Le!==null?r=0:(We=null,He=0,r=Fe)}if(r!==0){if(r===2&&(s=Js(e),s!==0&&(i=s,r=ja(e,s))),r===1)throw n=Yn,zt(e,0),mt(e,i),ar(e,Ie()),n;if(r===6)mt(e,i);else{if(s=e.current.alternate,(i&30)===0&&!Hm(s)&&(r=ds(e,i),r===2&&(a=Js(e),a!==0&&(i=a,r=ja(e,a))),r===1))throw n=Yn,zt(e,0),mt(e,i),ar(e,Ie()),n;switch(e.finishedWork=s,e.finishedLanes=i,r){case 0:case 1:throw Error(l(345));case 2:Et(e,or,Kr);break;case 3:if(mt(e,i),(i&130023424)===i&&(r=ga+500-Ie(),10<r)){if(vi(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){rr(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Co(Et.bind(null,e,or,Kr),r);break}Et(e,or,Kr);break;case 4:if(mt(e,i),(i&4194240)===i)break;for(r=e.eventTimes,s=-1;0<i;){var d=31-Cr(i);a=1<<d,d=r[d],d>s&&(s=d),i&=~a}if(i=s,i=Ie()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Um(i/1960))-i,10<i){e.timeoutHandle=Co(Et.bind(null,e,or,Kr),i);break}Et(e,or,Kr);break;case 5:Et(e,or,Kr);break;default:throw Error(l(329))}}}return ar(e,Ie()),e.callbackNode===n?qd.bind(null,e):null}function ja(e,r){var n=Xn;return e.current.memoizedState.isDehydrated&&(zt(e,r).flags|=256),e=ds(e,r),e!==2&&(r=or,or=n,r!==null&&wa(r)),e}function wa(e){or===null?or=e:or.push.apply(or,e)}function Hm(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Tr(a(),s))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function mt(e,r){for(r&=~xa,r&=~is,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Cr(r),i=1<<n;e[n]=-1,r&=~i}}function Wd(e){if((pe&6)!==0)throw Error(l(327));ln();var r=vi(e,0);if((r&1)===0)return ar(e,Ie()),null;var n=ds(e,r);if(e.tag!==0&&n===2){var i=Js(e);i!==0&&(r=i,n=ja(e,i))}if(n===1)throw n=Yn,zt(e,0),mt(e,r),ar(e,Ie()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Et(e,or,Kr),ar(e,Ie()),null}function ka(e,r){var n=pe;pe|=1;try{return e(r)}finally{pe=n,pe===0&&(an=Ie()+500,Ai&&ot())}}function Pt(e){ut!==null&&ut.tag===0&&(pe&6)===0&&ln();var r=pe;pe|=1;var n=wr.transition,i=ge;try{if(wr.transition=null,ge=1,e)return e()}finally{ge=i,wr.transition=n,pe=r,(pe&6)===0&&ot()}}function Na(){hr=on.current,ke(on)}function zt(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jm(n)),Le!==null)for(n=Le.return;n!==null;){var i=n;switch(Io(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mi();break;case 3:tn(),ke(nr),ke(Ge),$o();break;case 5:Uo(i);break;case 4:tn();break;case 13:ke(Te);break;case 19:ke(Te);break;case 10:Fo(i.type._context);break;case 22:case 23:Na()}n=n.return}if(We=e,Le=e=ht(e.current,null),He=hr=r,Fe=0,Yn=null,xa=is=Tt=0,or=Xn=null,bt!==null){for(r=0;r<bt.length;r++)if(n=bt[r],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,a=n.pending;if(a!==null){var d=a.next;a.next=s,i.next=d}n.pending=i}bt=null}return e}function Dd(e,r){do{var n=Le;try{if(Ao(),Ki.current=Xi,Qi){for(var i=Pe.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Qi=!1}if(Ct=0,qe=Ae=Pe=null,Hn=!1,$n=0,fa.current=null,n===null||n.return===null){Fe=1,Yn=r,Le=null;break}e:{var a=e,d=n.return,m=n,h=r;if(r=He,m.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var j=h,b=m,S=b.tag;if((b.mode&1)===0&&(S===0||S===11||S===15)){var N=b.alternate;N?(b.updateQueue=N.updateQueue,b.memoizedState=N.memoizedState,b.lanes=N.lanes):(b.updateQueue=null,b.memoizedState=null)}var M=md(d);if(M!==null){M.flags&=-257,hd(M,d,m,a,r),M.mode&1&&pd(a,j,r),r=M,h=j;var B=r.updateQueue;if(B===null){var q=new Set;q.add(h),r.updateQueue=q}else B.add(h);break e}else{if((r&1)===0){pd(a,j,r),ba();break e}h=Error(l(426))}}else if(Se&&m.mode&1){var Re=md(d);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),hd(Re,d,m,a,r),Mo(nn(h,m));break e}}a=h=nn(h,m),Fe!==4&&(Fe=2),Xn===null?Xn=[a]:Xn.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var v=dd(a,h,r);Ac(a,v);break e;case 1:m=h;var f=a.type,y=a.stateNode;if((a.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(dt===null||!dt.has(y)))){a.flags|=65536,r&=-r,a.lanes|=r;var T=ud(a,m,r);Ac(a,T);break e}}a=a.return}while(a!==null)}$d(n)}catch(U){r=U,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Ud(){var e=ns.current;return ns.current=Xi,e===null?Xi:e}function ba(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),We===null||(Tt&268435455)===0&&(is&268435455)===0||mt(We,He)}function ds(e,r){var n=pe;pe|=2;var i=Ud();(We!==e||He!==r)&&(Kr=null,zt(e,r));do try{$m();break}catch(s){Dd(e,s)}while(!0);if(Ao(),pe=n,ns.current=i,Le!==null)throw Error(l(261));return We=null,He=0,Fe}function $m(){for(;Le!==null;)Hd(Le)}function Vm(){for(;Le!==null&&!gp();)Hd(Le)}function Hd(e){var r=Qd(e.alternate,e,hr);e.memoizedProps=e.pendingProps,r===null?$d(e):Le=r,fa.current=null}function $d(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=Fm(n,r,hr),n!==null){Le=n;return}}else{if(n=Bm(n,r),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Le=null;return}}if(r=r.sibling,r!==null){Le=r;return}Le=r=e}while(r!==null);Fe===0&&(Fe=5)}function Et(e,r,n){var i=ge,s=wr.transition;try{wr.transition=null,ge=1,Km(e,r,n,i)}finally{wr.transition=s,ge=i}return null}function Km(e,r,n,i){do ln();while(ut!==null);if((pe&6)!==0)throw Error(l(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Tp(e,a),e===We&&(Le=We=null,He=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||os||(os=!0,Gd(hi,function(){return ln(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=wr.transition,wr.transition=null;var d=ge;ge=1;var m=pe;pe|=4,fa.current=null,Wm(e,n),Md(n,e),mm(bo),wi=!!No,bo=No=null,e.current=n,Dm(n),vp(),pe=m,ge=d,wr.transition=a}else e.current=n;if(os&&(os=!1,ut=e,as=s),a=e.pendingLanes,a===0&&(dt=null),wp(n.stateNode),ar(e,Ie()),r!==null)for(i=e.onRecoverableError,n=0;n<r.length;n++)s=r[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(ss)throw ss=!1,e=va,va=null,e;return(as&1)!==0&&e.tag!==0&&ln(),a=e.pendingLanes,(a&1)!==0?e===ya?Jn++:(Jn=0,ya=e):Jn=0,ot(),null}function ln(){if(ut!==null){var e=Rl(as),r=wr.transition,n=ge;try{if(wr.transition=null,ge=16>e?16:e,ut===null)var i=!1;else{if(e=ut,ut=null,as=0,(pe&6)!==0)throw Error(l(331));var s=pe;for(pe|=4,F=e.current;F!==null;){var a=F,d=a.child;if((F.flags&16)!==0){var m=a.deletions;if(m!==null){for(var h=0;h<m.length;h++){var j=m[h];for(F=j;F!==null;){var b=F;switch(b.tag){case 0:case 11:case 15:Gn(8,b,a)}var S=b.child;if(S!==null)S.return=b,F=S;else for(;F!==null;){b=F;var N=b.sibling,M=b.return;if(Ed(b),b===j){F=null;break}if(N!==null){N.return=M,F=N;break}F=M}}}var B=a.alternate;if(B!==null){var q=B.child;if(q!==null){B.child=null;do{var Re=q.sibling;q.sibling=null,q=Re}while(q!==null)}}F=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,F=d;else e:for(;F!==null;){if(a=F,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Gn(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,F=v;break e}F=a.return}}var f=e.current;for(F=f;F!==null;){d=F;var y=d.child;if((d.subtreeFlags&2064)!==0&&y!==null)y.return=d,F=y;else e:for(d=f;F!==null;){if(m=F,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:ts(9,m)}}catch(U){Ee(m,m.return,U)}if(m===d){F=null;break e}var T=m.sibling;if(T!==null){T.return=m.return,F=T;break e}F=m.return}}if(pe=s,ot(),Mr&&typeof Mr.onPostCommitFiberRoot=="function")try{Mr.onPostCommitFiberRoot(fi,e)}catch{}i=!0}return i}finally{ge=n,wr.transition=r}}return!1}function Vd(e,r,n){r=nn(n,r),r=dd(e,r,1),e=lt(e,r,1),r=rr(),e!==null&&(kn(e,1,r),ar(e,r))}function Ee(e,r,n){if(e.tag===3)Vd(e,e,n);else for(;r!==null;){if(r.tag===3){Vd(r,e,n);break}else if(r.tag===1){var i=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dt===null||!dt.has(i))){e=nn(n,e),e=ud(r,e,1),r=lt(r,e,1),e=rr(),r!==null&&(kn(r,1,e),ar(r,e));break}}r=r.return}}function Qm(e,r,n){var i=e.pingCache;i!==null&&i.delete(r),r=rr(),e.pingedLanes|=e.suspendedLanes&n,We===e&&(He&n)===n&&(Fe===4||Fe===3&&(He&130023424)===He&&500>Ie()-ga?zt(e,0):xa|=n),ar(e,r)}function Kd(e,r){r===0&&((e.mode&1)===0?r=1:(r=gi,gi<<=1,(gi&130023424)===0&&(gi=4194304)));var n=rr();e=Hr(e,r),e!==null&&(kn(e,r,n),ar(e,n))}function Gm(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Kd(e,n)}function Ym(e,r){var n=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(l(314))}i!==null&&i.delete(r),Kd(e,n)}var Qd;Qd=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||nr.current)sr=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return sr=!1,Am(e,r,n);sr=(e.flags&131072)!==0}else sr=!1,Se&&(r.flags&1048576)!==0&&Tc(r,Bi,r.index);switch(r.lanes=0,r.tag){case 2:var i=r.type;es(e,r),e=r.pendingProps;var s=Gt(r,Ge.current);rn(r,n),s=Qo(null,r,i,e,s,n);var a=Go();return r.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ir(i)?(a=!0,_i(r)):a=!1,r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Wo(r),s.updater=Ji,r.stateNode=s,s._reactInternals=r,ra(r,i,e,n),r=sa(null,r,i,!0,a,n)):(r.tag=0,Se&&a&&Oo(r),er(null,r,s,n),r=r.child),r;case 16:i=r.elementType;e:{switch(es(e,r),e=r.pendingProps,s=i._init,i=s(i._payload),r.type=i,s=r.tag=Jm(i),e=zr(i,e),s){case 0:r=ia(null,r,i,e,n);break e;case 1:r=jd(null,r,i,e,n);break e;case 11:r=fd(null,r,i,e,n);break e;case 14:r=xd(null,r,i,zr(i.type,e),n);break e}throw Error(l(306,i,""))}return r;case 0:return i=r.type,s=r.pendingProps,s=r.elementType===i?s:zr(i,s),ia(e,r,i,s,n);case 1:return i=r.type,s=r.pendingProps,s=r.elementType===i?s:zr(i,s),jd(e,r,i,s,n);case 3:e:{if(wd(r),e===null)throw Error(l(387));i=r.pendingProps,a=r.memoizedState,s=a.element,_c(e,r),$i(r,i,null,n);var d=r.memoizedState;if(i=d.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){s=nn(Error(l(423)),r),r=kd(e,r,i,n,s);break e}else if(i!==s){s=nn(Error(l(424)),r),r=kd(e,r,i,n,s);break e}else for(mr=nt(r.stateNode.containerInfo.firstChild),pr=r,Se=!0,Pr=null,n=Lc(r,null,i,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jt(),i===s){r=Vr(e,r,n);break e}er(e,r,i,n)}r=r.child}return r;case 5:return Bc(r),e===null&&Lo(r),i=r.type,s=r.pendingProps,a=e!==null?e.memoizedProps:null,d=s.children,So(i,s)?d=null:a!==null&&So(i,a)&&(r.flags|=32),yd(e,r),er(e,r,d,n),r.child;case 6:return e===null&&Lo(r),null;case 13:return Nd(e,r,n);case 4:return Do(r,r.stateNode.containerInfo),i=r.pendingProps,e===null?r.child=Zt(r,null,i,n):er(e,r,i,n),r.child;case 11:return i=r.type,s=r.pendingProps,s=r.elementType===i?s:zr(i,s),fd(e,r,i,s,n);case 7:return er(e,r,r.pendingProps,n),r.child;case 8:return er(e,r,r.pendingProps.children,n),r.child;case 12:return er(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(i=r.type._context,s=r.pendingProps,a=r.memoizedProps,d=s.value,je(Di,i._currentValue),i._currentValue=d,a!==null)if(Tr(a.value,d)){if(a.children===s.children&&!nr.current){r=Vr(e,r,n);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var m=a.dependencies;if(m!==null){d=a.child;for(var h=m.firstContext;h!==null;){if(h.context===i){if(a.tag===1){h=$r(-1,n&-n),h.tag=2;var j=a.updateQueue;if(j!==null){j=j.shared;var b=j.pending;b===null?h.next=h:(h.next=b.next,b.next=h),j.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),Bo(a.return,n,r),m.lanes|=n;break}h=h.next}}else if(a.tag===10)d=a.type===r.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(l(341));d.lanes|=n,m=d.alternate,m!==null&&(m.lanes|=n),Bo(d,n,r),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===r){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}er(e,r,s.children,n),r=r.child}return r;case 9:return s=r.type,i=r.pendingProps.children,rn(r,n),s=yr(s),i=i(s),r.flags|=1,er(e,r,i,n),r.child;case 14:return i=r.type,s=zr(i,r.pendingProps),s=zr(i.type,s),xd(e,r,i,s,n);case 15:return gd(e,r,r.type,r.pendingProps,n);case 17:return i=r.type,s=r.pendingProps,s=r.elementType===i?s:zr(i,s),es(e,r),r.tag=1,ir(i)?(e=!0,_i(r)):e=!1,rn(r,n),ld(r,i,s),ra(r,i,s,n),sa(null,r,i,!0,e,n);case 19:return Sd(e,r,n);case 22:return vd(e,r,n)}throw Error(l(156,r.tag))};function Gd(e,r){return Pl(e,r)}function Xm(e,r,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kr(e,r,n,i){return new Xm(e,r,n,i)}function Sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jm(e){if(typeof e=="function")return Sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ze)return 11;if(e===Ze)return 14}return 2}function ht(e,r){var n=e.alternate;return n===null?(n=kr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function us(e,r,n,i,s,a){var d=2;if(i=e,typeof e=="function")Sa(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case O:return Ot(n.children,s,a,r);case D:d=8,s|=8;break;case ve:return e=kr(12,n,r,s|2),e.elementType=ve,e.lanes=a,e;case be:return e=kr(13,n,r,s),e.elementType=be,e.lanes=a,e;case Ke:return e=kr(19,n,r,s),e.elementType=Ke,e.lanes=a,e;case ye:return ps(n,s,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oe:d=10;break e;case ae:d=9;break e;case ze:d=11;break e;case Ze:d=14;break e;case Qe:d=16,i=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=kr(d,n,r,s),r.elementType=e,r.type=i,r.lanes=a,r}function Ot(e,r,n,i){return e=kr(7,e,i,r),e.lanes=n,e}function ps(e,r,n,i){return e=kr(22,e,i,r),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function Ca(e,r,n){return e=kr(6,e,null,r),e.lanes=n,e}function Ta(e,r,n){return r=kr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Zm(e,r,n,i,s){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Pa(e,r,n,i,s,a,d,m,h){return e=new Zm(e,r,n,m,h),r===1?(r=1,a===!0&&(r|=8)):r=0,a=kr(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wo(a),e}function eh(e,r,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:i==null?null:""+i,children:e,containerInfo:r,implementation:n}}function Yd(e){if(!e)return st;e=e._reactInternals;e:{if(yt(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ir(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(ir(n))return bc(e,n,r)}return r}function Xd(e,r,n,i,s,a,d,m,h){return e=Pa(n,i,!0,e,s,a,d,m,h),e.context=Yd(null),n=e.current,i=rr(),s=pt(n),a=$r(i,s),a.callback=r!=null?r:null,lt(n,a,s),e.current.lanes=s,kn(e,s,i),ar(e,i),e}function ms(e,r,n,i){var s=r.current,a=rr(),d=pt(s);return n=Yd(n),r.context===null?r.context=n:r.pendingContext=n,r=$r(a,d),r.payload={element:e},i=i===void 0?null:i,i!==null&&(r.callback=i),e=lt(s,r,d),e!==null&&(Ir(e,s,d,a),Hi(e,s,d)),d}function hs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function za(e,r){Jd(e,r),(e=e.alternate)&&Jd(e,r)}function rh(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ea(e){this._internalRoot=e}fs.prototype.render=Ea.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));ms(e,r,null,null)},fs.prototype.unmount=Ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Pt(function(){ms(null,e,null,null)}),r[qr]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var r=_l();e={blockedOn:null,target:e,priority:r};for(var n=0;n<et.length&&r!==0&&r<et[n].priority;n++);et.splice(n,0,e),n===0&&Bl(e)}};function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eu(){}function th(e,r,n,i,s){if(s){if(typeof i=="function"){var a=i;i=function(){var j=hs(d);a.call(j)}}var d=Xd(r,i,e,0,null,!1,!1,"",eu);return e._reactRootContainer=d,e[qr]=d.current,_n(e.nodeType===8?e.parentNode:e),Pt(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var m=i;i=function(){var j=hs(h);m.call(j)}}var h=Pa(e,0,!1,null,null,!1,!1,"",eu);return e._reactRootContainer=h,e[qr]=h.current,_n(e.nodeType===8?e.parentNode:e),Pt(function(){ms(r,h,n,i)}),h}function gs(e,r,n,i,s){var a=n._reactRootContainer;if(a){var d=a;if(typeof s=="function"){var m=s;s=function(){var h=hs(d);m.call(h)}}ms(r,d,e,s)}else d=th(n,r,e,s,i);return hs(d)}Ll=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=wn(r.pendingLanes);n!==0&&(eo(r,n|1),ar(r,Ie()),(pe&6)===0&&(an=Ie()+500,ot()))}break;case 13:Pt(function(){var i=Hr(e,1);if(i!==null){var s=rr();Ir(i,e,1,s)}}),za(e,1)}},ro=function(e){if(e.tag===13){var r=Hr(e,134217728);if(r!==null){var n=rr();Ir(r,e,134217728,n)}za(e,134217728)}},Ml=function(e){if(e.tag===13){var r=pt(e),n=Hr(e,r);if(n!==null){var i=rr();Ir(n,e,r,i)}za(e,r)}},_l=function(){return ge},Al=function(e,r){var n=ge;try{return ge=e,r()}finally{ge=n}},Ks=function(e,r,n){switch(r){case"input":if(Bs(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var i=n[r];if(i!==e&&i.form===e.form){var s=Li(i);if(!s)throw Error(l(90));vt(i),Bs(i,s)}}}break;case"textarea":pl(e,n);break;case"select":r=n.value,r!=null&&At(e,!!n.multiple,r,!1)}},wl=ka,kl=Pt;var nh={usingClientEntryPoint:!1,Events:[Bn,Kt,Li,yl,jl,ka]},Zn={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ih={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cl(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||rh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vs.isDisabled&&vs.supportsFiber)try{fi=vs.inject(ih),Mr=vs}catch{}}return lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nh,lr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oa(r))throw Error(l(200));return eh(e,r,null,n)},lr.createRoot=function(e,r){if(!Oa(e))throw Error(l(299));var n=!1,i="",s=Zd;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),r=Pa(e,1,!1,null,null,n,!1,i,s),e[qr]=r.current,_n(e.nodeType===8?e.parentNode:e),new Ea(r)},lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Cl(r),e=e===null?null:e.stateNode,e},lr.flushSync=function(e){return Pt(e)},lr.hydrate=function(e,r,n){if(!xs(r))throw Error(l(200));return gs(null,e,r,!0,n)},lr.hydrateRoot=function(e,r,n){if(!Oa(e))throw Error(l(405));var i=n!=null&&n.hydratedSources||null,s=!1,a="",d=Zd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),r=Xd(r,null,e,1,n!=null?n:null,s,!1,a,d),e[qr]=r.current,_n(e),i)for(e=0;e<i.length;e++)n=i[e],s=n._getVersion,s=s(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,s]:r.mutableSourceEagerHydrationData.push(n,s);return new fs(r)},lr.render=function(e,r,n){if(!xs(r))throw Error(l(200));return gs(null,e,r,!1,n)},lr.unmountComponentAtNode=function(e){if(!xs(e))throw Error(l(40));return e._reactRootContainer?(Pt(function(){gs(null,null,e,!1,function(){e._reactRootContainer=null,e[qr]=null})}),!0):!1},lr.unstable_batchedUpdates=ka,lr.unstable_renderSubtreeIntoContainer=function(e,r,n,i){if(!xs(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return gs(e,r,n,!1,i)},lr.version="18.3.1-next-f1338f8080-20240426",lr}var lu;function mh(){if(lu)return La.exports;lu=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),La.exports=ph(),La.exports}var cu;function hh(){if(cu)return ys;cu=1;var o=mh();return ys.createRoot=o.createRoot,ys.hydrateRoot=o.hydrateRoot,ys}var fh=hh(),ne=el();const xr=oh(ne);var cr=function(){return cr=Object.assign||function(c){for(var l,p=1,u=arguments.length;p<u;p++){l=arguments[p];for(var x in l)Object.prototype.hasOwnProperty.call(l,x)&&(c[x]=l[x])}return c},cr.apply(this,arguments)};function Cs(o,c,l){if(l||arguments.length===2)for(var p=0,u=c.length,x;p<u;p++)(x||!(p in c))&&(x||(x=Array.prototype.slice.call(c,0,p)),x[p]=c[p]);return o.concat(x||Array.prototype.slice.call(c))}var Ne="-ms-",ni="-moz-",fe="-webkit-",Au="comm",Is="rule",rl="decl",xh="@import",gh="@namespace",Fu="@keyframes",vh="@layer",Bu=Math.abs,tl=String.fromCharCode,$a=Object.assign;function yh(o,c){return Be(o,0)^45?(((c<<2^Be(o,0))<<2^Be(o,1))<<2^Be(o,2))<<2^Be(o,3):0}function qu(o){return o.trim()}function Qr(o,c){return(o=c.exec(o))?o[0]:o}function te(o,c,l){return o.replace(c,l)}function ws(o,c,l){return o.indexOf(c,l)}function Be(o,c){return o.charCodeAt(c)|0}function _t(o,c,l){return o.slice(c,l)}function Rr(o){return o.length}function Wu(o){return o.length}function ri(o,c){return c.push(o),o}function jh(o,c){return o.map(c).join("")}function du(o,c){return o.filter(function(l){return!Qr(l,c)})}var Rs=1,dn=1,Du=0,Nr=0,Me=0,hn="";function Ls(o,c,l,p,u,x,k,P){return{value:o,root:c,parent:l,type:p,props:u,children:x,line:Rs,column:dn,length:k,return:"",siblings:P}}function xt(o,c){return $a(Ls("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},c)}function cn(o){for(;o.root;)o=xt(o.root,{children:[o]});ri(o,o.siblings)}function wh(){return Me}function kh(){return Me=Nr>0?Be(hn,--Nr):0,dn--,Me===10&&(dn=1,Rs--),Me}function Lr(){return Me=Nr<Du?Be(hn,Nr++):0,dn++,Me===10&&(dn=1,Rs++),Me}function gt(){return Be(hn,Nr)}function ks(){return Nr}function Ms(o,c){return _t(hn,o,c)}function si(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nh(o){return Rs=dn=1,Du=Rr(hn=o),Nr=0,[]}function bh(o){return hn="",o}function Aa(o){return qu(Ms(Nr-1,Va(o===91?o+2:o===40?o+1:o)))}function Sh(o){for(;(Me=gt())&&Me<33;)Lr();return si(o)>2||si(Me)>3?"":" "}function Ch(o,c){for(;--c&&Lr()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return Ms(o,ks()+(c<6&&gt()==32&&Lr()==32))}function Va(o){for(;Lr();)switch(Me){case o:return Nr;case 34:case 39:o!==34&&o!==39&&Va(Me);break;case 40:o===41&&Va(o);break;case 92:Lr();break}return Nr}function Th(o,c){for(;Lr()&&o+Me!==57;)if(o+Me===84&&gt()===47)break;return"/*"+Ms(c,Nr-1)+"*"+tl(o===47?o:Lr())}function Ph(o){for(;!si(gt());)Lr();return Ms(o,Nr)}function zh(o){return bh(Ns("",null,null,null,[""],o=Nh(o),0,[0],o))}function Ns(o,c,l,p,u,x,k,P,C){for(var z=0,W=0,A=k,V=0,X=0,I=0,_=1,$=1,he=1,de=0,ie="",R=u,J=x,K=p,O=ie;$;)switch(I=de,de=Lr()){case 40:if(I!=108&&Be(O,A-1)==58){ws(O+=te(Aa(de),"&","&\f"),"&\f",Bu(z?P[z-1]:0))!=-1&&(he=-1);break}case 34:case 39:case 91:O+=Aa(de);break;case 9:case 10:case 13:case 32:O+=Sh(I);break;case 92:O+=Ch(ks()-1,7);continue;case 47:switch(gt()){case 42:case 47:ri(Eh(Th(Lr(),ks()),c,l,C),C),(si(I||1)==5||si(gt()||1)==5)&&Rr(O)&&_t(O,-1,void 0)!==" "&&(O+=" ");break;default:O+="/"}break;case 123*_:P[z++]=Rr(O)*he;case 125*_:case 59:case 0:switch(de){case 0:case 125:$=0;case 59+W:he==-1&&(O=te(O,/\f/g,"")),X>0&&(Rr(O)-A||_===0&&I===47)&&ri(X>32?pu(O+";",p,l,A-1,C):pu(te(O," ","")+";",p,l,A-2,C),C);break;case 59:O+=";";default:if(ri(K=uu(O,c,l,z,W,u,P,ie,R=[],J=[],A,x),x),de===123)if(W===0)Ns(O,c,K,K,R,x,A,P,J);else{switch(V){case 99:if(Be(O,3)===110)break;case 108:if(Be(O,2)===97)break;default:W=0;case 100:case 109:case 115:}W?Ns(o,K,K,p&&ri(uu(o,K,K,0,0,u,P,ie,u,R=[],A,J),J),u,J,A,P,p?R:J):Ns(O,K,K,K,[""],J,0,P,J)}}z=W=X=0,_=he=1,ie=O="",A=k;break;case 58:A=1+Rr(O),X=I;default:if(_<1){if(de==123)--_;else if(de==125&&_++==0&&kh()==125)continue}switch(O+=tl(de),de*_){case 38:he=W>0?1:(O+="\f",-1);break;case 44:P[z++]=(Rr(O)-1)*he,he=1;break;case 64:gt()===45&&(O+=Aa(Lr())),V=gt(),W=A=Rr(ie=O+=Ph(ks())),de++;break;case 45:I===45&&Rr(O)==2&&(_=0)}}return x}function uu(o,c,l,p,u,x,k,P,C,z,W,A){for(var V=u-1,X=u===0?x:[""],I=Wu(X),_=0,$=0,he=0;_<p;++_)for(var de=0,ie=_t(o,V+1,V=Bu($=k[_])),R=o;de<I;++de)(R=qu($>0?X[de]+" "+ie:te(ie,/&\f/g,X[de])))&&(C[he++]=R);return Ls(o,c,l,u===0?Is:P,C,z,W,A)}function Eh(o,c,l,p){return Ls(o,c,l,Au,tl(wh()),_t(o,2,-2),0,p)}function pu(o,c,l,p,u){return Ls(o,c,l,rl,_t(o,0,p),_t(o,p+1,-1),p,u)}function Uu(o,c,l){switch(yh(o,c)){case 5103:return fe+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return fe+o+o;case 4855:return fe+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return ni+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+o+ni+o+Ne+o+o;case 5936:switch(Be(o,c+11)){case 114:return fe+o+Ne+te(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return fe+o+Ne+te(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return fe+o+Ne+te(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return fe+o+Ne+o+o;case 6165:return fe+o+Ne+"flex-"+o+o;case 5187:return fe+o+te(o,/(\w+).+(:[^]+)/,fe+"box-$1$2"+Ne+"flex-$1$2")+o;case 5443:return fe+o+Ne+"flex-item-"+te(o,/flex-|-self/g,"")+(Qr(o,/flex-|baseline/)?"":Ne+"grid-row-"+te(o,/flex-|-self/g,""))+o;case 4675:return fe+o+Ne+"flex-line-pack"+te(o,/align-content|flex-|-self/g,"")+o;case 5548:return fe+o+Ne+te(o,"shrink","negative")+o;case 5292:return fe+o+Ne+te(o,"basis","preferred-size")+o;case 6060:return fe+"box-"+te(o,"-grow","")+fe+o+Ne+te(o,"grow","positive")+o;case 4554:return fe+te(o,/([^-])(transform)/g,"$1"+fe+"$2")+o;case 6187:return te(te(te(o,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),o,"")+o;case 5495:case 3959:return te(o,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return te(te(o,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+Ne+"flex-pack:$3"),/space-between/,"justify")+fe+o+o;case 4200:if(!Qr(o,/flex-|baseline/))return Ne+"grid-column-align"+_t(o,c)+o;break;case 2592:case 3360:return Ne+te(o,"template-","")+o;case 4384:case 3616:return l&&l.some(function(p,u){return c=u,Qr(p.props,/grid-\w+-end/)})?~ws(o+(l=l[c].value),"span",0)?o:Ne+te(o,"-start","")+o+Ne+"grid-row-span:"+(~ws(l,"span",0)?Qr(l,/\d+/):+Qr(l,/\d+/)-+Qr(o,/\d+/))+";":Ne+te(o,"-start","")+o;case 4896:case 4128:return l&&l.some(function(p){return Qr(p.props,/grid-\w+-start/)})?o:Ne+te(te(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return te(o,/(.+)-inline(.+)/,fe+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rr(o)-1-c>6)switch(Be(o,c+1)){case 109:if(Be(o,c+4)!==45)break;case 102:return te(o,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+ni+(Be(o,c+3)==108?"$3":"$2-$3"))+o;case 115:return~ws(o,"stretch",0)?Uu(te(o,"stretch","fill-available"),c,l)+o:o}break;case 5152:case 5920:return te(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,u,x,k,P,C,z){return Ne+u+":"+x+z+(k?Ne+u+"-span:"+(P?C:+C-+x)+z:"")+o});case 4949:if(Be(o,c+6)===121)return te(o,":",":"+fe)+o;break;case 6444:switch(Be(o,Be(o,14)===45?18:11)){case 120:return te(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Be(o,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+Ne+"$2box$3")+o;case 100:return te(o,":",":"+Ne)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(o,"scroll-","scroll-snap-")+o}return o}function Ts(o,c){for(var l="",p=0;p<o.length;p++)l+=c(o[p],p,o,c)||"";return l}function Oh(o,c,l,p){switch(o.type){case vh:if(o.children.length)break;case xh:case gh:case rl:return o.return=o.return||o.value;case Au:return"";case Fu:return o.return=o.value+"{"+Ts(o.children,p)+"}";case Is:if(!Rr(o.value=o.props.join(",")))return""}return Rr(l=Ts(o.children,p))?o.return=o.value+"{"+l+"}":""}function Ih(o){var c=Wu(o);return function(l,p,u,x){for(var k="",P=0;P<c;P++)k+=o[P](l,p,u,x)||"";return k}}function Rh(o){return function(c){c.root||(c=c.return)&&o(c)}}function Lh(o,c,l,p){if(o.length>-1&&!o.return)switch(o.type){case rl:o.return=Uu(o.value,o.length,l);return;case Fu:return Ts([xt(o,{value:te(o.value,"@","@"+fe)})],p);case Is:if(o.length)return jh(l=o.props,function(u){switch(Qr(u,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cn(xt(o,{props:[te(u,/:(read-\w+)/,":"+ni+"$1")]})),cn(xt(o,{props:[u]})),$a(o,{props:du(l,p)});break;case"::placeholder":cn(xt(o,{props:[te(u,/:(plac\w+)/,":"+fe+"input-$1")]})),cn(xt(o,{props:[te(u,/:(plac\w+)/,":"+ni+"$1")]})),cn(xt(o,{props:[te(u,/:(plac\w+)/,Ne+"input-$1")]})),cn(xt(o,{props:[u]})),$a(o,{props:du(l,p)});break}return""})}}var Mh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fr={},un=typeof process!="undefined"&&fr!==void 0&&(fr.REACT_APP_SC_ATTR||fr.SC_ATTR)||"data-styled",Hu="active",$u="data-styled-version",_s="6.3.10",nl=`/*!sc*/
`,ii=typeof window!="undefined"&&typeof document!="undefined",_h=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&fr!==void 0&&fr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&fr.REACT_APP_SC_DISABLE_SPEEDY!==""?fr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&fr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&fr!==void 0&&fr.SC_DISABLE_SPEEDY!==void 0&&fr.SC_DISABLE_SPEEDY!==""&&fr.SC_DISABLE_SPEEDY!=="false"&&fr.SC_DISABLE_SPEEDY);function ci(o){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var bs=new Map,Ps=new Map,Ss=1,ti=function(o){if(bs.has(o))return bs.get(o);for(;Ps.has(Ss);)Ss++;var c=Ss++;return bs.set(o,c),Ps.set(c,o),c},Ah=function(o,c){Ss=c+1,bs.set(o,c),Ps.set(c,o)},il=Object.freeze([]),pn=Object.freeze({});function Fh(o,c,l){return l===void 0&&(l=pn),o.theme!==l.theme&&o.theme||c||l.theme}var Vu=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Bh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qh=/(^-|-$)/g;function mu(o){return o.replace(Bh,"-").replace(qh,"")}var Wh=/(a)(d)/gi,hu=function(o){return String.fromCharCode(o+(o>25?39:97))};function Ka(o){var c,l="";for(c=Math.abs(o);c>52;c=c/52|0)l=hu(c%52)+l;return(hu(c%52)+l).replace(Wh,"$1-$2")}var Fa,It=function(o,c){for(var l=c.length;l;)o=33*o^c.charCodeAt(--l);return o},Ku=function(o){return It(5381,o)};function Dh(o){return Ka(Ku(o)>>>0)}function Uh(o){return o.displayName||o.name||"Component"}function Ba(o){return typeof o=="string"&&!0}var Qu=typeof Symbol=="function"&&Symbol.for,Gu=Qu?Symbol.for("react.memo"):60115,Hh=Qu?Symbol.for("react.forward_ref"):60112,$h={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kh=((Fa={})[Hh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fa[Gu]=Yu,Fa);function fu(o){return("type"in(c=o)&&c.type.$$typeof)===Gu?Yu:"$$typeof"in o?Kh[o.$$typeof]:$h;var c}var Qh=Object.defineProperty,Gh=Object.getOwnPropertyNames,xu=Object.getOwnPropertySymbols,Yh=Object.getOwnPropertyDescriptor,Xh=Object.getPrototypeOf,gu=Object.prototype;function Xu(o,c,l){if(typeof c!="string"){if(gu){var p=Xh(c);p&&p!==gu&&Xu(o,p,l)}var u=Gh(c);xu&&(u=u.concat(xu(c)));for(var x=fu(o),k=fu(c),P=0;P<u.length;++P){var C=u[P];if(!(C in Vh||l&&l[C]||k&&C in k||x&&C in x)){var z=Yh(c,C);try{Qh(o,C,z)}catch{}}}}return o}function mn(o){return typeof o=="function"}function sl(o){return typeof o=="object"&&"styledComponentId"in o}function Lt(o,c){return o&&c?"".concat(o," ").concat(c):o||c||""}function vu(o,c){return o.join("")}function oi(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function Qa(o,c,l){if(l===void 0&&(l=!1),!l&&!oi(o)&&!Array.isArray(o))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)o[p]=Qa(o[p],c[p]);else if(oi(c))for(var p in c)o[p]=Qa(o[p],c[p]);return o}function ol(o,c){Object.defineProperty(o,"toString",{value:c})}var Jh=(function(){function o(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return o.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var p=this._cGroup;p<c;p++)l+=this.groupSizes[p];else for(p=this._cGroup-1;p>=c;p--)l-=this.groupSizes[p];return this._cGroup=c,this._cIndex=l,l},o.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var p=this.groupSizes,u=p.length,x=u;c>=x;)if((x<<=1)<0)throw ci(16,"".concat(c));this.groupSizes=new Uint32Array(x),this.groupSizes.set(p),this.length=x;for(var k=u;k<x;k++)this.groupSizes[k]=0}for(var P=this.indexOfGroup(c+1),C=0,z=(k=0,l.length);k<z;k++)this.tag.insertRule(P,l[k])&&(this.groupSizes[c]++,P++,C++);C>0&&this._cGroup>c&&(this._cIndex+=C)},o.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],p=this.indexOfGroup(c),u=p+l;this.groupSizes[c]=0;for(var x=p;x<u;x++)this.tag.deleteRule(p);l>0&&this._cGroup>c&&(this._cIndex-=l)}},o.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var p=this.groupSizes[c],u=this.indexOfGroup(c),x=u+p,k=u;k<x;k++)l+=this.tag.getRule(k)+nl;return l},o})(),Zh="style[".concat(un,"][").concat($u,'="').concat(_s,'"]'),ef=new RegExp("^".concat(un,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yu=function(o){return typeof ShadowRoot!="undefined"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11},Ga=function(o){if(!o)return document;if(yu(o))return o;if("getRootNode"in o){var c=o.getRootNode();if(yu(c))return c}return document},rf=function(o,c,l){for(var p,u=l.split(","),x=0,k=u.length;x<k;x++)(p=u[x])&&o.registerName(c,p)},tf=function(o,c){for(var l,p=((l=c.textContent)!==null&&l!==void 0?l:"").split(nl),u=[],x=0,k=p.length;x<k;x++){var P=p[x].trim();if(P){var C=P.match(ef);if(C){var z=0|parseInt(C[1],10),W=C[2];z!==0&&(Ah(W,z),rf(o,W,C[3]),o.getTag().insertRules(z,u)),u.length=0}else u.push(P)}}},qa=function(o){for(var c=Ga(o.options.target).querySelectorAll(Zh),l=0,p=c.length;l<p;l++){var u=c[l];u&&u.getAttribute(un)!==Hu&&(tf(o,u),u.parentNode&&u.parentNode.removeChild(u))}};function nf(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Ju=function(o){var c=document.head,l=o||c,p=document.createElement("style"),u=(function(P){var C=Array.from(P.querySelectorAll("style[".concat(un,"]")));return C[C.length-1]})(l),x=u!==void 0?u.nextSibling:null;p.setAttribute(un,Hu),p.setAttribute($u,_s);var k=nf();return k&&p.setAttribute("nonce",k),l.insertBefore(p,x),p},sf=(function(){function o(c){this.element=Ju(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var p;if(l.sheet)return l.sheet;for(var u=(p=l.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets,x=0,k=u.length;x<k;x++){var P=u[x];if(P.ownerNode===l)return P}throw ci(17)})(this.element),this.length=0}return o.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},o.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},o})(),of=(function(){function o(c){this.element=Ju(c),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},o.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},o})(),af=(function(){function o(c){this.rules=[],this.length=0}return o.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},o.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},o.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},o})(),ju=ii,lf={isServer:!ii,useCSSOMInjection:!_h},Zu=(function(){function o(c,l,p){c===void 0&&(c=pn),l===void 0&&(l={});var u=this;this.options=cr(cr({},lf),c),this.gs=l,this.names=new Map(p),this.server=!!c.isServer,!this.server&&ii&&ju&&(ju=!1,qa(this)),ol(this,function(){return(function(x){for(var k=x.getTag(),P=k.length,C="",z=function(A){var V=(function(he){return Ps.get(he)})(A);if(V===void 0)return"continue";var X=x.names.get(V);if(X===void 0||!X.size)return"continue";var I=k.getGroup(A);if(I.length===0)return"continue";var _=un+".g"+A+'[id="'+V+'"]',$="";X.forEach(function(he){he.length>0&&($+=he+",")}),C+=I+_+'{content:"'+$+'"}'+nl},W=0;W<P;W++)z(W);return C})(u)})}return o.registerId=function(c){return ti(c)},o.prototype.rehydrate=function(){!this.server&&ii&&qa(this)},o.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var p=new o(cr(cr({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&ii&&c.target!==this.options.target&&Ga(this.options.target)!==Ga(c.target)&&qa(p),p},o.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var p=l.useCSSOMInjection,u=l.target;return l.isServer?new af(u):p?new sf(u):new of(u)})(this.options),new Jh(c)));var c},o.prototype.hasNameForId=function(c,l){var p,u;return(u=(p=this.names.get(c))===null||p===void 0?void 0:p.has(l))!==null&&u!==void 0&&u},o.prototype.registerName=function(c,l){ti(c);var p=this.names.get(c);p?p.add(l):this.names.set(c,new Set([l]))},o.prototype.insertRules=function(c,l,p){this.registerName(c,l),this.getTag().insertRules(ti(c),p)},o.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},o.prototype.clearRules=function(c){this.getTag().clearGroup(ti(c)),this.clearNames(c)},o.prototype.clearTag=function(){this.tag=void 0},o})(),cf=/&/g,Gr=47,Rt=42;function wu(o){if(o.indexOf("}")===-1)return!1;for(var c=o.length,l=0,p=0,u=!1,x=0;x<c;x++){var k=o.charCodeAt(x);if(p!==0||u||k!==Gr||o.charCodeAt(x+1)!==Rt)if(u)k===Rt&&o.charCodeAt(x+1)===Gr&&(u=!1,x++);else if(k!==34&&k!==39||x!==0&&o.charCodeAt(x-1)===92){if(p===0){if(k===123)l++;else if(k===125&&--l<0)return!0}}else p===0?p=k:p===k&&(p=0);else u=!0,x++}return l!==0||p!==0}function ep(o,c){return o.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=ep(l.children,c)),l})}function df(o){var c,l,p,u=pn,x=u.options,k=x===void 0?pn:x,P=u.plugins,C=P===void 0?il:P,z=function(I,_,$){return $.startsWith(l)&&$.endsWith(l)&&$.replaceAll(l,"").length>0?".".concat(c):I},W=C.slice();W.push(function(I){I.type===Is&&I.value.includes("&")&&(p||(p=new RegExp("\\".concat(l,"\\b"),"g")),I.props[0]=I.props[0].replace(cf,l).replace(p,z))}),k.prefix&&W.push(Lh),W.push(Oh);var A=[],V=Ih(W.concat(Rh(function(I){return A.push(I)}))),X=function(I,_,$,he){_===void 0&&(_=""),$===void 0&&($=""),he===void 0&&(he="&"),c=he,l=_,p=void 0;var de=(function(R){if(!wu(R))return R;for(var J=R.length,K="",O=0,D=0,ve=0,Oe=!1,ae=0;ae<J;ae++){var ze=R.charCodeAt(ae);if(ve!==0||Oe||ze!==Gr||R.charCodeAt(ae+1)!==Rt)if(Oe)ze===Rt&&R.charCodeAt(ae+1)===Gr&&(Oe=!1,ae++);else if(ze!==34&&ze!==39||ae!==0&&R.charCodeAt(ae-1)===92){if(ve===0)if(ze===123)D++;else if(ze===125){if(--D<0){for(var be=ae+1;be<J;){var Ke=R.charCodeAt(be);if(Ke===59||Ke===10)break;be++}be<J&&R.charCodeAt(be)===59&&be++,D=0,ae=be-1,O=be;continue}D===0&&(K+=R.substring(O,ae+1),O=ae+1)}else ze===59&&D===0&&(K+=R.substring(O,ae+1),O=ae+1)}else ve===0?ve=ze:ve===ze&&(ve=0);else Oe=!0,ae++}if(O<J){var Ze=R.substring(O);wu(Ze)||(K+=Ze)}return K})((function(R){if(R.indexOf("//")===-1)return R;for(var J=R.length,K=[],O=0,D=0,ve=0,Oe=0;D<J;){var ae=R.charCodeAt(D);if(ae!==34&&ae!==39||D!==0&&R.charCodeAt(D-1)===92)if(ve===0)if(ae===Gr&&D+1<J&&R.charCodeAt(D+1)===Rt){for(D+=2;D+1<J&&(R.charCodeAt(D)!==Rt||R.charCodeAt(D+1)!==Gr);)D++;D+=2}else if(ae===40&&D>=3&&(32|R.charCodeAt(D-1))==108&&(32|R.charCodeAt(D-2))==114&&(32|R.charCodeAt(D-3))==117)Oe=1,D++;else if(Oe>0)ae===41?Oe--:ae===40&&Oe++,D++;else if(ae===Rt&&D+1<J&&R.charCodeAt(D+1)===Gr)D>O&&K.push(R.substring(O,D)),O=D+=2;else if(ae===Gr&&D+1<J&&R.charCodeAt(D+1)===Gr){for(D>O&&K.push(R.substring(O,D));D<J&&R.charCodeAt(D)!==10;)D++;O=D}else D++;else D++;else ve===0?ve=ae:ve===ae&&(ve=0),D++}return O===0?R:(O<J&&K.push(R.substring(O)),K.join(""))})(I)),ie=zh($||_?"".concat($," ").concat(_," { ").concat(de," }"):de);return k.namespace&&(ie=ep(ie,k.namespace)),A=[],Ts(ie,V),A};return X.hash=C.length?C.reduce(function(I,_){return _.name||ci(15),It(I,_.name)},5381).toString():"",X}var uf=new Zu,Ya=df(),rp=xr.createContext({shouldForwardProp:void 0,styleSheet:uf,stylis:Ya});rp.Consumer;xr.createContext(void 0);function ku(){return xr.useContext(rp)}var pf=(function(){function o(c,l){var p=this;this.inject=function(u,x){x===void 0&&(x=Ya);var k=p.name+x.hash;u.hasNameForId(p.id,k)||u.insertRules(p.id,k,x(p.rules,k,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,ol(this,function(){throw ci(12,String(p.name))})}return o.prototype.getName=function(c){return c===void 0&&(c=Ya),this.name+c.hash},o})();function mf(o,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||o in Mh||o.startsWith("--")?String(c).trim():"".concat(c,"px")}var hf=function(o){return o>="A"&&o<="Z"};function Nu(o){for(var c="",l=0;l<o.length;l++){var p=o[l];if(l===1&&p==="-"&&o[0]==="-")return o;hf(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var tp=function(o){return o==null||o===!1||o===""},np=function(o){var c=[];for(var l in o){var p=o[l];o.hasOwnProperty(l)&&!tp(p)&&(Array.isArray(p)&&p.isCss||mn(p)?c.push("".concat(Nu(l),":"),p,";"):oi(p)?c.push.apply(c,Cs(Cs(["".concat(l," {")],np(p),!1),["}"],!1)):c.push("".concat(Nu(l),": ").concat(mf(l,p),";")))}return c};function Mt(o,c,l,p,u){if(u===void 0&&(u=[]),typeof o=="string")return o&&u.push(o),u;if(tp(o))return u;if(sl(o))return u.push(".".concat(o.styledComponentId)),u;if(mn(o)){if(!mn(k=o)||k.prototype&&k.prototype.isReactComponent||!c)return u.push(o),u;var x=o(c);return Mt(x,c,l,p,u)}var k;if(o instanceof pf)return l?(o.inject(l,p),u.push(o.getName(p))):u.push(o),u;if(oi(o)){for(var P=np(o),C=0;C<P.length;C++)u.push(P[C]);return u}if(!Array.isArray(o))return u.push(o.toString()),u;for(C=0;C<o.length;C++)Mt(o[C],c,l,p,u);return u}function ff(o){for(var c=0;c<o.length;c+=1){var l=o[c];if(mn(l)&&!sl(l))return!1}return!0}var xf=Ku(_s),gf=(function(){function o(c,l,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&ff(c),this.componentId=l,this.baseHash=It(xf,l),this.baseStyle=p,Zu.registerId(l)}return o.prototype.generateAndInjectStyles=function(c,l,p){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,p).className:"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))u=Lt(u,this.staticRulesId);else{var x=vu(Mt(this.rules,c,l,p)),k=Ka(It(this.baseHash,x)>>>0);if(!l.hasNameForId(this.componentId,k)){var P=p(x,".".concat(k),void 0,this.componentId);l.insertRules(this.componentId,k,P)}u=Lt(u,k),this.staticRulesId=k}else{for(var C=It(this.baseHash,p.hash),z="",W=0;W<this.rules.length;W++){var A=this.rules[W];if(typeof A=="string")z+=A;else if(A){var V=vu(Mt(A,c,l,p));C=It(It(C,String(W)),V),z+=V}}if(z){var X=Ka(C>>>0);if(!l.hasNameForId(this.componentId,X)){var I=p(z,".".concat(X),void 0,this.componentId);l.insertRules(this.componentId,X,I)}u=Lt(u,X)}}return{className:u,css:typeof window=="undefined"?l.getTag().getGroup(ti(this.componentId)):""}},o})(),ip=xr.createContext(void 0);ip.Consumer;var Wa={};function vf(o,c,l){var p=sl(o),u=o,x=!Ba(o),k=c.attrs,P=k===void 0?il:k,C=c.componentId,z=C===void 0?(function(R,J){var K=typeof R!="string"?"sc":mu(R);Wa[K]=(Wa[K]||0)+1;var O="".concat(K,"-").concat(Dh(_s+K+Wa[K]));return J?"".concat(J,"-").concat(O):O})(c.displayName,c.parentComponentId):C,W=c.displayName,A=W===void 0?(function(R){return Ba(R)?"styled.".concat(R):"Styled(".concat(Uh(R),")")})(o):W,V=c.displayName&&c.componentId?"".concat(mu(c.displayName),"-").concat(c.componentId):c.componentId||z,X=p&&u.attrs?u.attrs.concat(P).filter(Boolean):P,I=c.shouldForwardProp;if(p&&u.shouldForwardProp){var _=u.shouldForwardProp;if(c.shouldForwardProp){var $=c.shouldForwardProp;I=function(R,J){return _(R,J)&&$(R,J)}}else I=_}var he=new gf(l,V,p?u.componentStyle:void 0);function de(R,J){return(function(K,O,D){var ve=K.attrs,Oe=K.componentStyle,ae=K.defaultProps,ze=K.foldedComponentIds,be=K.styledComponentId,Ke=K.target,Ze=xr.useContext(ip),Qe=ku(),ye=K.shouldForwardProp||Qe.shouldForwardProp,E=Fh(O,Ze,ae)||pn,H=(function(oe,ue,ce){for(var xe,Ce=cr(cr({},ue),{className:void 0,theme:ce}),Yr=0;Yr<oe.length;Yr+=1){var vt=mn(xe=oe[Yr])?xe(Ce):xe;for(var Sr in vt)Sr==="className"?Ce.className=Lt(Ce.className,vt[Sr]):Sr==="style"?Ce.style=cr(cr({},Ce.style),vt[Sr]):Ce[Sr]=vt[Sr]}return"className"in ue&&typeof ue.className=="string"&&(Ce.className=Lt(Ce.className,ue.className)),Ce})(ve,O,E),L=H.as||Ke,g={};for(var w in H)H[w]===void 0||w[0]==="$"||w==="as"||w==="theme"&&H.theme===E||(w==="forwardedAs"?g.as=H.forwardedAs:ye&&!ye(w,L)||(g[w]=H[w]));var ee=(function(oe,ue){var ce=ku(),xe=oe.generateAndInjectStyles(ue,ce.styleSheet,ce.stylis);return xe})(Oe,H),re=ee.className,le=Lt(ze,be);return re&&(le+=" "+re),H.className&&(le+=" "+H.className),g[Ba(L)&&!Vu.has(L)?"class":"className"]=le,D&&(g.ref=D),ne.createElement(L,g)})(ie,R,J)}de.displayName=A;var ie=xr.forwardRef(de);return ie.attrs=X,ie.componentStyle=he,ie.displayName=A,ie.shouldForwardProp=I,ie.foldedComponentIds=p?Lt(u.foldedComponentIds,u.styledComponentId):"",ie.styledComponentId=V,ie.target=p?u.target:o,Object.defineProperty(ie,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(R){this._foldedDefaultProps=p?(function(J){for(var K=[],O=1;O<arguments.length;O++)K[O-1]=arguments[O];for(var D=0,ve=K;D<ve.length;D++)Qa(J,ve[D],!0);return J})({},u.defaultProps,R):R}}),ol(ie,function(){return".".concat(ie.styledComponentId)}),x&&Xu(ie,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ie}function bu(o,c){for(var l=[o[0]],p=0,u=c.length;p<u;p+=1)l.push(c[p],o[p+1]);return l}var Su=function(o){return Object.assign(o,{isCss:!0})};function yf(o){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(mn(o)||oi(o))return Su(Mt(bu(il,Cs([o],c,!0))));var p=o;return c.length===0&&p.length===1&&typeof p[0]=="string"?Mt(p):Su(Mt(bu(p,c)))}function Xa(o,c,l){if(l===void 0&&(l=pn),!c)throw ci(1,c);var p=function(u){for(var x=[],k=1;k<arguments.length;k++)x[k-1]=arguments[k];return o(c,l,yf.apply(void 0,Cs([u],x,!1)))};return p.attrs=function(u){return Xa(o,c,cr(cr({},l),{attrs:Array.prototype.concat(l.attrs,u).filter(Boolean)}))},p.withConfig=function(u){return Xa(o,c,cr(cr({},l),u))},p}var sp=function(o){return Xa(vf,o)},_e=sp;Vu.forEach(function(o){_e[o]=sp(o)});const Da={Wrapper:_e.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:_e.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:_e.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},Cu={Wrapper:_e.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;

        border-bottom: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-bg) 88%,
            var(--color-surface)
        );

        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;

        /* subtle OS-style glow line */
        box-shadow: 0 10px 30px var(--color-shadow);

        /* adds a thin accent strip on top for "system UI" vibe */
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 85%, transparent),
                color-mix(in srgb, var(--color-accent) 55%, transparent),
                transparent
            );
            opacity: 0.9;
        }
    `,Main:_e.div`
        width: 100%;
        display: flex;
        align-items: center;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 6px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);

            /* OS-style soft ring */
            box-shadow:
                0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 10%, transparent),
                0 14px 30px var(--color-shadow);

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
                filter: saturate(1.05);
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        120px 80px at 20% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 20%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    radial-gradient(
                        120px 80px at 80% 90%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 16%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    var(--color-surface-2);
                opacity: 0.8;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            box-shadow: 0 10px 22px var(--color-shadow);

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;

                /* tiny accent tint for OS vibe */
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            .label {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: linear-gradient(
                    180deg,
                    var(--color-surface-2),
                    color-mix(in srgb, var(--color-surface-2) 70%, #000)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
                box-shadow:
                    0 0 0 4px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 10px 22px var(--color-shadow);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},jf="/operating-systems-core-notes/images/transparentLogo.png";var op={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tu=xr.createContext&&xr.createContext(op),wf=["attr","size","title"];function kf(o,c){if(o==null)return{};var l=Nf(o,c),p,u;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(o);for(u=0;u<x.length;u++)p=x[u],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(o,p)&&(l[p]=o[p])}return l}function Nf(o,c){if(o==null)return{};var l={};for(var p in o)if(Object.prototype.hasOwnProperty.call(o,p)){if(c.indexOf(p)>=0)continue;l[p]=o[p]}return l}function zs(){return zs=Object.assign?Object.assign.bind():function(o){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(o[p]=l[p])}return o},zs.apply(this,arguments)}function Pu(o,c){var l=Object.keys(o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(o);c&&(p=p.filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable})),l.push.apply(l,p)}return l}function Es(o){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Pu(Object(l),!0).forEach(function(p){bf(o,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):Pu(Object(l)).forEach(function(p){Object.defineProperty(o,p,Object.getOwnPropertyDescriptor(l,p))})}return o}function bf(o,c,l){return c=Sf(c),c in o?Object.defineProperty(o,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[c]=l,o}function Sf(o){var c=Cf(o,"string");return typeof c=="symbol"?c:c+""}function Cf(o,c){if(typeof o!="object"||!o)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var p=l.call(o,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(o)}function ap(o){return o&&o.map((c,l)=>xr.createElement(c.tag,Es({key:l},c.attr),ap(c.child)))}function Z(o){return c=>xr.createElement(Tf,zs({attr:Es({},o.attr)},c),ap(o.child))}function Tf(o){var c=l=>{var{attr:p,size:u,title:x}=o,k=kf(o,wf),P=u||l.size||"1em",C;return l.className&&(C=l.className),o.className&&(C=(C?C+" ":"")+o.className),xr.createElement("svg",zs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,k,{className:C,style:Es(Es({color:o.color||l.color},l.style),o.style),height:P,width:P,xmlns:"http://www.w3.org/2000/svg"}),x&&xr.createElement("title",null,x),o.children)};return Tu!==void 0?xr.createElement(Tu.Consumer,null,l=>c(l)):c(op)}function As(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}function Os(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function Ua(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(o)}function lp(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function zu(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(o)}function $e(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(o)}function Ve(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(o)}function Ja(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(o)}function ai(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function dr(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function Pf(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"1",y1:"10",x2:"23",y2:"10"},child:[]}]})(o)}function Eu(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(o)}function zf(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(o)}function Ef(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(o)}function Ou(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(o)}function Of(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(o)}function If(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(o)}function di(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(o)}function Rf(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(o)}function Lf(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 16 12 14 15 10 15 8 12 2 12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]}]})(o)}function Ha(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(o)}function br(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function Iu(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(o)}function Mf(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(o)}function li(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(o)}function _f(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(o)}function Af(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(o)}function al(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(o)}function cp(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(o)}function tr(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(o)}function Ff(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(o)}function Bf(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(o)}function qf(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(o)}function Wf(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(o)}function Df(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(o)}function Uf(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(o)}function Ru(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(o)}function Lu(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(o)}function Mu(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12.55a11 11 0 0 1 14.08 0"},child:[]},{tag:"path",attr:{d:"M1.42 9a16 16 0 0 1 21.16 0"},child:[]},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"},child:[]}]})(o)}function _u(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(o)}function Za(o){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}const Hf=()=>{const[o,c]=ne.useState(!1),[l,p]=ne.useState("dark");ne.useEffect(()=>{const P=localStorage.getItem("app-theme")||"dark";p(P),P==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ne.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const u=ne.useMemo(()=>l==="light"?"dark":"light",[l]),x=()=>{p(u)};return t.jsx(Cu.Wrapper,{children:t.jsx(Cu.Main,{children:t.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[t.jsxs("div",{className:"logoNameWrapper",children:[t.jsxs("div",{className:"logoWrapper",children:[!o&&t.jsx("div",{className:"logoSkeleton"}),t.jsx("img",{src:jf,alt:"operating-systems-core-notes",onLoad:()=>c(!0),style:{opacity:o?1:0}})]}),t.jsxs("div",{className:"nameWrapper",children:[t.jsx("div",{className:"title",children:"operating-systems-core-notes"}),t.jsx("div",{className:"subTitle",children:"At-a-glance operating systems revision"})]})]}),t.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:x,"aria-label":`Switch to ${u} theme`,title:`Switch to ${u}`,children:[t.jsx("span",{className:"icon",children:l==="light"?t.jsx(Af,{}):t.jsx(qf,{})}),t.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})},$f={Wrapper:_e.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},Vf=()=>t.jsxs($f.Wrapper,{children:[t.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),t.jsxs("div",{className:"right",children:["By ",t.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Kf={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 22px 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 14px;
        }

        .badgeRow {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            color: var(--color-text-primary);
            padding: 7px 10px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 800;
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                font-size: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            &.muted {
                color: var(--color-text-secondary);

                svg {
                    color: color-mix(
                        in srgb,
                        var(--color-accent) 80%,
                        var(--color-text-primary)
                    );
                }
            }
        }

        .title {
            font-size: clamp(22px, 2.4vw, 34px);
            letter-spacing: 0.2px;
            line-height: 1.15;
            color: var(--color-text-primary);
        }

        .sub {
            max-width: 860px;
            color: var(--color-text-secondary);
        }

        .hero {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            box-shadow: 0 20px 60px var(--color-shadow);
            margin-bottom: 16px;
            min-height: 180px;

            img {
                width: 100%;
                height: 260px;
                object-fit: cover;
                display: block;
                transition: opacity 220ms ease;
                opacity: 0;
            }

            .heroSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        600px 220px at 20% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 16%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    radial-gradient(
                        600px 240px at 80% 90%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 12%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    var(--color-surface-2);
                opacity: 0.95;
            }

            .heroOverlay {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                padding: 14px 14px 12px;
                background: linear-gradient(
                    180deg,
                    transparent,
                    color-mix(in srgb, var(--color-bg) 85%, transparent)
                );
                display: flex;
                flex-direction: column;
                gap: 6px;
            }

            .heroTitle {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
            }

            .heroMeta {
                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 700;
            }

            @media (width < 680px) {
                img {
                    height: 210px;
                }
            }
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 14px;

            @media (width < 980px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (width < 640px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 14px;
            box-shadow: 0 18px 44px var(--color-shadow);
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 0;
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 0;

            .icon {
                height: 36px;
                width: 36px;
                border-radius: 12px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                flex: 0 0 auto;
                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 10%,
                    var(--color-surface)
                );
                box-shadow: 0 14px 28px var(--color-shadow);

                svg {
                    color: color-mix(
                        in srgb,
                        var(--color-primary) 75%,
                        var(--color-text-primary)
                    );
                    font-size: 18px;
                }
            }

            .h3 {
                font-size: 15px;
                font-weight: 900;
                color: var(--color-text-primary);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-weight: 900;
            padding: 1px 6px;
            border-radius: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-code-bg);
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .monoBlock {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            word-break: break-word;
        }

        .example {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .exampleTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 8px;
                letter-spacing: 0.2px;
            }
        }

        .flow {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .step {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
        }

        .arrow {
            color: var(--color-text-muted);
            font-weight: 900;
            padding-left: 6px;
        }

        .callout {
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px 12px;

            svg {
                flex: 0 0 auto;
                margin-top: 2px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            span {
                color: var(--color-text-secondary);
                font-size: 12px;
                line-height: 1.55;
                font-weight: 700;
            }
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .chip {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            font-size: 12px;
            padding: 7px 10px;
            border-radius: 999px;
            font-weight: 800;

            &:hover {
                border-color: var(--color-border-light);
                color: var(--color-text-primary);
            }
        }
    `},Qf=()=>{const[o,c]=ne.useState(!1),[l,p]=ne.useState("what"),u=ne.useMemo(()=>"https://picsum.photos/id/180/1200/700",[]);return t.jsxs(Kf.Wrapper,{id:"about-operating-systems",children:[t.jsxs("div",{className:"top",children:[t.jsxs("div",{className:"badgeRow",children:[t.jsxs("span",{className:"badge",children:[t.jsx(br,{}),"Core Notes"]}),t.jsxs("span",{className:"badge muted",children:[t.jsx(As,{}),"Single page revision"]})]}),t.jsx("h1",{className:"title",children:"Operating Systems Core Notes"}),t.jsx("p",{className:"sub",children:"OS is the software layer that makes hardware usable. It decides who runs on CPU, what stays in memory, how files are stored, and how programs talk to devices."})]}),t.jsxs("div",{className:"hero",children:[!o&&t.jsx("div",{className:"heroSkeleton"}),t.jsx("img",{src:u,alt:"Operating systems",onLoad:()=>c(!0),style:{opacity:o?1:0}}),t.jsxs("div",{className:"heroOverlay",children:[t.jsx("div",{className:"heroTitle",children:"Think like the OS: CPU, memory, files, devices."}),t.jsx("div",{className:"heroMeta",children:"Beginner friendly - fast revision - interview ready"})]})]}),t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("span",{className:"icon",children:t.jsx(dr,{})}),t.jsx("h3",{className:"h3",children:"What an OS really does"})]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"CPU"})," - schedules which process gets time"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Memory"})," - allocates RAM and uses virtual memory"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Storage"})," - manages files and directories"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"I/O"})," - handles devices via drivers and interrupts"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Security"})," - isolates processes and enforces permissions"]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"One-line mental model"}),t.jsx("div",{className:"monoBlock",children:"App - system call - kernel - driver - hardware"})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("span",{className:"icon",children:t.jsx(ai,{})}),t.jsx("h3",{className:"h3",children:"A tiny example"})]}),t.jsx("p",{className:"p",children:"When you open a file in any app, the app does not talk to the disk directly. It requests the OS using system calls. The OS checks permission, finds the data in the file system, reads blocks from disk, and returns bytes to the app."}),t.jsxs("div",{className:"example",children:[t.jsx("div",{className:"exampleTitle",children:"Flow"}),t.jsxs("div",{className:"flow",children:[t.jsx("div",{className:"step",children:'App requests "open file"'}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"Kernel validates access"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"File system finds blocks"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"Disk driver reads data"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"Bytes returned to app"})]})]}),t.jsxs("div",{className:"callout",children:[t.jsx(di,{}),t.jsx("span",{children:"File I/O looks simple, but OS is doing real work behind the scenes."})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("span",{className:"icon",children:t.jsx(tr,{})}),t.jsx("h3",{className:"h3",children:"Key terms you will see everywhere"})]}),t.jsxs("div",{className:"chips",children:[t.jsx("span",{className:"chip",children:"Kernel"}),t.jsx("span",{className:"chip",children:"System call"}),t.jsx("span",{className:"chip",children:"Process"}),t.jsx("span",{className:"chip",children:"Thread"}),t.jsx("span",{className:"chip",children:"Context switch"}),t.jsx("span",{className:"chip",children:"Scheduling"}),t.jsx("span",{className:"chip",children:"Paging"}),t.jsx("span",{className:"chip",children:"Virtual memory"}),t.jsx("span",{className:"chip",children:"Mutex"}),t.jsx("span",{className:"chip",children:"Semaphore"}),t.jsx("span",{className:"chip",children:"Deadlock"}),t.jsx("span",{className:"chip",children:"File system"}),t.jsx("span",{className:"chip",children:"Interrupt"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Why these matter in interviews"}),t.jsx("p",{className:"p",children:"Most questions are just these words combined into a scenario. If the mental model is clear, answers become simple."})]})]})]})]})},Gf={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 18px 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .kicker {
            display: inline-flex;
            width: fit-content;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.6px;
            text-transform: uppercase;

            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            color: color-mix(
                in srgb,
                var(--color-primary) 78%,
                var(--color-text-primary)
            );
            box-shadow: 0 14px 32px var(--color-shadow);
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 920px;
        }

        .accordion {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .item {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .btn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;
            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 80%,
                    var(--color-surface)
                );
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .left {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .icon {
            height: 34px;
            width: 34px;
            border-radius: 12px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            flex: 0 0 auto;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );

            box-shadow: 0 14px 28px var(--color-shadow);

            svg {
                font-size: 16px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 75%,
                    var(--color-text-primary)
                );
            }
        }

        .text {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .body {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.65;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;

            color: var(--color-text-primary);
            font-weight: 900;

            padding: 1px 6px;
            border-radius: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-code-bg);
        }

        .monoBlock {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;

            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            word-break: break-word;
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .miniGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 760px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 10px;
        }

        .miniTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .callout {
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px 12px;

            svg {
                flex: 0 0 auto;
                margin-top: 2px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }

        .calloutText {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 0;
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12px;
        }

        .calloutSub {
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.55;
            font-weight: 700;
        }

        .flow {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .step {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 10px 12px;
        }

        .stepTop {
            display: flex;
            align-items: center;
            gap: 8px;

            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }

        .stepSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.55;
            font-weight: 700;
        }

        .arrow {
            color: var(--color-text-muted);
            font-weight: 900;
            padding-left: 6px;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .col {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 10px;
        }

        .colTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }
    `},Yf=()=>{const[o,c]=ne.useState("role"),l=ne.useMemo(()=>[{key:"role",title:"What is an Operating System",icon:t.jsx(br,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"An Operating System, or OS, is the main software that runs on a computer and manages the hardware for you. It sits between your programs and the physical machine, and it makes sure everything works safely and smoothly."}),t.jsxs("div",{className:"miniGrid",children:[t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"In simple words"}),t.jsx("p",{className:"p",children:"OS is like a manager. Programs ask for CPU, memory, files, and devices. The OS decides what to give, when to give, and how to keep things safe."})]}),t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"What OS manages"}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"CPU"})," time for processes"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Memory"})," for running programs"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Files"})," and folders on storage"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Devices"})," ","like disk, keyboard, network"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Security"})," ","permissions and isolation"]})]})]})]}),t.jsx("div",{className:"monoBlock",children:"Program - system call - OS kernel - driver - hardware"})]})},{key:"mediator",title:"OS role as a mediator",icon:t.jsx(tr,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Programs do not directly control hardware. If every program could touch the disk and memory freely, one buggy app could crash the whole system or steal data from other apps."}),t.jsxs("div",{className:"callout",children:[t.jsx(tr,{}),t.jsxs("div",{className:"calloutText",children:[t.jsx("div",{className:"calloutTitle",children:"Why mediator is needed"}),t.jsx("div",{className:"calloutSub",children:"OS controls access to hardware and shared resources so multiple programs can run safely at the same time."})]})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"OS gives each program a controlled environment to run"}),t.jsx("li",{children:"OS prevents one program from corrupting another program's memory"}),t.jsx("li",{children:"OS applies permissions for files and devices"}),t.jsx("li",{children:"OS shares CPU fairly using scheduling"})]})]})},{key:"example",title:"Example - Browser request flow",icon:t.jsx(Mu,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"When you type a website in a browser, the browser is just a program. It needs network, CPU, memory, and sometimes disk. The OS helps at every step."}),t.jsxs("div",{className:"flow",children:[t.jsxs("div",{className:"step",children:[t.jsxs("div",{className:"stepTop",children:[t.jsx(Wf,{}),t.jsx("span",{children:"1 - Browser creates a request"})]}),t.jsx("div",{className:"stepSub",children:"Browser asks OS for network access."})]}),t.jsx("div",{className:"arrow",children:"-"}),t.jsxs("div",{className:"step",children:[t.jsxs("div",{className:"stepTop",children:[t.jsx(Mu,{}),t.jsx("span",{children:"2 - OS uses network stack"})]}),t.jsx("div",{className:"stepSub",children:"OS talks to the network driver and sends packets."})]}),t.jsx("div",{className:"arrow",children:"-"}),t.jsxs("div",{className:"step",children:[t.jsxs("div",{className:"stepTop",children:[t.jsx(dr,{}),t.jsx("span",{children:"3 - CPU runs the browser"})]}),t.jsx("div",{className:"stepSub",children:"OS schedules CPU time so browser can run."})]}),t.jsx("div",{className:"arrow",children:"-"}),t.jsxs("div",{className:"step",children:[t.jsxs("div",{className:"stepTop",children:[t.jsx(br,{}),t.jsx("span",{children:"4 - Memory is used"})]}),t.jsx("div",{className:"stepSub",children:"OS gives memory to store page, images, and code."})]}),t.jsx("div",{className:"arrow",children:"-"}),t.jsxs("div",{className:"step",children:[t.jsxs("div",{className:"stepTop",children:[t.jsx(di,{}),t.jsx("span",{children:"5 - Disk cache and files"})]}),t.jsx("div",{className:"stepSub",children:"OS reads and writes cache, cookies, and downloads."})]}),t.jsx("div",{className:"arrow",children:"-"}),t.jsxs("div",{className:"step",children:[t.jsxs("div",{className:"stepTop",children:[t.jsx(ai,{}),t.jsx("span",{children:"6 - Output on screen"})]}),t.jsx("div",{className:"stepSub",children:"OS and drivers help display the final output."})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("p",{className:"p",children:"Browser does not control hardware. It requests services. OS coordinates hardware and returns results."})]})]})},{key:"kernel",title:"Kernel",icon:t.jsx(dr,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"The kernel is the core part of the OS. It runs with the highest privilege and directly controls hardware through drivers."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Kernel decides which process runs on the CPU"}),t.jsx("li",{children:"Kernel manages memory and virtual memory"}),t.jsx("li",{children:"Kernel controls file system operations"}),t.jsx("li",{children:"Kernel handles interrupts from devices"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Easy way to remember"}),t.jsx("div",{className:"monoBlock",children:"Kernel is the boss that touches hardware."})]})]})},{key:"syscalls",title:"System calls",icon:t.jsx(ai,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A system call is a safe way for a program to ask the OS for help. Programs cannot directly do privileged actions like reading a disk block or changing memory protection. They request the OS using system calls."}),t.jsxs("div",{className:"miniGrid",children:[t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"Common system call examples"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Open a file, read, write, close"}),t.jsx("li",{children:"Create a process, start a program"}),t.jsx("li",{children:"Allocate memory for a program"}),t.jsx("li",{children:"Send and receive data over network"})]})]}),t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"What happens inside"}),t.jsx("p",{className:"p",children:"Program enters kernel mode, OS checks permissions, OS does the work, then returns result back to the program."})]})]}),t.jsx("div",{className:"monoBlock",children:"App calls function - OS system call - kernel does work"})]})},{key:"modes",title:"User mode vs Kernel mode",icon:t.jsx(tr,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"OS uses two main modes to protect the system. Programs normally run in user mode. The kernel runs in kernel mode."}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"User mode"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Normal apps run here"}),t.jsx("li",{children:"Limited permissions"}),t.jsx("li",{children:"Cannot directly access hardware"}),t.jsx("li",{children:"Must use system calls to request OS work"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Kernel mode"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"OS kernel runs here"}),t.jsx("li",{children:"Full permissions"}),t.jsx("li",{children:"Can access hardware and CPU instructions"}),t.jsx("li",{children:"Handles system calls and interrupts"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Why modes exist"}),t.jsx("p",{className:"p",children:"If every app had full access, one mistake could crash everything. Modes protect the computer."})]})]})}],[]),p=u=>{c(x=>x===u?"":u)};return t.jsxs(Gf.Wrapper,{id:"what-is-operating-system",children:[t.jsxs("div",{className:"top",children:[t.jsx("div",{className:"kicker",children:"Foundations"}),t.jsx("h2",{className:"title",children:"What is an Operating System"}),t.jsx("p",{className:"sub",children:"A beginner friendly introduction to OS role, browser request flow, and the three most important concepts - kernel, system calls, and user mode vs kernel mode."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"item",children:[t.jsxs("button",{type:"button",className:"btn",onClick:()=>p(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"icon",children:u.icon}),t.jsx("span",{className:"text",children:u.title})]}),t.jsx("span",{className:"right",children:x?t.jsx(Ve,{}):t.jsx($e,{})})]}),x&&t.jsx("div",{className:"body",children:u.body})]},u.key)})})]})},Xf={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto 10px;
        padding: 16px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 12px;
        }

        .kicker {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-weight: 800;
            letter-spacing: 0.3px;
            font-size: 12px;
            text-transform: uppercase;

            .dot {
                height: 8px;
                width: 8px;
                border-radius: 999px;
                background: var(--color-primary);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent);
            }
        }

        .title {
            font-size: 20px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 920px;
        }

        .accordion {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .accItem {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;
            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 80%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .left {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            font-size: 13px;

            svg {
                font-size: 16px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                flex: 0 0 auto;
            }
        }

        .right {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .accBody {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
        }

        .pillRow {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 12px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 75%,
                    var(--color-text-primary)
                );
                font-size: 14px;
            }
        }

        .note {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 60%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;
            margin-bottom: 12px;

            .noteTitle {
                color: var(--color-text-primary);
                font-weight: 900;
                font-size: 12px;
                letter-spacing: 0.2px;
                margin-bottom: 6px;
            }
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.65;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            margin-bottom: 8px;
            word-break: break-word;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .goalCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 0;
        }

        .goalHead {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            min-width: 0;
        }

        .icon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            box-shadow: 0 14px 28px var(--color-shadow);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 75%,
                    var(--color-text-primary)
                );
            }
        }

        .headText {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 0;
        }

        .goalTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .goalOneLine {
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.55;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-left: 14px;

            li {
                list-style: disc;
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.6;
            }
        }

        .example {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 75%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .exampleTitle {
                color: var(--color-text-primary);
                font-weight: 900;
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .exampleGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .exCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 0;
        }

        .exHead {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .exIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-accent) 75%,
                    var(--color-text-primary)
                );
                font-size: 17px;
            }
        }

        .exTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 14px;
        }

        .mini {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 55%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                color: var(--color-text-primary);
                font-weight: 900;
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .respGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 12px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .respCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .respHead {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-primary);
            font-weight: 900;

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 75%,
                    var(--color-text-primary)
                );
                font-size: 16px;
            }
        }
    `},Jf=()=>{const[o,c]=ne.useState("goals"),l=u=>{c(x=>x===u?"":u)},p=ne.useMemo(()=>[{key:"convenience",icon:t.jsx(zu,{}),title:"Convenience",oneLine:"OS makes the computer easy to use so apps can run without managing hardware details.",points:["Apps do not manually control CPU or RAM - OS gives safe APIs","You get files, folders, windows, and settings as a usable layer","Drivers hide hardware differences so the same app can run on many machines"],exampleTitle:"Example",example:"When you click a file to open it, the app just asks the OS to open it. The OS finds the file, checks permissions, reads data from disk, and returns it to the app."},{key:"efficiency",icon:t.jsx(Za,{}),title:"Efficiency",oneLine:"OS uses hardware smartly so the system stays fast and responsive.",points:["CPU scheduling gives each process time without wasting cycles","Memory management keeps active data in RAM and uses virtual memory when needed","I/O buffering and caching reduce slow disk operations"],exampleTitle:"Example",example:"If one app is waiting for disk or network, OS can run another app on CPU instead of keeping CPU idle. This improves overall performance."},{key:"fairness",icon:t.jsx(Lu,{}),title:"Fairness",oneLine:"OS shares CPU, memory, and devices among processes so one program cannot hog everything.",points:["Time slicing gives each runnable process a fair chance","Priority rules exist, but OS still prevents starvation in well-designed schedulers","Resource limits can stop one app from consuming all RAM or CPU"],exampleTitle:"Example",example:"If a heavy app is running, OS still lets your music player and browser remain usable because CPU time is distributed across processes."},{key:"security",icon:t.jsx(tr,{}),title:"Security",oneLine:"OS protects the system from unsafe access by isolating processes and enforcing permissions.",points:["User mode vs kernel mode prevents apps from directly controlling hardware","File permissions decide who can read, write, or execute a file","Process isolation stops one app from reading another app's private memory"],exampleTitle:"Example",example:"A normal app cannot access another app's memory or your system files directly. OS blocks it unless permission is explicitly granted."}],[]);return t.jsxs(Xf.Wrapper,{id:"os-goals-and-responsibilities",children:[t.jsxs("div",{className:"top",children:[t.jsxs("div",{className:"kicker",children:[t.jsx("span",{className:"dot"}),"Operating Systems"]}),t.jsx("h2",{className:"title",children:"OS Goals and Responsibilities"}),t.jsx("p",{className:"sub",children:"An Operating System has two big jobs - make the computer usable and keep it under control. To do that, OS is designed around a few core goals. If you understand these goals, many OS topics start feeling connected and logical."})]}),t.jsxs("div",{className:"accordion",children:[t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>l("goals"),"aria-expanded":o==="goals",children:[t.jsxs("span",{className:"left",children:[t.jsx(br,{}),"Goals in one view"]}),t.jsx("span",{className:"right",children:o==="goals"?t.jsx(Ve,{}):t.jsx($e,{})})]}),o==="goals"&&t.jsxs("div",{className:"accBody",children:[t.jsxs("div",{className:"pillRow",children:[t.jsxs("span",{className:"pill",children:[t.jsx(zu,{}),"Convenience"]}),t.jsxs("span",{className:"pill",children:[t.jsx(Za,{}),"Efficiency"]}),t.jsxs("span",{className:"pill",children:[t.jsx(Lu,{}),"Fairness"]}),t.jsxs("span",{className:"pill",children:[t.jsx(tr,{}),"Security"]})]}),t.jsxs("div",{className:"note",children:[t.jsx("div",{className:"noteTitle",children:"Beginner mental model"}),t.jsx("div",{className:"mono",children:"OS is a referee between programs and hardware."}),t.jsx("p",{className:"p",children:"Programs want resources. Hardware is limited. OS decides who gets what, when, and how safely."})]}),t.jsx("div",{className:"cards",children:p.map(u=>t.jsxs("div",{className:"goalCard",children:[t.jsxs("div",{className:"goalHead",children:[t.jsx("span",{className:"icon",children:u.icon}),t.jsxs("div",{className:"headText",children:[t.jsx("div",{className:"goalTitle",children:u.title}),t.jsx("div",{className:"goalOneLine",children:u.oneLine})]})]}),t.jsx("ul",{className:"list",children:u.points.map((x,k)=>t.jsx("li",{children:x},`${u.key}-${k}`))}),t.jsxs("div",{className:"example",children:[t.jsx("div",{className:"exampleTitle",children:u.exampleTitle}),t.jsx("p",{className:"p",children:u.example})]})]},u.key))})]})]}),t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>l("examples"),"aria-expanded":o==="examples",children:[t.jsxs("span",{className:"left",children:[t.jsx(dr,{}),"Real examples you see daily"]}),t.jsx("span",{className:"right",children:o==="examples"?t.jsx(Ve,{}):t.jsx($e,{})})]}),o==="examples"&&t.jsxs("div",{className:"accBody",children:[t.jsxs("div",{className:"exampleGrid",children:[t.jsxs("div",{className:"exCard",children:[t.jsxs("div",{className:"exHead",children:[t.jsx("span",{className:"exIcon",children:t.jsx(dr,{})}),t.jsx("div",{className:"exTitle",children:"Multitasking"})]}),t.jsx("p",{className:"p",children:"Your system runs many processes at the same time. OS switches the CPU between tasks very fast. It feels like everything is running together, but CPU time is shared in small slices."}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"Why it matters"}),t.jsx("div",{className:"mono",children:"Keeps UI responsive while heavy work continues."})]})]}),t.jsxs("div",{className:"exCard",children:[t.jsxs("div",{className:"exHead",children:[t.jsx("span",{className:"exIcon",children:t.jsx(li,{})}),t.jsx("div",{className:"exTitle",children:"File permissions"})]}),t.jsx("p",{className:"p",children:"OS controls who can read, write, or execute a file. This prevents random apps or users from changing important system files and protects personal data."}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"Simple idea"}),t.jsx("div",{className:"mono",children:"Access allowed only with permission."})]})]}),t.jsxs("div",{className:"exCard",children:[t.jsxs("div",{className:"exHead",children:[t.jsx("span",{className:"exIcon",children:t.jsx(tr,{})}),t.jsx("div",{className:"exTitle",children:"Process isolation"})]}),t.jsx("p",{className:"p",children:"Each process gets its own memory space. One app cannot read or modify another app's memory directly. If one app crashes, the OS prevents it from taking everything down."}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"Outcome"}),t.jsx("div",{className:"mono",children:"Better stability and security."})]})]})]}),t.jsxs("div",{className:"note",children:[t.jsx("div",{className:"noteTitle",children:"Common confusion"}),t.jsx("p",{className:"p",children:"People think OS is only a user interface. Real OS work happens in the kernel - managing CPU time, memory, files, and device access."})]})]})]}),t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>l("responsibilities"),"aria-expanded":o==="responsibilities",children:[t.jsxs("span",{className:"left",children:[t.jsx(tr,{}),"Responsibilities OS must handle"]}),t.jsx("span",{className:"right",children:o==="responsibilities"?t.jsx(Ve,{}):t.jsx($e,{})})]}),o==="responsibilities"&&t.jsxs("div",{className:"accBody",children:[t.jsx("p",{className:"p",children:"These are the core responsibilities that show up again and again across all OS topics. Think of them as the OS checklist."}),t.jsxs("div",{className:"respGrid",children:[t.jsxs("div",{className:"respCard",children:[t.jsxs("div",{className:"respHead",children:[t.jsx(dr,{}),t.jsx("div",{children:"Process management"})]}),t.jsx("p",{className:"p",children:"Create, schedule, pause, resume, and stop processes. Also handles threads and context switching."})]}),t.jsxs("div",{className:"respCard",children:[t.jsxs("div",{className:"respHead",children:[t.jsx(br,{}),t.jsx("div",{children:"Memory management"})]}),t.jsx("p",{className:"p",children:"Allocate RAM, free memory, and provide virtual memory so programs can run safely without overwriting each other."})]}),t.jsxs("div",{className:"respCard",children:[t.jsxs("div",{className:"respHead",children:[t.jsx(li,{}),t.jsx("div",{children:"File and storage management"})]}),t.jsx("p",{className:"p",children:"Organize files and directories, manage permissions, and maintain metadata so storage remains consistent."})]}),t.jsxs("div",{className:"respCard",children:[t.jsxs("div",{className:"respHead",children:[t.jsx(tr,{}),t.jsx("div",{children:"Protection and security"})]}),t.jsx("p",{className:"p",children:"Enforce user access rules, isolate processes, and separate kernel privileges from user programs."})]})]}),t.jsxs("div",{className:"note",children:[t.jsx("div",{className:"noteTitle",children:"Quick summary"}),t.jsx("div",{className:"mono",children:"OS manages CPU, memory, files, and devices - safely and fairly."})]})]})]})]})]})},Zf={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
            font-size: 13px;
            line-height: 1.6;
        }

        .accordion {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .accItem {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;

            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 85%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .accLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .accIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );

            svg {
                font-size: 17px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );
            }
        }

        .accTitle {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accRight {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .accBody {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 2px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .col {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
        }

        .colTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            margin-bottom: 10px;
            letter-spacing: 0.2px;
        }

        .monoBlock {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            word-break: break-word;
            white-space: pre-line;
        }

        .stack {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .stackCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .stackTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .exampleRow {
            display: flex;
            gap: 10px;
            align-items: baseline;
            flex-wrap: wrap;
            margin-top: 2px;
        }

        .tag {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            color: var(--color-text-primary);
            font-size: 12px;
            font-weight: 900;
            padding: 6px 10px;
            border-radius: 999px;
        }

        .exampleText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
            font-weight: 700;
        }

        .tasks {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            margin-top: 4px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .task {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .taskHead {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .taskIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                var(--color-surface)
            );

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-accent) 75%,
                    var(--color-text-primary)
                );
                font-size: 17px;
            }
        }

        .taskTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }
    `},ex=()=>{const[o,c]=ne.useState("overview"),l=ne.useMemo(()=>[{key:"overview",title:"Kernel basics - what it is",icon:t.jsx(lp,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"The kernel is the core part of an operating system. It runs with highest privilege and controls access to hardware. Apps do not directly touch CPU, memory, disks, or devices. Instead, apps request services from the kernel using system calls."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("div",{className:"monoBlock",children:"App - system call - kernel - driver - hardware"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"User space"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Browsers, editors, games"}),t.jsx("li",{children:"Runs with limited privileges"}),t.jsx("li",{children:"Must ask kernel for files, network, memory pages, device access"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Kernel space"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Scheduler, memory manager, drivers"}),t.jsx("li",{children:"Runs with highest privileges"}),t.jsx("li",{children:"Must protect system from crashes and misuse"})]})]})]})]})},{key:"architectures",title:"Monolithic vs Microkernel vs Hybrid",icon:t.jsx(br,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Kernel architecture is about where OS services run. Some designs keep most services inside the kernel. Some move many services to user space to improve isolation."}),t.jsxs("div",{className:"stack",children:[t.jsxs("div",{className:"stackCard",children:[t.jsx("div",{className:"stackTitle",children:"Monolithic kernel"}),t.jsx("p",{className:"p",children:"Most OS services run inside the kernel, including file system, drivers, networking, memory management."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - very fast because calls stay inside kernel space"}),t.jsx("li",{children:"Cons - a buggy driver can crash the whole system"})]}),t.jsxs("div",{className:"exampleRow",children:[t.jsx("span",{className:"tag",children:"Example"}),t.jsx("span",{className:"exampleText",children:"Linux is commonly described as monolithic with loadable modules"})]})]}),t.jsxs("div",{className:"stackCard",children:[t.jsx("div",{className:"stackTitle",children:"Microkernel"}),t.jsx("p",{className:"p",children:"Only minimal core runs in kernel - scheduling basics, IPC, and low-level memory handling. Other services like drivers and file system run in user space as separate processes."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - better isolation, one service crash does not necessarily crash the whole OS"}),t.jsx("li",{children:"Cons - more overhead due to message passing between processes"})]}),t.jsxs("div",{className:"exampleRow",children:[t.jsx("span",{className:"tag",children:"Example"}),t.jsx("span",{className:"exampleText",children:"MINIX is a classic teaching example"})]})]}),t.jsxs("div",{className:"stackCard",children:[t.jsx("div",{className:"stackTitle",children:"Hybrid kernel"}),t.jsx("p",{className:"p",children:"Mix of both approaches. Some services run in kernel for speed, but design tries to keep structure modular like microkernels."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - balances speed and modularity"}),t.jsx("li",{children:"Cons - still large kernel surface area"})]}),t.jsxs("div",{className:"exampleRow",children:[t.jsx("span",{className:"tag",children:"Example"}),t.jsx("span",{className:"exampleText",children:"Windows NT is often described as hybrid"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple way to remember"}),t.jsxs("div",{className:"monoBlock",children:["Monolithic - everything in kernel for speed",`
`,"Microkernel - minimal kernel, services in user space",`
`,"Hybrid - mix, aims for balance"]})]})]})},{key:"does",title:"What the kernel does in daily life",icon:t.jsx(Ff,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"The kernel is not one feature. It is a collection of critical managers. These managers decide how the computer behaves when many programs compete for limited resources."}),t.jsxs("div",{className:"tasks",children:[t.jsxs("div",{className:"task",children:[t.jsxs("div",{className:"taskHead",children:[t.jsx("span",{className:"taskIcon",children:t.jsx(dr,{})}),t.jsx("div",{className:"taskTitle",children:"Process scheduling"})]}),t.jsx("p",{className:"p",children:"CPU time is limited. The kernel scheduler decides which process or thread runs next. It tries to be fair and responsive, so your system feels smooth."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"You are downloading a file and watching a video at the same time. Scheduler gives both tasks CPU time so neither completely freezes."})]})]}),t.jsxs("div",{className:"task",children:[t.jsxs("div",{className:"taskHead",children:[t.jsx("span",{className:"taskIcon",children:t.jsx(br,{})}),t.jsx("div",{className:"taskTitle",children:"Memory management"})]}),t.jsx("p",{className:"p",children:"The kernel decides how RAM is used. It gives memory to processes, frees it when done, and uses virtual memory so apps can run even if RAM is limited."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"You open many browser tabs and still the system works. Some memory pages are moved to disk temporarily, and brought back when needed."})]})]}),t.jsxs("div",{className:"task",children:[t.jsxs("div",{className:"taskHead",children:[t.jsx("span",{className:"taskIcon",children:t.jsx(di,{})}),t.jsx("div",{className:"taskTitle",children:"Device drivers"})]}),t.jsx("p",{className:"p",children:"Drivers are translators between the OS and hardware. The kernel uses drivers to talk to keyboard, mouse, disk, GPU, printer, and network cards."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"When you plug a USB device, the driver helps the kernel recognize it and lets apps use it safely."})]})]}),t.jsxs("div",{className:"task",children:[t.jsxs("div",{className:"taskHead",children:[t.jsx("span",{className:"taskIcon",children:t.jsx(tr,{})}),t.jsx("div",{className:"taskTitle",children:"File system control"})]}),t.jsx("p",{className:"p",children:"The kernel provides file operations like open, read, write, and delete. It enforces permissions and keeps the file system consistent even if power fails."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"When an app saves a file, the kernel writes data to disk and updates metadata like file size and last modified time."})]})]})]})]})},{key:"why",title:"Why kernel concepts matter",icon:t.jsx(tr,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"If you understand the kernel, you understand why OS topics connect. Scheduling, memory, files, and synchronization are not separate. They are all parts of one system working together."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Interview hint"}),t.jsx("p",{className:"p",children:"Most questions are a story. Identify the shared resource first - CPU, memory, disk, or device. Then explain what the kernel would do to manage it."})]})]})}],[]),p=u=>{c(x=>x===u?"":u)};return t.jsxs(Zf.Wrapper,{id:"kernel-basics",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"Kernel Basics"}),t.jsx("p",{className:"sub",children:"The kernel is the core controller of the OS. It manages CPU, memory, devices, and files while keeping the system stable and secure."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>p(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(Ve,{}):t.jsx($e,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},rx={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
            font-size: 13px;
            line-height: 1.6;
        }

        .accordion {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .accItem {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;

            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 85%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .accLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .accIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );

            svg {
                font-size: 17px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );
            }
        }

        .accTitle {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accRight {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .accBody {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-weight: 900;
            padding: 1px 6px;
            border-radius: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-code-bg);
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .monoBlock {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            word-break: break-word;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (width < 640px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .cardIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                var(--color-surface)
            );

            svg {
                font-size: 17px;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 75%,
                    var(--color-text-primary)
                );
            }
        }

        .cardTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .example {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .exampleTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 8px;
                letter-spacing: 0.2px;
            }
        }

        .flow {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .step {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
        }

        .arrow {
            color: var(--color-text-muted);
            font-weight: 900;
            padding-left: 6px;
        }

        .callout {
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px 12px;

            svg {
                flex: 0 0 auto;
                margin-top: 2px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            span {
                color: var(--color-text-secondary);
                font-size: 12px;
                line-height: 1.55;
                font-weight: 700;
            }
        }
    `};function tx(o){return Z({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M641.5 256c0 3.1-1.7 6.1-4.5 7.5L547.9 317c-1.4.8-2.8 1.4-4.5 1.4-1.4 0-3.1-.3-4.5-1.1-2.8-1.7-4.5-4.5-4.5-7.8v-35.6H295.7c25.3 39.6 40.5 106.9 69.6 106.9H392V354c0-5 3.9-8.9 8.9-8.9H490c5 0 8.9 3.9 8.9 8.9v89.1c0 5-3.9 8.9-8.9 8.9h-89.1c-5 0-8.9-3.9-8.9-8.9v-26.7h-26.7c-75.4 0-81.1-142.5-124.7-142.5H140.3c-8.1 30.6-35.9 53.5-69 53.5C32 327.3 0 295.3 0 256s32-71.3 71.3-71.3c33.1 0 61 22.8 69 53.5 39.1 0 43.9 9.5 74.6-60.4C255 88.7 273 95.7 323.8 95.7c7.5-20.9 27-35.6 50.4-35.6 29.5 0 53.5 23.9 53.5 53.5s-23.9 53.5-53.5 53.5c-23.4 0-42.9-14.8-50.4-35.6H294c-29.1 0-44.3 67.4-69.6 106.9h310.1v-35.6c0-3.3 1.7-6.1 4.5-7.8 2.8-1.7 6.4-1.4 8.9.3l89.1 53.5c2.8 1.1 4.5 4.1 4.5 7.2z"},child:[]}]})(o)}const nx=()=>{const[o,c]=ne.useState("overview"),l=ne.useMemo(()=>[{key:"overview",title:"What are system calls",icon:t.jsx(ai,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A system call is a controlled way for an app to ask the operating system for a service. Apps usually run in user mode, which cannot directly access hardware or kernel data. System calls switch into the kernel so the OS can do the work safely."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("div",{className:"monoBlock",children:"User program - system call - kernel does work - result returned"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Why they exist"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Hardware access must be protected, not every app can touch the disk or memory"}),t.jsx("li",{children:"OS must enforce permissions and isolation between processes"}),t.jsx("li",{children:"OS provides a consistent API across different hardware"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"What you notice as a user"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Opening files works the same for all apps"}),t.jsx("li",{children:"Many apps can run without crashing each other"}),t.jsx("li",{children:"Devices work through drivers without apps knowing the details"})]})]})]})]})},{key:"categories",title:"Main categories of system calls",icon:t.jsx(dr,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"System calls are usually grouped by what they control. You do not need to memorize every system call. Learn the categories and what they do."}),t.jsxs("div",{className:"cards",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("span",{className:"cardIcon",children:t.jsx(dr,{})}),t.jsx("div",{className:"cardTitle",children:"Process control"})]}),t.jsx("p",{className:"p",children:"Create processes, run programs, and manage process lifecycle."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"fork"})," - creates a new process by duplicating the current one"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"exec"})," - replaces the current process with a new program"]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple example"}),t.jsx("p",{className:"p",children:"A shell can start a new program by forking and then executing the new program in the child process."})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("span",{className:"cardIcon",children:t.jsx(di,{})}),t.jsx("div",{className:"cardTitle",children:"File I/O"})]}),t.jsx("p",{className:"p",children:"Open files, read data, write data, and close files."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"open"})," - request access to a file"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"read"})," - read bytes from an open file"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"write"})," - write bytes to an open file"]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple example"}),t.jsx("p",{className:"p",children:"A text editor uses open, read, and write to load and save files."})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("span",{className:"cardIcon",children:t.jsx(tx,{})}),t.jsx("div",{className:"cardTitle",children:"Device management"})]}),t.jsx("p",{className:"p",children:"Access hardware devices through drivers, and request device operations."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Apps ask the OS, not the device directly"}),t.jsx("li",{children:"OS routes request to correct driver"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple example"}),t.jsx("p",{className:"p",children:"Printing a document triggers OS-managed print queue and printer driver work."})]})]})]})]})},{key:"openExample",title:'Example - open("file") triggers kernel work',icon:t.jsx(tr,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:'When an app calls open on a file, it is not just "opening a file". The kernel does multiple checks and operations to make sure it is safe and correct.'}),t.jsxs("div",{className:"example",children:[t.jsx("div",{className:"exampleTitle",children:"What the kernel typically does"}),t.jsxs("div",{className:"flow",children:[t.jsx("div",{className:"step",children:"1. Validate the path and input arguments"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"2. Check permissions for the user and process"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"3. Find the file in the file system directory structure"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"4. Create an entry inside the process file table"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"5. Return a file descriptor to the app"})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Key term"}),t.jsx("p",{className:"p",children:"A file descriptor is a small number returned by the OS that represents an open file. The app uses this number later for read and write."})]}),t.jsxs("div",{className:"callout",children:[t.jsx(tr,{}),t.jsx("span",{children:"System calls keep the system safe by controlling access to shared resources."})]})]})}],[]),p=u=>{c(x=>x===u?"":u)};return t.jsxs(rx.Wrapper,{id:"system-calls",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"System Calls"}),t.jsx("p",{className:"sub",children:"System calls are the OS service API. They let apps request safe access to CPU, memory, files, and devices through the kernel."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>p(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(Ve,{}):t.jsx($e,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},ix={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 920px;
            font-size: 13px;
            line-height: 1.6;
        }

        .accordion {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .accItem {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;

            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 85%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .accLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .accIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );

            svg {
                font-size: 17px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );
            }
        }

        .accTitle {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accRight {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .accBody {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 2px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .col {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
        }

        .colTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            margin-bottom: 10px;
            letter-spacing: 0.2px;
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .monoBlock {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            word-break: break-word;
            white-space: pre-line;
        }

        .exampleGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .exampleCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .exampleTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .callout {
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px 12px;

            svg {
                flex: 0 0 auto;
                margin-top: 2px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            span {
                color: var(--color-text-secondary);
                font-size: 12px;
                line-height: 1.55;
                font-weight: 700;
            }
        }

        .stateFlow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .stateRow {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
        }

        .state {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            padding: 7px 10px;
            border-radius: 999px;
        }

        .arrow {
            color: var(--color-text-muted);
            font-weight: 900;
        }

        .stateCards {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            margin-top: 6px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .sCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .sTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }
    `},sx=()=>{const[o,c]=ne.useState("overview"),l=ne.useMemo(()=>[{key:"overview",title:"Process vs Thread - the clean definition",icon:t.jsx(br,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A process is a running program. It has its own memory space and resources. A thread is the unit of execution inside a process. A process can have one thread or many threads."}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Process"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Program in execution with its own address space"}),t.jsx("li",{children:"Has its own memory - code, heap, stack, data"}),t.jsx("li",{children:"More isolation - one process crash does not always crash others"}),t.jsx("li",{children:"Heavier to create compared to a thread"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Thread"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Execution unit inside a process"}),t.jsx("li",{children:"Shares memory with other threads in the same process"}),t.jsx("li",{children:"Has its own stack and registers"}),t.jsx("li",{children:"Lighter and faster than creating a new process"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsxs("div",{className:"monoBlock",children:["Process - own address space, stronger isolation",`
`,"Thread - shared address space, faster communication"]})]})]})},{key:"examples",title:"Real-world examples you can remember",icon:t.jsx(As,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Examples make this topic easy. A process is like a separate room. Threads are like workers inside the same room sharing the same table and tools."}),t.jsxs("div",{className:"exampleGrid",children:[t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"Chrome tabs - processes"}),t.jsx("p",{className:"p",children:"Each tab is usually a separate process. If one tab crashes, other tabs keep working. This is process isolation in action."}),t.jsx("div",{className:"monoBlock",children:"Tab A process crashes - Tab B stays alive"})]}),t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"One tab - multiple threads"}),t.jsx("p",{className:"p",children:"Inside one tab, different work can run in separate threads. Rendering can be one thread, networking can be another."}),t.jsxs("div",{className:"monoBlock",children:["Same tab process",`
`,"Thread 1 - UI render",`
`,"Thread 2 - network fetch"]})]})]}),t.jsxs("div",{className:"callout",children:[t.jsx(dr,{}),t.jsx("span",{children:"OS schedules threads on CPU. In many systems, the scheduler works at the thread level."})]})]})},{key:"pcb",title:"PCB and context switch - what happens under the hood",icon:t.jsx(lp,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"OS cannot run all processes at the same time on one CPU core. So it quickly switches between them. To do that safely, OS stores the current state of the running process."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"PCB - Process Control Block"}),t.jsx("p",{className:"p",children:"PCB is a data structure maintained by the OS. It stores everything OS needs to manage a process."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Process id and state"}),t.jsx("li",{children:"Program counter and CPU registers"}),t.jsx("li",{children:"Scheduling info like priority"}),t.jsx("li",{children:"Memory management info"}),t.jsx("li",{children:"Open files and resources"})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Context switch"}),t.jsx("p",{className:"p",children:"Context switch means OS stops one running process or thread, saves its state, and loads another state so the CPU can continue execution."}),t.jsxs("div",{className:"monoBlock",children:["Save state of A into PCB",`
`,"Load state of B from PCB",`
`,"CPU resumes B"]}),t.jsx("p",{className:"p",children:"Context switching has a cost. If OS switches too often, CPU spends time switching instead of doing useful work."})]})]})},{key:"states",title:"Process states - New, Ready, Running, Waiting, Terminated",icon:t.jsx(Of,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A process moves through different states based on CPU availability and I/O events. Understanding the states helps you answer many scheduling questions."}),t.jsxs("div",{className:"stateFlow",children:[t.jsxs("div",{className:"stateRow",children:[t.jsx("span",{className:"state",children:"New"}),t.jsx("span",{className:"arrow",children:"-"}),t.jsx("span",{className:"state",children:"Ready"}),t.jsx("span",{className:"arrow",children:"-"}),t.jsx("span",{className:"state",children:"Running"}),t.jsx("span",{className:"arrow",children:"-"}),t.jsx("span",{className:"state",children:"Terminated"})]}),t.jsxs("div",{className:"stateRow",children:[t.jsx("span",{className:"state",children:"Running"}),t.jsx("span",{className:"arrow",children:"-"}),t.jsx("span",{className:"state",children:"Waiting"}),t.jsx("span",{className:"arrow",children:"-"}),t.jsx("span",{className:"state",children:"Ready"})]})]}),t.jsxs("div",{className:"stateCards",children:[t.jsxs("div",{className:"sCard",children:[t.jsx("div",{className:"sTitle",children:"New"}),t.jsx("p",{className:"p",children:"Process is being created. OS sets up PCB, allocates initial resources."})]}),t.jsxs("div",{className:"sCard",children:[t.jsx("div",{className:"sTitle",children:"Ready"}),t.jsx("p",{className:"p",children:"Process is ready to run but waiting for CPU. It is in the ready queue."})]}),t.jsxs("div",{className:"sCard",children:[t.jsx("div",{className:"sTitle",children:"Running"}),t.jsx("p",{className:"p",children:"Process is currently executing on the CPU."})]}),t.jsxs("div",{className:"sCard",children:[t.jsx("div",{className:"sTitle",children:"Waiting"}),t.jsx("p",{className:"p",children:"Process is waiting for an event like I/O, disk read, network, or user input."})]}),t.jsxs("div",{className:"sCard",children:[t.jsx("div",{className:"sTitle",children:"Terminated"}),t.jsx("p",{className:"p",children:"Process has finished execution or was stopped. OS releases resources."})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Quick example"}),t.jsx("p",{className:"p",children:"You open a program - it becomes Ready. When CPU gives time - it becomes Running. If it reads a file - it goes Waiting. After I/O is done - it returns to Ready."})]})]})},{key:"quick",title:"Fast recap - one screen summary",icon:t.jsx(Ja,{}),body:t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"monoBlock",children:["Process - running program with own address space",`
`,"Thread - execution unit inside process, shares memory",`
`,"PCB - OS data that stores process info",`
`,"Context switch - save A state, load B state",`
`,"States - New, Ready, Running, Waiting, Terminated"]}),t.jsxs("div",{className:"callout",children:[t.jsx(br,{}),t.jsx("span",{children:"Most interview questions connect these five lines."})]})]})}],[]),p=u=>{c(x=>x===u?"":u)};return t.jsxs(ix.Wrapper,{id:"process-and-thread",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"Process and Thread"}),t.jsx("p",{className:"sub",children:"Process is a running program with its own address space. Thread is an execution unit inside a process and usually shares memory with other threads in the same process."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>p(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(Ve,{}):t.jsx($e,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},ox={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
            font-size: 13px;
            line-height: 1.6;
        }

        .accordion {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .accItem {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;
            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 85%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .accLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .accIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );

            svg {
                font-size: 17px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );
            }
        }

        .accTitle {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accRight {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .accBody {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .monoBlock {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            word-break: break-word;
            white-space: pre-line;
        }

        .monoLine {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            color: var(--color-text-secondary);
            border-radius: 999px;
            padding: 7px 10px;
            font-size: 12px;
            line-height: 1.5;
            width: fit-content;
        }

        .metricsGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 760px) {
                grid-template-columns: 1fr;
            }
        }

        .metricCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .metricHead {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 75%,
                    var(--color-text-primary)
                );
                font-size: 16px;
            }
        }

        .algoStack {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .algoCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .algoTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            letter-spacing: 0.2px;
        }

        .tableBlock {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .tableTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            letter-spacing: 0.2px;
            font-size: 12px;
        }

        .twoTables {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            overflow: hidden;
            border-radius: 12px;
        }

        .table thead th {
            text-align: left;
            font-size: 12px;
            color: var(--color-text-primary);
            padding: 10px 10px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-surface)
            );
        }

        .table tbody td {
            font-size: 13px;
            color: var(--color-text-secondary);
            padding: 10px 10px;
            border-bottom: 1px solid var(--color-border);
        }

        .table tbody tr:last-child td {
            border-bottom: 0;
        }

        .monoTd {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary) !important;
            font-weight: 900;
        }

        .avgRow td {
            font-weight: 900;
            color: var(--color-text-primary);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
        }

        .callout {
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px 12px;

            svg {
                flex: 0 0 auto;
                margin-top: 2px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            span {
                color: var(--color-text-secondary);
                font-size: 12px;
                line-height: 1.55;
                font-weight: 800;
            }
        }
    `},ax=()=>{const[o,c]=ne.useState("why"),l=ne.useMemo(()=>[{id:"P1",burst:6},{id:"P2",burst:2},{id:"P3",burst:8},{id:"P4",burst:3}],[]),p=z=>{let W=0;return z.map(A=>{const V=W;W+=A.burst;const X=W;return{id:A.id,burst:A.burst,waiting:V,turnaround:X}})},u=z=>{const W=[...z].sort((V,X)=>V.burst-X.burst);let A=0;return W.map(V=>{const X=A;A+=V.burst;const I=A;return{id:V.id,burst:V.burst,waiting:X,turnaround:I}})},x=(z,W)=>{if(!z.length)return 0;const A=z.reduce((V,X)=>V+(X[W]||0),0);return Number((A/z.length).toFixed(2))},k=ne.useMemo(()=>p(l),[l]),P=ne.useMemo(()=>u(l),[l]),C=z=>{c(W=>W===z?"":z)};return t.jsxs(ox.Wrapper,{id:"cpu-scheduling",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"CPU Scheduling"}),t.jsx("p",{className:"sub",children:"CPU is limited. Many processes compete. Scheduling is the OS decision logic that picks which process runs next so the system stays responsive and fair."})]}),t.jsxs("div",{className:"accordion",children:[t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>C("why"),"aria-expanded":o==="why",children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:t.jsx(dr,{})}),t.jsx("span",{className:"accTitle",children:"Why scheduling exists"})]}),t.jsx("span",{className:"accRight",children:o==="why"?t.jsx(Ve,{}):t.jsx($e,{})})]}),o==="why"&&t.jsxs("div",{className:"accBody",children:[t.jsx("p",{className:"p",children:"At any moment, CPU can run only one thread per core. But your system has many tasks: browser, music, downloads, updates, background services. The scheduler decides who gets CPU time now, who waits, and how long each one runs before switching."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Scheduling improves responsiveness for interactive apps"}),t.jsx("li",{children:"Scheduling prevents one long task from blocking everything"}),t.jsx("li",{children:"Scheduling balances fairness and throughput"})]})]}),t.jsx("div",{className:"monoBlock",children:"Goal - keep system fast for the user, while also finishing work efficiently."})]})]}),t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>C("metrics"),"aria-expanded":o==="metrics",children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:t.jsx(Ru,{})}),t.jsx("span",{className:"accTitle",children:"Metrics used to compare algorithms"})]}),t.jsx("span",{className:"accRight",children:o==="metrics"?t.jsx(Ve,{}):t.jsx($e,{})})]}),o==="metrics"&&t.jsxs("div",{className:"accBody",children:[t.jsxs("div",{className:"metricsGrid",children:[t.jsxs("div",{className:"metricCard",children:[t.jsxs("div",{className:"metricHead",children:[t.jsx(Ja,{}),t.jsx("span",{children:"Waiting time"})]}),t.jsx("p",{className:"p",children:"How long a process waits in the ready queue before it gets CPU."}),t.jsx("div",{className:"monoLine",children:"waiting = startTime - arrivalTime"})]}),t.jsxs("div",{className:"metricCard",children:[t.jsxs("div",{className:"metricHead",children:[t.jsx(Ja,{}),t.jsx("span",{children:"Turnaround time"})]}),t.jsx("p",{className:"p",children:"Total time from arrival to completion. Includes waiting and running."}),t.jsx("div",{className:"monoLine",children:"turnaround = finishTime - arrivalTime"})]}),t.jsxs("div",{className:"metricCard",children:[t.jsxs("div",{className:"metricHead",children:[t.jsx(al,{}),t.jsx("span",{children:"Response time"})]}),t.jsx("p",{className:"p",children:"Time until the first CPU response. Important for interactive systems."}),t.jsx("div",{className:"monoLine",children:"response = firstRunTime - arrivalTime"})]}),t.jsxs("div",{className:"metricCard",children:[t.jsxs("div",{className:"metricHead",children:[t.jsx(Ru,{}),t.jsx("span",{children:"Throughput"})]}),t.jsx("p",{className:"p",children:"How many processes complete per unit time. Higher is usually better."}),t.jsx("div",{className:"monoLine",children:"throughput = completed / time"})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Beginner mental shortcut"}),t.jsx("p",{className:"p",children:"If the system feels laggy, focus on response time and waiting time. If batch jobs are slow, focus on throughput and turnaround time."})]})]})]}),t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>C("algos"),"aria-expanded":o==="algos",children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:t.jsx(Mf,{})}),t.jsx("span",{className:"accTitle",children:"Core algorithms"})]}),t.jsx("span",{className:"accRight",children:o==="algos"?t.jsx(Ve,{}):t.jsx($e,{})})]}),o==="algos"&&t.jsxs("div",{className:"accBody",children:[t.jsxs("div",{className:"algoStack",children:[t.jsxs("div",{className:"algoCard",children:[t.jsx("div",{className:"algoTitle",children:"FCFS - First Come First Serve"}),t.jsx("p",{className:"p",children:"Processes run in the order they arrive. Simple queue behavior."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - very simple"}),t.jsx("li",{children:"Cons - can cause convoy effect where a long job makes everyone wait"})]})]}),t.jsxs("div",{className:"algoCard",children:[t.jsx("div",{className:"algoTitle",children:"SJF - Shortest Job First"}),t.jsx("p",{className:"p",children:"Runs the shortest CPU burst first. This reduces average waiting time."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - great average waiting time"}),t.jsx("li",{children:"Cons - long jobs may starve if short jobs keep coming"})]})]}),t.jsxs("div",{className:"algoCard",children:[t.jsx("div",{className:"algoTitle",children:"Round Robin - time slicing"}),t.jsx("p",{className:"p",children:"Each process gets a fixed time quantum. If it does not finish, it goes back to the end of the queue."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - very good for interactive systems"}),t.jsx("li",{children:"Cons - too small quantum causes too many context switches"})]}),t.jsx("div",{className:"monoLine",children:"Typical idea - 10ms to 50ms time slice"})]}),t.jsxs("div",{className:"algoCard",children:[t.jsx("div",{className:"algoTitle",children:"Priority scheduling"}),t.jsx("p",{className:"p",children:"Higher priority runs first. Priority can be fixed or dynamic."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - supports important tasks"}),t.jsx("li",{children:"Cons - starvation possible for low priority jobs"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Starvation fix"}),t.jsx("p",{className:"p",children:"Aging - gradually increase the priority of waiting processes."})]})]}),t.jsxs("div",{className:"algoCard",children:[t.jsx("div",{className:"algoTitle",children:"Multilevel queue"}),t.jsx("p",{className:"p",children:"Ready queue is split into multiple queues, based on type of work, like system, interactive, batch. Each queue can have its own algorithm."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Example - interactive queue uses Round Robin, batch queue uses FCFS"}),t.jsx("li",{children:"Tradeoff - strict separation can be unfair if one queue always dominates"})]}),t.jsxs("div",{className:"monoBlock",children:["Queue 1 - system - priority high",`
`,"Queue 2 - interactive - Round Robin",`
`,"Queue 3 - batch - FCFS"]})]})]}),t.jsxs("div",{className:"callout",children:[t.jsx(Bf,{}),t.jsx("span",{children:"In real systems, scheduling is usually a mix, not a single pure algorithm."})]})]})]}),t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>C("table"),"aria-expanded":o==="table",children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:t.jsx(br,{})}),t.jsx("span",{className:"accTitle",children:"Sample table - waiting and turnaround quickly"})]}),t.jsx("span",{className:"accRight",children:o==="table"?t.jsx(Ve,{}):t.jsx($e,{})})]}),o==="table"&&t.jsxs("div",{className:"accBody",children:[t.jsx("p",{className:"p",children:"Here is a small example with only burst times. Assume all processes arrive at the same time. This keeps the math fast for revision."}),t.jsxs("div",{className:"tableBlock",children:[t.jsx("div",{className:"tableTitle",children:"Input processes"}),t.jsxs("table",{className:"table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Process"}),t.jsx("th",{children:"Burst time"})]})}),t.jsx("tbody",{children:l.map(z=>t.jsxs("tr",{children:[t.jsx("td",{className:"monoTd",children:z.id}),t.jsx("td",{children:z.burst})]},z.id))})]})]}),t.jsxs("div",{className:"twoTables",children:[t.jsxs("div",{className:"tableBlock",children:[t.jsx("div",{className:"tableTitle",children:"FCFS result"}),t.jsxs("table",{className:"table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Process"}),t.jsx("th",{children:"Burst"}),t.jsx("th",{children:"Waiting"}),t.jsx("th",{children:"Turnaround"})]})}),t.jsxs("tbody",{children:[k.map(z=>t.jsxs("tr",{children:[t.jsx("td",{className:"monoTd",children:z.id}),t.jsx("td",{children:z.burst}),t.jsx("td",{children:z.waiting}),t.jsx("td",{children:z.turnaround})]},z.id)),t.jsxs("tr",{className:"avgRow",children:[t.jsx("td",{colSpan:2,children:"Average"}),t.jsx("td",{children:x(k,"waiting")}),t.jsx("td",{children:x(k,"turnaround")})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"FCFS order"}),t.jsx("div",{className:"monoBlock",children:"P1 - P2 - P3 - P4"})]})]}),t.jsxs("div",{className:"tableBlock",children:[t.jsx("div",{className:"tableTitle",children:"SJF result (non-preemptive)"}),t.jsxs("table",{className:"table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Process"}),t.jsx("th",{children:"Burst"}),t.jsx("th",{children:"Waiting"}),t.jsx("th",{children:"Turnaround"})]})}),t.jsxs("tbody",{children:[P.map(z=>t.jsxs("tr",{children:[t.jsx("td",{className:"monoTd",children:z.id}),t.jsx("td",{children:z.burst}),t.jsx("td",{children:z.waiting}),t.jsx("td",{children:z.turnaround})]},z.id)),t.jsxs("tr",{className:"avgRow",children:[t.jsx("td",{colSpan:2,children:"Average"}),t.jsx("td",{children:x(P,"waiting")}),t.jsx("td",{children:x(P,"turnaround")})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"SJF order"}),t.jsx("div",{className:"monoBlock",children:"P2 - P4 - P1 - P3"})]})]})]}),t.jsxs("div",{className:"callout",children:[t.jsx(dr,{}),t.jsx("span",{children:"SJF usually reduces average waiting time, but it can starve long jobs in some scenarios."})]})]})]})]})]})},lx={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
            font-size: 13px;
            line-height: 1.6;
        }

        .accordion {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .accItem {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;

            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 85%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .accLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .accIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );

            svg {
                font-size: 17px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );
            }
        }

        .accTitle {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accRight {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .accBody {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 2px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .col {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
        }

        .colTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            margin-bottom: 10px;
            letter-spacing: 0.2px;
        }

        .monoBlock {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            word-break: break-word;
            white-space: pre-line;
        }

        .compare {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .compareCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .compareTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .exampleGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .exampleCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .exampleTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }
    `},cx=()=>{const[o,c]=ne.useState("overview"),l=ne.useMemo(()=>[{key:"overview",title:"Synchronization - why it exists",icon:t.jsx(tr,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Synchronization means controlling how multiple threads access shared data. Threads run in parallel or get interleaved by CPU scheduling. If two threads touch the same shared variable without rules, the final result can become wrong and unpredictable."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("div",{className:"monoBlock",children:"Shared data + concurrent access + no control = bugs"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Shared resource"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Bank balance variable"}),t.jsx("li",{children:"Counter in memory"}),t.jsx("li",{children:"Shared file pointer"}),t.jsx("li",{children:"Queue used by many threads"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Goal"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Correctness - no wrong final value"}),t.jsx("li",{children:"Safety - avoid data corruption"}),t.jsx("li",{children:"Predictability - same output each run"})]})]})]})]})},{key:"race",title:"Race condition",icon:t.jsx(Os,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A race condition happens when the output depends on the timing or order of thread execution. If two threads update the same value at the same time, the final value may differ between runs."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple example"}),t.jsxs("div",{className:"monoBlock",children:["balance = 100",`
`,"Thread A: balance = balance + 50",`
`,"Thread B: balance = balance - 30",`
`,"Expected result: 120",`
`,"But without control, result can be wrong"]})]}),t.jsx("p",{className:"p",children:"The problem is that an update is not one step. It is usually read, compute, write. If both threads read the old value before either writes the new value, one update can get lost."})]})},{key:"critical",title:"Critical section",icon:t.jsx(al,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A critical section is the part of code that touches shared data. Only one thread should execute that part at a time. That rule prevents corruption."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Key rule"}),t.jsx("div",{className:"monoBlock",children:"Only one thread enters the critical section at a time"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"What belongs inside"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Read and write to shared variables"}),t.jsx("li",{children:"Update shared list or map"}),t.jsx("li",{children:"Write to a shared file"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"What to avoid"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Slow network calls inside lock"}),t.jsx("li",{children:"Long loops inside lock"}),t.jsx("li",{children:"Heavy work inside lock"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Reason"}),t.jsx("p",{className:"p",children:"Keep the critical section small so other threads do not wait too long."})]})]})},{key:"mutexSemaphore",title:"Mutex vs Semaphore",icon:t.jsx(li,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Mutex and semaphore are synchronization tools. They both control access, but they solve slightly different problems."}),t.jsxs("div",{className:"compare",children:[t.jsxs("div",{className:"compareCard",children:[t.jsx("div",{className:"compareTitle",children:"Mutex"}),t.jsx("p",{className:"p",children:"A mutex is like a key for a single shared resource. Only one thread can hold the key at a time. Others must wait."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Acts like a binary lock"}),t.jsx("li",{children:"Owner matters - same thread unlocks"}),t.jsx("li",{children:"Best for protecting one shared thing"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Think"}),t.jsx("div",{className:"monoBlock",children:"One bathroom - one key"})]})]}),t.jsxs("div",{className:"compareCard",children:[t.jsx("div",{className:"compareTitle",children:"Semaphore"}),t.jsx("p",{className:"p",children:"A semaphore is a counter that allows a fixed number of threads to enter. It is used for resource pools or signaling."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Counter based lock"}),t.jsx("li",{children:"Does not require strict ownership"}),t.jsx("li",{children:'Best for "N slots" resources and coordination'})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Think"}),t.jsx("div",{className:"monoBlock",children:"Parking lot - N spots"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Quick summary"}),t.jsxs("div",{className:"monoBlock",children:["Mutex - one at a time",`
`,"Semaphore - up to N at a time"]})]})]})},{key:"deadlock",title:"Deadlock basics",icon:t.jsx(Os,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Deadlock is a situation where threads are stuck forever because each one is waiting for a resource held by another thread. No one can move forward."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple deadlock story"}),t.jsxs("div",{className:"monoBlock",children:["Thread A holds Lock 1 and waits for Lock 2",`
`,"Thread B holds Lock 2 and waits for Lock 1",`
`,"Both wait forever"]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Four conditions that cause deadlock"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Mutual exclusion - resource is not shared"}),t.jsx("li",{children:"Hold and wait - hold one and request another"}),t.jsx("li",{children:"No preemption - cannot force release"}),t.jsx("li",{children:"Circular wait - waiting loop exists"})]})]}),t.jsx("p",{className:"p",children:"A common prevention trick is to always acquire locks in the same order everywhere. That removes circular wait in many cases."})]})},{key:"example",title:"Example - two threads updating same bank balance",icon:t.jsx(Pf,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Consider a shared variable called balance. One thread deposits money, another withdraws money. An update looks like read, compute, write."}),t.jsxs("div",{className:"exampleGrid",children:[t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"Without synchronization"}),t.jsxs("div",{className:"monoBlock",children:["balance = 100",`
`,"Thread A deposit 50",`
`,"Thread B withdraw 30",`
`,`
`,"Both read 100",`
`,"A writes 150",`
`,"B writes 70",`
`,"Final becomes 70",`
`,"Deposit got lost"]}),t.jsx("p",{className:"p",children:"Result depends on timing. This is a race condition."})]}),t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"With a mutex lock"}),t.jsxs("div",{className:"monoBlock",children:["lock(mutex)",`
`,"balance = balance + 50",`
`,"unlock(mutex)",`
`,`
`,"lock(mutex)",`
`,"balance = balance - 30",`
`,"unlock(mutex)",`
`,"Final becomes 120"]}),t.jsx("p",{className:"p",children:"Only one thread updates balance at a time, so no update is lost."})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Beginner rule"}),t.jsx("p",{className:"p",children:"If more than one thread can touch the same data, protect that data using a lock or design a safe message passing approach."})]})]})}],[]),p=u=>{c(x=>x===u?"":u)};return t.jsxs(lx.Wrapper,{id:"synchronization",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"Synchronization"}),t.jsx("p",{className:"sub",children:"Learn how OS and programs keep shared data safe when multiple threads run at the same time."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>p(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(Ve,{}):t.jsx($e,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},dx={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 980px;
            font-size: 13px;
            line-height: 1.6;
        }

        .accordion {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .accItem {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;
            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 85%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .accLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .accIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );

            svg {
                font-size: 17px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );
            }
        }

        .accTitle {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accRight {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .accBody {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .monoBlock {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            word-break: break-word;
            white-space: pre-line;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .condCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .condHead {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .condIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-warning) 80%,
                    var(--color-text-primary)
                );
                font-size: 17px;
            }
        }

        .condTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .stack {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .stackCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .stackTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .col {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
        }

        .colTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            margin-bottom: 10px;
            letter-spacing: 0.2px;
        }

        .exampleGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 920px) {
                grid-template-columns: 1fr;
            }
        }

        .exampleCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .exampleTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }
    `},ux=()=>{const[o,c]=ne.useState("overview"),l=ne.useMemo(()=>[{key:"overview",title:"What is a deadlock",icon:t.jsx(Os,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A deadlock is a situation where two or more processes are stuck forever because each one is waiting for a resource that another one holds. No one can move forward, so the system makes no progress for those tasks."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("div",{className:"monoBlock",children:"Each process holds something and waits for something else. The wait never ends."})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Deadlock vs slowdown"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Deadlock - no progress possible without external action"}),t.jsx("li",{children:"Slowdown - progress is slow but still happening"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Common resources"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Printer, scanner, GPU"}),t.jsx("li",{children:"Files, database row locks"}),t.jsx("li",{children:"Memory buffers"}),t.jsx("li",{children:"Network sockets"})]})]})]})]})},{key:"conditions",title:"The 4 necessary conditions",icon:t.jsx(Iu,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A deadlock can happen only when all four conditions are true at the same time. If you break even one condition, you prevent deadlock."}),t.jsxs("div",{className:"cards",children:[t.jsxs("div",{className:"condCard",children:[t.jsxs("div",{className:"condHead",children:[t.jsx("span",{className:"condIcon",children:t.jsx(li,{})}),t.jsx("div",{className:"condTitle",children:"1. Mutual exclusion"})]}),t.jsx("p",{className:"p",children:"At least one resource cannot be shared. Only one process can use it at a time."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"A printer can print one job at a time."})]})]}),t.jsxs("div",{className:"condCard",children:[t.jsxs("div",{className:"condHead",children:[t.jsx("span",{className:"condIcon",children:t.jsx(al,{})}),t.jsx("div",{className:"condTitle",children:"2. Hold and wait"})]}),t.jsx("p",{className:"p",children:"A process holds at least one resource and waits to acquire another resource."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"Process A holds the printer and waits for a file lock."})]})]}),t.jsxs("div",{className:"condCard",children:[t.jsxs("div",{className:"condHead",children:[t.jsx("span",{className:"condIcon",children:t.jsx(tr,{})}),t.jsx("div",{className:"condTitle",children:"3. No preemption"})]}),t.jsx("p",{className:"p",children:"Resources cannot be forcibly taken away. A process releases a resource only voluntarily after finishing its work."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"OS cannot just take a file lock away in the middle of a critical write."})]})]}),t.jsxs("div",{className:"condCard",children:[t.jsxs("div",{className:"condHead",children:[t.jsx("span",{className:"condIcon",children:t.jsx(Iu,{})}),t.jsx("div",{className:"condTitle",children:"4. Circular wait"})]}),t.jsx("p",{className:"p",children:"There is a cycle of waiting. Process A waits for B, B waits for C, and C waits for A."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"A waits for B's resource, B waits for A's resource."})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"How to use this in answers"}),t.jsx("p",{className:"p",children:"When you see a deadlock story, identify each condition. Then explain how to break one of them."})]})]})},{key:"handling",title:"Handling deadlocks",icon:t.jsx(Df,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"There are four common approaches. Different systems pick different strategies depending on cost and safety."}),t.jsxs("div",{className:"stack",children:[t.jsxs("div",{className:"stackCard",children:[t.jsx("div",{className:"stackTitle",children:"1. Prevention"}),t.jsx("p",{className:"p",children:"Prevent deadlocks by ensuring at least one of the four necessary conditions can never be true."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Remove hold and wait by forcing a process to request all resources at once"}),t.jsx("li",{children:"Remove circular wait by ordering resources and always acquiring in that order"}),t.jsx("li",{children:"Sometimes allow preemption for certain resources"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple rule"}),t.jsx("div",{className:"monoBlock",children:"Always lock resources in a fixed order."})]})]}),t.jsxs("div",{className:"stackCard",children:[t.jsx("div",{className:"stackTitle",children:"2. Avoidance"}),t.jsx("p",{className:"p",children:"Avoidance means the OS makes a decision at runtime. It checks if granting a request keeps the system in a safe state."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"The classic concept here is Banker’s algorithm"}),t.jsx("li",{children:"It is about ensuring safe allocation before giving resources"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Key idea"}),t.jsx("p",{className:"p",children:"Grant requests only if the system can still finish all processes in some order."})]})]}),t.jsxs("div",{className:"stackCard",children:[t.jsx("div",{className:"stackTitle",children:"3. Detection and recovery"}),t.jsx("p",{className:"p",children:"Allow deadlocks to happen, detect them, and then recover by breaking the cycle."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Detection - build a wait-for graph and look for cycles"}),t.jsx("li",{children:"Recovery - terminate a process or take back resources safely"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Common recovery actions"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Kill one process in the cycle"}),t.jsx("li",{children:"Roll back to a checkpoint and retry"}),t.jsx("li",{children:"Preempt a resource if it is safe to do so"})]})]})]})]})]})},{key:"example",title:"Example - printer + file lock situation",icon:t.jsx(cp,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Imagine two processes. Each needs two resources to finish a print job."}),t.jsxs("div",{className:"exampleGrid",children:[t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"Resources"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Printer - exclusive"}),t.jsx("li",{children:"File lock - exclusive"})]})]}),t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"Process A"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Holds the printer"}),t.jsx("li",{children:"Requests the file lock"})]})]}),t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"Process B"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Holds the file lock"}),t.jsx("li",{children:"Requests the printer"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"What happens"}),t.jsxs("div",{className:"monoBlock",children:["A holds printer, waits for file lock",`
`,"B holds file lock, waits for printer",`
`,"Both wait forever - deadlock"]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"How to fix it"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Prevention - enforce order: always lock file first, then request printer"}),t.jsx("li",{children:"Detection - detect cycle and cancel one job to free resources"})]})]})]})}],[]),p=u=>{c(x=>x===u?"":u)};return t.jsxs(dx.Wrapper,{id:"deadlocks",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"Deadlocks"}),t.jsx("p",{className:"sub",children:"Deadlocks are must-know because they connect locks, resources, scheduling, and system stability. Learn the 4 conditions first, then learn handling strategies."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>p(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(Ve,{}):t.jsx($e,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},px={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
            font-size: 13px;
            line-height: 1.6;
        }

        .accordion {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .accItem {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;

            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 85%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .accLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .accIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );

            svg {
                font-size: 17px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );
            }
        }

        .accTitle {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accRight {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .accBody {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .monoBlock {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            word-break: break-word;
            white-space: pre-line;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 2px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .col {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
        }

        .colTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            margin-bottom: 10px;
            letter-spacing: 0.2px;
        }

        .compare {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .compareCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .compareTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .story {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
        }

        .storyTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            margin-bottom: 8px;
        }

        .ordered {
            padding-left: 18px;
            display: flex;
            flex-direction: column;
            gap: 6px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
                list-style: decimal;
            }
        }
    `},mx=()=>{const[o,c]=ne.useState("overview"),l=ne.useMemo(()=>[{key:"overview",title:"Memory management - overview",icon:t.jsx(br,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Memory management is the OS responsibility of organizing and controlling how RAM is used. Many programs run at the same time, and each program needs memory that feels private and continuous. The OS creates this illusion while keeping the system safe and fast."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Each process gets an isolated memory view called an address space"}),t.jsx("li",{children:"OS maps virtual addresses to physical RAM"}),t.jsx("li",{children:"If RAM is not enough, OS uses disk as backup using virtual memory"})]})]})]})},{key:"addressSpace",title:"Address space - what it means",icon:t.jsx(_f,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"An address space is the range of memory addresses a process can use. Programs use addresses like 0x1000, 0x2000, etc. But those are virtual addresses, not actual RAM locations."}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Virtual address space"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"What the program thinks memory looks like"}),t.jsx("li",{children:"Usually starts from low addresses and grows"}),t.jsx("li",{children:"Each process gets its own separate view"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Physical memory (RAM)"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Actual hardware memory chips"}),t.jsx("li",{children:"Shared by all processes"}),t.jsx("li",{children:"OS decides where each process data actually sits"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple idea"}),t.jsx("div",{className:"monoBlock",children:"Program uses virtual address - OS translates it to a real RAM address"})]})]})},{key:"pagingVsSegmentation",title:"Paging vs Segmentation - easy comparison",icon:t.jsx(If,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Paging and segmentation are two ways to organize memory. Both help OS manage memory, but they do it differently."}),t.jsxs("div",{className:"compare",children:[t.jsxs("div",{className:"compareCard",children:[t.jsx("div",{className:"compareTitle",children:"Paging"}),t.jsx("p",{className:"p",children:"Memory is divided into fixed-size blocks. Virtual memory uses pages and RAM uses page frames. OS maps each virtual page to a physical frame."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Fixed size pieces"}),t.jsx("li",{children:"Reduces external fragmentation"}),t.jsx("li",{children:"Needs page table to translate addresses"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Think"}),t.jsx("div",{className:"monoBlock",children:"Like a notebook with same size pages"})]})]}),t.jsxs("div",{className:"compareCard",children:[t.jsx("div",{className:"compareTitle",children:"Segmentation"}),t.jsx("p",{className:"p",children:"Memory is divided into logical parts called segments, like code, stack, heap. Each segment can be different size."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Variable size pieces"}),t.jsx("li",{children:"Matches program structure"}),t.jsx("li",{children:"Can cause external fragmentation if many different sizes are allocated and freed"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Think"}),t.jsx("div",{className:"monoBlock",children:"Like folders of different sizes"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"One-line difference"}),t.jsxs("div",{className:"monoBlock",children:["Paging - fixed size blocks",`
`,"Segmentation - logical variable size blocks"]})]})]})},{key:"virtualMemory",title:"Virtual memory - why it exists",icon:t.jsx(ai,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Virtual memory is the technique where OS uses disk as an extension of RAM. This allows programs to run even when RAM is not enough. Only the needed pages are kept in RAM at a time."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Key idea"}),t.jsx("div",{className:"monoBlock",children:"Keep active pages in RAM - keep inactive pages on disk"})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Lets the system run bigger programs than available RAM"}),t.jsx("li",{children:"Helps run many programs together without crashing"}),t.jsx("li",{children:"Uses page replacement policies when RAM is full"})]})]})},{key:"pageFault",title:"Page fault - a simple story",icon:t.jsx(Os,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A page fault happens when a program tries to access a page that is not currently in RAM. This is normal in virtual memory systems."}),t.jsxs("div",{className:"story",children:[t.jsx("div",{className:"storyTitle",children:"Story"}),t.jsxs("ol",{className:"ordered",children:[t.jsx("li",{children:"Program tries to read an address in a page"}),t.jsx("li",{children:"CPU checks page table and finds the page is not in RAM"}),t.jsx("li",{children:"Hardware raises a page fault interrupt"}),t.jsx("li",{children:"OS pauses the program and loads the page from disk into RAM"}),t.jsx("li",{children:"Page table is updated and program continues"})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Important note"}),t.jsx("p",{className:"p",children:"Page fault does not always mean an error. Most of the time it just means the data was on disk and OS had to bring it into RAM."})]})]})},{key:"thrashing",title:"Thrashing - when the system becomes slow",icon:t.jsx(As,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Thrashing happens when the system spends more time moving pages between RAM and disk than doing real work. It usually occurs when too many processes are running or RAM is too small."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"How it looks"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"CPU usage feels low but disk usage is high"}),t.jsx("li",{children:"Apps freeze or become extremely slow"}),t.jsx("li",{children:"System keeps swapping pages repeatedly"})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple reason"}),t.jsx("div",{className:"monoBlock",children:"Too many active pages - not enough RAM - constant page faults"})]})]})},{key:"example",title:"Example - why paging helps run bigger programs than RAM",icon:t.jsx(br,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Suppose a program needs 2 GB memory, but your system has only 1 GB free RAM. Without paging, the program would fail to run. With paging and virtual memory, the OS keeps only the active parts of the program in RAM and stores the rest on disk."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Practical picture"}),t.jsxs("div",{className:"monoBlock",children:["RAM - working desk",`
`,"Disk - storage cupboard",`
`,"OS moves only needed pages to the desk"]})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"You can open large apps with limited RAM because only active pages stay in RAM"}),t.jsx("li",{children:"Performance depends on how often page faults happen"}),t.jsx("li",{children:"SSD makes virtual memory less painful than HDD, but RAM is still much faster"})]})]})}],[]),p=u=>{c(x=>x===u?"":u)};return t.jsxs(px.Wrapper,{id:"memory-management",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"Memory Management"}),t.jsx("p",{className:"sub",children:"OS memory management creates a safe illusion of private memory for each process and makes the system work even when RAM is limited."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>p(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(Ve,{}):t.jsx($e,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},hx={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
            font-size: 13px;
            line-height: 1.6;
        }

        .accordion {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .accItem {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;

            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 85%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .accLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .accIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );

            svg {
                font-size: 17px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );
            }
        }

        .accTitle {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accRight {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .accBody {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 2px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .col {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
        }

        .colTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            margin-bottom: 10px;
            letter-spacing: 0.2px;
        }

        .monoBlock {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            word-break: break-word;
            white-space: pre-line;
        }

        .stack {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .stackCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .stackTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .rowIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 28px;
            width: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );

            svg {
                font-size: 15px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 75%,
                    var(--color-text-primary)
                );
            }
        }

        .permGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .permCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .permTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .callout {
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px 12px;

            svg {
                flex: 0 0 auto;
                margin-top: 2px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            span {
                color: var(--color-text-secondary);
                font-size: 12px;
                line-height: 1.55;
                font-weight: 700;
            }
        }
    `},fx=()=>{const[o,c]=ne.useState("overview"),l=ne.useMemo(()=>[{key:"overview",title:"File systems - what they solve",icon:t.jsx(Eu,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A file system is the OS method to store data on storage devices in an organized and reliable way. It gives you a simple view like folders and files, but internally it manages blocks, metadata, and permissions."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("div",{className:"monoBlock",children:"File system = names + directories + metadata + storage blocks"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"What you see"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Folders and files with names"}),t.jsx("li",{children:"Copy, move, rename, delete"}),t.jsx("li",{children:"Permissions and ownership"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"What OS manages"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Where bytes are stored on disk"}),t.jsx("li",{children:"Which blocks belong to which file"}),t.jsx("li",{children:"Consistency and crash safety"})]})]})]})]})},{key:"file-vs-dir",title:"File vs directory",icon:t.jsx(Ou,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A file is a sequence of bytes. A directory is a special structure that maps names to file entries. The directory helps the OS find a file when you provide a path."}),t.jsxs("div",{className:"stack",children:[t.jsxs("div",{className:"stackCard",children:[t.jsxs("div",{className:"stackTitle",children:[t.jsx("span",{className:"rowIcon",children:t.jsx(zf,{})}),"File"]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Stores actual data bytes"}),t.jsx("li",{children:"Has metadata like size and permissions"}),t.jsx("li",{children:"Can be text, image, video, executable, anything"})]})]}),t.jsxs("div",{className:"stackCard",children:[t.jsxs("div",{className:"stackTitle",children:[t.jsx("span",{className:"rowIcon",children:t.jsx(Ou,{})}),"Directory"]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Stores name to entry mappings"}),t.jsx("li",{children:"Helps resolve a path like /a/b/c.txt"}),t.jsx("li",{children:"Each entry points to a file record (like an inode)"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple analogy"}),t.jsx("p",{className:"p",children:"A directory is like an index page. It helps locate the real content. The file is the real content."})]})]})},{key:"metadata",title:"Metadata - data about the file",icon:t.jsx(Ha,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Metadata is information about a file, not the file data itself. OS uses metadata for access control, storage mapping, and showing file details."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Common metadata"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Name (often stored in directory entry)"}),t.jsx("li",{children:"Size in bytes"}),t.jsx("li",{children:"Owner and group"}),t.jsx("li",{children:"Permissions"}),t.jsx("li",{children:"Created and modified times"}),t.jsx("li",{children:"Location pointers to disk blocks"})]})]}),t.jsxs("div",{className:"monoBlock",children:["Example",`
`,'"report.pdf" has size, owner, permissions, timestamps, and pointers to disk blocks']})]})},{key:"permissions",title:"Permissions - rwx in simple terms",icon:t.jsx(li,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Permissions decide who can read, write, or execute a file. A common model is rwx for three groups: owner, group, and others."}),t.jsxs("div",{className:"permGrid",children:[t.jsxs("div",{className:"permCard",children:[t.jsx("div",{className:"permTitle",children:"r - read"}),t.jsx("p",{className:"p",children:"Can view file content or list directory items."})]}),t.jsxs("div",{className:"permCard",children:[t.jsx("div",{className:"permTitle",children:"w - write"}),t.jsx("p",{className:"p",children:"Can modify file content or create and delete items in a directory."})]}),t.jsxs("div",{className:"permCard",children:[t.jsx("div",{className:"permTitle",children:"x - execute"}),t.jsx("p",{className:"p",children:"Can run a program file. For directories, x often means you can enter and access inside."})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example pattern"}),t.jsxs("div",{className:"monoBlock",children:["rwx rw- r--",`
`,"owner can read write execute",`
`,"group can read write",`
`,"others can read"]})]}),t.jsxs("div",{className:"callout",children:[t.jsx(Ha,{}),t.jsx("span",{children:"Directory permissions behave slightly differently. Read means list names. Execute means you can enter."})]})]})},{key:"inode",title:"Inode idea - simple and practical",icon:t.jsx(Eu,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Many file systems keep a separate record for each file that contains metadata and pointers to where data is stored. A common name for this record is an inode."}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Directory stores"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"File name"}),t.jsx("li",{children:"Pointer or number to locate inode"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Inode stores"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Permissions and ownership"}),t.jsx("li",{children:"File size"}),t.jsx("li",{children:"Timestamps"}),t.jsx("li",{children:"Pointers to data blocks"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Why this design helps"}),t.jsx("p",{className:"p",children:"It separates names from file content. You can have multiple names pointing to same inode using links."})]}),t.jsxs("div",{className:"monoBlock",children:["Path lookup idea",`
`,'"/docs/report.pdf"',`
`,'docs directory maps "report.pdf" - inode number',`
`,"inode maps - data blocks on disk"]})]})},{key:"delete",title:"Why delete is not always instant",icon:t.jsx(Uf,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"When you delete a file, OS often does not immediately wipe all file bytes from disk. Many file systems mark the file entry as removed and free the blocks for reuse."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"What usually happens"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Directory entry is removed"}),t.jsx("li",{children:"Inode link count is reduced"}),t.jsx("li",{children:"Data blocks are marked as free for future files"}),t.jsx("li",{children:"Actual bytes may remain until overwritten"})]})]}),t.jsxs("div",{className:"callout",children:[t.jsx(Ha,{}),t.jsx("span",{children:"This is why recovery tools sometimes bring back deleted files if blocks were not overwritten yet."})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Special case"}),t.jsx("p",{className:"p",children:"If a running program still has the file open, OS may keep the file data until the program closes it. The name disappears, but the storage is released later."})]}),t.jsxs("div",{className:"monoBlock",children:["Simple story",`
`,"App opens file",`
`,"You delete file name",`
`,"App still reads it because it is still open",`
`,"Data is finally freed when app closes it"]})]})}],[]),p=u=>{c(x=>x===u?"":u)};return t.jsxs(hx.Wrapper,{id:"file-systems",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"File Systems"}),t.jsx("p",{className:"sub",children:"Files and directories look simple, but the OS is managing metadata, permissions, and disk blocks behind the scenes."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>p(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(Ve,{}):t.jsx($e,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},xx={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
            font-size: 13px;
            line-height: 1.6;
        }

        .accordion {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .accItem {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;
            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 85%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .accLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .accIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );

            svg {
                font-size: 17px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );
            }
        }

        .accTitle {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accRight {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .accBody {
            padding: 12px 12px 14px;
            border-top: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .monoBlock {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            word-break: break-word;
            white-space: pre-line;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .col {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
        }

        .colTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            margin-bottom: 10px;
            letter-spacing: 0.2px;
        }

        .cards2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface);
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .cardTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .flow {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: 2px;
        }

        .step {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                var(--color-surface)
            );
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
        }

        .arrow {
            color: var(--color-text-muted);
            padding-left: 6px;
            display: inline-flex;
            align-items: center;

            svg {
                font-size: 16px;
            }
        }

        .visual {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-code-bg) 55%,
                var(--color-surface)
            );
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .track {
            display: flex;
            justify-content: space-between;
            color: var(--color-text-muted);
            font-size: 11px;

            .t {
                opacity: 0.85;
            }
        }

        .line {
            position: relative;
            height: 28px;
            border-radius: 999px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 0 10px;
            overflow: hidden;
        }

        .dash {
            height: 2px;
            flex: 1 1 auto;
            background: color-mix(
                in srgb,
                var(--color-primary) 30%,
                var(--color-border)
            );
            border-radius: 999px;
            opacity: 0.9;
        }

        .dash.jump {
            background: color-mix(
                in srgb,
                var(--color-accent) 28%,
                var(--color-border)
            );
            opacity: 0.85;
        }

        .dot {
            height: 14px;
            width: 14px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            flex: 0 0 auto;
        }

        .dot.req {
            background: color-mix(
                in srgb,
                var(--color-primary) 18%,
                var(--color-surface-2)
            );
        }

        .dot.head {
            height: 18px;
            width: 18px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: color-mix(
                in srgb,
                var(--color-accent) 18%,
                var(--color-surface-2)
            );

            svg {
                font-size: 12px;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 75%,
                    var(--color-text-primary)
                );
            }
        }

        .caption {
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.55;
        }
    `},gx=()=>{const[o,c]=ne.useState("overview"),l=u=>{c(x=>x===u?"":u)},p=ne.useMemo(()=>[{key:"overview",icon:t.jsx(Lf,{}),title:"I O basics - what it means",body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"I O means Input and Output. It is how programs talk to the outside world - keyboard, mouse, screen, disk, network, USB devices. Apps do not directly control hardware. The OS handles I O using drivers, buffers, and interrupts so many programs can use devices safely."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("div",{className:"monoBlock",children:"App requests I O - OS checks access - driver talks to device - data comes back to app"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Input examples"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Keyboard key press"}),t.jsx("li",{children:"Mouse movement"}),t.jsx("li",{children:"Incoming network packet"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Output examples"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Writing a file to disk"}),t.jsx("li",{children:"Printing on screen"}),t.jsx("li",{children:"Sending data over network"})]})]})]})]})},{key:"blocking",icon:t.jsx(As,{}),title:"Blocking vs non-blocking I O",body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"The big idea is simple - does your program wait, or can it continue doing other work while I O happens. This matters because I O is usually much slower than CPU."}),t.jsxs("div",{className:"cards2",children:[t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"cardTitle",children:"Blocking I O"}),t.jsx("p",{className:"p",children:"The calling thread waits until the operation finishes. Your code stops at read or write until data is available or written."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example idea"}),t.jsx("p",{className:"p",children:"You call read on a file or socket. If no data is ready, the thread sleeps and resumes later when data arrives."})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Simple to code and reason about"}),t.jsx("li",{children:"Can waste time if you block too often"})]})]}),t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"cardTitle",children:"Non-blocking I O"}),t.jsx("p",{className:"p",children:"The call returns immediately. If data is not ready, it returns a special result, and your program can do something else."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example idea"}),t.jsx("p",{className:"p",children:'You try to read. If nothing is ready, you get "would block" and continue other tasks, then check again later.'})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Better for high concurrency systems"}),t.jsx("li",{children:"More complex because you handle readiness and retries"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Quick mental model"}),t.jsxs("div",{className:"monoBlock",children:["Blocking - wait here until data is ready",`
`,"Non-blocking - return now, check again later"]})]})]})},{key:"interrupts",icon:t.jsx(Za,{}),title:"Interrupts - how devices get attention",body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:'An interrupt is a signal from hardware that says "I have something important". Instead of the CPU constantly checking every device, devices can notify the OS only when needed. This saves CPU time.'}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Why interrupts matter"}),t.jsx("p",{className:"p",children:'If the CPU had to keep asking the keyboard "any key pressed" millions of times per second, it would waste time. Interrupts let the keyboard notify the OS only when a key is pressed.'})]}),t.jsxs("div",{className:"flow",children:[t.jsx("div",{className:"step",children:"Device event happens - key press, disk finished, network packet arrives"}),t.jsx("div",{className:"arrow",children:t.jsx(Ua,{})}),t.jsx("div",{className:"step",children:"Device raises an interrupt signal"}),t.jsx("div",{className:"arrow",children:t.jsx(Ua,{})}),t.jsx("div",{className:"step",children:"CPU pauses current work and runs an interrupt handler"}),t.jsx("div",{className:"arrow",children:t.jsx(Ua,{})}),t.jsx("div",{className:"step",children:"OS driver processes the event and wakes waiting process if needed"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Good for"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Responsiveness"}),t.jsx("li",{children:"Less CPU waste"}),t.jsx("li",{children:"Many devices at once"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Cost"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Context switching overhead"}),t.jsx("li",{children:"Interrupt storms can hurt performance"}),t.jsx("li",{children:"Need careful driver design and priority handling"})]})]})]})]})},{key:"disk",icon:t.jsx(di,{}),title:"Disk scheduling - SCAN and C-SCAN",body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Disk scheduling is how the OS decides the order of disk requests. The disk head movement costs time, so good ordering reduces total movement and improves throughput."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple idea"}),t.jsx("div",{className:"monoBlock",children:"Less head movement - faster average response"})]}),t.jsxs("div",{className:"cards2",children:[t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"cardTitle",children:"SCAN"}),t.jsx("p",{className:"p",children:"The disk head moves in one direction, serving requests on the way, then reverses direction at the end, like an elevator."}),t.jsxs("div",{className:"visual",children:[t.jsxs("div",{className:"track",children:[t.jsx("span",{className:"t",children:"0"}),t.jsx("span",{className:"t",children:"25"}),t.jsx("span",{className:"t",children:"50"}),t.jsx("span",{className:"t",children:"75"}),t.jsx("span",{className:"t",children:"100"})]}),t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"dot head",children:t.jsx(dr,{})}),t.jsx("span",{className:"dash"}),t.jsx("span",{className:"dot req"}),t.jsx("span",{className:"dot req"}),t.jsx("span",{className:"dot req"}),t.jsx("span",{className:"dash"}),t.jsx("span",{className:"dot req"})]}),t.jsx("div",{className:"caption",children:"Head goes forward serving requests, then comes back."})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Fairer than random ordering"}),t.jsx("li",{children:"Good throughput"}),t.jsx("li",{children:"Some requests may wait for reversal"})]})]}),t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"cardTitle",children:"C-SCAN"}),t.jsx("p",{className:"p",children:"Like SCAN, but only serves requests in one direction. When it reaches the end, it jumps back to the start without serving on the return."}),t.jsxs("div",{className:"visual",children:[t.jsxs("div",{className:"track",children:[t.jsx("span",{className:"t",children:"0"}),t.jsx("span",{className:"t",children:"25"}),t.jsx("span",{className:"t",children:"50"}),t.jsx("span",{className:"t",children:"75"}),t.jsx("span",{className:"t",children:"100"})]}),t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"dot head",children:t.jsx(dr,{})}),t.jsx("span",{className:"dash"}),t.jsx("span",{className:"dot req"}),t.jsx("span",{className:"dot req"}),t.jsx("span",{className:"dot req"}),t.jsx("span",{className:"dash jump"}),t.jsx("span",{className:"dot req"})]}),t.jsx("div",{className:"caption",children:"Head serves in one direction, then jumps back and starts again."})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"More uniform waiting time across tracks"}),t.jsx("li",{children:"Can reduce starvation for far tracks"}),t.jsx("li",{children:"Jump back adds overhead but is predictable"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"SCAN vs C-SCAN in one line"}),t.jsxs("div",{className:"monoBlock",children:["SCAN - elevator goes up and down serving both ways",`
`,"C-SCAN - elevator serves only going up, returns empty"]})]})]})}],[]);return t.jsxs(xx.Wrapper,{id:"io-basics",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"I O Basics"}),t.jsx("p",{className:"sub",children:"Optional but strong topic. I O explains why programs wait, how devices notify the CPU, and how disks handle many requests efficiently."})]}),t.jsx("div",{className:"accordion",children:p.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>l(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(Ve,{}):t.jsx($e,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},vx={Wrapper:_e.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px 26px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 12px;
        }

        .titleRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .countPill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 12px 26px var(--color-shadow);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            .count {
                color: var(--color-text-secondary);
                font-weight: 900;
            }
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
            font-size: 13px;
            line-height: 1.6;
        }

        .controls {
            display: grid;
            grid-template-columns: 1.25fr 0.75fr;
            gap: 10px;

            @media (width < 760px) {
                grid-template-columns: 1fr;
            }
        }

        .search,
        .filter {
            position: relative;
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
            padding: 8px 10px;
        }

        .leftIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 16px;
            flex: 0 0 auto;
        }

        input {
            width: 100%;
            background: transparent;
            border: 0;
            padding: 8px 6px;
            border-radius: 10px;
            color: var(--color-text-primary);
        }

        select {
            width: 100%;
            background: transparent;
            border: 0;
            padding: 8px 6px;
            border-radius: 10px;
            color: var(--color-text-primary);
            cursor: pointer;
        }

        .clearBtn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            &:hover {
                background: var(--color-surface-2);
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .qRow {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;
            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 85%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .qLeft {
            display: flex;
            align-items: baseline;
            gap: 10px;
            min-width: 0;
            text-align: left;
        }

        .qid {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-code-bg);
            padding: 4px 8px;
            border-radius: 999px;
            flex: 0 0 auto;
        }

        .qText {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            @media (width < 640px) {
                white-space: normal;
            }
        }

        .qRight {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .aBlock {
            border-top: 1px solid var(--color-border);
            padding: 12px 12px 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .aText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.65;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .tag {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            font-size: 12px;
            padding: 7px 10px;
            border-radius: 999px;
            font-weight: 900;

            &:hover {
                border-color: var(--color-border-light);
                color: var(--color-text-primary);
            }

            &.active {
                border-color: color-mix(
                    in srgb,
                    var(--color-primary) 60%,
                    var(--color-border)
                );
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );
                color: var(--color-text-primary);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .empty {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
            padding: 16px;
        }

        .emptyTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
            letter-spacing: 0.2px;
        }

        .emptySub {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .emptyBtns {
            display: flex;
            gap: 10px;
            margin-top: 12px;
            flex-wrap: wrap;

            button {
                border: 1px solid var(--color-border);
                background: var(--color-surface);
                color: var(--color-text-primary);
                padding: 10px 12px;
                border-radius: 12px;
                font-weight: 900;

                &:hover {
                    background: var(--color-surface-2);
                    border-color: var(--color-border-light);
                }

                &:active {
                    transform: translateY(1px);
                }

                &:focus-visible {
                    outline: 2px solid var(--color-primary);
                    outline-offset: 3px;
                }
            }
        }
    `},js=[{id:"q-001",q:"What is an operating system",a:"An operating system is the core software that manages hardware resources and provides services to programs.",tags:["basics"]},{id:"q-002",q:"What is the kernel",a:"The kernel is the core part of the OS that runs with highest privilege and controls CPU, memory, devices, and files.",tags:["kernel"]},{id:"q-003",q:"User mode vs kernel mode",a:"User mode has limited privileges. Kernel mode has full privileges to run sensitive instructions and access hardware.",tags:["kernel","basics"]},{id:"q-004",q:"What is a system call",a:"A system call is a controlled request from a program to the kernel for OS services like file I O, process control, or memory.",tags:["kernel"]},{id:"q-005",q:"What is a process",a:"A process is a program in execution with its own address space and OS managed state.",tags:["process"]},{id:"q-006",q:"What is a thread",a:"A thread is an execution unit inside a process. Threads share process memory but have separate stacks and registers.",tags:["thread","process"]},{id:"q-007",q:"Process vs thread in one line",a:"A process isolates memory, a thread shares memory inside a process.",tags:["process","thread"]},{id:"q-008",q:"What is a context switch",a:"Context switch is when the CPU saves state of one thread or process and loads state of another to resume execution.",tags:["process","thread","scheduling"]},{id:"q-009",q:"Why context switching is costly",a:"It saves and restores registers, switches memory mappings, and can cause cache and TLB misses.",tags:["scheduling","performance"]},{id:"q-010",q:"Common process states",a:"New, Ready, Running, Waiting or Blocked, Terminated.",tags:["process"]},{id:"q-011",q:"What is CPU scheduling",a:"CPU scheduling decides which ready process or thread runs next on the CPU.",tags:["scheduling"]},{id:"q-012",q:"FCFS scheduling",a:"First Come First Serve runs processes in arrival order. Simple but can cause convoy effect.",tags:["scheduling"]},{id:"q-013",q:"SJF scheduling",a:"Shortest Job First picks the smallest CPU burst first. It reduces average waiting time but needs burst prediction.",tags:["scheduling"]},{id:"q-014",q:"Round Robin scheduling",a:"Round Robin gives each process a time quantum in rotation. It is common in time sharing systems.",tags:["scheduling"]},{id:"q-015",q:"Priority scheduling",a:"Priority scheduling runs highest priority first. It can cause starvation without aging.",tags:["scheduling"]},{id:"q-016",q:"Preemptive vs non preemptive scheduling",a:"Preemptive can interrupt a running task. Non preemptive waits until it blocks or finishes.",tags:["scheduling"]},{id:"q-017",q:"Turnaround time",a:"Turnaround time is completion time minus arrival time.",tags:["scheduling","metrics"]},{id:"q-018",q:"Waiting time",a:"Waiting time is total time a process spends in the ready queue.",tags:["scheduling","metrics"]},{id:"q-019",q:"Response time",a:"Response time is time from request to first response. It matters in interactive systems.",tags:["scheduling","metrics"]},{id:"q-020",q:"Throughput",a:"Throughput is number of processes completed per unit time.",tags:["metrics"]},{id:"q-021",q:"What is a race condition",a:"A race condition happens when output depends on timing of concurrent operations on shared data.",tags:["sync"]},{id:"q-022",q:"What is a critical section",a:"A critical section is code that accesses shared data and must not run concurrently with other critical sections.",tags:["sync"]},{id:"q-023",q:"What is mutual exclusion",a:"Mutual exclusion ensures only one thread enters a critical section at a time.",tags:["sync"]},{id:"q-024",q:"Mutex vs semaphore",a:"A mutex is a binary lock with ownership. A semaphore is a counter used to control access to N resources.",tags:["sync"]},{id:"q-025",q:"What is a deadlock",a:"Deadlock is when a set of processes are blocked forever, each waiting for a resource held by another.",tags:["deadlock"]},{id:"q-026",q:"Four necessary conditions for deadlock",a:"Mutual exclusion, hold and wait, no preemption, circular wait.",tags:["deadlock"]},{id:"q-027",q:"Deadlock prevention idea",a:"Break at least one necessary condition, like avoid hold and wait or enforce ordering to prevent circular wait.",tags:["deadlock"]},{id:"q-028",q:"Deadlock avoidance idea",a:"Avoidance makes safe decisions using knowledge of future needs, like Bankers algorithm.",tags:["deadlock"]},{id:"q-029",q:"Deadlock detection idea",a:"Detection finds cycles or unsafe waits, then recovery kills or rolls back processes.",tags:["deadlock"]},{id:"q-030",q:"Starvation vs deadlock",a:"Starvation is indefinite delay due to unfair scheduling. Deadlock is circular waiting where none can proceed.",tags:["deadlock","scheduling"]},{id:"q-031",q:"What is virtual memory",a:"Virtual memory gives each process an illusion of large contiguous memory using paging and disk as backing store.",tags:["memory"]},{id:"q-032",q:"Paging in one line",a:"Paging splits memory into fixed size pages and frames to simplify allocation and reduce external fragmentation.",tags:["memory"]},{id:"q-033",q:"What is a page fault",a:"A page fault happens when a process accesses a page not in RAM. OS loads it from disk or maps it.",tags:["memory"]},{id:"q-034",q:"What is a page table",a:"A page table maps virtual pages to physical frames and stores permissions and status bits.",tags:["memory"]},{id:"q-035",q:"What is TLB",a:"TLB is a fast cache of recent virtual to physical translations to speed up address translation.",tags:["memory","performance"]},{id:"q-036",q:"Internal vs external fragmentation",a:"Internal is wasted space inside allocated blocks. External is free space split into small holes.",tags:["memory"]},{id:"q-037",q:"Thrashing",a:"Thrashing is excessive paging where system spends more time swapping than executing due to low free memory.",tags:["memory","performance"]},{id:"q-038",q:"Segmentation in one line",a:"Segmentation divides memory into variable sized logical segments like code, data, stack.",tags:["memory"]},{id:"q-039",q:"Paging vs segmentation",a:"Paging is fixed size and simpler. Segmentation matches logical structure but can cause external fragmentation.",tags:["memory"]},{id:"q-040",q:"Copy on write",a:"Copy on write shares pages until a write occurs, then a private copy is made. Common after fork.",tags:["memory","process"]},{id:"q-041",q:"What is a file system",a:"A file system organizes data on storage using files, directories, metadata, and allocation structures.",tags:["filesystem"]},{id:"q-042",q:"What is an inode",a:"An inode is metadata about a file like permissions, owner, size, and block pointers, not the file name.",tags:["filesystem"]},{id:"q-043",q:"What is a file descriptor",a:"A file descriptor is a small integer handle used by a process to refer to an open file or socket.",tags:["filesystem","kernel"]},{id:"q-044",q:"Hard link vs soft link",a:"Hard link points to the same inode. Soft link is a separate file that points to a path name.",tags:["filesystem"]},{id:"q-045",q:"Journaling file system",a:"Journaling logs metadata changes before applying them, helping recovery after crash or power loss.",tags:["filesystem"]},{id:"q-046",q:"File permissions idea",a:"Permissions control read, write, execute for owner, group, others. OS enforces access checks.",tags:["filesystem","security"]},{id:"q-047",q:"Why delete is not instant sometimes",a:"Data blocks are freed but may not be overwritten immediately. Only references are removed first.",tags:["filesystem"]},{id:"q-048",q:"What is buffering in I O",a:"Buffering stores data temporarily to reduce device access overhead and smooth speed differences.",tags:["io"]},{id:"q-049",q:"Blocking vs non blocking I O",a:"Blocking waits until operation completes. Non blocking returns immediately and you check later.",tags:["io"]},{id:"q-050",q:"Interrupts in one line",a:"An interrupt is a signal that pauses CPU briefly so OS can handle an event like I O completion.",tags:["io"]},{id:"q-051",q:"What is IPC",a:"IPC is inter process communication like pipes, message queues, shared memory, sockets, signals.",tags:["ipc"]},{id:"q-052",q:"Pipe",a:"A pipe is a unidirectional byte stream between processes, often used between parent and child.",tags:["ipc"]},{id:"q-053",q:"Socket",a:"A socket is an endpoint for network communication. It can be used locally or over a network.",tags:["ipc","network"]},{id:"q-054",q:"Shared memory IPC",a:"Shared memory is fastest IPC but needs synchronization because multiple processes access same memory region.",tags:["ipc","sync"]},{id:"q-055",q:"What is a daemon",a:"A daemon is a background service process that runs without direct user interaction.",tags:["process"]},{id:"q-056",q:"What is a zombie process",a:"A zombie is a terminated process that still has an entry because parent has not collected its exit status.",tags:["process"]},{id:"q-057",q:"What is an orphan process",a:"An orphan is a process whose parent ended. It gets adopted by a system process.",tags:["process"]},{id:"q-058",q:"What is fork",a:"Fork creates a new process by duplicating the current process. The child starts as a copy.",tags:["process"]},{id:"q-059",q:"What is exec",a:"Exec replaces current process image with a new program while keeping same process id.",tags:["process"]},{id:"q-060",q:"Kernel module",a:"A kernel module is a loadable component that extends kernel functionality like adding a driver.",tags:["kernel"]},{id:"q-061",q:"Monolithic kernel",a:"Monolithic kernel runs most OS services in kernel space for speed, but failures can be more dangerous.",tags:["kernel"]},{id:"q-062",q:"Microkernel",a:"Microkernel keeps minimal core in kernel and runs many services in user space for isolation.",tags:["kernel"]},{id:"q-063",q:"Hybrid kernel",a:"Hybrid mixes both. Some services stay in kernel for performance, while keeping modular design ideas.",tags:["kernel"]},{id:"q-064",q:"What is a device driver",a:"A driver is software that lets OS communicate with specific hardware in a safe and standard way.",tags:["io","kernel"]},{id:"q-065",q:"What is DMA",a:"DMA lets devices transfer data to or from memory without CPU moving each byte.",tags:["io","performance"]},{id:"q-066",q:"What is polling",a:"Polling is repeatedly checking device status. It wastes CPU compared to interrupts in many cases.",tags:["io"]},{id:"q-067",q:"What is spooling",a:"Spooling queues I O output like print jobs so devices process tasks sequentially.",tags:["io"]},{id:"q-068",q:"What is a buffer cache",a:"Buffer cache stores disk blocks in memory to speed up repeated reads and improve I O performance.",tags:["io","filesystem","performance"]},{id:"q-069",q:"What is an LRU page replacement idea",a:"LRU replaces the page that has not been used for the longest time, approximating best future behavior.",tags:["memory"]},{id:"q-070",q:"What is Belady anomaly",a:"In FIFO replacement, adding more frames can increase page faults. That is Belady anomaly.",tags:["memory"]},{id:"q-071",q:"What is a scheduler time quantum",a:"Time quantum is fixed CPU time slice given to a task in Round Robin before preemption.",tags:["scheduling"]},{id:"q-072",q:"Convoy effect",a:"Convoy effect is when one long job delays many short jobs in FCFS, increasing average waiting time.",tags:["scheduling"]},{id:"q-073",q:"What is aging in scheduling",a:"Aging gradually increases priority of waiting tasks to reduce starvation.",tags:["scheduling"]},{id:"q-074",q:"What is a ready queue",a:"Ready queue holds processes that are ready to run and are waiting for CPU.",tags:["process","scheduling"]},{id:"q-075",q:"What is a wait queue",a:"Wait queue holds processes blocked on I O or other events until the event completes.",tags:["process","io"]},{id:"q-076",q:"What is a spinlock",a:"A spinlock is a lock where thread keeps checking in a loop. Good only for very short waits.",tags:["sync","performance"]},{id:"q-077",q:"Semaphore types",a:"Binary semaphore acts like a lock. Counting semaphore controls access to multiple identical resources.",tags:["sync"]},{id:"q-078",q:"Condition variable use",a:"Condition variable lets threads sleep until a condition is true, used with a mutex.",tags:["sync"]},{id:"q-079",q:"What is priority inversion",a:"Low priority task holds a lock needed by high priority task, causing high priority to wait.",tags:["sync","scheduling"]},{id:"q-080",q:"How to reduce priority inversion",a:"Use priority inheritance or priority ceiling protocols so lock holder runs sooner.",tags:["sync","scheduling"]},{id:"q-081",q:"What is memory protection",a:"Memory protection prevents one process from accessing memory of another using hardware and OS checks.",tags:["memory","security"]},{id:"q-082",q:"What is address translation",a:"Address translation converts virtual address to physical address using page tables and TLB.",tags:["memory"]},{id:"q-083",q:"What is swapping",a:"Swapping moves whole processes or pages to disk to free RAM, then brings them back when needed.",tags:["memory"]},{id:"q-084",q:"Demand paging",a:"Demand paging loads pages into memory only when they are actually accessed.",tags:["memory"]},{id:"q-085",q:"What is segmentation fault",a:"It is an invalid memory access detected by hardware memory protection, OS terminates the program.",tags:["memory"]},{id:"q-086",q:"File allocation methods",a:"Common methods are contiguous, linked, and indexed allocation, each with tradeoffs.",tags:["filesystem"]},{id:"q-087",q:"Why indexing helps in file systems",a:"Indexing allows direct access to blocks without scanning a linked list, improving random access.",tags:["filesystem","performance"]},{id:"q-088",q:"Disk scheduling SCAN idea",a:"SCAN moves head in one direction servicing requests, then reverses, like an elevator.",tags:["io"]},{id:"q-089",q:"Disk scheduling C SCAN idea",a:"C SCAN services requests in one direction only, then jumps back to start, giving uniform wait times.",tags:["io"]},{id:"q-090",q:"What is a bootloader",a:"Bootloader starts the system by loading the kernel into memory and transferring control to it.",tags:["basics","kernel"]},{id:"q-091",q:"What is a kernel panic",a:"Kernel panic is when the kernel detects a fatal error and stops to avoid further damage or corruption.",tags:["kernel"]},{id:"q-092",q:"Why do we need interrupts",a:"Interrupts let CPU respond to events like I O completion without wasting time polling devices.",tags:["io"]},{id:"q-093",q:"What is multitasking",a:"Multitasking runs multiple tasks by rapidly switching CPU between them, giving illusion of parallelism.",tags:["basics","scheduling"]},{id:"q-094",q:"What is multiprocessing",a:"Multiprocessing uses multiple CPU cores to run tasks truly in parallel.",tags:["basics","performance"]},{id:"q-095",q:"What is multithreading",a:"Multithreading runs multiple threads inside a process to improve responsiveness and utilize cores.",tags:["thread","performance"]},{id:"q-096",q:"Why locks reduce performance",a:"Locks serialize work and add waiting. Too many locks can cause contention and context switches.",tags:["sync","performance"]},{id:"q-097",q:"What is a critical resource",a:"A critical resource is shared data or device that must be accessed in a controlled way.",tags:["sync","basics"]},{id:"q-098",q:"What is the purpose of system calls",a:"System calls provide a safe interface for programs to request privileged OS operations.",tags:["kernel"]},{id:"q-099",q:"Why OS uses protection rings",a:"Protection rings limit damage by isolating user code from privileged kernel operations.",tags:["security","kernel"]},{id:"q-100",q:"Best quick way to answer OS questions",a:"Identify the resource involved - CPU, memory, disk, device - then explain what the kernel does to manage it.",tags:["basics"]}],yx=()=>{var X;const[o,c]=ne.useState(""),[l,p]=ne.useState("all"),[u,x]=ne.useState(((X=js[0])==null?void 0:X.id)||"q-001"),k=ne.useMemo(()=>{const I=new Set;return js.forEach(_=>{(_.tags||[]).forEach($=>I.add($))}),["all",...Array.from(I).sort((_,$)=>_.localeCompare($))]},[]),P=ne.useMemo(()=>{const I=o.trim().toLowerCase();return js.filter(_=>(l==="all"?!0:(_.tags||[]).includes(l))?I?`${_.q} ${_.a} ${(_.tags||[]).join(" ")}`.toLowerCase().includes(I):!0:!1)},[o,l]),C=P.length,z=js.length,W=()=>c(""),A=()=>p("all"),V=I=>{x(_=>_===I?"":I)};return t.jsxs(vx.Wrapper,{id:"must-know-qna",children:[t.jsxs("div",{className:"top",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:"Must Know Interview QnA"}),t.jsxs("div",{className:"countPill",title:"Shown - Total",children:[t.jsx(Rf,{}),t.jsxs("span",{className:"count",children:[C," - ",z]})]})]}),t.jsx("p",{className:"sub",children:"Short, direct answers. Use search and tag filter to revise fast."}),t.jsxs("div",{className:"controls",children:[t.jsxs("div",{className:"search",children:[t.jsx("span",{className:"leftIcon",children:t.jsx(cp,{})}),t.jsx("input",{value:o,onChange:I=>c(I.target.value),placeholder:"Search questions, answers, tags","aria-label":"Search QnA"}),o.trim()&&t.jsx("button",{type:"button",className:"clearBtn",onClick:W,"aria-label":"Clear search",title:"Clear search",children:t.jsx(_u,{})})]}),t.jsxs("div",{className:"filter",children:[t.jsx("span",{className:"leftIcon",children:t.jsx(Ef,{})}),t.jsx("select",{value:l,onChange:I=>p(I.target.value),"aria-label":"Filter by topic",children:k.map(I=>t.jsx("option",{value:I,children:I},I))}),l!=="all"&&t.jsx("button",{type:"button",className:"clearBtn",onClick:A,"aria-label":"Clear filter",title:"Clear filter",children:t.jsx(_u,{})})]})]})]}),t.jsxs("div",{className:"list",children:[P.length===0&&t.jsxs("div",{className:"empty",children:[t.jsx("div",{className:"emptyTitle",children:"No matches"}),t.jsx("div",{className:"emptySub",children:"Try a different keyword or reset the filter."}),t.jsxs("div",{className:"emptyBtns",children:[t.jsx("button",{type:"button",onClick:W,children:"Clear search"}),t.jsx("button",{type:"button",onClick:A,children:"Reset filter"})]})]}),P.map(I=>{const _=u===I.id;return t.jsxs("div",{className:"qa",children:[t.jsxs("button",{type:"button",className:"qRow",onClick:()=>V(I.id),"aria-expanded":_,children:[t.jsxs("div",{className:"qLeft",children:[t.jsx("span",{className:"qid",children:I.id}),t.jsx("span",{className:"qText",children:I.q})]}),t.jsx("span",{className:"qRight",children:_?t.jsx(Ve,{}):t.jsx($e,{})})]}),_&&t.jsxs("div",{className:"aBlock",children:[t.jsx("div",{className:"aText",children:I.a}),!!(I.tags||[]).length&&t.jsx("div",{className:"tags",children:(I.tags||[]).map($=>t.jsx("button",{type:"button",className:`tag ${l===$?"active":""}`,onClick:()=>p($),title:`Filter by ${$}`,children:$},$))})]})]},I.id)})]})]})},jx=()=>t.jsxs(Da.Wrapper,{children:[t.jsx(Da.Header,{children:t.jsx(Hf,{})}),t.jsxs(Da.Main,{children:[t.jsxs("div",{className:"contentWrapper",children:[t.jsx(Qf,{}),t.jsx(Yf,{}),t.jsx(Jf,{}),t.jsx(ex,{}),t.jsx(nx,{}),t.jsx(sx,{}),t.jsx(ax,{}),t.jsx(cx,{}),t.jsx(ux,{}),t.jsx(mx,{}),t.jsx(fx,{}),t.jsx(gx,{}),t.jsx(yx,{})]}),t.jsx("div",{className:"footerWrapper",children:t.jsx(Vf,{})})]})]});fh.createRoot(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(jx,{})}));
