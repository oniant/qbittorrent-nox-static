"use strict";(self.webpackChunkqbt_static_docs=self.webpackChunkqbt_static_docs||[]).push([[103],{3197:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=s(5893),n=s(1151);const a={title:"Script Usage",hide_title:!0},o=void 0,r={id:"script-usage",title:"Script Usage",description:"First run expectations",source:"@site/docs/script-usage.md",sourceDirName:".",slug:"/script-usage",permalink:"/qbittorrent-nox-static/docs/script-usage",draft:!1,unlisted:!1,editUrl:"https://github.com/userdocs/qbittorrent-nox-static/tree/master/docs/script-usage.md",tags:[],version:"current",frontMatter:{title:"Script Usage",hide_title:!0},sidebar:"qtb_sidebar",previous:{title:"Script Installation",permalink:"/qbittorrent-nox-static/docs/script-installation"},next:{title:"Build Help",permalink:"/qbittorrent-nox-static/docs/build-help"}},c={},d=[{value:"First run expectations",id:"first-run-expectations",level:2},{value:"Host - execute script",id:"host---execute-script",level:2},{value:"Docker via SSH",id:"docker-via-ssh",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Advanced:a,Details:o,TabItem:r,Tabs:c}=t;return a||u("Advanced",!0),o||u("Details",!0),r||u("TabItem",!0),c||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"first-run-expectations",children:"First run expectations"}),"\n",(0,i.jsx)(t.p,{children:"Since the script is designed to be run in a temporary environment like docker or Github workflows, first thing the script does check the required critical dependencies are installed and attempt to install them if missing. Once this is done it will exit with some information printed to the terminal."}),"\n",(0,i.jsx)(t.p,{children:"After this initial boot-strapping is completed it will not do anything else unless specifically told to do it."}),"\n",(0,i.jsx)(t.admonition,{title:"Just use docker",type:"tip",children:(0,i.jsx)(t.p,{children:"The preferred and recommended build platform is Alpine Linux and the recommended method is via docker. It will just make things easier."})}),"\n",(0,i.jsx)(t.admonition,{title:"Assumptions",type:"caution",children:(0,i.jsxs)(t.p,{children:["The easiest way to progress if that I assume you have downloaded the script locally, as recommended in the previous section and that you have docker, ",(0,i.jsx)(t.a,{href:"glossary/qemu",children:"qemu and binmtfs"})," available to you."]})}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"It is not recommended to do this on a host you use regularly as it installs things you might not need or want."})}),"\n",(0,i.jsx)(a,{children:(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["Dependencies are added dynamically based on the configuration. For example, ",(0,i.jsx)(t.code,{children:"cmake"})," is not installed unless the build tool is configured to be ",(0,i.jsx)(t.code,{children:"cmake"})]}),(0,i.jsxs)(t.p,{children:["Using the flag ",(0,i.jsx)(t.code,{children:"-c"})," or the env ",(0,i.jsx)(t.code,{children:"qbt_build_tool=cmake"})," will trigger these additional dependencies"]})]})}),"\n",(0,i.jsx)(o,{className:"custom-details",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)("summary",{children:"What to expect"}),"\r\n",(0,i.jsx)(t.img,{src:s(8468).Z+"",width:"885",height:"929"})]})}),"\n",(0,i.jsx)(t.p,{children:"When you are familiar with the script you can do anything you want with a one liner. It's pretty simple to use."}),"\n",(0,i.jsx)(t.h2,{id:"host---execute-script",children:"Host - execute script"}),"\n",(0,i.jsx)(t.p,{children:"To execute the script use this command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"chmod +x ~/qbt.sh # make it executable\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"~/qbt.sh\n"})}),"\n",(0,i.jsx)(t.h2,{id:"docker-via-ssh",children:"Docker via SSH"}),"\n",(0,i.jsxs)(c,{children:[(0,i.jsxs)(r,{value:"Notes",label:"Notes",children:[(0,i.jsx)(t.p,{children:"Some notes on the dockers method:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["We will use a subdirectory and not your ",(0,i.jsx)(t.code,{children:"$HOME"})," directory as to avoid ",(0,i.jsx)(t.code,{children:".bashrc"})," and ",(0,i.jsx)(t.code,{children:".profile"})," conflicts."]}),"\n",(0,i.jsxs)(t.li,{children:["The subdirectory will be automatically created and named ",(0,i.jsx)(t.code,{children:"qbt"})," by the use of ",(0,i.jsx)(t.code,{children:"-v $HOME/qbt:/root"})]}),"\n",(0,i.jsxs)(t.li,{children:["The finale default path will be ",(0,i.jsx)(t.code,{children:"HOME/qbt"})," outside the docker container and ",(0,i.jsx)(t.code,{children:"/root/qbt"})," inside it."]}),"\n",(0,i.jsx)(t.li,{children:"We assume you have downloaded the script as described in the previous section."}),"\n",(0,i.jsxs)(t.li,{children:["We use ",(0,i.jsx)(t.code,{children:'-e "LANG=en_GB.UTF-8"'})," with Debian based images to avoid some errors."]}),"\n"]})]}),(0,i.jsxs)(r,{value:"Debian Linux",label:"Debian",children:[(0,i.jsx)(t.admonition,{title:"tags",type:"note",children:(0,i.jsxs)(t.p,{children:["You use ",(0,i.jsx)(t.code,{children:"debian:bullseye"})," ",(0,i.jsx)(t.code,{children:"debian:latest"})]})}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'docker run -it -w /root -e "LANG=en_GB.UTF-8" -v ~/qbt:/root debian:latest bash qbt.sh\n'})}),(0,i.jsx)(t.p,{children:"All in one command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"docker run -it -w /root -e \"LANG=en_GB.UTF-8\" -v $HOME/qbt:/root debian:latest /bin/bash -c 'apt update && apt install -y curl && curl -sL git.io/qbstatic | bash -s all'\n"})})]}),(0,i.jsxs)(r,{value:"Ubuntu Linux",label:"Ubuntu",children:[(0,i.jsx)(t.admonition,{title:"tags",type:"note",children:(0,i.jsxs)(t.p,{children:["You use ",(0,i.jsx)(t.code,{children:"ubuntu:focal"})," ",(0,i.jsx)(t.code,{children:"ubuntu:jammy"})," ",(0,i.jsx)(t.code,{children:"ubuntu:latest"})]})}),(0,i.jsx)(t.p,{children:"To bootstrap the container:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"docker run -it -w /root -e \"LANG=en_GB.UTF-8\" -v $HOME/qbt:/root ubuntu:latest /bin/bash -c 'apt update && apt install -y curl && bash'\n"})}),(0,i.jsx)(t.p,{children:"All in one command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"docker run -it -w /root -e \"LANG=en_GB.UTF-8\" -v $HOME/qbt:/root ubuntu:latest /bin/bash -c 'apt update && apt install -y curl && curl -sL git.io/qbstatic | bash -s all'\n"})})]}),(0,i.jsxs)(r,{value:"Alpine Linux",label:"Alpine",children:[(0,i.jsx)(t.admonition,{title:"tags",type:"note",children:(0,i.jsxs)(t.p,{children:["You use ",(0,i.jsx)(t.code,{children:"alpine:edge"})," ",(0,i.jsx)(t.code,{children:"alpine:latest"})]})}),(0,i.jsx)(t.p,{children:"To bootstrap the container:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"docker run -it -w /root -v $HOME/qbt:/root alpine:edge /bin/ash -c 'apk update && apk add bash curl && bash'\n"})}),(0,i.jsx)(t.p,{children:"All in one command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"docker run -it -w /root -v $HOME/qbt:/root alpine:edge /bin/ash -c 'apk update && apk add bash curl && curl -sL git.io/qbstatic | bash -s all'\n"})})]})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Please see the ",(0,i.jsx)(t.a,{href:"./build-help?id=switches-and-flags-summarised",children:"switches and flags summary"})," to see what options you can pass and how to use them"]})}),(0,i.jsx)(t.p,{children:"You can modify the installation command by editing this part of the docker command."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"bash -s all\n"})}),(0,i.jsxs)(t.p,{children:["For example, to use ",(0,i.jsx)(t.code,{children:"ICU"})," using ",(0,i.jsx)(t.code,{children:"-i"}),", ",(0,i.jsx)(t.code,{children:"-c"})," to trigger cmake and in turn activate Qt6 and optimise for the system CPU using ",(0,i.jsx)(t.code,{children:"-o"}),":"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"bash -s all -i -c -o\n"})})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8468:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/1-4b7982a4fa5886594416da810cd9294f.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var i=s(7294);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);