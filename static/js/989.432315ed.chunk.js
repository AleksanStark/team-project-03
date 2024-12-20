"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[989],{343:(e,o,t)=>{t.d(o,{A:()=>a});const n="Loader_backdrop__gjec2",r="Loader_circles__Tkm1N";var i=t(579);const a=()=>(0,i.jsx)("div",{className:n,children:(0,i.jsxs)("div",{className:r,children:[(0,i.jsx)("span",{style:{"--n":1}}),(0,i.jsx)("span",{style:{"--n":2}}),(0,i.jsx)("span",{style:{"--n":3}}),(0,i.jsx)("span",{style:{"--n":4}}),(0,i.jsx)("span",{style:{"--n":5}}),(0,i.jsx)("span",{style:{"--n":6}}),(0,i.jsx)("span",{style:{"--n":7}}),(0,i.jsx)("span",{style:{"--n":8}}),(0,i.jsx)("span",{style:{"--n":9}}),(0,i.jsx)("span",{style:{"--n":10}}),(0,i.jsx)("span",{style:{"--n":11}}),(0,i.jsx)("span",{style:{"--n":12}}),(0,i.jsx)("span",{style:{"--n":13}}),(0,i.jsx)("span",{style:{"--n":14}}),(0,i.jsx)("span",{style:{"--n":15}}),(0,i.jsx)("span",{style:{"--n":16}})]})})},2989:(e,o,t)=>{t.r(o),t.d(o,{default:()=>V});var n=t(5043),r=t(3003),i=t(3216),a=t(3892),s=t(899),d=t(1672),l=t(6058);const p="GoogleLoginButton_googleLoginButton__TNPr-",c="GoogleLoginButton_buttonIcon__spXej",x="GoogleLoginButton_iconGoogle__R73Gi",h="GoogleLoginButton_buttonContents__LGSeN",g="GoogleLoginButton_buttonContentWrapper__EOna4";var m=t(579);const u=()=>{const[e,o]=(0,n.useState)(!1),t=(0,r.wA)(),a=(0,i.Zp)(),s=(0,n.useCallback)((async e=>{try{const o=await fetch("https://watertracker-db.onrender.com/auth/confirm-oauth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e})});if(!o.ok){const e=await o.json();throw new Error(`Error: ${e.message}`)}t((0,d.ly)({code:e})).unwrap().then((()=>{a("/homepage")})).catch((e=>{console.error("Dispatch error:",e)}))}catch(o){console.error("Error during OAuth code confirmation:",o.message)}}),[t,a]);(0,n.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get("code");e&&s(e)}),[s]);return(0,m.jsx)("button",{className:p,onClick:async()=>{o(!0);try{const e=await fetch("https://watertracker-db.onrender.com/auth/get-oauth-url");if(e.ok){const o=await e.json();o.data&&o.data.url?window.location.href=o.data.url:console.error("OAuth URL not found in the response data.")}else console.error("Error:",e.statusText)}catch(e){console.error("Error sending request:",e)}finally{o(!1)}},disabled:e,children:(0,m.jsxs)("div",{className:g,children:[(0,m.jsx)("div",{className:c,children:(0,m.jsx)(l.F4b,{className:x})}),(0,m.jsx)("div",{className:h,children:"Sign in with Google"})]})})};var w=t(403),b=t(7844),f=t(2831),y=t(4222),j=t(106),k=t(9131),v=t(179),$=t(18);const A=w.Ay.div`
  background-image: url(${j});
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  height: 210px;
  background-position: center;
  margin-top: -26px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${k});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 0;
    width: 736px;
    height: 548px;
    background-position: 80px;
    background-image: url(${v});
    z-index: -1;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${$});
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    background-position: -65px center;
    width: 916px;
    min-height: 680px;
    background-image: url(${f});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${y});
  }
`,_=w.Ay.div`
  @media screen and (min-width: 768px) {
    position: relative;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
`,z=w.Ay.h2`
  color: ${b.$.colors.black};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;
`,C=(0,w.Ay)(a.lV)`
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
`,B=(0,w.Ay)(a.Kw)`
  font-size: 12px;
  color: ${b.$.colors.red};
  margin-top: 4px;  /* Adjust space between field and error message */
`,P=(0,w.Ay)(a.D0)`
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
    ${e=>{let{error:o}=e;return"true"===o?b.$.colors.red:b.$.colors.violet_light}};
  background: ${b.$.colors.white};
  &::placeholder {
    color: #9EBBFF; // Placeholder text color
    font-size: 16px;
    font-weight: 400;
    line-height: 1.23;
  }
`,G=w.Ay.button`
  margin-top: 16px;
  width: 100%;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${b.$.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  outline: none;
  border: none;
  color: ${b.$.colors.white};
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
    background-color: ${b.$.colors.violet};
    cursor: not-allowed;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,E=(w.Ay.button`
  margin-top: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 30px;
  border-radius: 10px;
  background: #4285f4;  // Google Blue Color
  color: ${b.$.colors.white};
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
`,w.Ay.label`
  margin-top: 16px;
  color: ${b.$.colors.black};
  position: relative;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`),S=w.Ay.p`
  margin-top: 16px;
  color: ${b.$.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 0.8;
  cursor: pointer;
  transition: color 250ms ${b.$.cubicBezier};

  &:hover {
    color: ${b.$.colors.orange};
  }
`,L=w.Ay.div`
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
`;var N=t(1581);const F={email:"",password:"",repeatPassword:""},R=s.Ik({email:s.Yj().email("Invalid email address").required("Required"),password:s.Yj().min(6,"Password must be at least 6 characters").required("Required"),repeatPassword:s.Yj().oneOf([s.KR("password"),null],"Passwords must match").required("Required")}),q=()=>{const[e,o]=(0,n.useState)(!1),[t,s]=(0,n.useState)(!1),l=(0,r.wA)(),p=(0,i.Zp)();return(0,m.jsxs)(_,{children:[(0,m.jsx)(a.l1,{initialValues:F,validationSchema:R,onSubmit:async(e,o)=>{let{email:t,password:n}=e,{resetForm:r}=o;l((0,d.kz)({email:t,password:n})),r()},children:n=>{let{isSubmitting:r,touched:i,errors:a}=n;return(0,m.jsxs)(C,{children:[(0,m.jsx)(z,{children:"Sign Up"}),(0,m.jsx)(E,{htmlFor:"email",children:"Enter your email"}),(0,m.jsx)(P,{type:"email",name:"email",id:"email",placeholder:"E-mail",autoComplete:"email",error:i.email&&a.email?"true":"false"}),(0,m.jsx)(B,{name:"email",component:"div"}),(0,m.jsxs)(E,{htmlFor:"password",children:["Enter your password",(0,m.jsx)(L,{onClick:()=>o(!e),children:(0,m.jsx)("svg",{children:(0,m.jsx)("use",{href:N.A+(e?"#eye-show":"#eye-hide")})})})]}),(0,m.jsx)(P,{type:e?"text":"password",name:"password",id:"password",placeholder:"Password",error:i.password&&a.password?"true":"false",autoComplete:"new-password"}),(0,m.jsx)(B,{name:"password",component:"div"}),(0,m.jsxs)(E,{htmlFor:"repeatPassword",children:["Repeat Password",(0,m.jsx)(L,{onClick:()=>s(!t),children:(0,m.jsx)("svg",{children:(0,m.jsx)("use",{href:N.A+(t?"#eye-show":"#eye-hide")})})})]}),(0,m.jsx)(P,{type:t?"text":"password",name:"repeatPassword",id:"repeatPassword",placeholder:"Repeat your password",error:i.repeatPassword&&a.repeatPassword?"true":"false",autoComplete:"new-password"}),(0,m.jsx)(B,{name:"repeatPassword",component:"div"}),(0,m.jsx)(G,{type:"submit",disabled:r,children:"Sign Up"}),(0,m.jsx)(S,{onClick:()=>p("/signin"),children:"Sign in"}),(0,m.jsx)(u,{})]})}}),(0,m.jsx)(A,{})]})};var D=t(4667),O=t(3505);const I=t.p+"static/media/backgroundMobile.f4baac1d2b7c8a94ec56b99e9a5bfc7e.svg",T=w.Ay.div`
  height: 90vh;

  @media screen and (min-width: 768px) {
    height: 92vh;
  }
`,U=w.Ay.section`
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
`;w.Ay.div`
  background-position: center 28px;
  background-image: url(${I});
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
`,w.Ay.button`
  margin-top: 16px;
  width: 100%;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #4285f4;  // Google Blue Color
  color: ${b.$.colors.white};
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
`;var Y=t(343),K=t(6996);const V=()=>{const e=(0,r.d4)(K.Di);return(0,m.jsx)(T,{children:(0,m.jsx)(U,{children:e?(0,m.jsx)(Y.A,{}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(q,{})})})})}},2831:(e,o,t)=>{e.exports=t.p+"static/media/bottle-desk-1x.f101329f2fabf31caa2d.png"},4222:(e,o,t)=>{e.exports=t.p+"static/media/bottle-desk-2x.1775bd96fc412d403b4f.png"},106:(e,o,t)=>{e.exports=t.p+"static/media/bottle-mob-1x.67bfbdf7fb46f03c7cdc.png"},9131:(e,o,t)=>{e.exports=t.p+"static/media/bottle-mob-2x.c696ce1d8650a849a063.png"},179:(e,o,t)=>{e.exports=t.p+"static/media/bottle-tab-1x.ecf25e00b68bab106bc4.png"},18:(e,o,t)=>{e.exports=t.p+"static/media/bottle-tab-2x.5c52f919da333e45d456.png"}}]);
//# sourceMappingURL=989.432315ed.chunk.js.map