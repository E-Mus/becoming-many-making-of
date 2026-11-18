const section = (ctx, i) => ctx.qa("#controls section")[i];
const range = (i, k) => (ctx) => section(ctx, i)?.querySelectorAll('input[type="range"]')[k];
const toggleBtn = (i) => (ctx) => section(ctx, i)?.querySelector("button");
const C = "var(--duft)";

export default {
  hide: "main.panel { display: none !important; }",
  controls: () => [
    { type: "heading", label: "Bäume" },
    { type: "select", label: "Modell", el: (ctx) => section(ctx, 0)?.querySelector("select") },
    { type: "range", label: "Anzahl", el: range(0, 0), color: C },
    { type: "range", label: "Partikel je Baum", el: range(0, 1), color: C },
    { type: "buttons", items: [{ label: "Bäume", el: toggleBtn(0), text: (ctx) => toggleBtn(0)(ctx)?.textContent }] },
    { type: "heading", label: "Tiere" },
    { type: "range", label: "Anzahl", el: range(1, 0), color: C },
    { type: "range", label: "Partikel je Tier", el: range(1, 1), color: C },
    { type: "buttons", items: [{ label: "Tiere", el: toggleBtn(1), text: (ctx) => toggleBtn(1)(ctx)?.textContent }] },
    { type: "heading", label: "Wolke" },
    { type: "buttons", items: [{ label: "Partikel neu setzen", el: (ctx) => ctx.q("#resample"), primary: true }] },
    { type: "stats", items: [{ label: "Partikel", el: (ctx) => ctx.q("#rendered-particle-count") }] },
  ],
};
