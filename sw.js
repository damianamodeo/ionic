if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let l={};const o=s=>i(s,t),u={module:{uri:t},exports:l,require:o};e[t]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),l)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-supuXXMI.js",revision:null},{url:"assets/index-DAcOI2yR.css",revision:null},{url:"assets/index-DesyZWD6.js",revision:null},{url:"assets/index9-D1CcsShy.js",revision:null},{url:"assets/input-shims-CKQNYreq.js",revision:null},{url:"assets/ios.transition-DuLEN7z5.js",revision:null},{url:"assets/keyboard2-tf9KxMl5.js",revision:null},{url:"assets/md.transition-CxI1q1Wj.js",revision:null},{url:"assets/status-tap-Dvmxqtrc.js",revision:null},{url:"assets/swipe-back-n9FgxZDH.js",revision:null},{url:"index.html",revision:"f72731855fa72a8c903f3fcdc087b0a5"},{url:"registerSW.js",revision:"18c00d8335d5c57368b08e7c60417a61"},{url:"assets/manifest-icon-192.maskable.png",revision:"50dfb756d334176c71b86c8d53aa4069"},{url:"assets/manifest-icon-512.maskable.png",revision:"77914a396d103881de609ad86537000c"},{url:"manifest.webmanifest",revision:"06d4d7ebf5492d42ba87ecf28f249e20"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
