import { showAdapter } from "/becoming-many-making-of/hub/adapters/show.js";

// Die Leiste dieser Fassung hat keine Klassen, nur Inline-Styles.
const bar = (ctx) => ctx.qa("body > div").find((d) => d.style.position === "fixed" && d.querySelector("output"));

export default showAdapter({
  hide: 'body > div[style*="position: fixed"], body > button { display: none !important; }',
  root: bar,
  readout: (ctx) => bar(ctx)?.querySelector("output"),
  langActive: (b) => b.style.background.includes("17, 17, 17"),
});
