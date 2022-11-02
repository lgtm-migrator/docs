"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4349],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=s,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3388:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var n=r(3117),s=(r(7294),r(3905));const o={sidebar_label:"Messages"},a="Messages",i={unversionedId:"developers/wordle-messages",id:"developers/wordle-messages",title:"Messages",description:"Messages allow us to process and submit information to your specific module.",source:"@site/docs/developers/wordle-messages.md",sourceDirName:"developers",slug:"/developers/wordle-messages",permalink:"/pr-preview/pr-277/fr/developers/wordle-messages",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wordle-messages.md",tags:[],version:"current",frontMatter:{sidebar_label:"Messages"},sidebar:"developers",previous:{title:"Module",permalink:"/pr-preview/pr-277/fr/developers/wordle-module"},next:{title:"Types",permalink:"/pr-preview/pr-277/fr/developers/wordle-types"}},l={},u=[{value:"Scaffolding A Message",id:"scaffolding-a-message",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"messages"},"Messages"),(0,s.kt)("p",null,"Messages allow us to process and submit information to your specific module."),(0,s.kt)("p",null,"From the Cosmos-SDK docs, ",(0,s.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/building-modules/messages-and-queries.html#messages"},"messages"),"\nare:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"In the Cosmos SDK, messages are objects that are contained\nin transactions to trigger state transitions. Each Cosmos SDK\nmodule defines a list of messages and how to handle them.")),(0,s.kt)("p",null,"For messages for Wordle, given your initial design, you will\nmake 2 messages with ignite."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The first one is: ",(0,s.kt)("inlineCode",{parentName:"li"},"SubmitWordle")," and it only passes the Wordle of the Day."),(0,s.kt)("li",{parentName:"ul"},"The second one is: ",(0,s.kt)("inlineCode",{parentName:"li"},"SubmitGuess")," and it attempts to guess the submitted\nwordle. It also passes a word as a guess.")),(0,s.kt)("p",null,"With these initial designs, you can start creating your messages!"),(0,s.kt)("h2",{id:"scaffolding-a-message"},"Scaffolding A Message"),(0,s.kt)("p",null,"To create the ",(0,s.kt)("inlineCode",{parentName:"p"},"SubmitWordle")," message, you run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold message submit-wordle word\n")),(0,s.kt)("p",null,"This creates the ",(0,s.kt)("inlineCode",{parentName:"p"},"submit-wordle")," message that takes in ",(0,s.kt)("inlineCode",{parentName:"p"},"word")," as a parameter."),(0,s.kt)("p",null,"You now create the final message, ",(0,s.kt)("inlineCode",{parentName:"p"},"SubmitGuess"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold message submit-guess word\n")),(0,s.kt)("p",null,"Here, you are passing a word as a guess with ",(0,s.kt)("inlineCode",{parentName:"p"},"submit-guess"),"."))}c.isMDXComponent=!0}}]);