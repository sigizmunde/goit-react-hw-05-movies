"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{3387:function(r,n,t){t.r(n),t.d(n,{default:function(){return f}});var e,a=t(885),c=t(2791),u=t(6871),i=t(8623),o=t(168),s=t(6031).ZP.ul(e||(e=(0,o.Z)(["\n  & li:not(:last-child) {\n    margin-bottom: 36px;\n  }\n  & img {\n    max-height: 250px;\n  }\n  & h3 {\n    margin-top: 12px;\n    margin-bottom: 8px;\n  }\n  & p {\n    margin-top: 0;\n    margin-bottom: 8px;\n  }\n"]))),p=t(184),f=function(){var r=(0,u.UO)().movieId,n=(0,c.useState)(),t=(0,a.Z)(n,2),e=t[0],o=t[1];return(0,c.useEffect)((function(){r&&(0,i.y)({movie_id:r}).then((function(r){o(r.data)})).catch((function(r){return console.error(r)}))}),[r]),(0,p.jsx)(s,{children:e&&e.cast.map((function(r){var n=r.id,t=r.name,e=r.character,a=r.profile_path;return(0,p.jsxs)("li",{children:[a&&(0,p.jsx)("img",{src:i.$E+a,alt:t}),(0,p.jsx)("h3",{children:t}),(0,p.jsxs)("p",{children:["Character: ",(0,p.jsx)("span",{children:e})]})]},n)}))})}},8623:function(r,n,t){t.d(n,{$E:function(){return s},Bt:function(){return d},Ny:function(){return h},Tg:function(){return p},y:function(){return m},z1:function(){return y}});var e=t(5861),a=t(7757),c=t.n(a),u=t(4569),i=t.n(u),o="ed9b8dd4dcf22d9d746c4e21c6321e97",s="https://image.tmdb.org/t/p/w500";function p(){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(c().mark((function r(){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={params:{api_key:o}},r.prev=1,r.next=4,i().get("/trending/movie/day",n);case 4:return t=r.sent,r.abrupt("return",t);case 8:r.prev=8,r.t0=r.catch(1),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))).apply(this,arguments)}function h(r){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(c().mark((function r(n){var t,e,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.movie_id,e={params:{api_key:o}},r.prev=2,r.next=5,i().get("/movie/".concat(t),e);case 5:return a=r.sent,r.abrupt("return",a);case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})))).apply(this,arguments)}function m(r){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(c().mark((function r(n){var t,e,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.movie_id,e={params:{api_key:o}},r.prev=2,r.next=5,i().get("/movie/".concat(t,"/credits"),e);case 5:return a=r.sent,r.abrupt("return",a);case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})))).apply(this,arguments)}function d(r){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(c().mark((function r(n){var t,e,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.movie_id,e={params:{api_key:o}},r.prev=2,r.next=5,i().get("/movie/".concat(t,"/reviews"),e);case 5:return a=r.sent,r.abrupt("return",a);case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})))).apply(this,arguments)}function y(r){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(c().mark((function r(n){var t,e,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.query,e={params:{api_key:o,query:t}},r.prev=2,r.next=5,i().get("/search/movie",e);case 5:return a=r.sent,r.abrupt("return",a);case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=387.2feb1a73.chunk.js.map