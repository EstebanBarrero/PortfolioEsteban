export function initScrollAnimations(): void {

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach((el) => revealObserver.observe(el));

  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target as HTMLElement;
          bar.style.width = `${bar.dataset.percent ?? 0}%`;
          progressObserver.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.progress-fill').forEach((el) => progressObserver.observe(el));

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = parseInt(el.dataset.counter ?? '0', 10);
        const suffix = el.dataset.counterSuffix ?? '';
        if (isNaN(target)) return;

        const start = performance.now();
        const duration = 1600;

        const update = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(ease * target) + suffix;
          if (p < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => counterObserver.observe(el));

  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = document.querySelectorAll('.nav-link');
  let lastActiveId: string | null = null;

  function updateActiveNav() {
    const navHeight = document.getElementById('navbar')?.offsetHeight ?? 80;
    const checkY = navHeight + window.innerHeight * 0.2;
    let activeId: string | null = null;

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= checkY) {
        activeId = section.getAttribute('id');
      }
    }

    if (activeId !== lastActiveId) {
      lastActiveId = activeId;
      navLinks.forEach((link) => {
        link.classList.toggle(
          'active',
          (link as HTMLAnchorElement).getAttribute('href') === `#${activeId}`
        );
      });
    }
  }

  const scrollIndicator = document.querySelector<HTMLElement>('.scroll-indicator');
  if (scrollIndicator) {
    const hideThreshold = window.innerHeight * 0.3;
    const onScrollHide = () => {
      if (window.scrollY > hideThreshold) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.transform = 'translateX(-50%) translateY(8px)';
        scrollIndicator.style.pointerEvents = 'none';
        window.removeEventListener('scroll', onScrollHide);
      }
    };
    window.addEventListener('scroll', onScrollHide, { passive: true });
  }

  const navbar = document.getElementById('navbar');
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar?.classList.toggle('scrolled', window.scrollY > 60);
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  updateActiveNav();

  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll<HTMLElement>('[data-stagger-child]').forEach((child, i) => {
            child.style.transitionDelay = `${i * 80}ms`;
            child.classList.add('visible');
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('[data-stagger]').forEach((p) => staggerObserver.observe(p));
}

export function initSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const href = (anchor as HTMLAnchorElement).getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href);
      if (!target) return;

      const navHeight = document.getElementById('navbar')?.offsetHeight ?? 70;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navHeight,
        behavior: 'smooth',
      });

      const navLinks = document.querySelector('.nav-links');
      const navToggle = document.getElementById('navToggle');
      navLinks?.classList.remove('open');
      navToggle?.classList.remove('active');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });
}
