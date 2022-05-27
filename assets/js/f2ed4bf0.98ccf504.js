"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5019],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,y=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6306:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l="Social Login Wallets",c={unversionedId:"private-keys/social-login-wallets",id:"private-keys/social-login-wallets",title:"Social Login Wallets",description:"Sequence Wallet created with social logins are currently secured using three private keys: Session keys, a Guard key and a Torus key. The Session key and Torus key are both generated for the first time when a user creates their Sequence Wallet via social login or email authentication.",source:"@site/docs/private-keys/02-social-login-wallets.mdx",sourceDirName:"private-keys",slug:"/private-keys/social-login-wallets",permalink:"/private-keys/social-login-wallets",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/private-keys/02-social-login-wallets.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Key Management",permalink:"/private-keys/key-management"},next:{title:"Web3 Login Wallets",permalink:"/private-keys/web3-login"}},u={},d=[{value:"Session Keys",id:"session-keys",level:2},{value:"Guard Key",id:"guard-key",level:2},{value:"Torus Key",id:"torus-key",level:2}],p={toc:d};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"social-login-wallets"},"Social Login Wallets"),(0,a.kt)("p",null,"Sequence Wallet created with social logins are currently secured using three private keys: Session keys, a Guard key and a Torus key. The Session key and Torus key are both generated for the first time when a user creates their Sequence Wallet via social login or email authentication.\nAt least two of the three keys are needed to unlock an account. This means that if one of the three keys is lost or compromised, a user can use the two remaining keys to replace the lost/compromised key. For example, if a user lost their device containing their Session Key, they can unlock their Sequence Wallet account by email or social login for the Torus key combined with the Guard key. Once done, another session key is auto-generated and the user is back in their account with all 3 keys accessible again."),(0,a.kt)("h2",{id:"session-keys"},"Session Keys"),(0,a.kt)("p",null,"Session keys are stored in the browser's ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"IndexedDB"),".\nUsers should be prudent in safeguarding their devices from unauthorized access since an attacker with access to their IndexedDB effectively has control of their session key."),(0,a.kt)("h2",{id:"guard-key"},"Guard Key"),(0,a.kt)("p",null,"A Guard key is a key owned by Horizon. This key allows Horizon to help users that lost their Session key and can require additional information from the user in case of suspicious activity, if the user wants this additional protection. This key would be compromised if a malicious actor took control over Horizon servers hosting the Guard key. "),(0,a.kt)("h2",{id:"torus-key"},"Torus Key"),(0,a.kt)("p",null,"A Torus key is a key generated by the ",(0,a.kt)("a",{parentName:"p",href:"https://tor.us/"},"Torus network"),", and is generated using a user\u2019s email or social login credentials such as Google or AppleID. Torus uses threshold cryptography to ensure that only the user can access their private key, making these keys non-custodial. A Torus key would be compromised if a malicious actor had control over the social account or email a user used to generate their Torus key. All Torus keys could be compromised if the Torus network itself was compromised."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"DEFAULTS + CUSTOMIZATION")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"While this is the default setup for new Sequence Wallets, we intend to add the ability for users to add, remove and replace the keys controlling their wallet such that users can choose their preference in terms of security and user experience tradeoff. Even the Guard key will be able to be removed. Security tips and recommendations will be added to ensure users are well informed of the risks and how to protect themselves against them."))))}h.isMDXComponent=!0}}]);