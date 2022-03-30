/*
Copyright (c) 2016 Daybrush
name: scenejs
license: MIT
author: Daybrush
repository: https://github.com/daybrush/scenejs.git
version: 1.4.3
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Scene=e()}(this,function(){"use strict";var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function a(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function p(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var s=arguments[e],a=0,o=s.length;a<o;a++,i++)r[i]=s[a];return r}function t(t){if(!u)return"";var e=(u.body||u.documentElement).style,n=f.length;if(typeof e[t]!=s)return t;for(var r=0;r<n;++r){var i="-"+f[r]+"-"+t;if(typeof e[i]!=s)return i}return""}var v="rgb",d="rgba",m="hsl",g="hsla",h=[v,d,m,g],y="function",E="property",S="array",o="object",n="string",i="number",s="undefined",c=typeof window!=s,u=typeof document!=s&&document,f=["webkit","ms","moz","o"],w=t("transform"),O=t("filter"),M=t("animation"),b=M.replace("animation","keyframes"),l=['"',"'",'\\"',"\\'"];function x(t,e,n,r){return(t*r+e*n)/(n+r)}function F(t){return typeof t==s}function T(t){return t&&typeof t===o}function j(t){return Array.isArray(t)}function I(t){return typeof t===n}function A(t){return typeof t===y}function N(t,e,n,r){for(var i=n;i<r;++i){var s=e[i].trim();if(s===t)return i;var a=i;if("("===s?a=N(")",e,i+1,r):-1<l.indexOf(s)&&(a=N(s,e,i+1,r)),-1===a)break;i=a}return-1}function D(t,e){for(var n=new RegExp("(\\s*"+(e||",")+"\\s*|\\(|\\)|\"|'|\\\\\"|\\\\'|\\s+)","g"),r=t.split(n).filter(Boolean),i=r.length,s=[],a=[],o=0;o<i;++o){var u=r[o].trim(),f=o;if("("===u)f=N(")",r,o+1,i);else{if(")"===u)throw new Error("invalid format");if(-1<l.indexOf(u))f=N(u,r,o+1,i);else if(u===e){a.length&&(s.push(a.join("")),a=[]);continue}}-1===f&&(f=i-1),a.push(r.slice(o,f+1).join("")),o=f}return a.length&&s.push(a.join("")),s}function C(t){return D(t,",")}function _(t){var e=/([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(t);return!e||e.length<4?{}:{prefix:e[1],value:e[2],suffix:e[3]}}function P(t){var e=/^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(t);if(!e)return{prefix:"",unit:"",value:NaN};var n=e[1],r=e[2];return{prefix:n,unit:e[3],value:parseFloat(r)}}function U(t){return t.replace(/[\s-_]([a-z])/g,function(t,e){return e.toUpperCase()})}function R(t){return[].slice.call(t)}function k(){return Date.now?Date.now():(new Date).getTime()}function z(t,e,n){void 0===n&&(n=-1);for(var r=t.length,i=0;i<r;++i)if(e(t[i],i,t))return i;return n}var L=function(){var n=k(),t=c&&(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame);return t?t.bind(window):function(t){var e=k();return window.setTimeout(function(){t(e-n)},1e3/60)}}(),V=function(){var t=c&&(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.msCancelAnimationFrame);return t?t.bind(window):function(t){clearTimeout(t)}}();function $(t){if(Object.keys)return Object.keys(t);var e=[];for(var n in e)e.push(n);return e}function q(t,i){void 0===i&&(i=[]),t.sort(function(t,e){var n=i.indexOf(t),r=i.indexOf(e);return-1===r&&-1===n?0:-1===n?1:-1===r?-1:n-r})}function K(t){var e=t.replace("#",""),n=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),i=parseInt(e.substring(4,6),16),s=parseInt(e.substring(6,8),16)/255;return isNaN(s)&&(s=1),[n,r,i,s]}function Z(t){if("#"===t.charAt(0))return 4===t.length||5===t.length?K((f=(u=t).charAt(1),h=u.charAt(2),c=u.charAt(3),l=u.charAt(4),["#",f,f,h,h,c,c,l,l].join(""))):K(t);if(-1!==t.indexOf("(")){var e=_(t),n=e.prefix,r=e.value;if(!n||!r)return;var i=C(r),s=[0,0,0,1],a=i.length;switch(n){case v:case d:for(var o=0;o<a;++o)s[o]=parseFloat(i[o]);return s;case m:case g:for(o=0;o<a;++o)-1!==i[o].indexOf("%")?s[o]=parseFloat(i[o])/100:s[o]=parseFloat(i[o]);return function(t){var e,n=t[0],r=t[1],i=t[2];n<0&&(n+=360*Math.floor((Math.abs(n)+360)/360)),n%=360;var s=(1-Math.abs(2*i-1))*r,a=s*(1-Math.abs(n/60%2-1)),o=i-s/2,u=n<60?[s,a,0]:n<120?[a,s,0]:n<180?[0,s,a]:n<240?[0,a,s]:n<300?[a,0,s]:n<360?[s,0,a]:[0,0,0];return[Math.round(255*(u[0]+o)),Math.round(255*(u[1]+o)),Math.round(255*(u[2]+o)),null!==(e=t[3])&&void 0!==e?e:1]}(s)}}var u,f,h,c,l}function H(t,e){return e?u.querySelectorAll(t):u.querySelector(t)}function Y(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function B(t,e){var n;t.classList?t.classList.remove(e):(n=new RegExp("(\\s|^)"+e+"(\\s|$)"),t.className=t.className.replace(n," "))}function J(t,e,n,r){t.addEventListener(e,n,r)}function W(t,e,n){t.removeEventListener(e,n)}function X(t,e,n){var r=1-n;return n*n*n+3*n*n*r*e+3*n*r*r*t}function G(s,a,o,u){function t(t){var e,n,r,i=function(t,e,n){for(var r=n,i=1;.001<Math.abs(i);){if(i=X(t,e,r)-n,Math.abs(i)<.001)return r;r-=i/2}return r}(s,o,(e=t,n=0,r=1,Math.max(n,Math.min(e,r))));return X(a,u,i)}return t.easingName="cubic-bezier("+s+","+a+","+o+","+u+")",t}function Q(n,r){function t(t){var e=1/n;return 1<=t?1:("start"===r?e:0)+Math.floor(t/e)*e}return t.easingName="steps("+n+", "+r+")",t}var e,tt=Q(1,"start"),et=Q(1,"end"),nt=G(0,0,1,1),rt=G(.25,.1,.25,1),it=G(.42,0,1,1),st=G(0,0,.58,1),at=G(.42,0,.58,1),ot="__SCENEJS_",ut="data-scene-id",ft="animation-timing-function",ht={transform:{},filter:{},attribute:{},html:!0},ct={easing:[ft]},lt=((e={})[ft]=!0,e.contents=!0,e.html=!0,e),pt=1e6,vt=1e-6,dt="duration",mt="fillMode",gt="direction",yt="iterationCount",Et="delay",St="easing",wt="playSpeed",Ot="easingName",xt="paused",Mt="ended",bt="timeupdate",Ft="play",Tt="running",jt="iteration",It="startAnimation",At="pauseAnimation",Nt="alternate",Dt="reverse",Ct="alternate-reverse",_t="infinite",Pt="playState",Ut="playCSS",Rt="prevTime",kt="tickTime",zt="currentTime",Lt="selector",Vt="transform",$t={linear:nt,ease:rt,"ease-in":it,"ease-out":st,"ease-in-out":at,"step-start":tt,"step-end":et},qt="_///_",Kt=[dt,mt,gt,yt,Et,St,wt],Zt=[xt,Mt,bt,"animate",Ft,jt],Ht=function(){function a(t,e){this.prefix="",this.suffix="",this.model="",this.type="",this.separator=",",e&&this.setOptions(e),this.value=I(t)?t.split(this.separator):t}var t=a.prototype;return t.setOptions=function(t){for(var e in t)this[e]=t[e];return this},t.size=function(){return this.value.length},t.get=function(t){return this.value[t]},t.set=function(t,e){return this.value[t]=e,this},t.clone=function(){var t=this,e=t.separator,n=t.prefix,r=t.suffix,i=t.model,s=t.type;return new a(this.value.map(function(t){return t instanceof a?t.clone():t}),{separator:e,prefix:n,suffix:r,model:i,type:s})},t.toValue=function(){return this.prefix+this.join()+this.suffix},t.join=function(){return this.value.map(function(t){return t instanceof a?t.toValue():t}).join(this.separator)},t.forEach=function(t){return this.value.forEach(t),this},a}();function Yt(t){var e=d;return 3===t.length&&(t[3]=1),new Ht(t,{model:e,separator:",",type:"color",prefix:e+"(",suffix:")"})}function Bt(t,e){return new Ht(t,{type:"array",separator:e})}function Jt(t,e){if(!I(t))return j(t)?Bt(t,","):t;var n,r,i=C(t);return 1<i.length?Bt(i.map(function(t){return Jt(t)}),","):1<(i=D(t,"")).length?Bt(i.map(function(t){return Jt(t)})," "):(i=/^(['"])([^'"]*)(['"])$/g.exec(t))&&i[1]===i[3]?new Ht([Jt(i[2])],{prefix:i[1],suffix:i[1]}):-1!==t.indexOf("(")?function(t){var e=_(t),n=e.prefix,r=e.value,i=e.suffix;if(void 0===r)return t;if(-1<h.indexOf(n))return Yt(Z(t));var s=Jt(r,n),a=[r],o=",",u=n+"(",f=")"+i;return s instanceof Ht&&(o=s.separator,a=s.value,u+=s.prefix,f=s.suffix+f),new Ht(a,{separator:o,model:n,prefix:u,suffix:f})}(t):"#"===t.charAt(0)&&"url"!==e?(r=Z(n=t))?Yt(r):n:t}function Wt(t){return t instanceof Ht}function Xt(t){var e=typeof t;if(e===o){if(j(t))return S;if(Wt(t))return E}else if(e===n||e===i)return"value";return e}function Gt(t){return T(t)&&t.constructor===Object}function Qt(t,e){var n=[];if(Gt(t))for(var r in t)e.push(r),n=n.concat(Qt(t[r],e)),e.pop();else n.push(e.slice());return n}function te(t){return Math.round(t*pt)/pt}function ee(t,e,n){void 0===n&&(n=t.length);for(var r=e,i=0;i<n;++i){if(!T(r)||null==r)return;r=r[t[i]]}return r}function ne(t,e,n){var r=e.length,i=t;if(0===r)return!1;for(var s=0;s<r;++s){if(!0===i)return!1;if(!(i=i[e[s]])||!n&&!0===i)return!1}return!0}function re(t,e){return ne(ht,t,e)}function ie(t){return ne(lt,t,!0)}function se(t,e){t.state[Ut]=e}function ae(t){return t.state[Ut]&&t.isPaused()}function oe(t){return!t.isEnded()&&t.state[Ut]}function ue(t){for(;;){var e=""+Math.floor(1e7*Math.random());if(!c||!t)return e;if(!H('[data-scene-id="'+e+'"]'))return e}}function fe(t){return t.getId()||t.setId(ue(!1)).getId()}function he(t){return(""+t).match(/[0-9a-zA-Z]+/g).join("")}function ce(t,e,n,r){if(void 0===r&&(r={}),M&&t.getPlayState()!==Tt){var i=n||It;if(ae(t))t.addPlayClass(!0,i,r);else{t.isEnded()&&t.setTime(0),e&&t.exportCSS({className:i});var s=t.addPlayClass(!1,i,r);if(!s)return;!function(r,t){function e(){se(r,!1),r.finish()}function n(){r.trigger(Ft),J(t,"animationcancel",e),J(t,"animationend",e),J(t,"animationiteration",o)}var i=r.state,s=r.getDuration(),a=!s||!isFinite(s);r.once(Mt,function(){W(t,"animationcancel",e),W(t,"animationend",e),W(t,"animationiteration",o),W(t,"animationstart",n)});var o=function(t){var e=t.elapsedTime,n=a?0:e/s;i[zt]=e,r.setIteration(n)};J(t,"animationstart",n)}(t,s),se(t,!0)}t.setPlayState(Tt)}}function le(t){var e;if(I(t))if(t in $t)e=$t[t];else{var n=Jt(t);if(I(n))return 0;if("cubic-bezier"===n.model)e=G((t=n.value.map(function(t){return parseFloat(t)}))[0],t[1],t[2],t[3]);else{if("steps"!==n.model)return 0;e=Q(parseFloat(n.value[0]),n.value[1])}}else e=j(t)?G(t[0],t[1],t[2],t[3]):t;return e}var pe=function(){return(pe=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};var ve=function(){function t(){this._events={}}var e=t.prototype;return e.on=function(t,e){if(T(t))for(var n in t)this.on(n,t[n]);else this._addEvent(t,e,{});return this},e.off=function(t,e){if(t)if(T(t))for(var n in t)this.off(n);else{var r,i;e?!(r=this._events[t])||-1<(i=z(r,function(t){return t.listener===e}))&&r.splice(i,1):this._events[t]=[]}else this._events={};return this},e.once=function(e,t){var n=this;return t&&this._addEvent(e,t,{once:!0}),new Promise(function(t){n._addEvent(e,t,{once:!0})})},e.emit=function(e,n){var r=this;void 0===n&&(n={});var t=this._events[e];if(!e||!t)return!0;var i=!1;return n.eventType=e,n.stop=function(){i=!0},n.currentTarget=this,function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var s=arguments[e],a=0,o=s.length;a<o;a++,i++)r[i]=s[a];return r}(t).forEach(function(t){t.listener(n),t.once&&r.off(e,t.listener)}),!i},e.trigger=function(t,e){return void 0===e&&(e={}),this.emit(t,e)},e._addEvent=function(t,e,n){var r=this._events;r[t]=r[t]||[],r[t].push(pe({listener:e},n))},t}();function de(t,e,n){return n===Dt||(e!==_t&&t===e&&e%1==0?n===(1<=t%2?Ct:Nt):n===(1<=t%2?Nt:Ct))}var me=["id",yt,Et,mt,gt,wt,dt,wt,"iterationTime",Pt],ge=p(me,[St,Ot]),ye=function(n){function t(t){var e=n.call(this)||this;return e.timerId=0,e.state={id:"",easing:0,easingName:"linear",iterationCount:1,delay:0,fillMode:"forwards",direction:"normal",playSpeed:1,currentTime:0,iterationTime:-1,iteration:0,tickTime:0,prevTime:0,playState:xt,duration:0},e.setOptions(t),e}a(t,n);var e,r,i,s=t.prototype;return s.setEasing=function(t){var e=le(t),n=e&&e[Ot]||"linear",r=this.state;return r[St]=e,r[Ot]=n,this},s.setOptions=function(t){for(var e in void 0===t&&(t={}),t){var n=t[e];e!==St?e!==dt?-1<Kt.indexOf(e)&&(this.state[e]=n):n&&this.setDuration(n):this.setEasing(n)}return this},s.getTotalDuration=function(){return this.getActiveDuration(!0)},s.getActiveDuration=function(t){var e=this.state,n=e[yt];return n===_t?1/0:(t?e[Et]:0)+this.getDuration()*n},s.isEnded=function(){return 0===this.state[kt]&&this.state[Pt]===xt||!(this.getTime()<this.getActiveDuration())},s.isPaused=function(){return this.state[Pt]===xt},s.start=function(t){void 0===t&&(t=this.state[Et]);var e=this.state;return e[Pt]=Tt,e[kt]>=t&&(this.trigger(Ft),!0)},s.play=function(e){var n=this,r=this.state,t=r[Et],i=this.getTime();return r[Pt]=Tt,this.isEnded()&&(0===i||i>=this.getActiveDuration())&&this.setTime(-t,!0),this.timerId=L(function(t){r[Rt]=t,n.tick(t,e)}),this.start(),this},s.pause=function(){var t=this.state;return t[Pt]!==xt&&(t[Pt]=xt,this.trigger(xt)),V(this.timerId),this},s.finish=function(){return this.setTime(0),this.state[kt]=0,this.end(),this},s.end=function(){return this.pause(),this.trigger(Mt),this},s.setTime=function(t,e,n){var r=this.getActiveDuration(),i=this.state,s=i[kt],a=i[Et],o=e?t:this.getUnitTime(t);if(i[kt]=a+o,o<0?o=0:r<o&&(o=r),i[zt]=o,this.calculate(),e&&!n){var u=i[kt];if(s<a&&0<=t&&this.start(0),u<s||this.isEnded())return void this.end()}return this.isDelay()||this.trigger(bt,{currentTime:o,time:this.getIterationTime(),iterationCount:i[jt]}),this},s.getTime=function(){return this.state[zt]},s.getUnitTime=function(t){if(I(t)){var e=this.getDuration()||100;if("from"===t)return 0;if("to"===t)return e;var n=P(t),r=n.unit,i=n.value;return"%"===r?(this.getDuration()||this.setDuration(e),te(parseFloat(t)/100*e)):">"===r?i+vt:i}return te(t)},s.isDelay=function(){var t=this.state,e=t[Et],n=t[kt];return 0<e&&n<e},s.setIteration=function(t){var e=this.state,n=Math.floor(t),r=e[yt]===_t?1/0:e[yt];return e[jt]<n&&n<r&&this.trigger(jt,{currentTime:e[zt],iterationCount:n}),e[jt]=t,this},s.calculate=function(){var t=this.state,e=t[yt],n=t[mt],r=t[gt],i=this.getDuration(),s=this.getTime(),a=0===i?0:s/i,o=i?s%i:0;if(!i)return this.setIterationTime(0),this;this.setIteration(a);var u=de(a,e,r),f=isFinite(i);return f&&u&&(o=i-o),f&&e!==_t&&e<=a&&(o=i*("both"===n||"forwards"===n?e%1||1:0),u&&(o=i-o)),this.setIterationTime(o),this},s.tick=function(t,e){var n,r,i,s,a,o=this;this.isPaused()||(r=(n=this.state)[wt],i=n[Rt],s=n[Et],a=n[kt]+Math.min(1e3,t-i)/1e3*r,n[Rt]=t,this.setTime(a-s,!0),e&&1e3*e<t&&this.pause(),n[Pt]!==xt&&(this.timerId=L(function(t){o.tick(t,e)})))},function(t,e,n,r){var i,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var o=t.length-1;0<=o;o--)(i=t[o])&&(a=(s<3?i(a):3<s?i(e,n,a):i(e,n))||a);return 3<s&&a&&Object.defineProperty(e,n,a),a}([(e=ge,r=me,i="state",function(t){var n=t.prototype;e.forEach(function(t){n[U("get "+t)]=function(){return this[i][t]}}),r.forEach(function(e){n[U("set "+e)]=function(t){return this[i][e]=t,this}})})],t)}(ve),Ee=function(){function a(t){this.separator=t,this.orderMap={}}var t=a.prototype;return t.getFullName=function(t){return t.join(this.separator)},t.get=function(t){return this.orderMap[this.getFullName(t)]},t.gets=function(t,e){void 0===e&&(e=!0);var a=[],n=this;return function r(i,s){var t=n.get(i);if(t)return t.forEach(function(t){var e=s.concat([t]),n=r(i.concat([t]),e);n&&n.length||a.push(s.concat([t]))}),t}(t,e?t:[]),a},t.set=function(n,t){var r=this;return n.forEach(function(t,e){r.addName(n.slice(0,e),t)}),this.orderMap[this.getFullName(n)]=t},t.add=function(t){var e=t.length;return e?this.addName(t.slice(0,-1),t[e-1]):[]},t.addName=function(t,e){var n=this.get(t)||this.set(t,[]);return-1===n.indexOf(e)&&n.push(e),n},t.findIndex=function(t,e){var n=this.orderMap[this.getFullName(t)];return n?n.indexOf(e):-1},t.remove=function(t){var e=this.getFullName(t),n=this.orderMap;for(var r in n)0===r.indexOf(e)&&delete n[r];var i,s,a=t.length;return a&&(i=t.slice(0,-1),s=t[a-1],this.splice(i,this.findIndex(i,s),1)),this},t.filter=function(t,e,n){void 0===n&&(n=!0);var r=this.gets(t,n).filter(e),i=new a(this.separator),s=n?[]:t;return r.forEach(function(t){i.add(s.concat(t))}),i},t.splice=function(t,e,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];var s=this.get(t)||this.set(t,[]);return s.splice.apply(s,[e,n].concat(r)),this},t.clear=function(){this.orderMap={}},t.setObject=function(t){var e=this.orderMap;for(var n in t)e[n]=t[n].slice()},t.getObject=function(){var t={},e=this.orderMap;for(var n in e)t[n]=e[n].slice();return t},t.clone=function(){var t=new a(this.separator);return t.setObject(t.orderMap),t},a}();function Se(e,t){if(void 0===t&&(t=[]),!e)return"";var n=[],r=$(e);return q(r,t),r.forEach(function(t){n.push(t.replace(/\d$/g,"")+"("+e[t]+")")}),n.join(" ")}function we(t,e){return void 0===e&&(e=!1),Oe({},t,e)}function Oe(t,e,n){for(var r in void 0===n&&(n=!1),e){var i=e[r],s=Xt(i);s===E?t[r]=n?i.toValue():i.clone():s===y?t[r]=n?Me([r],i):i:s===S?t[r]=i.slice():s===o?T(t[r])&&!Wt(t[r])?Oe(t[r],i,n):t[r]=we(i,n):t[r]=e[r]}return t}function xe(t){return t[0]in ct?ct[t[0]]:t}function Me(t,e){var n=Xt(e);if(n===E)return e.toValue();if(n===y){if(t[0]!==ft)return Me(t,e())}else if(n===o)return we(e,!0);return e}var be=function(){function l(t){void 0===t&&(t={}),this.properties={},this.orderMap=new Ee(qt),this.properties={},this.set(t)}var t=l.prototype;return t.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this.raw.apply(this,t);return Me(xe(t),n)},t.getOrders=function(t){return this.orderMap.get(t)},t.setOrders=function(t,e){return this.orderMap.set(t,e)},t.getOrderObject=function(){return this.orderMap.getObject()},t.setOrderObject=function(t){this.orderMap.setObject(t)},t.getKeys=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this.raw.apply(this,t),r=Xt(n)===o?$(n):[];return q(r,this.orderMap.get(t)),r},t.gets=function(){for(var e=this,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=this.get.apply(this,n);return this.getKeys.apply(this,n).map(function(t){return{key:t,value:r[t],children:e.gets.apply(e,p(n,[t]))}})},t.raw=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return ee(xe(t),this.properties)},t.remove=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=xe(t),r=n.length;if(!r)return this;this.orderMap.remove(n);var i=ee(n,this.properties,r-1);return T(i)&&delete i[n[r-1]],this},t.set=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n,r=this,i=t.length,s=t.slice(0,-1),a=t[i-1],o=s[0];if(1===i&&a instanceof l)r.merge(a);else if(o in ct)r._set(ct[o],a);else if(2===i&&j(o))r._set(o,a);else if(Wt(a))re(s)?r.set.apply(r,p(s,[function e(t,n){void 0===n&&(n={});var r,i=t.model;return i?(t.setOptions({model:"",suffix:"",prefix:""}),r=1<t.size()?t:t.get(0),n[i]=r):t.forEach(function(t){e(t,n)}),n}(a)])):r._set(s,a);else if(j(a))r._set(s,a);else if(T(a))for(var u in!r.has.apply(r,s)&&re(s)&&r._set(s,{}),a)r.set.apply(r,p(s,[u,a[u]]));else if(I(a)){if(re(s,!0))return ie(s)||!re(s)?this._set(s,a):T(n=Jt(a))&&r.set.apply(r,p(s,[n])),this;var f=function(t){for(var e=D(t,";"),n={},r=e.length,i=r,s=0;s<r;++s){var a=D(e[s],":");a.length<2||!a[1]?--i:n[a[0].trim()]=Jt(a[1].trim())}return{styles:n,length:i}}(a),h=f.styles,c=f.length;for(var u in h)r.set.apply(r,p(s,[u,h[u]]));if(c)return this;r._set(s,a)}else r._set(s,a);return r},t.getNames=function(){return Qt(this.properties,[])},t.has=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=xe(t),r=n.length;return!!r&&!F(ee(n,this.properties,r))},t.clone=function(){var t=new l;return t.setOrderObject(this.orderMap.orderMap),t.merge(this)},t.merge=function(t){var e=this.properties,n=t.properties;return n&&Oe(e,n),this},t.toCSSObject=function(){var t,e=this.get(),n={};for(var r in e){re([r],!0)||(t=e[r],r===ft?n[ft.replace("animation",M)]=(I(t)?t:t[Ot])||"initial":n[r]=t)}var i=Se(e[Vt],this.orderMap.get([Vt])),s=Se(e.filter,this.orderMap.get([O]));return w&&i&&(n[w]=i),O&&s&&(n[O]=s),n},t.toCSS=function(){var e=this.toCSSObject(),n=[],t=$(e);return q(t,this.orderMap.get([])),t.forEach(function(t){n.push(t+":"+e[t]+";")}),n.join("")},t.clear=function(){return this.properties={},this.orderMap.clear(),this},t._set=function(t,e){for(var n,r=this.properties,i=t.length,s=0;s<i-1;++s){var a=t[s];a in r||(r[a]={}),r=r[a]}i&&(n=t[i-1],this.orderMap.add(t),r[n]=1===i&&n===ft?le(e):I(e)&&!ie(t)?Jt(e,n):e)},l}();function Fe(t,n,r,i){var s=n.length;return t.map(function(t,e){return s<=e?t:je(t,n[e],r,i)})}function Te(t,e,n,r){var i=t.type;if("color"===i)return function(t,e,n,r){var i=t.value,s=e.value,a=t.model;if(a!==e.model)return je(t.toValue(),e.toValue(),n,r);3===i.length&&(i[3]=1),3===s.length&&(s[3]=1);for(var o=Fe(i,s,n,r),u=a,f=0;f<3;++f)o[f]=parseInt(o[f],10);return new Ht(o,{type:"color",model:u,prefix:u+"(",suffix:")"})}(t,e,n,r);var s=Fe(t.value,e.value,n,r);return new Ht(s,{type:i,separator:t.separator||e.separator,prefix:t.prefix||e.prefix,suffix:t.suffix||e.suffix,model:t.model||e.model})}function je(t,e,n,r){if(0===r)return e;if(0===n||n+r===0)return t;var i=Xt(t),s=Xt(e),a=i===y,o=s===y;if(a||o)return function(){return je(a?Jt(t()):t,o?Jt(e()):e,n,r)};if(i!==s)return t;if(i===E)return Te(t,e,n,r);if(i===S)return Fe(t,e,n,r);if("value"!==i)return t;var u,f=P(""+t),h=P(""+e);if(isNaN(f.value)||isNaN(h.value))return t;u=x(f.value,h.value,n,r);var c=f.prefix||h.prefix,l=f.unit||h.unit;return c||l?c+u+l:u}var Ie=function(t){for(var e=5381,n=t.length;n;)e=33*e^t.charCodeAt(--n);return e>>>0};function Ae(t,e,n,r){var i,s,a=document.createElement("style");return a.setAttribute("type","text/css"),a.setAttribute("data-styled-id",t),n.nonce&&a.setAttribute("nonce",n.nonce),a.innerHTML=(i=t,s=e,n.original?s:s.replace(/([^};{\s}][^};{]*|^\s*){/gm,function(t,e){var n=e.trim();return(n?C(n):[""]).map(function(t){var e=t.trim();return 0===e.indexOf("@")?e:-1<e.indexOf(":global")?e.replace(/\:global/g,""):-1<e.indexOf(":host")?""+e.replace(/\:host/g,"."+i):e?"."+i+" "+e:"."+i}).join(", ")+" {"})),(r||document.head||document.body).appendChild(a),a}function Ne(s){var a,o="rCS"+Ie(s).toString(36),u=0;return{className:o,inject:function(t,e){void 0===e&&(e={});var n,r=function(t){if(t&&t.getRootNode){var e=t.getRootNode();if(11===e.nodeType)return e}}(t),i=0===u;return(r||i)&&(n=Ae(o,s,e,r)),i&&(a=n),r||++u,{destroy:function(){r?(t.removeChild(n),n=null):(0<u&&--u,0===u&&a&&(a.parentNode.removeChild(a),a=null))}}}}}function De(t,e){for(var n=t.length,r=0;r<n;++r){if(t[r]===e)return[r,r];if(t[r]>e)return[0<r?r-1:0,r]}return[n-1,n-1]}function Ce(t){var e=[];for(var n in t)e.push(M+"-"+function(t,r){return void 0===r&&(r="-"),t.replace(/([a-z])([A-Z])/g,function(t,e,n){return""+e+r+n.toLowerCase()})}(n)+":"+t[n]+";");return e.join("")}function _e(t,e,n){var r=t[t.length-1];r&&r[0]===e&&r[1]===n||t.push([te(e),te(n)])}var Pe=function(u){function l(t,e){var n=u.call(this)||this;return n.times=[],n.items={},n.nameMap=new Ee(qt),n.elements=[],n.needUpdate=!0,n.load(t,e),n}a(l,u);var t=l.prototype;return t.getDuration=function(){var t=this.times,e=t.length;return(0===e?0:t[e-1])||this.state[dt]},t.size=function(){return this.times.length},t.setDuration=function(t){if(!t)return this;var n,e,r,i,s=this.getDuration();return 0<s?(n=t/s,e=this.times,r=this.items,i={},this.times=e.map(function(t){var e=te(t*n);return i[e]=r[t],e}),this.items=i):this.newFrame(t),this},t.setId=function(t){var e,n=this.state,r=this.elements,i=r.length;return n.id=t||ue(!!i),i&&!n[Lt]&&(e=he(this.getId()),n[Lt]="["+ut+'="'+e+'"]',r.forEach(function(t){t.setAttribute(ut,e)})),this},t.set=function(e){for(var f,h=this,c=[],t=1;t<arguments.length;t++)c[t-1]=arguments[t];if(e instanceof l)return this.set(0,e);if(j(e))for(var n=e.length,r=0;r<n;++r){var i=1===n?0:this.getUnitTime(r/(n-1)*100+"%");this.set(i,e[r])}else if(T(e)){for(var i in e)!function(t){var a=e[t];C(t).forEach(function(t){var e=h.getUnitTime(t);isNaN(e)?Qt(a,[t]).forEach(function(t){for(var e,n=ee(t.slice(1),a),r=j(n)?n:[ee(t,h.target),n],i=r.length,s=0;s<i;++s)(e=h.newFrame(s/(i-1)*100+"%")).set.apply(e,p(t,[r[s]]))}):h.set(e,a)})}(i)}else{F(e)||(f=c[0],C(e+"").forEach(function(t){var e,n=h.getUnitTime(t);if(f instanceof l){var r=f.getDelay(),i=f.toObject(!h.hasFrame(n+r)),s=f.getDuration(),a=-1<f.getDirection().indexOf("reverse");for(var o in i){var u=a?s-parseFloat(o):parseFloat(o);h.set(n+u,i[o])}}else{1===c.length&&j(f)?f.forEach(function(t){h.set(n,t)}):(e=h.newFrame(n)).set.apply(e,c)}}))}return this.needUpdate=!0,this},t.get=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=this.getFrame(t);return r&&r.get.apply(r,e)},t.getOrders=function(t){return this.needUpdate&&this.update(),this.nameMap.get(t)},t.setOrders=function(t,e){this.needUpdate&&this.update();var n=this.nameMap.set(t,e);return this.updateFrameOrders(),n},t.getOrderObject=function(){return this.nameMap.getObject()},t.setOrderObject=function(t){this.nameMap.setObject(t),this.updateFrameOrders()},t.remove=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return n.length?(e=this.getFrame(t))&&e.remove.apply(e,n):this.removeFrame(t),this.needUpdate=!0,this},t.append=function(t){return t instanceof l?this.set(this.getDuration(),t):this.append(new l(t)),this},t.prepend=function(t){var e,n;return t instanceof l?(e=t.getDuration()+t.getDelay(),n=this.getFrame(0),this.removeFrame(0),this.unshift(e),this.set(0,t),this.set(e+vt,n)):this.prepend(new l(t)),this},t.unshift=function(n){var t=this.times,r=this.items,i={};return this.times=t.map(function(t){var e=te(n+t);return i[e]=r[t],e}),this.items=i,this},t.toObject=function(n){void 0===n&&(n=!0);var r={},i=this.getDelay();return this.forEach(function(t,e){r[(e||n?0:vt)+i+e]=t.clone()}),r},t.setSelector=function(t){return A(t)?this.setElement(t(this.getId())):this.setElement(t),this},t.getElements=function(){return this.elements},t.setElements=function(t){return this.setElement(t)},t.setElement=function(t){var e,n,s=this.state,a=[];return t?(!0===t||I(t)?(e=!0===t?""+s.id:t,n=/([\s\S]+)(:+[a-zA-Z]+)$/g.exec(e),a=R(H(n?n[1]:e,!0)),s[Lt]=e):a=t instanceof Element?[t]:R(t),a.length&&(this.elements=a,this.setId(this.getId()),this.target=a[0].style,this.targetFunc=function(t){var e,n=t.get("attribute");if(n){for(var r in n)!function(e){a.forEach(function(t){t.setAttribute(e,n[e])})}(r)}t.has("html")&&(e=t.get("html"),a.forEach(function(t){t.innerHTML=e}));var i=t.toCSS();if(s.cssText!==i)return s.cssText=i,a.forEach(function(t){t.style.cssText+=i}),t}),this):this},t.setTarget=function(r){return this.target=r,this.targetFunc=function(t){var e=t.get();for(var n in e)r[n]=e[n]},this},t.setCSS=function(t,e){return void 0===e&&(e=[]),this.set(t,function(t,e){if(!t||!e||!e.length)return{};var n;if(t instanceof Element)n=t;else{if(!t.length)return{};n=t[0]}for(var r={},i=window.getComputedStyle(n),s=e.length,a=0;a<s;++a)r[e[a]]=i[e[a]];return r}(this.elements,e)),this},t.setTime=function(t,e,n,r){u.prototype.setTime.call(this,t,e,n);var i=this.getIterationTime(),s=this.getEasing()||r,a=this.getNowFrame(i,s),o=this.getTime();return this.temp=a,this.trigger("animate",{frame:a,currentTime:o,time:i}),this.targetFunc&&this.targetFunc(a),this},t.update=function(){var e=this.nameMap,n={};this.forEach(function(t){!function t(e,n){for(var r in n)Gt(n[r])?(T(e[r])||(e[r]={}),t(e[r],n[r])):e[r]=!0;return e}(n,t.properties)});var s=new Ee(qt);return function n(r,i){var t=$(r);q(t,e.get(i)),s.set(i,t),t.forEach(function(t){var e=r[t];T(e)&&n(e,p(i,[t]))})}(n,[]),this.nameMap=s,this.forEach(function(t){t.setOrderObject(s.orderMap)}),this.needUpdate=!1,this},t.newFrame=function(t){var e=this.getFrame(t);return e||(e=new be,this.setFrame(t,e),e)},t.setFrame=function(t,e){var n=this.getUnitTime(t);return this.items[n]=e,function(t,e){for(var n=t.length,r=0;r<n;++r)if(e<t[r])return t.splice(r,0,e);t[n]=e}(this.times,n),this.needUpdate=!0,this},t.getFrame=function(t){return this.items[this.getUnitTime(t)]},t.removeFrame=function(t){var e=this.getUnitTime(t),n=this.items,r=this.times.indexOf(e);return delete n[e],-1<r&&this.times.splice(r,1),this.needUpdate=!0,this},t.hasFrame=function(t){return this.getUnitTime(t)in this.items},t.hasName=function(t){return this.needUpdate&&this.update(),!!this.nameMap.get(t)},t.mergeFrame=function(t,e){return e&&this.newFrame(t).merge(e),this},t.getNowFrame=function(n,t,r){var i=this;this.needUpdate&&this.update();var e,s=new be,a=De(this.times,n),o=a[0],u=a[1],f=this.getEasing()||t,h=this.nameMap;if(!this.hasName([ft])||A(e=this.getNowValue(n,[ft],o,u,!1,0,!0))&&(f=e),r){var c=this.getFrame(n),l=c.orderMap.filter([],function(t){return c.has.apply(c,t)});for(var p in ht){var v=h.get([p]);l.get([p])&&v&&l.set([p],v)}h=l}var d=h.gets([]);return s.setOrderObject(h.orderMap),d.forEach(function(t){var e=i.getNowValue(n,t,o,u,r,f,ie(t));F(e)||s.set(t,e)}),s},t.load=function(t,e){var n;if(void 0===t&&(t={}),void 0===e&&(e=t.options),e&&this.setOptions(e),j(t))this.set(t);else if(t.keyframes)this.set(t.keyframes);else for(var r in t)"options"!==r&&this.set(((n={})[r]=t[r],n));return e&&e[dt]&&this.setDuration(e[dt]),this},t.clone=function(){var n=new l;return n.setOptions(this.state),n.setOrderObject(this.nameMap.orderMap),this.forEach(function(t,e){n.setFrame(e,t.clone())}),n},t.forEach=function(e){var t=this.times,n=this.items;return t.forEach(function(t){e(n[t],t,n)}),this},t.setOptions=function(t){void 0===t&&(t={}),u.prototype.setOptions.call(this,t);var e=t.id,n=t.selector,r=t.elements,i=t.element,s=t.target;return e&&this.setId(e),s?this.setTarget(s):n?this.setSelector(n):(r||i)&&this.setElement(r||i),this},t.toCSS=function(t,e,n){void 0===t&&(t={className:It}),void 0===e&&(e=this.getDuration()),void 0===n&&(n=[]);var r=this.state,i=r[Lt];if(!i)return"";var s=this.getDuration();r[dt]=s,n.push(r);var a,o,u,f=R(n).reverse(),h=he(fe(this)),c=n[0],l=z(f,function(t){return t[yt]===_t||!isFinite(t[dt])},n.length-1),p=f.slice(0,l),v=e||p.reduce(function(t,e){return(e[Et]+t*e[yt])/e[wt]},s),d=f.slice(l).reduce(function(t,e){return(t+e[Et])/e[wt]},0),m=(o=r,(-1<(u=z(a=f,function(t){return t[St]&&t[Ot]}))?a[u]:o)[Ot]),g=f[l][yt],y=c[mt],E=f[l][gt],S=Ce({fillMode:y,direction:E,iterationCount:g,delay:d+"s",name:ot+"KEYFRAMES_"+h,duration:v/c[wt]+"s",timingFunction:m}),w=C(i).map(function(t){var e=/([\s\S]+)(:+[a-zA-Z]+)$/g.exec(t);return e?[e[1],e[2]]:[t,""]}),O=t.className,x=t.selector;return"\n    "+((A(x)?x(this,i):x)||w.map(function(t){var e=t[0],n=t[1];return e+"."+O+n}))+" {"+S+"}\n    "+w.map(function(t){var e=t[0],n=t[1];return e+"."+At+n})+" {"+M+"-play-state: paused;}\n    @"+b+" "+ot+"KEYFRAMES_"+h+"{"+this._toKeyframes(v,p,E)+"}"},t.exportCSS=function(t,e,n){if(!this.elements.length)return"";var r=this.toCSS(t,e,n);return n&&!F(n[yt])||(this.styledInjector&&(this.styledInjector.destroy(),this.styledInjector=null),this.styled=Ne(r),this.styledInjector=this.styled.inject(this.getAnimationElement(),{original:!0})),this},t.pause=function(){return u.prototype.pause.call(this),ae(this)&&this.pauseCSS(),this},t.pauseCSS=function(){return this.elements.forEach(function(t){Y(t,At)}),this},t.endCSS=function(){return this.elements.forEach(function(t){B(t,At),B(t,It)}),se(this,!1),this},t.end=function(){return oe(this)&&this.endCSS(),u.prototype.end.call(this),this},t.playCSS=function(t,e,n){return void 0===t&&(t=!0),void 0===n&&(n={}),ce(this,t,e,n),this},t.getAnimationElement=function(){return this.elements[0]},t.addPlayClass=function(t,e,n){void 0===n&&(n={});var r=this.elements,i=r.length,s=Ce(n);if(i)return t?r.forEach(function(t){B(t,At)}):(r.forEach(function(t){var e,n;t.style.cssText+=s,n=It,((e=t).classList?e.classList.contains(n):e.className.match(new RegExp("(\\s|^)"+n+"(\\s|$)")))&&B(t,It)}),r.forEach(function(t){t.clientWidth}),r.forEach(function(t){Y(t,It)})),r[0]},t.clear=function(){return this.times=[],this.items={},this.nameMap=new Ee(qt),this.styledInjector&&this.styledInjector.destroy(),this.styled=null,this.styledInjector=null,this.temp=null,this.needUpdate=!0,this},t.getNowValue=function(t,e,n,r,i,s,a){var o,u,f,h,c,l=this.times,p=l.length,v=F(n),d=F(r);(v||d)&&(c=De(l,t),v&&(n=c[0]),d&&(r=c[1]));for(var m=n;0<=m;--m){if((y=this.getFrame(l[m])).has.apply(y,e)){o=l[m],f=y;break}}var g=f&&f.raw.apply(f,e);if(i&&!re([e[0]]))return o===t?g:void 0;if(a)return g;for(var y,m=r;m<p;++m){if((y=this.getFrame(l[m])).has.apply(y,e)){u=l[m],h=y;break}}var E=h&&h.raw.apply(h,e);return!f||F(g)?E:!h||F(E)||g===E?g:function(t,e,n,r,i,s){if(t===e)return r;if(t===n)return i;if(!s)return je(r,i,t-e,n-t);var a=s((t-e)/(n-e));return je(r,i,a,1-a)}(t,Math.max(o,0),u,g,E,s)},t._toKeyframes=function(i,t,s){var a=this,o={},e=this.times.slice();if(!e.length)return"";var u=this.getDuration();this.getFrame(0)||e.unshift(0),this.getFrame(u)||e.push(u);var n,y,E,r=(n=t,y=e.map(function(t){return[t,t]}),E=[],n.forEach(function(t){for(var e=t[yt],n=t[Et],r=t[wt],i=t[gt],s=Math.ceil(e),a=y[y.length-1][0],o=y.length,u=a*e,f=0;f<s;++f)for(var h=i===Dt||i===Nt&&f%2||i===Ct&&!(f%2),c=0;c<o;++c){var l,p,v=y[h?o-c-1:c],d=v[1],m=a*f+(h?a-v[0]:v[0]),g=y[h?o-c:c-1];if(u<m){0!==c&&(l=a*f+(h?a-g[0]:g[0]),p=x(g[1],d,u-l,m-u),_e(E,(n+a*e)/r,p));break}if(m===u&&E.length&&E[E.length-1][0]===u+n)break;_e(E,(n+m)/r,d)}n&&E.unshift([0,E[0][1]]),y=E,E=[]}),y),f=r[r.length-1];f[0]<i&&_e(r,i,f[1]);var h=-1;return r.map(function(t){var e=t[0],n=t[1];o[n]||(o[n]=(a.hasFrame(n)&&0!==n&&n!==u?a.getNowFrame(n,0,!0):a.getNowFrame(n)).toCSS());var r=e/i*100;return r-h<vt&&(r+=vt),h=r,Math.min(r,100)+"%{\n                "+(0!==e||de(0,1,s)?o[n]:"")+"\n            }"}).join("")},t.updateFrameOrders=function(){var e=this.nameMap.orderMap;this.forEach(function(t){t.setOrderObject(e)})},l}(ye),Ue=function(o){function h(t,e){var n=o.call(this)||this;return n.items={},n.orderMap=new Ee(qt),n.load(t,e),n}a(h,o);var t=h.prototype;return t.getDuration=function(){var e=0;return this.forEach(function(t){e=Math.max(e,t.getTotalDuration()/t.getPlaySpeed())}),e||this.state[dt]},t.setDuration=function(e){this.items;var n,t=this.getDuration();return 0!==e&&isFinite(t)&&(0===t?this.forEach(function(t){t.setDuration(e)}):(n=e/t,this.forEach(function(t){t.setDelay(t.getDelay()*n),t.setDuration(t.getDuration()*n)})),o.prototype.setDuration.call(this,e)),this},t.getItem=function(t){return this.items[t]},t.newItem=function(t,e){if(void 0===e&&(e={}),this.items[t])return this.items[t];var n=new Pe;return this.setItem(t,n),n.setOptions(e),n},t.removeItem=function(t){return delete this.items[t],this.orderMap.remove([t]),this},t.setItem=function(t,e){return e.setId(t),this.items[t]=e,this.orderMap.add([t]),this},t.setTime=function(t,e,n,r){o.prototype.setTime.call(this,t,e,n);var i=this.getIterationTime(),s=this.getEasing()||r,a={};return this.forEach(function(t){t.setTime(i*t.getPlaySpeed()-t.getDelay(),e,!0,s),a[t.getId()]=t.temp}),this.temp=a,this.trigger("animate",{frames:a,currentTime:this.getTime(),time:i}),this},t.forEach=function(n){var r=this.items;return this.getOrders().forEach(function(t,e){n(r[t],t,e,r)}),this},t.toCSS=function(e,t,n){void 0===t&&(t=this.getDuration()),void 0===n&&(n=[]);var r=t&&isFinite(t)?t:0,i=[],s=this.state;return s[dt]=this.getDuration(),this.forEach(function(t){i.push(t.toCSS(e,r,n.concat(s)))}),i.join("")},t.exportCSS=function(t,e,n){var r=this.toCSS(t,e,n);return n&&n.length||(this.styledInjector&&(this.styledInjector.destroy(),this.styledInjector=null),this.styled=Ne(r),this.styledInjector=this.styled.inject(this.getAnimationElement(),{original:!0})),this},t.append=function(t){t.setDelay(t.getDelay()+this.getDuration()),this.setItem(fe(t),t)},t.pauseCSS=function(){return this.forEach(function(t){t.pauseCSS()})},t.pause=function(){return o.prototype.pause.call(this),ae(this)&&this.pauseCSS(),this.forEach(function(t){t.pause()}),this},t.endCSS=function(){this.forEach(function(t){t.endCSS()}),se(this,!1)},t.end=function(){return oe(this)&&this.endCSS(),o.prototype.end.call(this),this},t.getOrders=function(){return this.orderMap.get([])||[]},t.setOrders=function(t){return this.orderMap.set([],t)},t.getAnimationElement=function(){var n;return this.forEach(function(t){var e=t.getAnimationElement();n=n||e}),n},t.addPlayClass=function(n,r,i){var s;return void 0===i&&(i={}),this.forEach(function(t){var e=t.addPlayClass(n,r,i);s=s||e}),s},t.playCSS=function(t,e,n){return void 0===t&&(t=!0),void 0===n&&(n={}),ce(this,t,e,n),this},t.set=function(t){return this.load(t),this},t.clear=function(){this.finish(),this.items={},this.orderMap=new Ee(qt),this.styledInjector&&this.styledInjector.destroy(),this.styled=null,this.styledInjector=null},t.load=function(t,e){if(void 0===t&&(t={}),void 0===e&&(e=t.options),!t)return this;var n=e&&e[Lt]||this.state[Lt];for(var r in t)if("options"!==r){var i=t[r],s=void 0;if(i instanceof h||i instanceof Pe)this.setItem(r,i),s=i;else{if(A(i)&&n){for(var a=c?H(""+(A(n)?n(r):r),!0):[],o=a.length,u=new h,f=0;f<o;++f)u.newItem(f).setId().setElement(a[f]).load(i(f,a[f]));this.setItem(r,u);continue}(s=this.newItem(r)).load(i)}n&&s.setSelector(n)}this.setOptions(e)},t.setOptions=function(t){void 0===t&&(t={}),o.prototype.setOptions.call(this,t);var e=t.selector;return e&&(this.state[Lt]=e),this},t.setSelector=function(n){var t=this.state,r=n||t[Lt];t[Lt]=r;var i=A(n);return r&&this.forEach(function(t,e){t.setSelector(i?n(e):r)}),this},t.start=function(t){void 0===t&&(t=this.state[Et]);var e=o.prototype.start.call(this,t);return e?this.forEach(function(t){t.start(0)}):this.forEach(function(t){t.setPlayState(Tt)}),e},h.VERSION="1.4.3",h}(ye);var Re={__proto__:null,SceneItem:Pe,Frame:be,Animator:ye,default:Ue,OPTIONS:Kt,EVENTS:Zt,FIXED:lt,ROLES:ht,NAME_SEPARATOR:qt,setRole:function(t,e,n){for(var r=t.length,i=ht,s=lt,a=0;a<r-1;++a)i[t[a]]||(i[t[a]]={}),i=i[t[a]],n&&(s[t[a]]||(s[t[a]]={}),s=s[t[a]]);n&&(s[t[r-1]]=!0),i[t[r-1]]=!!e||{}},setAlias:function(t,e){ct[t]=e},bezier:G,steps:Q,STEP_START:tt,STEP_END:et,LINEAR:nt,EASE:rt,EASE_IN:it,EASE_OUT:st,EASE_IN_OUT:at,animate:function(t,e){return new Ue(t,e).play()},animateItem:function(t,e){return new Pe(t,e).play()}};for(var ke in Re)Ue[ke]=Re[ke];return Ue});
//# sourceMappingURL=scene.min.js.map