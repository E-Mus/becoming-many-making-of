/* Partikelstaub wie in der weißen Welt des Web-Release:
 * schwarze Punkte unterschiedlicher Größe, die langsam treiben.
 * Benutzung: mountAir(canvasElement, { density, speed }) → gibt stop() zurück. */
export function mountAir(canvas, { density = 1, speed = 1 } = {}) {
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0, dpr = 1, raf = 0, dots = [];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function seed() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    const n = Math.round((w * h) / 2600 * density);
    dots = Array.from({ length: n }, () => {
      const big = Math.random() < 0.04;
      return {
        x: Math.random() * w, y: Math.random() * h,
        r: big ? 1.6 + Math.random() * 1.6 : 0.4 + Math.random() * 0.9,
        a: big ? 0.85 : 0.25 + Math.random() * 0.55,
        vx: (Math.random() - 0.3) * 0.12 * speed, vy: (Math.random() - 0.6) * 0.08 * speed,
        p: Math.random() * Math.PI * 2,
      };
    });
  }
  function draw(t = 0) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#05070c";
    for (const d of dots) {
      if (!reduce) {
        d.x += d.vx + Math.sin(t / 4000 + d.p) * 0.03;
        d.y += d.vy;
        if (d.x < -4) d.x = w + 4; else if (d.x > w + 4) d.x = -4;
        if (d.y < -4) d.y = h + 4; else if (d.y > h + 4) d.y = -4;
      }
      ctx.globalAlpha = d.a;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
    if (!reduce) raf = requestAnimationFrame(draw);
  }
  seed(); draw();
  const onResize = () => { seed(); if (reduce) draw(); };
  addEventListener("resize", onResize);
  return () => { cancelAnimationFrame(raf); removeEventListener("resize", onResize); };
}
