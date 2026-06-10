import { useEffect } from 'preact/hooks';
import { CarouselService } from '../services/CarouselService';

export function useCarousel(): void {
  useEffect(() => {
    const track      = document.getElementById('proj-track') as HTMLElement | null;
    const outer      = track?.parentElement as HTMLElement | null;
    const cards      = Array.from(document.querySelectorAll<HTMLElement>('.pcard'));
    const dots       = Array.from(document.querySelectorAll<HTMLElement>('.proj-dot'));
    const carouselEl = document.querySelector<HTMLElement>('.proj-carousel');
    const btnPrev    = document.querySelector<HTMLElement>('.proj-arrow--prev');
    const btnNext    = document.querySelector<HTMLElement>('.proj-arrow--next');

    if (!track || !outer || !cards.length || !carouselEl) return;

    const carousel = new CarouselService(track, outer, cards, dots, carouselEl);
    carousel.applyWidths();

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { carousel.applyWidths(); carousel.goTo(carousel.current); }, 120);
    };
    window.addEventListener('resize', onResize, { passive: true });

    dots.forEach((_, i) => {
      dots[i].addEventListener('click', () => { carousel.stop(); carousel.goTo(i); carousel.start(); });
    });

    btnPrev?.addEventListener('click', () => { carousel.stop(); carousel.goTo(carousel.current - 1); carousel.start(); });
    btnNext?.addEventListener('click', () => { carousel.stop(); carousel.goTo(carousel.current + 1); carousel.start(); });

    carouselEl.addEventListener('keydown', (e) => {
      const key = (e as KeyboardEvent).key;
      if (key === 'ArrowLeft')  { carousel.stop(); carousel.goTo(carousel.current - 1); carousel.start(); }
      if (key === 'ArrowRight') { carousel.stop(); carousel.goTo(carousel.current + 1); carousel.start(); }
    });

    let touchStartX = 0;
    outer.addEventListener('touchstart', (e) => { touchStartX = (e as TouchEvent).touches[0].clientX; }, { passive: true });
    outer.addEventListener('touchend', (e) => {
      const delta = (e as TouchEvent).changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 50) {
        carousel.stop();
        carousel.goTo(delta < 0 ? carousel.current + 1 : carousel.current - 1);
        carousel.start();
      }
    }, { passive: true });

    carouselEl.addEventListener('mouseenter', () => carousel.stop());
    carouselEl.addEventListener('mouseleave', () => carousel.start());
    carouselEl.addEventListener('focusin',    () => carousel.stop());
    carouselEl.addEventListener('focusout',   () => carousel.start());

    carousel.start();

    return () => window.removeEventListener('resize', onResize);
  }, []);
}
