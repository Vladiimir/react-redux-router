(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,n){t.exports=n(50)},39:function(t,e,n){},41:function(t,e,n){},45:function(t,e,n){},47:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(23),o=n.n(c),u=n(51),i=n(14),s=(n(39),n(52)),l=n(53),p=n(6),f=n(7),h=n(15),d=n(10),v=n(12),m="boilerplate/counter/INCREMENT",b="boilerplate/counter/DECREMENT",g={count:0};var y=function(t){return t.count},j=(n(41),function(t){var e=t.count,n=t.increment,r=t.decrement;return a.a.createElement("div",{className:"counter"},a.a.createElement("p",null,e),a.a.createElement("button",{type:"button",onClick:n},"Increase"),a.a.createElement("button",{type:"button",onClick:r},"Decrease"))});j.defaultProps={count:0};var O=j,w=n(5),E=n.n(w),k=n(9),x=n(19),_=n(27),P=n(28),R={error:"Error",warning:"Warning"},M=function(t){function e(t){var n,r=t.type,a=void 0===r?R.error:r,c=t.source,o=void 0===c?"":c,u=t.code,i=void 0===u?"":u,s=t.status,l=void 0===s?"":s,f=t.message,v=void 0===f?"":f;return Object(p.a)(this,e),(n=Object(h.a)(this,Object(d.a)(e).call(this))).type=a,n.source=o,n.code=i,n.status=l,n.message=v,n}return Object(v.a)(e,t),Object(f.a)(e,[{key:"getMessage",value:function(){return this._renderMessage(!0)}},{key:"getPopupMessage",value:function(){return this._renderMessage()}},{key:"_renderMessage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.type,n=this.source,r=this.code,a=this.status,c=this.message,o=t?"".concat(e," "):"",u=c?"\n ".concat(c):"",i=o||n?":":"";return"".concat(o).concat(n).concat(i," ").concat(r," ").concat(a," ").concat(u)}}]),e}(Object(P.a)(Error)),C=n(18),D=window.location.pathname.match(/\/[\w-]+/)||[],N=Object(C.a)(D,1)[0];function S(t){if(Array.isArray(t)){var e=t.map(function(t){return"string"===typeof t?'"'.concat(t,'"'):t});return"[".concat(e,"]")}return encodeURI(t)}function A(){return"https://jsonplaceholder.typicode.com"+(N||"")}var I={appendQueryParams:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=A(),r=Object.entries(e),a=n+(t.startsWith("/")?t:"/".concat(t));if(r.length){a+="?";for(var c=0;c<r.length;c++){var o=r[c],u=Object(C.a)(o,2),i=u[0],s=u[1];s&&(a+="".concat(i,"=").concat(S(s),"&"))}a=a.slice(0,-1)}return a},BASE_URL:A()},W=new(function(){function t(){Object(p.a)(this,t)}return Object(f.a)(t,[{key:"getParallel",value:function(){var t=Object(k.a)(E.a.mark(function t(){var e,n,r=this,a=arguments;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:[],n=e.map(function(t){return r.get.apply(r,Object(_.a)(t))}),t.abrupt("return",Promise.all(n));case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(k.a)(E.a.mark(function t(e){var n,r,a=arguments;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},r=I.appendQueryParams(e,n),t.abrupt("return",window.fetch(r).then(this._parseResponse).then(function(t){return{data:t}}).catch(function(t){return{error:t}}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"_parseResponse",value:function(t){if(t.ok){var e=t.clone();return t.json().catch(function(t){return t instanceof SyntaxError?e.text():Promise.reject(t)})}return t.text().then(function(e){var n=new M({code:t.status,message:e,status:t.statusText});return Promise.reject(n)})}}]),t}()),B=new(function(){function t(){Object(p.a)(this,t),this._init()}return Object(f.a)(t,[{key:"load",value:function(){var t=Object(k.a)(E.a.mark(function t(e){var n,r,a;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._init(),t.next=3,W.get("/users",e);case 3:if(n=t.sent,r=n.data,a=n.error){t.next=10;break}this._data=r,t.next=11;break;case 10:return t.abrupt("return",a);case 11:return t.abrupt("return",this.getData());case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getData",value:function(){return this._data}},{key:"_init",value:function(){this._data=[]}}]),t}()),L="boilerplate/users/LOAD_SUCCESS",T="boilerplate/users/LOAD_ERROR",U={users:[],error:null};function J(t){return{type:L,data:t}}var Q=function(t){return t.users.users},F=(n(45),function(t){function e(){return Object(p.a)(this,e),Object(h.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){(0,this.props.load)()}},{key:"render",value:function(){var t=this.props.users;return a.a.createElement("div",{className:"App"},a.a.createElement(O,this.props),t.map(function(t){return a.a.createElement("p",{key:t.id},t.name)}))}}]),e}(a.a.Component)),$=Object(i.b)(function(t){return{count:y(t),users:Q(t)}},function(t){return{increment:function(){return t({type:m})},decrement:function(){return t({type:b})},load:function(){return t(function(){var t=Object(k.a)(E.a.mark(function t(e){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.load();case 2:n=t.sent,e(n instanceof M?{type:T,data:n}:J(n));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}}})(F),q=(n(47),function(){return a.a.createElement("div",{className:"not-found"},"Page Not Found")}),z=function(){return a.a.createElement(s.a,null,a.a.createElement(l.a,{exact:!0,path:"/",component:$}),a.a.createElement(l.a,{path:"*",component:q}))},G=n(8),H=n(26),K=Object(G.c)({counter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type){case m:return{count:t.count+1};case b:return{count:t.count-1};default:return t}},users:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case L:return Object(x.a)({},t,{users:e.data,error:null});case T:return Object(x.a)({},t,{users:[],error:e.data});default:return t}}}),V={instance:null,getStore:function(){return this.instance||(this.instance=Object(G.d)(K,Object(G.a)(H.a))),this.instance}}.getStore();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(u.a,null,a.a.createElement(i.a,{store:V},a.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.39d9c161.chunk.js.map