"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6467],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),i=a(44996);const o=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,i.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},72803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),o=(a(39960),a(44996),a(38610));const r={title:"GPT Web App Generator - Let AI create a full-stack React & Node.js codebase based on your description \ud83e\udd16\ud83e\udd2f",authors:["martinsos"],image:"/img/gpt-wasp/gpt-wasp-thumbnail.png",tags:["wasp-ai","GPT"]},s=void 0,l={permalink:"/blog/2023/07/10/gpt-web-app-generator",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2023-07-10-gpt-web-app-generator.md",source:"@site/blog/2023-07-10-gpt-web-app-generator.md",title:"GPT Web App Generator - Let AI create a full-stack React & Node.js codebase based on your description \ud83e\udd16\ud83e\udd2f",description:"<ImgWithCaption",date:"2023-07-10T00:00:00.000Z",formattedDate:"July 10, 2023",tags:[{label:"wasp-ai",permalink:"/blog/tags/wasp-ai"},{label:"GPT",permalink:"/blog/tags/gpt"}],readingTime:5.09,hasTruncateMarker:!1,authors:[{name:"Martin Sosic",title:"Co-founder & CTO @ Wasp",url:"https://github.com/martinsos",imageURL:"https://github.com/martinsos.png",key:"martinsos"}],frontMatter:{title:"GPT Web App Generator - Let AI create a full-stack React & Node.js codebase based on your description \ud83e\udd16\ud83e\udd2f",authors:["martinsos"],image:"/img/gpt-wasp/gpt-wasp-thumbnail.png",tags:["wasp-ai","GPT"]},prevItem:{title:"How we built a GPT code agent that generates full-stack web apps in React & Node.js, explained simply",permalink:"/blog/2023/07/17/how-we-built-gpt-web-app-generator"},nextItem:{title:"Tutorial Jam #1 - Teach Others & Win Prizes!",permalink:"/blog/2023/06/30/tutorial-jam"}},p={authorsImageUrls:[void 0]},d=[{value:"How it works",id:"how-it-works",level:2},{value:"The stack \ud83d\udcda",id:"the-stack-",level:2},{value:"What kind of apps can I build with it?",id:"what-kind-of-apps-can-i-build-with-it",level:2},{value:"My Plants - track your plants&#39; watering schedule \ud83c\udf31\ud83d\udeb0",id:"my-plants---track-your-plants-watering-schedule-",level:3},{value:"ToDo app - a classic \u2705",id:"todo-app---a-classic-",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Summary &amp; next steps",id:"summary--next-steps",level:2},{value:"Challenges",id:"challenges",level:3},{value:"Next features wishlist",id:"next-features-wishlist",level:3},{value:"Support us! \u2b50\ufe0f",id:"support-us-\ufe0f",level:2}],c={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{source:"img/gpt-wasp/thumbnail-yellow.png",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"This project started out as an experiment - we were interested if, given a short description, GPT can generate a full-stack web app in React & Node.js. The results went beyond our expectations!"),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"All you have to do in order to use ",(0,i.kt)("a",{parentName:"p",href:"https://magic-app-generator.wasp-lang.dev/"},"GPT Web App Generator")," is ",(0,i.kt)("strong",{parentName:"p"},"provide a short description of your app idea in plain English"),". You can optionally select your app's brand color and the preferred authentication method (more methods coming soon)."),(0,i.kt)(o.Z,{source:"img/gpt-wasp/how-it-works.gif",caption:"1. Describe your app 2. Pick the color 3. Generate your app \ud83d\ude80",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"That's it - in a matter of minutes, a full-stack web app codebase, written in React, Node.js, Prisma, and Wasp, will be generated right in front of you, and available for you to download, run it locally and deploy with a single CLI command!"),(0,i.kt)("p",null,"See a full one-minute demo here:"),(0,i.kt)("div",{className:"flex justify-center"},(0,i.kt)("iframe",{width:"700",height:"400",src:"https://www.youtube.com/embed/u0MVsPb2MP8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,i.kt)("h2",{id:"the-stack-"},"The stack \ud83d\udcda"),(0,i.kt)("p",null,"Besides React & Node.js, GPT Web App Generator uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Wasp"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma")," is a type-safe database ORM built on top of PostgreSQL. It makes it easy to deal with data models and database migrations."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Wasp")," is a batteries-included, full-stack framework for React & Node.js. It takes care of everything from front-end to back-end and database along with authentication, sending emails, async jobs, deployment, and more."),(0,i.kt)("p",null,"Additionaly, all the code behind GPT Web App Generator is completely open-source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/wasp-ai/wasp-ai"},"web app"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/wasp-ai/waspc/src/Wasp/AI"},"GPT code agent"),"."),(0,i.kt)("h2",{id:"what-kind-of-apps-can-i-build-with-it"},"What kind of apps can I build with it?"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Since this is a GPT-powered project, it's output is not 100% deterministic and small mistakes will sometimes occur in the generated code. For the typical examples of web apps (as seen below) they are usually very minor and straightforward to fix.\nIf you get stuck, ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"ping us on our Discord"),".")),(0,i.kt)("p",null,"The generated apps are full-stack and consist of front-end, back-end and database. Here are few of the examples we successfully created:"),(0,i.kt)("h3",{id:"my-plants---track-your-plants-watering-schedule-"},"My Plants - track your plants' watering schedule \ud83c\udf31\ud83d\udeb0"),(0,i.kt)(o.Z,{source:"img/gpt-wasp/my-plants.png",mdxType:"ImgWithCaption"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See the generated code and run it yourself ",(0,i.kt)("a",{parentName:"li",href:"https://magic-app-generator.wasp-lang.dev/result/3bb5dca2-f134-4f96-89d6-0812deab6e0c"},"here"))),(0,i.kt)("p",null,"This app does exactly what it says - makes sure that you water your plants on time! It comes with a fully functioning front-end, back-end and the database with ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Plant")," entities. It also features a ",(0,i.kt)("a",{parentName:"p",href:"/blog/2023/04/12/auth-ui"},"full-stack authentication")," (username & password) and a Tailwind-based design."),(0,i.kt)("p",null,"The next step would be to add more advanced features, such as email reminders (via ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/sending-emails"},"Wasp email sending support"),") when it is time to water your plant."),(0,i.kt)("p",null,"You can see and download the ",(0,i.kt)("a",{parentName:"p",href:"https://magic-app-generator.wasp-lang.dev/result/3bb5dca2-f134-4f96-89d6-0812deab6e0c"},"entire source code")," and add more features and deploy the app yourself!"),(0,i.kt)("h3",{id:"todo-app---a-classic-"},"ToDo app - a classic \u2705"),(0,i.kt)(o.Z,{source:"img/gpt-wasp/todo-app.png",mdxType:"ImgWithCaption"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See the generated code and run it yourself ",(0,i.kt)("a",{parentName:"li",href:"https://magic-app-generator.wasp-lang.dev/result/07ed440a-3155-4969-b3f5-2031fb1f622f"},"here"))),(0,i.kt)("p",null,"What kind of a demo would this be if it didn't include a ToDo app? GPT Web App Generator successfully scaffolded it, along with all the basic functionality - creating and marking a task as done."),(0,i.kt)("p",null,"With the foundations in place (full-stack code, authentication, Tailwind CSS design) you can ",(0,i.kt)("a",{parentName:"p",href:"https://magic-app-generator.wasp-lang.dev/result/07ed440a-3155-4969-b3f5-2031fb1f622f"},"see & download the code here")," and try it yourself!"),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"In order to reduce the complexity and therefore mistakes GPT makes, for this first version of Generator we went with the following limitations regarding generated apps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"No additional npm dependencies."),(0,i.kt)("li",{parentName:"ol"},"No additional files beyond Wasp Pages (React) and Operations (Node). So no additional files with React components, CSS, utility JS, images or similar."),(0,i.kt)("li",{parentName:"ol"},"No TypeScript, just Javascript."),(0,i.kt)("li",{parentName:"ol"},"No advanced Wasp features (e.g. Jobs, Auto CRUD, Websockets, Social Auth, email sending, \u2026).")),(0,i.kt)("h2",{id:"summary--next-steps"},"Summary & next steps"),(0,i.kt)("p",null,"As mentioned above, our goal was to test whether GPT can be effectively used to generate full-stack web applications with React & Node.js. While it's now obvious it can, we have lot of ideas for new features and improvements."),(0,i.kt)("h3",{id:"challenges"},"Challenges"),(0,i.kt)("p",null,"While we were expecting the main issue to be the size of context that GPT has, it turned out to be that the bigger issue is its \u201csmarts\u201d, which determine things like its planning capabilities, capacity to follow provided instructions (we had quite some laughs observing how it sometimes ignores our instructions), and capacity to not do silly mistakes. We saw GPT4 give better results than GPT3.5, but both still make mistakes, and GPT4 is also quite slow/expensive. Therefore we are quite excited about the further developments in the field of AI / LLMs, as they will directly affect the quality of the output for the tools like our Generator."),(0,i.kt)("h3",{id:"next-features-wishlist"},"Next features wishlist"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get feedback on this initial experiment - both on the Generator and the Wasp as a framework itself: best place to leave us feedback is on our ",(0,i.kt)("a",{parentName:"li",href:"https://discord.com/invite/rzdnErX"},"Discord"),"."),(0,i.kt)("li",{parentName:"ol"},"Further improve code agent & web app."),(0,i.kt)("li",{parentName:"ol"},"Release new version of ",(0,i.kt)("inlineCode",{parentName:"li"},"wasp")," CLI that allows generating new Wasp project by providing short description via CLI. Our code agent will then use GPT to generate project on the disk. This is already ready and should be coming out soon."),(0,i.kt)("li",{parentName:"ol"},"Also allow Wasp users to use code agent for scaffolding specific parts of their Wasp app \u2192 you want to add a new Wasp Page (React)? Run our code agent via Wasp CLI or via Wasp vscode extension and have it generated for you, with initial logic already implemented."),(0,i.kt)("li",{parentName:"ol"},"As LLMs progress, try some alternative approaches, e.g. try fine-tuning an LLM with knowledge about Wasp, or give LLM more freedom while generating files and parts of the codebase."),(0,i.kt)("li",{parentName:"ol"},"Write a detailed blog post about how we implemented the Generator, which techniques we used, how we designed our prompts, what worked and what didn\u2019t work, \u2026 .")),(0,i.kt)("h2",{id:"support-us-\ufe0f"},"Support us! \u2b50\ufe0f"),(0,i.kt)("p",null,"If you wish to express your support for what we are doing, consider giving us a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"star on Github"),"! Everything we do at Wasp is open source, and your support motivates us and helps us to keep making web app development easier and with less boilerplate."))}m.isMDXComponent=!0}}]);