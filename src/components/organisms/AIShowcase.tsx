import { SectionHeader } from '../atoms/SectionHeader';
import { AICard } from '../molecules/AICard';
import { LLMBadge } from '../molecules/LLMBadge';
import { TerminalWidget } from '../molecules/TerminalWidget';
import { SectionLayout } from '../templates/SectionLayout';
import { t } from '../../services/LanguageService';

const AI_CARD_ICONS  = ['bot', 'brain', 'plug', 'book-open', 'cpu', 'flask-conical'];
const AI_CARD_COLORS = ['#10a37f', '#d4a464', '#8b5cf6', '#f59e0b', '#00f5ff', '#ff9900'];
const AI_CARD_TAGS   = [
  ['GPT-4o', 'Embeddings', 'Function Calling', 'Streaming'],
  ['Claude Opus', 'Agent SDK', 'MCP', 'Tool Use'],
  ['MCP Protocol', 'TypeScript', 'OAuth', 'Resources'],
  ['LangChain', 'pgvector', 'Pinecone', 'Re-ranking'],
  ['LangGraph', 'AutoGen', 'Claude SDK', 'Memory'],
  ['Bedrock', 'SageMaker', 'Fine-tuning', 'Inference'],
];

const LLM_STRIP = [
  { icon: 'bot',   label: 'OpenAI',      color: '#10a37f' },
  { icon: 'brain', label: 'Anthropic',   color: '#d4a464' },
  { icon: 'link',  label: 'LangChain',   color: '#326ce5' },
  { icon: 'cloud', label: 'Bedrock',     color: '#ff9900' },
  { icon: 'plug',  label: 'MCP',         color: '#8b5cf6' },
  { icon: 'heart', label: 'HuggingFace', color: '#ffd21e' },
];

export function AIShowcase() {
  const tNow = t.value;

  const getAiKey = (n: number, type: 'Title' | 'Desc') =>
    `card${n}${type}` as keyof typeof tNow.ai;

  return (
    <SectionLayout id="ai-showcase" ariaLabelledBy="ai-heading">

      <SectionHeader
        label={tNow.ai.label}
        title={tNow.ai.title}
        id="ai-heading"
        subtitle={tNow.ai.subtitle}
      />

      <div class="ai-hero-split">

        <div class="ai-terminal-col reveal-left">
          <TerminalWidget />
        </div>

        <div class="ai-intro-col reveal-right">
          <div class="ai-headline">
            <h3 class="ai-headline-text">
              <span>{tNow.ai.headlineMain}</span><br />
              <span class="text-gradient-cyan">{tNow.ai.headlineAccent}</span>
            </h3>
          </div>
          <p class="ai-intro-text" dangerouslySetInnerHTML={{ __html: tNow.ai.introPara1 }} />
          <p class="ai-intro-text" dangerouslySetInnerHTML={{ __html: tNow.ai.introPara2 }} />

          <div class="llm-strip">
            {LLM_STRIP.map(item => (
              <LLMBadge key={item.label} icon={item.icon} label={item.label} color={item.color} />
            ))}
          </div>
        </div>

      </div>

      <div class="ai-cards-grid">
        {AI_CARD_ICONS.map((icon, idx) => {
          const n = idx + 1;
          return (
            <AICard
              key={idx}
              icon={icon}
              color={AI_CARD_COLORS[idx]}
              title={tNow.ai[getAiKey(n, 'Title')] as string}
              desc={tNow.ai[getAiKey(n, 'Desc')] as string}
              tags={AI_CARD_TAGS[idx]}
            />
          );
        })}
      </div>

    </SectionLayout>
  );
}
