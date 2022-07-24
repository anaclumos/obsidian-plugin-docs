"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[1894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(83117),o=(n(67294),n(3905));const r={sidebar_position:1},i="State management",s={unversionedId:"concepts/editor-extensions/state-management",id:"concepts/editor-extensions/state-management",title:"State management",description:"This page aims to give an introduction to state management for editor extensions.",source:"@site/docs/concepts/editor-extensions/state-management.md",sourceDirName:"concepts/editor-extensions",slug:"/concepts/editor-extensions/state-management",permalink:"/obsidian-plugin-docs/concepts/editor-extensions/state-management",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/concepts/editor-extensions/state-management.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Editor extensions",permalink:"/obsidian-plugin-docs/concepts/editor-extensions/"},next:{title:"State fields",permalink:"/obsidian-plugin-docs/concepts/editor-extensions/state-fields"}},l={},p=[{value:"State changes",id:"state-changes",level:2},{value:"Transactions",id:"transactions",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"state-management"},"State management"),(0,o.kt)("p",null,"This page aims to give an introduction to state management for ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/concepts/editor-extensions/"},"editor extensions"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This page aims to distill the official CodeMirror 6 documentation for Obsidian plugin developers. For more detailed information on state management, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://codemirror.net/docs/guide/#state-and-updates"},"State and Updates"),".")),(0,o.kt)("h2",{id:"state-changes"},"State changes"),(0,o.kt)("p",null,"In most applications, you would update state by assigning a new value to a property or variable. As a consequence, the old value is lost forever."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'let note = "";\nnote = "Heading"\nnote = "# Heading"\nnote = "## Heading" // How to undo this?\n')),(0,o.kt)("p",null,"To support features like undoing and redoing changes to a user's workspace, applications like Obsidian instead keep a history of all changes that have been made. To undo a change, you can then go back to a point in time before the change was made."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"State"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Heading")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"# Heading")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"## Heading")))),(0,o.kt)("p",null,"In TypeScript, you'd then end up with something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const changes: ChangeSpec[] = [];\n\nchanges.push({ from: 0, insert: "Heading" });\nchanges.push({ from: 0, insert: "# " });\nchanges.push({ from: 0, insert: "#" });\n')),(0,o.kt)("h2",{id:"transactions"},"Transactions"),(0,o.kt)("p",null,"Imagine a feature where you select some text and press the double quote, ",(0,o.kt)("inlineCode",{parentName:"p"},'"')," to surround the selection with quotes on both sides. One way to implement the feature would be to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Insert ",(0,o.kt)("inlineCode",{parentName:"li"},'"')," at the start of the selection."),(0,o.kt)("li",{parentName:"ol"},"Insert ",(0,o.kt)("inlineCode",{parentName:"li"},'"')," at the end of the selection.")),(0,o.kt)("p",null,"Notice that the implementation consists of ",(0,o.kt)("em",{parentName:"p"},"two")," state changes. If you added these to the undo history, the user would need to undo ",(0,o.kt)("em",{parentName:"p"},"twice"),", once for each double quote. To avoid this, what if you could group these changes so that they appear as one?"),(0,o.kt)("p",null,"For editor extensions, a group of state changes that happen together is called a ",(0,o.kt)("em",{parentName:"p"},"transaction"),"."),(0,o.kt)("p",null,"If you combine what you've learnt so far\u2014and if you allow transactions that contains only a single state change\u2014then you can consider state as a ",(0,o.kt)("em",{parentName:"p"},"history of transactions"),"."),(0,o.kt)("p",null,"Bringing it all together to implement the surround feature from before in an editor extension, here's how you'd add, or ",(0,o.kt)("em",{parentName:"p"},"dispatch"),", a transaction to the editor view:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'view.dispatch({\n  changes: [\n    { from: selectionStart, insert: `"` },\n    { from: selectionEnd, insert: `"` }\n  ]\n});\n')),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"On this page, you've learnt about modeling state as a series of state changes, and how to group them into transactions."),(0,o.kt)("p",null,"To learn how to manage custom state in your editor, refer to ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/concepts/editor-extensions/state-fields"},"State fields"),"."))}d.isMDXComponent=!0}}]);