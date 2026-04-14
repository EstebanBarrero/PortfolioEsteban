// ============================================================
// SCROLL ANIMATIONS — Intersection Observer based
// Elements with class .reveal, .reveal-left, .reveal-right
// become .visible when they enter the viewport.
// Also handles active nav-link highlighting.
// ============================================================

export function initScrollAnimations(): void {
  // ── Reveal elements ──────────────────────────────────────
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after first reveal for perf
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  revealEls.forEach((el) => revealObserver.observe(el));

  // ── Progress bar animations ───────────────────────────────
  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target as HTMLElement;
          const target = bar.dataset.percent ?? '0';
          bar.style.width = `${target}%`;
          progressObserver.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.progress-fill').forEach((el) =>
    progressObserver.observe(el)
  );

  // ── Active nav link tracking ──────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              (link as HTMLAnchorElement).getAttribute('href') === `#${id}`
            );
          });
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: '-80px 0px -40% 0px',
    }
  );

  sections.forEach((s) => sectionObserver.observe(s));

  // ── Navbar scroll state ───────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          navbar.classList.toggle('scrolled', window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ── Stagger children on reveal ────────────────────────────
  const staggerParents = document.querySelectorAll('[data-stagger]');
  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll<HTMLElement>('[data-stagger-child]');
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 80}ms`;
            child.classList.add('visible');
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  staggerParents.forEach((p) => staggerObserver.observe(p));
}

// ── Smooth scroll for anchor links ───────────────────────────
export function initSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const href = (anchor as HTMLAnchorElement).getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.getElementById('navbar')?.offsetHeight ?? 70;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });

        // Close mobile nav if open
        const navLinks = document.querySelector('.nav-links');
        const navToggle = document.getElementById('navToggle');
        navLinks?.classList.remove('open');
        navToggle?.classList.remove('active');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
