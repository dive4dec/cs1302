var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,u,l,s,f,d,p,c,h,v={299:(e,r,t)=>{var n={"./index":()=>t.e(611).then((()=>()=>t(611))),"./extension":()=>t.e(611).then((()=>()=>t(611))),"./style":()=>t.e(747).then((()=>()=>t(747)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},b={};function y(e){var r=b[e];if(void 0!==r)return r.exports;var t=b[e]={id:e,exports:{}};return v[e](t,t.exports,y),t.exports}y.m=v,y.c=b,y.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return y.d(r,{a:r}),r},y.d=(e,r)=>{for(var t in r)y.o(r,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},y.f={},y.e=e=>Promise.all(Object.keys(y.f).reduce(((r,t)=>(y.f[t](e,r),r)),[])),y.u=e=>e+"."+{611:"342f09dd5d6e1a97e84a",747:"38613bb18ba647ffa665"}[e]+".js?v="+{611:"342f09dd5d6e1a97e84a",747:"38613bb18ba647ffa665"}[e],y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="jupyterlab-filesystem-access:",y.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){i=f;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,y.nc&&i.setAttribute("nonce",y.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},y.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{y.S={};var e={},r={};y.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];y.o(y.S,t)||(y.S[t]={});var o=y.S[t],i="jupyterlab-filesystem-access",u=[];return"default"===t&&((e,r,t,n)=>{var a=o[e]=o[e]||{},u=a[r];(!u||!u.loaded&&(1!=!u.eager?n:i>u.from))&&(a[r]={get:()=>y.e(611).then((()=>()=>y(611))),from:i,eager:!1})})("jupyterlab-filesystem-access","0.5.2"),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;y.g.importScripts&&(e=y.g.location+"");var r=y.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),y.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(u=e[o]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var i=[];for(o=1;o<e.length;o++){var u=e[o];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():a(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var s,f,d=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!l||("u"==d?u>n&&!a:""==d!=a);if("u"==f){if(!l||"u"!=d)return!1}else if(l)if(d==f)if(u<=n){if(s!=e[u])return!1}else{if(a?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=d&&"n"!=d){if(a||u<=n)return!1;l=!1,u--}else{if(u<=n||f<d!=a)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,u--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?o(h,r):!c())}return!!c()},i=(e,r)=>{var t=y.S[e];if(!t||!y.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",s=(e,r,t,n)=>{var a=u(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(l(e,t,a,n)),f(e[t][a])},f=e=>(e.loaded=1,e.get()),d=(e=>function(r,t,n,a){var o=y.I(r);return o&&o.then?o.then(e.bind(e,r,y.S[r],t,n,a)):e(r,y.S[r],t,n)})(((e,r,t,n)=>(i(e,t),s(r,0,t,n)))),p={},c={207:()=>d("default","@jupyterlab/filebrowser",[1,3,4,4]),309:()=>d("default","@jupyterlab/coreutils",[1,5,4,4]),318:()=>d("default","@jupyterlab/apputils",[1,3,4,4]),485:()=>d("default","@jupyterlab/services",[1,6,4,4]),781:()=>d("default","@jupyterlab/ui-components",[1,3,4,4]),840:()=>d("default","@lumino/signaling",[1,1,10,0]),956:()=>d("default","@jupyterlab/translation",[1,3,4,4])},h={611:[207,309,318,485,781,840,956]},y.f.consumes=(e,r)=>{y.o(h,e)&&h[e].forEach((e=>{if(y.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,y.m[e]=t=>{delete y.c[e],t.exports=r()}},n=r=>{delete p[e],y.m[e]=t=>{throw delete y.c[e],r}};try{var a=c[e]();a.then?r.push(p[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={463:0};y.f.j=(r,t)=>{var n=y.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=y.p+y.u(r),i=new Error;y.l(o,(t=>{if(y.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,u]=t,l=0;if(o.some((r=>0!==e[r]))){for(n in i)y.o(i,n)&&(y.m[n]=i[n]);u&&u(y)}for(r&&r(t);l<o.length;l++)a=o[l],y.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkjupyterlab_filesystem_access=self.webpackChunkjupyterlab_filesystem_access||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var m=y(299);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["jupyterlab-filesystem-access"]=m})();