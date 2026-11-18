/* Automatischer Adapter
 *
 * Für Projekte ohne eigene adapter.js. Findet die Bedienelemente einer Seite
 * selbst und baut daraus das einheitliche Bedienfeld:
 *
 *   – lil-gui-Panels: Ordner → Überschriften, Zahlen mit Schieber → Regler,
 *     Häkchen → Schalter, Auswahl → Auswahlfeld, Funktionen → Knöpfe.
 *     Min/Max einer Zahl stehen nicht im DOM; sie werden einmal aus der
 *     Füllbreite des Schiebers bei zwei Werten berechnet.
 *   – Eigene Panels (fest oder absolut positionierte Kästen mit Reglern):
 *     Überschriften, Schieber, Häkchen, Auswahlfelder, Knöpfe, Kennzahlen.
 *
 * Gefundene Panels werden im Becoming-Many-Modus ausgeblendet (data-bm-hide).
 * Seiten, deren ganze Oberfläche das Instrument ist (z. B. Synthesizer),
 * bleiben unangetastet.
 *
 * Eine adapter.js kann den Automaten nutzen und ergänzen:
 *   import { auto } from "/becoming-many-making-of/hub/adapters/auto.js";
 *   export default auto({ skip: [".hint"], extraHide: "#hud { display:none !important }" });
 */

const CONTROL = 'input[type="range"], input[type="checkbox"], select, button';
const isVR = (t) => /^(enter |exit )?(vr|xr|ar)\b|vr not|xr not|not supported|not available/i.test(t);

export function auto(options = {}) {
  const extraHide = options.extraHide ?? "";
  const bounds = new WeakMap(); // lil-Controller → { min, max }

  /** Panels der Seite finden und markieren. */
  function findPanels(ctx) {
    const { doc, win } = ctx;
    const vw = win.innerWidth, vh = win.innerHeight;
    const panels = [];
    for (const el of doc.body?.querySelectorAll("*") ?? []) {
      if (el.closest(".lil-gui") || el.closest("[data-bm-panel]") && !el.matches("[data-bm-panel]")) continue;
      if (options.skip?.some((s) => el.matches(s))) continue;
      const cs = win.getComputedStyle(el);
      if (cs.position !== "fixed" && cs.position !== "absolute") continue;
      if (cs.display === "none" || cs.visibility === "hidden") continue;
      const r = el.getBoundingClientRect();
      if (r.width < 40 || r.height < 24) continue;
      if (r.right < 0 || r.bottom < 0 || r.left > vw || r.top > vh) continue; // eingeklappte Schubladen
      if (r.width * r.height > vw * vh * 0.55) continue;                        // Vollbild-Menüs bleiben
      if (panels.some((p) => p.contains(el))) continue;
      const controls = [...el.querySelectorAll(CONTROL)].filter((c) => !(c.tagName === "BUTTON" && isVR(c.textContent.trim())));
      const stats = el.querySelectorAll("dl dt, output, [class*=stat] [class*=value], [class*=metric]");
      if (!controls.length && !stats.length) continue;
      // nur ein einzelner Mini-Knopf (z. B. „C“ für eine Konsole) ist kein Panel
      if (!stats.length && controls.length === 1 && controls[0].tagName === "BUTTON" && controls[0].textContent.trim().length <= 2) continue;
      panels.push(el);
    }
    return panels;
  }

  const textOf = (el) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
  // Werte, die an Beschriftungen kleben („dotSize0.075“, „Größe 28 m“), abschneiden
  const clean = (t) => t.replace(/\s*[-+]?\d[\d.,]*\s*(%|°|m|s|ms|px|hz|db)?\s*$/i, "").trim() || t;
  function labelFor(input) { return clean(rawLabel(input)); }
  function rawLabel(input) {
    const lab = input.labels?.[0] ?? input.closest("label");
    if (lab) {
      const clone = lab.cloneNode(true);
      clone.querySelectorAll("output, input, select, button, [class*=value]").forEach((n) => n.remove());
      const t = textOf(clone);
      if (t) return t;
    }
    if (input.getAttribute("aria-label")) return input.getAttribute("aria-label");
    if (input.title) return input.title;
    // Text direkt davor (z. B. <span>Volumen</span><input>)
    let prev = input.previousElementSibling;
    while (prev && !textOf(prev)) prev = prev.previousElementSibling;
    if (prev && textOf(prev).length < 40) return textOf(prev);
    const parentText = textOf(input.parentElement);
    if (parentText && parentText.length < 40) return parentText;
    return (input.id || input.name || "Wert").replace(/[-_]/g, " ");
  }

  /** Regler aus einem eigenen Panel. */
  function panelControls(panel) {
    const list = [];
    let buttons = [];
    const flush = () => { if (buttons.length) list.push({ type: "buttons", items: buttons }); buttons = []; };
    const seenStats = new Set();
    const walker = panel.ownerDocument.createTreeWalker(panel, 1);
    for (let el = walker.currentNode; el; el = walker.nextNode()) {
      if (el.closest("[hidden]") && el.closest("[hidden]") !== null && panel.contains(el.closest("[hidden]"))) continue;
      const tag = el.tagName;
      if (/^H[2-4]$/.test(tag) || tag === "LEGEND") { flush(); const t = textOf(el); if (t && t.length < 50) list.push({ type: "heading", label: t }); continue; }
      if (tag === "INPUT" && el.type === "range") { flush(); const ref = el; list.push({ type: "range", label: labelFor(ref), el: () => ref, format: rangeFormat(ref) }); continue; }
      if (tag === "INPUT" && el.type === "checkbox") { flush(); const ref = el; list.push({ type: "toggle", label: labelFor(ref), el: () => ref }); continue; }
      if (tag === "SELECT") { flush(); const ref = el; list.push({ type: "select", label: labelFor(ref), el: () => ref }); continue; }
      if (tag === "BUTTON") {
        const t = textOf(el);
        if (!t || isVR(t) || t.length > 40 || el.closest("label")) continue;
        const ref = el;
        buttons.push({ label: t, el: () => ref, text: () => textOf(ref) || t, primary: buttons.length === 0 && list.every((c) => c.type !== "buttons") });
        continue;
      }
      if (tag === "DL" && !seenStats.has(el)) {
        flush();
        seenStats.add(el);
        const items = [...el.querySelectorAll("dt")].map((dt) => { const dd = dt.nextElementSibling; return { label: textOf(dt), el: () => dd }; }).filter((i) => i.label);
        if (items.length) list.push({ type: "stats", items });
      }
    }
    flush();
    return list;
  }

  // Zeigt den Wert so, wie ihn die Seite selbst neben dem Schieber anzeigt (inkl. Einheit)
  function rangeFormat(input) {
    const label = input.labels?.[0] ?? input.closest("label") ?? input.parentElement;
    const out = label?.querySelector("output, [class*=value]");
    return out ? () => textOf(out) : undefined;
  }

  /* ---------- lil-gui ---------- */
  const lilName = (c) => textOf(c.querySelector(".name, .lil-name"));
  const lilKind = (c) => ["number", "boolean", "option", "function", "color", "string"].find((k) => c.classList.contains(k) || c.classList.contains(`lil-${k}`));

  function probe(ctx, controller) {
    if (bounds.has(controller)) return bounds.get(controller);
    const input = controller.querySelector("input");
    const fill = controller.querySelector(".fill, .lil-fill");
    if (!input || !fill) return null;
    const read = () => parseFloat(fill.style.width) / 100;
    const set = (v) => ctx.setNative(input, v, ["input"]);
    const v0 = parseFloat(input.value);
    const p0 = read();
    if (!Number.isFinite(v0) || !Number.isFinite(p0)) return null;
    const d = Math.max(Math.abs(v0) * 0.05, 0.01);
    let v1 = p0 >= 0.99 ? v0 - d : v0 + d;
    set(v1);
    let p1 = read();
    let vA = parseFloat(input.value);
    if (Math.abs(p1 - p0) < 1e-6) { v1 = v0 + d * 40 * (p0 >= 0.5 ? -1 : 1); set(v1); p1 = read(); vA = parseFloat(input.value); }
    if (!Number.isFinite(vA)) vA = v1;
    set(v0);
    ctx.setNative(input, v0, ["change", "blur"]);
    if (Math.abs(p1 - p0) < 1e-6) return null;
    const range = (vA - v0) / (p1 - p0);
    const min = v0 - p0 * range;
    const result = { min: +min.toPrecision(6), max: +(min + range).toPrecision(6) };
    bounds.set(controller, result);
    return result;
  }

  function lilControls(ctx, root) {
    const list = [];
    let buttons = [];
    const flush = () => { if (buttons.length) list.push({ type: "buttons", items: buttons }); buttons = []; };
    for (const el of root.querySelectorAll(".title, .lil-title, .controller, .lil-controller")) {
      if (el.matches(".title, .lil-title")) {
        if (el.closest(".root, .lil-root") === el.parentElement?.closest(".lil-gui") && el.parentElement === root) continue; // Haupttitel
        flush();
        list.push({ type: "heading", label: textOf(el) });
        continue;
      }
      const kind = lilKind(el);
      const name = lilName(el);
      const ref = el;
      if (kind === "function") { buttons.push({ label: name, el: () => ref.querySelector("button") ?? ref }); continue; }
      flush();
      if (kind === "boolean") list.push({ type: "toggle", label: name, el: () => ref.querySelector("input") });
      else if (kind === "option") list.push({ type: "select", label: name, el: () => ref.querySelector("select") });
      else if (kind === "number") {
        const b = probe(ctx, el);
        if (b) list.push({ type: "range", lil: true, label: name, el: () => ref.querySelector("input"), min: b.min, max: b.max, step: "any" });
      }
    }
    flush();
    return list;
  }

  return {
    dynamic: true,
    hide: `.lil-gui.root, .lil-gui.autoPlace, [data-bm-hide], #VRButton, .xr-entry-button { display: none !important; } ${extraHide}`,
    setup(ctx) {
      for (const p of findPanels(ctx)) { p.setAttribute("data-bm-hide", ""); p.setAttribute("data-bm-panel", ""); }
    },
    controls(ctx) {
      const list = [];
      for (const panel of ctx.qa("[data-bm-panel]")) list.push(...panelControls(panel));
      for (const root of ctx.qa(".lil-gui.root, .lil-gui.autoPlace")) {
        if (root.parentElement?.closest(".lil-gui")) continue;
        list.push(...lilControls(ctx, root));
      }
      return [...(options.before ?? []), ...list, ...(options.after ?? [])];
    },
  };
}

export default auto();
