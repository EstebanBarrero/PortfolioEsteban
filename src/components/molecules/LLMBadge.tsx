import { Icon } from '../atoms/Icon';

interface LLMBadgeProps {
  icon: string;
  label: string;
  color: string;
}

export function LLMBadge({ icon, label, color }: LLMBadgeProps) {
  return (
    <div class="llm-item" style={`--llm-color:${color}`}>
      <span class="llm-icon"><Icon name={icon} size={22} /></span>
      <span class="llm-label">{label}</span>
    </div>
  );
}
