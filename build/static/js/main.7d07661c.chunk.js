(this.webpackJsonpfinal_project=this.webpackJsonpfinal_project||[]).push([[0],{21:function(e,t,a){},32:function(e,t,a){e.exports=a(51)},37:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(37),a(21),a(31)),i=a(57),u=a(58),m=a(59),s=a(63),p=a(60),h=a(61),E=a(62),d=(a(38),a(15)),b=a(6),f=a(11),v=a(12),g=a(14),C=a(13),j=a(52),y=a(53),O=function(e){Object(g.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r)))._handleChange=function(t){e.props.onChangeDistance(t.target.value)},e}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"M"===this.props.distanceLabel?"Meter ":"Kilometer ",r.a.createElement("input",{type:"number",value:this.props.distance,onChange:this._handleChange})))}}]),a}(r.a.Component),k=function(e){Object(g.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).onChangeMeter=function(e){var t=(parseFloat(e)/1e3).toString();n.setState({meter:e,kilometer:t})},n.onChangeKilometer=function(e){var t=(1e3*parseFloat(e)).toString();n.setState({meter:t,kilometer:e})},n.state={meter:0,kilometer:0},n}return Object(v.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement(y.a,null,r.a.createElement("form",null,r.a.createElement(O,{distanceLabel:"K",distance:this.state.kilometer,onChangeDistance:this.onChangeKilometer}),r.a.createElement(O,{distanceLabel:"M",distance:this.state.meter,onChangeDistance:this.onChangeMeter})))))}}]),a}(r.a.Component),S=function(){return r.a.createElement(j.a,null,r.a.createElement(y.a,null,r.a.createElement("p",null,"Powered by React Javascript & Boostrap"),r.a.createElement("p",null,"Made for Sanbercode Final Project "),r.a.createElement("br",null),r.a.createElement("h3",null,"Created by Nico")))},w=a(17),A=a(54),N=a(55),M=a(56),P=function(e){Object(g.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).onSubmit=n.onSubmit.bind(Object(w.a)(n)),n.inputNama=r.a.createRef(),n.inputPhone=r.a.createRef(),n.inputAddress=r.a.createRef(),n.inputEmail=r.a.createRef(),n}return Object(v.a)(a,[{key:"onSubmit",value:function(e){alert("Name: ".concat(this.inputNama.current.value,", Phone Number: ").concat(this.inputPhone.current.value,", Address: ").concat(this.inputAddress.current.value,", Email: ").concat(this.inputEmail.current.value)),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement(y.a,null,r.a.createElement(A.a,{onSubmit:this.onSubmit},r.a.createElement(N.a,null,r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",ref:this.inputNama})),r.a.createElement(N.a,null,r.a.createElement("input",{type:"number",name:"phone",placeholder:"Phone Number",ref:this.inputPhone})),r.a.createElement(N.a,null,r.a.createElement("textarea",{name:"address",id:"",cols:"30",rows:"3",placeholder:"Address",ref:this.inputAddress})),r.a.createElement(N.a,null,r.a.createElement("input",{type:"email",name:"email",placeholder:"Email",ref:this.inputEmail})),r.a.createElement(M.a,{type:"submit",color:"primary"},"Check"))))}}]),a}(r.a.Component),D=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(i.a,{color:"light",light:!0,expand:"md"},r.a.createElement(d.b,{to:"/"},r.a.createElement(u.a,null,"DISTANCE CALCULATOR")),r.a.createElement(m.a,{onClick:function(){return c(!l)}}),r.a.createElement(s.a,{isOpen:l,navbar:!0},r.a.createElement(p.a,{className:"mr-auto",navbar:!0},r.a.createElement(h.a,null,r.a.createElement(d.b,{to:"/about"},r.a.createElement(E.a,null,"About"))),r.a.createElement(h.a,null,r.a.createElement(d.b,{to:"/users"},r.a.createElement(E.a,null,"Users")))))),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,component:k}),r.a.createElement(b.a,{path:"/about",component:S}),r.a.createElement(b.a,{path:"/Users"},r.a.createElement(P,null)))))};var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.7d07661c.chunk.js.map