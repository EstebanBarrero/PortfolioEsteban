import { useState } from 'preact/hooks';
import { SectionHeader } from '../atoms/SectionHeader';
import { SkillCard } from '../molecules/SkillCard';
import { SoftSkillCard } from '../molecules/SoftSkillCard';
import { KeySkillBar } from '../molecules/KeySkillBar';
import { SectionLayout } from '../templates/SectionLayout';
import { skills, keySkills, softSkills } from '../../data/skills';
import type { Skill } from '../../domain';
import { t } from '../../services/LanguageService';
import { translations } from '../../data/translations';

type Category = Exclude<Skill['category'], 'soft'>;

const CATEGORIES: { id: Category; i18nKey: string }[] = [
  { id: 'frontend', i18nKey: 'catFrontend' },
  { id: 'backend',  i18nKey: 'catBackend'  },
  { id: 'ai',       i18nKey: 'catAI'       },
  { id: 'devops',   i18nKey: 'catDevOps'   },
  { id: 'tools',    i18nKey: 'catTools'    },
];

const CATEGORY_COUNTS = Object.fromEntries(
  CATEGORIES.map(c => [c.id, skills.filter(s => s.category === c.id).length])
) as Record<Category, number>;

interface Props { lang?: 'en' | 'es'; }

export function Skills({ lang }: Props = {}) {
  const [active, setActive] = useState<Category>('frontend');
  const tNow = lang ? translations[lang] : t.value;

  return (
    <SectionLayout id="skills" ariaLabelledBy="skills-heading">

      <SectionHeader
        label={tNow.skills.label}
        title={tNow.skills.title}
        id="skills-heading"
        subtitle={tNow.skills.subtitle}
      />

      <div class="skills-tabs reveal" role="group" aria-label="Skill category filter">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            class={`skills-tab${active === cat.id ? ' active' : ''}`}
            data-category={cat.id}
            aria-pressed={active === cat.id}
            onClick={() => setActive(cat.id)}
          >
            <span>{(tNow.skills as Record<string, unknown>)[cat.i18nKey] as string}</span>
            <span class="tab-count">{CATEGORY_COUNTS[cat.id]}</span>
          </button>
        ))}
      </div>

      <div class="skills-grid" role="list" id="skills-grid">
        {skills.filter(s => s.category === active).map(skill => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>

      <div class="key-skills-section">
        <div class="section-header reveal" style="margin-bottom: var(--space-8);">
          <span class="section-label">{tNow.skills.coreLabel}</span>
          <h3 class="section-title" style="font-size: var(--fs-2xl);">{tNow.skills.coreTitle}</h3>
        </div>
        <div class="key-skills-bars">
          {keySkills.map(ks => <KeySkillBar key={ks.name} name={ks.name} percent={ks.percent} />)}
        </div>
      </div>

      <div class="soft-skills-section">
        <div class="section-header reveal" style="margin-bottom: var(--space-10);">
          <span class="section-label">{tNow.skills.softLabel}</span>
          <h3 class="section-title" style="font-size: var(--fs-2xl);">{tNow.skills.softTitle}</h3>
          <p class="section-subtitle">{tNow.skills.softSubtitle}</p>
        </div>
        <div class="soft-skills-grid" role="list" aria-label="Soft skills">
          {softSkills.map((s, i) => (
            <SoftSkillCard
              key={s.name}
              skill={s}
              index={i}
              name={tNow.skills.softSkills[i].name}
              desc={tNow.skills.softSkills[i].desc}
            />
          ))}
        </div>
      </div>

    </SectionLayout>
  );
}
