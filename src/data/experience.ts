// ============================================================
// EXPERIENCE DATA — Edit this file to update the timeline
// ============================================================

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLogo?: string;   // optional path in src/assets/logos/
  location: string;
  startDate: string;
  endDate: string;        // 'Present' for current role
  type: 'full-time' | 'freelance' | 'contract' | 'internship';
  highlights: string[];
  tags: string[];
  accentColor: string;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Full-Stack & AI Developer',
    company: 'Tech Startup (NDA)',
    location: 'Medellín, Colombia — Remote',
    startDate: 'Jan 2023',
    endDate: 'Present',
    type: 'full-time',
    highlights: [
      'Architected and shipped an AI chat platform used by 10k+ daily users, integrating OpenAI GPT-4o and Anthropic Claude via MCP',
      'Led migration of monolithic Node.js app to NestJS microservices on AWS EKS, reducing latency by 40%',
      'Built RAG knowledge base system with LangChain + pgvector, enabling semantic search over 50k+ documents',
      'Designed CI/CD pipelines with GitHub Actions and Azure DevOps; automated deployments cut release time by 70%',
      'Mentored 3 junior developers on TypeScript best practices, clean architecture, and AI-first development',
    ],
    tags: ['NestJS', 'Angular', 'OpenAI', 'Anthropic', 'MCP', 'AWS EKS', 'Docker', 'CI/CD'],
    accentColor: '#00f5ff',
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Developer',
    company: 'Digital Agency',
    location: 'Medellín, Colombia',
    startDate: 'Mar 2021',
    endDate: 'Dec 2022',
    type: 'full-time',
    highlights: [
      'Delivered 12+ web applications for enterprise clients using React, Angular, and Spring Boot',
      'Implemented AWS infrastructure (EC2, S3, CloudFront, RDS) for high-traffic e-commerce platforms',
      'Built RESTful and GraphQL APIs with NestJS and FastAPI, integrated with third-party services',
      'Introduced Docker-based dev environments that reduced onboarding time from 2 days to 2 hours',
      'Integrated Stripe, PayU, and custom payment gateways for Colombian fintech clients',
    ],
    tags: ['React', 'Angular', 'Spring Boot', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL'],
    accentColor: '#aaff00',
  },
  {
    id: 'exp-3',
    role: 'Backend Developer',
    company: 'Financial Services Co.',
    location: 'Medellín, Colombia',
    startDate: 'Jun 2019',
    endDate: 'Feb 2021',
    type: 'full-time',
    highlights: [
      'Developed secure banking APIs with Java Spring Boot, processing 500k+ daily transactions',
      'Designed database schemas and query optimization strategies reducing report generation time by 65%',
      'Implemented OAuth 2.0 / JWT authentication and role-based access control for 200k+ users',
      'Deployed applications on AWS EC2 with RDS and established Tomcat-based production environments',
      'Collaborated with Agile/Scrum teams using Jira, delivering 2-week sprint cycles consistently',
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Oracle DB', 'AWS EC2', 'Tomcat', 'JWT'],
    accentColor: '#8b5cf6',
  },
  {
    id: 'exp-4',
    role: 'Junior Web Developer',
    company: 'Freelance / Remote',
    location: 'Medellín, Colombia',
    startDate: 'Jan 2018',
    endDate: 'May 2019',
    type: 'freelance',
    highlights: [
      'Built 20+ websites and web apps for local SMEs using JavaScript, HTML5, CSS3, and Node.js',
      'Developed custom WordPress and headless CMS solutions with React frontends',
      'Created REST APIs with Express.js and integrated third-party services (WhatsApp, email, analytics)',
      'Maintained ongoing client relationships with rapid turnaround on feature requests',
    ],
    tags: ['JavaScript', 'Node.js', 'React', 'CSS3', 'WordPress', 'MySQL'],
    accentColor: '#ff6b35',
  },
];
