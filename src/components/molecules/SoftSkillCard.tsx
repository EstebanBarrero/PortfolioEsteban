import { memo } from 'preact/compat';
import { Icon } from '../atoms/Icon';
import { hexToRgb } from '../../shared/color';
import type { SoftSkill } from '../../domain';

interface SoftSkillCardProps {
  skill: SoftSkill;
  index: number;
  name: string;
  desc: string;
}

export const SoftSkillCard = memo(function SoftSkillCard({ skill, index, name, desc }: SoftSkillCardProps) {
  return (
    <div
      class="soft-skill-card glass-card"
      style={`--soft-color:${skill.color}; animation-delay:${index * 60}ms;`}
    >
      <div
        class="soft-skill-icon-wrap"
        aria-hidden="true"
        style={`background: rgba(${hexToRgb(skill.color)}, 0.12);`}
      >
        <span class="soft-skill-icon"><Icon name={skill.icon} size={22} /></span>
      </div>
      <div class="soft-skill-body">
        <h3 class="soft-skill-name">{name}</h3>
        <p class="soft-skill-desc">{desc}</p>
      </div>
    </div>
  );
});
