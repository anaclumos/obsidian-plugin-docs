"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[5374],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),v=o,m=d["".concat(l,".").concat(v)]||d[v]||u[v]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(83117),o=(r(67294),r(3905));const a={},s="HoverPopover",i={unversionedId:"api/classes/HoverPopover",id:"api/classes/HoverPopover",title:"HoverPopover",description:"Extends Component",source:"@site/docs/api/classes/HoverPopover.md",sourceDirName:"api/classes",slug:"/api/classes/HoverPopover",permalink:"/obsidian-plugin-docs/api/classes/HoverPopover",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/HoverPopover.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"FuzzySuggestModal",permalink:"/obsidian-plugin-docs/api/classes/FuzzySuggestModal"},next:{title:"ItemView",permalink:"/obsidian-plugin-docs/api/classes/ItemView"}},l={},p=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"hoverEl",id:"hoverel",level:3},{value:"state",id:"state",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hoverpopover"},"HoverPopover"),(0,o.kt)("p",null,"Extends ",(0,o.kt)("inlineCode",{parentName:"p"},"Component")),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(parent: HoverParent, targetEl: HTMLElement, waitTime: number);\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"hoverel"},"hoverEl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"hoverEl: HTMLElement\n")),(0,o.kt)("h3",{id:"state"},"state"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"state: PopoverState\n")))}u.isMDXComponent=!0}}]);