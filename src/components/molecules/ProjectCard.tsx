import type { Project } from '../../domain';
import { langSignal } from '../../services/LanguageService';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project: p, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, '0');
  const catLabel = p.category.toUpperCase();
  const description = langSignal.value === 'es' ? (p.descriptionEs ?? p.description) : p.description;
  const chipLabel = p.comingSoon ? 'COMING SOON' : catLabel;
  const fullImage = p.id === 'productos-autoctonos' || p.id === 'pandora-loyalty';

  const footerAction = p.comingSoon
    ? <span class="pcard-coming">In development — stay tuned</span>
    : p.demo
      ? <span class="pcard-link pcard-link--locked" title="Demo temporarily unavailable">Live Demo →</span>
      : p.github
        ? <a href={p.github} target="_blank" rel="noopener noreferrer" class="pcard-link">GitHub →</a>
        : <span />;

  return (
    <div
      class={`pcard${index === 0 ? ' active' : ''}${fullImage ? ' pcard--contain' : ''}`}
      data-index={index}
      style={`--pcard-color:${p.accentColor};`}
      role="group"
      aria-label={`Project ${index + 1}: ${p.title}`}
    >
      <div class="pcard-image">
        <span class="pcard-chip">{chipLabel}</span>
        <img
          src={p.image}
          alt={p.title}
          loading={index === 0 ? 'eager' : 'lazy'}
          onError={(e) => (e.currentTarget as HTMLImageElement).closest('.pcard-image')?.classList.add('pcard-img-err')}
        />
      </div>
      <div class="pcard-body">
        <div class="pcard-num">#{num} <span class="pcard-cat">{catLabel}</span></div>
        {p.period && <div class="pcard-period">{p.period}</div>}
        <h3 class="pcard-title">{p.title}</h3>
        <p class="pcard-desc">{description}</p>
        <div class="pcard-footer">
          {footerAction}
          <span class="pcard-tech">{p.tags.slice(0, 2).join(' · ')}</span>
        </div>
      </div>
    </div>
  );
}
