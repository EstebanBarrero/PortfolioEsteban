
export interface TypewriterOptions {
  element: HTMLElement;
  phrases: string[];
  typeSpeed?: number;
  eraseSpeed?: number;
  pauseAfter?: number;
  pauseBefore?: number;
  cursor?: boolean;
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

  updatePhrases(newPhrases: string[]): void {
    if (this.timerId !== null) { clearTimeout(this.timerId); this.timerId = null; }
    this.phrases = newPhrases;
    this.currentIndex = 0;

    if (this.currentText.length === 0) {
      this.isTyping = true;
      if (this.running) this.timerId = setTimeout(() => this.tick(), 120);
    } else {
      this.isTyping = false;
      if (this.running) this._fastErase();
    }
  }

  private _fastErase(): void {
    if (!this.running) return;
    if (this.currentText.length > 0) {
      this.currentText = this.currentText.slice(0, -1);
      this.render();
      this.timerId = setTimeout(() => this._fastErase(), 12);
    } else {
      this.isTyping = true;
      this.timerId = setTimeout(() => this.tick(), 160);
    }
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
        this.timerId = setTimeout(() => {
          this.isTyping = false;
          this.tick();
        }, this.pauseAfter);
      }
    } else {
      if (this.currentText.length > 0) {
        this.currentText = this.currentText.slice(0, -1);
        this.render();
        this.timerId = setTimeout(() => this.tick(), this.eraseSpeed);
      } else {
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
