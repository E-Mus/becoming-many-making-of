const C = "var(--verbindung)";
const id = (x) => (ctx) => ctx.q(`#${x}`);
const actions = [
  { label: "Neues Muster", el: id("restart-button"), primary: true },
  { label: "Pause", el: id("pause-button"), text: (ctx) => ctx.q("#pause-button")?.textContent },
];

export default {
  hide: "main.panel, #VRButton { display: none !important; }",
  views: {
    verzweigung: {
      controls: () => [
        { type: "buttons", items: actions },
        { type: "heading", label: "Wachstum" },
        { type: "stats", items: [
          { label: "Spitzen", el: id("tip-count") }, { label: "Kanten", el: id("edge-count") },
          { label: "Fusionen", el: id("fusion-count") }, { label: "Seed", el: id("seed-value") },
        ] },
      ],
    },
    netzwerk: {
      controls: () => [
        { type: "range", label: "Volumen", el: id("volume-slider"), color: C, format: (v) => `${v} m` },
        { type: "range", label: "Punkte", el: id("point-slider"), color: C },
        { type: "buttons", items: actions },
        { type: "heading", label: "Netz" },
        { type: "stats", items: [
          { label: "Hyphen", el: id("hypha-value") }, { label: "Bahnen", el: id("cord-value") },
          { label: "Dreiecke", el: id("triangle-value") }, { label: "FPS", el: id("fps-value") },
        ] },
      ],
    },
    landschaft: {
      controls: () => [
        { type: "range", label: "Größe", el: id("size-slider"), color: C, format: (v) => `${v} m` },
        { type: "range", label: "Bäume", el: id("tree-slider"), color: C },
        { type: "range", label: "Punkte", el: id("point-slider"), color: C },
        { type: "heading", label: "Ebenen" },
        { type: "toggle", label: "Landschaft", el: id("terrain-toggle"), color: C },
        { type: "toggle", label: "Bäume", el: id("tree-toggle"), color: C },
        { type: "toggle", label: "Boden durchsichtig", el: id("subsurface-toggle"), color: C },
        { type: "toggle", label: "Myzel", el: id("network-toggle"), color: C },
        { type: "buttons", items: [
          { label: "Myzel wachsen lassen", el: id("grow-network-button"), primary: true },
          { label: "Neue Landschaft", el: id("new-landscape-button") },
        ] },
        { type: "stats", items: [
          { label: "Bäume", el: id("tree-count-value") }, { label: "Hyphen", el: id("hypha-value") }, { label: "FPS", el: id("fps-value") },
        ] },
      ],
    },
  },
};
