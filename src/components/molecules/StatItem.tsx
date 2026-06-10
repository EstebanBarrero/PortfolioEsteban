interface StatItemProps {
  value: number | null;
  suffix: string;
  label: string;
}

export function StatItem({ value, suffix, label }: StatItemProps) {
  return (
    <div class="about-stat">
      {value === null ? (
        <span class="stat-number text-gradient-cyan">∞</span>
      ) : (
        <span
          class="stat-number text-gradient-cyan"
          data-counter={value}
          data-counter-suffix={suffix}
        >
          {value}{suffix}
        </span>
      )}
      <span class="stat-label">{label}</span>
    </div>
  );
}
