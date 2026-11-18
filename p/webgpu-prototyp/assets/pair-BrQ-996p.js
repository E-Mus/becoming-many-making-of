import"./modulepreload-polyfill-B5Qt9EMX.js";const U=115200,O="icaros-station-a-m5",m="becoming-many.pair.wifi",T=200,I=document.querySelector("#pair");if(!I)throw new Error("#pair mount point not found");I.innerHTML=te();const o=e=>{const t=I.querySelector(`[data-pair="${e}"]`);if(!t)throw new Error(`pair: missing node "${e}"`);return t},s={host:o("host"),ssid:o("ssid"),password:o("password"),serverUrl:o("serverUrl"),deviceId:o("deviceId")},u={connect:o("connect"),configure:o("configure"),diagnose:o("diagnose"),reboot:o("reboot")},E=o("status"),L=o("log"),b=o("level"),_=o("levelDot"),N=o("levelState"),H=o("firmware");let d=null,g=null,$=null;const v=[];let y=0;navigator.serial===void 0?(a("Dieser Browser kann kein Web Serial. Chrome oder Edge am Rechner öffnen — im Headset funktioniert die Controller-Einrichtung nicht.","error"),u.connect.disabled=!0):a("Bereit. Controller per USB anschließen und verbinden.","idle");s.deviceId.value=O;R();j();for(const e of[s.ssid,s.password])e.addEventListener("change",x);o("forget").addEventListener("click",M);function R(){let e=null;try{e=window.localStorage.getItem(m)}catch{return}if(e===null)return;let t;try{t=JSON.parse(e)}catch{return}s.ssid.value=c(t,"ssid")??"",s.password.value=c(t,"password")??"",s.ssid.value!==""&&h(`· WLAN „${s.ssid.value}“ aus dem Browser-Speicher übernommen.`)}function x(){const e=s.ssid.value.trim(),t=s.password.value;try{if(e===""&&t===""){window.localStorage.removeItem(m);return}window.localStorage.setItem(m,JSON.stringify({ssid:e,password:t}))}catch{}}function M(){s.ssid.value="",s.password.value="";try{window.localStorage.removeItem(m)}catch{}a("WLAN-Zugangsdaten aus diesem Browser gelöscht.","idle")}let f=[],D=5184,W="<token>";async function j(){try{const e=await fetch("/api/m5/token",{cache:"no-store"});if(!e.ok)throw new Error(String(e.status));const t=await e.json();W=c(t,"token")??"<token>",D=C(t,"devicePort")??5184,f=z(t)}catch{h("! Bridge nicht erreichbar — Pairing-Token bitte von Hand eintragen.")}G()}function z(e){const t=typeof e=="object"&&e!==null?e.hosts:null,n=[];for(const i of Array.isArray(t)?t:[]){const l=c(i,"address");if(l===null)continue;const p=c(i,"iface")??"?",k=typeof i=="object"&&i!==null&&i.physical===!0;n.push({address:l,label:k?`${l}  (${p})`:`${l}  (${p} — virtuell)`,physical:k})}const r=window.location.hostname;return r!==""&&!n.some(i=>i.address===r)&&n.push({address:r,label:`${r}  (diese Seite)`,physical:!1}),n}function G(){s.host.innerHTML="",f.length===0&&(f=[{address:window.location.hostname,label:window.location.hostname,physical:!0}]);for(const e of f){const t=document.createElement("option");t.value=e.address,t.textContent=e.label,s.host.append(t)}A(f[0]?.address??window.location.hostname),f.filter(e=>e.physical).length>1&&h("· Mehrere LAN-Adressen — die des WLANs wählen, in dem auch der Controller hängt.")}function A(e){s.host.value=e,s.serverUrl.value=`ws://${e}:${D}/ws/device?pairing=${W}`}s.host.addEventListener("change",()=>A(s.host.value));u.connect.addEventListener("click",()=>{d===null?K():V()});async function K(){const e=navigator.serial;if(e===void 0)return;try{d=await e.requestPort(),await d.open({baudRate:U})}catch(n){d=null,a(`Verbindung fehlgeschlagen: ${F(n)}`,"error");return}const t=d.writable;g=t?t.getWriter():null,B(!0),a("Verbunden. Der Controller meldet sich gleich mit Status-Frames.","ok"),$=J(),await S({type:"diagnose"})}async function V(){const e=d;d=null;try{await g?.close()}catch{}g=null,await $?.catch(()=>{}),$=null,await e?.close().catch(()=>{}),B(!1),a("Getrennt.","idle")}async function J(){let e="";const t=new TextDecoder;for(;d?.readable;){const n=d.readable.getReader();try{for(;;){const{value:r,done:i}=await n.read();if(i)return;e+=t.decode(r,{stream:!0});let l=e.indexOf(`
`);for(;l>=0;)q(e.slice(0,l).trim()),e=e.slice(l+1),l=e.indexOf(`
`);e.length>4096&&(e="")}}catch(r){a(`Verbindung verloren: ${F(r)}`,"error");return}finally{n.releaseLock()}}}async function S(e){if(g===null){a("Kein Controller verbunden.","error");return}const t=`${JSON.stringify(e)}
`;await g.write(new TextEncoder().encode(t)),h(`→ ${P(t.trim())}`)}function q(e){if(e.length===0)return;let t;try{t=JSON.parse(e)}catch{h(`← ${e}`);return}if(typeof t!="object"||t===null)return;const n=t,r=c(n,"type");if(r==="orientation"){Q(C(n,"pitch")??0,C(n,"roll")??0);return}h(`← ${P(e)}`);const i=c(n,"firmwareVersion");if(i!==null&&(H.textContent=i),r==="configureResult"){const l=n.ok===!0,p=c(n,"message")??"";a(l?`Gespeichert: ${p}`:`Fehler: ${p}`,l?"ok":"error");return}r==="diagnoseResult"&&Z(n)}function Z(e){const t=e.webSocketConnected===!0,n=e.tcpProbeOk===!0,r=c(e,"localIp")??"",i=c(e,"wsHost")??"",l=c(e,"lastWebSocketError")??"";if(t){a(`Controller ist mit der Bridge verbunden (IP ${r}).`,"ok");return}if(r===""){a("Controller hängt noch nicht im WLAN — SSID und Passwort prüfen.","error");return}if(!n){const w=X(r);if(w!==null&&w!==i){A(w),a(`WLAN ok (IP ${r}), aber ${i===""?"die Bridge":i} ist aus diesem Netz nicht erreichbar. ${w} liegt im selben Netz wie der Controller und ist jetzt eingetragen — noch einmal „Auf den Controller schreiben“.`,"error");return}a(`WLAN ok (IP ${r}), aber die Bridge ist nicht erreichbar. Läuft der Dev-Server auf diesem Rechner, und lässt die Firewall Port 5184 durch?`,"error");return}const p=l===""?"":`: ${l}`;a(`WLAN und Port ok (IP ${r}), aber kein WebSocket${p}. Meist ein falscher Pairing-Token.`,"error")}function X(e){let t=null,n=1;for(const r of f){const i=Y(r.address,e);i>n&&(t=r.address,n=i)}return t}function Y(e,t){const n=e.split("."),r=t.split(".");if(n.length!==4||r.length!==4)return 0;let i=0;for(;i<4&&n[i]===r[i];)i+=1;return i}u.configure.addEventListener("click",()=>{const e=s.ssid.value.trim(),t=s.serverUrl.value.trim(),n=s.deviceId.value.trim();if(e===""||t===""||n===""){a("SSID, Bridge-URL und Geräte-ID dürfen nicht leer sein.","error");return}if(!t.startsWith("ws://")){a("Die Bridge-URL muss mit ws:// beginnen — die Firmware kann kein wss://.","error");return}x(),S({type:"configure",ssid:e,password:s.password.value,serverUrl:t,deviceId:n})});u.diagnose.addEventListener("click",()=>void S({type:"diagnose"}));u.reboot.addEventListener("click",()=>void S({type:"reboot"}));function B(e){u.connect.textContent=e?"Trennen":"Controller verbinden";for(const t of[u.configure,u.diagnose,u.reboot])t.disabled=!e;e||(_.style.left="50%",_.style.top="50%",y=0,b.dataset.stale="false",N.textContent="Nicht verbunden.")}function a(e,t){E.textContent=e,E.dataset.kind=t}function Q(e,t){const n=Math.max(-1,Math.min(1,t/45)),r=Math.max(-1,Math.min(1,e/45));_.style.left=`${50+n*45}%`,_.style.top=`${50-r*45}%`,b.title=`pitch ${e.toFixed(1)}° · roll ${t.toFixed(1)}°`,y=Date.now(),b.dataset.stale="false",N.textContent=`pitch ${e.toFixed(1)}° · roll ${t.toFixed(1)}°`}const ee=1e3;setInterval(()=>{d===null||b.dataset.stale==="true"||Date.now()-y<ee||(b.dataset.stale="true",N.textContent=y===0?"Noch keine Lage-Frames — der Controller sendet nichts über USB.":"Keine Lage-Frames mehr — der Controller sendet nichts über USB.")},500);function h(e){v.push(e),v.length>T&&v.shift(),L.textContent=v.join(`
`),L.scrollTop=L.scrollHeight}function P(e){return e.replace(/"password":"[^"]*"/g,'"password":"…"').replace(/pairing=[^"&\s]*/g,"pairing=…")}function F(e){return e instanceof Error?e.message:String(e)}function c(e,t){if(typeof e!="object"||e===null)return null;const n=e[t];return typeof n=="string"?n:null}function C(e,t){if(typeof e!="object"||e===null)return null;const n=e[t];return typeof n=="number"&&Number.isFinite(n)?n:null}function te(){return`
  <header class="pair__head">
    <h1>Controller einrichten</h1>
    <p class="pair__lede">
      Den M5 per USB anschließen, WLAN und Bridge-Adresse schreiben, Kabel wieder abziehen.
      Danach meldet sich der Controller von selbst bei dieser Station.
    </p>
    <a class="pair__back" href="/">← zur Experience</a>
  </header>

  <section class="pair__card">
    <div class="pair__row">
      <button type="button" class="pair__button pair__button--primary" data-pair="connect">
        Controller verbinden
      </button>
      <span class="pair__meta">Firmware: <b data-pair="firmware">–</b></span>
    </div>
    <p class="pair__status" data-pair="status" data-kind="idle"></p>
  </section>

  <section class="pair__card">
    <h2>Konfiguration</h2>
    <label class="pair__field">
      <span>WLAN-SSID</span>
      <input type="text" data-pair="ssid" autocomplete="off" spellcheck="false" />
    </label>
    <label class="pair__field">
      <span>WLAN-Passwort</span>
      <input type="password" data-pair="password" autocomplete="off" />
    </label>
    <p class="pair__hint">
      SSID und Passwort bleiben in diesem Browser gespeichert, damit der nächste Controller
      ohne Abtippen läuft — im Klartext, also nur auf dem Rechner am Stand.
      <button type="button" class="pair__link" data-pair="forget">Zugangsdaten vergessen</button>
    </p>
    <label class="pair__field">
      <span>Adresse dieser Station <i>(die im WLAN des Controllers)</i></span>
      <select data-pair="host"></select>
    </label>
    <label class="pair__field">
      <span>Bridge-URL <i>(muss ws:// sein — die Firmware kann kein wss://)</i></span>
      <input type="text" data-pair="serverUrl" autocomplete="off" spellcheck="false" />
    </label>
    <label class="pair__field">
      <span>Geräte-ID</span>
      <input type="text" data-pair="deviceId" autocomplete="off" spellcheck="false" />
    </label>
    <div class="pair__row">
      <button type="button" class="pair__button pair__button--primary" data-pair="configure" disabled>
        Auf den Controller schreiben
      </button>
      <button type="button" class="pair__button" data-pair="diagnose" disabled>Diagnose</button>
      <button type="button" class="pair__button" data-pair="reboot" disabled>Neustart</button>
    </div>
  </section>

  <section class="pair__card">
    <h2>Lage</h2>
    <p class="pair__hint">
      Live aus den Orientierungs-Frames des Controllers. Der Punkt gehört in die Mitte, wenn der
      Controller flach liegt — tut er das nicht, sitzt er verdreht in der Halterung.
    </p>
    <div class="pair__level" data-pair="level" data-stale="false"><i data-pair="levelDot"></i></div>
    <p class="pair__hint" data-pair="levelState">Nicht verbunden.</p>
  </section>

  <section class="pair__card">
    <h2>Protokoll</h2>
    <pre class="pair__log" data-pair="log"></pre>
  </section>
`}
