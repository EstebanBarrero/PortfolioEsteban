export function initCursor(): void {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'cursor-canvas';
  canvas.style.cssText =
    'position:fixed;inset:0;pointer-events:none;z-index:99998;';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d')!;

  let W = 0, H = 0;
  const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  let mx = -600, my = -600;
  let lx = -600, ly = -600;
  let visible = false;

  document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; visible = true; });
  document.addEventListener('mouseleave', () => { visible = false; });
  document.addEventListener('mouseenter', () => { visible = true; });

  const TRAIL = 32;
  const pts: Array<{ x: number; y: number }> = Array.from({ length: TRAIL }, () => ({ x: -600, y: -600 }));

  const DARK_COLORS: [number, number, number][] = [
    [0, 245, 255],    // cyan
    [255, 220, 0],    // yellow
    [64, 160, 255],   // electric blue
  ];
  const LIGHT_COLORS: [number, number, number][] = [
    [99, 102, 241],   // indigo
    [234, 179, 8],    // amber
    [14, 165, 233],   // sky
  ];

  function cycleColor(): [number, number, number] {
    const palette = document.documentElement.dataset.theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;
    const t = ((Date.now() / 5000) % 1);
    const idx = t * palette.length;
    const i = Math.floor(idx) % palette.length;
    const f = idx - Math.floor(idx);
    const c1 = palette[i];
    const c2 = palette[(i + 1) % palette.length];
    return [
      Math.round(c1[0] + (c2[0] - c1[0]) * f),
      Math.round(c1[1] + (c2[1] - c1[1]) * f),
      Math.round(c1[2] + (c2[2] - c1[2]) * f),
    ];
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);

    if (visible) {
      lx += (mx - lx) * 0.20;
      ly += (my - ly) * 0.20;

      for (let i = TRAIL - 1; i > 0; i--) {
        pts[i].x = pts[i - 1].x;
        pts[i].y = pts[i - 1].y;
      }
      pts[0].x = lx;
      pts[0].y = ly;

      const [r, g, b] = cycleColor();
      const c = `${r},${g},${b}`;

      // Trail — back to front
      for (let i = TRAIL - 1; i >= 0; i--) {
        const t = 1 - i / (TRAIL - 1);
        const e = t * t * t; // cubic — bright head, long dim tail
        if (e < 0.008) continue;

        const rad = e * 9;        // max ~9 px core radius

        // Glow halo
        const grd = ctx.createRadialGradient(pts[i].x, pts[i].y, 0, pts[i].x, pts[i].y, rad * 3.2);
        grd.addColorStop(0, `rgba(${c},${e * 0.28})`);
        grd.addColorStop(1, `rgba(${c},0)`);
        ctx.beginPath();
        ctx.arc(pts[i].x, pts[i].y, rad * 3.2, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(pts[i].x, pts[i].y, Math.max(rad * 0.42, 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c},${e * 0.95})`;
        ctx.fill();
      }

      // Tip: bright glow at exact mouse
      const tipGrd = ctx.createRadialGradient(mx, my, 0, mx, my, 22);
      tipGrd.addColorStop(0,    `rgba(${c},0.85)`);
      tipGrd.addColorStop(0.3,  `rgba(${c},0.28)`);
      tipGrd.addColorStop(1,    `rgba(${c},0)`);
      ctx.beginPath();
      ctx.arc(mx, my, 22, 0, Math.PI * 2);
      ctx.fillStyle = tipGrd;
      ctx.fill();

      // Crisp dot
      ctx.beginPath();
      ctx.arc(mx, my, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c},1)`;
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
