import { ProgressBar } from '../atoms/ProgressBar';

export function KeySkillBar({ name, percent }: { name: string; percent: number }) {
  return (
    <div class="key-skill-row reveal">
      <div class="key-skill-header">
        <span class="key-skill-name">{name}</span>
        <span class="key-skill-percent">{percent}%</span>
      </div>
      <ProgressBar name={name} percent={percent} />
    </div>
  );
}
