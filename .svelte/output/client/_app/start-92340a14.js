var t=Object.prototype.hasOwnProperty,e=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,r=Object.assign;import{S as n,i as a,s as o,e as i,t as c,a as l,c as u,b as h,d as p,f,g as d,h as m,j as g,k as v,n as $,l as y,m as b,o as E,p as w,q as _,r as x,u as L,v as R,w as S,x as O,y as k,z as A,A as I,B as T,C as P,D as j,E as q,F as N,G as D,H as V,I as U,J as C,K,L as M,M as B,N as H}from"./chunks/stores-dbc60e4c.js";import{i as z}from"./chunks/singletons-dd9f995d.js";function W(t){let e,s,r,n,a,o,y,b,E,w=t[1].stack+"";return{c(){e=i("main"),s=i("h1"),r=c(t[0]),n=l(),a=i("p"),o=c("Something went wrong!"),y=l(),b=i("pre"),E=c(w)},l(i){e=u(i,"MAIN",{});var c=h(e);s=u(c,"H1",{});var l=h(s);r=p(l,t[0]),l.forEach(f),n=d(c),a=u(c,"P",{});var m=h(a);o=p(m,"Something went wrong!"),m.forEach(f),y=d(c),b=u(c,"PRE",{});var g=h(b);E=p(g,w),g.forEach(f),c.forEach(f)},m(t,i){m(t,e,i),g(e,s),g(s,r),g(e,n),g(e,a),g(a,o),g(e,y),g(e,b),g(b,E)},p(t,[e]){1&e&&v(r,t[0]),2&e&&w!==(w=t[1].stack+"")&&v(E,w)},i:$,o:$,d(t){t&&f(e)}}}function G(t,e,s){let{status:r}=e,{error:n}=e;return t.$$set=t=>{"status"in t&&s(0,r=t.status),"error"in t&&s(1,n=t.error)},[r,n]}class J extends n{constructor(t){super(),a(this,t,G,W,o,{status:0,error:1})}}function Y(t){let e,s,r;const n=[t[4]||{}];var a=t[2][1];function o(t){let e={};for(let s=0;s<n.length;s+=1)e=y(e,n[s]);return{props:e}}return a&&(e=new a(o())),{c(){e&&E(e.$$.fragment),s=w()},l(t){e&&_(e.$$.fragment,t),s=w()},m(t,n){e&&x(e,t,n),m(t,s,n),r=!0},p(t,r){const i=16&r?L(n,[R(t[4]||{})]):{};if(a!==(a=t[2][1])){if(e){P();const t=e;O(t.$$.fragment,1,0,(()=>{k(t,1)})),j()}a?(e=new a(o()),E(e.$$.fragment),S(e.$$.fragment,1),x(e,s.parentNode,s)):e=null}else a&&e.$set(i)},i(t){r||(e&&S(e.$$.fragment,t),r=!0)},o(t){e&&O(e.$$.fragment,t),r=!1},d(t){t&&f(s),e&&k(e,t)}}}function F(t){let e,s;return e=new J({props:{status:t[0],error:t[1]}}),{c(){E(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,r){x(e,t,r),s=!0},p(t,s){const r={};1&s&&(r.status=t[0]),2&s&&(r.error=t[1]),e.$set(r)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){O(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function X(t){let e,s,r,n;const a=[F,Y],o=[];function i(t,e){return t[1]?0:1}return e=i(t),s=o[e]=a[e](t),{c(){s.c(),r=w()},l(t){s.l(t),r=w()},m(t,s){o[e].m(t,s),m(t,r,s),n=!0},p(t,n){let c=e;e=i(t),e===c?o[e].p(t,n):(P(),O(o[c],1,1,(()=>{o[c]=null})),j(),s=o[e],s?s.p(t,n):(s=o[e]=a[e](t),s.c()),S(s,1),s.m(r.parentNode,r))},i(t){n||(S(s),n=!0)},o(t){O(s),n=!1},d(t){o[e].d(t),t&&f(r)}}}function Q(t){let e,s=t[6]&&Z(t);return{c(){e=i("div"),s&&s.c(),this.h()},l(t){e=u(t,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=h(e);s&&s.l(r),r.forEach(f),this.h()},h(){b(e,"id","svelte-announcer"),b(e,"aria-live","assertive"),b(e,"aria-atomic","true"),b(e,"class","svelte-1j55zn5")},m(t,r){m(t,e,r),s&&s.m(e,null)},p(t,r){t[6]?s?s.p(t,r):(s=Z(t),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(t){t&&f(e),s&&s.d()}}}function Z(t){let e,s;return{c(){e=c("Navigated to "),s=c(t[7])},l(r){e=p(r,"Navigated to "),s=p(r,t[7])},m(t,r){m(t,e,r),m(t,s,r)},p(t,e){128&e&&v(s,t[7])},d(t){t&&f(e),t&&f(s)}}}function tt(t){let e,s,r,n;const a=[t[3]||{}];let o={$$slots:{default:[X]},$$scope:{ctx:t}};for(let c=0;c<a.length;c+=1)o=y(o,a[c]);e=new t[8]({props:o});let i=t[5]&&Q(t);return{c(){E(e.$$.fragment),s=l(),i&&i.c(),r=w()},l(t){_(e.$$.fragment,t),s=d(t),i&&i.l(t),r=w()},m(t,a){x(e,t,a),m(t,s,a),i&&i.m(t,a),m(t,r,a),n=!0},p(t,[s]){const n=8&s?L(a,[R(t[3]||{})]):{};2071&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n),t[5]?i?i.p(t,s):(i=Q(t),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){k(e,t),t&&f(s),i&&i.d(t),t&&f(r)}}}function et(t,e,s){let{status:r}=e,{error:n}=e,{stores:a}=e,{page:o}=e,{components:i}=e,{props_0:c=null}=e,{props_1:l=null}=e;const u=i[0];A("__svelte__",a),I(a.page.notify);let h=!1,p=!1,f=null;return T((()=>{const t=a.page.subscribe((()=>{h&&(s(6,p=!0),s(7,f=document.title))}));return s(5,h=!0),t})),t.$$set=t=>{"status"in t&&s(0,r=t.status),"error"in t&&s(1,n=t.error),"stores"in t&&s(9,a=t.stores),"page"in t&&s(10,o=t.page),"components"in t&&s(2,i=t.components),"props_0"in t&&s(3,c=t.props_0),"props_1"in t&&s(4,l=t.props_1)},t.$$.update=()=>{1536&t.$$.dirty&&a.page.set(o)},[r,n,i,c,l,h,p,f,u,a,o]}class st extends n{constructor(t){super(),a(this,t,et,tt,o,{status:0,error:1,stores:9,page:10,components:2,props_0:3,props_1:4})}}let rt;const nt={},at=function(t,e){if(!e)return t();if(void 0===rt){const t=document.createElement("link").relList;rt=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in nt)return;nt[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const r=document.createElement("link");return r.rel=e?"stylesheet":rt,e||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),e?new Promise(((t,e)=>{r.addEventListener("load",t),r.addEventListener("error",e)})):void 0}))).then((()=>t()))};function ot(t){let e,s,r,n,a,o,v,y,E,w,_,x,L,R,S,O,k,A,I,T,P,j,N;return{c(){e=i("div"),s=i("div"),r=i("nav"),n=i("div"),a=i("a"),o=c("KE"),v=l(),y=i("button"),E=i("span"),w=l(),_=i("div"),x=i("ul"),L=i("li"),R=i("a"),S=c("Home"),O=l(),k=i("li"),A=i("a"),I=c("Settings"),T=l(),P=i("li"),j=i("a"),N=c("Advanced"),this.h()},l(t){e=u(t,"DIV",{class:!0});var i=h(e);s=u(i,"DIV",{class:!0});var c=h(s);r=u(c,"NAV",{class:!0});var l=h(r);n=u(l,"DIV",{class:!0});var m=h(n);a=u(m,"A",{class:!0,href:!0});var g=h(a);o=p(g,"KE"),g.forEach(f),v=d(m),y=u(m,"BUTTON",{class:!0,type:!0,"data-toggle":!0,"data-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var $=h(y);E=u($,"SPAN",{class:!0}),h(E).forEach(f),$.forEach(f),w=d(m),_=u(m,"DIV",{class:!0,id:!0});var b=h(_);x=u(b,"UL",{class:!0});var q=h(x);L=u(q,"LI",{class:!0});var D=h(L);R=u(D,"A",{class:!0,href:!0});var V=h(R);S=p(V,"Home"),V.forEach(f),D.forEach(f),O=d(q),k=u(q,"LI",{class:!0});var U=h(k);A=u(U,"A",{class:!0,href:!0});var C=h(A);I=p(C,"Settings"),C.forEach(f),U.forEach(f),T=d(q),P=u(q,"LI",{class:!0});var K=h(P);j=u(K,"A",{class:!0,href:!0});var M=h(j);N=p(M,"Advanced"),M.forEach(f),K.forEach(f),q.forEach(f),b.forEach(f),m.forEach(f),l.forEach(f),c.forEach(f),i.forEach(f),this.h()},h(){b(a,"class","navbar-brand"),b(a,"href","/"),b(E,"class","navbar-toggler-icon"),b(y,"class","navbar-toggler"),b(y,"type","button"),b(y,"data-toggle","collapse"),b(y,"data-target","#navbarCollapse"),b(y,"aria-controls","navbarCollapse"),b(y,"aria-expanded","false"),b(y,"aria-label","Toggle navigation"),b(R,"class","nav-link"),b(R,"href","/"),q(R,"active",!t[0]),b(L,"class","nav-item"),b(A,"class","nav-link"),b(A,"href","/settings"),q(A,"active","settings"===t[0]),b(k,"class","nav-item"),b(j,"class","nav-link"),b(j,"href","/advanced"),q(j,"active","advanced"===t[0]),b(P,"class","nav-item"),b(x,"class","navbar-nav nav mr-auto mb-2 mb-md-0"),b(_,"class","collapse navbar-collapse"),b(_,"id","navbarCollapse"),b(n,"class","container-fluid"),b(r,"class","navbar navbar-expand-md navbar-dark fixed-top bg-dark"),b(s,"class","nav-scroller py-1 mb-2"),b(e,"class","m-4")},m(t,i){m(t,e,i),g(e,s),g(s,r),g(r,n),g(n,a),g(a,o),g(n,v),g(n,y),g(y,E),g(n,w),g(n,_),g(_,x),g(x,L),g(L,R),g(R,S),g(x,O),g(x,k),g(k,A),g(A,I),g(x,T),g(x,P),g(P,j),g(j,N)},p(t,[e]){1&e&&q(R,"active",!t[0]),1&e&&q(A,"active","settings"===t[0]),1&e&&q(j,"active","advanced"===t[0])},i:$,o:$,d(t){t&&f(e)}}}function it(t,e,s){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&s(0,r=t.segment)},[r]}class ct extends n{constructor(t){super(),a(this,t,it,ot,o,{segment:0})}}function lt(t,e,s){const r=t.slice();return r[3]=e[s],r}function ut(t){let e,s=[],r=new Map,n=t[0].actions;const a=t=>t[3].id;for(let o=0;o<n.length;o+=1){let e=lt(t,n,o),i=a(e);r.set(i,s[o]=ht(i,e))}return{c(){e=i("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=u(t,"DIV",{class:!0,id:!0});var r=h(e);for(let e=0;e<s.length;e+=1)s[e].l(r);r.forEach(f),this.h()},h(){b(e,"class","notifications svelte-mlqs8o"),b(e,"id","notifications")},m(t,r){m(t,e,r);for(let n=0;n<s.length;n+=1)s[n].m(e,null)},p(t,o){3&o&&(n=t[0].actions,s=N(s,o,a,1,t,n,r,e,K,ht,null,lt))},d(t){t&&f(e);for(let e=0;e<s.length;e+=1)s[e].d()}}}function ht(t,e){let s,r,n,a,o,$,y,E,w=e[3].msg+"";function _(){return e[2](e[3])}return{key:t,first:null,c(){s=i("div"),r=c(w),n=l(),a=i("button"),o=l(),this.h()},l(t){s=u(t,"DIV",{class:!0,role:!0});var e=h(s);r=p(e,w),n=d(e),a=u(e,"BUTTON",{type:!0,class:!0,"aria-label":!0}),h(a).forEach(f),o=d(e),e.forEach(f),this.h()},h(){b(a,"type","button"),b(a,"class","btn-close"),b(a,"aria-label","Close"),b(s,"class",$="alert-dismissible fade show alert "+e[3].theme+" svelte-mlqs8o"),b(s,"role","alert"),this.first=s},m(t,e){m(t,s,e),g(s,r),g(s,n),g(s,a),g(s,o),y||(E=C(a,"click",_),y=!0)},p(t,n){e=t,1&n&&w!==(w=e[3].msg+"")&&v(r,w),1&n&&$!==($="alert-dismissible fade show alert "+e[3].theme+" svelte-mlqs8o")&&b(s,"class",$)},d(t){t&&f(s),y=!1,E()}}}function pt(t){let e,s=t[0].actions&&t[0].actions.length&&ut(t);return{c(){s&&s.c(),e=w()},l(t){s&&s.l(t),e=w()},m(t,r){s&&s.m(t,r),m(t,e,r)},p(t,[r]){t[0].actions&&t[0].actions.length?s?s.p(t,r):(s=ut(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:$,o:$,d(t){s&&s.d(t),t&&f(e)}}}function ft(t,e,s){let r;function n(t){U(V,r.actions=r.actions.filter((e=>e.id!=t)),r)}D(t,V,(t=>s(0,r=t)));return t.$$.update=()=>{1&t.$$.dirty&&r.actions.length&&U(V,r.count=r.count+1,r)},[r,n,t=>n(t.id)]}class dt extends n{constructor(t){super(),a(this,t,ft,pt,o,{})}}function mt(t){let e,s,r;var n=ct;function a(t){return{props:{segment:t[0]}}}return n&&(e=new n(a(t))),{c(){e&&E(e.$$.fragment),s=w()},l(t){e&&_(e.$$.fragment,t),s=w()},m(t,n){e&&x(e,t,n),m(t,s,n),r=!0},p(t,r){const o={};if(1&r&&(o.segment=t[0]),n!==(n=ct)){if(e){P();const t=e;O(t.$$.fragment,1,0,(()=>{k(t,1)})),j()}n?(e=new n(a(t)),E(e.$$.fragment),S(e.$$.fragment,1),x(e,s.parentNode,s)):e=null}else n&&e.$set(o)},i(t){r||(e&&S(e.$$.fragment,t),r=!0)},o(t){e&&O(e.$$.fragment,t),r=!1},d(t){t&&f(s),e&&k(e,t)}}}function gt(t){let e,s,r,n,a,o,g,v,$;document.title=e=t[1];let y=(!t[0]||"/login"!=t[0])&&mt(t);var w=dt;w&&(a=new w({}));const L=t[3].default,R=M(L,t,t[2],null);return{c(){s=l(),y&&y.c(),r=l(),n=i("div"),a&&E(a.$$.fragment),o=l(),R&&R.c(),g=l(),v=c(""),this.h()},l(t){B('[data-svelte="svelte-1258swp"]',document.head).forEach(f),s=d(t),y&&y.l(t),r=d(t),n=u(t,"DIV",{class:!0});var e=h(n);a&&_(a.$$.fragment,e),e.forEach(f),o=d(t),R&&R.l(t),g=d(t),v=p(t,""),this.h()},h(){b(n,"class","col-sm-12 col-md-6")},m(t,e){m(t,s,e),y&&y.m(t,e),m(t,r,e),m(t,n,e),a&&x(a,n,null),m(t,o,e),R&&R.m(t,e),m(t,g,e),m(t,v,e),$=!0},p(t,[s]){if((!$||2&s)&&e!==(e=t[1])&&(document.title=e),t[0]&&"/login"==t[0]?y&&(P(),O(y,1,1,(()=>{y=null})),j()):y?(y.p(t,s),1&s&&S(y,1)):(y=mt(t),y.c(),S(y,1),y.m(r.parentNode,r)),w!==(w=dt)){if(a){P();const t=a;O(t.$$.fragment,1,0,(()=>{k(t,1)})),j()}w?(a=new w({}),E(a.$$.fragment),S(a.$$.fragment,1),x(a,n,null)):a=null}R&&R.p&&4&s&&H(R,L,t,t[2],s,null,null)},i(t){$||(S(y),a&&S(a.$$.fragment,t),S(R,t),$=!0)},o(t){O(y),a&&O(a.$$.fragment,t),O(R,t),$=!1},d(t){t&&f(s),y&&y.d(t),t&&f(r),t&&f(n),a&&k(a),t&&f(o),R&&R.d(t),t&&f(g),t&&f(v)}}}function vt(t,e,s){let{$$slots:r={},$$scope:n}=e,{segment:a}=e,{title:o="KE!"}=e;return t.$$set=t=>{"segment"in t&&s(0,a=t.segment),"title"in t&&s(1,o=t.title),"$$scope"in t&&s(2,n=t.$$scope)},[a,o,n,r]}var $t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:class extends n{constructor(t){super(),a(this,t,vt,gt,o,{segment:0,title:1})}},load:async function({page:t,session:e}){const{user:s}=e;return s||"/login"==t.path?{props:{segment:t.path}}:{redirect:"/login",status:301}}});const yt=[()=>at((()=>import("./pages/index.svelte-f4498729.js")),["/_app/pages/index.svelte-f4498729.js","/_app/assets/pages/index.svelte-42fcf5f8.css","/_app/chunks/stores-dbc60e4c.js","/_app/chunks/Slider-b4cf688f.js","/_app/assets/Slider-ae22a239.css"]),()=>at((()=>import("./pages/advanced.svelte-03b75e45.js")),["/_app/pages/advanced.svelte-03b75e45.js","/_app/assets/pages/advanced.svelte-be6f3cc0.css","/_app/chunks/stores-dbc60e4c.js"]),()=>at((()=>import("./pages/settings.svelte-1e3af1ce.js")),["/_app/pages/settings.svelte-1e3af1ce.js","/_app/chunks/stores-dbc60e4c.js"]),()=>at((()=>import("./pages/login.svelte-6a2e6eb4.js")),["/_app/pages/login.svelte-6a2e6eb4.js","/_app/chunks/stores-dbc60e4c.js","/_app/chunks/singletons-dd9f995d.js"]),()=>at((()=>import("./pages/edit/[slug].svelte-3018a69b.js")),["/_app/pages/edit/[slug].svelte-3018a69b.js","/_app/assets/pages/edit/[slug].svelte-cf839993.css","/_app/chunks/stores-dbc60e4c.js","/_app/chunks/Slider-b4cf688f.js","/_app/assets/Slider-ae22a239.css"])],bt=decodeURIComponent,Et=()=>({}),wt=[{pattern:/^\/$/,params:Et,parts:[yt[0]]},{pattern:/^\/advanced\/?$/,params:Et,parts:[yt[1]]},{pattern:/^\/settings\/?$/,params:Et,parts:[yt[2]]},{pattern:/^\/login\/?$/,params:Et,parts:[yt[3]]},{pattern:/^\/edit\/([^/]+?)\/?$/,params:t=>({slug:bt(t[1])}),parts:[yt[4]]}],_t=[/^\/api\/constants\/?$/,/^\/api\/config\/?$/,/^\/api\/user\/?$/];function xt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}const Lt=[];function Rt(t,e=$){let s;const r=[];function n(e){if(o(t,e)&&(t=e,s)){const e=!Lt.length;for(let s=0;s<r.length;s+=1){const e=r[s];e[1](),Lt.push(e,t)}if(e){for(let t=0;t<Lt.length;t+=2)Lt[t][0](Lt[t+1]);Lt.length=0}}}return{set:n,update:function(e){n(e(t))},subscribe:function(a,o=$){const i=[a,o];return r.push(i),1===r.length&&(s=e(n)||$),a(t),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}function St(){return{x:pageXOffset,y:pageYOffset}}class Ot{constructor({base:t,host:e,pages:s,ignore:r}){this.base=t,this.host=e,this.pages=s,this.ignore=r,this.history=window.history||{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"}}init(t){let e;this.renderer=t,t.router=this,"scrollRestoration"in this.history&&(this.history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{this.history.scrollRestoration="auto"})),addEventListener("load",(()=>{this.history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout((()=>{const t=r(r({},history.state||{}),{"sveltekit:scroll":St()});history.replaceState(t,document.title,window.location.href)}),50)})),addEventListener("click",(t=>{if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=xt(t.target);if(!e)return;if(!e.href)return;const s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(s?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(s?e.target.baseVal:e.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=this.select(n);if(a){const s=e.hasAttribute("sveltekit:noscroll");this.renderer.notify(a),this.history.pushState({},"",n.href),this.navigate(a,s?St():null,[],n.hash),t.preventDefault()}})),addEventListener("popstate",(t=>{if(t.state){const e=new URL(location.href),s=this.select(e);s?this.navigate(s,t.state["sveltekit:scroll"],[]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),this.history.replaceState({},"",location.href);const s=this.select(new URL(location.href));if(s)return this.renderer.start(s)}select(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(this.base))return null;let e=t.pathname.slice(this.base.length);if(""===e&&(e="/"),!this.ignore.some((t=>t.test(e))))for(const s of this.pages){const r=s.pattern.exec(e);if(r){const n=new URLSearchParams(t.search),a=s.params(r),o={host:this.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:o}}}}async goto(t,{noscroll:e=!1,replaceState:s=!1}={},r){const n=new URL(t,function(t){let e=t.baseURI;if(!e){const s=t.getElementsByTagName("base");e=s.length?s[0].href:t.URL}return e}(document)),a=this.select(n);return a?(this.renderer.notify(a),this.history[s?"replaceState":"pushState"]({},"",t),this.navigate(a,e?St():null,r,n.hash)):(location.href=t,new Promise((()=>{})))}async navigate(t,e,s,r){location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.render(t,s),document.body.focus();const n=r&&document.getElementById(r.slice(1));e?scrollTo(e.x,e.y):n?scrollTo(0,n.getBoundingClientRect().top+scrollY):scrollTo(0,0)}}function kt(t){if(t.error){const e="string"==typeof t.error?new Error(t.error):t.error,s=t.status;return e instanceof Error?!s||s<400||s>599?(console.warn('"error" returned from load() without a valid status code — defaulting to 500'),{status:500,error:e}):{status:s,error:e}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`)}}if(t.redirect){if(!t.status||3!==Math.floor(t.status/100))return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if("string"!=typeof t.redirect)return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}return t}function At(t){const e=Rt(t);let s=!0;return{notify:function(){s=!0,e.update((t=>t))},set:function(t){s=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||s&&e!==r)&&t(r=e)}))}}}class It{constructor({Root:t,layout:e,target:s,error:r,status:n,session:a}){this.Root=t,this.layout=e,this.layout_loader=()=>e,this.router=null,this.target=s,this.initial={error:r,status:n},this.current={page:null,query:null,session_changed:!1,nodes:[],contexts:[]},this.caches=new Map,this.prefetching={href:null,promise:null},this.stores={page:At({}),navigating:Rt(null),session:Rt(a)},this.$session=null,this.root=null;const o=t=>{const e=xt(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href))};let i;addEventListener("touchstart",o),addEventListener("mousemove",(t=>{clearTimeout(i),i=setTimeout((()=>{o(t)}),20)}));let c=!1;this.stores.session.subscribe((async t=>{if(this.$session=t,!c)return;this.current.session_changed=!0;const e=this.router.select(new URL(location.href));this.render(e)})),c=!0}async start(t){const e={stores:this.stores,error:this.initial.error,status:this.initial.status,page:t.page};if(this.initial.error)e.components=[this.layout.default];else{const s=await this.hydrate(t);if(s.redirect)throw new Error("TODO client-side redirects");Object.assign(e,s.props),this.current=s.state}this.root=new this.Root({target:this.target,props:e,hydrate:!0}),this.initial=null}notify(t){this.stores.navigating.set({from:this.current.page,to:t.page})}async render(t,e){const s=this.token={},r=await this.hydrate(t);if(this.token===s){if(r.redirect){if(!(e.length>10||e.includes(this.current.page.path)))return void this.router.goto(r.redirect,{replaceState:!0},[...e,this.current.page.path]);r.props.status=500,r.props.error=new Error("Redirect loop")}this.current=r.state,this.root.$set(r.props),this.stores.navigating.set(null)}}async hydrate({route:n,page:a}){const o={status:200,error:null,components:[]},i=(r,n)=>{if(this.initial){const n=document.querySelector(`script[type="svelte-data"][url="${r}"]`);if(n){const r=JSON.parse(n.textContent),{body:a}=r,o=((r,n)=>{var a={};for(var o in r)t.call(r,o)&&n.indexOf(o)<0&&(a[o]=r[o]);if(null!=r&&e)for(var o of e(r))n.indexOf(o)<0&&s.call(r,o)&&(a[o]=r[o]);return a})(r,["body"]);return Promise.resolve(new Response(a,o))}}return fetch(r,n)},c=a.query.toString(),l={page:a,query:c,session_changed:!1,nodes:[],contexts:[]},u=[this.layout_loader(),...n.parts.map((t=>t()))],h=[];let p,f;const d={params:Object.keys(a.params).filter((t=>!this.current.page||this.current.page.params[t]!==a.params[t])),query:c!==this.current.query,session:this.current.session_changed,context:!1};try{for(let t=0;t<u.length;t+=1){const e=this.current.nodes[t],s=this.current.contexts[t],{default:n,preload:m,load:g}=await u[t];if(o.components[t]=n,m)throw new Error("preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#load");if(!e||n!==e.component||d.params.some((t=>e.uses.params.has(t)))||d.query&&e.uses.query||d.session&&e.uses.session||d.context&&e.uses.context){const e=a.path+c,s=this.caches.get(n),o=s&&s.get(e);let u,m;if(!o||d.context&&o.node.uses.context){u={component:n,uses:{params:new Set,query:!1,session:!1,context:!1}};const t={};for(const s in a.params)Object.defineProperty(t,s,{get:()=>(u.uses.params.add(s),a.params[s]),enumerable:!0});const e=this.$session;m=g&&await g.call(null,{page:{host:a.host,path:a.path,params:t,get query(){return u.uses.query=!0,a.query}},get session(){return u.uses.session=!0,e},get context(){return u.uses.context=!0,r({},p)},fetch:i})}else({node:u,loaded:m}=o);if(m){if(m=kt(m),m.error)throw m.error.status=m.status,m.error;if(m.redirect){f=m.redirect;break}if(m.context&&(d.context=!0,p=r(r({},p),m.context)),m.maxage){this.caches.has(n)||this.caches.set(n,new Map);const t=this.caches.get(n),s={node:u,loaded:m};t.set(e,s);let r=!1;const a=setTimeout((()=>{o()}),1e3*m.maxage),o=()=>{t.get(e)===s&&t.delete(e),i(),clearTimeout(a)},i=this.stores.session.subscribe((()=>{r&&o()}));r=!0}h[t]=m.props}l.nodes[t]=u,l.contexts[t]=p}else l.nodes[t]=e,l.contexts[t]=p=s}(await Promise.all(h)).forEach(((t,e)=>{t&&(o[`props_${e}`]=t)})),this.current.page&&a.path===this.current.page.path||(o.page=a)}catch(m){o.error=m,o.status=m.status||500,l.nodes=[]}return{redirect:f,props:o,state:l}}async prefetch(t){const e=this.router.select(t);if(e)return t.href!==this.prefetching.href&&(this.prefetching={href:t.href,promise:this.hydrate(e)}),this.prefetching.promise;throw new Error(`Could not prefetch ${t.href}`)}}async function Tt({paths:t,target:e,host:s,session:r,error:n,status:a}){const o=new Ot({base:t.base,host:s,pages:wt,ignore:_t}),i=new It({Root:st,layout:$t,target:e,error:n,status:a,session:r});z({router:o,renderer:i}),await o.init(i)}export{Tt as start};