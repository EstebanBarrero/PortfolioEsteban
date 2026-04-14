// ============================================================
// PROJECTS COMPONENT
// ============================================================
import { projects, type Project } from '../data/projects';

type ProjCategory = 'all' | Project['category'];

const PROJ_CATS: { id: ProjCategory; label: string }[] = [
  { id: 'all',    label: 'All Projects' },
  { id: 'ai',     label: 'AI Projects'  },
  { id: 'web',    label: 'Web Apps'     },
  { id: 'api',    label: 'APIs & Backends' },
  { id: 'devops', label: 'Cloud / DevOps' },
];

function renderFeaturedProject(p: Project): string {
  return `
    <div class="project-featured glass-card reveal" style="--proj-color:${p.accentColor};">
      <div class="featured-inner">
        <div class="featured-image">
          <img src="${p.image}" alt="${p.title}" loading="lazy"
               onerror="this.parentElement.classList.add('img-placeholder')" />
          <div class="featured-category-badge badge badge-cyan">Featured ${p.category.toUpperCase()}</div>
        </div>
        <div class="featured-content">
          <div class="project-tags">
            ${p.tags.slice(0, 5).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <h3 class="featured-title">${p.title}</h3>
          <p class="featured-desc">${p.longDescription}</p>
          <div class="project-links">
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline" aria-label="GitHub repo for ${p.title}">GitHub →</a>` : ''}
            ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener" class="btn btn-primary" aria-label="Live demo for ${p.title}">Live Demo ↗</a>` : ''}
          </div>
        </div>
      </div>
    </div>`;
}

function renderProjectCard(p: Project): string {
  return `
    <article class="project-card glass-card" data-category="${p.category}"
             style="--proj-color:${p.accentColor};"
             role="listitem">
      <div class="project-card-img">
        <img src="${p.image}" alt="${p.title}" loading="lazy"
             onerror="this.parentElement.classList.add('img-placeholder')" />
        <div class="project-overlay">
          <p class="overlay-desc">${p.longDescription}</p>
          <div class="overlay-links">
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">GitHub</a>` : ''}
            ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener" class="btn btn-primary btn-sm">Demo ↗</a>` : ''}
          </div>
        </div>
      </div>
      <div class="project-card-body">
        <div class="project-category-label">${p.category}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">
          ${p.tags.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          ${p.tags.length > 4 ? `<span class="tech-tag">+${p.tags.length - 4}</span>` : ''}
        </div>
      </div>
    </article>`;
}

export function renderProjects(): string {
  const featured = projects.filter(p => p.featured);
  const regular  = projects.filter(p => !p.featured);

  const tabsHtml = PROJ_CATS.map(cat => `
    <button class="skills-tab proj-tab ${cat.id === 'all' ? 'active' : ''}"
            data-category="${cat.id}"
            aria-pressed="${cat.id === 'all'}">
      ${cat.label}
    </button>
  `).join('');

  return `
<section id="projects" aria-labelledby="projects-heading">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-label">// 03. projects</span>
      <h2 class="section-title" id="projects-heading">Things I've Built</h2>
      <p class="section-subtitle">
        From AI-powered platforms to cloud-native architectures — production-grade work
      </p>
    </div>

    <!-- Featured projects -->
    <div class="featured-projects">
      ${featured.map(renderFeaturedProject).join('')}
    </div>

    <!-- Filter tabs -->
    <div class="skills-tabs proj-tabs reveal" role="group" aria-label="Project category filter">
      ${tabsHtml}
    </div>

    <!-- Projects grid -->
    <div class="projects-grid" id="projects-grid" role="list">
      ${regular.map(renderProjectCard).join('')}
    </div>

  </div>
</section>`;
}

export function initProjects(): void {
  const tabs = document.querySelectorAll<HTMLButtonElement>('.proj-tab');
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category as ProjCategory;

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-pressed', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-pressed', 'true');

      const cards = grid.querySelectorAll<HTMLElement>('.project-card');
      cards.forEach(card => {
        const show = category === 'all' || card.dataset.category === category;
        card.style.display = show ? '' : 'none';
        if (show) {
          card.style.animation = 'cardReveal 0.4s ease both';
          setTimeout(() => { card.style.animation = ''; }, 400);
        }
      });
    });
  });
}
