import{f as ee,o as V,m as _,w as x,F as N,bc as Y,c as W,B as $,b as w,D as B,k as y,Q as ce,aj as te,M as H,a3 as ae,bd as ve,i as de,H as me,q as fe,j as he,J as ge,r as we,u as Z,K as ye,x as be,G as ne,b1 as R,au as ke,s as pe,aT as Se,V as Me,a9 as Ve,be as Ee,_ as Te}from"./entry.npTP50ou.js";import{V as _e,b as G,c as xe,u as Ce}from"./scopeId.uUjtscJf.js";import Be from"./ContentNavigation.O079Sd_a.js";import{V as Ie}from"./VMain.PMVjBAgl.js";import{c as Pe,e as De,g as He,j as Le,B as J,n as Ne,o as Re,Y as Ye,a1 as We,a as $e,C as Oe}from"./VDivider.VqrAF3h8.js";import{m as Xe,a as ze,c as Fe,u as qe}from"./ssrBoot.tcTc8ZnE.js";import{m as Ae,u as je}from"./layout.WBRwSpW6.js";import"./query.2C4ForhW.js";import"./cookie.yb_RhTxr.js";import"./preview.n0Dt-BLQ.js";import"./nuxt-link.sIBOL0C4.js";const oe=ee({__name:"NavDrawerItem",props:["link","root"],setup(e){return(u,s)=>{const n=oe;return e.root?(V(),_(_e,{key:0},{default:x(()=>[(V(!0),W(N,null,Y(e.link.children,t=>(V(),_(n,{link:t},null,8,["link"]))),256))]),_:1})):e.link.children?(V(),_(xe,{key:1,value:e.link.title},{activator:x(({props:t})=>[w(G,$(t,{title:e.link.title}),null,16,["title"])]),default:x(()=>[(V(!0),W(N,null,Y(e.link.children,t=>(V(),_(n,{link:t},null,8,["link"]))),256))]),_:1},8,["value"])):(V(),_(G,{key:2,title:e.link.title,to:e.link._path},null,8,["title","to"]))}}});function Ue(e){let{rootEl:u,isSticky:s,layoutItemStyles:n}=e;const t=B(!1),a=B(0),m=y(()=>{const g=typeof t.value=="boolean"?"top":t.value;return[s.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[g]:ce(a.value)}:{top:n.value.top}]});te(()=>{H(s,g=>{g?window.addEventListener("scroll",k,{passive:!0}):window.removeEventListener("scroll",k)},{immediate:!0})}),ae(()=>{window.removeEventListener("scroll",k)});let f=0;function k(){const g=f>window.scrollY?"up":"down",i=u.value.getBoundingClientRect(),v=parseFloat(n.value.top??0),c=window.scrollY-Math.max(0,a.value-v),h=i.height+Math.max(a.value,v)-window.scrollY-window.innerHeight,S=parseFloat(getComputedStyle(u.value).getPropertyValue("--v-body-scroll-y"))||0;i.height<window.innerHeight-v?(t.value="top",a.value=v):g==="up"&&t.value==="bottom"||g==="down"&&t.value==="top"?(a.value=window.scrollY+i.top-S,t.value=!0):g==="down"&&h<=0?(a.value=0,t.value="bottom"):g==="up"&&c<=0&&(S?t.value!=="top"&&(a.value=-c+S+v,t.value="top"):(a.value=i.top+c,t.value="top")),f=window.scrollY}return{isStuck:t,stickyStyles:m}}const Ze=100,Ge=20;function K(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Q(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let u=0;for(let s=e.length-1;s>0;s--){if(e[s].t===e[s-1].t)continue;const n=K(u),t=(e[s].d-e[s-1].d)/(e[s].t-e[s-1].t);u+=(t-n)*Math.abs(t),s===e.length-1&&(u*=.5)}return K(u)*1e3}function Je(){const e={};function u(t){Array.from(t.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new ve(Ge))).push([t.timeStamp,a])})}function s(t){Array.from(t.changedTouches).forEach(a=>{delete e[a.identifier]})}function n(t){var g;const a=(g=e[t])==null?void 0:g.values().reverse();if(!a)throw new Error(`No samples for touch id ${t}`);const m=a[0],f=[],k=[];for(const i of a){if(m[0]-i[0]>Ze)break;f.push({t:i[0],d:i[1].clientX}),k.push({t:i[0],d:i[1].clientY})}return{x:Q(f),y:Q(k),get direction(){const{x:i,y:v}=this,[c,h]=[Math.abs(i),Math.abs(v)];return c>h&&i>=0?"right":c>h&&i<=0?"left":h>c&&v>=0?"down":h>c&&v<=0?"up":Ke()}}}return{addMovement:u,endTouch:s,getVelocity:n}}function Ke(){throw new Error}function Qe(e){let{isActive:u,isTemporary:s,width:n,touchless:t,position:a}=e;te(()=>{window.addEventListener("touchstart",I,{passive:!0}),window.addEventListener("touchmove",P,{passive:!1}),window.addEventListener("touchend",E,{passive:!0})}),ae(()=>{window.removeEventListener("touchstart",I),window.removeEventListener("touchmove",P),window.removeEventListener("touchend",E)});const m=y(()=>["left","right"].includes(a.value)),{addMovement:f,endTouch:k,getVelocity:g}=Je();let i=!1;const v=B(!1),c=B(0),h=B(0);let S;function b(l,o){return(a.value==="left"?l:a.value==="right"?document.documentElement.clientWidth-l:a.value==="top"?l:a.value==="bottom"?document.documentElement.clientHeight-l:C())-(o?n.value:0)}function L(l){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const r=a.value==="left"?(l-h.value)/n.value:a.value==="right"?(document.documentElement.clientWidth-l-h.value)/n.value:a.value==="top"?(l-h.value)/n.value:a.value==="bottom"?(document.documentElement.clientHeight-l-h.value)/n.value:C();return o?Math.max(0,Math.min(1,r)):r}function I(l){if(t.value)return;const o=l.changedTouches[0].clientX,r=l.changedTouches[0].clientY,d=25,M=a.value==="left"?o<d:a.value==="right"?o>document.documentElement.clientWidth-d:a.value==="top"?r<d:a.value==="bottom"?r>document.documentElement.clientHeight-d:C(),T=u.value&&(a.value==="left"?o<n.value:a.value==="right"?o>document.documentElement.clientWidth-n.value:a.value==="top"?r<n.value:a.value==="bottom"?r>document.documentElement.clientHeight-n.value:C());(M||T||u.value&&s.value)&&(i=!0,S=[o,r],h.value=b(m.value?o:r,u.value),c.value=L(m.value?o:r),k(l),f(l))}function P(l){const o=l.changedTouches[0].clientX,r=l.changedTouches[0].clientY;if(i){if(!l.cancelable){i=!1;return}const M=Math.abs(o-S[0]),T=Math.abs(r-S[1]);(m.value?M>T&&M>3:T>M&&T>3)?(v.value=!0,i=!1):(m.value?T:M)>3&&(i=!1)}if(!v.value)return;l.preventDefault(),f(l);const d=L(m.value?o:r,!1);c.value=Math.max(0,Math.min(1,d)),d>1?h.value=b(m.value?o:r,!0):d<0&&(h.value=b(m.value?o:r,!1))}function E(l){if(i=!1,!v.value)return;f(l),v.value=!1;const o=g(l.changedTouches[0].identifier),r=Math.abs(o.x),d=Math.abs(o.y);(m.value?r>d&&r>400:d>r&&d>3)?u.value=o.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||C()):u.value=c.value>.5}const D=y(()=>v.value?{transform:a.value==="left"?`translateX(calc(-100% + ${c.value*n.value}px))`:a.value==="right"?`translateX(calc(100% - ${c.value*n.value}px))`:a.value==="top"?`translateY(calc(-100% + ${c.value*n.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${c.value*n.value}px))`:C(),transition:"none"}:void 0);return{isDragging:v,dragProgress:c,dragStyles:D}}function C(){throw new Error}const et=["start","end","left","right","top","bottom"],tt=de({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>et.includes(e)},sticky:Boolean,...Pe(),...Xe(),...me(),...De(),...Ae(),...He(),...ze({tag:"nav"}),...fe()},"VNavigationDrawer"),at=he()({name:"VNavigationDrawer",props:tt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,u){let{attrs:s,emit:n,slots:t}=u;const{isRtl:a}=ge(),{themeClasses:m}=we(e),{borderClasses:f}=Le(e),{backgroundColorClasses:k,backgroundColorStyles:g}=J(Z(e,"color")),{elevationClasses:i}=Ne(e),{displayClasses:v,mobile:c}=ye(e),{roundedClasses:h}=Re(e),S=Ye(),b=be(e,"modelValue",null,p=>!!p),{ssrBootStyles:L}=Fe(),{scopeId:I}=Ce(),P=ne(),E=B(!1),D=y(()=>e.rail&&e.expandOnHover&&E.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),l=y(()=>We(e.location,a.value)),o=y(()=>!e.permanent&&(c.value||e.temporary)),r=y(()=>e.sticky&&!o.value&&l.value!=="bottom");R(()=>e.expandOnHover&&e.rail!=null,()=>{H(E,p=>n("update:rail",!p))}),R(()=>!e.disableResizeWatcher,()=>{H(o,p=>!e.permanent&&Me(()=>b.value=!p))}),R(()=>!e.disableRouteWatcher&&!!S,()=>{H(S.currentRoute,()=>o.value&&(b.value=!1))}),H(()=>e.permanent,p=>{p&&(b.value=!0)}),ke(()=>{e.modelValue!=null||o.value||(b.value=e.permanent||!c.value)});const{isDragging:d,dragProgress:M,dragStyles:T}=Qe({isActive:b,isTemporary:o,width:D,touchless:Z(e,"touchless"),position:l}),O=y(()=>{const p=o.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):D.value;return d.value?p*M.value:p}),{layoutItemStyles:X,layoutItemScrimStyles:le}=je({id:e.name,order:y(()=>parseInt(e.order,10)),position:l,layoutSize:O,elementSize:D,active:y(()=>b.value||d.value),disableTransitions:y(()=>d.value),absolute:y(()=>e.absolute||r.value&&typeof z.value!="string")}),{isStuck:z,stickyStyles:ue}=Ue({rootEl:P,isSticky:r,layoutItemStyles:X}),F=J(y(()=>typeof e.scrim=="string"?e.scrim:null)),ie=y(()=>({...d.value?{opacity:M.value*.2,transition:"none"}:void 0,...le.value}));pe({VList:{bgColor:"transparent"}});function re(){E.value=!0}function se(){E.value=!1}return qe(()=>{const p=t.image||e.image;return w(N,null,[w(e.tag,$({ref:P,onMouseenter:re,onMouseleave:se,class:["v-navigation-drawer",`v-navigation-drawer--${l.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":E.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":o.value,"v-navigation-drawer--active":b.value,"v-navigation-drawer--sticky":r.value},m.value,k.value,f.value,v.value,i.value,h.value,e.class],style:[g.value,X.value,T.value,L.value,ue.value,e.style]},I,s),{default:()=>{var q,A,j,U;return[p&&w("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?(q=t.image)==null?void 0:q.call(t,{image:e.image}):w("img",{src:e.image,alt:""},null)]),t.prepend&&w("div",{class:"v-navigation-drawer__prepend"},[(A=t.prepend)==null?void 0:A.call(t)]),w("div",{class:"v-navigation-drawer__content"},[(j=t.default)==null?void 0:j.call(t)]),t.append&&w("div",{class:"v-navigation-drawer__append"},[(U=t.append)==null?void 0:U.call(t)])]}}),w(Se,{name:"fade-transition"},{default:()=>[o.value&&(d.value||b.value)&&!!e.scrim&&w("div",$({class:["v-navigation-drawer__scrim",F.backgroundColorClasses.value],style:[ie.value,F.backgroundColorStyles.value],onClick:()=>b.value=!1},I),null)]})])}),{isStuck:z}}}),nt=ee({__name:"View",setup(e){const u=ne(!1);return(s,n)=>{const t=oe,a=Be,m=Ve("router-view");return V(),_(Ie,null,{default:x(()=>[w($e,{class:"hidden-lg-and-up pull-btn",icon:"mdi-menu",onClick:n[0]||(n[0]=Ee(f=>u.value=!u.value,["stop"]))}),w(at,{"mobile-breakpoint":"lg",modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=f=>u.value=f)},{default:x(()=>[w(a,null,{default:x(({navigation:f})=>[(V(!0),W(N,null,Y(f,k=>(V(),_(t,{link:k,root:"true"},null,8,["link"]))),256))]),_:1})]),_:1},8,["modelValue"]),w(Oe,null,{default:x(()=>[w(m)]),_:1})]),_:1})}}}),ht=Te(nt,[["__scopeId","data-v-4c301c4e"]]);export{ht as default};
