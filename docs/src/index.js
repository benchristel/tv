var wr=(e,t,n)=>new Promise((r,o)=>{var l=s=>{try{a(n.next(s))}catch(c){o(c)}},i=s=>{try{a(n.throw(s))}catch(c){o(c)}},a=s=>s.done?r(s.value):Promise.resolve(s.value).then(l,i);a((n=n.apply(e,t)).next())});function Ke(e,t,n){return n={path:t,exports:{},require:function(r,o){return mc(r,o==null?n.path:o)}},e(n,n.exports),n.exports}function mc(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Vi=Object.getOwnPropertySymbols,gc=Object.prototype.hasOwnProperty,yc=Object.prototype.propertyIsEnumerable;function vc(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Tc(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(l){return t[l]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(l){o[l]=l}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch(l){return!1}}var wc=Tc()?Object.assign:function(e,t){for(var n,r=vc(e),o,l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var i in n)gc.call(n,i)&&(r[i]=n[i]);if(Vi){o=Vi(n);for(var a=0;a<o.length;a++)yc.call(n,o[a])&&(r[o[a]]=n[o[a]])}}return r},j=wc;var Cc=Ke(function(e,t){var n=60103,r=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,l=60110,i=60112;t.Suspense=60113;var a=60115,s=60116;if(typeof Symbol=="function"&&Symbol.for){var c=Symbol.for;n=c("react.element"),r=c("react.portal"),t.Fragment=c("react.fragment"),t.StrictMode=c("react.strict_mode"),t.Profiler=c("react.profiler"),o=c("react.provider"),l=c("react.context"),i=c("react.forward_ref"),t.Suspense=c("react.suspense"),a=c("react.memo"),s=c("react.lazy")}var T=typeof Symbol=="function"&&Symbol.iterator;function N(p){return p===null||typeof p!="object"?null:(p=T&&p[T]||p["@@iterator"],typeof p=="function"?p:null)}function g(p){for(var C="https://reactjs.org/docs/error-decoder.html?invariant="+p,U=1;U<arguments.length;U++)C+="&args[]="+encodeURIComponent(arguments[U]);return"Minified React error #"+p+"; visit "+C+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G={};function P(p,C,U){this.props=p,this.context=C,this.refs=G,this.updater=U||R}P.prototype.isReactComponent={},P.prototype.setState=function(p,C){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error(g(85));this.updater.enqueueSetState(this,p,C,"setState")},P.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function d(){}d.prototype=P.prototype;function u(p,C,U){this.props=p,this.context=C,this.refs=G,this.updater=U||R}var f=u.prototype=new d;f.constructor=u,j(f,P.prototype),f.isPureReactComponent=!0;var h={current:null},m=Object.prototype.hasOwnProperty,H={key:!0,ref:!0,__self:!0,__source:!0};function E(p,C,U){var V,v={},k=null,A=null;if(C!=null)for(V in C.ref!==void 0&&(A=C.ref),C.key!==void 0&&(k=""+C.key),C)m.call(C,V)&&!H.hasOwnProperty(V)&&(v[V]=C[V]);var F=arguments.length-2;if(F===1)v.children=U;else if(1<F){for(var W=Array(F),ee=0;ee<F;ee++)W[ee]=arguments[ee+2];v.children=W}if(p&&p.defaultProps)for(V in F=p.defaultProps,F)v[V]===void 0&&(v[V]=F[V]);return{$$typeof:n,type:p,key:k,ref:A,props:v,_owner:h.current}}function M(p,C){return{$$typeof:n,type:p.type,key:C,ref:p.ref,props:p.props,_owner:p._owner}}function L(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function x(p){var C={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(U){return C[U]})}var K=/\/+/g;function ve(p,C){return typeof p=="object"&&p!==null&&p.key!=null?x(""+p.key):C.toString(36)}function Lt(p,C,U,V,v){var k=typeof p;(k==="undefined"||k==="boolean")&&(p=null);var A=!1;if(p===null)A=!0;else switch(k){case"string":case"number":A=!0;break;case"object":switch(p.$$typeof){case n:case r:A=!0}}if(A)return A=p,v=v(A),p=V===""?"."+ve(A,0):V,Array.isArray(v)?(U="",p!=null&&(U=p.replace(K,"$&/")+"/"),Lt(v,C,U,"",function(ee){return ee})):v!=null&&(L(v)&&(v=M(v,U+(!v.key||A&&A.key===v.key?"":(""+v.key).replace(K,"$&/")+"/")+p)),C.push(v)),1;if(A=0,V=V===""?".":V+":",Array.isArray(p))for(var F=0;F<p.length;F++){k=p[F];var W=V+ve(k,F);A+=Lt(k,C,U,W,v)}else if(W=N(p),typeof W=="function")for(p=W.call(p),F=0;!(k=p.next()).done;)k=k.value,W=V+ve(k,F++),A+=Lt(k,C,U,W,v);else if(k==="object")throw C=""+p,Error(g(31,C==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":C));return A}function ie(p,C,U){if(p==null)return p;var V=[],v=0;return Lt(p,V,"","",function(k){return C.call(U,k,v++)}),V}function oe(p){if(p._status===-1){var C=p._result;C=C(),p._status=0,p._result=C,C.then(function(U){p._status===0&&(U=U.default,p._status=1,p._result=U)},function(U){p._status===0&&(p._status=2,p._result=U)})}if(p._status===1)return p._result;throw p._result}var yt={current:null};function ae(){var p=yt.current;if(p===null)throw Error(g(321));return p}var vt={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:h,IsSomeRendererActing:{current:!1},assign:j};t.Children={map:ie,forEach:function(p,C,U){ie(p,function(){C.apply(this,arguments)},U)},count:function(p){var C=0;return ie(p,function(){C++}),C},toArray:function(p){return ie(p,function(C){return C})||[]},only:function(p){if(!L(p))throw Error(g(143));return p}},t.Component=P,t.PureComponent=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vt,t.cloneElement=function(p,C,U){if(p==null)throw Error(g(267,p));var V=j({},p.props),v=p.key,k=p.ref,A=p._owner;if(C!=null){if(C.ref!==void 0&&(k=C.ref,A=h.current),C.key!==void 0&&(v=""+C.key),p.type&&p.type.defaultProps)var F=p.type.defaultProps;for(W in C)m.call(C,W)&&!H.hasOwnProperty(W)&&(V[W]=C[W]===void 0&&F!==void 0?F[W]:C[W])}var W=arguments.length-2;if(W===1)V.children=U;else if(1<W){F=Array(W);for(var ee=0;ee<W;ee++)F[ee]=arguments[ee+2];V.children=F}return{$$typeof:n,type:p.type,key:v,ref:k,props:V,_owner:A}},t.createContext=function(p,C){return C===void 0&&(C=null),p={$$typeof:l,_calculateChangedBits:C,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider={$$typeof:o,_context:p},p.Consumer=p},t.createElement=E,t.createFactory=function(p){var C=E.bind(null,p);return C.type=p,C},t.createRef=function(){return{current:null}},t.forwardRef=function(p){return{$$typeof:i,render:p}},t.isValidElement=L,t.lazy=function(p){return{$$typeof:s,_payload:{_status:-1,_result:p},_init:oe}},t.memo=function(p,C){return{$$typeof:a,type:p,compare:C===void 0?null:C}},t.useCallback=function(p,C){return ae().useCallback(p,C)},t.useContext=function(p,C){return ae().useContext(p,C)},t.useDebugValue=function(){},t.useEffect=function(p,C){return ae().useEffect(p,C)},t.useImperativeHandle=function(p,C,U){return ae().useImperativeHandle(p,C,U)},t.useLayoutEffect=function(p,C){return ae().useLayoutEffect(p,C)},t.useMemo=function(p,C){return ae().useMemo(p,C)},t.useReducer=function(p,C,U){return ae().useReducer(p,C,U)},t.useRef=function(p){return ae().useRef(p)},t.useState=function(p){return ae().useState(p)},t.version="17.0.2"}),O=Ke(function(e){e.exports=Cc});var Ap=O.Children,Yi=O.Component,Ft=O.Fragment,Np=O.Profiler,Gp=O.PureComponent,Hp=O.StrictMode,xp=O.Suspense,Lp=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_p=O.cloneElement,Fp=O.createContext,I=O.createElement,Wp=O.createFactory,Up=O.createRef,Op=O.forwardRef,Bp=O.isValidElement,jp=O.lazy,zp=O.memo,Vp=O.useCallback,Yp=O.useContext,Qp=O.useDebugValue,Wt=O.useEffect,Jp=O.useImperativeHandle,Kp=O.useLayoutEffect,Zp=O.useMemo,Xp=O.useReducer,Tn=O.useRef,Ge=O.useState,qp=O.version;var Sc=Ke(function(e,t){var n,r,o,l;if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var c=null,T=null,N=function(){if(c!==null)try{var v=t.unstable_now();c(!0,v),c=null}catch(k){throw setTimeout(N,0),k}};n=function(v){c!==null?setTimeout(n,0,v):(c=v,setTimeout(N,0))},r=function(v,k){T=setTimeout(v,k)},o=function(){clearTimeout(T)},t.unstable_shouldYield=function(){return!1},l=t.unstable_forceFrameRate=function(){}}else{var g=window.setTimeout,R=window.clearTimeout;if(typeof console!="undefined"){var G=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof G!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var P=!1,d=null,u=-1,f=5,h=0;t.unstable_shouldYield=function(){return t.unstable_now()>=h},l=function(){},t.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<v?Math.floor(1e3/v):5};var m=new MessageChannel,H=m.port2;m.port1.onmessage=function(){if(d!==null){var v=t.unstable_now();h=v+f;try{d(!0,v)?H.postMessage(null):(P=!1,d=null)}catch(k){throw H.postMessage(null),k}}else P=!1},n=function(v){d=v,P||(P=!0,H.postMessage(null))},r=function(v,k){u=g(function(){v(t.unstable_now())},k)},o=function(){R(u),u=-1}}function E(v,k){var A=v.length;v.push(k);e:for(;;){var F=A-1>>>1,W=v[F];if(W!==void 0&&0<x(W,k))v[F]=k,v[A]=W,A=F;else break e}}function M(v){return v=v[0],v===void 0?null:v}function L(v){var k=v[0];if(k!==void 0){var A=v.pop();if(A!==k){v[0]=A;e:for(var F=0,W=v.length;F<W;){var ee=2*(F+1)-1,Tt=v[ee],vn=ee+1,_t=v[vn];if(Tt!==void 0&&0>x(Tt,A))_t!==void 0&&0>x(_t,Tt)?(v[F]=_t,v[vn]=A,F=vn):(v[F]=Tt,v[ee]=A,F=ee);else if(_t!==void 0&&0>x(_t,A))v[F]=_t,v[vn]=A,F=vn;else break e}}return k}return null}function x(v,k){var A=v.sortIndex-k.sortIndex;return A!==0?A:v.id-k.id}var K=[],ve=[],Lt=1,ie=null,oe=3,yt=!1,ae=!1,vt=!1;function p(v){for(var k=M(ve);k!==null;){if(k.callback===null)L(ve);else if(k.startTime<=v)L(ve),k.sortIndex=k.expirationTime,E(K,k);else break;k=M(ve)}}function C(v){if(vt=!1,p(v),!ae)if(M(K)!==null)ae=!0,n(U);else{var k=M(ve);k!==null&&r(C,k.startTime-v)}}function U(v,k){ae=!1,vt&&(vt=!1,o()),yt=!0;var A=oe;try{for(p(k),ie=M(K);ie!==null&&(!(ie.expirationTime>k)||v&&!t.unstable_shouldYield());){var F=ie.callback;if(typeof F=="function"){ie.callback=null,oe=ie.priorityLevel;var W=F(ie.expirationTime<=k);k=t.unstable_now(),typeof W=="function"?ie.callback=W:ie===M(K)&&L(K),p(k)}else L(K);ie=M(K)}if(ie!==null)var ee=!0;else{var Tt=M(ve);Tt!==null&&r(C,Tt.startTime-k),ee=!1}return ee}finally{ie=null,oe=A,yt=!1}}var V=l;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(v){v.callback=null},t.unstable_continueExecution=function(){ae||yt||(ae=!0,n(U))},t.unstable_getCurrentPriorityLevel=function(){return oe},t.unstable_getFirstCallbackNode=function(){return M(K)},t.unstable_next=function(v){switch(oe){case 1:case 2:case 3:var k=3;break;default:k=oe}var A=oe;oe=k;try{return v()}finally{oe=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=V,t.unstable_runWithPriority=function(v,k){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var A=oe;oe=v;try{return k()}finally{oe=A}},t.unstable_scheduleCallback=function(v,k,A){var F=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?F+A:F):A=F,v){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=A+W,v={id:Lt++,callback:k,priorityLevel:v,startTime:A,expirationTime:W,sortIndex:-1},A>F?(v.sortIndex=A,E(ve,v),M(K)===null&&v===M(ve)&&(vt?o():vt=!0,r(C,A-F))):(v.sortIndex=W,E(K,v),ae||yt||(ae=!0,n(U))),v},t.unstable_wrapCallback=function(v){var k=oe;return function(){var A=oe;oe=k;try{return v.apply(this,arguments)}finally{oe=A}}}}),te=Ke(function(e){e.exports=Sc});function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!O)throw Error(w(227));var Qi=new Set,wn={};function wt(e,t){Ut(e,t),Ut(e+"Capture",t)}function Ut(e,t){for(wn[e]=t,e=0;e<t.length;e++)Qi.add(t[e])}var Be=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Ec=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ji=Object.prototype.hasOwnProperty,Ki={},Zi={};function Rc(e){return Ji.call(Zi,e)?!0:Ji.call(Ki,e)?!1:Ec.test(e)?Zi[e]=!0:(Ki[e]=!0,!1)}function kc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dc(e,t,n,r){if(t===null||typeof t=="undefined"||kc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var xo=/[\-:]([a-z])/g;function Lo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xo,Lo);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xo,Lo);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xo,Lo);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function _o(e,t,n,r){var o=se.hasOwnProperty(t)?se[t]:null,l=o!==null?o.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");l||(Dc(t,n,o,r)&&(n=null),r||o===null?Rc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cn=60103,St=60106,Ze=60107,Fo=60108,Sn=60114,Wo=60109,Uo=60110,Cr=60112,En=60113,Sr=60120,Er=60115,Oo=60116,Bo=60121,jo=60128,Xi=60129,zo=60130,Vo=60131;typeof Symbol=="function"&&Symbol.for&&(ne=Symbol.for,Cn=ne("react.element"),St=ne("react.portal"),Ze=ne("react.fragment"),Fo=ne("react.strict_mode"),Sn=ne("react.profiler"),Wo=ne("react.provider"),Uo=ne("react.context"),Cr=ne("react.forward_ref"),En=ne("react.suspense"),Sr=ne("react.suspense_list"),Er=ne("react.memo"),Oo=ne("react.lazy"),Bo=ne("react.block"),ne("react.scope"),jo=ne("react.opaque.id"),Xi=ne("react.debug_trace_mode"),zo=ne("react.offscreen"),Vo=ne("react.legacy_hidden"));var ne,qi=typeof Symbol=="function"&&Symbol.iterator;function Rn(e){return e===null||typeof e!="object"?null:(e=qi&&e[qi]||e["@@iterator"],typeof e=="function"?e:null)}var Yo;function kn(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||""}return`
`+Yo+e}var Qo=!1;function Rr(e,t){if(!e||Qo)return"";Qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a])return`
`+o[i].replace(" at new "," at ");while(1<=i&&0<=a);break}}}finally{Qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function Ic(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=Rr(e.type,!1),e;case 11:return e=Rr(e.type.render,!1),e;case 22:return e=Rr(e.type._render,!1),e;case 1:return e=Rr(e.type,!0),e;default:return""}}function Ot(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ze:return"Fragment";case St:return"Portal";case Sn:return"Profiler";case Fo:return"StrictMode";case En:return"Suspense";case Sr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Uo:return(e.displayName||"Context")+".Consumer";case Wo:return(e._context.displayName||"Context")+".Provider";case Cr:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Er:return Ot(e.type);case Bo:return Ot(e._render);case Oo:t=e._payload,e=e._init;try{return Ot(e(t))}catch(n){}}return null}function Xe(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function bi(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pc(e){var t=bi(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Pc(e))}function $i(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bi(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Jo(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ea(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xe(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ta(e,t){t=t.checked,t!=null&&_o(e,"checked",t,!1)}function Zo(e,t){ta(e,t);var n=Xe(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ko(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ko(e,t.type,Xe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function na(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ko(e,t,n){(t!=="number"||Dr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Mc(e){var t="";return O.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Xo(e,t){return e=j({children:void 0},t),(t=Mc(t.children))&&(e.children=t),e}function Bt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xe(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ra(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xe(n)}}function oa(e,t){var n=Xe(t.value),r=Xe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function la(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var bo={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function ia(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $o(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ia(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,aa=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!==bo.svg||"innerHTML"in e)e.innerHTML=t;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ac=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Ac.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function sa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function ua(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=sa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Nc=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(e,t){if(t){if(Nc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rl=null,jt=null,zt=null;function ca(e){if(e=Pn(e)){if(typeof rl!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Pr(t),rl(e.stateNode,e.type,t))}}function fa(e){jt?zt?zt.push(e):zt=[e]:jt=e}function da(){if(jt){var e=jt,t=zt;if(zt=jt=null,ca(e),t)for(e=0;e<t.length;e++)ca(t[e])}}function ol(e,t){return e(t)}function pa(e,t,n,r,o){return e(t,n,r,o)}function ll(){}var ha=ol,Et=!1,il=!1;function al(){(jt!==null||zt!==null)&&(ll(),da())}function Gc(e,t,n){if(il)return e(t,n);il=!0;try{return ha(e,t,n)}finally{il=!1,al()}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=Pr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var sl=!1;if(Be)try{Vt={},Object.defineProperty(Vt,"passive",{get:function(){sl=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch(e){sl=!1}var Vt;function Hc(e,t,n,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(T){this.onError(T)}}var An=!1,Mr=null,Ar=!1,ul=null,xc={onError:function(e){An=!0,Mr=e}};function Lc(e,t,n,r,o,l,i,a,s){An=!1,Mr=null,Hc.apply(xc,arguments)}function _c(e,t,n,r,o,l,i,a,s){if(Lc.apply(this,arguments),An){if(An){var c=Mr;An=!1,Mr=null}else throw Error(w(198));Ar||(Ar=!0,ul=c)}}function Rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!=0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ma(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ga(e){if(Rt(e)!==e)throw Error(w(188))}function Fc(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return ga(o),e;if(l===r)return ga(o),t;l=l.sibling}throw Error(w(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function ya(e){if(e=Fc(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function va(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Ta,cl,wa,Ca,fl=!1,Le=[],qe=null,be=null,$e=null,Nn=new Map,Gn=new Map,Hn=[],Sa="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dl(e,t,n,r,o){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:o,targetContainers:[r]}}function Ea(e,t){switch(e){case"focusin":case"focusout":qe=null;break;case"dragenter":case"dragleave":be=null;break;case"mouseover":case"mouseout":$e=null;break;case"pointerover":case"pointerout":Nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function xn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e=dl(t,n,r,o,l),t!==null&&(t=Pn(t),t!==null&&cl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Wc(e,t,n,r,o){switch(t){case"focusin":return qe=xn(qe,e,t,n,r,o),!0;case"dragenter":return be=xn(be,e,t,n,r,o),!0;case"mouseover":return $e=xn($e,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Nn.set(l,xn(Nn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Gn.set(l,xn(Gn.get(l)||null,e,t,n,r,o)),!0}return!1}function Uc(e){var t=kt(e.target);if(t!==null){var n=Rt(t);if(n!==null){if(t=n.tag,t===13){if(t=ma(n),t!==null){e.blockedOn=t,Ca(e.lanePriority,function(){te.unstable_runWithPriority(e.priority,function(){wa(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Pn(n),t!==null&&cl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ra(e,t,n){Nr(e)&&n.delete(t)}function Oc(){for(fl=!1;0<Le.length;){var e=Le[0];if(e.blockedOn!==null){e=Pn(e.blockedOn),e!==null&&Ta(e);break}for(var t=e.targetContainers;0<t.length;){var n=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&Le.shift()}qe!==null&&Nr(qe)&&(qe=null),be!==null&&Nr(be)&&(be=null),$e!==null&&Nr($e)&&($e=null),Nn.forEach(Ra),Gn.forEach(Ra)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,te.unstable_scheduleCallback(te.unstable_NormalPriority,Oc)))}function ka(e){function t(o){return Ln(o,e)}if(0<Le.length){Ln(Le[0],e);for(var n=1;n<Le.length;n++){var r=Le[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qe!==null&&Ln(qe,e),be!==null&&Ln(be,e),$e!==null&&Ln($e,e),Nn.forEach(t),Gn.forEach(t),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)Uc(n),n.blockedOn===null&&Hn.shift()}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},hl={},Da={};Be&&(Da=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function Hr(e){if(hl[e])return hl[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Da)return hl[e]=t[n];return e}var Ia=Hr("animationend"),Pa=Hr("animationiteration"),Ma=Hr("animationstart"),Aa=Hr("transitionend"),Na=new Map,ml=new Map,Bc=["abort","abort",Ia,"animationEnd",Pa,"animationIteration",Ma,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Aa,"transitionEnd","waiting","waiting"];function gl(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];o="on"+(o[0].toUpperCase()+o.slice(1)),ml.set(r,t),Na.set(r,o),wt(o,[r])}}var jc=te.unstable_now;jc();var Y=8;function Qt(e){if((1&e)!=0)return Y=15,1;if((2&e)!=0)return Y=14,2;if((4&e)!=0)return Y=13,4;var t=24&e;return t!==0?(Y=12,t):(e&32)!=0?(Y=11,32):(t=192&e,t!==0?(Y=10,t):(e&256)!=0?(Y=9,256):(t=3584&e,t!==0?(Y=8,t):(e&4096)!=0?(Y=7,4096):(t=4186112&e,t!==0?(Y=6,t):(t=62914560&e,t!==0?(Y=5,t):e&67108864?(Y=4,67108864):(e&134217728)!=0?(Y=3,134217728):(t=805306368&e,t!==0?(Y=2,t):(1073741824&e)!=0?(Y=1,1073741824):(Y=8,e))))))}function zc(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Vc(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(w(358,e))}}function _n(e,t){var n=e.pendingLanes;if(n===0)return Y=0;var r=0,o=0,l=e.expiredLanes,i=e.suspendedLanes,a=e.pingedLanes;if(l!==0)r=l,o=Y=15;else if(l=n&134217727,l!==0){var s=l&~i;s!==0?(r=Qt(s),o=Y):(a&=l,a!==0&&(r=Qt(a),o=Y))}else l=n&~i,l!==0?(r=Qt(l),o=Y):a!==0&&(r=Qt(a),o=Y);if(r===0)return 0;if(r=31-et(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&i)==0){if(Qt(t),o<=Y)return t;Y=o}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),o=1<<n,r|=e[n],t&=~o;return r}function Ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xr(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Jt(24&~t),e===0?xr(10,t):e;case 10:return e=Jt(192&~t),e===0?xr(8,t):e;case 8:return e=Jt(3584&~t),e===0&&(e=Jt(4186112&~t),e===0&&(e=512)),e;case 2:return t=Jt(805306368&~t),t===0&&(t=268435456),t}throw Error(w(358,e))}function Jt(e){return e&-e}function yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Lr(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-et(t),e[t]=n}var et=Math.clz32?Math.clz32:Yc,Qc=Math.log,Jc=Math.LN2;function Yc(e){return e===0?32:31-(Qc(e)/Jc|0)|0}var Kc=te.unstable_UserBlockingPriority,Zc=te.unstable_runWithPriority,_r=!0;function Xc(e,t,n,r){Et||ll();var o=vl,l=Et;Et=!0;try{pa(o,e,t,n,r)}finally{(Et=l)||al()}}function qc(e,t,n,r){Zc(Kc,vl.bind(null,e,t,n,r))}function vl(e,t,n,r){if(_r){var o;if((o=(t&4)==0)&&0<Le.length&&-1<Sa.indexOf(e))e=dl(null,e,t,n,r),Le.push(e);else{var l=pl(e,t,n,r);if(l===null)o&&Ea(e,r);else{if(o){if(-1<Sa.indexOf(e)){e=dl(l,e,t,n,r),Le.push(e);return}if(Wc(l,e,t,n,r))return;Ea(e,r)}Ha(e,t,r,null,n)}}}}function pl(e,t,n,r){var o=nl(r);if(o=kt(o),o!==null){var l=Rt(o);if(l===null)o=null;else{var i=l.tag;if(i===13){if(o=ma(l),o!==null)return o;o=null}else if(i===3){if(l.stateNode.hydrate)return l.tag===3?l.stateNode.containerInfo:null;o=null}else l!==o&&(o=null)}}return Ha(e,t,r,o,n),null}var tt=null,Tl=null,Fr=null;function xa(){if(Fr)return Fr;var e,t=Tl,n=t.length,r,o="value"in tt?tt.value:tt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Fr=o.slice(e,1<r?1-r:void 0)}function Wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ur(){return!0}function La(){return!1}function Ee(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ur:La,this.isPropagationStopped=La,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ur)},persist:function(){},isPersistent:Ur}),t}var Kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=Ee(Kt),Fn=j({},Kt,{view:0,detail:0}),bc=Ee(Fn),Cl,Sl,Wn,Or=j({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:El,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(Cl=e.screenX-Wn.screenX,Sl=e.screenY-Wn.screenY):Sl=Cl=0,Wn=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),_a=Ee(Or),$c=j({},Or,{dataTransfer:0}),ef=Ee($c),tf=j({},Fn,{relatedTarget:0}),Rl=Ee(tf),nf=j({},Kt,{animationName:0,elapsedTime:0,pseudoElement:0}),rf=Ee(nf),of=j({},Kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lf=Ee(of),af=j({},Kt,{data:0}),Fa=Ee(af),sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ff(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cf[e])?!!t[e]:!1}function El(){return ff}var df=j({},Fn,{key:function(e){if(e.key){var t=sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:El,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pf=Ee(df),hf=j({},Or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wa=Ee(hf),mf=j({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:El}),gf=Ee(mf),yf=j({},Kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=Ee(yf),Tf=j({},Or,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wf=Ee(Tf),Cf=[9,13,27,32],kl=Be&&"CompositionEvent"in window,Un=null;Be&&"documentMode"in document&&(Un=document.documentMode);var Sf=Be&&"TextEvent"in window&&!Un,Ua=Be&&(!kl||Un&&8<Un&&11>=Un),Oa=String.fromCharCode(32),Ba=!1;function ja(e,t){switch(e){case"keyup":return Cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function za(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function Ef(e,t){switch(e){case"compositionend":return za(t);case"keypress":return t.which!==32?null:(Ba=!0,Oa);case"textInput":return e=t.data,e===Oa&&Ba?null:e;default:return null}}function Rf(e,t){if(Zt)return e==="compositionend"||!kl&&ja(e,t)?(e=xa(),Fr=Tl=tt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ua&&t.locale!=="ko"?null:t.data;default:return null}}var kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Va(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kf[e.type]:t==="textarea"}function Ya(e,t,n,r){fa(r),t=Br(t,"onChange"),0<t.length&&(n=new wl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Bn=null;function Df(e){Qa(e,0)}function jr(e){var t=Xt(e);if($i(t))return e}function If(e,t){if(e==="change")return t}var Ja=!1;Be&&(Be?(Vr="oninput"in document,Vr||(Dl=document.createElement("div"),Dl.setAttribute("oninput","return;"),Vr=typeof Dl.oninput=="function"),zr=Vr):zr=!1,Ja=zr&&(!document.documentMode||9<document.documentMode));var zr,Vr,Dl;function Za(){On&&(On.detachEvent("onpropertychange",Ka),Bn=On=null)}function Ka(e){if(e.propertyName==="value"&&jr(Bn)){var t=[];if(Ya(t,Bn,e,nl(e)),e=Df,Et)e(t);else{Et=!0;try{ol(e,t)}finally{Et=!1,al()}}}}function Pf(e,t,n){e==="focusin"?(Za(),On=t,Bn=n,On.attachEvent("onpropertychange",Ka)):e==="focusout"&&Za()}function Mf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jr(Bn)}function Af(e,t){if(e==="click")return jr(t)}function Nf(e,t){if(e==="input"||e==="change")return jr(t)}function Gf(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var ke=typeof Object.is=="function"?Object.is:Gf,Hf=Object.prototype.hasOwnProperty;function jn(e,t){if(ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Hf.call(t,n[r])||!ke(e[n[r]],t[n[r]]))return!1;return!0}function Xa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qa(e,t){var n=Xa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xa(n)}}function ba(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ba(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $a(){for(var e=window,t=Dr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch(r){n=!1}if(n)e=t.contentWindow;else break;t=Dr(e.document)}return t}function Il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xf=Be&&"documentMode"in document&&11>=document.documentMode,qt=null,Pl=null,zn=null,Ml=!1;function es(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ml||qt==null||qt!==Dr(r)||(r=qt,"selectionStart"in r&&Il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&jn(zn,r)||(zn=r,r=Br(Pl,"onSelect"),0<r.length&&(t=new wl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}gl("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);gl("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);gl(Bc,2);for(var ts="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Al=0;Al<ts.length;Al++)ml.set(ts[Al],0);Ut("onMouseEnter",["mouseout","mouseover"]);Ut("onMouseLeave",["mouseout","mouseover"]);Ut("onPointerEnter",["pointerout","pointerover"]);Ut("onPointerLeave",["pointerout","pointerover"]);wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ns=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function rs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_c(r,t,void 0,e),e.currentTarget=null}function Qa(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;rs(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;rs(o,a,c),l=s}}}if(Ar)throw e=ul,Ar=!1,ul=null,e}function Q(e,t){var n=ls(t),r=e+"__bubble";n.has(r)||(os(t,e,2,!1),n.add(r))}var is="_reactListening"+Math.random().toString(36).slice(2);function ss(e){e[is]||(e[is]=!0,Qi.forEach(function(t){ns.has(t)||as(t,!1,e,null),as(t,!0,e,null)}))}function as(e,t,n,r){var o=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,l=n;if(e==="selectionchange"&&n.nodeType!==9&&(l=n.ownerDocument),r!==null&&!t&&ns.has(e)){if(e!=="scroll")return;o|=2,l=r}var i=ls(l),a=e+"__"+(t?"capture":"bubble");i.has(a)||(t&&(o|=4),os(l,e,o,t),i.add(a))}function os(e,t,n,r){var o=ml.get(t);switch(o===void 0?2:o){case 0:o=Xc;break;case 1:o=qc;break;default:o=vl}n=o.bind(null,t,n,e),o=void 0,!sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ha(e,t,n,r,o){var l=r;if((t&1)==0&&(t&2)==0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=kt(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Gc(function(){var c=l,T=nl(n),N=[];e:{var g=Na.get(e);if(g!==void 0){var R=wl,G=e;switch(e){case"keypress":if(Wr(n)===0)break e;case"keydown":case"keyup":R=pf;break;case"focusin":G="focus",R=Rl;break;case"focusout":G="blur",R=Rl;break;case"beforeblur":case"afterblur":R=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=_a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=gf;break;case Ia:case Pa:case Ma:R=rf;break;case Aa:R=vf;break;case"scroll":R=bc;break;case"wheel":R=wf;break;case"copy":case"cut":case"paste":R=lf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Wa}var P=(t&4)!=0,d=!P&&e==="scroll",u=P?g!==null?g+"Capture":null:g;P=[];for(var f=c,h;f!==null;){h=f;var m=h.stateNode;if(h.tag===5&&m!==null&&(h=m,u!==null&&(m=Mn(f,u),m!=null&&P.push(Yn(f,m,h)))),d)break;f=f.return}0<P.length&&(g=new R(g,G,null,n,T),N.push({event:g,listeners:P}))}}if((t&7)==0){e:{if(g=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",g&&(t&16)==0&&(G=n.relatedTarget||n.fromElement)&&(kt(G)||G[$t]))break e;if((R||g)&&(g=T.window===T?T:(g=T.ownerDocument)?g.defaultView||g.parentWindow:window,R?(G=n.relatedTarget||n.toElement,R=c,G=G?kt(G):null,G!==null&&(d=Rt(G),G!==d||G.tag!==5&&G.tag!==6)&&(G=null)):(R=null,G=c),R!==G)){if(P=_a,m="onMouseLeave",u="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(P=Wa,m="onPointerLeave",u="onPointerEnter",f="pointer"),d=R==null?g:Xt(R),h=G==null?g:Xt(G),g=new P(m,f+"leave",R,n,T),g.target=d,g.relatedTarget=h,m=null,kt(T)===c&&(P=new P(u,f+"enter",G,n,T),P.target=h,P.relatedTarget=d,m=P),d=m,R&&G)t:{for(P=R,u=G,f=0,h=P;h;h=bt(h))f++;for(h=0,m=u;m;m=bt(m))h++;for(;0<f-h;)P=bt(P),f--;for(;0<h-f;)u=bt(u),h--;for(;f--;){if(P===u||u!==null&&P===u.alternate)break t;P=bt(P),u=bt(u)}P=null}else P=null;R!==null&&us(N,g,R,P,!1),G!==null&&d!==null&&us(N,d,G,P,!0)}}e:{if(g=c?Xt(c):window,R=g.nodeName&&g.nodeName.toLowerCase(),R==="select"||R==="input"&&g.type==="file")var H=If;else if(Va(g))if(Ja)H=Nf;else{H=Mf;var E=Pf}else(R=g.nodeName)&&R.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(H=Af);if(H&&(H=H(e,c))){Ya(N,H,n,T);break e}E&&E(e,g,c),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Ko(g,"number",g.value)}switch(E=c?Xt(c):window,e){case"focusin":(Va(E)||E.contentEditable==="true")&&(qt=E,Pl=c,zn=null);break;case"focusout":zn=Pl=qt=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,es(N,n,T);break;case"selectionchange":if(xf)break;case"keydown":case"keyup":es(N,n,T)}var M;if(kl)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Zt?ja(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Ua&&n.locale!=="ko"&&(Zt||L!=="onCompositionStart"?L==="onCompositionEnd"&&Zt&&(M=xa()):(tt=T,Tl="value"in tt?tt.value:tt.textContent,Zt=!0)),E=Br(c,L),0<E.length&&(L=new Fa(L,e,null,n,T),N.push({event:L,listeners:E}),M?L.data=M:(M=za(n),M!==null&&(L.data=M)))),(M=Sf?Ef(e,n):Rf(e,n))&&(c=Br(c,"onBeforeInput"),0<c.length&&(T=new Fa("onBeforeInput","beforeinput",null,n,T),N.push({event:T,listeners:c}),T.data=M))}Qa(N,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Mn(e,n),l!=null&&r.unshift(Yn(e,l,o)),l=Mn(e,t),l!=null&&r.push(Yn(e,l,o))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function us(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=Mn(n,l),s!=null&&i.unshift(Yn(n,s,a))):o||(s=Mn(n,l),s!=null&&i.push(Yn(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}function Yr(){}var Nl=null,Gl=null;function cs(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Hl(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fs=typeof setTimeout=="function"?setTimeout:void 0,Lf=typeof clearTimeout=="function"?clearTimeout:void 0;function xl(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function ds(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ll=0;function _f(e){return{$$typeof:jo,toString:e,valueOf:e}}var Qr=Math.random().toString(36).slice(2),nt="__reactFiber$"+Qr,Jr="__reactProps$"+Qr,$t="__reactContainer$"+Qr,ps="__reactEvents$"+Qr;function kt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ds(e);e!==null;){if(n=e[nt])return n;e=ds(e)}return t}e=n,n=e.parentNode}return null}function Pn(e){return e=e[nt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Pr(e){return e[Jr]||null}function ls(e){var t=e[ps];return t===void 0&&(t=e[ps]=new Set),t}var _l=[],tn=-1;function rt(e){return{current:e}}function J(e){0>tn||(e.current=_l[tn],_l[tn]=null,tn--)}function Z(e,t){tn++,_l[tn]=e.current,e.current=t}var ot={},de=rt(ot),Te=rt(!1),Dt=ot;function nn(e,t){var n=e.type.contextTypes;if(!n)return ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function we(e){return e=e.childContextTypes,e!=null}function Kr(){J(Te),J(de)}function hs(e,t,n){if(de.current!==ot)throw Error(w(168));Z(de,t),Z(Te,n)}function ms(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(w(108,Ot(t)||"Unknown",o));return j({},n,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ot,Dt=de.current,Z(de,e),Z(Te,Te.current),!0}function gs(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=ms(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,J(Te),J(de),Z(de,e)):J(Te),Z(Te,n)}var Fl=null,It=null,Ff=te.unstable_runWithPriority,Wl=te.unstable_scheduleCallback,Ul=te.unstable_cancelCallback,Wf=te.unstable_shouldYield,ys=te.unstable_requestPaint,Ol=te.unstable_now,Uf=te.unstable_getCurrentPriorityLevel,Xr=te.unstable_ImmediatePriority,vs=te.unstable_UserBlockingPriority,Ts=te.unstable_NormalPriority,ws=te.unstable_LowPriority,Cs=te.unstable_IdlePriority,Bl={},Of=ys!==void 0?ys:function(){},je=null,qr=null,jl=!1,Ss=Ol(),pe=1e4>Ss?Ol:function(){return Ol()-Ss};function rn(){switch(Uf()){case Xr:return 99;case vs:return 98;case Ts:return 97;case ws:return 96;case Cs:return 95;default:throw Error(w(332))}}function Es(e){switch(e){case 99:return Xr;case 98:return vs;case 97:return Ts;case 96:return ws;case 95:return Cs;default:throw Error(w(332))}}function Pt(e,t){return e=Es(e),Ff(e,t)}function Qn(e,t,n){return e=Es(e),Wl(e,t,n)}function _e(){if(qr!==null){var e=qr;qr=null,Ul(e)}Rs()}function Rs(){if(!jl&&je!==null){jl=!0;var e=0;try{var t=je;Pt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),je=null}catch(n){throw je!==null&&(je=je.slice(e+1)),Wl(Xr,_e),n}finally{jl=!1}}}var Bf=Ct.ReactCurrentBatchConfig;function He(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var br=rt(null),$r=null,on=null,eo=null;function zl(){eo=on=$r=null}function Vl(e){var t=br.current;J(br),e.type._context._currentValue=t}function ks(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function ln(e,t){$r=e,eo=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!=0&&(xe=!0),e.firstContext=null)}function De(e,t){if(eo!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(eo=e,t=1073741823),t={context:e,observedBits:t,next:null},on===null){if($r===null)throw Error(w(308));on=t,$r.dependencies={lanes:0,firstContext:t,responders:null}}else on=on.next=t;return e._currentValue}var lt=!1;function Yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Ds(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Is(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kn(e,t,n,r){var o=e.updateQueue;lt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var T=e.alternate;if(T!==null){T=T.updateQueue;var N=T.lastBaseUpdate;N!==i&&(N===null?T.firstBaseUpdate=c:N.next=c,T.lastBaseUpdate=s)}}if(l!==null){N=o.baseState,i=0,T=c=s=null;do{a=l.lane;var g=l.eventTime;if((r&a)===a){T!==null&&(T=T.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=e,G=l;switch(a=t,g=n,G.tag){case 1:if(R=G.payload,typeof R=="function"){N=R.call(g,N,a);break e}N=R;break e;case 3:R.flags=R.flags&-4097|64;case 0:if(R=G.payload,a=typeof R=="function"?R.call(g,N,a):R,a==null)break e;N=j({},N,a);break e;case 2:lt=!0}}l.callback!==null&&(e.flags|=32,a=o.effects,a===null?o.effects=[l]:a.push(l))}else g={eventTime:g,lane:a,tag:l.tag,payload:l.payload,callback:l.callback,next:null},T===null?(c=T=g,s=N):T=T.next=g,i|=a;if(l=l.next,l===null){if(a=o.shared.pending,a===null)break;l=a.next,a.next=null,o.lastBaseUpdate=a,o.shared.pending=null}}while(1);T===null&&(s=N),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=T,Jn|=i,e.lanes=i,e.memoizedState=N}}function Ps(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var Ms=new O.Component().refs;function to(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var no={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),o=st(e),l=it(r,o);l.payload=t,n!=null&&(l.callback=n),at(e,l),ut(e,o,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),o=st(e),l=it(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),at(e,l),ut(e,o,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=st(e),o=it(n,r);o.tag=2,t!=null&&(o.callback=t),at(e,o),ut(e,r,n)}};function As(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!jn(n,r)||!jn(o,l):!0}function Ns(e,t,n){var r=!1,o=ot,l=t.contextType;return typeof l=="object"&&l!==null?l=De(l):(o=we(t)?Dt:de.current,r=t.contextTypes,l=(r=r!=null)?nn(e,o):ot),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=no,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&no.enqueueReplaceState(t,t.state,null)}function Ql(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Ms,Yl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=De(l):(l=we(t)?Dt:de.current,o.context=nn(e,l)),Kn(e,n,o,r),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(to(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&no.enqueueReplaceState(o,o.state,null),Kn(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4)}var ro=Array.isArray;function Zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var i=r.refs;i===Ms&&(i=r.refs={}),l===null?delete i[o]:i[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function oo(e,t){if(e.type!=="textarea")throw Error(w(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function Hs(e){function t(d,u){if(e){var f=d.lastEffect;f!==null?(f.nextEffect=u,d.lastEffect=u):d.firstEffect=d.lastEffect=u,u.nextEffect=null,u.flags=8}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=ct(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags=2,u):f):(d.flags=2,u)):u}function i(d){return e&&d.alternate===null&&(d.flags=2),d}function a(d,u,f,h){return u===null||u.tag!==6?(u=Jl(f,d.mode,h),u.return=d,u):(u=o(u,f),u.return=d,u)}function s(d,u,f,h){return u!==null&&u.elementType===f.type?(h=o(u,f.props),h.ref=Zn(d,u,f),h.return=d,h):(h=lo(f.type,f.key,f.props,null,d.mode,h),h.ref=Zn(d,u,f),h.return=d,h)}function c(d,u,f,h){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Kl(f,d.mode,h),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function T(d,u,f,h,m){return u===null||u.tag!==7?(u=an(f,d.mode,h,m),u.return=d,u):(u=o(u,f),u.return=d,u)}function N(d,u,f){if(typeof u=="string"||typeof u=="number")return u=Jl(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Cn:return f=lo(u.type,u.key,u.props,null,d.mode,f),f.ref=Zn(d,null,u),f.return=d,f;case St:return u=Kl(u,d.mode,f),u.return=d,u}if(ro(u)||Rn(u))return u=an(u,d.mode,f,null),u.return=d,u;oo(d,u)}return null}function g(d,u,f,h){var m=u!==null?u.key:null;if(typeof f=="string"||typeof f=="number")return m!==null?null:a(d,u,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Cn:return f.key===m?f.type===Ze?T(d,u,f.props.children,h,m):s(d,u,f,h):null;case St:return f.key===m?c(d,u,f,h):null}if(ro(f)||Rn(f))return m!==null?null:T(d,u,f,h,null);oo(d,f)}return null}function R(d,u,f,h,m){if(typeof h=="string"||typeof h=="number")return d=d.get(f)||null,a(u,d,""+h,m);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Cn:return d=d.get(h.key===null?f:h.key)||null,h.type===Ze?T(u,d,h.props.children,m,h.key):s(u,d,h,m);case St:return d=d.get(h.key===null?f:h.key)||null,c(u,d,h,m)}if(ro(h)||Rn(h))return d=d.get(f)||null,T(u,d,h,m,null);oo(u,h)}return null}function G(d,u,f,h){for(var m=null,H=null,E=u,M=u=0,L=null;E!==null&&M<f.length;M++){E.index>M?(L=E,E=null):L=E.sibling;var x=g(d,E,f[M],h);if(x===null){E===null&&(E=L);break}e&&E&&x.alternate===null&&t(d,E),u=l(x,u,M),H===null?m=x:H.sibling=x,H=x,E=L}if(M===f.length)return n(d,E),m;if(E===null){for(;M<f.length;M++)E=N(d,f[M],h),E!==null&&(u=l(E,u,M),H===null?m=E:H.sibling=E,H=E);return m}for(E=r(d,E);M<f.length;M++)L=R(E,d,M,f[M],h),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?M:L.key),u=l(L,u,M),H===null?m=L:H.sibling=L,H=L);return e&&E.forEach(function(K){return t(d,K)}),m}function P(d,u,f,h){var m=Rn(f);if(typeof m!="function")throw Error(w(150));if(f=m.call(f),f==null)throw Error(w(151));for(var H=m=null,E=u,M=u=0,L=null,x=f.next();E!==null&&!x.done;M++,x=f.next()){E.index>M?(L=E,E=null):L=E.sibling;var K=g(d,E,x.value,h);if(K===null){E===null&&(E=L);break}e&&E&&K.alternate===null&&t(d,E),u=l(K,u,M),H===null?m=K:H.sibling=K,H=K,E=L}if(x.done)return n(d,E),m;if(E===null){for(;!x.done;M++,x=f.next())x=N(d,x.value,h),x!==null&&(u=l(x,u,M),H===null?m=x:H.sibling=x,H=x);return m}for(E=r(d,E);!x.done;M++,x=f.next())x=R(E,d,M,x.value,h),x!==null&&(e&&x.alternate!==null&&E.delete(x.key===null?M:x.key),u=l(x,u,M),H===null?m=x:H.sibling=x,H=x);return e&&E.forEach(function(ve){return t(d,ve)}),m}return function(d,u,f,h){var m=typeof f=="object"&&f!==null&&f.type===Ze&&f.key===null;m&&(f=f.props.children);var H=typeof f=="object"&&f!==null;if(H)switch(f.$$typeof){case Cn:e:{for(H=f.key,m=u;m!==null;){if(m.key===H){switch(m.tag){case 7:if(f.type===Ze){n(d,m.sibling),u=o(m,f.props.children),u.return=d,d=u;break e}break;default:if(m.elementType===f.type){n(d,m.sibling),u=o(m,f.props),u.ref=Zn(d,m,f),u.return=d,d=u;break e}}n(d,m);break}else t(d,m);m=m.sibling}f.type===Ze?(u=an(f.props.children,d.mode,h,f.key),u.return=d,d=u):(h=lo(f.type,f.key,f.props,null,d.mode,h),h.ref=Zn(d,u,f),h.return=d,d=h)}return i(d);case St:e:{for(m=f.key;u!==null;){if(u.key===m)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Kl(f,d.mode,h),u.return=d,d=u}return i(d)}if(typeof f=="string"||typeof f=="number")return f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,f),u.return=d,d=u):(n(d,u),u=Jl(f,d.mode,h),u.return=d,d=u),i(d);if(ro(f))return G(d,u,f,h);if(Rn(f))return P(d,u,f,h);if(H&&oo(d,f),typeof f=="undefined"&&!m)switch(d.tag){case 1:case 22:case 0:case 11:case 15:throw Error(w(152,Ot(d.type)||"Component"))}return n(d,u)}}var io=Hs(!0),xs=Hs(!1),Xn={},Fe=rt(Xn),qn=rt(Xn),bn=rt(Xn);function Mt(e){if(e===Xn)throw Error(w(174));return e}function Zl(e,t){switch(Z(bn,t),Z(qn,e),Z(Fe,Xn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$o(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$o(t,e)}J(Fe),Z(Fe,t)}function sn(){J(Fe),J(qn),J(bn)}function Ls(e){Mt(bn.current);var t=Mt(Fe.current),n=$o(t,e.type);t!==n&&(Z(qn,e),Z(Fe,n))}function Xl(e){qn.current===e&&(J(Fe),J(qn))}var X=rt(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!=0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ze=null,ft=null,We=!1;function _s(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Fs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function ql(e){if(We){var t=ft;if(t){var n=t;if(!Fs(e,t)){if(t=en(n.nextSibling),!t||!Fs(e,t)){e.flags=e.flags&-1025|2,We=!1,ze=e;return}_s(ze,n)}ze=e,ft=en(t.firstChild)}else e.flags=e.flags&-1025|2,We=!1,ze=e}}function Ws(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function so(e){if(e!==ze)return!1;if(!We)return Ws(e),We=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Hl(t,e.memoizedProps))for(t=ft;t;)_s(e,t),t=en(t.nextSibling);if(Ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ze?en(e.stateNode.nextSibling):null;return!0}function bl(){ft=ze=null,We=!1}var un=[];function $l(){for(var e=0;e<un.length;e++)un[e]._workInProgressVersionPrimary=null;un.length=0}var $n=Ct.ReactCurrentDispatcher,Pe=Ct.ReactCurrentBatchConfig,er=0,b=null,he=null,ue=null,uo=!1,tr=!1;function Ce(){throw Error(w(321))}function ei(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ke(e[n],t[n]))return!1;return!0}function ti(e,t,n,r,o,l){if(er=l,b=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$n.current=e===null||e.memoizedState===null?jf:zf,e=n(r,o),tr){l=0;do{if(tr=!1,!(25>l))throw Error(w(301));l+=1,ue=he=null,t.updateQueue=null,$n.current=Vf,e=n(r,o)}while(tr)}if($n.current=co,t=he!==null&&he.next!==null,er=0,ue=he=b=null,uo=!1,t)throw Error(w(300));return e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?b.memoizedState=ue=e:ue=ue.next=e,ue}function Nt(){if(he===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ue===null?b.memoizedState:ue.next;if(t!==null)ue=t,he=e;else{if(e===null)throw Error(w(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ue===null?b.memoizedState=ue=e:ue=ue.next=e}return ue}function Ue(e,t){return typeof t=="function"?t(e):t}function nr(e){var t=Nt(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=he,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){o=o.next,r=r.baseState;var a=i=l=null,s=o;do{var c=s.lane;if((er&c)===c)a!==null&&(a=a.next={lane:0,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),r=s.eagerReducer===e?s.eagerState:e(r,s.action);else{var T={lane:c,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};a===null?(i=a=T,l=r):a=a.next=T,b.lanes|=c,Jn|=c}s=s.next}while(s!==null&&s!==o);a===null?l=r:a.next=i,ke(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function rr(e){var t=Nt(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);ke(l,t.memoizedState)||(xe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Us(e,t,n){var r=t._getVersion;r=r(t._source);var o=t._workInProgressVersionPrimary;if(o!==null?e=o===r:(e=e.mutableReadLanes,(e=(er&e)===e)&&(t._workInProgressVersionPrimary=r,un.push(t))),e)return n(t._source);throw un.push(t),Error(w(350))}function Os(e,t,n,r){var o=ye;if(o===null)throw Error(w(349));var l=t._getVersion,i=l(t._source),a=$n.current,s=a.useState(function(){return Us(o,t,n)}),c=s[1],T=s[0];s=ue;var N=e.memoizedState,g=N.refs,R=g.getSnapshot,G=N.source;N=N.subscribe;var P=b;return e.memoizedState={refs:g,source:t,subscribe:r},a.useEffect(function(){g.getSnapshot=n,g.setSnapshot=c;var d=l(t._source);if(!ke(i,d)){d=n(t._source),ke(T,d)||(c(d),d=st(P),o.mutableReadLanes|=d&o.pendingLanes),d=o.mutableReadLanes,o.entangledLanes|=d;for(var u=o.entanglements,f=d;0<f;){var h=31-et(f),m=1<<h;u[h]|=d,f&=~m}}},[n,t,r]),a.useEffect(function(){return r(t._source,function(){var d=g.getSnapshot,u=g.setSnapshot;try{u(d(t._source));var f=st(P);o.mutableReadLanes|=f&o.pendingLanes}catch(h){u(function(){throw h})}})},[t,r]),ke(R,n)&&ke(G,t)&&ke(N,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Ue,lastRenderedState:T},e.dispatch=c=ni.bind(null,b,e),s.queue=e,s.baseQueue=null,T=Us(o,t,n),s.memoizedState=s.baseState=T),T}function Bs(e,t,n){var r=Nt();return Os(r,e,t,n)}function or(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Ue,lastRenderedState:e},e=e.dispatch=ni.bind(null,b,e),[t.memoizedState,e]}function fo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=b.updateQueue,t===null?(t={lastEffect:null},b.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function js(e){var t=At();return e={current:e},t.memoizedState=e}function po(){return Nt().memoizedState}function ri(e,t,n,r){var o=At();b.flags|=e,o.memoizedState=fo(1|t,n,void 0,r===void 0?null:r)}function oi(e,t,n,r){var o=Nt();r=r===void 0?null:r;var l=void 0;if(he!==null){var i=he.memoizedState;if(l=i.destroy,r!==null&&ei(r,i.deps)){fo(t,n,l,r);return}}b.flags|=e,o.memoizedState=fo(1|t,n,l,r)}function zs(e,t){return ri(516,4,e,t)}function ho(e,t){return oi(516,4,e,t)}function Vs(e,t){return oi(4,2,e,t)}function Ys(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qs(e,t,n){return n=n!=null?n.concat([e]):null,oi(4,2,Ys.bind(null,t,e),n)}function li(){}function Js(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ei(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ks(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ei(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yf(e,t){var n=rn();Pt(98>n?98:n,function(){e(!0)}),Pt(97<n?97:n,function(){var r=Pe.transition;Pe.transition=1;try{e(!1),t()}finally{Pe.transition=r}})}function ni(e,t,n){var r=Re(),o=st(e),l={lane:o,action:n,eagerReducer:null,eagerState:null,next:null},i=t.pending;if(i===null?l.next=l:(l.next=i.next,i.next=l),t.pending=l,i=e.alternate,e===b||i!==null&&i===b)tr=uo=!0;else{if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.eagerReducer=i,l.eagerState=s,ke(s,a))return}catch(c){}finally{}ut(e,o,r)}}var co={readContext:De,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useOpaqueIdentifier:Ce,unstable_isNewReconciler:!1},jf={readContext:De,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:zs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ri(4,2,Ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=ni.bind(null,b,e),[r.memoizedState,e]},useRef:js,useState:or,useDebugValue:li,useDeferredValue:function(e){var t=or(e),n=t[0],r=t[1];return zs(function(){var o=Pe.transition;Pe.transition=1;try{r(e)}finally{Pe.transition=o}},[e]),n},useTransition:function(){var e=or(!1),t=e[0];return e=Yf.bind(null,e[1]),js(e),[e,t]},useMutableSource:function(e,t,n){var r=At();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Os(r,e,t,n)},useOpaqueIdentifier:function(){if(We){var e=!1,t=_f(function(){throw e||(e=!0,n("r:"+(Ll++).toString(36))),Error(w(355))}),n=or(t)[1];return(b.mode&2)==0&&(b.flags|=516,fo(5,function(){n("r:"+(Ll++).toString(36))},void 0,null)),t}return t="r:"+(Ll++).toString(36),or(t),t},unstable_isNewReconciler:!1},zf={readContext:De,useCallback:Js,useContext:De,useEffect:ho,useImperativeHandle:Qs,useLayoutEffect:Vs,useMemo:Ks,useReducer:nr,useRef:po,useState:function(){return nr(Ue)},useDebugValue:li,useDeferredValue:function(e){var t=nr(Ue),n=t[0],r=t[1];return ho(function(){var o=Pe.transition;Pe.transition=1;try{r(e)}finally{Pe.transition=o}},[e]),n},useTransition:function(){var e=nr(Ue)[0];return[po().current,e]},useMutableSource:Bs,useOpaqueIdentifier:function(){return nr(Ue)[0]},unstable_isNewReconciler:!1},Vf={readContext:De,useCallback:Js,useContext:De,useEffect:ho,useImperativeHandle:Qs,useLayoutEffect:Vs,useMemo:Ks,useReducer:rr,useRef:po,useState:function(){return rr(Ue)},useDebugValue:li,useDeferredValue:function(e){var t=rr(Ue),n=t[0],r=t[1];return ho(function(){var o=Pe.transition;Pe.transition=1;try{r(e)}finally{Pe.transition=o}},[e]),n},useTransition:function(){var e=rr(Ue)[0];return[po().current,e]},useMutableSource:Bs,useOpaqueIdentifier:function(){return rr(Ue)[0]},unstable_isNewReconciler:!1},Qf=Ct.ReactCurrentOwner,xe=!1;function Se(e,t,n,r){t.child=e===null?xs(t,null,n,r):io(t,e.child,n,r)}function Zs(e,t,n,r,o){n=n.render;var l=t.ref;return ln(t,o),r=ti(e,t,n,r,l,o),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,Ve(e,t,o)):(t.flags|=1,Se(e,t,r,o),t.child)}function qs(e,t,n,r,o,l){if(e===null){var i=n.type;return typeof i=="function"&&!ii(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Xs(e,t,i,r,o,l)):(e=lo(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}return i=e.child,(o&l)==0&&(o=i.memoizedProps,n=n.compare,n=n!==null?n:jn,n(o,r)&&e.ref===t.ref)?Ve(e,t,l):(t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e)}function Xs(e,t,n,r,o,l){if(e!==null&&jn(e.memoizedProps,r)&&e.ref===t.ref)if(xe=!1,(l&o)!=0)(e.flags&16384)!=0&&(xe=!0);else return t.lanes=e.lanes,Ve(e,t,l);return ai(e,t,n,r,l)}function si(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)==0)t.memoizedState={baseLanes:0},mo(t,n);else if((n&1073741824)!=0)t.memoizedState={baseLanes:0},mo(t,l!==null?l.baseLanes:n);else return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},mo(t,e),null;else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,mo(t,r);return Se(e,t,o,n),t.child}function bs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function ai(e,t,n,r,o){var l=we(n)?Dt:de.current;return l=nn(t,l),ln(t,o),n=ti(e,t,n,r,l,o),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,Ve(e,t,o)):(t.flags|=1,Se(e,t,n,o),t.child)}function $s(e,t,n,r,o){if(we(n)){var l=!0;Zr(t)}else l=!1;if(ln(t,o),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Ns(t,n,r),Ql(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=we(n)?Dt:de.current,c=nn(t,c));var T=n.getDerivedStateFromProps,N=typeof T=="function"||typeof i.getSnapshotBeforeUpdate=="function";N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Gs(t,i,r,c),lt=!1;var g=t.memoizedState;i.state=g,Kn(t,r,i,o),s=t.memoizedState,a!==r||g!==s||Te.current||lt?(typeof T=="function"&&(to(t,n,T,r),s=t.memoizedState),(a=lt||As(t,n,a,r,g,s,c))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4)):(typeof i.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{i=t.stateNode,Ds(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:He(t.type,a),i.props=c,N=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=De(s):(s=we(n)?Dt:de.current,s=nn(t,s));var R=n.getDerivedStateFromProps;(T=typeof R=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==N||g!==s)&&Gs(t,i,r,s),lt=!1,g=t.memoizedState,i.state=g,Kn(t,r,i,o);var G=t.memoizedState;a!==N||g!==G||Te.current||lt?(typeof R=="function"&&(to(t,n,R,r),G=t.memoizedState),(c=lt||As(t,n,c,r,g,G,s))?(T||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,G,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,G,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=G),i.props=r,i.state=G,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=256),r=!1)}return ui(e,t,n,r,l,o)}function ui(e,t,n,r,o,l){bs(e,t);var i=(t.flags&64)!=0;if(!r&&!i)return o&&gs(t,n,!1),Ve(e,t,l);r=t.stateNode,Qf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=io(t,e.child,null,l),t.child=io(t,null,a,l)):Se(e,t,a,l),t.memoizedState=r.state,o&&gs(t,n,!0),t.child}function eu(e){var t=e.stateNode;t.pendingContext?hs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hs(e,t.context,!1),Zl(e,t.containerInfo)}var go={dehydrated:null,retryLane:0};function ou(e,t,n){var r=t.pendingProps,o=X.current,l=!1,i;return(i=(t.flags&64)!=0)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!=0),i?(l=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(o|=1),Z(X,o&1),e===null?(r.fallback!==void 0&&ql(t),e=r.children,o=r.fallback,l?(e=tu(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=go,e):typeof r.unstable_expectedLoadTime=="number"?(e=tu(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=go,t.lanes=33554432,e):(n=ci({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?l?(r=ru(e,t,r.children,r.fallback,n),l=t.child,o=e.child.memoizedState,l.memoizedState=o===null?{baseLanes:n}:{baseLanes:o.baseLanes|n},l.childLanes=e.childLanes&~n,t.memoizedState=go,r):(n=nu(e,t,r.children,n),t.memoizedState=null,n):l?(r=ru(e,t,r.children,r.fallback,n),l=t.child,o=e.child.memoizedState,l.memoizedState=o===null?{baseLanes:n}:{baseLanes:o.baseLanes|n},l.childLanes=e.childLanes&~n,t.memoizedState=go,r):(n=nu(e,t,r.children,n),t.memoizedState=null,n)}function tu(e,t,n,r){var o=e.mode,l=e.child;return t={mode:"hidden",children:t},(o&2)==0&&l!==null?(l.childLanes=0,l.pendingProps=t):l=ci(t,o,0,null),n=an(n,o,r,null),l.return=e,n.return=e,l.sibling=n,e.child=l,n}function nu(e,t,n,r){var o=e.child;return e=o.sibling,n=ct(o,{mode:"visible",children:n}),(t.mode&2)==0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function ru(e,t,n,r,o){var l=t.mode,i=e.child;e=i.sibling;var a={mode:"hidden",children:n};return(l&2)==0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=a,i=n.lastEffect,i!==null?(t.firstEffect=n.firstEffect,t.lastEffect=i,i.nextEffect=null):t.firstEffect=t.lastEffect=null):n=ct(i,a),e!==null?r=ct(e,r):(r=an(r,l,o,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function lu(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ks(e.return,t)}function fi(e,t,n,r,o,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o,lastEffect:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o,i.lastEffect=l)}function iu(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Se(e,t,r.children,n),r=X.current,(r&2)!=0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!=0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lu(e,n);else if(e.tag===19)lu(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(X,r),(t.mode&2)==0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fi(t,!1,o,n,l,t.lastEffect);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ao(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fi(t,!0,n,null,l,t.lastEffect);break;case"together":fi(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Ve(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,(n&t.childLanes)!=0){if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var au,di,su,uu;au=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};di=function(){};su=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Mt(Fe.current);var l=null;switch(n){case"input":o=Jo(e,o),r=Jo(e,r),l=[];break;case"option":o=Xo(e,o),r=Xo(e,r),l=[];break;case"select":o=j({},o,{value:void 0}),r=j({},r,{value:void 0}),l=[];break;case"textarea":o=qo(e,o),r=qo(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}el(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Q("scroll",e),l||a===s||(l=[])):typeof s=="object"&&s!==null&&s.$$typeof===jo?s.toString():(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};uu=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Jf(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return we(t.type)&&Kr(),null;case 3:return sn(),J(Te),J(de),$l(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(so(t)?t.flags|=4:r.hydrate||(t.flags|=256)),di(t),null;case 5:Xl(t);var o=Mt(bn.current);if(n=t.type,e!==null&&t.stateNode!=null)su(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(w(166));return null}if(e=Mt(Fe.current),so(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[nt]=t,r[Jr]=l,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(e=0;e<Vn.length;e++)Q(Vn[e],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ea(r,l),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Q("invalid",r);break;case"textarea":ra(r,l),Q("invalid",r)}el(n,l),e=null;for(var i in l)l.hasOwnProperty(i)&&(o=l[i],i==="children"?typeof o=="string"?r.textContent!==o&&(e=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(e=["children",""+o]):wn.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&Q("scroll",r));switch(n){case"input":kr(r),na(r,l,!0);break;case"textarea":kr(r),la(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Yr)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(i=o.nodeType===9?o:o.ownerDocument,e===bo.html&&(e=ia(n)),e===bo.html?n==="script"?(e=i.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[nt]=t,e[Jr]=r,au(e,t,!1,!1),t.stateNode=e,i=tl(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Vn.length;o++)Q(Vn[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":ea(e,r),o=Jo(e,r),Q("invalid",e);break;case"option":o=Xo(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=j({},r,{value:void 0}),Q("invalid",e);break;case"textarea":ra(e,r),o=qo(e,r),Q("invalid",e);break;default:o=r}el(n,o);var a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?ua(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&aa(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Dn(e,s):typeof s=="number"&&Dn(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(wn.hasOwnProperty(l)?s!=null&&l==="onScroll"&&Q("scroll",e):s!=null&&_o(e,l,s,i))}switch(n){case"input":kr(e),na(e,r,!1);break;case"textarea":kr(e),la(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xe(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Bt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Yr)}cs(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)uu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));n=Mt(bn.current),Mt(Fe.current),so(t)?(r=t.stateNode,n=t.memoizedProps,r[nt]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r)}return null;case 13:return J(X),r=t.memoizedState,(t.flags&64)!=0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&so(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!=0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(X.current&1)!=0?ce===0&&(ce=3):((ce===0||ce===3)&&(ce=4),ye===null||(Jn&134217727)==0&&(cn&134217727)==0||fn(ye,me))),(r||n)&&(t.flags|=4),null);case 4:return sn(),di(t),e===null&&ss(t.stateNode.containerInfo),null;case 10:return Vl(t),null;case 17:return we(t.type)&&Kr(),null;case 19:if(J(X),r=t.memoizedState,r===null)return null;if(l=(t.flags&64)!=0,i=r.rendering,i===null)if(l)lr(r,!1);else{if(ce!==0||e!==null&&(e.flags&64)!=0)for(e=t.child;e!==null;){if(i=ao(e),i!==null){for(t.flags|=64,lr(r,!1),l=i.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=2,l.nextEffect=null,l.firstEffect=null,l.lastEffect=null,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(X,X.current&1|2),t.child}e=e.sibling}r.tail!==null&&pe()>pi&&(t.flags|=64,l=!0,lr(r,!1),t.lanes=33554432)}else{if(!l)if(e=ao(i),e!==null){if(t.flags|=64,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!We)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*pe()-r.renderingStartTime>pi&&n!==1073741824&&(t.flags|=64,l=!0,lr(r,!1),t.lanes=33554432);r.isBackwards?(i.sibling=t.child,t.child=i):(n=r.last,n!==null?n.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=pe(),n.sibling=null,t=X.current,Z(X,l?t&1|2:t&1),n):null;case 23:case 24:return hi(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(w(156,t.tag))}function Kf(e){switch(e.tag){case 1:we(e.type)&&Kr();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(sn(),J(Te),J(de),$l(),t=e.flags,(t&64)!=0)throw Error(w(285));return e.flags=t&-4097|64,e;case 5:return Xl(e),null;case 13:return J(X),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return J(X),null;case 4:return sn(),null;case 10:return Vl(e),null;case 23:case 24:return hi(),null;default:return null}}function mi(e,t){try{var n="",r=t;do n+=Ic(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o}}function gi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zf=typeof WeakMap=="function"?WeakMap:Map;function cu(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,yi=r),gi(e,t)},n}function fu(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return gi(e,t),r(o)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Oe===null?Oe=new Set([this]):Oe.add(this),gi(e,t));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}var Xf=typeof WeakSet=="function"?WeakSet:Set;function du(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){dt(e,n)}else t.current=null}function qf(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:He(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&xl(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(w(163))}function $f(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)==3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var o=e;r=o.next,o=o.tag,(o&4)!=0&&(o&1)!=0&&(pu(n,e),bf(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:He(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&Ps(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Ps(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&cs(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&ka(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(w(163))}function hu(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var o=n.memoizedProps.style;o=o!=null&&o.hasOwnProperty("display")?o.display:null,r.style.display=sa("display",o)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function gu(e,t){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Fl,t)}catch(l){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,o=r.destroy;if(r=r.tag,o!==void 0)if((r&4)!=0)pu(t,n);else{r=t;try{o()}catch(l){dt(r,l)}}n=n.next}while(n!==e)}break;case 1:if(du(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(l){dt(t,l)}break;case 5:du(t);break;case 4:mu(e,t)}}function yu(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function vu(e){return e.tag===5||e.tag===3||e.tag===4}function Tu(e){e:{for(var t=e.return;t!==null;){if(vu(t))break e;t=t.return}throw Error(w(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(w(161))}n.flags&16&&(Dn(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||vu(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?vi(e,n,t):Ti(e,n,t)}function vi(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(vi(e,t,n),e=e.sibling;e!==null;)vi(e,t,n),e=e.sibling}function Ti(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ti(e,t,n),e=e.sibling;e!==null;)Ti(e,t,n),e=e.sibling}function mu(e,t){for(var n=t,r=!1,o,l;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(w(160));switch(o=r.stateNode,r.tag){case 5:l=!1;break e;case 3:o=o.containerInfo,l=!0;break e;case 4:o=o.containerInfo,l=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var i=e,a=n,s=a;;)if(gu(i,s),s.child!==null&&s.tag!==4)s.child.return=s,s=s.child;else{if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}l?(i=o,a=n.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):o.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){o=n.stateNode.containerInfo,l=!0,n.child.return=n,n=n.child;continue}}else if(gu(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Ci(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var o=e!==null?e.memoizedProps:r;e=t.type;var l=t.updateQueue;if(t.updateQueue=null,l!==null){for(n[Jr]=r,e==="input"&&r.type==="radio"&&r.name!=null&&ta(n,r),tl(e,o),t=tl(e,r),o=0;o<l.length;o+=2){var i=l[o],a=l[o+1];i==="style"?ua(n,a):i==="dangerouslySetInnerHTML"?aa(n,a):i==="children"?Dn(n,a):_o(n,i,a,t)}switch(e){case"input":Zo(n,r);break;case"textarea":oa(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,l=r.value,l!=null?Bt(n,!!r.multiple,l,!1):e!==!!r.multiple&&(r.defaultValue!=null?Bt(n,!!r.multiple,r.defaultValue,!0):Bt(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(w(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,ka(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(wi=pe(),hu(t.child,!0)),wu(t);return;case 19:wu(t);return;case 17:return;case 23:case 24:hu(t,t.memoizedState!==null);return}throw Error(w(163))}function wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xf),t.forEach(function(r){var o=ed.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function td(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var nd=Math.ceil,vo=Ct.ReactCurrentDispatcher,Si=Ct.ReactCurrentOwner,_=0,ye=null,re=null,me=0,Gt=0,Ei=rt(0),ce=0,To=null,dn=0,Jn=0,cn=0,Ri=0,ki=null,wi=0,pi=Infinity;function pn(){pi=pe()+500}var D=null,yo=!1,yi=null,Oe=null,pt=!1,ir=null,ar=90,Di=[],Ii=[],Ye=null,sr=0,Pi=null,wo=-1,Qe=0,Co=0,ur=null,So=!1;function Re(){return(_&48)!=0?pe():wo!==-1?wo:wo=pe()}function st(e){if(e=e.mode,(e&2)==0)return 1;if((e&4)==0)return rn()===99?1:2;if(Qe===0&&(Qe=dn),Bf.transition!==0){Co!==0&&(Co=ki!==null?ki.pendingLanes:0),e=Qe;var t=4186112&~Co;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=rn(),(_&4)!=0&&e===98?e=xr(12,Qe):(e=zc(e),e=xr(e,Qe)),e}function ut(e,t,n){if(50<sr)throw sr=0,Pi=null,Error(w(185));if(e=Eo(e,t),e===null)return null;Lr(e,t,n),e===ye&&(cn|=t,ce===4&&fn(e,me));var r=rn();t===1?(_&8)!=0&&(_&48)==0?Mi(e):(Me(e,n),_===0&&(pn(),_e())):((_&4)==0||r!==98&&r!==99||(Ye===null?Ye=new Set([e]):Ye.add(e)),Me(e,n)),ki=e}function Eo(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Me(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-et(i),s=1<<a,c=l[a];if(c===-1){if((s&r)==0||(s&o)!=0){c=t,Qt(s);var T=Y;l[a]=10<=T?c+250:6<=T?c+5e3:-1}}else c<=t&&(e.expiredLanes|=s);i&=~s}if(r=_n(e,e===ye?me:0),t=Y,r===0)n!==null&&(n!==Bl&&Ul(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==Bl&&Ul(n)}t===15?(n=Mi.bind(null,e),je===null?(je=[n],qr=Wl(Xr,Rs)):je.push(n),n=Bl):t===14?n=Qn(99,Mi.bind(null,e)):(n=Vc(t),n=Qn(n,Cu.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Cu(e){if(wo=-1,Co=Qe=0,(_&48)!=0)throw Error(w(327));var t=e.callbackNode;if(ht()&&e.callbackNode!==t)return null;var n=_n(e,e===ye?me:0);if(n===0)return null;var r=n,o=_;_|=16;var l=Eu();(ye!==e||me!==r)&&(pn(),hn(e,r));do try{rd();break}catch(a){Su(e,a)}while(1);if(zl(),vo.current=l,_=o,re!==null?r=0:(ye=null,me=0,r=ce),(dn&cn)!=0)hn(e,0);else if(r!==0){if(r===2&&(_|=64,e.hydrate&&(e.hydrate=!1,xl(e.containerInfo)),n=Ga(e),n!==0&&(r=cr(e,n))),r===1)throw t=To,hn(e,0),fn(e,n),Me(e,pe()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(w(345));case 2:Ht(e);break;case 3:if(fn(e,n),(n&62914560)===n&&(r=wi+500-pe(),10<r)){if(_n(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Re(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=fs(Ht.bind(null,e),r);break}Ht(e);break;case 4:if(fn(e,n),(n&4186112)===n)break;for(r=e.eventTimes,o=-1;0<n;){var i=31-et(n);l=1<<i,i=r[i],i>o&&(o=i),n&=~l}if(n=o,n=pe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*nd(n/1960))-n,10<n){e.timeoutHandle=fs(Ht.bind(null,e),n);break}Ht(e);break;case 5:Ht(e);break;default:throw Error(w(329))}}return Me(e,pe()),e.callbackNode===t?Cu.bind(null,e):null}function fn(e,t){for(t&=~Ri,t&=~cn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Mi(e){if((_&48)!=0)throw Error(w(327));if(ht(),e===ye&&(e.expiredLanes&me)!=0){var t=me,n=cr(e,t);(dn&cn)!=0&&(t=_n(e,t),n=cr(e,t))}else t=_n(e,0),n=cr(e,t);if(e.tag!==0&&n===2&&(_|=64,e.hydrate&&(e.hydrate=!1,xl(e.containerInfo)),t=Ga(e),t!==0&&(n=cr(e,t))),n===1)throw n=To,hn(e,0),fn(e,t),Me(e,pe()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e),Me(e,pe()),null}function od(){if(Ye!==null){var e=Ye;Ye=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,Me(t,pe())})}_e()}function Ru(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(pn(),_e())}}function ku(e,t){var n=_;_&=-2,_|=8;try{return e(t)}finally{_=n,_===0&&(pn(),_e())}}function mo(e,t){Z(Ei,Gt),Gt|=t,dn|=t}function hi(){Gt=Ei.current,J(Ei)}function hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lf(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kr();break;case 3:sn(),J(Te),J(de),$l();break;case 5:Xl(r);break;case 4:sn();break;case 13:J(X);break;case 19:J(X);break;case 10:Vl(r);break;case 23:case 24:hi()}n=n.return}ye=e,re=ct(e.current,null),me=Gt=dn=t,ce=0,To=null,Ri=cn=Jn=0}function Su(e,t){do{var n=re;try{if(zl(),$n.current=co,uo){for(var r=b.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}uo=!1}if(er=0,ue=he=b=null,tr=!1,Si.current=null,n===null||n.return===null){ce=1,To=t,re=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=me,a.flags|=2048,a.firstEffect=a.lastEffect=null,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s;if((a.mode&2)==0){var T=a.alternate;T?(a.updateQueue=T.updateQueue,a.memoizedState=T.memoizedState,a.lanes=T.lanes):(a.updateQueue=null,a.memoizedState=null)}var N=(X.current&1)!=0,g=i;do{var R;if(R=g.tag===13){var G=g.memoizedState;if(G!==null)R=G.dehydrated!==null;else{var P=g.memoizedProps;R=P.fallback===void 0?!1:P.unstable_avoidThisFallback!==!0?!0:!N}}if(R){var d=g.updateQueue;if(d===null){var u=new Set;u.add(c),g.updateQueue=u}else d.add(c);if((g.mode&2)==0){if(g.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var f=it(-1,1);f.tag=2,at(a,f)}a.lanes|=1;break e}s=void 0,a=t;var h=l.pingCache;if(h===null?(h=l.pingCache=new Zf,s=new Set,h.set(c,s)):(s=h.get(c),s===void 0&&(s=new Set,h.set(c,s))),!s.has(a)){s.add(a);var m=ld.bind(null,l,c,a);c.then(m,m)}g.flags|=4096,g.lanes=t;break e}g=g.return}while(g!==null);s=Error((Ot(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}ce!==5&&(ce=2),s=mi(s,a),g=i;do{switch(g.tag){case 3:l=s,g.flags|=4096,t&=-t,g.lanes|=t;var H=cu(g,l,t);Is(g,H);break e;case 1:l=s;var E=g.type,M=g.stateNode;if((g.flags&64)==0&&(typeof E.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Oe===null||!Oe.has(M)))){g.flags|=4096,t&=-t,g.lanes|=t;var L=fu(g,l,t);Is(g,L);break e}}g=g.return}while(g!==null)}Du(n)}catch(x){t=x,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function Eu(){var e=vo.current;return vo.current=co,e===null?co:e}function cr(e,t){var n=_;_|=16;var r=Eu();ye===e&&me===t||hn(e,t);do try{id();break}catch(o){Su(e,o)}while(1);if(zl(),_=n,vo.current=r,re!==null)throw Error(w(261));return ye=null,me=0,ce}function id(){for(;re!==null;)Iu(re)}function rd(){for(;re!==null&&!Wf();)Iu(re)}function Iu(e){var t=Pu(e.alternate,e,Gt);e.memoizedProps=e.pendingProps,t===null?Du(e):re=t,Si.current=null}function Du(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)==0){if(n=Jf(n,t,Gt),n!==null){re=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Gt&1073741824)!=0||(n.mode&4)==0){for(var r=0,o=n.child;o!==null;)r|=o.lanes|o.childLanes,o=o.sibling;n.childLanes=r}e!==null&&(e.flags&2048)==0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=Kf(t),n!==null){n.flags&=2047,re=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ce===0&&(ce=5)}function Ht(e){var t=rn();return Pt(99,ad.bind(null,e,t)),null}function ad(e,t){do ht();while(ir!==null);if((_&48)!=0)throw Error(w(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null;var r=n.lanes|n.childLanes,o=r,l=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;for(var i=e.eventTimes,a=e.expirationTimes;0<l;){var s=31-et(l),c=1<<s;o[s]=0,i[s]=-1,a[s]=-1,l&=~c}if(Ye!==null&&(r&24)==0&&Ye.has(e)&&Ye.delete(e),e===ye&&(re=ye=null,me=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(o=_,_|=32,Si.current=null,Nl=_r,i=$a(),Il(i)){if("selectionStart"in i)a={start:i.selectionStart,end:i.selectionEnd};else e:if(a=(a=i.ownerDocument)&&a.defaultView||window,(c=a.getSelection&&a.getSelection())&&c.rangeCount!==0){a=c.anchorNode,l=c.anchorOffset,s=c.focusNode,c=c.focusOffset;try{a.nodeType,s.nodeType}catch(x){a=null;break e}var T=0,N=-1,g=-1,R=0,G=0,P=i,d=null;t:for(;;){for(var u;P!==a||l!==0&&P.nodeType!==3||(N=T+l),P!==s||c!==0&&P.nodeType!==3||(g=T+c),P.nodeType===3&&(T+=P.nodeValue.length),(u=P.firstChild)!==null;)d=P,P=u;for(;;){if(P===i)break t;if(d===a&&++R===l&&(N=T),d===s&&++G===c&&(g=T),(u=P.nextSibling)!==null)break;P=d,d=P.parentNode}P=u}a=N===-1||g===-1?null:{start:N,end:g}}else a=null;a=a||{start:0,end:0}}else a=null;Gl={focusedElem:i,selectionRange:a},_r=!1,ur=null,So=!1,D=r;do try{sd()}catch(x){if(D===null)throw Error(w(330));dt(D,x),D=D.nextEffect}while(D!==null);ur=null,D=r;do try{for(i=e;D!==null;){var f=D.flags;if(f&16&&Dn(D.stateNode,""),f&128){var h=D.alternate;if(h!==null){var m=h.ref;m!==null&&(typeof m=="function"?m(null):m.current=null)}}switch(f&1038){case 2:Tu(D),D.flags&=-3;break;case 6:Tu(D),D.flags&=-3,Ci(D.alternate,D);break;case 1024:D.flags&=-1025;break;case 1028:D.flags&=-1025,Ci(D.alternate,D);break;case 4:Ci(D.alternate,D);break;case 8:a=D,mu(i,a);var H=a.alternate;yu(a),H!==null&&yu(H)}D=D.nextEffect}}catch(x){if(D===null)throw Error(w(330));dt(D,x),D=D.nextEffect}while(D!==null);if(m=Gl,h=$a(),f=m.focusedElem,i=m.selectionRange,h!==f&&f&&f.ownerDocument&&ba(f.ownerDocument.documentElement,f)){for(i!==null&&Il(f)&&(h=i.start,m=i.end,m===void 0&&(m=h),"selectionStart"in f?(f.selectionStart=h,f.selectionEnd=Math.min(m,f.value.length)):(m=(h=f.ownerDocument||document)&&h.defaultView||window,m.getSelection&&(m=m.getSelection(),a=f.textContent.length,H=Math.min(i.start,a),i=i.end===void 0?H:Math.min(i.end,a),!m.extend&&H>i&&(a=i,i=H,H=a),a=qa(f,H),l=qa(f,i),a&&l&&(m.rangeCount!==1||m.anchorNode!==a.node||m.anchorOffset!==a.offset||m.focusNode!==l.node||m.focusOffset!==l.offset)&&(h=h.createRange(),h.setStart(a.node,a.offset),m.removeAllRanges(),H>i?(m.addRange(h),m.extend(l.node,l.offset)):(h.setEnd(l.node,l.offset),m.addRange(h)))))),h=[],m=f;m=m.parentNode;)m.nodeType===1&&h.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<h.length;f++)m=h[f],m.element.scrollLeft=m.left,m.element.scrollTop=m.top}_r=!!Nl,Gl=Nl=null,e.current=n,D=r;do try{for(f=e;D!==null;){var E=D.flags;if(E&36&&$f(f,D.alternate,D),E&128){h=void 0;var M=D.ref;if(M!==null){var L=D.stateNode;switch(D.tag){case 5:h=L;break;default:h=L}typeof M=="function"?M(h):M.current=h}}D=D.nextEffect}}catch(x){if(D===null)throw Error(w(330));dt(D,x),D=D.nextEffect}while(D!==null);D=null,Of(),_=o}else e.current=n;if(pt)pt=!1,ir=e,ar=t;else for(D=r;D!==null;)t=D.nextEffect,D.nextEffect=null,D.flags&8&&(E=D,E.sibling=null,E.stateNode=null),D=t;if(r=e.pendingLanes,r===0&&(Oe=null),r===1?e===Pi?sr++:(sr=0,Pi=e):sr=0,n=n.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Fl,n,void 0,(n.current.flags&64)==64)}catch(x){}if(Me(e,pe()),yo)throw yo=!1,e=yi,yi=null,e;return(_&8)!=0||_e(),null}function sd(){for(;D!==null;){var e=D.alternate;So||ur===null||((D.flags&8)!=0?va(D,ur)&&(So=!0):D.tag===13&&td(e,D)&&va(D,ur)&&(So=!0));var t=D.flags;(t&256)!=0&&qf(e,D),(t&512)==0||pt||(pt=!0,Qn(97,function(){return ht(),null})),D=D.nextEffect}}function ht(){if(ar!==90){var e=97<ar?97:ar;return ar=90,Pt(e,ud)}return!1}function bf(e,t){Di.push(t,e),pt||(pt=!0,Qn(97,function(){return ht(),null}))}function pu(e,t){Ii.push(t,e),pt||(pt=!0,Qn(97,function(){return ht(),null}))}function ud(){if(ir===null)return!1;var e=ir;if(ir=null,(_&48)!=0)throw Error(w(331));var t=_;_|=32;var n=Ii;Ii=[];for(var r=0;r<n.length;r+=2){var o=n[r],l=n[r+1],i=o.destroy;if(o.destroy=void 0,typeof i=="function")try{i()}catch(s){if(l===null)throw Error(w(330));dt(l,s)}}for(n=Di,Di=[],r=0;r<n.length;r+=2){o=n[r],l=n[r+1];try{var a=o.create;o.destroy=a()}catch(s){if(l===null)throw Error(w(330));dt(l,s)}}for(a=e.current.firstEffect;a!==null;)e=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=e;return _=t,_e(),!0}function Mu(e,t,n){t=mi(n,t),t=cu(e,t,1),at(e,t),t=Re(),e=Eo(e,1),e!==null&&(Lr(e,1,t),Me(e,t))}function dt(e,t){if(e.tag===3)Mu(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Mu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Oe===null||!Oe.has(r))){e=mi(t,e);var o=fu(n,e,1);if(at(n,o),o=Re(),n=Eo(n,1),n!==null)Lr(n,1,o),Me(n,o);else if(typeof r.componentDidCatch=="function"&&(Oe===null||!Oe.has(r)))try{r.componentDidCatch(t,e)}catch(l){}break}}n=n.return}}function ld(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(me&n)===n&&(ce===4||ce===3&&(me&62914560)===me&&500>pe()-wi?hn(e,0):Ri|=n),Me(e,t)}function ed(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)==0?t=1:(t&4)==0?t=rn()===99?1:2:(Qe===0&&(Qe=dn),t=Jt(62914560&~Qe),t===0&&(t=4194304))),n=Re(),e=Eo(e,t),e!==null&&(Lr(e,t,n),Me(e,n))}var Pu;Pu=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)xe=!0;else if((n&r)!=0)xe=(e.flags&16384)!=0;else{switch(xe=!1,t.tag){case 3:eu(t),bl();break;case 5:Ls(t);break;case 1:we(t.type)&&Zr(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var o=t.type._context;Z(br,o._currentValue),o._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!=0?ou(e,t,n):(Z(X,X.current&1),t=Ve(e,t,n),t!==null?t.sibling:null);Z(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!=0,(e.flags&64)!=0){if(r)return iu(e,t,n);t.flags|=64}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(X,X.current),r)break;return null;case 23:case 24:return t.lanes=0,si(e,t,n)}return Ve(e,t,n)}else xe=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=nn(t,de.current),ln(t,n),o=ti(null,t,r,e,o,n),t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)){var l=!0;Zr(t)}else l=!1;t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Yl(t);var i=r.getDerivedStateFromProps;typeof i=="function"&&to(t,r,i,e),o.updater=no,t.stateNode=o,o._reactInternals=t,Ql(t,r,e,n),t=ui(null,t,r,!0,l,n)}else t.tag=0,Se(null,t,o,n),t=t.child;return t;case 16:o=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,l=o._init,o=l(o._payload),t.type=o,l=t.tag=cd(o),e=He(o,e),l){case 0:t=ai(null,t,o,e,n);break e;case 1:t=$s(null,t,o,e,n);break e;case 11:t=Zs(null,t,o,e,n);break e;case 14:t=qs(null,t,o,He(o.type,e),r,n);break e}throw Error(w(306,o,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),ai(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),$s(e,t,r,o,n);case 3:if(eu(t),r=t.updateQueue,e===null||r===null)throw Error(w(282));if(r=t.pendingProps,o=t.memoizedState,o=o!==null?o.element:null,Ds(e,t),Kn(t,r,null,n),r=t.memoizedState.element,r===o)bl(),t=Ve(e,t,n);else{if(o=t.stateNode,(l=o.hydrate)&&(ft=en(t.stateNode.containerInfo.firstChild),ze=t,l=We=!0),l){if(e=o.mutableSourceEagerHydrationData,e!=null)for(o=0;o<e.length;o+=2)l=e[o],l._workInProgressVersionPrimary=e[o+1],un.push(l);for(n=xs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Se(e,t,r,n),bl();t=t.child}return t;case 5:return Ls(t),e===null&&ql(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Hl(r,o)?i=null:l!==null&&Hl(r,l)&&(t.flags|=16),bs(e,t),Se(e,t,i,n),t.child;case 6:return e===null&&ql(t),null;case 13:return ou(e,t,n);case 4:return Zl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=io(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Zs(e,t,r,o,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value;var a=t.type._context;if(Z(br,a._currentValue),a._currentValue=l,i!==null)if(a=i.value,l=ke(a,l)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,l):1073741823)|0,l===0){if(i.children===o.children&&!Te.current){t=Ve(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var c=s.firstContext;c!==null;){if(c.context===r&&(c.observedBits&l)!=0){a.tag===1&&(c=it(-1,n&-n),c.tag=2,at(a,c)),a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ks(a.return,n),s.lanes|=n;break}c=c.next}}else i=a.tag===10&&a.type===t.type?null:a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,l=t.pendingProps,r=l.children,ln(t,n),o=De(o,l.unstable_observedBits),r=r(o),t.flags|=1,Se(e,t,r,n),t.child;case 14:return o=t.type,l=He(o,t.pendingProps),l=He(o.type,l),qs(e,t,o,l,r,n);case 15:return Xs(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,we(r)?(e=!0,Zr(t)):e=!1,ln(t,n),Ns(t,r,o),Ql(t,r,o,n),ui(null,t,r,!0,e,n);case 19:return iu(e,t,n);case 23:return si(e,t,n);case 24:return si(e,t,n)}throw Error(w(156,t.tag))};function fd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new fd(e,t,n,r)}function ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cd(e){if(typeof e=="function")return ii(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cr)return 11;if(e===Er)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")ii(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ze:return an(n.children,o,l,t);case Xi:i=8,o|=16;break;case Fo:i=8,o|=1;break;case Sn:return e=Ie(12,n,t,o|8),e.elementType=Sn,e.type=Sn,e.lanes=l,e;case En:return e=Ie(13,n,t,o),e.type=En,e.elementType=En,e.lanes=l,e;case Sr:return e=Ie(19,n,t,o),e.elementType=Sr,e.lanes=l,e;case zo:return ci(n,o,l,t);case Vo:return e=Ie(24,n,t,o),e.elementType=Vo,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wo:i=10;break e;case Uo:i=9;break e;case Cr:i=11;break e;case Er:i=14;break e;case Oo:i=16,r=null;break e;case Bo:i=22;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ie(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function an(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function ci(e,t,n,r){return e=Ie(23,e,r,t),e.elementType=zo,e.lanes=n,e}function Jl(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function Kl(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dd(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.mutableSourceEagerHydrationData=null}function pd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:St,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ro(e,t,n,r){var o=t.current,l=Re(),i=st(o);e:if(n){n=n._reactInternals;t:{if(Rt(n)!==n||n.tag!==1)throw Error(w(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(we(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(w(171))}if(n.tag===1){var s=n.type;if(we(s)){n=ms(n,s,a);break e}}n=a}else n=ot;return t.context===null?t.context=n:t.pendingContext=n,t=it(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),at(o,t),ut(o,i,l),i}function Ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Au(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ni(e,t){Au(e,t),(e=e.alternate)&&Au(e,t)}function hd(){return null}function Gi(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new dd(e,t,n!=null&&n.hydrate===!0),t=Ie(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,Yl(t),e[$t]=n.current,ss(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var o=t._getVersion;o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o)}this._internalRoot=n}Gi.prototype.render=function(e){Ro(e,this._internalRoot,null,null)};Gi.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Ro(null,e,null,function(){t[$t]=null})};function fr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function md(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Gi(e,0,t?{hydrate:!0}:void 0)}function ko(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l._internalRoot;if(typeof o=="function"){var a=o;o=function(){var c=Ai(i);a.call(c)}}Ro(t,i,e,o)}else{if(l=n._reactRootContainer=md(n,r),i=l._internalRoot,typeof o=="function"){var s=o;o=function(){var c=Ai(i);s.call(c)}}ku(function(){Ro(t,i,e,o)})}return Ai(i)}Ta=function(e){if(e.tag===13){var t=Re();ut(e,4,t),Ni(e,4)}};cl=function(e){if(e.tag===13){var t=Re();ut(e,67108864,t),Ni(e,67108864)}};wa=function(e){if(e.tag===13){var t=Re(),n=st(e);ut(e,n,t),Ni(e,n)}};Ca=function(e,t){return t()};rl=function(e,t,n){switch(t){case"input":if(Zo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Pr(r);if(!o)throw Error(w(90));$i(r),Zo(r,o)}}}break;case"textarea":oa(e,n);break;case"select":t=n.value,t!=null&&Bt(e,!!n.multiple,t,!1)}};ol=Ru;pa=function(e,t,n,r,o){var l=_;_|=4;try{return Pt(98,e.bind(null,t,n,r,o))}finally{_=l,_===0&&(pn(),_e())}};ll=function(){(_&49)==0&&(od(),ht())};ha=function(e,t){var n=_;_|=2;try{return e(t)}finally{_=n,_===0&&(pn(),_e())}};function Nu(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fr(t))throw Error(w(200));return pd(e,t,null,n)}var gd={Events:[Pn,Xt,Pr,fa,da,ht,{current:!1}]},dr={findFiberByHostInstance:kt,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},yd={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ya(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||hd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(pr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!pr.isDisabled&&pr.supportsFiber))try{Fl=pr.inject(yd),It=pr}catch(e){}var pr,vd=gd,Td=Nu,wd=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):Error(w(268,Object.keys(e)));return e=ya(t),e=e===null?null:e.stateNode,e},Cd=function(e,t){var n=_;if((n&48)!=0)return e(t);_|=1;try{if(e)return Pt(99,e.bind(null,t))}finally{_=n,_e()}},Sd=function(e,t,n){if(!fr(t))throw Error(w(200));return ko(null,e,t,!0,n)},Ed=function(e,t,n){if(!fr(t))throw Error(w(200));return ko(null,e,t,!1,n)},Rd=function(e){if(!fr(e))throw Error(w(40));return e._reactRootContainer?(ku(function(){ko(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1},kd=Ru,Dd=function(e,t){return Nu(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},Id=function(e,t,n,r){if(!fr(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return ko(e,t,n,!1,r)},Pd="17.0.2",Md={__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:vd,createPortal:Td,findDOMNode:wd,flushSync:Cd,hydrate:Sd,render:Ed,unmountComponentAtNode:Rd,unstable_batchedUpdates:kd,unstable_createPortal:Dd,unstable_renderSubtreeIntoContainer:Id,version:Pd},Ad=Ke(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Md}),Hi=Ad.render;var xi=Symbol(),Li=Symbol(),_i=Symbol(),Do=Symbol();function xt(e,t){function n(...r){if(r.length>=e.length)return e(...r);{let o=(...l)=>n(...r,...l);return o[xi]=e,o[Li]=n,o[_i]=r,o[Do]=n[Do],o}}return n[xi]=e,n[Li]=n,n[_i]=[],n[Do]=t||Gu(e),n}function Fi(e){return e[xi]}function Nd(e){return e[Li]}function Io(e){return e[_i]||[]}function Gu(e){return e[Do]||e.name}function Hd(){let e=[];return{test:t,getAllTests:n};function t(r,o){e.push(...Object.entries(o).map(([l,i])=>Gd(r,l,i)))}function n(){return e}}function y(e,t,...n){let r=t(...n,e);if(typeof r=="function")throw new Error("The matcher function `"+Wi(r)+"` returned a function instead of a boolean. You might need to pass another argument to it.");if(!r)throw new Po([e,t,...n])}function Gd(e,t,n){return{subject:e,scenario:t,fn:n}}var Po=class extends Error{constructor(t){super("Expectation failed");this.expectArgs=t}};function xd(e){return e[e.length-1]}function Hu(e){return e[0]}var Ld=xt(function(e,t){return e(t)},"which"),B=xt(function(e,t){var n,r;if(_d(e))return e(t);if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((o,l)=>B(e[l],t[l]));if(e instanceof Function&&t instanceof Function)return Fi(e)&&Fi(e)===Fi(t)?B(Io(e),Io(t)):e===t;if(e instanceof Date&&t instanceof Date)return e.toISOString()===t.toISOString();if(e instanceof Set&&t instanceof Set)return e.size===t.size&&[...e.values()].every(o=>t.has(o));if(e instanceof Error&&t instanceof Error)return e.message===t.message&&e.__proto__.constructor===t.__proto__.constructor;if(xu(e)&&xu(t)){let o=Object.keys(e),l=Object.keys(t);return o.length===l.length&&o.every(i=>B(e[i],t[i]))&&((n=e.__proto__)==null?void 0:n.constructor)===((r=t.__proto__)==null?void 0:r.constructor)}return e===t},"equals"),S=xt(function(e,t){return e===t},"is"),Ui=xt(function(e,t,...n){return!e(t,...n)},"not"),Lu=xt(function(e){return/^\s*$/.test(e)},"isBlank");function xu(e){return!!e&&typeof e=="object"}function _d(e){return e instanceof Function&&Nd(e)===Ld&&Io(e).length===1}function Wi(e){return Gu(e)||"<function>"}function Fu(e){let t=[];return n(e);function n(s){var c;if(s===null)return"null";if(typeof s=="function")return r(s,o);if(typeof s=="string")return Oi(s);if(typeof s=="bigint")return`${s}n`;if(Array.isArray(s))return r(s,l);if(s instanceof Date)return`Date(${s.toISOString().replace("T"," ").replace("Z"," UTC")})`;if(s instanceof RegExp)return String(s);if(s instanceof Error)return`${_u(s)}(${Oi(s.message)})`;if(s instanceof Set)return r(s,a);if(typeof s=="object"){let T=(c=s==null?void 0:s.__proto__)==null?void 0:c.constructor;return T===Object||!T?r(s,i):`${_u(s)} ${r(s,i)}`}return String(s)}function r(s,c){if(t.indexOf(s)>-1)return"<circular reference>";t.push(s);let T=c(s);return t.pop(),T}function o(s){let c=Io(s).map(n),T=Wi(s);return c.length?hr(T+"(",c,",",")"):T}function l(s){return hr("[",s.map(n),",","]")}function i(s){let c=Object.entries(s).map(([T,N])=>`${Fd(T)}: ${n(N)}`);return hr("{",c,",","}")}function a(s){let c=[...s.values()].map(n);return hr("Set {",c,",","}")}}function Fd(e){return/^[a-zA-Z0-9_$]+$/.test(e)?e:Oi(e)}function _u(e){return Wi(e.__proto__.constructor)}function Oi(e){return'"'+String(e).replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/"/g,'\\"').replace(/[\x00-\x1f\x7f]/g,Wd)+'"'}function Wd(e){let t=e.charCodeAt(0).toString(16);return"\\x"+(t.length<2?"0"+t:t)}function Mo(e,t){return t.split(`
`).map(n=>n&&Od(Ud(e," "))(n)).join(`
`)}function Ud(e,t){return Array(e+1).join(t)}var Od=e=>t=>e+t,Bd=xt(function(t,n){return n.slice(0,t.length)===t?n.slice(t.length):n});function jd(e){return String(e).split(/\r?\n/)}function zd(e){let t=jd(e);Lu(Hu(t))&&t.shift(),Lu(xd(t))&&t.pop();let n=/^[ \t]*/.exec(Hu(t))[0];return t.map(Bd(n)).join(`
`)}function hr(e,t,n,r){return t.length<2?e+t.join("")+r:e+`
`+Mo(2,t.join(n+`
`))+`
`+r}function Uu(e){return wr(this,null,function*(){let t=[];for(let n of e){let r=yield Vd(n.fn),o=Wu.map(l=>({type:"debug",args:l}));Wu.length=0,t.push({test:n,error:r,instrumentLog:o})}return{results:t}})}function Vd(e){let t;try{let n=e();if(n instanceof Promise)return new Promise(r=>{n.then(()=>r()).catch(r)})}catch(n){t=n}return Promise.resolve(t)}var Wu=[];var ih=xt(function(t,n){return n instanceof Po&&B(t,n.expectArgs)}),Ao=`

`;function Ou({results:e}){let t=!1,n=!1,r=[];for(let o of e){let l=!1;o.error&&(l=t=!0),o.instrumentLog.length&&(l=n=!0),l&&r.push(o)}return t?Yd(r):n?Jd(e.length,r):Qd(e.length)}function Yd(e){return e.map(Bu).join(Ao)+Ao+"Tests failed."}function Qd(e){switch(e){case 0:return"No tests to run.";case 1:return"One test ran, and found no issues.";default:return`${e} tests ran, and found no issues.`}}function Jd(e,t){return t.map(Bu).join(Ao)+Ao+Kd(e)+`, but debugging instrumentation is present.
Remove it before shipping.`}function Kd(e){switch(e){case 1:return"The test passed";case 2:return"Both tests passed";default:return`All ${e} tests passed`}}function Bu({test:e,error:t,instrumentLog:n}){let o=[e.subject+" "+e.scenario];return n.length&&o.push(Mo(2,Xd(n))),t&&o.push(Mo(2,Zd(t))),o.join(`
`)}function Zd(e){return e instanceof Po?qd(e):bd(e)}function Xd(e){return e.map(({args:t})=>ju("debug",t)).join("")}function qd(e){return ju("expect",e.expectArgs)}function bd(e){return Fu(e)+" thrown"+Mo(2,$d(e.stack))}function ju(e,t){return hr(e+"(",t.map(Fu),",",")")}function $d(e){if(!e)return"";let t=zd(e).split(`
`);return`
`+t.slice(0,ep(t)).map(n=>n.replace(/(file:\/\/|http:\/\/[^/]*)/,"").replace(/^([^@]*)@(.*)$/,"at $1 ($2)")).join(`
`)}function ep(e){let t=e.findIndex(n=>n.includes("errorFrom"));return t===-1?e.length:t}var ah=Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]}),tp=Hd(),{getAllTests:zu}=tp;function q(...e){}function mt(){return(+new Date%1e6/1e3).toFixed(3)}function z(e,t=0){return isNaN(e)||e===Infinity||e===-Infinity?"--:--":e<0?"-"+Vu(-e,t):Vu(e,t)}function Vu(e,t){function n(i,a=np){return(i<10?"0":"")+a(i)}let r=Math.floor(e/3600),o=Math.floor(e%3600/60),l=e%60;return r>0?`${r}:${n(o)}:${n(l,Yu(t))}`:`${o}:${n(l,Yu(t))}`}q("hoursMinutesSeconds",{"formats NaN"(){y(z(0/0),S,"--:--")},"formats Infinities"(){y(z(Infinity),S,"--:--"),y(z(-Infinity),S,"--:--")},"formats negative numbers"(){y(z(-1),S,"-0:01"),y(z(-3661.12,2),S,"-1:01:01.12")},"formats single-digit seconds with leading zero"(){y(z(0),S,"0:00"),y(z(1),S,"0:01"),y(z(9),S,"0:09")},"formats double-digit seconds"(){y(z(10),S,"0:10"),y(z(59),S,"0:59")},"formats minutes"(){y(z(60),S,"1:00"),y(z(61),S,"1:01"),y(z(119),S,"1:59"),y(z(120),S,"2:00"),y(z(3599),S,"59:59")},"formats hours"(){y(z(3600),S,"1:00:00"),y(z(7200),S,"2:00:00"),y(z(3661),S,"1:01:01"),y(z(3610),S,"1:00:10"),y(z(3600+600),S,"1:10:00"),y(z(36001),S,"10:00:01")},"adds decimal places"(){y(z(0,0),S,"0:00"),y(z(0,1),S,"0:00.0"),y(z(0,2),S,"0:00.00")},"formats fractional seconds"(){y(z(1.23,2),S,"0:01.23")},"rounds decimals"(){y(z(2.3456,2),S,"0:02.35")}});var np=e=>e,Yu=e=>t=>t.toFixed(e);function mn(e){var t;return(t=/v=(.{11})/.exec(e))==null?void 0:t[1]}function Qu(){return{getPlayerState(){return le.UNSTARTED},getCurrentTime(){return 0},getVideoUrl(){return""},cueVideoById(){},playVideo(){},seekTo(){},getDuration(){return 0},addEventListener(){},removeEventListener(){}}}function Ju(e){return{getPlayerState(){return e.getPlayerState()},getCurrentTime(){return e.getCurrentTime()},getVideoUrl(){return e.getVideoUrl()},cueVideoById(...t){return console.debug(mt(),"player.cueVideoById",...t),e.cueVideoById(...t)},playVideo(...t){return console.debug(mt(),"player.playVideo",...t),e.playVideo(...t)},seekTo(...t){return console.debug(mt(),"player.seekTo",...t,mn(e.getVideoUrl())),e.seekTo(...t)},getDuration(){return e.getDuration()},addEventListener(...t){return console.debug(mt(),"player.addEventListener"),e.addEventListener(...t)},removeEventListener(...t){return console.debug(mt(),"player.removeEventListener"),e.removeEventListener(...t)}}}var le={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};function Ku(e){return wr(this,null,function*(){let t=yield rp();return new Promise(n=>{let r=new t.Player(e,{height:450,width:800,videoId:null,playerVars:{controls:0,disablekb:1},events:{onReady(){n(r)}}})})})}function rp(){return Zu?Promise.resolve(window.YT):new Promise(e=>{var t;if(document.querySelector("script[src='https://www.youtube.com/iframe_api']")===null){let n=document.createElement("script");n.src="https://www.youtube.com/iframe_api";let r=document.getElementsByTagName("script")[0];(t=r.parentNode)==null||t.insertBefore(n,r)}Bi.push(e)})}var Zu=!1,Bi=[];window.onYouTubeIframeAPIReady=()=>{Zu=!0,Bi.forEach(e=>e(window.YT)),Bi.length=0};function Xu(e,t){let n=Tn(),r=Tn();r.current=e,Wt(()=>(n.current=setInterval(()=>{var o;return(o=r.current)==null?void 0:o.call(r)},t),()=>clearInterval(n.current)),[t])}function qu(){let[e,t]=Ge(!1);return[e,()=>t(!0)]}function mr(e){switch(e){case le.BUFFERING:return"buffering";case le.UNSTARTED:return"unstarted";case le.CUED:return"cued";case le.ENDED:return"ended";case le.PLAYING:return"playing";case le.PAUSED:return"paused";default:return""}}function bu(e){return e.channel.getName()+" "+mr(e.code)}function gr(e){try{e()}catch(t){return t}}function gt(e,t){if(e.length===0)throw new Error("can't pick element from an empty array");if(t>=1||t<0)throw new Error("fraction out of bounds: "+t);return e[Math.floor(t*e.length)]}q("pick",{"throws if the array is empty"(){y(gr(()=>gt([],0)),B,new Error("can't pick element from an empty array"))},"throws if the fraction is 1"(){y(gr(()=>gt([""],1)),B,new Error("fraction out of bounds: 1"))},"throws if the fraction is > 1"(){y(gr(()=>gt([""],1.25)),B,new Error("fraction out of bounds: 1.25"))},"throws if the fraction is > 0"(){y(gr(()=>gt([""],-.25)),B,new Error("fraction out of bounds: -0.25"))},"picks the first element of the array given 0"(){y(gt([1,2],0),S,1)},"picks the last element of the array given 1 - epsilon"(){y(gt([1,2],.99),S,2)}});function gn(e,t){let n={};return r=>(r in n||(Object.keys(n).length===e&&(n={}),n[r]=t(r)),n[r])}q("cache",{"caches a value"(){let e=0,t=gn(1,()=>(e++,123));t("foo"),t("foo"),y(e,S,1)},"computes and caches values by key"(){let e=gn(2,t=>t+"x");y(e("foo"),S,"foox"),y(e("bar"),S,"barx")},"caches multiple values"(){let e=0,t=gn(2,n=>(e++,n+"x"));t("foo"),t("foo"),t("bar"),t("bar"),y(e,S,2),y(t("foo"),S,"foox"),y(t("bar"),S,"barx")},"a max size of 0 means no limit"(){let e=0,t=gn(0,()=>(e++,123));t("a"),t("b"),t("c"),y(e,S,3)}});function yr(e){let t=1779033703,n=3144134277,r=1013904242,o=2773480762;for(let l=0,i;l<e.length;l++)i=e.charCodeAt(l),t=n^Math.imul(t^i,597399067),n=r^Math.imul(n^i,2869860233),r=o^Math.imul(r^i,951274213),o=t^Math.imul(o^i,2716044179);return t=Math.imul(r^t>>>18,597399067),n=Math.imul(o^n>>>22,2869860233),r=Math.imul(t^r>>>17,951274213),o=Math.imul(n^o>>>19,2716044179),(t^n^r^o)>>>0}q("cyrb128_32",{"hashes unix timestamps to random-looking values"(){y(yr("1661673600"),S,1866196007),y(yr("1661760000"),S,3655929289),y(yr("1661846400"),S,2165297363)}});function No(e){return function(){var t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}q("mulberry32",{"flips coins fairly"(){let e=0,t=0,n=No(0);for(let r=0;r<200;r++)n()<.5?e++:t++;y(e-t,S,12)},"generates a reasonably uniform distribution of numbers"(){let e=new Set,t=No(0);for(let n=0;n<100;n++)e.add(Math.floor(t()*1e4));y(e.size,S,99)}});function $(e,t){let n=-1,r=e.length-1;for(;n<r;){let o=op(n,r);t(e[o])?n=o:r=o-1}return e[n]}function op(e,t){return Math.ceil((e+t)/2)}q("binarySearch",{"returns undefined given an empty array"(){y($([],()=>!1),S,void 0)},"returns an element that is to the left of the target"(){y($([1],()=>!0),S,1)},"returns undefined when the only element is not left of the target"(){y($([1],()=>!1),S,void 0)},"returns the rightmost element that is left of the target"(){y($([1,2,3,4],e=>e<=2.5),S,2)},"works with duplicates"(){y($([0,1,2,3,0,0,0,0,0],e=>e>0),S,3)},"works with two elements"(){y($([1,2],e=>e<=1.5),S,1),y($([1,2],e=>e<=2),S,2)},"works with three elements"(){y($([1,2,3],e=>e<=1.5),S,1),y($([1,2,3],e=>e<=2),S,2),y($([1,2,3],e=>e<=3),S,3)},"works with four elements"(){y($([1,2,3,4],e=>e<=1.5),S,1),y($([1,2,3,4],e=>e<=2),S,2),y($([1,2,3,4],e=>e<=3),S,3),y($([1,2,3,4],e=>e<=4),S,4)},"works with five elements"(){y($([1,2,3,4,5],e=>e<=1.5),S,1),y($([1,2,3,4,5],e=>e<=2),S,2),y($([1,2,3,4,5],e=>e<=3),S,3),y($([1,2,3,4,5],e=>e<=4),S,4),y($([1,2,3,4,5],e=>e<=5),S,5)}});var Ae=2;function yn(e,t){let n=gn(1,Go(t));return{getBroadcast:r,getName(){return e}};function r(o){let l=o/1e3,i=(l-8*3600)%(24*3600),a=l-i,s=n(String(a)),c=$(s,T=>T.startAt<=i);return c==null?{type:"nothing",nextVideoId:""}:c.type==="video"?{type:"video",videoId:c.videoId,videoTitle:c.videoTitle,currentTime:i-c.startAt}:{type:"nothing",nextVideoId:c.nextVideoId}}}var Go=e=>t=>{let n=No(yr(t)),r=0,o=[];for(;r<24*3600;){let l=gt(e,n());for(let i of l.videos)o.push({type:"nothing",startAt:r,nextVideoId:i.videoId},{type:"video",videoId:i.videoId,videoTitle:i.title,startAt:r+Ae}),r+=i.durationSeconds+Ae}return o};q("ScheduleGenerator",{"schedules a single 24-hour video"(){let e=[{videos:[{durationSeconds:3600*24,videoId:"the-video-id",title:"the-title"}]}],t=Go(e);y(t(""),B,[{type:"nothing",startAt:0,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:"the-title",startAt:2}])},"schedules a 12-hour video twice"(){let e=[{videos:[{durationSeconds:3600*12,videoId:"the-video-id",title:"the-title"}]}],t=Go(e);y(t(""),B,[{type:"nothing",startAt:0,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:"the-title",startAt:2},{type:"nothing",startAt:43202,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:"the-title",startAt:43204}])},"picks the videos to show randomly"(){let e=[{videos:[{durationSeconds:3600*2,videoId:"one",title:""}]},{videos:[{durationSeconds:3600*2,videoId:"two",title:""}]},{videos:[{durationSeconds:3600*2,videoId:"three",title:""}]}],t=Go(e);y(t("asdfx").map(n=>n.videoId).filter(Boolean),B,["three","one","three","two","two","three","one","three","two","two","one","one"])}});function $u(e){return{type:"nothing",nextVideoId:e}}function Je(e,t){return{getBroadcast:n=>{let r=n/1e3,o=0,l=t.map(a=>a.videos).flatMap(a=>a.map(s=>s.durationSeconds)).reduce(lp,0)+t.length*Ae,i=r%l;for(let a of t){let{videoId:s,title:c,durationSeconds:T}=a.videos[0];if(o+Ae>i)return $u(s);if(o+=Ae,o+T>i)return{type:"video",currentTime:i-o,videoId:s,videoTitle:c};o+=T}return console.log("GAP---------------GAP"),$u("")},getName:()=>e}}var lp=(e,t)=>e+t;q("looping channel",{"plays the first episode after the second"(){let e=Je("Jonathan",[{videos:[{videoId:"first",title:"The First",durationSeconds:100}]},{videos:[{videoId:"second",title:"The Second",durationSeconds:100}]}]);y(e.getBroadcast(250*1e3),B,{videoId:"first",videoTitle:"The First",currentTime:44,type:"video"})},"uses the provided name"(){let e=Je("Jonathan",[]);y(e.getName(),S,"Jonathan")},"when no videos are provided, plays nothing"(){let e=Je("Jonathan",[]);y(e.getBroadcast(42).type,S,"nothing")},"plays a first video at the beginning"(){let e=Je("Jonathan",[{videos:[{videoId:"the-id",title:"the-title",durationSeconds:42}]}]);y(e.getBroadcast(0+Ae*1e3),B,{type:"video",videoId:"the-id",currentTime:0,videoTitle:"the-title"})},"plays a video all the way though"(){let e=Je("Jonathan",[{videos:[{videoId:"the-id",title:"the-title",durationSeconds:42}]}]);y(e.getBroadcast(1e3+Ae*1e3),B,{type:"video",videoId:"the-id",currentTime:1,videoTitle:"the-title"})},"puts a gap between videos"(){let e=Je("Jonathan",[{videos:[{videoId:"first",title:"The First",durationSeconds:100}]},{videos:[{videoId:"second",title:"The Second",durationSeconds:10}]}]);y(e.getBroadcast(103*1e3),B,{type:"nothing",nextVideoId:"second"})},"plays a second episode after the first"(){let e=Je("Jonathan",[{videos:[{videoId:"first",title:"The First",durationSeconds:1}]},{videos:[{videoId:"second",title:"The Second",durationSeconds:1}]}]);y(e.getBroadcast(2*Ae*1e3+1e3),B,{type:"video",videoId:"second",currentTime:0,videoTitle:"The Second"})}});function fe(e){return e.split(/\n+/).map(ap).filter(Ui(ip)).filter(Ui(sp)).map(vr(/ +/,3)).flatMap(([t,n,r])=>n==="SHORTS"?[]:[{videoId:t,durationSeconds:Ne(n),title:r}])}q("parseVideos",{"empty string"(){y(fe(""),B,[])},spaces(){y(fe("  "),B,[])},newlines(){y(fe(`


`),B,[])},"newlines and spaces"(){y(fe(` 
 
 
`),B,[])},comments(){y(fe(`#foo
# bar`),B,[])},"strips spaces before comments"(){y(fe(`  #foo
  # bar`),B,[])},"parses actual data"(){y(fe(`
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
      Ga8tNxnHjt4 3:01 Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971
    `),B,[{videoId:"leb645Xu6uo",durationSeconds:654,title:"Captain Murderer - Emlyn Williams"},{videoId:"Ga8tNxnHjt4",durationSeconds:181,title:"Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971"}])},"removes shorts"(){y(fe(`
      undefined SHORTS blah blah
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
    `),B,[{videoId:"leb645Xu6uo",durationSeconds:654,title:"Captain Murderer - Emlyn Williams"}])}});function ip(e){return e.startsWith("#")}function Ne(e){let t=[1,60,3600,86400],n=e.split(":").map(r=>parseInt(r,10)).reverse();return up(n,t).map(([r,o])=>r*o).reduce(cp,0)}q("parseDuration",{"0:00"(){y(Ne("0:00"),S,0)},"00:00"(){y(Ne("00:00"),S,0)},"1 second"(){y(Ne("0:01"),S,1)},"10 seconds"(){y(Ne("0:10"),S,10)},"1 minute"(){y(Ne("1:00"),S,60)},"1 minute 10 seconds"(){y(Ne("1:10"),S,70)},"10 minutes 10 seconds"(){y(Ne("10:10"),S,610)},"1 hour"(){y(Ne("1:00:00"),S,3600)},"1 hour 1 second"(){y(Ne("1:00:01"),S,3601)},"10 hours 1 second"(){y(Ne("10:00:01"),S,36001)},"1 day 1 second"(){y(Ne("1:0:00:01"),S,86401)}});function ap(e){return e.trim()}function sp(e){return e.length===0}var vr=(e,t=Infinity)=>n=>{if(typeof e=="string"&&e.length===0)throw"split(): empty delimiter not supported";let r=0,o=0,l=[],i=n;for(;l.length<t-1&&i.length>0;){let a=i.match(e);if(a==null)break;l.push(i.slice(0,a.index)),i=i.slice(a.index+a[0].length)}return l.push(i),l};q("split",{"empty string"(){y(vr(" ")(""),B,[""])},"no limit"(){y(vr(" ")("a b c"),B,["a","b","c"])},limit(){y(vr(" ",2)("a b c"),B,["a","b c"])},regex(){y(vr(/ +/)("a b   c"),B,["a","b","c"])}});function up(e,t){let n=[];for(let r=0;r<e.length&&r<t.length;r++)n.push([e[r],t[r]]);return n}function cp(e,t){return e+t}var ji=(...e)=>e.reduce(fp),ec=dp(ji(fe,e=>({videos:e})))(["BecZdQvjGrY 54:49 In Gowan Ring - Compendium (Full Album)","B3oAx9VmAdA 43:52 In Gowan Ring - Hazel Steps Through A Weathered Home",`
    # In Gowan Ring - The Glinting Spade
    GCglHYJb2Yk 5:34 Two Wax Dolls
    W-gm4QANx0k 4:04 To Thrum a Glassy Stem
    O-gx9ILQogw 13:07 Cipher's String on the Tree in the Dream of the Queen
    scqjzDhXIxA 6:20 Bow Star
    GgIWODOVlOI 6:58 A Bee at the Dolmen's Dell
    ZXK1NYbjozk 8:04 Arrowsmith's Fire
    2LjJzCTfaPo 12:31 Milk Star
  `,`
    # In Gowan Ring - The Twin Trees
    UT_RFFLZQt0 7:43 In Gowan Ring – Rivertime Tome
    PKAq679Y4Dc 8:50 In Gowan Ring – One Silver Ring
    qAHUytdB9dg 6:29 In Gowan Ring – Stone Song III
    Fh3u050071M 6:38 In Gowan Ring – The Twin Trees
    wSHJj79wUhY 10:18 In Gowan Ring – Lady Beyond The River
    pxLzMC3LxI4 11:00 In Gowan Ring – By Moss Strand And Waterspathe
    MsnojV6lHPI 10:49 In Gowan Ring – Cupped Hands Spell
    -qfgGOMmwLo 6:25 In Gowan Ring – Our Rainbowed Paradox
    JBasAvPr08c 7:10 In Gowan Ring – Still Water Bonne
  `,`
    # In Gowan Ring - Love Charms
    ljm3wcEUeIc 4:23 In Gowan Ring – Listen To Colours
    9WnXQBigyWw 2:39 In Gowan Ring – Love Charms
    Fx7MoHH72lA 5:11 In Gowan Ring – Spindle Tree (With Dreambox)
    OqWS_5JFHn0 3:00 In Gowan Ring – A Swan Song
    FM-YvrTrPz8 4:41 In Gowan Ring – Stone Song II
    kMB5zA_klZE 2:07 In Gowan Ring – Dandelion Wine
    w_u8WsgzNnU 9:04 In Gowan Ring – Within Rings (With Dreambox)
    uAA4rUuZ-IA 6:37 In Gowan Ring – Of Water Wiverings
    LAzCskIPtuc 15:01 In Gowan Ring – Urn And Water
  `,"i0djHJBAP3U 1:18:43 Huun-Huur-Tu - Live Berkely","obK-k848Vto 1:13:05 Heroes of Might & Magic IV - Official Soundtrack",`
    # Jethro Tull - Thick As A Brick
    ldXdnZtTWp8 22:40 Thick as a Brick (Pt. 1) (1997 Remaster)
    GTWQv8RsI6s 21:10 Thick as a Brick (Pt. 2) (1997 Remaster)
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
    # Jethro Tull - Songs From The Wood
    z4UYX2qpUK0 4:54 Songs from the Wood (2003 Remaster)
    9fWzUgrYnqs 2:29 Jack-in-the-Green (2003 Remaster)
    KNc2uifQuGw 4:32 Cup of Wonder (2003 Remaster)
    royymUiwItI 5:12 Hunting Girl (2003 Remaster)
    XJS9TjjHxx8 3:44 Ring Out, Solstice Bells (2003 Remaster)
    6-ANplhDJNY 6:03 Velvet Green (2003 Remaster)
    2mBaE-K4RxI 3:32 The Whistler (2003 Remaster)
    pkUCchG0Kls 8:34 Pibroch (Cap in Hand) (2003 Remaster)
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
  `,"c6e3dcHvtvY 58:40 ሙላቱ አስታጥቄ - Mulatu Astatqé - Ethio Jazz & Musique Instrumentale 1969-1974 (Full Album)",`
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
  `,"jGZaH0JEiic 39:33 Genesis - Nursery Cryme (Full Album) 1971","E-jS4e3zacI 53:37 Genesis - Selling England By The Pound (Full Album Remastered)",`
    # Genesis - Trespass
    E7Z_xXh7gm8 7:04 Genesis - Looking For Someone (Official Audio)
    6hgYH3-HVrY 6:45 Genesis - White Mountain (Official Audio)
    uMM8spZyEgg 6:51 Genesis - Visions Of Angels (Official Audio)
    BNKDXs5P08Q 8:47 Genesis - Stagnation (Official Audio)
    v719eZmXRdE 8:56 Genesis - The Knife (Official Audio)
    zhw1gm5-nt0 4:11 Genesis - Dusk (Official Audio)
  `,"VKmixRYUFBE 47:53 Wolf Parade - Apologies to the Queen Mary [FULL ALBUM STREAM]","KzPE54bO7Po 46:46 Wolf Parade - At Mt Zoomer [FULL ALBUM STREAM]","0yBIc0uRxtY 55:38 Wolf Parade - Expo 86 [FULL ALBUM STREAM]",`
    # Sunset Rubdown - Dragonslayer
    6OPbEYljPLs 4:46 Silver Moons
    1m9au8nNn1Q 6:10 Idiot Heart
    A7jo4ExgkS8 5:25 Apollo and the Buffalo and Anna Anna Anna Oh!
    7c9YDgL5yDA 6:53 Sunset Rubdown - "Black Swan" (Official Video)
    sfZJhco5NA8 3:48 Paper Lace
    9Tf8rrW50h8 5:46 You Go On Ahead (Trumpet Trumpet II)
    brpl2ZlDlAc 5:36 Nightingale / December Song
    y9QF7mbsd10 10:46 Sunset Rubdown - "Dragon's Lair" (Official Video)
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
  `,"bnaTLcFpQnE 45:45 Manu Chao - Clandestino (Full Album)","tIGW_TEwCXw 46:50 #TheBeatles #AbbeyRoad #1969",`
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
  `,"08ozElWwpzc 35:28 Nektar - Remember The Future 1973 - Full Album - Digitally Remastered 2002",`
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
    3y4H9h9xssg 5:58 The Huntsman
    5WfTVBCkIuM 2:29 Mad Family
    HYaFn80m7_M 3:52 Two Brothers
    4UEQPNgP72c 3:20 The Looking Glass
    jmU1I19MxfE 3:42 Little Yellow Roses
    8LsIxYcvAMM 2:37 The Banks of the Nile
    gARUodDInyo 7:26 Kemp Owen
    RZaKqFz3yOQ 3:57 Sheepcrook and Black Dog
    X02tXD9YiN0 4:02 Grey Goose and Gander
    mE4ZD2NengI 2:41 The Shepherd's Daughter
    FAernSjceMs 2:35 King Henry
  `,`
    # Pink Floyd - The Dark Side of the Moon
    HW-lXjOyUWo 1:08 Speak To Me
    Vddl9TK5RqU 2:50 Breathe (In The Air)
    2sUyk5zSbhM 3:46 On The Run
    Qr0-7Ds79zo 6:57 Pink Floyd – Time (Official Audio)
    mPGv8L3a_sY 4:45 The Great Gig In The Sky
    -0kcet4aPpQ 4:44 Pink Floyd - Money (Official Music Video)
    GKiLEgAzFDQ 7:50 Us And Them
    _83urK9rO4U 3:27 Any Colour You Like
    BhYKN21olBw 3:47 Brain Damage
    9wjZrswriz0 2:13 Eclipse
  `,`
    # Pink Floyd - The Division Bell
    hoEDw18mkbU 5:57 Cluster One
    KmlZ1WhlYsM 4:22 What Do You Want From Me
    5ciWB7VykII 7:04 Poles Apart
    8EHHUiRuJAk 5:30 Marooned
    01F1leQgsEc 4:18 A Great Day For Freedom
    aRAfpefISk4 6:51 Pink Floyd - Wearing The Inside Out (360 Reality Audio / Official Audio)
    Y5rde4bRIZA 5:03 Pink Floyd - Take It Back (Official Music Video HD)
    04LrDEQZmD0 6:20 Pink Floyd - Coming Back To Life (360 Reality Audio / Official Audio)
    wbOTkDn49qI 6:12 Pink Floyd - Keep Talking (Official Lyrics Video)
    FKROYzWRiQ0 5:14 Lost For Words
    7jMlFXouPk8 7:49 Pink Floyd - High Hopes (Official Music Video HD)
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
  `]);q("pipe",{"given one function"(){y(ji(t=>t+1)(1),S,2)},"given two functions"(){let e=t=>t+1;y(ji(e,e)(1),S,3)}});function fp(e,t){return(...n)=>t(e(...n))}function dp(e){return t=>t.map(e)}var lm=fe(`
    vKXu0CzRcrI 0:16 Here's Tree
    ieWm9T_GgSA 0:08 I'm Lost
    zBIx-gP-I8c 0:51 Strong Bad Email #1 - Some Kinda Robot
    BHLsrzYt-H4 0:52 Strong Bad Email #2 - Homsar
    wRKrv-RlJOw 1:01 Strong Bad Email #6 - Depressio
    Lml_AKkhCVY 1:01 Strong Bad Email #9 - I Love You
`),tc=fe(`
# Running the Game
e-YZvLUXcR8 1:39 Intro: Running the Game
zTD2RZz6mlo 12:24 Your First Adventure | Running the Game
1K8hGhpQzKg 12:38 Your First Session | Running the Game
jvQXGs8IVBM 34:24 Running Your First Dungeon | Running the Game
0K9mKpAMREU 23:04 Making Characters | Running the Game
Ama2wMxq84o 11:05 Why Do We Play D&D? | Running the Game
nTbD1GJUFC0 13:29 Your Town | Running the Game
Uw-j-vjEAAo 4:35 Dead Ends | Running the Game
EHUCi6ZbVxU 11:21 The Sociology of D&D | Running the Game
aO0HMmrZ4xs 16:15 The DM Screen | Running the Game
b5pz46kEhIM 23:04 The Deck of Many Things | Running the Game
LQsJSqn71Fw 19:32 Different Kinds of Players | Running the Game
EkXMxiAGUWg 17:08 The Sandbox vs the Railroad | Running the Game
8Q8bVPpc84A 33:43 Catastrophic Failure | Running the Game
DgPhiLBW7jo 35:47 Alignment | Running the Game
FUrlRZu2uCc 30:20 Bad Guys! | Running the Game
YgNQ3NXqqiQ 20:19 Alignment Examples
jPZZAavOugo 29:51 Random Encounters | Running The Game
fUCpolL_6Tk 27:28 Miniatures! | Running the Game
r_hxIv79S30 8:31 Story Vs Adventure | Running The Game
Xm4EvRUo4YQ 22:00 Information | Running the Game
4g1KAE0sI-M 23:25 Terrain! | Running the Game
GvOeqDpkBm8 22:36 Skill Challenges | Running the Game
NwJxM1ABLJM 30:18 NPCs! | Running the Game
HpiT6RTlLYc 27:55 Politics 101: The Central Tension | Running the Game
zYlLTtS-tfQ 23:29 The Politics of Peace | Running the Game
dqth2dFlIzQ 29:34 High Level NPCs, Followers, and DMPCs | Running the Game
DWAhcY9QroQ 28:40 Sandboxing! | Running the Game
QoELQ7px9ws 58:44 Using 4E to Make 5E Combat More Fun | Running the Game
V2OiQ5ruiGE 17:45 Fantasy vs Fiction | Running the Game
9XgBVYo1Dek 11:19 Ignorance vs Confusion | Running the Game
oGAC-gBoX9k 30:39 The West Marches | Running the Game
j6MLI30n7Ak 6:34 TIME | Running the Game
gKBAfzQQZNE 7:59 Slog | Running the Game
4u3DWxPknYU 21:35 Losing | Running the Game
ZtFfq_yQQR4 32:00 Building Calendars and Tracking Time | Running the Game
g6w_DRHRDDM 9:38 Verbs! | Running the Game
_TKFW_Zru_E 14:16 Funhouse Dungeons | Running the Game
jXYORWtiLF0 32:00 Prepping An Adventure | Running the Game
21fEFmyekS4 11:58 Cinematics | Running the Game
HWt0AQWjhPg 19:52 Diplomacy | Running the Game
QgTIGo6zJbs 30:02 Monkeying With Monsters | Running the Game
fzI_9WHlUJY 9:05 On Rails, | Running the Game
O7j1skECRV4 15:37 Surrender, Running the Game #43
xANZTijbrw8 13:56 Challenge Rating | Running the Game
icQx5NH_h88 18:44 Undead | Running the Game
mPbMicg8yqM 19:25 Let's Start In A Tavern! | Running the Game
4cSHIULQ06M 21:52 Undead Again! | Running the Game
YDjD0Gjtgik 25:59 Dice Math | Running the Game
-BZAjzUBYmU 54:11 Vecna & Running Epic Bad Guys | Running the Game
MtH1SP1grxo 15:41 Pitching Your Campaign | Running the Game
gINL0sXG27M 50:00 Red Hand of Doom! Running the Game #52
FP9ejX8Q1l0 23:11 Hobgobglins & Low Level Play! | Running the Game
RinFvgNdHLs 13:56 Range and Altitude in Three Dimensions | Running the Game
1IyWfaMmhrM 42:05 Metagaming | Running the Game
dScrFJdcb5s 8:36 Stealth Checks | Running the Game
-lEi9DAn9rE 20:30 Problem Players | Running the Game
UvQ2JgZIjVI 24:34 Making Travel Interesting | Running the Game
HZe-YKDttGo 6:17 Speeding Up Combat | Running the Game
4MhCSx9LEZE 13:14 The Monster Wrangler | Running the Game
4GqBTyXYCJE 14:43 Dead Empires | Running the Game
9capmKmysAE 27:38 Your First Town | Running the Game
0MhjHHrfreo 17:01 On Being A Good Player | Running the Game
kVuF4fkRD2c 30:12 On Being An Evil Character | Running the Game
262aEO3cWPQ 18:23 Let's Split The Party! | Running the Game
zKN0xPyxu2Y 15:21 Fudging Die Rolls | Running the Game
xZdS8lP-Sdo 23:38 Let's Kill A PC! | Running the Game
BVKRUrBDCGc 22:52 The Dungeon | Running the Game
FfYItCw00Z4 24:12 Tactics and Strategy | Running the Game
nHv1EUYkqoM 10:14 Break Your Heart | Running the Game
eswaBOK1pAs 11:16 Pitching Your Character | Running the Game
5RvgZ7IEm4g 10:48 The Handout | Running the Game
31IAzJO-BEA 10:56 Orcs Attack! | Running the Game
tv1JfBMEm8E 8:02 Onboarding | Running the Game
JoYR3eCFqoA 10:51 The Wangrod Defense | Running the Game
jKGcCBnBhuY 8:49 The B Plot | Running the Game
GKMqxDkc0gY 11:26 Law vs Chaos | Running the Game
-H3HUG5kiFE 9:48 Betrayal | Running the Game
kB9iJUSL1xo 16:20 The Politics of War | Running the Game
2BqKCiJTWC0 12:39 The Local Area | Running the Game
I-nfsi6B8d4 17:08 Collaborating With A Player | Running the Game
7YCVHnItKuY 46:40 Roleplaying | Running the Game
y_zl8WWaSyI 26:20 Action Oriented Monsters | Running the Game
cGyYxE5moA8 13:52 Inspiration | Running the Game
2fZWUPxUmYQ 23:12 Downtime | Running the Game
canhaxHlFg8 9:43 Skill Dogpiling, Running the Game #87
l1zaNJrXi5Y 14:17 Many Fail States | Running the Game
OoJMNkgEqKA 20:49 One-on-One D&D, Running The Game #89
w8xcK69brd8 30:55 Politics V: Black Panther & The Origins of Executive Power | Running The Game
Fwj9M4qVafE 15:44 Traps!, Running The Game #91
n-fM9UQIaLE 15:15 The DM is also a Player, Running The Game #92
KqIZytzzFKU 23:08 Railroading, Agency, and Choice | Running the Game
_iWeZ-i19dk 18:02 Engaging Your Players | Running the Game
6St9pH4-16E 21:23 "No." | Running The Game
i9fTMczJTlg 16:03 Hot Start, Running The Game #93
OIkwABECfR0 15:11 Language, Not Rules
7In4ftJddEo 6:41 Why? | Running The Game
cTp9SdpcvF8 16:06 Everybody Loves Zombies | Running The Game
N-FKBmI5Wl0 16:31 Oracles, Visions, and Prophecies! | Running the Game
U_r_Xy1ZRbc 40:36 Running The Game 100

# Artifexian Worldbuilding
HwjZwnmqhPk 3:41 Evolution of low mass stars
PRwn6fftmLU 3:32 The life cycle of Brown Dwarfs
sy7hHBvMg7U 4:52 Supermassive stars
x55nxxaWXAM 3:28 How to Build a Star!
oijt3hnLesY 3:30 What are galaxies?
NwZ3URDATTY 4:19 The Milky Way and Spiral Galaxies
5SIWeNVXFrU 3:05 An Open Letter to Elliptical Galaxies
nGpy4QRtCrU 3:06 Galactic Habitable Zone - 7 considerations
NVyLgFP2X9o 4:31 Galactic Musings
sxD1iPCNuqE 4:14 Formation of the Solar System
J5xU-8Kb63Y 4:40 How to Create a Classical Planetary System
SCz6JY-24Yo 5:11 Other Planetary Systems
1nV2ygdKZ3s 6:41 Build your own Tatooine
mVh84wBCP_s 3:54 Build your own Anti-Tatooine (S-type Planetary Systems)
IE805Vdm0sk 2:43 Introduction to Multiple-Star Systems
uCHkm2lV9zY 5:26 Build your own Battlestar Galactica System
1YaVTWbf0bg 6:02 Lagrange Points and other Trojan Ramblings
1sM6YBlKgg4 5:43 Perception of the Heavens
5dTI5LZHO0E 7:21 Weekly Challenge Video Response - Colors
w-q_7qIR8JY 1:36 Weekly challenge showcase: Color in Librus
norkDnRhUy8 7:08 Dwarf Planets
wK3lMcz8zcA 6:36 Gas Giant Myths
yNYERPMnO3I 6:39 Extrasolar Gas Giants
bUPypOgNs_A 7:53 The Trouble with Terrestrials
xlq5Sn3B-fI 8:20 7 (Poké)planet Types
XEIsZjQ_OdU 4:56 Build your own Dwarf Planet: Physical Characteristics
80oQBGD7g34 4:23 Build your own Gas Giant: Physical Characteristics
RxbIoIM_Uck 3:58 Build your own Terrestrial Planet: Physical Characteristics
Ig_DzmEEJ1M 6:20 What is an Orbit?
lfY7NOpmClg 6:36 Build your own Orbit (Hot Jupiters)
qE8WKDmSNNQ 5:01 Other Gas Giant Orbits
YGw0kQufhgM 5:49 Resonant Dwarf Planet Orbits
1J4iIBKJHLA 7:15 If Planets Were Donuts
TrpOJYshfE4 7:38 Orbits For Earth-like Planets
W_Hzadieo8I 2:57 "Peanut" by Eric Lange | Stories by Worldbuilders
hG1of0MroM8 10:30 How to Build 1000 Stars
CItDiuBWP5I 9:32 If Earth had Rings
J4K3H9aNLpE 8:06 Seasonbuilding 101: Axial Tilt
t6i6TPsqvaM 10:46 Terrestrial Moons
Evq7n2cCTlg 12:18 Gas Giant Moon Systems and Habitable Moons
iTeS2b2IAVY 9:25 Constructing Solar Calendars
c3EPovK2-Uw 10:00 Constructing Lunar Calendars | Single and Multiple Moons
_7pHeFtQDpM 10:45 Constructing Lunisolar Calendars
y3Kb_ik5f-I 8:09 Albedo: Mapping with Temperature
tXan6Sw_okc 6:43 How To ACTUALLY Design A Flag
x_Tn66PvTn4 8:37 Fantasy Maps & Plate Tectonics
yGMKmbGTEHQ 18:02 Fantasy Maps & Plate Tectonics | Tutorial
9-j_JOWPLj8 8:39 Designing Earth-like Atmospheres
LifRswfCxFU 9:22 Atmospheric Circulation: Wind, Weather, and Mordor
fwauz9uIl9M 7:23 Alien Atmospheres: How To Make Plastic Trees
n_E9UShtyY8 6:54 Ocean Currents: Terrestrial, Waterworld & Tidally Locked Planets
wsuejZRqus4 8:21 Tides: The Tide-pocalypse & More
L9MNC45Jr6Q 13:44 SKY & PLANT COLOR ft. Worldbuilding Notes
5lCbxMZJ4zA 8:47 Worldbuilding: How To Design Realistic Climates 1
fag48Nh8PXE 7:44 Worldbuilding: How To Design Realistic Climates 2
JcSu8NfJqvM 11:11 How To Simulate Continental Drift in GPlates
RNfrYrIl9o8 6:39 Worldbuilding: Climate Zones Of RETROGRADE Planets
cnKUbcVrZVg 9:42 Worldbuilding: Hot & Cold Planet Climates
b9qvQspSbWc 10:47 Where Metals Are Found On Fantasy Worlds!
cqMiMKnYk5E 12:11 How To River
UIp5F5WVS_8 14:48 If Planets Were Pizzas
ztemzsxso0U 14:13 Coastal Landforms for Fantasy Mapping
vPPyDhQ5WHQ 9:26 Glaciers I: Glacial Landsystems & Locations
LDHlklxH8po 17:15 Glaciation II: What Happens When Glaciers Retreat

# Hexed Press: Hexcrawls, Hex Maps, & Sandboxes
DCysDGrD-1Y 15:45 DM Tools: A Rabbit Hole of Wilderness Tables
q8iGqqye_UI 1:11:13 Hexcrawling 101: Monthly Q&A, AMA 05 -- Let's Chat About Hexcrawls and Noodle in Hextml!
83YbiVlpkmg 1:13:32 Dungeoncrawling 101, Field Trip 02: Stonehell Megadungeon!
EAIEIuLFjZ0 1:12:08 Hexcrawling 101: A Few (Map) Generators More
BpL26_sHFUQ 1:10:58 Dungeoncrawling 101, Field Trip 01: The Caverns of Thracia!
_Vid0zGIUyY 1:11:21 Hexcrawling 101: A Fistful of Map Generators!
UQJ_SVJnils 1:08:00 Hexcrawling 101, Class 09: Do We Need Dungeons?
TZlHVji7NvI 1:22:16 Hexcrawling 101: Monthly Q&A, AMA 04 -- Let's Chat About Hex Crawls and Read Some Random Wisdom!
25RVfxRwX04 1:06:36 Hexcrawling 101, Class 08: Searching & Discovering Hex Features
kyf0UcTCX1o 1:07:14 Hexcrawling 101 Lab 03: Let's Flesh Out Our Starting Village!
iaQSz-2mcgo 37:15 Rulebook Read-Along: Manual of Hexterity by BroadswordBard
iMXNwKvb-4k 1:01:58 Hexcrawling 101: Monthly Q&A, AMA 03 -- Let's Chat About Hex Crawls and Read Some Random Wisdom!
erk-T6v2vZM 1:02:47 Rulebook Read-Along: Mass Combat Rules from TSR's AD&D 2E Birthright Setting!
EyNOqOWNw8Y 1:02:32 Rulebook Read-Along: Domain Play Rules from TSR's AD&D 2E Birthright Setting!
SqwEpnTJ7Qg 1:15:05 Hexcrawling 101 Lab 02: Let's Add Wandering Monsters to Our Hexcrawl!
VdLXb_LBh1E 1:08:22 Hexcrawling 101, Class 07: Wandering Monsters
JAus0haUTA8 1:10:57 Hexcrawling 101, Class 06: Another Hex Starter Kit + Hex Flower Madness from Goblin's Henchmen!
1ga0S3Ca_fE 1:05:51 Hexcrawling 101 LAB 01: Let's Build a Simple Hexcrawl!
tcF50OMN3ic 1:05:52 Hexcrawling 101, Class 05: What's the Best Starter Hexmap Setup?
Hisgu62UyYc 1:11:57 Hexcrawling 101: Monthly Q&A, AMA 02 -- Let's Chat About Hex Crawls and Do Some Hex Noodling
VHxNnULeJ7U 1:18:31 Hexcrawling 101, Class 04: Player Maps and Translating Hexes into Fiction
dLlFX3l0W8M 1:04:35 Rulebook Read-Along: "Filling in the Blanks," Populating Hexcrawls by Todd Leback
dSMNgQ6PuLw 1:03:43 Hexcrawling 101, Class 03: The Art of Getting Lost
fit7F6Uf7eU 9:00 Hexcrawling 101: Hex Features vs Sub-Hex Features or How to Spot a Feature from a Long Way Away
Sn-jgMlibHw 6:03 Hexcrawling 101: 1d6 Features Per Hex?
9jjrcHFBpSU 1:12:38 Hexcrawl 101, Class 02: Why Hexcrawl?
1rFfQP8eO2k 1:06:02 Hexcrawl 101, Class 01: Basic Structure of Play
TLhtuYGcF7M 1:07:40 A Sandbox and Hexcrawl Q&A!
e_R__PsiLHk 1:15:03 Bandit's Keep x Hexed Press 04: Populating Dungeons & Wilderness
jTrU7OnH3WU 21:00 What Makes a Hexcrawl Experience Different from a Dungeoncrawl?
K71-wW_r46g 1:03:52 Rulebook Read-Along: A Fistful of TTRPG Idea Generators
nd0EJ0Zn78Y 1:04:14 Rulebook Read-Along: Hexalege by Fernando Salvaterra
i9OBGYKTicI 1:11:11 Rulebook Read-Along: The Isle of Glaslyn, A Hexcrawl Adventure for OSE
s3LQhQqRgPw 1:26:18 Rulebook Read-Along: Sidequest Decks from Inkwell Ideas!
YDR0pr6vnik 1:02:59 Hexcrawl Tools: Threats from "Beyond the Wall: Further Afield"
iasi60-4Yh4 1:14:04 Rulebook Read-Along: The One Ring 2nd Edition, Fellowship Phase + Shadow & Hope
Eo9rDU8or4I 1:17:06 Rulebook Read-Along: The One Ring 2nd Edition, Adventuring Phase
Kz8IoDS1Wy8 26:38 Hexcrawls: Quickly Create Planet-Scale Hexmaps with "Songs of the Eons" & Worldographer
aF91Wp7dYjE 1:07:21 Rulebook Read-Along: World Without Number's Campaign Creation Tools, Part 2
Sk8rA2kDHrM 1:06:06 Rulebook Read-Along: World Without Number's Campaign Creation Tools, Part 1
h3Zei5STrRo 5:27 Hexcrawling: What is Clever Exploration?
J8qIt3AKDsc 6:52 DM Tips: Minimalist d20 Hexcrawl Mechanics?
pbNBqjVSQbU 10:27 Let's Look at the Camping Mechanics from "Don't Worry I've Got A Sword" Blog
I9hd3hi2w4I 1:13:25 Hexcrawl Tools: "The Wilding Way" Wilderness Rules from "Into the Wyrd & Wild" OSR RPG
-5pWfath72k 1:01:27 Hexcrawl Tools: Journeys in The One Ring and OSR Wilderness Player Mechanics
yve2evN4TJg 9:21 Hexcrawl Tools: D30 Sandbox Companion
ytRtEXwfelE 1:24:57 Hexcrawl Tools: D30 Sandbox Companion, Part Deux!
GVauvBrUCmc 1:01:23 A Hexcrawling Primer for OSR RPGs
F9xJ-3sXGA0 1:00:22 How to Keep Hexcrawling Interesting in Your D&D, OSR, or Other TTRPG Campaign
KDTresBOcL8 20:57 Use Motifs to Describe Terrain in Your Hexcrawls
o5_lB2AFkVg 16:42 Fun with Hexes Addendum!
Zl3KvPlkQlY 24:09 Fun with Hexes! Some Tips & Tricks
4qg15igqSKg 35:59 Sandbox Campaigns: What Are They? Am I Sure I Want One? How Do I Get One?
Kl8TLh4nYFk 29:42 #DnD #DMTips: Run Your Campaign Using Radial Prep (A Bottom-Up Technique)
ghq1eSjxFZY 28:17 DM Tips: "A Grove of Red Delirium" and Creating Unique or Unusual Features for Your D&D Hexcrawl
ck5LCQw6ePk 50:01 A Dungeon Master's Stream: A Look At The Black Hack 2nd Edition's Hexcrawl Resources
C2moCRxnWlI 44:12 A Dungeon Master's Stream: Making a Hexmap With Worldographer (Hexographer 2)
EI8GANbQ77s 27:59 #OSR #DnD #DnD5E #DMTips: Generating World Events with Rory's Story Cubes & Mythic
qPu-YERDkHg 34:58 DM Tips: Designing a Random Encounter System for your Dungeons & Dragons Hexcrawl
Jt5EpFQyHjc 28:09 How to DM PC Class Abilities in Your Dungeons & Dragons Hex Crawl (Or Anywhere Else)
bBqe8Z-D9-U 26:54 How To Play Through a Hexcrawl in Your D&D Campaign
2RPW4km81jg 34:11 A Dungeon Master’s Intro to Running a Hexcrawl in a D&D, OSR, or Fantasy TTRPG Campaign
XloPH6_ZlnM 14:38 DM Tips: Hex-Mapping for Your Dungeons and Dragons Campaign!
61vj9JIk2W8 13:18 DMTips: Prepping Your Hex Map for a Hexcrawl Campaign

# Sly Flourish: DM Tips

NjpGbgwQ27I 5:54 Smooth Out Your D&D Game with Four Words – "Pause for a Minute" #dnd #lazydm
wJhdpTbCEJA 8:27 Build Robust D&D Campaigns
hB1tc_ASgcY 5:57 Tell, Don't Show – Tell Players What's Going On #dnd #lazydm
GVioSvrSM1s 2:44 Give D&D Villains Evocative Titles #dnd #lazydm #dmtips
614Pcm1f3hU 4:48 The 7th Level Shift in D&D #dnd #lazydm
WnPjCnVoL84 2:19 List Ten Things #dnd #lazydm
Qr-Wb-Szedo 8:07 Seven Tools for Better D&D Improvisation #dnd #lazydm
08LOtj3IRLc 6:21 Five Tips to Integrate Characters Into Your D&D Campaign #dnd #lazydm
EVNI5S7wcTo 6:57 Lightning Rods – D&D Monsters that Showcase Character Abilities #dnd #lazydm
R5lMiOWlwqw 7:50 Relics: Single-Use Magic Items for Dungeons & Dragons #dnd #lazydm
66u5v-Balrs 3:27 Harvest Ideas from your D&D Characters with Campfire Stories #dnd #lazydm
6G6v9Kl68Q8 9:32 Text-Based Combat Tracking for Online D&D Games #dnd #lazydm
AOYWPYaqvf4 5:23 Using the 13th Age Escalation Die in 5th Edition D&D #dnd #lazydm #dndtips
VfZ1lVUZKTs 3:30 Three Lazy D&D Tips: Add Damage Up, Show Initiative, and Promote Shared Notetaking #lazydm #dmtips
KLoIVtL_jdk 4:35 Situation-based D&D
yaLGPjfvqH4 6:08 Getting Started with D&D #dnd #dungeonsanddragons #lazydm
DZ7vaEqlh6o 6:02 Run One-on-One D&D! #dndtip #lazydm #dnd
iCr1rxfYD6U 4:17 Using Upward and Downward Beats in D&D #dmtip #lazydm #dnd
ELd7q9XPKbg 9:41 Build Complex D&D Adventures with Random Tables
tw_WMNESHZo 3:36 Call On Individual Players During Online D&D Games
iVrGcXto5RM 6:36 Using Progress Clocks from Blades in the Dark in your D&D Game
PoQYKcSKGok 2:56 Five Minutes to D&D Pep Talk
PKCuvfVtZCY 5:38 Including the Three Pillars of D&D Into Your Game
uVA5VaTmSWU 4:30 Three Tips for Scheduling Regular D&D Games
pPM5VZY_r8U 15:33 Set up Castle Ravenloft in 10 Minutes with the Owlbear Rodeo Virtual Tabletop
hUBz7Pdme0o 6:17 Mashing Up Monsters: Combining D&D Monster Stat Blocks
thwe8XG9pUI 8:03 Writing a Single Page D&D Campaign Guide
fdZsB3NtFf0 5:14 Changing a Monster's Hit Points Once a D&D Battle Has Begun
3PW55nREKHM 5:02 How Much D&D Advice is Too Much?
CLYLVoYItOo 4:53 How Long Does it Take to Prep a D&D Game?
Iu7M090KkSE 3:33 Building Lazy Magic Items in D&D
ogUPg1_a8JU 2:15 Improvising NPCs with Just a Name in D&D
2Zq2TZD9GuQ 3:04 This Foe is Beyond You – Declaring Deadly Situations in D&D
k9lG9XfetVE 1:43 Declare a Monster's Deadly Intent in D&D
bvUcT-ET3nw 2:19 Take a Break in D&D
CPiUKsTgdcI 2:26 Offer Three Options in D&D
S12yX3QULlg 6:31 Customizing Published D&D Adventures
y2H9VZhxeWk 7:21 Spiral Campaign Development in D&D
EURxj9L1KJc 2:22 D&D Campaign Closure Montages: One Year Later
I6NNchL-P5o 2:55 D&D Random Encounters: Non-Focal, Previous, Future, and Mashups
ezfC3IHioQo 3:29 Help D&D Players Make Choices
TRVtf4Lig6o 4:13 Good Behaviors for D&D Players
puN60oRDhBY 7:07 Improvising Legendary D&D Boss Monsters
450wJNt5Up4 5:46 The Best D&D Subsystem – The Ability Check
RQDTu8eSTaQ 6:04 Ten Uses for Index Cards in D&D
HrZOHNXp_3A 3:48 How to Roleplay - Think Through the Eyes of your D&D NPCs #dnd #lazydm
G7y2Vf9vED0 2:51 The Case for Average Monster Damage in D&D
h4WQCqfUnYM 3:58 Recovering from a Bad D&D Game
uTtcWeiP5Ho 3:15 "You Are Not Prepared for your Next D&D Game" – Battling the Resistance
f7SFkQFpbRg 4:31 End Your D&D Session Before a Big Fight
7dZrA2JKuYE 13:16 Tools of the Lazy Dungeon Master – Updated Lazy DM's Kit for 2021 #dnd #lazydm #dndtools
76J-GqtB5t0 4:02 Reinforce Cooperative Character Motivations in D&D
wNo5R-mW7M4 3:40 Darkvision in D&D Isn't As Good As You Think
J_cuwkKlVJs 3:16 Need to Ponder Your D&D Game? Go for a Walk!
CtxqFcjf9xk 3:29 Realism vs. Fun in our D&D Games
I-1LdMNfkzY 4:31 Wielding Knives in D&D – Using the Fiction Players Bring to the Table
2T2Z3f-1Z3I 3:36 The Best Ways to Improve your D&D Game are Free
x9TMDEUh0CU 4:46 Handling Rests in D&D
w8EiScJfFrQ 3:31 Running Small D&D Battles in the Theater of the Mind
LGzfuxhcpQE 4:19 Facilitating Decisions in D&D
3qxYK2DgmW4 3:30 Types of D&D Secrets and Clues and How to Find Them
GZtfpvoxkmI 2:40 Using Stars and Wishes for feedback on your D&D Game
yt66FTk3jX8 6:47 Preparing for your D&D Game in 15 Minutes
sRN1yw5g5D0 4:10 Use Villainous Heralds in D&D
ZNLTdryItt0 3:09 Player-Driven Monster Descriptions for D&D
qayEBg1lbl0 6:01 Two Tools for Better D&D 5e Encounter Building
LE2MT8l_pn8 3:03 Be Nice to 1st Level Characters in D&D
YL2aeEj7zoU 2:28 Finding D&D Maps (Dyson Logos, the DMG, and the Lazy DM Workbook)
3qdemNbuWxQ 4:35 Secrets Serve You – Understanding the Killer Feature of the Lazy D&D DM
bpLyKJ6SVJA 3:07 Run Simple D&D Adventures
H8Xgct3N9JU 2:50 Use Published D&D Material
M2kdRLnnma0 3:48 Run Easy D&D Battles
t1sfmcoSG1M 3:04 D&D DMs: Focus On Your Next Game
odCkl7AqSvs 3:34 Three Tips to Draw D&D Players Into the Fiction in Three Minutes
SfqcVlSnf2k 19:10 Running Hordes: Guidelines for D&D Battles with Hundreds of Monsters
rw_v0tCEwnw 12:06 On D&D Ability Checks, Failing Forward, and Succeeding with a Cost
_bgpZPlBgwQ 10:18 D&D Quest Model: The Three-of-Five Collection Quest
l-jZpx958HQ 19:29 Game Pacing in D&D
E2z4ZECoYvE 18:23 Advice for D&D DMs: Be on the Players' Side
Ul1YjYDIuFo 17:05 Running Awesome D&D Combat
SjI-Dl0XJBU 23:47 Safety Tools in D&D – X-card, Lines and Veils, and Script Change
JXhVlKvMe6A 16:01 Run Pointcrawls for Overland Travel in D&D
05VWofhNMHI 20:07 The Deadly Encounter Benchmark – The Lazy D&D Way to "Balance" Combat Encounters
8AfbMNAsyr4 29:28 Notion for the Lazy D&D Dungeon Master
d3-QWlnDSCg 24:47 Owlbear Rodeo for the Lazy D&D Dungeon Master
1XYInHFWamw 26:41 Running a Deadly Lich in D&D
Uw-x7JVY-Qg 37:58 The Lazy DMs Workbook Walkthrough
_Yg-GyrcccI 31:09 Playing D&D Online with Discord
J-0dWFWvJ-g 9:23 Making Universal D&D Monster Tokens for Thirty Cents
W1uL3tpVlac 19:08 Using Maps in D&D Games
yaRpkhrvLAU 25:32 Introducing New Players to D&D
r4jFR5hSow0 3:06 The Most Important Lazy D&D DM Tool: A Good List of Names
AJJsUfKgUnA 4:13 Intent and Default Distances in D&D Theater of the Mind Combat
`),nc=fe(`
# Crash Course: World History

Yocja_N5s1I 11:11 The Agricultural Revolution: Crash Course World History #1
n7ndRwqJYDM 9:35 Indus Valley Civilization: Crash Course World History #2
sohXPx_XZ6Y 12:06 Mesopotamia: Crash Course World History #3
Z3Wvw6BivVI 11:55 Ancient Egypt: Crash Course World History #4
Q-mkVSasZIM 11:39 The Persians & Greeks: Crash Course World History #5
8Nn5uqE3C9w 12:17 Buddha and Ashoka: Crash Course World History #6
ylWORyToTo4 12:12 ‎2,000 Years of Chinese History! The Mandate of Heaven and Confucius: World History #7
0LsrkWDCvxg 11:02 Alexander the Great: Crash Course World History #8
vfe-eNq-Qyg 10:31 The Silk Road and Ancient Trade: Crash Course World History #9
oPf27gAup9U 12:26 The Roman Empire. Or Republic. Or...Which Was It?: Crash Course World History #10
TG55ErfdaeY 11:37 Christianity from Judaism to Constantine: Crash Course World History #11
3PszVWZNWVA 12:44 Fall of The Roman Empire...in the 15th Century: Crash Course World History #12
TpcbfxtdoI8 12:53 Islam, the Quran, and the Five Pillars: Crash Course World History #13
QV7CanyzhZg 12:08 The Dark Ages...How Dark Were They, Really?: Crash Course World History #14
X0zudTQelzI 11:33 The Crusades - Pilgrimage or Holy War?: Crash Course World History #15
jvnU0v6hcUo 10:31 Mansa Musa and Islam in Africa: Crash Course World History #16
szxPar0BcMo 11:31 Wait For It...The Mongols!: Crash Course World History #17
a6XtBLDmPA0 10:15 Int'l Commerce, Snorkeling Camels, and The Indian Ocean Trade: Crash Course World History #18
UN-II_jBzzo 10:12 Venice and the Ottoman Empire: Crash Course World History #19
etmRI2_9Q_A 10:47 Russia, the Kievan Rus, and the Mongols: Crash Course World History #20
NjEGncridoQ 10:38 Columbus, Vasco da Gama, and Zheng He - 15th Century Mariners: Crash Course World History #21
Vufba_ZcoR0 11:33 The Renaissance: Was it a Thing? - Crash Course World History #22
HQPA5oNpfM4 12:09 The Columbian Exchange: Crash Course World History #23
dnV_MTFEGIY 11:08 The Atlantic Slave Trade: Crash Course World History #24
rjhIzemLdos 10:46 The Spanish Empire, Silver, & Runaway Inflation: Crash Course World History #25
j0qbzNHmfW0 12:20 The Seven Years War: Crash Course World History #26
2yXNrLTddME 10:33 The Amazing Life and Strange Death of Captain Cook: Crash Course World History #27
HlUiSBXQHCw 11:27 Tea, Taxes, and The American Revolution: Crash Course World History #28
lTTvKwCylFY 11:54 The French Revolution: Crash Course World History #29
5A_o-nU5s2U 12:35 Haitian Revolutions: Crash Course World History #30
ZBw35Ze3bg8 13:43 Latin American Revolutions: Crash Course World History #31
zhL5DCizj5c 11:05 Coal, Steam, and The Industrial Revolution: Crash Course World History #32
B3u4EFTwprM 14:03 Capitalism and Socialism: Crash Course World History #33
Nosq94oCl_M 11:53 Samurai, Daimyo, Matthew Perry, and Nationalism: Crash Course World History #34
alJaltUmrGo 13:46 Imperialism: Crash Course World History #35
_XPZQ0LAlR4 11:45 Archdukes, Cynicism, and World War I: Crash Course World History #36
UUCEeC4f6ts 12:11 Communists, Nationalists, and China's Revolutions: Crash Course World History #37
Q78COTwT7nE 13:13 World War II: Crash Course World History #38
y9HjvHZfCUI 12:16 USA vs USSR Fight! The Cold War: Crash Course World History #39
T_sGTspaF4Y 12:49 Decolonization and Nationalism Triumphant: Crash Course World History #40
5SnR-e0S6Ic 11:51 Globalization I - The Upside: Crash Course World History #41
s_iwrt7D5OA 13:55 Globalization II - Good or Bad?: Crash Course World History #42
3k0v5ZvZrVQ 57:52 Crash Course Office Hours: World History

# Crash Course: European History

WhtuC9dp0Hk 6:36 Crash Course European History Preview
rNCw2MOfnLQ 14:09 Medieval Europe: Crash Course European History #1
tecocKSclwc 14:34 Florence and the Renaissance: Crash Course European History #2
EuzAbE-kPkM 14:02 The Northern Renaissance: Crash Course European History #3
wOclF9eP5uM 15:40 The Age of Exploration: Crash Course European History #4
AcphphFoijY 16:34 Expansion and Consequences: Crash Course European History #5
0eO0pPrGi6o 15:44 The Protestant Reformation: Crash Course European History #6
PbBDP1Elbbg 13:38 Reformation and Consequences: Crash Course European History #7
mU2dhPlJWyY 15:34 Commerce, Agriculture, and Slavery: Crash Course European History #8
xy_M4pDjafo 13:44 Catholic Counter-Reformation: Crash Course European History #9
rW4XFiHUQAs 15:33 Witchcraft: Crash Course European History #10
cmKHYpC_jVs 13:30 The 17th Century Crisis: Crash Course European History #11
w70BkCqgyyI 15:08 Scientific Revolution: Crash Course European History #12
YYPAFqQgbqE 13:16 Absolute Monarchy: Crash Course European History #13
dyk3bI_Y68Y 14:36 English Civil War: Crash Course European History #14
35PinDPNPw0 13:44 Dutch Golden Age: Crash Course European History #15
VwlrvAvcO28 15:18 Eastern Europe Consolidates: Crash Course European History #16
FBzRaxLdjZE 14:56 The Rise of Russia and Prussia: Crash Course European History #17
NnoFj2cMRLY 16:23 The Enlightenment: Crash Course European History #18
k108xCzJhbs 13:41 Enlightened Monarchs: Crash Course European History #19
xbbYCe2o1SI 14:59 18th Century Warfare: Crash Course European History #20
5fJl_ZX91l0 15:29 The French Revolution: Crash Course European History #21
Pd6E38FfuMg 15:54 Napoleon Bonaparte: Crash Course European History #22
DuVw9sGpWUc 14:01 The Congress of Vienna: Crash Course European History #23
zjK7PWmRRyg 17:06 The Industrial Revolution: Crash Course European History #24
_uKp4FHPjHU 14:06 Reform and Revolution 1815-1848: Crash Course European History #25
cXTaP1BD1YY 16:25 Revolutions of 1848: Crash Course European History #26
KSjDe9_jZk8 14:22 Italian and German Unification: Crash Course European History #27
eBA7P-zKbi8 13:14 Expansion and Resistance: Crash Course European History #28
MN8fjAjLLpg 13:58 Migration: Crash Course European History #29
meC5Zl5PC1U 14:33 Modern Life: Crash Course European History #30
xGjpTjeGuZc 15:09 Modern Thought and Culture in 1900: Crash Course European History #31
KGlmlSTn-eM 15:01 The Roads to World War I: Crash Course European History #32
IIiDULrXaqQ 14:16 World War I Battlefields: Crash Course European History #33
dPXNZkGYJHM 14:07 WWI's Civilians, the Homefront, and an Uneasy Peace: Crash Course European History #34
U6KR4cLLVzQ 14:16 Russian Revolution and Civil War: Crash Course European History #35
xzWL2XPBHMk 14:48 Post-World War I Recovery: Crash Course European History #36
Ojo8-GhhQcA 16:34 Economic Depression and Dictators: Crash Course European History #37
Hs_JMydrxZM 16:15 World War II: Crash Course European History #38
rlx6ur_D51s 14:25 World War II Civilians and Soldiers: Crash Course European History #39
iQeDvnapdlg 13:39 The Holocaust,Genocides, and Mass Murder of WWII: Crash Course European History #40
-rkIqtV07HE 14:46 Post-War Rebuilding and the Cold War: Crash Course European History #41
nlp068CmQaE 15:57 Post-World War II Recovery: Crash Course European History #42
FlMKqRCNX9c 13:23 Decolonization: Crash Course European History #43
zDEmHQhGkBg 15:14 Revolutions in Science and Tech: Crash Course European History #44
fs_SvMr5IPE 12:28 Protests East and West: Crash Course European History #45
aStaPgdvIdI 13:59 The Soviet Bloc Unwinds: Crash Course European History #46
OfJ8Wzanhr4 13:25 The Fall of Communism: Crash Course European History #47
UauE2FUQYH0 11:57 Europe in the Global Age: Crash Course European History #48
-_6978boAQ8 12:46 21st Century Challenges: Crash Course European History #49
1hAraGgEiAo 15:07 What History Was, Is, and Will Be: Crash Course European History #50

# Crash Course: World Mythology

iRCVcuA6yZQ 2:00 Crash Course World Mythology Preview
HeX6CX5LEj0 13:02 What Is Myth? Crash Course World Mythology #1
4eVFgfQ2694 12:22 Creation from the Void: Crash Course World Mythology #2
7fHDIiqLz9w 12:22 Cosmic Sexy Time, Eggs, Seeds, and Water: Crash Course World Mythology #3
TlFVFRkEfwo 12:07 Earth Mothers and Rebellious Sons - Creation Part 3: Crash Course World Mythology #4
PBbTkzakiM8 10:33 Social Orders and Creation Stories: Crash Course World Mythology #5
T6f1-nEjDdM 11:03 Humans and Nature and Creation: Crash Course World Mythology #6
EcQ-6Zd1638 13:08 Pantheons of the Ancient Mediterranean: Crash Course World Mythology #7
V_NJAJGCKD8 12:31 Indian Pantheons: Crash Course World Mythology #8
XNCQ9w59I7M 12:46 The Greeks and Romans - Pantheons Part 3: Crash Course World Mythology #9
CyU54gV_PWM 12:45 The Norse Pantheon: Crash Course World Mythology #10
J2se_zimj40 11:10 African Pantheons and the Orishas: Crash Course World Mythology #11
blFaiB5kj6I 12:15 Theories of Myth: Crash Course World Mythology #12
cpM-pfh-WWo 11:11 Great Goddesses: Crash Course World Mythology #13
X8_uTpbrHQE 12:27 Fire and Buffalo Goddesses: Crash Course World Mythology #14
ue2PPZnaaNc 11:46 Archetypes and Male Divinities: Crash Course World Mythology #15
VA3j5_vKQfc 10:23 Noah's Ark and Floods in the Ancient Near East: Crash Course World Mythology #16
A90jB9WlvYY 9:25 Yu the Engineer and Flood Stories from China: Crash Course World Mythology #17
GrTXHeSHGSE 9:00 American Floods: Crash Course World Mythology #18
iW7H1KfSJ8s 10:44 The Dying God: Crash Course World Mythology #19
RW1ChiWyiZQ 10:10 Tricksters: An Introduction: Crash Course World Mythology 20
udj1FReC2TI 12:00 Hermes and Loki and Tricksters Part 2: Crash Course World Mythology #21
eAKHGe6x8n8 12:33 Coyote and Raven, American Tricksters: Crash Course World Mythology #22
FyZFoa7Vu1o 12:03 The Apocalyspe: Crash Course World Mythology #23
yBG10jlo9X0 12:20 Ragnarok: Crash Course World Mythology #24
XevCvCLdKCU 13:20 The Hero's Journey and the Monomyth: Crash Course World Mythology #25
sWppk7-Mti4 13:46 The Epic of Gilgamesh: Crash Course World Mythology #26
qsuqbPda5uo 13:25 Rama and the Ramayana: Crash Course World Mythology #27
Ik3Y4Oq6TwU 13:32 Galahad, Perceval, and the Holy Grail: Crash Course World Mythology #28
Kcfww2-y2K8 12:42 The Mwindo Epic: Crash Course World Mythology #29
R0qkSTvRQa8 12:52 Herakles. Or Hercules. A Problematic Hero: Crash Course World Mythology #30
eBB3RKazIj8 13:24 Ma'ui, Oceania's Hero: Crash Course World Mythology #31
XEjvhTHNx3s 10:41 Mythical Caves and Gardens: Crash Course World Mythology #32
SZN-JbiEtvg 11:42 Mythical Mountains: Crash Course World Mythology #33
iNw7RIOY7SA 11:27 Mythical Trees: Crash Course World Mythology #34
9EbZBJZruAc 12:25 Cities of Myth: Crash Course World Mythology #35
r0T3gpfH_-w 10:30 Monsters. They're Us, Man: Crash Course World Mythology #36
klXMVUR-Y7Q 11:17 Mythical Horses: Crash Course World Mythology #37
SWXNSkE3YEk 11:24 Serpents and Dragons: Crash Course World Mythology #38
0OCPQG4bMFs 9:41 Witches and Hags: Crash Course World Mythology #39
PgsWcqATeLQ 12:55 Freud, Jung, Luke Skywalker, and the Psychology of Myth: Crash Course World Mythology #40
qmpDK-8ib2Y 12:49 Mythical Language and Idiom: Crash Course World Mythology #41
`),rc=fe(`

# 10 Minute Traveller

UGnuIgM8ZjM 10:07 10 Minute Traveller RPG Pt 1 The 70s
OzrhxcxZkq8 11:15 10 Minute Traveller RPG Pt 2
dpN4T8yE1BA 11:37 10 Min Traveller RPG Pt3
G8ClXQWD7uQ 11:10 10 Min Traveller Part 4 Basic Skills
_ZPEYnZJzEI 12:00 10 Min Traveller RPG Part 5 Essential Skills
gRLHDwHElG0 9:46 10 Minute Traveller RPG Part 6 Services, Terms and Enlistment
T9wxnJG70hk 21:00 10 Min Traveller RPG Part 7 Creating a Character
uatk19Ob0sQ 7:49 10 Min Traveller Supplemental, Extended Characters
gAuh7HTVaZo 16:32 10 Min Traveller Part 9 COMBAT
5V0bmV8Pu0I 11:06 10 Min Traveller Supplemental. Space Combat
7xl9pD1o8Gs 20:04 10 Min Traveller Part 10 Drugs, Computers and Money
Ao_yJEbRFMU 9:31 10 Min Traveller PT11 Travelling, The meaning of Passages.

# Seth Skorkowsky: Traveller Reviews

Tym86AcYwuU 23:00 Traveller: High and Dry - RPG Review
Q4vULypIu1U 19:08 Traveller: Mission to Mithril - RPG Review
YzO3GGma57I 10:12 Traveller Starter Set - RPG Review
Kz_xhT9obRo 19:00 Traveller: Marooned on Marduk - RPG Review
ijtLp8KCLPE 24:27 Traveller: Annic Nova - RPG Review
HZ6M8pGa138 25:50 Traveller: Murder on Arcturus Station - RPG Review
rTPzJidorZg 18:34 Traveller: The Ship in the Lake - RPG Review
LpJbTE2t8eg 21:55 Traveller: The Calixcuel Incident - RPG Review
LEOjVNkL8iI 18:30 Traveller: Rule of Man Commemorative - RPG Review
fUN3zc2hnU0 20:04 Traveller: Chariots of Fire - RPG Review
pwhJCQs69Jw 32:44 Traveller: Flatlined - RPG Review
AH1oyUjjUj4 30:44 Traveller: Death Station - RPG Review
LCIn30dPTnM 17:00 3D Printed Traveller Scout Ship - Review
O4zoiDztAPQ 26:26 Traveller: Mysteries on Arcturus Station - RPG Overview
SJhJLbqDeiw 17:24 Traveller: A Dagger at Efate - RPG Review
PydWXlEYJes 29:24 Traveller: Islands in the Rift - RPG Review

# HR Diagram

TQK5FH_pj6c 44:26 4.21 HR Diagram

# Gamemaster Growth: Traveller & Sci-Fi

OuG-Y6EFYTM 20:33 A Whistle-Stop Tour of the Traveller RPG Universe
Qz6IGb1aDNY 13:41 Traveller RPG’s 3rd Imperium setting: more relevant than ever
UQjh_8LFz5w 10:01 Traveller's RPG’s Jump drive is kind of a big deal
2X0zWpn3jaM 17:47 GURPS Traveller developed the 3rd Imperium Setting like nothing before or since.
LxdIPzwcWmE 9:43 Why Traveller Leads the pack of Sci-Fi RPGs?
SKfU7S1wr30 9:36 Traveller’s iconic starships: a Breed Apart
vybGM6mXGrU 12:10 A Traveller Renaissance?
K6ycC-TlBJM 15:19 History of the Traveller RPG Universe (OTU): part the first
ZjRP8_ZJVYI 22:17 Mongoose Traveller 2nd Edition: Character Creation in an App?

# Page121 Traveller

6f2ACQQ80eQ 12:26 JTAS: A magazine for the Traveller RPG
RbWgPXcfGJM 8:48 Traveller Presented By Far Future Enterprises
fw5jKA9L7aE 11:09 Megatraveller By GDW
6-FuBofUoro 9:33 Challenge: A Magazine For Traveller by GDW
X2w0hmdfA6Y 13:56 Let's Play Traveller
dQVIPPFDUCE 11:46 Let's Play Traveller Snapshot
GVVW8jlON9g 15:07 The Travellers' Digest By Digest Group Publications
5RHjkOeK8DA 9:42 Ship Deckplans By FASA For Traveller
tttkHB59uWM 7:12 Freelance Traveller: A Magazine Anyone Can Afford
_e35s97JL-Y 13:03 A Look At A Great Issue of Challenge Magazine
lMOGig9QIso 9:18 Traveller The New Era
Ios2hRQNO5M 10:17 Traveller Library Data Supplements
P2P6wIK0pk8 8:48 Judges Guild: A Traveller Licensee
JhiymVvJpNk 11:14 Marc Miller's Traveller
aLqyG5A7a7s 9:21 Traveller Group One
-qOPDunj1xI 8:31 Tarsus World Beyond The Frontier by GDW
l8himS3ZZhU 12:25 Traveller Map Online
c-FigQJ_npg 8:55 Starter Traveller Box Set By GDW
ITv7P86ZWbY 12:39 Traveller Starship Operators Manual By DGP
VSrMFicV920 7:40 Adventure Class Ships II By FASA For Traveller
gLNz9DwCHts 10:28 GURPS Traveller By Steve Jackson Games
NxZx2ePqwi8 11:03 Traveller Alien Module 1 Aslan By GDW
tIlVwyKGr6U 9:43 Beltstrike A Traveller Adventure By GDW
Eq3GhBOkNMM 11:30 Atlas of the Imperium For Traveller By GDW
ypqgTavGVPw 11:09 Grand Survey For Traveller By DGP
GM8ddQROJGo 11:28 Traveller GM And Players Helpers By Judges Guild
BO2JEtoqUUM 7:40 Grand Census For Traveller By DGP
zRTZ6CWggsc 24:06 The Third Imperium For Mongoose Traveller 2nd Edition
_DAb3T--yjU 7:05 Traveller Minis By Grenadier
dIUTID2vNUw 8:54 Merchant Class Ships For Traveller By FASA
cM2nFPx8fwc 7:53 Aslan Mercenary Ships For Traveller By FASA
APMOPZQEIs4 8:45 Traveller Explorer's Edition By Mongoose
BtzJAcJtfN0 2:20 Death Station For Mongoose Traveller 2nd Edition
VEPIP-UB2oQ 9:51 Kamsii The Pleasure Planet For Traveller
sP9Bk98EnYA 7:41 Traveller Double Adventure 1 By GDW
ApYvmw8C-JY 11:46 Agent of the Imperium: A Traveller Novel By Marc Miller
A_ezWFcgudE 11:34 Fighting Ships of the Shattered Imperium For Megatraveller
z6_fql-LkvI 10:12 Traveller 101 Robots By Digest Group Publications
A9ymXhnWNH4 11:27 Mongoose Traveller 2E Referee Screen
E-_ncsmiLlk 14:26 Megatraveller Imperial Encyclopedia By GDW
nufwArmdjZo 10:39 Traveller Free Trader Beowulf Deck Plan by GURPS
bwMunH1WIJ8 15:09 Megatraveller PC Games From 1990 91
zav3xT4B-Sg 14:32 Traveller T20 By Quik Link Interactive
NXAOLRqQFvw 9:29 Deepnight Revelation For Mongoose Traveller 2E First Look
HBnCUeJMIdA 11:56 What Is The Lorenverse In Traveller?
kowlk7usc-M 10:35 Luna of Terra In Traveller From Dragon Magazine
p5b8pSX--Do 16:30 The Rebellion Sourcebook For Megatraveller
geE6nY_mhn8 11:00 Traveller TNE Star Vikings by GDW
W-CVy1Yn6CA 15:35 Tech Levels In Traveller Explained
8dAUQtModMg 11:55 What Is A Major Race in Traveller?
nq81D7q9YEg 18:11 Jumpspace In Traveller
0Ke8GWMwB1k 12:54 K'Kree: A Major Race In Traveller
gm1L_GM3Jm8 14:29 Megacorporations In The Official Traveller Universe
hXaSc1RbW04 11:37 Traveller HERO By Comstar Games
8zQApJrltTg 15:43 Journal of the Traveller's Aid Society By Mongoose
Xlc1UxrABBQ 11:32 Types of Passage in Traveller
moMFbRBnG78 16:37 Mercenaries In Traveller Over The Years
I88YtBT6yk0 18:24 Mongoose Traveller 1st Edition
5e2bCNdjJDE 14:59 COACC For Megatraveller by GDW
CZs5RuWLi-U 19:43 Pocket Empires From Marc Miller's Traveller
C8xaLwxwrhU 15:36 Law Levels In Traveller
5AdFJXMYdUo 14:36 System Defense Boats In Traveller
4QppMblydtU 17:03 Game Master Screens For Many Editions of Traveller
bAutdcAYzZs 27:38 Mongoose Traveller 2nd Edition 2022 Update
gmqq8xkflaI 15:38 A Look At Mongoose JTAS Volume 2
mJVkjxOJBFs 15:14 What Is The Traveller's Aid Society In Traveller?
QBuP4R3SDjM 15:17 Vampire Fleets For Traveller TNE
kuX36ACzhiM 10:00 The Agent Career Path In Traveller RPG
7XOkaSWGJgw 19:12 Traveller Customizable Card Game
WFuReZZLFc4 15:31 Signal GK Traveller Adventure 13: Part of Traveller History
N5Nrtd6j7fQ 8:23 Zhodani Base: A Great Traveller Resource
Ykbx1Qsi9Ys 16:11 Traveller Campaign Tips 1: Early Choices
wg5livPg7EM 15:31 Traveller Campaign Tips 2: Session Zero
YZHqkx0n3g8 30:37 Traveller Campaign Tips 3: Skills
B78F5amt10E 14:12 Black Globe Generators In Traveller
HAOfQEFbOT4 9:43 Traveller Seeker Deck Plans From GURPS
FYlgZTLzaL0 10:33 Tinkerturf Terrain For Traveller, Star Frontiers, Cepheus, Champions and Other Sci Fi Gaming
cR4zXN4sYhY 21:14 Traveller Campaign Tips 4: Equipping Your Travellers
688xv4-MLL4 27:10 Traveller Campaign Tips 5: Personal Combat
43j9Pwwd2Sw 21:44 Traveller Campaign Tips 6: How Are Your Travellers Travelling?
rs5R6lhTuO4 15:09 A Look At The Referee's Companion For Megatraveller
HZuau3WxH3s 2:38 A New DGP Product From Marc Miller
7bfSQstd-Zk 17:05 Traveller Campaign Tips 7: The Ship's Locker
PJMsWZDWJks 23:16 Manhunt: A New Megatraveller Adventure From FFE
AfxtJUjbB8s 15:50 Open Table And Closed Table Play For Traveller
7okYd2-x9fw 24:43 Field Catalogue For Traveller 2nd Edition From Mongoose
JfmtuZORR3E 12:45 Traveller Campaign Tips 8: Wilderness Refueling
AKVEXR2w5ws 23:41 Dying During Character Creation In Traveller
tq6ov8bNFyE 15:07 Traveller Campaign Tips 9: Patrons
5j3mKsedjr0 25:49 Behind the Claw For Mongoose Traveller 2nd Edition
cJArHTnTKAE 19:09 Traveller Campaign Tips 10: Medicine
nfQ5aWJdLEE 16:01 Traveller CCG Booster Packs By Horizon Games
OwLC9MUcvJg 16:36 Hobby Shop 1982 Episode 4: Azhanti High Lightning For Traveller
Zstvvfn--78 15:17 101 Vehicles By Digest Group Publications for Megatraveller
XKmO08qY2yk 15:59 Official and Unofficial Traveller Novels
0272XXSMGbg 13:18 NPCs In Traveller
LUruvkcZeTI 15:01 A Look At Supplements 1 and 4 For Traveller
MEaptsYJALo 11:03 BITS Traveller
6-jyZ2UP_4o 12:19 The Wagner Incident For My 100th Traveller Episode
Q_I5dhFerDE 21:56 A Look At Offerings From Far Future Enterprises For Traveller

# Surprise! Hertzsprung-Russell Diagram

_EtlJCfaxdc 9:53 Stars and Galaxies: The Hertzsprung-Russell Diagram

# Traveller5 Perusal

K1Z-r06md_E 1:14:22 1. Basics & Ranges: Traveller5 Science Fiction RPG Flip-Through
76wYsyqOdF8 47:37 2. Benchmarks & Characteristics: Traveller5 Science Fiction RPG Flip-Through
5f6cppxSEtY 40:31 3. Character Generation (1/2): Traveller5 Science Fiction RPG Flip Through
Ap5yohn9hVE 39:19 4. Character Generation (2/2): Traveller5 Science-Fiction RPG Flip-Through
V33YU5nS08k 52:07 5. Land Grants, Ship Shares & Genetics: Traveller5 Science-Fiction RPG Flip-Through

# Seth Skorkowsky: Traveller Intro

QdCq91MP9wE 13:34 Traveller: Part 1 - Introduction
LEwwopcCONY 39:45 Traveller: Part 2 - Character Creation
22pbSwPFmwM 21:50 Traveller: Part 3 - Skill Mechanics
uaW5R5c-ojo 27:07 Traveller: Part 4 - Combat
D-MleY7W5Fw 31:22 Traveller: Part 5 - Spacecraft Operations
fUoXPfaXO6g 38:23 Traveller: Part 6 - Space Combat
WYxWJOmH_pI 10:22 Traveller: Part 7 - Psionics
QKTuaJQi4b4 23:27 Traveller: Part 8 - Worlds & Starports
wcfofeYpO3Q 32:24 Traveller: Part 9 - Passengers & Cargo
673QZdUrwiQ 26:15 Traveller: Part 10 - Final Thoughts
ylYmiTm1GV8 47:02 Traveller: Spacecraft Construction

# Game On! Everything Traveller

T0HOhmFrsZc 12:58 Mongoose’s Traveller 2e makes space travel serious business 🚀 RPG Review & Mechanics
A7gpvNt5Sx8 12:04 Traveller My Favorite Science Fiction RPG | [A Quick Overview]
1lQXcYQzqwM 16:47 Learn to Play Traveller RPG Ep 1 Introduction
ptWbIvKG4rc 15:34 Let's Make A Traveller Character [Part 1]
4tp4_akZ1Tw 15:09 Let's Make A Traveller Character [Part 2]
bG0YRBsRmEw 11:15 Let's Make A Traveller Character [Part 3]
GvlZoJgIRzU 15:43 Let's Make A Traveller Character [Part 4]
KDWrtXidl8E 19:19 Eve Vs Elite Dangerous - Play Traveller!
6vX9za9nel0 6:31 Traveller RPG Lore- Terra (Earth)
PZ1AcRqzxmI 1:54 Random Character Creation For D&D 5th Ed [Traveller Style]
eyFuvpjRGQg 9:16 Make Your RPG Space Battles More Exciting - [3 Easy Steps!]

# Dwarven Tavern: Traveller

Uj1E3cq84dg 27:03 Traveller Central Supply Catalogue - Dwarven Tavern Review
L8ReClrg9l4 1:12:42 Traveller Core Rules - Dwarven Tavern Review
cX8HbXKBiz8 5:53 Traveller Characters Interviews - Royce Bloopers
YJDw3dcFXno 4:29 Traveller Character Interviews - Sheridan and Simone Bloopers
ZdTnvPHmY5M 7:40 Traveller Character Interviews - Royce
A1jsHKoe2so 5:16 Traveller Character Interviews - Simone
Wf41nIpV7bI 5:50 Traveller Character Interviews - Sheridan
9PU_Cyz4ogw 21:57 Traveller Review - Dwarven Tavern - Part 4
hTwO99L_RYw 29:31 Traveller Review - Dwarven Tavern - Part 3
x72hO1wFEgc 12:04 Traveller Review - Dwarven Tavern - Part 2
JZ8kDdWOBb8 14:22 Traveller Review - Dwarven Tavern - Part 1
Zrzs4fOMxnU 22:38 Traveller Vehicle Handbook - Dwarven Tavern Review
cS0_6tKyP6U 20:42 Traveller: High Guard - Dwarven Tavern Review
aYTk9zXEs6U 42:33 Traveller Starter Set - Dwarven Tavern Review
sFc-qxKvE6s 35:07 Traveller: The Great Rift - Dwarven Tavern Review
MBmBJ6_hlTc 27:30 Traveller: Pirates of Drinax - Dwarven Tavern Review
HyjSee-0EyQ 34:36 Traveller: The Trojan Reach - Dwarven Tavern Review
HkK46HsmW50 12:38 Traveller: Ships of the Reach - Dwarven Tavern Review
bp6UkPzI7kQ 22:16 Traveller: Mercenary - Dwarven Tavern Review
lJYdajjkJ9I 31:48 Traveller - Aliens of Charted Space Vol. 1 - Dwarven Tavern Review

# A Hertzsprung-Russell Diagram

LNtA8nhhh3M 35:41 The Hertzsprung-Russell Diagram

`),oc=fe(`
IoOsnVFOgpM 1:00:00 Derelict Ship | Sci-fi ASMR Ambience | 1 Hour
2b_d1EylEvQ 2:00:00 Space Ship Suite | Ambience | 2 hours
7BABfeQa83A 2:00:00 Space Hangar | Port Ambience | 2 hours
gpvznAiKblU 10:00:00 Starship Sleeping Quarters | Sleep Sounds White Noise with Deep Bass 10 Hours
s6RGexFYeU4 1:30:35 1.5 hours Ambient Space station - Chill Relax - Eve Online Dodixie
nmt17DsZf4o 1:03:01 Spaceship Ambience for Sleep or Studying | ASMR Space Travel Sounds
QGf3V5MCbGY 1:00:01 SPACESHIP COCKPIT SOUNDS 🎧 For Studying | Relaxing | Sleeping (THE OUTER WORLDS Ambience | ASMR)
i6Yvk8eT2Ss 1:59:59 Space Station | Ambience | 2 hours
Uj8DYegtrHg 10:03:01 10 hours | CityScape of Mars Base Alpha-1: Ambient Space Music, Sci-Fi, Future World
BtfzACa0kIg 10:00:00 Space Sounds Sleep 🚀 Spaceship White Noise for Sleeping 10 Hours
ALodybtL_8s 3:34:11 Spaceship Ambience ASMR Sc-Fi Restaurant Cafe Dinner in a Starship
ZQnPUt8rZHA 1:00:01 Elite Dangerous Background Radio Chatter and Ambient Space Static
lydlOOKbet8 1:42:56 Elite Dangerous - Agriculture docking bay ambience
PVnabdGyI_Y 1:07:39 Elite Dangerous - High tech docking bay ambience
7KmCvk9clIY 1:17:42 Cyberpunk City Ambience For Gaming, Relaxing & ASMR
8VfuELVQjaA 1:35:21 Space Ambient Mix 33 - Frozen Dreams by The Intangible
_sn6Ka9A210 7:00:00 ASMR Cyberpunk Future City Window Sound Ambience 7 Hours 4K Wallpaper - Sleep Relax Focus Chill
x5zX1eRKEDM 7:00:00 ASMR Blade Runner Balcony Cyberpunk City Rain Sound Ambience 7 Hours 4K - Sleep Relax Focus Chill
C4MpzSMkinw 1:18:44 Productivity Music — Maximum Efficiency for Creators, Programmers, Designers
HFBjfzsOtx0 2:00:01 Spaceship Bedroom Ambience – Space Sleeping Quarters (White Noise, Relaxation, ASMR)
TCyzw2R9eFE 1:00:21 Starship Covenant / Interstellar Space Ambient - Alien Unofficial Soundtrack
NWwpCinP_MM 1:00:01 SPACESHIP NOSTROMO SOUNDS 🎧 For Studying | Relaxing | Sleeping (ALIEN ISOLATION Ambience)
llDMztU5JGk 10:00:01 Blade Runner - Ambient for sleeping ASMR
yttvb9ByOtY 7:00:00 ASMR Cyberpunk Future City Aerial Sound Music Ambience 7 Hours 4K - Sleep Relax Focus Chill Dream
7aDpCIDYDc8 1:06:24 Songs for Dead Planets
yp7Mqp-X2wk 7:00:00 ASMR Cyberpunk Future City Hacker Room Sound Ambience 7 Hours 4K - Sleep Relax Focus Chill Dream
jXslH7Z9-Fg 1:08:14 Tony's Workshop Music — Productivity Superhero Mix
bDe8EXaKg3I 1:53:52 Dune Ambient Music | Hans Zimmer
k3fz6CC45ok 1:52:42 Vangelis - Blade Runner Soundtrack (Remastered 2017)
7aDpCIDYDc8 1:06:23 Songs for Dead Planets
`),lc=fe(`
CePcXyN5JrM 46:58 【ENG SUB】The LAUGHING IN THE WIND EP01 | The magic swords of ling
ju2VqMQyLAc 46:14 【ENG SUB】The LAUGHING IN THE WIND EP02 | The magic swords of ling
Jlcm0GDKHdU 46:21 【ENG SUB】The LAUGHING IN THE WIND EP03 | The magic swords of ling
42_K0OQfPWs 46:15 【ENG SUB】The LAUGHING IN THE WIND EP04 | The magic swords of ling
qB-bV2dP42c 46:26 【ENG SUB】The LAUGHING IN THE WIND EP05 | The magic swords of ling
ZnrbsskDlp0 46:58 【ENG SUB】The LAUGHING IN THE WIND EP06 | The magic swords of ling
rsoaMMK5I74 46:31 【ENG SUB】The LAUGHING IN THE WIND EP07 | The magic swords of ling
Pw26KAoxleI 46:23 【ENG SUB】The LAUGHING IN THE WIND EP08 | The magic swords of ling
_DA1VrSBhMM 46:12 【ENG SUB】The LAUGHING IN THE WIND EP09| The magic swords of ling
zxcft5ieOQM 46:21 【ENG SUB】The LAUGHING IN THE WIND EP10| The magic swords of ling
z0KjQjfbn_0 46:38 【ENG SUB】The LAUGHING IN THE WIND EP11| The magic swords of ling
x0jA8X_0QpE 46:58 【ENG SUB】The LAUGHING IN THE WIND EP12| The magic swords of ling
SW8bWImmkOQ 46:57 【ENG SUB】The LAUGHING IN THE WIND EP13| The magic swords of ling
7JaSWs0LzIA 46:32 【ENG SUB】The LAUGHING IN THE WIND EP14| The magic swords of ling
rjAy3VbC6Pc 47:10 【ENG SUB】The LAUGHING IN THE WIND EP15| The magic swords of ling
8A_aVCM9JYg 46:58 【ENG SUB】The LAUGHING IN THE WIND EP16| The magic swords of ling
sJ0bJMyDXRA 46:12 【ENG SUB】The LAUGHING IN THE WIND EP17 | The magic swords of ling
_qlz4qtkusI 46:46 【ENG SUB】The LAUGHING IN THE WIND EP18| The magic swords of ling
bpi6bfbOOxg 46:20 【ENG SUB】The LAUGHING IN THE WIND EP19| The magic swords of ling
dUWNv6zb0yE 46:28 【ENG SUB】The LAUGHING IN THE WIND EP20| The magic swords of ling
bi4_NAsOBFc 46:14 【ENG SUB】The LAUGHING IN THE WIND EP21| The magic swords of ling
VsDwjKaLc0I 46:32 【ENG SUB】The LAUGHING IN THE WIND EP21| The magic swords of ling
aigAMjQcQIY 46:48 【ENG SUB】The LAUGHING IN THE WIND EP23| The magic swords of ling
MryX4f5ldYA 46:24 【ENG SUB】The LAUGHING IN THE WIND EP23| The magic swords of ling
HOG7UMwxFcQ 46:23 【ENG SUB】The LAUGHING IN THE WIND EP25 | The magic swords of ling
jvyh4hNBAjc 46:44 【ENG SUB】The LAUGHING IN THE WIND EP26 | The magic swords of ling
ui5wdVbVsi8 46:15 【ENG SUB】The LAUGHING IN THE WIND EP27 | The magic swords of ling
KJ0efSE4v5g 46:32 【ENG SUB】The LAUGHING IN THE WIND EP28 | The magic swords of ling
KAR-JCwO3Ac 46:53 【ENG SUB】The LAUGHING IN THE WIND EP29 | The magic swords of ling
3edRMDfvzsQ 46:19 【ENG SUB】The LAUGHING IN THE WIND EP30 | The magic swords of ling
Onm9Gg4aGbQ 46:38 【ENG SUB】The LAUGHING IN THE WIND EP31 | The magic swords of ling
PsSc-48haoE 46:46 【ENG SUB】The LAUGHING IN THE WIND EP32 | The magic swords of ling
u-LPs-0ICEI 46:49 【ENG SUB】The LAUGHING IN THE WIND EP33 | The magic swords of ling
0wHziG39GBw 46:20 【ENG SUB】The LAUGHING IN THE WIND EP34 | The magic swords of ling
QQZpF_AM8cM 47:04 【ENG SUB】The LAUGHING IN THE WIND EP35| The magic swords of ling
YW-9ew2kDhc 46:26 【ENG SUB】The LAUGHING IN THE WIND EP36 | The magic swords of ling
CeMgP00pbMg 46:39 【ENG SUB】The LAUGHING IN THE WIND EP37 | The magic swords of ling
q7lAu_PZKkU 46:50 【ENG SUB】The LAUGHING IN THE WIND EP38 | The magic swords of ling
3wP6xfAr4-s 46:54 【ENG SUB】The LAUGHING IN THE WIND EP39 | The magic swords of ling
XTLfFfI1Gj8 46:21 【ENG SUB】The LAUGHING IN THE WIND EP40 | The magic swords of ling
`);var Ho=[yn("Channel 1",tc.map(Tr)),yn("Channel 2",nc.map(Tr)),yn("Channel 3",ec),yn("Channel 4",rc.map(Tr)),yn("Channel 5",oc.map(Tr)),Je("Channel 6",lc.map(Tr))];function Tr(e){return{videos:[e]}}function ic(e){return I(Ft,null,Ho.map(t=>I("button",{key:t.getName(),onClick:()=>e.onChannelSelected(t)},t.getName())))}function ac(){let[e,t]=Ge(+new Date);return Xu(()=>t(+new Date),250),e}function sc(e=""){return{type:"nothing",nextVideoId:e}}function uc(e,t){let{state:n,videoId:r,time:o}=t;if(e.type==="nothing")switch(n){case le.ENDED:case le.CUED:case le.UNSTARTED:return e.nextVideoId?r!==e.nextVideoId?[{type:"cue",videoId:e.nextVideoId,timestamp:0}]:[{type:"seek",timestamp:0},{type:"play"}]:[];default:return[]}else{if(n===le.BUFFERING)return[];let{videoId:l,currentTime:i}=e;if(r!==l)return[{type:"cue",videoId:l,timestamp:i<Ae?0:i}];{let a=[];switch(n){case le.PAUSED:case le.CUED:case le.UNSTARTED:r&&a.push({type:"play"})}return o&&pp(o,i)>=Ae&&(console.debug("time is off; seeking",o,i),a.push({type:"seek",timestamp:i})),a}}}function pp(e,t){return Math.abs(e-t)}var hp=0;function mp(){let[,e]=Ge(0);return()=>e(++hp)}function cc(e){let t=mp(),n=Tn(Qu());return Wt(()=>{Ku(e).then(r=>{n.current=r,r.addEventListener("onStateChange",o=>{console.debug(mt(),"player onStateChange",mr(o.data),mn(r.getVideoUrl())),t()}),t()})},[e]),n.current}function gp({broadcast:e,player:t}){var r;let n=o=>z(o,2);return{videoLink:e.type==="video"?{text:e.videoTitle,href:"https://youtube.com/watch?v="+e.videoId}:null,actual:{video:(r=t.videoId)!=null?r:"",playerState:mr(t.state),currentTime:t.time!=null?n(t.time):"-"},scheduled:{video:e.type==="video"?e.videoId:"-",playerState:e.type,currentTime:e.type==="video"?n(e.currentTime):"-"},secondsBehindSchedule:e.type==="video"&&t.time!=null?(e.currentTime-t.time).toFixed(2):"-",timeRemainingInVideo:t.duration!=null&&t.time!=null?n(t.duration-t.time):"-"}}function fc(e){let{broadcast:t,player:n,onClose:r}=e,o=gp({broadcast:t,player:n});return I(Ft,null,I("button",{class:"close-button",onClick:r},"close"),I("h1",null,"Culture Machine"),I("p",null,"Made by ",I("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."," ",I("a",{href:"https://github.com/benchristel/tv"},"Source code here"),". Some rights reserved. See the"," ",I("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"license"),"."),I("hr",null),I("h2",null,"Video Info"),I("p",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},"Now playing:"," ",o.videoLink?I("a",{href:o.videoLink.href},o.videoLink.text):"-"),I("table",null,I("thead",null,I("tr",null,I("td",null),I("th",{scope:"col"},"actual"),I("th",{scope:"col"},"scheduled"))),I("tbody",null,I("tr",null,I("th",{scope:"row"},"video"),I("td",null,o.actual.video),I("td",null,o.scheduled.video)),I("tr",null,I("th",{scope:"row"},"player state"),I("td",null,o.actual.playerState),I("td",null,o.scheduled.playerState)),I("tr",null,I("th",{scope:"row"},"current time"),I("td",null,o.actual.currentTime),I("td",null,o.scheduled.currentTime)))),I("p",null,"Seconds behind schedule: ",o.secondsBehindSchedule),I("p",null,"Time remaining in video: ",o.timeRemainingInVideo))}var zi=class extends Yi{componentDidUpdate(){let{player:t,commands:n}=this.props;n.forEach(r=>{switch(r.type){case"play":t.playVideo();break;case"cue":t.cueVideoById(r.videoId,r.timestamp);break;case"seek":t.seekTo(r.timestamp);break;default:console.error("unexpected video command type",r.type,r)}})}render(){return null}};function dc(e){return{state:e.getPlayerState(),videoId:mn(e.getVideoUrl()),time:e.getCurrentTime(),duration:e.getDuration()}}function pc(){let[e,t]=qu(),[n,r]=Ge(!1),[o,l]=Ge(Ho[0]),i=ac(),a=e?o.getBroadcast(i):sc(),s=Ju(cc("player-container")),c=dc(s),T=c.state,N=T!==le.PLAYING,g=uc(a,c);return I(yp,{effects:I(zi,{commands:g,player:s}),screen:I("div",{className:n?"info-pane-open":""},I("div",{className:"player-assembly"},I("div",{id:"player-container"}),N&&I("div",{className:"black-screen"},I(bu,{code:T,channel:o})),!e&&I(vp,{onClick:t})),I("div",{className:"info-pane"},I(fc,{player:c,broadcast:a,onClose:()=>r(!1)})),I("div",{className:"info-pane-close-overlay","aria-hidden":!0,onClick:()=>r(!1)})),controlPanel:I(Ft,null,I(ic,{onChannelSelected:R=>{l(R),t()}}),I("button",{className:n?"info-button info-button-info-pane-open":"info-button",onClick:()=>r(!n)},"Info"))})}function yp(e){return I("div",{className:"App"},I("div",{className:"bezel"},I("div",{className:"screen"},e.screen),I("div",{style:{height:"12px"}}),I("div",{className:"controls"},e.controlPanel),e.effects))}function vp(e){return I("button",{id:"start",onClick:e.onClick},"▸ Play")}function hc(){let[e,t]=Ge("");return Wt(()=>{Uu(zu()).then(Ou).then(t).catch(n=>t(n.message))},[]),/fail/i.test(e)?I("div",{className:"TestResults"},I("code",null,I("pre",null,e))):null}Hi(I(pc,null),document.getElementById("app"));Hi(I(hc,null),document.getElementById("test-results"));
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=index.js.map
