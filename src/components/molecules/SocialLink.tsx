import { Icon } from '../atoms/Icon';

interface SocialLinkProps {
  href: string;
  icon: string;
  label: string;
  ariaLabel: string;
  target?: string;
  rel?: string;
}

export function SocialLink({ href, icon, label, ariaLabel, target, rel }: SocialLinkProps) {
  return (
    <a href={href} target={target} rel={rel} class="social-link" aria-label={ariaLabel}>
      <span class="social-icon"><Icon name={icon} size={18} /></span>
      <span>{label}</span>
    </a>
  );
}
