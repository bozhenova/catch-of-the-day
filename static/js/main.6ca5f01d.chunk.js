(this["webpackJsonpcatch-of-the-day"]=this["webpackJsonpcatch-of-the-day"]||[]).push([[0],{34:function(e,t,a){e.exports=a(62)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),i=a.n(s),c=a(31),o=a(3),l=a(5),u=a(6),m=a(8),h=a(7);function p(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function d(e){return e[Math.floor(Math.random()*e.length)]}function f(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(d(e),"-").concat(d(e),"-").concat(d(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}a(39);var v=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).myInput=r.a.createRef(),e.goToStore=function(t){t.preventDefault();var a=e.myInput.current.value;e.props.history.push("/store/".concat(a))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter a Store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:f()}),r.a.createElement("button",{type:"submit"},"Visit Store ->"))}}]),a}(n.Component),g=a(12),b=(a(40),a(41),function(e){var t=e.tagline;return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"Of"),r.a.createElement("span",{className:"the"},"The")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,t)))}),y=a(64),E=a(65),O=(a(42),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).renderOrder=function(t){var a=e.props,n=a.order,s=a.fishes[t],i=n[t],c=s&&"available"===s.status,o={classNames:"order",key:t,timeout:{enter:500,exit:500}};return s?c?r.a.createElement(y.a,o,r.a.createElement("li",{key:t},r.a.createElement("span",null,r.a.createElement(E.a,{component:"span",className:"count"},r.a.createElement(y.a,{classNames:"count",key:i,timeout:o},r.a.createElement("span",null,i," "))),"lbs ",s.name,r.a.createElement("span",{className:"price"},p(i*s.price)),r.a.createElement("button",{onClick:function(){return e.props.removeFromOrder(t)}},"\xd7")))):r.a.createElement(y.a,o,r.a.createElement("li",{key:t},"Sorry, ",s?s.name:"fish"," is no longer available")):null},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.order,a=e.fishes,n=Object.keys(t),s=n.reduce((function(e,n){var r=a[n],s=t[n];return r&&"available"===r.status?e+s*r.price:e}),0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(E.a,{component:"ul",className:"order"},n.map(this.renderOrder)),r.a.createElement("div",{className:"total"},"Total:",r.a.createElement("strong",null,p(s))))}}]),a}(n.Component)),k=a(17),j=a.n(k),w=a(23),F=a(18),S=a(14),C=a.n(S),N=(a(49),a(30)),x=a.n(N),R=(a(52),C.a.initializeApp({apiKey:"AIzaSyDJWtLE7ofX_AADhiLuqFy5Nm4efTkP7z0",authDomain:"catch-of-the-day-f9236.firebaseapp.com",databaseURL:"https://catch-of-the-day-f9236.firebaseio.com"})),A=x.a.createClass(R.database()),I=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).nameRef=r.a.createRef(),e.priceRef=r.a.createRef(),e.statusRef=r.a.createRef(),e.descRef=r.a.createRef(),e.imageRef=r.a.createRef(),e.createFish=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addFish(a),t.currentTarget.reset()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),r.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),r.a.createElement("button",{type:"submit"},"+ Add Fish"))}}]),a}(n.Component),T=a(19),D=(a(56),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var a=Object(g.a)(Object(g.a)({},e.props.fish),{},Object(T.a)({},t.currentTarget.name,t.currentTarget.value));e.props.updateFish(e.props.index,a)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.fish,a=t.name,n=t.price,s=t.status,i=t.desc,c=t.image,o=e.deleteFish,l=e.index;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:a}),r.a.createElement("input",{type:"text",name:"price",onChange:this.handleChange,value:n}),r.a.createElement("select",{name:"status",onChange:this.handleChange,value:s},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:i}),r.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:c}),r.a.createElement("button",{onClick:function(){return o(l)}},"Remove Fish"))}}]),a}(n.Component)),L=(a(57),function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Sign in to manage your store's inventory"),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log In With Github"),r.a.createElement("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")}},"Log In With Facebook"))}),M=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={uid:null,owner:null},e.authHandler=function(){var t=Object(w.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.fetch(e.props.storeId,{context:Object(F.a)(e)});case 2:if((n=t.sent).owner){t.next=6;break}return t.next=6,A.post("".concat(e.props.storeId,"/owner"),{data:a.user.uid});case 6:e.setState({uid:a.user.uid,owner:n.owner||a.user.uid});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(t){var a=new(C.a.auth["".concat(t,"AuthProvider")]);R.auth().signInWithPopup(a).then(e.authHandler)},e.logout=Object(w.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.auth().signOut();case 2:e.setState({uid:null});case 3:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;C.a.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){var e=this.props,t=e.fishes,a=e.addFish,n=e.loadSampleFishes,s=e.updateFish,i=e.deleteFish,c=r.a.createElement("button",{onClick:this.logout},"Log out");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry, you are not the owner"),c):r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),c,Object.keys(t).map((function(e){return r.a.createElement(D,{key:e,index:e,fish:t[e],updateFish:s,deleteFish:i})})),r.a.createElement(I,{addFish:a}),r.a.createElement("button",{onClick:n},"Load Sample Fishes")):r.a.createElement(L,{authenticate:this.authenticate})}}]),a}(n.Component),P={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},W=(a(58),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){var t=e.props;(0,t.addToOrder)(t.index)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.details,t=e.image,a=e.name,n=e.price,s=e.desc,i="available"===e.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("h3",{className:"fish-name"},a,r.a.createElement("span",{className:"price"},p(n))),r.a.createElement("p",null,s),r.a.createElement("button",{disabled:!i,onClick:this.handleClick},i?"Add To Order":"Sold Out!"))}}]),a}(n.Component)),J=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fishes:{},order:{}},e.addFish=function(t){var a=Object(g.a)({},e.state.fishes);a["fish".concat(Date.now())]=t,e.setState({fishes:a})},e.updateFish=function(t,a){var n=Object(g.a)({},e.state.fishes);n[t]=a,e.setState({fishes:n})},e.deleteFish=function(t){var a=Object(g.a)({},e.state.fishes);a[t]=null,e.setState({fishes:a})},e.loadSampleFishes=function(){e.setState({fishes:P})},e.addToOrder=function(t){var a=Object(g.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.removeFromOrder=function(t){var a=Object(g.a)({},e.state.order);delete a[t],e.setState({order:a})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.storeId,t=localStorage.getItem(e);t&&this.setState({order:JSON.parse(t)}),this.ref=A.syncState("".concat(e,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){var e=this.props.match.params.storeId;localStorage.setItem(e,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){A.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"go-back",onClick:function(){return e.props.history.push("/")}},"Go Back"),r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(b,{tagline:"Fresh Seafood Market"}),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map((function(t){return r.a.createElement(W,{key:t,index:t,addToOrder:e.addToOrder,details:e.state.fishes[t],removeFromOrder:e.removeFromOrder})})))),r.a.createElement(O,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(M,{addFish:this.addFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,storeId:this.props.match.params.storeId,updateFish:this.updateFish,deleteFish:this.deleteFish})))}}]),a}(n.Component),z=function(){return r.a.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},"The page was not found!")},B=function(){return r.a.createElement(c.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:v}),r.a.createElement(o.a,{path:"/store/:storeId",component:J}),r.a.createElement(o.a,{component:z})))};a(61);i.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6ca5f01d.chunk.js.map