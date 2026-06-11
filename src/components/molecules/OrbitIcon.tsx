import { memo } from 'preact/compat';
import { Icon } from '../atoms/Icon';

interface OrbitIconProps {
  icon: string;
  label: string;
  color: string;
  orbitDelay: number;
  ring: 'inner' | 'outer';
}

export const OrbitIcon = memo(function OrbitIcon({ icon, label, color, orbitDelay, ring }: OrbitIconProps) {
  const ringClass = ring === 'inner' ? 'orbit-inner-icon' : 'orbit-outer-icon';
  return (
    <div
      class={`orbit-icon ${ringClass}`}
      style={`--orbit-delay:${orbitDelay}deg; --icon-color:${color};`}
      aria-label={label}
    >
      <Icon name={icon} size={18} />
    </div>
  );
});
