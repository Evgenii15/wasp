(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2150],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8610:function(e,t,n){"use strict";var r=n(7294),a=n(4996);t.Z=function(e){return r.createElement("div",null,r.createElement("p",{align:"center"},r.createElement("figure",null,r.createElement("img",{alt:e.alt,src:(0,a.Z)(e.source)}),r.createElement("figcaption",{class:"image-caption"},e.caption))))}},2908:function(e,t,n){"use strict";var r=n(7294),a=n(6742),o=(n(4996),function(){return r.createElement("span",{className:"in-blog-cta--divider"}," \u2192 ")});t.Z=function(){return r.createElement("p",null,r.createElement(a.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Alpha (try it out)!"),r.createElement(o,null),r.createElement(a.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),r.createElement(o,null),r.createElement(a.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9756),a=n(7294),o=n(3727),i=n(2263),c=n(3919),l=n(412),s=(0,a.createContext)({collectLink:function(){}}),u=n(4996),p=n(8780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var d=function(e){var t,n,d=e.isNavLink,m=e.to,b=e.href,g=e.activeClassName,v=e.isActive,h=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,y=void 0===w||w,k=(0,r.Z)(e,f),O=(0,i.Z)().siteConfig,E=O.trailingSlash,j=O.baseUrl,Z=(0,u.C)().withBaseUrl,C=(0,a.useContext)(s),W=m||b,T=(0,c.Z)(W),P=null==W?void 0:W.replace("pathname://",""),x=void 0!==P?(n=P,y&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0;x&&T&&(x=(0,p.applyTrailingSlash)(x,{trailingSlash:E,baseUrl:j}));var U,S=(0,a.useRef)(!1),L=d?o.OL:o.rU,N=l.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!N&&T&&null!=x&&window.docusaurus.prefetch(x),function(){N&&U&&U.disconnect()}}),[x,N,T]);var D=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,M=!x||!T||D;return x&&T&&!D&&!h&&C.collectLink(x),M?a.createElement("a",Object.assign({href:x},W&&!T&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(L,Object.assign({},k,{onMouseEnter:function(){S.current||null==x||(window.docusaurus.preload(x),S.current=!0)},innerRef:function(e){var t,n;N&&e&&T&&(t=e,n=function(){null!=x&&window.docusaurus.prefetch(x)},(U=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(U.unobserve(t),U.disconnect(),n())}))}))).observe(t))},to:x||""},d&&{isActive:v,activeClassName:g}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],i="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,i)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},5101:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return f},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(6742),c=(n(4996),n(2908),n(589),n(8610),["components"]),l={title:"How we built a Trello clone with Wasp - Waspello!",authors:["matijasos"],tags:["webdev","wasp"]},s=void 0,u={permalink:"/blog/2021/12/02/waspello",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2021-12-02-waspello.md",source:"@site/blog/2021-12-02-waspello.md",title:"How we built a Trello clone with Wasp - Waspello!",description:"Enter Waspello",date:"2021-12-02T00:00:00.000Z",formattedDate:"December 2, 2021",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:9.225,truncated:!0,authors:[{name:"Matija Sosic",title:"Co-founder & CEO @ Wasp",url:"https://github.com/matijasos",imageURL:"https://github.com/matijasos.png",key:"matijasos"}],prevItem:{title:"Meet the team - Shayne Czyzewski, Founding Engineer",permalink:"/blog/2021/12/21/shayne-intro"},nextItem:{title:"Our fundraising learnings - 250+ meetings in 98 days to the oversubscribed round",permalink:"/blog/2021/11/22/fundraising-learnings"}},p={authorsImageUrls:[void 0]},f=[],d={toc:f};function m(e){var t=e.components,l=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enter Waspello",src:n(9375).Z})),(0,o.kt)("p",{align:"center"},(0,o.kt)(i.Z,{to:"https://waspello.netlify.app/",mdxType:"Link"},"Try Waspello here!")," | ",(0,o.kt)(i.Z,{to:"https://github.com/wasp-lang/wasp/blob/main/examples/waspello/main.wasp",mdxType:"Link"},"See the code")),(0,o.kt)("p",null,"We've built a Trello clone using Wasp! Read on to learn how it went and how you can contribute."))}m.isMDXComponent=!0},589:function(e,t,n){"use strict";n.d(t,{ZP:function(){return l}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={toc:[]};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0},9375:function(e,t,n){"use strict";t.Z=n.p+"assets/images/waspello-screenshot-cfb8c8229fb035e7bbac6ca19cafd805.png"}}]);