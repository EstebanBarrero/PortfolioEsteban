import { Icon } from '../atoms/Icon';
import { TechTag } from '../atoms/TechTag';

interface AICardProps {
  icon: string;
  color: string;
  title: string;
  desc: string;
  tags: string[];
}

export function AICard({ icon, color, title, desc, tags }: AICardProps) {
  return (
    <div class="ai-card glass-card reveal" style={`--card-accent:${color};`}>
      <div class="ai-card-icon" aria-hidden="true" style={`color:${color};`}>
        <Icon name={icon} size={40} />
      </div>
      <h3 class="ai-card-title">{title}</h3>
      <p class="ai-card-desc">{desc}</p>
      <div class="ai-card-tags">
        {tags.map(tag => <TechTag key={tag} label={tag} />)}
      </div>
    </div>
  );
}
