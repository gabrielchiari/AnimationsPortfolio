import{j as Z}from"./jsx-runtime.7faW4zRM.js";import{r as G}from"./index.DhYZZe0J.js";var $={};function J(r){if(typeof window>"u")return;const a=document.createElement("style");return a.setAttribute("type","text/css"),a.innerHTML=r,document.head.appendChild(a),r}Object.defineProperty($,"__esModule",{value:!0});var e=G;function K(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var i=K(e);J(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const Q=e.forwardRef(function({style:a={},className:z="",autoFill:u=!1,play:f=!0,pauseOnHover:g=!1,pauseOnClick:w=!1,direction:n="left",speed:d=50,delay:M=0,loop:b=0,gradient:A=!1,gradientColor:S="white",gradientWidth:v=200,onFinish:W,onCycleComplete:B,onMount:_,children:h},I){const[x,L]=e.useState(0),[y,X]=e.useState(0),[p,N]=e.useState(1),[E,D]=e.useState(!1),O=e.useRef(null),o=I||O,c=e.useRef(null),m=e.useCallback(()=>{if(c.current&&o.current){const t=o.current.getBoundingClientRect(),R=c.current.getBoundingClientRect();let s=t.width,l=R.width;(n==="up"||n==="down")&&(s=t.height,l=R.height),N(u&&s&&l&&l<s?Math.ceil(s/l):1),L(s),X(l)}},[u,o,n]);e.useEffect(()=>{if(E&&(m(),c.current&&o.current)){const t=new ResizeObserver(()=>m());return t.observe(o.current),t.observe(c.current),()=>{t&&t.disconnect()}}},[m,o,E]),e.useEffect(()=>{m()},[m,h]),e.useEffect(()=>{D(!0)},[]),e.useEffect(()=>{typeof _=="function"&&_()},[]);const j=e.useMemo(()=>u?y*p/d:y<x?x/d:y/d,[u,x,y,p,d]),P=e.useMemo(()=>Object.assign(Object.assign({},a),{"--pause-on-hover":!f||g?"paused":"running","--pause-on-click":!f||g&&!w||w?"paused":"running","--width":n==="up"||n==="down"?"100vh":"100%","--transform":n==="up"?"rotate(-90deg)":n==="down"?"rotate(90deg)":"none"}),[a,f,g,w,n]),T=e.useMemo(()=>({"--gradient-color":S,"--gradient-width":typeof v=="number"?`${v}px`:v}),[S,v]),k=e.useMemo(()=>({"--play":f?"running":"paused","--direction":n==="left"?"normal":"reverse","--duration":`${j}s`,"--delay":`${M}s`,"--iteration-count":b?`${b}`:"infinite","--min-width":u?"auto":"100%"}),[f,n,j,M,b,u]),q=e.useMemo(()=>({"--transform":n==="up"?"rotate(90deg)":n==="down"?"rotate(-90deg)":"none"}),[n]),C=e.useCallback(t=>[...Array(Number.isFinite(t)&&t>=0?t:0)].map((R,s)=>i.default.createElement(e.Fragment,{key:s},e.Children.map(h,l=>i.default.createElement("div",{style:q,className:"rfm-child"},l)))),[q,h]);return E?i.default.createElement("div",{ref:o,style:P,className:"rfm-marquee-container "+z},A&&i.default.createElement("div",{style:T,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:k,onAnimationIteration:B,onAnimationEnd:W},i.default.createElement("div",{className:"rfm-initial-child-container",ref:c},e.Children.map(h,t=>i.default.createElement("div",{style:q,className:"rfm-child"},t))),C(p-1)),i.default.createElement("div",{className:"rfm-marquee",style:k},C(p))):null});var U=$.default=Q;const H=({direction:r,children:a})=>Z.jsx(U,{direction:r,children:a});export{H as default};
