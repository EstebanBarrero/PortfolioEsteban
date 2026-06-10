import type { ComponentChildren } from 'preact';

interface SectionLayoutProps {
  id: string;
  ariaLabelledBy?: string;
  ariaLabel?: string;
  children: ComponentChildren;
}

export function SectionLayout({ id, ariaLabelledBy, ariaLabel, children }: SectionLayoutProps) {
  return (
    <section id={id} aria-labelledby={ariaLabelledBy} aria-label={ariaLabel}>
      <div class="container">{children}</div>
    </section>
  );
}
