// ============================================================
// TYPEWRITER UTILITY
// Cycles through an array of phrases with typing & erasing animation
// ============================================================

export interface TypewriterOptions {
  element: HTMLElement;
  phrases: string[];
  typeSpeed?: number;   // ms per character typed
  eraseSpeed?: number;  // ms per character erased
  pauseAfter?: number;  // ms to wait after fully typed
  pauseBefore?: number; // ms to wait before re-typing
  cursor?: boolean;     // show blinking cursor
  loop?: boolean;
}

export class Typewriter {
  private el: HTMLElement;
  private phrases: string[];
  private typeSpeed: number;
  private eraseSpeed: number;
  private pauseAfter: number;
  private pauseBefore: number;
  private loop: boolean;
  private currentIndex = 0;
  private currentText = '';
  private isTyping = true;
  private timerId: ReturnType<typeof setTimeout> | null = null;
  private running = false;

  constructor(options: TypewriterOptions) {
    this.el = options.element;
    this.phrases = options.phrases;
    this.typeSpeed  = options.typeSpeed  ?? 65;
    this.eraseSpeed = options.eraseSpeed ?? 35;
    this.pauseAfter  = options.pauseAfter  ?? 1800;
    this.pauseBefore = options.pauseBefore ?? 400;
    this.loop = options.loop ?? true;

    // Add cursor span if requested
    if (options.cursor !== false) {
      this.el.classList.add('typewriter-cursor');
    }
  }

  start(): this {
    if (this.running) return this;
    this.running = true;
    this.tick();
    return this;
  }

  stop(): this {
    this.running = false;
    if (this.timerId !== null) clearTimeout(this.timerId);
    return this;
  }

  private tick(): void {
    if (!this.running) return;

    const target = this.phrases[this.currentIndex];

    if (this.isTyping) {
      if (this.currentText.length < target.length) {
        this.currentText = target.slice(0, this.currentText.length + 1);
        this.render();
        this.timerId = setTimeout(() => this.tick(), this.typeSpeed);
      } else {
        // Fully typed — pause then start erasing
        this.timerId = setTimeout(() => {
          this.isTyping = false;
          this.tick();
        }, this.pauseAfter);
      }
    } else {
      // Erasing
      if (this.currentText.length > 0) {
        this.currentText = this.currentText.slice(0, -1);
        this.render();
        this.timerId = setTimeout(() => this.tick(), this.eraseSpeed);
      } else {
        // Fully erased — advance phrase index
        this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
        if (!this.loop && this.currentIndex === 0) {
          this.running = false;
          return;
        }
        this.isTyping = true;
        this.timerId = setTimeout(() => this.tick(), this.pauseBefore);
      }
    }
  }

  private render(): void {
    this.el.textContent = this.currentText;
  }
}
