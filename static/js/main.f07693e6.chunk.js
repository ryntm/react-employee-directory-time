(this["webpackJsonpreact-employee-directory-time"]=this["webpackJsonpreact-employee-directory-time"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"name":"Michael Scott","img":"https://vignette.wikia.nocookie.net/theoffice/images/b/be/Character_-_MichaelScott.PNG","branch":"Scranton","department":"Management","position":"Regional Manager","email":"mscott@dundermifflin.com","ext":1001},{"name":"Pam Beasley","img":"https://vignette.wikia.nocookie.net/theoffice/images/6/67/Pam_Beesley.jpg","branch":"Scranton","department":"Office Administration","position":"Receptionist","email":"pbeasley@dundermifflin.com","ext":1000},{"name":"Jim Halpert","img":"https://vignette.wikia.nocookie.net/theoffice/images/e/e9/Character_-_JimHalpert.PNG","branch":"Scranton","department":"Sales","position":"Salesman","email":"jhalpert@dundermifflin.com","ext":1002},{"name":"Dwight Schrute","img":"https://vignette.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg","branch":"Scranton","department":"Sales","position":"Salesman","email":"dschrute@dundermifflin.com","ext":1003},{"name":"Phyllis Lapin","img":"https://vignette.wikia.nocookie.net/theoffice/images/e/e6/Phyllis_Vance.jpg","branch":"Scranton","department":"Sales","position":"Salesman","email":"plapin@dundermifflin.com","ext":1004},{"name":"Stanley Hudson","img":"https://vignette.wikia.nocookie.net/theoffice/images/2/23/Stanley_Hudson.jpg","branch":"Scranton","department":"Sales","position":"Salesman","email":"shudson@dundermifflin.com","ext":1005},{"name":"Angela Martin","img":"https://vignette.wikia.nocookie.net/theoffice/images/0/0b/Angela_Martin.jpg","branch":"Scranton","department":"Accounting","position":"Accountant","email":"amartin@dundermifflin.com","ext":1006},{"name":"Oscar Martinez","img":"https://vignette.wikia.nocookie.net/theoffice/images/2/25/Oscar_Martinez.jpg","branch":"Scranton","department":"Accounting","position":"Acountant","email":"omartinez@dundermifflin.com","ext":1007},{"name":"Kevin Malone","img":"https://vignette.wikia.nocookie.net/theoffice/images/b/b2/2009Kevincropped.PNG","branch":"Scranton","department":"Accounting","position":"Accountant","email":"kmalone@dundermifflin.com","ext":1008},{"name":"Meredith Palmer","img":"https://vignette.wikia.nocookie.net/theoffice/images/9/90/2009Meredith.jpg","branch":"Scranton","department":"Vendor Relation","position":"Accounts Manager","email":"mpalmer@dundermifflin.com","ext":1009},{"name":"Creed Bratton","img":"https://vignette.wikia.nocookie.net/theoffice/images/2/20/2009Creed.jpg","branch":"Scranton","department":"Vendor Relation","position":"Quality Assurance","email":"cbratton@dundermifflin.com","ext":1010},{"name":"Ryan Howard","img":"https://vignette.wikia.nocookie.net/theoffice/images/e/e0/Character_-_RyanHoward.PNG","branch":"Scranton","department":"Office Administration","position":"Temp","email":"rhoward@dundermifflin.com","ext":1011},{"name":"Toby Flenderson","img":"https://vignette.wikia.nocookie.net/theoffice/images/5/55/2009TobyCropped.PNG","branch":"Scranton","department":"Human Resources","position":"Human Resource Specialist","email":"tflenderson@dundermifflin.com","ext":1012},{"name":"Kelly Kapoor","img":"https://vignette.wikia.nocookie.net/theoffice/images/6/69/Kelly_Kapoor.jpg","branch":"Scranton","department":"Customer Relation","position":"Customer Relations Manager","email":"kkapoor@dundermifflin.com","ext":1013}]')},,,,,,,,,function(e,t,n){e.exports=n(35)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(15),c=n.n(o),r=(n(23),n(8)),m=n(1),l=(n(24),n(17));n(25);var s=function(){return i.a.createElement("img",{className:"logo",src:"https://i.pinimg.com/originals/a2/44/a3/a244a37a9fca1b393ff9b949a94c3f05.jpg",alt:"logo"})};n(26);var u=function(){return i.a.createElement("section",{className:"nav columns"},i.a.createElement("div",{className:"column is-one-fifth"},i.a.createElement("a",{href:"/"},i.a.createElement(s,{className:"logo"}))),i.a.createElement("div",{className:"place column"},"Scanton, PA",i.a.createElement("br",null),"Branch Directory"))};n(27);var p=function(e){return i.a.createElement("div",{className:"main-div"},e.children)},f=(n(28),n(9));var d=function(){var e=f,t=Object(a.useState)(e),n=Object(l.a)(t,2),o=n[0],c=n[1],r=Object(a.useRef)(),s=Object(a.useRef)(),d=Object(m.f)();function g(e){var t=e.target.getAttribute("data-id");d.push("/".concat(t))}function h(){s.current.value="Select a department..";var t,n=r.current.value;t=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})),c(t)}return i.a.createElement("div",null,i.a.createElement(u,null),i.a.createElement(p,null,i.a.createElement("span",{className:"title"},"Directory"),i.a.createElement("div",null,i.a.createElement("input",{placeholder:"Search by name..",ref:r,className:"search-name",onKeyPress:function(e){"Enter"===e.key&&h()}})," ",i.a.createElement("button",{onClick:h},"Search")),i.a.createElement("p",{className:"text"},"or"),i.a.createElement("select",{className:"dropdown departments",onChange:function(t){var n=t.target.value;console.log(n),r.current.value="";var a=e.filter((function(e){return e.department===n}));c(a)}},i.a.createElement("option",{value:"Default"},"Select a department.."),i.a.createElement("option",{value:"Accounting"},"Accounting"),i.a.createElement("option",{value:"Customer Relation"},"Customer Relation"),i.a.createElement("option",{value:"Human Resources"},"Human Resources"),i.a.createElement("option",{value:"Management"},"Management"),i.a.createElement("option",{value:"Office Administration"},"Office Administration"),i.a.createElement("option",{value:"Sales"},"Sales"),i.a.createElement("option",{value:"Vendor Relation"},"Vendor Relation")),i.a.createElement("div",{className:"employee-list"},o.map((function(e){return i.a.createElement("div",{className:"employee-item"},i.a.createElement("a",null,i.a.createElement("span",{ref:s,"data-id":e.name,key:e.name,onClick:g},e.name))," - ",e.position," (Ext. ",e.ext,")")})))))};n(34);var g=function(){var e=Object(m.g)().name,t=f;return i.a.createElement("div",null,i.a.createElement(u,null),i.a.createElement(p,null,i.a.createElement("div",null,t.filter((function(t){return t.name===e})).map((function(e){return i.a.createElement("div",{className:"employee-main columns"},i.a.createElement("div",{className:"employee-info column"},i.a.createElement("p",{className:"employee-name"},"Name: ",e.name),i.a.createElement("p",null,"Branch: ",e.branch),i.a.createElement("p",null,"Department: ",e.department),i.a.createElement("p",null,"Role: ",e.position),i.a.createElement("p",null,"Email: ",i.a.createElement("a",{href:"mailto:"+e.email},e.email)),i.a.createElement("p",null,"Ext: ",e.ext)),i.a.createElement("div",{className:"employee-image column"},i.a.createElement("img",{className:"image",src:e.img,alt:e.name})))})))))};var h=function(){return i.a.createElement(r.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/",component:d}),i.a.createElement(m.a,{exact:!0,path:"/:name",component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.f07693e6.chunk.js.map