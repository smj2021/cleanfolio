(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(10),i=n(3),s=n(1),a=n(0),o=Object(s.createContext)(),l=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(i.a)(n,2),l=c[0],r=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");r(e.matches?"dark":"light"),e.addEventListener("change",(function(e){r(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(o.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),r(e)}}],children:t})},r="https://smj2021.github.io/cleanfolio",j="MS.",h="Michael Schwartz",d="Full Stack Software Engineer",u="I'm a problem solver; driven to create stunning, functional, enjoyable user interactions. I leverage my past as an intelligence officer, diplomat, and consulting manager to elicit user stories, then wireframe and map requirements to industry best practices using my training in human-centered design. I love to collaborate, share ideas, and work holistically to build resilient, scalable, engaging solutions to client challenges.",b="https://schwartzbewithyou.com/wp-content/uploads/2021/12/Michael-Schwartz-CV.pdf",m={linkedin:"https://www.linkedin.com/in/schwartzbewithyou/",github:"https://github.com/smj2021"},f=[{school:"General Assembly",degree:"Software Engineering Immersive Certificate",year:"2021"},{school:"American University, School of International Service",degree:"M.A. International Peace and Conflict Resolution",year:"2012"},{school:"University of Pittsburgh",degree:"B.A. Political Science (Cum Laude)",year:"2009"}],p=[{name:"Cal Count",description:"Cal Count is a Python and Django web application I built as an addition to my team project, Workout City (PUMP). Data storage is performed by the integration of a PostgreSQL database.",stack:["Python","Django","PostgreSQL","HTML5","CSS3","Bootstrap"],sourceCode:"https://github.com/smj2021/CalCount",livePreview:"Not yet deployed"},{name:"PUMP",description:"PUMP is a Python and Django web application which allows users to securely create and manage fitness routines and nutrition plans from their desktop or mobile device. Data storage is performed by the integration of a PostgreSQL database.",stack:["Python","Django","PostgreSQL","HTML5","CSS3","Bootstrap"],sourceCode:"https://github.com/fattony26/workout-city",livePreview:"https://workoutcity.herokuapp.com/"},{name:"Anime City",description:"Anime City is a full-stack (MERN) web application utilizing the Jikan API to allow users to query and create lists of their favorite anime and manga series, as well as connecting them to platforms on which they are able to watch the items on their lists.",stack:["JavaScript","ExpressJS","Node.js","React","MongoDB","HTML5","CSS3"],sourceCode:"https://github.com/smj2021/anime_city",livePreview:"https://anime-city-mgm.herokuapp.com/"},{name:"Chef's Corner",description:"Chef's Corner is a full-stack (MEN) web application built allowing users to add recipes to a database and build individualized cookbooks for storing their favorite recipes.",stack:["JavaScript","ExpressJS","Node.js","MongoDB","HTML5","CSS3"],sourceCode:"https://github.com/smj2021/foodbook",livePreview:"https://project-food-book.herokuapp.com/"}],O=["Python","JavaScript","Django","React","ExpressJS","Node.js","HTML","CSS","MongoDB","PostgreSQL","Google Cloud Platform","Microsoft Azure","RESTful APIs","Git","CI/CD"],x="mjschwartz515@gmail.com",g=n(16),k=n.n(g),v=n(14),N=n.n(v),_=n(18),w=n.n(_),y=n(17),C=n.n(y),S=(n(28),function(){var e=Object(s.useContext)(o),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(s.useState)(!1),r=Object(i.a)(l,2),j=r[0],h=r[1],d=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[f.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#educations",onClick:d,className:"link link--nav",children:"Education"})}):null,p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,x?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(N.a,{}):Object(a.jsx)(k.a,{})}),Object(a.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(C.a,{}):Object(a.jsx)(w.a,{})})]})}),P=(n(34),function(){var e=r,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(S,{})]})}),M=n(12),E=n.n(M),L=n(19),I=n.n(L),D=(n(35),function(){var e=h,t=d,n=u,c=b,i=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I'm ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(I.a,{})})]})]})]})}),z=n(4),A=n.n(z),J=n(20),B=n.n(J),T=(n(37),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("img",{src:t.img,alt:""}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},A()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(B.a,{})})]})}),H=(n(38),function(){return p.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(a.jsx)(T,{project:e},A()())}))})]}):null}),R=(n(39),function(){return O.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},A()())}))})]}):null}),Q=(n(40),function(e){var t=e.education;return Object(a.jsxs)("div",{className:"education",children:[Object(a.jsx)("h3",{children:t.school}),Object(a.jsx)("p",{className:"education__description",children:t.degree}),Object(a.jsx)("p",{className:"education__year",children:t.year})]})}),U=(n(41),function(){return f.length?Object(a.jsxs)("section",{id:"educations",className:"section educations",children:[Object(a.jsx)("h2",{className:"section__title",children:"Education"}),Object(a.jsx)("div",{className:"educations__grid",children:f.map((function(e){return Object(a.jsx)(Q,{education:e},A()())}))})]}):null}),G=n(21),q=n.n(G),F=(n(42),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(q.a,{fontSize:"large"})})}):null}),V=(n(43),function(){return x?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(x),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),W=(n(44),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/smj2021/cleanfolio",className:"link footer__link",children:"Created By Michael Schwartz"})})}),Y=(n(45),function(){var e=Object(s.useContext)(o),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(P,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(D,{}),Object(a.jsx)(H,{}),Object(a.jsx)(R,{}),Object(a.jsx)(U,{}),Object(a.jsx)(V,{})]}),Object(a.jsx)(F,{}),Object(a.jsx)(W,{})]})});n(46);Object(c.render)(Object(a.jsx)(l,{children:Object(a.jsx)(Y,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.7eec2cf8.chunk.js.map