// ============================================================
// AI SHOWCASE COMPONENT
// Dedicated section for AI work — terminal widget, cards
// ============================================================

const TERMINAL_LINES = [
  { delay: 0,    type: 'prompt',  text: '$ mcp connect --server filesystem --server postgres' },
  { delay: 600,  type: 'output',  text: '✓ MCP server "filesystem" connected' },
  { delay: 900,  type: 'output',  text: '✓ MCP server "postgres" connected' },
  { delay: 1300, type: 'blank',   text: '' },
  { delay: 1500, type: 'prompt',  text: '$ claude chat --model claude-opus-4-6' },
  { delay: 2100, type: 'ai',      text: 'Claude: How can I assist you today?' },
  { delay: 2500, type: 'user',    text: 'User:   Query the users table and summarize trends.' },
  { delay: 3200, type: 'output',  text: '[Tool] postgres: SELECT * FROM users LIMIT 1000;' },
  { delay: 4000, type: 'ai',      text: 'Claude: Analyzed 1,000 records. Top trend: 40% YoY' },
  { delay: 4500, type: 'ai',      text: '        growth in API integrations since Q3 2024.' },
  { delay: 5200, type: 'blank',   text: '' },
  { delay: 5400, type: 'prompt',  text: '$ openai chat --model gpt-4o --stream' },
  { delay: 6000, type: 'output',  text: 'Streaming response... ▊' },
];

const AI_CARDS = [
  {
    icon: '🤖',
    title: 'OpenAI Integration',
    color: '#10a37f',
    desc: 'GPT-4o, GPT-4 Vision, Whisper, DALL-E 3, Embeddings API — production-grade integrations with streaming, function calling, and structured outputs.',
    tags: ['GPT-4o', 'Embeddings', 'Function Calling', 'Streaming'],
  },
  {
    icon: '🧠',
    title: 'Anthropic Claude',
    color: '#d4a464',
    desc: 'Claude Opus, Sonnet, and Haiku via Claude API and Claude Agent SDK. Extended thinking, computer use, MCP tools, and multi-turn agentic workflows.',
    tags: ['Claude Opus', 'Agent SDK', 'MCP', 'Tool Use'],
  },
  {
    icon: '🔌',
    title: 'MCP Servers',
    color: '#8b5cf6',
    desc: 'Built and deployed custom Model Context Protocol servers connecting Claude to databases, REST APIs, file systems, and internal business services.',
    tags: ['MCP Protocol', 'TypeScript', 'OAuth', 'Resources'],
  },
  {
    icon: '📚',
    title: 'RAG & Vector Search',
    color: '#f59e0b',
    desc: 'End-to-end RAG pipelines: document ingestion, chunking, embedding, pgvector/Pinecone storage, and semantic retrieval with re-ranking.',
    tags: ['LangChain', 'pgvector', 'Pinecone', 'Re-ranking'],
  },
  {
    icon: '🕹️',
    title: 'AI Agents',
    color: '#00f5ff',
    desc: 'Multi-agent orchestration systems with tool use, memory, planning, and human-in-the-loop checkpoints for complex automation workflows.',
    tags: ['LangGraph', 'AutoGen', 'Claude SDK', 'Memory'],
  },
  {
    icon: '🔬',
    title: 'AWS Bedrock & SageMaker',
    color: '#ff9900',
    desc: 'Deployed fine-tuned models and managed LLM endpoints on AWS Bedrock. Custom training pipelines on SageMaker for domain-specific models.',
    tags: ['Bedrock', 'SageMaker', 'Fine-tuning', 'Inference'],
  },
];

function renderTerminal(): string {
  const lines = TERMINAL_LINES.map(line => `
    <div class="term-line term-${line.type}" style="--line-delay:${line.delay}ms;" aria-hidden="true">
      ${line.text}
    </div>
  `).join('');

  return `
    <div class="terminal-widget glass-card" aria-label="Code terminal demo" role="img">
      <div class="terminal-header">
        <div class="term-dots">
          <span class="term-dot red"></span>
          <span class="term-dot yellow"></span>
          <span class="term-dot green"></span>
        </div>
        <span class="term-title">claude-mcp-session</span>
        <span class="term-badge">LIVE</span>
      </div>
      <div class="terminal-body" id="terminal-body">
        ${lines}
      </div>
    </div>`;
}

function renderAICard(card: typeof AI_CARDS[0]): string {
  return `
    <div class="ai-card glass-card reveal" style="--card-accent:${card.color};">
      <div class="ai-card-icon" aria-hidden="true" style="color:${card.color}; text-shadow: 0 0 20px ${card.color}40;">
        ${card.icon}
      </div>
      <h3 class="ai-card-title">${card.title}</h3>
      <p class="ai-card-desc">${card.desc}</p>
      <div class="ai-card-tags">
        ${card.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>`;
}

export function renderAIShowcase(): string {
  return `
<section id="ai-showcase" aria-labelledby="ai-heading">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-label">// 05. ai_engineering</span>
      <h2 class="section-title" id="ai-heading">AI at the Core</h2>
      <p class="section-subtitle">
        Building the next generation of software with LLMs, agents, and MCP integrations
      </p>
    </div>

    <!-- Terminal + intro split -->
    <div class="ai-hero-split">

      <div class="ai-terminal-col reveal-left">
        ${renderTerminal()}
      </div>

      <div class="ai-intro-col reveal-right">
        <div class="ai-headline">
          <h3 class="ai-headline-text">
            Connecting AI to the<br/>
            <span class="text-gradient-lime">Real World</span>
          </h3>
        </div>
        <p class="ai-intro-text">
          I specialize in building production AI systems that go beyond simple chat —
          connecting large language models to live data sources, APIs, and internal
          tools through the <strong>Model Context Protocol (MCP)</strong>.
        </p>
        <p class="ai-intro-text">
          My work spans from rapid prompt engineering and fine-tuning to architecting
          multi-agent pipelines that handle complex, real-world business workflows with
          full observability and safety guardrails.
        </p>

        <!-- LLM logos strip -->
        <div class="llm-strip">
          <div class="llm-item" style="--llm-color:#10a37f">
            <span class="llm-icon">🤖</span>
            <span class="llm-label">OpenAI</span>
          </div>
          <div class="llm-item" style="--llm-color:#d4a464">
            <span class="llm-icon">🧠</span>
            <span class="llm-label">Anthropic</span>
          </div>
          <div class="llm-item" style="--llm-color:#326ce5">
            <span class="llm-icon">🦜</span>
            <span class="llm-label">LangChain</span>
          </div>
          <div class="llm-item" style="--llm-color:#ff9900">
            <span class="llm-icon">☁️</span>
            <span class="llm-label">Bedrock</span>
          </div>
          <div class="llm-item" style="--llm-color:#8b5cf6">
            <span class="llm-icon">🔌</span>
            <span class="llm-label">MCP</span>
          </div>
          <div class="llm-item" style="--llm-color:#ffd21e">
            <span class="llm-icon">🤗</span>
            <span class="llm-label">HuggingFace</span>
          </div>
        </div>
      </div>
    </div>

    <!-- AI cards grid -->
    <div class="ai-cards-grid">
      ${AI_CARDS.map(renderAICard).join('')}
    </div>

  </div>
</section>`;
}

export function initAIShowcase(): void {
  // Animate terminal lines with stagger on intersection
  const terminal = document.querySelector('.terminal-widget');
  if (!terminal) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          terminal.classList.add('terminal-animate');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  observer.observe(terminal);
}
