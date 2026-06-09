import { experiences } from './experience';

function calcYearsExp(): number {
  const years = experiences.map(e => {
    const parts = e.startDate.split(' ');
    return parseInt(parts[parts.length - 1]);
  });
  return new Date().getFullYear() - Math.min(...years);
}

export const YEARS_EXP = calcYearsExp();

import type { Stat } from '../domain';
export type { Stat };

export const STATS: Stat[] = [
  { value: 10,         suffix: '+', labelKey: 'about.statProjects', labelFallback: 'Projects Shipped'  },
  { value: YEARS_EXP,  suffix: '+', labelKey: 'about.statYears',    labelFallback: 'Years Experience'  },
  { value: 3,         suffix: '+', labelKey: 'about.statAWS',      labelFallback: 'AWS Services'      },
  { value: null,       suffix: '',  labelKey: 'about.statCoffee',   labelFallback: 'Coffee Consumed'   },
];

export const CONTACT_EMAIL    = 'barrerodavid10@gmail.com';
export const LINKEDIN_URL     = 'https://www.linkedin.com/in/david-esteban-puentes-barrero';
export const LINKEDIN_DISPLAY = 'linkedin.com/in/david-esteban-puentes-barrero';
export const GITHUB_URL       = 'https://github.com/EstebanBarrero';
export const WHATSAPP_URL     = 'https://wa.me/573193929347';

export const ORBIT_ICONS = [
  { label: 'Angular',    icon: 'layers',     color: '#dd0031' },
  { label: 'React',      icon: 'atom',       color: '#61dafb' },
  { label: 'AWS',        icon: 'cloud',      color: '#ff9900' },
  { label: 'Docker',     icon: 'box',        color: '#2496ed' },
  { label: 'Python',     icon: 'code2',      color: '#3776ab' },
  { label: 'Node.js',    icon: 'server',     color: '#339933' },
  { label: 'TypeScript', icon: 'file-code2', color: '#3178c6' },
  { label: 'AI/LLM',    icon: 'bot',        color: '#10a37f' },
] as const;
