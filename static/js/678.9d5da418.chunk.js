"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[678],{1581:(e,o,n)=>{n.d(o,{A:()=>i});n(5043);const i=n.p+"static/media/sprite.e2112a028717a55b180003fba5ae75d0.svg"},343:(e,o,n)=>{n.d(o,{A:()=>a});const i="Loader_backdrop__gjec2",t="Loader_circles__Tkm1N";var r=n(579);const a=()=>(0,r.jsx)("div",{className:i,children:(0,r.jsxs)("div",{className:t,children:[(0,r.jsx)("span",{style:{"--n":1}}),(0,r.jsx)("span",{style:{"--n":2}}),(0,r.jsx)("span",{style:{"--n":3}}),(0,r.jsx)("span",{style:{"--n":4}}),(0,r.jsx)("span",{style:{"--n":5}}),(0,r.jsx)("span",{style:{"--n":6}}),(0,r.jsx)("span",{style:{"--n":7}}),(0,r.jsx)("span",{style:{"--n":8}}),(0,r.jsx)("span",{style:{"--n":9}}),(0,r.jsx)("span",{style:{"--n":10}}),(0,r.jsx)("span",{style:{"--n":11}}),(0,r.jsx)("span",{style:{"--n":12}}),(0,r.jsx)("span",{style:{"--n":13}}),(0,r.jsx)("span",{style:{"--n":14}}),(0,r.jsx)("span",{style:{"--n":15}}),(0,r.jsx)("span",{style:{"--n":16}})]})})},7678:(e,o,n)=>{n.r(o),n.d(o,{default:()=>U});var i=n(5043),t=n(3003),r=n(3216),a=n(3892),s=n(899),d=n(1672),l=n(403),c=n(7844),p=n(2831),u=n(4222),x=n(106),h=n(9131),g=n(179),m=n(18);const w=l.Ay.div`
  background-image: url(${x});
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  height: 210px;
  background-position: center;
  margin-top: -26px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${h});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 0;
    width: 736px;
    height: 548px;
    background-position: 80px;
    background-image: url(${g});
    z-index: -1;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${m});
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    background-position: -65px center;
    width: 916px;
    min-height: 680px;
    background-image: url(${p});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${u});
  }
`,b=l.Ay.div`
  @media screen and (min-width: 768px) {
    position: relative;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
`,v=l.Ay.h2`
  color: ${c.$.colors.black};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;
`,f=(0,l.Ay)(a.lV)`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 280px;

  & h2 {
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    margin-right: auto;
    width: 336px;
    /* z-index: 100; */
  }

  @media screen and (min-width: 1440px) {
    position: static;
    width: 384px;
    margin-top: 113px;
    margin-right: 198px;
  }
`,y=(0,l.Ay)(a.Kw)`
  font-size: 12px;
  color: ${c.$.colors.red};
  margin-top: 4px;  /* Adjust space between field and error message */
`,j=(0,l.Ay)(a.D0)`
  margin-top: 8px;
  display: flex;
  padding: 12px 10px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  outline: none;
  border-radius: 6px;
  border: 1px solid
    ${e=>{let{error:o}=e;return"true"===o?c.$.colors.red:c.$.colors.violet_light}};
  background: ${c.$.colors.white};
  &::placeholder {
    color: #9EBBFF; // Placeholder text color
    font-size: 16px;
    font-weight: 400;
    line-height: 1.23;
  }
`,k=l.Ay.button`
  margin-top: 16px;
  width: 100%;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${c.$.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  outline: none;
  border: none;
  color: ${c.$.colors.white};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background-color: ${c.$.colors.violet};
    cursor: not-allowed;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,$=l.Ay.button`
  margin-top: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 30px;
  border-radius: 10px;
  background: #4285f4;  // Google Blue Color
  color: ${c.$.colors.white};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: background 0.3s ease;
  
  &:hover {
    background: #357ae8;  // Darker Google Blue Color
  }

  &:active {
    background: #3367d6;  // Even Darker Google Blue Color
  }
  
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }

  & .google-icon {
    width: 24px;
    height: 24px;
  }
`,A=l.Ay.label`
  margin-top: 16px;
  color: ${c.$.colors.black};
  position: relative;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`,z=l.Ay.p`
  margin-top: 16px;
  color: ${c.$.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 0.8;
  cursor: pointer;
  transition: color 250ms ${c.$.cubicBezier};

  &:hover {
    color: ${c.$.colors.orange};
  }
`,S=l.Ay.div`
  position: absolute;
  border: none;
  top: calc(50% + 34px);
  right: 4%;
  cursor: pointer;

  & svg {
    width: 24px;  // Increased size for visibility
    height: 24px; // Increased size for visibility
  }

  & use {
    fill: #9EBBFF; // Color for eye icons
  }
`;var C=n(1581);const E=(0,i.createContext)(null);function _(e){let{clientId:o,nonce:n,onScriptLoadSuccess:t,onScriptLoadError:r,children:a}=e;const s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{nonce:o,onScriptLoadSuccess:n,onScriptLoadError:t}=e,[r,a]=(0,i.useState)(!1),s=(0,i.useRef)(n);s.current=n;const d=(0,i.useRef)(t);return d.current=t,(0,i.useEffect)((()=>{const e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=o,e.onload=()=>{var e;a(!0),null===(e=s.current)||void 0===e||e.call(s)},e.onerror=()=>{var e;a(!1),null===(e=d.current)||void 0===e||e.call(d)},document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[o]),r}({nonce:n,onScriptLoadSuccess:t,onScriptLoadError:r}),d=(0,i.useMemo)((()=>({clientId:o,scriptLoadedSuccessfully:s})),[o,s]);return i.createElement(E.Provider,{value:d},a)}function P(){const e=(0,i.useContext)(E);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function R(e){var o;return null!==(o=null===e||void 0===e?void 0:e.clientId)&&void 0!==o?o:null===e||void 0===e?void 0:e.client_id}const B={large:40,medium:32,small:20};function G(e){let{onSuccess:o,onError:n,useOneTap:t,promptMomentNotification:r,type:a="standard",theme:s="outline",size:d="large",text:l,shape:c,logo_alignment:p,width:u,locale:x,click_listener:h,containerProps:g,...m}=e;const w=(0,i.useRef)(null),{clientId:b,scriptLoadedSuccessfully:v}=P(),f=(0,i.useRef)(o);f.current=o;const y=(0,i.useRef)(n);y.current=n;const j=(0,i.useRef)(r);return j.current=r,(0,i.useEffect)((()=>{var e,o,n,i,r,g,k,$,A;if(v)return null===(n=null===(o=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===o?void 0:o.id)||void 0===n||n.initialize({client_id:b,callback:e=>{var o;if(!(null===e||void 0===e?void 0:e.credential))return null===(o=y.current)||void 0===o?void 0:o.call(y);const{credential:n,select_by:i}=e;f.current({credential:n,clientId:R(e),select_by:i})},...m}),null===(g=null===(r=null===(i=null===window||void 0===window?void 0:window.google)||void 0===i?void 0:i.accounts)||void 0===r?void 0:r.id)||void 0===g||g.renderButton(w.current,{type:a,theme:s,size:d,text:l,shape:c,logo_alignment:p,width:u,locale:x,click_listener:h}),t&&(null===(A=null===($=null===(k=null===window||void 0===window?void 0:window.google)||void 0===k?void 0:k.accounts)||void 0===$?void 0:$.id)||void 0===A||A.prompt(j.current)),()=>{var e,o,n;t&&(null===(n=null===(o=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===o?void 0:o.id)||void 0===n||n.cancel())}}),[b,v,t,a,s,d,l,c,p,u,x]),i.createElement("div",{...g,ref:w,style:{height:B[d],...null===g||void 0===g?void 0:g.style}})}var I=n(579);const L={email:"",password:"",repeatPassword:""},F=s.Ik({email:s.Yj().email("Invalid email address").required("Required"),password:s.Yj().min(6,"Password must be at least 6 characters").required("Required"),repeatPassword:s.Yj().oneOf([s.KR("password"),null],"Passwords must match").required("Required")}),q=()=>{const[e,o]=(0,i.useState)(!1),[n,s]=(0,i.useState)(!1),l=(0,t.wA)(),c=(0,r.Zp)(),p=async e=>{try{const{credential:o}=e,n=await fetch("http://localhost:3000/auth/confirm-oauth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:o})}),i=await n.json();console.log("Google login successful",i)}catch(o){console.error("Error during Google login:",o)}};return(0,I.jsx)(_,{clientId:"273678042827-tc7jst83e51r24h8rd5t9vo4duo3k8oa.apps.googleusercontent.com",children:(0,I.jsxs)(b,{children:[(0,I.jsx)(a.l1,{initialValues:L,validationSchema:F,onSubmit:async(e,o)=>{let{email:n,password:i}=e,{resetForm:t}=o;l((0,d.kz)({email:n,password:i})),t()},children:i=>{let{isSubmitting:t,touched:r,errors:a}=i;return(0,I.jsxs)(f,{children:[(0,I.jsx)(v,{children:"Sign Up"}),(0,I.jsx)(A,{htmlFor:"email",children:"Enter your email"}),(0,I.jsx)(j,{type:"email",name:"email",id:"email",placeholder:"E-mail",autoComplete:"email",error:r.email&&a.email?"true":"false"}),(0,I.jsx)(y,{name:"email",component:"div"}),(0,I.jsxs)(A,{htmlFor:"password",children:["Enter your password",(0,I.jsx)(S,{onClick:()=>o(!e),children:(0,I.jsx)("svg",{children:(0,I.jsx)("use",{href:C.A+(e?"#eye-show":"#eye-hide")})})})]}),(0,I.jsx)(j,{type:e?"text":"password",name:"password",id:"password",placeholder:"Password",error:r.password&&a.password?"true":"false",autoComplete:"new-password"}),(0,I.jsx)(y,{name:"password",component:"div"}),(0,I.jsxs)(A,{htmlFor:"repeatPassword",children:["Repeat Password",(0,I.jsx)(S,{onClick:()=>s(!n),children:(0,I.jsx)("svg",{children:(0,I.jsx)("use",{href:C.A+(n?"#eye-show":"#eye-hide")})})})]}),(0,I.jsx)(j,{type:n?"text":"password",name:"repeatPassword",id:"repeatPassword",placeholder:"Repeat your password",error:r.repeatPassword&&a.repeatPassword?"true":"false",autoComplete:"new-password"}),(0,I.jsx)(y,{name:"repeatPassword",component:"div"}),(0,I.jsx)(k,{type:"submit",disabled:t,children:"Sign Up"}),(0,I.jsx)($,{type:"button",children:(0,I.jsx)(G,{onSuccess:p,onError:p,logoAlignment:"left",style:{width:25,height:25,marginRight:10},children:"Sign in with Google"})}),(0,I.jsx)(z,{onClick:()=>c("/signin"),children:"Sign in"})]})}}),(0,I.jsx)(w,{})]})})};var D=n(4667),O=n(3505);const N=n.p+"static/media/backgroundMobile.f4baac1d2b7c8a94ec56b99e9a5bfc7e.svg",T=l.Ay.div`
  height: 90vh;

  @media screen and (min-width: 768px) {
    height: 92vh;
  }
`,M=l.Ay.section`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    z-index: -2;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 18px;
  }
`;l.Ay.div`
  background-position: center 28px;
  background-image: url(${N});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;

  @media screen and (min-width: 768px) {
    background-image: url(${O.A});
    background-position: center 0px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${D.A});
    background-size: contain;
    background-repeat: repeat;
  }
`,l.Ay.button`
  margin-top: 16px;
  width: 100%;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #4285f4;  // Google Blue Color
  color: ${c.$.colors.white};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: background 0.3s ease;

  &:hover {
    background: #357ae8;  // Darker Google Blue Color
  }

  &:active {
    background: #3367d6;  // Even Darker Google Blue Color
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;var Y=n(343),K=n(6996);const U=()=>{const e=(0,t.d4)(K.Di);return(0,I.jsx)(T,{children:(0,I.jsx)(M,{children:e?(0,I.jsx)(Y.A,{}):(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(q,{})})})})}},2831:(e,o,n)=>{e.exports=n.p+"static/media/bottle-desk-1x.f101329f2fabf31caa2d.png"},4222:(e,o,n)=>{e.exports=n.p+"static/media/bottle-desk-2x.1775bd96fc412d403b4f.png"},106:(e,o,n)=>{e.exports=n.p+"static/media/bottle-mob-1x.67bfbdf7fb46f03c7cdc.png"},9131:(e,o,n)=>{e.exports=n.p+"static/media/bottle-mob-2x.c696ce1d8650a849a063.png"},179:(e,o,n)=>{e.exports=n.p+"static/media/bottle-tab-1x.ecf25e00b68bab106bc4.png"},18:(e,o,n)=>{e.exports=n.p+"static/media/bottle-tab-2x.5c52f919da333e45d456.png"}}]);
//# sourceMappingURL=678.9d5da418.chunk.js.map