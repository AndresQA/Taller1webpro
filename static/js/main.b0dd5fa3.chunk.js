(this["webpackJsonptaller1web-app"]=this["webpackJsonptaller1web-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),i=a.n(c),s=(a(23),a(8)),r=a(2),m=a(1),o=l.a.createContext({name:"",id:"",contextSetName:function(){return null},color:"black",contextSetColor:function(){return null},mag:"",contextSetMag:function(){return null},sight:"",contextSetSight:function(){return null},silencer:"",contextSetSilencer:function(){return null},handle:"",contextSetHandle:function(){return null},butt:"",contextSetButt:function(){return null},barrelColor:"",contextSetBarrelColor:function(){return null},classButt:"",funclassbutt:function(){return null},classSilencer:"",contextClassSilencer:function(){return null},classSight:"",contextClassSight:function(){return null},handleFinish:function(){return null},list:[],setList:function(){return null},handleChangeId:function(){return null}}),g=function(){var e=l.a.useContext(o);return l.a.createElement("div",{className:"Homescreen"},l.a.createElement(m.b,{to:"/basic"},l.a.createElement("div",{className:"hoverprop"},l.a.createElement("p",{onClick:function(){e.handleChangeId()},className:"btnstart"},"CREATE"))),l.a.createElement("br",null),l.a.createElement(m.b,{to:"/galery"},l.a.createElement("div",{className:"hoverprop"},l.a.createElement("p",{className:"btnstart"},"GALERY"))))},u=function(e){return l.a.createElement("nav",null,l.a.createElement("strong",null,l.a.createElement("div",{className:"Mainnav"},"/basic"==e.location.pathname?l.a.createElement(m.b,{to:"/basic",className:"basic redchange"},"Basic"):l.a.createElement(m.b,{to:"/basic",className:"basic"},"Basic"),"/accessories"==e.location.pathname?l.a.createElement(m.b,{to:"/accessories",className:"accessories redchange"},"Accessories"):l.a.createElement(m.b,{to:"/accessories",className:"accessories"},"Accessories"),"/performance"==e.location.pathname?l.a.createElement(m.b,{to:"/performance",className:"performance redchange"},"Performance"):l.a.createElement(m.b,{to:"/performance",className:"performance"},"Performance"))))},d=a(5),b=function(){var e=l.a.useContext(o),t=Object(d.e)();return l.a.createElement("div",null,l.a.createElement("div",{className:"preview"},l.a.createElement("img",{src:e.color,className:"preview_armbody",alt:""}),l.a.createElement("img",{src:e.butt,className:e.classButt,alt:""}),l.a.createElement("img",{src:"/images/gun/mag/mag"+e.mag+".png",className:"preview_mag",alt:""}),l.a.createElement("img",{src:e.handle,className:"preview_handle",alt:""}),l.a.createElement("img",{src:e.barrelColor,className:"preview_barrel",alt:""}),l.a.createElement("img",{src:e.silencer,className:e.classSilencer,alt:""}),l.a.createElement("img",{src:e.sight,className:e.classSight,alt:""})),l.a.createElement("p",{className:"namegun"}," ",e.name," "),l.a.createElement(m.b,{to:"/galery"},l.a.createElement("p",{onClick:function(){e.handleFinish(),t.push("/galery")},className:"finishbtn"},"Finish")))},p=function(e){var t=l.a.useContext(o);return l.a.createElement("div",null,l.a.createElement(d.a,{component:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"Handle"),l.a.createElement("div",{className:"itemposacc"},l.a.createElement("div",{className:"/images/gun/handle/handle1.png"==t.handle?"item__img itemselect":"item__img",onClick:function(){t.contextSetHandle("/images/gun/handle/handle1.png")}},l.a.createElement("img",{src:"/images/gun/handle/handle1.png",alt:""})),l.a.createElement("div",{className:"/images/gun/handle/handle2.png"==t.handle?"item__img itemselect":"item__img",onClick:function(){t.contextSetHandle("/images/gun/handle/handle2.png")}},l.a.createElement("img",{src:"/images/gun/handle/handle2.png",alt:""})),l.a.createElement("div",{className:"/images/gun/handle/handle3.png"==t.handle?"item__img itemselect":"item__img",onClick:function(){t.contextSetHandle("/images/gun/handle/handle3.png")}},l.a.createElement("img",{className:"handlelast",src:"/images/gun/handle/handle3.png",alt:""})))),l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"Butt stock"),l.a.createElement("div",{className:"itemposacc"},l.a.createElement("div",{className:""==t.butt?"item__img itemselect":"item__img",onClick:function(){t.contextSetButt("")}},l.a.createElement("img",{src:"/images/gun/butt/Stock.png",alt:""})),l.a.createElement("div",{className:"/images/gun/butt/butt1.png"==t.butt?"item__img itemselect":"item__img",onClick:function(){t.funclassbutt("preview_butt"),t.contextSetButt("/images/gun/butt/butt1.png")}},l.a.createElement("img",{src:"/images/gun/butt/butt1.png",alt:""})),l.a.createElement("div",{className:"/images/gun/butt/butt2.png"==t.butt?"item__img itemselect":"item__img",onClick:function(){t.funclassbutt("preview_butt2"),"/images/gun/body/body_blue.png"===t.color?t.contextSetButt("/images/gun/butt/butt2_blue.png"):"/images/gun/body/body_gold.png"===t.color?t.contextSetButt("/images/gun/butt/butt2_gold.png"):t.contextSetButt("/images/gun/butt/butt2_black.png")}},l.a.createElement("img",{src:"/images/gun/butt/butt2_black.png",alt:""}))))),l.a.createElement(b,null))},h=function(e){var t=l.a.useContext(o),a=function(e){t.contextSetColor("/images/gun/body/body_"+e+".png"),t.contextSetBarrelColor("/images/gun/body/barrel_"+e+".png"),""!=t.butt&&"/images/gun/butt/butt1.png"!=t.butt&&t.contextSetButt("/images/gun/butt/butt2_"+e+".png")};return l.a.createElement("div",null,l.a.createElement(d.a,{component:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"Name"),l.a.createElement("input",{type:"text",placeholder:"Setup Name",value:t.name,onChange:function(e){console.log(e.target.value),t.contextSetName(e.target.value)}})),l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"Mag size"),l.a.createElement("input",{type:"range",min:"1",max:"3",name:"",value:t.mag,onChange:function(e){t.contextSetMag(e.target.value)}})),l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"Color"),l.a.createElement("div",{className:"itempos"},l.a.createElement("div",{className:"/images/gun/body/body_black.png"==t.color?"item__color plate itemselect":"item__color plate",onClick:function(){return a("black")}}),l.a.createElement("div",{className:"/images/gun/body/body_blue.png"==t.color?"item__color blue itemselect":"item__color blue",onClick:function(){return a("blue")}}),l.a.createElement("div",{className:"/images/gun/body/body_gold.png"==t.color?"item__color gold itemselect":"item__color gold",onClick:function(){return a("gold")}})))),l.a.createElement(b,null))},E=function(e){var t=l.a.useContext(o);return l.a.createElement("div",null,l.a.createElement(d.a,{component:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"Sight"),l.a.createElement("div",{className:"itemposacc__sitght"},l.a.createElement("div",{className:""==t.sight?"item__img itemselect":"item__img",onClick:function(){t.contextSetSight("")}},l.a.createElement("img",{src:"/images/gun/sight/stock.png",alt:""})),l.a.createElement("div",{className:"/images/gun/sight/sight2.png"==t.sight?"item__img itemselect":"item__img",onClick:function(){t.contextClassSight("preview_sight2"),t.contextSetSight("/images/gun/sight/sight2.png")}},l.a.createElement("img",{src:"/images/gun/sight/sight2.png",alt:""})),l.a.createElement("div",{className:"/images/gun/sight/sight3.png"==t.sight?"item__img itemselect":"item__img",onClick:function(){t.contextClassSight("preview_sight3"),t.contextSetSight("/images/gun/sight/sight3.png")}},l.a.createElement("img",{src:"/images/gun/sight/sight3.png",alt:""})))),l.a.createElement("div",{className:"item"},l.a.createElement("p",null,"Silencer"),l.a.createElement("div",{className:"itemposacc"},l.a.createElement("div",{className:""==t.silencer?"item__img itemselect":"item__img",onClick:function(){t.contextSetSilencer("")}},l.a.createElement("img",{src:"/images/gun/silencer/stock.png",alt:""})),l.a.createElement("div",{className:"/images/gun/silencer/silencer2.png"==t.silencer?"item__img itemselect":"item__img",onClick:function(){t.contextClassSilencer("preview_silencer"),t.contextSetSilencer("/images/gun/silencer/silencer2.png")}},l.a.createElement("img",{src:"/images/gun/silencer/silencer2.png",alt:""})),l.a.createElement("div",{className:"/images/gun/silencer/silencer3.png"==t.silencer?"item__img itemselect":"item__img",onClick:function(){t.contextClassSilencer("preview_silencer2"),t.contextSetSilencer("/images/gun/silencer/silencer3.png")}},l.a.createElement("img",{src:"/images/gun/silencer/silencer3.png",alt:""}))))),l.a.createElement(b,null))},S=function(){var e=l.a.useContext(o),t=Object(d.e)();return l.a.createElement("div",{className:"contentsArms"},l.a.createElement("h1",null,"Galery"),l.a.createElement(m.b,{to:"/"},l.a.createElement("h1",null,"Volver")),e.list.map((function(a){return l.a.createElement("div",{className:"armcreate",id:a.id},l.a.createElement("p",null,a.name),l.a.createElement("img",{className:"btnDelete",onClick:function(){return function(t){var a=document.getElementById(t);a.classList.add("animated","zoomOut"),a.addEventListener("animationend",(function(){a.classList.remove("animated","zoomOut");var n=e.list.findIndex((function(e){return e.id===t}));console.log(n),e.setList([].concat(Object(s.a)(e.list.slice(0,n)),Object(s.a)(e.list.slice(n+1))))}))}(a.id)},src:"/images/delete.png",alt:""}),l.a.createElement("div",{className:"armcreate__prev",onClick:function(){return function(a){var n;e.list.findIndex((function(e){return n=e,e.id===a})),e.contextSetName(n.name),e.id=n.id,e.contextSetColor(n.color),e.contextSetSight(n.sight),e.contextSetSilencer(n.silencer),e.contextSetMag(n.mag),e.contextSetHandle(n.handle),e.contextSetButt(n.butt),e.contextSetBarrelColor(n.barrelColor),e.funclassbutt(n.classButt),e.contextClassSilencer(n.classSilencer),e.contextClassSight(n.classSight),t.push("/basic")}(a.id)}},l.a.createElement("img",{src:a.color,className:"preview_armbodyGalery",alt:""}),l.a.createElement("img",{src:a.butt,className:a.classButt+"Galery",alt:""}),l.a.createElement("img",{src:"/images/gun/mag/mag"+a.mag+".png",className:"preview_magGalery",alt:""}),l.a.createElement("img",{src:a.handle,className:"preview_handleGalery",alt:""}),l.a.createElement("img",{src:a.barrelColor,className:"preview_barrelGalery",alt:""}),l.a.createElement("img",{src:a.silencer,className:a.classSilencer+"Galery",alt:""}),l.a.createElement("img",{src:a.sight,className:a.classSight+"Galery",alt:""})))})),e.list.length>0&&l.a.createElement("p",{className:"deleteall",onClick:function(){e.setList([])}},"Delete All"))},_=a(31);var v=function(){var e=l.a.useState("Ak-47"),t=Object(r.a)(e,2),a=t[0],n=t[1],c=l.a.useState(Object(_.a)()),i=Object(r.a)(c,2),u=i[0],b=i[1],v=l.a.useState("/images/gun/body/body_black.png"),f=Object(r.a)(v,2),N=f[0],x=f[1],C=l.a.useState(""),k=Object(r.a)(C,2),y=k[0],B=k[1],w=l.a.useState(""),O=Object(r.a)(w,2),j=O[0],A=O[1],G=l.a.useState("1"),H=Object(r.a)(G,2),I=H[0],L=H[1],M=l.a.useState("/images/gun/handle/handle1.png"),F=Object(r.a)(M,2),J=F[0],z=F[1],P=l.a.useState(""),D=Object(r.a)(P,2),R=D[0],W=D[1],T=l.a.useState("/images/gun/body/barrel_black.png"),V=Object(r.a)(T,2),Y=V[0],$=V[1],q=l.a.useState(""),K=Object(r.a)(q,2),Q=K[0],U=K[1],X=l.a.useState(""),Z=Object(r.a)(X,2),ee=Z[0],te=Z[1],ae=l.a.useState(""),ne=Object(r.a)(ae,2),le=ne[0],ce=ne[1],ie=l.a.useState([]),se=Object(r.a)(ie,2),re=se[0],me=se[1];l.a.useEffect((function(){var e=localStorage.getItem("list");null!=e&&me(JSON.parse(e))}),[]),l.a.useEffect((function(){localStorage.setItem("list",JSON.stringify(re))}),[re]);var oe={name:a,id:u,contextSetName:n,color:N,contextSetColor:x,mag:I,contextSetMag:L,sight:y,contextSetSight:B,silencer:j,contextSetSilencer:A,handle:J,contextSetHandle:z,butt:R,contextSetButt:W,barrelColor:Y,contextSetBarrelColor:$,classButt:Q,funclassbutt:U,classSilencer:ee,contextClassSilencer:te,classSight:le,contextClassSight:ce,list:re,setList:me,handleFinish:function(){oe.setList([].concat(Object(s.a)(oe.list),[{name:oe.name,id:oe.id,color:oe.color,butt:oe.butt,mag:oe.mag,handle:oe.handle,barrelColor:oe.barrelColor,silencer:oe.silencer,sight:oe.sight,classButt:oe.classButt,classSilencer:oe.classSilencer,classSight:oe.classSight}]))},handleChangeId:function(){b(Object(_.a)()),oe.contextSetName("Ak-47"),oe.contextSetColor("/images/gun/body/body_black.png"),oe.contextSetSight(""),oe.contextSetSilencer(""),oe.contextSetMag("1"),oe.contextSetHandle("/images/gun/handle/handle1.png"),oe.contextSetButt(""),oe.contextSetBarrelColor("/images/gun/body/barrel_black.png")}};return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,null,l.a.createElement(o.Provider,{value:oe},l.a.createElement(d.a,{path:"/",exact:!0,component:g}),l.a.createElement(d.a,{path:"/basic",component:h}),l.a.createElement(d.a,{path:"/accessories",component:E}),l.a.createElement(d.a,{path:"/performance",component:p}),l.a.createElement(d.a,{path:"/galery",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.b0dd5fa3.chunk.js.map