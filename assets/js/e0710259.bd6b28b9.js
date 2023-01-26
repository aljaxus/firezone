"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[1885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4855:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={toc:[{value:"Need additional help?",id:"need-additional-help",level:2}]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"need-additional-help"},"Need additional help?"),(0,o.kt)("p",null,"Try asking on one of our community-powered support channels:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discourse.firez.one/?utm_source=docs.firezone.dev"},"Discussion Forums"),": Ask questions, report bugs,\nand suggest features."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://join.slack.com/t/firezone-users/shared_invite/zt-111043zus-j1lP_jP5ohv52FhAayzT6w"},"Public Slack Group"),":\njoin discussions, meet other users, and meet the contributors")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Looking for dedicated support?")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.firezone.dev/contact/sales?utm_source=docs.firezone.dev"},"Contact us"),"\nabout our paid support option if you're using Firezone in a production\ncapacity for your team or organization."))}i.isMDXComponent=!0},9630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),a=n(4855);const i={title:"Docker",sidebar_position:2,description:"Install Firezone via Docker to manage secure remote access to private networks and resources."},l="Install Firezone with Docker",s={unversionedId:"deploy/docker/README",id:"deploy/docker/README",title:"Docker",description:"Install Firezone via Docker to manage secure remote access to private networks and resources.",source:"@site/docs/deploy/docker/README.mdx",sourceDirName:"deploy/docker",slug:"/deploy/docker/",permalink:"/deploy/docker/",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/deploy/docker/README.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Docker",sidebar_position:2,description:"Install Firezone via Docker to manage secure remote access to private networks and resources."},sidebar:"tutorialSidebar",previous:{title:"Deploy",permalink:"/deploy/"},next:{title:"Supported Platforms",permalink:"/deploy/docker/supported-platforms"}},p={};(0,o.kt)(a.ZP,null);const u=[{value:"Step 1: Prerequisites",id:"step-1-prerequisites",level:2},{value:"Step 2: Install Server",id:"step-2-install-server",level:2},{value:"Option 1: Automatic Install",id:"option-1-automatic-install",level:3},{value:"Option 2: Manual Install",id:"option-2-manual-install",level:3},{value:"Step 3: Enable on Boot (optional)",id:"step-3-enable-on-boot-optional",level:2},{value:"Step 4: Enable IPv6 (optional)",id:"step-4-enable-ipv6-optional",level:2},{value:"Step 5: Install client apps",id:"step-5-install-client-apps",level:2},{value:"Post Setup",id:"post-setup",level:2}],c=(d="InstallBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:u};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-firezone-with-docker"},"Install Firezone with Docker"),(0,o.kt)("p",null,"As of 0.6.0, Docker is now the ",(0,o.kt)("strong",{parentName:"p"},"preferred method")," for\ndeploying Firezone. Docker offers a number of benefits over the old\n",(0,o.kt)("a",{parentName:"p",href:"../omnibus"},"Omnibus method"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simpler, more robust upgrades"),": In most cases, simply pull the latest ",(0,o.kt)("inlineCode",{parentName:"li"},"firezone/firezone"),"\nimage and restart the container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simpler configuration"),": Most day-to-day configuration of Firezone can now\nbe done in the web UI instead of the ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/firezone/firezone.rb")," configuration\nfile. All other configuration variables can be specified as ENV vars to the\nFirezone container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Smaller footprint"),": The Firezone image weighs in at a couple dozen\nmegabytes versus hundreds of megabytes for the Omnibus package."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Portability"),": Firezone now runs on any platform that supports Docker."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security"),": Containerization providers better security isolation than\nsimply running as an unprivileged local user.")),(0,o.kt)("h2",{id:"step-1-prerequisites"},"Step 1: Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure you're on a ",(0,o.kt)("a",{parentName:"li",href:"supported-platforms"},"supported platform")," with ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"\ndocker-compose")," ",(0,o.kt)("strong",{parentName:"li"},"version 2\nor higher")," installed."),(0,o.kt)("li",{parentName:"ul"},"Ensure port forwarding is enabled on your firewall.\nThe default Firezone configuration requires the following ports to be open:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"80/tcp")," (optional): For automatically issuing SSL certificates."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"443/tcp"),": To access the web UI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"51820/udp"),": VPN traffic listen port.")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Before deploying Firezone in ",(0,o.kt)("strong",{parentName:"p"},"production"),", you'll need a valid DNS record\npointing to this instance. See ",(0,o.kt)("a",{parentName:"p",href:"../#prepare-to-deploy"},"Prepare to Deploy"),"\nif you haven't done this already.")),(0,o.kt)("h2",{id:"step-2-install-server"},"Step 2: Install Server"),(0,o.kt)("p",null,"After prerequisites are satisfied, you're ready to install the Firezone Server."),(0,o.kt)("h3",{id:"option-1-automatic-install"},"Option 1: Automatic Install"),(0,o.kt)("p",null,"The easiest way to deploy Firezone with Docker is the automatic install script:"),(0,o.kt)(c,{mdxType:"InstallBlock"}),(0,o.kt)("p",null,"This will ask you a few questions regarding initial configuration, then proceed\nto download a sample docker-compose.yml file, configure it with your responses,\nand then print instructions for accessing the Web UI."),(0,o.kt)("p",null,"Firezone files will be installed in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.firezone")," by default."),(0,o.kt)("h3",{id:"option-2-manual-install"},"Option 2: Manual Install"),(0,o.kt)("p",null,"If the automatic install fails, or you'd just like more control over the\ninstallation process, follow the steps below to install manually."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the docker compose template to a local working directory:\n",(0,o.kt)("strong",{parentName:"li"},"For Linux"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://raw.githubusercontent.com/firezone/firezone/master/docker-compose.prod.yml -o docker-compose.yml\n")),(0,o.kt)("strong",{parentName:"li"},"For macOS, Windows (non-production only)"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://raw.githubusercontent.com/firezone/firezone/master/docker-compose.desktop.yml -o docker-compose.yml\n"))),(0,o.kt)("li",{parentName:"ol"},"Generate required secrets:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm firezone/firezone bin/gen-env > .env\n"))),(0,o.kt)("li",{parentName:"ol"},"At a minimum, change the ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN_EMAIL")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"EXTERNAL_URL")," variables.\nOptionally modify other secrets as needed."),(0,o.kt)("li",{parentName:"ol"},"Migrate the database:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose run --rm firezone bin/migrate\n"))),(0,o.kt)("li",{parentName:"ol"},"Create the first admin:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose run --rm firezone bin/create-or-reset-admin\n"))),(0,o.kt)("li",{parentName:"ol"},"Bring the services up: ",(0,o.kt)("inlineCode",{parentName:"li"},"docker compose up -d"))),(0,o.kt)("p",null,"You should now be able to access the Firezone web portal at the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL_URL"),"\nvariable you defined above."),(0,o.kt)("h2",{id:"step-3-enable-on-boot-optional"},"Step 3: Enable on Boot (optional)"),(0,o.kt)("p",null,"If you'd like Firezone to start automatically on boot, first ensure Docker is enabled at startup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl enable docker\n")),(0,o.kt)("p",null,"Then, make sure your Firezone services have the ",(0,o.kt)("inlineCode",{parentName:"p"},"restart: always")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"restart: unless-stopped")," option\nspecified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. This is the default used in the docker-compose.prod.yml\nproduction template file."),(0,o.kt)("h2",{id:"step-4-enable-ipv6-optional"},"Step 4: Enable IPv6 (optional)"),(0,o.kt)("p",null,"By default, Firezone ships with IPv6 connectivity enabled inside the tunnel but not routable\nto the public internet. To enable IPv6 support in Docker-deployed Firezone, follow the steps below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable IPv6 support within Docker by adding the following to ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/docker/daemon.json"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ipv6": true,\n  "ip6tables": true,\n  "experimental": true,\n  \u201cfixed-cidr-v6\u201d: \u201c2001:db8:1::/64\u201d\n}\n')),"This enables IPv6 NAT and configures IPv6 forwarding for Docker containers."),(0,o.kt)("li",{parentName:"ol"},"Enable router advertisements on boot for your default egress interface:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"egress=`ip route show default 0.0.0.0/0 | grep -oP '(?<=dev ).*' | cut -f1 -d' ' | tr -d '\\n'`\nsudo bash -c \"echo net.ipv6.conf.${egress}.accept_ra=2 >> /etc/sysctl.conf\"\n"))),(0,o.kt)("li",{parentName:"ol"},"Reboot")),(0,o.kt)("p",null,"You should now be able to ping google from within a docker container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm -t busybox ping6 -c 4 google.com\n")),(0,o.kt)("p",null,"You shouldn't need to manually add any ",(0,o.kt)("inlineCode",{parentName:"p"},"iptables")," rules to enable IPv6 SNAT/masquerading for\ntunneled traffic; Firezone handles this for you by default on start."),(0,o.kt)("h2",{id:"step-5-install-client-apps"},"Step 5: Install client apps"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Firezone currently uses WireGuard's\n",(0,o.kt)("a",{parentName:"p",href:"https://www.wireguard.com/install/"},"open-source client apps"),".")),(0,o.kt)("p",null,"Once successfully deployed, users and devices can be added to\nconnect to the VPN server:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../user-guides/add-users"},"Add Users"),":\nAdd users to grant them access to your network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../user-guides/client-instructions"},"Client Instructions"),":\nInstructions to establish a VPN session.")),(0,o.kt)("h2",{id:"post-setup"},"Post Setup"),(0,o.kt)("p",null,"Congrats! You have completed the setup, but there's a lot more you can do with\nFirezone:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../authenticate/"},"Integrate your identity provider"),"\nfor authenticating clients"),(0,o.kt)("li",{parentName:"ul"},"Using Firezone as a NAT gateway to\n",(0,o.kt)("a",{parentName:"li",href:"../../user-guides/use-cases/nat-gateway"},"establish a static IP for your team")),(0,o.kt)("li",{parentName:"ul"},"Create tunnels between multiple peers with\n",(0,o.kt)("a",{parentName:"li",href:"../../user-guides/use-cases/reverse-tunnel"},"reverse tunnels")),(0,o.kt)("li",{parentName:"ul"},"Only route certain traffic through Firezone with\n",(0,o.kt)("a",{parentName:"li",href:"../../user-guides/use-cases/split-tunnel"},"split tunneling"))))}k.isMDXComponent=!0}}]);