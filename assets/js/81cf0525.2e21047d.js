"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3901],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=i,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},63827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={title:"Syntax"},l=void 0,o={unversionedId:"language/syntax",id:"language/syntax",title:"Syntax",description:"Wasp is a declarative, statically typed, domain specific language (DSL).",source:"@site/docs/language/syntax.md",sourceDirName:"language",slug:"/language/syntax",permalink:"/docs/language/syntax",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/language/syntax.md",tags:[],version:"current",frontMatter:{title:"Syntax"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/language/overview"},next:{title:"Features",permalink:"/docs/language/features"}},p={},s=[{value:"Declarations",id:"declarations",level:2},{value:"Complete list of Wasp types",id:"complete-list-of-wasp-types",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wasp is a declarative, statically typed, domain specific language (DSL)."),(0,i.kt)("h2",{id:"declarations"},"Declarations"),(0,i.kt)("p",null,"The central point of Wasp language are ",(0,i.kt)("strong",{parentName:"p"},"declarations"),", and Wasp source is at the end just a bunch of declarations, each of them describing a part of your web app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp"},'app MyApp {\n  title: "My app"\n}\n\nroute RootRoute { path: "/", to: DashboardPage }\n\npage DashboardPage {\n  component: import Dashboard from "@client/Dashboard.js"\n}\n')),(0,i.kt)("p",null,"In the example above we described a web app via three declarations: ",(0,i.kt)("inlineCode",{parentName:"p"},"app MyApp { ... }"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"route RootRoute { ... }")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"page DashboardPage { ... }"),"."),(0,i.kt)("p",null,"Syntax for writing a declaration is ",(0,i.kt)("inlineCode",{parentName:"p"},"<declaration_type> <declaration_name> <declaration_body>"),", where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<declaration_type>")," is one of the declaration types offered by Wasp (",(0,i.kt)("inlineCode",{parentName:"li"},"app"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"route"),", ...)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<declaration_name>")," is an identifier chosen by you to name this specific declaration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<declaration_body>")," is the value/definition of the declaration itself, which has to match the specific declaration body type determined by the chosen declaration type.")),(0,i.kt)("p",null,"So, for ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," declaration above, we have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"declaration type ",(0,i.kt)("inlineCode",{parentName:"li"},"app")),(0,i.kt)("li",{parentName:"ul"},"declaration name ",(0,i.kt)("inlineCode",{parentName:"li"},"MyApp")," (we could have used any other identifier, like ",(0,i.kt)("inlineCode",{parentName:"li"},"foobar"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"foo_bar"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"hi3Ho"),")"),(0,i.kt)("li",{parentName:"ul"},"declaration body ",(0,i.kt)("inlineCode",{parentName:"li"},'{ title: "My app" }'),", which is a dictionary with field ",(0,i.kt)("inlineCode",{parentName:"li"},"title")," that has string value.\nType of this dictionary is in line with the declaration body type of the ",(0,i.kt)("inlineCode",{parentName:"li"},"app")," declaration type.\nIf we provided something else, e.g. changed ",(0,i.kt)("inlineCode",{parentName:"li"},"title")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"little"),", we would get a type error from Wasp compiler since that does not match the expected type of the declaration body for ",(0,i.kt)("inlineCode",{parentName:"li"},"app"),".")),(0,i.kt)("p",null,"Each declaration has a meaning behind it that describes how your web app should behave and function."),(0,i.kt)("p",null,"All the other types in Wasp language (primitive types (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"), composite types (",(0,i.kt)("inlineCode",{parentName:"p"},"dict"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"list"),"), enum types (",(0,i.kt)("inlineCode",{parentName:"p"},"DbSystem"),"), ...) are used to define the declaration bodies."),(0,i.kt)("h2",{id:"complete-list-of-wasp-types"},"Complete list of Wasp types"),(0,i.kt)("p",null,"Wasp's type system can be divided into two main categories of types: ",(0,i.kt)("strong",{parentName:"p"},"fundamental types")," and ",(0,i.kt)("strong",{parentName:"p"},"domain types"),"."),(0,i.kt)("p",null,"While fundamental types are here to be basic building blocks of a language, and are very similar to what you would see in other popular languages, domain types are what makes Wasp special, as they model the concepts of a web app like ",(0,i.kt)("inlineCode",{parentName:"p"},"page"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," and similar."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fundamental types (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wasp-lang/wasp/blob/main/waspc/src/Wasp/Analyzer/Type.hs"},"source of truth"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Primitive types",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"string")," (",(0,i.kt)("inlineCode",{parentName:"li"},'"foo"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"they said: \\"hi\\""'),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bool")," (",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"number")," (",(0,i.kt)("inlineCode",{parentName:"li"},"12"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"14.5"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"declaration reference")," (name of existing declaration: ",(0,i.kt)("inlineCode",{parentName:"li"},"TaskPage"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"updateTask"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ServerImport")," (external server import) (",(0,i.kt)("inlineCode",{parentName:"li"},'import Foo from "@server/bar.js"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'import { Smth } from "@server/a/b.js"'),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'The path has to start with "@server". The rest is relative to the ',(0,i.kt)("inlineCode",{parentName:"li"},"src/server")," directory."),(0,i.kt)("li",{parentName:"ul"},"import has to be a default import ",(0,i.kt)("inlineCode",{parentName:"li"},"import Foo")," or a single named import ",(0,i.kt)("inlineCode",{parentName:"li"},"import { Foo }"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ClientImport")," (external client import) (",(0,i.kt)("inlineCode",{parentName:"li"},'import Foo from "@client/bar.js"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'import { Smth } from "@client/a/b.js"'),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'The path has to start with "@client". The rest is relative to the ',(0,i.kt)("inlineCode",{parentName:"li"},"src/client")," directory."),(0,i.kt)("li",{parentName:"ul"},"import has to be a default import ",(0,i.kt)("inlineCode",{parentName:"li"},"import Foo")," or a single named import ",(0,i.kt)("inlineCode",{parentName:"li"},"import { Foo }"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"json")," (",(0,i.kt)("inlineCode",{parentName:"li"},'{=json { a: 5, b: ["hi"] } json=}'),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"psl")," (Prisma Schema Language) (",(0,i.kt)("inlineCode",{parentName:"li"},"{=psl <psl data model syntax> psl=}"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check ",(0,i.kt)("a",{parentName:"li",href:"https://www.prisma.io/docs/concepts/components/prisma-schema/data-model"},"Prisma docs")," for the syntax of psl data model."))))),(0,i.kt)("li",{parentName:"ul"},"Composite types",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dict")," (dictionary) (",(0,i.kt)("inlineCode",{parentName:"li"},'{ a: 5, b: "foo" }'),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"list")," (",(0,i.kt)("inlineCode",{parentName:"li"},"[1, 2, 3]"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tuple")," (",(0,i.kt)("inlineCode",{parentName:"li"},'(1, "bar")'),", ",(0,i.kt)("inlineCode",{parentName:"li"},"(2, 4, true)"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tuples can be of size 2, 3 and 4."))))))),(0,i.kt)("li",{parentName:"ul"},"Domain types (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wasp-lang/wasp/blob/main/waspc/src/Wasp/Analyzer/StdTypeDefinitions.hs"},"source of truth"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Declaration types",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"action")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"apiNamespace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"app")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"entity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"job")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"query")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"route")))),(0,i.kt)("li",{parentName:"ul"},"Enum types",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DbSystem")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HttpMethod")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"JobExecutor"))))))),(0,i.kt)("p",null,"For more details about each of the domain types, both regarding their body types and what they mean, check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/features"},"Features")," section."))}u.isMDXComponent=!0}}]);