"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[326],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(b,o(o({ref:n},u),{},{components:t})):r.createElement(b,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2572:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:7},c="Sending a Batch of Transactions",l={unversionedId:"build-with-sequence/send_batch_transactions",id:"build-with-sequence/send_batch_transactions",title:"Sending a Batch of Transactions",description:"Likewise, bundling multiple transactions to be send in a single native transaction is equally as easy:",source:"@site/docs/build-with-sequence/7_send_batch_transactions.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/send_batch_transactions",permalink:"/build-with-sequence/send_batch_transactions",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/7_send_batch_transactions.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Sending a Transaction",permalink:"/build-with-sequence/send_transaction"},next:{title:"Sending an ERC-20 Token",permalink:"/build-with-sequence/send_erc20"}},u=[],d={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sending-a-batch-of-transactions"},"Sending a Batch of Transactions"),(0,i.kt)("p",null,"Likewise, bundling multiple transactions to be send in a single native transaction is equally as easy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const transaction1 = {\n  to: toAddress1,\n  value: 1000000000000000000,\n  data: '0x',\n  gasLimit: 0,\n  delegateCall: false,\n  revertOnError: false\n}\n\nconst transaction2 = {\n  to: toAddress2,\n  value: 1000000000000000000,\n  data: '0x',\n  gasLimit: 0,\n  delegateCall: false,\n  revertOnError: false\n}\n\nconst response = await wallet.sendTransactionBatch([transaction1, transaction2])\nconsole.log(response)\n")))}p.isMDXComponent=!0}}]);