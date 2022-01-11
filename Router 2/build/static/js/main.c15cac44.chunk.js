(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"MainNavigation_header__2QhTp",logo:"MainNavigation_logo__1ynGu",nav:"MainNavigation_nav__3EcAI",active:"MainNavigation_active__2IFAm"}},14:function(e,t,n){"use strict";var r=n(26),c=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:c.a.spinner})}},18:function(e,t,n){e.exports={list:"QuoteList_list__14NiW",sorting:"QuoteList_sorting__3dneo"}},19:function(e,t,n){"use strict";var r=n(11),c=n(9),a=n(21),s=n(4),o=n.n(s),u=n(1);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useReducer)(i,{status:t?"pending":null,data:null,error:null}),s=Object(a.a)(n,2),l=s[0],d=s[1],j=Object(u.useCallback)(function(){var t=Object(c.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,d({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:j},l)}},20:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return f}));var r=n(11),c=n(9),a=n(4),s=n.n(a),o="https://react-project-eb3a6-default-rtdb.firebaseio.com/";function u(){return i.apply(this,arguments)}function i(){return(i=Object(c.a)(s.a.mark((function e(){var t,n,c,a,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(a in c=[],n)u=Object(r.a)({id:a},n[a]),c.push(u);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(s.a.mark((function e(t){var n,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return a=Object(r.a)({id:t},c),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(s.a.mark((function e(t){var n,c,a,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(u in a=[],c)i=Object(r.a)({id:u},c[u]),a.push(i);return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},23:function(e,t,n){e.exports={item:"QuoteItem_item__2_tyV"}},26:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__3sPab"}},27:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__1qQHO"}},28:function(e,t,n){e.exports={main:"Layout_main__1TlGd"}},33:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(22),c=n.n(r),a=n(8),s=(n(33),n(2)),o=n(1),u=n.n(o),i=n(19),l=n(20),d=n(23),j=n.n(d),p=n(0),h=function(e){return Object(p.jsxs)("li",{className:j.a.item,children:[Object(p.jsxs)("figure",{children:[Object(p.jsx)("blockquote",{children:Object(p.jsx)("p",{children:e.text})}),Object(p.jsx)("figcaption",{children:e.author})]}),Object(p.jsx)(a.c,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},b=n(18),f=n.n(b),x=function(e){var t,n,r=Object(s.h)(),c=Object(s.i)(),a="asc"===new URLSearchParams(c.search).get("sort"),u=(t=e.quotes,n=a,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(p.jsxs)(o.Fragment,{children:[Object(p.jsx)("div",{className:f.a.sorting,children:Object(p.jsxs)("button",{onClick:function(){r.push({path:c.pathname,search:"?sort=".concat(a?"desc":"asc")})},children:["Sort ",a?"Descending":"Ascending"]})}),Object(p.jsx)("ul",{className:f.a.list,children:u.map((function(e){return Object(p.jsx)(h,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},O=n(14),m=n(27),v=n.n(m),g=function(){return Object(p.jsxs)("div",{className:v.a.noquotes,children:[Object(p.jsx)("p",{children:"No quotes found!"}),Object(p.jsx)(a.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},w=function(){var e=Object(i.a)(l.d,!0),t=e.sendRequest,n=e.status,r=e.data,c=e.error;return Object(o.useEffect)((function(){t()}),[t]),"pending"===n?Object(p.jsx)("div",{className:"centered",children:Object(p.jsx)(O.a,{})}):"error"===n?Object(p.jsx)("p",{className:"centered focused",children:c}):"completed"!==n||r&&0!==r.length?Object(p.jsx)(x,{quotes:r}):Object(p.jsx)(g,{})},_=n(28),y=n.n(_),N=n(12),q=n.n(N),k=function(){return Object(p.jsxs)("header",{className:q.a.header,children:[Object(p.jsx)("div",{className:q.a.logo,children:"Great Quotes"}),Object(p.jsx)("nav",{className:q.a.nav,children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(a.c,{to:"/quotes",activeClassName:q.a.active,children:"All Quotes"})}),Object(p.jsx)("li",{children:Object(p.jsx)(a.c,{to:"/new-quote",activeClassName:q.a.active,children:"Add a Quote"})})]})})]})},S=function(e){return Object(p.jsxs)(o.Fragment,{children:[Object(p.jsx)(k,{}),Object(p.jsx)("main",{className:y.a.main,children:e.children})]})},C=u.a.lazy((function(){return n.e(4).then(n.bind(null,54))})),E=u.a.lazy((function(){return n.e(3).then(n.bind(null,53))})),Q=u.a.lazy((function(){return n.e(5).then(n.bind(null,52))}));var R=function(){return Object(p.jsx)(S,{children:Object(p.jsx)(o.Suspense,{fallback:Object(p.jsx)("div",{className:"centered",children:Object(p.jsx)(O.a,{})}),children:Object(p.jsxs)(s.e,{children:[Object(p.jsx)(s.c,{path:"/",exact:!0,children:Object(p.jsx)(s.b,{to:"/quotes"})}),Object(p.jsx)(s.c,{path:"/quotes",exact:!0,children:Object(p.jsx)(w,{})}),Object(p.jsx)(s.c,{path:"/quotes/:quoteId",children:Object(p.jsx)(E,{})}),Object(p.jsx)(s.c,{path:"/new-quote",children:Object(p.jsx)(C,{})}),Object(p.jsx)(s.c,{path:"*",children:Object(p.jsx)(Q,{})})]})})})};c.a.render(Object(p.jsx)(a.a,{children:Object(p.jsx)(R,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c15cac44.chunk.js.map