(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))m(u);new MutationObserver(u=>{for(const x of u)if(x.type==="childList")for(const b of x.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&m(b)}).observe(document,{childList:!0,subtree:!0});function l(u){const x={};return u.integrity&&(x.integrity=u.integrity),u.referrerPolicy&&(x.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?x.credentials="include":u.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function m(u){if(u.ep)return;u.ep=!0;const x=l(u);fetch(u.href,x)}})();function sh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Oa={exports:{}},Xn={},La={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function oh(){if(Jd)return ne;Jd=1;var o=Symbol.for("react.element"),d=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),b=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),M=Symbol.iterator;function R(g){return g===null||typeof g!="object"?null:(g=M&&g[M]||g["@@iterator"],typeof g=="function"?g:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,B={};function H(g,w,J){this.props=g,this.context=w,this.refs=B,this.updater=J||U}H.prototype.isReactComponent={},H.prototype.setState=function(g,w){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,w,"setState")},H.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function ue(){}ue.prototype=H.prototype;function ae(g,w,J){this.props=g,this.context=w,this.refs=B,this.updater=J||U}var se=ae.prototype=new ue;se.constructor=ae,_(se,H.prototype),se.isPureReactComponent=!0;var re=Array.isArray,pe=Object.prototype.hasOwnProperty,X={current:null},Q={key:!0,ref:!0,__self:!0,__source:!0};function Ee(g,w,J){var Z,ie={},te=null,me=null;if(w!=null)for(Z in w.ref!==void 0&&(me=w.ref),w.key!==void 0&&(te=""+w.key),w)pe.call(w,Z)&&!Q.hasOwnProperty(Z)&&(ie[Z]=w[Z]);var oe=arguments.length-2;if(oe===1)ie.children=J;else if(1<oe){for(var ce=Array(oe),Fe=0;Fe<oe;Fe++)ce[Fe]=arguments[Fe+2];ie.children=ce}if(g&&g.defaultProps)for(Z in oe=g.defaultProps,oe)ie[Z]===void 0&&(ie[Z]=oe[Z]);return{$$typeof:o,type:g,key:te,ref:me,props:ie,_owner:X.current}}function sr(g,w){return{$$typeof:o,type:g.type,key:w,ref:g.ref,props:g.props,_owner:g._owner}}function Nr(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function Br(g){var w={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(J){return w[J]})}var pr=/\/+/g;function Ke(g,w){return typeof g=="object"&&g!==null&&g.key!=null?Br(""+g.key):w.toString(36)}function or(g,w,J,Z,ie){var te=typeof g;(te==="undefined"||te==="boolean")&&(g=null);var me=!1;if(g===null)me=!0;else switch(te){case"string":case"number":me=!0;break;case"object":switch(g.$$typeof){case o:case d:me=!0}}if(me)return me=g,ie=ie(me),g=Z===""?"."+Ke(me,0):Z,re(ie)?(J="",g!=null&&(J=g.replace(pr,"$&/")+"/"),or(ie,w,J,"",function(Fe){return Fe})):ie!=null&&(Nr(ie)&&(ie=sr(ie,J+(!ie.key||me&&me.key===ie.key?"":(""+ie.key).replace(pr,"$&/")+"/")+g)),w.push(ie)),1;if(me=0,Z=Z===""?".":Z+":",re(g))for(var oe=0;oe<g.length;oe++){te=g[oe];var ce=Z+Ke(te,oe);me+=or(te,w,J,ce,ie)}else if(ce=R(g),typeof ce=="function")for(g=ce.call(g),oe=0;!(te=g.next()).done;)te=te.value,ce=Z+Ke(te,oe++),me+=or(te,w,J,ce,ie);else if(te==="object")throw w=String(g),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return me}function mr(g,w,J){if(g==null)return g;var Z=[],ie=0;return or(g,Z,"","",function(te){return w.call(J,te,ie++)}),Z}function De(g){if(g._status===-1){var w=g._result;w=w(),w.then(function(J){(g._status===0||g._status===-1)&&(g._status=1,g._result=J)},function(J){(g._status===0||g._status===-1)&&(g._status=2,g._result=J)}),g._status===-1&&(g._status=0,g._result=w)}if(g._status===1)return g._result.default;throw g._result}var xe={current:null},P={transition:null},D={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:P,ReactCurrentOwner:X};function O(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:mr,forEach:function(g,w,J){mr(g,function(){w.apply(this,arguments)},J)},count:function(g){var w=0;return mr(g,function(){w++}),w},toArray:function(g){return mr(g,function(w){return w})||[]},only:function(g){if(!Nr(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ne.Component=H,ne.Fragment=l,ne.Profiler=u,ne.PureComponent=ae,ne.StrictMode=m,ne.Suspense=T,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,ne.act=O,ne.cloneElement=function(g,w,J){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var Z=_({},g.props),ie=g.key,te=g.ref,me=g._owner;if(w!=null){if(w.ref!==void 0&&(te=w.ref,me=X.current),w.key!==void 0&&(ie=""+w.key),g.type&&g.type.defaultProps)var oe=g.type.defaultProps;for(ce in w)pe.call(w,ce)&&!Q.hasOwnProperty(ce)&&(Z[ce]=w[ce]===void 0&&oe!==void 0?oe[ce]:w[ce])}var ce=arguments.length-2;if(ce===1)Z.children=J;else if(1<ce){oe=Array(ce);for(var Fe=0;Fe<ce;Fe++)oe[Fe]=arguments[Fe+2];Z.children=oe}return{$$typeof:o,type:g.type,key:ie,ref:te,props:Z,_owner:me}},ne.createContext=function(g){return g={$$typeof:b,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:x,_context:g},g.Consumer=g},ne.createElement=Ee,ne.createFactory=function(g){var w=Ee.bind(null,g);return w.type=g,w},ne.createRef=function(){return{current:null}},ne.forwardRef=function(g){return{$$typeof:z,render:g}},ne.isValidElement=Nr,ne.lazy=function(g){return{$$typeof:q,_payload:{_status:-1,_result:g},_init:De}},ne.memo=function(g,w){return{$$typeof:E,type:g,compare:w===void 0?null:w}},ne.startTransition=function(g){var w=P.transition;P.transition={};try{g()}finally{P.transition=w}},ne.unstable_act=O,ne.useCallback=function(g,w){return xe.current.useCallback(g,w)},ne.useContext=function(g){return xe.current.useContext(g)},ne.useDebugValue=function(){},ne.useDeferredValue=function(g){return xe.current.useDeferredValue(g)},ne.useEffect=function(g,w){return xe.current.useEffect(g,w)},ne.useId=function(){return xe.current.useId()},ne.useImperativeHandle=function(g,w,J){return xe.current.useImperativeHandle(g,w,J)},ne.useInsertionEffect=function(g,w){return xe.current.useInsertionEffect(g,w)},ne.useLayoutEffect=function(g,w){return xe.current.useLayoutEffect(g,w)},ne.useMemo=function(g,w){return xe.current.useMemo(g,w)},ne.useReducer=function(g,w,J){return xe.current.useReducer(g,w,J)},ne.useRef=function(g){return xe.current.useRef(g)},ne.useState=function(g){return xe.current.useState(g)},ne.useSyncExternalStore=function(g,w,J){return xe.current.useSyncExternalStore(g,w,J)},ne.useTransition=function(){return xe.current.useTransition()},ne.version="18.3.1",ne}var Zd;function Ja(){return Zd||(Zd=1,La.exports=oh()),La.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eu;function ah(){if(eu)return Xn;eu=1;var o=Ja(),d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,u=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function b(z,T,E){var q,M={},R=null,U=null;E!==void 0&&(R=""+E),T.key!==void 0&&(R=""+T.key),T.ref!==void 0&&(U=T.ref);for(q in T)m.call(T,q)&&!x.hasOwnProperty(q)&&(M[q]=T[q]);if(z&&z.defaultProps)for(q in T=z.defaultProps,T)M[q]===void 0&&(M[q]=T[q]);return{$$typeof:d,type:z,key:R,ref:U,props:M,_owner:u.current}}return Xn.Fragment=l,Xn.jsx=b,Xn.jsxs=b,Xn}var ru;function lh(){return ru||(ru=1,Oa.exports=ah()),Oa.exports}var t=lh(),hs={},Ia={exports:{}},tr={},Ma={exports:{}},Ra={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu;function ch(){return tu||(tu=1,(function(o){function d(P,D){var O=P.length;P.push(D);e:for(;0<O;){var g=O-1>>>1,w=P[g];if(0<u(w,D))P[g]=D,P[O]=w,O=g;else break e}}function l(P){return P.length===0?null:P[0]}function m(P){if(P.length===0)return null;var D=P[0],O=P.pop();if(O!==D){P[0]=O;e:for(var g=0,w=P.length,J=w>>>1;g<J;){var Z=2*(g+1)-1,ie=P[Z],te=Z+1,me=P[te];if(0>u(ie,O))te<w&&0>u(me,ie)?(P[g]=me,P[te]=O,g=te):(P[g]=ie,P[Z]=O,g=Z);else if(te<w&&0>u(me,O))P[g]=me,P[te]=O,g=te;else break e}}return D}function u(P,D){var O=P.sortIndex-D.sortIndex;return O!==0?O:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var x=performance;o.unstable_now=function(){return x.now()}}else{var b=Date,z=b.now();o.unstable_now=function(){return b.now()-z}}var T=[],E=[],q=1,M=null,R=3,U=!1,_=!1,B=!1,H=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(P){for(var D=l(E);D!==null;){if(D.callback===null)m(E);else if(D.startTime<=P)m(E),D.sortIndex=D.expirationTime,d(T,D);else break;D=l(E)}}function re(P){if(B=!1,se(P),!_)if(l(T)!==null)_=!0,De(pe);else{var D=l(E);D!==null&&xe(re,D.startTime-P)}}function pe(P,D){_=!1,B&&(B=!1,ue(Ee),Ee=-1),U=!0;var O=R;try{for(se(D),M=l(T);M!==null&&(!(M.expirationTime>D)||P&&!Br());){var g=M.callback;if(typeof g=="function"){M.callback=null,R=M.priorityLevel;var w=g(M.expirationTime<=D);D=o.unstable_now(),typeof w=="function"?M.callback=w:M===l(T)&&m(T),se(D)}else m(T);M=l(T)}if(M!==null)var J=!0;else{var Z=l(E);Z!==null&&xe(re,Z.startTime-D),J=!1}return J}finally{M=null,R=O,U=!1}}var X=!1,Q=null,Ee=-1,sr=5,Nr=-1;function Br(){return!(o.unstable_now()-Nr<sr)}function pr(){if(Q!==null){var P=o.unstable_now();Nr=P;var D=!0;try{D=Q(!0,P)}finally{D?Ke():(X=!1,Q=null)}}else X=!1}var Ke;if(typeof ae=="function")Ke=function(){ae(pr)};else if(typeof MessageChannel!="undefined"){var or=new MessageChannel,mr=or.port2;or.port1.onmessage=pr,Ke=function(){mr.postMessage(null)}}else Ke=function(){H(pr,0)};function De(P){Q=P,X||(X=!0,Ke())}function xe(P,D){Ee=H(function(){P(o.unstable_now())},D)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_continueExecution=function(){_||U||(_=!0,De(pe))},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):sr=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return R},o.unstable_getFirstCallbackNode=function(){return l(T)},o.unstable_next=function(P){switch(R){case 1:case 2:case 3:var D=3;break;default:D=R}var O=R;R=D;try{return P()}finally{R=O}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var O=R;R=P;try{return D()}finally{R=O}},o.unstable_scheduleCallback=function(P,D,O){var g=o.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?g+O:g):O=g,P){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=O+w,P={id:q++,callback:D,priorityLevel:P,startTime:O,expirationTime:w,sortIndex:-1},O>g?(P.sortIndex=O,d(E,P),l(T)===null&&P===l(E)&&(B?(ue(Ee),Ee=-1):B=!0,xe(re,O-g))):(P.sortIndex=w,d(T,P),_||U||(_=!0,De(pe))),P},o.unstable_shouldYield=Br,o.unstable_wrapCallback=function(P){var D=R;return function(){var O=R;R=D;try{return P.apply(this,arguments)}finally{R=O}}}})(Ra)),Ra}var nu;function dh(){return nu||(nu=1,Ma.exports=ch()),Ma.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu;function uh(){if(iu)return tr;iu=1;var o=Ja(),d=dh();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,u={};function x(e,r){b(e,r),b(e+"Capture",r)}function b(e,r){for(u[e]=r,e=0;e<r.length;e++)m.add(r[e])}var z=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q={},M={};function R(e){return T.call(M,e)?!0:T.call(q,e)?!1:E.test(e)?M[e]=!0:(q[e]=!0,!1)}function U(e,r,n,i){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,r,n,i){if(r===null||typeof r=="undefined"||U(e,r,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function B(e,r,n,i,s,a,c){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=c}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];H[r]=new B(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var ue=/[\-:]([a-z])/g;function ae(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(ue,ae);H[r]=new B(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(ue,ae);H[r]=new B(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(ue,ae);H[r]=new B(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function se(e,r,n,i){var s=H.hasOwnProperty(r)?H[r]:null;(s!==null?s.type!==0:i||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(_(r,n,s,i)&&(n=null),i||s===null?R(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(r=s.attributeName,i=s.attributeNamespace,n===null?e.removeAttribute(r):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?e.setAttributeNS(i,r,n):e.setAttribute(r,n))))}var re=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),X=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),sr=Symbol.for("react.profiler"),Nr=Symbol.for("react.provider"),Br=Symbol.for("react.context"),pr=Symbol.for("react.forward_ref"),Ke=Symbol.for("react.suspense"),or=Symbol.for("react.suspense_list"),mr=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),P=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,g;function w(e){if(g===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);g=r&&r[1]||""}return`
`+g+e}var J=!1;function Z(e,r){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(j){var i=j}Reflect.construct(e,[],r)}else{try{r.call()}catch(j){i=j}e.call(r.prototype)}else{try{throw Error()}catch(j){i=j}e()}}catch(j){if(j&&i&&typeof j.stack=="string"){for(var s=j.stack.split(`
`),a=i.stack.split(`
`),c=s.length-1,p=a.length-1;1<=c&&0<=p&&s[c]!==a[p];)p--;for(;1<=c&&0<=p;c--,p--)if(s[c]!==a[p]){if(c!==1||p!==1)do if(c--,p--,0>p||s[c]!==a[p]){var h=`
`+s[c].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=c&&0<=p);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w(e):""}function ie(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case X:return"Portal";case sr:return"Profiler";case Ee:return"StrictMode";case Ke:return"Suspense";case or:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Br:return(e.displayName||"Context")+".Consumer";case Nr:return(e._context.displayName||"Context")+".Provider";case pr:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mr:return r=e.displayName||null,r!==null?r:te(e.type)||"Memo";case De:r=e._payload,e=e._init;try{return te(e(r))}catch{}}return null}function me(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(r);case 8:return r===Ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function oe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Fe(e){var r=ce(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),i=""+e[r];if(!e.hasOwnProperty(r)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return s.call(this)},set:function(c){i=""+c,a.call(this,c)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(c){i=""+c},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Wr(e){e._valueTracker||(e._valueTracker=Fe(e))}function br(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),i="";return e&&(i=ce(e)?e.checked?"true":"false":e.value),e=i,e!==n?(r.setValue(e),!0):!1}function si(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fs(e,r){var n=r.checked;return O({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function sl(e,r){var n=r.defaultValue==null?"":r.defaultValue,i=r.checked!=null?r.checked:r.defaultChecked;n=oe(r.value!=null?r.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ol(e,r){r=r.checked,r!=null&&se(e,"checked",r,!1)}function As(e,r){ol(e,r);var n=oe(r.value),i=r.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Bs(e,r.type,n):r.hasOwnProperty("defaultValue")&&Bs(e,r.type,oe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function al(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var i=r.type;if(!(i!=="submit"&&i!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bs(e,r,n){(r!=="number"||si(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pn=Array.isArray;function Lt(e,r,n,i){if(e=e.options,r){r={};for(var s=0;s<n.length;s++)r["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=r.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+oe(n),r=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}r!==null||e[s].disabled||(r=e[s])}r!==null&&(r.selected=!0)}}function Ws(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return O({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ll(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(l(92));if(pn(n)){if(1<n.length)throw Error(l(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:oe(n)}}function cl(e,r){var n=oe(r.value),i=oe(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function dl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function ul(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qs(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?ul(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,pl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,n,i,s){MSApp.execUnsafeLocalFunction(function(){return e(r,n,i,s)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function mn(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cp=["Webkit","ms","Moz","O"];Object.keys(hn).forEach(function(e){cp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),hn[r]=hn[e]})});function ml(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||hn.hasOwnProperty(e)&&hn[e]?(""+r).trim():r+"px"}function hl(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=ml(n,r[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,s):e[n]=s}}var dp=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ds(e,r){if(r){if(dp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function Us(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hs=null;function $s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,It=null,Mt=null;function fl(e){if(e=_n(e)){if(typeof Vs!="function")throw Error(l(280));var r=e.stateNode;r&&(r=zi(r),Vs(e.stateNode,e.type,r))}}function xl(e){It?Mt?Mt.push(e):Mt=[e]:It=e}function gl(){if(It){var e=It,r=Mt;if(Mt=It=null,fl(e),r)for(e=0;e<r.length;e++)fl(r[e])}}function vl(e,r){return e(r)}function yl(){}var Ks=!1;function jl(e,r,n){if(Ks)return e(r,n);Ks=!0;try{return vl(e,r,n)}finally{Ks=!1,(It!==null||Mt!==null)&&(yl(),gl())}}function fn(e,r){var n=e.stateNode;if(n===null)return null;var i=zi(n);if(i===null)return null;n=i[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,r,typeof n));return n}var Qs=!1;if(z)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{Qs=!1}function up(e,r,n,i,s,a,c,p,h){var j=Array.prototype.slice.call(arguments,3);try{r.apply(n,j)}catch(N){this.onError(N)}}var gn=!1,ai=null,li=!1,Gs=null,pp={onError:function(e){gn=!0,ai=e}};function mp(e,r,n,i,s,a,c,p,h){gn=!1,ai=null,up.apply(pp,arguments)}function hp(e,r,n,i,s,a,c,p,h){if(mp.apply(this,arguments),gn){if(gn){var j=ai;gn=!1,ai=null}else throw Error(l(198));li||(li=!0,Gs=j)}}function xt(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function wl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function kl(e){if(xt(e)!==e)throw Error(l(188))}function fp(e){var r=e.alternate;if(!r){if(r=xt(e),r===null)throw Error(l(188));return r!==e?null:e}for(var n=e,i=r;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return kl(s),e;if(a===i)return kl(s),r;a=a.sibling}throw Error(l(188))}if(n.return!==i.return)n=s,i=a;else{for(var c=!1,p=s.child;p;){if(p===n){c=!0,n=s,i=a;break}if(p===i){c=!0,i=s,n=a;break}p=p.sibling}if(!c){for(p=a.child;p;){if(p===n){c=!0,n=a,i=s;break}if(p===i){c=!0,i=a,n=s;break}p=p.sibling}if(!c)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:r}function Nl(e){return e=fp(e),e!==null?bl(e):null}function bl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=bl(e);if(r!==null)return r;e=e.sibling}return null}var Sl=d.unstable_scheduleCallback,Cl=d.unstable_cancelCallback,xp=d.unstable_shouldYield,gp=d.unstable_requestPaint,Se=d.unstable_now,vp=d.unstable_getCurrentPriorityLevel,Ys=d.unstable_ImmediatePriority,Tl=d.unstable_UserBlockingPriority,ci=d.unstable_NormalPriority,yp=d.unstable_LowPriority,Pl=d.unstable_IdlePriority,di=null,Ir=null;function jp(e){if(Ir&&typeof Ir.onCommitFiberRoot=="function")try{Ir.onCommitFiberRoot(di,e,void 0,(e.current.flags&128)===128)}catch{}}var Sr=Math.clz32?Math.clz32:Np,wp=Math.log,kp=Math.LN2;function Np(e){return e>>>=0,e===0?32:31-(wp(e)/kp|0)|0}var ui=64,pi=4194304;function vn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mi(e,r){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,a=e.pingedLanes,c=n&268435455;if(c!==0){var p=c&~s;p!==0?i=vn(p):(a&=c,a!==0&&(i=vn(a)))}else c=n&~s,c!==0?i=vn(c):a!==0&&(i=vn(a));if(i===0)return 0;if(r!==0&&r!==i&&(r&s)===0&&(s=i&-i,a=r&-r,s>=a||s===16&&(a&4194240)!==0))return r;if((i&4)!==0&&(i|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=i;0<r;)n=31-Sr(r),s=1<<n,i|=e[n],r&=~s;return i}function bp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sp(e,r){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-Sr(a),p=1<<c,h=s[c];h===-1?((p&n)===0||(p&i)!==0)&&(s[c]=bp(p,r)):h<=r&&(e.expiredLanes|=p),a&=~p}}function Xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zl(){var e=ui;return ui<<=1,(ui&4194240)===0&&(ui=64),e}function Js(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function yn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Sr(r),e[r]=n}function Cp(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Sr(n),a=1<<s;r[s]=0,i[s]=-1,e[s]=-1,n&=~a}}function Zs(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var i=31-Sr(n),s=1<<i;s&r|e[i]&r&&(e[i]|=r),n&=~s}}var fe=0;function El(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ol,eo,Ll,Il,Ml,ro=!1,hi=[],Yr=null,Xr=null,Jr=null,jn=new Map,wn=new Map,Zr=[],Tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rl(e,r){switch(e){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":jn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(r.pointerId)}}function kn(e,r,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},r!==null&&(r=_n(r),r!==null&&eo(r)),e):(e.eventSystemFlags|=i,r=e.targetContainers,s!==null&&r.indexOf(s)===-1&&r.push(s),e)}function Pp(e,r,n,i,s){switch(r){case"focusin":return Yr=kn(Yr,e,r,n,i,s),!0;case"dragenter":return Xr=kn(Xr,e,r,n,i,s),!0;case"mouseover":return Jr=kn(Jr,e,r,n,i,s),!0;case"pointerover":var a=s.pointerId;return jn.set(a,kn(jn.get(a)||null,e,r,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,wn.set(a,kn(wn.get(a)||null,e,r,n,i,s)),!0}return!1}function _l(e){var r=gt(e.target);if(r!==null){var n=xt(r);if(n!==null){if(r=n.tag,r===13){if(r=wl(n),r!==null){e.blockedOn=r,Ml(e.priority,function(){Ll(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fi(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=no(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Hs=i,n.target.dispatchEvent(i),Hs=null}else return r=_n(n),r!==null&&eo(r),e.blockedOn=n,!1;r.shift()}return!0}function Fl(e,r,n){fi(e)&&n.delete(r)}function zp(){ro=!1,Yr!==null&&fi(Yr)&&(Yr=null),Xr!==null&&fi(Xr)&&(Xr=null),Jr!==null&&fi(Jr)&&(Jr=null),jn.forEach(Fl),wn.forEach(Fl)}function Nn(e,r){e.blockedOn===r&&(e.blockedOn=null,ro||(ro=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,zp)))}function bn(e){function r(s){return Nn(s,e)}if(0<hi.length){Nn(hi[0],e);for(var n=1;n<hi.length;n++){var i=hi[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Yr!==null&&Nn(Yr,e),Xr!==null&&Nn(Xr,e),Jr!==null&&Nn(Jr,e),jn.forEach(r),wn.forEach(r),n=0;n<Zr.length;n++)i=Zr[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Zr.length&&(n=Zr[0],n.blockedOn===null);)_l(n),n.blockedOn===null&&Zr.shift()}var Rt=re.ReactCurrentBatchConfig,xi=!0;function Ep(e,r,n,i){var s=fe,a=Rt.transition;Rt.transition=null;try{fe=1,to(e,r,n,i)}finally{fe=s,Rt.transition=a}}function Op(e,r,n,i){var s=fe,a=Rt.transition;Rt.transition=null;try{fe=4,to(e,r,n,i)}finally{fe=s,Rt.transition=a}}function to(e,r,n,i){if(xi){var s=no(e,r,n,i);if(s===null)wo(e,r,i,gi,n),Rl(e,i);else if(Pp(s,e,r,n,i))i.stopPropagation();else if(Rl(e,i),r&4&&-1<Tp.indexOf(e)){for(;s!==null;){var a=_n(s);if(a!==null&&Ol(a),a=no(e,r,n,i),a===null&&wo(e,r,i,gi,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else wo(e,r,i,null,n)}}var gi=null;function no(e,r,n,i){if(gi=null,e=$s(i),e=gt(e),e!==null)if(r=xt(e),r===null)e=null;else if(n=r.tag,n===13){if(e=wl(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return gi=e,null}function Al(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vp()){case Ys:return 1;case Tl:return 4;case ci:case yp:return 16;case Pl:return 536870912;default:return 16}default:return 16}}var et=null,io=null,vi=null;function Bl(){if(vi)return vi;var e,r=io,n=r.length,i,s="value"in et?et.value:et.textContent,a=s.length;for(e=0;e<n&&r[e]===s[e];e++);var c=n-e;for(i=1;i<=c&&r[n-i]===s[a-i];i++);return vi=s.slice(e,1<i?1-i:void 0)}function yi(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function Wl(){return!1}function ar(e){function r(n,i,s,a,c){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ji:Wl,this.isPropagationStopped=Wl,this}return O(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),r}var _t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=ar(_t),Sn=O({},_t,{view:0,detail:0}),Lp=ar(Sn),oo,ao,Cn,wi=O({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cn&&(Cn&&e.type==="mousemove"?(oo=e.screenX-Cn.screenX,ao=e.screenY-Cn.screenY):ao=oo=0,Cn=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),ql=ar(wi),Ip=O({},wi,{dataTransfer:0}),Mp=ar(Ip),Rp=O({},Sn,{relatedTarget:0}),lo=ar(Rp),_p=O({},_t,{animationName:0,elapsedTime:0,pseudoElement:0}),Fp=ar(_p),Ap=O({},_t,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bp=ar(Ap),Wp=O({},_t,{data:0}),Dl=ar(Wp),qp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hp(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Up[e])?!!r[e]:!1}function co(){return Hp}var $p=O({},Sn,{key:function(e){if(e.key){var r=qp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:co,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vp=ar($p),Kp=O({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ul=ar(Kp),Qp=O({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:co}),Gp=ar(Qp),Yp=O({},_t,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xp=ar(Yp),Jp=O({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zp=ar(Jp),em=[9,13,27,32],uo=z&&"CompositionEvent"in window,Tn=null;z&&"documentMode"in document&&(Tn=document.documentMode);var rm=z&&"TextEvent"in window&&!Tn,Hl=z&&(!uo||Tn&&8<Tn&&11>=Tn),$l=" ",Vl=!1;function Kl(e,r){switch(e){case"keyup":return em.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ql(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function tm(e,r){switch(e){case"compositionend":return Ql(r);case"keypress":return r.which!==32?null:(Vl=!0,$l);case"textInput":return e=r.data,e===$l&&Vl?null:e;default:return null}}function nm(e,r){if(Ft)return e==="compositionend"||!uo&&Kl(e,r)?(e=Bl(),vi=io=et=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Hl&&r.locale!=="ko"?null:r.data;default:return null}}var im={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!im[e.type]:r==="textarea"}function Yl(e,r,n,i){xl(i),r=Ci(r,"onChange"),0<r.length&&(n=new so("onChange","change",null,n,i),e.push({event:n,listeners:r}))}var Pn=null,zn=null;function sm(e){hc(e,0)}function ki(e){var r=Dt(e);if(br(r))return e}function om(e,r){if(e==="change")return r}var Xl=!1;if(z){var po;if(z){var mo="oninput"in document;if(!mo){var Jl=document.createElement("div");Jl.setAttribute("oninput","return;"),mo=typeof Jl.oninput=="function"}po=mo}else po=!1;Xl=po&&(!document.documentMode||9<document.documentMode)}function Zl(){Pn&&(Pn.detachEvent("onpropertychange",ec),zn=Pn=null)}function ec(e){if(e.propertyName==="value"&&ki(zn)){var r=[];Yl(r,zn,e,$s(e)),jl(sm,r)}}function am(e,r,n){e==="focusin"?(Zl(),Pn=r,zn=n,Pn.attachEvent("onpropertychange",ec)):e==="focusout"&&Zl()}function lm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(zn)}function cm(e,r){if(e==="click")return ki(r)}function dm(e,r){if(e==="input"||e==="change")return ki(r)}function um(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Cr=typeof Object.is=="function"?Object.is:um;function En(e,r){if(Cr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),i=Object.keys(r);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!T.call(r,s)||!Cr(e[s],r[s]))return!1}return!0}function rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tc(e,r){var n=rc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=r&&i>=r)return{node:n,offset:r-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rc(n)}}function nc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?nc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function ic(){for(var e=window,r=si();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=si(e.document)}return r}function ho(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function pm(e){var r=ic(),n=e.focusedElem,i=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&nc(n.ownerDocument.documentElement,n)){if(i!==null&&ho(n)){if(r=i.start,e=i.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(i.start,s);i=i.end===void 0?a:Math.min(i.end,s),!e.extend&&a>i&&(s=i,i=a,a=s),s=tc(n,a);var c=tc(n,i);s&&c&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(r=r.createRange(),r.setStart(s.node,s.offset),e.removeAllRanges(),a>i?(e.addRange(r),e.extend(c.node,c.offset)):(r.setEnd(c.node,c.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mm=z&&"documentMode"in document&&11>=document.documentMode,At=null,fo=null,On=null,xo=!1;function sc(e,r,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xo||At==null||At!==si(i)||(i=At,"selectionStart"in i&&ho(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),On&&En(On,i)||(On=i,i=Ci(fo,"onSelect"),0<i.length&&(r=new so("onSelect","select",null,r,n),e.push({event:r,listeners:i}),r.target=At)))}function Ni(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Bt={animationend:Ni("Animation","AnimationEnd"),animationiteration:Ni("Animation","AnimationIteration"),animationstart:Ni("Animation","AnimationStart"),transitionend:Ni("Transition","TransitionEnd")},go={},oc={};z&&(oc=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function bi(e){if(go[e])return go[e];if(!Bt[e])return e;var r=Bt[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in oc)return go[e]=r[n];return e}var ac=bi("animationend"),lc=bi("animationiteration"),cc=bi("animationstart"),dc=bi("transitionend"),uc=new Map,pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(e,r){uc.set(e,r),x(r,[e])}for(var vo=0;vo<pc.length;vo++){var yo=pc[vo],hm=yo.toLowerCase(),fm=yo[0].toUpperCase()+yo.slice(1);rt(hm,"on"+fm)}rt(ac,"onAnimationEnd"),rt(lc,"onAnimationIteration"),rt(cc,"onAnimationStart"),rt("dblclick","onDoubleClick"),rt("focusin","onFocus"),rt("focusout","onBlur"),rt(dc,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),x("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),x("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),x("onBeforeInput",["compositionend","keypress","textInput","paste"]),x("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function mc(e,r,n){var i=e.type||"unknown-event";e.currentTarget=n,hp(i,r,void 0,e),e.currentTarget=null}function hc(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var a=void 0;if(r)for(var c=i.length-1;0<=c;c--){var p=i[c],h=p.instance,j=p.currentTarget;if(p=p.listener,h!==a&&s.isPropagationStopped())break e;mc(s,p,j),a=h}else for(c=0;c<i.length;c++){if(p=i[c],h=p.instance,j=p.currentTarget,p=p.listener,h!==a&&s.isPropagationStopped())break e;mc(s,p,j),a=h}}}if(li)throw e=Gs,li=!1,Gs=null,e}function ve(e,r){var n=r[To];n===void 0&&(n=r[To]=new Set);var i=e+"__bubble";n.has(i)||(fc(r,e,2,!1),n.add(i))}function jo(e,r,n){var i=0;r&&(i|=4),fc(n,e,i,r)}var Si="_reactListening"+Math.random().toString(36).slice(2);function In(e){if(!e[Si]){e[Si]=!0,m.forEach(function(n){n!=="selectionchange"&&(xm.has(n)||jo(n,!1,e),jo(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Si]||(r[Si]=!0,jo("selectionchange",!1,r))}}function fc(e,r,n,i){switch(Al(r)){case 1:var s=Ep;break;case 4:s=Op;break;default:s=to}n=s.bind(null,r,n,e),s=void 0,!Qs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(r,n,{capture:!0,passive:s}):e.addEventListener(r,n,!0):s!==void 0?e.addEventListener(r,n,{passive:s}):e.addEventListener(r,n,!1)}function wo(e,r,n,i,s){var a=i;if((r&1)===0&&(r&2)===0&&i!==null)e:for(;;){if(i===null)return;var c=i.tag;if(c===3||c===4){var p=i.stateNode.containerInfo;if(p===s||p.nodeType===8&&p.parentNode===s)break;if(c===4)for(c=i.return;c!==null;){var h=c.tag;if((h===3||h===4)&&(h=c.stateNode.containerInfo,h===s||h.nodeType===8&&h.parentNode===s))return;c=c.return}for(;p!==null;){if(c=gt(p),c===null)return;if(h=c.tag,h===5||h===6){i=a=c;continue e}p=p.parentNode}}i=i.return}jl(function(){var j=a,N=$s(n),S=[];e:{var k=uc.get(e);if(k!==void 0){var L=so,F=e;switch(e){case"keypress":if(yi(n)===0)break e;case"keydown":case"keyup":L=Vp;break;case"focusin":F="focus",L=lo;break;case"focusout":F="blur",L=lo;break;case"beforeblur":case"afterblur":L=lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Gp;break;case ac:case lc:case cc:L=Fp;break;case dc:L=Xp;break;case"scroll":L=Lp;break;case"wheel":L=Zp;break;case"copy":case"cut":case"paste":L=Bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Ul}var A=(r&4)!==0,Ce=!A&&e==="scroll",v=A?k!==null?k+"Capture":null:k;A=[];for(var f=j,y;f!==null;){y=f;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,v!==null&&(C=fn(f,v),C!=null&&A.push(Mn(f,C,y)))),Ce)break;f=f.return}0<A.length&&(k=new L(k,F,null,n,N),S.push({event:k,listeners:A}))}}if((r&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",k&&n!==Hs&&(F=n.relatedTarget||n.fromElement)&&(gt(F)||F[qr]))break e;if((L||k)&&(k=N.window===N?N:(k=N.ownerDocument)?k.defaultView||k.parentWindow:window,L?(F=n.relatedTarget||n.toElement,L=j,F=F?gt(F):null,F!==null&&(Ce=xt(F),F!==Ce||F.tag!==5&&F.tag!==6)&&(F=null)):(L=null,F=j),L!==F)){if(A=ql,C="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(A=Ul,C="onPointerLeave",v="onPointerEnter",f="pointer"),Ce=L==null?k:Dt(L),y=F==null?k:Dt(F),k=new A(C,f+"leave",L,n,N),k.target=Ce,k.relatedTarget=y,C=null,gt(N)===j&&(A=new A(v,f+"enter",F,n,N),A.target=y,A.relatedTarget=Ce,C=A),Ce=C,L&&F)r:{for(A=L,v=F,f=0,y=A;y;y=Wt(y))f++;for(y=0,C=v;C;C=Wt(C))y++;for(;0<f-y;)A=Wt(A),f--;for(;0<y-f;)v=Wt(v),y--;for(;f--;){if(A===v||v!==null&&A===v.alternate)break r;A=Wt(A),v=Wt(v)}A=null}else A=null;L!==null&&xc(S,k,L,A,!1),F!==null&&Ce!==null&&xc(S,Ce,F,A,!0)}}e:{if(k=j?Dt(j):window,L=k.nodeName&&k.nodeName.toLowerCase(),L==="select"||L==="input"&&k.type==="file")var W=om;else if(Gl(k))if(Xl)W=dm;else{W=lm;var $=am}else(L=k.nodeName)&&L.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(W=cm);if(W&&(W=W(e,j))){Yl(S,W,n,N);break e}$&&$(e,k,j),e==="focusout"&&($=k._wrapperState)&&$.controlled&&k.type==="number"&&Bs(k,"number",k.value)}switch($=j?Dt(j):window,e){case"focusin":(Gl($)||$.contentEditable==="true")&&(At=$,fo=j,On=null);break;case"focusout":On=fo=At=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,sc(S,n,N);break;case"selectionchange":if(mm)break;case"keydown":case"keyup":sc(S,n,N)}var V;if(uo)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Ft?Kl(e,n)&&(G="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(Hl&&n.locale!=="ko"&&(Ft||G!=="onCompositionStart"?G==="onCompositionEnd"&&Ft&&(V=Bl()):(et=N,io="value"in et?et.value:et.textContent,Ft=!0)),$=Ci(j,G),0<$.length&&(G=new Dl(G,e,null,n,N),S.push({event:G,listeners:$}),V?G.data=V:(V=Ql(n),V!==null&&(G.data=V)))),(V=rm?tm(e,n):nm(e,n))&&(j=Ci(j,"onBeforeInput"),0<j.length&&(N=new Dl("onBeforeInput","beforeinput",null,n,N),S.push({event:N,listeners:j}),N.data=V))}hc(S,r)})}function Mn(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Ci(e,r){for(var n=r+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=fn(e,n),a!=null&&i.unshift(Mn(e,a,s)),a=fn(e,r),a!=null&&i.push(Mn(e,a,s))),e=e.return}return i}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xc(e,r,n,i,s){for(var a=r._reactName,c=[];n!==null&&n!==i;){var p=n,h=p.alternate,j=p.stateNode;if(h!==null&&h===i)break;p.tag===5&&j!==null&&(p=j,s?(h=fn(n,a),h!=null&&c.unshift(Mn(n,h,p))):s||(h=fn(n,a),h!=null&&c.push(Mn(n,h,p)))),n=n.return}c.length!==0&&e.push({event:r,listeners:c})}var gm=/\r\n?/g,vm=/\u0000|\uFFFD/g;function gc(e){return(typeof e=="string"?e:""+e).replace(gm,`
`).replace(vm,"")}function Ti(e,r,n){if(r=gc(r),gc(e)!==r&&n)throw Error(l(425))}function Pi(){}var ko=null,No=null;function bo(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var So=typeof setTimeout=="function"?setTimeout:void 0,ym=typeof clearTimeout=="function"?clearTimeout:void 0,vc=typeof Promise=="function"?Promise:void 0,jm=typeof queueMicrotask=="function"?queueMicrotask:typeof vc!="undefined"?function(e){return vc.resolve(null).then(e).catch(wm)}:So;function wm(e){setTimeout(function(){throw e})}function Co(e,r){var n=r,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){e.removeChild(s),bn(r);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);bn(r)}function tt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function yc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var qt=Math.random().toString(36).slice(2),Mr="__reactFiber$"+qt,Rn="__reactProps$"+qt,qr="__reactContainer$"+qt,To="__reactEvents$"+qt,km="__reactListeners$"+qt,Nm="__reactHandles$"+qt;function gt(e){var r=e[Mr];if(r)return r;for(var n=e.parentNode;n;){if(r=n[qr]||n[Mr]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=yc(e);e!==null;){if(n=e[Mr])return n;e=yc(e)}return r}e=n,n=e.parentNode}return null}function _n(e){return e=e[Mr]||e[qr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function zi(e){return e[Rn]||null}var Po=[],Ut=-1;function nt(e){return{current:e}}function ye(e){0>Ut||(e.current=Po[Ut],Po[Ut]=null,Ut--)}function ge(e,r){Ut++,Po[Ut]=e.current,e.current=r}var it={},Ue=nt(it),Xe=nt(!1),vt=it;function Ht(e,r){var n=e.type.contextTypes;if(!n)return it;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===r)return i.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=r[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),s}function Je(e){return e=e.childContextTypes,e!=null}function Ei(){ye(Xe),ye(Ue)}function jc(e,r,n){if(Ue.current!==it)throw Error(l(168));ge(Ue,r),ge(Xe,n)}function wc(e,r,n){var i=e.stateNode;if(r=r.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in r))throw Error(l(108,me(e)||"Unknown",s));return O({},n,i)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||it,vt=Ue.current,ge(Ue,e),ge(Xe,Xe.current),!0}function kc(e,r,n){var i=e.stateNode;if(!i)throw Error(l(169));n?(e=wc(e,r,vt),i.__reactInternalMemoizedMergedChildContext=e,ye(Xe),ye(Ue),ge(Ue,e)):ye(Xe),ge(Xe,n)}var Dr=null,Li=!1,zo=!1;function Nc(e){Dr===null?Dr=[e]:Dr.push(e)}function bm(e){Li=!0,Nc(e)}function st(){if(!zo&&Dr!==null){zo=!0;var e=0,r=fe;try{var n=Dr;for(fe=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Dr=null,Li=!1}catch(s){throw Dr!==null&&(Dr=Dr.slice(e+1)),Sl(Ys,st),s}finally{fe=r,zo=!1}}return null}var $t=[],Vt=0,Ii=null,Mi=0,hr=[],fr=0,yt=null,Ur=1,Hr="";function jt(e,r){$t[Vt++]=Mi,$t[Vt++]=Ii,Ii=e,Mi=r}function bc(e,r,n){hr[fr++]=Ur,hr[fr++]=Hr,hr[fr++]=yt,yt=e;var i=Ur;e=Hr;var s=32-Sr(i)-1;i&=~(1<<s),n+=1;var a=32-Sr(r)+s;if(30<a){var c=s-s%5;a=(i&(1<<c)-1).toString(32),i>>=c,s-=c,Ur=1<<32-Sr(r)+s|n<<s|i,Hr=a+e}else Ur=1<<a|n<<s|i,Hr=e}function Eo(e){e.return!==null&&(jt(e,1),bc(e,1,0))}function Oo(e){for(;e===Ii;)Ii=$t[--Vt],$t[Vt]=null,Mi=$t[--Vt],$t[Vt]=null;for(;e===yt;)yt=hr[--fr],hr[fr]=null,Hr=hr[--fr],hr[fr]=null,Ur=hr[--fr],hr[fr]=null}var lr=null,cr=null,we=!1,Tr=null;function Sc(e,r){var n=yr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Cc(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,lr=e,cr=tt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,lr=e,cr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=yt!==null?{id:Ur,overflow:Hr}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=yr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,lr=e,cr=null,!0):!1;default:return!1}}function Lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Io(e){if(we){var r=cr;if(r){var n=r;if(!Cc(e,r)){if(Lo(e))throw Error(l(418));r=tt(n.nextSibling);var i=lr;r&&Cc(e,r)?Sc(i,n):(e.flags=e.flags&-4097|2,we=!1,lr=e)}}else{if(Lo(e))throw Error(l(418));e.flags=e.flags&-4097|2,we=!1,lr=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lr=e}function Ri(e){if(e!==lr)return!1;if(!we)return Tc(e),we=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!bo(e.type,e.memoizedProps)),r&&(r=cr)){if(Lo(e))throw Pc(),Error(l(418));for(;r;)Sc(e,r),r=tt(r.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){cr=tt(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}cr=null}}else cr=lr?tt(e.stateNode.nextSibling):null;return!0}function Pc(){for(var e=cr;e;)e=tt(e.nextSibling)}function Kt(){cr=lr=null,we=!1}function Mo(e){Tr===null?Tr=[e]:Tr.push(e)}var Sm=re.ReactCurrentBatchConfig;function Fn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var i=n.stateNode}if(!i)throw Error(l(147,e));var s=i,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(c){var p=s.refs;c===null?delete p[a]:p[a]=c},r._stringRef=a,r)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function _i(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function zc(e){var r=e._init;return r(e._payload)}function Ec(e){function r(v,f){if(e){var y=v.deletions;y===null?(v.deletions=[f],v.flags|=16):y.push(f)}}function n(v,f){if(!e)return null;for(;f!==null;)r(v,f),f=f.sibling;return null}function i(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function s(v,f){return v=mt(v,f),v.index=0,v.sibling=null,v}function a(v,f,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<f?(v.flags|=2,f):y):(v.flags|=2,f)):(v.flags|=1048576,f)}function c(v){return e&&v.alternate===null&&(v.flags|=2),v}function p(v,f,y,C){return f===null||f.tag!==6?(f=Sa(y,v.mode,C),f.return=v,f):(f=s(f,y),f.return=v,f)}function h(v,f,y,C){var W=y.type;return W===Q?N(v,f,y.props.children,C,y.key):f!==null&&(f.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===De&&zc(W)===f.type)?(C=s(f,y.props),C.ref=Fn(v,f,y),C.return=v,C):(C=os(y.type,y.key,y.props,null,v.mode,C),C.ref=Fn(v,f,y),C.return=v,C)}function j(v,f,y,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Ca(y,v.mode,C),f.return=v,f):(f=s(f,y.children||[]),f.return=v,f)}function N(v,f,y,C,W){return f===null||f.tag!==7?(f=Pt(y,v.mode,C,W),f.return=v,f):(f=s(f,y),f.return=v,f)}function S(v,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Sa(""+f,v.mode,y),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case pe:return y=os(f.type,f.key,f.props,null,v.mode,y),y.ref=Fn(v,null,f),y.return=v,y;case X:return f=Ca(f,v.mode,y),f.return=v,f;case De:var C=f._init;return S(v,C(f._payload),y)}if(pn(f)||D(f))return f=Pt(f,v.mode,y,null),f.return=v,f;_i(v,f)}return null}function k(v,f,y,C){var W=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return W!==null?null:p(v,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pe:return y.key===W?h(v,f,y,C):null;case X:return y.key===W?j(v,f,y,C):null;case De:return W=y._init,k(v,f,W(y._payload),C)}if(pn(y)||D(y))return W!==null?null:N(v,f,y,C,null);_i(v,y)}return null}function L(v,f,y,C,W){if(typeof C=="string"&&C!==""||typeof C=="number")return v=v.get(y)||null,p(f,v,""+C,W);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case pe:return v=v.get(C.key===null?y:C.key)||null,h(f,v,C,W);case X:return v=v.get(C.key===null?y:C.key)||null,j(f,v,C,W);case De:var $=C._init;return L(v,f,y,$(C._payload),W)}if(pn(C)||D(C))return v=v.get(y)||null,N(f,v,C,W,null);_i(f,C)}return null}function F(v,f,y,C){for(var W=null,$=null,V=f,G=f=0,Re=null;V!==null&&G<y.length;G++){V.index>G?(Re=V,V=null):Re=V.sibling;var de=k(v,V,y[G],C);if(de===null){V===null&&(V=Re);break}e&&V&&de.alternate===null&&r(v,V),f=a(de,f,G),$===null?W=de:$.sibling=de,$=de,V=Re}if(G===y.length)return n(v,V),we&&jt(v,G),W;if(V===null){for(;G<y.length;G++)V=S(v,y[G],C),V!==null&&(f=a(V,f,G),$===null?W=V:$.sibling=V,$=V);return we&&jt(v,G),W}for(V=i(v,V);G<y.length;G++)Re=L(V,v,G,y[G],C),Re!==null&&(e&&Re.alternate!==null&&V.delete(Re.key===null?G:Re.key),f=a(Re,f,G),$===null?W=Re:$.sibling=Re,$=Re);return e&&V.forEach(function(ht){return r(v,ht)}),we&&jt(v,G),W}function A(v,f,y,C){var W=D(y);if(typeof W!="function")throw Error(l(150));if(y=W.call(y),y==null)throw Error(l(151));for(var $=W=null,V=f,G=f=0,Re=null,de=y.next();V!==null&&!de.done;G++,de=y.next()){V.index>G?(Re=V,V=null):Re=V.sibling;var ht=k(v,V,de.value,C);if(ht===null){V===null&&(V=Re);break}e&&V&&ht.alternate===null&&r(v,V),f=a(ht,f,G),$===null?W=ht:$.sibling=ht,$=ht,V=Re}if(de.done)return n(v,V),we&&jt(v,G),W;if(V===null){for(;!de.done;G++,de=y.next())de=S(v,de.value,C),de!==null&&(f=a(de,f,G),$===null?W=de:$.sibling=de,$=de);return we&&jt(v,G),W}for(V=i(v,V);!de.done;G++,de=y.next())de=L(V,v,G,de.value,C),de!==null&&(e&&de.alternate!==null&&V.delete(de.key===null?G:de.key),f=a(de,f,G),$===null?W=de:$.sibling=de,$=de);return e&&V.forEach(function(ih){return r(v,ih)}),we&&jt(v,G),W}function Ce(v,f,y,C){if(typeof y=="object"&&y!==null&&y.type===Q&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pe:e:{for(var W=y.key,$=f;$!==null;){if($.key===W){if(W=y.type,W===Q){if($.tag===7){n(v,$.sibling),f=s($,y.props.children),f.return=v,v=f;break e}}else if($.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===De&&zc(W)===$.type){n(v,$.sibling),f=s($,y.props),f.ref=Fn(v,$,y),f.return=v,v=f;break e}n(v,$);break}else r(v,$);$=$.sibling}y.type===Q?(f=Pt(y.props.children,v.mode,C,y.key),f.return=v,v=f):(C=os(y.type,y.key,y.props,null,v.mode,C),C.ref=Fn(v,f,y),C.return=v,v=C)}return c(v);case X:e:{for($=y.key;f!==null;){if(f.key===$)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(v,f.sibling),f=s(f,y.children||[]),f.return=v,v=f;break e}else{n(v,f);break}else r(v,f);f=f.sibling}f=Ca(y,v.mode,C),f.return=v,v=f}return c(v);case De:return $=y._init,Ce(v,f,$(y._payload),C)}if(pn(y))return F(v,f,y,C);if(D(y))return A(v,f,y,C);_i(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(v,f.sibling),f=s(f,y),f.return=v,v=f):(n(v,f),f=Sa(y,v.mode,C),f.return=v,v=f),c(v)):n(v,f)}return Ce}var Qt=Ec(!0),Oc=Ec(!1),Fi=nt(null),Ai=null,Gt=null,Ro=null;function _o(){Ro=Gt=Ai=null}function Fo(e){var r=Fi.current;ye(Fi),e._currentValue=r}function Ao(e,r,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,i!==null&&(i.childLanes|=r)):i!==null&&(i.childLanes&r)!==r&&(i.childLanes|=r),e===n)break;e=e.return}}function Yt(e,r){Ai=e,Ro=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Ze=!0),e.firstContext=null)}function xr(e){var r=e._currentValue;if(Ro!==e)if(e={context:e,memoizedValue:r,next:null},Gt===null){if(Ai===null)throw Error(l(308));Gt=e,Ai.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return r}var wt=null;function Bo(e){wt===null?wt=[e]:wt.push(e)}function Lc(e,r,n,i){var s=r.interleaved;return s===null?(n.next=n,Bo(r)):(n.next=s.next,s.next=n),r.interleaved=n,$r(e,i)}function $r(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function Wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ic(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function at(e,r,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(le&2)!==0){var s=i.pending;return s===null?r.next=r:(r.next=s.next,s.next=r),i.pending=r,$r(e,n)}return s=i.interleaved,s===null?(r.next=r,Bo(i)):(r.next=s.next,s.next=r),i.interleaved=r,$r(e,n)}function Bi(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var i=r.lanes;i&=e.pendingLanes,n|=i,r.lanes=n,Zs(e,n)}}function Mc(e,r){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=c:a=a.next=c,n=n.next}while(n!==null);a===null?s=a=r:a=a.next=r}else s=a=r;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Wi(e,r,n,i){var s=e.updateQueue;ot=!1;var a=s.firstBaseUpdate,c=s.lastBaseUpdate,p=s.shared.pending;if(p!==null){s.shared.pending=null;var h=p,j=h.next;h.next=null,c===null?a=j:c.next=j,c=h;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==c&&(p===null?N.firstBaseUpdate=j:p.next=j,N.lastBaseUpdate=h))}if(a!==null){var S=s.baseState;c=0,N=j=h=null,p=a;do{var k=p.lane,L=p.eventTime;if((i&k)===k){N!==null&&(N=N.next={eventTime:L,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var F=e,A=p;switch(k=r,L=n,A.tag){case 1:if(F=A.payload,typeof F=="function"){S=F.call(L,S,k);break e}S=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=A.payload,k=typeof F=="function"?F.call(L,S,k):F,k==null)break e;S=O({},S,k);break e;case 2:ot=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,k=s.effects,k===null?s.effects=[p]:k.push(p))}else L={eventTime:L,lane:k,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(j=N=L,h=S):N=N.next=L,c|=k;if(p=p.next,p===null){if(p=s.shared.pending,p===null)break;k=p,p=k.next,k.next=null,s.lastBaseUpdate=k,s.shared.pending=null}}while(!0);if(N===null&&(h=S),s.baseState=h,s.firstBaseUpdate=j,s.lastBaseUpdate=N,r=s.shared.interleaved,r!==null){s=r;do c|=s.lane,s=s.next;while(s!==r)}else a===null&&(s.shared.lanes=0);bt|=c,e.lanes=c,e.memoizedState=S}}function Rc(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var i=e[r],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(l(191,s));s.call(i)}}}var An={},Rr=nt(An),Bn=nt(An),Wn=nt(An);function kt(e){if(e===An)throw Error(l(174));return e}function qo(e,r){switch(ge(Wn,r),ge(Bn,e),ge(Rr,An),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:qs(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=qs(r,e)}ye(Rr),ge(Rr,r)}function Xt(){ye(Rr),ye(Bn),ye(Wn)}function _c(e){kt(Wn.current);var r=kt(Rr.current),n=qs(r,e.type);r!==n&&(ge(Bn,e),ge(Rr,n))}function Do(e){Bn.current===e&&(ye(Rr),ye(Bn))}var ke=nt(0);function qi(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Uo=[];function Ho(){for(var e=0;e<Uo.length;e++)Uo[e]._workInProgressVersionPrimary=null;Uo.length=0}var Di=re.ReactCurrentDispatcher,$o=re.ReactCurrentBatchConfig,Nt=0,Ne=null,Oe=null,Ie=null,Ui=!1,qn=!1,Dn=0,Cm=0;function He(){throw Error(l(321))}function Vo(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Cr(e[n],r[n]))return!1;return!0}function Ko(e,r,n,i,s,a){if(Nt=a,Ne=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Di.current=e===null||e.memoizedState===null?Em:Om,e=n(i,s),qn){a=0;do{if(qn=!1,Dn=0,25<=a)throw Error(l(301));a+=1,Ie=Oe=null,r.updateQueue=null,Di.current=Lm,e=n(i,s)}while(qn)}if(Di.current=Vi,r=Oe!==null&&Oe.next!==null,Nt=0,Ie=Oe=Ne=null,Ui=!1,r)throw Error(l(300));return e}function Qo(){var e=Dn!==0;return Dn=0,e}function _r(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Ne.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function gr(){if(Oe===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var r=Ie===null?Ne.memoizedState:Ie.next;if(r!==null)Ie=r,Oe=e;else{if(e===null)throw Error(l(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ie===null?Ne.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Un(e,r){return typeof r=="function"?r(e):r}function Go(e){var r=gr(),n=r.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=Oe,s=i.baseQueue,a=n.pending;if(a!==null){if(s!==null){var c=s.next;s.next=a.next,a.next=c}i.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,i=i.baseState;var p=c=null,h=null,j=a;do{var N=j.lane;if((Nt&N)===N)h!==null&&(h=h.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),i=j.hasEagerState?j.eagerState:e(i,j.action);else{var S={lane:N,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};h===null?(p=h=S,c=i):h=h.next=S,Ne.lanes|=N,bt|=N}j=j.next}while(j!==null&&j!==a);h===null?c=i:h.next=p,Cr(i,r.memoizedState)||(Ze=!0),r.memoizedState=i,r.baseState=c,r.baseQueue=h,n.lastRenderedState=i}if(e=n.interleaved,e!==null){s=e;do a=s.lane,Ne.lanes|=a,bt|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Yo(e){var r=gr(),n=r.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=r.memoizedState;if(s!==null){n.pending=null;var c=s=s.next;do a=e(a,c.action),c=c.next;while(c!==s);Cr(a,r.memoizedState)||(Ze=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),n.lastRenderedState=a}return[a,i]}function Fc(){}function Ac(e,r){var n=Ne,i=gr(),s=r(),a=!Cr(i.memoizedState,s);if(a&&(i.memoizedState=s,Ze=!0),i=i.queue,Xo(qc.bind(null,n,i,e),[e]),i.getSnapshot!==r||a||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Hn(9,Wc.bind(null,n,i,s,r),void 0,null),Me===null)throw Error(l(349));(Nt&30)!==0||Bc(n,r,s)}return s}function Bc(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Ne.updateQueue,r===null?(r={lastEffect:null,stores:null},Ne.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Wc(e,r,n,i){r.value=n,r.getSnapshot=i,Dc(r)&&Uc(e)}function qc(e,r,n){return n(function(){Dc(r)&&Uc(e)})}function Dc(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Cr(e,n)}catch{return!0}}function Uc(e){var r=$r(e,1);r!==null&&Or(r,e,1,-1)}function Hc(e){var r=_r();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:e},r.queue=e,e=e.dispatch=zm.bind(null,Ne,e),[r.memoizedState,e]}function Hn(e,r,n,i){return e={tag:e,create:r,destroy:n,deps:i,next:null},r=Ne.updateQueue,r===null?(r={lastEffect:null,stores:null},Ne.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,r.lastEffect=e)),e}function $c(){return gr().memoizedState}function Hi(e,r,n,i){var s=_r();Ne.flags|=e,s.memoizedState=Hn(1|r,n,void 0,i===void 0?null:i)}function $i(e,r,n,i){var s=gr();i=i===void 0?null:i;var a=void 0;if(Oe!==null){var c=Oe.memoizedState;if(a=c.destroy,i!==null&&Vo(i,c.deps)){s.memoizedState=Hn(r,n,a,i);return}}Ne.flags|=e,s.memoizedState=Hn(1|r,n,a,i)}function Vc(e,r){return Hi(8390656,8,e,r)}function Xo(e,r){return $i(2048,8,e,r)}function Kc(e,r){return $i(4,2,e,r)}function Qc(e,r){return $i(4,4,e,r)}function Gc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Yc(e,r,n){return n=n!=null?n.concat([e]):null,$i(4,4,Gc.bind(null,r,e),n)}function Jo(){}function Xc(e,r){var n=gr();r=r===void 0?null:r;var i=n.memoizedState;return i!==null&&r!==null&&Vo(r,i[1])?i[0]:(n.memoizedState=[e,r],e)}function Jc(e,r){var n=gr();r=r===void 0?null:r;var i=n.memoizedState;return i!==null&&r!==null&&Vo(r,i[1])?i[0]:(e=e(),n.memoizedState=[e,r],e)}function Zc(e,r,n){return(Nt&21)===0?(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n):(Cr(n,r)||(n=zl(),Ne.lanes|=n,bt|=n,e.baseState=!0),r)}function Tm(e,r){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var i=$o.transition;$o.transition={};try{e(!1),r()}finally{fe=n,$o.transition=i}}function ed(){return gr().memoizedState}function Pm(e,r,n){var i=ut(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},rd(e))td(r,n);else if(n=Lc(e,r,n,i),n!==null){var s=Ge();Or(n,e,i,s),nd(n,r,i)}}function zm(e,r,n){var i=ut(e),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(rd(e))td(r,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var c=r.lastRenderedState,p=a(c,n);if(s.hasEagerState=!0,s.eagerState=p,Cr(p,c)){var h=r.interleaved;h===null?(s.next=s,Bo(r)):(s.next=h.next,h.next=s),r.interleaved=s;return}}catch{}finally{}n=Lc(e,r,s,i),n!==null&&(s=Ge(),Or(n,e,i,s),nd(n,r,i))}}function rd(e){var r=e.alternate;return e===Ne||r!==null&&r===Ne}function td(e,r){qn=Ui=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function nd(e,r,n){if((n&4194240)!==0){var i=r.lanes;i&=e.pendingLanes,n|=i,r.lanes=n,Zs(e,n)}}var Vi={readContext:xr,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},Em={readContext:xr,useCallback:function(e,r){return _r().memoizedState=[e,r===void 0?null:r],e},useContext:xr,useEffect:Vc,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Hi(4194308,4,Gc.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Hi(4194308,4,e,r)},useInsertionEffect:function(e,r){return Hi(4,2,e,r)},useMemo:function(e,r){var n=_r();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var i=_r();return r=n!==void 0?n(r):r,i.memoizedState=i.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Pm.bind(null,Ne,e),[i.memoizedState,e]},useRef:function(e){var r=_r();return e={current:e},r.memoizedState=e},useState:Hc,useDebugValue:Jo,useDeferredValue:function(e){return _r().memoizedState=e},useTransition:function(){var e=Hc(!1),r=e[0];return e=Tm.bind(null,e[1]),_r().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var i=Ne,s=_r();if(we){if(n===void 0)throw Error(l(407));n=n()}else{if(n=r(),Me===null)throw Error(l(349));(Nt&30)!==0||Bc(i,r,n)}s.memoizedState=n;var a={value:n,getSnapshot:r};return s.queue=a,Vc(qc.bind(null,i,a,e),[e]),i.flags|=2048,Hn(9,Wc.bind(null,i,a,n,r),void 0,null),n},useId:function(){var e=_r(),r=Me.identifierPrefix;if(we){var n=Hr,i=Ur;n=(i&~(1<<32-Sr(i)-1)).toString(32)+n,r=":"+r+"R"+n,n=Dn++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Cm++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Om={readContext:xr,useCallback:Xc,useContext:xr,useEffect:Xo,useImperativeHandle:Yc,useInsertionEffect:Kc,useLayoutEffect:Qc,useMemo:Jc,useReducer:Go,useRef:$c,useState:function(){return Go(Un)},useDebugValue:Jo,useDeferredValue:function(e){var r=gr();return Zc(r,Oe.memoizedState,e)},useTransition:function(){var e=Go(Un)[0],r=gr().memoizedState;return[e,r]},useMutableSource:Fc,useSyncExternalStore:Ac,useId:ed,unstable_isNewReconciler:!1},Lm={readContext:xr,useCallback:Xc,useContext:xr,useEffect:Xo,useImperativeHandle:Yc,useInsertionEffect:Kc,useLayoutEffect:Qc,useMemo:Jc,useReducer:Yo,useRef:$c,useState:function(){return Yo(Un)},useDebugValue:Jo,useDeferredValue:function(e){var r=gr();return Oe===null?r.memoizedState=e:Zc(r,Oe.memoizedState,e)},useTransition:function(){var e=Yo(Un)[0],r=gr().memoizedState;return[e,r]},useMutableSource:Fc,useSyncExternalStore:Ac,useId:ed,unstable_isNewReconciler:!1};function Pr(e,r){if(e&&e.defaultProps){r=O({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Zo(e,r,n,i){r=e.memoizedState,n=n(i,r),n=n==null?r:O({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ki={isMounted:function(e){return(e=e._reactInternals)?xt(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var i=Ge(),s=ut(e),a=Vr(i,s);a.payload=r,n!=null&&(a.callback=n),r=at(e,a,s),r!==null&&(Or(r,e,s,i),Bi(r,e,s))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var i=Ge(),s=ut(e),a=Vr(i,s);a.tag=1,a.payload=r,n!=null&&(a.callback=n),r=at(e,a,s),r!==null&&(Or(r,e,s,i),Bi(r,e,s))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=Ge(),i=ut(e),s=Vr(n,i);s.tag=2,r!=null&&(s.callback=r),r=at(e,s,i),r!==null&&(Or(r,e,i,n),Bi(r,e,i))}};function id(e,r,n,i,s,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,c):r.prototype&&r.prototype.isPureReactComponent?!En(n,i)||!En(s,a):!0}function sd(e,r,n){var i=!1,s=it,a=r.contextType;return typeof a=="object"&&a!==null?a=xr(a):(s=Je(r)?vt:Ue.current,i=r.contextTypes,a=(i=i!=null)?Ht(e,s):it),r=new r(n,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ki,e.stateNode=r,r._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),r}function od(e,r,n,i){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,i),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,i),r.state!==e&&Ki.enqueueReplaceState(r,r.state,null)}function ea(e,r,n,i){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Wo(e);var a=r.contextType;typeof a=="object"&&a!==null?s.context=xr(a):(a=Je(r)?vt:Ue.current,s.context=Ht(e,a)),s.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(Zo(e,r,a,n),s.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Ki.enqueueReplaceState(s,s.state,null),Wi(e,n,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Jt(e,r){try{var n="",i=r;do n+=ie(i),i=i.return;while(i);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:s,digest:null}}function ra(e,r,n){return{value:e,source:null,stack:n!=null?n:null,digest:r!=null?r:null}}function ta(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Im=typeof WeakMap=="function"?WeakMap:Map;function ad(e,r,n){n=Vr(-1,n),n.tag=3,n.payload={element:null};var i=r.value;return n.callback=function(){es||(es=!0,ga=i),ta(e,r)},n}function ld(e,r,n){n=Vr(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=r.value;n.payload=function(){return i(s)},n.callback=function(){ta(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ta(e,r),typeof i!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var c=r.stack;this.componentDidCatch(r.value,{componentStack:c!==null?c:""})}),n}function cd(e,r,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Im;var s=new Set;i.set(r,s)}else s=i.get(r),s===void 0&&(s=new Set,i.set(r,s));s.has(n)||(s.add(n),e=Km.bind(null,e,r,n),r.then(e,e))}function dd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function ud(e,r,n,i,s){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Vr(-1,1),r.tag=2,at(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Mm=re.ReactCurrentOwner,Ze=!1;function Qe(e,r,n,i){r.child=e===null?Oc(r,null,n,i):Qt(r,e.child,n,i)}function pd(e,r,n,i,s){n=n.render;var a=r.ref;return Yt(r,s),i=Ko(e,r,n,i,a,s),n=Qo(),e!==null&&!Ze?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Kr(e,r,s)):(we&&n&&Eo(r),r.flags|=1,Qe(e,r,i,s),r.child)}function md(e,r,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!ba(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=a,hd(e,r,a,i,s)):(e=os(n.type,null,i,r,r.mode,s),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&s)===0){var c=a.memoizedProps;if(n=n.compare,n=n!==null?n:En,n(c,i)&&e.ref===r.ref)return Kr(e,r,s)}return r.flags|=1,e=mt(a,i),e.ref=r.ref,e.return=r,r.child=e}function hd(e,r,n,i,s){if(e!==null){var a=e.memoizedProps;if(En(a,i)&&e.ref===r.ref)if(Ze=!1,r.pendingProps=i=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(Ze=!0);else return r.lanes=e.lanes,Kr(e,r,s)}return na(e,r,n,i,s)}function fd(e,r,n){var i=r.pendingProps,s=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(en,dr),dr|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ge(en,dr),dr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,ge(en,dr),dr|=i}else a!==null?(i=a.baseLanes|n,r.memoizedState=null):i=n,ge(en,dr),dr|=i;return Qe(e,r,s,n),r.child}function xd(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function na(e,r,n,i,s){var a=Je(n)?vt:Ue.current;return a=Ht(r,a),Yt(r,s),n=Ko(e,r,n,i,a,s),i=Qo(),e!==null&&!Ze?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Kr(e,r,s)):(we&&i&&Eo(r),r.flags|=1,Qe(e,r,n,s),r.child)}function gd(e,r,n,i,s){if(Je(n)){var a=!0;Oi(r)}else a=!1;if(Yt(r,s),r.stateNode===null)Gi(e,r),sd(r,n,i),ea(r,n,i,s),i=!0;else if(e===null){var c=r.stateNode,p=r.memoizedProps;c.props=p;var h=c.context,j=n.contextType;typeof j=="object"&&j!==null?j=xr(j):(j=Je(n)?vt:Ue.current,j=Ht(r,j));var N=n.getDerivedStateFromProps,S=typeof N=="function"||typeof c.getSnapshotBeforeUpdate=="function";S||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==i||h!==j)&&od(r,c,i,j),ot=!1;var k=r.memoizedState;c.state=k,Wi(r,i,c,s),h=r.memoizedState,p!==i||k!==h||Xe.current||ot?(typeof N=="function"&&(Zo(r,n,N,i),h=r.memoizedState),(p=ot||id(r,n,p,i,k,h,j))?(S||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(r.flags|=4194308)):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=i,r.memoizedState=h),c.props=i,c.state=h,c.context=j,i=p):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),i=!1)}else{c=r.stateNode,Ic(e,r),p=r.memoizedProps,j=r.type===r.elementType?p:Pr(r.type,p),c.props=j,S=r.pendingProps,k=c.context,h=n.contextType,typeof h=="object"&&h!==null?h=xr(h):(h=Je(n)?vt:Ue.current,h=Ht(r,h));var L=n.getDerivedStateFromProps;(N=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==S||k!==h)&&od(r,c,i,h),ot=!1,k=r.memoizedState,c.state=k,Wi(r,i,c,s);var F=r.memoizedState;p!==S||k!==F||Xe.current||ot?(typeof L=="function"&&(Zo(r,n,L,i),F=r.memoizedState),(j=ot||id(r,n,j,i,k,F,h)||!1)?(N||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,F,h),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,F,h)),typeof c.componentDidUpdate=="function"&&(r.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(r.flags|=1024),r.memoizedProps=i,r.memoizedState=F),c.props=i,c.state=F,c.context=h,i=j):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(r.flags|=1024),i=!1)}return ia(e,r,n,i,a,s)}function ia(e,r,n,i,s,a){xd(e,r);var c=(r.flags&128)!==0;if(!i&&!c)return s&&kc(r,n,!1),Kr(e,r,a);i=r.stateNode,Mm.current=r;var p=c&&typeof n.getDerivedStateFromError!="function"?null:i.render();return r.flags|=1,e!==null&&c?(r.child=Qt(r,e.child,null,a),r.child=Qt(r,null,p,a)):Qe(e,r,p,a),r.memoizedState=i.state,s&&kc(r,n,!0),r.child}function vd(e){var r=e.stateNode;r.pendingContext?jc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&jc(e,r.context,!1),qo(e,r.containerInfo)}function yd(e,r,n,i,s){return Kt(),Mo(s),r.flags|=256,Qe(e,r,n,i),r.child}var sa={dehydrated:null,treeContext:null,retryLane:0};function oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function jd(e,r,n){var i=r.pendingProps,s=ke.current,a=!1,c=(r.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(s&2)!==0),p?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ge(ke,s&1),e===null)return Io(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(c=i.children,e=i.fallback,a?(i=r.mode,a=r.child,c={mode:"hidden",children:c},(i&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=as(c,i,0,null),e=Pt(e,i,n,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=oa(n),r.memoizedState=sa,e):aa(r,c));if(s=e.memoizedState,s!==null&&(p=s.dehydrated,p!==null))return Rm(e,r,c,i,p,s,n);if(a){a=i.fallback,c=r.mode,s=e.child,p=s.sibling;var h={mode:"hidden",children:i.children};return(c&1)===0&&r.child!==s?(i=r.child,i.childLanes=0,i.pendingProps=h,r.deletions=null):(i=mt(s,h),i.subtreeFlags=s.subtreeFlags&14680064),p!==null?a=mt(p,a):(a=Pt(a,c,n,null),a.flags|=2),a.return=r,i.return=r,i.sibling=a,r.child=i,i=a,a=r.child,c=e.child.memoizedState,c=c===null?oa(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~n,r.memoizedState=sa,i}return a=e.child,e=a.sibling,i=mt(a,{mode:"visible",children:i.children}),(r.mode&1)===0&&(i.lanes=n),i.return=r,i.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=i,r.memoizedState=null,i}function aa(e,r){return r=as({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Qi(e,r,n,i){return i!==null&&Mo(i),Qt(r,e.child,null,n),e=aa(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Rm(e,r,n,i,s,a,c){if(n)return r.flags&256?(r.flags&=-257,i=ra(Error(l(422))),Qi(e,r,c,i)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=i.fallback,s=r.mode,i=as({mode:"visible",children:i.children},s,0,null),a=Pt(a,s,c,null),a.flags|=2,i.return=r,a.return=r,i.sibling=a,r.child=i,(r.mode&1)!==0&&Qt(r,e.child,null,c),r.child.memoizedState=oa(c),r.memoizedState=sa,a);if((r.mode&1)===0)return Qi(e,r,c,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var p=i.dgst;return i=p,a=Error(l(419)),i=ra(a,i,void 0),Qi(e,r,c,i)}if(p=(c&e.childLanes)!==0,Ze||p){if(i=Me,i!==null){switch(c&-c){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(i.suspendedLanes|c))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,$r(e,s),Or(i,e,s,-1))}return Na(),i=ra(Error(l(421))),Qi(e,r,c,i)}return s.data==="$?"?(r.flags|=128,r.child=e.child,r=Qm.bind(null,e),s._reactRetry=r,null):(e=a.treeContext,cr=tt(s.nextSibling),lr=r,we=!0,Tr=null,e!==null&&(hr[fr++]=Ur,hr[fr++]=Hr,hr[fr++]=yt,Ur=e.id,Hr=e.overflow,yt=r),r=aa(r,i.children),r.flags|=4096,r)}function wd(e,r,n){e.lanes|=r;var i=e.alternate;i!==null&&(i.lanes|=r),Ao(e.return,r,n)}function la(e,r,n,i,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s)}function kd(e,r,n){var i=r.pendingProps,s=i.revealOrder,a=i.tail;if(Qe(e,r,i.children,n),i=ke.current,(i&2)!==0)i=i&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wd(e,n,r);else if(e.tag===19)wd(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(ge(ke,i),(r.mode&1)===0)r.memoizedState=null;else switch(s){case"forwards":for(n=r.child,s=null;n!==null;)e=n.alternate,e!==null&&qi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=r.child,r.child=null):(s=n.sibling,n.sibling=null),la(r,!1,s,n,a);break;case"backwards":for(n=null,s=r.child,r.child=null;s!==null;){if(e=s.alternate,e!==null&&qi(e)===null){r.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}la(r,!0,n,null,a);break;case"together":la(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Gi(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Kr(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),bt|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,n=mt(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function _m(e,r,n){switch(r.tag){case 3:vd(r),Kt();break;case 5:_c(r);break;case 1:Je(r.type)&&Oi(r);break;case 4:qo(r,r.stateNode.containerInfo);break;case 10:var i=r.type._context,s=r.memoizedProps.value;ge(Fi,i._currentValue),i._currentValue=s;break;case 13:if(i=r.memoizedState,i!==null)return i.dehydrated!==null?(ge(ke,ke.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?jd(e,r,n):(ge(ke,ke.current&1),e=Kr(e,r,n),e!==null?e.sibling:null);ge(ke,ke.current&1);break;case 19:if(i=(n&r.childLanes)!==0,(e.flags&128)!==0){if(i)return kd(e,r,n);r.flags|=128}if(s=r.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(ke,ke.current),i)break;return null;case 22:case 23:return r.lanes=0,fd(e,r,n)}return Kr(e,r,n)}var Nd,ca,bd,Sd;Nd=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ca=function(){},bd=function(e,r,n,i){var s=e.memoizedProps;if(s!==i){e=r.stateNode,kt(Rr.current);var a=null;switch(n){case"input":s=Fs(e,s),i=Fs(e,i),a=[];break;case"select":s=O({},s,{value:void 0}),i=O({},i,{value:void 0}),a=[];break;case"textarea":s=Ws(e,s),i=Ws(e,i),a=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Pi)}Ds(n,i);var c;n=null;for(j in s)if(!i.hasOwnProperty(j)&&s.hasOwnProperty(j)&&s[j]!=null)if(j==="style"){var p=s[j];for(c in p)p.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(u.hasOwnProperty(j)?a||(a=[]):(a=a||[]).push(j,null));for(j in i){var h=i[j];if(p=s!=null?s[j]:void 0,i.hasOwnProperty(j)&&h!==p&&(h!=null||p!=null))if(j==="style")if(p){for(c in p)!p.hasOwnProperty(c)||h&&h.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in h)h.hasOwnProperty(c)&&p[c]!==h[c]&&(n||(n={}),n[c]=h[c])}else n||(a||(a=[]),a.push(j,n)),n=h;else j==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(a=a||[]).push(j,h)):j==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(j,""+h):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(u.hasOwnProperty(j)?(h!=null&&j==="onScroll"&&ve("scroll",e),a||p===h||(a=[])):(a=a||[]).push(j,h))}n&&(a=a||[]).push("style",n);var j=a;(r.updateQueue=j)&&(r.flags|=4)}},Sd=function(e,r,n,i){n!==i&&(r.flags|=4)};function $n(e,r){if(!we)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function $e(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(r)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,r}function Fm(e,r,n){var i=r.pendingProps;switch(Oo(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(r),null;case 1:return Je(r.type)&&Ei(),$e(r),null;case 3:return i=r.stateNode,Xt(),ye(Xe),ye(Ue),Ho(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ri(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Tr!==null&&(ja(Tr),Tr=null))),ca(e,r),$e(r),null;case 5:Do(r);var s=kt(Wn.current);if(n=r.type,e!==null&&r.stateNode!=null)bd(e,r,n,i,s),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!i){if(r.stateNode===null)throw Error(l(166));return $e(r),null}if(e=kt(Rr.current),Ri(r)){i=r.stateNode,n=r.type;var a=r.memoizedProps;switch(i[Mr]=r,i[Rn]=a,e=(r.mode&1)!==0,n){case"dialog":ve("cancel",i),ve("close",i);break;case"iframe":case"object":case"embed":ve("load",i);break;case"video":case"audio":for(s=0;s<Ln.length;s++)ve(Ln[s],i);break;case"source":ve("error",i);break;case"img":case"image":case"link":ve("error",i),ve("load",i);break;case"details":ve("toggle",i);break;case"input":sl(i,a),ve("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},ve("invalid",i);break;case"textarea":ll(i,a),ve("invalid",i)}Ds(n,a),s=null;for(var c in a)if(a.hasOwnProperty(c)){var p=a[c];c==="children"?typeof p=="string"?i.textContent!==p&&(a.suppressHydrationWarning!==!0&&Ti(i.textContent,p,e),s=["children",p]):typeof p=="number"&&i.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&Ti(i.textContent,p,e),s=["children",""+p]):u.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&ve("scroll",i)}switch(n){case"input":Wr(i),al(i,a,!0);break;case"textarea":Wr(i),dl(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Pi)}i=s,r.updateQueue=i,i!==null&&(r.flags|=4)}else{c=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ul(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n==="select"&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Mr]=r,e[Rn]=i,Nd(e,r,!1,!1),r.stateNode=e;e:{switch(c=Us(n,i),n){case"dialog":ve("cancel",e),ve("close",e),s=i;break;case"iframe":case"object":case"embed":ve("load",e),s=i;break;case"video":case"audio":for(s=0;s<Ln.length;s++)ve(Ln[s],e);s=i;break;case"source":ve("error",e),s=i;break;case"img":case"image":case"link":ve("error",e),ve("load",e),s=i;break;case"details":ve("toggle",e),s=i;break;case"input":sl(e,i),s=Fs(e,i),ve("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=O({},i,{value:void 0}),ve("invalid",e);break;case"textarea":ll(e,i),s=Ws(e,i),ve("invalid",e);break;default:s=i}Ds(n,s),p=s;for(a in p)if(p.hasOwnProperty(a)){var h=p[a];a==="style"?hl(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&pl(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&mn(e,h):typeof h=="number"&&mn(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(u.hasOwnProperty(a)?h!=null&&a==="onScroll"&&ve("scroll",e):h!=null&&se(e,a,h,c))}switch(n){case"input":Wr(e),al(e,i,!1);break;case"textarea":Wr(e),dl(e);break;case"option":i.value!=null&&e.setAttribute("value",""+oe(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Lt(e,!!i.multiple,a,!1):i.defaultValue!=null&&Lt(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Pi)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return $e(r),null;case 6:if(e&&r.stateNode!=null)Sd(e,r,e.memoizedProps,i);else{if(typeof i!="string"&&r.stateNode===null)throw Error(l(166));if(n=kt(Wn.current),kt(Rr.current),Ri(r)){if(i=r.stateNode,n=r.memoizedProps,i[Mr]=r,(a=i.nodeValue!==n)&&(e=lr,e!==null))switch(e.tag){case 3:Ti(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ti(i.nodeValue,n,(e.mode&1)!==0)}a&&(r.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mr]=r,r.stateNode=i}return $e(r),null;case 13:if(ye(ke),i=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&cr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Pc(),Kt(),r.flags|=98560,a=!1;else if(a=Ri(r),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Mr]=r}else Kt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$e(r),a=!1}else Tr!==null&&(ja(Tr),Tr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(ke.current&1)!==0?Le===0&&(Le=3):Na())),r.updateQueue!==null&&(r.flags|=4),$e(r),null);case 4:return Xt(),ca(e,r),e===null&&In(r.stateNode.containerInfo),$e(r),null;case 10:return Fo(r.type._context),$e(r),null;case 17:return Je(r.type)&&Ei(),$e(r),null;case 19:if(ye(ke),a=r.memoizedState,a===null)return $e(r),null;if(i=(r.flags&128)!==0,c=a.rendering,c===null)if(i)$n(a,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(c=qi(e),c!==null){for(r.flags|=128,$n(a,!1),i=c.updateQueue,i!==null&&(r.updateQueue=i,r.flags|=4),r.subtreeFlags=0,i=n,n=r.child;n!==null;)a=n,e=i,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(ke,ke.current&1|2),r.child}e=e.sibling}a.tail!==null&&Se()>rn&&(r.flags|=128,i=!0,$n(a,!1),r.lanes=4194304)}else{if(!i)if(e=qi(c),e!==null){if(r.flags|=128,i=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),$n(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!we)return $e(r),null}else 2*Se()-a.renderingStartTime>rn&&n!==1073741824&&(r.flags|=128,i=!0,$n(a,!1),r.lanes=4194304);a.isBackwards?(c.sibling=r.child,r.child=c):(n=a.last,n!==null?n.sibling=c:r.child=c,a.last=c)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=Se(),r.sibling=null,n=ke.current,ge(ke,i?n&1|2:n&1),r):($e(r),null);case 22:case 23:return ka(),i=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(r.flags|=8192),i&&(r.mode&1)!==0?(dr&1073741824)!==0&&($e(r),r.subtreeFlags&6&&(r.flags|=8192)):$e(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function Am(e,r){switch(Oo(r),r.tag){case 1:return Je(r.type)&&Ei(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Xt(),ye(Xe),ye(Ue),Ho(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Do(r),null;case 13:if(ye(ke),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));Kt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ye(ke),null;case 4:return Xt(),null;case 10:return Fo(r.type._context),null;case 22:case 23:return ka(),null;case 24:return null;default:return null}}var Yi=!1,Ve=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,I=null;function Zt(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){be(e,r,i)}else n.current=null}function da(e,r,n){try{n()}catch(i){be(e,r,i)}}var Cd=!1;function Wm(e,r){if(ko=xi,e=ic(),ho(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var c=0,p=-1,h=-1,j=0,N=0,S=e,k=null;r:for(;;){for(var L;S!==n||s!==0&&S.nodeType!==3||(p=c+s),S!==a||i!==0&&S.nodeType!==3||(h=c+i),S.nodeType===3&&(c+=S.nodeValue.length),(L=S.firstChild)!==null;)k=S,S=L;for(;;){if(S===e)break r;if(k===n&&++j===s&&(p=c),k===a&&++N===i&&(h=c),(L=S.nextSibling)!==null)break;S=k,k=S.parentNode}S=L}n=p===-1||h===-1?null:{start:p,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(No={focusedElem:e,selectionRange:n},xi=!1,I=r;I!==null;)if(r=I,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,I=e;else for(;I!==null;){r=I;try{var F=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(F!==null){var A=F.memoizedProps,Ce=F.memoizedState,v=r.stateNode,f=v.getSnapshotBeforeUpdate(r.elementType===r.type?A:Pr(r.type,A),Ce);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=r.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(C){be(r,r.return,C)}if(e=r.sibling,e!==null){e.return=r.return,I=e;break}I=r.return}return F=Cd,Cd=!1,F}function Vn(e,r,n){var i=r.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&da(r,n,a)}s=s.next}while(s!==i)}}function Xi(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==r)}}function ua(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Td(e){var r=e.alternate;r!==null&&(e.alternate=null,Td(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Mr],delete r[Rn],delete r[To],delete r[km],delete r[Nm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pd(e){return e.tag===5||e.tag===3||e.tag===4}function zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pa(e,r,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Pi));else if(i!==4&&(e=e.child,e!==null))for(pa(e,r,n),e=e.sibling;e!==null;)pa(e,r,n),e=e.sibling}function ma(e,r,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(ma(e,r,n),e=e.sibling;e!==null;)ma(e,r,n),e=e.sibling}var Ae=null,zr=!1;function lt(e,r,n){for(n=n.child;n!==null;)Ed(e,r,n),n=n.sibling}function Ed(e,r,n){if(Ir&&typeof Ir.onCommitFiberUnmount=="function")try{Ir.onCommitFiberUnmount(di,n)}catch{}switch(n.tag){case 5:Ve||Zt(n,r);case 6:var i=Ae,s=zr;Ae=null,lt(e,r,n),Ae=i,zr=s,Ae!==null&&(zr?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(zr?(e=Ae,n=n.stateNode,e.nodeType===8?Co(e.parentNode,n):e.nodeType===1&&Co(e,n),bn(e)):Co(Ae,n.stateNode));break;case 4:i=Ae,s=zr,Ae=n.stateNode.containerInfo,zr=!0,lt(e,r,n),Ae=i,zr=s;break;case 0:case 11:case 14:case 15:if(!Ve&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var a=s,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&da(n,r,c),s=s.next}while(s!==i)}lt(e,r,n);break;case 1:if(!Ve&&(Zt(n,r),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(p){be(n,r,p)}lt(e,r,n);break;case 21:lt(e,r,n);break;case 22:n.mode&1?(Ve=(i=Ve)||n.memoizedState!==null,lt(e,r,n),Ve=i):lt(e,r,n);break;default:lt(e,r,n)}}function Od(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bm),r.forEach(function(i){var s=Gm.bind(null,e,i);n.has(i)||(n.add(i),i.then(s,s))})}}function Er(e,r){var n=r.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var a=e,c=r,p=c;e:for(;p!==null;){switch(p.tag){case 5:Ae=p.stateNode,zr=!1;break e;case 3:Ae=p.stateNode.containerInfo,zr=!0;break e;case 4:Ae=p.stateNode.containerInfo,zr=!0;break e}p=p.return}if(Ae===null)throw Error(l(160));Ed(a,c,s),Ae=null,zr=!1;var h=s.alternate;h!==null&&(h.return=null),s.return=null}catch(j){be(s,r,j)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ld(r,e),r=r.sibling}function Ld(e,r){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Er(r,e),Fr(e),i&4){try{Vn(3,e,e.return),Xi(3,e)}catch(A){be(e,e.return,A)}try{Vn(5,e,e.return)}catch(A){be(e,e.return,A)}}break;case 1:Er(r,e),Fr(e),i&512&&n!==null&&Zt(n,n.return);break;case 5:if(Er(r,e),Fr(e),i&512&&n!==null&&Zt(n,n.return),e.flags&32){var s=e.stateNode;try{mn(s,"")}catch(A){be(e,e.return,A)}}if(i&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,c=n!==null?n.memoizedProps:a,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&ol(s,a),Us(p,c);var j=Us(p,a);for(c=0;c<h.length;c+=2){var N=h[c],S=h[c+1];N==="style"?hl(s,S):N==="dangerouslySetInnerHTML"?pl(s,S):N==="children"?mn(s,S):se(s,N,S,j)}switch(p){case"input":As(s,a);break;case"textarea":cl(s,a);break;case"select":var k=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var L=a.value;L!=null?Lt(s,!!a.multiple,L,!1):k!==!!a.multiple&&(a.defaultValue!=null?Lt(s,!!a.multiple,a.defaultValue,!0):Lt(s,!!a.multiple,a.multiple?[]:"",!1))}s[Rn]=a}catch(A){be(e,e.return,A)}}break;case 6:if(Er(r,e),Fr(e),i&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(A){be(e,e.return,A)}}break;case 3:if(Er(r,e),Fr(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{bn(r.containerInfo)}catch(A){be(e,e.return,A)}break;case 4:Er(r,e),Fr(e);break;case 13:Er(r,e),Fr(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(xa=Se())),i&4&&Od(e);break;case 22:if(N=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(j=Ve)||N,Er(r,e),Ve=j):Er(r,e),Fr(e),i&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!N&&(e.mode&1)!==0)for(I=e,N=e.child;N!==null;){for(S=I=N;I!==null;){switch(k=I,L=k.child,k.tag){case 0:case 11:case 14:case 15:Vn(4,k,k.return);break;case 1:Zt(k,k.return);var F=k.stateNode;if(typeof F.componentWillUnmount=="function"){i=k,n=k.return;try{r=i,F.props=r.memoizedProps,F.state=r.memoizedState,F.componentWillUnmount()}catch(A){be(i,n,A)}}break;case 5:Zt(k,k.return);break;case 22:if(k.memoizedState!==null){Rd(S);continue}}L!==null?(L.return=k,I=L):Rd(S)}N=N.sibling}e:for(N=null,S=e;;){if(S.tag===5){if(N===null){N=S;try{s=S.stateNode,j?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=S.stateNode,h=S.memoizedProps.style,c=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=ml("display",c))}catch(A){be(e,e.return,A)}}}else if(S.tag===6){if(N===null)try{S.stateNode.nodeValue=j?"":S.memoizedProps}catch(A){be(e,e.return,A)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;N===S&&(N=null),S=S.return}N===S&&(N=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Er(r,e),Fr(e),i&4&&Od(e);break;case 21:break;default:Er(r,e),Fr(e)}}function Fr(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Pd(n)){var i=n;break e}n=n.return}throw Error(l(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(mn(s,""),i.flags&=-33);var a=zd(e);ma(e,a,s);break;case 3:case 4:var c=i.stateNode.containerInfo,p=zd(e);pa(e,p,c);break;default:throw Error(l(161))}}catch(h){be(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function qm(e,r,n){I=e,Id(e)}function Id(e,r,n){for(var i=(e.mode&1)!==0;I!==null;){var s=I,a=s.child;if(s.tag===22&&i){var c=s.memoizedState!==null||Yi;if(!c){var p=s.alternate,h=p!==null&&p.memoizedState!==null||Ve;p=Yi;var j=Ve;if(Yi=c,(Ve=h)&&!j)for(I=s;I!==null;)c=I,h=c.child,c.tag===22&&c.memoizedState!==null?_d(s):h!==null?(h.return=c,I=h):_d(s);for(;a!==null;)I=a,Id(a),a=a.sibling;I=s,Yi=p,Ve=j}Md(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,I=a):Md(e)}}function Md(e){for(;I!==null;){var r=I;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ve||Xi(5,r);break;case 1:var i=r.stateNode;if(r.flags&4&&!Ve)if(n===null)i.componentDidMount();else{var s=r.elementType===r.type?n.memoizedProps:Pr(r.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Rc(r,a,i);break;case 3:var c=r.updateQueue;if(c!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Rc(r,c,n)}break;case 5:var p=r.stateNode;if(n===null&&r.flags&4){n=p;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var j=r.alternate;if(j!==null){var N=j.memoizedState;if(N!==null){var S=N.dehydrated;S!==null&&bn(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ve||r.flags&512&&ua(r)}catch(k){be(r,r.return,k)}}if(r===e){I=null;break}if(n=r.sibling,n!==null){n.return=r.return,I=n;break}I=r.return}}function Rd(e){for(;I!==null;){var r=I;if(r===e){I=null;break}var n=r.sibling;if(n!==null){n.return=r.return,I=n;break}I=r.return}}function _d(e){for(;I!==null;){var r=I;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Xi(4,r)}catch(h){be(r,n,h)}break;case 1:var i=r.stateNode;if(typeof i.componentDidMount=="function"){var s=r.return;try{i.componentDidMount()}catch(h){be(r,s,h)}}var a=r.return;try{ua(r)}catch(h){be(r,a,h)}break;case 5:var c=r.return;try{ua(r)}catch(h){be(r,c,h)}}}catch(h){be(r,r.return,h)}if(r===e){I=null;break}var p=r.sibling;if(p!==null){p.return=r.return,I=p;break}I=r.return}}var Dm=Math.ceil,Ji=re.ReactCurrentDispatcher,ha=re.ReactCurrentOwner,vr=re.ReactCurrentBatchConfig,le=0,Me=null,Pe=null,Be=0,dr=0,en=nt(0),Le=0,Kn=null,bt=0,Zi=0,fa=0,Qn=null,er=null,xa=0,rn=1/0,Qr=null,es=!1,ga=null,ct=null,rs=!1,dt=null,ts=0,Gn=0,va=null,ns=-1,is=0;function Ge(){return(le&6)!==0?Se():ns!==-1?ns:ns=Se()}function ut(e){return(e.mode&1)===0?1:(le&2)!==0&&Be!==0?Be&-Be:Sm.transition!==null?(is===0&&(is=zl()),is):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Al(e.type)),e)}function Or(e,r,n,i){if(50<Gn)throw Gn=0,va=null,Error(l(185));yn(e,n,i),((le&2)===0||e!==Me)&&(e===Me&&((le&2)===0&&(Zi|=n),Le===4&&pt(e,Be)),rr(e,i),n===1&&le===0&&(r.mode&1)===0&&(rn=Se()+500,Li&&st()))}function rr(e,r){var n=e.callbackNode;Sp(e,r);var i=mi(e,e===Me?Be:0);if(i===0)n!==null&&Cl(n),e.callbackNode=null,e.callbackPriority=0;else if(r=i&-i,e.callbackPriority!==r){if(n!=null&&Cl(n),r===1)e.tag===0?bm(Ad.bind(null,e)):Nc(Ad.bind(null,e)),jm(function(){(le&6)===0&&st()}),n=null;else{switch(El(i)){case 1:n=Ys;break;case 4:n=Tl;break;case 16:n=ci;break;case 536870912:n=Pl;break;default:n=ci}n=Vd(n,Fd.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Fd(e,r){if(ns=-1,is=0,(le&6)!==0)throw Error(l(327));var n=e.callbackNode;if(tn()&&e.callbackNode!==n)return null;var i=mi(e,e===Me?Be:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||r)r=ss(e,i);else{r=i;var s=le;le|=2;var a=Wd();(Me!==e||Be!==r)&&(Qr=null,rn=Se()+500,Ct(e,r));do try{$m();break}catch(p){Bd(e,p)}while(!0);_o(),Ji.current=a,le=s,Pe!==null?r=0:(Me=null,Be=0,r=Le)}if(r!==0){if(r===2&&(s=Xs(e),s!==0&&(i=s,r=ya(e,s))),r===1)throw n=Kn,Ct(e,0),pt(e,i),rr(e,Se()),n;if(r===6)pt(e,i);else{if(s=e.current.alternate,(i&30)===0&&!Um(s)&&(r=ss(e,i),r===2&&(a=Xs(e),a!==0&&(i=a,r=ya(e,a))),r===1))throw n=Kn,Ct(e,0),pt(e,i),rr(e,Se()),n;switch(e.finishedWork=s,e.finishedLanes=i,r){case 0:case 1:throw Error(l(345));case 2:Tt(e,er,Qr);break;case 3:if(pt(e,i),(i&130023424)===i&&(r=xa+500-Se(),10<r)){if(mi(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){Ge(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=So(Tt.bind(null,e,er,Qr),r);break}Tt(e,er,Qr);break;case 4:if(pt(e,i),(i&4194240)===i)break;for(r=e.eventTimes,s=-1;0<i;){var c=31-Sr(i);a=1<<c,c=r[c],c>s&&(s=c),i&=~a}if(i=s,i=Se()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Dm(i/1960))-i,10<i){e.timeoutHandle=So(Tt.bind(null,e,er,Qr),i);break}Tt(e,er,Qr);break;case 5:Tt(e,er,Qr);break;default:throw Error(l(329))}}}return rr(e,Se()),e.callbackNode===n?Fd.bind(null,e):null}function ya(e,r){var n=Qn;return e.current.memoizedState.isDehydrated&&(Ct(e,r).flags|=256),e=ss(e,r),e!==2&&(r=er,er=n,r!==null&&ja(r)),e}function ja(e){er===null?er=e:er.push.apply(er,e)}function Um(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Cr(a(),s))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function pt(e,r){for(r&=~fa,r&=~Zi,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Sr(r),i=1<<n;e[n]=-1,r&=~i}}function Ad(e){if((le&6)!==0)throw Error(l(327));tn();var r=mi(e,0);if((r&1)===0)return rr(e,Se()),null;var n=ss(e,r);if(e.tag!==0&&n===2){var i=Xs(e);i!==0&&(r=i,n=ya(e,i))}if(n===1)throw n=Kn,Ct(e,0),pt(e,r),rr(e,Se()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Tt(e,er,Qr),rr(e,Se()),null}function wa(e,r){var n=le;le|=1;try{return e(r)}finally{le=n,le===0&&(rn=Se()+500,Li&&st())}}function St(e){dt!==null&&dt.tag===0&&(le&6)===0&&tn();var r=le;le|=1;var n=vr.transition,i=fe;try{if(vr.transition=null,fe=1,e)return e()}finally{fe=i,vr.transition=n,le=r,(le&6)===0&&st()}}function ka(){dr=en.current,ye(en)}function Ct(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ym(n)),Pe!==null)for(n=Pe.return;n!==null;){var i=n;switch(Oo(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ei();break;case 3:Xt(),ye(Xe),ye(Ue),Ho();break;case 5:Do(i);break;case 4:Xt();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:Fo(i.type._context);break;case 22:case 23:ka()}n=n.return}if(Me=e,Pe=e=mt(e.current,null),Be=dr=r,Le=0,Kn=null,fa=Zi=bt=0,er=Qn=null,wt!==null){for(r=0;r<wt.length;r++)if(n=wt[r],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,a=n.pending;if(a!==null){var c=a.next;a.next=s,i.next=c}n.pending=i}wt=null}return e}function Bd(e,r){do{var n=Pe;try{if(_o(),Di.current=Vi,Ui){for(var i=Ne.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Ui=!1}if(Nt=0,Ie=Oe=Ne=null,qn=!1,Dn=0,ha.current=null,n===null||n.return===null){Le=1,Kn=r,Pe=null;break}e:{var a=e,c=n.return,p=n,h=r;if(r=Be,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var j=h,N=p,S=N.tag;if((N.mode&1)===0&&(S===0||S===11||S===15)){var k=N.alternate;k?(N.updateQueue=k.updateQueue,N.memoizedState=k.memoizedState,N.lanes=k.lanes):(N.updateQueue=null,N.memoizedState=null)}var L=dd(c);if(L!==null){L.flags&=-257,ud(L,c,p,a,r),L.mode&1&&cd(a,j,r),r=L,h=j;var F=r.updateQueue;if(F===null){var A=new Set;A.add(h),r.updateQueue=A}else F.add(h);break e}else{if((r&1)===0){cd(a,j,r),Na();break e}h=Error(l(426))}}else if(we&&p.mode&1){var Ce=dd(c);if(Ce!==null){(Ce.flags&65536)===0&&(Ce.flags|=256),ud(Ce,c,p,a,r),Mo(Jt(h,p));break e}}a=h=Jt(h,p),Le!==4&&(Le=2),Qn===null?Qn=[a]:Qn.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var v=ad(a,h,r);Mc(a,v);break e;case 1:p=h;var f=a.type,y=a.stateNode;if((a.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ct===null||!ct.has(y)))){a.flags|=65536,r&=-r,a.lanes|=r;var C=ld(a,p,r);Mc(a,C);break e}}a=a.return}while(a!==null)}Dd(n)}catch(W){r=W,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Wd(){var e=Ji.current;return Ji.current=Vi,e===null?Vi:e}function Na(){(Le===0||Le===3||Le===2)&&(Le=4),Me===null||(bt&268435455)===0&&(Zi&268435455)===0||pt(Me,Be)}function ss(e,r){var n=le;le|=2;var i=Wd();(Me!==e||Be!==r)&&(Qr=null,Ct(e,r));do try{Hm();break}catch(s){Bd(e,s)}while(!0);if(_o(),le=n,Ji.current=i,Pe!==null)throw Error(l(261));return Me=null,Be=0,Le}function Hm(){for(;Pe!==null;)qd(Pe)}function $m(){for(;Pe!==null&&!xp();)qd(Pe)}function qd(e){var r=$d(e.alternate,e,dr);e.memoizedProps=e.pendingProps,r===null?Dd(e):Pe=r,ha.current=null}function Dd(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=Fm(n,r,dr),n!==null){Pe=n;return}}else{if(n=Am(n,r),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Pe=null;return}}if(r=r.sibling,r!==null){Pe=r;return}Pe=r=e}while(r!==null);Le===0&&(Le=5)}function Tt(e,r,n){var i=fe,s=vr.transition;try{vr.transition=null,fe=1,Vm(e,r,n,i)}finally{vr.transition=s,fe=i}return null}function Vm(e,r,n,i){do tn();while(dt!==null);if((le&6)!==0)throw Error(l(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Cp(e,a),e===Me&&(Pe=Me=null,Be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||rs||(rs=!0,Vd(ci,function(){return tn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=vr.transition,vr.transition=null;var c=fe;fe=1;var p=le;le|=4,ha.current=null,Wm(e,n),Ld(n,e),pm(No),xi=!!ko,No=ko=null,e.current=n,qm(n),gp(),le=p,fe=c,vr.transition=a}else e.current=n;if(rs&&(rs=!1,dt=e,ts=s),a=e.pendingLanes,a===0&&(ct=null),jp(n.stateNode),rr(e,Se()),r!==null)for(i=e.onRecoverableError,n=0;n<r.length;n++)s=r[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(es)throw es=!1,e=ga,ga=null,e;return(ts&1)!==0&&e.tag!==0&&tn(),a=e.pendingLanes,(a&1)!==0?e===va?Gn++:(Gn=0,va=e):Gn=0,st(),null}function tn(){if(dt!==null){var e=El(ts),r=vr.transition,n=fe;try{if(vr.transition=null,fe=16>e?16:e,dt===null)var i=!1;else{if(e=dt,dt=null,ts=0,(le&6)!==0)throw Error(l(331));var s=le;for(le|=4,I=e.current;I!==null;){var a=I,c=a.child;if((I.flags&16)!==0){var p=a.deletions;if(p!==null){for(var h=0;h<p.length;h++){var j=p[h];for(I=j;I!==null;){var N=I;switch(N.tag){case 0:case 11:case 15:Vn(8,N,a)}var S=N.child;if(S!==null)S.return=N,I=S;else for(;I!==null;){N=I;var k=N.sibling,L=N.return;if(Td(N),N===j){I=null;break}if(k!==null){k.return=L,I=k;break}I=L}}}var F=a.alternate;if(F!==null){var A=F.child;if(A!==null){F.child=null;do{var Ce=A.sibling;A.sibling=null,A=Ce}while(A!==null)}}I=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,I=c;else e:for(;I!==null;){if(a=I,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Vn(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,I=v;break e}I=a.return}}var f=e.current;for(I=f;I!==null;){c=I;var y=c.child;if((c.subtreeFlags&2064)!==0&&y!==null)y.return=c,I=y;else e:for(c=f;I!==null;){if(p=I,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Xi(9,p)}}catch(W){be(p,p.return,W)}if(p===c){I=null;break e}var C=p.sibling;if(C!==null){C.return=p.return,I=C;break e}I=p.return}}if(le=s,st(),Ir&&typeof Ir.onPostCommitFiberRoot=="function")try{Ir.onPostCommitFiberRoot(di,e)}catch{}i=!0}return i}finally{fe=n,vr.transition=r}}return!1}function Ud(e,r,n){r=Jt(n,r),r=ad(e,r,1),e=at(e,r,1),r=Ge(),e!==null&&(yn(e,1,r),rr(e,r))}function be(e,r,n){if(e.tag===3)Ud(e,e,n);else for(;r!==null;){if(r.tag===3){Ud(r,e,n);break}else if(r.tag===1){var i=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ct===null||!ct.has(i))){e=Jt(n,e),e=ld(r,e,1),r=at(r,e,1),e=Ge(),r!==null&&(yn(r,1,e),rr(r,e));break}}r=r.return}}function Km(e,r,n){var i=e.pingCache;i!==null&&i.delete(r),r=Ge(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Be&n)===n&&(Le===4||Le===3&&(Be&130023424)===Be&&500>Se()-xa?Ct(e,0):fa|=n),rr(e,r)}function Hd(e,r){r===0&&((e.mode&1)===0?r=1:(r=pi,pi<<=1,(pi&130023424)===0&&(pi=4194304)));var n=Ge();e=$r(e,r),e!==null&&(yn(e,r,n),rr(e,n))}function Qm(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Hd(e,n)}function Gm(e,r){var n=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(l(314))}i!==null&&i.delete(r),Hd(e,n)}var $d;$d=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||Xe.current)Ze=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return Ze=!1,_m(e,r,n);Ze=(e.flags&131072)!==0}else Ze=!1,we&&(r.flags&1048576)!==0&&bc(r,Mi,r.index);switch(r.lanes=0,r.tag){case 2:var i=r.type;Gi(e,r),e=r.pendingProps;var s=Ht(r,Ue.current);Yt(r,n),s=Ko(null,r,i,e,s,n);var a=Qo();return r.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Je(i)?(a=!0,Oi(r)):a=!1,r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Wo(r),s.updater=Ki,r.stateNode=s,s._reactInternals=r,ea(r,i,e,n),r=ia(null,r,i,!0,a,n)):(r.tag=0,we&&a&&Eo(r),Qe(null,r,s,n),r=r.child),r;case 16:i=r.elementType;e:{switch(Gi(e,r),e=r.pendingProps,s=i._init,i=s(i._payload),r.type=i,s=r.tag=Xm(i),e=Pr(i,e),s){case 0:r=na(null,r,i,e,n);break e;case 1:r=gd(null,r,i,e,n);break e;case 11:r=pd(null,r,i,e,n);break e;case 14:r=md(null,r,i,Pr(i.type,e),n);break e}throw Error(l(306,i,""))}return r;case 0:return i=r.type,s=r.pendingProps,s=r.elementType===i?s:Pr(i,s),na(e,r,i,s,n);case 1:return i=r.type,s=r.pendingProps,s=r.elementType===i?s:Pr(i,s),gd(e,r,i,s,n);case 3:e:{if(vd(r),e===null)throw Error(l(387));i=r.pendingProps,a=r.memoizedState,s=a.element,Ic(e,r),Wi(r,i,null,n);var c=r.memoizedState;if(i=c.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){s=Jt(Error(l(423)),r),r=yd(e,r,i,n,s);break e}else if(i!==s){s=Jt(Error(l(424)),r),r=yd(e,r,i,n,s);break e}else for(cr=tt(r.stateNode.containerInfo.firstChild),lr=r,we=!0,Tr=null,n=Oc(r,null,i,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kt(),i===s){r=Kr(e,r,n);break e}Qe(e,r,i,n)}r=r.child}return r;case 5:return _c(r),e===null&&Io(r),i=r.type,s=r.pendingProps,a=e!==null?e.memoizedProps:null,c=s.children,bo(i,s)?c=null:a!==null&&bo(i,a)&&(r.flags|=32),xd(e,r),Qe(e,r,c,n),r.child;case 6:return e===null&&Io(r),null;case 13:return jd(e,r,n);case 4:return qo(r,r.stateNode.containerInfo),i=r.pendingProps,e===null?r.child=Qt(r,null,i,n):Qe(e,r,i,n),r.child;case 11:return i=r.type,s=r.pendingProps,s=r.elementType===i?s:Pr(i,s),pd(e,r,i,s,n);case 7:return Qe(e,r,r.pendingProps,n),r.child;case 8:return Qe(e,r,r.pendingProps.children,n),r.child;case 12:return Qe(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(i=r.type._context,s=r.pendingProps,a=r.memoizedProps,c=s.value,ge(Fi,i._currentValue),i._currentValue=c,a!==null)if(Cr(a.value,c)){if(a.children===s.children&&!Xe.current){r=Kr(e,r,n);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var p=a.dependencies;if(p!==null){c=a.child;for(var h=p.firstContext;h!==null;){if(h.context===i){if(a.tag===1){h=Vr(-1,n&-n),h.tag=2;var j=a.updateQueue;if(j!==null){j=j.shared;var N=j.pending;N===null?h.next=h:(h.next=N.next,N.next=h),j.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),Ao(a.return,n,r),p.lanes|=n;break}h=h.next}}else if(a.tag===10)c=a.type===r.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(l(341));c.lanes|=n,p=c.alternate,p!==null&&(p.lanes|=n),Ao(c,n,r),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===r){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}Qe(e,r,s.children,n),r=r.child}return r;case 9:return s=r.type,i=r.pendingProps.children,Yt(r,n),s=xr(s),i=i(s),r.flags|=1,Qe(e,r,i,n),r.child;case 14:return i=r.type,s=Pr(i,r.pendingProps),s=Pr(i.type,s),md(e,r,i,s,n);case 15:return hd(e,r,r.type,r.pendingProps,n);case 17:return i=r.type,s=r.pendingProps,s=r.elementType===i?s:Pr(i,s),Gi(e,r),r.tag=1,Je(i)?(e=!0,Oi(r)):e=!1,Yt(r,n),sd(r,i,s),ea(r,i,s,n),ia(null,r,i,!0,e,n);case 19:return kd(e,r,n);case 22:return fd(e,r,n)}throw Error(l(156,r.tag))};function Vd(e,r){return Sl(e,r)}function Ym(e,r,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yr(e,r,n,i){return new Ym(e,r,n,i)}function ba(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xm(e){if(typeof e=="function")return ba(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pr)return 11;if(e===mr)return 14}return 2}function mt(e,r){var n=e.alternate;return n===null?(n=yr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function os(e,r,n,i,s,a){var c=2;if(i=e,typeof e=="function")ba(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case Q:return Pt(n.children,s,a,r);case Ee:c=8,s|=8;break;case sr:return e=yr(12,n,r,s|2),e.elementType=sr,e.lanes=a,e;case Ke:return e=yr(13,n,r,s),e.elementType=Ke,e.lanes=a,e;case or:return e=yr(19,n,r,s),e.elementType=or,e.lanes=a,e;case xe:return as(n,s,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nr:c=10;break e;case Br:c=9;break e;case pr:c=11;break e;case mr:c=14;break e;case De:c=16,i=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=yr(c,n,r,s),r.elementType=e,r.type=i,r.lanes=a,r}function Pt(e,r,n,i){return e=yr(7,e,i,r),e.lanes=n,e}function as(e,r,n,i){return e=yr(22,e,i,r),e.elementType=xe,e.lanes=n,e.stateNode={isHidden:!1},e}function Sa(e,r,n){return e=yr(6,e,null,r),e.lanes=n,e}function Ca(e,r,n){return r=yr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Jm(e,r,n,i,s){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Js(0),this.expirationTimes=Js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ta(e,r,n,i,s,a,c,p,h){return e=new Jm(e,r,n,p,h),r===1?(r=1,a===!0&&(r|=8)):r=0,a=yr(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wo(a),e}function Zm(e,r,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:i==null?null:""+i,children:e,containerInfo:r,implementation:n}}function Kd(e){if(!e)return it;e=e._reactInternals;e:{if(xt(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Je(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(Je(n))return wc(e,n,r)}return r}function Qd(e,r,n,i,s,a,c,p,h){return e=Ta(n,i,!0,e,s,a,c,p,h),e.context=Kd(null),n=e.current,i=Ge(),s=ut(n),a=Vr(i,s),a.callback=r!=null?r:null,at(n,a,s),e.current.lanes=s,yn(e,s,i),rr(e,i),e}function ls(e,r,n,i){var s=r.current,a=Ge(),c=ut(s);return n=Kd(n),r.context===null?r.context=n:r.pendingContext=n,r=Vr(a,c),r.payload={element:e},i=i===void 0?null:i,i!==null&&(r.callback=i),e=at(s,r,c),e!==null&&(Or(e,s,c,a),Bi(e,s,c)),c}function cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Pa(e,r){Gd(e,r),(e=e.alternate)&&Gd(e,r)}function eh(){return null}var Yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function za(e){this._internalRoot=e}ds.prototype.render=za.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));ls(e,r,null,null)},ds.prototype.unmount=za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;St(function(){ls(null,e,null,null)}),r[qr]=null}};function ds(e){this._internalRoot=e}ds.prototype.unstable_scheduleHydration=function(e){if(e){var r=Il();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Zr.length&&r!==0&&r<Zr[n].priority;n++);Zr.splice(n,0,e),n===0&&_l(e)}};function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xd(){}function rh(e,r,n,i,s){if(s){if(typeof i=="function"){var a=i;i=function(){var j=cs(c);a.call(j)}}var c=Qd(r,i,e,0,null,!1,!1,"",Xd);return e._reactRootContainer=c,e[qr]=c.current,In(e.nodeType===8?e.parentNode:e),St(),c}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var p=i;i=function(){var j=cs(h);p.call(j)}}var h=Ta(e,0,!1,null,null,!1,!1,"",Xd);return e._reactRootContainer=h,e[qr]=h.current,In(e.nodeType===8?e.parentNode:e),St(function(){ls(r,h,n,i)}),h}function ps(e,r,n,i,s){var a=n._reactRootContainer;if(a){var c=a;if(typeof s=="function"){var p=s;s=function(){var h=cs(c);p.call(h)}}ls(r,c,e,s)}else c=rh(n,r,e,s,i);return cs(c)}Ol=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=vn(r.pendingLanes);n!==0&&(Zs(r,n|1),rr(r,Se()),(le&6)===0&&(rn=Se()+500,st()))}break;case 13:St(function(){var i=$r(e,1);if(i!==null){var s=Ge();Or(i,e,1,s)}}),Pa(e,1)}},eo=function(e){if(e.tag===13){var r=$r(e,134217728);if(r!==null){var n=Ge();Or(r,e,134217728,n)}Pa(e,134217728)}},Ll=function(e){if(e.tag===13){var r=ut(e),n=$r(e,r);if(n!==null){var i=Ge();Or(n,e,r,i)}Pa(e,r)}},Il=function(){return fe},Ml=function(e,r){var n=fe;try{return fe=e,r()}finally{fe=n}},Vs=function(e,r,n){switch(r){case"input":if(As(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var i=n[r];if(i!==e&&i.form===e.form){var s=zi(i);if(!s)throw Error(l(90));br(i),As(i,s)}}}break;case"textarea":cl(e,n);break;case"select":r=n.value,r!=null&&Lt(e,!!n.multiple,r,!1)}},vl=wa,yl=St;var th={usingClientEntryPoint:!1,Events:[_n,Dt,zi,xl,gl,wa]},Yn={findFiberByHostInstance:gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nh={bundleType:Yn.bundleType,version:Yn.version,rendererPackageName:Yn.rendererPackageName,rendererConfig:Yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nl(e),e===null?null:e.stateNode},findFiberByHostInstance:Yn.findFiberByHostInstance||eh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{di=ms.inject(nh),Ir=ms}catch{}}return tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th,tr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ea(r))throw Error(l(200));return Zm(e,r,null,n)},tr.createRoot=function(e,r){if(!Ea(e))throw Error(l(299));var n=!1,i="",s=Yd;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),r=Ta(e,1,!1,null,null,n,!1,i,s),e[qr]=r.current,In(e.nodeType===8?e.parentNode:e),new za(r)},tr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Nl(r),e=e===null?null:e.stateNode,e},tr.flushSync=function(e){return St(e)},tr.hydrate=function(e,r,n){if(!us(r))throw Error(l(200));return ps(null,e,r,!0,n)},tr.hydrateRoot=function(e,r,n){if(!Ea(e))throw Error(l(405));var i=n!=null&&n.hydratedSources||null,s=!1,a="",c=Yd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),r=Qd(r,null,e,1,n!=null?n:null,s,!1,a,c),e[qr]=r.current,In(e),i)for(e=0;e<i.length;e++)n=i[e],s=n._getVersion,s=s(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,s]:r.mutableSourceEagerHydrationData.push(n,s);return new ds(r)},tr.render=function(e,r,n){if(!us(r))throw Error(l(200));return ps(null,e,r,!1,n)},tr.unmountComponentAtNode=function(e){if(!us(e))throw Error(l(40));return e._reactRootContainer?(St(function(){ps(null,null,e,!1,function(){e._reactRootContainer=null,e[qr]=null})}),!0):!1},tr.unstable_batchedUpdates=wa,tr.unstable_renderSubtreeIntoContainer=function(e,r,n,i){if(!us(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return ps(e,r,n,!1,i)},tr.version="18.3.1-next-f1338f8080-20240426",tr}var su;function ph(){if(su)return Ia.exports;su=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Ia.exports=uh(),Ia.exports}var ou;function mh(){if(ou)return hs;ou=1;var o=ph();return hs.createRoot=o.createRoot,hs.hydrateRoot=o.hydrateRoot,hs}var hh=mh(),Y=Ja();const jr=sh(Y);var nr=function(){return nr=Object.assign||function(d){for(var l,m=1,u=arguments.length;m<u;m++){l=arguments[m];for(var x in l)Object.prototype.hasOwnProperty.call(l,x)&&(d[x]=l[x])}return d},nr.apply(this,arguments)};function Ns(o,d,l){if(l||arguments.length===2)for(var m=0,u=d.length,x;m<u;m++)(x||!(m in d))&&(x||(x=Array.prototype.slice.call(d,0,m)),x[m]=d[m]);return o.concat(x||Array.prototype.slice.call(d))}var je="-ms-",Zn="-moz-",he="-webkit-",Mu="comm",Es="rule",Za="decl",fh="@import",Ru="@keyframes",xh="@layer",_u=Math.abs,el=String.fromCharCode,Ua=Object.assign;function gh(o,d){return _e(o,0)^45?(((d<<2^_e(o,0))<<2^_e(o,1))<<2^_e(o,2))<<2^_e(o,3):0}function Fu(o){return o.trim()}function Gr(o,d){return(o=d.exec(o))?o[0]:o}function ee(o,d,l){return o.replace(d,l)}function vs(o,d,l){return o.indexOf(d,l)}function _e(o,d){return o.charCodeAt(d)|0}function on(o,d,l){return o.slice(d,l)}function Ar(o){return o.length}function Au(o){return o.length}function Jn(o,d){return d.push(o),o}function vh(o,d){return o.map(d).join("")}function au(o,d){return o.filter(function(l){return!Gr(l,d)})}var Os=1,an=1,Bu=0,wr=0,ze=0,un="";function Ls(o,d,l,m,u,x,b,z){return{value:o,root:d,parent:l,type:m,props:u,children:x,line:Os,column:an,length:b,return:"",siblings:z}}function ft(o,d){return Ua(Ls("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},d)}function nn(o){for(;o.root;)o=ft(o.root,{children:[o]});Jn(o,o.siblings)}function yh(){return ze}function jh(){return ze=wr>0?_e(un,--wr):0,an--,ze===10&&(an=1,Os--),ze}function Lr(){return ze=wr<Bu?_e(un,wr++):0,an++,ze===10&&(an=1,Os++),ze}function Et(){return _e(un,wr)}function ys(){return wr}function Is(o,d){return on(un,o,d)}function Ha(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wh(o){return Os=an=1,Bu=Ar(un=o),wr=0,[]}function kh(o){return un="",o}function _a(o){return Fu(Is(wr-1,$a(o===91?o+2:o===40?o+1:o)))}function Nh(o){for(;(ze=Et())&&ze<33;)Lr();return Ha(o)>2||Ha(ze)>3?"":" "}function bh(o,d){for(;--d&&Lr()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Is(o,ys()+(d<6&&Et()==32&&Lr()==32))}function $a(o){for(;Lr();)switch(ze){case o:return wr;case 34:case 39:o!==34&&o!==39&&$a(ze);break;case 40:o===41&&$a(o);break;case 92:Lr();break}return wr}function Sh(o,d){for(;Lr()&&o+ze!==57;)if(o+ze===84&&Et()===47)break;return"/*"+Is(d,wr-1)+"*"+el(o===47?o:Lr())}function Ch(o){for(;!Ha(Et());)Lr();return Is(o,wr)}function Th(o){return kh(js("",null,null,null,[""],o=wh(o),0,[0],o))}function js(o,d,l,m,u,x,b,z,T){for(var E=0,q=0,M=b,R=0,U=0,_=0,B=1,H=1,ue=1,ae=0,se="",re=u,pe=x,X=m,Q=se;H;)switch(_=ae,ae=Lr()){case 40:if(_!=108&&_e(Q,M-1)==58){vs(Q+=ee(_a(ae),"&","&\f"),"&\f",_u(E?z[E-1]:0))!=-1&&(ue=-1);break}case 34:case 39:case 91:Q+=_a(ae);break;case 9:case 10:case 13:case 32:Q+=Nh(_);break;case 92:Q+=bh(ys()-1,7);continue;case 47:switch(Et()){case 42:case 47:Jn(Ph(Sh(Lr(),ys()),d,l,T),T);break;default:Q+="/"}break;case 123*B:z[E++]=Ar(Q)*ue;case 125*B:case 59:case 0:switch(ae){case 0:case 125:H=0;case 59+q:ue==-1&&(Q=ee(Q,/\f/g,"")),U>0&&Ar(Q)-M&&Jn(U>32?cu(Q+";",m,l,M-1,T):cu(ee(Q," ","")+";",m,l,M-2,T),T);break;case 59:Q+=";";default:if(Jn(X=lu(Q,d,l,E,q,u,z,se,re=[],pe=[],M,x),x),ae===123)if(q===0)js(Q,d,X,X,re,x,M,z,pe);else switch(R===99&&_e(Q,3)===110?100:R){case 100:case 108:case 109:case 115:js(o,X,X,m&&Jn(lu(o,X,X,0,0,u,z,se,u,re=[],M,pe),pe),u,pe,M,z,m?re:pe);break;default:js(Q,X,X,X,[""],pe,0,z,pe)}}E=q=U=0,B=ue=1,se=Q="",M=b;break;case 58:M=1+Ar(Q),U=_;default:if(B<1){if(ae==123)--B;else if(ae==125&&B++==0&&jh()==125)continue}switch(Q+=el(ae),ae*B){case 38:ue=q>0?1:(Q+="\f",-1);break;case 44:z[E++]=(Ar(Q)-1)*ue,ue=1;break;case 64:Et()===45&&(Q+=_a(Lr())),R=Et(),q=M=Ar(se=Q+=Ch(ys())),ae++;break;case 45:_===45&&Ar(Q)==2&&(B=0)}}return x}function lu(o,d,l,m,u,x,b,z,T,E,q,M){for(var R=u-1,U=u===0?x:[""],_=Au(U),B=0,H=0,ue=0;B<m;++B)for(var ae=0,se=on(o,R+1,R=_u(H=b[B])),re=o;ae<_;++ae)(re=Fu(H>0?U[ae]+" "+se:ee(se,/&\f/g,U[ae])))&&(T[ue++]=re);return Ls(o,d,l,u===0?Es:z,T,E,q,M)}function Ph(o,d,l,m){return Ls(o,d,l,Mu,el(yh()),on(o,2,-2),0,m)}function cu(o,d,l,m,u){return Ls(o,d,l,Za,on(o,0,m),on(o,m+1,-1),m,u)}function Wu(o,d,l){switch(gh(o,d)){case 5103:return he+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+o+o;case 4789:return Zn+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return he+o+Zn+o+je+o+o;case 5936:switch(_e(o,d+11)){case 114:return he+o+je+ee(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return he+o+je+ee(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return he+o+je+ee(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return he+o+je+o+o;case 6165:return he+o+je+"flex-"+o+o;case 5187:return he+o+ee(o,/(\w+).+(:[^]+)/,he+"box-$1$2"+je+"flex-$1$2")+o;case 5443:return he+o+je+"flex-item-"+ee(o,/flex-|-self/g,"")+(Gr(o,/flex-|baseline/)?"":je+"grid-row-"+ee(o,/flex-|-self/g,""))+o;case 4675:return he+o+je+"flex-line-pack"+ee(o,/align-content|flex-|-self/g,"")+o;case 5548:return he+o+je+ee(o,"shrink","negative")+o;case 5292:return he+o+je+ee(o,"basis","preferred-size")+o;case 6060:return he+"box-"+ee(o,"-grow","")+he+o+je+ee(o,"grow","positive")+o;case 4554:return he+ee(o,/([^-])(transform)/g,"$1"+he+"$2")+o;case 6187:return ee(ee(ee(o,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),o,"")+o;case 5495:case 3959:return ee(o,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return ee(ee(o,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+o+o;case 4200:if(!Gr(o,/flex-|baseline/))return je+"grid-column-align"+on(o,d)+o;break;case 2592:case 3360:return je+ee(o,"template-","")+o;case 4384:case 3616:return l&&l.some(function(m,u){return d=u,Gr(m.props,/grid-\w+-end/)})?~vs(o+(l=l[d].value),"span",0)?o:je+ee(o,"-start","")+o+je+"grid-row-span:"+(~vs(l,"span",0)?Gr(l,/\d+/):+Gr(l,/\d+/)-+Gr(o,/\d+/))+";":je+ee(o,"-start","")+o;case 4896:case 4128:return l&&l.some(function(m){return Gr(m.props,/grid-\w+-start/)})?o:je+ee(ee(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return ee(o,/(.+)-inline(.+)/,he+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ar(o)-1-d>6)switch(_e(o,d+1)){case 109:if(_e(o,d+4)!==45)break;case 102:return ee(o,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+Zn+(_e(o,d+3)==108?"$3":"$2-$3"))+o;case 115:return~vs(o,"stretch",0)?Wu(ee(o,"stretch","fill-available"),d,l)+o:o}break;case 5152:case 5920:return ee(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(m,u,x,b,z,T,E){return je+u+":"+x+E+(b?je+u+"-span:"+(z?T:+T-+x)+E:"")+o});case 4949:if(_e(o,d+6)===121)return ee(o,":",":"+he)+o;break;case 6444:switch(_e(o,_e(o,14)===45?18:11)){case 120:return ee(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(_e(o,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+je+"$2box$3")+o;case 100:return ee(o,":",":"+je)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(o,"scroll-","scroll-snap-")+o}return o}function bs(o,d){for(var l="",m=0;m<o.length;m++)l+=d(o[m],m,o,d)||"";return l}function zh(o,d,l,m){switch(o.type){case xh:if(o.children.length)break;case fh:case Za:return o.return=o.return||o.value;case Mu:return"";case Ru:return o.return=o.value+"{"+bs(o.children,m)+"}";case Es:if(!Ar(o.value=o.props.join(",")))return""}return Ar(l=bs(o.children,m))?o.return=o.value+"{"+l+"}":""}function Eh(o){var d=Au(o);return function(l,m,u,x){for(var b="",z=0;z<d;z++)b+=o[z](l,m,u,x)||"";return b}}function Oh(o){return function(d){d.root||(d=d.return)&&o(d)}}function Lh(o,d,l,m){if(o.length>-1&&!o.return)switch(o.type){case Za:o.return=Wu(o.value,o.length,l);return;case Ru:return bs([ft(o,{value:ee(o.value,"@","@"+he)})],m);case Es:if(o.length)return vh(l=o.props,function(u){switch(Gr(u,m=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":nn(ft(o,{props:[ee(u,/:(read-\w+)/,":"+Zn+"$1")]})),nn(ft(o,{props:[u]})),Ua(o,{props:au(l,m)});break;case"::placeholder":nn(ft(o,{props:[ee(u,/:(plac\w+)/,":"+he+"input-$1")]})),nn(ft(o,{props:[ee(u,/:(plac\w+)/,":"+Zn+"$1")]})),nn(ft(o,{props:[ee(u,/:(plac\w+)/,je+"input-$1")]})),nn(ft(o,{props:[u]})),Ua(o,{props:au(l,m)});break}return""})}}var Ih={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ur={},ln=typeof process!="undefined"&&ur!==void 0&&(ur.REACT_APP_SC_ATTR||ur.SC_ATTR)||"data-styled",qu="active",Du="data-styled-version",Ms="6.1.18",rl=`/*!sc*/
`,Ss=typeof window!="undefined"&&typeof document!="undefined",Mh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&ur!==void 0&&ur.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ur.REACT_APP_SC_DISABLE_SPEEDY!==""?ur.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ur.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&ur!==void 0&&ur.SC_DISABLE_SPEEDY!==void 0&&ur.SC_DISABLE_SPEEDY!==""&&ur.SC_DISABLE_SPEEDY!=="false"&&ur.SC_DISABLE_SPEEDY),Rs=Object.freeze([]),cn=Object.freeze({});function Rh(o,d,l){return l===void 0&&(l=cn),o.theme!==l.theme&&o.theme||d||l.theme}var Uu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_h=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fh=/(^-|-$)/g;function du(o){return o.replace(_h,"-").replace(Fh,"")}var Ah=/(a)(d)/gi,fs=52,uu=function(o){return String.fromCharCode(o+(o>25?39:97))};function Va(o){var d,l="";for(d=Math.abs(o);d>fs;d=d/fs|0)l=uu(d%fs)+l;return(uu(d%fs)+l).replace(Ah,"$1-$2")}var Fa,Hu=5381,sn=function(o,d){for(var l=d.length;l;)o=33*o^d.charCodeAt(--l);return o},$u=function(o){return sn(Hu,o)};function Bh(o){return Va($u(o)>>>0)}function Wh(o){return o.displayName||o.name||"Component"}function Aa(o){return typeof o=="string"&&!0}var Vu=typeof Symbol=="function"&&Symbol.for,Ku=Vu?Symbol.for("react.memo"):60115,qh=Vu?Symbol.for("react.forward_ref"):60112,Dh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hh=((Fa={})[qh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fa[Ku]=Qu,Fa);function pu(o){return("type"in(d=o)&&d.type.$$typeof)===Ku?Qu:"$$typeof"in o?Hh[o.$$typeof]:Dh;var d}var $h=Object.defineProperty,Vh=Object.getOwnPropertyNames,mu=Object.getOwnPropertySymbols,Kh=Object.getOwnPropertyDescriptor,Qh=Object.getPrototypeOf,hu=Object.prototype;function Gu(o,d,l){if(typeof d!="string"){if(hu){var m=Qh(d);m&&m!==hu&&Gu(o,m,l)}var u=Vh(d);mu&&(u=u.concat(mu(d)));for(var x=pu(o),b=pu(d),z=0;z<u.length;++z){var T=u[z];if(!(T in Uh||l&&l[T]||b&&T in b||x&&T in x)){var E=Kh(d,T);try{$h(o,T,E)}catch{}}}}return o}function dn(o){return typeof o=="function"}function tl(o){return typeof o=="object"&&"styledComponentId"in o}function zt(o,d){return o&&d?"".concat(o," ").concat(d):o||d||""}function fu(o,d){if(o.length===0)return"";for(var l=o[0],m=1;m<o.length;m++)l+=o[m];return l}function ei(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function Ka(o,d,l){if(l===void 0&&(l=!1),!l&&!ei(o)&&!Array.isArray(o))return d;if(Array.isArray(d))for(var m=0;m<d.length;m++)o[m]=Ka(o[m],d[m]);else if(ei(d))for(var m in d)o[m]=Ka(o[m],d[m]);return o}function nl(o,d){Object.defineProperty(o,"toString",{value:d})}function ni(o){for(var d=[],l=1;l<arguments.length;l++)d[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(d.length>0?" Args: ".concat(d.join(", ")):""))}var Gh=(function(){function o(d){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=d}return o.prototype.indexOfGroup=function(d){for(var l=0,m=0;m<d;m++)l+=this.groupSizes[m];return l},o.prototype.insertRules=function(d,l){if(d>=this.groupSizes.length){for(var m=this.groupSizes,u=m.length,x=u;d>=x;)if((x<<=1)<0)throw ni(16,"".concat(d));this.groupSizes=new Uint32Array(x),this.groupSizes.set(m),this.length=x;for(var b=u;b<x;b++)this.groupSizes[b]=0}for(var z=this.indexOfGroup(d+1),T=(b=0,l.length);b<T;b++)this.tag.insertRule(z,l[b])&&(this.groupSizes[d]++,z++)},o.prototype.clearGroup=function(d){if(d<this.length){var l=this.groupSizes[d],m=this.indexOfGroup(d),u=m+l;this.groupSizes[d]=0;for(var x=m;x<u;x++)this.tag.deleteRule(m)}},o.prototype.getGroup=function(d){var l="";if(d>=this.length||this.groupSizes[d]===0)return l;for(var m=this.groupSizes[d],u=this.indexOfGroup(d),x=u+m,b=u;b<x;b++)l+="".concat(this.tag.getRule(b)).concat(rl);return l},o})(),ws=new Map,Cs=new Map,ks=1,xs=function(o){if(ws.has(o))return ws.get(o);for(;Cs.has(ks);)ks++;var d=ks++;return ws.set(o,d),Cs.set(d,o),d},Yh=function(o,d){ks=d+1,ws.set(o,d),Cs.set(d,o)},Xh="style[".concat(ln,"][").concat(Du,'="').concat(Ms,'"]'),Jh=new RegExp("^".concat(ln,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zh=function(o,d,l){for(var m,u=l.split(","),x=0,b=u.length;x<b;x++)(m=u[x])&&o.registerName(d,m)},ef=function(o,d){for(var l,m=((l=d.textContent)!==null&&l!==void 0?l:"").split(rl),u=[],x=0,b=m.length;x<b;x++){var z=m[x].trim();if(z){var T=z.match(Jh);if(T){var E=0|parseInt(T[1],10),q=T[2];E!==0&&(Yh(q,E),Zh(o,q,T[3]),o.getTag().insertRules(E,u)),u.length=0}else u.push(z)}}},xu=function(o){for(var d=document.querySelectorAll(Xh),l=0,m=d.length;l<m;l++){var u=d[l];u&&u.getAttribute(ln)!==qu&&(ef(o,u),u.parentNode&&u.parentNode.removeChild(u))}};function rf(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Yu=function(o){var d=document.head,l=o||d,m=document.createElement("style"),u=(function(z){var T=Array.from(z.querySelectorAll("style[".concat(ln,"]")));return T[T.length-1]})(l),x=u!==void 0?u.nextSibling:null;m.setAttribute(ln,qu),m.setAttribute(Du,Ms);var b=rf();return b&&m.setAttribute("nonce",b),l.insertBefore(m,x),m},tf=(function(){function o(d){this.element=Yu(d),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var m=document.styleSheets,u=0,x=m.length;u<x;u++){var b=m[u];if(b.ownerNode===l)return b}throw ni(17)})(this.element),this.length=0}return o.prototype.insertRule=function(d,l){try{return this.sheet.insertRule(l,d),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(d){this.sheet.deleteRule(d),this.length--},o.prototype.getRule=function(d){var l=this.sheet.cssRules[d];return l&&l.cssText?l.cssText:""},o})(),nf=(function(){function o(d){this.element=Yu(d),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(d,l){if(d<=this.length&&d>=0){var m=document.createTextNode(l);return this.element.insertBefore(m,this.nodes[d]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(d){this.element.removeChild(this.nodes[d]),this.length--},o.prototype.getRule=function(d){return d<this.length?this.nodes[d].textContent:""},o})(),sf=(function(){function o(d){this.rules=[],this.length=0}return o.prototype.insertRule=function(d,l){return d<=this.length&&(this.rules.splice(d,0,l),this.length++,!0)},o.prototype.deleteRule=function(d){this.rules.splice(d,1),this.length--},o.prototype.getRule=function(d){return d<this.length?this.rules[d]:""},o})(),gu=Ss,of={isServer:!Ss,useCSSOMInjection:!Mh},Xu=(function(){function o(d,l,m){d===void 0&&(d=cn),l===void 0&&(l={});var u=this;this.options=nr(nr({},of),d),this.gs=l,this.names=new Map(m),this.server=!!d.isServer,!this.server&&Ss&&gu&&(gu=!1,xu(this)),nl(this,function(){return(function(x){for(var b=x.getTag(),z=b.length,T="",E=function(M){var R=(function(ue){return Cs.get(ue)})(M);if(R===void 0)return"continue";var U=x.names.get(R),_=b.getGroup(M);if(U===void 0||!U.size||_.length===0)return"continue";var B="".concat(ln,".g").concat(M,'[id="').concat(R,'"]'),H="";U!==void 0&&U.forEach(function(ue){ue.length>0&&(H+="".concat(ue,","))}),T+="".concat(_).concat(B,'{content:"').concat(H,'"}').concat(rl)},q=0;q<z;q++)E(q);return T})(u)})}return o.registerId=function(d){return xs(d)},o.prototype.rehydrate=function(){!this.server&&Ss&&xu(this)},o.prototype.reconstructWithOptions=function(d,l){return l===void 0&&(l=!0),new o(nr(nr({},this.options),d),this.gs,l&&this.names||void 0)},o.prototype.allocateGSInstance=function(d){return this.gs[d]=(this.gs[d]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(d=(function(l){var m=l.useCSSOMInjection,u=l.target;return l.isServer?new sf(u):m?new tf(u):new nf(u)})(this.options),new Gh(d)));var d},o.prototype.hasNameForId=function(d,l){return this.names.has(d)&&this.names.get(d).has(l)},o.prototype.registerName=function(d,l){if(xs(d),this.names.has(d))this.names.get(d).add(l);else{var m=new Set;m.add(l),this.names.set(d,m)}},o.prototype.insertRules=function(d,l,m){this.registerName(d,l),this.getTag().insertRules(xs(d),m)},o.prototype.clearNames=function(d){this.names.has(d)&&this.names.get(d).clear()},o.prototype.clearRules=function(d){this.getTag().clearGroup(xs(d)),this.clearNames(d)},o.prototype.clearTag=function(){this.tag=void 0},o})(),af=/&/g,lf=/^\s*\/\/.*$/gm;function Ju(o,d){return o.map(function(l){return l.type==="rule"&&(l.value="".concat(d," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(d," ")),l.props=l.props.map(function(m){return"".concat(d," ").concat(m)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=Ju(l.children,d)),l})}function cf(o){var d,l,m,u=cn,x=u.options,b=x===void 0?cn:x,z=u.plugins,T=z===void 0?Rs:z,E=function(R,U,_){return _.startsWith(l)&&_.endsWith(l)&&_.replaceAll(l,"").length>0?".".concat(d):R},q=T.slice();q.push(function(R){R.type===Es&&R.value.includes("&")&&(R.props[0]=R.props[0].replace(af,l).replace(m,E))}),b.prefix&&q.push(Lh),q.push(zh);var M=function(R,U,_,B){U===void 0&&(U=""),_===void 0&&(_=""),B===void 0&&(B="&"),d=B,l=U,m=new RegExp("\\".concat(l,"\\b"),"g");var H=R.replace(lf,""),ue=Th(_||U?"".concat(_," ").concat(U," { ").concat(H," }"):H);b.namespace&&(ue=Ju(ue,b.namespace));var ae=[];return bs(ue,Eh(q.concat(Oh(function(se){return ae.push(se)})))),ae};return M.hash=T.length?T.reduce(function(R,U){return U.name||ni(15),sn(R,U.name)},Hu).toString():"",M}var df=new Xu,Qa=cf(),Zu=jr.createContext({shouldForwardProp:void 0,styleSheet:df,stylis:Qa});Zu.Consumer;jr.createContext(void 0);function vu(){return Y.useContext(Zu)}var uf=(function(){function o(d,l){var m=this;this.inject=function(u,x){x===void 0&&(x=Qa);var b=m.name+x.hash;u.hasNameForId(m.id,b)||u.insertRules(m.id,b,x(m.rules,b,"@keyframes"))},this.name=d,this.id="sc-keyframes-".concat(d),this.rules=l,nl(this,function(){throw ni(12,String(m.name))})}return o.prototype.getName=function(d){return d===void 0&&(d=Qa),this.name+d.hash},o})(),pf=function(o){return o>="A"&&o<="Z"};function yu(o){for(var d="",l=0;l<o.length;l++){var m=o[l];if(l===1&&m==="-"&&o[0]==="-")return o;pf(m)?d+="-"+m.toLowerCase():d+=m}return d.startsWith("ms-")?"-"+d:d}var ep=function(o){return o==null||o===!1||o===""},rp=function(o){var d,l,m=[];for(var u in o){var x=o[u];o.hasOwnProperty(u)&&!ep(x)&&(Array.isArray(x)&&x.isCss||dn(x)?m.push("".concat(yu(u),":"),x,";"):ei(x)?m.push.apply(m,Ns(Ns(["".concat(u," {")],rp(x),!1),["}"],!1)):m.push("".concat(yu(u),": ").concat((d=u,(l=x)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||d in Ih||d.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return m};function Ot(o,d,l,m){if(ep(o))return[];if(tl(o))return[".".concat(o.styledComponentId)];if(dn(o)){if(!dn(x=o)||x.prototype&&x.prototype.isReactComponent||!d)return[o];var u=o(d);return Ot(u,d,l,m)}var x;return o instanceof uf?l?(o.inject(l,m),[o.getName(m)]):[o]:ei(o)?rp(o):Array.isArray(o)?Array.prototype.concat.apply(Rs,o.map(function(b){return Ot(b,d,l,m)})):[o.toString()]}function mf(o){for(var d=0;d<o.length;d+=1){var l=o[d];if(dn(l)&&!tl(l))return!1}return!0}var hf=$u(Ms),ff=(function(){function o(d,l,m){this.rules=d,this.staticRulesId="",this.isStatic=(m===void 0||m.isStatic)&&mf(d),this.componentId=l,this.baseHash=sn(hf,l),this.baseStyle=m,Xu.registerId(l)}return o.prototype.generateAndInjectStyles=function(d,l,m){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(d,l,m):"";if(this.isStatic&&!m.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))u=zt(u,this.staticRulesId);else{var x=fu(Ot(this.rules,d,l,m)),b=Va(sn(this.baseHash,x)>>>0);if(!l.hasNameForId(this.componentId,b)){var z=m(x,".".concat(b),void 0,this.componentId);l.insertRules(this.componentId,b,z)}u=zt(u,b),this.staticRulesId=b}else{for(var T=sn(this.baseHash,m.hash),E="",q=0;q<this.rules.length;q++){var M=this.rules[q];if(typeof M=="string")E+=M;else if(M){var R=fu(Ot(M,d,l,m));T=sn(T,R+q),E+=R}}if(E){var U=Va(T>>>0);l.hasNameForId(this.componentId,U)||l.insertRules(this.componentId,U,m(E,".".concat(U),void 0,this.componentId)),u=zt(u,U)}}return u},o})(),tp=jr.createContext(void 0);tp.Consumer;var Ba={};function xf(o,d,l){var m=tl(o),u=o,x=!Aa(o),b=d.attrs,z=b===void 0?Rs:b,T=d.componentId,E=T===void 0?(function(re,pe){var X=typeof re!="string"?"sc":du(re);Ba[X]=(Ba[X]||0)+1;var Q="".concat(X,"-").concat(Bh(Ms+X+Ba[X]));return pe?"".concat(pe,"-").concat(Q):Q})(d.displayName,d.parentComponentId):T,q=d.displayName,M=q===void 0?(function(re){return Aa(re)?"styled.".concat(re):"Styled(".concat(Wh(re),")")})(o):q,R=d.displayName&&d.componentId?"".concat(du(d.displayName),"-").concat(d.componentId):d.componentId||E,U=m&&u.attrs?u.attrs.concat(z).filter(Boolean):z,_=d.shouldForwardProp;if(m&&u.shouldForwardProp){var B=u.shouldForwardProp;if(d.shouldForwardProp){var H=d.shouldForwardProp;_=function(re,pe){return B(re,pe)&&H(re,pe)}}else _=B}var ue=new ff(l,R,m?u.componentStyle:void 0);function ae(re,pe){return(function(X,Q,Ee){var sr=X.attrs,Nr=X.componentStyle,Br=X.defaultProps,pr=X.foldedComponentIds,Ke=X.styledComponentId,or=X.target,mr=jr.useContext(tp),De=vu(),xe=X.shouldForwardProp||De.shouldForwardProp,P=Rh(Q,mr,Br)||cn,D=(function(ie,te,me){for(var oe,ce=nr(nr({},te),{className:void 0,theme:me}),Fe=0;Fe<ie.length;Fe+=1){var Wr=dn(oe=ie[Fe])?oe(ce):oe;for(var br in Wr)ce[br]=br==="className"?zt(ce[br],Wr[br]):br==="style"?nr(nr({},ce[br]),Wr[br]):Wr[br]}return te.className&&(ce.className=zt(ce.className,te.className)),ce})(sr,Q,P),O=D.as||or,g={};for(var w in D)D[w]===void 0||w[0]==="$"||w==="as"||w==="theme"&&D.theme===P||(w==="forwardedAs"?g.as=D.forwardedAs:xe&&!xe(w,O)||(g[w]=D[w]));var J=(function(ie,te){var me=vu(),oe=ie.generateAndInjectStyles(te,me.styleSheet,me.stylis);return oe})(Nr,D),Z=zt(pr,Ke);return J&&(Z+=" "+J),D.className&&(Z+=" "+D.className),g[Aa(O)&&!Uu.has(O)?"class":"className"]=Z,Ee&&(g.ref=Ee),Y.createElement(O,g)})(se,re,pe)}ae.displayName=M;var se=jr.forwardRef(ae);return se.attrs=U,se.componentStyle=ue,se.displayName=M,se.shouldForwardProp=_,se.foldedComponentIds=m?zt(u.foldedComponentIds,u.styledComponentId):"",se.styledComponentId=R,se.target=m?u.target:o,Object.defineProperty(se,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(re){this._foldedDefaultProps=m?(function(pe){for(var X=[],Q=1;Q<arguments.length;Q++)X[Q-1]=arguments[Q];for(var Ee=0,sr=X;Ee<sr.length;Ee++)Ka(pe,sr[Ee],!0);return pe})({},u.defaultProps,re):re}}),nl(se,function(){return".".concat(se.styledComponentId)}),x&&Gu(se,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),se}function ju(o,d){for(var l=[o[0]],m=0,u=d.length;m<u;m+=1)l.push(d[m],o[m+1]);return l}var wu=function(o){return Object.assign(o,{isCss:!0})};function gf(o){for(var d=[],l=1;l<arguments.length;l++)d[l-1]=arguments[l];if(dn(o)||ei(o))return wu(Ot(ju(Rs,Ns([o],d,!0))));var m=o;return d.length===0&&m.length===1&&typeof m[0]=="string"?Ot(m):wu(Ot(ju(m,d)))}function Ga(o,d,l){if(l===void 0&&(l=cn),!d)throw ni(1,d);var m=function(u){for(var x=[],b=1;b<arguments.length;b++)x[b-1]=arguments[b];return o(d,l,gf.apply(void 0,Ns([u],x,!1)))};return m.attrs=function(u){return Ga(o,d,nr(nr({},l),{attrs:Array.prototype.concat(l.attrs,u).filter(Boolean)}))},m.withConfig=function(u){return Ga(o,d,nr(nr({},l),u))},m}var np=function(o){return Ga(xf,o)},Te=np;Uu.forEach(function(o){Te[o]=np(o)});const Wa={Wrapper:Te.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:Te.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:Te.main`
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
    `},ku={Wrapper:Te.header`
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
    `,Main:Te.div`
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
    `};var ip={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Nu=jr.createContext&&jr.createContext(ip),vf=["attr","size","title"];function yf(o,d){if(o==null)return{};var l=jf(o,d),m,u;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(o);for(u=0;u<x.length;u++)m=x[u],!(d.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(o,m)&&(l[m]=o[m])}return l}function jf(o,d){if(o==null)return{};var l={};for(var m in o)if(Object.prototype.hasOwnProperty.call(o,m)){if(d.indexOf(m)>=0)continue;l[m]=o[m]}return l}function Ts(){return Ts=Object.assign?Object.assign.bind():function(o){for(var d=1;d<arguments.length;d++){var l=arguments[d];for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&(o[m]=l[m])}return o},Ts.apply(this,arguments)}function bu(o,d){var l=Object.keys(o);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(o);d&&(m=m.filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable})),l.push.apply(l,m)}return l}function Ps(o){for(var d=1;d<arguments.length;d++){var l=arguments[d]!=null?arguments[d]:{};d%2?bu(Object(l),!0).forEach(function(m){wf(o,m,l[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):bu(Object(l)).forEach(function(m){Object.defineProperty(o,m,Object.getOwnPropertyDescriptor(l,m))})}return o}function wf(o,d,l){return d=kf(d),d in o?Object.defineProperty(o,d,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[d]=l,o}function kf(o){var d=Nf(o,"string");return typeof d=="symbol"?d:d+""}function Nf(o,d){if(typeof o!="object"||!o)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var m=l.call(o,d);if(typeof m!="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(o)}function sp(o){return o&&o.map((d,l)=>jr.createElement(d.tag,Ps({key:l},d.attr),sp(d.child)))}function K(o){return d=>jr.createElement(bf,Ts({attr:Ps({},o.attr)},d),sp(o.child))}function bf(o){var d=l=>{var{attr:m,size:u,title:x}=o,b=yf(o,vf),z=u||l.size||"1em",T;return l.className&&(T=l.className),o.className&&(T=(T?T+" ":"")+o.className),jr.createElement("svg",Ts({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,m,b,{className:T,style:Ps(Ps({color:o.color||l.color},l.style),o.style),height:z,width:z,xmlns:"http://www.w3.org/2000/svg"}),x&&jr.createElement("title",null,x),o.children)};return Nu!==void 0?jr.createElement(Nu.Consumer,null,l=>d(l)):d(ip)}function _s(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}function zs(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function qa(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(o)}function Sf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(o)}function op(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function Su(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(o)}function We(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(o)}function qe(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(o)}function Ya(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(o)}function ri(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function Cf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(o)}function ir(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function Tf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"1",y1:"10",x2:"23",y2:"10"},child:[]}]})(o)}function Cu(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(o)}function Pf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(o)}function zf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(o)}function Ef(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(o)}function Tu(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(o)}function Of(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(o)}function Lf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(o)}function If(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(o)}function Mf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(o)}function ii(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(o)}function Rf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(o)}function _f(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(o)}function Ff(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 16 12 14 15 10 15 8 12 2 12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]}]})(o)}function Da(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(o)}function kr(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function Pu(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(o)}function Af(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(o)}function Bf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(o)}function ti(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(o)}function Wf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(o)}function qf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(o)}function Df(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(o)}function il(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(o)}function ap(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(o)}function Ye(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(o)}function Uf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(o)}function lp(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(o)}function Hf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(o)}function $f(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(o)}function Vf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(o)}function Kf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(o)}function zu(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(o)}function Eu(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(o)}function Ou(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12.55a11 11 0 0 1 14.08 0"},child:[]},{tag:"path",attr:{d:"M1.42 9a16 16 0 0 1 21.16 0"},child:[]},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"},child:[]}]})(o)}function Lu(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(o)}function Qf(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(o)}function Xa(o){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}const Gf=()=>{const[o,d]=Y.useState(!1),[l,m]=Y.useState("dark");Y.useEffect(()=>{const z=localStorage.getItem("app-theme")||"dark";m(z),z==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),Y.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const u=Y.useMemo(()=>l==="light"?"dark":"light",[l]),x=()=>{m(u)};return t.jsx(ku.Wrapper,{children:t.jsx(ku.Main,{children:t.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[t.jsxs("div",{className:"logoNameWrapper",children:[t.jsxs("div",{className:"logoWrapper",children:[!o&&t.jsx("div",{className:"logoSkeleton"}),t.jsx("img",{src:"/operating-systems-core-notes/logo.png",alt:"operating-systems-core-notes",onLoad:()=>d(!0),style:{opacity:o?1:0}})]}),t.jsxs("div",{className:"nameWrapper",children:[t.jsx("div",{className:"title",children:"operating-systems-core-notes"}),t.jsx("div",{className:"subTitle",children:"At-a-glance operating systems revision"})]})]}),t.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:x,"aria-label":`Switch to ${u} theme`,title:`Switch to ${u}`,children:[t.jsx("span",{className:"icon",children:l==="light"?t.jsx(Df,{}):t.jsx(Hf,{})}),t.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})};function Yf(o){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(o)}function Xf(o){return K({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M641.5 256c0 3.1-1.7 6.1-4.5 7.5L547.9 317c-1.4.8-2.8 1.4-4.5 1.4-1.4 0-3.1-.3-4.5-1.1-2.8-1.7-4.5-4.5-4.5-7.8v-35.6H295.7c25.3 39.6 40.5 106.9 69.6 106.9H392V354c0-5 3.9-8.9 8.9-8.9H490c5 0 8.9 3.9 8.9 8.9v89.1c0 5-3.9 8.9-8.9 8.9h-89.1c-5 0-8.9-3.9-8.9-8.9v-26.7h-26.7c-75.4 0-81.1-142.5-124.7-142.5H140.3c-8.1 30.6-35.9 53.5-69 53.5C32 327.3 0 295.3 0 256s32-71.3 71.3-71.3c33.1 0 61 22.8 69 53.5 39.1 0 43.9 9.5 74.6-60.4C255 88.7 273 95.7 323.8 95.7c7.5-20.9 27-35.6 50.4-35.6 29.5 0 53.5 23.9 53.5 53.5s-23.9 53.5-53.5 53.5c-23.4 0-42.9-14.8-50.4-35.6H294c-29.1 0-44.3 67.4-69.6 106.9h310.1v-35.6c0-3.3 1.7-6.1 4.5-7.8 2.8-1.7 6.4-1.4 8.9.3l89.1 53.5c2.8 1.1 4.5 4.1 4.5 7.2z"},child:[]}]})(o)}const Jf={Wrapper:Te.footer`
        display: grid;
        gap: 16px;
        padding: 24px;
        color: var(--color-text-muted);
        border-top: 1px solid var(--color-border);
        font-size: 12px;

        .footerIntro,
        .footerGroups,
        .footerBottom {
            display: flex;
            align-items: center;
        }

        .footerIntro {
            gap: 10px;

            img {
                width: 34px;
                height: 34px;
                object-fit: contain;
                border-radius: 8px;
            }

            div {
                display: grid;
                gap: 2px;
            }

            strong {
                color: var(--color-text-primary);
            }
        }

        .footerText {
            max-width: 680px;
            line-height: 1.6;
        }

        .footerGroups {
            flex-wrap: wrap;
            gap: 28px;
        }

        .footerGroups > div {
            display: grid;
            gap: 8px;
        }

        .footerGroups > div > span {
            color: var(--color-text-primary);
            font-weight: 700;
            letter-spacing: .08em;
            text-transform: uppercase;
        }

        .iconLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .iconLinks a {
            display: grid;
            width: 34px;
            height: 34px;
            place-items: center;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            border-radius: 8px;
            transition: color .18s ease, border-color .18s ease, text-shadow .18s ease, box-shadow .18s ease;
        }

        .iconLinks a:hover {
            color: var(--color-text-primary);
            border-color: var(--color-border-light);
            text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 60%, transparent);
            box-shadow: 0 0 14px var(--color-shadow);
        }

        .footerBottom {
            flex-wrap: wrap;
            gap: 8px;
            padding-top: 14px;
            border-top: 1px solid var(--color-border);
        }

        .footerBottom a {
            color: var(--color-text-secondary);
            font-weight: 600;
            transition: color .18s ease, text-shadow .18s ease;
        }

        .footerBottom a:hover {
            color: var(--color-text-primary);
            text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 60%, transparent);
        }

        @media (max-width: 600px) {
            padding: 20px 16px;
        }
    `},Zf=[["Portfolio","https://www.ashishranjan.net/",If],["GitHub","https://github.com/a2rp",Lf],["CodePen","https://codepen.io/ash1198",Yf],["LinkedIn","https://www.linkedin.com/in/aashishranjan",Af],["Facebook","https://www.facebook.com/theash.ashish/",Pf],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",Qf],["Email","mailto:ash.ranjan09@gmail.com",Wf]],ex=[["Support","https://a2rp-donation-page.netlify.app/",_f],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",Cf],["Patreon","https://patreon.com/a2rp",lp]];function Iu({items:o}){return t.jsx("div",{className:"iconLinks",children:o.map(([d,l,m])=>t.jsx("a",{href:l,target:l.startsWith("http")?"_blank":void 0,rel:l.startsWith("http")?"noopener noreferrer":void 0,"aria-label":d,title:d,children:Y.createElement(m)},d))})}function rx(){return t.jsxs(Jf.Wrapper,{children:[t.jsxs("div",{className:"footerIntro",children:[t.jsx("img",{src:"/operating-systems-core-notes/logo.png",alt:"Operating Systems notes logo"}),t.jsxs("div",{children:[t.jsx("strong",{children:"Operating Systems Core Notes"}),t.jsx("span",{children:"Fast revision for systems fundamentals"})]})]}),t.jsx("p",{className:"footerText",children:"A structured single-page reference for processes, scheduling, memory, synchronization, deadlocks, file systems and I/O."}),t.jsxs("div",{className:"footerGroups",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Links"}),t.jsx(Iu,{items:Zf})]}),t.jsxs("div",{children:[t.jsx("span",{children:"Support"}),t.jsx(Iu,{items:ex})]})]}),t.jsxs("div",{className:"footerBottom",children:["Copyright © ",new Date().getFullYear()," "," ",t.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"}),t.jsx("span",{children:"|"}),t.jsx("a",{href:"https://github.com/a2rp/operating-systems-core-notes",target:"_blank",rel:"noopener noreferrer",children:"Repository"})]})]})}const tx={Wrapper:Te.section`
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
                filter: grayscale(1);
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
    `},nx=()=>{const[o,d]=Y.useState(!1),[l,m]=Y.useState("what"),u=Y.useMemo(()=>"https://picsum.photos/id/180/1200/700",[]);return t.jsxs(tx.Wrapper,{id:"about-operating-systems",children:[t.jsxs("div",{className:"top",children:[t.jsxs("div",{className:"badgeRow",children:[t.jsxs("span",{className:"badge",children:[t.jsx(kr,{}),"Core Notes"]}),t.jsxs("span",{className:"badge muted",children:[t.jsx(_s,{}),"Single page revision"]})]}),t.jsx("h1",{className:"title",children:"Operating Systems Core Notes"}),t.jsx("p",{className:"sub",children:"OS is the software layer that makes hardware usable. It decides who runs on CPU, what stays in memory, how files are stored, and how programs talk to devices."})]}),t.jsxs("div",{className:"hero",children:[!o&&t.jsx("div",{className:"heroSkeleton"}),t.jsx("img",{src:u,alt:"Operating systems",onLoad:()=>d(!0),style:{opacity:o?1:0}}),t.jsxs("div",{className:"heroOverlay",children:[t.jsx("div",{className:"heroTitle",children:"Think like the OS: CPU, memory, files, devices."}),t.jsx("div",{className:"heroMeta",children:"Beginner friendly - fast revision - interview ready"})]})]}),t.jsxs("div",{className:"grid",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("span",{className:"icon",children:t.jsx(ir,{})}),t.jsx("h3",{className:"h3",children:"What an OS really does"})]}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"CPU"})," - schedules which process gets time"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Memory"})," - allocates RAM and uses virtual memory"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Storage"})," - manages files and directories"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"I/O"})," - handles devices via drivers and interrupts"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Security"})," - isolates processes and enforces permissions"]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"One-line mental model"}),t.jsx("div",{className:"monoBlock",children:"App - system call - kernel - driver - hardware"})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("span",{className:"icon",children:t.jsx(ri,{})}),t.jsx("h3",{className:"h3",children:"A tiny example"})]}),t.jsx("p",{className:"p",children:"When you open a file in any app, the app does not talk to the disk directly. It requests the OS using system calls. The OS checks permission, finds the data in the file system, reads blocks from disk, and returns bytes to the app."}),t.jsxs("div",{className:"example",children:[t.jsx("div",{className:"exampleTitle",children:"Flow"}),t.jsxs("div",{className:"flow",children:[t.jsx("div",{className:"step",children:'App requests "open file"'}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"Kernel validates access"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"File system finds blocks"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"Disk driver reads data"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"Bytes returned to app"})]})]}),t.jsxs("div",{className:"callout",children:[t.jsx(ii,{}),t.jsx("span",{children:"File I/O looks simple, but OS is doing real work behind the scenes."})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("span",{className:"icon",children:t.jsx(Ye,{})}),t.jsx("h3",{className:"h3",children:"Key terms you will see everywhere"})]}),t.jsxs("div",{className:"chips",children:[t.jsx("span",{className:"chip",children:"Kernel"}),t.jsx("span",{className:"chip",children:"System call"}),t.jsx("span",{className:"chip",children:"Process"}),t.jsx("span",{className:"chip",children:"Thread"}),t.jsx("span",{className:"chip",children:"Context switch"}),t.jsx("span",{className:"chip",children:"Scheduling"}),t.jsx("span",{className:"chip",children:"Paging"}),t.jsx("span",{className:"chip",children:"Virtual memory"}),t.jsx("span",{className:"chip",children:"Mutex"}),t.jsx("span",{className:"chip",children:"Semaphore"}),t.jsx("span",{className:"chip",children:"Deadlock"}),t.jsx("span",{className:"chip",children:"File system"}),t.jsx("span",{className:"chip",children:"Interrupt"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Why these matter in interviews"}),t.jsx("p",{className:"p",children:"Most questions are just these words combined into a scenario. If the mental model is clear, answers become simple."})]})]})]})]})},ix={Wrapper:Te.section`
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
    `},sx=()=>{const[o,d]=Y.useState("role"),l=Y.useMemo(()=>[{key:"role",title:"What is an Operating System",icon:t.jsx(kr,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"An Operating System, or OS, is the main software that runs on a computer and manages the hardware for you. It sits between your programs and the physical machine, and it makes sure everything works safely and smoothly."}),t.jsxs("div",{className:"miniGrid",children:[t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"In simple words"}),t.jsx("p",{className:"p",children:"OS is like a manager. Programs ask for CPU, memory, files, and devices. The OS decides what to give, when to give, and how to keep things safe."})]}),t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"What OS manages"}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"CPU"})," time for processes"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Memory"})," for running programs"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Files"})," and folders on storage"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Devices"})," ","like disk, keyboard, network"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"Security"})," ","permissions and isolation"]})]})]})]}),t.jsx("div",{className:"monoBlock",children:"Program - system call - OS kernel - driver - hardware"})]})},{key:"mediator",title:"OS role as a mediator",icon:t.jsx(Ye,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Programs do not directly control hardware. If every program could touch the disk and memory freely, one buggy app could crash the whole system or steal data from other apps."}),t.jsxs("div",{className:"callout",children:[t.jsx(Ye,{}),t.jsxs("div",{className:"calloutText",children:[t.jsx("div",{className:"calloutTitle",children:"Why mediator is needed"}),t.jsx("div",{className:"calloutSub",children:"OS controls access to hardware and shared resources so multiple programs can run safely at the same time."})]})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"OS gives each program a controlled environment to run"}),t.jsx("li",{children:"OS prevents one program from corrupting another program's memory"}),t.jsx("li",{children:"OS applies permissions for files and devices"}),t.jsx("li",{children:"OS shares CPU fairly using scheduling"})]})]})},{key:"example",title:"Example - Browser request flow",icon:t.jsx(Ou,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"When you type a website in a browser, the browser is just a program. It needs network, CPU, memory, and sometimes disk. The OS helps at every step."}),t.jsxs("div",{className:"flow",children:[t.jsxs("div",{className:"step",children:[t.jsxs("div",{className:"stepTop",children:[t.jsx($f,{}),t.jsx("span",{children:"1 - Browser creates a request"})]}),t.jsx("div",{className:"stepSub",children:"Browser asks OS for network access."})]}),t.jsx("div",{className:"arrow",children:"-"}),t.jsxs("div",{className:"step",children:[t.jsxs("div",{className:"stepTop",children:[t.jsx(Ou,{}),t.jsx("span",{children:"2 - OS uses network stack"})]}),t.jsx("div",{className:"stepSub",children:"OS talks to the network driver and sends packets."})]}),t.jsx("div",{className:"arrow",children:"-"}),t.jsxs("div",{className:"step",children:[t.jsxs("div",{className:"stepTop",children:[t.jsx(ir,{}),t.jsx("span",{children:"3 - CPU runs the browser"})]}),t.jsx("div",{className:"stepSub",children:"OS schedules CPU time so browser can run."})]}),t.jsx("div",{className:"arrow",children:"-"}),t.jsxs("div",{className:"step",children:[t.jsxs("div",{className:"stepTop",children:[t.jsx(kr,{}),t.jsx("span",{children:"4 - Memory is used"})]}),t.jsx("div",{className:"stepSub",children:"OS gives memory to store page, images, and code."})]}),t.jsx("div",{className:"arrow",children:"-"}),t.jsxs("div",{className:"step",children:[t.jsxs("div",{className:"stepTop",children:[t.jsx(ii,{}),t.jsx("span",{children:"5 - Disk cache and files"})]}),t.jsx("div",{className:"stepSub",children:"OS reads and writes cache, cookies, and downloads."})]}),t.jsx("div",{className:"arrow",children:"-"}),t.jsxs("div",{className:"step",children:[t.jsxs("div",{className:"stepTop",children:[t.jsx(ri,{}),t.jsx("span",{children:"6 - Output on screen"})]}),t.jsx("div",{className:"stepSub",children:"OS and drivers help display the final output."})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("p",{className:"p",children:"Browser does not control hardware. It requests services. OS coordinates hardware and returns results."})]})]})},{key:"kernel",title:"Kernel",icon:t.jsx(ir,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"The kernel is the core part of the OS. It runs with the highest privilege and directly controls hardware through drivers."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Kernel decides which process runs on the CPU"}),t.jsx("li",{children:"Kernel manages memory and virtual memory"}),t.jsx("li",{children:"Kernel controls file system operations"}),t.jsx("li",{children:"Kernel handles interrupts from devices"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Easy way to remember"}),t.jsx("div",{className:"monoBlock",children:"Kernel is the boss that touches hardware."})]})]})},{key:"syscalls",title:"System calls",icon:t.jsx(ri,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A system call is a safe way for a program to ask the OS for help. Programs cannot directly do privileged actions like reading a disk block or changing memory protection. They request the OS using system calls."}),t.jsxs("div",{className:"miniGrid",children:[t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"Common system call examples"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Open a file, read, write, close"}),t.jsx("li",{children:"Create a process, start a program"}),t.jsx("li",{children:"Allocate memory for a program"}),t.jsx("li",{children:"Send and receive data over network"})]})]}),t.jsxs("div",{className:"miniCard",children:[t.jsx("div",{className:"miniTitle",children:"What happens inside"}),t.jsx("p",{className:"p",children:"Program enters kernel mode, OS checks permissions, OS does the work, then returns result back to the program."})]})]}),t.jsx("div",{className:"monoBlock",children:"App calls function - OS system call - kernel does work"})]})},{key:"modes",title:"User mode vs Kernel mode",icon:t.jsx(Ye,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"OS uses two main modes to protect the system. Programs normally run in user mode. The kernel runs in kernel mode."}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"User mode"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Normal apps run here"}),t.jsx("li",{children:"Limited permissions"}),t.jsx("li",{children:"Cannot directly access hardware"}),t.jsx("li",{children:"Must use system calls to request OS work"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Kernel mode"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"OS kernel runs here"}),t.jsx("li",{children:"Full permissions"}),t.jsx("li",{children:"Can access hardware and CPU instructions"}),t.jsx("li",{children:"Handles system calls and interrupts"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Why modes exist"}),t.jsx("p",{className:"p",children:"If every app had full access, one mistake could crash everything. Modes protect the computer."})]})]})}],[]),m=u=>{d(x=>x===u?"":u)};return t.jsxs(ix.Wrapper,{id:"what-is-operating-system",children:[t.jsxs("div",{className:"top",children:[t.jsx("div",{className:"kicker",children:"Foundations"}),t.jsx("h2",{className:"title",children:"What is an Operating System"}),t.jsx("p",{className:"sub",children:"A beginner friendly introduction to OS role, browser request flow, and the three most important concepts - kernel, system calls, and user mode vs kernel mode."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"item",children:[t.jsxs("button",{type:"button",className:"btn",onClick:()=>m(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"left",children:[t.jsx("span",{className:"icon",children:u.icon}),t.jsx("span",{className:"text",children:u.title})]}),t.jsx("span",{className:"right",children:x?t.jsx(qe,{}):t.jsx(We,{})})]}),x&&t.jsx("div",{className:"body",children:u.body})]},u.key)})})]})},ox={Wrapper:Te.section`
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
    `},ax=()=>{const[o,d]=Y.useState("goals"),l=u=>{d(x=>x===u?"":u)},m=Y.useMemo(()=>[{key:"convenience",icon:t.jsx(Su,{}),title:"Convenience",oneLine:"OS makes the computer easy to use so apps can run without managing hardware details.",points:["Apps do not manually control CPU or RAM - OS gives safe APIs","You get files, folders, windows, and settings as a usable layer","Drivers hide hardware differences so the same app can run on many machines"],exampleTitle:"Example",example:"When you click a file to open it, the app just asks the OS to open it. The OS finds the file, checks permissions, reads data from disk, and returns it to the app."},{key:"efficiency",icon:t.jsx(Xa,{}),title:"Efficiency",oneLine:"OS uses hardware smartly so the system stays fast and responsive.",points:["CPU scheduling gives each process time without wasting cycles","Memory management keeps active data in RAM and uses virtual memory when needed","I/O buffering and caching reduce slow disk operations"],exampleTitle:"Example",example:"If one app is waiting for disk or network, OS can run another app on CPU instead of keeping CPU idle. This improves overall performance."},{key:"fairness",icon:t.jsx(Eu,{}),title:"Fairness",oneLine:"OS shares CPU, memory, and devices among processes so one program cannot hog everything.",points:["Time slicing gives each runnable process a fair chance","Priority rules exist, but OS still prevents starvation in well-designed schedulers","Resource limits can stop one app from consuming all RAM or CPU"],exampleTitle:"Example",example:"If a heavy app is running, OS still lets your music player and browser remain usable because CPU time is distributed across processes."},{key:"security",icon:t.jsx(Ye,{}),title:"Security",oneLine:"OS protects the system from unsafe access by isolating processes and enforcing permissions.",points:["User mode vs kernel mode prevents apps from directly controlling hardware","File permissions decide who can read, write, or execute a file","Process isolation stops one app from reading another app's private memory"],exampleTitle:"Example",example:"A normal app cannot access another app's memory or your system files directly. OS blocks it unless permission is explicitly granted."}],[]);return t.jsxs(ox.Wrapper,{id:"os-goals-and-responsibilities",children:[t.jsxs("div",{className:"top",children:[t.jsxs("div",{className:"kicker",children:[t.jsx("span",{className:"dot"}),"Operating Systems"]}),t.jsx("h2",{className:"title",children:"OS Goals and Responsibilities"}),t.jsx("p",{className:"sub",children:"An Operating System has two big jobs - make the computer usable and keep it under control. To do that, OS is designed around a few core goals. If you understand these goals, many OS topics start feeling connected and logical."})]}),t.jsxs("div",{className:"accordion",children:[t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>l("goals"),"aria-expanded":o==="goals",children:[t.jsxs("span",{className:"left",children:[t.jsx(kr,{}),"Goals in one view"]}),t.jsx("span",{className:"right",children:o==="goals"?t.jsx(qe,{}):t.jsx(We,{})})]}),o==="goals"&&t.jsxs("div",{className:"accBody",children:[t.jsxs("div",{className:"pillRow",children:[t.jsxs("span",{className:"pill",children:[t.jsx(Su,{}),"Convenience"]}),t.jsxs("span",{className:"pill",children:[t.jsx(Xa,{}),"Efficiency"]}),t.jsxs("span",{className:"pill",children:[t.jsx(Eu,{}),"Fairness"]}),t.jsxs("span",{className:"pill",children:[t.jsx(Ye,{}),"Security"]})]}),t.jsxs("div",{className:"note",children:[t.jsx("div",{className:"noteTitle",children:"Beginner mental model"}),t.jsx("div",{className:"mono",children:"OS is a referee between programs and hardware."}),t.jsx("p",{className:"p",children:"Programs want resources. Hardware is limited. OS decides who gets what, when, and how safely."})]}),t.jsx("div",{className:"cards",children:m.map(u=>t.jsxs("div",{className:"goalCard",children:[t.jsxs("div",{className:"goalHead",children:[t.jsx("span",{className:"icon",children:u.icon}),t.jsxs("div",{className:"headText",children:[t.jsx("div",{className:"goalTitle",children:u.title}),t.jsx("div",{className:"goalOneLine",children:u.oneLine})]})]}),t.jsx("ul",{className:"list",children:u.points.map((x,b)=>t.jsx("li",{children:x},`${u.key}-${b}`))}),t.jsxs("div",{className:"example",children:[t.jsx("div",{className:"exampleTitle",children:u.exampleTitle}),t.jsx("p",{className:"p",children:u.example})]})]},u.key))})]})]}),t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>l("examples"),"aria-expanded":o==="examples",children:[t.jsxs("span",{className:"left",children:[t.jsx(ir,{}),"Real examples you see daily"]}),t.jsx("span",{className:"right",children:o==="examples"?t.jsx(qe,{}):t.jsx(We,{})})]}),o==="examples"&&t.jsxs("div",{className:"accBody",children:[t.jsxs("div",{className:"exampleGrid",children:[t.jsxs("div",{className:"exCard",children:[t.jsxs("div",{className:"exHead",children:[t.jsx("span",{className:"exIcon",children:t.jsx(ir,{})}),t.jsx("div",{className:"exTitle",children:"Multitasking"})]}),t.jsx("p",{className:"p",children:"Your system runs many processes at the same time. OS switches the CPU between tasks very fast. It feels like everything is running together, but CPU time is shared in small slices."}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"Why it matters"}),t.jsx("div",{className:"mono",children:"Keeps UI responsive while heavy work continues."})]})]}),t.jsxs("div",{className:"exCard",children:[t.jsxs("div",{className:"exHead",children:[t.jsx("span",{className:"exIcon",children:t.jsx(ti,{})}),t.jsx("div",{className:"exTitle",children:"File permissions"})]}),t.jsx("p",{className:"p",children:"OS controls who can read, write, or execute a file. This prevents random apps or users from changing important system files and protects personal data."}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"Simple idea"}),t.jsx("div",{className:"mono",children:"Access allowed only with permission."})]})]}),t.jsxs("div",{className:"exCard",children:[t.jsxs("div",{className:"exHead",children:[t.jsx("span",{className:"exIcon",children:t.jsx(Ye,{})}),t.jsx("div",{className:"exTitle",children:"Process isolation"})]}),t.jsx("p",{className:"p",children:"Each process gets its own memory space. One app cannot read or modify another app's memory directly. If one app crashes, the OS prevents it from taking everything down."}),t.jsxs("div",{className:"mini",children:[t.jsx("div",{className:"miniTitle",children:"Outcome"}),t.jsx("div",{className:"mono",children:"Better stability and security."})]})]})]}),t.jsxs("div",{className:"note",children:[t.jsx("div",{className:"noteTitle",children:"Common confusion"}),t.jsx("p",{className:"p",children:"People think OS is only a user interface. Real OS work happens in the kernel - managing CPU time, memory, files, and device access."})]})]})]}),t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>l("responsibilities"),"aria-expanded":o==="responsibilities",children:[t.jsxs("span",{className:"left",children:[t.jsx(Ye,{}),"Responsibilities OS must handle"]}),t.jsx("span",{className:"right",children:o==="responsibilities"?t.jsx(qe,{}):t.jsx(We,{})})]}),o==="responsibilities"&&t.jsxs("div",{className:"accBody",children:[t.jsx("p",{className:"p",children:"These are the core responsibilities that show up again and again across all OS topics. Think of them as the OS checklist."}),t.jsxs("div",{className:"respGrid",children:[t.jsxs("div",{className:"respCard",children:[t.jsxs("div",{className:"respHead",children:[t.jsx(ir,{}),t.jsx("div",{children:"Process management"})]}),t.jsx("p",{className:"p",children:"Create, schedule, pause, resume, and stop processes. Also handles threads and context switching."})]}),t.jsxs("div",{className:"respCard",children:[t.jsxs("div",{className:"respHead",children:[t.jsx(kr,{}),t.jsx("div",{children:"Memory management"})]}),t.jsx("p",{className:"p",children:"Allocate RAM, free memory, and provide virtual memory so programs can run safely without overwriting each other."})]}),t.jsxs("div",{className:"respCard",children:[t.jsxs("div",{className:"respHead",children:[t.jsx(ti,{}),t.jsx("div",{children:"File and storage management"})]}),t.jsx("p",{className:"p",children:"Organize files and directories, manage permissions, and maintain metadata so storage remains consistent."})]}),t.jsxs("div",{className:"respCard",children:[t.jsxs("div",{className:"respHead",children:[t.jsx(Ye,{}),t.jsx("div",{children:"Protection and security"})]}),t.jsx("p",{className:"p",children:"Enforce user access rules, isolate processes, and separate kernel privileges from user programs."})]})]}),t.jsxs("div",{className:"note",children:[t.jsx("div",{className:"noteTitle",children:"Quick summary"}),t.jsx("div",{className:"mono",children:"OS manages CPU, memory, files, and devices - safely and fairly."})]})]})]})]})]})},lx={Wrapper:Te.section`
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
    `},cx=()=>{const[o,d]=Y.useState("overview"),l=Y.useMemo(()=>[{key:"overview",title:"Kernel basics - what it is",icon:t.jsx(op,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"The kernel is the core part of an operating system. It runs with highest privilege and controls access to hardware. Apps do not directly touch CPU, memory, disks, or devices. Instead, apps request services from the kernel using system calls."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("div",{className:"monoBlock",children:"App - system call - kernel - driver - hardware"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"User space"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Browsers, editors, games"}),t.jsx("li",{children:"Runs with limited privileges"}),t.jsx("li",{children:"Must ask kernel for files, network, memory pages, device access"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Kernel space"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Scheduler, memory manager, drivers"}),t.jsx("li",{children:"Runs with highest privileges"}),t.jsx("li",{children:"Must protect system from crashes and misuse"})]})]})]})]})},{key:"architectures",title:"Monolithic vs Microkernel vs Hybrid",icon:t.jsx(kr,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Kernel architecture is about where OS services run. Some designs keep most services inside the kernel. Some move many services to user space to improve isolation."}),t.jsxs("div",{className:"stack",children:[t.jsxs("div",{className:"stackCard",children:[t.jsx("div",{className:"stackTitle",children:"Monolithic kernel"}),t.jsx("p",{className:"p",children:"Most OS services run inside the kernel, including file system, drivers, networking, memory management."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - very fast because calls stay inside kernel space"}),t.jsx("li",{children:"Cons - a buggy driver can crash the whole system"})]}),t.jsxs("div",{className:"exampleRow",children:[t.jsx("span",{className:"tag",children:"Example"}),t.jsx("span",{className:"exampleText",children:"Linux is commonly described as monolithic with loadable modules"})]})]}),t.jsxs("div",{className:"stackCard",children:[t.jsx("div",{className:"stackTitle",children:"Microkernel"}),t.jsx("p",{className:"p",children:"Only minimal core runs in kernel - scheduling basics, IPC, and low-level memory handling. Other services like drivers and file system run in user space as separate processes."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - better isolation, one service crash does not necessarily crash the whole OS"}),t.jsx("li",{children:"Cons - more overhead due to message passing between processes"})]}),t.jsxs("div",{className:"exampleRow",children:[t.jsx("span",{className:"tag",children:"Example"}),t.jsx("span",{className:"exampleText",children:"MINIX is a classic teaching example"})]})]}),t.jsxs("div",{className:"stackCard",children:[t.jsx("div",{className:"stackTitle",children:"Hybrid kernel"}),t.jsx("p",{className:"p",children:"Mix of both approaches. Some services run in kernel for speed, but design tries to keep structure modular like microkernels."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - balances speed and modularity"}),t.jsx("li",{children:"Cons - still large kernel surface area"})]}),t.jsxs("div",{className:"exampleRow",children:[t.jsx("span",{className:"tag",children:"Example"}),t.jsx("span",{className:"exampleText",children:"Windows NT is often described as hybrid"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple way to remember"}),t.jsxs("div",{className:"monoBlock",children:["Monolithic - everything in kernel for speed",`
`,"Microkernel - minimal kernel, services in user space",`
`,"Hybrid - mix, aims for balance"]})]})]})},{key:"does",title:"What the kernel does in daily life",icon:t.jsx(Uf,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"The kernel is not one feature. It is a collection of critical managers. These managers decide how the computer behaves when many programs compete for limited resources."}),t.jsxs("div",{className:"tasks",children:[t.jsxs("div",{className:"task",children:[t.jsxs("div",{className:"taskHead",children:[t.jsx("span",{className:"taskIcon",children:t.jsx(ir,{})}),t.jsx("div",{className:"taskTitle",children:"Process scheduling"})]}),t.jsx("p",{className:"p",children:"CPU time is limited. The kernel scheduler decides which process or thread runs next. It tries to be fair and responsive, so your system feels smooth."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"You are downloading a file and watching a video at the same time. Scheduler gives both tasks CPU time so neither completely freezes."})]})]}),t.jsxs("div",{className:"task",children:[t.jsxs("div",{className:"taskHead",children:[t.jsx("span",{className:"taskIcon",children:t.jsx(kr,{})}),t.jsx("div",{className:"taskTitle",children:"Memory management"})]}),t.jsx("p",{className:"p",children:"The kernel decides how RAM is used. It gives memory to processes, frees it when done, and uses virtual memory so apps can run even if RAM is limited."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"You open many browser tabs and still the system works. Some memory pages are moved to disk temporarily, and brought back when needed."})]})]}),t.jsxs("div",{className:"task",children:[t.jsxs("div",{className:"taskHead",children:[t.jsx("span",{className:"taskIcon",children:t.jsx(ii,{})}),t.jsx("div",{className:"taskTitle",children:"Device drivers"})]}),t.jsx("p",{className:"p",children:"Drivers are translators between the OS and hardware. The kernel uses drivers to talk to keyboard, mouse, disk, GPU, printer, and network cards."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"When you plug a USB device, the driver helps the kernel recognize it and lets apps use it safely."})]})]}),t.jsxs("div",{className:"task",children:[t.jsxs("div",{className:"taskHead",children:[t.jsx("span",{className:"taskIcon",children:t.jsx(Ye,{})}),t.jsx("div",{className:"taskTitle",children:"File system control"})]}),t.jsx("p",{className:"p",children:"The kernel provides file operations like open, read, write, and delete. It enforces permissions and keeps the file system consistent even if power fails."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"When an app saves a file, the kernel writes data to disk and updates metadata like file size and last modified time."})]})]})]})]})},{key:"why",title:"Why kernel concepts matter",icon:t.jsx(Ye,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"If you understand the kernel, you understand why OS topics connect. Scheduling, memory, files, and synchronization are not separate. They are all parts of one system working together."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Interview hint"}),t.jsx("p",{className:"p",children:"Most questions are a story. Identify the shared resource first - CPU, memory, disk, or device. Then explain what the kernel would do to manage it."})]})]})}],[]),m=u=>{d(x=>x===u?"":u)};return t.jsxs(lx.Wrapper,{id:"kernel-basics",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"Kernel Basics"}),t.jsx("p",{className:"sub",children:"The kernel is the core controller of the OS. It manages CPU, memory, devices, and files while keeping the system stable and secure."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>m(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(qe,{}):t.jsx(We,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},dx={Wrapper:Te.section`
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
    `},ux=()=>{const[o,d]=Y.useState("overview"),l=Y.useMemo(()=>[{key:"overview",title:"What are system calls",icon:t.jsx(ri,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A system call is a controlled way for an app to ask the operating system for a service. Apps usually run in user mode, which cannot directly access hardware or kernel data. System calls switch into the kernel so the OS can do the work safely."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("div",{className:"monoBlock",children:"User program - system call - kernel does work - result returned"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Why they exist"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Hardware access must be protected, not every app can touch the disk or memory"}),t.jsx("li",{children:"OS must enforce permissions and isolation between processes"}),t.jsx("li",{children:"OS provides a consistent API across different hardware"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"What you notice as a user"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Opening files works the same for all apps"}),t.jsx("li",{children:"Many apps can run without crashing each other"}),t.jsx("li",{children:"Devices work through drivers without apps knowing the details"})]})]})]})]})},{key:"categories",title:"Main categories of system calls",icon:t.jsx(ir,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"System calls are usually grouped by what they control. You do not need to memorize every system call. Learn the categories and what they do."}),t.jsxs("div",{className:"cards",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("span",{className:"cardIcon",children:t.jsx(ir,{})}),t.jsx("div",{className:"cardTitle",children:"Process control"})]}),t.jsx("p",{className:"p",children:"Create processes, run programs, and manage process lifecycle."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"fork"})," - creates a new process by duplicating the current one"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"exec"})," - replaces the current process with a new program"]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple example"}),t.jsx("p",{className:"p",children:"A shell can start a new program by forking and then executing the new program in the child process."})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("span",{className:"cardIcon",children:t.jsx(ii,{})}),t.jsx("div",{className:"cardTitle",children:"File I/O"})]}),t.jsx("p",{className:"p",children:"Open files, read data, write data, and close files."}),t.jsxs("ul",{className:"list",children:[t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"open"})," - request access to a file"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"read"})," - read bytes from an open file"]}),t.jsxs("li",{children:[t.jsx("span",{className:"mono",children:"write"})," - write bytes to an open file"]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple example"}),t.jsx("p",{className:"p",children:"A text editor uses open, read, and write to load and save files."})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"cardHead",children:[t.jsx("span",{className:"cardIcon",children:t.jsx(Xf,{})}),t.jsx("div",{className:"cardTitle",children:"Device management"})]}),t.jsx("p",{className:"p",children:"Access hardware devices through drivers, and request device operations."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Apps ask the OS, not the device directly"}),t.jsx("li",{children:"OS routes request to correct driver"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple example"}),t.jsx("p",{className:"p",children:"Printing a document triggers OS-managed print queue and printer driver work."})]})]})]})]})},{key:"openExample",title:'Example - open("file") triggers kernel work',icon:t.jsx(Ye,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:'When an app calls open on a file, it is not just "opening a file". The kernel does multiple checks and operations to make sure it is safe and correct.'}),t.jsxs("div",{className:"example",children:[t.jsx("div",{className:"exampleTitle",children:"What the kernel typically does"}),t.jsxs("div",{className:"flow",children:[t.jsx("div",{className:"step",children:"1. Validate the path and input arguments"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"2. Check permissions for the user and process"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"3. Find the file in the file system directory structure"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"4. Create an entry inside the process file table"}),t.jsx("div",{className:"arrow",children:"-"}),t.jsx("div",{className:"step",children:"5. Return a file descriptor to the app"})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Key term"}),t.jsx("p",{className:"p",children:"A file descriptor is a small number returned by the OS that represents an open file. The app uses this number later for read and write."})]}),t.jsxs("div",{className:"callout",children:[t.jsx(Ye,{}),t.jsx("span",{children:"System calls keep the system safe by controlling access to shared resources."})]})]})}],[]),m=u=>{d(x=>x===u?"":u)};return t.jsxs(dx.Wrapper,{id:"system-calls",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"System Calls"}),t.jsx("p",{className:"sub",children:"System calls are the OS service API. They let apps request safe access to CPU, memory, files, and devices through the kernel."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>m(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(qe,{}):t.jsx(We,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},px={Wrapper:Te.section`
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
    `},mx=()=>{const[o,d]=Y.useState("overview"),l=Y.useMemo(()=>[{key:"overview",title:"Process vs Thread - the clean definition",icon:t.jsx(kr,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A process is a running program. It has its own memory space and resources. A thread is the unit of execution inside a process. A process can have one thread or many threads."}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Process"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Program in execution with its own address space"}),t.jsx("li",{children:"Has its own memory - code, heap, stack, data"}),t.jsx("li",{children:"More isolation - one process crash does not always crash others"}),t.jsx("li",{children:"Heavier to create compared to a thread"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Thread"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Execution unit inside a process"}),t.jsx("li",{children:"Shares memory with other threads in the same process"}),t.jsx("li",{children:"Has its own stack and registers"}),t.jsx("li",{children:"Lighter and faster than creating a new process"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsxs("div",{className:"monoBlock",children:["Process - own address space, stronger isolation",`
`,"Thread - shared address space, faster communication"]})]})]})},{key:"examples",title:"Real-world examples you can remember",icon:t.jsx(_s,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Examples make this topic easy. A process is like a separate room. Threads are like workers inside the same room sharing the same table and tools."}),t.jsxs("div",{className:"exampleGrid",children:[t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"Chrome tabs - processes"}),t.jsx("p",{className:"p",children:"Each tab is usually a separate process. If one tab crashes, other tabs keep working. This is process isolation in action."}),t.jsx("div",{className:"monoBlock",children:"Tab A process crashes - Tab B stays alive"})]}),t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"One tab - multiple threads"}),t.jsx("p",{className:"p",children:"Inside one tab, different work can run in separate threads. Rendering can be one thread, networking can be another."}),t.jsxs("div",{className:"monoBlock",children:["Same tab process",`
`,"Thread 1 - UI render",`
`,"Thread 2 - network fetch"]})]})]}),t.jsxs("div",{className:"callout",children:[t.jsx(ir,{}),t.jsx("span",{children:"OS schedules threads on CPU. In many systems, the scheduler works at the thread level."})]})]})},{key:"pcb",title:"PCB and context switch - what happens under the hood",icon:t.jsx(op,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"OS cannot run all processes at the same time on one CPU core. So it quickly switches between them. To do that safely, OS stores the current state of the running process."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"PCB - Process Control Block"}),t.jsx("p",{className:"p",children:"PCB is a data structure maintained by the OS. It stores everything OS needs to manage a process."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Process id and state"}),t.jsx("li",{children:"Program counter and CPU registers"}),t.jsx("li",{children:"Scheduling info like priority"}),t.jsx("li",{children:"Memory management info"}),t.jsx("li",{children:"Open files and resources"})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Context switch"}),t.jsx("p",{className:"p",children:"Context switch means OS stops one running process or thread, saves its state, and loads another state so the CPU can continue execution."}),t.jsxs("div",{className:"monoBlock",children:["Save state of A into PCB",`
`,"Load state of B from PCB",`
`,"CPU resumes B"]}),t.jsx("p",{className:"p",children:"Context switching has a cost. If OS switches too often, CPU spends time switching instead of doing useful work."})]})]})},{key:"states",title:"Process states - New, Ready, Running, Waiting, Terminated",icon:t.jsx(Of,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A process moves through different states based on CPU availability and I/O events. Understanding the states helps you answer many scheduling questions."}),t.jsxs("div",{className:"stateFlow",children:[t.jsxs("div",{className:"stateRow",children:[t.jsx("span",{className:"state",children:"New"}),t.jsx("span",{className:"arrow",children:"-"}),t.jsx("span",{className:"state",children:"Ready"}),t.jsx("span",{className:"arrow",children:"-"}),t.jsx("span",{className:"state",children:"Running"}),t.jsx("span",{className:"arrow",children:"-"}),t.jsx("span",{className:"state",children:"Terminated"})]}),t.jsxs("div",{className:"stateRow",children:[t.jsx("span",{className:"state",children:"Running"}),t.jsx("span",{className:"arrow",children:"-"}),t.jsx("span",{className:"state",children:"Waiting"}),t.jsx("span",{className:"arrow",children:"-"}),t.jsx("span",{className:"state",children:"Ready"})]})]}),t.jsxs("div",{className:"stateCards",children:[t.jsxs("div",{className:"sCard",children:[t.jsx("div",{className:"sTitle",children:"New"}),t.jsx("p",{className:"p",children:"Process is being created. OS sets up PCB, allocates initial resources."})]}),t.jsxs("div",{className:"sCard",children:[t.jsx("div",{className:"sTitle",children:"Ready"}),t.jsx("p",{className:"p",children:"Process is ready to run but waiting for CPU. It is in the ready queue."})]}),t.jsxs("div",{className:"sCard",children:[t.jsx("div",{className:"sTitle",children:"Running"}),t.jsx("p",{className:"p",children:"Process is currently executing on the CPU."})]}),t.jsxs("div",{className:"sCard",children:[t.jsx("div",{className:"sTitle",children:"Waiting"}),t.jsx("p",{className:"p",children:"Process is waiting for an event like I/O, disk read, network, or user input."})]}),t.jsxs("div",{className:"sCard",children:[t.jsx("div",{className:"sTitle",children:"Terminated"}),t.jsx("p",{className:"p",children:"Process has finished execution or was stopped. OS releases resources."})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Quick example"}),t.jsx("p",{className:"p",children:"You open a program - it becomes Ready. When CPU gives time - it becomes Running. If it reads a file - it goes Waiting. After I/O is done - it returns to Ready."})]})]})},{key:"quick",title:"Fast recap - one screen summary",icon:t.jsx(Ya,{}),body:t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"monoBlock",children:["Process - running program with own address space",`
`,"Thread - execution unit inside process, shares memory",`
`,"PCB - OS data that stores process info",`
`,"Context switch - save A state, load B state",`
`,"States - New, Ready, Running, Waiting, Terminated"]}),t.jsxs("div",{className:"callout",children:[t.jsx(kr,{}),t.jsx("span",{children:"Most interview questions connect these five lines."})]})]})}],[]),m=u=>{d(x=>x===u?"":u)};return t.jsxs(px.Wrapper,{id:"process-and-thread",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"Process and Thread"}),t.jsx("p",{className:"sub",children:"Process is a running program with its own address space. Thread is an execution unit inside a process and usually shares memory with other threads in the same process."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>m(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(qe,{}):t.jsx(We,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},hx={Wrapper:Te.section`
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
    `},fx=()=>{const[o,d]=Y.useState("why"),l=Y.useMemo(()=>[{id:"P1",burst:6},{id:"P2",burst:2},{id:"P3",burst:8},{id:"P4",burst:3}],[]),m=E=>{let q=0;return E.map(M=>{const R=q;q+=M.burst;const U=q;return{id:M.id,burst:M.burst,waiting:R,turnaround:U}})},u=E=>{const q=[...E].sort((R,U)=>R.burst-U.burst);let M=0;return q.map(R=>{const U=M;M+=R.burst;const _=M;return{id:R.id,burst:R.burst,waiting:U,turnaround:_}})},x=(E,q)=>{if(!E.length)return 0;const M=E.reduce((R,U)=>R+(U[q]||0),0);return Number((M/E.length).toFixed(2))},b=Y.useMemo(()=>m(l),[l]),z=Y.useMemo(()=>u(l),[l]),T=E=>{d(q=>q===E?"":E)};return t.jsxs(hx.Wrapper,{id:"cpu-scheduling",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"CPU Scheduling"}),t.jsx("p",{className:"sub",children:"CPU is limited. Many processes compete. Scheduling is the OS decision logic that picks which process runs next so the system stays responsive and fair."})]}),t.jsxs("div",{className:"accordion",children:[t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>T("why"),"aria-expanded":o==="why",children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:t.jsx(ir,{})}),t.jsx("span",{className:"accTitle",children:"Why scheduling exists"})]}),t.jsx("span",{className:"accRight",children:o==="why"?t.jsx(qe,{}):t.jsx(We,{})})]}),o==="why"&&t.jsxs("div",{className:"accBody",children:[t.jsx("p",{className:"p",children:"At any moment, CPU can run only one thread per core. But your system has many tasks: browser, music, downloads, updates, background services. The scheduler decides who gets CPU time now, who waits, and how long each one runs before switching."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Scheduling improves responsiveness for interactive apps"}),t.jsx("li",{children:"Scheduling prevents one long task from blocking everything"}),t.jsx("li",{children:"Scheduling balances fairness and throughput"})]})]}),t.jsx("div",{className:"monoBlock",children:"Goal - keep system fast for the user, while also finishing work efficiently."})]})]}),t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>T("metrics"),"aria-expanded":o==="metrics",children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:t.jsx(zu,{})}),t.jsx("span",{className:"accTitle",children:"Metrics used to compare algorithms"})]}),t.jsx("span",{className:"accRight",children:o==="metrics"?t.jsx(qe,{}):t.jsx(We,{})})]}),o==="metrics"&&t.jsxs("div",{className:"accBody",children:[t.jsxs("div",{className:"metricsGrid",children:[t.jsxs("div",{className:"metricCard",children:[t.jsxs("div",{className:"metricHead",children:[t.jsx(Ya,{}),t.jsx("span",{children:"Waiting time"})]}),t.jsx("p",{className:"p",children:"How long a process waits in the ready queue before it gets CPU."}),t.jsx("div",{className:"monoLine",children:"waiting = startTime - arrivalTime"})]}),t.jsxs("div",{className:"metricCard",children:[t.jsxs("div",{className:"metricHead",children:[t.jsx(Ya,{}),t.jsx("span",{children:"Turnaround time"})]}),t.jsx("p",{className:"p",children:"Total time from arrival to completion. Includes waiting and running."}),t.jsx("div",{className:"monoLine",children:"turnaround = finishTime - arrivalTime"})]}),t.jsxs("div",{className:"metricCard",children:[t.jsxs("div",{className:"metricHead",children:[t.jsx(il,{}),t.jsx("span",{children:"Response time"})]}),t.jsx("p",{className:"p",children:"Time until the first CPU response. Important for interactive systems."}),t.jsx("div",{className:"monoLine",children:"response = firstRunTime - arrivalTime"})]}),t.jsxs("div",{className:"metricCard",children:[t.jsxs("div",{className:"metricHead",children:[t.jsx(zu,{}),t.jsx("span",{children:"Throughput"})]}),t.jsx("p",{className:"p",children:"How many processes complete per unit time. Higher is usually better."}),t.jsx("div",{className:"monoLine",children:"throughput = completed / time"})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Beginner mental shortcut"}),t.jsx("p",{className:"p",children:"If the system feels laggy, focus on response time and waiting time. If batch jobs are slow, focus on throughput and turnaround time."})]})]})]}),t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>T("algos"),"aria-expanded":o==="algos",children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:t.jsx(Bf,{})}),t.jsx("span",{className:"accTitle",children:"Core algorithms"})]}),t.jsx("span",{className:"accRight",children:o==="algos"?t.jsx(qe,{}):t.jsx(We,{})})]}),o==="algos"&&t.jsxs("div",{className:"accBody",children:[t.jsxs("div",{className:"algoStack",children:[t.jsxs("div",{className:"algoCard",children:[t.jsx("div",{className:"algoTitle",children:"FCFS - First Come First Serve"}),t.jsx("p",{className:"p",children:"Processes run in the order they arrive. Simple queue behavior."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - very simple"}),t.jsx("li",{children:"Cons - can cause convoy effect where a long job makes everyone wait"})]})]}),t.jsxs("div",{className:"algoCard",children:[t.jsx("div",{className:"algoTitle",children:"SJF - Shortest Job First"}),t.jsx("p",{className:"p",children:"Runs the shortest CPU burst first. This reduces average waiting time."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - great average waiting time"}),t.jsx("li",{children:"Cons - long jobs may starve if short jobs keep coming"})]})]}),t.jsxs("div",{className:"algoCard",children:[t.jsx("div",{className:"algoTitle",children:"Round Robin - time slicing"}),t.jsx("p",{className:"p",children:"Each process gets a fixed time quantum. If it does not finish, it goes back to the end of the queue."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - very good for interactive systems"}),t.jsx("li",{children:"Cons - too small quantum causes too many context switches"})]}),t.jsx("div",{className:"monoLine",children:"Typical idea - 10ms to 50ms time slice"})]}),t.jsxs("div",{className:"algoCard",children:[t.jsx("div",{className:"algoTitle",children:"Priority scheduling"}),t.jsx("p",{className:"p",children:"Higher priority runs first. Priority can be fixed or dynamic."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Pros - supports important tasks"}),t.jsx("li",{children:"Cons - starvation possible for low priority jobs"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Starvation fix"}),t.jsx("p",{className:"p",children:"Aging - gradually increase the priority of waiting processes."})]})]}),t.jsxs("div",{className:"algoCard",children:[t.jsx("div",{className:"algoTitle",children:"Multilevel queue"}),t.jsx("p",{className:"p",children:"Ready queue is split into multiple queues, based on type of work, like system, interactive, batch. Each queue can have its own algorithm."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Example - interactive queue uses Round Robin, batch queue uses FCFS"}),t.jsx("li",{children:"Tradeoff - strict separation can be unfair if one queue always dominates"})]}),t.jsxs("div",{className:"monoBlock",children:["Queue 1 - system - priority high",`
`,"Queue 2 - interactive - Round Robin",`
`,"Queue 3 - batch - FCFS"]})]})]}),t.jsxs("div",{className:"callout",children:[t.jsx(lp,{}),t.jsx("span",{children:"In real systems, scheduling is usually a mix, not a single pure algorithm."})]})]})]}),t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>T("table"),"aria-expanded":o==="table",children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:t.jsx(kr,{})}),t.jsx("span",{className:"accTitle",children:"Sample table - waiting and turnaround quickly"})]}),t.jsx("span",{className:"accRight",children:o==="table"?t.jsx(qe,{}):t.jsx(We,{})})]}),o==="table"&&t.jsxs("div",{className:"accBody",children:[t.jsx("p",{className:"p",children:"Here is a small example with only burst times. Assume all processes arrive at the same time. This keeps the math fast for revision."}),t.jsxs("div",{className:"tableBlock",children:[t.jsx("div",{className:"tableTitle",children:"Input processes"}),t.jsxs("table",{className:"table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Process"}),t.jsx("th",{children:"Burst time"})]})}),t.jsx("tbody",{children:l.map(E=>t.jsxs("tr",{children:[t.jsx("td",{className:"monoTd",children:E.id}),t.jsx("td",{children:E.burst})]},E.id))})]})]}),t.jsxs("div",{className:"twoTables",children:[t.jsxs("div",{className:"tableBlock",children:[t.jsx("div",{className:"tableTitle",children:"FCFS result"}),t.jsxs("table",{className:"table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Process"}),t.jsx("th",{children:"Burst"}),t.jsx("th",{children:"Waiting"}),t.jsx("th",{children:"Turnaround"})]})}),t.jsxs("tbody",{children:[b.map(E=>t.jsxs("tr",{children:[t.jsx("td",{className:"monoTd",children:E.id}),t.jsx("td",{children:E.burst}),t.jsx("td",{children:E.waiting}),t.jsx("td",{children:E.turnaround})]},E.id)),t.jsxs("tr",{className:"avgRow",children:[t.jsx("td",{colSpan:2,children:"Average"}),t.jsx("td",{children:x(b,"waiting")}),t.jsx("td",{children:x(b,"turnaround")})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"FCFS order"}),t.jsx("div",{className:"monoBlock",children:"P1 - P2 - P3 - P4"})]})]}),t.jsxs("div",{className:"tableBlock",children:[t.jsx("div",{className:"tableTitle",children:"SJF result (non-preemptive)"}),t.jsxs("table",{className:"table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Process"}),t.jsx("th",{children:"Burst"}),t.jsx("th",{children:"Waiting"}),t.jsx("th",{children:"Turnaround"})]})}),t.jsxs("tbody",{children:[z.map(E=>t.jsxs("tr",{children:[t.jsx("td",{className:"monoTd",children:E.id}),t.jsx("td",{children:E.burst}),t.jsx("td",{children:E.waiting}),t.jsx("td",{children:E.turnaround})]},E.id)),t.jsxs("tr",{className:"avgRow",children:[t.jsx("td",{colSpan:2,children:"Average"}),t.jsx("td",{children:x(z,"waiting")}),t.jsx("td",{children:x(z,"turnaround")})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"SJF order"}),t.jsx("div",{className:"monoBlock",children:"P2 - P4 - P1 - P3"})]})]})]}),t.jsxs("div",{className:"callout",children:[t.jsx(ir,{}),t.jsx("span",{children:"SJF usually reduces average waiting time, but it can starve long jobs in some scenarios."})]})]})]})]})]})},xx={Wrapper:Te.section`
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
    `},gx=()=>{const[o,d]=Y.useState("overview"),l=Y.useMemo(()=>[{key:"overview",title:"Synchronization - why it exists",icon:t.jsx(Ye,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Synchronization means controlling how multiple threads access shared data. Threads run in parallel or get interleaved by CPU scheduling. If two threads touch the same shared variable without rules, the final result can become wrong and unpredictable."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("div",{className:"monoBlock",children:"Shared data + concurrent access + no control = bugs"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Shared resource"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Bank balance variable"}),t.jsx("li",{children:"Counter in memory"}),t.jsx("li",{children:"Shared file pointer"}),t.jsx("li",{children:"Queue used by many threads"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Goal"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Correctness - no wrong final value"}),t.jsx("li",{children:"Safety - avoid data corruption"}),t.jsx("li",{children:"Predictability - same output each run"})]})]})]})]})},{key:"race",title:"Race condition",icon:t.jsx(zs,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A race condition happens when the output depends on the timing or order of thread execution. If two threads update the same value at the same time, the final value may differ between runs."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple example"}),t.jsxs("div",{className:"monoBlock",children:["balance = 100",`
`,"Thread A: balance = balance + 50",`
`,"Thread B: balance = balance - 30",`
`,"Expected result: 120",`
`,"But without control, result can be wrong"]})]}),t.jsx("p",{className:"p",children:"The problem is that an update is not one step. It is usually read, compute, write. If both threads read the old value before either writes the new value, one update can get lost."})]})},{key:"critical",title:"Critical section",icon:t.jsx(il,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A critical section is the part of code that touches shared data. Only one thread should execute that part at a time. That rule prevents corruption."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Key rule"}),t.jsx("div",{className:"monoBlock",children:"Only one thread enters the critical section at a time"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"What belongs inside"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Read and write to shared variables"}),t.jsx("li",{children:"Update shared list or map"}),t.jsx("li",{children:"Write to a shared file"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"What to avoid"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Slow network calls inside lock"}),t.jsx("li",{children:"Long loops inside lock"}),t.jsx("li",{children:"Heavy work inside lock"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Reason"}),t.jsx("p",{className:"p",children:"Keep the critical section small so other threads do not wait too long."})]})]})},{key:"mutexSemaphore",title:"Mutex vs Semaphore",icon:t.jsx(ti,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Mutex and semaphore are synchronization tools. They both control access, but they solve slightly different problems."}),t.jsxs("div",{className:"compare",children:[t.jsxs("div",{className:"compareCard",children:[t.jsx("div",{className:"compareTitle",children:"Mutex"}),t.jsx("p",{className:"p",children:"A mutex is like a key for a single shared resource. Only one thread can hold the key at a time. Others must wait."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Acts like a binary lock"}),t.jsx("li",{children:"Owner matters - same thread unlocks"}),t.jsx("li",{children:"Best for protecting one shared thing"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Think"}),t.jsx("div",{className:"monoBlock",children:"One bathroom - one key"})]})]}),t.jsxs("div",{className:"compareCard",children:[t.jsx("div",{className:"compareTitle",children:"Semaphore"}),t.jsx("p",{className:"p",children:"A semaphore is a counter that allows a fixed number of threads to enter. It is used for resource pools or signaling."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Counter based lock"}),t.jsx("li",{children:"Does not require strict ownership"}),t.jsx("li",{children:'Best for "N slots" resources and coordination'})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Think"}),t.jsx("div",{className:"monoBlock",children:"Parking lot - N spots"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Quick summary"}),t.jsxs("div",{className:"monoBlock",children:["Mutex - one at a time",`
`,"Semaphore - up to N at a time"]})]})]})},{key:"deadlock",title:"Deadlock basics",icon:t.jsx(zs,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Deadlock is a situation where threads are stuck forever because each one is waiting for a resource held by another thread. No one can move forward."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple deadlock story"}),t.jsxs("div",{className:"monoBlock",children:["Thread A holds Lock 1 and waits for Lock 2",`
`,"Thread B holds Lock 2 and waits for Lock 1",`
`,"Both wait forever"]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Four conditions that cause deadlock"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Mutual exclusion - resource is not shared"}),t.jsx("li",{children:"Hold and wait - hold one and request another"}),t.jsx("li",{children:"No preemption - cannot force release"}),t.jsx("li",{children:"Circular wait - waiting loop exists"})]})]}),t.jsx("p",{className:"p",children:"A common prevention trick is to always acquire locks in the same order everywhere. That removes circular wait in many cases."})]})},{key:"example",title:"Example - two threads updating same bank balance",icon:t.jsx(Tf,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Consider a shared variable called balance. One thread deposits money, another withdraws money. An update looks like read, compute, write."}),t.jsxs("div",{className:"exampleGrid",children:[t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"Without synchronization"}),t.jsxs("div",{className:"monoBlock",children:["balance = 100",`
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
`,"Final becomes 120"]}),t.jsx("p",{className:"p",children:"Only one thread updates balance at a time, so no update is lost."})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Beginner rule"}),t.jsx("p",{className:"p",children:"If more than one thread can touch the same data, protect that data using a lock or design a safe message passing approach."})]})]})}],[]),m=u=>{d(x=>x===u?"":u)};return t.jsxs(xx.Wrapper,{id:"synchronization",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"Synchronization"}),t.jsx("p",{className:"sub",children:"Learn how OS and programs keep shared data safe when multiple threads run at the same time."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>m(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(qe,{}):t.jsx(We,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},vx={Wrapper:Te.section`
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
    `},yx=()=>{const[o,d]=Y.useState("overview"),l=Y.useMemo(()=>[{key:"overview",title:"What is a deadlock",icon:t.jsx(zs,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A deadlock is a situation where two or more processes are stuck forever because each one is waiting for a resource that another one holds. No one can move forward, so the system makes no progress for those tasks."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("div",{className:"monoBlock",children:"Each process holds something and waits for something else. The wait never ends."})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Deadlock vs slowdown"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Deadlock - no progress possible without external action"}),t.jsx("li",{children:"Slowdown - progress is slow but still happening"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Common resources"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Printer, scanner, GPU"}),t.jsx("li",{children:"Files, database row locks"}),t.jsx("li",{children:"Memory buffers"}),t.jsx("li",{children:"Network sockets"})]})]})]})]})},{key:"conditions",title:"The 4 necessary conditions",icon:t.jsx(Pu,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A deadlock can happen only when all four conditions are true at the same time. If you break even one condition, you prevent deadlock."}),t.jsxs("div",{className:"cards",children:[t.jsxs("div",{className:"condCard",children:[t.jsxs("div",{className:"condHead",children:[t.jsx("span",{className:"condIcon",children:t.jsx(ti,{})}),t.jsx("div",{className:"condTitle",children:"1. Mutual exclusion"})]}),t.jsx("p",{className:"p",children:"At least one resource cannot be shared. Only one process can use it at a time."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"A printer can print one job at a time."})]})]}),t.jsxs("div",{className:"condCard",children:[t.jsxs("div",{className:"condHead",children:[t.jsx("span",{className:"condIcon",children:t.jsx(il,{})}),t.jsx("div",{className:"condTitle",children:"2. Hold and wait"})]}),t.jsx("p",{className:"p",children:"A process holds at least one resource and waits to acquire another resource."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"Process A holds the printer and waits for a file lock."})]})]}),t.jsxs("div",{className:"condCard",children:[t.jsxs("div",{className:"condHead",children:[t.jsx("span",{className:"condIcon",children:t.jsx(Ye,{})}),t.jsx("div",{className:"condTitle",children:"3. No preemption"})]}),t.jsx("p",{className:"p",children:"Resources cannot be forcibly taken away. A process releases a resource only voluntarily after finishing its work."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"OS cannot just take a file lock away in the middle of a critical write."})]})]}),t.jsxs("div",{className:"condCard",children:[t.jsxs("div",{className:"condHead",children:[t.jsx("span",{className:"condIcon",children:t.jsx(Pu,{})}),t.jsx("div",{className:"condTitle",children:"4. Circular wait"})]}),t.jsx("p",{className:"p",children:"There is a cycle of waiting. Process A waits for B, B waits for C, and C waits for A."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example"}),t.jsx("p",{className:"p",children:"A waits for B's resource, B waits for A's resource."})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"How to use this in answers"}),t.jsx("p",{className:"p",children:"When you see a deadlock story, identify each condition. Then explain how to break one of them."})]})]})},{key:"handling",title:"Handling deadlocks",icon:t.jsx(Vf,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"There are four common approaches. Different systems pick different strategies depending on cost and safety."}),t.jsxs("div",{className:"stack",children:[t.jsxs("div",{className:"stackCard",children:[t.jsx("div",{className:"stackTitle",children:"1. Prevention"}),t.jsx("p",{className:"p",children:"Prevent deadlocks by ensuring at least one of the four necessary conditions can never be true."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Remove hold and wait by forcing a process to request all resources at once"}),t.jsx("li",{children:"Remove circular wait by ordering resources and always acquiring in that order"}),t.jsx("li",{children:"Sometimes allow preemption for certain resources"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple rule"}),t.jsx("div",{className:"monoBlock",children:"Always lock resources in a fixed order."})]})]}),t.jsxs("div",{className:"stackCard",children:[t.jsx("div",{className:"stackTitle",children:"2. Avoidance"}),t.jsx("p",{className:"p",children:"Avoidance means the OS makes a decision at runtime. It checks if granting a request keeps the system in a safe state."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"The classic concept here is Banker’s algorithm"}),t.jsx("li",{children:"It is about ensuring safe allocation before giving resources"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Key idea"}),t.jsx("p",{className:"p",children:"Grant requests only if the system can still finish all processes in some order."})]})]}),t.jsxs("div",{className:"stackCard",children:[t.jsx("div",{className:"stackTitle",children:"3. Detection and recovery"}),t.jsx("p",{className:"p",children:"Allow deadlocks to happen, detect them, and then recover by breaking the cycle."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Detection - build a wait-for graph and look for cycles"}),t.jsx("li",{children:"Recovery - terminate a process or take back resources safely"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Common recovery actions"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Kill one process in the cycle"}),t.jsx("li",{children:"Roll back to a checkpoint and retry"}),t.jsx("li",{children:"Preempt a resource if it is safe to do so"})]})]})]})]})]})},{key:"example",title:"Example - printer + file lock situation",icon:t.jsx(ap,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Imagine two processes. Each needs two resources to finish a print job."}),t.jsxs("div",{className:"exampleGrid",children:[t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"Resources"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Printer - exclusive"}),t.jsx("li",{children:"File lock - exclusive"})]})]}),t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"Process A"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Holds the printer"}),t.jsx("li",{children:"Requests the file lock"})]})]}),t.jsxs("div",{className:"exampleCard",children:[t.jsx("div",{className:"exampleTitle",children:"Process B"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Holds the file lock"}),t.jsx("li",{children:"Requests the printer"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"What happens"}),t.jsxs("div",{className:"monoBlock",children:["A holds printer, waits for file lock",`
`,"B holds file lock, waits for printer",`
`,"Both wait forever - deadlock"]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"How to fix it"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Prevention - enforce order: always lock file first, then request printer"}),t.jsx("li",{children:"Detection - detect cycle and cancel one job to free resources"})]})]})]})}],[]),m=u=>{d(x=>x===u?"":u)};return t.jsxs(vx.Wrapper,{id:"deadlocks",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"Deadlocks"}),t.jsx("p",{className:"sub",children:"Deadlocks are must-know because they connect locks, resources, scheduling, and system stability. Learn the 4 conditions first, then learn handling strategies."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>m(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(qe,{}):t.jsx(We,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},jx={Wrapper:Te.section`
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
    `},wx=()=>{const[o,d]=Y.useState("overview"),l=Y.useMemo(()=>[{key:"overview",title:"Memory management - overview",icon:t.jsx(kr,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Memory management is the OS responsibility of organizing and controlling how RAM is used. Many programs run at the same time, and each program needs memory that feels private and continuous. The OS creates this illusion while keeping the system safe and fast."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Each process gets an isolated memory view called an address space"}),t.jsx("li",{children:"OS maps virtual addresses to physical RAM"}),t.jsx("li",{children:"If RAM is not enough, OS uses disk as backup using virtual memory"})]})]})]})},{key:"addressSpace",title:"Address space - what it means",icon:t.jsx(qf,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"An address space is the range of memory addresses a process can use. Programs use addresses like 0x1000, 0x2000, etc. But those are virtual addresses, not actual RAM locations."}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Virtual address space"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"What the program thinks memory looks like"}),t.jsx("li",{children:"Usually starts from low addresses and grows"}),t.jsx("li",{children:"Each process gets its own separate view"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Physical memory (RAM)"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Actual hardware memory chips"}),t.jsx("li",{children:"Shared by all processes"}),t.jsx("li",{children:"OS decides where each process data actually sits"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple idea"}),t.jsx("div",{className:"monoBlock",children:"Program uses virtual address - OS translates it to a real RAM address"})]})]})},{key:"pagingVsSegmentation",title:"Paging vs Segmentation - easy comparison",icon:t.jsx(Mf,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Paging and segmentation are two ways to organize memory. Both help OS manage memory, but they do it differently."}),t.jsxs("div",{className:"compare",children:[t.jsxs("div",{className:"compareCard",children:[t.jsx("div",{className:"compareTitle",children:"Paging"}),t.jsx("p",{className:"p",children:"Memory is divided into fixed-size blocks. Virtual memory uses pages and RAM uses page frames. OS maps each virtual page to a physical frame."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Fixed size pieces"}),t.jsx("li",{children:"Reduces external fragmentation"}),t.jsx("li",{children:"Needs page table to translate addresses"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Think"}),t.jsx("div",{className:"monoBlock",children:"Like a notebook with same size pages"})]})]}),t.jsxs("div",{className:"compareCard",children:[t.jsx("div",{className:"compareTitle",children:"Segmentation"}),t.jsx("p",{className:"p",children:"Memory is divided into logical parts called segments, like code, stack, heap. Each segment can be different size."}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Variable size pieces"}),t.jsx("li",{children:"Matches program structure"}),t.jsx("li",{children:"Can cause external fragmentation if many different sizes are allocated and freed"})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Think"}),t.jsx("div",{className:"monoBlock",children:"Like folders of different sizes"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"One-line difference"}),t.jsxs("div",{className:"monoBlock",children:["Paging - fixed size blocks",`
`,"Segmentation - logical variable size blocks"]})]})]})},{key:"virtualMemory",title:"Virtual memory - why it exists",icon:t.jsx(ri,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Virtual memory is the technique where OS uses disk as an extension of RAM. This allows programs to run even when RAM is not enough. Only the needed pages are kept in RAM at a time."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Key idea"}),t.jsx("div",{className:"monoBlock",children:"Keep active pages in RAM - keep inactive pages on disk"})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Lets the system run bigger programs than available RAM"}),t.jsx("li",{children:"Helps run many programs together without crashing"}),t.jsx("li",{children:"Uses page replacement policies when RAM is full"})]})]})},{key:"pageFault",title:"Page fault - a simple story",icon:t.jsx(zs,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A page fault happens when a program tries to access a page that is not currently in RAM. This is normal in virtual memory systems."}),t.jsxs("div",{className:"story",children:[t.jsx("div",{className:"storyTitle",children:"Story"}),t.jsxs("ol",{className:"ordered",children:[t.jsx("li",{children:"Program tries to read an address in a page"}),t.jsx("li",{children:"CPU checks page table and finds the page is not in RAM"}),t.jsx("li",{children:"Hardware raises a page fault interrupt"}),t.jsx("li",{children:"OS pauses the program and loads the page from disk into RAM"}),t.jsx("li",{children:"Page table is updated and program continues"})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Important note"}),t.jsx("p",{className:"p",children:"Page fault does not always mean an error. Most of the time it just means the data was on disk and OS had to bring it into RAM."})]})]})},{key:"thrashing",title:"Thrashing - when the system becomes slow",icon:t.jsx(_s,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Thrashing happens when the system spends more time moving pages between RAM and disk than doing real work. It usually occurs when too many processes are running or RAM is too small."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"How it looks"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"CPU usage feels low but disk usage is high"}),t.jsx("li",{children:"Apps freeze or become extremely slow"}),t.jsx("li",{children:"System keeps swapping pages repeatedly"})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple reason"}),t.jsx("div",{className:"monoBlock",children:"Too many active pages - not enough RAM - constant page faults"})]})]})},{key:"example",title:"Example - why paging helps run bigger programs than RAM",icon:t.jsx(kr,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Suppose a program needs 2 GB memory, but your system has only 1 GB free RAM. Without paging, the program would fail to run. With paging and virtual memory, the OS keeps only the active parts of the program in RAM and stores the rest on disk."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Practical picture"}),t.jsxs("div",{className:"monoBlock",children:["RAM - working desk",`
`,"Disk - storage cupboard",`
`,"OS moves only needed pages to the desk"]})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"You can open large apps with limited RAM because only active pages stay in RAM"}),t.jsx("li",{children:"Performance depends on how often page faults happen"}),t.jsx("li",{children:"SSD makes virtual memory less painful than HDD, but RAM is still much faster"})]})]})}],[]),m=u=>{d(x=>x===u?"":u)};return t.jsxs(jx.Wrapper,{id:"memory-management",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"Memory Management"}),t.jsx("p",{className:"sub",children:"OS memory management creates a safe illusion of private memory for each process and makes the system work even when RAM is limited."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>m(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(qe,{}):t.jsx(We,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},kx={Wrapper:Te.section`
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
    `},Nx=()=>{const[o,d]=Y.useState("overview"),l=Y.useMemo(()=>[{key:"overview",title:"File systems - what they solve",icon:t.jsx(Cu,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A file system is the OS method to store data on storage devices in an organized and reliable way. It gives you a simple view like folders and files, but internally it manages blocks, metadata, and permissions."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("div",{className:"monoBlock",children:"File system = names + directories + metadata + storage blocks"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"What you see"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Folders and files with names"}),t.jsx("li",{children:"Copy, move, rename, delete"}),t.jsx("li",{children:"Permissions and ownership"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"What OS manages"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Where bytes are stored on disk"}),t.jsx("li",{children:"Which blocks belong to which file"}),t.jsx("li",{children:"Consistency and crash safety"})]})]})]})]})},{key:"file-vs-dir",title:"File vs directory",icon:t.jsx(Tu,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"A file is a sequence of bytes. A directory is a special structure that maps names to file entries. The directory helps the OS find a file when you provide a path."}),t.jsxs("div",{className:"stack",children:[t.jsxs("div",{className:"stackCard",children:[t.jsxs("div",{className:"stackTitle",children:[t.jsx("span",{className:"rowIcon",children:t.jsx(zf,{})}),"File"]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Stores actual data bytes"}),t.jsx("li",{children:"Has metadata like size and permissions"}),t.jsx("li",{children:"Can be text, image, video, executable, anything"})]})]}),t.jsxs("div",{className:"stackCard",children:[t.jsxs("div",{className:"stackTitle",children:[t.jsx("span",{className:"rowIcon",children:t.jsx(Tu,{})}),"Directory"]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Stores name to entry mappings"}),t.jsx("li",{children:"Helps resolve a path like /a/b/c.txt"}),t.jsx("li",{children:"Each entry points to a file record (like an inode)"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple analogy"}),t.jsx("p",{className:"p",children:"A directory is like an index page. It helps locate the real content. The file is the real content."})]})]})},{key:"metadata",title:"Metadata - data about the file",icon:t.jsx(Da,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Metadata is information about a file, not the file data itself. OS uses metadata for access control, storage mapping, and showing file details."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Common metadata"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Name (often stored in directory entry)"}),t.jsx("li",{children:"Size in bytes"}),t.jsx("li",{children:"Owner and group"}),t.jsx("li",{children:"Permissions"}),t.jsx("li",{children:"Created and modified times"}),t.jsx("li",{children:"Location pointers to disk blocks"})]})]}),t.jsxs("div",{className:"monoBlock",children:["Example",`
`,'"report.pdf" has size, owner, permissions, timestamps, and pointers to disk blocks']})]})},{key:"permissions",title:"Permissions - rwx in simple terms",icon:t.jsx(ti,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Permissions decide who can read, write, or execute a file. A common model is rwx for three groups: owner, group, and others."}),t.jsxs("div",{className:"permGrid",children:[t.jsxs("div",{className:"permCard",children:[t.jsx("div",{className:"permTitle",children:"r - read"}),t.jsx("p",{className:"p",children:"Can view file content or list directory items."})]}),t.jsxs("div",{className:"permCard",children:[t.jsx("div",{className:"permTitle",children:"w - write"}),t.jsx("p",{className:"p",children:"Can modify file content or create and delete items in a directory."})]}),t.jsxs("div",{className:"permCard",children:[t.jsx("div",{className:"permTitle",children:"x - execute"}),t.jsx("p",{className:"p",children:"Can run a program file. For directories, x often means you can enter and access inside."})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example pattern"}),t.jsxs("div",{className:"monoBlock",children:["rwx rw- r--",`
`,"owner can read write execute",`
`,"group can read write",`
`,"others can read"]})]}),t.jsxs("div",{className:"callout",children:[t.jsx(Da,{}),t.jsx("span",{children:"Directory permissions behave slightly differently. Read means list names. Execute means you can enter."})]})]})},{key:"inode",title:"Inode idea - simple and practical",icon:t.jsx(Cu,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Many file systems keep a separate record for each file that contains metadata and pointers to where data is stored. A common name for this record is an inode."}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Directory stores"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"File name"}),t.jsx("li",{children:"Pointer or number to locate inode"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Inode stores"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Permissions and ownership"}),t.jsx("li",{children:"File size"}),t.jsx("li",{children:"Timestamps"}),t.jsx("li",{children:"Pointers to data blocks"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Why this design helps"}),t.jsx("p",{className:"p",children:"It separates names from file content. You can have multiple names pointing to same inode using links."})]}),t.jsxs("div",{className:"monoBlock",children:["Path lookup idea",`
`,'"/docs/report.pdf"',`
`,'docs directory maps "report.pdf" - inode number',`
`,"inode maps - data blocks on disk"]})]})},{key:"delete",title:"Why delete is not always instant",icon:t.jsx(Kf,{}),body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"When you delete a file, OS often does not immediately wipe all file bytes from disk. Many file systems mark the file entry as removed and free the blocks for reuse."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"What usually happens"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Directory entry is removed"}),t.jsx("li",{children:"Inode link count is reduced"}),t.jsx("li",{children:"Data blocks are marked as free for future files"}),t.jsx("li",{children:"Actual bytes may remain until overwritten"})]})]}),t.jsxs("div",{className:"callout",children:[t.jsx(Da,{}),t.jsx("span",{children:"This is why recovery tools sometimes bring back deleted files if blocks were not overwritten yet."})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Special case"}),t.jsx("p",{className:"p",children:"If a running program still has the file open, OS may keep the file data until the program closes it. The name disappears, but the storage is released later."})]}),t.jsxs("div",{className:"monoBlock",children:["Simple story",`
`,"App opens file",`
`,"You delete file name",`
`,"App still reads it because it is still open",`
`,"Data is finally freed when app closes it"]})]})}],[]),m=u=>{d(x=>x===u?"":u)};return t.jsxs(kx.Wrapper,{id:"file-systems",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"File Systems"}),t.jsx("p",{className:"sub",children:"Files and directories look simple, but the OS is managing metadata, permissions, and disk blocks behind the scenes."})]}),t.jsx("div",{className:"accordion",children:l.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>m(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(qe,{}):t.jsx(We,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},bx={Wrapper:Te.section`
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
    `},Sx=()=>{const[o,d]=Y.useState("overview"),l=u=>{d(x=>x===u?"":u)},m=Y.useMemo(()=>[{key:"overview",icon:t.jsx(Ff,{}),title:"I O basics - what it means",body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"I O means Input and Output. It is how programs talk to the outside world - keyboard, mouse, screen, disk, network, USB devices. Apps do not directly control hardware. The OS handles I O using drivers, buffers, and interrupts so many programs can use devices safely."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"At a glance"}),t.jsx("div",{className:"monoBlock",children:"App requests I O - OS checks access - driver talks to device - data comes back to app"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Input examples"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Keyboard key press"}),t.jsx("li",{children:"Mouse movement"}),t.jsx("li",{children:"Incoming network packet"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Output examples"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Writing a file to disk"}),t.jsx("li",{children:"Printing on screen"}),t.jsx("li",{children:"Sending data over network"})]})]})]})]})},{key:"blocking",icon:t.jsx(_s,{}),title:"Blocking vs non-blocking I O",body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"The big idea is simple - does your program wait, or can it continue doing other work while I O happens. This matters because I O is usually much slower than CPU."}),t.jsxs("div",{className:"cards2",children:[t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"cardTitle",children:"Blocking I O"}),t.jsx("p",{className:"p",children:"The calling thread waits until the operation finishes. Your code stops at read or write until data is available or written."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example idea"}),t.jsx("p",{className:"p",children:"You call read on a file or socket. If no data is ready, the thread sleeps and resumes later when data arrives."})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Simple to code and reason about"}),t.jsx("li",{children:"Can waste time if you block too often"})]})]}),t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"cardTitle",children:"Non-blocking I O"}),t.jsx("p",{className:"p",children:"The call returns immediately. If data is not ready, it returns a special result, and your program can do something else."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Example idea"}),t.jsx("p",{className:"p",children:'You try to read. If nothing is ready, you get "would block" and continue other tasks, then check again later.'})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Better for high concurrency systems"}),t.jsx("li",{children:"More complex because you handle readiness and retries"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Quick mental model"}),t.jsxs("div",{className:"monoBlock",children:["Blocking - wait here until data is ready",`
`,"Non-blocking - return now, check again later"]})]})]})},{key:"interrupts",icon:t.jsx(Xa,{}),title:"Interrupts - how devices get attention",body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:'An interrupt is a signal from hardware that says "I have something important". Instead of the CPU constantly checking every device, devices can notify the OS only when needed. This saves CPU time.'}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Why interrupts matter"}),t.jsx("p",{className:"p",children:'If the CPU had to keep asking the keyboard "any key pressed" millions of times per second, it would waste time. Interrupts let the keyboard notify the OS only when a key is pressed.'})]}),t.jsxs("div",{className:"flow",children:[t.jsx("div",{className:"step",children:"Device event happens - key press, disk finished, network packet arrives"}),t.jsx("div",{className:"arrow",children:t.jsx(qa,{})}),t.jsx("div",{className:"step",children:"Device raises an interrupt signal"}),t.jsx("div",{className:"arrow",children:t.jsx(qa,{})}),t.jsx("div",{className:"step",children:"CPU pauses current work and runs an interrupt handler"}),t.jsx("div",{className:"arrow",children:t.jsx(qa,{})}),t.jsx("div",{className:"step",children:"OS driver processes the event and wakes waiting process if needed"})]}),t.jsxs("div",{className:"twoCol",children:[t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Good for"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Responsiveness"}),t.jsx("li",{children:"Less CPU waste"}),t.jsx("li",{children:"Many devices at once"})]})]}),t.jsxs("div",{className:"col",children:[t.jsx("div",{className:"colTitle",children:"Cost"}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Context switching overhead"}),t.jsx("li",{children:"Interrupt storms can hurt performance"}),t.jsx("li",{children:"Need careful driver design and priority handling"})]})]})]})]})},{key:"disk",icon:t.jsx(ii,{}),title:"Disk scheduling - SCAN and C-SCAN",body:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"p",children:"Disk scheduling is how the OS decides the order of disk requests. The disk head movement costs time, so good ordering reduces total movement and improves throughput."}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"Simple idea"}),t.jsx("div",{className:"monoBlock",children:"Less head movement - faster average response"})]}),t.jsxs("div",{className:"cards2",children:[t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"cardTitle",children:"SCAN"}),t.jsx("p",{className:"p",children:"The disk head moves in one direction, serving requests on the way, then reverses direction at the end, like an elevator."}),t.jsxs("div",{className:"visual",children:[t.jsxs("div",{className:"track",children:[t.jsx("span",{className:"t",children:"0"}),t.jsx("span",{className:"t",children:"25"}),t.jsx("span",{className:"t",children:"50"}),t.jsx("span",{className:"t",children:"75"}),t.jsx("span",{className:"t",children:"100"})]}),t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"dot head",children:t.jsx(ir,{})}),t.jsx("span",{className:"dash"}),t.jsx("span",{className:"dot req"}),t.jsx("span",{className:"dot req"}),t.jsx("span",{className:"dot req"}),t.jsx("span",{className:"dash"}),t.jsx("span",{className:"dot req"})]}),t.jsx("div",{className:"caption",children:"Head goes forward serving requests, then comes back."})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"Fairer than random ordering"}),t.jsx("li",{children:"Good throughput"}),t.jsx("li",{children:"Some requests may wait for reversal"})]})]}),t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"cardTitle",children:"C-SCAN"}),t.jsx("p",{className:"p",children:"Like SCAN, but only serves requests in one direction. When it reaches the end, it jumps back to the start without serving on the return."}),t.jsxs("div",{className:"visual",children:[t.jsxs("div",{className:"track",children:[t.jsx("span",{className:"t",children:"0"}),t.jsx("span",{className:"t",children:"25"}),t.jsx("span",{className:"t",children:"50"}),t.jsx("span",{className:"t",children:"75"}),t.jsx("span",{className:"t",children:"100"})]}),t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"dot head",children:t.jsx(ir,{})}),t.jsx("span",{className:"dash"}),t.jsx("span",{className:"dot req"}),t.jsx("span",{className:"dot req"}),t.jsx("span",{className:"dot req"}),t.jsx("span",{className:"dash jump"}),t.jsx("span",{className:"dot req"})]}),t.jsx("div",{className:"caption",children:"Head serves in one direction, then jumps back and starts again."})]}),t.jsxs("ul",{className:"list",children:[t.jsx("li",{children:"More uniform waiting time across tracks"}),t.jsx("li",{children:"Can reduce starvation for far tracks"}),t.jsx("li",{children:"Jump back adds overhead but is predictable"})]})]})]}),t.jsxs("div",{className:"miniNote",children:[t.jsx("div",{className:"miniTitle",children:"SCAN vs C-SCAN in one line"}),t.jsxs("div",{className:"monoBlock",children:["SCAN - elevator goes up and down serving both ways",`
`,"C-SCAN - elevator serves only going up, returns empty"]})]})]})}],[]);return t.jsxs(bx.Wrapper,{id:"io-basics",children:[t.jsxs("div",{className:"top",children:[t.jsx("h2",{className:"title",children:"I O Basics"}),t.jsx("p",{className:"sub",children:"Optional but strong topic. I O explains why programs wait, how devices notify the CPU, and how disks handle many requests efficiently."})]}),t.jsx("div",{className:"accordion",children:m.map(u=>{const x=o===u.key;return t.jsxs("div",{className:"accItem",children:[t.jsxs("button",{type:"button",className:"accBtn",onClick:()=>l(u.key),"aria-expanded":x,children:[t.jsxs("span",{className:"accLeft",children:[t.jsx("span",{className:"accIcon",children:u.icon}),t.jsx("span",{className:"accTitle",children:u.title})]}),t.jsx("span",{className:"accRight",children:x?t.jsx(qe,{}):t.jsx(We,{})})]}),x&&t.jsx("div",{className:"accBody",children:u.body})]},u.key)})})]})},Cx={Button:Te.button`
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 80;
        display: grid;
        width: 44px;
        height: 44px;
        place-items: center;
        color: var(--color-text-primary);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 50%;
        box-shadow: 0 12px 30px var(--color-shadow);
        cursor: pointer;
        opacity: ${o=>o.$show?1:0};
        visibility: ${o=>o.$show?"visible":"hidden"};
        transition: opacity .18s ease, border-color .18s ease, box-shadow .18s ease;

        &:hover {
            border-color: var(--color-border-light);
            box-shadow: 0 0 18px var(--color-shadow);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }

        @media (max-width: 520px) {
            right: 14px;
            bottom: 14px;
        }
    `};function Tx({targetRef:o,threshold:d=240}){const[l,m]=Y.useState(!1);Y.useEffect(()=>{const x=o==null?void 0:o.current;if(!x)return;const b=()=>m(x.scrollTop>d);return b(),x.addEventListener("scroll",b,{passive:!0}),()=>x.removeEventListener("scroll",b)},[o,d]);const u=()=>{var x;return(x=o==null?void 0:o.current)==null?void 0:x.scrollTo({top:0,behavior:"smooth"})};return t.jsx(Cx.Button,{type:"button",$show:l,onClick:u,"aria-label":"Go to top",title:"Go to top",children:t.jsx(Sf,{})})}const Px={Wrapper:Te.section`
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
    `},gs=[{id:"q-001",q:"What is an operating system",a:"An operating system is the core software that manages hardware resources and provides services to programs.",tags:["basics"]},{id:"q-002",q:"What is the kernel",a:"The kernel is the core part of the OS that runs with highest privilege and controls CPU, memory, devices, and files.",tags:["kernel"]},{id:"q-003",q:"User mode vs kernel mode",a:"User mode has limited privileges. Kernel mode has full privileges to run sensitive instructions and access hardware.",tags:["kernel","basics"]},{id:"q-004",q:"What is a system call",a:"A system call is a controlled request from a program to the kernel for OS services like file I O, process control, or memory.",tags:["kernel"]},{id:"q-005",q:"What is a process",a:"A process is a program in execution with its own address space and OS managed state.",tags:["process"]},{id:"q-006",q:"What is a thread",a:"A thread is an execution unit inside a process. Threads share process memory but have separate stacks and registers.",tags:["thread","process"]},{id:"q-007",q:"Process vs thread in one line",a:"A process isolates memory, a thread shares memory inside a process.",tags:["process","thread"]},{id:"q-008",q:"What is a context switch",a:"Context switch is when the CPU saves state of one thread or process and loads state of another to resume execution.",tags:["process","thread","scheduling"]},{id:"q-009",q:"Why context switching is costly",a:"It saves and restores registers, switches memory mappings, and can cause cache and TLB misses.",tags:["scheduling","performance"]},{id:"q-010",q:"Common process states",a:"New, Ready, Running, Waiting or Blocked, Terminated.",tags:["process"]},{id:"q-011",q:"What is CPU scheduling",a:"CPU scheduling decides which ready process or thread runs next on the CPU.",tags:["scheduling"]},{id:"q-012",q:"FCFS scheduling",a:"First Come First Serve runs processes in arrival order. Simple but can cause convoy effect.",tags:["scheduling"]},{id:"q-013",q:"SJF scheduling",a:"Shortest Job First picks the smallest CPU burst first. It reduces average waiting time but needs burst prediction.",tags:["scheduling"]},{id:"q-014",q:"Round Robin scheduling",a:"Round Robin gives each process a time quantum in rotation. It is common in time sharing systems.",tags:["scheduling"]},{id:"q-015",q:"Priority scheduling",a:"Priority scheduling runs highest priority first. It can cause starvation without aging.",tags:["scheduling"]},{id:"q-016",q:"Preemptive vs non preemptive scheduling",a:"Preemptive can interrupt a running task. Non preemptive waits until it blocks or finishes.",tags:["scheduling"]},{id:"q-017",q:"Turnaround time",a:"Turnaround time is completion time minus arrival time.",tags:["scheduling","metrics"]},{id:"q-018",q:"Waiting time",a:"Waiting time is total time a process spends in the ready queue.",tags:["scheduling","metrics"]},{id:"q-019",q:"Response time",a:"Response time is time from request to first response. It matters in interactive systems.",tags:["scheduling","metrics"]},{id:"q-020",q:"Throughput",a:"Throughput is number of processes completed per unit time.",tags:["metrics"]},{id:"q-021",q:"What is a race condition",a:"A race condition happens when output depends on timing of concurrent operations on shared data.",tags:["sync"]},{id:"q-022",q:"What is a critical section",a:"A critical section is code that accesses shared data and must not run concurrently with other critical sections.",tags:["sync"]},{id:"q-023",q:"What is mutual exclusion",a:"Mutual exclusion ensures only one thread enters a critical section at a time.",tags:["sync"]},{id:"q-024",q:"Mutex vs semaphore",a:"A mutex is a binary lock with ownership. A semaphore is a counter used to control access to N resources.",tags:["sync"]},{id:"q-025",q:"What is a deadlock",a:"Deadlock is when a set of processes are blocked forever, each waiting for a resource held by another.",tags:["deadlock"]},{id:"q-026",q:"Four necessary conditions for deadlock",a:"Mutual exclusion, hold and wait, no preemption, circular wait.",tags:["deadlock"]},{id:"q-027",q:"Deadlock prevention idea",a:"Break at least one necessary condition, like avoid hold and wait or enforce ordering to prevent circular wait.",tags:["deadlock"]},{id:"q-028",q:"Deadlock avoidance idea",a:"Avoidance makes safe decisions using knowledge of future needs, like Bankers algorithm.",tags:["deadlock"]},{id:"q-029",q:"Deadlock detection idea",a:"Detection finds cycles or unsafe waits, then recovery kills or rolls back processes.",tags:["deadlock"]},{id:"q-030",q:"Starvation vs deadlock",a:"Starvation is indefinite delay due to unfair scheduling. Deadlock is circular waiting where none can proceed.",tags:["deadlock","scheduling"]},{id:"q-031",q:"What is virtual memory",a:"Virtual memory gives each process an illusion of large contiguous memory using paging and disk as backing store.",tags:["memory"]},{id:"q-032",q:"Paging in one line",a:"Paging splits memory into fixed size pages and frames to simplify allocation and reduce external fragmentation.",tags:["memory"]},{id:"q-033",q:"What is a page fault",a:"A page fault happens when a process accesses a page not in RAM. OS loads it from disk or maps it.",tags:["memory"]},{id:"q-034",q:"What is a page table",a:"A page table maps virtual pages to physical frames and stores permissions and status bits.",tags:["memory"]},{id:"q-035",q:"What is TLB",a:"TLB is a fast cache of recent virtual to physical translations to speed up address translation.",tags:["memory","performance"]},{id:"q-036",q:"Internal vs external fragmentation",a:"Internal is wasted space inside allocated blocks. External is free space split into small holes.",tags:["memory"]},{id:"q-037",q:"Thrashing",a:"Thrashing is excessive paging where system spends more time swapping than executing due to low free memory.",tags:["memory","performance"]},{id:"q-038",q:"Segmentation in one line",a:"Segmentation divides memory into variable sized logical segments like code, data, stack.",tags:["memory"]},{id:"q-039",q:"Paging vs segmentation",a:"Paging is fixed size and simpler. Segmentation matches logical structure but can cause external fragmentation.",tags:["memory"]},{id:"q-040",q:"Copy on write",a:"Copy on write shares pages until a write occurs, then a private copy is made. Common after fork.",tags:["memory","process"]},{id:"q-041",q:"What is a file system",a:"A file system organizes data on storage using files, directories, metadata, and allocation structures.",tags:["filesystem"]},{id:"q-042",q:"What is an inode",a:"An inode is metadata about a file like permissions, owner, size, and block pointers, not the file name.",tags:["filesystem"]},{id:"q-043",q:"What is a file descriptor",a:"A file descriptor is a small integer handle used by a process to refer to an open file or socket.",tags:["filesystem","kernel"]},{id:"q-044",q:"Hard link vs soft link",a:"Hard link points to the same inode. Soft link is a separate file that points to a path name.",tags:["filesystem"]},{id:"q-045",q:"Journaling file system",a:"Journaling logs metadata changes before applying them, helping recovery after crash or power loss.",tags:["filesystem"]},{id:"q-046",q:"File permissions idea",a:"Permissions control read, write, execute for owner, group, others. OS enforces access checks.",tags:["filesystem","security"]},{id:"q-047",q:"Why delete is not instant sometimes",a:"Data blocks are freed but may not be overwritten immediately. Only references are removed first.",tags:["filesystem"]},{id:"q-048",q:"What is buffering in I O",a:"Buffering stores data temporarily to reduce device access overhead and smooth speed differences.",tags:["io"]},{id:"q-049",q:"Blocking vs non blocking I O",a:"Blocking waits until operation completes. Non blocking returns immediately and you check later.",tags:["io"]},{id:"q-050",q:"Interrupts in one line",a:"An interrupt is a signal that pauses CPU briefly so OS can handle an event like I O completion.",tags:["io"]},{id:"q-051",q:"What is IPC",a:"IPC is inter process communication like pipes, message queues, shared memory, sockets, signals.",tags:["ipc"]},{id:"q-052",q:"Pipe",a:"A pipe is a unidirectional byte stream between processes, often used between parent and child.",tags:["ipc"]},{id:"q-053",q:"Socket",a:"A socket is an endpoint for network communication. It can be used locally or over a network.",tags:["ipc","network"]},{id:"q-054",q:"Shared memory IPC",a:"Shared memory is fastest IPC but needs synchronization because multiple processes access same memory region.",tags:["ipc","sync"]},{id:"q-055",q:"What is a daemon",a:"A daemon is a background service process that runs without direct user interaction.",tags:["process"]},{id:"q-056",q:"What is a zombie process",a:"A zombie is a terminated process that still has an entry because parent has not collected its exit status.",tags:["process"]},{id:"q-057",q:"What is an orphan process",a:"An orphan is a process whose parent ended. It gets adopted by a system process.",tags:["process"]},{id:"q-058",q:"What is fork",a:"Fork creates a new process by duplicating the current process. The child starts as a copy.",tags:["process"]},{id:"q-059",q:"What is exec",a:"Exec replaces current process image with a new program while keeping same process id.",tags:["process"]},{id:"q-060",q:"Kernel module",a:"A kernel module is a loadable component that extends kernel functionality like adding a driver.",tags:["kernel"]},{id:"q-061",q:"Monolithic kernel",a:"Monolithic kernel runs most OS services in kernel space for speed, but failures can be more dangerous.",tags:["kernel"]},{id:"q-062",q:"Microkernel",a:"Microkernel keeps minimal core in kernel and runs many services in user space for isolation.",tags:["kernel"]},{id:"q-063",q:"Hybrid kernel",a:"Hybrid mixes both. Some services stay in kernel for performance, while keeping modular design ideas.",tags:["kernel"]},{id:"q-064",q:"What is a device driver",a:"A driver is software that lets OS communicate with specific hardware in a safe and standard way.",tags:["io","kernel"]},{id:"q-065",q:"What is DMA",a:"DMA lets devices transfer data to or from memory without CPU moving each byte.",tags:["io","performance"]},{id:"q-066",q:"What is polling",a:"Polling is repeatedly checking device status. It wastes CPU compared to interrupts in many cases.",tags:["io"]},{id:"q-067",q:"What is spooling",a:"Spooling queues I O output like print jobs so devices process tasks sequentially.",tags:["io"]},{id:"q-068",q:"What is a buffer cache",a:"Buffer cache stores disk blocks in memory to speed up repeated reads and improve I O performance.",tags:["io","filesystem","performance"]},{id:"q-069",q:"What is an LRU page replacement idea",a:"LRU replaces the page that has not been used for the longest time, approximating best future behavior.",tags:["memory"]},{id:"q-070",q:"What is Belady anomaly",a:"In FIFO replacement, adding more frames can increase page faults. That is Belady anomaly.",tags:["memory"]},{id:"q-071",q:"What is a scheduler time quantum",a:"Time quantum is fixed CPU time slice given to a task in Round Robin before preemption.",tags:["scheduling"]},{id:"q-072",q:"Convoy effect",a:"Convoy effect is when one long job delays many short jobs in FCFS, increasing average waiting time.",tags:["scheduling"]},{id:"q-073",q:"What is aging in scheduling",a:"Aging gradually increases priority of waiting tasks to reduce starvation.",tags:["scheduling"]},{id:"q-074",q:"What is a ready queue",a:"Ready queue holds processes that are ready to run and are waiting for CPU.",tags:["process","scheduling"]},{id:"q-075",q:"What is a wait queue",a:"Wait queue holds processes blocked on I O or other events until the event completes.",tags:["process","io"]},{id:"q-076",q:"What is a spinlock",a:"A spinlock is a lock where thread keeps checking in a loop. Good only for very short waits.",tags:["sync","performance"]},{id:"q-077",q:"Semaphore types",a:"Binary semaphore acts like a lock. Counting semaphore controls access to multiple identical resources.",tags:["sync"]},{id:"q-078",q:"Condition variable use",a:"Condition variable lets threads sleep until a condition is true, used with a mutex.",tags:["sync"]},{id:"q-079",q:"What is priority inversion",a:"Low priority task holds a lock needed by high priority task, causing high priority to wait.",tags:["sync","scheduling"]},{id:"q-080",q:"How to reduce priority inversion",a:"Use priority inheritance or priority ceiling protocols so lock holder runs sooner.",tags:["sync","scheduling"]},{id:"q-081",q:"What is memory protection",a:"Memory protection prevents one process from accessing memory of another using hardware and OS checks.",tags:["memory","security"]},{id:"q-082",q:"What is address translation",a:"Address translation converts virtual address to physical address using page tables and TLB.",tags:["memory"]},{id:"q-083",q:"What is swapping",a:"Swapping moves whole processes or pages to disk to free RAM, then brings them back when needed.",tags:["memory"]},{id:"q-084",q:"Demand paging",a:"Demand paging loads pages into memory only when they are actually accessed.",tags:["memory"]},{id:"q-085",q:"What is segmentation fault",a:"It is an invalid memory access detected by hardware memory protection, OS terminates the program.",tags:["memory"]},{id:"q-086",q:"File allocation methods",a:"Common methods are contiguous, linked, and indexed allocation, each with tradeoffs.",tags:["filesystem"]},{id:"q-087",q:"Why indexing helps in file systems",a:"Indexing allows direct access to blocks without scanning a linked list, improving random access.",tags:["filesystem","performance"]},{id:"q-088",q:"Disk scheduling SCAN idea",a:"SCAN moves head in one direction servicing requests, then reverses, like an elevator.",tags:["io"]},{id:"q-089",q:"Disk scheduling C SCAN idea",a:"C SCAN services requests in one direction only, then jumps back to start, giving uniform wait times.",tags:["io"]},{id:"q-090",q:"What is a bootloader",a:"Bootloader starts the system by loading the kernel into memory and transferring control to it.",tags:["basics","kernel"]},{id:"q-091",q:"What is a kernel panic",a:"Kernel panic is when the kernel detects a fatal error and stops to avoid further damage or corruption.",tags:["kernel"]},{id:"q-092",q:"Why do we need interrupts",a:"Interrupts let CPU respond to events like I O completion without wasting time polling devices.",tags:["io"]},{id:"q-093",q:"What is multitasking",a:"Multitasking runs multiple tasks by rapidly switching CPU between them, giving illusion of parallelism.",tags:["basics","scheduling"]},{id:"q-094",q:"What is multiprocessing",a:"Multiprocessing uses multiple CPU cores to run tasks truly in parallel.",tags:["basics","performance"]},{id:"q-095",q:"What is multithreading",a:"Multithreading runs multiple threads inside a process to improve responsiveness and utilize cores.",tags:["thread","performance"]},{id:"q-096",q:"Why locks reduce performance",a:"Locks serialize work and add waiting. Too many locks can cause contention and context switches.",tags:["sync","performance"]},{id:"q-097",q:"What is a critical resource",a:"A critical resource is shared data or device that must be accessed in a controlled way.",tags:["sync","basics"]},{id:"q-098",q:"What is the purpose of system calls",a:"System calls provide a safe interface for programs to request privileged OS operations.",tags:["kernel"]},{id:"q-099",q:"Why OS uses protection rings",a:"Protection rings limit damage by isolating user code from privileged kernel operations.",tags:["security","kernel"]},{id:"q-100",q:"Best quick way to answer OS questions",a:"Identify the resource involved - CPU, memory, disk, device - then explain what the kernel does to manage it.",tags:["basics"]}],zx=()=>{var U;const[o,d]=Y.useState(""),[l,m]=Y.useState("all"),[u,x]=Y.useState(((U=gs[0])==null?void 0:U.id)||"q-001"),b=Y.useMemo(()=>{const _=new Set;return gs.forEach(B=>{(B.tags||[]).forEach(H=>_.add(H))}),["all",...Array.from(_).sort((B,H)=>B.localeCompare(H))]},[]),z=Y.useMemo(()=>{const _=o.trim().toLowerCase();return gs.filter(B=>(l==="all"?!0:(B.tags||[]).includes(l))?_?`${B.q} ${B.a} ${(B.tags||[]).join(" ")}`.toLowerCase().includes(_):!0:!1)},[o,l]),T=z.length,E=gs.length,q=()=>d(""),M=()=>m("all"),R=_=>{x(B=>B===_?"":_)};return t.jsxs(Px.Wrapper,{id:"must-know-qna",children:[t.jsxs("div",{className:"top",children:[t.jsxs("div",{className:"titleRow",children:[t.jsx("h2",{className:"title",children:"Must Know Interview QnA"}),t.jsxs("div",{className:"countPill",title:"Shown - Total",children:[t.jsx(Rf,{}),t.jsxs("span",{className:"count",children:[T," - ",E]})]})]}),t.jsx("p",{className:"sub",children:"Short, direct answers. Use search and tag filter to revise fast."}),t.jsxs("div",{className:"controls",children:[t.jsxs("div",{className:"search",children:[t.jsx("span",{className:"leftIcon",children:t.jsx(ap,{})}),t.jsx("input",{value:o,onChange:_=>d(_.target.value),placeholder:"Search questions, answers, tags","aria-label":"Search QnA"}),o.trim()&&t.jsx("button",{type:"button",className:"clearBtn",onClick:q,"aria-label":"Clear search",title:"Clear search",children:t.jsx(Lu,{})})]}),t.jsxs("div",{className:"filter",children:[t.jsx("span",{className:"leftIcon",children:t.jsx(Ef,{})}),t.jsx("select",{value:l,onChange:_=>m(_.target.value),"aria-label":"Filter by topic",children:b.map(_=>t.jsx("option",{value:_,children:_},_))}),l!=="all"&&t.jsx("button",{type:"button",className:"clearBtn",onClick:M,"aria-label":"Clear filter",title:"Clear filter",children:t.jsx(Lu,{})})]})]})]}),t.jsxs("div",{className:"list",children:[z.length===0&&t.jsxs("div",{className:"empty",children:[t.jsx("div",{className:"emptyTitle",children:"No matches"}),t.jsx("div",{className:"emptySub",children:"Try a different keyword or reset the filter."}),t.jsxs("div",{className:"emptyBtns",children:[t.jsx("button",{type:"button",onClick:q,children:"Clear search"}),t.jsx("button",{type:"button",onClick:M,children:"Reset filter"})]})]}),z.map(_=>{const B=u===_.id;return t.jsxs("div",{className:"qa",children:[t.jsxs("button",{type:"button",className:"qRow",onClick:()=>R(_.id),"aria-expanded":B,children:[t.jsxs("div",{className:"qLeft",children:[t.jsx("span",{className:"qid",children:_.id}),t.jsx("span",{className:"qText",children:_.q})]}),t.jsx("span",{className:"qRight",children:B?t.jsx(qe,{}):t.jsx(We,{})})]}),B&&t.jsxs("div",{className:"aBlock",children:[t.jsx("div",{className:"aText",children:_.a}),!!(_.tags||[]).length&&t.jsx("div",{className:"tags",children:(_.tags||[]).map(H=>t.jsx("button",{type:"button",className:`tag ${l===H?"active":""}`,onClick:()=>m(H),title:`Filter by ${H}`,children:H},H))})]})]},_.id)})]})]})},Ex=()=>{const o=Y.useRef(null);return t.jsxs(Wa.Wrapper,{children:[t.jsx(Wa.Header,{children:t.jsx(Gf,{})}),t.jsxs(Wa.Main,{ref:o,children:[t.jsxs("div",{className:"contentWrapper",children:[t.jsx(nx,{}),t.jsx(sx,{}),t.jsx(ax,{}),t.jsx(cx,{}),t.jsx(ux,{}),t.jsx(mx,{}),t.jsx(fx,{}),t.jsx(gx,{}),t.jsx(yx,{}),t.jsx(wx,{}),t.jsx(Nx,{}),t.jsx(Sx,{}),t.jsx(zx,{})]}),t.jsx("div",{className:"footerWrapper",children:t.jsx(rx,{})})]}),t.jsx(Tx,{targetRef:o})]})};hh.createRoot(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(Ex,{})}));
