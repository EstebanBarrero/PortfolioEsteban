import { useEffect, useRef } from 'preact/hooks';
import { Typewriter } from '../shared/typewriter';
import { appEvents } from '../shared/EventBus';
import { t } from '../services/LanguageService';

export function useTypewriter(): void {
  const twRef = useRef<Typewriter | null>(null);

  useEffect(() => {
    const el = document.getElementById('typewriter-text');
    if (el && !twRef.current) {
      twRef.current = new Typewriter({
        element: el,
        phrases: [...t.value.hero.typewriterPhrases],
        typeSpeed: 60,
        eraseSpeed: 30,
        pauseAfter: 2000,
        cursor: false,
      }).start();
    }
    return appEvents.on('typewriter:phrases', ({ phrases }) => twRef.current?.updatePhrases(phrases));
  }, []);
}
