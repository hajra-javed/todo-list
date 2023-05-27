(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,":root {\n    --field-background: #add8e6;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    border-color: aliceblue;\n}\n\nheader {\n    padding: 10px;\n    font-family: system-ui;\n    background-color: teal;\n    font-size: 3rem;\n    color: white;\n}\n\nmain {\n    display: flex;\n    flex: 1;\n}\n\n.projects {\n    background-color: #95c5ff;\n    flex-basis: 20%;\n}\n\n.projects>.top {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.projects ul li:hover{\n    cursor: pointer;\n}\n\n.new-project {\n    margin: 1em;\n    height: 3em;\n    width: 3em;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n    /* margin: 1em; */\n    margin-right: 16px;\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    gap: 1em;\n}\n\nli {\n    align-items: center;\n    width: 100%;\n    /* padding-left: 1em; */\n    height: 2em;\n    box-sizing: content-box;\n    display: flex;\n    background-color: #ffffb6;\n}\n\nli>input {\n    background-color: transparent;\n    padding: 0;\n    height: 100%;\n    border: none;\n    width: 100%;\n    margin: 0;\n}\n\n\nli > input:focus-visible{\n    outline-style: solid;\n    outline-width: 2px;\n}\n\nli>input,\nli>div {\n    font-family: 'Courier New', Courier, monospace;\n    padding-left: 1em;\n}\n\nli>div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.todos{\n    flex: 1;\n}\n\n.todos > .top{\n    display: flex;\n    justify-content: space-between;\n}\nli > .checked{\n    width: auto;\n}\n\nimg.details:hover{\n    cursor: pointer;\n}\n\n\nform {\n    flex: 1;\n    display: none;\n}\n\nlegend {\n    margin: 1em;\n    font-size: 2em;\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    margin: 2rem;\n    gap: 1em;\n}\n\n.field {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    background-color: var(--field-background);\n    border: solid 2px var(--field-background);\n    height: 4em;\n}\n\nlabel {\n    font-family: monospace;\n    font-size: 1.5em;\n}\n\ndiv>input,\ndiv>select {\n    border: none;\n    height: 2em;\n    width: 100%;\n    border: none;\n    padding: 0;\n    background-color: floralwhite;\n    margin: 0;\n}\n\n/* li > input{\n    padding: 1em;\n} */\n\n#due-date,\n#priority {\n    text-align: center;\n}\n\n.buttons {\n    display: flex;\n    justify-content: center;\n    gap: 1em;\n}\n\nform button {\n    width: 6rem;\n    height: 3rem;\n    /* back */\n}\n\nh4 {\n    margin-left: 1em;\n}",""]);const u=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var c=e[u],s=r.base?c[0]+r.base:c[0],l=o[s]||0,d="".concat(s," ").concat(l);o[s]=l+1;var f=n(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var m=a(h,r);r.byIndex=u,t.splice(u,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=n(o[i]);t[u].references--}for(var c=r(e,a),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),c=n.n(u),s=n(216),l=n.n(s),d=n(589),f=n.n(d),h=n(426),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;class g{static projects=[];static currentProjectIndex=-1;static createProject=(e,t=[])=>{const n=new p(e,t);this.projects.unshift(n)};static pushProject=e=>{this.projects.unshift(e)}}class p{constructor(e,t=[],n=null){this.name=e,this.tasks=t,this.currentTaskIndex=n}addTask(e){this.tasks.unshift(e)}}class v{constructor(e,t,n,r,a,o=!1){this.title=e,this.description=t,this.dueDate=n,this.priority=r,this.notes=a,this.checked=o}}const y=n.p+"0fa012521aa52ec62f1f.png",w=n.p+"87f56dfe3f318107d316.png";class b{static createElement(e,t={}){const n=document.createElement(e);return void 0!==t.classNames&&t.classNames.forEach((e=>{n.classList.add(e)})),void 0!==t.textContent&&(n.textContent=t.textContent),void 0!==t.type&&(n.type=t.type),void 0!==t.children&&t.children.forEach((e=>{n.appendChild(e)})),void 0!==t.value&&(n.value=t.value),void 0!==t.placeholder&&(n.placeholder=t.placeholder),void 0!==t.required&&(n.required=t.required),n}static replaceElement(e,t){t.parentNode.replaceChild(e,t)}static newProject(){const e=document.querySelector("ul"),t=this.createElement("input",{type:"text",placeholder:"Enter project name",required:!0});t.maxLength=26;const n=this.createElement("li",{children:[t]});function r(){const r=t.value;if(""!==r){const e=b.createElement("div",{textContent:r});b.replaceElement(e,t),e.style.fontWeight="bold",n.style.boxShadow="4px 5px 0px 0px black",g.createProject(r),g.currentProjectIndex=0,b.displayProject(),localStorage.projects=JSON.stringify(g.projects),localStorage.currentProjectIndex=0,n.addEventListener("click",(()=>{document.querySelectorAll(".projects > ul > li").forEach(((e,t)=>{e===n&&(g.currentProjectIndex=t,localStorage.currentProjectIndex=t)})),b.displayTasks()}))}else e.removeChild(n)}e.insertBefore(n,e.firstChild),t.focus(),t.addEventListener("focusout",(()=>{r()})),t.addEventListener("keydown",(e=>{"Enter"===e.key&&r()}))}static displayProject(){const e=g.projects[g.currentProjectIndex].name,t=document.querySelector(".todos > .top > h2"),n=document.querySelector("legend");t.textContent=e,n.textContent=e,document.querySelector(".todos > ul").innerHTML=""}static switchMain(){const e=document.querySelector(".todos"),t=document.querySelector("form");"none"===e.style.display?(e.style.display="initial",t.style.display="none"):(e.style.display="none",t.style.display="initial")}static populateProjects(){const e=document.querySelector("ul");g.projects.forEach((t=>{const n=b.createElement("div",{textContent:t.name});n.style.fontWeight="bold";const r=this.createElement("li",{children:[n]});r.style.boxShadow="4px 5px 0px 0px black",e.appendChild(r),r.addEventListener("click",(()=>{document.querySelectorAll(".projects > ul > li").forEach(((e,t)=>{e===r&&(g.currentProjectIndex=t,localStorage.currentProjectIndex=t)})),b.displayTasks()})),this.displayTasks()}))}static displayTasks(){const e=g.currentProjectIndex;if(null===e)return;this.displayProject();const t=g.projects[e].tasks,n=document.querySelector(".todos > ul"),r=b.createElement("ul");for(let n=0;n<t.length;n++){const a=t[n],o=b.createElement("div",{classNames:["title"],textContent:a.title}),i=b.createElement("div",{classNames:["due-date"],textContent:a.dueDate}),u=b.createElement("input",{classNames:["checked"],type:"checkbox"});u.checked=a.checked;const c=b.createElement("img",{classNames:["details"]});c.src=y;const s=b.createElement("img",{classNames:["delete"]});s.src=w;const l=b.createElement("li",{classNames:["task"],children:[o,i,u,c,s]});r.appendChild(l),u.addEventListener("click",(()=>{document.querySelectorAll(".checked").forEach(((t,n)=>{t===u&&(g.projects[e].tasks[n].checked=!g.projects[e].tasks[n].checked,localStorage.projects=JSON.stringify(g.projects))}))})),c.addEventListener("click",(()=>{document.querySelectorAll(".details").forEach(((t,n)=>{t===c&&(g.projects[e].currentTaskIndex=n)}));const t=document.querySelector("#title"),n=document.querySelector("#description"),r=document.querySelector("#due-date"),o=document.querySelector("#priority"),i=document.querySelector("#notes");t.value=a.title,n.value=a.description,r.value=a.dueDate,o.value=a.priority,i.value=a.notes,this.switchMain()})),s.addEventListener("click",(()=>{document.querySelectorAll(".delete").forEach(((t,n)=>{t===s&&(g.projects[e].tasks.splice(n,1),localStorage.projects=JSON.stringify(g.projects),this.displayTasks())}))}))}this.replaceElement(r,n)}}const x=b;function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function k(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function S(e){k(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===T(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function C(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function M(e){k(1,arguments);var t=S(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function j(e){k(1,arguments);var t=S(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=M(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=M(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}var P={};function E(){return P}function D(e,t){var n,r,a,o,i,u,c,s;k(1,arguments);var l=E(),d=C(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:l.weekStartsOn)&&void 0!==r?r:null===(c=l.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=S(e),h=f.getUTCDay(),m=(h<d?7:0)+h-d;return f.setUTCDate(f.getUTCDate()-m),f.setUTCHours(0,0,0,0),f}function q(e,t){var n,r,a,o,i,u,c,s;k(1,arguments);var l=S(e),d=l.getUTCFullYear(),f=E(),h=C(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(c=f.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(d+1,0,h),m.setUTCHours(0,0,0,0);var g=D(m,t),p=new Date(0);p.setUTCFullYear(d,0,h),p.setUTCHours(0,0,0,0);var v=D(p,t);return l.getTime()>=g.getTime()?d+1:l.getTime()>=v.getTime()?d:d-1}function U(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const N=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return U("yy"===t?r%100:r,t.length)},W=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):U(n+1,2)},O=function(e,t){return U(e.getUTCDate(),t.length)},Y=function(e,t){return U(e.getUTCHours()%12||12,t.length)},L=function(e,t){return U(e.getUTCHours(),t.length)},I=function(e,t){return U(e.getUTCMinutes(),t.length)},A=function(e,t){return U(e.getUTCSeconds(),t.length)},F=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return U(Math.floor(r*Math.pow(10,n-3)),t.length)};var H={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return N(e,t)},Y:function(e,t,n,r){var a=q(e,r),o=a>0?a:1-a;return"YY"===t?U(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):U(o,t.length)},R:function(e,t){return U(j(e),t.length)},u:function(e,t){return U(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return U(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return U(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return W(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return U(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){k(1,arguments);var n=S(e),r=D(n,t).getTime()-function(e,t){var n,r,a,o,i,u,c,s;k(1,arguments);var l=E(),d=C(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:l.firstWeekContainsDate)&&void 0!==r?r:null===(c=l.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1),f=q(e,t),h=new Date(0);return h.setUTCFullYear(f,0,d),h.setUTCHours(0,0,0,0),D(h,t)}(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):U(a,t.length)},I:function(e,t,n){var r=function(e){k(1,arguments);var t=S(e),n=M(t).getTime()-function(e){k(1,arguments);var t=j(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),M(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):U(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):O(e,t)},D:function(e,t,n){var r=function(e){k(1,arguments);var t=S(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):U(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return U(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return U(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return U(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Y(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):L(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):U(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):U(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):I(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):A(e,t)},S:function(e,t){return F(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return Q(a);case"XXXX":case"XX":return B(a);default:return B(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return Q(a);case"xxxx":case"xx":return B(a);default:return B(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+z(a,":");default:return"GMT"+B(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+z(a,":");default:return"GMT"+B(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return U(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return U((r._originalDate||e).getTime(),t.length)}};function z(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+U(o,2)}function Q(e,t){return e%60==0?(e>0?"-":"+")+U(Math.abs(e)/60,2):B(e,t)}function B(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+U(Math.floor(a/60),2)+n+U(a%60,2)}const G=H;var R=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},X=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const J={p:X,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return R(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",R(a,t)).replace("{{time}}",X(o,t))}};var _=["D","DD"],Z=["YY","YYYY"];function $(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var V={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function K(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const ee={date:K({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:K({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:K({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var te={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function ne(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const re={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:ne({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:ne({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:ne({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:ne({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:ne({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function ae(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(c)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(c):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(c);return i=e.valueCallback?e.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(u.length)}}}var oe,ie={ordinalNumber:(oe={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(oe.matchPattern);if(!n)return null;var r=n[0],a=e.match(oe.parsePattern);if(!a)return null;var o=oe.valueCallback?oe.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:ae({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:ae({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:ae({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ae({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ae({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const ue={code:"en-US",formatDistance:function(e,t,n){var r,a=V[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:ee,formatRelative:function(e,t,n,r){return te[e]},localize:re,match:ie,options:{weekStartsOn:0,firstWeekContainsDate:1}};var ce=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,se=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,le=/^'([^]*?)'?$/,de=/''/g,fe=/[a-zA-Z]/;function he(e,t,n){var r,a,o,i,u,c,s,l,d,f,h,m,g,p,v,y,w,b;k(2,arguments);var x=String(t),M=E(),j=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:M.locale)&&void 0!==r?r:ue,P=C(null!==(o=null!==(i=null!==(u=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n||null===(s=n.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:M.firstWeekContainsDate)&&void 0!==i?i:null===(d=M.locale)||void 0===d||null===(f=d.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var D=C(null!==(h=null!==(m=null!==(g=null!==(p=null==n?void 0:n.weekStartsOn)&&void 0!==p?p:null==n||null===(v=n.locale)||void 0===v||null===(y=v.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==g?g:M.weekStartsOn)&&void 0!==m?m:null===(w=M.locale)||void 0===w||null===(b=w.options)||void 0===b?void 0:b.weekStartsOn)&&void 0!==h?h:0);if(!(D>=0&&D<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!j.localize)throw new RangeError("locale must contain localize property");if(!j.formatLong)throw new RangeError("locale must contain formatLong property");var q=S(e);if(!function(e){if(k(1,arguments),!function(e){return k(1,arguments),e instanceof Date||"object"===T(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=S(e);return!isNaN(Number(t))}(q))throw new RangeError("Invalid time value");var U=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(q),N=function(e,t){return k(2,arguments),function(e,t){k(2,arguments);var n=S(e).getTime(),r=C(t);return new Date(n+r)}(e,-C(t))}(q,U),W={firstWeekContainsDate:P,weekStartsOn:D,locale:j,_originalDate:q};return x.match(se).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,J[t])(e,j.formatLong):e})).join("").match(ce).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(le))?o[1].replace(de,"'"):a;var u,c=G[i];if(c)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===Z.indexOf(u))||$(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==_.indexOf(e)}(r)||$(r,t,String(e)),c(N,r,j.localize,W);if(i.match(fe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}void 0!==localStorage.currentProjectIndex&&(g.currentProjectIndex=localStorage.currentProjectIndex),void 0!==localStorage.projects&&(JSON.parse(localStorage.projects).reverse().forEach(((e,t)=>{const n=new p(e.name,[],e.currentTaskIndex);e.tasks.reverse().forEach(((e,t)=>{n.addTask(new v(e.title,e.description,e.dueDate,e.priority,e.notes,e.checked))})),g.pushProject(n)})),x.populateProjects());const me=document.querySelector(".new-project"),ge=document.querySelector("form"),pe=document.querySelector("#title"),ve=document.querySelector("#description"),ye=document.querySelector("#due-date"),we=document.querySelector("#priority"),be=document.querySelector("#notes");me.addEventListener("click",(()=>{x.newProject()})),document.querySelector(".new-task").addEventListener("click",(()=>{ge.reset(),ye.value=he(new Date(Date.now()),"yyyy-MM-dd"),pe.focus(),g.projects[g.currentProjectIndex].currentTaskIndex=null})),ge.addEventListener("submit",(e=>{e.preventDefault();const t=new v(pe.value,ve.value,ye.value,we.value,be.value);if(null===g.projects[g.currentProjectIndex].currentTaskIndex)g.projects[g.currentProjectIndex].addTask(t);else{const e=g.projects[g.currentProjectIndex];g.projects[g.currentProjectIndex].tasks[e.currentTaskIndex]=t}localStorage.projects=JSON.stringify(g.projects),x.switchMain(),x.displayTasks()})),ge.addEventListener("reset",(()=>{x.switchMain()}))})()})();