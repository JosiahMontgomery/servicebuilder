/* ============================================
   WASHINGTON STATE — MAIN JS (Full Translation)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll effect ───────────────── */
  const nav = document.getElementById('site-nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Active nav link highlight ──────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('/').pop();
    if (
      linkFile === currentPath ||
      (currentPath === '' && linkFile === 'index.html')
    ) {
      link.classList.add('active');
    }
  });

  /* Highlight Research button on subpages */
  if (currentPath.match(/geography|biology|climatology|geology/)) {
    const researchBtn = document.querySelector('.nav-research-btn');
    if (researchBtn) researchBtn.classList.add('active');
  }

  /* ── Scroll-reveal ──────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Parallax hero bg ───────────────────── */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroBg.style.transform = `scale(1.04) translateY(${y * 0.28}px)`;
    }, { passive: true });
  }

  /* ── Research sidebar active state ─────── */
  const sidebarLinks = document.querySelectorAll('.research-sidebar a');
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('/').pop();
    if (linkFile === currentPath) {
      link.classList.add('active');
    }
  });

  // ================== MOBILE HAMBURGER MENU ==================
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = '☰';
  hamburger.setAttribute('aria-label', 'Toggle menu');

  const navLinks = document.querySelector('.nav-links');
  if (nav && navLinks) {
    nav.insertBefore(hamburger, navLinks);

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
      hamburger.textContent = navLinks.classList.contains('mobile-active') ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-active');
        hamburger.textContent = '☰';
      });
    });
  }

  // ================== FULL LANGUAGE TRANSLATION ==================
  let currentLang = 'en';

  const translations = {
    en: {
      "nav-home": "Home",
      "nav-research": "Research",
      "nav-gallery": "Photo Gallery",
      "nav-about": "About",

      "hero-eyebrow-pnw": "Pacific Northwest · The Evergreen State",
      "begin-exploring": "Begin Exploring",
      "learn-more": "Learn More",
      "view-all-research": "View All Research",
      "scroll": "Scroll",

      "hero-title": "Exploring <em>Washington</em><br>From Summit to Shore",
      "about-project": "About This Project",
      "where-wilderness": "Where <em>Wilderness</em><br>Meets Wonder",
      "research-areas": "Research Areas",
      "four-lenses": "Four Lenses<br>on <em>Washington</em>",

      "gallery-title": "Photo Gallery",
      "gallery-heading": "Washington Through the Lens",

      "about-eyebrow": "Personal Project",
      "about-title": "About This Work",
      "about-heading": "About This Site",

      "geography-title": "Geography",
      "geography-heading": "Geography Research",

      "biology-title": "Biology",
      "biology-heading": "Biology Research",

      "climatology-title": "Climatology",
      "climatology-heading": "Climatology Research",

      "geology-title": "Geology",
      "geology-heading": "Geology Research"
    },

    pt: {
      "nav-home": "Início",
      "nav-research": "Pesquisa",
      "nav-gallery": "Galeria de Fotos",
      "nav-about": "Sobre",

      "hero-eyebrow-pnw": "Noroeste Pacífico · O Estado Evergreen",
      "begin-exploring": "Começar a Explorar",
      "learn-more": "Saiba Mais",
      "view-all-research": "Ver Toda a Pesquisa",
      "scroll": "Role para baixo",

      "hero-title": "Explorando <em>Washington</em><br>Do Cume à Costa",
      "about-project": "Sobre Este Projeto",
      "where-wilderness": "Onde a <em>Selva</em><br>Encontra o Encanto",
      "research-areas": "Áreas de Pesquisa",
      "four-lenses": "Quatro Lentes<br>sobre <em>Washington</em>",

      "gallery-title": "Galeria de Fotos",
      "gallery-heading": "Washington Através das Lentes",

      "about-eyebrow": "Projeto Pessoal",
      "about-title": "Sobre Este Trabalho",
      "about-heading": "Sobre Este Site",

      "geography-title": "Geografia",
      "geography-heading": "Pesquisa em Geografia",

      "biology-title": "Biologia",
      "biology-heading": "Pesquisa em Biologia",

      "climatology-title": "Climatologia",
      "climatology-heading": "Pesquisa em Climatologia",

      "geology-title": "Geologia",
      "geology-heading": "Pesquisa em Geologia"
    }
  };

  const langToggle = document.createElement('button');
  langToggle.className = 'lang-toggle';
  langToggle.innerHTML = '🇧🇷 PT';
  langToggle.setAttribute('aria-label', 'Toggle language');

  if (nav) nav.appendChild(langToggle);

  function translatePage(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    langToggle.innerHTML = currentLang === 'en' ? '🇧🇷 PT' : '🇺🇸 EN';
    translatePage(currentLang);
  });

  // Initial translation
  translatePage(currentLang);

/* ── Back to Top Logic ──────────────────── */
  const topBtn = document.getElementById("backToTop");

  if (topBtn) {
    // We use addEventListener instead of window.onscroll 
    // so it doesn't overwrite your Navbar scroll logic above.
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    }, { passive: true });

    topBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

}); // This closes the DOMContentLoaded block