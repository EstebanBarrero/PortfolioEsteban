import { useEffect } from 'preact/hooks';
import { Typewriter } from '../../shared/typewriter';

interface Props {
  phrases: string[];
}

export function TypewriterIsland({ phrases }: Props) {
  useEffect(() => {
    const el = document.getElementById('typewriter-text');
    if (el) {
      new Typewriter({
        element: el,
        phrases,
        typeSpeed: 60,
        eraseSpeed: 30,
        pauseAfter: 2000,
        cursor: false,
      }).start();
    }
  }, []);
  return null;
}
