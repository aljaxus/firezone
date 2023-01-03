"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[2688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Uninstall",sidebar_position:5},a=void 0,l={unversionedId:"administer/uninstall",id:"administer/uninstall",title:"Uninstall",description:"Firezone can be uninstalled using the steps below.",source:"@site/docs/administer/uninstall.mdx",sourceDirName:"administer",slug:"/administer/uninstall",permalink:"/administer/uninstall",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/administer/uninstall.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Uninstall",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Upgrade",permalink:"/administer/upgrade"},next:{title:"Troubleshoot",permalink:"/administer/troubleshoot"}},s={},c=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=p("Tabs"),d=p("TabItem"),m={toc:c};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Firezone can be uninstalled using the steps below."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This will irreversibly destroy ALL Firezone data and can't be undone.")),(0,o.kt)(u,{mdxType:"Tabs"},(0,o.kt)(d,{label:"Docker",value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"For docker-based deployments, simply bring the firezone services down,\nthen delete the working directory where you installed the Firezone docker\nfiles (",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.firezone")," by default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# default install dir\ninstallDir=$HOME/.firezone\ndocker compose -f $installDir/docker-compose.yml down -v\nrm -rf $installDir\n"))),(0,o.kt)(d,{label:"Omnibus",value:"omnibus",mdxType:"TabItem"},(0,o.kt)("p",null,"To completely remove Omnibus-based deployments of Firezone run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/firezone/firezone/blob/master/scripts/omnibus-uninstall.sh"},"uninstall.sh\nscript"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo /bin/bash -c "$(curl -fsSL https://github.com/firezone/firezone/raw/master/scripts/omnibus-uninstall.sh)"\n')))))}f.isMDXComponent=!0}}]);