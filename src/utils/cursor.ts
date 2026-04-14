// ============================================================
// CUSTOM CURSOR
// Glowing ring cursor + fast dot with smooth follow
// ============================================================

export function initCursor(): void {
  const cursor    = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursor-dot');

  if (!cursor || !cursorDot) return;

  // Hide on mobile/touch devices
  if (window.matchMedia('(pointer: coarse)').matches) {
    cursor.style.display    = 'none';
    cursorDot.style.display = 'none';
    return;
  }

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let rafId: number;

  // Dot follows mouse instantly
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot is instant
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top  = `${mouseY}px`;
  });

  // Ring follows with slight lerp for smooth trail effect
  function animateCursor() {
    const speed = 0.12;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor!.style.left = `${cursorX}px`;
    cursor!.style.top  = `${cursorY}px`;

    rafId = requestAnimationFrame(animateCursor);
  }
  rafId = requestAnimationFrame(animateCursor);

  // Hover states — grow ring on interactive elements
  const interactives = 'a, button, [data-cursor-hover], input, textarea, .glass-card, .skill-card, .project-card';

  document.addEventListener('mouseover', (e) => {
    if ((e.target as Element).closest(interactives)) {
      cursor.classList.add('cursor-hover');
      cursorDot.classList.add('cursor-dot-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if ((e.target as Element).closest(interactives)) {
      cursor.classList.remove('cursor-hover');
      cursorDot.classList.remove('cursor-dot-hover');
    }
  });

  // Hide cursor when it leaves the window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity    = '0';
    cursorDot.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity    = '1';
    cursorDot.style.opacity = '1';
  });

  // Cleanup on page unload (not strictly necessary but good practice)
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(rafId);
  });
}
