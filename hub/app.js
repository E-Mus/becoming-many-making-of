/* Becoming Many – Making-of
 *
 * Liest die Projekte vom Server (/becoming-many-making-of/api/projects.json), baut die Übersicht und zeigt
 * ein Projekt im Vollbild. Zwei Modi:
 *   original      – das Experiment genau so, wie es war; nur eine kleine Leiste.
 *   bm            – die Original-Bedienelemente werden ausgeblendet; ein
 *                   einheitliches Bedienfeld steuert über den Adapter
 *                   (adapter.js im Projektordner) die echten Regler.
 */

const SENSES = {
  duft: { label: "Duft", color: "var(--duft)" },
  echo: { label: "Echoortung", color: "var(--echo)" },
  bewegung: { label: "Bewegung", color: "var(--bewegung)" },
  waerme: { label: "Wärme", color: "var(--waerme)" },
  magnet: { label: "Magnetfeld", color: "var(--magnet)" },
  verbindung: { label: "Verbindungen", color: "var(--verbindung)" },
  klang: { label: "Klang", color: "var(--klang)" },
  licht: { label: "Licht & Farbe", color: "var(--licht)" },
  welt: { label: "Welt", color: "var(--welt)" },
};
const CATEGORY = {
  experimente: { label: "Experiment", color: "var(--accent)" },
  finale: { label: "Finale", color: "var(--accent)" },
  archiv: { label: "Archiv", color: "var(--archive)" },
};
const MONTHS = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const fmtDate = (iso) => { const d = new Date(iso); return `${d.getDate()}. ${MONTHS[d.getMonth()]} ${d.getFullYear()}`; };
const senseColor = (p) => SENSES[p.senses?.[0]]?.color ?? "var(--accent)";

const state = {
  projects: [],
  sequence: [],   // Experimente (chronologisch) + Finale
  archive: [],    // Archiv (chronologisch), eigene Blätter-Reihe
  history: {},    // Versionen und Meilensteine (hub/history.json)
  deck: { steps: [] }, // Präsentation (hub/praesentation.json), nur für die Übersicht
  mode: readMode(),
  current: null,
  view: null,
  frame: null,
  adapter: null,
  session: null,
};

function readMode() {
  try { return localStorage.getItem("bm-showcase-mode") === "original" ? "original" : "bm"; } catch { return "bm"; }
}

/* ================= Start ================= */
import { mountAir } from "/becoming-many-making-of/hub/air.js";
mountAir(document.getElementById("air"), { density: 0.9 });
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-scroll]");
  if (!a) return;
  e.preventDefault();
  document.querySelector(a.getAttribute("href"))?.scrollIntoView({ behavior: "smooth", block: "start" });
});
init();

async function init() {
  // ?clean blendet alle Bedienelemente aus (für Vorschaubilder)
  if (new URLSearchParams(location.search).has("clean")) { document.body.classList.add("clean"); state.mode = "bm"; }
  const [projects, history, deck] = await Promise.all([
    fetch("/becoming-many-making-of/api/projects.json").then((r) => r.json()),
    fetch("/becoming-many-making-of/hub/history.json").then((r) => r.json()).catch(() => ({})),
    fetch("/becoming-many-making-of/hub/praesentation.json").then((r) => r.json()).catch(() => ({ steps: [] })),
  ]);
  // „Becoming Many“ bricht nie um (wie das Logo)
  const bind = (t) => (typeof t === "string" ? t.replace(/Becoming Many/g, "Becoming\u00a0Many") : t);
  for (const p of projects) for (const k of ["title", "summary", "description"]) p[k] = bind(p[k]);
  state.history = history;
  state.deck = deck;
  const byDate = (a, b) => a.date.localeCompare(b.date);
  state.projects = projects;
  state.sequence = [
    ...projects.filter((p) => p.category === "experimente").sort(byDate),
    ...projects.filter((p) => p.category === "finale").sort(byDate),
  ];
  const relOrder = (a, b) => (a.release ?? "~").localeCompare(b.release ?? "~", "de", { numeric: true });
  state.archive = projects.filter((p) => p.category === "archiv").sort((a, b) => (a.version ?? 0) - (b.version ?? 0) || byDate(a, b) || relOrder(a, b));
  renderHome();
  setMode(state.mode, { silent: true });
  window.addEventListener("hashchange", route);
  route();
}

function route() {
  const m = location.hash.match(/^#\/p\/([^/]+)(?:\/([^/]+))?/);
  const project = m && state.projects.find((p) => p.id === m[1]);
  if (project) openProject(project, m[2]);
  else showHome();
}
const go = (hash) => { if (location.hash !== hash) location.hash = hash; else route(); };

/* ================= Übersicht ================= */
function thumbHTML(p) {
  if (p.hasThumb) return `<div class="thumb"><img src="/becoming-many-making-of/thumb/${p.id}.jpg" alt="" loading="lazy"></div>`;
  const cols = (p.senses ?? []).map((s) => SENSES[s]?.color).filter(Boolean);
  const stops = cols.length ? cols : ["var(--accent)"];
  const bg = stops.map((c, i) => `radial-gradient(60% 80% at ${15 + (i * 70) / Math.max(1, stops.length - 1)}% ${i % 2 ? 80 : 25}%, color-mix(in srgb, ${c} 55%, transparent), transparent 70%)`).join(",");
  return `<div class="thumb"><div class="gen" style="background:${bg}, var(--paper-2)"><b>${esc(p.title[0])}</b></div></div>`;
}
const sensesHTML = (p) => `<ul class="senses">${(p.senses ?? []).map((s) => SENSES[s] ? `<li><i style="background:${SENSES[s].color}"></i>${SENSES[s].label}</li>` : "").join("")}</ul>`;

function cardHTML(p) {
  return `
    <button type="button" class="card" data-open="${p.id}" data-senses="${(p.senses ?? []).join(" ")}">
      ${thumbHTML(p)}
      <div class="body">
        <span class="date"><span>${fmtDate(p.date)}</span>${p.views?.length > 1 ? `<span class="views">${p.views.length} Ansichten</span>` : ""}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${sensesHTML(p)}
      </div>
    </button>`;
}

function renderHome() {
  const exp = state.projects.filter((p) => p.category === "experimente");
  const versions = state.history.versions ?? [];


  // Finale: die Installation groß, weitere Fassungen (Web-Release) daneben klein
  const finals = state.projects.filter((p) => p.category === "finale").sort((a, b) => (a.kind === "Finale" ? -1 : b.kind === "Finale" ? 1 : a.date.localeCompare(b.date)));
  $("#finale").innerHTML = finals.map((p, i) => i === 0 ? `
    <button type="button" class="finale-card" data-open="${p.id}">
      ${thumbHTML(p)}
      <div class="body">
        <span class="kind">Finale · ${p.release ? `${esc(p.release)} · ` : ""}${fmtDate(p.date)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${sensesHTML(p)}
        <span class="meta">${esc((p.tech ?? []).join(" · "))}${p.commits ? ` · ${p.commits} Commits` : ""}</span>
        <span class="go">Abspielen <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>
    </button>` : `
    <button type="button" class="finale-side" data-open="${p.id}">
      ${thumbHTML(p)}
      <span class="body"><span class="kind">${esc(p.kind)} · ${fmtDate(p.date)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p></span>
    </button>`).join("");

  // Experimente mit Filter nach Sinn
  const used = Object.keys(SENSES).filter((s) => exp.some((p) => p.senses?.includes(s)));
  $("#exp-filter").innerHTML = [`<button type="button" class="chip" data-filter="" aria-pressed="true">Alle <small>${exp.length}</small></button>`,
    ...used.map((s) => `<button type="button" class="chip" data-filter="${s}" aria-pressed="false"><i style="background:${SENSES[s].color}"></i>${SENSES[s].label} <small>${exp.filter((p) => p.senses?.includes(s)).length}</small></button>`)].join("");
  $("#experiments").innerHTML = state.sequence.filter((p) => p.category === "experimente").map(cardHTML).join("");

  // Archiv: nach Version gruppiert
  $("#archive").innerHTML = versions.map((v) => {
    const stages = state.archive.filter((p) => p.version === v.id);
    const finalsHere = finals.filter((p) => p.version === v.id);
    return `
    <section class="version v${v.id}">
      <header class="version-head">
        <span class="version-num">V${v.id}</span>
        <div><h3>${esc(v.name)}</h3><p class="version-dates">${fmtDate(v.from)} – ${fmtDate(v.to)} · ${stages.length} Stände${finalsHere.length ? ` + ${finalsHere.length === 1 ? "Finale" : "Finale & Web-Release"}` : ""}</p></div>
        <p class="version-sum">${esc(v.summary)}<br><span class="version-repo">${esc(v.repo)}</span></p>
      </header>
      <div class="stage-row">${stages.map((p) => `
        <button type="button" class="stage" data-open="${p.id}">
          ${thumbHTML(p)}
          <span class="stage-meta"><span>${fmtDate(p.date)}</span>${p.release ? `<b>${esc(p.release)}</b>` : ""}</span>
          <h4>${esc(p.title)}</h4>
          <p>${esc(p.summary)}</p>
        </button>`).join("")}${finalsHere.map((p) => `
        <button type="button" class="stage is-final" data-open="${p.id}">
          ${thumbHTML(p)}
          <span class="stage-meta"><span>${fmtDate(p.date)}</span><b>${esc(p.release ?? p.kind)}</b></span>
          <h4>${esc(p.kind === "Finale" ? "Finale" : p.title)}</h4>
          <p>${esc(p.summary)}</p>
        </button>`).join("")}
      </div>
    </section>`;
  }).join("");

  renderTimeline();
  renderLineage();
}

/* Wie die Sinne gewachsen sind: pro Sinn alle Stände und Experimente in zeitlicher Folge */
function renderLineage() {
  const items = state.projects.filter((p) => p.category !== "finale" || p.kind === "Finale");
  $("#lineage").innerHTML = Object.entries(SENSES).filter(([k]) => k !== "welt").map(([key, s]) => {
    const chain = items.filter((p) => p.senses?.includes(key)).sort((a, b) => a.date.localeCompare(b.date));
    if (chain.length < 2) return "";
    return `<div class="lin-row" style="--c:${s.color}">
      <div class="lin-head"><i></i><b>${s.label}</b><small>${chain.length} Stationen</small></div>
      <div class="lin-chain">${chain.map((p) => `
        <button type="button" class="lin-item ${p.category}" data-open="${p.id}" title="${esc(p.summary)}">
          ${thumbHTML(p)}
          <span class="lin-date">${fmtDate(p.date)}${p.version ? ` · V${p.version}` : ""}</span>
          <span class="lin-title">${esc(p.category === "finale" ? "Finale" : p.title)}</span>
        </button>`).join('<span class="lin-arrow"></span>')}
      </div>
    </div>`;
  }).join("");
}


document.addEventListener("click", (e) => {
  const f = e.target.closest("[data-filter]");
  if (!f) return;
  for (const b of document.querySelectorAll("[data-filter]")) b.setAttribute("aria-pressed", String(b === f));
  for (const c of document.querySelectorAll("#experiments .card")) c.hidden = Boolean(f.dataset.filter) && !c.dataset.senses.split(" ").includes(f.dataset.filter);
});

/* Zeitleiste: alles auf einer Linie, vier klar getrennte Arten
   – Versionen:  die Linie selbst wird dick (V1, V2, V3)
   – Änderungen: feine Striche quer über die Linie (Stände, Releases, Patches)
   – Experimente: farbige Punkte über der Linie
   – Termine:    beschriftete Marken unter der Linie
   Zoombar (Ziehen, Pinch, ⌘/Strg + Scrollen, Doppelklick, Knöpfe). Ab TL_CARDS-facher
   Vergrößerung stehen über den Punkten die Vorschaubilder der Experimente. */
const TL = { k: 1, a: 0, W: 0, el: null, view: null, raf: 0, anim: 0, suppress: 0 };
const TL_CARDS = 2.2; // ab dieser Zoomstufe: Vorschaubilder
const TL_MAX = 40;
const TL_START = new Date("2026-03-30T12:00:00").getTime();
const TL_END = new Date("2026-11-30T12:00:00").getTime();
const DAY = 864e5;
const tf = (iso) => (new Date(`${iso.slice(0, 10)}T12:00:00`).getTime() - TL_START) / (TL_END - TL_START);
const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
const isoOf = (ms) => new Date(ms).toISOString().slice(0, 10);

function renderTimeline(el = $("#timeline")) {
  const versions = state.history.versions ?? [];
  const events = state.history.events ?? [];
  const patches = state.history.milestones ?? [];
  const exps = state.projects.filter((p) => p.category === "experimente").sort((a, b) => a.date.localeCompare(b.date));
  const stands = state.projects.filter((p) => p.category === "archiv").sort((a, b) => a.date.localeCompare(b.date));
  const finale = state.projects.find((p) => p.category === "finale");
  TL.el = el;
  TL.versions = versions;

  let h = `<div class="tl2-head">
    <div class="tl2-legend">
      <span><i class="lg-version"></i>Version</span>
      <span><i class="lg-change"></i>Stand · Release · Patch</span>
      <span><i class="lg-exp"></i>Experiment</span>
      <span><i class="lg-event"></i>Termin</span>
    </div>
    <div class="tl2-zoom" role="toolbar" aria-label="Zeitleiste zoomen">
      <button type="button" data-tlz="all">Alles</button>
      ${versions.map((v) => `<button type="button" data-tlz="v${v.id}" title="${esc(v.name)}">V${v.id}</button>`).join("")}
      <span class="tl2-sep"></span>
      <button type="button" data-tlz="out" aria-label="Herauszoomen">−</button>
      <output class="tl2-level">1×</output>
      <button type="button" data-tlz="in" aria-label="Hineinzoomen">+</button>
    </div>
  </div>
  <div class="tl2-view" tabindex="0" aria-label="Zeitleiste. Pfeiltasten verschieben, Plus und Minus zoomen."><div class="tl2-track">
    <div class="tl2-ticks"></div>
    <div class="tl2-line"></div>`;
  // Monate
  for (let m = 3; m <= 10; m++) {
    const iso = `2026-${String(m + 1).padStart(2, "0")}-01`;
    const next = `2026-${String(m + 2).padStart(2, "0")}-01`;
    h += `<span class="tl2-month" data-x="${iso}" data-x2="${next}" data-sticky>${MONTHS[m]}</span>`;
  }
  // Versionen: die Linie wird dick
  for (const v of versions) {
    h += `<div class="tl2-version" data-x="${v.from}" data-x2="${v.to}" data-tip="Version ${v.id} · ${esc(v.name)}: ${fmtDate(v.from)} – ${fmtDate(v.to)}"></div>`;
    h += `<span class="tl2-vlabel" data-x="${v.from}" data-x2="${v.to}" data-sticky>V${v.id} <b>${esc(v.name)}</b></span>`;
  }
  // Änderungen: Patches (fein), Stände (etwas länger, anklickbar), Finale (Punkt)
  for (const m of patches) h += `<i class="tl2-patch" data-x="${m.date}" data-tip="${esc(m.label)} · ${fmtDate(m.date)} — ${esc(m.note)}"></i>`;
  for (const p of stands) h += `<button type="button" class="tl2-stand" data-x="${p.date}" data-open="${p.id}" data-tip="${esc(p.title)} · ${fmtDate(p.date)}"></button>`;
  if (finale) h += `<button type="button" class="tl2-finale" data-x="${finale.date}" data-open="${finale.id}" data-tip="Finale · ${esc(finale.title)} · ${fmtDate(finale.date)}"></button>`;
  // Experimente: Verbindungslinien, Vorschaukarten, Punkte
  h += `<svg class="tl2-leads" aria-hidden="true"></svg>`;
  for (const p of exps) {
    h += `<button type="button" class="tl2-card" data-card="${p.date}" data-open="${p.id}" tabindex="-1">${thumbHTML(p)}<span class="tl2-card-t">${esc(p.title)}</span><small>${fmtDate(p.date)}</small></button>`;
  }
  for (const p of exps) {
    h += `<button type="button" class="tl2-exp" data-dot="${p.date}" style="background:${senseColor(p)}" data-open="${p.id}" data-tip="Experiment · ${esc(p.title)} · ${fmtDate(p.date)}"></button>`;
  }
  // Termine: unter der Linie, Beschriftung nach rechts (am Rand nach links)
  events.forEach((e, k) => {
    const y = 50 + (k % 2) * 34;
    h += `<span class="tl2-elead" data-x="${e.date}" style="top:calc(var(--line) + 6px);height:${y - 6}px"></span>`;
    h += `<span class="tl2-event" data-x="${e.date}" data-event style="top:calc(var(--line) + ${y}px)" data-tip="${esc(e.label)} · ${fmtDate(e.date)} — ${esc(e.note)}"><b>${esc(e.label)}</b><small>${fmtDate(e.date)}</small></span>`;
  });
  h += `</div></div>
  <div class="tl2-mini" aria-hidden="true">
    ${versions.map((v) => `<i style="left:${tf(v.from) * 100}%;width:${(tf(v.to) - tf(v.from)) * 100}%"></i>`).join("")}
    <b class="tl2-brush"></b>
  </div>
  <p class="tl2-hint">Ziehen verschiebt · Pinch, ⌘/Strg + Scrollen oder Doppelklick zoomt · nah dran erscheinen die Vorschaubilder</p>
  <div class="tl-tip" hidden></div>`;
  el.innerHTML = h;

  const view = TL.view = el.querySelector(".tl2-view");
  TL.pos = [...view.querySelectorAll("[data-x]")];
  TL.dots = [...view.querySelectorAll("[data-dot]")];
  TL.cards = [...view.querySelectorAll("[data-card]")];
  for (const n of view.querySelectorAll("[data-sticky]")) n._w = n.offsetWidth || 80;
  bindTimeline(el, view);
  tlLayout();
}

function tlLayout() {
  const { view } = TL;
  if (!view || !view.isConnected) return;
  const W = TL.W = view.clientWidth || 1000;
  TL.k = clamp(TL.k, 1, TL_MAX);
  TL.a = clamp(TL.a, 0, 1 - 1 / TL.k);
  const { k, a } = TL;
  const X = (iso) => (tf(iso) - a) * W * k;
  const cards = k >= TL_CARDS;
  // feste Größe: die Zeitleiste ändert beim Zoomen nie ihre Höhe (sonst springt die Seite)
  const cw = 120;
  const ch = Math.round(cw * 0.625) + 36;
  const LINE = 84 + 2 * (ch + 14) + 6;
  view.style.setProperty("--line", `${LINE}px`);
  view.style.setProperty("--cw", `${cw}px`);
  view.classList.toggle("cards", cards);
  view.classList.toggle("zoomed", k > 1.01);

  // einfache Elemente: Position (und Breite) aus dem Datum
  for (const n of TL.pos) {
    const x = X(n.dataset.x);
    if (n.dataset.x2 !== undefined) {
      const x2 = X(n.dataset.x2);
      if (n.hasAttribute("data-sticky")) {
        // Beschriftung bleibt am linken Rand stehen, solange ihr Abschnitt sichtbar ist
        n.style.left = `${Math.max(Math.min(Math.max(x, TL.k > 1.01 ? 30 : 0), x2 - n._w - 10), x)}px`;
      } else {
        n.style.left = `${x}px`;
        n.style.width = `${Math.max(x2 - x, 6)}px`;
      }
    } else n.style.left = `${x}px`;
    if (n.hasAttribute("data-event")) n.classList.toggle("flip", x > W - 230);
  }

  // Tage und Wochen, sobald genug Platz ist
  const ppd = (W * k) / ((TL_END - TL_START) / DAY);
  let ticks = "";
  if (ppd >= 10) {
    const from = TL_START + a * (TL_END - TL_START) - DAY;
    const to = from + (TL_END - TL_START) / k + 2 * DAY;
    for (let ms = Math.floor(from / DAY) * DAY + DAY / 2; ms <= to; ms += DAY) {
      const d = new Date(ms);
      const monday = d.getDay() === 1;
      if (!monday && ppd < 34) continue;
      const x = X(isoOf(ms));
      ticks += `<span class="tl2-tick${monday ? " week" : ""}" style="left:${x}px">${d.getDate()}</span>`;
    }
  }
  view.querySelector(".tl2-ticks").innerHTML = ticks;

  // Punkte: über der Linie, bei engem Abstand gestapelt
  const placed = [];
  const dotY = [];
  TL.dots.forEach((n, i) => {
    const px = X(n.dataset.dot);
    let row = 0;
    while (placed.some((q) => q.row === row && Math.abs(q.px - px) < 11)) row++;
    placed.push({ px, row });
    const y = 46 + row * 12;
    dotY[i] = { px, y };
    n.style.left = `${px}px`;
    n.style.top = `calc(var(--line) - ${y}px)`;
  });

  // Vorschaukarten: zwei Reihen, ohne Überlappung, so nah wie möglich am Datum
  let paths = "";
  if (cards) {
    const rows = [[], []];
    TL.cards.forEach((n, i) => rows[i % 2].push(i));
    rows.forEach((idx, r) => {
      const xs = placeRow(idx.map((i) => dotY[i].px), cw, 12);
      // Karten, deren Punkt im Bild ist, nicht über den Rand schieben
      const vis = idx.map((i) => dotY[i].px >= 0 && dotY[i].px <= W);
      let lo = 32;
      for (let j = 0; j < xs.length; j++) if (vis[j]) { xs[j] = Math.max(xs[j], lo); lo = xs[j] + cw + 12; }
      let hi = W - 32 - cw;
      for (let j = xs.length - 1; j >= 0; j--) if (vis[j]) { xs[j] = Math.min(xs[j], hi); hi = xs[j] - cw - 12; }
      const bottom = 84 + r * (ch + 14);
      idx.forEach((i, j) => {
        const n = TL.cards[i];
        n.style.left = `${xs[j]}px`;
        n.style.top = `calc(var(--line) - ${bottom + ch}px)`;
        n.style.height = `${ch}px`;
        const cx = xs[j] + cw / 2, d = dotY[i];
        // Linie von der Karte zum Punkt (Koordinaten relativ zur Linie, SVG hängt an --line)
        paths += `M${cx} ${600 - bottom}V${600 - bottom + 10}L${d.px} ${600 - d.y + 1}`;
      });
    });
  }
  view.querySelector(".tl2-leads").innerHTML = paths ? `<path d="${paths}"/>` : "";

  // Übersicht und Anzeige
  const brush = TL.el.querySelector(".tl2-brush");
  brush.style.left = `${a * 100}%`;
  brush.style.width = `${100 / k}%`;
  TL.el.querySelector(".tl2-mini").classList.toggle("on", k > 1.01);
  TL.el.querySelector(".tl2-level").textContent = `${k < 10 ? k.toFixed(1).replace(".0", "").replace(".", ",") : Math.round(k)}×`;
  for (const b of TL.el.querySelectorAll("[data-tlz]")) {
    const id = b.dataset.tlz;
    if (id === "all") b.setAttribute("aria-pressed", String(k <= 1.01));
    else if (id.startsWith("v")) {
      const v = TL.versions.find((v) => `v${v.id}` === id);
      const [a2, k2] = fitRange(v.from, v.to);
      b.setAttribute("aria-pressed", String(Math.abs(a2 - a) < 0.004 && Math.abs(k2 / k - 1) < 0.02));
    }
  }
}

/* Einreihige Anordnung ohne Überlappung mit kleinster Verschiebung (Blöcke zusammenfassen) */
function placeRow(centers, w, gap) {
  const pitch = w + gap;
  const blocks = [];
  for (const c of centers) {
    blocks.push({ n: 1, sum: c - w / 2 });
    while (blocks.length > 1) {
      const p = blocks[blocks.length - 2], q = blocks[blocks.length - 1];
      if (p.sum / p.n + p.n * pitch <= q.sum / q.n) break;
      blocks.splice(-2, 2, { n: p.n + q.n, sum: p.sum + q.sum - q.n * p.n * pitch });
    }
  }
  const out = [];
  for (const b of blocks) for (let j = 0; j < b.n; j++) out.push(b.sum / b.n + j * pitch);
  return out;
}

const tlSchedule = () => { if (!TL.raf) TL.raf = requestAnimationFrame(() => { TL.raf = 0; tlLayout(); }); };

function tlZoomAt(factor, fx = 0.5) {
  cancelAnimationFrame(TL.anim); TL.anim = 0;
  const k2 = clamp(TL.k * factor, 1, TL_MAX);
  const f = TL.a + fx / TL.k;
  TL.a = f - fx / k2;
  TL.k = k2;
  tlSchedule();
}

function fitRange(from, to) {
  const f1 = tf(from), f2 = tf(to);
  const span = (f2 - f1) * 1.1;
  const k = clamp(Math.max(1 / span, TL_CARDS), 1, TL_MAX); // Versionen immer mit Vorschaubildern
  return [clamp((f1 + f2) / 2 - 0.5 / k, 0, 1 - 1 / k), k];
}

function tlAnimate(a2, k2) {
  cancelAnimationFrame(TL.anim);
  k2 = clamp(k2, 1, TL_MAX);
  a2 = clamp(a2, 0, 1 - 1 / k2);
  const a1 = TL.a, s1 = Math.log(1 / TL.k), s2 = Math.log(1 / k2);
  const c1 = a1 + 0.5 / TL.k, c2 = a2 + 0.5 / k2;
  const t0 = performance.now(), dur = 650;
  const tick = (now) => {
    const t = Math.min(1, (now - t0) / dur);
    const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const s = Math.exp(s1 + (s2 - s1) * e);
    TL.k = 1 / s;
    TL.a = c1 + (c2 - c1) * e - s / 2;
    tlLayout();
    TL.anim = t < 1 ? requestAnimationFrame(tick) : 0;
  };
  TL.anim = requestAnimationFrame(tick);
}

function bindTimeline(el, view) {
  // Knöpfe
  el.querySelector(".tl2-zoom").onclick = (e) => {
    const b = e.target.closest("[data-tlz]");
    if (!b) return;
    const id = b.dataset.tlz;
    const c = TL.a + 0.5 / TL.k;
    if (id === "all") tlAnimate(0, 1);
    else if (id === "in") { const k = TL.k * 2; tlAnimate(c - 0.5 / k, k); }
    else if (id === "out") { const k = Math.max(1, TL.k / 2); tlAnimate(c - 0.5 / k, k); }
    else {
      const v = TL.versions.find((v) => `v${v.id}` === id);
      if (v) tlAnimate(...fitRange(v.from, v.to));
    }
  };

  // Scrollen: ⌘/Strg (und Pinch auf dem Trackpad) zoomt, seitlich verschiebt
  view.addEventListener("wheel", (e) => {
    const r = view.getBoundingClientRect();
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const dy = clamp(e.deltaMode ? e.deltaY * 30 : e.deltaY, -60, 60);
      tlZoomAt(Math.exp(-dy * 0.01), (e.clientX - r.left) / r.width);
    } else if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && TL.k > 1.01) {
      e.preventDefault();
      cancelAnimationFrame(TL.anim); TL.anim = 0;
      TL.a += e.deltaX / (TL.W * TL.k);
      tlSchedule();
    }
  }, { passive: false });

  // Ziehen und Pinch (Maus, Stift, Finger)
  const pts = new Map();
  let drag = null, pinch = null;
  const pinchState = () => {
    const [p, q] = [...pts.values()];
    const r = view.getBoundingClientRect();
    return { d: Math.hypot(p.x - q.x, p.y - q.y) || 1, mid: ((p.x + q.x) / 2 - r.left) / r.width, k: TL.k, a: TL.a };
  };
  view.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    cancelAnimationFrame(TL.anim); TL.anim = 0;
    if (pts.size === 1) drag = { x: e.clientX, a: TL.a, id: e.pointerId, moved: false };
    if (pts.size === 2) { pinch = pinchState(); drag = null; }
  });
  view.addEventListener("pointermove", (e) => {
    if (!pts.has(e.pointerId)) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && pts.size === 2) {
      const now = pinchState();
      const k = clamp(pinch.k * (now.d / pinch.d), 1, TL_MAX);
      TL.a = pinch.a + pinch.mid / pinch.k - now.mid / k;
      TL.k = k;
      TL.suppress = performance.now();
      tlSchedule();
    } else if (drag) {
      const dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) > 4) {
        drag.moved = true;
        view.classList.add("dragging");
        try { view.setPointerCapture(e.pointerId); } catch {}
      }
      if (drag.moved) {
        TL.a = drag.a - dx / (TL.W * TL.k);
        TL.suppress = performance.now();
        tlSchedule();
      }
    }
  });
  const up = (e) => {
    pts.delete(e.pointerId);
    if (pts.size < 2) pinch = null;
    if (!pts.size) { drag = null; view.classList.remove("dragging"); }
  };
  view.addEventListener("pointerup", up);
  view.addEventListener("pointercancel", up);
  // nach dem Ziehen kein Klick auf Punkt oder Karte
  view.addEventListener("click", (e) => {
    if (performance.now() - TL.suppress < 250) { e.stopPropagation(); e.preventDefault(); }
  }, true);

  view.addEventListener("dblclick", (e) => {
    if (e.target.closest("[data-open]")) return;
    const r = view.getBoundingClientRect();
    const fx = (e.clientX - r.left) / r.width;
    const f = TL.a + fx / TL.k;
    const k = e.shiftKey ? TL.k / 2.5 : TL.k * 2.5;
    tlAnimate(f - fx / clamp(k, 1, TL_MAX), k);
  });

  view.addEventListener("keydown", (e) => {
    const c = TL.a + 0.5 / TL.k;
    if (e.key === "+" || e.key === "=") { const k = TL.k * 2; tlAnimate(c - 0.5 / k, k); }
    else if (e.key === "-") { const k = Math.max(1, TL.k / 2); tlAnimate(c - 0.5 / k, k); }
    else if (e.key === "0") tlAnimate(0, 1);
    else if (e.key === "ArrowLeft" && !e.altKey) tlAnimate(TL.a - 0.3 / TL.k, TL.k);
    else if (e.key === "ArrowRight" && !e.altKey) tlAnimate(TL.a + 0.3 / TL.k, TL.k);
    else return;
    e.preventDefault();
  });

  // Übersicht: Fenster greifen oder irgendwo hinklicken
  const mini = el.querySelector(".tl2-mini");
  const miniTo = (e) => {
    const r = mini.getBoundingClientRect();
    TL.a = (e.clientX - r.left) / r.width - 0.5 / TL.k;
    tlSchedule();
  };
  mini.onpointerdown = (e) => {
    cancelAnimationFrame(TL.anim); TL.anim = 0;
    mini.setPointerCapture(e.pointerId);
    miniTo(e);
    mini.onpointermove = miniTo;
    mini.onpointerup = mini.onpointercancel = () => { mini.onpointermove = null; };
  };

  // Hinweis beim Überfahren
  const tip = el.querySelector(".tl-tip");
  el.onmousemove = (ev) => {
    const target = ev.target.closest("[data-tip]");
    if (!target || view.classList.contains("dragging")) { tip.hidden = true; return; }
    tip.hidden = false;
    tip.textContent = target.dataset.tip;
    const r = el.getBoundingClientRect();
    tip.style.left = `${Math.min(Math.max(ev.clientX - r.left + 12, 0), r.width - tip.offsetWidth)}px`;
    tip.style.top = `${ev.clientY - r.top + 16}px`;
  };
  el.onmouseleave = () => { tip.hidden = true; };
}
window.addEventListener("resize", () => { if (TL.view) tlLayout(); });

document.addEventListener("click", (e) => {
  const open = e.target.closest("[data-open]");
  if (open) go(`#/p/${open.dataset.open}`);
  const mode = e.target.closest("[data-mode]");
  if (mode) setMode(mode.dataset.mode);
});

function showHome() {
  teardown();
  state.current = null;
  $("#viewer").hidden = true;
  $("#home").hidden = false;
  document.title = "Becoming Many – Making-of";
}

/* ================= Ton ================= */
// Stumm-Schalter: hub/inject.js in jeder Projektseite hält dann Audio an.
function readMute() { try { return localStorage.getItem("bm-showcase-mute") === "1"; } catch { return false; } }
function setMute(on) {
  try { localStorage.setItem("bm-showcase-mute", on ? "1" : "0"); } catch {}
  document.body.classList.toggle("muted", on);
  for (const b of document.querySelectorAll("[data-mute]")) b.setAttribute("aria-label", on ? "Ton an" : "Ton aus");
  const apply = (win) => {
    try { win.__bmSetMute?.(on); for (const f of win.document.querySelectorAll("iframe")) apply(f.contentWindow); } catch {}
  };
  if (state.frame) apply(state.frame.contentWindow);
}
document.addEventListener("click", (e) => { if (e.target.closest("[data-mute]")) { setMute(!readMute()); toast(readMute() ? "Ton aus" : "Ton an"); } });
setMute(readMute());

/* ================= Modus ================= */
function setMode(mode, { silent } = {}) {
  state.mode = mode;
  try { localStorage.setItem("bm-showcase-mode", mode); } catch {}
  document.body.classList.toggle("mode-bm", mode === "bm");
  document.body.classList.toggle("mode-original", mode === "original");
  for (const b of document.querySelectorAll("[data-mode]")) b.setAttribute("aria-checked", String(b.dataset.mode === mode));
  if (state.session) applySkin();
  if (!silent) toast(mode === "bm" ? "Becoming-Many-Look" : "Original, so wie es war");
  if (mode === "original" && state.current) showMiniCard(6000);
}

/* ================= Ansicht ================= */
function listFor(p) { return p.category === "archiv" ? state.archive : state.sequence; }

async function openProject(project, viewId) {
  const view = project.views?.find((v) => v.id === viewId) ?? project.views?.[0] ?? { id: "main", title: project.title, path: "index.html" };
  if (state.current?.id === project.id && state.view?.id === view.id) return;
  teardown();
  state.current = project;
  state.view = view;
  $("#home").hidden = true;
  $("#viewer").hidden = false;
  document.body.classList.toggle("dock-top", project.dock === "top");
  document.title = `${project.title} – Becoming Many`;

  // Leiste & Bedienfeld
  const list = listFor(project);
  const idx = list.indexOf(project);
  const cat = CATEGORY[project.category];
  $("#tb-crumb").innerHTML = `<span>${cat.label}</span>${list.length > 1 ? `<span class="sep">·</span><span>${idx + 1} von ${list.length}</span>` : ""}<span class="sep">/</span><b>${esc(project.title)}</b>${project.views?.length > 1 ? `<span class="sep">/</span><span>${esc(view.title)}</span>` : ""}`;
  const kind = `<i style="background:${project.category === "archiv" ? "var(--archive)" : senseColor(project)}"></i>${esc(project.kind ?? cat.label)} · ${fmtDate(project.date)}`;
  $("#panel-kind").innerHTML = kind;
  $("#panel-title").textContent = project.title;
  $("#panel-summary").textContent = project.summary ?? "";
  $("#panel-desc").textContent = project.description ?? "";
  $("#panel-meta").innerHTML = [
    ["Technik", (project.tech ?? []).join(", ")],
    ["Stand", project.since ? `${fmtDate(project.since)} – ${fmtDate(project.date)}` : fmtDate(project.date)],
    ["Commit", project.commit],
    ["Herkunft", project.origin],
  ].filter(([, v]) => v).map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("");
  $("#panel-views").innerHTML = (project.views?.length ?? 0) > 1
    ? project.views.map((v) => `<button type="button" role="tab" aria-selected="${v.id === view.id}" data-view="${v.id}">${esc(v.title)}</button>`).join("")
    : "";
  $("#panel-controls").innerHTML = "";
  $("#panel-hint").innerHTML = project.controls ?? "";
  $("#panel").scrollTop = 0;

  $("#mini-dot").style.background = project.category === "archiv" ? "var(--archive)" : senseColor(project);
  $("#mini-title").textContent = project.views?.length > 1 ? `${project.title} · ${view.title}` : project.title;
  $("#mini-kind").innerHTML = kind;
  $("#mini-card-title").textContent = project.title;
  $("#mini-card-text").textContent = project.summary ?? "";
  $("#mini-card-hint").innerHTML = project.controls ?? "";

  // Adapter laden (falls vorhanden)
  // Ohne eigene adapter.js übernimmt der automatische Adapter (hub/adapters/auto.js)
  state.adapter = null;
  try {
    state.adapter = project.hasAdapter
      ? (await import(`/becoming-many-making-of/adapter/${project.id}.js?v=${Date.now()}`)).default
      : (await import("/becoming-many-making-of/hub/adapters/auto.js")).default;
  } catch (error) { console.warn("Adapter konnte nicht geladen werden:", error); }
  if (state.current !== project) return; // inzwischen weitergeblättert

  // Experiment laden – das vorherige wurde in teardown() komplett entfernt
  const frame = document.createElement("iframe");
  frame.title = project.title;
  frame.allow = "autoplay; fullscreen; xr-spatial-tracking; gyroscope; accelerometer; microphone; camera; serial; usb";
  frame.src = `/becoming-many-making-of/p/${project.id}/${view.path}`;
  frame.addEventListener("load", () => onFrameLoad(frame));
  $("#stage").replaceChildren(frame);
  state.frame = frame;
  wake();
  if (state.mode === "original") showMiniCard(8000);
}

function teardown() {
  state.session?.dispose();
  state.session = null;
  state.frame = null;
  $("#stage").replaceChildren();
  $("#stage-overlay").replaceChildren();
}

/* ---------- Brücke zwischen Bedienfeld und Experiment ---------- */
function onFrameLoad(frame) {
  if (frame !== state.frame) return;
  let win, doc;
  try { win = frame.contentWindow; doc = frame.contentDocument; } catch { return; }
  win.addEventListener("keydown", onKey, true);
  win.addEventListener("mousemove", wake, { passive: true });
  win.addEventListener("pointerdown", () => hideMiniCard());
  // Links wie „Alle Experimente“ (href="/becoming-many-making-of/") führen zurück zur Übersicht statt in den Rahmen
  doc.addEventListener("click", (e) => {
    const a = e.target.closest?.('a[href="/becoming-many-making-of/"]');
    if (a) { e.preventDefault(); go("#/"); }
  }, true);
  frame.focus();

  const spec = state.adapter ? resolveSpec(state.adapter, state.view.id) : {};
  const ctx = makeContext(win, doc);
  const disposers = [];
  const session = {
    win, doc, ctx, spec,
    dispose() { for (const d of disposers) try { d(); } catch {} },
    onDispose(fn) { disposers.push(fn); },
  };
  state.session = session;
  applySkin();
  try { spec.setup?.(ctx); } catch (e) { console.warn(e); }

  // Regler aufbauen. Ohne Regler bleibt nur die Info, eingeklappt, damit die Seite frei bleibt.
  let updaters = [];
  let signature = null;
  const build = () => {
    let list = [];
    try { list = spec.controls ? spec.controls(ctx) : []; } catch (e) { console.warn(e); }
    const sig = list.map((c) => `${c.type}:${c.label ?? ""}:${c.items?.length ?? ""}`).join("|");
    if (sig === signature) return;
    const first = signature === null;
    signature = sig;
    updaters = renderControls(list, ctx);
    if (first || !list.length) $("#panel").classList.toggle("collapsed", list.length === 0);
    else if (list.length) $("#panel").classList.remove("collapsed");
  };
  build();
  const tick = () => { for (const u of updaters) try { u(); } catch {} };
  tick();
  const timer = setInterval(tick, 200);
  session.onDispose(() => clearInterval(timer));
  // Dynamische Adapter: Seiten bauen ihre Regler oft erst nach dem Laden auf
  if (spec.dynamic) {
    let n = 0;
    const scan = () => {
      if (state.session !== session) return;
      try { spec.setup?.(ctx); } catch {}
      build();
      n++;
      session.scanTimer = setTimeout(scan, n < 12 ? 800 : 3000);
    };
    session.scanTimer = setTimeout(scan, 500);
    session.onDispose(() => clearTimeout(session.scanTimer));
  }

  if (spec.stage) {
    const overlay = $("#stage-overlay");
    const cleanup = spec.stage(ctx, overlay);
    session.onDispose(() => { cleanup?.(); overlay.replaceChildren(); });
    session.stageOverlay = overlay;
  }
}

function resolveSpec(adapter, viewId) {
  const base = { ...adapter };
  const override = adapter.views?.[viewId] ?? {};
  return { ...base, ...override };
}

/** Einheitlicher Look: blendet die Original-Bedienelemente aus (CSS aus dem Adapter). */
function applySkin() {
  const s = state.session;
  if (!s) return;
  let style;
  try { style = s.doc.getElementById("bm-showcase-skin"); } catch { return; }
  const css = s.spec.hide ?? "";
  if (state.mode === "bm" && css) {
    if (!style) {
      style = s.doc.createElement("style");
      style.id = "bm-showcase-skin";
      (s.doc.head ?? s.doc.documentElement).append(style);
    }
    style.textContent = css;
  } else style?.remove();
  const overlay = $("#stage-overlay");
  overlay.style.display = state.mode === "bm" ? "" : "none";
}

function makeContext(win, doc) {
  const q = (sel) => doc.querySelector(sel);
  const qa = (sel) => [...doc.querySelectorAll(sel)];
  /** Erstes Element (Selektor), dessen sichtbarer Text genau text ist. */
  const byText = (sel, text) => qa(sel).find((el) => el.textContent.trim() === text);
  /** lil-gui: Eingabefeld eines Controllers anhand seines Namens. */
  const lil = (name) => qa(".lil-gui .controller, .lil-gui .lil-controller").find((c) => c.querySelector(".name, .lil-name")?.textContent.trim() === name);
  return { win, doc, q, qa, byText, lil, setNative };
}

/** Setzt einen Wert so, wie es eine echte Eingabe täte (funktioniert auch mit React). */
function setNative(el, value, events = ["input", "change"]) {
  const proto = Object.getPrototypeOf(el);
  const desc = Object.getOwnPropertyDescriptor(proto, "value");
  if (desc?.set) desc.set.call(el, String(value)); else el.value = value;
  const W = el.ownerDocument.defaultView;
  for (const type of events) el.dispatchEvent(new W.Event(type, { bubbles: true }));
}

/* ---------- Regler rendern ---------- */
function renderControls(list, ctx) {
  const root = $("#panel-controls");
  root.replaceChildren();
  const updaters = [];
  const get = (fn) => { try { return fn?.(ctx) ?? null; } catch { return null; } };

  for (const c of list) {
    const wrap = document.createElement("div");
    wrap.className = "ctl";
    if (c.color) wrap.style.setProperty("--c", c.color);

    if (c.type === "heading") {
      wrap.className = "ctl-heading";
      wrap.textContent = c.label;
    } else if (c.type === "note") {
      wrap.innerHTML = `<div class="ctl-note">${c.text}</div>`;
    } else if (c.type === "range") {
      // Quelle: entweder ein natives Eingabefeld (el) oder get/set-Funktionen
      wrap.innerHTML = `<div class="ctl-row"><span>${esc(c.label)}</span><output></output></div><input type="range">`;
      const input = wrap.querySelector("input");
      const out = wrap.querySelector("output");
      let dragging = false;
      const native = () => (c.el ? get(c.el) : null);
      const bounds = () => {
        const n = native();
        return {
          min: Number(c.min ?? n?.min ?? 0), max: Number(c.max ?? n?.max ?? 1),
          step: c.step ?? n?.step ?? "any",
        };
      };
      const read = () => {
        if (c.get) return Number(get(c.get));
        const n = native();
        return n ? Number(String(n.value).replace(",", ".")) : NaN;
      };
      const paint = (v) => {
        const { min, max } = bounds();
        input.style.setProperty("--p", `${((v - min) / (max - min || 1)) * 100}%`);
        out.textContent = c.format ? c.format(v) : fmtNum(v);
      };
      input.addEventListener("pointerdown", () => { dragging = true; });
      input.addEventListener("pointerup", () => { dragging = false; });
      input.addEventListener("input", () => {
        const v = Number(input.value);
        paint(v);
        if (c.set) c.set(v, ctx);
        else { const n = native(); if (n) setNative(n, v, ["input"]); }
      });
      input.addEventListener("change", () => {
        dragging = false;
        const n = native();
        if (!c.set && n) setNative(n, Number(input.value), c.lil ? ["input", "change", "blur"] : ["change"]);
      });
      updaters.push(() => {
        const { min, max, step } = bounds();
        input.min = min; input.max = max; input.step = step;
        const v = read();
        const ok = Number.isFinite(v);
        wrap.classList.toggle("off", !ok || (native()?.disabled ?? false));
        if (ok && !dragging) { input.value = v; paint(v); }
      });
    } else if (c.type === "toggle") {
      wrap.innerHTML = `<button type="button" class="ctl-toggle" role="switch"><span>${esc(c.label)}</span><span class="sw"></span></button>`;
      const btn = wrap.querySelector("button");
      const isOn = () => (c.get ? Boolean(get(c.get)) : Boolean(get(c.el)?.checked));
      btn.addEventListener("click", () => {
        if (c.set) c.set(!isOn(), ctx);
        else get(c.el)?.click();
        setTimeout(() => btn.setAttribute("aria-checked", String(isOn())), 30);
      });
      updaters.push(() => {
        const n = c.el ? get(c.el) : true;
        wrap.classList.toggle("off", !n || n.disabled === true);
        btn.setAttribute("aria-checked", String(isOn()));
      });
    } else if (c.type === "select") {
      wrap.innerHTML = `<div class="ctl-row"><span>${esc(c.label)}</span></div><select></select>`;
      const sel = wrap.querySelector("select");
      sel.addEventListener("change", () => { const n = get(c.el); if (n) setNative(n, sel.value); });
      updaters.push(() => {
        const n = get(c.el);
        wrap.classList.toggle("off", !n || n.disabled);
        if (!n) return;
        const sig = [...n.options].map((o) => o.value + o.text).join("|");
        if (sel.dataset.sig !== sig) {
          sel.innerHTML = [...n.options].map((o) => `<option value="${esc(o.value)}">${esc(o.text)}</option>`).join("");
          sel.dataset.sig = sig;
        }
        if (document.activeElement !== sel) sel.value = n.value;
      });
    } else if (c.type === "buttons" || c.type === "button" || c.type === "chips") {
      const items = c.type === "button" ? [c] : c.items;
      wrap.innerHTML = `${c.label && c.type !== "button" ? `<div class="ctl-row"><span>${esc(c.label)}</span></div>` : ""}<div class="ctl-buttons ${c.type === "chips" ? "ctl-chips" : ""}"></div>`;
      const box = wrap.querySelector(".ctl-buttons");
      for (const item of items) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = `ctl-btn${item.primary ? " primary" : ""}`;
        b.textContent = item.label;
        b.addEventListener("click", () => {
          if (item.run) item.run(ctx);
          else get(item.el)?.click();
        });
        box.append(b);
        updaters.push(() => {
          const n = item.el ? get(item.el) : null;
          b.disabled = item.el ? !n || n.disabled : false;
          if (item.active) b.classList.toggle("active", Boolean(get(item.active)));
          if (item.text) { const t = get(item.text); if (t) b.textContent = t; }
        });
      }
    } else if (c.type === "stats") {
      wrap.innerHTML = `<div class="ctl-stats">${c.items.map((i) => `<div class="ctl-stat"><span>${esc(i.label)}</span><b>–</b></div>`).join("")}</div>`;
      const cells = [...wrap.querySelectorAll("b")];
      updaters.push(() => c.items.forEach((i, k) => {
        const v = i.get ? get(i.get) : get(i.el)?.textContent?.trim();
        cells[k].textContent = v ?? "–";
      }));
    } else if (c.type === "meter") {
      wrap.innerHTML = `<div class="ctl-row"><span>${esc(c.label)}</span><output></output></div><div class="ctl-meter"><i></i></div>`;
      const bar = wrap.querySelector("i");
      const out = wrap.querySelector("output");
      updaters.push(() => {
        const v = Number(get(c.get)) || 0;
        bar.style.width = `${Math.max(0, Math.min(1, v)) * 100}%`;
        if (c.text) out.textContent = get(c.text) ?? "";
        else if (c.format) out.textContent = c.format(v);
      });
    }
    root.append(wrap);
  }
  return updaters;
}
function fmtNum(v) {
  if (!Number.isFinite(v)) return "–";
  const a = Math.abs(v);
  return v.toLocaleString("de-DE", { maximumFractionDigits: a >= 100 ? 0 : a >= 10 ? 1 : a >= 1 ? 2 : 3 });
}

/* ---------- Blättern, Tasten, Leisten ---------- */
function step(dir) {
  if (!state.current) {
    if (dir > 0 && state.sequence[0]) go(`#/p/${state.sequence[0].id}`);
    return;
  }
  const list = listFor(state.current);
  const i = list.indexOf(state.current) + dir;
  if (i < 0 || i >= list.length) { toast(dir > 0 ? "Ende erreicht" : "Anfang erreicht"); return; }
  go(`#/p/${list[i].id}`);
}

$("#tb-home").onclick = $("#mini-home").onclick = () => go("#/");
$("#tb-prev").onclick = $("#mini-prev").onclick = () => step(-1);
$("#tb-next").onclick = $("#mini-next").onclick = () => step(1);
$("#panel-collapse").onclick = () => $("#panel").classList.toggle("collapsed");
$("#mini-info").onclick = () => ($("#mini-card").classList.contains("hidden") ? showMiniCard(0) : hideMiniCard());
$("#panel-views").addEventListener("click", (e) => {
  const b = e.target.closest("[data-view]");
  if (!b || !state.current) return;
  go(`#/p/${state.current.id}/${b.dataset.view}`);
});

let miniTimer;
function showMiniCard(ms) {
  clearTimeout(miniTimer);
  $("#mini-card").classList.remove("hidden");
  if (ms) miniTimer = setTimeout(hideMiniCard, ms);
}
function hideMiniCard() { clearTimeout(miniTimer); $("#mini-card").classList.add("hidden"); }

function onKey(e) {
  const alt = e.altKey && !e.metaKey && !e.ctrlKey;
  const onHome = !state.current;
  let handled = true;
  if (e.code === "PageDown" || (alt && e.code === "ArrowRight")) step(1);
  else if (e.code === "PageUp" || (alt && e.code === "ArrowLeft")) step(-1);
  else if (alt && e.code === "KeyO") setMode(state.mode === "bm" ? "original" : "bm");
  else if (alt && e.code === "KeyH") go("#/");
  else if (alt && e.code === "KeyS") { setMute(!readMute()); toast(readMute() ? "Ton aus" : "Ton an"); }
  else if (alt && e.code === "KeyI") {
    if (state.mode === "bm") $("#panel").classList.toggle("collapsed");
    else $("#mini-card").classList.contains("hidden") ? showMiniCard(0) : hideMiniCard();
  } else if (alt && e.code === "KeyF") {
    document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
  } else handled = false;
  if (onHome && !handled) return;
  if (handled) { e.preventDefault(); e.stopImmediatePropagation(); }
}
window.addEventListener("keydown", onKey, true);

let idleTimer;
function wake() {
  document.body.classList.remove("idle");
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => document.body.classList.add("idle"), 3500);
}
window.addEventListener("mousemove", wake, { passive: true });

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1500);
}

export { setNative };

// Wortmarke oben erst zeigen, wenn der große Titel aus dem Bild ist
{
  const home = $("#home"), bar = $(".home-bar");
  const video = $(".hero-video");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Video nur laufen lassen, solange es zu sehen ist (spart Rechenzeit fürs Experiment)
  const play = (on) => { if (!video || still) return; on ? video.play().catch(() => {}) : video.pause(); };
  document.documentElement.style.setProperty("--bar-h", `${bar?.offsetHeight ?? 64}px`);
  const onScroll = () => {
    bar?.classList.toggle("at-top", home.scrollTop < innerHeight * 0.55);
    play(!home.hidden && home.scrollTop < innerHeight * 0.95);
  };
  home?.addEventListener("scroll", onScroll, { passive: true });
  if (home) new MutationObserver(onScroll).observe(home, { attributes: true, attributeFilter: ["hidden"] });
  onScroll();
}
