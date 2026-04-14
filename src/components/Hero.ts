// ============================================================
// HERO COMPONENT
// Full-screen hero with gradient mesh, typewriter, orbit icons
// ============================================================
import { Typewriter } from '../utils/typewriter';

const ORBIT_ICONS = [
  { label: 'Angular',    icon: '🅰️',  color: '#dd0031' },
  { label: 'React',      icon: '⚛️',  color: '#61dafb' },
  { label: 'AWS',        icon: '☁️',  color: '#ff9900' },
  { label: 'Docker',     icon: '🐳',  color: '#2496ed' },
  { label: 'Python',     icon: '🐍',  color: '#3776ab' },
  { label: 'Node.js',    icon: '🟢',  color: '#339933' },
  { label: 'TypeScript', icon: '🔷',  color: '#3178c6' },
  { label: 'AI/LLM',     icon: '🤖',  color: '#10a37f' },
];

export function renderHero(): string {
  const orbitInner = ORBIT_ICONS.slice(0, 4)
    .map((item, i) => {
      const delay = (i / 4) * 360;
      return `
        <div class="orbit-icon orbit-inner-icon"
             style="--orbit-delay:${delay}deg; --icon-color:${item.color};"
             aria-label="${item.label}">
          ${item.icon}
        </div>`;
    }).join('');

  const orbitOuter = ORBIT_ICONS.slice(4)
    .map((item, i) => {
      const delay = (i / 4) * 360;
      return `
        <div class="orbit-icon orbit-outer-icon"
             style="--orbit-delay:${delay}deg; --icon-color:${item.color};"
             aria-label="${item.label}">
          ${item.icon}
        </div>`;
    }).join('');

  return `
<section id="hero" aria-label="Hero">

  <!-- Animated mesh background -->
  <div class="hero-mesh" aria-hidden="true">
    <div class="mesh-blob mesh-blob-1"></div>
    <div class="mesh-blob mesh-blob-2"></div>
    <div class="mesh-blob mesh-blob-3"></div>
    <div class="mesh-grid"></div>
  </div>

  <!-- Noise texture -->
  <div class="noise-overlay" aria-hidden="true"></div>

  <!-- Scan line decoration -->
  <div class="scan-line" aria-hidden="true"></div>

  <div class="container hero-container">

    <!-- LEFT — text content -->
    <div class="hero-content">
      <div class="hero-eyebrow reveal">
        <span class="eyebrow-dot"></span>
        <span>Available for new projects</span>
      </div>

      <h1 class="hero-heading reveal delay-100">
        <span class="greeting">Hola, I'm</span><br/>
        <span class="hero-name text-gradient-cyan">Esteban</span>
      </h1>

      <div class="hero-typewriter reveal delay-200" aria-live="polite">
        <span class="tw-prefix">// </span>
        <span id="typewriter-text" class="tw-text"></span>
        <span class="tw-cursor" aria-hidden="true">_</span>
      </div>

      <p class="hero-bio reveal delay-300">
        Full-Stack Developer &amp; AI Engineer from
        <strong>Medellín, Colombia 🇨🇴</strong> — building
        scalable systems where backend reliability meets frontend
        elegance, with AI at the core.
      </p>

      <div class="hero-cta reveal delay-400">
        <a href="#projects" class="btn btn-primary">
          <span>View Projects</span>
          <span>→</span>
        </a>
        <a href="/assets/cv.pdf" class="btn btn-outline" download aria-label="Download CV">
          <span>⬇</span>
          <span>Download CV</span>
        </a>
        <a href="#contact" class="btn btn-ghost">
          <span>Contact Me</span>
        </a>
      </div>

      <!-- Language badges -->
      <div class="hero-langs reveal delay-500">
        <span class="lang-badge">🇨🇴 Spanish — Native</span>
        <span class="lang-badge">🇺🇸 English — B1</span>
      </div>
    </div>

    <!-- RIGHT — avatar with orbit -->
    <div class="hero-visual reveal-right delay-200">
      <div class="avatar-orbit-wrapper">

        <!-- Outer orbit ring decoration -->
        <div class="orbit-ring orbit-ring-outer" aria-hidden="true"></div>
        <div class="orbit-ring orbit-ring-inner" aria-hidden="true"></div>

        <!-- Orbiting tech icons — inner ring -->
        ${orbitInner}

        <!-- Orbiting tech icons — outer ring -->
        ${orbitOuter}

        <!-- Avatar -->
        <div class="avatar-container">
          <img
            src="/assets/avatar.jpg"
            alt="Esteban — Full-Stack & AI Developer"
            class="avatar-img"
            loading="eager"
            onerror="this.src='data:image/svg+xml,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="#0f0f1a"/>
                <circle cx="100" cy="75" r="40" fill="#1a1a2e"/>
                <circle cx="100" cy="175" r="65" fill="#1a1a2e"/>
                <text x="100" y="85" font-family="monospace" font-size="36" fill="#00f5ff" text-anchor="middle">E</text>
              </svg>
            `)}'"
          />
          <div class="avatar-glow" aria-hidden="true"></div>
        </div>

        <!-- Status badge -->
        <div class="status-badge" aria-label="Open to work">
          <span class="status-dot"></span>
          <span>Open to work</span>
        </div>
      </div>
    </div>

  </div>

  <!-- Scroll indicator -->
  <div class="scroll-indicator reveal" aria-label="Scroll down">
    <span class="scroll-label">Scroll</span>
    <div class="scroll-arrow">
      <span></span><span></span>
    </div>
  </div>

</section>`;
}

export function initHero(): void {
  // Typewriter
  const el = document.getElementById('typewriter-text');
  if (el) {
    new Typewriter({
      element: el,
      phrases: [
        'Full-Stack Developer',
        'AI Engineer',
        'Cloud Architect',
        'Open Source Enthusiast',
        'LLM Integrations Expert',
        'MCP Builder',
      ],
      typeSpeed: 60,
      eraseSpeed: 30,
      pauseAfter: 2000,
      cursor: false,
    }).start();
  }

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    const isOpen = navLinks?.classList.toggle('open');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}
