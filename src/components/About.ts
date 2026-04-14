// ============================================================
// ABOUT COMPONENT
// ============================================================

export function renderAbout(): string {
  return `
<section id="about" aria-labelledby="about-heading">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-label">// 01. about_me</span>
      <h2 class="section-title" id="about-heading">The Developer Behind the Code</h2>
    </div>

    <div class="about-grid">

      <!-- Left — illustration / photo -->
      <div class="about-visual reveal-left">
        <div class="about-img-wrapper">
          <img
            src="/assets/avatar.jpg"
            alt="Esteban working"
            class="about-img"
            loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <!-- Fallback placeholder -->
          <div class="about-img-placeholder" style="display:none;">
            <div class="placeholder-inner">
              <span class="placeholder-icon">👨‍💻</span>
              <span class="placeholder-text">EST</span>
            </div>
          </div>

          <!-- Floating code badge -->
          <div class="about-code-badge" aria-hidden="true">
            <span class="code-badge-prefix">const</span>
            <span class="code-badge-var"> dev</span>
            <span class="code-badge-op"> = {</span><br/>
            <span class="code-badge-indent">  city: </span>
            <span class="code-badge-str">"Medellín"</span><br/>
            <span class="code-badge-indent">  passion: </span>
            <span class="code-badge-str">"AI + Code"</span><br/>
            <span class="code-badge-op">}</span>
          </div>

          <!-- Years badge -->
          <div class="about-years-badge">
            <span class="years-number">6+</span>
            <span class="years-label">Years Exp.</span>
          </div>
        </div>
      </div>

      <!-- Right — bio text -->
      <div class="about-content reveal-right">

        <p class="about-bio">
          Born and raised in <strong>Medellín, Colombia 🇨🇴</strong>, I started
          writing code as a teenager, driven by curiosity about how the web works.
          What began with simple HTML pages grew into a deep passion for building
          complex, scalable systems that solve real problems.
        </p>

        <p class="about-bio">
          Today I work at the intersection of <strong>full-stack engineering</strong>
          and <strong>artificial intelligence</strong> — designing cloud-native
          architectures on AWS, building AI-powered applications with OpenAI and
          Anthropic Claude, and connecting everything through clean, maintainable code.
        </p>

        <p class="about-bio">
          I believe the best software is born from deep understanding of the problem
          domain, disciplined engineering practices, and a healthy obsession with
          developer experience. When I'm not coding, you'll find me exploring the
          latest LLM research or contributing to open source.
        </p>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Stats row -->
        <div class="about-stats">
          <div class="about-stat">
            <span class="stat-number text-gradient-cyan">50+</span>
            <span class="stat-label">Projects Shipped</span>
          </div>
          <div class="about-stat">
            <span class="stat-number text-gradient-cyan">6+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="about-stat">
            <span class="stat-number text-gradient-cyan">15+</span>
            <span class="stat-label">AWS Services</span>
          </div>
          <div class="about-stat">
            <span class="stat-number text-gradient-cyan">∞</span>
            <span class="stat-label">Coffee Consumed</span>
          </div>
        </div>

        <!-- Language badges -->
        <div class="about-languages">
          <span class="about-lang-item">
            <span class="lang-flag">🇨🇴</span>
            <span>Spanish — <strong>Native</strong></span>
          </span>
          <span class="about-lang-item">
            <span class="lang-flag">🇺🇸</span>
            <span>English — <strong>B1 Professional</strong></span>
          </span>
        </div>

      </div>
    </div>

    <!-- Fun facts cards -->
    <div class="about-facts" data-stagger>
      <div class="fact-card glass-card reveal" data-stagger-child>
        <span class="fact-icon">⚡</span>
        <h3 class="fact-title">Favorite Stack</h3>
        <p class="fact-desc">NestJS + Angular + AWS + Anthropic Claude for enterprise AI apps</p>
      </div>
      <div class="fact-card glass-card reveal delay-200" data-stagger-child>
        <span class="fact-icon">🧠</span>
        <h3 class="fact-title">Current Obsession</h3>
        <p class="fact-desc">Building MCP servers and agentic workflows with Claude Agent SDK</p>
      </div>
      <div class="fact-card glass-card reveal delay-400" data-stagger-child>
        <span class="fact-icon">🚀</span>
        <h3 class="fact-title">Side Projects</h3>
        <p class="fact-desc">Open-source AI dev tools, RAG systems, and serverless architectures</p>
      </div>
    </div>

  </div>
</section>`;
}
