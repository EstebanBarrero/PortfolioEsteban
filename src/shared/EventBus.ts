type Handler<T> = (data: T) => void;

export class EventBus<Events extends Record<string, unknown>> {
  // Internal map uses `any` — heterogeneous event → handler map; public API is fully typed
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _handlers = new Map<keyof Events, Set<Handler<any>>>();

  on<K extends keyof Events>(event: K, handler: Handler<Events[K]>): () => void {
    if (!this._handlers.has(event)) this._handlers.set(event, new Set());
    this._handlers.get(event)!.add(handler);
    return () => this.off(event, handler);
  }

  off<K extends keyof Events>(event: K, handler: Handler<Events[K]>): void {
    this._handlers.get(event)?.delete(handler);
  }

  emit<K extends keyof Events>(event: K, data: Events[K]): void {
    this._handlers.get(event)?.forEach(h => h(data));
  }
}

export type AppEvents = {
  'typewriter:phrases': { phrases: string[] };
  'theme:changed': { theme: 'dark' | 'light' };
  'lang:changed': { lang: 'en' | 'es' };
};

export const appEvents = new EventBus<AppEvents>();
