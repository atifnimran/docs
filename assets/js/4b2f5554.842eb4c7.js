"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[320],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),p=a,g=u["".concat(i,".").concat(p)]||u[p]||f[p]||s;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const s={},o="Sending ERC-1155 (Collectible) Tokens",c={unversionedId:"wallet/guides/send-erc1155",id:"wallet/guides/send-erc1155",title:"Sending ERC-1155 (Collectible) Tokens",description:"Sending an ERC-1155 collectible is similar to sending an ERC-20 token.",source:"@site/docs/03-wallet/04-guides/10-send-erc1155.mdx",sourceDirName:"03-wallet/04-guides",slug:"/wallet/guides/send-erc1155",permalink:"/wallet/guides/send-erc1155",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/04-guides/10-send-erc1155.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"sidebar",previous:{title:"Sending ERC-721 (NFT) Tokens",permalink:"/wallet/guides/send-erc721"},next:{title:"Sending a Batch of Transactions",permalink:"/wallet/guides/send-batch-transactions"}},i={},l=[],d={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sending-erc-1155-collectible-tokens"},"Sending ERC-1155 (Collectible) Tokens"),(0,a.kt)("p",null,"Sending an ERC-1155 collectible is similar to sending an ERC-20 token.\nThe only notable difference is in the contract standard itself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const erc1155Interface = new ethers.utils.Interface([\n  'function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data)'\n])\n\n// Encode the transfer of the collectible to recipient\nconst address = await wallet.getAddress()\nconst data = erc1155Interface.encodeFunctionData(\n  'safeTransferFrom', [address, recipientAddress, tokenId, amount, '0x']\n)\n\nconst transaction = {\n  to: erc1155TokenAddress,\n  data\n}\n\nconst signer = wallet.getSigner()\nconst txnResponse = await signer.sendTransaction(transaction)\nconsole.log(txnResponse)\n\n// wait for the transaction to be mined\nawait txnResponse.wait()\n")),(0,a.kt)("p",null,"With batching functionality, you can send multiple token transfers in a single native transaction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const erc1155Interface = new ethers.utils.Interface([\n  'function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data)'\n])\n\n// Encode two different ERC-1155 token transfers\nconst data1 = erc1155Interface.encodeFunctionData(\n  'safeTransferFrom', [address, recipient1Address, token1Id, amount1, '0x']\n)\nconst data2 = erc1155Interface.encodeFunctionData(\n  'safeTransferFrom', [address, recipient2Address, token2Id, amount2, '0x']\n)\n\nconst transaction1 = {\n  to: erc1155ContractAddress,\n  data: data1\n}\nconst transaction2 = {\n  to: erc1155ContractAddress,\n  data: data2\n}\n\n// Send a multiple transactions as a single bundle which is executed as one transaction on chain.\nconst signer = wallet.getSigner()\nconst txnResponse = await signer.sendTransactionBatch([transaction1, transaction2])\nconsole.log(txnResponse)\n\n// Wait for the batched transaction to be mined\nawait txnResponse.wait()\n")))}u.isMDXComponent=!0}}]);