import { Icon } from '../atoms/Icon';
import { Badge } from '../atoms/Badge';
import { TechTag } from '../atoms/TechTag';
import type { Experience } from '../../domain';
import { langSignal } from '../../services/LanguageService';

const TYPE_LABELS: Record<string, { en: string; es: string }> = {
  'full-time':   { en: 'Full-Time',  es: 'Tiempo Completo' },
  'freelance':   { en: 'Freelance',  es: 'Freelance'       },
  'contract':    { en: 'Contract',   es: 'Contrato'        },
  'internship':  { en: 'Internship', es: 'Pasantía'        },
};

export function ExperienceEntry({ exp, index }: { exp: Experience; index: number }) {
  const side = index % 2 === 0 ? 'left' : 'right';
  const isEs = langSignal.value === 'es';
  const highlights = isEs ? (exp.highlightsEs ?? exp.highlights) : exp.highlights;
  const endDateDisplay = exp.endDate === 'Present' ? (isEs ? 'Presente' : 'Present') : exp.endDate;
  const typeLabel = TYPE_LABELS[exp.type]?.[isEs ? 'es' : 'en'] ?? exp.type;
  return (
    <div
      class={`timeline-item timeline-${side} reveal ${index % 2 !== 0 ? 'reveal-right' : ''}`}
      style={`--entry-color:${exp.accentColor};`}
    >
      <div class="timeline-dot" aria-hidden="true">
        <span class="dot-inner" />
      </div>

      <article class="timeline-card glass-card">
        <div class="timeline-header">
          <div class="timeline-role-group">
            <h3 class="timeline-role">{exp.role}</h3>
            <div class="timeline-company">
              <span class="company-name">{exp.company}</span>
              <span class="company-location">
                <Icon name="map-pin" size={13} /> {exp.location}
              </span>
            </div>
          </div>
          <div class="timeline-meta">
            <span class="timeline-dates">{exp.startDate} — {endDateDisplay}</span>
            <Badge variant={exp.endDate === 'Present' ? 'lime' : 'cyan'}>{typeLabel}</Badge>
          </div>
        </div>

        <ul class="timeline-highlights" role="list">
          {highlights.map((h, i) => (
            <li key={i} class="timeline-highlight">
              <span class="highlight-chevron"><Icon name="chevron-right" size={14} /></span> {h}
            </li>
          ))}
        </ul>

        {exp.projects?.length && (
          <div class="timeline-projects">
            <span class="projects-label"><Icon name="layers" size={13} /> Projects:</span>
            {exp.projects.map(p => <span key={p} class="project-pill">{p}</span>)}
          </div>
        )}

        <div class="timeline-tags">
          {exp.tags.map(tag => <TechTag key={tag} label={tag} />)}
        </div>
      </article>
    </div>
  );
}
