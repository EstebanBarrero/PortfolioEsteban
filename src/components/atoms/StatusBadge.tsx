import type { ComponentChildren } from 'preact';

export function StatusBadge({ children }: { children: ComponentChildren }) {
  return (
    <div class="status-badge" aria-label="Open to work">
      <span class="status-dot" />
      <span>{children}</span>
    </div>
  );
}
