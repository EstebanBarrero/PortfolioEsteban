// ============================================================
// SKILLS DATA — Edit this file to update the skills section
// Each skill: { name, icon (emoji/SVG id), level (1-5), color }
// Categories: frontend | backend | ai | devops | tools
// ============================================================

export interface Skill {
  name: string;
  icon: string;      // emoji or SVG symbol id
  level: number;     // 1–5 proficiency
  color: string;     // accent hex for hover glow
  category: 'frontend' | 'backend' | 'ai' | 'devops' | 'tools' | 'soft';
}

// ── SOFT SKILLS ──────────────────────────────────────────────
// Add to this interface for soft skills specific description
export interface SoftSkill {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const skills: Skill[] = [
  // ── FRONTEND ──────────────────────────────────────────────
  { name: 'Angular',        icon: '🅰️',  level: 5, color: '#dd0031', category: 'frontend' },
  { name: 'React',          icon: '⚛️',  level: 5, color: '#61dafb', category: 'frontend' },
  { name: 'Astro',          icon: '🚀',  level: 4, color: '#ff5d01', category: 'frontend' },
  { name: 'TypeScript',     icon: '🔷',  level: 5, color: '#3178c6', category: 'frontend' },
  { name: 'JavaScript',     icon: '🟡',  level: 5, color: '#f7df1e', category: 'frontend' },
  { name: 'Vite',           icon: '⚡',  level: 4, color: '#646cff', category: 'frontend' },
  { name: 'Next.js',        icon: '▲',   level: 4, color: '#ffffff', category: 'frontend' },
  { name: 'Tailwind CSS',   icon: '🌊',  level: 5, color: '#38bdf8', category: 'frontend' },
  { name: 'HTML5',          icon: '🧱',  level: 5, color: '#e34f26', category: 'frontend' },
  { name: 'CSS3',           icon: '🎨',  level: 5, color: '#1572b6', category: 'frontend' },

  // ── BACKEND ───────────────────────────────────────────────
  { name: 'Node.js',        icon: '🟢',  level: 5, color: '#339933', category: 'backend' },
  { name: 'NestJS',         icon: '🐈',  level: 5, color: '#e0234e', category: 'backend' },
  { name: 'Python',         icon: '🐍',  level: 4, color: '#3776ab', category: 'backend' },
  { name: 'FastAPI',        icon: '⚡',  level: 4, color: '#009688', category: 'backend' },
  { name: 'Java',           icon: '☕',  level: 4, color: '#f89820', category: 'backend' },
  { name: 'Spring Boot',    icon: '🍃',  level: 4, color: '#6db33f', category: 'backend' },
  { name: 'Tomcat',         icon: '🐱',  level: 3, color: '#f8dc75', category: 'backend' },
  { name: 'REST APIs',      icon: '🔗',  level: 5, color: '#00f5ff', category: 'backend' },
  { name: 'PostgreSQL',     icon: '🐘',  level: 4, color: '#336791', category: 'backend' },
  { name: 'MongoDB',        icon: '🍃',  level: 4, color: '#47a248', category: 'backend' },

  // ── AI & LLMs ─────────────────────────────────────────────
  { name: 'OpenAI API',     icon: '🤖',  level: 5, color: '#10a37f', category: 'ai' },
  { name: 'Anthropic Claude', icon: '🧠', level: 5, color: '#d4a464', category: 'ai' },
  { name: 'LangChain',      icon: '🔗',  level: 4, color: '#1c3c5e', category: 'ai' },
  { name: 'MCP Protocol',   icon: '🔌',  level: 5, color: '#8b5cf6', category: 'ai' },
  { name: 'LLM Fine-tuning',icon: '🎯',  level: 3, color: '#ff6b6b', category: 'ai' },
  { name: 'Prompt Eng.',    icon: '✍️',  level: 5, color: '#aaff00', category: 'ai' },
  { name: 'Vector DBs',     icon: '📦',  level: 4, color: '#9333ea', category: 'ai' },
  { name: 'Hugging Face',   icon: '🤗',  level: 3, color: '#ffd21e', category: 'ai' },
  { name: 'AI Agents',      icon: '🕹️', level: 5, color: '#00f5ff', category: 'ai' },
  { name: 'RAG Systems',    icon: '📚',  level: 4, color: '#f59e0b', category: 'ai' },

  // ── DEVOPS & CLOUD ────────────────────────────────────────
  { name: 'AWS EC2',        icon: '🖥️', level: 5, color: '#ff9900', category: 'devops' },
  { name: 'AWS S3',         icon: '🗂️', level: 5, color: '#ff9900', category: 'devops' },
  { name: 'AWS Lambda',     icon: 'λ',   level: 5, color: '#ff9900', category: 'devops' },
  { name: 'AWS RDS',        icon: '🗄️', level: 4, color: '#ff9900', category: 'devops' },
  { name: 'AWS DynamoDB',   icon: '⚡',  level: 4, color: '#ff9900', category: 'devops' },
  { name: 'AWS CloudFront', icon: '🌐',  level: 4, color: '#ff9900', category: 'devops' },
  { name: 'API Gateway',    icon: '🚪',  level: 4, color: '#ff9900', category: 'devops' },
  { name: 'AWS ECS',        icon: '📦',  level: 4, color: '#ff9900', category: 'devops' },
  { name: 'AWS EKS',        icon: '⎈',   level: 3, color: '#ff9900', category: 'devops' },
  { name: 'AWS SNS/SQS',    icon: '📨',  level: 4, color: '#ff9900', category: 'devops' },
  { name: 'AWS CloudWatch', icon: '📊',  level: 4, color: '#ff9900', category: 'devops' },
  { name: 'AWS Cognito',    icon: '🔐',  level: 4, color: '#ff9900', category: 'devops' },
  { name: 'AWS Bedrock',    icon: '🧱',  level: 4, color: '#ff9900', category: 'devops' },
  { name: 'AWS SageMaker',  icon: '🔬',  level: 3, color: '#ff9900', category: 'devops' },
  { name: 'AWS IAM',        icon: '🛡️', level: 5, color: '#ff9900', category: 'devops' },
  { name: 'AWS Route 53',   icon: '🌍',  level: 4, color: '#ff9900', category: 'devops' },
  { name: 'Azure DevOps',   icon: '🔵',  level: 4, color: '#0078d4', category: 'devops' },
  { name: 'Docker',         icon: '🐳',  level: 5, color: '#2496ed', category: 'devops' },
  { name: 'Kubernetes',     icon: '⎈',   level: 4, color: '#326ce5', category: 'devops' },
  { name: 'GitHub Actions', icon: '⚙️',  level: 5, color: '#2088ff', category: 'devops' },
  { name: 'CI/CD Pipelines',icon: '🔄',  level: 5, color: '#00f5ff', category: 'devops' },

  // ── TOOLS ─────────────────────────────────────────────────
  { name: 'Git',            icon: '🌿',  level: 5, color: '#f05032', category: 'tools' },
  { name: 'GitHub',         icon: '🐙',  level: 5, color: '#ffffff', category: 'tools' },
  { name: 'GitLab',         icon: '🦊',  level: 4, color: '#fc6d26', category: 'tools' },
  { name: 'Jira',           icon: '📋',  level: 5, color: '#0052cc', category: 'tools' },
  { name: 'Postman',        icon: '📮',  level: 5, color: '#ff6c37', category: 'tools' },
  { name: 'npm / yarn',     icon: '📦',  level: 5, color: '#cb3837', category: 'tools' },
  { name: 'VS Code',        icon: '💙',  level: 5, color: '#007acc', category: 'tools' },
  { name: 'Linux',          icon: '🐧',  level: 4, color: '#fcc624', category: 'tools' },
];

// ── SOFT SKILLS data ─────────────────────────────────────────
// Add / edit these to update the Soft Skills section.
export const softSkills: SoftSkill[] = [
  {
    name: 'Leadership',
    icon: '🎯',
    description: 'Guide teams with clarity and purpose, turning vision into actionable plans and rallying people around shared goals.',
    color: '#4f46e5',
  },
  {
    name: 'Communication',
    icon: '💬',
    description: 'Translate complex technical concepts into clear language for stakeholders, clients, and cross-functional teammates.',
    color: '#7c3aed',
  },
  {
    name: 'Teamwork & Collaboration',
    icon: '🤝',
    description: 'Thrive in cross-functional teams, aligning backend, frontend, design, and business needs with empathy and transparency.',
    color: '#0891b2',
  },
  {
    name: 'Respect & Inclusion',
    icon: '🌍',
    description: 'Foster a culture where every voice matters — respectful feedback, inclusive practices, and psychological safety.',
    color: '#059669',
  },
  {
    name: 'Problem Solving',
    icon: '🧩',
    description: 'Break down ambiguous challenges, research root causes deeply, and deliver pragmatic solutions under pressure.',
    color: '#d97706',
  },
  {
    name: 'Adaptability',
    icon: '⚡',
    description: 'Pivot quickly when requirements shift, embrace new technologies, and stay calm and effective in fast-paced environments.',
    color: '#dc2626',
  },
  {
    name: 'Mentoring',
    icon: '🌱',
    description: 'Invest in people — share knowledge generously, give constructive code reviews, and help juniors grow with patience.',
    color: '#059669',
  },
  {
    name: 'Critical Thinking',
    icon: '🔍',
    description: 'Evaluate options rigorously, challenge assumptions respectfully, and make data-driven architectural decisions.',
    color: '#4f46e5',
  },
  {
    name: 'Time Management',
    icon: '⏱️',
    description: 'Deliver on time consistently by prioritizing ruthlessly, estimating realistically, and communicating blockers early.',
    color: '#7c3aed',
  },
  {
    name: 'Continuous Learning',
    icon: '📚',
    description: 'Stay ahead of the curve — dedicated to daily learning, open source contribution, and sharing knowledge with the community.',
    color: '#0891b2',
  },
  {
    name: 'Empathy',
    icon: '❤️',
    description: 'Understand user pain points deeply and advocate for solutions that genuinely improve people\'s lives and workflows.',
    color: '#dc2626',
  },
  {
    name: 'Ownership',
    icon: '🛡️',
    description: 'Take full responsibility for deliverables, follow through on commitments, and treat every project as your own.',
    color: '#d97706',
  },
];

// Key skills for progress chart display
export const keySkills = [
  { name: 'Full-Stack Development', percent: 95 },
  { name: 'AI/LLM Integration',     percent: 92 },
  { name: 'Cloud Architecture (AWS)',percent: 88 },
  { name: 'DevOps & CI/CD',         percent: 85 },
  { name: 'System Design',          percent: 82 },
  { name: 'TypeScript / JavaScript',percent: 97 },
];
