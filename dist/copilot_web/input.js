const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["copilot_web/App-C7_INeqc.js","copilot_web/vendor-markdown-Dek94WS0.js","copilot_web/vendor-react-V04_Axys.js","copilot_web/message-components-B3k4U96-.js"])))=>i.map(i=>d[i]);
import{j as u}from"./vendor-markdown-Dek94WS0.js";import{a as v,R as p}from"./vendor-react-V04_Axys.js";import{w}from"./message-components-B3k4U96-.js";const R="modulepreload",b=function(e){return"/"+e},m={},P=function(a,s,S){let d=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),t=r?.nonce||r?.getAttribute("nonce");d=Promise.allSettled(s.map(o=>{if(o=b(o),o in m)return;m[o]=!0;const c=o.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${h}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":R,c||(n.as="script"),n.crossOrigin="",n.href=o,t&&n.setAttribute("nonce",t),document.head.appendChild(n),c)return new Promise((y,E)=>{n.addEventListener("load",y),n.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${o}`)))})}))}function l(r){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=r,window.dispatchEvent(t),!t.defaultPrevented)throw r}return d.then(r=>{for(const t of r||[])t.status==="rejected"&&l(t.reason);return a().catch(l)})};var i={},f=v;i.createRoot=f.createRoot,i.hydrateRoot=f.hydrateRoot;const _=p.lazy(()=>P(async()=>{const{default:e}=await import("./App-C7_INeqc.js").then(a=>a.A);return{default:e}},__vite__mapDeps([0,1,2,3])).then(({default:e})=>({default:e})));function A(){return new Promise(e=>{if(document.body)return e(document.body);document.addEventListener("DOMContentLoaded",()=>{e(document.body)})})}A().then(()=>w()).then(()=>{const e=document.createElement("div");e.id="comfyui-copilot-plugin",document.body.append(e),i.createRoot(e).render(u.jsx(p.StrictMode,{children:u.jsx(_,{})}))});export{P as _};
