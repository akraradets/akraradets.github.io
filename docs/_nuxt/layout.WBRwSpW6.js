import{b as ee}from"./ssrBoot.tcTc8ZnE.js";import{i as B,U as E,aM as te,aL as D,T as K,D as Z,a4 as oe,a5 as ne,k as s,a3 as ae,G as se,aN as $,aj as ue,aP as le,Q as R}from"./entry.npTP50ou.js";const M=Symbol.for("vuetify:layout"),X=Symbol.for("vuetify:layout-item"),k=1e3,de=B({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),ye=B({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function fe(){const u=E(M);if(!u)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:u.getLayoutItem,mainRect:u.mainRect,mainStyles:u.mainStyles}}function pe(u){const l=E(M);if(!l)throw new Error("[Vuetify] Could not find injected layout");const d=u.id??`layout-item-${te()}`,r=D("useLayoutItem");K(X,{id:d});const n=Z(!1);oe(()=>n.value=!0),ne(()=>n.value=!1);const{layoutItemStyles:c,layoutItemScrimStyles:v}=l.register(r,{...u,active:s(()=>n.value?!1:u.active.value),id:d});return ae(()=>l.unregister(d)),{layoutItemStyles:c,layoutRect:l.layoutRect,layoutItemScrimStyles:v}}const ie=(u,l,d,r)=>{let n={top:0,left:0,right:0,bottom:0};const c=[{id:"",layer:{...n}}];for(const v of u){const p=l.get(v),g=d.get(v),z=r.get(v);if(!p||!g||!z)continue;const h={...n,[p.value]:parseInt(n[p.value],10)+(z.value?parseInt(g.value,10):0)};c.push({id:v,layer:h}),n=h}return c};function me(u){const l=E(M,null),d=s(()=>l?l.rootZIndex.value-100:k),r=se([]),n=$(new Map),c=$(new Map),v=$(new Map),p=$(new Map),g=$(new Map),{resizeRef:z,contentRect:h}=ee(),q=s(()=>{const t=new Map,i=u.overlaps??[];for(const e of i.filter(a=>a.includes(":"))){const[a,o]=e.split(":");if(!r.value.includes(a)||!r.value.includes(o))continue;const f=n.get(a),m=n.get(o),S=c.get(a),w=c.get(o);!f||!m||!S||!w||(t.set(o,{position:f.value,amount:parseInt(S.value,10)}),t.set(a,{position:m.value,amount:-parseInt(w.value,10)}))}return t}),I=s(()=>{const t=[...new Set([...v.values()].map(e=>e.value))].sort((e,a)=>e-a),i=[];for(const e of t){const a=r.value.filter(o=>{var f;return((f=v.get(o))==null?void 0:f.value)===e});i.push(...a)}return ie(i,n,c,p)}),T=s(()=>!Array.from(g.values()).some(t=>t.value)),b=s(()=>I.value[I.value.length-1].layer),F=s(()=>({"--v-layout-left":R(b.value.left),"--v-layout-right":R(b.value.right),"--v-layout-top":R(b.value.top),"--v-layout-bottom":R(b.value.bottom),...T.value?void 0:{transition:"none"}})),x=s(()=>I.value.slice(1).map((t,i)=>{let{id:e}=t;const{layer:a}=I.value[i],o=c.get(e),f=n.get(e);return{id:e,...a,size:Number(o.value),position:f.value}})),V=t=>x.value.find(i=>i.id===t),O=D("createLayout"),j=Z(!1);ue(()=>{j.value=!0}),K(M,{register:(t,i)=>{let{id:e,order:a,position:o,layoutSize:f,elementSize:m,active:S,disableTransitions:w,absolute:W}=i;v.set(e,a),n.set(e,o),c.set(e,f),p.set(e,S),w&&g.set(e,w);const H=le(X,O==null?void 0:O.vnode).indexOf(t);H>-1?r.value.splice(H,0,e):r.value.push(e);const N=s(()=>x.value.findIndex(L=>L.id===e)),P=s(()=>d.value+I.value.length*2-N.value*2),Y=s(()=>{const L=o.value==="left"||o.value==="right",A=o.value==="right",J=o.value==="bottom",U={[o.value]:0,zIndex:P.value,transform:`translate${L?"X":"Y"}(${(S.value?0:-110)*(A||J?-1:1)}%)`,position:W.value||d.value!==k?"absolute":"fixed",...T.value?void 0:{transition:"none"}};if(!j.value)return U;const y=x.value[N.value];if(!y)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const C=q.value.get(e);return C&&(y[C.position]+=C.amount),{...U,height:L?`calc(100% - ${y.top}px - ${y.bottom}px)`:m.value?`${m.value}px`:void 0,left:A?void 0:`${y.left}px`,right:A?`${y.right}px`:void 0,top:o.value!=="bottom"?`${y.top}px`:void 0,bottom:o.value!=="top"?`${y.bottom}px`:void 0,width:L?m.value?`${m.value}px`:void 0:`calc(100% - ${y.left}px - ${y.right}px)`}}),_=s(()=>({zIndex:P.value-1}));return{layoutItemStyles:Y,layoutItemScrimStyles:_,zIndex:P}},unregister:t=>{v.delete(t),n.delete(t),c.delete(t),p.delete(t),g.delete(t),r.value=r.value.filter(i=>i!==t)},mainRect:b,mainStyles:F,getLayoutItem:V,items:x,layoutRect:h,rootZIndex:d});const G=s(()=>["v-layout",{"v-layout--full-height":u.fullHeight}]),Q=s(()=>({zIndex:l?d.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:G,layoutStyles:Q,getLayoutItem:V,items:x,layoutRect:h,layoutRef:z}}export{de as a,fe as b,me as c,ye as m,pe as u};
