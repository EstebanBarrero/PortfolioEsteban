import { SectionHeader } from '../atoms/SectionHeader';
import { ProjectCard } from '../molecules/ProjectCard';
import { SectionLayout } from '../templates/SectionLayout';
import { useCarousel } from '../../hooks/useCarousel';
import { projects } from '../../data/projects';
import { t } from '../../services/LanguageService';
import { translations } from '../../data/translations';

interface Props { lang?: 'en' | 'es'; }

export function Projects({ lang }: Props = {}) {
  const tNow = lang ? translations[lang] : t.value;
  useCarousel();

  return (
    <SectionLayout id="projects" ariaLabelledBy="projects-heading">

      <SectionHeader
        label={tNow.projects.label}
        title={tNow.projects.title}
        id="projects-heading"
        subtitle={tNow.projects.subtitle}
      />

      <div
        class="proj-carousel reveal"
        tabIndex={0}
        aria-roledescription="carousel"
        aria-label="Featured projects"
      >
        <button class="proj-arrow proj-arrow--prev" aria-label="Proyecto anterior">&#8592;</button>
        <div class="proj-track-outer">
          <div class="proj-track" id="proj-track" aria-live="polite">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
        <button class="proj-arrow proj-arrow--next" aria-label="Proyecto siguiente">&#8594;</button>
      </div>

      <div class="proj-dots-row" role="tablist" aria-label="Project navigation">
        {projects.map((p, i) => (
          <button
            key={p.id}
            class={`proj-dot${i === 0 ? ' active' : ''}`}
            data-index={i}
            style={`--dot-color:${p.accentColor}`}
            aria-label={`Project ${i + 1}: ${p.title}`}
            role="tab"
            aria-selected={i === 0}
          />
        ))}
      </div>

    </SectionLayout>
  );
}
