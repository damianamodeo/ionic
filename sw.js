if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const o=s=>i(s,l),u={module:{uri:l},exports:t,require:o};e[l]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-supuXXMI.js",revision:null},{url:"assets/index-Bh-0xHzK.js",revision:null},{url:"assets/index-DAcOI2yR.css",revision:null},{url:"assets/index9-BsMHR5Li.js",revision:null},{url:"assets/input-shims-CHowuGRm.js",revision:null},{url:"assets/ios.transition-BQGkJU4_.js",revision:null},{url:"assets/keyboard2-BA-mYb95.js",revision:null},{url:"assets/md.transition-CgSKhLWi.js",revision:null},{url:"assets/status-tap-QXQYNXlM.js",revision:null},{url:"assets/swipe-back-DOt6pjUb.js",revision:null},{url:"index.html",revision:"e531437f61adc193cb8d4f391d664c77"},{url:"registerSW.js",revision:"18c00d8335d5c57368b08e7c60417a61"},{url:"assets/manifest-icon-192.maskable.png",revision:"50dfb756d334176c71b86c8d53aa4069"},{url:"assets/manifest-icon-512.maskable.png",revision:"77914a396d103881de609ad86537000c"},{url:"manifest.webmanifest",revision:"84a86add2b2842cbbe7978ee11eeb88f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
