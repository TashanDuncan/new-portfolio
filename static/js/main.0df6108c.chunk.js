(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,s,c){},39:function(e,s,c){"use strict";c.r(s);var t=c(0),i=c(1),l=c.n(i),a=c(24),n=c.n(a),r=(c(31),c(13)),o=c(14),j=c(16),d=c(15),m=function(e){Object(j.a)(c,e);var s=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return(e=s.call.apply(s,[this].concat(i))).state={isExpanded:!1},e.showNavMenu=function(){var s=document.getElementById("navigation");e.state.isExpanded?(e.setState({isExpanded:!1}),s.classList.remove("show")):!1===e.state.isExpanded&&(e.setState({isExpanded:!0}),s.classList.add("show"))},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(t.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navigation","aria-controls":"navigation","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.showNavMenu,children:Object(t.jsx)("span",{className:"navbar-toggler-icon"})})}}]),c}(i.Component),b=c(2),h=c(4),x=function(){return Object(t.jsx)("div",{class:"my-2",children:Object(t.jsxs)("a",{class:"btn btn-primary",href:"contact.html",target:"_blank",children:[Object(t.jsx)(b.a,{icon:h.h,fixedWidth:!0,className:"mr-2"}),"Contact Me"]})})},u=function(e){Object(j.a)(c,e);var s=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return(e=s.call.apply(s,[this].concat(i))).state={isdark:!1},e.handleDarkMode=function(s){var c=s.target,t=document.body;!0===c.checked?(e.setState({isdark:!0}),t.classList.add("dark-mode")):!1===c.checked&&(e.setState({isdark:!1}),t.classList.remove("dark-mode"))},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(t.jsxs)("div",{class:"dark-mode-toggle text-center w-100",children:[Object(t.jsx)("hr",{class:"mb-4"}),Object(t.jsxs)("h4",{class:"toggle-name mb-3 ",children:[Object(t.jsx)(b.a,{icon:h.a,className:"mr-1"}),"Dark Mode"]}),Object(t.jsx)("input",{class:"toggle",id:"darkmode",type:"checkbox",onChange:this.handleDarkMode}),Object(t.jsx)("label",{class:"toggle-btn mx-auto mb-0",for:"darkmode"})]})}}]),c}(i.Component),O=c(8),p=function(e){Object(j.a)(c,e);var s=Object(d.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(t.jsxs)("ul",{className:"navbar-nav flex-column text-left",children:[Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsxs)(O.c,{className:"nav-link",exact:!0,to:"/",children:[Object(t.jsx)(b.a,{icon:h.j,fixedWidth:!0,className:"mr-2"}),"About Me",Object(t.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsxs)(O.c,{className:"nav-link",to:"portfolio",children:[Object(t.jsx)(b.a,{icon:h.g,fixedWidth:!0,className:"mr-2"}),"Portfolio"]})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsxs)(O.c,{className:"nav-link",to:"cv",children:[Object(t.jsx)(b.a,{icon:h.f,fixedWidth:!0,className:"mr-2"}),"CV"]})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsxs)(O.c,{className:"nav-link",to:"blog-home",children:[Object(t.jsx)(b.a,{icon:h.c,fixedWidth:!0,className:"mr-2"}),"Blog"]})})]})}}]),c}(i.Component),g=c(7),v=function(){return Object(t.jsxs)("ul",{className:"social-list list-inline py-2 mx-auto",children:[Object(t.jsx)("li",{className:"list-inline-item",children:Object(t.jsx)("a",{href:"#",children:Object(t.jsx)(b.a,{icon:g.k,fixedWidth:!0})})}),Object(t.jsx)("li",{className:"list-inline-item",children:Object(t.jsx)("a",{href:"#",children:Object(t.jsx)(b.a,{icon:g.g,fixedWidth:!0})})}),Object(t.jsx)("li",{className:"list-inline-item",children:Object(t.jsx)("a",{href:"#",children:Object(t.jsx)(b.a,{icon:g.b,fixedWidth:!0})})}),Object(t.jsx)("li",{className:"list-inline-item",children:Object(t.jsx)("a",{href:"#",children:Object(t.jsx)(b.a,{icon:g.d,fixedWidth:!0})})}),Object(t.jsx)("li",{className:"list-inline-item",children:Object(t.jsx)("a",{href:"#",children:Object(t.jsx)(b.a,{icon:g.m,fixedWidth:!0})})})]})},f=function(){return Object(t.jsxs)("div",{className:"profile-section pt-3 pt-lg-0",children:[Object(t.jsx)("img",{class:"profile-image mb-3 rounded-circle mx-auto",src:"data:image/png;base64,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",alt:"Tashan"}),Object(t.jsx)("div",{class:"bio mb-3",children:"Hi, my name is Tay Duncan and I'm a Web Developer. Welcome to my personal website!"}),Object(t.jsx)(v,{}),Object(t.jsx)("hr",{})]})},A=function(){return Object(t.jsxs)("div",{id:"navigation",class:"collapse navbar-collapse flex-column",children:[Object(t.jsx)(f,{}),Object(t.jsx)(p,{}),Object(t.jsx)(x,{}),Object(t.jsx)(u,{})]})},y=function(e){return Object(t.jsx)("header",{className:"header text-center",children:Object(t.jsxs)("div",{className:"force-overflow",children:[Object(t.jsx)("h1",{className:"blog-name pt-lg-4 mb-0",children:"Tay Duncan"}),Object(t.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:[Object(t.jsx)(m,{}),Object(t.jsx)(A,{})]})]})})},S=c.p+"static/media/profile-lg.9a919bf4.jpg",q=c.p+"static/media/Tay-Duncan-CV.17ca3da2.pdf",w=function(){return Object(t.jsx)("section",{className:"about-me-section p-3 p-lg-5 theme-bg-light",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("div",{className:"profile-teaser media flex-column flex-lg-row",children:[Object(t.jsxs)("div",{className:"media-body",children:[Object(t.jsx)("h2",{className:"name font-weight-bold mb-1",children:"Tay Duncan"}),Object(t.jsx)("div",{className:"tagline mb-3",children:"Web Developer"}),Object(t.jsxs)("div",{className:"bio mb-4",children:["I'm a aspiring web engineer who has a passion for building complex scalable web apps. I write about web development on ",Object(t.jsx)("a",{className:"link-on-bg",href:"www.codingmugen.com",children:"my blog"}),". When I'm not working on a project you will find me at the gym, playing computer games (Currently in love with Elden Ring) or feeding my unhealthy addiction to a Manga called Berserk! ",Object(t.jsx)("br",{})]}),Object(t.jsxs)("div",{className:"bio mb-2",children:["Check out my project ",Object(t.jsx)("a",{className:"link-on-bg",href:"projects.html",children:"portfolio"})," and ",Object(t.jsx)("a",{className:"link-on-bg",href:"resume.html",children:"online CV"}),"."]}),Object(t.jsxs)("div",{className:"mb-4",children:[Object(t.jsxs)(O.b,{className:"btn btn-primary mr-2 mb-3",to:"portfolio",children:[Object(t.jsx)(b.a,{icon:h.b,className:"mr-2"}),Object(t.jsx)("span",{className:"d-none d-md-inline",children:"View"})," Portfolio"]}),Object(t.jsxs)("a",{className:"btn btn-secondary mb-3",href:q,target:"_blank",rel:"noreferrer",children:[Object(t.jsx)(b.a,{icon:h.f,className:"mr-2"}),Object(t.jsx)("span",{className:"d-none d-md-inline",children:"View"})," CV"]})]})]}),Object(t.jsx)("img",{className:"profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0",src:S,alt:"Tashan"})]})})})},V=function(){return Object(t.jsx)("section",{class:"overview-section p-3 p-lg-5",children:Object(t.jsxs)("div",{class:"container",children:[Object(t.jsx)("h2",{class:"section-title font-weight-bold mb-3",children:"My Current Tech Stack"}),Object(t.jsxs)("div",{class:"section-intro mb-5",children:["I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my ",Object(t.jsx)("a",{href:"resume.html",children:"online CV"})," and",Object(t.jsx)("a",{href:"portfolio.html",children:"project portfolio"}),"."]}),Object(t.jsxs)("div",{class:"row",children:[Object(t.jsx)("div",{class:"item col-6 col-lg-3",children:Object(t.jsxs)("div",{class:"item-inner",children:[Object(t.jsxs)("div",{class:"item-icon",children:[Object(t.jsx)(b.a,{className:"mr-2",icon:g.c}),Object(t.jsx)(b.a,{icon:g.a})]}),Object(t.jsx)("h3",{class:"item-title",children:"HTML & CSS"}),Object(t.jsx)("div",{class:"item-desc",children:"Able to convert design mockups to semantic, compliant and SEO friendly HTML & CSS with emphasis on accessibility for devices such as screen readers."})]})}),Object(t.jsx)("div",{class:"item col-6 col-lg-3",children:Object(t.jsxs)("div",{class:"item-inner",children:[Object(t.jsx)("div",{class:"item-icon",children:Object(t.jsx)(b.a,{icon:g.i})}),Object(t.jsx)("h3",{class:"item-title",children:"PHP"}),Object(t.jsx)("div",{class:"item-desc"})]})}),Object(t.jsx)("div",{class:"item col-6 col-lg-3",children:Object(t.jsxs)("div",{class:"item-inner",children:[Object(t.jsx)("div",{class:"item-icon",children:Object(t.jsx)(b.a,{icon:g.l})}),Object(t.jsx)("h3",{class:"item-title",children:"WordPress"}),Object(t.jsx)("div",{class:"item-desc",children:"Experienced with the WordPress theme and plugin development archetchure with woocommerce for transactional websites."})]})}),Object(t.jsx)("div",{class:"item col-6 col-lg-3",children:Object(t.jsxs)("div",{class:"item-inner",children:[Object(t.jsx)("div",{class:"item-icon",children:Object(t.jsx)(b.a,{icon:g.f})}),Object(t.jsx)("h3",{class:"item-title",children:"Laravel"}),Object(t.jsx)("div",{class:"item-desc"})]})}),Object(t.jsx)("div",{class:"item col-6 col-lg-3",children:Object(t.jsxs)("div",{class:"item-inner",children:[Object(t.jsx)("div",{class:"item-icon",children:Object(t.jsx)(b.a,{className:"mr-2",icon:h.d})}),Object(t.jsx)("h3",{class:"item-title",children:"SQL"}),Object(t.jsx)("div",{class:"item-desc"})]})}),Object(t.jsx)("div",{class:"item col-6 col-lg-3",children:Object(t.jsxs)("div",{class:"item-inner",children:[Object(t.jsx)("div",{class:"item-icon",children:Object(t.jsx)(b.a,{icon:g.e})}),Object(t.jsx)("h3",{class:"item-title",children:"JavaScript"}),Object(t.jsx)("div",{class:"item-desc"})]})}),Object(t.jsx)("div",{class:"item col-6 col-lg-3",children:Object(t.jsxs)("div",{class:"item-inner",children:[Object(t.jsx)("div",{class:"item-icon",children:Object(t.jsx)(b.a,{icon:g.h})}),Object(t.jsx)("h3",{class:"item-title",children:"Linux CLI"}),Object(t.jsx)("div",{class:"item-desc",children:"test"})]})}),Object(t.jsx)("div",{class:"item col-6 col-lg-3",children:Object(t.jsxs)("div",{class:"item-inner",children:[Object(t.jsx)("div",{class:"item-icon",children:Object(t.jsx)(b.a,{icon:g.j})}),Object(t.jsx)("h3",{class:"item-title",children:"Sass"}),Object(t.jsx)("div",{class:"item-desc",children:"For more complex design work i use Sass in place of regular CSS as this enables things like variables, nested rules, inline imports and more!"})]})})]})]})})},N=function(){return Object(t.jsx)("section",{class:"cta-section theme-bg-light py-5",children:Object(t.jsxs)("div",{class:"container text-center single-col-max-width",children:[Object(t.jsx)("h2",{class:"heading",children:"Portfolio"}),Object(t.jsx)("div",{class:"intro",children:Object(t.jsx)("p",{children:"Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?"})}),Object(t.jsxs)("a",{class:"btn btn-primary",href:"contact.html",target:"_blank",children:[Object(t.jsx)("i",{class:"fas fa-paper-plane mr-2"}),"Hire Me"]})]})})},Q=c.p+"static/media/poeticflower.c12124e6.png",k=c.p+"static/media/amadeus.c9c00dd1.png",C=function(){return Object(t.jsx)("section",{class:"projects-list px-3 py-5 p-md-5",children:Object(t.jsxs)("div",{class:"container",children:[Object(t.jsx)("div",{class:"text-center",children:Object(t.jsxs)("ul",{id:"filters",class:"filters mb-5 mx-auto pl-0",children:[Object(t.jsx)("li",{class:"type active mb-3 mb-lg-0","data-filter":"*",children:"All"}),Object(t.jsx)("li",{class:"type  mb-3 mb-lg-0","data-filter":".frontend",children:"Frontend"}),Object(t.jsx)("li",{class:"type  mb-3 mb-lg-0","data-filter":".fullstack",children:"Full Stack"}),Object(t.jsx)("li",{class:"type  mb-3 mb-lg-0","data-filter":".backend",children:"Backend"})]})}),Object(t.jsxs)("div",{class:"project-cards row isotope",children:[Object(t.jsx)("div",{class:"isotope-item col-md-6 mb-5 fullstack",children:Object(t.jsxs)("div",{class:"card project-card",children:[Object(t.jsxs)("div",{class:"row no-gutters",children:[Object(t.jsx)("div",{class:"col-lg-4 card-img-holder",children:Object(t.jsx)("img",{src:Q,class:"card-img",alt:"project"})}),Object(t.jsx)("div",{class:"col-lg-8",children:Object(t.jsxs)("div",{class:"card-body",children:[Object(t.jsx)("h5",{class:"card-title",children:Object(t.jsx)("a",{href:"poeticflowerx",class:"theme-link",children:"PoeticFlowerX.com"})}),Object(t.jsx)("p",{class:"card-text",children:"A side project developed for a friend who needed a website for a blog and Ecommerce to sell Prints. I created a custom wordpress theme and a custom contact form Plugin."}),Object(t.jsx)("p",{class:"card-text",children:Object(t.jsx)("small",{class:"text-muted",children:"Client: PoeticFlowerX"})})]})})]}),Object(t.jsx)("div",{class:"link-mask",children:Object(t.jsx)("div",{class:"link-mask-text",children:Object(t.jsxs)("a",{class:"btn btn-secondary",href:"poeticflowerx",children:[Object(t.jsx)(b.a,{icon:h.e,className:"mr-2"}),"View Case Study"]})})})]})}),Object(t.jsx)("div",{class:"isotope-item col-md-6 mb-5 frontend",children:Object(t.jsxs)("div",{class:"card project-card",children:[Object(t.jsxs)("div",{class:"row no-gutters",children:[Object(t.jsx)("div",{class:"col-lg-4 card-img-holder",children:Object(t.jsx)("img",{src:k,class:"card-img",alt:"project"})}),Object(t.jsx)("div",{class:"col-lg-8",children:Object(t.jsxs)("div",{class:"card-body",children:[Object(t.jsx)("h5",{class:"card-title",children:Object(t.jsx)("a",{href:"amadeus",class:"theme-link",children:"Employee Dashboard Mockup"})}),Object(t.jsx)("p",{class:"card-text",children:"A mockup for an employee dashboard created with HTML CSS and Vanilla JS. I also used the JavaScript library ChartJS for Data Visualization."}),Object(t.jsx)("p",{class:"card-text",children:Object(t.jsx)("small",{class:"text-muted",children:"Client: none"})})]})})]}),Object(t.jsx)("div",{class:"link-mask",children:Object(t.jsx)("div",{class:"link-mask-text",children:Object(t.jsxs)("a",{class:"btn btn-secondary",href:"amadeus",children:[Object(t.jsx)(b.a,{icon:h.e,className:"mr-2"}),"View Case Study"]})})})]})})]})]})})},U=function(){return Object(t.jsx)("section",{class:"promo-section theme-bg-light py-5 text-center",children:Object(t.jsxs)("div",{class:"container single-col-max-width",children:[Object(t.jsx)("h2",{class:"title",children:"Want me to help with your project?"}),Object(t.jsx)("p",{children:"If you take on freelance work, you can use this section to prompt any potential clients to get in touch with you with their project requirements."}),Object(t.jsx)("div",{class:"text-center",children:Object(t.jsxs)("a",{class:"btn btn-primary",href:"contact.html",target:"_blank",children:[Object(t.jsx)("i",{class:"fas fa-paper-plane mr-2"}),"Hire Me"]})})]})})},W=function(){return Object(t.jsx)("section",{class:"cta-section theme-bg-light py-5",children:Object(t.jsxs)("div",{class:"container single-col-max-width",children:[Object(t.jsx)("h2",{class:"heading text-center",children:"Case Study: PoeticFlowerX.com"}),Object(t.jsx)("div",{class:"project-intro text-center",children:Object(t.jsx)("p",{class:"mb-0 lead",children:"Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likely to land your next project or job."})})]})})},F=function(){return Object(t.jsxs)("div",{class:"project-sections py-5",children:[Object(t.jsxs)("div",{class:"project-section mb-5",children:[Object(t.jsx)("h3",{class:"project-section-title mb-3",children:"Project Overview"}),Object(t.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus."," "]})]}),Object(t.jsxs)("div",{class:"project-section mb-5",children:[Object(t.jsx)("h3",{class:"project-section-title",children:"The Challenge"}),Object(t.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus."," "]})]}),Object(t.jsxs)("div",{class:"project-section mb-5",children:[Object(t.jsx)("h3",{class:"project-section-title",children:"The Approach & Solution"}),Object(t.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus."," "]}),Object(t.jsxs)("div",{class:"row mt-5",children:[Object(t.jsx)("div",{class:"col-12 col-lg-6 mb-5",children:Object(t.jsx)("img",{class:"img-fluid rounded",src:"assets/images/project/project-figure-1.jpg",alt:"image"})}),Object(t.jsx)("div",{class:"col-12 col-lg-6 mb-5",children:Object(t.jsx)("img",{class:"img-fluid rounded",src:"assets/images/project/project-figure-2.jpg",alt:"image"})})]}),Object(t.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus."," "]})]}),Object(t.jsxs)("div",{class:"project-section mb-5",children:[Object(t.jsx)("h3",{class:"project-section-title mb-3",children:"The Results"}),Object(t.jsx)("div",{class:"metrics mb-4",children:Object(t.jsxs)("div",{class:"row",children:[Object(t.jsx)("div",{class:"metric col-6 col-xl-3 mb-3",children:Object(t.jsxs)("div",{class:"inner p-3 theme-bg-light",children:[Object(t.jsx)("div",{class:"metric-name",children:"Efficiency"}),Object(t.jsxs)("div",{class:"metric-data mb-2",children:["20% ",Object(t.jsx)("span",{class:"unit",children:"up"})]}),Object(t.jsx)("div",{class:"metric-desc",children:"Metric description lorem ipsum dolor sit amet."})]})}),Object(t.jsx)("div",{class:"metric col-6 col-xl-3 mb-3",children:Object(t.jsxs)("div",{class:"inner p-3 theme-bg-light",children:[Object(t.jsx)("div",{class:"metric-name",children:"Customer Satisfaction"}),Object(t.jsxs)("div",{class:"metric-data mb-2",children:["14% ",Object(t.jsx)("span",{class:"unit",children:"up"})]}),Object(t.jsx)("div",{class:"metric-desc",children:"Metric description lorem ipsum dolor sit amet."})]})}),Object(t.jsx)("div",{class:"metric col-6 col-xl-3 mb-3",children:Object(t.jsxs)("div",{class:"inner p-3 theme-bg-light",children:[Object(t.jsx)("div",{class:"metric-name",children:"Sales Generated"}),Object(t.jsx)("div",{class:"metric-data mb-2",children:"$130K"}),Object(t.jsx)("div",{class:"metric-desc",children:"Metric description lorem ipsum dolor sit amet."})]})}),Object(t.jsx)("div",{class:"metric col-6 col-xl-3 mb-3",children:Object(t.jsxs)("div",{class:"inner p-3 theme-bg-light",children:[Object(t.jsx)("div",{class:"metric-name",children:"Overall Cost"}),Object(t.jsxs)("div",{class:"metric-data mb-2",children:["20% ",Object(t.jsx)("span",{class:"unit",children:"down"})]}),Object(t.jsx)("div",{class:"metric-desc",children:"Metric description lorem ipsum dolor sit amet."})]})})]})}),Object(t.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus."," "]})]}),Object(t.jsx)("div",{class:"project-section mb-5",children:Object(t.jsx)("h3",{class:"project-section-title mb-3",children:"Client Testimonial"})}),Object(t.jsxs)("div",{class:"client-quote",children:[Object(t.jsxs)("div",{class:"quote-holder",children:[Object(t.jsx)("blockquote",{class:"quote-content",children:"Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis."}),Object(t.jsx)(b.a,{icon:h.i})]}),Object(t.jsxs)("div",{class:"source-holder",children:[Object(t.jsx)("div",{class:"source-profile",children:Object(t.jsx)("img",{src:"assets/images/clients/profile-4.png",alt:"image"})}),Object(t.jsxs)("div",{class:"meta",children:[Object(t.jsx)("div",{class:"name",children:"James Lee"}),Object(t.jsx)("div",{class:"info",children:"Product Manager, Amazon"})]})]})]})]})},B=function(){return Object(t.jsxs)("div",{class:"project-meta media flex-column flex-md-row p-4 theme-bg-light",children:[Object(t.jsx)("img",{class:"project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block",src:Q,alt:""}),Object(t.jsx)("div",{class:"media-body",children:Object(t.jsxs)("div",{class:"client-info",children:[Object(t.jsx)("h3",{class:"client-name font-weight-bold mb-4",children:"PoeticFlowerX"}),Object(t.jsxs)("ul",{class:"client-meta list-unstyled",children:[Object(t.jsxs)("li",{class:"mb-2",children:[Object(t.jsx)("i",{class:"fas fa-industry fa-fw mr-2"}),Object(t.jsx)("strong",{children:"Industry:"})," Creative Arts"]}),Object(t.jsxs)("li",{class:"mb-2",children:[Object(t.jsx)("i",{class:"fas fa-users fa-fw mr-2"}),Object(t.jsx)("strong",{children:"Size:"})," 1"]}),Object(t.jsxs)("li",{class:"mb-2",children:[Object(t.jsxs)("strong",{children:[Object(t.jsx)("i",{class:"fas fa-link fa-fw mr-2"}),"Website:"]}),Object(t.jsxs)("a",{class:"theme-link",href:"#",children:[" ","poeticflowerx.com"]})]})]}),Object(t.jsx)("div",{class:"client-bio mb-4",children:"Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}),Object(t.jsx)("h4",{class:"subheading mb-3",children:"Project Requirements"}),Object(t.jsxs)("ul",{class:"mb-0",children:[Object(t.jsx)("li",{class:"mb-2",children:"Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit."}),Object(t.jsx)("li",{class:"mb-2",children:"Requirement donec pede justo, fringilla vel, aliquet nec."}),Object(t.jsxs)("li",{class:"mb-2",children:["Requirement phasellus ullamcorper ipsum rutrum nunc."," "]})]})]})})]})},K=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)(W,{}),Object(t.jsx)("section",{class:"project px-3 py-5 p-md-5",children:Object(t.jsxs)("div",{class:"container",children:[Object(t.jsx)(B,{}),Object(t.jsx)(F,{})]})}),Object(t.jsx)(U,{})]})},H=c(5),R=function(){return Object(t.jsx)("section",{class:"featured-section p-3 p-lg-5",children:Object(t.jsxs)("div",{class:"container",children:[Object(t.jsx)("h2",{class:"section-title font-weight-bold mb-5",children:"Featured Projects"}),Object(t.jsxs)("div",{class:"row",children:[Object(t.jsx)("div",{class:"col-md-6 mb-5",children:Object(t.jsxs)("div",{class:"card project-card",children:[Object(t.jsxs)("div",{class:"row no-gutters",children:[Object(t.jsx)("div",{class:"col-lg-4 card-img-holder",children:Object(t.jsx)("img",{src:Q,class:"card-img",alt:"project"})}),Object(t.jsx)("div",{class:"col-lg-8",children:Object(t.jsxs)("div",{class:"card-body",children:[Object(t.jsx)("h5",{class:"card-title",children:Object(t.jsx)("a",{href:"project.html",class:"theme-link",children:"PoeticFlowerX.com"})}),Object(t.jsx)("p",{class:"card-text",children:"A side project developed for a friend who needed a website for a blog and Ecommerce to sell Prints. I created a custom wordpress theme and a custom contact form Plugin."}),Object(t.jsx)("p",{class:"card-text",children:Object(t.jsx)("small",{class:"text-muted",children:"Client: PoeticFlowerX"})})]})})]}),Object(t.jsx)("div",{class:"link-mask",children:Object(t.jsx)("div",{class:"link-mask-text",children:Object(t.jsxs)(O.b,{className:"btn btn-secondary",to:"poeticflowerx",children:[Object(t.jsx)(b.a,{icon:h.e,className:"mr-2"}),"View Case Study"]})})})]})}),Object(t.jsx)("div",{class:"col-md-6 mb-5",children:Object(t.jsxs)("div",{class:"card project-card",children:[Object(t.jsxs)("div",{class:"row no-gutters",children:[Object(t.jsx)("div",{class:"col-lg-4 card-img-holder",children:Object(t.jsx)("img",{src:k,class:"card-img",alt:"project"})}),Object(t.jsx)("div",{class:"col-lg-8",children:Object(t.jsxs)("div",{class:"card-body",children:[Object(t.jsx)("h5",{class:"card-title",children:Object(t.jsx)("a",{href:"project.html",class:"theme-link",children:"Employee Dashboard Mockup"})}),Object(t.jsx)("p",{class:"card-text",children:"A mockup for an employee dashboard created with HTML CSS and Vanilla JS. I also used the JavaScript library ChartJS for Data Visualization."}),Object(t.jsx)("p",{class:"card-text",children:Object(t.jsx)("small",{class:"text-muted",children:"Client: none"})})]})})]}),Object(t.jsx)("div",{class:"link-mask",children:Object(t.jsx)("div",{class:"link-mask-text",children:Object(t.jsxs)("a",{class:"btn btn-secondary",href:"project.html",children:[Object(t.jsx)(b.a,{icon:h.e,className:"mr-2"}),"View Case Study"]})})})]})})]}),Object(t.jsx)("div",{class:"text-center py-3",children:Object(t.jsxs)("a",{href:"portfolio.html",class:"btn btn-primary",children:[Object(t.jsx)("i",{class:"fas fa-arrow-alt-circle-right mr-2"}),"View Portfolio"]})})]})})},I=function(){return Object(t.jsx)("div",{className:"main-wrapper",children:Object(t.jsxs)(H.c,{children:[Object(t.jsxs)(H.a,{exact:!0,path:"/",children:[Object(t.jsx)(w,{}),Object(t.jsx)(V,{}),Object(t.jsx)("div",{class:"container",children:Object(t.jsx)("hr",{})}),Object(t.jsx)(R,{})]}),Object(t.jsxs)(H.a,{exact:!0,path:"/portfolio",children:[Object(t.jsx)(N,{}),Object(t.jsx)(C,{})]}),Object(t.jsx)(H.a,{exact:!0,path:"/poeticflowerx",children:Object(t.jsx)(K,{})})]})})};function D(){var e=Object(H.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var P=function(){return Object(t.jsxs)(O.a,{children:[Object(t.jsx)(D,{}),Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(y,{}),Object(t.jsx)(I,{})]})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(s){var c=s.getCLS,t=s.getFID,i=s.getFCP,l=s.getLCP,a=s.getTTFB;c(e),t(e),i(e),l(e),a(e)}))};n.a.render(Object(t.jsx)(l.a.StrictMode,{children:Object(t.jsx)(P,{})}),document.getElementById("root")),J()}},[[39,1,2]]]);
//# sourceMappingURL=main.0df6108c.chunk.js.map