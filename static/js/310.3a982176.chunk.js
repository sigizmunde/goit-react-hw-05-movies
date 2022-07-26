"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[310],{7047:function(e,t,r){r.d(t,{Z:function(){return s}});var n,u=r(501),a=r(6871),c=r(168),o=r(6031).ZP.ul(n||(n=(0,c.Z)(["\n  font-size: 16px;\n  list-style: inside;\n"]))),i=r(184),s=function(e){var t=e.movies,r=(0,a.TH)();return(0,i.jsx)(o,{children:t.length>0&&t.map((function(e){var t=e.id,n=e.title;return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:r},children:n})},t)}))})}},5310:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n,u=r(885),a=r(7047),c=r(2791),o=r(501),i=r(8623),s=r(168),p=r(6031).ZP.form(n||(n=(0,s.Z)(["\n  margin-top: 24px;\n  margin-bottom: 24px;\n"]))),f=r(184),l=function(){var e=(0,c.useState)([]),t=(0,u.Z)(e,2),r=t[0],n=t[1],s=(0,o.lr)(),l=(0,u.Z)(s,2),v=l[0],h=l[1];return(0,c.useEffect)((function(){var e=v.get("query");console.log(e),e&&(0,i.z1)({query:e}).then((function(e){console.log(e),n(e.data.results)}))}),[v]),(0,f.jsxs)("section",{children:[(0,f.jsxs)(p,{onSubmit:function(e){e.preventDefault();var t=e.target.elements.query.value.trim().toLowerCase();h({query:t})},children:[(0,f.jsx)("input",{type:"text",name:"query",autoComplete:"off",required:!0}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),r.length>0&&(0,f.jsx)(a.Z,{movies:r})]})}},8623:function(e,t,r){r.d(t,{$E:function(){return s},Bt:function(){return d},Ny:function(){return l},Tg:function(){return p},y:function(){return h},z1:function(){return x}});var n=r(5861),u=r(7757),a=r.n(u),c=r(4569),o=r.n(c),i="ed9b8dd4dcf22d9d746c4e21c6321e97",s="https://image.tmdb.org/t/p/w500";function p(){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{api_key:i}},e.prev=1,e.next=4,o().get("/trending/movie/day",t);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(a().mark((function e(t){var r,n,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.movie_id,n={params:{api_key:i}},e.prev=2,e.next=5,o().get("/movie/".concat(r),n);case 5:return u=e.sent,e.abrupt("return",u);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(a().mark((function e(t){var r,n,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.movie_id,n={params:{api_key:i}},e.prev=2,e.next=5,o().get("/movie/".concat(r,"/credits"),n);case 5:return u=e.sent,e.abrupt("return",u);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function d(e){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(a().mark((function e(t){var r,n,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.movie_id,n={params:{api_key:i}},e.prev=2,e.next=5,o().get("/movie/".concat(r,"/reviews"),n);case 5:return u=e.sent,e.abrupt("return",u);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(a().mark((function e(t){var r,n,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n={params:{api_key:i,query:r}},e.prev=2,e.next=5,o().get("/search/movie",n);case 5:return u=e.sent,e.abrupt("return",u);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}o().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=310.3a982176.chunk.js.map