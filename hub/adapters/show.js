/* Gemeinsamer Adapter für die Show-Fassungen mit Probe-Zeitleiste
 * (Finale, Start-Tutorial, Gemalte Passagen). Die Original-Leiste wird
 * ausgeblendet; Kapitel, Pause und Sprache wandern ins Bedienfeld. */

const CHAPTERS = [
  ["Prologue", "Prolog", "var(--welt)"],
  ["Scent", "Duft", "var(--duft)"],
  ["Echo", "Echo", "var(--echo)"],
  ["Motion", "Bewegung", "var(--bewegung)"],
  ["Thermal", "Wärme", "var(--waerme)"],
  ["Magnetic", "Magnetfeld", "var(--magnet)"],
  ["Finale", "Verbindungen", "var(--verbindung)"],
  ["Return", "Rückkehr", "var(--welt)"],
];

const seconds = (t) => { const [m, s] = t.split(":").map(Number); return m * 60 + s; };

/**
 * @param {object} o
 * @param {string} o.hide          CSS, das die Original-Leiste ausblendet
 * @param {(ctx) => Element} o.root     Container der Leiste (enthält alle Knöpfe)
 * @param {(ctx) => Element} o.readout  Zeitangabe "0:12 / 8:45"
 * @param {(el: Element) => boolean} o.langActive
 */
export function showAdapter({ hide, root, readout, langActive }) {
  const button = (ctx, text) => [...(root(ctx)?.querySelectorAll("button") ?? [])].find((b) => b.textContent.trim() === text);
  const transport = (ctx) => button(ctx, "Hold") ?? button(ctx, "Play") ?? button(ctx, "Pause");
  const time = (ctx) => readout(ctx)?.textContent?.trim() ?? "";
  return {
    hide,
    controls: () => [
      { type: "heading", label: "Ablauf" },
      {
        type: "meter", label: "Zeit",
        get: (ctx) => { const [a, b] = time(ctx).split("/").map((s) => s.trim()); return a && b ? seconds(a) / seconds(b) : 0; },
        text: (ctx) => time(ctx) || "–", color: "var(--on-glass)",
      },
      {
        type: "buttons", items: [
          { label: "Pause", el: transport, text: (ctx) => ({ Hold: "Anhalten", Play: "Abspielen", Pause: "Anhalten" })[transport(ctx)?.textContent.trim()] },
        ],
      },
      { type: "heading", label: "Kapitel" },
      {
        type: "chips",
        items: CHAPTERS.map(([en, de]) => ({ label: de, el: (ctx) => button(ctx, en) })),
      },
      { type: "heading", label: "Erzählstimme" },
      {
        type: "chips",
        items: [["DE", "Deutsch"], ["EN", "Englisch"]].map(([code, label]) => ({
          label, el: (ctx) => button(ctx, code), active: (ctx) => { const b = button(ctx, code); return b && langActive(b); },
        })),
      },
    ],
  };
}
