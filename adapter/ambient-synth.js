// Reiner Klang ohne Bild: Im Becoming-Many-Look wird die Original-Oberfläche
// ausgeblendet und die Layer erscheinen als pulsierende Kugeln.
const COLORS = ["var(--welt)", "var(--duft)", "var(--echo)", "var(--bewegung)", "var(--waerme)", "var(--magnet)"];
const NAMES = ["Wind", "Duft", "Echoortung", "Bewegung", "Wärme", "Magnetfeld"];
const layer = (ctx, i) => ctx.qa(".layers .layer")[i];
const level = (ctx, i) => parseFloat(layer(ctx, i)?.querySelector(".meter-fill")?.style.width ?? "0") / 100 || 0;
const state = (ctx) => ctx.qa(".global .state")[0]?.textContent.trim();
const STATE_DE = { idle: "bereit", running: "läuft", stopped: "gestoppt", starting: "startet" };

export default {
  hide: "#root { display: none !important; } body { background: transparent !important; }",
  controls: () => [
    { type: "buttons", items: [
      { label: "Audio starten", el: (ctx) => ctx.q(".global button.primary"), primary: true },
      { label: "Stop", el: (ctx) => ctx.byText(".global button", "Stop") },
    ] },
    { type: "select", label: "Komposition", el: (ctx) => ctx.q(".global select") },
    { type: "range", label: "Master", el: (ctx) => ctx.q(".global .master input"), format: (v) => `${v.toFixed(1)} dB`, color: "var(--klang)" },
    { type: "stats", items: [
      { label: "Status", get: (ctx) => STATE_DE[state(ctx)] ?? state(ctx) },
      { label: "Knoten", get: (ctx) => ctx.qa(".global .state")[1]?.textContent.replace(" Knoten", "") },
    ] },
    { type: "heading", label: "Layer" },
    ...NAMES.flatMap((name, i) => [
      { type: "toggle", label: name, el: (ctx) => layer(ctx, i)?.querySelector(".layer-head input"), color: COLORS[i] },
      { type: "range", label: "Intensität", el: (ctx) => layer(ctx, i)?.querySelector(".intensity input"), color: COLORS[i], format: (v) => `${Math.round(v * 100)} %` },
    ]),
  ],
  stage(ctx, el) {
    el.innerHTML = `<div class="orbs"><div class="orbs-ring">${NAMES.map((n, i) => {
      const a = (i / NAMES.length) * Math.PI * 2 - Math.PI / 2;
      return `<div class="orb" style="--c:${COLORS[i]};left:${50 + Math.cos(a) * 34}%;top:${50 + Math.sin(a) * 34}%"><span>${n}</span></div>`;
    }).join("")}</div></div>`;
    const orbs = [...el.querySelectorAll(".orb")];
    let raf;
    const loop = (t = 0) => {
      orbs.forEach((orb, i) => {
        const on = layer(ctx, i)?.querySelector(".layer-head input")?.checked;
        const v = level(ctx, i);
        const breath = Math.sin(t / 1400 + i * 1.1) * 0.06; // ruhiges Atmen, auch ohne Ton
        orb.style.setProperty("--s", (on ? 0.6 + v * 0.9 + breath : 0.42 + breath).toFixed(3));
        orb.style.setProperty("--o", on ? (0.6 + v * 0.4).toFixed(2) : "0.4");
      });
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  },
};
