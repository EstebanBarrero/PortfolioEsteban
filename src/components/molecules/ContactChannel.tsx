import { Icon } from '../atoms/Icon';

interface ContactChannelProps {
  href: string;
  icon: string;
  label: string;
  value: string;
  ariaLabel: string;
  target?: string;
  rel?: string;
}

export function ContactChannel({ href, icon, label, value, ariaLabel, target, rel }: ContactChannelProps) {
  return (
    <a href={href} class="contact-channel" aria-label={ariaLabel} target={target} rel={rel}>
      <span class="channel-icon"><Icon name={icon} size={20} /></span>
      <div class="channel-info">
        <span class="channel-label">{label}</span>
        <span class="channel-value">{value}</span>
      </div>
    </a>
  );
}
