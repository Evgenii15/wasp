"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4231],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(44996);const s=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,r.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(39960);a(44996);const s=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),o=()=>n.createElement("p",{className:"in-blog-cta-link-container"},n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),n.createElement(s,null),n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(s,null),n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},82656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),s=a(39960),o=(a(44996),a(92908)),l=a(70589);a(38610);const i={title:"Build a metrics dashboard with background jobs in Wasp - Say hello to Waspleau!",authors:["shayneczyzewski"],image:"/img/waspleau-screenshot.png",tags:["webdev","wasp"]},p=void 0,u={permalink:"/blog/2022/01/27/waspleau",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-01-27-waspleau.md",source:"@site/blog/2022-01-27-waspleau.md",title:"Build a metrics dashboard with background jobs in Wasp - Say hello to Waspleau!",description:"Hello, Waspleau",date:"2022-01-27T00:00:00.000Z",formattedDate:"January 27, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:4.55,hasTruncateMarker:!0,authors:[{name:"Shayne Czyzewski",title:"Founding Engineer @ Wasp",url:"https://github.com/shayneczyzewski",imageURL:"https://github.com/shayneczyzewski.png",key:"shayneczyzewski"}],frontMatter:{title:"Build a metrics dashboard with background jobs in Wasp - Say hello to Waspleau!",authors:["shayneczyzewski"],image:"/img/waspleau-screenshot.png",tags:["webdev","wasp"]},prevItem:{title:"Meet the team - Filip Sodi\u0107, Founding Engineer",permalink:"/blog/2022/05/31/filip-intro"},nextItem:{title:"Meet the team - Shayne Czyzewski, Founding Engineer",permalink:"/blog/2021/12/21/shayne-intro"}},c={authorsImageUrls:[void 0]},d=[{value:"Hello, Waspleau!",id:"hello-waspleau",level:2},{value:"\u201cShow me the code\u201d",id:"show-me-the-code",level:2},{value:"<code>server.setupFn</code> for queue setup",id:"serversetupfn-for-queue-setup",level:3},{value:"Abstracting workers and job processing",id:"abstracting-workers-and-job-processing",level:3},{value:"Server \u2192 client",id:"server--client",level:3},{value:"Congratulations, let\u2019s dance!",id:"congratulations-lets-dance",level:2},{value:"2022 is going to be exciting \ud83d\ude80",id:"2022-is-going-to-be-exciting-",level:2}],m={toc:d},h="wrapper";function g(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hello, Waspleau",src:a(8348).Z,width:"3610",height:"1064"})),(0,r.kt)("p",{align:"center"},(0,r.kt)(s.Z,{to:"https://waspleau.netlify.app/",mdxType:"Link"},"See Waspleau here!")," | ",(0,r.kt)(s.Z,{to:"https://github.com/wasp-lang/wasp/blob/release/examples/waspleau",mdxType:"Link"},"See the code")),(0,r.kt)("p",null,"We've built a dashboard powered by a job queue using Wasp!"),(0,r.kt)(l.ZP,{mdxType:"WaspIntro"}),(0,r.kt)(o.Z,{mdxType:"InBlogCta"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Measure all the metrics!",src:a(48594).Z,width:"430",height:"304"})),(0,r.kt)("h2",{id:"hello-waspleau"},"Hello, Waspleau!"),(0,r.kt)("p",null,"Let\u2019s face it - metrics are all around us. Wouldn\u2019t it be great if there was a quick and easy way to build a nice-looking metrics dashboard from data pulled in by HTTP calls to many different sources, cache the data in-memory, and periodically update it via background jobs? Why yes, yes it would... so we made an example Wasp app called Waspleau that does just that!"),(0,r.kt)("p",null,"Here is what it looks like live: ",(0,r.kt)("a",{parentName:"p",href:"https://waspleau.netlify.app/"},"https://waspleau.netlify.app/")," There is also a screenshot at the top of this post for those who refrain from clicking on any unknown web links for fear of being ",(0,r.kt)("strong",{parentName:"p"},"Rickrolled"),". Respect."),(0,r.kt)("h2",{id:"show-me-the-code"},"\u201cShow me the code\u201d"),(0,r.kt)("p",null,"So, what do we need to get started? First, we need a way to schedule and run jobs; for this, we decided to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OptimalBits/bull"},"Bull"),". Ok, let\u2019s wire it up. This should be easy, right? We can add external NPM dependencies in our Wasp files like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app waspleau {\n  title: "Waspleau",\n\n  dependencies: [\n    ("bull", "4.1.1"),\n    ("axios", "^0.21.1")\n  ]\n}\n')),(0,r.kt)("p",null,"But where do we declare our queue and processing callback functions in Wasp? Uh oh..."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sad",src:a(86570).Z,width:"430",height:"297"})),(0,r.kt)("h3",{id:"serversetupfn-for-queue-setup"},(0,r.kt)("inlineCode",{parentName:"h3"},"server.setupFn")," for queue setup"),(0,r.kt)("p",null,"Thankfully, Waspleau can leverage a powerful and flexible ",(0,r.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/language/basic-elements#setupfn"},"hook supplied by Wasp")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"server.setupFn"),". This declares a JavaScript function that will be executed on server start. Yahoo! This means we can do things like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app waspleau {\n  ...\n\n  server: {\n    setupFn: import serverSetup from "@server/serverSetup.js"\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/serverSetup.js"',title:'"src/server/serverSetup.js"'},"import Queue from 'bull'\n\nconst queue = new Queue('waspleau', process.env.REDIS_URL || 'redis://127.0.0.1:6379',\n  { defaultJobOptions: { removeOnComplete: true } }\n)\n\nqueue.process('*', async (job) => { ... })\n\nexport default async () => {\n  // To initially populate the queue, we can do:\n  await queue.add({ ... }) // first run, one-off job\n  await queue.add({ ... }, { repeat: { cron: '*/10 * * * *' } }) // recurring job\n}\n")),(0,r.kt)("h3",{id:"abstracting-workers-and-job-processing"},"Abstracting workers and job processing"),(0,r.kt)("p",null,"Awesome, we can now enqueue and process background jobs, but how can we make it easy to create many different kinds of jobs and schedule them to run at different intervals? For Waspleau, we created our own type of worker object convention to help standardize and simplify adding more:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/workers/template.js"',title:'"src/server/workers/template.js"'},"const workerFunction = async (opts) => {\n  return [\n    { name: 'Metric 1 name', value: 'foo', updatedAt: ... },\n    { name: 'Metric 2 name', value: 'bar', updatedAt: ... },\n  ]\n}\n\nexport const workerTemplate = { name: 'Job Name', fn: workerFunction, schedule: '*/10 * * * *' }\n")),(0,r.kt)("p",null,"With this ",(0,r.kt)("inlineCode",{parentName:"p"},"workerFunction")," setup, we can return one or more metrics per worker type. Waspleau can easily use any module that exports this shape. Here is a real example from the demo that makes HTTP calls to GitHub\u2019s API with Axios:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/workers/github.js"',title:'"src/server/workers/github.js"'},"import axios from 'axios'\n\nconst workerFunction = async (opts) => {\n  console.log('github.js workerFunction')\n\n  const now = Date.now()\n\n  try {\n    const response = await axios.get('https://api.github.com/repos/wasp-lang/wasp')\n\n    return [\n      { name: 'Wasp GitHub Stars', value: response.data.stargazers_count, updatedAt: now },\n      { name: 'Wasp GitHub Language', value: response.data.language, updatedAt: now },\n      { name: 'Wasp GitHub Forks', value: response.data.forks, updatedAt: now },\n      { name: 'Wasp GitHub Open Issues', value: response.data.open_issues, updatedAt: now },\n    ]\n  } catch (error) {\n    console.error(error)\n    return []\n  }\n}\n\nexport const githubWorker = { name: 'GitHub API', fn: workerFunction, schedule: '*/10 * * * *' }\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Please see the ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/wasp-lang/wasp/blob/release/examples/waspleau/src/server/serverSetup.js"},"actual serverSetup.js file")," for how we use this abstraction in practice.")),(0,r.kt)("h3",{id:"server--client"},"Server \u2192 client"),(0,r.kt)("p",null,"We now have jobs running and data updating at regular intervals, nice, but we still need a way to send that data down the wire. Here, we expose the in-memory data from our ",(0,r.kt)("inlineCode",{parentName:"p"},"server.setupFn")," module so our queries can also use it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'...\n\nquery dashboard {\n  fn: import { refreshDashboardData } from "@server/dashboard.js"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/dashboard.js"',title:'"src/server/dashboard.js"'},"import { getDashboardData } from './serverSetup.js'\n\nexport const refreshDashboardData = async (_args, _context) => {\n  return getDashboardData()\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/serverSetup.js"',title:'"src/server/serverSetup.js"'},"...\n\nconst dashboardData = {} // This is updated in the queue process callback\nexport const getDashboardData = () => Object.values(dashboardData).flat()\n")),(0,r.kt)("p",null,"From there, we can request it on the frontend in React components as usual and also set a one-minute client-side refetch interval just for good measure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/client/MainPage.js"',title:'"src/client/MainPage.js"'},"...\n\nconst { data: dashboardData, isFetching, error } = useQuery(refreshDashboardData, null, { refetchInterval: 60 * 1000 })\n\n...\n")),(0,r.kt)("h2",{id:"congratulations-lets-dance"},"Congratulations, let\u2019s dance!"),(0,r.kt)("p",null,"Whew, we did it! If you\u2019d like to deploy your own customized version of this dashboard, please clone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"our repo")," and check out the Waspleau example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/release/examples/waspleau/README.md"},"README.md")," for tips on getting started. You can also ",(0,r.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs"},"check out our docs")," to dive deeper into anything."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rickroll",src:a(55016).Z,width:"498",height:"373"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Still got ya! :D")),(0,r.kt)("h2",{id:"2022-is-going-to-be-exciting-"},"2022 is going to be exciting \ud83d\ude80"),(0,r.kt)("p",null,"While this functionality currently exists outside of Wasp, keep an eye on our roadmap as we head toward 1.0. We will be busy adding lots of great features to our Wasp DSL in the coming months that will supercharge your web development experience! Thanks for reading, and please feel free to connect with us in ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," about using Wasp on your next project."))}g.isMDXComponent=!0},70589:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),r=(a(67294),a(3905));const s={toc:[]},o="wrapper";function l(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0},48594:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waspleau-metrics-30675d6a2ecac4e8eff66668bc5442e8.png"},55016:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waspleau-rickroll-646268d60261b4da70effe5f77737b24.gif"},86570:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waspleau-sad-afbc180b95ee3e6ddaa050fa1d8e8ca0.png"},8348:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waspleau-screenshot-4d9be945ab6d5e4f5d6692baa133dff0.png"}}]);