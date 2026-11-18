const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/install-dialog-CNIhgmR3.js","assets/rolldown-runtime-CbXtAM7H.js","assets/preload-helper-Czpn1I53.js","assets/styles-BtN7LUFL.js","assets/esp8266-LczKnVOs.js","assets/rom-eeWiO07Z.js","assets/no-port-picked-Bvxw7XW-.js"])))=>i.map(i=>d[i]);
import"./app-BEK48C0z.js";import{t as e}from"./preload-helper-Czpn1I53.js";import{a as t,i as n,r,t as i}from"./dom-Bumxq0_S.js";var a=async t=>{e(()=>import(`./install-dialog-CNIhgmR3.js`),__vite__mapDeps([0,1,2,3,4,5]));let n;try{n=await navigator.serial.requestPort()}catch(n){if(n.name===`NotFoundError`){e(()=>import(`./no-port-picked-Bvxw7XW-.js`).then(e=>e.openNoPortPickedDialog(()=>a(t))),__vite__mapDeps([6,3]));return}alert(`Error: ${n.message}`);return}if(!n)return;try{await n.open({baudRate:115200,bufferSize:8192})}catch(e){alert(e.message);return}let r=document.createElement(`ewt-install-dialog`);r.port=n,r.manifestPath=t.manifest||t.getAttribute(`manifest`),r.overrides=t.overrides,r.addEventListener(`closed`,()=>{n.close()},{once:!0}),document.body.appendChild(r)},o=class e extends HTMLElement{connectedCallback(){if(this.renderRoot)return;if(this.renderRoot=this.attachShadow({mode:`open`}),!e.isSupported||!e.isAllowed){this.toggleAttribute(`install-unsupported`,!0),this.renderRoot.innerHTML=e.isAllowed?`<slot name='unsupported'>Your browser does not support installing things on ESP devices. Use Mozilla Firefox, Google Chrome or Microsoft Edge.</slot>`:`<slot name='not-allowed'>You can only install ESP devices on HTTPS websites or on the localhost.</slot>`;return}this.toggleAttribute(`install-supported`,!0);let t=document.createElement(`slot`);t.addEventListener(`click`,async e=>{e.preventDefault(),a(this)}),t.name=`activate`;let n=document.createElement(`button`);if(n.innerText=`Connect`,t.append(n),`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype){let t=new CSSStyleSheet;t.replaceSync(e.style),this.renderRoot.adoptedStyleSheets=[t]}else{let t=document.createElement(`style`);t.innerText=e.style,this.renderRoot.append(t)}this.renderRoot.append(t)}};o.isSupported=`serial`in navigator,o.isAllowed=window.isSecureContext,o.style=`
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
  }`,customElements.define(`esp-web-install-button`,o);var s=115200,c=4096;function l(){return`serial`in navigator}async function u(e){let t=await navigator.serial.requestPort();if(await t.open({baudRate:s}),!t.readable||!t.writable)throw await t.close(),Error(`Serial port has no readable or writable stream`);let n=t.readable.getReader(),r=!0,i,a,o=``,c=f(n,e,()=>r,()=>o);return c.then(()=>l()).catch(e.onError),{get isOpen(){return r},async send(e){if(!r)throw Error(`Serial console is disconnected`);if(i)throw Error(`Another serial command is still being sent`);let n=t.writable?.getWriter();if(!n)throw Error(`Serial port is not writable`);e.type===`configure`&&(o=e.password),i=d(n,e);try{await i}finally{i=void 0}},close:l};function l(){return a||(r=!1,a=u(),a)}async function u(){try{await n.cancel()}catch{}await c,await i?.catch(()=>{});try{await t.close()}catch{throw Error(`Serial port could not be closed`)}finally{o=``,e.onClosed()}}}async function d(e,t){try{await e.write(new TextEncoder().encode(`${JSON.stringify(t)}\n`))}catch{throw Error(`Serial command could not be written`)}finally{e.releaseLock()}}async function f(e,t,n,r){let i=new TextDecoder,a=``,o=!1;try{for(;n();){let s=await e.read();if(s.done)break;for(let e of i.decode(s.value,{stream:!0})){if(!n())return;e===`
`?(o||p(a.trim(),t,r()),a=``,o=!1):o||(a.length<c?a+=e:(a=``,o=!0,t.onNotice(`Oversized device line discarded`)))}}}catch{n()&&t.onError(Error(`Serial device read failed`))}finally{e.releaseLock()}}function p(e,r,i){if(!e)return;let a=n(e,i);a?r.onMessage(a):t(e)||r.onNotice(`Unrecognized device output omitted`)}var m=`bm-m5-flash-setup`,h=300,g=2e3,_=[`getConfig`,`diagnose`,`calibrate`,`clearCalibration`,`reboot`,`factoryReset`];function v(e,t,n,r){let a=new AbortController,o={signal:a.signal},s=i(e,`.flash__form`,HTMLFormElement),c=i(s,`[name='ssid']`,HTMLInputElement),l=i(s,`[name='password']`,HTMLInputElement),u=i(s,`[name='deviceId']`,HTMLInputElement),d=i(s,`[data-action='connect']`,HTMLButtonElement),f=i(s,`button[type='submit']`,HTMLButtonElement),p=i(e,`.flash__log`,HTMLPreElement),m=_.map(t=>({type:t,button:i(e,`[data-command='${t}']`,HTMLButtonElement)})),v=i(e,`[data-role='firmware-version']`,HTMLElement),x=i(e,`.flash__unsupported`,HTMLElement);v.textContent=n,x.hidden=r;let S=y();S&&(c.value=S.ssid,u.value=S.deviceId);let C=`disconnected`,w=!1,T=[];E();for(let{type:e,button:n}of m)n.addEventListener(`click`,()=>t.send({type:e}),o);return d.addEventListener(`click`,t.toggleConnection,o),s.addEventListener(`submit`,e=>{e.preventDefault(),!(C!==`connected`||w)&&t.configure({ssid:c.value.trim(),password:l.value,deviceId:u.value.trim()})},o),e.inert=!1,{setConnectionState(e){C=e,E()},setSending(e){w=e,E()},appendLog(e){T.push(e.slice(0,g)),T.length>h&&T.shift(),p.textContent=T.join(`
`),p.scrollTop=p.scrollHeight},rememberSetup:b,unload(){e.inert=!0,a.abort(),l.value=``,T.length=0}};function E(){d.textContent={disconnected:`Connect console`,connecting:`Connecting…`,connected:`Disconnect console`,closing:`Disconnecting…`}[C],d.disabled=!r||C===`connecting`||C===`closing`,f.disabled=C!==`connected`||w;for(let{button:e}of m)e.disabled=f.disabled}}function y(){try{let e=localStorage.getItem(m);if(e===null)return null;localStorage.removeItem(m);let t=JSON.parse(e);if(typeof t!=`object`||!t)return null;let n={ssid:`ssid`in t&&typeof t.ssid==`string`?t.ssid:``,deviceId:`deviceId`in t&&typeof t.deviceId==`string`?t.deviceId:``};return b(n),n}catch{return null}}function b({ssid:e,deviceId:t}){try{localStorage.setItem(m,JSON.stringify({ssid:e,deviceId:t}))}catch{}}var x=null,S=!1,C=!1,w=!1,T=v(i(document,`.flash`,HTMLElement),{toggleConnection:()=>void D(),configure(e){T.rememberSetup(e),O({type:`configure`,...e})},send:e=>void O(e)},r,l());window.addEventListener(`pagehide`,E);function E(e){e.persisted||(window.removeEventListener(`pagehide`,E),w=!0,T.unload(),x?.close().catch(e=>console.error(`Flash cleanup failed`,e)))}async function D(){if(!(w||S)){if(x){T.setConnectionState(`closing`);try{await x.close()}catch{w||T.appendLog(`✗ Console could not be closed`)}return}S=!0,T.setConnectionState(`connecting`);try{let e=await u({onMessage(e){w||T.appendLog(k(e))},onNotice(e){w||T.appendLog(`· ${e}`)},onError(){w||T.appendLog(`✗ Serial console error`)},onClosed(){x=null,!w&&(T.setConnectionState(`disconnected`),T.appendLog(`· Console disconnected`))}});if(w){await e.close();return}if(!e.isOpen)return;x=e,T.setConnectionState(`connected`),T.appendLog(`· Console connected`)}catch{w||(T.setConnectionState(`disconnected`),T.appendLog(`✗ Console connection failed or was cancelled`))}finally{S=!1}}}async function O(e){if(!(w||C||!x?.isOpen)){C=!0,T.setSending(!0);try{await x.send(e),w||T.appendLog(`→ ${e.type} sent; awaiting device response`)}catch{w||T.appendLog(`✗ Command could not be sent`)}finally{C=!1,w||T.setSending(!1)}}}function k(e){return`ok`in e?e.type===`configureResult`?e.ok?`← Configuration applied`:`← Configuration rejected`:`← ${e.type}: ${e.ok?`ok`:`failed`}`:`← ${JSON.stringify(e)}`}