"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1399],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7255:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_label:"Setting Up Environment"},s="Development Environment",u={unversionedId:"developers/environment",id:"developers/environment",title:"Development Environment",description:"This tutorial will go over setting up your development environment to run",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/environment.md",sourceDirName:"developers",slug:"/developers/environment",permalink:"/zh/developers/environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/environment.md",tags:[],version:"current",frontMatter:{sidebar_label:"Setting Up Environment"},sidebar:"developers",previous:{title:"Overview",permalink:"/zh/developers/overview"},next:{title:"Celestia App",permalink:"/zh/category/celestia-app"}},p={},c=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Install Golang",id:"install-golang",level:2}],d={toc:c};function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development-environment"},"Development Environment"),(0,o.kt)("p",null,"This tutorial will go over setting up your development environment to run\nCelestia software. This environment can be used for development, building\nbinaries, and running nodes."),(0,o.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,o.kt)("p",null,"Once you have setup your instance, ssh into the instance to begin installing the\ndependencies needed to run a node."),(0,o.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# If you are using the APT package manager\nsudo apt update && sudo apt upgrade -y\n\n# If you are using the YUM package manager\nsudo yum update\n")),(0,o.kt)("p",null,"These are essential packages that are necessary to execute many tasks like\ndownloading files, compiling, and monitoring the node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# If you are using the APT package manager\nsudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n\n# If you are using the YUM package manager\nsudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n")),(0,o.kt)("h2",{id:"install-golang"},"Install Golang"),(0,o.kt)("p",null,"Celestia-app and celestia-node are written in ",(0,o.kt)("a",{parentName:"p",href:"https://go.dev/"},"Golang")," so we\nmust install Golang to build and run them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n')),(0,o.kt)("p",null,"Now we need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n')),(0,o.kt)("p",null,"To check if Go was installed correctly run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,o.kt)("p",null,"The output should be the version installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 linux/amd64\n")))}g.isMDXComponent=!0}}]);