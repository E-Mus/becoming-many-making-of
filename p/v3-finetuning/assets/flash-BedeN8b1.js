const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/install-dialog-CNIhgmR3.js","assets/rolldown-runtime-CbXtAM7H.js","assets/preload-helper-Czpn1I53.js","assets/styles-BtN7LUFL.js","assets/esp8266-LczKnVOs.js","assets/rom-eeWiO07Z.js","assets/no-port-picked-Bvxw7XW-.js"])))=>i.map(i=>d[i]);
import{t as e}from"./protocol-DQ9J0YtD.js";import{t}from"./preload-helper-Czpn1I53.js";var n=async e=>{t(()=>import(`./install-dialog-CNIhgmR3.js`),__vite__mapDeps([0,1,2,3,4,5]));let r;try{r=await navigator.serial.requestPort()}catch(r){if(r.name===`NotFoundError`){t(()=>import(`./no-port-picked-Bvxw7XW-.js`).then(t=>t.openNoPortPickedDialog(()=>n(e))),__vite__mapDeps([6,3]));return}alert(`Error: ${r.message}`);return}if(!r)return;try{await r.open({baudRate:115200,bufferSize:8192})}catch(e){alert(e.message);return}let i=document.createElement(`ewt-install-dialog`);i.port=r,i.manifestPath=e.manifest||e.getAttribute(`manifest`),i.overrides=e.overrides,i.addEventListener(`closed`,()=>{r.close()},{once:!0}),document.body.appendChild(i)},r=class e extends HTMLElement{connectedCallback(){if(this.renderRoot)return;if(this.renderRoot=this.attachShadow({mode:`open`}),!e.isSupported||!e.isAllowed){this.toggleAttribute(`install-unsupported`,!0),this.renderRoot.innerHTML=e.isAllowed?`<slot name='unsupported'>Your browser does not support installing things on ESP devices. Use Mozilla Firefox, Google Chrome or Microsoft Edge.</slot>`:`<slot name='not-allowed'>You can only install ESP devices on HTTPS websites or on the localhost.</slot>`;return}this.toggleAttribute(`install-supported`,!0);let t=document.createElement(`slot`);t.addEventListener(`click`,async e=>{e.preventDefault(),n(this)}),t.name=`activate`;let r=document.createElement(`button`);if(r.innerText=`Connect`,t.append(r),`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype){let t=new CSSStyleSheet;t.replaceSync(e.style),this.renderRoot.adoptedStyleSheets=[t]}else{let t=document.createElement(`style`);t.innerText=e.style,this.renderRoot.append(t)}this.renderRoot.append(t)}};r.isSupported=`serial`in navigator,r.isAllowed=window.isSecureContext,r.style=`
  button {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 24px;
    color: var(--esp-tools-button-text-color, #fff);
    background-color: var(--esp-tools-button-color, #03a9f4);
    border: none;
    border-radius: var(--esp-tools-button-border-radius, 9999px);
  }
  button::before {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.2;
    border-radius: var(--esp-tools-button-border-radius, 9999px);
  }
  button:hover::before {
    background-color: rgba(255,255,255,.8);
  }
  button:focus {
    outline: none;
  }
  button:focus::before {
    background-color: white;
  }
  button:active::before {
    background-color: grey;
  }
  :host([active]) button {
    color: rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: none;
    cursor: unset;
    pointer-events: none;
  }
  .hidden {
    display: none;
  }`,customElements.define(`esp-web-install-button`,r);var i=115200;function a(){return`serial`in navigator}async function o(e){let t=await navigator.serial.requestPort();await t.open({baudRate:i});let n=!0,r=new TextEncoder;return s(t,e,()=>n).finally(()=>{n=!1,e.onClosed()}),{get isOpen(){return n},async send(e){let n=t.writable?.getWriter();if(!n)throw Error(`Serial port is not writable`);try{await n.write(r.encode(`${JSON.stringify(e)}\n`))}finally{n.releaseLock()}},async close(){n=!1;try{await t.readable?.cancel()}catch{}try{await t.close()}catch{}}}}async function s(e,t,n){let r=new TextDecoder,i=``;for(;n()&&e.readable;){let a=e.readable.getReader();try{for(;n();){let{value:e,done:n}=await a.read();if(n)return;i+=r.decode(e,{stream:!0}),i=c(i,t)}}catch{return}finally{a.releaseLock()}}}function c(e,t){let n=e.split(`
`),r=n.pop()??``;for(let e of n){let n=e.trim();n.length!==0&&t.onLine(l(n))}return r}function l(e){try{let t=JSON.parse(e);if(typeof t==`object`&&t)return t}catch{}return e}var u=`/becoming-many-making-of/p/grass-clipmap/firmware/manifest.json`,d=`bm-m5-flash-setup`,f=300;function p(e){if(!e)throw Error(`Flash page container is missing`);e.innerHTML=m();let t=y(b(e,`.flash__log`));v(e,h(e),t),a()||(b(e,`.flash__unsupported`).hidden=!1)}function m(){return`
    <header class="flash__header">
      <h1>M5 Controller — Flash &amp; Setup</h1>
      <p class="flash__hint">
        Expected firmware <code>${e}</code> for the
        M5StickS3. Connect the device over USB-C.
      </p>
      <p class="flash__unsupported" hidden>
        This browser has no Web Serial — use Chrome or Edge.
      </p>
    </header>

    <section class="flash__panel">
      <h2>1 · Flash firmware</h2>
      <p class="flash__hint">
        Disconnect the setup console below first — flashing needs the serial
        port for itself.
      </p>
      <esp-web-install-button manifest="${u}"></esp-web-install-button>
    </section>

    <section class="flash__panel">
      <h2>2 · Configure</h2>
      <form class="flash__form">
        <label>Station WiFi SSID
          <input name="ssid" autocomplete="off" required />
        </label>
        <label>Station WiFi password
          <input name="password" type="password" autocomplete="off" />
        </label>
        <label>Device id
          <input name="deviceId" autocomplete="off" required
            placeholder="bm-station-a-m5" />
        </label>
        <div class="flash__actions">
          <button type="button" data-action="connect">Connect console</button>
          <button type="submit" disabled>Send configuration</button>
        </div>
      </form>
      <div class="flash__actions" data-role="commands">
        <button type="button" disabled data-command="getConfig">Read config</button>
        <button type="button" disabled data-command="diagnose">Diagnose</button>
        <button type="button" disabled data-command="calibrate">Calibrate</button>
        <button type="button" disabled data-command="clearCalibration">Clear calibration</button>
        <button type="button" disabled data-command="reboot">Reboot</button>
        <button type="button" disabled data-command="factoryReset">Factory reset</button>
      </div>
    </section>

    <section class="flash__panel">
      <h2>3 · Device log</h2>
      <pre class="flash__log" aria-live="polite"></pre>
    </section>
  `}function h(e){let t=b(e,`.flash__form`),n=g();return n&&(x(t,`ssid`).value=n.ssid,x(t,`password`).value=n.password,x(t,`deviceId`).value=n.deviceId),{element:t,read(){let e={ssid:x(t,`ssid`).value.trim(),password:x(t,`password`).value,deviceId:x(t,`deviceId`).value.trim()};return _(e),e}}}function g(){try{let e=localStorage.getItem(d);if(!e)return null;let t=JSON.parse(e);if(typeof t!=`object`||!t)return null;let n=t;return{ssid:typeof n.ssid==`string`?n.ssid:``,password:typeof n.password==`string`?n.password:``,deviceId:typeof n.deviceId==`string`?n.deviceId:``}}catch{return null}}function _(e){try{localStorage.setItem(d,JSON.stringify(e))}catch{}}function v(e,t,n){let r=b(e,`[data-action='connect']`),i=b(e,`.flash__form button[type='submit']`),a=Array.from(e.querySelectorAll(`[data-command]`)),s=null,c=e=>{r.textContent=e?`Disconnect console`:`Connect console`,i.disabled=!e;for(let t of a)t.disabled=!e},l=async e=>{if(s){n.append(`→ ${JSON.stringify(e)}`);try{await s.send(e)}catch(e){n.append(`✗ send failed: ${S(e)}`)}}};r.addEventListener(`click`,async()=>{if(s){await s.close(),s=null;return}try{s=await o({onLine:e=>n.append(typeof e==`string`?`· ${e}`:`← ${JSON.stringify(e)}`),onClosed:()=>{s=null,c(!1),n.append(`· console disconnected`)}}),c(!0),n.append(`· console connected`)}catch(e){n.append(`✗ connect failed: ${S(e)}`)}}),t.element.addEventListener(`submit`,e=>{e.preventDefault();let n=t.read();l({type:`configure`,...n})});for(let e of a)e.addEventListener(`click`,()=>{let t=e.dataset.command;l({type:t})})}function y(e){let t=[];return{append(n){t.push(n),t.length>f&&t.shift(),e.textContent=t.join(`
`),e.scrollTop=e.scrollHeight}}}function b(e,t){let n=e.querySelector(t);if(!n)throw Error(`Flash page is missing ${t}`);return n}function x(e,t){let n=e.elements.namedItem(t);if(!(n instanceof HTMLInputElement))throw Error(`Flash form is missing the ${t} field`);return n}function S(e){return e instanceof Error?e.message:String(e)}p(document.querySelector(`.flash`));