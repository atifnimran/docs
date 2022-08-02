"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8868],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(t),d=i,f=g["".concat(c,".").concat(d)]||g[d]||p[d]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={},o="Signing & Verifying Transactions",s={unversionedId:"build-with-sequence/sign-transaction",id:"build-with-sequence/sign-transaction",title:"Signing & Verifying Transactions",description:"You can ask the wallet to sign either a single transaction or multiple ones:",source:"@site/docs/build-with-sequence/05-sign-transaction.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/sign-transaction",permalink:"/build-with-sequence/sign-transaction",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/05-sign-transaction.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"Signing & Verifying Messages",permalink:"/build-with-sequence/sign-message"},next:{title:"Sending Transactions",permalink:"/build-with-sequence/send-transaction"}},c={},l=[],u={toc:l};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signing--verifying-transactions"},"Signing & Verifying Transactions"),(0,i.kt)("p",null,"You can ask the wallet to sign either a single transaction or multiple ones:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const transaction = {\n  to: recipientAddress,\n  value: '1000000000000000000'\n}\n\nconst signer = wallet.getSigner()\nconst signature = await signer.signTransactions([transaction])\nconsole.log(signature)\n")),(0,i.kt)("p",null,"If you want to override the default network, you can also customize that as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const signature = await signer.signTransactions([transaction], 137 /* Polygon */)\nconsole.log(signature)\n")))}p.isMDXComponent=!0}}]);