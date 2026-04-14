// ============================================================
// EXPERIENCE COMPONENT — Vertical animated timeline
// ============================================================
import { experiences } from '../data/experience';

function renderEntry(exp: typeof experiences[0], index: number): string {
  const highlights = exp.highlights
    .map(h => `<li class="timeline-highlight"><span>▸</span> ${h}</li>`)
    .join('');

  const tags = exp.tags
    .map(t => `<span class="tech-tag">${t}</span>`)
    .join('');

  const side = index % 2 === 0 ? 'left' : 'right';

  return `
    <div class="timeline-item timeline-${side} reveal ${index % 2 === 0 ? '' : 'reveal-right'}"
         style="--entry-color:${exp.accentColor};">

      <!-- Dot on the line -->
      <div class="timeline-dot" aria-hidden="true">
        <span class="dot-inner"></span>
      </div>

      <!-- Card -->
      <article class="timeline-card glass-card">
        <div class="timeline-header">
          <div class="timeline-role-group">
            <h3 class="timeline-role">${exp.role}</h3>
            <div class="timeline-company">
              <span class="company-name">${exp.company}</span>
              <span class="company-location">📍 ${exp.location}</span>
            </div>
          </div>
          <div class="timeline-meta">
            <span class="timeline-dates">
              ${exp.startDate} — ${exp.endDate}
            </span>
            <span class="timeline-type badge ${exp.endDate === 'Present' ? 'badge-lime' : 'badge-cyan'}">
              ${exp.type}
            </span>
          </div>
        </div>

        <ul class="timeline-highlights" role="list">
          ${highlights}
        </ul>

        <div class="timeline-tags">
          ${tags}
        </div>
      </article>
    </div>`;
}

export function renderExperience(): string {
  return `
<section id="experience" aria-labelledby="experience-heading">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-label">// 04. experience</span>
      <h2 class="section-title" id="experience-heading">Where I've Worked</h2>
      <p class="section-subtitle">
        6+ years of shipping production code across agencies, startups, and enterprise
      </p>
    </div>

    <div class="timeline" role="list">
      <!-- Vertical line -->
      <div class="timeline-line" aria-hidden="true"></div>

      ${experiences.map((exp, i) => renderEntry(exp, i)).join('')}
    </div>

  </div>
</section>`;
}
