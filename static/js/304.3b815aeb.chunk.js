"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{7047:function(e,t,r){r.d(t,{Z:function(){return o}});var n,c=r(501),u=r(6871),a=r(168),i=r(6031).ZP.ul(n||(n=(0,a.Z)(["\n  font-size: 16px;\n  list-style: inside;\n"]))),s=r(184),o=function(e){var t=e.movies,r=(0,u.TH)();return(0,s.jsx)(i,{children:t.length>0&&t.map((function(e){var t=e.id,n=e.title;return(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:r},children:n})},t)}))})}},304:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n,c=r(885),u=r(7047),a=r(2791),i=r(8623),s=r(168),o=r(6031).ZP.h2(n||(n=(0,s.Z)(["\n  font-size: 18px;\n"]))),p=r(184),f=function(){var e=(0,a.useState)([]),t=(0,c.Z)(e,2),r=t[0],n=t[1];return(0,a.useEffect)((function(){(0,i.Tg)().then((function(e){return n(e.data.results)}))}),[]),(0,p.jsxs)("section",{children:[(0,p.jsx)(o,{children:"Trending today"}),(0,p.jsx)(u.Z,{movies:r})]})}},8623:function(e,t,r){r.d(t,{$E:function(){return o},Bt:function(){return m},Ny:function(){return l},Tg:function(){return p},y:function(){return h},z1:function(){return x}});var n=r(5861),c=r(7757),u=r.n(c),a=r(4569),i=r.n(a),s="ed9b8dd4dcf22d9d746c4e21c6321e97",o="https://image.tmdb.org/t/p/w500";function p(){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{api_key:s}},e.prev=1,e.next=4,i().get("/trending/movie/day",t);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function e(t){var r,n,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.movie_id,n={params:{api_key:s}},e.prev=2,e.next=5,i().get("/movie/".concat(r),n);case 5:return c=e.sent,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(u().mark((function e(t){var r,n,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.movie_id,n={params:{api_key:s}},e.prev=2,e.next=5,i().get("/movie/".concat(r,"/credits"),n);case 5:return c=e.sent,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function m(e){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(u().mark((function e(t){var r,n,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.movie_id,n={params:{api_key:s}},e.prev=2,e.next=5,i().get("/movie/".concat(r,"/reviews"),n);case 5:return c=e.sent,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function x(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(u().mark((function e(t){var r,n,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n={params:{api_key:s,query:r}},e.prev=2,e.next=5,i().get("/search/movie",n);case 5:return c=e.sent,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=304.3b815aeb.chunk.js.map