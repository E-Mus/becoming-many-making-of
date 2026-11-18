// Die WebGPU-Fassung hat eine eigene Schnittstelle für die Sinne:
// window.__bmWorld im Synth-Fenster (set, value, toggle, solo, clear).
const world = (ctx) => ctx.q(".synth-drawer iframe, iframe")?.contentWindow?.__bmWorld ?? null;
const SENSE_COLORS = {
  farben: "var(--welt)", echo: "var(--echo)", infrarot: "var(--waerme)", uv: "var(--magnet)",
  duft: "var(--duft)", netzwerk: "var(--verbindung)", motion: "var(--bewegung)", magnetfeld: "var(--magnet)",
};
const SENSES = [
  ["farben", "Farben"], ["echo", "Echoortung"], ["infrarot", "Wärmesicht"], ["uv", "UV-Reflexion"],
  ["duft", "Chemische Wahrnehmung"], ["netzwerk", "Schwarm-Netzwerk"], ["motion", "Bewegungssehen"], ["magnetfeld", "Magnetfeld"],
];
const senseControls = () => [
  { type: "heading", label: "Sinne" },
  ...SENSES.map(([id, label]) => ({
    type: "range", label, min: 0, max: 1, step: 0.01, color: SENSE_COLORS[id],
    get: (ctx) => world(ctx)?.value(id), set: (v, ctx) => world(ctx)?.set(id, v),
    format: (v) => `${Math.round(v * 100)} %`,
  })),
  { type: "buttons", items: [{ label: "Alle aus", run: (ctx) => world(ctx)?.clear() }] },
];
const chrome = ".synth-drawer, .synth-tab, .devc-tab, .devc-drawer, .three-inspector, #VRButton";

export default {
  views: {
    "synth-modus": {
      // Synth-Fenster bleibt unsichtbar geladen, damit die Sinne steuerbar sind.
      hide: `${chrome} { opacity: 0 !important; pointer-events: none !important; }`,
      controls: () => [
        { type: "note", text: "Der Synth-Modus: eine vereinfachte Welt ohne Timeline, in der Klang und Sinne direkt gekoppelt sind. Im Original-Modus ist die Drone-Orgel daneben zu sehen." },
        ...senseControls(),
      ],
    },
    voll: {
      hide: ".three-inspector, .devc-tab, #VRButton { display: none !important; }",
      controls: () => [
        { type: "note", text: "Die vollständige Fassung mit Startmenü, Theatre.js-Timeline und Erzähler. Im Bild „Desktop starten“ wählen." },
      ],
    },
    orgel: {
      controls: () => [
        { type: "note", text: "Die Drone-Orgel ist ein Instrument mit eigener Oberfläche und bleibt deshalb in beiden Modi so, wie sie war. Ins Bild klicken, um den Ton zu starten." },
      ],
    },
  },
};
