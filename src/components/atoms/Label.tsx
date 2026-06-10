import type { ComponentChildren } from 'preact';

export function Label({ for: htmlFor, children }: { for: string; children: ComponentChildren }) {
  return <label for={htmlFor} class="form-label">{children}</label>;
}
