import type { ComponentChildren } from 'preact';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  href?: string;
  download?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  id?: string;
  class?: string;
  onClick?: () => void;
  'aria-label'?: string;
  children: ComponentChildren;
}

export function Button({
  variant = 'primary',
  href,
  download,
  type = 'button',
  disabled,
  id,
  class: cls,
  onClick,
  'aria-label': ariaLabel,
  children,
}: ButtonProps) {
  const className = `btn btn-${variant}${cls ? ` ${cls}` : ''}`;
  if (href) {
    return (
      <a href={href} class={className} download={download} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      class={className}
      disabled={disabled}
      id={id}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
