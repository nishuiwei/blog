/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */var b=Object.assign||function(c){for(var t=1;t<arguments.length;t++){var d=arguments[t];for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&(c[l]=d[l])}return c},x=function(t){return t.tagName==="IMG"},de=function(t){return NodeList.prototype.isPrototypeOf(t)},A=function(t){return t&&t.nodeType===1},_=function(t){var d=t.currentSrc||t.src;return d.substr(-4).toLowerCase()===".svg"},F=function(t){try{return Array.isArray(t)?t.filter(x):de(t)?[].slice.call(t).filter(x):A(t)?[t].filter(x):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(x):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},me=function(t){var d=document.createElement("div");return d.classList.add("medium-zoom-overlay"),d.style.background=t,d},le=function(t){var d=t.getBoundingClientRect(),l=d.top,g=d.left,N=d.width,I=d.height,h=t.cloneNode(),j=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,C=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return h.removeAttribute("id"),h.style.position="absolute",h.style.top=l+j+"px",h.style.left=g+C+"px",h.style.width=N+"px",h.style.height=I+"px",h.style.transform="",h},L=function(t,d){var l=b({bubbles:!1,cancelable:!1,detail:void 0},d);if(typeof window.CustomEvent=="function")return new CustomEvent(t,l);var g=document.createEvent("CustomEvent");return g.initCustomEvent(t,l.bubbles,l.cancelable,l.detail),g},se=function c(t){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=window.Promise||function(o){function n(){}o(n,n)},g=function(o){var n=o.target;if(n===S){z();return}v.indexOf(n)!==-1&&M({target:n})},N=function(){if(!(E||!e.original)){var o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(Y-o)>i.scrollOffset&&setTimeout(z,150)}},I=function(o){var n=o.key||o.keyCode;(n==="Escape"||n==="Esc"||n===27)&&z()},h=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o;if(o.background&&(S.style.background=o.background),o.container&&o.container instanceof Object&&(n.container=b({},i.container,o.container)),o.template){var a=A(o.template)?o.template:document.querySelector(o.template);n.template=a}return i=b({},i,n),v.forEach(function(m){m.dispatchEvent(L("medium-zoom:update",{detail:{zoom:u}}))}),u},j=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return c(b({},i,o))},C=function(){for(var o=arguments.length,n=Array(o),a=0;a<o;a++)n[a]=arguments[a];var m=n.reduce(function(r,f){return[].concat(r,F(f))},[]);return m.filter(function(r){return v.indexOf(r)===-1}).forEach(function(r){v.push(r),r.classList.add("medium-zoom-image")}),O.forEach(function(r){var f=r.type,p=r.listener,w=r.options;m.forEach(function(y){y.addEventListener(f,p,w)})}),u},R=function(){for(var o=arguments.length,n=Array(o),a=0;a<o;a++)n[a]=arguments[a];e.zoomed&&z();var m=n.length>0?n.reduce(function(r,f){return[].concat(r,F(f))},[]):v;return m.forEach(function(r){r.classList.remove("medium-zoom-image"),r.dispatchEvent(L("medium-zoom:detach",{detail:{zoom:u}}))}),v=v.filter(function(r){return m.indexOf(r)===-1}),u},U=function(o,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(m){m.addEventListener("medium-zoom:"+o,n,a)}),O.push({type:"medium-zoom:"+o,listener:n,options:a}),u},X=function(o,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(m){m.removeEventListener("medium-zoom:"+o,n,a)}),O=O.filter(function(m){return!(m.type==="medium-zoom:"+o&&m.listener.toString()===n.toString())}),u},q=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o.target,a=function(){var r={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},f=void 0,p=void 0;if(i.container)if(i.container instanceof Object)r=b({},r,i.container),f=r.width-r.left-r.right-i.margin*2,p=r.height-r.top-r.bottom-i.margin*2;else{var w=A(i.container)?i.container:document.querySelector(i.container),y=w.getBoundingClientRect(),k=y.width,J=y.height,Q=y.left,V=y.top;r=b({},r,{width:k,height:J,left:Q,top:V})}f=f||r.width-i.margin*2,p=p||r.height-i.margin*2;var H=e.zoomedHd||e.original,$=_(H)?f:H.naturalWidth||f,ee=_(H)?p:H.naturalHeight||p,T=H.getBoundingClientRect(),te=T.top,oe=T.left,B=T.width,W=T.height,ne=Math.min($,f)/B,re=Math.min(ee,p)/W,P=Math.min(ne,re),ie=(-oe+(f-B)/2+i.margin+r.left)/P,ae=(-te+(p-W)/2+i.margin+r.top)/P,Z="scale("+P+") translate3d("+ie+"px, "+ae+"px, 0)";e.zoomed.style.transform=Z,e.zoomedHd&&(e.zoomedHd.style.transform=Z)};return new l(function(m){if(n&&v.indexOf(n)===-1){m(u);return}var r=function k(){E=!1,e.zoomed.removeEventListener("transitionend",k),e.original.dispatchEvent(L("medium-zoom:opened",{detail:{zoom:u}})),m(u)};if(e.zoomed){m(u);return}if(n)e.original=n;else if(v.length>0){var f=v;e.original=f[0]}else{m(u);return}if(e.original.dispatchEvent(L("medium-zoom:open",{detail:{zoom:u}})),Y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,E=!0,e.zoomed=le(e.original),document.body.appendChild(S),i.template){var p=A(i.template)?i.template:document.querySelector(i.template);e.template=document.createElement("div"),e.template.appendChild(p.content.cloneNode(!0)),document.body.appendChild(e.template)}if(document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",z),e.zoomed.addEventListener("transitionend",r),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(w),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,a()};var w=setInterval(function(){e.zoomedHd.complete&&(clearInterval(w),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),a())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var y=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",y),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),a()})}else a()})},z=function(){return new l(function(o){if(E||!e.original){o(u);return}var n=function a(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild(S),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),E=!1,e.zoomed.removeEventListener("transitionend",a),e.original.dispatchEvent(L("medium-zoom:closed",{detail:{zoom:u}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,o(u)};E=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(L("medium-zoom:close",{detail:{zoom:u}})),e.zoomed.addEventListener("transitionend",n)})},M=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o.target;return e.original?z():q({target:n})},K=function(){return i},D=function(){return v},G=function(){return e.original},v=[],O=[],E=!1,Y=0,i=d,e={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?i=t:(t||typeof t=="string")&&C(t),i=b({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},i);var S=me(i.background);document.addEventListener("click",g),document.addEventListener("keyup",I),document.addEventListener("scroll",N),window.addEventListener("resize",z);var u={open:q,close:z,toggle:M,update:h,clone:j,attach:C,detach:R,on:U,off:X,getOptions:K,getImages:D,getZoomedImage:G};return u};function ue(c,t){t===void 0&&(t={});var d=t.insertAt;if(!(!c||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],g=document.createElement("style");g.type="text/css",d==="top"&&l.firstChild?l.insertBefore(g,l.firstChild):l.appendChild(g),g.styleSheet?g.styleSheet.cssText=c:g.appendChild(document.createTextNode(c))}}var ce=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";ue(ce);export{se as default};
