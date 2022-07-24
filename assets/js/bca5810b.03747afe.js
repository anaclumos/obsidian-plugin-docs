"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[5922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const o={sidebar_position:75},l="HTML elements",i={unversionedId:"guides/html-elements",id:"guides/html-elements",title:"HTML elements",description:"Several components in the Obsidian API, such as the settings tab, expose container elements:",source:"@site/docs/guides/html-elements.md",sourceDirName:"guides",slug:"/guides/html-elements",permalink:"/obsidian-plugin-docs/guides/html-elements",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/guides/html-elements.md",tags:[],version:"current",sidebarPosition:75,frontMatter:{sidebar_position:75},sidebar:"docs",previous:{title:"Custom views",permalink:"/obsidian-plugin-docs/guides/custom-views"},next:{title:"Editor",permalink:"/obsidian-plugin-docs/guides/editor"}},s={},p=[{value:"Create HTML elements using <code>createEl()</code>",id:"create-html-elements-using-createel",level:2},{value:"Style your elements",id:"style-your-elements",level:2},{value:"Conditional styles",id:"conditional-styles",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"html-elements"},"HTML elements"),(0,a.kt)("p",null,"Several components in the Obsidian API, such as the ",(0,a.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/settings"},"settings tab"),", expose ",(0,a.kt)("em",{parentName:"p"},"container elements"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{12}","{12}":!0},'import { App, PluginSettingTab } from "obsidian";\n\nclass ExampleSettingTab extends PluginSettingTab {\n  plugin: ExamplePlugin;\n\n  constructor(app: App, plugin: ExamplePlugin) {\n    super(app, plugin);\n    this.plugin = plugin;\n  }\n\n  display(): void {\n    let { containerEl } = this;\n\n    // ...\n  }\n}\n')),(0,a.kt)("p",null,"Container elements are ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLElement")," objects that make it possible to create custom interfaces within Obsidian."),(0,a.kt)("h2",{id:"create-html-elements-using-createel"},"Create HTML elements using ",(0,a.kt)("inlineCode",{parentName:"h2"},"createEl()")),(0,a.kt)("p",null,"Every ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLElement"),", including the container element, exposes a ",(0,a.kt)("inlineCode",{parentName:"p"},"createEl()")," method that creates an ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLElement")," under the original element."),(0,a.kt)("p",null,"For example, here's how you can add an ",(0,a.kt)("inlineCode",{parentName:"p"},"<h1>")," heading element inside the container element:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'containerEl.createEl("h1", { text: "Heading 1" });\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createEl()")," returns a reference to the new element:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const book = containerEl.createEl("div");\nbook.createEl("div", { text: "How to Take Smart Notes" });\nbook.createEl("small", { text: "S\xf6nke Ahrens" });\n')),(0,a.kt)("h2",{id:"style-your-elements"},"Style your elements"),(0,a.kt)("p",null,"You can add custom CSS styles to your plugin by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")," file in the plugin root directory. To add some styles for the previous book example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles.css"',title:'"styles.css"'},".book {\n  border: 1px solid var(--background-modifier-border);\n  padding: 10px;\n}\n\n.book__title {\n  font-weight: 600;\n}\n\n.book__author {\n  color: var(--text-muted);\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"--background-modifier-border")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--text-muted")," are ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables")," that are defined and used by Obsidian itself. If you use these variables for your styles, your plugin will look great even if the user has a different theme! \ud83c\udf08")),(0,a.kt)("p",null,"To make the HTML elements use the styles, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"cls")," property for the HTML element:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const book = containerEl.createEl("div", { cls: "book" });\nbook.createEl("div", { text: "How to Take Smart Notes", cls: "book__title" });\nbook.createEl("small", { text: "S\xf6nke Ahrens", cls: "book__author" });\n')),(0,a.kt)("p",null,"Now it looks much better! \ud83c\udf89"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Styled book item",src:n(73286).Z,width:"864",height:"272"})),(0,a.kt)("h3",{id:"conditional-styles"},"Conditional styles"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"toggleClass")," method if you want to change the style of an element based on the user's settings or other values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'element.toggleClass("danger", status === "error");\n')))}u.isMDXComponent=!0},73286:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/styles-ff62ac028b2089408fab448d00e3b431.png"}}]);