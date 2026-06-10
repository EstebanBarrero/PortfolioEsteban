import { Icon } from '../atoms/Icon';
import { SectionHeader } from '../atoms/SectionHeader';
import { Divider } from '../atoms/Divider';
import { StatItem } from '../molecules/StatItem';
import { FactCard } from '../molecules/FactCard';
import { SectionLayout } from '../templates/SectionLayout';
import { STATS, YEARS_EXP } from '../../data/constants';
import { t } from '../../services/LanguageService';

const FACTS = [
  { icon: 'zap',    delay: 0   },
  { icon: 'brain',  delay: 200 },
  { icon: 'rocket', delay: 400 },
] as const;

export function About() {
  const tNow = t.value;

  return (
    <SectionLayout id="about" ariaLabelledBy="about-heading">

      <SectionHeader label={tNow.about.label} title={tNow.about.title} id="about-heading" />

      <div class="about-grid">

        <div class="about-visual reveal-left">
          <div class="about-img-wrapper">
            <img
              src="/IMG_0057-2.webp"
              alt="Esteban Barrero — Full-Stack & AI Developer"
              class="about-img"
              loading="lazy"
              width={380}
              height={460}
            />

            <div class="about-code-badge" aria-hidden="true">
              <span class="code-badge-prefix">const</span>
              <span class="code-badge-var"> dev</span>
              <span class="code-badge-op"> = {'{'}</span><br />
              <span class="code-badge-indent">  city: </span>
              <span class="code-badge-str">"Medellín"</span><br />
              <span class="code-badge-indent">  passion: </span>
              <span class="code-badge-str">"AI + Code"</span><br />
              <span class="code-badge-op">{'}'}</span>
            </div>

            <div class="about-years-badge">
              <span class="years-number">{YEARS_EXP}+</span>
              <span class="years-label">{tNow.about.yearsExp}</span>
            </div>
          </div>
        </div>

        <div class="about-content reveal-right">
          <p class="about-bio" dangerouslySetInnerHTML={{ __html: tNow.about.bio1 }} />
          <p class="about-bio" dangerouslySetInnerHTML={{ __html: tNow.about.bio2 }} />
          <p class="about-bio" dangerouslySetInnerHTML={{ __html: tNow.about.bio3 }} />

          <Divider />

          <div class="about-stats">
            {STATS.map(s => (
              <StatItem
                key={s.labelKey}
                value={s.value}
                suffix={s.suffix}
                label={tNow.about[s.labelKey.split('.')[1] as keyof typeof tNow.about] as string}
              />
            ))}
          </div>

          <div class="about-languages">
            <span class="about-lang-item">
              <span class="lang-flag"><Icon name="globe" size={16} /></span>
              <span dangerouslySetInnerHTML={{ __html: tNow.about.langSpanish }} />
            </span>
            <span class="about-lang-item">
              <span class="lang-flag"><Icon name="globe" size={16} /></span>
              <span dangerouslySetInnerHTML={{ __html: tNow.about.langEnglish }} />
            </span>
          </div>
        </div>

      </div>

      <div class="about-facts" data-stagger>
        {FACTS.map((f, i) => (
          <FactCard
            key={f.icon}
            icon={f.icon}
            title={tNow.about[`fact${i + 1}Title` as keyof typeof tNow.about] as string}
            desc={tNow.about[`fact${i + 1}Desc` as keyof typeof tNow.about] as string}
            animDelay={f.delay}
          />
        ))}
      </div>

    </SectionLayout>
  );
}
