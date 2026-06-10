import { Icon } from '../atoms/Icon';

interface FactCardProps {
  icon: string;
  title: string;
  desc: string;
  animDelay?: number;
}

export function FactCard({ icon, title, desc, animDelay = 0 }: FactCardProps) {
  return (
    <div
      class={`fact-card glass-card reveal${animDelay ? ` delay-${animDelay}` : ''}`}
      data-stagger-child
    >
      <span class="fact-icon"><Icon name={icon} size={28} /></span>
      <h3 class="fact-title">{title}</h3>
      <p class="fact-desc">{desc}</p>
    </div>
  );
}
