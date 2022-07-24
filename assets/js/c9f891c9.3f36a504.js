"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[7910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=l.createContext({}),c=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=c(e.components);return l.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?l.createElement(v,r(r({ref:t},i),{},{components:n})):l.createElement(v,r({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var l=n(83117),o=(n(67294),n(3905));const a={},r="Modal",s={unversionedId:"api/classes/Modal",id:"api/classes/Modal",title:"Modal",description:"Implements CloseableComponent",source:"@site/docs/api/classes/Modal.md",sourceDirName:"api/classes",slug:"/api/classes/Modal",permalink:"/obsidian-plugin-docs/api/classes/Modal",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/Modal.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MetadataCache",permalink:"/obsidian-plugin-docs/api/classes/MetadataCache"},next:{title:"MomentFormatComponent",permalink:"/obsidian-plugin-docs/api/classes/MomentFormatComponent"}},p={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"app",id:"app",level:3},{value:"scope",id:"scope",level:3},{value:"containerEl",id:"containerel",level:3},{value:"modalEl",id:"modalel",level:3},{value:"titleEl",id:"titleel",level:3},{value:"contentEl",id:"contentel",level:3},{value:"shouldRestoreSelection",id:"shouldrestoreselection",level:3},{value:"Methods",id:"methods",level:2},{value:"open",id:"open",level:3},{value:"close",id:"close",level:3},{value:"onOpen",id:"onopen",level:3},{value:"onClose",id:"onclose",level:3}],i={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modal"},"Modal"),(0,o.kt)("p",null,"Implements ",(0,o.kt)("inlineCode",{parentName:"p"},"CloseableComponent")),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(app: App);\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"app"},"app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"app: App\n")),(0,o.kt)("h3",{id:"scope"},"scope"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"scope: Scope\n")),(0,o.kt)("h3",{id:"containerel"},"containerEl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"containerEl: HTMLElement\n")),(0,o.kt)("h3",{id:"modalel"},"modalEl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"modalEl: HTMLElement\n")),(0,o.kt)("h3",{id:"titleel"},"titleEl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"titleEl: HTMLElement\n")),(0,o.kt)("h3",{id:"contentel"},"contentEl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"contentEl: HTMLElement\n")),(0,o.kt)("h3",{id:"shouldrestoreselection"},"shouldRestoreSelection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"shouldRestoreSelection: boolean\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"open"},"open"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"open(): void;\n")),(0,o.kt)("h3",{id:"close"},"close"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"close(): void;\n")),(0,o.kt)("h3",{id:"onopen"},"onOpen"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"onOpen(): void;\n")),(0,o.kt)("h3",{id:"onclose"},"onClose"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"onClose(): void;\n")))}d.isMDXComponent=!0}}]);