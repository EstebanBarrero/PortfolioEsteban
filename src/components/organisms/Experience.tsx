import { SectionHeader } from '../atoms/SectionHeader';
import { ExperienceEntry } from '../molecules/ExperienceEntry';
import { SectionLayout } from '../templates/SectionLayout';
import { experiences } from '../../data/experience';
import { YEARS_EXP } from '../../data/constants';
import { t } from '../../services/LanguageService';

export function Experience() {
  const tNow = t.value;

  return (
    <SectionLayout id="experience" ariaLabelledBy="experience-heading">

      <SectionHeader
        label={tNow.experience.label}
        title={tNow.experience.title}
        id="experience-heading"
        subtitle={tNow.experience.subtitle || `${YEARS_EXP}+ years of shipping production code`}
      />

      <div class="timeline" role="list">
        <div class="timeline-line" aria-hidden="true" />
        {experiences.map((exp, i) => (
          <ExperienceEntry key={exp.id} exp={exp} index={i} />
        ))}
      </div>

    </SectionLayout>
  );
}
