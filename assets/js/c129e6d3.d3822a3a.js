"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={title:"File Structure",sidebar_position:2},a="File Structure",s={unversionedId:"misc/writing-docs/file-structure",id:"misc/writing-docs/file-structure",title:"File Structure",description:"To Create a New File for the documentation name it file-name.mdx",source:"@site/docs/misc/writing-docs/02-file-structure.mdx",sourceDirName:"misc/writing-docs",slug:"/misc/writing-docs/file-structure",permalink:"/misc/writing-docs/file-structure",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/misc/writing-docs/02-file-structure.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"File Structure",sidebar_position:2},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/misc/writing-docs/introduction"},next:{title:"MDX Syntax Features",permalink:"/misc/writing-docs/markdown-features"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-structure"},"File Structure"),(0,i.kt)("p",null,"To Create a New File for the documentation name it ",(0,i.kt)("inlineCode",{parentName:"p"},"file-name.mdx")),(0,i.kt)("p",null,"On the top of the file we can add a section to define the sidebar_position, title,\ntags and slug of the file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"---\nsidebar_position: <int> \ntitle: <string>\ntags: \n    - <string>\n    - <string>\nslug: /<string> (optional)\n---\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tags")," help in seo as they are the meta data of that page, and help search engines understand what the page is for."),(0,i.kt)("p",null,"example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"---\nsidebar_position: 1\ntitle: Introduction\ntags:\n    - introduction\n    - Basics\n    - index\n    - home\n--- \n")),(0,i.kt)("p",null,"When Creating a directory for a sub-category we need to add a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"_category_.json"),"\nWith the contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "label": <string>,\n    "position": <int>\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"label")," is the title of the section ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," is the position of the section in the sidebar")))}p.isMDXComponent=!0}}]);