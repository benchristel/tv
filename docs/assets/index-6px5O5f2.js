var __defProp=Object.defineProperty;var __name=(target,value)=>__defProp(target,"name",{value,configurable:!0});__name(function(){const relList=document.createElement("link").relList;if(relList&&relList.supports&&relList.supports("modulepreload"))return;for(const link of document.querySelectorAll('link[rel="modulepreload"]'))processPreload(link);new MutationObserver(mutations=>{for(const mutation of mutations)if(mutation.type==="childList")for(const node of mutation.addedNodes)node.tagName==="LINK"&&node.rel==="modulepreload"&&processPreload(node)}).observe(document,{childList:!0,subtree:!0});function getFetchOpts(link){const fetchOpts={};return link.integrity&&(fetchOpts.integrity=link.integrity),link.referrerPolicy&&(fetchOpts.referrerPolicy=link.referrerPolicy),link.crossOrigin==="use-credentials"?fetchOpts.credentials="include":link.crossOrigin==="anonymous"?fetchOpts.credentials="omit":fetchOpts.credentials="same-origin",fetchOpts}__name(getFetchOpts,"getFetchOpts");function processPreload(link){if(link.ep)return;link.ep=!0;const fetchOpts=getFetchOpts(link);fetch(link.href,fetchOpts)}__name(processPreload,"processPreload")},"polyfill")();var react={exports:{}},react_production_min={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(val)}__name(toObject,"toObject");function shouldUseNative(){try{if(!Object.assign)return!1;var test1=new String("abc");if(test1[5]="de",Object.getOwnPropertyNames(test1)[0]==="5")return!1;for(var test2={},i=0;i<10;i++)test2["_"+String.fromCharCode(i)]=i;var order2=Object.getOwnPropertyNames(test2).map(function(n2){return test2[n2]});if(order2.join("")!=="0123456789")return!1;var test3={};return"abcdefghijklmnopqrst".split("").forEach(function(letter){test3[letter]=letter}),Object.keys(Object.assign({},test3)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}__name(shouldUseNative,"shouldUseNative");var objectAssign=shouldUseNative()?Object.assign:function(target,source){for(var from,to=toObject(target),symbols,s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from)hasOwnProperty.call(from,key)&&(to[key]=from[key]);if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++)propIsEnumerable.call(from,symbols[i])&&(to[symbols[i]]=from[symbols[i]])}}return to};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=objectAssign,n=60103,p=60106;react_production_min.Fragment=60107;react_production_min.StrictMode=60108;react_production_min.Profiler=60114;var q=60109,r$1=60110,t=60112;react_production_min.Suspense=60113;var u=60115,v=60116;if(typeof Symbol=="function"&&Symbol.for){var w=Symbol.for;n=w("react.element"),p=w("react.portal"),react_production_min.Fragment=w("react.fragment"),react_production_min.StrictMode=w("react.strict_mode"),react_production_min.Profiler=w("react.profiler"),q=w("react.provider"),r$1=w("react.context"),t=w("react.forward_ref"),react_production_min.Suspense=w("react.suspense"),u=w("react.memo"),v=w("react.lazy")}var x=typeof Symbol=="function"&&Symbol.iterator;function y$1(a){return a===null||typeof a!="object"?null:(a=x&&a[x]||a["@@iterator"],typeof a=="function"?a:null)}__name(y$1,"y$1");function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}__name(z,"z");var A={isMounted:__name(function(){return!1},"isMounted"),enqueueForceUpdate:__name(function(){},"enqueueForceUpdate"),enqueueReplaceState:__name(function(){},"enqueueReplaceState"),enqueueSetState:__name(function(){},"enqueueSetState")},B$1={};function C(a,b,c){this.props=a,this.context=b,this.refs=B$1,this.updater=c||A}__name(C,"C");C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if(typeof a!="object"&&typeof a!="function"&&a!=null)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function D$1(){}__name(D$1,"D$1");D$1.prototype=C.prototype;function E$1(a,b,c){this.props=a,this.context=b,this.refs=B$1,this.updater=c||A}__name(E$1,"E$1");var F$1=E$1.prototype=new D$1;F$1.constructor=E$1;l(F$1,C.prototype);F$1.isPureReactComponent=!0;var G$1={current:null},H$1=Object.prototype.hasOwnProperty,I$1={key:!0,ref:!0,__self:!0,__source:!0};function J(a,b,c){var e,d={},k=null,h=null;if(b!=null)for(e in b.ref!==void 0&&(h=b.ref),b.key!==void 0&&(k=""+b.key),b)H$1.call(b,e)&&!I$1.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(g===1)d.children=c;else if(1<g){for(var f=Array(g),m2=0;m2<g;m2++)f[m2]=arguments[m2+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)d[e]===void 0&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G$1.current}}__name(J,"J");function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}__name(K,"K");function L(a){return typeof a=="object"&&a!==null&&a.$$typeof===n}__name(L,"L");function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a2){return b[a2]})}__name(escape,"escape");var M$1=/\/+/g;function N$1(a,b){return typeof a=="object"&&a!==null&&a.key!=null?escape(""+a.key):b.toString(36)}__name(N$1,"N$1");function O$1(a,b,c,e,d){var k=typeof a;(k==="undefined"||k==="boolean")&&(a=null);var h=!1;if(a===null)h=!0;else switch(k){case"string":case"number":h=!0;break;case"object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=e===""?"."+N$1(h,0):e,Array.isArray(d)?(c="",a!=null&&(c=a.replace(M$1,"$&/")+"/"),O$1(d,b,c,"",function(a2){return a2})):d!=null&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M$1,"$&/")+"/")+a)),b.push(d)),1;if(h=0,e=e===""?".":e+":",Array.isArray(a))for(var g=0;g<a.length;g++){k=a[g];var f=e+N$1(k,g);h+=O$1(k,b,c,f,d)}else if(f=y$1(a),typeof f=="function")for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N$1(k,g++),h+=O$1(k,b,c,f,d);else if(k==="object")throw b=""+a,Error(z(31,b==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}__name(O$1,"O$1");function P$1(a,b,c){if(a==null)return a;var e=[],d=0;return O$1(a,e,"","",function(a2){return b.call(c,a2,d++)}),e}__name(P$1,"P$1");function Q(a){if(a._status===-1){var b=a._result;b=b(),a._status=0,a._result=b,b.then(function(b2){a._status===0&&(b2=b2.default,a._status=1,a._result=b2)},function(b2){a._status===0&&(a._status=2,a._result=b2)})}if(a._status===1)return a._result;throw a._result}__name(Q,"Q");var R$1={current:null};function S$1(){var a=R$1.current;if(a===null)throw Error(z(321));return a}__name(S$1,"S$1");var T$1={ReactCurrentDispatcher:R$1,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G$1,IsSomeRendererActing:{current:!1},assign:l};react_production_min.Children={map:P$1,forEach:__name(function(a,b,c){P$1(a,function(){b.apply(this,arguments)},c)},"forEach"),count:__name(function(a){var b=0;return P$1(a,function(){b++}),b},"count"),toArray:__name(function(a){return P$1(a,function(a2){return a2})||[]},"toArray"),only:__name(function(a){if(!L(a))throw Error(z(143));return a},"only")};react_production_min.Component=C;react_production_min.PureComponent=E$1;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T$1;react_production_min.cloneElement=function(a,b,c){if(a==null)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(b!=null){if(b.ref!==void 0&&(k=b.ref,h=G$1.current),b.key!==void 0&&(d=""+b.key),a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H$1.call(b,f)&&!I$1.hasOwnProperty(f)&&(e[f]=b[f]===void 0&&g!==void 0?g[f]:b[f])}var f=arguments.length-2;if(f===1)e.children=c;else if(1<f){g=Array(f);for(var m2=0;m2<f;m2++)g[m2]=arguments[m2+2];e.children=g}return{$$typeof:n,type:a.type,key:d,ref:k,props:e,_owner:h}};react_production_min.createContext=function(a,b){return b===void 0&&(b=null),a={$$typeof:r$1,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null},a.Provider={$$typeof:q,_context:a},a.Consumer=a};react_production_min.createElement=J;react_production_min.createFactory=function(a){var b=J.bind(null,a);return b.type=a,b};react_production_min.createRef=function(){return{current:null}};react_production_min.forwardRef=function(a){return{$$typeof:t,render:a}};react_production_min.isValidElement=L;react_production_min.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};react_production_min.memo=function(a,b){return{$$typeof:u,type:a,compare:b===void 0?null:b}};react_production_min.useCallback=function(a,b){return S$1().useCallback(a,b)};react_production_min.useContext=function(a,b){return S$1().useContext(a,b)};react_production_min.useDebugValue=function(){};react_production_min.useEffect=function(a,b){return S$1().useEffect(a,b)};react_production_min.useImperativeHandle=function(a,b,c){return S$1().useImperativeHandle(a,b,c)};react_production_min.useLayoutEffect=function(a,b){return S$1().useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return S$1().useMemo(a,b)};react_production_min.useReducer=function(a,b,c){return S$1().useReducer(a,b,c)};react_production_min.useRef=function(a){return S$1().useRef(a)};react_production_min.useState=function(a){return S$1().useState(a)};react_production_min.version="17.0.2";react.exports=react_production_min;var reactExports=react.exports,reactDom={exports:{}},reactDom_production_min={},scheduler={exports:{}},scheduler_production_min={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(exports){var f,g,h,k;if(typeof performance=="object"&&typeof performance.now=="function"){var l2=performance;exports.unstable_now=function(){return l2.now()}}else{var p2=Date,q2=p2.now();exports.unstable_now=function(){return p2.now()-q2}}if(typeof window>"u"||typeof MessageChannel!="function"){var t2=null,u2=null,w=__name(function(){if(t2!==null)try{var a=exports.unstable_now();t2(!0,a),t2=null}catch(b){throw setTimeout(w,0),b}},"w");f=__name(function(a){t2!==null?setTimeout(f,0,a):(t2=a,setTimeout(w,0))},"f"),g=__name(function(a,b){u2=setTimeout(a,b)},"g"),h=__name(function(){clearTimeout(u2)},"h"),exports.unstable_shouldYield=function(){return!1},k=exports.unstable_forceFrameRate=function(){}}else{var x2=window.setTimeout,y2=window.clearTimeout;if(typeof console<"u"){var z2=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof z2!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A2=!1,B2=null,C2=-1,D2=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=E},k=__name(function(){},"k"),exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D2=0<a?Math.floor(1e3/a):5};var F2=new MessageChannel,G2=F2.port2;F2.port1.onmessage=function(){if(B2!==null){var a=exports.unstable_now();E=a+D2;try{B2(!0,a)?G2.postMessage(null):(A2=!1,B2=null)}catch(b){throw G2.postMessage(null),b}}else A2=!1},f=__name(function(a){B2=a,A2||(A2=!0,G2.postMessage(null))},"f"),g=__name(function(a,b){C2=x2(function(){a(exports.unstable_now())},b)},"g"),h=__name(function(){y2(C2),C2=-1},"h")}function H2(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(e!==void 0&&0<I2(e,b))a[d]=b,a[c]=e,c=d;else break a}}__name(H2,"H");function J2(a){return a=a[0],a===void 0?null:a}__name(J2,"J");function K2(a){var b=a[0];if(b!==void 0){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m2=2*(d+1)-1,n2=a[m2],v2=m2+1,r2=a[v2];if(n2!==void 0&&0>I2(n2,c))r2!==void 0&&0>I2(r2,n2)?(a[d]=r2,a[v2]=c,d=v2):(a[d]=n2,a[m2]=c,d=m2);else if(r2!==void 0&&0>I2(r2,c))a[d]=r2,a[v2]=c,d=v2;else break a}}return b}return null}__name(K2,"K");function I2(a,b){var c=a.sortIndex-b.sortIndex;return c!==0?c:a.id-b.id}__name(I2,"I");var L2=[],M2=[],N2=1,O2=null,P2=3,Q2=!1,R2=!1,S2=!1;function T2(a){for(var b=J2(M2);b!==null;){if(b.callback===null)K2(M2);else if(b.startTime<=a)K2(M2),b.sortIndex=b.expirationTime,H2(L2,b);else break;b=J2(M2)}}__name(T2,"T");function U2(a){if(S2=!1,T2(a),!R2)if(J2(L2)!==null)R2=!0,f(V2);else{var b=J2(M2);b!==null&&g(U2,b.startTime-a)}}__name(U2,"U");function V2(a,b){R2=!1,S2&&(S2=!1,h()),Q2=!0;var c=P2;try{for(T2(b),O2=J2(L2);O2!==null&&(!(O2.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O2.callback;if(typeof d=="function"){O2.callback=null,P2=O2.priorityLevel;var e=d(O2.expirationTime<=b);b=exports.unstable_now(),typeof e=="function"?O2.callback=e:O2===J2(L2)&&K2(L2),T2(b)}else K2(L2);O2=J2(L2)}if(O2!==null)var m2=!0;else{var n2=J2(M2);n2!==null&&g(U2,n2.startTime-b),m2=!1}return m2}finally{O2=null,P2=c,Q2=!1}}__name(V2,"V");var W2=k;exports.unstable_IdlePriority=5,exports.unstable_ImmediatePriority=1,exports.unstable_LowPriority=4,exports.unstable_NormalPriority=3,exports.unstable_Profiling=null,exports.unstable_UserBlockingPriority=2,exports.unstable_cancelCallback=function(a){a.callback=null},exports.unstable_continueExecution=function(){R2||Q2||(R2=!0,f(V2))},exports.unstable_getCurrentPriorityLevel=function(){return P2},exports.unstable_getFirstCallbackNode=function(){return J2(L2)},exports.unstable_next=function(a){switch(P2){case 1:case 2:case 3:var b=3;break;default:b=P2}var c=P2;P2=b;try{return a()}finally{P2=c}},exports.unstable_pauseExecution=function(){},exports.unstable_requestPaint=W2,exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P2;P2=a;try{return b()}finally{P2=c}},exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();switch(typeof c=="object"&&c!==null?(c=c.delay,c=typeof c=="number"&&0<c?d+c:d):c=d,a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1e4;break;default:e=5e3}return e=c+e,a={id:N2++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1},c>d?(a.sortIndex=c,H2(M2,a),J2(L2)===null&&a===J2(M2)&&(S2?h():S2=!0,g(U2,c-d))):(a.sortIndex=e,H2(L2,a),R2||Q2||(R2=!0,f(V2))),a},exports.unstable_wrapCallback=function(a){var b=P2;return function(){var c=P2;P2=b;try{return a.apply(this,arguments)}finally{P2=c}}}})(scheduler_production_min);scheduler.exports=scheduler_production_min;var schedulerExports=scheduler.exports;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=reactExports,m=objectAssign,r=schedulerExports;function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}__name(y,"y");if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b),ea(a+"Capture",b)}__name(da,"da");function ea(a,b){for(ca[a]=b,a=0;a<b.length;a++)ba.add(b[a])}__name(ea,"ea");var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,ja={},ka={};function la(a){return ia.call(ka,a)?!0:ia.call(ja,a)?!1:ha.test(a)?ka[a]=!0:(ja[a]=!0,!1)}__name(la,"la");function ma(a,b,c,d){if(c!==null&&c.type===0)return!1;switch(typeof b){case"function":case"symbol":return!0;case"boolean":return d?!1:c!==null?!c.acceptsBooleans:(a=a.toLowerCase().slice(0,5),a!=="data-"&&a!=="aria-");default:return!1}}__name(ma,"ma");function na(a,b,c,d){if(b===null||typeof b>"u"||ma(a,b,c,d))return!0;if(d)return!1;if(c!==null)switch(c.type){case 3:return!b;case 4:return b===!1;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}__name(na,"na");function B(a,b,c,d,e,f,g){this.acceptsBooleans=b===2||b===3||b===4,this.attributeName=d,this.attributeNamespace=e,this.mustUseProperty=c,this.propertyName=a,this.type=b,this.sanitizeURL=f,this.removeEmptyString=g}__name(B,"B");var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}__name(pa,"pa");"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null,f=e!==null?e.type===0:d?!1:!(!(2<b.length)||b[0]!=="o"&&b[0]!=="O"||b[1]!=="n"&&b[1]!=="N");f||(na(b,c,e,d)&&(c=null),d||e===null?la(b)&&(c===null?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=c===null?e.type===3?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,c===null?a.removeAttribute(b):(e=e.type,c=e===3||e===4&&c===!0?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}__name(qa,"qa");var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;if(typeof Symbol=="function"&&Symbol.for){var E=Symbol.for;sa=E("react.element"),ta=E("react.portal"),ua=E("react.fragment"),wa=E("react.strict_mode"),xa=E("react.profiler"),ya=E("react.provider"),za=E("react.context"),Aa=E("react.forward_ref"),Ba=E("react.suspense"),Ca=E("react.suspense_list"),Da=E("react.memo"),Ea=E("react.lazy"),Fa=E("react.block"),E("react.scope"),Ga=E("react.opaque.id"),Ha=E("react.debug_trace_mode"),Ia=E("react.offscreen"),Ja=E("react.legacy_hidden")}var Ka=typeof Symbol=="function"&&Symbol.iterator;function La(a){return a===null||typeof a!="object"?null:(a=Ka&&a[Ka]||a["@@iterator"],typeof a=="function"?a:null)}__name(La,"La");var Ma;function Na(a){if(Ma===void 0)try{throw Error()}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return`
`+Ma+a}__name(Na,"Na");var Oa=!1;function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=__name(function(){throw Error()},"b"),Object.defineProperty(b.prototype,"props",{set:__name(function(){throw Error()},"set")}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error()}catch(k){d=k}a()}}catch(k){if(k&&d&&typeof k.stack=="string"){for(var e=k.stack.split(`
`),f=d.stack.split(`
`),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(g!==1||h!==1)do if(g--,h--,0>h||e[g]!==f[h])return`
`+e[g].replace(" at new "," at ");while(1<=g&&0<=h);break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}__name(Pa,"Pa");function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}__name(Qa,"Qa");function Ra(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;return b=b.displayName||b.name||"",a.displayName||(b!==""?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload,a=a._init;try{return Ra(a(b))}catch{}}return null}__name(Ra,"Ra");function Sa(a){switch(typeof a){case"boolean":case"number":case"object":case"string":case"undefined":return a;default:return""}}__name(Sa,"Sa");function Ta(a){var b=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(b==="checkbox"||b==="radio")}__name(Ta,"Ta");function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var e=c.get,f=c.set;return Object.defineProperty(a,b,{configurable:!0,get:__name(function(){return e.call(this)},"get"),set:__name(function(a2){d=""+a2,f.call(this,a2)},"set")}),Object.defineProperty(a,b,{enumerable:c.enumerable}),{getValue:__name(function(){return d},"getValue"),setValue:__name(function(a2){d=""+a2},"setValue"),stopTracking:__name(function(){a._valueTracker=null,delete a[b]},"stopTracking")}}}__name(Ua,"Ua");function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}__name(Va,"Va");function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue(),d="";return a&&(d=Ta(a)?a.checked?"true":"false":a.value),a=d,a!==c?(b.setValue(a),!0):!1}__name(Wa,"Wa");function Xa(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}__name(Xa,"Xa");function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??a._wrapperState.initialChecked})}__name(Ya,"Ya");function Za(a,b){var c=b.defaultValue==null?"":b.defaultValue,d=b.checked!=null?b.checked:b.defaultChecked;c=Sa(b.value!=null?b.value:c),a._wrapperState={initialChecked:d,initialValue:c,controlled:b.type==="checkbox"||b.type==="radio"?b.checked!=null:b.value!=null}}__name(Za,"Za");function $a(a,b){b=b.checked,b!=null&&qa(a,"checked",b,!1)}__name($a,"$a");function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(c!=null)d==="number"?(c===0&&a.value===""||a.value!=c)&&(a.value=""+c):a.value!==""+c&&(a.value=""+c);else if(d==="submit"||d==="reset"){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue)),b.checked==null&&b.defaultChecked!=null&&(a.defaultChecked=!!b.defaultChecked)}__name(ab,"ab");function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!(d!=="submit"&&d!=="reset"||b.value!==void 0&&b.value!==null))return;b=""+a._wrapperState.initialValue,c||b===a.value||(a.value=b),a.defaultValue=b}c=a.name,c!==""&&(a.name=""),a.defaultChecked=!!a._wrapperState.initialChecked,c!==""&&(a.name=c)}__name(cb,"cb");function bb(a,b,c){(b!=="number"||Xa(a.ownerDocument)!==a)&&(c==null?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c))}__name(bb,"bb");function db(a){var b="";return aa.Children.forEach(a,function(a2){a2!=null&&(b+=a2)}),b}__name(db,"db");function eb(a,b){return a=m({children:void 0},b),(b=db(b.children))&&(a.children=b),a}__name(eb,"eb");function fb(a,b,c,d){if(a=a.options,b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{for(c=""+Sa(c),b=null,e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0,d&&(a[e].defaultSelected=!0);return}b!==null||a[e].disabled||(b=a[e])}b!==null&&(b.selected=!0)}}__name(fb,"fb");function gb(a,b){if(b.dangerouslySetInnerHTML!=null)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}__name(gb,"gb");function hb(a,b){var c=b.value;if(c==null){if(c=b.children,b=b.defaultValue,c!=null){if(b!=null)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}b==null&&(b=""),c=b}a._wrapperState={initialValue:Sa(c)}}__name(hb,"hb");function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);c!=null&&(c=""+c,c!==a.value&&(a.value=c),b.defaultValue==null&&a.defaultValue!==c&&(a.defaultValue=c)),d!=null&&(a.defaultValue=""+d)}__name(ib,"ib");function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&b!==""&&b!==null&&(a.value=b)}__name(jb,"jb");var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function lb(a){switch(a){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}__name(lb,"lb");function mb(a,b){return a==null||a==="http://www.w3.org/1999/xhtml"?lb(b):a==="http://www.w3.org/2000/svg"&&b==="foreignObject"?"http://www.w3.org/1999/xhtml":a}__name(mb,"mb");var nb,ob=function(a){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{for(nb=nb||document.createElement("div"),nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>",b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&c.nodeType===3){c.nodeValue=b;return}}a.textContent=b}__name(pb,"pb");var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1),qb[b]=qb[a]})});function sb(a,b,c){return b==null||typeof b=="boolean"||b===""?"":c||typeof b!="number"||b===0||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}__name(sb,"sb");function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=c.indexOf("--")===0,e=sb(c,b[c],d);c==="float"&&(c="cssFloat"),d?a.setProperty(c,e):a[c]=e}}__name(tb,"tb");var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vb(a,b){if(b){if(ub[a]&&(b.children!=null||b.dangerouslySetInnerHTML!=null))throw Error(y(137,a));if(b.dangerouslySetInnerHTML!=null){if(b.children!=null)throw Error(y(60));if(!(typeof b.dangerouslySetInnerHTML=="object"&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61))}if(b.style!=null&&typeof b.style!="object")throw Error(y(62))}}__name(vb,"vb");function wb(a,b){if(a.indexOf("-")===-1)return typeof b.is=="string";switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}__name(wb,"wb");function xb(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}__name(xb,"xb");var yb=null,zb=null,Ab=null;function Bb(a){if(a=Cb(a)){if(typeof yb!="function")throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}__name(Bb,"Bb");function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}__name(Eb,"Eb");function Fb(){if(zb){var a=zb,b=Ab;if(Ab=zb=null,Bb(a),b)for(a=0;a<b.length;a++)Bb(b[a])}}__name(Fb,"Fb");function Gb(a,b){return a(b)}__name(Gb,"Gb");function Hb(a,b,c,d,e){return a(b,c,d,e)}__name(Hb,"Hb");function Ib(){}__name(Ib,"Ib");var Jb=Gb,Kb=!1,Lb=!1;function Mb(){(zb!==null||Ab!==null)&&(Ib(),Fb())}__name(Mb,"Mb");function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}__name(Nb,"Nb");function Ob(a,b){var c=a.stateNode;if(c===null)return null;var d=Db(c);if(d===null)return null;c=d[b];a:switch(b){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(a=a.type,d=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!d;break a;default:a=!1}if(a)return null;if(c&&typeof c!="function")throw Error(y(231,b,typeof c));return c}__name(Ob,"Ob");var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:__name(function(){Pb=!0},"get")}),window.addEventListener("test",Qb,Qb),window.removeEventListener("test",Qb,Qb)}catch{Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l2=Array.prototype.slice.call(arguments,3);try{b.apply(c,l2)}catch(n2){this.onError(n2)}}__name(Rb,"Rb");var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:__name(function(a){Sb=!0,Tb=a},"onError")};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1,Tb=null,Rb.apply(Wb,arguments)}__name(Xb,"Xb");function Yb(a,b,c,d,e,f,g,h,k){if(Xb.apply(this,arguments),Sb){if(Sb){var l2=Tb;Sb=!1,Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l2)}}__name(Yb,"Yb");function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,b.flags&1026&&(c=b.return),a=b.return;while(a)}return b.tag===3?c:null}__name(Zb,"Zb");function $b(a){if(a.tag===13){var b=a.memoizedState;if(b===null&&(a=a.alternate,a!==null&&(b=a.memoizedState)),b!==null)return b.dehydrated}return null}__name($b,"$b");function ac(a){if(Zb(a)!==a)throw Error(y(188))}__name(ac,"ac");function bc(a){var b=a.alternate;if(!b){if(b=Zb(a),b===null)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(e===null)break;var f=e.alternate;if(f===null){if(d=e.return,d!==null){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188))}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0,c=e,d=f;break}if(h===d){g=!0,d=e,c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0,c=f,d=e;break}if(h===d){g=!0,d=f,c=e;break}h=h.sibling}if(!g)throw Error(y(189))}}if(c.alternate!==d)throw Error(y(190))}if(c.tag!==3)throw Error(y(188));return c.stateNode.current===c?a:b}__name(bc,"bc");function cc(a){if(a=bc(a),!a)return null;for(var b=a;;){if(b.tag===5||b.tag===6)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return,b=b.sibling}}return null}__name(cc,"cc");function dc(a,b){for(var c=a.alternate;b!==null;){if(b===a||b===c)return!0;b=b.return}return!1}__name(dc,"dc");var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}__name(rc,"rc");function sc(a,b){switch(a){case"focusin":case"focusout":kc=null;break;case"dragenter":case"dragleave":lc=null;break;case"mouseover":case"mouseout":mc=null;break;case"pointerover":case"pointerout":nc.delete(b.pointerId);break;case"gotpointercapture":case"lostpointercapture":oc.delete(b.pointerId)}}__name(sc,"sc");function tc(a,b,c,d,e,f){return a===null||a.nativeEvent!==f?(a=rc(b,c,d,e,f),b!==null&&(b=Cb(b),b!==null&&fc(b)),a):(a.eventSystemFlags|=d,b=a.targetContainers,e!==null&&b.indexOf(e)===-1&&b.push(e),a)}__name(tc,"tc");function uc(a,b,c,d,e){switch(b){case"focusin":return kc=tc(kc,a,b,c,d,e),!0;case"dragenter":return lc=tc(lc,a,b,c,d,e),!0;case"mouseover":return mc=tc(mc,a,b,c,d,e),!0;case"pointerover":var f=e.pointerId;return nc.set(f,tc(nc.get(f)||null,a,b,c,d,e)),!0;case"gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}__name(uc,"uc");function vc(a){var b=wc(a.target);if(b!==null){var c=Zb(b);if(c!==null){if(b=c.tag,b===13){if(b=$b(c),b!==null){a.blockedOn=b,hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(b===3&&c.stateNode.hydrate){a.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}a.blockedOn=null}__name(vc,"vc");function xc(a){if(a.blockedOn!==null)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(c!==null)return b=Cb(c),b!==null&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}__name(xc,"xc");function zc(a,b,c){xc(a)&&c.delete(b)}__name(zc,"zc");function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(a.blockedOn!==null){a=Cb(a.blockedOn),a!==null&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(c!==null){a.blockedOn=c;break}b.shift()}a.blockedOn===null&&jc.shift()}kc!==null&&xc(kc)&&(kc=null),lc!==null&&xc(lc)&&(lc=null),mc!==null&&xc(mc)&&(mc=null),nc.forEach(zc),oc.forEach(zc)}__name(Ac,"Ac");function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}__name(Bc,"Bc");function Cc(a){function b(b2){return Bc(b2,a)}if(__name(b,"b"),0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}for(kc!==null&&Bc(kc,a),lc!==null&&Bc(lc,a),mc!==null&&Bc(mc,a),nc.forEach(b),oc.forEach(b),c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],c.blockedOn===null);)vc(c),c.blockedOn===null&&pc.shift()}__name(Cc,"Cc");function Dc(a,b){var c={};return c[a.toLowerCase()]=b.toLowerCase(),c["Webkit"+a]="webkit"+b,c["Moz"+a]="moz"+b,c}__name(Dc,"Dc");var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}__name(Hc,"Hc");var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1)),Nc.set(d,b),Mc.set(d,e),da(e,[d])}}__name(Pc,"Pc");var Qc=r.unstable_now;Qc();var F=8;function Rc(a){if(1&a)return F=15,1;if(2&a)return F=14,2;if(4&a)return F=13,4;var b=24&a;return b!==0?(F=12,b):a&32?(F=11,32):(b=192&a,b!==0?(F=10,b):a&256?(F=9,256):(b=3584&a,b!==0?(F=8,b):a&4096?(F=7,4096):(b=4186112&a,b!==0?(F=6,b):(b=62914560&a,b!==0?(F=5,b):a&67108864?(F=4,67108864):a&134217728?(F=3,134217728):(b=805306368&a,b!==0?(F=2,b):1073741824&a?(F=1,1073741824):(F=8,a))))))}__name(Rc,"Rc");function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}__name(Sc,"Sc");function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a))}}__name(Tc,"Tc");function Uc(a,b){var c=a.pendingLanes;if(c===0)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(f!==0)d=f,e=F=15;else if(f=c&134217727,f!==0){var k=f&~g;k!==0?(d=Rc(k),e=F):(h&=f,h!==0&&(d=Rc(h),e=F))}else f=c&~g,f!==0?(d=Rc(f),e=F):h!==0&&(d=Rc(h),e=F);if(d===0)return 0;if(d=31-Vc(d),d=c&((0>d?0:1<<d)<<1)-1,b!==0&&b!==d&&!(b&g)){if(Rc(b),e<=F)return b;F=e}if(b=a.entangledLanes,b!==0)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}__name(Uc,"Uc");function Wc(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}__name(Wc,"Wc");function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),a===0?Xc(10,b):a;case 10:return a=Yc(192&~b),a===0?Xc(8,b):a;case 8:return a=Yc(3584&~b),a===0&&(a=Yc(4186112&~b),a===0&&(a=512)),a;case 2:return b=Yc(805306368&~b),b===0&&(b=268435456),b}throw Error(y(358,a))}__name(Xc,"Xc");function Yc(a){return a&-a}__name(Yc,"Yc");function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}__name(Zc,"Zc");function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d,a.pingedLanes&=d,a=a.eventTimes,b=31-Vc(b),a[b]=c}__name($c,"$c");var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return a===0?32:31-(bd(a)/cd|0)|0}__name(ad,"ad");var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}__name(gd,"gd");function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}__name(id,"id");function hd(a,b,c,d){if(fd){var e;if((e=(b&4)===0)&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(f===null)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d),jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}__name(hd,"hd");function yc(a,b,c,d){var e=xb(d);if(e=wc(e),e!==null){var f=Zb(e);if(f===null)e=null;else{var g=f.tag;if(g===13){if(e=$b(f),e!==null)return e;e=null}else if(g===3){if(f.stateNode.hydrate)return f.tag===3?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}return jd(a,b,d,e,c),null}__name(yc,"yc");var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}__name(nd,"nd");function od(a){var b=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&b===13&&(a=13)):a=b,a===10&&(a=13),32<=a||a===13?a:0}__name(od,"od");function pd(){return!0}__name(pd,"pd");function qd(){return!1}__name(qd,"qd");function rd(a){function b(b2,d,e,f,g){this._reactName=b2,this._targetInst=e,this.type=d,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b2=a[c],this[c]=b2?b2(f):f[c]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?pd:qd,this.isPropagationStopped=qd,this}return __name(b,"b"),m(b.prototype,{preventDefault:__name(function(){this.defaultPrevented=!0;var a2=this.nativeEvent;a2&&(a2.preventDefault?a2.preventDefault():typeof a2.returnValue!="unknown"&&(a2.returnValue=!1),this.isDefaultPrevented=pd)},"preventDefault"),stopPropagation:__name(function(){var a2=this.nativeEvent;a2&&(a2.stopPropagation?a2.stopPropagation():typeof a2.cancelBubble!="unknown"&&(a2.cancelBubble=!0),this.isPropagationStopped=pd)},"stopPropagation"),persist:__name(function(){},"persist"),isPersistent:pd}),b}__name(rd,"rd");var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:__name(function(a){return a.timeStamp||Date.now()},"timeStamp"),defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:__name(function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},"relatedTarget"),movementX:__name(function(a){return"movementX"in a?a.movementX:(a!==yd&&(yd&&a.type==="mousemove"?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a),wd)},"movementX"),movementY:__name(function(a){return"movementY"in a?a.movementY:xd},"movementY")}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:__name(function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData},"clipboardData")}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}__name(Pd,"Pd");function zd(){return Pd}__name(zd,"zd");var Qd=m({},ud,{key:__name(function(a){if(a.key){var b=Md[a.key]||a.key;if(b!=="Unidentified")return b}return a.type==="keypress"?(a=od(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?Nd[a.keyCode]||"Unidentified":""},"key"),code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:__name(function(a){return a.type==="keypress"?od(a):0},"charCode"),keyCode:__name(function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},"keyCode"),which:__name(function(a){return a.type==="keypress"?od(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0},"which")}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:__name(function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},"deltaX"),deltaY:__name(function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},"deltaY"),deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=" ",fe=!1;function ge(a,b){switch(a){case"keyup":return $d.indexOf(b.keyCode)!==-1;case"keydown":return b.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}__name(ge,"ge");function he(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}__name(he,"he");var ie=!1;function je(a,b){switch(a){case"compositionend":return he(b);case"keypress":return b.which!==32?null:(fe=!0,ee);case"textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}__name(je,"je");function ke(a,b){if(ie)return a==="compositionend"||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case"compositionend":return de&&b.locale!=="ko"?null:b.data;default:return null}}__name(ke,"ke");var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b==="input"?!!le[a.type]:b==="textarea"}__name(me,"me");function ne(a,b,c,d){Eb(d),b=oe(b,"onChange"),0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}__name(ne,"ne");var pe=null,qe=null;function re(a){se(a,0)}__name(re,"re");function te(a){var b=ue(a);if(Wa(b))return a}__name(te,"te");function ve(a,b){if(a==="change")return b}__name(ve,"ve");var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;"),ye=typeof ze.oninput=="function"}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}__name(Ae,"Ae");function Be(a){if(a.propertyName==="value"&&te(qe)){var b=[];if(ne(b,qe,a,xb(a)),a=re,Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}__name(Be,"Be");function Ce(a,b,c){a==="focusin"?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):a==="focusout"&&Ae()}__name(Ce,"Ce");function De(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return te(qe)}__name(De,"De");function Ee(a,b){if(a==="click")return te(b)}__name(Ee,"Ee");function Fe(a,b){if(a==="input"||a==="change")return te(b)}__name(Fe,"Fe");function Ge(a,b){return a===b&&(a!==0||1/a===1/b)||a!==a&&b!==b}__name(Ge,"Ge");var He=typeof Object.is=="function"?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;function Je(a,b){if(He(a,b))return!0;if(typeof a!="object"||a===null||typeof b!="object"||b===null)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}__name(Je,"Je");function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}__name(Ke,"Ke");function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(c.nodeType===3){if(d=a+c.textContent.length,a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}__name(Le,"Le");function Me(a,b){return a&&b?a===b?!0:a&&a.nodeType===3?!1:b&&b.nodeType===3?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}__name(Me,"Me");function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c=typeof b.contentWindow.location.href=="string"}catch{c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}__name(Ne,"Ne");function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&(b==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||b==="textarea"||a.contentEditable==="true")}__name(Oe,"Oe");var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;function Ue(a,b,c){var d=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Te||Qe==null||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}__name(Ue,"Ue");Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c,Yb(d,b,void 0,a),a.currentTarget=null}__name(Ze,"Ze");function se(a,b){b=(b&4)!==0;for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l2=h.currentTarget;if(h=h.listener,k!==f&&e.isPropagationStopped())break a;Ze(e,h,l2),f=k}else for(g=0;g<d.length;g++){if(h=d[g],k=h.instance,l2=h.currentTarget,h=h.listener,k!==f&&e.isPropagationStopped())break a;Ze(e,h,l2),f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a}__name(se,"se");function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}__name(G,"G");var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null),df(b,!0,a,null)}))}__name(cf,"cf");function df(a,b,c,d){var e=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,f=c;a==="selectionchange"&&c.nodeType!==9&&(f=c.ownerDocument);var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}__name(df,"df");function af(a,b,c,d){var e=Nc.get(b);switch(e===void 0?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a),e=void 0,!Pb||b!=="touchstart"&&b!=="touchmove"&&b!=="wheel"||(e=!0),d?e!==void 0?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):e!==void 0?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}__name(af,"af");function jd(a,b,c,d,e){var f=d;if(!(b&1)&&!(b&2)&&d!==null)a:for(;;){if(d===null)return;var g=d.tag;if(g===3||g===4){var h=d.stateNode.containerInfo;if(h===e||h.nodeType===8&&h.parentNode===e)break;if(g===4)for(g=d.return;g!==null;){var k=g.tag;if((k===3||k===4)&&(k=g.stateNode.containerInfo,k===e||k.nodeType===8&&k.parentNode===e))return;g=g.return}for(;h!==null;){if(g=wc(h),g===null)return;if(k=g.tag,k===5||k===6){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d2=f,e2=xb(c),g2=[];a:{var h2=Mc.get(a);if(h2!==void 0){var k2=td,x2=a;switch(a){case"keypress":if(od(c)===0)break a;case"keydown":case"keyup":k2=Rd;break;case"focusin":x2="focus",k2=Fd;break;case"focusout":x2="blur",k2=Fd;break;case"beforeblur":case"afterblur":k2=Fd;break;case"click":if(c.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k2=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k2=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k2=Vd;break;case Ic:case Jc:case Kc:k2=Hd;break;case Lc:k2=Xd;break;case"scroll":k2=vd;break;case"wheel":k2=Zd;break;case"copy":case"cut":case"paste":k2=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k2=Td}var w=(b&4)!==0,z2=!w&&a==="scroll",u2=w?h2!==null?h2+"Capture":null:h2;w=[];for(var t2=d2,q2;t2!==null;){q2=t2;var v2=q2.stateNode;if(q2.tag===5&&v2!==null&&(q2=v2,u2!==null&&(v2=Ob(t2,u2),v2!=null&&w.push(ef(t2,v2,q2)))),z2)break;t2=t2.return}0<w.length&&(h2=new k2(h2,x2,null,c,e2),g2.push({event:h2,listeners:w}))}}if(!(b&7)){a:{if(h2=a==="mouseover"||a==="pointerover",k2=a==="mouseout"||a==="pointerout",h2&&!(b&16)&&(x2=c.relatedTarget||c.fromElement)&&(wc(x2)||x2[ff]))break a;if((k2||h2)&&(h2=e2.window===e2?e2:(h2=e2.ownerDocument)?h2.defaultView||h2.parentWindow:window,k2?(x2=c.relatedTarget||c.toElement,k2=d2,x2=x2?wc(x2):null,x2!==null&&(z2=Zb(x2),x2!==z2||x2.tag!==5&&x2.tag!==6)&&(x2=null)):(k2=null,x2=d2),k2!==x2)){if(w=Bd,v2="onMouseLeave",u2="onMouseEnter",t2="mouse",(a==="pointerout"||a==="pointerover")&&(w=Td,v2="onPointerLeave",u2="onPointerEnter",t2="pointer"),z2=k2==null?h2:ue(k2),q2=x2==null?h2:ue(x2),h2=new w(v2,t2+"leave",k2,c,e2),h2.target=z2,h2.relatedTarget=q2,v2=null,wc(e2)===d2&&(w=new w(u2,t2+"enter",x2,c,e2),w.target=q2,w.relatedTarget=z2,v2=w),z2=v2,k2&&x2)b:{for(w=k2,u2=x2,t2=0,q2=w;q2;q2=gf(q2))t2++;for(q2=0,v2=u2;v2;v2=gf(v2))q2++;for(;0<t2-q2;)w=gf(w),t2--;for(;0<q2-t2;)u2=gf(u2),q2--;for(;t2--;){if(w===u2||u2!==null&&w===u2.alternate)break b;w=gf(w),u2=gf(u2)}w=null}else w=null;k2!==null&&hf(g2,h2,k2,w,!1),x2!==null&&z2!==null&&hf(g2,z2,x2,w,!0)}}a:{if(h2=d2?ue(d2):window,k2=h2.nodeName&&h2.nodeName.toLowerCase(),k2==="select"||k2==="input"&&h2.type==="file")var J2=ve;else if(me(h2))if(we)J2=Fe;else{J2=De;var K2=Ce}else(k2=h2.nodeName)&&k2.toLowerCase()==="input"&&(h2.type==="checkbox"||h2.type==="radio")&&(J2=Ee);if(J2&&(J2=J2(a,d2))){ne(g2,J2,c,e2);break a}K2&&K2(a,h2,d2),a==="focusout"&&(K2=h2._wrapperState)&&K2.controlled&&h2.type==="number"&&bb(h2,"number",h2.value)}switch(K2=d2?ue(d2):window,a){case"focusin":(me(K2)||K2.contentEditable==="true")&&(Qe=K2,Re=d2,Se=null);break;case"focusout":Se=Re=Qe=null;break;case"mousedown":Te=!0;break;case"contextmenu":case"mouseup":case"dragend":Te=!1,Ue(g2,c,e2);break;case"selectionchange":if(Pe)break;case"keydown":case"keyup":Ue(g2,c,e2)}var Q2;if(ae)b:{switch(a){case"compositionstart":var L2="onCompositionStart";break b;case"compositionend":L2="onCompositionEnd";break b;case"compositionupdate":L2="onCompositionUpdate";break b}L2=void 0}else ie?ge(a,c)&&(L2="onCompositionEnd"):a==="keydown"&&c.keyCode===229&&(L2="onCompositionStart");L2&&(de&&c.locale!=="ko"&&(ie||L2!=="onCompositionStart"?L2==="onCompositionEnd"&&ie&&(Q2=nd()):(kd=e2,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K2=oe(d2,L2),0<K2.length&&(L2=new Ld(L2,a,null,c,e2),g2.push({event:L2,listeners:K2}),Q2?L2.data=Q2:(Q2=he(c),Q2!==null&&(L2.data=Q2)))),(Q2=ce?je(a,c):ke(a,c))&&(d2=oe(d2,"onBeforeInput"),0<d2.length&&(e2=new Ld("onBeforeInput","beforeinput",null,c,e2),g2.push({event:e2,listeners:d2}),e2.data=Q2))}se(g2,b)})}__name(jd,"jd");function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}__name(ef,"ef");function oe(a,b){for(var c=b+"Capture",d=[];a!==null;){var e=a,f=e.stateNode;e.tag===5&&f!==null&&(e=f,f=Ob(a,c),f!=null&&d.unshift(ef(a,f,e)),f=Ob(a,b),f!=null&&d.push(ef(a,f,e))),a=a.return}return d}__name(oe,"oe");function gf(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5);return a||null}__name(gf,"gf");function hf(a,b,c,d,e){for(var f=b._reactName,g=[];c!==null&&c!==d;){var h=c,k=h.alternate,l2=h.stateNode;if(k!==null&&k===d)break;h.tag===5&&l2!==null&&(h=l2,e?(k=Ob(c,f),k!=null&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),k!=null&&g.push(ef(c,k,h)))),c=c.return}g.length!==0&&a.push({event:b,listeners:g})}__name(hf,"hf");function jf(){}__name(jf,"jf");var kf=null,lf=null;function mf(a,b){switch(a){case"button":case"input":case"select":case"textarea":return!!b.autoFocus}return!1}__name(mf,"mf");function nf(a,b){return a==="textarea"||a==="option"||a==="noscript"||typeof b.children=="string"||typeof b.children=="number"||typeof b.dangerouslySetInnerHTML=="object"&&b.dangerouslySetInnerHTML!==null&&b.dangerouslySetInnerHTML.__html!=null}__name(nf,"nf");var of=typeof setTimeout=="function"?setTimeout:void 0,pf=typeof clearTimeout=="function"?clearTimeout:void 0;function qf(a){a.nodeType===1?a.textContent="":a.nodeType===9&&(a=a.body,a!=null&&(a.textContent=""))}__name(qf,"qf");function rf(a){for(;a!=null;a=a.nextSibling){var b=a.nodeType;if(b===1||b===3)break}return a}__name(rf,"rf");function sf(a){a=a.previousSibling;for(var b=0;a;){if(a.nodeType===8){var c=a.data;if(c==="$"||c==="$!"||c==="$?"){if(b===0)return a;b--}else c==="/$"&&b++}a=a.previousSibling}return null}__name(sf,"sf");var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}__name(uf,"uf");var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){if(c=b.alternate,b.child!==null||c!==null&&c.child!==null)for(a=sf(a);a!==null;){if(c=a[wf])return c;a=sf(a)}return b}a=c,c=a.parentNode}return null}__name(wc,"wc");function Cb(a){return a=a[wf]||a[ff],!a||a.tag!==5&&a.tag!==6&&a.tag!==13&&a.tag!==3?null:a}__name(Cb,"Cb");function ue(a){if(a.tag===5||a.tag===6)return a.stateNode;throw Error(y(33))}__name(ue,"ue");function Db(a){return a[xf]||null}__name(Db,"Db");function $e(a){var b=a[yf];return b===void 0&&(b=a[yf]=new Set),b}__name($e,"$e");var zf=[],Af=-1;function Bf(a){return{current:a}}__name(Bf,"Bf");function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}__name(H,"H");function I(a,b){Af++,zf[Af]=a.current,a.current=b}__name(I,"I");var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];return d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e),e}__name(Ef,"Ef");function Ff(a){return a=a.childContextTypes,a!=null}__name(Ff,"Ff");function Gf(){H(N),H(M)}__name(Gf,"Gf");function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b),I(N,c)}__name(Hf,"Hf");function If(a,b,c){var d=a.stateNode;if(a=b.childContextTypes,typeof d.getChildContext!="function")return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}__name(If,"If");function Jf(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf,Df=M.current,I(M,a),I(N,N.current),!0}__name(Jf,"Jf");function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N),I(N,c)}__name(Kf,"Kf");var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=Rf!==void 0?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1e4>dg?Sf:function(){return Sf()-dg};function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332))}}__name(eg,"eg");function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332))}}__name(fg,"fg");function gg(a,b){return a=fg(a),Nf(a,b)}__name(gg,"gg");function hg(a,b,c){return a=fg(a),Of(a,b,c)}__name(hg,"hg");function ig(){if(bg!==null){var a=bg;bg=null,Pf(a)}jg()}__name(ig,"ig");function jg(){if(!cg&&ag!==null){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(c!==null)}}),ag=null}catch(c){throw ag!==null&&(ag=ag.slice(a+1)),Of(Uf,ig),c}finally{cg=!1}}}__name(jg,"jg");var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b),a=a.defaultProps;for(var c in a)b[c]===void 0&&(b[c]=a[c]);return b}return b}__name(lg,"lg");var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}__name(qg,"qg");function rg(a){var b=mg.current;H(mg),a.type._context._currentValue=b}__name(rg,"rg");function sg(a,b){for(;a!==null;){var c=a.alternate;if((a.childLanes&b)===b){if(c===null||(c.childLanes&b)===b)break;c.childLanes|=b}else a.childLanes|=b,c!==null&&(c.childLanes|=b);a=a.return}}__name(sg,"sg");function tg(a,b){ng=a,pg=og=null,a=a.dependencies,a!==null&&a.firstContext!==null&&(a.lanes&b&&(ug=!0),a.firstContext=null)}__name(tg,"tg");function vg(a,b){if(pg!==a&&b!==!1&&b!==0)if((typeof b!="number"||b===1073741823)&&(pg=a,b=1073741823),b={context:a,observedBits:b,next:null},og===null){if(ng===null)throw Error(y(308));og=b,ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b;return a._currentValue}__name(vg,"vg");var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}__name(xg,"xg");function yg(a,b){a=a.updateQueue,b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}__name(yg,"yg");function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}__name(zg,"zg");function Ag(a,b){if(a=a.updateQueue,a!==null){a=a.shared;var c=a.pending;c===null?b.next=b:(b.next=c.next,c.next=b),a.pending=b}}__name(Ag,"Ag");function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(d!==null&&(d=d.updateQueue,c===d)){var e=null,f=null;if(c=c.firstBaseUpdate,c!==null){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};f===null?e=f=g:f=f.next=g,c=c.next}while(c!==null);f===null?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects},a.updateQueue=c;return}a=c.lastBaseUpdate,a===null?c.firstBaseUpdate=b:a.next=b,c.lastBaseUpdate=b}__name(Bg,"Bg");function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(h!==null){e.shared.pending=null;var k=h,l2=k.next;k.next=null,g===null?f=l2:g.next=l2,g=k;var n2=a.alternate;if(n2!==null){n2=n2.updateQueue;var A2=n2.lastBaseUpdate;A2!==g&&(A2===null?n2.firstBaseUpdate=l2:A2.next=l2,n2.lastBaseUpdate=k)}}if(f!==null){A2=e.baseState,g=0,n2=l2=k=null;do{h=f.lane;var p2=f.eventTime;if((d&h)===h){n2!==null&&(n2=n2.next={eventTime:p2,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});a:{var C2=a,x2=f;switch(h=b,p2=c,x2.tag){case 1:if(C2=x2.payload,typeof C2=="function"){A2=C2.call(p2,A2,h);break a}A2=C2;break a;case 3:C2.flags=C2.flags&-4097|64;case 0:if(C2=x2.payload,h=typeof C2=="function"?C2.call(p2,A2,h):C2,h==null)break a;A2=m({},A2,h);break a;case 2:wg=!0}}f.callback!==null&&(a.flags|=32,h=e.effects,h===null?e.effects=[f]:h.push(f))}else p2={eventTime:p2,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},n2===null?(l2=n2=p2,k=A2):n2=n2.next=p2,g|=h;if(f=f.next,f===null){if(h=e.shared.pending,h===null)break;f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}}while(!0);n2===null&&(k=A2),e.baseState=k,e.firstBaseUpdate=l2,e.lastBaseUpdate=n2,Dg|=g,a.lanes=g,a.memoizedState=A2}}__name(Cg,"Cg");function Eg(a,b,c){if(a=b.effects,b.effects=null,a!==null)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(e!==null){if(d.callback=null,d=c,typeof e!="function")throw Error(y(191,e));e.call(d)}}}__name(Eg,"Eg");var Fg=new aa.Component().refs;function Gg(a,b,c,d){b=a.memoizedState,c=c(d,b),c=c==null?b:m({},b,c),a.memoizedState=c,a.lanes===0&&(a.updateQueue.baseState=c)}__name(Gg,"Gg");var Kg={isMounted:__name(function(a){return(a=a._reactInternals)?Zb(a)===a:!1},"isMounted"),enqueueSetState:__name(function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b,c!=null&&(f.callback=c),Ag(a,f),Jg(a,e,d)},"enqueueSetState"),enqueueReplaceState:__name(function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1,f.payload=b,c!=null&&(f.callback=c),Ag(a,f),Jg(a,e,d)},"enqueueReplaceState"),enqueueForceUpdate:__name(function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2,b!=null&&(e.callback=b),Ag(a,e),Jg(a,d,c)},"enqueueForceUpdate")};function Lg(a,b,c,d,e,f,g){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}__name(Lg,"Lg");function Mg(a,b,c){var d=!1,e=Cf,f=b.contextType;return typeof f=="object"&&f!==null?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=d!=null)?Ef(a,e):Cf),b=new b(c,f),a.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=Kg,a.stateNode=b,b._reactInternals=a,d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f),b}__name(Mg,"Mg");function Ng(a,b,c,d){a=b.state,typeof b.componentWillReceiveProps=="function"&&b.componentWillReceiveProps(c,d),typeof b.UNSAFE_componentWillReceiveProps=="function"&&b.UNSAFE_componentWillReceiveProps(c,d),b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}__name(Ng,"Ng");function Og(a,b,c,d){var e=a.stateNode;e.props=c,e.state=a.memoizedState,e.refs=Fg,xg(a);var f=b.contextType;typeof f=="object"&&f!==null?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f)),Cg(a,c,e,d),e.state=a.memoizedState,f=b.getDerivedStateFromProps,typeof f=="function"&&(Gg(a,b,f,c),e.state=a.memoizedState),typeof b.getDerivedStateFromProps=="function"||typeof e.getSnapshotBeforeUpdate=="function"||typeof e.UNSAFE_componentWillMount!="function"&&typeof e.componentWillMount!="function"||(b=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState),typeof e.componentDidMount=="function"&&(a.flags|=4)}__name(Og,"Og");var Pg=Array.isArray;function Qg(a,b,c){if(a=c.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;return b!==null&&b.ref!==null&&typeof b.ref=="function"&&b.ref._stringRef===e?b.ref:(b=__name(function(a2){var b2=d.refs;b2===Fg&&(b2=d.refs={}),a2===null?delete b2[e]:b2[e]=a2},"b"),b._stringRef=e,b)}if(typeof a!="string")throw Error(y(284));if(!c._owner)throw Error(y(290,a))}return a}__name(Qg,"Qg");function Rg(a,b){if(a.type!=="textarea")throw Error(y(31,Object.prototype.toString.call(b)==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":b))}__name(Rg,"Rg");function Sg(a){function b(b2,c2){if(a){var d2=b2.lastEffect;d2!==null?(d2.nextEffect=c2,b2.lastEffect=c2):b2.firstEffect=b2.lastEffect=c2,c2.nextEffect=null,c2.flags=8}}__name(b,"b");function c(c2,d2){if(!a)return null;for(;d2!==null;)b(c2,d2),d2=d2.sibling;return null}__name(c,"c");function d(a2,b2){for(a2=new Map;b2!==null;)b2.key!==null?a2.set(b2.key,b2):a2.set(b2.index,b2),b2=b2.sibling;return a2}__name(d,"d");function e(a2,b2){return a2=Tg(a2,b2),a2.index=0,a2.sibling=null,a2}__name(e,"e");function f(b2,c2,d2){return b2.index=d2,a?(d2=b2.alternate,d2!==null?(d2=d2.index,d2<c2?(b2.flags=2,c2):d2):(b2.flags=2,c2)):c2}__name(f,"f");function g(b2){return a&&b2.alternate===null&&(b2.flags=2),b2}__name(g,"g");function h(a2,b2,c2,d2){return b2===null||b2.tag!==6?(b2=Ug(c2,a2.mode,d2),b2.return=a2,b2):(b2=e(b2,c2),b2.return=a2,b2)}__name(h,"h");function k(a2,b2,c2,d2){return b2!==null&&b2.elementType===c2.type?(d2=e(b2,c2.props),d2.ref=Qg(a2,b2,c2),d2.return=a2,d2):(d2=Vg(c2.type,c2.key,c2.props,null,a2.mode,d2),d2.ref=Qg(a2,b2,c2),d2.return=a2,d2)}__name(k,"k");function l2(a2,b2,c2,d2){return b2===null||b2.tag!==4||b2.stateNode.containerInfo!==c2.containerInfo||b2.stateNode.implementation!==c2.implementation?(b2=Wg(c2,a2.mode,d2),b2.return=a2,b2):(b2=e(b2,c2.children||[]),b2.return=a2,b2)}__name(l2,"l");function n2(a2,b2,c2,d2,f2){return b2===null||b2.tag!==7?(b2=Xg(c2,a2.mode,d2,f2),b2.return=a2,b2):(b2=e(b2,c2),b2.return=a2,b2)}__name(n2,"n");function A2(a2,b2,c2){if(typeof b2=="string"||typeof b2=="number")return b2=Ug(""+b2,a2.mode,c2),b2.return=a2,b2;if(typeof b2=="object"&&b2!==null){switch(b2.$$typeof){case sa:return c2=Vg(b2.type,b2.key,b2.props,null,a2.mode,c2),c2.ref=Qg(a2,null,b2),c2.return=a2,c2;case ta:return b2=Wg(b2,a2.mode,c2),b2.return=a2,b2}if(Pg(b2)||La(b2))return b2=Xg(b2,a2.mode,c2,null),b2.return=a2,b2;Rg(a2,b2)}return null}__name(A2,"A");function p2(a2,b2,c2,d2){var e2=b2!==null?b2.key:null;if(typeof c2=="string"||typeof c2=="number")return e2!==null?null:h(a2,b2,""+c2,d2);if(typeof c2=="object"&&c2!==null){switch(c2.$$typeof){case sa:return c2.key===e2?c2.type===ua?n2(a2,b2,c2.props.children,d2,e2):k(a2,b2,c2,d2):null;case ta:return c2.key===e2?l2(a2,b2,c2,d2):null}if(Pg(c2)||La(c2))return e2!==null?null:n2(a2,b2,c2,d2,null);Rg(a2,c2)}return null}__name(p2,"p");function C2(a2,b2,c2,d2,e2){if(typeof d2=="string"||typeof d2=="number")return a2=a2.get(c2)||null,h(b2,a2,""+d2,e2);if(typeof d2=="object"&&d2!==null){switch(d2.$$typeof){case sa:return a2=a2.get(d2.key===null?c2:d2.key)||null,d2.type===ua?n2(b2,a2,d2.props.children,e2,d2.key):k(b2,a2,d2,e2);case ta:return a2=a2.get(d2.key===null?c2:d2.key)||null,l2(b2,a2,d2,e2)}if(Pg(d2)||La(d2))return a2=a2.get(c2)||null,n2(b2,a2,d2,e2,null);Rg(b2,d2)}return null}__name(C2,"C");function x2(e2,g2,h2,k2){for(var l3=null,t2=null,u2=g2,z2=g2=0,q2=null;u2!==null&&z2<h2.length;z2++){u2.index>z2?(q2=u2,u2=null):q2=u2.sibling;var n3=p2(e2,u2,h2[z2],k2);if(n3===null){u2===null&&(u2=q2);break}a&&u2&&n3.alternate===null&&b(e2,u2),g2=f(n3,g2,z2),t2===null?l3=n3:t2.sibling=n3,t2=n3,u2=q2}if(z2===h2.length)return c(e2,u2),l3;if(u2===null){for(;z2<h2.length;z2++)u2=A2(e2,h2[z2],k2),u2!==null&&(g2=f(u2,g2,z2),t2===null?l3=u2:t2.sibling=u2,t2=u2);return l3}for(u2=d(e2,u2);z2<h2.length;z2++)q2=C2(u2,e2,z2,h2[z2],k2),q2!==null&&(a&&q2.alternate!==null&&u2.delete(q2.key===null?z2:q2.key),g2=f(q2,g2,z2),t2===null?l3=q2:t2.sibling=q2,t2=q2);return a&&u2.forEach(function(a2){return b(e2,a2)}),l3}__name(x2,"x");function w(e2,g2,h2,k2){var l3=La(h2);if(typeof l3!="function")throw Error(y(150));if(h2=l3.call(h2),h2==null)throw Error(y(151));for(var t2=l3=null,u2=g2,z2=g2=0,q2=null,n3=h2.next();u2!==null&&!n3.done;z2++,n3=h2.next()){u2.index>z2?(q2=u2,u2=null):q2=u2.sibling;var w2=p2(e2,u2,n3.value,k2);if(w2===null){u2===null&&(u2=q2);break}a&&u2&&w2.alternate===null&&b(e2,u2),g2=f(w2,g2,z2),t2===null?l3=w2:t2.sibling=w2,t2=w2,u2=q2}if(n3.done)return c(e2,u2),l3;if(u2===null){for(;!n3.done;z2++,n3=h2.next())n3=A2(e2,n3.value,k2),n3!==null&&(g2=f(n3,g2,z2),t2===null?l3=n3:t2.sibling=n3,t2=n3);return l3}for(u2=d(e2,u2);!n3.done;z2++,n3=h2.next())n3=C2(u2,e2,z2,n3.value,k2),n3!==null&&(a&&n3.alternate!==null&&u2.delete(n3.key===null?z2:n3.key),g2=f(n3,g2,z2),t2===null?l3=n3:t2.sibling=n3,t2=n3);return a&&u2.forEach(function(a2){return b(e2,a2)}),l3}return __name(w,"w"),function(a2,d2,f2,h2){var k2=typeof f2=="object"&&f2!==null&&f2.type===ua&&f2.key===null;k2&&(f2=f2.props.children);var l3=typeof f2=="object"&&f2!==null;if(l3)switch(f2.$$typeof){case sa:a:{for(l3=f2.key,k2=d2;k2!==null;){if(k2.key===l3){switch(k2.tag){case 7:if(f2.type===ua){c(a2,k2.sibling),d2=e(k2,f2.props.children),d2.return=a2,a2=d2;break a}break;default:if(k2.elementType===f2.type){c(a2,k2.sibling),d2=e(k2,f2.props),d2.ref=Qg(a2,k2,f2),d2.return=a2,a2=d2;break a}}c(a2,k2);break}else b(a2,k2);k2=k2.sibling}f2.type===ua?(d2=Xg(f2.props.children,a2.mode,h2,f2.key),d2.return=a2,a2=d2):(h2=Vg(f2.type,f2.key,f2.props,null,a2.mode,h2),h2.ref=Qg(a2,d2,f2),h2.return=a2,a2=h2)}return g(a2);case ta:a:{for(k2=f2.key;d2!==null;){if(d2.key===k2)if(d2.tag===4&&d2.stateNode.containerInfo===f2.containerInfo&&d2.stateNode.implementation===f2.implementation){c(a2,d2.sibling),d2=e(d2,f2.children||[]),d2.return=a2,a2=d2;break a}else{c(a2,d2);break}else b(a2,d2);d2=d2.sibling}d2=Wg(f2,a2.mode,h2),d2.return=a2,a2=d2}return g(a2)}if(typeof f2=="string"||typeof f2=="number")return f2=""+f2,d2!==null&&d2.tag===6?(c(a2,d2.sibling),d2=e(d2,f2),d2.return=a2,a2=d2):(c(a2,d2),d2=Ug(f2,a2.mode,h2),d2.return=a2,a2=d2),g(a2);if(Pg(f2))return x2(a2,d2,f2,h2);if(La(f2))return w(a2,d2,f2,h2);if(l3&&Rg(a2,f2),typeof f2>"u"&&!k2)switch(a2.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a2.type)||"Component"))}return c(a2,d2)}}__name(Sg,"Sg");var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);function dh(a){if(a===$g)throw Error(y(174));return a}__name(dh,"dh");function eh(a,b){switch(I(ch,b),I(bh,a),I(ah,$g),a=b.nodeType,a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=a===8?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah),I(ah,b)}__name(eh,"eh");function fh(){H(ah),H(bh),H(ch)}__name(fh,"fh");function gh(a){dh(ch.current);var b=dh(ah.current),c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}__name(gh,"gh");function hh(a){bh.current===a&&(H(ah),H(bh))}__name(hh,"hh");var P=Bf(0);function ih(a){for(var b=a;b!==null;){if(b.tag===13){var c=b.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return b}else if(b.tag===19&&b.memoizedProps.revealOrder!==void 0){if(b.flags&64)return b}else if(b.child!==null){b.child.return=b,b=b.child;continue}if(b===a)break;for(;b.sibling===null;){if(b.return===null||b.return===a)return null;b=b.return}b.sibling.return=b.return,b=b.sibling}return null}__name(ih,"ih");var jh=null,kh=null,lh=!1;function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED",c.type="DELETED",c.stateNode=b,c.return=a,c.flags=8,a.lastEffect!==null?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}__name(mh,"mh");function oh(a,b){switch(a.tag){case 5:var c=a.type;return b=b.nodeType!==1||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b,b!==null?(a.stateNode=b,!0):!1;case 6:return b=a.pendingProps===""||b.nodeType!==3?null:b,b!==null?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}__name(oh,"oh");function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){if(b=rf(c.nextSibling),!b||!oh(a,b)){a.flags=a.flags&-1025|2,lh=!1,jh=a;return}mh(jh,c)}jh=a,kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}__name(ph,"ph");function qh(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;jh=a}__name(qh,"qh");function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(a.tag!==5||b!=="head"&&b!=="body"&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);if(qh(a),a.tag===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(y(317));a:{for(a=a.nextSibling,b=0;a;){if(a.nodeType===8){var c=a.data;if(c==="/$"){if(b===0){kh=rf(a.nextSibling);break a}b--}else c!=="$"&&c!=="$!"&&c!=="$?"||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}__name(rh,"rh");function sh(){kh=jh=null,lh=!1}__name(sh,"sh");var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}__name(uh,"uh");var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321))}__name(Ah,"Ah");function Bh(a,b){if(b===null)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}__name(Bh,"Bh");function Ch(a,b,c,d,e,f){if(xh=f,R=b,b.memoizedState=null,b.updateQueue=null,b.lanes=0,vh.current=a===null||a.memoizedState===null?Dh:Eh,a=c(d,e),zh){f=0;do{if(zh=!1,!(25>f))throw Error(y(301));f+=1,T=S=null,b.updateQueue=null,vh.current=Fh,a=c(d,e)}while(zh)}if(vh.current=Gh,b=S!==null&&S.next!==null,xh=0,T=S=R=null,yh=!1,b)throw Error(y(300));return a}__name(Ch,"Ch");function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return T===null?R.memoizedState=T=a:T=T.next=a,T}__name(Hh,"Hh");function Ih(){if(S===null){var a=R.alternate;a=a!==null?a.memoizedState:null}else a=S.next;var b=T===null?R.memoizedState:T.next;if(b!==null)T=b,S=a;else{if(a===null)throw Error(y(310));S=a,a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null},T===null?R.memoizedState=T=a:T=T.next=a}return T}__name(Ih,"Ih");function Jh(a,b){return typeof b=="function"?b(a):b}__name(Jh,"Jh");function Kh(a){var b=Ih(),c=b.queue;if(c===null)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(f!==null){if(e!==null){var g=e.next;e.next=f.next,f.next=g}d.baseQueue=e=f,c.pending=null}if(e!==null){e=e.next,d=d.baseState;var h=g=f=null,k=e;do{var l2=k.lane;if((xh&l2)===l2)h!==null&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n2={lane:l2,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};h===null?(g=h=n2,f=d):h=h.next=n2,R.lanes|=l2,Dg|=l2}k=k.next}while(k!==null&&k!==e);h===null?f=d:h.next=g,He(d,b.memoizedState)||(ug=!0),b.memoizedState=d,b.baseState=f,b.baseQueue=h,c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}__name(Kh,"Kh");function Lh(a){var b=Ih(),c=b.queue;if(c===null)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(e!==null){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0),b.memoizedState=f,b.baseQueue===null&&(b.baseState=f),c.lastRenderedState=f}return[f,d]}__name(Lh,"Lh");function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(e!==null?a=e===d:(a=a.mutableReadLanes,(a=(xh&a)===a)&&(b._workInProgressVersionPrimary=d,th.push(b))),a)return c(b._source);throw th.push(b),Error(y(350))}__name(Mh,"Mh");function Nh(a,b,c,d){var e=U;if(e===null)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l2=k[1],n2=k[0];k=T;var A2=a.memoizedState,p2=A2.refs,C2=p2.getSnapshot,x2=A2.source;A2=A2.subscribe;var w=R;return a.memoizedState={refs:p2,source:b,subscribe:d},h.useEffect(function(){p2.getSnapshot=c,p2.setSnapshot=l2;var a2=f(b._source);if(!He(g,a2)){a2=c(b._source),He(n2,a2)||(l2(a2),a2=Ig(w),e.mutableReadLanes|=a2&e.pendingLanes),a2=e.mutableReadLanes,e.entangledLanes|=a2;for(var d2=e.entanglements,h2=a2;0<h2;){var k2=31-Vc(h2),v2=1<<k2;d2[k2]|=a2,h2&=~v2}}},[c,b,d]),h.useEffect(function(){return d(b._source,function(){var a2=p2.getSnapshot,c2=p2.setSnapshot;try{c2(a2(b._source));var d2=Ig(w);e.mutableReadLanes|=d2&e.pendingLanes}catch(q2){c2(function(){throw q2})}})},[b,d]),He(C2,c)&&He(x2,b)&&He(A2,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n2},a.dispatch=l2=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n2=Mh(e,b,c),k.memoizedState=k.baseState=n2),n2}__name(Nh,"Nh");function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}__name(Ph,"Ph");function Qh(a){var b=Hh();return typeof a=="function"&&(a=a()),b.memoizedState=b.baseState=a,a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a},a=a.dispatch=Oh.bind(null,R,a),[b.memoizedState,a]}__name(Qh,"Qh");function Rh(a,b,c,d){return a={tag:a,create:b,destroy:c,deps:d,next:null},b=R.updateQueue,b===null?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,c===null?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a)),a}__name(Rh,"Rh");function Sh(a){var b=Hh();return a={current:a},b.memoizedState=a}__name(Sh,"Sh");function Th(){return Ih().memoizedState}__name(Th,"Th");function Uh(a,b,c,d){var e=Hh();R.flags|=a,e.memoizedState=Rh(1|b,c,void 0,d===void 0?null:d)}__name(Uh,"Uh");function Vh(a,b,c,d){var e=Ih();d=d===void 0?null:d;var f=void 0;if(S!==null){var g=S.memoizedState;if(f=g.destroy,d!==null&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a,e.memoizedState=Rh(1|b,c,f,d)}__name(Vh,"Vh");function Wh(a,b){return Uh(516,4,a,b)}__name(Wh,"Wh");function Xh(a,b){return Vh(516,4,a,b)}__name(Xh,"Xh");function Yh(a,b){return Vh(4,2,a,b)}__name(Yh,"Yh");function Zh(a,b){if(typeof b=="function")return a=a(),b(a),function(){b(null)};if(b!=null)return a=a(),b.current=a,function(){b.current=null}}__name(Zh,"Zh");function $h(a,b,c){return c=c!=null?c.concat([a]):null,Vh(4,2,Zh.bind(null,b,a),c)}__name($h,"$h");function ai(){}__name(ai,"ai");function bi(a,b){var c=Ih();b=b===void 0?null:b;var d=c.memoizedState;return d!==null&&b!==null&&Bh(b,d[1])?d[0]:(c.memoizedState=[a,b],a)}__name(bi,"bi");function ci(a,b){var c=Ih();b=b===void 0?null:b;var d=c.memoizedState;return d!==null&&b!==null&&Bh(b,d[1])?d[0]:(a=a(),c.memoizedState=[a,b],a)}__name(ci,"ci");function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)}),gg(97<c?97:c,function(){var c2=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c2}})}__name(di,"di");function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;if(g===null?f.next=f:(f.next=g.next,g.next=f),b.pending=f,g=a.alternate,a===R||g!==null&&g===R)zh=yh=!0;else{if(a.lanes===0&&(g===null||g.lanes===0)&&(g=b.lastRenderedReducer,g!==null))try{var h=b.lastRenderedState,k=g(h,c);if(f.eagerReducer=g,f.eagerState=k,He(k,h))return}catch{}finally{}Jg(a,e,d)}}__name(Oh,"Oh");var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:__name(function(a,b){return Hh().memoizedState=[a,b===void 0?null:b],a},"useCallback"),useContext:vg,useEffect:Wh,useImperativeHandle:__name(function(a,b,c){return c=c!=null?c.concat([a]):null,Uh(4,2,Zh.bind(null,b,a),c)},"useImperativeHandle"),useLayoutEffect:__name(function(a,b){return Uh(4,2,a,b)},"useLayoutEffect"),useMemo:__name(function(a,b){var c=Hh();return b=b===void 0?null:b,a=a(),c.memoizedState=[a,b],a},"useMemo"),useReducer:__name(function(a,b,c){var d=Hh();return b=c!==void 0?c(b):b,d.memoizedState=d.baseState=b,a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b},a=a.dispatch=Oh.bind(null,R,a),[d.memoizedState,a]},"useReducer"),useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:__name(function(a){var b=Qh(a),c=b[0],d=b[1];return Wh(function(){var b2=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b2}},[a]),c},"useDeferredValue"),useTransition:__name(function(){var a=Qh(!1),b=a[0];return a=di.bind(null,a[1]),Sh(a),[a,b]},"useTransition"),useMutableSource:__name(function(a,b,c){var d=Hh();return d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c},Nh(d,a,b,c)},"useMutableSource"),useOpaqueIdentifier:__name(function(){if(lh){var a=!1,b=uf(function(){throw a||(a=!0,c("r:"+(tf++).toString(36))),Error(y(355))}),c=Qh(b)[1];return!(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},void 0,null)),b}return b="r:"+(tf++).toString(36),Qh(b),b},"useOpaqueIdentifier"),unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:__name(function(){return Kh(Jh)},"useState"),useDebugValue:ai,useDeferredValue:__name(function(a){var b=Kh(Jh),c=b[0],d=b[1];return Xh(function(){var b2=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b2}},[a]),c},"useDeferredValue"),useTransition:__name(function(){var a=Kh(Jh)[0];return[Th().current,a]},"useTransition"),useMutableSource:Ph,useOpaqueIdentifier:__name(function(){return Kh(Jh)[0]},"useOpaqueIdentifier"),unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:__name(function(){return Lh(Jh)},"useState"),useDebugValue:ai,useDeferredValue:__name(function(a){var b=Lh(Jh),c=b[0],d=b[1];return Xh(function(){var b2=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b2}},[a]),c},"useDeferredValue"),useTransition:__name(function(){var a=Lh(Jh)[0];return[Th().current,a]},"useTransition"),useMutableSource:Ph,useOpaqueIdentifier:__name(function(){return Lh(Jh)[0]},"useOpaqueIdentifier"),unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=a===null?Zg(b,null,c,d):Yg(b,a.child,c,d)}__name(fi,"fi");function gi(a,b,c,d,e){c=c.render;var f=b.ref;return tg(b,e),d=Ch(a,b,c,d,f,e),a!==null&&!ug?(b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e)):(b.flags|=1,fi(a,b,d,e),b.child)}__name(gi,"gi");function ii(a,b,c,d,e,f){if(a===null){var g=c.type;return typeof g=="function"&&!ji(g)&&g.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(b.tag=15,b.type=g,ki(a,b,g,d,e,f)):(a=Vg(c.type,null,d,b,b.mode,f),a.ref=b.ref,a.return=b,b.child=a)}return g=a.child,!(e&f)&&(e=g.memoizedProps,c=c.compare,c=c!==null?c:Je,c(e,d)&&a.ref===b.ref)?hi(a,b,f):(b.flags|=1,a=Tg(g,d),a.ref=b.ref,a.return=b,b.child=a)}__name(ii,"ii");function ki(a,b,c,d,e,f){if(a!==null&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,(f&e)!==0)a.flags&16384&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}__name(ki,"ki");function mi(a,b,c){var d=b.pendingProps,e=d.children,f=a!==null?a.memoizedState:null;if(d.mode==="hidden"||d.mode==="unstable-defer-without-hiding")if(!(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(c&1073741824)b.memoizedState={baseLanes:0},ni(b,f!==null?f.baseLanes:c);else return a=f!==null?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else f!==null?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);return fi(a,b,e,c),b.child}__name(mi,"mi");function oi(a,b){var c=b.ref;(a===null&&c!==null||a!==null&&a.ref!==c)&&(b.flags|=128)}__name(oi,"oi");function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;return f=Ef(b,f),tg(b,e),c=Ch(a,b,c,d,f,e),a!==null&&!ug?(b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e)):(b.flags|=1,fi(a,b,c,e),b.child)}__name(li,"li");function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;if(tg(b,e),b.stateNode===null)a!==null&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(a===null){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l2=c.contextType;typeof l2=="object"&&l2!==null?l2=vg(l2):(l2=Ff(c)?Df:M.current,l2=Ef(b,l2));var n2=c.getDerivedStateFromProps,A2=typeof n2=="function"||typeof g.getSnapshotBeforeUpdate=="function";A2||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(h!==d||k!==l2)&&Ng(b,g,d,l2),wg=!1;var p2=b.memoizedState;g.state=p2,Cg(b,d,g,e),k=b.memoizedState,h!==d||p2!==k||N.current||wg?(typeof n2=="function"&&(Gg(b,c,n2,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p2,k,l2))?(A2||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(b.flags|=4)):(typeof g.componentDidMount=="function"&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l2,d=h):(typeof g.componentDidMount=="function"&&(b.flags|=4),d=!1)}else{g=b.stateNode,yg(a,b),h=b.memoizedProps,l2=b.type===b.elementType?h:lg(b.type,h),g.props=l2,A2=b.pendingProps,p2=g.context,k=c.contextType,typeof k=="object"&&k!==null?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C2=c.getDerivedStateFromProps;(n2=typeof C2=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(h!==A2||p2!==k)&&Ng(b,g,d,k),wg=!1,p2=b.memoizedState,g.state=p2,Cg(b,d,g,e);var x2=b.memoizedState;h!==A2||p2!==x2||N.current||wg?(typeof C2=="function"&&(Gg(b,c,C2,d),x2=b.memoizedState),(l2=wg||Lg(b,c,l2,d,p2,x2,k))?(n2||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(d,x2,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(d,x2,k)),typeof g.componentDidUpdate=="function"&&(b.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(b.flags|=256)):(typeof g.componentDidUpdate!="function"||h===a.memoizedProps&&p2===a.memoizedState||(b.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||h===a.memoizedProps&&p2===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x2),g.props=d,g.state=x2,g.context=k,d=l2):(typeof g.componentDidUpdate!="function"||h===a.memoizedProps&&p2===a.memoizedState||(b.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||h===a.memoizedProps&&p2===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}__name(pi,"pi");function qi(a,b,c,d,e,f){oi(a,b);var g=(b.flags&64)!==0;if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode,ei.current=b;var h=g&&typeof c.getDerivedStateFromError!="function"?null:d.render();return b.flags|=1,a!==null&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f),b.memoizedState=d.state,e&&Kf(b,c,!0),b.child}__name(qi,"qi");function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1),eh(a,b.containerInfo)}__name(ri,"ri");var si={dehydrated:null,retryLane:0};function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;return(g=(b.flags&64)!==0)||(g=a!==null&&a.memoizedState===null?!1:(e&2)!==0),g?(f=!0,b.flags&=-65):a!==null&&a.memoizedState===null||d.fallback===void 0||d.unstable_avoidThisFallback===!0||(e|=1),I(P,e&1),a===null?(d.fallback!==void 0&&ph(b),a=d.children,e=d.fallback,f?(a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a):typeof d.unstable_expectedLoadTime=="number"?(a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,b.lanes=33554432,a):(c=vi({mode:"visible",children:a},b.mode,c,null),c.return=b,b.child=c)):a.memoizedState!==null?f?(d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=e===null?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d):(c=xi(a,b,d.children,c),b.memoizedState=null,c):f?(d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=e===null?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d):(c=xi(a,b,d.children,c),b.memoizedState=null,c)}__name(ti,"ti");function ui(a,b,c,d){var e=a.mode,f=a.child;return b={mode:"hidden",children:b},!(e&2)&&f!==null?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null),c=Xg(c,e,d,null),f.return=a,c.return=a,f.sibling=c,a.child=f,c}__name(ui,"ui");function xi(a,b,c,d){var e=a.child;return a=e.sibling,c=Tg(e,{mode:"visible",children:c}),!(b.mode&2)&&(c.lanes=d),c.return=b,c.sibling=null,a!==null&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a),b.child=c}__name(xi,"xi");function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};return!(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,g!==null?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h),a!==null?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2),d.return=b,c.return=b,c.sibling=d,b.child=c,d}__name(wi,"wi");function yi(a,b){a.lanes|=b;var c=a.alternate;c!==null&&(c.lanes|=b),sg(a.return,b)}__name(yi,"yi");function zi(a,b,c,d,e,f){var g=a.memoizedState;g===null?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}__name(zi,"zi");function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;if(fi(a,b,d.children,c),d=P.current,d&2)d=d&1|2,b.flags|=64;else{if(a!==null&&a.flags&64)a:for(a=b.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&yi(a,c);else if(a.tag===19)yi(a,c);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===b)break a;for(;a.sibling===null;){if(a.return===null||a.return===b)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}d&=1}if(I(P,d),!(b.mode&2))b.memoizedState=null;else switch(e){case"forwards":for(c=b.child,e=null;c!==null;)a=c.alternate,a!==null&&ih(a)===null&&(e=c),c=c.sibling;c=e,c===null?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null),zi(b,!1,e,c,f,b.lastEffect);break;case"backwards":for(c=null,e=b.child,b.child=null;e!==null;){if(a=e.alternate,a!==null&&ih(a)===null){b.child=e;break}a=e.sibling,e.sibling=c,c=e,e=a}zi(b,!0,c,null,f,b.lastEffect);break;case"together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}__name(Ai,"Ai");function hi(a,b,c){if(a!==null&&(b.dependencies=a.dependencies),Dg|=b.lanes,c&b.childLanes){if(a!==null&&b.child!==a.child)throw Error(y(153));if(b.child!==null){for(a=b.child,c=Tg(a,a.pendingProps),b.child=c,c.return=b;a.sibling!==null;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}__name(hi,"hi");var Bi,Ci,Di,Ei;Bi=__name(function(a,b){for(var c=b.child;c!==null;){if(c.tag===5||c.tag===6)a.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===b)break;for(;c.sibling===null;){if(c.return===null||c.return===b)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},"Bi");Ci=__name(function(){},"Ci");Di=__name(function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode,dh(ah.current);var f=null;switch(c){case"input":e=Ya(a,e),d=Ya(a,d),f=[];break;case"option":e=eb(a,e),d=eb(a,d),f=[];break;case"select":e=m({},e,{value:void 0}),d=m({},d,{value:void 0}),f=[];break;case"textarea":e=gb(a,e),d=gb(a,d),f=[];break;default:typeof e.onClick!="function"&&typeof d.onClick=="function"&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l2 in e)if(!d.hasOwnProperty(l2)&&e.hasOwnProperty(l2)&&e[l2]!=null)if(l2==="style"){var h=e[l2];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else l2!=="dangerouslySetInnerHTML"&&l2!=="children"&&l2!=="suppressContentEditableWarning"&&l2!=="suppressHydrationWarning"&&l2!=="autoFocus"&&(ca.hasOwnProperty(l2)?f||(f=[]):(f=f||[]).push(l2,null));for(l2 in d){var k=d[l2];if(h=e?.[l2],d.hasOwnProperty(l2)&&k!==h&&(k!=null||h!=null))if(l2==="style")if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l2,c)),c=k;else l2==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,h=h?h.__html:void 0,k!=null&&h!==k&&(f=f||[]).push(l2,k)):l2==="children"?typeof k!="string"&&typeof k!="number"||(f=f||[]).push(l2,""+k):l2!=="suppressContentEditableWarning"&&l2!=="suppressHydrationWarning"&&(ca.hasOwnProperty(l2)?(k!=null&&l2==="onScroll"&&G("scroll",a),f||h===k||(f=[])):typeof k=="object"&&k!==null&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l2,k))}c&&(f=f||[]).push("style",c);var l2=f;(b.updateQueue=l2)&&(b.flags|=4)}},"Di");Ei=__name(function(a,b,c,d){c!==d&&(b.flags|=4)},"Ei");function Fi(a,b){if(!lh)switch(a.tailMode){case"hidden":b=a.tail;for(var c=null;b!==null;)b.alternate!==null&&(c=b),b=b.sibling;c===null?a.tail=null:c.sibling=null;break;case"collapsed":c=a.tail;for(var d=null;c!==null;)c.alternate!==null&&(d=c),c=c.sibling;d===null?b||a.tail===null?a.tail=null:a.tail.sibling=null:d.sibling=null}}__name(Fi,"Fi");function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:return fh(),H(N),H(M),uh(),d=b.stateNode,d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(a===null||a.child===null)&&(rh(b)?b.flags|=4:d.hydrate||(b.flags|=256)),Ci(b),null;case 5:hh(b);var e=dh(ch.current);if(c=b.type,a!==null&&b.stateNode!=null)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(b.stateNode===null)throw Error(y(166));return null}if(a=dh(ah.current),rh(b)){d=b.stateNode,c=b.type;var f=b.memoizedProps;switch(d[wf]=b,d[xf]=f,c){case"dialog":G("cancel",d),G("close",d);break;case"iframe":case"object":case"embed":G("load",d);break;case"video":case"audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case"source":G("error",d);break;case"img":case"image":case"link":G("error",d),G("load",d);break;case"details":G("toggle",d);break;case"input":Za(d,f),G("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!f.multiple},G("invalid",d);break;case"textarea":hb(d,f),G("invalid",d)}vb(c,f),a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],g==="children"?typeof e=="string"?d.textContent!==e&&(a=["children",e]):typeof e=="number"&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&e!=null&&g==="onScroll"&&G("scroll",d));switch(c){case"input":Va(d),cb(d,f,!0);break;case"textarea":Va(d),jb(d);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(d.onclick=jf)}d=a,b.updateQueue=d,d!==null&&(b.flags|=4)}else{switch(g=e.nodeType===9?e:e.ownerDocument,a===kb.html&&(a=lb(c)),a===kb.html?c==="script"?(a=g.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild)):typeof d.is=="string"?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),c==="select"&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c),a[wf]=b,a[xf]=d,Bi(a,b,!1,!1),b.stateNode=a,g=wb(c,d),c){case"dialog":G("cancel",a),G("close",a),e=d;break;case"iframe":case"object":case"embed":G("load",a),e=d;break;case"video":case"audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case"source":G("error",a),e=d;break;case"img":case"image":case"link":G("error",a),G("load",a),e=d;break;case"details":G("toggle",a),e=d;break;case"input":Za(a,d),e=Ya(a,d),G("invalid",a);break;case"option":e=eb(a,d);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},e=m({},d,{value:void 0}),G("invalid",a);break;case"textarea":hb(a,d),e=gb(a,d),G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];f==="style"?tb(a,k):f==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ob(a,k)):f==="children"?typeof k=="string"?(c!=="textarea"||k!=="")&&pb(a,k):typeof k=="number"&&pb(a,""+k):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(ca.hasOwnProperty(f)?k!=null&&f==="onScroll"&&G("scroll",a):k!=null&&qa(a,f,k,g))}switch(c){case"input":Va(a),cb(a,d,!1);break;case"textarea":Va(a),jb(a);break;case"option":d.value!=null&&a.setAttribute("value",""+Sa(d.value));break;case"select":a.multiple=!!d.multiple,f=d.value,f!=null?fb(a,!!d.multiple,f,!1):d.defaultValue!=null&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:typeof e.onClick=="function"&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}b.ref!==null&&(b.flags|=128)}return null;case 6:if(a&&b.stateNode!=null)Ei(a,b,a.memoizedProps,d);else{if(typeof d!="string"&&b.stateNode===null)throw Error(y(166));c=dh(ch.current),dh(ah.current),rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(c.nodeType===9?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:return H(P),d=b.memoizedState,b.flags&64?(b.lanes=c,b):(d=d!==null,c=!1,a===null?b.memoizedProps.fallback!==void 0&&rh(b):c=a.memoizedState!==null,d&&!c&&b.mode&2&&(a===null&&b.memoizedProps.unstable_avoidThisFallback!==!0||P.current&1?V===0&&(V=3):((V===0||V===3)&&(V=4),U===null||!(Dg&134217727)&&!(Hi&134217727)||Ii(U,W))),(d||c)&&(b.flags|=4),null);case 4:return fh(),Ci(b),a===null&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:if(H(P),d=b.memoizedState,d===null)return null;if(f=(b.flags&64)!==0,g=d.rendering,g===null)if(f)Fi(d,!1);else{if(V!==0||a!==null&&a.flags&64)for(a=b.child;a!==null;){if(g=ih(a),g!==null){for(b.flags|=64,Fi(d,!1),f=g.updateQueue,f!==null&&(b.updateQueue=f,b.flags|=4),d.lastEffect===null&&(b.firstEffect=null),b.lastEffect=d.lastEffect,d=c,c=b.child;c!==null;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,g===null?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;return I(P,P.current&1|2),b.child}a=a.sibling}d.tail!==null&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),a!==null){if(b.flags|=64,f=!0,c=a.updateQueue,c!==null&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,b!==null&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&c!==1073741824&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,c!==null?c.sibling=g:b.child=g,d.last=g)}return d.tail!==null?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),a!==null&&a.memoizedState!==null!=(b.memoizedState!==null)&&d.mode!=="unstable-defer-without-hiding"&&(b.flags|=4),null}throw Error(y(156,b.tag))}__name(Gi,"Gi");function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:if(fh(),H(N),H(M),uh(),b=a.flags,b&64)throw Error(y(285));return a.flags=b&-4097|64,a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}__name(Li,"Li");function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e=`
Error generating stack: `+f.message+`
`+f.stack}return{value:a,source:b,stack:e}}__name(Mi,"Mi");function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c})}}__name(Ni,"Ni");var Oi=typeof WeakMap=="function"?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c),c.tag=3,c.payload={element:null};var d=b.value;return c.callback=function(){Qi||(Qi=!0,Ri=d),Ni(a,b)},c}__name(Pi,"Pi");function Si(a,b,c){c=zg(-1,c),c.tag=3;var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var e=b.value;c.payload=function(){return Ni(a,b),d(e)}}var f=a.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(c.callback=function(){typeof d!="function"&&(Ti===null?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c2=b.stack;this.componentDidCatch(b.value,{componentStack:c2!==null?c2:""})}),c}__name(Si,"Si");var Ui=typeof WeakSet=="function"?WeakSet:Set;function Vi(a){var b=a.ref;if(b!==null)if(typeof b=="function")try{b(null)}catch(c){Wi(a,c)}else b.current=null}__name(Vi,"Vi");function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&a!==null){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode,b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d),a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163))}__name(Xi,"Xi");function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:if(b=c.updateQueue,b=b!==null?b.lastEffect:null,b!==null){a=b=b.next;do{if((a.tag&3)===3){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}if(b=c.updateQueue,b=b!==null?b.lastEffect:null,b!==null){a=b=b.next;do{var e=a;d=e.next,e=e.tag,e&4&&e&1&&(Zi(c,a),$i(c,a)),a=d}while(a!==b)}return;case 1:a=c.stateNode,c.flags&4&&(b===null?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate))),b=c.updateQueue,b!==null&&Eg(c,b,a);return;case 3:if(b=c.updateQueue,b!==null){if(a=null,c.child!==null)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode,b===null&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:c.memoizedState===null&&(c=c.alternate,c!==null&&(c=c.memoizedState,c!==null&&(c=c.dehydrated,c!==null&&Cc(c))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163))}__name(Yi,"Yi");function aj(a,b){for(var c=a;;){if(c.tag===5){var d=c.stateNode;if(b)d=d.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=e!=null&&e.hasOwnProperty("display")?e.display:null,d.style.display=sb("display",e)}}else if(c.tag===6)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((c.tag!==23&&c.tag!==24||c.memoizedState===null||c===a)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break;for(;c.sibling===null;){if(c.return===null||c.return===a)return;c=c.return}c.sibling.return=c.return,c=c.sibling}}__name(aj,"aj");function bj(a,b){if(Mf&&typeof Mf.onCommitFiberUnmount=="function")try{Mf.onCommitFiberUnmount(Lf,b)}catch{}switch(b.tag){case 0:case 11:case 14:case 15:case 22:if(a=b.updateQueue,a!==null&&(a=a.lastEffect,a!==null)){var c=a=a.next;do{var d=c,e=d.destroy;if(d=d.tag,e!==void 0)if(d&4)Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:if(Vi(b),a=b.stateNode,typeof a.componentWillUnmount=="function")try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}__name(bj,"bj");function dj(a){a.alternate=null,a.child=null,a.dependencies=null,a.firstEffect=null,a.lastEffect=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.return=null,a.updateQueue=null}__name(dj,"dj");function ej(a){return a.tag===5||a.tag===3||a.tag===4}__name(ej,"ej");function fj(a){a:{for(var b=a.return;b!==null;){if(ej(b))break a;b=b.return}throw Error(y(160))}var c=b;switch(b=c.stateNode,c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo,d=!0;break;case 4:b=b.containerInfo,d=!0;break;default:throw Error(y(161))}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;c.sibling===null;){if(c.return===null||ej(c.return)){c=null;break a}c=c.return}for(c.sibling.return=c.return,c=c.sibling;c.tag!==5&&c.tag!==6&&c.tag!==18;){if(c.flags&2||c.child===null||c.tag===4)continue b;c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}__name(fj,"fj");function gj(a,b,c){var d=a.tag,e=d===5||d===6;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.nodeType===8?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(c.nodeType===8?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,c!=null||b.onclick!==null||(b.onclick=jf));else if(d!==4&&(a=a.child,a!==null))for(gj(a,b,c),a=a.sibling;a!==null;)gj(a,b,c),a=a.sibling}__name(gj,"gj");function hj(a,b,c){var d=a.tag,e=d===5||d===6;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(d!==4&&(a=a.child,a!==null))for(hj(a,b,c),a=a.sibling;a!==null;)hj(a,b,c),a=a.sibling}__name(hj,"hj");function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(d===null)throw Error(y(160));switch(e=d.stateNode,d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo,f=!0;break a;case 4:e=e.containerInfo,f=!0;break a}d=d.return}d=!0}if(c.tag===5||c.tag===6){a:for(var g=a,h=c,k=h;;)if(bj(g,k),k.child!==null&&k.tag!==4)k.child.return=k,k=k.child;else{if(k===h)break a;for(;k.sibling===null;){if(k.return===null||k.return===h)break a;k=k.return}k.sibling.return=k.return,k=k.sibling}f?(g=e,h=c.stateNode,g.nodeType===8?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(c.tag===4){if(c.child!==null){e=c.stateNode.containerInfo,f=!0,c.child.return=c,c=c.child;continue}}else if(bj(a,c),c.child!==null){c.child.return=c,c=c.child;continue}if(c===b)break;for(;c.sibling===null;){if(c.return===null||c.return===b)return;c=c.return,c.tag===4&&(d=!1)}c.sibling.return=c.return,c=c.sibling}}__name(cj,"cj");function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do(d.tag&3)===3&&(a=d.destroy,d.destroy=void 0,a!==void 0&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:if(c=b.stateNode,c!=null){d=b.memoizedProps;var e=a!==null?a.memoizedProps:d;a=b.type;var f=b.updateQueue;if(b.updateQueue=null,f!==null){for(c[xf]=d,a==="input"&&d.type==="radio"&&d.name!=null&&$a(c,d),wb(a,e),b=wb(a,d),e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];g==="style"?tb(c,h):g==="dangerouslySetInnerHTML"?ob(c,h):g==="children"?pb(c,h):qa(c,g,h,b)}switch(a){case"input":ab(c,d);break;case"textarea":ib(c,d);break;case"select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,f!=null?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(d.defaultValue!=null?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(b.stateNode===null)throw Error(y(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:c=b.stateNode,c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:b.memoizedState!==null&&(jj=O(),aj(b.child,!0)),kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,b.memoizedState!==null);return}throw Error(y(163))}__name(ij,"ij");function kj(a){var b=a.updateQueue;if(b!==null){a.updateQueue=null;var c=a.stateNode;c===null&&(c=a.stateNode=new Ui),b.forEach(function(b2){var d=lj.bind(null,a,b2);c.has(b2)||(c.add(b2),b2.then(d,d))})}}__name(kj,"kj");function mj(a,b){return a!==null&&(a=a.memoizedState,a===null||a.dehydrated!==null)?(b=b.memoizedState,b!==null&&b.dehydrated===null):!1}__name(mj,"mj");var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=1/0;function wj(){Ji=O()+500}__name(wj,"wj");var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return X&48?O():Fj!==-1?Fj:Fj=O()}__name(Hg,"Hg");function Ig(a){if(a=a.mode,!(a&2))return 1;if(!(a&4))return eg()===99?1:2;if(Gj===0&&(Gj=tj),kg.transition!==0){Hj!==0&&(Hj=vj!==null?vj.pendingLanes:0),a=Gj;var b=4186112&~Hj;return b&=-b,b===0&&(a=4186112&~a,b=a&-a,b===0&&(b=8192)),b}return a=eg(),X&4&&a===98?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj)),a}__name(Ig,"Ig");function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));if(a=Kj(a,b),a===null)return null;$c(a,b,c),a===U&&(Hi|=b,V===4&&Ii(a,W));var d=eg();b===1?X&8&&!(X&48)?Lj(a):(Mj(a,c),X===0&&(wj(),ig())):(!(X&4)||d!==98&&d!==99||(Cj===null?Cj=new Set([a]):Cj.add(a)),Mj(a,c)),vj=a}__name(Jg,"Jg");function Kj(a,b){a.lanes|=b;var c=a.alternate;for(c!==null&&(c.lanes|=b),c=a,a=a.return;a!==null;)a.childLanes|=b,c=a.alternate,c!==null&&(c.childLanes|=b),c=a,a=a.return;return c.tag===3?c.stateNode:null}__name(Kj,"Kj");function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l2=f[h];if(l2===-1){if(!(k&d)||k&e){l2=b,Rc(k);var n2=F;f[h]=10<=n2?l2+250:6<=n2?l2+5e3:-1}}else l2<=b&&(a.expiredLanes|=k);g&=~k}if(d=Uc(a,a===U?W:0),b=F,d===0)c!==null&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(c!==null){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}b===15?(c=Lj.bind(null,a),ag===null?(ag=[c],bg=Of(Uf,jg)):ag.push(c),c=Zf):b===14?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a))),a.callbackPriority=b,a.callbackNode=c}}__name(Mj,"Mj");function Nj(a){if(Fj=-1,Hj=Gj=0,X&48)throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(c===0)return null;var d=c,e=X;X|=16;var f=Pj();(U!==a||W!==d)&&(wj(),Qj(a,d));do try{Rj();break}catch(h){Sj(a,h)}while(!0);if(qg(),oj.current=f,X=e,Y!==null?d=0:(U=null,W=0,d=V),tj&Hi)Qj(a,0);else if(d!==0){if(d===2&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),c!==0&&(d=Tj(a,c))),d===1)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;switch(a.finishedWork=a.current.alternate,a.finishedLanes=c,d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:if(Ii(a,c),(c&62914560)===c&&(d=jj+500-O(),10<d)){if(Uc(a,0)!==0)break;if(e=a.suspendedLanes,(e&c)!==c){Hg(),a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:if(Ii(a,c),(c&4186112)===c)break;for(d=a.eventTimes,e=-1;0<c;){var g=31-Vc(c);f=1<<g,g=d[g],g>e&&(e=g),c&=~f}if(c=e,c=O()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*nj(c/1960))-c,10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329))}}return Mj(a,O()),a.callbackNode===b?Nj.bind(null,a):null}__name(Nj,"Nj");function Ii(a,b){for(b&=~uj,b&=~Hi,a.suspendedLanes|=b,a.pingedLanes&=~b,a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1,b&=~d}}__name(Ii,"Ii");function Lj(a){if(X&48)throw Error(y(327));if(Oj(),a===U&&a.expiredLanes&W){var b=W,c=Tj(a,b);tj&Hi&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);if(a.tag!==0&&c===2&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),b!==0&&(c=Tj(a,b))),c===1)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;return a.finishedWork=a.current.alternate,a.finishedLanes=b,Uj(a),Mj(a,O()),null}__name(Lj,"Lj");function Vj(){if(Cj!==null){var a=Cj;Cj=null,a.forEach(function(a2){a2.expiredLanes|=24&a2.pendingLanes,Mj(a2,O())})}ig()}__name(Vj,"Vj");function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,X===0&&(wj(),ig())}}__name(Wj,"Wj");function Xj(a,b){var c=X;X&=-2,X|=8;try{return a(b)}finally{X=c,X===0&&(wj(),ig())}}__name(Xj,"Xj");function ni(a,b){I(rj,qj),qj|=b,tj|=b}__name(ni,"ni");function Ki(){qj=rj.current,H(rj)}__name(Ki,"Ki");function Qj(a,b){a.finishedWork=null,a.finishedLanes=0;var c=a.timeoutHandle;if(c!==-1&&(a.timeoutHandle=-1,pf(c)),Y!==null)for(c=Y.return;c!==null;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes,d!=null&&Gf();break;case 3:fh(),H(N),H(M),uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a,Y=Tg(a.current,null),W=qj=tj=b,V=0,sj=null,uj=Hi=Dg=0}__name(Qj,"Qj");function Sj(a,b){do{var c=Y;try{if(qg(),vh.current=Gh,yh){for(var d=R.memoizedState;d!==null;){var e=d.queue;e!==null&&(e.pending=null),d=d.next}yh=!1}if(xh=0,T=S=R=null,zh=!1,pj.current=null,c===null||c.return===null){V=1,sj=b,Y=null;break}a:{var f=a,g=c.return,h=c,k=b;if(b=W,h.flags|=2048,h.firstEffect=h.lastEffect=null,k!==null&&typeof k=="object"&&typeof k.then=="function"){var l2=k;if(!(h.mode&2)){var n2=h.alternate;n2?(h.updateQueue=n2.updateQueue,h.memoizedState=n2.memoizedState,h.lanes=n2.lanes):(h.updateQueue=null,h.memoizedState=null)}var A2=(P.current&1)!==0,p2=g;do{var C2;if(C2=p2.tag===13){var x2=p2.memoizedState;if(x2!==null)C2=x2.dehydrated!==null;else{var w=p2.memoizedProps;C2=w.fallback===void 0?!1:w.unstable_avoidThisFallback!==!0?!0:!A2}}if(C2){var z2=p2.updateQueue;if(z2===null){var u2=new Set;u2.add(l2),p2.updateQueue=u2}else z2.add(l2);if(!(p2.mode&2)){if(p2.flags|=64,h.flags|=16384,h.flags&=-2981,h.tag===1)if(h.alternate===null)h.tag=17;else{var t2=zg(-1,1);t2.tag=2,Ag(h,t2)}h.lanes|=1;break a}k=void 0,h=b;var q2=f.pingCache;if(q2===null?(q2=f.pingCache=new Oi,k=new Set,q2.set(l2,k)):(k=q2.get(l2),k===void 0&&(k=new Set,q2.set(l2,k))),!k.has(h)){k.add(h);var v2=Yj.bind(null,f,l2,h);l2.then(v2,v2)}p2.flags|=4096,p2.lanes=b;break a}p2=p2.return}while(p2!==null);k=Error((Ra(h.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}V!==5&&(V=2),k=Mi(k,h),p2=g;do{switch(p2.tag){case 3:f=k,p2.flags|=4096,b&=-b,p2.lanes|=b;var J2=Pi(p2,f,b);Bg(p2,J2);break a;case 1:f=k;var K2=p2.type,Q2=p2.stateNode;if(!(p2.flags&64)&&(typeof K2.getDerivedStateFromError=="function"||Q2!==null&&typeof Q2.componentDidCatch=="function"&&(Ti===null||!Ti.has(Q2)))){p2.flags|=4096,b&=-b,p2.lanes|=b;var L2=Si(p2,f,b);Bg(p2,L2);break a}}p2=p2.return}while(p2!==null)}Zj(c)}catch(va){b=va,Y===c&&c!==null&&(Y=c=c.return);continue}break}while(!0)}__name(Sj,"Sj");function Pj(){var a=oj.current;return oj.current=Gh,a===null?Gh:a}__name(Pj,"Pj");function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(!0);if(qg(),X=c,oj.current=d,Y!==null)throw Error(y(261));return U=null,W=0,V}__name(Tj,"Tj");function ak(){for(;Y!==null;)bk(Y)}__name(ak,"ak");function Rj(){for(;Y!==null&&!Qf();)bk(Y)}__name(Rj,"Rj");function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps,b===null?Zj(a):Y=b,pj.current=null}__name(bk,"bk");function Zj(a){var b=a;do{var c=b.alternate;if(a=b.return,b.flags&2048){if(c=Li(b),c!==null){c.flags&=2047,Y=c;return}a!==null&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}else{if(c=Gi(c,b,qj),c!==null){Y=c;return}if(c=b,c.tag!==24&&c.tag!==23||c.memoizedState===null||qj&1073741824||!(c.mode&4)){for(var d=0,e=c.child;e!==null;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}a!==null&&!(a.flags&2048)&&(a.firstEffect===null&&(a.firstEffect=b.firstEffect),b.lastEffect!==null&&(a.lastEffect!==null&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(a.lastEffect!==null?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}if(b=b.sibling,b!==null){Y=b;return}Y=b=a}while(b!==null);V===0&&(V=5)}__name(Zj,"Zj");function Uj(a){var b=eg();return gg(99,dk.bind(null,a,b)),null}__name(Uj,"Uj");function dk(a,b){do Oj();while(yj!==null);if(X&48)throw Error(y(327));var c=a.finishedWork;if(c===null)return null;if(a.finishedWork=null,a.finishedLanes=0,c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=e,a.mutableReadLanes&=e,a.entangledLanes&=e,e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l2=1<<k;e[k]=0,g[k]=-1,h[k]=-1,f&=~l2}if(Cj!==null&&!(d&24)&&Cj.has(a)&&Cj.delete(a),a===U&&(Y=U=null,W=0),1<c.flags?c.lastEffect!==null?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect,d!==null){if(e=X,X|=32,pj.current=null,kf=fd,g=Ne(),Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l2=h.getSelection&&h.getSelection())&&l2.rangeCount!==0){h=l2.anchorNode,f=l2.anchorOffset,k=l2.focusNode,l2=l2.focusOffset;try{h.nodeType,k.nodeType}catch{h=null;break a}var n2=0,A2=-1,p2=-1,C2=0,x2=0,w=g,z2=null;b:for(;;){for(var u2;w!==h||f!==0&&w.nodeType!==3||(A2=n2+f),w!==k||l2!==0&&w.nodeType!==3||(p2=n2+l2),w.nodeType===3&&(n2+=w.nodeValue.length),(u2=w.firstChild)!==null;)z2=w,w=u2;for(;;){if(w===g)break b;if(z2===h&&++C2===f&&(A2=n2),z2===k&&++x2===l2&&(p2=n2),(u2=w.nextSibling)!==null)break;w=z2,z2=w.parentNode}w=u2}h=A2===-1||p2===-1?null:{start:A2,end:p2}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h},fd=!1,Ij=null,Jj=!1,Z=d;do try{ek()}catch(va){if(Z===null)throw Error(y(330));Wi(Z,va),Z=Z.nextEffect}while(Z!==null);Ij=null,Z=d;do try{for(g=a;Z!==null;){var t2=Z.flags;if(t2&16&&pb(Z.stateNode,""),t2&128){var q2=Z.alternate;if(q2!==null){var v2=q2.ref;v2!==null&&(typeof v2=="function"?v2(null):v2.current=null)}}switch(t2&1038){case 2:fj(Z),Z.flags&=-3;break;case 6:fj(Z),Z.flags&=-3,ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025,ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z,cj(g,h);var J2=h.alternate;dj(h),J2!==null&&dj(J2)}Z=Z.nextEffect}}catch(va){if(Z===null)throw Error(y(330));Wi(Z,va),Z=Z.nextEffect}while(Z!==null);if(v2=lf,q2=Ne(),t2=v2.focusedElem,g=v2.selectionRange,q2!==t2&&t2&&t2.ownerDocument&&Me(t2.ownerDocument.documentElement,t2)){for(g!==null&&Oe(t2)&&(q2=g.start,v2=g.end,v2===void 0&&(v2=q2),"selectionStart"in t2?(t2.selectionStart=q2,t2.selectionEnd=Math.min(v2,t2.value.length)):(v2=(q2=t2.ownerDocument||document)&&q2.defaultView||window,v2.getSelection&&(v2=v2.getSelection(),h=t2.textContent.length,J2=Math.min(g.start,h),g=g.end===void 0?J2:Math.min(g.end,h),!v2.extend&&J2>g&&(h=g,g=J2,J2=h),h=Le(t2,J2),f=Le(t2,g),h&&f&&(v2.rangeCount!==1||v2.anchorNode!==h.node||v2.anchorOffset!==h.offset||v2.focusNode!==f.node||v2.focusOffset!==f.offset)&&(q2=q2.createRange(),q2.setStart(h.node,h.offset),v2.removeAllRanges(),J2>g?(v2.addRange(q2),v2.extend(f.node,f.offset)):(q2.setEnd(f.node,f.offset),v2.addRange(q2)))))),q2=[],v2=t2;v2=v2.parentNode;)v2.nodeType===1&&q2.push({element:v2,left:v2.scrollLeft,top:v2.scrollTop});for(typeof t2.focus=="function"&&t2.focus(),t2=0;t2<q2.length;t2++)v2=q2[t2],v2.element.scrollLeft=v2.left,v2.element.scrollTop=v2.top}fd=!!kf,lf=kf=null,a.current=c,Z=d;do try{for(t2=a;Z!==null;){var K2=Z.flags;if(K2&36&&Yi(t2,Z.alternate,Z),K2&128){q2=void 0;var Q2=Z.ref;if(Q2!==null){var L2=Z.stateNode;switch(Z.tag){case 5:q2=L2;break;default:q2=L2}typeof Q2=="function"?Q2(q2):Q2.current=q2}}Z=Z.nextEffect}}catch(va){if(Z===null)throw Error(y(330));Wi(Z,va),Z=Z.nextEffect}while(Z!==null);Z=null,$f(),X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;Z!==null;)b=Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K2=Z,K2.sibling=null,K2.stateNode=null),Z=b;if(d=a.pendingLanes,d===0&&(Ti=null),d===1?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0,c=c.stateNode,Mf&&typeof Mf.onCommitFiberRoot=="function")try{Mf.onCommitFiberRoot(Lf,c,void 0,(c.current.flags&64)===64)}catch{}if(Mj(a,O()),Qi)throw Qi=!1,a=Ri,Ri=null,a;return X&8||ig(),null}__name(dk,"dk");function ek(){for(;Z!==null;){var a=Z.alternate;Jj||Ij===null||(Z.flags&8?dc(Z,Ij)&&(Jj=!0):Z.tag===13&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;b&256&&Xi(a,Z),!(b&512)||xj||(xj=!0,hg(97,function(){return Oj(),null})),Z=Z.nextEffect}}__name(ek,"ek");function Oj(){if(zj!==90){var a=97<zj?97:zj;return zj=90,gg(a,fk)}return!1}__name(Oj,"Oj");function $i(a,b){Aj.push(b,a),xj||(xj=!0,hg(97,function(){return Oj(),null}))}__name($i,"$i");function Zi(a,b){Bj.push(b,a),xj||(xj=!0,hg(97,function(){return Oj(),null}))}__name(Zi,"Zi");function fk(){if(yj===null)return!1;var a=yj;if(yj=null,X&48)throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;if(e.destroy=void 0,typeof g=="function")try{g()}catch(k){if(f===null)throw Error(y(330));Wi(f,k)}}for(c=Aj,Aj=[],d=0;d<c.length;d+=2){e=c[d],f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(f===null)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;h!==null;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=null,h.stateNode=null),h=a;return X=b,ig(),!0}__name(fk,"fk");function gk(a,b,c){b=Mi(c,b),b=Pi(a,b,1),Ag(a,b),b=Hg(),a=Kj(a,1),a!==null&&($c(a,1,b),Mj(a,b))}__name(gk,"gk");function Wi(a,b){if(a.tag===3)gk(a,a,b);else for(var c=a.return;c!==null;){if(c.tag===3){gk(c,a,b);break}else if(c.tag===1){var d=c.stateNode;if(typeof c.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ti===null||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);if(Ag(c,e),e=Hg(),c=Kj(c,1),c!==null)$c(c,1,e),Mj(c,e);else if(typeof d.componentDidCatch=="function"&&(Ti===null||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch{}break}}c=c.return}}__name(Wi,"Wi");function Yj(a,b,c){var d=a.pingCache;d!==null&&d.delete(b),b=Hg(),a.pingedLanes|=a.suspendedLanes&c,U===a&&(W&c)===c&&(V===4||V===3&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c),Mj(a,b)}__name(Yj,"Yj");function lj(a,b){var c=a.stateNode;c!==null&&c.delete(b),b=0,b===0&&(b=a.mode,b&2?b&4?(Gj===0&&(Gj=tj),b=Yc(62914560&~Gj),b===0&&(b=4194304)):b=eg()===99?1:2:b=1),c=Hg(),a=Kj(a,b),a!==null&&($c(a,b,c),Mj(a,c))}__name(lj,"lj");var ck;ck=__name(function(a,b,c){var d=b.lanes;if(a!==null)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(c&d)ug=!!(a.flags&16384);else{switch(ug=!1,b.tag){case 3:ri(b),sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue),e._currentValue=d;break;case 13:if(b.memoizedState!==null)return c&b.child.childLanes?ti(a,b,c):(I(P,P.current&1),b=hi(a,b,c),b!==null?b.sibling:null);I(P,P.current&1);break;case 19:if(d=(c&b.childLanes)!==0,a.flags&64){if(d)return Ai(a,b,c);b.flags|=64}if(e=b.memoizedState,e!==null&&(e.rendering=null,e.tail=null,e.lastEffect=null),I(P,P.current),d)break;return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;switch(b.lanes=0,b.tag){case 2:if(d=b.type,a!==null&&(a.alternate=null,b.alternate=null,b.flags|=2),a=b.pendingProps,e=Ef(b,M.current),tg(b,c),e=Ch(null,b,d,a,e,c),b.flags|=1,typeof e=="object"&&e!==null&&typeof e.render=="function"&&e.$$typeof===void 0){if(b.tag=1,b.memoizedState=null,b.updateQueue=null,Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,xg(b);var g=d.getDerivedStateFromProps;typeof g=="function"&&Gg(b,d,g,a),e.updater=Kg,b.stateNode=e,e._reactInternals=b,Og(b,d,a,c),b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{switch(a!==null&&(a.alternate=null,b.alternate=null,b.flags|=2),a=b.pendingProps,f=e._init,e=f(e._payload),b.type=e,f=b.tag=hk(e),a=lg(e,a),f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""))}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:if(ri(b),d=b.updateQueue,a===null||d===null)throw Error(y(282));if(d=b.pendingProps,e=b.memoizedState,e=e!==null?e.element:null,yg(a,b),Cg(b,d,null,c),d=b.memoizedState.element,d===e)sh(),b=hi(a,b,c);else{if(e=b.stateNode,(f=e.hydrate)&&(kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0),f){if(a=e.mutableSourceEagerHydrationData,a!=null)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);for(c=Zg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),a===null&&ph(b),d=b.type,e=b.pendingProps,f=a!==null?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:f!==null&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return a===null&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,a===null?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context,e=b.pendingProps,g=b.memoizedProps,f=e.value;var h=b.type._context;if(I(mg,h._currentValue),h._currentValue=f,g!==null)if(h=g.value,f=He(h,f)?0:(typeof d._calculateChangedBits=="function"?d._calculateChangedBits(h,f):1073741823)|0,f===0){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,h!==null&&(h.return=b);h!==null;){var k=h.dependencies;if(k!==null){g=h.child;for(var l2=k.firstContext;l2!==null;){if(l2.context===d&&l2.observedBits&f){h.tag===1&&(l2=zg(-1,c&-c),l2.tag=2,Ag(h,l2)),h.lanes|=c,l2=h.alternate,l2!==null&&(l2.lanes|=c),sg(h.return,c),k.lanes|=c;break}l2=l2.next}}else g=h.tag===10&&h.type===b.type?null:h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===b){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}fi(a,b,e.children,c),b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),a!==null&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag))},"ck");function ik(a,b,c,d){this.tag=a,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=b,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}__name(ik,"ik");function nh(a,b,c,d){return new ik(a,b,c,d)}__name(nh,"nh");function ji(a){return a=a.prototype,!(!a||!a.isReactComponent)}__name(ji,"ji");function hk(a){if(typeof a=="function")return ji(a)?1:0;if(a!=null){if(a=a.$$typeof,a===Aa)return 11;if(a===Da)return 14}return 2}__name(hk,"hk");function Tg(a,b){var c=a.alternate;return c===null?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null),c.childLanes=a.childLanes,c.lanes=a.lanes,c.child=a.child,c.memoizedProps=a.memoizedProps,c.memoizedState=a.memoizedState,c.updateQueue=a.updateQueue,b=a.dependencies,c.dependencies=b===null?null:{lanes:b.lanes,firstContext:b.firstContext},c.sibling=a.sibling,c.index=a.index,c.ref=a.ref,c}__name(Tg,"Tg");function Vg(a,b,c,d,e,f){var g=2;if(d=a,typeof a=="function")ji(a)&&(g=1);else if(typeof a=="string")g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8,e|=16;break;case wa:g=8,e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16,d=null;break a;case Fa:g=22;break a}throw Error(y(130,a==null?a:typeof a,""))}return b=nh(g,c,b,e),b.elementType=a,b.type=d,b.lanes=f,b}__name(Vg,"Vg");function Xg(a,b,c,d){return a=nh(7,a,d,b),a.lanes=c,a}__name(Xg,"Xg");function vi(a,b,c,d){return a=nh(23,a,d,b),a.elementType=Ia,a.lanes=c,a}__name(vi,"vi");function Ug(a,b,c){return a=nh(6,a,null,b),a.lanes=c,a}__name(Ug,"Ug");function Wg(a,b,c){return b=nh(4,a.children!==null?a.children:[],a.key,b),b.lanes=c,b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},b}__name(Wg,"Wg");function jk(a,b,c){this.tag=b,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=c,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Zc(0),this.expirationTimes=Zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zc(0),this.mutableSourceEagerHydrationData=null}__name(jk,"jk");function kk(a,b,c){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ta,key:d==null?null:""+d,children:a,containerInfo:b,implementation:c}}__name(kk,"kk");function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||c.tag!==1)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(h!==null);throw Error(y(171))}if(c.tag===1){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;return b.context===null?b.context=c:b.pendingContext=c,b=zg(f,g),b.payload={element:a},d=d===void 0?null:d,d!==null&&(b.callback=d),Ag(e,b),Jg(e,g,f),g}__name(lk,"lk");function mk(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}__name(mk,"mk");function nk(a,b){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var c=a.retryLane;a.retryLane=c!==0&&c<b?c:b}}__name(nk,"nk");function ok(a,b){nk(a,b),(a=a.alternate)&&nk(a,b)}__name(ok,"ok");function pk(){return null}__name(pk,"pk");function qk(a,b,c){var d=c!=null&&c.hydrationOptions!=null&&c.hydrationOptions.mutableSources||null;if(c=new jk(a,b,c!=null&&c.hydrate===!0),b=nh(3,null,null,b===2?7:b===1?3:0),c.current=b,b.stateNode=c,xg(b),a[ff]=c.current,cf(a.nodeType===8?a.parentNode:a),d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source),c.mutableSourceEagerHydrationData==null?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}__name(qk,"qk");qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11&&(a.nodeType!==8||a.nodeValue!==" react-mount-point-unstable "))}__name(rk,"rk");function sk(a,b){if(b||(b=a?a.nodeType===9?a.documentElement:a.firstChild:null,b=!(!b||b.nodeType!==1||!b.hasAttribute("data-reactroot"))),!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}__name(sk,"sk");function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if(typeof e=="function"){var h=e;e=__name(function(){var a2=mk(g);h.call(a2)},"e")}lk(b,g,a,e)}else{if(f=c._reactRootContainer=sk(c,d),g=f._internalRoot,typeof e=="function"){var k=e;e=__name(function(){var a2=mk(g);k.call(a2)},"e")}Xj(function(){lk(b,g,a,e)})}return mk(g)}__name(tk,"tk");ec=__name(function(a){if(a.tag===13){var b=Hg();Jg(a,4,b),ok(a,4)}},"ec");fc=__name(function(a){if(a.tag===13){var b=Hg();Jg(a,67108864,b),ok(a,67108864)}},"fc");gc=__name(function(a){if(a.tag===13){var b=Hg(),c=Ig(a);Jg(a,c,b),ok(a,c)}},"gc");hc=__name(function(a,b){return b()},"hc");yb=__name(function(a,b,c){switch(b){case"input":if(ab(a,c),b=c.name,c.type==="radio"&&b!=null){for(c=a;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]'),b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d),ab(d,e)}}}break;case"textarea":ib(a,c);break;case"select":b=c.value,b!=null&&fb(a,!!c.multiple,b,!1)}},"yb");Gb=Wj;Hb=__name(function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,X===0&&(wj(),ig())}},"Hb");Ib=__name(function(){!(X&49)&&(Vj(),Oj())},"Ib");Jb=__name(function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,X===0&&(wj(),ig())}},"Jb");function uk(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}__name(uk,"uk");var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:__name(function(a){return a=cc(a),a===null?null:a.stateNode},"findHostInstanceByFiber"),findFiberByHostInstance:wk.findFiberByHostInstance||pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch{}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;reactDom_production_min.createPortal=uk;reactDom_production_min.findDOMNode=function(a){if(a==null)return null;if(a.nodeType===1)return a;var b=a._reactInternals;if(b===void 0)throw typeof a.render=="function"?Error(y(188)):Error(y(268,Object.keys(a)));return a=cc(b),a=a===null?null:a.stateNode,a};reactDom_production_min.flushSync=function(a,b){var c=X;if(c&48)return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};reactDom_production_min.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};reactDom_production_min.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null,a[ff]=null})}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Wj;reactDom_production_min.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(a==null||a._reactInternals===void 0)throw Error(y(38));return tk(a,b,c,!1,d)};reactDom_production_min.version="17.0.2";function checkDCE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(err){console.error(err)}}__name(checkDCE,"checkDCE");checkDCE(),reactDom.exports=reactDom_production_min;var reactDomExports=reactDom.exports;async function runTests(tests){const results=[];for(const test of tests){const error=await errorFrom(test.fn),instrumentLog=debugLogs.map(args=>({type:"debug",args}));debugLogs.length=0,results.push({test,error,instrumentLog})}return{results}}__name(runTests,"runTests");function errorFrom(f){let caught;try{const result=f();if(result instanceof Promise)return new Promise(resolve=>{result.then(()=>resolve()).catch(resolve)})}catch(e){caught=e}return Promise.resolve(caught)}__name(errorFrom,"errorFrom");const debugLogs=[],originalFunctionKey=Symbol(),curriedFunctionKey=Symbol(),partialArgsKey=Symbol(),nameKey=Symbol();function curry(f,name){function curried(...args){if(args.length>=f.length)return f(...args);{const f2=__name((...moreArgs)=>curried(...args,...moreArgs),"f2");return f2[originalFunctionKey]=f,f2[curriedFunctionKey]=curried,f2[partialArgsKey]=args,f2[nameKey]=curried[nameKey],f2}}return __name(curried,"curried"),curried[originalFunctionKey]=f,curried[curriedFunctionKey]=curried,curried[partialArgsKey]=[],curried[nameKey]=name||functionName(f),curried}__name(curry,"curry");function originalFunction(f){return f[originalFunctionKey]}__name(originalFunction,"originalFunction");function curriedFunction(f){return f[curriedFunctionKey]}__name(curriedFunction,"curriedFunction");function partialArgs(f){return f[partialArgsKey]||[]}__name(partialArgs,"partialArgs");function functionName(f){return f[nameKey]||f.name}__name(functionName,"functionName");function lastOf(a){return a[a.length-1]}__name(lastOf,"lastOf");function firstOf(a){return a[0]}__name(firstOf,"firstOf");const which=curry(function(predicate,x2){return predicate(x2)},"which"),equals=curry(function(a,b){if(isCustomMatcher(a))return a(b);if(Array.isArray(a)&&Array.isArray(b))return a.length===b.length&&a.every((_,i)=>equals(a[i],b[i]));if(a instanceof Function&&b instanceof Function)return originalFunction(a)&&originalFunction(a)===originalFunction(b)?equals(partialArgs(a),partialArgs(b)):a===b;if(a instanceof Date&&b instanceof Date)return a.toISOString()===b.toISOString();if(a instanceof Set&&b instanceof Set)return a.size===b.size&&[...a.values()].every(v2=>b.has(v2));if(a instanceof Error&&b instanceof Error)return a.message===b.message&&a.__proto__.constructor===b.__proto__.constructor;if(isObject(a)&&isObject(b)){const aKeys=Object.keys(a),bKeys=Object.keys(b);return aKeys.length===bKeys.length&&aKeys.every(k=>equals(a[k],b[k]))&&a.__proto__?.constructor===b.__proto__?.constructor}return a===b},"equals");curry(function(a,b){return a===b},"is");const not=curry(function(predicate,subject,...args){return!predicate(subject,...args)},"not"),isBlank=curry(function(s){return/^\s*$/.test(s)},"isBlank");function isObject(x2){return!!x2&&typeof x2=="object"}__name(isObject,"isObject");function isCustomMatcher(f){return f instanceof Function&&curriedFunction(f)===which&&partialArgs(f).length===1}__name(isCustomMatcher,"isCustomMatcher");function prettyFunctionName(f){return functionName(f)||"<function>"}__name(prettyFunctionName,"prettyFunctionName");function pretty(x2){const stack=[];return _pretty(x2);function _pretty(x3){if(x3===null)return"null";if(typeof x3=="function")return preventInfiniteLoop(x3,prettyFunction);if(typeof x3=="string")return quote(x3);if(typeof x3=="bigint")return`${x3}n`;if(Array.isArray(x3))return preventInfiniteLoop(x3,prettyArray);if(x3 instanceof Date)return`Date(${x3.toISOString().replace("T"," ").replace("Z"," UTC")})`;if(x3 instanceof RegExp)return String(x3);if(x3 instanceof Error)return`${prettyConstructor(x3)}(${quote(x3.message)})`;if(x3 instanceof Set)return preventInfiniteLoop(x3,prettySet);if(typeof x3=="object"){const constructor=x3?.__proto__?.constructor;return constructor===Object||!constructor?preventInfiniteLoop(x3,prettyObject):`${prettyConstructor(x3)} ${preventInfiniteLoop(x3,prettyObject)}`}return String(x3)}function preventInfiniteLoop(x3,cb2){if(stack.indexOf(x3)>-1)return"<circular reference>";stack.push(x3);const result=cb2(x3);return stack.pop(),result}function prettyFunction(f){const args=partialArgs(f).map(_pretty),name=prettyFunctionName(f);return args.length?formatStructure(name+"(",args,",",")"):name}function prettyArray(a){return formatStructure("[",a.map(_pretty),",","]")}function prettyObject(x3){const innards=Object.entries(x3).map(([k,v2])=>`${prettyKey(k)}: ${_pretty(v2)}`);return formatStructure("{",innards,",","}")}function prettySet(x3){const innards=[...x3.values()].map(_pretty);return formatStructure("Set {",innards,",","}")}}__name(pretty,"pretty");function prettyKey(k){return/^[a-zA-Z0-9_$]+$/.test(k)?k:quote(k)}__name(prettyKey,"prettyKey");function prettyConstructor(obj){return prettyFunctionName(obj.__proto__.constructor)}__name(prettyConstructor,"prettyConstructor");function quote(s){return'"'+String(s).replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/"/g,'\\"').replace(/[\x00-\x1f\x7f]/g,hexEscape)+'"'}__name(quote,"quote");function hexEscape(c){const hex=c.charCodeAt(0).toString(16);return"\\x"+(hex.length<2?"0"+hex:hex)}__name(hexEscape,"hexEscape");function indent(level,s){return s.split(`
`).map(l2=>l2&&prepend(repeat(level," "))(l2)).join(`
`)}__name(indent,"indent");function repeat(n2,s){return Array(n2+1).join(s)}__name(repeat,"repeat");const prepend=__name(prefix=>s=>prefix+s,"prepend"),removePrefix=curry(__name(function(prefix,s){return s.slice(0,prefix.length)===prefix?s.slice(prefix.length):s},"removePrefix"));function lines(s){return String(s).split(/\r?\n/)}__name(lines,"lines");function trimMargin(s){const lns=lines(s);isBlank(firstOf(lns))&&lns.shift(),isBlank(lastOf(lns))&&lns.pop();const initialIndent=/^[ \t]*/.exec(firstOf(lns))[0];return lns.map(removePrefix(initialIndent)).join(`
`)}__name(trimMargin,"trimMargin");function formatStructure(prefix,innards,delim,suffix){return innards.length<2?prefix+innards.join("")+suffix:prefix+`
`+indent(2,innards.join(delim+`
`))+`
`+suffix}__name(formatStructure,"formatStructure");function createSuite(){const testCases=[];return{test:test2,getAllTests:getAllTests2};function test2(subject,definitions){testCases.push(...Object.entries(definitions).map(([behavior,fn])=>TestCase(subject,behavior,fn)))}function getAllTests2(){return testCases}}__name(createSuite,"createSuite");function TestCase(subject,scenario,fn){return{subject,scenario,fn}}__name(TestCase,"TestCase");class ExpectationFailure extends Error{static{__name(this,"ExpectationFailure")}constructor(expectArgs){super("Expectation failed"),this.expectArgs=expectArgs}}const blankLine=`

`;function formatTestResultsAsText({results}){let anyErrors=!1,anyInstrumentation=!1,resultsNeedingAttention=[];for(const r2 of results){let needsAttention=!1;r2.error&&(needsAttention=anyErrors=!0),r2.instrumentLog.length&&(needsAttention=anyInstrumentation=!0),needsAttention&&resultsNeedingAttention.push(r2)}return anyErrors?suiteFailed(resultsNeedingAttention):anyInstrumentation?suitePassedWithInstrumentation(results.length,resultsNeedingAttention):suitePassed(results.length)}__name(formatTestResultsAsText,"formatTestResultsAsText");function suiteFailed(failures){return failures.map(formatFailure).join(blankLine)+blankLine+"Tests failed."}__name(suiteFailed,"suiteFailed");function suitePassed(numPassed){switch(numPassed){case 0:return"No tests to run.";case 1:return"One test ran, and found no issues.";default:return`${numPassed} tests ran, and found no issues.`}}__name(suitePassed,"suitePassed");function suitePassedWithInstrumentation(numPassed,resultsWithLogs){return resultsWithLogs.map(formatFailure).join(blankLine)+blankLine+countPasses(numPassed)+`, but debugging instrumentation is present.
Remove it before shipping.`}__name(suitePassedWithInstrumentation,"suitePassedWithInstrumentation");function countPasses(n2){switch(n2){case 1:return"The test passed";case 2:return"Both tests passed";default:return`All ${n2} tests passed`}}__name(countPasses,"countPasses");function formatFailure({test,error,instrumentLog}){const sections=[test.subject+" "+test.scenario];return instrumentLog.length&&sections.push(indent(2,formatDebugLog(instrumentLog))),error&&sections.push(indent(2,formatError(error))),sections.join(`
`)}__name(formatFailure,"formatFailure");function formatError(error){return error instanceof ExpectationFailure?formatExpectationFailure(error):formatException(error)}__name(formatError,"formatError");function formatDebugLog(log){return log.map(({args})=>formatFunctionCall("debug",args)).join("")}__name(formatDebugLog,"formatDebugLog");function formatExpectationFailure(error){return formatFunctionCall("expect",error.expectArgs)}__name(formatExpectationFailure,"formatExpectationFailure");function formatException(error){return pretty(error)+" thrown"+indent(2,simplifyStacktrace(error.stack))}__name(formatException,"formatException");function formatFunctionCall(name,args){return formatStructure(name+"(",args.map(pretty),",",")")}__name(formatFunctionCall,"formatFunctionCall");function simplifyStacktrace(stack){if(!stack)return"";const lines2=trimMargin(stack).split(`
`);return`
`+lines2.slice(0,indexOfFirstIrrelevantStackFrame(lines2)).map(line=>line.replace(/(file:\/\/|http:\/\/[^/]*)/,"").replace(/^([^@]*)@(.*)$/,"at $1 ($2)")).join(`
`)}__name(simplifyStacktrace,"simplifyStacktrace");function indexOfFirstIrrelevantStackFrame(lines2){const i=lines2.findIndex(l2=>l2.includes("errorFrom"));return i===-1?lines2.length:i}__name(indexOfFirstIrrelevantStackFrame,"indexOfFirstIrrelevantStackFrame");const suite=createSuite(),{getAllTests}=suite;function debugTimestamp(){return(+new Date%1e6/1e3).toFixed(3)}__name(debugTimestamp,"debugTimestamp");function hoursMinutesSeconds(seconds,decimals=0){return isNaN(seconds)||seconds===1/0||seconds===-1/0?"--:--":seconds<0?"-"+formatPositiveHoursMinutesSeconds(-seconds,decimals):formatPositiveHoursMinutesSeconds(seconds,decimals)}__name(hoursMinutesSeconds,"hoursMinutesSeconds");function formatPositiveHoursMinutesSeconds(seconds,decimals){function pad(n2,format=toString){const formatted=format(n2);return(formatted.split(/[^\d]/)[0].length===1?"0":"")+formatted}__name(pad,"pad");const quantaPerSecond=Math.pow(10,decimals),quantaPerMinute=quantaPerSecond*60,quantaPerHour=quantaPerMinute*60,quanta=Math.round(seconds*quantaPerSecond),h=Math.floor(quanta/quantaPerHour),m2=Math.floor(quanta%quantaPerHour/quantaPerMinute),s=quanta%quantaPerMinute/quantaPerSecond;return h>0?`${h}:${pad(m2)}:${pad(s,toFixed(decimals))}`:`${m2}:${pad(s,toFixed(decimals))}`}__name(formatPositiveHoursMinutesSeconds,"formatPositiveHoursMinutesSeconds");function durationAsWords(seconds){const[unit,magnitude]=(()=>{switch(!0){case seconds>86400:return["days",seconds/86400];case seconds>3600:return["hours",seconds/3600];case seconds>60:return["minutes",seconds/60];default:return["seconds",seconds]}})();return`${magnitude.toFixed(1)} ${unit}`}__name(durationAsWords,"durationAsWords");const toString=__name(x2=>String(x2),"toString"),toFixed=__name(decimals=>n2=>n2.toFixed(decimals),"toFixed");function videoIdFromUrl(url){return/v=(.{11})/.exec(url)?.[1]}__name(videoIdFromUrl,"videoIdFromUrl");function nullPlayer(){return{getPlayerState(){return State.UNSTARTED},getCurrentTime(){return 0},getVideoUrl(){return""},cueVideoById(){},playVideo(){},seekTo(){},getDuration(){return 0},addEventListener(){},removeEventListener(){},setVolume(){}}}__name(nullPlayer,"nullPlayer");function debuggingDecorator(wrapped){return{getPlayerState(){return wrapped.getPlayerState()},getCurrentTime(){return wrapped.getCurrentTime()},getVideoUrl(){return wrapped.getVideoUrl()},cueVideoById(...args){return console.debug(debugTimestamp(),"player.cueVideoById",...args),wrapped.cueVideoById(...args)},playVideo(...args){return console.debug(debugTimestamp(),"player.playVideo",...args),wrapped.playVideo(...args)},seekTo(...args){return console.debug(debugTimestamp(),"player.seekTo",...args,videoIdFromUrl(wrapped.getVideoUrl())),wrapped.seekTo(...args)},getDuration(){return wrapped.getDuration()},addEventListener(...args){return console.debug(debugTimestamp(),"player.addEventListener"),wrapped.addEventListener(...args)},removeEventListener(...args){return console.debug(debugTimestamp(),"player.removeEventListener"),wrapped.removeEventListener(...args)},setVolume(...args){wrapped.setVolume(...args)}}}__name(debuggingDecorator,"debuggingDecorator");const State={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};async function createYouTubePlayer(elementId){const yt=await loadYouTubePlayerAPI();return new Promise(resolve=>{const player=new yt.Player(elementId,{height:450,width:800,videoId:null,playerVars:{controls:0,disablekb:1},events:{onReady(){resolve(player)}}})})}__name(createYouTubePlayer,"createYouTubePlayer");function loadYouTubePlayerAPI(){return playerApiLoaded?Promise.resolve(window.YT):new Promise(resolve=>{if(document.querySelector("script[src='https://www.youtube.com/iframe_api']")===null){const ytScriptTag=document.createElement("script");ytScriptTag.src="https://www.youtube.com/iframe_api";let firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode?.insertBefore(ytScriptTag,firstScriptTag)}callbacks.push(resolve)})}__name(loadYouTubePlayerAPI,"loadYouTubePlayerAPI");let playerApiLoaded=!1;const callbacks=[];window.onYouTubeIframeAPIReady=()=>{playerApiLoaded=!0,callbacks.forEach(c=>c(window.YT)),callbacks.length=0};function useLatch(){const[v2,set]=reactExports.useState(!1);return[v2,()=>set(!0)]}__name(useLatch,"useLatch");function stateString(code){switch(code){case State.BUFFERING:return"buffering";case State.UNSTARTED:return"unstarted";case State.CUED:return"cued";case State.ENDED:return"ended";case State.PLAYING:return"playing";case State.PAUSED:return"paused";default:return""}}__name(stateString,"stateString");function PlayerStateView(props){return reactExports.createElement(reactExports.Fragment,null,props.channel.getName()+" "+stateString(props.code))}__name(PlayerStateView,"PlayerStateView");function ChannelSwitcher(props){return reactExports.createElement(reactExports.Fragment,null,props.channels.map(ch2=>reactExports.createElement("button",{key:ch2.getName(),onClick:__name(()=>props.onChannelSelected(ch2),"onClick")},ch2.getName())))}__name(ChannelSwitcher,"ChannelSwitcher");const episodes$5=[`# Elif'in Hecesi

    SUoqi6C8qkw 7:40 Perija and Friends - Kuzum Belo Edije ( a balkan gathering )
    p_avIhRC5aI 4:48 Maddi - Come and Go ( The ballad of the butterfly )
    Sq_kTDO97ao 3:06 Muharrem & Halil - Seni Şah'a Gider Derler
    ICdF6F3Qg_c 7:29 Mohammad Oktay - Ruhani Aşık Havası
    kLpBEkNpob0 6:51 Eren & Özgür - Yaman
    zMSdG1wpz3s 4:44 Itamar Zakai - Pleasant
  `,`
    zFa-n9uEcKI 8:34 All Related - Mountain Version (Nessi Gomes)
    HgBeSQaCXDQ 3:23 Akira Takeguchi - Konil Tolkyny (Көңіл толқыны)
    Oechuj3Mt7M 6:11 Perija - Sevda ( Tvojte ochi Leno mori )
    lNrIc9DTFUg 3:41 Nevra Coşkun - Güzel Mevcûdiyetim
    2X63S7FSWFs 7:23 Bacıyan - Sığmazam
    2u_dV0-TDQ8 3:49 Adaya - No Countries
    6CY6Z-8iQbM 7:09 Dunja & Tim - Welcome
    ZTVXX9iblhE 9:09 Farshad Haghighi - Tanbour Magham
  `,`
    7dcExfezgd0 3:43 Ayşe & Doğa - Kızılırmak
    HLe-oRtYAEM 8:33 Pouriya Raisi - Huzûr
    VXbGyJ6NQDI 10:23 Demircan & Macithan - Sığmazam
    syCrQp1OVO8 6:55 Memduh Özdemir - Canânı İster Canımız
    6Lys2SXUA5Q 10:53 A Gathering | Bir Buluşma: Doğruya Nazar Eyleriz
  `,`
    iLZQuO_e3Hs 11:25 Demircan Demir - Bir Yol Senden Açık
    tknEIHce5P8 4:39 Seda Seyrek Houbakht - Elif'in Hecesi
    0evfXX417co 10:06 Volkan Örgün - Efendiler Bağı
    _-dBFlwMnis 2:41 Georgi Ivanov Edrev - Karai Maicho
    IdWqBbCkDpg 4:38 Ayşe Özaltın - Ha Babam Ha
    dylcppL_yVQ 3:28 Süyümbike Güvenç - Tugan Avıl
    sk-S9ZRuT7g 3:03 Serxas - Barana Payîz
  `,`
    IsxCeTk5VXY 11:22 Hamed Habibpoor - Glare
    cIMKJ43TFLs 14:15 Özgür Baba - Dertli Dolap
    EE_5kmy8ZRc 3:13 Serkan Güven - Nihavend Gezinti
    8iBofAFcdBk 2:35 Bilal Karaman - Neredesin Sen
    YXbA8wzqyIQ 4:11 Aslı Büyükköksal - Güneş'le Birdirbir
    uMWm7ADcvmE 3:31 Faridah Busemann - Dertli Dolap
    Tal_1JmjI-Q 6:11 Yarden Cohen - Shaar Asher Nisgar
    ti_jsP3BJ-g 5:36 Zainab Lax - Negaresh
  `,`
    w-GJOnbpHRM 7:51 Burhan Alkhatib - Rumi I
    lenZMY8ESQ0 3:51 Doğa Can Yaman - Meandering
    pH-ElLzMY_E 5:04 Macithan Terzioğlu - Can Ellerinden Gelmişem
    Di8qHpVJjeI 4:54 Amin Parvin - Shoghe Rahaee
    d7pDgGR2dhY 8:11 Pouriya Raisi - Bi Zamani
    mJ8S8qxG9xk 7:33 Memduh Özdemir - Bugün Seyre Çıkmış Hublar Sultanı
    c9CfJyZxBug 7:11 Çağrı Akoğlu - Taft
    lbDuhK9F-KM 4:37 Selen Hünerli - Aşık
  `,`
    Udf1V3prIzU 7:14 Işık Işık - Kim Dervişlik İster İse
    JYEXS7lflYI 4:16 Seda Seyrek Houbakht - Rodos Semahı
    MECioY_N-94 4:24 Ali Naki Gündoğdu - Harabat Ehliyiz
    gTCBu37MfaI 7:17 Macithan Terzioğlu - Pınarın Başında Destin Var İmiş
    26vLRhm6bXc 3:21 Ertuğrul Küçükbayraktar - Çayın Öte Yüzünde
    lzRCuT1dUH0 3:20 Nebî - Dem-i Nesimi
  `,`
    qj139dE7tFI 4:01 LOTR The Fellowship of the Ring - Extended Edition - The Prologue: One Ring to Rule Them All... Pt 1
    d_NhmyrcoQ4 3:06 LOTR The Fellowship of the Ring - Extended Edition - The Prologue: One Ring to Rule Them All... Pt 2
    -PcUnqlPA8A 3:00 LOTR The Fellowship of the Ring - Extended Edition - Concerning Hobbits
    CiRu_W9tzM8 1:56 LOTR The Fellowship of the Ring - Extended Edition - A Long-expected Party Part 2
    4Yy0pPTrHlk 4:14 LOTR The Fellowship of the Ring - Farewell Dear Bilbo
    xYgc2G6ThUs 4:55 LOTR The Fellowship of the Ring - The Account of Isildur
    JZUxc-Cb5LM 1:24 LOTR The Fellowship of the Ring - Extended Edition - At the Green Dragon
    TBMiyEzOJmI 4:38 LOTR The Fellowship of the Ring - Saruman the White
    2rtpEbRyqbg 2:19 LOTR The Fellowship of the Ring - Bucklebury Ferry
    WmghV5AimjU 1:19 LOTR The Fellowship of the Ring - Extended Edition - Bree
    bYFPxU9xGZI 4:44 LOTR The Fellowship of the Ring - At the Sign of The Prancing Pony
    FTthEbYCYN8 2:12 LOTR The Fellowship of the Ring - The Nazgûl
    qofMAoY0Ts4 1:34 LOTR The Fellowship of the Ring - Extended Edition - Into the Wild
    fO9vymA8-vo 1:39 LOTR The Fellowship of the Ring - Extended Edition - The Midgewater Marshes
    wzaa-jHULLc 1:44 LOTR The Fellowship of the Ring - The Spoiling of Isengard
    LwinMu7-ZrI 2:31 LOTR The Fellowship of the Ring - The Caverns of Isengard
    LbAPwwAXaWM 3:34 LOTR The Fellowship of the Ring - The Fate of the Ring
    B1uGDjSVLOk 2:40 LOTR The Fellowship of the Ring - Extended Edition - The Sword That Was Broken
    -k3ABfmCr2I 3:34 LOTR The Fellowship of the Ring - Extended Edition - The Council of Elrond Part 1
    V1c2tUcL-jY 1:14 LOTR The Fellowship of the Ring - Extended Edition - Gilraen's Memorial
    ofDh5t1l738 1:44 LOTR The Fellowship of the Ring - Bilbo's Gifts
    brcI4oF1Kto 1:24 LOTR The Fellowship of the Ring - Extended Edition - The Departure of the Fellowship
    BuHLeZjYQrg 4:47 LOTR The Fellowship of the Ring - Extended Edition - The Pass of Caradhras
    oBkiwyEOWEU 1:07 LOTR The Fellowship of the Ring - Extended Edition - The Walls of Moria
    -jlsKzPiCbQ 2:37 LOTR The Fellowship of the Ring - Extended Edition - Moria Part 1
    UZzwaVerraA 2:45 LOTR The Fellowship of the Ring - Extended Edition - Moria Part 2
    jGUkkF8-3QQ 2:46 LOTR The Fellowship of the Ring - Extended Edition - A Journey in the Dark
    IrOqnZdvI6M 2:36 LOTR The Fellowship of the Ring - Extended Edition - Gandalf speaks to Frodo in Moria
    HKGQFkWI_bM 4:26 LOTR The Fellowship of the Ring - The Fall of Gandalf
    wbOvoGqraKY 3:55 LOTR The Fellowship of the Ring - Extended Edition - Lothlórien
    qdD6Cte8HrU 3:31 LOTR The Fellowship of the Ring - Extended Edition - Caras Galadhon
    YMjKPVBNQ0E 1:07 LOTR The Fellowship of the Ring - Extended Edition - Lament for Gandalf
    2OYsgAawB-s 2:01 LOTR The Fellowship of the Ring - Boromir and Aragorn in Lothlórien
    0I7Qs4ByI0c 5:03 LOTR The Fellowship of the Ring - Extended Edition - The Mirror of Galadriel
    tgXPRxmHk6Q 1:41 LOTR The Fellowship of the Ring - The Fighting Uruk-hai
    Ot7T7IzY--s 1:27 LOTR The Fellowship of the Ring - Extended Edition - Farewell to Lórien
    jASCi95Aw7A 3:33 LOTR The Fellowship of the Ring - Extended Edition - The Great River
    SlLC1kCH1ps 2:36 LOTR The Fellowship of the Ring - The Argonath
    LUZ29kEJLdE 3:02 LOTR The Fellowship of the Ring - Parth Galen
    9skYkQfAwus 2:43 LOTR The Fellowship of the Ring - Extended Edition - The Departure of Boromir
  `,`
    # Ian Anderson Plays The Orchestral Jethro Tull
    cyb41bVtJ90 3:20 Ian Anderson - Eurology (Ian Anderson Plays The Orchestral Jethro Tull)
    k_J-49MOe_8 5:23 Ian Anderson - Calliandra Shade (Ian Anderson Plays The Orchestral Jethro Tull)
    WL2dpMj0GUw 3:46 Ian Anderson - Skating Away On The Thin Ice Of The New Day (Plays The Orchestral Jethro Tull)
    orkGlWkwcQI 3:10 Ian Anderson - Up The Pool (Ian Anderson Plays The Orchestral Jethro Tull)
    hNd1hcyl_NY 3:26 Ian Anderson - We Five Kings (Ian Anderson Plays The Orchestral Jethro Tull)
    HzyhSiCwbP4 3:38 Ian Anderson - Life Is A Long Song (Ian Anderson Plays The Orchestral Jethro Tull)
    BDz2fGaFhUE 2:03 Jethro Tull - Wond'ring Aloud (Ian Anderson Plays The Orchestral Jethro Tull)
    KdEwmFdvqnc 3:11 Jethro Tull - Griminelli's Lament (Ian Anderson – Plays The Orchestral Jethro Tull)
    zYkezR3L1a8 1:27 Jethro Tull - Cheap Day Return (Ian Anderson Plays The Orchestral Jethro Tull)
    uAFsfvJM10U 5:47 Jethro Tull - Mother Goose (Ian Anderson Plays The Orchestral Jethro Tull)
    dXOpaZUwsm4 4:31 Jethro Tull - Bourée (Ian Anderson Plays The Orchestral Jethro Tull)
    iLXnwoixxk8 3:24 Jethro Tull - Boris Dancing (Ian Anderson Plays The Orchestral Jethro Tull)
    lq0nJZa6P8c 4:54 Jethro Tull - Living In The Past (Ian Anderson Plays The Orchestral Jethro Tull)
    582xsqATCFs 10:21 Jethro Tull - Aqualung (Ian Anderson Plays The Orchestral Jethro Tull)
    USllUrm-7xA 4:50 Jethro Tull - God Rest Ye Merry Gentlemen (Ian Anderson Plays The Orchestral Jethro Tull)
    l5PgE-RL11Q 9:09 Jethro Tull - My God (Ian Anderson Plays The Orchestral Jethro Tull)
    n1iDSF0HXZo 13:11 Jethro Tull - Budapest (Ian Anderson Plays The Orchestral Jethro Tull)
    Svrd9fRQgsQ 6:58 Jethro Tull - Locomotive Breath (Ian Anderson Plays The Orchestral Jethro Tull)
  `,`
    mn0Gd2Stoog 2:50 Bach's Easter Oratorio with Peter Whelan
    62fawgUUpg8 41:27 Bach - Easter Oratorio: Kommt, eilet und laufet BWV 249 - Van Veldhoven | Netherlands Bach Society
  `,`
    pj0jddZiTMk 1:10:28 New London Opera Group Patience, Act I
    -joxknSRsBQ 50:56 New London Opera Group Patience, Act II
  `,`
    qxZWtjBb4Q8 1:16:22 The Grand Duke, Act I (New London Opera Group, 2014)  
    6AcrJCCVCew 1:04:30 The Grand Duke, Act II (New London Opera Group, 2014)
  `,`
    pvXgo3Xb1OM 59:25 The Pirates of Penzance Act One - New London Opera Group
    1KqnohvE3B0 47:49 The Pirates of Penzance Act Two - New London Opera Group
  `,`
    i6GnUUbK7-Q 15:49 Utopia Limited - part 1
    7lKrvbG0N0g 11:53 Utopia Limited - part 2
    ZkLNbA4oOvA 14:01 Utopia Limited - part 3
    jsVknDUwut4 18:22 Utopia Limited - part 4
    oDrKqGf0z2s 17:43 Utopia Limited - part 5 (Act I finale)
    FILzExx5tQo 9:31 Utopia Limited - part 6
    uktB0cQZXu8 13:55 Utopia Limited - part 7
    TjFTVOkbB6E 18:38 Utopia Limited - part 8
    25jvb8oSEfU 16:59 Utopia Limited - part 9
  `,`
    t1QnXClcY5I 17:09 The Sorcerer New London Opera Group (part 1)
    3CL0e3ZxZb0 15:32 The Sorcerer - New London Opera Group (part 2)
    jyPd--h2X-0 18:54 The Sorcerer - New London Opera Group (part 3)
    aISTXiklWzg 8:23 The Sorcerer - New London Opera Group (part 4)
    y9NFregh8MY 11:45 The Sorcerer - New London Opera Group (part 5)
    b_wiOXerTFg 19:11 The Sorcerer - New London Opera Group (part 6)
    4ydWQ8PSAzs 17:22 The Sorcerer - New London Opera Group (part 7)
  `,`
    AEMEkNhulsI 45:07 Victor Borge act 1
    RtzMQ4JEcmc 46:08 Victor Borge act 2
  `,`
    RrHnLXMTOWM 3:19 Introduction: The Chemical History of a Candle by Michael Faraday (1/6)
    6W0MHZ4jb4A 11:48 Lecture One: The Chemical History of a Candle - The Sources of its Flame (2/6)
    B8vSLgaW9WQ 13:45 Lecture Two: The Chemical History of a Candle - Brightness of the Flame (3/6)
    31pLJyReFXw 15:43 Lecture Three: The Chemical History of a Candle - Products of Combustion (4/6)
    v1DWHeouJYM 20:00 Lecture Four: The Chemical History of a Candle - The Nature of the Atmosphere (5/6)
    Fb4RoPEtwso 21:07 Lecture Five: The Chemical History of a Candle - Respiration & the Burning of a Candle (6/6)
  `,`
    ce0g0e9NmgQ 11:48 Commentary Lecture One: The Chemical History of a Candle - The Sources of its Flame
    grWNnVB9B-4 13:45 Commentary Lecture Two: The Chemical History of a Candle - Brightness of the Flame
    0s8anLurWp0 15:43 Commentary Lecture Three: The Chemical History of a Candle - Products of Combustion
    WLgxPKU-JsI 20:00 Commentary Lecture Four: The Chemical History of a Candle - The Nature of the Atmosphere
    tCmZfnT6_M4 21:07 Commentary Lecture Five: The Chemical History of a Candle - Respiration & the Burning of a Candle
  `,`
    NAsM30MAHLg 3:39 (1/4) Intro/History: Introducing a 100-year-old mechanical computer
    8KmVDxkia_w 5:42 (2/4) Synthesis: A machine that uses gears, springs and levers to add sines and cosines
    6dW6VYXp9HM 4:05 (3/4) Analysis: Explaining Fourier analysis with a machine
    jfH-NbsmvD4 11:48 (4/4) Operation: The details of setting up the Harmonic Analyzer
  `,`
    Z890lqjBkq4 0:00-1:02
    ATorS9krpDU 0:26-2:31 The Muppet Show - 108: Paul Williams - “All Of Me” (1976)
    Z890lqjBkq4 1:06-1:20
    tYeqksmmCAY 0:13-1:14 The Muppet Show - 223: John Cleese - Gonzo’s Stunt: Cannonball (1978)
    Gjz8oE4c8VQ 2:39 The Muppet Show - 223: John Cleese - Backstage #3 (1978)
    Z890lqjBkq4 1:24-1:47
    WktUcZVPGho 0:02-2:53 The Muppet Show - 118: Phyllis Diller - “Hugga Wugga”/“You Are My Sunshine” (1976)
    Z890lqjBkq4 1:51-2:06
    0nCfIA_Yy5U 0:50 The Muppet Show - 118: Phyllis Diller - Muppet Labs: Exploding Clothes (1976)
    Z890lqjBkq4 2:08-2:14
    q4BhmKStq1c 1:45 The Muppet Show - 205: Judy Collins - Planet Koozebane: Koozebanian Phoob (1978)
    Z890lqjBkq4 2:17-2:30
    mIJdUHY_tlo 0:20-1:08 The Muppet Show - 204: Rich Little - “Tea for Two” (1978)
    Z890lqjBkq4 2:34-2:51
    wHW-mOvh-Z0 1:16 The Muppet Show - 112: Peter Ustinov - “You Do Something To Me” (1976)
    Z890lqjBkq4 2:54-2:59
    H3Cq4Qk_mS8 0:51 The Muppet Show - 207: Edgar Bergen - Gonzo’s Stunt: Brick (1978)
    Z890lqjBkq4 3:02-3:23
    ZNdY-cm9l2Y 1:54 The Muppet Show - 206: Nancy Walker - A man listens to the singing of several birds (1978)
    Z890lqjBkq4 3:25-3:38
    vi8S0Fab2BI 0:14-1:53 The Muppet Show - 306: Jean Stapleton - “I’m Just Wild About Harry” (1978)
    Z890lqjBkq4 3:42-4:11
    ZJKF1f9TMO4 2:28 The Muppet Show - 506: Brooke Shields - “Jabberwocky” (1980)
    Yo2gdnPU2yU 2:01 The Muppet Show - 208: Steve Martin - UK Spot: Gonzo and Yolanda (1977)
    Z890lqjBkq4 4:13-4:33
    GEp_7UetpUE 0:45-2:03 The Muppet Show - 109: Charles Aznavour - “I Feel Pretty” (1976)
    Z890lqjBkq4 4:37-4:51
    H3Yxyjo8WiU 2:01 The Muppet Show - 217: Julie Andrews - At The Dance/“Won’t Somebody Dance With Me” (1978)
    Z890lqjBkq4 4:55-5:04
    wz4KphWTVUE 0:15-3:30 The Muppet Show - 211: Dom DeLuise - Planet Koosebane: Merdildops (1977)
    ZeBdhrNvZKM 0:41-2:50 The Muppet Show - 119: Vincent Price - “I’ve Got You Under My Skin” (1977)
    Z890lqjBkq4 5:14-5:36
    wE6sRJHGY6A 2:26 The Muppet Show - 324: Cheryl Ladd - Gonzo’s Stunt: Hypnotizing (1979)
    Z890lqjBkq4 5:39-5:47
    U67_apsJvvg 0:10-2:43 The Muppet Show - 119: Vincent Price - “You’ve Got a Friend” (1977)
    Z890lqjBkq4 5:50-5:56
    GNhx2udfVNA 0:11-0:50 The Muppet Show - 101: Juliet Prowse - Gonzo’s Stunt: Eating a Rubber Tire (1976)
    4JE6YEjbMkc 0:04-0:39 Gonzo stops taxi - The Great Muppet Caper
    S3LFe3N8VGc 1:01 The Muppet Show - 301: Kris Kristofferson & Rita Coolidge - Gonzo’s Stunt: Piano (1978)
    YkuC2-HP8EY 0:21-1:12 The Muppet Show - 504: Shirley Bassey - “Liebesträume” (1980)
    JG0nkfcuULM 0:43 The Muppet Show - 222: Teresa Brewer - Gonzo’s Stunt: Shakespeare (1978)
    ElKK24cVzLk 1:37 The Muppet Show - 410: Kenny Rogers - Gonzo’s Stunts: Catapult (1979)
    bGVxW8J_LjI 1:07 The Muppet Show - 217: Julie Andrews - Gonzo’s Stunt: “Eine Kleine Nachtmusik”(1978)
    xkdVWkAZryc 1:01 The Muppet Show - 217: Julie Andrews - Backstage #2 (1978)
    x27pFBKEYoI 0:17-1:13 The muppets take manhattan
    Z890lqjBkq4 6:45-6:58
    iVJhbjJ9Ke4 2:51 The Muppet Show - 209: Madeline Kahn - Backstage #4/“Wishing Song” (1977)
    Z890lqjBkq4 7:01-7:14
    jJDFV9o-HKc 1:18 The Muppet Show - 504: Shirley Bassey - “Isn’t This a Lovely Day” (1980)
    Z890lqjBkq4 7:17-7:48
    Vo3LHOM5Ed8 1:27 The Muppet Show - 217: Julie Andrews - Talk Spot (1978)
    Z890lqjBkq4 7:54-8:00
    IyG3PL5V490 2:37 The Muppet Show - 107: Florence Henderson - Planet Koozebane (1976)
    Z890lqjBkq4 8:03-8:15
    gjsetOXNQHQ 2:06 The Muppet Show - 409: Beverly Sills - UK Spot: “Muppera” (1979)
    Z890lqjBkq4 8:19-9:11
  `],videos$6=`

# LOTR extras

xJNKs4InzUc 1:24:54 Lord of the Rings Fellowship of the Ring Extras (Part 4)
8sZMTUIegE0 1:37:27 Lord of the Rings Fellowship of the Ring Extras (Part 3)
V9HrGfkI2mw 1:42:26 Lord of the Rings Fellowship of the Ring Extras (Part 2)
ZobbJ-HH59c 52:22 Lord of the Rings Fellowship of the Ring Extras (Part 1)

ukTaodQfYRQ 1:44:41 Meditation and Going Beyond Mindfulness - A Secular Perspective
kaNO09cPS6c 56:41 Happiest Man on Earth | Mingyur Rinpoche | Talks at Google
k1tw5sowFyM 47:08 From Panic Attacks to Meditation | Mingyur Rinpoche | Talks at Google

# Engineerguy

E-F2QQuZZGk 10:44 The Engineering of Duct Tape
HzTJrnsZSWw 1:03 Early color photo with no dyes #shorts #engineerguy #engineering #photography #illinois #invention
p8IO9u9IuOs 11:40 The Microwave Oven Magnetron: What an Engineer Means by “Best”
-8lXXg8dWHk 11:25 The Steam Turbine: The Surprising Relationship of Engineering & Science
9RAMqFg7laE 12:22 Controlling Turbulence and Evolution: How Engineers Overcome Uncertainty
_ivqWN4L3zU 11:54 Building a Cathedral without Science or Mathematics: The Engineering Method Explained
moFgp2VWBJ4 2:46 Announcement: New Video Series, new book, and an Event!
-DckWNwE7R4 5:52 The Engineering of Droplets and their Formation in a Commercial Inkjet Printer
wI-qAxKJoSU 9:42 Nitinol: The Shape Memory Effect and Superelasticity
ixxXhZVFXxQ 16:58 Britain's Giant Airship: R.101
UCKC-QVcVn0 10:28 The Engineering of the Drinking Bird
97ARLiTHjX0 12:06 DLP Projector Stereolithography 3D Printer
# 765mTZAv6QI 30:49 Fatal Flight audiobook: Chapter Two: Airborne at Last (4/14)
# clvrO6A8cDE 1:37 A short announcement about EngineerGuy videos (August 2017)
# mgqZCcccrhU 26:56 Fatal Flight audiobook: Chapter Nine: To Ride the Storm (11/14)
# vANc6538Zqo 24:46 Fatal Flight audiobook: Chapter Eight: Departure for India (10/14)
# 8L5TnpiwOzM 19:46 Fatal Flight audiobook: Chapter Seven: Radical Surgery (9/14)
# uUq_qyjzNgA 19:37 Fatal Flight audiobook: Chapter Six: The Airship Flies Again (8/14)
# WzIBKfDVYwc 19:44 Fatal Flight audiobook: Chapter Five: Problems with the Cloth Cover (7/14)
# SOZ9Ujud_g0 33:48 Fatal Flight audiobook: Chapter Four: Inside the Great Airship (6/14)
# 0YLi5cAIJvc 22:02 Fatal Flight audiobook: Chapter Three: An Inept Command Takes Charge (5/14)
# rZMlbEYzf6M 25:54 Fatal Flight audiobook: Chapter One: The Debut of the Great British Airship (3/14)
# NhdGbTL-BtE 15:17 Fatal Flight audiobook: Prologue: The Perennial Promise of Airships (2/14)
# 97OnTDaLqqk 1:23 Fatal Flight audiobook: Opening credits (1/14)
# kWEdZYLv2Ns 1:00 Fatal Flight audiobook: Closing Credits (14/14)
# BtcVWMxFpvI 10:33 Fatal Flight audiobook: Epilogue: Stories of Survivors and the Fate of British Airship (13/14)
# a3OAnB3ErvA 28:44 Fatal Flight audiobook: Chapter Ten: The Causes of R.101's Crash (12/14)
xYNX8y6lQMc 6:34 The Engineering of a Disposable Diaper
hVCNS2jQQ6g 4:26 Apollo: The Alignment Optical Telescope
# q2GroO9ZI5w 4:18 Upcoming Videos
COty6_oDEkk 8:03 How a Wind Up Music Box Works
RMjtmsr3CqA 9:37 Plastic Injection Molding
qCxco6227xo 2:52 NERF Blaster: Air Restriction Mechanism
hO09k19IIy4 2:59 Wine Corks: Saving Endangered Birds // An Illustrated Radio Talk
MhVw-MHGv4s 4:44 How a Retractable Ballpoint Pen Works
# hhNTAJEKnuY 1:02 Suggest topics for future EngineerGuy videos!
En__V0oEJsU 8:50 How a Film Projector Works
hUhisi2FBuw 11:39 The Ingenious Design of the Aluminum Beverage Can
fHmgF4ibmuk 11:28 RMS Titanic: Fascinating Engineering Facts
4mBuyixt22U 17:29 Bonus: Rocker arms: sinusoids in two different directions
XPQwKRt4Y2k 2:54 Bonus: Watch the machine spin around over and over...
# rMHw9GCAtE8 19:45 Page-by-Page Guide to the Free PDF
_4zbNJmtbGo 2:41 The Cigarette machine: the invention with the greatest economic impact?
ZCS0sr29Jiw 2:31 How home air conditioning triumphed over the open air movement
cv2tOE4ioCI 2:53 Kodak: How George Eastman revolutionized photography
r-IsBx3sxTo 3:07 How the Donner Party inspired food packaging
4wQsWL-lMJw 2:15 Theremin: How science fiction got its sound
StPKfNXK3N0 3:11 Ferris Wheel: How the Eiffel Tower wasn't good enough
XRCu8v9V8EY 3:27 Coffee makers: How baseball put them in our homes
ZnUBl90tayI 3:49 Why the Dvorak keyboard didn't take over the world
ddYZITaxlTQ 3:49 How Sony's Betamax lost to JVC's VHS Cassette Recorder
WzdCKBZP4Jo 3:59 PicturePhone: How Bell Telephone lost a half billion, but nearly created the internet
SDSZCaOjECM 2:12 Stories of Technological Failure: PicturePhone, Dvorak keyboard & Betamax
rhIRD5YVNbs 4:56 How a lead-acid battery works
kp33ZprO0Ck 5:11 How a Microwave Oven Works
OcgKDSwINOA 4:39 What Keeps Nuclear Weapons from Proliferating: The hardest step in making a nuclear bomb
p2BxAu6WZI8 4:33 How an atomic clock works, and its use in the global positioning system (GPS)
oUEbMjtWc-A 4:53 How a Laser Works
3ZhVOy-ytJY 4:17 Anodizing (Or the beauty of corrosion)
KZVgKu6v808 4:25 How a Smartphone Knows Up from Down (accelerometer)
wsdmt0De8Hw 4:27 CCD: The heart of a digital camera (how a charge-coupled device works)
NLqsQ-f2v6s 2:14 EngineerGuy's New Book Eight Amazing Engineering Stories
GOOOsBhCVe4 3:05 Why it takes a while to make engineerguy videos
0MwMkBET_5I 5:36 Fiber optic cables: How they work
Wiy_eHdj8kg 5:04 Hard drive teardown
z7r8sKzt7HM 4:02 Cell Phone Design
jiejNAUwcQ8 4:53 LCD Monitor Teardown
oFUUQcpGR3k 3:45 How smoke detectors work
DIGqBb3iZPo 3:38 Light bulb filament
# XmKzSDOXejI 1:02 Video for soon to be released videos
F5Ri_HhziI0 3:43 Why the other line is likely to move faster
1pM6uD8nePo 3:34 How a quartz watch works
RdYHljZi7ys 4:46 How the first transistor worked
xlY5W7be5jU 2:15 Black box: Inside a flight data recorder
4j4Q_YBRJEI 2:40 Coffee Maker: Pumping water with almost no moving parts
ekv0kprA3AY 2:18 Pop Can Stay-on Tab (slow motion)
G_SC7oWL78A 2:29 The Whiffletree: A mechanical digital-to-analog converter
bRCNenhcvpw 3:05 IBM Selectric Typewriter & its digital to analogue converter
hdqKnHFZRWQ 7:16 Theo Gray demonstrates his Element iPad ap -- and "debuts" the Japanese version of the Elements song

# Adam Savage's Tested

dXdkfaEbeLQ 10:18 Ask Adam Savage: When Did You Know Making Would Be A Sustainable Career?
PbnDO_IMMoY 7:39 Ask Adam Savage: What IS It About The Matrix?
kBoNZjWsrOY 15:21 Ask Adam Savage: All About Clamps
6HOWrW4p-Xg 11:29 Ask Adam Savage: Adam's Top 5 Movie Soundtracks
Wz-iPCiim9U 5:01 Ask Adam Savage: “Did You Have Work/Life Balance During MythBusters?”
UUNBBNLCqmU 7:39 Ask Adam Savage: Best Glue for Foam
eGRfEvMEoSM 6:16 Ask Adam Savage: "Do You Have Lucid Dreams?"
qQlF7upgTlA 10:03 Ask Adam Savage: "What Do You Think Will Be Your Legacy?"
7KllsOwtHK0 7:39 Ask Adam Savage: Ark of the Covenant Replicas and Duct Tape Bullwhips
5CRSXcoasQQ 12:00 Ask Adam Savage: Creating With ADHD
W7XvCLDzY10 7:51 Ask Adam Savage: How to Set Up a New Shop
KZWWL3Kdhhk 9:04 Ask Adam Savage: On Sharing Space With Mrs Donttrythis
vyCrHLYiGNo 10:09 Ask Adam Savage: Efficiency and First Order of Retrievability in Shops
6LqBJzLB5jg 5:57 Ask Adam Savage: Best Tools and Projects for First-Time Makers
L3D8BhJIfL0 11:12 Ask Adam Savage: Avoiding Accidents and "The Hands"
eS8aLmXEmQQ 11:20 Ask Adam Savage: When to Ask for Help on a Job
TpqUG6iFEBE 7:38 Ask Adam Savage: What's the One Thing Visitors Flock to in The Cave?
IVE3G_uCW1Y 9:05 Ask Adam Savage: Building vs. Modifying Tools
WBbxrHO8zq8 7:28 Ask Adam Savage: Favorite Miniature and Jumbo Versions of Tools
8Q_7nkvjl-g 8:58 Ask Adam Savage: The Origin of Adam and Jamie's "MythBusters Look"
usB6jqa4Yt4 7:56 Ask Adam Savage: When to Buy and How to Mark Your Tools
riyvh8zOG_A 5:58 Ask Adam Savage: On Reading Critical Viewer Comments
G9TJQEJJZKI 6:58 Ask Adam Savage: Current TV Series Adam Would Want to Address on MythBusters
fWZ8rUEdhUc 7:58 Ask Adam Savage: What's on Adam's Personal Bucket List?
WrGW5oGnILo 7:58 Ask Adam Savage: Setting Up a Shop in Your Garage
2tZ0EGJIgD8 15:16 Ask Adam Savage: Adjusting to Life Post-Mythbusters
jIAbRPW0jXg 5:41 Ask Adam Savage: On Making "In Universe" Prop Build Decisions
E1tuc-levnI 6:14 Ask Adam Savage: Do I Want to Go to Space?
a6E0FMtdJpM 10:51 Ask Adam Savage: Who Modified the Cars on MythBusters?
aRln8atkNaY 13:43 Ask Adam Savage: Behind the MythBusters Cement Truck Explosion
mqXtr7C5VCg 11:45 Ask Adam Savage: Job Interview Advice, Jamie's Flamethrower and More
lbnGzrLWlBw 5:25 Ask Adam Savage: The Origin of M5, M6 and M7 (Plus, Their Neighbors)
DNhbUQhiVf8 7:51 Ask Adam Savage: Will I Ever Retire, Plus Combatting Negative Feedback
Bh6VLA7uUvM 11:21 Ask Adam Savage: The Challenge of Using Explosives and Firearms in San Francisco
I1XVHq3sTdk 7:59 Ask Adam Savage: When to Keep/Store a Project, Plus Favorite Puppet in Film History
MztikUm9T1c 15:34 Ask Adam Savage: My Favorite Build of Jamie's
c6TopwNu7Ok 8:22 Ask Adam Savage: How Useful Is My Tattoo?
6HV37guAllc 6:23 Ask Adam Savage: Makers in the Film Industry
l1RemggFxwA 8:16 Ask Adam Savage: How to Weather Leather
jP4DGyMUbMA 6:50 Ask Adam Savage: My "Why Didn't I Think of That" Moments
Z10JnKiu4Tg 6:49 Ask Adam Savage: Post-Build Depression, Custom Lightsabers and Unfinished Blasters
AlcLyaOw-ls 8:22 Ask Adam Savage: The "One Day Build" Concept
8fgfi7Kc1hg 13:30 Ask Adam Savage: How I Jump Back Into a Set-Aside Project
DXyc91HL7Y8 7:47 Ask Adam Savage: Does Self-Filming Make Builds Longer?
LprSB3_rles 11:12 Ask Adam Savage: When to Make vs. Buy Something
8mXv0_N_NHg 8:17 Ask Adam Savage: The Myth Jamie Suggested That I LOVED (But We Didn't Do)
qkz19jFh7x0 8:06 Ask Adam Savage: Bailing on Boring Projects
FIDJ2XMTb_s 10:06 Ask Adam Savage: Land Cruiser Pros and Cons Plus Drywall Screws
stMPdtH3S9E 11:10 Ask Adam Savage: Metric Blocks, Biscuit Bazooka and Barrel of Bricks
L5De68zSf14 11:55 Ask Adam Savage: Should You Take Jobs at a Loss to "Get Your Name Out"?
_Xt-YHdRlQI 12:00 Ask Adam Savage: Stewart/Colbert Rally to Restore Sanity and/or Fear Invite
IuF1tWlV6nE 9:33 Ask Adam Savage: Blade Runner 2099, Workbench Tops and Custom Lightsabers
psgf9pqjkPs 8:37 Ask Adam Savage: Is Failure Still an Option?
qPlWUFxXFGs 10:24 Ask Adam Savage: Tips for Organizing Reference Materials (Both Digital and Physical)
5Oe2S_xvL5o 9:01 Ask Adam Savage: The MythBusters Pilot Episodes
WfyZuedOsF4 9:12 Ask Adam Savage: On Finding Organizational Inspiration and Discarding Things You Need Later
9mxGo7QglRU 12:36 Ask Adam Savage: Transitioning From Jamie's Employee to Equal
CVU3EZnjmUg 9:33 Ask Adam Savage: How to Store One-Off Items (Plus Home Organization Issues With Mrs. Donttrythis)
70TZua1j3Fc 11:27 Ask Adam Savage: When to Discard Scrap Materials
56NXn-6nqMA 8:58 Ask Adam Savage: Why the Hindenburg Episode Was Huge (and Fun!) for MythBusters
4m-lTiCmSro 6:45 Ask Adam Savage: Airbrushing Tips and DIY Tools
QmRXguvO0bs 0-13:15 Ask Adam Savage: Managing Tools and Materials When You Have Two Shops
F_YVzJfhC6o 10:47 Ask Adam Savage: Tips for Building Within Tight Budget Constraints
d4O2wtDW2LA 0-9:45 Ask Adam Savage: The Tool That Does Only One Thing, But Does It Well
H0X9y0iyBmY 0-11:41 Ask Adam Savage: Lathe Tips (Plus Adam's Watch!)
qeRcHlwp2AQ 0-9:11 Ask Adam Savage: The Tool That Makes Adam Giddy
q3sCIpFZzfU 0-7:32 Ask Adam Savage: The Tool That Didn't Live Up to My Hopes
Gj0OMUozEKw 0-7:53 Ask Adam Savage: Favorite Play/Musical Experience
7oieelDea5o 0-9:56 Ask Adam Savage: Do I Do Projects at Home?
8zIOfPy7sCg 0-10:16 Ask Adam Savage: Myths Adam Wishes Were Taken Further
V1XbZPafG7M 0-14:24 Ask Adam Savage: How to Deal With Creative Block
aNwZQdUmR7A 0-11:26 Ask Adam Savage: Weirdest Things Fans Ask to Be Signed
AoXNSquNsbY 0-13:30 Ask Adam Savage: The Myth That Pushed Adam to His Breaking Point
uKlQyWwdqXk 0-10:41 Ask Adam Savage: Is Mrs. Donttrythis a Maker?
QuzIlMxLnQM 0-12:10 Ask Adam Savage: Collaborating/Competing With Jamie on MythBusters
r1uxC8RUiKU 0-8:30 Ask Adam Savage: Feeling Overwhelmed by STUFF
D_yHttkfWCA 0-11:10 Ask Adam Savage: Origin of "Well, There's Your Problem" on MythBusters
Ie79jtBfr1M 11:59 Ask Adam Savage: Movie Scene That Had the Biggest Emotional Impact
REXSV1x18Y8 11:37 Ask Adam Savage: Most Egregious Errors in TV and Movies
fW8R-WbLQEs 11:14 Ask Adam Savage: Films Where the Props Were Better Than the Film Itself
EtdAto9ymA8 9:22 Ask Adam Savage: Coming Out of Prop-Making "Retirement"
BW2l9UE05No 8:47 Ask Adam Savage: Criteria for Removing Items From Shop
KvnWuo_vTFU 9:58 Ask Adam Savage: Origin Story of the Cave
8-1NoqJXX-c 6:32 Ask Adam Savage: If I Could Rebuild My Shop From Scratch
UBIoaI_zqxU 6:33 Ask Adam Savage: Pegboard and Other Storage Solutions
rpBxyXYzJnU 8:13 Ask Adam Savage: Inspiration from Cosplays Seen in Recent Conventions
25eZ17IoRK4 11:34 Ask Adam Savage: On Storage, Compressed Air and Expendables
04uc8uEE36k 10:13 Ask Adam Savage: Making a "Renter Friendly" Home Workshop
dNry9KLISYo 5:30 Ask Adam Savage: 3D Printer vs Vacuum Former for Cosplay
sHz3zZu3Z0o 8:54 Ask Adam Savage: Managing Distraction While Working
sN-wQYRDECw 12:15 Ask Adam Savage: How Mandalorian's Digital Effects Are Game-Changing
NRDWkJbrcrU 11:43 Ask Adam Savage: On Interacting With Fans
KoEw_A1MfC0 11:40 Ask Adam Savage: Is Hacking Making?
L-s3jFny6M8 12:19 Ask Adam Savage: Has Celebrity Changed Adam's Con Experience?
uK-0Yndxmss 0-10:52 Ask Adam Savage: Managing Anxiety When Delivering Creative Work
kDzhe6Ll1sA 14:50 Ask Adam Savage: On Turning a Hobby Into a (Still Enjoyable) Business
Gf-7RlvDeaw 12:14 Ask Adam Savage: How Scripted Was Shark Week?
tiByvxW3-SQ 9:12 Ask Adam Savage: On Being Clever vs. Good in the Workplace
-GzHr2MYS0w 16:47 Ask Adam Savage: On Being a Freelancer (and Setting Prices)
NSPHIP9BM8I 12:01 Ask Adam Savage: My Past in Theatre
1wR9i5BLjeU 10:49 Ask Adam Savage: My Worst and Most Tedious Jobs
YpEHNIADWiA 10:22 Ask Adam Savage: First Job Ever Plus That Charmin Commercial
uiS1iR9uWQU 10:24 Ask Adam Savage: How Much Is Cosplay Physical vs. Mental?
rnfbjySCtCU 5:43 Ask Adam Savage: Machining vs 3D Printing
x0N2A8lNUXo 9:47 Ask Adam Savage: Transforming Toys into Realistic-Looking Props
D4ZYMUc8vng 12:58 Ask Adam Savage: "How I Broke My Neck"
V4PrNE8HsuI 12:18 Ask Adam Savage: "Which Star Wars Scenes Bring You Joy?"
mzC97eXYrDI 4:35 Ask Adam Savage: MythBusters Celebrity Guests That (Sadly) Never Happened
5A6ZGOmV0CM 7:16 Ask Adam Savage: Favorite Object Built on MythBusters
ZuW7_-rbvJc 5:24 Ask Adam Savage: Which Previous Job Adam Would Do Again (and Again)?
Nr81hpP5wK4 6:55 Ask Adam Savage: The Day I Saw Unparalleled Joy on Jamie's Face
RTa_oneCUPg 11:51 Ask Adam Savage: When to Intervene and When to Let Mistakes Happen
uXL8zhR17ts 15:37 Ask Adam Savage: Thoughts About Galaxy's Edge
x6c32uqznyQ 15:18 Ask Adam Savage: When Good Lightsaber Battles Go Bad
HNzigDaI5u8 12:15 Ask Adam Savage: Why Waterslide Wipeout Was Less Fun Than It Looked
xjHGCalVf6U 8:16 Ask Adam Savage: Managing Failure as a Maker
ELauebvLb1M 15:17 Ask Adam Savage: Coping With (and Learning From) Failure
y-0bBTuLAR8 11:09 Ask Adam Savage: Favorite Life Experience as a Result of MythBusters
tgx0bPAi8Q8 6:56 Ask Adam Savage: Learning to Stunt Drive on MythBusters
thRFK-MSZAw 6:26 Ask Adam Savage: MythBusters' Contribution to Science
jHwM-nnG-vI 9:45 Ask Adam Savage: Collecting Failures
LihTFh63wpM 14:01 Ask Adam Savage: Managing Negative Emotions During a Build
jEfQAo-BuB0 7:19 Ask Adam Savage: "Why I Actually Hate Duct Tape"
2T7lh1HzZjw 9:14 Ask Adam Savage: How to Approach Building an Accurate Costume
8FBNmf9H-_4 10:01 Ask Adam Savage: Performing for an Audience vs. a Camera
T6BlB3l-F4U 7:14 Ask Adam Savage: Proportion vs. Measurement in Cosplay
9a1eQAge2sg 11:06 Ask Adam Savage: Choosing Which Version of a Character to Cosplay
T5fjMnfSSbQ 7:23 Ask Adam Savage: A Caution Against the "Comparing Mind"
hSAuQETf79M 6:35 Ask Adam Savage: Which Myth Didn't Get the Love It Deserved?
16ctTeUJvSU 13:03 Ask Adam Savage: How Adam Chooses His Cosplays (Plus a Nathan Fillion Story!)
HU--YQtD-xk 6:59 Ask Adam Savage: Training a New Shop Employee With "All the PPE"
v3TYRKECRNA 7:13 Ask Adam Savage: Predicting Results on MythBusters
_iu7u0SQCUk 13:37 Ask Adam Savage: How MythBusters' Crew Size Changed Over Time
8UXDae5czgs 7:08 Ask Adam Savage: On Sharing Your Workshop
sosCBJv2tV8 6:59 Ask Adam Savage: Shop Anchor Points
XorzjtqIDWM 6:53 Ask Adam Savage: Testing the Bulletproof Water Myth
QCcIdfIdfD0 6:58 Ask Adam Savage: Designing Mobility in a Small Shop
g7nz1yCPFk0 4:59 Ask Adam Savage: How to Keep Track of Rarely Used Items
ZMIetBwWKoI 5:36 Ask Adam Savage: How Dangerous Was Duct Tape Canyon?
Sn6_TE9i5r8 9:00 Ask Adam Savage: About M5's Wall of Labeled Storage Bins
dsN__voQd8o 10:32 Ask Adam Savage: Tips for Setting Up a Workshop
beVj_xinOHY 12:33 Ask Adam Savage: When Good Materials Go Bad
v6JPhkWg_ok 8:44 Ask Adam Savage: Testing Myths With "No Basis in Science"
xUjcHW7SHaI 11:05 Ask Adam Savage: Plane on a Conveyor Belt Controversy
oFrjTAa7N4M 7:22 Ask Adam Savage: The Importance of Practical Effects
am5MLfCk8dc 10:37 Ask Adam Savage: "Which film most impacted modern cinema: Blade Runner or Alien?"
Z4dG9DYGSdA 11:56 Ask Adam Savage: The Myth More Dangerous Than It Seemed
vpAb8YkKKWg 10:50 Ask Adam Savage: Favorite Actor from Alien
Z9UIbpuppkM 9:19 Ask Adam Savage: About MythBusters' Narrator
Lcf0IOb0VY0 7:31 Ask Adam Savage: Working on R2D2 at ILM
h70kbIzPgig 13:09 Ask Adam Savage: How Lead Balloon Changed MythBusters
mFwzgXnxG30 7:09 Ask Adam Savage: Why M7 Spun Off from M5
bUAa1TgSY1c 9:30 Ask Adam Savage: Testing Fiction-Based Myths on MythBusters
EAlX_NOFYDI 12:04 Ask Adam Savage: High Speed and MythBusters
ztE3xoVDtG0 6:30 Ask Adam Savage: Voight-Kampf Machines and Electric Sheep
2FyfZeAgv54 4:06 Ask Adam Savage: Myth Adam Would Like to Test Today
rdNPws3pyHw 10:14 Ask Adam Savage: Why I Still Like Blade Runner
uw4csWqepkA 10:41 Ask Adam Savage: How MythBusters' Stunt Training Later Saved Adam's Life
Uxx4Y1lOM00 12:43 Ask Adam Savage: Favorite Blade Runner Cut (Plus: Is Deckard a Replicant?)
zdkqBWtVNSA 14:04 Ask Adam Savage: Savage Builds' Complex Builds, Plus Those Rocket Gloves
DXWzAcWj6b0 13:40 Ask Adam Savage: Remembering the U2 and Blue Angels Flights from MythBusters
H6yVtuPG1lc 13:58 Ask Adam Savage: Working With Tory on Savage Builds
ei2jLKORXn4 14:19 Ask Adam Savage: Savage Builds Wheel of Death Re-Do and Unrealized Ideas
2WFFhicVeXI 12:00 Ask Adam Savage: Origin of "I Reject Your Reality ..."
zyNdK6iXcyM 8:57 Ask Adam Savage: Most Important Myth
4OnOyyTyvcc 11:29 Ask Adam Savage: "Is ADHD a Positive or Negative for Makers?"
XkRHl8v5vrU 4:35 Ask Adam Savage: "Would You Go Back to ILM?"
COh6jTqWZmU 15:46 Ask Adam Savage: "What's Your End-of-Life Plan for Your Shop?"
yqmPea6d8ec 8:30 Ask Adam Savage: From Messy to (More) Organized
mwdHPG_heV0 8:44 Ask Adam Savage: Public Education, Doctor Who and Scissors
ebDc1uWiJD4 11:04 Ask Adam Savage: The Importance of Portfolio
4CHlcNqB20Q 8:42 Ask Adam Savage: Props from Literature and Favorite Animation as a Youth
YBILSR7Hu5o 9:36 Ask Adam Savage: Best Age to Introduce the Creative Process
7vRG0QpAT24 7:57 Ask Adam Savage: When Grant Met NSYNC
8aOzfsbex8U 3:50 Ask Adam Savage: Favorite Recent ILM CG or Artwork
qvU5PZgSowk 9:06 Ask Adam Savage: "Was ILM Your Dream Job or a Stepping Stone?"
ZN-9DiI4jr0 10:11 Ask Adam Savage: Digital vs. Practical Effects, Boredom and Never-Seen Props
qvBAoxuf9zE 11:36 Ask Adam Savage: ILM Hiring Practices and Prop Policies
j26Xc4ngIaM 8:33 Ask Adam Savage: Most Valuable Skill Acquired at ILM
PhkZQeTQ6oM 5:31 Ask Adam Savage: How Ridiculous Was Filming the MythBusters Herding Cats Episode?
2GGkWdLm7PI 10:19 Ask Adam Savage: My First Day and Movies at ILM
IkawOT_Cg-s 8:41 Ask Adam Savage: Would You Have Changed Anything About MythBusters?
mxPQBIu_Hro 8:43 Ask Adam Savage: Were Any Myths Deemed Too Simple to Test on MythBusters?
AkBxe0DXzZs 7:07 Ask Adam Savage: Most Obscure Skill Acquired During MythBusters
4u7I-6AcA00 6:38 Ask Adam Savage: "Which MythBusters' Result Impacted Your Everyday Life?"
kaI-Ri7Ias4 7:23 Ask Adam Savage: What Projects Are Best to Attract New Makers?
HMzg0bVY2Ds 11:09 Ask Adam Savage: Key Quality in a MythBusters Reboot
8wG-gr_IRHQ 9:34 Ask Adam Savage: Most Surprising MythBusters Result
rDnGHwqnfyM 10:33 Ask Adam Savage: M5 vs. M7 Myths
GC4oa5YKN-M 6:35 Ask Adam Savage: "Are You a Ghostbusters II Fan?"
VEgqBVdsJZg 9:34 Ask Adam Savage: "Do You Own a Screen-Used Prop from Ghostbusters?"
DUsBoLT1Yv8 5:25 Ask Adam Savage: What Is a "Maker"?
-AvhYMPvPR4 5:45 Ask Adam Savage: Is Adam an Adrenaline Junkie?
gGzGX8YfSaw 6:53 Ask Adam Savage: Prototyping on MythBusters
N-XpBXr7YHQ 12:00 Ask Adam Savage: Ghostbusters' All-Female Reboot, Abandoned Props and FX
MOsOlF0-Gas 7:01 Ask Adam Savage: The Myth That "Got Away"
MhPrj-32Y88 9:05 Ask Adam Savage: "Do You Have a Bill Murray Story?"
StQcRsCkIjw 8:13 Ask Adam Savage: Those Scripted MythBusters Blueprint Segments
_9bfOcx4h-4 8:35 Ask Adam Savage: Favorite Wood for Building Storage
qSDzoOQxG-I 9:08 Ask Adam Savage: Exciting Maker Tour Discoveries
I5ol3lM2HDo 9:56 Ask Adam Savage: Pros and Cons of "Worldwide Fame"
iUNnmuMkGxs 7:44 Ask Adam Savage: "Is There Anything Too Dangerous to Repair Yourself?"
fsb8NxzNozo 4:31 Ask Adam Savage: LEGO MOCs
-8JUTYj7Q30 16:02 Ask Adam Savage: What MythBusters DIDN'T film, the Bomb Range and Simultaneous Myths
wSoCA0bO1_M 11:19 Ask Adam Savage: "Did MythBusters Influence Your Current Creative Problem-Solving?"
cgFmFqh90PU 13:02 Ask Adam Savage: MythBusters' Unsung Heroes
zyFAlep9CA4 8:48 Ask Adam Savage: Grossest MythBusters Myth
OSMLCySKMWo 8:23 Ask Adam Savage: First Thought When Jamie Asked Me on Board
U0QqMQ2Makg 12:12 Ask Adam Savage: "Was MythBusters Intended to Be Educational?"
mlBnrx5Z3Ww 9:55 Ask Adam Savage: "Do You Lament Being a Generalist?"
EDLU4k9R81c 9:00 Ask Adam Savage: "Why Do You Refuse to Acknowledge Some Indiana Jones Films?"
jp2wZ4q68FQ 5:45 Ask Adam Savage: Tips for Projects in a Limited Work Space
a6voK4rDiUM 13:43 Ask Adam Savage: Stolen Indiana Jones Whip Update
HypnuwjJUgY 5:37 Ask Adam Savage: Ideal Qualities in a Collaborator
h-5hIMkLxRs 12:23 Ask Adam Savage: Essential Pieces for Indiana Jones Cosplay
hjINCIPY4Wo 4:58 Ask Adam Savage: Organizing Tupperware
nTmpDF3VtwQ 11:33 Ask Adam Savage: Favorite Scene from Raiders of the Lost Ark
pZ2qSzZPyPw 11:40 Ask Adam Savage: Fondest Berkeley Repertory Memories
DQnS5SdZ9BE 3:39 Ask Adam Savage: Preferred Sketchbook
hjx2vezyhj4 3:43 Ask Adam Savage: Most Underappreciated TV Series
B9aa__BK8Zk 16:30 Ask Adam Savage: What Books Changed Your Way of Thinking?
wldwf-9B-Us 13:17 Ask Adam Savage: Researching and Recommending Tools
Af-jExEh4SU 3:39 Ask Adam Savage: Best Pen for Writing Labels
nIP3AI8DsG0 4:47 Ask Adam Savage: How to Find Garage Kits
AEHsxb_rSAk 4:56 Ask Adam Savage: Destigmatizing Hearing Loss
4BJAKHv-NLE 13:56 Ask Adam Savage: "Funny Stories about Grant Imahara"
XGFSn2Xm8ks 1:00:23 Ask Adam Savage: "Did you ever meet George Lucas?"
H4-jGNoMlWU 49:07 Ask Adam Savage: "Do you ever just chill out in your shop?"
7COvFaFTAy4 40:33 Ask Adam Savage: "Do you ever feel imposter syndrome?"
Ki0g7I3mASA 28:52 Ask Adam Savage: "Are You an Educator or Entertainer?"
Zt3649jao68 2:49 Ask Adam Savage: What Full-Size Working Prop Would You Want to Make?
nZZlEbttaO0 5:37 Ask Adam Savage: Career Paths for Makers and Polymaths
HMsKjzt7Gpk 3:01 Ask Adam Savage: What's the One Thing You'd Save in a Fire?
aWFHIfmzTYE 2:59 Ask Adam Savage: Preferred Shop Stools
XHHp3dW-TCw 3:46 Ask Adam Savage: Costume Storage
cHEq3HkZf-8 4:49 Ask Adam Savage: Working With Other Makers
1jx_O0no0pY 1:12 Ask Adam Savage: What is Savage Builds?
o_xUJfX-Hy0 4:17 Ask Adam Savage: A Movie You Wish You'd Worked On
tZ4Uyo3oIg4 4:48 Ask Adam Savage: Least-Used but Most Important Tool
5i1zcFjjYAE 3:49 Ask Adam Savage: The Role of Cardboard in Making
qD528UrBNLA 3:53 Ask Adam Savage: How to Interact With Famous People
IDcnw167dN0 2:06 Ask Adam Savage: Connecting to Crafting
qjJwbi8yADM 1:34 Ask Adam Savage: Most Difficult Myth
R9Qm5DQAuag 2:02 Ask Adam Savage: Failed Explosions on MythBusters
exCrXc8hAAA 2:32 Ask Adam Savage: How Does Adam Savage Decide Next Projects?
MwsLhlVlaZc 2:32 Ask Adam Savage: Adam's Favorite Cosplay
1XFhm8nry-Y 2:29 Ask Adam Savage: How to Deal With Success
yw8gFo2DJvM 3:37 Ask Adam Savage: The Role of Social Media
OO8xF-kgMJU 1:55 Ask Adam Savage: Nourishing Kids' Interest in Science and Art
8VDiTgL0qL4 2:15 Ask Adam Savage: Cosplaying as a Celebrity
GRSq75EdzmE 3:11 Ask Adam Savage: Ah-Ha Moments
e3YB3z0YIh8 1:18 Ask Adam Savage: Small, Extra Arms vs. Prehensile Tail
Nx73IDlgSF4 2:34 Ask Adam Savage: Favorite Guest on MythBusters
CaFR4vGKrvc 1:50 Ask Adam Savage: Which Tools Don't Work?
Xwpufxg__6A 1:28 Ask Adam Savage: Best Adaption of a Book
-BM_ghu0qq8 4:03 Ask Adam Savage: Worst Injury While Making?
kmHgfmkEwDE 3:25 Ask Adam Savage: Getting Over Maker's Block
8Cu9Zxr-fjg 3:43 Ask Adam Savage: Favorite Shop Tools!
jY3O8Kt2IVg 3:09 Ask Adam Savage: Favorite Things to Take Apart
X-UWkbx3ppU 2:24 Ask Adam Savage: State of Mind for Making
lgQ2N-dFgQc 2:01 Ask Adam Savage: Overcoming Large Learning Curves
LImkIx2wasw 2:12 Ask Adam Savage: Old vs New Technology
4t1B0iH4jb4 2:20 Ask Adam Savage: Tips for Kids to Become Makers
GVnoTrJNAtc 3:07 Ask Adam Savage: Who Cleans Up the Mess after Builds?
yzYS9yEcJAY 2:48 Ask Adam Savage: Giving Ourselves More Credit
9okIF3RZRcc 2:36 Ask Adam Savage: Recovering from a Mistake
J-9dGGKAQPE 2:15 Ask Adam Savage: Biggest Explosion?
0PQul0uH_oc 2:43 Ask Adam Savage: Most Satisfying Recent Project?
iCl8ek0gLPA 3:44 Ask Adam Savage: Being Dropped in Bubble Wrap?
40dx0L5t8-s 2:31 Ask Adam Savage: What Do You Do After Work?

NM9Hxpk_tPo 18:32 Adam Savage's One Day Builds: Annular Cutter Storage!
SGUtT2Lo944 1:16:13 Adam Savage's One Day Builds: AT-AT Walker Garage Kit!
RfNIlmKXOWg 32:40 Adam Savage's One Day Builds: Custom Poker Chip Carrier!
DPTu47FBkpg 46:04 Adam Savage's One Day Builds: Chinatown Stunt Knife (Corridor Crew FX Challenge!)
# bJp3B3jZkhE 36:16 Adam Savage's One Day Builds: Aliens Motion Tracker Prop!
# Arm0Mvx45Us 12:28 Adam Savage's One Day Builds: Adding Casters to Costume Cases!
# A4v97zfHzcU 28:44 Adam Savage's One Day Builds: Aliens Welding Torch!
# SSvcKIa1Uws 1:02:37 Adam Savage's One Day Builds: Moby Dick Diorama Maquette!
# K0FcUntHyKw 58:02 Adam Savage's One Day Builds: Razor Crest Mods, Part 1!
# GtLCJ2b6XEc 21:46 Adam Savage's One Day Builds: Mandalorian Vibroblade Kit!
5RL7EYSbc_g 55:52 Adam Savage's One Day Builds: The Matrix EMP Switch! Blitzway's 1/4 Scale Apollo 11 Astronaut!
wmjZL8nm3MM 46:58 Adam Savage's One Day Builds: Inglourious Basterds Knife Replica!
zR4X775Y-9E 34:51 Adam Savage Reacts To His First One Day Build!
S5o9NORnF1o 57:32 Adam Savage's One Day Builds: Papier-Mâché Mask!
# FuMf6-9ZsJo 40:29 Adam Savage's One Day Builds: Vintage Bicycle Restoration!
# rL7k8kjIdow 1:03:48 Adam Savage's One Day Builds: James Bond's Spectre Cane!
# NMEkK9cdEqg 30:44 Adam Savage's One Day Builds: RoboCop 2's Cain Stop-Motion Puppet!
# jOXidWIB-gY 20:13 Adam Savage's One Day Builds: Drill Press Modifications!
# 4GcuGnjv2Aw 29:01 Adam Savage's One Day Builds: Special Effects Syringe!
9LVFVTMleio 46:32 Adam Savage’s One Day Builds: Head-Mounted Dart Blaster!
# YIbb-Bck8wc 46:43 Adam Savage's One Day Builds: Blade Runner 2049 Helmet Parts!
# uzF351VecZA 40:38 Adam Savage's One Day Builds: Painting The HasLab Razor Crest!
xHS83PFsek4 24:20 Adam Savage's One Day Builds: Weathering the Blaster Vault!
# NYkF5EwaDBU 19:29 Adam Savage's One Day Builds: RoboCop 2's Cain Robot!
# hX5Qsrpj9Ao 31:26 Adam Savage's One Day Builds: Surface Plate Cover
V0kQDCVU_48 36:38 Adam Savage's One Day Builds: Mini Apple Box!
IeFIhKaJEFo 31:34 Adam Savage's One Day Builds: Dune Sand Compactor Replica!
uEcx6yb5yXQ 41:33 Adam Savage's One Day Builds: Magnetic Lathe Chuck!
ykr2IMSYDMc 30:43 Adam Savage's One Day Builds: Ping Pong Ball Launcher!
jQSTJSniXKM 32:25 Adam Savage's One Day Builds: Fixing the Mill's Motor Fan
3qOJakmE7Pk 33:52 Adam Savage's One Day Builds: Mythbusters Blueprint Display with Kyle Hill!
gaJgfS_2LZ4 32:36 Adam Savage's One Day Builds: Gauge Block Storage Rack!
_2kmXLP_uXg 33:13 Adam Savage's One Day Builds: Machining Mystery Prop!
m6VYpHdBG84 15:48 Adam Savage's One Day Builds: Weathering a Sword Blank!
# yzy_8tT4TO0 24:35 Adam Savage's One Day Builds: Miniature Astronaut Display!
# 9TZ5yflpmq4 42:15 Adam Savage's One Day Builds: Ghostbusters Ecto Goggles!
# 9yzg3a91F5o 45:20 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 4)
# 2O92DT4x0tg 1:04:21 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 3)
# HAirnq80dcQ 1:28:50 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 2)
# OshKZcTFEZY 32:21 Adam Savage's One Day Builds: Ghostbusters: Afterlife Hand Prop!
# 0FKxM-zNZBk 1:10:32 Adam Savage's One Day Builds: EPIC Spacesuit! (Part 1)
# dloSR3a57IA 43:24 Adam Savage's One Day Builds: Ghostbusters Proton Pack!
# NxL4SLzAkao 1:27:29 Adam Savage's One Day Builds: Aliens Colonial Marines Armor!
# iEaf3t3KUyg 27:25 Adam Savage's One Day Builds: Hasbro Mandalorian Helmet Repaint!
# zginChewoKU 31:35 Adam Savage's One Day Builds: 2001 Spacesuit Helmet Repair!
-imr0Cy7NQY 39:42 Adam Savage's One Day Build: Acrylic Display Box!
xePxGWc_mH0 34:00 Adam Savage's One Day Build: Fake Beard Wiring!
# # ijosoNfEBP4 37:21 Adam Savage's One Day Builds: Aliens Colonial Marines Shoulder Lamp!
# iiZ5rh3Uo1o 1:14:52 Adam Savage's One Day Builds: Excalibur Henchmen Armor!
# dlCiIAS6fsA 26:51 Adam Savage's One Day Builds: MacReady's Hat from The Thing!
NNNcGCZHvxE 53:53 Adam Savage's One Day Builds: Foamcore Architectural Model!
ajHmyFX9zvk 24:47 Adam Savage's One Day Builds: Workbench Vise Upgrade!
OUHShx43JVU 1:01:48 Adam Savage's One Day Builds: Miniature Piano!
WAxxrBF5V3M 1:16:33 Adam Savage's One Day Builds: Famous Gemstones Collection!
7D8sXR0ozeE 1:24:21 Adam Savage's One Day Builds: Animatronic Bear Head!
# 0znjWy-Tr4Q 55:55 Adam Savage's One Day Builds: OneWheel Electric Skateboard Mods!
# TjvX8GiYA5w 44:30 Adam Savage's One Day Builds: Monster Puppet Kit!
QWBFHoJrosY 35:49 Adam Savage's One Day Builds: Star Wars Acrylic Paints Rack!
l4Uew4czJ1o 41:51 Adam Savage's One Day Builds: Queen Elizabeth's Buzzer Bell!
cLrqogSndWs 1:09:07 Adam Savage's One Day Builds: Epoxy Headcast Helmet Skullcap!
# DcNPYycz4nU 57:13 Adam Savage's One Day Builds: Mandalorian Blaster Paint and Weathering!
# Cj0uLKibPW4 1:37:37 Adam Savage's One Day Builds: Mandalorian Amban Blaster Replica!
4ufQUvxpuAo 36:53 Adam Savage's One Day Builds: Car Engine Model Kit!
r0aae4df3Aw 37:18 Adam Savage's One Day Builds: LEGO Blade Runner Spinner Model!
W1DrW_f_vNo 32:11 Adam Savage's One Day Builds: Hyperdodecahedron Model Kit!
drLGYpPbrZg 53:36 Adam Savage's One Day Builds: Painting Iron Man Armor, Part 2!
# 2tQf7cruUMA 37:37 Adam Savage's One Day Builds: Galloping Horse Animation Machine!
CtGMBOqs0us 1:06:18 Adam Savage's One Day Builds: Painting Iron Man Armor!
# HqUlPoxrzjM 40:02 Adam Savage's One Day Builds: Hellboy Samaritan Replica Finale!
ND4Y0gx4aTI 1:05:27 Adam Savage's One Day Builds: Iron Man Armor Boots!
# zWaQNVGhuyU 30:56 Adam Savage's One Day Builds: 3D Print UV Curing Oven!
eJUbdNhdhkk 1:46:32 Adam Savage's One Day Builds: Remaking The Crown!
# I5dH96JunrQ 55:55 Adam Savage's One Day Builds: Resin 3D Printer Station!
jmYBQSqXnQ4 47:57 Adam Savage's One Day Builds: Shop Dust Collection System!
of9qY62tWKo 40:53 Adam Savage's One Day Builds: Tabletop Maker's Vise!
# ATfL9JQ--JE 1:03:05 Adam Savage's One Day Builds: Hellboy Samaritan Prop Barrel Rifling!
# 5NH1-3NBcOk 1:28:31 Adam Savage's One Day Builds: Micrometer Gauge Box Set!
# jfUL73pRYq4 1:02:53 Adam Savage's One Day Builds: Studio Ghibli Diorama!
lUwMEjh2-78 1:12:07 Adam Savage's One Day Builds: St. Edward's Crown
# 9MLQEC2Hv28 24:51 Adam Savage's One Day Builds: Wire Storage Solution!
# r93bWMzGo60 1:14:57 Adam Savage's One Day Builds: Custom End Tables!
# Ic2S9ySxO0I 11:26 Adam Savage's One Day Builds: Lathe Collet Storage!
apeZO6C0ZeA 51:52 Adam Savage's One Day Builds: God of War's Leviathan Axe!
# sbqytCVtQb4 21:09 Adam Savage's One Day Builds: New Drill Press Table!
# 4iIBa0TLe9E 33:32 Adam Savage's One Day Builds: Mercury Spacesuit Wrist Rings, Part 2
# fM9FtG01wMg 45:11 Adam Savage's One Day Builds: Spacesuit Glove Wrist Rings!
80YLonnG-Lo 28:24 Adam Savage's One Day Builds: Knight Lighter!
WQA-x2eYn5E 19:06 Adam Savage's One Day Builds: Custom Painting Shop Tools!
8Sqo8njgt_0 36:20 Adam Savage's One Day Builds: New Lathe Chuck!
2UeghPJrUxE 29:12 Adam Savage's One Day Builds: New Workbench Lights!
gCva75a8ATQ 18:30 Adam Savage's One Day Builds: Electronics Tool Cart!
# uY7zpvjLx4Q 1:17:58 Adam Savage's One Day Builds: Iron Man Mark I Helmet!
beGXa1TO6vo 1:47:53 Adam Savage's One Day Builds: Wookiee Feet!
# Vt0RxHzEhws 1:16:24 Adam Savage's One Day Builds: Iron Man Mark I Armor!
# WBWUxWoNI5o 1:23:25 Adam Savage's One Day Builds: Hellboy Samaritan Storage Display!
# eBAWHbi4THs 39:39 Adam Savage's One Day Builds: Hellboy Samaritan Full Teardown!
# N_tKi14mFrk 23:16 Adam Savage's One Day Build: Sticky Storage!
# JYWfikf-3DI 24:31 Adam Savage's One Day Builds: Chewbacca's Bowcaster!
# iuNjDzT6PWo 55:53 Adam Savage's One Day Builds: Luke's Lightsaber!
# Ww7Ts37eN2g 42:55 Adam Savage's One Day Builds: Hellboy Samaritan Bandolier!
# SutetC6n9so 42:04 Adam Savage's One Day Builds: Hellboy Samaritan Carrying Case!
# 4GehjvyAsZs 48:48 Adam Savage's One Day Builds: Baby Yoda Mod and Repaint!
wnMH1s36WXo 41:14 Adam Savage's One Day Builds: How to Make an Apple Box!
4JQ4O1SPHSY 56:14 Adam Savage's One Day Builds: How to Build a $5 Sword!
# aLI-6SmkJLU 1:02:15 Adam Savage's One Day Builds: Han Solo's Holster Belt!
# ziIKLeacBDo 18:52 Adam Savage's One Day Builds: Hellboy's Samaritan Prop, Part 4!
WfJtqnSexss 29:01 Adam Savage's One Day Builds: Restoring a Fabric Chair!
AumnIehXwyI 35:57 Adam Savage's One Day Builds: Staple Sorter and Organizer!
# csu4jQNFfzA 32:44 Adam Savage's One Day Builds: Drafting Tools Sorting Drawer!
# 1NWAxkDZ9xs 34:13 Adam Savage's One Day Builds: Hellboy's Samaritan Prop, Part 3!
# gygyNt2AnKA 26:24 Adam Savage's One Day Builds: Giant Swiss Army Knife Repair!
# inQ16HamIWk 52:25 Adam Savage's One Day Builds: Hellboy's Samaritan Prop, Part 2!
# lsXLGT5N2uo 1:17:55 Adam Savage's One Day Builds: Ghostbusters Ecto Goggles + Vacuum Former Rebuild!
# Pb1BpA7QN3U 47:41 Adam Savage's One Day Builds: Hellboy's Samaritan Prop!
# HWnDC6KzLg8 28:19 Adam Savage's One Day Builds: LEGO Mandalorian Razor Crest!
# chbZJAJ9y68 25:33 Adam Savage's One Day Builds: Miniature Shipping Container!
# 7aGfiNy9Oos 28:23 Adam Savage's One Day Builds: Table Saw Fence Upgrade!
# BEVEYvAO3rI 21:32 Adam Savage's One Day Builds: Car Seat Dog Bed!
# 8PEc5blz_fY 21:20 Adam Savage's One Day Builds: Planer and Spindle Sander Station!
# BbrQ4OX-1-E 32:29 Adam Savage's One Day Builds: New Cut and Sew Station!
# XVEww6Ylw5c 41:23 Adam Savage's One Day Builds: Thread Tapping Guide Block!
EXaDxl60rTQ 54:24 Adam Savage's One Day Builds: Brass Watering Can!
# OxkszitNWN8 17:46 Adam Savage's One Day Builds: Upgrading Captain America Shield!
# lp85yyPSP10 43:29 Adam Savage's One Day Builds: Custom Workshop Apron!
# ivaxOv25RaI 16:13 Adam Savage's One Day Builds: Letter Stamp Holder!
J170jeH0yXU 34:59 Adam Savage's One Day Builds: Foam Prop Safe!
# BTGN5QNyA-8 42:41 Adam Savage's One Day Builds: Machinist Tool Drawers!
# 4MVxJNawefM 23:26 Adam Savage's One Day Builds: Tintype Photo Clamp for Gary Oldman!
# m-ayU2GCQ_Q 34:50 Adam Savage's One Day Builds: Drill Press Modification!
# _KfaSiD-7iY 38:35 Adam Savage's One Day Builds: Lathe Chuck Rolling Rack!
# fru2G4bGL14 40:30 Adam Savage's One Day Builds: Lathe Tailstock Repair!
98MCz9gQaiE 32:41 Adam Savage's One Day Builds: Giant Nut and Bolt!
# R-De84JfQBU 24:26 Adam Savage's One Day Builds: Spacesuit Display Stand!
# eiQuBonhGiw 31:00 Adam Savage's One Day Builds: Workshop Filming Slate!
# EWXcnVTY3pk 46:48 Adam Savage's One Day Builds: Air Tools Sorting Boxes!
# ieDYlkJTNYI 20:38 Adam Savage's One Day Builds: Custom Pistol Whip Controller!
hIs3lioHoAo 21:44 Adam Savage's One Day Builds: Headphone Rack!
qE68mYkpZvQ 31:02 Adam Savage's One Day Builds: Portable Audio Recorder Rig!
# oSHoo_thI2Y 37:24 Adam Savage's One Day Builds: Front Porch Table!
# TsWG4nSi-Hs 42:45 Adam Savage's One Day Builds: Stitching Pony Clamp!
# frwLir1A_qg 42:55 Adam Savage's One Day Builds: Making a Stable Workbench!
# ritwf-_iOlg 1:08:55 Adam Savage's One Day Builds: Mini Chop Saw!
# -xWGRVL-ExA 18:38 Adam Savage's One Day Builds: Mini Machine Vise!
# 65r_1TzJXaQ 50:07 Adam Savage's One Day Builds: Rhombic Dodecahedron with Matt Parker!
# vOROGorDG6s 33:34 Adam Savage's One Day Builds: Fiber Optic Microscope Ring Light!
# A3-9Vk_2be4 32:31 Adam Savage's One Day Builds: NASA Retro-Reflector Replica!
TT8PzFaZ0Zw 36:54 Adam Savage's One Day Builds: Lithium Ion Battery Charging Station!
# I7U-QCTS9Os 39:29 Adam Savage's One Day Builds: Repairing Vintage Aviators!
nCrB0FnW__s 28:19 Adam Savage's One Day Builds: Movie Sword Rack!
# 0nLlCmZspVM 20:57 Adam Savage's One Day Builds: Tweaking the Table Saw!
# yWRLz_r_d3A 33:32 Adam Savage's One Day Builds: Little Thwacker Hammer!
# ZNwvjaIW-pU 1:00:10 Adam Savage's One Day Builds: Making a Die Filer Machine!
# eVnWyEvT-KY 27:09 Adam Savage's One Day Builds: Lathe Infrastructure Upgrades!
# PLHUcP8LfkM 1:28:25 Adam Savage's One Day Builds: LEGO International Space Station!
# jPAGZpNZrwU 54:21 Adam Savage's One Day Builds: How To Build a Box!
# z_Ti4GP0ntE 1:07:08 Adam Savage's One Day Builds: Refrigerated Cooling Suit!
# ZjpPgv9XtJA 19:46 Adam Savage's One Day Builds: Thermal Detonator Kit!
# SgCJeoDNmYU 41:21 Adam Savage's One Day Builds: Poker Table!
# x8YTMPuvTGw 33:49 Adam Savage's One Day Builds: Dinosaur Skull Lamp!
# Bw-ttd_EELA 13:54 Adam Savage's One Day Builds: Rickshaw Carriage!
# TqWhLPsEJE8 23:21 Adam Savage's One Day Builds: A Fake Can of Beans!
# 8uGS11yuVyo 34:37 Adam Savage's One Day Builds: Portable Soldering Station!
# JMv0PlMKkbs 20:54 Adam Savage's One Day Builds: Gaslamp Lantern Prop!
# 6ps4vbQ6Tk0 28:02 Adam Savage's One Day Builds: Workshop Hardware Storage!
# 3JRbGcyPUnk 26:11 Adam Savage's One Day Builds: Custom Beat Saber Hilts!
# MP5pbJ6Ajjc 24:32 Adam Savage's One Day Builds: Space Camera Shroud!
kjxdWnUBmpU 37:16 Adam Savage's One Day Builds: No-Face Animatronic Mouth!
# Dt6BQPNGGTw 41:52 Adam Savage's One Day Builds: Star-Lord Cosplay!
# vqqEFEgx-ZI 35:00 Adam Savage's One Day Builds: Star-Lord's Walkman!
3jdF1yVBWdc 20:09 Adam Savage’s One Day Builds: Project Egress Apollo Hatch!
Srg47mr4X5A 14:01 Adam Savage's One Day Builds: LEGO Lunar Lander
# Bh6C2O77EpI 14:39 Adam Savage's One Day Builds: Cave Museum Display!
# YZV4A4Kl0yM 28:20 Adam Savage's One Day Builds: Hero Prop for TV Show!
# 2NYtPWhdhhQ 15:54 Adam Savage's One Day Builds: Iron Man Armor Stand!
# 7uS7A4x31PY 34:16 Adam Savage's One Day Builds: Scratch-Built Spaceship!
# vCi5usulDIo 1:20:48 Adam Savage's One Day Builds: Swordmaking at Weta Workshop!
# 7oGslDjTnHI 29:33 Adam Savage's One Day Builds: Mortal Engines Hand Cannon!
# 6iIZ9rnS6HU 1:02:24 Adam Savage's One Day Builds: Eric Idle's Guitar Case!
# ZfvtGrhYk0I 26:44 Adam Savage's One Day Builds: Kit-Bashing and Scratch-Building!
# MxLOoriXkMc 46:22 Adam Savage's One Day Builds: Overengineered Bottle Opener!
# GEhBPI2QVBI 0:34 Last Call for Adam's One Day Builds T-Shirt!
# QCBcWm85gWo 15:33 Adam Savage's One Day Builds: Kit-Bashing a Robot!
# BpaYqFd5S5c 0:48 Adam Savage's New "One Day Builds" T-Shirt!
# WnJDYjbWCwI 1:10:53 Adam Savage's One Day Builds: The First Spacesuit!
# AXzurpmc8SE 39:15 Adam Savage's One Day Builds: Everyday Carry Bag!
G7MDrUG4cws 36:59 Adam Savage's One Day Builds: 1000 Shot NERF Blaster!
# 9XB4Be6TjHU 55:21 Adam Savage's One Day Builds: Snub-Nosed Blade Runner Blasters!
# JL3uZ88vA_0 19:54 Adam Savage's One Day Builds: Custom Workbench LED Lamp!
F48rk7h-GDo 35:33 Adam Savage's One Day Builds: Foam Ringwraith Gauntlet!
# wl558EoTuEQ 30:19 Adam Savage's One Day Builds: Blade Runner 2049 Binoculars!
H9L3pX8zTPE 10:27 Adam Savage's One Day Builds: Cave Bathroom Upgrade
# 8qvlpRBeMNY 25:19 Adam Savage's One Day Builds: Foam Cosplay Sword!
# BGlcF4Bpg78 37:01 Adam Savage's One Day Builds: Excalibur Sword!
# dqmF2_h8icM 38:35 Adam Savage's One Day Builds: A Better Tape Dispenser!
# 9xpPXpnnCNI 39:25 Adam Savage's One Day Builds: Chewbacca and C-3PO!
# 1gJ4_Hc17cM 35:38 Adam Savage's One Day Builds: Chewbacca's Bandolier!
cwOXSXkW-uE 31:49 Adam Savage's One Day Builds: Custom NERF Rifle
-HfaLqmRO1k 21:52 Adam Savage's One Day Builds: Ping Pong Machine Gun!
# M4M3I0nXEMI 23:41 Adam Savage's One Day Builds: Vsauce Glasses Hack!
G96YQQ7vW8w 20:26 Adam Savage's One Day Builds: Pedal-Powered Strandbeest!
# 7JrCejRYGAM 56:27 Adam Savage's One Day Builds: NASA Spacesuit Parts!
# L9O3KWrvxKA 42:47 Adam Savage's One Day Builds: Totoro Costume!
0cQ91lO4pH0 30:03 Adam Savage's One Day Builds: Bear Costume!
# qSr_qLkVqDw 19:08 Adam Savage's One Day Builds: Kylo Ren's Costume Gorget!
# 3KpdjGlHB30 12:44 Adam Savage's One Day Builds: Iron Giant Bolt!
ssxCQuv3KzE 13:45 Adam Savage's One Day Builds: Foamcore House!
U46Yo_6z_F4 21:30 Adam Savage's One Day Builds: LEGO Sisyphus Automata!
# gcDCZ2TmTck 29:20 Adam Savage's One Day Builds: Hellboy Sword!
# 8UmBKWQ52oQ 27:53 Adam Savage's One Day Builds: Puppy Car Seat!
# JYwNuP7cwJs 35:37 Adam Savage's One Day Builds: Making a Puppet!
# jaVi06DaTk0 37:21 Adam Savage's One Day Builds: Star Trek Captain's Chair
# LHITcrnGn1U 1:08:35 Adam Savage's One Day Builds: Cylon Models with Battlestar Galactica's Aaron Douglas!
# CBHQ7lQGOf0 1:00:04 Adam Savage's One Day Builds: Cosmonaut Model Kit
# QWiqr-lwYA0 1:07:23 Adam Savage's One Day Builds: Barbarella's Space Rifle
# Et-JvYrQ84o 30:39 Adam Savage's One Day Builds: Custom Multi-Tool Belt Holster
O1--0DLJv-8 25:10 One Day Builds: Customizing Adam's Hero Sword
# lPLvkrtqkJ8 33:00 Adam Savage's One Day Builds: Traveling Beaver Box
# 4sCReGjfZ_A 16:37 Adam Savage's One Day Builds: Han Solo's DL-44 Blaster
# 0JnTThZMJAg 13:12 Adam Savage's One Day Builds: Strandbeest Model Kit Fitbit Zip Wireless Activity Tracker
# YXzxEqdvuIE 31:11 One Day Builds: Adam Savage Demonstrates Weathering Tricks Mophie Juice Pack Helium for iPhone 5
# -tUHJnl8qPM 32:11 One Day Builds: Adam Savage Makes Something Wonderful from Scratch Sony NEX-5R Mirrorless Interchangeable Lens Camera

# Tasting History

lYZq2ZnwPZA 16:02 Irish Soda Bread from 1836
IfcQcAPt5vk 18:58 Feeding a Medieval Outlaw
NjH7ssGctuM 18:21 School Lunch from the Great Depression
_LRE4dUgbLM 11:25 Moroccan Berber Pizza - Tabadirt / Medfouna
4DPu-Ve_luU 20:29 The History of Ukrainian Borshch
02V5dqRjNfw 16:46 Medieval French Toast
THcfqRk4NyI 17:22 The King of Siam's Massaman Curry
zBurkdTyJhE 17:07 Surviving on Leather
YfKdaXTwB9A 19:46 Dinner with Attila the Hun
KMWrk_94L8Y 0-2:33,3:58-18:44 The Great Molasses Flood | Boston Brown Bread
JxUSzM29Y3M 15:47 Al Capone's Soup Kitchen
LlBS-BgqN4E 19:06 The First Fad Diet of Georgian England
gK4DMt8ARyU 21:34 Brewing Mesopotamian Beer - 4,000 Years Old
jQTPJ1WrBBo 17:55 History of Latkes
aEbO80_4uyM 15:05 What the heck is Wassail?
CPs0WHtqZgQ 18:09 Christmas in the WWI Trenches - Xmas Rations
Tw98kP3xrfk 19:49 The Marie Antoinette Diet
qvOTev_r4-8 12:55 When Coffee was Illegal
B7A8GOgAm54 16:45 Making Medieval Haggis
UpBv8H0G6ZY 0-2:15,3:20-18:34 Japan & the Portuguese Barbarians
ixTkzBuD-cw 19:08 The true story of the First Thanksgiving
ry5Du60WPGU 16:18 What did WWII Soldiers Eat?
MrKafmzGNJc 20:18 Macaroni & Cheese from 1845
1QRNJB29p6o 0-4:05,5:09-18:29 Feeding King Tut
fkJPqxelmkY 19:50 Sin Eaters & Funeral Biscuits
Qud0SI5ZgC0 18:51 1000 Year Old Jalebi (Zalabia)
I4ZTRjA7NhU 16:49 History's Real Macbeth
APeVpwejxWQ 20:50 Ancient Roman Jellyfish for the Black Banquet
DUAayg3D0XA 0-3:31,4:39-20:39 Pemmican: History's Power Bar
jBRVvMm3xv0 19:41 The Medieval Saint Diet
AjuGvTBPoy0 19:47 Whisky - Scotland's Water of Life
XQJkasR3Iak 16:28 The Original Caesar Salad from Mexico
lABWCEfeEyw 20:11 Feijoada - Brazil's National Dish
IVpiIa_Txws 17:30 Growing an Ancient Roman Garden
h_xqJtGWvhg 21:19 Catherine the Great & the Volga Germans
exTSP163sRg 21:16 Debunking the Myths of Leonardo da Vinci
R-dPIBUvVC8 0:00-1:48,2:53-17:24 Byzantine Honey Fritters
hIKx0G4ghpA 18:44 The Noble Origins of Afternoon Tea
SoFxrwuMuQs 20:42 Medieval Table Manners
iWlqxGQXZx8 20:24 A History of Ketchup
Kz-VpoNEWXM 17:38 A History of Tacos
zN1bzdxZdbg 17:59 The Absinthe Murder
OnTtA9z3ZeQ 16:52 The Day the Viking Age Began
FPi0RiAsegQ 13:13 What is Gruel?
KaTjWWJSei0 0-1:46,2:45-15:54 When Potatoes were Illegal
2ZcrScIlaQ4 20:26 The History of the Wine Glass
o9-rCHqPLj4 17:30 The Ninja Diet of Feudal Japan
CsjL0wBINnI 17:22 1950's Fish Pudding
S5bHN6UYiTA 13:32 Ancient Greek Breakfast - Teganites
0Uot4uVKrVk 16:56 Victorian Ice Cream & The Queen of Ices
MjjEjf3TI0U 16:24 A Tudor Salad for May Day
9NEyzsxjc2w 18:28 Anzac Biscuits from World War One
7hYBesohRK0 24:31 Dining First Class on the RMS Titanic
bbCD6zRHfbg 10:07 Punch Romaine from The RMS Titanic
qJ3gqoAaHG8 21:20 The Titanic's Crew Member Experience
GanHDpGstZI 20:18 Titanic's Second Class Experience
ob-TBojkaxw 10:12 The True Story of Titanic's Baker
JbmHZbTpoDY 19:24 Dining Third Class on the RMS Titanic
SGf_0_2Ji5I 21:08 Medieval Irish Food: Peasant to King
MNIrP_aqwQY 11:18 How to Make Coffee a Better Way
ux5VjS7o2gA 16:54 How the Doughnut got its Hole
KTVPV-15GL0 16:10 Hardtack & Hell Fire Stew
q3LdGNl2veo 17:55 Medieval Mardi Gras
2-4SOrYtTS4 15:10 Secret Foods of the Spanish Inquisition
AuzIBemYVaQ 9:29 Victorian Vinegar Valentines
x3ku4JFvPx8 16:33 Ancient Rome's Naked Fertility Festival
UolBvOIodEg 18:35 Icelandic Volcano Bread - Rúgbrauð
16Ityys4dx4 17:14 Feeding a Templar Knight
Pl55tJHadZc 20:19 Samosas of Mughal India
GSGNiDjILiU 13:19 Ancient Rome's Wonder Medicine: Cabbage
B0-TCPUNdbI 22:00 1600s Chicken & Cherries with Ken Albala
Mda8Jetfnx8 0-2:55,4:03-16:34 Hogmanay Shortbread from 1779
Oy17ef4cEL4 14:26 Quick Panettone: A controversial recipe
JJnOtxBQEgo 16:09 A Bakewell Tart from World War One
CRH5DODIgE0 15:12 Victorian Mincemeat With Actual Meat
9pNb7iQXhdU 10:34 Smoking Bishop from A Christmas Carol
xtOhZEkyY2I 14:33 Aztec Sacrifice & Pozole
40uw6VkWpaI 15:41 The Incredible Spiced Wine of Ancient Rome
h2tY_qqTk-E 18:08 What did Genghis Khan eat?
htARnZjxQGs 14:58 Ancient Babylonian Lamb Stew
sIFlPc-TW94 14:24 The History of Pecan Pie
-__hMt0lKPc 10:03 Tasting Forbidden Flavors
EajBNo-rBJY 13:55 Ancient Roman Steak Sauce
oQVCBWZSdnY 14:39 1915 Yorkshire Parkin for Bonfire Night
4QGq4XpavQ8 17:17 450 Year Old Pumpkin Cheesecake
-ghf587Nihw 9:27 Johnny Appleseed: American Weirdo
Y3R_ljOuptM 16:19 Why Vampires Hate Garlic - A Transylvanian Recipe from 1580
tCD_eMscy0g 0-2:41,3:41-16:21 Apple & Cheese Pie from 1553
4Glo4KM5Q_M 11:35 Weird Wedding Traditions & the Wedding Sip
WdWcPvZg6Wc 17:57 Making A Wedding Cake From 1769
mdOPg-4_R60 9:21 Gladiator Gatorade
H3KANWtAHDc 16:45 Feeding a Roman Gladiator
dR846JS3zbA 18:22 Viking Blood Bread
QiTLyQjHtSw 11:25 Captain Kidd's Punch from 1688
jlhkXj4miZI 17:14 Feeding A Medieval Knight
fH25yRShofE 14:25 The Lost Episode of Tasting History: Prince Biskets
_cFCvZL-JGA 11:04 The London Beer Flood of 1814
D_FabMorrMU 17:31 Ancient Egyptian Tiger Nut Cake
-tmAAlfTOGY 14:59 Fannie Farmer & the Modern Recipe
LcnZAAoq5mg 11:28 The Sweet History of Lemonade
de93oyukEyY 15:59 Escoffier's Kitchen Revolution
TQmA7RyFr_g 14:35 The Cookbook of Nostradamus: Prophecies in the Kitchen
BhrmGARFEVc 6:46 Drinking History: The Man in the Green Hat
IZLYPbJaefA 17:59 Egypt's 28 Ingredient Hummus
FNg71yR7b-E 15:24 Pirate Guacamole & Bumbo
PIxN-pr3g7c 19:11 History's Most Expensive Spice: Saffron
h9xX78pauXQ 0-5:35,6:45-19:21 Japan's Edo Era Noodles (1643)
4eFHcfnWc70 19:26 The Talking Cows of Ancient Rome
BR7fywQ-vUE 21:28 A History of Ice Cream | A Recipe from 1789
qqAk9-00Z6o 16:19 Coca de Sant Joan & the Fires of Saint John's Eve
JLbej0adpKs 14:51 Fried Chicken Face-Off: 1911 vs 2021
Mbaz5P7kHfg 17:51 Toad in the Hole & the Cows of Scotland
hZFfs3sJamI 19:43 Adobo: Filipino or Spanish?
uNwXMvp9sCE 16:46 Ancient Greek Olives - Gifts from A Goddess
h6XvMKdD2tY 19:05 500 Year-Old Pizza VS Today
37O-by0BthQ 14:38 Korean Flower Pancakes - 17th Century Eumsikdimibang
zk0FUS3Oq8s 17:45 An English Manor for a Bowl of Stew?
giPXpKy2lQ0 18:52 Baking An Ancient Roman Cheesecake
NvQkpdFjqJY 16:29 Ancient Roman Honeyed Pork
k6VBdGAEJyc 17:12 How To Feed A Roman Emperor: Vitellius & the Year of 4 Emperors
jHpkqBFKmvA 3:27 I Quit
qj5vg2fjOtk 0-38,1:00-13:57,14:29-18:52 Feeding a Roman Legion | Posca & Laridum
DvBNqLUuHLI 19:08 Dragon Heart for a Viking King
FVIng1x_6BU 17:51 Fabulous French Feasts of the 1700s
n7T5abyBiUg 15:48 Queen Victoria's Easter Cake
S8KpFs1CHgw 19:28 Irish Stew From 1900 & The Irish Potato Famine
MaYPEvDuo1I 17:21 Aztec Chocolate - Blood & Spice
biE0ifWNfU4 16:49 Making Ancient Egyptian Bread
X-L2fVjnHFE 16:21 The Legendary Medieval Cockentrice | 1st Anniversary Episode!
RJsjHSyWlPE 1:17:50 Tasting History 1st Anniversary Q&A
0Ljm5i5N6WQ 17:38 Semlor: The Dessert That Killed A King
An6myivFE8A 17:10 Ancient Nian Gao | Lunar New Year Cake
oPTdSMOQRnY 18:31 How to Eat Like a Pirate: Hardtack & Grog
r38ZpdaAX8c 16:52 The London Gin Craze and Beyond
PhbkD0CuVtc 17:33 Béchamel & the Death of Monsieur Vatel
qtmOdxEVytA 14:42 Ancient Roman Fast Food Restaurants
zz0y1d6IIpY 18:21 Skinny Monk vs Fat Monk: Medieval Rule Breakers
7IYYhoO-hiY 18:04 A 4000 Year Old Recipe for the Babylonian New Year
7bsHOxQtBW4 15:47 Eggnog: A Christmas History
hNIvtkADcCA 14:08 Making Medieval Gingerbread
mvURMFzcIqc 16:26 Celebrating Saturnalia with Cato's Globi
s2JyN7JF8bs 19:35 Unwrapping Aztec Tamales | The Tamale Wars
2qauMSeqWpU 18:57 Figgy Pudding | A Victorian Christmas Tradition
zKa5GRu4LwE 16:16 What Did Medieval Peasants Eat?
FF0HnhuzGak 16:03 Pumpion Pie from 1670
1MAB-VVqjOE 18:47 Making Medieval Mead like a Viking
D-QHd4_1geE 18:42 Silphium: The Lost Aphrodisiac of Ancient Rome
1hHYk2evUZQ 1:00:31 Election Cake with Q&A
tpWdzXJObZ0 12:24 Soul Cakes & Trick-or-Treating
M2bh80b40D4 18:47 The History of Sugar Part 2 | Victoria Punch
ehVesZ0JS8Q 17:32 The History of Sugar Part 1 | Medieval Arabian Pistachio and Rose Candy
o4YmvQt29ko 17:46 Scappi's Renaissance Herb Torte
oqQzWg9pXmg 15:57 Spartan BLACK BROTH | Melas Zomos
uA98IonYvb4 15:40 Precedella | 1500's Pretzels made with Wine
eXWYmTf93Ms 1:02:28 Making Baked Pumpkin "Doughnuts" & Live Q&A
2FpEEb44suM 16:55 Yuanxiao from the Ming Dynasty
NPxjQetKPoo 15:26 Quesadillas Cernidas & Aztec Maize
luz_AqzDkKI 11:10 FARTS OF PORTINGALE | A Shakespearean Treat
6LynenQ5h2Y 16:56 The Strange Flavor of Parthian Chicken from Ancient Rome
CilkAVJLBUY 16:47 Loseyns - Medieval English Lasagna!
spjaUo2J4Nc 44:01 Tasting Canned Haggis & Q&A
SD3WKbXhm6M 15:13 The Wonderful History of Pancakes
3xZ0QJQpn1g 13:20 Payasam | Medieval India & Dessert for the King
XtkAU4juIZU 13:56 KYKEON | The Drink of Greek Heroes
IB1C0BL0ZlA 13:28 Civil War Bread Pudding
# 9apP8NYt9LA 1:06:29 Tasting History Q&A #1
LYBccRqsv6M 17:31 Making Hippocras at Home | Medieval Spiced Wine
Sw2qrt6tOKw 12:18 The Bread of ANCIENT ROME | Pompeii's Panis Quadratus
beBQgxdu2eY 10:50 The Poisonous History of Tomatoes | Pomodori Farciti all’Erbette (1773)
DOMlXRxuwlM 13:59 A Dish for the First 4th of July... and why it should be on the 2nd.
upos2b7-O7s 15:31 A Tart to Topple a King - Lombardy Custard
paHt8qHMo7o 1:18 THANK YOU!
A--e0axoGxc 13:21 Oldest Cookbook in the West | APICIUS | Ancient Roman Mussels
5S7Bb0Qg-oE 16:02 I finally made GARUM | Ancient Rome's favorite condiment
2OFUZ_hd8_k 13:15 Cooking from THE FORME OF CURY: England's First Cookbook | Galyntyne Sauce
CQksGGtDB2w 13:12 History's Fluffiest Dessert! - Everlasting Syllabub
TdvRfPCrR3A 16:46 How to Bake Medieval Rastons | The Life of a Miller
w36CYveyCxU 14:42 The Softest Bread In England | How To Make 18th Century Sally Lunn Buns
NhSj_VMjmUA 12:13 Anglo-Saxon Oatcakes - How Not To Burn King Alfred's Cakes
J4sgFGcU9Bs 12:58 Making a Medieval TART DE BRY (Brie Tart) | Brie: The King of Cheese
yYo5QdWMXcE 0:36 Tasting History with Max Miller
_o7Oq-OjKu8 8:45 Making Medieval Fig Spread - Rapé | History of the Fig
bN4Ai2AqNCc 5:46 Cooking A CAPON Dish For A Medieval King - Sweet Measure
rQT-aY9sTCI 7:49 How to Make a MEDIEVAL TRENCHER - Torte Bread
ENJbVgjFwF0 10:12 What does a 1920s BIRTHDAY CAKE taste like?
eKH7pP102c8 9:00 Weird Cures for the Black Plague - Candied Horseradish
jtCKA_NeEQ0 7:37 Apple Muse for the Plague | The Four Humors
ugk4AW8V6_c 9:09 Cooking Medieval Dessert for Lent: Bruet of Almaynne in lente
ZlMhZvOX2ps 8:18 Making 400 Year Old Buttered Beere
GCCJ2Qpr1nM 11:29 Baking A Medieval Cheesecake - The History of the Sambocade
vlQZ3NPnoLk 6:49 How to Make Medieval Cheese

# Sally Pointer

sXYo0t_W-hs 4:34 Harvesting Lime Bast: part two
38F2rsfXtMM 22:44 Making a Tasselled Belt for a Bronze Age outfit
4VSocZCxl8M 4:06 Stinging Nettle Friendship Bracelet Challenge
7g4SLai6US0 5:19 Hedge-bothering walk filmed on a Blackview phone
x-oVz8OZCJ4 5:15 Harvesting Lime Bast for Cordage and Basketry
ZqDPJ3jB7vk 9:23 Make an Anglo-Saxon style Ring Pouch
TdaHQrQ2FPg 23:16 A Rummage Through My Fibre & Cordage Stash
4fKKLOUNOHU 8:42 How to 'Run a Heel'. Reinforcing knitting before it needs darning.
aztSSF78-ts 3:49 October Update 2021
idsZ-h1HArU 16:09 Making Simple Prehistoric-style Leather Shoes
8TKsjPX8wxs 9:15 Palaeolithic Crafts at Creswell Crags
Mkwu9j8epXE 14:50 Minimum Effort Stinging Nettle Fibre
OBJfAb-Z7Bk 24:06 Making a Palaeolithic Beaded Tunic
IIbU6poSaW0 22:28 Make a Lavender Stalk Basket
JInRLAfgVqI 14:45 Stinging Nettle Sprang Bag #3nettlechallenge 2021
vixSpsIb1bg 19:03 A 'grene dorge' Fingerloop Braid Hatband
jw-OT_aMsGE 7:05 Preserving Lime (Linden) Leaves to use in Dolmade Style Wraps
OBM9GqHTWEk 4:54 Three Nettle Challenge 2021
sMp3YFgON0I 9:02 Foraging for Wood Ears
MSbm1pSIWvs 22:48 Is the Nettle Fibre Ready to Harvest Yet? (May 31, 2021)
D7VKbLHIwnI 15:20 Turning knitted Stockings into Sleeves.
GYQ38RGWyYc 5:56 Making a hat display from a wig stand
XkKsnkfo228 4:34 Make a Cone Distaff for flax spinning. Recycled materials.
JrU7Lmx5lbo 13:15 Stinging nettle, wild garlic, poppyseed and acorn flour bread
nzxKRP3Wpr8 1:59 A quick update: April 11, 2021
1VS-vsuEjUY 30:39 Making a Twelve Strand Braid Belt
WmNLhkHhWYM 35:50 Palaeolithic Hair-net Experiment
z-gIGbhViD4 16:07 Vintage Inkle Loom: making it work & exploring the history of this style
UtGQgWaxiS4 4:21 Stocking Caps, how they are made & how to wash them
f6rNS_lgqWI 4:26 Spindle Tree (spindle berry)
OOal36EBBbM 20:28 Oak trees, Acorn flour & dye
nZ7uP0hMupI 12:34 Autumn Equinox walk 2020
MceuEIhJcDQ 13:56 Hedgerow Hot Toddy Syrup
TOOdGs7HJ1k 16:52 Horse Chestnut, natural 'soap' & natural dye
whVgvyo0uuI 11:42 Making Damson Hoisin Sauce
S04Ic3CLQ2k 26:54 One Nettle Sewing Thread Challenge
tTs6YfVQfJg 0:49 Nap Raising with a Fuller's Teasel
efHLsyyqbwE 18:07 Prehistoric Nettle Textiles: part two, update on progress
cygarW3B94E 8:47 Making a Bronze Age Egtved Outfit: part one
gHg-cQoVxfg 17:08 Setting up, improving, and using a toy Weaving Loom
Suwzcaf2WtU 7:16 Preparing Wild-crafted Plant Fibres for Storage
k_bVVwxdwxA 6:54 Make a Herb Vinegar Hair Rinse
5Eq7fyLMu9I 29:57 Prehistoric Nettle Textiles, scraping and splicing
v7AUf0PG1kg 17:22 Burdock & Bramble Coil Basket: part two
Z6c2wmIUpvM 19:28 Burdock & Bramble Coil Basket: part one
dxZC7rvOQJc 14:04 Preparing Burdock for use in Basketry
8inVU_BmvYM 5:28 Midsummer morning, searching for fairies!
wR6WZyFZb5I 21:02 Looped-around-a-core "Tybrind Vig" style nalbinding in lime bast cordage
XF6USicwYNs 2:13 Using a replica bronze Cupping Vessel
muoODo4sFq0 10:14 How to make Pickled Ash Keys
8jAew50DZ2w 28:00 Making a Warp Weighted Loom, Part Seven: Starting to weave.
q43ZxJLs1qE 21:11 Making a Warp Weighted Loom, Part Six: knitting the thread heddles
KAZ_4WcxYYk 20:21 Making a Warp Weighted Loom, Part Five: attaching loom weights and chaining the warp
SFbHecxFJfA 6:50 Foraging for Hop Shoots, what to pick and what to avoid!
9X3xtoK7cHA 30:30 Making a Warp Weighted Loom, part four: a tablet woven starting border and test warp
DqX1YbI-KsQ 14:21 How to draw an Interlace Pattern Dragon
gFN6fRd0qNs 16:14 Making Sourdough Saffron Buns for Easter
ggihfhUs27U 9:49 Tie-dyed & 'Tipsy' Walnut Dyed Yarn
xFP2KyuUjKc 4:01 Make a Rainbow Magic-fold Journal
qG2OjuJqEzg 13:05 Make a tasty Nettle Pudding
HD5T6kj8BZU 14:36 The "Crescent" Patent Darner. An Edwardian aid to efficiency?
fye1ccacE4U 2:56 Hedge-bothering for Hop Shoots & Nettles
Vk7OzyKhlCc 7:06 Making a Warp Weighted Loom: part three, pegging it together
cuUzPcuWATo 11:00 New Puffs for old Powder Compacts
BK-tprKgMaw 3:14 Making Froglets inspired by The Clangers!
qelKILeE9s8 6:09 Making a Warp Weighted Loom: part two, cutting to size
XzZBHSB0DFs 4:47 Making a Warp Weighted Loom: part one, choosing materials
QJ-Jjn7sBxI 6:44 Mending Knitwear: Laddered Stitches
tCQzaODgUo0 20:15 Vintage Sock Machine Intro (making silk stockings)
2i7ONQpSads 3:22 Little Knitted Pumpkins
HsV-qheD5-c 23:10 Make a Bronze Age or Iron Age Sprang Hair-net
MJ7OncBeVAg 13:45 How To Reshape a Tudor Knitted Cap
ESsnU-ECYnw 15:12 Iron Age Dyes: Woad, Weld & Madder
QANdOXLcjvo 11:08 Nalbinding at the Weald and Downland Museum
3FukAjL7aXE 6:42 Collecting Whitby Jet & Kimmeridge Shale for prehistoric jewellery
YiYmjV2dNb8 9:07 Making Oak Gall Ink with Alyia
YYpcfzd4ov0 11:49 How to make a Corn Dolly
HmXqSlxLN_Q 16:21 Simple Looping: the oldest form of Nalbinding?
ioruvT-qYK0 24:58 Early morning hedge-bothering, 24/7/19
fBdkXN0nq74 5:08 Making Nocino, green walnut liqueur
veuWj8JsLoM 8:53 Natural Plant Dyes: Weld
vPxJpugApEY 18:47 Making an Antler Needle Using Flint Tools
upN3lkBaYVA 2:29 Casting a Bronze Pendant
0grnnvmpn1A 13:56 Basic Nettle String
2qltFSRG3Vg 6:15 Roman Cosmetics
fBnBdnrICQg 20:51 Making a net bag for a Roman Legionary
3SJdWjSEN6g 8:12 Preparing bramble fibres for cordage.
3xrgvf6KrRY 7:46 Last Burdock forage of the season
Z34hxQsEMrM 6:59 Making String from Rhubarb!
vHaYLVoP7s4 5:56 Making Thorn Pins
ZTGLUDEEWko 11:27 Nettle Fibre Processing
62PvfIR0xDg 4:42 Simple Cordage Instructions
ebYZidfmn-0 7:55 Making Natural Cordage from Horseradish

# Stuart Forester

XAMyCJP08kg 3:15 Stuart Forester & Carol Anderson Say Goodbye To Your Grimsby Lass Green Note London May 2015
MWBT6G1u3-0 4:12 Stuart Forester & Carol Anderson Come Where The Willows Are Weeping London Green Note 2015
09vzLvdUy3E 4:30 Stuart Forester & Carol Anderson The Watershed/Bonny Lass O' Kemnay London Green Note 2015
Yz_1wr6s09o 6:38 Stuart Forester & Carol Anderson - London Pride
k2_h0Y8BJkE 3:31 Stuart Forester & Carol Anderson The Factory Girl
zpFFWPnDE6I 3:53 Stuart Forester & Carol Anderson Dead End Road Signs
Jv5MZ6HPiG0 3:56 Stuart Forester & Carol Anderson Dead End Road Signs
qwSld6_RCxA 4:31 Stuart Forester & Carol Anderson Mitcham Fair Green
Cw9YTOnUMdQ 2:42 Stuart Forester & Carol Anderson Yorkshire Rose
UkilH0QqYrA 4:07 Carol Anderson & Stuart Forester Culbokie/The Rejected Suitor/The Fourth Floor TwickFolk 2014
Hum_aB26QM0 5:44 Stuart Forester & Carol Anderson - Star Of The West
gusUr8bt3Zc 4:20 Stuart Forester & Carol Anderson - Red Brick Ballads
UxnGlhcdtrk 3:11 Stuart Forester Cold Coast of Iceland
I7jdmPiWz7Q 4:38 Stuart Forester - Mitcham Fair Green
onqgu4sSUBw 5:41 Sequence 01
dYWICqsbr7c 2:50 Peta Webb & Ken Hall
IMa0C6JTPmo 4:24 Peta Webb
bf-8_lKvi-s 6:00 Stuart Forester & Carol Anderson - London Pride
q_ji7t2B03I 4:05 Stuart Forester & Carol Anderson - Dead End Road Sign
DUxSIkJ8B_I 5:29 Stuart Forester & Carol Anderson - Colorado
qwmAaDqgEvc 4:49 Stuart Forester & Carol Anderson - Valhalla
4QCK7t0kSts 4:25 Stuart Forester & Carol Anderson - Duke & Little Renie
NBKuIopgrBo 2:47 Stuart Forester & Carol Anderson - Yorkshire Rose
miQ-19iau0k 5:59 Cold Rain Green Note, London, May 2012
XibkHDKiztU 4:37 Glenlogie Wizz's Sitting Room, London, Jan 2012
M5KqUClQ4YI 5:17 Stuart Forester - A Letter Home To England live
Z-IK884rp1I 5:48 Stuart Forester - Swarthfell Rocks

# Alfie and Jon

qa1S2iKrZkk 3:53 Jon Dyer & Alfie Gidley - Key to the Cellar/Rusty Gully
4o54hkBoRGU 4:52 Jon Dyer & Alfie Gidley - Mount Hills/Princess Royal
vypvrry1jQs 5:08 Jon Dyer & Alfie Gidley - Porthlystry
yD6aczmf_lk 3:47 Jon & Alfie - Leaving Friday Harbour
Re2nvQNS2RY 4:59 Jon & Alfie - Barefoot Reel/Duke of Cornwall's Reel
sRB4Aj4BAmY 4:21 Jon & Alfie - Skylight Jig/Simon and Candy's Halsway Jig
H0kI7S_8UIs 4:14 Jon & Alfie - Key to the Cellar/Rusty Gully
29rAej5KWeA 4:22 Jon & Alfie - Skylight Jig/Simon & Candy's Halsway Jig
1-TGSdKWd78 5:28 Ali Brady's/The Old Lancashire Hornpipe - Jon & Alfie
CencoG-_4gk 3:58 Watermans - Jon & Alfie
1Xm1qB8-Mzo 3:34 Jodie's Swivel/The Butterfly - Jon & Alfie
8tFDtFWuoVE 11:27 Jon & Alfie - Lived Art Festival Concert Part 05
ce_3oRp-43o 10:43 Jon & Alfie - Lived Art Festival Concert Part 04
Xk9_oRISKPk 8:06 Jon & Alfie - Lived Art Festival Concert Part 03
w6b55FyUNxg 6:59 Jon & Alfie - Lived Art Festival Concert Part 02
dPO07a-hoxM 11:35 Jon & Alfie - Lived Art Festival Concert Part 01
a4t8AhHZZLE 4:46 Farewell to Whalley Range/ Standard Jon Meal - Jon & Alfie
FT4turju5WI 4:02 Gannel Crake/Two Borders - Jon & Alfie
9ljxFQmGfpw 4:41 Jon & Alfie - Banish Misfortune/Northumbria Tune
kJMjIOSLxAs 5:57 Jon & Alfie - Ali Brady's/Old Lancashire Hornpipe
yJpyabU9-5k 4:36 Jon & Alfie - Gannel Crake/Two Borders
S4iHdJ-Ii20 4:23 Jon & Alfie - Leaving Friday Harbour
5OYDyUjPYEc 6:01 Jon & Alfie - Ali Brady's/Old Lancashire Hornpipe
JempUKUhFD4 3:19 Jon & Alfie: Pressed for Time
N7w4TWtE3zw 0:43 Jon and Alfie at 'Gidley Studios' Day 1
ZTZYwZlezz8 5:05 Jon & Alfie: "Banish Set" Live
Fb-Y1Tm1r7g 4:26 Jon & Alfie Banish Set

# Pellwolok an Gernewegva

JcEEVcs804w 7:28 Pennseythen Gernewek 2024
vyrEkU8vLuk 31:29 An Mis 67: mis Meurth hag Ebrel 2024 (March/April 24)
Ty9XEC8Kkjw 1:41 Coming soon on An Mis / Yma ow tos yn skon
3PYlBFL5AZQ 4:40 'Gwandryas Iwerdhon' (Irish Rover) in Cornish by Skwardya
jLb2ImHft8g 4:39 Gool Piran yn Resrudh 2024 / St Piran Festival in Redruth 2024
RO5P1BPT6Bc 1:46 Headframe Refurb at Crofty
h1YZUUa2iX0 33:16 An Mis 66 - mis Hwevrer / February 2024
4glUtVDqmGo 3:39 'Steren a-wartha' - Hwerydh Eledh
HjD44zOFX1E 2:37 "Kyn fe yeyn" - Te Rewys gans Tallessyn.
DaX1jB2ZPqE 30:14 An Mis 065 - Mis Kevardhu/December 2023
jEHMqhsJmnY 31:22 An Mis 64 - Mis Du / November - Lowender
NqnV7yRqNBk 14:32 Rod ha Jori - rann 2
krcM2WwM8KA 28:14 Dydh Kemo - Chemo Day - SUBTITLED
JVgZmckS8_8 15:39 Rod ha Jori - rann 1
CvSB3oY0PAQ 27:50 Dydh Kemosawment
yXNbK1WhpcU 29:24 An Mis 63 - mis Hwevrer 2023 / February 2023
c8_Afdi9cjc 32:54 An Mis 62 - Mis Genver 2023
7GixR8NZEoA 3:14 "Gava, byrla, kara" - Sarah Tresidder
nQ5NnrcEgcc 30:38 An Mis 61 - mis Kevardhu 2022 - December 2022
TvG5r_d1xeM 30:34 An Mis 040 - mis Kevardhu
2tbWSy0SY1M 19:24 Joan Petchey - Elowen
tJ3NkvF84jg 0:14 Joan Petchey 100th birthday - Julian German
WYCQlnSewXc 10:19 Kan rag Kernow 2020
FefgSevflVM 12:48 Viaj an Delow
TCy5l4Ok3KE 33:42 An Mis 018 - Mis Hwevrer
cxZXIAGey6Y 0:33 Yn Kov Stephen Gainey
x_UgtFKQuWo 35:12 AnMis013 - Mis Gwynngala
7oipzomINU8 23:28 lorient2017 ENGLISH
DJG8RU6cHjM 23:54 An Oriant 2017
5XYHI-6RcHk 11:42 Rosya: rann 2
P-Qlv15TM7I 0:14 Business Cornwall speaks Cornish
akZnCjlQbbo 13:13 Rosya: An Fordh Goth
e_nS8UyqmLU 0:08 Equality for Speak Cornish Week 2017
4gDRQ5dW5Iw 0:08 Mind the seagulls - Speak Cornish Week 2017
AxHgq__Rd5Q 0:27 Speak Cornish with Gin
NtjwIhJv9lQ 0:30 Speak Cornish at the Chocolate Factory
NAdrlR8PzUA 0:49 Speak Cornish Week - on the beach / War an treth
ukr3-qd0fEs 8:20 dasserghi dew 01
-hHLi1Kk5ok 27:38 dasserghyans klappya
TQEyY_PFN_Q 9:04 Dalva an Yeth 2017
0arzUimI104 10:03 Dasserghi (fylm onan) heb istitlow
Z-M6k6316ro 10:03 Dasserghi (fylm onan) WITH ENGLISH SUBTITLES
F2diSuzdrrc 14:15 Pennseythen Gernewek 2017
8HBMZ1zA1xc 7:18 George ha Samantha - 'Nadelik'
_nTDhkRccs8 4:51 Keskusulyans Mebyon Kernow
ctuMN57gTaI 14:36 Kensa Keskan Lowender Peran 2016
wHvx3_GnoaY 3:23 Protest erbynn Kernans
9ynq2HiZfCk 3:06 Bretonyon yn Kernow
SDzET-dSnco 5:25 Dalva an Yeth
9SzVoghYC1o 5:28 Skians 2016 rann 2
NBnA9awnfVI 2:47 Skians 2016
3qMwFN1k_MM 33:10 PanCeltic 1984 Teach Siamsa session
qjJnCodDVm4 2:01 Keur Heb Hanow
tmHSUKyx37g 5:35 Cam Kernewek on RTE in 1982 at Killarney PanCeltic
m67g3_B4a_w 25:11 Kernowpalooza
xEz8SaQtUJg 58:11 krena
2m-Teyq7HbI 25:04 Cornish language weekend - rann 1
_-EK5GI3VTo 29:15 An Bennseythun Gernewek 1996
6q71U85p7Ow 22:42 An Bennseythun Gernewek 1991 Rann dhiw
4qzowCnMn5c 25:05 An Bennseythun Gernewek 1991 rann onan
zIPg_NnldAg 11:59 Skwardya Byw - rann 3
JFac8af6-R8 19:12 Skwardya Byw - rann 2
ZA7OdUcv-c4 19:18 Skwardya Byw - rann 1
O98zydPvQTs 4:26 Benjad a gan dhe Dewyn Bleustri
31Ks1xEWnNg 2:24 Cornish Language on Great British Railway Journeys

# Cornish Language Office
-ZWfPD1fJrQ 12:30 Hwedhel Henry Jenner | Story of Henry Jenner (with subtitles)

# Archif Teledu Cymru
leb645Xu6uo 9:54 Captain Murderer - Emlyn Williams
Ga8tNxnHjt4 3:39 Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971
F7G9Un6NXeY 2:45 Seatbelts To Become Compulsory - 1982
OfODO9_46EI 1:10 Restoration at the Screen and Sound Archive
YwE8HRn1Hlk 3:22 Beth sydd ar y Lleuad?
p4XGZpcGGPE 1:42 Old Tom, Barry, 23 November 2000.
P7U3uKQSXa8 5:29 CALAN GAEAF - RHAGWELD MARWOLAETH
jjdtl2T6s1k 6:07 COB PORTHMADOG
8Cst_9m-rT4 10:23 Trailblazers - 1989
EjjvbdbSHEw 3:52 The Strongman From Newport, 1968.
uHLH3lqWalY 1:32 Heatwave 1976
XUJSODg81MQ 4:48 What do people think of the EEC - 1984
lYLkbFmv9wA 4:57 Beth mae plant yn ei wylio ar y teledu? - 1962
rQmjGlHT7g4 1:48 Newport Ghost Story - NEW SERIES OF WALES ON TELEVISION - STARTING MAY 23d on ITV WALES
TGqt6aeHVYg 3:53 SPORTS TABLE FOOTBALL - New Series of Wales on Tv - starting May 23rd
CIkNOLrDYng 1:48 Guildford Crescent Baths - Cardiff - NEW SERIES OF 'WALES ON TV' - STARTING MAY 23d
SxUrHORkh3A 3:16 Gorilla in Caerphilly - WALES ON TELEVISION - NEW SERIES - MAY 23d
U10qGwR2Dkk 1:21 Bara Lawr
Poxi1veht6U 12:19 ECETERA ECETERA, 1969.
ksVqmC4u5x8 1:57 Roald Dahl Day
iBz9ugqnNE4 2:38 Ayrton Senna tests a McLaren at Pembrey Circuit - 21 September 1988
nitlc-XYa6I 3:15 Ryan Davies - 1965
5ui2rFSP6AM 2:30 Capel Celyn Revealed, Wales At Six, 1989.
q_P323GWpPc 1:25 Ian Rush arrives at Juventus - 1987
8Xd6ZrhY-cM 5:22 Roger Moore interview 1963
g2zHpWMN758 2:20 Penscynor - 1985
S2hPg-SkVcE 23:41 Gwrthwynebiad i gloddio Glo Brig ym Mrynaman - 1972
EUOolXqCdZk 1:29 Ford Escort XR3 - 24/11/1980
2EX6KGcy7jE 3:28 Potted history of St David's Day Festival
JlF5i2Aw__U 3:09 Tell Laura I Love Her, 'Here Today', 1960.
JwdFkadzovw 1:51 Do Women Enjoy Wearing Short Skirts?, 1960.
DFbzdtjIUu4 2:40 Uchelwydd - Caerfyrddin 1971
VLw2BA6eVjE 3:10 Do You Think Christmas is Too Commercialised? 1960.
c1hXcs8l5hs 5:47 Carwyn James
WBUVR361aoo 5:46 Noson Calan Gaeaf: Dic Harris, Preseli, 1984
cxdlYUCo9LU 6:04 Diwrnod Etifeddiaeth Glyweledol y Byd UNESCO / UNESCO’s World Day for Audio-Visual Heritage
kqUA9wF5uc0 6:42 Drovers
JKVhMjaKouo 3:29 El Bandito
XWKSnfoSYwo 4:26 Kyffin Williams, 1987
rmbKX2vaCQw 4:36 Y Coliseum - Porthmadog, 1984
cszpjfVOHIs 1:27 Heulfan, Rhyl, 1983
4GCJH4r_sz0 3:06 Tommy Cooper, 1981
XrfjzdMCsX0 3:32 Handball
vdfe1Vn_FpI 3:50 Quoits
vUB737fnFtc 13:09 500 years of the Royal Mail
ULJ7XEqddmI 2:53 Penmaenpool Boat Disaster - 22 July 1966
Nw1JHDQrib0 2:58 Gwynfor yn ennill Caerfyrddin - 14/7/1966
1GXYqaoYyGs 3:58 Sheep nuisance - Trefechan near Merthyr - 1966
dOLqXB8CeTQ 20:33 Severn Ferry - 1966
e4wsN_aJPds 2:38 Clint Eastwood - 1967
4RGmy0tU9CY 2:50 Miss World Controversy - 1974
YtwubKGEgGQ 2:49 The Hennessys at Swansea Festival, 1987 - The Steelworks Song
MaF0O-0jOTQ 4:01 Towyn neu Tywyn? 1968
1eMOe9bc20U 4:33 Myfyrwyr Aberystwyth - 1933
FBMiMuJex5Q 3:58 Doll Hospital - 1960
KaA5T0sekWw 4:56 Ymsgafnu - 10.6.1968
3xhh3QPHPYo 1:50 Busker Jones - Marchnad Llambed 1984
9mCS1p45e6Q 4:32 Barry Island prepares for Easter 1962
Vva4vNXGEP0 7:18 Nansi ac Edith
oHk3LZP_Zs0 2:17 K-nockers, 1971
YCmWPIAemPM 5:10 Top Rank nightclub - Cardiff 1964
pLGXZXNso9g 5:08 Datblygu - Ser - 1984
CCIFGoz2Nd8 4:51 Fred Abel's One Man Circus - 1960
eblZpwvd2d4 0:43 Pancake Making Machine
ohDINBtPJr0 0:54 Football Quiz
VTV13XoymHM 7:12 Ymweliad a Phort Talbot
j0B3pE5i5qE 3:41 Merched Llandybie
wKDd3T5lzeM 5:11 Y Byd Ar Bedwar - 1988 - sgwrs a Muammar Gaddafi
Nj0H3jKIjBc 2:45 Les Dawson in Caerphilly - 1976
k9Fq-uMtpQA 4:46 Jayne Mansfield - 1967
9M1LWsWsy0s 4:16 Celebration - 1973
V56HtgsXgB0 2:40 Be wyt ti ishio i Nadolig? - 1971
iInlRNviEJE 27:43 Yr Wythnos - Albert Jenkins
BTdh3DkZiYw 2:18 Dosbarth Etiquette Seren Wib 1977
IiazL375zNA 5:40 A Portrait of Pontypridd, 1963
vx0-v-fOOKE 5:21 skateboard craze 1977
AM3HCotmCjw 5:40 Casino - Port Talbot
jnilSGDxN5M 2:58 Noson Calan Gaeaf - 1977
jO2KcnDbHrg 3:54 3 Year Old Boy Climbs 100ft Chimney! (1966)
8UhME8dcOqc 1:40 The Prescott Punch - Rhyl, 2001
YbkdDWsCemA 3:19 Cows watching television
waM5L_nJoOg 10:13 Gwlad Y Gan - Land Of Song
ujsbeFJMxEs 4:53 Lady Godiva rides at Beddau Carnival
CBuyNbOWmE4 11:41 Ffalabalam - 1987
1ImpStYT9zo 0:38 Dog Fashion Show - Cardiff, 1970
-xZa3lnk2fM 1:54 Seremoni 'Rhent y Brenin' Llanbister 1958 / King's Rent Ceremony - Llanbister 1958
W9LOe-omp20 12:57 Protest yn erbyn y Tywysog Charles - 1969
qClwUbc6_3w 3:50 Dorothy Squires - 1966
TqmkcjCoBXg 4:06 Traffic Wardens in Cardiff - 1964
YdL7JfkC8vg 4:00 Cilla Black, 1964
NTWvbVQAK8A 3:56 Y Cyrff, 1985
1TBQ1qYzWes 4:18 Amphicar, Aberystwyth
Lk0dVFKtEM8 6:10 Welsh Baseball
ush4dN6F4VM 0:51 Amateur TV Station, Prestatyn.
yeMCXM16Mi8 26:18 Cwm Tawelwch - 1966
e_uci-VZDx8 4:46 Gambling in Merthyr - 1964
n4AfS9O-k8Y 3:50 Whiw! Mae Mistar Urdd yn fyw!
9Yh4tJXoQ18 6:48 Bob Monkhouse
8AYwlgV6pIw 2:19 Strip Club, New Tredegar, 1966
8-ZOMa5xjzI 1:30 Dim Teledu.1973
KIIWoqL0xqs 3:42 'Can i Janis' - Heather Jones
qZB6jL97RMY 6:14 Dillad Laura Ashley - 1979
rFGk44P2YYM 14:44 Shane speaks Welsh
GFrOx6QZ08w 2:50 Microwave Oven - 1968
l5NsU3RdZWE 3:26 Poltergeist, Rhondda St, Swansea - December 1965
5z6LhA27v9s 3:27 Sex shop - Cardiff
rGFTR-1LCMc 2:22 Status Quo, July 1976
TbmCIZJCccg 3:58 Olew pen i wared moelni - Jack Oliver Llambed
-rZ53Yq7JA4 1:53 Do You Believe in Flying Saucers?, 1967
tpt8NgODHQY 30:09 Ceinewydd 1959
tbCaRQNUQeY 7:23 Gwyliau blynyddol merlod pwll glo Graig Merthyr - 1965
eQMs0luCPw0 2:34 Croesoswallt - Oswestry
_OBetbOYnZE 4:44 Papur Newydd Y Deillion
aVftj5NDZLw 3:16 Mary Quant, 1966
hrO5u2qZY_M 5:27 The Lost Village Of Pwlldu
XsNbvon5M54 3:48 Elma Williams
vO-MilzhJ-k 5:20 Carrefour - Wales' first Hypermarket 1972
E81MZ_fbYB8 10:16 Hanes I. D. Hooson - Rhosllannerchrugog, 1960
kbZSuVHtk4Y 2:00 The man who stopped the motorway
Ynf2W6EcGgc 5:22 Enoch Powell
S8Vy5KbT4cs 2:31 Dathliadau Dewi Sant
GbyIw4dEfhI 4:20 This World Of Wales, 1963
8gPTKPApLL8 2:52 St David's Day, Carmarthen. 1957
dNUCEutjzB8 2:07 Bwyta Cennin ar Ddydd Gwyl Dewi, Yr Almaen, 1973
kOdv5X5La0I 3:03 Saltney Ferry
BxEiJekU2pg 7:48 Free Wales Army
TO_SLAICVyU 4:37 The Demoliton Of Old Cardiff Housing, 1962
0FqInlD1DAQ 4:31 'Warhol'
YaIWjByHrBE 3:50 Llanbedr Pont Steffan (Llambed)
73DDBc_VeK0 3:35 Y Blew - 1967
hIGigL9ccdQ 28:28 A Near Myth - 1980
B0t5rUHy2G8 7:26 Gareth Edwards - 1974
-d6udPavLBE 0:55 The Try
L2fIi0JTWN8 5:47 Lost Railways - Last train from Newport to Brecon 1962
FRwzYORTh3Q 2:42 Teenagers: Would You Use A Marriage Bureau? 1962
xAL9JZVNqOQ 5:44 Sunday Opening, 1961
_rWos5G-CQQ 23:17 Miri Mawr - 1975
uQo1w8GhMz0 1:04 Filming 'The Inn Of The Sixth Happiness', Nantmor, 1957
AHRWHKXb0oU 3:19 UFO HOLIDAY - MILFORD HAVEN 1978
DAYXDcolbpU 5:31 January Sales, 1969
63JwNSVafCA 3:27 Addunedau Blwyddyn Newydd - 1964
peYhPAbQYME 5:05 Pelham Puppets, December 1959
VUx1K9PVq5o 4:41 Spike Milligan
j3T_9wJixAI 3:16 Trwynau Coch - 1979
FN7xGSsW9uM 5:39 Nadolig Llawen a Blwyddyn Newydd Dda - Merry Christmas and a Happy New Year
wr4vZN5ufKs 3:20 Tegannau Ystlumddyn - Batman - Ffactri Mettoy 1976
je1OtICKtSQ 2:32 Turkey Run, Miners Strike Christmas 1984, Bedlinog.
52q9vrK_iio 2:29 Away In A Manger - 1959
iYc7ITz03B0 5:41 Christmas Toys 1979 - Louis Marx Toy Manufacturers, Swansea
-3UTr7FRCko 1:29 What Do You Want For Christmas?, 1959
wWND_j1zNok 3:24 Plufio Twrcwn - 1965
lk86qzgEdxI 3:09 Dyniadon Ynfyd Hirfelyn Tesog - Awst 1972
9tfu8bNdFUI 3:27 Butetown, 1960s
QJyuBioq33I 2:48 Mari Lwyd - Noswyl Nadolig - 1964
17fMiuiLb1A 7:45 10 Rillington Place
Bij9-969FBg 4:27 Gilbern - The Welsh Car
rOxmfRyzsRg 4:03 Pop Talent School, 1963
6FbpZp1Mp58 2:17 Lloches Niwcliar 1965
d656y-ikmMs 3:24 A Sailors Life For Me - Cwch Cathod
3Uad0Z_2Ido 3:05 Langland Bay Swimmers
0ZGjCkbWwmo 2:24 Ralio Mini - 1968
lGshDSgVF-4 3:28 Filming Carry On Up The Khyber, Snowdonia, 1968
hdJtA2bZADA 2:16 Should Welshmen Wear Kilts?
pZ1FjCn6b6M 4:32 Caffi Gaerwen - 1969
le2_Co8mUqA 4:46 Ray Reardon - snooker
MbxJ5W3A25E 4:25 Dwylo Dros Y Môr, 1985
PFz5aY8hWLE 3:41 Sport Aid in Cardiff
6KtSEOE4JpY 5:26 Cockle Gatherers At Penclawdd - 1961
8eGwjqh_eQQ 5:03 Disco - 1979
KAdPNx0ArRc 0:54 Man Attempts to Fly Home Made Contraption
0BlGnM3664Q 1:45 Wolf Whistle
LYJvx-_tx68 5:33 Gwenallt
OR8knvMvlHs 2:46 A yw merched Sir Forgannwg yn rhy dew?
Ob7f1W2jvrg 2:56 Acker Bilk at Barry Island Funfair, 1969
5SOjQIMz6-0 4:37 Noson Ysbrydoleg - Seance Cwm Tawe - 24.2.1967
3ADfpEKWyVQ 15:31 Welsh Food Show 1960 - with Philip Harben
nP729S6Bxzs 2:30 Ford Cortina Mark IV -1976
azZCi3cmJ5o 1:56 Classic Idents
A7e8J1kozqU 28:33 A Day in the Life of Cardiff - 1959
tL6UW7H8yko 4:45 Babs y car cyflymaf yn y byd
0nNS5j6a-UA 12:55 'Elinor': Kenneth Williams
q_N1__ZDttQ 4:23 Corgi Car Factory - Swansea 1960
K323iuDlbYI 4:58 Muhammad Ali
3dMGnSvCmTg 0:29 Car Shaped Hat
EcvYV_5shIY 3:19 Dyfais Newydd i Heddlu Swydd Stafford
LxErt4TRse8 2:25 Ym Mle Ganwyd Iesu Grist?
qW9q1YhvNMA 5:57 The Hypnotic Powers Of Mr Blythe - 1961
d9PfNtouslQ 3:26 Barry Welsh Is Coming
abt0PZ_lfFk 4:14 Helfa
NmfAz2eVoyY 3:35 Radio Myfanwy
CsC-KpeViWA 2:37 Sidan - 1973
nNBlU_h6XVw 3:16 Ghost Village 1962
B10yc-Y4lq0 3:46 Andrew Vicari - The Artist At Work
VFrOhV_lR_8 26:16 Return to Maerdy Colliery, 4/3/1985
0yPuL3XWV2I 3:06 Anarchy In Caerphilly - The Sex Pistols Perform
18jFrg8ewX8 4:09 It's In Wales - Friend or Foe (1988)
m-seM5LWow8 0:50 Last Service At St. Teilo's Church - Now Standing At St. Fagan's National History Museum
3D3WPsMu24w 3:14 computer
njuMXSu-BT4 4:31 Spiritual Healing
SpvcCvVqEE0 13:51 Eisteddfod 1976
J2DtOGXBen0 1:52 Dylan Thomas - Fern Hill
Ho4_Gp8ylGk 5:12 24 Hour Jiving Marathon 1960 - 77 Sunset Club, Barry
LjaZbjt4Wtc 7:24 Investiture of Prince Charles, Caernarfon Castle. 1969
QYtj4F8bG5k 4:00 Atgofion Cyn Lowr o Rhydaman - 1969
CWqbh0zdKqI 3:52 Butetown Carnival Week, Cardiff 1987: The Little Butes
M8kjfSd5Qco 0:41 Birds Nesting In Westcot House
2HRQFTrFWHY 4:21 Torri Mawn - Cwm Cynllwyd - 1967
FNixta5aJpI 4:48 Seren Wib
tIbBIK5ceCQ 2:25 Who Wants To Be A Spaceman? - 1961
hcfqEuFSqaA 4:38 Meet The Cheshires - 1961
LjfQ4Q55K48 0:54 Mechanical Shark In Midst Of Holiday Makers - 1961
s8fOzrOTVXs 1:14 Cardiff Cinema Montage 1961
M8IB7GB756w 3:44 Broc Mor - Aberaeron 1967
103JPrPH8Ms 0:36 Pet Lioness In Garage - Cardiff 27.2.69
57zTtr693ss 2:59 Tom The Tramp
NxCOX42M31s 2:39 Y Rhewgell
Lvcz5E1BhJY 0:45 Lampeter Pram Race 1967
ztl0SxXSOWo 6:02 Salem
FGI_ZaZY5e0 4:33 Sianel Deledu i Gymru - 'Y Dydd' 17/09/1980
jh6Q1N-iwzU 1:51 Greenham Common Peace Camp, 1982
2MWNLYa_bqM 3:16 Electricity Comes To Ystradfellte
CPLWbeUq8Z0 2:32 Harold Macmillan

Y5WkbmDDzwk 42:16 HTV Cymru Wales Interval Junction into Miri-Mawr (c. 1975)

# Beowulf
2WcIK_8f7oQ 1:40-1:37:19 Beowulf: The Epic in Performance - Benjamin Bagby, voice and medieval harp

# Simon Roper
CuXdIBRYJ58 12:30 Is It Possible to Describe Somebody's Entire Language?
kUcMm-lS2Kk 29:35 Consciousness: Why Can't We Describe It?
oJE3Ium5Q7Q 22:42 Did Proto-Indo-European Really Only Have 2 Vowels?
bL9sBWz2Uqs 40:54 Footage of birds, insects and rain
-99-lRGIFeg 38:27 Exploring Two Northern Irish Accents
hCV_oGQjV4k 21:21 What is 'Historical Accuracy'?
Mn9Ch78keo4 24:59 Unpicking Some Aspects of 'Þæs Anhagas Siþ'
ClDidPO-ua0 29:39 Þæs Anhagas Siþ   |   Early Medieval Short Film   |   2023
A2OQV4MOOBg 7:07 *APRIL FOOLS* Atgeirr Video
haH0bihkzwk 27:04 Evolution of a Northern and Southern English Accent, 1586 - 2006
zl7nYepuCoI 13:52 Why do Some People Pronounce 'Off' as 'Awf'? | The LOT-CLOTH and TRAP-BATH Splits
hkRxn7tUNIc 53:36 Questions and Answers
idjxjfS5-zA 19:40 What was a 'Northern Accent' Like in Old English?
4IJqbMLg4D0 2:59:03 'Beowulf' with Dr Jackson Crawford | Prologue, Fits 1 - 3
n3twHHIdgWI 20:31 'And then I was like...'
_h4-nIupTDU 9:02 How do you Say 'Ich Heiße' in English?
jucns7hHAkI 17:20 Faces, Past & Present
tYN_pkmja-w 13:45 Proto-Germanic Farming Terminology
VKzZ0_XEtdo 1:48:47 Söl'ring North Frisian with Moritz Lauer
8d766dMjJjo 16:37 Beginner's Guide to Phonology - Part 3
eN-4fT3YWnM 1:45 Jack of the Dump - The Day That Laughter Died | Trailer 2023
1Ntcj97LNyI 1:15:42 Reflections on First Time in the US (California)
i1GjSKR5udY 15:52 The Disappearance (and Survival) of 'Thou'
C1xN-fjyCvU 15:31 Problems of Studying Emotion Cross-Culturally
s38tEcEXUAo 15:37 Some Words from Proto-Germanic to Old English
eKS7iJIs_ZM 14:03 Regn, wæter, spearwan, ūlan
7kV_bLrfUxs 17:17 Grammatical Gender - An Accidental Response to Luke Ranieri
iLEbaAkt-P0 1:18:52 Runes and Other Topics with Dr Jackson Crawford
EWlil3g8LwU 12:27 Do Languages Get Simpler Over Time?
bq4XbdA3dTk 33:27 The History of the 'R' Sound in English
Uf7kA8ZVPVU 16:09 Time Capsule Reflection
eJLj6rDJl7I 15:40 'Wiggle Room' in Reconstructed Old English Pronunciation
q77x0_znB3I 12:46 The FOOT-STRUT Split: Why Northerners Rhyme 'Foot' with 'Cut'
HNd29yYK8V8 12:01 The Elves and the Shoemaker
5OULnCCvdk8 1:01:02 'English After RP' with Dr Geoff Lindsey
SwVANDKzG60 21:13 Pirahã Phonology
KVPx9rp_HiI 30:22 Reconstruction of a Naturalistic Conversation from 1960s Southern England
9KhPVWXpNIc 1:54:27 A Chat with Luke Ranieri
2nVVX74sy8o 18:41 Dissection of the American English Video
AXaXnQv6knQ 7:49 A Northern US Accent from the 18th to the 21st Centuries
dESrl58Phso 25:17 Proto-Germanic Reconstruction: Some Examples
ChoZRnLs7K0 9:28 A Medieval Medicinal Recipe with Modern Applications
Ggq5BrRvwpU 13:21 A Sentence from Proto-Germanic to Modern English
JcitAgN7tE4 59:08 Trying to Learn some Polish using Google Translate
HINRA6vzx6U 13:23 Is There an 'Oldest' English Dialect?
W3zLKzRhAzg 18:51 Do You Remember 1960s Southeastern England?
HX2Hbv07yPw 17:57 Formants - Why are Voices and Vowel Qualities Different?
WUY2a-rvXYg 17:09 'Gutteral' Sounds (Back Fricatives) in English
V29OhkbzwuQ 25:23 19th-Century Cockney and RP
X82qgBoA-qA 4:26 Patreon
vZuO4IjXN2o 23:39 *contains vulgar language*
vL4p5U5vpuo 13:17 Livestock in Early Medieval England
njZw_SrMkjA 9:44 Hypotheticals - What if the Great Vowel Shift Happened Today?
ask7ClK9m7A 13:32 Intonation
AzUHWrWH8WU 3:33 Keàty Curbison Cat - A Little Cumbrian Poem
VJ-jdYA9ISM 12:03 A Little Neanderthal Work-in-Progress
6psfNuKWl00 11:04 The English Language 'Family Tree'
Jx4IObS4rV4 37:53 A Beginner's Guide to IPA, Phones & Phonemes - Part 1
78l_PcPuYSk 9:52 Some Thoughts about 'The Seafarer'
OQNj4G5itkg 14:26 The Great Vowel Shift in the North of England
2_wM_EOWHqY 2:10:40 Old Norse Colour Terms (and other topics) with Jackson Crawford
SdlkLAJpfpw 1:36:05 Universal Grammar & Neurology with Caroline Cypranowska, PhD
b8X4xKIppS8 11:47 Scouse Phonology and Where it Came From
7mw7gBOOPS4 29:03 How We View the Past
K-eWQZw29t4 10:48 What if English Still Had Grammatical Gender?
0O7H8FYZOkw 20:01 Reconstructing Some Sounds of Early Modern English
Diay7U-hRec 38:49 'Early Anglo-Saxon Cemeteries' with Professor Duncan Sayer - Part 2
RERyg5h1IMc 7:32 Ingressive Speech - A Short Overview
EgK0jvPJlbk 18:47 Thinking About Human Evolution
fNNrDdNQEgo 15:36 Old English Syntax - Building a Sentence
DKzJEIUSWtc 58:45 A Conversation in Old English and Old Norse
luibV6sh-pQ 12:26 AAVE, Implicit Bias & Prescriptivism with Blayzen BM
fzeneXX6MBU 13:55 Old Norse Influence on Northern English
GyRO93tOVHA 49:55 'Early Anglo-Saxon Cemeteries' with Professor Duncan Sayer
Ov0OEAF5Fv8 13:40 Cumbria & Yorkshire - An Older Dialect Comparison
Zf0L5lXpvuQ 24:11 Anglo-Saxon Coins and Sceattas (with Ben Normington)
-NuZ1FmCewg 6:00 Why 'Mice', not 'Mouses'? I-umlaut in English
S4_OCLhhicI 14:30 Geordie and Northeastern Phonology
5ZNdgBdUhIk 11:11 Yule *REUPLOAD*
3lXv3Tt4x20 18:10 A London Accent from the 14th to the 21st Centuries
-iPu8hMxfq0 3:46 A (Hopefully) Positive Message
McFEbFWioXQ 14:07 German and English Cognates - A Little Analysis
QKhYWdaxcvo 14:06 The Importance of Anthropology in Anglo-Saxon Studies
JQ6oT5c1jks 23:57 A Conversation about AAVE
fopQPzaXXXc 12:28 Proto-Indo-European - Frequently Asked Questions
_5edmlyJ67w 12:08 Hærfest - Autumn & Celebration in Anglo Saxon England
TGjZ75UzsKE 14:30 Older English - The West Country Connection
pPUqjK71llE 14:36 How did Language Start? - Part 3: Universal Grammar
eQPbSAvtVjY 12:51 New Orleans English - The Speech of Louis Armstrong & Dr. John
Yp7MHcyJkGM 19:09 A Little Q&A
y5cgb1nDCMg 13:25 Wild Animals in the Anglo Saxon Mind
fuh6f_y5ycc 4:37 Two Readings in Old English
mheR9cIFuQ8 11:21 T'northern English Definite Article
xLNJyV_4_FU 12:34 How did Language Start? - Part 2: Primate Communication
e34U4eltQyQ 15:43 Anglo-Saxon Regional Dialects
mSq4hu5w7io 21:39 Medical Pluralism with Hannah Chisholm
s-9TEC5OqVE 7:06 Pronouncing some Anglo-Saxon Words
Y5-gkQmFCiM 12:35 How Did Language Start? - Part 1
nqtg6pb3WuA 8:48 Vowel Length in English
OMEf9AqI-b0 16:07 Monarchs' Accents through the Ages
PvDuObTfklw 7:58 Stress & Pitch Accent in Germanic Languages
AYaqLFh4GkA 13:55 Witches in Anglo Saxon England
KjfiB_Kcwhk 8:16 Reconstructing 'Stone' in Proto-Germanic
ARgGguQlQ0w 18:26 How Much did English Speakers Swear in the Past?
WFxS0tXBS00 9:20 Case & Gender in Old English
12oPAK9G2J0 14:27 Revisiting Neanderthals
Ev6b9YAiFqo 2:24 Two Readings in Northern Middle English
4kmIV9yOTyg 13:45 Leftovers from Older English
lsYt4725-tE 6:29 Philosophy and Cultural Relativism
ngnh76-mxsU 14:37 Proto-Indo-European - Laryngeal Theory
zWv3zxqjP5c 9:24 Lencten - Spring in Anglo Saxon England
CODUPylO46M 12:19 Elision & Contraction in Old English
YN6veU0fI9A 9:32 Problems with Reconstruction
U0pipKUFNAk 17:38 Introduction to IPA and Regional Accents
tBwdRs-D8lU 8:46 The Difference Between 'Thou', 'Thee', 'You' and 'Ye'
ieWm9T_GgSA 0:08 I'm lost
o5kjQONRAyU 13:15 The Migration Period
eBLvnK57lqM 9:16 Interview with an Anglo-Saxon in Old English | 2 [PLEASE READ DESCRIPTION]
# FtcAbzO19Kg 17:20 Development of Cumbrian | 2 of 2 | 1400-2020
63zAgbh5RFE 9:02 Mindfulness
48GSUUW5VH0 9:27 The Earliest Germanic People
# B9aILOeTYas 14:14 Development of Cumbrian | 1 of 2 | 800-1400
Nrs6U5vYstw 10:11 Proto Indo-European: Some Unexpected Cognates
H61_y6jH330 17:55 How we Know what Old English Sounded Like
ABmxoMWWChc 8:34 Q&A Part 2 of 2
KnBc8RnmKSw 13:02 Q&A Part 1 of 2
qS-l3PqToJo 2:17 A Little Update
lm9MUUQN3VY 12:58 The Pronunciation of Later Cumbrian
69eEJMYz3OY 21:32 What They Say | Starring GAMEY HEMP
-IdKScLLjVE 1:15 The Development of Cumbrian in One Phrase
h3I20xqH4kc 13:36 Anglo Saxon Pre-Christian Religion
3hqQpziIETo 6:27 The Great Vowel Shift
J-WjIVxyR5c 6:06 Religion and Practicality
lAKWmKnmc_k 6:41 Changing Meanings
oFX1nbD3dV0 3:25 Interview with an Anglo-Saxon in Old English [PLEASE READ DESCRIPTION]
Pc45XKv_OEw 4:28 Casual Conversation in History
iHG5-wMFJ-4 12:36 The Feast of Stephen | Starring ZAMY ZEMP
QWI_dFxbzyg 6:23 Old English and Middle English; why are they so different?
oqvpg0md4xY 2:04 Misconceptions | American was the Original Accent
_CSAmA_VYuk 8:29 Corresponding Cognates
ZHmUYlyzQZg 4:26 Notes on Pronunciation - Part 1
JiwTuM8R0ak 1:45 I'm Back-ish
2Om-FGi4fTk 6:23 These Riddles Three
ohxIKbf6cbg 2:36 The Plight of the Goat
EsOefKbGh4k 9:56 Team Gent(le)sir Exposed | Episode 2 | Starring KEORGE GEMP
VMXlvr5Kf4s 10:28 Team Gent(le)sir Exposed | Episode 1 | Starring GEORGE KEMP
7y_Acv-0jo8 2:06 The Saxon House
RuFHXJ350k4 2:26 Burne, Roper & Sons Whisky Advertisement 2016
q69tb_H94ao 3:17 La Ferrassie 1 - A Painted Reconstruction

# Stadstuinieren

HvJ7RFsIC5M 1:01 Stadstuinieren - Het leukste tijdschrift over het kweken van groenten, fruit en kruiden. #Moestuin
z-u-puG3oWY 6:22 Stadstuinieren - oogsten voordat de vorst komt
rnSPloQ3XQE 2:02 Stadstuinieren - Plantenschalen & natte voeten
9BCy6Q8Rzyw 8:01 Stadstuinieren - de moestuin begin december - onkruiden en onderkruipsels
kRNO5tmQSLU 2:53 Stadstuinieren - planten in potten en bakken 3 - als je de ruimte hebt, ga dan voor groot
H2YuwBfu6N0 1:39 Stadstuinieren - Tamme kastanjes bereiden - zo doe je dat eenvoudig
WGxZozvFRs0 2:24 Stadstuinieren - planten in potten en bakken - 2
0fmzkZjGmis 6:22 Stadstuinieren - Knoflook planten en winterui - mèt een roodborstje
ZdEaLtu35Ac 1:00 Stadstuinieren - Het leukste tijdschrift over het kweken van groenten, fruit en kruiden. #Moestuin
SRoPUoS0Olo 3:00 Stadstuinieren - Planten in bakken en potten 1 - Dakterras en kruidenbak
GEizMdFog7Q 3:56 Stadstuinieren - Tomaten buiten en binnen - de oogst van dit jaar
VMb5ZW8rz7E 7:51 Stadstuinieren - Een rondje door de tuin eind september - en door de kas en kelder
J5tzvoHgG7k 5:23 Stadstuinieren - zaden verzamelen en verwerken
0dO_h0Li5d4 3:19 Stadstuinieren - snijboon en pronkboon - allebei anders lekker
j9ICa-jUO3c 2:05 Stadstuinieren - herfstframbozen en bramen - opbinden met een stok
M-JHqRzjJIM 4:02 Stadstuinieren - Aardappels telen in potten en zakken
dTopcYNetwc 2:44 Stadstuinieren - Rijpende druiven beschermen - zo doe je dat
qfadrEr1nmc 2:22 Stadstuinieren - Gedroogde kruiden compact opslaan #moestuin #kruiden
sdqJCXRg6uk 7:21 Stadstuinieren - Een rondje door de moestuin - Juli #moestuin
7v9zrZ-OlmQ 2:45 Stadstuinieren - Chop, drop en mulchen #moestuin
76ANa-XNPrY 10:24 Stadstuinieren - van zaaien tot oogst in 6 tot 8 weken #moestuin #schooltuin
IqM-9cw__a0 3:19 Stadstuinieren - Kiwi zaaien #moestuin #fruittuin
jWZ9v-EvAjo 4:29 Stadstuinieren - Aalbes, zwarte bes en kruisbes snoeien en oogsten #moestuin #bessen
JTHZwsthM5Y 2:29 Stadstuinieren - Bloemenzaad verzamelen #moestuin #zaden
y9zE-pmT5Lo 3:14 Stadstuinieren - Tips om je oogst van bladgewassen vers te houden op warme dagen #moestuin
d80a1JE_UIE 3:30 Stadstuinieren - Lindebloesemthee zelf plukken - #moestuin #wildplukken
AOdJpa59N7o 3:26 Stadstuinieren - Aardbeien beschermen - én vogels beschermen #moestuin
ff27p00AvTc 7:29 Stadstuinieren - Planten stekken - Salie, verveine en lavendel #moestuin
rB2OeD7wcSM 8:20 Stadstuinieren - rondje door de moestuin - tweede helft mei #moestuin
2SgKI7emfaY 3:32 Stadstuinieren - Combinatieteelt #moestuin
-rP1bNKoH4o 5:03 Stadstuinieren - druif of druivelaar snoeien - zomersnoei #moestuin
1xtDyc9YKfY 2:59 Stadstuinieren - Aardappels telen in een kweekzak #moestuin
2aHleHz_gVo 4:46 Stadstuinieren - Schoffelen, onkruid voorkomen is beter dan bestrijden #moestuin
VnquPnyENgY 6:01 Stadstuinieren - Planten in potten en bakken - vochtige aarde is de basis #moestuin
CRlJdezBPNg 4:38 Stadstuinieren - The Hungry Gap - Een karig voorjaar #moestuin
xdl23cskKPc 6:01 Stadstuinieren - Aardbeien planten - Zo doe je dat #moestuin
fVz24kTOM94 3:19 Stadstuinieren - Artisjok en Kardoen kweken #moestuin
sQTq27y2AKw 1:32 Stadstuinieren - Drie basiskruiden - tijm, peterselie en bieslook #moestuin
zFIx4-krHc4 4:12 Stadstuinieren - Voorzaaien in maart, tegen tuinstress #moestuin
2-YrSJogWuw 5:12 Stadstuinieren - Rondje moestuin - half maart #moestuin
6Ee35omcxGQ 6:48 Stadstuinieren - Peterselie en bieslook op pot - scheuren en opnieuw oppotten #moestuin
yIq09zvYAzE 2:01 Stadstuinieren - Veldsla oogsten #moestuin
GcDOSrCPugs 3:42 Stadstuinieren - Aardpeer telen en oogsten #moestuin
nMpjecYLozs 2:06 Stadstuinieren - Vergeten groenten - Verse knoflook #moestuin
1_fB9wNc7BY 11:31 Stadstuinieren - voorzaaien februari - prei, ui, artisjok en aubergine #moestuin
KAD7cy78gww 2:21 Stadstuinieren - Bodem bewerken met woelvork of Grelinette #moestuin
mAgmu6Cen4A 2:27 Stadstuinieren - Het eerste nieuwe groen in de moestuin #Moestuin
KG4vHqndXco 7:09 Stadstuinieren - Moestuinbak maken #Moestuin
WhG7yYM4taU 6:54 Stadstuinieren - Rondje moestuin - januari #Moestuin
HfLilInjMnM 9:42 Stadstuinieren - Druiven snoeien - Wintersnoei #Moestuin
psT9AmXWeBs 7:01 Stadstuinieren - De bodem in de kas vervangen - nieuwe structuur en voeding #Moestuin
HS_kw-GA628 1:03 Stadstuinieren - Het leukste tijdschrift over het kweken van groenten, fruit en kruiden. 🌱 #Moestuin
V_GfSecAdnY 6:01 Stadstuinieren - Mest, compost en blad - in laagjes #Moestuin
W-WjAHVbv5g 2:04 Stadstuinieren wenst jou een groen, gezond en gelukkig 2023!
wgyStB-J2qI 4:43 Stadstuinieren - Vorst in de moestuin - winterharde bladgewassen. #Moestuin
HS4jOqdAIzE 2:43 Stadstuinieren - Winterkou en witlof #Moestuin
M5EW-7uv0Oo 3:22 Stadstuinieren - Bedek en voed de bodem - Mulch, mest en compost #Moestuin
_Oqho_ylI1I 3:24 Stadstuinieren - Meerdere oogsten - Knolvenkel, broccoli en Nieuw-Zeelandse spinazie #moestuin
nT6o6bs3J6o 3:33 Stadstuinieren - Zaden en plantgoed bestellen #Moestuin
TrT-o-HYQAM 2:14 Stadstuinieren - Witlof telen - Zo doe je dat #Moestuin
97azw6QEtfo 3:07 Stadstuinieren - Oogsten in november #Moestuin
Kj8_smwMJow 8:01 Stadstuinieren - Kruiden in pot op het terras #Moestuin
gIvJZMtUZdE 6:24 Stadstuinieren - Verveine, citroenverbena - snoeien en drogen #Moestuin
i6i4tpTrcDM 1:01 Stadstuinieren - Het leukste tijdschrift voor de moestuinier 🌱 #moestuin
BmIg7iVr6to 13:16 Stadstuinieren - Compost maken deel 2 - Een beetje theorie #moestuin
sRRJqmDsPao 3:13 Stadstuinieren - Kruiden invriezen in olijfolie #moestuin #oogst
Xc2a3m4QAJ4 2:20 Stadstuinieren - Een schuilplaats voor oorwormen maken - Zo doe je dat #moestuin
sfKh-tEGd_E 5:54 Stadstuinieren - Knoflook poten - Zo doe je dat #moestuin
bz2ZiEHRn0o 6:24 Stadstuinieren - Droge boontjes telen, oogsten en doppen - zo doe je dat #moestuin
uC15UtFqnlI 7:38 Stadstuinieren - een rondje door de moestuin - half september #moestuin
99Pz03LabgE 4:23 Stadstuinieren - Water geven - welke gewassen en hoeveel dan #moestuin
S6KcOrFV3nY 5:57 Stadstuinieren - Compost maken deel 1 - Lasagne methode #moestuin
Y0mammRTZ7Q 3:46 Stadstuinieren - Zaaien in augustus #moestuin
6desxMSEFk8 4:34 Stadstuinieren - Zongedroogde tomaten - Zo doe je dat. #moestuin
3_7j8XGfOLc 3:31 Stadstuinieren - Zelf zaden zakjes vouwen - Zo doe je dat
NzhKvcN3YdA 3:39 Stadstuinieren - Hoekjeskool of Rubras - een nieuw gewas
W49dfzlUUDE 5:50 Stadstuinieren - Tuinen kijken - Moestuin klooster Oud Bijdorp
KJXHqmlBuRM 5:24 Stadstuinieren - Van peulen naar vruchtbaar aardbeienbed
reBnrC-zh6A 8:00 Stadstuinieren - Aardappels oogsten - Knollen, bessen en beestjes
Ds5dYclBWz4 4:49 Stadstuinieren - Tuinen kijken - in de Loire Vallei in Frankrijk
3HQ5kMugXTI 4:14 Stadstuinieren - Genoeg te doen in de moestuin
BMt4lmiD__s 3:53 Stadstuinieren - Te kleine tuin of balkon? - Kijk omhoog!
lnb6TkuI23c 3:25 Stadstuinieren - Vogels én een nest! - In de stadstuin
TYXf9Ri-0bc 8:56 Stadstuinieren - Tomaten en druiven dieven - Zo doe je dat
BGOyHKxqfVw 8:21 Stadstuinieren - Een rondje door de moestuinen - eind mei
2t4k7W1iASk 7:00 Stadstuinieren - Rabarber oogsten - Zo doe je dat
KkM5XMbuyX8 4:49 Stadstuinieren - Tomaten buiten planten, na de ijsheiligen
lLx1lAsvJuw 3:30 Stadstuinieren - Groene asperges oogsten - Zo doe je dat
JFA-3KwNLt8 10:26 Stadstuinieren - Basilicum kopen, zaaien en stekken
hQw-YE6Q60k 5:11 Stadstuinieren - Een rondje door de moestuin - half april
N9O_3MlpTrc 3:22 Stadstuinieren - Bloesem, vorst en bestuiving
u7q5aJJ39HA 3:21 Stadstuinieren - Eeuwig Moes - meerjarig koolgewas
OmuB1U0HxbI 4:46 Stadstuinieren - Vroege aardappels poten - Zo doe je dat
fYj-frPfeF0 5:37 Stadstuinieren - Tomaten, Pepers en Aubergine voorzaaien - Wanneer doe je dat
5z3gLZIoInA 7:05 Stadstuinieren - Aardappels voorkiemen - Zo doe je dat
bEmCUcU-cvQ 4:45 Stadstuinieren - Zaaien en planten - begin maart
rYYCAKxfOnA 2:52 Stadstuinieren - Optimaal gebruik maken van zonlicht - Zo doe je dat
3rF8f4r_EJk 3:08 Stadstuinieren - Zaden bewaren - Tips
abMdcAUTSpA 3:02 Stadstuinieren - Weefkunst met natuurlijke materialen
a5RE1H_5tJc 11:47 Stadstuinieren - Zaaien en voorzaaien in februari - het seizoen is begonnen!
aELlmAvkmoY 7:12 Stadstuinieren - Eenjarige, tweejarige of meerjarige gewassen? - Zo zit dat
g0AFu5x4IUE 6:18 Stadstuinieren - Wortelonkruiden bestrijden - Zo doe je dat
MB3St12AoSs 3:08 Stadstuinieren - Bietjes kweken
XE1qiaT5-NQ 4:08 Stadstuinieren - Radijsjes oogsten + recept Tzatziki van radijsjes
fCJUYM2z--s 3:03 Stadstuinieren - Aardappelen oogsten
icNSctLWZFg 3:10 Stadstuinieren - Planten Afharden
NlBbRH1KkGU 4:25 Stadstuinieren - Cantaloupe meloen kweken
P_mM0ATJHSQ 3:14 Stadstuinieren - Avocadopit planten
xDiUFUCeczM 4:59 Stadstuinieren - Worteltjes kweken + Recept worteltaart
6PwM_f-kyVE 3:09 Stadstuinieren - Recept Pompoensoep
hJsSB-D6XbA 3:51 Stadstuinieren - Zo maak je Tandpastapoeder
ES9NtOExpEo 3:19 Stadstuinieren - Zaden oogsten van radijs
Tv9dnLsmYvg 3:34 Stadstuinieren - Broccoli kiemen
Lf4YxNnUzow 3:41 Stadstuinieren - Recept Broccolitaartjes
5ydtkro30lA 3:56 Stadstuinieren - Peultjes kweken
3in7UL3g8gc 4:42 Stadstuinieren - De kip en het eierkoeken
PYA9HiNCQhs 3:33 Stadstuinieren - Recept chilivlokken
zHq66Av6ucM 3:24 Stadstuinieren - Vogelvoerhanger
RjDRlj_B1vU 3:55 Stadstuinieren - Groot Kaasjeskruid kweken en oogsten
VB0pKyGFsAI 3:46 Stadstuinieren -Tuingereedschap schoonmaken
d1V0KQKBdWk 4:44 Stadstuinieren - Composteren
N23wua8Fa8U 5:38 Stadstuinieren - Italiaans moestuinplan
OQOgSc8ZAtU 3:49 Stadstuinieren - Prei oogsten recept
sRTQL4N9nKI 3:12 Stadstuinieren - Olijfkomkommer kweken
OqW1M1qgRi0 3:15 Stadstuinieren - Muismeloen kweken
wZ116aJL-Ik 3:28 Stadstuinieren - Uien telen
QOB7nNP5wCk 4:01 Stadstuinieren - Tuinkers zaaien - kiemen kweken
CsUiyp9z74s 5:11 Stadstuinieren - Zo maak je een bijenhotel
fUvxDmhr-64 3:28 Stadstuinieren - Tomatenketchup maken
DC6wrGkFRmk 3:48 Stadstuinieren - Kruidenolie maken
auODFWiObCg 6:18 Stadstuinieren - Watermeloen kweken
jmwVp8e0q-I 6:36 Stadstuinieren - Kiwano kweken
yJIKC-7LHgo 4:27 Stadstuinieren - Bosui laten hergroeien
nxWdx40wP8A 3:53 Stadstuinieren - Kruiden uit de winkel. Hoe houd je ze goed?
HLqfG3GdAOg 3:37 Stadstuinieren -Kruiden uit de winkel. Hoe houd je ze goed? 2
TaL6eLq1CO8 3:43 Stadstuinieren - Kiemen uit Chiazaad kweken
01lxSFW3Uwk 3:36 Stadstuinieren - Maiskiemen
G61Dxxp_RQE 3:08 Stadstuinieren - Bietjes kweken
dYdL9cp_KfQ 5:44 Stadstuinieren - De planning van zaaien, planten en voorbereiden
2tZPw8P3hTA 6:45 Stadstuinieren - het einde van een jaar én het begin van een nieuw teeltjaar
-iIOepJdj3s 3:01 Stadstuinieren - een snoephaag kado - voor basisschool de Nettelhorst
6UDizNS84sM 2:38 Stadstuinieren - De tuin in december - een rondje door de moestuin
eJ47LdEdoX4 2:23 Stadstuinieren - Wekenlang kiwi's en kiwisap - uit de achtertuin
8HLTv_W_3oU 4:02 Stadstuinieren - Wie vreet er van de kool?
R1PmF_H38TY 3:52 Stadstuinieren - De tuin in oktober - een rondje door de moestuin
96tbAkKkveE 3:53 Stadstuinieren - Twee eetbare bloemen - lekker en gezond
zm9tinuS3LU 4:38 Stadstuinieren - Bedden vol bladgewas - voor de wintermaanden
RowrX48x9s0 2:41 Stadstuinieren - Rode spitskool - een groente met een verhaal
-vWrk6lX3og 3:29 Een fruittuin vol pispotjes - de eerste grote opruiming
63wUpkx6cP8 2:35 Stadstuinieren - Bonen oogsten en drogen - om te eten en als zaaigoed
mga7oQEUlX8 3:26 Stadstuinieren - tomaten - zaden oogsten, drogen en bewaren
yTNpLg7SV5c 6:00 Stadstuinieren - Zaaien in september en oktober
cR2G41P3Bqs 4:22 Stadstuinieren - Instortingsgevaar - het wordt langzaam herfst
jsTfFzafTP4 7:39 Stadstuinieren - Een moestuin in Zuid-Frankrijk - inspiratie van verderweg
9vHULMQCEDM 3:21 Stadstuinieren - De bladgewassen - Families in de moestuin
cNci8FE2lxY 3:23 Stadstuinieren - Tuinen kijken - Moestuin landgoed Staverden
4KcZwlF62oQ 3:42 Stadstuinieren - De vruchtgewassen - Families in de Moestuin
HF1hxleQSUo 2:45 Stadstuinieren - Phytophthora in tomaten - buiten telen blijft risicovol
9SOH3ESRtEM 3:27 Stadstuinieren - De schermbloemigen - families in de moestuin
SZRwsiTRCC8 6:26 Stadstuinieren - Zonder zorgen op vakantie - Zo doe je dat
nH8fmg6KxzU 4:48 Stadstuinieren - Planten stekken - Zo doe je dat
W5bTR3uvZTY 6:02 Stadstuinieren - Planten in potten - zo doe je dat op je balkon, terras of daktuin
Ix8RAZlTkt0 1:38 Stadstuinieren - Vlierbloesemchampagne. Zo maak je dat!
vteCudJLIOM 3:20 Stadstuinieren - Midzomer in de moestuin - het begin van het vruchtseizoen
7F6LTmjNXOU 3:11 Stadstuinieren - Aardbeien - verschillende rassen junidragers
HR9j-SYsGQs 2:22 Stadstuinieren - Afstand houden! - een schoffelbreedte tussen de rijen
X4yje4T66ak 2:16 Stadstuinieren - Tomaten aanbinden - Zo doe je dat
nWsKBAj0aZo 7:27 Stadstuinieren - Een rondje door de moestuin - half mei
Fj2OiTv-GRg 3:19 Stadstuinieren - Opvolgend en gevarieerd zaaien - voor een doorlopende en afwisselende oogst
jG_-FXk_m7Y 5:11 Stadstuinieren - Wieden, bemesten, zaaien en bewateren - De handigste volgorde
K80syvOV0bc 3:02 Stadstuinieren - Snelle blaadjes telen - Zo doe je dat
bCZPuWtcFi4 3:22 Stadstuinieren - Kolen planten - zo (diep) doe je dat
MF7StHWFQl4 2:09 Stadstuinieren - Zomerwortel en pastinaak zaaien
wHzcTN8FmQY 11:21 Stadstuinieren - zaaien - waar moet je op letten
yJ9_2ZvCxLw 2:23 Stadstuinieren - Tuinen kijken - Moestuin de Hof van Hackfort
CkNUdcDJzgw 2:57 Stadstuinieren - de eerste bloesem - pas op voor vorst én vogels
3-bJsJCrToA 6:23 Stadstuinieren - bladgewassen zaaien in een kasje - zo doe je dat
gMs6bPRTi_8 4:04 Stadstuinieren - houtige kruiden snoeien - zo doe je dat
RrnlUq_Yq4U 3:05 Stadstuinieren - puzzelen met tijd en ruimte - door een koud weekend
9sW9Wswc5qs 6:52 Stadstuinieren - Prei en uien telen uit zaad - begin op tijd
fXaUkHeSx5w 2:38 Stadstuinieren - aardappels vervroegen - door voorkiemen
o5uuy65xfoY 2:02 Stadstuinieren - Rabarber bleken - zo kan je de oogst vervroegen
VXYcJXxjS18 4:17 Stadstuinieren - tomaten, peper en aubergine - voorzaaien in de vensterbank
hufQVdhEfC8 2:25 Stadstuinieren - de allereerste zaaisels en onverwachte oogst
un2NH98Ue3s 2:21 Stadstuinieren - Erwten, peulen, kapucijners en tuinbonen voorzaaien
cmqHodIhSVg 4:00 Stadstuinieren - Een nieuw tuinseizoen - klaar voor de start!
jtXP7Ln7Ok0 1:59 Stadstuinieren - Erwtenscheuten telen - voor een heel vroege oogst
JIh2RHMvJC8 7:25 Stadstuinieren - Groenten in bakken - Zo doe je dat
RVuG9_1PDA4 4:16 Stadstuinieren - Palm- en boerenkool - winteroogst
JLulkEQd2Ss 4:17 Stadstuinieren - Winterpostelein en andere blaadjes
gaSOZBo82-U 6:35 Stadstuinieren - Bodem bedekking - de moestuin onder zeil
rc0pLAmuSPY 2:07 Stadstuinieren - Midwinter in de moestuin
GV10-OsD8hI 2:52 Stadstuinieren - Groene Asperges - ook iets voor in jouw tuin?
74IbDgcqp8k 1:50 Stadstuinieren - Eetbare Kerstkrans
Ca8JdQjV9A8 5:03 Stadstuinieren - Zaden bestellen - hoe te kiezen?
Cc7Hcff76DE 5:02 Stadstuinieren - De tuin in november - een rondje door de moestuin
NoLVJvnAeKA 3:13 Stadstuinieren - Kiwi kweken in de stadstuin - van bloei tot oogst
_BOcyYKlYmc 4:45 Stadstuinieren - Frambozen snoeien - voor een extra lange oogst
T_dEm1DQur0 6:43 Stadstuinieren - bodembedekking in de winter - hoe doe je dat
MXR_GDyn8q8 5:27 Stadstuinieren - De tuin winterklaar maken - of niet
Y9hrzYPT_8U 8:31 Stadstuinieren - Bessen snoeien - Zo doe je dat
QeFeY0H5wGQ 3:34 Stadstuinieren - Een pergola en een groen afdak - meer ruimte en meer schaduw
uP6m3NCaqwg 2:39 Stadstuinieren - Een moestuin beginnen - recht of rond
gYqfM-LOF9o 4:06 Stadstuinieren - Knoflook poten - doe je in oktober
mjAJE-cnY14 3:09 Stadstuinieren - Prei telen per stuk of in clusters
wX03GOuWVmI 3:28 Stadstuinieren - Bieten in alle kleuren
1NhjE16v_xo 2:57 Stadstuinieren - Zonnebloemen - door snoeien meer bloemen
bCXbobqzGf4 3:20 Stadstuinieren - Kwartels in de stadstuin
gOg7B3SSkVE 7:44 Stadstuinieren - De tuin eind september - een rondje door de moestuin
9GX3IzBLwN0 3:13 Stadstuinieren - Winterpeen zaaien en oogsten
egkjt5f-H4M 3:17 Stadstuinieren - Verticaal tuinieren
k9TG0qYGdR8 2:41 Stadstuinieren - Boerenkool, palmkool en spruiten
CaNgr23wkJI 3:20 Stadstuinieren - Appels drogen
kgWUBHvH9Dk 2:19 Stadstuinieren - Zaaien in september - Veldsla en Spinazie
FrNe_UdtT5s 2:05 Stadstuinieren - Suikermaïs, de bevruchting
he_1A9qwqdY 3:22 Stadstuinieren - Kiwano of Snoskommer
cLgN2QOrvrg 2:50 Stadstuinieren - Een kruidenspiraal maken
qgbYI5X3FEQ 3:33 Stadstuinieren - Blije bijen, hommels en vlinders door vaste planten
LyU52hgpO2g 3:17 Stadstuinieren - Kamperen bij de b(r)oer
42JZ6ENGjMU 2:50 Stadstuinieren - Metamorfose van een achtertuin - Moestuin aanleggen
as-sDoz_H4k 5:26 Stadstuinieren - Tuintour: Historische moestuin Park Scherpenzeel
SU2QqMQ0Nws 3:29 Stadstuinieren - Bloemen in de moestuin
ZnBn9T4Pgnc 6:00 Stadstuinieren - Help! Slakken in de moestuin.
Dkd5KTHsSRY 3:10 Stadstuinieren - Aardbeien stekken - half juli
IJio-x62tiU 4:50 Stadstuinieren - Een rondje door Taco's Tuinen - half juli
BZHNMNKbiTo 4:39 Stadstuinieren - Metamorfose van een voortuin - van grind naar groenten
Hth0bIOEl3I 2:51 Stadstuinieren - Bessen oogsten met een snoeischaar
bZEDmhkdVPY 5:58 Stadstuinieren - Voorbereidingen voor de tweede helft van het teeltseizoen - begin juli
xR0nzIuPd24 2:06 Stadstuinieren - Water bewaren - water besparen
EUX5Kn1Ih38 3:41 Stadstuinieren - Lei en klimfruit
ercJjKRKLys 4:48 Stadstuinieren - oud & nieuw in de moestuin - Midzomer
vTlylQiHg1w 5:51 Stadstuinieren - Aardbeien en aalbessen in rood, wit, roze en geel - half juni
lsBJ0fTHh2o 3:41 Stadstuinieren - Kapucijners & Grauwe erwt, oogsten met je ogen dicht - half juni
uQ-_WZp3vEQ 4:38 Stadstuinieren - Coloradokevers in de aardappels - half juni
T2ovNa7DGTI 7:50 Stadstuinieren - Knoflook en ui oogsten en knoflook vlechten - half juni
vFh-J9857MI 3:17 Stadstuinieren - Een bed vol bladgewassen: sla, spinazie, snijbiet en meer
IjxatQiO7Jc 4:46 Stadstuinieren - Peulgewassen: mooi, lekker en superchique
zI3YQt2VZcE 3:28 Stadstuinieren - Frambozen en bessen aanbinden
QQnz2XyquJQ 3:39 Stadstuinieren - Water geven (2)
TsAHDytOx2A 3:43 Stadstuinieren - kruidenthee uit eigen tuin - 2e helft mei
uznPI4qhlB8 7:07 Stadstuinieren - Courgette & Co (ook pompoenen en komkommers) uitplanten, met een stokje?
-It5vkwIea4 4:11 Stadstuinieren - aardbeien op stro - 'strawberries'
hJMBnQujKE0 3:16 Stadstuinieren - Piepers in potten - dat gaat prima
laTu_DqTcyU 9:15 Stadstuinieren - Stand van zaken in moestuin en kas - 1e helft van mei
08O4kvTUMp0 6:52 Stadstuinieren - Schoffelen - Hoe doe je dat goed?
Y0IaJt1BssA 6:52 Stadstuinieren - Bonenstokken stevig zetten
2ZDNFO1pJbo 8:34 Stadstuinieren - Water geven (1)
FWOxggid7p4 6:57 Stadstuinieren - Maak kennis met Taco's (moes)Tuinen
lwyEJumnSK4 5:05 Stadstuinieren - Courgette & Co - Warmteminnaars en Koukleumen - 2e helft van april voorzaaien
ZYNBci2s-6s 4:14 Stadstuinieren - Bonen voorzaaien in houtsnippers - 2e helft van april
GdoDRJfSYfo 5:13 Stadstuinieren - Waarom zou je groenten en kruiden voorzaaien? En waarin?
sYQiViie-78 3:36 Stadstuinieren - Tomaten en Pepers verspenen / oppotten - begin april
L3fkz90fND4 9:25 Stadstuinieren - De aardbeien en bieten gaan naar buiten - begin april
HVHceitbQsw 3:22 Stadstuinieren - Bloemen, kruiden en sla voorzaaien - begin april

# Alan Watts
NpHqYnFELLE 52:55 Alan Watts - What Is Reality?
KpMGbjvBXSE 53:46 Alan Watts - We As Organism

# Orchestra of the Age of Enlightenment

0-N53d5K4W4 6:13 Introducing the Double Action Harp
yoL43PiifpE 3:35 Introducing the Ophicleide
mnhy31PNUvU 2:56 Introducing the Serpent
5twPxqGCtMI 6:55 Introducing the Baroque Clarinet
OP_gPPxm3Ek 12:21 Introducing the Baroque Violin Bow
GaAI51EhoNc 5:11 Introducing the Baroque Piccolo Cello
W-eIN18-p2w 6:22 Mozart's Adagio in B flat major, K411 on five period clarinets
Ey_5GJLzWTw 9:36 Beethoven Piano Concerto No. 3, Largo | Sir András Schiff
pSKJB5arZwk 5:08 Join our Youtube Membership Channel!
1KLNKYzFV5g 1:40 Mission to Mars with Sanjeev Gupta | Bach, the Universe and Everything
CMxCh0AYmy0 9:51 Haydn: Symphony No. 103 'Drumroll' - 1st movement
Ni5oxGDbCR4 1:00 The Genesis Quest with Michael Marshall
0J8QpgBEQs0 4:16 JS Bach | Harpsichord Concerto in A Major, BWV 1055, I. Allegro
UZ8FppOKkkY 5:09 The Birth of the Keyboard Concerto
hFnKmqAOmBs 10:56 Introducing the Baroque Recorder
ji6yEWEEpQk 1:10 LIVE AT THE HEX Highlight Reel
MdAEyQon4c4 1:11 The Story of Gilbert & Sullivan's 'Princess Ida, or Castle Adamant' (in about 60 seconds)
R1uftELUess 0:36 Our 2023/24 Season - Coming soon
VB708yceJSs 0:31 LIVE AT THE HEX | COMING 5 MAY 2023
v3IchXpDidQ 4:11 TELEMANN | Trio Sonata in C Minor TWV 42:c2, Allegro
xB5znyirrSU 4:54 What is Stile Antico and how did Bach use it? | Illustrated Theory of Music #12
IyBap2iFMjo 4:52 The Pioneering Women Composers
XadY69d40JE 10:34 Introducing the French Bassoon
CFK94eOba6Q 2:08 The Difficult Bits: Clarinet and Basson in Saint-Saëns
Z9ZHiBGRn5o 1:12 Introducing Handel's Tenor #shorts
xZc20T4mGfM 6:03 Introducing Handel's Tenor
lTeHAffuq4w 3:25 What's so great about... Saint-Saëns Cello Concerto No.1
NJO5_L1c1Zc 5:33 Saint-Saëns: The Man and His Music
9o-TOg-y_BI 15:22 Introducing the Baroque Guitar
ocFDXgtOD-4 2:26 Why Support Us?
Uwv0obLUylo 12:13 Why Timpani Kept Growing (Two Pint Timpani) | Evolution of Timpani Part 2
rZ2rAGbGTW0 5:58 HANDEL / FINNEAS: Where'er You Walk, starring Hugo Hymas (tenor)
6XDB9hkX3hk 3:26 Thou Shalt Break Them - Inspired by The Verve | Nick Pritchard - Handel's Messiah
hWjYD414ydg 5:32 An Introduction to The Moon Hares with James Redwood
ngpYT2IOiwE 2:31 Behind The Moon Hares
OEY7h-fTf7M 0:26 OAE - The Orchestra in a School by Drone
9Zp807tD_Qs 1:00 LIVE AT THE HEX in 60 seconds
sCZ2lp-YwwI 1:06 OAE Rising Stars: Where're you walk (Behind the Scenes)
k5duAqWy95M 0:38 Bach, the Universe and Everything
m6tbN8NHpsU 4:44 The Rime of the Ancient Mariner - Rory Kinnear
lLQnCNZQCkc 4:56 Sospiri (Sighs) by Edward Elgar
5cOHoAOSB8M 2:49 Beethoven Without The Van
EdrEJq4G_6k 9:56 Jürgen Krauss (from The Great British Bake Off) Introduces the Stadtpfeiffer
t_ERVpRupDQ 10:16 Introducing the Baroque Timpani | Evolution of Timpani Part 1
oOmDgEOiInI 5:38 Music for Superstar Castrato Senesino: GIOVANNI ANTONIO GIAJ - Fra l’orror d’atra foresta
viMru6SyyCY 10:26 Exploring Beethoven's Fortepiano
bLExM-KbeuY 2:25:00 LIVE AT THE HEX
G6SdhFI7h84 5:50 JS BACH: St John Passion - Evangelist recit (No. 6) and 'Von den Stricken' (No. 7)
N56wrMeGRts 13:23 BEETHOVEN: 6th Symphony 'Pastoral', 1st Movement - on Original Instruments
hTaw9TwFZ1s 1:14:03 LIVE: The Night Shift at The Old Queen's Head
LMyEXljumCI 32:04 LIVE: The Night Shift at The Old Queen's Head
Iq8WkkPZWjk 1:26:04 LIVE: The Night Shift at the George Tavern
riIpboxWv3U 8:13 Introducing the Chalumeau
7k_TGe-crFw 3:51 The Rediscovery of Schumann's Violin Concerto
G-8hUg-nRdM 8:54 Introducing the Cor Anglais
6gU_zn5uGsM 4:06 TELEMANN: Trio Sonata in A major TWV 42:a6, Allegro
0yDoqwjarNQ 3:24 JS BACH: Jesus bleibet meine Freude, BWV 147
ueTWLXIZwtc 3:41 JS BACH: Magnificat
KKTqN894UCc 3:49 MICHAEL PRAETORIUS: Es ist ein Ros’ entsprungen
_-XIpGwLR34 5:32 TELEMANN: Umschlinget uns, ihr sanften Friedensbande, Aria
ikzjRR-_-JI 4:12 GIOVANNI GABRIELI: Canzon Duodecimi Toni (Arranged For 8 Violins)
nws3KudckOo 3:26 TELEMANN: Trio Sonata in G minor
GnKDt1xp5zk 15:16 JS BACH: Cantata - Nun danket alle Gott BWV 192 from Bach, the Universe & Everything
aJuxUrz61kY 1:40 Look, No Bass!
anf22WLxMR0 3:26 How can you spell BACH in music?
MK79MKfNG5U 1:17 Kristian Bezuidenhout plays Schubert's Trout
UtGYDyfPlCg 4:58 What is Chamber music? | Illustrated Theory of Music #11
4GKO8MaXxr8 10:31 Introducing the Cornett
# WDLIVYoSVJU 0:30 Announcing 'The Wilderness Pleases'
1zOMzjIniVs 12:56 An Inside Scoop On The History Of Gut Strings | Illustrated Theory Of Music #10
oFZyFkXMu5k 1:52 Sea Voyages and Salvation with Roderick Williams
0mXCQZOYMcU 10:08 MOZART: Piano Concerto No.23, K488, Last Movement (Steven Devine: Fortepiano)
66g6i5FVLfw 4:01 What Power Art Thou (Purcell) film inspired by Gotye | Dingle Yandell
XLUF0uo2wlo 0:53 Specialise in music from a particular era? Too restricting.
HBC92ISqLJs 46:56 OAE Meet the Band with Kinga Ujszaszi
Gccx824NVVo 8:23 Making sense of the suffering in Bach's St John Passion | Mark Padmore, Nakhane and Grant Gee
M5gPcBqtDt4 2:51 Why does the Oboe Da Caccia move us to tears in St John Passion?
hRMA9q5n9bc 3:17 What is the secret to St John Passion's enduring relevance?
oAJnQ3tdNYk 7:42 Continuo in St John Passion | A closer look at the Viola da Gamba
# RxEbYxjVoNw 2:04 OAE Regeneration Appeal
tCj3D2iXq_A 1:36 Bach | St John Passion
VgOBxnmdTf8 6:32 Rameau's Les Indes Galantes | modern interpretation by Acland Burghley students
vA281KN8f_I 4:06 Mezzo-Soprano Helen Charlston reacts to her Coldplay inspired music video
ybig-0BBihA 11:26 Introducing the Lirone
19RJKnh9hbU 3:54 Dido's Lament (When I am Laid) film inspired by Coldplay | Helen Charlston - Remember me - Purcell
m13ajql-WXo 3:22 WAGNER Tristan und Isolde
U0t59VxBPfE 10:26 The Curious History of the Clef | Illustrated Theory of Music #9
98hJ1B8uhko 3:10 Introducing Mozart's Single Action Pedal Harp
jpQaGJTh2mU 11:43 Introducing the Sackbut
JEMn4veCPLE 2:09 Beethoven and Brahms on OAE Player
MqKmNjAc-xs 5:07 Introducing the Evolution of the Bow
8DSP6PQBL88 1:49 Handel's Messiah trailer
EB3EEJX5ejw 0:31 Mozart's Minor Miracles in the Age of Reason Trailer
KK0vyTsc2NE 6:33 Baritone James Newby reacts to the making of his music video
CF5bOdRpNh4 6:16 Handel ‘Cara pianta’ from Apollo e Dafne | inspired by Radiohead 'No Surprises' with James Newby
# zmVjpiMEHYo 0:33 'Seeing Double' with Nicola Benedetti and the Orchestra of the Age of Enlightenment
Qzvp4_igvyw 12:34 The Harmonic Series | Illustrated Theory of Music #8
# Gj7j0PXOLeo 0:53 Introducing OAE PLAYER
# 0rgM3PVukb0 59:16 'What is the Value of Digital Art?' Panel Q&A
# PV9Jut4Iu6A 19:43 The Voice: Anatomy, Function and Covid | Dr Declan Costello
siHMpS8TStM 8:01 What is the Canon? | Illustrated Theory of Music #7
xOsZ10z-iMc 5:35 What is the Secret to the Chorale? Part 2 | Illustrated Theory of Music #6
4OLDcvOpXKw 7:41 What is the Secret to the Chorale? Part 1 | Illustrated Theory of Music #5
O7XG8aRRb3E 5:52 Something Special Happens: Camden New Voices 2020
QeDjTYH7MBQ 3:35 What is a Cantata? | Illustrated Theory of Music #4
AOPYv2rjVIo 2:05 Telemann Concerto in A minor, TWV 44:42 - Allegro | Bach, the Universe & Everything
sQgNgs5EzaQ 8:53 Introducing the Oboe d'amore
fgJDrNjQyfI 5:18 The Hemiola | Illustrated Theory of Music #3
SyBYRlB6VW4 3:11 Introducing the Hurdy Gurdy
o59bjj3WUUo 29:02 Musicians on Call Online 6: All About the Bass
hJVoN_JQPT4 12:22 Appoggiatura | Illustrated Theory of Music #2
NdlANO97RiU 33:59 Musicians on Call Online 5: A Folk Journey
nr95NjOL21o 48:06 Schrödinger’s Pandemic | Bach, the Universe & Everything
# -7xlZARdd28 2:12 Introducing the Illustrated Theory of Music
s684W1WbXTY 8:02 What are Barlines? | Illustrated Theory of Music #1
shWTiybxBEE 34:06 Musicians on Call Online 4: Pastime with Good Company
VrFUHFL34as 32:11 OAE TOTS: interactive sing and play for 2 - 5 year olds
_KNPIJHcqtA 35:15 Music and Chat for a While - OAE Interview with Ian Bostridge
I4IEF6F5MW4 27:52 Musicians on Call Online 3: Learning New Skills
8E4-Db2-p7g 29:25 Musicians on Call Online 2: Instruments Galore
gL_lgsysAiw 30:02 Musicians on Call Online 1: Hello!
eumxlVBlG5k 3:57 Quarantine Sessions: Bach's Air on a G string
EptO4p-ynQk 34:07 Can Bacterium Compute? | Bach, the Universe & Everything
jQC4mglx5uE 2:20 Introducing the Baroque Spoons
XQoE3JyOjqs 12:37 A New Created World
# fFo-VJ8jUkU 2:15 The Night Shift on hold
nb-AkHlKgKA 2:41 What Classical Musicians Give Up For Their Careers
FcM0Jt6Xf-Y 30:04 LIVE STREAM: Classical Music, Minus the Rules - The CLF Art Cafe, Peckham
U0KLAQ_iiEM 2:02 A Quick Guide to Thomas Mann's novel, Doctor Faustus
# ptQJdIv2uUI 9:23 Introducing Beethoven's Flute
# TBV6U-dUJwY 3:49 Why support us?
lv9W7qrYhbk 7:15 Bach vs AI: spot the difference
BO2JeKiwbvQ 10:38 Introducing the Viola da Gamba
rLYRfHjZIy8 6:47 Introducing the Baroque Contrabassoon
QAcp9useNxc 2:12 The fine line between Salvation and Damnation
FAnjAVtuck8 2:54 Quiz: Organ in the office
Y7k7pX6x8g4 2:10 What is Enlightenment?
G1rrUCTUOKU 12:41 Our Band | Orchestra of the Age of Enlightenment
HMgD6ezml7U 4:27 Introducing Goossens' Oboe
# wPNWrcYQujE 1:27 Sibelius Symphony no.2 (rehearsal)
HNt6-q3suo8 6:29 Max explains... where we play
# I7QAqZkuV5s 0:48 Toutes Suites NOT Toot Sweets
# I5l7yNxX6ps 1:09 Gilbert and Sullivan - Once More Gondolieri
# ocvATSndzFA 7:09 The Birth of the Symphony
cPvpyI-bmEM 5:16 Introducing the Oboe da Caccia
iRO4yreLSmw 3:46 Introducing the 19th Century Horn
# ifBHEcsWMHg 1:45 Love and Duty, with Magdalena Kožená
eVabz8LneI4 9:59 Introducing the Baroque Theorbo
1z2xtmkqaAs 4:31 Lagrime Mie - Barbara Strozzi
D3NCGSvKHCQ 8:41 Introducing Mozart's Clarinet
v-J3YkRKn7c 6:45 Introducing Handel's Organ
9owI4Mnym0w 3:36 Fantasia on a Theme by Thomas Tallis | Vaughan Williams
# pfLPYKw5h38 3:35 Life, Liberty and the Pursuit of Happiness: 2018-19 season trailer
sBD6OhkyW-Y 3:54 Why are we so obsessed with sending music into space? | Dallas Campbell
MgwE22lg9cA 4:01 Mozart Horn Concerto No.4, Rondo - on natural horn
h9g1c2bZSq8 4:23 What is Chamber Music?
hcfl3lYQy9M 3:23 Introducing the Clavichord
gMoOhCh_GUM 5:32 Introducing Beethoven's Contrabassoon
KfBoVGIoobY 10:29 Introducing the Baroque Double Bass
2ef95BZfYcw 4:52 Introducing Mozart's Fortepiano
fAGsmq2gZ5c 3:07 Why is it called the Surprise Symphony? The secret of Haydn's success
eFn992wz-ss 3:43 The Science of Attraction
# zXAWa_rnyus 0:33 The Best of Dance 1692
# YRBuoup80UY 2:27 VIERDANCK | THE NIGHT SHIFT
# VhMzEiLqlrY 0:54 Dangerous Liaisons | The Greatest Hits of French Baroque
4LoqTzrFl7c 2:37 Our Rosenkavalier Film Orchestra
es4wecjHXCg 4:35 A lost art: music in silent film
6oAjCirkZjc 5:43 Introducing Haydn's Oboe
# oVXL-OTgjuo 0:44 Der Rosenkavalier
7vuq9Ls2OVs 4:13 Mozart's Naughty Notes | Rondo from Horn Concerto No.1
PLHC8I8RwMg 4:24 Introducing Mozart's Horn
-Kl71jEniLA 4:18 Mark Padmore explains Bach's St Matthew Passion
# MHmZYZPCb_4 0:34 The Night Shift trailer 2019
ZO88Ydj-S9k 5:49 Introducing the Baroque Cello
nhLcMFgPoBY 1:42 What is it like to be a mezzo-soprano?
wOkIZ9TjvYE 1:34 Nicola Benedetti: Beethoven on period instruments
# PbCEybm0by4 1:02 Life, Liberty and the Pursuit of Happiness : 2018/19 season teaser
eLpAaIqJPck 2:51 What are period instruments?
X8XdmhIUzJs 16:39 Particle physicist Tara Shears on Antimatter | Bach, the Universe, and Everything
# PMwszGtyfTk 1:28 The Big Give Christmas Challenge - Rising Stars
f4ZU4PlXqu4 3:31 What is a Cantata?
UDMCWta1dns 2:35 Trad Klezmer, Die goldene chasene
Z4o14vNIOIw 2:57 Double bass bow: French or German?
LQ2MuAvIz0A 3:32 Sir John Pendry: What is light?
lHvTU9q5K-0 1:56 OAE back at West London Synagogue
HfTZ_c22N4w 0:30 Bach, the Universe and Everything
cdRX9Ba1Nx8 2:09 Soprano Louise Alder on Handel's Semele | Orchestra of the Age of Enlightenment
rHxcrZwtPEY 4:50 G minor Chacony by Henry Purcell | The Night Shift
UEgOgkrncx8 3:23 Roman Krznaric: Is love what you think it is?
aKEBRD9skkY 6:00 Judas: Can the ultimate betrayal ever be forgiven?
l5R9tVMp9HM 1:10 What Is Right and What is Wrong? The Judas Passion and St Matthew Passion
ls-bij2qMT4 3:02 Introducing the Baroque Bassoon
QNxV92-6Gnc 1:26 From Baroque to Rock: Handel & Björk
_jGHJ3PprvI 2:29 From Baroque to Rock: Bowie & Beyoncé
Pl13kjCSCs8 1:50 From Baroque to Rock: Handel & Radiohead
DYpaoStM4js 5:45 Sam Hall, 18th Century folk song | The Night Shift
doRUl1jfJDY 2:57 Introducing the Baroque Viola
KLrVKBzfAZ8 0:36 The Musical Landscapes of King's Lynn
vVXveQ4DHpE 1:05 Introducing the Piccolo Violin
H_SS0WLaUsI 2:32 Introducing the Baroque Violin
YnwDlLIac_A 5:08 Introducing the Baroque Oboe
n6Ts2z9tXg8 4:56 Introducing the Baroque Flute
UT5OqjubfiI 5:07 Mozart's Horn Quintet, 1st Movement (on a hosepipe horn) at The Night Shift, Islington.
6XN_qgbM6Dc 6:51 Introducing the Baroque Trumpet
HEMeybr5Rdo 2:21 Introducing the Baroque Horn
# BRNhNR8EbKU 0:33 Come and hear the musical landscapes of Lowestoft
yXxe5wMNE3I 2:50 Steven Isserlis and Haydn's Cello Concerto in C | Orchestra of the Age of Enlightenment
# T0i3AOzLICg 0:35 Musical Landscapes - Durham | Orchestra of the Age of Enlightenment
7qagu9sTU5o 3:47 Sarah Connolly on Berlioz's Les nuits d'été | Orchestra of the Age of Enlightenment
# bwnfAe3PAso 0:55 OAE in 60 seconds
lQNdEWutiZk 7:05 Vivaldi’s Four Seasons with Kati Debretzeni, pt4: In Depth
JyYBZmth6zk 4:52 Vivaldi’s Four Seasons with Kati Debretzeni, pt3: In Depth
OovG_RWEqVE 8:54 Vivaldi’s Four Seasons with Kati Debretzeni, pt2: In Depth
# ozYcv8_CICk 3:32 Visions, Illusions and Delusions: 2017–18 season trailer
3t_M-fVRnz8 5:07 Vivaldi's Four Seasons with Kati Debretzeni, pt1: In Depth
7uFz-HkH_r0 3:06 Christmas in the 17th Century | The Geffrye Museum
soeq9TR5evw 2:19 Noel: A Christmas Celebration, Kings Place
Z7jWYiQz1cA 2:56 Introducing the Harpsichord
egL0z-lBMBQ 5:33 Passacaglia in D minor by Fischer | The Night Shift
# 03z6sTP2jRQ 0:30 Mad skillz from footballer turned harpsichordist Ottavio Dantone
gnz4CgYS_oM 2:33 BBC 'Embedded' composer Matthew Kaner chats about his new piece for The Night Shift
kqV1ye-AMWk 2:04 The Choir of the Age of Enlightenment 'Faire is the Heaven - Sacred Songs of Love'
Mtq2aB_F27I 4:58 Polacca By Punto | The Night Shift, The George Tavern
WSlvLS1t0XU 2:55 Vibrato with violinist Julia Kuhn | Orchestra of the Age of Enlightenment
# XXVMQS8wScI 0:09 The Night Shift live from Old Queen's Head, 26th July
DLuM8cbc1dM 6:06 Explaining Pitch | Orchestra of the Age of Enlightenment
3g_PCnAGnfg 2:26 Introducing the Schnellar Timpani
nBC7zSACN6U 1:31 "Play as if from the depths of the forest"
# bNyfOQgCjY0 0:38 New Night Shift venue: The Bussey Building, Peckham
lTHP_RKMO8k 2:36 Max Mandel on Mozart and Michael Gordon.
TSqBYccihhU 9:55 In Depth: Sarah Connolly on Mahler and more
4NWoXEgs0HU 2:30 Lisa Beznosiuk on the flute in Bruckner
bSMTB1lkXUk 2:38 Philip Dale on the trombone in Bruckner
bF18Hst1ILY 5:36 Watercycle 2015
Qn8oKHRmGhw 3:30 Roger on the the Horn in Mahler
d0JHZhhA7pc 2:51 Daniel Bates on the Oboe in Mahler 2
N5vy5lrbkqc 4:25 Vladimir Jurowski on Mahler
aEag95NcMfA 2:30 Madness and genius - an overstated connection?
9tkib1MezlY 1:48 Hen party - Haydn's 'Fowl' Symphony
1MqId5hqql0 4:14 Schumann’s Violin Concerto
oEQ01yS4J6U 1:20 OAE musicans reveal their New Years Eve plans
R0uEobFss5k 2:27 The Piano Tuner: Sjoerd Heijda
# m9zEjAzUes0 0:49 DJ plays Bach at the Boiler Room!
MaKnfDddgLI 4:46 OAE Archive #1: Bach's Double Violin Concerto (1st movement)
# HJyut2PIXN0 0:07 The Night Shift: 30 November 2015, St John's Smith Square.
eC-0V4kV5XI 3:06 OAE at West London Synagogue
DZy6qJykJsU 1:48 30 Years of Breaking the Rules
# SpmrBUGSpk0 0:16 The Night Shift: What the audience thought
dPVXATS21Hk 2:11 Watercycle in Brighton: Part 2
ZJghuZ6kHuQ 1:54 Watercycle in Brighton: Part 1
# dpG1b0VHHZ4 0:55 Behind the scenes at our Birthday Photoshoot
0sZHfw6Fn5g 21:17 Violinist Catherine Mackintosh on her career and her instrument
xh7GLNG8pRw 6:55 Violinist Alison Bury: Her Instrument
zIUH_XlP_bs 3:29 New Music for Old Instruments: Stevie Wishart on her new composition
# 6-h-j55SELE 0:06 The Night Shift: 12 May, Southbank Centre
6YjMZ3WIvw4 1:33 The Night Shift: ask the musicians #01
sVkE6TtRYHM 31:36 Post-concert discussion with Steven Isserlis, Isabelle Faust and Robert Levin.
# DcVqcIpel_Y 1:08 Best of Both
u3yvfFz42d4 3:07 Adam Fischer talks about working with the OAE and Dvorak.
# Gm9539tpXKg 1:52 The Night Shift NY - 1 March 2015
# uhQjCsoTNw0 0:41 Rules? What rules? The Night Shift at the George Tavern
HZIW70PQ5cg 2:17 Vladimir Jurowski on Mussorgsky's Boris Godunov on period instruments
iPcqkfs0QvU 2:05 Flying the Flag: The Bohemians - Myslivecek
V50kq9aJapg 2:31 The Tempest at the Sam Wanamaker Playhouse
MGTacLQ_r1k 1:35 Vladimir Jurowski on Tchaikovsky
k0RydjhU908 3:16 Andrew Mellor on Handel's Messiah
3FFur8rHqds 2:41 What happened when the OAE took The Night Shift to Duckie?
# 4MDm_2rNrt4 0:28 H Factor teaser Kings Cross has got the H Factor. Have you?
mHuYJjdUyiw 2:41 "It should make you smile" - OAE musicians talk about our 'Lord of the Strings' concert
EwixYN2WZ1g 3:12 Richard Tognetti on the 'Lord of the strings' programme
# rYolBRiNsGw 1:29 The Works: Your guided tour of the classics
# OxafORb8LCE 1:13 What the audience thought - Le Malade Imaginaire at Sam Wanamaker Playhouse
# vnIuFrxlB_s 2:34 Preview: Le Malade Imaginaire at the Sam Wanamaker Playhouse
RZO3rWanwoA 2:54 David Kempster talks about Donizetti's Les Martyrs
# lrBDq-ra9Bw 0:39 They've been. Have you? Join our A-list audiences* and get 15% off tickets
# nxEGDaELCVU 1:46 2014-2015 concerts trailer: True Sound, True Music
6LZCVQsQk38 4:12 Rameau's Zaïs
# pdsfU510IZ0 0:41 Introducing...the 'other' Beethoven
Qt0W1Keaqtk 2:08 Two minutes on...the Ophicleide
84LH1alXfQc 3:20 In rehearsal: Sir Roger Norrington conducts Berlioz
# YqiCl8KDg6o 1:03 OAE in rehearsal: Rameau's Anacréon
# O_m0lKpzRdI 2:52 OAE Education: Watercycle
XUkTkfdc6vE 4:04 'Fairest Isle' by Purcell | The Night Shift
azcdjEia7xI 3:03 Sir Mark Elder and Joyce El-Khoury talk about Donizetti's Les Martyrs
bOaXH6oAZIU 1:08 Boyce's Solomon - in rehearsal
# yAld19m8P6o 0:35 Mildly Rude
# QyrPkxvFVuo 0:54 The Night Shift - Burning up the rule book
FrZvTWT5M_A 1:23 Sir Simon Rattle rehearses Haydn's Creation with the OAE
pcEuhEUuTJQ 5:52 Rameau's Zaïs
# UkCNJtLMGVk 1:19 Gamechangers: Symphonic Greats - audience reaction
-qTxxQbwJN0 2:19 Spinal Chords by Sally Beamish | Orchestra of the Age of Enlightenment
# xxkryCD6xuc 1:38 Introducing... The Night Shift
GLfXDIbUIjY 1:12 The OAE rehearses Schubert's Symphony No. 9, 'Great'
XD4kNY34AoE 3:15 Introducing the Violoncello da Spalla
S5Np9ncOId8 1:13 OAE: The Works (Trailer)
# iiI76msHiiQ 1:28 'French Fancies' audience reactions...
SpP8uVR0JX4 6:18 How to make a hosepipe horn
3fcVU_i0QrI 3:54 An interview with the Labèque sisters
km__RL6HhC8 0:52 Offenbach's Fantasio: Trailer
j_cxE7dZhrA 4:00 Sarah Connolly and Sir Mark Elder on Offenbach's Fantasio
HDQLdXXKbEE 2:20 Fantasio by Offenbach: The Story
2-Z5BnAnEBs 1:18 The Night Shift: Beethoven at the movies
YKNVOM3cYwI 3:08 Performing Beethoven's Symphony No.8 from the first edition parts
bViZG58urQc 3:52 Vivaldi's Four Seasons - Winter, Allegro | Choreography by Henri Oguike
KliIwPMqU1A 3:28 Composer Clare Connors
fHfhs85kgm4 3:31 Kim B Ashton interview
8_zZLhix4wg 2:39 The Night Shift Pub Tour: The story so far
FRqJryj97rQ 2:52 William Christie on Rameau
# CZjy10dK5TU 1:13 Add fireworks to your Monday. (and get 10% off)
# UIKHiVEu63w 1:05 MONDAY
mKevUFEljS8 2:23 OAE New Season Trailer 2013-2014
h6onNwsjd68 4:01 Laurence Cummings chats about The Night Shift at Wilton's Music Hall, 31st July
# 8-R4qvKTHNk 5:50 3 June 'A Tribute to Lorraine Hunt Lieberson' Audience Reactions
# AZ6R9nfYUdg 2:14 OAE Photoshoot Audience Interviews
# k84Dv_DGSf8 1:12 OAE Season Brochure 2013-2014, hot off the press!
# iZqvZINQtBM 2:18 The Night Shift: The Amersham Arms, New Cross, 23 April 2013, Audience Reaction
# zcxWFoEUmWI 1:16 OAE: Music for Everyone
# _HRWZcdpLeU 1:58 Bach Unwrapped Audience Reaction: April 2013
lKZh25_HBn0 2:44 John Butt on Bach
mR_tZ1FZFD4 1:52 The Night Shift: The Amersham Arms, New Cross, 23 April 2013
# aHJpWirnEjI 1:00 Mozart - Making Ennui Epic
# uKBFjR6mZlM 2:16 OAE: By Jupiter, January 2013: Audience reaction
8CuC4UMLdU8 4:40 V4: The Seasons - In Depth
# -ful9sG6FZM 1:50 OAE: Creation, January 2013: Audience reaction
# wMG4E6GZZs4 1:51 The Night Shift: 22 November, Queen Elizabeth Hall: Audience feedback
gwFOEhhs0Ec 1:10 V4: The Seasons: OAE & Vivaldi & Henri Oguike
Gb1-N1JTCX4 2:27 OAE Education: Shine a Light
# h0S0uHMkvLg 1:50 The Night Shift: Audience feedback, 25 October 2012 Queen Elizabeth Hall
Xcl_dv4BfPM 2:09 Art, Music and Other Visible Things: OAE@Whitechapel Gallery
# dBQ5U-PrTNw 1:53 OAE: Handel's Messiah 2012 - Audience reaction
cqBuOss-ysM 3:19 Messiah: the best bits
EKk8pDwgeKo 3:46 Rob Howarth and Handel's Messiah
TQSL7dg6zpA 2:46 The Night Shift: Old Queen's Head, 25 September 2012
V1WYwJphMyg 1:37 Queens, Heroines & Ladykillers: 30 September 2012, Royal Festival Hall
# XWGKNdB48wo 1:55 Queens, Heroines & Ladykillers: 8 November 2012, Queen Elizabeth Hall - Audience feedback
# dyWWOPoTNCU 1:54 The Works: Audience feedback from March 2012
# v1f5fLoXTEs 0:57 OAE Big Give Christmas Challenge
po3K92bMwxI 3:08 Mozart's Horn Concerto No.4 on the Natural Horn
Mal53MsgQk8 1:40 'Dubussy' Remix Contest Judge Chapelier Fou gives advice on how to approach your remix
-Mj6RvyZw1Q 2:45 Beethoven Symphony No.9 CD and Sir Charles Mackerras
GFE4YB2qKhQ 2:19 OAE: 'Queens, Heroines & Ladykillers' Competition
AqlM961J3Fo 2:42 French Impressionists tour with Sir Simon Rattle. Part 2
# 55MYnHqGvY4 1:03 The Night Shift at the Little Top, Greenwich
# a7wA4KZywQw 2:21 The Night Shift comes to Blackheath...in a tent
J1RnQjm5v3s 4:10 The making of the OAE 2012-2013 brochure - behind the scenes at the photoshoot
jU7C20gWs9Y 27:41 Steven Isserlis, Isabelle Faust and Robert Levin chat post-concert
zFHThUVYwLQ 9:19 The OAE on tour - with Sir Simon Rattle and the Labèque Sisters
Cng6wq1O5Gc 4:54 OAE: Pierre-Laurent Aimard talks about Ravel's piano concerto for the left hand
# _mqhtwX4oNI 1:51 Look! No conductor! Audience Feedback
# fsoDc9Tkn2M 1:59 Bostridge sings Bach: Audience feedback
# 7eTlLMBttZ4 0:50 OAE Season 2012-2013 brochure: Teaser
# vJIBxM6IDvw 1:07 Introducing the OAE Green Travel Mug
# feIJma92Dek 2:16 OAE: Audience Reaction voxpops - Berlioz Romeo & Juliet
# O6fRUQyaQAo 3:33 OAE: Beethoven's Missa Solemnis Audience Reaction
KRqCAhxTJpE 26:29 A Royal Invitation
# _DWb4UOQb4A 0:55 Anthem for a Child 2012
B-7pxFOuX5c 1:43 The Works is back with Bach
fMD_NnncFZU 1:57 The Night Shift in rehearsal, with Jon Jacob
A1FoKqEtFBs 2:46 A musical stalker...
# RynJicZQacA 0:47 The Night Shift at the Roundhouse / Reverb 2012: Trailer
Zy38DobmhBw 3:06 The Night Shift Pub Tour: The George & The Amersham
gPy6y65nFc4 4:47 Ceri and Will talk about The Night Shift pub tour
# qnW78hnbHl8 2:34 The Glory of Venice: Audience reaction
# q2V18CnEX9M 1:38 The Night Shift Pub Tour Trailer
# Z6XgSc5RQHU 0:33 The OAE and me
DEDAPTCyi5M 3:14 OAE: Laurence Cummings on Handel's Messiah
OYFIhlp4HZ0 3:25 Orchestra of the Age of Enlightenment: Beethoven's Missa Solemnis
RuJz3oCWEGA 5:30 Pianist Robert Levin on taking risks in performance.
# vyIE-S8Ez1Q 1:02 OAE: The Works Trailer
# W5hQDjRDmQ8 2:24 The Night Shift: Pub Tour Appeal
# dK1oACCIsq8 1:09 OAE: Edinburgh in 60 seconds
# _JdZm7_17NA 2:50 OAE at the Edinburgh International Festival
# vy_j50dpKHE 2:39 OAE: The 'mini' Night Shift
# 1fq3SJlXoq8 2:10 OAE: Audience Reaction - Sir Simon Rattle & the Labèque Sisters
# 8_N1tyGsgzU 1:33 OAE: 'May the fours be with you' - 4 May Voxpops
-KSPHtbew_E 4:50 The Night Shift: Behind the Scenes at Village Underground
38xSPP53g5I 4:36 The Night Shift at Village Underground, Shoreditch
vlHgLS62lhQ 4:54 OAE: The story of Mr John
# 6yrAxCB9VFk 2:34 The Night Shift: 4 May Audience Vox Pops
# 4hsJHaEWWwo 0:53 The Night Shift: OAE on Handel
# JGQL9hRuvvE 1:59 The Night Shift: Handel
gQwBAmbwXLI 3:26 OAE on Sir Simon Rattle
BSTXaQFfRmg 4:36 OAE: Megan's Alphabet Challenge (AKA the A-Z of touring)
wbQYGLTWRA4 2:05 Handel: What's the appeal?
0qhJO0DN5P4 1:05 OAE players on Handel
BBmCi3csiTg 2:46 The Night Shift: Conductor Roy Goodman on Schubert's Symphony No.4, 'Tragic'
tC6SPGuOOHQ 3:42 OAE: Baroque Contrasted Vox Pops
1tj4xLMNIGg 7:48 OAE tour diary: Sheffield
# mOPLCChomj8 3:06 The Night Shift Vox Pops
vuCtJFWrXb0 5:44 OAE: Matthew Truscott (violin) on 'Baroque. Contrasted.' at Kings Place
T4otceedkh0 6:49 OAE staff on 'Baroque. Contrasted.' at Kings Place
7Y3EAbtruMU 8:06 On tour to Paris with the OAE: Will's video diary
fESVfVa_gMU 5:39 The other amazing Mr. Bach
IiVlCgCb3vQ 4:45 OAE: A Royal flute lesson
# prMEDOFzXlU 2:15 OAE: Symphonic Enlightenment Vox-pops
X-afM0tMIlI 5:47 OAE Released: Artwork concept
4xosip6yBxs 4:03 OAE Released: Monteverdi's Vespers
x2Oan94pnCc 12:05 Vladimir Jurowski Interview
m6UcRGk0JRo 5:24 Sarah Connolly on Mahler's 'Lieder Eines Fahrenden Gesellen'
8Q0l_K1ZrnY 5:59 Cylindrical Vs Conical: Lisa Beznosiuk on Flutes, Mahler, Wagner and Liszt
rqbwGacYpew 5:48 Crooks Vs Valves. Martin Lawrence on Horns, Mahler, Wagner and LIszt.
jeEhatHlwvQ 1:45 The Night Shift: OAE players on death, vomit... and Mahler
WEYw8ca_Io0 1:52 OAE on Mahler
lXSvlG-_Eo8 1:59 Ceri Jones 'Seraglio' OAE Tour Diary
# PRKb_SWBFg8 1:57 Audience reactions to Mozart's 'Abduction from the Seraglio' performed by the OAE
VgIqVSzeaLs 8:45 French Connections - Orchestra of the Age of Enlightenment
# wAsehXN6l80 1:23 OAE staff comment on Cherubini's Overture Medée
Rj2-ZjbzElM 3:38 The Night Shift at Wilton's Music Hall, Aug 2010
nqwiuPRDzCs 3:23 Songs of Wars I Have Seen
VsGlckg8gq0 3:24 Orchestra of the Age of Enlightenment perform Haydn's Symphony No.64 at The Night Shift
UL7CVtQjIBc 4:46 The Night Shift: Backstage
YWfSmZectL8 3:20 The Night Shift - 28 April 2008
# zYL_I2F93tU 1:40 The Night Shift

# Island Voices Videos

# e3y4kKTnk9I 6:03 English documentary: Craigard, with Donald MacKinnon
# IfPxG5Rc1R8 6:03 Gaelic documentary: Craigard, with Donald MacKinnon
# fOGTKqNe_90 24:38 Aodán Ó Cearbhaill: Taisce bheo na nGael (2)
# 5qL7jDY3sUI 31:32 Aodán Ó Cearbhaill: Taisce Bheo na nGael (1)
-QmoxtlXntc 36:01 Aire air Sunnd: Staing na Gàidhlig
cnNvrkkmmJU 5:07 Jane NicLeòid: Talking Points Extract
VSK03u0YeKg 11:24 Doctor Joseph Farquharson: Talking Points Extract
4xZmzCN2qRg 7:55 Professor Udaya Narayana Singh: Talking Points Extract
YRiQBOc37Pw 6:56 Audrey West: Talking Points Extract
mHuQEPKW5hw 5:58 Kalyan Das Gupta: Talking Points Extract
krLY9ATKT5w 12:46 Professor Conchúr Ó Giollagáin: Talking Points Extract
1D5dOwSOV0E 15:54 Aire Air Sunnd: Launching the Island Voices workshops
10BUSDrdr6Y 49:36 Dr Will Lamb: Progress Towards Accurate Automatic Speech Recognition for Scottish Gaelic
ObJ-c1MT0Xs 1:16:06 Language Contact - Bilingual Balance? Talking Points Discussion 3
nnZOZD-l-fM 1:18:20 Language Hierarchies - English Ascendancy? Talking Points Discussion 2
xHWdO6mPl68 1:11:58 Language Endangerment - Gaelic Trajectory? Talking Points Discussion 1
JnwtBGuvb0g 7:10 Norman Maclean Talking Points, Part 3. Language Contact - Bilingual Balance?
CvcjkU-1Ybs 7:41 Norman Maclean Talking Points, Part 2. Language Hierarchies - English Ascendancy?
vUvu8ueMecA 7:34 Norman Maclean Talking Points, Part 1. Language Endangerment - Gaelic Trajectory?
XFGInaf_DGQ 3:31 Norman Maclean's homecoming (subtitled)
NR7w2G7ihYY 2:21 Language Contact: Talking Points 3 (short)
SBqk3mSQPM4 2:20 Language Hierarchies: Talking Points 2 (short)
4lfvx4cF6-4 2:20 Language Endangerment: Talking Points 1 (short)
VNgYaDP8dbM 7:02 Di Nyuuzpiepa
m2IYhk7_xMQ 10:00 Gaelic Jorni
# -nmZNvGw9vw 29:48 Caitlín Ní Bhroin (2): Taisce Bheo na nGael (Zoom)
# -FgU-xdz-i0 34:37 Caitlín Ní Bhroin (1): Taisce Bheo na nGael (Zoom)
0G4pnGencqE 9:49 Seanchas: Deireadh Sliochd nan Leòdach
# M9IdCRVYTKI 26:19 Anna Frater (4): Stòras Beò nan Gàidheal
NUZZi2JxqNQ 11:17 Seanchas: Coinneach Bàn, Fear-taca Lacasaigh
# CFAdfqY0zDE 30:22 Anna Frater (3): Stòras Beò nan Gàidheal
# FkV6H5Fw5oY 33:10 Anna Frater (2): Stòras Beò nan Gàidheal
# 5BCcGp3yrr0 26:35 Anna Frater (1): Stòras Beò nan Gàidheal
53S0BDgqgqA 7:21 Dijitaizieshan Senta ina di Hebrides
# AX9y0i-baK0 30:39 Alasdair MacDhòmhnaill (4): Stòras Beò nan Gàidheal
# bsZR7RH2N6A 29:35 Alasdair MacDhòmhnaill (3): Stòras Beò nan Gàidheal
# 9ULYjB49MK0 33:39 Pàdruig Moireasdan (2): Stòras Beò nan Gàidheal
# 41HK5rfgqkQ 33:49 Pàdruig Moireasdan (1): Stòras Beò nan Gàidheal
# 605mlP1idmY 31:15 Curstaidh NicDhòmhnaill: Stòras Beò nan Gàidheal
# HvFkuWeNIFI 36:15 Christine NicLeòid: Stòras Beò nan Gàidheal (Zoom)
# co-6effRTxI 24:07 Clíona Ní Ghallachóir (2): Taisce Bheo na nGael (Zoom)
# DHPdzMdKaM4 24:25 Clíona Ní Ghallachóir (1): Taisce Bheo na nGael (Zoom)
# VlrLXiVl4FI 19:35 Anna NicAonghais (2): Stòras Beò nan Gàidheal (Zoom)
# 3bOakOFmte8 20:45 Anna NicAonghais (1): Stòras Beò nan Gàidheal (Zoom)
# 5S59NCL5n6o 25:40 Calum Alasdair Friseal: Stòras Beò nan Gàidheal (Zoom)
E5wF5Jyn488 2:20 Criomagan (English subtitles)
QSSfLqbMi-g 2:20 Criomagan
r_yHflfgbEU 36:22 Guth nan Siarach agus Staing na Gàidhlig
hZSCw-PtDy8 25:48 New Insights on the Vernacular Gaelic Communities in the Islands
# eRGf-cO9lNI 33:05 Maggie Smith (3): Stòras Beò nan Gàidheal (Zoom)
# aiYtcnUrWag 19:18 Maggie Smith (2): Stòras Beò nan Gàidheal (Zoom)
# C9kvP85bR1k 25:19 Maggie Smith (1): Stòras Beò nan Gàidheal (Zoom)
JD8pBRRx748 6:54 Ceòlas nyári iskola
# FiZ0GkauTqo 6:03 Tο Κέντρο ημέρας Craigard
RFScg-VAQB8 3:27 Mi piace questo binario! (Gaelico)
4jlJMNpP9Gc 8:39 Schnellboot nach St Kilda
vfH9jG4w9k0 6:54 Ceòlas yaz okulu: Turkish documentary
PiLzZG-p3f4 0:42 Khasi Recitation
OnTKpQokfx0 5:06 विंडसर्फिंग - Windsurfing (Hindi)
WqGxcr81ryQ 8:39 সমুদ্রপথে সেইন্ট কিলডা - Seatrek to St Kilda (Bangla)
Vdg9KbnG43A 3:30 আমার হাত বান্ধিবি - Traditional Baul Song
# jkPemTDiKMU 30:27 Christine Primrose (2): Stòras Beò nan Gàidheal
# SGB0wHMFBqo 22:35 Christine Primrose (1): Stòras Beò nan Gàidheal
# cJRBSfQiPzg 33:34 Seònaid Mhoireach (2): Stòras Beò nan Gàidheal
# jg9i8NjjMak 29:59 Seònaid Mhoireach (1): Stòras Beò nan Gàidheal
# zdEm2Unuy40 22:18 Iain Greumach (2): Stòras Beò nan Gàidheal
# zz8m6ci7h-k 21:24 Iain Greumach (1): Stòras Beò nan Gàidheal
# SkpKC8OKHjU 29:29 Gina NicDhòmhnaill (2): Stòras Beò nan Gàidheal
# KzFpoKS68wo 30:42 Gina NicDhòmhnaill (1): Stòras Beò nan Gàidheal
# unbDf0APkxI 34:10 Aonghas MacPhàil (2): Stòras Beò nan Gàidheal
# NXVLSUOZZZs 37:53 Aonghas MacPhàil (1): Stòras Beò nan Gàidheal
# BrRnV6GgEDY 35:44 Dòmhnall MacDhòmhnaill (3): Stòras Beò nan Gàidheal
# ZyNuFDHs8HI 35:57 Dòmhnall MacDhòmhnaill (2): Stòras Beò nan Gàidheal
# b6oowtPH-_g 29:55 Dòmhnall MacDhòmhnaill (1): Stòras Beò nan Gàidheal
# Hap5Jo1q1o4 23:37 Alasdair MacDhòmhnaill (2): Stòras Beò nan Gàidheal
# IzNK8uQsI8Q 20:56 Alasdair MacDhòmhnaill (1): Stòras Beò nan Gàidheal
# rKf21a8ma_8 34:38 Seonag Smith (3): Stòras Beò nan Gàidheal
# oJ24vgH2z8I 31:33 Seonag Smith (2): Stòras Beò nan Gàidheal
# jHO1uy8apEk 26:08 Seonag Smith (1): Stòras Beò nan Gàidheal
# rvX7JEYOShs 26:48 Màiri Robasdan (2): Stòras Beò nan Gàidheal
# n70qZv3d6V8 24:19 Màiri Robasdan (1): Stòras Beò nan Gàidheal
# PIAlpFcwf9o 28:05 Ailig Mac a' Phì (2): Stòras Beò nan Gàidheal
# ykesJEsmpq0 33:10 Ailig Mac a' Phì (1): Stòras Beò nan Gàidheal
# GbbhUD-QzN4 30:13 Catrìona Nic an t-Saoir (2): Stòras Beò nan Gàidheal
# 9yYPB_s5SJ8 27:08 Catrìona Nic an t-Saoir (1): Stòras Beò nan Gàidheal
# __QqgB0_-zo 32:09 Alasdair MacAsgaill: Stòras Beò nan Gàidheal
CSVFn79rb2w 22:22 Two Lands, Many Languages - दो देश, भाषाएं अनेक - Dà Dhùthaich, Iomadh Cànan
W-MXXM8N8V0 1:19 Juri Dutta poetry reading
mhm6BoZ-SME 7:02 அந்த செய்தித்தாள் - Am Pàipear (Tamil)
KwfyOcHZLtg 0:57 Rusa Bhowmik
ybWYSEmgerE 0:53 Dharani
# jgENcQMS3Rc 21:50 Hughena NicDhòmhnaill (2): Stòras Beò nan Gàidheal
# ZGq8t29yNAw 23:00 Hughena NicDhòmhnaill (1): Stòras Beò nan Gàidheal
# RvazpLf5mok 29:55 Tòmas MacDhòmhnaill (1): Stòras Beò nan Gàidheal
# mZUA0JQTlLs 32:11 Tòmas MacDhòmhnaill (2): Stòras Beò nan Gàidheal
# Z-Q3M_eKjO8 26:36 Pàdruig Moireach - Stòras Beò nan Gàidheal
# Vc6rGv2_XsY 26:39 Eairdsidh Caimbeul - Stòras Beò nan Gàidheal
wtTukz3jIcM 10:00 Un viaggio gaelico - A Gaelic journey (Italian version)
fspj74toS_o 8:02 Magaidh Smith
v93311R1hyc 9:49 Liam Alastair Crouse, 2018
R8cX7UmIYdQ 5:07 रीस्टोर प्रोजेक्ट - Restore Project: Hindi documentary
0sHXrjqW2fY 38:51 Cearcall a' Chuain
nNjB-mwrxkU 10:08 ゲール語圏内の旅 - A Gaelic Journey (Japanese Version): Benbecula to Ranafast
lhC267fHNZ0 7:21 Scots documentary: Kist o Riches
9WcGBnPSOiA 10:01 A Gaelic Journey (Welsh version): Benbecula to Ranafast
q__BlZuajkU 4:58 Danns' ri Puirt
q70Hf8EsINg 10:00 A Gaelic Journey (Manx version): Benbecula to Ranafast
vLsE5iy8TyA 3:40 Liam Alastair Crouse, 2017
WR8jgqj2iic 4:39 An Dr Dòmhnall Uilleam Stiùbhart
j89COOGz6vQ 5:29 Urdu Documentary: Surfing
gT_mDHN7GHA 5:09 Urdu Documentary: Restore Project
# IP2xWdottZM 52:25 Dihaoine - Gàidhlig: Saoghal Thormoid
# TlUzd4pKaIg 44:21 Diardaoin - Cruthachalachd: Saoghal Thormoid
# NqUS1wwtCeA 53:48 Diciadain - Coimhearsnachdan: Saoghal Thormoid
# eiIzDMYAI_A 35:13 Dimàirt - Foghlam: Saoghal Thormoid
# nCR2mVnDcX0 38:33 Diluain - Sinnsireachd: Saoghal Thormoid
K_pFGFRTEEI 4:18 Dr Will Lamb
AxHYpaPA2xg 4:11 An Dr Uilleam Lamb
NCJXHbbAqqg 10:00 A Gaelic Journey (Basque version): Benbecula to Ranafast
rMvPI7WnHjU 5:21 Basque Documentary: Lazybeds
mW2xqxSN2mM 15:35 Birlinn Chlann Raghnaill: Alan and Bill at Kildonan
lZ34eqW-_M8 3:19 The Birlinn of Clanranald: Alan Riach at Loch Eynort
revUU6yuVR0 6:20 Professor Roibeard Ó Maolalaigh
bupT81GRgtg 5:58 Árd-Ollamh Roibeard Ó Maolalaigh
I3h-Uvhzg5M 6:13 Polish Documentary: Peatcutting
am6Cghfv7hk 4:02 Gordon Cameron: Soillse Fieldworker
urjHTiEDgds 11:56 A' Bhean-Uasal NicÌomhair à Cnoc an t-Soluis air a' Bhac
Dq9zUc0uUCY 2:57 Bodach nan Serviettes
jSYVP31__As 4:39 Dòmhnall Phàdraig agus Màiri Claire
pE7hwWrsJvo 5:12 Hàllain
9OEdOF5TmcQ 4:07 Cabhag
mj6LQcFESw4 4:30 Mìorbhailtean ann am Barraigh
OXRS4B1iN2k 3:44 Sgeulachdan Thormoid: Facal-toisich
AKQw8r_tuA0 14:00 Angus Nicholson: Marathon Man
96uNMiHKkds 5:56 Alasdair MacGillivray (Gaelic)
mVcUhG_Sx7o 4:45 Alasdair MacGillivray (English)
qULMnzVxmC0 2:21 Stuart Dunmore aig Soillse
tFjV1G5SCuY 3:23 Marsaili agus Nicola aig a' cho-labhairt
SyPoihGGi-g 1:20 Co-labhairt aig Soillse
ttnzmXJAiVA 5:22 Cothrom Nativity Play
soBxek1baRs 8:36 Ewen MacAskill
TCXxIcI7NuM 9:09 Donald MacCormick: Highland Soldiers
NNSSfeErLdI 8:29 Norman Johnson - Piper
WjA2vrpeqBw 3:07 Norman Maclean: Òran do sgoilearan Chàirinis
LAvXmN0kND0 6:50 Isa MacKillop: Companaich m' òige
e07YWWJ2dJY 6:27 Cathie Laing: Sgìths 's Cruadal
3lJf1q4gMz4 11:22 Alec Macaulay
tTB4sBGzSl8 18:27 Willie MacDonald
cquuGRtZf10 8:54 Reverend John Smith
SJeFpt-sbl4 6:06 Enterprise on the Edge
TCpQaZSm4b0 6:47 Introduction to Virtual St Kilda
# B7OczE1nBog 2:56 A Very Busy Spider - in Balivanich!
try9ISkWaY0 3:55 The Story of the Dog
ThCrio5wX3A 6:36 Sgeul a' Choin
CXRO6dyYqig 4:09 Blàr Chàirinis
vanUJ2uQbdU 3:25 Sgeul an Eich
njS_lGrf9-I 4:13 The Story of the Horse
XL-_EiekT3I 2:58 Òran le Ruairidh Beag
Unx1xpaWyVU 10:00 A Gaelic Journey (English Version): Benbecula to Ranafast
Y43I66Bxi6c 4:12 Eairdsidh agus Nìall Caimbeul: Extended Conversation
7bizb_Y_mU8 10:00 A Gaelic Journey (Scottish Version): Benbecula to Ranafast
AP4V-QoxVtw 3:45 Aodh Mac Ruairí: Extended Interview
K5Rp4WyMTpY 1:45 Darragh Ó Dochartaigh: Full Recitation
sv3tdC8jbXo 5:29 Bridanna Ni Bhaoill: Extended Interview
RHZS4f1xagA 10:00 A Gaelic Journey (Irish version): Benbecula to Ranafast
rNuexnaek-Y 7:28 Àiridh na h-aon oidhche
Rj1pUb8GgQA 8:03 Iain Trumisgarry - A Conversation
ivU7CZLbm0s 8:48 Grogarry Lodge
# KkI-MBBPj2Q 4:59 English Interview: Greenspace Manager Donald MacRitchie
Wjp_LOeTIpU 7:03 Gaelic Interview: Seallam! Director Chris Lawson - Services
Kr2Zn6S6d2E 5:55 Gaelic Documentary: Greenspace Research
# puHYOzsj6fc 6:57 English Interview: Seallam! Director Chris Lawson - Services
BjcDY0XBKjU 7:21 Gaelic Documentary: Tobar an Dualchais
# NhiShBJBQVo 7:21 English Documentary: Tobar an Dualchais
w_bD2WRw5dE 6:56 Gaelic Interview: Manager Shona MacDonald
# oAg5xmlbTBo 6:32 English Interview: Manager Shona MacDonald
# mMtM3eg3BsE 4:14 English Interview: Digitiser Catriona Scott
92ZDzl77Zvo 3:31 Gaelic Interview: Digitiser Catriona Scott
# kfqkYEpaWOw 4:28 English Documentary: Seallam! Visitor Centre
utbihJPiANY 4:28 Gaelic Documentary: Seallam! Visitor Centre
# 9D625F1rr8g 5:35 English Interview: Seallam! Director Chris Lawson - Plans
5sIYPeYZEKQ 4:16 Gaelic Interview: Seallam! Director Chris Lawson - Plans
# mdVwD2LtWRQ 4:38 English Interview: Local Artist Margarita Williams
SXxgPwXFAt8 4:03 Gaelic Interview: Local Artist Margarita Williams
# aPRZdXED3RI 5:55 English Documentary: Greenspace Research
k1bg47R0Spc 4:47 Gaelic Interview: Greenspace Manager Donald MacRitchie
# AklugRUiq6I 3:18 English Interview: Greenspace Consultant Donald MacDonald
HBux_tajzLE 4:08 Gaelic Interview: Greenspace Consultant Donald MacDonald
6noT8JNLcIo 5:00 Gaelic Interview: Greenspace Researcher Malcolm Murray
# Y1XvPNsebjY 5:17 English Interview: Greenspace Researcher Malcolm Murray
# CdH0UYqeNEU 4:15 English Documentary: Urras Oighreachd Ghabhsainn
nADAPb_ULDg 4:15 Gaelic Documentary: Urras Oighreachd Ghabhsainn
ggr21IALMzg 5:24 Gaelic Interview: Galson Chair Agnes Rennie - History and Work
# QAjmp6VLnWw 5:06 English Interview: Galson Chair Agnes Rennie - History and Work
# 2Mk6yITs1Co 3:11 English Interview: Powerdown Officer Kirsty MacLennan
QiVmdURUTfM 3:26 Gaelic Interview: Powerdown Officer Kirsty MacLennan
PrnxTmbfH7E 3:15 Gaelic Interview: Galson Chair Agnes Rennie - Plans and Partnerships
# _3Bwrv6EQbI 2:57 English Interview: Galson Chair Agnes Rennie - Plans and Partnerships
RRCWwcbyhJk 8:39 Gaelic Documentary: Seatrek to St Kilda
# Dm69bBehc98 8:39 English Documentary: Seatrek to St Kilda
# PJtltorLDWU 5:26 English Interview: Seatrek Manager Murray MacLeod
dj0UiV50cmA 4:26 Gaelic Interview: Seatrek Manager Murray MacLeod
D5ywSDeeJ_A 4:39 Gaelic Interview: Uig Resident Iain Buchanan
# r5CoQnfLbl0 4:31 English Interview: Uig Resident Iain Buchanan
# jN3gEaU-0bA 7:02 English Documentary: Am Pàipear
u30-ksN_ITQ 7:02 Gaelic Documentary: Am Pàipear
0Uz4rnp8VAs 4:59 Gaelic Interview: Am Pàipear Editor Archie Mackay
# KWJMIJb7u10 4:41 English Interview: Am Pàipear Editor Archie Mackay
h-2d5Y6GTcU 5:59 Dhan Chamara: Gordon Wells
brEh4uC5H6o 5:05 To Camera: Gordon Wells
# 4MYB3_cJSV4 3:39 English Interview: Craigard Supervisor Marnie Keltie
SQ-SPY0mE0Q 2:05 Tormod MacGill-Eain: Dhan Chamara
9W9CahaP9cY 2:06 Norman Maclean: To Camera
# Qq-qeP1sOkk 5:59 Gaelic Documentary: Craigard Day Centre
# RWbgJx7b8i8 6:00 English Documentary: Craigard Day Centre
# dSV7XmfaNXs 1:33 Gaelic Interview: Craigard Client Donald Mackinnon
# kqsvPFGczy8 2:04 English Interview: Craigard Client Donald Mackinnon
2I1-odilPAQ 4:35 Gaelic Interview: Community Member Flora Macdonald
MdtddN5Eips 5:05 Gaelic Documentary: Furniture Restoration Project
# F4HvA6hgLik 5:05 English Documentary: Furniture Restoration Project
SX754F42cXE 4:13 Gaelic Interview: Craftsman Seumas Macdonald
# eyXENTCY52E 4:09 English Interview: Craftsman Seumas Macdonald
zdc3zSi4Txg 4:31 Gaelic Interview: Cothrom Director Neil Macdonald
# 5mRz6nwCsIk 3:30 English Interview: Cothrom Director Neil Macdonald
OwRUxJJ25IM 4:34 Gaelic Documentary: Hebridean Smokehouse
# WE4bijFvuR8 4:34 English Documentary: Hebridean Smokehouse
B92ah2z5Gdc 6:08 Gaelic Interview: Environmental Health, Alasdair MacEachen
# iIc70iBFYxE 5:32 English Interview: Environmental Health, Alasdair MacEachen
# DoLxQCv_8Kg 7:03 English Documentary: Hebridean Cookery Demonstration
2Dji5JJQyZE 7:03 Gaelic Documentary: Hebridean Cookery Demonstration
# tkJzq1TnfNU 2:26 English Interview: Hotelier Isabel Graham
MCaJmD5gcOY 2:05 Gaelic Interview: Hotelier Isabel Graham
# 4gaba9hEa7I 6:49 English Documentary: Ceolas Music Summer School
lBH7VQwJcPI 6:49 Gaelic Documentary: Ceolas Music Summer School
# eqA82-ICMLw 3:58 English Interview: Ceolas Chair Mary Macinnes
KGk0yD5ysrc 4:10 Gaelic Interview: Ceolas Chair Mary Macinnes
# 6ph4AM-gG6s 2:26 English Interview: Ceolas Administrator Mary Ellen Stewart
IH6OY4AK5iM 2:16 Gaelic Interview: Ceolas Administrator Mary Ellen Stewart
vTH7hzGVh84 2:04 Gaelic Interview: Ceolas Student Ruairidh MacIlleathain
# Op9huMFXk7Q 3:31 English Interview: Ceolas Student Dale Cummings
-O0BFGrUCro 7:22 Gaelic Documentary: Taigh Chearsabhagh Museum and Art Centre
# lq3TAmvEats 7:22 English Documentary: Taigh Chearsabhagh Museum and Art Centre
XLq2zi5q0Gc 2:05 Gaelic Interview: Heritage Officer Catriona MacCuish
# pdFnlRY71tQ 1:51 English Interview: Heritage Officer Catriona MacCuish
dMK4XTqQdKw 2:26 Gaelic Interview: Student Artist Donald Ferguson
# ej-r01VbJhk 2:10 English Interview: Student Artist Donald Ferguson
RRmexyUMSeI 6:20 Gaelic Documentary: Bi Beo Songwriters
# QBXmX5C0aWk 6:20 English Documentary: Bi Beo Songwriters
# 2gxdS9Yt4XY 4:22 English Interview: Lyricist James MacLetchie
nktgD8WXN00 7:35 Gaelic Interview: Lyricist James MacLetchie
# 3Bwp5Xz-Tlc 5:24 English Interview: Musician Kevin de Las Casas
5-ujWQLfWuM 5:05 Gaelic Song: Singer James MacLetchie
tKsWZCJ6hgg 6:51 Gaelic Interview: SMO Depute Principal John Norman Macleod
e3u-b8ZVN3I 5:07 Gaelic Documentary: Children's Parliament in Barra
M0CoVo10oJg 2:06 Gaelic Interview: MCP Sarah Macinnes
# Z2FxyLkk1pE 5:07 English Documentary: Children's Parliament in Barra
# OqvA-hqkZg4 1:59 English Interview: MCP Sarah Macinnes
0dCR5GZH0Cw 6:23 Gaelic Interview: Parent Isabell Macinnes
# HdyIQIGZgbs 6:48 English Interview: Parent Isabell Macinnes
8V3Mn5w6QCA 7:10 Gaelic Documentary: Children's Parliament in Benbecula
# 1zE217N1OcQ 7:10 English Documentary: Children's Parliament in Benbecula
4Fe543X4v2s 5:56 Gaelic Interview: Health worker Isabel Steele
# YJI2ABr_kQM 7:51 English Interview: Health worker Isabel Steele
GSd976uh4LY 8:09 Gaelic Interview: Teacher Catriona Black
# OegXYbamM2Y 7:27 English Interview: Teacher Catriona Black
_y2QclvLeqg 7:38 Gaelic Documentary: Work Skills Courses
# xzXQFHMwaiQ 7:38 English Documentary: Work Skills Courses
W5vxFXSg6Dc 5:08 Gaelic Interview: Crofter/demonstrator Neil MacPherson
# QZncNeybaaY 3:43 English Interview: Crofter/Demonstrator Neil MacPherson
UB1TDIBqXJ0 2:54 Gaelic Interview: Boatbuilding pupils
# _Ax25cBZ1YI 3:09 English Interview: Boatbuilding pupils
XOc-HqsKHKo 5:32 Gaelic Documentary: Scotland's Gaelic College
# brvfX4QOJic 5:32 English Documentary: Scotland's Gaelic College
# bv0x5WdxgrI 5:05 English Interview: SMO Depute Principal
5KUJBlCRAds 4:01 Gaelic Interview: SMO staff and students
# QSrNsKXE6AA 4:42 English Interview: SMO staff and students
5O99V5-X-6g 5:50 Gaelic Documentary: Grimsay Boat Day
# FTzb9yK1kx0 5:50 English Documentary: Grimsay Boat Day
USnH21qauj0 4:25 Gaelic Interview: Father, Lachie Morrison, on Grimsay and boats
-kRntPW3k9E 2:06 Gaelic Interview: Son, Padruig Morrison
# YyF3wfyJMgY 4:14 English Interview: Father, Lachie Morrison, on Grimsay and boats
# bQ1MJLz0usA 2:20 English Interview: Son, Padruig Morrison
1wjxcB9kSRk 7:50 Gaelic Interview: Lachie Morrison, Heisgeir reminiscence
# V6bOwZ2qDRk 5:05 English Interview: Lachie Morrison, Heisgeir reminiscence
0aDmuKJEivQ 4:45 Gaelic Interview: Crofter Roddy Red Tie Macdonald
# zNicypDAtMk 4:08 English Interview: Crofter Roddy Red Tie Macdonald
CLgG0vMsm3c 6:22 Gaelic Interview: Biodiversity Officer Anne Maclellan
# yVLEmBGJXLs 6:09 English Interview: Biodiversity Officer Anne Maclellan
FfCv_pesimY 7:03 Gaelic Documentary: Crofting and harvesting
# SI79UOktKCI 7:03 English Documentary: Crofting and harvesting
# QhQx8V0i1To 3:40 English Interview: Peatcutter Archie Campbell on the peatcutting process
RN6WNGlvYcQ 6:11 Gaelic Interview: Peatcutter Archie Campbell on the peatcutting process
# QTL_QuEVWbY 5:02 English Interview: Peatcutter Archie Campbell on Social Customs
tSzGGE_CTNs 5:07 Gaelic Interview: Peat cutter Archie Campbell on Social Customs
# ZdNQB86k49E 3:31 English Interview: Lazy beds co-ordinator Tommy Macdonald
UosWZ6bxNTE 3:59 Gaelic Interview: Lazy beds co-ordinator Tommy Macdonald
# 3E015U6h1Ns 2:03 English Interview: Lazy beds demonstrator Angus Macdonald
CqE6Gku5yYM 2:24 Gaelic Interview: Lazy beds demonstrator Angus MacDonald
# KMnJoV2WWmc 5:20 English Documentary: Lazy beds
L9E0ucZDZVs 5:20 Gaelic Documentary: Lazy beds
# I22eWfust5U 3:42 English Interview: Razorfish Cook Mary Anne Mackay
hLm9ByfQl6g 4:24 Gaelic Interview: Razorfish cook Mary Anne Mackay
# KvIcz5GfRzE 4:55 English Interview: Razorfish catcher Alec Beaton
7-JUfyHCSm4 4:18 Gaelic Interview: Razorfish demonstrator Alec Beaton
# Gsqf75JZAwY 5:00 English Documentary: Catching razorfish
i_eaBU3EHl8 5:00 Gaelic Documentary: Catching razorfish
# e1phTyxse-E 5:06 English Documentary: Windsurfing
# rgs8o9LyX1A 6:29 English Interview: Surfer Will Lamb
ag-p7au9vBU 6:46 Gaelic Interview: Surfer Will Lamb
0nV9qsIK1sc 5:06 Gaelic Documentary: Windsurfing
# t4BCnSdiS1k 3:29 English Interview: Windsurfer Angus Johnson
dmGk8x-i0Lg 4:15 Gaelic Interview: Windsurfer Angus Johnson
Xr_briCza9I 3:31 Tormod MacGill-Eain: Tighinn Dhachaidh
u8V6JgxS_BA 3:35 Norman Maclean: Creativity and Values
# of5cWjD9CKg 6:08 English Documentary: Peatcutting
v0OQNvT-lAI 6:08 Gaelic Documentary: Peatcutting
# UXM4jfriBhU 5:29 English Documentary: Surfing
u1IJN-TiEQY 5:29 Gaelic Documentary: Surfing

# Sustasis

# 1P-eyjqiSas 29:59 We all talk about AI, but do we really understand it?
j4y9oPcMWyg 10:42 Christopher Alexander on the Fifteen Properties of Beautiful Spaces
# NYaEILxbfhY 1:21:50 Christopher Alexander and Alfred North Whitehead: Nature (and Buildings) Alive - Longer Q&A Version
gdAELBIVEMI 44:41 Christopher Alexander and Alfred North Whitehead: Nature (and Buildings) Alive
# Kap87n4L15U 19:48 Confronting the Age of AI: Wider Lessons for Settlement, Technology, and Culture
NhSCUBrq5fk 19:37 Cities and the Nature of the Future
# o3ZShlZim84 3:19 Michael Mehaffy Greetings to PLoP 23
lE_MHZu0Qmk 15:01 Symmetry in Architecture: Toward an Overdue Reassessment
XfC4ihJvoVg 49:11 The Death and Life of Downtown Portland (Full)
# Rx8TGi2aXSc 58:07 The Nature of Matter in the Work of Christopher Alexander - Michael Mehaffy
# QzVhCOJVLXE 1:00:46 Nikos Salingaros - Revolution in Architectural Thought
# VumQdtXrNLM 4:35 Excerpt from The Alexander- Eisenman Debate of 1982
# G7gI-nbUtMg 1:03 Future of Places - Key Messages Summary
# wJCw7vSqFDY 42:29 Michael Mehaffy: The Empires New Clothes
# oKO3vYjZbcs 1:22:28 Christopher Alexander - Life in Buildings (Full)
# _RSc1IWFBzQ 23:00 (In)Forming Patterns: An Online Symposium
# PqX6odZkumc 1:22:52 The Empire's New Clothes - Michael Mehaffy, May 12, 2021
# Y4yeqD30vgQ 19:55 Unified Architectural Theory, Lecture 11: “Architecture Itself as a Biological System”.
# inZ2AV2cwjQ 16:57 Unified Architectural Theory, Lecture 12: “Conclusion”.
# cG22CDSFJo4 3:56 Why Pubic Space Matters - Michael Mehaffy
# 6NXrOzR1xDc 6:05 A tour of the Vineyard Farmers Market, Fresno
# VsZIJpp6-no 17:11 Unified Architectural Theory, Lecture 10: “Ornament and human intelligence”.
# 8gDs89ZRIsc 19:21 Unified Architectural Theory, Lecture 8: “Fractals and ornament generate attachment”
# Bx3XP1wtUZE 19:39 Unified Architectural Theory, Lecture 5: “Connecting to the World Using the Mirror-of-the-Self Test”
# xQv_1qiDAXY 17:05 Unified Architectural Theory, Lect. 9: “Subliminal reality: Eye-tracking maps the field of centers”
# aLX9bqred14 17:12 Unified Architectural Theory, Lecture 7: “Fifteen geometrical properties”
# FT9F13QHj7I 18:16 Nikos Salingaros: The Existence of an “I” (Lecture)
# tg_TmOQLb10 18:35 Unified Architectural Theory, Lecture 6: “Biophilic design influences human health”
# dVGc0eduJac 1:05:06 Nikos Salingaros: “Codes That Generate Life” (Lecture)
# EAzSIdckjUY 1:08:04 Nikos Salingaros: “Architectural Education Influenced by Social Engineering” (Lecture)
# p4snkjKvLFQ 1:07:24 Nikos Salingaros: “Seashells, Hyperspace, and the Sacred” (Lecture)
# ok4vgxQ8H9k 1:06:05 Nikos Salingaros: “A Fractal Distribution is Sustainable” (Lecture)
# Ii3TIHZN6ag 1:10:06 Nikos Salingaros: “Folded or Perforated Fractals” (Lecture)
# ekjzOvTE1NQ 52:19 Nikos Salingaros: “Complexity and the Fibonacci Sequence” (Lecture)
# A7-bAg0SJHY 59:59 Nikos Salingaros: “Centers and Computational Reducibility” (Lecture)
# qbpIqHaKzRA 16:19 Unified Architectural Theory, Lecture 4: Computing the regional adaptivity index of a form language
# Syu8xwDs-AM 1:01:54 Nikos Salingaros: “Symmetries and Symmetry Breaking” (Lecture)
# 1KOdxv4oxAY 1:11:08 Nikos Salingaros: Step by step adaptive design (Lecture)
# YWDZcaF_3ek 16:38 Unified Architectural Theory, Lecture 3: Complex versus simplistic form languages
# gGTjJZhnl4A 1:07:44 Nikos Salingaros: "Christopher Alexander's Fifteen Fundamental Properties" (Lecture)
# nIGnm-UiNYw 20:00 Unified Architectural Theory, Lecture 2: Form Languages and Pattern Languages
# vcN5fi3zuxA 14:51 Unified Architectural Theory, Lecture 1: The Structure of Architectural Theories
# 82mH5gS_puc 51:50 Lessons After COVID-19: Addressing Social Isolation through the Built Environment
# GEXRQdXXf9I 3:01 Michael Mehaffy Presentation for World Cities Day
# 3G5noYSiCu0 15:01 Gamla Stan Walking Tour with INTBAU Sweden
# J8Dxm-OaE3E 40:01 Pattern Languages of Programming (PLoP) 2020 Presentation - Mehaffy
# MB3eFZQtwGY 19:38 New Patterns for a Post-COVID Age
# dm0MIeaZIzw 4:56 Tour of Poundbury, UK
# bDbnNF20eKY 20:32 Christopher Alexander: Life in Buildings (Excerpt)
# XswHZZqO0jk 7:46 Thought Leaders - Jane Jacobs (for FOP Summit - ROUGH EDIT)
# o6q1dDAv6zY 4:55 Thought Leaders Christopher Alexander
# D3v_F1hrBtE 5:01 Mehaffy - The Urban Dimensions of Climate Change
# xaYQK8kTwHg 16:39 Overview of Metro (Oregon) 2009 "Centers and Corridors" Policy Report
# nyAtltoaE0s 13:03 Mehaffy - Pattern Languages and Wikis for a New Urban Agenda - 13min Version
# muuzfQQLFlc 5:01 Mehaffy - Tools and Strategies for Public Private Collaboration
# VCqy00Ahib8 7:37 Mehaffy - Healthy Public Space Networks for a New Urban Agenda
# sbXIk5DtVTg 7:01 Mehaffy - Pattern Languages and Wikis for a New Urban Agenda - EDITED VERSION
# EzS60DaltAU 16:49 A Conversation with Ward Cunningham - Edited Version
# lLy0N0tOVVI 46:24 Discussion with Ward Cunningham Feb 11 19
# FkFh4IW1N_s 33:01 Sustasis Interview with Ward Cunningham Apr 5 18
# qXBKZPaVHi8 4:31 Dr. Joan Clos at launch event for The Quito Papers, World Urban Forum 9
# g9KivwhuCXo 4:20 Ax:son Johnson Address at Habitat III
# Zv2l3_59D4M 4:04 Remarks of Michael Mehaffy at PrepCom 3
# ArAIvl0hk3M 3:02 Sustasis Executive Director Mehaffy's Testimony to the City Council of Portland, Feb 4 2015
# DHBzg0Rd7Yk 2:41 Sustasis Executive Director Mehaffy's Testimony to the City Council of Portland, April 20, 2016
# vvKTPbjGm8A 1:13 ACINAT
# u33YjyQeb_o 24:15 Nikos Salingaros Addresses ICUPD 2015
# RiGlhj-wyYo 32:58 Nikos A. Salingaros on Pattern Language and Form Language
# ZvN5kN5TCdY 8:59 The Selling of Sprawl
# oEkiNgNnIgI 21:08 Nikos A. Salingaros on Urban Design Education
# 3UNfYRyGHIQ 18:37 5 Crucial Decades - Michael Mehaffy Presentation and Discussion
# mRuEmDr0fuI 7:55 Joanna Alimanestianu speaking at the Future of Places Forum
# 06nYkNi33vA 7:42 Taller Buildings in Portland
# SRwJQXTluLc 7:42 The Impacts of Taller Buildings in Portland
# nGjXgHwFYqc 58:44 Vincent Scully Prize for Christopher Alexander - Mehaffy Presentation and Discussion
# P5Bu9LjfcZE 2:10 Michael Mehaffy shares lessons at Orenco Station
# ts_ArwNEHRk 6:00 Michael Mehaffy at Future of Places II
# o2V_0BvFJuc 2:30 2014 Year-end Message from the Sustasis Executive Director
# d6pX0S34CZk 10:08 Webinar, "Federated Wiki: Potential for a new generation of open-source scenario-modeling tools:

# Post-Growth Innovation Lab
UZhatcqlh44 38:01 Circular Degrowth - Federico Savini

# Lindsay Ellis

XP6uMQL9Od4 19:40 Nostalgic Woman - Lord of the Rings: The Fellowship of the Ring
SpsdoR1hmQc 18:06 Nostalgic Woman - Lord Of The Rings: The Two Towers
Zi_zw3xDTa8 17:03 Nostalgic Woman - Lord of the Rings: Return of the King (Part 1)
2MDNYhUdd2s 15:50 Nostalgic Woman - Lord of the Rings: Return Of The King (Part 2)
uTRUQ-RKfUs 36:49 The Hobbit: A Long-Expected Autopsy (Part 1/2)
ElPJr_tKkO4 34:43 The Hobbit: Battle of Five Studios (Part 2/2)
Qi7t_g5QObs 30:38 The Hobbit: The Desolation of Warners (Part 3/2)

# Celtic Source

CPED6Nem0kY 10:53 Danu and Dôn, the Irish and Welsh ancestor goddesses
R6WAOuu3sMs 32:05 Is Taliesin a god?
xo4eiZluC7g 1:34 Book Launch Tour
oAUGwPzPyb8 17:21 Celtic Myth: The Eternally Fruitful Questions
qe2Fe-ur2ww 35:08 Modern paganism's translation problem?
v0JqMu9Wqlg 11:27 Thanks, Rest and Next . . .
kQSt_7dYmaE 10:23 Celtic Gods in Medieval Wales with Dr Gwilym Morus-Baird
4Y14EkhRx_0 14:33 The Life of Stories
TpFCKF1HeWw 22:32 Sir Gawain and Men's Mysteries
ixzq5rb6rXc 1:01 Celtic Mythology - new category on video lectures website.
ORVkKObUilA 26:02 Sir Gawain and the Pagan Goddess
2Nbu8SvdaD8 24:36 Sir Gawain, Woman and Wild God
N8n2fDGKGbs 33:33 Sir Gawain, Desire and Death
7PNKoy9vyHU 44:30 Sir Gawain and the Mabinogi
a-zXJovHAs4 41:11 The Story of the Story with Dr Gwilym Morus-Baird
rjbLieb1ros 29:13 The Goddess' Stolen Child with Dr Gwilym Morus-Baird
Axru33O3Aaw 26:32 Who is Manawydan? with Dr Gwilym Morus-Baird
7GQoC5B5zd0 8:09 Ceridwen's Mabinogi? with Dr Gwilym Morus-Baird
s0kfq4nyVcM 30:06 A Queen Betrayed (Rhiannon's Mabinogi Part 4) with Dr Gwilym Morus-Baird
gxB7-vWamhg 40:59 The Celtic Wonder-child Myth (Rhiannon's mabinogi Part 3) with Dr Gwilym Morus-Baird
m-9YUVpg4sc 22:10 How can we understand the Mabinogi? With Dr Gwilym Morus-Baird.
slx-RH4eD3o 26:37 Rhiannon's Mabinogi Part 1 with Dr Gwilym Morus-Baird
9L1ugg3YRq0 9:26 Was witchcraft a religion in medieval Wales?
8REXWqYDILA 45:55 The Mabinogi Challenge: Day 1 with Dr Gwilym Morus-Baird
X3wlf8s5cUE 20:01 The Dark Side of the Hero Myth pt 2 with Dr Gwilym Morus-Baird
r__afQOreF0 17:32 The Dark Side of the Hero Myth pt 1 with Dr Gwilym Morus-Baird
4RWQmK6-rxQ 16:48 The Song of Heledd pt 2 with Dr Gwilym Morus-Baird
oOcUcP1orsY 22:53 The Song of Heledd with Dr Gwilym Morus-Baird
pLyi7YF_wvk 25:39 Did a woman write the Mabinogi? with Dr Gwilym Morus-Baird
KDFTrRr2qwA 24:50 The Battle of the Trees and The White Goddess with Dr Gwilym Morus-Baird
KJlAfYBiOYM 25:58 Ritual Masks and Channeling with Dr Gwilym Morus-Baird
OPn-vMQgHO0 26:20 Why interpret myths? with Dr Gwilym Morus-Baird
Gx1_SSiRfbA 33:13 Bardic Craft and Animal Transformations with Dr Gwilym Morus-Baird
vU0arTuhU10 24:39 The Mythic Fortress
-dIk0FmlxyM 26:33 'Who is the Gatekeeper?' with Dr Gwilym Morus-Baird
E0cwoMJK0oY 47:45 The Spoils of Annwfn with Dr Gwilym Morus-Baird
HAEqrapjkxs 24:19 'The Discourse of Arthur and the Eagle' with Dr Gwilym Morus-Baird
SSkF4gbB79U 15:49 A Welsh Cailleach? with Dr Gwilym Morus-Baird
K6PNnrSGRkg 16:28 Are Welsh Scholars misrepresenting Welsh paganism? with Dr Gwilym Morus-Baird
KwyO2Ml6KCo 17:15 The Giant's Beard in Welsh Folklore with Dr Gwilym Morus-Baird
b2eIbtHhsRY 9:58 Iolo Morganwg and Fake Myths with Dr Gwilym Morus-Baird
f9x1ZglXZIA 18:26 Barclodiad y Gawres ('The Giantess' Apronful') with Dr Gwilym Morus-Baird
SZNT-Tl-bFo 22:28 Witches, Giants and Arthur with Dr Gwilym Morus-Baird
HgFSO7Mh2cQ 9:09 From Celtic Gods to Celtic Spirits with Dr Gwilym Morus-Baird
WrcqtD9Zz3c 21:19 The Witch of Death in Welsh Folklore with Dr Gwilym Morus-Baird
bB4FvCgpQ2o 21:42 The Witch, the Hare and the Saint - with Dr Gwilym Morus-Baird
BsVC3-bSk7Q 19:31 Gwyn ap Nudd and St Collen with Dr Gwilym Morus-Baird
UBKNHP2NDaQ 13:02 Were the Welsh bards shamans? with Dr Gwilym Morus-Baird
4RFz5ygHIw8 31:00 A Celtic Wisdom Tradition? with Dr Gwilym Morus-Baird
yLt73JOQuoQ 1:33 The Magic of Meaning with Dr Gwilym Morus-Baird
bZetJZWKckI 39:32 Who wrote The Book of Taliesin? with Dr Gwilym Morus-Baird
wwIBemDZmWc 31:27 Was Taliesin a druid? With Dr Gwilym Morus-Baird
yX_Xd0Wcu0o 18:04 Mabinogi Riddles with Dr Gwilym Morus-Baird
M4_EmTUxIx0 29:01 What is The Book of Taliesin? with Dr Gwilym Morus-Baird
wJkhpeFxalo 37:34 Where did Ceridwen chase Gwion Bach? with Dr Gwilym Morus-Baird
dPWp_DbXwUM 42:26 The Welsh Bardic Triads with Dr Gwilym Morus-Baird
Y5WiifupG-4 31:53 The Celtic 'Otherworld'?
G2F5DNHB1q0 27:16 Celtic Magical Elixirs with Dr Gwilym Morus-Baird
lhDBCXYUVYU 23:17 The Roots of Celtic Myth with Dr Gwilym Morus-Baird
zccp11Oquac 29:31 Brigid and her Many Incarnations, with Dr Gwilym Morus-Baird
M-hUfg7QNyc 20:27 The Bardic Power of Myth with Dr Gwilym Morus-Baird
5wXmWjX3uYw 32:55 Awen, Symbol and Cauldron in Celtic Myth with Dr Gwilym Morus-Baird
OQAMt_-rvh0 37:50 Celtic Spirituality and Cultural Appropriation with Dr Gwilym Morus-Baird
YU5pk-Hc758 45:30 Mari Lwyd - The Welsh Sources and Meaning
vFt-ycNVA10 7:49 Celtic Source: The real power of Taliesin.
_tJSZlQDL2s 5:09 Celtic Source: What does Annwfn mean and how has it's meaning changed?
ZwsfB00_fUA 10:48 Celtic Source: What's the point of old Celtic poetry?
XjB7xUtRkx8 0:53 Celtic Source: Course Syllabus
9AfGwjT7XgQ 10:03 Celtic Source: Brú na Bóinne (Newgrange)
U4PD0jezQXI 8:05 Celtic Source: The Twrch Trwyth
4vrwA9hRXFw 6:57 Celtic Source: Christians and Pagans in Medieval Britain
cNY6vGNXFcc 8:39 Celtic Source: Is Rhiannon a goddess?
0vJz535kLU8 8:25 Celtic Source: Manannán mac Lir
nDMEgeLruSo 8:41 Celtic Source: Gaels and Picts
I7ZsGjQevO0 6:43 Celtic Source: Awen
HiU0vqUTxkM 10:21 Celtic Source: Preiddiau Annwfn ('The Spoils of Annwfn')
9uQesVGz9QU 5:12 Celtic Source: The Coligny Calendar
yWmozNPTfYM 7:17 Celtic Source: The Tablet of Chamaliẻres
ase7ZAKU-KE 8:02 Celtic Source: The Oldest Celtic Text in the World?
w_CGC28hqhk 8:02 Bardic Trickery, Gadael Tir 12.5.18
plMtPuHTxhQ 1:30 Merched Becca, Gadael Tir 12.5.18
UjSf0zEf0Os 2:43 Calon Lân, Gadael Tir 12.5.18
IYzXX2VSvIA 50:29 A Welsh Wisdom Tradition? 18.10.18
3glgKTnrjPU 28:27 Christianised Myths? Blodeuwedd and The Four Branches of the Mabinogi
k_J9i2vek2s 4:22 Speculating About Taliesin Archaeology

# A Bit of Fry and Laurie

AeOU7NNgeQg 29:18 A Bit Of Fry And Laurie S01E01
NM8McyQCRYs 29:37 A Bit Of Fry And Laurie S01E02
wEXCPHWyWAI 28:58 A Bit Of Fry And Laurie S01E03
jxd9MhFXVKM 29:16 A Bit Of Fry And Laurie S01E04
x0X6E11G_nk 29:30 A Bit Of Fry And Laurie S01E05
NOuAk7LX5no 28:26 A Bit Of Fry And Laurie S01E06
s4bPsGsNGi4 24:55 A Bit of Fry & Laurie: Best Bits | BBC Comedy Greats

# Jeeves and Wooster
Te3SvM-aG04 50:45 [Support Ukraine Now] Jeeves And Wooster — Jeeves Takes Charge (S01E01) [Full HD] [subtitles]
_uWIGhNPl0g 50:28 [Support Ukraine Now] Jeeves And Wooster — Tuppy and the Terrier (S01E02) [Full HD] [subtitles]
TwVNIdkrfWo 49:36 [Support Ukraine Now] Jeeves And Wooster — The Purity of the Turf (S01E03) [Full HD] [subtitles]
53PwqEiTNUM 48:36 [Support Ukraine Now] Jeeves And Wooster — The Hunger Strike (S01E04) [Full HD] [subtitles]
uAmH0rOFOY0 49:03 [Support Ukraine Now] Jeeves And Wooster — Brinkley Manor (S01E05) [Full HD] [subtitles]
2mqNlA6ypkM 51:35 [Support Ukraine Now] Jeeves And Wooster — Jeeves Saves the Cow-Creamer (S02E01) [Full HD] [subs]
24B88Ur9C0g 51:11 [Support Ukraine Now] Jeeves And Wooster — A Plan for Gussie (S02E02) [Full HD] [subtitles]
ys6ewmHxZSA 49:57 [Support Ukraine Now] Jeeves And Wooster — Pearls Mean Tears (S02E03) [Full HD] [subtitles]
Iz0Viqrovl4 50:51 [Support Ukraine Now] Jeeves And Wooster — Jeeves in the Country (S02E04) [Full HD] [subtitles]
Bema4j-6mIE 50:21 [Support Ukraine Now] Jeeves And Wooster — Wooster with a Wife (S02E06) [Full HD] [subtitles]
dGJF3sV9EFo 49:48 [Support Ukraine Now] Jeeves And Wooster — Kidnapped! (S02E05) [Full HD] [subtitles]
lZzA7XZyVLY 50:21 Jeeves and Wooster S02E06 Wooster with a Wife
y9qTnHPmVZ8 50:59 Full Episode Jeeves and Wooster S03 E1:Safety in New York
ax3f7QELTYU 49:54 [Support Ukraine Now] Jeeves And Wooster — The Full House (S03E02) [Full HD] [subtitles]
s9-WurU_DKA 50:58 [Support Ukraine Now] Jeeves And Wooster — Introduction on Broadway (S03E03) [Full HD] [subtitles]
x7GTI52z_mM 51:10 [Support Ukraine Now] Jeeves And Wooster — Right Ho, Jeeves (S03E04) [Full HD] [subtitles]
uG0cAnSxntI 51:03 [Support Ukraine Now] Jeeves And Wooster — Comrade Bingo (S03E06) [Full HD] [subtitles]
1ZR8DvqIKuc 51:05 [Support Ukraine Now] Jeeves And Wooster — Return to New York (S04E01) [Full HD] [subtitles]
12B1v-ZxWKw 50:42 [Support Ukraine Now] Jeeves And Wooster — The Once and Future Ex (S04E02) [Full HD] [subtitles]
vM7qZ0Gspdw 51:01 [Support Ukraine Now] Jeeves And Wooster — Bridegroom Wanted! (S04E03) [Full HD] [subtitles]
ETXKu03o7is 51:08 [Support Ukraine Now] Jeeves And Wooster — The Delayed Arrival (S04E04) [Full HD] [subtitles]
ctsspH-2WFM 50:34 [Support Ukraine Now] Jeeves And Wooster — Trouble at Totleigh Towers (S04E05) [Full HD] [subtitles]
vmzN-3dSCms 51:10 [Support Ukraine Now] Jeeves And Wooster — The Ties That Bind (S04E06) [Full HD] [subtitles]

# jan Misali's Conlang Critic

l-unefmAo9k 5:32 Conlang Critic Episode One: Lojban
k_z41hk_lUM 5:33 Conlang Critic Episode Two: aUI
12bT6wGXESc 10:41 Conlang Critic Episode Three: Vötgil
ZkVF6MsVgmE 5:36 Conlang Critic Episode Four: Láadan
j-dmJtboDCk 5:35 Conlang Critic Episode Five: Ygyde
e_n3loSfejg 6:27 Conlang Critic Episode Six: Ithkuil
qnv8PVvbd-8 4:19 Conlang Critic Episode Seven: Wolflandic
XhxjI3t6Ht4 4:48 Conlang Critic Episode Eight: Kay(f)bop(t)
o2mzKGGrNi8 4:31 Conlang Critic Episode Nine: Klingon
tOf91VkVvz8 3:54 Conlang Critic Episode Ten: Na'vi
6w7y_9XrNpA 5:20 Conlang Critic Episode Eleven: FluidLang
c2G7TFybqOQ 3:22 The Perfect Language [Epic]
eLn6LC1RpAo 8:02 Conlang Critic Episode Twelve: Toki Pona
Sao9mCLy3Xo 10:17 Conlang Critic Episode Thirteen: Esperanto
TOWcRvYq9Fs 5:14 Conlang Critic Episode Fourteen: Ido
TpHqHuXvUek 6:12 Conlang Critic Episode Fifteen: Volapük / Volapꞟk
JLuKnsIqXOQ 6:21 Conlang Critic Episode Sixteen: Dovahzul
U_Bz3bt8_4w 4:42 Conlang Critic Episode Seventeen: Interlingua
tZDUVJKo5nY 4:22 Conlang Critic Episode Eighteen: Solresol
sF1R2ZUSbeo 8:56 Conlang Critic Episode Nineteen: Loglan
QkaYGEwZSrU 7:03 Conlang Critic Episode Twenty: Zese
GX4V1M9qWVc 8:30 Conlang Critic Episode Twenty One: Futurese
X2GN1mBUOFc 3:45 Conlang Critic Episode Twenty Two: Lingua Franca Nova
kpFHH57smjo 4:50 Conlang Critic Episode Twenty Three: Interslavic
KegIeZwXUDk 9:31 Conlang Critic Episode Twenty Four: Folkspraak
8nAcVA88H5M 15:06 Conlang Critic: Dothraki
GpPRiwNriys 20:48 Conlang Critic: Novial
rtomHrUihco 15:51 Conlang Critic: The IS Language
QZ_8hnT9YYo 14:50 Conlang Critic: Drsk
tdTQ7Scli0I 17:35 Conlang Critic: Sambahsa
TY7EEBUgg6Y 17:47 Conlang Critic: Sindarin (featuring Artifexian)
C9KdW66dfOk 16:00 Conlang Critic: Poliespo
97RsfY2ODw0 14:12 Conlang Critic: Kēlen
gi1-ZWiqjD8 38:53 Conlang Critic: Lingwa de Planeta
F1LBCMWDNwo 33:16 Conlang Critic: Viossa
mJYrc6oya7c 14:38 Conlang Critic: Iqglic
JICvHFl7W6o 15:35 Conlang Critic: Quenya
ZiN-1Z5O9Hc 15:56 Conlang Critic: High Valyrian

# Building a Medieval Castle

ydoRAbpWfCU 58:51 Can We Build A Castle With Medieval Tools? | Secrets Of The Castle | Timeline
_VHgw6epe14 58:25 How To Defend A Medieval Castle | Secrets Of The Castle | Timeline
GZmpn3nn2qE 58:50 The Architectural Secrets Of The Medieval Castle | Secrets Of The Castle | Timeline
s46qP1l39V8 57:53 Why Were Medieval Blacksmiths Considered Magical? | Secrets Of The Castle | Timeline
EAruY1lv6N4 58:49 How To Build A Medieval French Château | Secrets Of The Castle | Timeline
q7bE--NVBGY 3:25 Behind the scenes: Secrets of the Castle with Ruth, Peter and Tom - BBC Two

# Primitive Technology

Csb-AFD58ww 19:45 Primitive Technology: Volute Shaped Blower
PjBTKe8Y44c 18:50 Primitive Technology: Brick and Charcoal Production
wbc443KVWfI 10:15 Primitive Technology: Downdraft Kiln
XTzMqWaoqYw 15:20 Primitive Technology: Wood Ash Insulated Furnace
xz6aAI3shDY 16:41 Primitive Technology: Undercover Brick Workshop
7SH4irC_xMs 13:56 Primitive Technology: New Brick Kiln Design
0_p91pv6jdI 18:31 Primitive Technology: Roasted Ore and Shell Flux Smelt
JsObuHO1tMA 15:16 Primitive Technology: Making Charcoal (3 Different Methods)
9irICRnszOc 5:36 Primitive Technology: Iron Bacteria Cement (no fire/water insoluble)
pOj4L9yp7Mc 7:40 Primitive Technology: Decarburization of iron and forging experiments
nG-rNHgFxhs 5:08 Primitive Technology: Cane Water Filter/Siphon
Gqhxe_pL6Ws 9:22 Primitive Technology: Pottery Wheel
k2RKtUh6m3Q 10:53 Primitive Technology: Purifying Clay By Sedimentation and Making Pots
RZGAYzItazw 11:35 Primitive Technology: Smelting Iron In Brick Furnaces
OPIUMpiV0IY 10:09 Primitive Technology: Making Iron From Sand
TMzo9zjkuHc 10:03 Primitive Technology: Rock Throwing Catapult (Trebuchet)
dhW4XFGQB4o 11:35 Primitive Technology: Iron knife made from bacteria
fR9u2oLHFN8 7:49 Primitive Technology: Improved Multi-Blade Blower
eesj3pJF3lA 13:14 Primitive Technology: Wood Ash Cement & Fired Brick Hut
ShvAN9bLwnw 9:15 Primitive Technology: Brick kiln, brick mold and bricks
0tZLCCLMws4 10:15 Primitive Technology: Thatched Workshop
rG6nzrksbPQ 5:20 Primitive Technology: Pot Made of Wood Ash - New Clay Alternative
wrTDJbaxhOI 10:02 Primitive Technology: Brick Firing Kiln
-cgQUrdBoaM 17:52 Primitive Technology: 4 years of primitive technology
hzz36cvo88U 6:30 Primitive Technology: Adobe wall (dry stacked)
YmFTK-rnzfk 10:32 Primitive Technology: Hut burned down, built new one
RnvtXikwrIU 10:06 Primitive Technology: Crossdraft kiln
lMZY_9QNe4I 7:21 Primitive Technology: Polynesian Arrowroot Flour
FwRFH7MH5N0 10:38 Primitive Technology: Fired Clay Bricks
Ka2Eu6LxAKo 10:05 Primitive Technology: Grass thatch, Mud hut
1Ph_ORewpE0 6:48 Primitive Technology: Stone Yam planters
U7nqBgklf9E 10:04 Primitive Technology: Pit and chimney furnace
DyGLE0usN_I 10:05 Primitive Technology: Iron prills
DP0t2MmOMEA 3:54 Primitive Technology: Wood Ash Cement
J8MLpv_utfM 7:18 Primitive Technology: Yam, cultivate and cook
JgQ-07VgJuY 10:31 Primitive Technology: Blower and charcoal
vAuO3bHxSpc 10:34 Primitive Technology: Round hut
Ek3aeUhHaFY 7:08 Primitive Technology: Lime
_7985zBEM3o 9:05 Primitive Technology: A-frame hut
_YDuLCIzbN4 10:06 Primitive Technology: Pottery and Stove
qQTVuRrZO8w 8:19 Primitive Technology: New area starting from scratch
u7wAJTGl2gc 5:46 Primitive Technology: Natural Draft Furnace
D59v74k5flU 10:47 Primitive Technology: Mud Bricks
c2ExwOAjLNw 9:16 Primitive Technology: Simplified blower and furnace experiments
i-WYT2UotIc 5:48 Primitive Technology: Sandals
SjK2XlNE39Q 10:06 Primitive Technology: Reusable charcoal mound
i9TdoO2OVaA 8:51 Primitive Technology: Water powered hammer (Monjolo)
uZGFTmK6Yk4 11:27 Primitive Technology: Termite clay kiln & pottery
aZ4KNMnTsIs 6:27 Primitive Technology: Planting Cassava and Yams
_ZXUCQc2Z78 6:48 Primitive Technology: Bed Shed
e5nfrehyWDM 7:16 Primitive Technology: Freshwater Prawn Trap
rrlr02YDr5A 4:28 Primitive Technology: Spear Thrower
q9AoGc-OTCk 11:32 Primitive Technology: Barrel Tiled Shed
VVV4xeWBIxE 4:32 Primitive Technology: Forge Blower
qEUGOyjewD4 4:17 Primitive Technology: Grass hut
TTcXhYHmOx8 6:26 Primitive Technology: Sweet potato patch
ey68uVUuyvs 4:48 Primitive Technology: Woven bark fiber
SLoukoBs8TE 5:54 Primitive Technology: Bow and Arrow
GzLvqCTvOQY 5:31 Primitive Technology: Charcoal
ZEl-Y1NvBVI 8:24 Primitive Technology: Cord drill and Pump drill
kiHojsMTBeA 8:21 Primitive Technology: Baskets and stone hatchet
RzDMCVdPwnE 8:16 Primitive Technology: Sling
mL3sho1CpkI 6:39 Primitive Technology: Chimney and pots
P73REgj-3UE 14:09 Primitive Technology: Tiled Roof Hut
KzMfeQyY5xM 5:46 Primitive Technology: Palm Thatched Mud Hut
ZajpkwDeEYg 4:21 Primitive Technology: Wood shed and Native bee honey
-JcWY0rjePU 4:31 Primitive Technology: Stone Adze
eVvQnsKuOcE 4:51 Primitive Technology: Making poisonous Black bean safe to eat (Moreton Bay Chestnut)
BN-34JfUrHY 4:23 Primitive Technology: Stone Axe (celt)
z9n9rqb-lvY 4:28 Primitive Technology: Firesticks
Uwtu_DARM9I 4:24 Primitive Technology: Thatched Dome Hut
nCKkHqlx9dE 11:14 Primitive Technology: Wattle and Daub Hut

# The Future of Places

7daz8EqKQJI 1:48 Future of Places Conference Attendee Interviews 2013 - Introduction
uPx-zyE3d2w 7:14 Mohamed Aleh - Future of Places Interview 2013
v8Gu7GJe0fE 3:40 Raimond Blasi - Future of Places Interview 2013
fSXdHvO0gc0 4:39 Rich Bradley - Future of Places Interview 2013
krHq8COtvwE 7:49 Celine d'Cruz - Future of Places Interview 2013
CxOlmr7zecw 17:37 Andres Duany - Future of Places Conference Interview 2013
iQjJv14exlE 1:42 Ricardo Fernandez Future of Places Interview 2013
FCrI1IzTfNg 4:18 Harrison Fraker - Future of Places Interview 2013
9pJJ9zB7NLw 5:25 Tigran Haas - Future of Places Conference Interview 2013
Icde1E5FGbo 6:24 Elahe Karimnia Future of Places Interview 2013
-xL8ZJ5f72s 1:41 Ethan Kent - Future of Places Interview 2013
cxVu3KTFBJw 9:29 Fred Kent - Future of Places Interview 2013
m7irhrAIcRM 7:21 Christopher Leinberger - Future of Places Interview 2013
chtQ5N3dK2I 10:57 Iury Lima - Future of Places Interview 2013
uH2PfFvKHJM 5:34 Helene Littke Future of Places Interview 2013
3Eyc3alCIkQ 2:04 Ryan Locke - Future Of Places Interview 2013
lR4CpKCwhlg 15:48 Ali Madanipour - Future of Places Conference Interview 2013
KGyPOt57rVY 6:00 Thomas Melin - Future of Places Interview 2013
EeO9BtmawTI 6:43 Paul Murrain - The Future of Places Interview 2013
RyYR9bLBxdY 7:23 Patrice Todisco - Future of Places Interview 2013
v8Dti6dGHFs 5:15 Urban Think Tank - Future of Places Interview 2013

# Concerts
Cl2-pDsMkrw 1:48:52 Watermelon Wednesday 2015 - Peter Blanchette and Friends
nTUegVgzxag 0-4:50 Heifetz Hootenanny: Sí Bheag, Sí Mhór | Nigel Armstrong & Peter Blanchette
-bNGmy6QNk4 13-3:56 Bach: Allemande from French Suite No 3, BWV 814 | Peter Blanchette, Mané Lareggla, archguitars
i0djHJBAP3U 1:18:43 Huun-Huur-Tu - Live Berkely

# Südtirol in Concert
vvNd7T4haPg 30:29 Brahms | Quartet no. 2 in A minor op. 51
6orJQxg6-CI 13:39 Johann Sebastian Bach | The art of the fugue - Contrapunctus 1-4
6X6vvUFxgkg 25:36 GUSTAV MAHLER | Kindertotenlieder - Münchner Symphoniker | Kartal Karagedik
I1uX3-q2ryE 26:46 BEETHOVEN | Sonata No.15 in D major, Op.28 - Pastoral
aoU-56icl4k 11:19 Johann Sebastian Bach | Chromatic Fantasia and Fugue in D-Minor BWV 903
CqjXi2O_YQ0 14:43 George Frideric Handel | Concerto grosso op. 6/6
RpS3ZPynlvw 35:34 Johann Michael Haydn | Requiem c-Moll
1NuAiH0Z9VY 1:12:11 Augustin Grieninger (1638 - 1692) Suspiria Mariana
hVOfpxE_bIQ 31:59 MOZART | Piano Concerto No. 27 in B-flat K. 595
wOjrhh1Fcvk 43:08 Beethoven | Mass in C major Op. 86
M7BPlOirPig 17:18 Nikolai Rimsky-Korsakov | Russian Easter Overture op. 36
5P-v4HXuz7Q 1:40 Justinus Will - Pater Justinus | Aria Pastorella
kcq6DlSYwSo 2:16 Robert Führer | Praeludium über das böhmische Weihnachtslied „Geboren ist Christus, der Herr“
4Wvhn__jwd8 3:58 Anonymus / Kerll | Toccata con il pedali
2RQc1rVf-9Q 3:55 Domenico Zipoli | Pastorale
# yhp5aGqte5s 8:55 LIGETI | Sonata for cello solo - Narek Hakhnazaryan
iX0Hf8FP09M 18:22 BACH | Suite No.1 in G-major BWV 1007 - Narek Hakhnazaryan
ZQ8gGjFQEw4 10:06 MAHLER | Lieder
TmGzdZGdtvw 11:17 MENDELSSOHN | Hebrides Overture, op. 26
yVhvEY1dG1E 6:32 Martynas Levickis | Lithuanian folk song: Beauštanti aušrelė
jaY-xTNXNM4 17:13 RICHARD STRAUSS | Don Juan op. 20
cGamL9IcLaQ 1:58 Johannes Brahms | Geheimnis
i_PmPv7Pkv8 19:40 GUSTAV MAHLER | Fünf Lieder nach Friedrich Rückert
TU91teQAC4A 7:56 ALMA MAHLER | Fünf Lieder
XhDex_eO7Xk 38:44 SCHUBERT | Piano Quintet in A major D. 667 - Trout quintet
BEj4t9j--sE 10:31 GUSTAV MAHLER | Piano Quartet in A minor
rY_rxc2NORQ 29:26 BEETHOVEN | Piano Trio in E flat op. 1 no. 1
o5v5KOW91B4 59:44 GUSTAV MAHLER | Symphony No. 4 - Asian Youth Orchestra
IF62rRaQmsM 1:21:19 HÄNDEL | Alexander's Feast HWV 75
EMulDA9jurU 1:10:10 Pietro Nicolò SOROSINA (1645–1732) Oratorio: Adamo ed Eva
G3UglCQTIx0 5:01 MOZART | Quartet for Oboe and Strings in F-major K. 370 - 3. Rondeau. Allegro
0_a1OReKJSU 13:07 Benjamin Britten | Phantasy Quartet for Oboe und String Trio op. 2
luzzcxwJ2GY 12:29 Jiří Družecký | Oboe Quartet in g minor - Trio Boccherini | Ramón Ortega Quero
fVrd9xmcJyA 1:51:01 TELEMANN | Das seelige Erwägen des Leidens und Sterbens Jesu Christi
MwJ_f053pLY 6:20 Johann Rosenmüller (1619-1684) Sonata Prima á 2 in g-minor
33HYebDZ-Ts 6:45 Johann Rosenmüller | Coelestes Spiritu
mlsiYWtk24c 8:16 Johann Rosenmüller | Jubilate Deo
SMdVVGRzXRI 5:48 Jan Pieterszoon Sweelinck | Unter der Linden grüne
We0UT7xZn0M 22:40 MOZART | Missa brevis K. 192
McZvQv3U4OI 4:42 Hans Leo Hassler | Credo in unum Deum
aXJjESS1yGw 26:12 BEETHOVEN | Quintet in E-flat major op. 16 - Azahar Ensemble, Rosalia Gómez Lasheras
xL-C3OOtFgo 24:52 Franz Ignaz Danzi | Quintet in d-minor op. 42 - Azahar Ensemble, Rosalia Gómez Lasheras
cwxOnz9TYAA 25:25 Mozart | Quintet in E-flat major K.452 - Azahar Ensemble, Rosalia Gómez Lasheras
C0Io66i8UHo 35:36 Beethoven | String quartet no. 7 in f-major op.59 no. 1 - Selini Quartet
TItEWA5tnJY 20:29 Fanny Hensel Mendelssohn - String quartet in E-flat Major (Selini Quartet)
h95feadQeV4 1:09:13 Mahler | The Song of the Earth
DfI7auXxTVw 27:38 Haydn | Symphony no. 99 in E flat major
towckJnuffQ 34:20 GUSTAV MAHLER | Lieder - Kammerchor Stuttgart
dwIr4kICW1E 42:36 Schubert | String quartet no. 14 in d-minor D.810 - Esmé Quartet
CZcLkf9vhTA 14:41 Bach | Concerto for two violins in D minor BWV 1043
6mvu9Zn6_6A 1:01:04 MAHLER | Symphony no 1 - Symphonic poem in 2 parts (1888)
hGJTSKfe5ec 28:02 Klezmer Reloaded @ GUSTAV MAHLER MUSIKWOCHEN 2022
9pbuoigbGTg 22:57 Johann Sebastian Bach | Cello Suite No. 5 in c-minor BWV 1011 - Diyang Mei
TRBdRdp-0E8 1:16:31 MAHLER | Sinfonie No. 5 | SCARTAZZINI "Einklang"
WVhB0eUMlnM 9:19 Turris Fortissima | Steven Ponsford - Brass Band Überetsch
nUzDvS845Sc 38:08 HAYDN | Missa in angustiis No. 11 in D minor - Nelson Mass
kkW_-tUHAl0 10:16 Haydn | Ave regina caelorum
gi-UEeEl16M 41:13 HAYDN | Mass in B-flat major
2eooClTAa5g 9:18 Vivaldi | Concerto dall'estro armonico No. 11 d minor RV 565
EDdIFreWfxo 4:21 Bernardo Storace | Toccata & Canzon
RzBNw-0fWq0 3:46 Johann Jakob Froberger | Toccata III
Us_InfVZIxQ 6:11 Baldassare Galuppi | Sonata in C major
KbZF2bv-RjM 4:27 Johann Speth | Partite diverse sopra la Spagnoletta
PU1uHf_1Bj0 1:42:12 Monteverdi | Vespers for the Blessed Virgin
69HI8EPSsdk 3:54 VOCES8 | Heinrich Schütz - Selig sind die Toten
VSFe-6JvqQE 5:03 VOCES8 | William Byrd - Laudibus in Sanctis
yPcq-OhutqI 4:33 VOCES8 | Giovanni Pierluigi da Palestrina - Magnificat Primi Toni
mlCXE2wEe7w 40:38 Schubert | Piano Trio No. 2 in E-flat major, op. 100 D.929
g6mOBV5QNe4 1:24:20 Verdi | Messa da Requiem
3B6Hn3uwQ8U 53:26 Bruckner | Symphony No. 6 in A major - BLJO
HnPPANrbOOg 1:48:17 BACH | St John Passion
CSdlrvC08lM 40:45 Schubert | String quartet no. 14 in d-minor - Death and the Maiden
a-hNxyzVgTU 29:07 Mendelssohn | String quartet No. 2 in A minor, Op. 13
S3OBYE3ubb8 6:44 Johann Michael Bach | Halt was du hast - Tölzer Knabenchor
6-cWKPiTcCc 20:06 Haydn | String Quartet In F Minor - Hob. III:35 - Op. 20 No. 5
v5fEAjlswrE 6:19 Johann Christoph Bach | Herr nun lässest du deine Diener - Tölzer Knabenchor
vPCsZGefMIQ 11:11 Johann Bach | Unser Leben ist ein Schatten - Tölzer Knabenchor
6xXGNAoew6c 47:11 Rupert Ignaz Mayr | Vespers for the blessed virgin - Regina coeli laetare, alleluia
l3y4PhvK-4U 5:44 Heinrich Ignaz Franz Biber | Sonata VI - Capella Lanensis
eip3ZcKcSqc 5:45 Benedikt Anton Aufschnaiter | Quae est ista - Capella Lanensis
RhBiVLBWi0M 8:10 Rupert Ignaz Mayr | Sancta Maria mater dei - Capella Lanensis
pRKnT-3ZDU8 4:04 Bach | Erbarme dich mein, o Herre Gott BWV 721
Wt2c_e2-lsk 7:36 Bach | Prelude and Fugue in G major BWV 541 - Leonhard Tutzer
oZErclhtsZc 9:51 Bach | From the: Little Organ Book BWV 625-630 - Leonhard Tutzer
e-vGwht-yCk 11:22 Bach | Prelude and Fugue in d major BWV 532 - Leonhard Tutzer
HA120-J0_kU 10:22 Vivaldi | Concerto in D major for 2 violins, 2 cellos, strings, continuo RV 564
kcOiBcjt6Ks 21:38 George Enescu | Violin Sonata No. 2 in F Minor, Op. 6 - Julia Fischer, Yulianna Avdeeva
2Ec_DnPL578 25:36 Brahms | Violin Sonata No. 1 in G major op. 78 - Julia Fischer, Yulianna Avdeeva
rRpIlP7to_k 21:53 Mozart | Violin Sonata in E-flat major K.481 - Julia Fischer, Yulianna Avdeeva
j0EwSS5dOWg 3:11 Eugène Gigout | Toccata
pFdef4LRXr0 8:44 César Franck | Pièce Heroïque
loUF03a1VXM 41:24 Schubert | Piano sonata A major D 959 - Inon Barnatan
T7Io2ANYmX8 1:39:27 Vespro della Beata Vergine | Maurizio Cazzati (1616–1678)
4RGL--179eU 2:14:08 Messiah | Georg Friedrich Händel
CM146fyJF6k 5:41 Mozart | Fantasia in D minor K.397
dqOmwwBUXSo 13:17 Haydn | Piano Sonata No. 23 in F Major
lSRz3WmE23s 7:15 Fortepiano by Joseph Hipp (built around 1800, recently restored) presented by Christoph Hammer
AReITrXqo7U 17:57 Vanhal | Concerto for Bassoon and Orchestra in C major
7-89cEdVFzo 1:47:10 Haydn | The Creation
gvlj7lQ3cZg 5:30 Czardas - Vittorio Monti
AI3CAw7RC1o 15:28 Beethoven | Sonata No. 26 E flat major op. 81a - Ronald Brautigam
48ZG9D5BROU 25:17 Schubert | 4 Impromptus op.90 D 899 - Ronald Brautigam
tqUICXytEY0 18:45 Haydn | Piano Sonata No. 59 in E flat major, Hob. XVI:49 - Ronald Brautigam
wrZnK74FkLY 29:46 Mozart | Clarinet concerto in A major K 622
dJwd4AyVMBs 8:32 Vanni Moretto | "Microsonata" Flowers - La douceur et l'Esprit
be2bunwqilM 44:11 Haydn | Mass in B flat major no.14 - Harmoniemesse
cU2F-70W2F0 2:22 Anonymus (17. Jahrhundert) | Capriccio in F-Dur
oNKfSgPuCoo 2:16 Anonymus (17. Jahrhundert) | Canzona in C-Dur
2IcG7i-ZHdU 2:54 Bartholomäus Weisthoma | Toccata in C-Dur
hrf-eCdYD_Y 1:43:07 Bach | Mass in B minor
R8XOTOODFcs 58:28 Cristina Zavalloni | Tiroler Kammerorchester InnStrumenti Südtirol - French Chansons
07bj8oKVSeQ 8:27 Arvo Pärt | Spiegel im Spiegel
GX05R-s6DOY 4:54 Joseph Rheinberger | Elegie
3eJuOesY19E 7:06 Gabriel Fauré | Elegy
Yl5YF3PeUeI 45:31 Schubert | Mass No. 5 in A flat major D 678
41desehmoyU 3:26 Camille Saint-Saens | The Swan
7T2hDcGNE7Y 6:53 Brahms | Schaffe in mir Gott ein rein Herz - Dresdner Kammerchor
KSmT4VIjEtI 16:02 Palestrina | Missa Papae Marcelli - Dresdner Kammerchor
wJ05fSC37dU 3:43 Jacobus Gallus | Ecce quomodo moritur justus - Dresdner Kammerchor
ZOsm3uTzwgc 8:54 Pierre Prowo | Triosonata in d-minor
brOhkFtAXKA 3:35 Marco Uccellini | Sonata IV a violino solo "La hortensia virtuosa"
UE0E5Z49--Y 55:38 Schubert | Octet in F Major D 803 - Camerata RCO
CXK7Biex9Xc 9:46 Webern | Langsamer Satz für Streichquartett - Camerata RCO
IJmB3lqfAMs 13:58 Stuppner | Salomes Schleier-Tänze für 2 Klaviere (Herbert Schuch & Gülru Ensari)
Pmofd2euA-8 19:30 Mozart | Sonata in C major for piano four-hands K. 521
GL7G-ttPUbQ 7:11 Bach | From the der Cantata BWV 76 Die Himmel erzählen die Ehre Gottes
oz4kNUrS3Uw 8:15 Zelenka | From the Sonata a 3 for oboe d'amore, viola da gamba and basso continuo in b-major
scYH3QnMeTs 6:43 Bach | Aria: Meine Seele, auf! Erzähle
rBjFlO_SNCk 6:15 G.H. Stölzel | Sonata a 4 per Hautbois, Violino, Bassoon e Basso in g-minor
BZqYhht7FrU 8:41 Telemann | Cantata: Liebe, die vom Himmel stammt
EMvQ2Q88YZ8 7:30 J. F. Fasch | Sonata for oboe, violin, bassoon and basso continuo
C8zYRu-S8QE 3:14 Edward Elgar | O Happy Eyes - Vokalensemble AllaBreve
lPFQ-UaMMVk 4:47 Eriks Esenvalds | Only in sleep - Vokalensemble AllaBreve
5-rN6k3WuLw 11:37 Bach | Concerto in D minor BWV 974 - Mario Brunello
myrFn4pxLOo 11:14 Vivaldi | Concerto in C Major RV 508 - Giuliano Carmignola, Mario Brunello
XIOndQLs1JE 9:07 Vivaldi | Violin Concerto in D major RV 230 - Giuliano Carmignola
ht-M-dR0jzk 12:22 Händel | Concerto grosso Op. 6, No. 1 in G major
9One__hAjrI 46:02 Schubert | String Quartet No. 15 in G Major D. 887 - Esmé Quartet
f3kH1srw9-o 28:24 Gustav Mahler | Der Abschied
3bqlt1EOlwg 17:54 Schönberg | Five Orchestral Pieces Op. 16
BErrTd_yteE 9:15 Busoni - Stein | Berceuse élégiaque Op. 42
20gwYJz_Il0 15:34 Hindemith | Kammermusik Op.24 No.1
sFMROaVmbTg 10:20 Debussy | Prélude à l'après-midi d'un faune
bS50Q54ksHY 9:05 Josquin des Préz | De profundis - amarcord Ensemble
hbMnpY8gr9c 8:37 Josquin des Préz | Illibata Dei Virgo nutrix - amarcord Ensemble
r7OfGxdTdMU 1:06:06 Joseph Haydn | Johann Hermann Schein | Da Jesus an dem Kreuze stund
5XijF_2dr3U 8:54 La Venexiana - Amanti io vi so dire - Benedetto Ferrari
IzMj3-V4eJ0 5:39 La Venexiana | Udite amanti - Barbara Strozzi
8kFz-tZ6HWQ 6:21 La Venexiana | Lamento della Ninfa - Claudio Monteverdi
1spiDxJNE2g 4:30 La Venexiana | Quel sguardo sdegnosetto - Claudio Monteverdi
zqrPCtzoQTU 5:21 La Venexiana | Poppea's tango - Claudio Monteverdi
1XYDiWY5FuY 9:39 La Venexiana | Usurpator tiranno - Giovanni Felice Sances
sikJvC62E1k 14:53 Boccherini | Symphony in d minor No. 29
aYSPlTTM9Gc 11:57 Carl Philipp Emanuel Bach | Symphony in E-flat major Wq179
weL7QyV301s 31:53 Mozart | Clarinet Quintet in A major K. 581
IJtypOgWsZk 29:33 Weber | Clarinet Quintet B-flat major Op. 34
pzYSctUR-Y0 24:23 Beethoven | String Quartet No. 16 in F major, Op. 135 - Kuss Quartet
SjIBK7A8wl4 25:28 Mozart | String Quartet No. 17 in B-flat major, K. 458 | Kuss Quartet
# gtWOUK8xwpo 2:15:54 Mendelssohn | Elijah Oratorio
lDqQBQu2DEI 25:06 Ravel | Le tombeau de Couperin - Zoltan Fejérvari
breY1U3TdGE 39:03 Chopin | 24 Preludes op 28 - Zoltan Fejérvari
8diDC-twh2c 16:57 Bach | French Suite No.5 in G major, BWV 816 - Zoltan Fejérvari
8XmM_1fwx7U 10:26 Johann Christian Bach | Symphony in g minor Op. 6 No. 6 W.C12
_q7X4p6ETvE 5:22 Bach | Busoni - No. 9 Jesus Christus, unser Heiland - Stepan Simonian
rV0Nbs8FED0 4:05 Bach | Busoni - No. 2 Wachet auf, ruft uns die Stimme - Stepan Simonian
NDylV0Yau_M 17:03 Beethoven | Piano Sonata No. 31 in A-flat major, Op. 110 - Stepan Simonian
w-4uuUpwNSc 31:03 Peter Waldner plays the Schwarzenbach - Organ (1599) Parish church of St. Peter, Auer (I)
9UTe8zQBlT8 8:45 Peter Waldner on the Apfelregal
Cjg66OdObo4 3:50 Nun sei willkommen, Herre Christ | Windsbacher Knabenchor
y029Bg-pYSI 2:50 Gottes Sohn ward ein Kindelein | Windsbacher Knabenchor
9FHjx35yucI 3:09 A Hymn to the virgin | Benjamin Britten
C9z7vt6RT-w 3:00 Ave maris stella | Windsbacher Knabenchor
SWw1Q7SSG1o 4:35 Maria durch ein Dornwald ging - Adventskyrie | Windsbacher Knabenchor
G566KbSujMQ 34:52 Beethoven | String Quartet No.12 Op.127 - Quartetto di Cremona
mIB7XAph0ng 52:49 Schubert | String Quintet in C major op. post. 163, D.956 - Quartetto di Cremona & Eckart Runge
53W65rlcmsc 3:04 Macht hoch die Tür, die Tor macht weit | Windsbacher Knabenchor
3QIEA02J8Ms 39:16 Antoine Brumel | Missa Et ecce terrae motus - amarcord & Calmus Ensemble
ZVPQtWPf76o 2:16 Domenico Mazzocchi | Dunque ove tu, Signor
xDgpcfJ-jcc 6:17 Domenico Mazzocchi | Piangete, occhi piangete
MSVghy9IQ1E 19:20 Graziani | Adae Oratorium
lh0iS4iL8is 16:22 Graziani | Filii Prodigi Oratorium
JePfy2KCa1Q 27:47 Beethoven | Piano sonata No. 32 in c minor op. 111 - Evgeni Koroliov
FUaB1qEwFYA 13:17 Beethoven | Piano Sonata No.27 in E minor Op.90 - Evgeni Koroliov
KLHiRIyWeSM 4:05 Slovenske dežele | Ingenium Ensemble
UOs-gvNE6fc 3:28 Kako kratek je ta čas | Ingenium Ensemble
JrthQJpY5Z8 3:35 Da pacem Domine - Verleih uns Frieden | Ingenium Ensemble
yBnhZd2V_TI 6:27 Piazzolla | Introducción al Angel - Esmé Quartet
adKab_1S0ug 42:50 Beethoven | String Quartet No.15 in A minor op. 132 - Esmé Quartet
dd_2D9Rg_Tk 2:11:01 Vivaldi | Juditha triumphans RV 644
5kTgI-GFg1s 30:02 Mozart | Quintet for clarinet and string quartet in A major K581
6KWAyuvG6bs 15:45 Haydn | String quartet in g major op. 33 no. 5
daMMimVYLaI 36:59 Schubert | Lieder
bZvsTlk85Xg 28:56 Schumann | Dicherliebe op. 48
EIaSNc9V3VU 5:51 J.S. Bach | Violin concerto in E-major BWV 1042 - Adagio - Yuki Serino
TvngjHpSAOk 4:58 J.S. Bach | Aria: Heil und Segen
LCIpARJEi2M 10:43 Arvo Pärt | Fratres
i-vtSWEs5aQ 14:11 J.S. Bach | Ciaccona for solo violin and 4 voices BWV 1004 - Morimur
o7iTlsbVEJQ 8:13 Harmonium improvisation over motifs by Antonín Dvořák
X9m65sqSMU4 40:44 Dvořák | Mass in D major op. 86 Lužanská
69XCVps7tls 1:36:13 Mihaela Ursuleasa | in concert @ GUSTAV MAHLER MUSIC WEEKS 2012
5hOv24NHuXE 1:28:30 Juliane Banse | Ben Kim - GUSTAV MAHLER MUSIC WEEKS 2014
zqZPLIvmNx4 8:50 Édith Canat de Chizy | Quartet No. 4 "En noir et or"
WdgJbFbgBmk 32:53 Mozart | String Quintet in c major KV 515
lzEhYbyscAs 31:32 Mozart | String Quintet in G minor KV 516
IEhVVlI8EGQ 5:47 Haydn | The Seasons - "Be now gracious, smiling heaven!" (German)
AqrTsxQgCt0 1:36:07 Monteverdi | Vespers for the Blessed Virgin
6BycfHlcWTM 8:18 Rossini | La Cenerentola - Overture
kzpwrSmrpTo 10:58 Rossini | Maometto II - Overture
nLIWkNt-2C8 7:44 Rossini | Il Barbiere di Siviglia - Overture
1WST6UspwAM 26:50 Mendelssohn | String Quartet in F minor op. 80
XehskvXAO88 11:31 Ligeti | Six Bagatelles for Wind Quintet
NKXOxLW-nRs 5:36 Georg Muffat | Toccata prima
qXGQjEH3s2g 5:03 Liszt | Grande études de Paganini No. 6
JDZGH6Y6H9A 6:08 Bartók | Romanian folk dances
Pb5yC9pNYh4 1:24:22 Mahler | Symphony 2
6gmYZeIkvBU 20:19 Haydn | String Quartet in B-flat major Op.50, No.1
fVSRebiSits 1:10:49 George Frideric Handel | L' Allegro, il Penseroso ed il Moderato HWV 55
PaU0onMYetY 25:17 Tchaikovsky | Pianotrio op.50 - Tema con variazioni
OIrYERFoir4 29:07 Weinberg | Piano Trio op. 24 - Trio Marvin
hOJ961_7tpQ 25:05 Mendelssohn | Psalm 42 - Wie der Hirsch schreit
UxhChL58AZw 4:46 Mendelssohn | Verleih uns Frieden gnädiglich
YTZZdOM6g5E 12:07 Mendelssohn | Drei geistliche Lieder op. 96
2kBexWNENgk 14:30 Mendelssohn | O Haupt voll Blut und Wunden
wbHdZZLLnbw 3:24 Stille Nacht | Windsbacher Knabenchor
tJYvbPhkoTY 4:09 O du fröhliche | Windsbacher Knabenchor - Modern Slide Quartett
Rxw1DJVUPQo 2:30:27 George Frideric Handel | Brockes Passion HWV 48
tG4u_9d0t3c 47:40 Antonio Cesti | Natura e quatuor Menta dolentia ad Sepulcrum Christi
n3N3HXSZsr8 4:57 Johann Stadlmayr | Aspice á 6
CLIIvXNV9hE 36:00 Franz Schubert | Piano Sonata No 19 in c-minor D 958
u2QkSMuBGME 33:41 Strauss | Also sprach Zarathustra, op. 30 - BLJO
nMVkhjPxeko 16:19 Mahler | Lieder eines fahrenden Gesellen - BLJO
yvGfnQlV3nc 14:22 Brahms | Tragic Overture, op. 81 - BLJO
7MvBLr4h0Xw 2:51 Bach | Prelude BWV 1007 on classical guitar
aguCuZ_YwfU 3:20 Franz Schubert | Grab und Mond - Schnittpunktvokal
WBqT5WWb0-Q 8:51 Patricia Van Ness | Caritas (Schnittpunktvokal, Marco Tamayo)
TgFRnzUa0fk 8:17 Variations on the theme of Carnival of Venice on classical guitar - Marco Tamayo
TKmByTMYFtA 5:56 Schubert | Die Nacht - D.983 op. 17, No 4
9ANwExJzH24 11:49 Rossini | Sinfonia Semiramide - Ensemble Cordia
2jxupA7oy3I 4:17 Chiara Margarita Cozzolani | Bone Jesu, fons amoris
xTNbclgU3h4 30:49 Mozart | Clarinet quintet K581 in A major - Armida Quartet, Sabine Meyer
3JeYoKYewts 20:41 Mozart | Piano Trio in B flat major KV 502 (Amatis Piano Trio)
kvkCYKj7kpQ 1:22:10 George Frideric Handel | Alexander's Feast
VkvFJ9LkrX0 11:56 Rossini | William Tell - Overture
5M0ctCaIXaE 38:34 Meister Eckhart | Martina Gedeck & Unio Mystica (German)
V0VKcE0PMes 1:13:38 Schubert | Die Winterreise
cxBhSvP3JQs 5:20 J. S. Bach | Flößt, mein Heiland, flößt dein Namen
zymJhlpYcuA 3:51 Franz Liszt | Consolation No. 3 in D-flat major
QBnFcBT5HrY 3:45 Franz Liszt | Consolation No. 3 in D-flat major (Historical Steinway, 1860)
GQV_80Bgz4o 2:14 Chopin | Mazurka Op. 6 No. 2 in C-sharp minor (Historical Steinway, 1860)
6jatrSCp9rc 2:13 Chopin | Mazurka Op. 6 No. 2 in C-sharp minor
7OZp7DA24eA 8:57 Historical Steinway - Modern Steinway | A comparison by Hardy Rittner
S3JRSz4KGmk 26:09 Bach | Christmas oratorio BWV 248 - Part 1
vg4wFFJJaR8 1:10:48 Beethoven | Missa Solemnis D major Op.123
8F5X9rDDpjQ 28:38 MIAGI Youth Orchestra | Rainbow Beats - Suite for 100 Years Nelson Mandela (Duncan Ward)
YERVu0YMqSw 10:04 Gustav Mahler | Britten - What the Wild Flowers tell me - MIAGI Youth Orchestra
_gnLlCFBZGU 10:20 Franz Schubert | Intende Voci D963
w9ekHA5xLmU 44:49 Franz Schubert | Mass No.5 in A flat major D678
R7qmshfjfXE 28:17 Bach | Partita No. 2 D-Minor BWV 1004 - Johannes Pramsohler
k7yVhT6dz34 4:29 Jean Richafort | Veni, electa mea - Singer Pur
Rw0zjaoWU6Q 8:40 Ludwig Senfl | Tota pulchra es - Singer Pur
Cs59lc58T0w 6:50 Heinrich Schütz | Ego dormio - Singer Pur
2FcahniNsbI 5:25 Jean de Latre | Qualis est dilecta mea - Singer Pur
tzvCaSbrXvg 2:14 John Dunstable | Quam pulchra es - Singer Pur
dPiInzyBuLU 2:37 Guillaume Dufay | Anima mea liquefacta est - Singer Pur
iAzsnyN4VOc 3:06 Giovanni P. da Palestrina | Nigra sum sed formosa - Singer Pur
t50-VZzYDkM 7:52 Dominique Phinot | Surge, propera amica mea - Singer Pur
9sfuuOkCToA 18:41 Mozart | Flute Concerto D-Major No.2 K314 - Dorothea Seel & Barocksolisten München
sG_0X4Bgsco 16:23 Mozart | Bassoon concerto B-Flat major K.191
tbGVRW5_7Ns 12:26 Siegfried Matthus | Phantastische Zauberträume - BLJO, Ebonit-Quartet, Anna Duczmal Mrós
v3F7CcTvvzY 40:25 Bela Bartók | Concerto for Orchestra - BLJO, Anna Duczmal Mrós
gVXp7IrxZ8I 24:23 Prokofiev | Sonata No 2 Op. 94
ek2C0ldIvVA 10:21 Ensemble Chromoson | Caroline Profanter - Neon
11EfSHf80ns 9:36 Ensemble Chromoson | Daniel Oliver Moser - Geister, über den Wassern
z8nZ-pu_0do 12:22 Ensemble Chromoson | Eduard Demetz - IPSE
iPuAoYzkF-E 7:52 Ensemble Chromoson | José Manuel Serrano - Sub rosa
dVn5wcSdCzM 10:29 Ensemble Chromoson | Hannes Kerschbaumer - llif
qxfLIpM96fg 7:10 Johann Sebastian Bach – Prelude and Fugue in D major BWV 874 - Dina Ugorskaja
fNM5PneeKRQ 15:26 J. S. Bach – Prelude and Fugue in B minor BWV 869 - Dina Ugorskaja
aDtRgWtx7eY 14:27 Galina Ustvolskaja - Sonata no.5 - Dina Ugorskaja
yI3_-SpgR-s 9:18 Johann Sebastian Bach | Mass in B minor - Kyrie eleison
80a3VXPGlIk 4:53 Johann Sebastian Bach | Mass in B minor BWV 232 - Christe eleison
7sLGEkyR8qU 4:11 Johann Sebastian Bach | Mass in B minor BWV 232 - Qui sedes ad dextram Patris
WsD8CHcZMJY 4:12 Johann Sebastian Bach | Mass in B minor BWV 232 - Et in unum Dominum
myAnPsTihX0 8:18 Johann Sebastian Bach | Mass in B minor BWV 232 - Agnus dei, Dona nobis pacem
IoEN4bkTf8E 6:42 Ensemble Conductus | Mazurka d'Doro
rz3wiov1Fw8 7:29 Ensemble Conductus | Quattro versi in purgatorio
SgAkFkiExeM 9:12 Ensemble Conductus | Viola del pensiero - Anna Serova
zYccvhhTmNw 10:29 Kit Armstrong | J. S. Bach - Prelude and Fugue BWV 894
gGEZWPn2vTQ 10:36 Kit Armstrong | W. A. Mozart - Fantasia and Fugue KV 394
0tXEhfsxQhQ 8:13 Kit Armstrong | William Byrd - Voluntary, Fancy
6etYdxC9MSo 19:20 Gustav Mahler | Rückert-Lieder
p00U0SCcKvw 35:34 Johannes Brahms | String Quartet No 2 in A minor - Op.51
PI12uo2IC1I 44:19 Johann Zach | Stabat mater - Barocksolisten München & NovoCanto
DMtJVgJ7CRo 10:51 Johann Zach | Sinfonia in G
yjBRYe0jLSQ 28:32 Johann Zach | Missa solemnis
MgQ6EmQ8Oe0 10:02 Jan Dismas Zelenka | In exitu Israel
eUEuSnu0zi0 3:59 František Xaver Brixi | Pastores - Ensemble Inégal
jC7sjzYPTaQ 4:40 Jakub Jan Ryba | Rozmilý slavíčku - Ensemble Inégal
ip2oaCh4anY 8:22 Antonio Vivaldi | Domine ad adiuvandum me festina - Ensemble Inégal
RFiA4bSEOFs 3:46 Hans Christian Lumbye | Kopenhagener Eisenbahn-Dampf-Galopp
FxvSQLLatWo 1:07:56 Johannes Brahms | A german requiem
2dKHu4OuGeI 5:06 Vittorio Monti | Czardas (Violin: Yuki Serino 11 yrs)
NYzD5WvLj0Y 12:08 Johann Strauss II | Kaiser-Walzer
J5gZ6h2azc8 37:37 Jakub Jan Ryba | Czech Christmas mass - Česká mše vánoční - Ensemble Inégal
ZNu_qnicCko 3:03 O mio babbino caro - Gianni Schicchi | Giacomo Puccini
V6V-2eyP49U 2:53 Quando m'en vo - La Bohème | Giacomo Puccini
4XZLOJgsYE0 8:54 Gold und Silber Walzer - Franz Lehar
J4ewS96_qYA 8:23 Johann Strauss II | Overture: The bat - Die Fledermaus
QiDvv-D6TO0 5:00 Voces8 | Beautiful - Cover by Carly Rae Jepsen, Justin Bieber, Toby Gad
Yh0byWvrz58 1:00:51 Gustav Mahler | Symphony No 4
3Pc_LUItWQI 11:55 Franz Schubert | Die Zauberharfe - Overture
-_bjjSH8coc 5:44 Claudio Monteverdi | Confitebor Secondo - Selva Morale e Spirituale
MZGLboLe6II 3:54 Claudio Monteverdi | Laudate Dominum omnes gentes
jv6i3FRtnWo 2:56 Claudio Monteverdi | Iste confessor primo - Selva Morale e Spirituale
s47K-pxNLDI 3:06 Voces8 | Ain't that a Kick in the Head (Jimmy Van Heusen, arr. Jim Clements)
wYsqjV5rcUE 2:35 Voces8 | Sing Joyfully - William Byrd
bhTjE2mpUQg 3:21 Voces8 | It Don't Mean a Thing (Duke Ellington, arr. Ben Parry)
i-kYfUpIq1Q 3:46 Voces8 | Bogoroditse Devo - Sergei Rachmaninoff
1hv5sJe-Fr0 23:35 Wolfgang Amadeus Mozart - Krönungsmesse - Coronation mass KV 317
ux2Sqpg2Jn4 32:32 Yulianna Avdeeva | Franz Liszt - Sonata in B minor
RK3XvErL8g0 5:51 Yulianna Avdeeva | Franz Liszt - Unstern! Sinistre, disastro
g0CJHlY70Qs 4:05 Yulianna Avdeeva | Franz Liszt - La lugubre gondola no.1 - Die Trauergondel I
KeMd1b3cWP4 7:04 Yulianna Avdeeva | Frederic Chopin - Ballade no. 2 in F-major op. 38
IJg3dirbtIE 12:39 Yulianna Avdeeva | Frederic Chopin - Fantasie in F-minor op. 49
z3g2G6fnckE 7:06 Yulianna Avdeeva | Frederic Chopin - Polonaise in A-flat major op. 53
FsFDT24JElU 9:26 Yulianna Avdeeva | Frederic Chopin - 4 Mazurkas op. 7
lomrNMdT3xE 9:18 Yulianna Avdeeva | F. Chopin - Nocturne in C-sharp minor, Nocturne in E-flat major, op. 55/2
QrrdWYh9Hwc 2:33:29 Johann Sebastian Bach | Matthäus - Passion / St Matthew Passion (BWV 244)
iTiiSYIw33M 20:18 Alban Berg: Sieben frühe Lieder, Gustav Mahler: Des Knaben Wunderhorn
_KczRwDV6L4 13:50 Wolfgang Amadeus Mozart - Exsultate, jubilate KV 165 (KV 158a)
jj5eleg94DM 15:40 Joseph Haydn | Piano Trio No. 39 in G-major, Hob. XV:25
PD2wsobDX0k 10:32 Manuela Kerer - "Bestie Infernali!" | Haydn Chamber Ensemble
59tH0r6eVvU 43:13 Antonin Dvorak | Piano Trio No.3 in F-minor, op. 65
2xvAy85WfGE 12:35 Cristóbal de Morales - Missa pro Defunctis: Sanctus, Benedictus, Agnus dei, Communio
umW2GALmY2w 11:49 Cristóbal de Morales - Missa pro Defunctis: Pie Jesu, Offertorium | C. Festa - Contrapunctus 63 à 4
0uyBh4CBMPw 18:00 Antoine Brumel - Missa pro defunctis à 4: Sequentia Dies irae, Dies illa
TTtPxltC7_w 16:54 Cristóbal de Morales - Missa pro Defunctis: Introitus, Kyrie | Costanzo Festa - Contrapunctus 76 à 4
BEVeGQGiKtw 4:27 Josquin Desprez - Christus mortuus est à 6 | Cristóbal de Morales - Circumdederunt me à 5
Ugn7WpV6nyE 5:25 Antonin Dvorak | Slavonic Dance op. 72 No. 2 e-minor | BLJO, Sebastian Tewinkel
# H1qzS4BUoso 33:59 Igor Strawinsky - Le Sacre du printemps | BLJO, Sebastian Tewinkel
c8IUSrC4opk 7:10 Pyotr I. Tchaikovsky - Op. 11 II. Andante cantabile | BLJO, Maximilian Hornung, Sebastian Tewinkel
tcIRIrWmMvc 39:43 Antonin Dvorak - Cello Concerto in B minor, Op. 104 | BLJO, Maximilian Hornung, Sebastian Tewinkel
hgmf3MVWJjk 5:58 Ensemble airborne extended | Manuela Kerer - kaput II
KkLs4lkG7Zo 5:56 Ensemble airborne extended | Mathias Schmidhammer - Skeleton dance
cQ8Aob_I61M 6:13 Ensemble airborne extended | Alexander Kaiser - The difficulty of crossing a field II
bTCEALQo1r0 9:08 Ensemble airborne extended | Hannes Kerschbaumer - not.to
_H0gR7uur28 7:30 Ensemble airborne extended | Manuel Zwerger - Condemned
_9D_5x1ZhmA 7:34 Sonatori de la Gioiosa Marca & Dorothee Oberlinger | Antonio Vivaldi Concerto D-Dur RV 270
fXm4qSLv5q0 9:45 Sonatori de la Gioiosa Marca & Dorothee Oberlinger | Antonio Vivaldi: Concerto - La Pastorella RV 95
aKwgWTOo85c 1:51:18 Johann Sebastian Bach | St John Passion (BWV 245)
0-L5tDCoD0Q 9:43 Anton Brucker | Ave Maria - Christus factus est
5jUDJL6VSwg 15:37 Ludwig Berger - Gesänge aus einem gesellschaftlichen Liederspiele: Die schöne Müllerin
Uj75QF0AVXM 1:01:41 Joseph Haydn - Stabat Mater
TJ0cd15DZWg 8:56 Arvo Pärt - Magnificat
RM-5cWEpYJM 7:25 Johann Sebastian Bach - Komm, Jesu, komm!
1eguRLT_Ces 28:51 Johann Sebastian Bach - Magnificat BWV 243
s2UlHcPnmco 30:51 Johann Sebastian Bach - Herz und Mund und Tat und Leben BWV 147
# JiBmq-gVlNU 18:26 Gustav Mahler - Symphony No. 9 | 2. Im Tempo eines gemächlichen Ländlers
# qRLTWD6aOE4 29:41 Gustav Mahler - Symphony No. 9 | 1. Andante comodo
# cLoT5ZbGHVA 29:08 Gustav Mahler - Symphony No. 9 | 4. Adagio. Sehr langsam und noch zurückhaltend
# -T7aLv12TPQ 14:30 Gustav Mahler - Symphony No. 9 | 3. Rondo - Burleske

# TA Outdoors
KmweP8s-Rds 25:09 Building a Celtic Roundhouse with Hand Tools: Bushcraft Project (PART 1)
dNIDCJ2HrJs 26:02 Iron Age Celtic Roundhouse: Building the Timber Frame Foundation | Bushcraft Project (PART 2)
gH3zo6wGiFk 33:39 Building an Iron Age Roundhouse with Hand Tools: Bushcraft Project (PART 3)
_CLVJCAWELQ 26:19 Iron Age Roundhouse: Building with Hand Tools: Bushcraft Project (PART 4)
KML_UX-unYQ 32:52 Building an Iron Age Roundhouse: Perimeter Walls | Bushcraft Shelter (PART 5)
tmow-wvqx8U 35:32 Building a Roundhouse: Clay Walls with Bare Hands | Bushcraft Shelter (PART 6)
oi5bAqcC4gM 18:34 Building a Roundhouse by Hand: Celtic Roundhouse | Bushcraft Camp (PART 7)
R0BHWcHROoA 29:28 Building a Medieval Roundhouse - Thatching the Roof | Bushcraft Shelter (PART 8)
N_aNFeYHp6o 38:35 Building an Iron Age Roundhouse - Thatching the Roof | Bushcraft Project (PART 9)
w2gChdtNs24 25:30 Medieval Camp - First Night in the Celtic Roundhouse: Bushcraft Project (PART 10)
tBiu1Emv31Q 29:23 Building a Medieval House | 10 Day Bushcraft Shelter Build
fFK6nzwbRf8 13:56 Incredible Stone Age House: Primitive Technology 3,800BC
D8ba5tt6Sqo 1:00:14 Viking House: Full Bushcraft Shelter Build with Hand Tools | Vikings

# urbanology
YEsJnMc43pE 7:36 Analogous Unfolding
m1IZqlnEbmg 7:11 Unfolding Sequences - an introduction
ZDUlG6E3Lpw 11:53 The Beautiful Software Thesis: feeling as the core of good engineering
oTflOKPpCy8 9:30 Adaptation - with Christopher Alexander - part one: Adapting to the Environment or "Flint & Brick"
xmlo0Lva5AU 10:33 Nature, life, and self: Christopher Alexander after a pattern language
VZHb9-Y9r_E 8:25 Christopher Alexander: pattern languages are for communities
tiOzvEUoLeU 26:14 The Beautiful Software seminar at Building Beauty
dnTpXwgO6Qg 2:20 Gatemaker: a silent explanation
o8b7ZBWGmu4 8:35 Gatemaker
2V4QYC-PRIw 8:29 The Application of Feeling -- Christopher Alexander
lxxlLqwCPDc 3:55 urbanology.com - an overview
xdKFPA8SrKM 3:55 the scope of urbanology
5uxAp1piXMY 7:17 urbanology: neighborhood collaboration

# Feynmann Lectures
# https://www.youtube.com/playlist?list=PLyQSN7X0ro23NUN9RYBP5xdBYoiv2_5y2
EYPapE-3FRw 9:59 Feynman on Scientific Method.
kd0xTfdt6qw 55:55 Richard Feynman - The.Character.of.Physical.Law - Part 2 (full version)
NM-zWTU7X-k 5:37 Feynman: Knowing versus Understanding
lr8sVailoLw 6:24 Richard Feynman Thinking Part 1 of 2
MDZaM-Bi-kI 1:15:03 The reason for antiparticles - Richard P. Feynman
xdZMXWmlp9g 1:17:58 Richard Feynman on Quantum Mechanics Part 1 - Photons Corpuscles of Light
QkhBcLk_8f0 2:51 Great Minds: Richard Feynman - The Uncertainty Of Knowledge
j3mhkYbznBk 56:04 Richard Feynman - The.Character of Physical Law - Part 1 The Law of Gravitation (full version)
ZcpwnozMh2U 1:57:27 Richard Feynman: Quantum Mechanical View of Reality 1
4eRCygdW--c 1:19:47 Richard Feynman "Tiny Machines" Nanotechnology Lecture - aka "There's Plenty of Room at the Bottom"
M1TiXLGqlM4 1:31 Feynman and Reading
E383eEA54DE 4:36 Richard Feynman on - philosophy, Why question, Modern science and Mathematics.avi
OX1EK5IBSdw 57:53 Richard P. Feynman: Theory, Prediction, Observation
VW6LYuli7VU 1:22 Richard Feynman talks about Algebra
uY-u1qyRM5w 1:18:01 Richard Feynman Lecture -- "Los Alamos From Below"
kW6rR9H9Vu8 41:31 Richard Feynman's Story of Particle Physics - 1973 Lecture
iMDTcMD6pOw 1:15 You don't like it? Go somewhere else! by Richard Feynman, the QED Lecture at University of Auckland
Ec03o-7rHLw 28:23 Richard P Feynman: Quantum Mechanical View of Reality 2 (Part 1)
aAgcqgDc-YM 56:10 Richard Feynman - The Character of Physical Law - Part 6 Probability and Uncertainty (full version)
EKWGGDXe5MA 1:15:47 Richard Feynman Computer Science Lecture - Hardware, Software and Heuristics
a6n0HSJ5jEE 56:01 Richard Feynman-The Character of Physical Law Part3: The Great Conservation Principles
zQ6o1cDxV7o 57:03 Richard Feynman - The Character of Physical Law - Part4 Symmetry in Physical Law (full version)
36GT2zI8lVA 7:33 Richard Feynman. Why.
b9F8Wn4vf5Y 5:30 How did we find the speed of light?
GNhlNSLQAFE 36:42 Richard Feynman - The World from another point of view
euGp9quNqLU 9:11 Richard Feynman - Law of Gravitation - An Example of Physical Law part1
LPDP_8X5Hug 9:46 Richard Feynman Lecture on Quantum Electrodynamics: QED. 1/8
ZbFM3rn4ldo 1:44 Richard Feynman: The Beauty of the Flower
lytxafTXg6c 0:44 Richard Feynman explains the feeling of confusion
xdIjYBtnvZU 21:44 Feynman's Lost Lecture (ft. 3Blue1Brown)
OL6-x0modwY 1:03 The Scientific Method-Richard Feynman

# generative films
08eEdgqbJns 5:48 [Richard P. Gabriel] The Beginning of Writers' Workshop
ad5XAPgKJoM 6:15 [Jenny Quillen] History from A Pattern Language to the Nature of Order
_V0kVOLOCrY 2:37 [Ward Cunningham] The Starting Point of Software Patterns

# Videos of Irish Farming Life
A1IaWPaqbVw 38:09 The Hiring Fairs - Recruiting fairs for Irelands poor and destitute
f6vEk91Paao 1:44 Combined Harvester cutting Barley
4p0M8FGl_zY 41:32 Sheep Farming in Ireland Documentary - A Year in the Life of an Irish Sheep Farmer
D47RhkOKMOU 41:23 Potato Farming in Ireland ** Documentary by Videos of Irish Farming Life
QJew3JjN5oQ 22:59 Irish Farming in Days Gone By -- Vintage Farming Documentary *** Featuring Fordson Tractors
Z2J1A_ZoMd0 25:53 Farming Potatoes in my Fathers Day -- Irish Vintage Farming Documentary
kabpPfX82c4 20:14 Traditional Farming in Ireland - Growing & Harvesting Oats - Threshing - Irish Farming Documentary
wNpeCgzn22w 34:30 Vintage Potato Farming in Ireland - Farming with Horses & Vintage Tractors - Irish Documentary
lrqH7-7UyKI 41:11 Vintage Farming in Ireland Documentary "The History of Irish Farming" *Videos of Irish Farming Life*
tqntI3Ec8Ew 40:01 Making Irish Linen & Vintage Flax farming - Traditional Crafts of Ireland Documentary
tcCHQ3yDdBU 3:39 Making Irish Whiskey at Old Bushmills Distillery.
0iemaocqsVc 1:37 Bringing in the Hay @ Muckross Traditional Farms Ireland
sFR2XW0_S2k 3:37 What is Irish Peat?
mPXI1muG4P0 2:58 The Oul Turf Fire by Ireland's Singing Farmer -- (Irish Emigration Song)
AiS_kUMsYJs 3:38 From the Cow to the Creamery (Milk & Butter Making in Ireland)
36nZmgXeY5c 5:21 A Short History of Timber Harvesting in Ireland (Garvagh Forest)
qE1yFzKJjRo 16:44 Vintage Tractor Restoration Project -- Restoring a 1940 Fordson N Tractor -- (Part Two)
I3tneKGBSeE 5:30 Documentary on Country Life in N. Ireland during the Second World War
gR0h1Sy-NBg 10:06 Restoring a 75 year old Vintage Tractor - 1940 Fordson N Tractor Restoration Project
r2QhFbFY2G4 50:07 Traditional Farming Documentary -- Farm life in Ireland during the 1930s - "Preserving the Past"
3C5UAzWIGW4 3:22 Farming in Ireland before the Potato Famine
EZJKqHAw30w 4:08 Vintage Farming Scenes on an Irish Harvest Day **Including Music**
YaIlE79R9Xg 4:06 Separating Cream in a Traditional Irish Farmhouse
QklSj60zYok 8:51 Traditional Hay Making
p3Kd9J_Wd0E 7:45 Vintage Farming Ireland- Threshing Oats - Irish Farming Documentary - Videos of Irish Farming Life
mihqgFLTB68 10:07 Vintage Farming in Ireland in the 1950s - Harvesting Oats - Traditional Farming Documentary
LZR_7TXt0ss 5:43 Vintage Fordsons tractors cutting oats with Reapers & Binders
xrMi5pbRBF4 23:10 Farming In Ireland in the 1950s - Growing Oats - Farming Down the Years Part One
CZB9-_fkb4c 5:11 300+ Vintage Ferguson Tractors at Work!
ZFRDvonoiaw 3:12 Beef Farming in Ireland -- Dexter Cattle
szGI33ETEq0 4:01 Lambing Season in Ireland -- Ewe Lambing Twins
kxkbbDWnjmk 7:51 Cutting Oats with a Scythe & Threshing the Corn -- Harvest Old Ireland
-D5GPBYQnZ8 46:24 The Story of Turf Cutting in Ireland *Those Days are Gone* Irish History Documentary
-hbcHGDUH-Y 2:46 Forty Shades of Green - Scenery from around Ireland & music by John Watt
9TbQLcaA_Xc 5:30 Haymaking in Old Ireland
_1nfT5R6WBY 3:16 Old Farming Scenes of Ireland -- The Singing Farmer performs "21 Acres Of Land"
TW9JcU8T6Qg 4:46 Pedigree Sheep Farming in Ireland -- Rare Breeds Part 2
wzNHvl4P6aY 9:11 Vintage Haymaking in Ireland
# W2PBpGoa_tE 9:26 Phillip McCallen win at the 1991 NW200 + Interview with McCallen
LyiDIrZdFz0 1:18 Old Video of Haymaking - Vinatge Farming in Ireland
LoNvrydG8NY 3:54 Modern Turf Cutting Machine
gHQBgBBMuiI 2:18 Potato Harvesting in back in the day -- "The Potato Spinner"
Ut-fwZpEA6Y 5:30 Sheep Farming in Ireland -- Rare Breeds of Sheep
qULjCyRrByA 5:06 Farming of Yesteryear -- Old Time Ploughing with Horses and Tractors in Ireland
dVt-6NJ71kQ 3:14 Churning in the Olden Days -- Irish Butter Making
dAIFSjC0lCA 5:00 How did Ireland become a player in the flax and linen industry?
-THsf82PNks 6:32 Reaping the Harvest -- Farming of the Fifties in Ireland
LGHLKBeXodU 2:30 Threshing the Oats at the Glens of Antrim, N. Ireland
f9Kd-WpqI3w 6:02 Traditional Irish Butter Making -- Making Farmhouse Butter in Ireland
9ZPJV4xAZNk 4:43 Traditional Irish Turf Cutting -- Life on the Moss in the 1950's
xXzfYJPmX6g 10:34 Vintage farming in the North of Ireland - Old tractors and machinery planting potatoes & oats
HJX5mjqJdtQ 5:45 Threshing Day in Rural Ireland -- Traditional Irish Farming
ExI9MYTcKaA 6:26 Working on the bog - Cutting the turf in Ireland
0UmKRw2xOco 2:47 Thatching an Irish Cottage
pIZFv2A6OLI 4:16 Threshing the Harvest 1960's Style in Ireland using Vintage Fordson Major Tractors
LU7jliaxiQA 0:56 Mowing the Irish Corn -- Harvesting Oats using a Scythe in Ireland - Old Farming Videos
# 6X68jJYA888 10:21 Robert Dunlop V Phillip McCallen 250cc NW200 **1991** Vintage Road-racing Ireland
# XEt4i0NwyXE 34:27 Joey Dunlop Rare Interview May 1989 -- FULL UNCUT 30 MIN INTERVIEW
h8HKg8lTn3Y 4:49 Glimpse of farming in old Ireland - Cutting the Corn with Scythe & Horse pulled Binder
tj6TVM4nius 3:28 Vintage Farming in Ireland - Ploughing with Horses & Fordson Tractor
TaG8RzrBAFU 3:57 Planting Potatoes 1950's Style Ireland
YK0dfeZ_WVI 4:12 Farming with horses in 1920's Ireland - Planting the grain crop
HxqEK1nUeA4 5:31 Seamus Heaney talks about his youth
4liwp7vlp-U 2:17 Cutting the Corn and Threshing in N. Ireland
CLbcvc5LfZM 2:05 Farming with a vintage Fordson N Tractor - 1950's Ireland
5JyRYMMP2jU 2:14 Sowing Oats with a Fiddle in rural Ireland
4-YYw61jFhE 3:58 Garvie Threshing Mill Co. Kerry Ireland
0yNr5VcEoQw 3:36 Worlds Oldest Tractor - The Ivel - Harvesting Oats in Ireland
WzxCw4dEm8U 4:57 Thatching a Traditional Irish Cottage ✓ ✓
t4VxvlU_29I 2:16 Life on the Farm in Rural Ireland - Videos of Irish Farming Life
OLF8YDz9zxM 6:24 Blacksmith making a Horseshoe & shoeing a horse in Co. Kerry Ireland
Y1OqdELPK_w 2:37 Irish Rural History Video - A Traditional Dresser
Iea9i21c5Ok 0:58 Traditional Potato planting from a seed bag in Ireland
VYuWtpkWppM 1:26 A Threshing Mill arrives on a farm @ Muckross Farms Killarney
rWQcbbNq4GI 1:13 A pair of horses pulling a binder cutting Oats
BDLr_xAisD4 1:50 The history of the Green Glens of Antrim plus scenery of the coast
6zo-UzbRN_0 5:24 The Ferguson Vintage Tractor World Record at Cooley Co. Louth
YJVNjCjPsqo 1:10 Farming with Donkeys - Pulling a brake/ harrow
4ee83nL2qL8 3:37 Rathlin Island Northern Ireland in the 1990s
NRk8RPMjdzU 2:48 Restoration of a Fordson vintage tractor
0CU7FPnwmLA 2:51 Ploughing with donkeys in Ireland
jGvNeHjE_EU 0:28 Irish Pony & Trap
lPxOGGeQhd4 0:57 A horse drawn plough in Ireland
tLvaxSc3p-0 0:59 Ploughing with horses in Ireland
1E9LBnDITaQ 1:19 Ireland's Farming Past - Planting Potatoes by hand
35gRXzJbM6o 1:40 Mowing the corn with a pair of Donkeys
3SXcWwogWWM 1:19 Lifting Stones from fields in Ireland
675hpkgQveM 0:58 Growing Potatoes using Ridges @ Muckross Farms Killarney Ireland
BsEM0RoStX4 1:10 Milking the cow by hand
I-GnLTpc3d0 0:42 Ploughing with a Ford Ferguson 9N
N7iXbgeKUno 1:02 Pedigree Charolais Cattle Breeding
SDSVAv5B74E 0:54 Manure Loading - Irish Farming of yesteryear
SyMTrRbixk0 0:47 Lifting the huts of corn with a T20
daWTSfQjS3w 1:28 Muckross Farms Killarney Ireland
fhRgHfTXt2g 1:46 Thatching an Irish Cottage in the 1980s
gv4voibXb60 0:29 Traditional Irish Horse and Cart
j-DytCZhMDs 4:07 Linen and the Irish Flax Production
obilgOznIjU 1:05 Man powered threshing machine!
udyCDAOfluM 2:00 Memories of farming in rural Ireland
zO2_OQhN9RI 1:06 Lammas Fair with John Watt
-iRoy9I4qNc 1:24 Kerry Hill Ewe
94wQtox1V0w 1:56 Irish Famine Video
H2XLQSaEE4M 0:28 Haymaking Trim Co. Meath
PSY-LRywXLc 1:43 Hand weaving linen on a small loom plus interview with Hermann Bauer
WRJ8tu5jeao 0:29 Hay Mowing Machine
ifufOn2uFyg 0:44 Ireland first Combined Harvester 1934 Ardee
rFTiaE6_Ocg 1:53 The Hiring Fairs of Ireland - Rural Irish History Video
rTaEZKw2gBA 1:50 Irish Potato Famine - The arrival of the potato in Ireland
yEHzA0v4JL4 1:10 Grinding the corn with a stone
5Li98MB8EeU 1:06 Footing turf
9GsGZpjpvts 2:29 Fruit Loaf New
IckLSzLydpM 0:42 Geeze
MG-L651vu4w 0:39 Derry Turf Cutting
kvAroM9qFWQ 1:33 Fordson dexta super late 1950s and 60s
pnnJPFghu6g 1:36 Farming Potatoes in Ireland 1950s style
DgdrmIj4HG8 2:09 Baking bread in an Oven Pot
2vLVCFZbxf4 0:37 1926 morris cowley
5rY6sZpr6UM 1:05 1964 Fordson Super Major with Ransom plough
ixQive4hZCg 0:34 2 drill elavator digger
rubvGxFhM7k 0:55 1840s Ireland
XRX3OyAjObI 1:48 Potato blight in Ireland - Spraying the spuds to stop the blight
Wq_u9xWc_BE 2:38 The Singing Farmer sings a Tribute to Joey Dunlop in his bar
Mu_H_BOoX1w 4:36 Flax Mill - Scutching and Linen Production
DFnscJkI-Kc 1:58 Farm life in rural Ireland
cDU2OlHpJaY 2:48 Clydesdale Horse Show
eTotvyFn01E 4:45 Harvesting Potatoes - Digging and gathering the spuds
_iKllHSC978 4:52 Traditional Irish Cooking - Making Champ
Nm5OdDXdQTA 2:05 Growing Flax and Irish Linen
rJ1UegJjDhI 1:23 Memories of Rural Ireland
yX-SPFhYbmY 1:38 Sheep Dog rounding up the Sheep ✔
M-8N9VXNZmw 3:39 Thatching an Irish Cottage
dEI0hXgiVDI 1:11 Machine cutting Turf -- Harvesting Peat the modern way!
UY6VYo_rPxg 1:52 Three Heavy Horses Pull a Reaper and Binder ✔
GQVSuehrf_0 1:17 Haymaking in Ireland - Farming in old rural Ireland
zkmjjA6py9s 4:42 Scutching flax at a Flaxmill in Ireland - Making Irish Linen
qjD4887wkvs 3:41 How to make Irish Potato Bread
8VR3PWOmokM 1:25 Ferguson Farm Systems The Bell Dropper
MtxrFEN-_88 3:42 Story of Potato farming in Ireland through the last century.
hZQZyzV5Q0o 2:36 Arrival of the potato blight in Ireland- Irish Famine
Uk6fQVQzW5g 3:56 FolkyBilly RocknRoll by Willie Drennan -- Ulster Scots Folk Music meets Rock & Roll
DqBg-80NIRk 5:00 Traditional farming in Ireland with Horses
LWgZt8YNts8 4:30 Potato Farming -- Harvesting Potatoes
PpoTNWOKWtY 2:59 Making Irish Soda Bread - How to make Soda Bread
9vakGkbPw80 4:14 An Irish Harvest Day
# qqlGUMDKu2w 6:23 Joey v Robert -Clash of the Dunlops at NW200 1991 Honda v Norton
# z8_HNCwaeoU 8:52 Steve Hislop wins the Superbike Race @ North West 200 NW200 1989
# cmooXbKpVWE 5:19 Robert Dunlop v Joey Dunlop on 125cc @ NW200 1990
# mzbwRMggS50 9:29 Robert Dunlop v Carl Fogarty on Superbikes @ NW200 plus Interview
MdCp44an3d8 6:50 Threshing Corn in Ireland 1950s style Farming Video
BA9tgnbEMkI 12:01 Harvesting Corn with Scythes and Vintage Tractors in Ireland - the old fashioned way!
# RuktXUoaKOc 9:41 Pedigree Cattle Breeding in Ireland
# 6_pGTEegcCw 6:23 Fordson, Ferguson and Massey Tractors working the land in Ireland
# 0sSpEng64YA 6:55 Charles Thomson Founding Fathers Irish American & Ulster Scot
# cAy8nrWxMK8 12:45 Zuruck in die Zukunft
# yTDKtdNlTfs 9:32 Berryman Murders Garvagh N.Ireland by John Thompson Videos
OUIOo2xIcLA 2:47 Willy Drennan The Lagonda
-hWRxN4ryE4 20:16 Leinen aus Irland/Linen from Ireland
iXd9YVOHRyA 3:39 David McClarty
6D5mNIiZQHs 7:13 Rare breeds of cattle in Ireland
XVA96MQxcNs 2:44 Duck and Hens on an Irish Farm
4_nPVREmJzs 7:36 Bee Keeping Making Honey
MoqWoDiYQg4 1:29 Farming Potatoes in Ireland as was done in the 1950'
IXAq7WqVA9A 0:55 Ploughing with Horses Farming the old way in Ireland
zL_llRUxbz4 1:28 Potatoes being planted in Ireland the old way!
Om6dvTQSEms 1:42 Potato gathering in Ireland using tractor and machines
upfWS4iWo5k 2:00 Farming potatoes in Ireland using a bell dropper
# qq9ncem-9eM 1:53 Ploughing a field in Ireland using a Ford Ferguson Tractor
IXoSpLsGMQs 4:28 LINT AND LINEN scuttching the flax and making linen
T0RKzo0agdc 2:56 LINT AND LINEN putting the flax in a lint dam
SDCfZUIB0eY 0:47 LINT AND LINEN pullinh flax by hand
GgbhUMKxPq4 3:22 Irish linen being weaved from flax farmed in Ireland
9eYaLek9hKg 3:55 Sowing of Flax Seed in the Farming of Irish Linen
b7wPUrOWqBY 0:43 Trim in County Meath show off thir Haying making festival each June
# LrctgXIWP_o 4:58 Irish Farming -- Ferguson and Fordson Vintage Tractors
# lTaBMsbCF90 10:28 Robert Dunlop winning Nortwest 200 Superbike race 1990
# dxivCOGpJFo 1:50 Fly fishing for salmon on river Bann
# c54vPb7U8VQ 1:21 Salmon fishing on carnroe
# z7fF8DsWe14 2:20 Salmon fishing in ireland
# CpKnEmSBpyI 0:48 Lough Neagh eels
# 4EY-YbFqbn8 5:49 brown trout fishery Ireland
# wsTvK7w2wtY 4:22 How to tie a trout fly
# -Gk0S7Rp66s 3:43 fly fishing salmon caught!
# QR5eW0C6xpA 3:31 Joey Dunlop Rare Interview May 1989
ufwvFOXUCnc 7:25 Peat cutting and Turf cutting in Ireland
j0yf4bNZ-fY 5:54 Hiring fairs in Ireland
WHVwHgNnkQo 2:34 Poor Irish Dwelling in the west of Ireland in the 19th Century - Irish History
Yw1eXl9lh3o 8:13 Irish Flax Farming - Growing Flax and Retting it in the Dam
v8bQGmUaTzY 5:53 Irish Linen and the Flax Harvest - Lint & Linen Ireland
vkGuMvl26-k 7:15 Potato Famine in Ireland
lIn4MTJBOmY 8:37 Farming in Ireland
SS7n-l7a7xk 8:16 The North Coast of Ireland
# uGzKQ8CIyg8 4:18 Wildfowling and hunting in Ireland - Fox and Rabbit shooting
# YY6e3yc9rHw 10:00 Fox Hunting Rabbit Shooting and wildfowling

# Bennett Brook Railway
RovfLuEgZus 17:28 Vintage transport film - Look at Life - High, Wide and Faster - 1963
f0h75MBhRTw 6:34 Bennett Brook Railway - 'Thomas Day' - 1996
# Fxq0aqDanQY 8:54 Vintage railway film - Look at Life - Draw the Fires - 1963
# FVjakVLMngQ 2:18 Bennett Brook Railway - Steam and diesel powered top and tail train
SjUidv4IkNI 18:02 Bennett Brook Railway - Enthusiasts Day - 1996
# RlMZt19J5Tc 5:09 Vintage railway film - Scrapping the old iron horses - British Pathe - 1961
xtB_03QUFs0 9:00 Vintage Transport film - Look at Life - Over and Under - 1960
8JppUlvDIWg 21:35 Bennett Brook Railway - Enthusiasts Day - 1995
# KwG_PdAmDqY 11:27 Transperth train cab view - Butler & Clarkson, Joondalup line - Then & now split screen - 2018/'23
9fxVjryvRN0 9:57 Vintage railway film - Look at life - Letting off steam - 1959
z9Iy9kiapPc 16:45 Bennett Brook Railway - Enthusiasts day - October 1994
VMjomS52YlY 31:34 Vintage railway film - The last train to Woodford Halse - MACE (Media Archive for Central England)
# Du8bdw0Jkkw 1:23 Transperth Trains cab view - Express thru Murdoch station & crossing Mt Henry bridge - Winter 2019
jksbjTu9678 7:15 Hotham Valley Railway - Last day of Steam Ranger service for the 2023 steam season.
ROK6fT6UBZE 26:02 Steam on the Settle and Carlisle
GqUHplnT6rk 28:06 Vintage railway footage - Mildenhall and Scottish Express
# HrBb-SACcZs 42:53 The Ghan is going - 1980
YwYGPicccuc 1:00:14 Vintage railway footage - Decades of steam - 1940s
DT6k-r5zgkY 1:56 Indian Pacific in the Avon Valley
WeXr6IpfBLo 1:13:26 Transport film - Crewe works; The inside story - 1996
# vi6C10BEVpw 2:53 Bennett Brook Railway - Steam and diesel operations
GBamHmEzQfI 1:00:16 Vintage railway footage - Decades of steam - 1930s
# IDh8JVSnqtg 0:31 Vintage railway film clip - The Wrecker (silent film) - 1929
pfZKGPSH0Ac 12:21 Vintage railway film - The way we live; A railwaymens film Darlington - Tyne Tees TV - 1960
20VEUn6D_w0 5:07 Bennett Brook Railway - Ashley and Friends day - May 2015 compilation
Y1nqCPJ6FsQ 6:49 Bennett Brook Railway - Ashley and Friends day, September 10th 2023
A2NZU3S-0iM 25:59 Vintage railway film - Lets Imagine; A branch line railway - Sir John Betjeman - 1963
c3CdukTdWxE 15:13 Vintage transport film - Moving Millions - 1947
yLwq44moaYY 3:18 Vintage railway film - Britain can make it - 1946
sEQBnQGGzXc 1:29 Bennett Brook Railway - 'Betty Thompson' - New whistle - August 2023
UwQSx6RmHXE 50:41 Transport film - Trouble on the line - Equinox - 1990
AtJtO8TYTtQ 3:04 Avon valley trains - Standard and narrow gauge - See video description for details - August 2023
EwaV5W0gDHg 51:03 Transport Film - Running to Time - Equinox - 1988
h3jY6AjX-SQ 10:04 Vintage railway footage - Banking the Lickey - 1958
8VcubT02PYk 20:54 Vintage railway footage - The Age of Steam - Bromsgrove
# 1FH8SvgM7NY 12:27 Sunday Night - Stopped in their tracks - 2012
FpNd-X_ct7Y 9:42 Vintage railway film - Power to order - 1941
uHjgn5g5_d8 6:15 Bennett Brook Railway - May 2015
# _McVL2STZi8 14:14 Vintage railway film - Emergency Coupling (Class 253/4) - British Transport Films - 1980
022xeVsjmnk 13:24 The Derwent Line - Australian Broadcasting Corporation - 1989
rNdBmV7uFs8 45:20 The Flying Scotsman down under - 1989
bK9DEyWCZyQ 1:05 Bennett Brook Railway - Mussel Pool station departure - Winter 2023
# 32DAbocXvnY 33:16 Transperth train drivers view - Perth to Claremont and return - Real time
# R41fv6ZEPgU 6:51 Transperth train drivers cab view - Perth to Claremont and return - high speed
# z6gNlNFjVzM 8:04 Transperth train drivers view - New Bayswater trackwork and platform
KzGo3DJJUys 3:05 Bennett Brook Railway - Ashley and Friends Day - 21st May 2023
# c4Bx4LAhL74 0:46 Bennett Brook Railway - First train service over new concrete level crossing - Planet 7 - 20/5/23
Un8hBrJHrYg 58:31 Great Australian Railway Journeys - Newcastle to Brisbane - 2019
OenqJI9rlfg 58:42 Great Australian Railway Journeys - Kuranda to Townsville - 2019
U7RW72WeSmc 58:51 Great Australian Railway Journeys - Canberra to Melbourne - 2019
YvZfEV59L1A 59:19 Great Australian Railway Journeys - Adelaide to Perth - 2019
lqRZYeOsMVE 58:56 Great Australian Railway Journeys - Sydney to Broken Hill - 2019
yRl4lwvVfg4 58:53 Great Australian Railway Journeys - Port Augusta to Darwin - 2019
JIKesg5OHN8 52:03 Rail adventures across Australia - Tasmania - 1999
F1exmPs1g5A 52:17 Rail adventures across Australia - Victoria - 1999
my1zXcZJfV4 52:08 Rail adventures across Australia - Western Australia - 1999
p6xNmpCskLs 52:26 Rail adventures across Australia - South Australia - 1999
8iMns6sF-eo 52:02 Rail adventures across Australia - New South Wales - 1999
# le14k2nUuC0 9:00 Transperth train drivers cab view - B series - Perth to High Wycombe and return - High speed
z0ppLLO62-s 52:03 Rail adventures across Australia - Queensland - 1999
BTFkPi9BtvQ 1:00:49 Pure Steam Locomotion - Featuring 3801, R761 and Flying Scotsman
iOPCmf4nzlA 58:20 The longest thousand miles - Flying Scotsman and Pendennis Castle in Western Australia - 1992
V9XasDqILTk 50:53 Ted Egans railways of yesteryear - 1991
# 7zFLQCIPgak 45:01 Transperth train drivers cab view - B series - Perth to High Wycombe and return
y5CnbQCEhyI 28:03 Track record - Tethered to the world - 1991
DVSGm2rshh4 28:02 Track record - Missing links - 1991
# vck8QFcY_mE 28:05 Track record - In a spirit of progress - 1991
tgWD-5wn_eg 28:23 Track record - Broken journey - 1991
# DB1gPPc_WxI 43:55 Rails around Australia - Episode 5 - 1987
# dnQZvsYiRZk 43:53 Rails around Australia - Episode 4 - The desert trains - 1987
Ecm2h8f-Q-I 29:02 Flying Scotsman - The return of Flying Scotsman - BBC Four - 2016
# gSQIU1PnXjQ 41:46 Rails around Australia - Episode 3 - The trains that take it easy - 1987
# DMkpWL4qc8Q 43:32 Rails around Australia - Episode 2 - Last of a line - 1987
# 55ohZdkHGJI 43:24 Rails around Australia - Episode 1 - Destination Alice - 1987
p_czvQgxAFc 1:28:28 Steam trains of Australia - 1985
yOjhF_KV2Wc 1:18 Bennett Brook Railway - Ashley & Rosalie departing Whiteman Village Junction - Ashley Day, Sept '22
XFaFWhL2lNk 3:07 Bennett Brook Railway - Steam and diesel hauled services near Zamia station
YuFGaSa3_K8 1:27 Bennett Brook Railway - Ashley, Planet 7 & BT1 - Ashley & Friends Day, September 2022
PZpRuTQ4ick 29:31 Requiem for a railway - Off the rails - 1986
1W9MNjoZAIk 9:58 Bennett Brook Railway - Ashley & Friends Day - September 11, 2022
C3ys9xtjzCg 29:38 Requiem for a railway: A job for life - 1985
zVmbsRZmLg8 29:07 Requiem for a railway - Of coppersmiths and kings - 1985
sz7nv5zsOX8 25:34 Night mail 2 - 1986
dy0RuguP8EY 4:25 Vintage railway film - Signpost - 1955
-mz5P4Fddxg 42:52 The orange line. Railway to Mandurah - 2007
lfZJnDYI1pw 38:08 Vintage railway film - North British - 1949
4b99Eobi27w 2:14 Bennett Brook Railway - First steam train service through new Zamia passing loop - August 2022
ziRiU1UUWn0 9:20 Vintage railway film - Gang warily - Southern Railway - 1944
rZ9aEkcTJAY 2:39 Bennett Brook Railway and Perth Electric Tramway Society operations at Whiteman Village Junction
Y3HAAiKvfOI 20:25 Vintage railway film - Decontamination and repairs - Southern Railway - 1942
XuP6zsrqVZ0 14:26 Vintage railway film - Can we help you? - LNER
praXvXxf1dM 13:57 British transport film - Robbie - 1986 version
Kf-XqNbiqQQ 53:16 British Rail - Signalling - 1989
# NlcAKUChyII 35:44 Vintage railway film - Railway bridge across the Thames - 1968
# EXFmxgpAsbs 20:17 Vintage transport film - All that mighty heart - 1963
# ezRP1h6x2GE 9:57 Vintage training film - Manhandling - 1962
WkxRw4dbVR8 2:45 Bennett Brook Railway - Perry 0-4-2 tank engine 'Betty Thompson' drone footage with train audio
TI0HD1Tdpv4 10:58 Vintage railway film - The elephant will never forget - 1953
AA9BmsHhlM8 16:46 Vintage railway film - The stone carriers - 1982
NS06ECJQN88 4:34 Bennett Brook Railway - First steam train service of the 2022 steam season
PPJdldNc5AY 7:14 Vintage railway safety film - Old Sam the signalman - 1982
l152EmsCg80 4:31 Vintage railway film - InterCity 1250 - 1982
F-F8sl9PP9M 12:15 Vintage railway film - On track for the eighties; Rail report 13 - 1980
8rnho6Uz_3E 6:18 Vintage railway film - Centenary express - 1980
l3Zs3sWxjWw 16:58 Vintage railway film - Current events on the Midland - 1980
# Ms1ftBcaMKQ 12:36 Vintage railway safety film - Robbie - 1979
# LAv2fAm8qeI 11:04 Vintage railway film - Power to stop - 1979
# DpvIFBmHzKE 24:44 Vintage railway film - A new age for railways - 1979
# xWI0wtLgxWE 6:40 Vintage railway film - Overture one two five - 1978
# jGbPz-gQHyg 6:14 Vintage railway film - Discover Britain by train - 1978
# AF-dbb1IkjQ 11:40 Vintage railway film - Discovering railways - 1977
# Ddb9YgKz5FA 23:26 Vintage railway film - Inter City 125 - 1976
# LVgDgcM9euk 12:49 Vintage railway film - Rail 150 - 1975
8V80znOYlW4 16:03 Vintage railway film - Operation London Bridge - 1975
y2IknG4Cbxg 14:31 Bennett Brook Railway from the air - Check description for video notes
K3U90tuSXX8 13:42 Vintage transport film - Golden Arrow - 1949
UvoKTj_PGxk 18:49 Vintage LMS railway film - On the shed - 1930s
ZSn7ptQvDLQ 39:34 Vintage railway film - Giants of steam - 1963
# WSpMpPfDo5g 1:42 Transperth cab view - New Cockburn Central permanent way alignment
# TKWuRd74uxk 42:36 Transperth train drivers view - Perth to Cockburn Central return
# WgYtnQjVXEE 9:23 Transperth train drivers view - Perth to Cockburn Central return - high speed
gWKTKeglnPg 28:53 Vintage railway film - Points and aspects - 1974
__7pRliRQ9I 17:55 Vintage BTF film - Britannia; A bridge - 1973
VkeCLQOOIyQ 11:54 Vintage railway film - LMS London to Manchester Express - The Engine Driver - 1948
# DXLN1gJD4QI 18:10 Vintage railway film - Rail Report 12; This year by rail - 1972
# RA8LQHF6Gv0 9:48 Vintage railway film - Journey InterCity - 1972
npcDeNp7d-8 14:02 Vintage railway and travel film - North to Wales - 1956
# CLPwjAuc96I 16:38 Vintage transport and tourism film - Down to Sussex - 1965
# 8sOr0-DOPSs 9:28 Vintage railway film - Plumb Loco - 1971
# RfbUWZsE2S8 16:42 Vintage railway film - Report on modernisation no. 11: Railways conserve the environment - 1970
# cvDaysV6FnE 2:47 Vintage railway film - Rush Hour - 1970
# V9BdMcXXqmA 58:05 Vintage railway film - First of the Thirteen - 1970
# UyHMKNFnqEo 15:15 Vintage railway film - Rail report nine - Top levels of transport - 1969
# 4Ee7nK41P00 7:49 Vintage railway film - Motorsport tries Motorail - 1969
# 5AbK_zqauzU 23:29 Vintage railway film - The Pain Train - 1969
# FKkQ1XjSYA4 21:42 Vintage railway film - Second Nature - 1967
# fIm3iYZuxHo 10:05 Vintage railway film - Speedrail to the south - 1967
PxFcWT7oNiU 1:39:38 Vintage railway films - The Victoria line reports - 1960s
UmrqkXEycTo 21:06 Vintage railway film - The driving force - 1966
TtBml4y2Ccs 28:59 Vintage railroad film - This is my railroad - 1954
iJx6MdesrY4 21:18 Vintage railway film - Freight and a city - 1966
BRJbxb0DMhI 25:59 Vintage railway film - Under the wires - 1965
v93cRhuDBeE 22:57 Vintage railroad film - Last of the Giants - 1959
gCfDQvrBGRw 30:02 Vintage railway film - Forward to First Principles - 1966
zHz2LhZ8GBQ 15:27 Vintage railroad safety film - The Right Track - 1967
jTkf5dL1AwU 24:37 Vintage railway film - The signal engineers - 1962
ZmTWybmuASY 24:06 Vintage railroad film - Norfolk & Western - The modern coal burning steam locomotive - 1942
8kVUqqsSN54 10:58 Vintage LMS railway film - Measured shovel packing - 1947
3g4sfsxq2o8 39:33 Vintage railroad film - A great railroad at work; New York, New Haven and Hartford RR - 1942
hxQEChA499I 9:15 Vintage railway film - People like us - 1962
8BP23fxjM14 18:07 Vintage railroad film - The freight goes through - 1952
K5SFegTVoNo 8:58 Vintage railway film - The third Sam - 1962
3k-18i4n1tg 5:02 Vintage railway film - Modelling for the future - 1961
fHHluaETDaw 2:39 Vintage railroad film - The end of the 'El' - 1950's
P11wYc51SbA 10:35 Vintage railroad film - 3rd Ave El - 1950s
koT6JY_rDi0 22:56 Vintage railway film - Reshaping Britains railways - 1963
l-sfeHhjpdc 23:06 Vintage railroad film - Loaded for war - AT&SF - 1940s
nklClrz6wHI 19:34 Vintage railway film - The North Eastern goes forward - 1962
pByEcGQ-ntM 12:57 Vintage railroad film - Opening a new frontier - 1955
DF8ETt70CCQ 18:45 Vintage railway film - Spick and Span - 1962
K_IH9I9JRJU 2:36 Avon Valley trains
Ql6gXTUqYWE 13:56 Vintage railroad film - Wheels of steel - 1953
K4YPbtwffWs 9:08 Vintage railway film - Modernisation on the Southern Region - 1958
XHdyDG5dT7Y 26:59 Vintage railroad film - Clear track ahead - 1946
ZyLncXp_7yo 23:54 Vintage transport film - Link Span - 1956
_479BctLYvc 1:05 Indian Pacific - March 2021
hsbIiZ4lCo8 20:03 Vintage railway film - This is York- 1953
MJeW_bzfMZM 6:58 Vintage railway film - Shunter Blacks night off - 1941
HIWWBujKwa4 1:53 Bennett Brook Railway - Ballast regulator test run
pX25dIBPvBU 19:23 Vintage railroad film - Lifeline of the nation - 1945
YIHVwpBylcw 11:41 Vintage railway film - A trip on the Met - 1910
E1vZIYCTx3E 18:09 Vintage railway film - Under night streets - 1958
Fki0XzgSct4 14:02 Vintage Southern Railway film - Ladies only - 1943
2drdydeY_Z0 3:41 Vintage railway film - A quaint little railway; The Leek and Manifold light railway - 1930
7L9CvaMYet4 15:27 Vintage LMS railway film - Carrying the load - 1946
0hV0obFTcN8 4:23 Bennett Brook Railway - Whiteman Park Sunday Times Show Day - 1991
FL9DxHPXzSw 19:45 Vintage railway film - Second report on modernisation - 1961
plDBlQLt0EA 15:14 Vintage LMS railway film - St Pancras Junction Relaying - 1947
rUg2fC9Iz88 20:20 Vintage railway film - Report on modernisation - 1959
p7-2_WeceAA 25:46 Vintage railroad film - A railroad at work - 1946
P4nqWE26yqk 12:28 Vintage transport film - Measured for transport - 1962
nvc9XgFV3Go 10:53 Vintage railroad film - Troop Train - 1943
WtJJm7rxkT0 5:30 Vintage Australian railway film - On time - 1953
bT6oGsTqzN8 13:54 Vintage Australian railway film - Ghan to Alice - 1978
R1B5d8rt8xw 25:05 Vintage Australian railway film - The rail way - 1979
nMActDF-hBk 33:58 Vintage railway film - Single line working - 1957
53QM__dT2TI 26:27 Vintage railroad film - At this moment - 1954
9U-d62HbEUA 1:21 Bennett Brook Railway - Perry tank engine 0-4-2T BT1 'Betty Thompson' - winter running 2019
1jXR3NOnI5g 6:21 Vintage railway film - A visit to Crewe works - 1913
gpQxDSskLxQ 8:52 Vintage railway film - The Coronation Scot - LMS - 1937
JXl01NdMvzk 10:18 Vintage Australian railway film - Shades of Puffing Billy - 1967
MGszU8cA8_I 16:20 Vintage railway film - Making Tracks - 1956
gF0vLYTuSAk 1:53 Bennett Brook Railway - ex Isis sugar mill Fowler 'Rosalie' - retiring the 1954 GM diesel engine
68hs8dA9VSw 2:32 All Manner of Trains - Western Australian locations - Then and now - 1962 to 2020
zKs5yUebT3M 35:48 Vintage Australian railway film - All manner of trains - 1962
# oaaC5ct0yAQ 14:42 Vintage railroad film - General Motors motive power - 1938
9nODhuPdrjw 19:28 Vintage railway film - British Locomotives - 1959
KlZanA_vqaQ 17:05 Vintage railway film - The diesel train driver, part 4 - Operational requirements - 1959
Y-wm2TY4VXU 35:52 Vintage railway film - The diesel train driver, part 3 - Dealing with faults - 1959
6LHZOJvLCbE 18:32 Vintage railway film - The diesel train driver, part 2 - Driving the train - 1959
oO3ssfi2LV4 7:11 Vintage railway film - The diesel train driver, part 1 - An introduction to the diesel train - 1959
SFM_f-IC1cA 3:57 Bennett Brook Railway - West Australian Rail Rover excerpt - 1990
yhin8YCiF_U 10:31 Bennett Brook Railway members day - September 2020
BHdhsMAubfk 18:26 Vintage railway film - Mishap - 1958
flCdYGTO8KY 1:43 Vintage railway film - Romney, Hythe & Dymchurch Railway - 1940s
nynPVfEVnog 27:57 Vintage railway film - Groundwork for progress - 1959
ojX9ZW6vGWw 2:02 Bennett Brook Railway - Feature on Nuts and Bolts show - 2001
NM1-O2UGj7o 0:55 Bennett Brook Railway - Excerpt from 'Silent Legacy' ABC TV program - 1998
cUiQ3VcEAY8 13:43 Vintage railway film - Mainline diesel - LMS 10000 - 1948
77CPyvhl4rc 0:49 Bennett Brook Railway channel trailer
XsRAaPDPf1I 5:25 Vintage train film - Let's go to Birmingham - 1962
pLpkzJ7GGAc 1:19 Loaded nickel and empty sulfur train - Brigadoon
T41BHRQmHZo 10:18 Vintage railway film - Diesel trainride - 1959
npZ6Y7v8CyY 9:50 Vintage railway film - Service for Southend - 1957
ygl1yZE_bBM 19:33 Vintage railway film - Elizabethan express - 1954
QquUikuHf9M 25:32 Vintage railway film - Work in progress - 1951
Da5IuL9gBGc 20:12 A steam train passes - 1974
EttvbfxIY8Y 20:31 Vintage railway film - Day to day track maintenance, part 2 - Switches and crossings - 1952
RjpYcYgaOCI 29:28 Vintage railway film - Day to day track maintenance, part 1 - Plain line - 1952
-XQhSTg3iM4 6:02 Vintage railway film - 'Newspaper Train' - 1942
ftEQmoVtR4E 20:58 Vintage British Railways film - 'A place in the team' - 1953
bTdxq-tRMiU 35:42 Vintage railroad safety film - Why risk your life? - Great Northern Railway Co. - 1947
nCb0ayRHTCo 19:01 Portrait of an engineer - 1954
jZLyB-_x8gA 8:23 A Future on Rail - 1957
# zfF4-50_CJY 20:20 Pay Day - The Santa Fe Railroad - 1950s
# r7RmeZ7_qj8 24:47 Transperth train drivers view - Joondalup line express train from Clarkson to Perth
# wZyBbvDwMfI 5:14 Transperth train drivers view - Joondalup line express train from Clarkson to Perth - high speed
tmWZMRSmDQM 39:33 No. 6207, A Study in Steel - Princess Royal Class - vintage LMS film - 1951
hmgliO-bCi4 53:09 Transperth train driver cab view - B series - Perth/Midland/Perth - peak hour lockdown service.
XM4U7SWtU1k 10:39 Transperth train driver cab view - B series - peak hour lockdown Midland service - high speed
LzoYrD8EejQ 1:12:50 Flying Scotsman and Pendennis Castle - Rail tours in Western Australia, 1989
nZ3AN-kd66g 16:56 LMS - General Repair - 1938 - LMS Railway film
WDb9tVeE3W0 31:00 Bennett Brook Railway train drivers view - action cam
Irn2mVjZjro 18:46 New York Central - The Steam Locomotive
# yexKawonq70 17:25 Transperth train drivers view - Perth Stadium to the Joondalup line - Express
# F7F2UEGbhKI 4:02 Transperth train drivers view - Perth Stadium to the Joondalup line, express - high speed
Uia2jH9nRb8 13:16 Safety On The Track - A London Transport safety film - 1950
T_0LzMzCnBs 1:42 Bennett Brook Railway termite train
Gcs7Wx6P9XA 20:24 Bennett Brook Railway termite train - 360 video - Bushland Loop - Volume warning!
LC1BEc04i-0 25:20 Wash and brush up - British Transport Films - British Rail steam loco maintenance - 1950s
o2IsS1ZNSJU 4:53 Bennett Brook Railway - 360 video - Mussel Pool to Whiteman Village Junction - Volume warning!
uyUkKbw3tKk 21:43 Vintage railway film - The Railwaymen - 1946
fLFfqjB3UAM 1:16 Worlds biggest triple expansion steam engine - Kempton Steam Museum
D8Ee5nflbec 9:32 Vintage rail film - Engine Shed - LMS 1938
e8jBbkOvPfw 11:54 A trip on the Vale of Rheidol railway
UH-a_fU5C7E 23:50 Bennett Brook Railway promotional video 2
nd9j79c5S2k 1:53 Trans Australian/Westland trip, 1961 - watch until the end for rare footage of Swan View tunnel
# 1BE0h-ul3xM 1:31:18 Transperth B series drivers view - Mandurah to Butler
# d4qK6wsfyYw 18:26 Transperth B series train drivers view - Mandurah to Butler - high speed
v1P6DzIJM_0 8:46 Trains in southwest WA and Perth - early 1970s - See video description for timestamps
FzP0vO7giJk 0:39 Transwa Prospector through Herne Hill
hexXG5FwlfQ 0:43 Bennett Brook Railway - Ashley & Friends Day, Sep 2019 - Ruston & Betty Thompson double heading
acRZB-tNUZg 1:36 Bennett Brook Railway - Ashley & Friends Day, Sep 2019 - Betty Thompson and Ruston diesel shunter
# qqdre4MQ8WA 22:54 Transperth train driver cab view - Nowergup depot north departure and arrival
# oSy4FEs-6pE 4:48 Transperth train driver cab view - Nowergup depot north departure and arrival - high speed
pPCjkJYEKFM 13:56 Mail Rail - The London Post Office Railway - Londons underground mail delivery railway
# SU5A-3j1m0A 17:19 Transperth train drivers view - Leederville shunt to Claisebrook depot
# cAcNcFnE_4g 3:52 Transperth train drivers view - Leederville shunt to Claisebrook depot - high speed
53-x1ypuDH8 5:12 Bennett Brook Railway NG15 123 footage - 1991
-Emzn0pqLso 10:09 Bennett Brook Railway promotional video - 1999
5qIhSmZ4RAY 2:22 ADG railcar cabride - Perth to Midland - 1975 - Check description & pinned comment for timestamps
OE0eJfC2YGs 3:53 Albany Progress - 1976 - Check description and pinned comment for video notes and timestamps
BA5bV8fx5Zw 3:42 Bennett Brook Railway 'Getaway' travel program segment - 1995
V_Kl1C8MkFA 3:28 Fremantle to Guildford line centenary vintage train-for notes see video description & pinned comment
# YjJKrEcYuV0 5:03 Transperth train drivers view - Claisebrook depot departure.
# KGbMJb57AcI 1:15 Transperth train drivers view - Claisebrook depot departure - high speed
54co4TxGGc8 1:43 Welsh Highland Railway garratts arriving at Rhyd Ddu.
fz0kYIQgL-g 2:19 Hotham Valley Railway double header excursion train to Newdegate - 1994
FdD82St8pn8 44:21 Last train to Pemberton - 1993
# kEdGaIIlelI 30:20 Transperth drivers view - Perth to Fremantle all stops, including showgrounds
# F_m3hcqrusk 6:14 Transperth drivers view - Perth to Fremantle all stops including Showgrounds - high speed
v2URE8He4i4 8:40 Hotham Valley Railway Forest Train - G 123 - 1994
l45Lb4oFamI 2:44 Bennett Brook Railway - Freudenstein 0-4-0WT b/n 217 of 1905 undergoing tests, 1989.
# _8CEfIGtMto 16:48 Transperth drivers view - Joondalup line to Perth Stadium
# BylTgmtTgtI 2:03 Transperth drivers view - Joondalup line to Perth Stadium - high speed
# AkT6LBfj7Uo 21:49 Transperth drivers view - Cockburn Central to Perth Underground
# HpqWexy4gco 2:32 Transperth drivers view - Cockburn Central to Perth Underground - high speed
ssTFRlq7lo8 7:09 Bennett Brook Railway Ashley and Friends Day, September 2019
# wtxRQucEid8 22:35 Transperth drivers view - Whitfords to Perth - real time
# fO_S6Y006ug 2:36 Transperth drivers view - Whitords to Perth - high speed
0SnQKylEvv0 44:22 Hotham Valley Railway drivers view - Isandra to Dwellingup
j10-vl8VtZk 4:47 Hotham Valley Railway drivers view - Isandra to Dwellingup - high speed
wLUJ2E-J3ZY 1:57 Bennett Brook Railway - Seven News Perth promo - 1986
MPvKZ6Z93-Q 0:42 Level crossing near miss - Bennett Brook Railway - please exercise caution at level crossings!
# 6yqt2lSp86E 17:53 Drivers view Transperth B series - Nowergup yard departure and arrival - real time
# kFmnXyXcqpQ 2:33 Drivers view Transperth B series - Nowergup yard departure and arrival - high speed
8F4rzNTsJGI 1:12 Bennett Brook Railway - Mallet loco feature, Channel 7, 1985 - See vid description for notes
89WOMeWRxTw 2:36 Rock Island Line - Bennett Brook Railway - featuring Fat Cat!
Rso9GMEmlOY 6:27 Bennett Brook Railway Ashley & Friends Day, May 2019
YjZoAyd6Yv8 0:35 Castledare Steam Fest 2019
2Z0kQ9TezrE 5:11 Bennett Brook Railway featured on Driving Force program, 1990. Driving Force Down Under!
# FdXpa1mtKso 10:33 Transperth drivers view - express train on the Mandurah line to Perth Underground - re upload
# u45BXgXDhb0 1:33:03 Drivers view Transperth B series Butler to Mandurah - real time - re upload - no music
# _5gASyFffaE 15:25 Transperth cab view - B series through Perth Underground & Elizabeth Quay stations - re upload
# aoscHVzgvg8 7:29 Transperth drivers cab view A series Armadale shunt move and Australind cross - re upload - no music
KIHVyTjtMDQ 4:54 Drivers view from footplate of 'Planet' no. 7 diesel locomotive - high speed
dGs2p2CVPho 42:30 Drivers view from the footplate of Planet no. 7 diesel locomotive
# TCNlhnnIH1E 1:11:06 Drivers view Transperth A series Perth to Armadale and return - C pattern - real time
# awBNhDxpOWo 7:21 Drivers view Transperth A series Perth to Armadale and return - C pattern - high speed
PeEBHk6Ex78 13:35 WAGR steam locomotive audio - see video description and pinned comment for notes
JISCs_b4d48 3:43 Whiteman Park Transport Heritage groups featured on Destination WA tourism TV show
Ln2qKbggjEU 3:03 The Bennett Brook Railway on the Perth edition of the Today morning show
# c9YaKc0rMys 46:31 Drivers view Transperth A series railcar - Fremantle to Midland A and B patterns - real time
# KNoItsmml7U 5:02 Drivers view Transperth A series railcar - Fremantle to Midland A and B patterns - high speed
v4IICDtXWAg 2:25 Perth Electric Tramway Society (PETS) - High speed motorman view - Car W7 1017
kIhHIk7OWMo 22:01 Perth Electric Tramway Society (PETS) - Motorman view - Car W7 1017
# Dg3T_A_bwjg 46:00 Transperth A series drivers view Perth to Thornlie & return - real time
# wXEDmUhNCP4 4:55 Transperth A series trip to Thornlie & return - high speed
# VpWz5Ln2ews 24:38 Transperth A series cab view Perth to Showgrounds - Perth Royal Show week - Real time
# hMnlcS-xHV4 2:53 Transperth A series cab view Perth to Showgrounds - Perth Royal Show week - High speed
# otnqTBM0pac 55:04 Transperth train A series railcar cab view Midland to Fremantle - Real time
# pgxkonSanks 5:51 Transperth train A series railcar cab view Midland to Fremantle - High speed
7Nbl2IZUhV8 12:04 Bennett Brook Railway Ashley & Friends Day, September 2018
tWhNs3vR4t0 5:45 Coaling and oiling a steam loco - excerpt from from 'The Railwaymen' - 1946
# NPM7b-lgT5w 1:32:46 Transperth B series cab view Butler to Mandurah - real time
# 3y6_dBjlrOM 9:36 Transperth cab view Butler to Mandurah - High speed
ZUeNN932V88 1:54 Bennett Brook Railway track gang
f69JLrv5Wjo 5:44 Bennett Brook Railway track maintenance
EXVRtLVfOWg 0:40 Train vs kangaroos
# 2__dAMm7pVs 3:26 Bennett Brook Railway full trip in under 3 1/2 minutes!
KdGgQgxu0qA 11:39 Southern Pacific Railroad 1950's - Dangerous Playground - Educational Safety Film
# L3coBk57LtE 0:21 Transperth B series departing Cockburn Central
iZC_fweTGdQ 17:16 LMS training video - Sentinels of Safety
jdGE3a31uJQ 26:35 LMS Men Of The Footplate 1939, full version.
F4J2wcDP3YA 13:00 LMS training video - Little & Often
Y8kEmyAcGlg 3:07 A short feature on the Bennett Brook Railway by Today Tonight.
cNao3iyX4SY 1:30 Indian Pacific transcontinental passenger train approaching the Avon Valley.
9PrUn3SrYc8 0:22 Quenda at Whiteman Park.
8k9rylyO3y8 4:50 Bennett Brook Railway 2014 volunteer tribute
66VwZN60pAw 11:06 Bennett Brook Railway Ashley & Friends day, May 2018
YswQaSgMepc 4:05 Bennett Brook Railway End of Steam Season 2016
kgfBRnecBoo 5:51 Bennett Brook Railway, Dorman #8 from the footplate
NbyYFHgDJ7g 6:14 Optus Stadium lights and stadium tour (re-upload)
Q0Ao2Ni_xho 9:56 Bennett Brook Railway, Whiteman Park classic car day 2016
XljbRbWvUrA 9:11 Bennett Brook Railway, Steam season 2014 & 2015
tWsqdZ5IWSw 15:30 Bennett Brook Railway Friends of Ashley day September 2015
hC_273wBwIM 10:37 Bennett Brook Railway Ashley day May 2015
# wTe1HQOYxLI 9:29 Transperth cab view from an express train on the Mandurah line to Perth Underground station
iA3ac6FMcug 4:20 Railfest 2014
n56xeZYxjjk 5:47 Bennett Brook Railway, Dorman Planet officially in service, 2014 part 2
# escYDilfoWw 7:42 Transperth drivers cab view A series Armadale shunt move and Australind cross
UGjOcaUlf9E 8:27 Bennett Brook Railway, Dorman Planet officially in service, 2014
CBZ96S2jgY0 4:34 Bennett Brook Railway Ashley day September 2014, part 3
oQsylnZqKRA 7:48 Bennett Brook Railway Ashley day September 2014, part 2
A4c_gkMGSrw 5:06 Ashley Day September 2014, Part 1
# zojRaOKBw1A 15:40 Transperth train cab view - B series railcar through Perth Underground & Elizabeth Quay stations
Z08eQaZzdKc 11:55 Bennett Brook Railways Betty Thompson, 2014
iDTPwt5qPmI 2:03 Indian Pacific transcontinental passenger train through Herne Hill
_VgKhlooHLs 43:50 Bennett Brook Railway drivers view full trip
jw0scWJiI5E 19:56 Bennett Brook Railway Mussel Pool line drivers eye view
315PLUy3Vo0 5:22 Bennett Brook Railway Ashley & Friends day, May 2014, part 2
xP9KVd3jRo0 15:04 Bennett Brook Railway Ashley & Friends day, May 2014, Part 1.
HiSUd1cmF3A 4:30 BBR adventures from 2011 to 2014
F_tD4t1HZfk 19:24 Bennett Brook Railway loco view of a bushland loop trip
NrGPHuvh02E 8:24 A Bennett Brook Railway morning steam train run
ZE6JLx4x0kU 15:14 Bennett Brook Railway Ashley Day 2017, video compilation
nz6z9rv5GcA 3:56 Old channel trailer
# KOPZ05YhcT8 14:22 Transperth B series express at night, from Mandurah to Perth Underground
# wMtK_JyAF5M 0:46 Transperth B series EMU cab view approaching Perth city across Mt Henry bridge.
vGBbUAuJ2NU 1:03 Indian Pacific transcontinental passenger train at Millendon Junction, Perth.
# NNFxabrkRG4 0:47 Transperth B series EMU express through Murdoch train station at 130kph (80mph)
1Z5NpyBK9Kw 3:55 Bennett Brook Railway, Ashley & Friends Day Pt 2
6ff8VAGIkTw 10:41 Bennett Brook Railways Ashley & Friends day, September 10th, 2017
O6d2YF-Z-S4 1:13 Bennett Brook Railway steam and diesel departure
sZ1apmh4dFI 1:02 Bennett Brook Railway steam passenger train
oo_lcwUBAfw 0:31 Bennett Brook Railway brook crossing
inq6UrXDCJ0 0:31 Bennett Brook Railway creek crossing
9s-f4VZ1hUw 0:34 Bennett Brook Railway diesel and steam motive power
08QjlLsKiOU 0:30 Bennett Brook Railway, a bush crossing.
kA1CmGS5lDU 0:54 Bennett Brook Railway steam power climbing Christmas Tree Hill
_LfUI-okK_Y 0:49 Bennett Brook Railway, the view from the cab
-LzikZDmyy8 1:01 'Betty' & 'Planet' on Ashley day, 13th Sept, 2015
ZLRd1eeaqPY 0:47 Bennett Brook Railway wig wag signal
uIZ0DYRUdbg 0:59 Bennett Brook Railway, Ashley Day, May 2015
FNOOJBw6Hhk 0:45 Bennett Brook Railway Ashley Day, May 2015. 'Planet' and 'Betty'.
5mCtZ6gvRqk 1:02 Bennett Brook Railway Ashley Day, May 2015.
6P_gBGLk5s8 0:52 Bennett Brook Railway Ashley Day 2015, 'Rosalie'.
YsBayEzCH9Q 0:55 Bennett Brook Railway Ashley Day, May 2015
Lo8AUaBdNMk 1:22 Bennett Brook Railway Ashley Day, May 2015, 'Rosalie' the diesel and train.
4kSxnxRdPx8 0:38 Bennett Brook Railway diesel passenger train
P9Soxyg1l2s 0:46 Bennett Brook Railway steam train

0SASZaT7lI4 1:21:37 Dünyayı Kurtaran Adam - Turkish Star Wars

-sEvzdefXk8 2:11:25 Zork Grand Inquisitor - English Longplay - No Commentary

WnxK4iYehag 40:54 Kalevala laulettuna - Viidestoista runo

maTkAcDbrEY 29:36 How Buildings Learn by Stewart Brand 1 of 6 “Flow”
3gXj3l3BxCI 30:21 How Buildings Learn by Stewart Brand 2 of 6 “The Low Road”
ySPBcLbI8ko 29:10 How Buildings Learn by Stewart Brand 3 of 6 “Built for Change”
PuP-MF7lOe4 29:15 How Buildings Learn by Stewart Brand 4 of 6 “Unreal Estate”
nWsASJ-CnvI 29:14 How Buildings Learn by Stewart Brand 5 of 6 “The Romance of Maintenance”
485R4xst-DU 29:05 How Buildings Learn by Stewart Brand 6 of 6 “Shearing Layers”

NTz2-im7s9k 26:54 JRR Tolkien - All VIDEO interview compilation 2022 - CleanCut

# Helge Fauskanger - "Cenindo"
LOKkboX_910 12:59 Speak Elf Yourself - Part 7
evjqeOrzMQ8 10:54 Speak Elf Yourself - Part 6
GkFG1GdGJx0 13:27 Speak Elf Yourself - Part 5
1HIaCUd-oFY 11:35 Speak Elf Yourself - Part 4
vnwlFXerIZQ 12:22 Speak Elf Yourself - Part 3
IgepeTpRJKo 16:13 Speak Elf Yourself - Part 2
ClhMTBoDtJQ 18:46 Speak Elf Yourself - Part 1
yiZH_pnBFDc 5:01 Parmar

# Four Keys Book Arts
RLN4NVbUT6k 14:46 A New Set of Wheels - Under the Cover: A Bookbinder's vlog no. 2 - Making a Finishing Tool Rack
YdQ-eeCrZrc 12:17 Bookbinding Tips & Tricks - 14 Helpful Hints - Things I Wish I Knew When I Started
kpaca7ARsjg 33:35 Making Tiny Books - Fully Functional Leatherbound Books in Miniature
qqiQIfmWEuU 16:42 Super Simple Custom Boxes with Basic Tools - Easy Tutorial for Recycled Mailers or Gift Packaging
dMbahhSj9cE 13:03 What A Mess! - Under the Cover: A Bookbinder's vlog no. 1 - Studio Tour Before & After
lQ50XdqfG00 24:17 Making A Medieval Book - Complete Process From Start to Finish - 60 hours in 24 minutes
lAz_kYxGorg 26:27 Making Book Hardware - Handmade Brass Furniture for a Medieval Binding
S7LCldA51XE 38:55 Making A Medieval Book By Hand - Part 5 - FINALE - Leather Tooling - Brass Hardware - Final Assembly
Y9j9MqyoyYA 30:44 Making A Medieval Book By Hand - Part 4 - Paring and Applying Leather
lzJujQGBbak 31:55 Making A Medieval Book By Hand - Part 3 - Wooden Boards, Carving & Mortising, Attaching the Covers
AFRrbxyjerE 36:33 Making A Medieval Book By Hand - Part 2 - Trimming & Rounding, Edge Decoration, Sewing Endbands
iFuWfhESpFc 35:29 Making A Medieval Book By Hand - Part 1 - Folding Pages, Endpapers, Piercing & Sewing
MAnv5WDAVTU 2:13 The Bookbinder's Plough - Trimming a Book by Hand
02K3IyYN-kE 8:55 Hand Tooling A Leather Book
EQIhhRDEtQ4 13:38 Making A Linocut Print from Start to Finish - Featuring Mr. Ritchie
GiqGK9rAhOw 9:56 Making a Batch of Upcycled Pocket Notebooks - Easy No-Sew Binding
nojmI7yTMMw 25:07 Replicating 'The Notebook' Part 3: Finished! - Decorative Tooling, Leather Corners, Final Assembly
Z3v4AUJaE-Q 20:12 Replicating 'The Notebook' Part 2: Lining the Spine, Making the Case, Applying Book Cloth
Wy3cGFmXS_Q 31:28 Replicating 'The Notebook' Part 1: Planning, Folding Signatures, Cutting Boards, Sewing and Trimming
t0utbeyOLug 3:42 How To Tie A Weaver’s Knot
ephI6nHA5lU 8:02 Preparing a Lithography Stone For Paring Leather
5EDB1ZXTvPY 28:13 Upcycling An Old Book: Reclaiming Materials - Making A Piercing Cradle - Making a Pocket Notebook
5FZLL3YZKr0 10:24 Blind Tooling Leather with Handmade Tools
VPPYIYndna0 8:52 Making Tiger Eye Marbled Paper
hVBaVbHbw9k 9:53 Making A Brass Finishing Tool - Part 2
5M72MxUEE7k 10:33 Making A Brass Finishing Tool - Part 1
Xq-LE0nn3N0 2:50 Threading a Bookbinding Needle
hznvLWIB5-c 15:20 Making A Handmade Book - Part 5 - Finishing the Book - Marbled Paper & Casing In
9mLod9GPXrc 13:24 Making A Handmade Book - Part 4 - Paring & Applying Leather
r94pybv9lgQ 8:56 Making A Handmade Book - Part 3 - Lining & Making the Case
tXIzuN3z7WM 6:58 Making a Handmade Book - Part 1.5 - Endpapers & Trimming
EL9NBb0ihI8 10:19 Making a Handmade Book - Part 2 - Rounding & Endbands
8RfR_mgwNLs 10:20 Making a Handmade Book - Part 1

# Northmen
bo9hXBdTfzQ 52:34 Grandfather. Full Documentary

3-Jrp6it9Ss 1:30:18 Tunnel Vision: An Unauthorized BART Ride

# Edward Calcutt
tLjPk99iR9s 48:02 A History of London through Fascinating Street Names

TzjxFCqT-40 1:39:24 Sorrento, Italy Walking Tour in 4K

# Will Lord
nD3UlqgPN5U 22:12 Let’s make a Neolithic Longbow - Primitive Technology

# Eddie Izzard
QRB_GhLXCds 1:54:08 Eddie Izzard - Dress To Kill Show in1999.

# Seinfeld
2GO3X6RXIvs 1:09:32 Jerry Seinfeld on Broadway, I'm Telling You for the Last Time, FULL set, Stand-up Comedy, Live, 1998

# CcPLsIy4tys 1:20:36 The Mouse and His Child

# YXGfCKNa_9E 1:49:40 Wind in the Willows Cosgrove Hall 1983 (extended version with omitted chapters)
mzL0pY1r5Lg 1:18:21 The Wind in the Willows (1983) - WIDESCREEN 16:9 - Cosgrove Hall
# yW1ymeB85WU 2:10:55 The Wind in the Willows - The Feature Length Specials (Cosgrove Hall)
msM29o87uTs 34:41 The Wind in the Willows (1949) 50s reissue

# Gilbert and Sullivan
IGzv4vufN-k 1:51:53 The Pirates Of Penzance (1983) full movie watch on YouTube HD
1P6ybQcD7fQ 2:27:27 Pirates of Penzance
OVczrZAWc_4 2:10:03 Patience - Opera Australia
vJGY6KIfwWA 2:17:28 The Mikado  2015 Gilbert & Sullivan
x_E0zJU9hFY 2:18:45 The Mikado 2011 Gilbert&Sullivan
f2TW90OEU-U 2:22:11 The Mikado 1992 Buxton
7To1E2y5Aq0 2:29:28 The Gondoliers Stratford Festival Gilbert and Sullivan
# lY7Y4asI4iQ 38:32 Trial By Jury, by Gilbert and Sullivan (2002 production)
# BPooR7a_kNA 1:54:52 The Sorcerer, by Gilbert and Sullivan (2002 production)
# 2oGV6p5j95A 1:46:27 H.M.S. Pinafore, by Gilbert and Sullivan (2003 production)
# XZUesXQvuWE 1:54:40 The Pirates of Penzance, by Gilbert and Sullivan (2003 production)
# TgR6XbPitUk 2:04:51 Patience, by Gilbert and Sullivan (2004 production)
# 5vXL10yXF-o 2:21:49 Iolanthe, by Gilbert and Sullivan (2005 production)
# O9GRJESLQe4 2:11:51 Princess Ida, by Gilbert and Sullivan (2006 production)
# qEBg46L6yV4 2:31:33 The Mikado, by Gilbert and Sullivan (2007 production)
# CYf2XULLv5I 2:31:00 Ruddygore, by Gilbert and Sullivan (2008 production)
VNJH8vhL32w 2:35:30 The Yeomen of the Guard, by Gilbert and Sullivan (2009 production)
# 7wvJl52w1aI 2:25:31 The Gondoliers, by Gilbert and Sullivan (2010 production)
# j5eycS1Gi14 2:45:25 Utopia (Limited), by Gilbert and Sullivan (2011 production)
# cvHj7lYHqmo 36:41 Trial By Jury, by Gilbert and Sullivan (2012 production)
# e5nmssekZII 2:47:13 The Grand Duke, by Gilbert and Sullivan (2012 production)
ms9aoiyTJpY 1:58 Shche ne vmerla Ukrainy [Ukrainian National Anthem] - the New London Opera Group
Ssg6tJC5hqU 56:32 Cox & Box, 2006
O_7H162D9fI 30:56 Trial by Jury by Gilbert and Sullivan
# h6AtEIuagK-k 2:04:21 The Mikado 1966 (Speed corrected) D'Oyly Carte Opera Company Gilbert & Sullivan

# Brandon Acker
r5K0nxMjFWU 6:03 My Favorite Baroque Piece 🎶

# Carlos Simas
MvclI-LE46k 9:57 Carlos Simas - minha biografia musical
KIvlQaXpnrU 3:56 Fest - Noz I (Carlos Simas)
SCVfyIs4b6s 4:20 Butterfly - Video Clip
Ma3Cit9DglI 9:16 New Age Acústico - Carlos Simas
DlT0beyD3xw 9:00 CELTIC SOLO AUTORAL by Carlos Simas
LvniuzeT5_w 1:39 King Williams's March - Carlos Simas - Celtic Harp
WeMQPuj9RVs 1:19 PIOBAIREACHD OF DONALD OHU - March - Carlos Simas - Mountain Dulcimer
YO00PRuuPcc 1:08 Loch Lomond (trad. Scotland) - Carlos Simas - Mountain Dulcimer
g0PFVNYaEo8 1:05 Amazing Grace - Carlos Simas - 5 Strings Banjo
mT0_hfbzAjc 3:14 SHENANDOAH - Carlos Simas - Folk Guitar
hKk_a8IebUQ 1:04 HERR MANNELIG - Carlos Simas - Anglo-Saxon Lyre
o5ipxqKsBnI 0:44 VÖLUSPÁ /IGGDRASIL- Anglo-saxon Lyre - Carlos Simas (Instrumental)
sovBrNCqO9w 6:13 Mountain Dulcimer - Triskele Programa Nº3 - Carlos Simas
X3TwGqtUM0w 4:45 Kantele - Triskele Programa 1 - Carlos Simas
rra6UZO4SGM 1:57 Cantiga 353 - Bear Dance (ancient) Flauta Tamborileira: Carlos Simas
KiR9YL4nykE 0:55 Drømte Mig en Drøm - Bowed Psaltery - Carlos Simas
DwOPyTk5Imc 1:04 Je Vivroie Liement (Guilhaume de Machaut) - Carlos Simas: Kravik Troll Lyre
o_J7KNGbT8g 0:59 Cantiga 119 - Alfonso X (Espanha XIII cent.) Carlos Simas
KANBD2qJIk8 1:10 Hooleys - by Dick Wildman (Carlos Simas - Acoustic Guitar)
hVl1TLSV8Wg 0:54 Batismo Celta (Pequena Amostra)
nry5VRI3JxM 0:59 Kotiin Tulessa (Home In Fire) Trad. Finland - Kantele : Carlos Simas
NougRZwvGi8 1:05 Cantiga 380 Sen Calar - Alfonso X (Espanha cent. XIII) Carlos Simas - Mountain Dulcimer
Ve0JS8Lfnnc 1:30 Kantele 20 strings - Lehmiäisä Hunlaissa (Trad. Finish) Carlos Simas
nog9ZCfPIBk 6:00 Ruas Sonoras CARLOS SIMAS
yhSpEqaoG8k 13:03 Música Céltica - Banda Thunderkelt, Noites Curitibanas ÓTV 042011
cnwTE3-mV6o 1:19 Rio na Pousada Monte Crista (Garuva - (SC) Brasil
NSL-__YEPcE 0:56 Cantiga de Santa Maria 213 (Alfonso X , XIII c.)-Carlos Simas :Gotic Harp
RhQPj8fAwCI 2:02 Polorum Regina (Llibre Vermell de Montserrat, Spanish-late XIV) - Carlos Simas, Gotic Harp(Brazil)
apBJqNWIcRw 1:38 Arja kastinen y Carlos Simas
eg3GjjqawgM 3:31 Muñeira da Magali
KRCH_HhJgAE 2:25 Carlos Simas and Deni Ribas playing a polka for chidrens
CJussPvi4jI 2:04 LLanthony Valley (Jessica Walsh) - Carlos Simas (whistles) y Elizabeth Viero (lyre).
fgR_261qEnM 2:40 Down by the Glenside (Ireland) - Carlos Simas and Elizabeth Viero
HL_TSZVT3bg 0:50 My Musical Instruments-Carlos Simas
VjjCDDA6s_w 3:23 Cantigas de Santa Maria - Gaita Galega - Carlos Simas
zmbqvk1iPg0 6:44 Inisheer/Tribute to Rick Mullin: Carlos Simas (Wire Strung Harp)
KVqXBuvnVuk 2:59 Si Bheag Si Mhor (T. Carolan 1670-1738 - Ireland) Carlos Simas and Luis FitzPatrick (Brasil)

# upy9dA5uD-U 5:36:54 The Once And Future King by T.H. White (Radio Drama)

# Ball Machine Kinetic Sculptures
nxDcvBJL1dI 3:38 1993 George Rhoads Audio-Kinetic Sculpture - Great Ball Machine Contraption Roller Coaster
bhJl6KtgN50 3:17 Ball Machine Sculpture: Odyssey of the Spheres (George Rhoads)

# Noh
wA3CEeqMCHQ 1:29:14 Matsukaze (松風) Noh with Script & Synopsis
eqsN6R1PfEA 59:36 能 「土蜘蛛 ササガニ 」 KYOTO de petit能　文化庁委託事業「文化芸術収益力強化事業」林宗一郎

# Old Movies
tpzEzMscj0g 1:07:45 Sherlock Holmes - An Venyn Yn Gwyrdh
-B7l7LSxnzU 59:38 SHERLOCK HOLMES: TERROR BY NIGHT | Basil Rathbone as Sherlock Holmes | FULL MOVIE
r_r0dFSsiAg 1:08:55 Sherlock Holmes and the House of Fear
VcgOCGBqnyA 1:08:14 Sherlock Holmes Faces Death 1943 movie classic
AqQJh-kNM9Q 1:17:34 Arsenic & Old Lace 1962

# Mark Lakeman Permaculture
VoYZlyBHyQM 16:08 How to turn your Neighborhood into a Village
4TCYjw88JSY 14:28 How Pocket Hoods behaving like villages boost wellbeing

# New England Forests
lVx45KG-DQs 57:06 The Return of Old Growth Forests
VvmbCc_mdWc 36:03 Plants That Cheat
qpZNhix-Ddc 49:02 The Salamanders of New England
cAWn1LZ30hw 59:29 New England's Native Oak Trees
beytGX2dORI 35:09 The Forgotten Forest Primeval - Rediscovering Mt Sunapee's Old Growth
WNZ9VUTUHTM 44:46 Beaver Pond Wildlife: Part 5- Fall to Winter
RJbVxcWRwa8 57:36 Beaver Pond Wildlife: Part 4- Mid-Summer to Fall
nXUmGIG7aww 56:47 Beaver Pond Wildlife: Part 3- Early to Mid Summer
UVvDByTRurA 32:27 New England's Roadside Ecology with Tom Wessels
tSr_RE7PAa8 56:22 Beaver Pond Wildlife: Part 2 - Late Spring
zGyMLG2wnBE 58:08 Beaver Pond Wildlife: Part 1 - Early Spring
N8zSxfPxA4U 25:54 The Magic Maples of New England
PSGAvGZsYVU 14:32 The Cathedral Pines of Cornwall, CT - 2020
bQs7novlvtA 56:41 Eastern White Pine- the Tree Rooted in American History
PFHS5mhIX1w 4:02 Lynn Rogers Bear Tree
qo3UDNAJvcg 2:02 Trailer- "Eastern White Pine: The Tree Rooted in American History"
hCAvBmY7ZgA 35:11 Tom Wessels: The Ecology of Coevolved Species
5xvkIDs3zQk 8:14 My Forest Has Worms
tEAfFq3gb30 24:38 Tom Wessels: Reading the Forested Landscape, Part 3
zcLQz-oR6sw 35:29 Tom Wessels: Reading the Forested Landscape, Part 1
L81Ihhqe0gY 19:50 Tom Wessels: Reading the Forested Landscape, Part 2
XykmZCSfrI4 6:39 The White Pine Weevil's Life Cycle
Vi12xaJxA5U 56:47 The Lost Forests of New England: Eastern Old Growth
jZEbs3SNXmU 10:28 New England's Tallest Tree
MFaXcJNqsfE 21:11 Waterfalls of Western Mass
qjlsV5bVMcg 7:12 Mt Tom Peregrine Falcons 2016
5eI7wbIkyrY 1:19:21 Mt Tom Wild: Wildlife on the Mt Tom Range
578AfZkwi5Y 31:57 Maple Sugaring at Gould's Sugar House
4Ux4CaKlkv4 26:40 Birch, Sweet Birch: New England's Forest Birches
MOoxCNK_C1k 10:00 The Thoreau Pine of New England
b8eyYLxmff0 9:26 Ambush in the Goldenrod
RNGHTrHul1Q 39:26 Mt Tom Peregrine Falcons
s91z2zNFGUM 0:41 Eastern Coyote expresses opinion.
DMA_Mj-yxjw 2:13 Eastern Coyotes, Mt Tom, Mass.

AofJfWEhesg 0:10 PBS Bumper 1977
AofJfWEhesg 0:10 PBS Bumper 1977
AofJfWEhesg 0:10 PBS Bumper 1977
AofJfWEhesg 0:10 PBS Bumper 1977
AofJfWEhesg 0:10 PBS Bumper 1977
AofJfWEhesg 0:10 PBS Bumper 1977
AofJfWEhesg 0:10 PBS Bumper 1977
AofJfWEhesg 0:10 PBS Bumper 1977
AofJfWEhesg 0:10 PBS Bumper 1977
AofJfWEhesg 0:10 PBS Bumper 1977
g8twezOz2h4 0:03 WGBH Boston | Title Card | 2003 | PBS Kids
g8twezOz2h4 0:03 WGBH Boston | Title Card | 2003 | PBS Kids
g8twezOz2h4 0:03 WGBH Boston | Title Card | 2003 | PBS Kids
g8twezOz2h4 0:03 WGBH Boston | Title Card | 2003 | PBS Kids
g8twezOz2h4 0:03 WGBH Boston | Title Card | 2003 | PBS Kids
g8twezOz2h4 0:03 WGBH Boston | Title Card | 2003 | PBS Kids
g8twezOz2h4 0:03 WGBH Boston | Title Card | 2003 | PBS Kids
g8twezOz2h4 0:03 WGBH Boston | Title Card | 2003 | PBS Kids
g8twezOz2h4 0:03 WGBH Boston | Title Card | 2003 | PBS Kids
g8twezOz2h4 0:03 WGBH Boston | Title Card | 2003 | PBS Kids
`,channel1=Object.freeze(Object.defineProperty({__proto__:null,episodes:episodes$5,videos:videos$6},Symbol.toStringTag,{value:"Module"})),episodes$4=[`
  -Ms1an9I-Ok 45:03 The Canterbury Tales General Prologue, complete reading (Middle English)
  lCRi3tB4uSU 2:03:04 The Knight's Tale, from the Canterbury Tales, complete Middle English reading
  vL6NgxKv6R8 36:37 The Miller's Tale (Canterbury Tales), read in Middle English (complete reading)
  4cDVjJqesys 22:26 The Reeve's Tale (Canterbury Tales), read in Middle English (complete)
  F6Gzi7BRnbU 2:18 The Cook's Prologue (Canterbury Tales), read in Middle English
  CzSbHVFMr8o 3:14 The Cook's Tale, from the Canterbury Tales, read in Middle English
  GxfHOHececU 5:36 The Man of Law's Tale, read in Middle English (Part 1, Canterbury Tales)
  `,`
  Cw6vJPLk6sM 17:25 The House at Pooh Corner - read by Norman Shelley - Chapter 1
  tKZRHKLrBJc 16:58 The House at Pooh Corner - read by Norman Shelley - Chapter 2
  vkmRt2HEHeU 16:15 The House at Pooh Corner - read by Norman Shelley - Chapter 3
  qn5s8nI67RE 19:28 The House at Pooh Corner - read by Norman Shelley - Chapter 4
  IrETKMx38to 19:44 The House at Pooh Corner - read by Norman Shelley - Chapter 5
  cRpA3PuH8T0 18:09 The House at Pooh Corner - read by Norman Shelley - Chapter 6
  1v0s8PTGH7g 19:32 The House at Pooh Corner - read by Norman Shelley - Chapter 7
  izomS5SgaG8 17:35 The House at Pooh Corner - read by Norman Shelley - Chapter 8
  K_h6BhkKE-U 16:18 The House at Pooh Corner - read by Norman Shelley - Chapter 9
  tQhCqByiv-M 16:06 The House at Pooh Corner - read by Norman Shelley - Chapter 10
  `,`
  sa3SwVCb25c 14:59 Winnie the Pooh - read by Norman Shelley - Chapter 1
  9lLTZt8mFu8 10:09 Winnie the Pooh - read by Norman Shelley - Chapter 2
  OKc2q7DMukk 7:43 Winnie the Pooh - read by Norman Shelley - Chapter 3
  7yCq3mHhpws 10:14 Winnie the Pooh - read by Norman Shelley - Chapter 4
  s-xkgum8xIw 17:12 Winnie the Pooh - read by Norman Shelley - Chapter 5
  iUsGriQMbf0 19:39 Winnie the Pooh - read by Norman Shelley - Chapter 6
  5vTJUm5FD50 20:27 Winnie the Pooh - read by Norman Shelley - Chapter 7
  N07qs6vZAhc 21:09 Winnie the Pooh - read by Norman Shelley - Chapter 8
  ksWh7VMVmOI 16:38 Winnie the Pooh - read by Norman Shelley - Chapter 9
  hk3mcTfo7fM 13:55 Winnie the Pooh - read by Norman Shelley - Chapter 10
  `,`
  Cw6vJPLk6sM 17:25 The House at Pooh Corner - read by Norman Shelley - Chapter 1
  tKZRHKLrBJc 16:58 The House at Pooh Corner - read by Norman Shelley - Chapter 2
  vkmRt2HEHeU 16:15 The House at Pooh Corner - read by Norman Shelley - Chapter 3
  qn5s8nI67RE 19:28 The House at Pooh Corner - read by Norman Shelley - Chapter 4
  IrETKMx38to 19:44 The House at Pooh Corner - read by Norman Shelley - Chapter 5
  cRpA3PuH8T0 18:09 The House at Pooh Corner - read by Norman Shelley - Chapter 6
  1v0s8PTGH7g 19:32 The House at Pooh Corner - read by Norman Shelley - Chapter 7
  izomS5SgaG8 17:35 The House at Pooh Corner - read by Norman Shelley - Chapter 8
  K_h6BhkKE-U 16:18 The House at Pooh Corner - read by Norman Shelley - Chapter 9
  tQhCqByiv-M 16:06 The House at Pooh Corner - read by Norman Shelley - Chapter 10
  `,`
  sa3SwVCb25c 14:59 Winnie the Pooh - read by Norman Shelley - Chapter 1
  9lLTZt8mFu8 10:09 Winnie the Pooh - read by Norman Shelley - Chapter 2
  OKc2q7DMukk 7:43 Winnie the Pooh - read by Norman Shelley - Chapter 3
  7yCq3mHhpws 10:14 Winnie the Pooh - read by Norman Shelley - Chapter 4
  s-xkgum8xIw 17:12 Winnie the Pooh - read by Norman Shelley - Chapter 5
  iUsGriQMbf0 19:39 Winnie the Pooh - read by Norman Shelley - Chapter 6
  5vTJUm5FD50 20:27 Winnie the Pooh - read by Norman Shelley - Chapter 7
  N07qs6vZAhc 21:09 Winnie the Pooh - read by Norman Shelley - Chapter 8
  ksWh7VMVmOI 16:38 Winnie the Pooh - read by Norman Shelley - Chapter 9
  hk3mcTfo7fM 13:55 Winnie the Pooh - read by Norman Shelley - Chapter 10
  `],videos$5=`
# The Adventures of Sherlock Holmes
EQuQF102O6I 0-55:10 The Adventures of Sherlock Holmes - A Scandal in Bohemia
EQuQF102O6I 55:12-1:53:55 The Adventures of Sherlock Holmes - The Red-Headed League
# EQuQF102O6I 1:53:57-2:36:54 The Adventures of Sherlock Holmes - A Case of Identity
EQuQF102O6I 2:36:56-3:37:53 The Adventures of Sherlock Holmes - The Boscombe Valley Mystery
EQuQF102O6I 4:25:57-5:23:50 The Adventures of Sherlock Holmes - The Man With the Twisted Lip
EQuQF102O6I 5:23:52-6:13:04 The Adventures of Sherlock Holmes - The Adventure of the Blue Carbuncle
eYpFjaJMiFY 49:56-1:41:05 The Adventures of Sherlock Holmes - The Adventure of the Noble Bachelor
eYpFjaJMiFY 1:41:07-2:41:11 The Adventures of Sherlock Holmes - The Adventure of the Beryl Coronet
eYpFjaJMiFY 2:41:13-3:42:34 The Adventures of Sherlock Holmes - The Adventure of the Copper Beeches

# The Return of Sherlock Holmes
vzFCXmbdmNk 0-57:00 The Return of Sherlock Holmes - The Adventure of the Empty House
vzFCXmbdmNk 57:10-1:52:48 The Return of Sherlock Holmes - The Adventure of the Norwood Builder
vzFCXmbdmNk 3:44:22-5:00:35 The Return of Sherlock Holmes - The Adventure of the Priory School
vzFCXmbdmNk 5:00:37-5:52:35 The Return of Sherlock Holmes - The Adventure of Black Peter
vzFCXmbdmNk 6:36:35-7:29:00 The Return of Sherlock Holmes - The Adventure of The Six Napoleons
vzFCXmbdmNk 9:56:02-10:50:25 The Return of Sherlock Holmes - The Adventure of The Abbey Grange
vzFCXmbdmNk 10:50:27-11:51:18 The Return of Sherlock Holmes - The Adventure of The Second Stain

# Radio Plays
eUD6jVUxRVs 27:02 Sherlock Holmes - The Three Garridebs with Carleton Hobbs and Norman Shelley

# Slow TV

# 3rDjPLvOShM 9:56:06 [9:56 Hours] Train Journey to the Norwegian Arctic Circle, WINTER [1080HD] SlowTV
# yCtt26c_AOg 9:56:06 [9:56 Hours] Train Journey to the Norwegian Arctic Circle, SUMMER [1080HD] SlowTV
# AWRKa0hOe98 9:56:06 [9:56 Hours] Train Journey to the Norwegian Arctic Circle, FALL [1080HD] SlowTV
# cNiN7gOcNI4 9:56:06 [9:56 Hours] Train Journey to the Norwegian Arctic Circle, SPRING [1080HD] SlowTV
# Ux8xAuQBdkk 3:00:13 4K Realtime Fireplace - Relaxing Fire Burning Video - 3 Hours - No Loop - Ultra HD - 2160p
# gB3XH5t9QCA 6:04:00 4K HDR Fireplace REALTIME - 6 Hours - Relaxing Fire Burning Video & Crackling Sounds - NO LOOP - UHD

# Audiobooks

# mh1wgTAa_Fw 8:52:56 J. K. Rowling: Harry ​Potter és a Bölcsek Köve (Teljes hangoskönyv)
# aP_3BZxWz9k 1:17:44 Wind in the Willows - Derek Jacobi [Abridged]
k5onUh_4qv8 6:55:28 The Wind in the Willows [Full Audiobook] by Kenneth Grahame
# WScPMDMBM9Q 1:15:53 Kensa Kernewek - Volume 1 (CD, 2006)
# 8c4fAznBlEg 52:10 Crysten Fudge, Graham Sandercock - Kernewek Mar Plek 1
mVXZg6_JdmE 4:40 The Hobbit Chapter I in Cornish (An Hobys Chaptra I in Kernowek)
# UxEvRoAaYBM 1:42:53 Dao De Jing or Tao Te Ching - Book of the way
POSkU5goGXE 2:20:56 Winnie-the-Pooh (Version 2) by A. A. Milne read by Matthew Soanes | Full Audio Book
# bnp9U16h_IM 2:54:44 The House at Pooh Corner Unabridged Audiobook

# bws8BIteUhQ 35:44 Viisasten kivi - 1. luku
# lpALOAEzfrI 27:27 Viisasten kivi - 2. luku
# Dd6kNghklXM 29:33 Viisasten kivi - 3. luku
# QicLugnrw8E 30:01 Viisasten kivi - 4. luku
# kvfXAtBWCnQ 56:27 Viisasten kivi - 5. luku
# -FRNVvS4agM 49:56 Viisasten kivi - 6. luku
# MSjIWDhTq8M 35:44 Viisasten kivi - 7. luku
# puo4O44vimQ 23:36 Viisasten kivi - 8. luku
# Uy3d63ppXD8 40:25 Viisasten kivi - 9. luku
# t2yqFHlb_3o 34:11 Viisasten kivi - 10. luku
# -pkuT0WpjPY 26:31 Viisasten kivi - 11. luku
# ynYThAUBY-8 42:57 Viisasten kivi - 12. luku
# fhnEqm_msKU 24:52 Viisasten kivi - 13. luku
# jji6vaRfwyY 26:38 Viisasten kivi - 14. luku
# VRcz5GqW8ko 39:52 Viisasten kivi - 15. luku
# orXsEygws-0 49:37 Viisasten kivi - 16. luku
# IQyBxBtwMEc 46:26 Viisasten kivi - 17. luku

# sJgYxwbkxLg 1:06:29 Taru Sormusten herrasta #podcast äänikirja. Suomeksi #1
# 6X5yemYOTdI 1:05:59 Taru Sormusten herrasta #podcast äänikirja  Suomeksi #2
# aIiEnRRCap8 1:03:41 Taru Sormusten herrasta #podcast äänikirja Suomeksi #3
# ByVEvos9qrs 1:08:52 Taru Sormusten herrasta #podcast äänikirja Suomeksi #4
# NqYDxFFJBgs 1:06:29 Taru Sormusten herrasta #podcast äänikirja Suomeksi #5

# 8S1ulnPb15A 5:00:18 Äänikirja: Odysseun harharetket, Homeros
# R1cXzTVTXdE 8:40:55 Robin Hood ja hänen iloiset toverinsa, John Finnemore

# hykA1SLAkbc 1:18:21 Mabinogion - walesi legendák. A Mabinogi első ága [hangoskönyv]
`,channel2=Object.freeze(Object.defineProperty({__proto__:null,episodes:episodes$4,videos:videos$5},Symbol.toStringTag,{value:"Module"})),videos$4=`
# Full album videos

BecZdQvjGrY 54:49 In Gowan Ring - Compendium (Full Album)
cCXWuAm-cqA 1:15:08 In Gowan Ring - The Twin Trees (1997) [FULL ALBUM]
B3oAx9VmAdA 43:52 In Gowan Ring - Hazel Steps Through A Weathered Home
RqKtDn5ntms 53:37 Genesis - Selling England by the Pound (Full Album) 1973
jGZaH0JEiic 39:33 Genesis - Nursery Cryme (Full Album) 1971
c8gylOvjVoM 31:59 Moondragon - Moondragon (their first album)
# 2F37ZjThB6s 1:13:09 Moondragon - Dream (1991)
dfkTPeaVU50 1:09:01 Lordryk (Moondragon) - Combined Chaos (Live)
bnaTLcFpQnE 45:45 Manu Chao - Clandestino (Full Album)
08ozElWwpzc 35:28 Nektar - Remember The Future 1973 - Full Album - Digitally Remastered 2002
npsgOn1QY1M 41:53 Pink Floyd - Dark side of the moon - HD - High Audio Quality (Full Vinyl Album)
_zmeye7-HOE 48:54 Evanescence - Fallen (FULL ALBUM)
p0D-w-HhB64 47:46 Dire Straits - Brothers In Arms {Reissue} [Full Album]
Jl1_m1OtkpE 1:01:28 Brian Eno - New Space Music
# _VOk5ubGg9M 29:55 The Bach Variations A Windham Hill Sampler 12 1994
FKuHRdGeYjc 40:18 Tamarugo - Tan lejos del mar (1979) (Full album/ Album completo)

# Singles

Gf1RHyuuLnI 4:59 Kirsten Bråten Berg - Heiemo og Nykkjen(folkesang)
Tt8p5AxJn18 4:14 Sinéad O'Connor - Mna na h Eireann (Women of Ireland)
Dhgi3wb_GB8 4:25 Ripoff Raskolnikov - Azt gondoltam eso esik
7lvI8e3vPT4 4:04 Muzsikás - Azt gondoltam, eső esik
apE1n63ZhMQ 3:39 Muzsikás: Repülj madár, repülj (Fly Bird, fly) + pics of Hollókő (read the info)
8n5u_IfVLd0 5:45 Cirque Du Soleil O, Gamelan
# OmUnDAcUddQ 3:43 LEYRIATH | Sen Calar Nen Tardar (CSM 380 - Alfonso X)
jGacwtlb3gc 5:04 Andrew Cronshaw - Sofia, The Saracen's Daughter (Edit)
LzP5xGcKa1k 4:14 Peter Blanchette, "Si Beag Si Mor"
dbVLPJvPEmM 10-5:23 Archguitar Duo P Attaingnant La Brosse
Z-IK884rp1I 5:47 Stuart Forester - Swarthfell Rocks
`,episodes$3=[`
    # In Gowan Ring - The Glinting Spade
    GCglHYJb2Yk 5:34 Two Wax Dolls
    W-gm4QANx0k 4:04 To Thrum a Glassy Stem
    O-gx9ILQogw 13:07 Cipher's String on the Tree in the Dream of the Queen
    scqjzDhXIxA 6:20 Bow Star
    GgIWODOVlOI 6:58 A Bee at the Dolmen's Dell
    ZXK1NYbjozk 8:04 Arrowsmith's Fire
    2LjJzCTfaPo 12:31 Milk Star
  `,`
    # In Gowan Ring - The Serpent And The Dove
    Tr8BAGlGA1U 3:31 The Serpent
    xh3b1Ypy298 5:20 Thousands of Bees
    zs6OglBQyxg 7:25 Sial at Play
    Tg1ZyEvLPbU 4:35 Julia Willow
    ottvXE01Ufs 4:24 Set a Candle in the Night
    7uuz9lx5ppE 9:16 Field of Dream
    FFPew-WtLI0 6:33 A Song, a Story and a Stone
    AlhtLYq4H5k 4:43 The Dove
  `,`
    # Heroes of Might & Magic IV
    cvyS50v2Uts 1:37 Main Theme - Heroes of Might and Magic IV
    3k9fPBM-rPo 2:27 HOMM IV - Academy (Order) theme
    m5vEXnWQOH0 14:51 Heroes of Might & Magic IV - Grasslands Theme
    _OCxQHsSijw 3:15 The Last Battle - Heroes of Might and Magic IV
    sNz026pZP84 2:48 HOMM IV - Castle (Life) theme
    hkDXNSWJLuo 2:17 Heroes Of Might And Magic IV - Sea Theme
    lrLCLfoxKb4 3:29 HOMM IV - Preserve (Nature) theme
    wG9nDmv1UJg 2:37 Asylum - Heroes of Might and Magic IV
    PrZvWzbj3ek 3:24 Necropolis - Heroes of Might and Magic IV
    pOZRUREX6xo 2:20 Heroes of Might and Magic 4 - Snow Lands Theme
    skGuDAhrkJ4 3:11 Castle Stronghold - Heroes of Might and Magic IV
    tNUX6Zd89C8 2:52 Wandering - Heroes of Might and Magic IV
  `,`
    # Jethro Tull - Thick As A Brick
    ldXdnZtTWp8 22:40 Thick as a Brick (Pt. 1) (1997 Remaster)
    GTWQv8RsI6s 21:10 Thick as a Brick (Pt. 2) (1997 Remaster)
  `,`
    # Jethro Tull - Songs From The Wood
    z4UYX2qpUK0 4:54 Songs from the Wood (2003 Remaster)
    9fWzUgrYnqs 2:29 Jack-in-the-Green (2003 Remaster)
    KNc2uifQuGw 4:32 Cup of Wonder (2003 Remaster)
    royymUiwItI 5:12 Hunting Girl (2003 Remaster)
    XJS9TjjHxx8 3:44 Ring Out, Solstice Bells (2003 Remaster)
    # 6-ANplhDJNY 6:03 Velvet Green (2003 Remaster)
    2mBaE-K4RxI 3:32 The Whistler (2003 Remaster)
    # pkUCchG0Kls 8:34 Pibroch (Cap in Hand) (2003 Remaster)
    73LAuGkgayo 2:28 Fire at Midnight (2003 Remaster)
    XzJVZ5Uda84 5:19 Beltane (2003 Remaster)
  `,`
    # Jethro Tull - Benefit
    gfKzPV-Ely4 6:19 With You There to Help Me (2001 Remaster)
    b1Pzk_UYnos 5:15 Nothing to Say (2001 Remaster)
    2gfeRCSNBQM 2:49 Alive and Well and Living In (2001 Remaster)
    KQpsbE6pH8s 2:52 Son (2001 Remaster)
    eG5zRt-sNWE 3:52 For Michael Collins, Jeffrey and Me (2001 Remaster)
    S5vto70Q23E 6:14 To Cry You a Song (2001 Remaster)
    c5OjM3G6vnQ 2:45 A Time for Everything (2001 Remaster)
    j1VYRZF8bCs 3:50 Inside (2001 Remaster)
    Wdv8PmIDLCQ 3:50 Play in Time (2001 Remaster)
    mp5dXgf9MwA 4:43 Sossity; You're a Woman (2001 Remaster)
    g6iyWNTnVRI 3:08 Singing All Day (2001 Remaster)
    UhbRLQmzrD4 3:52 The Witch's Promise (2001 Remaster)
    qizGFSKWAvA 1:38 Just Trying to Be (2001 Remaster)
    xkzeeEU27Mw 3:48 Teacher (Single Mix) (2001 Remaster)
  `,`
    # Jethro Tull - Best of Acoustic
    GW-TrUDrv1E 2:51 Fat Man (2001 Remaster)
    Kq2TIzIOJ-4 3:18 Life Is a Long Song (2001 Remaster)
    DoPFe76HRJw 1:21 Cheap Day Return
    1VvNSJwK3GI 3:53 Mother Goose
    IG63iywGiJU 1:54 Wond'ring Aloud
    TbKBz2AUGJI 3:03 Thick as a Brick (Edit #1) (2001 Remaster)
    1oyMmz4FiAQ 4:12 Skating Away On the Thin Ice of the New Day (2002 Remaster)
    TQHHhvCw0Kk 1:30 Cold Wind to Valhalla (Intro) (2002 Remaster)
    33Op6mza7f8 4:37 One White Duck / 0" = Nothing at All (2002 Remaster)
    mTvzkXEiDUU 2:52 Salamander (2002 Remaster)
    qnNokfzPJ7Y 2:29 Jack-in-the-Green (2003 Remaster)
    Ii4G2lwyXks 6:03 Velvet Green (2003 Remaster)
    ru1_S2wFuzs 2:43 Dun Ringill (2004 Remaster)
    sdKsD5e8NgM 3:23 Jack Frost and the Hooded Crow (2007 Remaster)
    d7Up0aGXhmM 2:14 Under Wraps #2 (2005 Remaster)
    jQjy2q6uU0M 4:57 Jack-a-Lynn
    vaJpbwKc4gM 2:01 Some Day the Sun Won't Shine for You
    G2RqFpju02o 3:39 Broadford Bazaar (2007 Remaster)
    UCi0wZjyx_Y 2:58 The Water Carrier
    KZMO87qRRtw 3:01 Rupi's Dance
    7mOI9xaY_Ac 2:50 A Christmas Song
    e1ga16WVCO0 4:03 Weathercock (2003 Remaster)
    krQyHXul-o8 3:41 One Brown Mouse (2007 Remaster)
    zwf2svLUi1Q 4:14 Pastime with Good Company (Live in Denmark)
  `,`
    # Jethro Tull - Stand Up
    JajGBIfGWZM 4:09 A New Day Yesterday (2001 Remaster)
    wlNwOJkP5P8 2:13 Jeffrey Goes to Leicester Square (2001 Remaster)
    dnEx_rNOijs 3:47 Bourée (2001 Remaster)
    a3uqdoJxJ50 3:54 Back to the Family (2001 Remaster)
    A6VXRSVZHIY 4:24 Look into the Sun (2001 Remaster)
    Nu_xOl-I7Lc 4:25 Nothing Is Easy (2001 Remaster)
    iznQpk9GLaA 2:51 Fat Man (2001 Remaster)
    oGvux7w1Ea4 4:04 We Used to Know (2001 Remaster)
    exXKfGPgW00 4:08 Reasons for Waiting (2001 Remaster)
    r-ZDY-NtpII 4:22 For a Thousand Mothers (2001 Remaster)
    8mSIX8G_0Mk 3:23 Living in the Past (2001 Remaster)
    7u8Me9lgosc 2:45 Driving Song (2001 Remaster)
    mfvGAG1N7g8 4:04 Sweet Dream (2001 Remaster)
    Mxr9R2GvMbk 3:08 17 (2001 Remaster)
  `,`
    # Sting - Songs From The Labyrinth
    Bx8Wv4hlWhs 0:39 Walsingham
    RYb-7JOQRQQ 2:36 Can She Excuse My Wrongs?
    PM2efKgXGvA 4:43 Flow My Tears
    L_dAtufQBjE 2:36 Have You Seen The Bright Lily Grow
    mThui5PF5p0 3:02 The Most High And Mighty Christianus The Forth, King Of Denmark, His Galliard
    sfuSu8Cv0rs 2:17 The Lowest Trees Have Tops
    sw4U1tXvnJg 1:51 Fine Knacks For Ladies
    xXxXuRX9AFQ 2:43 Fantasy
    30WQZoJkN9E 3:46 Come Heavy Sleep
    WoTJ0eZZUTI 3:08 Forlorn Hope Fancy
    u8HTYK66WAo 2:57 Come Again
    zGHd7ZXGs8c 2:41 Wilt Thou Unkind Thus Reave Me
    Ev29OdOl7nw 2:39 Weep You No More, Sad Fountains
    cCZR41FtZXs 1:35 My Lord Willoughby's Welcome Home
    KRMT5xQg7SY 2:48 Clear Or Cloudy
    WMCC8IzFSl8 4:13 In Darkness Let Me Dwell
  `,`
    # Genesis - Trespass
    E7Z_xXh7gm8 7:04 Genesis - Looking For Someone (Official Audio)
    6hgYH3-HVrY 6:45 Genesis - White Mountain (Official Audio)
    uMM8spZyEgg 6:51 Genesis - Visions Of Angels (Official Audio)
    BNKDXs5P08Q 8:47 Genesis - Stagnation (Official Audio)
    v719eZmXRdE 8:56 Genesis - The Knife (Official Audio)
    zhw1gm5-nt0 4:11 Genesis - Dusk (Official Audio)
  `,`
    # AFI - Decemberunderground
    d0Gsyr_0PpA 1:35 Prelude 12/21
    NdwM8yRAm2I 2:40 Kill Caustic
    jMxU2ToSunY 3:23 AFI - Miss Murder (Official Music Video) (Short Version)
    vEVabFtMNow 3:07 Summer Shudder
    imGlDkZXrUU 4:17 The Interview
    rsrEXwozK-Y 2:48 AFI - Love Like Winter (Official Music Video)
    Jd8ipNTtrwY 5:29 Affliction
    HsLOgwUFrAA 4:41 The Missing Frame
    WKvuMfcHax0 4:19 Kiss and Control
    3KidSFH6aV4 4:04 The Killing Lights
    DBJkPYoSu5A 3:53 37mm
    _-h_khKeJB0 4:27 Endlessly, She Said
  `,`
    # The Beatles - Magical Mystery Tour
    l8WMGBuNaus 2:51 Magical Mystery Tour (Remastered 2009)
    wsRatIMUSu8 3:00 The Fool On The Hill (Remastered 2009)
    Z1ONJQLdZrk 2:16 Flying (Remastered 2009)
    Coz0TmK2ZIg 4:00 The Beatles - Blue Jay Way
    tCXsFjzMKdc 2:29 Your Mother Should Know (Remastered 2009)
    t1Jm5epJr10 4:36 I Am The Walrus (Remastered 2009)
    rblYSKz_VnI 3:29 The Beatles - Hello, Goodbye
    HtUH9z_Oey8 4:24 The Beatles - Strawberry Fields Forever
    S-rB0pHI9fU 3:07 The Beatles - Penny Lane
    i5m-sgtwFck 3:02 Baby, You're A Rich Man (Remastered 2009)
    1A8sOOKianA 3:51 All You Need Is Love (Remastered 2009)
  `,`
    # Shira Kammen - The Almanac
    DTAoc_dWJ9A 3:29 The Oar Wheel
    JMIJBSdlIPU 2:50 The Wheel of the Year
    YFG4FI_iiyo 5:47 Mirie it is
    ogvhq_2REAE 3:36 May Carol
    Es4CIDHX08k 4:01 The Leaves Be Green
    VHKbd1pAnF8 2:55 Nou Springeth the Sprai
    _vKWHe1K8oA 5:06 Lenten Is Come
    bYCIw_45XvU 2:39 Ce Moys de May
    YQaC5LJQvLQ 7:41 Le Lai de la Rose
    azWbuKYKOBI 2:04 June Apple
    AIaRJbAHnkw 3:25 Nou Welcome Somer
    zaug2a-IzvU 5:31 A Globo Veteeri
    ZCJy_1krAPQ 3:00 O Western Wind
    dQbGkMjPCiw 2:31 The False Fox
    PcVe-kmMlqY 3:56 Ilkley Moor
    XaJVkZqFYMg 3:26 John Barleycorn
    wIn8FPXKFwU 3:59 Green Grows the Holly
    0ixjT5v-Gi8 2:31 Quant Je Vois Yver Retorner
    s6jr1veNfVM 1:53 The Almanac
  `,`
    # Fay Hield - Looking Glass
    nLEOEbIYCQ8 5:58 The Huntsman
    kep44rPk38g 2:29 Mad Family
    bfj6t9Vd918 3:52 Two Brothers
    IA5fzks9WVc 3:19 The Looking Glass
    8YwxzTITDXw 3:42 Little Yellow Roses
    wxZ-x5zOYLY 2:37 The Banks of the Nile
    dAjqaxag94g 7:26 Kemp Owen
    WMNafvOMhXU 3:57 Sheepcrook and Black Dog
    HuST5YYgICo 4:02 Grey Goose and Gander
    ArWncy2D4Mk 2:41 The Shepherd's Daughter
    Vwi9RiT1H2k 2:35 King Henry
  `,`
    # Baltimore Consort - La Rocque and Roll
    0Tly_wgC858 2:05 J'ai vu le loup
    KNFgW6GLo1o 2:21 Has tu point veu
    dtf_YWfYixM 0:50 Branle double
    8nslzpv9Z14 0:55 Branle de Montirande
    ueAwkZncUec 1:31 Branle de la torche
    5F-YGQiyudI 3:40 Mignonne, allons voir si la rose
    GPlyhDy2dng 4:06 Frais et gaillard
    EBC9ldiS2oM 3:24 Une m'avoit promis
    raQ_x-HTGKU 2:02 Volte
    fFQx3FsnQUw 5:37 Mes pas semez
    D15w88oaHd8 0:36 Gaillarde d'escosse
    wj4Tjcd_LC4 1:17 Laroque Gaillarde
    I_T8q6SQHPo 1:28 Alemande de Liege
    f1rqBTVgflU 2:33 Ma bergere, ma lumiere
    JUg1PlpLofI 4:44 Estans assis aux rives aquatiques
    qrb6taaO2Ao 1:02 Prelude
    UU20OsnHbOY 2:27 Tant que vivray
    b-2_D_e0BTg 3:04 Ung gay bergere
    OJsz1rh74KM 4:04 O Madame, per-je mon tems
    vN2WSIo769o 4:16 J'ay le rebours
    HQZ-mEHw86M 3:56 Branles du village
    PmaF46f5O_c 4:32 Une jeune fillette
    LeGJ3C3rzpE 5:48 Une jeune fillette
    UZqz379ldDE 1:07 Fantasie sur Une jeune fillette: Une jeune fillette
    w432eO-7G0U 4:46 Une nimphe jolie
    wRMw1g9CdOM 5:48 Jean de Nivelle
  `,`
    # Calliope - A Renaissance Revel
    j0YJZDPjrdg 1:33 Early 17th Century Dances from Terpsichore: Galliarde (1)
    gorgo1rIQXo 2:11 Early 17th Century Dances from Terpsichore: Three Voltas
    if7D7Xp30sE 1:12 Early 17th Century Dances from Terpsichore: Galliarde (2)
    VeW2586FkQY 1:55 Early 17th Century Dances from Terpsichore: Galliarde Diminutions
    _4vd6Lg7iyU 2:23 Early 17th Century Dances from Terpsichore: Ballet Des Anglois
    Skc8lWOBh0c 1:22 Early 17th Century Dances from Terpsichore: Bransle De La Royne
    4KoJoH9Y9Nk 5:54 Basse Dance "La Brosse"
    wU2tdhdqtpY 2:38 Henry VIII of England (1491-1547) : Taunder Naken
    tMF_AZm1L1A 2:33 La Spagna: Francisco De La Torre (1483-1504)
    _pkN_3UsuXM 1:45 La Spagna: Guglielmo Ebreo Da Pesaro (c.1425-1480?)
    c5eXownBIec 1:26 La Spagna: Heinrich Isaac (c.1450-1517?)
    uyNxtVHkiqE 1:16 Sixteenth Century French Dances: Two Galliardes
    OiFCVA26l7o 2:04 Sixteenth Century French Dances: Pavane
    j--LBE7rCbs 2:09 Sixteenth Century French Dances: Basse Dance "Au Pres De Vous"
    hdIr96z7iTY 2:50 Sixteenth Century French Dances: Three Bransles Gay
    rn7ryGcOm4Y 3:15 Sixteenth Century French Dances: Bransle Simple
    G-rdQRx5AIE 5:35 Sixteenth Century French Dances: L'Homme Arme
  `,`
    # Markahuasi - Traditional Music of the Andes
    CeOR5tsYD8s 3:24 Markahuasi - Los Refranes (The Old Sayings)
    -2kY4Bo2Ch4 4:16 Markahuasi - Balseros del Titicaca (The Rafts of Titicaca)
    Vpi1QKniaKQ 3:59 Markahuasi - Amores Hallaras (Many Loves You Will Find)
    DVSk1tE7pH8 5:44 Markahuasi - Chukya
    rkFdByMBxXw 3:03 Markahuasi - Estudio Para Charango (Study for Charango)
    LAB3mti7IB8 3:59 Markahuasi - Negra Guitarrita (Little Black Guitar)
    jVK4CEXX78Y 3:59 Markahuasi - Pampa Lirima (The Fields of Lirima)
    tUtRiyRYzkQ 3:11 Markahuasi - Taquirari
    xTohK24Du5w 3:59 Markahuasi - Encuentros (Encounters)
    vK9rv7ZRaoQ 3:17 Markahuasi - Iluman Tio
    36B1W-JIX-A 3:52 Markahuasi - Vientos Del Sur (Winds of the South)
    zmB2ulRI_4c 6:26 Markahuasi - El Condor Pasa (Flight of the Condor)
    ZzEjGlRkdFQ 4:55 Markahuasi - Tinku
  `,`
    # Die Irrlichter - Elfenhain
    DUqUNQFws5M 3:54 Aelinesse na megil
    uk4Sa6lblvk 3:13 Der Fischer
    n0UbhpSlTqE 2:55 Roter Mond
    ClXoQyBzCoE 3:14 Der Weg
    9PkfmZ4p_8c 3:07 Der rechte Mann
    J_qb8g5xRAM 2:28 Schenk voll ein
    qLUbzbLbGDQ 4:02 Branle des souris
    IJ7EebHnCnk 5:24 Elfenhain
    rq-tl23hTpQ 2:18 Sigurd Store
    qb_Fe_JzQMY 2:23 Les filles des forges
    FPqzHYi3b3c 3:24 Das Spiel mit den Leuten
    jS6w2Zc5smE 3:15 Ronde mon ami
    41rLvBf3Cbk 4:47 Wildgänse
    kgx8yMM3RpM 2:55 Cantum Corvi
    ci1s7CM869A 3:06 Ravens March
  `,`
    # Solanaceae - Solanaceae
    LDB9Hnx1OnA 6:36 I Saw Them Through The Pines / They Only Walk On Moss
    HHsv3xwcYxs 4:04 Through The Trees Spears The Sun
    VnSYhm0-wHo 3:18 Fenella
    a6FPaO7a8Us 3:43 The Blood Of My Lady
    WsUYTrCAaFU 5:24 O Deep Woods
    3RckNyhaLIo 3:52 Nakkiel II
    nHComn8D1mM 3:57 Midnight Garden
    md_qcimQEio 3:03 Samorost
    NJT2B7Bc178 3:38 The Blood Of My Lady II
    2BgyJLEGS2E 4:06 Hemlock and Mandrake Fields
    U1JbAItSLH0 5:09 The Swallows Spiral Through Them
    bTSQO7jOb54 2:44 Nihil Sum
    7rPaczMY1KI 4:59 I Saw Her Through The Pines
  `,`
    # Nightwish
    NzWizk3e4MM 4:28 1.Nightwish - Dark Chest Of Wonders
    NtEAh5xPvHU 5:21 Nightwish - Gethsemane
    wEERFBI9eCg 4:03 Nightwish - Wish I Had An Angel (OFFICIAL VIDEO)
    kEILUXXlX4I 8:29 Creek Mary's Blood
    YvG58wNFJJI 4:25 Crownless
    2ZV9Snsk3vU 4:24 Wishmaster
    CwED4C5FJuo 3:55 Nightwish - Over The Hills And Far Away (OFFICIAL VIDEO)
    hIKgj6vHFx8 4:50 Wanderlust
    JcvDFyJVCyw 4:24 End of All Hope (Remastered)
    n1G5WiMoRjw 4:08 The Phantom Of The Opera
    9QALGuLbh-Q 4:34 Sleeping Sun (Remastered)
    fWm7BLoY9wI 4:36 Nemo (Remastered)
    Dm3k7lXNSa8 6:47 Dead Boy's Poem
    z94ip-1_khY 3:37 Nightwish - Kuolema Tekee Taiteilijan [Lyrics]
  `,`
    # Bob Marley - Legend (Full Album)
    wsu_8UwapEI 3:52 01. Is This Love? - (Bob Marley) - [Legend]
    eo1VWOmLuJM 7:05 02. No Woman, No Cry - (Bob Marley) - [Legend]
    CgD8rao1jQ8 3:56 03. Could you Be Loved - (Bob Marley) - [Legend]
    8InDv_xb_YA 2:59 04 Three Little Birds - (Bob Marley) - [Legend]
    wDejhDr_HEI 4:21 05. Buffalo Soldier - (Bob Marley) - [Legend]
    QL-N69VyI28 3:17 06. Get Up, Stand Up. - (Bob Marley) - [Legend]
    dm8EKuMsVLY 5:32 07 Stir It Up - (Bob Marley) - [Legend]
    Pw3M99_n1g4 2:52 08. One Love - (Bob Marley) - [Legend]
    bCAHC_BYMfM 4:44 09. I Shot The Sheriff - (Bob Marley) - [Legend]
    p_o6KvYPjdc 4:15 10. Waiting In Vain - (Bob Marley) - [Legend]
    _8aCv1pFCW4 3:50 11. Redemption Song - (Bob Marley) - [Legend]
    IkaqvekPMOw 4:18 12. Satisfy My Soul - (Bob Marley) - [Legend]
    tXnYRDmT2g8 7:22 13. Exodus - (Bob Marley) - [Legend]
    Yta1LtlZqVI 3:13 14. Jammin - (Bob Marley) - [Legend]
  `,`
    Y3Vxjgjp4HA 5:52 Alegria
    PTMisEaiWM4 4:35 Vai Vedrai
    DwiaTNJByRY 5:20 Kalandero
    tFXoU1m_6UA 4:35 Querer
    gPp4YO1HEiw 4:47 Irna
    POrR4o-Gbmw 5:35 Taruka
    lzAw-78sQvo 4:42 Jeux D'enfants
    KiLEKdYoR2Q 5:07 Mirko
    W-gE48Nr9m4 7:24 Icare
    osJ4Bzh84vY 6:27 Ibis
    BLAi3NNz2Vs 4:01 Valsapena
    cr1eD_MJ80Y 3:10 Nocturne
  `,`
    # Cirque du Soleil Compilation - O - Dralion
    S6tE6laWTEc 4:22 Cirque Du Soleil O, Jeux d'Eau
    eRuaup9q164 5:56 Ombra
    _1seEbWLfmo 5:40 Ballare
    FEMZqYM3Peg 4:06 Cirque Du Soleil O, Nostalgie
    oZsE0Kpe2Mg 4:35 Stella Errans
    QETX5wGDkBQ 5:17 Miracula Aeternitatis
    tN777jqzeLA 7:17 Cirque Du Soleil O, Remous
    q3aryI9pa3w 5:14 Ninkou Latora
    MtfUtwrRdqI 5:24 Cirque Du Soleil O, Mer Noire
    1GCzME-a9sU 7:51 Cirque Du Soleil O, Desert
    ku0P5Fdv0Tk 2:38 Cirque Du Soleil O, O
  `,`
    # Here we use time slices to replace the instrumental version of Ólafur
    # Liljurós with the sung version.
    IYbE2coMZPc 0-7:33 Íslandsklukkur (Instrumental Icelandic Folk Music)
    QwfI6nvCShI 3:37 Ólafur Liljurós - Íslandsklukkur Icelandic folk music with Lyrics
    # rfjaob7FsTg 3:29 "Ólafur Liljurós" Icelandic Viking Folk Song (Lyrics)
    IYbE2coMZPc 11:09-52:50 Íslandsklukkur (Instrumental Icelandic Folk Music)
    LFtRNYAZoKA 3:53 Íslandsljóð
  `,`
    KwAvU70ZhtQ 5:47 I Mada
    pQbaGFsSe8c 4:47 Wassiye
    -zpdtgCBPbk 5:31 Ma Ya
    hFXyJTYMqP4 5:57 Bitile
    _QB6ffseBLE 5:30 Sirata
    pzqJvEIX0U4 5:15 Foro Bana
    WdwbrWVSqI0 5:06 Saramaya
    Lw7a4OHE8aA 4:39 Kumbin
    RQ1ThnewhxY 5:06 Mara Kaso
    aGgpEyq_LLE 4:35 Pula Ku
    7yAAk8469q0 5:01 Komine
    PZ9yL-Eo9wQ 3:48 Manssa Cise
  `,`
    dFS0Dmb3FCk 3:25 The John Renbourn Group - Black Waterside
    pb2pJAronc4 3:27 The John Renbourn Group - Nacht Tanz /Shaeffertanz
    eejS-nVrmks 3:58 The John Renbourn Group - A Maid In Bedlam
    2oZ9N6Ux2cY 3:28 The John Renbourn Group - Gypsy Dance/Jews Dance
    OH8CXSF7Brw 3:24 The John Renbourn Group - Reynardine
    2yRAi4miyvQ 2:47 The John Renbourn Group - My Johnny Was A Shoemaker
    8f3GW0Ztrcs 3:22 The John Renbourn Group - Death And The Lady
    vp_ucWI_DUo 5:50 The John Renbourn Group - The Battle Of Augrham/5 In A Line
    EE61vOWt9wo 3:30 The John Renbourn Group - Talk About Suffering
  `,`
    # lN8Ii1gGqZI 2:10 Tîr Im by The Fellowship
    # XFOzTds_3Qk 2:51 The Longbottom Leaf by The Fellowship
    # PYIOu7CpUAo 4:29 In Elven Lands - Dan Barliman's Jig
    # fPy_RzFd6Vc 2:10 The Silver Bowl by The Fellowship
    # bHqQ_IuApfA 3:03 The Man in the Moon by The Fellowship
    # RLa4mYiLf_0 2:05 Verse to Elbereth Gilthóniel by The Fellowship
    # mpr5vs_aXBk 3:58 In Elven Lands - Elëchoi
    # 2WyK2DbofJo 3:54 Elechoi Mirnu Aglaron
    # 5vd5LyKSDmU 4:20 Elo Elleth by The Fellowship
    # zjiuFe99PA0 5:19 In Elven Lands - Beware The Wolf
    # GSqGC5jsiDQ 6:45 The Battle of Evermore - Performed by The Fellowship
    # IkIr_5UMx5w 5:13 Oromë: Lord of the Hunt by The Fellowship
    # uCoJjv6b_Zw 4:49 The Fellowship - When Dûrin Woke (Official Music Video)
    # r0-K_EcCdEs 3:20 Silmesse by The Fellowship (Official Music Video)
    # PLeECmnHSxg 2:18 J.R.R. Tolkien's "Namárië" - Performed by The Fellowship
    # lpQMgV8sAJ8 2:08 In Elven Lands - Eala Earendel
    QYDu4MlvDeE 3:29 In Elven Lands - Creation Hymn
    # TV4Sn3UTvzM 5:07 The Sacred Stones
    # 3wO8Vf1ADnc 4:44 The Fellowship - In Elven Lands - The Blood of Kings
    # mVCLUBkko9w 4:56 Verses to Elbereth Gilthoniel
    # gF3oD8oUlPo 5:00 Canticle to Elbereth Gilthóniel by The Fellowship
    # uZ6P2-vEhBU 4:06 Evening Star by The Fellowship
    # 1El5LNGvtb0 1:15 Terra Beata by The Fellowship
  `,`
    bitMdn_PbOg 18:24 The Moody Blues - Days Of Future Passed - 1967 Vinyl LP - Side 1
    jktBW1Etu3M 22:42 The Moody Blues - Days Of Future Passed - 1967 Vinyl LP - Side 2
  `,`
    # -lgsCe-fLG4 40:05 The Alan Parsons Project - I Robot (full album)
    EKTcH4xAU-w 21:41 The Alan Parsons Project I Robot Side 1
  `,`
    # Blue Öyster Cult - Cult Classic
    x25KqaNZurQ 5:08 [Don't Fear] The Reaper
    B_MZ_mYr_48 5:15 E.T.I. (Extraterrestrial Intelligence)
    6uwJpQGPs-s 3:11 M.E. 262 (Remastered)
    X_40TO2HeEA 2:46 This Ain't the Summer of Love (Remastered)
    MJFIzb1PMW4 4:29 Burning for You (Remastered)
    0-IkV2Ls0cU 4:54 O.D.'d on Life Itself (Remastered)
    zww3MqiAGb4 6:08 Flaming Telepaths (Remastered)
    eQRoDfQfS0s 3:42 Godzilla (Remastered)
    O08VvzZtwGw 8:47 Astronomy (Remastered)
    2tV-0Ukur9k 4:09 Cities on Flame with Rock 'n' Roll (Remastered)
    w-fT77g0oEw 3:58 Harvester of Eyes (Remastered)
    eYkBaQkIcQ8 6:53 Buck's Boogie (Remastered)
    # Bl5-Oo1bdu8 5:09 [Don't Fear] The Reaper
    # mratO9l3eCE 3:43 Godzilla (Tv Mix Remastered)
  `,`
    # Karen Ashbrook - Hills of Erin
    CavQx4hY8c4 5:24 Good Morning To Your Nightcap - Behind The Haystack
    qx34I_WCCe0 3:08 Connaughtman's Rambles
    H2QP2tV9kQ8 3:05 Over The Moor To Maggie - The Scholar
    OokdITzfDYM 3:11 Slieve Gallen Braes - The Cabin Boy
    HgBfVOxm7x8 6:38 The Two William Davises - Kean O'Hara
    28aNtAY8FFQ 3:06 Master Crowley's
    A1z_ZYEjPYE 3:59 Bank Of Red Roses - The Castle - The Chess Tournament
    lxtqOCXLLP4 3:57 Isabella Burke
    3y4oHjFAq0s 3:01 Gan Ainm - Reaping The Rye
    xwh8H4kLFNQ 5:41 An Comhra Donn - Plains Of Boyle
    g0gGZDYRg-o 3:17 Prelude, Cello Suite #1
    Q_wKNHReSRY 5:44 Fairhaired Child Set
  `,`
    # Chansons de la Renaissance, Disc 1 - Obsidienne
    gAfFLDXrSDE 3:10 Ce jour de l'an voudray joye mener
    kTqCPKEUIbE 3:35 Par droit je puis bien complaindre et gémir - Guillaume Dufay
    hvGGLwQUd7g 4:44 Ma belle dame souveraine
    JCesTMbhtBM 3:42 Ce moys de may soyons lies et joyeux
    qkKjDrvWsao 2:14 Reveslons nous amoureux - Guillaume Dufay
    voXt4SRsD2M 4:38 Le roy anglois
    POxFVsrEZQo 3:11 Hellas il est pic de ma vie
    xzywNs3Xdvw 1:26 Bevons ma commère
    4JSAFhBVL38 3:33 Hellas mon cœur
    M3agM5qYcyg 2:26 Dieu gard celle de déshonneur
    ACPTHR-nibo 2:31 Belle très douce mère
    XiBIAc5P3EM 2:46 Ne l'oseray je dire, se j'ayme par amour ?
    4RVGgBvZqws 5:25 Hellas ma dame que je désire tant
    7647a5w4e_U 2:37 M'erme je n'ay point nom Johanne
    COWB4SHdcz8 2:32 La Dernière Nuictée d'avril - Manuscrit de Bayeux
    KQ8NrwFM0QE 2:13 Jamais amoureux bien n'aira
    pSAOUIzOGyA 4:45 Le grand désir
    wJq1XiaIHYQ 2:24 L'amour de moi si est enclose I
    8WpYxTAcVG0 4:29 Nymphes des bois Déesse des fontaines
    LeSvZoWhRTo 1:34 In te Domine speravi
    Vfr1jWds5Wo 1:08 Scaramella
    tcOH73WSguo 1:10 Vive le roy
  `,`
    # Chansons de la Renaissance, Disc 2 - Obsidienne
    nG2O7b1_FeI 3:51 L'amour de moi si est enclose II
    KHKwJilIEB8 1:50 Autant en emporte le vent
    uKPV-B9RtMA 3:11 Mais que che fut secrétement
    Oi7uFaUCQlE 4:13 Et trop penser
    XL6AOlOj7iM 1:50 Puisque Robin j'ay à nom - Improvisation polyphonique Obsidienne
    dj0WK94Sngs 2:07 Entre Peronne et Saint Quentin
    kZfVqi3Yevc 3:45 Vecy le mai
    Y4M0Qzjw3NM 3:54 Quant je vois renouveler
    D1cPszbdwJU 1:20 Quant je voy renouveller (Improvisation polyphonique)
    Dsu6NRcUJAg 0:40 Le Renvoy I
    n0uou2WA9W8 1:15 Le Renvoy II
    V3ZLEarFJCQ 2:52 On doibt bien aymer l'oyselet (Improvisation polyphonique)
    GNeJZDQbecg 1:27 Joye me fuit et douleur me queurt seure
    pQFpJqz8hgM 4:26 Joye me fuit
    IXubAmvh4wE 3:17 Je ne pourroye plus celer
    sFNtisPqqeU 2:23 Pourquoy non
    Y8iLbMPaXxA 4:14 Helas Olivier Vasselin (Improvisation polyphonique)
    kMt8FHQ4i6k 0:50 Mon mignault musequin I
    xUeUe6S4LhU 2:31 Mon mignault musequin II
    FdFRgtpOGIc 2:34 Dieu la gard la bergerotte (Improvisation polyphonique)
    ImS_S7kITqA 0:30 Amy je prends congé de vous
    SjO5LTMPWxQ 2:10 Kyrie improvisé sur Amy je prends congié de vous I
    ZJ340xw7tYQ 1:37 Forseulement
    AjQ3Z4fpYtM 2:15 Kyrie improvisé sur Amy je prends congié de vous II
    jMZeiwDQ5Tk 2:12 Plaine de dueil
    gbDDTFO54ec 4:26 Ce n'est pas jeu
  `,`
    # Venite a Laudare - Obsidienne
    jtITD1l2GCY 2:59 Venite a laudare, laude
    F6MHIwftZj0 1:41 Kyrie
    VdWM0WgvRtM 4:35 Gloria spiritus et alme
    hauSdKivu6Y 7:41 Credo Je ne vis oncques la pareille
    voy1pYCw9v8 3:01 Dal ciel venne messo novello, laude instrumental
    25c0KwO4U04 2:56 Stomme allegro e latioso, laude
    3dUaPb6Zp6A 2:10 Quando signor Jesu, laude
    UooTqVZSd3U 2:52 Chi vole lo mondo i despreççare, laude
    a9o36yLSslQ 2:40 Benedeto ne sia lo çorno, laude
    ouiMNUbsL6A 1:11 Salve regina de misericordia, laude
    bxS_xI1Z8RI 1:32 Cum desiderio vo cerchando, laude
    bBhCnIBkOcI 2:18 Amor dolçe, laude instrumental
    N1q-PdVwDiE 1:58 Sanctus
    __dJXNdKeDQ 2:26 Motet "Mater Patris"
    MJ3CCyCNEJs 5:04 Agnus Dei
    2vXQFbj7Pik 6:33 Domine ne in furore tuo, motet
    99HpCbnMF2k 2:17 Ave Maria, canon
    w75BoSNlJ2M 2:26 Kyrie, rondeau
  `,`
    # Guillaume de Machaut : Voyage au cœur du Moyen Âge - Obsidienne
    62HkSO_Ovws 2:23 Ma fin est mon commencement - Rondeau - Guillaume de Machaut
    RB0s2UvRLdk 2:35 Dame, se vous m'estes lonteine
    nT6XeItIGlU 11:02 J'aim la flour de valour - Lai de Guillaume de Machaut
    sTT8aGG9tpI 2:07 Le parchet / Sanz cuer men vois
    J0nsONPbgmw 3:17 Dame, a vous sans retollir
    jdf6LLIv1nE 2:26 Moult sui de bonne heure née
    ugwTIDd940E 2:33 Joie plaisence et douce norriture
    F4ItuVhV_Q0 0:53 Pour quoy me bat mes maris
    c6J7OEcrw6I 2:37 Se j'aim mon loyal ami / lasse comment oublieray / pour quoy me bat mes maris
    uvcF4yEYUGM 1:21 Phyton le mervilleus serpent (Texte)
    c4iBeXXDHuA 2:29 Phyton le mervilleus serpent
    4bp2h8-nEgM 2:03 Dame ne regardes pas
    u036Cw2sSCc 3:04 De bonté de valour
    MR2MiV_Kc3U 1:42 J'aim sans penser
    QagJ3YzBgvI 2:21 Je ne cuit pas
    7roN76LtDr0 4:26 Tels rit au main qui au soir pleure
    cfzV327Rzls 1:47 Ite missa est (Messe Notre Dame)
    IIEqhAkGfV8 2:55 Douce dame jolie
    g_qpcyNnxno 4:22 David
    UUODYF0G-1s 3:04 Nes que on porroit les estoiles nombrer
    RFx03DCICPM 1:24 Ma fin est mon commencement (Instrumental)
  `,`
    gaHpnjhVGvI 5:17 Sen calar (arr. C.A. Fulton)
    In7PYhfQ3Kk 2:38 Alborada Gallega
    QjYy6fBWSBs 4:15 Sen meu amigo
    S_2syRuw87E 3:08 Alvorada
    1dXuhU9RGZ0 6:18 Enas verdes ervas
    tuoVTRWJtxQ 2:38 Por Deus
    CNo0CYAWmnM 8:35 Cantiga de Santa Maria 11, "Macar ome per folia" (arr. C.A. Fulton, K. Higginson, S. Kammen and...
    AkMRKKfnwfg 1:41 Levantous' a velida
    MelUCr7TVXs 4:16 Bailemos nos ja todas
    XP3jM0yPupo 5:00 Cantigas de Amigo (arr. for vocal ensemble) : No. 1. Ondas de mar de Vigo
    XPYfy9jp4bw 1:23 Cantigas de Amigo (arr. for vocal ensemble) : No. 2. Mandad' ei comigo
    d4MmgyCqU4g 2:26 Cantigas de Amigo (arr. for vocal ensemble) : No. 3. Mia irmana fremosa
    Eru5th_a0Bc 4:20 Cantigas de Amigo (arr. for vocal ensemble) : No. 4. Ai Deus, se sab' ora meu amigo
    TCP8xZ6dfE0 2:21 Cantigas de Amigo (arr. for vocal ensemble) : No. 5. Quantas sabedes amare amigo
    otrmxo5NyiE 3:46 Cantigas de Amigo (arr. for vocal ensemble) : No. 6. Eno sagrado en Vigo
    XorXlx8VTPE 2:25 Cantigas de Amigo (arr. for vocal ensemble) : No. 7. Ai ondas que eu vin veere
    ksc8DYfSNUU 5:02 Cantigas de Santa Maria: No. 10. Rosa das rosas e Fror das frores (arr. C.A. Fulton)
  `,`
    GZTQ1CVTBCM 4:47 En avril au tens pascour
    zfsTIz1wWCw 3:10 La seconde estampie royal
    tjVTbTYHcEI 2:12 S'Onques nuls hoem
    BUv5x3yUpPs 4:59 Flos pudicitie
    WK19j9k8IFs 7:17 DS 11:11
    vVFRL-dVD7Q 2:16 Danse Royale I
    NjD1Cytp4FY 2:02 Si tost c'amis
    07UvnGUEf54 1:32 Danse Royale II
    aSGq-ZkiswE 2:24 El tens d'iver
    SFGvDXTP1XQ 4:48 Retrove
    MKH9QuD5_lA 6:30 Espris d'ire et d'amour
    _5whdjxlees 4:06 La prime estampie royal
    WSQ6_C6NyP8 2:33 La ultime estampie real, la septime estampie real
    UVdhyWknqJE 3:41 Trop est mes maris jalos
  `,`
    # The Watersons - For Pence and Spicy Ale
    IT3pporiNFI 2:02 The Watersons - Country Life
    3cEPM8LSfBo 5:28 Swarthfell Rocks
    hidOCY-0PZI 3:01 Barney
    eNM4nWMQFXY 2:32 Chickens In The Garden
    VEFHpU7qJfA 3:25 Adieu Adieu
    YONvNt43K4I 2:42 Apple Tree Wassail
    k5u3hJiXQP0 3:44 King Pharim
    h7vyE2ahoMo 3:30 The Watersons - The Good Old Way
    N-K0TIMmHL0 4:44 Lal Waterson, Norma Waterson - Grace Darling
    N_2jr4pDVYM 1:38 Three Day Millionaire
    R3dWcf_y62k 2:20 Swinton May Song
    EW_L2Mswjs8 3:44 The Watersons - T Stands for Thomas
    l7k76ltiQlw 3:18 Welcome Sailor
    W8rBJPMth_U 4:15 Malpas Wassail
    Y9nW0XHhGTc 3:07 The Bonny Lighthorseman
    HLyKF4dvbvE 11:01 Tam Lyn
    Cz9bSMFtrlo 2:23 Sheepshearing
    # 7VZlCTU7Wok 4:17 Seven Yellow Gypsies
    QSALP2o0ZlU 3:34 Beggar Man
    m9ec7bk-xcs 4:28 Swansea Town
    XH-QpfZsHJw 3:57 Bellman
  `,`
    # Music from the Reign of Henry VIII
    891PFtgdW2w 2:31 En vray amour
    7AgesfSWxJY 1:40 If love now reigned
    L2SlgDpi6Bs 1:22 Laissies Parler
    9rRKYeZJXJg 0:53 The Emperor's Pavyn
    cKCLZSQM1VY 1:22 Helas Madame
    XsVOJWi-XDU 1:34 Gentil prince
    SV-12mVuDqQ 1:19 The King's Pavyn
  `,`
    # Dallas Simpson
    M_-7FjNBZIY 8:57 Webster's Raft (Excerpt)
    tmhPr0J-GmM 13:20 Waterpump (Aquapump)
  `,`
    # Erik Ask-Upmark - Himlens Polska
    djwgp9uN484 5:07 Oppningspolskor
    HCTw61XMQLU 3:13 Ornunga
    ASSqu8WpBfA 4:38 Himlens Polska
    16ShSBDcEPM 3:09 Slippolska
    Fn9TvQJx4og 3:27 Andakten
    BtX-t54RRjQ 3:55 Fingerstrackarn
    enEhmRLOJYg 3:46 Flageoletten
    _n68kCrBHHM 4:42 Blekingarna
    QP45DNImiPU 4:22 Florellen
    p7CPysK9bf0 4:50 Allor E'ro A Allor Bir'o
    2TT2eLEnzD8 4:11 Koral Fran Seglora
    FuO_Fx_H2Tc 3:22 Blomgren
    a0ie1T2YeII 6:13 Norsk Brudmarsch
  `,`
    # Yes - Fragile
    cPCLFtxpadE 8:36 Roundabout (2008 Remaster)
    2lXCa6_VH3s 1:43 Cans and Brahms (Extracts from Brahms' 4th Symphony in E Minor, Third Movement) (2008 Remaster)
    7Eo3Bw2qLeI 1:40 We Have Heaven (2008 Remaster)
    hBAauFYod80 7:59 South Side of the Sky (2008 Remaster)
    1bsFH6t8eFw 0:38 Five per Cent for Nothing (2008 Remaster Versioin)
    ZS-k02hf-hI 3:31 Long Distance Runaround (2008 Remaster)
    yxXMJKCI9F0 2:43 The Fish (Schindleria Praematurus) (2008 Remaster)
    1HqlC8XMeoI 3:03 Mood for a Day (2008 Remaster)
    T5XWOOOCg-U 11:33 Heart of the Sunrise (2008 Remaster)
  `],channel3=Object.freeze(Object.defineProperty({__proto__:null,episodes:episodes$3,videos:videos$4},Symbol.toStringTag,{value:"Module"})),episodes$2=[],videos$3=`
T7RnlNbLox0 7:59:58 Clock Ticking - 8 Hours - [CHIMES TWICE - every 30 minutes] - Antique Table Clock
`,channel4=Object.freeze(Object.defineProperty({__proto__:null,episodes:episodes$2,videos:videos$3},Symbol.toStringTag,{value:"Module"})),episodes$1=[`
    # Windham Hill - Celtic Christmas II
    7jOsFtZghxM 3:47 Chanonry Point
    vN8nlmA8RSM 4:33 Amanecer
    dTL7l-7AJxg 3:26 The Wexford Carol
    4VK5-TPlGK8 3:59 Bríd Og Ní Mháille
    yeYa_7s24pg 4:45 The Day's Last Light
    If3peqjJKY0 3:41 Muladach Mi Is Mi Air M'Aineol
    w9y6dWVdBJU 4:49 Listen To The River
    Q2YBArGX4Dc 3:37 After Aughrim's Great Disaster
    nd1ZGC0Bpls 4:26 The Star Of The County Down/Sweeney's Buttermilk/Jenny's Chicken's
    _vVq05JqE9o 3:53 I'll Rock You To Rest
    PB6MYWOao-8 5:24 Johnny Seoighe
    hcOB2m4lBqk 3:01 The Dove's Return
  `,`
    # Mediaeval Baebes - Salva Nos
    rDDLxNxzEDI 1:44 Salve Virgo Virginum
    sOCsdR_6WN0 3:27 Now Springes The Spray
    tm0M-4CphYg 2:19 Ah Si Mon Moine
    qOYqtmhoD6I 3:11 Adam Lay Ibounden
    GT0Tv8lV_cQ 2:09 Foweles In The Frith
    dksrHBToupo 2:30 So Treiben Wir Den Winter Aus
    QcvZoaJfZzQ 4:25 The Coventry Carol
    INAdvWqPsIo 2:18 Gaudete
    EiZ2beT2e9s 2:45 Adult Lullaby
    M273d5c5ezY 5:07 Veni, Veni
    QD_ufu-wUFY 2:46 Salva Nos
    CXkBk8nK5AM 2:35 Verbum Caro
    6KjdJq5-6rw 1:42 Lo, Here My Hert
    s5hVuyRxiD4 2:06 Binnorie O Binnorie
    mm2GN-48QYg 1:43 This Ay Nicht
    KRn4T7HViSE 2:34 Miri It Is
  `,`
    # Anonymous 4 - On Yoolis Night
    NXFLmXkH7dE 1:05 Antiphon: Hodie Christus natus est (chant)
    5eh00mRRI7A 0:50 Motet: O nobilis nativitas - O mira dei - O decus virgineum - Apparuit
    rtT5J1M8nVU 0:30 Antiphon: Lux de luce (chant)
    1xBk1_nwXnY 5:46 Carol: Alleluya: A nywe werke
    Hg6OMTvts10 2:24 Hymn: Verbum supernum prodiens (chant)
    _ujIfrHxzJk 2:35 Motet: Balaam de quo vaticinans - [Ballam]
    uF6M0IN6IKM 2:43 Carol: Ave Maria
    j1BKmltUHiI 3:57 Song: Gabriel, fram heven-king
    dA4MQ-G7o50 2:55 Carol: Lullay: I saw a swete semly syght
    6YNCo97SWrU 2:29 Motet: Prolis eterne genitor - Psallat mater gracie - [Pes]
    FzDk3iRs78M 3:11 Hymn: Vox clara, ecce, intonat (chant)
    cNU06jX1WVE 2:16 Rondellus: De supernis sedibus
    f2bh5_v0xC8 0:39 Antiphon: Omnes de Saba (chant)
    lYFkjeczmdw 1:37 Motet: Puellare gremium - Purissima mater - [Pes]
    OrgpeDMdZ6U 8:06 Carol: Lullay, lullay: Als I lay on Yoolis night
    O7x--Xi_a7U 3:31 Responsory: Tria sunt munera (chant)
    HkQFZ7fWCn8 2:08 Motet: Orto sole serene - Origo viri - Virga Iesse - [Tenor]
    wITBKQsz8Us 4:22 Song: Peperit virgo
    wxUEUGkCumY 4:17 Carol: Ecce quod natura
    5UvpM68xG8M 3:50 Hymn: A solis ortus cardine (chant)
    viDKLF28Rfs 3:39 Carol: Ther is no rose of swych vertu
    qbR2cvv7G2k 0:32 Antiphon: Videntes stellam (chant)
    HFe8iYPZ7BI 4:51 Carol: Nowel: Owt of your slepe aryse
  `,`
    gDcnqyGbVDA 3:15 Un Flambeau, Jeanette, Isabella / Il Est Né, Le Divin Enfant
    oJVAy1gY130 4:05 Infant Holy / I Saw Three Ships / The Builders
    RMyODM7sE5U 3:50 At the Nativity / Bethlehem's Stall
    fffggOXZumA 2:24 Fum Fum Fum / Patapan
    7DPk7XEkZgM 4:56 Christ Is Born In Bethlehem / We'll Speak Very Softly
    r3B-N0erfZU 3:09 O Tannenbaum / Lippai
    gAvx9Gc0ewg 2:37 Lovely Is The Dark Blue Sky / Come Hear The Wonderful Tidings
    SXojyKrljFI 3:58 In Dulci Jubilo / Shepherd's Cradle Song / Canzone D'i Zampognari
    fPiZXHvSLIs 3:30 Gabriel's Message Does Away / Adam And His Helpmate
    a657kxrKqzo 4:32 Masters In This Hall / Wherefore This Great Joy
    Xc9HLhYsRG4 3:47 To Bethlehem / The Message
    fMV9YNuOuoE 1:52 As Lately We Watched
    75sRYWFW_Ds 1:19 Un Flambeau, Jeanette, Isabella
  `,`
    aO2YE_VAGTg 2:46 The Holly Bears a Berry
    IVf3HHMyDkk 2:13 The Wren in the Hurze
    _D8X1JvzTOg 1:46 Christmas Day in the Morning
    Np1NdyIq9os 2:57 Apple Tree Wassail
    QTOQ9htcDi0 4:54 Rafe's Waltz
    sF9sOKwueBs 3:16 Cutty Wren
    ZSR_XKKRyzs 3:01 The Brandevin
    PjlK0xZb3h0 1:41 Arranne Ny Sheeaghyn Troailtagh
    lgBl-DUjISc 2:38 An Dro Nevez
    QY8nQypt7NY 4:51 Gower Wassail
    suNheHOjJQQ 5:58 A Counting Song
    oMKmSZPA998 5:48 Round About Our Coal Fire
    2HOqoAdzRAM 2:49 Nou is Yole Comen
    MF9aDqFGU-g 1:20 Tapster Drynker
    HHoy6ZcoZmA 2:58 Bring Us In Good Ale
  `,`
    # Linn Barnes and Allison Hampton - Holly Eve
    1eVQkKSFsfg 2:20 Tomorrow Shall Be My Dancing Day
    3v63l5jKCAw 2:06 Noel (It Came Upon A Midnight Clear)
    ajMjTrlssss 2:52 In The Bleak Midwinter
    2P2KT1A1rvY 2:16 Ye Shepherds
    Fl7wZaBeaMY 2:39 Still,Still,Still
    lNeoOQ_RIjg 4:16 The Shades of Notre Dame
    r7YeA764BOk 1:45 Love Came Down at Christmas
    ajj2stPkhzo 2:05 Nos Galan (Deck The Halls)
    T5-BnoWgxeg 2:00 All My Heart
    P3oCRXBlP3I 2:12 March of the Kings
    XC4-tlD0Ubc 2:22 Gdy sliczna Panna
    qKrwl2dnDHs 2:50 Adeste Fideles
    l1LtOxk7XoQ 1:31 Noel Nouvelet
    KwauO4-X8q8 3:12 Joseph Dearest
    ej5vNR2p3G0 3:06 Forest Green (Little Town of Bethlehem)
    _sOEUUtFDhc 1:48 Breton Carol
    iZzHudDT4qQ 3:23 La Lune de Noel
    09EZiwd-HGI 2:28 Blessed Be Thou Heavenly Queen
  `,`
    # Linn Barnes and Allison Hampton - Yule
    rHeY4pU7X0Y 2:46 Merrily On High
    BxeBss66wy8 2:45 In Dulci Jubilo
    crDHyC5Weag 4:57 The Castle Keep/Masters in This Hall
    hAFDCKMUxUs 3:29 El Noy De La Mare
    Wl9rqgYaoAE 3:03 The Gower Wassail
    4BsGTlF-KWc 3:11 Once in Royal David's City
    LEG2GaCEhew 2:10 Canarios
    PhCupQOK1Eg 3:25 We Three Kings
    9U2KjmKcM-U 2:54 The Hunt's Up
    yQAeoE-nZLw 2:59 Lo, How a Rose Is Blooming
    QMrfARDE9Vw 1:51 People Look East
    WO-TQyQTQNY 3:27 Drive the Cold Winter Away
    ONIXJEiX1bk 4:12 Villancico De Navidad
    4TxrX52Da2g 3:21 The Wexford Carol
    IKFaZv_q5-4 2:52 Herrick's Carol
    aalsbEiFORE 1:46 Here We Come A-wassailing
    -733I09Wx5o 2:16 Un Flambeau Jeanette Isabella
    imsrlobZkQY 1:53 Green Grow'th the Holly
    LvEWDKIpcuU 2:09 Blessed Be That Maid Marie
  `,`
    # Linn Barnes and Allison Hampton - Lute, Harp and Guitar: a Midwinter Celebration
    U3YUz1pfCjU 2:33 LUTE , HARP & GUITAR - MASTERS IN THE HALL - A MIDWINTER CELEBRATION - BARNES & HAMPTON - TRACK 1
    GOND02JMUTY 4:26 LUTE , HARP & GUITAR - DONA NOBIS PACEM - A MIDWINTER CELEBRATION - BARNES & HAMPTON - TRACK 2
    IqerYWluoSM 3:06 LUTE , HARP & GUITAR - NONESUCH - A MIDWINTER CELEBRATION - LINN BARNES & ALLISON HAMPTON - TRACK 3
    rDzkkalsBto 2:14 LUTE , HARP & GUITAR - O COME , O COME EMANUEL - A MIDWINTER CELEBRATION - BARNES & HAMPTON TRACK 4
    3Q8JxdAHS2Y 3:01 LUTE , HARP & GUITAR - LORD OF THE DANCE - A MIDWINTER CELEBRATION - BARNES & HAMPTON - TRACK 5
    WGRWFmRxwiw 2:56 LUTE , HARP & GUITAR - ECHO - A MIDWINTER CELEBRATION - LINN BARNES & ALLISON HAMPTON - TRACK 6
    ViNW897k17Y 3:32 LUTE , HARP & GUITAR - SNOWDANCE - A MIDWINTER CELEBRATION - LINN BARNES & ALLISON HAMPTON - TRACK 7
    v8c6Zi6n7CA 3:29 LUTE , HARP & GUITAR - WHEN CHRIST WAS BORN - A MIDWINTER CELEBRATION - BARNES & HAMPTON - TRACK 8
    DE9aOUZocP8 2:07 LUTE , HARP & GUITAR - COVENTRY CAROL - A MIDWINTER CELEBRATION - BARNES & HAMPTON - TRACK 9
    8ORi3iBuDyk 3:08 LUTE , HARP & GUITAR - JESU JOY OF MAN'S DESIRING - A MIDWINTER CELEBRATION - TRACK 10
    yioLtohNFWQ 2:39 LUTE , HARP & GUITAR - THE HOLLY AND THE IVY - A MIDWINTER CELEBRATION - BARNES & HAMPTON - TRACK 11
    nqnP7J9sEac 2:29 LUTE , HARP & GUITAR - ABBOTS BROMLEY HORNDANCE - A MIDWINTER CELEBRATION - BARNES & HAMPTON - TK 12
    Ka3EoTDolVo 1:52 LUTE , HARP & GUITAR - SAINT BASIL'S HYMN - A MIDWINTER CELEBRATION - BARNES & HAMPTON - TRACK 13
    7zo5K-1BdI8 2:41 LUTE , HARP & GUITAR - GAUDETE - A MIDWINTER CELEBRATION - LINN BARNES & ALLISON HAMPTON - TRACK 14
  `,`
    # Linn Barnes and Allison Hampton - Wassail
    dNS3aXo6yRo 1:45 Gloucestershire Wassail
    EeaqAYye4xU 2:21 Sussex Carol
    NK66Aq5e5W0 2:49 How Far Is It to Bethlehem
    7bwbw-vmES8 2:10 The Cuckoo
    tfcS0jSKgOU 2:20 King Herod and the Cock
    XzdN-J3B86w 2:26 The Somerset Wassail
    FpRvuwzS0Ok 2:02 The Christ Child's Lullaby
    YeZIfzrtSWI 2:47 Angels We Have Heard On High
    ivfAPoTR0MM 2:31 Personent Hodie
    hTOvoPVK9vk 3:00 Down in Yon Forest
    O9akWnbPBn8 5:03 The Wren Suite: Please to See the King/the Wren Song/the Wren's
    vrmRggNaIgk 2:37 O Little One Sweet
    z9_EV0gPUTY 3:19 God Rest Ye Merry Gentlemen
    5LT8d-9cXGU 2:34 Rorate
    gnbXFqXAeSg 3:55 Greensleeves
    xACpwasnrwM 2:00 Past Three O'clock
    ybBmoLLEcog 3:25 Silent Night
    LMFn6YIPja4 3:53 Angelus Ad Virginum
  `,`
    yzGFPQQj9BQ 33:48 Nat King Cole - "King Of Christmas"
  `,`
    # Bing Crosby Christmas Classics
    At0gAwAvFeA 1:35 White Christmas (Remastered 2006)
    kz65UdsF45k 2:51 Have Yourself A Merry Little Christmas (Remastered 2006)
    ngJPlhrd_Iw 2:25 Winter Wonderland (Remastered 2006)
    kYUljI4Skjw 3:21 What Child Is This/The Holly And The Ivy (Medley / Remastered 2006)
    # cag2FvYwuZs 3:01 The Little Drummer Boy (Remastered 2006)
    k_LqjLzQWkc 3:35 O Holy Night (Remastered 2006)
    # WGfno5hoyXY 4:01 The Littlest Angel (Remastered 2006)
    mEcyvuVyuZg 2:06 Let It Snow! Let It Snow! Let It Snow! (Remastered 2006)
    VnC_BtuXwBM 3:07 Hark! The Herald Angels Sing/It Came Upon A Midnight Clear (Medley / Remastered 2006)
    # m-cNrbbT7_8 2:14 Frosty The Snowman (Remastered 2006)
    # MKMgBPZ_Zxk 2:16 Rudolph The Red-Nosed Reindeer
    WXERRcpXRiA 1:56 I Wish You A Merry Christmas (Remastered 2006)
    FhTnDaEmA5k 2:46 Do You Hear What I Hear? (Remastered 2006)
    sLBDE8VJeHo 2:53 Pat-A-Pan/While Shepherds Watched Their Flocks By Night (Medley / Remastered 2006)
    rkN6O2piD8s 2:30 Christmas Dinner, Country Style (Remastered 2006)
  `,`
    # Ensemble Alcatraz with Kitka - Cantigas de Amigo
    gaHpnjhVGvI 5:17 Sen calar (arr. C.A. Fulton)
    tuoVTRWJtxQ 2:38 Por Deus
    CNo0CYAWmnM 8:35 Cantiga de Santa Maria 11, "Macar ome per folia" (arr. C.A. Fulton, K. Higginson, S. Kammen and...
    MelUCr7TVXs 4:16 Bailemos nos ja todas
  `],videos$2=`

A8eWaR8ONvw 2:05 Nat King Cole - "The Christmas Song"

N8NcQzMQN_U 3:04 José Feliciano - Feliz Navidad (Official Audio)

wJq1XiaIHYQ 2:24 L'amour de moi si est enclose I
nG2O7b1_FeI 3:51 L'amour de moi si est enclose II
POxFVsrEZQo 3:11 Hellas il est pic de ma vie
jtITD1l2GCY 2:59 Venite a laudare, laude
voy1pYCw9v8 3:01 Dal ciel venne messo novello, laude instrumental
# CThjvN0snQ4 2:46 YULE - In Dulci Jubilo - Celtic Harp , Guitar , Lute
# N5IG0874s2Q 2:24 WASSAIL - Sussex Carol - Celtic Harp , Guitar and Lute
Ao0CtiGxVHE 2:14 THE CELTIC CONSORT - Ev Chistr LAOU - Celtic Harp , Lute and Guitar
# 9G2O-DkEl8U 2:28 WASSAIL - The Somerset Wassail - Celtic Harp , Guitar and Lute
# gPXyqZPwsWU 2:03 WASSAIL - Past Three O'Clock - Celtic Harp , Lute and Guitar
PnIHkDXsnNk 3:26 HOLLY EVE - La Lune de Noel - Celtic Harp , Lute and Guitar
# YwtCCEquNmc 3:03 WASSAIL - Down In Yon Forest - Celtic Harp , Guitar and Lute
# -cPHy2MCVtw 1:54 YULE - Green Grow'th The Holly - Celtic Harp , Guitar , Lute
# ovGlf8Gwwhk 2:53 YULE - Herrick's Carol - Celtic Harp , Guitar , Lute
rVXtxklc8-Y 3:02 THE CELTIC CONSORT - The Snowy Breasted Pearl - Celtic Harp , Lute and Guitar
ca0iTvacifs 2:52 THE CELTIC CONSORT - Hewlett - Celtic Harp , Lute and Guitar
1-ffeCSrNhY 2:31 HOLLY EVE - Blessed Be Thou Heavenly Queen - Celtic Harp , Lute and Guitar
# sJUwQVcnOvY 2:26 CHRISTMAS DAY IN THE MORNING - THE GOWER WASSAIL - A REVELS CELEBRATION - TRACK 1
# JP8sTCyKh0w 1:21 CHRISTMAS DAY IN THE MORNING - JOLLY OLD HAWK - A REVELS CELEBRATION - TRACK 2
# 36UCY97HMBI 3:36 CHRISTMAS DAY IN THE MORNING - COUNTRY DANCES - A REVELS CELEBRATION - TRACK 3
# f8whNrSNUaA 1:40 CHRISTMAS DAY IN THE MORNING - KING HEROD AND THE COCK - A REVELS CELEBRATION - TRACK 4
# M3wMhL081g0 1:50 CHRISTMAS DAY IN THE MORNING - I SAW THREE SHIPS - A REVELS CELEBRATION - TRACK 5
# ji6gl8lmhxU 1:58 CHRISTMAS DAY IN THE MORNING - LILLIBURLERO - A REVELS CELEBRATION - TRACK 6
# bpusZOOadvU 2:24 CHRISTMAS DAY IN THE MORNING - WHILE SHEPHERDS WATCH'D THEIR FLOCKS - A REVELS CELEBRATION - TRACK 7
# RfgqXcgzhVs 4:40 CHRISTMAS DAY IN THE MORNING - SPERED HOLLVEDEL - A REVELS CELEBRATION OF WINTER SOLSTICE - TRACK 8
# fCtMBsy9fVk 3:38 CHRISTMAS DAY IN THE MORNING - ESTAMPIE - A REVELS CELEBRATION OF THE WINTER SOLSTICE - TRACK 9
# Qe_nwyWMFa8 2:41 CHRISTMAS DAY IN THE MORNING - THE WEXFORD CAROL - A REVELS CELEBRATION - WINTER SOLSTICE - TRACK 10
# 9pBACRxcNNQ 1:14 CHRISTMAS DAY IN THE MORNING - PLEASE TO SEE THE KING - A REVELS CELEBRATION - TRACK 11
# _rjZqg-nP3A 2:26 CHRISTMAS DAY IN THE MORNING - PERSONENT HODIE - A REVELS CELEBRATION OF WINTER SOLSTICE - TRACK 12
# j7pMlxnP6o4 2:22 CHRISTMAS DAY IN THE MORNING - ANGELUS AD VIRGINEM - A REVELS CELEBRATION - TRACK 13
# sqcYIiceRRk 1:50 CHRISTMAS DAY IN THE MORNING - GREEN GROW'TH THE HOLLY - A CELEBRATION OF WINTER SOLSTICE - TRACK 14
# ihFwOsBl2vA 1:24 CHRISTMAS DAY IN THE MORNING - WELCOME TO OUR SAVIOR - A REVELS CELEBRATION - TRACK 15
# 8sc4yKIAgO0 2:09 CHRISTMAS DAY IN THE MORNING - THE CHRIST CHILD'S LULLABY - A REVELS CELEBRATION - TRACK 16
# yFkOaNIIIDM 2:21 CHRISTMAS DAY IN THE MORNING - THE FIRST NOWELL - A REVELS CELEBRATION OF WINTER SOLSTICE - TRACK 17
# dM0Ce_JMdI4 3:24 CHRISTMAS DAY IN THE MORNING - BRIGHTEST AND BEST - A REVELS CELEBRATION - TRACK 18
# izUPtQZ4sfs 1:44 CHRISTMAS DAY IN THE MORNING - WE'VE BEEN A WHILE A-WANDERING - A REVELS CELEBRATION - TRACK 19
# rxbCDYtN0iE 1:00 CHRISTMAS DAY IN THE MORNING - DAME , GET UP AND BAKE YOUR PIES - CELEBRATION OF WINTER - TRACK 20
# j0VQMHOF_80 2:50 CHRISTMAS DAY IN THE MORNING - THE BACCA PIPES JIG - A CELEBRATION OF THE WINTER SOLSTICE - TRACK 21
# sr5riC9fvsw 2:28 CHRISTMAS DAY IN THE MORNING - MILFORD - A REVELS CELEBRATION OF THE WINTER SOLSTICE - TRACK 22
# _48s52ku3Pc 2:36 CHRISTMAS DAY IN THE MORNING - GOD REST YOU MERRY - A REVELS CELEBRATION - TRACK 23
# Dy6m7vmnqys 2:23 HOLLY EVE - Tomorrow Shall Be My Dancing Day - Celtic Harp , Lute and Guitar
# FjfPGaUKZbw 2:23 WASSAIL - King Herod And The Cock - Celtic Harp , Guitar and Lute
# z-YdaWydcRI 2:13 Wassail - The Cuckoo - Celtic Harp , Guitar and Lute
# nXWx8bpB0yo 2:12 YULE - Blessed Be That Maid Marie - Celtic Harp , Guitar , Lute
# Ai3fQdFIAao 2:17 YULE - Bring A Torch Jeanette Isabella - Un Flambeau Jeanette Isabella - Celtic Harp , Guitar , Lute
# Buld-HMlF1s 1:48 YULE - Here We Come A Wassailing - Celtic Harp , Guitar , Lute
# 5hkRgVSwXxY 3:23 YULE - The Wexford Carol - Celtic Harp , Guitar , Lute
# CC2-oddbWk8 4:14 YULE - Villancico De Navidad - Celtic Harp , Guitar , Lute
# rCSiS3N5BZY 2:56 YULE - The Hunt's Up - Celtic Harp , Guitar , Lute
# uaLiXuSFhqs 2:11 YULE - Canarios - Celtic Harp , Guitar , Lute
# wCRRqXhKkvM 3:13 YULE - Once In Royal David's City - Celtic Harp , Guitar , Lute
# znzni7IxV3w 3:05 YULE - The Gower Wassail - Celtic Harp , Guitar , Lute
# -5dMtY2m_ZA 3:30 YULE - El Noy de la Mare - Celtic Harp , Guitar , Lute
# lYranzubajU 4:59 YULE - The Castle Keep / Masters In The Hall - Celtic Harp , Guitar , Lute
# okG9573LHtY 1:51 KEMPER CRABB - WHAT CHILD IS THIS - A MEDIEVAL CHRISTMAS - TRACK 1
# igAT2mamGD4 4:00 KEMPER CRABB - DOWN IN YON FORREST - A MEDIEVAL CHRISTMAS - TRACK 2
# NdhjU4mR8d8 4:41 KEMPER CRABB - O COME , O COME EMMANUEL - A MEDIEVAL CHRISTMAS - TRACK 3
# 8EVSJZHg6_U 2:17 KEMPER CRABB - ES KOMMT EIN SCHIFF - A MEDIEVAL CHRISTMAS - TRACK 4
# mG2tjrYjLiY 3:29 KEMPER CRABB - DIVINUM MYSTERIUM - A MEDIEVAL CHRISTMAS - TRACK 5
# Be6mKWa4k9U 2:30 KEMPER CRABB - WESSEX CAROL - A MEDIEVAL CHRISTMAS - TRACK 6
# BKlwgGoHNaw 2:30 KEMPER CRABB - COVENTRY CAROL - A MEDIEVAL CHRISTMAS - TRACK 7
# RATTwWEi5yw 3:24 KEMPER CRABB - LET ALL MORTAL FLESH - A MEDIEVAL CHRISTMAS - TRACK 8
# yQSrrEzy_Wo 3:30 KEMPER CRABB - GOOD KING WENCESLAUS - A MEDIEVAL CHRISTMAS - TRACK 9
# WOq9H77Kxnk 11:03 KEMPER CRABB - GOD REST YE MERRY GENTLEMEN - A MEDIEVAL CHRISTMAS - TRACK 10
Xth3IpWc3Fg 4:35 SINFONYE - GABRIEL FRAM EVENE KING - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 1
GKXnvjWxXyE 2:56 SINFONYE - SALVA NOS , STELLA MARIS - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 2
TGctg-r8ODs 4:26 SINFONYE - MIRI IT IS - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 3
o8zbyIYQoV8 1:41 SINFONYE - SALVE , VIRGO VIRGINUM - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 4
NekVCJivblE 1:20 SINFONYE - AVE MARIA , VIRGO VIRGINUM - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 5
JGHjqXCCDOs 2:35 SINFONYE - PROCEDENTI PUERO - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 6
iCLafWSZsuA 2:00 SINFONYE - ECCE MUNDI GAUDIUM - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 7
HIcnhw00M3Q 1:41 SINFONYE - UT IAM CESSET CALAMITAS- MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 8
gKNm2uUvUsI 2:12 SINFONYE - GABRIEL FRAM EVENE KING - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 9
jg65EHOKTuw 5:27 SINFONYE - UNTITLED INSTRUMENTAL PIECE - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 10
TTc51FIIe28 3:34 SINFONYE - VIDE MISER ET IUDICA / WYNTER - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 11
n4TpyXjec1E 6:48 SINFONYE - ESTAMPIE - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 12
jzT_YJ9lKPU 4:48 SINFONYE - THER IS NO ROSE OF SWYCH VERTU (part 1)- MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 13
YjlxrAoEPkI 2:22 SINFONYE - THER IS NO ROSE OF SWYCH VERTU (part 2) - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 14
Z199VURxcQs 10:51 SINFONYE - LOLAY LOLAY - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 15
RAUH2QxYPG0 7:22 SINFONYE - NOWELL , NOWELL , NOWELL! - MEDIEVAL ENGLISH CHRISTMAS MUSIC - TRACK 16
# xDPbWnjsRuE 2:16 CANZONE DEI ZAMPOGNARI - Christmas Music from the Freiburg Minster
# aBTT1UDcc-k 3:03 CHRISTMAS ROSE - Pat A Pan - Bronn Journey - Celtic Harp
# Ke3uJoJqpkM 3:00 YULE - Lo How A Rose Is Blooming - Celtic Harp , Guitar , Lute
YIoG54HzlCw 2:28 THE CELTIC CONSORT - Planxty O'Rourke - Celtic Harp , Lute and Guitar
# lvoZ3Wp0K9k 2:33 WASSAIL - Personent Hodie - Celtic Harp , Guitar and Lute
# HPuZoAENMFw 4:02 JE ME SUIS LEVE PAR UN MATINET - Christmas Music from Freiburg Minster
A6_WTYqHf0c 1:34 HOLLY EVE - Noel Nouvelet - Celtic Harp , Lute and Guitar
# ZVKkVF4YkUc 2:47 YULE - Merrily On High - Celtic Harp , Guitar , Lute
# hkYHL6LlEM0 4:03 A MINUIT FUT FAIT UN REVEIL / LAISSEZ PAITRE VOS BESTE - Christmas Music from Freiburg Minster
67iPFUzmYkc 5:45 THE CELTIC CONSORT - Country Dance Medley - Celtic Harp , Lute and Guitar
9yhe7Tl5H_g 3:41 CHRISTMAS ROSE - Huron Carol - 'Twas In The Moon Of Wintertime - Bronn Journey - Celtic Harp
# AJuaLHRjhGo 4:39 IN DULCI JUBILO - Christmas Music From Freiburg Minster
# nMU5Jo5Mh6A 1:48 WASSAIL - Gloucestershire Wassail - Celtic Harp , Guitar and Lute
c0xHRjtYZPQ 1:51 HOLLY EVE - Breton Carol - Celtic Harp - Lute and Guitar
XbgAUuMaR2g 2:24 HOLLY EVE - Gdy sliezna Panna ( As The Lovely Maiden ) - Celtic Harp , Lute and Guitar
# CyfPuiSosc8 3:26 YULE - We Three Kings - Celtic Harp , Guitar , Lute
# IqAAOVu1MyA 4:51 RECERCARDAS OTTAVA - Christmas Music from the Freiburg Minster
JfncJavzoB8 4:16 Gloucestershire Wassail
VdO-7_NRa-g 42:36 Christmas Music of the 15th and 16th Centuries
cKMu6b2Ls8s 51:29 Christmas at the Time of Praetorius
eW79ejQcrDo 51:44 A Baroque Christmas
r7adETaOYiQ 1:30 The Boar's Head Carol
2AjFT4Rcp_U 3:41 Cantiga De Santa Maria, No.48
viDKLF28Rfs 3:38 Carol: Ther is no rose of swych vertu

# Celtic Christmas III
# pgaiDhAqQ44 3:45 The Wexford Carol
# 9Mk8QHA9V3A 3:53 Angels In The Snow
# 8K8UTaiNX2g 3:42 Lully Lullay
# SUPhRLA_YFU 4:46 Circle Of Joy
# PTOEoRzG_D4 4:46 Sails Of Galway
# XPmJmLmIHmU 3:35 The South Wind
# A1T76harrKo 4:09 A Raven In The Snow
# 5FLXVSLyucI 3:37 The Snows
# Od1wf7XvJHU 4:51 Home
# GvveCAnh97w 5:40 Lament
# b_kavTJhfPk 5:06 Sister Moon
# sG7s5hUryzk 3:52 Maiden Dance
# 7ABzGGcpHik 4:36 Fields of Gold
# ATWktqTDlCg 4:36 Nightingale
# jpD4TAPUrdM 4:31 Branwin's Secret
# jQkkIKtsSIs 3:54 The Shine Of A Shane
# IYnvN2Ubb5k 4:41 Crimson Morn
# AY3DSuA92f0 5:01 A Gentle Place
# ppZTePgt5p8 5:02 Way Of The World
# pQT6swI1IAM 4:17 Gossamer Heart
# o7fD3rys1TQ 4:59 Lake Of Dreams
# OssyaZNYN64 5:46 O Come O Come Emmanuel
# Z1j65-WiKFo 4:11 God Rest Ye Merry, Gentlemen
# 75Uxnqr4N1g 3:39 The First Noél
# UxjDLhAQHsI 3:14 Hey Ho, Nobody’s Home
# roXhc0Yy8KM 3:56 Away In a Manger
# IJW1uJ-cgwU 4:27 I Wonder As I Wander
# vg9uk7-qVLs 3:44 St. Basil’s Hymn
# 8LJdZSR64kM 2:34 Deck the Halls
# Jq5kYhXQsiQ 4:25 We Three Kings of Orient Are
# YrjDMptr4eI 2:47 Gaudete
# NnRI7QyU3WQ 2:59 Entre le boeuf et l’ ane gris
# 3h77jLw8W80 4:50 Silent Night
# bh73TSEHTyk 3:28 Coventry Carol
# U1ikJQI9rGc 3:48 The Flight Into Egypt
# tLbGK5-juYI 5:08 Strathglass
# JGQUl84J304 4:20 The Green Fields Of Amerikay
# q7Cl7utRbnI 3:39 By The River Shannon
# T_lG1Zlu5rA 3:26 Ga Gréine
# rOMxFuudX1A 3:11 Flow Gently Sweet Afton
# Ab4VfUz8KO8 6:34 Barbara Allen
# qo5ZF3gmqc4 4:02 The Heron
# -LUmPeXAeWw 4:34 Carolan's Farewell
# LhH6rXI5hsE 4:44 No Room at the Inn
# 4AuGUFoirY0 3:59 Down The Chimney
# Z5tD-cjZUpI 3:14 Here We Come A-Wassailing
# 0xq4lyan4UQ 3:44 Deck the Halls
# Cj9ORqxf7io 3:55 Coventry Carol
# nsrZ2-s0lKU 2:51 Love Came Down at Christmas
# PaS0qJL_HHc 3:14 Joy to the World
# fwNqd-yTdpE 4:58 Greensleeves
# gt9yj7F1EYo 3:41 Santa Claus Is Coming to Town
# lt4DS_Z4U_I 3:20 Christmas in Killarney
# CzzpmCWuyEk 3:26 Adeste Fidelis
# rp3cDcVH8u0 4:11 Sussex Carol
# BekklrlUf1c 3:35 The Holly She Bears a Berry
# 4fgwV3QKlBQ 3:53 Silver Bells
# fnuqX_Z9L90 3:55 The Wexford Carol
# hia_n-Xik28 3:44 It Came Upon a Midnight Clear
# iFsVQiiOXoA 4:10 Once in Royal David's City
# Kd7Lym48H9M 3:53 Lo, How a Rose Ere Blooming
# mF-UUbI9Glo 4:46 In the Bleak Midwinter
# WNHt9_1oehk 4:16 Sìor-Uaine (Evergreen)
# ntqAJAbYFtE 3:49 Derdriu
# smGClMb5dkA 5:09 Airdí Cuan
# ItRr7UsuUww 3:48 Sweeney's Buttermilk
# dCLiiL-sM1A 5:07 Cradle Song
# NBllWsdc1m8 4:11 Morning Star
# sF-d4WuXkrM 2:57 Ar Droim Na Gaothe
# RSTzacJwOOE 3:32 Whiter Than Snow
# s_1D1A4JGYw 4:27 St. Stephen's Green
# JjIkeO7Pe3g 2:49 December Rain
# rmyRBNcQAmM 3:02 Kitty Magennis
# 0z0_ZsNZmos 2:43 Christmas Time's A Comin'

# The Watersons
YONvNt43K4I 2:42 Apple Tree Wassail
h7vyE2ahoMo 3:30 The Watersons - The Good Old Way
W8rBJPMth_U 4:15 Malpas Wassail
k5u3hJiXQP0 3:44 King Pharim
R3dWcf_y62k 2:20 Swinton May Song

LzP5xGcKa1k 4:14 Peter Blanchette, "Si Beag Si Mor"
`,christmas=Object.freeze(Object.defineProperty({__proto__:null,episodes:episodes$1,videos:videos$2},Symbol.toStringTag,{value:"Module"})),episodes=[`
  Z890lqjBkq4 0:00-1:02
  ATorS9krpDU 0:26-2:31 The Muppet Show - 108: Paul Williams - “All Of Me” (1976)
  Z890lqjBkq4 1:06-1:20
  tYeqksmmCAY 0:13-1:14 The Muppet Show - 223: John Cleese - Gonzo’s Stunt: Cannonball (1978)
  Gjz8oE4c8VQ 2:39 The Muppet Show - 223: John Cleese - Backstage #3 (1978)
  Z890lqjBkq4 1:24-1:47
  WktUcZVPGho 0:02-2:53 The Muppet Show - 118: Phyllis Diller - “Hugga Wugga”/“You Are My Sunshine” (1976)
  Z890lqjBkq4 1:51-2:06
  0nCfIA_Yy5U 0:50 The Muppet Show - 118: Phyllis Diller - Muppet Labs: Exploding Clothes (1976)
  Z890lqjBkq4 2:08-2:14
  q4BhmKStq1c 1:45 The Muppet Show - 205: Judy Collins - Planet Koozebane: Koozebanian Phoob (1978)
  Z890lqjBkq4 2:17-2:30
  mIJdUHY_tlo 0:20-1:08 The Muppet Show - 204: Rich Little - “Tea for Two” (1978)
  Z890lqjBkq4 2:34-2:51
  wHW-mOvh-Z0 1:16 The Muppet Show - 112: Peter Ustinov - “You Do Something To Me” (1976)
  Z890lqjBkq4 2:54-2:59
  H3Cq4Qk_mS8 0:51 The Muppet Show - 207: Edgar Bergen - Gonzo’s Stunt: Brick (1978)
  Z890lqjBkq4 3:02-3:23
  ZNdY-cm9l2Y 1:54 The Muppet Show - 206: Nancy Walker - A man listens to the singing of several birds (1978)
  Z890lqjBkq4 3:25-3:38
  vi8S0Fab2BI 0:14-1:53 The Muppet Show - 306: Jean Stapleton - “I’m Just Wild About Harry” (1978)
  Z890lqjBkq4 3:42-4:11
  ZJKF1f9TMO4 2:28 The Muppet Show - 506: Brooke Shields - “Jabberwocky” (1980)
  Yo2gdnPU2yU 2:01 The Muppet Show - 208: Steve Martin - UK Spot: Gonzo and Yolanda (1977)
  Z890lqjBkq4 4:13-4:33
  GEp_7UetpUE 0:45-2:03 The Muppet Show - 109: Charles Aznavour - “I Feel Pretty” (1976)
  Z890lqjBkq4 4:37-4:51
  H3Yxyjo8WiU 2:01 The Muppet Show - 217: Julie Andrews - At The Dance/“Won’t Somebody Dance With Me” (1978)
  Z890lqjBkq4 4:55-5:04
  wz4KphWTVUE 0:15-3:30 The Muppet Show - 211: Dom DeLuise - Planet Koosebane: Merdildops (1977)
  ZeBdhrNvZKM 0:41-2:50 The Muppet Show - 119: Vincent Price - “I’ve Got You Under My Skin” (1977)
  Z890lqjBkq4 5:14-5:36
  wE6sRJHGY6A 2:26 The Muppet Show - 324: Cheryl Ladd - Gonzo’s Stunt: Hypnotizing (1979)
  Z890lqjBkq4 5:39-5:47
  U67_apsJvvg 0:10-2:43 The Muppet Show - 119: Vincent Price - “You’ve Got a Friend” (1977)
  Z890lqjBkq4 5:50-5:56
  GNhx2udfVNA 0:11-0:50 The Muppet Show - 101: Juliet Prowse - Gonzo’s Stunt: Eating a Rubber Tire (1976)
  4JE6YEjbMkc 0:04-0:39 Gonzo stops taxi - The Great Muppet Caper
  S3LFe3N8VGc 1:01 The Muppet Show - 301: Kris Kristofferson & Rita Coolidge - Gonzo’s Stunt: Piano (1978)
  YkuC2-HP8EY 0:21-1:12 The Muppet Show - 504: Shirley Bassey - “Liebesträume” (1980)
  JG0nkfcuULM 0:43 The Muppet Show - 222: Teresa Brewer - Gonzo’s Stunt: Shakespeare (1978)
  ElKK24cVzLk 1:37 The Muppet Show - 410: Kenny Rogers - Gonzo’s Stunts: Catapult (1979)
  bGVxW8J_LjI 1:07 The Muppet Show - 217: Julie Andrews - Gonzo’s Stunt: “Eine Kleine Nachtmusik”(1978)
  xkdVWkAZryc 1:01 The Muppet Show - 217: Julie Andrews - Backstage #2 (1978)
  x27pFBKEYoI 0:17-1:13 The muppets take manhattan
  Z890lqjBkq4 6:45-6:58
  iVJhbjJ9Ke4 2:51 The Muppet Show - 209: Madeline Kahn - Backstage #4/“Wishing Song” (1977)
  Z890lqjBkq4 7:01-7:14
  jJDFV9o-HKc 1:18 The Muppet Show - 504: Shirley Bassey - “Isn’t This a Lovely Day” (1980)
  Z890lqjBkq4 7:17-7:48
  Vo3LHOM5Ed8 1:27 The Muppet Show - 217: Julie Andrews - Talk Spot (1978)
  Z890lqjBkq4 7:54-8:00
  IyG3PL5V490 2:37 The Muppet Show - 107: Florence Henderson - Planet Koozebane (1976)
  Z890lqjBkq4 8:03-8:15
  gjsetOXNQHQ 2:06 The Muppet Show - 409: Beverly Sills - UK Spot: “Muppera” (1979)
  Z890lqjBkq4 8:19-9:11
`],videos$1=`
`,channelDebug=Object.freeze(Object.defineProperty({__proto__:null,episodes,videos:videos$1},Symbol.toStringTag,{value:"Module"}));function isEmpty(s){return s.length===0}__name(isEmpty,"isEmpty");function map(f){return array=>array.map(f)}__name(map,"map");function trim(s){return s.trim()}__name(trim,"trim");function episode(videos2){return{videos:videos2}}__name(episode,"episode");function duration({start,end}){return end-start}__name(duration,"duration");function videoDuration(video){return video.segments.map(duration).reduce(add$3,0)}__name(videoDuration,"videoDuration");const add$3=__name((a,b)=>a+b,"add$3");function allEpisodes({videos:videos2,episodes:episodes2}){return[...parseEpisodes(episodes2),...parseVideos(videos2).map(singleVideoEpisode)]}__name(allEpisodes,"allEpisodes");const parseEpisodes=map(raw=>episode(parseVideos(raw)));function parseVideos(raw){return raw.split(/\n+/).map(trim).filter(not(isComment)).filter(not(isEmpty)).map(line=>split(/ +/,line,3)).flatMap(([videoId,rawTimeWindow,title])=>rawTimeWindow==="SHORTS"?[]:[{videoId,segments:parseSegments(rawTimeWindow),title}])}__name(parseVideos,"parseVideos");function singleVideoEpisode(v2){return episode([v2])}__name(singleVideoEpisode,"singleVideoEpisode");function entireVideo(duration2){return{start:0,end:duration2}}__name(entireVideo,"entireVideo");function range(start,end){return{start,end}}__name(range,"range");function isComment(line){return line.startsWith("#")}__name(isComment,"isComment");function parseSegments(raw){return raw.split(",").map(parseSegment)}__name(parseSegments,"parseSegments");function parseSegment(raw){const parts=raw.split("-");return parts.length===1?entireVideo(parseDuration(parts[0])):range(parseDuration(parts[0]),parseDuration(parts[1]))}__name(parseSegment,"parseSegment");function parseDuration(raw){const multipliers=[1,60,3600,86400],parts=raw.split(":").map(n2=>parseInt(n2,10)).reverse();return zip(parts,multipliers).map(([p2,m2])=>p2*m2).reduce(add$2,0)}__name(parseDuration,"parseDuration");function split(delim,s,limit=1/0){if(typeof delim=="string"&&delim.length===0)throw"split(): empty delimiter not supported";const parts=[];let rest=s;for(;parts.length<limit-1&&rest.length>0;){const match=rest.match(delim);if(match==null)break;parts.push(rest.slice(0,match.index)),rest=rest.slice((match.index??0)+match[0].length)}return parts.push(rest),parts}__name(split,"split");function zip(a,b){const ret=[];for(let i=0;i<a.length&&i<b.length;i++){const tuple=[a[i],b[i]];ret.push(tuple)}return ret}__name(zip,"zip");function add$2(a,b){return a+b}__name(add$2,"add$2");const debug=window.ENVIRONMENT==="development",channelData=[["Channel 1","shuffle",channel1],["Channel 2","shuffle",channel2],["Channel 3","shuffle",channel3],["Channel 4","shuffle",channel4],["🎄","shuffle",christmas],debug?["debug","shuffle",channelDebug]:null,debug?["segments","test-segment-boundaries",channel1]:null],channels$1=channelData.filter(nonNull).map(([name,algorithm,module])=>[name,algorithm,allEpisodes(module)]);function nonNull(x2){return x2!=null}__name(nonNull,"nonNull");function useInterval(cb2,ms){const intervalRef=reactExports.useRef(),callbackRef=reactExports.useRef();callbackRef.current=cb2,reactExports.useEffect(()=>(intervalRef.current=setInterval(()=>callbackRef.current?.(),ms),()=>clearInterval(intervalRef.current)),[ms])}__name(useInterval,"useInterval");function useNow(){const[now,setNow]=reactExports.useState(+new Date);return useInterval(()=>setNow(+new Date),250),now}__name(useNow,"useNow");function nothing(nextVideoId="",nextVideoStartTimestamp=0){return{type:"nothing",nextVideoId,nextVideoStartTimestamp}}__name(nothing,"nothing");const SECONDS_BETWEEN_VIDEOS=2;function reconcile(broadcast,player){const{state:currentState,videoId:currentVideoId,time:currentTime}=player;if(broadcast.type==="nothing")switch(currentState){case State.ENDED:case State.CUED:case State.UNSTARTED:return broadcast.nextVideoId?currentVideoId!==broadcast.nextVideoId?[{type:"cue",videoId:broadcast.nextVideoId,timestamp:broadcast.nextVideoStartTimestamp}]:[{type:"seek",timestamp:broadcast.nextVideoStartTimestamp},{type:"play"}]:[];default:return[]}else{if(currentState===State.BUFFERING)return[];const{videoId:targetVideoId,currentTime:targetTime}=broadcast;if(currentVideoId!==targetVideoId)return[{type:"cue",videoId:targetVideoId,timestamp:targetTime<SECONDS_BETWEEN_VIDEOS?0:targetTime}];{const cmds=[];switch(currentState){case State.PAUSED:case State.CUED:case State.UNSTARTED:currentVideoId&&cmds.push({type:"play"})}return currentTime&&delta(currentTime,targetTime)>=SECONDS_BETWEEN_VIDEOS&&(console.debug("time is off; queueing seek command",currentTime,targetTime),cmds.push({type:"seek",timestamp:targetTime})),cmds}}}__name(reconcile,"reconcile");function delta(a,b){return Math.abs(a-b)}__name(delta,"delta");let nonce=0;function useRerender(){const[,setNonce]=reactExports.useState(0);return()=>setNonce(++nonce)}__name(useRerender,"useRerender");function useYouTubePlayer(id2){const rerender=useRerender(),playerRef=reactExports.useRef(nullPlayer());return reactExports.useEffect(()=>{createYouTubePlayer(id2).then(player=>{playerRef.current=player,player.addEventListener("onStateChange",event=>{console.debug(debugTimestamp(),"player onStateChange",stateString(event.data),videoIdFromUrl(player.getVideoUrl())),rerender()}),rerender()})},[id2]),playerRef.current}__name(useYouTubePlayer,"useYouTubePlayer");const bookmarklet="javascript:(function()%7Bfunction%20last(e)%7Breturn%20e%5Be.length-1%5D%7Dfunction%20scrapeVideos()%7Breturn%2F%5C%2Fwatch%5C%3F%7C%5C%2Fembed%5C%2F%2F.test(window.location)%3F%5B%2Fv%3D(.%7B11%7D)%2F.exec(window.location)%3F.%5B1%5D%3F%3F%2Fembed%5C%2F(.%7B11%7D)%2F.exec(window.location)%3F.%5B1%5D%2Clast(document.querySelectorAll(%22.ytp-time-duration%22)).innerText.trim()%2Cdocument.querySelector(%22a.ytp-title-link%22).innerText.split(%22%5Cn%22)%5B0%5D.trim()%5D.join(%22%20%22)%3A%2F%5C%2Fplaylist%5C%3F%2F.test(window.location)%3F%5B...document.querySelectorAll(%22ytd-playlist-video-renderer%22)%5D.map((e%3D%3E%7Bconst%20t%3De.querySelector(%22a%23video-title%22)%3F.href%3F%3F%22%22%2Cr%3D%2Fv%3D(.%7B11%7D)%2F.exec(t)%3F.%5B1%5D%2Cn%3De.querySelector(%22span%23text.ytd-thumbnail-overlay-time-status-renderer%22)%3F.innerText.trim()%2Co%3De.querySelector(%22%23video-title%22)%3F.innerText%3Breturn%60%24%7Br%7D%20%24%7Bn%7D%20%24%7Bo%7D%60%7D)).join(%22%5Cn%22)%3A%5B...document.querySelectorAll(%22ytd-rich-grid-media%22)%5D.map((e%3D%3E%7Bconst%20t%3De.querySelector(%22a%23thumbnail%22)%3F.href%3F%3F%22%22%2Cr%3D%2Fv%3D(.%7B11%7D)%2F.exec(t)%3F.%5B1%5D%2Cn%3De.querySelector(%22span%23text.ytd-thumbnail-overlay-time-status-renderer%22)%3F.innerText.trim()%2Co%3De.querySelector(%22%23video-title%22)%3F.innerText%3Breturn%60%24%7Br%7D%20%24%7Bn%7D%20%24%7Bo%7D%60%7D)).join(%22%5Cn%22)%7Dconst%20videos%3DscrapeVideos()%3Bconsole.log(videos)%2Cnavigator.clipboard.writeText(videos).catch((e%3D%3Econsole.error(e)))%3B%7D)()";function viewModel({broadcast,player}){const hms=__name(seconds=>hoursMinutesSeconds(seconds,2),"hms");return{videoLink:broadcast.type==="video"?{text:broadcast.videoTitle,href:"https://youtube.com/watch?v="+broadcast.videoId}:null,actual:{video:player.videoId??"",playerState:stateString(player.state),currentTime:player.time!=null?hms(player.time):"-"},scheduled:{video:broadcast.type==="video"?broadcast.videoId:"-",playerState:broadcast.type,currentTime:broadcast.type==="video"?hms(broadcast.currentTime):"-"},secondsBehindSchedule:broadcast.type==="video"&&player.time!=null?(broadcast.currentTime-player.time).toFixed(2):"-",timeRemainingInVideo:player.duration!=null&&player.time!=null?hms(player.duration-player.time):"-"}}__name(viewModel,"viewModel");function VideoInfo(props){const{isOpen,broadcast,player,onClose}=props,vm=viewModel({broadcast,player}),closeButtonRef=reactExports.useRef(null);return reactExports.useEffect(()=>{if(isOpen){closeButtonRef.current?.focus();const closeOnEscape=__name(event=>{event.key==="Escape"&&onClose()},"closeOnEscape");return document.addEventListener("keydown",closeOnEscape),()=>document.removeEventListener("keydown",closeOnEscape)}},[isOpen]),reactExports.createElement("div",{role:"dialog",className:"info-pane"},reactExports.createElement("button",{ref:closeButtonRef,className:"close-button","aria-label":"close info pane",onClick:onClose},"close"),reactExports.createElement("h1",null,"Culture Machine"),reactExports.createElement("p",null,"Made by ",reactExports.createElement("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."," ",reactExports.createElement("a",{href:"https://github.com/benchristel/tv"},"Source code here"),". Some rights reserved. See the"," ",reactExports.createElement("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"license"),"."),reactExports.createElement("p",null,reactExports.createElement("span",{dangerouslySetInnerHTML:{__html:`
          <a href="${bookmarklet}">
            Bookmarklet to scrape videos from YouTube
          </a>
        `}})," ","(",reactExports.createElement("a",{href:"https://github.com/benchristel/tv#what-is-a-bookmarklet"},"What's this?"),")"),reactExports.createElement("hr",null),reactExports.createElement("h2",null,"Video Info"),reactExports.createElement("p",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},"Now playing:"," ",vm.videoLink?reactExports.createElement("a",{href:vm.videoLink.href},vm.videoLink.text):"-"),reactExports.createElement("table",null,reactExports.createElement("thead",null,reactExports.createElement("tr",null,reactExports.createElement("td",null),reactExports.createElement("th",{scope:"col"},"actual"),reactExports.createElement("th",{scope:"col"},"scheduled"))),reactExports.createElement("tbody",null,reactExports.createElement("tr",null,reactExports.createElement("th",{scope:"row"},"video"),reactExports.createElement("td",null,vm.actual.video),reactExports.createElement("td",null,vm.scheduled.video)),reactExports.createElement("tr",null,reactExports.createElement("th",{scope:"row"},"player state"),reactExports.createElement("td",null,vm.actual.playerState),reactExports.createElement("td",null,vm.scheduled.playerState)),reactExports.createElement("tr",null,reactExports.createElement("th",{scope:"row"},"current time"),reactExports.createElement("td",null,vm.actual.currentTime),reactExports.createElement("td",null,vm.scheduled.currentTime)))),reactExports.createElement("p",null,"Seconds behind schedule: ",vm.secondsBehindSchedule),reactExports.createElement("p",null,"Time remaining in video: ",vm.timeRemainingInVideo),reactExports.createElement("h2",null,"Channel Stats"),reactExports.createElement("table",null,reactExports.createElement("thead",null,reactExports.createElement("tr",null,reactExports.createElement("th",{scope:"col"},"name"),reactExports.createElement("th",{scope:"col"},"duration"))),reactExports.createElement("tbody",null,props.channels.map(channel=>reactExports.createElement(ChannelTableRow,{channel})))),reactExports.createElement("div",{style:{height:60}}))}__name(VideoInfo,"VideoInfo");function ChannelTableRow(props){return reactExports.createElement("tr",null,reactExports.createElement("td",null,props.channel.getName()),reactExports.createElement("td",null,durationAsWords(props.channel.getTotalDuration())))}__name(ChannelTableRow,"ChannelTableRow");class PlayerCommander extends reactExports.Component{static{__name(this,"PlayerCommander")}constructor(){super(...arguments),this.lastSeek=-1/0,this.lastVideoId=""}componentDidUpdate(){const{player,volume,commands,now}=this.props;player.setVolume(fromPerceivedVolume(volume)),commands.forEach(cmd=>{switch(cmd.type){case"play":player.playVideo();break;case"cue":this.lastVideoId!==cmd.videoId&&this.clearSeekCooldown(),this.seekCooldownElapsed(now)&&(this.lastSeek=now,player.cueVideoById(cmd.videoId,cmd.timestamp));break;case"seek":{this.seekCooldownElapsed(now)&&(this.lastSeek=now,player.seekTo(cmd.timestamp));break}default:console.error("unexpected video command type",cmd)}})}render(){return null}clearSeekCooldown(){this.lastSeek=-1/0}seekCooldownElapsed(nowMillis){return nowMillis-this.lastSeek>SECONDS_BETWEEN_VIDEOS*1e3}}function fromPerceivedVolume(perceivedVolume){return square(perceivedVolume/100)*100}__name(fromPerceivedVolume,"fromPerceivedVolume");function square(x2){return x2*x2}__name(square,"square");function status(player){return{state:player.getPlayerState(),videoId:videoIdFromUrl(player.getVideoUrl()),time:player.getCurrentTime(),duration:player.getDuration()}}__name(status,"status");function cache(maxSize,expensiveFallback){let values={};return key=>(key in values||(Object.keys(values).length===maxSize&&(values={}),values[key]=expensiveFallback(key)),values[key])}__name(cache,"cache");function cyrb128(str){let h1=1779033703,h2=3144134277,h3=1013904242,h4=2773480762,k=0;for(let i=0;i<str.length;i++)k=str.charCodeAt(i),h1=h2^Math.imul(h1^k,597399067),h2=h3^Math.imul(h2^k,2869860233),h3=h4^Math.imul(h3^k,951274213),h4=h1^Math.imul(h4^k,2716044179);return h1=Math.imul(h3^h1>>>18,597399067),h2=Math.imul(h4^h2>>>22,2869860233),h3=Math.imul(h1^h3>>>17,951274213),h4=Math.imul(h2^h4>>>19,2716044179),[(h1^h2^h3^h4)>>>0,(h2^h1)>>>0,(h3^h1)>>>0,(h4^h1)>>>0]}__name(cyrb128,"cyrb128");function sfc32(a,b,c,d){function rng(){a|=0,b|=0,c|=0,d|=0;var t2=(a+b|0)+d|0;return d=d+1|0,a=b^b>>>9,b=c+(c<<3)|0,c=c<<21|c>>>11,c=c+t2|0,(t2>>>0)/4294967296}__name(rng,"rng");for(let i=0;i<20;i++)rng();return rng}__name(sfc32,"sfc32");function randomIntInRange(low,high,rng){return low+Math.floor(rng()*(high+1-low))}__name(randomIntInRange,"randomIntInRange");function binarySearch(a,isLeftOfTarget){let firstPossible=-1,lastPossible=a.length-1;for(;firstPossible<lastPossible;){const testee=mid(firstPossible,lastPossible);isLeftOfTarget(a[testee])?firstPossible=testee:lastPossible=testee-1}return a[firstPossible]}__name(binarySearch,"binarySearch");function mid(left,right){return Math.ceil((left+right)/2)}__name(mid,"mid");const TIMEZONE_OFFSET=8*3600,SCHEDULE_GENERATION_PERIOD=24*3600;function ShuffledChannel(name,episodes2){const getSchedule=cache(1,ScheduleGenerator(episodes2));let totalDurationCache=null;return{getBroadcast,getTotalDuration,getName(){return name}};function getBroadcast(time){const seconds=time/1e3,secondsOfDay=(seconds-TIMEZONE_OFFSET)%SCHEDULE_GENERATION_PERIOD,dayBoundary=seconds-secondsOfDay,schedule=getSchedule(String(dayBoundary)),segment=binarySearch(schedule,seg=>seg.startSecondOfDay<=secondsOfDay);return segment?.type==="video"?{type:"video",videoId:segment.videoId,videoTitle:segment.videoTitle,currentTime:secondsOfDay-segment.startSecondOfDay+segment.startSecondOfVideo}:{type:"nothing",nextVideoId:segment?.nextVideoId??"",nextVideoStartTimestamp:segment?.nextVideoStartSecondOfVideo??0}}function getTotalDuration(){return totalDurationCache==null&&(totalDurationCache=episodes2.flatMap(videos).map(videoDuration).reduce(add$1,0)),totalDurationCache}}__name(ShuffledChannel,"ShuffledChannel");const ScheduleGenerator=__name(episodes2=>seed=>{if(isEmpty(episodes2))return[];episodes2=[...episodes2];const rng=sfc32(...cyrb128(seed));let totalDuration=0,schedule=[],i=0;for(;totalDuration<SCHEDULE_GENERATION_PERIOD;){i===episodes2.length&&(i=0),swap(episodes2,i,randomIntInRange(i,episodes2.length-1,rng));const episode2=episodes2[i++];for(const video of episode2.videos){schedule.push({type:"nothing",startSecondOfDay:totalDuration,nextVideoId:video.videoId,nextVideoStartSecondOfVideo:video.segments[0]?.start??0}),totalDuration+=SECONDS_BETWEEN_VIDEOS;for(const segment of video.segments)schedule.push({type:"video",videoId:video.videoId,videoTitle:video.title,startSecondOfDay:totalDuration,startSecondOfVideo:segment.start}),totalDuration+=duration(segment)}}return schedule},"ScheduleGenerator");function swap(array,i,k){const tmp=array[i];array[i]=array[k],array[k]=tmp}__name(swap,"swap");function add$1(a,b){return a+b}__name(add$1,"add$1");function videos(episode2){return episode2.videos}__name(videos,"videos");function SegmentBoundaryTestChannel(name,episodes2){const schedule=createSchedule(episodes2.flatMap(episode2=>episode2.videos)),scheduleDuration=schedule.map(s=>s.duration).reduce(add,0);return{getName,getBroadcast,getTotalDuration};function getName(){return name}function getBroadcast(time){const secondOfSchedule=time/1e3%scheduleDuration,segment=binarySearch(schedule,seg=>seg.startSecondOfSchedule<=secondOfSchedule);return segment?.type==="video"?{type:"video",videoId:segment.videoId,videoTitle:segment.videoTitle,currentTime:secondOfSchedule-segment.startSecondOfSchedule+segment.startSecondOfVideo}:{type:"nothing",nextVideoId:segment?.nextVideoId??"",nextVideoStartTimestamp:segment?.nextVideoStartSecondOfVideo??0}}function getTotalDuration(){return 0}}__name(SegmentBoundaryTestChannel,"SegmentBoundaryTestChannel");function createSchedule(videos2){let totalDuration=0,schedule=[];for(const video2 of videos2)if(video2.segments.length!==1){schedule.push({type:"nothing",nextVideoId:video2.videoId,nextVideoStartSecondOfVideo:3,duration:SECONDS_BETWEEN_VIDEOS,startSecondOfSchedule:totalDuration}),totalDuration+=SECONDS_BETWEEN_VIDEOS,schedule.push({type:"video",videoId:"TxJtoBAa2w0",videoTitle:"",duration:3,startSecondOfVideo:3,startSecondOfSchedule:totalDuration}),totalDuration+=3;for(let i=0;i<video2.segments.length;i++){const segment=video2.segments[i];if(i!==0){const slice=beginningOf(segment,7);schedule.push({type:"video",videoId:video2.videoId,videoTitle:video2.title,duration:slice.duration,startSecondOfVideo:slice.start,startSecondOfSchedule:totalDuration}),totalDuration+=slice.duration}if(i!==lastIndexOf(video2.segments)){const slice=endOf(segment,7);schedule.push({type:"video",videoId:video2.videoId,videoTitle:video2.title,duration:slice.duration,startSecondOfVideo:slice.start,startSecondOfSchedule:totalDuration}),totalDuration+=slice.duration}}}return schedule}__name(createSchedule,"createSchedule");function lastIndexOf(a){return a.length-1}__name(lastIndexOf,"lastIndexOf");function beginningOf(segment,seconds){return{start:segment.start,duration:seconds}}__name(beginningOf,"beginningOf");function endOf(segment,seconds){return{start:segment.end-seconds,duration:seconds}}__name(endOf,"endOf");const add=__name((a,b)=>a+b,"add");function VolumeControl(props){return reactExports.createElement("div",{className:"volume"},reactExports.createElement("div",{className:"volume-icon"}),reactExports.createElement("input",{"aria-label":"volume",type:"range",min:"0",max:"100",onChange:__name(e=>props.onChange(+e.target.value),"onChange"),value:props.volume}))}__name(VolumeControl,"VolumeControl");const channels=channels$1.map(([name,algorithm,episodes2])=>{switch(algorithm){case"shuffle":return ShuffledChannel(name,episodes2);case"test-segment-boundaries":return SegmentBoundaryTestChannel(name,episodes2)}});function App(){const[userRequestedPlayback,setUserRequestedPlayback]=useLatch(),[infoPaneOpen,setInfoPaneOpen]=reactExports.useState(!1),[channel,setChannel]=reactExports.useState(channels[0]),[volume,setVolume]=reactExports.useState(100),now=useNow(),broadcast=userRequestedPlayback?channel.getBroadcast(now):nothing(),player=debuggingDecorator(useYouTubePlayer("player-container")),playerStatus=status(player),playerState=playerStatus.state,hideVideo=playerState!==State.PLAYING,playerCommands=reconcile(broadcast,playerStatus),infoButtonRef=reactExports.useRef(null),closeInfoPane=reactExports.useCallback(()=>{setInfoPaneOpen(!1),infoButtonRef.current?.focus()},[]),openInfoPane=reactExports.useCallback(()=>{setInfoPaneOpen(!0)},[]);return reactExports.createElement(Layout,{effects:reactExports.createElement(PlayerCommander,{player,commands:playerCommands,volume,now}),screen:reactExports.createElement("div",{className:infoPaneOpen?"info-pane-open":""},reactExports.createElement("div",{className:"player-assembly"},reactExports.createElement("div",{id:"player-container"}),hideVideo&&reactExports.createElement("div",{className:"black-screen"},reactExports.createElement(PlayerStateView,{code:playerState,channel})),!userRequestedPlayback&&reactExports.createElement(PlayButtonOverlay,{onClick:setUserRequestedPlayback})),reactExports.createElement(VideoInfo,{isOpen:infoPaneOpen,player:playerStatus,broadcast,channels,onClose:closeInfoPane}),reactExports.createElement("div",{className:"info-pane-close-overlay","aria-hidden":!0,onClick:closeInfoPane})),controlPanel:reactExports.createElement(reactExports.Fragment,null,reactExports.createElement(ChannelSwitcher,{channels,onChannelSelected:__name(ch2=>{setChannel(ch2),setUserRequestedPlayback()},"onChannelSelected")}),reactExports.createElement(VolumeControl,{volume,onChange:setVolume}),reactExports.createElement("button",{className:infoPaneOpen?"info-button info-button-info-pane-open":"info-button",onClick:__name(()=>{(infoPaneOpen?closeInfoPane:openInfoPane)()},"onClick"),ref:infoButtonRef},"Info"))})}__name(App,"App");function Layout(props){return reactExports.createElement("div",{className:"App"},reactExports.createElement("div",{className:"bezel"},reactExports.createElement("div",{className:"screen"},props.screen),reactExports.createElement("div",{style:{height:"12px"}}),reactExports.createElement("div",{className:"controls"},props.controlPanel),props.effects))}__name(Layout,"Layout");function PlayButtonOverlay(props){return reactExports.createElement("button",{id:"start",onClick:props.onClick},"▸ Play")}__name(PlayButtonOverlay,"PlayButtonOverlay");function TestResults(){const[message,setMessage]=reactExports.useState("");return reactExports.useEffect(()=>{runTests(getAllTests()).then(formatTestResultsAsText).then(setMessage).catch(e=>setMessage(e.message))},[]),/fail/i.test(message)?reactExports.createElement("div",{className:"TestResults"},reactExports.createElement("code",null,reactExports.createElement("pre",null,message))):null}__name(TestResults,"TestResults");reactDomExports.render(reactExports.createElement(App,null),document.getElementById("app"));reactDomExports.render(reactExports.createElement(TestResults,null),document.getElementById("test-results"));
