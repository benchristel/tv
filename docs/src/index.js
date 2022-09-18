var Tr=(e,t,n)=>new Promise((r,o)=>{var l=s=>{try{a(n.next(s))}catch(c){o(c)}},i=s=>{try{a(n.throw(s))}catch(c){o(c)}},a=s=>s.done?r(s.value):Promise.resolve(s.value).then(l,i);a((n=n.apply(e,t)).next())});function Ke(e,t,n){return n={path:t,exports:{},require:function(r,o){return vc(r,o==null?n.path:o)}},e(n,n.exports),n.exports}function vc(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Vi=Object.getOwnPropertySymbols,Tc=Object.prototype.hasOwnProperty,Sc=Object.prototype.propertyIsEnumerable;function Ec(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function wc(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(l){return t[l]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(l){o[l]=l}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch(l){return!1}}var Cc=wc()?Object.assign:function(e,t){for(var n,r=Ec(e),o,l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var i in n)Tc.call(n,i)&&(r[i]=n[i]);if(Vi){o=Vi(n);for(var a=0;a<o.length;a++)Sc.call(n,o[a])&&(r[o[a]]=n[o[a]])}}return r},j=Cc;var kc=Ke(function(e,t){var n=60103,r=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,l=60110,i=60112;t.Suspense=60113;var a=60115,s=60116;if(typeof Symbol=="function"&&Symbol.for){var c=Symbol.for;n=c("react.element"),r=c("react.portal"),t.Fragment=c("react.fragment"),t.StrictMode=c("react.strict_mode"),t.Profiler=c("react.profiler"),o=c("react.provider"),l=c("react.context"),i=c("react.forward_ref"),t.Suspense=c("react.suspense"),a=c("react.memo"),s=c("react.lazy")}var T=typeof Symbol=="function"&&Symbol.iterator;function G(h){return h===null||typeof h!="object"?null:(h=T&&h[T]||h["@@iterator"],typeof h=="function"?h:null)}function y(h){for(var w="https://reactjs.org/docs/error-decoder.html?invariant="+h,U=1;U<arguments.length;U++)w+="&args[]="+encodeURIComponent(arguments[U]);return"Minified React error #"+h+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H={};function M(h,w,U){this.props=h,this.context=w,this.refs=H,this.updater=U||k}M.prototype.isReactComponent={},M.prototype.setState=function(h,w){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error(y(85));this.updater.enqueueSetState(this,h,w,"setState")},M.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function d(){}d.prototype=M.prototype;function u(h,w,U){this.props=h,this.context=w,this.refs=H,this.updater=U||k}var f=u.prototype=new d;f.constructor=u,j(f,M.prototype),f.isPureReactComponent=!0;var p={current:null},m=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function C(h,w,U){var Y,v={},R=null,A=null;if(w!=null)for(Y in w.ref!==void 0&&(A=w.ref),w.key!==void 0&&(R=""+w.key),w)m.call(w,Y)&&!N.hasOwnProperty(Y)&&(v[Y]=w[Y]);var L=arguments.length-2;if(L===1)v.children=U;else if(1<L){for(var _=Array(L),te=0;te<L;te++)_[te]=arguments[te+2];v.children=_}if(h&&h.defaultProps)for(Y in L=h.defaultProps,L)v[Y]===void 0&&(v[Y]=L[Y]);return{$$typeof:n,type:h,key:R,ref:A,props:v,_owner:p.current}}function I(h,w){return{$$typeof:n,type:h.type,key:w,ref:h.ref,props:h.props,_owner:h._owner}}function x(h){return typeof h=="object"&&h!==null&&h.$$typeof===n}function W(h){var w={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(U){return w[U]})}var Z=/\/+/g;function ve(h,w){return typeof h=="object"&&h!==null&&h.key!=null?W(""+h.key):w.toString(36)}function Ft(h,w,U,Y,v){var R=typeof h;(R==="undefined"||R==="boolean")&&(h=null);var A=!1;if(h===null)A=!0;else switch(R){case"string":case"number":A=!0;break;case"object":switch(h.$$typeof){case n:case r:A=!0}}if(A)return A=h,v=v(A),h=Y===""?"."+ve(A,0):Y,Array.isArray(v)?(U="",h!=null&&(U=h.replace(Z,"$&/")+"/"),Ft(v,w,U,"",function(te){return te})):v!=null&&(x(v)&&(v=I(v,U+(!v.key||A&&A.key===v.key?"":(""+v.key).replace(Z,"$&/")+"/")+h)),w.push(v)),1;if(A=0,Y=Y===""?".":Y+":",Array.isArray(h))for(var L=0;L<h.length;L++){R=h[L];var _=Y+ve(R,L);A+=Ft(R,w,U,_,v)}else if(_=G(h),typeof _=="function")for(h=_.call(h),L=0;!(R=h.next()).done;)R=R.value,_=Y+ve(R,L++),A+=Ft(R,w,U,_,v);else if(R==="object")throw w=""+h,Error(y(31,w==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":w));return A}function ae(h,w,U){if(h==null)return h;var Y=[],v=0;return Ft(h,Y,"","",function(R){return w.call(U,R,v++)}),Y}function le(h){if(h._status===-1){var w=h._result;w=w(),h._status=0,h._result=w,w.then(function(U){h._status===0&&(U=U.default,h._status=1,h._result=U)},function(U){h._status===0&&(h._status=2,h._result=U)})}if(h._status===1)return h._result;throw h._result}var yt={current:null};function se(){var h=yt.current;if(h===null)throw Error(y(321));return h}var vt={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:p,IsSomeRendererActing:{current:!1},assign:j};t.Children={map:ae,forEach:function(h,w,U){ae(h,function(){w.apply(this,arguments)},U)},count:function(h){var w=0;return ae(h,function(){w++}),w},toArray:function(h){return ae(h,function(w){return w})||[]},only:function(h){if(!x(h))throw Error(y(143));return h}},t.Component=M,t.PureComponent=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vt,t.cloneElement=function(h,w,U){if(h==null)throw Error(y(267,h));var Y=j({},h.props),v=h.key,R=h.ref,A=h._owner;if(w!=null){if(w.ref!==void 0&&(R=w.ref,A=p.current),w.key!==void 0&&(v=""+w.key),h.type&&h.type.defaultProps)var L=h.type.defaultProps;for(_ in w)m.call(w,_)&&!N.hasOwnProperty(_)&&(Y[_]=w[_]===void 0&&L!==void 0?L[_]:w[_])}var _=arguments.length-2;if(_===1)Y.children=U;else if(1<_){L=Array(_);for(var te=0;te<_;te++)L[te]=arguments[te+2];Y.children=L}return{$$typeof:n,type:h.type,key:v,ref:R,props:Y,_owner:A}},t.createContext=function(h,w){return w===void 0&&(w=null),h={$$typeof:l,_calculateChangedBits:w,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider={$$typeof:o,_context:h},h.Consumer=h},t.createElement=C,t.createFactory=function(h){var w=C.bind(null,h);return w.type=h,w},t.createRef=function(){return{current:null}},t.forwardRef=function(h){return{$$typeof:i,render:h}},t.isValidElement=x,t.lazy=function(h){return{$$typeof:s,_payload:{_status:-1,_result:h},_init:le}},t.memo=function(h,w){return{$$typeof:a,type:h,compare:w===void 0?null:w}},t.useCallback=function(h,w){return se().useCallback(h,w)},t.useContext=function(h,w){return se().useContext(h,w)},t.useDebugValue=function(){},t.useEffect=function(h,w){return se().useEffect(h,w)},t.useImperativeHandle=function(h,w,U){return se().useImperativeHandle(h,w,U)},t.useLayoutEffect=function(h,w){return se().useLayoutEffect(h,w)},t.useMemo=function(h,w){return se().useMemo(h,w)},t.useReducer=function(h,w,U){return se().useReducer(h,w,U)},t.useRef=function(h){return se().useRef(h)},t.useState=function(h){return se().useState(h)},t.version="17.0.2"}),O=Ke(function(e){e.exports=kc});var _h=O.Children,Qi=O.Component,_t=O.Fragment,Uh=O.Profiler,Oh=O.PureComponent,Bh=O.StrictMode,jh=O.Suspense,zh=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yh=O.cloneElement,Vh=O.createContext,P=O.createElement,Qh=O.createFactory,Jh=O.createRef,Kh=O.forwardRef,Zh=O.isValidElement,Xh=O.lazy,qh=O.memo,bh=O.useCallback,$h=O.useContext,ep=O.useDebugValue,Ut=O.useEffect,tp=O.useImperativeHandle,np=O.useLayoutEffect,rp=O.useMemo,op=O.useReducer,Tn=O.useRef,He=O.useState,lp=O.version;var Rc=Ke(function(e,t){var n,r,o,l;if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var c=null,T=null,G=function(){if(c!==null)try{var v=t.unstable_now();c(!0,v),c=null}catch(R){throw setTimeout(G,0),R}};n=function(v){c!==null?setTimeout(n,0,v):(c=v,setTimeout(G,0))},r=function(v,R){T=setTimeout(v,R)},o=function(){clearTimeout(T)},t.unstable_shouldYield=function(){return!1},l=t.unstable_forceFrameRate=function(){}}else{var y=window.setTimeout,k=window.clearTimeout;if(typeof console!="undefined"){var H=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof H!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var M=!1,d=null,u=-1,f=5,p=0;t.unstable_shouldYield=function(){return t.unstable_now()>=p},l=function(){},t.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<v?Math.floor(1e3/v):5};var m=new MessageChannel,N=m.port2;m.port1.onmessage=function(){if(d!==null){var v=t.unstable_now();p=v+f;try{d(!0,v)?N.postMessage(null):(M=!1,d=null)}catch(R){throw N.postMessage(null),R}}else M=!1},n=function(v){d=v,M||(M=!0,N.postMessage(null))},r=function(v,R){u=y(function(){v(t.unstable_now())},R)},o=function(){k(u),u=-1}}function C(v,R){var A=v.length;v.push(R);e:for(;;){var L=A-1>>>1,_=v[L];if(_!==void 0&&0<W(_,R))v[L]=R,v[A]=_,A=L;else break e}}function I(v){return v=v[0],v===void 0?null:v}function x(v){var R=v[0];if(R!==void 0){var A=v.pop();if(A!==R){v[0]=A;e:for(var L=0,_=v.length;L<_;){var te=2*(L+1)-1,Tt=v[te],vn=te+1,Lt=v[vn];if(Tt!==void 0&&0>W(Tt,A))Lt!==void 0&&0>W(Lt,Tt)?(v[L]=Lt,v[vn]=A,L=vn):(v[L]=Tt,v[te]=A,L=te);else if(Lt!==void 0&&0>W(Lt,A))v[L]=Lt,v[vn]=A,L=vn;else break e}}return R}return null}function W(v,R){var A=v.sortIndex-R.sortIndex;return A!==0?A:v.id-R.id}var Z=[],ve=[],Ft=1,ae=null,le=3,yt=!1,se=!1,vt=!1;function h(v){for(var R=I(ve);R!==null;){if(R.callback===null)x(ve);else if(R.startTime<=v)x(ve),R.sortIndex=R.expirationTime,C(Z,R);else break;R=I(ve)}}function w(v){if(vt=!1,h(v),!se)if(I(Z)!==null)se=!0,n(U);else{var R=I(ve);R!==null&&r(w,R.startTime-v)}}function U(v,R){se=!1,vt&&(vt=!1,o()),yt=!0;var A=le;try{for(h(R),ae=I(Z);ae!==null&&(!(ae.expirationTime>R)||v&&!t.unstable_shouldYield());){var L=ae.callback;if(typeof L=="function"){ae.callback=null,le=ae.priorityLevel;var _=L(ae.expirationTime<=R);R=t.unstable_now(),typeof _=="function"?ae.callback=_:ae===I(Z)&&x(Z),h(R)}else x(Z);ae=I(Z)}if(ae!==null)var te=!0;else{var Tt=I(ve);Tt!==null&&r(w,Tt.startTime-R),te=!1}return te}finally{ae=null,le=A,yt=!1}}var Y=l;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(v){v.callback=null},t.unstable_continueExecution=function(){se||yt||(se=!0,n(U))},t.unstable_getCurrentPriorityLevel=function(){return le},t.unstable_getFirstCallbackNode=function(){return I(Z)},t.unstable_next=function(v){switch(le){case 1:case 2:case 3:var R=3;break;default:R=le}var A=le;le=R;try{return v()}finally{le=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=Y,t.unstable_runWithPriority=function(v,R){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var A=le;le=v;try{return R()}finally{le=A}},t.unstable_scheduleCallback=function(v,R,A){var L=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?L+A:L):A=L,v){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=A+_,v={id:Ft++,callback:R,priorityLevel:v,startTime:A,expirationTime:_,sortIndex:-1},A>L?(v.sortIndex=A,C(ve,v),I(Z)===null&&v===I(ve)&&(vt?o():vt=!0,r(w,A-L))):(v.sortIndex=_,C(Z,v),se||yt||(se=!0,n(U))),v},t.unstable_wrapCallback=function(v){var R=le;return function(){var A=le;le=R;try{return v.apply(this,arguments)}finally{le=A}}}}),ne=Ke(function(e){e.exports=Rc});function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!O)throw Error(S(227));var Ji=new Set,Sn={};function St(e,t){Ot(e,t),Ot(e+"Capture",t)}function Ot(e,t){for(Sn[e]=t,e=0;e<t.length;e++)Ji.add(t[e])}var Be=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Dc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ki=Object.prototype.hasOwnProperty,Zi={},Xi={};function Pc(e){return Ki.call(Xi,e)?!0:Ki.call(Zi,e)?!1:Dc.test(e)?Xi[e]=!0:(Zi[e]=!0,!1)}function Mc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ic(e,t,n,r){if(t===null||typeof t=="undefined"||Mc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wo=/[\-:]([a-z])/g;function xo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wo,xo);ue[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wo,xo);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wo,xo);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fo(e,t,n,r){var o=ue.hasOwnProperty(t)?ue[t]:null,l=o!==null?o.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");l||(Ic(t,n,o,r)&&(n=null),r||o===null?Pc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,En=60103,wt=60106,Ze=60107,Lo=60108,wn=60114,_o=60109,Uo=60110,Sr=60112,Cn=60113,Er=60120,wr=60115,Oo=60116,Bo=60121,jo=60128,qi=60129,zo=60130,Yo=60131;typeof Symbol=="function"&&Symbol.for&&(re=Symbol.for,En=re("react.element"),wt=re("react.portal"),Ze=re("react.fragment"),Lo=re("react.strict_mode"),wn=re("react.profiler"),_o=re("react.provider"),Uo=re("react.context"),Sr=re("react.forward_ref"),Cn=re("react.suspense"),Er=re("react.suspense_list"),wr=re("react.memo"),Oo=re("react.lazy"),Bo=re("react.block"),re("react.scope"),jo=re("react.opaque.id"),qi=re("react.debug_trace_mode"),zo=re("react.offscreen"),Yo=re("react.legacy_hidden"));var re,bi=typeof Symbol=="function"&&Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=bi&&e[bi]||e["@@iterator"],typeof e=="function"?e:null)}var Vo;function Rn(e){if(Vo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vo=t&&t[1]||""}return`
`+Vo+e}var Qo=!1;function Cr(e,t){if(!e||Qo)return"";Qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a])return`
`+o[i].replace(" at new "," at ");while(1<=i&&0<=a);break}}}finally{Qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function Ac(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Cr(e.type,!1),e;case 11:return e=Cr(e.type.render,!1),e;case 22:return e=Cr(e.type._render,!1),e;case 1:return e=Cr(e.type,!0),e;default:return""}}function Bt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ze:return"Fragment";case wt:return"Portal";case wn:return"Profiler";case Lo:return"StrictMode";case Cn:return"Suspense";case Er:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Uo:return(e.displayName||"Context")+".Consumer";case _o:return(e._context.displayName||"Context")+".Provider";case Sr:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case wr:return Bt(e.type);case Bo:return Bt(e._render);case Oo:t=e._payload,e=e._init;try{return Bt(e(t))}catch(n){}}return null}function Xe(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function $i(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gc(e){var t=$i(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Gc(e))}function ea(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$i(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Jo(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ta(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xe(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function na(e,t){t=t.checked,t!=null&&Fo(e,"checked",t,!1)}function Zo(e,t){na(e,t);var n=Xe(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ko(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ko(e,t.type,Xe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ra(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ko(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Hc(e){var t="";return O.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Xo(e,t){return e=j({children:void 0},t),(t=Hc(t.children))&&(e.children=t),e}function jt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xe(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xe(n)}}function la(e,t){var n=Xe(t.value),r=Xe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var bo={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function aa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $o(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?aa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,sa=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!==bo.svg||"innerHTML"in e)e.innerHTML=t;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nc=["Webkit","ms","Moz","O"];Object.keys(Pn).forEach(function(e){Nc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pn[t]=Pn[e]})});function ua(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pn.hasOwnProperty(e)&&Pn[e]?(""+t).trim():t+"px"}function ca(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ua(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Wc=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(e,t){if(t){if(Wc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rl=null,zt=null,Yt=null;function fa(e){if(e=Mn(e)){if(typeof rl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Pr(t),rl(e.stateNode,e.type,t))}}function da(e){zt?Yt?Yt.push(e):Yt=[e]:zt=e}function ha(){if(zt){var e=zt,t=Yt;if(Yt=zt=null,fa(e),t)for(e=0;e<t.length;e++)fa(t[e])}}function ol(e,t){return e(t)}function pa(e,t,n,r,o){return e(t,n,r,o)}function ll(){}var ma=ol,Ct=!1,il=!1;function al(){(zt!==null||Yt!==null)&&(ll(),ha())}function xc(e,t,n){if(il)return e(t,n);il=!0;try{return ma(e,t,n)}finally{il=!1,al()}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=Pr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var sl=!1;if(Be)try{Vt={},Object.defineProperty(Vt,"passive",{get:function(){sl=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch(e){sl=!1}var Vt;function Fc(e,t,n,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(T){this.onError(T)}}var An=!1,Mr=null,Ir=!1,ul=null,Lc={onError:function(e){An=!0,Mr=e}};function _c(e,t,n,r,o,l,i,a,s){An=!1,Mr=null,Fc.apply(Lc,arguments)}function Uc(e,t,n,r,o,l,i,a,s){if(_c.apply(this,arguments),An){if(An){var c=Mr;An=!1,Mr=null}else throw Error(S(198));Ir||(Ir=!0,ul=c)}}function kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!=0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ga(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ya(e){if(kt(e)!==e)throw Error(S(188))}function Oc(e){var t=e.alternate;if(!t){if(t=kt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return ya(o),e;if(l===r)return ya(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function va(e){if(e=Oc(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Ta(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Sa,cl,Ea,wa,fl=!1,xe=[],qe=null,be=null,$e=null,Gn=new Map,Hn=new Map,Nn=[],Ca="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dl(e,t,n,r,o){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:o,targetContainers:[r]}}function ka(e,t){switch(e){case"focusin":case"focusout":qe=null;break;case"dragenter":case"dragleave":be=null;break;case"mouseover":case"mouseout":$e=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Wn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e=dl(t,n,r,o,l),t!==null&&(t=Mn(t),t!==null&&cl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Bc(e,t,n,r,o){switch(t){case"focusin":return qe=Wn(qe,e,t,n,r,o),!0;case"dragenter":return be=Wn(be,e,t,n,r,o),!0;case"mouseover":return $e=Wn($e,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Gn.set(l,Wn(Gn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Hn.set(l,Wn(Hn.get(l)||null,e,t,n,r,o)),!0}return!1}function jc(e){var t=Rt(e.target);if(t!==null){var n=kt(t);if(n!==null){if(t=n.tag,t===13){if(t=ga(n),t!==null){e.blockedOn=t,wa(e.lanePriority,function(){ne.unstable_runWithPriority(e.priority,function(){Ea(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Mn(n),t!==null&&cl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ra(e,t,n){Ar(e)&&n.delete(t)}function zc(){for(fl=!1;0<xe.length;){var e=xe[0];if(e.blockedOn!==null){e=Mn(e.blockedOn),e!==null&&Sa(e);break}for(var t=e.targetContainers;0<t.length;){var n=hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&xe.shift()}qe!==null&&Ar(qe)&&(qe=null),be!==null&&Ar(be)&&(be=null),$e!==null&&Ar($e)&&($e=null),Gn.forEach(Ra),Hn.forEach(Ra)}function xn(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,ne.unstable_scheduleCallback(ne.unstable_NormalPriority,zc)))}function Da(e){function t(o){return xn(o,e)}if(0<xe.length){xn(xe[0],e);for(var n=1;n<xe.length;n++){var r=xe[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qe!==null&&xn(qe,e),be!==null&&xn(be,e),$e!==null&&xn($e,e),Gn.forEach(t),Hn.forEach(t),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)jc(n),n.blockedOn===null&&Nn.shift()}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},pl={},Pa={};Be&&(Pa=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function Hr(e){if(pl[e])return pl[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pa)return pl[e]=t[n];return e}var Ma=Hr("animationend"),Ia=Hr("animationiteration"),Aa=Hr("animationstart"),Ga=Hr("transitionend"),Ha=new Map,ml=new Map,Yc=["abort","abort",Ma,"animationEnd",Ia,"animationIteration",Aa,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Ga,"transitionEnd","waiting","waiting"];function gl(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];o="on"+(o[0].toUpperCase()+o.slice(1)),ml.set(r,t),Ha.set(r,o),St(o,[r])}}var Vc=ne.unstable_now;Vc();var V=8;function Jt(e){if((1&e)!=0)return V=15,1;if((2&e)!=0)return V=14,2;if((4&e)!=0)return V=13,4;var t=24&e;return t!==0?(V=12,t):(e&32)!=0?(V=11,32):(t=192&e,t!==0?(V=10,t):(e&256)!=0?(V=9,256):(t=3584&e,t!==0?(V=8,t):(e&4096)!=0?(V=7,4096):(t=4186112&e,t!==0?(V=6,t):(t=62914560&e,t!==0?(V=5,t):e&67108864?(V=4,67108864):(e&134217728)!=0?(V=3,134217728):(t=805306368&e,t!==0?(V=2,t):(1073741824&e)!=0?(V=1,1073741824):(V=8,e))))))}function Qc(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Jc(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(S(358,e))}}function Fn(e,t){var n=e.pendingLanes;if(n===0)return V=0;var r=0,o=0,l=e.expiredLanes,i=e.suspendedLanes,a=e.pingedLanes;if(l!==0)r=l,o=V=15;else if(l=n&134217727,l!==0){var s=l&~i;s!==0?(r=Jt(s),o=V):(a&=l,a!==0&&(r=Jt(a),o=V))}else l=n&~i,l!==0?(r=Jt(l),o=V):a!==0&&(r=Jt(a),o=V);if(r===0)return 0;if(r=31-et(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&i)==0){if(Jt(t),o<=V)return t;V=o}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),o=1<<n,r|=e[n],t&=~o;return r}function Na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nr(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Kt(24&~t),e===0?Nr(10,t):e;case 10:return e=Kt(192&~t),e===0?Nr(8,t):e;case 8:return e=Kt(3584&~t),e===0&&(e=Kt(4186112&~t),e===0&&(e=512)),e;case 2:return t=Kt(805306368&~t),t===0&&(t=268435456),t}throw Error(S(358,e))}function Kt(e){return e&-e}function yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wr(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-et(t),e[t]=n}var et=Math.clz32?Math.clz32:Kc,Zc=Math.log,Xc=Math.LN2;function Kc(e){return e===0?32:31-(Zc(e)/Xc|0)|0}var qc=ne.unstable_UserBlockingPriority,bc=ne.unstable_runWithPriority,xr=!0;function $c(e,t,n,r){Ct||ll();var o=vl,l=Ct;Ct=!0;try{pa(o,e,t,n,r)}finally{(Ct=l)||al()}}function ef(e,t,n,r){bc(qc,vl.bind(null,e,t,n,r))}function vl(e,t,n,r){if(xr){var o;if((o=(t&4)==0)&&0<xe.length&&-1<Ca.indexOf(e))e=dl(null,e,t,n,r),xe.push(e);else{var l=hl(e,t,n,r);if(l===null)o&&ka(e,r);else{if(o){if(-1<Ca.indexOf(e)){e=dl(l,e,t,n,r),xe.push(e);return}if(Bc(l,e,t,n,r))return;ka(e,r)}Wa(e,t,r,null,n)}}}}function hl(e,t,n,r){var o=nl(r);if(o=Rt(o),o!==null){var l=kt(o);if(l===null)o=null;else{var i=l.tag;if(i===13){if(o=ga(l),o!==null)return o;o=null}else if(i===3){if(l.stateNode.hydrate)return l.tag===3?l.stateNode.containerInfo:null;o=null}else l!==o&&(o=null)}}return Wa(e,t,r,o,n),null}var tt=null,Tl=null,Fr=null;function xa(){if(Fr)return Fr;var e,t=Tl,n=t.length,r,o="value"in tt?tt.value:tt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Fr=o.slice(e,1<r?1-r:void 0)}function Lr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function Fa(){return!1}function Ce(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_r:Fa,this.isPropagationStopped=Fa,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var Zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Ce(Zt),Ln=j({},Zt,{view:0,detail:0}),tf=Ce(Ln),El,wl,_n,Ur=j({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(El=e.screenX-_n.screenX,wl=e.screenY-_n.screenY):wl=El=0,_n=e),El)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),La=Ce(Ur),nf=j({},Ur,{dataTransfer:0}),rf=Ce(nf),of=j({},Ln,{relatedTarget:0}),kl=Ce(of),lf=j({},Zt,{animationName:0,elapsedTime:0,pseudoElement:0}),af=Ce(lf),sf=j({},Zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uf=Ce(sf),cf=j({},Zt,{data:0}),_a=Ce(cf),ff={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hf[e])?!!t[e]:!1}function Cl(){return pf}var mf=j({},Ln,{key:function(e){if(e.key){var t=ff[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=Ce(mf),yf=j({},Ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ua=Ce(yf),vf=j({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),Tf=Ce(vf),Sf=j({},Zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ef=Ce(Sf),wf=j({},Ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cf=Ce(wf),kf=[9,13,27,32],Rl=Be&&"CompositionEvent"in window,Un=null;Be&&"documentMode"in document&&(Un=document.documentMode);var Rf=Be&&"TextEvent"in window&&!Un,Oa=Be&&(!Rl||Un&&8<Un&&11>=Un),Ba=String.fromCharCode(32),ja=!1;function za(e,t){switch(e){case"keyup":return kf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ya(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function Df(e,t){switch(e){case"compositionend":return Ya(t);case"keypress":return t.which!==32?null:(ja=!0,Ba);case"textInput":return e=t.data,e===Ba&&ja?null:e;default:return null}}function Pf(e,t){if(Xt)return e==="compositionend"||!Rl&&za(e,t)?(e=xa(),Fr=Tl=tt=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oa&&t.locale!=="ko"?null:t.data;default:return null}}var Mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Va(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mf[e.type]:t==="textarea"}function Qa(e,t,n,r){da(r),t=Or(t,"onChange"),0<t.length&&(n=new Sl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Bn=null;function If(e){Ja(e,0)}function Br(e){var t=qt(e);if(ea(t))return e}function Af(e,t){if(e==="change")return t}var Ka=!1;Be&&(Be?(zr="oninput"in document,zr||(Dl=document.createElement("div"),Dl.setAttribute("oninput","return;"),zr=typeof Dl.oninput=="function"),jr=zr):jr=!1,Ka=jr&&(!document.documentMode||9<document.documentMode));var jr,zr,Dl;function Xa(){On&&(On.detachEvent("onpropertychange",Za),Bn=On=null)}function Za(e){if(e.propertyName==="value"&&Br(Bn)){var t=[];if(Qa(t,Bn,e,nl(e)),e=If,Ct)e(t);else{Ct=!0;try{ol(e,t)}finally{Ct=!1,al()}}}}function Gf(e,t,n){e==="focusin"?(Xa(),On=t,Bn=n,On.attachEvent("onpropertychange",Za)):e==="focusout"&&Xa()}function Hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Br(Bn)}function Nf(e,t){if(e==="click")return Br(t)}function Wf(e,t){if(e==="input"||e==="change")return Br(t)}function xf(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:xf,Ff=Object.prototype.hasOwnProperty;function jn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Ff.call(t,n[r])||!Re(e[n[r]],t[n[r]]))return!1;return!0}function qa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ba(e,t){var n=qa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qa(n)}}function $a(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$a(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function es(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch(r){n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Lf=Be&&"documentMode"in document&&11>=document.documentMode,bt=null,Ml=null,zn=null,Il=!1;function ts(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||bt==null||bt!==Rr(r)||(r=bt,"selectionStart"in r&&Pl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&jn(zn,r)||(zn=r,r=Or(Ml,"onSelect"),0<r.length&&(t=new Sl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bt)))}gl("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);gl("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);gl(Yc,2);for(var ns="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Al=0;Al<ns.length;Al++)ml.set(ns[Al],0);Ot("onMouseEnter",["mouseout","mouseover"]);Ot("onMouseLeave",["mouseout","mouseover"]);Ot("onPointerEnter",["pointerout","pointerover"]);Ot("onPointerLeave",["pointerout","pointerover"]);St("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));St("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));St("onBeforeInput",["compositionend","keypress","textInput","paste"]);St("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));St("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));St("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rs=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function os(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uc(r,t,void 0,e),e.currentTarget=null}function Ja(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;os(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;os(o,a,c),l=s}}}if(Ir)throw e=ul,Ir=!1,ul=null,e}function Q(e,t){var n=is(t),r=e+"__bubble";n.has(r)||(ls(t,e,2,!1),n.add(r))}var as="_reactListening"+Math.random().toString(36).slice(2);function us(e){e[as]||(e[as]=!0,Ji.forEach(function(t){rs.has(t)||ss(t,!1,e,null),ss(t,!0,e,null)}))}function ss(e,t,n,r){var o=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,l=n;if(e==="selectionchange"&&n.nodeType!==9&&(l=n.ownerDocument),r!==null&&!t&&rs.has(e)){if(e!=="scroll")return;o|=2,l=r}var i=is(l),a=e+"__"+(t?"capture":"bubble");i.has(a)||(t&&(o|=4),ls(l,e,o,t),i.add(a))}function ls(e,t,n,r){var o=ml.get(t);switch(o===void 0?2:o){case 0:o=$c;break;case 1:o=ef;break;default:o=vl}n=o.bind(null,t,n,e),o=void 0,!sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Wa(e,t,n,r,o){var l=r;if((t&1)==0&&(t&2)==0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Rt(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}xc(function(){var c=l,T=nl(n),G=[];e:{var y=Ha.get(e);if(y!==void 0){var k=Sl,H=e;switch(e){case"keypress":if(Lr(n)===0)break e;case"keydown":case"keyup":k=gf;break;case"focusin":H="focus",k=kl;break;case"focusout":H="blur",k=kl;break;case"beforeblur":case"afterblur":k=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=La;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Tf;break;case Ma:case Ia:case Aa:k=af;break;case Ga:k=Ef;break;case"scroll":k=tf;break;case"wheel":k=Cf;break;case"copy":case"cut":case"paste":k=uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ua}var M=(t&4)!=0,d=!M&&e==="scroll",u=M?y!==null?y+"Capture":null:y;M=[];for(var f=c,p;f!==null;){p=f;var m=p.stateNode;if(p.tag===5&&m!==null&&(p=m,u!==null&&(m=In(f,u),m!=null&&M.push(Vn(f,m,p)))),d)break;f=f.return}0<M.length&&(y=new k(y,H,null,n,T),G.push({event:y,listeners:M}))}}if((t&7)==0){e:{if(y=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",y&&(t&16)==0&&(H=n.relatedTarget||n.fromElement)&&(Rt(H)||H[en]))break e;if((k||y)&&(y=T.window===T?T:(y=T.ownerDocument)?y.defaultView||y.parentWindow:window,k?(H=n.relatedTarget||n.toElement,k=c,H=H?Rt(H):null,H!==null&&(d=kt(H),H!==d||H.tag!==5&&H.tag!==6)&&(H=null)):(k=null,H=c),k!==H)){if(M=La,m="onMouseLeave",u="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(M=Ua,m="onPointerLeave",u="onPointerEnter",f="pointer"),d=k==null?y:qt(k),p=H==null?y:qt(H),y=new M(m,f+"leave",k,n,T),y.target=d,y.relatedTarget=p,m=null,Rt(T)===c&&(M=new M(u,f+"enter",H,n,T),M.target=p,M.relatedTarget=d,m=M),d=m,k&&H)t:{for(M=k,u=H,f=0,p=M;p;p=$t(p))f++;for(p=0,m=u;m;m=$t(m))p++;for(;0<f-p;)M=$t(M),f--;for(;0<p-f;)u=$t(u),p--;for(;f--;){if(M===u||u!==null&&M===u.alternate)break t;M=$t(M),u=$t(u)}M=null}else M=null;k!==null&&cs(G,y,k,M,!1),H!==null&&d!==null&&cs(G,d,H,M,!0)}}e:{if(y=c?qt(c):window,k=y.nodeName&&y.nodeName.toLowerCase(),k==="select"||k==="input"&&y.type==="file")var N=Af;else if(Va(y))if(Ka)N=Wf;else{N=Hf;var C=Gf}else(k=y.nodeName)&&k.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(N=Nf);if(N&&(N=N(e,c))){Qa(G,N,n,T);break e}C&&C(e,y,c),e==="focusout"&&(C=y._wrapperState)&&C.controlled&&y.type==="number"&&Ko(y,"number",y.value)}switch(C=c?qt(c):window,e){case"focusin":(Va(C)||C.contentEditable==="true")&&(bt=C,Ml=c,zn=null);break;case"focusout":zn=Ml=bt=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,ts(G,n,T);break;case"selectionchange":if(Lf)break;case"keydown":case"keyup":ts(G,n,T)}var I;if(Rl)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Xt?za(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Oa&&n.locale!=="ko"&&(Xt||x!=="onCompositionStart"?x==="onCompositionEnd"&&Xt&&(I=xa()):(tt=T,Tl="value"in tt?tt.value:tt.textContent,Xt=!0)),C=Or(c,x),0<C.length&&(x=new _a(x,e,null,n,T),G.push({event:x,listeners:C}),I?x.data=I:(I=Ya(n),I!==null&&(x.data=I)))),(I=Rf?Df(e,n):Pf(e,n))&&(c=Or(c,"onBeforeInput"),0<c.length&&(T=new _a("onBeforeInput","beforeinput",null,n,T),G.push({event:T,listeners:c}),T.data=I))}Ja(G,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Or(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=In(e,n),l!=null&&r.unshift(Vn(e,l,o)),l=In(e,t),l!=null&&r.push(Vn(e,l,o))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cs(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=In(n,l),s!=null&&i.unshift(Vn(n,s,a))):o||(s=In(n,l),s!=null&&i.push(Vn(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}function Yr(){}var Gl=null,Hl=null;function fs(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Nl(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ds=typeof setTimeout=="function"?setTimeout:void 0,_f=typeof clearTimeout=="function"?clearTimeout:void 0;function Wl(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function hs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xl=0;function Uf(e){return{$$typeof:jo,toString:e,valueOf:e}}var Vr=Math.random().toString(36).slice(2),nt="__reactFiber$"+Vr,Qr="__reactProps$"+Vr,en="__reactContainer$"+Vr,ps="__reactEvents$"+Vr;function Rt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hs(e);e!==null;){if(n=e[nt])return n;e=hs(e)}return t}e=n,n=e.parentNode}return null}function Mn(e){return e=e[nt]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Pr(e){return e[Qr]||null}function is(e){var t=e[ps];return t===void 0&&(t=e[ps]=new Set),t}var Fl=[],nn=-1;function rt(e){return{current:e}}function J(e){0>nn||(e.current=Fl[nn],Fl[nn]=null,nn--)}function X(e,t){nn++,Fl[nn]=e.current,e.current=t}var ot={},de=rt(ot),Te=rt(!1),Dt=ot;function rn(e,t){var n=e.type.contextTypes;if(!n)return ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Se(e){return e=e.childContextTypes,e!=null}function Jr(){J(Te),J(de)}function ms(e,t,n){if(de.current!==ot)throw Error(S(168));X(de,t),X(Te,n)}function gs(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(S(108,Bt(t)||"Unknown",o));return j({},n,r)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ot,Dt=de.current,X(de,e),X(Te,Te.current),!0}function ys(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=gs(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,J(Te),J(de),X(de,e)):J(Te),X(Te,n)}var Ll=null,Pt=null,Of=ne.unstable_runWithPriority,_l=ne.unstable_scheduleCallback,Ul=ne.unstable_cancelCallback,Bf=ne.unstable_shouldYield,vs=ne.unstable_requestPaint,Ol=ne.unstable_now,jf=ne.unstable_getCurrentPriorityLevel,Zr=ne.unstable_ImmediatePriority,Ts=ne.unstable_UserBlockingPriority,Ss=ne.unstable_NormalPriority,Es=ne.unstable_LowPriority,ws=ne.unstable_IdlePriority,Bl={},zf=vs!==void 0?vs:function(){},je=null,Xr=null,jl=!1,Cs=Ol(),he=1e4>Cs?Ol:function(){return Ol()-Cs};function on(){switch(jf()){case Zr:return 99;case Ts:return 98;case Ss:return 97;case Es:return 96;case ws:return 95;default:throw Error(S(332))}}function ks(e){switch(e){case 99:return Zr;case 98:return Ts;case 97:return Ss;case 96:return Es;case 95:return ws;default:throw Error(S(332))}}function Mt(e,t){return e=ks(e),Of(e,t)}function Qn(e,t,n){return e=ks(e),_l(e,t,n)}function Fe(){if(Xr!==null){var e=Xr;Xr=null,Ul(e)}Rs()}function Rs(){if(!jl&&je!==null){jl=!0;var e=0;try{var t=je;Mt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),je=null}catch(n){throw je!==null&&(je=je.slice(e+1)),_l(Zr,Fe),n}finally{jl=!1}}}var Yf=Et.ReactCurrentBatchConfig;function Ne(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qr=rt(null),br=null,ln=null,$r=null;function zl(){$r=ln=br=null}function Yl(e){var t=qr.current;J(qr),e.type._context._currentValue=t}function Ds(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function an(e,t){br=e,$r=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!=0&&(We=!0),e.firstContext=null)}function De(e,t){if($r!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&($r=e,t=1073741823),t={context:e,observedBits:t,next:null},ln===null){if(br===null)throw Error(S(308));ln=t,br.dependencies={lanes:0,firstContext:t,responders:null}}else ln=ln.next=t;return e._currentValue}var lt=!1;function Vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Ps(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Ms(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kn(e,t,n,r){var o=e.updateQueue;lt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var T=e.alternate;if(T!==null){T=T.updateQueue;var G=T.lastBaseUpdate;G!==i&&(G===null?T.firstBaseUpdate=c:G.next=c,T.lastBaseUpdate=s)}}if(l!==null){G=o.baseState,i=0,T=c=s=null;do{a=l.lane;var y=l.eventTime;if((r&a)===a){T!==null&&(T=T.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,H=l;switch(a=t,y=n,H.tag){case 1:if(k=H.payload,typeof k=="function"){G=k.call(y,G,a);break e}G=k;break e;case 3:k.flags=k.flags&-4097|64;case 0:if(k=H.payload,a=typeof k=="function"?k.call(y,G,a):k,a==null)break e;G=j({},G,a);break e;case 2:lt=!0}}l.callback!==null&&(e.flags|=32,a=o.effects,a===null?o.effects=[l]:a.push(l))}else y={eventTime:y,lane:a,tag:l.tag,payload:l.payload,callback:l.callback,next:null},T===null?(c=T=y,s=G):T=T.next=y,i|=a;if(l=l.next,l===null){if(a=o.shared.pending,a===null)break;l=a.next,a.next=null,o.lastBaseUpdate=a,o.shared.pending=null}}while(1);T===null&&(s=G),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=T,Jn|=i,e.lanes=i,e.memoizedState=G}}function Is(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var As=new O.Component().refs;function eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var to={isMounted:function(e){return(e=e._reactInternals)?kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=st(e),l=it(r,o);l.payload=t,n!=null&&(l.callback=n),at(e,l),ut(e,o,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=st(e),l=it(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),at(e,l),ut(e,o,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=st(e),o=it(n,r);o.tag=2,t!=null&&(o.callback=t),at(e,o),ut(e,r,n)}};function Gs(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!jn(n,r)||!jn(o,l):!0}function Hs(e,t,n){var r=!1,o=ot,l=t.contextType;return typeof l=="object"&&l!==null?l=De(l):(o=Se(t)?Dt:de.current,r=t.contextTypes,l=(r=r!=null)?rn(e,o):ot),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=to,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ns(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&to.enqueueReplaceState(t,t.state,null)}function Ql(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=As,Vl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=De(l):(l=Se(t)?Dt:de.current,o.context=rn(e,l)),Kn(e,n,o,r),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(eo(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&to.enqueueReplaceState(o,o.state,null),Kn(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4)}var no=Array.isArray;function Zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var i=r.refs;i===As&&(i=r.refs={}),l===null?delete i[o]:i[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ro(e,t){if(e.type!=="textarea")throw Error(S(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function Ws(e){function t(d,u){if(e){var f=d.lastEffect;f!==null?(f.nextEffect=u,d.lastEffect=u):d.firstEffect=d.lastEffect=u,u.nextEffect=null,u.flags=8}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=ct(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags=2,u):f):(d.flags=2,u)):u}function i(d){return e&&d.alternate===null&&(d.flags=2),d}function a(d,u,f,p){return u===null||u.tag!==6?(u=Jl(f,d.mode,p),u.return=d,u):(u=o(u,f),u.return=d,u)}function s(d,u,f,p){return u!==null&&u.elementType===f.type?(p=o(u,f.props),p.ref=Zn(d,u,f),p.return=d,p):(p=oo(f.type,f.key,f.props,null,d.mode,p),p.ref=Zn(d,u,f),p.return=d,p)}function c(d,u,f,p){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Kl(f,d.mode,p),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function T(d,u,f,p,m){return u===null||u.tag!==7?(u=sn(f,d.mode,p,m),u.return=d,u):(u=o(u,f),u.return=d,u)}function G(d,u,f){if(typeof u=="string"||typeof u=="number")return u=Jl(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case En:return f=oo(u.type,u.key,u.props,null,d.mode,f),f.ref=Zn(d,null,u),f.return=d,f;case wt:return u=Kl(u,d.mode,f),u.return=d,u}if(no(u)||kn(u))return u=sn(u,d.mode,f,null),u.return=d,u;ro(d,u)}return null}function y(d,u,f,p){var m=u!==null?u.key:null;if(typeof f=="string"||typeof f=="number")return m!==null?null:a(d,u,""+f,p);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case En:return f.key===m?f.type===Ze?T(d,u,f.props.children,p,m):s(d,u,f,p):null;case wt:return f.key===m?c(d,u,f,p):null}if(no(f)||kn(f))return m!==null?null:T(d,u,f,p,null);ro(d,f)}return null}function k(d,u,f,p,m){if(typeof p=="string"||typeof p=="number")return d=d.get(f)||null,a(u,d,""+p,m);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case En:return d=d.get(p.key===null?f:p.key)||null,p.type===Ze?T(u,d,p.props.children,m,p.key):s(u,d,p,m);case wt:return d=d.get(p.key===null?f:p.key)||null,c(u,d,p,m)}if(no(p)||kn(p))return d=d.get(f)||null,T(u,d,p,m,null);ro(u,p)}return null}function H(d,u,f,p){for(var m=null,N=null,C=u,I=u=0,x=null;C!==null&&I<f.length;I++){C.index>I?(x=C,C=null):x=C.sibling;var W=y(d,C,f[I],p);if(W===null){C===null&&(C=x);break}e&&C&&W.alternate===null&&t(d,C),u=l(W,u,I),N===null?m=W:N.sibling=W,N=W,C=x}if(I===f.length)return n(d,C),m;if(C===null){for(;I<f.length;I++)C=G(d,f[I],p),C!==null&&(u=l(C,u,I),N===null?m=C:N.sibling=C,N=C);return m}for(C=r(d,C);I<f.length;I++)x=k(C,d,I,f[I],p),x!==null&&(e&&x.alternate!==null&&C.delete(x.key===null?I:x.key),u=l(x,u,I),N===null?m=x:N.sibling=x,N=x);return e&&C.forEach(function(Z){return t(d,Z)}),m}function M(d,u,f,p){var m=kn(f);if(typeof m!="function")throw Error(S(150));if(f=m.call(f),f==null)throw Error(S(151));for(var N=m=null,C=u,I=u=0,x=null,W=f.next();C!==null&&!W.done;I++,W=f.next()){C.index>I?(x=C,C=null):x=C.sibling;var Z=y(d,C,W.value,p);if(Z===null){C===null&&(C=x);break}e&&C&&Z.alternate===null&&t(d,C),u=l(Z,u,I),N===null?m=Z:N.sibling=Z,N=Z,C=x}if(W.done)return n(d,C),m;if(C===null){for(;!W.done;I++,W=f.next())W=G(d,W.value,p),W!==null&&(u=l(W,u,I),N===null?m=W:N.sibling=W,N=W);return m}for(C=r(d,C);!W.done;I++,W=f.next())W=k(C,d,I,W.value,p),W!==null&&(e&&W.alternate!==null&&C.delete(W.key===null?I:W.key),u=l(W,u,I),N===null?m=W:N.sibling=W,N=W);return e&&C.forEach(function(ve){return t(d,ve)}),m}return function(d,u,f,p){var m=typeof f=="object"&&f!==null&&f.type===Ze&&f.key===null;m&&(f=f.props.children);var N=typeof f=="object"&&f!==null;if(N)switch(f.$$typeof){case En:e:{for(N=f.key,m=u;m!==null;){if(m.key===N){switch(m.tag){case 7:if(f.type===Ze){n(d,m.sibling),u=o(m,f.props.children),u.return=d,d=u;break e}break;default:if(m.elementType===f.type){n(d,m.sibling),u=o(m,f.props),u.ref=Zn(d,m,f),u.return=d,d=u;break e}}n(d,m);break}else t(d,m);m=m.sibling}f.type===Ze?(u=sn(f.props.children,d.mode,p,f.key),u.return=d,d=u):(p=oo(f.type,f.key,f.props,null,d.mode,p),p.ref=Zn(d,u,f),p.return=d,d=p)}return i(d);case wt:e:{for(m=f.key;u!==null;){if(u.key===m)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Kl(f,d.mode,p),u.return=d,d=u}return i(d)}if(typeof f=="string"||typeof f=="number")return f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,f),u.return=d,d=u):(n(d,u),u=Jl(f,d.mode,p),u.return=d,d=u),i(d);if(no(f))return H(d,u,f,p);if(kn(f))return M(d,u,f,p);if(N&&ro(d,f),typeof f=="undefined"&&!m)switch(d.tag){case 1:case 22:case 0:case 11:case 15:throw Error(S(152,Bt(d.type)||"Component"))}return n(d,u)}}var lo=Ws(!0),xs=Ws(!1),Xn={},Le=rt(Xn),qn=rt(Xn),bn=rt(Xn);function It(e){if(e===Xn)throw Error(S(174));return e}function Zl(e,t){switch(X(bn,t),X(qn,e),X(Le,Xn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$o(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$o(t,e)}J(Le),X(Le,t)}function un(){J(Le),J(qn),J(bn)}function Fs(e){It(bn.current);var t=It(Le.current),n=$o(t,e.type);t!==n&&(X(qn,e),X(Le,n))}function Xl(e){qn.current===e&&(J(Le),J(qn))}var q=rt(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!=0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ze=null,ft=null,_e=!1;function Ls(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function _s(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function ql(e){if(_e){var t=ft;if(t){var n=t;if(!_s(e,t)){if(t=tn(n.nextSibling),!t||!_s(e,t)){e.flags=e.flags&-1025|2,_e=!1,ze=e;return}Ls(ze,n)}ze=e,ft=tn(t.firstChild)}else e.flags=e.flags&-1025|2,_e=!1,ze=e}}function Us(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function ao(e){if(e!==ze)return!1;if(!_e)return Us(e),_e=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Nl(t,e.memoizedProps))for(t=ft;t;)Ls(e,t),t=tn(t.nextSibling);if(Us(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ze?tn(e.stateNode.nextSibling):null;return!0}function bl(){ft=ze=null,_e=!1}var cn=[];function $l(){for(var e=0;e<cn.length;e++)cn[e]._workInProgressVersionPrimary=null;cn.length=0}var $n=Et.ReactCurrentDispatcher,Me=Et.ReactCurrentBatchConfig,er=0,b=null,pe=null,ce=null,so=!1,tr=!1;function Ee(){throw Error(S(321))}function ei(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function ti(e,t,n,r,o,l){if(er=l,b=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$n.current=e===null||e.memoizedState===null?Vf:Qf,e=n(r,o),tr){l=0;do{if(tr=!1,!(25>l))throw Error(S(301));l+=1,ce=pe=null,t.updateQueue=null,$n.current=Jf,e=n(r,o)}while(tr)}if($n.current=uo,t=pe!==null&&pe.next!==null,er=0,ce=pe=b=null,so=!1,t)throw Error(S(300));return e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?b.memoizedState=ce=e:ce=ce.next=e,ce}function Gt(){if(pe===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ce===null?b.memoizedState:ce.next;if(t!==null)ce=t,pe=e;else{if(e===null)throw Error(S(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ce===null?b.memoizedState=ce=e:ce=ce.next=e}return ce}function Ue(e,t){return typeof t=="function"?t(e):t}function nr(e){var t=Gt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=pe,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){o=o.next,r=r.baseState;var a=i=l=null,s=o;do{var c=s.lane;if((er&c)===c)a!==null&&(a=a.next={lane:0,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),r=s.eagerReducer===e?s.eagerState:e(r,s.action);else{var T={lane:c,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};a===null?(i=a=T,l=r):a=a.next=T,b.lanes|=c,Jn|=c}s=s.next}while(s!==null&&s!==o);a===null?l=r:a.next=i,Re(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function rr(e){var t=Gt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Re(l,t.memoizedState)||(We=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Os(e,t,n){var r=t._getVersion;r=r(t._source);var o=t._workInProgressVersionPrimary;if(o!==null?e=o===r:(e=e.mutableReadLanes,(e=(er&e)===e)&&(t._workInProgressVersionPrimary=r,cn.push(t))),e)return n(t._source);throw cn.push(t),Error(S(350))}function Bs(e,t,n,r){var o=ye;if(o===null)throw Error(S(349));var l=t._getVersion,i=l(t._source),a=$n.current,s=a.useState(function(){return Os(o,t,n)}),c=s[1],T=s[0];s=ce;var G=e.memoizedState,y=G.refs,k=y.getSnapshot,H=G.source;G=G.subscribe;var M=b;return e.memoizedState={refs:y,source:t,subscribe:r},a.useEffect(function(){y.getSnapshot=n,y.setSnapshot=c;var d=l(t._source);if(!Re(i,d)){d=n(t._source),Re(T,d)||(c(d),d=st(M),o.mutableReadLanes|=d&o.pendingLanes),d=o.mutableReadLanes,o.entangledLanes|=d;for(var u=o.entanglements,f=d;0<f;){var p=31-et(f),m=1<<p;u[p]|=d,f&=~m}}},[n,t,r]),a.useEffect(function(){return r(t._source,function(){var d=y.getSnapshot,u=y.setSnapshot;try{u(d(t._source));var f=st(M);o.mutableReadLanes|=f&o.pendingLanes}catch(p){u(function(){throw p})}})},[t,r]),Re(k,n)&&Re(H,t)&&Re(G,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Ue,lastRenderedState:T},e.dispatch=c=ni.bind(null,b,e),s.queue=e,s.baseQueue=null,T=Os(o,t,n),s.memoizedState=s.baseState=T),T}function js(e,t,n){var r=Gt();return Bs(r,e,t,n)}function or(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Ue,lastRenderedState:e},e=e.dispatch=ni.bind(null,b,e),[t.memoizedState,e]}function co(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=b.updateQueue,t===null?(t={lastEffect:null},b.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zs(e){var t=At();return e={current:e},t.memoizedState=e}function fo(){return Gt().memoizedState}function ri(e,t,n,r){var o=At();b.flags|=e,o.memoizedState=co(1|t,n,void 0,r===void 0?null:r)}function oi(e,t,n,r){var o=Gt();r=r===void 0?null:r;var l=void 0;if(pe!==null){var i=pe.memoizedState;if(l=i.destroy,r!==null&&ei(r,i.deps)){co(t,n,l,r);return}}b.flags|=e,o.memoizedState=co(1|t,n,l,r)}function Ys(e,t){return ri(516,4,e,t)}function ho(e,t){return oi(516,4,e,t)}function Vs(e,t){return oi(4,2,e,t)}function Qs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Js(e,t,n){return n=n!=null?n.concat([e]):null,oi(4,2,Qs.bind(null,t,e),n)}function li(){}function Ks(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ei(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zs(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ei(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Kf(e,t){var n=on();Mt(98>n?98:n,function(){e(!0)}),Mt(97<n?97:n,function(){var r=Me.transition;Me.transition=1;try{e(!1),t()}finally{Me.transition=r}})}function ni(e,t,n){var r=ke(),o=st(e),l={lane:o,action:n,eagerReducer:null,eagerState:null,next:null},i=t.pending;if(i===null?l.next=l:(l.next=i.next,i.next=l),t.pending=l,i=e.alternate,e===b||i!==null&&i===b)tr=so=!0;else{if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.eagerReducer=i,l.eagerState=s,Re(s,a))return}catch(c){}finally{}ut(e,o,r)}}var uo={readContext:De,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useOpaqueIdentifier:Ee,unstable_isNewReconciler:!1},Vf={readContext:De,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Ys,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ri(4,2,Qs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=ni.bind(null,b,e),[r.memoizedState,e]},useRef:zs,useState:or,useDebugValue:li,useDeferredValue:function(e){var t=or(e),n=t[0],r=t[1];return Ys(function(){var o=Me.transition;Me.transition=1;try{r(e)}finally{Me.transition=o}},[e]),n},useTransition:function(){var e=or(!1),t=e[0];return e=Kf.bind(null,e[1]),zs(e),[e,t]},useMutableSource:function(e,t,n){var r=At();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Bs(r,e,t,n)},useOpaqueIdentifier:function(){if(_e){var e=!1,t=Uf(function(){throw e||(e=!0,n("r:"+(xl++).toString(36))),Error(S(355))}),n=or(t)[1];return(b.mode&2)==0&&(b.flags|=516,co(5,function(){n("r:"+(xl++).toString(36))},void 0,null)),t}return t="r:"+(xl++).toString(36),or(t),t},unstable_isNewReconciler:!1},Qf={readContext:De,useCallback:Ks,useContext:De,useEffect:ho,useImperativeHandle:Js,useLayoutEffect:Vs,useMemo:Zs,useReducer:nr,useRef:fo,useState:function(){return nr(Ue)},useDebugValue:li,useDeferredValue:function(e){var t=nr(Ue),n=t[0],r=t[1];return ho(function(){var o=Me.transition;Me.transition=1;try{r(e)}finally{Me.transition=o}},[e]),n},useTransition:function(){var e=nr(Ue)[0];return[fo().current,e]},useMutableSource:js,useOpaqueIdentifier:function(){return nr(Ue)[0]},unstable_isNewReconciler:!1},Jf={readContext:De,useCallback:Ks,useContext:De,useEffect:ho,useImperativeHandle:Js,useLayoutEffect:Vs,useMemo:Zs,useReducer:rr,useRef:fo,useState:function(){return rr(Ue)},useDebugValue:li,useDeferredValue:function(e){var t=rr(Ue),n=t[0],r=t[1];return ho(function(){var o=Me.transition;Me.transition=1;try{r(e)}finally{Me.transition=o}},[e]),n},useTransition:function(){var e=rr(Ue)[0];return[fo().current,e]},useMutableSource:js,useOpaqueIdentifier:function(){return rr(Ue)[0]},unstable_isNewReconciler:!1},Zf=Et.ReactCurrentOwner,We=!1;function we(e,t,n,r){t.child=e===null?xs(t,null,n,r):lo(t,e.child,n,r)}function Xs(e,t,n,r,o){n=n.render;var l=t.ref;return an(t,o),r=ti(e,t,n,r,l,o),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,Ye(e,t,o)):(t.flags|=1,we(e,t,r,o),t.child)}function bs(e,t,n,r,o,l){if(e===null){var i=n.type;return typeof i=="function"&&!ii(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,qs(e,t,i,r,o,l)):(e=oo(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}return i=e.child,(o&l)==0&&(o=i.memoizedProps,n=n.compare,n=n!==null?n:jn,n(o,r)&&e.ref===t.ref)?Ye(e,t,l):(t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e)}function qs(e,t,n,r,o,l){if(e!==null&&jn(e.memoizedProps,r)&&e.ref===t.ref)if(We=!1,(l&o)!=0)(e.flags&16384)!=0&&(We=!0);else return t.lanes=e.lanes,Ye(e,t,l);return ai(e,t,n,r,l)}function si(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)==0)t.memoizedState={baseLanes:0},po(t,n);else if((n&1073741824)!=0)t.memoizedState={baseLanes:0},po(t,l!==null?l.baseLanes:n);else return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},po(t,e),null;else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,po(t,r);return we(e,t,o,n),t.child}function $s(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function ai(e,t,n,r,o){var l=Se(n)?Dt:de.current;return l=rn(t,l),an(t,o),n=ti(e,t,n,r,l,o),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,Ye(e,t,o)):(t.flags|=1,we(e,t,n,o),t.child)}function eu(e,t,n,r,o){if(Se(n)){var l=!0;Kr(t)}else l=!1;if(an(t,o),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Hs(t,n,r),Ql(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=Se(n)?Dt:de.current,c=rn(t,c));var T=n.getDerivedStateFromProps,G=typeof T=="function"||typeof i.getSnapshotBeforeUpdate=="function";G||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Ns(t,i,r,c),lt=!1;var y=t.memoizedState;i.state=y,Kn(t,r,i,o),s=t.memoizedState,a!==r||y!==s||Te.current||lt?(typeof T=="function"&&(eo(t,n,T,r),s=t.memoizedState),(a=lt||Gs(t,n,a,r,y,s,c))?(G||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4)):(typeof i.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{i=t.stateNode,Ps(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ne(t.type,a),i.props=c,G=t.pendingProps,y=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=De(s):(s=Se(n)?Dt:de.current,s=rn(t,s));var k=n.getDerivedStateFromProps;(T=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==G||y!==s)&&Ns(t,i,r,s),lt=!1,y=t.memoizedState,i.state=y,Kn(t,r,i,o);var H=t.memoizedState;a!==G||y!==H||Te.current||lt?(typeof k=="function"&&(eo(t,n,k,r),H=t.memoizedState),(c=lt||Gs(t,n,c,r,y,H,s))?(T||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,H,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,H,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=H),i.props=r,i.state=H,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=256),r=!1)}return ui(e,t,n,r,l,o)}function ui(e,t,n,r,o,l){$s(e,t);var i=(t.flags&64)!=0;if(!r&&!i)return o&&ys(t,n,!1),Ye(e,t,l);r=t.stateNode,Zf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=lo(t,e.child,null,l),t.child=lo(t,null,a,l)):we(e,t,a,l),t.memoizedState=r.state,o&&ys(t,n,!0),t.child}function tu(e){var t=e.stateNode;t.pendingContext?ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ms(e,t.context,!1),Zl(e,t.containerInfo)}var mo={dehydrated:null,retryLane:0};function lu(e,t,n){var r=t.pendingProps,o=q.current,l=!1,i;return(i=(t.flags&64)!=0)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!=0),i?(l=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(o|=1),X(q,o&1),e===null?(r.fallback!==void 0&&ql(t),e=r.children,o=r.fallback,l?(e=nu(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=mo,e):typeof r.unstable_expectedLoadTime=="number"?(e=nu(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=mo,t.lanes=33554432,e):(n=ci({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?l?(r=ou(e,t,r.children,r.fallback,n),l=t.child,o=e.child.memoizedState,l.memoizedState=o===null?{baseLanes:n}:{baseLanes:o.baseLanes|n},l.childLanes=e.childLanes&~n,t.memoizedState=mo,r):(n=ru(e,t,r.children,n),t.memoizedState=null,n):l?(r=ou(e,t,r.children,r.fallback,n),l=t.child,o=e.child.memoizedState,l.memoizedState=o===null?{baseLanes:n}:{baseLanes:o.baseLanes|n},l.childLanes=e.childLanes&~n,t.memoizedState=mo,r):(n=ru(e,t,r.children,n),t.memoizedState=null,n)}function nu(e,t,n,r){var o=e.mode,l=e.child;return t={mode:"hidden",children:t},(o&2)==0&&l!==null?(l.childLanes=0,l.pendingProps=t):l=ci(t,o,0,null),n=sn(n,o,r,null),l.return=e,n.return=e,l.sibling=n,e.child=l,n}function ru(e,t,n,r){var o=e.child;return e=o.sibling,n=ct(o,{mode:"visible",children:n}),(t.mode&2)==0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function ou(e,t,n,r,o){var l=t.mode,i=e.child;e=i.sibling;var a={mode:"hidden",children:n};return(l&2)==0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=a,i=n.lastEffect,i!==null?(t.firstEffect=n.firstEffect,t.lastEffect=i,i.nextEffect=null):t.firstEffect=t.lastEffect=null):n=ct(i,a),e!==null?r=ct(e,r):(r=sn(r,l,o,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function iu(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ds(e.return,t)}function fi(e,t,n,r,o,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o,lastEffect:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o,i.lastEffect=l)}function au(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(we(e,t,r.children,n),r=q.current,(r&2)!=0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!=0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iu(e,n);else if(e.tag===19)iu(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(q,r),(t.mode&2)==0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fi(t,!1,o,n,l,t.lastEffect);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&io(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fi(t,!0,n,null,l,t.lastEffect);break;case"together":fi(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,(n&t.childLanes)!=0){if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var su,di,uu,cu;su=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};di=function(){};uu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,It(Le.current);var l=null;switch(n){case"input":o=Jo(e,o),r=Jo(e,r),l=[];break;case"option":o=Xo(e,o),r=Xo(e,r),l=[];break;case"select":o=j({},o,{value:void 0}),r=j({},r,{value:void 0}),l=[];break;case"textarea":o=qo(e,o),r=qo(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}el(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Q("scroll",e),l||a===s||(l=[])):typeof s=="object"&&s!==null&&s.$$typeof===jo?s.toString():(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};cu=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xf(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Se(t.type)&&Jr(),null;case 3:return un(),J(Te),J(de),$l(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(t)?t.flags|=4:r.hydrate||(t.flags|=256)),di(t),null;case 5:Xl(t);var o=It(bn.current);if(n=t.type,e!==null&&t.stateNode!=null)uu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(S(166));return null}if(e=It(Le.current),ao(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[nt]=t,r[Qr]=l,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(e=0;e<Yn.length;e++)Q(Yn[e],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ta(r,l),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Q("invalid",r);break;case"textarea":oa(r,l),Q("invalid",r)}el(n,l),e=null;for(var i in l)l.hasOwnProperty(i)&&(o=l[i],i==="children"?typeof o=="string"?r.textContent!==o&&(e=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(e=["children",""+o]):Sn.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&Q("scroll",r));switch(n){case"input":kr(r),ra(r,l,!0);break;case"textarea":kr(r),ia(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Yr)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(i=o.nodeType===9?o:o.ownerDocument,e===bo.html&&(e=aa(n)),e===bo.html?n==="script"?(e=i.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[nt]=t,e[Qr]=r,su(e,t,!1,!1),t.stateNode=e,i=tl(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Yn.length;o++)Q(Yn[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":ta(e,r),o=Jo(e,r),Q("invalid",e);break;case"option":o=Xo(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=j({},r,{value:void 0}),Q("invalid",e);break;case"textarea":oa(e,r),o=qo(e,r),Q("invalid",e);break;default:o=r}el(n,o);var a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?ca(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&sa(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Dn(e,s):typeof s=="number"&&Dn(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Sn.hasOwnProperty(l)?s!=null&&l==="onScroll"&&Q("scroll",e):s!=null&&Fo(e,l,s,i))}switch(n){case"input":kr(e),ra(e,r,!1);break;case"textarea":kr(e),ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xe(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?jt(e,!!r.multiple,l,!1):r.defaultValue!=null&&jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Yr)}fs(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)cu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));n=It(bn.current),It(Le.current),ao(t)?(r=t.stateNode,n=t.memoizedProps,r[nt]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r)}return null;case 13:return J(q),r=t.memoizedState,(t.flags&64)!=0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&ao(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!=0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(q.current&1)!=0?fe===0&&(fe=3):((fe===0||fe===3)&&(fe=4),ye===null||(Jn&134217727)==0&&(fn&134217727)==0||dn(ye,me))),(r||n)&&(t.flags|=4),null);case 4:return un(),di(t),e===null&&us(t.stateNode.containerInfo),null;case 10:return Yl(t),null;case 17:return Se(t.type)&&Jr(),null;case 19:if(J(q),r=t.memoizedState,r===null)return null;if(l=(t.flags&64)!=0,i=r.rendering,i===null)if(l)lr(r,!1);else{if(fe!==0||e!==null&&(e.flags&64)!=0)for(e=t.child;e!==null;){if(i=io(e),i!==null){for(t.flags|=64,lr(r,!1),l=i.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=2,l.nextEffect=null,l.firstEffect=null,l.lastEffect=null,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(q,q.current&1|2),t.child}e=e.sibling}r.tail!==null&&he()>hi&&(t.flags|=64,l=!0,lr(r,!1),t.lanes=33554432)}else{if(!l)if(e=io(i),e!==null){if(t.flags|=64,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!_e)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*he()-r.renderingStartTime>hi&&n!==1073741824&&(t.flags|=64,l=!0,lr(r,!1),t.lanes=33554432);r.isBackwards?(i.sibling=t.child,t.child=i):(n=r.last,n!==null?n.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=he(),n.sibling=null,t=q.current,X(q,l?t&1|2:t&1),n):null;case 23:case 24:return pi(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(S(156,t.tag))}function qf(e){switch(e.tag){case 1:Se(e.type)&&Jr();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(un(),J(Te),J(de),$l(),t=e.flags,(t&64)!=0)throw Error(S(285));return e.flags=t&-4097|64,e;case 5:return Xl(e),null;case 13:return J(q),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return J(q),null;case 4:return un(),null;case 10:return Yl(e),null;case 23:case 24:return pi(),null;default:return null}}function mi(e,t){try{var n="",r=t;do n+=Ac(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o}}function gi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bf=typeof WeakMap=="function"?WeakMap:Map;function fu(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,yi=r),gi(e,t)},n}function du(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return gi(e,t),r(o)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Oe===null?Oe=new Set([this]):Oe.add(this),gi(e,t));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}var $f=typeof WeakSet=="function"?WeakSet:Set;function hu(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){dt(e,n)}else t.current=null}function ed(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Ne(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&Wl(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(S(163))}function nd(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)==3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var o=e;r=o.next,o=o.tag,(o&4)!=0&&(o&1)!=0&&(pu(n,e),td(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Ne(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&Is(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Is(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&fs(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Da(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(S(163))}function mu(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var o=n.memoizedProps.style;o=o!=null&&o.hasOwnProperty("display")?o.display:null,r.style.display=ua("display",o)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function yu(e,t){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Ll,t)}catch(l){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,o=r.destroy;if(r=r.tag,o!==void 0)if((r&4)!=0)pu(t,n);else{r=t;try{o()}catch(l){dt(r,l)}}n=n.next}while(n!==e)}break;case 1:if(hu(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(l){dt(t,l)}break;case 5:hu(t);break;case 4:gu(e,t)}}function vu(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Tu(e){return e.tag===5||e.tag===3||e.tag===4}function Su(e){e:{for(var t=e.return;t!==null;){if(Tu(t))break e;t=t.return}throw Error(S(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(S(161))}n.flags&16&&(Dn(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Tu(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?vi(e,n,t):Ti(e,n,t)}function vi(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(vi(e,t,n),e=e.sibling;e!==null;)vi(e,t,n),e=e.sibling}function Ti(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ti(e,t,n),e=e.sibling;e!==null;)Ti(e,t,n),e=e.sibling}function gu(e,t){for(var n=t,r=!1,o,l;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(S(160));switch(o=r.stateNode,r.tag){case 5:l=!1;break e;case 3:o=o.containerInfo,l=!0;break e;case 4:o=o.containerInfo,l=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var i=e,a=n,s=a;;)if(yu(i,s),s.child!==null&&s.tag!==4)s.child.return=s,s=s.child;else{if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}l?(i=o,a=n.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):o.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){o=n.stateNode.containerInfo,l=!0,n.child.return=n,n=n.child;continue}}else if(yu(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Ei(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var o=e!==null?e.memoizedProps:r;e=t.type;var l=t.updateQueue;if(t.updateQueue=null,l!==null){for(n[Qr]=r,e==="input"&&r.type==="radio"&&r.name!=null&&na(n,r),tl(e,o),t=tl(e,r),o=0;o<l.length;o+=2){var i=l[o],a=l[o+1];i==="style"?ca(n,a):i==="dangerouslySetInnerHTML"?sa(n,a):i==="children"?Dn(n,a):Fo(n,i,a,t)}switch(e){case"input":Zo(n,r);break;case"textarea":la(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,l=r.value,l!=null?jt(n,!!r.multiple,l,!1):e!==!!r.multiple&&(r.defaultValue!=null?jt(n,!!r.multiple,r.defaultValue,!0):jt(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(S(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Da(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Si=he(),mu(t.child,!0)),Eu(t);return;case 19:Eu(t);return;case 17:return;case 23:case 24:mu(t,t.memoizedState!==null);return}throw Error(S(163))}function Eu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $f),t.forEach(function(r){var o=rd.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function od(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var ld=Math.ceil,yo=Et.ReactCurrentDispatcher,wi=Et.ReactCurrentOwner,F=0,ye=null,oe=null,me=0,Ht=0,Ci=rt(0),fe=0,vo=null,hn=0,Jn=0,fn=0,ki=0,Ri=null,Si=0,hi=Infinity;function pn(){hi=he()+500}var D=null,go=!1,yi=null,Oe=null,ht=!1,ir=null,ar=90,Di=[],Pi=[],Ve=null,sr=0,Mi=null,To=-1,Qe=0,So=0,ur=null,Eo=!1;function ke(){return(F&48)!=0?he():To!==-1?To:To=he()}function st(e){if(e=e.mode,(e&2)==0)return 1;if((e&4)==0)return on()===99?1:2;if(Qe===0&&(Qe=hn),Yf.transition!==0){So!==0&&(So=Ri!==null?Ri.pendingLanes:0),e=Qe;var t=4186112&~So;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=on(),(F&4)!=0&&e===98?e=Nr(12,Qe):(e=Qc(e),e=Nr(e,Qe)),e}function ut(e,t,n){if(50<sr)throw sr=0,Mi=null,Error(S(185));if(e=wo(e,t),e===null)return null;Wr(e,t,n),e===ye&&(fn|=t,fe===4&&dn(e,me));var r=on();t===1?(F&8)!=0&&(F&48)==0?Ii(e):(Ie(e,n),F===0&&(pn(),Fe())):((F&4)==0||r!==98&&r!==99||(Ve===null?Ve=new Set([e]):Ve.add(e)),Ie(e,n)),Ri=e}function wo(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Ie(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-et(i),s=1<<a,c=l[a];if(c===-1){if((s&r)==0||(s&o)!=0){c=t,Jt(s);var T=V;l[a]=10<=T?c+250:6<=T?c+5e3:-1}}else c<=t&&(e.expiredLanes|=s);i&=~s}if(r=Fn(e,e===ye?me:0),t=V,r===0)n!==null&&(n!==Bl&&Ul(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==Bl&&Ul(n)}t===15?(n=Ii.bind(null,e),je===null?(je=[n],Xr=_l(Zr,Rs)):je.push(n),n=Bl):t===14?n=Qn(99,Ii.bind(null,e)):(n=Jc(t),n=Qn(n,wu.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function wu(e){if(To=-1,So=Qe=0,(F&48)!=0)throw Error(S(327));var t=e.callbackNode;if(pt()&&e.callbackNode!==t)return null;var n=Fn(e,e===ye?me:0);if(n===0)return null;var r=n,o=F;F|=16;var l=ku();(ye!==e||me!==r)&&(pn(),mn(e,r));do try{id();break}catch(a){Cu(e,a)}while(1);if(zl(),yo.current=l,F=o,oe!==null?r=0:(ye=null,me=0,r=fe),(hn&fn)!=0)mn(e,0);else if(r!==0){if(r===2&&(F|=64,e.hydrate&&(e.hydrate=!1,Wl(e.containerInfo)),n=Na(e),n!==0&&(r=cr(e,n))),r===1)throw t=vo,mn(e,0),dn(e,n),Ie(e,he()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(S(345));case 2:Nt(e);break;case 3:if(dn(e,n),(n&62914560)===n&&(r=Si+500-he(),10<r)){if(Fn(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ds(Nt.bind(null,e),r);break}Nt(e);break;case 4:if(dn(e,n),(n&4186112)===n)break;for(r=e.eventTimes,o=-1;0<n;){var i=31-et(n);l=1<<i,i=r[i],i>o&&(o=i),n&=~l}if(n=o,n=he()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ld(n/1960))-n,10<n){e.timeoutHandle=ds(Nt.bind(null,e),n);break}Nt(e);break;case 5:Nt(e);break;default:throw Error(S(329))}}return Ie(e,he()),e.callbackNode===t?wu.bind(null,e):null}function dn(e,t){for(t&=~ki,t&=~fn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Ii(e){if((F&48)!=0)throw Error(S(327));if(pt(),e===ye&&(e.expiredLanes&me)!=0){var t=me,n=cr(e,t);(hn&fn)!=0&&(t=Fn(e,t),n=cr(e,t))}else t=Fn(e,0),n=cr(e,t);if(e.tag!==0&&n===2&&(F|=64,e.hydrate&&(e.hydrate=!1,Wl(e.containerInfo)),t=Na(e),t!==0&&(n=cr(e,t))),n===1)throw n=vo,mn(e,0),dn(e,t),Ie(e,he()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e),Ie(e,he()),null}function ad(){if(Ve!==null){var e=Ve;Ve=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,Ie(t,he())})}Fe()}function Ru(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(pn(),Fe())}}function Du(e,t){var n=F;F&=-2,F|=8;try{return e(t)}finally{F=n,F===0&&(pn(),Fe())}}function po(e,t){X(Ci,Ht),Ht|=t,hn|=t}function pi(){Ht=Ci.current,J(Ci)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_f(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:un(),J(Te),J(de),$l();break;case 5:Xl(r);break;case 4:un();break;case 13:J(q);break;case 19:J(q);break;case 10:Yl(r);break;case 23:case 24:pi()}n=n.return}ye=e,oe=ct(e.current,null),me=Ht=hn=t,fe=0,vo=null,ki=fn=Jn=0}function Cu(e,t){do{var n=oe;try{if(zl(),$n.current=uo,so){for(var r=b.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}so=!1}if(er=0,ce=pe=b=null,tr=!1,wi.current=null,n===null||n.return===null){fe=1,vo=t,oe=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=me,a.flags|=2048,a.firstEffect=a.lastEffect=null,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s;if((a.mode&2)==0){var T=a.alternate;T?(a.updateQueue=T.updateQueue,a.memoizedState=T.memoizedState,a.lanes=T.lanes):(a.updateQueue=null,a.memoizedState=null)}var G=(q.current&1)!=0,y=i;do{var k;if(k=y.tag===13){var H=y.memoizedState;if(H!==null)k=H.dehydrated!==null;else{var M=y.memoizedProps;k=M.fallback===void 0?!1:M.unstable_avoidThisFallback!==!0?!0:!G}}if(k){var d=y.updateQueue;if(d===null){var u=new Set;u.add(c),y.updateQueue=u}else d.add(c);if((y.mode&2)==0){if(y.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var f=it(-1,1);f.tag=2,at(a,f)}a.lanes|=1;break e}s=void 0,a=t;var p=l.pingCache;if(p===null?(p=l.pingCache=new bf,s=new Set,p.set(c,s)):(s=p.get(c),s===void 0&&(s=new Set,p.set(c,s))),!s.has(a)){s.add(a);var m=sd.bind(null,l,c,a);c.then(m,m)}y.flags|=4096,y.lanes=t;break e}y=y.return}while(y!==null);s=Error((Bt(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}fe!==5&&(fe=2),s=mi(s,a),y=i;do{switch(y.tag){case 3:l=s,y.flags|=4096,t&=-t,y.lanes|=t;var N=fu(y,l,t);Ms(y,N);break e;case 1:l=s;var C=y.type,I=y.stateNode;if((y.flags&64)==0&&(typeof C.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Oe===null||!Oe.has(I)))){y.flags|=4096,t&=-t,y.lanes|=t;var x=du(y,l,t);Ms(y,x);break e}}y=y.return}while(y!==null)}Pu(n)}catch(W){t=W,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function ku(){var e=yo.current;return yo.current=uo,e===null?uo:e}function cr(e,t){var n=F;F|=16;var r=ku();ye===e&&me===t||mn(e,t);do try{ud();break}catch(o){Cu(e,o)}while(1);if(zl(),F=n,yo.current=r,oe!==null)throw Error(S(261));return ye=null,me=0,fe}function ud(){for(;oe!==null;)Mu(oe)}function id(){for(;oe!==null&&!Bf();)Mu(oe)}function Mu(e){var t=Iu(e.alternate,e,Ht);e.memoizedProps=e.pendingProps,t===null?Pu(e):oe=t,wi.current=null}function Pu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)==0){if(n=Xf(n,t,Ht),n!==null){oe=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Ht&1073741824)!=0||(n.mode&4)==0){for(var r=0,o=n.child;o!==null;)r|=o.lanes|o.childLanes,o=o.sibling;n.childLanes=r}e!==null&&(e.flags&2048)==0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=qf(t),n!==null){n.flags&=2047,oe=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);fe===0&&(fe=5)}function Nt(e){var t=on();return Mt(99,cd.bind(null,e,t)),null}function cd(e,t){do pt();while(ir!==null);if((F&48)!=0)throw Error(S(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null;var r=n.lanes|n.childLanes,o=r,l=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;for(var i=e.eventTimes,a=e.expirationTimes;0<l;){var s=31-et(l),c=1<<s;o[s]=0,i[s]=-1,a[s]=-1,l&=~c}if(Ve!==null&&(r&24)==0&&Ve.has(e)&&Ve.delete(e),e===ye&&(oe=ye=null,me=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(o=F,F|=32,wi.current=null,Gl=xr,i=es(),Pl(i)){if("selectionStart"in i)a={start:i.selectionStart,end:i.selectionEnd};else e:if(a=(a=i.ownerDocument)&&a.defaultView||window,(c=a.getSelection&&a.getSelection())&&c.rangeCount!==0){a=c.anchorNode,l=c.anchorOffset,s=c.focusNode,c=c.focusOffset;try{a.nodeType,s.nodeType}catch(W){a=null;break e}var T=0,G=-1,y=-1,k=0,H=0,M=i,d=null;t:for(;;){for(var u;M!==a||l!==0&&M.nodeType!==3||(G=T+l),M!==s||c!==0&&M.nodeType!==3||(y=T+c),M.nodeType===3&&(T+=M.nodeValue.length),(u=M.firstChild)!==null;)d=M,M=u;for(;;){if(M===i)break t;if(d===a&&++k===l&&(G=T),d===s&&++H===c&&(y=T),(u=M.nextSibling)!==null)break;M=d,d=M.parentNode}M=u}a=G===-1||y===-1?null:{start:G,end:y}}else a=null;a=a||{start:0,end:0}}else a=null;Hl={focusedElem:i,selectionRange:a},xr=!1,ur=null,Eo=!1,D=r;do try{fd()}catch(W){if(D===null)throw Error(S(330));dt(D,W),D=D.nextEffect}while(D!==null);ur=null,D=r;do try{for(i=e;D!==null;){var f=D.flags;if(f&16&&Dn(D.stateNode,""),f&128){var p=D.alternate;if(p!==null){var m=p.ref;m!==null&&(typeof m=="function"?m(null):m.current=null)}}switch(f&1038){case 2:Su(D),D.flags&=-3;break;case 6:Su(D),D.flags&=-3,Ei(D.alternate,D);break;case 1024:D.flags&=-1025;break;case 1028:D.flags&=-1025,Ei(D.alternate,D);break;case 4:Ei(D.alternate,D);break;case 8:a=D,gu(i,a);var N=a.alternate;vu(a),N!==null&&vu(N)}D=D.nextEffect}}catch(W){if(D===null)throw Error(S(330));dt(D,W),D=D.nextEffect}while(D!==null);if(m=Hl,p=es(),f=m.focusedElem,i=m.selectionRange,p!==f&&f&&f.ownerDocument&&$a(f.ownerDocument.documentElement,f)){for(i!==null&&Pl(f)&&(p=i.start,m=i.end,m===void 0&&(m=p),"selectionStart"in f?(f.selectionStart=p,f.selectionEnd=Math.min(m,f.value.length)):(m=(p=f.ownerDocument||document)&&p.defaultView||window,m.getSelection&&(m=m.getSelection(),a=f.textContent.length,N=Math.min(i.start,a),i=i.end===void 0?N:Math.min(i.end,a),!m.extend&&N>i&&(a=i,i=N,N=a),a=ba(f,N),l=ba(f,i),a&&l&&(m.rangeCount!==1||m.anchorNode!==a.node||m.anchorOffset!==a.offset||m.focusNode!==l.node||m.focusOffset!==l.offset)&&(p=p.createRange(),p.setStart(a.node,a.offset),m.removeAllRanges(),N>i?(m.addRange(p),m.extend(l.node,l.offset)):(p.setEnd(l.node,l.offset),m.addRange(p)))))),p=[],m=f;m=m.parentNode;)m.nodeType===1&&p.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<p.length;f++)m=p[f],m.element.scrollLeft=m.left,m.element.scrollTop=m.top}xr=!!Gl,Hl=Gl=null,e.current=n,D=r;do try{for(f=e;D!==null;){var C=D.flags;if(C&36&&nd(f,D.alternate,D),C&128){p=void 0;var I=D.ref;if(I!==null){var x=D.stateNode;switch(D.tag){case 5:p=x;break;default:p=x}typeof I=="function"?I(p):I.current=p}}D=D.nextEffect}}catch(W){if(D===null)throw Error(S(330));dt(D,W),D=D.nextEffect}while(D!==null);D=null,zf(),F=o}else e.current=n;if(ht)ht=!1,ir=e,ar=t;else for(D=r;D!==null;)t=D.nextEffect,D.nextEffect=null,D.flags&8&&(C=D,C.sibling=null,C.stateNode=null),D=t;if(r=e.pendingLanes,r===0&&(Oe=null),r===1?e===Mi?sr++:(sr=0,Mi=e):sr=0,n=n.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Ll,n,void 0,(n.current.flags&64)==64)}catch(W){}if(Ie(e,he()),go)throw go=!1,e=yi,yi=null,e;return(F&8)!=0||Fe(),null}function fd(){for(;D!==null;){var e=D.alternate;Eo||ur===null||((D.flags&8)!=0?Ta(D,ur)&&(Eo=!0):D.tag===13&&od(e,D)&&Ta(D,ur)&&(Eo=!0));var t=D.flags;(t&256)!=0&&ed(e,D),(t&512)==0||ht||(ht=!0,Qn(97,function(){return pt(),null})),D=D.nextEffect}}function pt(){if(ar!==90){var e=97<ar?97:ar;return ar=90,Mt(e,dd)}return!1}function td(e,t){Di.push(t,e),ht||(ht=!0,Qn(97,function(){return pt(),null}))}function pu(e,t){Pi.push(t,e),ht||(ht=!0,Qn(97,function(){return pt(),null}))}function dd(){if(ir===null)return!1;var e=ir;if(ir=null,(F&48)!=0)throw Error(S(331));var t=F;F|=32;var n=Pi;Pi=[];for(var r=0;r<n.length;r+=2){var o=n[r],l=n[r+1],i=o.destroy;if(o.destroy=void 0,typeof i=="function")try{i()}catch(s){if(l===null)throw Error(S(330));dt(l,s)}}for(n=Di,Di=[],r=0;r<n.length;r+=2){o=n[r],l=n[r+1];try{var a=o.create;o.destroy=a()}catch(s){if(l===null)throw Error(S(330));dt(l,s)}}for(a=e.current.firstEffect;a!==null;)e=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=e;return F=t,Fe(),!0}function Au(e,t,n){t=mi(n,t),t=fu(e,t,1),at(e,t),t=ke(),e=wo(e,1),e!==null&&(Wr(e,1,t),Ie(e,t))}function dt(e,t){if(e.tag===3)Au(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Au(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Oe===null||!Oe.has(r))){e=mi(t,e);var o=du(n,e,1);if(at(n,o),o=ke(),n=wo(n,1),n!==null)Wr(n,1,o),Ie(n,o);else if(typeof r.componentDidCatch=="function"&&(Oe===null||!Oe.has(r)))try{r.componentDidCatch(t,e)}catch(l){}break}}n=n.return}}function sd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(me&n)===n&&(fe===4||fe===3&&(me&62914560)===me&&500>he()-Si?mn(e,0):ki|=n),Ie(e,t)}function rd(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)==0?t=1:(t&4)==0?t=on()===99?1:2:(Qe===0&&(Qe=hn),t=Kt(62914560&~Qe),t===0&&(t=4194304))),n=ke(),e=wo(e,t),e!==null&&(Wr(e,t,n),Ie(e,n))}var Iu;Iu=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)We=!0;else if((n&r)!=0)We=(e.flags&16384)!=0;else{switch(We=!1,t.tag){case 3:tu(t),bl();break;case 5:Fs(t);break;case 1:Se(t.type)&&Kr(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var o=t.type._context;X(qr,o._currentValue),o._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!=0?lu(e,t,n):(X(q,q.current&1),t=Ye(e,t,n),t!==null?t.sibling:null);X(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!=0,(e.flags&64)!=0){if(r)return au(e,t,n);t.flags|=64}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(q,q.current),r)break;return null;case 23:case 24:return t.lanes=0,si(e,t,n)}return Ye(e,t,n)}else We=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=rn(t,de.current),an(t,n),o=ti(null,t,r,e,o,n),t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)){var l=!0;Kr(t)}else l=!1;t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Vl(t);var i=r.getDerivedStateFromProps;typeof i=="function"&&eo(t,r,i,e),o.updater=to,t.stateNode=o,o._reactInternals=t,Ql(t,r,e,n),t=ui(null,t,r,!0,l,n)}else t.tag=0,we(null,t,o,n),t=t.child;return t;case 16:o=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,l=o._init,o=l(o._payload),t.type=o,l=t.tag=hd(o),e=Ne(o,e),l){case 0:t=ai(null,t,o,e,n);break e;case 1:t=eu(null,t,o,e,n);break e;case 11:t=Xs(null,t,o,e,n);break e;case 14:t=bs(null,t,o,Ne(o.type,e),r,n);break e}throw Error(S(306,o,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ne(r,o),ai(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ne(r,o),eu(e,t,r,o,n);case 3:if(tu(t),r=t.updateQueue,e===null||r===null)throw Error(S(282));if(r=t.pendingProps,o=t.memoizedState,o=o!==null?o.element:null,Ps(e,t),Kn(t,r,null,n),r=t.memoizedState.element,r===o)bl(),t=Ye(e,t,n);else{if(o=t.stateNode,(l=o.hydrate)&&(ft=tn(t.stateNode.containerInfo.firstChild),ze=t,l=_e=!0),l){if(e=o.mutableSourceEagerHydrationData,e!=null)for(o=0;o<e.length;o+=2)l=e[o],l._workInProgressVersionPrimary=e[o+1],cn.push(l);for(n=xs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else we(e,t,r,n),bl();t=t.child}return t;case 5:return Fs(t),e===null&&ql(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Nl(r,o)?i=null:l!==null&&Nl(r,l)&&(t.flags|=16),$s(e,t),we(e,t,i,n),t.child;case 6:return e===null&&ql(t),null;case 13:return lu(e,t,n);case 4:return Zl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lo(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ne(r,o),Xs(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value;var a=t.type._context;if(X(qr,a._currentValue),a._currentValue=l,i!==null)if(a=i.value,l=Re(a,l)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,l):1073741823)|0,l===0){if(i.children===o.children&&!Te.current){t=Ye(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var c=s.firstContext;c!==null;){if(c.context===r&&(c.observedBits&l)!=0){a.tag===1&&(c=it(-1,n&-n),c.tag=2,at(a,c)),a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ds(a.return,n),s.lanes|=n;break}c=c.next}}else i=a.tag===10&&a.type===t.type?null:a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,l=t.pendingProps,r=l.children,an(t,n),o=De(o,l.unstable_observedBits),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return o=t.type,l=Ne(o,t.pendingProps),l=Ne(o.type,l),bs(e,t,o,l,r,n);case 15:return qs(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ne(r,o),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Se(r)?(e=!0,Kr(t)):e=!1,an(t,n),Hs(t,r,o),Ql(t,r,o,n),ui(null,t,r,!0,e,n);case 19:return au(e,t,n);case 23:return si(e,t,n);case 24:return si(e,t,n)}throw Error(S(156,t.tag))};function pd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new pd(e,t,n,r)}function ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hd(e){if(typeof e=="function")return ii(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sr)return 11;if(e===wr)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")ii(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ze:return sn(n.children,o,l,t);case qi:i=8,o|=16;break;case Lo:i=8,o|=1;break;case wn:return e=Pe(12,n,t,o|8),e.elementType=wn,e.type=wn,e.lanes=l,e;case Cn:return e=Pe(13,n,t,o),e.type=Cn,e.elementType=Cn,e.lanes=l,e;case Er:return e=Pe(19,n,t,o),e.elementType=Er,e.lanes=l,e;case zo:return ci(n,o,l,t);case Yo:return e=Pe(24,n,t,o),e.elementType=Yo,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _o:i=10;break e;case Uo:i=9;break e;case Sr:i=11;break e;case wr:i=14;break e;case Oo:i=16,r=null;break e;case Bo:i=22;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Pe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function sn(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function ci(e,t,n,r){return e=Pe(23,e,r,t),e.elementType=zo,e.lanes=n,e}function Jl(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function Kl(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function md(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.mutableSourceEagerHydrationData=null}function gd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Co(e,t,n,r){var o=t.current,l=ke(),i=st(o);e:if(n){n=n._reactInternals;t:{if(kt(n)!==n||n.tag!==1)throw Error(S(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Se(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(S(171))}if(n.tag===1){var s=n.type;if(Se(s)){n=gs(n,s,a);break e}}n=a}else n=ot;return t.context===null?t.context=n:t.pendingContext=n,t=it(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),at(o,t),ut(o,i,l),i}function Ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gi(e,t){Gu(e,t),(e=e.alternate)&&Gu(e,t)}function yd(){return null}function Hi(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new md(e,t,n!=null&&n.hydrate===!0),t=Pe(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,Vl(t),e[en]=n.current,us(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var o=t._getVersion;o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o)}this._internalRoot=n}Hi.prototype.render=function(e){Co(e,this._internalRoot,null,null)};Hi.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Co(null,e,null,function(){t[en]=null})};function fr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vd(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Hi(e,0,t?{hydrate:!0}:void 0)}function ko(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l._internalRoot;if(typeof o=="function"){var a=o;o=function(){var c=Ai(i);a.call(c)}}Co(t,i,e,o)}else{if(l=n._reactRootContainer=vd(n,r),i=l._internalRoot,typeof o=="function"){var s=o;o=function(){var c=Ai(i);s.call(c)}}Du(function(){Co(t,i,e,o)})}return Ai(i)}Sa=function(e){if(e.tag===13){var t=ke();ut(e,4,t),Gi(e,4)}};cl=function(e){if(e.tag===13){var t=ke();ut(e,67108864,t),Gi(e,67108864)}};Ea=function(e){if(e.tag===13){var t=ke(),n=st(e);ut(e,n,t),Gi(e,n)}};wa=function(e,t){return t()};rl=function(e,t,n){switch(t){case"input":if(Zo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Pr(r);if(!o)throw Error(S(90));ea(r),Zo(r,o)}}}break;case"textarea":la(e,n);break;case"select":t=n.value,t!=null&&jt(e,!!n.multiple,t,!1)}};ol=Ru;pa=function(e,t,n,r,o){var l=F;F|=4;try{return Mt(98,e.bind(null,t,n,r,o))}finally{F=l,F===0&&(pn(),Fe())}};ll=function(){(F&49)==0&&(ad(),pt())};ma=function(e,t){var n=F;F|=2;try{return e(t)}finally{F=n,F===0&&(pn(),Fe())}};function Hu(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fr(t))throw Error(S(200));return gd(e,t,null,n)}var Td={Events:[Mn,qt,Pr,da,ha,pt,{current:!1}]},dr={findFiberByHostInstance:Rt,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Sd={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=va(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||yd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(hr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!hr.isDisabled&&hr.supportsFiber))try{Ll=hr.inject(Sd),Pt=hr}catch(e){}var hr,Ed=Td,wd=Hu,Cd=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):Error(S(268,Object.keys(e)));return e=va(t),e=e===null?null:e.stateNode,e},kd=function(e,t){var n=F;if((n&48)!=0)return e(t);F|=1;try{if(e)return Mt(99,e.bind(null,t))}finally{F=n,Fe()}},Rd=function(e,t,n){if(!fr(t))throw Error(S(200));return ko(null,e,t,!0,n)},Dd=function(e,t,n){if(!fr(t))throw Error(S(200));return ko(null,e,t,!1,n)},Pd=function(e){if(!fr(e))throw Error(S(40));return e._reactRootContainer?(Du(function(){ko(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1},Md=Ru,Id=function(e,t){return Hu(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},Ad=function(e,t,n,r){if(!fr(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ko(e,t,n,!1,r)},Gd="17.0.2",Hd={__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ed,createPortal:wd,findDOMNode:Cd,flushSync:kd,hydrate:Rd,render:Dd,unmountComponentAtNode:Pd,unstable_batchedUpdates:Md,unstable_createPortal:Id,unstable_renderSubtreeIntoContainer:Ad,version:Gd},Nd=Ke(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Hd}),Ni=Nd.render;var Wi=Symbol(),xi=Symbol(),Fi=Symbol(),Ro=Symbol();function Wt(e,t){function n(...r){if(r.length>=e.length)return e(...r);{let o=(...l)=>n(...r,...l);return o[Wi]=e,o[xi]=n,o[Fi]=r,o[Ro]=n[Ro],o}}return n[Wi]=e,n[xi]=n,n[Fi]=[],n[Ro]=t||Nu(e),n}function Li(e){return e[Wi]}function Wd(e){return e[xi]}function Do(e){return e[Fi]||[]}function Nu(e){return e[Ro]||e.name}function Fd(){let e=[];return{test:t,getAllTests:n};function t(r,o){e.push(...Object.entries(o).map(([l,i])=>xd(r,l,i)))}function n(){return e}}function g(e,t,...n){let r=t(...n,e);if(typeof r=="function")throw new Error("The matcher function `"+_i(r)+"` returned a function instead of a boolean. You might need to pass another argument to it.");if(!r)throw new Po([e,t,...n])}function xd(e,t,n){return{subject:e,scenario:t,fn:n}}var Po=class extends Error{constructor(t){super("Expectation failed");this.expectArgs=t}};function Ld(e){return e[e.length-1]}function Wu(e){return e[0]}var _d=Wt(function(e,t){return e(t)},"which"),B=Wt(function(e,t){var n,r;if(Ud(e))return e(t);if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((o,l)=>B(e[l],t[l]));if(e instanceof Function&&t instanceof Function)return Li(e)&&Li(e)===Li(t)?B(Do(e),Do(t)):e===t;if(e instanceof Date&&t instanceof Date)return e.toISOString()===t.toISOString();if(e instanceof Set&&t instanceof Set)return e.size===t.size&&[...e.values()].every(o=>t.has(o));if(e instanceof Error&&t instanceof Error)return e.message===t.message&&e.__proto__.constructor===t.__proto__.constructor;if(xu(e)&&xu(t)){let o=Object.keys(e),l=Object.keys(t);return o.length===l.length&&o.every(i=>B(e[i],t[i]))&&((n=e.__proto__)==null?void 0:n.constructor)===((r=t.__proto__)==null?void 0:r.constructor)}return e===t},"equals"),E=Wt(function(e,t){return e===t},"is"),Ui=Wt(function(e,t,...n){return!e(t,...n)},"not"),Fu=Wt(function(e){return/^\s*$/.test(e)},"isBlank");function xu(e){return!!e&&typeof e=="object"}function Ud(e){return e instanceof Function&&Wd(e)===_d&&Do(e).length===1}function _i(e){return Nu(e)||"<function>"}function _u(e){let t=[];return n(e);function n(s){var c;if(s===null)return"null";if(typeof s=="function")return r(s,o);if(typeof s=="string")return Oi(s);if(typeof s=="bigint")return`${s}n`;if(Array.isArray(s))return r(s,l);if(s instanceof Date)return`Date(${s.toISOString().replace("T"," ").replace("Z"," UTC")})`;if(s instanceof RegExp)return String(s);if(s instanceof Error)return`${Lu(s)}(${Oi(s.message)})`;if(s instanceof Set)return r(s,a);if(typeof s=="object"){let T=(c=s==null?void 0:s.__proto__)==null?void 0:c.constructor;return T===Object||!T?r(s,i):`${Lu(s)} ${r(s,i)}`}return String(s)}function r(s,c){if(t.indexOf(s)>-1)return"<circular reference>";t.push(s);let T=c(s);return t.pop(),T}function o(s){let c=Do(s).map(n),T=_i(s);return c.length?pr(T+"(",c,",",")"):T}function l(s){return pr("[",s.map(n),",","]")}function i(s){let c=Object.entries(s).map(([T,G])=>`${Od(T)}: ${n(G)}`);return pr("{",c,",","}")}function a(s){let c=[...s.values()].map(n);return pr("Set {",c,",","}")}}function Od(e){return/^[a-zA-Z0-9_$]+$/.test(e)?e:Oi(e)}function Lu(e){return _i(e.__proto__.constructor)}function Oi(e){return'"'+String(e).replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/"/g,'\\"').replace(/[\x00-\x1f\x7f]/g,Bd)+'"'}function Bd(e){let t=e.charCodeAt(0).toString(16);return"\\x"+(t.length<2?"0"+t:t)}function Mo(e,t){return t.split(`
`).map(n=>n&&zd(jd(e," "))(n)).join(`
`)}function jd(e,t){return Array(e+1).join(t)}var zd=e=>t=>e+t,Yd=Wt(function(t,n){return n.slice(0,t.length)===t?n.slice(t.length):n});function Vd(e){return String(e).split(/\r?\n/)}function Qd(e){let t=Vd(e);Fu(Wu(t))&&t.shift(),Fu(Ld(t))&&t.pop();let n=/^[ \t]*/.exec(Wu(t))[0];return t.map(Yd(n)).join(`
`)}function pr(e,t,n,r){return t.length<2?e+t.join("")+r:e+`
`+Mo(2,t.join(n+`
`))+`
`+r}function Ou(e){return Tr(this,null,function*(){let t=[];for(let n of e){let r=yield Jd(n.fn),o=Uu.map(l=>({type:"debug",args:l}));Uu.length=0,t.push({test:n,error:r,instrumentLog:o})}return{results:t}})}function Jd(e){let t;try{let n=e();if(n instanceof Promise)return new Promise(r=>{n.then(()=>r()).catch(r)})}catch(n){t=n}return Promise.resolve(t)}var Uu=[],pp=Wt(function(t,n){return n instanceof Po&&B(t,n.expectArgs)}),Io=`

`;function Bu({results:e}){let t=!1,n=!1,r=[];for(let o of e){let l=!1;o.error&&(l=t=!0),o.instrumentLog.length&&(l=n=!0),l&&r.push(o)}return t?Kd(r):n?Xd(e.length,r):Zd(e.length)}function Kd(e){return e.map(ju).join(Io)+Io+"Tests failed."}function Zd(e){switch(e){case 0:return"No tests to run.";case 1:return"One test ran, and found no issues.";default:return`${e} tests ran, and found no issues.`}}function Xd(e,t){return t.map(ju).join(Io)+Io+qd(e)+`, but debugging instrumentation is present.
Remove it before shipping.`}function qd(e){switch(e){case 1:return"The test passed";case 2:return"Both tests passed";default:return`All ${e} tests passed`}}function ju({test:e,error:t,instrumentLog:n}){let o=[e.subject+" "+e.scenario];return n.length&&o.push(Mo(2,$d(n))),t&&o.push(Mo(2,bd(t))),o.join(`
`)}function bd(e){return e instanceof Po?eh(e):th(e)}function $d(e){return e.map(({args:t})=>zu("debug",t)).join("")}function eh(e){return zu("expect",e.expectArgs)}function th(e){return _u(e)+" thrown"+Mo(2,nh(e.stack))}function zu(e,t){return pr(e+"(",t.map(_u),",",")")}function nh(e){if(!e)return"";let t=Qd(e).split(`
`);return`
`+t.slice(0,rh(t)).map(n=>n.replace(/(file:\/\/|http:\/\/[^/]*)/,"").replace(/^([^@]*)@(.*)$/,"at $1 ($2)")).join(`
`)}function rh(e){let t=e.findIndex(n=>n.includes("errorFrom"));return t===-1?e.length:t}var mp=Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]}),oh=Fd(),{getAllTests:Yu}=oh;function K(...e){}function mt(){return(+new Date%1e6/1e3).toFixed(3)}function z(e,t=0){return isNaN(e)||e===Infinity||e===-Infinity?"--:--":e<0?"-"+Vu(-e,t):Vu(e,t)}function Vu(e,t){function n(i,a=lh){return(i<10?"0":"")+a(i)}let r=Math.floor(e/3600),o=Math.floor(e%3600/60),l=e%60;return r>0?`${r}:${n(o)}:${n(l,Qu(t))}`:`${o}:${n(l,Qu(t))}`}K("hoursMinutesSeconds",{"formats NaN"(){g(z(0/0),E,"--:--")},"formats Infinities"(){g(z(Infinity),E,"--:--"),g(z(-Infinity),E,"--:--")},"formats negative numbers"(){g(z(-1),E,"-0:01"),g(z(-3661.12,2),E,"-1:01:01.12")},"formats single-digit seconds with leading zero"(){g(z(0),E,"0:00"),g(z(1),E,"0:01"),g(z(9),E,"0:09")},"formats double-digit seconds"(){g(z(10),E,"0:10"),g(z(59),E,"0:59")},"formats minutes"(){g(z(60),E,"1:00"),g(z(61),E,"1:01"),g(z(119),E,"1:59"),g(z(120),E,"2:00"),g(z(3599),E,"59:59")},"formats hours"(){g(z(3600),E,"1:00:00"),g(z(7200),E,"2:00:00"),g(z(3661),E,"1:01:01"),g(z(3610),E,"1:00:10"),g(z(3600+600),E,"1:10:00"),g(z(36001),E,"10:00:01")},"adds decimal places"(){g(z(0,0),E,"0:00"),g(z(0,1),E,"0:00.0"),g(z(0,2),E,"0:00.00")},"formats fractional seconds"(){g(z(1.23,2),E,"0:01.23")},"rounds decimals"(){g(z(2.3456,2),E,"0:02.35")}});var lh=e=>e,Qu=e=>t=>t.toFixed(e);function gn(e){var t;return(t=/v=(.{11})/.exec(e))==null?void 0:t[1]}function Ju(){return{getPlayerState(){return ie.UNSTARTED},getCurrentTime(){return 0},getVideoUrl(){return""},cueVideoById(){},playVideo(){},seekTo(){},getDuration(){return 0},addEventListener(){},removeEventListener(){}}}function Ku(e){return{getPlayerState(){return e.getPlayerState()},getCurrentTime(){return e.getCurrentTime()},getVideoUrl(){return e.getVideoUrl()},cueVideoById(...t){return console.debug(mt(),"player.cueVideoById",...t),e.cueVideoById(...t)},playVideo(...t){return console.debug(mt(),"player.playVideo",...t),e.playVideo(...t)},seekTo(...t){return console.debug(mt(),"player.seekTo",...t,gn(e.getVideoUrl())),e.seekTo(...t)},getDuration(){return e.getDuration()},addEventListener(...t){return console.debug(mt(),"player.addEventListener"),e.addEventListener(...t)},removeEventListener(...t){return console.debug(mt(),"player.removeEventListener"),e.removeEventListener(...t)}}}var ie={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};function Zu(e){return Tr(this,null,function*(){let t=yield ih();return new Promise(n=>{let r=new t.Player(e,{height:450,width:800,videoId:null,playerVars:{controls:0,disablekb:1},events:{onReady(){n(r)}}})})})}function ih(){return Xu?Promise.resolve(window.YT):new Promise(e=>{var t;if(document.querySelector("script[src='https://www.youtube.com/iframe_api']")===null){let n=document.createElement("script");n.src="https://www.youtube.com/iframe_api";let r=document.getElementsByTagName("script")[0];(t=r.parentNode)==null||t.insertBefore(n,r)}Bi.push(e)})}var Xu=!1,Bi=[];window.onYouTubeIframeAPIReady=()=>{Xu=!0,Bi.forEach(e=>e(window.YT)),Bi.length=0};function qu(e,t){let n=Tn(),r=Tn();r.current=e,Ut(()=>(n.current=setInterval(()=>{var o;return(o=r.current)==null?void 0:o.call(r)},t),()=>clearInterval(n.current)),[t])}function bu(){let[e,t]=He(!1);return[e,()=>t(!0)]}function mr(e){switch(e){case ie.BUFFERING:return"buffering";case ie.UNSTARTED:return"unstarted";case ie.CUED:return"cued";case ie.ENDED:return"ended";case ie.PLAYING:return"playing";case ie.PAUSED:return"paused";default:return""}}function $u(e){return e.channel.getName()+" "+mr(e.code)}function gr(e){try{e()}catch(t){return t}}function gt(e,t){if(e.length===0)throw new Error("can't pick element from an empty array");if(t>=1||t<0)throw new Error("fraction out of bounds: "+t);return e[Math.floor(t*e.length)]}K("pick",{"throws if the array is empty"(){g(gr(()=>gt([],0)),B,new Error("can't pick element from an empty array"))},"throws if the fraction is 1"(){g(gr(()=>gt([""],1)),B,new Error("fraction out of bounds: 1"))},"throws if the fraction is > 1"(){g(gr(()=>gt([""],1.25)),B,new Error("fraction out of bounds: 1.25"))},"throws if the fraction is > 0"(){g(gr(()=>gt([""],-.25)),B,new Error("fraction out of bounds: -0.25"))},"picks the first element of the array given 0"(){g(gt([1,2],0),E,1)},"picks the last element of the array given 1 - epsilon"(){g(gt([1,2],.99),E,2)}});function yn(e,t){let n={};return r=>(r in n||(Object.keys(n).length===e&&(n={}),n[r]=t(r)),n[r])}K("cache",{"caches a value"(){let e=0,t=yn(1,()=>(e++,123));t("foo"),t("foo"),g(e,E,1)},"computes and caches values by key"(){let e=yn(2,t=>t+"x");g(e("foo"),E,"foox"),g(e("bar"),E,"barx")},"caches multiple values"(){let e=0,t=yn(2,n=>(e++,n+"x"));t("foo"),t("foo"),t("bar"),t("bar"),g(e,E,2),g(t("foo"),E,"foox"),g(t("bar"),E,"barx")},"a max size of 0 means no limit"(){let e=0,t=yn(0,()=>(e++,123));t("a"),t("b"),t("c"),g(e,E,3)}});function yr(e){let t=1779033703,n=3144134277,r=1013904242,o=2773480762;for(let l=0,i;l<e.length;l++)i=e.charCodeAt(l),t=n^Math.imul(t^i,597399067),n=r^Math.imul(n^i,2869860233),r=o^Math.imul(r^i,951274213),o=t^Math.imul(o^i,2716044179);return t=Math.imul(r^t>>>18,597399067),n=Math.imul(o^n>>>22,2869860233),r=Math.imul(t^r>>>17,951274213),o=Math.imul(n^o>>>19,2716044179),(t^n^r^o)>>>0}K("cyrb128_32",{"hashes unix timestamps to random-looking values"(){g(yr("1661673600"),E,1866196007),g(yr("1661760000"),E,3655929289),g(yr("1661846400"),E,2165297363)}});function Ao(e){return function(){var t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}K("mulberry32",{"flips coins fairly"(){let e=0,t=0,n=Ao(0);for(let r=0;r<200;r++)n()<.5?e++:t++;g(e-t,E,12)},"generates a reasonably uniform distribution of numbers"(){let e=new Set,t=Ao(0);for(let n=0;n<100;n++)e.add(Math.floor(t()*1e4));g(e.size,E,99)}});function $(e,t){let n=-1,r=e.length-1;for(;n<r;){let o=ah(n,r);t(e[o])?n=o:r=o-1}return e[n]}function ah(e,t){return Math.ceil((e+t)/2)}K("binarySearch",{"returns undefined given an empty array"(){g($([],()=>!1),E,void 0)},"returns an element that is to the left of the target"(){g($([1],()=>!0),E,1)},"returns undefined when the only element is not left of the target"(){g($([1],()=>!1),E,void 0)},"returns the rightmost element that is left of the target"(){g($([1,2,3,4],e=>e<=2.5),E,2)},"works with duplicates"(){g($([0,1,2,3,0,0,0,0,0],e=>e>0),E,3)},"works with two elements"(){g($([1,2],e=>e<=1.5),E,1),g($([1,2],e=>e<=2),E,2)},"works with three elements"(){g($([1,2,3],e=>e<=1.5),E,1),g($([1,2,3],e=>e<=2),E,2),g($([1,2,3],e=>e<=3),E,3)},"works with four elements"(){g($([1,2,3,4],e=>e<=1.5),E,1),g($([1,2,3,4],e=>e<=2),E,2),g($([1,2,3,4],e=>e<=3),E,3),g($([1,2,3,4],e=>e<=4),E,4)},"works with five elements"(){g($([1,2,3,4,5],e=>e<=1.5),E,1),g($([1,2,3,4,5],e=>e<=2),E,2),g($([1,2,3,4,5],e=>e<=3),E,3),g($([1,2,3,4,5],e=>e<=4),E,4),g($([1,2,3,4,5],e=>e<=5),E,5)}});var Ae=2;function xt(e,t){let n=yn(1,Go(t));return{getBroadcast:r,getName(){return e}};function r(o){let l=o/1e3,i=(l-8*3600)%(24*3600),a=l-i,s=n(String(a)),c=$(s,T=>T.startAt<=i);return c==null?{type:"nothing",nextVideoId:""}:c.type==="video"?{type:"video",videoId:c.videoId,videoTitle:c.videoTitle,currentTime:i-c.startAt}:{type:"nothing",nextVideoId:c.nextVideoId}}}var Go=e=>t=>{let n=Ao(yr(t)),r=0,o=[];for(;r<24*3600;){let l=gt(e,n());for(let i of l.videos)o.push({type:"nothing",startAt:r,nextVideoId:i.videoId},{type:"video",videoId:i.videoId,videoTitle:i.title,startAt:r+Ae}),r+=i.durationSeconds+Ae}return o};K("ScheduleGenerator",{"schedules a single 24-hour video"(){let e=[{videos:[{durationSeconds:3600*24,videoId:"the-video-id",title:"the-title"}]}],t=Go(e);g(t(""),B,[{type:"nothing",startAt:0,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:"the-title",startAt:2}])},"schedules a 12-hour video twice"(){let e=[{videos:[{durationSeconds:3600*12,videoId:"the-video-id",title:"the-title"}]}],t=Go(e);g(t(""),B,[{type:"nothing",startAt:0,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:"the-title",startAt:2},{type:"nothing",startAt:43202,nextVideoId:"the-video-id"},{type:"video",videoId:"the-video-id",videoTitle:"the-title",startAt:43204}])},"picks the videos to show randomly"(){let e=[{videos:[{durationSeconds:3600*2,videoId:"one",title:""}]},{videos:[{durationSeconds:3600*2,videoId:"two",title:""}]},{videos:[{durationSeconds:3600*2,videoId:"three",title:""}]}],t=Go(e);g(t("asdfx").map(n=>n.videoId).filter(Boolean),B,["three","one","three","two","two","three","one","three","two","two","one","one"])}});function ec(e){return{type:"nothing",nextVideoId:e}}function Je(e,t){return{getBroadcast:n=>{let r=n/1e3,o=0,l=t.map(a=>a.durationSeconds).reduce(sh,0)+t.length*Ae,i=r%l;for(let a of t){let{videoId:s,title:c,durationSeconds:T}=a;if(o+Ae>i)return ec(s);if(o+=Ae,o+T>i)return{type:"video",currentTime:i-o,videoId:s,videoTitle:c};o+=T}return ec("")},getName:()=>e}}var sh=(e,t)=>e+t;K("looping channel",{"plays the first episode after the second"(){let e=Je("Jonathan",[{videoId:"first",title:"The First",durationSeconds:100},{videoId:"second",title:"The Second",durationSeconds:100}]);g(e.getBroadcast(250*1e3),B,{videoId:"first",videoTitle:"The First",currentTime:44,type:"video"})},"uses the provided name"(){let e=Je("Jonathan",[]);g(e.getName(),E,"Jonathan")},"when no videos are provided, plays nothing"(){let e=Je("Jonathan",[]);g(e.getBroadcast(42).type,E,"nothing")},"plays a first video at the beginning"(){let e=Je("Jonathan",[{videoId:"the-id",title:"the-title",durationSeconds:42}]);g(e.getBroadcast(0+Ae*1e3),B,{type:"video",videoId:"the-id",currentTime:0,videoTitle:"the-title"})},"plays a video all the way though"(){let e=Je("Jonathan",[{videoId:"the-id",title:"the-title",durationSeconds:42}]);g(e.getBroadcast(1e3+Ae*1e3),B,{type:"video",videoId:"the-id",currentTime:1,videoTitle:"the-title"})},"puts a gap between videos"(){let e=Je("Jonathan",[{videoId:"first",title:"The First",durationSeconds:100},{videoId:"second",title:"The Second",durationSeconds:10}]);g(e.getBroadcast(103*1e3),B,{type:"nothing",nextVideoId:"second"})},"plays a second episode after the first"(){let e=Je("Jonathan",[{videoId:"first",title:"The First",durationSeconds:1},{videoId:"second",title:"The Second",durationSeconds:1}]);g(e.getBroadcast(2*Ae*1e3+1e3),B,{type:"video",videoId:"second",currentTime:0,videoTitle:"The Second"})}});function ee(e){return e.split(/\n+/).map(ch).filter(Ui(uh)).filter(Ui(fh)).map(vr(/ +/,3)).flatMap(([t,n,r])=>n==="SHORTS"?[]:[{videoId:t,durationSeconds:Ge(n),title:r}])}K("parseVideos",{"empty string"(){g(ee(""),B,[])},spaces(){g(ee("  "),B,[])},newlines(){g(ee(`


`),B,[])},"newlines and spaces"(){g(ee(` 
 
 
`),B,[])},comments(){g(ee(`#foo
# bar`),B,[])},"strips spaces before comments"(){g(ee(`  #foo
  # bar`),B,[])},"parses actual data"(){g(ee(`
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
      Ga8tNxnHjt4 3:01 Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971
    `),B,[{videoId:"leb645Xu6uo",durationSeconds:654,title:"Captain Murderer - Emlyn Williams"},{videoId:"Ga8tNxnHjt4",durationSeconds:181,title:"Sut Wnaethoch Chi Sillafu Caernarfon? Y Dydd 1971"}])},"removes shorts"(){g(ee(`
      undefined SHORTS blah blah
      leb645Xu6uo 10:54 Captain Murderer - Emlyn Williams
    `),B,[{videoId:"leb645Xu6uo",durationSeconds:654,title:"Captain Murderer - Emlyn Williams"}])}});function uh(e){return e.startsWith("#")}function Ge(e){let t=[1,60,3600,86400],n=e.split(":").map(r=>parseInt(r,10)).reverse();return dh(n,t).map(([r,o])=>r*o).reduce(hh,0)}K("parseDuration",{"0:00"(){g(Ge("0:00"),E,0)},"00:00"(){g(Ge("00:00"),E,0)},"1 second"(){g(Ge("0:01"),E,1)},"10 seconds"(){g(Ge("0:10"),E,10)},"1 minute"(){g(Ge("1:00"),E,60)},"1 minute 10 seconds"(){g(Ge("1:10"),E,70)},"10 minutes 10 seconds"(){g(Ge("10:10"),E,610)},"1 hour"(){g(Ge("1:00:00"),E,3600)},"1 hour 1 second"(){g(Ge("1:00:01"),E,3601)},"10 hours 1 second"(){g(Ge("10:00:01"),E,36001)},"1 day 1 second"(){g(Ge("1:0:00:01"),E,86401)}});function ch(e){return e.trim()}function fh(e){return e.length===0}var vr=(e,t=Infinity)=>n=>{if(typeof e=="string"&&e.length===0)throw"split(): empty delimiter not supported";let r=0,o=0,l=[],i=n;for(;l.length<t-1&&i.length>0;){let a=i.match(e);if(a==null)break;l.push(i.slice(0,a.index)),i=i.slice(a.index+a[0].length)}return l.push(i),l};K("split",{"empty string"(){g(vr(" ")(""),B,[""])},"no limit"(){g(vr(" ")("a b c"),B,["a","b","c"])},limit(){g(vr(" ",2)("a b c"),B,["a","b c"])},regex(){g(vr(/ +/)("a b   c"),B,["a","b","c"])}});function dh(e,t){let n=[];for(let r=0;r<e.length&&r<t.length;r++)n.push([e[r],t[r]]);return n}function hh(e,t){return e+t}var ji=(...e)=>e.reduce(ph),tc=mh(ji(ee,e=>({videos:e})))([`
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
`]);K("pipe",{"given one function"(){g(ji(t=>t+1)(1),E,2)},"given two functions"(){let e=t=>t+1;g(ji(e,e)(1),E,3)}});function ph(e,t){return(...n)=>t(e(...n))}function mh(e){return t=>t.map(e)}var zi=(...e)=>e.reduce(gh),nc=yh(zi(ee,e=>({videos:e})))(["BecZdQvjGrY 54:49 In Gowan Ring - Compendium (Full Album)","B3oAx9VmAdA 43:52 In Gowan Ring - Hazel Steps Through A Weathered Home",`
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
  `]);K("pipe",{"given one function"(){g(zi(t=>t+1)(1),E,2)},"given two functions"(){let e=t=>t+1;g(zi(e,e)(1),E,3)}});function gh(e,t){return(...n)=>t(e(...n))}function yh(e){return t=>t.map(e)}var Th=(...e)=>e.reduce(vh);function vh(e,t){return(...n)=>t(e(...n))}function Sh(e){return t=>t.map(e)}var mm=ee(`
    vKXu0CzRcrI 0:16 Here's Tree
    ieWm9T_GgSA 0:08 I'm Lost
    zBIx-gP-I8c 0:51 Strong Bad Email #1 - Some Kinda Robot
    BHLsrzYt-H4 0:52 Strong Bad Email #2 - Homsar
    wRKrv-RlJOw 1:01 Strong Bad Email #6 - Depressio
    Lml_AKkhCVY 1:01 Strong Bad Email #9 - I Love You
`),rc=ee(`
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
`),lc=ee(`

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

`),ic=Sh(Th(ee,e=>({videos:e})))([`
    BShj3SPzpSk 7:15 Eternal Reaches - Lodaris Sub-sector worlds
    Thj22uZuWa4 4:38 Eternal Reaches GIVEAWAY - Mongoose Traveller 2ed Starter Set - Competition NOW CLOSED
    11_7X-Ey7AA 22:56 Eternal Reaches - Lodaris Sub-Sector Interstellar Factions
    _lorRfxn-sU 13:06 Eternal Reaches - The Intersection - Traveller Setting
`,`
    4-OoJwwDLm4 1:52:32 RenSpace - Traveller MgT2e Worldbuilding - Session 1
    2OFEebuUg9M 1:15:54 RenSpace - Traveller MgT2e Worldbuilding - Session 2
    uQsqPKM9_jo 1:27:35 RenSpace - Traveller MgT2e Worldbuilding - Session 3
`]),ac=ee(`
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
`);var No=[xt("Channel 1",rc.map(Ho)),xt("Channel 2",oc.map(Ho)),xt("Channel 3",nc),xt("Channel 4",[...lc.map(Ho),...ic]),xt("Channel 5",ac.map(Ho)),Je("Channel 6",sc),xt("Channel 7",tc)];function Ho(e){return{videos:[e]}}function uc(e){return P(_t,null,No.map(t=>P("button",{key:t.getName(),onClick:()=>e.onChannelSelected(t)},t.getName())))}function cc(){let[e,t]=He(+new Date);return qu(()=>t(+new Date),250),e}function fc(e=""){return{type:"nothing",nextVideoId:e}}function dc(e,t){let{state:n,videoId:r,time:o}=t;if(e.type==="nothing")switch(n){case ie.ENDED:case ie.CUED:case ie.UNSTARTED:return e.nextVideoId?r!==e.nextVideoId?[{type:"cue",videoId:e.nextVideoId,timestamp:0}]:[{type:"seek",timestamp:0},{type:"play"}]:[];default:return[]}else{if(n===ie.BUFFERING)return[];let{videoId:l,currentTime:i}=e;if(r!==l)return[{type:"cue",videoId:l,timestamp:i<Ae?0:i}];{let a=[];switch(n){case ie.PAUSED:case ie.CUED:case ie.UNSTARTED:r&&a.push({type:"play"})}return o&&Eh(o,i)>=Ae&&(console.debug("time is off; seeking",o,i),a.push({type:"seek",timestamp:i})),a}}}function Eh(e,t){return Math.abs(e-t)}var wh=0;function Ch(){let[,e]=He(0);return()=>e(++wh)}function hc(e){let t=Ch(),n=Tn(Ju());return Ut(()=>{Zu(e).then(r=>{n.current=r,r.addEventListener("onStateChange",o=>{console.debug(mt(),"player onStateChange",mr(o.data),gn(r.getVideoUrl())),t()}),t()})},[e]),n.current}function kh({broadcast:e,player:t}){var r;let n=o=>z(o,2);return{videoLink:e.type==="video"?{text:e.videoTitle,href:"https://youtube.com/watch?v="+e.videoId}:null,actual:{video:(r=t.videoId)!=null?r:"",playerState:mr(t.state),currentTime:t.time!=null?n(t.time):"-"},scheduled:{video:e.type==="video"?e.videoId:"-",playerState:e.type,currentTime:e.type==="video"?n(e.currentTime):"-"},secondsBehindSchedule:e.type==="video"&&t.time!=null?(e.currentTime-t.time).toFixed(2):"-",timeRemainingInVideo:t.duration!=null&&t.time!=null?n(t.duration-t.time):"-"}}function pc(e){let{broadcast:t,player:n,onClose:r}=e,o=kh({broadcast:t,player:n});return P(_t,null,P("button",{class:"close-button",onClick:r},"close"),P("h1",null,"Culture Machine"),P("p",null,"Made by ",P("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."," ",P("a",{href:"https://github.com/benchristel/tv"},"Source code here"),". Some rights reserved. See the"," ",P("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"license"),"."),P("hr",null),P("h2",null,"Video Info"),P("p",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},"Now playing:"," ",o.videoLink?P("a",{href:o.videoLink.href},o.videoLink.text):"-"),P("table",null,P("thead",null,P("tr",null,P("td",null),P("th",{scope:"col"},"actual"),P("th",{scope:"col"},"scheduled"))),P("tbody",null,P("tr",null,P("th",{scope:"row"},"video"),P("td",null,o.actual.video),P("td",null,o.scheduled.video)),P("tr",null,P("th",{scope:"row"},"player state"),P("td",null,o.actual.playerState),P("td",null,o.scheduled.playerState)),P("tr",null,P("th",{scope:"row"},"current time"),P("td",null,o.actual.currentTime),P("td",null,o.scheduled.currentTime)))),P("p",null,"Seconds behind schedule: ",o.secondsBehindSchedule),P("p",null,"Time remaining in video: ",o.timeRemainingInVideo))}var Yi=class extends Qi{componentDidUpdate(){let{player:t,commands:n}=this.props;n.forEach(r=>{switch(r.type){case"play":t.playVideo();break;case"cue":t.cueVideoById(r.videoId,r.timestamp);break;case"seek":t.seekTo(r.timestamp);break;default:console.error("unexpected video command type",r.type,r)}})}render(){return null}};function mc(e){return{state:e.getPlayerState(),videoId:gn(e.getVideoUrl()),time:e.getCurrentTime(),duration:e.getDuration()}}function gc(){let[e,t]=bu(),[n,r]=He(!1),[o,l]=He(No[0]),i=cc(),a=e?o.getBroadcast(i):fc(),s=Ku(hc("player-container")),c=mc(s),T=c.state,G=T!==ie.PLAYING,y=dc(a,c);return P(Rh,{effects:P(Yi,{commands:y,player:s}),screen:P("div",{className:n?"info-pane-open":""},P("div",{className:"player-assembly"},P("div",{id:"player-container"}),G&&P("div",{className:"black-screen"},P($u,{code:T,channel:o})),!e&&P(Dh,{onClick:t})),P("div",{className:"info-pane"},P(pc,{player:c,broadcast:a,onClose:()=>r(!1)})),P("div",{className:"info-pane-close-overlay","aria-hidden":!0,onClick:()=>r(!1)})),controlPanel:P(_t,null,P(uc,{onChannelSelected:k=>{l(k),t()}}),P("button",{className:n?"info-button info-button-info-pane-open":"info-button",onClick:()=>r(!n)},"Info"))})}function Rh(e){return P("div",{className:"App"},P("div",{className:"bezel"},P("div",{className:"screen"},e.screen),P("div",{style:{height:"12px"}}),P("div",{className:"controls"},e.controlPanel),e.effects))}function Dh(e){return P("button",{id:"start",onClick:e.onClick},"▸ Play")}function yc(){let[e,t]=He("");return Ut(()=>{Ou(Yu()).then(Bu).then(t).catch(n=>t(n.message))},[]),/fail/i.test(e)?P("div",{className:"TestResults"},P("code",null,P("pre",null,e))):null}Ni(P(gc,null),document.getElementById("app"));Ni(P(yc,null),document.getElementById("test-results"));
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
