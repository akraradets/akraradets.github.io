import{Z as c,S as m,P as i,b2 as u,$ as _,z as o,d as p,i as d,t as v,L as f,A as y}from"./entry.B1DCuGup.js";import{m as V,u as b}from"./ssrBoot.l4hO2GNZ.js";const k=c({scrollable:Boolean,...m(),...V({tag:"main"})},"VMain"),B=i()({name:"VMain",props:k(),setup(a,t){let{slots:e}=t;const{mainStyles:s}=u(),{ssrBootStyles:r}=b();return _(()=>o(a.tag,{class:["v-main",{"v-main--scrollable":a.scrollable},a.class],style:[s.value,r.value,a.style]},{default:()=>{var n,l;return[a.scrollable?o("div",{class:"v-main__scroller"},[(n=e.default)==null?void 0:n.call(e)]):(l=e.default)==null?void 0:l.call(e)]}})),{}}}),w=p({__name:"View",setup(a){return(t,e)=>{const s=d("router-view");return v(),f(B,null,{default:y(()=>[o(s)]),_:1})}}});export{w as _};