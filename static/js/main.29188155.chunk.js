(this["webpackJsonpfm-react-app"]=this["webpackJsonpfm-react-app"]||[]).push([[0],{13:function(e,t,n){e.exports={light:"Header_light__2FZgk",dark:"Header_dark__2ACZf",container:"Header_container__1HFgA"}},14:function(e,t,n){e.exports={light:"Footer_light__trhf1",dark:"Footer_dark__3PCX4",container:"Footer_container__3UxX9"}},15:function(e,t,n){e.exports={light:"Tree_light__2OClI",dark:"Tree_dark__37dWZ",container:"Tree_container__2n8Sm"}},17:function(e,t,n){e.exports={container:"UserCard_container__3-fev",img:"UserCard_img__3AfPa"}},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(18),i=n.n(c),s=(n(30),n(19)),j=n(7),o=n(22),u=n(21),l=(n(31),Object(r.createContext)()),d=Object(r.createContext)(),h=Object(r.createContext)(),b={THEMES:{DARK:"DARK",LIGHT:"LIGHT"},TITLES:{en:{langName:"English",tree:"Tree",parent:"Parent",child:"Child",userCard:"User card",selectLang:"Select your language"},ru:{langName:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",tree:"\u0414\u0435\u0440\u0435\u0432\u043e",parent:"\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c",child:"\u0420\u0435\u0431\u0435\u043d\u043e\u043a",userCard:"\u041a\u0430\u0440\u0442\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",selectLang:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u044f\u0437\u044b\u043a"},es:{langName:"Espa\xf1ol",tree:"\xc1rbol",parent:"Padre",child:"Hijo",userCard:"Tarjeta de usuario",selectLang:"Elige tu idioma"}}},O=n(2),g=n(6),m=n.n(g),x=n(50),f=n(51),T=n(13),v=n.n(T),_=n(5),p=n(10),L=n(0),C=function(e){return function(t){return Object(L.jsx)(d.Consumer,{children:function(n){var r=Object(p.a)(n,2),a=r[0],c=r[1];return Object(L.jsx)(e,Object(_.a)(Object(_.a)({},t),{},{theme:a,setTheme:c}))}})}},E=function(e){return function(t){return Object(L.jsx)(l.Consumer,{children:function(n){return Object(L.jsx)(e,Object(_.a)(Object(_.a)({},t),{},{user:n}))}})}},k=function(e){return function(t){return Object(L.jsx)(h.Consumer,{children:function(n){var r=Object(p.a)(n,2),a=r[0],c=r[1];return Object(L.jsx)(e,Object(_.a)(Object(_.a)({},t),{},{lang:a,setLang:c}))}})}},S=b.THEMES,H=C(E((function(e){var t,n=e.theme,r=e.setTheme,a=e.user,c=m()(v.a.container,(t={},Object(O.a)(t,v.a.light,n===S.LIGHT),Object(O.a)(t,v.a.dark,n===S.DARK),t));return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("header",{className:c,children:[Object(L.jsxs)("p",{children:[a.fname," ",a.sname," ","\xa0\xa0"]}),Object(L.jsx)("div",{onClick:function(){var e=n===S.LIGHT?S.DARK:S.LIGHT;r(e)},children:n===S.DARK?Object(L.jsx)(x.a,{}):Object(L.jsx)(f.a,{})})]})})}))),I=n(14),A=n.n(I),F=b.THEMES,N=b.TITLES,P=C(k((function(e){var t,n=e.theme,r=e.lang,a=e.setLang,c=m()(A.a.container,(t={},Object(O.a)(t,A.a.light,n===F.LIGHT),Object(O.a)(t,A.a.dark,n===F.DARK),t));return Object(L.jsxs)("footer",{className:c,children:[Object(L.jsxs)("p",{children:[N[r].selectLang,":\xa0"]}),Object(L.jsx)("select",{onChange:function(e){var t=e.target.value;a(t)},children:Object.keys(N).map((function(e){return Object(L.jsx)("option",{value:e,selected:e===r,children:N[e].langName})}))})]})}))),D=n(17),G=n.n(D),K=b.TITLES,R=E(k((function(e){var t=e.user,n=e.lang;return Object(L.jsxs)("div",{className:G.a.container,children:[Object(L.jsx)("h2",{children:K[n].userCard}),Object(L.jsxs)("p",{children:[t.fname," ",t.sname]}),Object(L.jsx)("img",{src:t.imgSrc,className:G.a.img})]})}))),M=b.TITLES,y=k((function(e){var t=e.lang;return Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:M[t].child}),Object(L.jsx)(R,{})]})})),U=b.TITLES,w=k((function(e){var t=e.lang;return Object(L.jsxs)("div",{children:[Object(L.jsx)("h2",{children:U[t].parent}),Object(L.jsx)(y,{})]})})),Z=n(15),B=n.n(Z),J=b.THEMES,X=b.TITLES,W=C(k((function(e){var t,n=e.theme,r=e.lang,a=m()(B.a.container,(t={},Object(O.a)(t,B.a.light,n===J.LIGHT),Object(O.a)(t,B.a.dark,n===J.DARK),t));return Object(L.jsxs)("div",{className:a,children:[Object(L.jsx)("h2",{children:X[r].tree}),Object(L.jsx)(w,{})]})}))),q=b.THEMES,z=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).setTheme=function(e){r.setState({theme:e})},r.setLang=function(e){r.setState({lang:e})},r.state={theme:q.LIGHT,user:{id:1,fname:"Olga",sname:"Kuprin",imgSrc:"https://mariokomi.ru/wp-content/uploads/krasivaya-devushka-v-ochkah.jpg"},lang:"ru"},r}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.user,n=e.theme,r=e.lang;return Object(L.jsx)(h.Provider,{value:[r,this.setLang],children:Object(L.jsx)(d.Provider,{value:[n,this.setTheme],children:Object(L.jsxs)(l.Provider,{value:t,children:[Object(L.jsx)(H,{}),Object(L.jsx)(W,{}),Object(L.jsx)(P,{})]})})})}}]),n}(r.Component),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(z,{})}),document.getElementById("root")),Q()}},[[37,1,2]]]);
//# sourceMappingURL=main.29188155.chunk.js.map