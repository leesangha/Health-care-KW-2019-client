(this["webpackJsonpmaet-ts"]=this["webpackJsonpmaet-ts"]||[]).push([[0],{105:function(e,t,n){e.exports=n(256)},110:function(e,t,n){},114:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){},122:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},160:function(e,t,n){},252:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),o=n.n(c),l=n(4),i=n(19),s=n(11),u=(n(110),n(280)),m=n(282),f=n(278);var d=function(e){var t=e.history,n=Object(a.useState)({name:"",address:"",password:"",age:"",sex:"\ub0a8"}),c=Object(l.a)(n,2),o=c[0],d=c[1],p=o.name,g=o.address,b=o.password,h=o.age,v=o.sex,E=Object(a.useRef)(),O=Object(a.useRef)(),j=Object(a.useRef)(),S=Object(a.useRef)(),y=Object(a.useRef)(),N=Object(a.useCallback)((function(e){var t=e.target,n=t.name,a=t.value;console.log(a),d(Object(s.a)({},o,Object(i.a)({},n,a))),E.current.value&&O.current.value&&j.current.value&&S.current.value&&(y.current.style.backgroundColor="#248aff")}),[o]);return Object(a.useEffect)((function(){sessionStorage.getItem("isLogin")&&t.push("/")}),[t]),r.a.createElement("div",{className:"signup-page"},r.a.createElement("div",{className:"signup-container"},r.a.createElement("img",{src:"/images/maet-logo.png",alt:"\ud300 \ub85c\uace0"}),r.a.createElement("input",{name:"name",placeholder:"name",onChange:N,value:p,id:"name",ref:E}),r.a.createElement("input",{name:"address",placeholder:"address",onChange:N,value:g,id:"address",ref:O}),r.a.createElement("input",{name:"password",placeholder:"password",onChange:N,value:b,type:"password",id:"password",ref:j}),r.a.createElement("input",{name:"age",placeholder:"age",onChange:N,value:h,id:"age",ref:S}),r.a.createElement("div",{className:"genderbox"},r.a.createElement(m.a,{"aria-label":"gender",id:"gender",name:"sex",value:v,onChange:N},r.a.createElement("label",null,"\uc131\ubcc4  :"),"\ub0a8 ",r.a.createElement(f.a,{id:"sex",value:"\ub0a8",control:r.a.createElement(u.a,null)}),"\uc5ec ",r.a.createElement(f.a,{id:"sex",value:"\uc5ec",control:r.a.createElement(u.a,null)}))),r.a.createElement("button",{ref:y,onClick:function(){fetch("/addUser",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e.text),"success"!==e.text?(d({name:"",address:"",password:"",age:"",sex:""}),t.push("/")):(sessionStorage.setItem("number",e.user_no),t.push("/research"))}))}},"\uc81c\ucd9c")))},p=(n(114),n(20));var g=function(e){var t=e.history,n=e.setLog,c=Object(a.useState)({id:"",password:""}),o=Object(l.a)(c,2),u=o[0],m=o[1],f=u.id,d=u.password,g=Object(a.useState)(!1),b=Object(l.a)(g,2),h=b[0],v=b[1],E=Object(a.useCallback)((function(e){var t=e.target,n=t.name,a=t.value;m(Object(s.a)({},u,Object(i.a)({},n,a))),j.current.value&&S.current.value&&(y.current.style.backgroundColor="#3797F0")}),[u]),O=function(){m({id:"",password:""})},j=Object(a.useRef)(),S=Object(a.useRef)(),y=Object(a.useRef)(),N=Object(a.useRef)();return Object(a.useEffect)((function(){Boolean(sessionStorage.getItem("isLogin"))&&t.push("/")}),[t]),r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"introduce"}),r.a.createElement("div",{className:"login-container"},r.a.createElement("img",{src:"/images/maet-logo.png",alt:"\ud300 \ub85c\uace0"}),r.a.createElement("input",{name:"id",placeholder:"\uc544\uc774\ub514",onChange:E,value:f,ref:j}),r.a.createElement("input",{name:"password",placeholder:"\ube44\ubc00\ubc88\ud638",type:"password",onChange:E,value:d,ref:S}),r.a.createElement("div",{className:"error-message",ref:N}),r.a.createElement("button",{onClick:function(){v(!0),fetch("/process/login",{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){"error"===e.err?(v(!1),y.current.style.backgroundColor="#CBE0F8",N.current.innerHTML="\uc798\ubabb\ub41c \ube44\ubc00\ubc88\ud638\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",O()):(sessionStorage.setItem("info",JSON.stringify(e.user)),sessionStorage.setItem("isLogin","true"),console.log("Login Success"),n(!0),t.push("/"))})).catch((function(e){console.error(e),v(!1),y.current.style.backgroundColor="#CBE0F8",N.current.innerHTML="\uc11c\ubc84 \uc811\uc18d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",O()}))},ref:y},h?r.a.createElement("div",{className:"loader"}):"\ub85c\uadf8\uc778"),r.a.createElement("div",{className:"hr-sect"},"\ub610\ub294"),r.a.createElement("div",{className:"signup-nav"},"\uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?",r.a.createElement(p.b,{to:"Signup"}," \uac00\uc785\ud558\uae30"))))},b=(n(116),n(28)),h=(n(117),n(17)),v=n.n(h),E=n(26),O=(n(119),n(32)),j=n(33);n(122);function S(){var e=sessionStorage.getItem("info");return null===e?-1:JSON.parse(e)[0].user_no}function y(){return new Promise((function(e,t){fetch("/food/name",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){sessionStorage.setItem("foodInfo",JSON.stringify(t)),e(t)})).catch((function(e){return t(e)}))}))}function N(e){return w.apply(this,arguments)}function w(){return(w=Object(E.a)(v.a.mark((function e(t){var n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(a=sessionStorage.getItem("foodInfo"))){e.next=7;break}return e.next=4,y();case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=JSON.parse(a);case 8:return r=e.t0,e.abrupt("return",null===(n=r.result[t])||void 0===n?void 0:n.food_name);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"}};var C=function(e){var t=e.imageSrc,n=e.foodNumber,c=Object(a.useState)(!1),o=Object(l.a)(c,2),i=o[0],u=o[1],m=Object(a.useState)(),f=Object(l.a)(m,2),d=f[0],p=f[1],g={userNumber:S(),foodNumber:n};return Object(a.useEffect)((function(){N(n).then((function(e){return p(e)})).catch((function(e){return console.error(e)}))}),[n]),r.a.createElement("div",{className:"food-container"},r.a.createElement("div",{className:"food"},r.a.createElement("div",{className:"box"},i?r.a.createElement("p",null,d):null,r.a.createElement("img",{src:t,alt:"foodImage",onMouseOver:function(){return u(!0)},onMouseOut:function(){return u(!1)}}),r.a.createElement("div",null,r.a.createElement("button",{className:"like-button",onClick:function(){fetch("/food/like",Object(s.a)({},k,{body:JSON.stringify(g)})).then((function(e){return e.json()})).then((function(e){console.log("\uc120\ud638\ub3c4 \uc62c\ub9bc.")}))}},r.a.createElement(O.a,{size:"2x",color:"rgb(255, 202, 0)",icon:j.a})),r.a.createElement("button",{className:"dislike-button",onClick:function(){fetch("/food/dislike",Object(s.a)({},k,{body:JSON.stringify(g)})).then((function(e){return e.json()})).then((function(e){console.log("\uc120\ud638\ub3c4 \ub0b4\ub9bc ")}))}},r.a.createElement(O.a,{size:"2x",color:"rgb(255, 202, 0)",icon:j.c}))))))},x=n(56);function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-1;if(!(t>=n)){var a=Math.floor((t+n)/2),r=e[a].result,c=function(e,t,n,a){for(;t<=n;){for(;e[t].result>a;)t++;for(;e[n].result<a;)n--;if(t<=n){var r=e[t];e[t]=e[n],e[n]=r,t++,n--}}return t},o=c(e,t,n,r);return I(e,t,o-1),I(e,o,n),e}}var T={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"}};function A(e){return new Promise((function(t,n){fetch("/userData/preference/all",Object(s.a)({},T,{body:JSON.stringify({userNumber:e})})).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}function L(e){return new Promise((function(t,n){fetch("/userData/foodLoss",Object(s.a)({},T,{body:JSON.stringify({userNumber:e})})).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}var _=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useCallback)(function(){var e=Object(E.a)(v.a.mark((function e(t){var n,a,r,o,i,s,u,m;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([A(t),L(t)]);case 2:a=e.sent,r=Object(l.a)(a,2),o=r[0],i=r[1],s=o.map((function(e){var t=e.food_no;return{food_no:t,result:e.predicted_preference*i[t]}})),u=I(s),console.log(u),m=null===(n=I(s))||void 0===n?void 0:n.map((function(e){return e.food_no})),c(m);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(a.useEffect)((function(){var e=S();-1!==e&&o(e).catch((function(e){return console.error(e)}))}),[o]),void 0===n?r.a.createElement("div",{className:"loader"},r.a.createElement(x.PacmanLoader,{size:20,color:"#646464"})):r.a.createElement("article",{className:"recommendation"},r.a.createElement("h1",null,"\uc774\ub7f0 \uc74c\uc2dd \uc5b4\ub54c\uc694? "),function(e){for(var t=[],n=0;n<30;++n){var a="http://localhost:4002/images/".concat(e[n],".png");t.push(a)}return t.map((function(t,n){return r.a.createElement(C,{key:t,imageSrc:t,foodNumber:e[n]})}))}(n))};n(147);function R(){var e=sessionStorage.getItem("recommended_nutrition"),t=S();return new Promise(null===e?function(e,n){fetch("/userData/nutrition",{method:"POST",body:JSON.stringify({userNumber:t}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){sessionStorage.setItem("recommended_nutrition",JSON.stringify(t)),e(Object.values(t))})).catch((function(e){return n(e)}))}:function(t){return t(Object.values(JSON.parse(e)))})}function P(){var e=S();return new Promise((function(t,n){fetch("/userData/intake",{method:"POST",body:JSON.stringify({userNumber:e}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var n=Object.values(e);t(n.map((function(e){return Math.round(100*e)/100})))})).catch((function(e){return n(e)}))}))}var J=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),i=Object(l.a)(o,2),s=i[0],u=i[1],m=["calorie","carbohydrate","protein","fat","sugar","salt","cholesterol","saturated-fat","trans-fat"],f=Object(a.useCallback)(Object(E.a)(v.a.mark((function e(){var t,n,a,r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([R(),P()]);case 2:t=e.sent,n=Object(l.a)(t,2),a=n[0],r=n[1],o=a.map((function(e,t){return 0!==e?r[t]/e:0})),c(r),u(o);case 9:case"end":return e.stop()}}),e)}))),[]);return Object(a.useEffect)((function(){f().catch((function(e){return console.error(e)}))}),[f]),Object(a.useEffect)((function(){for(var e=m.map((function(e){var t=document.getElementById(e);return null===t?null:t.style})),t=0;t<e.length;++t)null!==e[t]&&(e[t].width=(75*s[t]).toString()+"%")}),[m,s]),r.a.createElement("article",{className:"analytic"},r.a.createElement("ul",{className:"nutrition"},r.a.createElement("li",null,"\uc5f4\ub7c9"),r.a.createElement("li",null,"\ud0c4\uc218\ud654\ubb3c"),r.a.createElement("li",null,"\ub2e8\ubc31\uc9c8"),r.a.createElement("li",null,"\uc9c0\ubc29"),r.a.createElement("li",null,"\ub2f9\ub958"),r.a.createElement("li",null,"\ub098\ud2b8\ub968"),r.a.createElement("li",null,"\ucf5c\ub808\uc2a4\ud14c\ub864"),r.a.createElement("li",null,"\ud3ec\ud654\uc9c0\ubc29\uc0b0"),r.a.createElement("li",null,"\ud2b8\ub79c\uc2a4\uc9c0\ubc29\uc0b0")),r.a.createElement("ul",{className:"nutrition-graph"},r.a.createElement("li",null,r.a.createElement("div",{id:"calorie"}),n[0],"kcal"),r.a.createElement("li",null,r.a.createElement("div",{id:"carbohydrate"}),n[1],"g"),r.a.createElement("li",null,r.a.createElement("div",{id:"protein"}),n[2],"g"),r.a.createElement("li",null,r.a.createElement("div",{id:"fat"}),n[3],"g"),r.a.createElement("li",null,r.a.createElement("div",{id:"sugar"}),n[4],"g"),r.a.createElement("li",null,r.a.createElement("div",{id:"salt"}),n[5],"mg"),r.a.createElement("li",null,r.a.createElement("div",{id:"cholesterol"}),n[6],"mg"),r.a.createElement("li",null,r.a.createElement("div",{id:"saturated-fat"}),n[7],"g"),r.a.createElement("li",null,r.a.createElement("div",{id:"trans-fat"}),n[8],"g"),r.a.createElement("div",{className:"recommended-amount"})))};n(148);var W=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"left-side"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:"../images/maet-logo.png",alt:"logo"})),r.a.createElement(p.b,{to:"/register"},"\ub4f1\ub85d"),r.a.createElement(p.b,{to:"/statistics"},"\ud1b5\uacc4")),r.a.createElement("div",{className:"right-side"},r.a.createElement(p.b,{to:"/login"},r.a.createElement(O.a,{icon:j.d,size:"2x",onClick:function(){sessionStorage.clear()},color:"#A5A5A5"}))))};var D=function(e){var t=e.isLogin,n=e.history;return Object(a.useEffect)((function(){t||n.push("/Login")})),r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement("section",{className:"homepage"},r.a.createElement(J,null),r.a.createElement(_,null)))};n(149);var U=function(e){var t=e.mouseOver;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"welcome"},t?r.a.createElement("i",{className:"far fa-surprise fa-2x"}):r.a.createElement("i",{className:"far fa-meh-blank fa-2x"})),r.a.createElement("div",{className:"welcome"},r.a.createElement("p",null,"\uc624\ub298 \uba39\uc740 \uc2dd\ub2e8\uc744 \ub4f1\ub85d\ud574\ubcf4\uc138\uc694!")))},B=(n(150),n(96)),F=n.n(B);n(154);function M(e){var t,n=Object(a.useState)({food:""}),c=Object(l.a)(n,2),o=c[0],i=c[1],s=sessionStorage.getItem("foodInfo");void 0!==s?t=JSON.parse(s).result.map((function(e){return{food_no:e.food_no,food_name:e.food_name}})):e.history.push("/");o.food;return r.a.createElement("div",{id:"search-box"},r.a.createElement(O.a,{icon:j.b}),r.a.createElement(F.a,{inputProps:{placeholder:"Search...",style:{width:"100%",height:"100%",borderRadius:10,borderColor:"black",fontSize:13,color:"#262626",paddingLeft:45}},items:t,wrapperStyle:{display:"flex",alignItems:"center",justifyContent:"center",height:50},menuStyle:{borderRadius:"3px",boxShadow:"0 2px 12px rgba(0, 0, 0, 0.1)",background:"rgba(255, 255, 255, 0.9)",boxSizing:"border-box",padding:"2px 10px",fontSize:"90%",position:"fixed",overflow:"auto",minWidth:"96%",maxHeight:"20%"},shouldItemRender:function(e,t){return e.food_name.toLowerCase().indexOf(t.toLowerCase())>-1},getItemValue:function(e){return e.food_name},renderItem:function(e,t){return r.a.createElement("div",{key:e.food_no,style:{display:"flex",alignItems:"center",height:30,backgroundColor:t?"#eee":"transparent"}},e.food_name)},value:o.food,onChange:function(e){return i({food:e.target.value})},onSelect:function(e){return i({food:e})}}))}var z;n(155);!function(e){e[e.bab=21]="bab",e[e.gaeranmali=241]="gaeranmali",e[e.melchi=282]="melchi",e[e.dufu=295]="dufu",e[e.kongnamul=332]="kongnamul",e[e.musengchae=345]="musengchae",e[e.kimchi=516]="kimchi",e[e.sigumchi=517]="sigumchi"}(z||(z={}));var G,H=function(e){var t=e.result,n=Object(a.useState)(t.map((function(e){return e.label}))),c=Object(l.a)(n,2),o=c[0],i=c[1],s=Object(a.useCallback)((function(e){return e.map(function(){var e=Object(E.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==(n="number"===typeof t?t:Object.values(z).includes(t)?z[t]:-1)){e.next=3;break}throw new Error("Unhandled food number error");case 3:return e.prev=3,e.abrupt("return",N(n));case 7:throw e.prev=7,e.t0=e.catch(3),new Error("Unhandled food name error: ".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[3,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]);return Object(a.useEffect)((function(){var e=t.map((function(e){return e.label}));Promise.all(s(e)).then((function(e){return i(e)}))}),[s,t]),r.a.createElement("div",{id:"list-wrapper"},r.a.createElement(M,null),r.a.createElement("ul",null,o.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))};!function(e){e[e.WAITING=0]="WAITING",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.NOT_FOOD=3]="NOT_FOOD"}(G||(G={}));var V=function(e){var t=e.preview,n=e.result,c=Object(a.useState)(G.WAITING),o=Object(l.a)(c,2),i=o[0],s=o[1];return Object(a.useEffect)((function(){null===n?s(G.WAITING):0===n.length?s(G.NOT_FOOD):s(G.SUCCESS)}),[n]),Object(a.useEffect)((function(){s(G.WAITING)}),[t]),null===t?null:r.a.createElement("div",{className:"submit-button-wrapper"},r.a.createElement("label",null,i===G.WAITING?r.a.createElement("i",{className:"fas fa-arrow-right fa-2x"}):null,r.a.createElement("input",{className:"input-file",type:"submit",onClick:function(){s(G.LOADING)}})),i===G.LOADING?r.a.createElement("div",null,r.a.createElement(x.CircleLoader,null)):i===G.SUCCESS?r.a.createElement(H,{result:n}):i===G.NOT_FOOD?r.a.createElement("p",null,"\uc74c\uc2dd\uc774 \uc544\ub2d9\ub2c8\ub2e4."):null)};n(156);var K=function(e){var t=e.userNumber,n=e.setUploadState,c=Object(a.useState)(!1),o=Object(l.a)(c,2),i=o[0],s=o[1],u=Object(a.useState)({file:null,previewURL:null}),m=Object(l.a)(u,2),f=m[0],d=m[1],p=Object(a.useState)(null),g=Object(l.a)(p,2),b=g[0],h=g[1],v=Object(a.useState)(null),E=Object(l.a)(v,2),O=E[0],j=E[1],S=Object(a.useCallback)((function(e){fetch("/file/uploads",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){console.log(e),j(e)}))}),[]);return Object(a.useEffect)((function(){null!==f.file&&h(r.a.createElement("img",{className:"preview",src:f.previewURL,alt:"\ubbf8\ub9ac\ubcf4\uae30 \uc774\ubbf8\uc9c0"}))}),[f]),r.a.createElement("form",{className:"upload",onSubmit:function(e){n(!0),e.preventDefault();var a=new FormData;a.append("id",t.toString()),a.append("img",e.target.img.files[0]),S(a)},encType:"multipart/form-data"},r.a.createElement("label",{onMouseOver:function(){return s(!0)},onMouseOut:function(){return s(!1)}},null===b?r.a.createElement(U,{mouseOver:i}):b,r.a.createElement("input",{className:"input-file",type:"file",accept:"image/jpeg,image/png,image/jpg",name:"img",onChange:function(e){if(e.preventDefault(),null!==e.target.files){var t=new FileReader,n=e.target.files[0];if(void 0===n)return h(null),null;t.onloadend=function(){return d({file:n,previewURL:t.result})},t.readAsDataURL(n)}}})),r.a.createElement(V,{preview:b,result:O}))};n(157);function Q(e){var t=e.src;return r.a.createElement("div",{className:"taken-food-container"},r.a.createElement("div",{className:"taken-food-box"},r.a.createElement("img",{src:t,alt:"\uc12d\ucde8 \uc774\ubbf8\uc9c0"})))}var $=function(e){var t=e.date,n=e.imgSrc;return r.a.createElement("div",{className:"history-wrapper"},r.a.createElement("h2",null,t.slice(0,2),".",t.slice(2,4),".",t.slice(4,6),"."),r.a.createElement("div",{className:"history"},n.map((function(e){return r.a.createElement(Q,{key:e,src:e})}))))};var q=function(e){var t=e.userNumber,n=e.uploadState,c=Object(a.useState)([]),o=Object(l.a)(c,2),i=o[0],s=o[1],u=Object(a.useCallback)((function(){fetch("/file/history",{method:"POST",body:JSON.stringify({userNumber:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return s(e.reverse())}))}),[t]);return Object(a.useEffect)(u,[u]),Object(a.useEffect)((function(){n[0]&&u()}),[u,n]),r.a.createElement("section",{className:"register-page"},r.a.createElement("article",{className:"history-page"},0!==i.length?i.map((function(e,t){var n=e.date,a=e.imgSrc;return r.a.createElement($,{key:t,date:n,imgSrc:a})})):r.a.createElement("p",null,"\ub4f1\ub85d\ud55c \uc74c\uc2dd\uc774 \uc5c6\uc5b4\uc694.")))};var X=function(){var e=Object(a.useMemo)((function(){return S()}),[]),t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{className:"register-page-container"},r.a.createElement(W,null),r.a.createElement(K,{userNumber:e,setUploadState:o}),r.a.createElement(q,{userNumber:e,uploadState:[c,o]}))},Y=n(97),Z=n.n(Y),ee=n(279);function te(e){var t=e.item,n=(e.k,e.onRemove);return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("b",null,t),r.a.createElement(ee.a,{id:"remove",onClick:function(){return n(t)}},r.a.createElement(Z.a,null))))}var ne=function(e){var t=e.list,n=e.onRemove;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(te,{item:e,key:t,onRemove:n})})))},ae=n(257),re=n(281),ce=[{value:0,label:"0"},{value:5,label:"5"},{value:10,label:"10"}];function oe(e){var t=e.setScore;return r.a.createElement("div",{className:"slider"},r.a.createElement(ae.a,{id:"discrete-slider-custom",gutterBottom:!0},"\uc810\uc218\ub97c \ub9e4\uaca8\uc8fc\uc138\uc694"),r.a.createElement(re.a,{defaultValue:5,"aria-labelledby":"discrete-slider-custom",step:1,max:10,min:0,valueLabelDisplay:"auto",marks:ce,color:"primary",onChangeCommitted:function(e,n){t(n)}}))}var le=function(e){var t=e.number,n=e.setScore,a=(e.score,"http://localhost:4002/images/".concat(t,".png"));return r.a.createElement("div",{className:"bbox"},r.a.createElement("img",{id:"picture",src:a}),r.a.createElement(oe,{setScore:n}))};function ie(){return Math.round(517*Math.random(0,517))}var se=function(e){e.history;var t=Object(a.useState)(ie()),n=Object(l.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(),s=Object(l.a)(i,2),u=s[0],m=s[1],f=Object(a.useState)(5),d=Object(l.a)(f,2),p=d[0],g=d[1];return Object(a.useEffect)((function(){N(c).then((function(e){return m(e)}))}),[c]),Object(a.useEffect)((function(){console.log(p)}),[p]),r.a.createElement("div",{id:"box"},r.a.createElement("h3",null,"2.\uc774 \uc74c\uc2dd\uc744 \uc88b\uc544\ud558\uc2dc\ub098\uc694?"),r.a.createElement("span",{id:"foodname"},u),r.a.createElement(le,{number:c,setScore:g,score:p}),r.a.createElement(ee.a,{id:"change",onClick:function(){o(ie())}},"\ub2e4\ub978 \uc74c\uc2dd"),r.a.createElement(ee.a,{id:"next",onClick:function(){fetch("/evaluate",{method:"POST",body:JSON.stringify({userNumber:sessionStorage.getItem("number"),foodNumber:c,score:p}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){o(ie())}))}},"\uc810\uc218 \ub9e4\uae30\uae30"),r.a.createElement(ee.a,{id:"next",onClick:function(){}},"\uc81c\ucd9c\ud558\uace0 \ub9c8\uce58\uae30"))};n(160);var ue=function(e){var t=e.history,n=Object(a.useState)({search:"",isSearch:!1,list:[],string:[],source:[],correct:""}),c=Object(l.a)(n,2),o=c[0],u=c[1],m=o.search,f=o.isSearch,d=o.list,p=o.string,g=o.source,b=o.correct;Object(a.useEffect)((function(){0===d.length&&u(Object(s.a)({},o,{search:"",isSearch:!1}))}),[d]);var h=Object(a.useCallback)((function(e){var t,n=e.target,a=n.name,r=n.value;(u(Object(s.a)({},o,Object(i.a)({},a,r))),""===r)&&u(Object(s.a)({},o,(t={},Object(i.a)(t,a,r),Object(i.a)(t,"isSearch",!1),t)))}),[o]);return r.a.createElement("div",null,r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"back"},r.a.createElement("img",{src:"/images/logo_line.png",alt:"\ud300 \ub85c\uace0",id:"logo"}),r.a.createElement("div",{className:"QnA_Form"},r.a.createElement("div",{className:"inbox"},r.a.createElement("h3",null,"1.\ubabb\uba39\ub294 \uc7ac\ub8cc\uac00 \uc788\ub098\uc694?"),r.a.createElement("ol",null,r.a.createElement("input",{name:"search",placeholder:"\uc7ac\ub8cc\ub97c \uac80\uc0c9\ud558\uc138\uc694",onChange:h,value:m}),r.a.createElement(ee.a,{id:"find",onClick:function(){console.log(m),fetch("/search_ingredient",{method:"POST",body:JSON.stringify({search:m}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return e.food_name}));u(Object(s.a)({},o,{isSearch:!0,list:t,correct:m}))}))},variant:"contained",color:"primary"},"\uac80\uc0c9"),r.a.createElement(ee.a,{id:"add",onClick:function(){var e=-1===g.indexOf(b);if(0===d.length)console.log("\uc74c\uc2dd\ub9ac\uc2a4\ud2b8\uac00 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4"),u(Object(s.a)({},o,{search:"",isSearch:!1}));else if(e){var t={key:m,list:d.join(",")};console.log(t),u({search:"",isSearch:!1,list:[],string:p.concat(t),source:g.concat(b)})}else console.log("\uacb9\uce58\ub294 \uc7ac\ub8cc : ".concat(b))},variant:"contained",color:"primary"},"\ucd94\uac00"),r.a.createElement(ee.a,{id:"submit",onClick:function(){console.log(p);var e=p.map((function(e){return e.list}));console.log(e.join(",")),fetch("/register",{method:"POST",body:JSON.stringify({source:e.join(","),user_no:sessionStorage.getItem("number")}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),t.push("/")}))},variant:"contained",color:"primary"},"\uc81c\ucd9c"),r.a.createElement("div",{className:"list"},!0===f?r.a.createElement("label",null,r.a.createElement("b",null,m),"\uac00 \ud3ec\ud568\ub41c \uc74c\uc2dd \ub9ac\uc2a4\ud2b8"):null,!0===f?r.a.createElement(ne,{list:d,onRemove:function(e){console.log("\uc0ad\uc81c ".concat(e)),u(Object(s.a)({},o,{list:d.filter((function(t){return t!==e}))}))}}):r.a.createElement(ne,{list:g,onRemove:function(e){console.log("\uc0ad\uc81c\ud569\ub2c8\ub2e4 ".concat(e)),u(Object(s.a)({},o,{source:g.filter((function(t){return t!==e})),string:p.filter((function(t){return t.key!==e}))}))}}))),r.a.createElement(se,null))))))},me=n(72),fe=n(57),de=n(71);n(252),n(253);var pe=function(e){var t=JSON.parse(sessionStorage.getItem("info"))[0].user_name,n=Object(a.useState)([]),c=Object(l.a)(n,2),o=c[0],i=c[1];Object(a.useEffect)((function(){var e=S();-1!==e&&fetch("/userData/intake_week",{method:"POST",body:JSON.stringify({userNumber:e}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){i([].concat(Object(me.a)(o),[{labels:[e[6].\ub0a0\uc9dc,e[5].\ub0a0\uc9dc,e[4].\ub0a0\uc9dc,e[3].\ub0a0\uc9dc,e[2].\ub0a0\uc9dc,e[1].\ub0a0\uc9dc,e[0].\ub0a0\uc9dc],datasets:[{label:"\uc5f4\ub7c9",backgroundColor:"red",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[e[6].\uc5f4\ub7c9,e[5].\uc5f4\ub7c9,e[4].\uc5f4\ub7c9,e[3].\uc5f4\ub7c9,e[2].\uc5f4\ub7c9,e[1].\uc5f4\ub7c9,e[0].\uc5f4\ub7c9]}]}])),i([].concat(Object(me.a)(o),[{labels:[e[6].\ub0a0\uc9dc,e[5].\ub0a0\uc9dc,e[4].\ub0a0\uc9dc,e[3].\ub0a0\uc9dc,e[2].\ub0a0\uc9dc,e[1].\ub0a0\uc9dc,e[0].\ub0a0\uc9dc],datasets:[{label:"\ud0c4\uc218\ud654\ubb3c",backgroundColor:"orange",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[e[6].\ud0c4\uc218\ud654\ubb3c,e[5].\ud0c4\uc218\ud654\ubb3c,e[4].\ud0c4\uc218\ud654\ubb3c,e[3].\ud0c4\uc218\ud654\ubb3c,e[2].\ud0c4\uc218\ud654\ubb3c,e[1].\ud0c4\uc218\ud654\ubb3c,e[0].\ud0c4\uc218\ud654\ubb3c]}]}]))}))}),[]);var s=function(e){switch(console.log(o),e.target.value){case"\uc8fc\uac04":document.getElementsByClassName("\uc8fc\uac04")[0].style.display="inline";break;case"\uc6d4\uac04":document.getElementsByClassName("\uc8fc\uac04")[0].style.display="none"}};return r.a.createElement("div",null,r.a.createElement("div",{class:"radio-items"},r.a.createElement("div",{class:"col-6"},r.a.createElement("input",{id:"a1",class:"only-sr checked",type:"radio",name:"temp1",value:"\uc8fc\uac04",onChange:s}),r.a.createElement("label",{for:"a1"},"\uc8fc\uac04")),r.a.createElement("div",{class:"col-6"},r.a.createElement("input",{id:"a2",class:"only-sr",type:"radio",name:"temp1",value:"\uc6d4\uac04",onChange:s}),r.a.createElement("label",{for:"a2"},"\uc6d4\uac04"))),r.a.createElement("div",{className:"\uc8fc\uac04"},r.a.createElement(fe.a,{id:"bar",data:o[0],width:800,height:250,options:{responsive:!1,title:{display:!0,text:t+" \ub2d8\uc758 \uc8fc\uac04 \ud1b5\uacc4",fontSize:20},legend:{display:!0,position:"top"},scales:{xAxes:[{gridLines:{display:!0}}],yAxes:[{gridLines:{drawBorder:!1},ticks:{display:!0}}]},showValue:{fontStyle:"Helvetica",fontSize:20}}}),r.a.createElement(de.a,null,r.a.createElement("script",null,"document.getElementById('bar').style.display=\"inline\"")),r.a.createElement("a",null,"hi"),r.a.createElement(fe.a,{id:"bar2",data:o[1],width:800,height:250,options:{responsive:!1,title:{display:!0,text:t+" \ub2d8\uc758 \uc8fc\uac04 \ud1b5\uacc4",fontSize:20},legend:{display:!0,position:"top"},scales:{xAxes:[{gridLines:{display:!0}}],yAxes:[{gridLines:{drawBorder:!1},ticks:{display:!0}}]},showValue:{fontStyle:"Helvetica",fontSize:20}}}),r.a.createElement("a",null,"hi"),r.a.createElement(de.a,null,r.a.createElement("script",null,"document.getElementById('bar2').style.display=\"inline\""))))};var ge=function(){var e=Object(a.useState)(Boolean(sessionStorage.getItem("isLogin"))),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(D,Object.assign({},e,{isLogin:n}))}}),r.a.createElement(b.a,{path:"/SignUp",component:d}),r.a.createElement(b.a,{path:"/Research",component:ue}),r.a.createElement(b.a,{path:"/Login",render:function(e){return r.a.createElement(g,Object.assign({},e,{setLog:c}))}}),r.a.createElement(b.a,{path:"/register",component:X}),r.a.createElement(b.a,{path:"/statistics",component:pe}),r.a.createElement(b.a,{path:"/autocom",component:M})))},be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,null,r.a.createElement(ge,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Health-care-KW-2019-client",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Health-care-KW-2019-client","/service-worker.js");be?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):he(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):he(t,e)}))}}()}},[[105,1,2]]]);
//# sourceMappingURL=main.bc026049.chunk.js.map