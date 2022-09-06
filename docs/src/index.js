var vr=(e,n,t)=>new Promise((r,o)=>{var l=s=>{try{a(t.next(s))}catch(c){o(c)}},i=s=>{try{a(t.throw(s))}catch(c){o(c)}},a=s=>s.done?r(s.value):Promise.resolve(s.value).then(l,i);a((t=t.apply(e,n)).next())});function Ln(e,n,t){return t={path:n,exports:{},require:function(r,o){return dc(r,o==null?t.path:o)}},e(t,t.exports),t.exports}function dc(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var ji=Object.getOwnPropertySymbols,pc=Object.prototype.hasOwnProperty,hc=Object.prototype.propertyIsEnumerable;function mc(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function gc(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;var r=Object.getOwnPropertyNames(n).map(function(l){return n[l]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(l){o[l]=l}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch(l){return!1}}var B=gc()?Object.assign:function(e,n){for(var t,r=mc(e),o,l=1;l<arguments.length;l++){t=Object(arguments[l]);for(var i in t)pc.call(t,i)&&(r[i]=t[i]);if(ji){o=ji(t);for(var a=0;a<o.length;a++)hc.call(t,o[a])&&(r[o[a]]=t[o[a]])}}return r},yc=Ln(function(e,n){var t=60103,r=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var o=60109,l=60110,i=60112;n.Suspense=60113;var a=60115,s=60116;if(typeof Symbol=="function"&&Symbol.for){var c=Symbol.for;t=c("react.element"),r=c("react.portal"),n.Fragment=c("react.fragment"),n.StrictMode=c("react.strict_mode"),n.Profiler=c("react.profiler"),o=c("react.provider"),l=c("react.context"),i=c("react.forward_ref"),n.Suspense=c("react.suspense"),a=c("react.memo"),s=c("react.lazy")}var v=typeof Symbol=="function"&&Symbol.iterator;function N(p){return p===null||typeof p!="object"?null:(p=v&&p[v]||p["@@iterator"],typeof p=="function"?p:null)}function g(p){for(var w="https://reactjs.org/docs/error-decoder.html?invariant="+p,U=1;U<arguments.length;U++)w+="&args[]="+encodeURIComponent(arguments[U]);return"Minified React error #"+p+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G={};function P(p,w,U){this.props=p,this.context=w,this.refs=G,this.updater=U||E}P.prototype.isReactComponent={},P.prototype.setState=function(p,w){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error(g(85));this.updater.enqueueSetState(this,p,w,"setState")},P.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function d(){}d.prototype=P.prototype;function u(p,w,U){this.props=p,this.context=w,this.refs=G,this.updater=U||E}var f=u.prototype=new d;f.constructor=u,B(f,P.prototype),f.isPureReactComponent=!0;var h={current:null},m=Object.prototype.hasOwnProperty,H={key:!0,ref:!0,__self:!0,__source:!0};function S(p,w,U){var z,y={},R=null,A=null;if(w!=null)for(z in w.ref!==void 0&&(A=w.ref),w.key!==void 0&&(R=""+w.key),w)m.call(w,z)&&!H.hasOwnProperty(z)&&(y[z]=w[z]);var F=arguments.length-2;if(F===1)y.children=U;else if(1<F){for(var W=Array(F),$=0;$<F;$++)W[$]=arguments[$+2];y.children=W}if(p&&p.defaultProps)for(z in F=p.defaultProps,F)y[z]===void 0&&(y[z]=F[z]);return{$$typeof:t,type:p,key:R,ref:A,props:y,_owner:h.current}}function M(p,w){return{$$typeof:t,type:p.type,key:w,ref:p.ref,props:p.props,_owner:p._owner}}function L(p){return typeof p=="object"&&p!==null&&p.$$typeof===t}function x(p){var w={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(U){return w[U]})}var K=/\/+/g;function ye(p,w){return typeof p=="object"&&p!==null&&p.key!=null?x(""+p.key):w.toString(36)}function Hn(p,w,U,z,y){var R=typeof p;(R==="undefined"||R==="boolean")&&(p=null);var A=!1;if(p===null)A=!0;else switch(R){case"string":case"number":A=!0;break;case"object":switch(p.$$typeof){case t:case r:A=!0}}if(A)return A=p,y=y(A),p=z===""?"."+ye(A,0):z,Array.isArray(y)?(U="",p!=null&&(U=p.replace(K,"$&/")+"/"),Hn(y,w,U,"",function($){return $})):y!=null&&(L(y)&&(y=M(y,U+(!y.key||A&&A.key===y.key?"":(""+y.key).replace(K,"$&/")+"/")+p)),w.push(y)),1;if(A=0,z=z===""?".":z+":",Array.isArray(p))for(var F=0;F<p.length;F++){R=p[F];var W=z+ye(R,F);A+=Hn(R,w,U,W,y)}else if(W=N(p),typeof W=="function")for(p=W.call(p),F=0;!(R=p.next()).done;)R=R.value,W=z+ye(R,F++),A+=Hn(R,w,U,W,y);else if(R==="object")throw w=""+p,Error(g(31,w==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":w));return A}function le(p,w,U){if(p==null)return p;var z=[],y=0;return Hn(p,z,"","",function(R){return w.call(U,R,y++)}),z}function ne(p){if(p._status===-1){var w=p._result;w=w(),p._status=0,p._result=w,w.then(function(U){p._status===0&&(U=U.default,p._status=1,p._result=U)},function(U){p._status===0&&(p._status=2,p._result=U)})}if(p._status===1)return p._result;throw p._result}var hn={current:null};function ie(){var p=hn.current;if(p===null)throw Error(g(321));return p}var mn={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:h,IsSomeRendererActing:{current:!1},assign:B};n.Children={map:le,forEach:function(p,w,U){le(p,function(){w.apply(this,arguments)},U)},count:function(p){var w=0;return le(p,function(){w++}),w},toArray:function(p){return le(p,function(w){return w})||[]},only:function(p){if(!L(p))throw Error(g(143));return p}},n.Component=P,n.PureComponent=u,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mn,n.cloneElement=function(p,w,U){if(p==null)throw Error(g(267,p));var z=B({},p.props),y=p.key,R=p.ref,A=p._owner;if(w!=null){if(w.ref!==void 0&&(R=w.ref,A=h.current),w.key!==void 0&&(y=""+w.key),p.type&&p.type.defaultProps)var F=p.type.defaultProps;for(W in w)m.call(w,W)&&!H.hasOwnProperty(W)&&(z[W]=w[W]===void 0&&F!==void 0?F[W]:w[W])}var W=arguments.length-2;if(W===1)z.children=U;else if(1<W){F=Array(W);for(var $=0;$<W;$++)F[$]=arguments[$+2];z.children=F}return{$$typeof:t,type:p.type,key:y,ref:R,props:z,_owner:A}},n.createContext=function(p,w){return w===void 0&&(w=null),p={$$typeof:l,_calculateChangedBits:w,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider={$$typeof:o,_context:p},p.Consumer=p},n.createElement=S,n.createFactory=function(p){var w=S.bind(null,p);return w.type=p,w},n.createRef=function(){return{current:null}},n.forwardRef=function(p){return{$$typeof:i,render:p}},n.isValidElement=L,n.lazy=function(p){return{$$typeof:s,_payload:{_status:-1,_result:p},_init:ne}},n.memo=function(p,w){return{$$typeof:a,type:p,compare:w===void 0?null:w}},n.useCallback=function(p,w){return ie().useCallback(p,w)},n.useContext=function(p,w){return ie().useContext(p,w)},n.useDebugValue=function(){},n.useEffect=function(p,w){return ie().useEffect(p,w)},n.useImperativeHandle=function(p,w,U){return ie().useImperativeHandle(p,w,U)},n.useLayoutEffect=function(p,w){return ie().useLayoutEffect(p,w)},n.useMemo=function(p,w){return ie().useMemo(p,w)},n.useReducer=function(p,w,U){return ie().useReducer(p,w,U)},n.useRef=function(p){return ie().useRef(p)},n.useState=function(p){return ie().useState(p)},n.version="17.0.2"}),O=Ln(function(e){e.exports=yc});var vp=O.Children,zi=O.Component,_n=O.Fragment,Tp=O.Profiler,wp=O.PureComponent,Cp=O.StrictMode,Sp=O.Suspense,Ep=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rp=O.cloneElement,kp=O.createContext,D=O.createElement,Dp=O.createFactory,Pp=O.createRef,Ip=O.forwardRef,Mp=O.isValidElement,Ap=O.lazy,Np=O.memo,Gp=O.useCallback,Hp=O.useContext,xp=O.useDebugValue,Fn=O.useEffect,Lp=O.useImperativeHandle,_p=O.useLayoutEffect,Fp=O.useMemo,Wp=O.useReducer,gt=O.useRef,Ae=O.useState,Up=O.version;var vc=Ln(function(e,n){var t,r,o,l;if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();n.unstable_now=function(){return a.now()-s}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var c=null,v=null,N=function(){if(c!==null)try{var y=n.unstable_now();c(!0,y),c=null}catch(R){throw setTimeout(N,0),R}};t=function(y){c!==null?setTimeout(t,0,y):(c=y,setTimeout(N,0))},r=function(y,R){v=setTimeout(y,R)},o=function(){clearTimeout(v)},n.unstable_shouldYield=function(){return!1},l=n.unstable_forceFrameRate=function(){}}else{var g=window.setTimeout,E=window.clearTimeout;if(typeof console!="undefined"){var G=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof G!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var P=!1,d=null,u=-1,f=5,h=0;n.unstable_shouldYield=function(){return n.unstable_now()>=h},l=function(){},n.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<y?Math.floor(1e3/y):5};var m=new MessageChannel,H=m.port2;m.port1.onmessage=function(){if(d!==null){var y=n.unstable_now();h=y+f;try{d(!0,y)?H.postMessage(null):(P=!1,d=null)}catch(R){throw H.postMessage(null),R}}else P=!1},t=function(y){d=y,P||(P=!0,H.postMessage(null))},r=function(y,R){u=g(function(){y(n.unstable_now())},R)},o=function(){E(u),u=-1}}function S(y,R){var A=y.length;y.push(R);e:for(;;){var F=A-1>>>1,W=y[F];if(W!==void 0&&0<x(W,R))y[F]=R,y[A]=W,A=F;else break e}}function M(y){return y=y[0],y===void 0?null:y}function L(y){var R=y[0];if(R!==void 0){var A=y.pop();if(A!==R){y[0]=A;e:for(var F=0,W=y.length;F<W;){var $=2*(F+1)-1,gn=y[$],mt=$+1,xn=y[mt];if(gn!==void 0&&0>x(gn,A))xn!==void 0&&0>x(xn,gn)?(y[F]=xn,y[mt]=A,F=mt):(y[F]=gn,y[$]=A,F=$);else if(xn!==void 0&&0>x(xn,A))y[F]=xn,y[mt]=A,F=mt;else break e}}return R}return null}function x(y,R){var A=y.sortIndex-R.sortIndex;return A!==0?A:y.id-R.id}var K=[],ye=[],Hn=1,le=null,ne=3,hn=!1,ie=!1,mn=!1;function p(y){for(var R=M(ye);R!==null;){if(R.callback===null)L(ye);else if(R.startTime<=y)L(ye),R.sortIndex=R.expirationTime,S(K,R);else break;R=M(ye)}}function w(y){if(mn=!1,p(y),!ie)if(M(K)!==null)ie=!0,t(U);else{var R=M(ye);R!==null&&r(w,R.startTime-y)}}function U(y,R){ie=!1,mn&&(mn=!1,o()),hn=!0;var A=ne;try{for(p(R),le=M(K);le!==null&&(!(le.expirationTime>R)||y&&!n.unstable_shouldYield());){var F=le.callback;if(typeof F=="function"){le.callback=null,ne=le.priorityLevel;var W=F(le.expirationTime<=R);R=n.unstable_now(),typeof W=="function"?le.callback=W:le===M(K)&&L(K),p(R)}else L(K);le=M(K)}if(le!==null)var $=!0;else{var gn=M(ye);gn!==null&&r(w,gn.startTime-R),$=!1}return $}finally{le=null,ne=A,hn=!1}}var z=l;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(y){y.callback=null},n.unstable_continueExecution=function(){ie||hn||(ie=!0,t(U))},n.unstable_getCurrentPriorityLevel=function(){return ne},n.unstable_getFirstCallbackNode=function(){return M(K)},n.unstable_next=function(y){switch(ne){case 1:case 2:case 3:var R=3;break;default:R=ne}var A=ne;ne=R;try{return y()}finally{ne=A}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=z,n.unstable_runWithPriority=function(y,R){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var A=ne;ne=y;try{return R()}finally{ne=A}},n.unstable_scheduleCallback=function(y,R,A){var F=n.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?F+A:F):A=F,y){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=A+W,y={id:Hn++,callback:R,priorityLevel:y,startTime:A,expirationTime:W,sortIndex:-1},A>F?(y.sortIndex=A,S(ye,y),M(K)===null&&y===M(ye)&&(mn?o():mn=!0,r(w,A-F))):(y.sortIndex=W,S(K,y),ie||hn||(ie=!0,t(U))),y},n.unstable_wrapCallback=function(y){var R=ne;return function(){var A=ne;ne=R;try{return y.apply(this,arguments)}finally{ne=A}}}}),te=Ln(function(e){e.exports=vc});function T(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!O)throw Error(T(227));var Vi=new Set,yt={};function yn(e,n){Wn(e,n),Wn(e+"Capture",n)}function Wn(e,n){for(yt[e]=n,e=0;e<n.length;e++)Vi.add(n[e])}var Ue=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Tc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yi=Object.prototype.hasOwnProperty,Qi={},Ji={};function wc(e){return Yi.call(Ji,e)?!0:Yi.call(Qi,e)?!1:Tc.test(e)?Ji[e]=!0:(Qi[e]=!0,!1)}function Cc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sc(e,n,t,r){if(n===null||typeof n=="undefined"||Cc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function me(e,n,t,r,o,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new me(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Go=/[\-:]([a-z])/g;function Ho(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Go,Ho);ae[n]=new me(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Go,Ho);ae[n]=new me(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Go,Ho);ae[n]=new me(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function xo(e,n,t,r){var o=ae.hasOwnProperty(n)?ae[n]:null,l=o!==null?o.type===0:r?!1:!(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N");l||(Sc(n,t,o,r)&&(t=null),r||o===null?wc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var vn=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vt=60103,Tn=60106,Ye=60107,Lo=60108,Tt=60114,_o=60109,Fo=60110,Tr=60112,wt=60113,wr=60120,Cr=60115,Wo=60116,Uo=60121,Oo=60128,Ki=60129,Bo=60130,jo=60131;typeof Symbol=="function"&&Symbol.for&&(b=Symbol.for,vt=b("react.element"),Tn=b("react.portal"),Ye=b("react.fragment"),Lo=b("react.strict_mode"),Tt=b("react.profiler"),_o=b("react.provider"),Fo=b("react.context"),Tr=b("react.forward_ref"),wt=b("react.suspense"),wr=b("react.suspense_list"),Cr=b("react.memo"),Wo=b("react.lazy"),Uo=b("react.block"),b("react.scope"),Oo=b("react.opaque.id"),Ki=b("react.debug_trace_mode"),Bo=b("react.offscreen"),jo=b("react.legacy_hidden"));var b,Zi=typeof Symbol=="function"&&Symbol.iterator;function Ct(e){return e===null||typeof e!="object"?null:(e=Zi&&e[Zi]||e["@@iterator"],typeof e=="function"?e:null)}var zo;function St(e){if(zo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);zo=n&&n[1]||""}return`
`+zo+e}var Vo=!1;function Sr(e,n){if(!e||Vo)return"";Vo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a])return`
`+o[i].replace(" at new "," at ");while(1<=i&&0<=a);break}}}finally{Vo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?St(e):""}function Ec(e){switch(e.tag){case 5:return St(e.type);case 16:return St("Lazy");case 13:return St("Suspense");case 19:return St("SuspenseList");case 0:case 2:case 15:return e=Sr(e.type,!1),e;case 11:return e=Sr(e.type.render,!1),e;case 22:return e=Sr(e.type._render,!1),e;case 1:return e=Sr(e.type,!0),e;default:return""}}function Un(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ye:return"Fragment";case Tn:return"Portal";case Tt:return"Profiler";case Lo:return"StrictMode";case wt:return"Suspense";case wr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fo:return(e.displayName||"Context")+".Consumer";case _o:return(e._context.displayName||"Context")+".Provider";case Tr:var n=e.render;return n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case Cr:return Un(e.type);case Uo:return Un(e._render);case Wo:n=e._payload,e=e._init;try{return Un(e(n))}catch(t){}}return null}function Qe(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Xi(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rc(e){var n=Xi(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Er(e){e._valueTracker||(e._valueTracker=Rc(e))}function qi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Xi(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(n){return e.body}}function Yo(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function $i(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Qe(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function bi(e,n){n=n.checked,n!=null&&xo(e,"checked",n,!1)}function Jo(e,n){bi(e,n);var t=Qe(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Qo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Qo(e,n.type,Qe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ea(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Qo(e,n,t){(n!=="number"||Rr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}function kc(e){var n="";return O.Children.forEach(e,function(t){t!=null&&(n+=t)}),n}function Ko(e,n){return e=B({children:void 0},n),(n=kc(n.children))&&(e.children=n),e}function On(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Qe(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Zo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(T(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function na(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(T(92));if(Array.isArray(t)){if(!(1>=t.length))throw Error(T(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Qe(t)}}function ta(e,n){var t=Qe(n.value),r=Qe(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ra(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}var Xo={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function oa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?oa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,la=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!==Xo.svg||"innerHTML"in e)e.innerHTML=n;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Et(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Rt={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dc=["Webkit","ms","Moz","O"];Object.keys(Rt).forEach(function(e){Dc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Rt[n]=Rt[e]})});function ia(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Rt.hasOwnProperty(e)&&Rt[e]?(""+n).trim():n+"px"}function aa(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=ia(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Pc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(e,n){if(n){if(Pc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(T(60));if(!(typeof n.dangerouslySetInnerHTML=="object"&&"__html"in n.dangerouslySetInnerHTML))throw Error(T(61))}if(n.style!=null&&typeof n.style!="object")throw Error(T(62))}}function bo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function el(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,Bn=null,jn=null;function sa(e){if(e=kt(e)){if(typeof nl!="function")throw Error(T(280));var n=e.stateNode;n&&(n=Dr(n),nl(e.stateNode,e.type,n))}}function ua(e){Bn?jn?jn.push(e):jn=[e]:Bn=e}function ca(){if(Bn){var e=Bn,n=jn;if(jn=Bn=null,sa(e),n)for(e=0;e<n.length;e++)sa(n[e])}}function tl(e,n){return e(n)}function fa(e,n,t,r,o){return e(n,t,r,o)}function rl(){}var da=tl,wn=!1,ol=!1;function ll(){(Bn!==null||jn!==null)&&(rl(),ca())}function Ic(e,n,t){if(ol)return e(n,t);ol=!0;try{return da(e,n,t)}finally{ol=!1,ll()}}function Dt(e,n){var t=e.stateNode;if(t===null)return null;var r=Dr(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(T(231,n,typeof t));return t}var il=!1;if(Ue)try{zn={},Object.defineProperty(zn,"passive",{get:function(){il=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch(e){il=!1}var zn;function Mc(e,n,t,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(v){this.onError(v)}}var Pt=!1,Pr=null,Ir=!1,al=null,Ac={onError:function(e){Pt=!0,Pr=e}};function Nc(e,n,t,r,o,l,i,a,s){Pt=!1,Pr=null,Mc.apply(Ac,arguments)}function Gc(e,n,t,r,o,l,i,a,s){if(Nc.apply(this,arguments),Pt){if(Pt){var c=Pr;Pt=!1,Pr=null}else throw Error(T(198));Ir||(Ir=!0,al=c)}}function Cn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&1026)!=0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function pa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ha(e){if(Cn(e)!==e)throw Error(T(188))}function Hc(e){var n=e.alternate;if(!n){if(n=Cn(e),n===null)throw Error(T(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return ha(o),e;if(l===r)return ha(o),n;l=l.sibling}throw Error(T(188))}if(t.return!==r.return)t=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===t){i=!0,t=o,r=l;break}if(a===r){i=!0,r=o,t=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===t){i=!0,t=l,r=o;break}if(a===r){i=!0,r=l,t=o;break}a=a.sibling}if(!i)throw Error(T(189))}}if(t.alternate!==r)throw Error(T(190))}if(t.tag!==3)throw Error(T(188));return t.stateNode.current===t?e:n}function ma(e){if(e=Hc(e),!e)return null;for(var n=e;;){if(n.tag===5||n.tag===6)return n;if(n.child)n.child.return=n,n=n.child;else{if(n===e)break;for(;!n.sibling;){if(!n.return||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}return null}function ga(e,n){for(var t=e.alternate;n!==null;){if(n===e||n===t)return!0;n=n.return}return!1}var ya,sl,va,Ta,ul=!1,He=[],Je=null,Ke=null,Ze=null,It=new Map,Mt=new Map,At=[],wa="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cl(e,n,t,r,o){return{blockedOn:e,domEventName:n,eventSystemFlags:t|16,nativeEvent:o,targetContainers:[r]}}function Ca(e,n){switch(e){case"focusin":case"focusout":Je=null;break;case"dragenter":case"dragleave":Ke=null;break;case"mouseover":case"mouseout":Ze=null;break;case"pointerover":case"pointerout":It.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mt.delete(n.pointerId)}}function Nt(e,n,t,r,o,l){return e===null||e.nativeEvent!==l?(e=cl(n,t,r,o,l),n!==null&&(n=kt(n),n!==null&&sl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function xc(e,n,t,r,o){switch(n){case"focusin":return Je=Nt(Je,e,n,t,r,o),!0;case"dragenter":return Ke=Nt(Ke,e,n,t,r,o),!0;case"mouseover":return Ze=Nt(Ze,e,n,t,r,o),!0;case"pointerover":var l=o.pointerId;return It.set(l,Nt(It.get(l)||null,e,n,t,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Mt.set(l,Nt(Mt.get(l)||null,e,n,t,r,o)),!0}return!1}function Lc(e){var n=Sn(e.target);if(n!==null){var t=Cn(n);if(t!==null){if(n=t.tag,n===13){if(n=pa(t),n!==null){e.blockedOn=n,Ta(e.lanePriority,function(){te.unstable_runWithPriority(e.priority,function(){va(t)})});return}}else if(n===3&&t.stateNode.hydrate){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=fl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t!==null)return n=kt(t),n!==null&&sl(n),e.blockedOn=t,!1;n.shift()}return!0}function Sa(e,n,t){Mr(e)&&t.delete(n)}function _c(){for(ul=!1;0<He.length;){var e=He[0];if(e.blockedOn!==null){e=kt(e.blockedOn),e!==null&&ya(e);break}for(var n=e.targetContainers;0<n.length;){var t=fl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t!==null){e.blockedOn=t;break}n.shift()}e.blockedOn===null&&He.shift()}Je!==null&&Mr(Je)&&(Je=null),Ke!==null&&Mr(Ke)&&(Ke=null),Ze!==null&&Mr(Ze)&&(Ze=null),It.forEach(Sa),Mt.forEach(Sa)}function Gt(e,n){e.blockedOn===n&&(e.blockedOn=null,ul||(ul=!0,te.unstable_scheduleCallback(te.unstable_NormalPriority,_c)))}function Ea(e){function n(o){return Gt(o,e)}if(0<He.length){Gt(He[0],e);for(var t=1;t<He.length;t++){var r=He[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Je!==null&&Gt(Je,e),Ke!==null&&Gt(Ke,e),Ze!==null&&Gt(Ze,e),It.forEach(n),Mt.forEach(n),t=0;t<At.length;t++)r=At[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(t=At[0],t.blockedOn===null);)Lc(t),t.blockedOn===null&&At.shift()}function Ar(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Vn={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},dl={},Ra={};Ue&&(Ra=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function Nr(e){if(dl[e])return dl[e];if(!Vn[e])return e;var n=Vn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ra)return dl[e]=n[t];return e}var ka=Nr("animationend"),Da=Nr("animationiteration"),Pa=Nr("animationstart"),Ia=Nr("transitionend"),Ma=new Map,pl=new Map,Fc=["abort","abort",ka,"animationEnd",Da,"animationIteration",Pa,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Ia,"transitionEnd","waiting","waiting"];function hl(e,n){for(var t=0;t<e.length;t+=2){var r=e[t],o=e[t+1];o="on"+(o[0].toUpperCase()+o.slice(1)),pl.set(r,n),Ma.set(r,o),yn(o,[r])}}var Wc=te.unstable_now;Wc();var V=8;function Yn(e){if((1&e)!=0)return V=15,1;if((2&e)!=0)return V=14,2;if((4&e)!=0)return V=13,4;var n=24&e;return n!==0?(V=12,n):(e&32)!=0?(V=11,32):(n=192&e,n!==0?(V=10,n):(e&256)!=0?(V=9,256):(n=3584&e,n!==0?(V=8,n):(e&4096)!=0?(V=7,4096):(n=4186112&e,n!==0?(V=6,n):(n=62914560&e,n!==0?(V=5,n):e&67108864?(V=4,67108864):(e&134217728)!=0?(V=3,134217728):(n=805306368&e,n!==0?(V=2,n):(1073741824&e)!=0?(V=1,1073741824):(V=8,e))))))}function Uc(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Oc(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(T(358,e))}}function Ht(e,n){var t=e.pendingLanes;if(t===0)return V=0;var r=0,o=0,l=e.expiredLanes,i=e.suspendedLanes,a=e.pingedLanes;if(l!==0)r=l,o=V=15;else if(l=t&134217727,l!==0){var s=l&~i;s!==0?(r=Yn(s),o=V):(a&=l,a!==0&&(r=Yn(a),o=V))}else l=t&~i,l!==0?(r=Yn(l),o=V):a!==0&&(r=Yn(a),o=V);if(r===0)return 0;if(r=31-Xe(r),r=t&((0>r?0:1<<r)<<1)-1,n!==0&&n!==r&&(n&i)==0){if(Yn(n),o<=V)return n;V=o}if(n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Xe(n),o=1<<t,r|=e[t],n&=~o;return r}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gr(e,n){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Qn(24&~n),e===0?Gr(10,n):e;case 10:return e=Qn(192&~n),e===0?Gr(8,n):e;case 8:return e=Qn(3584&~n),e===0&&(e=Qn(4186112&~n),e===0&&(e=512)),e;case 2:return n=Qn(805306368&~n),n===0&&(n=268435456),n}throw Error(T(358,e))}function Qn(e){return e&-e}function ml(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Hr(e,n,t){e.pendingLanes|=n;var r=n-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,n=31-Xe(n),e[n]=t}var Xe=Math.clz32?Math.clz32:Bc,jc=Math.log,zc=Math.LN2;function Bc(e){return e===0?32:31-(jc(e)/zc|0)|0}var Vc=te.unstable_UserBlockingPriority,Yc=te.unstable_runWithPriority,xr=!0;function Qc(e,n,t,r){wn||rl();var o=gl,l=wn;wn=!0;try{fa(o,e,n,t,r)}finally{(wn=l)||ll()}}function Jc(e,n,t,r){Yc(Vc,gl.bind(null,e,n,t,r))}function gl(e,n,t,r){if(xr){var o;if((o=(n&4)==0)&&0<He.length&&-1<wa.indexOf(e))e=cl(null,e,n,t,r),He.push(e);else{var l=fl(e,n,t,r);if(l===null)o&&Ca(e,r);else{if(o){if(-1<wa.indexOf(e)){e=cl(l,e,n,t,r),He.push(e);return}if(xc(l,e,n,t,r))return;Ca(e,r)}Na(e,n,r,null,t)}}}}function fl(e,n,t,r){var o=el(r);if(o=Sn(o),o!==null){var l=Cn(o);if(l===null)o=null;else{var i=l.tag;if(i===13){if(o=pa(l),o!==null)return o;o=null}else if(i===3){if(l.stateNode.hydrate)return l.tag===3?l.stateNode.containerInfo:null;o=null}else l!==o&&(o=null)}}return Na(e,n,r,o,t),null}var qe=null,yl=null,Lr=null;function Ga(){if(Lr)return Lr;var e,n=yl,t=n.length,r,o="value"in qe?qe.value:qe.textContent,l=o.length;for(e=0;e<t&&n[e]===o[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===o[l-r];r++);return Lr=o.slice(e,1<r?1-r:void 0)}function _r(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function Ha(){return!1}function Se(e){function n(t,r,o,l,i){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Fr:Ha,this.isPropagationStopped=Ha,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),n}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Se(Jn),xt=B({},Jn,{view:0,detail:0}),Kc=Se(xt),Tl,wl,Lt,Wr=B({},xt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lt&&(Lt&&e.type==="mousemove"?(Tl=e.screenX-Lt.screenX,wl=e.screenY-Lt.screenY):wl=Tl=0,Lt=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),xa=Se(Wr),Zc=B({},Wr,{dataTransfer:0}),Xc=Se(Zc),qc=B({},xt,{relatedTarget:0}),Sl=Se(qc),$c=B({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),bc=Se($c),ef=B({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nf=Se(ef),tf=B({},Jn,{data:0}),La=Se(tf),rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},of={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function af(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=lf[e])?!!n[e]:!1}function Cl(){return af}var sf=B({},xt,{key:function(e){if(e.key){var n=rf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?of[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uf=Se(sf),cf=B({},Wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_a=Se(cf),ff=B({},xt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),df=Se(ff),pf=B({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),hf=Se(pf),mf=B({},Wr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gf=Se(mf),yf=[9,13,27,32],El=Ue&&"CompositionEvent"in window,_t=null;Ue&&"documentMode"in document&&(_t=document.documentMode);var vf=Ue&&"TextEvent"in window&&!_t,Fa=Ue&&(!El||_t&&8<_t&&11>=_t),Wa=String.fromCharCode(32),Ua=!1;function Oa(e,n){switch(e){case"keyup":return yf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ba(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function Tf(e,n){switch(e){case"compositionend":return Ba(n);case"keypress":return n.which!==32?null:(Ua=!0,Wa);case"textInput":return e=n.data,e===Wa&&Ua?null:e;default:return null}}function wf(e,n){if(Kn)return e==="compositionend"||!El&&Oa(e,n)?(e=Ga(),Lr=yl=qe=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fa&&n.locale!=="ko"?null:n.data;default:return null}}var Cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ja(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cf[e.type]:n==="textarea"}function za(e,n,t,r){ua(r),n=Ur(n,"onChange"),0<n.length&&(t=new vl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ft=null,Wt=null;function Sf(e){Va(e,0)}function Or(e){var n=Zn(e);if(qi(n))return e}function Ef(e,n){if(e==="change")return n}var Ya=!1;Ue&&(Ue?(jr="oninput"in document,jr||(Rl=document.createElement("div"),Rl.setAttribute("oninput","return;"),jr=typeof Rl.oninput=="function"),Br=jr):Br=!1,Ya=Br&&(!document.documentMode||9<document.documentMode));var Br,jr,Rl;function Ja(){Ft&&(Ft.detachEvent("onpropertychange",Qa),Wt=Ft=null)}function Qa(e){if(e.propertyName==="value"&&Or(Wt)){var n=[];if(za(n,Wt,e,el(e)),e=Sf,wn)e(n);else{wn=!0;try{tl(e,n)}finally{wn=!1,ll()}}}}function Rf(e,n,t){e==="focusin"?(Ja(),Ft=n,Wt=t,Ft.attachEvent("onpropertychange",Qa)):e==="focusout"&&Ja()}function kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Or(Wt)}function Df(e,n){if(e==="click")return Or(n)}function Pf(e,n){if(e==="input"||e==="change")return Or(n)}function If(e,n){return e===n&&(e!==0||1/e==1/n)||e!==e&&n!==n}var Re=typeof Object.is=="function"?Object.is:If,Mf=Object.prototype.hasOwnProperty;function Ut(e,n){if(Re(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++)if(!Mf.call(n,t[r])||!Re(e[t[r]],n[t[r]]))return!1;return!0}function Ka(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Za(e,n){var t=Ka(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ka(t)}}function Xa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qa(){for(var e=window,n=Rr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch(r){t=!1}if(t)e=n.contentWindow;else break;n=Rr(e.document)}return n}function kl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Af=Ue&&"documentMode"in document&&11>=document.documentMode,Xn=null,Dl=null,Ot=null,Pl=!1;function $a(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pl||Xn==null||Xn!==Rr(r)||(r=Xn,"selectionStart"in r&&kl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ot&&Ut(Ot,r)||(Ot=r,r=Ur(Dl,"onSelect"),0<r.length&&(n=new vl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Xn)))}hl("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);hl("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);hl(Fc,2);for(var ba="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Il=0;Il<ba.length;Il++)pl.set(ba[Il],0);Wn("onMouseEnter",["mouseout","mouseover"]);Wn("onMouseLeave",["mouseout","mouseover"]);Wn("onPointerEnter",["pointerout","pointerover"]);Wn("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),es=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bt));function ns(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Gc(r,n,void 0,e),e.currentTarget=null}function Va(e,n){n=(n&4)!=0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;ns(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;ns(o,a,c),l=s}}}if(Ir)throw e=al,Ir=!1,al=null,e}function Q(e,n){var t=rs(n),r=e+"__bubble";t.has(r)||(ts(n,e,2,!1),t.add(r))}var os="_reactListening"+Math.random().toString(36).slice(2);function is(e){e[os]||(e[os]=!0,Vi.forEach(function(n){es.has(n)||ls(n,!1,e,null),ls(n,!0,e,null)}))}function ls(e,n,t,r){var o=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,l=t;if(e==="selectionchange"&&t.nodeType!==9&&(l=t.ownerDocument),r!==null&&!n&&es.has(e)){if(e!=="scroll")return;o|=2,l=r}var i=rs(l),a=e+"__"+(n?"capture":"bubble");i.has(a)||(n&&(o|=4),ts(l,e,o,n),i.add(a))}function ts(e,n,t,r){var o=pl.get(n);switch(o===void 0?2:o){case 0:o=Qc;break;case 1:o=Jc;break;default:o=gl}t=o.bind(null,n,t,e),o=void 0,!il||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Na(e,n,t,r,o){var l=r;if((n&1)==0&&(n&2)==0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Sn(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Ic(function(){var c=l,v=el(t),N=[];e:{var g=Ma.get(e);if(g!==void 0){var E=vl,G=e;switch(e){case"keypress":if(_r(t)===0)break e;case"keydown":case"keyup":E=uf;break;case"focusin":G="focus",E=Sl;break;case"focusout":G="blur",E=Sl;break;case"beforeblur":case"afterblur":E=Sl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Xc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=df;break;case ka:case Da:case Pa:E=bc;break;case Ia:E=hf;break;case"scroll":E=Kc;break;case"wheel":E=gf;break;case"copy":case"cut":case"paste":E=nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=_a}var P=(n&4)!=0,d=!P&&e==="scroll",u=P?g!==null?g+"Capture":null:g;P=[];for(var f=c,h;f!==null;){h=f;var m=h.stateNode;if(h.tag===5&&m!==null&&(h=m,u!==null&&(m=Dt(f,u),m!=null&&P.push(jt(f,m,h)))),d)break;f=f.return}0<P.length&&(g=new E(g,G,null,t,v),N.push({event:g,listeners:P}))}}if((n&7)==0){e:{if(g=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",g&&(n&16)==0&&(G=t.relatedTarget||t.fromElement)&&(Sn(G)||G[$n]))break e;if((E||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,E?(G=t.relatedTarget||t.toElement,E=c,G=G?Sn(G):null,G!==null&&(d=Cn(G),G!==d||G.tag!==5&&G.tag!==6)&&(G=null)):(E=null,G=c),E!==G)){if(P=xa,m="onMouseLeave",u="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(P=_a,m="onPointerLeave",u="onPointerEnter",f="pointer"),d=E==null?g:Zn(E),h=G==null?g:Zn(G),g=new P(m,f+"leave",E,t,v),g.target=d,g.relatedTarget=h,m=null,Sn(v)===c&&(P=new P(u,f+"enter",G,t,v),P.target=h,P.relatedTarget=d,m=P),d=m,E&&G)n:{for(P=E,u=G,f=0,h=P;h;h=qn(h))f++;for(h=0,m=u;m;m=qn(m))h++;for(;0<f-h;)P=qn(P),f--;for(;0<h-f;)u=qn(u),h--;for(;f--;){if(P===u||u!==null&&P===u.alternate)break n;P=qn(P),u=qn(u)}P=null}else P=null;E!==null&&as(N,g,E,P,!1),G!==null&&d!==null&&as(N,d,G,P,!0)}}e:{if(g=c?Zn(c):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var H=Ef;else if(ja(g))if(Ya)H=Pf;else{H=kf;var S=Rf}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(H=Df);if(H&&(H=H(e,c))){za(N,H,t,v);break e}S&&S(e,g,c),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&Qo(g,"number",g.value)}switch(S=c?Zn(c):window,e){case"focusin":(ja(S)||S.contentEditable==="true")&&(Xn=S,Dl=c,Ot=null);break;case"focusout":Ot=Dl=Xn=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,$a(N,t,v);break;case"selectionchange":if(Af)break;case"keydown":case"keyup":$a(N,t,v)}var M;if(El)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Kn?Oa(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Fa&&t.locale!=="ko"&&(Kn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Kn&&(M=Ga()):(qe=v,yl="value"in qe?qe.value:qe.textContent,Kn=!0)),S=Ur(c,L),0<S.length&&(L=new La(L,e,null,t,v),N.push({event:L,listeners:S}),M?L.data=M:(M=Ba(t),M!==null&&(L.data=M)))),(M=vf?Tf(e,t):wf(e,t))&&(c=Ur(c,"onBeforeInput"),0<c.length&&(v=new La("onBeforeInput","beforeinput",null,t,v),N.push({event:v,listeners:c}),v.data=M))}Va(N,n)})}function jt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ur(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Dt(e,t),l!=null&&r.unshift(jt(e,l,o)),l=Dt(e,n),l!=null&&r.push(jt(e,l,o))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function as(e,n,t,r,o){for(var l=n._reactName,i=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=Dt(t,l),s!=null&&i.unshift(jt(t,s,a))):o||(s=Dt(t,l),s!=null&&i.push(jt(t,s,a)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}function zr(){}var Ml=null,Al=null;function ss(e,n){switch(e){case"button":case"input":case"select":case"textarea":return!!n.autoFocus}return!1}function Nl(e,n){return e==="textarea"||e==="option"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var us=typeof setTimeout=="function"?setTimeout:void 0,Nf=typeof clearTimeout=="function"?clearTimeout:void 0;function Gl(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function bn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break}return e}function cs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Hl=0;function Gf(e){return{$$typeof:Oo,toString:e,valueOf:e}}var Vr=Math.random().toString(36).slice(2),$e="__reactFiber$"+Vr,Yr="__reactProps$"+Vr,$n="__reactContainer$"+Vr,fs="__reactEvents$"+Vr;function Sn(e){var n=e[$e];if(n)return n;for(var t=e.parentNode;t;){if(n=t[$n]||t[$e]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=cs(e);e!==null;){if(t=e[$e])return t;e=cs(e)}return n}e=t,t=e.parentNode}return null}function kt(e){return e=e[$e]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Dr(e){return e[Yr]||null}function rs(e){var n=e[fs];return n===void 0&&(n=e[fs]=new Set),n}var xl=[],et=-1;function be(e){return{current:e}}function J(e){0>et||(e.current=xl[et],xl[et]=null,et--)}function Z(e,n){et++,xl[et]=e.current,e.current=n}var en={},fe=be(en),ve=be(!1),En=en;function nt(e,n){var t=e.type.contextTypes;if(!t)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in t)o[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Te(e){return e=e.childContextTypes,e!=null}function Qr(){J(ve),J(fe)}function ds(e,n,t){if(fe.current!==en)throw Error(T(168));Z(fe,n),Z(ve,t)}function ps(e,n,t){var r=e.stateNode;if(e=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(T(108,Un(n)||"Unknown",o));return B({},t,r)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,En=fe.current,Z(fe,e),Z(ve,ve.current),!0}function hs(e,n,t){var r=e.stateNode;if(!r)throw Error(T(169));t?(e=ps(e,n,En),r.__reactInternalMemoizedMergedChildContext=e,J(ve),J(fe),Z(fe,e)):J(ve),Z(ve,t)}var Ll=null,Rn=null,Hf=te.unstable_runWithPriority,_l=te.unstable_scheduleCallback,Fl=te.unstable_cancelCallback,xf=te.unstable_shouldYield,ms=te.unstable_requestPaint,Wl=te.unstable_now,Lf=te.unstable_getCurrentPriorityLevel,Kr=te.unstable_ImmediatePriority,gs=te.unstable_UserBlockingPriority,ys=te.unstable_NormalPriority,vs=te.unstable_LowPriority,Ts=te.unstable_IdlePriority,Ul={},_f=ms!==void 0?ms:function(){},Oe=null,Zr=null,Ol=!1,ws=Wl(),de=1e4>ws?Wl:function(){return Wl()-ws};function tt(){switch(Lf()){case Kr:return 99;case gs:return 98;case ys:return 97;case vs:return 96;case Ts:return 95;default:throw Error(T(332))}}function Cs(e){switch(e){case 99:return Kr;case 98:return gs;case 97:return ys;case 96:return vs;case 95:return Ts;default:throw Error(T(332))}}function kn(e,n){return e=Cs(e),Hf(e,n)}function zt(e,n,t){return e=Cs(e),_l(e,n,t)}function xe(){if(Zr!==null){var e=Zr;Zr=null,Fl(e)}Ss()}function Ss(){if(!Ol&&Oe!==null){Ol=!0;var e=0;try{var n=Oe;kn(99,function(){for(;e<n.length;e++){var t=n[e];do t=t(!0);while(t!==null)}}),Oe=null}catch(t){throw Oe!==null&&(Oe=Oe.slice(e+1)),_l(Kr,xe),t}finally{Ol=!1}}}var Ff=vn.ReactCurrentBatchConfig;function Ne(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Xr=be(null),qr=null,rt=null,$r=null;function Bl(){$r=rt=qr=null}function jl(e){var n=Xr.current;J(Xr),e.type._context._currentValue=n}function Es(e,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)===n){if(t===null||(t.childLanes&n)===n)break;t.childLanes|=n}else e.childLanes|=n,t!==null&&(t.childLanes|=n);e=e.return}}function ot(e,n){qr=e,$r=rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!=0&&(Ge=!0),e.firstContext=null)}function ke(e,n){if($r!==e&&n!==!1&&n!==0)if((typeof n!="number"||n===1073741823)&&($r=e,n=1073741823),n={context:e,observedBits:n,next:null},rt===null){if(qr===null)throw Error(T(308));rt=n,qr.dependencies={lanes:0,firstContext:n,responders:null}}else rt=rt.next=n;return e._currentValue}var nn=!1;function zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Rs(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function rn(e,n){if(e=e.updateQueue,e!==null){e=e.shared;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}}function ks(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?o=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?o=l=n:l=l.next=n}else o=l=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Yt(e,n,t,r){var o=e.updateQueue;nn=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var v=e.alternate;if(v!==null){v=v.updateQueue;var N=v.lastBaseUpdate;N!==i&&(N===null?v.firstBaseUpdate=c:N.next=c,v.lastBaseUpdate=s)}}if(l!==null){N=o.baseState,i=0,v=c=s=null;do{a=l.lane;var g=l.eventTime;if((r&a)===a){v!==null&&(v=v.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=e,G=l;switch(a=n,g=t,G.tag){case 1:if(E=G.payload,typeof E=="function"){N=E.call(g,N,a);break e}N=E;break e;case 3:E.flags=E.flags&-4097|64;case 0:if(E=G.payload,a=typeof E=="function"?E.call(g,N,a):E,a==null)break e;N=B({},N,a);break e;case 2:nn=!0}}l.callback!==null&&(e.flags|=32,a=o.effects,a===null?o.effects=[l]:a.push(l))}else g={eventTime:g,lane:a,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(c=v=g,s=N):v=v.next=g,i|=a;if(l=l.next,l===null){if(a=o.shared.pending,a===null)break;l=a.next,a.next=null,o.lastBaseUpdate=a,o.shared.pending=null}}while(1);v===null&&(s=N),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=v,Vt|=i,e.lanes=i,e.memoizedState=N}}function Ds(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var Ps=new O.Component().refs;function br(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var eo={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ee(),o=on(e),l=tn(r,o);l.payload=n,t!=null&&(l.callback=t),rn(e,l),ln(e,o,r)},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ee(),o=on(e),l=tn(r,o);l.tag=1,l.payload=n,t!=null&&(l.callback=t),rn(e,l),ln(e,o,r)},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ee(),r=on(e),o=tn(t,r);o.tag=2,n!=null&&(o.callback=n),rn(e,o),ln(e,r,t)}};function Is(e,n,t,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):n.prototype&&n.prototype.isPureReactComponent?!Ut(t,r)||!Ut(o,l):!0}function Ms(e,n,t){var r=!1,o=en,l=n.contextType;return typeof l=="object"&&l!==null?l=ke(l):(o=Te(n)?En:fe.current,r=n.contextTypes,l=(r=r!=null)?nt(e,o):en),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=eo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),n}function As(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&eo.enqueueReplaceState(n,n.state,null)}function Vl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs=Ps,zl(e);var l=n.contextType;typeof l=="object"&&l!==null?o.context=ke(l):(l=Te(n)?En:fe.current,o.context=nt(e,l)),Yt(e,t,o,r),o.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(br(e,n,l,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&eo.enqueueReplaceState(o,o.state,null),Yt(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4)}var no=Array.isArray;function Qt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(T(309));var r=t.stateNode}if(!r)throw Error(T(147,e));var o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var i=r.refs;i===Ps&&(i=r.refs={}),l===null?delete i[o]:i[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(T(284));if(!t._owner)throw Error(T(290,e))}return e}function to(e,n){if(e.type!=="textarea")throw Error(T(31,Object.prototype.toString.call(n)==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":n))}function Ns(e){function n(d,u){if(e){var f=d.lastEffect;f!==null?(f.nextEffect=u,d.lastEffect=u):d.firstEffect=d.lastEffect=u,u.nextEffect=null,u.flags=8}}function t(d,u){if(!e)return null;for(;u!==null;)n(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=an(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags=2,u):f):(d.flags=2,u)):u}function i(d){return e&&d.alternate===null&&(d.flags=2),d}function a(d,u,f,h){return u===null||u.tag!==6?(u=Yl(f,d.mode,h),u.return=d,u):(u=o(u,f),u.return=d,u)}function s(d,u,f,h){return u!==null&&u.elementType===f.type?(h=o(u,f.props),h.ref=Qt(d,u,f),h.return=d,h):(h=ro(f.type,f.key,f.props,null,d.mode,h),h.ref=Qt(d,u,f),h.return=d,h)}function c(d,u,f,h){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Ql(f,d.mode,h),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function v(d,u,f,h,m){return u===null||u.tag!==7?(u=lt(f,d.mode,h,m),u.return=d,u):(u=o(u,f),u.return=d,u)}function N(d,u,f){if(typeof u=="string"||typeof u=="number")return u=Yl(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case vt:return f=ro(u.type,u.key,u.props,null,d.mode,f),f.ref=Qt(d,null,u),f.return=d,f;case Tn:return u=Ql(u,d.mode,f),u.return=d,u}if(no(u)||Ct(u))return u=lt(u,d.mode,f,null),u.return=d,u;to(d,u)}return null}function g(d,u,f,h){var m=u!==null?u.key:null;if(typeof f=="string"||typeof f=="number")return m!==null?null:a(d,u,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vt:return f.key===m?f.type===Ye?v(d,u,f.props.children,h,m):s(d,u,f,h):null;case Tn:return f.key===m?c(d,u,f,h):null}if(no(f)||Ct(f))return m!==null?null:v(d,u,f,h,null);to(d,f)}return null}function E(d,u,f,h,m){if(typeof h=="string"||typeof h=="number")return d=d.get(f)||null,a(u,d,""+h,m);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vt:return d=d.get(h.key===null?f:h.key)||null,h.type===Ye?v(u,d,h.props.children,m,h.key):s(u,d,h,m);case Tn:return d=d.get(h.key===null?f:h.key)||null,c(u,d,h,m)}if(no(h)||Ct(h))return d=d.get(f)||null,v(u,d,h,m,null);to(u,h)}return null}function G(d,u,f,h){for(var m=null,H=null,S=u,M=u=0,L=null;S!==null&&M<f.length;M++){S.index>M?(L=S,S=null):L=S.sibling;var x=g(d,S,f[M],h);if(x===null){S===null&&(S=L);break}e&&S&&x.alternate===null&&n(d,S),u=l(x,u,M),H===null?m=x:H.sibling=x,H=x,S=L}if(M===f.length)return t(d,S),m;if(S===null){for(;M<f.length;M++)S=N(d,f[M],h),S!==null&&(u=l(S,u,M),H===null?m=S:H.sibling=S,H=S);return m}for(S=r(d,S);M<f.length;M++)L=E(S,d,M,f[M],h),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?M:L.key),u=l(L,u,M),H===null?m=L:H.sibling=L,H=L);return e&&S.forEach(function(K){return n(d,K)}),m}function P(d,u,f,h){var m=Ct(f);if(typeof m!="function")throw Error(T(150));if(f=m.call(f),f==null)throw Error(T(151));for(var H=m=null,S=u,M=u=0,L=null,x=f.next();S!==null&&!x.done;M++,x=f.next()){S.index>M?(L=S,S=null):L=S.sibling;var K=g(d,S,x.value,h);if(K===null){S===null&&(S=L);break}e&&S&&K.alternate===null&&n(d,S),u=l(K,u,M),H===null?m=K:H.sibling=K,H=K,S=L}if(x.done)return t(d,S),m;if(S===null){for(;!x.done;M++,x=f.next())x=N(d,x.value,h),x!==null&&(u=l(x,u,M),H===null?m=x:H.sibling=x,H=x);return m}for(S=r(d,S);!x.done;M++,x=f.next())x=E(S,d,M,x.value,h),x!==null&&(e&&x.alternate!==null&&S.delete(x.key===null?M:x.key),u=l(x,u,M),H===null?m=x:H.sibling=x,H=x);return e&&S.forEach(function(ye){return n(d,ye)}),m}return function(d,u,f,h){var m=typeof f=="object"&&f!==null&&f.type===Ye&&f.key===null;m&&(f=f.props.children);var H=typeof f=="object"&&f!==null;if(H)switch(f.$$typeof){case vt:e:{for(H=f.key,m=u;m!==null;){if(m.key===H){switch(m.tag){case 7:if(f.type===Ye){t(d,m.sibling),u=o(m,f.props.children),u.return=d,d=u;break e}break;default:if(m.elementType===f.type){t(d,m.sibling),u=o(m,f.props),u.ref=Qt(d,m,f),u.return=d,d=u;break e}}t(d,m);break}else n(d,m);m=m.sibling}f.type===Ye?(u=lt(f.props.children,d.mode,h,f.key),u.return=d,d=u):(h=ro(f.type,f.key,f.props,null,d.mode,h),h.ref=Qt(d,u,f),h.return=d,d=h)}return i(d);case Tn:e:{for(m=f.key;u!==null;){if(u.key===m)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{t(d,u);break}else n(d,u);u=u.sibling}u=Ql(f,d.mode,h),u.return=d,d=u}return i(d)}if(typeof f=="string"||typeof f=="number")return f=""+f,u!==null&&u.tag===6?(t(d,u.sibling),u=o(u,f),u.return=d,d=u):(t(d,u),u=Yl(f,d.mode,h),u.return=d,d=u),i(d);if(no(f))return G(d,u,f,h);if(Ct(f))return P(d,u,f,h);if(H&&to(d,f),typeof f=="undefined"&&!m)switch(d.tag){case 1:case 22:case 0:case 11:case 15:throw Error(T(152,Un(d.type)||"Component"))}return t(d,u)}}var oo=Ns(!0),Gs=Ns(!1),Jt={},Le=be(Jt),Kt=be(Jt),Zt=be(Jt);function Dn(e){if(e===Jt)throw Error(T(174));return e}function Jl(e,n){switch(Z(Zt,n),Z(Kt,e),Z(Le,Jt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:qo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=qo(n,e)}J(Le),Z(Le,n)}function it(){J(Le),J(Kt),J(Zt)}function Hs(e){Dn(Zt.current);var n=Dn(Le.current),t=qo(n,e.type);n!==t&&(Z(Kt,e),Z(Le,t))}function Kl(e){Kt.current===e&&(J(Le),J(Kt))}var X=be(0);function lo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&64)!=0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Be=null,sn=null,_e=!1;function xs(e,n){var t=De(5,null,null,0);t.elementType="DELETED",t.type="DELETED",t.stateNode=n,t.return=e,t.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=t,e.lastEffect=t):e.firstEffect=e.lastEffect=t}function Ls(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,!0):!1;case 13:return!1;default:return!1}}function Zl(e){if(_e){var n=sn;if(n){var t=n;if(!Ls(e,n)){if(n=bn(t.nextSibling),!n||!Ls(e,n)){e.flags=e.flags&-1025|2,_e=!1,Be=e;return}xs(Be,t)}Be=e,sn=bn(n.firstChild)}else e.flags=e.flags&-1025|2,_e=!1,Be=e}}function _s(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function io(e){if(e!==Be)return!1;if(!_e)return _s(e),_e=!0,!1;var n=e.type;if(e.tag!==5||n!=="head"&&n!=="body"&&!Nl(n,e.memoizedProps))for(n=sn;n;)xs(e,n),n=bn(n.nextSibling);if(_s(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){sn=bn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}sn=null}}else sn=Be?bn(e.stateNode.nextSibling):null;return!0}function Xl(){sn=Be=null,_e=!1}var at=[];function ql(){for(var e=0;e<at.length;e++)at[e]._workInProgressVersionPrimary=null;at.length=0}var Xt=vn.ReactCurrentDispatcher,Pe=vn.ReactCurrentBatchConfig,qt=0,q=null,pe=null,se=null,ao=!1,$t=!1;function we(){throw Error(T(321))}function $l(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Re(e[t],n[t]))return!1;return!0}function bl(e,n,t,r,o,l){if(qt=l,q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Xt.current=e===null||e.memoizedState===null?Wf:Uf,e=t(r,o),$t){l=0;do{if($t=!1,!(25>l))throw Error(T(301));l+=1,se=pe=null,n.updateQueue=null,Xt.current=Of,e=t(r,o)}while($t)}if(Xt.current=so,n=pe!==null&&pe.next!==null,qt=0,se=pe=q=null,ao=!1,n)throw Error(T(300));return e}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?q.memoizedState=se=e:se=se.next=e,se}function In(){if(pe===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=se===null?q.memoizedState:se.next;if(n!==null)se=n,pe=e;else{if(e===null)throw Error(T(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},se===null?q.memoizedState=se=e:se=se.next=e}return se}function Fe(e,n){return typeof n=="function"?n(e):n}function bt(e){var n=In(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=pe,o=r.baseQueue,l=t.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,t.pending=null}if(o!==null){o=o.next,r=r.baseState;var a=i=l=null,s=o;do{var c=s.lane;if((qt&c)===c)a!==null&&(a=a.next={lane:0,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),r=s.eagerReducer===e?s.eagerState:e(r,s.action);else{var v={lane:c,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};a===null?(i=a=v,l=r):a=a.next=v,q.lanes|=c,Vt|=c}s=s.next}while(s!==null&&s!==o);a===null?l=r:a.next=i,Re(r,n.memoizedState)||(Ge=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=a,t.lastRenderedState=r}return[n.memoizedState,t.dispatch]}function er(e){var n=In(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,l=n.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Re(l,n.memoizedState)||(Ge=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Fs(e,n,t){var r=n._getVersion;r=r(n._source);var o=n._workInProgressVersionPrimary;if(o!==null?e=o===r:(e=e.mutableReadLanes,(e=(qt&e)===e)&&(n._workInProgressVersionPrimary=r,at.push(n))),e)return t(n._source);throw at.push(n),Error(T(350))}function Ws(e,n,t,r){var o=ge;if(o===null)throw Error(T(349));var l=n._getVersion,i=l(n._source),a=Xt.current,s=a.useState(function(){return Fs(o,n,t)}),c=s[1],v=s[0];s=se;var N=e.memoizedState,g=N.refs,E=g.getSnapshot,G=N.source;N=N.subscribe;var P=q;return e.memoizedState={refs:g,source:n,subscribe:r},a.useEffect(function(){g.getSnapshot=t,g.setSnapshot=c;var d=l(n._source);if(!Re(i,d)){d=t(n._source),Re(v,d)||(c(d),d=on(P),o.mutableReadLanes|=d&o.pendingLanes),d=o.mutableReadLanes,o.entangledLanes|=d;for(var u=o.entanglements,f=d;0<f;){var h=31-Xe(f),m=1<<h;u[h]|=d,f&=~m}}},[t,n,r]),a.useEffect(function(){return r(n._source,function(){var d=g.getSnapshot,u=g.setSnapshot;try{u(d(n._source));var f=on(P);o.mutableReadLanes|=f&o.pendingLanes}catch(h){u(function(){throw h})}})},[n,r]),Re(E,t)&&Re(G,n)&&Re(N,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Fe,lastRenderedState:v},e.dispatch=c=ei.bind(null,q,e),s.queue=e,s.baseQueue=null,v=Fs(o,n,t),s.memoizedState=s.baseState=v),v}function Us(e,n,t){var r=In();return Ws(r,e,n,t)}function nr(e){var n=Pn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e=n.queue={pending:null,dispatch:null,lastRenderedReducer:Fe,lastRenderedState:e},e=e.dispatch=ei.bind(null,q,e),[n.memoizedState,e]}function uo(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=q.updateQueue,n===null?(n={lastEffect:null},q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Os(e){var n=Pn();return e={current:e},n.memoizedState=e}function co(){return In().memoizedState}function ni(e,n,t,r){var o=Pn();q.flags|=e,o.memoizedState=uo(1|n,t,void 0,r===void 0?null:r)}function ti(e,n,t,r){var o=In();r=r===void 0?null:r;var l=void 0;if(pe!==null){var i=pe.memoizedState;if(l=i.destroy,r!==null&&$l(r,i.deps)){uo(n,t,l,r);return}}q.flags|=e,o.memoizedState=uo(1|n,t,l,r)}function Bs(e,n){return ni(516,4,e,n)}function fo(e,n){return ti(516,4,e,n)}function js(e,n){return ti(4,2,e,n)}function zs(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vs(e,n,t){return t=t!=null?t.concat([e]):null,ti(4,2,zs.bind(null,n,e),t)}function ri(){}function Ys(e,n){var t=In();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&$l(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Qs(e,n){var t=In();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&$l(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Bf(e,n){var t=tt();kn(98>t?98:t,function(){e(!0)}),kn(97<t?97:t,function(){var r=Pe.transition;Pe.transition=1;try{e(!1),n()}finally{Pe.transition=r}})}function ei(e,n,t){var r=Ee(),o=on(e),l={lane:o,action:t,eagerReducer:null,eagerState:null,next:null},i=n.pending;if(i===null?l.next=l:(l.next=i.next,i.next=l),n.pending=l,i=e.alternate,e===q||i!==null&&i===q)$t=ao=!0;else{if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,s=i(a,t);if(l.eagerReducer=i,l.eagerState=s,Re(s,a))return}catch(c){}finally{}ln(e,o,r)}}var so={readContext:ke,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useOpaqueIdentifier:we,unstable_isNewReconciler:!1},Wf={readContext:ke,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:ke,useEffect:Bs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ni(4,2,zs.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ni(4,2,e,n)},useMemo:function(e,n){var t=Pn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Pn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},e=e.dispatch=ei.bind(null,q,e),[r.memoizedState,e]},useRef:Os,useState:nr,useDebugValue:ri,useDeferredValue:function(e){var n=nr(e),t=n[0],r=n[1];return Bs(function(){var o=Pe.transition;Pe.transition=1;try{r(e)}finally{Pe.transition=o}},[e]),t},useTransition:function(){var e=nr(!1),n=e[0];return e=Bf.bind(null,e[1]),Os(e),[e,n]},useMutableSource:function(e,n,t){var r=Pn();return r.memoizedState={refs:{getSnapshot:n,setSnapshot:null},source:e,subscribe:t},Ws(r,e,n,t)},useOpaqueIdentifier:function(){if(_e){var e=!1,n=Gf(function(){throw e||(e=!0,t("r:"+(Hl++).toString(36))),Error(T(355))}),t=nr(n)[1];return(q.mode&2)==0&&(q.flags|=516,uo(5,function(){t("r:"+(Hl++).toString(36))},void 0,null)),n}return n="r:"+(Hl++).toString(36),nr(n),n},unstable_isNewReconciler:!1},Uf={readContext:ke,useCallback:Ys,useContext:ke,useEffect:fo,useImperativeHandle:Vs,useLayoutEffect:js,useMemo:Qs,useReducer:bt,useRef:co,useState:function(){return bt(Fe)},useDebugValue:ri,useDeferredValue:function(e){var n=bt(Fe),t=n[0],r=n[1];return fo(function(){var o=Pe.transition;Pe.transition=1;try{r(e)}finally{Pe.transition=o}},[e]),t},useTransition:function(){var e=bt(Fe)[0];return[co().current,e]},useMutableSource:Us,useOpaqueIdentifier:function(){return bt(Fe)[0]},unstable_isNewReconciler:!1},Of={readContext:ke,useCallback:Ys,useContext:ke,useEffect:fo,useImperativeHandle:Vs,useLayoutEffect:js,useMemo:Qs,useReducer:er,useRef:co,useState:function(){return er(Fe)},useDebugValue:ri,useDeferredValue:function(e){var n=er(Fe),t=n[0],r=n[1];return fo(function(){var o=Pe.transition;Pe.transition=1;try{r(e)}finally{Pe.transition=o}},[e]),t},useTransition:function(){var e=er(Fe)[0];return[co().current,e]},useMutableSource:Us,useOpaqueIdentifier:function(){return er(Fe)[0]},unstable_isNewReconciler:!1},jf=vn.ReactCurrentOwner,Ge=!1;function Ce(e,n,t,r){n.child=e===null?Gs(n,null,t,r):oo(n,e.child,t,r)}function Js(e,n,t,r,o){t=t.render;var l=n.ref;return ot(n,o),r=bl(e,n,t,r,l,o),e!==null&&!Ge?(n.updateQueue=e.updateQueue,n.flags&=-517,e.lanes&=~o,je(e,n,o)):(n.flags|=1,Ce(e,n,r,o),n.child)}function Zs(e,n,t,r,o,l){if(e===null){var i=t.type;return typeof i=="function"&&!oi(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Ks(e,n,i,r,o,l)):(e=ro(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}return i=e.child,(o&l)==0&&(o=i.memoizedProps,t=t.compare,t=t!==null?t:Ut,t(o,r)&&e.ref===n.ref)?je(e,n,l):(n.flags|=1,e=an(i,r),e.ref=n.ref,e.return=n,n.child=e)}function Ks(e,n,t,r,o,l){if(e!==null&&Ut(e.memoizedProps,r)&&e.ref===n.ref)if(Ge=!1,(l&o)!=0)(e.flags&16384)!=0&&(Ge=!0);else return n.lanes=e.lanes,je(e,n,l);return li(e,n,t,r,l)}function ii(e,n,t){var r=n.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((n.mode&4)==0)n.memoizedState={baseLanes:0},po(n,t);else if((t&1073741824)!=0)n.memoizedState={baseLanes:0},po(n,l!==null?l.baseLanes:t);else return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e},po(n,e),null;else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,po(n,r);return Ce(e,n,o,t),n.child}function Xs(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=128)}function li(e,n,t,r,o){var l=Te(t)?En:fe.current;return l=nt(n,l),ot(n,o),t=bl(e,n,t,r,l,o),e!==null&&!Ge?(n.updateQueue=e.updateQueue,n.flags&=-517,e.lanes&=~o,je(e,n,o)):(n.flags|=1,Ce(e,n,t,o),n.child)}function qs(e,n,t,r,o){if(Te(t)){var l=!0;Jr(n)}else l=!1;if(ot(n,o),n.stateNode===null)e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),Ms(n,t,r),Vl(n,t,r,o),r=!0;else if(e===null){var i=n.stateNode,a=n.memoizedProps;i.props=a;var s=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=ke(c):(c=Te(t)?En:fe.current,c=nt(n,c));var v=t.getDerivedStateFromProps,N=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";N||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&As(n,i,r,c),nn=!1;var g=n.memoizedState;i.state=g,Yt(n,r,i,o),s=n.memoizedState,a!==r||g!==s||ve.current||nn?(typeof v=="function"&&(br(n,t,v,r),s=n.memoizedState),(a=nn||Is(n,t,a,r,g,s,c))?(N||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4)):(typeof i.componentDidMount=="function"&&(n.flags|=4),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(n.flags|=4),r=!1)}else{i=n.stateNode,Rs(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Ne(n.type,a),i.props=c,N=n.pendingProps,g=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=ke(s):(s=Te(t)?En:fe.current,s=nt(n,s));var E=t.getDerivedStateFromProps;(v=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==N||g!==s)&&As(n,i,r,s),nn=!1,g=n.memoizedState,i.state=g,Yt(n,r,i,o);var G=n.memoizedState;a!==N||g!==G||ve.current||nn?(typeof E=="function"&&(br(n,t,E,r),G=n.memoizedState),(c=nn||Is(n,t,c,r,g,G,s))?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,G,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,G,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=256)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=256),n.memoizedProps=r,n.memoizedState=G),i.props=r,i.state=G,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(n.flags|=256),r=!1)}return ai(e,n,t,r,l,o)}function ai(e,n,t,r,o,l){Xs(e,n);var i=(n.flags&64)!=0;if(!r&&!i)return o&&hs(n,t,!1),je(e,n,l);r=n.stateNode,jf.current=n;var a=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=oo(n,e.child,null,l),n.child=oo(n,null,a,l)):Ce(e,n,a,l),n.memoizedState=r.state,o&&hs(n,t,!0),n.child}function $s(e){var n=e.stateNode;n.pendingContext?ds(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ds(e,n.context,!1),Jl(e,n.containerInfo)}var ho={dehydrated:null,retryLane:0};function tu(e,n,t){var r=n.pendingProps,o=X.current,l=!1,i;return(i=(n.flags&64)!=0)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!=0),i?(l=!0,n.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(o|=1),Z(X,o&1),e===null?(r.fallback!==void 0&&Zl(n),e=r.children,o=r.fallback,l?(e=bs(n,e,o,t),n.child.memoizedState={baseLanes:t},n.memoizedState=ho,e):typeof r.unstable_expectedLoadTime=="number"?(e=bs(n,e,o,t),n.child.memoizedState={baseLanes:t},n.memoizedState=ho,n.lanes=33554432,e):(t=si({mode:"visible",children:e},n.mode,t,null),t.return=n,n.child=t)):e.memoizedState!==null?l?(r=nu(e,n,r.children,r.fallback,t),l=n.child,o=e.child.memoizedState,l.memoizedState=o===null?{baseLanes:t}:{baseLanes:o.baseLanes|t},l.childLanes=e.childLanes&~t,n.memoizedState=ho,r):(t=eu(e,n,r.children,t),n.memoizedState=null,t):l?(r=nu(e,n,r.children,r.fallback,t),l=n.child,o=e.child.memoizedState,l.memoizedState=o===null?{baseLanes:t}:{baseLanes:o.baseLanes|t},l.childLanes=e.childLanes&~t,n.memoizedState=ho,r):(t=eu(e,n,r.children,t),n.memoizedState=null,t)}function bs(e,n,t,r){var o=e.mode,l=e.child;return n={mode:"hidden",children:n},(o&2)==0&&l!==null?(l.childLanes=0,l.pendingProps=n):l=si(n,o,0,null),t=lt(t,o,r,null),l.return=e,t.return=e,l.sibling=t,e.child=l,t}function eu(e,n,t,r){var o=e.child;return e=o.sibling,t=an(o,{mode:"visible",children:t}),(n.mode&2)==0&&(t.lanes=r),t.return=n,t.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,n.firstEffect=n.lastEffect=e),n.child=t}function nu(e,n,t,r,o){var l=n.mode,i=e.child;e=i.sibling;var a={mode:"hidden",children:t};return(l&2)==0&&n.child!==i?(t=n.child,t.childLanes=0,t.pendingProps=a,i=t.lastEffect,i!==null?(n.firstEffect=t.firstEffect,n.lastEffect=i,i.nextEffect=null):n.firstEffect=n.lastEffect=null):t=an(i,a),e!==null?r=an(e,r):(r=lt(r,l,o,null),r.flags|=2),r.return=n,t.return=n,t.sibling=r,n.child=t,r}function ru(e,n){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),Es(e.return,n)}function ui(e,n,t,r,o,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o,lastEffect:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o,i.lastEffect=l)}function ou(e,n,t){var r=n.pendingProps,o=r.revealOrder,l=r.tail;if(Ce(e,n,r.children,t),r=X.current,(r&2)!=0)r=r&1|2,n.flags|=64;else{if(e!==null&&(e.flags&64)!=0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ru(e,t);else if(e.tag===19)ru(e,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(X,r),(n.mode&2)==0)n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&lo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ui(n,!1,o,t,l,n.lastEffect);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&lo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ui(n,!0,t,null,l,n.lastEffect);break;case"together":ui(n,!1,null,null,void 0,n.lastEffect);break;default:n.memoizedState=null}return n.child}function je(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Vt|=n.lanes,(t&n.childLanes)!=0){if(e!==null&&n.child!==e.child)throw Error(T(153));if(n.child!==null){for(e=n.child,t=an(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=an(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}return null}var lu,ci,iu,au;lu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ci=function(){};iu=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Dn(Le.current);var l=null;switch(t){case"input":o=Yo(e,o),r=Yo(e,r),l=[];break;case"option":o=Ko(e,o),r=Ko(e,r),l=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),l=[];break;case"textarea":o=Zo(e,o),r=Zo(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zr)}$o(t,r);var i;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yt.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(l||(l=[]),l.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yt.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Q("scroll",e),l||a===s||(l=[])):typeof s=="object"&&s!==null&&s.$$typeof===Oo?s.toString():(l=l||[]).push(c,s))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};au=function(e,n,t,r){t!==r&&(n.flags|=4)};function tr(e,n){if(!_e)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function zf(e,n,t){var r=n.pendingProps;switch(n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Te(n.type)&&Qr(),null;case 3:return it(),J(ve),J(fe),ql(),r=n.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(n)?n.flags|=4:r.hydrate||(n.flags|=256)),ci(n),null;case 5:Kl(n);var o=Dn(Zt.current);if(t=n.type,e!==null&&n.stateNode!=null)iu(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=128);else{if(!r){if(n.stateNode===null)throw Error(T(166));return null}if(e=Dn(Le.current),io(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[$e]=n,r[Yr]=l,t){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(e=0;e<Bt.length;e++)Q(Bt[e],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":$i(r,l),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Q("invalid",r);break;case"textarea":na(r,l),Q("invalid",r)}$o(t,l),e=null;for(var i in l)l.hasOwnProperty(i)&&(o=l[i],i==="children"?typeof o=="string"?r.textContent!==o&&(e=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(e=["children",""+o]):yt.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&Q("scroll",r));switch(t){case"input":Er(r),ea(r,l,!0);break;case"textarea":Er(r),ra(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=zr)}r=e,n.updateQueue=r,r!==null&&(n.flags|=4)}else{switch(i=o.nodeType===9?o:o.ownerDocument,e===Xo.html&&(e=oa(t)),e===Xo.html?t==="script"?(e=i.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[$e]=n,e[Yr]=r,lu(e,n,!1,!1),n.stateNode=e,i=bo(t,r),t){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Bt.length;o++)Q(Bt[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":$i(e,r),o=Yo(e,r),Q("invalid",e);break;case"option":o=Ko(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),Q("invalid",e);break;case"textarea":na(e,r),o=Zo(e,r),Q("invalid",e);break;default:o=r}$o(t,o);var a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?aa(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&la(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Et(e,s):typeof s=="number"&&Et(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(yt.hasOwnProperty(l)?s!=null&&l==="onScroll"&&Q("scroll",e):s!=null&&xo(e,l,s,i))}switch(t){case"input":Er(e),ea(e,r,!1);break;case"textarea":Er(e),ra(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qe(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?On(e,!!r.multiple,l,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=zr)}ss(t,r)&&(n.flags|=4)}n.ref!==null&&(n.flags|=128)}return null;case 6:if(e&&n.stateNode!=null)au(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(T(166));t=Dn(Zt.current),Dn(Le.current),io(n)?(r=n.stateNode,t=n.memoizedProps,r[$e]=n,r.nodeValue!==t&&(n.flags|=4)):(r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[$e]=n,n.stateNode=r)}return null;case 13:return J(X),r=n.memoizedState,(n.flags&64)!=0?(n.lanes=t,n):(r=r!==null,t=!1,e===null?n.memoizedProps.fallback!==void 0&&io(n):t=e.memoizedState!==null,r&&!t&&(n.mode&2)!=0&&(e===null&&n.memoizedProps.unstable_avoidThisFallback!==!0||(X.current&1)!=0?ue===0&&(ue=3):((ue===0||ue===3)&&(ue=4),ge===null||(Vt&134217727)==0&&(st&134217727)==0||ut(ge,he))),(r||t)&&(n.flags|=4),null);case 4:return it(),ci(n),e===null&&is(n.stateNode.containerInfo),null;case 10:return jl(n),null;case 17:return Te(n.type)&&Qr(),null;case 19:if(J(X),r=n.memoizedState,r===null)return null;if(l=(n.flags&64)!=0,i=r.rendering,i===null)if(l)tr(r,!1);else{if(ue!==0||e!==null&&(e.flags&64)!=0)for(e=n.child;e!==null;){if(i=lo(e),i!==null){for(n.flags|=64,tr(r,!1),l=i.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),r.lastEffect===null&&(n.firstEffect=null),n.lastEffect=r.lastEffect,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=2,l.nextEffect=null,l.firstEffect=null,l.lastEffect=null,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Z(X,X.current&1|2),n.child}e=e.sibling}r.tail!==null&&de()>fi&&(n.flags|=64,l=!0,tr(r,!1),n.lanes=33554432)}else{if(!l)if(e=lo(i),e!==null){if(n.flags|=64,l=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),tr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!_e)return n=n.lastEffect=r.lastEffect,n!==null&&(n.nextEffect=null),null}else 2*de()-r.renderingStartTime>fi&&t!==1073741824&&(n.flags|=64,l=!0,tr(r,!1),n.lanes=33554432);r.isBackwards?(i.sibling=n.child,n.child=i):(t=r.last,t!==null?t.sibling=i:n.child=i,r.last=i)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.lastEffect=n.lastEffect,r.renderingStartTime=de(),t.sibling=null,n=X.current,Z(X,l?n&1|2:n&1),t):null;case 23:case 24:return di(),e!==null&&e.memoizedState!==null!=(n.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(n.flags|=4),null}throw Error(T(156,n.tag))}function Vf(e){switch(e.tag){case 1:Te(e.type)&&Qr();var n=e.flags;return n&4096?(e.flags=n&-4097|64,e):null;case 3:if(it(),J(ve),J(fe),ql(),n=e.flags,(n&64)!=0)throw Error(T(285));return e.flags=n&-4097|64,e;case 5:return Kl(e),null;case 13:return J(X),n=e.flags,n&4096?(e.flags=n&-4097|64,e):null;case 19:return J(X),null;case 4:return it(),null;case 10:return jl(e),null;case 23:case 24:return di(),null;default:return null}}function pi(e,n){try{var t="",r=n;do t+=Ec(r),r=r.return;while(r);var o=t}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:o}}function hi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Yf=typeof WeakMap=="function"?WeakMap:Map;function su(e,n,t){t=tn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){mo||(mo=!0,mi=r),hi(e,n)},t}function uu(e,n,t){t=tn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return hi(e,n),r(o)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){typeof r!="function"&&(We===null?We=new Set([this]):We.add(this),hi(e,n));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}var Qf=typeof WeakSet=="function"?WeakSet:Set;function cu(e){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){un(e,t)}else n.current=null}function Jf(e,n){switch(n.tag){case 0:case 11:case 15:case 22:return;case 1:if(n.flags&256&&e!==null){var t=e.memoizedProps,r=e.memoizedState;e=n.stateNode,n=e.getSnapshotBeforeUpdate(n.elementType===n.type?t:Ne(n.type,t),r),e.__reactInternalSnapshotBeforeUpdate=n}return;case 3:n.flags&256&&Gl(n.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(T(163))}function Zf(e,n,t){switch(t.tag){case 0:case 11:case 15:case 22:if(n=t.updateQueue,n=n!==null?n.lastEffect:null,n!==null){e=n=n.next;do{if((e.tag&3)==3){var r=e.create;e.destroy=r()}e=e.next}while(e!==n)}if(n=t.updateQueue,n=n!==null?n.lastEffect:null,n!==null){e=n=n.next;do{var o=e;r=o.next,o=o.tag,(o&4)!=0&&(o&1)!=0&&(fu(t,e),Kf(t,e)),e=r}while(e!==n)}return;case 1:e=t.stateNode,t.flags&4&&(n===null?e.componentDidMount():(r=t.elementType===t.type?n.memoizedProps:Ne(t.type,n.memoizedProps),e.componentDidUpdate(r,n.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),n=t.updateQueue,n!==null&&Ds(t,n,e);return;case 3:if(n=t.updateQueue,n!==null){if(e=null,t.child!==null)switch(t.child.tag){case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}Ds(t,n,e)}return;case 5:e=t.stateNode,n===null&&t.flags&4&&ss(t.type,t.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:t.memoizedState===null&&(t=t.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&Ea(t))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(T(163))}function du(e,n){for(var t=e;;){if(t.tag===5){var r=t.stateNode;if(n)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=t.stateNode;var o=t.memoizedProps.style;o=o!=null&&o.hasOwnProperty("display")?o.display:null,r.style.display=ia("display",o)}}else if(t.tag===6)t.stateNode.nodeValue=n?"":t.memoizedProps;else if((t.tag!==23&&t.tag!==24||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}}function hu(e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Ll,n)}catch(l){}switch(n.tag){case 0:case 11:case 14:case 15:case 22:if(e=n.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var t=e=e.next;do{var r=t,o=r.destroy;if(r=r.tag,o!==void 0)if((r&4)!=0)fu(n,t);else{r=n;try{o()}catch(l){un(r,l)}}t=t.next}while(t!==e)}break;case 1:if(cu(n),e=n.stateNode,typeof e.componentWillUnmount=="function")try{e.props=n.memoizedProps,e.state=n.memoizedState,e.componentWillUnmount()}catch(l){un(n,l)}break;case 5:cu(n);break;case 4:pu(e,n)}}function mu(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function gu(e){return e.tag===5||e.tag===3||e.tag===4}function yu(e){e:{for(var n=e.return;n!==null;){if(gu(n))break e;n=n.return}throw Error(T(160))}var t=n;switch(n=t.stateNode,t.tag){case 5:var r=!1;break;case 3:n=n.containerInfo,r=!0;break;case 4:n=n.containerInfo,r=!0;break;default:throw Error(T(161))}t.flags&16&&(Et(n,""),t.flags&=-17);e:n:for(t=e;;){for(;t.sibling===null;){if(t.return===null||gu(t.return)){t=null;break e}t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue n;t.child.return=t,t=t.child}if(!(t.flags&2)){t=t.stateNode;break e}}r?gi(e,t,n):yi(e,t,n)}function gi(e,n,t){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zr));else if(r!==4&&(e=e.child,e!==null))for(gi(e,n,t),e=e.sibling;e!==null;)gi(e,n,t),e=e.sibling}function yi(e,n,t){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yi(e,n,t),e=e.sibling;e!==null;)yi(e,n,t),e=e.sibling}function pu(e,n){for(var t=n,r=!1,o,l;;){if(!r){r=t.return;e:for(;;){if(r===null)throw Error(T(160));switch(o=r.stateNode,r.tag){case 5:l=!1;break e;case 3:o=o.containerInfo,l=!0;break e;case 4:o=o.containerInfo,l=!0;break e}r=r.return}r=!0}if(t.tag===5||t.tag===6){e:for(var i=e,a=t,s=a;;)if(hu(i,s),s.child!==null&&s.tag!==4)s.child.return=s,s=s.child;else{if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}l?(i=o,a=t.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):o.removeChild(t.stateNode)}else if(t.tag===4){if(t.child!==null){o=t.stateNode.containerInfo,l=!0,t.child.return=t,t=t.child;continue}}else if(hu(e,t),t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return,t.tag===4&&(r=!1)}t.sibling.return=t.return,t=t.sibling}}function Ti(e,n){switch(n.tag){case 0:case 11:case 14:case 15:case 22:var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do(r.tag&3)==3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==t)}return;case 1:return;case 5:if(t=n.stateNode,t!=null){r=n.memoizedProps;var o=e!==null?e.memoizedProps:r;e=n.type;var l=n.updateQueue;if(n.updateQueue=null,l!==null){for(t[Yr]=r,e==="input"&&r.type==="radio"&&r.name!=null&&bi(t,r),bo(e,o),n=bo(e,r),o=0;o<l.length;o+=2){var i=l[o],a=l[o+1];i==="style"?aa(t,a):i==="dangerouslySetInnerHTML"?la(t,a):i==="children"?Et(t,a):xo(t,i,a,n)}switch(e){case"input":Jo(t,r);break;case"textarea":ta(t,r);break;case"select":e=t._wrapperState.wasMultiple,t._wrapperState.wasMultiple=!!r.multiple,l=r.value,l!=null?On(t,!!r.multiple,l,!1):e!==!!r.multiple&&(r.defaultValue!=null?On(t,!!r.multiple,r.defaultValue,!0):On(t,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(n.stateNode===null)throw Error(T(162));n.stateNode.nodeValue=n.memoizedProps;return;case 3:t=n.stateNode,t.hydrate&&(t.hydrate=!1,Ea(t.containerInfo));return;case 12:return;case 13:n.memoizedState!==null&&(vi=de(),du(n.child,!0)),vu(n);return;case 19:vu(n);return;case 17:return;case 23:case 24:du(n,n.memoizedState!==null);return}throw Error(T(163))}function vu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Qf),n.forEach(function(r){var o=Xf.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function qf(e,n){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(n=n.memoizedState,n!==null&&n.dehydrated===null):!1}var $f=Math.ceil,go=vn.ReactCurrentDispatcher,wi=vn.ReactCurrentOwner,_=0,ge=null,ee=null,he=0,Mn=0,Ci=be(0),ue=0,yo=null,ct=0,Vt=0,st=0,Si=0,Ei=null,vi=0,fi=Infinity;function ft(){fi=de()+500}var k=null,mo=!1,mi=null,We=null,cn=!1,rr=null,or=90,Ri=[],ki=[],ze=null,lr=0,Di=null,vo=-1,Ve=0,To=0,ir=null,wo=!1;function Ee(){return(_&48)!=0?de():vo!==-1?vo:vo=de()}function on(e){if(e=e.mode,(e&2)==0)return 1;if((e&4)==0)return tt()===99?1:2;if(Ve===0&&(Ve=ct),Ff.transition!==0){To!==0&&(To=Ei!==null?Ei.pendingLanes:0),e=Ve;var n=4186112&~To;return n&=-n,n===0&&(e=4186112&~e,n=e&-e,n===0&&(n=8192)),n}return e=tt(),(_&4)!=0&&e===98?e=Gr(12,Ve):(e=Uc(e),e=Gr(e,Ve)),e}function ln(e,n,t){if(50<lr)throw lr=0,Di=null,Error(T(185));if(e=Co(e,n),e===null)return null;Hr(e,n,t),e===ge&&(st|=n,ue===4&&ut(e,he));var r=tt();n===1?(_&8)!=0&&(_&48)==0?Pi(e):(Ie(e,t),_===0&&(ft(),xe())):((_&4)==0||r!==98&&r!==99||(ze===null?ze=new Set([e]):ze.add(e)),Ie(e,t)),Ei=e}function Co(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}function Ie(e,n){for(var t=e.callbackNode,r=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Xe(i),s=1<<a,c=l[a];if(c===-1){if((s&r)==0||(s&o)!=0){c=n,Yn(s);var v=V;l[a]=10<=v?c+250:6<=v?c+5e3:-1}}else c<=n&&(e.expiredLanes|=s);i&=~s}if(r=Ht(e,e===ge?he:0),n=V,r===0)t!==null&&(t!==Ul&&Fl(t),e.callbackNode=null,e.callbackPriority=0);else{if(t!==null){if(e.callbackPriority===n)return;t!==Ul&&Fl(t)}n===15?(t=Pi.bind(null,e),Oe===null?(Oe=[t],Zr=_l(Kr,Ss)):Oe.push(t),t=Ul):n===14?t=zt(99,Pi.bind(null,e)):(t=Oc(n),t=zt(t,Tu.bind(null,e))),e.callbackPriority=n,e.callbackNode=t}}function Tu(e){if(vo=-1,To=Ve=0,(_&48)!=0)throw Error(T(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var t=Ht(e,e===ge?he:0);if(t===0)return null;var r=t,o=_;_|=16;var l=Cu();(ge!==e||he!==r)&&(ft(),dt(e,r));do try{bf();break}catch(a){wu(e,a)}while(1);if(Bl(),go.current=l,_=o,ee!==null?r=0:(ge=null,he=0,r=ue),(ct&st)!=0)dt(e,0);else if(r!==0){if(r===2&&(_|=64,e.hydrate&&(e.hydrate=!1,Gl(e.containerInfo)),t=Aa(e),t!==0&&(r=ar(e,t))),r===1)throw n=yo,dt(e,0),ut(e,t),Ie(e,de()),n;switch(e.finishedWork=e.current.alternate,e.finishedLanes=t,r){case 0:case 1:throw Error(T(345));case 2:An(e);break;case 3:if(ut(e,t),(t&62914560)===t&&(r=vi+500-de(),10<r)){if(Ht(e,0)!==0)break;if(o=e.suspendedLanes,(o&t)!==t){Ee(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=us(An.bind(null,e),r);break}An(e);break;case 4:if(ut(e,t),(t&4186112)===t)break;for(r=e.eventTimes,o=-1;0<t;){var i=31-Xe(t);l=1<<i,i=r[i],i>o&&(o=i),t&=~l}if(t=o,t=de()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*$f(t/1960))-t,10<t){e.timeoutHandle=us(An.bind(null,e),t);break}An(e);break;case 5:An(e);break;default:throw Error(T(329))}}return Ie(e,de()),e.callbackNode===n?Tu.bind(null,e):null}function ut(e,n){for(n&=~Si,n&=~st,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Xe(n),r=1<<t;e[t]=-1,n&=~r}}function Pi(e){if((_&48)!=0)throw Error(T(327));if(fn(),e===ge&&(e.expiredLanes&he)!=0){var n=he,t=ar(e,n);(ct&st)!=0&&(n=Ht(e,n),t=ar(e,n))}else n=Ht(e,0),t=ar(e,n);if(e.tag!==0&&t===2&&(_|=64,e.hydrate&&(e.hydrate=!1,Gl(e.containerInfo)),n=Aa(e),n!==0&&(t=ar(e,n))),t===1)throw t=yo,dt(e,0),ut(e,n),Ie(e,de()),t;return e.finishedWork=e.current.alternate,e.finishedLanes=n,An(e),Ie(e,de()),null}function ed(){if(ze!==null){var e=ze;ze=null,e.forEach(function(n){n.expiredLanes|=24&n.pendingLanes,Ie(n,de())})}xe()}function Su(e,n){var t=_;_|=1;try{return e(n)}finally{_=t,_===0&&(ft(),xe())}}function Eu(e,n){var t=_;_&=-2,_|=8;try{return e(n)}finally{_=t,_===0&&(ft(),xe())}}function po(e,n){Z(Ci,Mn),Mn|=n,ct|=n}function di(){Mn=Ci.current,J(Ci)}function dt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Nf(t)),ee!==null)for(t=ee.return;t!==null;){var r=t;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:it(),J(ve),J(fe),ql();break;case 5:Kl(r);break;case 4:it();break;case 13:J(X);break;case 19:J(X);break;case 10:jl(r);break;case 23:case 24:di()}t=t.return}ge=e,ee=an(e.current,null),he=Mn=ct=n,ue=0,yo=null,Si=st=Vt=0}function wu(e,n){do{var t=ee;try{if(Bl(),Xt.current=so,ao){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ao=!1}if(qt=0,se=pe=q=null,$t=!1,wi.current=null,t===null||t.return===null){ue=1,yo=n,ee=null;break}e:{var l=e,i=t.return,a=t,s=n;if(n=he,a.flags|=2048,a.firstEffect=a.lastEffect=null,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s;if((a.mode&2)==0){var v=a.alternate;v?(a.updateQueue=v.updateQueue,a.memoizedState=v.memoizedState,a.lanes=v.lanes):(a.updateQueue=null,a.memoizedState=null)}var N=(X.current&1)!=0,g=i;do{var E;if(E=g.tag===13){var G=g.memoizedState;if(G!==null)E=G.dehydrated!==null;else{var P=g.memoizedProps;E=P.fallback===void 0?!1:P.unstable_avoidThisFallback!==!0?!0:!N}}if(E){var d=g.updateQueue;if(d===null){var u=new Set;u.add(c),g.updateQueue=u}else d.add(c);if((g.mode&2)==0){if(g.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var f=tn(-1,1);f.tag=2,rn(a,f)}a.lanes|=1;break e}s=void 0,a=n;var h=l.pingCache;if(h===null?(h=l.pingCache=new Yf,s=new Set,h.set(c,s)):(s=h.get(c),s===void 0&&(s=new Set,h.set(c,s))),!s.has(a)){s.add(a);var m=nd.bind(null,l,c,a);c.then(m,m)}g.flags|=4096,g.lanes=n;break e}g=g.return}while(g!==null);s=Error((Un(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}ue!==5&&(ue=2),s=pi(s,a),g=i;do{switch(g.tag){case 3:l=s,g.flags|=4096,n&=-n,g.lanes|=n;var H=su(g,l,n);ks(g,H);break e;case 1:l=s;var S=g.type,M=g.stateNode;if((g.flags&64)==0&&(typeof S.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(We===null||!We.has(M)))){g.flags|=4096,n&=-n,g.lanes|=n;var L=uu(g,l,n);ks(g,L);break e}}g=g.return}while(g!==null)}Ru(t)}catch(x){n=x,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(1)}function Cu(){var e=go.current;return go.current=so,e===null?so:e}function ar(e,n){var t=_;_|=16;var r=Cu();ge===e&&he===n||dt(e,n);do try{td();break}catch(o){wu(e,o)}while(1);if(Bl(),_=t,go.current=r,ee!==null)throw Error(T(261));return ge=null,he=0,ue}function td(){for(;ee!==null;)ku(ee)}function bf(){for(;ee!==null&&!xf();)ku(ee)}function ku(e){var n=Du(e.alternate,e,Mn);e.memoizedProps=e.pendingProps,n===null?Ru(e):ee=n,wi.current=null}function Ru(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&2048)==0){if(t=zf(t,n,Mn),t!==null){ee=t;return}if(t=n,t.tag!==24&&t.tag!==23||t.memoizedState===null||(Mn&1073741824)!=0||(t.mode&4)==0){for(var r=0,o=t.child;o!==null;)r|=o.lanes|o.childLanes,o=o.sibling;t.childLanes=r}e!==null&&(e.flags&2048)==0&&(e.firstEffect===null&&(e.firstEffect=n.firstEffect),n.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=n.firstEffect),e.lastEffect=n.lastEffect),1<n.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=n:e.firstEffect=n,e.lastEffect=n))}else{if(t=Vf(n),t!==null){t.flags&=2047,ee=t;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);ue===0&&(ue=5)}function An(e){var n=tt();return kn(99,rd.bind(null,e,n)),null}function rd(e,n){do fn();while(rr!==null);if((_&48)!=0)throw Error(T(327));var t=e.finishedWork;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(T(177));e.callbackNode=null;var r=t.lanes|t.childLanes,o=r,l=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;for(var i=e.eventTimes,a=e.expirationTimes;0<l;){var s=31-Xe(l),c=1<<s;o[s]=0,i[s]=-1,a[s]=-1,l&=~c}if(ze!==null&&(r&24)==0&&ze.has(e)&&ze.delete(e),e===ge&&(ee=ge=null,he=0),1<t.flags?t.lastEffect!==null?(t.lastEffect.nextEffect=t,r=t.firstEffect):r=t:r=t.firstEffect,r!==null){if(o=_,_|=32,wi.current=null,Ml=xr,i=qa(),kl(i)){if("selectionStart"in i)a={start:i.selectionStart,end:i.selectionEnd};else e:if(a=(a=i.ownerDocument)&&a.defaultView||window,(c=a.getSelection&&a.getSelection())&&c.rangeCount!==0){a=c.anchorNode,l=c.anchorOffset,s=c.focusNode,c=c.focusOffset;try{a.nodeType,s.nodeType}catch(x){a=null;break e}var v=0,N=-1,g=-1,E=0,G=0,P=i,d=null;n:for(;;){for(var u;P!==a||l!==0&&P.nodeType!==3||(N=v+l),P!==s||c!==0&&P.nodeType!==3||(g=v+c),P.nodeType===3&&(v+=P.nodeValue.length),(u=P.firstChild)!==null;)d=P,P=u;for(;;){if(P===i)break n;if(d===a&&++E===l&&(N=v),d===s&&++G===c&&(g=v),(u=P.nextSibling)!==null)break;P=d,d=P.parentNode}P=u}a=N===-1||g===-1?null:{start:N,end:g}}else a=null;a=a||{start:0,end:0}}else a=null;Al={focusedElem:i,selectionRange:a},xr=!1,ir=null,wo=!1,k=r;do try{od()}catch(x){if(k===null)throw Error(T(330));un(k,x),k=k.nextEffect}while(k!==null);ir=null,k=r;do try{for(i=e;k!==null;){var f=k.flags;if(f&16&&Et(k.stateNode,""),f&128){var h=k.alternate;if(h!==null){var m=h.ref;m!==null&&(typeof m=="function"?m(null):m.current=null)}}switch(f&1038){case 2:yu(k),k.flags&=-3;break;case 6:yu(k),k.flags&=-3,Ti(k.alternate,k);break;case 1024:k.flags&=-1025;break;case 1028:k.flags&=-1025,Ti(k.alternate,k);break;case 4:Ti(k.alternate,k);break;case 8:a=k,pu(i,a);var H=a.alternate;mu(a),H!==null&&mu(H)}k=k.nextEffect}}catch(x){if(k===null)throw Error(T(330));un(k,x),k=k.nextEffect}while(k!==null);if(m=Al,h=qa(),f=m.focusedElem,i=m.selectionRange,h!==f&&f&&f.ownerDocument&&Xa(f.ownerDocument.documentElement,f)){for(i!==null&&kl(f)&&(h=i.start,m=i.end,m===void 0&&(m=h),"selectionStart"in f?(f.selectionStart=h,f.selectionEnd=Math.min(m,f.value.length)):(m=(h=f.ownerDocument||document)&&h.defaultView||window,m.getSelection&&(m=m.getSelection(),a=f.textContent.length,H=Math.min(i.start,a),i=i.end===void 0?H:Math.min(i.end,a),!m.extend&&H>i&&(a=i,i=H,H=a),a=Za(f,H),l=Za(f,i),a&&l&&(m.rangeCount!==1||m.anchorNode!==a.node||m.anchorOffset!==a.offset||m.focusNode!==l.node||m.focusOffset!==l.offset)&&(h=h.createRange(),h.setStart(a.node,a.offset),m.removeAllRanges(),H>i?(m.addRange(h),m.extend(l.node,l.offset)):(h.setEnd(l.node,l.offset),m.addRange(h)))))),h=[],m=f;m=m.parentNode;)m.nodeType===1&&h.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<h.length;f++)m=h[f],m.element.scrollLeft=m.left,m.element.scrollTop=m.top}xr=!!Ml,Al=Ml=null,e.current=t,k=r;do try{for(f=e;k!==null;){var S=k.flags;if(S&36&&Zf(f,k.alternate,k),S&128){h=void 0;var M=k.ref;if(M!==null){var L=k.stateNode;switch(k.tag){case 5:h=L;break;default:h=L}typeof M=="function"?M(h):M.current=h}}k=k.nextEffect}}catch(x){if(k===null)throw Error(T(330));un(k,x),k=k.nextEffect}while(k!==null);k=null,_f(),_=o}else e.current=t;if(cn)cn=!1,rr=e,or=n;else for(k=r;k!==null;)n=k.nextEffect,k.nextEffect=null,k.flags&8&&(S=k,S.sibling=null,S.stateNode=null),k=n;if(r=e.pendingLanes,r===0&&(We=null),r===1?e===Di?lr++:(lr=0,Di=e):lr=0,t=t.stateNode,Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&64)==64)}catch(x){}if(Ie(e,de()),mo)throw mo=!1,e=mi,mi=null,e;return(_&8)!=0||xe(),null}function od(){for(;k!==null;){var e=k.alternate;wo||ir===null||((k.flags&8)!=0?ga(k,ir)&&(wo=!0):k.tag===13&&qf(e,k)&&ga(k,ir)&&(wo=!0));var n=k.flags;(n&256)!=0&&Jf(e,k),(n&512)==0||cn||(cn=!0,zt(97,function(){return fn(),null})),k=k.nextEffect}}function fn(){if(or!==90){var e=97<or?97:or;return or=90,kn(e,ld)}return!1}function Kf(e,n){Ri.push(n,e),cn||(cn=!0,zt(97,function(){return fn(),null}))}function fu(e,n){ki.push(n,e),cn||(cn=!0,zt(97,function(){return fn(),null}))}function ld(){if(rr===null)return!1;var e=rr;if(rr=null,(_&48)!=0)throw Error(T(331));var n=_;_|=32;var t=ki;ki=[];for(var r=0;r<t.length;r+=2){var o=t[r],l=t[r+1],i=o.destroy;if(o.destroy=void 0,typeof i=="function")try{i()}catch(s){if(l===null)throw Error(T(330));un(l,s)}}for(t=Ri,Ri=[],r=0;r<t.length;r+=2){o=t[r],l=t[r+1];try{var a=o.create;o.destroy=a()}catch(s){if(l===null)throw Error(T(330));un(l,s)}}for(a=e.current.firstEffect;a!==null;)e=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=e;return _=n,xe(),!0}function Pu(e,n,t){n=pi(t,n),n=su(e,n,1),rn(e,n),n=Ee(),e=Co(e,1),e!==null&&(Hr(e,1,n),Ie(e,n))}function un(e,n){if(e.tag===3)Pu(e,e,n);else for(var t=e.return;t!==null;){if(t.tag===3){Pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(We===null||!We.has(r))){e=pi(n,e);var o=uu(t,e,1);if(rn(t,o),o=Ee(),t=Co(t,1),t!==null)Hr(t,1,o),Ie(t,o);else if(typeof r.componentDidCatch=="function"&&(We===null||!We.has(r)))try{r.componentDidCatch(n,e)}catch(l){}break}}t=t.return}}function nd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ee(),e.pingedLanes|=e.suspendedLanes&t,ge===e&&(he&t)===t&&(ue===4||ue===3&&(he&62914560)===he&&500>de()-vi?dt(e,0):Si|=t),Ie(e,n)}function Xf(e,n){var t=e.stateNode;t!==null&&t.delete(n),n=0,n===0&&(n=e.mode,(n&2)==0?n=1:(n&4)==0?n=tt()===99?1:2:(Ve===0&&(Ve=ct),n=Qn(62914560&~Ve),n===0&&(n=4194304))),t=Ee(),e=Co(e,n),e!==null&&(Hr(e,n,t),Ie(e,t))}var Du;Du=function(e,n,t){var r=n.lanes;if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)Ge=!0;else if((t&r)!=0)Ge=(e.flags&16384)!=0;else{switch(Ge=!1,n.tag){case 3:$s(n),Xl();break;case 5:Hs(n);break;case 1:Te(n.type)&&Jr(n);break;case 4:Jl(n,n.stateNode.containerInfo);break;case 10:r=n.memoizedProps.value;var o=n.type._context;Z(Xr,o._currentValue),o._currentValue=r;break;case 13:if(n.memoizedState!==null)return(t&n.child.childLanes)!=0?tu(e,n,t):(Z(X,X.current&1),n=je(e,n,t),n!==null?n.sibling:null);Z(X,X.current&1);break;case 19:if(r=(t&n.childLanes)!=0,(e.flags&64)!=0){if(r)return ou(e,n,t);n.flags|=64}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(X,X.current),r)break;return null;case 23:case 24:return n.lanes=0,ii(e,n,t)}return je(e,n,t)}else Ge=!1;switch(n.lanes=0,n.tag){case 2:if(r=n.type,e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),e=n.pendingProps,o=nt(n,fe.current),ot(n,t),o=bl(null,n,r,e,o,t),n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){if(n.tag=1,n.memoizedState=null,n.updateQueue=null,Te(r)){var l=!0;Jr(n)}else l=!1;n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,zl(n);var i=r.getDerivedStateFromProps;typeof i=="function"&&br(n,r,i,e),o.updater=eo,n.stateNode=o,o._reactInternals=n,Vl(n,r,e,t),n=ai(null,n,r,!0,l,t)}else n.tag=0,Ce(null,n,o,t),n=n.child;return n;case 16:o=n.elementType;e:{switch(e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),e=n.pendingProps,l=o._init,o=l(o._payload),n.type=o,l=n.tag=id(o),e=Ne(o,e),l){case 0:n=li(null,n,o,e,t);break e;case 1:n=qs(null,n,o,e,t);break e;case 11:n=Js(null,n,o,e,t);break e;case 14:n=Zs(null,n,o,Ne(o.type,e),r,t);break e}throw Error(T(306,o,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ne(r,o),li(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ne(r,o),qs(e,n,r,o,t);case 3:if($s(n),r=n.updateQueue,e===null||r===null)throw Error(T(282));if(r=n.pendingProps,o=n.memoizedState,o=o!==null?o.element:null,Rs(e,n),Yt(n,r,null,t),r=n.memoizedState.element,r===o)Xl(),n=je(e,n,t);else{if(o=n.stateNode,(l=o.hydrate)&&(sn=bn(n.stateNode.containerInfo.firstChild),Be=n,l=_e=!0),l){if(e=o.mutableSourceEagerHydrationData,e!=null)for(o=0;o<e.length;o+=2)l=e[o],l._workInProgressVersionPrimary=e[o+1],at.push(l);for(t=Gs(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|1024,t=t.sibling}else Ce(e,n,r,t),Xl();n=n.child}return n;case 5:return Hs(n),e===null&&Zl(n),r=n.type,o=n.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Nl(r,o)?i=null:l!==null&&Nl(r,l)&&(n.flags|=16),Xs(e,n),Ce(e,n,i,t),n.child;case 6:return e===null&&Zl(n),null;case 13:return tu(e,n,t);case 4:return Jl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=oo(n,null,r,t):Ce(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ne(r,o),Js(e,n,r,o,t);case 7:return Ce(e,n,n.pendingProps,t),n.child;case 8:return Ce(e,n,n.pendingProps.children,t),n.child;case 12:return Ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value;var a=n.type._context;if(Z(Xr,a._currentValue),a._currentValue=l,i!==null)if(a=i.value,l=Re(a,l)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,l):1073741823)|0,l===0){if(i.children===o.children&&!ve.current){n=je(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var c=s.firstContext;c!==null;){if(c.context===r&&(c.observedBits&l)!=0){a.tag===1&&(c=tn(-1,t&-t),c.tag=2,rn(a,c)),a.lanes|=t,c=a.alternate,c!==null&&(c.lanes|=t),Es(a.return,t),s.lanes|=t;break}c=c.next}}else i=a.tag===10&&a.type===n.type?null:a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===n){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Ce(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,l=n.pendingProps,r=l.children,ot(n,t),o=ke(o,l.unstable_observedBits),r=r(o),n.flags|=1,Ce(e,n,r,t),n.child;case 14:return o=n.type,l=Ne(o,n.pendingProps),l=Ne(o.type,l),Zs(e,n,o,l,r,t);case 15:return Ks(e,n,n.type,n.pendingProps,r,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ne(r,o),e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2),n.tag=1,Te(r)?(e=!0,Jr(n)):e=!1,ot(n,t),Ms(n,r,o),Vl(n,r,o,t),ai(null,n,r,!0,e,t);case 19:return ou(e,n,t);case 23:return ii(e,n,t);case 24:return ii(e,n,t)}throw Error(T(156,n.tag))};function ad(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,n,t,r){return new ad(e,n,t,r)}function oi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function id(e){if(typeof e=="function")return oi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Tr)return 11;if(e===Cr)return 14}return 2}function an(e,n){var t=e.alternate;return t===null?(t=De(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.nextEffect=null,t.firstEffect=null,t.lastEffect=null),t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ro(e,n,t,r,o,l){var i=2;if(r=e,typeof e=="function")oi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ye:return lt(t.children,o,l,n);case Ki:i=8,o|=16;break;case Lo:i=8,o|=1;break;case Tt:return e=De(12,t,n,o|8),e.elementType=Tt,e.type=Tt,e.lanes=l,e;case wt:return e=De(13,t,n,o),e.type=wt,e.elementType=wt,e.lanes=l,e;case wr:return e=De(19,t,n,o),e.elementType=wr,e.lanes=l,e;case Bo:return si(t,o,l,n);case jo:return e=De(24,t,n,o),e.elementType=jo,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _o:i=10;break e;case Fo:i=9;break e;case Tr:i=11;break e;case Cr:i=14;break e;case Wo:i=16,r=null;break e;case Uo:i=22;break e}throw Error(T(130,e==null?e:typeof e,""))}return n=De(i,t,n,o),n.elementType=e,n.type=r,n.lanes=l,n}function lt(e,n,t,r){return e=De(7,e,r,n),e.lanes=t,e}function si(e,n,t,r){return e=De(23,e,r,n),e.elementType=Bo,e.lanes=t,e}function Yl(e,n,t){return e=De(6,e,null,n),e.lanes=t,e}function Ql(e,n,t){return n=De(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function sd(e,n,t){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=t,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.mutableSourceEagerHydrationData=null}function ud(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function So(e,n,t,r){var o=n.current,l=Ee(),i=on(o);e:if(t){t=t._reactInternals;n:{if(Cn(t)!==t||t.tag!==1)throw Error(T(170));var a=t;do{switch(a.tag){case 3:a=a.stateNode.context;break n;case 1:if(Te(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break n}}a=a.return}while(a!==null);throw Error(T(171))}if(t.tag===1){var s=t.type;if(Te(s)){t=ps(t,s,a);break e}}t=a}else t=en;return n.context===null?n.context=t:n.pendingContext=t,n=tn(l,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),rn(o,n),ln(o,i,l),i}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Iu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Mi(e,n){Iu(e,n),(e=e.alternate)&&Iu(e,n)}function cd(){return null}function Ai(e,n,t){var r=t!=null&&t.hydrationOptions!=null&&t.hydrationOptions.mutableSources||null;if(t=new sd(e,n,t!=null&&t.hydrate===!0),n=De(3,null,null,n===2?7:n===1?3:0),t.current=n,n.stateNode=t,zl(n),e[$n]=t.current,is(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){n=r[e];var o=n._getVersion;o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o)}this._internalRoot=t}Ai.prototype.render=function(e){So(e,this._internalRoot,null,null)};Ai.prototype.unmount=function(){var e=this._internalRoot,n=e.containerInfo;So(null,e,null,function(){n[$n]=null})};function sr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fd(e,n){if(n||(n=e?e.nodeType===9?e.documentElement:e.firstChild:null,n=!(!n||n.nodeType!==1||!n.hasAttribute("data-reactroot"))),!n)for(var t;t=e.lastChild;)e.removeChild(t);return new Ai(e,0,n?{hydrate:!0}:void 0)}function Eo(e,n,t,r,o){var l=t._reactRootContainer;if(l){var i=l._internalRoot;if(typeof o=="function"){var a=o;o=function(){var c=Ii(i);a.call(c)}}So(n,i,e,o)}else{if(l=t._reactRootContainer=fd(t,r),i=l._internalRoot,typeof o=="function"){var s=o;o=function(){var c=Ii(i);s.call(c)}}Eu(function(){So(n,i,e,o)})}return Ii(i)}ya=function(e){if(e.tag===13){var n=Ee();ln(e,4,n),Mi(e,4)}};sl=function(e){if(e.tag===13){var n=Ee();ln(e,67108864,n),Mi(e,67108864)}};va=function(e){if(e.tag===13){var n=Ee(),t=on(e);ln(e,t,n),Mi(e,t)}};Ta=function(e,n){return n()};nl=function(e,n,t){switch(n){case"input":if(Jo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Dr(r);if(!o)throw Error(T(90));qi(r),Jo(r,o)}}}break;case"textarea":ta(e,t);break;case"select":n=t.value,n!=null&&On(e,!!t.multiple,n,!1)}};tl=Su;fa=function(e,n,t,r,o){var l=_;_|=4;try{return kn(98,e.bind(null,n,t,r,o))}finally{_=l,_===0&&(ft(),xe())}};rl=function(){(_&49)==0&&(ed(),fn())};da=function(e,n){var t=_;_|=2;try{return e(n)}finally{_=t,_===0&&(ft(),xe())}};function Mu(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sr(n))throw Error(T(200));return ud(e,n,null,t)}var dd={Events:[kt,Zn,Dr,ua,ca,fn,{current:!1}]},ur={findFiberByHostInstance:Sn,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},pd={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ma(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||cd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(cr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!cr.isDisabled&&cr.supportsFiber))try{Ll=cr.inject(pd),Rn=cr}catch(e){}var cr,hd=dd,md=Mu,gd=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(T(188)):Error(T(268,Object.keys(e)));return e=ma(n),e=e===null?null:e.stateNode,e},yd=function(e,n){var t=_;if((t&48)!=0)return e(n);_|=1;try{if(e)return kn(99,e.bind(null,n))}finally{_=t,xe()}},vd=function(e,n,t){if(!sr(n))throw Error(T(200));return Eo(null,e,n,!0,t)},Td=function(e,n,t){if(!sr(n))throw Error(T(200));return Eo(null,e,n,!1,t)},wd=function(e){if(!sr(e))throw Error(T(40));return e._reactRootContainer?(Eu(function(){Eo(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1},Cd=Su,Sd=function(e,n){return Mu(e,n,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},Ed=function(e,n,t,r){if(!sr(t))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Eo(e,n,t,!1,r)},Rd="17.0.2",kd={__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:hd,createPortal:md,findDOMNode:gd,flushSync:yd,hydrate:vd,render:Td,unmountComponentAtNode:wd,unstable_batchedUpdates:Cd,unstable_createPortal:Sd,unstable_renderSubtreeIntoContainer:Ed,version:Rd},Dd=Ln(function(e){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}n(),e.exports=kd}),Ni=Dd.render;var Gi=Symbol(),Hi=Symbol(),xi=Symbol(),Ro=Symbol();function Nn(e,n){function t(...r){if(r.length>=e.length)return e(...r);{let o=(...l)=>t(...r,...l);return o[Gi]=e,o[Hi]=t,o[xi]=r,o[Ro]=t[Ro],o}}return t[Gi]=e,t[Hi]=t,t[xi]=[],t[Ro]=n||Au(e),t}function Li(e){return e[Gi]}function Pd(e){return e[Hi]}function ko(e){return e[xi]||[]}function Au(e){return e[Ro]||e.name}function Md(){let e=[];return{test:n,getAllTests:t};function n(r,o){e.push(...Object.entries(o).map(([l,i])=>Id(r,l,i)))}function t(){return e}}function C(e,n,...t){let r=n(...t,e);if(typeof r=="function")throw new Error("The matcher function `"+_i(r)+"` returned a function instead of a boolean. You might need to pass another argument to it.");if(!r)throw new Do([e,n,...t])}function Id(e,n,t){return{subject:e,scenario:n,fn:t}}var Do=class extends Error{constructor(n){super("Expectation failed");this.expectArgs=n}};function Ad(e){return e[e.length-1]}function Nu(e){return e[0]}var Nd=Nn(function(e,n){return e(n)},"which"),Y=Nn(function(e,n){var t,r;if(Gd(e))return e(n);if(Array.isArray(e)&&Array.isArray(n))return e.length===n.length&&e.every((o,l)=>Y(e[l],n[l]));if(e instanceof Function&&n instanceof Function)return Li(e)&&Li(e)===Li(n)?Y(ko(e),ko(n)):e===n;if(e instanceof Date&&n instanceof Date)return e.toISOString()===n.toISOString();if(e instanceof Set&&n instanceof Set)return e.size===n.size&&[...e.values()].every(o=>n.has(o));if(e instanceof Error&&n instanceof Error)return e.message===n.message&&e.__proto__.constructor===n.__proto__.constructor;if(Gu(e)&&Gu(n)){let o=Object.keys(e),l=Object.keys(n);return o.length===l.length&&o.every(i=>Y(e[i],n[i]))&&((t=e.__proto__)==null?void 0:t.constructor)===((r=n.__proto__)==null?void 0:r.constructor)}return e===n},"equals"),I=Nn(function(e,n){return e===n},"is"),Fi=Nn(function(e,n,...t){return!e(n,...t)},"not"),Hu=Nn(function(e){return/^\s*$/.test(e)},"isBlank");function Gu(e){return!!e&&typeof e=="object"}function Gd(e){return e instanceof Function&&Pd(e)===Nd&&ko(e).length===1}function _i(e){return Au(e)||"<function>"}function Lu(e){let n=[];return t(e);function t(s){var c;if(s===null)return"null";if(typeof s=="function")return r(s,o);if(typeof s=="string")return Wi(s);if(typeof s=="bigint")return`${s}n`;if(Array.isArray(s))return r(s,l);if(s instanceof Date)return`Date(${s.toISOString().replace("T"," ").replace("Z"," UTC")})`;if(s instanceof RegExp)return String(s);if(s instanceof Error)return`${xu(s)}(${Wi(s.message)})`;if(s instanceof Set)return r(s,a);if(typeof s=="object"){let v=(c=s==null?void 0:s.__proto__)==null?void 0:c.constructor;return v===Object||!v?r(s,i):`${xu(s)} ${r(s,i)}`}return String(s)}function r(s,c){if(n.indexOf(s)>-1)return"<circular reference>";n.push(s);let v=c(s);return n.pop(),v}function o(s){let c=ko(s).map(t),v=_i(s);return c.length?fr(v+"(",c,",",")"):v}function l(s){return fr("[",s.map(t),",","]")}function i(s){let c=Object.entries(s).map(([v,N])=>`${Hd(v)}: ${t(N)}`);return fr("{",c,",","}")}function a(s){let c=[...s.values()].map(t);return fr("Set {",c,",","}")}}function Hd(e){return/^[a-zA-Z0-9_$]+$/.test(e)?e:Wi(e)}function xu(e){return _i(e.__proto__.constructor)}function Wi(e){return'"'+String(e).replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/"/g,'\\"').replace(/[\x00-\x1f\x7f]/g,xd)+'"'}function xd(e){let n=e.charCodeAt(0).toString(16);return"\\x"+(n.length<2?"0"+n:n)}function Po(e,n){return n.split(`
`).map(t=>t&&_d(Ld(e," "))(t)).join(`
`)}function Ld(e,n){return Array(e+1).join(n)}var _d=e=>n=>e+n,Fd=Nn(function(n,t){return t.slice(0,n.length)===n?t.slice(n.length):t});function Wd(e){return String(e).split(/\r?\n/)}function Ud(e){let n=Wd(e);Hu(Nu(n))&&n.shift(),Hu(Ad(n))&&n.pop();let t=/^[ \t]*/.exec(Nu(n))[0];return n.map(Fd(t)).join(`
`)}function fr(e,n,t,r){return n.length<2?e+n.join("")+r:e+`
`+Po(2,n.join(t+`
`))+`
`+r}function Fu(e){return vr(this,null,function*(){let n=[];for(let t of e){let r=yield Od(t.fn),o=_u.map(l=>({type:"debug",args:l}));_u.length=0,n.push({test:t,error:r,instrumentLog:o})}return{results:n}})}function Od(e){let n;try{let t=e();if(t instanceof Promise)return new Promise(r=>{t.then(()=>r()).catch(r)})}catch(t){n=t}return Promise.resolve(n)}var _u=[],zp=Nn(function(n,t){return t instanceof Do&&Y(n,t.expectArgs)}),Io=`

`;function Wu({results:e}){let n=!1,t=!1,r=[];for(let o of e){let l=!1;o.error&&(l=n=!0),o.instrumentLog.length&&(l=t=!0),l&&r.push(o)}return n?Bd(r):t?zd(e.length,r):jd(e.length)}function Bd(e){return e.map(Uu).join(Io)+Io+"Tests failed."}function jd(e){switch(e){case 0:return"No tests to run.";case 1:return"One test ran, and found no issues.";default:return`${e} tests ran, and found no issues.`}}function zd(e,n){return n.map(Uu).join(Io)+Io+Vd(e)+`, but debugging instrumentation is present.
Remove it before shipping.`}function Vd(e){switch(e){case 1:return"The test passed";case 2:return"Both tests passed";default:return`All ${e} tests passed`}}function Uu({test:e,error:n,instrumentLog:t}){let o=[e.subject+" "+e.scenario];return t.length&&o.push(Po(2,Qd(t))),n&&o.push(Po(2,Yd(n))),o.join(`
`)}function Yd(e){return e instanceof Do?Jd(e):Kd(e)}function Qd(e){return e.map(({args:n})=>Ou("debug",n)).join("")}function Jd(e){return Ou("expect",e.expectArgs)}function Kd(e){return Lu(e)+" thrown"+Po(2,Zd(e.stack))}function Ou(e,n){return fr(e+"(",n.map(Lu),",",")")}function Zd(e){if(!e)return"";let n=Ud(e).split(`
`);return`
`+n.slice(0,Xd(n)).map(t=>t.replace(/(file:\/\/|http:\/\/[^/]*)/,"").replace(/^([^@]*)@(.*)$/,"at $1 ($2)")).join(`
`)}function Xd(e){let n=e.findIndex(t=>t.includes("errorFrom"));return n===-1?e.length:n}var Vp=Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]}),qd=Md(),{getAllTests:Bu}=qd;function re(...e){}function dn(){return(+new Date%1e6/1e3).toFixed(3)}function j(e,n=0){return isNaN(e)||e===Infinity||e===-Infinity?"--:--":e<0?"-"+ju(-e,n):ju(e,n)}function ju(e,n){function t(i,a=$d){return(i<10?"0":"")+a(i)}let r=Math.floor(e/3600),o=Math.floor(e%3600/60),l=e%60;return r>0?`${r}:${t(o)}:${t(l,zu(n))}`:`${o}:${t(l,zu(n))}`}re("hoursMinutesSeconds",{"formats NaN"(){C(j(0/0),I,"--:--")},"formats Infinities"(){C(j(Infinity),I,"--:--"),C(j(-Infinity),I,"--:--")},"formats negative numbers"(){C(j(-1),I,"-0:01"),C(j(-3661.12,2),I,"-1:01:01.12")},"formats single-digit seconds with leading zero"(){C(j(0),I,"0:00"),C(j(1),I,"0:01"),C(j(9),I,"0:09")},"formats double-digit seconds"(){C(j(10),I,"0:10"),C(j(59),I,"0:59")},"formats minutes"(){C(j(60),I,"1:00"),C(j(61),I,"1:01"),C(j(119),I,"1:59"),C(j(120),I,"2:00"),C(j(3599),I,"59:59")},"formats hours"(){C(j(3600),I,"1:00:00"),C(j(7200),I,"2:00:00"),C(j(3661),I,"1:01:01"),C(j(3610),I,"1:00:10"),C(j(3600+600),I,"1:10:00"),C(j(36001),I,"10:00:01")},"adds decimal places"(){C(j(0,0),I,"0:00"),C(j(0,1),I,"0:00.0"),C(j(0,2),I,"0:00.00")},"formats fractional seconds"(){C(j(1.23,2),I,"0:01.23")},"rounds decimals"(){C(j(2.3456,2),I,"0:02.35")}});var $d=e=>e,zu=e=>n=>n.toFixed(e);function pt(e){var n;return(n=/v=(.{11})/.exec(e))==null?void 0:n[1]}function Vu(){return{getPlayerState(){return oe.UNSTARTED},getCurrentTime(){return 0},getVideoUrl(){return""},cueVideoById(){},playVideo(){},seekTo(){},getDuration(){return 0},addEventListener(){},removeEventListener(){}}}function Yu(e){return{getPlayerState(){return e.getPlayerState()},getCurrentTime(){return e.getCurrentTime()},getVideoUrl(){return e.getVideoUrl()},cueVideoById(...n){return console.debug(dn(),"player.cueVideoById",...n),e.cueVideoById(...n)},playVideo(...n){return console.debug(dn(),"player.playVideo",...n),e.playVideo(...n)},seekTo(...n){return console.debug(dn(),"player.seekTo",...n,pt(e.getVideoUrl())),e.seekTo(...n)},getDuration(){return e.getDuration()},addEventListener(...n){return console.debug(dn(),"player.addEventListener"),e.addEventListener(...n)},removeEventListener(...n){return console.debug(dn(),"player.removeEventListener"),e.removeEventListener(...n)}}}var oe={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};function Qu(e){return vr(this,null,function*(){let n=yield bd();return new Promise(t=>{let r=new n.Player(e,{height:450,width:800,videoId:null,playerVars:{controls:0,disablekb:1},events:{onReady(){t(r)}}})})})}function bd(){return Ju?Promise.resolve(window.YT):new Promise(e=>{var n;if(document.querySelector("script[src='https://www.youtube.com/iframe_api']")===null){let t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";let r=document.getElementsByTagName("script")[0];(n=r.parentNode)==null||n.insertBefore(t,r)}Ui.push(e)})}var Ju=!1,Ui=[];window.onYouTubeIframeAPIReady=()=>{Ju=!0,Ui.forEach(e=>e(window.YT)),Ui.length=0};function Ku(e,n){let t=gt(),r=gt();r.current=e,Fn(()=>(t.current=setInterval(()=>{var o;return(o=r.current)==null?void 0:o.call(r)},n),()=>clearInterval(t.current)),[n])}function Zu(){let[e,n]=Ae(!1);return[e,()=>n(!0)]}function dr(e){switch(e){case oe.BUFFERING:return"buffering";case oe.UNSTARTED:return"unstarted";case oe.CUED:return"cued";case oe.ENDED:return"ended";case oe.PLAYING:return"playing";case oe.PAUSED:return"paused";default:return""}}function Xu(e){return e.channel.getName()+" "+dr(e.code)}function pr(e){try{e()}catch(n){return n}}function pn(e,n){if(e.length===0)throw new Error("can't pick element from an empty array");if(n>=1||n<0)throw new Error("fraction out of bounds: "+n);return e[Math.floor(n*e.length)]}re("pick",{"throws if the array is empty"(){C(pr(()=>pn([],0)),Y,new Error("can't pick element from an empty array"))},"throws if the fraction is 1"(){C(pr(()=>pn([""],1)),Y,new Error("fraction out of bounds: 1"))},"throws if the fraction is > 1"(){C(pr(()=>pn([""],1.25)),Y,new Error("fraction out of bounds: 1.25"))},"throws if the fraction is > 0"(){C(pr(()=>pn([""],-.25)),Y,new Error("fraction out of bounds: -0.25"))},"picks the first element of the array given 0"(){C(pn([1,2],0),I,1)},"picks the last element of the array given 1 - epsilon"(){C(pn([1,2],.99),I,2)}});function ht(e,n){let t={};return r=>(r in t||(Object.keys(t).length===e&&(t={}),t[r]=n(r)),t[r])}re("cache",{"caches a value"(){let e=0,n=ht(1,()=>(e++,123));n("foo"),n("foo"),C(e,I,1)},"computes and caches values by key"(){let e=ht(2,n=>n+"x");C(e("foo"),I,"foox"),C(e("bar"),I,"barx")},"caches multiple values"(){let e=0,n=ht(2,t=>(e++,t+"x"));n("foo"),n("foo"),n("bar"),n("bar"),C(e,I,2),C(n("foo"),I,"foox"),C(n("bar"),I,"barx")},"a max size of 0 means no limit"(){let e=0,n=ht(0,()=>(e++,123));n("a"),n("b"),n("c"),C(e,I,3)}});function hr(e){let n=1779033703,t=3144134277,r=1013904242,o=2773480762;for(let l=0,i;l<e.length;l++)i=e.charCodeAt(l),n=t^Math.imul(n^i,597399067),t=r^Math.imul(t^i,2869860233),r=o^Math.imul(r^i,951274213),o=n^Math.imul(o^i,2716044179);return n=Math.imul(r^n>>>18,597399067),t=Math.imul(o^t>>>22,2869860233),r=Math.imul(n^r>>>17,951274213),o=Math.imul(t^o>>>19,2716044179),(n^t^r^o)>>>0}re("cyrb128_32",{"hashes unix timestamps to random-looking values"(){C(hr("1661673600"),I,1866196007),C(hr("1661760000"),I,3655929289),C(hr("1661846400"),I,2165297363)}});function Mo(e){return function(){var n=e+=1831565813;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}re("mulberry32",{"flips coins fairly"(){let e=0,n=0,t=Mo(0);for(let r=0;r<200;r++)t()<.5?e++:n++;C(e-n,I,12)},"generates a reasonably uniform distribution of numbers"(){let e=new Set,n=Mo(0);for(let t=0;t<100;t++)e.add(Math.floor(n()*1e4));C(e.size,I,99)}});var mr=2;function Gn(e,n){let t=ht(1,Ao(n));return{getBroadcast:r,getName(){return e}};function r(o){let l=o/1e3,i=(l-8*3600)%(24*3600),a=l-i,s=t(String(a)),c=0,v;for(v of s)if(c+=v.durationSeconds,c>=i)return v.type==="video"?{type:"video",videoId:v.videoId,videoTitle:v.videoTitle,currentTime:v.durationSeconds-(c-i)}:{type:"nothing",nextVideoId:v.nextVideoId};return{type:"nothing",nextVideoId:""}}}var Ao=e=>n=>{let t=Mo(hr(n)),r=0,o=[];for(;r<24*3600;){let l=pn(e,t());for(let i of l.videos)o.push({type:"nothing",durationSeconds:mr,nextVideoId:i.videoId},{type:"video",videoId:i.videoId,videoTitle:i.title,durationSeconds:i.durationSeconds}),r+=i.durationSeconds+mr}return o};re("ScheduleGenerator",{"schedules a single 24-hour video"(){let e=[{videos:[{durationSeconds:3600*24,videoId:"the-video-id",title:"the-title"}]}],n=Ao(e);C(n(""),Y,[{type:"nothing",durationSeconds:2,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:"the-title",durationSeconds:86400}])},"schedules a 12-hour video twice"(){let e=[{videos:[{durationSeconds:3600*12,videoId:"the-video-id",title:"the-title"}]}],n=Ao(e);C(n(""),Y,[{type:"nothing",durationSeconds:2,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:"the-title",durationSeconds:43200},{type:"nothing",durationSeconds:2,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:"the-title",durationSeconds:43200}])},"picks the videos to show randomly"(){let e=[{videos:[{durationSeconds:3600*2,videoId:"one",title:""}]},{videos:[{durationSeconds:3600*2,videoId:"two",title:""}]},{videos:[{durationSeconds:3600*2,videoId:"three",title:""}]}],n=Ao(e);C(n("asdfx").map(t=>t.videoId).filter(Boolean),Y,["three","one","three","two","two","three","one","three","two","two","one","one"])}});function ce(e){return e.split(/\n+/).map(np).filter(Fi(ep)).filter(Fi(tp)).map(gr(/ +/,3)).flatMap(([n,t,r])=>t==="SHORTS"?[]:[{videoId:n,durationSeconds:Me(t),title:r}])}re("parseVideos",{"empty string"(){C(ce(""),Y,[])},spaces(){C(ce("  "),Y,[])},newlines(){C(ce(`


`),Y,[])},"newlines and spaces"(){C(ce(` 
 
 
`),Y,[])},comments(){C(ce(`#foo
# bar`),Y,[])},"strips spaces before comments"(){C(ce(`  #foo
  # bar`),Y,[])},"parses actual data"(){C(ce(`
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
      Ga8tNxnHjt4 3:01 Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971
    `),Y,[{videoId:"leb645Xu6uo",durationSeconds:654,title:"Captain Murderer - Emlyn Williams"},{videoId:"Ga8tNxnHjt4",durationSeconds:181,title:"Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971"}])},"removes shorts"(){C(ce(`
      undefined SHORTS blah blah
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
    `),Y,[{videoId:"leb645Xu6uo",durationSeconds:654,title:"Captain Murderer - Emlyn Williams"}])}});function ep(e){return e.startsWith("#")}function Me(e){let n=[1,60,3600,86400],t=e.split(":").map(r=>parseInt(r,10)).reverse();return rp(t,n).map(([r,o])=>r*o).reduce(op,0)}re("parseDuration",{"0:00"(){C(Me("0:00"),I,0)},"00:00"(){C(Me("00:00"),I,0)},"1 second"(){C(Me("0:01"),I,1)},"10 seconds"(){C(Me("0:10"),I,10)},"1 minute"(){C(Me("1:00"),I,60)},"1 minute 10 seconds"(){C(Me("1:10"),I,70)},"10 minutes 10 seconds"(){C(Me("10:10"),I,610)},"1 hour"(){C(Me("1:00:00"),I,3600)},"1 hour 1 second"(){C(Me("1:00:01"),I,3601)},"10 hours 1 second"(){C(Me("10:00:01"),I,36001)},"1 day 1 second"(){C(Me("1:0:00:01"),I,86401)}});function np(e){return e.trim()}function tp(e){return e.length===0}var gr=(e,n=Infinity)=>t=>{if(typeof e=="string"&&e.length===0)throw"split(): empty delimiter not supported";let r=0,o=0,l=[],i=t;for(;l.length<n-1&&i.length>0;){let a=i.match(e);if(a==null)break;l.push(i.slice(0,a.index)),i=i.slice(a.index+a[0].length)}return l.push(i),l};re("split",{"empty string"(){C(gr(" ")(""),Y,[""])},"no limit"(){C(gr(" ")("a b c"),Y,["a","b","c"])},limit(){C(gr(" ",2)("a b c"),Y,["a","b c"])},regex(){C(gr(/ +/)("a b   c"),Y,["a","b","c"])}});function rp(e,n){let t=[];for(let r=0;r<e.length&&r<n.length;r++)t.push([e[r],n[r]]);return t}function op(e,n){return e+n}var Oi=(...e)=>e.reduce(lp),qu=ip(Oi(ce,e=>({videos:e})))(["BecZdQvjGrY 54:49 In Gowan Ring - Compendium (Full Album)","B3oAx9VmAdA 43:52 In Gowan Ring - Hazel Steps Through A Weathered Home",`
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
  `]);re("pipe",{"given one function"(){C(Oi(n=>n+1)(1),I,2)},"given two functions"(){let e=n=>n+1;C(Oi(e,e)(1),I,3)}});function lp(e,n){return(...t)=>n(e(...t))}function ip(e){return n=>n.map(e)}var Gh=ce(`
    vKXu0CzRcrI 0:16 Here's Tree
    ieWm9T_GgSA 0:08 I'm Lost
    zBIx-gP-I8c 0:51 Strong Bad Email #1 - Some Kinda Robot
    BHLsrzYt-H4 0:52 Strong Bad Email #2 - Homsar
    wRKrv-RlJOw 1:01 Strong Bad Email #6 - Depressio
    Lml_AKkhCVY 1:01 Strong Bad Email #9 - I Love You
`),$u=ce(`
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
`),bu=ce(`
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
`),ec=ce(`

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

`),nc=ce(`
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
`),tc=ce(`
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
`);var No=[Gn("Channel 1",$u.map(yr)),Gn("Channel 2",bu.map(yr)),Gn("Channel 3",qu),Gn("Channel 4",ec.map(yr)),Gn("Channel 5",nc.map(yr)),Gn("Channel 6",tc.map(yr))];function yr(e){return{videos:[e]}}function rc(e){return D(_n,null,No.map(n=>D("button",{key:n.getName(),onClick:()=>e.onChannelSelected(n)},n.getName())))}function oc(){let[e,n]=Ae(+new Date);return Ku(()=>n(+new Date),250),e}function lc(e=""){return{type:"nothing",nextVideoId:e}}function ic(e,n){let{state:t,videoId:r,time:o}=n;if(e.type==="nothing")switch(t){case oe.ENDED:case oe.CUED:case oe.UNSTARTED:return e.nextVideoId?r!==e.nextVideoId?[{type:"cue",videoId:e.nextVideoId,timestamp:0}]:[{type:"seek",timestamp:0},{type:"play"}]:[];default:return[]}else{if(t===oe.BUFFERING)return[];let{videoId:l,currentTime:i}=e;if(r!==l)return[{type:"cue",videoId:l,timestamp:i<mr?0:i}];{let a=[];switch(t){case oe.PAUSED:case oe.CUED:case oe.UNSTARTED:r&&a.push({type:"play"})}return o&&ap(o,i)>=mr&&(console.debug("time is off; seeking",o,i),a.push({type:"seek",timestamp:i})),a}}}function ap(e,n){return Math.abs(e-n)}var sp=0;function up(){let[,e]=Ae(0);return()=>e(++sp)}function ac(e){let n=up(),t=gt(Vu());return Fn(()=>{Qu(e).then(r=>{t.current=r,r.addEventListener("onStateChange",o=>{console.debug(dn(),"player onStateChange",dr(o.data),pt(r.getVideoUrl())),n()}),n()})},[e]),t.current}function cp({broadcast:e,player:n}){var r;let t=o=>j(o,2);return{videoLink:e.type==="video"?{text:e.videoTitle,href:"https://youtube.com/watch?v="+e.videoId}:null,actual:{video:(r=n.videoId)!=null?r:"",playerState:dr(n.state),currentTime:n.time!=null?t(n.time):"-"},scheduled:{video:e.type==="video"?e.videoId:"-",playerState:e.type,currentTime:e.type==="video"?t(e.currentTime):"-"},secondsBehindSchedule:e.type==="video"&&n.time!=null?(e.currentTime-n.time).toFixed(2):"-",timeRemainingInVideo:n.duration!=null&&n.time!=null?t(n.duration-n.time):"-"}}function sc(e){let{broadcast:n,player:t,onClose:r}=e,o=cp({broadcast:n,player:t});return D(_n,null,D("button",{class:"close-button",onClick:r},"close"),D("h1",null,"Culture Machine"),D("p",null,"Made by ",D("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."," ",D("a",{href:"https://github.com/benchristel/tv"},"Source code here"),". Some rights reserved. See the"," ",D("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"license"),"."),D("hr",null),D("h2",null,"Video Info"),D("p",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},"Now playing:"," ",o.videoLink?D("a",{href:o.videoLink.href},o.videoLink.text):"-"),D("table",null,D("thead",null,D("tr",null,D("td",null),D("th",{scope:"col"},"actual"),D("th",{scope:"col"},"scheduled"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"video"),D("td",null,o.actual.video),D("td",null,o.scheduled.video)),D("tr",null,D("th",{scope:"row"},"player state"),D("td",null,o.actual.playerState),D("td",null,o.scheduled.playerState)),D("tr",null,D("th",{scope:"row"},"current time"),D("td",null,o.actual.currentTime),D("td",null,o.scheduled.currentTime)))),D("p",null,"Seconds behind schedule: ",o.secondsBehindSchedule),D("p",null,"Time remaining in video: ",o.timeRemainingInVideo))}var Bi=class extends zi{componentDidUpdate(){let{player:n,commands:t}=this.props;t.forEach(r=>{switch(r.type){case"play":n.playVideo();break;case"cue":n.cueVideoById(r.videoId,r.timestamp);break;case"seek":n.seekTo(r.timestamp);break;default:console.error("unexpected video command type",r.type,r)}})}render(){return null}};function uc(e){return{state:e.getPlayerState(),videoId:pt(e.getVideoUrl()),time:e.getCurrentTime(),duration:e.getDuration()}}function cc(){let[e,n]=Zu(),[t,r]=Ae(!1),[o,l]=Ae(No[0]),i=oc(),a=e?o.getBroadcast(i):lc(),s=Yu(ac("player-container")),c=uc(s),v=c.state,N=v!==oe.PLAYING,g=ic(a,c);return D(fp,{effects:D(Bi,{commands:g,player:s}),screen:D("div",{className:t?"info-pane-open":""},D("div",{className:"player-assembly"},D("div",{id:"player-container"}),N&&D("div",{className:"black-screen"},D(Xu,{code:v,channel:o})),!e&&D(dp,{onClick:n})),D("div",{className:"info-pane"},D(sc,{player:c,broadcast:a,onClose:()=>r(!1)})),D("div",{className:"info-pane-close-overlay","aria-hidden":!0,onClick:()=>r(!1)})),controlPanel:D(_n,null,D(rc,{onChannelSelected:E=>{l(E),n()}}),D("button",{className:t?"info-button info-button-info-pane-open":"info-button",onClick:()=>r(!t)},"Info"))})}function fp(e){return D("div",{className:"App"},D("div",{className:"bezel"},D("div",{className:"screen"},e.screen),D("div",{style:{height:"12px"}}),D("div",{className:"controls"},e.controlPanel),e.effects))}function dp(e){return D("button",{id:"start",onClick:e.onClick},"▸ Play")}function fc(){let[e,n]=Ae("");return Fn(()=>{Fu(Bu()).then(Wu).then(n).catch(t=>n(t.message))},[]),/fail/i.test(e)?D("div",{className:"TestResults"},D("code",null,D("pre",null,e))):null}Ni(D(cc,null),document.getElementById("app"));Ni(D(fc,null),document.getElementById("test-results"));
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
