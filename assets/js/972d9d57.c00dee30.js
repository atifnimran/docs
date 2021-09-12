"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[937],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9880:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,slug:"/"},l="Introduction",c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Sequence is an Ethereum wallet built to offer users and developers a seamless experience for Ethereum-compatible networks.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Using Sequence Wallet",permalink:"/getting-started/using_sequence"}},u=[],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Sequence is an Ethereum wallet built to offer users and developers a seamless experience for Ethereum-compatible networks."),(0,o.kt)("p",null,"In more technical terms: Sequence is a combination of technologies built around Ethereum protocols to ultimately offer a user experience to Ethereum networks that is easier to use, more capable and also more secure."),(0,o.kt)("p",null,"Usually, security and usability are opposing forces, which is the great challenge and why Sequence has taken so long to develop."),(0,o.kt)("p",null,"What makes Sequence special and unique is that as opposed to the majority of wallets for Ethereum that have just a single private key that has full control over a wallet (aka an EOA -- Externally Owned Account), a Sequence account (aka wallet) is a Smart Contract that is deployed on the blockchain."),(0,o.kt)("p",null,"People call these ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Smart Accounts"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Contract Account")),", where instead of a single/native private key being the only permissible key to manage an account, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/wallet-contracts"},"a Sequence Wallet smart contract")," is a new type of account primitive that allows you to have multiple keys which control a single account."),(0,o.kt)("p",null,'Now, in practice, if you lose your phone, you can sign in from another device and "log out" that device remotely so if someone finds your phone and extracts that key, they will have just retrieved an invalid/expired key.'),(0,o.kt)("p",null,"Under the hood, the Sequence Wallet contract is a weighted multisig threshold wallet -- similar to something like Gnosis for those familiar, but it's designed with different application/intent and has a bunch of other designs too. Some other cool features of Sequence Wallet, and what the powers of a Smart Contract Wallet enable us:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sequence wallet's can be counterfactually deployed, --which is a fancy way of saying you only deploy it when you need it, but you can start receiving funds right away")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sequence wallet's derive the same address across all Ethereum-compatible networks, which means you can receive funds on a network that you've never accessed, and once you sign in, only you will be able to access those funds")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sequence wallet's support meta-transactions as a standard feature, which makes sending transactions much easier. You may fire and forget, not worry about gas prices, or nonces, you can even batch multiple transactions into a single request, execute transactions in parallel")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Sequence meta-transactions allow a user to pay gas fees in a variety of tokens such as ETH, USDC, DAI and others. For example, for EOA wallets like Metamask and Coinbase, users on the Polygon network must have MATIC tokens in their wallets to send any transactions. But with Sequence Wallet, users don\'t have to have any MATIC tokens at all, instead they "sign" and "relay" their transactions through the Sequence Relayer service which will pay the MATIC gas on the user\'s behalf, and the user\'s relay transaction will automatically substitute the MATIC gas fee for one of ETH, USDC, or DAI (a users choice). This works like this across all networks, so a user only ever needs USDC and can pay for fees across all networks... a single gas token for any network. Keep your ETH, spend your USDC'))))}h.isMDXComponent=!0}}]);