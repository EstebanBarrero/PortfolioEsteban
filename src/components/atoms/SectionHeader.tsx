interface SectionHeaderProps {
  label: string;
  title: string;
  id: string;
  subtitle?: string;
  level?: 2 | 3;
}

export function SectionHeader({ label, title, id, subtitle, level = 2 }: SectionHeaderProps) {
  const Tag = `h${level}` as 'h2' | 'h3';
  return (
    <div class="section-header reveal">
      <span class="section-label">{label}</span>
      <Tag class="section-title" id={id}>{title}</Tag>
      {subtitle && <p class="section-subtitle">{subtitle}</p>}
    </div>
  );
}
