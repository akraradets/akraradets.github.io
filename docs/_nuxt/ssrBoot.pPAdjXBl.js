import{b as te}from"./tag.-tIWB5jP.js";import{N as Z,aa as C,ae as oe,ad as k,ab as q,a4 as E,I as ne,J as ae,c as s,e as se,r as ue,ax as $,o as D,aP as le,a6 as R,ay as ie}from"./entry.4dpvMDaD.js";const B=Symbol.for("vuetify:layout"),F=Symbol.for("vuetify:layout-item"),U=1e3,ye=Z({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),fe=Z({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function pe(){const o=C(B);if(!o)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:o.getLayoutItem,mainRect:o.mainRect,mainStyles:o.mainStyles}}function me(o){const l=C(B);if(!l)throw new Error("[Vuetify] Could not find injected layout");const d=o.id??`layout-item-${oe()}`,r=k("useLayoutItem");q(F,{id:d});const a=E(!1);ne(()=>a.value=!0),ae(()=>a.value=!1);const{layoutItemStyles:c,layoutItemScrimStyles:v}=l.register(r,{...o,active:s(()=>a.value?!1:o.active.value),id:d});return se(()=>l.unregister(d)),{layoutItemStyles:c,layoutRect:l.layoutRect,layoutItemScrimStyles:v}}const re=(o,l,d,r)=>{let a={top:0,left:0,right:0,bottom:0};const c=[{id:"",layer:{...a}}];for(const v of o){const p=l.get(v),g=d.get(v),z=r.get(v);if(!p||!g||!z)continue;const h={...a,[p.value]:parseInt(a[p.value],10)+(z.value?parseInt(g.value,10):0)};c.push({id:v,layer:h}),a=h}return c};function ge(o){const l=C(B,null),d=s(()=>l?l.rootZIndex.value-100:U),r=ue([]),a=$(new Map),c=$(new Map),v=$(new Map),p=$(new Map),g=$(new Map),{resizeRef:z,contentRect:h}=te(),X=s(()=>{const t=new Map,i=o.overlaps??[];for(const e of i.filter(u=>u.includes(":"))){const[u,n]=e.split(":");if(!r.value.includes(u)||!r.value.includes(n))continue;const f=a.get(u),m=a.get(n),S=c.get(u),w=c.get(n);!f||!m||!S||!w||(t.set(n,{position:f.value,amount:parseInt(S.value,10)}),t.set(u,{position:m.value,amount:-parseInt(w.value,10)}))}return t}),I=s(()=>{const t=[...new Set([...v.values()].map(e=>e.value))].sort((e,u)=>e-u),i=[];for(const e of t){const u=r.value.filter(n=>{var f;return((f=v.get(n))==null?void 0:f.value)===e});i.push(...u)}return re(i,a,c,p)}),V=s(()=>!Array.from(g.values()).some(t=>t.value)),b=s(()=>I.value[I.value.length-1].layer),J=s(()=>({"--v-layout-left":R(b.value.left),"--v-layout-right":R(b.value.right),"--v-layout-top":R(b.value.top),"--v-layout-bottom":R(b.value.bottom),...V.value?void 0:{transition:"none"}})),x=s(()=>I.value.slice(1).map((t,i)=>{let{id:e}=t;const{layer:u}=I.value[i],n=c.get(e),f=a.get(e);return{id:e,...u,size:Number(n.value),position:f.value}})),H=t=>x.value.find(i=>i.id===t),M=k("createLayout"),N=E(!1);D(()=>{N.value=!0}),q(B,{register:(t,i)=>{let{id:e,order:u,position:n,layoutSize:f,elementSize:m,active:S,disableTransitions:w,absolute:_}=i;v.set(e,u),a.set(e,n),c.set(e,f),p.set(e,S),w&&g.set(e,w);const T=le(F,M==null?void 0:M.vnode).indexOf(t);T>-1?r.value.splice(T,0,e):r.value.push(e);const j=s(()=>x.value.findIndex(L=>L.id===e)),A=s(()=>d.value+I.value.length*2-j.value*2),G=s(()=>{const L=n.value==="left"||n.value==="right",O=n.value==="right",ee=n.value==="bottom",K={[n.value]:0,zIndex:A.value,transform:`translate${L?"X":"Y"}(${(S.value?0:-110)*(O||ee?-1:1)}%)`,position:_.value||d.value!==U?"absolute":"fixed",...V.value?void 0:{transition:"none"}};if(!N.value)return K;const y=x.value[j.value];if(!y)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const P=X.value.get(e);return P&&(y[P.position]+=P.amount),{...K,height:L?`calc(100% - ${y.top}px - ${y.bottom}px)`:m.value?`${m.value}px`:void 0,left:O?void 0:`${y.left}px`,right:O?`${y.right}px`:void 0,top:n.value!=="bottom"?`${y.top}px`:void 0,bottom:n.value!=="top"?`${y.bottom}px`:void 0,width:L?m.value?`${m.value}px`:void 0:`calc(100% - ${y.left}px - ${y.right}px)`}}),Q=s(()=>({zIndex:A.value-1}));return{layoutItemStyles:G,layoutItemScrimStyles:Q,zIndex:A}},unregister:t=>{v.delete(t),a.delete(t),c.delete(t),p.delete(t),g.delete(t),r.value=r.value.filter(i=>i!==t)},mainRect:b,mainStyles:J,getLayoutItem:H,items:x,layoutRect:h,rootZIndex:d});const W=s(()=>["v-layout",{"v-layout--full-height":o.fullHeight}]),Y=s(()=>({zIndex:l?d.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:W,layoutStyles:Y,getLayoutItem:H,items:x,layoutRect:h,layoutRef:z}}function he(){const o=E(!1);return D(()=>{window.requestAnimationFrame(()=>{o.value=!0})}),{ssrBootStyles:s(()=>o.value?void 0:{transition:"none !important"}),isBooted:ie(o)}}export{fe as a,me as b,ge as c,pe as d,ye as m,he as u};
