// ============================================================
// CONTACT COMPONENT
// ============================================================

export function renderContact(): string {
  return `
<section id="contact" aria-labelledby="contact-heading">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-label">// 06. contact</span>
      <h2 class="section-title" id="contact-heading">Let's Build Something</h2>
      <p class="section-subtitle">
        Open to freelance projects, full-time roles, and AI consulting
      </p>
    </div>

    <div class="contact-grid">

      <!-- Left — info -->
      <div class="contact-info reveal-left">

        <div class="contact-availability">
          <span class="avail-dot"></span>
          <span class="avail-text">Available for new opportunities</span>
        </div>

        <h3 class="contact-tagline">
          Got a project in mind?<br/>
          <span class="text-gradient-cyan">I'd love to hear about it.</span>
        </h3>

        <p class="contact-desc">
          Whether you're building an AI product, need cloud architecture help,
          or want a full-stack developer to join your team — let's talk.
        </p>

        <div class="contact-channels">

          <a href="mailto:esteban@example.com" class="contact-channel" aria-label="Send email">
            <span class="channel-icon">✉️</span>
            <div class="channel-info">
              <span class="channel-label">Email</span>
              <span class="channel-value">esteban@example.com</span>
            </div>
          </a>

          <a href="https://wa.me/573001234567" target="_blank" rel="noopener" class="contact-channel" aria-label="WhatsApp">
            <span class="channel-icon">💬</span>
            <div class="channel-info">
              <span class="channel-label">WhatsApp</span>
              <span class="channel-value">+57 300 123 4567</span>
            </div>
          </a>

          <a href="https://linkedin.com/in/esteban" target="_blank" rel="noopener" class="contact-channel" aria-label="LinkedIn">
            <span class="channel-icon">💼</span>
            <div class="channel-info">
              <span class="channel-label">LinkedIn</span>
              <span class="channel-value">linkedin.com/in/esteban</span>
            </div>
          </a>

          <a href="https://github.com/esteban" target="_blank" rel="noopener" class="contact-channel" aria-label="GitHub">
            <span class="channel-icon">🐙</span>
            <div class="channel-info">
              <span class="channel-label">GitHub</span>
              <span class="channel-value">github.com/esteban</span>
            </div>
          </a>

        </div>

        <!-- Location pin -->
        <div class="contact-location glass-card">
          <span class="location-pin">📍</span>
          <div>
            <div class="location-city">Medellín, Colombia 🇨🇴</div>
            <div class="location-tz">UTC-5 · Open to remote worldwide</div>
          </div>
        </div>

      </div>

      <!-- Right — form -->
      <div class="contact-form-col reveal-right">
        <form class="contact-form glass-card" id="contactForm" novalidate aria-label="Contact form">

          <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-input"
              placeholder="Your name"
              required
              autocomplete="name"
              aria-required="true"
            />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-input"
              placeholder="your@email.com"
              required
              autocomplete="email"
              aria-required="true"
            />
          </div>

          <div class="form-group">
            <label for="subject" class="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              class="form-input"
              placeholder="Project idea, collaboration, etc."
            />
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              class="form-input form-textarea"
              placeholder="Tell me about your project..."
              rows="5"
              required
              aria-required="true"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary form-submit" id="submitBtn">
            <span id="submitText">Send Message →</span>
            <span id="submitLoading" style="display:none;">Sending...</span>
          </button>

          <p id="formStatus" class="form-status" role="alert" aria-live="polite"></p>

        </form>
      </div>

    </div>
  </div>
</section>`;
}

export function initContact(): void {
  const form = document.getElementById('contactForm') as HTMLFormElement;
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn     = document.getElementById('submitBtn') as HTMLButtonElement;
    const text    = document.getElementById('submitText')!;
    const loading = document.getElementById('submitLoading')!;
    const status  = document.getElementById('formStatus')!;

    // UI: loading state
    btn.disabled  = true;
    text.style.display    = 'none';
    loading.style.display = 'inline';

    // Simulate form submission (replace with real API call)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // UI: success
    text.style.display    = 'inline';
    loading.style.display = 'none';
    btn.disabled          = false;
    status.textContent    = '✓ Message sent! I\'ll get back to you soon.';
    status.className      = 'form-status success';
    form.reset();

    setTimeout(() => {
      status.textContent = '';
      status.className   = 'form-status';
    }, 5000);
  });

  // Floating label effect
  const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('.form-input');
  inputs.forEach(input => {
    input.addEventListener('focus',  () => input.parentElement?.classList.add('focused'));
    input.addEventListener('blur',   () => {
      if (!input.value) input.parentElement?.classList.remove('focused');
    });
  });
}
