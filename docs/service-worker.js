if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>n(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(i(...e),t)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"project"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.fe29ad2b.css",revision:null},{url:"/index.html",revision:"24a4ad8d4cf1dfc0eb523719ba59fc52"},{url:"/js/about.265c61cc.js",revision:null},{url:"/js/app.22bb3484.js",revision:null},{url:"/js/chunk-vendors.11071b21.js",revision:null},{url:"/manifest.json",revision:"cac439e5627fd04e389de3e7dd18fecb"}],{})}));
//# sourceMappingURL=service-worker.js.map