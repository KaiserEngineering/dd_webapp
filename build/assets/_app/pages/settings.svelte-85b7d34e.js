import{S as s,i as a,s as r,e,t,j as o,c,a as i,b as n,d as l,l as d,o as u,f,g as m,Q as h,J as p,R as v,n as b,P as E,G as w,I as U,H as y}from"../chunks/stores-67155c76.js";function I(s){let a,r,w,U,y,I,g,q,P,D,V,T,k,L,N,j,x,B,O,A,J,R,S,F,G;return{c(){a=e("form"),r=e("div"),w=e("div"),U=e("div"),y=e("label"),I=t("Username"),g=o(),q=e("input"),P=o(),D=e("div"),V=t("Username is required"),T=o(),k=e("div"),L=e("label"),N=t("Password"),j=o(),x=e("input"),B=o(),O=e("div"),A=t("Password is required"),J=o(),R=e("button"),S=t("Update settings"),this.h()},l(s){a=c(s,"FORM",{});var e=i(a);r=c(e,"DIV",{class:!0});var t=i(r);w=c(t,"DIV",{class:!0});var o=i(w);U=c(o,"DIV",{class:!0});var u=i(U);y=c(u,"LABEL",{for:!0});var f=i(y);I=n(f,"Username"),f.forEach(l),g=d(u),q=c(u,"INPUT",{type:!0,class:!0,name:!0,required:!0}),P=d(u),D=c(u,"DIV",{class:!0});var m=i(D);V=n(m,"Username is required"),m.forEach(l),u.forEach(l),T=d(o),k=c(o,"DIV",{class:!0});var h=i(k);L=c(h,"LABEL",{for:!0});var p=i(L);N=n(p,"Password"),p.forEach(l),j=d(h),x=c(h,"INPUT",{type:!0,class:!0,name:!0,required:!0}),B=d(h),O=c(h,"DIV",{class:!0});var v=i(O);A=n(v,"Password is required"),v.forEach(l),h.forEach(l),o.forEach(l),J=d(t),R=c(t,"BUTTON",{class:!0,type:!0});var b=i(R);S=n(b,"Update settings"),b.forEach(l),t.forEach(l),e.forEach(l),this.h()},h(){u(y,"for","username"),u(q,"type","text"),u(q,"class","form-control"),u(q,"name","username"),q.required=!0,u(D,"class","invalid-feedback"),u(U,"class","col-md-6 mb-3"),u(L,"for","password"),u(x,"type","password"),u(x,"class","form-control"),u(x,"name","password"),x.required=!0,u(O,"class","invalid-feedback"),u(k,"class","col-md-6 mb-3"),u(w,"class","row"),u(R,"class","btn btn-lg btn-primary btn-block"),u(R,"type","submit"),u(r,"class","p-4 col-md-12 order-md-1")},m(e,t){f(e,a,t),m(a,r),m(r,w),m(w,U),m(U,y),m(y,I),m(U,g),m(U,q),h(q,s[0]),m(U,P),m(U,D),m(D,V),m(w,T),m(w,k),m(k,L),m(L,N),m(k,j),m(k,x),h(x,s[1]),m(k,B),m(k,O),m(O,A),m(r,J),m(r,R),m(R,S),F||(G=[p(q,"input",s[3]),p(x,"input",s[4]),p(a,"submit",v(s[2]))],F=!0)},p(s,[a]){1&a&&q.value!==s[0]&&h(q,s[0]),2&a&&x.value!==s[1]&&h(x,s[1])},i:b,o:b,d(s){s&&l(a),F=!1,E(G)}}}function g(s,a,r){let e,t,o;return w(s,y,(s=>r(5,e=s))),[t,o,function(s){fetch("/api/user",{method:"PUT",body:JSON.stringify({username:t,password:o})}).then((s=>s.json())).then((s=>{U(y,e.actions=[{id:e.count,msg:s.message,theme:s.ret?"alert-info":"alert-warning"},...e.actions],e)}))},function(){t=this.value,r(0,t)},function(){o=this.value,r(1,o)}]}export default class extends s{constructor(s){super(),a(this,s,g,I,r,{})}}