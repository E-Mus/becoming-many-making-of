/* Becoming Many – Präsentation
 *
 * Die Zeitleiste ist der rote Faden. Im Hintergrund läuft die fertige
 * Experience im Autopiloten (ohne Ton, wechselt die Sinne). Jeder Schritt in
 * hub/praesentation.json zoomt die Zeitleiste auf eine Phase, hebt Stände
 * hervor und kann einen Stand live zeigen. Folien mit "media" zeigen Fotos und Videos
 * rechts; die Zeitleiste wird dann zum schmalen Band, Linien führen zum Ort jedes Bildes.
 *
 * Tasten: → / Leertaste / Bild ↓ weiter · ← / Bild ↑ zurück · Esc Live schließen
 *         1–9 Karte oder Bild groß
 *         F Vollbild · S Ton der Live-Ansichten · N Notizen-Fenster · H Making-of
 */

const SENSE = {
  duft: "var(--duft)", echo: "var(--echo)", bewegung: "var(--bewegung)", waerme: "var(--waerme)",
  magnet: "var(--magnet)", verbindung: "var(--verbindung)", klang: "var(--klang)", licht: "var(--licht)", welt: "var(--welt)",
};
const MONTHS = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const DAY = 864e5;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const t = (iso) => (iso.length > 10 ? new Date(iso) : new Date(`${iso}T12:00:00`)).getTime();
const fmt = (iso) => { const d = new Date(`${iso}T12:00:00`); return `${d.getDate()}. ${MONTHS[d.getMonth()].slice(0, 3)}`; };
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2);

const S = {
  projects: [], history: {}, script: { steps: [] },
  step: -1, labelIds: new Set(), domain: null, full: null, drawn: false, anim: 0,
  els: [], liveFrame: null, bgFrame: null, bgTimer: 0,
  media: [], marks: [], zoom: false, xf: null, g: null,
};

const [projects, hist, script] = await Promise.all([
  fetch("/becoming-many-making-of/api/projects.json").then((r) => r.json()),
  fetch("/becoming-many-making-of/hub/history.json").then((r) => r.json()),
  fetch("/becoming-many-making-of/hub/praesentation.json").then((r) => r.json()),
]);
S.projects = projects;
S.history = hist;
S.script = script;
const byId = new Map(projects.map((p) => [p.id, p]));

/* ================= Hintergrund ================= */
// Standard: das aufgenommene Autopilot-Video (scripts/video.ts) – sofort da, ohne Logo und
// Ladeanzeige. Mit "background": { "video": false } läuft stattdessen die Experience live.
function startBackground() {
  const bg = script.background ?? {};
  if (bg.video === false) return startAutopilot();
  const v = document.createElement("video");
  v.src = bg.video ?? "/becoming-many-making-of/hub/media/gameplay.mp4";
  v.poster = bg.poster ?? "/becoming-many-making-of/hub/media/gameplay.jpg";
  v.muted = true; v.loop = true; v.playsInline = true; v.preload = "auto";
  v.setAttribute("aria-hidden", "true");
  $("bg").append(v);
  S.bgFrame = v;
  S.bgReady = true;
}
/* Hintergrund zeigen oder verstecken; das Video hält an, solange es nicht zu sehen ist */
function setBg(on) {
  const el = S.bgFrame;
  if (!el) return;
  el.style.display = on ? "" : "none";
  if (el instanceof HTMLVideoElement) on ? el.play().catch(() => {}) : el.pause();
}

function startAutopilot() {
  const bg = script.background ?? {};
  const project = byId.get(bg.project ?? "web-release");
  if (!project) return;
  const isWeb = project.id === "web-release";
  // ?skip: der Web-Release überspringt seinen Lade-Vorspann (gleicher Weg wie „Zum Menü“)
  const path = bg.path ?? (isWeb ? "becoming-many/index.html?skip" : "index.html?language=de");

  // Der Web-Release liest seine Einstellungen beim Start aus dem Speicher:
  // Autopilot an, Deutsch, kein Vollbild, keine Untertitel. Danach wieder zurücksetzen.
  const KEY = "becoming-many-menu-settings";
  let previous = null;
  if (isWeb) {
    try {
      previous = localStorage.getItem(KEY);
      const base = previous ? JSON.parse(previous) : {};
      localStorage.setItem(KEY, JSON.stringify({ ...base, autopilot: true, language: "de", fullscreen: false, subtitles: false, control: "keys", controlChosen: true, device: "desktop" }));
    } catch {}
  }

  const f = document.createElement("iframe");
  f.name = "bm-silent";
  f.allow = "autoplay"; // darf nach dem Startklick Audio (= Show-Uhr) starten
  f.src = `/becoming-many-making-of/p/${project.id}/${path}${path.includes("?") ? "&" : "?"}bm-silent`;
  f.setAttribute("tabindex", "-1");
  f.addEventListener("load", () => {
    const win = f.contentWindow, doc = f.contentDocument;
    hookKeys(win, { all: true });
    const style = doc.createElement("style");
    // Nur die Welt zeigen: Menüs, Titel, Hinweise und Bedienelemente der Seite ausblenden
    style.textContent = `
      .bm-title, .screen, .app-fail, .app-intro, .app-gear, .app-autopilot, .app-camera, [data-subtitles], .app-subtitles,
      .legal, .app-legal, footer, [data-rehearsal], .xr-entry-button, #VRButton, body > div[style*='position: fixed'] { opacity: 0 !important; pointer-events: none !important; }
      * { cursor: none !important; }`;
    doc.head.append(style);
    if (isWeb) setTimeout(() => { try { previous === null ? localStorage.removeItem(KEY) : localStorage.setItem(KEY, previous); } catch {} }, 4000);
    S.bgReady = false;
    driveBackground(win, doc, isWeb, bg);
  });
  $("bg").append(f);
  S.bgFrame = f;
}

/** Führt die Seite bis in die Show (Web-Release: Laden → Menü → Desktop) und wechselt dann die Sinne. */
function driveBackground(win, doc, isWeb, bg) {
  // Sekunden in der Show, an denen die Sinne voll da sind (nach docs/experience.md)
  const senses = bg.senseSeconds ?? [95, 150, 185, 245, 295, 360, 420];
  const every = (bg.seconds ?? 7) * 1000;
  let i = 0;
  const jump = () => {
    try {
      if (isWeb) win.__air?.run?.show?.seekTo(senses[i % senses.length]);
      else {
        const names = bg.chapters ?? ["Scent", "Echo", "Motion", "Thermal", "Magnetic", "Finale"];
        [...doc.querySelectorAll("button")].find((b) => b.textContent.trim() === names[i % names.length])?.click();
      }
    } catch {}
    i++;
  };
  const startCycle = () => {
    S.bgReady = true;
    resumeAudio();
    jump();
    clearInterval(S.bgTimer);
    S.bgTimer = setInterval(jump, every);
  };
  if (!isWeb) { setTimeout(startCycle, 1200); return; }
  // Web-Release: durch Laden, Menü und Moduswahl klicken, bis die Show läuft
  const root = doc.documentElement;
  const poll = setInterval(() => {
    const screen = root.dataset.screen;
    const click = (sel) => doc.querySelector(sel)?.click();
    if (root.dataset.inShow !== undefined) { clearInterval(poll); setTimeout(startCycle, 1800); return; }
    if (screen === "loading" && (root.dataset.ready === "true" || root.dataset.loaded === "true")) {
      // Der Web-Release geht mit einem Klick irgendwo (pointerdown) weiter
      win.dispatchEvent(new win.PointerEvent("pointerdown", { bubbles: true }));
    }
    else if (screen === "menu") click("[data-action=start]");
    else if (screen === "modes") click("[data-mode=desktop]");
  }, 600);
}

/* Audio freigeben: Die Show-Uhr läuft erst, wenn der Audio-Kontext läuft. Geht nur nach
   einer Nutzer-Aktion in der Präsentation (Startklick oder erste Taste). */
function resumeAudio() {
  for (const f of [S.bgFrame, S.liveFrame]) { try { f?.contentWindow?.__bmResume?.(); } catch {} }
}

/* ================= Zeitleiste ================= */
const tl = $("tl");
const geo = () => {
  const H = tl.clientHeight, W = tl.clientWidth;
  const axisY = Math.round(H * 0.42);
  const bandY = axisY + 30, bandH = Math.max(46, Math.round(H * 0.13));
  return { W, H, axisY, expY: axisY - 34, bandY, bandH, stageY: bandY + Math.round(bandH * 0.64), msY: bandY + bandH - 7, stageLblY: bandY + bandH + 10, eventY: H - 30 };
};

function buildTimeline() {
  const versions = hist.versions ?? [];
  const all = [...projects.flatMap((p) => [p.date, p.since]), ...versions.flatMap((v) => [v.from, v.to])].filter(Boolean).sort();
  const start = new Date(`${all[0]}T12:00:00`); start.setDate(1);
  const end = new Date(`${all.at(-1)}T12:00:00`); end.setDate(end.getDate() + 12);
  S.full = [start.getTime() - 4 * DAY, end.getTime()];
  const add = (cls, html = "", data = {}) => {
    const el = document.createElement(data.tag ?? "div");
    el.className = cls;
    el.innerHTML = html;
    tl.append(el);
    const item = { el, ...data };
    S.els.push(item);
    return item;
  };

  add("lane", "Experimente", { kind: "fixed", y: "expTitle" });
  add("axis", "", { kind: "axis" });

  // Monate (große Striche) und Wochen (kleine Striche)
  for (const d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
    if (d.getDate() === 1) {
      add("tick", "", { kind: "tick", t: d.getTime() });
      add("tick-label", MONTHS[d.getMonth()], { kind: "ticklabel", t: d.getTime() });
    } else if (d.getDay() === 1) add("tick minor", "", { kind: "tick", t: d.getTime(), minor: true });
  }

  for (const v of versions) {
    add(`band v${v.id}`, `<span>V${v.id} <b>${esc(v.name)}</b></span>`, { kind: "band", t0: t(v.from), t1: t(v.to), version: v.id });
  }
  // Stände und Meilensteine eines Tages werden über diesen Tag verteilt (nach Release-Nummer),
  // damit sie beim Hineinzoomen nebeneinander liegen
  const stagesAll = projects.filter((p) => p.category !== "experimente");
  const dayItems = {};
  for (const p of stagesAll) (dayItems[p.date] ??= []).push({ key: `p:${p.id}`, sort: p.release ?? p.title });
  for (const m of hist.milestones ?? []) (dayItems[m.date] ??= []).push({ key: `m:${m.label}`, sort: m.label });
  const when = {};
  for (const [date, list] of Object.entries(dayItems)) {
    list.sort((a, b) => a.sort.localeCompare(b.sort, "de", { numeric: true }));
    list.forEach((it, i) => { when[it.key] = t(date) - 0.42 * DAY + ((i + 0.5) / list.length) * 0.84 * DAY; });
  }
  for (const m of hist.milestones ?? []) {
    const tm = when[`m:${m.label}`];
    add("ms", "", { kind: "ms", t: tm, label: m.label });
    add("lbl down ms-lbl", `${esc(m.label)}<small>${fmt(m.date)}</small>`, { kind: "mslbl", t: tm, label: m.label });
  }

  // Experimente: Punkte, bei nahen Daten übereinander gestapelt
  const exps = projects.filter((p) => p.category === "experimente").sort((a, b) => a.date.localeCompare(b.date));
  const levels = [];
  for (const p of exps) {
    let lv = 0;
    while (levels.some((o) => o.lv === lv && Math.abs(o.t - t(p.date)) < 3.2 * DAY)) lv++;
    levels.push({ lv, t: t(p.date) });
    add("dot", "", { kind: "dot", t: t(p.date), level: lv, id: p.id }).el.style.background = SENSE[p.senses?.[0]] ?? "var(--accent)";
    add("lbl up", `<b>${esc(p.title)}</b><small>${fmt(p.date)}</small>`, { kind: "dotlbl", t: t(p.date), level: lv, id: p.id });
  }

  // Stände der Versionen (Archiv + Finale) auf den Bändern
  const stages = projects.filter((p) => p.category !== "experimente").sort((a, b) => a.date.localeCompare(b.date) || (a.release ?? "").localeCompare(b.release ?? "", "de", { numeric: true }));
  for (const p of stages) {
    const tm = when[`p:${p.id}`];
    const final = p.category === "finale";
    add(`stage${final ? " final" : ""}`, "", { kind: "stage", t: tm, id: p.id });
    add("lbl down", `<b>${esc(final ? "Finale · Web" : p.release ?? p.title)}</b><small>${fmt(p.date)}</small>`, { kind: "stagelbl", t: tm, id: p.id });
  }

  // Ereignisse: Fahnen unten mit gestrichelter Linie bis zur Achse
  for (const ev of hist.events ?? []) {
    const a = t(ev.date), b = ev.to ? t(ev.to) : a;
    add("event-line", "", { kind: "evline", t: (a + b) / 2, label: ev.label });
    add("event", `<i></i>${esc(ev.label)} <small>${fmt(ev.date)}</small>`, { kind: "event", t: (a + b) / 2, label: ev.label });
  }
}

function layout(domain, { labels = true } = {}) {
  const g = geo();
  const [d0, d1] = domain;
  const span = d1 - d0;
  const x = (time) => ((time - d0) / span) * g.W;
  S.xf = x; S.g = g;
  const zoomed = span < 150 * DAY;
  const showMinor = span < 100 * DAY;
  const hl = S.highlight ?? new Set();

  for (const it of S.els) {
    const s = it.el.style;
    switch (it.kind) {
      case "fixed":
        s.left = "0px";
        s.top = `${it.y === "expTitle" ? 0 : g.bandY - 22}px`;
        break;
      case "axis": s.top = `${g.axisY - 1}px`; break;
      case "tick": case "ticklabel": {
        const px = x(it.t);
        const vis = px > -40 && px < g.W + 40 && (!it.minor || showMinor);
        s.display = vis ? "" : "none";
        s.left = `${px}px`;
        s.top = it.kind === "tick" ? `${g.axisY - (it.minor ? 3 : 7)}px` : `${g.axisY + 10}px`;
        break;
      }
      case "band": {
        const a = Math.max(x(it.t0), -30), b = Math.min(x(it.t1), g.W + 30);
        s.display = b > -20 && a < g.W + 20 ? "" : "none";
        s.left = `${a}px`; s.width = `${Math.max(b - a, 4)}px`;
        s.top = `${g.bandY}px`; s.height = `${g.bandH}px`;
        it.el.classList.toggle("dim", S.focusVersion != null && it.version !== S.focusVersion);
        break;
      }
      case "ms": {
        const px = x(it.t);
        s.display = px > -20 && px < g.W + 20 ? "" : "none";
        s.left = `${px}px`; s.top = `${g.msY}px`;
        it.el.title = it.label;
        break;
      }
      case "dot": case "stage": {
        const px = x(it.t);
        s.display = px > -30 && px < g.W + 30 ? "" : "none";
        s.left = `${px}px`;
        s.top = `${it.kind === "dot" ? g.expY - it.level * 21 : g.stageY}px`;
        it.el.classList.toggle("hl", hl.has(it.id));
        it.el.classList.toggle("faded", hl.size > 0 && !hl.has(it.id) && S.fade);
        it.el.dataset.open = it.id;
        break;
      }
      case "dotlbl": case "stagelbl": {
        const px = x(it.t);
        const inView = px > -10 && px < g.W - 60;
        s.display = inView ? "" : "none";
        s.left = `${px + (it.kind === "dotlbl" ? 6 : -2)}px`;
        s.top = `${it.kind === "dotlbl" ? g.expY - it.level * 21 - 12 : g.stageLblY}px`;
        // Experimente sind dicht gestapelt: nur die Karten des Schritts bekommen eine Beschriftung
        const show = labels && inView && (it.kind === "dotlbl" ? S.labelIds.has(it.id) : zoomed || hl.has(it.id));
        it.el.classList.toggle("show", show);
        it.el.classList.toggle("hl-l", hl.has(it.id));
        it.el.classList.toggle("faded", hl.size > 0 && !hl.has(it.id) && S.fade);
        break;
      }
      case "mslbl": {
        // Meilensteine (ohne eigene Ansicht) nur im Zoom und nur, wenn kein Stand am selben Ort steht
        const px = x(it.t);
        const inView = px > -10 && px < g.W - 60;
        s.display = inView ? "" : "none";
        s.left = `${px - 1}px`; s.top = `${g.stageLblY}px`;
        const crowded = S.els.some((o) => o.kind === "stage" && Math.abs(x(o.t) - px) < 14);
        it.el.classList.toggle("show", labels && inView && span < 80 * DAY && !crowded);
        break;
      }
      case "evline": {
        const px = x(it.t);
        s.display = px > -20 && px < g.W + 20 ? "" : "none";
        s.left = `${px}px`; s.top = `${g.axisY}px`; s.height = `${g.eventY - g.axisY}px`;
        break;
      }
      case "event": {
        const px = x(it.t);
        s.display = px > -20 && px < g.W + 20 ? "" : "none";
        s.left = `${px}px`; s.top = `${g.eventY}px`;
        const w = it.el.offsetWidth || 200;
        it.el.classList.toggle("flip", px + w > g.W);
        it.el.classList.toggle("hl-e", S.events?.has(it.label));
        break;
      }
    }
  }
  // Stand- und Meilenstein-Beschriftungen unter dem Band: zu dichte auslassen (hervorgehobene zuerst)
  if (labels) {
    const shown = S.els.filter((e) => (e.kind === "stagelbl" || e.kind === "mslbl") && e.el.classList.contains("show"))
      .map((e) => ({ e, px: x(e.t), pri: (hl.has(e.id) ? 2 : 0) + (e.kind === "stagelbl" ? 1 : 0) }))
      .sort((a, b) => b.pri - a.pri || a.px - b.px);
    const taken = [];
    for (const l of shown) {
      if (taken.some((px) => Math.abs(px - l.px) < 30)) l.e.el.classList.remove("show");
      else taken.push(l.px);
    }
  }
  // Nahe Experiment-Beschriftungen: die linke kippt nach links, damit sie sich nicht überlagern
  if (labels) {
    const ups = S.els.filter((e) => e.kind === "dotlbl" && e.el.classList.contains("show")).map((e) => ({ e, px: x(e.t) })).sort((a, b) => a.px - b.px);
    ups.forEach((u, i) => u.e.el.classList.toggle("left", i < ups.length - 1 && ups[i + 1].px - u.px < 90));
  }
  // Ereignisse, die sich überlappen würden, in eine zweite Reihe
  const compact = document.body.dataset.media !== undefined;
  const evs = S.els.filter((e) => e.kind === "event" && e.el.style.display !== "none").sort((a, b) => a.t - b.t);
  let lastRight = -Infinity, row = 0;
  for (const e of evs) {
    const px = x(e.t);
    const w = e.el.offsetWidth;
    const left = e.el.classList.contains("flip") ? px - w : px;
    row = left < lastRight + 12 ? row + 1 : 0;
    e.el.style.top = `${compact ? g.eventY + row * 22 : g.eventY - row * 40}px`;
    lastRight = left + w;
  }
  drawLeads();
}

function zoomTo(target, ms = 1500) {
  cancelAnimationFrame(S.anim);
  const from = S.domain ?? target;
  const t0 = performance.now();
  for (const it of S.els) if (it.kind === "dotlbl" || it.kind === "stagelbl" || it.kind === "mslbl") it.el.classList.remove("show");
  const frame = (now) => {
    const k = Math.min(1, (now - t0) / ms);
    const e = ease(k);
    S.domain = [from[0] + (target[0] - from[0]) * e, from[1] + (target[1] - from[1]) * e];
    layout(S.domain, { labels: k >= 1 });
    if (k < 1) S.anim = requestAnimationFrame(frame);
  };
  S.anim = requestAnimationFrame(frame);
}

function drawIn(target) {
  // Erste Einblendung: Achse zeichnet sich, Bänder wachsen, Punkte erscheinen nach Datum
  S.domain = target;
  tl.classList.remove("drawn");
  layout(target, { labels: false });
  const W = tl.clientWidth;
  for (const it of S.els) {
    const left = parseFloat(it.el.style.left) || 0;
    it.el.style.setProperty("--d", `${0.3 + (left / W) * 1.3}s`);
  }
  requestAnimationFrame(() => requestAnimationFrame(() => tl.classList.add("drawn")));
  setTimeout(() => layout(S.domain, { labels: true }), 1900);
}

const domainFor = (view) => (!view || view === "all" ? S.full : [t(view[0]), t(view[1])]);

/* ================= Schritte ================= */
const steps = script.steps ?? [];

function setCaption(step) {
  const has = step.title || step.kicker || step.text;
  const apply = () => {
    $("cap-kicker").textContent = step.kicker ?? "";
    $("cap-title").textContent = step.title ?? "";
    $("cap-text").innerHTML = esc(step.text ?? "");
    document.body.style.setProperty("--cap-c", step.color ?? "var(--accent)");
    $("caption").style.setProperty("--cap-c", step.color ?? "var(--accent)");
    renderCards(step.cards ?? []);
    document.body.classList.remove("swap");
  };
  if (document.body.dataset.caption !== undefined && has) {
    document.body.classList.add("swap");
    setTimeout(apply, 380);
  } else apply();
  toggleData("caption", Boolean(has) && !step.hero);
}

const cardRef = (c) => { const [id, view] = String(c).split("#"); return { id, view }; };
const cardsOf = (step) => (step.cards ?? []).map(cardRef).filter((c) => byId.has(c.id));

function renderCards(cards) {
  const box = $("cards");
  box.innerHTML = cards.map(cardRef).filter((c) => byId.has(c.id)).map(({ id, view }, i) => {
    const p = byId.get(id);
    const v = view ? p.views?.find((x) => x.id === view) : null;
    const title = v?.title ?? v?.label ?? (p.category === "finale" ? "Finale · Web-Release" : p.title);
    return `<button type="button" class="card" data-live="${p.id}" data-view="${esc(view ?? "")}" title="Im Vollbild zeigen (Taste ${i + 1})">
      <span class="num">${i + 1}</span>
      ${p.hasThumb ? `<img src="/becoming-many-making-of/thumb/${p.id}.jpg" alt="">` : ""}
      <span class="b"><small>${fmt(p.date)}${p.release && p.release !== "Web-Release" ? ` · ${esc(p.release)}` : ""}</small><b>${esc(title)}</b><span class="live-tag">Zeigen · Taste ${i + 1}</span></span>
    </button>`;
  }).join("");
  [...box.children].forEach((c, i) => setTimeout(() => c.classList.add("in"), 120 + i * 110));
}

/* ================= Fotos und Videos ================= */
const mediaBox = $("media"), leads = $("leads");
const mediaSrc = (s) => (s.startsWith("/") ? s : `/becoming-many-making-of/hub/media/fotos/${s}`);
const isVideo = (s) => /\.(mp4|webm|mov|m4v)$/i.test(s ?? "");
let mediaToken = 0;

/** Zeigt die Fotos und Videos einer Folie. Jedes Bild mit "date" (oder "at" für einen
 *  thematischen Ort) bekommt eine Raute auf der Zeitleiste und eine Linie dorthin. */
function renderMedia(list, offset = 0) {
  const token = ++mediaToken;
  for (const el of [...mediaBox.children]) { el.classList.remove("in"); el.classList.add("out"); setTimeout(() => el.remove(), 450); }
  for (const m of S.marks) m.el.remove();
  S.media = []; S.marks = [];
  leads.classList.remove("on");
  leads.replaceChildren();
  if (!list.length) return;

  const ready = list.map((item, i) => {
    const fig = document.createElement("figure");
    const m = { item, fig, aspect: item.aspect ?? 16 / 9, tech: item.type === "tech" };
    fig.className = `m${m.tech ? " tech" : ""}`;
    fig.style.setProperty("--d", `${0.12 + i * 0.14}s`);
    let done;
    if (m.tech) {
      m.aspect = item.aspect ?? 1.55;
      fig.innerHTML = techHTML(item);
      done = Promise.resolve();
    } else {
      m.src = mediaSrc(item.src);
      m.video = isVideo(item.src);
      const when = item.date ? `<small>${fmtDay(item.date)}</small>` : "";
      fig.innerHTML = `<span class="num">${offset + i + 1}</span>
        ${m.video
          ? `<video class="v" src="${m.src}" poster="${esc(item.poster ? mediaSrc(item.poster) : m.src.replace(/\.[a-z0-9]+$/i, ".jpg"))}" muted loop playsinline autoplay preload="auto"></video>`
          : `<img class="v" src="${m.src}" alt="${esc(item.caption ?? "")}">`}
        <figcaption>${esc(item.caption ?? "")}${when}</figcaption>`;
      fig.title = "Groß zeigen";
      fig.addEventListener("click", () => openZoom(S.media.indexOf(m)));
      const v = fig.querySelector(".v");
      done = new Promise((res) => {
        const set = (w, h) => { if (w && h && !item.aspect) m.aspect = w / h; res(); };
        if (m.video) {
          v.muted = true;
          v.addEventListener("loadedmetadata", () => { if (item.speed) v.playbackRate = v.defaultPlaybackRate = item.speed; if (item.start) v.currentTime = item.start; set(v.videoWidth, v.videoHeight); }, { once: true });
          // "start"/"end": nur einen Ausschnitt in Schleife zeigen
          if (item.start || item.end) v.addEventListener("timeupdate", () => {
            if (v.currentTime < (item.start ?? 0) - 0.5 || (item.end && v.currentTime >= item.end)) v.currentTime = item.start ?? 0;
          });
        } else v.addEventListener("load", () => set(v.naturalWidth, v.naturalHeight), { once: true });
        v.addEventListener("error", res, { once: true });
        setTimeout(res, 2500);
      });
    }
    const at = item.at ?? item.date;
    if (at) {
      const el = document.createElement("div");
      el.className = "mmark";
      tl.append(el);
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("pathLength", "1");
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("r", "2.5");
      leads.append(path, dot);
      S.marks.push({ el, t: t(at), m, path, dot });
    }
    S.media.push(m);
    mediaBox.append(fig);
    return done;
  });

  Promise.all(ready).then(() => {
    if (token !== mediaToken) return;
    fitMedia();
    requestAnimationFrame(() => {
      for (const m of S.media) m.fig.classList.add("in");
      // Während die Bilder einfliegen, die Linien mitziehen
      const t0 = performance.now();
      const follow = () => { drawLeads(); if (performance.now() - t0 < 1800 && token === mediaToken) requestAnimationFrame(follow); };
      follow();
      setTimeout(() => token === mediaToken && leads.classList.add("on"), 150);
    });
  });
}

const fmtDay = (iso) => { const d = new Date(`${iso.slice(0, 10)}T12:00:00`); return `${d.getDate()}. ${MONTHS[d.getMonth()]}`; };

function techHTML(item) {
  const nodes = item.nodes ?? [];
  return `<div class="tech-grid">${nodes.length > 1 ? `<div class="tech-line"></div>` : ""}${nodes.map((n, i) => {
    const src = n.src ? mediaSrc(n.src) : "";
    const vis = !src ? "" : isVideo(n.src)
      ? `<video src="${src}" poster="${src.replace(/\.[a-z0-9]+$/i, ".jpg")}" muted loop playsinline autoplay preload="auto"></video>`
      : `<img src="${src}" alt=""${n.contain ? ` class="contain"` : ""}>`;
    return `<div class="tnode"><div class="tv">${vis}</div><div><small>${String(i + 1).padStart(2, "0")} · ${esc(n.kicker ?? "")}</small><b>${esc(n.title ?? "")}</b><p>${esc(n.text ?? "")}</p></div></div>`;
  }).join("")}</div>`;
}

/** Ordnet die Bilder in einer oder zwei Reihen an, so groß wie die Fläche erlaubt (rechtsbündig). */
function fitMedia() {
  const items = S.media;
  if (!items.length) return;
  const W = mediaBox.clientWidth, H = mediaBox.clientHeight, gap = 20, cap = 30;
  const a = items.map((m) => m.aspect);
  const plan = (rows) => {
    let hs = rows.map((r) => (W - gap * (r.length - 1)) / r.reduce((s, i) => s + a[i], 0));
    const avail = H - rows.length * cap - gap * (rows.length - 1);
    const sum = hs.reduce((s, h) => s + h, 0);
    if (sum > avail) hs = hs.map((h) => (h * avail) / sum);
    const area = rows.reduce((s, r, k) => s + r.reduce((q, i) => q + a[i] * hs[k] ** 2, 0), 0);
    return { rows, hs, area };
  };
  const idx = items.map((_, i) => i);
  let best = plan([idx]);
  for (let k = 1; k < items.length; k++) {
    const p = plan([idx.slice(0, k), idx.slice(k)]);
    if (p.area > best.area * 1.25) best = p;
  }
  let y = 0;
  best.rows.forEach((r, k) => {
    const h = Math.floor(best.hs[k]);
    const rowW = r.reduce((s, i) => s + a[i] * h, 0) + gap * (r.length - 1);
    let x = W - rowW;
    for (const i of r) {
      const m = items[i], w = Math.floor(a[i] * h), st = m.fig.style;
      st.left = `${x}px`; st.top = `${y}px`; st.width = `${w}px`;
      if (m.tech) {
        st.height = `${h + cap}px`;
        const tile = (w * (1 - 3 * 0.045)) / 4;
        m.fig.style.setProperty("--vy", `${tile * 0.625}px`);
      } else m.fig.querySelector(".v").style.height = `${h}px`;
      x += w + gap;
    }
    y += h + cap + gap;
  });
  drawLeads();
}

/** Rauten auf der Zeitleiste und die Linien von den Bildern dorthin */
function drawLeads() {
  if (!S.marks.length || !S.xf) return;
  const g = S.g, tr = tl.getBoundingClientRect();
  const tlOn = document.body.dataset.tl !== undefined;
  for (const mk of S.marks) {
    const px = S.xf(mk.t);
    const vis = tlOn && px >= -6 && px <= g.W + 6;
    mk.el.style.display = vis ? "" : "none";
    mk.el.style.left = `${px}px`;
    mk.el.style.top = `${g.axisY}px`;
    const shown = vis && mk.m.fig.isConnected && !mk.m.fig.classList.contains("out");
    mk.path.style.display = mk.dot.style.display = shown ? "" : "none";
    if (!shown) continue;
    const r = mk.m.fig.getBoundingClientRect();
    const x1 = r.left + Math.min(r.width / 2, 60), y1 = r.bottom + 4;
    const x2 = tr.left + px, y2 = tr.top + g.axisY - 9;
    const my = y1 + (y2 - y1) * 0.55;
    mk.path.setAttribute("d", `M${x1.toFixed(1)},${y1.toFixed(1)} C${x1.toFixed(1)},${my.toFixed(1)} ${x2.toFixed(1)},${my.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`);
    mk.dot.setAttribute("cx", x1.toFixed(1)); mk.dot.setAttribute("cy", y1.toFixed(1));
  }
}

/* Ein Foto oder Video groß zeigen */
function openZoom(i) {
  const m = S.media[i];
  if (!m || m.tech) return;
  let el;
  if (m.video) {
    el = document.createElement("video");
    Object.assign(el, { src: m.src, muted: true, loop: true, playsInline: true, autoplay: true, controls: true });
    el.addEventListener("loadedmetadata", () => { if (m.item.speed) el.playbackRate = el.defaultPlaybackRate = m.item.speed; if (m.item.start) el.currentTime = m.item.start; }, { once: true });
    el.addEventListener("click", (e) => e.stopPropagation());
  } else {
    el = document.createElement("img");
    el.src = m.src;
  }
  $("zoom-box").replaceChildren(el);
  $("zoom-cap").innerHTML = `${esc(m.item.caption ?? "")}${m.item.date ? `<small>${fmtDay(m.item.date)}</small>` : ""}`;
  $("zoom").hidden = false;
  S.zoom = true;
}
function closeZoom() {
  if (!S.zoom) return;
  $("zoom").hidden = true;
  $("zoom-box").replaceChildren();
  S.zoom = false;
}
$("zoom").addEventListener("click", closeZoom);

function toggleData(key, on, value = "") {
  if (on) document.body.dataset[key] = value; else delete document.body.dataset[key];
}

function show(index) {
  index = Math.max(0, Math.min(steps.length - 1, index));
  const prev = S.step;
  S.step = index;
  const step = steps[index];
  window.history.replaceState(null, "", `#${index + 1}`);

  // Hintergrund: Die Experience läuft nur auf Folien mit background "full" (der ersten),
  // sonst weiße Fläche mit Partikelstaub. Ausgeblendet ruht der Hintergrund (keine Grafiklast).
  const bgOn = step.background === "full";
  document.body.dataset.bg = bgOn ? "full" : "white";
  if (!S.liveFrame) setBg(bgOn);

  // Großer Titel
  toggleData("hero", Boolean(step.hero));
  if (step.hero) {
    $("hero-kicker").textContent = step.hero.kicker ?? "";
    $("hero-title").textContent = step.hero.title ?? "Becoming Many";
    $("hero-sub").textContent = step.hero.subtitle ?? "";
  }

  // Bildunterschrift + Karten, Fotos und Videos
  closeZoom();
  toggleData("media", Boolean(step.media?.length));
  setCaption(step);
  renderMedia(step.media ?? [], cardsOf(step).length);
  preloadNext(index);

  // Hervorhebungen
  S.highlight = new Set(step.highlight ?? []);
  S.labelIds = new Set([...cardsOf(step).map((c) => c.id), ...(step.labels ?? [])]);
  S.events = new Set(step.events ?? []);
  S.fade = step.fade !== false;
  S.focusVersion = step.version ?? null;

  // Zeitleiste
  const tlOn = Boolean(step.view);
  const wasOn = document.body.dataset.tl !== undefined;
  toggleData("tl", tlOn);
  if (tlOn) {
    const target = domainFor(step.view);
    if (!S.drawn) { S.drawn = true; drawIn(target); }
    else if (!wasOn) { S.domain = target; layout(target); }
    else zoomTo(target);
  }

  // Abspann
  toggleData("credits", Boolean(step.credits));
  if (step.credits) renderCredits();

  // Live
  if (step.live) openLive(step.live.id, step.live.view, { fromStep: true });
  else closeLive();

  $("progress").firstElementChild.style.width = `${((index + 1) / steps.length) * 100}%`;
  announce();
  return prev;
}

/* Bilder der nächsten Folie schon laden, damit sie sofort da sind */
function preloadNext(index) {
  for (const item of steps[index + 1]?.media ?? []) {
    const list = item.type === "tech" ? (item.nodes ?? []).map((n) => n.src).filter(Boolean) : [item.src];
    for (const s of list) new Image().src = isVideo(s) ? mediaSrc(s).replace(/\.[a-z0-9]+$/i, ".jpg") : mediaSrc(s);
  }
}

function renderCredits() {
  const team = hist.team ?? {};
  const group = (title, list) => list?.length ? `<div><h4>${title}</h4>${list.map((m) => `<p><b>${esc(m.name)}</b><span>${esc(m.role ?? "")}</span></p>`).join("")}</div>` : "";
  $("credits").innerHTML = group("Projekt", team.project) + group("Betreuung", team.supervision) + group("Futurium", team.partners);
}

/* ================= Live ================= */
function openLive(id, viewId, { fromStep = false } = {}) {
  const p = byId.get(id);
  if (!p) return;
  const view = p.views?.find((v) => v.id === viewId) ?? p.views?.[0] ?? { path: "index.html" };
  if (S.liveFrame?.dataset.key === `${id}/${view.id}`) { $("live").hidden = false; return; }
  closeLive();
  $("live").hidden = false; // erst sichtbar machen, sonst misst die Seite beim Start eine Fenstergröße von 0
  const f = document.createElement("iframe");
  f.dataset.key = `${id}/${view.id}`;
  f.allow = "autoplay; fullscreen; xr-spatial-tracking; gyroscope; accelerometer";
  f.src = `/becoming-many-making-of/p/${p.id}/${view.path}`;
  f.addEventListener("load", () => { hookKeys(f.contentWindow); f.focus(); });
  $("live-frame").replaceChildren(f);
  S.liveFrame = f;
  S.liveFromStep = fromStep;
  $("live-dot").style.background = SENSE[p.senses?.[0]] ?? "var(--accent)";
  $("live-title").textContent = p.category === "finale" ? "Becoming Many · Web-Release" : p.title;
  $("live-meta").textContent = `${fmt(p.date)}${p.version ? ` · Version ${p.version}` : ""}${p.release && p.release !== "Web-Release" ? ` · ${p.release}` : ""}`;
  $("live").hidden = false;
  setBg(false); // Hintergrund pausieren, Grafikkarte frei
}
function closeLive() {
  if (!S.liveFrame) return;
  $("live-frame").replaceChildren();
  S.liveFrame = null;
  $("live").hidden = true;
  if (document.body.dataset.bg === "full") setBg(true);
}
$("live-close").onclick = () => (S.liveFromStep ? show(S.step + 1) : closeLive());
// Nach dem Schließen einer Vorschau bleibt die Präsentation beim selben Schritt
document.addEventListener("click", (e) => {
  const c = e.target.closest("[data-live]");
  if (c) openLive(c.dataset.live, c.dataset.view || undefined);
  const d = e.target.closest("#tl [data-open]");
  if (d) openLive(d.dataset.open);
});

/* ================= Steuerung ================= */
function next() { if (S.zoom) closeZoom(); else if (S.liveFrame && !S.liveFromStep) closeLive(); else if (S.step < steps.length - 1) show(S.step + 1); }
function prev() { if (S.zoom) closeZoom(); else if (S.liveFrame && !S.liveFromStep) closeLive(); else if (S.step > 0) show(S.step - 1); }

function onKey(e) {
  if (e.metaKey || e.ctrlKey) return;
  const k = e.code;
  let handled = true;
  if (k === "ArrowRight" || k === "PageDown" || (k === "Space" && !S.liveFrame)) next();
  else if (k === "ArrowLeft" || k === "PageUp") prev();
  else if (k === "Escape") { if (S.zoom) closeZoom(); else if (S.liveFrame) (S.liveFromStep ? next() : closeLive()); else handled = false; }
  else if (/^Digit[1-9]$/.test(k) && !S.liveFrame) {
    // Taste 1–9: erst die Vorschau-Karten (live), dann die Fotos und Videos (groß)
    const n = Number(k.slice(5)) - 1;
    const cards = $("cards").querySelectorAll(".card");
    closeZoom();
    if (cards[n]) openLive(cards[n].dataset.live, cards[n].dataset.view || undefined);
    else if (S.media[n - cards.length] && !S.media[n - cards.length].tech) openZoom(n - cards.length);
    else handled = false;
  }
  else if (k === "KeyF" && !S.liveFrame) { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.(); }
  else if (k === "KeyS") toggleMute();
  else if (k === "KeyN" && !S.liveFrame) window.open("/becoming-many-making-of/hub/presenter.html", "bm-presenter");
  else if (k === "KeyH" && !S.liveFrame) location.href = "/becoming-many-making-of/";
  else handled = false;
  if (handled) { e.preventDefault(); e.stopImmediatePropagation(); }
}
function hookKeys(win, { all = false } = {}) {
  // Live-Ansichten: nur Bild ↑/↓ und Esc (Pfeile gehören dem Fliegen).
  // Hintergrund (all): alle Tasten, denn er ist nicht zum Bedienen da.
  try {
    win.addEventListener("keydown", (e) => {
      if (all || ["PageDown", "PageUp", "Escape"].includes(e.code)) onKey(e);
    }, true);
    win.addEventListener("mousemove", wake, { passive: true });
  } catch {}
}
window.addEventListener("keydown", onKey, true);

function toggleMute() {
  let on = false;
  try { on = localStorage.getItem("bm-showcase-mute") !== "1"; localStorage.setItem("bm-showcase-mute", on ? "1" : "0"); } catch {}
  try { S.liveFrame?.contentWindow.__bmSetMute?.(on); } catch {}
  toast(on ? "Live-Ton aus" : "Live-Ton an");
}

let toastTimer;
function toast(msg) {
  let el = $("toast");
  if (!el) { el = document.createElement("div"); el.id = "toast"; document.body.append(el); }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 1400);
}

let idle;
function wake() {
  document.body.classList.remove("idle");
  document.body.classList.add("show-hint");
  clearTimeout(idle);
  idle = setTimeout(() => document.body.classList.add("idle") || document.body.classList.remove("show-hint"), 2500);
}
window.addEventListener("mousemove", wake, { passive: true });
window.addEventListener("resize", () => { fitMedia(); if (S.domain) layout(S.domain); });
// Die Zeitleiste ändert ihre Höhe (schmal bei Folien mit Bildern): danach neu anordnen
tl.addEventListener("transitionend", (e) => { if (e.target === tl && e.propertyName === "height" && S.domain) layout(S.domain); });
new ResizeObserver(() => fitMedia()).observe(mediaBox);

/* ================= Notizen-Fenster ================= */
const channel = new BroadcastChannel("bm-tour");
function announce() {
  const step = steps[S.step];
  channel.postMessage({
    type: "stop", index: S.step, total: steps.length,
    label: label(step), notes: step.notes ?? "", next: steps[S.step + 1] ? label(steps[S.step + 1]) : null,
    list: steps.map((s) => ({ label: label(s), minutes: s.minutes ?? 1, live: Boolean(s.live) })),
    title: script.title,
  });
}
function label(s) { return s.label ?? s.title ?? s.hero?.title ?? s.kicker ?? "Station"; }
channel.addEventListener("message", (e) => {
  if (e.data?.cmd === "step") (e.data.dir > 0 ? next() : prev());
  if (e.data?.cmd === "goto") show(e.data.index);
  if (e.data?.cmd === "hello") announce();
});

/* ================= Startklick ================= */
// Ein Klick oder Tastendruck zu Beginn: Vollbild und Audio-Freigabe (damit die Show-Uhr
// im Hintergrund läuft). Der Ton bleibt stumm.
function armStart() {
  const gate = $("gate");
  const go = (e) => {
    if (e?.type === "keydown" && ["F5", "MetaLeft", "MetaRight"].includes(e.code)) return;
    gate.classList.add("gone");
    document.documentElement.requestFullscreen?.().catch(() => {});
    resumeAudio();
    removeEventListener("pointerdown", go, true);
    removeEventListener("keydown", go, true);
    if (e) { e.preventDefault?.(); e.stopImmediatePropagation?.(); }
  };
  addEventListener("pointerdown", go, true);
  addEventListener("keydown", go, true);
  // Jede spätere Aktion gibt Audio ebenfalls frei (falls die Seite erst später lädt)
  addEventListener("pointerdown", resumeAudio, true);
  addEventListener("keydown", resumeAudio, true);
}

/* ================= Start ================= */
armStart();
import("/becoming-many-making-of/hub/air.js").then(({ mountAir }) => mountAir($("air"), { density: 0.8, speed: 0.8 }));
buildTimeline();
startBackground();
show(Math.max(0, (Number(location.hash.slice(1)) || 1) - 1));
wake();
