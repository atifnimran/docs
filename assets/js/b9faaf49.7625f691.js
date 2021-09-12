"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[909],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),p=i,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6742:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3366),i=n(7294),o=n(3727),a=n(2263),c=n(3919),u=n(412),s=(0,i.createContext)({collectLink:function(){}}),l=n(4996),d=n(8780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,m=e.to,v=e.href,b=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,g=void 0===w||w,O=(0,r.Z)(e,f),k=(0,a.Z)().siteConfig,j=k.trailingSlash,C=k.baseUrl,E=(0,l.C)().withBaseUrl,x=(0,i.useContext)(s),P=m||v,S=(0,c.Z)(P),N=null==P?void 0:P.replace("pathname://",""),T=void 0!==N?(n=N,g&&function(e){return e.startsWith("/")}(n)?E(n):n):void 0;T&&S&&(T=(0,d.applyTrailingSlash)(T,{trailingSlash:j,baseUrl:C}));var _,Z=(0,i.useRef)(!1),D=p?o.OL:o.rU,M=u.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!M&&S&&null!=T&&window.docusaurus.prefetch(T),function(){M&&_&&_.disconnect()}}),[T,M,S]);var U=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,B=!T||!S||U;return T&&S&&!U&&!y&&x.collectLink(T),B?i.createElement("a",Object.assign({href:T},P&&!S&&{target:"_blank",rel:"noopener noreferrer"},O)):i.createElement(D,Object.assign({},O,{onMouseEnter:function(){Z.current||null==T||(window.docusaurus.preload(T),Z.current=!0)},innerRef:function(e){var t,n;M&&e&&S&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},(_=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t),_.disconnect(),n())}))}))).observe(t))},to:T||""},p&&{isActive:h,activeClassName:b}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,o=e.split(/[#?]/)[0],a="/"===o||o===r?o:(i=o,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(o,a)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6559:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),i=n(6742);var o=function(e){var t=e.cards;return r.createElement("div",{className:"container",style:{padding:0}},r.createElement("div",{className:"row is-multiline"},t.map((function(e,t){return r.createElement("div",{className:"col col--4",key:t},r.createElement(i.Z,{className:"card",to:e.route,style:{height:"100%"}},r.createElement("div",{className:"card__body"},r.createElement("h4",null,e.title),r.createElement("p",null,e.description))))}))))}},5752:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return f},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=n(6559),c=["components"],u={sidebar_position:1,title:"Introduction"},s=void 0,l={unversionedId:"internal-documentation/introduction",id:"internal-documentation/introduction",isDocsHomePage:!1,title:"Introduction",description:"const frameworkComponents = [",source:"@site/docs/internal-documentation/introduction.mdx",sourceDirName:"internal-documentation",slug:"/internal-documentation/introduction",permalink:"/internal-documentation/introduction",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/internal-documentation/introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Specifications",permalink:"/specifications"},next:{title:"File Structure",permalink:"/internal-documentation/file-structure"}},d=[{title:"File Structure",description:"A summary of the Basic File Structure and how Docusaurus works.",route:"/internal-documentation/file-structure"},{title:"MDX Syntax Features",description:"A summary of the basic syntax of Markdown + MDX features. (includes creating tabs, tables, hidden content) ",route:"/internal-documentation/introduction"}],f=[{value:"Basics",id:"basics",children:[]},{value:"Components of docs",id:"components-of-docs",children:[]}],p={toc:f};function m(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is documentaiton is for reference on how to write documentation for this website."),(0,o.kt)("h2",{id:"basics"},"Basics"),(0,o.kt)("p",null,"The /docs folder contains ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," files, these are markdown + jsx files... which means you can simply use\nmarkdown + also add jsx to it..."),(0,o.kt)("h2",{id:"components-of-docs"},"Components of docs"),(0,o.kt)("br",null),(0,o.kt)(a.Z,{cards:d,mdxType:"Cards"}))}m.isMDXComponent=!0}}]);