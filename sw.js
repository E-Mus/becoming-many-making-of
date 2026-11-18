const BASE = "/becoming-many-making-of";
const map = fetch(BASE + "/shared.json").then((r) => r.json()).catch(() => ({}));
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
const projectIn = (u) => { const m = u && new URL(u, location.origin).pathname.match(new RegExp("^" + BASE + "/p/([^/]+)/")); return m ? m[1] : null; };
async function resolve(id, rest) {
  if (rest === "config" || rest.startsWith("config?")) return BASE + "/config";
  const shared = (await map)[id] || {};
  const key = Object.keys(shared).sort((a, b) => b.length - a.length).find((k) => rest === k || rest.startsWith(k + "/"));
  return key ? BASE + "/" + shared[key] + rest.slice(key.length) : BASE + "/p/" + id + "/" + rest;
}
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  const path = url.pathname;
  const inBase = path === BASE || path.startsWith(BASE + "/");
  if (inBase && !path.startsWith(BASE + "/p/")) return; // Hub: unverändert
  e.respondWith((async () => {
    let id, rest;
    if (inBase) { const m = path.slice(BASE.length + 3).match(new RegExp("^([^/]+)/(.*)$")); if (!m) return fetch(e.request); [, id, rest] = m; }
    else {
      const m = path.match(new RegExp("^/p/([^/]+)/(.*)$"));
      if (m) [, id, rest] = m;
      else {
        id = projectIn(e.request.referrer);
        if (!id && e.clientId) { const c = await self.clients.get(e.clientId); id = projectIn(c && c.url); }
        rest = path.slice(1);
      }
      if (!id) return fetch(e.request);
    }
    const target = await resolve(id, rest);
    if (target === path) return fetch(e.request);
    return Response.redirect(target + url.search, 302);
  })());
});
