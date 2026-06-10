import { Icon } from '../atoms/Icon';
import { LevelDots } from '../atoms/LevelDots';
import type { Skill } from '../../domain';

export function SkillCard({ skill, active }: { skill: Skill; active: boolean }) {
  return (
    <div
      class="skill-card glass-card"
      data-category={skill.category}
      style={`--skill-color:${skill.color};${!active ? ' display:none;' : ''}`}
      role="listitem"
      aria-label={`${skill.name}, level ${skill.level} of 5`}
    >
      <div class="skill-card-inner">
        <span class="skill-icon" aria-hidden="true"><Icon name={skill.icon} size={26} /></span>
        <span class="skill-name">{skill.name}</span>
        <div class="skill-level" aria-hidden="true"><LevelDots level={skill.level} /></div>
      </div>
      <div class="skill-glow" aria-hidden="true" />
    </div>
  );
}
