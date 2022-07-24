"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[9102],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,b=c["".concat(l,".").concat(m)]||c[m]||p[m]||s;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(83117),r=(n(67294),n(3905));const s={sidebar_position:45},i="Status bar",o={unversionedId:"guides/status-bar",id:"guides/status-bar",title:"Status bar",description:"To create a new block in the status bar, call the addStatusBarItem() in the onload() method. The addStatusBarItem() method returns an HTML element that you can add your own elements to.",source:"@site/docs/guides/status-bar.md",sourceDirName:"guides",slug:"/guides/status-bar",permalink:"/obsidian-plugin-docs/guides/status-bar",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/guides/status-bar.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45},sidebar:"docs",previous:{title:"Commands",permalink:"/obsidian-plugin-docs/guides/commands"},next:{title:"Settings",permalink:"/obsidian-plugin-docs/guides/settings"}},l={},u=[],d={toc:u};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"status-bar"},"Status bar"),(0,r.kt)("p",null,"To create a new block in the status bar, call the ",(0,r.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Plugin_2#addstatusbaritem"},(0,r.kt)("inlineCode",{parentName:"a"},"addStatusBarItem()"))," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"onload()")," method. The ",(0,r.kt)("inlineCode",{parentName:"p"},"addStatusBarItem()")," method returns an ",(0,r.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/html-elements"},"HTML element")," that you can add your own elements to."),(0,r.kt)("admonition",{title:"Obsidian mobile",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Custom status bar items ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/686053708261228577/707816848615407697/832321402106544179"},"is ",(0,r.kt)("strong",{parentName:"a"},"not")," supported")," on Obsidian mobile apps.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'},'import { Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    const item = this.addStatusBarItem();\n    item.createEl("span", { text: "Hello from the status bar \ud83d\udc4b" });\n  }\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more information on how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createEl()")," method, refer to ",(0,r.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/html-elements"},"HTML elements"),".")),(0,r.kt)("p",null,"You can add multiple status bar items by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"addStatusBarItem()")," multiple times. Since Obsidian adds a gap between them, you need to create multiple HTML element on the same status bar item if you need more control of spacing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'},'import { Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    const fruits = this.addStatusBarItem();\n    fruits.createEl("span", { text: "\ud83c\udf4e" });\n    fruits.createEl("span", { text: "\ud83c\udf4c" });\n\n    const veggies = this.addStatusBarItem();\n    veggies.createEl("span", { text: "\ud83e\udd66" });\n    veggies.createEl("span", { text: "\ud83e\udd6c" });\n  }\n}\n')),(0,r.kt)("p",null,"The example above results in the following status bar:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Status bar",src:n(11136).Z,width:"1070",height:"46"})))}p.isMDXComponent=!0},11136:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/status-bar-44ced26c36dee297548dbffc8f280616.png"}}]);