let t=0,e=!1;const n="undefined"!=typeof window?window:{},l=n.CSS,o=n.document||{head:{}},s={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},c=t=>Promise.resolve(t),r=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),i=(t,e,n)=>{n&&n.map(([n,l,o])=>{const c=u(t,n),r=a(e,o),i=f(n);s.ael(c,l,r,i),(e.o=e.o||[]).push(()=>s.rel(c,l,r,i))})},a=(t,e)=>n=>{256&t.t?t.s[e](n):(t.u=t.u||[]).push([e,n])},u=(t,e)=>32&e?o.body:t,f=t=>0!=(2&t),p=new WeakMap,m=t=>"sc-"+t,d={},$=t=>"object"==(t=typeof t)||"function"===t,h=(t,e,...n)=>{let l=null,o=!1,s=!1,c=[];const r=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!$(l))&&(l+=""),o&&s?c[c.length-1].p+=l:c.push(o?y(null,l):l),s=o)};if(r(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}const i=y(t,null);return i.$=e,c.length>0&&(i.h=c),i},y=(t,e)=>({t:0,_:t,p:e,j:null,h:null,$:null}),w={},b=(t,e,l,o,c,r)=>{if(l!==o){let a=I(t,e),u=e.toLowerCase();if("class"===e){const e=t.classList,n=j(l),s=j(o);e.remove(...n.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!n.includes(t)))}else if("style"===e){for(const e in l)o&&null!=o[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in o)l&&o[e]===l[e]||(e.includes("-")?t.style.setProperty(e,o[e]):t.style[e]=o[e])}else if(a||"o"!==e[0]||"n"!==e[1]){const n=$(o);if((a||n&&null!==o)&&!c)try{if(t.tagName.includes("-"))t[e]=o;else{let n=null==o?"":o;"list"===e?a=!1:null!=l&&t[e]==n||(t[e]=n)}}catch(i){}null==o||!1===o?t.removeAttribute(e):(!a||4&r||c)&&!n&&t.setAttribute(e,o=!0===o?"":o)}else e="-"===e[2]?e.slice(3):I(n,u)?u.slice(2):u[2]+e.slice(3),l&&s.rel(t,e,l,!1),o&&s.ael(t,e,o,!1)}},_=/\s/,j=t=>t?t.split(_):[],v=(t,e,n,l)=>{const o=11===e.j.nodeType&&e.j.host?e.j.host:e.j,s=t&&t.$||d,c=e.$||d;for(l in s)l in c||b(o,l,s[l],void 0,n,e.t);for(l in c)b(o,l,s[l],c[l],n,e.t)},g=(t,e,n)=>{let l,s,c=e.h[n],r=0;if(null!==c.p)l=c.j=o.createTextNode(c.p);else if(l=c.j=o.createElement(c._),v(null,c,!1),c.h)for(r=0;r<c.h.length;++r)s=g(t,c,r),s&&l.appendChild(s);return l},M=(t,e,n,l,o,s)=>{let c,r=t;for(;o<=s;++o)l[o]&&(c=g(null,n,o),c&&(l[o].j=c,r.insertBefore(c,e)))},L=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.j.remove()},S=(t,e)=>t._===e._,U=(t,e)=>{const n=e.j=t.j,l=t.h,o=e.h,s=e.p;null===s?(v(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,c=0,r=e.length-1,i=e[0],a=e[r],u=l.length-1,f=l[0],p=l[u];for(;s<=r&&c<=u;)null==i?i=e[++s]:null==a?a=e[--r]:null==f?f=l[++c]:null==p?p=l[--u]:S(i,f)?(U(i,f),i=e[++s],f=l[++c]):S(a,p)?(U(a,p),a=e[--r],p=l[--u]):S(i,p)?(U(i,p),t.insertBefore(i.j,a.j.nextSibling),i=e[++s],p=l[--u]):S(a,f)?(U(a,f),t.insertBefore(a.j,i.j),a=e[--r],f=l[++c]):(o=g(e&&e[c],n,c),f=l[++c],o&&i.j.parentNode.insertBefore(o,i.j));s>r?M(t,null==l[u+1]?null:l[u+1].j,n,l,c,u):c>u&&L(e,s,r)})(n,l,e,o):null!==o?(null!==t.p&&(n.textContent=""),M(n,null,e,o,0,o.length-1)):null!==l&&L(l,0,l.length-1)):t.p!==s&&(n.data=s)},O=t=>V(t).v,R=(t,e,n)=>{const l=O(t);return{emit:t=>k(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},k=(t,e,n)=>{const l=new CustomEvent(e,n);return t.dispatchEvent(l),l},P=(t,e)=>{e&&!t.g&&e["s-p"].push(new Promise(e=>t.g=e))},C=(t,e)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const n=t.s,l=()=>W(t,n,e);let o;return P(t,t.M),e?(t.t|=256,t.u&&(t.u.map(([t,e])=>T(n,t,e)),t.u=null),o=T(n,"componentWillLoad")):o=T(n,"componentWillUpdate"),F(o,()=>st(l))},W=(t,e,n)=>{const l=t.v,s=l["s-rc"];n&&(t=>{const e=t.L;((t,e)=>{let n=m(e.S),l=X.get(n);if(t=11===t.nodeType?t:o,l)if("string"==typeof l){let e,s=p.get(t=t.head||t);s||p.set(t,s=new Set),s.has(n)||(e=o.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l])})(t.v.getRootNode(),e)})(t),((t,e)=>{const n=t.v,l=t.U||y(null,null),o=(t=>t&&t._===w)(e)?e:h(null,null,e);o._=null,o.t|=4,t.U=o,o.j=l.j=n,U(l,o)})(t,x(e)),t.t&=-17,t.t|=2,s&&(s.map(t=>t()),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>A(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},x=t=>{try{t=t.render()}catch(e){J(e)}return t},A=t=>{const e=t.v,n=t.s,l=t.M;64&t.t||(t.t|=64,q(e),T(n,"componentDidLoad"),t.O(e),l||E()),t.R(e),t.g&&(t.g(),t.g=void 0),512&t.t&&ot(()=>C(t,!1)),t.t&=-517},E=()=>{q(o.documentElement),s.t|=2,ot(()=>k(n,"appload",{detail:{namespace:"app"}}))},T=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){J(l)}},F=(t,e)=>t&&t.then?t.then(e):e(),q=t=>t.classList.add("hydrated"),B=(t,e,n)=>{if(e.k){t.watchers&&(e.P=t.watchers);const l=Object.entries(e.k),o=t.prototype;if(l.map(([t,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,t,{get(){return((t,e)=>V(this).C.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=V(this),s=o.C.get(e),c=o.t,r=o.s;if(n=((t,e)=>null==t||$(t)?t:1&e?t+"":t)(n,l.k[e][0]),!(8&c&&void 0!==s||n===s)&&(o.C.set(e,n),r)){if(l.P&&128&c){const t=l.P[e];t&&t.map(t=>{try{r[t](n,s,e)}catch(l){J(l)}})}2==(18&c)&&C(o,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,t,{value(...e){const n=V(this);return n.W.then(()=>n.s[t](...e))}})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){s.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},D=(t,e={})=>{const l=[],c=e.exclude||[],a=n.customElements,u=o.head,f=u.querySelector("meta[charset]"),p=o.createElement("style"),d=[];let $,h=!0;Object.assign(s,e),s.l=new URL(e.resourcesUrl||"./",o.baseURI).href,e.syncQueue&&(s.t|=4),t.map(t=>t[1].map(e=>{const n={t:e[0],S:e[1],k:e[2],A:e[3]};n.k=e[2],n.A=e[3],n.P={};const o=n.S,u=class extends HTMLElement{constructor(t){super(t),G(t=this,n)}connectedCallback(){$&&(clearTimeout($),$=null),h?d.push(this):s.jmp(()=>(t=>{if(0==(1&s.t)){const e=V(t),n=e.L,l=()=>{};if(1&e.t)i(t,e,n.A);else{e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){P(e,e.M=n);break}}n.k&&Object.entries(n.k).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=Q(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(n.P=o.watchers,B(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(i){J(i)}e.t&=-9,e.t|=128,t()}const t=m(n.S);if(!X.has(t)&&o.style){const e=()=>{};((t,e,n)=>{let l=X.get(t);r&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,X.set(t,l)})(t,o.style,!!(1&n.t)),e()}}const s=e.M,c=()=>C(e,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,e,n)}l()}})(this))}disconnectedCallback(){s.jmp(()=>(()=>{if(0==(1&s.t)){const t=V(this);t.o&&(t.o.map(t=>t()),t.o=void 0)}})())}forceUpdate(){(()=>{{const t=V(this);t.v.isConnected&&2==(18&t.t)&&C(t,!1)}})()}componentOnReady(){return V(this).T}};n.F=t[0],c.includes(o)||a.get(o)||(l.push(o),a.define(o,B(u,n,1)))})),p.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",p.setAttribute("data-styles",""),u.insertBefore(p,f?f.nextSibling:u.firstChild),h=!1,d.length?d.map(t=>t.connectedCallback()):s.jmp(()=>$=setTimeout(E,30))},H=t=>{const e=new URL(t,s.l);return e.origin!==n.location.origin?e.href:e.pathname},N=new WeakMap,V=t=>N.get(t),z=(t,e)=>N.set(e.s=t,e),G=(t,e)=>{const n={t:0,v:t,L:e,C:new Map};return n.W=new Promise(t=>n.R=t),n.T=new Promise(t=>n.O=t),t["s-p"]=[],t["s-rc"]=[],i(t,n,e.A),N.set(t,n)},I=(t,e)=>e in t,J=t=>console.error(t),K=new Map,Q=t=>{const e=t.S.replace(/-/g,"_"),n=t.F,l=K.get(n);return l?l[e]:__sc_import_app(`./${n}.entry.js`).then(t=>(K.set(n,t),t[e]),J)},X=new Map,Y=[],Z=[],tt=[],et=(t,n)=>l=>{t.push(l),e||(e=!0,n&&4&s.t?ot(lt):s.raf(lt))},nt=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){J(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},lt=()=>{t++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){J(e)}t.length=0})(Y);{const n=2==(6&s.t)?performance.now()+14*Math.ceil(.1*t):1/0;nt(Z,n),nt(tt,n),Z.length>0&&(tt.push(...Z),Z.length=0),(e=Y.length+Z.length+tt.length>0)?s.raf(lt):t=0}},ot=t=>c().then(t),st=et(Z,!0),ct=()=>l&&l.supports&&l.supports("color","var(--c)")?c():__sc_import_app("./p-08cee778.js").then(()=>(s.q=n.__cssshim)?(!1).i():0),rt=()=>{s.q=n.__cssshim;const t=Array.from(o.querySelectorAll("script")).find(t=>/\/app(\.esm)?\.js($|\?|#)/.test(t.src)||"app"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,n.location.href)).href,it(e.resourcesUrl,t),n.customElements?c(e):__sc_import_app("./p-3743bade.js").then(()=>e))},it=(t,e)=>{try{n.__sc_import_app=Function("w",`return import(w);//${Math.random()}`)}catch(l){const s=new Map;n.__sc_import_app=l=>{const c=new URL(l,t).href;let r=s.get(c);if(!r){const t=o.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${c}'; window.__sc_import_app.m = m;`],{type:"application/javascript"})),r=new Promise(e=>{t.onload=()=>{e(n.__sc_import_app.m),t.remove()}}),s.set(c,r),o.head.appendChild(t)}return r}}};export{ct as a,D as b,R as c,H as d,O as g,h,rt as p,z as r}