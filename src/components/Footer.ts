// ============================================================
// FOOTER COMPONENT
// ============================================================

const ASCII_LOGO = `
 ███████╗███████╗████████╗
 ██╔════╝██╔════╝╚══██╔══╝
 █████╗  ███████╗   ██║
 ██╔══╝  ╚════██║   ██║
 ███████╗███████║   ██║
 ╚══════╝╚══════╝   ╚═╝
`.trim();

export function renderFooter(): string {
  const year = new Date().getFullYear();

  return `
<footer id="footer" role="contentinfo">
  <div class="container footer-container">

    <!-- Top row -->
    <div class="footer-top">

      <!-- ASCII logo -->
      <div class="footer-brand">
        <pre class="ascii-logo" aria-label="EST logo">${ASCII_LOGO}</pre>
        <p class="footer-tagline">
          Full-Stack Developer &amp; AI Engineer<br/>
          <span class="text-cyan">Medellín, Colombia 🇨🇴</span>
        </p>
      </div>

      <!-- Quick nav -->
      <nav class="footer-nav" aria-label="Footer navigation">
        <span class="footer-nav-title">Navigate</span>
        <ul role="list">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#ai-showcase">AI</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <!-- Social links -->
      <div class="footer-social">
        <span class="footer-nav-title">Connect</span>
        <div class="social-links">
          <a href="https://github.com/esteban" target="_blank" rel="noopener"
             class="social-link" aria-label="GitHub profile">
            <span class="social-icon">🐙</span>
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/esteban" target="_blank" rel="noopener"
             class="social-link" aria-label="LinkedIn profile">
            <span class="social-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="mailto:esteban@example.com"
             class="social-link" aria-label="Email">
            <span class="social-icon">✉️</span>
            <span>Email</span>
          </a>
          <a href="https://wa.me/573001234567" target="_blank" rel="noopener"
             class="social-link" aria-label="WhatsApp">
            <span class="social-icon">💬</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

    </div>

    <!-- Divider line -->
    <div class="footer-divider" aria-hidden="true"></div>

    <!-- Bottom row -->
    <div class="footer-bottom">
      <p class="footer-credit">
        Built with
        <a href="https://vitejs.dev" target="_blank" rel="noopener">Vite</a> +
        <a href="https://typescriptlang.org" target="_blank" rel="noopener">TypeScript</a>
        + ❤️ from Medellín
      </p>
      <p class="footer-copy">
        <span class="text-dim">// </span>
        &copy; ${year} Esteban. All rights reserved.
      </p>
      <button class="back-to-top" id="backToTop" aria-label="Back to top">
        ↑ Top
      </button>
    </div>

  </div>
</footer>`;
}

export function initFooter(): void {
  const btn = document.getElementById('backToTop');
  btn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
