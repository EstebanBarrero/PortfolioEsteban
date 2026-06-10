import { useTerminalReveal } from '../../hooks/useTerminalReveal';

const TERMINAL_LINES = [
  { delay: 0,    type: 'prompt', text: '$ mcp connect --server filesystem --server postgres' },
  { delay: 600,  type: 'output', text: '✓ MCP server "filesystem" connected' },
  { delay: 900,  type: 'output', text: '✓ MCP server "postgres" connected' },
  { delay: 1300, type: 'blank',  text: '' },
  { delay: 1500, type: 'prompt', text: '$ claude chat --model claude-opus-4-6' },
  { delay: 2100, type: 'ai',     text: 'Claude: How can I assist you today?' },
  { delay: 2500, type: 'user',   text: 'User:   Query the users table and summarize trends.' },
  { delay: 3200, type: 'output', text: '[Tool] postgres: SELECT * FROM users LIMIT 1000;' },
  { delay: 4000, type: 'ai',     text: 'Claude: Analyzed 1,000 records. Top trend: 40% YoY' },
  { delay: 4500, type: 'ai',     text: '        growth in API integrations since Q3 2024.' },
  { delay: 5200, type: 'blank',  text: '' },
  { delay: 5400, type: 'prompt', text: '$ openai chat --model gpt-4o --stream' },
  { delay: 6000, type: 'output', text: 'Streaming response... ▊' },
];

export function TerminalWidget() {
  useTerminalReveal();

  return (
    <div class="terminal-widget glass-card" aria-label="Code terminal demo" role="img">
      <div class="terminal-header">
        <div class="term-dots">
          <span class="term-dot red" />
          <span class="term-dot yellow" />
          <span class="term-dot green" />
        </div>
        <span class="term-title">claude-mcp-session</span>
        <span class="term-badge">LIVE</span>
      </div>
      <div class="terminal-body" id="terminal-body">
        {TERMINAL_LINES.map((line, i) => (
          <div
            key={i}
            class={`term-line term-${line.type}`}
            style={`--line-delay:${line.delay}ms;`}
            aria-hidden="true"
          >
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
