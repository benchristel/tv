var yl=Object.defineProperty;var Qc=Object.prototype.hasOwnProperty;var vl=Object.getOwnPropertySymbols,Jc=Object.prototype.propertyIsEnumerable;var Tl=(e,t,n)=>t in e?yl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,je=(e,t)=>{for(var n in t||(t={}))Qc.call(t,n)&&Tl(e,n,t[n]);if(vl)for(var n of vl(t))Jc.call(t,n)&&Tl(e,n,t[n]);return e};var Ye=(e,t)=>{for(var n in t)yl(e,n,{get:t[n],enumerable:!0})};var Gr=(e,t,n)=>new Promise((r,o)=>{var a=s=>{try{l(n.next(s))}catch(c){o(c)}},i=s=>{try{l(n.throw(s))}catch(c){o(c)}},l=s=>s.done?r(s.value):Promise.resolve(s.value).then(a,i);l((n=n.apply(e,t)).next())});function et(e,t,n){return n={path:t,exports:{},require:function(r,o){return Kc(r,o==null?n.path:o)}},e(n,n.exports),n.exports}function Kc(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Sl=Object.getOwnPropertySymbols,Zc=Object.prototype.hasOwnProperty,Xc=Object.prototype.propertyIsEnumerable;function qc(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function $c(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch(a){return!1}}var ed=$c()?Object.assign:function(e,t){for(var n,r=qc(e),o,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var i in n)Zc.call(n,i)&&(r[i]=n[i]);if(Sl){o=Sl(n);for(var l=0;l<o.length;l++)Xc.call(n,o[l])&&(r[o[l]]=n[o[l]])}}return r},j=ed;var td=et(function(e,t){var n=60103,r=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,a=60110,i=60112;t.Suspense=60113;var l=60115,s=60116;if(typeof Symbol=="function"&&Symbol.for){var c=Symbol.for;n=c("react.element"),r=c("react.portal"),t.Fragment=c("react.fragment"),t.StrictMode=c("react.strict_mode"),t.Profiler=c("react.profiler"),o=c("react.provider"),a=c("react.context"),i=c("react.forward_ref"),t.Suspense=c("react.suspense"),l=c("react.memo"),s=c("react.lazy")}var v=typeof Symbol=="function"&&Symbol.iterator;function D(h){return h===null||typeof h!="object"?null:(h=v&&h[v]||h["@@iterator"],typeof h=="function"?h:null)}function g(h){for(var w="https://reactjs.org/docs/error-decoder.html?invariant="+h,U=1;U<arguments.length;U++)w+="&args[]="+encodeURIComponent(arguments[U]);return"Minified React error #"+h+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function A(h,w,U){this.props=h,this.context=w,this.refs=B,this.updater=U||M}A.prototype.isReactComponent={},A.prototype.setState=function(h,w){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error(g(85));this.updater.enqueueSetState(this,h,w,"setState")},A.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function f(){}f.prototype=A.prototype;function u(h,w,U){this.props=h,this.context=w,this.refs=B,this.updater=U||M}var d=u.prototype=new f;d.constructor=u,j(d,A.prototype),d.isPureReactComponent=!0;var m={current:null},y=Object.prototype.hasOwnProperty,H={key:!0,ref:!0,__self:!0,__source:!0};function k(h,w,U){var b,T={},P=null,G=null;if(w!=null)for(b in w.ref!==void 0&&(G=w.ref),w.key!==void 0&&(P=""+w.key),w)y.call(w,b)&&!H.hasOwnProperty(b)&&(T[b]=w[b]);var O=arguments.length-2;if(O===1)T.children=U;else if(1<O){for(var W=Array(O),ee=0;ee<O;ee++)W[ee]=arguments[ee+2];T.children=W}if(h&&h.defaultProps)for(b in O=h.defaultProps,O)T[b]===void 0&&(T[b]=O[b]);return{$$typeof:n,type:h,key:P,ref:G,props:T,_owner:m.current}}function I(h,w){return{$$typeof:n,type:h.type,key:w,ref:h.ref,props:h.props,_owner:h._owner}}function F(h){return typeof h=="object"&&h!==null&&h.$$typeof===n}function N(h){var w={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(U){return w[U]})}var Z=/\/+/g;function Te(h,w){return typeof h=="object"&&h!==null&&h.key!=null?N(""+h.key):w.toString(36)}function Yt(h,w,U,b,T){var P=typeof h;(P==="undefined"||P==="boolean")&&(h=null);var G=!1;if(h===null)G=!0;else switch(P){case"string":case"number":G=!0;break;case"object":switch(h.$$typeof){case n:case r:G=!0}}if(G)return G=h,T=T(G),h=b===""?"."+Te(G,0):b,Array.isArray(T)?(U="",h!=null&&(U=h.replace(Z,"$&/")+"/"),Yt(T,w,U,"",function(ee){return ee})):T!=null&&(F(T)&&(T=I(T,U+(!T.key||G&&G.key===T.key?"":(""+T.key).replace(Z,"$&/")+"/")+h)),w.push(T)),1;if(G=0,b=b===""?".":b+":",Array.isArray(h))for(var O=0;O<h.length;O++){P=h[O];var W=b+Te(P,O);G+=Yt(P,w,U,W,T)}else if(W=D(h),typeof W=="function")for(h=W.call(h),O=0;!(P=h.next()).done;)P=P.value,W=b+Te(P,O++),G+=Yt(P,w,U,W,T);else if(P==="object")throw w=""+h,Error(g(31,w==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":w));return G}function ie(h,w,U){if(h==null)return h;var b=[],T=0;return Yt(h,b,"","",function(P){return w.call(U,P,T++)}),b}function oe(h){if(h._status===-1){var w=h._result;w=w(),h._status=0,h._result=w,w.then(function(U){h._status===0&&(U=U.default,h._status=1,h._result=U)},function(U){h._status===0&&(h._status=2,h._result=U)})}if(h._status===1)return h._result;throw h._result}var kt={current:null};function le(){var h=kt.current;if(h===null)throw Error(g(321));return h}var Mt={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:m,IsSomeRendererActing:{current:!1},assign:j};t.Children={map:ie,forEach:function(h,w,U){ie(h,function(){w.apply(this,arguments)},U)},count:function(h){var w=0;return ie(h,function(){w++}),w},toArray:function(h){return ie(h,function(w){return w})||[]},only:function(h){if(!F(h))throw Error(g(143));return h}},t.Component=A,t.PureComponent=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mt,t.cloneElement=function(h,w,U){if(h==null)throw Error(g(267,h));var b=j({},h.props),T=h.key,P=h.ref,G=h._owner;if(w!=null){if(w.ref!==void 0&&(P=w.ref,G=m.current),w.key!==void 0&&(T=""+w.key),h.type&&h.type.defaultProps)var O=h.type.defaultProps;for(W in w)y.call(w,W)&&!H.hasOwnProperty(W)&&(b[W]=w[W]===void 0&&O!==void 0?O[W]:w[W])}var W=arguments.length-2;if(W===1)b.children=U;else if(1<W){O=Array(W);for(var ee=0;ee<W;ee++)O[ee]=arguments[ee+2];b.children=O}return{$$typeof:n,type:h.type,key:T,ref:P,props:b,_owner:G}},t.createContext=function(h,w){return w===void 0&&(w=null),h={$$typeof:a,_calculateChangedBits:w,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider={$$typeof:o,_context:h},h.Consumer=h},t.createElement=k,t.createFactory=function(h){var w=k.bind(null,h);return w.type=h,w},t.createRef=function(){return{current:null}},t.forwardRef=function(h){return{$$typeof:i,render:h}},t.isValidElement=F,t.lazy=function(h){return{$$typeof:s,_payload:{_status:-1,_result:h},_init:oe}},t.memo=function(h,w){return{$$typeof:l,type:h,compare:w===void 0?null:w}},t.useCallback=function(h,w){return le().useCallback(h,w)},t.useContext=function(h,w){return le().useContext(h,w)},t.useDebugValue=function(){},t.useEffect=function(h,w){return le().useEffect(h,w)},t.useImperativeHandle=function(h,w,U){return le().useImperativeHandle(h,w,U)},t.useLayoutEffect=function(h,w){return le().useLayoutEffect(h,w)},t.useMemo=function(h,w){return le().useMemo(h,w)},t.useReducer=function(h,w,U){return le().useReducer(h,w,U)},t.useRef=function(h){return le().useRef(h)},t.useState=function(h){return le().useState(h)},t.version="17.0.2"}),V=et(function(e){e.exports=td});var Wp=V.Children,El=V.Component,zt=V.Fragment,Up=V.Profiler,Vp=V.PureComponent,_p=V.StrictMode,jp=V.Suspense,Yp=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bp=V.cloneElement,zp=V.createContext,C=V.createElement,Qp=V.createFactory,Jp=V.createRef,Kp=V.forwardRef,Zp=V.isValidElement,Xp=V.lazy,qp=V.memo,$p=V.useCallback,em=V.useContext,tm=V.useDebugValue,Qt=V.useEffect,nm=V.useImperativeHandle,rm=V.useLayoutEffect,om=V.useMemo,am=V.useReducer,Gn=V.useRef,Pe=V.useState,im=V.version;var nd=et(function(e,t){var n,r,o,a;if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var c=null,v=null,D=function(){if(c!==null)try{var T=t.unstable_now();c(!0,T),c=null}catch(P){throw setTimeout(D,0),P}};n=function(T){c!==null?setTimeout(n,0,T):(c=T,setTimeout(D,0))},r=function(T,P){v=setTimeout(T,P)},o=function(){clearTimeout(v)},t.unstable_shouldYield=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var g=window.setTimeout,M=window.clearTimeout;if(typeof console!="undefined"){var B=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof B!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,f=null,u=-1,d=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},a=function(){},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):d=0<T?Math.floor(1e3/T):5};var y=new MessageChannel,H=y.port2;y.port1.onmessage=function(){if(f!==null){var T=t.unstable_now();m=T+d;try{f(!0,T)?H.postMessage(null):(A=!1,f=null)}catch(P){throw H.postMessage(null),P}}else A=!1},n=function(T){f=T,A||(A=!0,H.postMessage(null))},r=function(T,P){u=g(function(){T(t.unstable_now())},P)},o=function(){M(u),u=-1}}function k(T,P){var G=T.length;T.push(P);e:for(;;){var O=G-1>>>1,W=T[O];if(W!==void 0&&0<N(W,P))T[O]=P,T[G]=W,G=O;else break e}}function I(T){return T=T[0],T===void 0?null:T}function F(T){var P=T[0];if(P!==void 0){var G=T.pop();if(G!==P){T[0]=G;e:for(var O=0,W=T.length;O<W;){var ee=2*(O+1)-1,Pt=T[ee],In=ee+1,bt=T[In];if(Pt!==void 0&&0>N(Pt,G))bt!==void 0&&0>N(bt,Pt)?(T[O]=bt,T[In]=G,O=In):(T[O]=Pt,T[ee]=G,O=ee);else if(bt!==void 0&&0>N(bt,G))T[O]=bt,T[In]=G,O=In;else break e}}return P}return null}function N(T,P){var G=T.sortIndex-P.sortIndex;return G!==0?G:T.id-P.id}var Z=[],Te=[],Yt=1,ie=null,oe=3,kt=!1,le=!1,Mt=!1;function h(T){for(var P=I(Te);P!==null;){if(P.callback===null)F(Te);else if(P.startTime<=T)F(Te),P.sortIndex=P.expirationTime,k(Z,P);else break;P=I(Te)}}function w(T){if(Mt=!1,h(T),!le)if(I(Z)!==null)le=!0,n(U);else{var P=I(Te);P!==null&&r(w,P.startTime-T)}}function U(T,P){le=!1,Mt&&(Mt=!1,o()),kt=!0;var G=oe;try{for(h(P),ie=I(Z);ie!==null&&(!(ie.expirationTime>P)||T&&!t.unstable_shouldYield());){var O=ie.callback;if(typeof O=="function"){ie.callback=null,oe=ie.priorityLevel;var W=O(ie.expirationTime<=P);P=t.unstable_now(),typeof W=="function"?ie.callback=W:ie===I(Z)&&F(Z),h(P)}else F(Z);ie=I(Z)}if(ie!==null)var ee=!0;else{var Pt=I(Te);Pt!==null&&r(w,Pt.startTime-P),ee=!1}return ee}finally{ie=null,oe=G,kt=!1}}var b=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){le||kt||(le=!0,n(U))},t.unstable_getCurrentPriorityLevel=function(){return oe},t.unstable_getFirstCallbackNode=function(){return I(Z)},t.unstable_next=function(T){switch(oe){case 1:case 2:case 3:var P=3;break;default:P=oe}var G=oe;oe=P;try{return T()}finally{oe=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=b,t.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var G=oe;oe=T;try{return P()}finally{oe=G}},t.unstable_scheduleCallback=function(T,P,G){var O=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?O+G:O):G=O,T){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=G+W,T={id:Yt++,callback:P,priorityLevel:T,startTime:G,expirationTime:W,sortIndex:-1},G>O?(T.sortIndex=G,k(Te,T),I(Z)===null&&T===I(Te)&&(Mt?o():Mt=!0,r(w,G-O))):(T.sortIndex=W,k(Z,T),le||kt||(le=!0,n(U))),T},t.unstable_wrapCallback=function(T){var P=oe;return function(){var G=oe;oe=P;try{return T.apply(this,arguments)}finally{oe=G}}}}),te=et(function(e){e.exports=nd});function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!V)throw Error(E(227));var Cl=new Set,Bn={};function Rt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Cl.add(t[e])}var be=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),rd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wl=Object.prototype.hasOwnProperty,Dl={},kl={};function od(e){return wl.call(kl,e)?!0:wl.call(Dl,e)?!1:rd.test(e)?kl[e]=!0:(Dl[e]=!0,!1)}function ad(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function id(e,t,n,r){if(t===null||typeof t=="undefined"||ad(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ko=/[\-:]([a-z])/g;function Zo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ko,Zo);se[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ko,Zo);se[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ko,Zo);se[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xo(e,t,n,r){var o=se.hasOwnProperty(t)?se[t]:null,a=o!==null?o.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");a||(id(t,n,o,r)&&(n=null),r||o===null?od(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hn=60103,It=60106,tt=60107,qo=60108,Nn=60114,$o=60109,ea=60110,Br=60112,Fn=60113,Hr=60120,Nr=60115,ta=60116,na=60121,ra=60128,Ml=60129,oa=60130,aa=60131;typeof Symbol=="function"&&Symbol.for&&(ne=Symbol.for,Hn=ne("react.element"),It=ne("react.portal"),tt=ne("react.fragment"),qo=ne("react.strict_mode"),Nn=ne("react.profiler"),$o=ne("react.provider"),ea=ne("react.context"),Br=ne("react.forward_ref"),Fn=ne("react.suspense"),Hr=ne("react.suspense_list"),Nr=ne("react.memo"),ta=ne("react.lazy"),na=ne("react.block"),ne("react.scope"),ra=ne("react.opaque.id"),Ml=ne("react.debug_trace_mode"),oa=ne("react.offscreen"),aa=ne("react.legacy_hidden"));var ne,Pl=typeof Symbol=="function"&&Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=Pl&&e[Pl]||e["@@iterator"],typeof e=="function"?e:null)}var ia;function Ln(e){if(ia===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ia=t&&t[1]||""}return`
`+ia+e}var la=!1;function Fr(e,t){if(!e||la)return"";la=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l])return`
`+o[i].replace(" at new "," at ");while(1<=i&&0<=l);break}}}finally{la=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ln(e):""}function ld(e){switch(e.tag){case 5:return Ln(e.type);case 16:return Ln("Lazy");case 13:return Ln("Suspense");case 19:return Ln("SuspenseList");case 0:case 2:case 15:return e=Fr(e.type,!1),e;case 11:return e=Fr(e.type.render,!1),e;case 22:return e=Fr(e.type._render,!1),e;case 1:return e=Fr(e.type,!0),e;default:return""}}function Kt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tt:return"Fragment";case It:return"Portal";case Nn:return"Profiler";case qo:return"StrictMode";case Fn:return"Suspense";case Hr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ea:return(e.displayName||"Context")+".Consumer";case $o:return(e._context.displayName||"Context")+".Provider";case Br:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Nr:return Kt(e.type);case na:return Kt(e._render);case ta:t=e._payload,e=e._init;try{return Kt(e(t))}catch(n){}}return null}function nt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Rl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sd(e){var t=Rl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=sd(e))}function Al(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}function sa(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Il(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gl(e,t){t=t.checked,t!=null&&Xo(e,"checked",t,!1)}function ca(e,t){Gl(e,t);var n=nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ua(e,t.type,n):t.hasOwnProperty("defaultValue")&&ua(e,t.type,nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ua(e,t,n){(t!=="number"||Lr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function ud(e){var t="";return V.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function da(e,t){return e=j({children:void 0},t),(t=ud(t.children))&&(e.children=t),e}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function fa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nt(n)}}function Nl(e,t){var n=nt(t.value),r=nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var ha={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function xl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Or,Ll=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!==ha.svg||"innerHTML"in e)e.innerHTML=t;else{for(Or=Or||document.createElement("div"),Or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cd=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){cd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function Ol(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function Wl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ol(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var dd=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ma(e,t){if(t){if(dd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,Xt=null,qt=null;function Ul(e){if(e=Un(e)){if(typeof va!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Wr(t),va(e.stateNode,e.type,t))}}function Vl(e){Xt?qt?qt.push(e):qt=[e]:Xt=e}function _l(){if(Xt){var e=Xt,t=qt;if(qt=Xt=null,Ul(e),t)for(e=0;e<t.length;e++)Ul(t[e])}}function Ta(e,t){return e(t)}function jl(e,t,n,r,o){return e(t,n,r,o)}function Sa(){}var Yl=Ta,Gt=!1,Ea=!1;function Ca(){(Xt!==null||qt!==null)&&(Sa(),_l())}function fd(e,t,n){if(Ea)return e(t,n);Ea=!0;try{return Yl(e,t,n)}finally{Ea=!1,Ca()}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=Wr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var wa=!1;if(be)try{$t={},Object.defineProperty($t,"passive",{get:function(){wa=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch(e){wa=!1}var $t;function hd(e,t,n,r,o,a,i,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(v){this.onError(v)}}var _n=!1,Ur=null,Vr=!1,Da=null,pd={onError:function(e){_n=!0,Ur=e}};function md(e,t,n,r,o,a,i,l,s){_n=!1,Ur=null,hd.apply(pd,arguments)}function gd(e,t,n,r,o,a,i,l,s){if(md.apply(this,arguments),_n){if(_n){var c=Ur;_n=!1,Ur=null}else throw Error(E(198));Vr||(Vr=!0,Da=c)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!=0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zl(e){if(Bt(e)!==e)throw Error(E(188))}function yd(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return zl(o),e;if(a===r)return zl(o),t;a=a.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Ql(e){if(e=yd(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Jl(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Kl,ka,Zl,Xl,Ma=!1,xe=[],rt=null,ot=null,at=null,jn=new Map,Yn=new Map,bn=[],ql="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pa(e,t,n,r,o){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:o,targetContainers:[r]}}function $l(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function zn(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e=Pa(t,n,r,o,a),t!==null&&(t=Un(t),t!==null&&ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vd(e,t,n,r,o){switch(t){case"focusin":return rt=zn(rt,e,t,n,r,o),!0;case"dragenter":return ot=zn(ot,e,t,n,r,o),!0;case"mouseover":return at=zn(at,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return jn.set(a,zn(jn.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Yn.set(a,zn(Yn.get(a)||null,e,t,n,r,o)),!0}return!1}function Td(e){var t=Ht(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=bl(n),t!==null){e.blockedOn=t,Xl(e.lanePriority,function(){te.unstable_runWithPriority(e.priority,function(){Zl(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Un(n),t!==null&&ka(t),e.blockedOn=n,!1;t.shift()}return!0}function es(e,t,n){_r(e)&&n.delete(t)}function Sd(){for(Ma=!1;0<xe.length;){var e=xe[0];if(e.blockedOn!==null){e=Un(e.blockedOn),e!==null&&Kl(e);break}for(var t=e.targetContainers;0<t.length;){var n=Ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&xe.shift()}rt!==null&&_r(rt)&&(rt=null),ot!==null&&_r(ot)&&(ot=null),at!==null&&_r(at)&&(at=null),jn.forEach(es),Yn.forEach(es)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ma||(Ma=!0,te.unstable_scheduleCallback(te.unstable_NormalPriority,Sd)))}function ts(e){function t(o){return Qn(o,e)}if(0<xe.length){Qn(xe[0],e);for(var n=1;n<xe.length;n++){var r=xe[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&Qn(rt,e),ot!==null&&Qn(ot,e),at!==null&&Qn(at,e),jn.forEach(t),Yn.forEach(t),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)Td(n),n.blockedOn===null&&bn.shift()}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Aa={},ns={};be&&(ns=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function Yr(e){if(Aa[e])return Aa[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ns)return Aa[e]=t[n];return e}var rs=Yr("animationend"),os=Yr("animationiteration"),as=Yr("animationstart"),is=Yr("transitionend"),ls=new Map,Ia=new Map,Ed=["abort","abort",rs,"animationEnd",os,"animationIteration",as,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",is,"transitionEnd","waiting","waiting"];function Ga(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];o="on"+(o[0].toUpperCase()+o.slice(1)),Ia.set(r,t),ls.set(r,o),Rt(o,[r])}}var Cd=te.unstable_now;Cd();var z=8;function tn(e){if((1&e)!=0)return z=15,1;if((2&e)!=0)return z=14,2;if((4&e)!=0)return z=13,4;var t=24&e;return t!==0?(z=12,t):(e&32)!=0?(z=11,32):(t=192&e,t!==0?(z=10,t):(e&256)!=0?(z=9,256):(t=3584&e,t!==0?(z=8,t):(e&4096)!=0?(z=7,4096):(t=4186112&e,t!==0?(z=6,t):(t=62914560&e,t!==0?(z=5,t):e&67108864?(z=4,67108864):(e&134217728)!=0?(z=3,134217728):(t=805306368&e,t!==0?(z=2,t):(1073741824&e)!=0?(z=1,1073741824):(z=8,e))))))}function wd(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Dd(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(E(358,e))}}function Jn(e,t){var n=e.pendingLanes;if(n===0)return z=0;var r=0,o=0,a=e.expiredLanes,i=e.suspendedLanes,l=e.pingedLanes;if(a!==0)r=a,o=z=15;else if(a=n&134217727,a!==0){var s=a&~i;s!==0?(r=tn(s),o=z):(l&=a,l!==0&&(r=tn(l),o=z))}else a=n&~i,a!==0?(r=tn(a),o=z):l!==0&&(r=tn(l),o=z);if(r===0)return 0;if(r=31-it(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&i)==0){if(tn(t),o<=z)return t;z=o}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),o=1<<n,r|=e[n],t&=~o;return r}function ss(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function br(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=nn(24&~t),e===0?br(10,t):e;case 10:return e=nn(192&~t),e===0?br(8,t):e;case 8:return e=nn(3584&~t),e===0&&(e=nn(4186112&~t),e===0&&(e=512)),e;case 2:return t=nn(805306368&~t),t===0&&(t=268435456),t}throw Error(E(358,e))}function nn(e){return e&-e}function Ba(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zr(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-it(t),e[t]=n}var it=Math.clz32?Math.clz32:kd,Md=Math.log,Pd=Math.LN2;function kd(e){return e===0?32:31-(Md(e)/Pd|0)|0}var Rd=te.unstable_UserBlockingPriority,Ad=te.unstable_runWithPriority,Qr=!0;function Id(e,t,n,r){Gt||Sa();var o=Ha,a=Gt;Gt=!0;try{jl(o,e,t,n,r)}finally{(Gt=a)||Ca()}}function Gd(e,t,n,r){Ad(Rd,Ha.bind(null,e,t,n,r))}function Ha(e,t,n,r){if(Qr){var o;if((o=(t&4)==0)&&0<xe.length&&-1<ql.indexOf(e))e=Pa(null,e,t,n,r),xe.push(e);else{var a=Ra(e,t,n,r);if(a===null)o&&$l(e,r);else{if(o){if(-1<ql.indexOf(e)){e=Pa(a,e,t,n,r),xe.push(e);return}if(vd(a,e,t,n,r))return;$l(e,r)}us(e,t,r,null,n)}}}}function Ra(e,t,n,r){var o=ya(r);if(o=Ht(o),o!==null){var a=Bt(o);if(a===null)o=null;else{var i=a.tag;if(i===13){if(o=bl(a),o!==null)return o;o=null}else if(i===3){if(a.stateNode.hydrate)return a.tag===3?a.stateNode.containerInfo:null;o=null}else a!==o&&(o=null)}}return us(e,t,r,o,n),null}var lt=null,Na=null,Jr=null;function cs(){if(Jr)return Jr;var e,t=Na,n=t.length,r,o="value"in lt?lt.value:lt.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return Jr=o.slice(e,1<r?1-r:void 0)}function Kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function ds(){return!1}function De(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zr:ds,this.isPropagationStopped=ds,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=De(rn),Kn=j({},rn,{view:0,detail:0}),Bd=De(Kn),xa,La,Zn,Xr=j({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(xa=e.screenX-Zn.screenX,La=e.screenY-Zn.screenY):La=xa=0,Zn=e),xa)},movementY:function(e){return"movementY"in e?e.movementY:La}}),fs=De(Xr),Hd=j({},Xr,{dataTransfer:0}),Nd=De(Hd),Fd=j({},Kn,{relatedTarget:0}),Wa=De(Fd),xd=j({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ld=De(xd),Od=j({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wd=De(Od),Ud=j({},rn,{data:0}),hs=De(Ud),Vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_d={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jd[e])?!!t[e]:!1}function Oa(){return Yd}var bd=j({},Kn,{key:function(e){if(e.key){var t=Vd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_d[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oa,charCode:function(e){return e.type==="keypress"?Kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zd=De(bd),Qd=j({},Xr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ps=De(Qd),Jd=j({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oa}),Kd=De(Jd),Zd=j({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=De(Zd),qd=j({},Xr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$d=De(qd),ef=[9,13,27,32],Ua=be&&"CompositionEvent"in window,Xn=null;be&&"documentMode"in document&&(Xn=document.documentMode);var tf=be&&"TextEvent"in window&&!Xn,ms=be&&(!Ua||Xn&&8<Xn&&11>=Xn),gs=String.fromCharCode(32),ys=!1;function vs(e,t){switch(e){case"keyup":return ef.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ts(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var on=!1;function nf(e,t){switch(e){case"compositionend":return Ts(t);case"keypress":return t.which!==32?null:(ys=!0,gs);case"textInput":return e=t.data,e===gs&&ys?null:e;default:return null}}function rf(e,t){if(on)return e==="compositionend"||!Ua&&vs(e,t)?(e=cs(),Jr=Na=lt=null,on=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ms&&t.locale!=="ko"?null:t.data;default:return null}}var of={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!of[e.type]:t==="textarea"}function Es(e,t,n,r){Vl(r),t=qr(t,"onChange"),0<t.length&&(n=new Fa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,$n=null;function af(e){Cs(e,0)}function $r(e){var t=an(e);if(Al(t))return e}function lf(e,t){if(e==="change")return t}var ws=!1;be&&(be?(to="oninput"in document,to||(Va=document.createElement("div"),Va.setAttribute("oninput","return;"),to=typeof Va.oninput=="function"),eo=to):eo=!1,ws=eo&&(!document.documentMode||9<document.documentMode));var eo,to,Va;function ks(){qn&&(qn.detachEvent("onpropertychange",Ds),$n=qn=null)}function Ds(e){if(e.propertyName==="value"&&$r($n)){var t=[];if(Es(t,$n,e,ya(e)),e=af,Gt)e(t);else{Gt=!0;try{Ta(e,t)}finally{Gt=!1,Ca()}}}}function sf(e,t,n){e==="focusin"?(ks(),qn=t,$n=n,qn.attachEvent("onpropertychange",Ds)):e==="focusout"&&ks()}function uf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $r($n)}function cf(e,t){if(e==="click")return $r(t)}function df(e,t){if(e==="input"||e==="change")return $r(t)}function ff(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:ff,hf=Object.prototype.hasOwnProperty;function er(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!hf.call(t,n[r])||!Re(e[n[r]],t[n[r]]))return!1;return!0}function Ms(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ps(e,t){var n=Ms(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ms(n)}}function Rs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function As(){for(var e=window,t=Lr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch(r){n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var pf=be&&"documentMode"in document&&11>=document.documentMode,ln=null,ja=null,tr=null,Ya=!1;function Is(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ya||ln==null||ln!==Lr(r)||(r=ln,"selectionStart"in r&&_a(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tr&&er(tr,r)||(tr=r,r=qr(ja,"onSelect"),0<r.length&&(t=new Fa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ln)))}Ga("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Ga("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Ga(Ed,2);for(var Gs="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),ba=0;ba<Gs.length;ba++)Ia.set(Gs[ba],0);Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bs=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function Hs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gd(r,t,void 0,e),e.currentTarget=null}function Cs(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Hs(o,l,c),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,c=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Hs(o,l,c),a=s}}}if(Vr)throw e=Da,Vr=!1,Da=null,e}function Q(e,t){var n=Fs(t),r=e+"__bubble";n.has(r)||(Ns(t,e,2,!1),n.add(r))}var xs="_reactListening"+Math.random().toString(36).slice(2);function Os(e){e[xs]||(e[xs]=!0,Cl.forEach(function(t){Bs.has(t)||Ls(t,!1,e,null),Ls(t,!0,e,null)}))}function Ls(e,t,n,r){var o=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,a=n;if(e==="selectionchange"&&n.nodeType!==9&&(a=n.ownerDocument),r!==null&&!t&&Bs.has(e)){if(e!=="scroll")return;o|=2,a=r}var i=Fs(a),l=e+"__"+(t?"capture":"bubble");i.has(l)||(t&&(o|=4),Ns(a,e,o,t),i.add(l))}function Ns(e,t,n,r){var o=Ia.get(t);switch(o===void 0?2:o){case 0:o=Id;break;case 1:o=Gd;break;default:o=Ha}n=o.bind(null,t,n,e),o=void 0,!wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function us(e,t,n,r,o){var a=r;if((t&1)==0&&(t&2)==0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=Ht(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}fd(function(){var c=a,v=ya(n),D=[];e:{var g=ls.get(e);if(g!==void 0){var M=Fa,B=e;switch(e){case"keypress":if(Kr(n)===0)break e;case"keydown":case"keyup":M=zd;break;case"focusin":B="focus",M=Wa;break;case"focusout":B="blur",M=Wa;break;case"beforeblur":case"afterblur":M=Wa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Nd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Kd;break;case rs:case os:case as:M=Ld;break;case is:M=Xd;break;case"scroll":M=Bd;break;case"wheel":M=$d;break;case"copy":case"cut":case"paste":M=Wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=ps}var A=(t&4)!=0,f=!A&&e==="scroll",u=A?g!==null?g+"Capture":null:g;A=[];for(var d=c,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,u!==null&&(y=Vn(d,u),y!=null&&A.push(rr(d,y,m)))),f)break;d=d.return}0<A.length&&(g=new M(g,B,null,n,v),D.push({event:g,listeners:A}))}}if((t&7)==0){e:{if(g=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",g&&(t&16)==0&&(B=n.relatedTarget||n.fromElement)&&(Ht(B)||B[un]))break e;if((M||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,M?(B=n.relatedTarget||n.toElement,M=c,B=B?Ht(B):null,B!==null&&(f=Bt(B),B!==f||B.tag!==5&&B.tag!==6)&&(B=null)):(M=null,B=c),M!==B)){if(A=fs,y="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(A=ps,y="onPointerLeave",u="onPointerEnter",d="pointer"),f=M==null?g:an(M),m=B==null?g:an(B),g=new A(y,d+"leave",M,n,v),g.target=f,g.relatedTarget=m,y=null,Ht(v)===c&&(A=new A(u,d+"enter",B,n,v),A.target=m,A.relatedTarget=f,y=A),f=y,M&&B)t:{for(A=M,u=B,d=0,m=A;m;m=sn(m))d++;for(m=0,y=u;y;y=sn(y))m++;for(;0<d-m;)A=sn(A),d--;for(;0<m-d;)u=sn(u),m--;for(;d--;){if(A===u||u!==null&&A===u.alternate)break t;A=sn(A),u=sn(u)}A=null}else A=null;M!==null&&Ws(D,g,M,A,!1),B!==null&&f!==null&&Ws(D,f,B,A,!0)}}e:{if(g=c?an(c):window,M=g.nodeName&&g.nodeName.toLowerCase(),M==="select"||M==="input"&&g.type==="file")var H=lf;else if(Ss(g))if(ws)H=df;else{H=uf;var k=sf}else(M=g.nodeName)&&M.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(H=cf);if(H&&(H=H(e,c))){Es(D,H,n,v);break e}k&&k(e,g,c),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&ua(g,"number",g.value)}switch(k=c?an(c):window,e){case"focusin":(Ss(k)||k.contentEditable==="true")&&(ln=k,ja=c,tr=null);break;case"focusout":tr=ja=ln=null;break;case"mousedown":Ya=!0;break;case"contextmenu":case"mouseup":case"dragend":Ya=!1,Is(D,n,v);break;case"selectionchange":if(pf)break;case"keydown":case"keyup":Is(D,n,v)}var I;if(Ua)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else on?vs(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(ms&&n.locale!=="ko"&&(on||F!=="onCompositionStart"?F==="onCompositionEnd"&&on&&(I=cs()):(lt=v,Na="value"in lt?lt.value:lt.textContent,on=!0)),k=qr(c,F),0<k.length&&(F=new hs(F,e,null,n,v),D.push({event:F,listeners:k}),I?F.data=I:(I=Ts(n),I!==null&&(F.data=I)))),(I=tf?nf(e,n):rf(e,n))&&(c=qr(c,"onBeforeInput"),0<c.length&&(v=new hs("onBeforeInput","beforeinput",null,n,v),D.push({event:v,listeners:c}),v.data=I))}Cs(D,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Vn(e,n),a!=null&&r.unshift(rr(e,a,o)),a=Vn(e,t),a!=null&&r.push(rr(e,a,o))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ws(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=Vn(n,a),s!=null&&i.unshift(rr(n,s,l))):o||(s=Vn(n,a),s!=null&&i.push(rr(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}function no(){}var za=null,Qa=null;function Us(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Ja(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vs=typeof setTimeout=="function"?setTimeout:void 0,mf=typeof clearTimeout=="function"?clearTimeout:void 0;function Ka(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function _s(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Za=0;function gf(e){return{$$typeof:ra,toString:e,valueOf:e}}var ro=Math.random().toString(36).slice(2),st="__reactFiber$"+ro,oo="__reactProps$"+ro,un="__reactContainer$"+ro,js="__reactEvents$"+ro;function Ht(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[un]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_s(e);e!==null;){if(n=e[st])return n;e=_s(e)}return t}e=n,n=e.parentNode}return null}function Un(e){return e=e[st]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function an(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Wr(e){return e[oo]||null}function Fs(e){var t=e[js];return t===void 0&&(t=e[js]=new Set),t}var Xa=[],dn=-1;function ut(e){return{current:e}}function J(e){0>dn||(e.current=Xa[dn],Xa[dn]=null,dn--)}function X(e,t){dn++,Xa[dn]=e.current,e.current=t}var ct={},de=ut(ct),Se=ut(!1),Nt=ct;function fn(e,t){var n=e.type.contextTypes;if(!n)return ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function ao(){J(Se),J(de)}function Ys(e,t,n){if(de.current!==ct)throw Error(E(168));X(de,t),X(Se,n)}function bs(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(E(108,Kt(t)||"Unknown",o));return j({},n,r)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ct,Nt=de.current,X(de,e),X(Se,Se.current),!0}function zs(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=bs(e,t,Nt),r.__reactInternalMemoizedMergedChildContext=e,J(Se),J(de),X(de,e)):J(Se),X(Se,n)}var qa=null,Ft=null,yf=te.unstable_runWithPriority,$a=te.unstable_scheduleCallback,ei=te.unstable_cancelCallback,vf=te.unstable_shouldYield,Qs=te.unstable_requestPaint,ti=te.unstable_now,Tf=te.unstable_getCurrentPriorityLevel,lo=te.unstable_ImmediatePriority,Js=te.unstable_UserBlockingPriority,Ks=te.unstable_NormalPriority,Zs=te.unstable_LowPriority,Xs=te.unstable_IdlePriority,ni={},Sf=Qs!==void 0?Qs:function(){},ze=null,so=null,ri=!1,qs=ti(),fe=1e4>qs?ti:function(){return ti()-qs};function hn(){switch(Tf()){case lo:return 99;case Js:return 98;case Ks:return 97;case Zs:return 96;case Xs:return 95;default:throw Error(E(332))}}function $s(e){switch(e){case 99:return lo;case 98:return Js;case 97:return Ks;case 96:return Zs;case 95:return Xs;default:throw Error(E(332))}}function xt(e,t){return e=$s(e),yf(e,t)}function or(e,t,n){return e=$s(e),$a(e,t,n)}function Le(){if(so!==null){var e=so;so=null,ei(e)}eu()}function eu(){if(!ri&&ze!==null){ri=!0;var e=0;try{var t=ze;xt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),ze=null}catch(n){throw ze!==null&&(ze=ze.slice(e+1)),$a(lo,Le),n}finally{ri=!1}}}var Ef=At.ReactCurrentBatchConfig;function He(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var uo=ut(null),co=null,pn=null,fo=null;function oi(){fo=pn=co=null}function ai(e){var t=uo.current;J(uo),e.type._context._currentValue=t}function tu(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function mn(e,t){co=e,fo=pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!=0&&(Ne=!0),e.firstContext=null)}function Ae(e,t){if(fo!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(fo=e,t=1073741823),t={context:e,observedBits:t,next:null},pn===null){if(co===null)throw Error(E(308));pn=t,co.dependencies={lanes:0,firstContext:t,responders:null}}else pn=pn.next=t;return e._currentValue}var dt=!1;function ii(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function nu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ir(e,t,n,r){var o=e.updateQueue;dt=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,i===null?a=c:i.next=c,i=s;var v=e.alternate;if(v!==null){v=v.updateQueue;var D=v.lastBaseUpdate;D!==i&&(D===null?v.firstBaseUpdate=c:D.next=c,v.lastBaseUpdate=s)}}if(a!==null){D=o.baseState,i=0,v=c=s=null;do{l=a.lane;var g=a.eventTime;if((r&l)===l){v!==null&&(v=v.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var M=e,B=a;switch(l=t,g=n,B.tag){case 1:if(M=B.payload,typeof M=="function"){D=M.call(g,D,l);break e}D=M;break e;case 3:M.flags=M.flags&-4097|64;case 0:if(M=B.payload,l=typeof M=="function"?M.call(g,D,l):M,l==null)break e;D=j({},D,l);break e;case 2:dt=!0}}a.callback!==null&&(e.flags|=32,l=o.effects,l===null?o.effects=[a]:l.push(a))}else g={eventTime:g,lane:l,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(c=v=g,s=D):v=v.next=g,i|=l;if(a=a.next,a===null){if(l=o.shared.pending,l===null)break;a=l.next,l.next=null,o.lastBaseUpdate=l,o.shared.pending=null}}while(1);v===null&&(s=D),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=v,ar|=i,e.lanes=i,e.memoizedState=D}}function ou(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var au=new V.Component().refs;function ho(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var po={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=pt(e),a=ft(r,o);a.payload=t,n!=null&&(a.callback=n),ht(e,a),mt(e,o,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=pt(e),a=ft(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),ht(e,a),mt(e,o,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=pt(e),o=ft(n,r);o.tag=2,t!=null&&(o.callback=t),ht(e,o),mt(e,r,n)}};function iu(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(o,a):!0}function lu(e,t,n){var r=!1,o=ct,a=t.contextType;return typeof a=="object"&&a!==null?a=Ae(a):(o=Ee(t)?Nt:de.current,r=t.contextTypes,a=(r=r!=null)?fn(e,o):ct),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function su(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&po.enqueueReplaceState(t,t.state,null)}function li(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=au,ii(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Ae(a):(a=Ee(t)?Nt:de.current,o.context=fn(e,a)),ir(e,n,o,r),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ho(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&po.enqueueReplaceState(o,o.state,null),ir(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4)}var mo=Array.isArray;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var i=r.refs;i===au&&(i=r.refs={}),a===null?delete i[o]:i[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function go(e,t){if(e.type!=="textarea")throw Error(E(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function uu(e){function t(f,u){if(e){var d=f.lastEffect;d!==null?(d.nextEffect=u,f.lastEffect=u):f.firstEffect=f.lastEffect=u,u.nextEffect=null,u.flags=8}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=gt(f,u),f.index=0,f.sibling=null,f}function a(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags=2,u):d):(f.flags=2,u)):u}function i(f){return e&&f.alternate===null&&(f.flags=2),f}function l(f,u,d,m){return u===null||u.tag!==6?(u=si(d,f.mode,m),u.return=f,u):(u=o(u,d),u.return=f,u)}function s(f,u,d,m){return u!==null&&u.elementType===d.type?(m=o(u,d.props),m.ref=lr(f,u,d),m.return=f,m):(m=yo(d.type,d.key,d.props,null,f.mode,m),m.ref=lr(f,u,d),m.return=f,m)}function c(f,u,d,m){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=ui(d,f.mode,m),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function v(f,u,d,m,y){return u===null||u.tag!==7?(u=gn(d,f.mode,m,y),u.return=f,u):(u=o(u,d),u.return=f,u)}function D(f,u,d){if(typeof u=="string"||typeof u=="number")return u=si(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Hn:return d=yo(u.type,u.key,u.props,null,f.mode,d),d.ref=lr(f,null,u),d.return=f,d;case It:return u=ui(u,f.mode,d),u.return=f,u}if(mo(u)||xn(u))return u=gn(u,f.mode,d,null),u.return=f,u;go(f,u)}return null}function g(f,u,d,m){var y=u!==null?u.key:null;if(typeof d=="string"||typeof d=="number")return y!==null?null:l(f,u,""+d,m);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Hn:return d.key===y?d.type===tt?v(f,u,d.props.children,m,y):s(f,u,d,m):null;case It:return d.key===y?c(f,u,d,m):null}if(mo(d)||xn(d))return y!==null?null:v(f,u,d,m,null);go(f,d)}return null}function M(f,u,d,m,y){if(typeof m=="string"||typeof m=="number")return f=f.get(d)||null,l(u,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Hn:return f=f.get(m.key===null?d:m.key)||null,m.type===tt?v(u,f,m.props.children,y,m.key):s(u,f,m,y);case It:return f=f.get(m.key===null?d:m.key)||null,c(u,f,m,y)}if(mo(m)||xn(m))return f=f.get(d)||null,v(u,f,m,y,null);go(u,m)}return null}function B(f,u,d,m){for(var y=null,H=null,k=u,I=u=0,F=null;k!==null&&I<d.length;I++){k.index>I?(F=k,k=null):F=k.sibling;var N=g(f,k,d[I],m);if(N===null){k===null&&(k=F);break}e&&k&&N.alternate===null&&t(f,k),u=a(N,u,I),H===null?y=N:H.sibling=N,H=N,k=F}if(I===d.length)return n(f,k),y;if(k===null){for(;I<d.length;I++)k=D(f,d[I],m),k!==null&&(u=a(k,u,I),H===null?y=k:H.sibling=k,H=k);return y}for(k=r(f,k);I<d.length;I++)F=M(k,f,I,d[I],m),F!==null&&(e&&F.alternate!==null&&k.delete(F.key===null?I:F.key),u=a(F,u,I),H===null?y=F:H.sibling=F,H=F);return e&&k.forEach(function(Z){return t(f,Z)}),y}function A(f,u,d,m){var y=xn(d);if(typeof y!="function")throw Error(E(150));if(d=y.call(d),d==null)throw Error(E(151));for(var H=y=null,k=u,I=u=0,F=null,N=d.next();k!==null&&!N.done;I++,N=d.next()){k.index>I?(F=k,k=null):F=k.sibling;var Z=g(f,k,N.value,m);if(Z===null){k===null&&(k=F);break}e&&k&&Z.alternate===null&&t(f,k),u=a(Z,u,I),H===null?y=Z:H.sibling=Z,H=Z,k=F}if(N.done)return n(f,k),y;if(k===null){for(;!N.done;I++,N=d.next())N=D(f,N.value,m),N!==null&&(u=a(N,u,I),H===null?y=N:H.sibling=N,H=N);return y}for(k=r(f,k);!N.done;I++,N=d.next())N=M(k,f,I,N.value,m),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?I:N.key),u=a(N,u,I),H===null?y=N:H.sibling=N,H=N);return e&&k.forEach(function(Te){return t(f,Te)}),y}return function(f,u,d,m){var y=typeof d=="object"&&d!==null&&d.type===tt&&d.key===null;y&&(d=d.props.children);var H=typeof d=="object"&&d!==null;if(H)switch(d.$$typeof){case Hn:e:{for(H=d.key,y=u;y!==null;){if(y.key===H){switch(y.tag){case 7:if(d.type===tt){n(f,y.sibling),u=o(y,d.props.children),u.return=f,f=u;break e}break;default:if(y.elementType===d.type){n(f,y.sibling),u=o(y,d.props),u.ref=lr(f,y,d),u.return=f,f=u;break e}}n(f,y);break}else t(f,y);y=y.sibling}d.type===tt?(u=gn(d.props.children,f.mode,m,d.key),u.return=f,f=u):(m=yo(d.type,d.key,d.props,null,f.mode,m),m.ref=lr(f,u,d),m.return=f,f=m)}return i(f);case It:e:{for(y=d.key;u!==null;){if(u.key===y)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ui(d,f.mode,m),u.return=f,f=u}return i(f)}if(typeof d=="string"||typeof d=="number")return d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=si(d,f.mode,m),u.return=f,f=u),i(f);if(mo(d))return B(f,u,d,m);if(xn(d))return A(f,u,d,m);if(H&&go(f,d),typeof d=="undefined"&&!y)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(E(152,Kt(f.type)||"Component"))}return n(f,u)}}var vo=uu(!0),cu=uu(!1),sr={},Oe=ut(sr),ur=ut(sr),cr=ut(sr);function Lt(e){if(e===sr)throw Error(E(174));return e}function ci(e,t){switch(X(cr,t),X(ur,e),X(Oe,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pa(t,e)}J(Oe),X(Oe,t)}function yn(){J(Oe),J(ur),J(cr)}function du(e){Lt(cr.current);var t=Lt(Oe.current),n=pa(t,e.type);t!==n&&(X(ur,e),X(Oe,n))}function di(e){ur.current===e&&(J(Oe),J(ur))}var q=ut(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!=0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qe=null,yt=null,We=!1;function fu(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function hu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function fi(e){if(We){var t=yt;if(t){var n=t;if(!hu(e,t)){if(t=cn(n.nextSibling),!t||!hu(e,t)){e.flags=e.flags&-1025|2,We=!1,Qe=e;return}fu(Qe,n)}Qe=e,yt=cn(t.firstChild)}else e.flags=e.flags&-1025|2,We=!1,Qe=e}}function pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function So(e){if(e!==Qe)return!1;if(!We)return pu(e),We=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Ja(t,e.memoizedProps))for(t=yt;t;)fu(e,t),t=cn(t.nextSibling);if(pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=Qe?cn(e.stateNode.nextSibling):null;return!0}function hi(){yt=Qe=null,We=!1}var vn=[];function pi(){for(var e=0;e<vn.length;e++)vn[e]._workInProgressVersionPrimary=null;vn.length=0}var dr=At.ReactCurrentDispatcher,Ge=At.ReactCurrentBatchConfig,fr=0,$=null,he=null,ue=null,Eo=!1,hr=!1;function Ce(){throw Error(E(321))}function mi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,o,a){if(fr=a,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,dr.current=e===null||e.memoizedState===null?Cf:wf,e=n(r,o),hr){a=0;do{if(hr=!1,!(25>a))throw Error(E(301));a+=1,ue=he=null,t.updateQueue=null,dr.current=Df,e=n(r,o)}while(hr)}if(dr.current=Co,t=he!==null&&he.next!==null,fr=0,ue=he=$=null,Eo=!1,t)throw Error(E(300));return e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?$.memoizedState=ue=e:ue=ue.next=e,ue}function Wt(){if(he===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ue===null?$.memoizedState:ue.next;if(t!==null)ue=t,he=e;else{if(e===null)throw Error(E(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ue===null?$.memoizedState=ue=e:ue=ue.next=e}return ue}function Ue(e,t){return typeof t=="function"?t(e):t}function pr(e){var t=Wt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=he,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){o=o.next,r=r.baseState;var l=i=a=null,s=o;do{var c=s.lane;if((fr&c)===c)l!==null&&(l=l.next={lane:0,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),r=s.eagerReducer===e?s.eagerState:e(r,s.action);else{var v={lane:c,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};l===null?(i=l=v,a=r):l=l.next=v,$.lanes|=c,ar|=c}s=s.next}while(s!==null&&s!==o);l===null?a=r:l.next=i,Re(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function mr(e){var t=Wt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Re(a,t.memoizedState)||(Ne=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function mu(e,t,n){var r=t._getVersion;r=r(t._source);var o=t._workInProgressVersionPrimary;if(o!==null?e=o===r:(e=e.mutableReadLanes,(e=(fr&e)===e)&&(t._workInProgressVersionPrimary=r,vn.push(t))),e)return n(t._source);throw vn.push(t),Error(E(350))}function gu(e,t,n,r){var o=ge;if(o===null)throw Error(E(349));var a=t._getVersion,i=a(t._source),l=dr.current,s=l.useState(function(){return mu(o,t,n)}),c=s[1],v=s[0];s=ue;var D=e.memoizedState,g=D.refs,M=g.getSnapshot,B=D.source;D=D.subscribe;var A=$;return e.memoizedState={refs:g,source:t,subscribe:r},l.useEffect(function(){g.getSnapshot=n,g.setSnapshot=c;var f=a(t._source);if(!Re(i,f)){f=n(t._source),Re(v,f)||(c(f),f=pt(A),o.mutableReadLanes|=f&o.pendingLanes),f=o.mutableReadLanes,o.entangledLanes|=f;for(var u=o.entanglements,d=f;0<d;){var m=31-it(d),y=1<<m;u[m]|=f,d&=~y}}},[n,t,r]),l.useEffect(function(){return r(t._source,function(){var f=g.getSnapshot,u=g.setSnapshot;try{u(f(t._source));var d=pt(A);o.mutableReadLanes|=d&o.pendingLanes}catch(m){u(function(){throw m})}})},[t,r]),Re(M,n)&&Re(B,t)&&Re(D,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Ue,lastRenderedState:v},e.dispatch=c=yi.bind(null,$,e),s.queue=e,s.baseQueue=null,v=mu(o,t,n),s.memoizedState=s.baseState=v),v}function yu(e,t,n){var r=Wt();return gu(r,e,t,n)}function gr(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Ue,lastRenderedState:e},e=e.dispatch=yi.bind(null,$,e),[t.memoizedState,e]}function wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vu(e){var t=Ot();return e={current:e},t.memoizedState=e}function Do(){return Wt().memoizedState}function vi(e,t,n,r){var o=Ot();$.flags|=e,o.memoizedState=wo(1|t,n,void 0,r===void 0?null:r)}function Ti(e,t,n,r){var o=Wt();r=r===void 0?null:r;var a=void 0;if(he!==null){var i=he.memoizedState;if(a=i.destroy,r!==null&&mi(r,i.deps)){wo(t,n,a,r);return}}$.flags|=e,o.memoizedState=wo(1|t,n,a,r)}function Tu(e,t){return vi(516,4,e,t)}function ko(e,t){return Ti(516,4,e,t)}function Su(e,t){return Ti(4,2,e,t)}function Eu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cu(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4,2,Eu.bind(null,t,e),n)}function Si(){}function wu(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Du(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kf(e,t){var n=hn();xt(98>n?98:n,function(){e(!0)}),xt(97<n?97:n,function(){var r=Ge.transition;Ge.transition=1;try{e(!1),t()}finally{Ge.transition=r}})}function yi(e,t,n){var r=ke(),o=pt(e),a={lane:o,action:n,eagerReducer:null,eagerState:null,next:null},i=t.pending;if(i===null?a.next=a:(a.next=i.next,i.next=a),t.pending=a,i=e.alternate,e===$||i!==null&&i===$)hr=Eo=!0;else{if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(a.eagerReducer=i,a.eagerState=s,Re(s,l))return}catch(c){}finally{}mt(e,o,r)}}var Co={readContext:Ae,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useOpaqueIdentifier:Ce,unstable_isNewReconciler:!1},Cf={readContext:Ae,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Tu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vi(4,2,Eu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vi(4,2,e,t)},useMemo:function(e,t){var n=Ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=yi.bind(null,$,e),[r.memoizedState,e]},useRef:vu,useState:gr,useDebugValue:Si,useDeferredValue:function(e){var t=gr(e),n=t[0],r=t[1];return Tu(function(){var o=Ge.transition;Ge.transition=1;try{r(e)}finally{Ge.transition=o}},[e]),n},useTransition:function(){var e=gr(!1),t=e[0];return e=kf.bind(null,e[1]),vu(e),[e,t]},useMutableSource:function(e,t,n){var r=Ot();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},gu(r,e,t,n)},useOpaqueIdentifier:function(){if(We){var e=!1,t=gf(function(){throw e||(e=!0,n("r:"+(Za++).toString(36))),Error(E(355))}),n=gr(t)[1];return($.mode&2)==0&&($.flags|=516,wo(5,function(){n("r:"+(Za++).toString(36))},void 0,null)),t}return t="r:"+(Za++).toString(36),gr(t),t},unstable_isNewReconciler:!1},wf={readContext:Ae,useCallback:wu,useContext:Ae,useEffect:ko,useImperativeHandle:Cu,useLayoutEffect:Su,useMemo:Du,useReducer:pr,useRef:Do,useState:function(){return pr(Ue)},useDebugValue:Si,useDeferredValue:function(e){var t=pr(Ue),n=t[0],r=t[1];return ko(function(){var o=Ge.transition;Ge.transition=1;try{r(e)}finally{Ge.transition=o}},[e]),n},useTransition:function(){var e=pr(Ue)[0];return[Do().current,e]},useMutableSource:yu,useOpaqueIdentifier:function(){return pr(Ue)[0]},unstable_isNewReconciler:!1},Df={readContext:Ae,useCallback:wu,useContext:Ae,useEffect:ko,useImperativeHandle:Cu,useLayoutEffect:Su,useMemo:Du,useReducer:mr,useRef:Do,useState:function(){return mr(Ue)},useDebugValue:Si,useDeferredValue:function(e){var t=mr(Ue),n=t[0],r=t[1];return ko(function(){var o=Ge.transition;Ge.transition=1;try{r(e)}finally{Ge.transition=o}},[e]),n},useTransition:function(){var e=mr(Ue)[0];return[Do().current,e]},useMutableSource:yu,useOpaqueIdentifier:function(){return mr(Ue)[0]},unstable_isNewReconciler:!1},Mf=At.ReactCurrentOwner,Ne=!1;function we(e,t,n,r){t.child=e===null?cu(t,null,n,r):vo(t,e.child,n,r)}function ku(e,t,n,r,o){n=n.render;var a=t.ref;return mn(t,o),r=gi(e,t,n,r,a,o),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,Je(e,t,o)):(t.flags|=1,we(e,t,r,o),t.child)}function Pu(e,t,n,r,o,a){if(e===null){var i=n.type;return typeof i=="function"&&!Ei(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Mu(e,t,i,r,o,a)):(e=yo(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}return i=e.child,(o&a)==0&&(o=i.memoizedProps,n=n.compare,n=n!==null?n:er,n(o,r)&&e.ref===t.ref)?Je(e,t,a):(t.flags|=1,e=gt(i,r),e.ref=t.ref,e.return=t,t.child=e)}function Mu(e,t,n,r,o,a){if(e!==null&&er(e.memoizedProps,r)&&e.ref===t.ref)if(Ne=!1,(a&o)!=0)(e.flags&16384)!=0&&(Ne=!0);else return t.lanes=e.lanes,Je(e,t,a);return Ci(e,t,n,r,a)}function wi(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)==0)t.memoizedState={baseLanes:0},Mo(t,n);else if((n&1073741824)!=0)t.memoizedState={baseLanes:0},Mo(t,a!==null?a.baseLanes:n);else return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Mo(t,e),null;else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Mo(t,r);return we(e,t,o,n),t.child}function Ru(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function Ci(e,t,n,r,o){var a=Ee(n)?Nt:de.current;return a=fn(t,a),mn(t,o),n=gi(e,t,n,r,a,o),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,Je(e,t,o)):(t.flags|=1,we(e,t,n,o),t.child)}function Au(e,t,n,r,o){if(Ee(n)){var a=!0;io(t)}else a=!1;if(mn(t,o),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),lu(t,n,r),li(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=Ee(n)?Nt:de.current,c=fn(t,c));var v=n.getDerivedStateFromProps,D=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==c)&&su(t,i,r,c),dt=!1;var g=t.memoizedState;i.state=g,ir(t,r,i,o),s=t.memoizedState,l!==r||g!==s||Se.current||dt?(typeof v=="function"&&(ho(t,n,v,r),s=t.memoizedState),(l=dt||iu(t,n,l,r,g,s,c))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4)):(typeof i.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{i=t.stateNode,nu(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:He(t.type,l),i.props=c,D=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ae(s):(s=Ee(n)?Nt:de.current,s=fn(t,s));var M=n.getDerivedStateFromProps;(v=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==D||g!==s)&&su(t,i,r,s),dt=!1,g=t.memoizedState,i.state=g,ir(t,r,i,o);var B=t.memoizedState;l!==D||g!==B||Se.current||dt?(typeof M=="function"&&(ho(t,n,M,r),B=t.memoizedState),(c=dt||iu(t,n,c,r,g,B,s))?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,B,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,B,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=B),i.props=r,i.state=B,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=256),r=!1)}return Di(e,t,n,r,a,o)}function Di(e,t,n,r,o,a){Ru(e,t);var i=(t.flags&64)!=0;if(!r&&!i)return o&&zs(t,n,!1),Je(e,t,a);r=t.stateNode,Mf.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=vo(t,e.child,null,a),t.child=vo(t,null,l,a)):we(e,t,l,a),t.memoizedState=r.state,o&&zs(t,n,!0),t.child}function Iu(e){var t=e.stateNode;t.pendingContext?Ys(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ys(e,t.context,!1),ci(e,t.containerInfo)}var Po={dehydrated:null,retryLane:0};function Nu(e,t,n){var r=t.pendingProps,o=q.current,a=!1,i;return(i=(t.flags&64)!=0)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!=0),i?(a=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(o|=1),X(q,o&1),e===null?(r.fallback!==void 0&&fi(t),e=r.children,o=r.fallback,a?(e=Gu(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Po,e):typeof r.unstable_expectedLoadTime=="number"?(e=Gu(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Po,t.lanes=33554432,e):(n=ki({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?a?(r=Hu(e,t,r.children,r.fallback,n),a=t.child,o=e.child.memoizedState,a.memoizedState=o===null?{baseLanes:n}:{baseLanes:o.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=Po,r):(n=Bu(e,t,r.children,n),t.memoizedState=null,n):a?(r=Hu(e,t,r.children,r.fallback,n),a=t.child,o=e.child.memoizedState,a.memoizedState=o===null?{baseLanes:n}:{baseLanes:o.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=Po,r):(n=Bu(e,t,r.children,n),t.memoizedState=null,n)}function Gu(e,t,n,r){var o=e.mode,a=e.child;return t={mode:"hidden",children:t},(o&2)==0&&a!==null?(a.childLanes=0,a.pendingProps=t):a=ki(t,o,0,null),n=gn(n,o,r,null),a.return=e,n.return=e,a.sibling=n,e.child=a,n}function Bu(e,t,n,r){var o=e.child;return e=o.sibling,n=gt(o,{mode:"visible",children:n}),(t.mode&2)==0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function Hu(e,t,n,r,o){var a=t.mode,i=e.child;e=i.sibling;var l={mode:"hidden",children:n};return(a&2)==0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,i=n.lastEffect,i!==null?(t.firstEffect=n.firstEffect,t.lastEffect=i,i.nextEffect=null):t.firstEffect=t.lastEffect=null):n=gt(i,l),e!==null?r=gt(e,r):(r=gn(r,a,o,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function Fu(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),tu(e.return,t)}function Mi(e,t,n,r,o,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o,lastEffect:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o,i.lastEffect=a)}function xu(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(we(e,t,r.children,n),r=q.current,(r&2)!=0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!=0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,n);else if(e.tag===19)Fu(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(q,r),(t.mode&2)==0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&To(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Mi(t,!1,o,n,a,t.lastEffect);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&To(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Mi(t,!0,n,null,a,t.lastEffect);break;case"together":Mi(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,(n&t.childLanes)!=0){if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Lu,Pi,Ou,Wu;Lu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pi=function(){};Ou=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Lt(Oe.current);var a=null;switch(n){case"input":o=sa(e,o),r=sa(e,r),a=[];break;case"option":o=da(e,o),r=da(e,r),a=[];break;case"select":o=j({},o,{value:void 0}),r=j({},r,{value:void 0}),a=[];break;case"textarea":o=fa(e,o),r=fa(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=no)}ma(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bn.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var s=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Q("scroll",e),a||l===s||(a=[])):typeof s=="object"&&s!==null&&s.$$typeof===ra?s.toString():(a=a||[]).push(c,s))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Wu=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pf(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ee(t.type)&&ao(),null;case 3:return yn(),J(Se),J(de),pi(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(So(t)?t.flags|=4:r.hydrate||(t.flags|=256)),Pi(t),null;case 5:di(t);var o=Lt(cr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ou(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(E(166));return null}if(e=Lt(Oe.current),So(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[st]=t,r[oo]=a,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(e=0;e<nr.length;e++)Q(nr[e],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Il(r,a),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Q("invalid",r);break;case"textarea":Hl(r,a),Q("invalid",r)}ma(n,a),e=null;for(var i in a)a.hasOwnProperty(i)&&(o=a[i],i==="children"?typeof o=="string"?r.textContent!==o&&(e=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(e=["children",""+o]):Bn.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&Q("scroll",r));switch(n){case"input":xr(r),Bl(r,a,!0);break;case"textarea":xr(r),Fl(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=no)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(i=o.nodeType===9?o:o.ownerDocument,e===ha.html&&(e=xl(n)),e===ha.html?n==="script"?(e=i.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[st]=t,e[oo]=r,Lu(e,t,!1,!1),t.stateNode=e,i=ga(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<nr.length;o++)Q(nr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":Il(e,r),o=sa(e,r),Q("invalid",e);break;case"option":o=da(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=j({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Hl(e,r),o=fa(e,r),Q("invalid",e);break;default:o=r}ma(n,o);var l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Wl(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ll(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&On(e,s):typeof s=="number"&&On(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Bn.hasOwnProperty(a)?s!=null&&a==="onScroll"&&Q("scroll",e):s!=null&&Xo(e,a,s,i))}switch(n){case"input":xr(e),Bl(e,r,!1);break;case"textarea":xr(e),Fl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Zt(e,!!r.multiple,a,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=no)}Us(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));n=Lt(cr.current),Lt(Oe.current),So(t)?(r=t.stateNode,n=t.memoizedProps,r[st]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r)}return null;case 13:return J(q),r=t.memoizedState,(t.flags&64)!=0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&So(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!=0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(q.current&1)!=0?ce===0&&(ce=3):((ce===0||ce===3)&&(ce=4),ge===null||(ar&134217727)==0&&(Tn&134217727)==0||Sn(ge,pe))),(r||n)&&(t.flags|=4),null);case 4:return yn(),Pi(t),e===null&&Os(t.stateNode.containerInfo),null;case 10:return ai(t),null;case 17:return Ee(t.type)&&ao(),null;case 19:if(J(q),r=t.memoizedState,r===null)return null;if(a=(t.flags&64)!=0,i=r.rendering,i===null)if(a)yr(r,!1);else{if(ce!==0||e!==null&&(e.flags&64)!=0)for(e=t.child;e!==null;){if(i=To(e),i!==null){for(t.flags|=64,yr(r,!1),a=i.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=2,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(q,q.current&1|2),t.child}e=e.sibling}r.tail!==null&&fe()>Ri&&(t.flags|=64,a=!0,yr(r,!1),t.lanes=33554432)}else{if(!a)if(e=To(i),e!==null){if(t.flags|=64,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!We)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*fe()-r.renderingStartTime>Ri&&n!==1073741824&&(t.flags|=64,a=!0,yr(r,!1),t.lanes=33554432);r.isBackwards?(i.sibling=t.child,t.child=i):(n=r.last,n!==null?n.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=fe(),n.sibling=null,t=q.current,X(q,a?t&1|2:t&1),n):null;case 23:case 24:return Ai(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(E(156,t.tag))}function Rf(e){switch(e.tag){case 1:Ee(e.type)&&ao();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(yn(),J(Se),J(de),pi(),t=e.flags,(t&64)!=0)throw Error(E(285));return e.flags=t&-4097|64,e;case 5:return di(e),null;case 13:return J(q),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return J(q),null;case 4:return yn(),null;case 10:return ai(e),null;case 23:case 24:return Ai(),null;default:return null}}function Ii(e,t){try{var n="",r=t;do n+=ld(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o}}function Gi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Af=typeof WeakMap=="function"?WeakMap:Map;function Uu(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ro||(Ro=!0,Bi=r),Gi(e,t)},n}function Vu(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return Gi(e,t),r(o)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Ve===null?Ve=new Set([this]):Ve.add(this),Gi(e,t));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}var If=typeof WeakSet=="function"?WeakSet:Set;function _u(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){vt(e,n)}else t.current=null}function Gf(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:He(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&Ka(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(E(163))}function Hf(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)==3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var o=e;r=o.next,o=o.tag,(o&4)!=0&&(o&1)!=0&&(ju(n,e),Bf(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:He(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&ou(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}ou(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&Us(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&ts(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(E(163))}function Yu(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var o=n.memoizedProps.style;o=o!=null&&o.hasOwnProperty("display")?o.display:null,r.style.display=Ol("display",o)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function zu(e,t){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(qa,t)}catch(a){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,o=r.destroy;if(r=r.tag,o!==void 0)if((r&4)!=0)ju(t,n);else{r=t;try{o()}catch(a){vt(r,a)}}n=n.next}while(n!==e)}break;case 1:if(_u(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(a){vt(t,a)}break;case 5:_u(t);break;case 4:bu(e,t)}}function Qu(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Ju(e){return e.tag===5||e.tag===3||e.tag===4}function Ku(e){e:{for(var t=e.return;t!==null;){if(Ju(t))break e;t=t.return}throw Error(E(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(E(161))}n.flags&16&&(On(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Ju(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Hi(e,n,t):Ni(e,n,t)}function Hi(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=no));else if(r!==4&&(e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}function Ni(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ni(e,t,n),e=e.sibling;e!==null;)Ni(e,t,n),e=e.sibling}function bu(e,t){for(var n=t,r=!1,o,a;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(E(160));switch(o=r.stateNode,r.tag){case 5:a=!1;break e;case 3:o=o.containerInfo,a=!0;break e;case 4:o=o.containerInfo,a=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var i=e,l=n,s=l;;)if(zu(i,s),s.child!==null&&s.tag!==4)s.child.return=s,s=s.child;else{if(s===l)break e;for(;s.sibling===null;){if(s.return===null||s.return===l)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}a?(i=o,l=n.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):o.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){o=n.stateNode.containerInfo,a=!0,n.child.return=n,n=n.child;continue}}else if(zu(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function xi(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var o=e!==null?e.memoizedProps:r;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,a!==null){for(n[oo]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Gl(n,r),ga(e,o),t=ga(e,r),o=0;o<a.length;o+=2){var i=a[o],l=a[o+1];i==="style"?Wl(n,l):i==="dangerouslySetInnerHTML"?Ll(n,l):i==="children"?On(n,l):Xo(n,i,l,t)}switch(e){case"input":ca(n,r);break;case"textarea":Nl(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,a=r.value,a!=null?Zt(n,!!r.multiple,a,!1):e!==!!r.multiple&&(r.defaultValue!=null?Zt(n,!!r.multiple,r.defaultValue,!0):Zt(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(E(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,ts(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Fi=fe(),Yu(t.child,!0)),Zu(t);return;case 19:Zu(t);return;case 17:return;case 23:case 24:Yu(t,t.memoizedState!==null);return}throw Error(E(163))}function Zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new If),t.forEach(function(r){var o=Nf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ff(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var xf=Math.ceil,Ao=At.ReactCurrentDispatcher,Li=At.ReactCurrentOwner,x=0,ge=null,re=null,pe=0,Ut=0,Oi=ut(0),ce=0,Io=null,En=0,ar=0,Tn=0,Wi=0,Ui=null,Fi=0,Ri=Infinity;function Cn(){Ri=fe()+500}var R=null,Ro=!1,Bi=null,Ve=null,Tt=!1,vr=null,Tr=90,Vi=[],_i=[],Ke=null,Sr=0,ji=null,Go=-1,Ze=0,Bo=0,Er=null,Ho=!1;function ke(){return(x&48)!=0?fe():Go!==-1?Go:Go=fe()}function pt(e){if(e=e.mode,(e&2)==0)return 1;if((e&4)==0)return hn()===99?1:2;if(Ze===0&&(Ze=En),Ef.transition!==0){Bo!==0&&(Bo=Ui!==null?Ui.pendingLanes:0),e=Ze;var t=4186112&~Bo;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=hn(),(x&4)!=0&&e===98?e=br(12,Ze):(e=wd(e),e=br(e,Ze)),e}function mt(e,t,n){if(50<Sr)throw Sr=0,ji=null,Error(E(185));if(e=No(e,t),e===null)return null;zr(e,t,n),e===ge&&(Tn|=t,ce===4&&Sn(e,pe));var r=hn();t===1?(x&8)!=0&&(x&48)==0?Yi(e):(Be(e,n),x===0&&(Cn(),Le())):((x&4)==0||r!==98&&r!==99||(Ke===null?Ke=new Set([e]):Ke.add(e)),Be(e,n)),Ui=e}function No(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Be(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-it(i),s=1<<l,c=a[l];if(c===-1){if((s&r)==0||(s&o)!=0){c=t,tn(s);var v=z;a[l]=10<=v?c+250:6<=v?c+5e3:-1}}else c<=t&&(e.expiredLanes|=s);i&=~s}if(r=Jn(e,e===ge?pe:0),t=z,r===0)n!==null&&(n!==ni&&ei(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==ni&&ei(n)}t===15?(n=Yi.bind(null,e),ze===null?(ze=[n],so=$a(lo,eu)):ze.push(n),n=ni):t===14?n=or(99,Yi.bind(null,e)):(n=Dd(t),n=or(n,Xu.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Xu(e){if(Go=-1,Bo=Ze=0,(x&48)!=0)throw Error(E(327));var t=e.callbackNode;if(St()&&e.callbackNode!==t)return null;var n=Jn(e,e===ge?pe:0);if(n===0)return null;var r=n,o=x;x|=16;var a=$u();(ge!==e||pe!==r)&&(Cn(),wn(e,r));do try{Lf();break}catch(l){qu(e,l)}while(1);if(oi(),Ao.current=a,x=o,re!==null?r=0:(ge=null,pe=0,r=ce),(En&Tn)!=0)wn(e,0);else if(r!==0){if(r===2&&(x|=64,e.hydrate&&(e.hydrate=!1,Ka(e.containerInfo)),n=ss(e),n!==0&&(r=Cr(e,n))),r===1)throw t=Io,wn(e,0),Sn(e,n),Be(e,fe()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(E(345));case 2:Vt(e);break;case 3:if(Sn(e,n),(n&62914560)===n&&(r=Fi+500-fe(),10<r)){if(Jn(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Vs(Vt.bind(null,e),r);break}Vt(e);break;case 4:if(Sn(e,n),(n&4186112)===n)break;for(r=e.eventTimes,o=-1;0<n;){var i=31-it(n);a=1<<i,i=r[i],i>o&&(o=i),n&=~a}if(n=o,n=fe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*xf(n/1960))-n,10<n){e.timeoutHandle=Vs(Vt.bind(null,e),n);break}Vt(e);break;case 5:Vt(e);break;default:throw Error(E(329))}}return Be(e,fe()),e.callbackNode===t?Xu.bind(null,e):null}function Sn(e,t){for(t&=~Wi,t&=~Tn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function Yi(e){if((x&48)!=0)throw Error(E(327));if(St(),e===ge&&(e.expiredLanes&pe)!=0){var t=pe,n=Cr(e,t);(En&Tn)!=0&&(t=Jn(e,t),n=Cr(e,t))}else t=Jn(e,0),n=Cr(e,t);if(e.tag!==0&&n===2&&(x|=64,e.hydrate&&(e.hydrate=!1,Ka(e.containerInfo)),t=ss(e),t!==0&&(n=Cr(e,t))),n===1)throw n=Io,wn(e,0),Sn(e,t),Be(e,fe()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vt(e),Be(e,fe()),null}function Of(){if(Ke!==null){var e=Ke;Ke=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,Be(t,fe())})}Le()}function ec(e,t){var n=x;x|=1;try{return e(t)}finally{x=n,x===0&&(Cn(),Le())}}function tc(e,t){var n=x;x&=-2,x|=8;try{return e(t)}finally{x=n,x===0&&(Cn(),Le())}}function Mo(e,t){X(Oi,Ut),Ut|=t,En|=t}function Ai(){Ut=Oi.current,J(Oi)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mf(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:yn(),J(Se),J(de),pi();break;case 5:di(r);break;case 4:yn();break;case 13:J(q);break;case 19:J(q);break;case 10:ai(r);break;case 23:case 24:Ai()}n=n.return}ge=e,re=gt(e.current,null),pe=Ut=En=t,ce=0,Io=null,Wi=Tn=ar=0}function qu(e,t){do{var n=re;try{if(oi(),dr.current=Co,Eo){for(var r=$.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Eo=!1}if(fr=0,ue=he=$=null,hr=!1,Li.current=null,n===null||n.return===null){ce=1,Io=t,re=null;break}e:{var a=e,i=n.return,l=n,s=t;if(t=pe,l.flags|=2048,l.firstEffect=l.lastEffect=null,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s;if((l.mode&2)==0){var v=l.alternate;v?(l.updateQueue=v.updateQueue,l.memoizedState=v.memoizedState,l.lanes=v.lanes):(l.updateQueue=null,l.memoizedState=null)}var D=(q.current&1)!=0,g=i;do{var M;if(M=g.tag===13){var B=g.memoizedState;if(B!==null)M=B.dehydrated!==null;else{var A=g.memoizedProps;M=A.fallback===void 0?!1:A.unstable_avoidThisFallback!==!0?!0:!D}}if(M){var f=g.updateQueue;if(f===null){var u=new Set;u.add(c),g.updateQueue=u}else f.add(c);if((g.mode&2)==0){if(g.flags|=64,l.flags|=16384,l.flags&=-2981,l.tag===1)if(l.alternate===null)l.tag=17;else{var d=ft(-1,1);d.tag=2,ht(l,d)}l.lanes|=1;break e}s=void 0,l=t;var m=a.pingCache;if(m===null?(m=a.pingCache=new Af,s=new Set,m.set(c,s)):(s=m.get(c),s===void 0&&(s=new Set,m.set(c,s))),!s.has(l)){s.add(l);var y=Wf.bind(null,a,c,l);c.then(y,y)}g.flags|=4096,g.lanes=t;break e}g=g.return}while(g!==null);s=Error((Kt(l.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}ce!==5&&(ce=2),s=Ii(s,l),g=i;do{switch(g.tag){case 3:a=s,g.flags|=4096,t&=-t,g.lanes|=t;var H=Uu(g,a,t);ru(g,H);break e;case 1:a=s;var k=g.type,I=g.stateNode;if((g.flags&64)==0&&(typeof k.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Ve===null||!Ve.has(I)))){g.flags|=4096,t&=-t,g.lanes|=t;var F=Vu(g,a,t);ru(g,F);break e}}g=g.return}while(g!==null)}nc(n)}catch(N){t=N,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function $u(){var e=Ao.current;return Ao.current=Co,e===null?Co:e}function Cr(e,t){var n=x;x|=16;var r=$u();ge===e&&pe===t||wn(e,t);do try{Uf();break}catch(o){qu(e,o)}while(1);if(oi(),x=n,Ao.current=r,re!==null)throw Error(E(261));return ge=null,pe=0,ce}function Uf(){for(;re!==null;)rc(re)}function Lf(){for(;re!==null&&!vf();)rc(re)}function rc(e){var t=oc(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,t===null?nc(e):re=t,Li.current=null}function nc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)==0){if(n=Pf(n,t,Ut),n!==null){re=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Ut&1073741824)!=0||(n.mode&4)==0){for(var r=0,o=n.child;o!==null;)r|=o.lanes|o.childLanes,o=o.sibling;n.childLanes=r}e!==null&&(e.flags&2048)==0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=Rf(t),n!==null){n.flags&=2047,re=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ce===0&&(ce=5)}function Vt(e){var t=hn();return xt(99,Vf.bind(null,e,t)),null}function Vf(e,t){do St();while(vr!==null);if((x&48)!=0)throw Error(E(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null;var r=n.lanes|n.childLanes,o=r,a=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;for(var i=e.eventTimes,l=e.expirationTimes;0<a;){var s=31-it(a),c=1<<s;o[s]=0,i[s]=-1,l[s]=-1,a&=~c}if(Ke!==null&&(r&24)==0&&Ke.has(e)&&Ke.delete(e),e===ge&&(re=ge=null,pe=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(o=x,x|=32,Li.current=null,za=Qr,i=As(),_a(i)){if("selectionStart"in i)l={start:i.selectionStart,end:i.selectionEnd};else e:if(l=(l=i.ownerDocument)&&l.defaultView||window,(c=l.getSelection&&l.getSelection())&&c.rangeCount!==0){l=c.anchorNode,a=c.anchorOffset,s=c.focusNode,c=c.focusOffset;try{l.nodeType,s.nodeType}catch(N){l=null;break e}var v=0,D=-1,g=-1,M=0,B=0,A=i,f=null;t:for(;;){for(var u;A!==l||a!==0&&A.nodeType!==3||(D=v+a),A!==s||c!==0&&A.nodeType!==3||(g=v+c),A.nodeType===3&&(v+=A.nodeValue.length),(u=A.firstChild)!==null;)f=A,A=u;for(;;){if(A===i)break t;if(f===l&&++M===a&&(D=v),f===s&&++B===c&&(g=v),(u=A.nextSibling)!==null)break;A=f,f=A.parentNode}A=u}l=D===-1||g===-1?null:{start:D,end:g}}else l=null;l=l||{start:0,end:0}}else l=null;Qa={focusedElem:i,selectionRange:l},Qr=!1,Er=null,Ho=!1,R=r;do try{_f()}catch(N){if(R===null)throw Error(E(330));vt(R,N),R=R.nextEffect}while(R!==null);Er=null,R=r;do try{for(i=e;R!==null;){var d=R.flags;if(d&16&&On(R.stateNode,""),d&128){var m=R.alternate;if(m!==null){var y=m.ref;y!==null&&(typeof y=="function"?y(null):y.current=null)}}switch(d&1038){case 2:Ku(R),R.flags&=-3;break;case 6:Ku(R),R.flags&=-3,xi(R.alternate,R);break;case 1024:R.flags&=-1025;break;case 1028:R.flags&=-1025,xi(R.alternate,R);break;case 4:xi(R.alternate,R);break;case 8:l=R,bu(i,l);var H=l.alternate;Qu(l),H!==null&&Qu(H)}R=R.nextEffect}}catch(N){if(R===null)throw Error(E(330));vt(R,N),R=R.nextEffect}while(R!==null);if(y=Qa,m=As(),d=y.focusedElem,i=y.selectionRange,m!==d&&d&&d.ownerDocument&&Rs(d.ownerDocument.documentElement,d)){for(i!==null&&_a(d)&&(m=i.start,y=i.end,y===void 0&&(y=m),"selectionStart"in d?(d.selectionStart=m,d.selectionEnd=Math.min(y,d.value.length)):(y=(m=d.ownerDocument||document)&&m.defaultView||window,y.getSelection&&(y=y.getSelection(),l=d.textContent.length,H=Math.min(i.start,l),i=i.end===void 0?H:Math.min(i.end,l),!y.extend&&H>i&&(l=i,i=H,H=l),l=Ps(d,H),a=Ps(d,i),l&&a&&(y.rangeCount!==1||y.anchorNode!==l.node||y.anchorOffset!==l.offset||y.focusNode!==a.node||y.focusOffset!==a.offset)&&(m=m.createRange(),m.setStart(l.node,l.offset),y.removeAllRanges(),H>i?(y.addRange(m),y.extend(a.node,a.offset)):(m.setEnd(a.node,a.offset),y.addRange(m)))))),m=[],y=d;y=y.parentNode;)y.nodeType===1&&m.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<m.length;d++)y=m[d],y.element.scrollLeft=y.left,y.element.scrollTop=y.top}Qr=!!za,Qa=za=null,e.current=n,R=r;do try{for(d=e;R!==null;){var k=R.flags;if(k&36&&Hf(d,R.alternate,R),k&128){m=void 0;var I=R.ref;if(I!==null){var F=R.stateNode;switch(R.tag){case 5:m=F;break;default:m=F}typeof I=="function"?I(m):I.current=m}}R=R.nextEffect}}catch(N){if(R===null)throw Error(E(330));vt(R,N),R=R.nextEffect}while(R!==null);R=null,Sf(),x=o}else e.current=n;if(Tt)Tt=!1,vr=e,Tr=t;else for(R=r;R!==null;)t=R.nextEffect,R.nextEffect=null,R.flags&8&&(k=R,k.sibling=null,k.stateNode=null),R=t;if(r=e.pendingLanes,r===0&&(Ve=null),r===1?e===ji?Sr++:(Sr=0,ji=e):Sr=0,n=n.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(qa,n,void 0,(n.current.flags&64)==64)}catch(N){}if(Be(e,fe()),Ro)throw Ro=!1,e=Bi,Bi=null,e;return(x&8)!=0||Le(),null}function _f(){for(;R!==null;){var e=R.alternate;Ho||Er===null||((R.flags&8)!=0?Jl(R,Er)&&(Ho=!0):R.tag===13&&Ff(e,R)&&Jl(R,Er)&&(Ho=!0));var t=R.flags;(t&256)!=0&&Gf(e,R),(t&512)==0||Tt||(Tt=!0,or(97,function(){return St(),null})),R=R.nextEffect}}function St(){if(Tr!==90){var e=97<Tr?97:Tr;return Tr=90,xt(e,jf)}return!1}function Bf(e,t){Vi.push(t,e),Tt||(Tt=!0,or(97,function(){return St(),null}))}function ju(e,t){_i.push(t,e),Tt||(Tt=!0,or(97,function(){return St(),null}))}function jf(){if(vr===null)return!1;var e=vr;if(vr=null,(x&48)!=0)throw Error(E(331));var t=x;x|=32;var n=_i;_i=[];for(var r=0;r<n.length;r+=2){var o=n[r],a=n[r+1],i=o.destroy;if(o.destroy=void 0,typeof i=="function")try{i()}catch(s){if(a===null)throw Error(E(330));vt(a,s)}}for(n=Vi,Vi=[],r=0;r<n.length;r+=2){o=n[r],a=n[r+1];try{var l=o.create;o.destroy=l()}catch(s){if(a===null)throw Error(E(330));vt(a,s)}}for(l=e.current.firstEffect;l!==null;)e=l.nextEffect,l.nextEffect=null,l.flags&8&&(l.sibling=null,l.stateNode=null),l=e;return x=t,Le(),!0}function ac(e,t,n){t=Ii(n,t),t=Uu(e,t,1),ht(e,t),t=ke(),e=No(e,1),e!==null&&(zr(e,1,t),Be(e,t))}function vt(e,t){if(e.tag===3)ac(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){ac(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ve===null||!Ve.has(r))){e=Ii(t,e);var o=Vu(n,e,1);if(ht(n,o),o=ke(),n=No(n,1),n!==null)zr(n,1,o),Be(n,o);else if(typeof r.componentDidCatch=="function"&&(Ve===null||!Ve.has(r)))try{r.componentDidCatch(t,e)}catch(a){}break}}n=n.return}}function Wf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(pe&n)===n&&(ce===4||ce===3&&(pe&62914560)===pe&&500>fe()-Fi?wn(e,0):Wi|=n),Be(e,t)}function Nf(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)==0?t=1:(t&4)==0?t=hn()===99?1:2:(Ze===0&&(Ze=En),t=nn(62914560&~Ze),t===0&&(t=4194304))),n=ke(),e=No(e,t),e!==null&&(zr(e,t,n),Be(e,n))}var oc;oc=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)Ne=!0;else if((n&r)!=0)Ne=(e.flags&16384)!=0;else{switch(Ne=!1,t.tag){case 3:Iu(t),hi();break;case 5:du(t);break;case 1:Ee(t.type)&&io(t);break;case 4:ci(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var o=t.type._context;X(uo,o._currentValue),o._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!=0?Nu(e,t,n):(X(q,q.current&1),t=Je(e,t,n),t!==null?t.sibling:null);X(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!=0,(e.flags&64)!=0){if(r)return xu(e,t,n);t.flags|=64}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(q,q.current),r)break;return null;case 23:case 24:return t.lanes=0,wi(e,t,n)}return Je(e,t,n)}else Ne=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=fn(t,de.current),mn(t,n),o=gi(null,t,r,e,o,n),t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)){var a=!0;io(t)}else a=!1;t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ii(t);var i=r.getDerivedStateFromProps;typeof i=="function"&&ho(t,r,i,e),o.updater=po,t.stateNode=o,o._reactInternals=t,li(t,r,e,n),t=Di(null,t,r,!0,a,n)}else t.tag=0,we(null,t,o,n),t=t.child;return t;case 16:o=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Yf(o),e=He(o,e),a){case 0:t=Ci(null,t,o,e,n);break e;case 1:t=Au(null,t,o,e,n);break e;case 11:t=ku(null,t,o,e,n);break e;case 14:t=Pu(null,t,o,He(o.type,e),r,n);break e}throw Error(E(306,o,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Ci(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Au(e,t,r,o,n);case 3:if(Iu(t),r=t.updateQueue,e===null||r===null)throw Error(E(282));if(r=t.pendingProps,o=t.memoizedState,o=o!==null?o.element:null,nu(e,t),ir(t,r,null,n),r=t.memoizedState.element,r===o)hi(),t=Je(e,t,n);else{if(o=t.stateNode,(a=o.hydrate)&&(yt=cn(t.stateNode.containerInfo.firstChild),Qe=t,a=We=!0),a){if(e=o.mutableSourceEagerHydrationData,e!=null)for(o=0;o<e.length;o+=2)a=e[o],a._workInProgressVersionPrimary=e[o+1],vn.push(a);for(n=cu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else we(e,t,r,n),hi();t=t.child}return t;case 5:return du(t),e===null&&fi(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Ja(r,o)?i=null:a!==null&&Ja(r,a)&&(t.flags|=16),Ru(e,t),we(e,t,i,n),t.child;case 6:return e===null&&fi(t),null;case 13:return Nu(e,t,n);case 4:return ci(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vo(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),ku(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value;var l=t.type._context;if(X(uo,l._currentValue),l._currentValue=a,i!==null)if(l=i.value,a=Re(l,a)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(l,a):1073741823)|0,a===0){if(i.children===o.children&&!Se.current){t=Je(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var c=s.firstContext;c!==null;){if(c.context===r&&(c.observedBits&a)!=0){l.tag===1&&(c=ft(-1,n&-n),c.tag=2,ht(l,c)),l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),tu(l.return,n),s.lanes|=n;break}c=c.next}}else i=l.tag===10&&l.type===t.type?null:l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,a=t.pendingProps,r=a.children,mn(t,n),o=Ae(o,a.unstable_observedBits),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return o=t.type,a=He(o,t.pendingProps),a=He(o.type,a),Pu(e,t,o,a,r,n);case 15:return Mu(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Ee(r)?(e=!0,io(t)):e=!1,mn(t,n),lu(t,r,o),li(t,r,o,n),Di(null,t,r,!0,e,n);case 19:return xu(e,t,n);case 23:return wi(e,t,n);case 24:return wi(e,t,n)}throw Error(E(156,t.tag))};function bf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new bf(e,t,n,r)}function Ei(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yf(e){if(typeof e=="function")return Ei(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Br)return 11;if(e===Nr)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yo(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Ei(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case tt:return gn(n.children,o,a,t);case Ml:i=8,o|=16;break;case qo:i=8,o|=1;break;case Nn:return e=Ie(12,n,t,o|8),e.elementType=Nn,e.type=Nn,e.lanes=a,e;case Fn:return e=Ie(13,n,t,o),e.type=Fn,e.elementType=Fn,e.lanes=a,e;case Hr:return e=Ie(19,n,t,o),e.elementType=Hr,e.lanes=a,e;case oa:return ki(n,o,a,t);case aa:return e=Ie(24,n,t,o),e.elementType=aa,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $o:i=10;break e;case ea:i=9;break e;case Br:i=11;break e;case Nr:i=14;break e;case ta:i=16,r=null;break e;case na:i=22;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ie(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function gn(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function ki(e,t,n,r){return e=Ie(23,e,r,t),e.elementType=oa,e.lanes=n,e}function si(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function ui(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zf(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Ba(0),this.expirationTimes=Ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ba(0),this.mutableSourceEagerHydrationData=null}function Qf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fo(e,t,n,r){var o=t.current,a=ke(),i=pt(o);e:if(n){n=n._reactInternals;t:{if(Bt(n)!==n||n.tag!==1)throw Error(E(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(Ee(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(E(171))}if(n.tag===1){var s=n.type;if(Ee(s)){n=bs(n,s,l);break e}}n=l}else n=ct;return t.context===null?t.context=n:t.pendingContext=n,t=ft(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),ht(o,t),mt(o,i,a),i}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ic(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zi(e,t){ic(e,t),(e=e.alternate)&&ic(e,t)}function Jf(){return null}function Qi(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new zf(e,t,n!=null&&n.hydrate===!0),t=Ie(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,ii(t),e[un]=n.current,Os(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var o=t._getVersion;o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o)}this._internalRoot=n}Qi.prototype.render=function(e){Fo(e,this._internalRoot,null,null)};Qi.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Fo(null,e,null,function(){t[un]=null})};function wr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kf(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Qi(e,0,t?{hydrate:!0}:void 0)}function xo(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a._internalRoot;if(typeof o=="function"){var l=o;o=function(){var c=bi(i);l.call(c)}}Fo(t,i,e,o)}else{if(a=n._reactRootContainer=Kf(n,r),i=a._internalRoot,typeof o=="function"){var s=o;o=function(){var c=bi(i);s.call(c)}}tc(function(){Fo(t,i,e,o)})}return bi(i)}Kl=function(e){if(e.tag===13){var t=ke();mt(e,4,t),zi(e,4)}};ka=function(e){if(e.tag===13){var t=ke();mt(e,67108864,t),zi(e,67108864)}};Zl=function(e){if(e.tag===13){var t=ke(),n=pt(e);mt(e,n,t),zi(e,n)}};Xl=function(e,t){return t()};va=function(e,t,n){switch(t){case"input":if(ca(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Wr(r);if(!o)throw Error(E(90));Al(r),ca(r,o)}}}break;case"textarea":Nl(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};Ta=ec;jl=function(e,t,n,r,o){var a=x;x|=4;try{return xt(98,e.bind(null,t,n,r,o))}finally{x=a,x===0&&(Cn(),Le())}};Sa=function(){(x&49)==0&&(Of(),St())};Yl=function(e,t){var n=x;x|=2;try{return e(t)}finally{x=n,x===0&&(Cn(),Le())}};function lc(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wr(t))throw Error(E(200));return Qf(e,t,null,n)}var Zf={Events:[Un,an,Wr,Vl,_l,St,{current:!1}]},Dr={findFiberByHostInstance:Ht,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Xf={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ql(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||Jf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(kr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!kr.isDisabled&&kr.supportsFiber))try{qa=kr.inject(Xf),Ft=kr}catch(e){}var kr,qf=Zf,$f=lc,eh=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):Error(E(268,Object.keys(e)));return e=Ql(t),e=e===null?null:e.stateNode,e},th=function(e,t){var n=x;if((n&48)!=0)return e(t);x|=1;try{if(e)return xt(99,e.bind(null,t))}finally{x=n,Le()}},nh=function(e,t,n){if(!wr(t))throw Error(E(200));return xo(null,e,t,!0,n)},rh=function(e,t,n){if(!wr(t))throw Error(E(200));return xo(null,e,t,!1,n)},oh=function(e){if(!wr(e))throw Error(E(40));return e._reactRootContainer?(tc(function(){xo(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1},ah=ec,ih=function(e,t){return lc(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},lh=function(e,t,n,r){if(!wr(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return xo(e,t,n,!1,r)},sh="17.0.2",uh={__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:qf,createPortal:$f,findDOMNode:eh,flushSync:th,hydrate:nh,render:rh,unmountComponentAtNode:oh,unstable_batchedUpdates:ah,unstable_createPortal:ih,unstable_renderSubtreeIntoContainer:lh,version:sh},ch=et(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=uh}),Ji=ch.render;var Ki=Symbol(),Zi=Symbol(),Xi=Symbol(),Lo=Symbol();function _t(e,t){function n(...r){if(r.length>=e.length)return e(...r);{let o=(...a)=>n(...r,...a);return o[Ki]=e,o[Zi]=n,o[Xi]=r,o[Lo]=n[Lo],o}}return n[Ki]=e,n[Zi]=n,n[Xi]=[],n[Lo]=t||sc(e),n}function qi(e){return e[Ki]}function dh(e){return e[Zi]}function Oo(e){return e[Xi]||[]}function sc(e){return e[Lo]||e.name}function hh(){let e=[];return{test:t,getAllTests:n};function t(r,o){e.push(...Object.entries(o).map(([a,i])=>fh(r,a,i)))}function n(){return e}}function p(e,t,...n){let r=t(...n,e);if(typeof r=="function")throw new Error("The matcher function `"+$i(r)+"` returned a function instead of a boolean. You might need to pass another argument to it.");if(!r)throw new Wo([e,t,...n])}function fh(e,t,n){return{subject:e,scenario:t,fn:n}}var Wo=class extends Error{constructor(t){super("Expectation failed");this.expectArgs=t}};function ph(e){return e[e.length-1]}function uc(e){return e[0]}var jt=_t(function(e,t){return e(t)},"which"),L=_t(function(e,t){var n,r;if(mh(e))return e(t);if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((o,a)=>L(e[a],t[a]));if(e instanceof Function&&t instanceof Function)return qi(e)&&qi(e)===qi(t)?L(Oo(e),Oo(t)):e===t;if(e instanceof Date&&t instanceof Date)return e.toISOString()===t.toISOString();if(e instanceof Set&&t instanceof Set)return e.size===t.size&&[...e.values()].every(o=>t.has(o));if(e instanceof Error&&t instanceof Error)return e.message===t.message&&e.__proto__.constructor===t.__proto__.constructor;if(cc(e)&&cc(t)){let o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every(i=>L(e[i],t[i]))&&((n=e.__proto__)==null?void 0:n.constructor)===((r=t.__proto__)==null?void 0:r.constructor)}return e===t},"equals"),S=_t(function(e,t){return e===t},"is"),el=_t(function(e,t,...n){return!e(t,...n)},"not"),dc=_t(function(e){return/^\s*$/.test(e)},"isBlank");function cc(e){return!!e&&typeof e=="object"}function mh(e){return e instanceof Function&&dh(e)===jt&&Oo(e).length===1}function $i(e){return sc(e)||"<function>"}function hc(e){let t=[];return n(e);function n(s){var c;if(s===null)return"null";if(typeof s=="function")return r(s,o);if(typeof s=="string")return tl(s);if(typeof s=="bigint")return`${s}n`;if(Array.isArray(s))return r(s,a);if(s instanceof Date)return`Date(${s.toISOString().replace("T"," ").replace("Z"," UTC")})`;if(s instanceof RegExp)return String(s);if(s instanceof Error)return`${fc(s)}(${tl(s.message)})`;if(s instanceof Set)return r(s,l);if(typeof s=="object"){let v=(c=s==null?void 0:s.__proto__)==null?void 0:c.constructor;return v===Object||!v?r(s,i):`${fc(s)} ${r(s,i)}`}return String(s)}function r(s,c){if(t.indexOf(s)>-1)return"<circular reference>";t.push(s);let v=c(s);return t.pop(),v}function o(s){let c=Oo(s).map(n),v=$i(s);return c.length?Mr(v+"(",c,",",")"):v}function a(s){return Mr("[",s.map(n),",","]")}function i(s){let c=Object.entries(s).map(([v,D])=>`${gh(v)}: ${n(D)}`);return Mr("{",c,",","}")}function l(s){let c=[...s.values()].map(n);return Mr("Set {",c,",","}")}}function gh(e){return/^[a-zA-Z0-9_$]+$/.test(e)?e:tl(e)}function fc(e){return $i(e.__proto__.constructor)}function tl(e){return'"'+String(e).replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/"/g,'\\"').replace(/[\x00-\x1f\x7f]/g,yh)+'"'}function yh(e){let t=e.charCodeAt(0).toString(16);return"\\x"+(t.length<2?"0"+t:t)}function Uo(e,t){return t.split(`
`).map(n=>n&&Th(vh(e," "))(n)).join(`
`)}function vh(e,t){return Array(e+1).join(t)}var Th=e=>t=>e+t,Sh=_t(function(t,n){return n.slice(0,t.length)===t?n.slice(t.length):n});function Eh(e){return String(e).split(/\r?\n/)}function Ch(e){let t=Eh(e);dc(uc(t))&&t.shift(),dc(ph(t))&&t.pop();let n=/^[ \t]*/.exec(uc(t))[0];return t.map(Sh(n)).join(`
`)}function Mr(e,t,n,r){return t.length<2?e+t.join("")+r:e+`
`+Uo(2,t.join(n+`
`))+`
`+r}function mc(e){return Gr(this,null,function*(){let t=[];for(let n of e){let r=yield wh(n.fn),o=pc.map(a=>({type:"debug",args:a}));pc.length=0,t.push({test:n,error:r,instrumentLog:o})}return{results:t}})}function wh(e){let t;try{let n=e();if(n instanceof Promise)return new Promise(r=>{n.then(()=>r()).catch(r)})}catch(n){t=n}return Promise.resolve(t)}var pc=[],mm=_t(function(t,n){return n instanceof Wo&&L(t,n.expectArgs)}),Vo=`

`;function gc({results:e}){let t=!1,n=!1,r=[];for(let o of e){let a=!1;o.error&&(a=t=!0),o.instrumentLog.length&&(a=n=!0),a&&r.push(o)}return t?Dh(r):n?Mh(e.length,r):kh(e.length)}function Dh(e){return e.map(yc).join(Vo)+Vo+"Tests failed."}function kh(e){switch(e){case 0:return"No tests to run.";case 1:return"One test ran, and found no issues.";default:return`${e} tests ran, and found no issues.`}}function Mh(e,t){return t.map(yc).join(Vo)+Vo+Ph(e)+`, but debugging instrumentation is present.
Remove it before shipping.`}function Ph(e){switch(e){case 1:return"The test passed";case 2:return"Both tests passed";default:return`All ${e} tests passed`}}function yc({test:e,error:t,instrumentLog:n}){let o=[e.subject+" "+e.scenario];return n.length&&o.push(Uo(2,Ah(n))),t&&o.push(Uo(2,Rh(t))),o.join(`
`)}function Rh(e){return e instanceof Wo?Ih(e):Gh(e)}function Ah(e){return e.map(({args:t})=>vc("debug",t)).join("")}function Ih(e){return vc("expect",e.expectArgs)}function Gh(e){return hc(e)+" thrown"+Uo(2,Bh(e.stack))}function vc(e,t){return Mr(e+"(",t.map(hc),",",")")}function Bh(e){if(!e)return"";let t=Ch(e).split(`
`);return`
`+t.slice(0,Hh(t)).map(n=>n.replace(/(file:\/\/|http:\/\/[^/]*)/,"").replace(/^([^@]*)@(.*)$/,"at $1 ($2)")).join(`
`)}function Hh(e){let t=e.findIndex(n=>n.includes("errorFrom"));return t===-1?e.length:t}var gm=Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]}),Nh=hh(),{getAllTests:Tc}=Nh;function _(...e){}function Et(){return(+new Date%1e6/1e3).toFixed(3)}function Y(e,t=0){return isNaN(e)||e===Infinity||e===-Infinity?"--:--":e<0?"-"+Sc(-e,t):Sc(e,t)}function Sc(e,t){function n(i,l=Fh){return(i<10?"0":"")+l(i)}let r=Math.floor(e/3600),o=Math.floor(e%3600/60),a=e%60;return r>0?`${r}:${n(o)}:${n(a,Ec(t))}`:`${o}:${n(a,Ec(t))}`}function Xe(e){let[t,n]=(()=>{switch(!0){case e>86400:return["days",e/86400];case e>3600:return["hours",e/3600];case e>60:return["minutes",e/60];default:return["seconds",e]}})();return`${n.toFixed(1)} ${t}`}_("hoursMinutesSeconds",{"formats NaN"(){p(Y(0/0),S,"--:--")},"formats Infinities"(){p(Y(Infinity),S,"--:--"),p(Y(-Infinity),S,"--:--")},"formats negative numbers"(){p(Y(-1),S,"-0:01"),p(Y(-3661.12,2),S,"-1:01:01.12")},"formats single-digit seconds with leading zero"(){p(Y(0),S,"0:00"),p(Y(1),S,"0:01"),p(Y(9),S,"0:09")},"formats double-digit seconds"(){p(Y(10),S,"0:10"),p(Y(59),S,"0:59")},"formats minutes"(){p(Y(60),S,"1:00"),p(Y(61),S,"1:01"),p(Y(119),S,"1:59"),p(Y(120),S,"2:00"),p(Y(3599),S,"59:59")},"formats hours"(){p(Y(3600),S,"1:00:00"),p(Y(7200),S,"2:00:00"),p(Y(3661),S,"1:01:01"),p(Y(3610),S,"1:00:10"),p(Y(3600+600),S,"1:10:00"),p(Y(36001),S,"10:00:01")},"adds decimal places"(){p(Y(0,0),S,"0:00"),p(Y(0,1),S,"0:00.0"),p(Y(0,2),S,"0:00.00")},"formats fractional seconds"(){p(Y(1.23,2),S,"0:01.23")},"rounds decimals"(){p(Y(2.3456,2),S,"0:02.35")}});_("durationAsWords",{zero(){p(Xe(0),S,"0.0 seconds")},"two seconds"(){p(Xe(2),S,"2.0 seconds")},"two minutes"(){p(Xe(120),S,"2.0 minutes")},"two and a half minutes"(){p(Xe(150),S,"2.5 minutes")},"two and a third minutes"(){p(Xe(140),S,"2.3 minutes")},"two hours"(){p(Xe(7200),S,"2.0 hours")},"two days"(){p(Xe(48*3600),S,"2.0 days")}});var Fh=e=>e,Ec=e=>t=>t.toFixed(e);function Dn(e){var t;return(t=/v=(.{11})/.exec(e))==null?void 0:t[1]}function Cc(){return{getPlayerState(){return ae.UNSTARTED},getCurrentTime(){return 0},getVideoUrl(){return""},cueVideoById(){},playVideo(){},seekTo(){},getDuration(){return 0},addEventListener(){},removeEventListener(){},setVolume(){}}}function wc(e){return{getPlayerState(){return e.getPlayerState()},getCurrentTime(){return e.getCurrentTime()},getVideoUrl(){return e.getVideoUrl()},cueVideoById(...t){return console.debug(Et(),"player.cueVideoById",...t),e.cueVideoById(...t)},playVideo(...t){return console.debug(Et(),"player.playVideo",...t),e.playVideo(...t)},seekTo(...t){return console.debug(Et(),"player.seekTo",...t,Dn(e.getVideoUrl())),e.seekTo(...t)},getDuration(){return e.getDuration()},addEventListener(...t){return console.debug(Et(),"player.addEventListener"),e.addEventListener(...t)},removeEventListener(...t){return console.debug(Et(),"player.removeEventListener"),e.removeEventListener(...t)},setVolume(...t){e.setVolume(...t)}}}var ae={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};function Dc(e){return Gr(this,null,function*(){let t=yield xh();return new Promise(n=>{let r=new t.Player(e,{height:450,width:800,videoId:null,playerVars:{controls:0,disablekb:1},events:{onReady(){n(r)}}})})})}function xh(){return kc?Promise.resolve(window.YT):new Promise(e=>{var t;if(document.querySelector("script[src='https://www.youtube.com/iframe_api']")===null){let n=document.createElement("script");n.src="https://www.youtube.com/iframe_api";let r=document.getElementsByTagName("script")[0];(t=r.parentNode)==null||t.insertBefore(n,r)}nl.push(e)})}var kc=!1,nl=[];window.onYouTubeIframeAPIReady=()=>{kc=!0,nl.forEach(e=>e(window.YT)),nl.length=0};function Mc(e,t){let n=Gn(),r=Gn();r.current=e,Qt(()=>(n.current=setInterval(()=>{var o;return(o=r.current)==null?void 0:o.call(r)},t),()=>clearInterval(n.current)),[t])}function Pc(){let[e,t]=Pe(!1);return[e,()=>t(!0)]}function Pr(e){switch(e){case ae.BUFFERING:return"buffering";case ae.UNSTARTED:return"unstarted";case ae.CUED:return"cued";case ae.ENDED:return"ended";case ae.PLAYING:return"playing";case ae.PAUSED:return"paused";default:return""}}function Rc(e){return e.channel.getName()+" "+Pr(e.code)}function Ac(e){return C(zt,null,e.channels.map(t=>C("button",{key:t.getName(),onClick:()=>e.onChannelSelected(t)},t.getName())))}var rl={};Ye(rl,{episodes:()=>Lh,videos:()=>Oh});var Lh=[],Oh=`
    # Cortex

    zDAjDP1brqA 1:21:19 How to Make a TTRPG Space Adventure Using Cortex Prime Part 1
    nX8XB-T-hNE 1:32:04 How to Make a TTRPG Space Adventure Using Cortex Prime Part 2
    YKpjvZ37240 1:24:27 How to Make a TTRPG w/ Jasmine Bhullar | Underwater Cortex Prime Setting
    81-1ksVQ9pg 1:38:17 How to Make a TTRPG w/ Jasmine Bhullar | Underwater Cortex Prime Setting Part 2
    TQ5LbIw3mJs 1:21:26 How to Make a TTRPG w/ Danielle Radford | Soap Opera Sorcery Build
    RgntV6f-LVI 1:18:15 How to Make a TTRPG w/ Danielle Radford | Soap Opera Sorcery Build Part 2

    # Geek Gamers - Intro to Solo
    qdLYSh8rzfI 1:07:09 being your own GM demo
    46ERVhpRsRg 58:01 Dungeon Crawl DIY!
    ir6HHyBXyFg 23:27 A session starter
    IHl9yhoUhww 1:11:49 Solo RPG DIY
    hDND-lzxjyk 21:16 An Adventure Starter for You
    ZDJAGNsHN7o 26:58 creating settings for your solo RPG sessions
    im6gq4z5aRg 20:59 how to start a solo RPG??
    kaCM-QQwBQA 13:44 my solo RPG wallet revealed!
    fJzaVQvviWQ 1:05:33 RPG Adventuring, DIY!
    c78zydTroy8 20:08 My favorite game design books
    rx89-ScdnhE 20:40 Random table design
    peoJ-KC3SL0 28:17 Easy and cheap fantasy RPG rules for solo play
    7azbJxO3-Go 48:35 AD&D DM Guide: My best RPG book
    7Sut96WcbHg 43:17 Developing Themes in Solo RPG
    _zhTYnBj0Xo 49:53 Creating Story in Solo RPG
    W07rIanhQYQ 11:12 5 tips for matching an RPG and a game
    aFZH6MMOL3g 20:40 Favorite RPG resources
    9I4Qf-3GkDg 27:43 Solo RPG tutorial (the basics)
    SQzBJ3oLIxQ 37:38 NPCs in solo d&d
    iEmuToC6N3c 7:21 The Solo GM's Best Friend
    wpFU5qwLufI 17:10 Social Combat in RPGs
    9GBPTec5TZA 47:11 Easy Ways to be your own GM (solo RPGing)
    pfnFp83pvKM 9:35 Thinking Like a Solo GM

    # Assorted
    5DKUeyAHrfM 11:17 Dungeon Master's Toolkit: Progress Clocks
    teZQLC0Jlqs 8:35 Dungeon Master's Toolkit: Stealthy Scheme Roll

    iVrGcXto5RM 6:36 Using Progress Clocks from Blades in the Dark in your D&D Game
    CGUPmGZdZFM 38:10 What the Hex?! Intro to Hex Crawls Part 1 - Web DM
    JRocAzz-fzg 56:27 Dungeon world: Fronts Discussion
    Cb5QmchisOc 37:43 Dungeon World Basics 08 - Fronts
    4tFyuk4-uDQ 3:49 I've been running social encounters wrong for 5 years!? D&D 5E
    KGZnKBHTcmg 13:36 Let's Talk About Social Encounters: Dungeon Master Advice
    ZK29NiUkRRc 17:02 West Marches Planning - Quests: How are they generated?
    R5mmzbHd-x8 5:15 Open World D&D Made Easy in 5 Minutes
    vKQv4GC0N9Q 3:22 (animated) D&D How I DM.
    THtUhV_616s 1:18:59 Worldbuilding: The Lords of Capital Part One
    vfe-eNq-Qyg 10:31 The Silk Road and Ancient Trade: Crash Course World History #9
    jb09RvByv4g 9:23 Advanced Hexcrawling Kung Fu: Techniques and Tools
    EEPoXcdz0dU 1:21:16 GM Prep: Sandboxes From Scratch
    -k5jRghKSOU 52:51 Tokaido soundtrack complete
    mcKMbVXpRRA 20:56 On Worldbuilding: Place Names — countries, cities, places
    1mphOIMTl9Y 7:57 Hex Maps for Tabletop RPGs - QED's Corner
    eC-h1haFSIA 34:37 How to Hexcrawl (Dungeons & Dragons, OSR)

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
`;var ol={};Ye(ol,{episodes:()=>Wh,videos:()=>Uh});var Wh=[],Uh=`
  # Animated History
  _i54q6j3rtc 26:11 The Animated History of Sweden
  6wKur11fXHc 20:23 The Animated History of Argentina
  JEY00w1xtms 21:33 The Animated History of Korea
  l_5kpplGMS4 15:07 The Animated History of Mongolia
  zJvz3Ai9Ppw 17:02 The Animated History of Ukraine
  Q4kF0lRzGnI 25:41 The Animated History of Mexico
  JzYvFypr26U 16:10 The Animated History of Iceland
  TABlbP-tTkk 18:16 The Animated History of Croatia
  vTGDFhi7z4U 9:26 The Animated History of Christmas
  snFjkU85EqI 16:50 The Animated History of Switzerland
  8Zwi3XXLci8 25:10 The Animated History of Japan
  Rd0CV1nmWWY 7:01 The Animated History of The Netherlands
  Pd57hj5rWwA 7:50 The Animated History of England | Part 2
  z9Nn89imUpg 5:55 The Animated History of England | Part 1
  yoCsM3XBiFk 5:46 The Animated History of Hong Kong
  CJVDqlWJ7vY 7:32 The Animated History of the USSR
  QIDDIDS2Tjk 7:26 The Animated History of Australia
  XaYcSBYgcK4 8:04 The Animated History of Brazil
  BnUQAQ5spWE 10:02 The Animated History of Venice & Genoa | Italy Part 3
  zw2MzEorTu0 9:11 The Animated History of Germany | Part 2
  FjFh_GFmQLA 9:44 The Animated History of Denmark | Part 1
  GU5HC06c590 8:49 The Animated History of China | Part 2
  YP1qjTzxQNE 10:06 The Animated History of China | Part 1
  N5gguBcXhgg 10:11 The Animated History of Italy | Part 2
  8P1y2v0BwnM 5:11 The Animated History of Poland | Part 3
  Y16QLJOVP6s 8:06 The Animated History of Italy | Part 1
  iPAwnvyN6xw 7:56 Roman Mythology Animated
  8CwFHH_y2So 11:29 The Animated History of Poland | Part 2
  jV98XaAlg1o 12:33 The Animated History of Poland | Part 1
  dQvaGt9B6H0 10:03 The Animated History of Ireland
  TcXXJis03SE 10:01 The Animated History of Finland
  nPcfZLaMoAo 9:22 The Animated History of Spain
  EMF7mgycg9M 8:49 The Animated History of Russia | Part 1
  ZNk2QOn9oGE 4:59 The Animated History of France
  DgheO1Hbbt8 4:29 The Animated History of Germany | Part 1
  -qbZNM_SSAs 3:19 The Animated History of ISIS
  Jc11rgAIe44 4:03 The Animated History of Scotland

  # Empires Playlist

  26EivpCPHnQ 17:23 Three Kingdoms - OverSimplified
  fc7-Ja26AqQ 16:25 History of The Umayyad Caliphate | Casual Historian | Islamic History
  CO3senO4JZ0 1:34:16 Ancient China and Rome: 1000 Years of Contact // DOCUMENTARY
  XBk9KywTIgk 5:38 The rise and fall of history’s first empire - Soraya Field Fiorio
  BNURBs091pk 13:26 The Byzantine Empire Explained in 13 Minutes
  uficJwaZygw 4:41 All Korean kingdoms explained in less than 5 minutes ( Over 2,000 years of Korean history)
  BnOS90_cwQA 5:15 The rise of the Ottoman Empire - Mostafa Minawi
  Okph9wt8I0A 5:21 The rise and fall of the Byzantine Empire - Leonora Neville
  MNMoi5Af1SY 4:17 The city of walls: Constantinople - Lars Brownworth
  2KdM6AlyLUY 21:50 Yuezhi Migration and Kushan Empire - Nomads DOCUMENTARY
  8I8X7ZOdvTc 12:28 Could YOU have survived as a Roman Legionary during 2nd Invasion of Britain? - TO BRITAIN! - Part 1
  IFhns9MOUt8 5:12 The rise and fall of the Kingdom of Man - Andrew McDonald
  UO5ktwPXsyM 5:46 The rise and fall of the Inca Empire - Gordon McEwan
  m8bDCaPhOek 5:32 How did Polynesian wayfinders navigate the Pacific Ocean? - Alan Tamayose and Shantell De Silva
  6BALmDghybk 5:17 The most successful pirate of all time - Dian Murray
  LaLvVc1sS20 4:58 The history of tea - Shunan Teng
  eC3pKWGjM0c 15:34 All 8 Samurai Wars of the Heian Era (Before the BIG ONE) | History of Japan 59
  10Kc7NmPpME 52:20 Ancient Mesopotamian Warfare in Sumer and Akkad


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
`;var al={};Ye(al,{episodes:()=>_h,videos:()=>Vh});var Vh=`
# Full album videos

BecZdQvjGrY 54:49 In Gowan Ring - Compendium (Full Album)
cCXWuAm-cqA 1:15:08 In Gowan Ring - The Twin Trees (1997) [FULL ALBUM]
B3oAx9VmAdA 43:52 In Gowan Ring - Hazel Steps Through A Weathered Home
RqKtDn5ntms 53:37 Genesis - Selling England by the Pound (Full Album) 1973
jGZaH0JEiic 39:33 Genesis - Nursery Cryme (Full Album) 1971
54PIvzGOlmo 44:52 Moondragon - Synaesthesia (1996)
c8gylOvjVoM 31:59 Moondragon - Moondragon (their first album)
2F37ZjThB6s 1:13:09 Moondragon - Dream (1991)
dfkTPeaVU50 1:09:01 Lordryk (Moondragon) - Combined Chaos (Live)
bnaTLcFpQnE 45:45 Manu Chao - Clandestino (Full Album)
tIGW_TEwCXw 46:50 #TheBeatles #AbbeyRoad #1969
08ozElWwpzc 35:28 Nektar - Remember The Future 1973 - Full Album - Digitally Remastered 2002
npsgOn1QY1M 41:53 Pink Floyd - Dark side of the moon - HD - High Audio Quality (Full Vinyl Album)
_zmeye7-HOE 48:54 Evanescence - Fallen (FULL ALBUM)
p0D-w-HhB64 47:46 Dire Straits - Brothers In Arms {Reissue} [Full Album]
Jl1_m1OtkpE 1:01:28 Brian Eno - New Space Music

# Singles

Gf1RHyuuLnI 4:59 Kirsten Bråten Berg - Heiemo og Nykkjen(folkesang)
Tt8p5AxJn18 4:14 Sinéad O'Connor - Mna na h Eireann (Women of Ireland)
Dhgi3wb_GB8 4:25 Ripoff Raskolnikov - Azt gondoltam eso esik
apE1n63ZhMQ 3:39 Muzsikás: Repülj madár, repülj (Fly Bird, fly) + pics of Hollókő (read the info)
8n5u_IfVLd0 5:45 Cirque Du Soleil O, Gamelan
`,_h=[`
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
    E7chnYnI64Q 4:23 End of All Hope (Remastered)
    n1G5WiMoRjw 4:08 The Phantom Of The Opera
    SXI9hoyymN8 4:33 Sleeping Sun (Remastered)
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
    lqwybpJgnPg 3:50 Íslandsljóð - The Iceland Song
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
    7VZlCTU7Wok 4:17 Seven Yellow Gypsies
    QSALP2o0ZlU 3:34 Beggar Man
    m9ec7bk-xcs 4:28 Swansea Town
    XH-QpfZsHJw 3:57 Bellman
  `,`
    # Arany Zoltán - The Last of the Troubadours
    OxLBWE2BSog 3:31 Medieval music - Ai vist lo lop
    qgZp9DoW3CY 2:54 Medieval music - Saltarello la Regina
    ZlipG4F3WeE 3:02 Medieval music - In taberna quando sumus
    NdSJYgjMIfQ 2:42 Medieval music - Estampie
    m3P2xWSS5YA 2:42 Medieval music - Santa Maria strela do día
    yvjuv4IIKcU 3:55 Renaissance music - Tourdion
    Xra_9AvEwVo 5:00 Ich Was Ein Chint so Wolgetan
    5eMa_C9f1zI 2:30 Medieval music - Ecco la primavera
    T2bauLl38cU 2:34 Saltarello Della Pioggia
    nXDblTqdbvs 1:00 Je Ne L'ose Dire
    tn6U2utoIko 3:57 Medieval music - Non é gran cousa
    mw-VhXNvj9Q 4:15 S'om Pugues Partir Son Voler
  `,`
    # Arany Zoltán - Celtica
    hRJT-ZC-o0Y 3:27 King of the Fairies
    sKuC9Vle3Jo 4:36 Ye Jacobites by Name
    MkV-eJ6awpw 3:21 Celtic music from Galicia - Muiñeira de Chantada
    n_efjdY5Jl0 3:10 Celtic music from Brittany - Kemmesk
    Km92ScBYo3M 3:01 Cam Ye O'er Frae France
    QTYr3ECNOVU 3:13 Fraser's Jig
    CvZ3pxZZ_PI 3:39 Gaelic folk song - Beidh aonach amárach
    POwIfgjf4lU 2:16 Folk music from Wales - Morfa Rhuddlan
    GS5mFVlPYpw 3:50 Tri Martolod
    BKC43U1xQMw 3:40 Folk music from Isle of Man - Three little boats
    gUIBeH0TnBs 4:26 Folk music from Brittany - Ar Soudarded Zo Gwisket E Ruz
    5iRW95P1LRY 5:00 Galician folk song - Tua nai e meiga
  `,`
    # Arany Zoltán - Laudator Temporis Acti
    J_zjgZJOFl4 4:03 Medieval music - Palästinalied
    pDtWM6L75l4 2:17 Medieval music - Mirie it is while sumer y-last
    EAL36dauebs 2:58 Renaissance music - Pase el agoa
    Jg5x6lxdJxc 4:27 Medieval music - Laudar vollio per amore n
    jmpfQYARVxI 2:14 Medieval music - Platerspiel
    4mG76NcTecI 6:17 Medieval music - Deinceps ex nulla
    bbgHGPLjPFc 2:15 Old English dance - Parson's Farewell by Arany Zoltán
    lJOLb1GSvws 3:00 Renaissance music - Riu Riu Chiu
    D4nHUUXcMHU 4:50 Medieval music - Da que Deus mamou
    PxDzYJQ2DkQ 2:30 Renaissance music - Schiarazula Marazula
    hApROcR510k 3:26 Renaissance music - Greensleeves
    LePaNDiie-w 3:33 Medieval music - Saltatio mortis by Arany Zoltán
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
  `];var il={};Ye(il,{episodes:()=>jh,videos:()=>Yh});var jh=[`
    BShj3SPzpSk 7:15 Eternal Reaches - Lodaris Sub-sector worlds
    Thj22uZuWa4 4:38 Eternal Reaches GIVEAWAY - Mongoose Traveller 2ed Starter Set - Competition NOW CLOSED
    11_7X-Ey7AA 22:56 Eternal Reaches - Lodaris Sub-Sector Interstellar Factions
    _lorRfxn-sU 13:06 Eternal Reaches - The Intersection - Traveller Setting
  `,`
    4-OoJwwDLm4 1:52:32 RenSpace - Traveller MgT2e Worldbuilding - Session 1
    2OFEebuUg9M 1:15:54 RenSpace - Traveller MgT2e Worldbuilding - Session 2
    uQsqPKM9_jo 1:27:35 RenSpace - Traveller MgT2e Worldbuilding - Session 3
  `],Yh=`
  # Templin Institute | Science Fiction

  KYEddTRGOxI 7:18 Harvesters | Independence Day
  vhj8uOE6KkE 6:45 Rodger Young Type Corvette Transport | Starship Troopers
  xevMy_dl1_g 6:12 United Defense Force | Edge of Tomorrow
  BqcrGNr6xWQ 12:33 Cylons | Battlestar Galactica
  7nhCYGwvGjY 10:00 The Ori | Stargate
  zb96yWd30LY 8:41 United Earth Federation | Supreme Commander
  d72x3BHyZ3E 8:11 Spartan Operations | Halo
  mqMPpTRrySc 9:00 Breen Confederacy | Star Trek
  Vd8nLW6mjEQ 5:33 A First Look At The 25th Century Starfleet | Star Trek
  56_TqNCABtc 11:25 D'Deridex Class Romulan Warbird | Star Trek
  x_7pwreWdto 8:58 House Atreides | Dune
  tvoh6hUbNqI 8:01 Jabba's Criminal Empire | Star Wars
  wq_7oLhbMkE 9:19 Nation 01 // The Machines | The Matrix
  YiQuqUo25bc 9:52 United States Colonial Marine Corps | Alien
  8aUi3Nf3_Ek 13:18 The Flood | Halo
  RvcnnvEwDVk 5:01 Pan-Asian Coalition | Battlefield 2142
  1JQh4jGylFM 7:57 USG Ishimura // Planet Cracker Class Industrial Ship | Dead Space
  VeOLDSunFWo 4:58 Ornithopters | Dune
  3gsIS6xNs8Y 8:41 Citadel Council | Mass Effect
  VhoDNBeaY5k 14:01 Atlas Corporation | Call of Duty: Advanced Warfare
  _HyjQO2vPLY 5:32 Sentinel Hunter-Killers | The Matrix
  FZ45yU85w8c 7:57 Republic of Liberty | Freelancer
  39qKdC5QXSc 6:24 Nar Shaddaa | Star Wars Legends
  fwbttyaokHg 15:41 United Empire of Earth | Star Citizen
  FTNwAwa0I-k 8:41 Chernobyl Exclusion Zone | S.T.A.L.K.E.R.
  saOla22AFnU 9:54 Deep Space Nine | Star Trek
  S3yiGCe3adg 7:26 War Against the Machines // Judgement Day | Terminator
  Rqn79oPcs-M 5:04 Lord Humongus' Marauders | Mad Max
  mubr5zYCz4Q 7:10 Sera | Gears of War
  Ej9mvtY7Yo8 4:53 Auraxis | Planetside
  QjxSHngiXJk 16:57 Adeptus Custodes | Warhammer 40,000
  gJzBYraabec 18:10 The Emperor of Mankind | Warhammer 40,000
  78JmdVyeU0k 19:39 North American Commonwealth | Frontlines
  2nqJH4X3c_4 5:08 Red Bamboo | Godzilla (Showa)
  S9iJ3_-d3XM 10:04 181st Imperial Fighter Wing | Star Wars Legends
  tFlvg1OOpMU 11:14 Rebel Alliance Starfighter Corps | Star Wars
  uUAtgENs62Y 7:39 Scolar Visari | Killzone
  aj6COIw8vOc 41:54 Building Your Interstellar Navy | Ship Types, Naming Conventions, & Fleet Doctrines
  Sp9uZEwnSbM 6:23 Task Force 29 | Deus Ex
  1h22jb--4Z0 7:04 Area X | Annihilation
  kCSTBnOByvs 22:22 Necron Dynasties | Warhammer 40,000
  0aLTJ5SjL4c 13:58 Imperial Fists Chapter | Warhammer 40,000
  l5JLVQ6j2S4 4:50 Blue Sun | Firefly
  fVzL1g-nezo 17:39 Could the Galactic Empire Take Over The Earth?
  t3MtPlYq0yA 11:49 Global Defense Initiative | Command and Conquer
  QJ0eOVNEc7g 12:18 Starfleet Command | Star Trek
  8yB7gYvJaH0 5:31 Mars | Destiny
  nXf4ijlTOgQ 23:14 Galactic Empire | Star Wars
  kSmZmXqJcJg 7:11 The Heritor | Age of Wonders: Planetfall
  x3HmL8usVMw 4:24 Democratic Order of Planets | Futurama
  UOeNl5IScDE 8:36 Mandalorian Clans | Star Wars
  j7CMrKUAnTM 12:10 Krogan Clans | Mass Effect
  nNwi5US6Qfk 21:31 Astra Militarum // Imperial Guard | Warhammer 40,000
  G70cEyFeKP4 6:47 The Syndicate | Age of Wonders: Planetfall
  29s8UaMsd4Q 6:15 The Amazons | Age of Wonders: Planetfall
  hqodyy-UgCQ 5:54 The Dvar | Age of Wonders: Planetfall
  KHD5R3yKido 6:44 Kir'Ko Swarm | Age of Wonders: Planetfall
  SHM2Mrzd9yA 7:11 Vanguard Expeditionary Forces | Age of Wonders: Planetfall
  _HjJRHvxXfU 11:06 Star Union | Age of Wonders: Planetfall
  q-1BoZ1PruM 4:54 The Koprulu Sector | StarCraft
  10FHXR71DsQ 11:35 United Nations | The Expanse
  21P0nqPNz1w 15:45 The Role of Artificial Intelligence in Science Fiction | Detroit: Become Human | Hello Future Me
  EGwQTsW7OZU 17:51 The Orks | Warhammer 40,000
  a3Kjh_yRRkc 8:10 The Red Line | Metro 2033
  JDE4LHqilVU 10:03 The Chimeran War | Resistance
  geh9yajkhgQ 9:54 Grand Moff Tarkin | Star Wars
  TZVO8vCjYK0 9:07 The Combine | Half-Life
  _XG1d6GdTII 6:38 Battlefleet Gothic | Warhammer 40,000
  hPS51S7FxPM 6:09 Echo Base | Star Wars
  JrZ-yq7-9pQ 5:48 Snowpiercer Train | Snowpiercer
  5Geybk8AwZg 7:40 New Helghan Republic | Killzone
  nkWRjrEq4lI 10:20 Cadia | Warhammer 40,000
  X1M9wQVB5bA 6:48 Pan Pacific Defense Corps | Pacific Rim
  5Laftg2pVLs 8:05 Aperture Science | Half Life
  4ImNht75rRc 12:48 Caesar's Legion | Fallout
  oGIDD5rD7Tw 7:23 Omni Consumer Products | RoboCop
  3XWDIE0jrgo 9:24 Terran Confederation | Wing Commander | Audio Log Pilot
  tkXsyRQRZ8M 10:35 The Brotherhood of Steel | Fallout
  vgxGV4GqPk4 6:41 Coruscant | Star Wars
  W1wR1-6BY64 8:15 Death Guard Legion | Warhammer 40,000
  CSOHCPfAWDU 9:13 Geth Consensus | Mass Effect
  SELfIwsfeEI 8:12 The World of Infinite Warfare Doesn't Work
  pStKgw5zMH8 6:01 Ellen Ripley | Alien
  MquIxA_yUJY 7:10 S.H.I.E.L.D. | Marvel Cinematic Universe
  qOFtx1AarFk 4:41 Zoë Alleyne Washburne | Firefly
  QgHXba9TgG0 5:33 Tyrell Corporation | Blade Runner
  JGI3M77PEUI 6:41 Rapture | BioShock
  SNe9BbwnSts 5:34 The Justice Department | Judge Dredd
  MzXtXSUcwic 7:52 Marshal Jim Raynor | StarCraft
  8ULWOL0IbsQ 5:26 Dalek Empire | Doctor Who
  k5eIHKV_pL8 10:57 An Overview & History of the UNSC Navy | Halo Lore ft Templin Institute
  VhCqE07r9Xw 6:41 The Citadel | Mass Effect
  fDtj-f0TwYI 8:53 InGen | Jurassic Park
  ND7d7O9puSY 7:16 Are BattleMechs Useless in Combat? | Battletech | Debates Pilot
  8NHB96xd7Wc 10:56 Star Kingdom of Manticore | Honor Harrington | Audio Log Pilot
  zhuV9ut0GS8 14:18 The Covenant | Halo
  TFDvtXDFJes 8:12 Immortan Joe's Empire | Mad Max
  6rd6dmNEImI 9:48 Carja Sundom | Horizon Zero Dawn
  8bFrGsBmK18 9:34 The Maquis | Star Trek
  IGxjMhMMa-g 8:20 Weyland-Yutani Corporation | Alien
  5X_wUoKV_0U 11:05 Terran Dominion | StarCraft
  1aqK-nMdAHg 9:39 Grand Admiral Thrawn | Star Wars Legends
  f_hJKT7-yuU 5:46 Multi National United | District 9
  bEQame19KVY 5:15 An Overview of The Expanse | Overview Pilot
  bKHUFeHRAEA 7:18 William Adama | Battlestar Galactica | Dossier Pilot
  9ofT1JrwKyY 4:50 Arrakis Sandworms | Dune | Bestiary Pilot
  Z9xMnVfg_n0 16:01 Imperium of Man | Warhammer 40,000
  aIYGTkhASAQ 12:49 Systems Alliance | Mass Effect
  tFVi2rTKVRA 7:54 United Colonies of Kobol | Battlestar Galactica
  UDxQHhRLOTo 9:23 Stargate Command | Stargate
  GTWeLPvnagY 11:24 Minbari Federation | Babylon 5
  58aaAiIhL0I 10:26 Realm of Ultramar | Warhammer 40,000
  vGPORFUhs2g 10:47 Helghan Empire | Killzone
  d5ax_vbHfQs 9:34 United Nations Space Command | Halo
  0SzkxfsVKwY 10:36 The Enclave | Fallout
  -mp-MDCpc9M 4:52 Hawkins National Laboratory | Stranger Things
  DHAQqez3cKk 4:27 Black Mesa | Half-Life
  yN_pGoj7Dnk 4:43 Transdimensional Citadel of Ricks | Rick & Morty
  GDbPvaicYoY 9:22 Klingon Empire | Star Trek
  nJABKm6gM0I 3:44 Union of Allied Planets | Firefly
  ZmSBn-BiXXM 10:08 Turian Hierarchy | Mass Effect
  07DWHRKlUhA 8:19 Romulan Star Empire | Star Trek

  #TravellerCon

  f_JrMGImGAQ 1:09:00 Interview with Craig A. Glesner of Thornwood-Daarnulud LLC - Mayday Traveller RPG Day 2020
  3Z4mPILP8lo 19:21 Traveller RPG Cybernetic Implants: Live Player Panel- Mayday Traveller RPG Day 2020- Part 1
  b5ZNcIwa8JA 39:29 Interview with Neil Thorpe of 2D Storyteller - Mayday Traveller RPG Day 2020
  CpWF9Hfgv5c 20:48 Live Player Panel Discusses Character Backstory- Mayday Traveller RPG Day 2020- Part 2
  U41AyWTX8ls 1:00:43 Interview with Paul Elliott of Zozer Games - Mayday Traveller RPG Day 2020
  LO_WTUlzF1A 2:23 Discussion of Solo and Hostile: Live Player Panel- Mayday Traveller RPG Day 2020- Part 3
  15zarST8jtw 38:02 Interview with Omer Golan-Joel of Stellagama Publishing - Mayday Traveller RPG Day 2020
  pvQKl-S1iXI 18:03 Traveller Character Development: Live Player Panel- Mayday Traveller RPG Day 2020- Part 4
  VQK0oU9Plsk 46:07 Interview with John Watts of Independence Games - Mayday Traveller RPG Day 2020
  d3ghFcFBV4Y 13:45 Playing Traveller with Your Kids: Family Game Night- Mayday Traveller RPG Day 2020- Part 5
  JbE9exAyhV8 51:26 Interview with Mike Leonard of El Cheapo Products - Mayday Traveller RPG Day 2020
  625aMawJEVw 6:29 Diagnosing Space Madness - Live Player Panel - Mayday Traveller RPG Day 2020 - Part 6
  p9xuEr7c3Bg 42:34 Interview with Matthew Sprange of Mongoose Publishing - Mayday Traveller RPG Day 2020
  _ilEP-NtnT4 16:44 Traveller Character Backstory - Live Player Panel - Mayday Traveller RPG Day 2020 - Part 7
  Tg9Gr5NR0ZQ 1:09:29 Interview with Marc Miller of Far Future Enterprises - Mayday Traveller RPG Day 2020
  1lqMmCmwDas 57:58 Live Player Panel and Credits - mayday traveller rpg day 2020 - part 8

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

  RbIwm94P-Sk 31:14 Behind the Claw - Episode 001
  mtnAHBwvdZU 24:34 Behind The Claw - Episode 002
  G3SQBSb471M 24:58 Behind the Claw Episode 3
  9RdPrQiXukc 23:56 Behind The Claw Episode 004
  WmdrTCwhSCo 22:47 Behind The Claw Episode 005
  yTnLdsI48eg 26:25 Behind The Claw 021
  hP-7mBLJYfE 26:30 Behind The Claw Episode 022
  UscQTU_jLlo 23:33 Behind The Claw Episode 023
  sBaETy8Ac48 24:04 Behind The Claw 024
  LxIOJPS1ZF4 26:44 Behind the Claw 025
  EXmpNLhjvoM 26:28 Behind the Claw episode 26
  T1lO5HMpPNY 20:34 Behind the Claw episode 027
  pSY07d6lKDY 21:49 Behind The Claw 028
  f4ZclYQcrIE 21:49 Behind The Claw 029
`;var ll={};Ye(ll,{episodes:()=>bh,videos:()=>zh});var bh=[],zh=`
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
  bDe8EXaKg3I 1:53:52 Dune Ambient Music | Hans Zimmer
  k3fz6CC45ok 1:52:42 Vangelis - Blade Runner Soundtrack (Remastered 2017)
  7aDpCIDYDc8 1:06:23 Songs for Dead Planets
`;var sl={};Ye(sl,{episodes:()=>Qh,videos:()=>Jh});var Qh=[],Jh=`
    MHPAb_QNPZg 52:10 TVB Drama | 一劍鎮神洲 01/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    pbY2tNCNkRU 37:53 TVB Drama | 一劍鎮神洲 02/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    ewu9i0BO1BM 46:16 TVB Drama | 一劍鎮神洲 03/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    HZNpqf6Mxa0 44:16 TVB Drama | 一劍鎮神洲 04/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    dGlGISAch-I 47:09 TVB Drama | 一劍鎮神洲 05/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    V8LqxXDxBi0 50:20 TVB Drama | 一劍鎮神洲 06/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    Hkb3SC22dtw 46:54 TVB Drama | 一劍鎮神洲 07/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    kGU_duo23JM 49:46 TVB Drama | 一劍鎮神洲 08/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    9evI6nh58JQ 51:15 TVB Drama | 一劍鎮神洲 09/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    RdwnSQ0fNqY 42:22 TVB Drama | 一劍鎮神洲 10/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    3qF9eOqgeHw 46:10 TVB Drama | 一劍鎮神洲 11/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    gxtKDwoUa74 45:31 TVB Drama | 一劍鎮神洲 12/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    ifF7DgTljUQ 49:42 TVB Drama | 一劍鎮神洲 13/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    bF2ybeDxRZg 40:06 TVB Drama | 一劍鎮神洲 14/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    Y_-1ww3wqyE 44:01 TVB Drama | 一劍鎮神洲 15/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    S1IajcmRL38 46:58 TVB Drama | 一劍鎮神洲 16/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    RqoTS3PkWts 48:17 TVB Drama | 一劍鎮神洲 17/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    cqYuToGVJrc 49:15 TVB Drama | 一劍鎮神洲 18/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    mAyjSLrtHL0 44:43 TVB Drama | 一劍鎮神洲 19/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    v_ML7jHPxps 48:32 TVB Drama | 一劍鎮神洲 20/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    AfXwsCJZv84 48:33 TVB Drama | 一劍鎮神洲 21/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    uWnyLFLSzAY 48:58 TVB Drama | 一劍鎮神洲 22/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    mZVif3zLqDs 40:48 TVB Drama | 一劍鎮神洲 23/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    hOuBbcsN0mA 49:32 TVB Drama | 一劍鎮神洲 24/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978
    Ow0thiXQ0i8 45:15 TVB Drama | 一劍鎮神洲 25/25 | 馮寶寶、鄭少秋、陳鴻烈、黃杏秀、歐陽佩珊 | 古裝武俠 | 粵語中字 | TVB 1978

    liyJmN6Zl28 42:32 TVB Drama | 呂四娘 01/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    oldkvAyjubE 41:33 TVB Drama | 呂四娘 02/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    17xkyK4MbGY 41:29 TVB Drama | 呂四娘 03/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    b2ljRTP8vfA 39:36 TVB Drama | 呂四娘 04/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    X50sYUgC61g 41:05 TVB Drama | 呂四娘 05/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    Q0-fH4OTMZU 41:44 TVB Drama | 呂四娘 06/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    YsZWwEsATcg 41:38 TVB Drama | 呂四娘 07/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    pza00z7I6-s 42:16 TVB Drama | 呂四娘 08/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    TuMIqMsNB6A 39:49 TVB Drama | 呂四娘 09/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    6u-1GGtZSU4 40:34 TVB Drama | 呂四娘 10/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    8S5rB_DoyLY 42:08 TVB Drama | 呂四娘 11/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    uEXtzqIbHvQ 39:45 TVB Drama | 呂四娘 12/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    HhSvKrLXCCw 40:30 TVB Drama | 呂四娘 13/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    JLSpWzei2ts 42:09 TVB Drama | 呂四娘 14/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    QKCLH_fkNkU 41:20 TVB Drama | 呂四娘 15/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    BcoPYv_-gco 42:26 TVB Drama | 呂四娘 16/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    O62Nnb0R4Lw 42:22 TVB Drama | 呂四娘 17/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    buZPaoa3nSM 38:41 TVB Drama | 呂四娘 18/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    7Z6QQXjKe_I 38:34 TVB Drama | 呂四娘 19/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    krMzCCHUJ2g 40:21 TVB Drama | 呂四娘 20/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    on4OAHXpbCM 42:06 TVB Drama | 呂四娘 21/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    peDLXhp0dn8 40:28 TVB Drama | 呂四娘 22/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    DA8Kor9XpPI 42:08 TVB Drama | 呂四娘 23/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    9QvLHhxYEdo 41:35 TVB Drama | 呂四娘 24/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984
    C-ok5_VsmHs 37:06 TVB Drama | 呂四娘 25/25 | 呂良偉、鄭裕玲、任達華、惠天賜 | 古裝 | 粵語中字 | TVB 1984

    b6Tkqi4jbCA 47:17 楊家將 01/6 | 劉德華、黃日華、周潤發、苗僑偉、梁朝偉、吳鎮宇 | 古裝動作 | 粵語 | TVB 1985
    UGggRztpn_8 42:50 楊家將 02/6 | 劉德華、黃日華、周潤發、苗僑偉、梁朝偉、吳鎮宇 | 古裝動作 | 粵語 | TVB 1985
    iJwk2H2Wp_Y 41:37 楊家將 03/6 | 劉德華、黃日華、周潤發、苗僑偉、梁朝偉、吳鎮宇 | 古裝動作 | 粵語 | TVB 1985
    Nzq4PzVQ1YE 55:46 楊家將 04/6 | 劉德華、黃日華、周潤發、苗僑偉、梁朝偉、吳鎮宇 | 古裝動作 | 粵語 | TVB 1985
    mt9zmzt_MF0 52:51 楊家將 05/6 | 劉德華、黃日華、周潤發、苗僑偉、梁朝偉、吳鎮宇 | 古裝動作 | 粵語 | TVB 1985
    lvbgJadfHPY 37:40 楊家將 06/6 | 劉德華、黃日華、周潤發、苗僑偉、梁朝偉、吳鎮宇 | 古裝動作 | 粵語 | TVB 1985

    sQsLNYNHR1c 45:34 TVB Drama | 南拳北腿 01/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    7tyDXPm1TVI 45:32 TVB Drama | 南拳北腿 02/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    nzGMyw5UhJk 46:21 TVB Drama | 南拳北腿 03/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    f2ml_x5TkLo 46:14 TVB Drama | 南拳北腿 04/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    zF_1TyOVXVo 45:38 TVB Drama | 南拳北腿 05/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    UQ_QLMiPU0k 45:27 TVB Drama | 南拳北腿 06/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    gO2q_PSomG8 45:34 TVB Drama | 南拳北腿 07/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    7x9pQSJCayg 45:38 TVB Drama | 南拳北腿 08/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    okURZ5jqBD8 45:11 TVB Drama | 南拳北腿 09/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    zRMbswrhw3s 43:08 TVB Drama | 南拳北腿 10/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    GlxzVLyvvqY 44:57 TVB Drama | 南拳北腿 11/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    fAAU2NLJOf8 45:57 TVB Drama | 南拳北腿 12/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    wKJy7-_1Lcg 44:31 TVB Drama | 南拳北腿 13/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    jzT8QcSAfrQ 42:16 TVB Drama | 南拳北腿 14/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    tRVk3jrnobY 45:01 TVB Drama | 南拳北腿 15/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    pCfVLZ_KpoI 45:20 TVB Drama | 南拳北腿 16/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    N_98aAvIlLQ 45:41 TVB Drama | 南拳北腿 17/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    6EBKXUjtsQ0 45:27 TVB Drama | 南拳北腿 18/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    Tv9oKUMOIxs 45:31 TVB Drama | 南拳北腿 19/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995
    9VBXyAqGFLM 46:04 TVB Drama | 南拳北腿 20/20 | 梁小冰、李賽鳳、樊少皇、麥長青、郭德信、熊欣欣 | 古裝武俠 | 粵語中字 | TVB 1995

    ZZG3CqKp1xM 46:01 絕代雙雄第一集 | 隋唐群英會 01/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    RaVkNxLoi_k 45:57 絕代雙雄第二集 | 隋唐群英會 02/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    Qa95caZAYno 46:07 絕代雙雄第三集 | 隋唐群英會 03/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    blbMC1ralNk 45:43 絕代雙雄第四集 | 隋唐群英會 04/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    8z2025A8ngY 45:43 絕代雙雄第五集 | 隋唐群英會 05/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    uREM87b_qmA 45:38 風塵三俠第一集 | 隋唐群英會 06/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    B2zf7cuu_Xw 45:45 風塵三俠第二集 | 隋唐群英會 07/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    9z8O5RJM2S8 45:51 風塵三俠第三集 | 隋唐群英會 08/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    b0j0Ijlg1YQ 45:52 風塵三俠第四集 | 隋唐群英會 09/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    WR7nSFwgfcI 45:40 風塵三俠第五集 | 隋唐群英會 10/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    jjgv-Zc0SBk 45:33 瓦崗寨風雲第一集 | 隋唐群英會 11/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    klmw-565kSA 46:02 瓦崗寨風雲第二集 | 隋唐群英會 12/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    rwmGvKXKbm8 45:39 瓦崗寨風雲第三集 | 隋唐群英會 13/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    GvMuCaEB0EQ 45:55 瓦崗寨風雲第四集 | 隋唐群英會 14/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    Jh-8SHmQtxo 45:56 瓦崗寨風雲第五集 | 隋唐群英會 15/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    lTwgt4BNED4 45:40 義師勤王第一集 | 隋唐群英會 16/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    E4x_CU819Cc 45:32 義師勤王第二集 | 隋唐群英會 17/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    VSaujXFTRx8 45:37 義師勤王第三集 | 隋唐群英會 18/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    5wMIrzPWT78 45:36 義師勤王第四集 | 隋唐群英會 19/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996
    c4YhMBKn1To 45:29 義師勤王第五集 | 隋唐群英會 20/20 | 林嘉華、張兆輝、伍衛國、譚耀文、曹眾、陳妙瑛 | 古裝武俠 | 粵語中字 | TVB 1996

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

    gfrGJc3c8Ek 43:45 太極 01/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    18ukcv0vym4 43:43 太極 02/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    D92mah_buog 43:18 太極 03/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    Bqf55dA1pr4 43:25 太極 04/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    5azhfJCC_Jk 43:33 太極 05/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    HcpicGzFIVU 43:33 太極 06/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    dIRu-muoLLk 43:32 太極 07/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    X2-T9wY-DPQ 43:40 太極 08/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    Yy_j31lRGtk 43:33 太極 09/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    5tYV71h-6ik 43:32 太極 10/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    MHCxT-My7PU 43:22 太極 11/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    KvkbG3ODDCk 43:45 太極 12/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    qnut0Zavsmg 43:45 太極 13/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    KjgBEEuqJWg 43:39 太極 14/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    3Q_Jzv8vI70 43:45 太極 15/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    CO6ReyyG80E 43:33 太極 16/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    rPY7oaZbEV0 43:39 太極 17/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    JHrP5SyU1W4 43:26 太極 18/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    5ltPE8IkDPs 43:40 太極 19/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    UeoBtCwxXjE 43:39 太極 20/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    Nx89vuftc0M 43:35 太極 21/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    8GnujcZnXR8 43:20 太極 22/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    CWlJZQDW-r4 43:13 太極 23/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    l_PKQBzXcSg 43:46 太極 24/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008
    bPdlfUNptlg 43:38 太極 25/25 | 趙文卓、林峯、胡杏兒、馬國明、吳美珩、秦沛 | 民初武打 | 粵語中字 | TVB 2008

    NUwKCtFG-gw 43:48 包青天再起風雲 01/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    TjeyUzyaLi0 43:42 包青天再起風雲 02/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    PH0QDf1mRnc 44:02 包青天再起風雲 04/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    Bhx3X0PO3no 44:02 包青天再起風雲 03/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    8bQY7nPcps0 43:56 包青天再起風雲 05/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    wZrwyqz_41Q 44:00 包青天再起風雲 06/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    xKOorez7ieM 44:00 包青天再起風雲 07/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    4Xzm3Vp5Z78 43:48 包青天再起風雲 08/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    G2qMf-vwHWw 44:01 包青天再起風雲 09/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    iRi2Ehhb-oo 44:01 包青天再起風雲 10/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    9-TL1V2kmfI 43:55 包青天再起風雲 11/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    ITBnDKGGDLU 44:00 包青天再起風雲 12/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    vBWOPbP7ZdE 43:55 包青天再起風雲 13/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    KcVX1OTM0h0 43:55 包青天再起風雲 14/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    _THstURHwfk 43:43 包青天再起風雲 15/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    JzHyETp8M6g 44:02 包青天再起風雲 16/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    y9VJ-eBTZM4 44:01 包青天再起風雲 17/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    Uw71g-Supvw 43:58 包青天再起風雲 18/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    yoMuUX8BsP8 43:57 包青天再起風雲 19/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    dEiGnmXcUFg 43:59 包青天再起風雲 20/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    rr0sUCd6l90 43:56 包青天再起風雲 21/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    GCAPB86ptts 43:42 包青天再起風雲 22/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    FMcsDqvvhzY 43:48 包青天再起風雲 23/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    NAxg1lUk2Mo 43:44 包青天再起風雲 24/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    8EU2a3QGqZ4 44:01 包青天再起風雲 25/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    MPFe0ZA4MCU 43:41 包青天再起風雲 26/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    0CMG_C4BAKA 43:56 包青天再起風雲 27/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    FIl6HM5vQag 43:56 包青天再起風雲 28/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    -llByQ7sZPo 44:02 包青天再起風雲 29/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
    nHhxOvoxpZU 43:38 包青天再起風雲 30/30 | 譚俊彥、胡定欣、曹永廉、張振朗、姚子羚、陳凱琳 | 粵語中字 | TVB 2019
`;var ul={};Ye(ul,{episodes:()=>Zh,videos:()=>Kh});var Kh="",Zh=[`
    EzkW6jKQVeU 2:30:52 Delta Green: Divergence S1
    3Lsz_ay4TH4 1:54:09 Delta Green: Divergence S2
    9GpsZRBSE34 2:36:55 Delta Green: Divergence S3
    _X1jCSLs2J0 2:14:34 Delta Green: Divergence S4
    FddCpQajP44 2:29:11 Delta Green: Divergence S5
    clQHsGNjkIA 2:29:13 Delta Green: Divergence S6
    Vxlv7xn1W1k 2:24:42 Delta Green: Divergence S7
    FF6RADukj0A 2:37:51 Delta Green: Divergence S8
    fCQkP92eDKU 2:12:39 Delta Green: Divergence S9
    kGORUIIf9SY 2:09:16 Delta Green: Divergence S10
    f0FdZ9415vQ 2:11:17 Delta Green: Divergence S11
    Wo9EeHkRYic 2:33:35 Delta Green: Divergence S12 Finale
  `,`
    H5XhbsyaGpU 1:49:02 Dune: Adventures in the Imperium: Session 0
    GiDhUY2ev0k 2:30:23 Dune: Adventures in the Imperium: Session 1
    otkQjSbc58I 2:17:21 Dune: Adventures in the Imperium: Session 2
    mXhwDnH26fA 1:46:01 Dune: Adventures in the Imperium S3
    HBbaDXh5pJU 2:29:23 Dune: Adventures in the Imperium S4
    cVh8eE3eXq4 2:24:50 Dune: Adventures in the Imperium S5
    SjRbxQ7916g 2:22:18 Dune: Adventures in the Imperium S6
    4QccnZGaoVY 2:14:25 Dune: Adventures in the Imperium S7
  `,`
    uCjkjfrfJf4 2:20:33 Impulse Drive: Coriolis S1
    oPTcSSmAwCs 2:31:03 Impulse Drive Coriolis S2
    Irqbd85GqCw 2:25:10 Impulse Drive Coriolis S3
    GRUg4Je7BI0 2:43:07 Impulse Drive Coriolis S4
    Prils-YcoL0 2:48:03 Impulse Drive Coriolis S5
    v7ij7h_AQUA 2:17:24 Impulse Drive: Coriolis S6
    R_YLAeEFH0o 2:47:58 Impulse Drive: Coriolis S7
    gOdngi2QiCA 2:49:47 Impulse Drive Coriolis S8
    WhgbZ3LhMqw 2:58:07 Impulse Drive Coriolis S9
    s3tdyQ0NRco 2:37:20 Impulse Drive: Coriolis 10
    brkDAgEOUuk 2:55:30 Impulse Drive: Coriolis 11
  `,`
    CZ5UdIvyRxM 2:37:11 Free from the Yoke S1
    XPoonUZId8c 2:34:09 Free from the Yoke S2
    pXo19v_ikhc 2:58:47 Free from the Yoke S3
    aaqZJYaSf3M 2:42:45 Free from the Yoke S4
    2F0dL29cY1I 2:06:50 Free from the Yoke S5
    P7p71B6K1q0 2:25:44 Free from the Yoke S6
    gqPlZnIbtEI 2:29:07 Free from the Yoke S7
    j49xi7EsiOU 2:36:08 Free from the Yoke S8
    0MS6BqeTAxM 3:33:24 Free from the Yoke S9 Finale
  `,`
    OhT7etJ5V4I 2:37:40 Free from the Yoke: Firebird Suite Session 0
    xelc4GPmOZg 1:58:35 Free from the Yoke: Firebird Suite Session 1
    CLz1T2KhjNM 2:12:07 Free from the Yoke: Firebird Suite Session 3
    flpoLCVxOoo 2:31:52 Free from the Yoke: Firebird Suite Session 4
    nvTLkYd70PY 2:35:27 Free from the Yoke: Firebird Suite S7
    3pnhmA6h43I 2:49:39 Free from the Yoke: Firebird Suite S8
  `,`
    Uhy9kHa4Uls 2:54:57 The Sprawl RPG (Session One)
    tpyNSro9ycA 2:03:18 The Sprawl RPG (Session Two)
    jalJPCbh1R8 1:48:06 The Sprawl RPG (Session Three)
    -RmPE_iGhRU 3:35:26 The Sprawl RPG (Session Four)
    kCW4HZxTnis 2:28:29 The Sprawl RPG (Session Five)
    3mwZDZPgZEM 2:55:02 The Sprawl RPG (Session Six)
    HquKcaC1Q-A 1:51:15 The Sprawl RPG (Session Seven)
    4YGKRmsVSRs 2:21:33 The Sprawl (Session Eight)
    iNpTUnTzXsk 1:43:19 The Sprawl (Session Nine)
    wTj4madkSto 2:46:02 The Sprawl (Session Ten)
  `,`
    L7kbKOy7cH8 2:42:31 Hearts of Wulin: Gauntlet Sunday (1 of 4)
    _60X91dDNIY 2:52:36 Hearts of Wulin: Gauntlet Sunday (2 of 4)
    f0oikEVArxI 2:46:26 Hearts of Wulin: Gauntlet Sunday (3 of 4)
    P47_lDETRnI 3:03:11 Hearts of Wulin: Gauntlet Sunday (4 of 4)
    `,`
    R5qdFDweDqY 2:27:56 Hearts of Wulin PbtA: White River (1 of 2)
    CiU22zj99uo 2:16:01 Hearts of Wulin PbtA: White River (2 of 2)
    `,`
    A0FAyUG7vXs 2:41:20 Hearts of Wulin: Gauntlet Quarterly Book One S1
    obz3lKz8Gic 2:26:31 Hearts of Wulin: Gauntlet Quarterly Book One S2
    suJQ1vg6w6c 2:27:11 Hearts of Wulin: Gauntlet Quarterly Book One S3
    d6wgXsZ042o 2:38:16 Hearts of Wulin: Gauntlet Quarterly S4 Book Two
    zhOGaaWB6RQ 2:37:41 Hearts of Wulin: Gauntlet Quarterly S5 Book Two
    cvcWhMHSXpo 2:24:41 Hearts of Wulin: Gauntlet Quarterly S7 Book Two
    x8TqzySgPeM 2:20:01 Hearts of Wulin: Gauntlet Quarterly S8 Book Three
    Gv5toThs7jc 2:36:45 Hearts of Wulin: Gauntlet Quarterly S9 Book Three
    d6jfe7od7cA 2:19:36 Hearts of Wulin: Gauntlet Quarterly S10 Book Three
    HYpuQ161cq4 2:19:41 Hearts of Wulin: Gauntlet Quarterly S11 Book Three
    VcU8trxw4xU 2:47:41 Hearts of Wulin: Gauntlet Quarterly S12 Book Three
    `,`
    jISdydvzlfU 2:44:41 Hearts of Wulin: Gauntlet Sunday (1 of 4)
    h5ssiUM1WZk 2:40:46 Hearts of Wulin: Gauntlet Sunday (2 of 4)
    d8HkZs0b00M 2:40:45 Hearts of Wulin: Gauntlet Sunday (3 of 4)
    qwqIXjESREE 2:58:15 Hearts of Wulin: Gauntlet Sunday (4 of 4)
    `,`
    ufx5ASuHaiE 3:39:20 Hearts of Wulin: Black Gardens: Gauntlet Con '18
    `,`
    Z3bpHqPN3Ik 3:43:15 Hearts of Wulin: Green Mountain: Gauntlet Con '18
    `,`
    W9-rIu9x9UU 3:48:47 Hearts of Wulin: Red City: Gauntlet Con '18
    `,`
    P7WebLz885U 2:23:10 Hearts of Wulin: Gauntlet TGIT (1 of 2)
    SAZ-7K0yPPA 2:46:00 Hearts of Wulin: Gauntlet TGIT (2 of 2)
   `,`
    K0HyNuFsqF4 2:38:06 Hearts of Wulin: Podcaster Edition (1 of 3)
    1nTcKF1rOdU 2:15:46 Hearts of Wulin: Podcaster Edition (2 of 3)
    L4nlF9vEAgI 2:31:41 Hearts of Wulin: Podcaster Edition (3 of 3)
   `,`
    GER1LoK6op8 2:32:07 Hearts of Wulin: Song of Sorrows: Gauntlet TGIT (1 of 3)
    S2TUFCEtqXg 2:42:46 Hearts of Wulin: Song of Sorrows: Gauntlet TGIT (2 of 3)
    0VWOnAGpJaI 2:50:52 Hearts of Wulin: Song of Sorrows: Gauntlet TGIT (3 of 3)
    `,`
    k3rhMGLWl4w 2:45:35 Hearts of Wulin: Deadly Harmony (1 of 8)
    3eyFbu4XttQ 2:35:21 Hearts of Wulin: Deadly Harmony (2 of 8)
    dPoNN8_amfs 2:18:42 Hearts of Wulin: Deadly Harmony (3 of 8)
    YpHsIWL41R4 2:30:15 Hearts of Wulin: Deadly Harmony (4 of 8)
    oXKacaCtYbA 2:45:34 Hearts of Wulin: Deadly Harmony (5 of 8)
    qkxuhON_Z-s 2:35:25 Hearts of Wulin: Deadly Harmony (6 of 8)
    `,`
    PXedKEo7qA4 2:30:32 Hearts of Wulin: Court of Shadows (1 of 4)
    GVLzgWkn9zc 2:50:32 Hearts of Wulin: Court of Shadows (2 of 4)
    Fz_dMcIESmQ 2:45:11 Hearts of Wulin: Court of Shadows (4 of 4)
    `,`
    JWhnIS00-VE 3:30:58 Hearts of Wulin: Encounters of a Spooky King: GCOG
    `,`
    ZnJwmCCkOKg 2:07:04 Gauntlet Sunday: Hearts of Wulin: Legend of the Shark-Fingered Princess S1
    J0Y5xodNhH0 2:34:22 Gauntlet Sunday: Hearts of Wulin: Legend of the Shark-Fingered Princess S2
    cCxuSdf92v0 2:36:08 Gauntlet Sunday: Hearts of Wulin: Legend of the Shark-Fingered Princess S3
    cCxuSdf92v0 2:36:08 Gauntlet Sunday: Hearts of Wulin: Legend of the Shark-Fingered Princess S3
    `,`
    iQsi3ocGOuY 2:11:44 Hearts of Wulin: Numberless Secrets S1
    JL5MxMNgqms 1:55:59 Hearts of Wulin: Numberless Secrets S2
    P9fFAmPIDHs 2:23:40 Hearts of Wulin: Numberless Secrets S3
    AvtgD8yFn0Y 2:17:53 Hearts of Wulin: Numberless Secrets S5
    wD9XB8zYpq4 2:51:54 Hearts of Wulin: Numberless Secrets S6
    DOqY5rG5qOI 2:06:11 Hearts of Wulin: Numberless Secrets S7
    `,`
    FJRoD4IUtPA 3:22:46 Hearts of Wulin: Wedding of Jade and Sorrow
    `,`
    ZmFDOy221RM 3:49:19 Hearts of Wulin: Wedding of Petals and Steel GCOG
    `,`
    sBjnjElrji4 3:28:05 Hearts of Wulin: Tournament of Blood GCOG
    `,`
    n_PsGkMPBP8 3:17:57 Hearts of Wulin: Tournament of Sorrow GCOG
    `,`
    7f1mvt_0EhY 3:22:46 Hearts of Wulin: Tournament of Vengeance GCOG
    `,`
    479m9fl2IJ8 2:05:45 Hearts of Wulin: Wedding of Shadow and Gold Pt 1
    _h5Fgj2YSNo 2:16:45 Hearts of Wulin: Wedding of Shadow and Gold Pt 2
    `,`
    Fhd9UTJmJAs 2:05:30 Hearts of Wulin: Wrath of the Shark Finger Princess (1 of 2)
    qTjnm8BddPs 2:42:11 Hearts of Wulin: Wrath of the Shark Finger Princess (2 of 2)
    `,`
  -SCjnpy_FwI 2:05:06 Hearts of Wulin: New Vengeance of the Shark Finger Princess (1 of 2)
  3ghW-OI5uxc 2:39:46 Hearts of Wulin: New Vengeance of the Shark Finger Princess (2 of 2)
    `,`
  Lt8-894QKdk 2:12:07 Hearts of Wulin: The Bride with Pearl Nails S1
  m4MO1sGcaS4 2:17:59 Hearts of Wulin: The Bride with Pearl Nails S2
  D7ugxCVnPoE 2:20:21 Hearts of Wulin: The Bride with Pearl Nails S3
  `,`
  iRhnx4lI6TA 3:45:12 The Chain of Acheron: Ep. 1 - Red Sky at Morning | Matt Colville's D&D Campaign
  71B8BKHAYAY 3:17:48 The Chain of Acheron: Ep. 2 - Soldier Take Warning | Matt Colville's D&D Campaign
  V3QTjri2tAE 4:03:16 The Chain of Acheron: Ep. 3 - Sailors on the Sea of Stars | Matt Colville's D&D Campaign
  XEVGztx2VcU 3:22:29 The Chain of Acheron: Ep. 4 - The Dark Dream | Matt Colville's D&D Campaign
  Y3jZgnAdt2M 2:41:57 The Chain of Acheron: Ep. 5 - The God Factor | Matt Colville's D&D Campaign
  2fXNVuYkdeI 2:08:44 The Chain of Acheron: Ep. 6 - The Changeling | Matt Colville's D&D Campaign
  hk1uB5iVbuo 1:24:32 The Chain of Acheron: Ep. 7 - The HRP Broad Sword | Matt Colville's D&D Campaign
  9PalEIz7aqM 5:18 We Have A Second Channel For The Livestream!
  iS1XLx3wNoY 4:35:01 The Chain of Acheron: Ep. 8 - Arrival | Matt Colville's D&D Campaign
  a7hilOdo8Q4 3:53:26 The Chain of Acheron: Ep. 9 - At The Sign of the Dreaming Pharaoh | Matt Colville's D&D Campaign
  LhIirIjkYss 3:12:12 The Chain of Acheron: Ep. 10 - The Underdark Job, Pt. 1 | Matt Colville's D&D Campaign
  yYZkgAgx41c 2:58:23 The Chain of Acheron: Ep. 11 - The Underdark Job, Pt. 2 | Matt Colville D&D Campaign
  QXhAc9X-FXc 3:39:41 The Chain of Acheron: Ep. 12 - The Mad God's Pawns | Matt Colville's D&D Campaign
`,`
  4SutsOre2A8 3:51:04 Exodus: Traveller E00 - Character Creation
  fcGxsjSabX4 4:12:32 Exodus: Traveller 2e E01
  z66k8gHWOWE 3:50:10 Exodus: Traveller 2e E02
  6sWeAVGZGqg 4:01:14 Exodus: Traveller 2e E03
  IPSNjig4AR0 3:47:36 Exodus: Traveller E04
  HHfFbagdX5s 3:25:18 Exodus: Traveller #05
  4zWNYaHySQw 2:55:28 Exodus: Traveller E06
  6nfDUrj0B4c 3:33:25 Exodus: Traveller (Mongoose) E07
  WyM6MAPMpLQ 3:07:29 Exodus: Traveller E08
  98H_OgZUIGE 2:26:34 Exodus: Mongoose Traveller E009
  hpxc_aJd7io 2:42:29 Exodus: Traveller 2nd Ed E10
  wZkU6D1VVOA 2:52:24 Exodus: Traveller 2nd Ed E11
  6IRxMutp1Gg 2:41:00 Exodus: Traveller 2nd Ed E12
  OtFuP9UqoJM 2:49:58 Exodus: Traveller E13
  uDsGTh_X42o 1:18:21 Happy Jacks RPG Advice Show 25-16: Mongoose Traveller Debrief & More!
`,`
  xIXnNbjW-Mo 3:01:29 The Drop - Traveller 2E Episode 1 #ttrpg #ActualPlay
  6jwSMvO_Jbg 3:04:34 The Drop - Traveller (inspired) E02 #ttrpg #actualplay
  KrcmimdjXtg 3:11:42 The Drop - PBTTraveler E03 #ttrpg #actualPlay
  D6LyQDG-G0M 3:24:29 The Drop - Traveller-ish S1E4 #actualplay #ttrpg
  sxdUzV9LJn0 3:10:05 The Drop - a Traveller-like system #ttrpg #Actualplay
  4F0ssH16H5U 3:04:58 The Drop: ?!? System #06 #ttrpg #actualplay
  lLBMyBHehhE 2:56:16 The Drop - A RPG playtest S1E7 #ttrpg #actualplay #rpg #playtest
  P2A8a3OvBw8 2:54:08 The Drop: A TDS Actual Play E08 #ttrpg #actualplay #HappyJacksRPG
  8KOsFYl-KRc 2:30:20 The Drop - Traveller PBTA E9 #ttrpg #actualplay #happyjacksrpg
  rKHcqWCzv6c 3:08:12 The Drop - TDS system E10 #ttrpg #tabletop #actualplay #happyjacks
  OhyE3KWinVs 2:55:35 The Drop S1E11
  pO9D0OJgMOw 3:22:30 The Drop - S1E12
  i52np8TCKC0 3:44:53 The Drop - S1E13
`,`
  Te_S39tovOQ 3:35:01 Yuma Station: Traveller 2.0 E00 #ttrpg #actualplay #SPACE
  qPnM-htzLFM 3:05:38 Yuma Station: Traveller 2.0 E01 #ttrpg #actualplay #SPACE
  ZK9T6DHeSYE 3:13:26 Yuma Station E02 Traveller 2.0 #RPG #actualplay #space
  at2HNoOtta4 3:26:47 Yuma Station E03 Traveller 2.0 #RPG #actualplay #space
  kjATr5VKbxQ 3:19:10 Yuma Station E04 Traveller 2.0 #RPG #actualplay #space
  7xWQrOfdYLE 2:59:36 Yuma Station E05 Traveller 2.0 #RPG #actualplay #space
  opx9P2Mwe1g 3:03:11 Yuma Station E06 Traveller 2.0 #RPG #actualplay #space
  C33CICWeDEA 3:32:20 Yuma Station E07 Traveller 2.0 #RPG #actualplay #space
  T-s6kbYoru0 3:30:25 Yuma Station E08 Traveller 2.0 #RPG #actualplay #space
  88g4UFocjiU 3:12:27 Yuma Station E09 Traveller 2.0 #RPG #actualplay #space
  Z1WMHntvhrI 3:29:38 Yuma Station E10 Traveller 2.0 #RPG #actualplay #space
  YeolxRgm6fQ 3:26:08 Yuma Station E011: Mongoose Traveller 2
  OCwRucjdgXU 3:25:04 Yuma Station E012: Mongoose Traveller 2 #rpg #actualplay #space
  pqm35a8qJFQ 3:07:15 Yuma Station E013: Mongoose Traveller 2 #rpg #actualplay #SPACE!
  Rp90P0YnTNw 3:21:51 Yuma Station E014: Mongoose Traveller 2 #rpg #actualplay #SPACE!
  o1bRtPDJJQ4 3:41:42 Yuma Station E015: Mongoose Traveller 2 #rpg #actualplay #SPACE!
`,`
  IMJ3jil7v9k 1:41:21 Cyberpunk RED - Night City Highs Episode 1
  ZNnlsGA6Svc 1:35:52 Cyberpunk RED - Night City Highs Episode 2
  65SLl_nR1vk 1:42:18 Cyberpunk RED - Night City Highs Episode 3
  ko0YfFkXwNw 1:44:49 Cyberpunk RED - Night City Highs Episode 4
  EVooDwWqr20 1:36:27 Cyberpunk RED - Night City Highs Episode 5
  0ToeczITRbY 1:56:35 Cyberpunk RED - Night City Highs Episode 6 - Finale
`,`
  oJCuAtoD_94 2:02:01 Dune RPG - Sietch Abbikat Session 0 - Modiphius 2d20 Actual Play
  UDGQBk4v2IQ 2:08:02 Dune RPG - Sietch Abbikat Session 1 - Modiphius 2d20 Actual Play
  mhvFuUv01l0 1:52:24 Dune RPG - Sietch Abbikat Session 2 - Modiphius 2d20 Actual Play
  f4LZ2m0JvQQ 1:43:55 Dune RPG - Sietch Abbikat Session 3 - Modiphius 2d20 Actual Play
  dM8Q6tn2U-c 2:04:21 Dune RPG - Sietch Abbikat Session 4 - Modiphius 2d20 Actual Play
  H7UFjOv7dmU 1:58:28 Dune RPG - Sietch Abbikat Session 5 - Modiphius 2d20 Actual Play
  FqhFrqTwQDw 2:13:07 Dune RPG - Sietch Abbikat Session 6 Finale - Modiphius 2d20 Actual Play
`,`
  I51_ydzurVI 2:28:05 RenSpace Episode 0 - Mongoose Traveller 2e Actual Play
  WSPfmvbhH7Q 2:35:03 RenSpace Episode 1 - Mongoose Traveller 2e Actual Play
  k3LPeO0ZIVw 2:46:38 RenSpace Episode 2 - Mongoose Traveller 2e Actual Play
  om-TZd5nDUg 2:16:01 RenSpace Episode 3 - Mongoose Traveller 2e Actual Play
`,`
  FRl2bVTYDec 2:14:41 Dune RPG - Modiphius - Character and House Creation
  ro3P954Laps 2:24:06 Dune RPG - Modiphius - House Dargush - Session 1
  W_rBjdjMI6o 2:30:18 Dune RPG - Modiphius - House Dargush - Session 2
  K9V6gOnFmQk 2:48:45 Dune RPG - Modiphius - House Dargush - Session 3
  -GhuT7WZNVY 3:05:54 Dune RPG - Modiphius - House Dargush - Session 4
`,`
  chDEoS0Y_eQ 2:33:18 Feudal Stars Episode 1 - Mongoose Traveller 2e Actual Play
  8F2iXsDv9J4 2:43:31 Feudal Stars Episode 2 - Mongoose Traveller 2e Actual Play
  QzBoS4Fw3Hg 2:09:48 Feudal Stars Episode 3 - Mongoose Traveller 2e Actual Play
  ipwVm2KzG24 2:24:09 Feudal Stars Episode 4 - Mongoose Traveller 2e Actual Play
  KEqERZcXRrA 2:40:34 Feudal Stars Episode 5 - Mongoose Traveller 2e Actual Play
  KHgon9qXkic 2:12:28 Feudal Stars Episode 6 - Mongoose Traveller 2e Actual Play
  IfaerRrQDKw 1:50:01 Feudal Stars Episode 7 - Mongoose Traveller 2e Actual Play
`,`
  1XG6pQAcwSs 1:57:28 Eternal Reaches - Mongoose Traveller - S01E00 - Character Creation
  Gi4JmabZsuE 2:04:12 Eternal Reaches - Mongoose Traveller - S01E00.5 - Team Creation
  TWmtSgepZvY 2:01:25 Eternal Reaches - Mongoose Traveller - S01E01 - Journey to Kusk
  vxphHk-fsaQ 1:42:09 Eternal Reaches - Mongoose Traveller - S01E02 - Trouble at Outpost 31
  cBOG73KpcZ8 1:53:40 Eternal Reaches - Mongoose Traveller - S01E03 - Friend or Foe
  krFI8NQ9iwQ 2:05:42 Eternal Reaches - Mongoose Traveller - S01E04 - Lesser Lifeforms
  Ri4pxtoiV9o 2:08:14 Eternal Reaches - Mongoose Traveller - S01E05 - Fundamental Reclamation
  xvB9EPihCtY 1:47:30 Eternal Reaches - Mongoose Traveller - S01E06 - All Hail the Reclaimator!
  Fzn23u3cUNs 1:52:19 Eternal Reaches - Mongoose Traveller - S01E07 - Out of the Frying Pan
`,`
  IHQWptPSg0Y 1:54:01 Star Trek: Morpheus Session 0 Part 1 - Galaxy Creation - Star Trek Adventures
  TUoYiVmiVlc 2:20:44 Star Trek: Morpheus Session 0 Part 2 - Character Creation - Star Trek Adventures
  6eLyegkkqRI 1:59:57 Star Trek: Morpheus S01E01 - Star Trek Adventures - Lacuna Colony
  2q1Fadk1bI8 2:21:48 Star Trek: Morpheus S01E02 - Star Trek Adventures - Lacuna Colony Part 2
  lo08qR08Fis 1:58:38 Star Trek: Morpheus S01E03 - Star Trek Adventures - Primogeniture Part 1
  Me2UUQ01N0M 2:04:44 Star Trek: Morpheus S01E04 - Star Trek Adventures - Primogeniture Part 2
  Y96Wt3QGeMc 1:58:46 Star Trek: Morpheus S01E05 - Star Trek Adventures - Primogeniture Part 3
  oJuLk1IysvM 1:40:44 Star Trek: Morpheus S01E06 - Star Trek Adventures - Primogeniture Part 4
  Jbapv81KZNw 2:07:03 Star Trek: Morpheus S01E07 - Star Trek Adventures - Primogeniture Part 5
  fki98cpK7GM 1:53:58 Star Trek: Morpheus S01E08 - Star Trek Adventures - Waste of Time Part 1
  7uDHW0MJbn8 1:40:00 Star Trek: Morpheus S01E09 - Star Trek Adventures - Waste of Time Part 2
  Na9BYg0pwlk 2:07:32 Star Trek: Morpheus S01E10 - Star Trek Adventures - Waste of Time Part 3
`,`
  QG3YFpf17cw 2:46:29 Mothership RPG Actual Play - USCSS Conrad One Shot
  `,`
  DAB3ZVEVN0k 4:54:40 Mothership RPG Actual Play - Halloween One-Shot Special!
  `,`
  1LXZHOTctms 2:53:20 Mothership RPG Actual Play - It Fell From the Stars
  `,`
  ku64lQbTUrc 1:33 Mothership RPG - One Shot Teaser
  `,`
  nzNy0Nw36gc 1:33 Mothership RPG Halloween Special Teaser & Giveaway
  `,`
  ak6_MTBTGtY 56:05 Mothership RPG - Live Character Creation!
`,`
  vO2n9nj03Qs 2:13:21 The Ballad of Haunted West Prosperity, Are You Going My Way 2 of 2
  RYfAEzpS3ZM 2:29:07 The Ballad of Haunted West: Prosperity, Are You Going My Way? (1 of 2)
  `,`
  tKHHUxuqbHw 2:33:02 Harlem Unbound Actual Play: Whispers of Harlem
  `,`
  a59ugPOvvjw 2:11:02 Roll20 Actual Play of Haunted West: Session 0
  5YsjwaD6oF0 3:18:35 Roll20 Actual Play of Haunted West: Session 1
  ELY36NvSAf4 3:11:38 Roll20 Actual Play of Haunted West: Session 2
  uaGBc_h2o9E 3:19:24 Roll20 Actual Play of Haunted West: Session 3
  PSbXJsPhkSI 3:44:19 Roll20 Actual Play of Haunted West: Session 4 (Finale)
  `,`
  zVEEfGsvj3g 2:51:54 Harlem Unbound ACTUAL PLAY (Part 2) 9.27.20
  00R_FyGMBOg 3:05:51 Harlem Unbound ACTUAL PLAY (Part 1) 8.16.20
  `,`
  est9-SuXKOs 1:00 HarlemUnbound THE DELIVERY
`,`
  2bZLRC2cBv8 2:52:54 Cyberpunk RED Actual Play - S01E0 - The Apartment #actualplay #cyberpunkred #twitch
  7NZoiYCmZUw 2:08:06 Cyberpunk RED Actual Play - S01E1 - Shot Through the Heart #actualplay #cyberpunkred #twitch
  qeTYuyQKrxw 3:27:15 Cyberpunk RED Actual Play - S01E2 - The Nook #actualplay #cyberpunkred #twitch
  L0yLU9d2eHE 3:10:50 Cyberpunk RED Actual Play - S01E3 - Back to the Apartment #actualplay #cyberpunkred #twitch
  _tk1saZE9qI 3:04:38 Cyberpunk RED Actual Play - S01E4 - The Vigil #actualplay #cyberpunkred #twitch
  jFjXJz3vmhM 3:05:49 Cyberpunk RED Actual Play - S01E5 - Gojira Comes Alive #actualplay #cyberpunkred #twitch
  kwtasLkYcPA 2:18:23 Cyberpunk RED Actual Play - S01E6 - F Yo Couch #actualplay #cyberpunkred #twitch
  5XfIzclwpuc 2:14:13 Cyberpunk RED Actual Play - S01E7 - Spoiled Milk Run #actualplay #cyberpunkred #twitch
  JPcKNa0ldH4 2:11:07 Cyberpunk RED Actual Play - S01E8 - The Albino Terminator #actualplay #cyberpunkred #twitch
  lFMHurCx1rg 3:11:31 Cyberpunk RED Actual Play - S01E9 - Moxie Meets The Eyes #actualplay #cyberpunkred #twitch
  b-J5KHRC8B8 2:50:36 Cyberpunk RED Actual Play - S01E10 - Wraith Needs Rehab #actualplay #cyberpunkred #twitch
  SRC7daCMSQI 3:07:08 Cyberpunk RED Actual Play - S01E11 - Loud Cargo #actualplay #cyberpunkred #twitch
  KEJDxTvF1SY 3:01:06 Cyberpunk RED Actual Play - S01E12 - Tranqing the Captured Tiger #actualplay #cyberpunkred #twitch
  d6GUF8Z-_rE 3:26:09 Cyberpunk RED Actual Play - S01E13 - The Lost Sister #actualplay #cyberpunkred #twitch
  eLsfyY23OLE 3:59:32 Cyberpunk RED Actual Play - S01E14 - Best Laid Plans #actualplay #cyberpunkred #twitch
  PhAxdQiamQQ 3:04:50 Cyberpunk RED Actual Play - S01E15 - Showdown In Little Italy #actualplay #cyberpunkred #twitch
  pwpdjoJbJtk 3:16:45 Cyberpunk RED Actual Play - S01E16 - Gojira's Castle Adventure #actualplay #cyberpunkred #twitch
  rpGm3l8g45M 3:49:31 Cyberpunk RED Actual Play - S01E17 - A Hal of a Day #actualplay #cyberpunkred #twitch
  henGpI_CjGo 2:47:07 Cyberpunk RED Actual Play - S01E18 - Arcade Fire Fight #actualplay #cyberpunkred #twitch
  zbK60_0MO_I 3:12:30 Cyberpunk RED Actual Play - S01E19 - Gojira Buys a Car #actualplay #cyberpunkred #twitch
  Er7fCj2G9kw 3:40:54 Cyberpunk RED Actual Play - S01E20 - A Debt to Be Paid #actualplay #cyberpunkred #twitch
  jSctIDH9S6I 3:32:12 Cyberpunk RED Actual Play - S01E21 - Vampires, knives, and the color blue #actualplay #cyberpunkred
  QD_fEoumFJM 2:56:36 Cyberpunk RED Actual Play - S01E22 - The Truth Comes Out In Neon #actualplay #cyberpunkred #twitch
  PVKKw57NYJo 3:07:48 Cyberpunk RED Actual Play - S01E23 - Bright Eyes and Black Words #actualplay #cyberpunkred #twitch
  xet4LOymaKk 3:39:20 Cyberpunk RED Actual Play - S01E24 - Kammi's Day Out #actualplay #cyberpunkred #twitch
  dP3ViqKMFXM 4:30:06 Cyberpunk RED Actual Play - S01E25 - Into The Tiger's Den #actualplay #cyberpunkred #twitch
  XTLxiJ0AZhI 4:04:55 Saves vs Death Cyberpunk RED - S01E26 - Road Rage In The Combat Zone
  tYVL3RmuXzQ 4:31:07 Cyberpunk RED Actual Play - S01E27 - Winner Takes All #actualplay #cyberpunkred #twitch
  7u6aDeFyoOI 4:04:14 Cyberpunk RED Actual Play - S01E28 - The House Always Wins #actualplay #cyberpunkred #twitch
  uvV19KJ1K80 3:43:10 Cyberpunk RED Actual Play - S01E29 - When the Running Ends #actualplay #cyberpunkred #twitch
  Pkh1LlQZOWI 3:33:55 Cyberpunk RED Actual Play - S02E01 - The New Kid in Town #actualplay #cyberpunkred #twitch
  Up1vRNYqGdE 3:33:46 Cyberpunk RED Actual Play - S02E02 - A Man Not Named Cal #actualplay #cyberpunkred #twitch
  e97mx8SlmaI 3:54:28 Cyberpunk RED Actual Play - S02E03 - Going to the Mall and M and M #actualplay #cyberpunkred
  eUhmjVFKDPU 3:47:58 Cyberpunk RED Actual Play - S02E04 Street Preaching, Psychos and Big Feet #actualplay #cyberpunkred
`,`
  wS1wuNlV2y4 1:57:44 Gene X: Cortex Prime #00 Character Creation
  keyavsZMtX8 3:00:50 Gene X: Cortex Prime #01 #superheroes #rpg #ttrpg #actualplay
  HchzL4Zrnn8 2:46:22 Gene X: Cortex Prime #02 #rpg #ttrpg #actualplay
  9U9usyTN1wE 3:05:00 Gene X: Cortex Prime #03 #rpg #ttrpg #actualplay #superhero #london
  GuHmZo_2ZRU 3:12:24 Gene X: Cortex Prime #04 #superheroes #rpg #ttrpg #actualplay
  l1CYK6N-Q3A 3:40:01 One Shot Saturday: Gene X Villains in Cortex Prime run by JiB #rpg #ttrpg #actualplay #oneshot
  _gvddBuaAnk 3:07:36 Gene X: Cortex Prime #05
  tucvtog8O8k 3:12:47 Gene X: Cortex Prime #06 #superheroes #mutants #rpg #ttrpg
  LNrt1nDRtYc 2:49:37 Gene X: Cortex Prime #07 #mutants #superheroes #rpg #ttrpg #hjrpg
  uOzzYbeVoKI 2:57:20 Gene X: Cortex Prime #08 #rpg #ttrpg #mutants #london
  PcgQ04uA528 3:23:11 Gene X: Cortex Prime #09 #rpg #ttrpg #actualplay #mutants #superheroes
  cimzf6oBGGc 2:49:45 Gene X: Cortex Prime #10 #rpg #mutants #actualplay
  3sf3ORf6XnE 2:44:45 Gene X: Cortex Prime #11 #mutants #rpg #london
  4-qBrIHQQi4 3:15:00 Gene X: Cortex Prime #12 FINALE!
`,`
  UFUD2WEojxM 2:13:41 Marvel Heroic Roleplaying AoA 01
  4bk9r1p9dHE 2:18:56 Marvel Heroic Roleplaying AoA 02
  uNNS25M-ijw 1:35:59 Marvel Heroic Roleplaying AoA 03
  b_8uq_qut-o 2:00:07 Marvel Heroic Roleplaying AoA 04
  8rOynLMvpBQ 1:38:23 Marvel Heroic Roleplaying AoA 05
  a25KG8XndYY 1:54:17 Marvel Heroic Roleplaying AoA 06
  bbuwmUvJBVM 1:51:12 Marvel Heroic Roleplaying AoA 07
  sAEA7-7c2zE 1:39:05 Marvel Heroic Roleplaying AoA 08
  iJzjBx--Cjg 2:00:24 Marvel Heroic Roleplaying AoA 09
  8Gb1QmP-NhU 1:21:29 Marvel Heroic Roleplaying AoA 09.5
  FqlQ6muDqJ8 1:28:51 Marvel Heroic Roleplaying AoA 10
  637jIFGX9Xg 2:05:26 Marvel Heroic Roleplaying AoA 11
  lzqTCqJXxsU 1:31:00 Marvel Heroic Roleplaying AoA 12
  Dy7PrsN5LxE 42:07 Marvel Heroic Roleplaying AoA 13
  RsSX2FeL24Y 1:37 Marvel RPG Age of Apocalypse Game is On Haitus
`,`
  Pzg7W1BUWrk 1:33:01 Eidolon Alpha Ep 1: The Call | Cortex Prime TTRPG
  jMJiMvQYZTo 1:29:02 Eidolon Alpha Ep 2: The Oracle | Cortex Prime TTRPG
  CgQ3Fa8prB8 1:48:19 Eidolon Alpha Ep 3: Corruption | Cortex Prime TTRPG
  rO38Q-xOw4c 1:50:38 Eidolon Alpha Ep 4: Friend & Foe | Cortex Prime TTRPG
  yR2BQ9ONEDM 1:55:07 Eidolon Alpha Ep 5: The Hostage | Cortex Prime TTRPG
  OtEeO7rzIZU 1:56:21 Eidolon Alpha Ep 6: The Fates | Cortex Prime TTRPG
  3u7Je9IYo9A 1:31:13 Eidolon Alpha: Dekathlon | SESSION ZERO | Cortex Prime TTRPG
  JbB8N251VHo 1:41:30 Eidolon Alpha: Dekathlon Ep 1 | Cortex Prime TTRPG
  ckM1_jXIhwE 1:57:16 Eidolon Alpha: Dekathlon Ep 2 | Cortex Prime TTRPG
  pw_joVces0o 1:57:46 Eidolon Alpha: Dekathlon Ep 3 | FINALE | Cortex Prime TTRPG
`,`
  GYsREHAdfvU 1:59:19 Cortex Prime TTRPG | Role & Keep | Hammerheads Ep 1
  35bj8ejW96M 1:56:58 Cortex Prime TTRPG | Role & Keep | Hammerheads Ep 2
  eaXZp9vS1O8 1:56:35 Cortex Prime TTRPG | Role & Keep | Hammerheads Episode 3
  E9PiyNPOF3o 1:57:05 Cortex Prime TTRPG | Role & Keep | Hammerheads Episode 4
  BpsbC6Ur51A 1:51:27 Cortex Prime TTRPG | Role & Keep | Hammerheads Episode 5
  PAYywaIyfyg 1:48:40 Cortex Prime TTRPG | Role & Keep | Hammerheads Episode 6
`,`
  ZUM8pL9fEI8 1:55:59 Cortex Prime Horror TTRPG | maninthelake.exe Ep 1
  2ySybevyUMM 1:50:59 Cortex Prime Horror TTRPG | maninthelake.exe Ep 2
`];var cl={};Ye(cl,{episodes:()=>Xh,videos:()=>qh});var Xh=[],qh=`
    96ouCiqGCNE 1:37:14 The Big O - OST 1 & 2

    S_ZvIBRk7SU 3:22 Guyver OST - Threat of Cronos
    2bBgSzB0XVc 3:28 Guyver OST - Combat Agent Member
    c2RW6UuV2GQ 2:30 Guyver OST - Marvelous Bio Boost Armor
    nalOS-AX9Xg 3:14 Guyver OST - Alien's Messiah
    JcbXvvC0mrg 3:10 Guyver OST - Devil Hands chasing
    eK55NOekRk4 3:16 Guyver OST - Challenge of Guyver II
    irv9HQBdx40 3:26 Guyver OST - Death of Bio booster
    jaknz-0rpp4 4:02 Guyver OST - Suffering
    FwYK6C8b65Y 3:44 Guyver OST - Guyver I Kidnap
    2fE-brd45rA 3:38 Guyver OST - Kyoushoku Soukou GUYVER
    S624D_HFPp4 1:06 Guyver OST - Classmates
    FD1bf2xSZOc 4:43 Guyver OST - Team 5 battle position
    Zx0a6z88kZs 1:41 Guyver OST - Guyver III Appears
    Hp8N6NCjM_c 3:25 Guyver OST - Lonely Shou
    NVkPVgY24G4 3:50 Guyver OST - Guyver I falls
    MDDYTNQ5Iho 4:01 Guyver OST - Sadness of Mizuki
    PoWjGS_BH_0 3:10 Guyver OST - Imminent Battle W Guyver
    u4Vc-nT09P4 3:12 Guyver OST - Shou and Mizuki

    VXg63oDaD3s 2:50 [Anime Classic] L - Gaim ~ Time For L-Gaim
    Z5pyMzyb5vc 4:56 shadow skill op born legend (full version)
    a4RKqvJqDJ8 4:48 Megazone 23 soundtrack - 4. Kaze no Lullaby (Lullaby of the Wind)
    HABztzndFi4 4:22 Megazone 23 Soundtrack - 11. Senaka-Goshi ni Sentimental (Sentimental Over My Back)
    TFtxRRi3ewI 3:44 Combat Mecha Xabungle Opening Full
    IacgoGWOi5M 5:12 聖獣機サイガード Cybernetics Guardian - 07 "Can't Get It Enough"
    pCQdGF7Rqx4 3:56 Fight Iczer 1~ Eien no Iczer 1
    t02JzTMJxKQ 3:23 Fight! Iczer One - Eternal Iczer-1
    oFpp9b-O_JU 3:44 Genocyber OST 1: 01. Fairy Dreamin' (Vocal) - WIZZ-KISS
    an_0IIRDlc4 4:47 Bubblegum Crisis - Opening | "Konya wa Hurricane" (There's a Hurricane Tonight) by Kinuko Ohmori
    xrjUj-FRorY 4:14 Outlaw star opening theme
    Pqn_zzd1ZkA 9:00 刀根麻理子 ／ デリンジャー～HOT STUFF
    eDv5ySacHac 4:18 Iczer 1 Music theme: NEVER RUN AWAY
    g0oU80VbSF8 3:23 Forgotten Junk: Makyou Gaiden Le Deus - OP
    Pf10yCUCq88 3:23 Blood Reign: Curse of the Yoma OST - Midori Karashima - Ashita e no Prologue (Prologue for Tomorrow)
    iFtKaw3Jksc 3:36 Dangaioh full opening song
    jCF3Z3L5SuM 4:12 Project A-ko 3: Cinderella Rhapsody - ED [Get a Chance!]

    # Mecha Anime Openings https://www.youtube.com/playlist?list=PLZ6GAQ4derFa_0gbIAJ_SLK-kOBDVWUPG
    c2zYuQqzEJQ 1:15 1963 Tetsujin 28 gou Opening Tetsujin 28 gou Duke Aces] [CKR] [0AA53060]
    2m1m-YWgQ84 1:11 Astroganger 1972 Opening
    MR7xA2JbNCQ 1:02 Mazinger Z Opening 1 Japones | マジンガーZ
    W6ahWjlP3q4 1:09 Getter Robo 1974 Opening
    UDjkXkMTg-c 1:01 Great Mazinger Opening
    07iM9PT-buE 1:10 Yuusha Raideen OP (English Captions)
    jjieygKSXpQ 1:10 Getter Robo G Opening
    9n3GEsKwhis 1:28 1975 Uchuu no Kishi Tekkaman Opening Tekkaman no Uta Mizuki Ichirou] [CKR] [53A71406]
    tW8JKCouIA4 1:12 Grendizer Opening
    pA0Uj3BJ1d0 2:01 Jeeg - opening (original version)
    G4pNfyHIi2Y 1:11 Gaiking Japanese Opening HQ
    Z52A2Nb6Q24 1:17 Dai Apolón Intro Japonés
    FNiDo84BRFE 1:15 초전자로보 콤바트라 V 오프닝 combattler v Opening
    _Qr0vzhMVT0 1:02 Groizer X
    xuKt5BUy7nA 1:01 Gakeen Opening
    rZam2ZC81bw 1:25 Mekanda Robo
    6tiUoS9-tCI 1:11 Planet Robo Danguard Ace Opening
    3wpipSyYsTE 1:09 VOLTES V
    Lt-aOnmKQhE 2:00 Balatack
    32JJ7O65nm0 1:32 Invincible Superman Zambot 3 Opening
    zQgVxUCO4RA 1:07 General Daimos Opening
    edMaT41DwOQ 1:32 無敵鋼人ダイターン3 OP (STEREO)
    L80qGAVEOTQ 2:54 宇宙魔神ダイケンゴー(ナレーション入りFULL)
    WT8itiVr4ng 2:20 未来ロボ ダルタニアス OP・ED
    GLWLy_Cz2ZY 2:46 Sub Latino, GUNDAM Opening, Vuela Gundam! 飛べ！ガンダム　機動戦士 ガンダム Hi Res Audio.
    k7dm5Gx8xUo 1:20 Gordian intro
    soMcPAwIsgk 1:27 Trider G7 Opening JAPANESE
    kpojMJXEe1M 1:20 God Sigma original opening title
    TIcYvE231q8 1:21 Space Runaway Ideon Opening 【HD】
    N2NX6cVMlkM 1:24 Space_Warrior_Baldios OP HD
    4hSuPdW_i_s 1:31 SAIKYO ROBO DAIOJA OP
    eBekEB-bMdQ 1:17 gold lighter op
    bVw5khpgbSw 1:16 Golion OP
    1f-oASal95Y 1:31 Goshogun - opening (original version)
    jLFcGXmJ6MM 3:27 六神合体ゴッドマーズ OP (FULL) GOD MARS
    R9OolcoJKpk 1:21 銀河旋風ブライガー Galaxy Cyclone Braiger OP (Eng Subs)
    IE6IKESS45E 1:32 1981 Taiyou no Kiba Dagram Opening Saraba Yasashiki Hibi yo Asada Mamoru] [CKR] [53CA8B8A]
    tpoIiK8gk8c 1:32 xabungle OP
    zbUBeU81s_s 1:32 魔境伝説アクロバンチ OP「夢の狩人」
    a73e3LjFwUo 1:30 銀河烈風バクシンガー OP「銀河烈風バクシンガー」
    sAUwdwGOh7E 1:30 Macross Op
    qK_pDGzJubo 1:21 亜空大作戦スラングル 前期OP「亜空大作戦のテーマ」
    fn1JAY6M6jU 1:32 聖戦士ダンバイン/ Aura Battler Dunbine OP BD (1080P HD)
    j8t4cHz9IAQ 1:18 Lightspeed Electroid Albegas intro
    J8hwDQJRU7E 1:31 Armored Trooper Votoms OP
    GgP4aMcm5dU 1:32 銀河疾風サスライガー OP「銀河疾風サスライガー」
    ztw3EaoxPJM 4:43 Sky-hurricane (Augus-opening Theme)
    yBR8PRoUP28 1:31 Psycho Armor Govarian OP [English subtitles]
    SehHbl24gQk 1:23 Genesis Climber Mospeada Opening HD
    fDIXVIWc0CQ 1:15 Opening Dorvack
    Qwszwb3aIPg 1:31 VIFAM OP
    Nuvca6MPO0s 1:31 L-GAIM OP 1
    kK8uSufYqD0 3:15 Video Warrior Laserion Full Theme (1984)
    N7st-s83IFk 1:31 Giant Gorg Creditless OP [English Captions]
    f7UUQd7lLbA 2:00 Super Dimension Southern Cross OP
    00E3arZ_aiU 4:15 God Mazinger - DREAMY MY LOVE (MIQ version)
    s2CiX6ArmsQ 1:31 Panzer World Galient OP
    UIyKptTyuPw 1:29 超力ロボ・ガラット OP [STEREO]
    WA8OYMwqkM8 1:45 Sei Jushi Bismark Opening
    vbAk5UcZGY0 2:18 Megazone 23 Part 1 Opening
    I5cRFv5iLvw 1:22 Dancougar - Opening [HD Remastered]
    gJWpOqrMtjs 1:42 Aoki Ryuusei SPT Layzner OP HD (Textless)
    Uq_TD0_2_1s 1:39 ninja sensi tobikage op
    t02JzTMJxKQ 3:23 Fight! Iczer One - Eternal Iczer-1
    9IBkG8E4qYc 1:32 Gundam ZZ opening HD
    xl4IqLfzHwg 1:31 Machine Robo: Revenge of Cronos OP
    eSMAsoLvEXw 1:40 머신로보 배틀 해커즈 (マシンロボ ぶっちぎりバトルハッカーズ) (Machine Robo Battle Hackers) OP
    ItCMX3A1qaE 1:31 DRAGONAR OP 1
    oQKavTdZKvA 1:21 Transformers The Headmasters Opening (HD)
    8BcM31lohl0 1:30 Dangaioh OP
    w0rb3VaSt7E 2:29 Guardian Deity - (Aura Battler Dunbine Palladium OST)
    xE6SAE1tCEE 5:35 Beyond The Time
    gX_8tobdiMc 1:22 Transformers Master Force Opening
    ZQxC1vGgyoo 1:30 Eiyuuden Mashin Wataru opening
    fMpI_bc3LrI 1:31 Mobile Police Patlabor 1988 (Early Days OVA) - opening [HD] Remastered
    GMISeKT5c-U 1:25 Opening Gunbuster Japones
    KkF13YQkPx0 3:56 Awake! Zeorymer(High Quality Sound)
    wo8W-kuPuxg 1:32 Bio Armor Jushin Liger Opening 1
    1Khksntkwis 1:21 Transformers Victory OP subtitulado
    1WwZPwVLR08 3:53 いつか空に届いて
    dUSNV-A8gts 1:30 GRANZORT
    Adno8sRTono 3:55 Mobile Police PATLABOR the Movie - Ending Theme
    Z9UtUzjUA5Q 1:32 Patlabor on Television - Opening [HD] Remastered
    GkFoLL0QmFQ 1:30 Exkaiser Op English Sub
    SNGoAkdr6hU 1:32 Mashin Hero Wataru 2 Opening 2 "Fight!"
    OxGilsRr5Yk 1:27 NG Knight Ramune & 40 - clean OP1
    4Z4l0vKVnSA 1:21 Opening Titles : Transformers: Zone
    k3WMr1EhRL8 1:34 Patlabor: The New Files OP2 (mamoritaino)HQ
    DA9asP4wCi0 1:31 太陽の勇者ファイバード OP
    rgfIFp0lfog 1:20 Getter Robo Go Opening
    uM3Ltvq22fk 4:39 Kimi wo mitumete
    cD28CY-ZAl8 1:30 raijin oh opening
    eP0U3irjIow 4:10 THE WINNER
    8mDvhVVAqf0 1:22 Detonator ORGUN
    NdpAOPKSMSo 1:31 ダ・ガーン OP 2
    pmX564UTabE 1:32 Tekkaman Blade 1st opening
    rHbWxMryIls 1:32 Genki Bakuhatsu Ganbarugar Creditless OP
    1lG1BToaLTw 1:38 鉄人２８号ＦＸ Tetsujin 28-Gou FX Opening
    o3Q0aNdLtds 1:52 Giant Robo The Animation (1992) Intro scene 1080p
    g_AZikitKcs 1:31 Might Gaine textless OP1
`;var dl={};Ye(dl,{episodes:()=>$h,videos:()=>ep});var $h=[],ep=`
#vKXu0CzRcrI 0:16 Here's Tree
#ieWm9T_GgSA 0:08 I'm Lost
zBIx-gP-I8c 0-20,40-51 Strong Bad Email #1 - Some Kinda Robot
#BHLsrzYt-H4 0:52 Strong Bad Email #2 - Homsar
#wRKrv-RlJOw 1:01 Strong Bad Email #6 - Depressio
#Lml_AKkhCVY 1:01 Strong Bad Email #9 - I Love You
`;function Rr(e){try{e()}catch(t){return t}}function kn(e,t){if(e.length===0)throw new Error("can't pick element from an empty array");if(t>=1||t<0)throw new Error("fraction out of bounds: "+t);return e[Math.floor(t*e.length)]}_("pick",{"throws if the array is empty"(){p(Rr(()=>kn([],0)),L,new Error("can't pick element from an empty array"))},"throws if the fraction is 1"(){p(Rr(()=>kn([""],1)),L,new Error("fraction out of bounds: 1"))},"throws if the fraction is > 1"(){p(Rr(()=>kn([""],1.25)),L,new Error("fraction out of bounds: 1.25"))},"throws if the fraction is > 0"(){p(Rr(()=>kn([""],-.25)),L,new Error("fraction out of bounds: -0.25"))},"picks the first element of the array given 0"(){p(kn([1,2],0),S,1)},"picks the last element of the array given 1 - epsilon"(){p(kn([1,2],.99),S,2)}});function _o(e){return e.length===0}var jo=(...e)=>e.reduce(tp);_("pipe",{"given one function"(){p(jo(t=>t+1)(1),S,2)},"given two functions"(){let e=t=>t+1;p(jo(e,e)(1),S,3)}});function tp(e,t){return(...n)=>t(e(...n))}function Ic(e){return t=>t.map(e)}function Gc(e){return e.trim()}function Fe(e){return{videos:e}}function Yo({start:e,end:t}){return t-e}function Mn(e){return e.segments.map(Yo).reduce(np,0)}_("duration",{"is the difference between the segment's start and end"(){p(Yo({start:50,end:99}),S,49)}});_("videoDuration",{"is the sum of the segment durations"(){p(Mn({videoId:"",title:"",segments:[{start:1,end:5},{start:10,end:13}]}),S,7)}});var np=(e,t)=>e+t;function bo({videos:e,episodes:t}){return[...rp(t),...Me(e).map(op)]}var rp=Ic(jo(Me,Fe));function Me(e){return e.split(/\n+/).map(Gc).filter(el(ap)).filter(el(_o)).map(Pn(/ +/,3)).flatMap(([t,n,r])=>n==="SHORTS"?[]:[{videoId:t,segments:ip(n),title:r}])}function op(e){return Fe([e])}function _e(e){return{start:0,end:e}}function qe(e,t){return{start:e,end:t}}function ap(e){return e.startsWith("#")}function ip(e){return e.split(",").map(lp)}function lp(e){let t=e.split("-");return t.length===1?_e(ye(t[0])):qe(ye(t[0]),ye(t[1]))}function ye(e){let t=[1,60,3600,86400],n=e.split(":").map(r=>parseInt(r,10)).reverse();return sp(n,t).map(([r,o])=>r*o).reduce(up,0)}var Pn=(e,t=Infinity)=>n=>{if(typeof e=="string"&&e.length===0)throw"split(): empty delimiter not supported";let r=0,o=0,a=[],i=n;for(;a.length<t-1&&i.length>0;){let l=i.match(e);if(l==null)break;a.push(i.slice(0,l.index)),i=i.slice(l.index+l[0].length)}return a.push(i),a};function sp(e,t){let n=[];for(let r=0;r<e.length&&r<t.length;r++)n.push([e[r],t[r]]);return n}function up(e,t){return e+t}_("parseVideos",{"handles empty string"(){p(Me(""),L,[])},"ignores spaces"(){p(Me("  "),L,[])},"ignores blank links"(){p(Me(`


`),L,[])},"ignores space-only lines"(){p(Me(` 
 
 
`),L,[])},"strips comments"(){p(Me(`#foo
# bar`),L,[])},"strips spaces before comments"(){p(Me(`  #foo
  # bar`),L,[])},"parses actual data"(){p(Me(`
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
      Ga8tNxnHjt4 3:01 Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971
    `),L,[{videoId:"leb645Xu6uo",segments:[{start:0,end:654}],title:"Captain Murderer - Emlyn Williams"},{videoId:"Ga8tNxnHjt4",segments:[{start:0,end:181}],title:"Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971"}])},"parses time ranges"(){p(Me(`
      leb645Xu6uo 1:01-5:00 The Title
    `),L,[{videoId:"leb645Xu6uo",segments:[{start:61,end:300}],title:"The Title"}])},"parses a video with multiple segments"(){p(Me(`
      leb645Xu6uo 1-3:00,10:00-11:01 The Title
    `),L,[{videoId:"leb645Xu6uo",segments:[{start:1,end:180},{start:600,end:661}],title:"The Title"}])},"removes shorts"(){p(Me(`
      undefined SHORTS blah blah
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
    `),L,[{videoId:"leb645Xu6uo",segments:[{start:0,end:654}],title:"Captain Murderer - Emlyn Williams"}])}});_("parseDuration",{"0:00"(){p(ye("0:00"),S,0)},"00:00"(){p(ye("00:00"),S,0)},"1 second"(){p(ye("0:01"),S,1)},"10 seconds"(){p(ye("0:10"),S,10)},"1 minute"(){p(ye("1:00"),S,60)},"1 minute 10 seconds"(){p(ye("1:10"),S,70)},"10 minutes 10 seconds"(){p(ye("10:10"),S,610)},"1 hour"(){p(ye("1:00:00"),S,3600)},"1 hour 1 second"(){p(ye("1:00:01"),S,3601)},"10 hours 1 second"(){p(ye("10:00:01"),S,36001)},"1 day 1 second"(){p(ye("1:0:00:01"),S,86401)}});_("split",{"empty string"(){p(Pn(" ")(""),L,[""])},"no limit"(){p(Pn(" ")("a b c"),L,["a","b","c"])},limit(){p(Pn(" ",2)("a b c"),L,["a","b c"])},regex(){p(Pn(/ +/)("a b   c"),L,["a","b","c"])}});var cp=window.ENVIRONMENT==="development",Bc=[["One","shuffle",rl],["Two","shuffle",ol],["Three","shuffle",al],["Four","shuffle",il],["Five","shuffle",ll],["Six","loop",sl],["Seven","shuffle",ul],["Eight","loop",cl],cp?["debug","shuffle",dl]:null].filter(Boolean).map(([e,t,n])=>[e,t,bo(n)]);function Hc(){let[e,t]=Pe(+new Date);return Mc(()=>t(+new Date),250),e}function Nc(e=""){return{type:"nothing",nextVideoId:e}}var ve=2;function Fc(e,t){let{state:n,videoId:r,time:o}=t;if(e.type==="nothing")switch(n){case ae.ENDED:case ae.CUED:case ae.UNSTARTED:return e.nextVideoId?r!==e.nextVideoId?[{type:"cue",videoId:e.nextVideoId,timestamp:0}]:[{type:"seek",timestamp:0},{type:"play"}]:[];default:return[]}else{if(n===ae.BUFFERING)return[];let{videoId:a,currentTime:i}=e;if(r!==a)return[{type:"cue",videoId:a,timestamp:i<ve?0:i}];{let l=[];switch(n){case ae.PAUSED:case ae.CUED:case ae.UNSTARTED:r&&l.push({type:"play"})}return o&&dp(o,i)>=ve&&(console.debug("time is off; seeking",o,i),l.push({type:"seek",timestamp:i})),l}}}function dp(e,t){return Math.abs(e-t)}var fp=0;function hp(){let[,e]=Pe(0);return()=>e(++fp)}function xc(e){let t=hp(),n=Gn(Cc());return Qt(()=>{Dc(e).then(r=>{n.current=r,r.addEventListener("onStateChange",o=>{console.debug(Et(),"player onStateChange",Pr(o.data),Dn(r.getVideoUrl())),t()}),t()})},[e]),n.current}var Lc="javascript:(function()%7Bfunction%20last(e)%7Breturn%20e%5Be.length-1%5D%7Dvideos%3D%2F%5C%2Fwatch%5C%3F%2F.test(window.location)%3F%5B%2Fv%3D(.%7B11%7D)%2F.exec(window.location)%3F.%5B1%5D%2Clast(document.querySelectorAll(%22.ytp-time-duration%22)).innerText.trim()%2Cdocument.querySelector(%22.title%20.ytd-video-primary-info-renderer%22).innerText.split(%22%5Cn%22)%5B0%5D.trim()%5D.join(%22%20%22)%3A%2F%5C%2Fplaylist%5C%3F%2F.test(window.location)%3F%5B...document.querySelectorAll(%22ytd-playlist-video-renderer%22)%5D.map((e%3D%3E%7Bconst%20t%3De.querySelector(%22a%23video-title%22)%3F.href%3F%3F%22%22%2Cr%3D%2Fv%3D(.%7B11%7D)%2F.exec(t)%3F.%5B1%5D%2Ci%3De.querySelector(%22span%23text.ytd-thumbnail-overlay-time-status-renderer%22)%3F.innerText.trim()%2Cn%3De.querySelector(%22%23video-title%22)%3F.innerText%3Breturn%60%24%7Br%7D%20%24%7Bi%7D%20%24%7Bn%7D%60%7D)).join(%22%5Cn%22)%3A%5B...document.querySelectorAll(%22ytd-rich-grid-media%22)%5D.map((e%3D%3E%7Bconst%20t%3De.querySelector(%22a%23thumbnail%22)%3F.href%3F%3F%22%22%2Cr%3D%2Fv%3D(.%7B11%7D)%2F.exec(t)%3F.%5B1%5D%2Ci%3De.querySelector(%22span%23text.ytd-thumbnail-overlay-time-status-renderer%22)%3F.innerText.trim()%2Cn%3De.querySelector(%22%23video-title%22)%3F.innerText%3Breturn%60%24%7Br%7D%20%24%7Bi%7D%20%24%7Bn%7D%60%7D)).join(%22%5Cn%22)%2Cconsole.log(videos)%2Cnavigator.clipboard.writeText(videos).catch((e%3D%3Econsole.error(e)))%3B%7D)()";function pp({broadcast:e,player:t}){var r;let n=o=>Y(o,2);return{videoLink:e.type==="video"?{text:e.videoTitle,href:"https://youtube.com/watch?v="+e.videoId}:null,actual:{video:(r=t.videoId)!=null?r:"",playerState:Pr(t.state),currentTime:t.time!=null?n(t.time):"-"},scheduled:{video:e.type==="video"?e.videoId:"-",playerState:e.type,currentTime:e.type==="video"?n(e.currentTime):"-"},secondsBehindSchedule:e.type==="video"&&t.time!=null?(e.currentTime-t.time).toFixed(2):"-",timeRemainingInVideo:t.duration!=null&&t.time!=null?n(t.duration-t.time):"-"}}function Oc(e){let{broadcast:t,player:n,onClose:r}=e,o=pp({broadcast:t,player:n});return C(zt,null,C("button",{className:"close-button",onClick:r},"close"),C("h1",null,"Culture Machine"),C("p",null,"Made by ",C("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."," ",C("a",{href:"https://github.com/benchristel/tv"},"Source code here"),". Some rights reserved. See the"," ",C("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"license"),"."),C("p",null,C("span",{dangerouslySetInnerHTML:{__html:`
          <a href="${Lc}">
            Bookmarklet to scrape videos from YouTube
          </a>
        `}})," ","(",C("a",{href:"https://github.com/benchristel/tv#what-is-a-bookmarklet"},"What's this?"),")"),C("hr",null),C("h2",null,"Video Info"),C("p",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},"Now playing:"," ",o.videoLink?C("a",{href:o.videoLink.href},o.videoLink.text):"-"),C("table",null,C("thead",null,C("tr",null,C("td",null),C("th",{scope:"col"},"actual"),C("th",{scope:"col"},"scheduled"))),C("tbody",null,C("tr",null,C("th",{scope:"row"},"video"),C("td",null,o.actual.video),C("td",null,o.scheduled.video)),C("tr",null,C("th",{scope:"row"},"player state"),C("td",null,o.actual.playerState),C("td",null,o.scheduled.playerState)),C("tr",null,C("th",{scope:"row"},"current time"),C("td",null,o.actual.currentTime),C("td",null,o.scheduled.currentTime)))),C("p",null,"Seconds behind schedule: ",o.secondsBehindSchedule),C("p",null,"Time remaining in video: ",o.timeRemainingInVideo),C("h2",null,"Channel Stats"),C("table",null,C("thead",null,C("tr",null,C("th",{scope:"col"},"name"),C("th",{scope:"col"},"duration"))),C("tbody",null,e.channels.map(a=>C(mp,{channel:a})))),C("div",{style:{height:60}}))}function mp(e){return C("tr",null,C("td",null,e.channel.getName()),C("td",null,Xe(e.channel.getTotalDuration())))}var fl=class extends El{componentDidUpdate(){let{player:t,volume:n,commands:r}=this.props;t.setVolume(zo(n)),r.forEach(o=>{switch(o.type){case"play":t.playVideo();break;case"cue":t.cueVideoById(o.videoId,o.timestamp);break;case"seek":t.seekTo(o.timestamp);break;default:console.error("unexpected video command type",o.type,o)}})}render(){return null}};function zo(e){return gp(e/100)*100}_("fromPerceivedVolume",{"returns 0 given 0"(){p(zo(0),S,0)},"returns 100 given 100"(){p(zo(100),S,100)},"returns 25 given 50"(){p(zo(50),S,25)}});function gp(e){return e*e}function Wc(e){return{state:e.getPlayerState(),videoId:Dn(e.getVideoUrl()),time:e.getCurrentTime(),duration:e.getDuration()}}function Rn(e,t){let n={};return r=>(r in n||(Object.keys(n).length===e&&(n={}),n[r]=t(r)),n[r])}_("cache",{"caches a value"(){let e=0,t=Rn(1,()=>(e++,123));t("foo"),t("foo"),p(e,S,1)},"computes and caches values by key"(){let e=Rn(2,t=>t+"x");p(e("foo"),S,"foox"),p(e("bar"),S,"barx")},"caches multiple values"(){let e=0,t=Rn(2,n=>(e++,n+"x"));t("foo"),t("foo"),t("bar"),t("bar"),p(e,S,2),p(t("foo"),S,"foox"),p(t("bar"),S,"barx")},"a max size of 0 means no limit"(){let e=0,t=Rn(0,()=>(e++,123));t("a"),t("b"),t("c"),p(e,S,3)}});function Ar(e){let t=1779033703,n=3144134277,r=1013904242,o=2773480762;for(let a=0,i;a<e.length;a++)i=e.charCodeAt(a),t=n^Math.imul(t^i,597399067),n=r^Math.imul(n^i,2869860233),r=o^Math.imul(r^i,951274213),o=t^Math.imul(o^i,2716044179);return t=Math.imul(r^t>>>18,597399067),n=Math.imul(o^n>>>22,2869860233),r=Math.imul(t^r>>>17,951274213),o=Math.imul(n^o>>>19,2716044179),[(t^n^r^o)>>>0,(n^t)>>>0,(r^t)>>>0,(o^t)>>>0]}_("cyrb128_32",{"hashes unix timestamps to random-looking values"(){p(Ar("1661673600"),L,[1866196007,1194674827,898714046,497018642]),p(Ar("1661760000"),L,[3655929289,901600698,732811234,3355023249]),p(Ar("1661846400"),L,[2165297363,2940322590,3636107238,4143219755])}});function Qo(e,t,n,r){function o(){e|=0,t|=0,n|=0,r|=0;var a=(e+t|0)+r|0;return r=r+1|0,e=t^t>>>9,t=n+(n<<3)|0,n=n<<21|n>>>11,n=n+a|0,(a>>>0)/4294967296}for(let a=0;a<20;a++)o();return o}function Jo(e,t,n){return e+Math.floor(n()*(t+1-e))}_("sfc32",{"flips coins fairly"(){let e=0,t=0,n=Qo(0,0,0,0);for(let r=0;r<200;r++)n()<.5?e++:t++;p(e-t,S,-8)},"generates a reasonably uniform distribution of numbers"(){let e=new Set,t=Qo(0,0,0,0);for(let n=0;n<100;n++)e.add(Math.floor(t()*1e4));p(e.size,S,99)}});_("randomIntInRange",{"when low and high are the same"(){p(Jo(3,3,Math.random),S,3)},"when low and high are 1 apart"(){let e=new Set;for(let t=0;t<30;t++)e.add(Jo(0,1,Math.random));p(e,L,new Set([0,1]))}});function K(e,t){let n=-1,r=e.length-1;for(;n<r;){let o=yp(n,r);t(e[o])?n=o:r=o-1}return e[n]}function yp(e,t){return Math.ceil((e+t)/2)}_("binarySearch",{"returns undefined given an empty array"(){p(K([],()=>!1),S,void 0)},"returns an element that is to the left of the target"(){p(K([1],()=>!0),S,1)},"returns undefined when the only element is not left of the target"(){p(K([1],()=>!1),S,void 0)},"returns the rightmost element that is left of the target"(){p(K([1,2,3,4],e=>e<=2.5),S,2)},"works with duplicates"(){p(K([0,1,2,3,0,0,0,0,0],e=>e>0),S,3)},"works with two elements"(){p(K([1,2],e=>e<=1.5),S,1),p(K([1,2],e=>e<=2),S,2)},"works with three elements"(){p(K([1,2,3],e=>e<=1.5),S,1),p(K([1,2,3],e=>e<=2),S,2),p(K([1,2,3],e=>e<=3),S,3)},"works with four elements"(){p(K([1,2,3,4],e=>e<=1.5),S,1),p(K([1,2,3,4],e=>e<=2),S,2),p(K([1,2,3,4],e=>e<=3),S,3),p(K([1,2,3,4],e=>e<=4),S,4)},"works with five elements"(){p(K([1,2,3,4,5],e=>e<=1.5),S,1),p(K([1,2,3,4,5],e=>e<=2),S,2),p(K([1,2,3,4,5],e=>e<=3),S,3),p(K([1,2,3,4,5],e=>e<=4),S,4),p(K([1,2,3,4,5],e=>e<=5),S,5)}});var hl=8*3600,Uc=24*3600;function Ct(e,t){let n=Rn(1,An(t)),r=null;return{getBroadcast:o,getTotalDuration:a,getName(){return e}};function o(i){var g;let l=i/1e3,s=(l-hl)%Uc,c=l-s,v=n(String(c)),D=K(v,M=>M.startSecondOfDay<=s);return(D==null?void 0:D.type)==="video"?{type:"video",videoId:D.videoId,videoTitle:D.videoTitle,currentTime:s-D.startSecondOfDay+D.startSecondOfVideo}:{type:"nothing",nextVideoId:(g=D==null?void 0:D.nextVideoId)!=null?g:""}}function a(){return r==null&&(r=t.flatMap(Tp).map(Mn).reduce(vp,0)),r}}var An=e=>t=>{if(_o(e))return[];e=[...e];let n=Qo(...Ar(t)),r=0,o=[],a=0;for(;r<Uc;){a===e.length&&(a=0),Sp(e,a,Jo(a,e.length-1,n));let i=e[a++];for(let l of i.videos){o.push({type:"nothing",startSecondOfDay:r,nextVideoId:l.videoId}),r+=ve;for(let s of l.segments)o.push({type:"video",videoId:l.videoId,videoTitle:l.title,startSecondOfDay:r,startSecondOfVideo:s.start}),r+=Yo(s)}}return o};function Sp(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function vp(e,t){return e+t}function Tp(e){return e.videos}function wt(...e){return{videoId:"",title:"",segments:e}}function Ir(){return!0}var Vc=[];_("a Channel",{"broadcasts nothing given no episodes"(){let e=Ct("",Vc);p(e.getBroadcast(999),L,{type:"nothing",nextVideoId:""})},"starts a video when it's supposed to start"(){let e=[Fe([wt(qe(1e3,2e3))])],t=Ct("",e),n=(hl+5)*1e3;p(t.getBroadcast(n),L,{type:"video",currentTime:1003,videoId:"",videoTitle:""})},"has a total duration of 0 given no videos"(){let e=Ct("",Vc);p(e.getTotalDuration(),S,0)},"sums the durations of its videos"(){let e=[Fe([wt({start:0,end:1}),wt({start:0,end:2})]),Fe([wt({start:0,end:3})])],t=Ct("",e);p(t.getTotalDuration(),S,6)}});_("ScheduleGenerator",{"schedules a single 24-hour video"(){let e=[Fe([je(je({},wt(_e(3600*24))),{videoId:"the-video-id"})])],t=An(e);p(t(""),L,[{type:"nothing",startSecondOfDay:0,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:jt(Ir),startSecondOfDay:2,startSecondOfVideo:0}])},"schedules a 12-hour video twice"(){let e=[Fe([je(je({},wt(_e(3600*12))),{videoId:"the-video-id"})])],t=An(e);p(t(""),L,[{type:"nothing",startSecondOfDay:0,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:jt(Ir),startSecondOfDay:2,startSecondOfVideo:0},{type:"nothing",startSecondOfDay:43202,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:jt(Ir),startSecondOfDay:43204,startSecondOfVideo:0}])},"schedules a time window of a video"(){let e=[Fe([je(je({},wt(qe(3600,3600*13))),{videoId:"the-video-id"})])],t=An(e);p(t(""),L,[{type:"nothing",startSecondOfDay:0,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:jt(Ir),startSecondOfDay:2,startSecondOfVideo:3600},{type:"nothing",startSecondOfDay:43202,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:jt(Ir),startSecondOfDay:43204,startSecondOfVideo:3600}])},"picks the videos to show randomly"(){let e=["one","two","three"].map(n=>Fe([je(je({},wt(_e(3600*2))),{videoId:n})])),t=An(e);p(t("asdfx").map(n=>n.videoId).filter(Boolean),L,["three","one","two","three","two","one","one","two","three","two","three","one"])}});function _c(e,t){let n=pl(t.flatMap(l=>l.videos)),r=n.map(l=>l.duration).reduce(Ep,0);return{getName:o,getBroadcast:a,getTotalDuration:i};function o(){return e}function a(l){var D;let c=l/1e3%r,v=K(n,g=>g.startSecondOfSchedule<=c);return(v==null?void 0:v.type)==="video"?{type:"video",videoId:v.videoId,videoTitle:v.videoTitle,currentTime:c-v.startSecondOfSchedule+v.startSecondOfVideo}:{type:"nothing",nextVideoId:(D=v==null?void 0:v.nextVideoId)!=null?D:""}}function i(){return 0}}function pl(e){let t=7,n=0,r=[];for(let o of e)if(o.segments.length!==1){r.push({type:"nothing",nextVideoId:o.videoId,duration:ve,startSecondOfSchedule:n}),n+=ve,r.push({type:"video",videoId:"TxJtoBAa2w0",videoTitle:"",duration:3,startSecondOfVideo:3,startSecondOfSchedule:n}),n+=3;for(let a=0;a<o.segments.length;a++){let i=o.segments[a];if(a!==0){let l=wp(i,t);r.push({type:"video",videoId:o.videoId,videoTitle:o.title,duration:l.duration,startSecondOfVideo:l.start,startSecondOfSchedule:n}),n+=l.duration}if(a!==Cp(o.segments)){let l=Dp(i,t);r.push({type:"video",videoId:o.videoId,videoTitle:o.title,duration:l.duration,startSecondOfVideo:l.start,startSecondOfSchedule:n}),n+=l.duration}}}return r}_("createSchedule",{"returns empty when each video has only one segment"(){let e=[ml("",_e(60)),ml("",_e(60))];p(pl(e),L,[])},"plays the end of the first segment and the beginning of the second"(){let e=[ml("id-1",qe(0,60),qe(120,999))];p(pl(e),L,[{type:"nothing",nextVideoId:"id-1",duration:2,startSecondOfSchedule:0},{type:"video",videoId:"TxJtoBAa2w0",videoTitle:"",duration:3,startSecondOfVideo:3,startSecondOfSchedule:2},{type:"video",videoId:"id-1",videoTitle:"",duration:7,startSecondOfVideo:53,startSecondOfSchedule:5},{type:"video",videoId:"id-1",videoTitle:"",duration:7,startSecondOfVideo:120,startSecondOfSchedule:12}])}});function Cp(e){return e.length-1}function wp(e,t){return{start:e.start,duration:t}}function Dp(e,t){return{start:e.end-t,duration:t}}var Ep=(e,t)=>e+t;function ml(e,...t){return{videoId:e,title:"",segments:t}}function jc(e){return C("div",{className:"volume"},C("div",{className:"volume-icon"}),C("input",{"aria-label":"volume",type:"range",min:"0",max:"100",onChange:t=>e.onChange(t.target.value),value:e.volume}))}function Yc(e){return{type:"nothing",nextVideoId:e}}function $e(e,t){let n=t.map(r=>Mn(r)).reduce(kp,0)+t.length*ve;return{getBroadcast:r=>{let o=r/1e3,a=0,i=o%n;for(let l of t){let{videoId:s,title:c}=l,v=Mn(l);if(a+ve>i)return Yc(s);if(a+=ve,a+v>i)return{type:"video",currentTime:i-a,videoId:s,videoTitle:c};a+=v}return Yc("")},getName:()=>e,getTotalDuration:()=>n}}var kp=(e,t)=>e+t;_("looping channel",{"plays the first episode after the second"(){let e=$e("Jonathan",[Dt("first","The First",100),Dt("second","The Second",100)]);p(e.getBroadcast(250*1e3),L,{videoId:"first",videoTitle:"The First",currentTime:44,type:"video"})},"uses the provided name"(){let e=$e("Jonathan",[]);p(e.getName(),S,"Jonathan")},"when no videos are provided, plays nothing"(){let e=$e("Jonathan",[]);p(e.getBroadcast(42).type,S,"nothing")},"plays a first video at the beginning"(){let e=$e("Jonathan",[Dt("the-id","the-title",42)]);p(e.getBroadcast(0+ve*1e3),L,{type:"video",videoId:"the-id",currentTime:0,videoTitle:"the-title"})},"plays a video all the way though"(){let e=$e("Jonathan",[Dt("the-id","the-title",42)]);p(e.getBroadcast(1e3+ve*1e3),L,{type:"video",videoId:"the-id",currentTime:1,videoTitle:"the-title"})},"puts a gap between videos"(){let e=$e("Jonathan",[Dt("first","The First",100),Dt("second","The Second",10)]);p(e.getBroadcast(103*1e3),L,{type:"nothing",nextVideoId:"second"})},"plays a second episode after the first"(){let e=$e("Jonathan",[Dt("first","The First",1),Dt("second","The Second",1)]);p(e.getBroadcast(2*ve*1e3+1e3),L,{type:"video",videoId:"second",currentTime:0,videoTitle:"The Second"})}});function Dt(e,t,n){return{videoId:e,title:t,segments:[{start:0,end:n}]}}var gl=Bc.map(([e,t,n])=>{switch(t){case"shuffle":return Ct(e,n);case"test-segment-boundaries":return _c(e,n);case"loop":return $e(e,n.flatMap(r=>r.videos))}});function bc(){let[e,t]=Pc(),[n,r]=Pe(!1),[o,a]=Pe(gl[0]),[i,l]=Pe(100),s=Hc(),c=e?o.getBroadcast(s):Nc(),v=wc(xc("player-container")),D=Wc(v),g=D.state,M=g!==ae.PLAYING,B=Fc(c,D);return C(Mp,{effects:C(fl,{player:v,commands:B,volume:i}),screen:C("div",{className:n?"info-pane-open":""},C("div",{className:"player-assembly"},C("div",{id:"player-container"}),M&&C("div",{className:"black-screen"},C(Rc,{code:g,channel:o})),!e&&C(Pp,{onClick:t})),C("div",{className:"info-pane"},C(Oc,{player:D,broadcast:c,channels:gl,onClose:()=>r(!1)})),C("div",{className:"info-pane-close-overlay","aria-hidden":!0,onClick:()=>r(!1)})),controlPanel:C(zt,null,C(Ac,{channels:gl,onChannelSelected:A=>{a(A),t()}}),C(jc,{volume:i,onChange:l}),C("button",{className:n?"info-button info-button-info-pane-open":"info-button",onClick:()=>r(!n)},"Info"))})}function Mp(e){return C("div",{className:"App"},C("div",{className:"bezel"},C("div",{className:"screen"},e.screen),C("div",{style:{height:"12px"}}),C("div",{className:"controls"},e.controlPanel),e.effects))}function Pp(e){return C("button",{id:"start",onClick:e.onClick},"▸ Play")}function zc(){let[e,t]=Pe("");return Qt(()=>{mc(Tc()).then(gc).then(t).catch(n=>t(n.message))},[]),/fail/i.test(e)?C("div",{className:"TestResults"},C("code",null,C("pre",null,e))):null}Ji(C(bc,null),document.getElementById("app"));Ji(C(zc,null),document.getElementById("test-results"));
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
