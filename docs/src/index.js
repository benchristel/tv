var Tr=(e,t,n)=>new Promise((r,o)=>{var a=s=>{try{i(n.next(s))}catch(c){o(c)}},l=s=>{try{i(n.throw(s))}catch(c){o(c)}},i=s=>s.done?r(s.value):Promise.resolve(s.value).then(a,l);i((n=n.apply(e,t)).next())});function Je(e,t,n){return n={path:t,exports:{},require:function(r,o){return Tc(r,o==null?n.path:o)}},e(n,n.exports),n.exports}function Tc(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Yl=Object.getOwnPropertySymbols,Sc=Object.prototype.hasOwnProperty,Ec=Object.prototype.propertyIsEnumerable;function Cc(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function wc(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch(a){return!1}}var Pc=wc()?Object.assign:function(e,t){for(var n,r=Cc(e),o,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var l in n)Sc.call(n,l)&&(r[l]=n[l]);if(Yl){o=Yl(n);for(var i=0;i<o.length;i++)Ec.call(n,o[i])&&(r[o[i]]=n[o[i]])}}return r},_=Pc;var kc=Je(function(e,t){var n=60103,r=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,a=60110,l=60112;t.Suspense=60113;var i=60115,s=60116;if(typeof Symbol=="function"&&Symbol.for){var c=Symbol.for;n=c("react.element"),r=c("react.portal"),t.Fragment=c("react.fragment"),t.StrictMode=c("react.strict_mode"),t.Profiler=c("react.profiler"),o=c("react.provider"),a=c("react.context"),l=c("react.forward_ref"),t.Suspense=c("react.suspense"),i=c("react.memo"),s=c("react.lazy")}var T=typeof Symbol=="function"&&Symbol.iterator;function G(h){return h===null||typeof h!="object"?null:(h=T&&h[T]||h["@@iterator"],typeof h=="function"?h:null)}function y(h){for(var C="https://reactjs.org/docs/error-decoder.html?invariant="+h,O=1;O<arguments.length;O++)C+="&args[]="+encodeURIComponent(arguments[O]);return"Minified React error #"+h+"; visit "+C+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H={};function A(h,C,O){this.props=h,this.context=C,this.refs=H,this.updater=O||P}A.prototype.isReactComponent={},A.prototype.setState=function(h,C){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error(y(85));this.updater.enqueueSetState(this,h,C,"setState")},A.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function f(){}f.prototype=A.prototype;function u(h,C,O){this.props=h,this.context=C,this.refs=H,this.updater=O||P}var d=u.prototype=new f;d.constructor=u,_(d,A.prototype),d.isPureReactComponent=!0;var p={current:null},m=Object.prototype.hasOwnProperty,B={key:!0,ref:!0,__self:!0,__source:!0};function w(h,C,O){var z,v={},k=null,I=null;if(C!=null)for(z in C.ref!==void 0&&(I=C.ref),C.key!==void 0&&(k=""+C.key),C)m.call(C,z)&&!B.hasOwnProperty(z)&&(v[z]=C[z]);var W=arguments.length-2;if(W===1)v.children=O;else if(1<W){for(var L=Array(W),te=0;te<W;te++)L[te]=arguments[te+2];v.children=L}if(h&&h.defaultProps)for(z in W=h.defaultProps,W)v[z]===void 0&&(v[z]=W[z]);return{$$typeof:n,type:h,key:k,ref:I,props:v,_owner:p.current}}function M(h,C){return{$$typeof:n,type:h.type,key:C,ref:h.ref,props:h.props,_owner:h._owner}}function F(h){return typeof h=="object"&&h!==null&&h.$$typeof===n}function N(h){var C={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(O){return C[O]})}var K=/\/+/g;function ve(h,C){return typeof h=="object"&&h!==null&&h.key!=null?N(""+h.key):C.toString(36)}function xt(h,C,O,z,v){var k=typeof h;(k==="undefined"||k==="boolean")&&(h=null);var I=!1;if(h===null)I=!0;else switch(k){case"string":case"number":I=!0;break;case"object":switch(h.$$typeof){case n:case r:I=!0}}if(I)return I=h,v=v(I),h=z===""?"."+ve(I,0):z,Array.isArray(v)?(O="",h!=null&&(O=h.replace(K,"$&/")+"/"),xt(v,C,O,"",function(te){return te})):v!=null&&(F(v)&&(v=M(v,O+(!v.key||I&&I.key===v.key?"":(""+v.key).replace(K,"$&/")+"/")+h)),C.push(v)),1;if(I=0,z=z===""?".":z+":",Array.isArray(h))for(var W=0;W<h.length;W++){k=h[W];var L=z+ve(k,W);I+=xt(k,C,O,L,v)}else if(L=G(h),typeof L=="function")for(h=L.call(h),W=0;!(k=h.next()).done;)k=k.value,L=z+ve(k,W++),I+=xt(k,C,O,L,v);else if(k==="object")throw C=""+h,Error(y(31,C==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":C));return I}function ie(h,C,O){if(h==null)return h;var z=[],v=0;return xt(h,z,"","",function(k){return C.call(O,k,v++)}),z}function ae(h){if(h._status===-1){var C=h._result;C=C(),h._status=0,h._result=C,C.then(function(O){h._status===0&&(O=O.default,h._status=1,h._result=O)},function(O){h._status===0&&(h._status=2,h._result=O)})}if(h._status===1)return h._result;throw h._result}var yt={current:null};function se(){var h=yt.current;if(h===null)throw Error(y(321));return h}var vt={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:p,IsSomeRendererActing:{current:!1},assign:_};t.Children={map:ie,forEach:function(h,C,O){ie(h,function(){C.apply(this,arguments)},O)},count:function(h){var C=0;return ie(h,function(){C++}),C},toArray:function(h){return ie(h,function(C){return C})||[]},only:function(h){if(!F(h))throw Error(y(143));return h}},t.Component=A,t.PureComponent=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vt,t.cloneElement=function(h,C,O){if(h==null)throw Error(y(267,h));var z=_({},h.props),v=h.key,k=h.ref,I=h._owner;if(C!=null){if(C.ref!==void 0&&(k=C.ref,I=p.current),C.key!==void 0&&(v=""+C.key),h.type&&h.type.defaultProps)var W=h.type.defaultProps;for(L in C)m.call(C,L)&&!B.hasOwnProperty(L)&&(z[L]=C[L]===void 0&&W!==void 0?W[L]:C[L])}var L=arguments.length-2;if(L===1)z.children=O;else if(1<L){W=Array(L);for(var te=0;te<L;te++)W[te]=arguments[te+2];z.children=W}return{$$typeof:n,type:h.type,key:v,ref:k,props:z,_owner:I}},t.createContext=function(h,C){return C===void 0&&(C=null),h={$$typeof:a,_calculateChangedBits:C,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider={$$typeof:o,_context:h},h.Consumer=h},t.createElement=w,t.createFactory=function(h){var C=w.bind(null,h);return C.type=h,C},t.createRef=function(){return{current:null}},t.forwardRef=function(h){return{$$typeof:l,render:h}},t.isValidElement=F,t.lazy=function(h){return{$$typeof:s,_payload:{_status:-1,_result:h},_init:ae}},t.memo=function(h,C){return{$$typeof:i,type:h,compare:C===void 0?null:C}},t.useCallback=function(h,C){return se().useCallback(h,C)},t.useContext=function(h,C){return se().useContext(h,C)},t.useDebugValue=function(){},t.useEffect=function(h,C){return se().useEffect(h,C)},t.useImperativeHandle=function(h,C,O){return se().useImperativeHandle(h,C,O)},t.useLayoutEffect=function(h,C){return se().useLayoutEffect(h,C)},t.useMemo=function(h,C){return se().useMemo(h,C)},t.useReducer=function(h,C,O){return se().useReducer(h,C,O)},t.useRef=function(h){return se().useRef(h)},t.useState=function(h){return se().useState(h)},t.version="17.0.2"}),U=Je(function(e){e.exports=kc});var Oh=U.Children,Ql=U.Component,Lt=U.Fragment,Uh=U.Profiler,Vh=U.PureComponent,_h=U.StrictMode,jh=U.Suspense,zh=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yh=U.cloneElement,Qh=U.createContext,R=U.createElement,bh=U.createFactory,Jh=U.createRef,Kh=U.forwardRef,Zh=U.isValidElement,Xh=U.lazy,qh=U.memo,$h=U.useCallback,ep=U.useContext,tp=U.useDebugValue,Ot=U.useEffect,np=U.useImperativeHandle,rp=U.useLayoutEffect,op=U.useMemo,ap=U.useReducer,Tn=U.useRef,He=U.useState,lp=U.version;var Dc=Je(function(e,t){var n,r,o,a;if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var c=null,T=null,G=function(){if(c!==null)try{var v=t.unstable_now();c(!0,v),c=null}catch(k){throw setTimeout(G,0),k}};n=function(v){c!==null?setTimeout(n,0,v):(c=v,setTimeout(G,0))},r=function(v,k){T=setTimeout(v,k)},o=function(){clearTimeout(T)},t.unstable_shouldYield=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var y=window.setTimeout,P=window.clearTimeout;if(typeof console!="undefined"){var H=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof H!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,f=null,u=-1,d=5,p=0;t.unstable_shouldYield=function(){return t.unstable_now()>=p},a=function(){},t.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):d=0<v?Math.floor(1e3/v):5};var m=new MessageChannel,B=m.port2;m.port1.onmessage=function(){if(f!==null){var v=t.unstable_now();p=v+d;try{f(!0,v)?B.postMessage(null):(A=!1,f=null)}catch(k){throw B.postMessage(null),k}}else A=!1},n=function(v){f=v,A||(A=!0,B.postMessage(null))},r=function(v,k){u=y(function(){v(t.unstable_now())},k)},o=function(){P(u),u=-1}}function w(v,k){var I=v.length;v.push(k);e:for(;;){var W=I-1>>>1,L=v[W];if(L!==void 0&&0<N(L,k))v[W]=k,v[I]=L,I=W;else break e}}function M(v){return v=v[0],v===void 0?null:v}function F(v){var k=v[0];if(k!==void 0){var I=v.pop();if(I!==k){v[0]=I;e:for(var W=0,L=v.length;W<L;){var te=2*(W+1)-1,Tt=v[te],vn=te+1,Wt=v[vn];if(Tt!==void 0&&0>N(Tt,I))Wt!==void 0&&0>N(Wt,Tt)?(v[W]=Wt,v[vn]=I,W=vn):(v[W]=Tt,v[te]=I,W=te);else if(Wt!==void 0&&0>N(Wt,I))v[W]=Wt,v[vn]=I,W=vn;else break e}}return k}return null}function N(v,k){var I=v.sortIndex-k.sortIndex;return I!==0?I:v.id-k.id}var K=[],ve=[],xt=1,ie=null,ae=3,yt=!1,se=!1,vt=!1;function h(v){for(var k=M(ve);k!==null;){if(k.callback===null)F(ve);else if(k.startTime<=v)F(ve),k.sortIndex=k.expirationTime,w(K,k);else break;k=M(ve)}}function C(v){if(vt=!1,h(v),!se)if(M(K)!==null)se=!0,n(O);else{var k=M(ve);k!==null&&r(C,k.startTime-v)}}function O(v,k){se=!1,vt&&(vt=!1,o()),yt=!0;var I=ae;try{for(h(k),ie=M(K);ie!==null&&(!(ie.expirationTime>k)||v&&!t.unstable_shouldYield());){var W=ie.callback;if(typeof W=="function"){ie.callback=null,ae=ie.priorityLevel;var L=W(ie.expirationTime<=k);k=t.unstable_now(),typeof L=="function"?ie.callback=L:ie===M(K)&&F(K),h(k)}else F(K);ie=M(K)}if(ie!==null)var te=!0;else{var Tt=M(ve);Tt!==null&&r(C,Tt.startTime-k),te=!1}return te}finally{ie=null,ae=I,yt=!1}}var z=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(v){v.callback=null},t.unstable_continueExecution=function(){se||yt||(se=!0,n(O))},t.unstable_getCurrentPriorityLevel=function(){return ae},t.unstable_getFirstCallbackNode=function(){return M(K)},t.unstable_next=function(v){switch(ae){case 1:case 2:case 3:var k=3;break;default:k=ae}var I=ae;ae=k;try{return v()}finally{ae=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=z,t.unstable_runWithPriority=function(v,k){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var I=ae;ae=v;try{return k()}finally{ae=I}},t.unstable_scheduleCallback=function(v,k,I){var W=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?W+I:W):I=W,v){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=I+L,v={id:xt++,callback:k,priorityLevel:v,startTime:I,expirationTime:L,sortIndex:-1},I>W?(v.sortIndex=I,w(ve,v),M(K)===null&&v===M(ve)&&(vt?o():vt=!0,r(C,I-W))):(v.sortIndex=L,w(K,v),se||yt||(se=!0,n(O))),v},t.unstable_wrapCallback=function(v){var k=ae;return function(){var I=ae;ae=k;try{return v.apply(this,arguments)}finally{ae=I}}}}),ne=Je(function(e){e.exports=Dc});function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!U)throw Error(S(227));var bl=new Set,Sn={};function St(e,t){Ut(e,t),Ut(e+"Capture",t)}function Ut(e,t){for(Sn[e]=t,e=0;e<t.length;e++)bl.add(t[e])}var _e=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Rc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jl=Object.prototype.hasOwnProperty,Kl={},Zl={};function Ac(e){return Jl.call(Zl,e)?!0:Jl.call(Kl,e)?!1:Rc.test(e)?Zl[e]=!0:(Kl[e]=!0,!1)}function Mc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ic(e,t,n,r){if(t===null||typeof t=="undefined"||Mc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,o,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var No=/[\-:]([a-z])/g;function Fo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(No,Fo);ue[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(No,Fo);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(No,Fo);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function xo(e,t,n,r){var o=ue.hasOwnProperty(t)?ue[t]:null,a=o!==null?o.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");a||(Ic(t,n,o,r)&&(n=null),r||o===null?Ac(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,En=60103,Ct=60106,Ke=60107,Wo=60108,Cn=60114,Lo=60109,Oo=60110,Sr=60112,wn=60113,Er=60120,Cr=60115,Uo=60116,Vo=60121,_o=60128,Xl=60129,jo=60130,zo=60131;typeof Symbol=="function"&&Symbol.for&&(re=Symbol.for,En=re("react.element"),Ct=re("react.portal"),Ke=re("react.fragment"),Wo=re("react.strict_mode"),Cn=re("react.profiler"),Lo=re("react.provider"),Oo=re("react.context"),Sr=re("react.forward_ref"),wn=re("react.suspense"),Er=re("react.suspense_list"),Cr=re("react.memo"),Uo=re("react.lazy"),Vo=re("react.block"),re("react.scope"),_o=re("react.opaque.id"),Xl=re("react.debug_trace_mode"),jo=re("react.offscreen"),zo=re("react.legacy_hidden"));var re,ql=typeof Symbol=="function"&&Symbol.iterator;function Pn(e){return e===null||typeof e!="object"?null:(e=ql&&e[ql]||e["@@iterator"],typeof e=="function"?e:null)}var Yo;function kn(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||""}return`
`+Yo+e}var Qo=!1;function wr(e,t){if(!e||Qo)return"";Qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),a=r.stack.split(`
`),l=o.length-1,i=a.length-1;1<=l&&0<=i&&o[l]!==a[i];)i--;for(;1<=l&&0<=i;l--,i--)if(o[l]!==a[i]){if(l!==1||i!==1)do if(l--,i--,0>i||o[l]!==a[i])return`
`+o[l].replace(" at new "," at ");while(1<=l&&0<=i);break}}}finally{Qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function Gc(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=wr(e.type,!1),e;case 11:return e=wr(e.type.render,!1),e;case 22:return e=wr(e.type._render,!1),e;case 1:return e=wr(e.type,!0),e;default:return""}}function Vt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ke:return"Fragment";case Ct:return"Portal";case Cn:return"Profiler";case Wo:return"StrictMode";case wn:return"Suspense";case Er:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oo:return(e.displayName||"Context")+".Consumer";case Lo:return(e._context.displayName||"Context")+".Provider";case Sr:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Cr:return Vt(e.type);case Vo:return Vt(e._render);case Uo:t=e._payload,e=e._init;try{return Vt(e(t))}catch(n){}}return null}function Ze(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function $l(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hc(e){var t=$l(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){e._valueTracker||(e._valueTracker=Hc(e))}function ei(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$l(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function kr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}function bo(e,t){var n=t.checked;return _({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ti(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ze(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ni(e,t){t=t.checked,t!=null&&xo(e,"checked",t,!1)}function Ko(e,t){ni(e,t);var n=Ze(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jo(e,t.type,Ze(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ri(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jo(e,t,n){(t!=="number"||kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Bc(e){var t="";return U.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Zo(e,t){return e=_({children:void 0},t),(t=Bc(t.children))&&(e.children=t),e}function _t(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ze(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return _({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ze(n)}}function ai(e,t){var n=Ze(t.value),r=Ze(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function li(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var qo={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function ii(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $o(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ii(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,si=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!==qo.svg||"innerHTML"in e)e.innerHTML=t;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nc=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){Nc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function ui(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function ci(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ui(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Fc=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ea(e,t){if(t){if(Fc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function ta(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ra=null,jt=null,zt=null;function di(e){if(e=An(e)){if(typeof ra!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Rr(t),ra(e.stateNode,e.type,t))}}function fi(e){jt?zt?zt.push(e):zt=[e]:jt=e}function hi(){if(jt){var e=jt,t=zt;if(zt=jt=null,di(e),t)for(e=0;e<t.length;e++)di(t[e])}}function oa(e,t){return e(t)}function pi(e,t,n,r,o){return e(t,n,r,o)}function aa(){}var mi=oa,wt=!1,la=!1;function ia(){(jt!==null||zt!==null)&&(aa(),hi())}function xc(e,t,n){if(la)return e(t,n);la=!0;try{return mi(e,t,n)}finally{la=!1,ia()}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=Rr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var sa=!1;if(_e)try{Yt={},Object.defineProperty(Yt,"passive",{get:function(){sa=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch(e){sa=!1}var Yt;function Wc(e,t,n,r,o,a,l,i,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(T){this.onError(T)}}var In=!1,Ar=null,Mr=!1,ua=null,Lc={onError:function(e){In=!0,Ar=e}};function Oc(e,t,n,r,o,a,l,i,s){In=!1,Ar=null,Wc.apply(Lc,arguments)}function Uc(e,t,n,r,o,a,l,i,s){if(Oc.apply(this,arguments),In){if(In){var c=Ar;In=!1,Ar=null}else throw Error(S(198));Mr||(Mr=!0,ua=c)}}function Pt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!=0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yi(e){if(Pt(e)!==e)throw Error(S(188))}function Vc(e){var t=e.alternate;if(!t){if(t=Pt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return yi(o),e;if(a===r)return yi(o),t;a=a.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,i=o.child;i;){if(i===n){l=!0,n=o,r=a;break}if(i===r){l=!0,r=o,n=a;break}i=i.sibling}if(!l){for(i=a.child;i;){if(i===n){l=!0,n=a,r=o;break}if(i===r){l=!0,r=a,n=o;break}i=i.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function vi(e){if(e=Vc(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Ti(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Si,ca,Ei,Ci,da=!1,Fe=[],Xe=null,qe=null,$e=null,Gn=new Map,Hn=new Map,Bn=[],wi="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fa(e,t,n,r,o){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:o,targetContainers:[r]}}function Pi(e,t){switch(e){case"focusin":case"focusout":Xe=null;break;case"dragenter":case"dragleave":qe=null;break;case"mouseover":case"mouseout":$e=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Nn(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e=fa(t,n,r,o,a),t!==null&&(t=An(t),t!==null&&ca(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function _c(e,t,n,r,o){switch(t){case"focusin":return Xe=Nn(Xe,e,t,n,r,o),!0;case"dragenter":return qe=Nn(qe,e,t,n,r,o),!0;case"mouseover":return $e=Nn($e,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Gn.set(a,Nn(Gn.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Hn.set(a,Nn(Hn.get(a)||null,e,t,n,r,o)),!0}return!1}function jc(e){var t=kt(e.target);if(t!==null){var n=Pt(t);if(n!==null){if(t=n.tag,t===13){if(t=gi(n),t!==null){e.blockedOn=t,Ci(e.lanePriority,function(){ne.unstable_runWithPriority(e.priority,function(){Ei(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ha(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=An(n),t!==null&&ca(t),e.blockedOn=n,!1;t.shift()}return!0}function ki(e,t,n){Ir(e)&&n.delete(t)}function zc(){for(da=!1;0<Fe.length;){var e=Fe[0];if(e.blockedOn!==null){e=An(e.blockedOn),e!==null&&Si(e);break}for(var t=e.targetContainers;0<t.length;){var n=ha(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&Fe.shift()}Xe!==null&&Ir(Xe)&&(Xe=null),qe!==null&&Ir(qe)&&(qe=null),$e!==null&&Ir($e)&&($e=null),Gn.forEach(ki),Hn.forEach(ki)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,da||(da=!0,ne.unstable_scheduleCallback(ne.unstable_NormalPriority,zc)))}function Di(e){function t(o){return Fn(o,e)}if(0<Fe.length){Fn(Fe[0],e);for(var n=1;n<Fe.length;n++){var r=Fe[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xe!==null&&Fn(Xe,e),qe!==null&&Fn(qe,e),$e!==null&&Fn($e,e),Gn.forEach(t),Hn.forEach(t),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)jc(n),n.blockedOn===null&&Bn.shift()}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},pa={},Ri={};_e&&(Ri=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function Hr(e){if(pa[e])return pa[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ri)return pa[e]=t[n];return e}var Ai=Hr("animationend"),Mi=Hr("animationiteration"),Ii=Hr("animationstart"),Gi=Hr("transitionend"),Hi=new Map,ma=new Map,Yc=["abort","abort",Ai,"animationEnd",Mi,"animationIteration",Ii,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Gi,"transitionEnd","waiting","waiting"];function ga(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];o="on"+(o[0].toUpperCase()+o.slice(1)),ma.set(r,t),Hi.set(r,o),St(o,[r])}}var Qc=ne.unstable_now;Qc();var Y=8;function bt(e){if((1&e)!=0)return Y=15,1;if((2&e)!=0)return Y=14,2;if((4&e)!=0)return Y=13,4;var t=24&e;return t!==0?(Y=12,t):(e&32)!=0?(Y=11,32):(t=192&e,t!==0?(Y=10,t):(e&256)!=0?(Y=9,256):(t=3584&e,t!==0?(Y=8,t):(e&4096)!=0?(Y=7,4096):(t=4186112&e,t!==0?(Y=6,t):(t=62914560&e,t!==0?(Y=5,t):e&67108864?(Y=4,67108864):(e&134217728)!=0?(Y=3,134217728):(t=805306368&e,t!==0?(Y=2,t):(1073741824&e)!=0?(Y=1,1073741824):(Y=8,e))))))}function bc(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Jc(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(S(358,e))}}function xn(e,t){var n=e.pendingLanes;if(n===0)return Y=0;var r=0,o=0,a=e.expiredLanes,l=e.suspendedLanes,i=e.pingedLanes;if(a!==0)r=a,o=Y=15;else if(a=n&134217727,a!==0){var s=a&~l;s!==0?(r=bt(s),o=Y):(i&=a,i!==0&&(r=bt(i),o=Y))}else a=n&~l,a!==0?(r=bt(a),o=Y):i!==0&&(r=bt(i),o=Y);if(r===0)return 0;if(r=31-et(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&l)==0){if(bt(t),o<=Y)return t;Y=o}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),o=1<<n,r|=e[n],t&=~o;return r}function Bi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Br(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Jt(24&~t),e===0?Br(10,t):e;case 10:return e=Jt(192&~t),e===0?Br(8,t):e;case 8:return e=Jt(3584&~t),e===0&&(e=Jt(4186112&~t),e===0&&(e=512)),e;case 2:return t=Jt(805306368&~t),t===0&&(t=268435456),t}throw Error(S(358,e))}function Jt(e){return e&-e}function ya(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nr(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-et(t),e[t]=n}var et=Math.clz32?Math.clz32:Kc,Zc=Math.log,Xc=Math.LN2;function Kc(e){return e===0?32:31-(Zc(e)/Xc|0)|0}var qc=ne.unstable_UserBlockingPriority,$c=ne.unstable_runWithPriority,Fr=!0;function ed(e,t,n,r){wt||aa();var o=va,a=wt;wt=!0;try{pi(o,e,t,n,r)}finally{(wt=a)||ia()}}function td(e,t,n,r){$c(qc,va.bind(null,e,t,n,r))}function va(e,t,n,r){if(Fr){var o;if((o=(t&4)==0)&&0<Fe.length&&-1<wi.indexOf(e))e=fa(null,e,t,n,r),Fe.push(e);else{var a=ha(e,t,n,r);if(a===null)o&&Pi(e,r);else{if(o){if(-1<wi.indexOf(e)){e=fa(a,e,t,n,r),Fe.push(e);return}if(_c(a,e,t,n,r))return;Pi(e,r)}Ni(e,t,r,null,n)}}}}function ha(e,t,n,r){var o=na(r);if(o=kt(o),o!==null){var a=Pt(o);if(a===null)o=null;else{var l=a.tag;if(l===13){if(o=gi(a),o!==null)return o;o=null}else if(l===3){if(a.stateNode.hydrate)return a.tag===3?a.stateNode.containerInfo:null;o=null}else a!==o&&(o=null)}}return Ni(e,t,r,o,n),null}var tt=null,Ta=null,xr=null;function Fi(){if(xr)return xr;var e,t=Ta,n=t.length,r,o="value"in tt?tt.value:tt.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[a-r];r++);return xr=o.slice(e,1<r?1-r:void 0)}function Wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function xi(){return!1}function we(e){function t(n,r,o,a,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Lr:xi,this.isPropagationStopped=xi,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var Kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=we(Kt),Wn=_({},Kt,{view:0,detail:0}),nd=we(Wn),Ea,Ca,Ln,Or=_({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(Ea=e.screenX-Ln.screenX,Ca=e.screenY-Ln.screenY):Ca=Ea=0,Ln=e),Ea)},movementY:function(e){return"movementY"in e?e.movementY:Ca}}),Wi=we(Or),rd=_({},Or,{dataTransfer:0}),od=we(rd),ad=_({},Wn,{relatedTarget:0}),Pa=we(ad),ld=_({},Kt,{animationName:0,elapsedTime:0,pseudoElement:0}),id=we(ld),sd=_({},Kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ud=we(sd),cd=_({},Kt,{data:0}),Li=we(cd),dd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hd[e])?!!t[e]:!1}function wa(){return pd}var md=_({},Wn,{key:function(e){if(e.key){var t=dd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=we(md),yd=_({},Or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oi=we(yd),vd=_({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),Td=we(vd),Sd=_({},Kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=we(Sd),Cd=_({},Or,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wd=we(Cd),Pd=[9,13,27,32],ka=_e&&"CompositionEvent"in window,On=null;_e&&"documentMode"in document&&(On=document.documentMode);var kd=_e&&"TextEvent"in window&&!On,Ui=_e&&(!ka||On&&8<On&&11>=On),Vi=String.fromCharCode(32),_i=!1;function ji(e,t){switch(e){case"keyup":return Pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function Dd(e,t){switch(e){case"compositionend":return zi(t);case"keypress":return t.which!==32?null:(_i=!0,Vi);case"textInput":return e=t.data,e===Vi&&_i?null:e;default:return null}}function Rd(e,t){if(Zt)return e==="compositionend"||!ka&&ji(e,t)?(e=Fi(),xr=Ta=tt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ui&&t.locale!=="ko"?null:t.data;default:return null}}var Ad={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ad[e.type]:t==="textarea"}function Qi(e,t,n,r){fi(r),t=Ur(t,"onChange"),0<t.length&&(n=new Sa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Un=null,Vn=null;function Md(e){bi(e,0)}function Vr(e){var t=Xt(e);if(ei(t))return e}function Id(e,t){if(e==="change")return t}var Ji=!1;_e&&(_e?(jr="oninput"in document,jr||(Da=document.createElement("div"),Da.setAttribute("oninput","return;"),jr=typeof Da.oninput=="function"),_r=jr):_r=!1,Ji=_r&&(!document.documentMode||9<document.documentMode));var _r,jr,Da;function Zi(){Un&&(Un.detachEvent("onpropertychange",Ki),Vn=Un=null)}function Ki(e){if(e.propertyName==="value"&&Vr(Vn)){var t=[];if(Qi(t,Vn,e,na(e)),e=Md,wt)e(t);else{wt=!0;try{oa(e,t)}finally{wt=!1,ia()}}}}function Gd(e,t,n){e==="focusin"?(Zi(),Un=t,Vn=n,Un.attachEvent("onpropertychange",Ki)):e==="focusout"&&Zi()}function Hd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vr(Vn)}function Bd(e,t){if(e==="click")return Vr(t)}function Nd(e,t){if(e==="input"||e==="change")return Vr(t)}function Fd(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var ke=typeof Object.is=="function"?Object.is:Fd,xd=Object.prototype.hasOwnProperty;function _n(e,t){if(ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!xd.call(t,n[r])||!ke(e[n[r]],t[n[r]]))return!1;return!0}function Xi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qi(e,t){var n=Xi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xi(n)}}function $i(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$i(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function es(){for(var e=window,t=kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch(r){n=!1}if(n)e=t.contentWindow;else break;t=kr(e.document)}return t}function Ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Wd=_e&&"documentMode"in document&&11>=document.documentMode,qt=null,Aa=null,jn=null,Ma=!1;function ts(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ma||qt==null||qt!==kr(r)||(r=qt,"selectionStart"in r&&Ra(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&_n(jn,r)||(jn=r,r=Ur(Aa,"onSelect"),0<r.length&&(t=new Sa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}ga("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);ga("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ga(Yc,2);for(var ns="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ia=0;Ia<ns.length;Ia++)ma.set(ns[Ia],0);Ut("onMouseEnter",["mouseout","mouseover"]);Ut("onMouseLeave",["mouseout","mouseover"]);Ut("onPointerEnter",["pointerout","pointerover"]);Ut("onPointerLeave",["pointerout","pointerover"]);St("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));St("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));St("onBeforeInput",["compositionend","keypress","textInput","paste"]);St("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));St("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));St("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rs=new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));function os(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uc(r,t,void 0,e),e.currentTarget=null}function bi(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],s=i.instance,c=i.currentTarget;if(i=i.listener,s!==a&&o.isPropagationStopped())break e;os(o,i,c),a=s}else for(l=0;l<r.length;l++){if(i=r[l],s=i.instance,c=i.currentTarget,i=i.listener,s!==a&&o.isPropagationStopped())break e;os(o,i,c),a=s}}}if(Mr)throw e=ua,Mr=!1,ua=null,e}function Q(e,t){var n=ls(t),r=e+"__bubble";n.has(r)||(as(t,e,2,!1),n.add(r))}var is="_reactListening"+Math.random().toString(36).slice(2);function us(e){e[is]||(e[is]=!0,bl.forEach(function(t){rs.has(t)||ss(t,!1,e,null),ss(t,!0,e,null)}))}function ss(e,t,n,r){var o=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,a=n;if(e==="selectionchange"&&n.nodeType!==9&&(a=n.ownerDocument),r!==null&&!t&&rs.has(e)){if(e!=="scroll")return;o|=2,a=r}var l=ls(a),i=e+"__"+(t?"capture":"bubble");l.has(i)||(t&&(o|=4),as(a,e,o,t),l.add(i))}function as(e,t,n,r){var o=ma.get(t);switch(o===void 0?2:o){case 0:o=ed;break;case 1:o=td;break;default:o=va}n=o.bind(null,t,n,e),o=void 0,!sa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ni(e,t,n,r,o){var a=r;if((t&1)==0&&(t&2)==0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var i=r.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;i!==null;){if(l=kt(i),l===null)return;if(s=l.tag,s===5||s===6){r=a=l;continue e}i=i.parentNode}}r=r.return}xc(function(){var c=a,T=na(n),G=[];e:{var y=Hi.get(e);if(y!==void 0){var P=Sa,H=e;switch(e){case"keypress":if(Wr(n)===0)break e;case"keydown":case"keyup":P=gd;break;case"focusin":H="focus",P=Pa;break;case"focusout":H="blur",P=Pa;break;case"beforeblur":case"afterblur":P=Pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Wi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Td;break;case Ai:case Mi:case Ii:P=id;break;case Gi:P=Ed;break;case"scroll":P=nd;break;case"wheel":P=wd;break;case"copy":case"cut":case"paste":P=ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Oi}var A=(t&4)!=0,f=!A&&e==="scroll",u=A?y!==null?y+"Capture":null:y;A=[];for(var d=c,p;d!==null;){p=d;var m=p.stateNode;if(p.tag===5&&m!==null&&(p=m,u!==null&&(m=Mn(d,u),m!=null&&A.push(Yn(d,m,p)))),f)break;d=d.return}0<A.length&&(y=new P(y,H,null,n,T),G.push({event:y,listeners:A}))}}if((t&7)==0){e:{if(y=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",y&&(t&16)==0&&(H=n.relatedTarget||n.fromElement)&&(kt(H)||H[en]))break e;if((P||y)&&(y=T.window===T?T:(y=T.ownerDocument)?y.defaultView||y.parentWindow:window,P?(H=n.relatedTarget||n.toElement,P=c,H=H?kt(H):null,H!==null&&(f=Pt(H),H!==f||H.tag!==5&&H.tag!==6)&&(H=null)):(P=null,H=c),P!==H)){if(A=Wi,m="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(A=Oi,m="onPointerLeave",u="onPointerEnter",d="pointer"),f=P==null?y:Xt(P),p=H==null?y:Xt(H),y=new A(m,d+"leave",P,n,T),y.target=f,y.relatedTarget=p,m=null,kt(T)===c&&(A=new A(u,d+"enter",H,n,T),A.target=p,A.relatedTarget=f,m=A),f=m,P&&H)t:{for(A=P,u=H,d=0,p=A;p;p=$t(p))d++;for(p=0,m=u;m;m=$t(m))p++;for(;0<d-p;)A=$t(A),d--;for(;0<p-d;)u=$t(u),p--;for(;d--;){if(A===u||u!==null&&A===u.alternate)break t;A=$t(A),u=$t(u)}A=null}else A=null;P!==null&&cs(G,y,P,A,!1),H!==null&&f!==null&&cs(G,f,H,A,!0)}}e:{if(y=c?Xt(c):window,P=y.nodeName&&y.nodeName.toLowerCase(),P==="select"||P==="input"&&y.type==="file")var B=Id;else if(Yi(y))if(Ji)B=Nd;else{B=Hd;var w=Gd}else(P=y.nodeName)&&P.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(B=Bd);if(B&&(B=B(e,c))){Qi(G,B,n,T);break e}w&&w(e,y,c),e==="focusout"&&(w=y._wrapperState)&&w.controlled&&y.type==="number"&&Jo(y,"number",y.value)}switch(w=c?Xt(c):window,e){case"focusin":(Yi(w)||w.contentEditable==="true")&&(qt=w,Aa=c,jn=null);break;case"focusout":jn=Aa=qt=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,ts(G,n,T);break;case"selectionchange":if(Wd)break;case"keydown":case"keyup":ts(G,n,T)}var M;if(ka)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Zt?ji(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Ui&&n.locale!=="ko"&&(Zt||F!=="onCompositionStart"?F==="onCompositionEnd"&&Zt&&(M=Fi()):(tt=T,Ta="value"in tt?tt.value:tt.textContent,Zt=!0)),w=Ur(c,F),0<w.length&&(F=new Li(F,e,null,n,T),G.push({event:F,listeners:w}),M?F.data=M:(M=zi(n),M!==null&&(F.data=M)))),(M=kd?Dd(e,n):Rd(e,n))&&(c=Ur(c,"onBeforeInput"),0<c.length&&(T=new Li("onBeforeInput","beforeinput",null,n,T),G.push({event:T,listeners:c}),T.data=M))}bi(G,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Mn(e,n),a!=null&&r.unshift(Yn(e,a,o)),a=Mn(e,t),a!=null&&r.push(Yn(e,a,o))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cs(e,t,n,r,o){for(var a=t._reactName,l=[];n!==null&&n!==r;){var i=n,s=i.alternate,c=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&c!==null&&(i=c,o?(s=Mn(n,a),s!=null&&l.unshift(Yn(n,s,i))):o||(s=Mn(n,a),s!=null&&l.push(Yn(n,s,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}function zr(){}var Ga=null,Ha=null;function ds(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Ba(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fs=typeof setTimeout=="function"?setTimeout:void 0,Ld=typeof clearTimeout=="function"?clearTimeout:void 0;function Na(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function hs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fa=0;function Od(e){return{$$typeof:_o,toString:e,valueOf:e}}var Yr=Math.random().toString(36).slice(2),nt="__reactFiber$"+Yr,Qr="__reactProps$"+Yr,en="__reactContainer$"+Yr,ps="__reactEvents$"+Yr;function kt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hs(e);e!==null;){if(n=e[nt])return n;e=hs(e)}return t}e=n,n=e.parentNode}return null}function An(e){return e=e[nt]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Rr(e){return e[Qr]||null}function ls(e){var t=e[ps];return t===void 0&&(t=e[ps]=new Set),t}var xa=[],nn=-1;function rt(e){return{current:e}}function b(e){0>nn||(e.current=xa[nn],xa[nn]=null,nn--)}function Z(e,t){nn++,xa[nn]=e.current,e.current=t}var ot={},fe=rt(ot),Te=rt(!1),Dt=ot;function rn(e,t){var n=e.type.contextTypes;if(!n)return ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Se(e){return e=e.childContextTypes,e!=null}function br(){b(Te),b(fe)}function ms(e,t,n){if(fe.current!==ot)throw Error(S(168));Z(fe,t),Z(Te,n)}function gs(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(S(108,Vt(t)||"Unknown",o));return _({},n,r)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ot,Dt=fe.current,Z(fe,e),Z(Te,Te.current),!0}function ys(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=gs(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,b(Te),b(fe),Z(fe,e)):b(Te),Z(Te,n)}var Wa=null,Rt=null,Ud=ne.unstable_runWithPriority,La=ne.unstable_scheduleCallback,Oa=ne.unstable_cancelCallback,Vd=ne.unstable_shouldYield,vs=ne.unstable_requestPaint,Ua=ne.unstable_now,_d=ne.unstable_getCurrentPriorityLevel,Kr=ne.unstable_ImmediatePriority,Ts=ne.unstable_UserBlockingPriority,Ss=ne.unstable_NormalPriority,Es=ne.unstable_LowPriority,Cs=ne.unstable_IdlePriority,Va={},jd=vs!==void 0?vs:function(){},je=null,Zr=null,_a=!1,ws=Ua(),he=1e4>ws?Ua:function(){return Ua()-ws};function on(){switch(_d()){case Kr:return 99;case Ts:return 98;case Ss:return 97;case Es:return 96;case Cs:return 95;default:throw Error(S(332))}}function Ps(e){switch(e){case 99:return Kr;case 98:return Ts;case 97:return Ss;case 96:return Es;case 95:return Cs;default:throw Error(S(332))}}function At(e,t){return e=Ps(e),Ud(e,t)}function Qn(e,t,n){return e=Ps(e),La(e,t,n)}function xe(){if(Zr!==null){var e=Zr;Zr=null,Oa(e)}ks()}function ks(){if(!_a&&je!==null){_a=!0;var e=0;try{var t=je;At(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),je=null}catch(n){throw je!==null&&(je=je.slice(e+1)),La(Kr,xe),n}finally{_a=!1}}}var zd=Et.ReactCurrentBatchConfig;function Be(e,t){if(e&&e.defaultProps){t=_({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Xr=rt(null),qr=null,an=null,$r=null;function ja(){$r=an=qr=null}function za(e){var t=Xr.current;b(Xr),e.type._context._currentValue=t}function Ds(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function ln(e,t){qr=e,$r=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!=0&&(Ne=!0),e.firstContext=null)}function De(e,t){if($r!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&($r=e,t=1073741823),t={context:e,observedBits:t,next:null},an===null){if(qr===null)throw Error(S(308));an=t,qr.dependencies={lanes:0,firstContext:t,responders:null}}else an=an.next=t;return e._currentValue}var at=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Rs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function it(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function As(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jn(e,t,n,r){var o=e.updateQueue;at=!1;var a=o.firstBaseUpdate,l=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var s=i,c=s.next;s.next=null,l===null?a=c:l.next=c,l=s;var T=e.alternate;if(T!==null){T=T.updateQueue;var G=T.lastBaseUpdate;G!==l&&(G===null?T.firstBaseUpdate=c:G.next=c,T.lastBaseUpdate=s)}}if(a!==null){G=o.baseState,l=0,T=c=s=null;do{i=a.lane;var y=a.eventTime;if((r&i)===i){T!==null&&(T=T.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var P=e,H=a;switch(i=t,y=n,H.tag){case 1:if(P=H.payload,typeof P=="function"){G=P.call(y,G,i);break e}G=P;break e;case 3:P.flags=P.flags&-4097|64;case 0:if(P=H.payload,i=typeof P=="function"?P.call(y,G,i):P,i==null)break e;G=_({},G,i);break e;case 2:at=!0}}a.callback!==null&&(e.flags|=32,i=o.effects,i===null?o.effects=[a]:i.push(a))}else y={eventTime:y,lane:i,tag:a.tag,payload:a.payload,callback:a.callback,next:null},T===null?(c=T=y,s=G):T=T.next=y,l|=i;if(a=a.next,a===null){if(i=o.shared.pending,i===null)break;a=i.next,i.next=null,o.lastBaseUpdate=i,o.shared.pending=null}}while(1);T===null&&(s=G),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=T,bn|=l,e.lanes=l,e.memoizedState=G}}function Ms(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Is=new U.Component().refs;function eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var to={isMounted:function(e){return(e=e._reactInternals)?Pt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=st(e),a=lt(r,o);a.payload=t,n!=null&&(a.callback=n),it(e,a),ut(e,o,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=st(e),a=lt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),it(e,a),ut(e,o,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=st(e),o=lt(n,r);o.tag=2,t!=null&&(o.callback=t),it(e,o),ut(e,r,n)}};function Gs(e,t,n,r,o,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!_n(n,r)||!_n(o,a):!0}function Hs(e,t,n){var r=!1,o=ot,a=t.contextType;return typeof a=="object"&&a!==null?a=De(a):(o=Se(t)?Dt:fe.current,r=t.contextTypes,a=(r=r!=null)?rn(e,o):ot),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=to,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&to.enqueueReplaceState(t,t.state,null)}function Qa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Is,Ya(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=De(a):(a=Se(t)?Dt:fe.current,o.context=rn(e,a)),Jn(e,n,o,r),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(eo(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&to.enqueueReplaceState(o,o.state,null),Jn(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4)}var no=Array.isArray;function Kn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=r.refs;l===Is&&(l=r.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ro(e,t){if(e.type!=="textarea")throw Error(S(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function Ns(e){function t(f,u){if(e){var d=f.lastEffect;d!==null?(d.nextEffect=u,f.lastEffect=u):f.firstEffect=f.lastEffect=u,u.nextEffect=null,u.flags=8}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=ct(f,u),f.index=0,f.sibling=null,f}function a(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags=2,u):d):(f.flags=2,u)):u}function l(f){return e&&f.alternate===null&&(f.flags=2),f}function i(f,u,d,p){return u===null||u.tag!==6?(u=ba(d,f.mode,p),u.return=f,u):(u=o(u,d),u.return=f,u)}function s(f,u,d,p){return u!==null&&u.elementType===d.type?(p=o(u,d.props),p.ref=Kn(f,u,d),p.return=f,p):(p=oo(d.type,d.key,d.props,null,f.mode,p),p.ref=Kn(f,u,d),p.return=f,p)}function c(f,u,d,p){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Ja(d,f.mode,p),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function T(f,u,d,p,m){return u===null||u.tag!==7?(u=sn(d,f.mode,p,m),u.return=f,u):(u=o(u,d),u.return=f,u)}function G(f,u,d){if(typeof u=="string"||typeof u=="number")return u=ba(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case En:return d=oo(u.type,u.key,u.props,null,f.mode,d),d.ref=Kn(f,null,u),d.return=f,d;case Ct:return u=Ja(u,f.mode,d),u.return=f,u}if(no(u)||Pn(u))return u=sn(u,f.mode,d,null),u.return=f,u;ro(f,u)}return null}function y(f,u,d,p){var m=u!==null?u.key:null;if(typeof d=="string"||typeof d=="number")return m!==null?null:i(f,u,""+d,p);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case En:return d.key===m?d.type===Ke?T(f,u,d.props.children,p,m):s(f,u,d,p):null;case Ct:return d.key===m?c(f,u,d,p):null}if(no(d)||Pn(d))return m!==null?null:T(f,u,d,p,null);ro(f,d)}return null}function P(f,u,d,p,m){if(typeof p=="string"||typeof p=="number")return f=f.get(d)||null,i(u,f,""+p,m);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case En:return f=f.get(p.key===null?d:p.key)||null,p.type===Ke?T(u,f,p.props.children,m,p.key):s(u,f,p,m);case Ct:return f=f.get(p.key===null?d:p.key)||null,c(u,f,p,m)}if(no(p)||Pn(p))return f=f.get(d)||null,T(u,f,p,m,null);ro(u,p)}return null}function H(f,u,d,p){for(var m=null,B=null,w=u,M=u=0,F=null;w!==null&&M<d.length;M++){w.index>M?(F=w,w=null):F=w.sibling;var N=y(f,w,d[M],p);if(N===null){w===null&&(w=F);break}e&&w&&N.alternate===null&&t(f,w),u=a(N,u,M),B===null?m=N:B.sibling=N,B=N,w=F}if(M===d.length)return n(f,w),m;if(w===null){for(;M<d.length;M++)w=G(f,d[M],p),w!==null&&(u=a(w,u,M),B===null?m=w:B.sibling=w,B=w);return m}for(w=r(f,w);M<d.length;M++)F=P(w,f,M,d[M],p),F!==null&&(e&&F.alternate!==null&&w.delete(F.key===null?M:F.key),u=a(F,u,M),B===null?m=F:B.sibling=F,B=F);return e&&w.forEach(function(K){return t(f,K)}),m}function A(f,u,d,p){var m=Pn(d);if(typeof m!="function")throw Error(S(150));if(d=m.call(d),d==null)throw Error(S(151));for(var B=m=null,w=u,M=u=0,F=null,N=d.next();w!==null&&!N.done;M++,N=d.next()){w.index>M?(F=w,w=null):F=w.sibling;var K=y(f,w,N.value,p);if(K===null){w===null&&(w=F);break}e&&w&&K.alternate===null&&t(f,w),u=a(K,u,M),B===null?m=K:B.sibling=K,B=K,w=F}if(N.done)return n(f,w),m;if(w===null){for(;!N.done;M++,N=d.next())N=G(f,N.value,p),N!==null&&(u=a(N,u,M),B===null?m=N:B.sibling=N,B=N);return m}for(w=r(f,w);!N.done;M++,N=d.next())N=P(w,f,M,N.value,p),N!==null&&(e&&N.alternate!==null&&w.delete(N.key===null?M:N.key),u=a(N,u,M),B===null?m=N:B.sibling=N,B=N);return e&&w.forEach(function(ve){return t(f,ve)}),m}return function(f,u,d,p){var m=typeof d=="object"&&d!==null&&d.type===Ke&&d.key===null;m&&(d=d.props.children);var B=typeof d=="object"&&d!==null;if(B)switch(d.$$typeof){case En:e:{for(B=d.key,m=u;m!==null;){if(m.key===B){switch(m.tag){case 7:if(d.type===Ke){n(f,m.sibling),u=o(m,d.props.children),u.return=f,f=u;break e}break;default:if(m.elementType===d.type){n(f,m.sibling),u=o(m,d.props),u.ref=Kn(f,m,d),u.return=f,f=u;break e}}n(f,m);break}else t(f,m);m=m.sibling}d.type===Ke?(u=sn(d.props.children,f.mode,p,d.key),u.return=f,f=u):(p=oo(d.type,d.key,d.props,null,f.mode,p),p.ref=Kn(f,u,d),p.return=f,f=p)}return l(f);case Ct:e:{for(m=d.key;u!==null;){if(u.key===m)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Ja(d,f.mode,p),u.return=f,f=u}return l(f)}if(typeof d=="string"||typeof d=="number")return d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=ba(d,f.mode,p),u.return=f,f=u),l(f);if(no(d))return H(f,u,d,p);if(Pn(d))return A(f,u,d,p);if(B&&ro(f,d),typeof d=="undefined"&&!m)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(S(152,Vt(f.type)||"Component"))}return n(f,u)}}var ao=Ns(!0),Fs=Ns(!1),Zn={},We=rt(Zn),Xn=rt(Zn),qn=rt(Zn);function Mt(e){if(e===Zn)throw Error(S(174));return e}function Ka(e,t){switch(Z(qn,t),Z(Xn,e),Z(We,Zn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$o(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$o(t,e)}b(We),Z(We,t)}function un(){b(We),b(Xn),b(qn)}function xs(e){Mt(qn.current);var t=Mt(We.current),n=$o(t,e.type);t!==n&&(Z(Xn,e),Z(We,n))}function Za(e){Xn.current===e&&(b(We),b(Xn))}var X=rt(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!=0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ze=null,dt=null,Le=!1;function Ws(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Ls(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function Xa(e){if(Le){var t=dt;if(t){var n=t;if(!Ls(e,t)){if(t=tn(n.nextSibling),!t||!Ls(e,t)){e.flags=e.flags&-1025|2,Le=!1,ze=e;return}Ws(ze,n)}ze=e,dt=tn(t.firstChild)}else e.flags=e.flags&-1025|2,Le=!1,ze=e}}function Os(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function io(e){if(e!==ze)return!1;if(!Le)return Os(e),Le=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Ba(t,e.memoizedProps))for(t=dt;t;)Ws(e,t),t=tn(t.nextSibling);if(Os(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ze?tn(e.stateNode.nextSibling):null;return!0}function qa(){dt=ze=null,Le=!1}var cn=[];function $a(){for(var e=0;e<cn.length;e++)cn[e]._workInProgressVersionPrimary=null;cn.length=0}var $n=Et.ReactCurrentDispatcher,Ae=Et.ReactCurrentBatchConfig,er=0,q=null,pe=null,ce=null,so=!1,tr=!1;function Ee(){throw Error(S(321))}function el(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ke(e[n],t[n]))return!1;return!0}function tl(e,t,n,r,o,a){if(er=a,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$n.current=e===null||e.memoizedState===null?Yd:Qd,e=n(r,o),tr){a=0;do{if(tr=!1,!(25>a))throw Error(S(301));a+=1,ce=pe=null,t.updateQueue=null,$n.current=bd,e=n(r,o)}while(tr)}if($n.current=uo,t=pe!==null&&pe.next!==null,er=0,ce=pe=q=null,so=!1,t)throw Error(S(300));return e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?q.memoizedState=ce=e:ce=ce.next=e,ce}function Gt(){if(pe===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ce===null?q.memoizedState:ce.next;if(t!==null)ce=t,pe=e;else{if(e===null)throw Error(S(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ce===null?q.memoizedState=ce=e:ce=ce.next=e}return ce}function Oe(e,t){return typeof t=="function"?t(e):t}function nr(e){var t=Gt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=pe,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(o!==null){o=o.next,r=r.baseState;var i=l=a=null,s=o;do{var c=s.lane;if((er&c)===c)i!==null&&(i=i.next={lane:0,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),r=s.eagerReducer===e?s.eagerState:e(r,s.action);else{var T={lane:c,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};i===null?(l=i=T,a=r):i=i.next=T,q.lanes|=c,bn|=c}s=s.next}while(s!==null&&s!==o);i===null?a=r:i.next=l,ke(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=i,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function rr(e){var t=Gt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do a=e(a,l.action),l=l.next;while(l!==o);ke(a,t.memoizedState)||(Ne=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Us(e,t,n){var r=t._getVersion;r=r(t._source);var o=t._workInProgressVersionPrimary;if(o!==null?e=o===r:(e=e.mutableReadLanes,(e=(er&e)===e)&&(t._workInProgressVersionPrimary=r,cn.push(t))),e)return n(t._source);throw cn.push(t),Error(S(350))}function Vs(e,t,n,r){var o=ye;if(o===null)throw Error(S(349));var a=t._getVersion,l=a(t._source),i=$n.current,s=i.useState(function(){return Us(o,t,n)}),c=s[1],T=s[0];s=ce;var G=e.memoizedState,y=G.refs,P=y.getSnapshot,H=G.source;G=G.subscribe;var A=q;return e.memoizedState={refs:y,source:t,subscribe:r},i.useEffect(function(){y.getSnapshot=n,y.setSnapshot=c;var f=a(t._source);if(!ke(l,f)){f=n(t._source),ke(T,f)||(c(f),f=st(A),o.mutableReadLanes|=f&o.pendingLanes),f=o.mutableReadLanes,o.entangledLanes|=f;for(var u=o.entanglements,d=f;0<d;){var p=31-et(d),m=1<<p;u[p]|=f,d&=~m}}},[n,t,r]),i.useEffect(function(){return r(t._source,function(){var f=y.getSnapshot,u=y.setSnapshot;try{u(f(t._source));var d=st(A);o.mutableReadLanes|=d&o.pendingLanes}catch(p){u(function(){throw p})}})},[t,r]),ke(P,n)&&ke(H,t)&&ke(G,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Oe,lastRenderedState:T},e.dispatch=c=nl.bind(null,q,e),s.queue=e,s.baseQueue=null,T=Us(o,t,n),s.memoizedState=s.baseState=T),T}function _s(e,t,n){var r=Gt();return Vs(r,e,t,n)}function or(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Oe,lastRenderedState:e},e=e.dispatch=nl.bind(null,q,e),[t.memoizedState,e]}function co(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function js(e){var t=It();return e={current:e},t.memoizedState=e}function fo(){return Gt().memoizedState}function rl(e,t,n,r){var o=It();q.flags|=e,o.memoizedState=co(1|t,n,void 0,r===void 0?null:r)}function ol(e,t,n,r){var o=Gt();r=r===void 0?null:r;var a=void 0;if(pe!==null){var l=pe.memoizedState;if(a=l.destroy,r!==null&&el(r,l.deps)){co(t,n,a,r);return}}q.flags|=e,o.memoizedState=co(1|t,n,a,r)}function zs(e,t){return rl(516,4,e,t)}function ho(e,t){return ol(516,4,e,t)}function Ys(e,t){return ol(4,2,e,t)}function Qs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){return n=n!=null?n.concat([e]):null,ol(4,2,Qs.bind(null,t,e),n)}function al(){}function Js(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&el(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ks(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&el(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jd(e,t){var n=on();At(98>n?98:n,function(){e(!0)}),At(97<n?97:n,function(){var r=Ae.transition;Ae.transition=1;try{e(!1),t()}finally{Ae.transition=r}})}function nl(e,t,n){var r=Pe(),o=st(e),a={lane:o,action:n,eagerReducer:null,eagerState:null,next:null},l=t.pending;if(l===null?a.next=a:(a.next=l.next,l.next=a),t.pending=a,l=e.alternate,e===q||l!==null&&l===q)tr=so=!0;else{if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(a.eagerReducer=l,a.eagerState=s,ke(s,i))return}catch(c){}finally{}ut(e,o,r)}}var uo={readContext:De,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useOpaqueIdentifier:Ee,unstable_isNewReconciler:!1},Yd={readContext:De,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:zs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,rl(4,2,Qs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rl(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=It();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=nl.bind(null,q,e),[r.memoizedState,e]},useRef:js,useState:or,useDebugValue:al,useDeferredValue:function(e){var t=or(e),n=t[0],r=t[1];return zs(function(){var o=Ae.transition;Ae.transition=1;try{r(e)}finally{Ae.transition=o}},[e]),n},useTransition:function(){var e=or(!1),t=e[0];return e=Jd.bind(null,e[1]),js(e),[e,t]},useMutableSource:function(e,t,n){var r=It();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Vs(r,e,t,n)},useOpaqueIdentifier:function(){if(Le){var e=!1,t=Od(function(){throw e||(e=!0,n("r:"+(Fa++).toString(36))),Error(S(355))}),n=or(t)[1];return(q.mode&2)==0&&(q.flags|=516,co(5,function(){n("r:"+(Fa++).toString(36))},void 0,null)),t}return t="r:"+(Fa++).toString(36),or(t),t},unstable_isNewReconciler:!1},Qd={readContext:De,useCallback:Js,useContext:De,useEffect:ho,useImperativeHandle:bs,useLayoutEffect:Ys,useMemo:Ks,useReducer:nr,useRef:fo,useState:function(){return nr(Oe)},useDebugValue:al,useDeferredValue:function(e){var t=nr(Oe),n=t[0],r=t[1];return ho(function(){var o=Ae.transition;Ae.transition=1;try{r(e)}finally{Ae.transition=o}},[e]),n},useTransition:function(){var e=nr(Oe)[0];return[fo().current,e]},useMutableSource:_s,useOpaqueIdentifier:function(){return nr(Oe)[0]},unstable_isNewReconciler:!1},bd={readContext:De,useCallback:Js,useContext:De,useEffect:ho,useImperativeHandle:bs,useLayoutEffect:Ys,useMemo:Ks,useReducer:rr,useRef:fo,useState:function(){return rr(Oe)},useDebugValue:al,useDeferredValue:function(e){var t=rr(Oe),n=t[0],r=t[1];return ho(function(){var o=Ae.transition;Ae.transition=1;try{r(e)}finally{Ae.transition=o}},[e]),n},useTransition:function(){var e=rr(Oe)[0];return[fo().current,e]},useMutableSource:_s,useOpaqueIdentifier:function(){return rr(Oe)[0]},unstable_isNewReconciler:!1},Kd=Et.ReactCurrentOwner,Ne=!1;function Ce(e,t,n,r){t.child=e===null?Fs(t,null,n,r):ao(t,e.child,n,r)}function Zs(e,t,n,r,o){n=n.render;var a=t.ref;return ln(t,o),r=tl(e,t,n,r,a,o),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,Ye(e,t,o)):(t.flags|=1,Ce(e,t,r,o),t.child)}function qs(e,t,n,r,o,a){if(e===null){var l=n.type;return typeof l=="function"&&!ll(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Xs(e,t,l,r,o,a)):(e=oo(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}return l=e.child,(o&a)==0&&(o=l.memoizedProps,n=n.compare,n=n!==null?n:_n,n(o,r)&&e.ref===t.ref)?Ye(e,t,a):(t.flags|=1,e=ct(l,r),e.ref=t.ref,e.return=t,t.child=e)}function Xs(e,t,n,r,o,a){if(e!==null&&_n(e.memoizedProps,r)&&e.ref===t.ref)if(Ne=!1,(a&o)!=0)(e.flags&16384)!=0&&(Ne=!0);else return t.lanes=e.lanes,Ye(e,t,a);return il(e,t,n,r,a)}function sl(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)==0)t.memoizedState={baseLanes:0},po(t,n);else if((n&1073741824)!=0)t.memoizedState={baseLanes:0},po(t,a!==null?a.baseLanes:n);else return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},po(t,e),null;else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,po(t,r);return Ce(e,t,o,n),t.child}function $s(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function il(e,t,n,r,o){var a=Se(n)?Dt:fe.current;return a=rn(t,a),ln(t,o),n=tl(e,t,n,r,a,o),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,Ye(e,t,o)):(t.flags|=1,Ce(e,t,n,o),t.child)}function eu(e,t,n,r,o){if(Se(n)){var a=!0;Jr(t)}else a=!1;if(ln(t,o),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Hs(t,n,r),Qa(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=Se(n)?Dt:fe.current,c=rn(t,c));var T=n.getDerivedStateFromProps,G=typeof T=="function"||typeof l.getSnapshotBeforeUpdate=="function";G||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==r||s!==c)&&Bs(t,l,r,c),at=!1;var y=t.memoizedState;l.state=y,Jn(t,r,l,o),s=t.memoizedState,i!==r||y!==s||Te.current||at?(typeof T=="function"&&(eo(t,n,T,r),s=t.memoizedState),(i=at||Gs(t,n,i,r,y,s,c))?(G||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4)):(typeof l.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=i):(typeof l.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{l=t.stateNode,Rs(e,t),i=t.memoizedProps,c=t.type===t.elementType?i:Be(t.type,i),l.props=c,G=t.pendingProps,y=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=De(s):(s=Se(n)?Dt:fe.current,s=rn(t,s));var P=n.getDerivedStateFromProps;(T=typeof P=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==G||y!==s)&&Bs(t,l,r,s),at=!1,y=t.memoizedState,l.state=y,Jn(t,r,l,o);var H=t.memoizedState;i!==G||y!==H||Te.current||at?(typeof P=="function"&&(eo(t,n,P,r),H=t.memoizedState),(c=at||Gs(t,n,c,r,y,H,s))?(T||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,H,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,H,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=H),l.props=r,l.state=H,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=256),r=!1)}return ul(e,t,n,r,a,o)}function ul(e,t,n,r,o,a){$s(e,t);var l=(t.flags&64)!=0;if(!r&&!l)return o&&ys(t,n,!1),Ye(e,t,a);r=t.stateNode,Kd.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ao(t,e.child,null,a),t.child=ao(t,null,i,a)):Ce(e,t,i,a),t.memoizedState=r.state,o&&ys(t,n,!0),t.child}function tu(e){var t=e.stateNode;t.pendingContext?ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ms(e,t.context,!1),Ka(e,t.containerInfo)}var mo={dehydrated:null,retryLane:0};function au(e,t,n){var r=t.pendingProps,o=X.current,a=!1,l;return(l=(t.flags&64)!=0)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!=0),l?(a=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(o|=1),Z(X,o&1),e===null?(r.fallback!==void 0&&Xa(t),e=r.children,o=r.fallback,a?(e=nu(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=mo,e):typeof r.unstable_expectedLoadTime=="number"?(e=nu(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=mo,t.lanes=33554432,e):(n=cl({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?a?(r=ou(e,t,r.children,r.fallback,n),a=t.child,o=e.child.memoizedState,a.memoizedState=o===null?{baseLanes:n}:{baseLanes:o.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=mo,r):(n=ru(e,t,r.children,n),t.memoizedState=null,n):a?(r=ou(e,t,r.children,r.fallback,n),a=t.child,o=e.child.memoizedState,a.memoizedState=o===null?{baseLanes:n}:{baseLanes:o.baseLanes|n},a.childLanes=e.childLanes&~n,t.memoizedState=mo,r):(n=ru(e,t,r.children,n),t.memoizedState=null,n)}function nu(e,t,n,r){var o=e.mode,a=e.child;return t={mode:"hidden",children:t},(o&2)==0&&a!==null?(a.childLanes=0,a.pendingProps=t):a=cl(t,o,0,null),n=sn(n,o,r,null),a.return=e,n.return=e,a.sibling=n,e.child=a,n}function ru(e,t,n,r){var o=e.child;return e=o.sibling,n=ct(o,{mode:"visible",children:n}),(t.mode&2)==0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function ou(e,t,n,r,o){var a=t.mode,l=e.child;e=l.sibling;var i={mode:"hidden",children:n};return(a&2)==0&&t.child!==l?(n=t.child,n.childLanes=0,n.pendingProps=i,l=n.lastEffect,l!==null?(t.firstEffect=n.firstEffect,t.lastEffect=l,l.nextEffect=null):t.firstEffect=t.lastEffect=null):n=ct(l,i),e!==null?r=ct(e,r):(r=sn(r,a,o,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function lu(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ds(e.return,t)}function dl(e,t,n,r,o,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o,lastEffect:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o,l.lastEffect=a)}function iu(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Ce(e,t,r.children,n),r=X.current,(r&2)!=0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!=0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lu(e,n);else if(e.tag===19)lu(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(X,r),(t.mode&2)==0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),dl(t,!1,o,n,a,t.lastEffect);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}dl(t,!0,n,null,a,t.lastEffect);break;case"together":dl(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,(n&t.childLanes)!=0){if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var su,fl,uu,cu;su=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fl=function(){};uu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Mt(We.current);var a=null;switch(n){case"input":o=bo(e,o),r=bo(e,r),a=[];break;case"option":o=Zo(e,o),r=Zo(e,r),a=[];break;case"select":o=_({},o,{value:void 0}),r=_({},r,{value:void 0}),a=[];break;case"textarea":o=Xo(e,o),r=Xo(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zr)}ea(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var i=o[c];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sn.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var s=r[c];if(i=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==i&&(s!=null||i!=null))if(c==="style")if(i){for(l in i)!i.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&i[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(a||(a=[]),a.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(a=a||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Q("scroll",e),a||i===s||(a=[])):typeof s=="object"&&s!==null&&s.$$typeof===_o?s.toString():(a=a||[]).push(c,s))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};cu=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Zd(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Se(t.type)&&br(),null;case 3:return un(),b(Te),b(fe),$a(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:r.hydrate||(t.flags|=256)),fl(t),null;case 5:Za(t);var o=Mt(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)uu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(S(166));return null}if(e=Mt(We.current),io(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[nt]=t,r[Qr]=a,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(e=0;e<zn.length;e++)Q(zn[e],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ti(r,a),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Q("invalid",r);break;case"textarea":oi(r,a),Q("invalid",r)}ea(n,a),e=null;for(var l in a)a.hasOwnProperty(l)&&(o=a[l],l==="children"?typeof o=="string"?r.textContent!==o&&(e=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(e=["children",""+o]):Sn.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&Q("scroll",r));switch(n){case"input":Pr(r),ri(r,a,!0);break;case"textarea":Pr(r),li(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=zr)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(l=o.nodeType===9?o:o.ownerDocument,e===qo.html&&(e=ii(n)),e===qo.html?n==="script"?(e=l.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[nt]=t,e[Qr]=r,su(e,t,!1,!1),t.stateNode=e,l=ta(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<zn.length;o++)Q(zn[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":ti(e,r),o=bo(e,r),Q("invalid",e);break;case"option":o=Zo(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=_({},r,{value:void 0}),Q("invalid",e);break;case"textarea":oi(e,r),o=Xo(e,r),Q("invalid",e);break;default:o=r}ea(n,o);var i=o;for(a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="style"?ci(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&si(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Dn(e,s):typeof s=="number"&&Dn(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Sn.hasOwnProperty(a)?s!=null&&a==="onScroll"&&Q("scroll",e):s!=null&&xo(e,a,s,l))}switch(n){case"input":Pr(e),ri(e,r,!1);break;case"textarea":Pr(e),li(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ze(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?_t(e,!!r.multiple,a,!1):r.defaultValue!=null&&_t(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=zr)}ds(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)cu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));n=Mt(qn.current),Mt(We.current),io(t)?(r=t.stateNode,n=t.memoizedProps,r[nt]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r)}return null;case 13:return b(X),r=t.memoizedState,(t.flags&64)!=0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&io(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!=0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(X.current&1)!=0?de===0&&(de=3):((de===0||de===3)&&(de=4),ye===null||(bn&134217727)==0&&(dn&134217727)==0||fn(ye,me))),(r||n)&&(t.flags|=4),null);case 4:return un(),fl(t),e===null&&us(t.stateNode.containerInfo),null;case 10:return za(t),null;case 17:return Se(t.type)&&br(),null;case 19:if(b(X),r=t.memoizedState,r===null)return null;if(a=(t.flags&64)!=0,l=r.rendering,l===null)if(a)ar(r,!1);else{if(de!==0||e!==null&&(e.flags&64)!=0)for(e=t.child;e!==null;){if(l=lo(e),l!==null){for(t.flags|=64,ar(r,!1),a=l.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=2,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(X,X.current&1|2),t.child}e=e.sibling}r.tail!==null&&he()>hl&&(t.flags|=64,a=!0,ar(r,!1),t.lanes=33554432)}else{if(!a)if(e=lo(l),e!==null){if(t.flags|=64,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!Le)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*he()-r.renderingStartTime>hl&&n!==1073741824&&(t.flags|=64,a=!0,ar(r,!1),t.lanes=33554432);r.isBackwards?(l.sibling=t.child,t.child=l):(n=r.last,n!==null?n.sibling=l:t.child=l,r.last=l)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=he(),n.sibling=null,t=X.current,Z(X,a?t&1|2:t&1),n):null;case 23:case 24:return pl(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(S(156,t.tag))}function Xd(e){switch(e.tag){case 1:Se(e.type)&&br();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(un(),b(Te),b(fe),$a(),t=e.flags,(t&64)!=0)throw Error(S(285));return e.flags=t&-4097|64,e;case 5:return Za(e),null;case 13:return b(X),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return b(X),null;case 4:return un(),null;case 10:return za(e),null;case 23:case 24:return pl(),null;default:return null}}function ml(e,t){try{var n="",r=t;do n+=Gc(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o}}function gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qd=typeof WeakMap=="function"?WeakMap:Map;function du(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,yl=r),gl(e,t)},n}function fu(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return gl(e,t),r(o)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Ue===null?Ue=new Set([this]):Ue.add(this),gl(e,t));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}var $d=typeof WeakSet=="function"?WeakSet:Set;function hu(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){ft(e,n)}else t.current=null}function ef(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Be(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&Na(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(S(163))}function nf(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)==3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var o=e;r=o.next,o=o.tag,(o&4)!=0&&(o&1)!=0&&(pu(n,e),tf(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Be(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&Ms(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Ms(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&ds(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Di(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(S(163))}function mu(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var o=n.memoizedProps.style;o=o!=null&&o.hasOwnProperty("display")?o.display:null,r.style.display=ui("display",o)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function yu(e,t){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Wa,t)}catch(a){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,o=r.destroy;if(r=r.tag,o!==void 0)if((r&4)!=0)pu(t,n);else{r=t;try{o()}catch(a){ft(r,a)}}n=n.next}while(n!==e)}break;case 1:if(hu(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(a){ft(t,a)}break;case 5:hu(t);break;case 4:gu(e,t)}}function vu(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Tu(e){return e.tag===5||e.tag===3||e.tag===4}function Su(e){e:{for(var t=e.return;t!==null;){if(Tu(t))break e;t=t.return}throw Error(S(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(S(161))}n.flags&16&&(Dn(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Tu(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?vl(e,n,t):Tl(e,n,t)}function vl(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zr));else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}function Tl(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Tl(e,t,n),e=e.sibling;e!==null;)Tl(e,t,n),e=e.sibling}function gu(e,t){for(var n=t,r=!1,o,a;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(S(160));switch(o=r.stateNode,r.tag){case 5:a=!1;break e;case 3:o=o.containerInfo,a=!0;break e;case 4:o=o.containerInfo,a=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var l=e,i=n,s=i;;)if(yu(l,s),s.child!==null&&s.tag!==4)s.child.return=s,s=s.child;else{if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}a?(l=o,i=n.stateNode,l.nodeType===8?l.parentNode.removeChild(i):l.removeChild(i)):o.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){o=n.stateNode.containerInfo,a=!0,n.child.return=n,n=n.child;continue}}else if(yu(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function El(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var o=e!==null?e.memoizedProps:r;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,a!==null){for(n[Qr]=r,e==="input"&&r.type==="radio"&&r.name!=null&&ni(n,r),ta(e,o),t=ta(e,r),o=0;o<a.length;o+=2){var l=a[o],i=a[o+1];l==="style"?ci(n,i):l==="dangerouslySetInnerHTML"?si(n,i):l==="children"?Dn(n,i):xo(n,l,i,t)}switch(e){case"input":Ko(n,r);break;case"textarea":ai(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,a=r.value,a!=null?_t(n,!!r.multiple,a,!1):e!==!!r.multiple&&(r.defaultValue!=null?_t(n,!!r.multiple,r.defaultValue,!0):_t(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(S(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Di(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Sl=he(),mu(t.child,!0)),Eu(t);return;case 19:Eu(t);return;case 17:return;case 23:case 24:mu(t,t.memoizedState!==null);return}throw Error(S(163))}function Eu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $d),t.forEach(function(r){var o=rf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function of(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var af=Math.ceil,yo=Et.ReactCurrentDispatcher,Cl=Et.ReactCurrentOwner,x=0,ye=null,oe=null,me=0,Ht=0,wl=rt(0),de=0,vo=null,hn=0,bn=0,dn=0,Pl=0,kl=null,Sl=0,hl=Infinity;function pn(){hl=he()+500}var D=null,go=!1,yl=null,Ue=null,ht=!1,lr=null,ir=90,Dl=[],Rl=[],Qe=null,sr=0,Al=null,To=-1,be=0,So=0,ur=null,Eo=!1;function Pe(){return(x&48)!=0?he():To!==-1?To:To=he()}function st(e){if(e=e.mode,(e&2)==0)return 1;if((e&4)==0)return on()===99?1:2;if(be===0&&(be=hn),zd.transition!==0){So!==0&&(So=kl!==null?kl.pendingLanes:0),e=be;var t=4186112&~So;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=on(),(x&4)!=0&&e===98?e=Br(12,be):(e=bc(e),e=Br(e,be)),e}function ut(e,t,n){if(50<sr)throw sr=0,Al=null,Error(S(185));if(e=Co(e,t),e===null)return null;Nr(e,t,n),e===ye&&(dn|=t,de===4&&fn(e,me));var r=on();t===1?(x&8)!=0&&(x&48)==0?Ml(e):(Me(e,n),x===0&&(pn(),xe())):((x&4)==0||r!==98&&r!==99||(Qe===null?Qe=new Set([e]):Qe.add(e)),Me(e,n)),kl=e}function Co(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Me(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-et(l),s=1<<i,c=a[i];if(c===-1){if((s&r)==0||(s&o)!=0){c=t,bt(s);var T=Y;a[i]=10<=T?c+250:6<=T?c+5e3:-1}}else c<=t&&(e.expiredLanes|=s);l&=~s}if(r=xn(e,e===ye?me:0),t=Y,r===0)n!==null&&(n!==Va&&Oa(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==Va&&Oa(n)}t===15?(n=Ml.bind(null,e),je===null?(je=[n],Zr=La(Kr,ks)):je.push(n),n=Va):t===14?n=Qn(99,Ml.bind(null,e)):(n=Jc(t),n=Qn(n,Cu.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Cu(e){if(To=-1,So=be=0,(x&48)!=0)throw Error(S(327));var t=e.callbackNode;if(pt()&&e.callbackNode!==t)return null;var n=xn(e,e===ye?me:0);if(n===0)return null;var r=n,o=x;x|=16;var a=Pu();(ye!==e||me!==r)&&(pn(),mn(e,r));do try{lf();break}catch(i){wu(e,i)}while(1);if(ja(),yo.current=a,x=o,oe!==null?r=0:(ye=null,me=0,r=de),(hn&dn)!=0)mn(e,0);else if(r!==0){if(r===2&&(x|=64,e.hydrate&&(e.hydrate=!1,Na(e.containerInfo)),n=Bi(e),n!==0&&(r=cr(e,n))),r===1)throw t=vo,mn(e,0),fn(e,n),Me(e,he()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(S(345));case 2:Bt(e);break;case 3:if(fn(e,n),(n&62914560)===n&&(r=Sl+500-he(),10<r)){if(xn(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=fs(Bt.bind(null,e),r);break}Bt(e);break;case 4:if(fn(e,n),(n&4186112)===n)break;for(r=e.eventTimes,o=-1;0<n;){var l=31-et(n);a=1<<l,l=r[l],l>o&&(o=l),n&=~a}if(n=o,n=he()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*af(n/1960))-n,10<n){e.timeoutHandle=fs(Bt.bind(null,e),n);break}Bt(e);break;case 5:Bt(e);break;default:throw Error(S(329))}}return Me(e,he()),e.callbackNode===t?Cu.bind(null,e):null}function fn(e,t){for(t&=~Pl,t&=~dn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Ml(e){if((x&48)!=0)throw Error(S(327));if(pt(),e===ye&&(e.expiredLanes&me)!=0){var t=me,n=cr(e,t);(hn&dn)!=0&&(t=xn(e,t),n=cr(e,t))}else t=xn(e,0),n=cr(e,t);if(e.tag!==0&&n===2&&(x|=64,e.hydrate&&(e.hydrate=!1,Na(e.containerInfo)),t=Bi(e),t!==0&&(n=cr(e,t))),n===1)throw n=vo,mn(e,0),fn(e,t),Me(e,he()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bt(e),Me(e,he()),null}function sf(){if(Qe!==null){var e=Qe;Qe=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,Me(t,he())})}xe()}function ku(e,t){var n=x;x|=1;try{return e(t)}finally{x=n,x===0&&(pn(),xe())}}function Du(e,t){var n=x;x&=-2,x|=8;try{return e(t)}finally{x=n,x===0&&(pn(),xe())}}function po(e,t){Z(wl,Ht),Ht|=t,hn|=t}function pl(){Ht=wl.current,b(wl)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ld(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&br();break;case 3:un(),b(Te),b(fe),$a();break;case 5:Za(r);break;case 4:un();break;case 13:b(X);break;case 19:b(X);break;case 10:za(r);break;case 23:case 24:pl()}n=n.return}ye=e,oe=ct(e.current,null),me=Ht=hn=t,de=0,vo=null,Pl=dn=bn=0}function wu(e,t){do{var n=oe;try{if(ja(),$n.current=uo,so){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}so=!1}if(er=0,ce=pe=q=null,tr=!1,Cl.current=null,n===null||n.return===null){de=1,vo=t,oe=null;break}e:{var a=e,l=n.return,i=n,s=t;if(t=me,i.flags|=2048,i.firstEffect=i.lastEffect=null,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s;if((i.mode&2)==0){var T=i.alternate;T?(i.updateQueue=T.updateQueue,i.memoizedState=T.memoizedState,i.lanes=T.lanes):(i.updateQueue=null,i.memoizedState=null)}var G=(X.current&1)!=0,y=l;do{var P;if(P=y.tag===13){var H=y.memoizedState;if(H!==null)P=H.dehydrated!==null;else{var A=y.memoizedProps;P=A.fallback===void 0?!1:A.unstable_avoidThisFallback!==!0?!0:!G}}if(P){var f=y.updateQueue;if(f===null){var u=new Set;u.add(c),y.updateQueue=u}else f.add(c);if((y.mode&2)==0){if(y.flags|=64,i.flags|=16384,i.flags&=-2981,i.tag===1)if(i.alternate===null)i.tag=17;else{var d=lt(-1,1);d.tag=2,it(i,d)}i.lanes|=1;break e}s=void 0,i=t;var p=a.pingCache;if(p===null?(p=a.pingCache=new qd,s=new Set,p.set(c,s)):(s=p.get(c),s===void 0&&(s=new Set,p.set(c,s))),!s.has(i)){s.add(i);var m=uf.bind(null,a,c,i);c.then(m,m)}y.flags|=4096,y.lanes=t;break e}y=y.return}while(y!==null);s=Error((Vt(i.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}de!==5&&(de=2),s=ml(s,i),y=l;do{switch(y.tag){case 3:a=s,y.flags|=4096,t&=-t,y.lanes|=t;var B=du(y,a,t);As(y,B);break e;case 1:a=s;var w=y.type,M=y.stateNode;if((y.flags&64)==0&&(typeof w.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Ue===null||!Ue.has(M)))){y.flags|=4096,t&=-t,y.lanes|=t;var F=fu(y,a,t);As(y,F);break e}}y=y.return}while(y!==null)}Ru(n)}catch(N){t=N,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function Pu(){var e=yo.current;return yo.current=uo,e===null?uo:e}function cr(e,t){var n=x;x|=16;var r=Pu();ye===e&&me===t||mn(e,t);do try{cf();break}catch(o){wu(e,o)}while(1);if(ja(),x=n,yo.current=r,oe!==null)throw Error(S(261));return ye=null,me=0,de}function cf(){for(;oe!==null;)Au(oe)}function lf(){for(;oe!==null&&!Vd();)Au(oe)}function Au(e){var t=Mu(e.alternate,e,Ht);e.memoizedProps=e.pendingProps,t===null?Ru(e):oe=t,Cl.current=null}function Ru(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)==0){if(n=Zd(n,t,Ht),n!==null){oe=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Ht&1073741824)!=0||(n.mode&4)==0){for(var r=0,o=n.child;o!==null;)r|=o.lanes|o.childLanes,o=o.sibling;n.childLanes=r}e!==null&&(e.flags&2048)==0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=Xd(t),n!==null){n.flags&=2047,oe=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);de===0&&(de=5)}function Bt(e){var t=on();return At(99,df.bind(null,e,t)),null}function df(e,t){do pt();while(lr!==null);if((x&48)!=0)throw Error(S(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null;var r=n.lanes|n.childLanes,o=r,a=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;for(var l=e.eventTimes,i=e.expirationTimes;0<a;){var s=31-et(a),c=1<<s;o[s]=0,l[s]=-1,i[s]=-1,a&=~c}if(Qe!==null&&(r&24)==0&&Qe.has(e)&&Qe.delete(e),e===ye&&(oe=ye=null,me=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(o=x,x|=32,Cl.current=null,Ga=Fr,l=es(),Ra(l)){if("selectionStart"in l)i={start:l.selectionStart,end:l.selectionEnd};else e:if(i=(i=l.ownerDocument)&&i.defaultView||window,(c=i.getSelection&&i.getSelection())&&c.rangeCount!==0){i=c.anchorNode,a=c.anchorOffset,s=c.focusNode,c=c.focusOffset;try{i.nodeType,s.nodeType}catch(N){i=null;break e}var T=0,G=-1,y=-1,P=0,H=0,A=l,f=null;t:for(;;){for(var u;A!==i||a!==0&&A.nodeType!==3||(G=T+a),A!==s||c!==0&&A.nodeType!==3||(y=T+c),A.nodeType===3&&(T+=A.nodeValue.length),(u=A.firstChild)!==null;)f=A,A=u;for(;;){if(A===l)break t;if(f===i&&++P===a&&(G=T),f===s&&++H===c&&(y=T),(u=A.nextSibling)!==null)break;A=f,f=A.parentNode}A=u}i=G===-1||y===-1?null:{start:G,end:y}}else i=null;i=i||{start:0,end:0}}else i=null;Ha={focusedElem:l,selectionRange:i},Fr=!1,ur=null,Eo=!1,D=r;do try{ff()}catch(N){if(D===null)throw Error(S(330));ft(D,N),D=D.nextEffect}while(D!==null);ur=null,D=r;do try{for(l=e;D!==null;){var d=D.flags;if(d&16&&Dn(D.stateNode,""),d&128){var p=D.alternate;if(p!==null){var m=p.ref;m!==null&&(typeof m=="function"?m(null):m.current=null)}}switch(d&1038){case 2:Su(D),D.flags&=-3;break;case 6:Su(D),D.flags&=-3,El(D.alternate,D);break;case 1024:D.flags&=-1025;break;case 1028:D.flags&=-1025,El(D.alternate,D);break;case 4:El(D.alternate,D);break;case 8:i=D,gu(l,i);var B=i.alternate;vu(i),B!==null&&vu(B)}D=D.nextEffect}}catch(N){if(D===null)throw Error(S(330));ft(D,N),D=D.nextEffect}while(D!==null);if(m=Ha,p=es(),d=m.focusedElem,l=m.selectionRange,p!==d&&d&&d.ownerDocument&&$i(d.ownerDocument.documentElement,d)){for(l!==null&&Ra(d)&&(p=l.start,m=l.end,m===void 0&&(m=p),"selectionStart"in d?(d.selectionStart=p,d.selectionEnd=Math.min(m,d.value.length)):(m=(p=d.ownerDocument||document)&&p.defaultView||window,m.getSelection&&(m=m.getSelection(),i=d.textContent.length,B=Math.min(l.start,i),l=l.end===void 0?B:Math.min(l.end,i),!m.extend&&B>l&&(i=l,l=B,B=i),i=qi(d,B),a=qi(d,l),i&&a&&(m.rangeCount!==1||m.anchorNode!==i.node||m.anchorOffset!==i.offset||m.focusNode!==a.node||m.focusOffset!==a.offset)&&(p=p.createRange(),p.setStart(i.node,i.offset),m.removeAllRanges(),B>l?(m.addRange(p),m.extend(a.node,a.offset)):(p.setEnd(a.node,a.offset),m.addRange(p)))))),p=[],m=d;m=m.parentNode;)m.nodeType===1&&p.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<p.length;d++)m=p[d],m.element.scrollLeft=m.left,m.element.scrollTop=m.top}Fr=!!Ga,Ha=Ga=null,e.current=n,D=r;do try{for(d=e;D!==null;){var w=D.flags;if(w&36&&nf(d,D.alternate,D),w&128){p=void 0;var M=D.ref;if(M!==null){var F=D.stateNode;switch(D.tag){case 5:p=F;break;default:p=F}typeof M=="function"?M(p):M.current=p}}D=D.nextEffect}}catch(N){if(D===null)throw Error(S(330));ft(D,N),D=D.nextEffect}while(D!==null);D=null,jd(),x=o}else e.current=n;if(ht)ht=!1,lr=e,ir=t;else for(D=r;D!==null;)t=D.nextEffect,D.nextEffect=null,D.flags&8&&(w=D,w.sibling=null,w.stateNode=null),D=t;if(r=e.pendingLanes,r===0&&(Ue=null),r===1?e===Al?sr++:(sr=0,Al=e):sr=0,n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Wa,n,void 0,(n.current.flags&64)==64)}catch(N){}if(Me(e,he()),go)throw go=!1,e=yl,yl=null,e;return(x&8)!=0||xe(),null}function ff(){for(;D!==null;){var e=D.alternate;Eo||ur===null||((D.flags&8)!=0?Ti(D,ur)&&(Eo=!0):D.tag===13&&of(e,D)&&Ti(D,ur)&&(Eo=!0));var t=D.flags;(t&256)!=0&&ef(e,D),(t&512)==0||ht||(ht=!0,Qn(97,function(){return pt(),null})),D=D.nextEffect}}function pt(){if(ir!==90){var e=97<ir?97:ir;return ir=90,At(e,hf)}return!1}function tf(e,t){Dl.push(t,e),ht||(ht=!0,Qn(97,function(){return pt(),null}))}function pu(e,t){Rl.push(t,e),ht||(ht=!0,Qn(97,function(){return pt(),null}))}function hf(){if(lr===null)return!1;var e=lr;if(lr=null,(x&48)!=0)throw Error(S(331));var t=x;x|=32;var n=Rl;Rl=[];for(var r=0;r<n.length;r+=2){var o=n[r],a=n[r+1],l=o.destroy;if(o.destroy=void 0,typeof l=="function")try{l()}catch(s){if(a===null)throw Error(S(330));ft(a,s)}}for(n=Dl,Dl=[],r=0;r<n.length;r+=2){o=n[r],a=n[r+1];try{var i=o.create;o.destroy=i()}catch(s){if(a===null)throw Error(S(330));ft(a,s)}}for(i=e.current.firstEffect;i!==null;)e=i.nextEffect,i.nextEffect=null,i.flags&8&&(i.sibling=null,i.stateNode=null),i=e;return x=t,xe(),!0}function Iu(e,t,n){t=ml(n,t),t=du(e,t,1),it(e,t),t=Pe(),e=Co(e,1),e!==null&&(Nr(e,1,t),Me(e,t))}function ft(e,t){if(e.tag===3)Iu(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Iu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ue===null||!Ue.has(r))){e=ml(t,e);var o=fu(n,e,1);if(it(n,o),o=Pe(),n=Co(n,1),n!==null)Nr(n,1,o),Me(n,o);else if(typeof r.componentDidCatch=="function"&&(Ue===null||!Ue.has(r)))try{r.componentDidCatch(t,e)}catch(a){}break}}n=n.return}}function uf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(me&n)===n&&(de===4||de===3&&(me&62914560)===me&&500>he()-Sl?mn(e,0):Pl|=n),Me(e,t)}function rf(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)==0?t=1:(t&4)==0?t=on()===99?1:2:(be===0&&(be=hn),t=Jt(62914560&~be),t===0&&(t=4194304))),n=Pe(),e=Co(e,t),e!==null&&(Nr(e,t,n),Me(e,n))}var Mu;Mu=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Ne=!0;else if((n&r)!=0)Ne=(e.flags&16384)!=0;else{switch(Ne=!1,t.tag){case 3:tu(t),qa();break;case 5:xs(t);break;case 1:Se(t.type)&&Jr(t);break;case 4:Ka(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var o=t.type._context;Z(Xr,o._currentValue),o._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!=0?au(e,t,n):(Z(X,X.current&1),t=Ye(e,t,n),t!==null?t.sibling:null);Z(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!=0,(e.flags&64)!=0){if(r)return iu(e,t,n);t.flags|=64}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(X,X.current),r)break;return null;case 23:case 24:return t.lanes=0,sl(e,t,n)}return Ye(e,t,n)}else Ne=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=rn(t,fe.current),ln(t,n),o=tl(null,t,r,e,o,n),t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)){var a=!0;Jr(t)}else a=!1;t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ya(t);var l=r.getDerivedStateFromProps;typeof l=="function"&&eo(t,r,l,e),o.updater=to,t.stateNode=o,o._reactInternals=t,Qa(t,r,e,n),t=ul(null,t,r,!0,a,n)}else t.tag=0,Ce(null,t,o,n),t=t.child;return t;case 16:o=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=pf(o),e=Be(o,e),a){case 0:t=il(null,t,o,e,n);break e;case 1:t=eu(null,t,o,e,n);break e;case 11:t=Zs(null,t,o,e,n);break e;case 14:t=qs(null,t,o,Be(o.type,e),r,n);break e}throw Error(S(306,o,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),il(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),eu(e,t,r,o,n);case 3:if(tu(t),r=t.updateQueue,e===null||r===null)throw Error(S(282));if(r=t.pendingProps,o=t.memoizedState,o=o!==null?o.element:null,Rs(e,t),Jn(t,r,null,n),r=t.memoizedState.element,r===o)qa(),t=Ye(e,t,n);else{if(o=t.stateNode,(a=o.hydrate)&&(dt=tn(t.stateNode.containerInfo.firstChild),ze=t,a=Le=!0),a){if(e=o.mutableSourceEagerHydrationData,e!=null)for(o=0;o<e.length;o+=2)a=e[o],a._workInProgressVersionPrimary=e[o+1],cn.push(a);for(n=Fs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Ce(e,t,r,n),qa();t=t.child}return t;case 5:return xs(t),e===null&&Xa(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,l=o.children,Ba(r,o)?l=null:a!==null&&Ba(r,a)&&(t.flags|=16),$s(e,t),Ce(e,t,l,n),t.child;case 6:return e===null&&Xa(t),null;case 13:return au(e,t,n);case 4:return Ka(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ao(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Zs(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value;var i=t.type._context;if(Z(Xr,i._currentValue),i._currentValue=a,l!==null)if(i=l.value,a=ke(i,a)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(i,a):1073741823)|0,a===0){if(l.children===o.children&&!Te.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r&&(c.observedBits&a)!=0){i.tag===1&&(c=lt(-1,n&-n),c.tag=2,it(i,c)),i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ds(i.return,n),s.lanes|=n;break}c=c.next}}else l=i.tag===10&&i.type===t.type?null:i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,a=t.pendingProps,r=a.children,ln(t,n),o=De(o,a.unstable_observedBits),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return o=t.type,a=Be(o,t.pendingProps),a=Be(o.type,a),qs(e,t,o,a,r,n);case 15:return Xs(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Se(r)?(e=!0,Jr(t)):e=!1,ln(t,n),Hs(t,r,o),Qa(t,r,o,n),ul(null,t,r,!0,e,n);case 19:return iu(e,t,n);case 23:return sl(e,t,n);case 24:return sl(e,t,n)}throw Error(S(156,t.tag))};function mf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new mf(e,t,n,r)}function ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pf(e){if(typeof e=="function")return ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sr)return 11;if(e===Cr)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,o,a){var l=2;if(r=e,typeof e=="function")ll(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ke:return sn(n.children,o,a,t);case Xl:l=8,o|=16;break;case Wo:l=8,o|=1;break;case Cn:return e=Re(12,n,t,o|8),e.elementType=Cn,e.type=Cn,e.lanes=a,e;case wn:return e=Re(13,n,t,o),e.type=wn,e.elementType=wn,e.lanes=a,e;case Er:return e=Re(19,n,t,o),e.elementType=Er,e.lanes=a,e;case jo:return cl(n,o,a,t);case zo:return e=Re(24,n,t,o),e.elementType=zo,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lo:l=10;break e;case Oo:l=9;break e;case Sr:l=11;break e;case Cr:l=14;break e;case Uo:l=16,r=null;break e;case Vo:l=22;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Re(l,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function sn(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function cl(e,t,n,r){return e=Re(23,e,r,t),e.elementType=jo,e.lanes=n,e}function ba(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function Ja(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gf(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=ya(0),this.expirationTimes=ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ya(0),this.mutableSourceEagerHydrationData=null}function yf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ct,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wo(e,t,n,r){var o=t.current,a=Pe(),l=st(o);e:if(n){n=n._reactInternals;t:{if(Pt(n)!==n||n.tag!==1)throw Error(S(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break t;case 1:if(Se(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break t}}i=i.return}while(i!==null);throw Error(S(171))}if(n.tag===1){var s=n.type;if(Se(s)){n=gs(n,s,i);break e}}n=i}else n=ot;return t.context===null?t.context=n:t.pendingContext=n,t=lt(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),it(o,t),ut(o,l,a),l}function Il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gl(e,t){Gu(e,t),(e=e.alternate)&&Gu(e,t)}function vf(){return null}function Hl(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new gf(e,t,n!=null&&n.hydrate===!0),t=Re(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,Ya(t),e[en]=n.current,us(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var o=t._getVersion;o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o)}this._internalRoot=n}Hl.prototype.render=function(e){wo(e,this._internalRoot,null,null)};Hl.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;wo(null,e,null,function(){t[en]=null})};function dr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tf(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Hl(e,0,t?{hydrate:!0}:void 0)}function Po(e,t,n,r,o){var a=n._reactRootContainer;if(a){var l=a._internalRoot;if(typeof o=="function"){var i=o;o=function(){var c=Il(l);i.call(c)}}wo(t,l,e,o)}else{if(a=n._reactRootContainer=Tf(n,r),l=a._internalRoot,typeof o=="function"){var s=o;o=function(){var c=Il(l);s.call(c)}}Du(function(){wo(t,l,e,o)})}return Il(l)}Si=function(e){if(e.tag===13){var t=Pe();ut(e,4,t),Gl(e,4)}};ca=function(e){if(e.tag===13){var t=Pe();ut(e,67108864,t),Gl(e,67108864)}};Ei=function(e){if(e.tag===13){var t=Pe(),n=st(e);ut(e,n,t),Gl(e,n)}};Ci=function(e,t){return t()};ra=function(e,t,n){switch(t){case"input":if(Ko(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Rr(r);if(!o)throw Error(S(90));ei(r),Ko(r,o)}}}break;case"textarea":ai(e,n);break;case"select":t=n.value,t!=null&&_t(e,!!n.multiple,t,!1)}};oa=ku;pi=function(e,t,n,r,o){var a=x;x|=4;try{return At(98,e.bind(null,t,n,r,o))}finally{x=a,x===0&&(pn(),xe())}};aa=function(){(x&49)==0&&(sf(),pt())};mi=function(e,t){var n=x;x|=2;try{return e(t)}finally{x=n,x===0&&(pn(),xe())}};function Hu(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dr(t))throw Error(S(200));return yf(e,t,null,n)}var Sf={Events:[An,Xt,Rr,fi,hi,pt,{current:!1}]},fr={findFiberByHostInstance:kt,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Ef={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vi(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(hr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!hr.isDisabled&&hr.supportsFiber))try{Wa=hr.inject(Ef),Rt=hr}catch(e){}var hr,Cf=Sf,wf=Hu,Pf=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):Error(S(268,Object.keys(e)));return e=vi(t),e=e===null?null:e.stateNode,e},kf=function(e,t){var n=x;if((n&48)!=0)return e(t);x|=1;try{if(e)return At(99,e.bind(null,t))}finally{x=n,xe()}},Df=function(e,t,n){if(!dr(t))throw Error(S(200));return Po(null,e,t,!0,n)},Rf=function(e,t,n){if(!dr(t))throw Error(S(200));return Po(null,e,t,!1,n)},Af=function(e){if(!dr(e))throw Error(S(40));return e._reactRootContainer?(Du(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1},Mf=ku,If=function(e,t){return Hu(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},Gf=function(e,t,n,r){if(!dr(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Po(e,t,n,!1,r)},Hf="17.0.2",Bf={__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Cf,createPortal:wf,findDOMNode:Pf,flushSync:kf,hydrate:Df,render:Rf,unmountComponentAtNode:Af,unstable_batchedUpdates:Mf,unstable_createPortal:If,unstable_renderSubtreeIntoContainer:Gf,version:Hf},Nf=Je(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Bf}),Bl=Nf.render;var Nl=Symbol(),Fl=Symbol(),xl=Symbol(),ko=Symbol();function Nt(e,t){function n(...r){if(r.length>=e.length)return e(...r);{let o=(...a)=>n(...r,...a);return o[Nl]=e,o[Fl]=n,o[xl]=r,o[ko]=n[ko],o}}return n[Nl]=e,n[Fl]=n,n[xl]=[],n[ko]=t||Bu(e),n}function Wl(e){return e[Nl]}function Ff(e){return e[Fl]}function Do(e){return e[xl]||[]}function Bu(e){return e[ko]||e.name}function Wf(){let e=[];return{test:t,getAllTests:n};function t(r,o){e.push(...Object.entries(o).map(([a,l])=>xf(r,a,l)))}function n(){return e}}function g(e,t,...n){let r=t(...n,e);if(typeof r=="function")throw new Error("The matcher function `"+Ll(r)+"` returned a function instead of a boolean. You might need to pass another argument to it.");if(!r)throw new Ro([e,t,...n])}function xf(e,t,n){return{subject:e,scenario:t,fn:n}}var Ro=class extends Error{constructor(t){super("Expectation failed");this.expectArgs=t}};function Lf(e){return e[e.length-1]}function Nu(e){return e[0]}var Of=Nt(function(e,t){return e(t)},"which"),V=Nt(function(e,t){var n,r;if(Uf(e))return e(t);if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((o,a)=>V(e[a],t[a]));if(e instanceof Function&&t instanceof Function)return Wl(e)&&Wl(e)===Wl(t)?V(Do(e),Do(t)):e===t;if(e instanceof Date&&t instanceof Date)return e.toISOString()===t.toISOString();if(e instanceof Set&&t instanceof Set)return e.size===t.size&&[...e.values()].every(o=>t.has(o));if(e instanceof Error&&t instanceof Error)return e.message===t.message&&e.__proto__.constructor===t.__proto__.constructor;if(Fu(e)&&Fu(t)){let o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every(l=>V(e[l],t[l]))&&((n=e.__proto__)==null?void 0:n.constructor)===((r=t.__proto__)==null?void 0:r.constructor)}return e===t},"equals"),E=Nt(function(e,t){return e===t},"is"),Ol=Nt(function(e,t,...n){return!e(t,...n)},"not"),xu=Nt(function(e){return/^\s*$/.test(e)},"isBlank");function Fu(e){return!!e&&typeof e=="object"}function Uf(e){return e instanceof Function&&Ff(e)===Of&&Do(e).length===1}function Ll(e){return Bu(e)||"<function>"}function Lu(e){let t=[];return n(e);function n(s){var c;if(s===null)return"null";if(typeof s=="function")return r(s,o);if(typeof s=="string")return Ul(s);if(typeof s=="bigint")return`${s}n`;if(Array.isArray(s))return r(s,a);if(s instanceof Date)return`Date(${s.toISOString().replace("T"," ").replace("Z"," UTC")})`;if(s instanceof RegExp)return String(s);if(s instanceof Error)return`${Wu(s)}(${Ul(s.message)})`;if(s instanceof Set)return r(s,i);if(typeof s=="object"){let T=(c=s==null?void 0:s.__proto__)==null?void 0:c.constructor;return T===Object||!T?r(s,l):`${Wu(s)} ${r(s,l)}`}return String(s)}function r(s,c){if(t.indexOf(s)>-1)return"<circular reference>";t.push(s);let T=c(s);return t.pop(),T}function o(s){let c=Do(s).map(n),T=Ll(s);return c.length?pr(T+"(",c,",",")"):T}function a(s){return pr("[",s.map(n),",","]")}function l(s){let c=Object.entries(s).map(([T,G])=>`${Vf(T)}: ${n(G)}`);return pr("{",c,",","}")}function i(s){let c=[...s.values()].map(n);return pr("Set {",c,",","}")}}function Vf(e){return/^[a-zA-Z0-9_$]+$/.test(e)?e:Ul(e)}function Wu(e){return Ll(e.__proto__.constructor)}function Ul(e){return'"'+String(e).replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/"/g,'\\"').replace(/[\x00-\x1f\x7f]/g,_f)+'"'}function _f(e){let t=e.charCodeAt(0).toString(16);return"\\x"+(t.length<2?"0"+t:t)}function Ao(e,t){return t.split(`
`).map(n=>n&&zf(jf(e," "))(n)).join(`
`)}function jf(e,t){return Array(e+1).join(t)}var zf=e=>t=>e+t,Yf=Nt(function(t,n){return n.slice(0,t.length)===t?n.slice(t.length):n});function Qf(e){return String(e).split(/\r?\n/)}function bf(e){let t=Qf(e);xu(Nu(t))&&t.shift(),xu(Lf(t))&&t.pop();let n=/^[ \t]*/.exec(Nu(t))[0];return t.map(Yf(n)).join(`
`)}function pr(e,t,n,r){return t.length<2?e+t.join("")+r:e+`
`+Ao(2,t.join(n+`
`))+`
`+r}function Uu(e){return Tr(this,null,function*(){let t=[];for(let n of e){let r=yield Jf(n.fn),o=Ou.map(a=>({type:"debug",args:a}));Ou.length=0,t.push({test:n,error:r,instrumentLog:o})}return{results:t}})}function Jf(e){let t;try{let n=e();if(n instanceof Promise)return new Promise(r=>{n.then(()=>r()).catch(r)})}catch(n){t=n}return Promise.resolve(t)}var Ou=[],mp=Nt(function(t,n){return n instanceof Ro&&V(t,n.expectArgs)}),Mo=`

`;function Vu({results:e}){let t=!1,n=!1,r=[];for(let o of e){let a=!1;o.error&&(a=t=!0),o.instrumentLog.length&&(a=n=!0),a&&r.push(o)}return t?Kf(r):n?Xf(e.length,r):Zf(e.length)}function Kf(e){return e.map(_u).join(Mo)+Mo+"Tests failed."}function Zf(e){switch(e){case 0:return"No tests to run.";case 1:return"One test ran, and found no issues.";default:return`${e} tests ran, and found no issues.`}}function Xf(e,t){return t.map(_u).join(Mo)+Mo+qf(e)+`, but debugging instrumentation is present.
Remove it before shipping.`}function qf(e){switch(e){case 1:return"The test passed";case 2:return"Both tests passed";default:return`All ${e} tests passed`}}function _u({test:e,error:t,instrumentLog:n}){let o=[e.subject+" "+e.scenario];return n.length&&o.push(Ao(2,eh(n))),t&&o.push(Ao(2,$f(t))),o.join(`
`)}function $f(e){return e instanceof Ro?th(e):nh(e)}function eh(e){return e.map(({args:t})=>ju("debug",t)).join("")}function th(e){return ju("expect",e.expectArgs)}function nh(e){return Lu(e)+" thrown"+Ao(2,rh(e.stack))}function ju(e,t){return pr(e+"(",t.map(Lu),",",")")}function rh(e){if(!e)return"";let t=bf(e).split(`
`);return`
`+t.slice(0,oh(t)).map(n=>n.replace(/(file:\/\/|http:\/\/[^/]*)/,"").replace(/^([^@]*)@(.*)$/,"at $1 ($2)")).join(`
`)}function oh(e){let t=e.findIndex(n=>n.includes("errorFrom"));return t===-1?e.length:t}var gp=Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]}),ah=Wf(),{getAllTests:zu}=ah;function J(...e){}function mt(){return(+new Date%1e6/1e3).toFixed(3)}function j(e,t=0){return isNaN(e)||e===Infinity||e===-Infinity?"--:--":e<0?"-"+Yu(-e,t):Yu(e,t)}function Yu(e,t){function n(l,i=lh){return(l<10?"0":"")+i(l)}let r=Math.floor(e/3600),o=Math.floor(e%3600/60),a=e%60;return r>0?`${r}:${n(o)}:${n(a,Qu(t))}`:`${o}:${n(a,Qu(t))}`}J("hoursMinutesSeconds",{"formats NaN"(){g(j(0/0),E,"--:--")},"formats Infinities"(){g(j(Infinity),E,"--:--"),g(j(-Infinity),E,"--:--")},"formats negative numbers"(){g(j(-1),E,"-0:01"),g(j(-3661.12,2),E,"-1:01:01.12")},"formats single-digit seconds with leading zero"(){g(j(0),E,"0:00"),g(j(1),E,"0:01"),g(j(9),E,"0:09")},"formats double-digit seconds"(){g(j(10),E,"0:10"),g(j(59),E,"0:59")},"formats minutes"(){g(j(60),E,"1:00"),g(j(61),E,"1:01"),g(j(119),E,"1:59"),g(j(120),E,"2:00"),g(j(3599),E,"59:59")},"formats hours"(){g(j(3600),E,"1:00:00"),g(j(7200),E,"2:00:00"),g(j(3661),E,"1:01:01"),g(j(3610),E,"1:00:10"),g(j(3600+600),E,"1:10:00"),g(j(36001),E,"10:00:01")},"adds decimal places"(){g(j(0,0),E,"0:00"),g(j(0,1),E,"0:00.0"),g(j(0,2),E,"0:00.00")},"formats fractional seconds"(){g(j(1.23,2),E,"0:01.23")},"rounds decimals"(){g(j(2.3456,2),E,"0:02.35")}});var lh=e=>e,Qu=e=>t=>t.toFixed(e);function gn(e){var t;return(t=/v=(.{11})/.exec(e))==null?void 0:t[1]}function bu(){return{getPlayerState(){return le.UNSTARTED},getCurrentTime(){return 0},getVideoUrl(){return""},cueVideoById(){},playVideo(){},seekTo(){},getDuration(){return 0},addEventListener(){},removeEventListener(){}}}function Ju(e){return{getPlayerState(){return e.getPlayerState()},getCurrentTime(){return e.getCurrentTime()},getVideoUrl(){return e.getVideoUrl()},cueVideoById(...t){return console.debug(mt(),"player.cueVideoById",...t),e.cueVideoById(...t)},playVideo(...t){return console.debug(mt(),"player.playVideo",...t),e.playVideo(...t)},seekTo(...t){return console.debug(mt(),"player.seekTo",...t,gn(e.getVideoUrl())),e.seekTo(...t)},getDuration(){return e.getDuration()},addEventListener(...t){return console.debug(mt(),"player.addEventListener"),e.addEventListener(...t)},removeEventListener(...t){return console.debug(mt(),"player.removeEventListener"),e.removeEventListener(...t)}}}var le={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};function Ku(e){return Tr(this,null,function*(){let t=yield ih();return new Promise(n=>{let r=new t.Player(e,{height:450,width:800,videoId:null,playerVars:{controls:0,disablekb:1},events:{onReady(){n(r)}}})})})}function ih(){return Zu?Promise.resolve(window.YT):new Promise(e=>{var t;if(document.querySelector("script[src='https://www.youtube.com/iframe_api']")===null){let n=document.createElement("script");n.src="https://www.youtube.com/iframe_api";let r=document.getElementsByTagName("script")[0];(t=r.parentNode)==null||t.insertBefore(n,r)}Vl.push(e)})}var Zu=!1,Vl=[];window.onYouTubeIframeAPIReady=()=>{Zu=!0,Vl.forEach(e=>e(window.YT)),Vl.length=0};function Xu(e,t){let n=Tn(),r=Tn();r.current=e,Ot(()=>(n.current=setInterval(()=>{var o;return(o=r.current)==null?void 0:o.call(r)},t),()=>clearInterval(n.current)),[t])}function qu(){let[e,t]=He(!1);return[e,()=>t(!0)]}function mr(e){switch(e){case le.BUFFERING:return"buffering";case le.UNSTARTED:return"unstarted";case le.CUED:return"cued";case le.ENDED:return"ended";case le.PLAYING:return"playing";case le.PAUSED:return"paused";default:return""}}function $u(e){return e.channel.getName()+" "+mr(e.code)}function gr(e){try{e()}catch(t){return t}}function gt(e,t){if(e.length===0)throw new Error("can't pick element from an empty array");if(t>=1||t<0)throw new Error("fraction out of bounds: "+t);return e[Math.floor(t*e.length)]}J("pick",{"throws if the array is empty"(){g(gr(()=>gt([],0)),V,new Error("can't pick element from an empty array"))},"throws if the fraction is 1"(){g(gr(()=>gt([""],1)),V,new Error("fraction out of bounds: 1"))},"throws if the fraction is > 1"(){g(gr(()=>gt([""],1.25)),V,new Error("fraction out of bounds: 1.25"))},"throws if the fraction is > 0"(){g(gr(()=>gt([""],-.25)),V,new Error("fraction out of bounds: -0.25"))},"picks the first element of the array given 0"(){g(gt([1,2],0),E,1)},"picks the last element of the array given 1 - epsilon"(){g(gt([1,2],.99),E,2)}});function yn(e,t){let n={};return r=>(r in n||(Object.keys(n).length===e&&(n={}),n[r]=t(r)),n[r])}J("cache",{"caches a value"(){let e=0,t=yn(1,()=>(e++,123));t("foo"),t("foo"),g(e,E,1)},"computes and caches values by key"(){let e=yn(2,t=>t+"x");g(e("foo"),E,"foox"),g(e("bar"),E,"barx")},"caches multiple values"(){let e=0,t=yn(2,n=>(e++,n+"x"));t("foo"),t("foo"),t("bar"),t("bar"),g(e,E,2),g(t("foo"),E,"foox"),g(t("bar"),E,"barx")},"a max size of 0 means no limit"(){let e=0,t=yn(0,()=>(e++,123));t("a"),t("b"),t("c"),g(e,E,3)}});function yr(e){let t=1779033703,n=3144134277,r=1013904242,o=2773480762;for(let a=0,l;a<e.length;a++)l=e.charCodeAt(a),t=n^Math.imul(t^l,597399067),n=r^Math.imul(n^l,2869860233),r=o^Math.imul(r^l,951274213),o=t^Math.imul(o^l,2716044179);return t=Math.imul(r^t>>>18,597399067),n=Math.imul(o^n>>>22,2869860233),r=Math.imul(t^r>>>17,951274213),o=Math.imul(n^o>>>19,2716044179),(t^n^r^o)>>>0}J("cyrb128_32",{"hashes unix timestamps to random-looking values"(){g(yr("1661673600"),E,1866196007),g(yr("1661760000"),E,3655929289),g(yr("1661846400"),E,2165297363)}});function Io(e){return function(){var t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}J("mulberry32",{"flips coins fairly"(){let e=0,t=0,n=Io(0);for(let r=0;r<200;r++)n()<.5?e++:t++;g(e-t,E,12)},"generates a reasonably uniform distribution of numbers"(){let e=new Set,t=Io(0);for(let n=0;n<100;n++)e.add(Math.floor(t()*1e4));g(e.size,E,99)}});function $(e,t){let n=-1,r=e.length-1;for(;n<r;){let o=sh(n,r);t(e[o])?n=o:r=o-1}return e[n]}function sh(e,t){return Math.ceil((e+t)/2)}J("binarySearch",{"returns undefined given an empty array"(){g($([],()=>!1),E,void 0)},"returns an element that is to the left of the target"(){g($([1],()=>!0),E,1)},"returns undefined when the only element is not left of the target"(){g($([1],()=>!1),E,void 0)},"returns the rightmost element that is left of the target"(){g($([1,2,3,4],e=>e<=2.5),E,2)},"works with duplicates"(){g($([0,1,2,3,0,0,0,0,0],e=>e>0),E,3)},"works with two elements"(){g($([1,2],e=>e<=1.5),E,1),g($([1,2],e=>e<=2),E,2)},"works with three elements"(){g($([1,2,3],e=>e<=1.5),E,1),g($([1,2,3],e=>e<=2),E,2),g($([1,2,3],e=>e<=3),E,3)},"works with four elements"(){g($([1,2,3,4],e=>e<=1.5),E,1),g($([1,2,3,4],e=>e<=2),E,2),g($([1,2,3,4],e=>e<=3),E,3),g($([1,2,3,4],e=>e<=4),E,4)},"works with five elements"(){g($([1,2,3,4,5],e=>e<=1.5),E,1),g($([1,2,3,4,5],e=>e<=2),E,2),g($([1,2,3,4,5],e=>e<=3),E,3),g($([1,2,3,4,5],e=>e<=4),E,4),g($([1,2,3,4,5],e=>e<=5),E,5)}});var Ie=2;function Ft(e,t){let n=yn(1,Go(t));return{getBroadcast:r,getName(){return e}};function r(o){let a=o/1e3,l=(a-8*3600)%(24*3600),i=a-l,s=n(String(i)),c=$(s,T=>T.startAt<=l);return c==null?{type:"nothing",nextVideoId:""}:c.type==="video"?{type:"video",videoId:c.videoId,videoTitle:c.videoTitle,currentTime:l-c.startAt}:{type:"nothing",nextVideoId:c.nextVideoId}}}var Go=e=>t=>{let n=Io(yr(t)),r=0,o=[];for(;r<24*3600;){let a=gt(e,n());for(let l of a.videos)o.push({type:"nothing",startAt:r,nextVideoId:l.videoId},{type:"video",videoId:l.videoId,videoTitle:l.title,startAt:r+Ie}),r+=l.durationSeconds+Ie}return o};J("ScheduleGenerator",{"schedules a single 24-hour video"(){let e=[{videos:[{durationSeconds:3600*24,videoId:"the-video-id",title:"the-title"}]}],t=Go(e);g(t(""),V,[{type:"nothing",startAt:0,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:"the-title",startAt:2}])},"schedules a 12-hour video twice"(){let e=[{videos:[{durationSeconds:3600*12,videoId:"the-video-id",title:"the-title"}]}],t=Go(e);g(t(""),V,[{type:"nothing",startAt:0,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:"the-title",startAt:2},{type:"nothing",startAt:43202,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:"the-title",startAt:43204}])},"picks the videos to show randomly"(){let e=[{videos:[{durationSeconds:3600*2,videoId:"one",title:""}]},{videos:[{durationSeconds:3600*2,videoId:"two",title:""}]},{videos:[{durationSeconds:3600*2,videoId:"three",title:""}]}],t=Go(e);g(t("asdfx").map(n=>n.videoId).filter(Boolean),V,["three","one","three","two","two","three","one","three","two","two","one","one"])}});function ec(e){return{type:"nothing",nextVideoId:e}}function Ve(e,t){return{getBroadcast:n=>{let r=n/1e3,o=0,a=t.map(i=>i.durationSeconds).reduce(uh,0)+t.length*Ie,l=r%a;for(let i of t){let{videoId:s,title:c,durationSeconds:T}=i;if(o+Ie>l)return ec(s);if(o+=Ie,o+T>l)return{type:"video",currentTime:l-o,videoId:s,videoTitle:c};o+=T}return ec("")},getName:()=>e}}var uh=(e,t)=>e+t;J("looping channel",{"plays the first episode after the second"(){let e=Ve("Jonathan",[{videoId:"first",title:"The First",durationSeconds:100},{videoId:"second",title:"The Second",durationSeconds:100}]);g(e.getBroadcast(250*1e3),V,{videoId:"first",videoTitle:"The First",currentTime:44,type:"video"})},"uses the provided name"(){let e=Ve("Jonathan",[]);g(e.getName(),E,"Jonathan")},"when no videos are provided, plays nothing"(){let e=Ve("Jonathan",[]);g(e.getBroadcast(42).type,E,"nothing")},"plays a first video at the beginning"(){let e=Ve("Jonathan",[{videoId:"the-id",title:"the-title",durationSeconds:42}]);g(e.getBroadcast(0+Ie*1e3),V,{type:"video",videoId:"the-id",currentTime:0,videoTitle:"the-title"})},"plays a video all the way though"(){let e=Ve("Jonathan",[{videoId:"the-id",title:"the-title",durationSeconds:42}]);g(e.getBroadcast(1e3+Ie*1e3),V,{type:"video",videoId:"the-id",currentTime:1,videoTitle:"the-title"})},"puts a gap between videos"(){let e=Ve("Jonathan",[{videoId:"first",title:"The First",durationSeconds:100},{videoId:"second",title:"The Second",durationSeconds:10}]);g(e.getBroadcast(103*1e3),V,{type:"nothing",nextVideoId:"second"})},"plays a second episode after the first"(){let e=Ve("Jonathan",[{videoId:"first",title:"The First",durationSeconds:1},{videoId:"second",title:"The Second",durationSeconds:1}]);g(e.getBroadcast(2*Ie*1e3+1e3),V,{type:"video",videoId:"second",currentTime:0,videoTitle:"The Second"})}});function ee(e){return e.split(/\n+/).map(dh).filter(Ol(ch)).filter(Ol(fh)).map(vr(/ +/,3)).flatMap(([t,n,r])=>n==="SHORTS"?[]:[{videoId:t,durationSeconds:Ge(n),title:r}])}J("parseVideos",{"empty string"(){g(ee(""),V,[])},spaces(){g(ee("  "),V,[])},newlines(){g(ee(`


`),V,[])},"newlines and spaces"(){g(ee(` 
 
 
`),V,[])},comments(){g(ee(`#foo
# bar`),V,[])},"strips spaces before comments"(){g(ee(`  #foo
  # bar`),V,[])},"parses actual data"(){g(ee(`
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
      Ga8tNxnHjt4 3:01 Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971
    `),V,[{videoId:"leb645Xu6uo",durationSeconds:654,title:"Captain Murderer - Emlyn Williams"},{videoId:"Ga8tNxnHjt4",durationSeconds:181,title:"Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971"}])},"removes shorts"(){g(ee(`
      undefined SHORTS blah blah
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
    `),V,[{videoId:"leb645Xu6uo",durationSeconds:654,title:"Captain Murderer - Emlyn Williams"}])}});function ch(e){return e.startsWith("#")}function Ge(e){let t=[1,60,3600,86400],n=e.split(":").map(r=>parseInt(r,10)).reverse();return hh(n,t).map(([r,o])=>r*o).reduce(ph,0)}J("parseDuration",{"0:00"(){g(Ge("0:00"),E,0)},"00:00"(){g(Ge("00:00"),E,0)},"1 second"(){g(Ge("0:01"),E,1)},"10 seconds"(){g(Ge("0:10"),E,10)},"1 minute"(){g(Ge("1:00"),E,60)},"1 minute 10 seconds"(){g(Ge("1:10"),E,70)},"10 minutes 10 seconds"(){g(Ge("10:10"),E,610)},"1 hour"(){g(Ge("1:00:00"),E,3600)},"1 hour 1 second"(){g(Ge("1:00:01"),E,3601)},"10 hours 1 second"(){g(Ge("10:00:01"),E,36001)},"1 day 1 second"(){g(Ge("1:0:00:01"),E,86401)}});function dh(e){return e.trim()}function fh(e){return e.length===0}var vr=(e,t=Infinity)=>n=>{if(typeof e=="string"&&e.length===0)throw"split(): empty delimiter not supported";let r=0,o=0,a=[],l=n;for(;a.length<t-1&&l.length>0;){let i=l.match(e);if(i==null)break;a.push(l.slice(0,i.index)),l=l.slice(i.index+i[0].length)}return a.push(l),a};J("split",{"empty string"(){g(vr(" ")(""),V,[""])},"no limit"(){g(vr(" ")("a b c"),V,["a","b","c"])},limit(){g(vr(" ",2)("a b c"),V,["a","b c"])},regex(){g(vr(/ +/)("a b   c"),V,["a","b","c"])}});function hh(e,t){let n=[];for(let r=0;r<e.length&&r<t.length;r++)n.push([e[r],t[r]]);return n}function ph(e,t){return e+t}var _l=(...e)=>e.reduce(mh),tc=gh(_l(ee,e=>({videos:e})))([`
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
`]);J("pipe",{"given one function"(){g(_l(t=>t+1)(1),E,2)},"given two functions"(){let e=t=>t+1;g(_l(e,e)(1),E,3)}});function mh(e,t){return(...n)=>t(e(...n))}function gh(e){return t=>t.map(e)}var jl=(...e)=>e.reduce(yh),nc=vh(jl(ee,e=>({videos:e})))(["BecZdQvjGrY 54:49 In Gowan Ring - Compendium (Full Album)","B3oAx9VmAdA 43:52 In Gowan Ring - Hazel Steps Through A Weathered Home",`
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
  `]);J("pipe",{"given one function"(){g(jl(t=>t+1)(1),E,2)},"given two functions"(){let e=t=>t+1;g(jl(e,e)(1),E,3)}});function yh(e,t){return(...n)=>t(e(...n))}function vh(e){return t=>t.map(e)}var Sh=(...e)=>e.reduce(Th);function Th(e,t){return(...n)=>t(e(...n))}function Eh(e){return t=>t.map(e)}var g1=ee(`
    vKXu0CzRcrI 0:16 Here's Tree
    ieWm9T_GgSA 0:08 I'm Lost
    zBIx-gP-I8c 0:51 Strong Bad Email #1 - Some Kinda Robot
    BHLsrzYt-H4 0:52 Strong Bad Email #2 - Homsar
    wRKrv-RlJOw 1:01 Strong Bad Email #6 - Depressio
    Lml_AKkhCVY 1:01 Strong Bad Email #9 - I Love You
`),rc=ee(`
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
`),oc=ee(`

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
`),ac=ee(`
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

`),lc=Eh(Sh(ee,e=>({videos:e})))([`
    BShj3SPzpSk 7:15 Eternal Reaches - Lodaris Sub-sector worlds
    Thj22uZuWa4 4:38 Eternal Reaches GIVEAWAY - Mongoose Traveller 2ed Starter Set - Competition NOW CLOSED
    11_7X-Ey7AA 22:56 Eternal Reaches - Lodaris Sub-Sector Interstellar Factions
    _lorRfxn-sU 13:06 Eternal Reaches - The Intersection - Traveller Setting
`,`
    4-OoJwwDLm4 1:52:32 RenSpace - Traveller MgT2e Worldbuilding - Session 1
    2OFEebuUg9M 1:15:54 RenSpace - Traveller MgT2e Worldbuilding - Session 2
    uQsqPKM9_jo 1:27:35 RenSpace - Traveller MgT2e Worldbuilding - Session 3
`]),ic=ee(`
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
`),sc=ee(`
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
`),uc=ee(`
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
`);var Bo=[Ft("One",rc.map(Ho)),Ft("Two",oc.map(Ho)),Ft("Three",nc),Ft("Four",[...ac.map(Ho),...lc]),Ft("Five",ic.map(Ho)),Ve("Six",sc),Ft("Seven",tc),Ve("Eight",uc)];function Ho(e){return{videos:[e]}}function cc(e){return R(Lt,null,Bo.map(t=>R("button",{key:t.getName(),onClick:()=>e.onChannelSelected(t)},t.getName())))}function dc(){let[e,t]=He(+new Date);return Xu(()=>t(+new Date),250),e}function fc(e=""){return{type:"nothing",nextVideoId:e}}function hc(e,t){let{state:n,videoId:r,time:o}=t;if(e.type==="nothing")switch(n){case le.ENDED:case le.CUED:case le.UNSTARTED:return e.nextVideoId?r!==e.nextVideoId?[{type:"cue",videoId:e.nextVideoId,timestamp:0}]:[{type:"seek",timestamp:0},{type:"play"}]:[];default:return[]}else{if(n===le.BUFFERING)return[];let{videoId:a,currentTime:l}=e;if(r!==a)return[{type:"cue",videoId:a,timestamp:l<Ie?0:l}];{let i=[];switch(n){case le.PAUSED:case le.CUED:case le.UNSTARTED:r&&i.push({type:"play"})}return o&&Ch(o,l)>=Ie&&(console.debug("time is off; seeking",o,l),i.push({type:"seek",timestamp:l})),i}}}function Ch(e,t){return Math.abs(e-t)}var wh=0;function Ph(){let[,e]=He(0);return()=>e(++wh)}function pc(e){let t=Ph(),n=Tn(bu());return Ot(()=>{Ku(e).then(r=>{n.current=r,r.addEventListener("onStateChange",o=>{console.debug(mt(),"player onStateChange",mr(o.data),gn(r.getVideoUrl())),t()}),t()})},[e]),n.current}function kh({broadcast:e,player:t}){var r;let n=o=>j(o,2);return{videoLink:e.type==="video"?{text:e.videoTitle,href:"https://youtube.com/watch?v="+e.videoId}:null,actual:{video:(r=t.videoId)!=null?r:"",playerState:mr(t.state),currentTime:t.time!=null?n(t.time):"-"},scheduled:{video:e.type==="video"?e.videoId:"-",playerState:e.type,currentTime:e.type==="video"?n(e.currentTime):"-"},secondsBehindSchedule:e.type==="video"&&t.time!=null?(e.currentTime-t.time).toFixed(2):"-",timeRemainingInVideo:t.duration!=null&&t.time!=null?n(t.duration-t.time):"-"}}function mc(e){let{broadcast:t,player:n,onClose:r}=e,o=kh({broadcast:t,player:n});return R(Lt,null,R("button",{class:"close-button",onClick:r},"close"),R("h1",null,"Culture Machine"),R("p",null,"Made by ",R("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."," ",R("a",{href:"https://github.com/benchristel/tv"},"Source code here"),". Some rights reserved. See the"," ",R("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"license"),"."),R("hr",null),R("h2",null,"Video Info"),R("p",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},"Now playing:"," ",o.videoLink?R("a",{href:o.videoLink.href},o.videoLink.text):"-"),R("table",null,R("thead",null,R("tr",null,R("td",null),R("th",{scope:"col"},"actual"),R("th",{scope:"col"},"scheduled"))),R("tbody",null,R("tr",null,R("th",{scope:"row"},"video"),R("td",null,o.actual.video),R("td",null,o.scheduled.video)),R("tr",null,R("th",{scope:"row"},"player state"),R("td",null,o.actual.playerState),R("td",null,o.scheduled.playerState)),R("tr",null,R("th",{scope:"row"},"current time"),R("td",null,o.actual.currentTime),R("td",null,o.scheduled.currentTime)))),R("p",null,"Seconds behind schedule: ",o.secondsBehindSchedule),R("p",null,"Time remaining in video: ",o.timeRemainingInVideo))}var zl=class extends Ql{componentDidUpdate(){let{player:t,commands:n}=this.props;n.forEach(r=>{switch(r.type){case"play":t.playVideo();break;case"cue":t.cueVideoById(r.videoId,r.timestamp);break;case"seek":t.seekTo(r.timestamp);break;default:console.error("unexpected video command type",r.type,r)}})}render(){return null}};function gc(e){return{state:e.getPlayerState(),videoId:gn(e.getVideoUrl()),time:e.getCurrentTime(),duration:e.getDuration()}}function yc(){let[e,t]=qu(),[n,r]=He(!1),[o,a]=He(Bo[0]),l=dc(),i=e?o.getBroadcast(l):fc(),s=Ju(pc("player-container")),c=gc(s),T=c.state,G=T!==le.PLAYING,y=hc(i,c);return R(Dh,{effects:R(zl,{commands:y,player:s}),screen:R("div",{className:n?"info-pane-open":""},R("div",{className:"player-assembly"},R("div",{id:"player-container"}),G&&R("div",{className:"black-screen"},R($u,{code:T,channel:o})),!e&&R(Rh,{onClick:t})),R("div",{className:"info-pane"},R(mc,{player:c,broadcast:i,onClose:()=>r(!1)})),R("div",{className:"info-pane-close-overlay","aria-hidden":!0,onClick:()=>r(!1)})),controlPanel:R(Lt,null,R(cc,{onChannelSelected:P=>{a(P),t()}}),R("button",{className:n?"info-button info-button-info-pane-open":"info-button",onClick:()=>r(!n)},"Info"))})}function Dh(e){return R("div",{className:"App"},R("div",{className:"bezel"},R("div",{className:"screen"},e.screen),R("div",{style:{height:"12px"}}),R("div",{className:"controls"},e.controlPanel),e.effects))}function Rh(e){return R("button",{id:"start",onClick:e.onClick},"▸ Play")}function vc(){let[e,t]=He("");return Ot(()=>{Uu(zu()).then(Vu).then(t).catch(n=>t(n.message))},[]),/fail/i.test(e)?R("div",{className:"TestResults"},R("code",null,R("pre",null,e))):null}Bl(R(yc,null),document.getElementById("app"));Bl(R(vc,null),document.getElementById("test-results"));
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
