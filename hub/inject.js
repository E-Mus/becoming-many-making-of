/* Wird vom Server als erstes Script in jede Projektseite eingefügt.
 *
 * Stumm-Schalter der Making-of-Seite. Statt den Audio-Kontext anzuhalten (das würde
 * bei der Show auch die Uhr anhalten, weil der Ton dort die Zeit vorgibt),
 * läuft alles weiter, was zum Lautsprecher geht, aber über einen Regler auf 0.
 *
 * Stumm ist eine Seite, wenn
 *   – localStorage "bm-showcase-mute" = "1" (Schalter auf der Seite), oder
 *   – die Adresse "bm-silent" enthält (Hintergrund der Präsentation: immer stumm).
 * Umschalten live über window.__bmSetMute(true|false).
 */
(() => {
  const KEY = "bm-showcase-mute";
  const forced = /[?&]bm-silent\b/.test(location.search) || /bm-silent/.test(window.name);
  let muted = forced;
  try { muted = forced || localStorage.getItem(KEY) === "1"; } catch {}

  const gains = new Set();
  const gainFor = (ctx) => {
    if (!ctx.__bmGain) {
      const g = ctx.createGain();
      g.gain.value = muted ? 0 : 1;
      origConnect.call(g, ctx.destination);
      ctx.__bmGain = g;
      gains.add(g);
    }
    return ctx.__bmGain;
  };

  const proto = window.AudioNode?.prototype;
  const origConnect = proto?.connect;
  const origDisconnect = proto?.disconnect;
  if (proto && origConnect) {
    // Alles, was direkt zum Lautsprecher will, geht über den Stumm-Regler
    proto.connect = function (target, ...rest) {
      if (window.AudioDestinationNode && target instanceof AudioDestinationNode && this !== target.context.__bmGain) {
        return origConnect.call(this, gainFor(target.context), ...rest);
      }
      return origConnect.call(this, target, ...rest);
    };
    proto.disconnect = function (target, ...rest) {
      if (window.AudioDestinationNode && target instanceof AudioDestinationNode && target.context.__bmGain) {
        return origDisconnect.call(this, target.context.__bmGain, ...rest);
      }
      return origDisconnect.apply(this, arguments);
    };
  }

  const play = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function () {
    if (muted) this.muted = true;
    return play.call(this);
  };

  // Audio freigeben (vom Hub nach einem Klick/Tastendruck aufgerufen). Viele Seiten,
  // z. B. die Show, lassen ihre Uhr erst laufen, wenn der Audio-Kontext läuft.
  window.__bmResume = () => {
    for (const g of gains) { try { if (!(window.OfflineAudioContext && g.context instanceof OfflineAudioContext)) g.context.resume()?.catch?.(() => {}); } catch {} }
  };

  window.__bmSetMute = (on) => {
    muted = forced || Boolean(on);
    for (const g of gains) { try { g.gain.value = muted ? 0 : 1; } catch {} }
    for (const m of document.querySelectorAll("audio, video")) m.muted = muted;
  };
})();
