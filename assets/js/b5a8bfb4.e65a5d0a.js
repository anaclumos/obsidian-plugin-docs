"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[744],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=l,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(v,r(r({ref:t},d),{},{components:a})):n.createElement(v,r({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29924:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(83117),l=(a(67294),a(3905));const i={},r="TextFileView",o={unversionedId:"api/classes/TextFileView",id:"api/classes/TextFileView",title:"TextFileView",description:"Extends EditableFileView",source:"@site/docs/api/classes/TextFileView.md",sourceDirName:"api/classes",slug:"/api/classes/TextFileView",permalink:"/obsidian-plugin-docs/api/classes/TextFileView",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/TextFileView.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"TextComponent",permalink:"/obsidian-plugin-docs/api/classes/TextComponent"},next:{title:"ToggleComponent",permalink:"/obsidian-plugin-docs/api/classes/ToggleComponent"}},s={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"data",id:"data",level:3},{value:"requestSave",id:"requestsave",level:3},{value:"Methods",id:"methods",level:2},{value:"onUnloadFile",id:"onunloadfile",level:3},{value:"onLoadFile",id:"onloadfile",level:3},{value:"save",id:"save",level:3},{value:"getViewData",id:"getviewdata",level:3},{value:"setViewData",id:"setviewdata",level:3},{value:"clear",id:"clear",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"textfileview"},"TextFileView"),(0,l.kt)("p",null,"Extends ",(0,l.kt)("inlineCode",{parentName:"p"},"EditableFileView")),(0,l.kt)("p",null,"This class implements a plaintext-based editable file view, which can be loaded and saved given an editor."),(0,l.kt)("p",null,"Note that by default, this view only saves when it's closing. To implement auto-save, your editor should\ncall ",(0,l.kt)("inlineCode",{parentName:"p"},"this.requestSave()")," when the content is changed."),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(leaf: WorkspaceLeaf);\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"data"},"data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"data: string\n")),(0,l.kt)("p",null,"In memory data"),(0,l.kt)("h3",{id:"requestsave"},"requestSave"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"requestSave: () => void\n")),(0,l.kt)("p",null,"Debounced save in 2 seconds from now"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"onunloadfile"},"onUnloadFile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"onUnloadFile(file: TFile): Promise<void>;\n")),(0,l.kt)("h3",{id:"onloadfile"},"onLoadFile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"onLoadFile(file: TFile): Promise<void>;\n")),(0,l.kt)("h3",{id:"save"},"save"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"save(clear?: boolean): Promise<void>;\n")),(0,l.kt)("h3",{id:"getviewdata"},"getViewData"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"abstract getViewData(): string;\n")),(0,l.kt)("p",null,"Gets the data from the editor. This will be called to save the editor contents to the file."),(0,l.kt)("h3",{id:"setviewdata"},"setViewData"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"abstract setViewData(data: string, clear: boolean): void;\n")),(0,l.kt)("p",null,"Set the data to the editor. This is used to load the file contents."),(0,l.kt)("p",null,"If clear is set, then it means we're opening a completely different file.\nIn that case, you should call clear(), or implement a slightly more efficient\nclearing mechanism given the new data to be set."),(0,l.kt)("h3",{id:"clear"},"clear"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"abstract clear(): void;\n")),(0,l.kt)("p",null,"Clear the editor. This is usually called when we're about to open a completely\ndifferent file, so it's best to clear any editor states like undo-redo history,\nand any caches/indexes associated with the previous file contents."))}p.isMDXComponent=!0}}]);