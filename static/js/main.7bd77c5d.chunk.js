(this["webpackJsonpmia-app"]=this["webpackJsonpmia-app"]||[]).push([[0],{115:function(e,t,c){},141:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(32),i=c.n(n),s=(c(115),c(11)),o=(c(66),c(81));o.a.initializeApp({apiKey:"AIzaSyDCC2DH4VL1TCO9m-eqhQLJnUx8li26jLk",authDomain:"mmddesigne.firebaseapp.com",projectId:"mmddesigne",storageBucket:"mmddesigne.appspot.com",messagingSenderId:"475825936411",appId:"1:475825936411:web:e16aac6ff9a3fef45600be"});var j=o.a.storage(),r=c(145),l=(c(120),c(146)),b=c(144),d=c(148),O=c(150),h=c(151),u=c(149),x=c(147),p=c(57),m=Object(p.b)({key:"infoPorduct",default:" "}),g=(c(121),c(8)),f=function(){var e=Object(g.jsx)(d.a,{children:Object(g.jsx)(d.a.Item,{children:Object(g.jsx)("a",{children:"Fuoco e acciaio"})},"0")});return Object(g.jsx)(O.a,{overlay:e,trigger:["click"],children:Object(g.jsxs)("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:["Progetto ",Object(g.jsx)(h.a,{})]})})},v=x.a.TextArea,C=r.a.Meta;var N=function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(!1),x=Object(s.a)(i,2),N=x[0],z=x[1],k=Object(a.useState)(0),S=Object(s.a)(k,2),I=S[0],y=S[1],w=Object(a.useState)("Titolo"),P=Object(s.a)(w,2),A=P[0],D=P[1],F=Object(a.useState)("Categoria"),L=Object(s.a)(F,2),T=L[0],B=L[1],E=Object(a.useState)(""),J=Object(s.a)(E,2),R=J[0],U=J[1],V=Object(a.useState)(""),M=Object(s.a)(V,2),q=M[0],H=M[1],K=Object(a.useState)(!1),Q=Object(s.a)(K,2),_=Q[0],G=Q[1],W=Object(a.useState)("https://bossicar.com/wp-content/uploads/2019/06/placeholder-image.jpg"),X=Object(s.a)(W,2),Y=X[0],Z=X[1],$=Object(a.useState)(""),ee=Object(s.a)($,2),te=ee[0],ce=(ee[1],Object(p.c)(m)),ae=Object(s.a)(ce,2);ae[0],ae[1];var ne=Object(g.jsxs)(d.a,{onClick:function(e){B(e.key)},children:[Object(g.jsx)(d.a.Item,{children:Object(g.jsx)("p",{children:"Anelli"})},"Anelli"),Object(g.jsx)(d.a.Item,{children:Object(g.jsx)("p",{children:"Bracciali"})},"Bracciali"),Object(g.jsx)(d.a.Divider,{}),Object(g.jsx)(d.a.Item,{children:Object(g.jsx)("p",{children:"Collane"})},"Collane"),Object(g.jsx)(d.a.Item,{children:Object(g.jsx)("p",{children:"Orecchini"})},"Orecchini"),Object(g.jsx)(d.a.Item,{children:Object(g.jsx)("p",{children:"Ritratti"})},"Ritratti")]});return d.a,d.a.Item,d.a.Item,Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{className:"inputArea",children:[Object(g.jsx)(O.a,{overlay:ne,trigger:["click"],value:"ciao",children:Object(g.jsxs)("a",{className:"ant-dropdown-link",children:["Categoria ",Object(g.jsx)(h.a,{})]})}),Object(g.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&(n(e.target.files[0]),console.log(e.target.files[0]))}}),Object(g.jsx)(u.a,{onChange:function(e){G(e.target.checked)},children:"Prodotto nuovo ? "}),Object(g.jsx)("input",{type:"text",name:"",id:"",placeholder:"Nome prodotto",onChange:function(e){D(e.target.value)}}),Object(g.jsx)(v,{className:"infoText",rows:4,placeholder:"info",onChange:function(e){U(e.target.value)}}),Object(g.jsx)("div",{className:"prezzi",children:Object(g.jsx)("input",{type:"text",name:"",id:"",placeholder:"Prezzo",onChange:function(e){y(e.target.value)}})}),Object(g.jsx)(f,{}),Object(g.jsx)("button",{onClick:function(e){z(!0),j.ref("images/".concat(c.name)).put(c).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){j.ref("images").child(c.name).getDownloadURL().then((function(e){Z(e),z(!1)}))}))},children:"Visualizza"})]}),Object(g.jsx)("div",{className:"cardaArea",children:Object(g.jsxs)(r.a,{className:"cart",hoverable:!0,style:{width:240},cover:Object(g.jsx)(l.a,{className:"immagineCover",width:200,src:Y}),children:[Object(g.jsx)(b.a,{spinning:N}),Object(g.jsx)("h3",{children:T}),Object(g.jsx)(C,{title:A,description:"".concat(I,"\u20ac")}),Object(g.jsx)("button",{className:"uppload",onClick:function(){o.a.database().ref("url").push({link:Y,prezzo:I,titolo:A,catego:T,new:_,inforamzioni:R,disponibile:"si",progetto:te}).then(H("Caricato con successo"))},children:"Upload"}),Object(g.jsx)("p",{children:q})]})})]})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,152)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))},k=c(61),S=c(27);function I(e){return Object(g.jsxs)("div",{className:"emailSingola",children:[Object(g.jsxs)("h1",{children:["nome: ",e.nome]}),Object(g.jsxs)("h3",{children:["email: ",e.email]}),Object(g.jsxs)("h3",{children:["oggetto: ",e.oggetto]}),Object(g.jsxs)("p",{children:["testo: ",e.testo]})]})}var y=o.a.database().ref("email/");function w(e){var t=Object(a.useState)([]),c=Object(s.a)(t,2),n=c[0],i=c[1];return Object(a.useEffect)((function(){y.on("value",(function(e){var t=e.val();i(Object.values(t))}))}),[]),Object(g.jsx)("div",{children:n.slice(0).reverse().map((function(e){return Object(g.jsx)(I,{nome:e.nome,oggetto:e.oggetto,testo:e.testo,email:e.email})}))})}var P=o.a.database().ref("url/"),A=r.a.Meta;function D(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){P.on("value",(function(e){var t=e.val();console.log(Object.values(t)),n(Object.values(t))}))}),[]),Object(g.jsx)("div",{className:"prodottiOnline",children:c.map((function(e){return Object(g.jsx)("div",{className:"cardOnline ",children:Object(g.jsxs)(r.a,{className:"cart",hoverable:!0,style:{width:240},cover:Object(g.jsx)(l.a,{className:"immagineCover",width:200,src:e.link}),children:[Object(g.jsx)(A,{title:"".concat(e.titolo),description:e.catego}),Object(g.jsx)("h3",{children:e.prezzo}),Object(g.jsxs)("p",{children:["Prezzo vecchio: ",e.prezzoVecchio,"\u20ac"]})]})})}))})}function F(){return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{children:"Nuovo Progetto"}),Object(g.jsx)("label",{children:"Nome Progetto"}),Object(g.jsx)("input",{type:"text"}),Object(g.jsx)("label",{children:"Informazioni progetto"}),Object(g.jsx)("textarea",{}),Object(g.jsx)("input",{className:"nuovaFoto",type:"file",multiple:!0,onChange:function(e){e.target.files[0]&&console.log(e.target.files)}}),Object(g.jsx)("button",{children:"Crea progetto"})]})}function L(){return Object(g.jsx)(k.a,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)("nav",{className:"header",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)(k.b,{to:"/",children:"Publica"})}),Object(g.jsx)("li",{children:Object(g.jsx)(k.b,{to:"/email",children:"Email"})}),Object(g.jsx)("li",{children:Object(g.jsx)(k.b,{to:"/prodotti",children:"Prodotti"})}),Object(g.jsx)("li",{children:Object(g.jsx)(k.b,{to:"/progetto",children:"Nuovo progetto"})})]})}),Object(g.jsxs)(S.c,{children:[Object(g.jsx)(S.a,{exact:!0,path:"/email",children:Object(g.jsx)(w,{})}),Object(g.jsx)(S.a,{exact:!0,path:"/",children:Object(g.jsx)(N,{})}),Object(g.jsx)(S.a,{exact:!0,path:"/Prodotti",children:Object(g.jsx)(D,{})}),Object(g.jsx)(S.a,{exact:!0,path:"/Progetto",children:Object(g.jsx)(F,{})})]})]})})}i.a.render(Object(g.jsx)(p.a,{children:Object(g.jsx)(L,{})}),document.getElementById("root")),z()},66:function(e,t,c){}},[[141,1,2]]]);
//# sourceMappingURL=main.7bd77c5d.chunk.js.map