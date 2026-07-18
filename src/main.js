import './index.css';

/* ============================================
   DATA
   ============================================ */
const skills = [
  { name: 'HTML5', icon: 'file-code', level: 'Advanced', color: 'from-orange-500 to-red-500' },
  { name: 'CSS3', icon: 'palette', level: 'Advanced', color: 'from-blue-500 to-cyan-400' },
  { name: 'JavaScript', icon: 'braces', level: 'Advanced', color: 'from-yellow-400 to-orange-500' },
  { name: 'PHP', icon: 'file-text', level: 'Advanced', color: 'from-indigo-500 to-purple-600' },
  { name: 'Laravel', icon: 'gem', level: 'Advanced', color: 'from-red-500 to-rose-600' },
  { name: 'MySQL', icon: 'database', level: 'Advanced', color: 'from-sky-500 to-blue-600' },
  { name: 'PostgreSQL', icon: 'table', level: 'Intermediate', color: 'from-blue-600 to-indigo-700' },
  { name: 'React', icon: 'component', level: 'Intermediate', color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', icon: 'square-code', level: 'Intermediate', color: 'from-blue-500 to-blue-700' },
  { name: 'NestJS', icon: 'server', level: 'Intermediate', color: 'from-rose-500 to-red-600' },
  { name: 'Tailwind CSS', icon: 'wind', level: 'Intermediate', color: 'from-cyan-400 to-sky-500' },
  { name: 'Vite', icon: 'zap', level: 'Intermediate', color: 'from-yellow-400 to-amber-500' },
  { name: 'Java', icon: 'coffee', level: 'Intermediate', color: 'from-amber-500 to-red-500' },
  { name: 'Python', icon: 'binary', level: 'Intermediate', color: 'from-green-400 to-blue-500' },
  { name: 'Power BI', icon: 'bar-chart-3', level: 'Intermediate', color: 'from-yellow-400 to-emerald-500' },
  { name: 'Git', icon: 'git-branch', level: 'Advanced', color: 'from-orange-500 to-red-600' },
  { name: 'REST APIs', icon: 'webhook', level: 'Advanced', color: 'from-teal-400 to-cyan-500' },
  { name: 'JWT Auth', icon: 'key-round', level: 'Intermediate', color: 'from-emerald-400 to-teal-500' },
  { name: 'Cloud Deploy', icon: 'cloud', level: 'Intermediate', color: 'from-sky-400 to-indigo-500' },
  { name: 'PDF Gen', icon: 'file-down', level: 'Intermediate', color: 'from-rose-400 to-pink-500' },
];

const highlights = [
  { icon: 'code-2', title: 'Full-Stack Development', description: 'Laravel, APIs, authentication systems & dashboards' },
  { icon: 'cloud', title: 'Cloud & Deployment', description: 'Production hosting, environment setup, SMTP & DNS' },
  { icon: 'bar-chart-3', title: 'Data & Analytics', description: 'Power BI dashboards, SQL queries, data visualization' },
  { icon: 'zap', title: 'System Integration', description: 'OTP login, email APIs, role-based access control' },
];

const timeline = [
  {
    period: '2022 — 2025',
    title: 'Computer Science Diploma',
    org: 'Tertiary Education',
    type: 'education',
    description: 'Completed a Computer Science Diploma covering software development, databases, data analytics, and systems design. Hands-on projects in Java, Python, and web technologies built a strong foundation in programming and problem-solving.',
    tags: ['Java', 'Mobile Dev', 'Databases', 'Business Analysis', 'Systems Design' ],
  },
  {
    period: 'Aug 2025 — Jan 2026',
    title: 'Data Science (WIL Program)',
    org: 'Work Integrated Learning',
    type: 'work',
    description: 'Completed a Work Integrated Learning placement focused on data science. Worked with real datasets, built analytics dashboards in Power BI, and wrote SQL queries to support data-driven decision-making.',
    tags: ['Python', 'Power BI', 'SQL', 'Data Analytics', 'Laravel','PHP'],
  },
  {
    period: 'Feb 2026 — Jun 2026',
    title: 'Digital Letter Approval System',
    org: 'Self-Directed Laravel Learning',
    type: 'work',
    description: 'Continued learning Laravel by building a production-grade digital letter approval system. Implemented role-based access, real-time tracking, and email notifications while deepening skills in PHP, workflows, and full-stack development.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Authentication', 'Workflows'],
  },
  {
    period: '2026',
    title: 'ResumeForge — Learning Project',
    org: 'Self-Directed',
    type: 'work',
    description: 'Building a modern CV/Resume Builder to master React, TypeScript, and component architecture. Implementing live preview, PDF export, and ATS-friendly templates while learning modern frontend development practices.',
    tags: ['React', 'TypeScript', 'Vite', 'PDF Gen'],
  },
  {
    period: '2026 — Present',
    title: 'BeautyHub — Team Project',
    org: 'Collaborative Build',
    type: 'work',
    description: 'Co-developing an enterprise beauty marketplace with React, TypeScript, NestJS, and PostgreSQL. Implementing multi-role architecture (Customers, Stylists, Sellers, Admins) with JWT auth and REST API design.',
    tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'JWT'],
  },
];

const projects = [
  {
    title: 'Digital Letter Approval System',
    description: 'A comprehensive system built to digitize and automate the traditional manual process of requesting and approving official letters within an organization.',
    details: [
      'Role-based access model with user submissions and admin approvals',
      'Real-time tracking ensuring transparency and accountability',
      'Email notifications for status changes',
      'Full authentication and session management',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Authentication', 'Workflows'],
    liveUrl: 'https://www.communityletters.xyz',
    status: 'live',
    statusLabel: 'Live',
    art: 'letters',
  },
  {
    title: 'Smart Township Management Portal',
    description: 'A centralized digital platform for managing township operations, including resident records, service requests, and administrative reporting.',
    details: [
      'Resident registration and service request tracking',
      'Administrative data management and monitoring',
      'Report generation for decision-making',
      'Responsive design for non-technical users',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'Full Stack', 'System Design'],
    liveUrl: '',
    status: 'dev',
    statusLabel: 'Work in Progress',
    art: 'township',
  },
  {
    title: 'BeautyHub',
    description: 'A modern full-stack beauty marketplace platform with separate frontend and backend architecture, demonstrating enterprise-level software development practices using React, TypeScript, NestJS, and PostgreSQL.',
    details: [
      'Multi-role support: Customers, Stylists, Sellers, and Admins',
      'Customer: register, browse professionals, book appointments, purchase products',
      'Stylist: manage appointments, view bookings, update profile',
      'Seller: add and manage products, process customer orders',
      'Admin: manage users, services, and view platform statistics',
      'JWT authentication with REST API on NestJS backend',
    ],
    tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
    liveUrl: '',
    status: 'dev',
    statusLabel: 'In Development',
    art: 'beauty',
    team: ['Lungile Phakathi', 'Mandisa Maphumulo', 'Hluleko Hobyani'],
  },
  {
    title: 'ResumeForge',
    description: 'A modern CV/Resume Builder for creating professional, ATS-friendly resumes with multiple templates and PDF export. Built as a learning journey into React, TypeScript, and modern frontend practices.',
    details: [
      'Modern landing page with dark, polished UI',
      'ATS-friendly CV templates with live preview',
      'Multiple resume templates to choose from',
      'Responsive design and PDF export',
      'Component-based architecture and state management',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React'],
    liveUrl: '',
    status: 'dev',
    statusLabel: 'Work in Progress',
    art: 'resume',
  },
];

/* ============================================
   ART PANEL TEMPLATES (no project photos)
   Each returns an HTML string of pure CSS art.
   ============================================ */
const artTemplates = {
  letters: () => `
    <div class="art-panel art-letters">
      <div class="art-letters-grid"></div>
      <div class="art-doc art-doc-1"></div>
      <div class="art-doc art-doc-2"></div>
      <div class="art-doc art-doc-3"></div>
      <div class="art-flow art-flow-1"></div>
      <div class="art-flow art-flow-2"></div>
      <div class="art-stamp">APPROVED</div>
    </div>`,

  township: () => `
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
    </div>`,

  beauty: () => `
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
    </div>`,

  resume: () => `
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
    </div>`,
};

/* ============================================
   RENDERERS
   ============================================ */
function renderHighlights() {
  const grid = document.getElementById('highlights-grid');
  if (!grid) return;
  grid.innerHTML = highlights
    .map(
      (item) => `
      <div class="group p-5 bg-gradient-to-br from-[#0a1628] to-[#020617] border border-gray-800 rounded-2xl hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <i data-lucide="${item.icon}" class="w-6 h-6 text-cyan-400"></i>
        </div>
        <h3 class="font-semibold mb-1 text-gray-200">${item.title}</h3>
        <p class="text-sm text-gray-500">${item.description}</p>
      </div>`
    )
    .join('');
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = skills
    .map(
      (skill, index) => `
      <div class="skill-card group relative p-6 bg-[#0a1628]/50 backdrop-blur-xl border border-gray-800 rounded-2xl hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 cursor-pointer opacity-0 translate-y-12"
        data-index="${index}" style="transition-delay: ${index * 50}ms;">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="relative flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-0.5">
              <div class="w-full h-full bg-[#020617] rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <i data-lucide="${skill.icon}" class="w-6 h-6 text-white"></i>
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-gray-200 group-hover:text-white transition-colors">${skill.name}</h3>
              <p class="text-xs text-gray-500">${skill.level}</p>
            </div>
          </div>
          <div class="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
            skill.level === 'Advanced'
              ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-400 border border-cyan-500/30'
              : 'bg-gray-800 text-gray-400 border border-gray-700'
          }">${skill.level}</div>
        </div>
      </div>`
    )
    .join('');
}

function renderProjects() {
  const list = document.getElementById('projects-list');
  if (!list) return;
  list.innerHTML = projects
    .map((project, index) => {
      const reversed = index % 2 === 1;
      const artHtml = artTemplates[project.art] ? artTemplates[project.art]() : '';
      const teamHtml = project.team
        ? `<div class="flex flex-wrap items-center gap-2 pt-2">
            <span class="text-xs text-gray-500">Team:</span>
            ${project.team.map((m) => `<span class="px-3 py-1 text-xs bg-gray-800/60 border border-gray-700 rounded-lg text-gray-400">${m}</span>`).join('')}
          </div>`
        : '';
      const liveHtml = project.liveUrl
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-xl text-white text-sm font-medium hover:bg-white/20 transition-all duration-300">
            <i data-lucide="external-link" class="w-4 h-4"></i><span>Live</span>
          </a>`
        : '';
      return `
      <div class="group relative grid lg:grid-cols-2 gap-12 items-center">
        <div class="relative ${reversed ? 'lg:order-2' : ''}">
          <div class="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#020617] border border-gray-800 group-hover:border-cyan-500/30 transition-all duration-500">
            <div class="status-badge art-status ${project.status === 'live' ? 'live' : ''}">
              <div class="art-status-dot"></div><span>${project.statusLabel}</span>
            </div>
            ${liveHtml}
            ${artHtml}
          </div>
        </div>
        <div class="space-y-6 ${reversed ? 'lg:order-1' : ''}">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
              <i data-lucide="star" class="w-5 h-5 text-slate-900"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-100">${project.title}</h3>
          </div>
          <p class="text-gray-400 text-lg leading-relaxed">${project.description}</p>
          <ul class="space-y-3">
            ${project.details
              .map(
                (detail) => `
              <li class="flex items-start gap-3 text-gray-400">
                <div class="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                </div>
                <span>${detail}</span>
              </li>`
              )
              .join('')}
          </ul>
          <div class="flex flex-wrap gap-2 pt-2">
            ${project.tech
              .map(
                (tech) =>
                  `<span class="px-4 py-2 text-sm bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-xl text-gray-300">${tech}</span>`
              )
              .join('')}
          </div>
          ${teamHtml}
        </div>
      </div>`;
    })
    .join('');
}

function renderParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  let html = '';
  for (let i = 0; i < 20; i++) {
    html += `<div class="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float" style="left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 5}s;animation-duration:${5 + Math.random() * 5}s;"></div>`;
  }
  container.innerHTML = html;
}

function renderTimeline() {
  const container = document.getElementById('timeline');
  if (!container) return;
  const items = timeline
    .map((item, index) => {
      const isRight = index % 2 === 1;
      const icon = item.type === 'education' ? 'graduation-cap' : 'briefcase';
      return `
      <div class="timeline-item relative flex flex-col sm:flex-row ${isRight ? 'sm:flex-row-reverse' : ''} gap-6 mb-10 last:mb-0">
        <!-- Node -->
        <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center z-10 ring-4 ring-[#020617]">
          <i data-lucide="${icon}" class="w-4 h-4 text-slate-900"></i>
        </div>
        <!-- Spacer for alignment -->
        <div class="hidden sm:block sm:w-1/2"></div>
        <!-- Card -->
        <div class="timeline-card sm:w-1/2 pl-14 sm:pl-0 ${isRight ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}">
          <div class="group p-5 bg-gradient-to-br from-[#0a1628] to-[#020617] border border-gray-800 rounded-2xl hover:border-cyan-500/40 transition-all duration-300">
            <span class="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-400 border border-cyan-500/30 rounded-full mb-3">${item.period}</span>
            <h3 class="text-lg font-bold text-gray-100 mb-1">${item.title}</h3>
            <p class="text-sm text-cyan-400 mb-3 font-medium">${item.org}</p>
            <p class="text-sm text-gray-400 leading-relaxed mb-3">${item.description}</p>
            <div class="flex flex-wrap gap-2 ${isRight ? 'sm:justify-end' : ''}">
              ${item.tags.map((t) => `<span class="px-2.5 py-1 text-xs bg-gray-800/60 border border-gray-700 rounded-lg text-gray-400">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>`;
    })
    .join('');
  container.insertAdjacentHTML('beforeend', items);
}

/* ============================================
   INTERACTION LOGIC
   ============================================ */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  closeMenu();
}

function closeMenu() {
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.querySelector('.menu-open-icon');
  const closeIcon = document.querySelector('.menu-close-icon');
  if (menu) menu.classList.remove('mobile-menu-open');
  if (openIcon) openIcon.classList.remove('hidden');
  if (closeIcon) closeIcon.classList.add('hidden');
}

function openMenu() {
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.querySelector('.menu-open-icon');
  const closeIcon = document.querySelector('.menu-close-icon');
  if (menu) menu.classList.add('mobile-menu-open');
  if (openIcon) openIcon.classList.add('hidden');
  if (closeIcon) closeIcon.classList.remove('hidden');
}

function setActiveSection(id) {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.section === id);
  });
  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.section === id);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toast-msg');
  if (!toast || !msg) return;
  msg.textContent = message;
  toast.classList.add('toast-visible');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('toast-visible'), 3000);
}

/* ============================================
   INIT
   ============================================ */
function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function init() {
  // Render dynamic content
  renderHighlights();
  renderSkills();
  renderProjects();
  renderParticles();
  renderTimeline();
  refreshIcons();

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll buttons
  document.querySelectorAll('[data-scroll]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToSection(btn.dataset.scroll);
    });
  });

  // Nav links (desktop + mobile)
  document.querySelectorAll('.nav-link, .mobile-link').forEach((link) => {
    link.addEventListener('click', () => scrollToSection(link.dataset.section));
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      if (menu && menu.classList.contains('mobile-menu-open')) closeMenu();
      else openMenu();
    });
  }

  // Scroll + active section tracking
  const header = document.getElementById('header');
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
  let ticking = false;
  const handleScroll = () => {
    if (header) header.classList.toggle('header-scrolled', window.scrollY > 50);
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && window.scrollY >= el.offsetTop - 200) {
        setActiveSection(sections[i]);
        break;
      }
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });

  // Cursor orb
  const orb = document.getElementById('cursor-orb');
  if (orb) {
    orb.style.background = 'radial-gradient(circle, #06b6d4 0%, transparent 70%)';
    window.addEventListener('mousemove', (e) => {
      orb.style.left = `${e.clientX - 400}px`;
      orb.style.top = `${e.clientY - 400}px`;
    });
  }

  // Skill reveal on scroll
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('skill-visible');
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll('.skill-card').forEach((card) => skillObserver.observe(card));

  // Timeline reveal on scroll
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-visible');
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.timeline-item').forEach((item) => timelineObserver.observe(item));

  // Contact form
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        if (response.ok) {
          form.reset();
          showToast('Message sent successfully!');
        } else {
          showToast('Failed to send. Please try again.');
        }
      } catch {
        showToast('Network error. Please try again.');
      }
    });
  }

  // Initial active state
  handleScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
