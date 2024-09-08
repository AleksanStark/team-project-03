"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[607],{1581:(e,t,s)=>{s.d(t,{A:()=>a});s(5043);const a=s.p+"static/media/sprite.e2112a028717a55b180003fba5ae75d0.svg"},343:(e,t,s)=>{s.d(t,{A:()=>i});const a="Loader_backdrop__gjec2",r="Loader_circles__Tkm1N";var o=s(579);const i=()=>(0,o.jsx)("div",{className:a,children:(0,o.jsxs)("div",{className:r,children:[(0,o.jsx)("span",{style:{"--n":1}}),(0,o.jsx)("span",{style:{"--n":2}}),(0,o.jsx)("span",{style:{"--n":3}}),(0,o.jsx)("span",{style:{"--n":4}}),(0,o.jsx)("span",{style:{"--n":5}}),(0,o.jsx)("span",{style:{"--n":6}}),(0,o.jsx)("span",{style:{"--n":7}}),(0,o.jsx)("span",{style:{"--n":8}}),(0,o.jsx)("span",{style:{"--n":9}}),(0,o.jsx)("span",{style:{"--n":10}}),(0,o.jsx)("span",{style:{"--n":11}}),(0,o.jsx)("span",{style:{"--n":12}}),(0,o.jsx)("span",{style:{"--n":13}}),(0,o.jsx)("span",{style:{"--n":14}}),(0,o.jsx)("span",{style:{"--n":15}}),(0,o.jsx)("span",{style:{"--n":16}})]})})},4607:(e,t,s)=>{s.r(t),s.d(t,{default:()=>$e});var a=s(5043),r=s(3003),o=s(3892),i=s(1672);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,m=(e,t)=>{let s="",a="",r="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?s=o+" "+i+";":a+="f"==o[1]?m(i,o):o+"{"+m(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=m(i,t?t.replace(/([^,])+/g,(e=>o.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=m.p?m.p(o,i):o+":"+i+";")}return s+(t&&r?t+"{"+r+"}":r)+a},u={},f=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+f(e[s]);return t}return e},g=(e,t,s,a,r)=>{let o=f(e),i=u[o]||(u[o]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(o));if(!u[i]){let t=o!==e?e:(e=>{let t,s,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(s=t[3].replace(p," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(p," ").trim();return a[0]})(e);u[i]=m(r?{["@keyframes "+i]:t}:t,s?"":"."+i)}let n=s&&u.g?u.g:null;return s&&(u.g=u[i]),((e,t,s,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=s?e+t.data:t.data+e)})(u[i],t,a,n),i},h=(e,t,s)=>e.reduce(((e,a,r)=>{let o=t[r];if(o&&o.call){let e=o(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==o?"":o)}),"");function y(e){let t=this||{},s=e.call?e(t.p):e;return g(s.unshift?s.raw?h(s,[].slice.call(arguments,1),t.p):s.reduce(((e,s)=>Object.assign(e,s&&s.call?s(t.p):s)),{}):s,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,x,v,w=y.bind({k:1});function j(e,t){let s=this||{};return function(){let a=arguments;function r(o,i){let n=Object.assign({},o),l=n.className||r.className;s.p=Object.assign({theme:x&&x()},n),s.o=/ *go\d+/.test(l),n.className=y.apply(s,a)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),b(d,n)}return t?t(r):r}}var _=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,E=(()=>{let e=0;return()=>(++e).toString()})(),k=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),N=new Map,F=e=>{if(N.has(e))return;let t=setTimeout((()=>{N.delete(e),I({type:4,toastId:e})}),1e3);N.set(e,t)},$=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=N.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:s}=t;return e.toasts.find((e=>e.id===s.id))?$(e,{type:1,toast:s}):$(e,{type:0,toast:s});case 3:let{toastId:a}=t;return a?F(a):e.toasts.forEach((e=>{F(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===a||void 0===a?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+r})))}}},L=[],C={toasts:[],pausedAt:void 0},I=e=>{C=$(C,e),L.forEach((e=>{e(C)}))},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},A=e=>(t,s)=>{let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",s=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||E()}}(t,e,s);return I({type:2,toast:a}),a.id},O=(e,t)=>A("blank")(e,t);O.error=A("error"),O.success=A("success"),O.loading=A("loading"),O.custom=A("custom"),O.dismiss=e=>{I({type:3,toastId:e})},O.remove=e=>I({type:4,toastId:e}),O.promise=(e,t,s)=>{let a=O.loading(t.loading,{...s,...null==s?void 0:s.loading});return e.then((e=>(O.success(_(t.success,e),{id:a,...s,...null==s?void 0:s.success}),e))).catch((e=>{O.error(_(t.error,e),{id:a,...s,...null==s?void 0:s.error})})),e};var S=(e,t)=>{I({type:1,toast:{id:e,height:t}})},D=()=>{I({type:5,time:Date.now()})},z=e=>{let{toasts:t,pausedAt:s}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,s]=(0,a.useState)(C);(0,a.useEffect)((()=>(L.push(s),()=>{let e=L.indexOf(s);e>-1&&L.splice(e,1)})),[t]);let r=t.toasts.map((t=>{var s,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}}));return{...t,toasts:r}}(e);(0,a.useEffect)((()=>{if(s)return;let e=Date.now(),a=t.map((t=>{if(t.duration===1/0)return;let s=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(s<0))return setTimeout((()=>O.dismiss(t.id)),s);t.visible&&O.dismiss(t.id)}));return()=>{a.forEach((e=>e&&clearTimeout(e)))}}),[t,s]);let r=(0,a.useCallback)((()=>{s&&I({type:6,time:Date.now()})}),[s]),o=(0,a.useCallback)(((e,s)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:o}=s||{},i=t.filter((t=>(t.position||o)===(e.position||o)&&t.height)),n=i.findIndex((t=>t.id===e.id)),l=i.filter(((e,t)=>t<n&&e.visible)).length;return i.filter((e=>e.visible)).slice(...a?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+r),0)}),[t]);return{toasts:t,handlers:{updateHeight:S,startPause:D,endPause:r,calculateOffset:o}}},T=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,H=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,M=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,K=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${T} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Z=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${q} 1s linear infinite;
`,G=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,J=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,U=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${G} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${J} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=j("div")`
  position: absolute;
`,B=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,R=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${R} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=e=>{let{toast:t}=e,{icon:s,type:r,iconTheme:o}=t;return void 0!==s?"string"==typeof s?a.createElement(V,null,s):s:"blank"===r?null:a.createElement(B,null,a.createElement(Z,{...o}),"loading"!==r&&a.createElement(Y,null,"error"===r?a.createElement(K,{...o}):a.createElement(U,{...o})))},Q=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,W=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,ee=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,te=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,se=a.memo((e=>{let{toast:t,position:s,style:r,children:o}=e,i=t.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,r]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Q(s),W(s)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||s||"top-center",t.visible):{opacity:0},n=a.createElement(X,{toast:t}),l=a.createElement(te,{...t.ariaProps},_(t.message,t));return a.createElement(ee,{className:t.className,style:{...i,...r,...t.style}},"function"==typeof o?o({icon:n,message:l}):a.createElement(a.Fragment,null,n,l))}));!function(e,t,s,a){m.p=t,b=e,x=s,v=a}(a.createElement);var ae=e=>{let{id:t,className:s,style:r,onHeightUpdate:o,children:i}=e,n=a.useCallback((e=>{if(e){let s=()=>{let s=e.getBoundingClientRect().height;o(t,s)};s(),new MutationObserver(s).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,o]);return a.createElement("div",{ref:n,className:s,style:r},i)},re=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,oe=e=>{let{reverseOrder:t,position:s="top-center",toastOptions:r,gutter:o,children:i,containerStyle:n,containerClassName:l}=e,{toasts:d,handlers:c}=z(r);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map((e=>{let r=e.position||s,n=((e,t)=>{let s=e.includes("top"),a=s?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...a,...r}})(r,c.calculateOffset(e,{reverseOrder:t,gutter:o,defaultPosition:s}));return a.createElement(ae,{id:e.id,key:e.id,onHeightUpdate:c.updateHeight,className:e.visible?re:"",style:n},"custom"===e.type?_(e.message,e):i?i(e):a.createElement(se,{toast:e,position:r}))})))},ie=O;const ne="LoginForm_form__gPEx5",le="LoginForm_title__5FilZ",de="LoginForm_label__F7sLE",ce="LoginForm_error__012y+",pe="LoginForm_icon__TSGuZ",me="LoginForm_form_input__KK81z",ue="LoginForm_btn__B2KLK",fe="LoginForm_link__IJw1a",ge="LoginForm_bottle__yGdHi";var he=s(899),ye=s(3216),be=s(5475),xe=s(1581),ve=s(9297),we=s(579);const je=he.Ik().shape({email:he.Yj().min(3,"Email must be 3 symbols minimum").max(30,"Email must be 30 symbols maximum").email("Invalid email address").required("Email is required!"),password:he.Yj().min(8,"Password must be 8 symbols minimum").max(64,"Password must be 64 symbols maximum").required("Password is required!")});function _e(){const e=(0,r.wA)(),t=(0,ye.Zp)(),s=(0,a.useId)(),n=(0,a.useId)(),[l,d]=(0,a.useState)(!1),c=()=>{d((e=>!e))};return(0,we.jsxs)("div",{className:"{style.container}",children:[(0,we.jsx)(oe,{position:"top-center",reverseOrder:!1}),(0,we.jsx)(o.l1,{initialValues:{email:"",password:""},validationSchema:je,onSubmit:(s,a)=>{e((0,i.E8)(s)).unwrap().then((()=>{t(ve.J.HOMEPAGE)})).catch((e=>{console.log(e),ie.error("This didn't work.")})),a.setSubmitting(!1),a.resetForm()},children:e=>{let{isSubmitting:t,touched:a,errors:r}=e;return(0,we.jsxs)(o.lV,{className:ne,autoComplete:"off",children:[(0,we.jsx)("h2",{className:le,children:"Sign In"}),(0,we.jsxs)("label",{className:de,htmlFor:s,children:["Enter your email",(0,we.jsx)(o.D0,{id:s,className:me,type:"email",name:"email",placeholder:"E-mail",autoComplete:"email",error:a.email&&r.email?"true":"false"}),(0,we.jsx)(o.Kw,{className:ce,name:"email",component:"div"})]}),(0,we.jsxs)("label",{className:de,htmlFor:n,children:["Enter your password",(0,we.jsx)(o.D0,{id:n,className:me,type:l?"text":"password",name:"password",placeholder:"Password",error:a.password&&r.password?"true":"false",autoComplete:"new-password"}),(0,we.jsx)("span",{onClick:c,children:(0,we.jsx)("svg",{className:pe,children:(0,we.jsx)("use",{href:xe.A+(l?"#eye-show":"#eye-hide")})})}),(0,we.jsx)(o.Kw,{className:ce,name:"password",component:"div"})]}),(0,we.jsx)("button",{className:ue,type:"submit",disabled:t,children:"Sign In"}),(0,we.jsx)(be.k2,{className:fe,to:"/signup",children:"Sign Up"}),(0,we.jsx)(be.k2,{className:fe,to:"/forgot-password",children:"Forgot your password?"})]})}}),(0,we.jsx)("div",{className:ge})]})}var Ee=s(6996),ke=s(343);const Ne="SignInPage_container__ggoLX",Fe="SignInPage_background__8PTRJ",$e=()=>{const e=(0,r.d4)(Ee.Di);return(0,we.jsx)("div",{className:Ne,children:(0,we.jsx)("div",{className:Fe,children:e?(0,we.jsx)(ke.A,{}):(0,we.jsx)(we.Fragment,{children:(0,we.jsx)(_e,{})})})})}}}]);
//# sourceMappingURL=607.1430e58d.chunk.js.map