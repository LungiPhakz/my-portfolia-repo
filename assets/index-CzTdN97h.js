(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{name:`HTML5`,icon:`file-code`,level:`Advanced`,color:`from-orange-500 to-red-500`},{name:`CSS3`,icon:`palette`,level:`Advanced`,color:`from-blue-500 to-cyan-400`},{name:`JavaScript`,icon:`braces`,level:`Advanced`,color:`from-yellow-400 to-orange-500`},{name:`PHP`,icon:`file-text`,level:`Advanced`,color:`from-indigo-500 to-purple-600`},{name:`Laravel`,icon:`gem`,level:`Advanced`,color:`from-red-500 to-rose-600`},{name:`MySQL`,icon:`database`,level:`Advanced`,color:`from-sky-500 to-blue-600`},{name:`PostgreSQL`,icon:`table`,level:`Intermediate`,color:`from-blue-600 to-indigo-700`},{name:`React`,icon:`component`,level:`Intermediate`,color:`from-cyan-400 to-blue-500`},{name:`TypeScript`,icon:`square-code`,level:`Intermediate`,color:`from-blue-500 to-blue-700`},{name:`NestJS`,icon:`server`,level:`Intermediate`,color:`from-rose-500 to-red-600`},{name:`Tailwind CSS`,icon:`wind`,level:`Intermediate`,color:`from-cyan-400 to-sky-500`},{name:`Vite`,icon:`zap`,level:`Intermediate`,color:`from-yellow-400 to-amber-500`},{name:`Java`,icon:`coffee`,level:`Intermediate`,color:`from-amber-500 to-red-500`},{name:`Python`,icon:`binary`,level:`Intermediate`,color:`from-green-400 to-blue-500`},{name:`Power BI`,icon:`bar-chart-3`,level:`Intermediate`,color:`from-yellow-400 to-emerald-500`},{name:`Git`,icon:`git-branch`,level:`Advanced`,color:`from-orange-500 to-red-600`},{name:`REST APIs`,icon:`webhook`,level:`Advanced`,color:`from-teal-400 to-cyan-500`},{name:`JWT Auth`,icon:`key-round`,level:`Intermediate`,color:`from-emerald-400 to-teal-500`},{name:`Cloud Deploy`,icon:`cloud`,level:`Intermediate`,color:`from-sky-400 to-indigo-500`},{name:`PDF Gen`,icon:`file-down`,level:`Intermediate`,color:`from-rose-400 to-pink-500`}],t=[{icon:`code-2`,title:`Full-Stack Development`,description:`Laravel, APIs, authentication systems & dashboards`},{icon:`cloud`,title:`Cloud & Deployment`,description:`Production hosting, environment setup, SMTP & DNS`},{icon:`bar-chart-3`,title:`Data & Analytics`,description:`Power BI dashboards, SQL queries, data visualization`},{icon:`zap`,title:`System Integration`,description:`OTP login, email APIs, role-based access control`}],n=[{period:`2022 — 2025`,title:`Computer Science Diploma`,org:`Tertiary Education`,type:`education`,description:`Completed a Computer Science Diploma covering software development, databases, data analytics, and systems design. Hands-on projects in Java, Python, and web technologies built a strong foundation in programming and problem-solving.`,tags:[`Java`,`Mobile Dev`,`Databases`,`Business Analysis`,`Systems Design`]},{period:`Aug 2025 — Jan 2026`,title:`Data Science (WIL Program)`,org:`Work Integrated Learning`,type:`work`,description:`Completed a Work Integrated Learning placement focused on data science. Worked with real datasets, built analytics dashboards in Power BI, and wrote SQL queries to support data-driven decision-making.`,tags:[`Python`,`Power BI`,`SQL`,`Data Analytics`,`Laravel`,`PHP`]},{period:`Feb 2026 — Jun 2026`,title:`Digital Letter Approval System`,org:`Self-Directed Laravel Learning`,type:`work`,description:`Continued learning Laravel by building a production-grade digital letter approval system. Implemented role-based access, real-time tracking, and email notifications while deepening skills in PHP, workflows, and full-stack development.`,tags:[`Laravel`,`PHP`,`MySQL`,`Authentication`,`Workflows`]},{period:`2026`,title:`ResumeForge — Learning Project`,org:`Self-Directed`,type:`work`,description:`Building a modern CV/Resume Builder to master React, TypeScript, and component architecture. Implementing live preview, PDF export, and ATS-friendly templates while learning modern frontend development practices.`,tags:[`React`,`TypeScript`,`Vite`,`PDF Gen`]},{period:`2026 — Present`,title:`BeautyHub — Team Project`,org:`Collaborative Build`,type:`work`,description:`Co-developing an enterprise beauty marketplace with React, TypeScript, NestJS, and PostgreSQL. Implementing multi-role architecture (Customers, Stylists, Sellers, Admins) with JWT auth and REST API design.`,tags:[`React`,`TypeScript`,`NestJS`,`PostgreSQL`,`JWT`]}],r=[{title:`Digital Letter Approval System`,description:`A comprehensive system built to digitize and automate the traditional manual process of requesting and approving official letters within an organization.`,details:[`Role-based access model with user submissions and admin approvals`,`Real-time tracking ensuring transparency and accountability`,`Email notifications for status changes`,`Full authentication and session management`],tech:[`Laravel`,`PHP`,`MySQL`,`Authentication`,`Workflows`],liveUrl:`https://www.communityletters.xyz`,status:`live`,statusLabel:`Live`,art:`letters`},{title:`Smart Township Management Portal`,description:`A centralized digital platform for managing township operations, including resident records, service requests, and administrative reporting.`,details:[`Resident registration and service request tracking`,`Administrative data management and monitoring`,`Report generation for decision-making`,`Responsive design for non-technical users`],tech:[`PHP`,`MySQL`,`JavaScript`,`Full Stack`,`System Design`],liveUrl:``,status:`dev`,statusLabel:`Work in Progress`,art:`township`},{title:`BeautyHub`,description:`A modern full-stack beauty marketplace platform with separate frontend and backend architecture, demonstrating enterprise-level software development practices using React, TypeScript, NestJS, and PostgreSQL.`,details:[`Multi-role support: Customers, Stylists, Sellers, and Admins`,`Customer: register, browse professionals, book appointments, purchase products`,`Stylist: manage appointments, view bookings, update profile`,`Seller: add and manage products, process customer orders`,`Admin: manage users, services, and view platform statistics`,`JWT authentication with REST API on NestJS backend`],tech:[`React`,`TypeScript`,`NestJS`,`PostgreSQL`,`JWT`,`Tailwind CSS`],liveUrl:``,status:`dev`,statusLabel:`In Development`,art:`beauty`,team:[`Lungile Phakathi`,`Mandisa Maphumulo`,`Hluleko Hobyani`]},{title:`ResumeForge`,description:`A modern CV/Resume Builder for creating professional, ATS-friendly resumes with multiple templates and PDF export. Built as a learning journey into React, TypeScript, and modern frontend practices.`,details:[`Modern landing page with dark, polished UI`,`ATS-friendly CV templates with live preview`,`Multiple resume templates to choose from`,`Responsive design and PDF export`,`Component-based architecture and state management`],tech:[`React`,`TypeScript`,`Vite`,`Tailwind CSS`,`Lucide React`],liveUrl:``,status:`dev`,statusLabel:`Work in Progress`,art:`resume`}],i={letters:()=>`
    <div class="art-panel art-letters">
      <div class="art-letters-grid"></div>
      <div class="art-doc art-doc-1"></div>
      <div class="art-doc art-doc-2"></div>
      <div class="art-doc art-doc-3"></div>
      <div class="art-flow art-flow-1"></div>
      <div class="art-flow art-flow-2"></div>
      <div class="art-stamp">APPROVED</div>
    </div>`,township:()=>`
    <div class="art-panel art-township">
      <div class="art-dashboard">
        <div class="art-stat"><div class="art-stat-label"></div><div class="art-stat-value"></div></div>
        <div class="art-stat"><div class="art-stat-label"></div><div class="art-stat-value"></div></div>
        <div class="art-stat"><div class="art-stat-label"></div><div class="art-stat-value"></div></div>
        <div class="art-chart">
          <div class="art-bar" style="height: 40%"></div>
          <div class="art-bar" style="height: 65%"></div>
          <div class="art-bar" style="height: 50%"></div>
          <div class="art-bar" style="height: 80%"></div>
          <div class="art-bar" style="height: 35%"></div>
          <div class="art-bar" style="height: 70%"></div>
          <div class="art-bar" style="height: 55%"></div>
        </div>
      </div>
    </div>`,beauty:()=>`
    <div class="art-panel art-beauty">
      <div class="art-beauty-card art-profile">
        <div class="art-avatar"></div>
        <div class="art-profile-lines"><span></span><span></span></div>
      </div>
      <div class="art-beauty-card art-calendar">
        <div class="art-cal-header">
          <div style="width:40%;height:6px;background:rgba(244,114,182,0.5);border-radius:3px"></div>
          <div class="art-cal-dot"></div>
        </div>
        <div class="art-cal-grid">
          <div class="art-cal-cell"></div><div class="art-cal-cell booked"></div>
          <div class="art-cal-cell"></div><div class="art-cal-cell"></div>
          <div class="art-cal-cell booked"></div><div class="art-cal-cell active"></div>
          <div class="art-cal-cell"></div><div class="art-cal-cell booked"></div>
        </div>
      </div>
      <div class="art-beauty-card art-product">
        <div class="art-product-dot"></div>
        <span>Booked</span>
      </div>
    </div>`,resume:()=>`
    <div class="art-panel art-resume">
      <div class="art-resume-doc">
        <div class="art-resume-head">
          <div class="art-resume-avatar"></div>
          <div class="art-resume-name"><span></span><span></span></div>
        </div>
        <div class="art-resume-section">
          <div class="art-resume-section-title"></div>
          <div class="art-resume-line"></div>
          <div class="art-resume-line short"></div>
        </div>
        <div class="art-resume-section">
          <div class="art-resume-section-title"></div>
          <div class="art-resume-line"></div>
          <div class="art-resume-line short"></div>
        </div>
      </div>
      <div class="art-template art-template-1"></div>
      <div class="art-template art-template-2"></div>
      <div class="art-ats">ATS-FRIENDLY</div>
    </div>`};function a(){let e=document.getElementById(`highlights-grid`);e&&(e.innerHTML=t.map(e=>`
      <div class="group p-5 bg-gradient-to-br from-[#0a1628] to-[#020617] border border-gray-800 rounded-2xl hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <i data-lucide="${e.icon}" class="w-6 h-6 text-cyan-400"></i>
        </div>
        <h3 class="font-semibold mb-1 text-gray-200">${e.title}</h3>
        <p class="text-sm text-gray-500">${e.description}</p>
      </div>`).join(``))}function o(){let t=document.getElementById(`skills-grid`);t&&(t.innerHTML=e.map((e,t)=>`
      <div class="skill-card group relative p-6 bg-[#0a1628]/50 backdrop-blur-xl border border-gray-800 rounded-2xl hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 cursor-pointer opacity-0 translate-y-12"
        data-index="${t}" style="transition-delay: ${t*50}ms;">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="relative flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${e.color} p-0.5">
              <div class="w-full h-full bg-[#020617] rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <i data-lucide="${e.icon}" class="w-6 h-6 text-white"></i>
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-gray-200 group-hover:text-white transition-colors">${e.name}</h3>
              <p class="text-xs text-gray-500">${e.level}</p>
            </div>
          </div>
          <div class="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${e.level===`Advanced`?`bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-400 border border-cyan-500/30`:`bg-gray-800 text-gray-400 border border-gray-700`}">${e.level}</div>
        </div>
      </div>`).join(``))}function s(){let e=document.getElementById(`projects-list`);e&&(e.innerHTML=r.map((e,t)=>{let n=t%2==1,r=i[e.art]?i[e.art]():``,a=e.team?`<div class="flex flex-wrap items-center gap-2 pt-2">
            <span class="text-xs text-gray-500">Team:</span>
            ${e.team.map(e=>`<span class="px-3 py-1 text-xs bg-gray-800/60 border border-gray-700 rounded-lg text-gray-400">${e}</span>`).join(``)}
          </div>`:``,o=e.liveUrl?`<a href="${e.liveUrl}" target="_blank" rel="noopener noreferrer" class="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-xl text-white text-sm font-medium hover:bg-white/20 transition-all duration-300">
            <i data-lucide="external-link" class="w-4 h-4"></i><span>Live</span>
          </a>`:``;return`
      <div class="group relative grid lg:grid-cols-2 gap-12 items-center">
        <div class="relative ${n?`lg:order-2`:``}">
          <div class="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#020617] border border-gray-800 group-hover:border-cyan-500/30 transition-all duration-500">
            <div class="status-badge art-status ${e.status===`live`?`live`:``}">
              <div class="art-status-dot"></div><span>${e.statusLabel}</span>
            </div>
            ${o}
            ${r}
          </div>
        </div>
        <div class="space-y-6 ${n?`lg:order-1`:``}">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
              <i data-lucide="star" class="w-5 h-5 text-slate-900"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-100">${e.title}</h3>
          </div>
          <p class="text-gray-400 text-lg leading-relaxed">${e.description}</p>
          <ul class="space-y-3">
            ${e.details.map(e=>`
              <li class="flex items-start gap-3 text-gray-400">
                <div class="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                </div>
                <span>${e}</span>
              </li>`).join(``)}
          </ul>
          <div class="flex flex-wrap gap-2 pt-2">
            ${e.tech.map(e=>`<span class="px-4 py-2 text-sm bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-xl text-gray-300">${e}</span>`).join(``)}
          </div>
          ${a}
        </div>
      </div>`}).join(``))}function c(){let e=document.getElementById(`particles`);if(!e)return;let t=``;for(let e=0;e<20;e++)t+=`<div class="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float" style="left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*5}s;animation-duration:${5+Math.random()*5}s;"></div>`;e.innerHTML=t}function l(){let e=document.getElementById(`timeline`);if(!e)return;let t=n.map((e,t)=>{let n=t%2==1,r=e.type===`education`?`graduation-cap`:`briefcase`;return`
      <div class="timeline-item relative flex flex-col sm:flex-row ${n?`sm:flex-row-reverse`:``} gap-6 mb-10 last:mb-0">
        <!-- Node -->
        <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center z-10 ring-4 ring-[#020617]">
          <i data-lucide="${r}" class="w-4 h-4 text-slate-900"></i>
        </div>
        <!-- Spacer for alignment -->
        <div class="hidden sm:block sm:w-1/2"></div>
        <!-- Card -->
        <div class="timeline-card sm:w-1/2 pl-14 sm:pl-0 ${n?`sm:pr-12 sm:text-right`:`sm:pl-12`}">
          <div class="group p-5 bg-gradient-to-br from-[#0a1628] to-[#020617] border border-gray-800 rounded-2xl hover:border-cyan-500/40 transition-all duration-300">
            <span class="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-400 border border-cyan-500/30 rounded-full mb-3">${e.period}</span>
            <h3 class="text-lg font-bold text-gray-100 mb-1">${e.title}</h3>
            <p class="text-sm text-cyan-400 mb-3 font-medium">${e.org}</p>
            <p class="text-sm text-gray-400 leading-relaxed mb-3">${e.description}</p>
            <div class="flex flex-wrap gap-2 ${n?`sm:justify-end`:``}">
              ${e.tags.map(e=>`<span class="px-2.5 py-1 text-xs bg-gray-800/60 border border-gray-700 rounded-lg text-gray-400">${e}</span>`).join(``)}
            </div>
          </div>
        </div>
      </div>`}).join(``);e.insertAdjacentHTML(`beforeend`,t)}function u(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`}),d()}function d(){let e=document.getElementById(`mobile-menu`),t=document.querySelector(`.menu-open-icon`),n=document.querySelector(`.menu-close-icon`);e&&e.classList.remove(`mobile-menu-open`),t&&t.classList.remove(`hidden`),n&&n.classList.add(`hidden`)}function f(){let e=document.getElementById(`mobile-menu`),t=document.querySelector(`.menu-open-icon`),n=document.querySelector(`.menu-close-icon`);e&&e.classList.add(`mobile-menu-open`),t&&t.classList.add(`hidden`),n&&n.classList.remove(`hidden`)}function p(e){document.querySelectorAll(`.nav-link`).forEach(t=>{t.classList.toggle(`active`,t.dataset.section===e)}),document.querySelectorAll(`.mobile-link`).forEach(t=>{t.classList.toggle(`active`,t.dataset.section===e)})}function m(e){let t=document.getElementById(`toast`),n=document.getElementById(`toast-msg`);!t||!n||(n.textContent=e,t.classList.add(`toast-visible`),clearTimeout(m._t),m._t=setTimeout(()=>t.classList.remove(`toast-visible`),3e3))}function h(){window.lucide&&window.lucide.createIcons()}function g(){a(),o(),s(),c(),l(),h();let e=document.getElementById(`year`);e&&(e.textContent=new Date().getFullYear()),document.querySelectorAll(`[data-scroll]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),u(e.dataset.scroll)})}),document.querySelectorAll(`.nav-link, .mobile-link`).forEach(e=>{e.addEventListener(`click`,()=>u(e.dataset.section))});let t=document.getElementById(`menu-toggle`);t&&t.addEventListener(`click`,()=>{let e=document.getElementById(`mobile-menu`);e&&e.classList.contains(`mobile-menu-open`)?d():f()});let n=document.getElementById(`header`),r=[`home`,`about`,`skills`,`experience`,`projects`,`contact`],i=!1,g=()=>{n&&n.classList.toggle(`header-scrolled`,window.scrollY>50);for(let e=r.length-1;e>=0;e--){let t=document.getElementById(r[e]);if(t&&window.scrollY>=t.offsetTop-200){p(r[e]);break}}i=!1};window.addEventListener(`scroll`,()=>{i||=(window.requestAnimationFrame(g),!0)});let _=document.getElementById(`cursor-orb`);_&&(_.style.background=`radial-gradient(circle, #06b6d4 0%, transparent 70%)`,window.addEventListener(`mousemove`,e=>{_.style.left=`${e.clientX-400}px`,_.style.top=`${e.clientY-400}px`}));let v=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`skill-visible`)})},{threshold:.2});document.querySelectorAll(`.skill-card`).forEach(e=>v.observe(e));let y=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`timeline-visible`)})},{threshold:.15});document.querySelectorAll(`.timeline-item`).forEach(e=>y.observe(e));let b=document.getElementById(`contact-form`);b&&b.addEventListener(`submit`,async e=>{e.preventDefault();try{let e=new FormData(b);(await fetch(b.action,{method:`POST`,body:e,headers:{Accept:`application/json`}})).ok?(b.reset(),m(`Message sent successfully!`)):m(`Failed to send. Please try again.`)}catch{m(`Network error. Please try again.`)}}),g()}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,g):g();