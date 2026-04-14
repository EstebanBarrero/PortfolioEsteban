// ============================================================
// SKILLS COMPONENT
// Interactive skill grid with category filter tabs + soft skills
// ============================================================
import { skills, keySkills, softSkills, type Skill } from '../data/skills';

type Category = 'all' | Skill['category'];

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

// Tech categories only (soft skills rendered separately below)
const CATEGORIES: { id: Category; label: string; count: number }[] = [
  { id: 'all',      label: 'All Tech',       count: skills.length },
  { id: 'frontend', label: 'Frontend',       count: skills.filter(s => s.category === 'frontend').length },
  { id: 'backend',  label: 'Backend',        count: skills.filter(s => s.category === 'backend').length },
  { id: 'ai',       label: 'AI & LLMs',      count: skills.filter(s => s.category === 'ai').length },
  { id: 'devops',   label: 'Cloud & DevOps', count: skills.filter(s => s.category === 'devops').length },
  { id: 'tools',    label: 'Tools',          count: skills.filter(s => s.category === 'tools').length },
];

function levelDots(level: number): string {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="level-dot ${i < level ? 'filled' : ''}"></span>`
  ).join('');
}

function renderSkillCard(skill: Skill): string {
  return `
    <div class="skill-card glass-card" data-category="${skill.category}"
         style="--skill-color:${skill.color};"
         role="listitem" aria-label="${skill.name}, level ${skill.level} of 5">
      <div class="skill-card-inner">
        <span class="skill-icon" aria-hidden="true">${skill.icon}</span>
        <span class="skill-name">${skill.name}</span>
        <div class="skill-level" aria-hidden="true">${levelDots(skill.level)}</div>
      </div>
      <div class="skill-glow" aria-hidden="true"></div>
    </div>`;
}

function renderKeySkills(): string {
  return keySkills.map(ks => `
    <div class="key-skill-row reveal">
      <div class="key-skill-header">
        <span class="key-skill-name">${ks.name}</span>
        <span class="key-skill-percent">${ks.percent}%</span>
      </div>
      <div class="progress-bar" role="progressbar"
           aria-valuenow="${ks.percent}" aria-valuemin="0" aria-valuemax="100"
           aria-label="${ks.name}: ${ks.percent}%">
        <div class="progress-fill" data-percent="${ks.percent}"
             style="transition: width 1.2s cubic-bezier(0.4,0,0.2,1);"></div>
      </div>
    </div>
  `).join('');
}

function renderSoftSkills(): string {
  return softSkills.map((s, i) => `
    <div class="soft-skill-card glass-card"
         style="--soft-color:${s.color}; animation-delay:${i * 60}ms;">
      <div class="soft-skill-icon-wrap" aria-hidden="true" style="background: rgba(${hexToRgb(s.color)}, 0.12);">
        <span class="soft-skill-icon">${s.icon}</span>
      </div>
      <div class="soft-skill-body">
        <h3 class="soft-skill-name">${s.name}</h3>
        <p class="soft-skill-desc">${s.description}</p>
      </div>
    </div>
  `).join('');
}

export function renderSkills(): string {
  const tabsHtml = CATEGORIES.map(cat => `
    <button class="skills-tab ${cat.id === 'all' ? 'active' : ''}"
            data-category="${cat.id}"
            aria-pressed="${cat.id === 'all'}">
      ${cat.label}
      <span class="tab-count">${cat.count}</span>
    </button>
  `).join('');

  const cardsHtml = skills.map(renderSkillCard).join('');

  return `
<section id="skills" aria-labelledby="skills-heading">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-label">02 — skills</span>
      <h2 class="section-title" id="skills-heading">Tools of the Trade</h2>
      <p class="section-subtitle">
        Technologies I work with daily — from frontend elegance to cloud architecture
      </p>
    </div>

    <!-- Filter tabs -->
    <div class="skills-tabs reveal" role="group" aria-label="Skill category filter">
      ${tabsHtml}
    </div>

    <!-- Tech skills grid -->
    <div class="skills-grid" role="list" id="skills-grid">
      ${cardsHtml}
    </div>

    <!-- Core competencies progress bars -->
    <div class="key-skills-section">
      <div class="section-header reveal" style="margin-bottom: var(--space-8);">
        <span class="section-label">proficiency</span>
        <h3 class="section-title" style="font-size: var(--fs-2xl);">Core Competencies</h3>
      </div>
      <div class="key-skills-bars">
        ${renderKeySkills()}
      </div>
    </div>

    <!-- ── Soft Skills ──────────────────────────────────── -->
    <div class="soft-skills-section">
      <div class="section-header reveal" style="margin-bottom: var(--space-10);">
        <span class="section-label">beyond the code</span>
        <h3 class="section-title" style="font-size: var(--fs-2xl);">Soft Skills</h3>
        <p class="section-subtitle">
          Great software is built by great people — these are the human qualities I bring to every team
        </p>
      </div>
      <div class="soft-skills-grid" role="list" aria-label="Soft skills">
        ${renderSoftSkills()}
      </div>
    </div>

  </div>
</section>`;
}

export function initSkills(): void {
  const tabs = document.querySelectorAll<HTMLButtonElement>('.skills-tab');
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category as Category;

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-pressed', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-pressed', 'true');

      const cards = grid.querySelectorAll<HTMLElement>('.skill-card');
      cards.forEach(card => {
        const show = category === 'all' || card.dataset.category === category;
        card.style.display = show ? '' : 'none';
        if (show) {
          card.style.animation = 'cardReveal 0.35s ease both';
          setTimeout(() => { card.style.animation = ''; }, 350);
        }
      });
    });
  });
}
