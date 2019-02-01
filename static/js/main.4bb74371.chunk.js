(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,n){e.exports=n(80)},69:function(e,t,n){},71:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(36),o=n.n(c),u=n(81),i=n(26),s=n(22),l=n(27),p=n(40),f=n.n(p),h={loadPath:"".concat("/react-redux-router","/locales/{{lng}}/{{ns}}.json")};s.a.use(l.b).use(f.a).init({backend:h,ns:["common"],defaultNS:"common",lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});s.a,n(69);var d=n(82),m=n(83),v=n(14),b=n(15),g=n(28),y=n(20),j=n(24),O="boilerplate/counter/INCREMENT",w="boilerplate/counter/DECREMENT",E={count:0};var k=function(e){return e.counter.count},x=(n(71),function(e){var t=e.count,n=e.increment,r=e.decrement;return a.a.createElement("div",{className:"counter"},a.a.createElement("p",null,t),a.a.createElement("button",{type:"button",onClick:n},"Increase"),a.a.createElement("button",{type:"button",onClick:r},"Decrease"))});x.defaultProps={count:0};var _=x,P=n(12),R=n.n(P),C=n(19),L=n(33),M=n(43),N=n(44),S={error:"Error",warning:"Warning"},D=function(e){function t(e){var n,r=e.type,a=void 0===r?S.error:r,c=e.source,o=void 0===c?"":c,u=e.code,i=void 0===u?"":u,s=e.status,l=void 0===s?"":s,p=e.message,f=void 0===p?"":p;return Object(v.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this))).type=a,n.source=o,n.code=i,n.status=l,n.message=f,n}return Object(j.a)(t,e),Object(b.a)(t,[{key:"getMessage",value:function(){return this._renderMessage(!0)}},{key:"getPopupMessage",value:function(){return this._renderMessage()}},{key:"_renderMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.type,n=this.source,r=this.code,a=this.status,c=this.message,o=e?"".concat(t," "):"",u=c?"\n ".concat(c):"",i=o||n?":":"";return"".concat(o).concat(n).concat(i," ").concat(r," ").concat(a," ").concat(u)}}]),t}(Object(N.a)(Error)),A=n(32),W=window.location.pathname.match(/\/[\w-]+/)||[],I=Object(A.a)(W,1)[0];function B(e){if(Array.isArray(e)){var t=e.map(function(e){return"string"===typeof e?'"'.concat(e,'"'):e});return"[".concat(t,"]")}return encodeURI(e)}function T(){return"https://jsonplaceholder.typicode.com"+(I||"")}var U={appendQueryParams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=T(),r=Object.entries(t),a=n+(e.startsWith("/")?e:"/".concat(e));if(r.length){a+="?";for(var c=0;c<r.length;c++){var o=r[c],u=Object(A.a)(o,2),i=u[0],s=u[1];s&&(a+="".concat(i,"=").concat(B(s),"&"))}a=a.slice(0,-1)}return a},BASE_URL:T()},J=new(function(){function e(){Object(v.a)(this,e)}return Object(b.a)(e,[{key:"getParallel",value:function(){var e=Object(C.a)(R.a.mark(function e(){var t,n,r=this,a=arguments;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:[],n=t.map(function(e){return r.get.apply(r,Object(M.a)(e))}),e.abrupt("return",Promise.all(n));case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(C.a)(R.a.mark(function e(t){var n,r,a=arguments;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},r=U.appendQueryParams(t,n),e.abrupt("return",window.fetch(r).then(this._parseResponse).then(function(e){return{data:e}}).catch(function(e){return{error:e}}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"_parseResponse",value:function(e){if(e.ok){var t=e.clone();return e.json().catch(function(e){return e instanceof SyntaxError?t.text():Promise.reject(e)})}return e.text().then(function(t){var n=new D({code:e.status,message:t,status:e.statusText});return Promise.reject(n)})}}]),e}()),Q=new(function(){function e(){Object(v.a)(this,e),this._init()}return Object(b.a)(e,[{key:"load",value:function(){var e=Object(C.a)(R.a.mark(function e(t){var n,r,a;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._init(),e.next=3,J.get("/users",t);case 3:if(n=e.sent,r=n.data,a=n.error){e.next=10;break}this._data=r,e.next=11;break;case 10:return e.abrupt("return",a);case 11:return e.abrupt("return",this.getData());case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getData",value:function(){return this._data}},{key:"_init",value:function(){this._data=[]}}]),e}()),F="boilerplate/users/LOAD_SUCCESS",V="boilerplate/users/LOAD_ERROR",$={users:[],error:null};function q(e){return{type:F,data:e}}var z=function(e){return e.users.users},G=(n(75),function(e){function t(){return Object(v.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.load;console.log(e)}},{key:"changeLanguage",value:function(e){s.a.changeLanguage(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.users,r=t.increment,c=t.decrement,o=t.count;return a.a.createElement(l.a,{ns:["app"]},function(t,u){return u.ready?a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,t("app:Welcome to React")),t("common:buttons.increment"),a.a.createElement(_,{increment:r,decrement:c,count:o}),n.map(function(e){return a.a.createElement("p",{key:e.id},e.name)}),a.a.createElement("button",{type:"button",onClick:function(){return e.changeLanguage("it")}},"it"),a.a.createElement("button",{type:"button",onClick:function(){return e.changeLanguage("en")}},"en")):a.a.createElement("p",null,"loading")})}}]),t}(a.a.Component)),H=Object(i.b)(function(e){return{count:k(e),users:z(e)}},function(e){return{increment:function(){return e({type:O})},decrement:function(){return e({type:w})},load:function(){return e(function(){var e=Object(C.a)(R.a.mark(function e(t){var n;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.load();case 2:n=e.sent,t(n instanceof D?{type:V,data:n}:q(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}}})(G),K=(n(77),function(){return a.a.createElement("div",{className:"not-found"},"Page Not Found")}),X=function(){return a.a.createElement(d.a,null,a.a.createElement(m.a,{exact:!0,path:"/",component:H}),a.a.createElement(m.a,{path:"/*",component:K}))},Y=n(17),Z=n(42),ee=Object(Y.c)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;switch((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type){case O:return{count:e.count+1};case w:return{count:e.count-1};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case F:return Object(L.a)({},e,{users:t.data,error:null});case V:return Object(L.a)({},e,{users:[],error:t.data});default:return e}}}),te={instance:null,getStore:function(){return this.instance||(this.instance=Object(Y.d)(ee,Object(Y.a)(Z.a))),this.instance}}.getStore();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(u.a,{basename:"/react-redux-router"},a.a.createElement(i.a,{store:te},a.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,2,1]]]);
//# sourceMappingURL=main.4bb74371.chunk.js.map