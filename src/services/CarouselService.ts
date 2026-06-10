export class CarouselService {
  private _current = 0;
  private _isAnimating = false;
  private _timer: ReturnType<typeof setTimeout> | null = null;
  private readonly _total: number;

  constructor(
    private readonly track: HTMLElement,
    private readonly outer: HTMLElement,
    private readonly cards: HTMLElement[],
    private readonly dots: HTMLElement[],
    private readonly carousel: HTMLElement,
    private readonly gap = 24,
    private readonly autoplayMs = 4000,
  ) {
    this._total = cards.length;
  }

  get current(): number { return this._current; }

  visibleCols(): number {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 900) return 2;
    return 3;
  }

  getCardWidth(): number {
    const cols = this.visibleCols();
    return (this.outer.offsetWidth - this.gap * (cols - 1)) / cols;
  }

  applyWidths(): void {
    const w = this.getCardWidth();
    this.cards.forEach(c => { c.style.width = `${w}px`; });
  }

  getOffset(index: number): number {
    const w = this.getCardWidth();
    const step = w + this.gap;
    const outerW = this.outer.offsetWidth;
    const trackW = this._total * step - this.gap;
    const maxOff = Math.max(0, trackW - outerW);
    return Math.min(Math.max(0, index * step), maxOff);
  }

  goTo(n: number): void {
    if (this._isAnimating) return;
    const next = ((n % this._total) + this._total) % this._total;
    this._isAnimating = true;

    this.cards[this._current].classList.remove('active');
    this.cards[next].classList.add('active');

    this.dots.forEach((d, i) => {
      if (i === next) {
        this._resetDotAnimation(d);
      } else {
        d.classList.remove('active');
      }
      d.setAttribute('aria-selected', String(i === next));
    });

    this.track.style.transform = `translateX(-${this.getOffset(next)}px)`;
    this._current = next;

    setTimeout(() => { this._isAnimating = false; }, 560);
  }

  start(): void {
    if (this._timer) clearTimeout(this._timer);
    this.carousel.classList.remove('proj-carousel--paused');
    this._resetDotAnimation(this.dots[this._current]);
    this._timer = setTimeout(() => { this.goTo(this._current + 1); this.start(); }, this.autoplayMs);
  }

  stop(): void {
    if (this._timer) { clearTimeout(this._timer); this._timer = null; }
    this.carousel.classList.add('proj-carousel--paused');
  }

  private _resetDotAnimation(dot: HTMLElement): void {
    dot.classList.remove('active');
    void dot.offsetWidth;
    dot.classList.add('active');
  }
}
