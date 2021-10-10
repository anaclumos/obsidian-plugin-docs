"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[3665],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={},c="MenuItem",l={unversionedId:"api/classes/MenuItem",id:"api/classes/MenuItem",isDocsHomePage:!1,title:"MenuItem",description:"Constructor",source:"@site/docs/api/classes/MenuItem.md",sourceDirName:"api/classes",slug:"/api/classes/MenuItem",permalink:"/obsidian-plugin-docs/api/classes/MenuItem",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/MenuItem.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Menu",permalink:"/obsidian-plugin-docs/api/classes/Menu"},next:{title:"MetadataCache",permalink:"/obsidian-plugin-docs/api/classes/MetadataCache"}},u=[{value:"Constructor",id:"constructor",children:[]},{value:"Methods",id:"methods",children:[{value:"setTitle",id:"settitle",children:[]},{value:"setIcon",id:"seticon",children:[]},{value:"setActive",id:"setactive",children:[]},{value:"setDisabled",id:"setdisabled",children:[]},{value:"setIsLabel",id:"setislabel",children:[]},{value:"onClick",id:"onclick",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"menuitem"},"MenuItem"),(0,i.kt)("h2",{id:"constructor"},"Constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(menu: Menu);\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"settitle"},"setTitle"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"setTitle(title: string | DocumentFragment): this;\n")),(0,i.kt)("h3",{id:"seticon"},"setIcon"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"setIcon(icon: string | null, size?: number): this;\n")),(0,i.kt)("h3",{id:"setactive"},"setActive"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"setActive(active: boolean): this;\n")),(0,i.kt)("h3",{id:"setdisabled"},"setDisabled"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"setDisabled(disabled: boolean): this;\n")),(0,i.kt)("h3",{id:"setislabel"},"setIsLabel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"setIsLabel(isLabel: boolean): this;\n")),(0,i.kt)("h3",{id:"onclick"},"onClick"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"onClick(callback: (evt: MouseEvent | KeyboardEvent) => any): this;\n")))}d.isMDXComponent=!0}}]);