import type { ComponentChildren } from 'preact';

type BadgeVariant = 'cyan' | 'lime' | 'purple' | 'orange' | 'default';

export function Badge({ variant = 'default', children }: { variant?: BadgeVariant; children: ComponentChildren }) {
  const cls = variant === 'default' ? 'badge' : `badge badge-${variant}`;
  return <span class={cls}>{children}</span>;
}
