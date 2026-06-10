import type { ComponentChildren } from 'preact';
import { useAppInit } from '../../hooks/useAppInit';
import type { Lang } from '../../domain';

export function PageLayout({ children, lang }: { children: ComponentChildren; lang?: Lang }) {
  useAppInit(lang);
  return <>{children}</>;
}
