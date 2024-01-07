import{au as k,G as w,D as A,u as R,av as B,aw as P,M as T,al as L,ax as j,Y as q,a9 as I,Z as M,$ as y,ay as F,ah as Q,an as z,az as H}from"./entry.fHN6DnTH.js";import{h as C}from"./cookie.F7np3g91.js";import{u as $}from"./preview.PBp4UrUP.js";const U=r=>r==="defer"||r===!1;function te(...r){var v;const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[e,i,a={}]=r;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=L(),t=()=>null,c=()=>s.isHydrating?s.payload.data[e]:s.static.data[e];a.server=a.server??!0,a.default=a.default??t,a.getCachedData=a.getCachedData??c,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??k.deep,a.dedupe=a.dedupe??"cancel";const u=()=>![null,void 0].includes(a.getCachedData(e));if(!s._asyncData[e]||!a.immediate){(v=s.payload._errors)[e]??(v[e]=null);const f=a.deep?w:A;s._asyncData[e]={data:f(a.getCachedData(e)??a.default()),pending:w(!u()),error:R(s.payload._errors,e),status:w("idle")}}const o={...s._asyncData[e]};o.refresh=o.execute=(f={})=>{if(s._asyncDataPromises[e]){if(U(f.dedupe??a.dedupe))return s._asyncDataPromises[e];s._asyncDataPromises[e].cancelled=!0}if((f._initial||s.isHydrating&&f._initial!==!1)&&u())return Promise.resolve(a.getCachedData(e));o.pending.value=!0,o.status.value="pending";const p=new Promise((l,d)=>{try{l(i(s))}catch(S){d(S)}}).then(l=>{if(p.cancelled)return s._asyncDataPromises[e];let d=l;a.transform&&(d=a.transform(l)),a.pick&&(d=G(d,a.pick)),s.payload.data[e]=d,o.data.value=d,o.error.value=null,o.status.value="success"}).catch(l=>{if(p.cancelled)return s._asyncDataPromises[e];o.error.value=j(l),o.data.value=q(a.default()),o.status.value="error"}).finally(()=>{p.cancelled||(o.pending.value=!1,delete s._asyncDataPromises[e])});return s._asyncDataPromises[e]=p,s._asyncDataPromises[e]};const m=()=>o.refresh({_initial:!0}),g=a.server!==!1&&s.payload.serverRendered;{const f=I();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const l=f._nuxtOnBeforeMountCbs;f&&(B(()=>{l.forEach(d=>{d()}),l.splice(0,l.length)}),P(()=>l.splice(0,l.length)))}g&&s.isHydrating&&(o.error.value||u())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):f&&(s.payload.serverRendered&&s.isHydrating||a.lazy)&&a.immediate?f._nuxtOnBeforeMountCbs.push(m):a.immediate&&m(),a.watch&&T(a.watch,()=>o.refresh());const p=s.hook("app:data:refresh",async l=>{(!l||l.includes(e))&&await o.refresh()});f&&P(p)}const D=Promise.resolve(s._asyncDataPromises[e]).then(()=>o);return Object.assign(D,o),D}function G(r,n){const e={};for(const i of n)e[i]=r[i];return e}const b=(r,n)=>n.split(".").reduce((e,i)=>e&&e[i],r),_=(r,n)=>Object.keys(r).filter(n).reduce((e,i)=>Object.assign(e,{[i]:r[i]}),{}),re=r=>n=>r&&r.length?_(n,e=>!r.includes(e)):n,ne=r=>n=>Array.isArray(n)?n.map(e=>r(e)):r(n),E=r=>{const n=[],e=[];for(const i of r)["$","_"].includes(i)?n.push(i):e.push(i);return{prefixes:n,properties:e}},ae=(r=[])=>n=>{if(r.length===0||!n)return n;const{prefixes:e,properties:i}=E(r);return _(n,a=>!i.includes(a)&&!e.includes(a[0]))},se=(r=[])=>n=>{if(r.length===0||!n)return n;const{prefixes:e,properties:i}=E(r);return _(n,a=>i.includes(a)||e.includes(a[0]))},ie=(r,n)=>{const e=new Intl.Collator(n.$locale,{numeric:n.$numeric,caseFirst:n.$caseFirst,sensitivity:n.$sensitivity}),i=Object.keys(n).filter(a=>!a.startsWith("$"));for(const a of i)r=r.sort((s,t)=>{const c=[b(s,a),b(t,a)].map(u=>{if(u!==null)return u instanceof Date?u.toISOString():u});return n[a]===-1&&c.reverse(),e.compare(c[0],c[1])});return r},oe=(r,n="Expected an array")=>{if(!Array.isArray(r))throw new TypeError(n)},h=r=>Array.isArray(r)?r:[void 0,null].includes(r)?[]:[r],K=["sort","where","only","without"];function N(r,n={}){const e={};for(const t of Object.keys(n.initialParams||{}))e[t]=K.includes(t)?h(n.initialParams[t]):n.initialParams[t];const i=(t,c=u=>u)=>(...u)=>(e[t]=c(...u),s),a=t=>{var c;return n.legacy?t!=null&&t.surround?t.surround:t&&(t!=null&&t.dirConfig&&(t.result={_path:(c=t.dirConfig)==null?void 0:c._path,...t.result,_dir:t.dirConfig}),t!=null&&t._path||Array.isArray(t)||!Object.prototype.hasOwnProperty.call(t,"result")?t:t==null?void 0:t.result):t},s={params:()=>({...e,...e.where?{where:[...h(e.where)]}:{},...e.sort?{sort:[...h(e.sort)]}:{}}),only:i("only",h),without:i("without",h),where:i("where",t=>[...h(e.where),...h(t)]),sort:i("sort",t=>[...h(e.sort),...h(t)]),limit:i("limit",t=>parseInt(String(t),10)),skip:i("skip",t=>parseInt(String(t),10)),find:()=>r(s).then(a),findOne:()=>r(i("first")(!0)).then(a),count:()=>r(i("count")(!0)).then(a),locale:t=>s.where({_locale:t}),withSurround:i("surround",(t,c)=>({query:t,...c})),withDirConfig:()=>i("dirConfig")(!0)};return n.legacy&&(s.findSurround=(t,c)=>s.withSurround(t,c).find().then(a)),s}function O(r){return JSON.stringify(r,W)}function W(r,n){return n instanceof RegExp?`--REGEX ${n.toString()}`:n}const Y=r=>{let n=O(r);return n=typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n),n=n.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(n.match(/.{1,100}/g)||[]).join("/")},x=r=>M(r,y().public.content.api.baseURL),ce=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},J=()=>{const{experimental:r}=y().public.content;return r.clientDB?!0:$().isEnabled()},V=()=>async r=>{const{content:n}=y().public,e=r.params(),i=n.experimental.stripQueryParameters?x(`/query/${`${C(e)}.${n.integrity}`}/${Y(e)}.json`):x(`/query/${C(e)}.${n.integrity}.json`);if(J())return(await H(()=>import("./client-db.rmkTVmm2.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(t=>t.useContentDatabase())).fetch(r);const a=await $fetch(i,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:O(e),previewToken:$().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};function ue(r,...n){const{content:e}=y().public,i=N(V(),{initialParams:typeof r!="string"?r:{},legacy:!0});let a;typeof r=="string"&&(a=F(Q(r,...n)));const s=i.params;return i.params=()=>{var c,u,o;const t=s();return a&&(t.where=t.where||[],t.first&&(t.where||[]).length===0?t.where.push({_path:z(a)}):t.where.push({_path:new RegExp(`^${a.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(c=t.sort)!=null&&c.length||(t.sort=[{_file:1,$numeric:!0}]),e.locales.length&&((o=(u=t.where)==null?void 0:u.find(g=>g._locale))!=null&&o._locale||(t.where=t.where||[],t.where.push({_locale:e.defaultLocale}))),t},i}export{ce as a,oe as b,h as c,ie as d,Y as e,ne as f,b as g,ae as h,se as i,O as j,N as k,re as o,ue as q,J as s,te as u,x as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.rmkTVmm2.js","./entry.fHN6DnTH.js","./entry.cLTtr1iT.css","./preview.PBp4UrUP.js","./cookie.F7np3g91.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
