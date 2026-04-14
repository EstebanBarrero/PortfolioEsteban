// ============================================================
// PROJECTS DATA — Edit this file to add / update projects
// Replace image paths in src/assets/projects/ as needed
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;       // path relative to src/assets/projects/
  tags: string[];
  category: 'web' | 'ai' | 'api' | 'devops';
  github?: string;
  demo?: string;
  featured?: boolean;
  accentColor: string; // badge / hover glow color
}

export const projects: Project[] = [
  // ── FEATURED ──────────────────────────────────────────────
  {
    id: 'ai-chat-platform',
    title: 'AI Chat Platform',
    description: 'Full-stack conversational AI platform with multi-model routing, memory, and tool use via MCP.',
    longDescription: 'A production-grade AI chat platform that routes between OpenAI GPT-4o, Anthropic Claude, and open-source models. Features persistent memory via vector DB, MCP server integrations, function calling, and a real-time streaming UI built in Angular.',
    image: '/assets/projects/ai-chat.jpg',
    tags: ['Angular', 'NestJS', 'OpenAI', 'Anthropic', 'MCP', 'WebSockets', 'PostgreSQL', 'AWS'],
    category: 'ai',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
    accentColor: '#00f5ff',
  },
  {
    id: 'aws-serverless-api',
    title: 'Serverless Microservices on AWS',
    description: 'Event-driven microservices architecture using Lambda, API Gateway, DynamoDB, SQS, and CloudFront.',
    longDescription: 'Designed and deployed a scalable serverless backend on AWS. Includes Lambda functions orchestrated by API Gateway, DynamoDB for NoSQL persistence, SQS for async processing, CloudWatch for observability, and a CloudFront CDN layer with WAF security rules.',
    image: '/assets/projects/serverless.jpg',
    tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'SQS', 'CloudFront', 'IAM', 'CloudWatch', 'Terraform'],
    category: 'devops',
    github: 'https://github.com',
    featured: true,
    accentColor: '#ff9900',
  },

  // ── WEB APPS ──────────────────────────────────────────────
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Multi-tenant e-commerce solution with React + NestJS, Stripe payments, and real-time inventory.',
    longDescription: 'Full-stack e-commerce platform featuring React storefront, NestJS backend, Stripe payment processing, real-time stock management with WebSockets, and containerized deployment on AWS ECS with RDS PostgreSQL.',
    image: '/assets/projects/ecommerce.jpg',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Stripe', 'Docker', 'AWS ECS', 'Redis'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    accentColor: '#aaff00',
  },
  {
    id: 'realtime-dashboard',
    title: 'Real-Time Analytics Dashboard',
    description: 'Live data dashboard with WebSockets, Chart.js visualizations, and AWS Kinesis data streams.',
    longDescription: 'Enterprise analytics dashboard pulling real-time data from AWS Kinesis streams, processed by Lambda, stored in DynamoDB, and visualized via a React frontend with Chart.js. Features custom alerting via SNS and role-based access through Cognito.',
    image: '/assets/projects/dashboard.jpg',
    tags: ['React', 'AWS Kinesis', 'Lambda', 'DynamoDB', 'SNS', 'Cognito', 'Chart.js'],
    category: 'web',
    github: 'https://github.com',
    accentColor: '#8b5cf6',
  },

  // ── AI PROJECTS ───────────────────────────────────────────
  {
    id: 'rag-knowledge-base',
    title: 'RAG Knowledge Base System',
    description: 'Retrieval-Augmented Generation system with document ingestion, vector search, and Claude as reasoning engine.',
    longDescription: 'Built a company-wide knowledge base using RAG architecture. Documents are chunked, embedded via OpenAI Embeddings, stored in pgvector, and retrieved semantically. Anthropic Claude powers the final answer synthesis with source citations and confidence scoring.',
    image: '/assets/projects/rag.jpg',
    tags: ['Python', 'FastAPI', 'Anthropic Claude', 'OpenAI Embeddings', 'pgvector', 'LangChain', 'AWS S3'],
    category: 'ai',
    github: 'https://github.com',
    accentColor: '#d4a464',
  },
  {
    id: 'mcp-agent-toolkit',
    title: 'MCP Agent Toolkit',
    description: 'Custom MCP server collection connecting Claude to real-world tools: databases, APIs, and internal services.',
    longDescription: 'Developed a suite of Model Context Protocol servers enabling Claude to interact with PostgreSQL databases, REST APIs, file systems, and internal business tools. Features OAuth authentication, rate limiting, and audit logging for enterprise compliance.',
    image: '/assets/projects/mcp.jpg',
    tags: ['MCP', 'TypeScript', 'Anthropic Claude', 'Node.js', 'OAuth', 'PostgreSQL'],
    category: 'ai',
    github: 'https://github.com',
    accentColor: '#8b5cf6',
  },
  {
    id: 'ai-code-reviewer',
    title: 'AI Code Review Assistant',
    description: 'GitHub bot powered by GPT-4o and Claude that reviews PRs, suggests improvements, and enforces standards.',
    longDescription: 'An automated code review system integrated into GitHub Actions. Uses GPT-4o for bug detection and Claude Sonnet for style/architecture suggestions. Generates structured reports with severity levels, code snippets, and fix suggestions as GitHub PR comments.',
    image: '/assets/projects/code-review.jpg',
    tags: ['OpenAI GPT-4o', 'Anthropic Claude', 'GitHub Actions', 'Node.js', 'TypeScript'],
    category: 'ai',
    github: 'https://github.com',
    accentColor: '#10a37f',
  },

  // ── APIs & BACKENDS ───────────────────────────────────────
  {
    id: 'nestjs-microservices',
    title: 'NestJS Microservices Suite',
    description: 'Production microservices with gRPC transport, CQRS pattern, event sourcing, and distributed tracing.',
    longDescription: 'Enterprise microservices system built with NestJS. Uses gRPC for inter-service communication, Redis for caching, BullMQ for job queues, and OpenTelemetry for distributed tracing. Deployed on Kubernetes (EKS) with Helm charts and automated rollbacks.',
    image: '/assets/projects/microservices.jpg',
    tags: ['NestJS', 'gRPC', 'Redis', 'BullMQ', 'Kubernetes', 'AWS EKS', 'OpenTelemetry'],
    category: 'api',
    github: 'https://github.com',
    accentColor: '#e0234e',
  },
  {
    id: 'spring-boot-api',
    title: 'Spring Boot Banking API',
    description: 'Secure financial REST API with Spring Boot, JWT auth, audit trails, and AWS RDS for data persistence.',
    longDescription: 'High-security banking API built with Spring Boot 3. Features JWT + refresh token authentication, role-based authorization, request/response audit logging, rate limiting, and full test coverage. Deployed via Azure DevOps CI/CD pipeline to AWS EC2 with RDS PostgreSQL backend.',
    image: '/assets/projects/banking-api.jpg',
    tags: ['Java', 'Spring Boot', 'JWT', 'AWS EC2', 'AWS RDS', 'Azure DevOps', 'PostgreSQL'],
    category: 'api',
    github: 'https://github.com',
    accentColor: '#6db33f',
  },
];
