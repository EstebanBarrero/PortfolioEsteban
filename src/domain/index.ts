export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionEs?: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: 'web' | 'ai' | 'api' | 'devops';
  github?: string;
  demo?: string;
  featured?: boolean;
  comingSoon?: boolean;
  accentColor: string;
  period?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
  category: 'frontend' | 'backend' | 'ai' | 'devops' | 'tools' | 'soft';
}

export interface SoftSkill {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface KeySkill {
  name: string;
  percent: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLogo?: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'full-time' | 'freelance' | 'contract' | 'internship';
  highlights: string[];
  highlightsEs?: string[];
  tags: string[];
  accentColor: string;
  projects?: string[];
}

export interface Stat {
  value: number | null;
  suffix: string;
  labelKey: string;
  labelFallback: string;
}

export type Lang = 'en' | 'es';
export type Theme = 'light' | 'dark';
