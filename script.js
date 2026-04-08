/* ═══════════════════════════════════════════════════
   SERGIO GARCÍA GENÍS — RESEARCH PORTFOLIO
   script.js

   HOW TO UPDATE THIS SITE:
   ─────────────────────────────────────────────────
   • ADD A PROJECT  → Edit the PROJECTS array below
   • ADD A PAPER    → Edit the PUBLICATIONS array
   • ADD A PHOTO    → Put image in assets/gallery/
                      and add an entry to GALLERY
   ═══════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════════════
   ★  EDIT YOUR CONTENT HERE
══════════════════════════════════════════════════ */

/**
 * PROJECTS
 * Fields:
 *   date      – displayed date string
 *   title     – project / role title
 *   company   – employer or institution
 *   desc      – short description (HTML allowed)
 *   tags      – array of keywords
 *   image     – path relative to index.html, e.g. "assets/projects/dhm.jpg"
 *               leave "" to show emoji placeholder instead
 *   imageAlt  – alt text for the image
 *   emoji     – shown as placeholder when no image (default "🔬")
 */
const PROJECTS = [
  {
    date: "Sep 2025 – Dec 2025",
    title: "NIR Digital Holographic Microscope — Design & Validation",
    company: "Photonicsensors & Algorithms S.L. · DISCAMNIL / NextGenEU",
    desc: `Design and implementation of a telecentric near-infrared DHM system achieving a lateral 
           phase resolution of <strong>0.07 rad (~λ/90)</strong>. Reconstruction and analysis 
           software developed in MATLAB/Python. Experimental validation applied to multiple 
           dielectric metasurfaces. System contributed to EU-funded material characterisation.`,
    tags: ["DHM", "NIR", "Interferometry", "MATLAB", "Python", "Metasurfaces"],
    image: "", // e.g. "assets/projects/dhm_setup.jpg"
    imageAlt: "DHM setup photo",
    emoji: "🔬"
  },
  {
    date: "Feb 2025 – Sep 2025",
    title: "Research Laboratory Assistant — Optical Systems Validation",
    company: "Department of Optics · University of Valencia",
    desc: `Experimental support for advanced optical system characterisation: interferometric 
           measurements, optical alignment, performance verification and simulation. 
           Active involvement in data acquisition and analysis pipelines. 
           Work culminated in a joint <strong>Master's Thesis awarded with maximum grade</strong>.`,
    tags: ["Interferometry", "Zemax", "Optical Alignment", "LabVIEW"],
    image: "",
    imageAlt: "UV Optics Lab",
    emoji: "🏛️"
  },
  // ── ADD NEW PROJECTS BELOW THIS LINE ────────────────────────────────────
  // {
  //   date: "Month Year – Month Year",
  //   title: "Your Project Title",
  //   company: "Institution / Company",
  //   desc: "Description of the project.",
  //   tags: ["Tag1", "Tag2"],
  //   image: "assets/projects/yourimage.jpg",
  //   imageAlt: "Description of image",
  //   emoji: "🔭"
  // },
];


/**
 * PUBLICATIONS
 * Fields:
 *   year    – publication year string
 *   title   – full title
 *   venue   – journal / conference / institution
 *   desc    – brief abstract / description
 *   links   – array of { label, url }
 */
const PUBLICATIONS = [
  {
    year: "2025",
    title: "Design and Implementation of a Digital Holographic Microscopy System in the Near-Infrared",
    venue: "MSc Thesis — University of Valencia (Màster en Física Avançada, especialitat Fotònica)",
    desc: `Full design, implementation and metrological validation of a telecentric off-axis DHM 
           system operating in the NIR. Achieves a phase resolution of 0.07 rad (~λ/90) for 
           quantitative characterisation of dielectric metasurfaces. Awarded maximum grade. 
           Supervisors: Genaro Saavedra Tortosa & Juan Carlos Barreiro Hervás.`,
    links: [
      // { label: "PDF", url: "assets/MSc_Thesis_Sergio_Garcia.pdf" },
      // { label: "UV Repository", url: "https://roderic.uv.es/" },
    ]
  },
  // ── ADD NEW PUBLICATIONS BELOW ──────────────────────────────────────────
  // {
  //   year: "2026",
  //   title: "Your Paper Title",
  //   venue: "Journal of Optics / Conference Name",
  //   desc: "Abstract or brief description.",
  //   links: [
  //     { label: "DOI", url: "https://doi.org/..." },
  //     { label: "PDF", url: "assets/papers/yourpaper.pdf" },
  //   ]
  // },
];


/**
 * GALLERY
 * Fields:
 *   src     – path to image, e.g. "assets/gallery/hologram.jpg"
 *   caption – text shown in overlay and lightbox
 *
 * Leave GALLERY empty ( [] ) to show the "add images" placeholder cards.
 */
const GALLERY = [
  // { src: "assets/gallery/dhm_fringe.jpg",    caption: "Off-axis DHM interference fringes" },
  // { src: "assets/gallery/phase_map.jpg",     caption: "Reconstructed quantitative phase map of metasurface" },
  // { src: "assets/gallery/optical_bench.jpg", caption: "NIR DHM optical bench alignment" },
  // { src: "assets/gallery/zemax_design.jpg",  caption: "Telecentric system layout — Zemax OpticStudio" },
];


/* ══════════════════════════════════════════════════
   ★  RENDERING — no need to edit below this line
══════════════════════════════════════════════════ */

// ── Projects ──
function renderProjects() {
  const el = document.getElementById('projects-list');
  if (!el) return;
  el.innerHTML = PROJECTS.map(p => {
    const imgBlock = p.image
      ? `<div class="proj-img"><img src="${p.image}" alt="${p.imageAlt}" loading="lazy" /></div>`
      : `<div class="proj-img"><div class="proj-img-placeholder">${p.emoji || '🔬'}</div></div>`;
    const tags = p.tags.map(t => `<span>${t}</span>`).join('');
    return `
      <article class="project-item reveal">
        ${imgBlock}
        <div class="proj-body">
          <p class="proj-date">${p.date}</p>
          <h3>${p.title}</h3>
          <p class="proj-company">${p.company}</p>
          <p>${p.desc}</p>
          <div class="proj-tags">${tags}</div>
        </div>
      </article>`;
  }).join('');
}

// ── Publications ──
function renderPublications() {
  const el = document.getElementById('pub-list');
  if (!el) return;
  el.innerHTML = PUBLICATIONS.map(pub => {
    const links = pub.links && pub.links.length
      ? `<div class="pub-links">${pub.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}</div>`
      : '';
    return `
      <div class="pub-item reveal">
        <span class="pub-year">${pub.year}</span>
        <div class="pub-content">
          <h4>${pub.title}</h4>
          <p class="pub-meta">${pub.venue}</p>
          <p>${pub.desc}</p>
          ${links}
        </div>
      </div>`;
  }).join('');
}

// ── Gallery ──
function renderGallery() {
  const el = document.getElementById('gallery-grid');
  if (!el) return;
  if (GALLERY.length === 0) {
    // Show placeholder cards to invite content
    el.innerHTML = Array(4).fill(0).map((_, i) => `
      <div class="gallery-placeholder reveal">
        <span class="plus">＋</span>
        <span>Add images to<br/>assets/gallery/</span>
      </div>`).join('');
    return;
  }
  el.innerHTML = GALLERY.map((img, i) => `
    <div class="gallery-item reveal" data-index="${i}">
      <img src="${img.src}" alt="${img.caption}" loading="lazy" />
      <div class="gallery-overlay"><span>${img.caption}</span></div>
    </div>`).join('');

  // Attach lightbox listeners
  el.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.index, 10);
      openLightbox(idx);
    });
  });
}

// ── Lightbox ──
function openLightbox(idx) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lb-img').src = GALLERY[idx].src;
  document.getElementById('lb-caption').textContent = GALLERY[idx].caption;
  lb.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.body.style.overflow = '';
}

// ── Navbar scroll effect ──
function initNavbar() {
  const nav = document.getElementById('navbar');
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ── Hamburger menu ──
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

// ── Scroll reveal ──
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── Hero wave canvas ──
function initWave() {
  const canvas = document.getElementById('wave-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const lines = 7;
    for (let i = 0; i < lines; i++) {
      const amp   = 18 + i * 6;
      const freq  = 0.007 - i * 0.0007;
      const speed = 0.008 + i * 0.002;
      const yBase = H * 0.35 + i * H * 0.1;
      const alpha = 0.04 + i * 0.018;

      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const y = yBase + Math.sin(x * freq + t * speed * 10) * amp
                        + Math.sin(x * freq * 1.7 + t * speed * 6) * (amp * 0.4);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(94, 196, 255, ${alpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
    t++;
    requestAnimationFrame(draw);
  }
  draw();
}

// ── Footer year ──
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderPublications();
  renderGallery();
  initNavbar();
  initHamburger();
  initWave();
  setYear();

  // Lightbox close
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Reveal needs DOM rendered first
  requestAnimationFrame(() => {
    requestAnimationFrame(initReveal);
  });
});
