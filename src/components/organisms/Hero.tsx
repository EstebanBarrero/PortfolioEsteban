import { memo } from 'preact/compat';
import { Icon } from '../atoms/Icon';
import { Button } from '../atoms/Button';
import { Avatar } from '../atoms/Avatar';
import { StatusBadge } from '../atoms/StatusBadge';
import { OrbitIcon } from '../molecules/OrbitIcon';
import { useTypewriter } from '../../hooks/useTypewriter';
import { ORBIT_ICONS } from '../../data/constants';
import { t, langSignal } from '../../services/LanguageService';

const TypewriterContainer = memo(() => (
  <div class="hero-typewriter" aria-live="polite" aria-label="Current role">
    <span id="typewriter-text" class="tw-text" />
    <span class="tw-cursor" aria-hidden="true">_</span>
  </div>
));

export function Hero() {
  const tNow = t.value;
  const cvFile = langSignal.value === 'es' ? 'CV_Esteban.pdf' : 'cv_esteban_en.pdf';
  useTypewriter();

  return (
    <section id="hero" aria-label="Hero">

      <div class="hero-mesh" aria-hidden="true">
        <div class="mesh-blob mesh-blob-1" />
        <div class="mesh-blob mesh-blob-2" />
        <div class="mesh-blob mesh-blob-3" />
        <div class="mesh-grid" />
      </div>

      <div class="noise-overlay" aria-hidden="true" />
      <div class="scan-line" aria-hidden="true" />

      <div class="container hero-container">

        <div class="hero-content">
          <div class="hero-eyebrow reveal">
            <span class="eyebrow-dot" />
            <span>{tNow.hero.available}</span>
          </div>

          <h1 class="hero-heading reveal delay-100">
            <span class="greeting">{tNow.hero.greeting}</span>
            <span class="hero-name text-gradient-cyan">Esteban</span>
          </h1>

          <TypewriterContainer />

          <p class="hero-bio reveal delay-300" dangerouslySetInnerHTML={{ __html: tNow.hero.bio }} />

          <div class="hero-cta reveal delay-400">
            <Button variant="primary" href="#projects">
              <span>{tNow.hero.viewProjects}</span>
              <Icon name="arrow-right" size={16} />
            </Button>
            <Button variant="outline" href={`/assets/${cvFile}`} download={cvFile} aria-label="Download CV">
              <Icon name="download" size={16} />
              <span>{tNow.hero.downloadCV}</span>
            </Button>
          </div>
        </div>

        <div class="hero-visual reveal-right delay-200">
          <div class="avatar-orbit-wrapper">
            <div class="orbit-ring orbit-ring-outer" aria-hidden="true" />
            <div class="orbit-ring orbit-ring-inner" aria-hidden="true" />

            {ORBIT_ICONS.slice(0, 4).map((item, i) => (
              <OrbitIcon
                key={item.label}
                icon={item.icon}
                label={item.label}
                color={item.color}
                orbitDelay={(i / 4) * 360}
                ring="inner"
              />
            ))}

            {ORBIT_ICONS.slice(4).map((item, i) => (
              <OrbitIcon
                key={item.label}
                icon={item.icon}
                label={item.label}
                color={item.color}
                orbitDelay={(i / 4) * 360}
                ring="outer"
              />
            ))}

            <Avatar src="/avatar.webp" alt="Esteban Barrero — Full-Stack & AI Developer" />

            <StatusBadge>{tNow.hero.openToWork}</StatusBadge>
          </div>
        </div>

      </div>

      <div class="scroll-indicator reveal" aria-label="Scroll down">
        <span class="scroll-label">{tNow.hero.scroll}</span>
        <div class="scroll-arrow">
          <span /><span />
        </div>
      </div>

    </section>
  );
}
