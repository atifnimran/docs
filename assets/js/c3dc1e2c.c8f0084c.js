"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[816],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,d=p["".concat(c,".").concat(f)]||p[f]||g[f]||s;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6524:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=t(3117),i=t(102),s=(t(7294),t(3905)),a=["components"],o={sidebar_position:4},c="Signing & Verifying Messages",u={unversionedId:"build-with-sequence/sign_message",id:"build-with-sequence/sign_message",title:"Signing & Verifying Messages",description:"Signing Messages",source:"@site/docs/build-with-sequence/4_sign_message.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/sign_message",permalink:"/build-with-sequence/sign_message",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/4_sign_message.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Get Wallet Account Address",permalink:"/build-with-sequence/get_address"},next:{title:"Signing & Verifying Transactions",permalink:"/build-with-sequence/sign_transaction"}},l=[{value:"Signing Messages",id:"signing-messages",children:[],level:2},{value:"Verifying messages",id:"verifying-messages",children:[],level:2}],g={toc:l};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"signing--verifying-messages"},"Signing & Verifying Messages"),(0,s.kt)("h2",{id:"signing-messages"},"Signing Messages"),(0,s.kt)("p",null,"Sequence wallets are able to sign arbitrary messages because they conform to a standard defined by EIP-1271."),(0,s.kt)("p",null,"To request a user's signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const signer = wallet.getSigner()\nconst message = 'Hello World!'\n\nconst signature = await signer.signMessage(message)\nconsole.log(signature)\n")),(0,s.kt)("h2",{id:"verifying-messages"},"Verifying messages"),(0,s.kt)("p",null,"Given a message and signature, you can check if a particular wallet signed that message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"")))}p.isMDXComponent=!0}}]);