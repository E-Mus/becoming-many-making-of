(() => {
  if (!("serviceWorker" in navigator)) return;
  const BASE = "/becoming-many-making-of";
  navigator.serviceWorker.register(BASE + "/sw.js", { scope: BASE + "/" }).catch(() => {});
  // Ein Stand, der ohne Service Worker geöffnet wurde: einmal neu laden, sobald er läuft
  if (location.pathname.startsWith(BASE + "/p/") && !navigator.serviceWorker.controller) {
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      const key = "bm-sw:" + location.pathname;
      try { if (sessionStorage.getItem(key)) return; sessionStorage.setItem(key, "1"); } catch {}
      location.reload();
    });
  }
})();
