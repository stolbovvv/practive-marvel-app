import{j as e,r as n,S as m}from"./index-5bcb19cd.js";import{g as d,E as h,a as _,S as u}from"./site-hero-24a2aeb3.js";function x(r,a=150){return r.length>a?r.slice(0,a).trim()+"...":r}function j({data:r}){const a=x(r.descr),t=d(r.image);return e.jsxs("div",{className:"random-character__content",children:[e.jsx("img",{className:"random-character__content-image",src:r.image,alt:r.name+" image",style:t}),e.jsxs("div",{className:"random-character__content-body",children:[e.jsx("p",{className:"random-character__content-name",children:r.name}),e.jsx("p",{className:"random-character__content-text",children:a||"Chatacter description not found..."}),e.jsxs("div",{className:"random-character__content-footer",children:[e.jsx("a",{className:"button button_red",href:r.home,target:"_blank",rel:"noopener noreferrer",children:"Home page"}),e.jsx("a",{className:"button button_black",href:r.wiki,target:"_blank",rel:"noopener noreferrer",children:"Wiki"})]})]})]})}function f(){const[r,a]=n.useState(null),[t,c]=n.useState(!1),[o,l]=n.useState(null),i=()=>{l(null),c(!0),_.getSingleCharacter({id:Math.floor(Math.random()*500+1011e3)}).then(s=>{c(!1),a(s[0])}).catch(s=>{c(!1),l(s)})};return n.useEffect(()=>{i()},[]),e.jsx("section",{className:"section random-character",children:e.jsxs("div",{className:"container random-character__container",children:[e.jsx("h2",{className:"title random-character__title",children:"Random character for today!"}),e.jsxs("div",{className:"random-character__body",children:[o?e.jsx(h,{className:"random-character__error"}):null,t?e.jsx(m,{className:"random-character__spinner"}):null,!t&&!o&&r?e.jsx(j,{data:r}):null,e.jsxs("div",{className:"random-character__banner",children:[e.jsx("p",{className:"random-character__banner-title",children:"Do you want to get to know him better?"}),e.jsxs("div",{className:"random-character__banner-footer",children:[e.jsx("p",{className:"random-character__banner-text",children:"Or choose another one:"}),e.jsx("button",{className:"random-character__banner-button button button_red",onClick:i,children:"TRY IT"})]})]})]})]})})}function N(){return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Marvel data base"}),e.jsx(f,{})]})}export{N as default};
