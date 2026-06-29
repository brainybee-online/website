/* ========================================
   BRAINY BEE — main.js v2.0
   Fixed: slider, FAQ, mobile nav, counters, scroll
======================================== */

/* ── PRELOADER ── */
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) {
    pre.style.opacity = '0';
    setTimeout(() => pre.remove(), 500);
  }
});

/* ── SCROLL TO TOP ── */
const scrollBtn = document.getElementById('scrollTop');
if (scrollBtn) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        scrollBtn.classList.toggle('visible', window.scrollY > 350);
        ticking = false;
      });
      ticking = true;
    }
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── MOBILE NAV TOGGLE ── */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('open');
      toggle.textContent = menu.classList.contains('open') ? '✕' : '☰';
    });
    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
        toggle.textContent = '☰';
      }
    });
  }

  /* Mobile dropdown accordions */
  document.querySelectorAll('.dropdown-toggle, .mega-toggle').forEach(btn => {
    btn.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        e.stopPropagation();
        const parent = this.closest('.dropdown, .mega-dropdown');
        if (parent) parent.classList.toggle('open');
      }
    });
  });

  /* Close nav on nav-link click (mobile) */
  document.querySelectorAll('#navMenu .nav-link:not(.dropdown-toggle):not(.mega-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      if (menu) menu.classList.remove('open');
      if (toggle) toggle.textContent = '☰';
    });
  });

  /* ── ACTIVE NAV LINK ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── HERO SLIDER ── */
  initSlider();

  /* ── FAQ ── */
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function () {
      const item   = this.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        const a = i.querySelector('.faq-answer');
        if (a) a.classList.remove('open');
      });
      if (!isOpen) {
        item.classList.add('open');
        if (answer) answer.classList.add('open');
      }
    });
  });

  /* ── FADE IN OBSERVER ── */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  /* ── COUNTER ANIMATION ── */
  const counterTarget = document.querySelector('.stats-bar');
  if (counterTarget) {
    const cObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateCounters(); cObs.disconnect(); }
    }, { threshold: 0.3 });
    cObs.observe(counterTarget);
  }

  /* ── WHATSAPP FORMS ── */
  document.querySelectorAll('.whatsapp-form').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name   = (this.querySelector('[name="name"]')?.value || '').trim();
      const course = (this.querySelector('[name="course"]')?.value || 'Not specified').trim();
      const phone  = (this.querySelector('[name="phone"]')?.value || '').trim();
      if (!name)  { showToast('Please enter your name.'); return; }
      if (!phone) { showToast('Please enter your phone number.'); return; }
      const msg = `Hello Brainy Bee! 🐝%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Course Interested:* ${encodeURIComponent(course)}%0A*Phone:* ${encodeURIComponent(phone)}%0A%0APlease contact me for more information about your online courses in Tamil Nadu.`;
      window.open(`https://wa.me/916382619996?text=${msg}`, '_blank');
    });
  });

  /* ── STICKY NAV SHADOW ── */
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav) {
      nav.style.boxShadow = window.scrollY > 20
        ? '0 4px 30px rgba(0,0,0,0.6)'
        : '0 4px 24px rgba(0,0,0,0.45)';
    }
  });
});

/* ── HERO SLIDER FUNCTION ── */
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.slider-dot');
  if (!slides.length) return;

  let current = 0;
  let timer   = null;

  function goTo(n) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = ((n % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(timer); goTo(i); startAuto(); }));

  const prev = document.getElementById('slidePrev');
  const next = document.getElementById('slideNext');
  if (prev) prev.addEventListener('click', () => { clearInterval(timer); goTo(current - 1); startAuto(); });
  if (next) next.addEventListener('click', () => { clearInterval(timer); goTo(current + 1); startAuto(); });

  // Init first slide
  goTo(0);
  startAuto();
}

/* ── COUNTER ANIMATION ── */
function animateCounters() {
  document.querySelectorAll('.counter-num').forEach(el => {
    const raw    = el.getAttribute('data-target') || el.textContent.replace(/[^0-9]/g,'');
    const target = parseInt(raw) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    if (!target) return;
    let count = 0;
    const step = Math.max(1, Math.ceil(target / 80));
    const t = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count.toLocaleString() + suffix;
      if (count >= target) clearInterval(t);
    }, 18);
  });
}

/* ── TOAST NOTIFICATION ── */
function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position: 'fixed', bottom: '90px', right: '20px',
    background: '#f5a623', color: '#0a1628',
    padding: '12px 20px', borderRadius: '10px',
    fontWeight: '700', fontSize: '14px',
    zIndex: '99998', boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
    transition: 'opacity 0.4s'
  });
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 400); }, 3000);
}
