"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[6972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=l,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||a;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(83117),l=(n(67294),n(3905));const a={},r="ToggleComponent",s={unversionedId:"api/classes/ToggleComponent",id:"api/classes/ToggleComponent",title:"ToggleComponent",description:"Extends ValueComponent",source:"@site/docs/api/classes/ToggleComponent.md",sourceDirName:"api/classes",slug:"/api/classes/ToggleComponent",permalink:"/obsidian-plugin-docs/api/classes/ToggleComponent",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/ToggleComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"TextFileView",permalink:"/obsidian-plugin-docs/api/classes/TextFileView"},next:{title:"ValueComponent",permalink:"/obsidian-plugin-docs/api/classes/ValueComponent"}},i={},p=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"toggleEl",id:"toggleel",level:3},{value:"Methods",id:"methods",level:2},{value:"setDisabled",id:"setdisabled",level:3},{value:"getValue",id:"getvalue",level:3},{value:"setValue",id:"setvalue",level:3},{value:"setTooltip",id:"settooltip",level:3},{value:"onClick",id:"onclick",level:3},{value:"onChange",id:"onchange",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"togglecomponent"},"ToggleComponent"),(0,l.kt)("p",null,"Extends ",(0,l.kt)("inlineCode",{parentName:"p"},"ValueComponent<boolean>")),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(containerEl: HTMLElement);\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"toggleel"},"toggleEl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"toggleEl: HTMLElement\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"setdisabled"},"setDisabled"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"setDisabled(disabled: boolean): this;\n")),(0,l.kt)("h3",{id:"getvalue"},"getValue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getValue(): boolean;\n")),(0,l.kt)("h3",{id:"setvalue"},"setValue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"setValue(on: boolean): this;\n")),(0,l.kt)("h3",{id:"settooltip"},"setTooltip"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"setTooltip(tooltip: string): this;\n")),(0,l.kt)("h3",{id:"onclick"},"onClick"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"onClick(): void;\n")),(0,l.kt)("h3",{id:"onchange"},"onChange"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"onChange(callback: (value: boolean) => any): this;\n")))}u.isMDXComponent=!0}}]);