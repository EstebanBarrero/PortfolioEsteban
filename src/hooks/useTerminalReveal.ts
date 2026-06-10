import { useEffect } from 'preact/hooks';

export function useTerminalReveal(): void {
  useEffect(() => {
    const terminal = document.querySelector('.terminal-widget');
    if (!terminal) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            terminal.classList.add('terminal-animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(terminal);
    return () => observer.disconnect();
  }, []);
}
