/* ========================================
   BRAINY BEE — components.js v2.0
   Injects: Topbar, Navbar, Footer, Sidebar
   FIXED: Alignment, hover effects, mobile
======================================== */

const BB = {
  phone:    '8056804567',
  wa:       '918056804567',
  email:    'onlinebrainybee@gmail.com',
  website:  'www.brainybee.online',
};

/* ══════════════════════════════
   TOPBAR HTML
══════════════════════════════ */
const topbarHTML = `
<div class="topbar">
  <div class="topbar-inner">
    <div class="topbar-left">
      <a href="tel:+91${BB.phone}">📞 +91 ${BB.phone}</a>
      <a href="mailto:${BB.email}">✉️ ${BB.email}</a>
      <a href="https://${BB.website}" target="_blank" rel="noopener">🌐 ${BB.website}</a>
    </div>
    <div class="topbar-right">
      <span class="live-badge">🔴 LIVE CLASSES</span>
      <a href="https://wa.me/${BB.wa}" target="_blank" rel="noopener">💬 WhatsApp</a>
      <a href="free-demo.html">🎓 Free Demo</a>
    </div>
  </div>
</div>`;

/* ══════════════════════════════
   NAVBAR HTML
══════════════════════════════ */
const navbarHTML = `
<nav class="navbar" role="navigation" aria-label="Main Navigation">
  <div class="nav-inner">

    <a href="index.html" class="nav-logo" aria-label="Brainy Bee Home">
      <img src="images/logo.png" alt="Brainy Bee Online Learning Platform Logo Tamil Nadu" width="54" height="54" loading="eager">
      <div class="nav-logo-text">
        <h1>BRAINY <span>BEE</span></h1>
        <small>Online Learning Platform</small>
      </div>
    </a>

    <button class="nav-toggle" id="navToggle" aria-label="Toggle Navigation Menu" aria-expanded="false">☰</button>

    <ul class="nav-menu" id="navMenu" role="menubar">

      <li class="nav-item" role="none">
        <a href="index.html" class="nav-link" role="menuitem">Home</a>
      </li>

      <li class="nav-item" role="none">
        <a href="about.html" class="nav-link" role="menuitem">About Us</a>
      </li>

      <li class="nav-item mega-dropdown" role="none">
        <a href="courses.html" class="nav-link mega-toggle dropdown-toggle" role="menuitem" aria-haspopup="true">Courses</a>
        <div class="mega-menu" role="menu">
          <div class="mega-col">
            <h5>🌐 Full Stack</h5>
            <a href="courses.html#mern" role="menuitem">MERN Stack</a>
            <a href="courses.html#mean" role="menuitem">MEAN Stack</a>
            <a href="courses.html#python-fs" role="menuitem">Python Full Stack</a>
            <a href="courses.html#java-fs" role="menuitem">Java Full Stack</a>
            <a href="courses.html#php-fs" role="menuitem">PHP Full Stack</a>
            <a href="courses.html#dotnet-fs" role="menuitem">.NET Full Stack</a>
            <a href="courses.html#android" role="menuitem">Android / iOS</a>
            <a href="courses.html#flutter" role="menuitem">Flutter & React Native</a>
          </div>
          <div class="mega-col">
            <h5>🔐 Security & Network</h5>
            <a href="courses.html#hacking" role="menuitem">Ethical Hacking</a>
            <a href="courses.html#security-plus" role="menuitem">Security+</a>
            <a href="courses.html#ccna" role="menuitem">CCNA Networking</a>
            <a href="courses.html#ccnp" role="menuitem">CCNP Routing</a>
            <a href="courses.html#linux" role="menuitem">Linux Essentials</a>
            <a href="courses.html#hardware" role="menuitem">Hardware A+ & Net N+</a>
            <h5 style="margin-top:12px;">🧪 Testing</h5>
            <a href="courses.html#manual-testing" role="menuitem">Manual Testing ISTQB</a>
            <a href="courses.html#selenium-java" role="menuitem">Selenium Automation</a>
          </div>
          <div class="mega-col">
            <h5>☁️ Cloud & DevOps</h5>
            <a href="courses.html#devops" role="menuitem">DevOps Professional</a>
            <a href="courses.html#cloud-architect" role="menuitem">Cloud Architect (AWS)</a>
            <a href="courses.html#azure" role="menuitem">Azure Administrator</a>
            <a href="courses.html#aws" role="menuitem">Cloud Associate</a>
            <h5 style="margin-top:12px;">🗄️ Database</h5>
            <a href="courses.html#sap" role="menuitem">SAP FICO & MM</a>
            <a href="courses.html#mysql" role="menuitem">MySQL & MSSQL</a>
            <a href="courses.html#oracle" role="menuitem">Oracle DBA & PL/SQL</a>
          </div>
          <div class="mega-col">
            <h5>📊 Data & AI</h5>
            <a href="courses.html#data-science" role="menuitem">Data Science & ML</a>
            <a href="courses.html#data-analytics" role="menuitem">Data Analytics</a>
            <a href="courses.html#ai-dev" role="menuitem">AI Engineering</a>
            <a href="courses.html#ai-mastery" role="menuitem">AI Mastery Programme</a>
            <h5 style="margin-top:12px;">📢 Marketing</h5>
            <a href="courses.html#digital-marketing" role="menuitem">Digital Marketing</a>
            <a href="courses.html#seo" role="menuitem">Advanced SEO</a>
            <a href="courses.html#smm" role="menuitem">SMM & PPC</a>
          </div>
        </div>
      </li>

      <li class="nav-item" role="none">
        <a href="corporate.html" class="nav-link" role="menuitem">Corporate</a>
      </li>

      <li class="nav-item" role="none">
        <a href="blog.html" class="nav-link" role="menuitem">Blog</a>
      </li>

      <li class="nav-item" role="none">
        <a href="events.html" class="nav-link" role="menuitem">Events</a>
      </li>

      <li class="nav-item" role="none">
        <a href="reviews.html" class="nav-link" role="menuitem">Reviews</a>
      </li>

      <li class="nav-item" role="none">
        <a href="contact.html" class="nav-link" role="menuitem">Contact</a>
      </li>

      <li class="nav-item" role="none">
        <a href="enquiry.html" class="nav-link" role="menuitem">Enquiry</a>
      </li>

      <li class="nav-item" role="none">
        <a href="free-demo.html" class="nav-link nav-cta" role="menuitem">🎓 Free Demo</a>
      </li>

    </ul>
  </div>
</nav>`;

/* ══════════════════════════════
   SIDEBAR HTML
══════════════════════════════ */
function buildSidebar(activeCourse) {
  const courses = [
    ['DevOps Professional Course',    'devops'],
    ['Python Full Stack',             'python-fs'],
    ['MERN Stack',                    'mern'],
    ['MEAN Stack',                    'mean'],
    ['Java Full Stack',               'java-fs'],
    ['Data Science & ML',             'data-science'],
    ['Ethical Hacking / CEH',         'hacking'],
    ['Cloud Architect (AWS)',          'cloud-architect'],
    ['Azure Administrator',           'azure'],
    ['Digital Marketing',             'digital-marketing'],
    ['AI Engineering',                'ai-dev'],
    ['CCNA Networking',               'ccna'],
    ['Other / Need Guidance',         'other'],
  ];
  const opts = courses.map(([label, val]) =>
    `<option value="${val}"${activeCourse===val?' selected':''}>${label}</option>`
  ).join('');

  return `
<aside class="sidebar">

  <!-- ENQUIRY FORM -->
  <div class="enquiry-form">
    <h3>📩 Quick Enquiry</h3>
    <p>Get a free callback from our expert counsellors in 30 minutes!</p>
    <form class="whatsapp-form" novalidate>
      <div class="form-group">
        <label for="eq-name">Your Name *</label>
        <input id="eq-name" type="text" name="name" class="form-control" placeholder="Enter your full name" required>
      </div>
      <div class="form-group">
        <label for="eq-course">Course Interested</label>
        <select id="eq-course" name="course" class="form-control">
          <option value="">-- Select Course --</option>
          ${opts}
        </select>
      </div>
      <div class="form-group">
        <label for="eq-phone">Mobile Number *</label>
        <input id="eq-phone" type="tel" name="phone" class="form-control" placeholder="+91 XXXXX XXXXX" required>
      </div>
      <button type="submit" class="btn-whatsapp">
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Send via WhatsApp
      </button>
    </form>
  </div>

  <!-- PROFESSIONAL COURSES -->
  <div class="sidebar-links">
    <h4>🏅 Professional Courses</h4>
    <a href="courses.html#devops">DevOps Professional <span>→</span></a>
    <a href="courses.html#python-fs">Python Full Stack <span>→</span></a>
    <a href="courses.html#mern">MERN Stack <span>→</span></a>
    <a href="courses.html#java-fs">Java Full Stack <span>→</span></a>
    <a href="courses.html#data-science">Data Science & ML <span>→</span></a>
    <a href="courses.html#cloud-architect">Cloud Architect <span>→</span></a>
    <a href="courses.html#hacking">Ethical Hacking <span>→</span></a>
    <a href="courses.html#digital-marketing">Digital Marketing <span>→</span></a>
    <a href="courses.html#ai-dev">AI Engineering <span>→</span></a>
    <a href="courses.html#ccna">CCNA Networking <span>→</span></a>
  </div>

  <!-- CRASH COURSES -->
  <div class="sidebar-links">
    <h4>⚡ Crash Courses</h4>
    <a href="courses.html#reactjs">ReactJS Course <span>→</span></a>
    <a href="courses.html#nodejs">NodeJS Course <span>→</span></a>
    <a href="courses.html#python-crash">Python Crash <span>→</span></a>
    <a href="courses.html#java-crash">Java Crash <span>→</span></a>
    <a href="courses.html#wordpress">WordPress <span>→</span></a>
    <a href="courses.html#excel">Excel Enterprise <span>→</span></a>
    <a href="courses.html#manual-testing">Manual Testing ISTQB <span>→</span></a>
    <a href="courses.html#selenium-java">Selenium Automation <span>→</span></a>
  </div>

  <!-- QUICK LINKS -->
  <div class="sidebar-links">
    <h4>🔗 Quick Links</h4>
    <a href="free-demo.html">🎯 Free Demo Registration <span>→</span></a>
    <a href="corporate.html">🏢 Corporate Training <span>→</span></a>
    <a href="events.html">📅 Events & Workshops <span>→</span></a>
    <a href="reviews.html">⭐ Student Reviews <span>→</span></a>
    <a href="blog.html">📝 Blog & Career Tips <span>→</span></a>
    <a href="contact.html">📞 Contact Us <span>→</span></a>
    <a href="enquiry.html">✉️ Course Enquiry <span>→</span></a>
  </div>

  <!-- CALL BOX -->
  <div style="background:linear-gradient(135deg,var(--gold),var(--gold-light));border-radius:14px;padding:22px;text-align:center;box-shadow:0 8px 28px rgba(245,166,35,0.35);">
    <div style="font-size:36px;margin-bottom:8px;">🐝</div>
    <div style="color:var(--navy);font-weight:800;font-size:15px;margin-bottom:6px;">Call Us Now!</div>
    <a href="tel:+918056804567" style="color:var(--navy);font-size:22px;font-weight:900;display:block;text-decoration:none;">+91 8056804567</a>
    <div style="color:var(--navy-mid);font-size:11px;margin-top:5px;font-weight:600;">Mon–Sat · 9 AM – 7 PM</div>
    <a href="https://wa.me/${BB.wa}" target="_blank" rel="noopener"
       style="display:inline-flex;align-items:center;gap:6px;margin-top:12px;background:var(--navy);color:var(--gold);padding:8px 18px;border-radius:20px;font-size:13px;font-weight:700;text-decoration:none;">
      💬 WhatsApp Us
    </a>
  </div>

</aside>`;
}

/* ══════════════════════════════
   FOOTER HTML
══════════════════════════════ */
const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-grid">

      <!-- BRAND -->
      <div class="footer-brand">
        <a href="index.html" class="nav-logo" style="display:inline-flex;align-items:center;gap:10px;margin-bottom:12px;text-decoration:none;">
          <img src="images/logo.png" alt="Brainy Bee Logo" style="height:52px;width:auto;" loading="lazy">
          <div class="nav-logo-text">
            <h1 style="font-size:19px;">BRAINY <span>BEE</span></h1>
            <small>Online Learning Platform</small>
          </div>
        </a>
        <p>Brainy Bee is Tamil Nadu's most trusted live online learning platform, offering 50+ IT courses in Full Stack, DevOps, Data Science, Cybersecurity, AI & Digital Marketing. Empowering 12,000+ learners across all 38 districts of Tamil Nadu.</p>
        <div class="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener" class="social-btn" aria-label="Facebook" title="Facebook">f</a>
          <a href="https://instagram.com" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram" title="Instagram">📸</a>
          <a href="https://youtube.com" target="_blank" rel="noopener" class="social-btn" aria-label="YouTube" title="YouTube">▶</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn" title="LinkedIn">in</a>
          <a href="https://wa.me/${BB.wa}" target="_blank" rel="noopener" class="social-btn" aria-label="WhatsApp" title="WhatsApp">💬</a>
        </div>
      </div>

      <!-- QUICK LINKS -->
      <div class="footer-col">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="courses.html">All Courses</a></li>
          <li><a href="corporate.html">Corporate Training</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="events.html">Events & Workshops</a></li>
          <li><a href="reviews.html">Student Reviews</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="enquiry.html">Enquiry</a></li>
          <li><a href="free-demo.html">Free Demo</a></li>
        </ul>
      </div>

      <!-- PROFESSIONAL COURSES -->
      <div class="footer-col">
        <h5>Professional Courses</h5>
        <ul>
          <li><a href="courses.html#devops">DevOps Professional</a></li>
          <li><a href="courses.html#mern">MERN Stack</a></li>
          <li><a href="courses.html#python-fs">Python Full Stack</a></li>
          <li><a href="courses.html#java-fs">Java Full Stack</a></li>
          <li><a href="courses.html#cloud-architect">Cloud Architect</a></li>
          <li><a href="courses.html#data-science">Data Science & ML</a></li>
          <li><a href="courses.html#hacking">Ethical Hacking</a></li>
          <li><a href="courses.html#azure">Azure Administrator</a></li>
          <li><a href="courses.html#digital-marketing">Digital Marketing</a></li>
          <li><a href="courses.html#ai-dev">AI Engineering</a></li>
        </ul>
      </div>

      <!-- CRASH COURSES -->
      <div class="footer-col">
        <h5>Crash Courses</h5>
        <ul>
          <li><a href="courses.html#java-crash">Java</a></li>
          <li><a href="courses.html#python-crash">Python</a></li>
          <li><a href="courses.html#reactjs">ReactJS</a></li>
          <li><a href="courses.html#nodejs">NodeJS</a></li>
          <li><a href="courses.html#angular">AngularJS</a></li>
          <li><a href="courses.html#wordpress">WordPress</a></li>
          <li><a href="courses.html#excel">Excel Enterprise</a></li>
          <li><a href="courses.html#ms-office">MS Office</a></li>
          <li><a href="courses.html#selenium-java">Selenium Java</a></li>
          <li><a href="courses.html#manual-testing">Manual Testing</a></li>
        </ul>
      </div>

      <!-- CONTACT -->
      <div class="footer-col">
        <h5>Contact Info</h5>
        <ul class="footer-contact-info">
          <li>
            <span>📞</span>
            <div>
              <strong style="color:#c0d0e8;display:block;margin-bottom:2px;">Phone / WhatsApp</strong>
              <a href="tel:+918056804567" style="color:#8a9bb5;">+91 8056804567</a>
            </div>
          </li>
          <li>
            <span>✉️</span>
            <div>
              <strong style="color:#c0d0e8;display:block;margin-bottom:2px;">Email</strong>
              <a href="mailto:${BB.email}" style="color:#8a9bb5;">${BB.email}</a>
            </div>
          </li>
          <li>
            <span>🌐</span>
            <div>
              <strong style="color:#c0d0e8;display:block;margin-bottom:2px;">Website</strong>
              <a href="https://${BB.website}" target="_blank" rel="noopener" style="color:#8a9bb5;">${BB.website}</a>
            </div>
          </li>
          <li>
            <span>🕘</span>
            <div>
              <strong style="color:#c0d0e8;display:block;margin-bottom:2px;">Hours</strong>
              <span style="color:#8a9bb5;">Mon–Sat: 9 AM – 7 PM</span>
            </div>
          </li>
          <li>
            <span>🏫</span>
            <div>
              <strong style="color:#c0d0e8;display:block;margin-bottom:2px;">Mode</strong>
              <span style="color:#8a9bb5;">100% Online · Tamil Nadu</span>
            </div>
          </li>
        </ul>
      </div>

    </div><!-- /footer-grid -->

    <!-- FOOTER BOTTOM -->
    <div class="footer-bottom">
      <p>© 2025 <a href="index.html">Brainy Bee Online Learning Platform</a>. All Rights Reserved. Tamil Nadu, India.</p>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Refund Policy</a>
      </div>
    </div>

  </div>
</footer>
<button id="scrollTop" title="Back to Top" aria-label="Scroll to top">↑</button>`;

/* ══════════════════════════════
   INJECT ON DOM READY
══════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // Topbar
  const topbarEl = document.getElementById('topbar');
  if (topbarEl) topbarEl.innerHTML = topbarHTML;

  // Navbar
  const navbarEl = document.getElementById('navbar');
  if (navbarEl) navbarEl.innerHTML = navbarHTML;

  // Footer
  const footerEl = document.getElementById('footer');
  if (footerEl) footerEl.innerHTML = footerHTML;

  // Sidebar
  const sidebarEl = document.getElementById('sidebar');
  if (sidebarEl) {
    const course = sidebarEl.getAttribute('data-course') || '';
    sidebarEl.innerHTML = buildSidebar(course);
  }

});
