// ============================================================
// MAIN ENTRY POINT
// Imports all styles, renders all components, initializes utils
// ============================================================

// ── Styles ───────────────────────────────────────────────────
// global.css is loaded via <link> in index.html to prevent navbar FOUC
import './components/Hero.css';
import './components/About.css';
import './components/Skills.css';
import './components/Projects.css';
import './components/Experience.css';
import './components/AIShowcase.css';
import './components/Contact.css';
import './components/Footer.css';

// ── Components ───────────────────────────────────────────────
import { renderHero,       initHero       } from './components/Hero';
import { renderAbout                      } from './components/About';
import { renderSkills,     initSkills     } from './components/Skills';
import { renderProjects,   initProjects   } from './components/Projects';
import { renderExperience                 } from './components/Experience';
import { renderAIShowcase, initAIShowcase } from './components/AIShowcase';
import { renderContact,    initContact    } from './components/Contact';
import { renderFooter,     initFooter     } from './components/Footer';

// ── Utilities ────────────────────────────────────────────────
import { initCursor          } from './utils/cursor';
import { initScrollAnimations, initSmoothScroll } from './utils/scrollAnimations';

// ── DOM ──────────────────────────────────────────────────────
const app = document.getElementById('app');
if (!app) throw new Error('#app element not found');

// Render all sections into the DOM
app.innerHTML = [
  renderHero(),
  renderAbout(),
  renderSkills(),
  renderProjects(),
  renderExperience(),
  renderAIShowcase(),
  renderContact(),
  renderFooter(),
].join('\n');

// ── Initialize ───────────────────────────────────────────────
// Order matters: DOM must be ready before utils & component inits
document.addEventListener('DOMContentLoaded', init);

// DOMContentLoaded may have already fired (module scripts run deferred)
if (document.readyState !== 'loading') init();

function init(): void {
  initCursor();
  initScrollAnimations();
  initSmoothScroll();
  initHero();
  initSkills();
  initProjects();
  initAIShowcase();
  initContact();
  initFooter();
}
