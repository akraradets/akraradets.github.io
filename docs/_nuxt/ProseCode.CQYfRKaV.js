import z from"./Icon.P-5tIrYl.js";import{G as g,a_ as G,aA as D,aB as F,Y as A,l as I,M as X,a9 as Y,ac as H,f as T,W as J,o as _,c as k,a as M,b as $,w as K,g as x,aS as Q,a$ as O,p as U,e as Z,_ as W,t as ee,X as te,V as ne}from"./entry.fHN6DnTH.js";import"./state.yUp3cReW.js";function L(e){return D()?(F(e),!0):!1}function S(e){return typeof e=="function"?e():A(e)}const C=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const oe=Object.prototype.toString,ae=e=>oe.call(e)==="[object Object]",b=()=>{},se=ie();function ie(){var e,t;return C&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function re(e){let t;function a(){return t||(t=e()),t}return a.reset=async()=>{const n=t;t=void 0,n&&await n},a}function ce(e,t,a={}){const{immediate:n=!0}=a,i=g(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function c(){i.value=!1,l()}function d(...p){l(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...p)},S(t))}return n&&(i.value=!0,C&&d()),L(c),{isPending:G(i),start:d,stop:c}}function w(e){var t;const a=S(e);return(t=a==null?void 0:a.$el)!=null?t:a}const N=C?window:void 0,R=C?window.navigator:void 0;function h(...e){let t,a,n,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,n,i]=e,t=N):[t,a,n,i]=e,!t)return b;Array.isArray(a)||(a=[a]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(u=>u()),o.length=0},c=(u,f,s,r)=>(u.addEventListener(f,s,r),()=>u.removeEventListener(f,s,r)),d=X(()=>[w(t),S(i)],([u,f])=>{if(l(),!u)return;const s=ae(f)?{...f}:f;o.push(...a.flatMap(r=>n.map(m=>c(u,r,m,s))))},{immediate:!0,flush:"post"}),p=()=>{d(),l()};return L(p),p}let B=!1;function ue(e,t,a={}){const{window:n=N,ignore:i=[],capture:o=!0,detectIframe:l=!1}=a;if(!n)return b;se&&!B&&(B=!0,Array.from(n.document.body.children).forEach(s=>s.addEventListener("click",b)),n.document.documentElement.addEventListener("click",b));let c=!0;const d=s=>i.some(r=>{if(typeof r=="string")return Array.from(n.document.querySelectorAll(r)).some(m=>m===s.target||s.composedPath().includes(m));{const m=w(r);return m&&(s.target===m||s.composedPath().includes(m))}}),u=[h(n,"click",s=>{const r=w(e);if(!(!r||r===s.target||s.composedPath().includes(r))){if(s.detail===0&&(c=!d(s)),!c){c=!0;return}t(s)}},{passive:!0,capture:o}),h(n,"pointerdown",s=>{const r=w(e);c=!d(s)&&!!(r&&!s.composedPath().includes(r))},{passive:!0}),l&&h(n,"blur",s=>{setTimeout(()=>{var r;const m=w(e);((r=n.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(m!=null&&m.contains(n.document.activeElement))&&t(s)},0)})].filter(Boolean);return()=>u.forEach(s=>s())}function le(){const e=g(!1);return Y()&&H(()=>{e.value=!0}),e}function V(e){const t=le();return I(()=>(t.value,!!e()))}function P(e,t={}){const{controls:a=!1,navigator:n=R}=t,i=V(()=>n&&"permissions"in n);let o;const l=typeof e=="string"?{name:e}:e,c=g(),d=()=>{o&&(c.value=o.state)},p=re(async()=>{if(i.value){if(!o)try{o=await n.permissions.query(l),h(o,"change",d),d()}catch{c.value="prompt"}return o}});return p(),a?{state:c,isSupported:i,query:p}:c}function de(e={}){const{navigator:t=R,read:a=!1,source:n,copiedDuring:i=1500,legacy:o=!1}=e,l=V(()=>t&&"clipboard"in t),c=P("clipboard-read"),d=P("clipboard-write"),p=I(()=>l.value||o),u=g(""),f=g(!1),s=ce(()=>f.value=!1,i);function r(){l.value&&c.value!=="denied"?t.clipboard.readText().then(v=>{u.value=v}):u.value=q()}p.value&&a&&h(["copy","cut"],r);async function m(v=S(n)){p.value&&v!=null&&(l.value&&d.value!=="denied"?await t.clipboard.writeText(v):j(v),u.value=v,f.value=!0,s.start())}function j(v){const y=document.createElement("textarea");y.value=v??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function q(){var v,y,E;return(E=(y=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:y.toString())!=null?E:""}return{isSupported:p,text:u,copied:f,copy:m}}const pe=e=>(U("data-v-0a12b65b"),e=e(),Z(),e),fe=pe(()=>M("span",{class:"sr-only"},"Copy to clipboard",-1)),me={class:"icon-wrapper"},ve=T({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const t=e,a=g(),{copy:n}=de();ue(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:i}=J(),o=g("init"),l=c=>{n(t.content).then(()=>{o.value="copied"}).catch(d=>{console.warn("Couldn't copy to clipboard!",d)})};return(c,d)=>{const p=z;return _(),k("button",{ref_key:"copyButtonRef",ref:a,class:O([(e.show||o.value==="copied")&&"show"]),onClick:l},[fe,M("span",me,[$(Q,{name:"fade"},{default:K(()=>{var u,f;return[o.value==="copied"?(_(),x(p,{key:0,name:(u=A(i).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(_(),x(p,{key:1,name:(f=A(i).copyButton)==null?void 0:f.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),ye=W(ve,[["__scopeId","data-v-0a12b65b"]]),ge={key:0,class:"filename"},we=T({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const t=g(!1);return(a,n)=>{const i=ye;return _(),k("div",{class:O([[`highlight-${e.language}`],"prose-code"]),onMouseenter:n[0]||(n[0]=o=>t.value=!0),onMouseleave:n[1]||(n[1]=o=>t.value=!1)},[e.filename?(_(),k("span",ge,ee(e.filename),1)):te("",!0),ne(a.$slots,"default",{},void 0,!0),$(i,{show:t.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),Se=W(we,[["__scopeId","data-v-cafe2a2b"]]);export{Se as default};