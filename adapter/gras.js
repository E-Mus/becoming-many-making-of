// Das Gras benutzt lil-gui. Die Regler werden über ihren Namen gefunden.
const input = (name) => (ctx) => ctx.lil(name)?.querySelector("input, select");
const C = "var(--welt)";
const lil = (label, name, min, max, step, format) => ({ type: "range", lil: true, label, el: input(name), min, max, step, color: C, format });
const hud = (re) => (ctx) => ctx.q("#hud")?.textContent.match(re)?.[1] ?? "–";

export default {
  hide: ".lil-gui, #hud, #hint { display: none !important; }",
  controls: () => [
    { type: "select", label: "Qualität", el: input("Preset") },
    { type: "heading", label: "Wind" },
    lil("Stärke", "Staerke", 0, 1.2, 0.01),
    lil("Tempo", "Tempo", 0, 5, 0.05),
    lil("Böengröße", "Boeengroesse", 0.005, 0.25, 0.005),
    lil("Richtung", "Richtung", 0, 6.28, 0.01, (v) => `${Math.round((v * 180) / Math.PI)}°`),
    { type: "heading", label: "Halme" },
    lil("Höhe", "Max. Hoehe", 0.2, 3, 0.01, (v) => `${v.toFixed(2)} m`),
    lil("Krümmung", "Kruemmung", 0, 1.2, 0.01),
    lil("Streuung", "Streuung", 0, 3, 0.05),
    lil("Dichte", "Dichte", 0.1, 2.5, 0.05),
    { type: "toggle", label: "Einfarbig, ohne Licht", el: input("Einfarbig (ohne Licht)"), color: C },
    { type: "heading", label: "Licht" },
    lil("Sonnenhöhe", "Sonne Hoehe", 0.02, 1.4, 0.01),
    lil("Sonnenrichtung", "Sonne Azimut", 0, 6.28, 0.01, (v) => `${Math.round((v * 180) / Math.PI)}°`),
    lil("Belichtung", "Belichtung", 0.2, 2.5, 0.02),
    { type: "stats", items: [{ label: "Halme", get: hud(/([\d.,]+k?) Halme/) }, { label: "FPS", get: hud(/(\d+) fps/) }] },
  ],
};
