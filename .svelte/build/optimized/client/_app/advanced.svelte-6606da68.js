import{S as a,i as s,s as t,b as e,c,f as l,g as n,h as r,j as i,l as o,a as d,m as h,d as f,k as u,E as m,B as p,C as v,D as g,w as S,z as b,A as E}from"./start-55c7e715.js";function y(a){let s,t;return{c(){s=e("div"),t=c("Invalid JSON"),this.h()},l(a){s=l(a,"DIV",{class:!0});var e=n(s);t=r(e,"Invalid JSON"),e.forEach(i),this.h()},h(){o(s,"class","alert alert-danger")},m(a,e){d(a,s,e),h(s,t)},d(a){a&&i(s)}}}function O(a){let s,t,S,b,E,O,N,T,j=a[1]&&y();return{c(){s=e("div"),j&&j.c(),t=f(),S=e("textarea"),b=f(),E=e("button"),O=c("Save"),this.h()},l(a){s=l(a,"DIV",{class:!0});var e=n(s);j&&j.l(e),t=u(e),S=l(e,"TEXTAREA",{class:!0}),n(S).forEach(i),b=u(e),E=l(e,"BUTTON",{disabled:!0,class:!0,type:!0});var c=n(E);O=r(c,"Save"),c.forEach(i),e.forEach(i),this.h()},h(){o(S,"class","form-control svelte-rfhj3t"),E.disabled=a[1],o(E,"class","mt-2 form-control"),o(E,"type","submit"),o(s,"class","col-12 pr-4 pl-4 advanced")},m(e,c){d(e,s,c),j&&j.m(s,null),h(s,t),h(s,S),m(S,a[0]),h(s,b),h(s,E),h(E,O),N||(T=[p(S,"input",a[3]),p(E,"click",a[2])],N=!0)},p(a,[e]){a[1]?j||(j=y(),j.c(),j.m(s,t)):j&&(j.d(1),j=null),1&e&&m(S,a[0]),2&e&&(E.disabled=a[1])},i:v,o:v,d(a){a&&i(s),j&&j.d(),N=!1,g(T)}}}function N(a,s,t){let e;S(a,E,(a=>t(4,e=a)));let c=JSON.stringify(e.configuration,null,2);let l=!1;return a.$$.update=()=>{if(1&a.$$.dirty)try{JSON.parse(c),t(1,l=!1)}catch(a){t(1,l=!0)}},[c,l,function(){fetch("/api/config",{method:"POST",body:c}).then((a=>a.json())).then((a=>{b(E,e.configuration=a.config,e),b(E,e.actions=[{id:e.count,msg:a.message,theme:a.ret?"alert-info":"alert-danger"},...e.actions],e)}))},function(){c=this.value,t(0,c)}]}export default class extends a{constructor(a){super(),s(this,a,N,O,t,{})}}
//# sourceMappingURL=advanced.svelte-6606da68.js.map
