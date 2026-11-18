// Diese Fassung wurde über die Station (Conductor-Seite) gesteuert.
// Ohne Station spielt die Seite die Show einfach von vorn.
export default {
  hide: ".station-widget, #VRButton, .test-overlay { display: none !important; }",
  controls: () => [
    { type: "note", text: "Diese Fassung wurde über eine eigene Steuerseite (Station) bedient. Hier läuft die Show einfach von vorn ab. Einmal ins Bild klicken, damit Ton und Zeit starten. <kbd>W A S D</kbd> fliegen, Maus schaut." },
  ],
};
