import { showAdapter } from "/becoming-many-making-of/hub/adapters/show.js";

export default showAdapter({
  hide: "[data-rehearsal], .xr-entry-button { display: none !important; }",
  root: (ctx) => ctx.q("[data-rehearsal]"),
  readout: (ctx) => ctx.q("[data-readout]"),
  langActive: (b) => b.getAttribute("aria-pressed") === "true",
});
