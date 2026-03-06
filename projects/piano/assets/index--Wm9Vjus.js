(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Fy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function By(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var e=r.default;if(typeof e=="function"){var i=function s(){var l=!1;try{l=this instanceof s}catch{}return l?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};i.prototype=e.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(r).forEach(function(s){var l=Object.getOwnPropertyDescriptor(r,s);Object.defineProperty(i,s,l.get?l:{enumerable:!0,get:function(){return r[s]}})}),i}var _h={exports:{}},Xo={};var sv;function zy(){if(sv)return Xo;sv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=e,Xo.jsx=i,Xo.jsxs=i,Xo}var rv;function Hy(){return rv||(rv=1,_h.exports=zy()),_h.exports}var H=Hy(),xh={exports:{}},rt={};var ov;function Gy(){if(ov)return rt;ov=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function _(O,ne,ve){this.props=O,this.context=ne,this.refs=y,this.updater=ve||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function T(){}T.prototype=_.prototype;function N(O,ne,ve){this.props=O,this.context=ne,this.refs=y,this.updater=ve||E}var R=N.prototype=new T;R.constructor=N,A(R,_.prototype),R.isPureReactComponent=!0;var L=Array.isArray;function B(){}var I={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function D(O,ne,ve){var we=ve.ref;return{$$typeof:r,type:O,key:ne,ref:we!==void 0?we:null,props:ve}}function U(O,ne){return D(O.type,ne,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function ie(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ve){return ne[ve]})}var W=/\/+/g;function oe(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?ie(""+O.key):ne.toString(36)}function ue(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(ne){O.status==="pending"&&(O.status="fulfilled",O.value=ne)},function(ne){O.status==="pending"&&(O.status="rejected",O.reason=ne)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,ne,ve,we,ze){var ae=typeof O;(ae==="undefined"||ae==="boolean")&&(O=null);var he=!1;if(O===null)he=!0;else switch(ae){case"bigint":case"string":case"number":he=!0;break;case"object":switch(O.$$typeof){case r:case e:he=!0;break;case g:return he=O._init,F(he(O._payload),ne,ve,we,ze)}}if(he)return ze=ze(O),he=we===""?"."+oe(O,0):we,L(ze)?(ve="",he!=null&&(ve=he.replace(W,"$&/")+"/"),F(ze,ne,ve,"",function(Ve){return Ve})):ze!=null&&(V(ze)&&(ze=U(ze,ve+(ze.key==null||O&&O.key===ze.key?"":(""+ze.key).replace(W,"$&/")+"/")+he)),ne.push(ze)),1;he=0;var Re=we===""?".":we+":";if(L(O))for(var Ge=0;Ge<O.length;Ge++)we=O[Ge],ae=Re+oe(we,Ge),he+=F(we,ne,ve,ae,ze);else if(Ge=S(O),typeof Ge=="function")for(O=Ge.call(O),Ge=0;!(we=O.next()).done;)we=we.value,ae=Re+oe(we,Ge++),he+=F(we,ne,ve,ae,ze);else if(ae==="object"){if(typeof O.then=="function")return F(ue(O),ne,ve,we,ze);throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return he}function z(O,ne,ve){if(O==null)return O;var we=[],ze=0;return F(O,we,"","",function(ae){return ne.call(ve,ae,ze++)}),we}function J(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(ve){(O._status===0||O._status===-1)&&(O._status=1,O._result=ve)},function(ve){(O._status===0||O._status===-1)&&(O._status=2,O._result=ve)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var Me=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Se={map:z,forEach:function(O,ne,ve){z(O,function(){ne.apply(this,arguments)},ve)},count:function(O){var ne=0;return z(O,function(){ne++}),ne},toArray:function(O){return z(O,function(ne){return ne})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return rt.Activity=v,rt.Children=Se,rt.Component=_,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=N,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,rt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},rt.cache=function(O){return function(){return O.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(O,ne,ve){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var we=A({},O.props),ze=O.key;if(ne!=null)for(ae in ne.key!==void 0&&(ze=""+ne.key),ne)!Z.call(ne,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&ne.ref===void 0||(we[ae]=ne[ae]);var ae=arguments.length-2;if(ae===1)we.children=ve;else if(1<ae){for(var he=Array(ae),Re=0;Re<ae;Re++)he[Re]=arguments[Re+2];we.children=he}return D(O.type,ze,we)},rt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},rt.createElement=function(O,ne,ve){var we,ze={},ae=null;if(ne!=null)for(we in ne.key!==void 0&&(ae=""+ne.key),ne)Z.call(ne,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(ze[we]=ne[we]);var he=arguments.length-2;if(he===1)ze.children=ve;else if(1<he){for(var Re=Array(he),Ge=0;Ge<he;Ge++)Re[Ge]=arguments[Ge+2];ze.children=Re}if(O&&O.defaultProps)for(we in he=O.defaultProps,he)ze[we]===void 0&&(ze[we]=he[we]);return D(O,ae,ze)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(O){return{$$typeof:d,render:O}},rt.isValidElement=V,rt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:J}},rt.memo=function(O,ne){return{$$typeof:p,type:O,compare:ne===void 0?null:ne}},rt.startTransition=function(O){var ne=I.T,ve={};I.T=ve;try{var we=O(),ze=I.S;ze!==null&&ze(ve,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(B,Me)}catch(ae){Me(ae)}finally{ne!==null&&ve.types!==null&&(ne.types=ve.types),I.T=ne}},rt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},rt.use=function(O){return I.H.use(O)},rt.useActionState=function(O,ne,ve){return I.H.useActionState(O,ne,ve)},rt.useCallback=function(O,ne){return I.H.useCallback(O,ne)},rt.useContext=function(O){return I.H.useContext(O)},rt.useDebugValue=function(){},rt.useDeferredValue=function(O,ne){return I.H.useDeferredValue(O,ne)},rt.useEffect=function(O,ne){return I.H.useEffect(O,ne)},rt.useEffectEvent=function(O){return I.H.useEffectEvent(O)},rt.useId=function(){return I.H.useId()},rt.useImperativeHandle=function(O,ne,ve){return I.H.useImperativeHandle(O,ne,ve)},rt.useInsertionEffect=function(O,ne){return I.H.useInsertionEffect(O,ne)},rt.useLayoutEffect=function(O,ne){return I.H.useLayoutEffect(O,ne)},rt.useMemo=function(O,ne){return I.H.useMemo(O,ne)},rt.useOptimistic=function(O,ne){return I.H.useOptimistic(O,ne)},rt.useReducer=function(O,ne,ve){return I.H.useReducer(O,ne,ve)},rt.useRef=function(O){return I.H.useRef(O)},rt.useState=function(O){return I.H.useState(O)},rt.useSyncExternalStore=function(O,ne,ve){return I.H.useSyncExternalStore(O,ne,ve)},rt.useTransition=function(){return I.H.useTransition()},rt.version="19.2.4",rt}var lv;function lp(){return lv||(lv=1,xh.exports=Gy()),xh.exports}var xt=lp();const wc=Fy(xt);var Sh={exports:{}},Wo={},yh={exports:{}},Mh={};var cv;function Vy(){return cv||(cv=1,(function(r){function e(F,z){var J=F.length;F.push(z);e:for(;0<J;){var Me=J-1>>>1,Se=F[Me];if(0<l(Se,z))F[Me]=z,F[J]=Se,J=Me;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var z=F[0],J=F.pop();if(J!==z){F[0]=J;e:for(var Me=0,Se=F.length,O=Se>>>1;Me<O;){var ne=2*(Me+1)-1,ve=F[ne],we=ne+1,ze=F[we];if(0>l(ve,J))we<Se&&0>l(ze,ve)?(F[Me]=ze,F[we]=J,Me=we):(F[Me]=ve,F[ne]=J,Me=ne);else if(we<Se&&0>l(ze,J))F[Me]=ze,F[we]=J,Me=we;else break e}}return z}function l(F,z){var J=F.sortIndex-z.sortIndex;return J!==0?J:F.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,v=null,x=3,S=!1,E=!1,A=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var z=i(p);z!==null;){if(z.callback===null)s(p);else if(z.startTime<=F)s(p),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(p)}}function L(F){if(A=!1,R(F),!E)if(i(m)!==null)E=!0,B||(B=!0,ie());else{var z=i(p);z!==null&&ue(L,z.startTime-F)}}var B=!1,I=-1,Z=5,D=-1;function U(){return y?!0:!(r.unstable_now()-D<Z)}function V(){if(y=!1,B){var F=r.unstable_now();D=F;var z=!0;try{e:{E=!1,A&&(A=!1,T(I),I=-1),S=!0;var J=x;try{t:{for(R(F),v=i(m);v!==null&&!(v.expirationTime>F&&U());){var Me=v.callback;if(typeof Me=="function"){v.callback=null,x=v.priorityLevel;var Se=Me(v.expirationTime<=F);if(F=r.unstable_now(),typeof Se=="function"){v.callback=Se,R(F),z=!0;break t}v===i(m)&&s(m),R(F)}else s(m);v=i(m)}if(v!==null)z=!0;else{var O=i(p);O!==null&&ue(L,O.startTime-F),z=!1}}break e}finally{v=null,x=J,S=!1}z=void 0}}finally{z?ie():B=!1}}}var ie;if(typeof N=="function")ie=function(){N(V)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,oe=W.port2;W.port1.onmessage=V,ie=function(){oe.postMessage(null)}}else ie=function(){_(V,0)};function ue(F,z){I=_(function(){F(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(F){switch(x){case 1:case 2:case 3:var z=3;break;default:z=x}var J=x;x=z;try{return F()}finally{x=J}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(F,z){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=x;x=F;try{return z()}finally{x=J}},r.unstable_scheduleCallback=function(F,z,J){var Me=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Me+J:Me):J=Me,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=J+Se,F={id:g++,callback:z,priorityLevel:F,startTime:J,expirationTime:Se,sortIndex:-1},J>Me?(F.sortIndex=J,e(p,F),i(m)===null&&F===i(p)&&(A?(T(I),I=-1):A=!0,ue(L,J-Me))):(F.sortIndex=Se,e(m,F),E||S||(E=!0,B||(B=!0,ie()))),F},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(F){var z=x;return function(){var J=x;x=z;try{return F.apply(this,arguments)}finally{x=J}}}})(Mh)),Mh}var uv;function ky(){return uv||(uv=1,yh.exports=Vy()),yh.exports}var bh={exports:{}},On={};var fv;function Xy(){if(fv)return On;fv=1;var r=lp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},On.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.2.4",On}var hv;function Wy(){if(hv)return bh.exports;hv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),bh.exports=Xy(),bh.exports}var dv;function qy(){if(dv)return Wo;dv=1;var r=ky(),e=lp(),i=Wy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),t;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,w=u.child;w;){if(w===a){M=!0,a=u,o=h;break}if(w===o){M=!0,o=u,a=h;break}w=w.sibling}if(!M){for(w=h.child;w;){if(w===a){M=!0,a=h,o=u;break}if(w===o){M=!0,o=h,a=u;break}w=w.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),N=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ie(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var W=Symbol.for("react.client.reference");function oe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===W?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case L:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return t.displayName||"Context";case T:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:oe(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return oe(t(n))}catch{}}return null}var ue=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},Me=[],Se=-1;function O(t){return{current:t}}function ne(t){0>Se||(t.current=Me[Se],Me[Se]=null,Se--)}function ve(t,n){Se++,Me[Se]=t.current,t.current=n}var we=O(null),ze=O(null),ae=O(null),he=O(null);function Re(t,n){switch(ve(ae,n),ve(ze,t),ve(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Cg(n),t=Rg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(we),ve(we,t)}function Ge(){ne(we),ne(ze),ne(ae)}function Ve(t){t.memoizedState!==null&&ve(he,t);var n=we.current,a=Rg(n,t.type);n!==a&&(ve(ze,t),ve(we,a))}function mt(t){ze.current===t&&(ne(we),ne(ze)),he.current===t&&(ne(he),Ho._currentValue=J)}var en,St;function gt(t){if(en===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",St=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+t+St}var Ut=!1;function lt(t,n){if(!t||Ut)return"";Ut=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ce){var re=ce}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ce){re=ce}t.call(_e.prototype)}}else{try{throw Error()}catch(ce){re=ce}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ce){if(ce&&re&&typeof ce.stack=="string")return[ce.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],w=h[1];if(M&&w){var G=M.split(`
`),ee=w.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ee.length)for(o=G.length-1,u=ee.length-1;1<=o&&0<=u&&G[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ee[u]){var de=`
`+G[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=u);break}}}finally{Ut=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?gt(a):""}function tn(t,n){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return lt(t.type,!1);case 11:return lt(t.type.render,!1);case 1:return lt(t.type,!0);case 31:return gt("Activity");default:return""}}function k(t){try{var n="",a=null;do n+=tn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Zt=Object.prototype.hasOwnProperty,Tt=r.unstable_scheduleCallback,It=r.unstable_cancelCallback,Ye=r.unstable_shouldYield,P=r.unstable_requestPaint,b=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,me=r.unstable_ImmediatePriority,ye=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,Ze=r.unstable_LowPriority,De=r.unstable_IdlePriority,We=r.log,nt=r.unstable_setDisableYieldValue,Ee=null,Te=null;function Be(t){if(typeof We=="function"&&nt(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Ee,t)}catch{}}var Ie=Math.clz32?Math.clz32:q,Ne=Math.log,ut=Math.LN2;function q(t){return t>>>=0,t===0?32:31-(Ne(t)/ut|0)|0}var Le=256,Ae=262144,Fe=4194304;function be(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~h,o!==0?u=be(o):(M&=w,M!==0?u=be(M):a||(a=w&~t,a!==0&&(u=be(a))))):(w=o&~h,w!==0?u=be(w):M!==0?u=be(M):a||(a=o&~t,a!==0&&(u=be(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function at(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var t=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),t}function At(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ln(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,o,u,h){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,G=t.expirationTimes,ee=t.hiddenUpdates;for(a=M&~a;0<a;){var de=31-Ie(a),_e=1<<de;w[de]=0,G[de]=-1;var re=ee[de];if(re!==null)for(ee[de]=null,de=0;de<re.length;de++){var ce=re[de];ce!==null&&(ce.lane&=-536870913)}a&=~_e}o!==0&&gl(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(M&~n))}function gl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ie(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Qr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ie(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ks(t,n){var a=n&-n;return a=(a&42)!==0?1:Jr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Jr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $r(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:Jg(t.type))}function Di(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var oi=Math.random().toString(36).slice(2),ln="__reactFiber$"+oi,Sn="__reactProps$"+oi,Si="__reactContainer$"+oi,Ws="__reactEvents$"+oi,qs="__reactListeners$"+oi,vl="__reactHandles$"+oi,eo="__reactResources$"+oi,cs="__reactMarker$"+oi;function to(t){delete t[ln],delete t[Sn],delete t[Ws],delete t[qs],delete t[vl]}function Aa(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Si]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ig(t);t!==null;){if(a=t[ln])return a;t=Ig(t)}return n}t=a,a=t.parentNode}return null}function wa(t){if(t=t[ln]||t[Si]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function us(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ca(t){var n=t[eo];return n||(n=t[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(t){t[cs]=!0}var Y=new Set,le={};function se(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(le[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),He={},Oe={};function ke(t){return Zt.call(Oe,t)?!0:Zt.call(He,t)?!1:Ue.test(t)?Oe[t]=!0:(He[t]=!0,!1)}function qe(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function je(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,h.call(this,M)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jt(t){if(!t._valueTracker){var n=Lt(t)?"checked":"value";t._valueTracker=Qt(t,n,""+t[n])}}function Ft(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Lt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function st(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(t,n,a,o,u,h,M,w){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?Mn(t,M,et(n)):a!=null?Mn(t,M,et(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+et(w):t.removeAttribute("name")}function Yi(t,n,a,o,u,h,M,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){jt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),jt(t)}function Mn(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function li(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function zt(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function bn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ue(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),jt(t)}function pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function js(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Tn(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Tn(t,h,n[h])}function yi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ox=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _l(t){return Ox.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var pu=null;function mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ys=null,Ks=null;function wp(t){var n=wa(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;e:switch(t=n.stateNode,n.type){case"input":if(yn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Sn]||null;if(!u)throw Error(s(90));yn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ft(o)}break e;case"textarea":zt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&li(t,!!a.multiple,n,!1)}}}var gu=!1;function Cp(t,n,a){if(gu)return t(n,a);gu=!0;try{var o=t(n);return o}finally{if(gu=!1,(Ys!==null||Ks!==null)&&(sc(),Ys&&(n=Ys,t=Ks,Ks=Ys=null,wp(n),t)))for(n=0;n<t.length;n++)wp(t[n])}}function no(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=!1;if(Zi)try{var io={};Object.defineProperty(io,"passive",{get:function(){vu=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{vu=!1}var Ra=null,_u=null,xl=null;function Rp(){if(xl)return xl;var t,n=_u,a=n.length,o,u="value"in Ra?Ra.value:Ra.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var M=a-t;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return xl=u.slice(t,1<o?1-o:void 0)}function Sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function Dp(){return!1}function Vn(t){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?yl:Dp,this.isPropagationStopped=Dp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=Vn(fs),ao=v({},fs,{view:0,detail:0}),Px=Vn(ao),xu,Su,so,bl=v({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(xu=t.screenX-so.screenX,Su=t.screenY-so.screenY):Su=xu=0,so=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),Np=Vn(bl),Ix=v({},bl,{dataTransfer:0}),Fx=Vn(Ix),Bx=v({},ao,{relatedTarget:0}),yu=Vn(Bx),zx=v({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=Vn(zx),Gx=v({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vx=Vn(Gx),kx=v({},fs,{data:0}),Up=Vn(kx),Xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=qx[t])?!!n[t]:!1}function Mu(){return jx}var Yx=v({},ao,{key:function(t){if(t.key){var n=Xx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kx=Vn(Yx),Zx=v({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=Vn(Zx),Qx=v({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Jx=Vn(Qx),$x=v({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),eS=Vn($x),tS=v({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=Vn(tS),iS=v({},fs,{newState:0,oldState:0}),aS=Vn(iS),sS=[9,13,27,32],bu=Zi&&"CompositionEvent"in window,ro=null;Zi&&"documentMode"in document&&(ro=document.documentMode);var rS=Zi&&"TextEvent"in window&&!ro,Op=Zi&&(!bu||ro&&8<ro&&11>=ro),Pp=" ",Ip=!1;function Fp(t,n){switch(t){case"keyup":return sS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zs=!1;function oS(t,n){switch(t){case"compositionend":return Bp(n);case"keypress":return n.which!==32?null:(Ip=!0,Pp);case"textInput":return t=n.data,t===Pp&&Ip?null:t;default:return null}}function lS(t,n){if(Zs)return t==="compositionend"||!bu&&Fp(t,n)?(t=Rp(),xl=_u=Ra=null,Zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!cS[t.type]:n==="textarea"}function Hp(t,n,a,o){Ys?Ks?Ks.push(o):Ks=[o]:Ys=o,n=hc(n,"onChange"),0<n.length&&(a=new Ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var oo=null,lo=null;function uS(t){Mg(t,0)}function El(t){var n=us(t);if(Ft(n))return t}function Gp(t,n){if(t==="change")return n}var Vp=!1;if(Zi){var Eu;if(Zi){var Tu="oninput"in document;if(!Tu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Tu=typeof kp.oninput=="function"}Eu=Tu}else Eu=!1;Vp=Eu&&(!document.documentMode||9<document.documentMode)}function Xp(){oo&&(oo.detachEvent("onpropertychange",Wp),lo=oo=null)}function Wp(t){if(t.propertyName==="value"&&El(lo)){var n=[];Hp(n,lo,t,mu(t)),Cp(uS,n)}}function fS(t,n,a){t==="focusin"?(Xp(),oo=n,lo=a,oo.attachEvent("onpropertychange",Wp)):t==="focusout"&&Xp()}function hS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(lo)}function dS(t,n){if(t==="click")return El(n)}function pS(t,n){if(t==="input"||t==="change")return El(n)}function mS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:mS;function co(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Zt.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jp(t,n){var a=qp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qp(a)}}function Yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function Au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var gS=Zi&&"documentMode"in document&&11>=document.documentMode,Qs=null,wu=null,uo=null,Cu=!1;function Zp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||Qs==null||Qs!==Qe(o)||(o=Qs,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),uo&&co(uo,o)||(uo=o,o=hc(wu,"onSelect"),0<o.length&&(n=new Ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Qs)))}function hs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Js={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Ru={},Qp={};Zi&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function ds(t){if(Ru[t])return Ru[t];if(!Js[t])return t;var n=Js[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qp)return Ru[t]=n[a];return t}var Jp=ds("animationend"),$p=ds("animationiteration"),em=ds("animationstart"),vS=ds("transitionrun"),_S=ds("transitionstart"),xS=ds("transitioncancel"),tm=ds("transitionend"),nm=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function Mi(t,n){nm.set(t,n),se(n,[t])}var Tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],$s=0,Nu=0;function Al(){for(var t=$s,n=Nu=$s=0;n<t;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var h=ci[n];if(ci[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&im(a,u,h)}}function wl(t,n,a,o){ci[$s++]=t,ci[$s++]=n,ci[$s++]=a,ci[$s++]=o,Nu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Uu(t,n,a,o){return wl(t,n,a,o),Cl(t)}function ps(t,n){return wl(t,null,null,n),Cl(t)}function im(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Ie(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Cl(t){if(50<Lo)throw Lo=0,Vf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var er={};function SS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,o){return new SS(t,n,a,o)}function Lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qi(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function am(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Rl(t,n,a,o,u,h){var M=0;if(o=t,typeof t=="function")Lu(t)&&(M=1);else if(typeof t=="string")M=Ty(t,a,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Qn(31,a,n,u),t.elementType=D,t.lanes=h,t;case A:return ms(a.children,u,h,n);case y:M=8,u|=24;break;case _:return t=Qn(12,a,n,u|2),t.elementType=_,t.lanes=h,t;case L:return t=Qn(13,a,n,u),t.elementType=L,t.lanes=h,t;case B:return t=Qn(19,a,n,u),t.elementType=B,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:M=10;break e;case T:M=9;break e;case R:M=11;break e;case I:M=14;break e;case Z:M=16,o=null;break e}M=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Qn(M,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function ms(t,n,a,o){return t=Qn(7,t,o,n),t.lanes=a,t}function Ou(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function sm(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function Pu(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var rm=new WeakMap;function ui(t,n){if(typeof t=="object"&&t!==null){var a=rm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:k(n)},rm.set(t,n),n)}return{value:t,source:n,stack:k(n)}}var tr=[],nr=0,Dl=null,fo=0,fi=[],hi=0,Da=null,Ni=1,Ui="";function Ji(t,n){tr[nr++]=fo,tr[nr++]=Dl,Dl=t,fo=n}function om(t,n,a){fi[hi++]=Ni,fi[hi++]=Ui,fi[hi++]=Da,Da=t;var o=Ni;t=Ui;var u=32-Ie(o)-1;o&=~(1<<u),a+=1;var h=32-Ie(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Ni=1<<32-Ie(n)+u|a<<u|o,Ui=h+t}else Ni=1<<h|a<<u|o,Ui=t}function Iu(t){t.return!==null&&(Ji(t,1),om(t,1,0))}function Fu(t){for(;t===Dl;)Dl=tr[--nr],tr[nr]=null,fo=tr[--nr],tr[nr]=null;for(;t===Da;)Da=fi[--hi],fi[hi]=null,Ui=fi[--hi],fi[hi]=null,Ni=fi[--hi],fi[hi]=null}function lm(t,n){fi[hi++]=Ni,fi[hi++]=Ui,fi[hi++]=Da,Ni=n.id,Ui=n.overflow,Da=t}var An=null,Yt=null,bt=!1,Na=null,di=!1,Bu=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(ui(n,t)),Bu}function cm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[Sn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)_t(Po[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Yi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),bn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ag(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Ua(t,!0)}function um(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:An=An.return}}function ir(t){if(t!==An)return!1;if(!bt)return um(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ih(t.type,t.memoizedProps)),a=!a),a&&Yt&&Ua(t),um(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=Pg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=Pg(t)}else n===27?(n=Yt,qa(t.type)?(t=lh,lh=null,Yt=t):Yt=n):Yt=An?mi(t.stateNode.nextSibling):null;return!0}function gs(){Yt=An=null,bt=!1}function zu(){var t=Na;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Na=null),t}function ho(t){Na===null?Na=[t]:Na.push(t)}var Hu=O(null),vs=null,$i=null;function La(t,n,a){ve(Hu,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=Hu.current,ne(Hu)}function Gu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Vu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;e:for(;h!==null;){var w=h;h=u;for(var G=0;G<n.length;G++)if(w.context===n[G]){h.lanes|=a,w=h.alternate,w!==null&&(w.lanes|=a),Gu(h.return,a,t),o||(M=null);break e}h=w.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),Gu(M,a,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function ar(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var w=u.type;Zn(u.pendingProps.value,M.value)||(t!==null?t.push(w):t=[w])}}else if(u===he.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ho):t=[Ho])}u=u.return}t!==null&&Vu(n,t,a,o),n.flags|=262144}function Nl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _s(t){vs=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return fm(vs,t)}function Ul(t,n){return vs===null&&_s(t),fm(t,n)}function fm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(s(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var yS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},MS=r.unstable_scheduleCallback,bS=r.unstable_NormalPriority,cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new yS,data:new Map,refCount:0}}function po(t){t.refCount--,t.refCount===0&&MS(bS,function(){t.controller.abort()})}var mo=null,Xu=0,sr=0,rr=null;function ES(t,n){if(mo===null){var a=mo=[];Xu=0,sr=Yf(),rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,n.then(hm,hm),n}function hm(){if(--Xu===0&&mo!==null){rr!==null&&(rr.status="fulfilled");var t=mo;mo=null,sr=0,rr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function TS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var dm=F.S;F.S=function(t,n){Z0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ES(t,n),dm!==null&&dm(t,n)};var xs=O(null);function Wu(){var t=xs.current;return t!==null?t:qt.pooledCache}function Ll(t,n){n===null?ve(xs,xs.current):ve(xs,n.pool)}function pm(){var t=Wu();return t===null?null:{parent:cn._currentValue,pool:t}}var or=Error(s(460)),qu=Error(s(474)),Ol=Error(s(542)),Pl={then:function(){}};function mm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_m(t),t;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_m(t),t}throw ys=n,or}}function Ss(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ys=a,or):a}}var ys=null;function vm(){if(ys===null)throw Error(s(459));var t=ys;return ys=null,t}function _m(t){if(t===or||t===Ol)throw Error(s(483))}var lr=null,go=0;function Il(t){var n=go;return go+=1,lr===null&&(lr=[]),gm(lr,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Fl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function xm(t){function n(K,X){if(t){var $=K.deletions;$===null?(K.deletions=[X],K.flags|=16):$.push(X)}}function a(K,X){if(!t)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=Qi(K,X),K.index=0,K.sibling=null,K}function h(K,X,$){return K.index=$,t?($=K.alternate,$!==null?($=$.index,$<X?(K.flags|=67108866,X):$):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function M(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function w(K,X,$,ge){return X===null||X.tag!==6?(X=Ou($,K.mode,ge),X.return=K,X):(X=u(X,$),X.return=K,X)}function G(K,X,$,ge){var Je=$.type;return Je===A?de(K,X,$.props.children,ge,$.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&Ss(Je)===X.type)?(X=u(X,$.props),vo(X,$),X.return=K,X):(X=Rl($.type,$.key,$.props,null,K.mode,ge),vo(X,$),X.return=K,X)}function ee(K,X,$,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Pu($,K.mode,ge),X.return=K,X):(X=u(X,$.children||[]),X.return=K,X)}function de(K,X,$,ge,Je){return X===null||X.tag!==7?(X=ms($,K.mode,ge,Je),X.return=K,X):(X=u(X,$),X.return=K,X)}function _e(K,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ou(""+X,K.mode,$),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return $=Rl(X.type,X.key,X.props,null,K.mode,$),vo($,X),$.return=K,$;case E:return X=Pu(X,K.mode,$),X.return=K,X;case Z:return X=Ss(X),_e(K,X,$)}if(ue(X)||ie(X))return X=ms(X,K.mode,$,null),X.return=K,X;if(typeof X.then=="function")return _e(K,Il(X),$);if(X.$$typeof===N)return _e(K,Ul(K,X),$);Fl(K,X)}return null}function re(K,X,$,ge){var Je=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Je!==null?null:w(K,X,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===Je?G(K,X,$,ge):null;case E:return $.key===Je?ee(K,X,$,ge):null;case Z:return $=Ss($),re(K,X,$,ge)}if(ue($)||ie($))return Je!==null?null:de(K,X,$,ge,null);if(typeof $.then=="function")return re(K,X,Il($),ge);if($.$$typeof===N)return re(K,X,Ul(K,$),ge);Fl(K,$)}return null}function ce(K,X,$,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return K=K.get($)||null,w(X,K,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:return K=K.get(ge.key===null?$:ge.key)||null,G(X,K,ge,Je);case E:return K=K.get(ge.key===null?$:ge.key)||null,ee(X,K,ge,Je);case Z:return ge=Ss(ge),ce(K,X,$,ge,Je)}if(ue(ge)||ie(ge))return K=K.get($)||null,de(X,K,ge,Je,null);if(typeof ge.then=="function")return ce(K,X,$,Il(ge),Je);if(ge.$$typeof===N)return ce(K,X,$,Ul(X,ge),Je);Fl(X,ge)}return null}function Xe(K,X,$,ge){for(var Je=null,Dt=null,Ke=X,ft=X=0,Mt=null;Ke!==null&&ft<$.length;ft++){Ke.index>ft?(Mt=Ke,Ke=null):Mt=Ke.sibling;var Nt=re(K,Ke,$[ft],ge);if(Nt===null){Ke===null&&(Ke=Mt);break}t&&Ke&&Nt.alternate===null&&n(K,Ke),X=h(Nt,X,ft),Dt===null?Je=Nt:Dt.sibling=Nt,Dt=Nt,Ke=Mt}if(ft===$.length)return a(K,Ke),bt&&Ji(K,ft),Je;if(Ke===null){for(;ft<$.length;ft++)Ke=_e(K,$[ft],ge),Ke!==null&&(X=h(Ke,X,ft),Dt===null?Je=Ke:Dt.sibling=Ke,Dt=Ke);return bt&&Ji(K,ft),Je}for(Ke=o(Ke);ft<$.length;ft++)Mt=ce(Ke,K,ft,$[ft],ge),Mt!==null&&(t&&Mt.alternate!==null&&Ke.delete(Mt.key===null?ft:Mt.key),X=h(Mt,X,ft),Dt===null?Je=Mt:Dt.sibling=Mt,Dt=Mt);return t&&Ke.forEach(function(Qa){return n(K,Qa)}),bt&&Ji(K,ft),Je}function tt(K,X,$,ge){if($==null)throw Error(s(151));for(var Je=null,Dt=null,Ke=X,ft=X=0,Mt=null,Nt=$.next();Ke!==null&&!Nt.done;ft++,Nt=$.next()){Ke.index>ft?(Mt=Ke,Ke=null):Mt=Ke.sibling;var Qa=re(K,Ke,Nt.value,ge);if(Qa===null){Ke===null&&(Ke=Mt);break}t&&Ke&&Qa.alternate===null&&n(K,Ke),X=h(Qa,X,ft),Dt===null?Je=Qa:Dt.sibling=Qa,Dt=Qa,Ke=Mt}if(Nt.done)return a(K,Ke),bt&&Ji(K,ft),Je;if(Ke===null){for(;!Nt.done;ft++,Nt=$.next())Nt=_e(K,Nt.value,ge),Nt!==null&&(X=h(Nt,X,ft),Dt===null?Je=Nt:Dt.sibling=Nt,Dt=Nt);return bt&&Ji(K,ft),Je}for(Ke=o(Ke);!Nt.done;ft++,Nt=$.next())Nt=ce(Ke,K,ft,Nt.value,ge),Nt!==null&&(t&&Nt.alternate!==null&&Ke.delete(Nt.key===null?ft:Nt.key),X=h(Nt,X,ft),Dt===null?Je=Nt:Dt.sibling=Nt,Dt=Nt);return t&&Ke.forEach(function(Iy){return n(K,Iy)}),bt&&Ji(K,ft),Je}function Wt(K,X,$,ge){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:e:{for(var Je=$.key;X!==null;){if(X.key===Je){if(Je=$.type,Je===A){if(X.tag===7){a(K,X.sibling),ge=u(X,$.props.children),ge.return=K,K=ge;break e}}else if(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&Ss(Je)===X.type){a(K,X.sibling),ge=u(X,$.props),vo(ge,$),ge.return=K,K=ge;break e}a(K,X);break}else n(K,X);X=X.sibling}$.type===A?(ge=ms($.props.children,K.mode,ge,$.key),ge.return=K,K=ge):(ge=Rl($.type,$.key,$.props,null,K.mode,ge),vo(ge,$),ge.return=K,K=ge)}return M(K);case E:e:{for(Je=$.key;X!==null;){if(X.key===Je)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(K,X.sibling),ge=u(X,$.children||[]),ge.return=K,K=ge;break e}else{a(K,X);break}else n(K,X);X=X.sibling}ge=Pu($,K.mode,ge),ge.return=K,K=ge}return M(K);case Z:return $=Ss($),Wt(K,X,$,ge)}if(ue($))return Xe(K,X,$,ge);if(ie($)){if(Je=ie($),typeof Je!="function")throw Error(s(150));return $=Je.call($),tt(K,X,$,ge)}if(typeof $.then=="function")return Wt(K,X,Il($),ge);if($.$$typeof===N)return Wt(K,X,Ul(K,$),ge);Fl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(K,X.sibling),ge=u(X,$),ge.return=K,K=ge):(a(K,X),ge=Ou($,K.mode,ge),ge.return=K,K=ge),M(K)):a(K,X)}return function(K,X,$,ge){try{go=0;var Je=Wt(K,X,$,ge);return lr=null,Je}catch(Ke){if(Ke===or||Ke===Ol)throw Ke;var Dt=Qn(29,Ke,null,K.mode);return Dt.lanes=ge,Dt.return=K,Dt}}}var Ms=xm(!0),Sm=xm(!1),Oa=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Cl(t),im(t,null,a),n}return wl(t,o,n,a),Cl(t)}function _o(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qr(t,a)}}function Ku(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Zu=!1;function xo(){if(Zu){var t=rr;if(t!==null)throw t}}function So(t,n,a,o){Zu=!1;var u=t.updateQueue;Oa=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var G=w,ee=G.next;G.next=null,M===null?h=ee:M.next=ee,M=G;var de=t.alternate;de!==null&&(de=de.updateQueue,w=de.lastBaseUpdate,w!==M&&(w===null?de.firstBaseUpdate=ee:w.next=ee,de.lastBaseUpdate=G))}if(h!==null){var _e=u.baseState;M=0,de=ee=G=null,w=h;do{var re=w.lane&-536870913,ce=re!==w.lane;if(ce?(yt&re)===re:(o&re)===re){re!==0&&re===sr&&(Zu=!0),de!==null&&(de=de.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Xe=t,tt=w;re=n;var Wt=a;switch(tt.tag){case 1:if(Xe=tt.payload,typeof Xe=="function"){_e=Xe.call(Wt,_e,re);break e}_e=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=tt.payload,re=typeof Xe=="function"?Xe.call(Wt,_e,re):Xe,re==null)break e;_e=v({},_e,re);break e;case 2:Oa=!0}}re=w.callback,re!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[re]:ce.push(re))}else ce={lane:re,tag:w.tag,payload:w.payload,callback:w.callback,next:null},de===null?(ee=de=ce,G=_e):de=de.next=ce,M|=re;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ce=w,w=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);de===null&&(G=_e),u.baseState=G,u.firstBaseUpdate=ee,u.lastBaseUpdate=de,h===null&&(u.shared.lanes=0),Ga|=M,t.lanes=M,t.memoizedState=_e}}function ym(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Mm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ym(a[t],n)}var cr=O(null),Bl=O(0);function bm(t,n){t=ca,ve(Bl,t),ve(cr,n),ca=t|n.baseLanes}function Qu(){ve(Bl,ca),ve(cr,cr.current)}function Ju(){ca=Bl.current,ne(cr),ne(Bl)}var Jn=O(null),pi=null;function Fa(t){var n=t.alternate;ve(rn,rn.current&1),ve(Jn,t),pi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(pi=t)}function $u(t){ve(rn,rn.current),ve(Jn,t),pi===null&&(pi=t)}function Em(t){t.tag===22?(ve(rn,rn.current),ve(Jn,t),pi===null&&(pi=t)):Ba()}function Ba(){ve(rn,rn.current),ve(Jn,Jn.current)}function $n(t){ne(Jn),pi===t&&(pi=null),ne(rn)}var rn=O(0);function zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rh(a)||oh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,ct=null,kt=null,un=null,Hl=!1,ur=!1,bs=!1,Gl=0,yo=0,fr=null,AS=0;function nn(){throw Error(s(321))}function ef(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function tf(t,n,a,o,u,h){return ta=h,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?o0:vf,bs=!1,h=a(o,u),bs=!1,ur&&(h=Am(n,a,o,u)),Tm(t),h}function Tm(t){F.H=Eo;var n=kt!==null&&kt.next!==null;if(ta=0,un=kt=ct=null,Hl=!1,yo=0,fr=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&Nl(t)&&(fn=!0))}function Am(t,n,a,o){ct=t;var u=0;do{if(ur&&(fr=null),yo=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,un=kt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=l0,h=n(a,o)}while(ur);return h}function wS(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?Mo(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ct.flags|=1024),n}function nf(){var t=Gl!==0;return Gl=0,t}function af(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function sf(t){if(Hl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Hl=!1}ta=0,un=kt=ct=null,ur=!1,yo=Gl=0,fr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ct.memoizedState=un=t:un=un.next=t,un}function on(){if(kt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=un===null?ct.memoizedState:un.next;if(n!==null)un=n,kt=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},un===null?ct.memoizedState=un=t:un=un.next=t}return un}function Vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(t){var n=yo;return yo+=1,fr===null&&(fr=[]),t=gm(fr,t,n),n=ct,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?o0:vf),t}function kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mo(t);if(t.$$typeof===N)return wn(t)}throw Error(s(438,String(t)))}function rf(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Vl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=U;return n.index++,a}function na(t,n){return typeof n=="function"?n(t):n}function Xl(t){var n=on();return of(n,kt,t)}function of(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var w=M=null,G=null,ee=n,de=!1;do{var _e=ee.lane&-536870913;if(_e!==ee.lane?(yt&_e)===_e:(ta&_e)===_e){var re=ee.revertLane;if(re===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),_e===sr&&(de=!0);else if((ta&re)===re){ee=ee.next,re===sr&&(de=!0);continue}else _e={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},G===null?(w=G=_e,M=h):G=G.next=_e,ct.lanes|=re,Ga|=re;_e=ee.action,bs&&a(h,_e),h=ee.hasEagerState?ee.eagerState:a(h,_e)}else re={lane:_e,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},G===null?(w=G=re,M=h):G=G.next=re,ct.lanes|=_e,Ga|=_e;ee=ee.next}while(ee!==null&&ee!==n);if(G===null?M=h:G.next=w,!Zn(h,t.memoizedState)&&(fn=!0,de&&(a=rr,a!==null)))throw a;t.memoizedState=h,t.baseState=M,t.baseQueue=G,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function lf(t){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);Zn(h,n.memoizedState)||(fn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function wm(t,n,a){var o=ct,u=on(),h=bt;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Zn((kt||u).memoizedState,a);if(M&&(u.memoizedState=a,fn=!0),u=u.queue,ff(Dm.bind(null,o,u,t),[t]),u.getSnapshot!==n||M||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},Rm.bind(null,o,u,a,n),null),qt===null)throw Error(s(349));h||(ta&127)!==0||Cm(o,n,a)}return a}function Cm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Vl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Rm(t,n,a,o){n.value=a,n.getSnapshot=o,Nm(n)&&Um(t)}function Dm(t,n,a){return a(function(){Nm(n)&&Um(t)})}function Nm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function Um(t){var n=ps(t,2);n!==null&&jn(n,t,2)}function cf(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),bs){Be(!0);try{a()}finally{Be(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},n}function Lm(t,n,a,o){return t.baseState=a,of(t,kt,typeof o=="function"?o:na)}function CS(t,n,a,o,u){if(jl(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};F.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Om(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Om(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=F.T,M={};F.T=M;try{var w=a(u,o),G=F.S;G!==null&&G(M,w),Pm(t,n,w)}catch(ee){uf(t,n,ee)}finally{h!==null&&M.types!==null&&(h.types=M.types),F.T=h}}else try{h=a(u,o),Pm(t,n,h)}catch(ee){uf(t,n,ee)}}function Pm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Im(t,n,o)},function(o){return uf(t,n,o)}):Im(t,n,a)}function Im(t,n,a){n.status="fulfilled",n.value=a,Fm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Om(t,a)))}function uf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Fm(n),n=n.next;while(n!==o)}t.action=null}function Fm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Bm(t,n){return n}function zm(t,n){if(bt){var a=qt.formState;if(a!==null){e:{var o=ct;if(bt){if(Yt){t:{for(var u=Yt,h=di;u.nodeType!==8;){if(!h){u=null;break t}if(u=mi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Yt=mi(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bm,lastRenderedState:n},a.queue=o,a=a0.bind(null,ct,o),o.dispatch=a,o=cf(!1),h=gf.bind(null,ct,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=CS.bind(null,ct,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Hm(t){var n=on();return Gm(n,kt,t)}function Gm(t,n,a){if(n=of(t,n,Bm)[0],t=Xl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(M){throw M===or?Ol:M}else o=n;n=on();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,hr(9,{destroy:void 0},RS.bind(null,u,a),null)),[o,h,t]}function RS(t,n){t.action=n}function Vm(t){var n=on(),a=kt;if(a!==null)return Gm(n,a,t);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function hr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Vl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function km(){return on().memoizedState}function Wl(t,n,a,o){var u=Bn();ct.flags|=t,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function ql(t,n,a,o){var u=on();o=o===void 0?null:o;var h=u.memoizedState.inst;kt!==null&&o!==null&&ef(o,kt.memoizedState.deps)?u.memoizedState=hr(n,h,a,o):(ct.flags|=t,u.memoizedState=hr(1|n,h,a,o))}function Xm(t,n){Wl(8390656,8,t,n)}function ff(t,n){ql(2048,8,t,n)}function DS(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Vl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Wm(t){var n=on().memoizedState;return DS({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function qm(t,n){return ql(4,2,t,n)}function jm(t,n){return ql(4,4,t,n)}function Ym(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Km(t,n,a){a=a!=null?a.concat([t]):null,ql(4,4,Ym.bind(null,n,t),a)}function hf(){}function Zm(t,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ef(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Qm(t,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ef(n,o[1]))return o[0];if(o=t(),bs){Be(!0);try{t()}finally{Be(!1)}}return a.memoizedState=[o,n],o}function df(t,n,a){return a===void 0||(ta&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=J0(),ct.lanes|=t,Ga|=t,a)}function Jm(t,n,a,o){return Zn(a,n)?a:cr.current!==null?(t=df(t,a,o),Zn(t,n)||(fn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(yt&261930)===0?(fn=!0,t.memoizedState=a):(t=J0(),ct.lanes|=t,Ga|=t,n)}function $m(t,n,a,o,u){var h=z.p;z.p=h!==0&&8>h?h:8;var M=F.T,w={};F.T=w,gf(t,!1,n,a);try{var G=u(),ee=F.S;if(ee!==null&&ee(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var de=TS(G,o);bo(t,n,de,ni(t))}else bo(t,n,o,ni(t))}catch(_e){bo(t,n,{then:function(){},status:"rejected",reason:_e},ni())}finally{z.p=h,M!==null&&w.types!==null&&(M.types=w.types),F.T=M}}function NS(){}function pf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=e0(t).queue;$m(t,u,n,J,a===null?NS:function(){return t0(t),a(o)})}function e0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function t0(t){var n=e0(t);n.next===null&&(n=t.alternate.memoizedState),bo(t,n.next.queue,{},ni())}function mf(){return wn(Ho)}function n0(){return on().memoizedState}function i0(){return on().memoizedState}function US(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();t=Pa(a);var o=Ia(n,t,a);o!==null&&(jn(o,n,a),_o(o,n,a)),n={cache:ku()},t.payload=n;return}n=n.return}}function LS(t,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},jl(t)?s0(n,a):(a=Uu(t,n,a,o),a!==null&&(jn(a,t,o),r0(a,n,o)))}function a0(t,n,a){var o=ni();bo(t,n,a,o)}function bo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(jl(t))s0(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,w=h(M,a);if(u.hasEagerState=!0,u.eagerState=w,Zn(w,M))return wl(t,n,u,0),qt===null&&Al(),!1}catch{}if(a=Uu(t,n,u,o),a!==null)return jn(a,t,o),r0(a,n,o),!0}return!1}function gf(t,n,a,o){if(o={lane:2,revertLane:Yf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},jl(t)){if(n)throw Error(s(479))}else n=Uu(t,a,o,2),n!==null&&jn(n,t,2)}function jl(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function s0(t,n){ur=Hl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function r0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qr(t,a)}}var Eo={readContext:wn,use:kl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Eo.useEffectEvent=nn;var o0={readContext:wn,use:kl,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Xm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Wl(4194308,4,Ym.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Wl(4194308,4,t,n)},useInsertionEffect:function(t,n){Wl(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var o=t();if(bs){Be(!0);try{t()}finally{Be(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(bs){Be(!0);try{a(n)}finally{Be(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=LS.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=cf(t);var n=t.queue,a=a0.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(t,n){var a=Bn();return df(a,t,n)},useTransition:function(){var t=cf(!1);return t=$m.bind(null,ct,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=Bn();if(bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qt===null)throw Error(s(349));(yt&127)!==0||Cm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Xm(Dm.bind(null,o,h,t),[t]),o.flags|=2048,hr(9,{destroy:void 0},Rm.bind(null,o,h,a,n),null),a},useId:function(){var t=Bn(),n=qt.identifierPrefix;if(bt){var a=Ui,o=Ni;a=(o&~(1<<32-Ie(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=AS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:mf,useFormState:zm,useActionState:zm,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:rf,useCacheRefresh:function(){return Bn().memoizedState=US.bind(null,ct)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Pt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},vf={readContext:wn,use:kl,useCallback:Zm,useContext:wn,useEffect:ff,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:jm,useMemo:Qm,useReducer:Xl,useRef:km,useState:function(){return Xl(na)},useDebugValue:hf,useDeferredValue:function(t,n){var a=on();return Jm(a,kt.memoizedState,t,n)},useTransition:function(){var t=Xl(na)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:wm,useId:n0,useHostTransitionStatus:mf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var a=on();return Lm(a,kt,t,n)},useMemoCache:rf,useCacheRefresh:i0};vf.useEffectEvent=Wm;var l0={readContext:wn,use:kl,useCallback:Zm,useContext:wn,useEffect:ff,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:jm,useMemo:Qm,useReducer:lf,useRef:km,useState:function(){return lf(na)},useDebugValue:hf,useDeferredValue:function(t,n){var a=on();return kt===null?df(a,t,n):Jm(a,kt.memoizedState,t,n)},useTransition:function(){var t=lf(na)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:wm,useId:n0,useHostTransitionStatus:mf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=on();return kt!==null?Lm(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:i0};l0.useEffectEvent=Wm;function _f(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,o),n!==null&&(jn(n,t,o),_o(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,o),n!==null&&(jn(n,t,o),_o(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ni(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(t,o,a),n!==null&&(jn(n,t,a),_o(n,t,a))}};function c0(t,n,a,o,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!co(a,o)||!co(u,h):!0}function u0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&xf.enqueueReplaceState(n,n.state,null)}function Es(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function f0(t){Tl(t)}function h0(t){console.error(t)}function d0(t){Tl(t)}function Yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function p0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(t,n)},a}function m0(t){return t=Pa(t),t.tag=3,t}function g0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){p0(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){p0(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function OS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?rc():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(t,o,u)),!1;case 22:return a.flags|=65536,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(t,o,u)),!1}throw Error(s(435,a.tag))}return Wf(t,o,u),rc(),!1}if(bt)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Bu&&(t=Error(s(422),{cause:o}),ho(ui(t,a)))):(o!==Bu&&(n=Error(s(423),{cause:o}),ho(ui(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ui(o,a),u=Sf(t.stateNode,o,u),Ku(t,u),an!==4&&(an=2)),!1;var h=Error(s(520),{cause:o});if(h=ui(h,a),Uo===null?Uo=[h]:Uo.push(h),an!==4&&(an=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Sf(a.stateNode,o,t),Ku(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Va===null||!Va.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=m0(u),g0(u,t,a,o),Ku(a,u),!1}a=a.return}while(a!==null);return!1}var yf=Error(s(461)),fn=!1;function Cn(t,n,a,o){n.child=t===null?Sm(n,null,a,o):Ms(n,t.child,a,o)}function v0(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var w in o)w!=="ref"&&(M[w]=o[w])}else M=o;return _s(n),o=tf(t,n,a,M,h,u),w=nf(),t!==null&&!fn?(af(t,n,u),ia(t,n,u)):(bt&&w&&Iu(n),n.flags|=1,Cn(t,n,o,u),n.child)}function _0(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!Lu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,x0(t,n,h,o,u)):(t=Rl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Rf(t,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(M,o)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=Qi(h,o),t.ref=n.ref,t.return=n,n.child=t}function x0(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(co(h,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=h,Rf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,ia(t,n,u)}return Mf(t,n,a,o,u)}function S0(t,n,a,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return y0(t,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ll(n,h!==null?h.cachePool:null),h!==null?bm(n,h):Qu(),Em(n);else return o=n.lanes=536870912,y0(t,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Ll(n,h.cachePool),bm(n,h),Ba(),n.memoizedState=null):(t!==null&&Ll(n,null),Qu(),Ba());return Cn(t,n,u,a),n.child}function To(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function y0(t,n,a,o,u){var h=Wu();return h=h===null?null:{parent:cn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&Ll(n,null),Qu(),Em(n),t!==null&&ar(t,n,o,!0),n.childLanes=u,null}function Kl(t,n){return n=Ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function M0(t,n,a){return Ms(n,t.child,null,a),t=Kl(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function PS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=Kl(n,o),n.lanes=536870912,To(null,t);if($u(n),(t=Yt)?(t=Og(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ni,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=sm(t),a.return=n,n.child=a,An=n,Yt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Kl(n,o)}var h=t.memoizedState;if(h!==null){var M=h.dehydrated;if($u(n),u)if(n.flags&256)n.flags&=-257,n=M0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||ar(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(o=qt,o!==null&&(M=ks(o,a),M!==0&&M!==h.retryLane))throw h.retryLane=M,ps(t,M),jn(o,t,M),yf;rc(),n=M0(t,n,a)}else t=h.treeContext,Yt=mi(M.nextSibling),An=n,bt=!0,Na=null,di=!1,t!==null&&lm(n,t),n=Kl(n,o),n.flags|=4096;return n}return t=Qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Mf(t,n,a,o,u){return _s(n),a=tf(t,n,a,o,void 0,u),o=nf(),t!==null&&!fn?(af(t,n,u),ia(t,n,u)):(bt&&o&&Iu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function b0(t,n,a,o,u,h){return _s(n),n.updateQueue=null,a=Am(n,o,a,u),Tm(t),o=nf(),t!==null&&!fn?(af(t,n,h),ia(t,n,h)):(bt&&o&&Iu(n),n.flags|=1,Cn(t,n,a,h),n.child)}function E0(t,n,a,o,u){if(_s(n),n.stateNode===null){var h=er,M=a.contextType;typeof M=="object"&&M!==null&&(h=wn(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=xf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},ju(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?wn(M):er,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(_f(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&xf.enqueueReplaceState(h,h.state,null),So(n,o,h,u),xo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var w=n.memoizedProps,G=Es(a,w);h.props=G;var ee=h.context,de=a.contextType;M=er,typeof de=="object"&&de!==null&&(M=wn(de));var _e=a.getDerivedStateFromProps;de=typeof _e=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,de||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||ee!==M)&&u0(n,h,o,M),Oa=!1;var re=n.memoizedState;h.state=re,So(n,o,h,u),xo(),ee=n.memoizedState,w||re!==ee||Oa?(typeof _e=="function"&&(_f(n,a,_e,o),ee=n.memoizedState),(G=Oa||c0(n,a,G,o,re,ee,M))?(de||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),h.props=o,h.state=ee,h.context=M,o=G):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Yu(t,n),M=n.memoizedProps,de=Es(a,M),h.props=de,_e=n.pendingProps,re=h.context,ee=a.contextType,G=er,typeof ee=="object"&&ee!==null&&(G=wn(ee)),w=a.getDerivedStateFromProps,(ee=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==_e||re!==G)&&u0(n,h,o,G),Oa=!1,re=n.memoizedState,h.state=re,So(n,o,h,u),xo();var ce=n.memoizedState;M!==_e||re!==ce||Oa||t!==null&&t.dependencies!==null&&Nl(t.dependencies)?(typeof w=="function"&&(_f(n,a,w,o),ce=n.memoizedState),(de=Oa||c0(n,a,de,o,re,ce,G)||t!==null&&t.dependencies!==null&&Nl(t.dependencies))?(ee||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ce,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ce,G)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),h.props=o,h.state=ce,h.context=G,o=de):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Zl(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Ms(n,t.child,null,u),n.child=Ms(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=ia(t,n,u),t}function T0(t,n,a,o){return gs(),n.flags|=256,Cn(t,n,a,o),n.child}var bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ef(t){return{baseLanes:t,cachePool:pm()}}function Tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function A0(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Fa(n):Ba(),(t=Yt)?(t=Og(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ni,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=sm(t),a.return=n,n.child=a,An=n,Yt=null)):t=null,t===null)throw Ua(n);return oh(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Ba(),u=n.mode,w=Ql({mode:"hidden",children:w},u),o=ms(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=Ef(a),o.childLanes=Tf(t,M,a),n.memoizedState=bf,To(null,o)):(Fa(n),Af(n,w))}var G=t.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(h)n.flags&256?(Fa(n),n.flags&=-257,n=wf(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),w=o.fallback,u=n.mode,o=Ql({mode:"visible",children:o.children},u),w=ms(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Ms(n,t.child,null,a),o=n.child,o.memoizedState=Ef(a),o.childLanes=Tf(t,M,a),n.memoizedState=bf,n=To(null,o));else if(Fa(n),oh(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var ee=M.dgst;M=ee,o=Error(s(419)),o.stack="",o.digest=M,ho({value:o,source:null,stack:null}),n=wf(t,n,a)}else if(fn||ar(t,n,a,!1),M=(a&t.childLanes)!==0,fn||M){if(M=qt,M!==null&&(o=ks(M,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,ps(t,o),jn(M,t,o),yf;rh(w)||rc(),n=wf(t,n,a)}else rh(w)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,Yt=mi(w.nextSibling),An=n,bt=!0,Na=null,di=!1,t!==null&&lm(n,t),n=Af(n,o.children),n.flags|=4096);return n}return u?(Ba(),w=o.fallback,u=n.mode,G=t.child,ee=G.sibling,o=Qi(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ee!==null?w=Qi(ee,w):(w=ms(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,To(null,o),o=n.child,w=t.child.memoizedState,w===null?w=Ef(a):(u=w.cachePool,u!==null?(G=cn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=pm(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Tf(t,M,a),n.memoizedState=bf,To(t.child,o)):(Fa(n),a=t.child,t=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function Af(t,n){return n=Ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ql(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function wf(t,n,a){return Ms(n,t.child,null,a),t=Af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function w0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Gu(t.return,n,a)}function Cf(t,n,a,o,u,h){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=h)}function C0(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var M=rn.current,w=(M&2)!==0;if(w?(M=M&1|2,n.flags|=128):M&=1,ve(rn,M),Cn(t,n,o,a),o=bt?fo:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&w0(t,a,n);else if(t.tag===19)w0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&zl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Cf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&zl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Cf(n,!0,a,null,h,o);break;case"together":Cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ar(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Nl(t)))}function IS(t,n,a){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),La(n,cn,t.memoizedState.cache),gs();break;case 27:case 5:Ve(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$u(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?A0(t,n,a):(Fa(n),t=ia(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ar(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return C0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(rn,rn.current),o)break;return null;case 22:return n.lanes=0,S0(t,n,a,n.pendingProps);case 24:La(n,cn,t.memoizedState.cache)}return ia(t,n,a)}function R0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Rf(t,a)&&(n.flags&128)===0)return fn=!1,IS(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,bt&&(n.flags&1048576)!==0&&om(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ss(n.elementType),n.type=t,typeof t=="function")Lu(t)?(o=Es(t,o),n.tag=1,n=E0(null,n,t,o,a)):(n.tag=0,n=Mf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===R){n.tag=11,n=v0(null,n,t,o,a);break e}else if(u===I){n.tag=14,n=_0(null,n,t,o,a);break e}}throw n=oe(t)||t,Error(s(306,n,""))}}return n;case 0:return Mf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Es(o,n.pendingProps),E0(t,n,o,u,a);case 3:e:{if(Re(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Yu(t,n),So(n,o,null,a);var M=n.memoizedState;if(o=M.cache,La(n,cn,o),o!==h.cache&&Vu(n,[cn],a,!0),xo(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=T0(t,n,o,a);break e}else if(o!==u){u=ui(Error(s(424)),n),ho(u),n=T0(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Yt=mi(t.firstChild),An=n,bt=!0,Na=null,di=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),o===u){n=ia(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Zl(t,n),t===null?(a=Hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=dc(ae.current).createElement(a),o[ln]=n,o[Sn]=t,Rn(o,a,t),C(o),n.stateNode=o):n.memoizedState=Hg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ve(n),t===null&&bt&&(o=n.stateNode=Fg(n.type,n.pendingProps,ae.current),An=n,di=!0,u=Yt,qa(n.type)?(lh=u,Yt=mi(o.firstChild)):Yt=u),Cn(t,n,n.pendingProps.children,a),Zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=Yt)&&(o=hy(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,An=n,Yt=mi(o.firstChild),di=!1,u=!0):u=!1),u||Ua(n)),Ve(n),u=n.type,h=n.pendingProps,M=t!==null?t.memoizedProps:null,o=h.children,ih(u,h)?o=null:M!==null&&ih(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(t,n,wS,null,null,a),Ho._currentValue=u),Zl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=Yt)&&(a=dy(a,n.pendingProps,di),a!==null?(n.stateNode=a,An=n,Yt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return A0(t,n,a);case 4:return Re(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ms(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return v0(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,_s(n),u=wn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return _0(t,n,n.type,n.pendingProps,a);case 15:return x0(t,n,n.type,n.pendingProps,a);case 19:return C0(t,n,a);case 31:return PS(t,n,a);case 22:return S0(t,n,a,n.pendingProps);case 24:return _s(n),o=wn(cn),t===null?(u=Wu(),u===null&&(u=qt,h=ku(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},ju(n),La(n,cn,u)):((t.lanes&a)!==0&&(Yu(t,n),So(n,null,null,a),xo()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,cn,o)):(o=h.cache,La(n,cn,o),o!==u.cache&&Vu(n,[cn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(t){t.flags|=4}function Df(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(ng())t.flags|=8192;else throw ys=Pl,qu}else t.flags&=-16777217}function D0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Wg(n))if(ng())t.flags|=8192;else throw ys=Pl,qu}function Jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Bt():536870912,t.lanes|=n,gr|=n)}function Ao(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function FS(t,n,a){var o=n.pendingProps;switch(Fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(cn),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ir(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zu())),Kt(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(aa(n),h!==null?(Kt(n),D0(n,h)):(Kt(n),Df(n,u,null,o,a))):h?h!==t.memoizedState?(aa(n),Kt(n),D0(n,h)):(Kt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&aa(n),Kt(n),Df(n,u,t,o,a)),null;case 27:if(mt(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=we.current,ir(n)?cm(n):(t=Fg(u,o,a),n.stateNode=t,aa(n))}return Kt(n),null;case 5:if(mt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(h=we.current,ir(n))cm(n);else{var M=dc(ae.current);switch(h){case 1:h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=M.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}h[ln]=n,h[Sn]=o;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)h.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=h;e:switch(Rn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&aa(n)}}return Kt(n),Df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ae.current,ir(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ag(t.nodeValue,a)),t||Ua(n,!0)}else t=dc(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Kt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ir(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),t=!1}else a=zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ir(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Jl(n,n.updateQueue),Kt(n),null);case 4:return Ge(),t===null&&Jf(n.stateNode.containerInfo),Kt(n),null;case 10:return ea(n.type),Kt(n),null;case 19:if(ne(rn),o=n.memoizedState,o===null)return Kt(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Ao(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=zl(t),h!==null){for(n.flags|=128,Ao(o,!1),t=h.updateQueue,n.updateQueue=t,Jl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)am(a,t),a=a.sibling;return ve(rn,rn.current&1|2),bt&&Ji(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>ic&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304)}else{if(!u)if(t=zl(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Jl(n,t),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!bt)return Kt(n),null}else 2*b()-o.renderingStartTime>ic&&a!==536870912&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=rn.current,ve(rn,u?a&1|2:a&1),bt&&Ji(n,o.treeForkCount),t):(Kt(n),null);case 22:case 23:return $n(n),Ju(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Jl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ne(xs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(cn),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function BS(t,n){switch(Fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(cn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(rn),null;case 4:return Ge(),null;case 10:return ea(n.type),null;case 22:case 23:return $n(n),Ju(),t!==null&&ne(xs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(cn),null;case 25:return null;default:return null}}function N0(t,n){switch(Fu(n),n.tag){case 3:ea(cn),Ge();break;case 26:case 27:case 5:mt(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:ne(rn);break;case 10:ea(n.type);break;case 22:case 23:$n(n),Ju(),t!==null&&ne(xs);break;case 24:ea(cn)}}function wo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(w){Gt(n,n.return,w)}}function za(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var M=o.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,u=n;var G=a,ee=w;try{ee()}catch(de){Gt(u,G,de)}}}o=o.next}while(o!==h)}}catch(de){Gt(n,n.return,de)}}function U0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mm(n,a)}catch(o){Gt(t,t.return,o)}}}function L0(t,n,a){a.props=Es(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Gt(t,n,o)}}function Co(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Gt(t,n,u)}}function Li(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(t,n,u)}else a.current=null}function O0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Gt(t,t.return,u)}}function Nf(t,n,a){try{var o=t.stateNode;ry(o,t.type,a,n),o[Sn]=n}catch(u){Gt(t,t.return,u)}}function P0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||P0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Lf(t,n,a),t=t.sibling;t!==null;)Lf(t,n,a),t=t.sibling}function $l(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for($l(t,n,a),t=t.sibling;t!==null;)$l(t,n,a),t=t.sibling}function I0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[ln]=t,n[Sn]=a}catch(h){Gt(t,t.return,h)}}var sa=!1,hn=!1,Of=!1,F0=typeof WeakSet=="function"?WeakSet:Set,_n=null;function zS(t,n){if(t=t.containerInfo,th=Sc,t=Kp(t),Au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var M=0,w=-1,G=-1,ee=0,de=0,_e=t,re=null;t:for(;;){for(var ce;_e!==a||u!==0&&_e.nodeType!==3||(w=M+u),_e!==h||o!==0&&_e.nodeType!==3||(G=M+o),_e.nodeType===3&&(M+=_e.nodeValue.length),(ce=_e.firstChild)!==null;)re=_e,_e=ce;for(;;){if(_e===t)break t;if(re===a&&++ee===u&&(w=M),re===h&&++de===o&&(G=M),(ce=_e.nextSibling)!==null)break;_e=re,re=_e.parentNode}_e=ce}a=w===-1||G===-1?null:{start:w,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(nh={focusedElem:t,selectionRange:a},Sc=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Xe=Es(a.type,u);t=o.getSnapshotBeforeUpdate(Xe,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Gt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)sh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function B0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(t,a),o&4&&wo(5,a);break;case 1:if(oa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Gt(a,a.return,M)}else{var u=Es(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Gt(a,a.return,M)}}o&64&&U0(a),o&512&&Co(a,a.return);break;case 3:if(oa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mm(t,n)}catch(M){Gt(a,a.return,M)}}break;case 27:n===null&&o&4&&I0(a);case 26:case 5:oa(t,a),n===null&&o&4&&O0(a),o&512&&Co(a,a.return);break;case 12:oa(t,a);break;case 31:oa(t,a),o&4&&G0(t,a);break;case 13:oa(t,a),o&4&&V0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=YS.bind(null,a),py(t,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||hn,u=sa;var h=hn;sa=o,(hn=n)&&!h?la(t,a,(a.subtreeFlags&8772)!==0):oa(t,a),sa=u,hn=h}break;case 30:break;default:oa(t,a)}}function z0(t){var n=t.alternate;n!==null&&(t.alternate=null,z0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&to(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,kn=!1;function ra(t,n,a){for(a=a.child;a!==null;)H0(t,n,a),a=a.sibling}function H0(t,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:hn||Li(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Li(a,n);var o=Jt,u=kn;qa(a.type)&&(Jt=a.stateNode,kn=!1),ra(t,n,a),Fo(a.stateNode),Jt=o,kn=u;break;case 5:hn||Li(a,n);case 6:if(o=Jt,u=kn,Jt=null,ra(t,n,a),Jt=o,kn=u,Jt!==null)if(kn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(h){Gt(a,n,h)}else try{Jt.removeChild(a.stateNode)}catch(h){Gt(a,n,h)}break;case 18:Jt!==null&&(kn?(t=Jt,Ug(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Er(t)):Ug(Jt,a.stateNode));break;case 4:o=Jt,u=kn,Jt=a.stateNode.containerInfo,kn=!0,ra(t,n,a),Jt=o,kn=u;break;case 0:case 11:case 14:case 15:za(2,a,n),hn||za(4,a,n),ra(t,n,a);break;case 1:hn||(Li(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&L0(a,n,o)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,ra(t,n,a),hn=o;break;default:ra(t,n,a)}}function G0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Er(t)}catch(a){Gt(n,n.return,a)}}}function V0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Er(t)}catch(a){Gt(n,n.return,a)}}function HS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new F0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new F0),n;default:throw Error(s(435,t.tag))}}function ec(t,n){var a=HS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=KS.bind(null,t,o);o.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,M=n,w=M;e:for(;w!==null;){switch(w.tag){case 27:if(qa(w.type)){Jt=w.stateNode,kn=!1;break e}break;case 5:Jt=w.stateNode,kn=!1;break e;case 3:case 4:Jt=w.stateNode.containerInfo,kn=!0;break e}w=w.return}if(Jt===null)throw Error(s(160));H0(h,M,u),Jt=null,kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)k0(n,t),n=n.sibling}var bi=null;function k0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(za(3,t,t.return),wo(3,t),za(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(hn||a===null||Li(a,a.return)),o&64&&sa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(Xn(n,t),Wn(t),o&512&&(hn||a===null||Li(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[cs]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Rn(h,o,a),h[ln]=t,C(h),o=h;break e;case"link":var M=kg("link","href",u).get(o+(a.href||""));if(M){for(var w=0;w<M.length;w++)if(h=M[w],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(w,1);break t}}h=u.createElement(o),Rn(h,o,a),u.head.appendChild(h);break;case"meta":if(M=kg("meta","content",u).get(o+(a.content||""))){for(w=0;w<M.length;w++)if(h=M[w],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(w,1);break t}}h=u.createElement(o),Rn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[ln]=t,C(h),o=h}t.stateNode=o}else Xg(u,t.type,t.stateNode);else t.stateNode=Vg(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Xg(u,t.type,t.stateNode):Vg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(hn||a===null||Li(a,a.return)),a!==null&&o&4&&Nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(hn||a===null||Li(a,a.return)),t.flags&32){u=t.stateNode;try{pn(u,"")}catch(Xe){Gt(t,t.return,Xe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Nf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Of=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Xe){Gt(t,t.return,Xe)}}break;case 3:if(gc=null,u=bi,bi=pc(n.containerInfo),Xn(n,t),bi=u,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(Xe){Gt(t,t.return,Xe)}Of&&(Of=!1,X0(t));break;case 4:o=bi,bi=pc(t.stateNode.containerInfo),Xn(n,t),Wn(t),bi=o;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nc=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ee=sa,de=hn;if(sa=ee||u,hn=de||G,Xn(n,t),hn=de,sa=ee,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||sa||hn||Ts(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(h=G.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=G.stateNode;var _e=G.memoizedProps.style,re=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;w.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Xe){Gt(G,G.return,Xe)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Xe){Gt(G,G.return,Xe)}}}else if(n.tag===18){if(a===null){G=n;try{var ce=G.stateNode;u?Lg(ce,!0):Lg(G.stateNode,!1)}catch(Xe){Gt(G,G.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ec(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(P0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Uf(t);$l(t,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(pn(M,""),a.flags&=-33);var w=Uf(t);$l(t,w,M);break;case 3:case 4:var G=a.stateNode.containerInfo,ee=Uf(t);Lf(t,ee,G);break;default:throw Error(s(161))}}catch(de){Gt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function X0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;X0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)B0(t,n.alternate,n),n=n.sibling}function Ts(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),Ts(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&L0(n,n.return,a),Ts(n);break;case 27:Fo(n.stateNode);case 26:case 5:Li(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}t=t.sibling}}function la(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:la(u,h,a),wo(4,h);break;case 1:if(la(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Gt(o,o.return,ee)}if(o=h,u=o.updateQueue,u!==null){var w=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)ym(G[u],w)}catch(ee){Gt(o,o.return,ee)}}a&&M&64&&U0(h),Co(h,h.return);break;case 27:I0(h);case 26:case 5:la(u,h,a),a&&o===null&&M&4&&O0(h),Co(h,h.return);break;case 12:la(u,h,a);break;case 31:la(u,h,a),a&&M&4&&G0(u,h);break;case 13:la(u,h,a),a&&M&4&&V0(u,h);break;case 22:h.memoizedState===null&&la(u,h,a),Co(h,h.return);break;case 30:break;default:la(u,h,a)}n=n.sibling}}function Pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&po(a))}function If(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&po(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)W0(t,n,a,o),n=n.sibling}function W0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),u&2048&&wo(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&po(t)));break;case 12:if(u&2048){Ei(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,M=h.id,w=h.onPostCommit;typeof w=="function"&&w(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Gt(n,n.return,G)}}else Ei(t,n,a,o);break;case 31:Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Ei(t,n,a,o):Ro(t,n):h._visibility&2?Ei(t,n,a,o):(h._visibility|=2,dr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Pf(M,n);break;case 24:Ei(t,n,a,o),u&2048&&If(n.alternate,n);break;default:Ei(t,n,a,o)}}function dr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,M=n,w=a,G=o,ee=M.flags;switch(M.tag){case 0:case 11:case 15:dr(h,M,w,G,u),wo(8,M);break;case 23:break;case 22:var de=M.stateNode;M.memoizedState!==null?de._visibility&2?dr(h,M,w,G,u):Ro(h,M):(de._visibility|=2,dr(h,M,w,G,u)),u&&ee&2048&&Pf(M.alternate,M);break;case 24:dr(h,M,w,G,u),u&&ee&2048&&If(M.alternate,M);break;default:dr(h,M,w,G,u)}n=n.sibling}}function Ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&Pf(o.alternate,o);break;case 24:Ro(a,o),u&2048&&If(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var Do=8192;function pr(t,n,a){if(t.subtreeFlags&Do)for(t=t.child;t!==null;)q0(t,n,a),t=t.sibling}function q0(t,n,a){switch(t.tag){case 26:pr(t,n,a),t.flags&Do&&t.memoizedState!==null&&Ay(a,bi,t.memoizedState,t.memoizedProps);break;case 5:pr(t,n,a);break;case 3:case 4:var o=bi;bi=pc(t.stateNode.containerInfo),pr(t,n,a),bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,pr(t,n,a),Do=o):pr(t,n,a));break;default:pr(t,n,a)}}function j0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function No(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,K0(o,t)}j0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Y0(t),t=t.sibling}function Y0(t){switch(t.tag){case 0:case 11:case 15:No(t),t.flags&2048&&za(9,t,t.return);break;case 3:No(t);break;case 12:No(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,tc(t)):No(t);break;default:No(t)}}function tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,K0(o,t)}j0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:za(8,n,n.return),tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tc(n));break;default:tc(n)}t=t.sibling}}function K0(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else e:for(a=t;_n!==null;){o=_n;var u=o.sibling,h=o.return;if(z0(o),o===a){_n=null;break e}if(u!==null){u.return=h,_n=u;break e}_n=h}}}var GS={getCacheForType:function(t){var n=wn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},VS=typeof WeakMap=="function"?WeakMap:Map,Pt=0,qt=null,vt=null,yt=0,Ht=0,ei=null,Ha=!1,mr=!1,Ff=!1,ca=0,an=0,Ga=0,As=0,Bf=0,ti=0,gr=0,Uo=null,qn=null,zf=!1,nc=0,Z0=0,ic=1/0,ac=null,Va=null,mn=0,ka=null,vr=null,ua=0,Hf=0,Gf=null,Q0=null,Lo=0,Vf=null;function ni(){return(Pt&2)!==0&&yt!==0?yt&-yt:F.T!==null?Yf():$r()}function J0(){if(ti===0)if((yt&536870912)===0||bt){var t=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),ti=t}else ti=536870912;return t=Jn.current,t!==null&&(t.flags|=32),ti}function jn(t,n,a){(t===qt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(_r(t,0),Xa(t,yt,ti,!1)),Ln(t,a),((Pt&2)===0||t!==qt)&&(t===qt&&((Pt&2)===0&&(As|=a),an===4&&Xa(t,yt,ti,!1)),Oi(t))}function $0(t,n,a){if((Pt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ce(t,n),u=o?WS(t,n):Xf(t,n,!0),h=o;do{if(u===0){mr&&!o&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!kS(a)){u=Xf(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var w=t;u=Uo;var G=w.current.memoizedState.isDehydrated;if(G&&(_r(w,M).flags|=256),M=Xf(w,M,!1),M!==2){if(Ff&&!G){w.errorRecoveryDisabledLanes|=h,As|=h,u=4;break e}h=qn,qn=u,h!==null&&(qn===null?qn=h:qn.push.apply(qn,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){_r(t,0),Xa(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ti,!Ha);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=nc+300-b(),10<u)){if(Xa(o,n,ti,!Ha),xe(o,0,!0)!==0)break e;ua=n,o.timeoutHandle=Dg(eg.bind(null,o,a,qn,ac,zf,n,ti,As,gr,Ha,h,"Throttled",-0,0),u);break e}eg(o,a,qn,ac,zf,n,ti,As,gr,Ha,h,null,-0,0)}}break}while(!0);Oi(t)}function eg(t,n,a,o,u,h,M,w,G,ee,de,_e,re,ce){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},q0(n,h,_e);var Xe=(h&62914560)===h?nc-b():(h&4194048)===h?Z0-b():0;if(Xe=wy(_e,Xe),Xe!==null){ua=h,t.cancelPendingCommit=Xe(lg.bind(null,t,n,h,a,o,u,M,w,G,de,_e,null,re,ce)),Xa(t,h,M,!ee);return}}lg(t,n,h,a,o,u,M,w,G)}function kS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Zn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,o){n&=~Bf,n&=~As,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Ie(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&gl(t,a,n)}function sc(){return(Pt&6)===0?(Oo(0),!1):!0}function kf(){if(vt!==null){if(Ht===0)var t=vt.return;else t=vt,$i=vs=null,sf(t),lr=null,go=0,t=vt;for(;t!==null;)N0(t.alternate,t),t=t.return;vt=null}}function _r(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,cy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ua=0,kf(),qt=t,vt=a=Qi(t.current,null),yt=n,Ht=0,ei=null,Ha=!1,mr=Ce(t,n),Ff=!1,gr=ti=Bf=As=Ga=an=0,qn=Uo=null,zf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ie(o),h=1<<u;n|=t[u],o&=~h}return ca=n,Al(),a}function tg(t,n){ct=null,F.H=Eo,n===or||n===Ol?(n=vm(),Ht=3):n===qu?(n=vm(),Ht=4):Ht=n===yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,vt===null&&(an=1,Yl(t,ui(n,t.current)))}function ng(){var t=Jn.current;return t===null?!0:(yt&4194048)===yt?pi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===pi:!1}function ig(){var t=F.H;return F.H=Eo,t===null?Eo:t}function ag(){var t=F.A;return F.A=GS,t}function rc(){an=4,Ha||(yt&4194048)!==yt&&Jn.current!==null||(mr=!0),(Ga&134217727)===0&&(As&134217727)===0||qt===null||Xa(qt,yt,ti,!1)}function Xf(t,n,a){var o=Pt;Pt|=2;var u=ig(),h=ag();(qt!==t||yt!==n)&&(ac=null,_r(t,n)),n=!1;var M=an;e:do try{if(Ht!==0&&vt!==null){var w=vt,G=ei;switch(Ht){case 8:kf(),M=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var ee=Ht;if(Ht=0,ei=null,xr(t,w,G,ee),a&&mr){M=0;break e}break;default:ee=Ht,Ht=0,ei=null,xr(t,w,G,ee)}}XS(),M=an;break}catch(de){tg(t,de)}while(!0);return n&&t.shellSuspendCounter++,$i=vs=null,Pt=o,F.H=u,F.A=h,vt===null&&(qt=null,yt=0,Al()),M}function XS(){for(;vt!==null;)sg(vt)}function WS(t,n){var a=Pt;Pt|=2;var o=ig(),u=ag();qt!==t||yt!==n?(ac=null,ic=b()+500,_r(t,n)):mr=Ce(t,n);e:do try{if(Ht!==0&&vt!==null){n=vt;var h=ei;t:switch(Ht){case 1:Ht=0,ei=null,xr(t,n,h,1);break;case 2:case 9:if(mm(h)){Ht=0,ei=null,rg(n);break}n=function(){Ht!==2&&Ht!==9||qt!==t||(Ht=7),Oi(t)},h.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:mm(h)?(Ht=0,ei=null,rg(n)):(Ht=0,ei=null,xr(t,n,h,7));break;case 5:var M=null;switch(vt.tag){case 26:M=vt.memoizedState;case 5:case 27:var w=vt;if(M?Wg(M):w.stateNode.complete){Ht=0,ei=null;var G=w.sibling;if(G!==null)vt=G;else{var ee=w.return;ee!==null?(vt=ee,oc(ee)):vt=null}break t}}Ht=0,ei=null,xr(t,n,h,5);break;case 6:Ht=0,ei=null,xr(t,n,h,6);break;case 8:kf(),an=6;break e;default:throw Error(s(462))}}qS();break}catch(de){tg(t,de)}while(!0);return $i=vs=null,F.H=o,F.A=u,Pt=a,vt!==null?0:(qt=null,yt=0,Al(),an)}function qS(){for(;vt!==null&&!Ye();)sg(vt)}function sg(t){var n=R0(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?oc(t):vt=n}function rg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=b0(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=b0(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:sf(n);default:N0(a,n),n=vt=am(n,ca),n=R0(a,n,ca)}t.memoizedProps=t.pendingProps,n===null?oc(t):vt=n}function xr(t,n,a,o){$i=vs=null,sf(n),lr=null,go=0;var u=n.return;try{if(OS(t,u,n,a,yt)){an=1,Yl(t,ui(a,t.current)),vt=null;return}}catch(h){if(u!==null)throw vt=u,h;an=1,Yl(t,ui(a,t.current)),vt=null;return}n.flags&32768?(bt||o===1?t=!0:mr||(yt&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),og(n,t)):oc(n)}function oc(t){var n=t;do{if((n.flags&32768)!==0){og(n,Ha);return}t=n.return;var a=FS(n.alternate,n,ca);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);an===0&&(an=5)}function og(t,n){do{var a=BS(t.alternate,t);if(a!==null){a.flags&=32767,vt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=a}while(t!==null);an=6,vt=null}function lg(t,n,a,o,u,h,M,w,G){t.cancelPendingCommit=null;do lc();while(mn!==0);if((Pt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Nu,xi(t,a,h,M,w,G),t===qt&&(vt=qt=null,yt=0),vr=n,ka=t,ua=a,Hf=h,Gf=u,Q0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ZS(fe,function(){return dg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=z.p,z.p=2,M=Pt,Pt|=4;try{zS(t,n,a)}finally{Pt=M,z.p=u,F.T=o}}mn=1,cg(),ug(),fg()}}function cg(){if(mn===1){mn=0;var t=ka,n=vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=z.p;z.p=2;var u=Pt;Pt|=4;try{k0(n,t);var h=nh,M=Kp(t.containerInfo),w=h.focusedElem,G=h.selectionRange;if(M!==w&&w&&w.ownerDocument&&Yp(w.ownerDocument.documentElement,w)){if(G!==null&&Au(w)){var ee=G.start,de=G.end;if(de===void 0&&(de=ee),"selectionStart"in w)w.selectionStart=ee,w.selectionEnd=Math.min(de,w.value.length);else{var _e=w.ownerDocument||document,re=_e&&_e.defaultView||window;if(re.getSelection){var ce=re.getSelection(),Xe=w.textContent.length,tt=Math.min(G.start,Xe),Wt=G.end===void 0?tt:Math.min(G.end,Xe);!ce.extend&&tt>Wt&&(M=Wt,Wt=tt,tt=M);var K=jp(w,tt),X=jp(w,Wt);if(K&&X&&(ce.rangeCount!==1||ce.anchorNode!==K.node||ce.anchorOffset!==K.offset||ce.focusNode!==X.node||ce.focusOffset!==X.offset)){var $=_e.createRange();$.setStart(K.node,K.offset),ce.removeAllRanges(),tt>Wt?(ce.addRange($),ce.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),ce.addRange($))}}}}for(_e=[],ce=w;ce=ce.parentNode;)ce.nodeType===1&&_e.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<_e.length;w++){var ge=_e[w];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Sc=!!th,nh=th=null}finally{Pt=u,z.p=o,F.T=a}}t.current=n,mn=2}}function ug(){if(mn===2){mn=0;var t=ka,n=vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=z.p;z.p=2;var u=Pt;Pt|=4;try{B0(t,n.alternate,n)}finally{Pt=u,z.p=o,F.T=a}}mn=3}}function fg(){if(mn===4||mn===3){mn=0,P();var t=ka,n=vr,a=ua,o=Q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,vr=ka=null,hg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Xs(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=z.p,z.p=2,F.T=null;try{for(var h=t.onRecoverableError,M=0;M<o.length;M++){var w=o[M];h(w.value,{componentStack:w.stack})}}finally{F.T=n,z.p=u}}(ua&3)!==0&&lc(),Oi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Vf?Lo++:(Lo=0,Vf=t):Lo=0,Oo(0)}}function hg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,po(n)))}function lc(){return cg(),ug(),fg(),dg()}function dg(){if(mn!==5)return!1;var t=ka,n=Hf;Hf=0;var a=Xs(ua),o=F.T,u=z.p;try{z.p=32>a?32:a,F.T=null,a=Gf,Gf=null;var h=ka,M=ua;if(mn=0,vr=ka=null,ua=0,(Pt&6)!==0)throw Error(s(331));var w=Pt;if(Pt|=4,Y0(h.current),W0(h,h.current,M,a),Pt=w,Oo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Ee,h)}catch{}return!0}finally{z.p=u,F.T=o,hg(t,n)}}function pg(t,n,a){n=ui(a,n),n=Sf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(Ln(t,2),Oi(t))}function Gt(t,n,a){if(t.tag===3)pg(t,t,a);else for(;n!==null;){if(n.tag===3){pg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=ui(a,t),a=m0(2),o=Ia(n,a,2),o!==null&&(g0(a,o,n,t),Ln(o,2),Oi(o));break}}n=n.return}}function Wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new VS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ff=!0,u.add(a),t=jS.bind(null,t,n,a),n.then(t,t))}function jS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(yt&a)===a&&(an===4||an===3&&(yt&62914560)===yt&&300>b()-nc?(Pt&2)===0&&_r(t,0):Bf|=a,gr===yt&&(gr=0)),Oi(t)}function mg(t,n){n===0&&(n=Bt()),t=ps(t,n),t!==null&&(Ln(t,n),Oi(t))}function YS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),mg(t,a)}function KS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),mg(t,a)}function ZS(t,n){return Tt(t,n)}var cc=null,Sr=null,qf=!1,uc=!1,jf=!1,Wa=0;function Oi(t){t!==Sr&&t.next===null&&(Sr===null?cc=Sr=t:Sr=Sr.next=t),uc=!0,qf||(qf=!0,JS())}function Oo(t,n){if(!jf&&uc){jf=!0;do for(var a=!1,o=cc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-Ie(42|t)+1)-1,h&=u&~(M&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,xg(o,h))}else h=yt,h=xe(o,o===qt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ce(o,h)||(a=!0,xg(o,h));o=o.next}while(a);jf=!1}}function QS(){gg()}function gg(){uc=qf=!1;var t=0;Wa!==0&&ly()&&(t=Wa);for(var n=b(),a=null,o=cc;o!==null;){var u=o.next,h=vg(o,n);h===0?(o.next=null,a===null?cc=u:a.next=u,u===null&&(Sr=a)):(a=o,(t!==0||(h&3)!==0)&&(uc=!0)),o=u}mn!==0&&mn!==5||Oo(t),Wa!==0&&(Wa=0)}function vg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var M=31-Ie(h),w=1<<M,G=u[M];G===-1?((w&a)===0||(w&o)!==0)&&(u[M]=at(w,n)):G<=n&&(t.expiredLanes|=w),h&=~w}if(n=qt,a=yt,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&It(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&It(o),Xs(a)){case 2:case 8:a=ye;break;case 32:a=fe;break;case 268435456:a=De;break;default:a=fe}return o=_g.bind(null,t),a=Tt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&It(o),t.callbackPriority=2,t.callbackNode=null,2}function _g(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(lc()&&t.callbackNode!==a)return null;var o=yt;return o=xe(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:($0(t,o,n),vg(t,b()),t.callbackNode!=null&&t.callbackNode===a?_g.bind(null,t):null)}function xg(t,n){if(lc())return null;$0(t,n,!0)}function JS(){uy(function(){(Pt&6)!==0?Tt(me,QS):gg()})}function Yf(){if(Wa===0){var t=sr;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Wa=t}return Wa}function Sg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_l(""+t)}function yg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function $S(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Sg((u[Sn]||null).action),M=o.submitter;M&&(n=(n=M[Sn]||null)?Sg(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var w=new Ml("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var G=M?yg(u,M):new FormData(u);pf(a,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(w.preventDefault(),G=M?yg(u,M):new FormData(u),pf(a,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var Kf=0;Kf<Du.length;Kf++){var Zf=Du[Kf],ey=Zf.toLowerCase(),ty=Zf[0].toUpperCase()+Zf.slice(1);Mi(ey,"on"+ty)}Mi(Jp,"onAnimationEnd"),Mi($p,"onAnimationIteration"),Mi(em,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(vS,"onTransitionRun"),Mi(_S,"onTransitionStart"),Mi(xS,"onTransitionCancel"),Mi(tm,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function Mg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var w=o[M],G=w.instance,ee=w.currentTarget;if(w=w.listener,G!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=ee;try{h(u)}catch(de){Tl(de)}u.currentTarget=null,h=G}else for(M=0;M<o.length;M++){if(w=o[M],G=w.instance,ee=w.currentTarget,w=w.listener,G!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=ee;try{h(u)}catch(de){Tl(de)}u.currentTarget=null,h=G}}}}function _t(t,n){var a=n[Ws];a===void 0&&(a=n[Ws]=new Set);var o=t+"__bubble";a.has(o)||(bg(n,t,2,!1),a.add(o))}function Qf(t,n,a){var o=0;n&&(o|=4),bg(a,t,o,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function Jf(t){if(!t[fc]){t[fc]=!0,Y.forEach(function(a){a!=="selectionchange"&&(ny.has(a)||Qf(a,!1,t),Qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[fc]||(n[fc]=!0,Qf("selectionchange",!1,n))}}function bg(t,n,a,o){switch(Jg(n)){case 2:var u=Dy;break;case 8:u=Ny;break;default:u=dh}a=u.bind(null,n,a,t),u=void 0,!vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function $f(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var w=o.stateNode.containerInfo;if(w===u)break;if(M===4)for(M=o.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;w!==null;){if(M=Aa(w),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){o=h=M;continue e}w=w.parentNode}}o=o.return}Cp(function(){var ee=h,de=mu(a),_e=[];e:{var re=nm.get(t);if(re!==void 0){var ce=Ml,Xe=t;switch(t){case"keypress":if(Sl(a)===0)break e;case"keydown":case"keyup":ce=Kx;break;case"focusin":Xe="focus",ce=yu;break;case"focusout":Xe="blur",ce=yu;break;case"beforeblur":case"afterblur":ce=yu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Jx;break;case Jp:case $p:case em:ce=Hx;break;case tm:ce=eS;break;case"scroll":case"scrollend":ce=Px;break;case"wheel":ce=nS;break;case"copy":case"cut":case"paste":ce=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Lp;break;case"toggle":case"beforetoggle":ce=aS}var tt=(n&4)!==0,Wt=!tt&&(t==="scroll"||t==="scrollend"),K=tt?re!==null?re+"Capture":null:re;tt=[];for(var X=ee,$;X!==null;){var ge=X;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||K===null||(ge=no(X,K),ge!=null&&tt.push(Io(X,ge,$))),Wt)break;X=X.return}0<tt.length&&(re=new ce(re,Xe,null,a,de),_e.push({event:re,listeners:tt}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",re&&a!==pu&&(Xe=a.relatedTarget||a.fromElement)&&(Aa(Xe)||Xe[Si]))break e;if((ce||re)&&(re=de.window===de?de:(re=de.ownerDocument)?re.defaultView||re.parentWindow:window,ce?(Xe=a.relatedTarget||a.toElement,ce=ee,Xe=Xe?Aa(Xe):null,Xe!==null&&(Wt=c(Xe),tt=Xe.tag,Xe!==Wt||tt!==5&&tt!==27&&tt!==6)&&(Xe=null)):(ce=null,Xe=ee),ce!==Xe)){if(tt=Np,ge="onMouseLeave",K="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Lp,ge="onPointerLeave",K="onPointerEnter",X="pointer"),Wt=ce==null?re:us(ce),$=Xe==null?re:us(Xe),re=new tt(ge,X+"leave",ce,a,de),re.target=Wt,re.relatedTarget=$,ge=null,Aa(de)===ee&&(tt=new tt(K,X+"enter",Xe,a,de),tt.target=$,tt.relatedTarget=Wt,ge=tt),Wt=ge,ce&&Xe)t:{for(tt=iy,K=ce,X=Xe,$=0,ge=K;ge;ge=tt(ge))$++;ge=0;for(var Je=X;Je;Je=tt(Je))ge++;for(;0<$-ge;)K=tt(K),$--;for(;0<ge-$;)X=tt(X),ge--;for(;$--;){if(K===X||X!==null&&K===X.alternate){tt=K;break t}K=tt(K),X=tt(X)}tt=null}else tt=null;ce!==null&&Eg(_e,re,ce,tt,!1),Xe!==null&&Wt!==null&&Eg(_e,Wt,Xe,tt,!0)}}e:{if(re=ee?us(ee):window,ce=re.nodeName&&re.nodeName.toLowerCase(),ce==="select"||ce==="input"&&re.type==="file")var Dt=Gp;else if(zp(re))if(Vp)Dt=pS;else{Dt=hS;var Ke=fS}else ce=re.nodeName,!ce||ce.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ee&&yi(ee.elementType)&&(Dt=Gp):Dt=dS;if(Dt&&(Dt=Dt(t,ee))){Hp(_e,Dt,a,de);break e}Ke&&Ke(t,re,ee),t==="focusout"&&ee&&re.type==="number"&&ee.memoizedProps.value!=null&&Mn(re,"number",re.value)}switch(Ke=ee?us(ee):window,t){case"focusin":(zp(Ke)||Ke.contentEditable==="true")&&(Qs=Ke,wu=ee,uo=null);break;case"focusout":uo=wu=Qs=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Zp(_e,a,de);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":Zp(_e,a,de)}var ft;if(bu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Zs?Fp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Op&&a.locale!=="ko"&&(Zs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Zs&&(ft=Rp()):(Ra=de,_u="value"in Ra?Ra.value:Ra.textContent,Zs=!0)),Ke=hc(ee,Mt),0<Ke.length&&(Mt=new Up(Mt,t,null,a,de),_e.push({event:Mt,listeners:Ke}),ft?Mt.data=ft:(ft=Bp(a),ft!==null&&(Mt.data=ft)))),(ft=rS?oS(t,a):lS(t,a))&&(Mt=hc(ee,"onBeforeInput"),0<Mt.length&&(Ke=new Up("onBeforeInput","beforeinput",null,a,de),_e.push({event:Ke,listeners:Mt}),Ke.data=ft)),$S(_e,t,ee,a,de)}Mg(_e,n)})}function Io(t,n,a){return{instance:t,listener:n,currentTarget:a}}function hc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=no(t,a),u!=null&&o.unshift(Io(t,u,h)),u=no(t,n),u!=null&&o.push(Io(t,u,h))),t.tag===3)return o;t=t.return}return[]}function iy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Eg(t,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var w=a,G=w.alternate,ee=w.stateNode;if(w=w.tag,G!==null&&G===o)break;w!==5&&w!==26&&w!==27||ee===null||(G=ee,u?(ee=no(a,h),ee!=null&&M.unshift(Io(a,ee,G))):u||(ee=no(a,h),ee!=null&&M.push(Io(a,ee,G)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var ay=/\r\n?/g,sy=/\u0000|\uFFFD/g;function Tg(t){return(typeof t=="string"?t:""+t).replace(ay,`
`).replace(sy,"")}function Ag(t,n){return n=Tg(n),Tg(t)===n}function Xt(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(t,""+o);break;case"className":$e(t,"class",o);break;case"tabIndex":$e(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,a,o);break;case"style":js(t,o,h);break;case"data":if(n!=="object"){$e(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=_l(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=_l(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=_l(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),qe(t,"popover",o);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lx.get(a)||a,qe(t,a,o))}}function eh(t,n,a,o,u,h){switch(a){case"style":js(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?pn(t,o):(typeof o=="number"||typeof o=="bigint")&&pn(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[Sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):qe(t,a,o)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,h,M,a,null)}}u&&Xt(t,n,"srcSet",a.srcSet,a,null),o&&Xt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var w=h=M=u=null,G=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":M=de;break;case"checked":G=de;break;case"defaultChecked":ee=de;break;case"value":h=de;break;case"defaultValue":w=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Xt(t,n,o,de,a,null)}}Yi(t,h,w,G,ee,M,u,!1);return;case"select":_t("invalid",t),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":M=w;break;case"multiple":o=w;default:Xt(t,n,u,w,a,null)}n=h,a=M,t.multiple=!!o,n!=null?li(t,!!o,n,!1):a!=null&&li(t,!!o,a,!0);return;case"textarea":_t("invalid",t),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(w=a[M],w!=null))switch(M){case"value":o=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Xt(t,n,M,w,a,null)}bn(t,o,u,h);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Xt(t,n,G,o,a,null));return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<Po.length;o++)_t(Po[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,ee,o,a,null)}return;default:if(yi(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&eh(t,n,de,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Xt(t,n,w,o,a,null))}function ry(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,w=null,G=null,ee=null,de=null;for(ce in a){var _e=a[ce];if(a.hasOwnProperty(ce)&&_e!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":G=_e;default:o.hasOwnProperty(ce)||Xt(t,n,ce,null,o,_e)}}for(var re in o){var ce=o[re];if(_e=a[re],o.hasOwnProperty(re)&&(ce!=null||_e!=null))switch(re){case"type":h=ce;break;case"name":u=ce;break;case"checked":ee=ce;break;case"defaultChecked":de=ce;break;case"value":M=ce;break;case"defaultValue":w=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==_e&&Xt(t,n,re,ce,o,_e)}}yn(t,M,w,G,ee,de,h,u);return;case"select":ce=M=w=re=null;for(h in a)if(G=a[h],a.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":ce=G;default:o.hasOwnProperty(h)||Xt(t,n,h,null,o,G)}for(u in o)if(h=o[u],G=a[u],o.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":re=h;break;case"defaultValue":w=h;break;case"multiple":M=h;default:h!==G&&Xt(t,n,u,h,o,G)}n=w,a=M,o=ce,re!=null?li(t,!!a,re,!1):!!o!=!!a&&(n!=null?li(t,!!a,n,!0):li(t,!!a,a?[]:"",!1));return;case"textarea":ce=re=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Xt(t,n,w,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":re=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Xt(t,n,M,u,o,h)}zt(t,re,ce);return;case"option":for(var Xe in a)re=a[Xe],a.hasOwnProperty(Xe)&&re!=null&&!o.hasOwnProperty(Xe)&&(Xe==="selected"?t.selected=!1:Xt(t,n,Xe,null,o,re));for(G in o)re=o[G],ce=a[G],o.hasOwnProperty(G)&&re!==ce&&(re!=null||ce!=null)&&(G==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":Xt(t,n,G,re,o,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)re=a[tt],a.hasOwnProperty(tt)&&re!=null&&!o.hasOwnProperty(tt)&&Xt(t,n,tt,null,o,re);for(ee in o)if(re=o[ee],ce=a[ee],o.hasOwnProperty(ee)&&re!==ce&&(re!=null||ce!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Xt(t,n,ee,re,o,ce)}return;default:if(yi(n)){for(var Wt in a)re=a[Wt],a.hasOwnProperty(Wt)&&re!==void 0&&!o.hasOwnProperty(Wt)&&eh(t,n,Wt,void 0,o,re);for(de in o)re=o[de],ce=a[de],!o.hasOwnProperty(de)||re===ce||re===void 0&&ce===void 0||eh(t,n,de,re,o,ce);return}}for(var K in a)re=a[K],a.hasOwnProperty(K)&&re!=null&&!o.hasOwnProperty(K)&&Xt(t,n,K,null,o,re);for(_e in o)re=o[_e],ce=a[_e],!o.hasOwnProperty(_e)||re===ce||re==null&&ce==null||Xt(t,n,_e,re,o,ce)}function wg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,M=u.initiatorType,w=u.duration;if(h&&w&&wg(M)){for(M=0,w=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],ee=G.startTime;if(ee>w)break;var de=G.transferSize,_e=G.initiatorType;de&&wg(_e)&&(G=G.responseEnd,M+=de*(G<w?1:(w-ee)/(G-ee)))}if(--o,n+=8*(h+M)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var th=null,nh=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function Cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ih(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ah=null;function ly(){var t=window.event;return t&&t.type==="popstate"?t===ah?!1:(ah=t,!0):(ah=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,cy=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(t){return Ng.resolve(null).then(t).catch(fy)}:Dg;function fy(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function Ug(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Er(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Fo(a);for(var h=a.firstChild;h;){var M=h.nextSibling,w=h.nodeName;h[cs]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=M}}else a==="body"&&Fo(t.ownerDocument.body);a=u}while(a);Er(n)}function Lg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function sh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sh(a),to(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function hy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[cs])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function dy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=mi(t.nextSibling),t===null))return null;return t}function Og(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=mi(t.nextSibling),t===null))return null;return t}function rh(t){return t.data==="$?"||t.data==="$~"}function oh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function py(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var lh=null;function Pg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Ig(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Fg(t,n,a){switch(n=dc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Fo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);to(t)}var gi=new Map,Bg=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fa=z.d;z.d={f:my,r:gy,D:vy,C:_y,L:xy,m:Sy,X:My,S:yy,M:by};function my(){var t=fa.f(),n=sc();return t||n}function gy(t){var n=wa(t);n!==null&&n.tag===5&&n.type==="form"?t0(n):fa.r(t)}var yr=typeof document>"u"?null:document;function zg(t,n,a){var o=yr;if(o&&typeof n=="string"&&n){var u=st(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Bg.has(u)||(Bg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",t),C(n),o.head.appendChild(n)))}}function vy(t){fa.D(t),zg("dns-prefetch",t,null)}function _y(t,n){fa.C(t,n),zg("preconnect",t,n)}function xy(t,n,a){fa.L(t,n,a);var o=yr;if(o&&t&&n){var u='link[rel="preload"][as="'+st(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+st(a.imageSizes)+'"]')):u+='[href="'+st(t)+'"]';var h=u;switch(n){case"style":h=Mr(t);break;case"script":h=br(t)}gi.has(h)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),gi.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Bo(h))||n==="script"&&o.querySelector(zo(h))||(n=o.createElement("link"),Rn(n,"link",t),C(n),o.head.appendChild(n)))}}function Sy(t,n){fa.m(t,n);var a=yr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+st(o)+'"][href="'+st(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=br(t)}if(!gi.has(h)&&(t=v({rel:"modulepreload",href:t},n),gi.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(h)))return}o=a.createElement("link"),Rn(o,"link",t),C(o),a.head.appendChild(o)}}}function yy(t,n,a){fa.S(t,n,a);var o=yr;if(o&&t){var u=Ca(o).hoistableStyles,h=Mr(t);n=n||"default";var M=u.get(h);if(!M){var w={loading:0,preload:null};if(M=o.querySelector(Bo(h)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=gi.get(h))&&ch(t,a);var G=M=o.createElement("link");C(G),Rn(G,"link",t),G._p=new Promise(function(ee,de){G.onload=ee,G.onerror=de}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,mc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:w},u.set(h,M)}}}function My(t,n){fa.X(t,n);var a=yr;if(a&&t){var o=Ca(a).hoistableScripts,u=br(t),h=o.get(u);h||(h=a.querySelector(zo(u)),h||(t=v({src:t,async:!0},n),(n=gi.get(u))&&uh(t,n),h=a.createElement("script"),C(h),Rn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function by(t,n){fa.M(t,n);var a=yr;if(a&&t){var o=Ca(a).hoistableScripts,u=br(t),h=o.get(u);h||(h=a.querySelector(zo(u)),h||(t=v({src:t,async:!0,type:"module"},n),(n=gi.get(u))&&uh(t,n),h=a.createElement("script"),C(h),Rn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Hg(t,n,a,o){var u=(u=ae.current)?pc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Mr(a.href),a=Ca(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Mr(a.href);var h=Ca(u).hoistableStyles,M=h.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,M),(h=u.querySelector(Bo(t)))&&!h._p&&(M.instance=h,M.state.loading=5),gi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(t,a),h||Ey(u,t,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=br(a),a=Ca(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Mr(t){return'href="'+st(t)+'"'}function Bo(t){return'link[rel="stylesheet"]['+t+"]"}function Gg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Ey(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),C(n),t.head.appendChild(n))}function br(t){return'[src="'+st(t)+'"]'}function zo(t){return"script[async]"+t}function Vg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+st(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),C(o),Rn(o,"style",u),mc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Mr(a.href);var h=t.querySelector(Bo(u));if(h)return n.state.loading|=4,n.instance=h,C(h),h;o=Gg(a),(u=gi.get(u))&&ch(o,u),h=(t.ownerDocument||t).createElement("link"),C(h);var M=h;return M._p=new Promise(function(w,G){M.onload=w,M.onerror=G}),Rn(h,"link",o),n.state.loading|=4,mc(h,a.precedence,t),n.instance=h;case"script":return h=br(a.src),(u=t.querySelector(zo(h)))?(n.instance=u,C(u),u):(o=a,(u=gi.get(h))&&(o=v({},a),uh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),C(u),Rn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,mc(o,a.precedence,t));return n.instance}function mc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var w=o[M];if(w.dataset.precedence===n)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function uh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var gc=null;function kg(t,n,a){if(gc===null){var o=new Map,u=gc=new Map;u.set(a,o)}else u=gc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[cs]||h[ln]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=t+M;var w=o.get(M);w?w.push(h):o.set(M,[h])}}return o}function Xg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ty(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ay(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Mr(o.href),h=n.querySelector(Bo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=vc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,C(h);return}h=n.ownerDocument||n,o=Gg(o),(u=gi.get(u))&&ch(o,u),h=h.createElement("link"),C(h);var M=h;M._p=new Promise(function(w,G){M.onload=w,M.onerror=G}),Rn(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=vc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var fh=0;function wy(t,n){return t.stylesheets&&t.count===0&&xc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&fh===0&&(fh=62500*oy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>fh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _c=null;function xc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_c=new Map,n.forEach(Cy,t),_c=null,vc.call(t))}function Cy(t,n){if(!(n.state.loading&4)){var a=_c.get(t);if(a)var o=a.get(null);else{a=new Map,_c.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=vc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ho={$$typeof:N,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Ry(t,n,a,o,u,h,M,w,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function qg(t,n,a,o,u,h,M,w,G,ee,de,_e){return t=new Ry(t,n,a,M,G,ee,de,_e,w),n=1,h===!0&&(n|=24),h=Qn(3,null,null,n),t.current=h,h.stateNode=t,n=ku(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},ju(h),t}function jg(t){return t?(t=er,t):er}function Yg(t,n,a,o,u,h){u=jg(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ia(t,o,n),a!==null&&(jn(a,t,n),_o(a,t,n))}function Kg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hh(t,n){Kg(t,n),(t=t.alternate)&&Kg(t,n)}function Zg(t){if(t.tag===13||t.tag===31){var n=ps(t,67108864);n!==null&&jn(n,t,67108864),hh(t,67108864)}}function Qg(t){if(t.tag===13||t.tag===31){var n=ni();n=Jr(n);var a=ps(t,n);a!==null&&jn(a,t,n),hh(t,n)}}var Sc=!0;function Dy(t,n,a,o){var u=F.T;F.T=null;var h=z.p;try{z.p=2,dh(t,n,a,o)}finally{z.p=h,F.T=u}}function Ny(t,n,a,o){var u=F.T;F.T=null;var h=z.p;try{z.p=8,dh(t,n,a,o)}finally{z.p=h,F.T=u}}function dh(t,n,a,o){if(Sc){var u=ph(o);if(u===null)$f(t,n,o,yc,a),$g(t,o);else if(Ly(u,t,n,a,o))o.stopPropagation();else if($g(t,o),n&4&&-1<Uy.indexOf(t)){for(;u!==null;){var h=wa(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=be(h.pendingLanes);if(M!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var G=1<<31-Ie(M);w.entanglements[1]|=G,M&=~G}Oi(h),(Pt&6)===0&&(ic=b()+500,Oo(0))}}break;case 31:case 13:w=ps(h,2),w!==null&&jn(w,h,2),sc(),hh(h,2)}if(h=ph(o),h===null&&$f(t,n,o,yc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else $f(t,n,o,null,a)}}function ph(t){return t=mu(t),mh(t)}var yc=null;function mh(t){if(yc=null,t=Aa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return yc=t,null}function Jg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case me:return 2;case ye:return 8;case fe:case Ze:return 32;case De:return 268435456;default:return 32}default:return 32}}var gh=!1,ja=null,Ya=null,Ka=null,Go=new Map,Vo=new Map,Za=[],Uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=wa(n),n!==null&&Zg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ly(t,n,a,o,u){switch(n){case"focusin":return ja=ko(ja,t,n,a,o,u),!0;case"dragenter":return Ya=ko(Ya,t,n,a,o,u),!0;case"mouseover":return Ka=ko(Ka,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Go.set(h,ko(Go.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Vo.set(h,ko(Vo.get(h)||null,t,n,a,o,u)),!0}return!1}function ev(t){var n=Aa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Di(t.priority,function(){Qg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Di(t.priority,function(){Qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ph(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return n=wa(a),n!==null&&Zg(n),t.blockedOn=a,!1;n.shift()}return!0}function tv(t,n,a){Mc(t)&&a.delete(n)}function Oy(){gh=!1,ja!==null&&Mc(ja)&&(ja=null),Ya!==null&&Mc(Ya)&&(Ya=null),Ka!==null&&Mc(Ka)&&(Ka=null),Go.forEach(tv),Vo.forEach(tv)}function bc(t,n){t.blockedOn===n&&(t.blockedOn=null,gh||(gh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Oy)))}var Ec=null;function nv(t){Ec!==t&&(Ec=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(mh(o||a)===null)continue;break}var h=wa(a);h!==null&&(t.splice(n,3),n-=3,pf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Er(t){function n(G){return bc(G,t)}ja!==null&&bc(ja,t),Ya!==null&&bc(Ya,t),Ka!==null&&bc(Ka,t),Go.forEach(n),Vo.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)ev(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[Sn]||null;if(typeof h=="function")M||nv(a);else if(M){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[Sn]||null)w=M.formAction;else if(mh(u)!==null)continue}else w=M.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),nv(a)}}}function iv(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function vh(t){this._internalRoot=t}Tc.prototype.render=vh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ni();Yg(a,o,t,n,null,null)},Tc.prototype.unmount=vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Yg(t.current,2,null,t,null,null),sc(),n[Si]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=$r();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&ev(t)}};var av=e.version;if(av!=="19.2.4")throw Error(s(527,av,"19.2.4"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Py={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Ee=Ac.inject(Py),Te=Ac}catch{}}return Wo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=f0,h=h0,M=d0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=qg(t,1,!1,null,null,a,o,null,u,h,M,iv),t[Si]=n.current,Jf(t),new vh(n)},Wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",h=f0,M=h0,w=d0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=qg(t,1,!0,n,a??null,o,u,G,h,M,w,iv),n.context=jg(null),a=n.current,o=ni(),o=Jr(o),u=Pa(o),u.callback=null,Ia(a,u,o),a=o,n.current.lanes=a,Ln(n,a),Oi(n),t[Si]=n.current,Jf(t),new Tc(n)},Wo.version="19.2.4",Wo}var pv;function jy(){if(pv)return Sh.exports;pv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Sh.exports=qy(),Sh.exports}var Yy=jy();const cp="182",Ky=0,mv=1,Zy=2,$c=1,Qy=2,sl=3,ls=0,Kn=1,_a=2,Sa=0,Gr=1,gv=2,vv=3,_v=4,Jy=5,Fs=100,$y=101,eM=102,tM=103,nM=104,iM=200,aM=201,sM=202,rM=203,fd=204,hd=205,oM=206,lM=207,cM=208,uM=209,fM=210,hM=211,dM=212,pM=213,mM=214,dd=0,pd=1,md=2,kr=3,gd=4,vd=5,_d=6,xd=7,V_=0,gM=1,vM=2,Vi=0,k_=1,X_=2,W_=3,up=4,q_=5,j_=6,Y_=7,K_=300,Vs=301,Xr=302,Sd=303,yd=304,fu=306,Md=1e3,xa=1001,bd=1002,Nn=1003,_M=1004,Cc=1005,Fn=1006,Eh=1007,zs=1008,ri=1009,Z_=1010,Q_=1011,ol=1012,fp=1013,Wi=1014,Hi=1015,ba=1016,hp=1017,dp=1018,ll=1020,J_=35902,$_=35899,ex=1021,tx=1022,Ri=1023,Ea=1026,Hs=1027,nx=1028,pp=1029,Wr=1030,mp=1031,gp=1033,eu=33776,tu=33777,nu=33778,iu=33779,Ed=35840,Td=35841,Ad=35842,wd=35843,Cd=36196,Rd=37492,Dd=37496,Nd=37488,Ud=37489,Ld=37490,Od=37491,Pd=37808,Id=37809,Fd=37810,Bd=37811,zd=37812,Hd=37813,Gd=37814,Vd=37815,kd=37816,Xd=37817,Wd=37818,qd=37819,jd=37820,Yd=37821,Kd=36492,Zd=36494,Qd=36495,Jd=36283,$d=36284,ep=36285,tp=36286,xM=3200,ix=0,SM=1,ss="",_i="srgb",qr="srgb-linear",ou="linear",Vt="srgb",Tr=7680,xv=519,yM=512,MM=513,bM=514,vp=515,EM=516,TM=517,_p=518,AM=519,Sv=35044,yv="300 es",Gi=2e3,lu=2001;function ax(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wM(){const r=cu("canvas");return r.style.display="block",r}const Mv={};function bv(...r){const e="THREE."+r.shift();console.log(e,...r)}function ot(...r){const e="THREE."+r.shift();console.warn(e,...r)}function wt(...r){const e="THREE."+r.shift();console.error(e,...r)}function cl(...r){const e=r.join(" ");e in Mv||(Mv[e]=!0,ot(...r))}function CM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Kr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Th=Math.PI/180,np=180/Math.PI;function fl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Et(r,e,i){return Math.max(e,Math.min(i,r))}function RM(r,e){return(r%e+e)%e}function Ah(r,e,i){return(1-i)*r+i*e}function qo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,i=0){Rt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3],x=c[f+0],S=c[f+1],E=c[f+2],A=c[f+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d>=1){e[i+0]=x,e[i+1]=S,e[i+2]=E,e[i+3]=A;return}if(v!==A||m!==x||p!==S||g!==E){let y=m*x+p*S+g*E+v*A;y<0&&(x=-x,S=-S,E=-E,A=-A,y=-y);let _=1-d;if(y<.9995){const T=Math.acos(y),N=Math.sin(T);_=Math.sin(_*T)/N,d=Math.sin(d*T)/N,m=m*_+x*d,p=p*_+S*d,g=g*_+E*d,v=v*_+A*d}else{m=m*_+x*d,p=p*_+S*d,g=g*_+E*d,v=v*_+A*d;const T=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=T,p*=T,g*=T,v*=T}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[f],x=c[f+1],S=c[f+2],E=c[f+3];return e[i]=d*E+g*v+m*S-p*x,e[i+1]=m*E+g*x+p*v-d*S,e[i+2]=p*E+g*S+d*x-m*v,e[i+3]=g*E-d*v-m*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(c/2),x=m(s/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*v+p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v-x*S*E;break;case"YXZ":this._x=x*g*v+p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v+x*S*E;break;case"ZXY":this._x=x*g*v-p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v-x*S*E;break;case"ZYX":this._x=x*g*v-p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v+x*S*E;break;case"YZX":this._x=x*g*v+p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v-x*S*E;break;case"XZY":this._x=x*g*v-p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v+x*S*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=s+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>d&&s>v){const S=2*Math.sqrt(1+s-d-v);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-s-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-s-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-s*p,this._z=c*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,f=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,i=0,s=0){te.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ev.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ev.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*s),g=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-d*g,this.y=s+m*g+d*p-c*v,this.z=l+m*v+c*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wh=new te,Ev=new hl;class ht{constructor(e,i,s,l,c,f,d,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,m,p)}set(e,i,s,l,c,f,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],x=s[2],S=s[5],E=s[8],A=l[0],y=l[3],_=l[6],T=l[1],N=l[4],R=l[7],L=l[2],B=l[5],I=l[8];return c[0]=f*A+d*T+m*L,c[3]=f*y+d*N+m*B,c[6]=f*_+d*R+m*I,c[1]=p*A+g*T+v*L,c[4]=p*y+g*N+v*B,c[7]=p*_+g*R+v*I,c[2]=x*A+S*T+E*L,c[5]=x*y+S*N+E*B,c[8]=x*_+S*R+E*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*d*p-s*c*g+s*d*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*f-d*p,x=d*m-g*c,S=p*c-f*m,E=i*v+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(l*p-g*s)*A,e[2]=(d*s-l*f)*A,e[3]=x*A,e[4]=(g*i-l*m)*A,e[5]=(l*c-d*i)*A,e[6]=S*A,e[7]=(s*m-p*i)*A,e[8]=(f*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Ch.makeScale(e,i)),this}rotate(e){return this.premultiply(Ch.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ch.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ch=new ht,Tv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Av=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DM(){const r={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Vt&&(l.r=ya(l.r),l.g=ya(l.g),l.b=ya(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Vt&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return cl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return cl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[qr]:{primaries:e,whitePoint:s,transfer:ou,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:s,transfer:Vt,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),r}const Ct=DM();function ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ar;class NM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ar===void 0&&(Ar=cu("canvas")),Ar.width=e.width,Ar.height=e.height;const l=Ar.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=cu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ya(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ya(i[s]/255)*255):i[s]=ya(i[s]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UM=0;class xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=fl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Rh(l[f].image)):c.push(Rh(l[f]))}else c=Rh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Rh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?NM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let LM=0;const Dh=new te;class Gn extends Kr{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=xa,l=xa,c=Fn,f=zs,d=Ri,m=ri,p=Gn.DEFAULT_ANISOTROPY,g=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=fl(),this.name="",this.source=new xp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Md:e.x=e.x-Math.floor(e.x);break;case xa:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Md:e.y=e.y-Math.floor(e.y);break;case xa:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=K_;Gn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],S=m[5],E=m[9],A=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+A)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,R=(S+1)/2,L=(_+1)/2,B=(g+x)/4,I=(v+A)/4,Z=(E+y)/4;return N>R&&N>L?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=B/s,c=I/s):R>L?R<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),s=B/l,c=Z/l):L<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),s=I/c,l=Z/c),this.set(s,l,c,i),this}let T=Math.sqrt((y-E)*(y-E)+(v-A)*(v-A)+(x-g)*(x-g));return Math.abs(T)<.001&&(T=1),this.x=(y-E)/T,this.y=(v-A)/T,this.z=(x-g)/T,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OM extends Kr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new xp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends OM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class sx extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PM extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ti):Ti.fromBufferAttribute(c,f),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rc.copy(s.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Dc.subVectors(this.max,jo),wr.subVectors(e.a,jo),Cr.subVectors(e.b,jo),Rr.subVectors(e.c,jo),Ja.subVectors(Cr,wr),$a.subVectors(Rr,Cr),ws.subVectors(wr,Rr);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-ws.z,ws.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,ws.z,0,-ws.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-ws.y,ws.x,0];return!Nh(i,wr,Cr,Rr,Dc)||(i=[1,0,0,0,1,0,0,0,1],!Nh(i,wr,Cr,Rr,Dc))?!1:(Nc.crossVectors(Ja,$a),i=[Nc.x,Nc.y,Nc.z],Nh(i,wr,Cr,Rr,Dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ha=[new te,new te,new te,new te,new te,new te,new te,new te],Ti=new te,Rc=new dl,wr=new te,Cr=new te,Rr=new te,Ja=new te,$a=new te,ws=new te,jo=new te,Dc=new te,Nc=new te,Cs=new te;function Nh(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Cs.fromArray(r,c);const d=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=e.dot(Cs),p=i.dot(Cs),g=s.dot(Cs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const IM=new dl,Yo=new te,Uh=new te;class Sp{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):IM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Uh)),this.expandByPoint(Yo.copy(e.center).sub(Uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const da=new te,Lh=new te,Uc=new te,es=new te,Oh=new te,Lc=new te,Ph=new te;class rx{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(da.copy(this.origin).addScaledVector(this.direction,i),da.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Lh.copy(e).add(i).multiplyScalar(.5),Uc.copy(i).sub(e).normalize(),es.copy(this.origin).sub(Lh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Uc),d=es.dot(this.direction),m=-es.dot(Uc),p=es.lengthSq(),g=Math.abs(1-f*f);let v,x,S,E;if(g>0)if(v=f*m-d,x=f*d-m,E=c*g,v>=0)if(x>=-E)if(x<=E){const A=1/g;v*=A,x*=A,S=v*(v+f*x+2*d)+x*(f*v+x+2*m)+p}else x=c,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-f*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(v=Math.max(0,-(f*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+x*(x+2*m)+p);else x=f>0?-c:c,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Lh).addScaledVector(Uc,x),S}intersectSphere(e,i){da.subVectors(e.center,this.origin);const s=da.dot(this.direction),l=da.dot(da)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,da)!==null}intersectTriangle(e,i,s,l,c){Oh.subVectors(i,e),Lc.subVectors(s,e),Ph.crossVectors(Oh,Lc);let f=this.direction.dot(Ph),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;es.subVectors(this.origin,e);const m=d*this.direction.dot(Lc.crossVectors(es,Lc));if(m<0)return null;const p=d*this.direction.dot(Oh.cross(es));if(p<0||m+p>f)return null;const g=-d*es.dot(Ph);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,i,s,l,c,f,d,m,p,g,v,x,S,E,A,y){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,m,p,g,v,x,S,E,A,y)}set(e,i,s,l,c,f,d,m,p,g,v,x,S,E,A,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=E,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Dr.setFromMatrixColumn(e,0).length(),c=1/Dr.setFromMatrixColumn(e,1).length(),f=1/Dr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=f*g,S=f*v,E=d*g,A=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=E+S*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,S=m*v,E=p*g,A=p*v;i[0]=x+A*d,i[4]=E*d-S,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=S*d-E,i[6]=A+x*d,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,S=m*v,E=p*g,A=p*v;i[0]=x-A*d,i[4]=-f*v,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*g,i[9]=A-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,S=f*v,E=d*g,A=d*v;i[0]=m*g,i[4]=E*p-S,i[8]=x*p+A,i[1]=m*v,i[5]=A*p+x,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,S=f*p,E=d*m,A=d*p;i[0]=m*g,i[4]=A-x*v,i[8]=E*v+S,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*v+E,i[10]=x-A*v}else if(e.order==="XZY"){const x=f*m,S=f*p,E=d*m,A=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+A,i[5]=f*g,i[9]=S*v-E,i[2]=E*v-S,i[6]=d*g,i[10]=A*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FM,e,BM)}lookAt(e,i,s){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),ts.crossVectors(s,ii),ts.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),ts.crossVectors(s,ii)),ts.normalize(),Oc.crossVectors(ii,ts),l[0]=ts.x,l[4]=Oc.x,l[8]=ii.x,l[1]=ts.y,l[5]=Oc.y,l[9]=ii.y,l[2]=ts.z,l[6]=Oc.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],x=s[9],S=s[13],E=s[2],A=s[6],y=s[10],_=s[14],T=s[3],N=s[7],R=s[11],L=s[15],B=l[0],I=l[4],Z=l[8],D=l[12],U=l[1],V=l[5],ie=l[9],W=l[13],oe=l[2],ue=l[6],F=l[10],z=l[14],J=l[3],Me=l[7],Se=l[11],O=l[15];return c[0]=f*B+d*U+m*oe+p*J,c[4]=f*I+d*V+m*ue+p*Me,c[8]=f*Z+d*ie+m*F+p*Se,c[12]=f*D+d*W+m*z+p*O,c[1]=g*B+v*U+x*oe+S*J,c[5]=g*I+v*V+x*ue+S*Me,c[9]=g*Z+v*ie+x*F+S*Se,c[13]=g*D+v*W+x*z+S*O,c[2]=E*B+A*U+y*oe+_*J,c[6]=E*I+A*V+y*ue+_*Me,c[10]=E*Z+A*ie+y*F+_*Se,c[14]=E*D+A*W+y*z+_*O,c[3]=T*B+N*U+R*oe+L*J,c[7]=T*I+N*V+R*ue+L*Me,c[11]=T*Z+N*ie+R*F+L*Se,c[15]=T*D+N*W+R*z+L*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],S=e[14],E=e[3],A=e[7],y=e[11],_=e[15],T=m*S-p*x,N=d*S-p*v,R=d*x-m*v,L=f*S-p*g,B=f*x-m*g,I=f*v-d*g;return i*(A*T-y*N+_*R)-s*(E*T-y*L+_*B)+l*(E*N-A*L+_*I)-c*(E*R-A*B+y*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],S=e[11],E=e[12],A=e[13],y=e[14],_=e[15],T=v*y*p-A*x*p+A*m*S-d*y*S-v*m*_+d*x*_,N=E*x*p-g*y*p-E*m*S+f*y*S+g*m*_-f*x*_,R=g*A*p-E*v*p+E*d*S-f*A*S-g*d*_+f*v*_,L=E*v*m-g*A*m-E*d*x+f*A*x+g*d*y-f*v*y,B=i*T+s*N+l*R+c*L;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return e[0]=T*I,e[1]=(A*x*c-v*y*c-A*l*S+s*y*S+v*l*_-s*x*_)*I,e[2]=(d*y*c-A*m*c+A*l*p-s*y*p-d*l*_+s*m*_)*I,e[3]=(v*m*c-d*x*c-v*l*p+s*x*p+d*l*S-s*m*S)*I,e[4]=N*I,e[5]=(g*y*c-E*x*c+E*l*S-i*y*S-g*l*_+i*x*_)*I,e[6]=(E*m*c-f*y*c-E*l*p+i*y*p+f*l*_-i*m*_)*I,e[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*S+i*m*S)*I,e[8]=R*I,e[9]=(E*v*c-g*A*c-E*s*S+i*A*S+g*s*_-i*v*_)*I,e[10]=(f*A*c-E*d*c+E*s*p-i*A*p-f*s*_+i*d*_)*I,e[11]=(g*d*c-f*v*c-g*s*p+i*v*p+f*s*S-i*d*S)*I,e[12]=L*I,e[13]=(g*A*l-E*v*l+E*s*x-i*A*x-g*s*y+i*v*y)*I,e[14]=(E*d*l-f*A*l-E*s*m+i*A*m+f*s*y-i*d*y)*I,e[15]=(f*v*l-g*d*l+g*s*m-i*v*m-f*s*x+i*d*x)*I,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,d=e.y,m=e.z,p=c*f,g=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,v=d+d,x=c*p,S=c*g,E=c*v,A=f*g,y=f*v,_=d*v,T=m*p,N=m*g,R=m*v,L=s.x,B=s.y,I=s.z;return l[0]=(1-(A+_))*L,l[1]=(S+R)*L,l[2]=(E-N)*L,l[3]=0,l[4]=(S-R)*B,l[5]=(1-(x+_))*B,l[6]=(y+T)*B,l[7]=0,l[8]=(E+N)*I,l[9]=(y-T)*I,l[10]=(1-(x+A))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Dr.set(l[0],l[1],l[2]).length();const f=Dr.set(l[4],l[5],l[6]).length(),d=Dr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,g=1/f,v=1/d;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=v,Ai.elements[9]*=v,Ai.elements[10]*=v,i.setFromRotationMatrix(Ai),s.x=c,s.y=f,s.z=d,this}makePerspective(e,i,s,l,c,f,d=Gi,m=!1){const p=this.elements,g=2*c/(i-e),v=2*c/(s-l),x=(i+e)/(i-e),S=(s+l)/(s-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(d===Gi)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(d===lu)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,d=Gi,m=!1){const p=this.elements,g=2/(i-e),v=2/(s-l),x=-(i+e)/(i-e),S=-(s+l)/(s-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(d===Gi)E=-2/(f-c),A=-(f+c)/(f-c);else if(d===lu)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Dr=new te,Ai=new $t,FM=new te(0,0,0),BM=new te(1,1,1),ts=new te,Oc=new te,ii=new te,wv=new $t,Cv=new hl;class qi{constructor(e=0,i=0,s=0,l=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return wv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Cv.setFromEuler(this),this.setFromQuaternion(Cv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class yp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zM=0;const Rv=new te,Nr=new hl,pa=new $t,Pc=new te,Ko=new te,HM=new te,GM=new hl,Dv=new te(1,0,0),Nv=new te(0,1,0),Uv=new te(0,0,1),Lv={type:"added"},VM={type:"removed"},Ur={type:"childadded",child:null},Ih={type:"childremoved",child:null};class Un extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new te,i=new qi,s=new hl,l=new te(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $t},normalMatrix:{value:new ht}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Nr.setFromAxisAngle(e,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,i){return Nr.setFromAxisAngle(e,i),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Dv,e)}rotateY(e){return this.rotateOnAxis(Nv,e)}rotateZ(e){return this.rotateOnAxis(Uv,e)}translateOnAxis(e,i){return Rv.copy(e).applyQuaternion(this.quaternion),this.position.add(Rv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Dv,e)}translateY(e){return this.translateOnAxis(Nv,e)}translateZ(e){return this.translateOnAxis(Uv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Pc.copy(e):Pc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Ko,Pc,this.up):pa.lookAt(Pc,Ko,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(pa),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lv),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(VM),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lv),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,HM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,GM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),S=f(e.animations),E=f(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new te(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new te,ma=new te,Fh=new te,ga=new te,Lr=new te,Or=new te,Ov=new te,Bh=new te,zh=new te,Hh=new te,Gh=new sn,Vh=new sn,kh=new sn;class Ci{constructor(e=new te,i=new te,s=new te){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){wi.subVectors(l,i),ma.subVectors(s,i),Fh.subVectors(e,i);const f=wi.dot(wi),d=wi.dot(ma),m=wi.dot(Fh),p=ma.dot(ma),g=ma.dot(Fh),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,S=(p*m-d*g)*x,E=(f*g-d*m)*x;return c.set(1-S-E,E,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,s,l,c,f,d,m){return this.getBarycoord(e,i,s,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(f,ga.y),m.addScaledVector(d,ga.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Gh.setScalar(0),Vh.setScalar(0),kh.setScalar(0),Gh.fromBufferAttribute(e,i),Vh.fromBufferAttribute(e,s),kh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Gh,c.x),f.addScaledVector(Vh,c.y),f.addScaledVector(kh,c.z),f}static isFrontFacing(e,i,s,l){return wi.subVectors(s,i),ma.subVectors(e,i),wi.cross(ma).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),wi.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ci.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,d;Lr.subVectors(l,s),Or.subVectors(c,s),Bh.subVectors(e,s);const m=Lr.dot(Bh),p=Or.dot(Bh);if(m<=0&&p<=0)return i.copy(s);zh.subVectors(e,l);const g=Lr.dot(zh),v=Or.dot(zh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Lr,f);Hh.subVectors(e,c);const S=Lr.dot(Hh),E=Or.dot(Hh);if(E>=0&&S<=E)return i.copy(c);const A=S*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Or,d);const y=g*E-S*v;if(y<=0&&v-g>=0&&S-E>=0)return Ov.subVectors(c,l),d=(v-g)/(v-g+(S-E)),i.copy(l).addScaledVector(Ov,d);const _=1/(y+A+x);return f=A*_,d=x*_,i.copy(s).addScaledVector(Lr,f).addScaledVector(Or,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function Xh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class pt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ct.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ct.workingColorSpace){if(e=RM(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Xh(f,c,e+1/3),this.g=Xh(f,c,e),this.b=Xh(f,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,i=_i){function s(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=_i){const s=ox[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Ct.workingToColorSpace(In.copy(this),e),Math.round(Et(In.r*255,0,255))*65536+Math.round(Et(In.g*255,0,255))*256+Math.round(Et(In.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=g<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=_i){Ct.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==_i?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+i,ns.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ns),e.getHSL(Ic);const s=Ah(ns.h,Ic.h,i),l=Ah(ns.s,Ic.s,i),c=Ah(ns.l,Ic.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new pt;pt.NAMES=ox;let kM=0;class pl extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=Gr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==fd&&(s.blendSrc=this.blendSrc),this.blendDst!==hd&&(s.blendDst=this.blendDst),this.blendEquation!==Fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lx extends pl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=V_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new te,Fc=new Rt;let XM=0;class Xi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Sv,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Fc.fromBufferAttribute(this,i),Fc.applyMatrix3(e),this.setXY(i,Fc.x,Fc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=qo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Yn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=qo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=qo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=qo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=qo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sv&&(e.usage=this.usage),e}}class cx extends Xi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class ux extends Xi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ma extends Xi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let WM=0;const vi=new $t,Wh=new Un,Pr=new te,ai=new dl,Zo=new dl,xn=new te;class Ta extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ax(e)?ux:cx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,s){return vi.makeTranslation(e,i,s),this.applyMatrix4(vi),this}scale(e,i,s){return vi.makeScale(e,i,s),this.applyMatrix4(vi),this}lookAt(e){return Wh.lookAt(e),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ma(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Zo.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ai.min,Zo.min),ai.expandByPoint(xn),xn.addVectors(ai.max,Zo.max),ai.expandByPoint(xn)):(ai.expandByPoint(Zo.min),ai.expandByPoint(Zo.max))}ai.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)xn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),m&&(Pr.fromBufferAttribute(e,p),xn.add(Pr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<s.count;Z++)d[Z]=new te,m[Z]=new te;const p=new te,g=new te,v=new te,x=new Rt,S=new Rt,E=new Rt,A=new te,y=new te;function _(Z,D,U){p.fromBufferAttribute(s,Z),g.fromBufferAttribute(s,D),v.fromBufferAttribute(s,U),x.fromBufferAttribute(c,Z),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,U),g.sub(p),v.sub(p),S.sub(x),E.sub(x);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(V),d[Z].add(A),d[D].add(A),d[U].add(A),m[Z].add(y),m[D].add(y),m[U].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let Z=0,D=T.length;Z<D;++Z){const U=T[Z],V=U.start,ie=U.count;for(let W=V,oe=V+ie;W<oe;W+=3)_(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const N=new te,R=new te,L=new te,B=new te;function I(Z){L.fromBufferAttribute(l,Z),B.copy(L);const D=d[Z];N.copy(D),N.sub(L.multiplyScalar(L.dot(D))).normalize(),R.crossVectors(B,D);const V=R.dot(m[Z])<0?-1:1;f.setXYZW(Z,N.x,N.y,N.z,V)}for(let Z=0,D=T.length;Z<D;++Z){const U=T[Z],V=U.start,ie=U.count;for(let W=V,oe=V+ie;W<oe;W+=3)I(e.getX(W+0)),I(e.getX(W+1)),I(e.getX(W+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Xi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new te,c=new te,f=new te,d=new te,m=new te,p=new te,g=new te,v=new te;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),A=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,y),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let S=0,E=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?S=m[A]*d.data.stride+d.offset:S=m[A]*g;for(let _=0;_<g;_++)x[E++]=p[S++]}return new Xi(x,g,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ta,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],S=e(x,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pv=new $t,Rs=new rx,Bc=new Sp,Iv=new te,zc=new te,Hc=new te,Gc=new te,qh=new te,Vc=new te,Fv=new te,kc=new te;class Hn extends Un{constructor(e=new Ta,i=new lx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(qh.fromBufferAttribute(v,e),f?Vc.addScaledVector(qh,g):Vc.addScaledVector(qh.sub(i),g))}i.add(Vc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(c),Rs.copy(e.ray).recast(e.near),!(Bc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Bc,Iv)===null||Rs.origin.distanceToSquared(Iv)>(e.far-e.near)**2))&&(Pv.copy(c).invert(),Rs.copy(e.ray).applyMatrix4(Pv),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Rs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const y=x[E],_=f[y.materialIndex],T=Math.max(y.start,S.start),N=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=T,L=N;R<L;R+=3){const B=d.getX(R),I=d.getX(R+1),Z=d.getX(R+2);l=Xc(this,_,e,s,p,g,v,B,I,Z),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=E,_=A;y<_;y+=3){const T=d.getX(y),N=d.getX(y+1),R=d.getX(y+2);l=Xc(this,f,e,s,p,g,v,T,N,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const y=x[E],_=f[y.materialIndex],T=Math.max(y.start,S.start),N=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let R=T,L=N;R<L;R+=3){const B=R,I=R+1,Z=R+2;l=Xc(this,_,e,s,p,g,v,B,I,Z),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let y=E,_=A;y<_;y+=3){const T=y,N=y+1,R=y+2;l=Xc(this,f,e,s,p,g,v,T,N,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function qM(r,e,i,s,l,c,f,d){let m;if(e.side===Kn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,e.side===ls,d),m===null)return null;kc.copy(d),kc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(kc);return p<i.near||p>i.far?null:{distance:p,point:kc.clone(),object:r}}function Xc(r,e,i,s,l,c,f,d,m,p){r.getVertexPosition(d,zc),r.getVertexPosition(m,Hc),r.getVertexPosition(p,Gc);const g=qM(r,e,i,s,zc,Hc,Gc,Fv);if(g){const v=new te;Ci.getBarycoord(Fv,zc,Hc,Gc,v),l&&(g.uv=Ci.getInterpolatedAttribute(l,d,m,p,v,new Rt)),c&&(g.uv1=Ci.getInterpolatedAttribute(c,d,m,p,v,new Rt)),f&&(g.normal=Ci.getInterpolatedAttribute(f,d,m,p,v,new te),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new te,materialIndex:0};Ci.getNormal(zc,Hc,Gc,x.normal),g.face=x,g.barycoord=v}return g}class zi extends Ta{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ma(p,3)),this.setAttribute("normal",new Ma(g,3)),this.setAttribute("uv",new Ma(v,2));function E(A,y,_,T,N,R,L,B,I,Z,D){const U=R/I,V=L/Z,ie=R/2,W=L/2,oe=B/2,ue=I+1,F=Z+1;let z=0,J=0;const Me=new te;for(let Se=0;Se<F;Se++){const O=Se*V-W;for(let ne=0;ne<ue;ne++){const ve=ne*U-ie;Me[A]=ve*T,Me[y]=O*N,Me[_]=oe,p.push(Me.x,Me.y,Me.z),Me[A]=0,Me[y]=0,Me[_]=B>0?1:-1,g.push(Me.x,Me.y,Me.z),v.push(ne/I),v.push(1-Se/Z),z+=1}}for(let Se=0;Se<Z;Se++)for(let O=0;O<I;O++){const ne=x+O+ue*Se,ve=x+O+ue*(Se+1),we=x+(O+1)+ue*(Se+1),ze=x+(O+1)+ue*Se;m.push(ne,ve,ze),m.push(ve,we,ze),J+=6}d.addGroup(S,J,D),S+=J,x+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function zn(r){const e={};for(let i=0;i<r.length;i++){const s=jr(r[i]);for(const l in s)e[l]=s[l]}return e}function jM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function fx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const YM={clone:jr,merge:zn};var KM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends pl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KM,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=jM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class hx extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new te,Bv=new Rt,zv=new Rt;class si extends hx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(Th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,i){return this.getViewBounds(e,Bv,zv),i.subVectors(zv,Bv)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Th*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ir=-90,Fr=1;class QM extends Un{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Ir,Fr,e,i);l.layers=this.layers,this.add(l);const c=new si(Ir,Fr,e,i);c.layers=this.layers,this.add(c);const f=new si(Ir,Fr,e,i);f.layers=this.layers,this.add(f);const d=new si(Ir,Fr,e,i);d.layers=this.layers,this.add(d);const m=new si(Ir,Fr,e,i);m.layers=this.layers,this.add(m);const p=new si(Ir,Fr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(e===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===lu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(v,x,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class dx extends Gn{constructor(e=[],i=Vs,s,l,c,f,d,m,p,g){super(e,i,s,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class px extends ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new dx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new zi(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Sa});c.uniforms.tEquirect.value=i;const f=new Hn(l,c),d=i.minFilter;return i.minFilter===zs&&(i.minFilter=Fn),new QM(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class Wc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,s),_=this._getHandJoint(p,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Wc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Mp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=i}clone(){return new Mp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $M extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class eb extends Gn{constructor(e=null,i=1,s=1,l,c,f,d,m,p=Nn,g=Nn,v,x){super(null,f,d,m,p,g,l,c,v,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new te,tb=new te,nb=new ht;class Is{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Yh.subVectors(s,i).cross(tb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Yh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||nb.getNormalMatrix(e),l=this.coplanarPoint(Yh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new Sp,ib=new Rt(.5,.5),qc=new te;class bp{constructor(e=new Is,i=new Is,s=new Is,l=new Is,c=new Is,f=new Is){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Gi,s=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],v=c[5],x=c[6],S=c[7],E=c[8],A=c[9],y=c[10],_=c[11],T=c[12],N=c[13],R=c[14],L=c[15];if(l[0].setComponents(p-f,S-g,_-E,L-T).normalize(),l[1].setComponents(p+f,S+g,_+E,L+T).normalize(),l[2].setComponents(p+d,S+v,_+A,L+N).normalize(),l[3].setComponents(p-d,S-v,_-A,L-N).normalize(),s)l[4].setComponents(m,x,y,R).normalize(),l[5].setComponents(p-m,S-x,_-y,L-R).normalize();else if(l[4].setComponents(p-m,S-x,_-y,L-R).normalize(),i===Gi)l[5].setComponents(p+m,S+x,_+y,L+R).normalize();else if(i===lu)l[5].setComponents(m,x,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const i=ib.distanceTo(e.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(qc.x=l.normal.x>0?e.max.x:e.min.x,qc.y=l.normal.y>0?e.max.y:e.min.y,qc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ul extends Gn{constructor(e,i,s=Wi,l,c,f,d=Nn,m=Nn,p,g=Ea,v=1){if(g!==Ea&&g!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,c,f,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ab extends ul{constructor(e,i=Wi,s=Vs,l,c,f=Nn,d=Nn,m,p=Ea){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,s,l,c,f,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mx extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ml extends Ta{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=e/d,x=i/m,S=[],E=[],A=[],y=[];for(let _=0;_<g;_++){const T=_*x-f;for(let N=0;N<p;N++){const R=N*v-c;E.push(R,-T,0),A.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let T=0;T<d;T++){const N=T+p*_,R=T+p*(_+1),L=T+1+p*(_+1),B=T+1+p*_;S.push(N,R,B),S.push(R,L,B)}this.setIndex(S),this.setAttribute("position",new Ma(E,3)),this.setAttribute("normal",new Ma(A,3)),this.setAttribute("uv",new Ma(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.widthSegments,e.heightSegments)}}class sb extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jc extends pl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ix,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rb extends pl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ob extends pl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ep extends Un{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class lb extends Ep{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const Kh=new $t,Hv=new te,Gv=new te;class gx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bp,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Hv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hv),Gv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Gv),i.updateMatrixWorld(),Kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cb extends gx{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class Zh extends Ep{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new cb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Tp extends hx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ub extends gx{constructor(){super(new Tp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qh extends Ep{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new ub}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class fb extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Vv=new $t;class hb{constructor(e,i,s=0,l=1/0){this.ray=new rx(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new yp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):wt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Vv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vv),this}intersectObject(e,i=!0,s=[]){return ip(e,this,s,i),s.sort(kv),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)ip(e[l],this,s,i);return s.sort(kv),s}}function kv(r,e){return r.distance-e.distance}function ip(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)ip(c[f],e,i,!0)}}function Xv(r,e,i,s){const l=db(s);switch(i){case ex:return r*e;case nx:return r*e/l.components*l.byteLength;case pp:return r*e/l.components*l.byteLength;case Wr:return r*e*2/l.components*l.byteLength;case mp:return r*e*2/l.components*l.byteLength;case tx:return r*e*3/l.components*l.byteLength;case Ri:return r*e*4/l.components*l.byteLength;case gp:return r*e*4/l.components*l.byteLength;case eu:case tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Td:case wd:return Math.max(r,16)*Math.max(e,8)/4;case Ed:case Ad:return Math.max(r,8)*Math.max(e,8)/2;case Cd:case Rd:case Nd:case Ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dd:case Ld:case Od:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case kd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case jd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kd:case Zd:case Qd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Jd:case $d:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function db(r){switch(r){case ri:case Z_:return{byteLength:1,components:1};case ol:case Q_:case ba:return{byteLength:2,components:1};case hp:case dp:return{byteLength:2,components:4};case Wi:case fp:case Hi:return{byteLength:4,components:1};case J_:case $_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);function vx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function pb(r){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,g);else{v.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<v.length;S++){const E=v[x],A=v[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,v[x]=A)}v.length=x+1;for(let S=0,E=v.length;S<E;S++){const A=v[S];r.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wb="gl_FragColor = linearToOutputTexel( gl_FragColor );",qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ME=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,EE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,BE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,XE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:mb,alphahash_pars_fragment:gb,alphamap_fragment:vb,alphamap_pars_fragment:_b,alphatest_fragment:xb,alphatest_pars_fragment:Sb,aomap_fragment:yb,aomap_pars_fragment:Mb,batching_pars_vertex:bb,batching_vertex:Eb,begin_vertex:Tb,beginnormal_vertex:Ab,bsdfs:wb,iridescence_fragment:Cb,bumpmap_pars_fragment:Rb,clipping_planes_fragment:Db,clipping_planes_pars_fragment:Nb,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:Lb,color_fragment:Ob,color_pars_fragment:Pb,color_pars_vertex:Ib,color_vertex:Fb,common:Bb,cube_uv_reflection_fragment:zb,defaultnormal_vertex:Hb,displacementmap_pars_vertex:Gb,displacementmap_vertex:Vb,emissivemap_fragment:kb,emissivemap_pars_fragment:Xb,colorspace_fragment:Wb,colorspace_pars_fragment:qb,envmap_fragment:jb,envmap_common_pars_fragment:Yb,envmap_pars_fragment:Kb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:oE,envmap_vertex:Qb,fog_vertex:Jb,fog_pars_vertex:$b,fog_fragment:eE,fog_pars_fragment:tE,gradientmap_pars_fragment:nE,lightmap_pars_fragment:iE,lights_lambert_fragment:aE,lights_lambert_pars_fragment:sE,lights_pars_begin:rE,lights_toon_fragment:lE,lights_toon_pars_fragment:cE,lights_phong_fragment:uE,lights_phong_pars_fragment:fE,lights_physical_fragment:hE,lights_physical_pars_fragment:dE,lights_fragment_begin:pE,lights_fragment_maps:mE,lights_fragment_end:gE,logdepthbuf_fragment:vE,logdepthbuf_pars_fragment:_E,logdepthbuf_pars_vertex:xE,logdepthbuf_vertex:SE,map_fragment:yE,map_pars_fragment:ME,map_particle_fragment:bE,map_particle_pars_fragment:EE,metalnessmap_fragment:TE,metalnessmap_pars_fragment:AE,morphinstance_vertex:wE,morphcolor_vertex:CE,morphnormal_vertex:RE,morphtarget_pars_vertex:DE,morphtarget_vertex:NE,normal_fragment_begin:UE,normal_fragment_maps:LE,normal_pars_fragment:OE,normal_pars_vertex:PE,normal_vertex:IE,normalmap_pars_fragment:FE,clearcoat_normal_fragment_begin:BE,clearcoat_normal_fragment_maps:zE,clearcoat_pars_fragment:HE,iridescence_pars_fragment:GE,opaque_fragment:VE,packing:kE,premultiplied_alpha_fragment:XE,project_vertex:WE,dithering_fragment:qE,dithering_pars_fragment:jE,roughnessmap_fragment:YE,roughnessmap_pars_fragment:KE,shadowmap_pars_fragment:ZE,shadowmap_pars_vertex:QE,shadowmap_vertex:JE,shadowmask_pars_fragment:$E,skinbase_vertex:eT,skinning_pars_vertex:tT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:aT,specularmap_pars_fragment:sT,tonemapping_fragment:rT,tonemapping_pars_fragment:oT,transmission_fragment:lT,transmission_pars_fragment:cT,uv_pars_fragment:uT,uv_pars_vertex:fT,uv_vertex:hT,worldpos_vertex:dT,background_vert:pT,background_frag:mT,backgroundCube_vert:gT,backgroundCube_frag:vT,cube_vert:_T,cube_frag:xT,depth_vert:ST,depth_frag:yT,distance_vert:MT,distance_frag:bT,equirect_vert:ET,equirect_frag:TT,linedashed_vert:AT,linedashed_frag:wT,meshbasic_vert:CT,meshbasic_frag:RT,meshlambert_vert:DT,meshlambert_frag:NT,meshmatcap_vert:UT,meshmatcap_frag:LT,meshnormal_vert:OT,meshnormal_frag:PT,meshphong_vert:IT,meshphong_frag:FT,meshphysical_vert:BT,meshphysical_frag:zT,meshtoon_vert:HT,meshtoon_frag:GT,points_vert:VT,points_frag:kT,shadow_vert:XT,shadow_frag:WT,sprite_vert:qT,sprite_frag:jT},Pe={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Bi={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Bi.physical={uniforms:zn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Yc={r:0,b:0,g:0},Ns=new qi,YT=new $t;function KT(r,e,i,s,l,c,f){const d=new pt(0);let m=c===!0?0:1,p,g,v=null,x=0,S=null;function E(N){let R=N.isScene===!0?N.background:null;return R&&R.isTexture&&(R=(N.backgroundBlurriness>0?i:e).get(R)),R}function A(N){let R=!1;const L=E(N);L===null?_(d,m):L&&L.isColor&&(_(L,1),R=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(N,R){const L=E(R);L&&(L.isCubeTexture||L.mapping===fu)?(g===void 0&&(g=new Hn(new zi(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:jr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,I,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ns.copy(R.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(YT.makeRotationFromEuler(Ns)),g.material.toneMapped=Ct.getTransfer(L.colorSpace)!==Vt,(v!==L||x!==L.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,v=L,x=L.version,S=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Hn(new ml(2,2),new ji({name:"BackgroundMaterial",uniforms:jr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(L.colorSpace)!==Vt,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||x!==L.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,v=L,x=L.version,S=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,R){N.getRGB(Yc,fx(r)),s.buffers.color.setClear(Yc.r,Yc.g,Yc.b,R,f)}function T(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,R=1){d.set(N),m=R,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:A,addToRenderList:y,dispose:T}}function ZT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(U,V,ie,W,oe){let ue=!1;const F=v(W,ie,V);c!==F&&(c=F,p(c.object)),ue=S(U,W,ie,oe),ue&&E(U,W,ie,oe),oe!==null&&e.update(oe,r.ELEMENT_ARRAY_BUFFER),(ue||f)&&(f=!1,R(U,V,ie,W),oe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function m(){return r.createVertexArray()}function p(U){return r.bindVertexArray(U)}function g(U){return r.deleteVertexArray(U)}function v(U,V,ie){const W=ie.wireframe===!0;let oe=s[U.id];oe===void 0&&(oe={},s[U.id]=oe);let ue=oe[V.id];ue===void 0&&(ue={},oe[V.id]=ue);let F=ue[W];return F===void 0&&(F=x(m()),ue[W]=F),F}function x(U){const V=[],ie=[],W=[];for(let oe=0;oe<i;oe++)V[oe]=0,ie[oe]=0,W[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ie,attributeDivisors:W,object:U,attributes:{},index:null}}function S(U,V,ie,W){const oe=c.attributes,ue=V.attributes;let F=0;const z=ie.getAttributes();for(const J in z)if(z[J].location>=0){const Se=oe[J];let O=ue[J];if(O===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(O=U.instanceColor)),Se===void 0||Se.attribute!==O||O&&Se.data!==O.data)return!0;F++}return c.attributesNum!==F||c.index!==W}function E(U,V,ie,W){const oe={},ue=V.attributes;let F=0;const z=ie.getAttributes();for(const J in z)if(z[J].location>=0){let Se=ue[J];Se===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(Se=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(Se=U.instanceColor));const O={};O.attribute=Se,Se&&Se.data&&(O.data=Se.data),oe[J]=O,F++}c.attributes=oe,c.attributesNum=F,c.index=W}function A(){const U=c.newAttributes;for(let V=0,ie=U.length;V<ie;V++)U[V]=0}function y(U){_(U,0)}function _(U,V){const ie=c.newAttributes,W=c.enabledAttributes,oe=c.attributeDivisors;ie[U]=1,W[U]===0&&(r.enableVertexAttribArray(U),W[U]=1),oe[U]!==V&&(r.vertexAttribDivisor(U,V),oe[U]=V)}function T(){const U=c.newAttributes,V=c.enabledAttributes;for(let ie=0,W=V.length;ie<W;ie++)V[ie]!==U[ie]&&(r.disableVertexAttribArray(ie),V[ie]=0)}function N(U,V,ie,W,oe,ue,F){F===!0?r.vertexAttribIPointer(U,V,ie,oe,ue):r.vertexAttribPointer(U,V,ie,W,oe,ue)}function R(U,V,ie,W){A();const oe=W.attributes,ue=ie.getAttributes(),F=V.defaultAttributeValues;for(const z in ue){const J=ue[z];if(J.location>=0){let Me=oe[z];if(Me===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(Me=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(Me=U.instanceColor)),Me!==void 0){const Se=Me.normalized,O=Me.itemSize,ne=e.get(Me);if(ne===void 0)continue;const ve=ne.buffer,we=ne.type,ze=ne.bytesPerElement,ae=we===r.INT||we===r.UNSIGNED_INT||Me.gpuType===fp;if(Me.isInterleavedBufferAttribute){const he=Me.data,Re=he.stride,Ge=Me.offset;if(he.isInstancedInterleavedBuffer){for(let Ve=0;Ve<J.locationSize;Ve++)_(J.location+Ve,he.meshPerAttribute);U.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ve=0;Ve<J.locationSize;Ve++)y(J.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let Ve=0;Ve<J.locationSize;Ve++)N(J.location+Ve,O/J.locationSize,we,Se,Re*ze,(Ge+O/J.locationSize*Ve)*ze,ae)}else{if(Me.isInstancedBufferAttribute){for(let he=0;he<J.locationSize;he++)_(J.location+he,Me.meshPerAttribute);U.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let he=0;he<J.locationSize;he++)y(J.location+he);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let he=0;he<J.locationSize;he++)N(J.location+he,O/J.locationSize,we,Se,O*ze,O/J.locationSize*he*ze,ae)}}else if(F!==void 0){const Se=F[z];if(Se!==void 0)switch(Se.length){case 2:r.vertexAttrib2fv(J.location,Se);break;case 3:r.vertexAttrib3fv(J.location,Se);break;case 4:r.vertexAttrib4fv(J.location,Se);break;default:r.vertexAttrib1fv(J.location,Se)}}}}T()}function L(){Z();for(const U in s){const V=s[U];for(const ie in V){const W=V[ie];for(const oe in W)g(W[oe].object),delete W[oe];delete V[ie]}delete s[U]}}function B(U){if(s[U.id]===void 0)return;const V=s[U.id];for(const ie in V){const W=V[ie];for(const oe in W)g(W[oe].object),delete W[oe];delete V[ie]}delete s[U.id]}function I(U){for(const V in s){const ie=s[V];if(ie[U.id]===void 0)continue;const W=ie[U.id];for(const oe in W)g(W[oe].object),delete W[oe];delete ie[U.id]}}function Z(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:D,dispose:L,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:y,disableUnusedAttributes:T}}function QT(r,e,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];i.update(S,s,1)}function m(p,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,v);let E=0;for(let A=0;A<v;A++)E+=g[A]*x[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function JT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Ri&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Z=I===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ri&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Hi&&!Z)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ot("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:T,maxVaryings:N,maxFragmentUniforms:R,maxSamples:L,samples:B}}function $T(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Is,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||s!==0||l;return l=x,s=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,_=r.get(v);if(!l||E===null||E.length===0||c&&!y)c?g(null):p();else{const T=c?0:s,N=T*4;let R=_.clippingState||null;m.value=R,R=g(E,x,N,S);for(let L=0;L!==N;++L)R[L]=i[L];_.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=T}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,x,S,E){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const _=S+A*4,T=x.matrixWorldInverse;d.getNormalMatrix(T),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,R=S;N!==A;++N,R+=4)f.copy(v[N]).applyMatrix4(T,d),f.normal.toArray(y,R),y[R+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function e1(r){let e=new WeakMap;function i(f,d){return d===Sd?f.mapping=Vs:d===yd&&(f.mapping=Xr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Sd||d===yd)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new px(m.height);return p.fromEquirectangularTexture(r,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const rs=4,Wv=[.125,.215,.35,.446,.526,.582],Bs=20,t1=256,Qo=new Tp,qv=new pt;let Jh=null,$h=0,ed=0,td=!1;const n1=new te;class jv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=n1}=c;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jh,$h,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Vs||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ba,format:Ri,colorSpace:qr,depthBuffer:!1},l=Yv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=i1(c)),this._blurMaterial=s1(c,e,i),this._ggxMaterial=a1(c,e,i)}return l}_compileMaterial(e){const i=new Hn(new Ta,e);this._renderer.compile(i,Qo)}_sceneToCubeUV(e,i,s,l,c){const m=new si(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(qv),v.toneMapping=Vi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hn(new zi,new lx({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let _=!1;const T=e.background;T?T.isColor&&(y.color.copy(T),e.background=null,_=!0):(y.color.copy(qv),_=!0);for(let N=0;N<6;N++){const R=N%3;R===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):R===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const L=this._cubeSize;Br(l,R*L,N>2?L:0,L,L),v.setRenderTarget(l),_&&v.render(A,m),v.render(e,m)}v.toneMapping=S,v.autoClear=x,e.background=T}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Vs||e.mapping===Xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Br(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Qo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),x=0+p*1.25,S=v*x,{_lodMax:E}=this,A=this._sizeLods[s],y=3*A*(s>E-rs?s-E+rs:0),_=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,Br(c,y,_,3*A,2*A),l.setRenderTarget(c),l.render(d,Qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Br(e,y,_,3*A,2*A),l.setRenderTarget(e),l.render(d,Qo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=p;const x=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Bs-1),A=c/E,y=isFinite(c)?1+Math.floor(g*A):Bs;y>Bs&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Bs}`);const _=[];let T=0;for(let I=0;I<Bs;++I){const Z=I/A,D=Math.exp(-Z*Z/2);_.push(D),I===0?T+=D:I<y&&(T+=2*D)}for(let I=0;I<_.length;I++)_[I]=_[I]/T;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-s;const R=this._sizeLods[l],L=3*R*(l>N-rs?l-N+rs:0),B=4*(this._cubeSize-R);Br(i,L,B,3*R,2*R),m.setRenderTarget(i),m.render(v,Qo)}}function i1(r){const e=[],i=[],s=[];let l=r;const c=r-rs+1+Wv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);e.push(d);let m=1/d;f>r-rs?m=Wv[f-r+rs-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,A=3,y=2,_=1,T=new Float32Array(A*E*S),N=new Float32Array(y*E*S),R=new Float32Array(_*E*S);for(let B=0;B<S;B++){const I=B%3*2/3-1,Z=B>2?0:-1,D=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];T.set(D,A*E*B),N.set(x,y*E*B);const U=[B,B,B,B,B,B];R.set(U,_*E*B)}const L=new Ta;L.setAttribute("position",new Xi(T,A)),L.setAttribute("uv",new Xi(N,y)),L.setAttribute("faceIndex",new Xi(R,_)),s.push(new Hn(L,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Yv(r,e,i){const s=new ki(r,e,i);return s.texture.mapping=fu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function a1(r,e,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:t1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function s1(r,e,i){const s=new Float32Array(Bs),l=new te(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Kv(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Zv(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function r1(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Sd||m===yd,g=m===Vs||m===Xr;if(p||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new jv(r)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new jv(r)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function o1(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&cl("WebGLRenderer: "+s+" extension not supported."),l}}}function l1(r,e,i,s){const l={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,E=v.attributes.position;let A=0;if(S!==null){const T=S.array;A=S.version;for(let N=0,R=T.length;N<R;N+=3){const L=T[N+0],B=T[N+1],I=T[N+2];x.push(L,B,B,I,I,L)}}else if(E!==void 0){const T=E.array;A=E.version;for(let N=0,R=T.length/3-1;N<R;N+=3){const L=N+0,B=N+1,I=N+2;x.push(L,B,B,I,I,L)}}else return;const y=new(ax(x)?ux:cx)(x,1);y.version=A;const _=c.get(v);_&&e.remove(_),c.set(v,y)}function g(v){const x=c.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function c1(r,e,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,S){r.drawElements(s,S,c,x*f),i.update(S,s,1)}function p(x,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,x*f,E),i.update(S,s,E))}function g(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];i.update(y,s,1)}function v(x,S,E,A){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/f,S[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,A,0,E);let _=0;for(let T=0;T<E;T++)_+=S[T]*A[T];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function u1(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function f1(r,e,i){const s=new WeakMap,l=new sn;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let U=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",U)};var S=U;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let L=d.attributes.position.count*R,B=1;L>e.maxTextureSize&&(B=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const I=new Float32Array(L*B*4*v),Z=new sx(I,L,B,v);Z.type=Hi,Z.needsUpdate=!0;const D=R*4;for(let V=0;V<v;V++){const ie=_[V],W=T[V],oe=N[V],ue=L*B*4*V;for(let F=0;F<ie.count;F++){const z=F*D;E===!0&&(l.fromBufferAttribute(ie,F),I[ue+z+0]=l.x,I[ue+z+1]=l.y,I[ue+z+2]=l.z,I[ue+z+3]=0),A===!0&&(l.fromBufferAttribute(W,F),I[ue+z+4]=l.x,I[ue+z+5]=l.y,I[ue+z+6]=l.z,I[ue+z+7]=0),y===!0&&(l.fromBufferAttribute(oe,F),I[ue+z+8]=l.x,I[ue+z+9]=l.y,I[ue+z+10]=l.z,I[ue+z+11]=oe.itemSize===4?l.w:1)}}x={count:v,texture:Z,size:new Rt(L,B)},s.set(d,x),d.addEventListener("dispose",U)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function h1(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const d1={[k_]:"LINEAR_TONE_MAPPING",[X_]:"REINHARD_TONE_MAPPING",[W_]:"CINEON_TONE_MAPPING",[up]:"ACES_FILMIC_TONE_MAPPING",[j_]:"AGX_TONE_MAPPING",[Y_]:"NEUTRAL_TONE_MAPPING",[q_]:"CUSTOM_TONE_MAPPING"};function p1(r,e,i,s,l){const c=new ki(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new ki(e,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),d=new Ta;d.setAttribute("position",new Ma([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ma([0,2,0,0,2,0],2));const m=new sb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Hn(d,m),g=new Tp(-1,1,1,-1,0,1);let v=null,x=null,S=!1,E,A=null,y=[],_=!1;this.setSize=function(T,N){c.setSize(T,N),f.setSize(T,N);for(let R=0;R<y.length;R++){const L=y[R];L.setSize&&L.setSize(T,N)}},this.setEffects=function(T){y=T,_=y.length>0&&y[0].isRenderPass===!0;const N=c.width,R=c.height;for(let L=0;L<y.length;L++){const B=y[L];B.setSize&&B.setSize(N,R)}},this.begin=function(T,N){if(S||T.toneMapping===Vi&&y.length===0)return!1;if(A=N,N!==null){const R=N.width,L=N.height;(c.width!==R||c.height!==L)&&this.setSize(R,L)}return _===!1&&T.setRenderTarget(c),E=T.toneMapping,T.toneMapping=Vi,!0},this.hasRenderPass=function(){return _},this.end=function(T,N){T.toneMapping=E,S=!0;let R=c,L=f;for(let B=0;B<y.length;B++){const I=y[B];if(I.enabled!==!1&&(I.render(T,L,R,N),I.needsSwap!==!1)){const Z=R;R=L,L=Z}}if(v!==T.outputColorSpace||x!==T.toneMapping){v=T.outputColorSpace,x=T.toneMapping,m.defines={},Ct.getTransfer(v)===Vt&&(m.defines.SRGB_TRANSFER="");const B=d1[x];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=R.texture,T.setRenderTarget(A),T.render(p,g),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const _x=new Gn,ap=new ul(1,1),xx=new sx,Sx=new PM,yx=new dx,Qv=[],Jv=[],$v=new Float32Array(16),e_=new Float32Array(9),t_=new Float32Array(4);function Zr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Qv[l];if(c===void 0&&(c=new Float32Array(l),Qv[l]=c),e!==0){s.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,r[f].toArray(c,d)}return c}function gn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function vn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function du(r,e){let i=Jv[e];i===void 0&&(i=new Int32Array(e),Jv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function m1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function g1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2fv(this.addr,e),vn(i,e)}}function v1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;r.uniform3fv(this.addr,e),vn(i,e)}}function _1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4fv(this.addr,e),vn(i,e)}}function x1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;t_.set(s),r.uniformMatrix2fv(this.addr,!1,t_),vn(i,s)}}function S1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;e_.set(s),r.uniformMatrix3fv(this.addr,!1,e_),vn(i,s)}}function y1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;$v.set(s),r.uniformMatrix4fv(this.addr,!1,$v),vn(i,s)}}function M1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function b1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2iv(this.addr,e),vn(i,e)}}function E1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;r.uniform3iv(this.addr,e),vn(i,e)}}function T1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4iv(this.addr,e),vn(i,e)}}function A1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function w1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2uiv(this.addr,e),vn(i,e)}}function C1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;r.uniform3uiv(this.addr,e),vn(i,e)}}function R1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4uiv(this.addr,e),vn(i,e)}}function D1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ap.compareFunction=i.isReversedDepthBuffer()?_p:vp,c=ap):c=_x,i.setTexture2D(e||c,l)}function N1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Sx,l)}function U1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||yx,l)}function L1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||xx,l)}function O1(r){switch(r){case 5126:return m1;case 35664:return g1;case 35665:return v1;case 35666:return _1;case 35674:return x1;case 35675:return S1;case 35676:return y1;case 5124:case 35670:return M1;case 35667:case 35671:return b1;case 35668:case 35672:return E1;case 35669:case 35673:return T1;case 5125:return A1;case 36294:return w1;case 36295:return C1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return L1}}function P1(r,e){r.uniform1fv(this.addr,e)}function I1(r,e){const i=Zr(e,this.size,2);r.uniform2fv(this.addr,i)}function F1(r,e){const i=Zr(e,this.size,3);r.uniform3fv(this.addr,i)}function B1(r,e){const i=Zr(e,this.size,4);r.uniform4fv(this.addr,i)}function z1(r,e){const i=Zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function H1(r,e){const i=Zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function G1(r,e){const i=Zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function V1(r,e){r.uniform1iv(this.addr,e)}function k1(r,e){r.uniform2iv(this.addr,e)}function X1(r,e){r.uniform3iv(this.addr,e)}function W1(r,e){r.uniform4iv(this.addr,e)}function q1(r,e){r.uniform1uiv(this.addr,e)}function j1(r,e){r.uniform2uiv(this.addr,e)}function Y1(r,e){r.uniform3uiv(this.addr,e)}function K1(r,e){r.uniform4uiv(this.addr,e)}function Z1(r,e,i){const s=this.cache,l=e.length,c=du(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=ap:f=_x;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||f,c[d])}function Q1(r,e,i){const s=this.cache,l=e.length,c=du(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Sx,c[f])}function J1(r,e,i){const s=this.cache,l=e.length,c=du(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||yx,c[f])}function $1(r,e,i){const s=this.cache,l=e.length,c=du(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||xx,c[f])}function eA(r){switch(r){case 5126:return P1;case 35664:return I1;case 35665:return F1;case 35666:return B1;case 35674:return z1;case 35675:return H1;case 35676:return G1;case 5124:case 35670:return V1;case 35667:case 35671:return k1;case 35668:case 35672:return X1;case 35669:case 35673:return W1;case 5125:return q1;case 36294:return j1;case 36295:return Y1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return $1}}class tA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=O1(i.type)}}class nA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=eA(i.type)}}class iA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function n_(r,e){r.seq.push(e),r.map[e.id]=e}function aA(r,e,i){const s=r.name,l=s.length;for(nd.lastIndex=0;;){const c=nd.exec(s),f=nd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){n_(i,p===void 0?new tA(d,r,e):new nA(d,r,e));break}else{let v=i.map[d];v===void 0&&(v=new iA(d),n_(i,v)),i=v}}}class au{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=e.getActiveUniform(i,f),m=e.getUniformLocation(i,d.name);aA(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function i_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const sA=37297;let rA=0;function oA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const a_=new ht;function lA(r){Ct._getMatrix(a_,Ct.workingColorSpace,r);const e=`mat3( ${a_.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(r)){case ou:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function s_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+oA(r.getShaderSource(e),d)}else return c}function cA(r,e){const i=lA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const uA={[k_]:"Linear",[X_]:"Reinhard",[W_]:"Cineon",[up]:"ACESFilmic",[j_]:"AgX",[Y_]:"Neutral",[q_]:"Custom"};function fA(r,e){const i=uA[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new te;function hA(){Ct.getLuminanceCoefficients(Kc);const r=Kc.x.toFixed(4),e=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function pA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function mA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:d}}return i}function rl(r){return r!==""}function r_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gA=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(r){return r.replace(gA,_A)}const vA=new Map;function _A(r,e){let i=dt[e];if(i===void 0){const s=vA.get(e);if(s!==void 0)i=dt[s],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return sp(i)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l_(r){return r.replace(xA,SA)}function SA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function c_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const yA={[$c]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function MA(r){return yA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bA={[Vs]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function EA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":bA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const TA={[Xr]:"ENVMAP_MODE_REFRACTION"};function AA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":TA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wA={[V_]:"ENVMAP_BLENDING_MULTIPLY",[gM]:"ENVMAP_BLENDING_MIX",[vM]:"ENVMAP_BLENDING_ADD"};function CA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":wA[r.combine]||"ENVMAP_BLENDING_NONE"}function RA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function DA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=MA(i),p=EA(i),g=AA(i),v=CA(i),x=RA(i),S=dA(i),E=pA(c),A=l.createProgram();let y,_,T=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(rl).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(rl).join(`
`),_.length>0&&(_+=`
`)):(y=[c_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),_=[c_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Vi?fA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,cA("linearToOutputTexel",i.outputColorSpace),hA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(rl).join(`
`)),f=sp(f),f=r_(f,i),f=o_(f,i),d=sp(d),d=r_(d,i),d=o_(d,i),f=l_(f),d=l_(d),i.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=T+y+f,R=T+_+d,L=i_(l,l.VERTEX_SHADER,N),B=i_(l,l.FRAGMENT_SHADER,R);l.attachShader(A,L),l.attachShader(A,B),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function I(V){if(r.debug.checkShaderErrors){const ie=l.getProgramInfoLog(A)||"",W=l.getShaderInfoLog(L)||"",oe=l.getShaderInfoLog(B)||"",ue=ie.trim(),F=W.trim(),z=oe.trim();let J=!0,Me=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,L,B);else{const Se=s_(l,L,"vertex"),O=s_(l,B,"fragment");wt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ue+`
`+Se+`
`+O)}else ue!==""?ot("WebGLProgram: Program Info Log:",ue):(F===""||z==="")&&(Me=!1);Me&&(V.diagnostics={runnable:J,programLog:ue,vertexShader:{log:F,prefix:y},fragmentShader:{log:z,prefix:_}})}l.deleteShader(L),l.deleteShader(B),Z=new au(l,A),D=mA(l,A)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(A,sA)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=rA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=B,this}let NA=0;class UA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new LA(e),i.set(e,s)),s}}class LA{constructor(e){this.id=NA++,this.code=e,this.usedTimes=0}}function OA(r,e,i,s,l,c,f){const d=new yp,m=new UA,p=new Set,g=[],v=new Map,x=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,U,V,ie,W){const oe=ie.fog,ue=W.geometry,F=D.isMeshStandardMaterial?ie.environment:null,z=(D.isMeshStandardMaterial?i:e).get(D.envMap||F),J=z&&z.mapping===fu?z.image.height:null,Me=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&ot("WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const Se=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,O=Se!==void 0?Se.length:0;let ne=0;ue.morphAttributes.position!==void 0&&(ne=1),ue.morphAttributes.normal!==void 0&&(ne=2),ue.morphAttributes.color!==void 0&&(ne=3);let ve,we,ze,ae;if(Me){const At=Bi[Me];ve=At.vertexShader,we=At.fragmentShader}else ve=D.vertexShader,we=D.fragmentShader,m.update(D),ze=m.getVertexShaderID(D),ae=m.getFragmentShaderID(D);const he=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),Ge=W.isInstancedMesh===!0,Ve=W.isBatchedMesh===!0,mt=!!D.map,en=!!D.matcap,St=!!z,gt=!!D.aoMap,Ut=!!D.lightMap,lt=!!D.bumpMap,tn=!!D.normalMap,k=!!D.displacementMap,Zt=!!D.emissiveMap,Tt=!!D.metalnessMap,It=!!D.roughnessMap,Ye=D.anisotropy>0,P=D.clearcoat>0,b=D.dispersion>0,j=D.iridescence>0,me=D.sheen>0,ye=D.transmission>0,fe=Ye&&!!D.anisotropyMap,Ze=P&&!!D.clearcoatMap,De=P&&!!D.clearcoatNormalMap,We=P&&!!D.clearcoatRoughnessMap,nt=j&&!!D.iridescenceMap,Ee=j&&!!D.iridescenceThicknessMap,Te=me&&!!D.sheenColorMap,Be=me&&!!D.sheenRoughnessMap,Ie=!!D.specularMap,Ne=!!D.specularColorMap,ut=!!D.specularIntensityMap,q=ye&&!!D.transmissionMap,Le=ye&&!!D.thicknessMap,Ae=!!D.gradientMap,Fe=!!D.alphaMap,be=D.alphaTest>0,xe=!!D.alphaHash,Ce=!!D.extensions;let at=Vi;D.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(at=r.toneMapping);const Bt={shaderID:Me,shaderType:D.type,shaderName:D.name,vertexShader:ve,fragmentShader:we,defines:D.defines,customVertexShaderID:ze,customFragmentShaderID:ae,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&W._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&W.instanceColor!==null,instancingMorph:Ge&&W.morphTexture!==null,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:qr,alphaToCoverage:!!D.alphaToCoverage,map:mt,matcap:en,envMap:St,envMapMode:St&&z.mapping,envMapCubeUVHeight:J,aoMap:gt,lightMap:Ut,bumpMap:lt,normalMap:tn,displacementMap:k,emissiveMap:Zt,normalMapObjectSpace:tn&&D.normalMapType===SM,normalMapTangentSpace:tn&&D.normalMapType===ix,metalnessMap:Tt,roughnessMap:It,anisotropy:Ye,anisotropyMap:fe,clearcoat:P,clearcoatMap:Ze,clearcoatNormalMap:De,clearcoatRoughnessMap:We,dispersion:b,iridescence:j,iridescenceMap:nt,iridescenceThicknessMap:Ee,sheen:me,sheenColorMap:Te,sheenRoughnessMap:Be,specularMap:Ie,specularColorMap:Ne,specularIntensityMap:ut,transmission:ye,transmissionMap:q,thicknessMap:Le,gradientMap:Ae,opaque:D.transparent===!1&&D.blending===Gr&&D.alphaToCoverage===!1,alphaMap:Fe,alphaTest:be,alphaHash:xe,combine:D.combine,mapUv:mt&&A(D.map.channel),aoMapUv:gt&&A(D.aoMap.channel),lightMapUv:Ut&&A(D.lightMap.channel),bumpMapUv:lt&&A(D.bumpMap.channel),normalMapUv:tn&&A(D.normalMap.channel),displacementMapUv:k&&A(D.displacementMap.channel),emissiveMapUv:Zt&&A(D.emissiveMap.channel),metalnessMapUv:Tt&&A(D.metalnessMap.channel),roughnessMapUv:It&&A(D.roughnessMap.channel),anisotropyMapUv:fe&&A(D.anisotropyMap.channel),clearcoatMapUv:Ze&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:De&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(D.sheenRoughnessMap.channel),specularMapUv:Ie&&A(D.specularMap.channel),specularColorMapUv:Ne&&A(D.specularColorMap.channel),specularIntensityMapUv:ut&&A(D.specularIntensityMap.channel),transmissionMapUv:q&&A(D.transmissionMap.channel),thicknessMapUv:Le&&A(D.thicknessMap.channel),alphaMapUv:Fe&&A(D.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(tn||Ye),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ue.attributes.uv&&(mt||Fe),fog:!!oe,useFog:D.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Re,skinning:W.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:mt&&D.map.isVideoTexture===!0&&Ct.getTransfer(D.map.colorSpace)===Vt,decodeVideoTextureEmissive:Zt&&D.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(D.emissiveMap.colorSpace)===Vt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===_a,flipSided:D.side===Kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ce&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&D.extensions.multiDraw===!0||Ve)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function _(D){const U=[];if(D.shaderID?U.push(D.shaderID):(U.push(D.customVertexShaderID),U.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)U.push(V),U.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(T(U,D),N(U,D),U.push(r.outputColorSpace)),U.push(D.customProgramCacheKey),U.join()}function T(D,U){D.push(U.precision),D.push(U.outputColorSpace),D.push(U.envMapMode),D.push(U.envMapCubeUVHeight),D.push(U.mapUv),D.push(U.alphaMapUv),D.push(U.lightMapUv),D.push(U.aoMapUv),D.push(U.bumpMapUv),D.push(U.normalMapUv),D.push(U.displacementMapUv),D.push(U.emissiveMapUv),D.push(U.metalnessMapUv),D.push(U.roughnessMapUv),D.push(U.anisotropyMapUv),D.push(U.clearcoatMapUv),D.push(U.clearcoatNormalMapUv),D.push(U.clearcoatRoughnessMapUv),D.push(U.iridescenceMapUv),D.push(U.iridescenceThicknessMapUv),D.push(U.sheenColorMapUv),D.push(U.sheenRoughnessMapUv),D.push(U.specularMapUv),D.push(U.specularColorMapUv),D.push(U.specularIntensityMapUv),D.push(U.transmissionMapUv),D.push(U.thicknessMapUv),D.push(U.combine),D.push(U.fogExp2),D.push(U.sizeAttenuation),D.push(U.morphTargetsCount),D.push(U.morphAttributeCount),D.push(U.numDirLights),D.push(U.numPointLights),D.push(U.numSpotLights),D.push(U.numSpotLightMaps),D.push(U.numHemiLights),D.push(U.numRectAreaLights),D.push(U.numDirLightShadows),D.push(U.numPointLightShadows),D.push(U.numSpotLightShadows),D.push(U.numSpotLightShadowsWithMaps),D.push(U.numLightProbes),D.push(U.shadowMapType),D.push(U.toneMapping),D.push(U.numClippingPlanes),D.push(U.numClipIntersection),D.push(U.depthPacking)}function N(D,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),D.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),D.push(d.mask)}function R(D){const U=E[D.type];let V;if(U){const ie=Bi[U];V=YM.clone(ie.uniforms)}else V=D.uniforms;return V}function L(D,U){let V=v.get(U);return V!==void 0?++V.usedTimes:(V=new DA(r,U,D,c),g.push(V),v.set(U,V)),V}function B(D){if(--D.usedTimes===0){const U=g.indexOf(D);g[U]=g[g.length-1],g.pop(),v.delete(D.cacheKey),D.destroy()}}function I(D){m.remove(D)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:R,acquireProgram:L,releaseProgram:B,releaseShaderCache:I,programs:g,dispose:Z}}function PA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function IA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function u_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function f_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(v,x,S,E,A,y){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:A,group:y},r[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=A,_.group=y),e++,_}function d(v,x,S,E,A,y){const _=f(v,x,S,E,A,y);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(v,x,S,E,A,y){const _=f(v,x,S,E,A,y);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||IA),s.length>1&&s.sort(x||u_),l.length>1&&l.sort(x||u_)}function g(){for(let v=e,x=r.length;v<x;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function FA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new f_,r.set(s,[f])):l>=c.length?(f=new f_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function BA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new pt};break;case"SpotLight":i={position:new te,direction:new te,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":i={color:new pt,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=i,i}}}function zA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let HA=0;function GA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function VA(r){const e=new BA,i=zA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new te);const l=new te,c=new $t,f=new $t;function d(p){let g=0,v=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,E=0,A=0,y=0,_=0,T=0,N=0,R=0,L=0,B=0,I=0;p.sort(GA);for(let D=0,U=p.length;D<U;D++){const V=p[D],ie=V.color,W=V.intensity,oe=V.distance;let ue=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Wr?ue=V.shadow.map.texture:ue=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=ie.r*W,v+=ie.g*W,x+=ie.b*W;else if(V.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(V.sh.coefficients[F],W);I++}else if(V.isDirectionalLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const z=V.shadow,J=i.get(V);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,s.directionalShadow[S]=J,s.directionalShadowMap[S]=ue,s.directionalShadowMatrix[S]=V.shadow.matrix,T++}s.directional[S]=F,S++}else if(V.isSpotLight){const F=e.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(ie).multiplyScalar(W),F.distance=oe,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,s.spot[A]=F;const z=V.shadow;if(V.map&&(s.spotLightMap[L]=V.map,L++,z.updateMatrices(V),V.castShadow&&B++),s.spotLightMatrix[A]=z.matrix,V.castShadow){const J=i.get(V);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,s.spotShadow[A]=J,s.spotShadowMap[A]=ue,R++}A++}else if(V.isRectAreaLight){const F=e.get(V);F.color.copy(ie).multiplyScalar(W),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=F,y++}else if(V.isPointLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const z=V.shadow,J=i.get(V);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,J.shadowCameraNear=z.camera.near,J.shadowCameraFar=z.camera.far,s.pointShadow[E]=J,s.pointShadowMap[E]=ue,s.pointShadowMatrix[E]=V.shadow.matrix,N++}s.point[E]=F,E++}else if(V.isHemisphereLight){const F=e.get(V);F.skyColor.copy(V.color).multiplyScalar(W),F.groundColor.copy(V.groundColor).multiplyScalar(W),s.hemi[_]=F,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const Z=s.hash;(Z.directionalLength!==S||Z.pointLength!==E||Z.spotLength!==A||Z.rectAreaLength!==y||Z.hemiLength!==_||Z.numDirectionalShadows!==T||Z.numPointShadows!==N||Z.numSpotShadows!==R||Z.numSpotMaps!==L||Z.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=y,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=R+L-B,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=I,Z.directionalLength=S,Z.pointLength=E,Z.spotLength=A,Z.rectAreaLength=y,Z.hemiLength=_,Z.numDirectionalShadows=T,Z.numPointShadows=N,Z.numSpotShadows=R,Z.numSpotMaps=L,Z.numLightProbes=I,s.version=HA++)}function m(p,g){let v=0,x=0,S=0,E=0,A=0;const y=g.matrixWorldInverse;for(let _=0,T=p.length;_<T;_++){const N=p[_];if(N.isDirectionalLight){const R=s.directional[v];R.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),v++}else if(N.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),S++}else if(N.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),f.identity(),c.copy(N.matrixWorld),c.premultiply(y),f.extractRotation(c),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const R=s.point[x];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const R=s.hemi[A];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:s}}function h_(r){const e=new VA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function kA(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new h_(r),e.set(l,[d])):c>=f.length?(d=new h_(r),f.push(d)):d=f[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const XA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qA=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],jA=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],d_=new $t,Jo=new te,id=new te;function YA(r,e,i){let s=new bp;const l=new Rt,c=new Rt,f=new sn,d=new rb,m=new ob,p={},g=i.maxTextureSize,v={[ls]:Kn,[Kn]:ls,[_a]:_a},x=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:XA,fragmentShader:WA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ta;E.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Hn(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let _=this.type;this.render=function(B,I,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===Qy&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=$c);const D=r.getRenderTarget(),U=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),ie=r.state;ie.setBlending(Sa),ie.buffers.depth.getReversed()===!0?ie.buffers.color.setClear(0,0,0,0):ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const W=_!==this.type;W&&I.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(ue=>ue.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,ue=B.length;oe<ue;oe++){const F=B[oe],z=F.shadow;if(z===void 0){ot("WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const J=z.getFrameExtents();if(l.multiply(J),c.copy(z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/J.x),l.x=c.x*J.x,z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/J.y),l.y=c.y*J.y,z.mapSize.y=c.y)),z.map===null||W===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===sl){if(F.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ki(l.x,l.y,{format:Wr,type:ba,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),z.map.texture.name=F.name+".shadowMap",z.map.depthTexture=new ul(l.x,l.y,Hi),z.map.depthTexture.name=F.name+".shadowMapDepth",z.map.depthTexture.format=Ea,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Nn,z.map.depthTexture.magFilter=Nn}else{F.isPointLight?(z.map=new px(l.x),z.map.depthTexture=new ab(l.x,Wi)):(z.map=new ki(l.x,l.y),z.map.depthTexture=new ul(l.x,l.y,Wi)),z.map.depthTexture.name=F.name+".shadowMap",z.map.depthTexture.format=Ea;const Se=r.state.buffers.depth.getReversed();this.type===$c?(z.map.depthTexture.compareFunction=Se?_p:vp,z.map.depthTexture.minFilter=Fn,z.map.depthTexture.magFilter=Fn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Nn,z.map.depthTexture.magFilter=Nn)}z.camera.updateProjectionMatrix()}const Me=z.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<Me;Se++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,Se),r.clear();else{Se===0&&(r.setRenderTarget(z.map),r.clear());const O=z.getViewport(Se);f.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),ie.viewport(f)}if(F.isPointLight){const O=z.camera,ne=z.matrix,ve=F.distance||O.far;ve!==O.far&&(O.far=ve,O.updateProjectionMatrix()),Jo.setFromMatrixPosition(F.matrixWorld),O.position.copy(Jo),id.copy(O.position),id.add(qA[Se]),O.up.copy(jA[Se]),O.lookAt(id),O.updateMatrixWorld(),ne.makeTranslation(-Jo.x,-Jo.y,-Jo.z),d_.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),z._frustum.setFromProjectionMatrix(d_,O.coordinateSystem,O.reversedDepth)}else z.updateMatrices(F);s=z.getFrustum(),R(I,Z,z.camera,F,this.type)}z.isPointLightShadow!==!0&&this.type===sl&&T(z,Z),z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(D,U,V)};function T(B,I){const Z=e.update(A);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ki(l.x,l.y,{format:Wr,type:ba})),x.uniforms.shadow_pass.value=B.map.depthTexture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(I,null,Z,x,A,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(I,null,Z,S,A,null)}function N(B,I,Z,D){let U=null;const V=Z.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)U=V;else if(U=Z.isPointLight===!0?m:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ie=U.uuid,W=I.uuid;let oe=p[ie];oe===void 0&&(oe={},p[ie]=oe);let ue=oe[W];ue===void 0&&(ue=U.clone(),oe[W]=ue,I.addEventListener("dispose",L)),U=ue}if(U.visible=I.visible,U.wireframe=I.wireframe,D===sl?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:v[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,Z.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const ie=r.properties.get(U);ie.light=Z}return U}function R(B,I,Z,D,U){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&U===sl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,B.matrixWorld);const W=e.update(B),oe=B.material;if(Array.isArray(oe)){const ue=W.groups;for(let F=0,z=ue.length;F<z;F++){const J=ue[F],Me=oe[J.materialIndex];if(Me&&Me.visible){const Se=N(B,Me,D,U);B.onBeforeShadow(r,B,I,Z,W,Se,J),r.renderBufferDirect(Z,null,W,Se,B,J),B.onAfterShadow(r,B,I,Z,W,Se,J)}}}else if(oe.visible){const ue=N(B,oe,D,U);B.onBeforeShadow(r,B,I,Z,W,ue,null),r.renderBufferDirect(Z,null,W,ue,B,null),B.onAfterShadow(r,B,I,Z,W,ue,null)}}const ie=B.children;for(let W=0,oe=ie.length;W<oe;W++)R(ie[W],I,Z,D,U)}function L(B){B.target.removeEventListener("dispose",L);for(const Z in p){const D=p[Z],U=B.target.uuid;U in D&&(D[U].dispose(),delete D[U])}}}const KA={[dd]:pd,[md]:_d,[gd]:xd,[kr]:vd,[pd]:dd,[_d]:md,[xd]:gd,[vd]:kr};function ZA(r,e){function i(){let q=!1;const Le=new sn;let Ae=null;const Fe=new sn(0,0,0,0);return{setMask:function(be){Ae!==be&&!q&&(r.colorMask(be,be,be,be),Ae=be)},setLocked:function(be){q=be},setClear:function(be,xe,Ce,at,Bt){Bt===!0&&(be*=at,xe*=at,Ce*=at),Le.set(be,xe,Ce,at),Fe.equals(Le)===!1&&(r.clearColor(be,xe,Ce,at),Fe.copy(Le))},reset:function(){q=!1,Ae=null,Fe.set(-1,0,0,0)}}}function s(){let q=!1,Le=!1,Ae=null,Fe=null,be=null;return{setReversed:function(xe){if(Le!==xe){const Ce=e.get("EXT_clip_control");xe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Le=xe;const at=be;be=null,this.setClear(at)}},getReversed:function(){return Le},setTest:function(xe){xe?he(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(xe){Ae!==xe&&!q&&(r.depthMask(xe),Ae=xe)},setFunc:function(xe){if(Le&&(xe=KA[xe]),Fe!==xe){switch(xe){case dd:r.depthFunc(r.NEVER);break;case pd:r.depthFunc(r.ALWAYS);break;case md:r.depthFunc(r.LESS);break;case kr:r.depthFunc(r.LEQUAL);break;case gd:r.depthFunc(r.EQUAL);break;case vd:r.depthFunc(r.GEQUAL);break;case _d:r.depthFunc(r.GREATER);break;case xd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=xe}},setLocked:function(xe){q=xe},setClear:function(xe){be!==xe&&(Le&&(xe=1-xe),r.clearDepth(xe),be=xe)},reset:function(){q=!1,Ae=null,Fe=null,be=null,Le=!1}}}function l(){let q=!1,Le=null,Ae=null,Fe=null,be=null,xe=null,Ce=null,at=null,Bt=null;return{setTest:function(At){q||(At?he(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(At){Le!==At&&!q&&(r.stencilMask(At),Le=At)},setFunc:function(At,Ln,xi){(Ae!==At||Fe!==Ln||be!==xi)&&(r.stencilFunc(At,Ln,xi),Ae=At,Fe=Ln,be=xi)},setOp:function(At,Ln,xi){(xe!==At||Ce!==Ln||at!==xi)&&(r.stencilOp(At,Ln,xi),xe=At,Ce=Ln,at=xi)},setLocked:function(At){q=At},setClear:function(At){Bt!==At&&(r.clearStencil(At),Bt=At)},reset:function(){q=!1,Le=null,Ae=null,Fe=null,be=null,xe=null,Ce=null,at=null,Bt=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,S=[],E=null,A=!1,y=null,_=null,T=null,N=null,R=null,L=null,B=null,I=new pt(0,0,0),Z=0,D=!1,U=null,V=null,ie=null,W=null,oe=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,z=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=z>=1):J.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=z>=2);let Me=null,Se={};const O=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),ve=new sn().fromArray(O),we=new sn().fromArray(ne);function ze(q,Le,Ae,Fe){const be=new Uint8Array(4),xe=r.createTexture();r.bindTexture(q,xe),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<Ae;Ce++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(Le+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return xe}const ae={};ae[r.TEXTURE_2D]=ze(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),he(r.DEPTH_TEST),f.setFunc(kr),lt(!1),tn(mv),he(r.CULL_FACE),gt(Sa);function he(q){g[q]!==!0&&(r.enable(q),g[q]=!0)}function Re(q){g[q]!==!1&&(r.disable(q),g[q]=!1)}function Ge(q,Le){return v[q]!==Le?(r.bindFramebuffer(q,Le),v[q]=Le,q===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Le),q===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ve(q,Le){let Ae=S,Fe=!1;if(q){Ae=x.get(Le),Ae===void 0&&(Ae=[],x.set(Le,Ae));const be=q.textures;if(Ae.length!==be.length||Ae[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,Ce=be.length;xe<Ce;xe++)Ae[xe]=r.COLOR_ATTACHMENT0+xe;Ae.length=be.length,Fe=!0}}else Ae[0]!==r.BACK&&(Ae[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(Ae)}function mt(q){return E!==q?(r.useProgram(q),E=q,!0):!1}const en={[Fs]:r.FUNC_ADD,[$y]:r.FUNC_SUBTRACT,[eM]:r.FUNC_REVERSE_SUBTRACT};en[tM]=r.MIN,en[nM]=r.MAX;const St={[iM]:r.ZERO,[aM]:r.ONE,[sM]:r.SRC_COLOR,[fd]:r.SRC_ALPHA,[fM]:r.SRC_ALPHA_SATURATE,[cM]:r.DST_COLOR,[oM]:r.DST_ALPHA,[rM]:r.ONE_MINUS_SRC_COLOR,[hd]:r.ONE_MINUS_SRC_ALPHA,[uM]:r.ONE_MINUS_DST_COLOR,[lM]:r.ONE_MINUS_DST_ALPHA,[hM]:r.CONSTANT_COLOR,[dM]:r.ONE_MINUS_CONSTANT_COLOR,[pM]:r.CONSTANT_ALPHA,[mM]:r.ONE_MINUS_CONSTANT_ALPHA};function gt(q,Le,Ae,Fe,be,xe,Ce,at,Bt,At){if(q===Sa){A===!0&&(Re(r.BLEND),A=!1);return}if(A===!1&&(he(r.BLEND),A=!0),q!==Jy){if(q!==y||At!==D){if((_!==Fs||R!==Fs)&&(r.blendEquation(r.FUNC_ADD),_=Fs,R=Fs),At)switch(q){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gv:r.blendFunc(r.ONE,r.ONE);break;case vv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _v:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",q);break}else switch(q){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vv:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _v:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",q);break}T=null,N=null,L=null,B=null,I.set(0,0,0),Z=0,y=q,D=At}return}be=be||Le,xe=xe||Ae,Ce=Ce||Fe,(Le!==_||be!==R)&&(r.blendEquationSeparate(en[Le],en[be]),_=Le,R=be),(Ae!==T||Fe!==N||xe!==L||Ce!==B)&&(r.blendFuncSeparate(St[Ae],St[Fe],St[xe],St[Ce]),T=Ae,N=Fe,L=xe,B=Ce),(at.equals(I)===!1||Bt!==Z)&&(r.blendColor(at.r,at.g,at.b,Bt),I.copy(at),Z=Bt),y=q,D=!1}function Ut(q,Le){q.side===_a?Re(r.CULL_FACE):he(r.CULL_FACE);let Ae=q.side===Kn;Le&&(Ae=!Ae),lt(Ae),q.blending===Gr&&q.transparent===!1?gt(Sa):gt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Fe=q.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Zt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(q){U!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),U=q)}function tn(q){q!==Ky?(he(r.CULL_FACE),q!==V&&(q===mv?r.cullFace(r.BACK):q===Zy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),V=q}function k(q){q!==ie&&(F&&r.lineWidth(q),ie=q)}function Zt(q,Le,Ae){q?(he(r.POLYGON_OFFSET_FILL),(W!==Le||oe!==Ae)&&(r.polygonOffset(Le,Ae),W=Le,oe=Ae)):Re(r.POLYGON_OFFSET_FILL)}function Tt(q){q?he(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function It(q){q===void 0&&(q=r.TEXTURE0+ue-1),Me!==q&&(r.activeTexture(q),Me=q)}function Ye(q,Le,Ae){Ae===void 0&&(Me===null?Ae=r.TEXTURE0+ue-1:Ae=Me);let Fe=Se[Ae];Fe===void 0&&(Fe={type:void 0,texture:void 0},Se[Ae]=Fe),(Fe.type!==q||Fe.texture!==Le)&&(Me!==Ae&&(r.activeTexture(Ae),Me=Ae),r.bindTexture(q,Le||ae[q]),Fe.type=q,Fe.texture=Le)}function P(){const q=Se[Me];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function me(){try{r.texSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function ye(){try{r.texSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Ze(){try{r.compressedTexSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function De(){try{r.texStorage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function We(){try{r.texStorage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function nt(){try{r.texImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Ee(){try{r.texImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function Te(q){ve.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),ve.copy(q))}function Be(q){we.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),we.copy(q))}function Ie(q,Le){let Ae=p.get(Le);Ae===void 0&&(Ae=new WeakMap,p.set(Le,Ae));let Fe=Ae.get(q);Fe===void 0&&(Fe=r.getUniformBlockIndex(Le,q.name),Ae.set(q,Fe))}function Ne(q,Le){const Fe=p.get(Le).get(q);m.get(Le)!==Fe&&(r.uniformBlockBinding(Le,Fe,q.__bindingPointIndex),m.set(Le,Fe))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Me=null,Se={},v={},x=new WeakMap,S=[],E=null,A=!1,y=null,_=null,T=null,N=null,R=null,L=null,B=null,I=new pt(0,0,0),Z=0,D=!1,U=null,V=null,ie=null,W=null,oe=null,ve.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:he,disable:Re,bindFramebuffer:Ge,drawBuffers:Ve,useProgram:mt,setBlending:gt,setMaterial:Ut,setFlipSided:lt,setCullFace:tn,setLineWidth:k,setPolygonOffset:Zt,setScissorTest:Tt,activeTexture:It,bindTexture:Ye,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:nt,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:Ne,texStorage2D:De,texStorage3D:We,texSubImage2D:me,texSubImage3D:ye,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ze,scissor:Te,viewport:Be,reset:ut}}function QA(r,e,i,s,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Rt,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,b){return S?new OffscreenCanvas(P,b):cu("canvas")}function A(P,b,j){let me=1;const ye=Ye(P);if((ye.width>j||ye.height>j)&&(me=j/Math.max(ye.width,ye.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(me*ye.width),Ze=Math.floor(me*ye.height);v===void 0&&(v=E(fe,Ze));const De=b?E(fe,Ze):v;return De.width=fe,De.height=Ze,De.getContext("2d").drawImage(P,0,0,fe,Ze),ot("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+fe+"x"+Ze+")."),De}else return"data"in P&&ot("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),P;return P}function y(P){return P.generateMipmaps}function _(P){r.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(P,b,j,me,ye=!1){if(P!==null){if(r[P]!==void 0)return r[P];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=b;if(b===r.RED&&(j===r.FLOAT&&(fe=r.R32F),j===r.HALF_FLOAT&&(fe=r.R16F),j===r.UNSIGNED_BYTE&&(fe=r.R8)),b===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(fe=r.R8UI),j===r.UNSIGNED_SHORT&&(fe=r.R16UI),j===r.UNSIGNED_INT&&(fe=r.R32UI),j===r.BYTE&&(fe=r.R8I),j===r.SHORT&&(fe=r.R16I),j===r.INT&&(fe=r.R32I)),b===r.RG&&(j===r.FLOAT&&(fe=r.RG32F),j===r.HALF_FLOAT&&(fe=r.RG16F),j===r.UNSIGNED_BYTE&&(fe=r.RG8)),b===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(fe=r.RG8UI),j===r.UNSIGNED_SHORT&&(fe=r.RG16UI),j===r.UNSIGNED_INT&&(fe=r.RG32UI),j===r.BYTE&&(fe=r.RG8I),j===r.SHORT&&(fe=r.RG16I),j===r.INT&&(fe=r.RG32I)),b===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),j===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),j===r.UNSIGNED_INT&&(fe=r.RGB32UI),j===r.BYTE&&(fe=r.RGB8I),j===r.SHORT&&(fe=r.RGB16I),j===r.INT&&(fe=r.RGB32I)),b===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),j===r.UNSIGNED_INT&&(fe=r.RGBA32UI),j===r.BYTE&&(fe=r.RGBA8I),j===r.SHORT&&(fe=r.RGBA16I),j===r.INT&&(fe=r.RGBA32I)),b===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),b===r.RGBA){const Ze=ye?ou:Ct.getTransfer(me);j===r.FLOAT&&(fe=r.RGBA32F),j===r.HALF_FLOAT&&(fe=r.RGBA16F),j===r.UNSIGNED_BYTE&&(fe=Ze===Vt?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(P,b){let j;return P?b===null||b===Wi||b===ll?j=r.DEPTH24_STENCIL8:b===Hi?j=r.DEPTH32F_STENCIL8:b===ol&&(j=r.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wi||b===ll?j=r.DEPTH_COMPONENT24:b===Hi?j=r.DEPTH_COMPONENT32F:b===ol&&(j=r.DEPTH_COMPONENT16),j}function L(P,b){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Nn&&P.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function B(P){const b=P.target;b.removeEventListener("dispose",B),Z(b),b.isVideoTexture&&g.delete(b)}function I(P){const b=P.target;b.removeEventListener("dispose",I),U(b)}function Z(P){const b=s.get(P);if(b.__webglInit===void 0)return;const j=P.source,me=x.get(j);if(me){const ye=me[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&D(P),Object.keys(me).length===0&&x.delete(j)}s.remove(P)}function D(P){const b=s.get(P);r.deleteTexture(b.__webglTexture);const j=P.source,me=x.get(j);delete me[b.__cacheKey],f.memory.textures--}function U(P){const b=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(b.__webglFramebuffer[me]))for(let ye=0;ye<b.__webglFramebuffer[me].length;ye++)r.deleteFramebuffer(b.__webglFramebuffer[me][ye]);else r.deleteFramebuffer(b.__webglFramebuffer[me]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[me])}else{if(Array.isArray(b.__webglFramebuffer))for(let me=0;me<b.__webglFramebuffer.length;me++)r.deleteFramebuffer(b.__webglFramebuffer[me]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let me=0;me<b.__webglColorRenderbuffer.length;me++)b.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[me]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=P.textures;for(let me=0,ye=j.length;me<ye;me++){const fe=s.get(j[me]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),f.memory.textures--),s.remove(j[me])}s.remove(P)}let V=0;function ie(){V=0}function W(){const P=V;return P>=l.maxTextures&&ot("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),V+=1,P}function oe(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ue(P,b){const j=s.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&j.__version!==P.version){const me=P.image;if(me===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(j,P,b);return}}else P.isExternalTexture&&(j.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function F(P,b){const j=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){ae(j,P,b);return}else P.isExternalTexture&&(j.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function z(P,b){const j=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){ae(j,P,b);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function J(P,b){const j=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&j.__version!==P.version){he(j,P,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}const Me={[Md]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[bd]:r.MIRRORED_REPEAT},Se={[Nn]:r.NEAREST,[_M]:r.NEAREST_MIPMAP_NEAREST,[Cc]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[Eh]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},O={[yM]:r.NEVER,[AM]:r.ALWAYS,[MM]:r.LESS,[vp]:r.LEQUAL,[bM]:r.EQUAL,[_p]:r.GEQUAL,[EM]:r.GREATER,[TM]:r.NOTEQUAL};function ne(P,b){if(b.type===Hi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===Eh||b.magFilter===Cc||b.magFilter===zs||b.minFilter===Fn||b.minFilter===Eh||b.minFilter===Cc||b.minFilter===zs)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Me[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Me[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Me[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Se[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==Cc&&b.minFilter!==zs||b.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ve(P,b){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",B));const me=b.source;let ye=x.get(me);ye===void 0&&(ye={},x.set(me,ye));const fe=oe(b);if(fe!==P.__cacheKey){ye[fe]===void 0&&(ye[fe]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,j=!0),ye[fe].usedTimes++;const Ze=ye[P.__cacheKey];Ze!==void 0&&(ye[P.__cacheKey].usedTimes--,Ze.usedTimes===0&&D(b)),P.__cacheKey=fe,P.__webglTexture=ye[fe].texture}return j}function we(P,b,j){return Math.floor(Math.floor(P/j)/b)}function ze(P,b,j,me){const fe=P.updateRanges;if(fe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,j,me,b.data);else{fe.sort((Ee,Te)=>Ee.start-Te.start);let Ze=0;for(let Ee=1;Ee<fe.length;Ee++){const Te=fe[Ze],Be=fe[Ee],Ie=Te.start+Te.count,Ne=we(Be.start,b.width,4),ut=we(Te.start,b.width,4);Be.start<=Ie+1&&Ne===ut&&we(Be.start+Be.count-1,b.width,4)===Ne?Te.count=Math.max(Te.count,Be.start+Be.count-Te.start):(++Ze,fe[Ze]=Be)}fe.length=Ze+1;const De=r.getParameter(r.UNPACK_ROW_LENGTH),We=r.getParameter(r.UNPACK_SKIP_PIXELS),nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,Te=fe.length;Ee<Te;Ee++){const Be=fe[Ee],Ie=Math.floor(Be.start/4),Ne=Math.ceil(Be.count/4),ut=Ie%b.width,q=Math.floor(Ie/b.width),Le=Ne,Ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,ut,q,Le,Ae,j,me,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,De),r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,nt)}}function ae(P,b,j){let me=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(me=r.TEXTURE_3D);const ye=ve(P,b),fe=b.source;i.bindTexture(me,P.__webglTexture,r.TEXTURE0+j);const Ze=s.get(fe);if(fe.version!==Ze.__version||ye===!0){i.activeTexture(r.TEXTURE0+j);const De=Ct.getPrimaries(Ct.workingColorSpace),We=b.colorSpace===ss?null:Ct.getPrimaries(b.colorSpace),nt=b.colorSpace===ss||De===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ee=A(b.image,!1,l.maxTextureSize);Ee=It(b,Ee);const Te=c.convert(b.format,b.colorSpace),Be=c.convert(b.type);let Ie=N(b.internalFormat,Te,Be,b.colorSpace,b.isVideoTexture);ne(me,b);let Ne;const ut=b.mipmaps,q=b.isVideoTexture!==!0,Le=Ze.__version===void 0||ye===!0,Ae=fe.dataReady,Fe=L(b,Ee);if(b.isDepthTexture)Ie=R(b.format===Hs,b.type),Le&&(q?i.texStorage2D(r.TEXTURE_2D,1,Ie,Ee.width,Ee.height):i.texImage2D(r.TEXTURE_2D,0,Ie,Ee.width,Ee.height,0,Te,Be,null));else if(b.isDataTexture)if(ut.length>0){q&&Le&&i.texStorage2D(r.TEXTURE_2D,Fe,Ie,ut[0].width,ut[0].height);for(let be=0,xe=ut.length;be<xe;be++)Ne=ut[be],q?Ae&&i.texSubImage2D(r.TEXTURE_2D,be,0,0,Ne.width,Ne.height,Te,Be,Ne.data):i.texImage2D(r.TEXTURE_2D,be,Ie,Ne.width,Ne.height,0,Te,Be,Ne.data);b.generateMipmaps=!1}else q?(Le&&i.texStorage2D(r.TEXTURE_2D,Fe,Ie,Ee.width,Ee.height),Ae&&ze(b,Ee,Te,Be)):i.texImage2D(r.TEXTURE_2D,0,Ie,Ee.width,Ee.height,0,Te,Be,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Le&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Ie,ut[0].width,ut[0].height,Ee.depth);for(let be=0,xe=ut.length;be<xe;be++)if(Ne=ut[be],b.format!==Ri)if(Te!==null)if(q){if(Ae)if(b.layerUpdates.size>0){const Ce=Xv(Ne.width,Ne.height,b.format,b.type);for(const at of b.layerUpdates){const Bt=Ne.data.subarray(at*Ce/Ne.data.BYTES_PER_ELEMENT,(at+1)*Ce/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,at,Ne.width,Ne.height,1,Te,Bt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,Ne.width,Ne.height,Ee.depth,Te,Ne.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,be,Ie,Ne.width,Ne.height,Ee.depth,0,Ne.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ae&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,Ne.width,Ne.height,Ee.depth,Te,Be,Ne.data):i.texImage3D(r.TEXTURE_2D_ARRAY,be,Ie,Ne.width,Ne.height,Ee.depth,0,Te,Be,Ne.data)}else{q&&Le&&i.texStorage2D(r.TEXTURE_2D,Fe,Ie,ut[0].width,ut[0].height);for(let be=0,xe=ut.length;be<xe;be++)Ne=ut[be],b.format!==Ri?Te!==null?q?Ae&&i.compressedTexSubImage2D(r.TEXTURE_2D,be,0,0,Ne.width,Ne.height,Te,Ne.data):i.compressedTexImage2D(r.TEXTURE_2D,be,Ie,Ne.width,Ne.height,0,Ne.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ae&&i.texSubImage2D(r.TEXTURE_2D,be,0,0,Ne.width,Ne.height,Te,Be,Ne.data):i.texImage2D(r.TEXTURE_2D,be,Ie,Ne.width,Ne.height,0,Te,Be,Ne.data)}else if(b.isDataArrayTexture)if(q){if(Le&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Ie,Ee.width,Ee.height,Ee.depth),Ae)if(b.layerUpdates.size>0){const be=Xv(Ee.width,Ee.height,b.format,b.type);for(const xe of b.layerUpdates){const Ce=Ee.data.subarray(xe*be/Ee.data.BYTES_PER_ELEMENT,(xe+1)*be/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,Ee.width,Ee.height,1,Te,Be,Ce)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,Be,Ee.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,Ee.width,Ee.height,Ee.depth,0,Te,Be,Ee.data);else if(b.isData3DTexture)q?(Le&&i.texStorage3D(r.TEXTURE_3D,Fe,Ie,Ee.width,Ee.height,Ee.depth),Ae&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,Be,Ee.data)):i.texImage3D(r.TEXTURE_3D,0,Ie,Ee.width,Ee.height,Ee.depth,0,Te,Be,Ee.data);else if(b.isFramebufferTexture){if(Le)if(q)i.texStorage2D(r.TEXTURE_2D,Fe,Ie,Ee.width,Ee.height);else{let be=Ee.width,xe=Ee.height;for(let Ce=0;Ce<Fe;Ce++)i.texImage2D(r.TEXTURE_2D,Ce,Ie,be,xe,0,Te,Be,null),be>>=1,xe>>=1}}else if(ut.length>0){if(q&&Le){const be=Ye(ut[0]);i.texStorage2D(r.TEXTURE_2D,Fe,Ie,be.width,be.height)}for(let be=0,xe=ut.length;be<xe;be++)Ne=ut[be],q?Ae&&i.texSubImage2D(r.TEXTURE_2D,be,0,0,Te,Be,Ne):i.texImage2D(r.TEXTURE_2D,be,Ie,Te,Be,Ne);b.generateMipmaps=!1}else if(q){if(Le){const be=Ye(Ee);i.texStorage2D(r.TEXTURE_2D,Fe,Ie,be.width,be.height)}Ae&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,Be,Ee)}else i.texImage2D(r.TEXTURE_2D,0,Ie,Te,Be,Ee);y(b)&&_(me),Ze.__version=fe.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function he(P,b,j){if(b.image.length!==6)return;const me=ve(P,b),ye=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+j);const fe=s.get(ye);if(ye.version!==fe.__version||me===!0){i.activeTexture(r.TEXTURE0+j);const Ze=Ct.getPrimaries(Ct.workingColorSpace),De=b.colorSpace===ss?null:Ct.getPrimaries(b.colorSpace),We=b.colorSpace===ss||Ze===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const nt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let xe=0;xe<6;xe++)!nt&&!Ee?Te[xe]=A(b.image[xe],!0,l.maxCubemapSize):Te[xe]=Ee?b.image[xe].image:b.image[xe],Te[xe]=It(b,Te[xe]);const Be=Te[0],Ie=c.convert(b.format,b.colorSpace),Ne=c.convert(b.type),ut=N(b.internalFormat,Ie,Ne,b.colorSpace),q=b.isVideoTexture!==!0,Le=fe.__version===void 0||me===!0,Ae=ye.dataReady;let Fe=L(b,Be);ne(r.TEXTURE_CUBE_MAP,b);let be;if(nt){q&&Le&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ut,Be.width,Be.height);for(let xe=0;xe<6;xe++){be=Te[xe].mipmaps;for(let Ce=0;Ce<be.length;Ce++){const at=be[Ce];b.format!==Ri?Ie!==null?q?Ae&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,at.width,at.height,Ie,at.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,ut,at.width,at.height,0,at.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,at.width,at.height,Ie,Ne,at.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,ut,at.width,at.height,0,Ie,Ne,at.data)}}}else{if(be=b.mipmaps,q&&Le){be.length>0&&Fe++;const xe=Ye(Te[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ut,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ee){q?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Te[xe].width,Te[xe].height,Ie,Ne,Te[xe].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ut,Te[xe].width,Te[xe].height,0,Ie,Ne,Te[xe].data);for(let Ce=0;Ce<be.length;Ce++){const Bt=be[Ce].image[xe].image;q?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,Bt.width,Bt.height,Ie,Ne,Bt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,ut,Bt.width,Bt.height,0,Ie,Ne,Bt.data)}}else{q?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie,Ne,Te[xe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ut,Ie,Ne,Te[xe]);for(let Ce=0;Ce<be.length;Ce++){const at=be[Ce];q?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,Ie,Ne,at.image[xe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,ut,Ie,Ne,at.image[xe])}}}y(b)&&_(r.TEXTURE_CUBE_MAP),fe.__version=ye.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Re(P,b,j,me,ye,fe){const Ze=c.convert(j.format,j.colorSpace),De=c.convert(j.type),We=N(j.internalFormat,Ze,De,j.colorSpace),nt=s.get(b),Ee=s.get(j);if(Ee.__renderTarget=b,!nt.__hasExternalTextures){const Te=Math.max(1,b.width>>fe),Be=Math.max(1,b.height>>fe);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?i.texImage3D(ye,fe,We,Te,Be,b.depth,0,Ze,De,null):i.texImage2D(ye,fe,We,Te,Be,0,Ze,De,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Zt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ye,Ee.__webglTexture,0,k(b)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ye,Ee.__webglTexture,fe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(P,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const me=b.depthTexture,ye=me&&me.isDepthTexture?me.type:null,fe=R(b.stencilBuffer,ye),Ze=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Zt(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),fe,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),fe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,fe,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ze,r.RENDERBUFFER,P)}else{const me=b.textures;for(let ye=0;ye<me.length;ye++){const fe=me[ye],Ze=c.convert(fe.format,fe.colorSpace),De=c.convert(fe.type),We=N(fe.internalFormat,Ze,De,fe.colorSpace);Zt(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),We,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),We,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,We,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(P,b,j){const me=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=s.get(b.depthTexture);if(ye.__renderTarget=b,(!ye.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),me){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),ye.__webglTexture===void 0){ye.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ye.__webglTexture),ne(r.TEXTURE_CUBE_MAP,b.depthTexture);const nt=c.convert(b.depthTexture.format),Ee=c.convert(b.depthTexture.type);let Te;b.depthTexture.format===Ea?Te=r.DEPTH_COMPONENT24:b.depthTexture.format===Hs&&(Te=r.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Te,b.width,b.height,0,nt,Ee,null)}}else ue(b.depthTexture,0);const fe=ye.__webglTexture,Ze=k(b),De=me?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,We=b.depthTexture.format===Hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ea)Zt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,De,fe,0,Ze):r.framebufferTexture2D(r.FRAMEBUFFER,We,De,fe,0);else if(b.depthTexture.format===Hs)Zt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,De,fe,0,Ze):r.framebufferTexture2D(r.FRAMEBUFFER,We,De,fe,0);else throw new Error("Unknown depthTexture format")}function mt(P){const b=s.get(P),j=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),me){const ye=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,me.removeEventListener("dispose",ye)};me.addEventListener("dispose",ye),b.__depthDisposeCallback=ye}b.__boundDepthTexture=me}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let me=0;me<6;me++)Ve(b.__webglFramebuffer[me],P,me);else{const me=P.texture.mipmaps;me&&me.length>0?Ve(b.__webglFramebuffer[0],P,0):Ve(b.__webglFramebuffer,P,0)}else if(j){b.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[me]),b.__webglDepthbuffer[me]===void 0)b.__webglDepthbuffer[me]=r.createRenderbuffer(),Ge(b.__webglDepthbuffer[me],P,!1);else{const ye=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,fe)}}else{const me=P.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ge(b.__webglDepthbuffer,P,!1);else{const ye=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,fe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function en(P,b,j){const me=s.get(P);b!==void 0&&Re(me.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&mt(P)}function St(P){const b=P.texture,j=s.get(P),me=s.get(b);P.addEventListener("dispose",I);const ye=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Ze=ye.length>1;if(Ze||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=b.version,f.memory.textures++),fe){j.__webglFramebuffer=[];for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[De]=[];for(let We=0;We<b.mipmaps.length;We++)j.__webglFramebuffer[De][We]=r.createFramebuffer()}else j.__webglFramebuffer[De]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let De=0;De<b.mipmaps.length;De++)j.__webglFramebuffer[De]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Ze)for(let De=0,We=ye.length;De<We;De++){const nt=s.get(ye[De]);nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&Zt(P)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let De=0;De<ye.length;De++){const We=ye[De];j.__webglColorRenderbuffer[De]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[De]);const nt=c.convert(We.format,We.colorSpace),Ee=c.convert(We.type),Te=N(We.internalFormat,nt,Ee,We.colorSpace,P.isXRRenderTarget===!0),Be=k(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Te,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,j.__webglColorRenderbuffer[De])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Ge(j.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){i.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ne(r.TEXTURE_CUBE_MAP,b);for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)Re(j.__webglFramebuffer[De][We],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,We);else Re(j.__webglFramebuffer[De],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);y(b)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let De=0,We=ye.length;De<We;De++){const nt=ye[De],Ee=s.get(nt);let Te=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Te,Ee.__webglTexture),ne(Te,nt),Re(j.__webglFramebuffer,P,nt,r.COLOR_ATTACHMENT0+De,Te,0),y(nt)&&_(Te)}i.unbindTexture()}else{let De=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(De=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(De,me.__webglTexture),ne(De,b),b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)Re(j.__webglFramebuffer[We],P,b,r.COLOR_ATTACHMENT0,De,We);else Re(j.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,De,0);y(b)&&_(De),i.unbindTexture()}P.depthBuffer&&mt(P)}function gt(P){const b=P.textures;for(let j=0,me=b.length;j<me;j++){const ye=b[j];if(y(ye)){const fe=T(P),Ze=s.get(ye).__webglTexture;i.bindTexture(fe,Ze),_(fe),i.unbindTexture()}}}const Ut=[],lt=[];function tn(P){if(P.samples>0){if(Zt(P)===!1){const b=P.textures,j=P.width,me=P.height;let ye=r.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ze=s.get(P),De=b.length>1;if(De)for(let nt=0;nt<b.length;nt++)i.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const We=P.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let nt=0;nt<b.length;nt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),De){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ze.__webglColorRenderbuffer[nt]);const Ee=s.get(b[nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,j,me,0,0,j,me,ye,r.NEAREST),m===!0&&(Ut.length=0,lt.length=0,Ut.push(r.COLOR_ATTACHMENT0+nt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ut.push(fe),lt.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ut))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),De)for(let nt=0;nt<b.length;nt++){i.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,Ze.__webglColorRenderbuffer[nt]);const Ee=s.get(b[nt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,Ee,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function k(P){return Math.min(l.maxSamples,P.samples)}function Zt(P){const b=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(P){const b=f.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function It(P,b){const j=P.colorSpace,me=P.format,ye=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==qr&&j!==ss&&(Ct.getTransfer(j)===Vt?(me!==Ri||ye!==ri)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",j)),b}function Ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=ie,this.setTexture2D=ue,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=J,this.rebindTextures=en,this.setupRenderTarget=St,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function JA(r,e){function i(s,l=ss){let c;const f=Ct.getTransfer(l);if(s===ri)return r.UNSIGNED_BYTE;if(s===hp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===dp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===J_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===$_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Z_)return r.BYTE;if(s===Q_)return r.SHORT;if(s===ol)return r.UNSIGNED_SHORT;if(s===fp)return r.INT;if(s===Wi)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===ba)return r.HALF_FLOAT;if(s===ex)return r.ALPHA;if(s===tx)return r.RGB;if(s===Ri)return r.RGBA;if(s===Ea)return r.DEPTH_COMPONENT;if(s===Hs)return r.DEPTH_STENCIL;if(s===nx)return r.RED;if(s===pp)return r.RED_INTEGER;if(s===Wr)return r.RG;if(s===mp)return r.RG_INTEGER;if(s===gp)return r.RGBA_INTEGER;if(s===eu||s===tu||s===nu||s===iu)if(f===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===eu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===eu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ed||s===Td||s===Ad||s===wd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ed)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Td)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ad)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cd||s===Rd||s===Dd||s===Nd||s===Ud||s===Ld||s===Od)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Cd||s===Rd)return f===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Dd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Nd)return c.COMPRESSED_R11_EAC;if(s===Ud)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ld)return c.COMPRESSED_RG11_EAC;if(s===Od)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Pd||s===Id||s===Fd||s===Bd||s===zd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===qd||s===jd||s===Yd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Pd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Id)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===kd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===jd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yd)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kd||s===Zd||s===Qd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Kd)return f===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jd||s===$d||s===ep||s===tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Jd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===$d)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ep)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ll?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const $A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ew=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new mx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ji({vertexShader:$A,fragmentShader:ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Hn(new ml(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nw extends Kr{constructor(e,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,S=null,E=null;const A=typeof XRWebGLBinding<"u",y=new tw,_={},T=i.getContextAttributes();let N=null,R=null;const L=[],B=[],I=new Rt;let Z=null;const D=new si;D.viewport=new sn;const U=new si;U.viewport=new sn;const V=[D,U],ie=new fb;let W=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let he=L[ae];return he===void 0&&(he=new jh,L[ae]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ae){let he=L[ae];return he===void 0&&(he=new jh,L[ae]=he),he.getGripSpace()},this.getHand=function(ae){let he=L[ae];return he===void 0&&(he=new jh,L[ae]=he),he.getHandSpace()};function ue(ae){const he=B.indexOf(ae.inputSource);if(he===-1)return;const Re=L[he];Re!==void 0&&(Re.update(ae.inputSource,ae.frame,p||f),Re.dispatchEvent({type:ae.type,data:ae.inputSource}))}function F(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",z);for(let ae=0;ae<L.length;ae++){const he=B[ae];he!==null&&(B[ae]=null,L[ae].disconnect(he))}W=null,oe=null,y.reset();for(const ae in _)delete _[ae];e.setRenderTarget(N),S=null,x=null,v=null,l=null,R=null,ze.stop(),s.isPresenting=!1,e.setPixelRatio(Z),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,s.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,s.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",F),l.addEventListener("inputsourceschange",z),T.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(I),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ge=null,Ve=null;T.depth&&(Ve=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=T.stencil?Hs:Ea,Ge=T.stencil?ll:Wi);const mt={colorFormat:i.RGBA8,depthFormat:Ve,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(mt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),R=new ki(x.textureWidth,x.textureHeight,{format:Ri,type:ri,depthTexture:new ul(x.textureWidth,x.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Re={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new ki(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),ze.setContext(l),ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(ae){for(let he=0;he<ae.removed.length;he++){const Re=ae.removed[he],Ge=B.indexOf(Re);Ge>=0&&(B[Ge]=null,L[Ge].disconnect(Re))}for(let he=0;he<ae.added.length;he++){const Re=ae.added[he];let Ge=B.indexOf(Re);if(Ge===-1){for(let mt=0;mt<L.length;mt++)if(mt>=B.length){B.push(Re),Ge=mt;break}else if(B[mt]===null){B[mt]=Re,Ge=mt;break}if(Ge===-1)break}const Ve=L[Ge];Ve&&Ve.connect(Re)}}const J=new te,Me=new te;function Se(ae,he,Re){J.setFromMatrixPosition(he.matrixWorld),Me.setFromMatrixPosition(Re.matrixWorld);const Ge=J.distanceTo(Me),Ve=he.projectionMatrix.elements,mt=Re.projectionMatrix.elements,en=Ve[14]/(Ve[10]-1),St=Ve[14]/(Ve[10]+1),gt=(Ve[9]+1)/Ve[5],Ut=(Ve[9]-1)/Ve[5],lt=(Ve[8]-1)/Ve[0],tn=(mt[8]+1)/mt[0],k=en*lt,Zt=en*tn,Tt=Ge/(-lt+tn),It=Tt*-lt;if(he.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(It),ae.translateZ(Tt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ve[10]===-1)ae.projectionMatrix.copy(he.projectionMatrix),ae.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ye=en+Tt,P=St+Tt,b=k-It,j=Zt+(Ge-It),me=gt*St/P*Ye,ye=Ut*St/P*Ye;ae.projectionMatrix.makePerspective(b,j,me,ye,Ye,P),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function O(ae,he){he===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(he.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let he=ae.near,Re=ae.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(Re=y.depthFar)),ie.near=U.near=D.near=he,ie.far=U.far=D.far=Re,(W!==ie.near||oe!==ie.far)&&(l.updateRenderState({depthNear:ie.near,depthFar:ie.far}),W=ie.near,oe=ie.far),ie.layers.mask=ae.layers.mask|6,D.layers.mask=ie.layers.mask&3,U.layers.mask=ie.layers.mask&5;const Ge=ae.parent,Ve=ie.cameras;O(ie,Ge);for(let mt=0;mt<Ve.length;mt++)O(Ve[mt],Ge);Ve.length===2?Se(ie,D,U):ie.projectionMatrix.copy(D.projectionMatrix),ne(ae,ie,Ge)};function ne(ae,he,Re){Re===null?ae.matrix.copy(he.matrixWorld):(ae.matrix.copy(Re.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(he.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(he.projectionMatrix),ae.projectionMatrixInverse.copy(he.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=np*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(ae){m=ae,x!==null&&(x.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ie)},this.getCameraTexture=function(ae){return _[ae]};let ve=null;function we(ae,he){if(g=he.getViewerPose(p||f),E=he,g!==null){const Re=g.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let Ge=!1;Re.length!==ie.cameras.length&&(ie.cameras.length=0,Ge=!0);for(let St=0;St<Re.length;St++){const gt=Re[St];let Ut=null;if(S!==null)Ut=S.getViewport(gt);else{const tn=v.getViewSubImage(x,gt);Ut=tn.viewport,St===0&&(e.setRenderTargetTextures(R,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(R))}let lt=V[St];lt===void 0&&(lt=new si,lt.layers.enable(St),lt.viewport=new sn,V[St]=lt),lt.matrix.fromArray(gt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(gt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),St===0&&(ie.matrix.copy(lt.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),Ge===!0&&ie.cameras.push(lt)}const Ve=l.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=s.getBinding();const St=v.getDepthInformation(Re[0]);St&&St.isValid&&St.texture&&y.init(St,l.renderState)}if(Ve&&Ve.includes("camera-access")&&A){e.state.unbindTexture(),v=s.getBinding();for(let St=0;St<Re.length;St++){const gt=Re[St].camera;if(gt){let Ut=_[gt];Ut||(Ut=new mx,_[gt]=Ut);const lt=v.getCameraImage(gt);Ut.sourceTexture=lt}}}}for(let Re=0;Re<L.length;Re++){const Ge=B[Re],Ve=L[Re];Ge!==null&&Ve!==void 0&&Ve.update(Ge,he,p||f)}ve&&ve(ae,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const ze=new vx;ze.setAnimationLoop(we),this.setAnimationLoop=function(ae){ve=ae},this.dispose=function(){}}}const Us=new qi,iw=new $t;function aw(r,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,fx(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,T,N,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),v(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,R)):_.isMeshMatcapMaterial?(c(y,_),E(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),A(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,T,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Kn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Kn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const T=e.get(_),N=T.envMap,R=T.envMapRotation;N&&(y.envMap.value=N,Us.copy(R),Us.x*=-1,Us.y*=-1,Us.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),y.envMapRotation.value.setFromMatrix4(iw.makeRotationFromEuler(Us)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,T,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*T,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,T){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Kn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const T=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(T.matrixWorld),y.nearDistance.value=T.shadow.camera.near,y.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function sw(r,e,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(T,N){const R=N.program;s.uniformBlockBinding(T,R)}function p(T,N){let R=l[T.id];R===void 0&&(E(T),R=g(T),l[T.id]=R,T.addEventListener("dispose",y));const L=N.program;s.updateUBOMapping(T,L);const B=e.render.frame;c[T.id]!==B&&(x(T),c[T.id]=B)}function g(T){const N=v();T.__bindingPointIndex=N;const R=r.createBuffer(),L=T.__size,B=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,L,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,R),R}function v(){for(let T=0;T<d;T++)if(f.indexOf(T)===-1)return f.push(T),T;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(T){const N=l[T.id],R=T.uniforms,L=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let B=0,I=R.length;B<I;B++){const Z=Array.isArray(R[B])?R[B]:[R[B]];for(let D=0,U=Z.length;D<U;D++){const V=Z[D];if(S(V,B,D,L)===!0){const ie=V.__offset,W=Array.isArray(V.value)?V.value:[V.value];let oe=0;for(let ue=0;ue<W.length;ue++){const F=W[ue],z=A(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,ie+oe,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,oe),oe+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ie,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(T,N,R,L){const B=T.value,I=N+"_"+R;if(L[I]===void 0)return typeof B=="number"||typeof B=="boolean"?L[I]=B:L[I]=B.clone(),!0;{const Z=L[I];if(typeof B=="number"||typeof B=="boolean"){if(Z!==B)return L[I]=B,!0}else if(Z.equals(B)===!1)return Z.copy(B),!0}return!1}function E(T){const N=T.uniforms;let R=0;const L=16;for(let I=0,Z=N.length;I<Z;I++){const D=Array.isArray(N[I])?N[I]:[N[I]];for(let U=0,V=D.length;U<V;U++){const ie=D[U],W=Array.isArray(ie.value)?ie.value:[ie.value];for(let oe=0,ue=W.length;oe<ue;oe++){const F=W[oe],z=A(F),J=R%L,Me=J%z.boundary,Se=J+Me;R+=Me,Se!==0&&L-Se<z.storage&&(R+=L-Se),ie.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=R,R+=z.storage}}}const B=R%L;return B>0&&(R+=L-B),T.__size=R,T.__cache={},this}function A(T){const N={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(N.boundary=4,N.storage=4):T.isVector2?(N.boundary=8,N.storage=8):T.isVector3||T.isColor?(N.boundary=16,N.storage=12):T.isVector4?(N.boundary=16,N.storage=16):T.isMatrix3?(N.boundary=48,N.storage=48):T.isMatrix4?(N.boundary=64,N.storage=64):T.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",T),N}function y(T){const N=T.target;N.removeEventListener("dispose",y);const R=f.indexOf(N.__bindingPointIndex);f.splice(R,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const T in l)r.deleteBuffer(l[T]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}const rw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function ow(){return Pi===null&&(Pi=new eb(rw,16,16,Wr,ba),Pi.name="DFG_LUT",Pi.minFilter=Fn,Pi.magFilter=Fn,Pi.wrapS=xa,Pi.wrapT=xa,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class lw{constructor(e={}){const{canvas:i=wM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1,outputBufferType:S=ri}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const A=S,y=new Set([gp,mp,pp]),_=new Set([ri,Wi,ol,ll,hp,dp]),T=new Uint32Array(4),N=new Int32Array(4);let R=null,L=null;const B=[],I=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let U=!1;this._outputColorSpace=_i;let V=0,ie=0,W=null,oe=-1,ue=null;const F=new sn,z=new sn;let J=null;const Me=new pt(0);let Se=0,O=i.width,ne=i.height,ve=1,we=null,ze=null;const ae=new sn(0,0,O,ne),he=new sn(0,0,O,ne);let Re=!1;const Ge=new bp;let Ve=!1,mt=!1;const en=new $t,St=new te,gt=new sn,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function tn(){return W===null?ve:1}let k=s;function Zt(C,Y){return i.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cp}`),i.addEventListener("webglcontextlost",at,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",At,!1),k===null){const Y="webgl2";if(k=Zt(Y,C),k===null)throw Zt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw wt("WebGLRenderer: "+C.message),C}let Tt,It,Ye,P,b,j,me,ye,fe,Ze,De,We,nt,Ee,Te,Be,Ie,Ne,ut,q,Le,Ae,Fe,be;function xe(){Tt=new o1(k),Tt.init(),Ae=new JA(k,Tt),It=new JT(k,Tt,e,Ae),Ye=new ZA(k,Tt),It.reversedDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),P=new u1(k),b=new PA,j=new QA(k,Tt,Ye,b,It,Ae,P),me=new e1(D),ye=new r1(D),fe=new pb(k),Fe=new ZT(k,fe),Ze=new l1(k,fe,P,Fe),De=new h1(k,Ze,fe,P),ut=new f1(k,It,j),Be=new $T(b),We=new OA(D,me,ye,Tt,It,Fe,Be),nt=new aw(D,b),Ee=new FA,Te=new kA(Tt),Ne=new KT(D,me,ye,Ye,De,E,m),Ie=new YA(D,De,It),be=new sw(k,P,It,Ye),q=new QT(k,Tt,P),Le=new c1(k,Tt,P),P.programs=We.programs,D.capabilities=It,D.extensions=Tt,D.properties=b,D.renderLists=Ee,D.shadowMap=Ie,D.state=Ye,D.info=P}xe(),A!==ri&&(Z=new p1(A,i.width,i.height,l,c));const Ce=new nw(D,k);this.xr=Ce,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=Tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(C){C!==void 0&&(ve=C,this.setSize(O,ne,!1))},this.getSize=function(C){return C.set(O,ne)},this.setSize=function(C,Y,le=!0){if(Ce.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,ne=Y,i.width=Math.floor(C*ve),i.height=Math.floor(Y*ve),le===!0&&(i.style.width=C+"px",i.style.height=Y+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(O*ve,ne*ve).floor()},this.setDrawingBufferSize=function(C,Y,le){O=C,ne=Y,ve=le,i.width=Math.floor(C*le),i.height=Math.floor(Y*le),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(A===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(ae)},this.setViewport=function(C,Y,le,se){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,Y,le,se),Ye.viewport(F.copy(ae).multiplyScalar(ve).round())},this.getScissor=function(C){return C.copy(he)},this.setScissor=function(C,Y,le,se){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,Y,le,se),Ye.scissor(z.copy(he).multiplyScalar(ve).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(C){Ye.setScissorTest(Re=C)},this.setOpaqueSort=function(C){we=C},this.setTransparentSort=function(C){ze=C},this.getClearColor=function(C){return C.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,le=!0){let se=0;if(C){let Q=!1;if(W!==null){const Ue=W.texture.format;Q=y.has(Ue)}if(Q){const Ue=W.texture.type,He=_.has(Ue),Oe=Ne.getClearColor(),ke=Ne.getClearAlpha(),qe=Oe.r,$e=Oe.g,je=Oe.b;He?(T[0]=qe,T[1]=$e,T[2]=je,T[3]=ke,k.clearBufferuiv(k.COLOR,0,T)):(N[0]=qe,N[1]=$e,N[2]=je,N[3]=ke,k.clearBufferiv(k.COLOR,0,N))}else se|=k.COLOR_BUFFER_BIT}Y&&(se|=k.DEPTH_BUFFER_BIT),le&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",at,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Ne.dispose(),Ee.dispose(),Te.dispose(),b.dispose(),me.dispose(),ye.dispose(),De.dispose(),Fe.dispose(),be.dispose(),We.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Xs),Ce.removeEventListener("sessionend",$r),Di.stop()};function at(C){C.preventDefault(),bv("WebGLRenderer: Context Lost."),U=!0}function Bt(){bv("WebGLRenderer: Context Restored."),U=!1;const C=P.autoReset,Y=Ie.enabled,le=Ie.autoUpdate,se=Ie.needsUpdate,Q=Ie.type;xe(),P.autoReset=C,Ie.enabled=Y,Ie.autoUpdate=le,Ie.needsUpdate=se,Ie.type=Q}function At(C){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ln(C){const Y=C.target;Y.removeEventListener("dispose",Ln),xi(Y)}function xi(C){gl(C),b.remove(C)}function gl(C){const Y=b.get(C).programs;Y!==void 0&&(Y.forEach(function(le){We.releaseProgram(le)}),C.isShaderMaterial&&We.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,le,se,Q,Ue){Y===null&&(Y=Ut);const He=Q.isMesh&&Q.matrixWorld.determinant()<0,Oe=cs(C,Y,le,se,Q);Ye.setMaterial(se,He);let ke=le.index,qe=1;if(se.wireframe===!0){if(ke=Ze.getWireframeAttribute(le),ke===void 0)return;qe=2}const $e=le.drawRange,je=le.attributes.position;let et=$e.start*qe,Lt=($e.start+$e.count)*qe;Ue!==null&&(et=Math.max(et,Ue.start*qe),Lt=Math.min(Lt,(Ue.start+Ue.count)*qe)),ke!==null?(et=Math.max(et,0),Lt=Math.min(Lt,ke.count)):je!=null&&(et=Math.max(et,0),Lt=Math.min(Lt,je.count));const Qt=Lt-et;if(Qt<0||Qt===1/0)return;Fe.setup(Q,se,Oe,le,ke);let jt,Ft=q;if(ke!==null&&(jt=fe.get(ke),Ft=Le,Ft.setIndex(jt)),Q.isMesh)se.wireframe===!0?(Ye.setLineWidth(se.wireframeLinewidth*tn()),Ft.setMode(k.LINES)):Ft.setMode(k.TRIANGLES);else if(Q.isLine){let Qe=se.linewidth;Qe===void 0&&(Qe=1),Ye.setLineWidth(Qe*tn()),Q.isLineSegments?Ft.setMode(k.LINES):Q.isLineLoop?Ft.setMode(k.LINE_LOOP):Ft.setMode(k.LINE_STRIP)}else Q.isPoints?Ft.setMode(k.POINTS):Q.isSprite&&Ft.setMode(k.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)cl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qe=Q._multiDrawStarts,Ot=Q._multiDrawCounts,st=Q._multiDrawCount,yn=ke?fe.get(ke).bytesPerElement:1,Yi=b.get(se).currentProgram.getUniforms();for(let Mn=0;Mn<st;Mn++)Yi.setValue(k,"_gl_DrawID",Mn),Ft.render(Qe[Mn]/yn,Ot[Mn])}else if(Q.isInstancedMesh)Ft.renderInstances(et,Qt,Q.count);else if(le.isInstancedBufferGeometry){const Qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ot=Math.min(le.instanceCount,Qe);Ft.renderInstances(et,Qt,Ot)}else Ft.render(et,Qt)};function Qr(C,Y,le){C.transparent===!0&&C.side===_a&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,qs(C,Y,le),C.side=ls,C.needsUpdate=!0,qs(C,Y,le),C.side=_a):qs(C,Y,le)}this.compile=function(C,Y,le=null){le===null&&(le=C),L=Te.get(le),L.init(Y),I.push(L),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),C!==le&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),L.setupLights();const se=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){const Oe=Ue[He];Qr(Oe,le,Q),se.add(Oe)}else Qr(Ue,le,Q),se.add(Ue)}),L=I.pop(),se},this.compileAsync=function(C,Y,le=null){const se=this.compile(C,Y,le);return new Promise(Q=>{function Ue(){if(se.forEach(function(He){b.get(He).currentProgram.isReady()&&se.delete(He)}),se.size===0){Q(C);return}setTimeout(Ue,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let ks=null;function Jr(C){ks&&ks(C)}function Xs(){Di.stop()}function $r(){Di.start()}const Di=new vx;Di.setAnimationLoop(Jr),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){ks=C,Ce.setAnimationLoop(C),C===null?Di.stop():Di.start()},Ce.addEventListener("sessionstart",Xs),Ce.addEventListener("sessionend",$r),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const le=Ce.enabled===!0&&Ce.isPresenting===!0,se=Z!==null&&(W===null||le)&&Z.begin(D,W);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(Y),Y=Ce.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,Y,W),L=Te.get(C,I.length),L.init(Y),I.push(L),en.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ge.setFromProjectionMatrix(en,Gi,Y.reversedDepth),mt=this.localClippingEnabled,Ve=Be.init(this.clippingPlanes,mt),R=Ee.get(C,B.length),R.init(),B.push(R),Ce.enabled===!0&&Ce.isPresenting===!0){const He=D.xr.getDepthSensingMesh();He!==null&&oi(He,Y,-1/0,D.sortObjects)}oi(C,Y,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(we,ze),lt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,lt&&Ne.addToRenderList(R,C),this.info.render.frame++,Ve===!0&&Be.beginShadows();const Q=L.state.shadowsArray;if(Ie.render(Q,C,Y),Ve===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&Z.hasRenderPass())===!1){const He=R.opaque,Oe=R.transmissive;if(L.setupLights(),Y.isArrayCamera){const ke=Y.cameras;if(Oe.length>0)for(let qe=0,$e=ke.length;qe<$e;qe++){const je=ke[qe];Sn(He,Oe,C,je)}lt&&Ne.render(C);for(let qe=0,$e=ke.length;qe<$e;qe++){const je=ke[qe];ln(R,C,je,je.viewport)}}else Oe.length>0&&Sn(He,Oe,C,Y),lt&&Ne.render(C),ln(R,C,Y)}W!==null&&ie===0&&(j.updateMultisampleRenderTarget(W),j.updateRenderTargetMipmap(W)),se&&Z.end(D),C.isScene===!0&&C.onAfterRender(D,C,Y),Fe.resetDefaultState(),oe=-1,ue=null,I.pop(),I.length>0?(L=I[I.length-1],Ve===!0&&Be.setGlobalState(D.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?R=B[B.length-1]:R=null};function oi(C,Y,le,se){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ge.intersectsSprite(C)){se&&gt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(en);const He=De.update(C),Oe=C.material;Oe.visible&&R.push(C,He,Oe,le,gt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ge.intersectsObject(C))){const He=De.update(C),Oe=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),gt.copy(C.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),gt.copy(He.boundingSphere.center)),gt.applyMatrix4(C.matrixWorld).applyMatrix4(en)),Array.isArray(Oe)){const ke=He.groups;for(let qe=0,$e=ke.length;qe<$e;qe++){const je=ke[qe],et=Oe[je.materialIndex];et&&et.visible&&R.push(C,He,et,le,gt.z,je)}}else Oe.visible&&R.push(C,He,Oe,le,gt.z,null)}}const Ue=C.children;for(let He=0,Oe=Ue.length;He<Oe;He++)oi(Ue[He],Y,le,se)}function ln(C,Y,le,se){const{opaque:Q,transmissive:Ue,transparent:He}=C;L.setupLightsView(le),Ve===!0&&Be.setGlobalState(D.clippingPlanes,le),se&&Ye.viewport(F.copy(se)),Q.length>0&&Si(Q,Y,le),Ue.length>0&&Si(Ue,Y,le),He.length>0&&Si(He,Y,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Sn(C,Y,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[se.id]===void 0){const et=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[se.id]=new ki(1,1,{generateMipmaps:!0,type:et?ba:ri,minFilter:zs,samples:It.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ue=L.state.transmissionRenderTarget[se.id],He=se.viewport||F;Ue.setSize(He.z*D.transmissionResolutionScale,He.w*D.transmissionResolutionScale);const Oe=D.getRenderTarget(),ke=D.getActiveCubeFace(),qe=D.getActiveMipmapLevel();D.setRenderTarget(Ue),D.getClearColor(Me),Se=D.getClearAlpha(),Se<1&&D.setClearColor(16777215,.5),D.clear(),lt&&Ne.render(le);const $e=D.toneMapping;D.toneMapping=Vi;const je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),L.setupLightsView(se),Ve===!0&&Be.setGlobalState(D.clippingPlanes,se),Si(C,le,se),j.updateMultisampleRenderTarget(Ue),j.updateRenderTargetMipmap(Ue),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Lt=0,Qt=Y.length;Lt<Qt;Lt++){const jt=Y[Lt],{object:Ft,geometry:Qe,material:Ot,group:st}=jt;if(Ot.side===_a&&Ft.layers.test(se.layers)){const yn=Ot.side;Ot.side=Kn,Ot.needsUpdate=!0,Ws(Ft,le,se,Qe,Ot,st),Ot.side=yn,Ot.needsUpdate=!0,et=!0}}et===!0&&(j.updateMultisampleRenderTarget(Ue),j.updateRenderTargetMipmap(Ue))}D.setRenderTarget(Oe,ke,qe),D.setClearColor(Me,Se),je!==void 0&&(se.viewport=je),D.toneMapping=$e}function Si(C,Y,le){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ue=C.length;Q<Ue;Q++){const He=C[Q],{object:Oe,geometry:ke,group:qe}=He;let $e=He.material;$e.allowOverride===!0&&se!==null&&($e=se),Oe.layers.test(le.layers)&&Ws(Oe,Y,le,ke,$e,qe)}}function Ws(C,Y,le,se,Q,Ue){C.onBeforeRender(D,Y,le,se,Q,Ue),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(D,Y,le,se,C,Ue),Q.transparent===!0&&Q.side===_a&&Q.forceSinglePass===!1?(Q.side=Kn,Q.needsUpdate=!0,D.renderBufferDirect(le,Y,se,Q,C,Ue),Q.side=ls,Q.needsUpdate=!0,D.renderBufferDirect(le,Y,se,Q,C,Ue),Q.side=_a):D.renderBufferDirect(le,Y,se,Q,C,Ue),C.onAfterRender(D,Y,le,se,Q,Ue)}function qs(C,Y,le){Y.isScene!==!0&&(Y=Ut);const se=b.get(C),Q=L.state.lights,Ue=L.state.shadowsArray,He=Q.state.version,Oe=We.getParameters(C,Q.state,Ue,Y,le),ke=We.getProgramCacheKey(Oe);let qe=se.programs;se.environment=C.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(C.isMeshStandardMaterial?ye:me).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,qe===void 0&&(C.addEventListener("dispose",Ln),qe=new Map,se.programs=qe);let $e=qe.get(ke);if($e!==void 0){if(se.currentProgram===$e&&se.lightsStateVersion===He)return eo(C,Oe),$e}else Oe.uniforms=We.getUniforms(C),C.onBeforeCompile(Oe,D),$e=We.acquireProgram(Oe,ke),qe.set(ke,$e),se.uniforms=Oe.uniforms;const je=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=Be.uniform),eo(C,Oe),se.needsLights=Aa(C),se.lightsStateVersion=He,se.needsLights&&(je.ambientLightColor.value=Q.state.ambient,je.lightProbe.value=Q.state.probe,je.directionalLights.value=Q.state.directional,je.directionalLightShadows.value=Q.state.directionalShadow,je.spotLights.value=Q.state.spot,je.spotLightShadows.value=Q.state.spotShadow,je.rectAreaLights.value=Q.state.rectArea,je.ltc_1.value=Q.state.rectAreaLTC1,je.ltc_2.value=Q.state.rectAreaLTC2,je.pointLights.value=Q.state.point,je.pointLightShadows.value=Q.state.pointShadow,je.hemisphereLights.value=Q.state.hemi,je.directionalShadowMap.value=Q.state.directionalShadowMap,je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,je.spotShadowMap.value=Q.state.spotShadowMap,je.spotLightMatrix.value=Q.state.spotLightMatrix,je.spotLightMap.value=Q.state.spotLightMap,je.pointShadowMap.value=Q.state.pointShadowMap,je.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=$e,se.uniformsList=null,$e}function vl(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=au.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function eo(C,Y){const le=b.get(C);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function cs(C,Y,le,se,Q){Y.isScene!==!0&&(Y=Ut),j.resetTextureUnits();const Ue=Y.fog,He=se.isMeshStandardMaterial?Y.environment:null,Oe=W===null?D.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:qr,ke=(se.isMeshStandardMaterial?ye:me).get(se.envMap||He),qe=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,$e=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),je=!!le.morphAttributes.position,et=!!le.morphAttributes.normal,Lt=!!le.morphAttributes.color;let Qt=Vi;se.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Qt=D.toneMapping);const jt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ft=jt!==void 0?jt.length:0,Qe=b.get(se),Ot=L.state.lights;if(Ve===!0&&(mt===!0||C!==ue)){const En=C===ue&&se.id===oe;Be.setState(se,C,En)}let st=!1;se.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ot.state.version||Qe.outputColorSpace!==Oe||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isBatchedMesh&&Qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==ke||se.fog===!0&&Qe.fog!==Ue||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Be.numPlanes||Qe.numIntersection!==Be.numIntersection)||Qe.vertexAlphas!==qe||Qe.vertexTangents!==$e||Qe.morphTargets!==je||Qe.morphNormals!==et||Qe.morphColors!==Lt||Qe.toneMapping!==Qt||Qe.morphTargetsCount!==Ft)&&(st=!0):(st=!0,Qe.__version=se.version);let yn=Qe.currentProgram;st===!0&&(yn=qs(se,Y,Q));let Yi=!1,Mn=!1,li=!1;const zt=yn.getUniforms(),bn=Qe.uniforms;if(Ye.useProgram(yn.program)&&(Yi=!0,Mn=!0,li=!0),se.id!==oe&&(oe=se.id,Mn=!0),Yi||ue!==C){Ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),zt.setValue(k,"projectionMatrix",C.projectionMatrix),zt.setValue(k,"viewMatrix",C.matrixWorldInverse);const Tn=zt.map.cameraPosition;Tn!==void 0&&Tn.setValue(k,St.setFromMatrixPosition(C.matrixWorld)),It.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&zt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),ue!==C&&(ue=C,Mn=!0,li=!0)}if(Qe.needsLights&&(Ot.state.directionalShadowMap.length>0&&zt.setValue(k,"directionalShadowMap",Ot.state.directionalShadowMap,j),Ot.state.spotShadowMap.length>0&&zt.setValue(k,"spotShadowMap",Ot.state.spotShadowMap,j),Ot.state.pointShadowMap.length>0&&zt.setValue(k,"pointShadowMap",Ot.state.pointShadowMap,j)),Q.isSkinnedMesh){zt.setOptional(k,Q,"bindMatrix"),zt.setOptional(k,Q,"bindMatrixInverse");const En=Q.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),zt.setValue(k,"boneTexture",En.boneTexture,j))}Q.isBatchedMesh&&(zt.setOptional(k,Q,"batchingTexture"),zt.setValue(k,"batchingTexture",Q._matricesTexture,j),zt.setOptional(k,Q,"batchingIdTexture"),zt.setValue(k,"batchingIdTexture",Q._indirectTexture,j),zt.setOptional(k,Q,"batchingColorTexture"),Q._colorsTexture!==null&&zt.setValue(k,"batchingColorTexture",Q._colorsTexture,j));const pn=le.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ut.update(Q,le,yn),(Mn||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,zt.setValue(k,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(bn.envMap.value=ke,bn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(bn.envMapIntensity.value=Y.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=ow()),Mn&&(zt.setValue(k,"toneMappingExposure",D.toneMappingExposure),Qe.needsLights&&to(bn,li),Ue&&se.fog===!0&&nt.refreshFogUniforms(bn,Ue),nt.refreshMaterialUniforms(bn,se,ve,ne,L.state.transmissionRenderTarget[C.id]),au.upload(k,vl(Qe),bn,j)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(au.upload(k,vl(Qe),bn,j),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&zt.setValue(k,"center",Q.center),zt.setValue(k,"modelViewMatrix",Q.modelViewMatrix),zt.setValue(k,"normalMatrix",Q.normalMatrix),zt.setValue(k,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const En=se.uniformsGroups;for(let Tn=0,js=En.length;Tn<js;Tn++){const yi=En[Tn];be.update(yi,yn),be.bind(yi,yn)}}return yn}function to(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Aa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,Y,le){const se=b.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=Y,b.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const le=b.get(C);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const wa=k.createFramebuffer();this.setRenderTarget=function(C,Y=0,le=0){W=C,V=Y,ie=le;let se=null,Q=!1,Ue=!1;if(C){const Oe=b.get(C);if(Oe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(k.FRAMEBUFFER,Oe.__webglFramebuffer),F.copy(C.viewport),z.copy(C.scissor),J=C.scissorTest,Ye.viewport(F),Ye.scissor(z),Ye.setScissorTest(J),oe=-1;return}else if(Oe.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(Oe.__hasExternalTextures)j.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $e=C.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&b.has($e)&&(C.width!==$e.image.width||C.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);const qe=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?se=qe[Y][le]:se=qe[Y],Q=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?se=b.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?se=qe[le]:se=qe,F.copy(C.viewport),z.copy(C.scissor),J=C.scissorTest}else F.copy(ae).multiplyScalar(ve).floor(),z.copy(he).multiplyScalar(ve).floor(),J=Re;if(le!==0&&(se=wa),Ye.bindFramebuffer(k.FRAMEBUFFER,se)&&Ye.drawBuffers(C,se),Ye.viewport(F),Ye.scissor(z),Ye.setScissorTest(J),Q){const Oe=b.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,le)}else if(Ue){const Oe=Y;for(let ke=0;ke<C.textures.length;ke++){const qe=b.get(C.textures[ke]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ke,qe.__webglTexture,le,Oe)}}else if(C!==null&&le!==0){const Oe=b.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Oe.__webglTexture,le)}oe=-1},this.readRenderTargetPixels=function(C,Y,le,se,Q,Ue,He,Oe=0){if(!(C&&C.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke){Ye.bindFramebuffer(k.FRAMEBUFFER,ke);try{const qe=C.textures[Oe],$e=qe.format,je=qe.type;if(!It.textureFormatReadable($e)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(je)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-se&&le>=0&&le<=C.height-Q&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),k.readPixels(Y,le,se,Q,Ae.convert($e),Ae.convert(je),Ue))}finally{const qe=W!==null?b.get(W).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(C,Y,le,se,Q,Ue,He,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke)if(Y>=0&&Y<=C.width-se&&le>=0&&le<=C.height-Q){Ye.bindFramebuffer(k.FRAMEBUFFER,ke);const qe=C.textures[Oe],$e=qe.format,je=qe.type;if(!It.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,et),k.bufferData(k.PIXEL_PACK_BUFFER,Ue.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),k.readPixels(Y,le,se,Q,Ae.convert($e),Ae.convert(je),0);const Lt=W!==null?b.get(W).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Lt);const Qt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await CM(k,Qt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,et),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ue),k.deleteBuffer(et),k.deleteSync(Qt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,le=0){const se=Math.pow(2,-le),Q=Math.floor(C.image.width*se),Ue=Math.floor(C.image.height*se),He=Y!==null?Y.x:0,Oe=Y!==null?Y.y:0;j.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,le,0,0,He,Oe,Q,Ue),Ye.unbindTexture()};const us=k.createFramebuffer(),Ca=k.createFramebuffer();this.copyTextureToTexture=function(C,Y,le=null,se=null,Q=0,Ue=null){Ue===null&&(Q!==0?(cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Q,Q=0):Ue=0);let He,Oe,ke,qe,$e,je,et,Lt,Qt;const jt=C.isCompressedTexture?C.mipmaps[Ue]:C.image;if(le!==null)He=le.max.x-le.min.x,Oe=le.max.y-le.min.y,ke=le.isBox3?le.max.z-le.min.z:1,qe=le.min.x,$e=le.min.y,je=le.isBox3?le.min.z:0;else{const pn=Math.pow(2,-Q);He=Math.floor(jt.width*pn),Oe=Math.floor(jt.height*pn),C.isDataArrayTexture?ke=jt.depth:C.isData3DTexture?ke=Math.floor(jt.depth*pn):ke=1,qe=0,$e=0,je=0}se!==null?(et=se.x,Lt=se.y,Qt=se.z):(et=0,Lt=0,Qt=0);const Ft=Ae.convert(Y.format),Qe=Ae.convert(Y.type);let Ot;Y.isData3DTexture?(j.setTexture3D(Y,0),Ot=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(j.setTexture2DArray(Y,0),Ot=k.TEXTURE_2D_ARRAY):(j.setTexture2D(Y,0),Ot=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const st=k.getParameter(k.UNPACK_ROW_LENGTH),yn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Yi=k.getParameter(k.UNPACK_SKIP_PIXELS),Mn=k.getParameter(k.UNPACK_SKIP_ROWS),li=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,jt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,jt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qe),k.pixelStorei(k.UNPACK_SKIP_ROWS,$e),k.pixelStorei(k.UNPACK_SKIP_IMAGES,je);const zt=C.isDataArrayTexture||C.isData3DTexture,bn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const pn=b.get(C),En=b.get(Y),Tn=b.get(pn.__renderTarget),js=b.get(En.__renderTarget);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let yi=0;yi<ke;yi++)zt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(C).__webglTexture,Q,je+yi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,Ue,Qt+yi)),k.blitFramebuffer(qe,$e,He,Oe,et,Lt,He,Oe,k.DEPTH_BUFFER_BIT,k.NEAREST);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||b.has(C)){const pn=b.get(C),En=b.get(Y);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,us),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ca);for(let Tn=0;Tn<ke;Tn++)zt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pn.__webglTexture,Q,je+Tn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pn.__webglTexture,Q),bn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,En.__webglTexture,Ue,Qt+Tn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,En.__webglTexture,Ue),Q!==0?k.blitFramebuffer(qe,$e,He,Oe,et,Lt,He,Oe,k.COLOR_BUFFER_BIT,k.NEAREST):bn?k.copyTexSubImage3D(Ot,Ue,et,Lt,Qt+Tn,qe,$e,He,Oe):k.copyTexSubImage2D(Ot,Ue,et,Lt,qe,$e,He,Oe);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else bn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Ot,Ue,et,Lt,Qt,He,Oe,ke,Ft,Qe,jt.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Ot,Ue,et,Lt,Qt,He,Oe,ke,Ft,jt.data):k.texSubImage3D(Ot,Ue,et,Lt,Qt,He,Oe,ke,Ft,Qe,jt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ue,et,Lt,He,Oe,Ft,Qe,jt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ue,et,Lt,jt.width,jt.height,Ft,jt.data):k.texSubImage2D(k.TEXTURE_2D,Ue,et,Lt,He,Oe,Ft,Qe,jt);k.pixelStorei(k.UNPACK_ROW_LENGTH,st),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Yi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Mn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,li),Ue===0&&Y.generateMipmaps&&k.generateMipmap(Ot),Ye.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){V=0,ie=0,W=null,Ye.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const Mx=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],bx=new Set([1,3,6,8,10]),os=21,Gs=108,su=52;function ru(r){return bx.has(r%12)}function cw(r){const e=Mx[r%12],i=Math.floor(r/12)-1;return`${e}${i}`}function uw(r){return 440*Math.pow(2,(r-69)/12)}function fw(){const r=[];let e=0;for(let i=os;i<=Gs;i++){const s=i%12,l=bx.has(s),c=Mx[s],f=Math.floor(i/12)-1;r.push({midiNote:i,name:`${c}${f}`,octave:f,isBlack:l,whiteIndex:l?e-1:e}),l||e++}return r}const p_=fw(),Hr=2.35,ad=15,rp=1.5,hw=1.3,m_=9.5,g_=1,dw=rp,pw=.2,$o=su*Hr;function v_(r){const e=(r+1)*12,i=new Map,s=[["a",0],["w",1],["s",2],["e",3],["d",4],["f",5],["t",6],["g",7],["y",8],["h",9],["u",10],["j",11],["k",12],["o",13],["l",14],["p",15],[";",16],["'",17],["[",18]];for(const[l,c]of s){const f=e+c;f>=os&&f<=Gs&&i.set(l,f)}return i}const __=4,mw=3900150,gw=16096779,sd=1096065,x_={default:{pos:new te(0,35,30),lookAt:new te(0,0,2)},full:{pos:new te(0,60,50),lookAt:new te(0,0,0)},performer:{pos:new te(0,15,22),lookAt:new te(0,0,-2)},closeup:{pos:new te(0,20,18),lookAt:new te(0,0,2)}};class vw{renderer;scene;camera;keys=new Map;raycaster=new hb;animationId=0;targetCameraPos=new te;targetLookAt=new te;currentLookAt=new te;isDragging=!1;dragStart={x:0,y:0};cameraAngle={theta:0,phi:Math.PI/4};cameraDistance=45;canvas;whiteKeyMat;blackKeyMat;bodyMat;init(e){this.canvas=e;const i=e.clientWidth,s=e.clientHeight;this.renderer=new lw({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(i,s),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!1,this.renderer.toneMapping=up,this.renderer.toneMappingExposure=1.2,this.scene=new $M,this.scene.background=new pt(657935),this.scene.fog=new Mp(657935,.004),this.camera=new si(45,i/s,.1,500);const l=x_.default;this.camera.position.copy(l.pos),this.targetCameraPos.copy(l.pos),this.targetLookAt.copy(l.lookAt),this.currentLookAt.copy(l.lookAt),this.camera.lookAt(l.lookAt),this.setupLighting(),this.createMaterials(),this.buildPianoBody(),this.buildKeys(),this.buildFloor(),this.setupMouseControls(),this.animate()}setupLighting(){const e=new lb(14544639,2236979,.8);this.scene.add(e);const i=new Qh(16774632,1.4);i.position.set(10,45,35),this.scene.add(i);const s=new Qh(15265535,.4);s.position.set(-20,25,-10),this.scene.add(s);const l=new Qh(16777215,.2);l.position.set(0,8,-30),this.scene.add(l);const c=new Zh(16772829,.4,120);c.position.set(-50,20,15),this.scene.add(c);const f=new Zh(16772829,.3,120);f.position.set(0,20,20),this.scene.add(f);const d=new Zh(16772829,.4,120);d.position.set(50,20,15),this.scene.add(d)}createMaterials(){this.whiteKeyMat=new jc({color:16117992,roughness:.35,metalness:.02}),this.blackKeyMat=new jc({color:1710618,roughness:.25,metalness:.05}),this.bodyMat=new jc({color:855309,roughness:.1,metalness:.3,envMapIntensity:1})}buildPianoBody(){const e=$o+8,i=ad+12,s=4,l=new zi(e,s,i),c=new Hn(l,this.bodyMat);c.position.set(0,-s/2,0),this.scene.add(c);const f=new zi(e,6,2),d=new Hn(f,this.bodyMat);d.position.set(0,1,-12.5),this.scene.add(d);for(const m of[-1,1]){const p=new zi(3,6,i),g=new Hn(p,this.bodyMat);g.position.set(m*(e/2+1.5),1,0),this.scene.add(g)}}buildKeys(){const e=-$o/2+Hr/2;let i=0;const s=new zi(Hr-.4,rp,ad);s.translate(0,rp/2,0);const l=new zi(hw,g_,m_);l.translate(0,g_/2,0);for(const c of p_)if(c.isBlack){const f=this.blackKeyMat.clone(),d=new Hn(l,f),m=c.midiNote%12,g=c.midiNote-m;let v=0;switch(m){case 1:v=.55;break;case 3:v=1.6;break;case 6:v=3.55;break;case 8:v=4.55;break;case 10:v=5.6;break}let x;if(c.midiNote<24)x=e+.55*Hr;else{let A=-1;for(const y of p_)if(y.midiNote===g&&!y.isBlack){A=y.whiteIndex;break}if(A<0){let y=0;for(let _=os;_<g;_++)ru(_)||y++;A=y}x=e+(A+v)*Hr}const S=dw,E=-5.5/2;d.position.set(x,S,E),d.castShadow=!0,d.userData={midiNote:c.midiNote,isBlack:!0},this.scene.add(d),this.keys.set(c.midiNote,{mesh:d,midiNote:c.midiNote,isBlack:!0,restY:S,targetY:S,currentY:S,glowIntensity:0,targetGlow:0,glowColor:new pt(sd),material:f})}else{const f=this.whiteKeyMat.clone(),d=new Hn(s,f),m=e+i*Hr,p=0;d.position.set(m,p,0),d.castShadow=!1,d.receiveShadow=!0,d.userData={midiNote:c.midiNote,isBlack:!1},this.scene.add(d),this.keys.set(c.midiNote,{mesh:d,midiNote:c.midiNote,isBlack:!1,restY:p,targetY:p,currentY:p,glowIntensity:0,targetGlow:0,glowColor:new pt(sd),material:f}),i++}}buildFloor(){const e=new ml(400,400),i=new jc({color:526352,roughness:.9,metalness:.1}),s=new Hn(e,i);s.rotation.x=-Math.PI/2,s.position.y=-4,s.receiveShadow=!0,this.scene.add(s)}setupMouseControls(){const e=this.canvas;e.addEventListener("pointerdown",i=>{(i.button===2||i.button===1)&&(this.isDragging=!0,this.dragStart={x:i.clientX,y:i.clientY},i.preventDefault())}),e.addEventListener("pointermove",i=>{if(this.isDragging){const s=i.clientX-this.dragStart.x,l=i.clientY-this.dragStart.y;this.cameraAngle.theta-=s*.005,this.cameraAngle.phi=Math.max(.1,Math.min(Math.PI/2.5,this.cameraAngle.phi+l*.005)),this.dragStart={x:i.clientX,y:i.clientY},this.targetCameraPos.set(this.cameraDistance*Math.sin(this.cameraAngle.theta)*Math.sin(this.cameraAngle.phi),this.cameraDistance*Math.cos(this.cameraAngle.phi),this.cameraDistance*Math.sin(this.cameraAngle.phi)*Math.cos(this.cameraAngle.theta))}}),e.addEventListener("pointerup",()=>{this.isDragging=!1}),e.addEventListener("wheel",i=>{i.preventDefault(),this.cameraDistance=Math.max(15,Math.min(100,this.cameraDistance+i.deltaY*.05)),this.targetCameraPos.setLength(this.cameraDistance)},{passive:!1}),e.addEventListener("contextmenu",i=>i.preventDefault())}getKeyAtPosition(e,i){const s=this.canvas.getBoundingClientRect(),l=new Rt((e-s.left)/s.width*2-1,-((i-s.top)/s.height)*2+1);this.raycaster.setFromCamera(l,this.camera);const c=[],f=[];for(const p of this.keys.values())p.isBlack?c.push(p.mesh):f.push(p.mesh);const d=this.raycaster.intersectObjects(c);if(d.length>0)return d[0].object.userData.midiNote;const m=this.raycaster.intersectObjects(f);return m.length>0?m[0].object.userData.midiNote:null}getVelocityFromHit(e,i){const s=this.canvas.getBoundingClientRect(),l=new Rt((e-s.left)/s.width*2-1,-((i-s.top)/s.height)*2+1);this.raycaster.setFromCamera(l,this.camera);const c=[...this.keys.values()].map(d=>d.mesh),f=this.raycaster.intersectObjects(c);if(f.length>0){const d=f[0],m=this.keys.get(d.object.userData.midiNote);if(m){const p=d.object.worldToLocal(d.point.clone()),g=m.isBlack?m_:ad,v=(p.z+g/2)/g;return Math.round(40+v*87)}}return 80}keyDown(e,i){const s=this.keys.get(e);s&&(s.targetY=s.restY-pw,s.targetGlow=1,i==="left"?s.glowColor.setHex(mw):i==="right"?s.glowColor.setHex(gw):s.glowColor.setHex(sd))}keyUp(e){const i=this.keys.get(e);i&&(i.targetY=i.restY,i.targetGlow=0)}setCameraPreset(e){const i=x_[e];this.targetCameraPos.copy(i.pos),this.targetLookAt.copy(i.lookAt),this.cameraDistance=i.pos.length()}focusOnRange(e,i){const s=this.keys.get(e),l=this.keys.get(i);if(!s||!l)return;const c=(s.mesh.position.x+l.mesh.position.x)/2,f=Math.abs(l.mesh.position.x-s.mesh.position.x),d=Math.max(25,f*.8);this.targetCameraPos.set(c,d*.7,d*.6),this.targetLookAt.set(c,0,0)}resize(e,i){this.camera.aspect=e/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,i)}animate=()=>{this.animationId=requestAnimationFrame(this.animate);const e=.08;this.camera.position.lerp(this.targetCameraPos,e),this.currentLookAt.lerp(this.targetLookAt,e),this.camera.lookAt(this.currentLookAt);for(const i of this.keys.values()){i.currentY+=(i.targetY-i.currentY)*.25,i.mesh.position.y=i.currentY;const s=i.restY-i.currentY;if(i.mesh.rotation.x=s*.02,i.glowIntensity+=(i.targetGlow-i.glowIntensity)*.2,i.glowIntensity>.01){const l=i.isBlack?new pt(1710618):new pt(16117992);i.material.emissive.copy(i.glowColor),i.material.emissiveIntensity=i.glowIntensity*.6,i.material.color.copy(l).lerp(i.glowColor,i.glowIntensity*.3)}else i.material.emissive.setHex(0),i.material.emissiveIntensity=0,i.material.color.setHex(i.isBlack?1710618:16117992)}this.renderer.render(this.scene,this.camera)};dispose(){cancelAnimationFrame(this.animationId),this.renderer.dispose(),this.scene.clear()}getWhiteKeyXPositions(){const e=new Map;for(const[i,s]of this.keys)e.set(i,s.mesh.position.x);return e}getKeyboardBounds(){return{left:-$o/2,right:$o/2,width:$o}}getCamera(){return this.camera}getRenderer(){return this.renderer}}const Ii=new vw,_w="#3b82f6",xw="#60a5fa",Sw="#f59e0b",yw="#fbbf24",Mw="#2a5fad",bw="#b07308",Ew="rgba(255,255,255,0.08)",Tw="rgba(255,255,255,0.06)",Aw="rgba(255,255,255,0.12)",ww="rgba(255,255,255,0.03)";class Cw{canvas=null;ctx=null;notes=[];visibleWindowSeconds=4;animFrameId=0;currentTime=0;tempo=0;beatsPerMeasure=4;pastTrailSeconds=2;config={showNoteNames:!0,showPastTrail:!0,velocityOpacity:!0};keyLeftEdge=new Map;keyWidth=new Map;init(e){this.canvas=e,this.ctx=e.getContext("2d"),this.calculateKeyPositions()}calculateKeyPositions(){if(!this.canvas)return;const i=this.canvas.width/su,s=i*.6;let l=0;for(let c=os;c<=Gs;c++)ru(c)||(this.keyLeftEdge.set(c,l*i),this.keyWidth.set(c,i),l++);for(let c=os;c<=Gs;c++)if(ru(c)){const f=c-1,d=c+1,m=this.keyLeftEdge.get(f),p=this.keyLeftEdge.get(d);if(m!==void 0&&p!==void 0){const g=(m+i+p)/2;this.keyLeftEdge.set(c,g-s/2),this.keyWidth.set(c,s)}else m!==void 0&&(this.keyLeftEdge.set(c,m+i-s/2),this.keyWidth.set(c,s))}}setNotes(e){this.notes=e}setVisibleWindow(e){this.visibleWindowSeconds=e}setConfig(e){this.config=e}setMusicInfo(e,i){this.tempo=e,this.beatsPerMeasure=i}update(e,i){this.currentTime=e,this.draw()}resize(e,i){this.canvas&&(this.canvas.width=e,this.canvas.height=i,this.calculateKeyPositions())}draw(){if(!this.ctx||!this.canvas)return;const e=this.ctx,i=this.canvas.width,s=this.canvas.height,l=this.config.showPastTrail,c=l?this.visibleWindowSeconds/(this.visibleWindowSeconds+this.pastTrailSeconds):1,f=s*c;e.clearRect(0,0,i,s);const d=e.createLinearGradient(0,0,0,s);d.addColorStop(0,"rgba(10, 10, 15, 0.95)"),d.addColorStop(1,"rgba(10, 10, 15, 0.7)"),e.fillStyle=d,e.fillRect(0,0,i,s);const m=i/su;e.strokeStyle=ww,e.lineWidth=1;for(let x=0;x<=su;x++){const S=Math.round(x*m)+.5;e.beginPath(),e.moveTo(S,0),e.lineTo(S,s),e.stroke()}for(let x=os;x<=Gs;x++)if(ru(x)){const S=this.keyLeftEdge.get(x),E=this.keyWidth.get(x);S!==void 0&&E!==void 0&&(e.fillStyle="rgba(0, 0, 0, 0.3)",e.fillRect(S,0,E,s))}const p=f/this.visibleWindowSeconds,g=this.currentTime,v=g+this.visibleWindowSeconds;if(this.tempo>0){const x=60/this.tempo,S=Math.ceil(g/x),E=Math.floor(v/x);for(let A=S;A<=E;A++){const y=A*x,_=f-(y-g)*p,T=A%this.beatsPerMeasure===0;e.strokeStyle=T?Aw:Tw,e.lineWidth=T?1.5:1,e.beginPath(),e.moveTo(0,_),e.lineTo(i,_),e.stroke()}}else{e.strokeStyle=Ew,e.lineWidth=1;const x=Math.ceil(g);for(let S=x;S<=v;S++){const E=f-(S-g)*p;e.beginPath(),e.moveTo(0,E),e.lineTo(i,E),e.stroke()}}if(l){const x=(s-f)/this.pastTrailSeconds;for(const S of this.notes){const E=S.startTime+S.duration;if(E>=this.currentTime||E<this.currentTime-this.pastTrailSeconds)continue;const A=this.keyLeftEdge.get(S.midiNote),y=this.keyWidth.get(S.midiNote);if(A===void 0||y===void 0)continue;const _=this.currentTime-E,T=Math.max(0,1-_/this.pastTrailSeconds)*.35,N=f+(this.currentTime-E)*x,R=f+(this.currentTime-S.startTime)*x,L=Math.max(2,Math.min(R,s)-Math.max(N,f)),B=Math.max(N,f),I=S.hand==="left"?Mw:bw,Z=1,D=Math.min(3,L/2,(y-Z*2)/2);e.fillStyle=I,e.globalAlpha=T,this.roundRect(e,A+Z,B,y-Z*2,L,D),e.fill(),e.globalAlpha=1}}for(const x of this.notes){const S=x.startTime+x.duration;if(S<g||x.startTime>v)continue;const E=this.keyLeftEdge.get(x.midiNote),A=this.keyWidth.get(x.midiNote);if(E===void 0||A===void 0)continue;const y=f-(x.startTime-g)*p,_=f-(S-g)*p,T=Math.max(2,y-_),N=x.startTime<=this.currentTime&&S>this.currentTime;let R;x.hand==="left"?R=N?xw:_w:R=N?yw:Sw;let L=N?1:.7;if(this.config.velocityOpacity){const ie=.5+x.velocity/127*.5;L*=ie}const B=(x.startTime-this.currentTime)/this.visibleWindowSeconds,I=Math.max(0,1-B*4),Z=1,D=Math.min(3,T/2,(A-Z*2)/2),U=E+Z,V=A-Z*2;if(e.fillStyle=R,e.globalAlpha=L,I>0&&!N&&(e.shadowColor=R,e.shadowBlur=I*15),this.roundRect(e,U,_,V,T,D),e.fill(),N&&(e.shadowColor=R,e.shadowBlur=10,this.roundRect(e,U,_,V,T,D),e.fill()),e.shadowBlur=0,this.config.showNoteNames&&V>18&&T>14){e.fillStyle="rgba(255,255,255,0.7)";const ie=Math.min(10,T-4);e.font=`${ie}px Inter, sans-serif`,e.textAlign="center",e.textBaseline="middle";const W=cw(x.midiNote);e.fillText(W,U+V/2,_+T/2)}e.globalAlpha=1}e.strokeStyle="rgba(255, 255, 255, 0.5)",e.lineWidth=2,e.beginPath(),e.moveTo(0,f),e.lineTo(i,f),e.stroke()}roundRect(e,i,s,l,c,f){f=Math.max(0,Math.min(f,l/2,c/2)),e.beginPath(),e.moveTo(i+f,s),e.lineTo(i+l-f,s),e.arcTo(i+l,s,i+l,s+f,f),e.lineTo(i+l,s+c-f),e.arcTo(i+l,s+c,i+l-f,s+c,f),e.lineTo(i+f,s+c),e.arcTo(i,s+c,i,s+c-f,f),e.lineTo(i,s+f),e.arcTo(i,s,i+f,s,f),e.closePath()}dispose(){this.animFrameId&&cancelAnimationFrame(this.animFrameId),this.canvas=null,this.ctx=null}}const as=new Cw,Rw="https://gleitz.github.io/midi-js-soundfonts/MusyngKite/acoustic_grand_piano-mp3",Dw=8,Nw=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];function Uw(r){const e=Nw[r%12],i=Math.floor(r/12)-1;return`${e}${i}`}function Lw(){const e=[];for(let i=os;i<=Gs;i++)e.push(i);return e.sort((i,s)=>Math.abs(i-60)-Math.abs(s-60)),e}class Ow{buffers=new Map;loading=!1;loaded=!1;failed=!1;isLoaded(){return this.loaded}isLoading(){return this.loading}hasFailed(){return this.failed}getBuffer(e){return this.buffers.get(e)??null}async loadSamples(e,i){if(this.loading||this.loaded)return;this.loading=!0;const s=Lw(),l=s.length;let c=0;const f=[...s],d=async()=>{for(;f.length>0;){const m=f.shift(),p=Uw(m),g=`${Rw}/${encodeURIComponent(p)}.mp3`;try{const v=await fetch(g);if(!v.ok)throw new Error(`HTTP ${v.status}`);const x=await v.arrayBuffer(),S=await e.decodeAudioData(x);this.buffers.set(m,S)}catch(v){console.warn(`Failed to load sample for MIDI ${m} (${p}):`,v)}c++,i?.(c,l)}};try{const m=[];for(let p=0;p<Dw;p++)m.push(d());await Promise.all(m),this.loaded=!0}catch(m){console.error("Sample loading failed:",m),this.failed=!0}finally{this.loading=!1}}}const S_=r=>{let e;const i=new Set,s=(p,g)=>{const v=typeof p=="function"?p(e):p;if(!Object.is(v,e)){const x=e;e=g??(typeof v!="object"||v===null)?v:Object.assign({},e,v),i.forEach(S=>S(e,x))}},l=()=>e,d={setState:s,getState:l,getInitialState:()=>m,subscribe:p=>(i.add(p),()=>i.delete(p))},m=e=r(s,l,d);return d},Pw=(r=>r?S_(r):S_),Iw=r=>r;function Fw(r,e=Iw){const i=wc.useSyncExternalStore(r.subscribe,wc.useCallback(()=>e(r.getState()),[r,e]),wc.useCallback(()=>e(r.getInitialState()),[r,e]));return wc.useDebugValue(i),i}const y_=r=>{const e=Pw(r),i=s=>Fw(e,s);return Object.assign(i,e),i},Ex=(r=>r?y_(r):y_),pe=Ex(r=>({activeNotes:new Map,playbackState:"stopped",playbackPosition:0,tempoMultiplier:1,timeline:null,fileInfo:null,loopStart:null,loopEnd:null,totalDuration:0,volume:.8,metronomeOn:!1,sustainPedal:!1,octaveShift:0,muteLeft:!1,muteRight:!1,reverbMix:.3,roomSize:3.5,releaseTime:1.5,brightness:.8,activePresetId:null,customPresets:[],waterfallLookAhead:4,waterfallHeightPct:35,waterfallShowNoteNames:!0,waterfallShowPastTrail:!0,waterfallVelocityOpacity:!0,cameraPreset:"default",midiDeviceName:null,showFileModal:!1,showSideDrawer:!1,isAudioReady:!1,sampleLoadProgress:0,noteOn:(e,i,s,l="user")=>r(c=>{const f=new Map(c.activeNotes);return f.set(e,{velocity:i,hand:s??"user",source:l}),{activeNotes:f}}),noteOff:e=>r(i=>{const s=new Map(i.activeNotes);return s.delete(e),{activeNotes:s}}),clearPlaybackNotes:()=>r(e=>{const i=new Map(e.activeNotes);for(const[s,l]of i)l.source==="playback"&&i.delete(s);return{activeNotes:i}}),setPlaybackState:e=>r({playbackState:e}),setPlaybackPosition:e=>r({playbackPosition:e}),setTempoMultiplier:e=>r({tempoMultiplier:e}),setTimeline:e=>r({timeline:e}),setFileInfo:e=>r({fileInfo:e}),setLoopRegion:(e,i)=>r({loopStart:e,loopEnd:i}),setTotalDuration:e=>r({totalDuration:e}),setVolume:e=>r({volume:e}),toggleMetronome:()=>r(e=>({metronomeOn:!e.metronomeOn})),setSustainPedal:e=>r({sustainPedal:e}),setOctaveShift:e=>r(i=>({octaveShift:Math.max(-3,Math.min(3,i.octaveShift+e))})),setMuteLeft:e=>r({muteLeft:e}),setMuteRight:e=>r({muteRight:e}),setReverbMix:e=>r({reverbMix:e}),setRoomSize:e=>r({roomSize:e}),setReleaseTime:e=>r({releaseTime:e}),setBrightness:e=>r({brightness:e}),setActivePresetId:e=>r({activePresetId:e}),setCustomPresets:e=>r({customPresets:e}),setWaterfallLookAhead:e=>r({waterfallLookAhead:e}),setWaterfallHeightPct:e=>r({waterfallHeightPct:e}),setWaterfallShowNoteNames:e=>r({waterfallShowNoteNames:e}),setWaterfallShowPastTrail:e=>r({waterfallShowPastTrail:e}),setWaterfallVelocityOpacity:e=>r({waterfallVelocityOpacity:e}),setCameraPreset:e=>r({cameraPreset:e}),setMidiDeviceName:e=>r({midiDeviceName:e}),setShowFileModal:e=>r({showFileModal:e}),setShowSideDrawer:e=>r({showSideDrawer:e}),setAudioReady:e=>r({isAudioReady:e}),setSampleLoadProgress:e=>r({sampleLoadProgress:e}),updateTrack:(e,i)=>r(s=>{if(!s.fileInfo)return{};const l=s.fileInfo.tracks.map(c=>c.index===e?{...c,...i}:c);return{fileInfo:{...s.fileInfo,tracks:l}}})})),uu=Ex(r=>({toasts:[],addToast:e=>r(i=>({toasts:[...i.toasts.slice(-4),e]})),removeToast:e=>r(i=>({toasts:i.toasts.filter(s=>s.id!==e)}))}));let Bw=0;function Yr(r,e="info",i){const s=`toast-${++Bw}`,l=e==="error"?5e3:3e3;uu.getState().addToast({id:s,message:r,type:e,duration:l}),setTimeout(()=>{uu.getState().removeToast(s)},l)}let Zc=null;function M_(r){if(Zc&&Zc.sampleRate===r.sampleRate)return Zc;const e=Math.floor(r.sampleRate*.05),i=r.createBuffer(1,e,r.sampleRate),s=i.getChannelData(0);for(let l=0;l<e;l++)s[l]=Math.random()*2-1;return Zc=i,i}class zw{ctx=null;masterGain=null;compressor=null;reverb=null;reverbGain=null;dryGain=null;activeVoices=new Map;sustainedNotes=new Set;sustainPedalOn=!1;scheduledNotes=[];_volume=.8;sampleLibrary=new Ow;useSamples=!1;_reverbMix=.3;_roomSize=3.5;_releaseTime=1.5;_brightness=.8;async init(){this.ctx||(this.ctx=new AudioContext({latencyHint:"interactive"}),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-24,this.compressor.knee.value=12,this.compressor.ratio.value=4,this.compressor.attack.value=.003,this.compressor.release.value=.25,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this._volume,this.dryGain=this.ctx.createGain(),this.dryGain.gain.value=1-this._reverbMix,this.reverbGain=this.ctx.createGain(),this.reverbGain.gain.value=this._reverbMix,this.reverb=this.ctx.createConvolver(),this.reverb.buffer=this.createReverbImpulse(this._roomSize,2),this.compressor.connect(this.dryGain),this.compressor.connect(this.reverb),this.reverb.connect(this.reverbGain),this.dryGain.connect(this.masterGain),this.reverbGain.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),M_(this.ctx),this.ctx.state==="suspended"&&await this.ctx.resume(),this.loadSamplesInBackground())}async loadSamplesInBackground(){if(!this.ctx)return;pe.getState().setSampleLoadProgress(.001);try{await this.sampleLibrary.loadSamples(this.ctx,(i,s)=>{const l=i/s;pe.getState().setSampleLoadProgress(l)}),this.sampleLibrary.isLoaded()&&(this.useSamples=!0,pe.getState().setSampleLoadProgress(1),Yr("Piano samples loaded","success"))}catch{pe.getState().setSampleLoadProgress(-1),Yr("Sample loading failed — using FM synthesis","error")}}createReverbImpulse(e,i){const s=this.ctx,l=Math.floor(s.sampleRate*e),c=s.createBuffer(2,l,s.sampleRate);for(let f=0;f<2;f++){const d=c.getChannelData(f);for(let m=0;m<l;m++)d[m]=(Math.random()*2-1)*Math.pow(1-m/l,i)}return c}get currentTime(){return this.ctx?.currentTime??0}setVolume(e){this._volume=e,this.masterGain&&this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.02)}setReverbMix(e){if(this._reverbMix=e,this.reverbGain&&this.dryGain&&this.ctx){const i=this.ctx.currentTime;this.reverbGain.gain.setTargetAtTime(e,i,.05),this.dryGain.gain.setTargetAtTime(1-e,i,.05)}}setRoomSize(e){this._roomSize=e,this.reverb&&this.ctx&&(this.reverb.buffer=this.createReverbImpulse(e,2))}setReleaseTime(e){this._releaseTime=e}setBrightness(e){this._brightness=e}noteOn(e,i=100){if(!this.ctx||!this.compressor)return;this.stopVoice(e,.02);const s=this.createVoice(e,i,this.ctx.currentTime);this.activeVoices.set(e,s)}noteOff(e){if(this.ctx){if(this.sustainPedalOn){this.sustainedNotes.add(e);return}this.releaseVoice(e)}}setSustain(e){if(this.sustainPedalOn=e,!e){for(const i of this.sustainedNotes)this.releaseVoice(i);this.sustainedNotes.clear()}}scheduleNoteOn(e,i,s){if(!this.ctx||!this.compressor)return;const l=this.createVoice(e,i,s);this.scheduledNotes.push({midiNote:e,startTime:s,endTime:0,voice:l})}scheduleNoteOff(e,i){if(this.ctx)for(let s=this.scheduledNotes.length-1;s>=0;s--){const l=this.scheduledNotes[s];if(l.midiNote===e&&l.endTime===0&&l.voice){l.endTime=i,this.releaseVoiceAt(l.voice,i);break}}}stopAll(){if(!this.ctx)return;const e=this.ctx.currentTime;for(const[i]of this.activeVoices)this.stopVoice(i,.05);for(const i of this.scheduledNotes)i.voice&&!i.voice.released&&this.releaseVoiceAt(i.voice,e);this.scheduledNotes=[],this.sustainedNotes.clear()}createVoice(e,i,s){return this.useSamples&&this.sampleLibrary.getBuffer(e)?this.createSampleVoice(e,i,s):this.createFMVoice(e,i,s)}createSampleVoice(e,i,s){const l=this.ctx,c=Math.max(.01,i/127),f=this.sampleLibrary.getBuffer(e),d=l.createBufferSource();d.buffer=f,d.playbackRate.value=1;const m=2e3+this._brightness*18e3,p=l.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(Math.min(m,2e3+c*this._brightness*18e3),s),p.Q.setValueAtTime(.5,s);const g=l.createGain();return g.gain.setValueAtTime(c*.8,s),d.connect(p),p.connect(g),g.connect(this.compressor),d.start(s),{oscillators:[],gains:[],voiceGain:g,noiseSource:null,sampleSource:d,isSampleVoice:!0,releaseTime:0,released:!1}}createFMVoice(e,i,s){const l=this.ctx,c=uw(e),f=Math.max(.01,i/127),d=5e-5*Math.pow(Math.max(0,e-20)/60,2.5),m=Math.min(10,Math.floor(18e3/c)),g=.8+(1-(e-21)/87)*10,v=l.createGain();v.gain.setValueAtTime(f*.25,s),v.connect(this.compressor);const x=[],S=[];for(let A=1;A<=m;A++){const y=c*A*Math.sqrt(1+d*A*A);if(y>19e3)break;const _=l.createOscillator();_.type="sine",_.frequency.setValueAtTime(y,s),_.detune.setValueAtTime((Math.random()-.5)*3,s);const T=l.createGain(),N=1/Math.pow(A,1.2+(1-f)*.5),R=g/Math.pow(A,.4);T.gain.setValueAtTime(N,s),T.gain.setTargetAtTime(N*.7,s+.001,.01),T.gain.setTargetAtTime(1e-4,s+.02,R*.5),_.connect(T),T.connect(v),_.start(s),_.stop(s+R*4),x.push(_),S.push(T)}let E=null;try{E=l.createBufferSource(),E.buffer=M_(l);const A=l.createBiquadFilter();A.type="bandpass",A.frequency.setValueAtTime(Math.min(c*5,12e3),s),A.Q.setValueAtTime(1.5,s);const y=l.createGain();y.gain.setValueAtTime(f*.12,s),y.gain.exponentialRampToValueAtTime(1e-4,s+.04),E.connect(A),A.connect(y),y.connect(v),E.start(s)}catch{E=null}return{oscillators:x,gains:S,voiceGain:v,noiseSource:E,sampleSource:null,isSampleVoice:!1,releaseTime:0,released:!1}}releaseVoice(e){const i=this.activeVoices.get(e);if(!i||i.released)return;const s=this.ctx.currentTime;this.releaseVoiceAt(i,s),this.activeVoices.delete(e)}releaseVoiceAt(e,i){if(!e.released)if(e.released=!0,e.releaseTime=i,e.isSampleVoice){const s=this._releaseTime;if(e.voiceGain.gain.cancelScheduledValues(i),e.voiceGain.gain.setValueAtTime(e.voiceGain.gain.value,i),e.voiceGain.gain.setTargetAtTime(0,i,s*.35),e.sampleSource)try{e.sampleSource.stop(i+s*2.5)}catch{}}else{e.voiceGain.gain.cancelScheduledValues(i),e.voiceGain.gain.setValueAtTime(e.voiceGain.gain.value,i),e.voiceGain.gain.setTargetAtTime(0,i,.3*.3);for(const l of e.oscillators)try{l.stop(i+.3*2)}catch{}}}stopVoice(e,i){const s=this.activeVoices.get(e);if(!s)return;const l=this.ctx.currentTime;if(s.voiceGain.gain.cancelScheduledValues(l),s.voiceGain.gain.setValueAtTime(s.voiceGain.gain.value,l),s.voiceGain.gain.linearRampToValueAtTime(0,l+i),s.isSampleVoice){if(s.sampleSource)try{s.sampleSource.stop(l+i+.01)}catch{}}else for(const c of s.oscillators)try{c.stop(l+i+.01)}catch{}s.released=!0,this.activeVoices.delete(e)}playClick(e,i){if(!this.ctx||!this.compressor)return;const s=this.ctx.createOscillator();s.frequency.setValueAtTime(i?1500:1e3,e),s.type="sine";const l=this.ctx.createGain();l.gain.setValueAtTime(i?.15:.08,e),l.gain.exponentialRampToValueAtTime(1e-4,e+.05),s.connect(l),l.connect(this.compressor),s.start(e),s.stop(e+.06)}dispose(){this.stopAll(),this.ctx&&(this.ctx.close(),this.ctx=null),this.masterGain=null,this.compressor=null}}const it=new zw,Tx="piano-studio-settings",Ap=1,Qc={_version:Ap,volume:.8,reverbMix:.3,roomSize:3.5,releaseTime:1.5,brightness:.8,metronomeOn:!1,cameraPreset:"default",muteLeft:!1,muteRight:!1,octaveShift:0,waterfallLookAhead:4,waterfallHeightPct:35,waterfallShowNoteNames:!0,waterfallShowPastTrail:!0,waterfallVelocityOpacity:!0,activePresetId:null,customPresets:[]};function Ax(){try{const r=localStorage.getItem(Tx);if(!r)return{...Qc};const e=JSON.parse(r);return e._version!==Ap?{...Qc}:{...Qc,...e}}catch{return{...Qc}}}let rd=null;function Dn(r){rd&&clearTimeout(rd),rd=setTimeout(()=>{try{const i={...Ax(),...r,_version:Ap};localStorage.setItem(Tx,JSON.stringify(i))}catch{}},300)}function wx(){const r=pe.getState();it.setVolume(r.volume),it.setReverbMix(r.reverbMix),it.setRoomSize(r.roomSize),it.setReleaseTime(r.releaseTime),it.setBrightness(r.brightness)}function Hw(){const r=xt.useCallback(e=>{if(e.button!==0)return;const i=e.currentTarget;i.setPointerCapture(e.pointerId);const s=c=>{const f=Math.max(20,Math.min(60,c.clientY/window.innerHeight*100));pe.getState().setWaterfallHeightPct(f)},l=()=>{i.removeEventListener("pointermove",s),i.removeEventListener("pointerup",l),Dn({waterfallHeightPct:pe.getState().waterfallHeightPct})};i.addEventListener("pointermove",s),i.addEventListener("pointerup",l)},[]);return H.jsx("div",{onPointerDown:r,className:"absolute left-0 right-0",style:{height:6,cursor:"ns-resize",zIndex:6,bottom:0},children:H.jsx("div",{className:"mx-auto w-12 h-1 rounded-full bg-white/20 mt-2.5"})})}function Gw(){const r=xt.useRef(null),e=xt.useRef(null),i=xt.useRef(null),s=xt.useRef(!1),l=pe(_=>_.activeNotes),c=pe(_=>_.timeline),f=pe(_=>_.cameraPreset),d=pe(_=>_.waterfallHeightPct),m=pe(_=>_.waterfallLookAhead),p=pe(_=>_.waterfallShowNoteNames),g=pe(_=>_.waterfallShowPastTrail),v=pe(_=>_.waterfallVelocityOpacity),x=pe(_=>_.fileInfo),S=c&&c.length>0;xt.useEffect(()=>{const _=r.current;if(!_)return;Ii.init(_);const T=()=>{const N=window.innerWidth,R=window.innerHeight;Ii.resize(N,R)};return T(),window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T),Ii.dispose()}},[]),xt.useEffect(()=>{const _=e.current;if(!_||!S)return;s.current||(as.init(_),s.current=!0);const T=()=>{const L=window.innerWidth,B=pe.getState().waterfallHeightPct,I=Math.floor(window.innerHeight*B/100),Z=window.devicePixelRatio||1;as.resize(Math.floor(L*Z),Math.floor(I*Z)),_.style.width=`${L}px`,_.style.height=`${I}px`};T(),as.setNotes(c),window.addEventListener("resize",T);let N;const R=()=>{N=requestAnimationFrame(R);const L=pe.getState().playbackPosition,B=pe.getState().playbackState==="playing";as.update(L,B)};return N=requestAnimationFrame(R),()=>{window.removeEventListener("resize",T),cancelAnimationFrame(N)}},[S,c]),xt.useEffect(()=>{const _=e.current;if(!_||!S)return;const T=window.innerWidth,N=Math.floor(window.innerHeight*d/100),R=window.devicePixelRatio||1;as.resize(Math.floor(T*R),Math.floor(N*R)),_.style.width=`${T}px`,_.style.height=`${N}px`},[d,S]),xt.useEffect(()=>{as.setVisibleWindow(m)},[m]),xt.useEffect(()=>{as.setConfig({showNoteNames:p,showPastTrail:g,velocityOpacity:v})},[p,g,v]),xt.useEffect(()=>{if(x){const _=x.timeSignature.split("/"),T=parseInt(_[0],10)||4;as.setMusicInfo(x.tempo,T)}},[x]),xt.useEffect(()=>{for(let _=21;_<=108;_++)l.has(_)||Ii.keyUp(_);for(const[_,T]of l)Ii.keyDown(_,T.hand==="user"?void 0:T.hand)},[l]),xt.useEffect(()=>{Ii.setCameraPreset(f)},[f]);const E=xt.useCallback(async _=>{if(_.button!==0)return;await it.init(),pe.getState().setAudioReady(!0);const T=Ii.getKeyAtPosition(_.clientX,_.clientY);if(T!==null){const N=Ii.getVelocityFromHit(_.clientX,_.clientY);i.current=T,it.noteOn(T,N),pe.getState().noteOn(T,N,void 0,"user")}},[]),A=xt.useCallback(_=>{if(i.current===null)return;const T=Ii.getKeyAtPosition(_.clientX,_.clientY);if(T!==null&&T!==i.current){it.noteOff(i.current),pe.getState().noteOff(i.current);const N=Ii.getVelocityFromHit(_.clientX,_.clientY);i.current=T,it.noteOn(T,N),pe.getState().noteOn(T,N,void 0,"user")}},[]),y=xt.useCallback(()=>{i.current!==null&&(it.noteOff(i.current),pe.getState().noteOff(i.current),i.current=null)},[]);return H.jsxs("div",{className:"absolute inset-0",children:[H.jsxs("div",{className:"absolute top-0 left-0 w-full",style:{height:`${d}vh`,zIndex:5,display:S?"block":"none"},children:[H.jsx("canvas",{ref:e,className:"absolute top-0 left-0 w-full h-full pointer-events-none"}),H.jsx(Hw,{})]}),H.jsx("canvas",{ref:r,className:"absolute inset-0 w-full h-full",style:{zIndex:1},onPointerDown:E,onPointerMove:A,onPointerUp:y,onPointerLeave:y})]})}var Ls={},Jc={},od,b_;function Vw(){if(b_)return od;b_=1;function r(l){var c=new s(l),f=c.readChunk();if(f.id!="MThd")throw"Bad MIDI file.  Expected 'MHdr', got: '"+f.id+"'";for(var d=e(f.data),m=[],p=0;!c.eof()&&p<d.numTracks;p++){var g=c.readChunk();if(g.id!="MTrk")throw"Bad MIDI file.  Expected 'MTrk', got: '"+g.id+"'";var v=i(g.data);m.push(v)}return{header:d,tracks:m}}function e(l){var c=new s(l),f=c.readUInt16(),d=c.readUInt16(),m={format:f,numTracks:d},p=c.readUInt16();return p&32768?(m.framesPerSecond=256-(p>>8),m.ticksPerFrame=p&255):m.ticksPerBeat=p,m}function i(l){for(var c=new s(l),f=[];!c.eof();){var d=p();f.push(d)}return f;var m;function p(){var g={};g.deltaTime=c.readVarInt();var v=c.readUInt8();if((v&240)===240)if(v===255){g.meta=!0;var x=c.readUInt8(),S=c.readVarInt();switch(x){case 0:if(g.type="sequenceNumber",S!==2)throw"Expected length for sequenceNumber event is 2, got "+S;return g.number=c.readUInt16(),g;case 1:return g.type="text",g.text=c.readString(S),g;case 2:return g.type="copyrightNotice",g.text=c.readString(S),g;case 3:return g.type="trackName",g.text=c.readString(S),g;case 4:return g.type="instrumentName",g.text=c.readString(S),g;case 5:return g.type="lyrics",g.text=c.readString(S),g;case 6:return g.type="marker",g.text=c.readString(S),g;case 7:return g.type="cuePoint",g.text=c.readString(S),g;case 32:if(g.type="channelPrefix",S!=1)throw"Expected length for channelPrefix event is 1, got "+S;return g.channel=c.readUInt8(),g;case 33:if(g.type="portPrefix",S!=1)throw"Expected length for portPrefix event is 1, got "+S;return g.port=c.readUInt8(),g;case 47:if(g.type="endOfTrack",S!=0)throw"Expected length for endOfTrack event is 0, got "+S;return g;case 81:if(g.type="setTempo",S!=3)throw"Expected length for setTempo event is 3, got "+S;return g.microsecondsPerBeat=c.readUInt24(),g;case 84:if(g.type="smpteOffset",S!=5)throw"Expected length for smpteOffset event is 5, got "+S;var E=c.readUInt8(),A={0:24,32:25,64:29,96:30};return g.frameRate=A[E&96],g.hour=E&31,g.min=c.readUInt8(),g.sec=c.readUInt8(),g.frame=c.readUInt8(),g.subFrame=c.readUInt8(),g;case 88:if(g.type="timeSignature",S!=2&&S!=4)throw"Expected length for timeSignature event is 4 or 2, got "+S;return g.numerator=c.readUInt8(),g.denominator=1<<c.readUInt8(),S===4?(g.metronome=c.readUInt8(),g.thirtyseconds=c.readUInt8()):(g.metronome=36,g.thirtyseconds=8),g;case 89:if(g.type="keySignature",S!=2)throw"Expected length for keySignature event is 2, got "+S;return g.key=c.readInt8(),g.scale=c.readUInt8(),g;case 127:return g.type="sequencerSpecific",g.data=c.readBytes(S),g;default:return g.type="unknownMeta",g.data=c.readBytes(S),g.metatypeByte=x,g}}else if(v==240){g.type="sysEx";var S=c.readVarInt();return g.data=c.readBytes(S),g}else if(v==247){g.type="endSysEx";var S=c.readVarInt();return g.data=c.readBytes(S),g}else throw"Unrecognised MIDI event type byte: "+v;else{var y;if((v&128)===0){if(m===null)throw"Running status byte encountered before status byte";y=v,v=m,g.running=!0}else y=c.readUInt8(),m=v;var _=v>>4;switch(g.channel=v&15,_){case 8:return g.type="noteOff",g.noteNumber=y,g.velocity=c.readUInt8(),g;case 9:var T=c.readUInt8();return g.type=T===0?"noteOff":"noteOn",g.noteNumber=y,g.velocity=T,T===0&&(g.byte9=!0),g;case 10:return g.type="noteAftertouch",g.noteNumber=y,g.amount=c.readUInt8(),g;case 11:return g.type="controller",g.controllerType=y,g.value=c.readUInt8(),g;case 12:return g.type="programChange",g.programNumber=y,g;case 13:return g.type="channelAftertouch",g.amount=y,g;case 14:return g.type="pitchBend",g.value=y+(c.readUInt8()<<7)-8192,g;default:throw"Unrecognised MIDI event type: "+_}}}}function s(l){this.buffer=l,this.bufferLen=this.buffer.length,this.pos=0}return s.prototype.eof=function(){return this.pos>=this.bufferLen},s.prototype.readUInt8=function(){var l=this.buffer[this.pos];return this.pos+=1,l},s.prototype.readInt8=function(){var l=this.readUInt8();return l&128?l-256:l},s.prototype.readUInt16=function(){var l=this.readUInt8(),c=this.readUInt8();return(l<<8)+c},s.prototype.readInt16=function(){var l=this.readUInt16();return l&32768?l-65536:l},s.prototype.readUInt24=function(){var l=this.readUInt8(),c=this.readUInt8(),f=this.readUInt8();return(l<<16)+(c<<8)+f},s.prototype.readInt24=function(){var l=this.readUInt24();return l&8388608?l-16777216:l},s.prototype.readUInt32=function(){var l=this.readUInt8(),c=this.readUInt8(),f=this.readUInt8(),d=this.readUInt8();return(l<<24)+(c<<16)+(f<<8)+d},s.prototype.readBytes=function(l){var c=this.buffer.slice(this.pos,this.pos+l);return this.pos+=l,c},s.prototype.readString=function(l){var c=this.readBytes(l);return String.fromCharCode.apply(null,c)},s.prototype.readVarInt=function(){for(var l=0;!this.eof();){var c=this.readUInt8();if(c&128)l+=c&127,l<<=7;else return l+c}return l},s.prototype.readChunk=function(){var l=this.readString(4),c=this.readUInt32(),f=this.readBytes(c);return{id:l,length:c,data:f}},od=r,od}var ld,E_;function kw(){if(E_)return ld;E_=1;function r(c,f){if(typeof c!="object")throw"Invalid MIDI data";f=f||{};var d=c.header||{},m=c.tracks||[],p,g=m.length,v=new l;for(e(v,d,g),p=0;p<g;p++)i(v,m[p],f);return v.buffer}function e(c,f,d){var m=f.format==null?1:f.format,p=128;f.timeDivision?p=f.timeDivision:f.ticksPerFrame&&f.framesPerSecond?p=-(f.framesPerSecond&255)<<8|f.ticksPerFrame&255:f.ticksPerBeat&&(p=f.ticksPerBeat&32767);var g=new l;g.writeUInt16(m),g.writeUInt16(d),g.writeUInt16(p),c.writeChunk("MThd",g.buffer)}function i(c,f,d){var m=new l,p,g=f.length,v=null;for(p=0;p<g;p++)(d.running===!1||!d.running&&!f[p].running)&&(v=null),v=s(m,f[p],v,d.useByte9ForNoteOff);c.writeChunk("MTrk",m.buffer)}function s(c,f,d,m){var p=f.type,g=f.deltaTime,v=f.text||"",x=f.data||[],S=null;switch(c.writeVarInt(g),p){case"sequenceNumber":c.writeUInt8(255),c.writeUInt8(0),c.writeVarInt(2),c.writeUInt16(f.number);break;case"text":c.writeUInt8(255),c.writeUInt8(1),c.writeVarInt(v.length),c.writeString(v);break;case"copyrightNotice":c.writeUInt8(255),c.writeUInt8(2),c.writeVarInt(v.length),c.writeString(v);break;case"trackName":c.writeUInt8(255),c.writeUInt8(3),c.writeVarInt(v.length),c.writeString(v);break;case"instrumentName":c.writeUInt8(255),c.writeUInt8(4),c.writeVarInt(v.length),c.writeString(v);break;case"lyrics":c.writeUInt8(255),c.writeUInt8(5),c.writeVarInt(v.length),c.writeString(v);break;case"marker":c.writeUInt8(255),c.writeUInt8(6),c.writeVarInt(v.length),c.writeString(v);break;case"cuePoint":c.writeUInt8(255),c.writeUInt8(7),c.writeVarInt(v.length),c.writeString(v);break;case"channelPrefix":c.writeUInt8(255),c.writeUInt8(32),c.writeVarInt(1),c.writeUInt8(f.channel);break;case"portPrefix":c.writeUInt8(255),c.writeUInt8(33),c.writeVarInt(1),c.writeUInt8(f.port);break;case"endOfTrack":c.writeUInt8(255),c.writeUInt8(47),c.writeVarInt(0);break;case"setTempo":c.writeUInt8(255),c.writeUInt8(81),c.writeVarInt(3),c.writeUInt24(f.microsecondsPerBeat);break;case"smpteOffset":c.writeUInt8(255),c.writeUInt8(84),c.writeVarInt(5);var E={24:0,25:32,29:64,30:96},A=f.hour&31|E[f.frameRate];c.writeUInt8(A),c.writeUInt8(f.min),c.writeUInt8(f.sec),c.writeUInt8(f.frame),c.writeUInt8(f.subFrame);break;case"timeSignature":c.writeUInt8(255),c.writeUInt8(88),c.writeVarInt(4),c.writeUInt8(f.numerator);var y=Math.floor(Math.log(f.denominator)/Math.LN2)&255;c.writeUInt8(y),c.writeUInt8(f.metronome),c.writeUInt8(f.thirtyseconds||8);break;case"keySignature":c.writeUInt8(255),c.writeUInt8(89),c.writeVarInt(2),c.writeInt8(f.key),c.writeUInt8(f.scale);break;case"sequencerSpecific":c.writeUInt8(255),c.writeUInt8(127),c.writeVarInt(x.length),c.writeBytes(x);break;case"unknownMeta":f.metatypeByte!=null&&(c.writeUInt8(255),c.writeUInt8(f.metatypeByte),c.writeVarInt(x.length),c.writeBytes(x));break;case"sysEx":c.writeUInt8(240),c.writeVarInt(x.length),c.writeBytes(x);break;case"endSysEx":c.writeUInt8(247),c.writeVarInt(x.length),c.writeBytes(x);break;case"noteOff":var _=m!==!1&&f.byte9||m&&f.velocity==0?144:128;S=_|f.channel,S!==d&&c.writeUInt8(S),c.writeUInt8(f.noteNumber),c.writeUInt8(f.velocity);break;case"noteOn":S=144|f.channel,S!==d&&c.writeUInt8(S),c.writeUInt8(f.noteNumber),c.writeUInt8(f.velocity);break;case"noteAftertouch":S=160|f.channel,S!==d&&c.writeUInt8(S),c.writeUInt8(f.noteNumber),c.writeUInt8(f.amount);break;case"controller":S=176|f.channel,S!==d&&c.writeUInt8(S),c.writeUInt8(f.controllerType),c.writeUInt8(f.value);break;case"programChange":S=192|f.channel,S!==d&&c.writeUInt8(S),c.writeUInt8(f.programNumber);break;case"channelAftertouch":S=208|f.channel,S!==d&&c.writeUInt8(S),c.writeUInt8(f.amount);break;case"pitchBend":S=224|f.channel,S!==d&&c.writeUInt8(S);var T=8192+f.value,N=T&127,R=T>>7&127;c.writeUInt8(N),c.writeUInt8(R);break;default:throw"Unrecognized event type: "+p}return S}function l(){this.buffer=[]}return l.prototype.writeUInt8=function(c){this.buffer.push(c&255)},l.prototype.writeInt8=l.prototype.writeUInt8,l.prototype.writeUInt16=function(c){var f=c>>8&255,d=c&255;this.writeUInt8(f),this.writeUInt8(d)},l.prototype.writeInt16=l.prototype.writeUInt16,l.prototype.writeUInt24=function(c){var f=c>>16&255,d=c>>8&255,m=c&255;this.writeUInt8(f),this.writeUInt8(d),this.writeUInt8(m)},l.prototype.writeInt24=l.prototype.writeUInt24,l.prototype.writeUInt32=function(c){var f=c>>24&255,d=c>>16&255,m=c>>8&255,p=c&255;this.writeUInt8(f),this.writeUInt8(d),this.writeUInt8(m),this.writeUInt8(p)},l.prototype.writeInt32=l.prototype.writeUInt32,l.prototype.writeBytes=function(c){this.buffer=this.buffer.concat(Array.prototype.slice.call(c,0))},l.prototype.writeString=function(c){var f,d=c.length,m=[];for(f=0;f<d;f++)m.push(c.codePointAt(f));this.writeBytes(m)},l.prototype.writeVarInt=function(c){if(c<0)throw"Cannot write negative variable-length integer";if(c<=127)this.writeUInt8(c);else{var f=c,d=[];for(d.push(f&127),f>>=7;f;){var m=f&127|128;d.push(m),f>>=7}this.writeBytes(d.reverse())}},l.prototype.writeChunk=function(c,f){this.writeString(c),this.writeUInt32(f.length),this.writeBytes(f)},ld=r,ld}var T_;function Cx(){return T_||(T_=1,Jc.parseMidi=Vw(),Jc.writeMidi=kw()),Jc}var cd={},Os={},A_;function Rx(){if(A_)return Os;A_=1,Object.defineProperty(Os,"__esModule",{value:!0}),Os.insert=Os.search=void 0;function r(i,s,l){l===void 0&&(l="ticks");var c=0,f=i.length,d=f;if(f>0&&i[f-1][l]<=s)return f-1;for(;c<d;){var m=Math.floor(c+(d-c)/2),p=i[m],g=i[m+1];if(p[l]===s){for(var v=m;v<i.length;v++){var x=i[v];x[l]===s&&(m=v)}return m}else{if(p[l]<s&&g[l]>s)return m;p[l]>s?d=m:p[l]<s&&(c=m+1)}}return-1}Os.search=r;function e(i,s,l){if(l===void 0&&(l="ticks"),i.length){var c=r(i,s[l],l);i.splice(c+1,0,s)}else i.push(s)}return Os.insert=e,Os}var w_;function op(){return w_||(w_=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Header=r.keySignatureKeys=void 0;var e=Rx(),i=new WeakMap;r.keySignatureKeys=["Cb","Gb","Db","Ab","Eb","Bb","F","C","G","D","A","E","B","F#","C#"];var s=(function(){function l(c){var f=this;if(this.tempos=[],this.timeSignatures=[],this.keySignatures=[],this.meta=[],this.name="",i.set(this,480),c){i.set(this,c.header.ticksPerBeat),c.tracks.forEach(function(m){m.forEach(function(p){p.meta&&(p.type==="timeSignature"?f.timeSignatures.push({ticks:p.absoluteTime,timeSignature:[p.numerator,p.denominator]}):p.type==="setTempo"?f.tempos.push({bpm:6e7/p.microsecondsPerBeat,ticks:p.absoluteTime}):p.type==="keySignature"&&f.keySignatures.push({key:r.keySignatureKeys[p.key+7],scale:p.scale===0?"major":"minor",ticks:p.absoluteTime}))})});var d=0;c.tracks[0].forEach(function(m){d+=m.deltaTime,m.meta&&(m.type==="trackName"?f.name=m.text:(m.type==="text"||m.type==="cuePoint"||m.type==="marker"||m.type==="lyrics")&&f.meta.push({text:m.text,ticks:d,type:m.type}))}),this.update()}}return l.prototype.update=function(){var c=this,f=0,d=0;this.tempos.sort(function(m,p){return m.ticks-p.ticks}),this.tempos.forEach(function(m,p){var g=p>0?c.tempos[p-1].bpm:c.tempos[0].bpm,v=m.ticks/c.ppq-d,x=60/g*v;m.time=x+f,f=m.time,d+=v}),this.timeSignatures.sort(function(m,p){return m.ticks-p.ticks}),this.timeSignatures.forEach(function(m,p){var g=p>0?c.timeSignatures[p-1]:c.timeSignatures[0],v=(m.ticks-g.ticks)/c.ppq,x=v/g.timeSignature[0]/(g.timeSignature[1]/4);g.measures=g.measures||0,m.measures=x+g.measures})},l.prototype.ticksToSeconds=function(c){var f=(0,e.search)(this.tempos,c);if(f!==-1){var d=this.tempos[f],m=d.time,p=(c-d.ticks)/this.ppq;return m+60/d.bpm*p}else{var g=c/this.ppq;return 60/120*g}},l.prototype.ticksToMeasures=function(c){var f=(0,e.search)(this.timeSignatures,c);if(f!==-1){var d=this.timeSignatures[f],m=(c-d.ticks)/this.ppq;return d.measures+m/(d.timeSignature[0]/d.timeSignature[1])/4}else return c/this.ppq/4},Object.defineProperty(l.prototype,"ppq",{get:function(){return i.get(this)},enumerable:!1,configurable:!0}),l.prototype.secondsToTicks=function(c){var f=(0,e.search)(this.tempos,c,"time");if(f!==-1){var d=this.tempos[f],m=d.time,p=c-m,g=p/(60/d.bpm);return Math.round(d.ticks+g*this.ppq)}else{var v=c/.5;return Math.round(v*this.ppq)}},l.prototype.toJSON=function(){return{keySignatures:this.keySignatures,meta:this.meta,name:this.name,ppq:this.ppq,tempos:this.tempos.map(function(c){return{bpm:c.bpm,ticks:c.ticks}}),timeSignatures:this.timeSignatures}},l.prototype.fromJSON=function(c){this.name=c.name,this.tempos=c.tempos.map(function(f){return Object.assign({},f)}),this.timeSignatures=c.timeSignatures.map(function(f){return Object.assign({},f)}),this.keySignatures=c.keySignatures.map(function(f){return Object.assign({},f)}),this.meta=c.meta.map(function(f){return Object.assign({},f)}),i.set(this,c.ppq),this.update()},l.prototype.setTempo=function(c){this.tempos=[{bpm:c,ticks:0}],this.update()},l})();r.Header=s})(cd)),cd}var el={},ud={},C_;function Dx(){return C_||(C_=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.ControlChange=r.controlChangeIds=r.controlChangeNames=void 0,r.controlChangeNames={1:"modulationWheel",2:"breath",4:"footController",5:"portamentoTime",7:"volume",8:"balance",10:"pan",64:"sustain",65:"portamentoTime",66:"sostenuto",67:"softPedal",68:"legatoFootswitch",84:"portamentoControl"},r.controlChangeIds=Object.keys(r.controlChangeNames).reduce(function(l,c){return l[r.controlChangeNames[c]]=c,l},{});var e=new WeakMap,i=new WeakMap,s=(function(){function l(c,f){e.set(this,f),i.set(this,c.controllerType),this.ticks=c.absoluteTime,this.value=c.value}return Object.defineProperty(l.prototype,"number",{get:function(){return i.get(this)},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"name",{get:function(){return r.controlChangeNames[this.number]?r.controlChangeNames[this.number]:null},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"time",{get:function(){var c=e.get(this);return c.ticksToSeconds(this.ticks)},set:function(c){var f=e.get(this);this.ticks=f.secondsToTicks(c)},enumerable:!1,configurable:!0}),l.prototype.toJSON=function(){return{number:this.number,ticks:this.ticks,time:this.time,value:this.value}},l})();r.ControlChange=s})(ud)),ud}var tl={},R_;function Xw(){if(R_)return tl;R_=1,Object.defineProperty(tl,"__esModule",{value:!0}),tl.createControlChanges=void 0;var r=Dx();function e(){return new Proxy({},{get:function(i,s){if(i[s])return i[s];if(r.controlChangeIds.hasOwnProperty(s))return i[r.controlChangeIds[s]]},set:function(i,s,l){return r.controlChangeIds.hasOwnProperty(s)?i[r.controlChangeIds[s]]=l:i[s]=l,!0}})}return tl.createControlChanges=e,tl}var nl={},D_;function Ww(){if(D_)return nl;D_=1,Object.defineProperty(nl,"__esModule",{value:!0}),nl.PitchBend=void 0;var r=new WeakMap,e=(function(){function i(s,l){r.set(this,l),this.ticks=s.absoluteTime,this.value=s.value}return Object.defineProperty(i.prototype,"time",{get:function(){var s=r.get(this);return s.ticksToSeconds(this.ticks)},set:function(s){var l=r.get(this);this.ticks=l.secondsToTicks(s)},enumerable:!1,configurable:!0}),i.prototype.toJSON=function(){return{ticks:this.ticks,time:this.time,value:this.value}},i})();return nl.PitchBend=e,nl}var il={},va={},N_;function qw(){return N_||(N_=1,Object.defineProperty(va,"__esModule",{value:!0}),va.DrumKitByPatchID=va.InstrumentFamilyByID=va.instrumentByPatchID=void 0,va.instrumentByPatchID=["acoustic grand piano","bright acoustic piano","electric grand piano","honky-tonk piano","electric piano 1","electric piano 2","harpsichord","clavi","celesta","glockenspiel","music box","vibraphone","marimba","xylophone","tubular bells","dulcimer","drawbar organ","percussive organ","rock organ","church organ","reed organ","accordion","harmonica","tango accordion","acoustic guitar (nylon)","acoustic guitar (steel)","electric guitar (jazz)","electric guitar (clean)","electric guitar (muted)","overdriven guitar","distortion guitar","guitar harmonics","acoustic bass","electric bass (finger)","electric bass (pick)","fretless bass","slap bass 1","slap bass 2","synth bass 1","synth bass 2","violin","viola","cello","contrabass","tremolo strings","pizzicato strings","orchestral harp","timpani","string ensemble 1","string ensemble 2","synthstrings 1","synthstrings 2","choir aahs","voice oohs","synth voice","orchestra hit","trumpet","trombone","tuba","muted trumpet","french horn","brass section","synthbrass 1","synthbrass 2","soprano sax","alto sax","tenor sax","baritone sax","oboe","english horn","bassoon","clarinet","piccolo","flute","recorder","pan flute","blown bottle","shakuhachi","whistle","ocarina","lead 1 (square)","lead 2 (sawtooth)","lead 3 (calliope)","lead 4 (chiff)","lead 5 (charang)","lead 6 (voice)","lead 7 (fifths)","lead 8 (bass + lead)","pad 1 (new age)","pad 2 (warm)","pad 3 (polysynth)","pad 4 (choir)","pad 5 (bowed)","pad 6 (metallic)","pad 7 (halo)","pad 8 (sweep)","fx 1 (rain)","fx 2 (soundtrack)","fx 3 (crystal)","fx 4 (atmosphere)","fx 5 (brightness)","fx 6 (goblins)","fx 7 (echoes)","fx 8 (sci-fi)","sitar","banjo","shamisen","koto","kalimba","bag pipe","fiddle","shanai","tinkle bell","agogo","steel drums","woodblock","taiko drum","melodic tom","synth drum","reverse cymbal","guitar fret noise","breath noise","seashore","bird tweet","telephone ring","helicopter","applause","gunshot"],va.InstrumentFamilyByID=["piano","chromatic percussion","organ","guitar","bass","strings","ensemble","brass","reed","pipe","synth lead","synth pad","synth effects","world","percussive","sound effects"],va.DrumKitByPatchID={0:"standard kit",8:"room kit",16:"power kit",24:"electronic kit",25:"tr-808 kit",32:"jazz kit",40:"brush kit",48:"orchestra kit",56:"sound fx kit"}),va}var U_;function jw(){if(U_)return il;U_=1,Object.defineProperty(il,"__esModule",{value:!0}),il.Instrument=void 0;var r=qw(),e=new WeakMap,i=(function(){function s(l,c){if(this.number=0,e.set(this,c),this.number=0,l){var f=l.find(function(d){return d.type==="programChange"});f&&(this.number=f.programNumber)}}return Object.defineProperty(s.prototype,"name",{get:function(){return this.percussion?r.DrumKitByPatchID[this.number]:r.instrumentByPatchID[this.number]},set:function(l){var c=r.instrumentByPatchID.indexOf(l);c!==-1&&(this.number=c)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"family",{get:function(){return this.percussion?"drums":r.InstrumentFamilyByID[Math.floor(this.number/8)]},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"percussion",{get:function(){var l=e.get(this);return l.channel===9},enumerable:!1,configurable:!0}),s.prototype.toJSON=function(){return{family:this.family,number:this.number,name:this.name}},s.prototype.fromJSON=function(l){this.number=l.number},s})();return il.Instrument=i,il}var al={},L_;function Yw(){if(L_)return al;L_=1,Object.defineProperty(al,"__esModule",{value:!0}),al.Note=void 0;function r(f){var d=Math.floor(f/12)-1;return e(f)+d.toString()}function e(f){var d=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],m=f%12;return d[m]}function i(f){var d=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];return d.indexOf(f)}var s=(function(){var f=/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,d={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13};return function(m){var p=f.exec(m),g=p[1],v=p[2],x=d[g.toLowerCase()];return x+(parseInt(v,10)+1)*12}})(),l=new WeakMap,c=(function(){function f(d,m,p){l.set(this,p),this.midi=d.midi,this.velocity=d.velocity,this.noteOffVelocity=m.velocity,this.ticks=d.ticks,this.durationTicks=m.ticks-d.ticks}return Object.defineProperty(f.prototype,"name",{get:function(){return r(this.midi)},set:function(d){this.midi=s(d)},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"octave",{get:function(){return Math.floor(this.midi/12)-1},set:function(d){var m=d-this.octave;this.midi+=m*12},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"pitch",{get:function(){return e(this.midi)},set:function(d){this.midi=12*(this.octave+1)+i(d)},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"duration",{get:function(){var d=l.get(this);return d.ticksToSeconds(this.ticks+this.durationTicks)-d.ticksToSeconds(this.ticks)},set:function(d){var m=l.get(this),p=m.secondsToTicks(this.time+d);this.durationTicks=p-this.ticks},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"time",{get:function(){var d=l.get(this);return d.ticksToSeconds(this.ticks)},set:function(d){var m=l.get(this);this.ticks=m.secondsToTicks(d)},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"bars",{get:function(){var d=l.get(this);return d.ticksToMeasures(this.ticks)},enumerable:!1,configurable:!0}),f.prototype.toJSON=function(){return{duration:this.duration,durationTicks:this.durationTicks,midi:this.midi,name:this.name,ticks:this.ticks,time:this.time,velocity:this.velocity}},f})();return al.Note=c,al}var O_;function P_(){if(O_)return el;O_=1,Object.defineProperty(el,"__esModule",{value:!0}),el.Track=void 0;var r=Rx(),e=Dx(),i=Xw(),s=Ww(),l=jw(),c=Yw(),f=new WeakMap,d=(function(){function m(p,g){var v=this;if(this.name="",this.notes=[],this.controlChanges=(0,i.createControlChanges)(),this.pitchBends=[],f.set(this,g),p){var x=p.find(function(R){return R.type==="trackName"});this.name=x?x.text:""}if(this.instrument=new l.Instrument(p,this),this.channel=0,p){for(var S=p.filter(function(R){return R.type==="noteOn"}),E=p.filter(function(R){return R.type==="noteOff"}),A=function(){var R=S.shift();y.channel=R.channel;var L=E.findIndex(function(I){return I.noteNumber===R.noteNumber&&I.absoluteTime>=R.absoluteTime});if(L!==-1){var B=E.splice(L,1)[0];y.addNote({durationTicks:B.absoluteTime-R.absoluteTime,midi:R.noteNumber,noteOffVelocity:B.velocity/127,ticks:R.absoluteTime,velocity:R.velocity/127})}},y=this;S.length;)A();var _=p.filter(function(R){return R.type==="controller"});_.forEach(function(R){v.addCC({number:R.controllerType,ticks:R.absoluteTime,value:R.value/127})});var T=p.filter(function(R){return R.type==="pitchBend"});T.forEach(function(R){v.addPitchBend({ticks:R.absoluteTime,value:R.value/Math.pow(2,13)})});var N=p.find(function(R){return R.type==="endOfTrack"});this.endOfTrackTicks=N!==void 0?N.absoluteTime:void 0}}return m.prototype.addNote=function(p){var g=f.get(this),v=new c.Note({midi:0,ticks:0,velocity:1},{ticks:0,velocity:0},g);return Object.assign(v,p),(0,r.insert)(this.notes,v,"ticks"),this},m.prototype.addCC=function(p){var g=f.get(this),v=new e.ControlChange({controllerType:p.number},g);return delete p.number,Object.assign(v,p),Array.isArray(this.controlChanges[v.number])||(this.controlChanges[v.number]=[]),(0,r.insert)(this.controlChanges[v.number],v,"ticks"),this},m.prototype.addPitchBend=function(p){var g=f.get(this),v=new s.PitchBend({},g);return Object.assign(v,p),(0,r.insert)(this.pitchBends,v,"ticks"),this},Object.defineProperty(m.prototype,"duration",{get:function(){if(!this.notes.length)return 0;for(var p=this.notes[this.notes.length-1].time+this.notes[this.notes.length-1].duration,g=0;g<this.notes.length-1;g++){var v=this.notes[g].time+this.notes[g].duration;p<v&&(p=v)}return p},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"durationTicks",{get:function(){if(!this.notes.length)return 0;for(var p=this.notes[this.notes.length-1].ticks+this.notes[this.notes.length-1].durationTicks,g=0;g<this.notes.length-1;g++){var v=this.notes[g].ticks+this.notes[g].durationTicks;p<v&&(p=v)}return p},enumerable:!1,configurable:!0}),m.prototype.fromJSON=function(p){var g=this;this.name=p.name,this.channel=p.channel,this.instrument=new l.Instrument(void 0,this),this.instrument.fromJSON(p.instrument),p.endOfTrackTicks!==void 0&&(this.endOfTrackTicks=p.endOfTrackTicks);for(var v in p.controlChanges)p.controlChanges[v]&&p.controlChanges[v].forEach(function(x){g.addCC({number:x.number,ticks:x.ticks,value:x.value})});p.notes.forEach(function(x){g.addNote({durationTicks:x.durationTicks,midi:x.midi,ticks:x.ticks,velocity:x.velocity})})},m.prototype.toJSON=function(){for(var p={},g=0;g<127;g++)this.controlChanges.hasOwnProperty(g)&&(p[g]=this.controlChanges[g].map(function(x){return x.toJSON()}));var v={channel:this.channel,controlChanges:p,pitchBends:this.pitchBends.map(function(x){return x.toJSON()}),instrument:this.instrument.toJSON(),name:this.name,notes:this.notes.map(function(x){return x.toJSON()})};return this.endOfTrackTicks!==void 0&&(v.endOfTrackTicks=this.endOfTrackTicks),v},m})();return el.Track=d,el}var Ps={};function Kw(r){var e=[];return Nx(r,e),e}function Nx(r,e){for(var i=0;i<r.length;i++){var s=r[i];Array.isArray(s)?Nx(s,e):e.push(s)}}const Zw=Object.freeze(Object.defineProperty({__proto__:null,flatten:Kw},Symbol.toStringTag,{value:"Module"})),Qw=By(Zw);var I_;function Jw(){if(I_)return Ps;I_=1;var r=Ps&&Ps.__spreadArray||function(_,T,N){if(N||arguments.length===2)for(var R=0,L=T.length,B;R<L;R++)(B||!(R in T))&&(B||(B=Array.prototype.slice.call(T,0,R)),B[R]=T[R]);return _.concat(B||Array.prototype.slice.call(T))};Object.defineProperty(Ps,"__esModule",{value:!0}),Ps.encode=void 0;var e=Cx(),i=op(),s=Qw;function l(_,T){return[{absoluteTime:_.ticks,channel:T,deltaTime:0,noteNumber:_.midi,type:"noteOn",velocity:Math.floor(_.velocity*127)},{absoluteTime:_.ticks+_.durationTicks,channel:T,deltaTime:0,noteNumber:_.midi,type:"noteOff",velocity:Math.floor(_.noteOffVelocity*127)}]}function c(_){return(0,s.flatten)(_.notes.map(function(T){return l(T,_.channel)}))}function f(_,T){return{absoluteTime:_.ticks,channel:T,controllerType:_.number,deltaTime:0,type:"controller",value:Math.floor(_.value*127)}}function d(_){for(var T=[],N=0;N<127;N++)_.controlChanges.hasOwnProperty(N)&&_.controlChanges[N].forEach(function(R){T.push(f(R,_.channel))});return T}function m(_,T){return{absoluteTime:_.ticks,channel:T,deltaTime:0,type:"pitchBend",value:_.value}}function p(_){var T=[];return _.pitchBends.forEach(function(N){T.push(m(N,_.channel))}),T}function g(_){return{absoluteTime:0,channel:_.channel,deltaTime:0,programNumber:_.instrument.number,type:"programChange"}}function v(_){return{absoluteTime:0,deltaTime:0,meta:!0,text:_,type:"trackName"}}function x(_){return{absoluteTime:_.ticks,deltaTime:0,meta:!0,microsecondsPerBeat:Math.floor(6e7/_.bpm),type:"setTempo"}}function S(_){return{absoluteTime:_.ticks,deltaTime:0,denominator:_.timeSignature[1],meta:!0,metronome:24,numerator:_.timeSignature[0],thirtyseconds:8,type:"timeSignature"}}function E(_){var T=i.keySignatureKeys.indexOf(_.key);return{absoluteTime:_.ticks,deltaTime:0,key:T+7,meta:!0,scale:_.scale==="major"?0:1,type:"keySignature"}}function A(_){return{absoluteTime:_.ticks,deltaTime:0,meta:!0,text:_.text,type:_.type}}function y(_){var T={header:{format:1,numTracks:_.tracks.length+1,ticksPerBeat:_.header.ppq},tracks:r([r(r(r(r([{absoluteTime:0,deltaTime:0,meta:!0,text:_.header.name,type:"trackName"}],_.header.keySignatures.map(function(N){return E(N)}),!0),_.header.meta.map(function(N){return A(N)}),!0),_.header.tempos.map(function(N){return x(N)}),!0),_.header.timeSignatures.map(function(N){return S(N)}),!0)],_.tracks.map(function(N){return r(r(r([v(N.name),g(N)],c(N),!0),d(N),!0),p(N),!0)}),!0)};return T.tracks=T.tracks.map(function(N){N=N.sort(function(L,B){return L.absoluteTime-B.absoluteTime});var R=0;return N.forEach(function(L){L.deltaTime=L.absoluteTime-R,R=L.absoluteTime,delete L.absoluteTime}),N.push({deltaTime:0,meta:!0,type:"endOfTrack"}),N}),new Uint8Array((0,e.writeMidi)(T))}return Ps.encode=y,Ps}var F_;function $w(){return F_||(F_=1,(function(r){var e=Ls&&Ls.__awaiter||function(v,x,S,E){function A(y){return y instanceof S?y:new S(function(_){_(y)})}return new(S||(S=Promise))(function(y,_){function T(L){try{R(E.next(L))}catch(B){_(B)}}function N(L){try{R(E.throw(L))}catch(B){_(B)}}function R(L){L.done?y(L.value):A(L.value).then(T,N)}R((E=E.apply(v,x||[])).next())})},i=Ls&&Ls.__generator||function(v,x){var S={label:0,sent:function(){if(y[0]&1)throw y[1];return y[1]},trys:[],ops:[]},E,A,y,_;return _={next:T(0),throw:T(1),return:T(2)},typeof Symbol=="function"&&(_[Symbol.iterator]=function(){return this}),_;function T(R){return function(L){return N([R,L])}}function N(R){if(E)throw new TypeError("Generator is already executing.");for(;S;)try{if(E=1,A&&(y=R[0]&2?A.return:R[0]?A.throw||((y=A.return)&&y.call(A),0):A.next)&&!(y=y.call(A,R[1])).done)return y;switch(A=0,y&&(R=[R[0]&2,y.value]),R[0]){case 0:case 1:y=R;break;case 4:return S.label++,{value:R[1],done:!1};case 5:S.label++,A=R[1],R=[0];continue;case 7:R=S.ops.pop(),S.trys.pop();continue;default:if(y=S.trys,!(y=y.length>0&&y[y.length-1])&&(R[0]===6||R[0]===2)){S=0;continue}if(R[0]===3&&(!y||R[1]>y[0]&&R[1]<y[3])){S.label=R[1];break}if(R[0]===6&&S.label<y[1]){S.label=y[1],y=R;break}if(y&&S.label<y[2]){S.label=y[2],S.ops.push(R);break}y[2]&&S.ops.pop(),S.trys.pop();continue}R=x.call(v,S)}catch(L){R=[6,L],A=0}finally{E=y=0}if(R[0]&5)throw R[1];return{value:R[0]?R[1]:void 0,done:!0}}};Object.defineProperty(r,"__esModule",{value:!0}),r.Header=r.Track=r.Midi=void 0;var s=Cx(),l=op(),c=P_(),f=Jw(),d=(function(){function v(x){var S=this,E=null;if(x){var A=x instanceof ArrayBuffer?new Uint8Array(x):x;E=(0,s.parseMidi)(A),E.tracks.forEach(function(y){var _=0;y.forEach(function(T){_+=T.deltaTime,T.absoluteTime=_})}),E.tracks=g(E.tracks)}this.header=new l.Header(E),this.tracks=[],x&&(this.tracks=E.tracks.map(function(y){return new c.Track(y,S.header)}),E.header.format===1&&this.tracks[0].duration===0&&this.tracks.shift())}return v.fromUrl=function(x){return e(this,void 0,void 0,function(){var S,E;return i(this,function(A){switch(A.label){case 0:return[4,fetch(x)];case 1:return S=A.sent(),S.ok?[4,S.arrayBuffer()]:[3,3];case 2:return E=A.sent(),[2,new v(E)];case 3:throw new Error("Could not load '".concat(x,"'"))}})})},Object.defineProperty(v.prototype,"name",{get:function(){return this.header.name},set:function(x){this.header.name=x},enumerable:!1,configurable:!0}),Object.defineProperty(v.prototype,"duration",{get:function(){var x=this.tracks.map(function(S){return S.duration});return Math.max.apply(Math,x)},enumerable:!1,configurable:!0}),Object.defineProperty(v.prototype,"durationTicks",{get:function(){var x=this.tracks.map(function(S){return S.durationTicks});return Math.max.apply(Math,x)},enumerable:!1,configurable:!0}),v.prototype.addTrack=function(){var x=new c.Track(void 0,this.header);return this.tracks.push(x),x},v.prototype.toArray=function(){return(0,f.encode)(this)},v.prototype.toJSON=function(){return{header:this.header.toJSON(),tracks:this.tracks.map(function(x){return x.toJSON()})}},v.prototype.fromJSON=function(x){var S=this;this.header=new l.Header,this.header.fromJSON(x.header),this.tracks=x.tracks.map(function(E){var A=new c.Track(void 0,S.header);return A.fromJSON(E),A})},v.prototype.clone=function(){var x=new v;return x.fromJSON(this.toJSON()),x},v})();r.Midi=d;var m=P_();Object.defineProperty(r,"Track",{enumerable:!0,get:function(){return m.Track}});var p=op();Object.defineProperty(r,"Header",{enumerable:!0,get:function(){return p.Header}});function g(v){for(var x=[],S=0;S<v.length;S++)for(var E=x.length,A=new Map,y=Array(16).fill(0),_=0,T=v[S];_<T.length;_++){var N=T[_],R=E,L=N.channel;if(L!==void 0){N.type==="programChange"&&(y[L]=N.programNumber);var B=y[L],I="".concat(B," ").concat(L);A.has(I)?R=A.get(I):(R=E+A.size,A.set(I,R))}x[R]||x.push([]),x[R].push(N)}return x}})(Ls)),Ls}var e2=$w();function t2(r){const e=new e2.Midi(r),i=[],s=[],l=e.tracks.filter(g=>g.notes.length>0);for(let g=0;g<l.length;g++){const v=l[g],x=l.length>=2?g===0?"right":"left":"right";s.push({index:g,name:v.name||`Track ${g+1}`,channel:v.channel,noteCount:v.notes.length,hand:x,muted:!1,solo:!1});for(const S of v.notes){const E=l.length===1?S.midi<60?"left":"right":x;i.push({midiNote:S.midi,velocity:Math.round(S.velocity*127),startTime:S.time,duration:S.duration,hand:E,track:g})}}i.sort((g,v)=>g.startTime-v.startTime);let c=0;for(const g of i){const v=g.startTime+g.duration;v>c&&(c=v)}let f=120;e.header.tempos.length>0&&(f=Math.round(e.header.tempos[0].bpm));let d="4/4";if(e.header.timeSignatures.length>0){const g=e.header.timeSignatures[0].timeSignature;d=`${g[0]}/${g[1]}`}let m="C Major";e.header.keySignatures.length>0&&(m=e.header.keySignatures[0].key);const p={title:e.name||"Untitled",composer:"",keySignature:m,timeSignature:d,tempo:f,duration:c,tracks:s,format:"midi"};return{notes:i,fileInfo:p}}function Ux(r){const i=new DOMParser().parseFromString(r,"text/xml"),s=i.querySelector("parsererror");if(s)throw new Error("Invalid MusicXML: "+s.textContent);if(!(i.querySelector("score-partwise")||i.querySelector("score-timewise")))throw new Error("Unsupported MusicXML format. Expected score-partwise or score-timewise.");const c=i.querySelector("work-title, movement-title")?.textContent||"Untitled",f=i.querySelector('creator[type="composer"]')?.textContent||"",d=i.querySelectorAll("part-list score-part"),m=i.querySelectorAll("part"),p=[],g=[];let v=120,x="4/4",S="C Major";for(let y=0;y<m.length;y++){const _=m[y],T=d[y]?.querySelector("part-name")?.textContent||`Part ${y+1}`,N=y===0?"right":"left";let R=1,L=0,B=120,I=0;const Z=_.querySelectorAll("measure");for(const D of Z){let U=L;const V=D.querySelector("attributes");if(V){const z=V.querySelector("divisions");z?.textContent&&(R=parseInt(z.textContent));const J=V.querySelector("key");if(J){const Se=parseInt(J.querySelector("fifths")?.textContent||"0"),O=J.querySelector("mode")?.textContent||"major";S=i2(Se,O)}const Me=V.querySelector("time");if(Me){const Se=Me.querySelector("beats")?.textContent||"4",O=Me.querySelector("beat-type")?.textContent||"4";x=`${Se}/${O}`}}const ie=D.querySelectorAll("direction");for(const z of ie){const J=z.querySelector("sound");J?.getAttribute("tempo")&&(B=parseFloat(J.getAttribute("tempo")),y===0&&v===120&&(v=B))}const W=60/(B*R);let oe=!1,ue=0;const F=D.children;for(const z of F)if(z.tagName==="note"){z.querySelector("chord")?(oe=!0,U-=ue*W):oe=!1;const Me=z.querySelector("rest"),Se=z.querySelector("duration"),O=Se?parseInt(Se.textContent||"0"):0;if(!Me){const ne=z.querySelector("pitch");if(ne){const ve=ne.querySelector("step")?.textContent||"C",we=parseInt(ne.querySelector("octave")?.textContent||"4"),ze=parseInt(ne.querySelector("alter")?.textContent||"0"),ae=n2(ve,we,ze),he=O*W;let Re=80;const Ge=z.querySelector("dynamics");Ge&&(Re=a2(Ge)),p.push({midiNote:ae,velocity:Re,startTime:U,duration:Math.max(.01,he),hand:N,track:y}),I++}}ue=O,oe||(U+=O*W)}else if(z.tagName==="forward"){const J=parseInt(z.querySelector("duration")?.textContent||"0");U+=J*W}else if(z.tagName==="backup"){const J=parseInt(z.querySelector("duration")?.textContent||"0");U-=J*W}L=Math.max(L,U)}g.push({index:y,name:T,channel:y,noteCount:I,hand:N,muted:!1,solo:!1})}p.sort((y,_)=>y.startTime-_.startTime);let E=0;for(const y of p){const _=y.startTime+y.duration;_>E&&(E=_)}return{notes:p,fileInfo:{title:c,composer:f,keySignature:S,timeSignature:x,tempo:v,duration:E,tracks:g,format:"musicxml"}}}function n2(r,e,i){const s={C:0,D:2,E:4,F:5,G:7,A:9,B:11};return(e+1)*12+(s[r]||0)+i}function i2(r,e){const l=e==="minor"?["Ab","Eb","Bb","F","C","G","D","A","E","B","F#","C#","G#","D#","A#"]:["Cb","Gb","Db","Ab","Eb","Bb","F","C","G","D","A","E","B","F#","C#"],c=r+7;return`${l[Math.max(0,Math.min(l.length-1,c))]} ${e.charAt(0).toUpperCase()+e.slice(1)}`}function a2(r){const e={ppp:20,pp:35,p:50,mp:65,mf:80,f:95,ff:110,fff:125};for(const i of r.children){const s=e[i.tagName];if(s!==void 0)return s}return 80}async function s2(r){const i=r.name.toLowerCase().split(".").pop()||"";switch(i){case"mid":case"midi":{const s=await r.arrayBuffer();return t2(s)}case"musicxml":case"xml":{const s=await r.text();return Ux(s)}case"mxl":{const s=await r.arrayBuffer();return r2(s)}default:throw new Error(`Unsupported file format: .${i}. Supported formats: .mid, .midi, .musicxml, .xml, .mxl`)}}async function r2(r){try{const e=new Uint8Array(r),i=o2(e);let s="";for(const[l,c]of i)if(l.endsWith(".musicxml")||l.endsWith(".xml")&&!l.includes("META-INF")){s=new TextDecoder().decode(c);break}if(!s)throw new Error("No MusicXML file found in MXL archive");return Ux(s)}catch(e){throw new Error(`Failed to parse MXL file: ${e instanceof Error?e.message:"Unknown error"}`)}}function o2(r){const e=[];let i=0;for(;i<r.length-4;)if(r[i]===80&&r[i+1]===75&&r[i+2]===3&&r[i+3]===4){const s=r[i+8]|r[i+9]<<8,l=r[i+18]|r[i+19]<<8|r[i+20]<<16|r[i+21]<<24,c=r[i+22]|r[i+23]<<8|r[i+24]<<16|r[i+25]<<24,f=r[i+26]|r[i+27]<<8,d=r[i+28]|r[i+29]<<8,m=new TextDecoder().decode(r.slice(i+30,i+30+f)),p=i+30+f+d,g=r.slice(p,p+l);if(s===0)e.push([m,g]);else if(s===8)try{const v=l2(g,c);e.push([m,v])}catch{}i=p+l}else i++;return e}function l2(r,e){throw new Error("Compressed MXL files require decompression support. Please export as uncompressed MusicXML (.musicxml) instead.")}class c2{timeline=[];sortedEvents=[];nextEventIndex=0;perfStartMs=0;offsetSeconds=0;animFrameId=0;scheduleTimerId=0;_tempoMultiplier=1;loopStart=null;loopEnd=null;audioCtxStartTime=0;nextMetronomeBeat=0;beatDuration=.5;beatsPerMeasure=4;loadTimeline(e){this.stop(),this.timeline=e,this.sortedEvents=[],e.forEach(l=>{this.sortedEvents.push({time:l.startTime,type:"on",note:l}),this.sortedEvents.push({time:l.startTime+l.duration,type:"off",note:l})}),this.sortedEvents.sort((l,c)=>l.time-c.time||(l.type==="off"?-1:1));let i=0;for(const l of e){const c=l.startTime+l.duration;c>i&&(i=c)}pe.getState().setTotalDuration(i);const s=pe.getState().fileInfo;if(s){this.beatDuration=60/(s.tempo||120);const l=(s.timeSignature||"4/4").split("/");this.beatsPerMeasure=parseInt(l[0])||4}}async play(){const e=pe.getState();if(this.sortedEvents.length===0)return;await it.init();const i=e.playbackState==="paused"?e.playbackPosition:e.playbackPosition||0;this.offsetSeconds=i,this.perfStartMs=performance.now(),this.audioCtxStartTime=it.currentTime,this.seekToTime(i),e.setPlaybackState("playing"),this.startScheduling(),this.startAnimation()}pause(){const e=pe.getState();e.setPlaybackState("paused"),this.stopScheduling(),this.stopAnimation(),it.stopAll(),e.clearPlaybackNotes()}stop(){const e=pe.getState();e.setPlaybackState("stopped"),e.setPlaybackPosition(0),this.nextEventIndex=0,this.stopScheduling(),this.stopAnimation(),it.stopAll(),e.clearPlaybackNotes()}seek(e){const i=pe.getState(),s=i.playbackState==="playing";it.stopAll(),i.clearPlaybackNotes(),i.setPlaybackPosition(e),this.seekToTime(e),s&&(this.offsetSeconds=e,this.perfStartMs=performance.now(),this.audioCtxStartTime=it.currentTime)}setTempo(e){if(pe.getState().playbackState==="playing"){const s=this.getSongPosition();this.offsetSeconds=s,this.perfStartMs=performance.now(),this.audioCtxStartTime=it.currentTime}this._tempoMultiplier=e}setLoop(e,i){this.loopStart=e,this.loopEnd=i}seekToTime(e){this.nextEventIndex=0;for(let i=0;i<this.sortedEvents.length;i++){if(this.sortedEvents[i].time>=e){this.nextEventIndex=i;break}i===this.sortedEvents.length-1&&(this.nextEventIndex=this.sortedEvents.length)}this.beatDuration>0&&(this.nextMetronomeBeat=Math.ceil(e/this.beatDuration)*this.beatDuration)}getSongPosition(){const e=performance.now()-this.perfStartMs;return this.offsetSeconds+e/1e3*this._tempoMultiplier}songTimeToAudioTime(e){const i=(e-this.offsetSeconds)/this._tempoMultiplier;return this.audioCtxStartTime+i}startScheduling(){this.stopScheduling(),this.scheduleTimerId=window.setInterval(()=>this.scheduleAhead(),25)}stopScheduling(){this.scheduleTimerId&&(clearInterval(this.scheduleTimerId),this.scheduleTimerId=0)}scheduleAhead(){const e=pe.getState();if(e.playbackState!=="playing")return;const i=this.getSongPosition(),s=i+.15;for(;this.nextEventIndex<this.sortedEvents.length;){const l=this.sortedEvents[this.nextEventIndex];if(l.time>s)break;if(!(l.note.hand==="left"&&e.muteLeft||l.note.hand==="right"&&e.muteRight)){const f=this.songTimeToAudioTime(l.time);f>=it.currentTime-.01&&(l.type==="on"?it.scheduleNoteOn(l.note.midiNote,l.note.velocity,Math.max(f,it.currentTime)):it.scheduleNoteOff(l.note.midiNote,Math.max(f,it.currentTime)))}this.nextEventIndex++}if(e.metronomeOn&&this.beatDuration>0)for(;this.nextMetronomeBeat<=s;){const l=this.songTimeToAudioTime(this.nextMetronomeBeat);if(l>=it.currentTime-.01){const f=Math.round(this.nextMetronomeBeat/this.beatDuration)%this.beatsPerMeasure===0;it.playClick(Math.max(l,it.currentTime),f)}this.nextMetronomeBeat+=this.beatDuration}this.nextEventIndex>=this.sortedEvents.length&&i>=e.totalDuration&&(this.loopStart!==null&&this.loopEnd!==null?(this.seek(this.loopStart),this.play()):this.stop())}startAnimation(){this.stopAnimation();const e=()=>{this.animFrameId=requestAnimationFrame(e);const i=pe.getState();if(i.playbackState!=="playing")return;const s=this.getSongPosition();i.setPlaybackPosition(s);const l=new Map(i.activeNotes);for(const[c,f]of l)f.source==="playback"&&l.delete(c);for(const c of this.timeline)c.startTime<=s&&s<c.startTime+c.duration&&(c.hand==="left"&&i.muteLeft||c.hand==="right"&&i.muteRight||l.set(c.midiNote,{velocity:c.velocity,hand:c.hand,source:"playback"}));pe.setState({activeNotes:l}),this.loopEnd!==null&&s>=this.loopEnd&&this.loopStart!==null&&(this.seek(this.loopStart),this.play())};this.animFrameId=requestAnimationFrame(e)}stopAnimation(){this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=0)}dispose(){this.stop()}}const Fi=new c2,u2=[{preset:"default",label:"Default"},{preset:"full",label:"Full"},{preset:"performer",label:"Performer"},{preset:"closeup",label:"Close-Up"}];function f2(){const r=xt.useRef(null),e=pe(x=>x.cameraPreset),i=pe(x=>x.setCameraPreset),s=pe(x=>x.showSideDrawer),l=pe(x=>x.setShowSideDrawer),c=pe(x=>x.fileInfo),f=pe(x=>x.octaveShift),d=pe(x=>x.midiDeviceName),m=xt.useCallback(async x=>{try{await it.init(),pe.getState().setAudioReady(!0);const S=await s2(x);pe.getState().setTimeline(S.notes),pe.getState().setFileInfo(S.fileInfo),pe.getState().setTotalDuration(S.fileInfo.duration),pe.getState().setShowFileModal(!0),Fi.loadTimeline(S.notes)}catch(S){Yr(`Error parsing file: ${S instanceof Error?S.message:"Unknown error"}`,"error")}},[]),p=xt.useCallback(x=>{const S=x.target.files?.[0];S&&m(S),x.target.value=""},[m]),g=xt.useCallback(x=>{x.preventDefault();const S=x.dataTransfer.files[0];S&&m(S)},[m]),v=xt.useCallback(x=>{x.preventDefault()},[]);return H.jsxs("div",{className:"absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-2",style:{zIndex:20,background:"linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))"},onDrop:g,onDragOver:v,children:[H.jsxs("div",{className:"flex items-center gap-3",children:[H.jsx("h1",{className:"text-lg font-semibold tracking-wide text-white/90",children:"Piano Studio"}),H.jsx("button",{onClick:()=>r.current?.click(),className:"px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm text-white/80 transition-colors","aria-label":"Upload sheet music file",children:"Upload File"}),H.jsx("input",{ref:r,type:"file",accept:".mid,.midi,.musicxml,.xml,.mxl",onChange:p,className:"hidden"}),c&&H.jsxs("span",{className:"text-xs text-white/50 ml-2",children:[c.title,c.composer&&` - ${c.composer}`]})]}),H.jsx("div",{className:"flex items-center gap-1",children:u2.map(x=>H.jsx("button",{onClick:()=>{i(x.preset),Dn({cameraPreset:x.preset})},className:`px-2.5 py-1 rounded text-xs transition-colors ${e===x.preset?"bg-white/20 text-white":"text-white/50 hover:text-white/80 hover:bg-white/10"}`,"aria-label":`Camera: ${x.label}`,children:x.label},x.preset))}),H.jsxs("div",{className:"flex items-center gap-3",children:[H.jsxs("span",{className:"text-xs text-white/40",children:["Octave: C",4+f]}),d&&H.jsxs("span",{className:"text-xs text-emerald-400/80 flex items-center gap-1",children:[H.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"MIDI"]}),H.jsx("button",{onClick:()=>l(!s),className:"p-1.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white/90 transition-colors","aria-label":"Toggle settings panel",children:H.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:H.jsx("path",{d:"M12 8V4m0 4a2 2 0 100 4 2 2 0 000-4zm-6 4V4m0 8a2 2 0 100 4 2 2 0 000-4zm12-2V4m0 6a2 2 0 100 4 2 2 0 000-4zM6 20v-4m6 4v-8m6 4v-4"})})})]})]})}function B_(r){const e=Math.floor(r/60),i=Math.floor(r%60);return`${e}:${i.toString().padStart(2,"0")}`}function h2(){const r=pe(W=>W.playbackState),e=pe(W=>W.playbackPosition),i=pe(W=>W.totalDuration),s=pe(W=>W.tempoMultiplier),l=pe(W=>W.setTempoMultiplier),c=pe(W=>W.volume),f=pe(W=>W.setVolume),d=pe(W=>W.metronomeOn),m=pe(W=>W.toggleMetronome),p=pe(W=>W.timeline),g=pe(W=>W.sustainPedal),v=pe(W=>W.loopStart),x=pe(W=>W.loopEnd),S=pe(W=>W.setLoopRegion),E=xt.useRef(null),A=p&&p.length>0,y=v!==null&&x!==null,_=xt.useCallback(async()=>{await it.init(),pe.getState().setAudioReady(!0),r==="playing"?Fi.pause():await Fi.play()},[r]),T=xt.useCallback(()=>{Fi.stop()},[]),N=xt.useCallback(W=>{if(!E.current||!A)return;const oe=E.current.getBoundingClientRect(),F=Math.max(0,Math.min(1,(W.clientX-oe.left)/oe.width))*i;Fi.seek(F)},[A,i]),R=xt.useCallback(W=>{if(!E.current||!A||W.button!==0)return;const oe=E.current;oe.setPointerCapture(W.pointerId);const ue=z=>{const J=oe.getBoundingClientRect(),Me=Math.max(0,Math.min(1,(z.clientX-J.left)/J.width));Fi.seek(Me*i)},F=()=>{oe.removeEventListener("pointermove",ue),oe.removeEventListener("pointerup",F)};oe.addEventListener("pointermove",ue),oe.addEventListener("pointerup",F)},[A,i]),L=xt.useCallback(W=>{const oe=parseFloat(W.target.value);l(oe),Fi.setTempo(oe)},[l]),B=xt.useCallback(W=>{const oe=parseFloat(W.target.value);f(oe),it.setVolume(oe),Dn({volume:oe})},[f]),I=xt.useCallback(()=>{const W=pe.getState().playbackPosition,oe=pe.getState().loopEnd;S(W,oe),Fi.setLoop(W,oe)},[S]),Z=xt.useCallback(()=>{const W=pe.getState().playbackPosition,oe=pe.getState().loopStart;S(oe,W),Fi.setLoop(oe,W)},[S]),D=xt.useCallback(()=>{S(null,null),Fi.setLoop(null,null)},[S]),U=i>0?e/i*100:0,V=i>0&&v!==null?v/i*100:0,ie=i>0&&x!==null?x/i*100:0;return H.jsxs("div",{className:"absolute bottom-0 left-0 right-0 flex items-center gap-4 px-6 py-3",style:{zIndex:20,background:"linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))"},children:[H.jsxs("div",{className:"flex items-center gap-2",children:[H.jsx("button",{onClick:_,disabled:!A,className:`w-10 h-10 rounded-full flex items-center justify-center transition-all ${A?"bg-white/15 hover:bg-white/25 text-white":"bg-white/5 text-white/30 cursor-not-allowed"}`,"aria-label":r==="playing"?"Pause":"Play",children:r==="playing"?H.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:[H.jsx("rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}),H.jsx("rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"})]}):H.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:H.jsx("path",{d:"M8 5v14l11-7z"})})}),H.jsx("button",{onClick:T,disabled:!A,className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${A?"bg-white/10 hover:bg-white/20 text-white/80":"bg-white/5 text-white/30 cursor-not-allowed"}`,"aria-label":"Stop",children:H.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:H.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"})})})]}),H.jsxs("div",{className:"flex-1 flex items-center gap-2 min-w-0",children:[H.jsx("span",{className:"text-xs text-white/50 font-mono w-10 text-right shrink-0",children:B_(e)}),H.jsxs("div",{ref:E,className:`flex-1 relative h-6 flex items-center cursor-pointer group ${A?"":"opacity-40 pointer-events-none"}`,onClick:N,onPointerDown:R,children:[H.jsx("div",{className:"absolute inset-x-0 h-1.5 rounded-full bg-white/10"}),y&&H.jsx("div",{className:"absolute h-1.5 rounded-full bg-purple-500/30",style:{left:`${V}%`,width:`${ie-V}%`}}),H.jsx("div",{className:"absolute h-1.5 rounded-full bg-white/40 group-hover:bg-white/50 transition-colors",style:{width:`${U}%`}}),v!==null&&H.jsx("div",{className:"absolute w-0.5 h-3 bg-purple-400 rounded-full",style:{left:`${V}%`,transform:"translateX(-50%)"}}),x!==null&&H.jsx("div",{className:"absolute w-0.5 h-3 bg-purple-400 rounded-full",style:{left:`${ie}%`,transform:"translateX(-50%)"}}),H.jsx("div",{className:"absolute w-3 h-3 rounded-full bg-white shadow-md shadow-black/50 opacity-0 group-hover:opacity-100 transition-opacity",style:{left:`${U}%`,transform:"translate(-50%, 0)"}})]}),H.jsx("span",{className:"text-xs text-white/50 font-mono w-10 shrink-0",children:B_(i)})]}),H.jsxs("div",{className:"flex items-center gap-1",children:[H.jsx("button",{onClick:I,disabled:!A,className:`px-1.5 py-0.5 rounded text-xs transition-colors ${v!==null?"bg-purple-500/30 text-purple-300":A?"text-white/40 hover:text-white/70 hover:bg-white/10":"text-white/20 cursor-not-allowed"}`,"aria-label":"Set loop start",title:"Set loop start (A)",children:"A"}),H.jsx("button",{onClick:Z,disabled:!A,className:`px-1.5 py-0.5 rounded text-xs transition-colors ${x!==null?"bg-purple-500/30 text-purple-300":A?"text-white/40 hover:text-white/70 hover:bg-white/10":"text-white/20 cursor-not-allowed"}`,"aria-label":"Set loop end",title:"Set loop end (B)",children:"B"}),y&&H.jsx("button",{onClick:D,className:"px-1.5 py-0.5 rounded text-xs text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors","aria-label":"Clear loop",title:"Clear loop",children:H.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:H.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),H.jsxs("div",{className:"flex items-center gap-2",children:[H.jsx("label",{className:"text-xs text-white/40",children:"Tempo"}),H.jsx("input",{type:"range",min:"0.25",max:"2",step:"0.05",value:s,onChange:L,className:"w-20 range-sm","aria-label":"Tempo multiplier"}),H.jsxs("span",{className:"text-xs text-white/60 font-mono w-10",children:[Math.round(s*100),"%"]})]}),H.jsx("button",{onClick:()=>{m(),Dn({metronomeOn:!d})},className:`px-2 py-1 rounded text-xs transition-colors ${d?"bg-white/20 text-white":"text-white/40 hover:text-white/70 hover:bg-white/10"}`,"aria-label":"Toggle metronome",children:"Metro"}),H.jsxs("div",{className:"flex items-center gap-2",children:[H.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"text-white/50",children:[H.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),H.jsx("path",{d:"M15.54 8.46a5 5 0 010 7.07"}),H.jsx("path",{d:"M19.07 4.93a10 10 0 010 14.14"})]}),H.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:c,onChange:B,className:"w-20 range-sm","aria-label":"Volume"})]}),g&&H.jsx("span",{className:"text-xs text-amber-400/80",children:"SUS"})]})}const d2=[{id:"concert-hall",name:"Concert Hall",reverbMix:.65,roomSize:5,releaseTime:2.2,brightness:.55,builtIn:!0},{id:"practice-room",name:"Practice Room",reverbMix:.3,roomSize:2.5,releaseTime:1.2,brightness:.65,builtIn:!0},{id:"dry-studio",name:"Dry Studio",reverbMix:.08,roomSize:1,releaseTime:.4,brightness:.85,builtIn:!0},{id:"warm",name:"Warm",reverbMix:.35,roomSize:3,releaseTime:1.8,brightness:.3,builtIn:!0}];function z_(r){const e=pe.getState();e.setReverbMix(r.reverbMix),e.setRoomSize(r.roomSize),e.setReleaseTime(r.releaseTime),e.setBrightness(r.brightness),e.setActivePresetId(r.id),it.setReverbMix(r.reverbMix),it.setRoomSize(r.roomSize),it.setReleaseTime(r.releaseTime),it.setBrightness(r.brightness),Dn({reverbMix:r.reverbMix,roomSize:r.roomSize,releaseTime:r.releaseTime,brightness:r.brightness,activePresetId:r.id})}function p2(){const r=pe(m=>m.activePresetId),e=pe(m=>m.customPresets),[i,s]=xt.useState(!1),[l,c]=xt.useState(""),f=()=>{const m=l.trim();if(!m)return;const p=pe.getState(),g={id:`custom-${Date.now()}`,name:m,reverbMix:p.reverbMix,roomSize:p.roomSize,releaseTime:p.releaseTime,brightness:p.brightness,builtIn:!1},v=[...p.customPresets,g];p.setCustomPresets(v),p.setActivePresetId(g.id),Dn({customPresets:v,activePresetId:g.id}),Yr(`Preset "${m}" saved`,"success"),c(""),s(!1)},d=m=>{const p=pe.getState(),g=p.customPresets.filter(v=>v.id!==m);p.setCustomPresets(g),p.activePresetId===m&&p.setActivePresetId(null),Dn({customPresets:g,activePresetId:p.activePresetId===m?null:p.activePresetId})};return H.jsxs("div",{className:"mb-3",children:[H.jsx("div",{className:"flex items-center justify-between mb-1.5",children:H.jsx("span",{className:"text-xs text-white/50",children:"Presets"})}),H.jsx("div",{className:"flex flex-wrap gap-1 mb-1.5",children:d2.map(m=>H.jsx("button",{onClick:()=>z_(m),className:`px-2 py-0.5 rounded-full text-xs transition-colors ${r===m.id?"bg-emerald-500/30 text-emerald-300 ring-1 ring-emerald-500/40":"bg-white/8 text-white/60 hover:bg-white/15 hover:text-white/80"}`,children:m.name},m.id))}),e.length>0&&H.jsx("div",{className:"flex flex-wrap gap-1 mb-1.5",children:e.map(m=>H.jsxs("span",{className:"inline-flex items-center gap-0.5",children:[H.jsx("button",{onClick:()=>z_(m),className:`px-2 py-0.5 rounded-l-full text-xs transition-colors ${r===m.id?"bg-violet-500/30 text-violet-300 ring-1 ring-violet-500/40":"bg-white/8 text-white/60 hover:bg-white/15 hover:text-white/80"}`,children:m.name}),H.jsx("button",{onClick:()=>d(m.id),className:"px-1 py-0.5 rounded-r-full bg-white/8 text-white/30 hover:text-red-400 hover:bg-white/15 text-xs transition-colors","aria-label":`Delete ${m.name}`,children:"x"})]},m.id))}),i?H.jsxs("div",{className:"flex items-center gap-1",children:[H.jsx("input",{type:"text",value:l,onChange:m=>c(m.target.value),onKeyDown:m=>{m.key==="Enter"&&f(),m.key==="Escape"&&s(!1)},placeholder:"Preset name...",className:"flex-1 px-2 py-1 rounded text-xs bg-white/10 text-white/80 outline-none placeholder-white/30",autoFocus:!0}),H.jsx("button",{onClick:f,className:"px-2 py-1 rounded text-xs bg-emerald-500/30 text-emerald-300 hover:bg-emerald-500/40",children:"Save"}),H.jsx("button",{onClick:()=>s(!1),className:"px-1.5 py-1 rounded text-xs text-white/40 hover:text-white/70",children:"Cancel"})]}):H.jsx("button",{onClick:()=>s(!0),className:"text-xs text-white/40 hover:text-white/70 transition-colors",children:"+ Save Current"})]})}function m2(){const r=pe(T=>T.showSideDrawer),e=pe(T=>T.setShowSideDrawer),i=pe(T=>T.fileInfo),s=pe(T=>T.muteLeft),l=pe(T=>T.muteRight),c=pe(T=>T.setMuteLeft),f=pe(T=>T.setMuteRight),d=pe(T=>T.midiDeviceName),m=pe(T=>T.octaveShift),p=pe(T=>T.sampleLoadProgress),g=pe(T=>T.reverbMix),v=pe(T=>T.roomSize),x=pe(T=>T.releaseTime),S=pe(T=>T.brightness),E=pe(T=>T.waterfallLookAhead),A=pe(T=>T.waterfallShowNoteNames),y=pe(T=>T.waterfallShowPastTrail),_=pe(T=>T.waterfallVelocityOpacity);return r?H.jsxs("div",{className:"absolute top-0 right-0 bottom-0 w-72 overflow-y-auto",style:{zIndex:30,background:"rgba(15, 15, 20, 0.95)",backdropFilter:"blur(12px)",borderLeft:"1px solid rgba(255,255,255,0.08)"},children:[H.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-white/10",children:[H.jsx("h2",{className:"text-sm font-semibold text-white/80",children:"Settings"}),H.jsx("button",{onClick:()=>e(!1),className:"p-1 rounded hover:bg-white/10 text-white/50 hover:text-white/80","aria-label":"Close settings",children:H.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:H.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),H.jsxs("div",{className:"px-4 py-3 border-b border-white/10",children:[H.jsx("h3",{className:"text-xs font-medium text-white/50 uppercase tracking-wider mb-2",children:"Hand Separation"}),H.jsxs("div",{className:"flex flex-col gap-2",children:[H.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[H.jsx("input",{type:"checkbox",checked:!l,onChange:T=>{f(!T.target.checked),Dn({muteRight:!T.target.checked})},className:"accent-amber-500"}),H.jsx("span",{className:"text-sm text-amber-400/80",children:"Right Hand"}),H.jsx("span",{className:"text-xs text-white/30 ml-auto",children:l?"Muted":"Active"})]}),H.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[H.jsx("input",{type:"checkbox",checked:!s,onChange:T=>{c(!T.target.checked),Dn({muteLeft:!T.target.checked})},className:"accent-blue-500"}),H.jsx("span",{className:"text-sm text-blue-400/80",children:"Left Hand"}),H.jsx("span",{className:"text-xs text-white/30 ml-auto",children:s?"Muted":"Active"})]})]})]}),i&&i.tracks.length>0&&H.jsxs("div",{className:"px-4 py-3 border-b border-white/10",children:[H.jsx("h3",{className:"text-xs font-medium text-white/50 uppercase tracking-wider mb-2",children:"Tracks"}),H.jsx("div",{className:"flex flex-col gap-1.5",children:i.tracks.map(T=>H.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[H.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:T.hand==="right"?"#f59e0b":"#3b82f6"}}),H.jsx("span",{className:"text-white/70 truncate flex-1",children:T.name}),H.jsxs("span",{className:"text-xs text-white/30",children:[T.noteCount," notes"]})]},T.index))})]}),i&&H.jsxs("div",{className:"px-4 py-3 border-b border-white/10",children:[H.jsx("h3",{className:"text-xs font-medium text-white/50 uppercase tracking-wider mb-2",children:"File Info"}),H.jsxs("div",{className:"grid grid-cols-2 gap-y-1.5 text-sm",children:[H.jsx("span",{className:"text-white/40",children:"Title"}),H.jsx("span",{className:"text-white/70",children:i.title}),i.composer&&H.jsxs(H.Fragment,{children:[H.jsx("span",{className:"text-white/40",children:"Composer"}),H.jsx("span",{className:"text-white/70",children:i.composer})]}),H.jsx("span",{className:"text-white/40",children:"Key"}),H.jsx("span",{className:"text-white/70",children:i.keySignature}),H.jsx("span",{className:"text-white/40",children:"Time"}),H.jsx("span",{className:"text-white/70",children:i.timeSignature}),H.jsx("span",{className:"text-white/40",children:"Tempo"}),H.jsxs("span",{className:"text-white/70",children:[i.tempo," BPM"]}),H.jsx("span",{className:"text-white/40",children:"Duration"}),H.jsxs("span",{className:"text-white/70",children:[Math.floor(i.duration/60),":",Math.floor(i.duration%60).toString().padStart(2,"0")]}),H.jsx("span",{className:"text-white/40",children:"Format"}),H.jsx("span",{className:"text-white/70 uppercase",children:i.format})]})]}),H.jsxs("div",{className:"px-4 py-3 border-b border-white/10",children:[H.jsx("h3",{className:"text-xs font-medium text-white/50 uppercase tracking-wider mb-2",children:"Audio Engine"}),H.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[H.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:p>=1?"#34d399":p>0?"#fbbf24":p===-1?"#f87171":"#9ca3af"}}),H.jsx("span",{className:"text-sm text-white/70",children:p>=1?"Piano Samples":p>0?`Loading samples... ${Math.round(p*100)}%`:p===-1?"FM Synthesis (samples failed)":"FM Synthesis"})]}),H.jsx(p2,{}),H.jsxs("div",{className:"mb-2.5",children:[H.jsxs("div",{className:"flex items-center justify-between mb-1",children:[H.jsx("span",{className:"text-xs text-white/50",children:"Reverb"}),H.jsxs("span",{className:"text-xs text-white/40 tabular-nums",children:[Math.round(g*100),"%"]})]}),H.jsx("input",{type:"range",min:"0",max:"100",value:Math.round(g*100),onChange:T=>{const N=Number(T.target.value)/100;pe.getState().setReverbMix(N),pe.getState().setActivePresetId(null),it.setReverbMix(N),Dn({reverbMix:N,activePresetId:null})},className:"w-full h-1 appearance-none rounded-full bg-white/10 accent-emerald-400 cursor-pointer"})]}),H.jsxs("div",{className:"mb-2.5",children:[H.jsxs("div",{className:"flex items-center justify-between mb-1",children:[H.jsx("span",{className:"text-xs text-white/50",children:"Room Size"}),H.jsxs("span",{className:"text-xs text-white/40 tabular-nums",children:[v.toFixed(1),"s"]})]}),H.jsx("input",{type:"range",min:"5",max:"60",value:Math.round(v*10),onChange:T=>{const N=Number(T.target.value)/10;pe.getState().setRoomSize(N),pe.getState().setActivePresetId(null),it.setRoomSize(N),Dn({roomSize:N,activePresetId:null})},className:"w-full h-1 appearance-none rounded-full bg-white/10 accent-emerald-400 cursor-pointer"})]}),H.jsxs("div",{className:"mb-2.5",children:[H.jsxs("div",{className:"flex items-center justify-between mb-1",children:[H.jsx("span",{className:"text-xs text-white/50",children:"Release"}),H.jsxs("span",{className:"text-xs text-white/40 tabular-nums",children:[x.toFixed(1),"s"]})]}),H.jsx("input",{type:"range",min:"1",max:"30",value:Math.round(x*10),onChange:T=>{const N=Number(T.target.value)/10;pe.getState().setReleaseTime(N),pe.getState().setActivePresetId(null),it.setReleaseTime(N),Dn({releaseTime:N,activePresetId:null})},className:"w-full h-1 appearance-none rounded-full bg-white/10 accent-emerald-400 cursor-pointer"})]}),H.jsxs("div",{children:[H.jsxs("div",{className:"flex items-center justify-between mb-1",children:[H.jsx("span",{className:"text-xs text-white/50",children:"Brightness"}),H.jsxs("span",{className:"text-xs text-white/40 tabular-nums",children:[Math.round(S*100),"%"]})]}),H.jsx("input",{type:"range",min:"0",max:"100",value:Math.round(S*100),onChange:T=>{const N=Number(T.target.value)/100;pe.getState().setBrightness(N),pe.getState().setActivePresetId(null),it.setBrightness(N),Dn({brightness:N,activePresetId:null})},className:"w-full h-1 appearance-none rounded-full bg-white/10 accent-emerald-400 cursor-pointer"})]})]}),H.jsxs("div",{className:"px-4 py-3 border-b border-white/10",children:[H.jsx("h3",{className:"text-xs font-medium text-white/50 uppercase tracking-wider mb-2",children:"Waterfall"}),H.jsxs("div",{className:"mb-2.5",children:[H.jsxs("div",{className:"flex items-center justify-between mb-1",children:[H.jsx("span",{className:"text-xs text-white/50",children:"Look-Ahead"}),H.jsxs("span",{className:"text-xs text-white/40 tabular-nums",children:[E.toFixed(1),"s"]})]}),H.jsx("input",{type:"range",min:"10",max:"80",step:"5",value:Math.round(E*10),onChange:T=>{const N=Number(T.target.value)/10;pe.getState().setWaterfallLookAhead(N),Dn({waterfallLookAhead:N})},className:"w-full h-1 appearance-none rounded-full bg-white/10 accent-emerald-400 cursor-pointer"})]}),H.jsxs("label",{className:"flex items-center gap-2 cursor-pointer mb-1.5",children:[H.jsx("input",{type:"checkbox",checked:A,onChange:T=>{pe.getState().setWaterfallShowNoteNames(T.target.checked),Dn({waterfallShowNoteNames:T.target.checked})},className:"accent-emerald-400"}),H.jsx("span",{className:"text-sm text-white/70",children:"Note Names"})]}),H.jsxs("label",{className:"flex items-center gap-2 cursor-pointer mb-1.5",children:[H.jsx("input",{type:"checkbox",checked:y,onChange:T=>{pe.getState().setWaterfallShowPastTrail(T.target.checked),Dn({waterfallShowPastTrail:T.target.checked})},className:"accent-emerald-400"}),H.jsx("span",{className:"text-sm text-white/70",children:"Past Notes Trail"})]}),H.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[H.jsx("input",{type:"checkbox",checked:_,onChange:T=>{pe.getState().setWaterfallVelocityOpacity(T.target.checked),Dn({waterfallVelocityOpacity:T.target.checked})},className:"accent-emerald-400"}),H.jsx("span",{className:"text-sm text-white/70",children:"Velocity Shading"})]})]}),H.jsxs("div",{className:"px-4 py-3 border-b border-white/10",children:[H.jsx("h3",{className:"text-xs font-medium text-white/50 uppercase tracking-wider mb-2",children:"MIDI Device"}),d?H.jsxs("div",{className:"flex items-center gap-2",children:[H.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),H.jsx("span",{className:"text-sm text-white/70",children:d})]}):H.jsx("span",{className:"text-sm text-white/40",children:"No MIDI device connected"})]}),H.jsxs("div",{className:"px-4 py-3",children:[H.jsx("h3",{className:"text-xs font-medium text-white/50 uppercase tracking-wider mb-2",children:"Keyboard Shortcuts"}),H.jsxs("div",{className:"text-xs text-white/40 space-y-1",children:[H.jsxs("p",{children:[H.jsx("span",{className:"text-white/60",children:"A-J"})," Lower octave (C",4+m,"-B",4+m,")"]}),H.jsxs("p",{children:[H.jsx("span",{className:"text-white/60",children:"W,E,T,Y,U"})," Black keys (lower)"]}),H.jsxs("p",{children:[H.jsx("span",{className:"text-white/60",children:"K-'"})," Upper octave (C",5+m,"-F",5+m,")"]}),H.jsxs("p",{children:[H.jsx("span",{className:"text-white/60",children:"O,P,["})," Black keys (upper)"]}),H.jsxs("p",{children:[H.jsx("span",{className:"text-white/60",children:"Z / X"})," Octave down / up"]}),H.jsxs("p",{children:[H.jsx("span",{className:"text-white/60",children:"Space"})," Sustain pedal"]})]})]})]}):null}function g2(){const r=pe(s=>s.showFileModal),e=pe(s=>s.setShowFileModal),i=pe(s=>s.fileInfo);return!r||!i?null:H.jsx("div",{className:"fixed inset-0 flex items-center justify-center",style:{zIndex:50,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)"},onClick:()=>e(!1),children:H.jsxs("div",{className:"rounded-xl p-6 max-w-md w-full mx-4",style:{background:"rgba(20, 20, 28, 0.98)",border:"1px solid rgba(255,255,255,0.1)"},onClick:s=>s.stopPropagation(),children:[H.jsx("h2",{className:"text-xl font-semibold text-white mb-1",children:i.title}),i.composer&&H.jsx("p",{className:"text-sm text-white/50 mb-4",children:i.composer}),H.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-5",children:[H.jsx(zr,{label:"Key",value:i.keySignature}),H.jsx(zr,{label:"Time",value:i.timeSignature}),H.jsx(zr,{label:"Tempo",value:`${i.tempo} BPM`}),H.jsx(zr,{label:"Duration",value:v2(i.duration)}),H.jsx(zr,{label:"Tracks",value:`${i.tracks.length}`}),H.jsx(zr,{label:"Format",value:i.format.toUpperCase()})]}),H.jsxs("div",{className:"mb-4",children:[H.jsx("h3",{className:"text-xs font-medium text-white/40 uppercase tracking-wider mb-2",children:"Tracks"}),H.jsx("div",{className:"space-y-1",children:i.tracks.map(s=>H.jsxs("div",{className:"flex items-center gap-2 text-sm py-1",children:[H.jsx("span",{className:"w-2.5 h-2.5 rounded-full flex-shrink-0",style:{background:s.hand==="right"?"#f59e0b":"#3b82f6"}}),H.jsx("span",{className:"text-white/70 truncate",children:s.name}),H.jsxs("span",{className:"text-xs text-white/30 ml-auto whitespace-nowrap",children:[s.noteCount," notes",H.jsxs("span",{className:"ml-1.5 text-white/20",children:["(",s.hand==="right"?"R":"L",")"]})]})]},s.index))})]}),H.jsx("button",{onClick:()=>e(!1),className:"w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-colors",children:"Ready to Play"})]})})}function zr({label:r,value:e}){return H.jsxs("div",{className:"rounded-lg px-3 py-2",style:{background:"rgba(255,255,255,0.05)"},children:[H.jsx("div",{className:"text-xs text-white/40",children:r}),H.jsx("div",{className:"text-sm text-white/80 font-medium",children:e})]})}function v2(r){const e=Math.floor(r/60),i=Math.floor(r%60);return`${e}:${i.toString().padStart(2,"0")}`}function _2(){const r=pe(i=>i.sampleLoadProgress);if(r<=0||r>=1)return null;const e=Math.round(r*100);return H.jsxs("div",{className:"fixed left-1/2 -translate-x-1/2 bottom-20 px-4 py-2 rounded-full flex items-center gap-3 pointer-events-none",style:{zIndex:50,background:"rgba(15, 15, 20, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.1)"},children:[H.jsx("span",{className:"text-xs text-white/60 whitespace-nowrap",children:"Loading piano samples..."}),H.jsx("div",{className:"w-24 h-1.5 rounded-full bg-white/10 overflow-hidden",children:H.jsx("div",{className:"h-full rounded-full bg-emerald-400/80 transition-all duration-300",style:{width:`${e}%`}})}),H.jsxs("span",{className:"text-xs text-white/40 w-8 text-right",children:[e,"%"]})]})}const x2={success:"#34d399",error:"#f87171",info:"#60a5fa"};function S2(){const r=uu(i=>i.toasts),e=uu(i=>i.removeToast);return r.length===0?null:H.jsx("div",{className:"fixed bottom-16 right-4 flex flex-col gap-2",style:{zIndex:40},children:r.map(i=>H.jsxs("div",{className:"toast-enter flex items-stretch rounded-lg overflow-hidden shadow-lg",style:{background:"rgba(20, 20, 28, 0.95)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.08)",minWidth:240,maxWidth:360},children:[H.jsx("div",{className:"w-1 shrink-0",style:{background:x2[i.type]}}),H.jsx("div",{className:"flex-1 px-3 py-2.5 text-sm text-white/85",children:i.message}),H.jsx("button",{onClick:()=>e(i.id),className:"px-2.5 text-white/30 hover:text-white/60 transition-colors","aria-label":"Dismiss",children:H.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:H.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]},i.id))})}class y2{keyMap;pressedKeys=new Set;boundKeyDown;boundKeyUp;constructor(){this.keyMap=v_(__),this.boundKeyDown=this.handleKeyDown.bind(this),this.boundKeyUp=this.handleKeyUp.bind(this)}start(){window.addEventListener("keydown",this.boundKeyDown),window.addEventListener("keyup",this.boundKeyUp)}stop(){window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp),this.releaseAll()}updateOctave(){const e=pe.getState();this.releaseAll(),this.keyMap=v_(__+e.octaveShift)}handleKeyDown(e){if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;const i=e.key.toLowerCase();if(i==="z"){pe.getState().setOctaveShift(-1),this.updateOctave();return}if(i==="x"){pe.getState().setOctaveShift(1),this.updateOctave();return}if(i===" "){e.preventDefault(),it.setSustain(!0),pe.getState().setSustainPedal(!0);return}if(this.pressedKeys.has(i))return;const s=this.keyMap.get(i);if(s===void 0)return;e.preventDefault(),this.pressedKeys.add(i);const l=80;it.noteOn(s,l),pe.getState().noteOn(s,l,void 0,"user")}handleKeyUp(e){const i=e.key.toLowerCase();if(i===" "){it.setSustain(!1),pe.getState().setSustainPedal(!1);return}if(!this.pressedKeys.has(i))return;this.pressedKeys.delete(i);const s=this.keyMap.get(i);s!==void 0&&(it.noteOff(s),pe.getState().noteOff(s))}releaseAll(){for(const e of this.pressedKeys){const i=this.keyMap.get(e);i!==void 0&&(it.noteOff(i),pe.getState().noteOff(i))}this.pressedKeys.clear()}}const H_=new y2;class M2{access=null;connectedInputs=[];async init(){if(!navigator.requestMIDIAccess)return console.warn("Web MIDI API not supported"),!1;try{return this.access=await navigator.requestMIDIAccess({sysex:!1}),this.access.onstatechange=()=>this.updateDevices(),this.updateDevices(),!0}catch(e){return console.warn("MIDI access denied:",e),!1}}updateDevices(){if(!this.access)return;for(const s of this.connectedInputs)s.onmidimessage=null;this.connectedInputs=[];const e=Array.from(this.access.inputs.values());for(const s of e)s.state==="connected"&&(s.onmidimessage=l=>this.handleMessage(l),this.connectedInputs.push(s));const i=pe.getState().midiDeviceName;if(this.connectedInputs.length>0){const s=this.connectedInputs.map(l=>l.name).join(", ");pe.getState().setMidiDeviceName(s),i!==s&&Yr(`MIDI connected: ${s}`,"success")}else pe.getState().setMidiDeviceName(null),i&&Yr("MIDI device disconnected","info")}handleMessage(e){const i=e.data;if(!i||i.length<2)return;const s=i[0]&240,l=i[1],c=i.length>2?i[2]:0;switch(s){case 144:c>0&&l>=os&&l<=Gs?(it.noteOn(l,c),pe.getState().noteOn(l,c,void 0,"user")):(it.noteOff(l),pe.getState().noteOff(l));break;case 128:it.noteOff(l),pe.getState().noteOff(l);break;case 176:if(l===64){const f=c>=64;it.setSustain(f),pe.getState().setSustainPedal(f)}break}}dispose(){for(const e of this.connectedInputs)e.onmidimessage=null;this.connectedInputs=[],this.access=null}}const G_=new M2;function b2(){return xt.useEffect(()=>{const r=Ax(),e=pe.getState();e.setVolume(r.volume),e.setReverbMix(r.reverbMix),e.setRoomSize(r.roomSize),e.setReleaseTime(r.releaseTime),e.setBrightness(r.brightness),e.setMuteLeft(r.muteLeft),e.setMuteRight(r.muteRight),r.metronomeOn&&e.toggleMetronome(),e.setCameraPreset(r.cameraPreset),r.waterfallLookAhead!==void 0&&e.setWaterfallLookAhead(r.waterfallLookAhead),r.waterfallHeightPct!==void 0&&e.setWaterfallHeightPct(r.waterfallHeightPct),r.waterfallShowNoteNames!==void 0&&e.setWaterfallShowNoteNames(r.waterfallShowNoteNames),r.waterfallShowPastTrail!==void 0&&e.setWaterfallShowPastTrail(r.waterfallShowPastTrail),r.waterfallVelocityOpacity!==void 0&&e.setWaterfallVelocityOpacity(r.waterfallVelocityOpacity),r.activePresetId!==void 0&&e.setActivePresetId(r.activePresetId),r.customPresets&&e.setCustomPresets(r.customPresets)},[]),xt.useEffect(()=>{H_.start(),G_.init();const r=async()=>{await it.init(),wx(),pe.getState().setAudioReady(!0),document.removeEventListener("click",r),document.removeEventListener("keydown",r)};return document.addEventListener("click",r),document.addEventListener("keydown",r),()=>{H_.stop(),G_.dispose(),document.removeEventListener("click",r),document.removeEventListener("keydown",r)}},[]),H.jsxs("div",{className:"w-full h-full relative select-none",children:[H.jsx(Gw,{}),H.jsx(f2,{}),H.jsx(h2,{}),H.jsx(m2,{}),H.jsx(g2,{}),H.jsx(_2,{}),H.jsx(S2,{}),H.jsx(E2,{})]})}function E2(){return pe(e=>e.isAudioReady)?null:H.jsx("div",{className:"fixed inset-0 flex items-center justify-center cursor-pointer",style:{zIndex:100,background:"rgba(0,0,0,0.4)",backdropFilter:"blur(2px)"},onClick:async()=>{await it.init(),wx(),pe.getState().setAudioReady(!0)},children:H.jsxs("div",{className:"text-center",children:[H.jsx("div",{className:"text-4xl mb-4 opacity-80",children:"🎹"}),H.jsx("h2",{className:"text-xl font-semibold text-white/90 mb-2",children:"Piano Studio"}),H.jsx("p",{className:"text-sm text-white/50",children:"Click anywhere to start"})]})})}Yy.createRoot(document.getElementById("root")).render(H.jsx(xt.StrictMode,{children:H.jsx(b2,{})}));
