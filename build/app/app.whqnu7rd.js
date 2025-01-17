/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='app']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(resourcesUrl){window.config=Object.assign({VERSION:"v0.12"},{API_BASE_URL:"https://foh.azurewebsites.net/api"});
})(resourcesUrl);
(function(t,e,n,o){"use strict";function i(t,e){return"sc-"+t.t+(e&&e!==E?"-"+e:"")}function c(t,e){return t+(e?"-h":"-s")}function f(t,e,n,o){const c=2===n.e||1===n.e&&!t.o.n;let f=n.t+o.mode,r=n[f];if(c&&(o["s-sc"]=i(n,o.mode)),r||(r=n[f=n.t+E],c&&(o["s-sc"]=i(n))),r){let n=e.i.head,o=t.c.get(n);if(o||t.c.set(n,o={}),!o[f]){let t;{t=r.content.cloneNode(!0),o[f]=!0;const i=n.querySelectorAll("[data-styles]");e.f(n,t,i.length&&i[i.length-1].nextSibling||n.firstChild)}}}}function r(t,e,n,o,i,c,f){if("class"!==n||c)if("style"===n){for(const t in o)i&&null!=i[t]||(/-/.test(t)?e.style.r(t):e.style[t]="");for(const t in i)o&&i[t]===o[t]||(/-/.test(t)?e.style.setProperty(t,i[t]):e.style[t]=i[t])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!c&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.s(e);o&&o.l&&o.l[n]?l(e,n,i):"ref"!==n&&(l(e,n,null==i?"":i),null!=i&&!1!==i||t.o.u(e,n))}else null!=i&&"key"!==n?function r(t,e,n,o="boolean"==typeof n){const i=e!==(e=e.replace(/^xlink\:?/,""));null==n||o&&(!n||"false"===n)?i?t.removeAttributeNS(L,R(e)):t.removeAttribute(e):"function"!=typeof n&&(n=o?"":n.toString(),i?t.setAttributeNS(L,R(e),n):t.setAttribute(e,n))}(e,n,i):(c||t.o.a(e,n)&&(null==i||!1===i))&&t.o.u(e,n);else n=R(n)in e?R(n.substring(2)):R(n[2])+n.substring(3),i?i!==o&&t.o.p(e,n,i):t.o.d(e,n);else if(o!==i){const t=s(o),n=s(i),c=t.filter(t=>!n.includes(t)),f=s(e.className).filter(t=>!c.includes(t)),r=n.filter(e=>!t.includes(e)&&!f.includes(e));f.push(...r),e.className=f.join(" ")}}function s(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function l(t,e,n){try{t[e]=n}catch(t){}}function u(t,e,n,o,i){const c=11===n.v.nodeType&&n.v.host?n.v.host:n.v,f=e&&e.vattrs||N,s=n.vattrs||N;for(i in f)s&&null!=s[i]||null==f[i]||r(t,c,i,f[i],void 0,o,n.m);for(i in s)i in f&&s[i]===("value"===i||"checked"===i?c[i]:f[i])||r(t,c,i,f[i],s[i],o,n.m)}function a(t,e){function n(i,c,f,r,s,p,y,h,w){if(h=c.vchildren[f],l||(d=!0,"slot"===h.vtag&&(a&&e.b(r,a+"-s"),h.vchildren?h.y=!0:h.w=!0)),A(h.vtext))h.v=e.g(h.vtext);else if(h.w)h.v=e.g("");else{if(p=h.v=D||"svg"===h.vtag?e.M("http://www.w3.org/2000/svg",h.vtag):e.k(h.y?"slot-fb":h.vtag),t.C(p)&&t.j.delete(b),D="svg"===h.vtag||"foreignObject"!==h.vtag&&D,u(t,null,h,D),A(a)&&p["s-si"]!==a&&e.b(p,p["s-si"]=a),h.vchildren)for(s=0;s<h.vchildren.length;++s)(y=n(i,h,s,p))&&e.x(p,y);"svg"===h.vtag&&(D=!1)}return h.v["s-hn"]=m,(h.y||h.w)&&(h.v["s-sr"]=!0,h.v["s-cr"]=v,h.v["s-sn"]=h.vname||"",(w=i&&i.vchildren&&i.vchildren[f])&&w.vtag===h.vtag&&i.v&&o(i.v)),h.v}function o(n,i,c,f){t.O=!0;const l=e.W(n);for(c=l.length-1;c>=0;c--)(f=l[c])["s-hn"]!==m&&f["s-ol"]&&(e.N(f),e.f(s(f),f,r(f)),e.N(f["s-ol"]),f["s-ol"]=null,d=!0),i&&o(f,i);t.O=!1}function i(t,o,i,c,f,s,l,u){const a=t["s-cr"];for((l=a&&e.S(a)||t).shadowRoot&&e.A(l)===m&&(l=l.shadowRoot);f<=s;++f)c[f]&&(u=A(c[f].vtext)?e.g(c[f].vtext):n(null,i,f,t))&&(c[f].v=u,e.f(l,u,r(o)))}function c(t,n,i,c){for(;n<=i;++n)A(t[n])&&(c=t[n].v,p=!0,c["s-ol"]?e.N(c["s-ol"]):o(c,!0),e.N(c))}function f(t,e){return t.vtag===e.vtag&&t.vkey===e.vkey&&("slot"!==t.vtag||t.vname===e.vname)}function r(t){return t&&t["s-ol"]?t["s-ol"]:t}function s(t){return e.S(t["s-ol"]?t["s-ol"]:t)}let l,a,p,d,v,m,b;const y=[];return function h(w,g,M,$,k,C,j,x,O,W,E,N){if(b=w,m=e.A(b),v=b["s-cr"],l=$,a=b["s-sc"],d=p=!1,function l(a,p,d){const v=p.v=a.v,m=a.vchildren,b=p.vchildren;D=p.v&&A(e.R(p.v))&&void 0!==p.v.ownerSVGElement,D="svg"===p.vtag||"foreignObject"!==p.vtag&&D,A(p.vtext)?(d=v["s-cr"])?e.T(e.S(d),p.vtext):a.vtext!==p.vtext&&e.T(v,p.vtext):("slot"!==p.vtag&&u(t,a,p,D),A(m)&&A(b)?function y(t,u,a,p,d,v,m,b){let y=0,h=0,w=u.length-1,g=u[0],M=u[w],$=p.length-1,k=p[0],C=p[$];for(;y<=w&&h<=$;)if(null==g)g=u[++y];else if(null==M)M=u[--w];else if(null==k)k=p[++h];else if(null==C)C=p[--$];else if(f(g,k))l(g,k),g=u[++y],k=p[++h];else if(f(M,C))l(M,C),M=u[--w],C=p[--$];else if(f(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.S(g.v)),l(g,C),e.f(t,g.v,e.L(M.v)),g=u[++y],C=p[--$];else if(f(M,k))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.S(M.v)),l(M,k),e.f(t,M.v,g.v),M=u[--w],k=p[++h];else{for(d=null,v=y;v<=w;++v)if(u[v]&&A(u[v].vkey)&&u[v].vkey===k.vkey){d=v;break}A(d)?((b=u[d]).vtag!==k.vtag?m=n(u&&u[h],a,d,t):(l(b,k),u[d]=void 0,m=b.v),k=p[++h]):(m=n(u&&u[h],a,h,t),k=p[++h]),m&&e.f(s(g.v),m,r(g.v))}y>w?i(t,null==p[$+1]?null:p[$+1].v,a,p,h,$):h>$&&c(u,y,w)}(v,m,p,b):A(b)?(A(a.vtext)&&e.T(v,""),i(v,null,p,b,0,b.length-1)):A(m)&&c(m,0,m.length-1)),D&&"svg"===p.vtag&&(D=!1)}(g,M),d){for(function t(n,o,i,c,f,r,s,l,u,a){for(f=0,r=(o=e.W(n)).length;f<r;f++){if((i=o[f])["s-sr"]&&(c=i["s-cr"]))for(l=e.W(e.S(c)),u=i["s-sn"],s=l.length-1;s>=0;s--)(c=l[s])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(a=e.D(c))||8===a)&&""===u||1===a&&null===e.P(c,"slot")&&""===u||1===a&&e.P(c,"slot")===u)&&(y.some(t=>t.q===c)||(p=!0,c["s-sn"]=u,y.push({B:i,q:c})));1===e.D(i)&&t(i)}}(M.v),j=0;j<y.length;j++)(x=y[j]).q["s-ol"]||((O=e.g(""))["s-nr"]=x.q,e.f(e.S(x.q),x.q["s-ol"]=O,x.q));for(t.O=!0,j=0;j<y.length;j++){for(x=y[j],E=e.S(x.B),N=e.L(x.B),O=x.q["s-ol"];O=e.I(O);)if((W=O["s-nr"])&&W&&W["s-sn"]===x.q["s-sn"]&&E===e.S(W)&&(W=e.L(W))&&W&&!W["s-nr"]){N=W;break}(!N&&E!==e.S(x.q)||e.L(x.q)!==N)&&x.q!==N&&(e.N(x.q),e.f(E,x.q,N))}t.O=!1}return p&&function t(n,o,i,c,f,r,s,l){for(c=0,f=(i=e.W(n)).length;c<f;c++)if(o=i[c],1===e.D(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,r=0;r<f;r++)if(i[r]["s-hn"]!==o["s-hn"])if(l=e.D(i[r]),""!==s){if(1===l&&s===e.P(i[r],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==e.F(i[r]).trim()){o.hidden=!0;break}t(o)}}(M.v),y.length=0,M}}function p(t,e){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(e?null:t.v),t.vchildren&&t.vchildren.forEach(t=>{p(t,e)}))}function d(t,e,n,o,i){const c=t.D(e);let f,r,s,l;if(i&&1===c){(r=t.P(e,W))&&(s=r.split("."))[0]===o&&((l={}).vtag=t.A(l.v=e),n.vchildren||(n.vchildren=[]),n.vchildren[s[1]]=l,n=l,i=""!==s[2]);for(let c=0;c<e.childNodes.length;c++)d(t,e.childNodes[c],n,o,i)}else 3===c&&(f=e.previousSibling)&&8===t.D(f)&&"s"===(s=t.F(f).split("."))[0]&&s[1]===o&&((l={vtext:t.F(e)}).v=e,n.vchildren||(n.vchildren=[]),n.vchildren[s[2]]=l)}function v(t,e){let n,o,i=null,c=!1,f=!1;for(var r=arguments.length;r-- >2;)P.push(arguments[r]);for(;P.length>0;){let e=P.pop();if(e&&void 0!==e.pop)for(r=e.length;r--;)P.push(e[r]);else"boolean"==typeof e&&(e=null),(f="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(f=!1)),f&&c?i[i.length-1].vtext+=e:null===i?i=[f?{vtext:e}:e]:i.push(f?{vtext:e}:e),c=f}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(r in e.class)e.class[r]&&P.push(r);e.class=P.join(" "),P.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(e,i||[],q):{vtag:t,vchildren:i,vtext:void 0,vattrs:e,vkey:n,vname:o,v:void 0,m:!1}}function m(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function b(t){const[e,n,,o,i,c]=t,f={color:{H:"color"}};if(o)for(let t=0;t<o.length;t++){const e=o[t];f[e[0]]={U:e[1],Q:!!e[2],H:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,Z:e[4]}}return{t:e,z:n,l:Object.assign({},f),e:i,G:c?c.map(y):void 0}}function y(t){return{J:t[0],K:t[1],V:!!t[2],X:!!t[3],Y:!!t[4]}}function h(t,e){if(A(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||4===t)return"false"!==e&&(""===e||!!e);if(t===Number||8===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function w(t,e){t._.add(e),t.tt.has(e)||(t.tt.set(e,!0),t.et?t.queue.write(()=>g(t,e)):t.queue.tick(()=>g(t,e)))}async function g(t,e,n,o,i){if(t.tt.delete(e),!t.nt.has(e)){if(o=t.ot.get(e)){if(o)try{o.componentWillUpdate&&await o.componentWillUpdate()}catch(n){t.it(n,5,e)}}else{if((i=t.ct.get(e))&&!i["s-rn"])return void(i["s-rc"]=i["s-rc"]||[]).push(()=>{g(t,e)});if(o=function f(t,e,n,o,i,c,r){try{o=new(i=t.s(e).ft),function s(t,e,n,o,i){t.rt.set(o,n),t.st.has(n)||t.st.set(n,{}),Object.entries(Object.assign({color:{type:String}},e.properties,{mode:{type:String}})).forEach(([e,c])=>{(function f(t,e,n,o,i,c,r,s){if(e.type||e.state){const f=t.st.get(n);e.state||(!e.attr||void 0!==f[i]&&""!==f[i]||(r=c&&c.lt)&&A(s=r[e.attr])&&(f[i]=h(e.type,s)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=h(e.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),e.watchCallbacks&&(f[B+i]=e.watchCallbacks.slice()),k(o,i,function l(e){return(e=t.st.get(t.rt.get(this)))&&e[i]},function u(n,o){(o=t.rt.get(this))&&(e.state||e.mutable)&&M(t,o,i,n)})}else e.elementRef?$(o,i,n):e.method&&$(n,i,o[i].bind(o))})(t,c,n,o,e,i)})}(t,i,e,o,n),function l(t,e,n){if(e){const o=t.rt.get(n);e.forEach(e=>{n[e.method]={emit:n=>{t.ut(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:n})}}})}}(t,i.events,o);try{if(c=t.at.get(e)){for(r=0;r<c.length;r+=2)o[c[r]](c[r+1]);t.at.delete(e)}}catch(n){t.it(n,2,e)}}catch(n){o={},t.it(n,7,e,!0)}return t.ot.set(e,o),o}(t,e,t.pt.get(e)))try{o.componentWillLoad&&await o.componentWillLoad()}catch(n){t.it(n,3,e)}}(function r(t,e,n,o){try{const i=e.ft.host,f=e.ft.encapsulation,r="shadow"===f&&t.o.n;let s,l=n;if(!n["s-rn"]){t.dt(t,t.o,e,n);const i=n["s-sc"];i&&(t.o.b(n,c(i,!0)),o.render||t.o.b(n,c(i)))}if(o.render||o.hostData||i||s){t.vt=!0;const e=o.render&&o.render();let i;t.vt=!1;const c=t.mt.get(n)||{};c.v=l;const s=v(null,i,e);t.mt.set(n,t.render(n,c,s,r,f))}n["s-rn"]=!0,n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.vt=!1,t.it(e,8,n,!0)}})(t,t.s(e),e,o),e["s-init"]()}}function M(t,e,n,o,i){let c=t.st.get(e);c||t.st.set(e,c={});const f=c[n];if(o!==f&&(c[n]=o,i=t.ot.get(e))){{const t=c[B+n];if(t)for(let e=0;e<t.length;e++)try{i[t[e]].call(i,o,f,n)}catch(t){}}!t.vt&&e["s-rn"]&&w(t,e)}}function $(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function k(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function C(t,e,n,o,i,c){if(t._.delete(e),(i=t.ct.get(e))&&((o=i["s-ld"])&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),t.ct.delete(e)),t.bt.length&&!t._.size)for(;c=t.bt.shift();)c()}function j(t,e,n,o){if(n.connectedCallback=function(){(function n(t,e,o){t.yt.has(o)||(t.yt.set(o,!0),function i(t,e){const n=t.s(e);n.G&&n.G.forEach(n=>{n.V||t.o.p(e,n.J,function o(t,e,n,i){return o=>{(i=t.ot.get(e))?i[n](o):((i=t.at.get(e)||[]).push(n,o),t.at.set(e,i))}}(t,e,n.K),n.Y,n.X)})}(t,o)),t.nt.delete(o),t.ht.has(o)||(t._.add(o),t.ht.set(o,!0),o["s-id"]||(o["s-id"]=t.wt()),function c(t,e,n){for(n=e;n=t.o.R(n);)if(t.C(n)){t.j.has(e)||(t.ct.set(e,n),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>{t.pt.set(o,function n(t,e,o,i,c){return o.mode||(o.mode=t.gt(o)),o["s-cr"]||t.P(o,O)||t.n&&1===e.e||(o["s-cr"]=t.g(""),o["s-cr"]["s-cn"]=!0,t.f(o,o["s-cr"],t.W(o)[0])),t.n||1!==e.e||(o.shadowRoot=o),i={Mt:o["s-id"],lt:{}},e.l&&Object.keys(e.l).forEach(n=>{(c=e.l[n].H)&&(i.lt[c]=t.P(o,c))}),i}(t.o,e,o)),t.$t(e,o)}))})(t,e,this)},n.disconnectedCallback=function(){(function e(t,n){!t.O&&function o(t,e){for(;e;){if(!t.S(e))return 9!==t.D(e);e=t.S(e)}}(t.o,n)&&(t.nt.set(n,!0),C(t,n),p(t.mt.get(n),!0),t.o.d(n),t.yt.delete(n),[t.ct,t.kt,t.pt].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,c,f){if((i=t.ot.get(n))&&!t.nt.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){t.j.set(n,!0),(f=t.Ct.has(n))||(t.Ct.set(n,!0),n["s-ld"]=void 0,t.o.b(n,o));try{p(t.mt.get(n)),(c=t.kt.get(n))&&(c.forEach(t=>t(n)),t.kt.delete(n)),!f&&i.componentDidLoad&&i.componentDidLoad()}catch(e){t.it(e,4,n)}C(t,n)}})(t,this,o)},n.forceUpdate=function(){w(t,this)},e.l){const o=Object.entries(e.l);{let t={};o.forEach(([e,{H:n}])=>{n&&(t[n]=e)}),t=Object.assign({},t),n.attributeChangedCallback=function(e,n,o){(function i(t,e,n,o){const i=t[R(n)];i&&(e[i]=o)})(t,this,e,o)}}(function i(t,e,n){e.forEach(([e,o])=>{const i=o.U;3&i?k(n,e,function n(){return(t.st.get(this)||{})[e]},function n(i){M(t,this,e,h(o.Z,i))}):32===i&&$(n,e,T)})})(t,o,n)}}function x(t,e,n,o){return function(){const i=arguments;return function c(t,e,n){let o=e[n];const i=t.i.body;return i?(o||(o=i.querySelector(n)),o||(o=e[n]=t.k(n),t.x(i,o)),o.componentOnReady()):Promise.resolve()}(t,e,n).then(t=>t[o].apply(t,i))}}const O="ssrv",W="ssrc",E="$",N={},S={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},A=t=>null!=t,R=t=>t.toLowerCase(),T=()=>{},L="http://www.w3.org/1999/xlink";let D=!1;const P=[],q={forEach:(t,e)=>{t.forEach((t,n,o)=>e(m(t),n,o))},map:(t,e)=>t.map((t,n,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(e(m(t),n,o)))},B="wc-";(function I(t,e,n,o,i,c){function r(t,e){const o=t.t;n.customElements.get(o)||(j(g,s[o]=t,e.prototype,c),e.observedAttributes=Object.values(t.l).map(t=>t.H).filter(t=>!!t),n.customElements.define(t.t,e))}const s={html:{}},l={},u=n[t]=n[t]||{},p=function m(t,e,n){t.ael||(t.ael=((t,e,n,o)=>t.addEventListener(e,n,o)),t.rel=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={i:n,n:!!n.documentElement.attachShadow,jt:!1,D:t=>t.nodeType,k:t=>n.createElement(t),M:(t,e)=>n.createElementNS(t,e),g:t=>n.createTextNode(t),xt:t=>n.createComment(t),f:(t,e,n)=>t.insertBefore(e,n),N:t=>t.remove(),x:(t,e)=>t.appendChild(e),b:(t,e)=>{t.classList.add(e)},W:t=>t.childNodes,S:t=>t.parentNode,L:t=>t.nextSibling,I:t=>t.previousSibling,A:t=>R(t.nodeName),F:t=>t.textContent,T:(t,e)=>t.textContent=e,P:(t,e)=>t.getAttribute(e),Ot:(t,e,n)=>t.setAttribute(e,n),Wt:(t,e,n,o)=>t.setAttributeNS(e,n,o),u:(t,e)=>t.removeAttribute(e),a:(t,e)=>t.hasAttribute(e),gt:e=>e.getAttribute("mode")||(t.Context||{}).mode,Et:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.R(t):"body"===o?n.body:"document"===o?n:"window"===o?e:t,p:(e,n,c,f,r,s,l,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.Et(e,s):"object"==typeof s?p=s:(u=n.split(":")).length>1&&(p=i.Et(e,u[0]),n=u[1]),!p)return;let v=c;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===S[u[1]]&&c(t)})),l=i.jt?{capture:!!f,passive:!!r}:!!f,t.ael(p,n,v,l),d||o.set(e,d={}),d[a]=(()=>{p&&t.rel(p,n,v,l),d[a]=null})},d:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},Nt:(t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o)),R:(t,e)=>(e=i.S(t))&&11===i.D(e)?e.host:e};try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.jt=!0}))}catch(t){}return i}(u,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=i,e.enableListener=((t,e,n,o,i)=>(function c(t,e,n,o,i,f){if(e){const c=t.rt.get(e),r=t.s(c);if(r&&r.G)if(o){const o=r.G.find(t=>t.J===n);o&&t.o.p(c,n,t=>e[o.K](t),o.Y,void 0===f?o.X:!!f,i)}else t.o.d(c,n)}})(g,t,e,n,o,i)),e.emit=((t,n,o)=>p.Nt(t,e.eventNameFn?e.eventNameFn(n):n,o)),u.h=v,u.Context=e;const y=n["s-defined"]=n["s-defined"]||{};let h=0;const g={o:p,St:r,ut:e.emit,s:t=>s[p.A(t)],At:t=>e[t],isClient:!0,C:t=>!(!y[p.A(t)]&&!g.s(t)),wt:()=>t+h++,it:(t,e,n)=>void 0,Rt:t=>(function e(t,n,o){return{create:x(t,n,o,"create"),componentOnReady:x(t,n,o,"componentOnReady")}})(p,l,t),queue:e.queue=function M(t,e){function n(e){return n=>{e.push(n),d||(d=!0,t.raf(c))}}function o(t){for(let e=0;e<t.length;e++)try{t[e](f())}catch(t){}t.length=0}function i(t,e){let n,o=0;for(;o<t.length&&(n=f())<e;)try{t[o++](n)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function c(){p++,o(l);const e=f()+7*Math.ceil(p*(1/22));i(u,e),i(a,e),u.length>0&&(a.push(...u),u.length=0),(d=l.length+u.length+a.length>0)?t.raf(c):p=0}const f=()=>e.performance.now(),r=Promise.resolve(),s=[],l=[],u=[],a=[];let p=0,d=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){s.push(t),1===s.length&&r.then(()=>o(s))},read:n(l),write:n(u)}}(u,n),$t:function $(t,e,n){if(t.ft)w(g,e);else{const n="string"==typeof t.z?t.z:t.z[e.mode];import(i+n+".entry.js").then(n=>{try{t.ft=n[(t=>R(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n,i,c){if(i){const n=e.t+(c||E);if(!e[n]){const o=t.k("template");e[n]=o,o.innerHTML=`<style>${i}</style>`,t.x(t.i.head,o)}}}(p,t,t.e,t.ft.style,t.ft.styleMode),w(g,e)}catch(e){t.ft=class{}}},t=>void 0)}},vt:!1,et:!1,O:!1,dt:f,ct:new WeakMap,c:new WeakMap,ht:new WeakMap,yt:new WeakMap,Ct:new WeakMap,j:new WeakMap,rt:new WeakMap,pt:new WeakMap,ot:new WeakMap,nt:new WeakMap,tt:new WeakMap,kt:new WeakMap,at:new WeakMap,mt:new WeakMap,st:new WeakMap,_:new Set,bt:[]};u.onReady=(()=>new Promise(t=>g.queue.write(()=>g._.size?g.bt.push(t):t()))),g.render=a(g,p);const k=p.i.documentElement;k["s-ld"]=[],k["s-rn"]=!0,k["s-init"]=(()=>{g.j.set(k,u.loaded=g.et=!0),p.Nt(n,"appload",{detail:{namespace:t}})}),function C(t,e,n){const o=n.querySelectorAll(`[${O}]`),i=o.length;let c,f,r,s,l,u;if(i>0)for(t.j.set(n,!0),s=0;s<i;s++)for(c=o[s],f=e.P(c,O),(r={}).vtag=e.A(r.v=c),t.mt.set(c,r),l=0,u=c.childNodes.length;l<u;l++)d(e,c.childNodes[l],r,f,!0)}(g,p,k),(u.components||[]).map(b).forEach(t=>r(t,class extends HTMLElement{})),function W(t,e,n,o,i,c){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.s(e);if(o)if(t.j.has(e))n(e);else{const o=t.kt.get(e)||[];o.push(n),t.kt.set(e,o)}return!!o}),i){for(c=i.length-1;c>=0;c--)e.componentOnReady(i[c][0],i[c][1])&&i.splice(c,1);for(c=0;c<o.length;c++)if(!n[o[c]].componentOnReady)return;for(c=0;c<i.length;c++)i[c][1](null);i.length=0}}(g,u,n,n["s-apps"],n["s-cr"]),u.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"App","hydrated");