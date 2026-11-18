import{E as e,Ot as t,S as n,T as r,Tt as i,Y as a,_t as o,a as s,ct as c,gt as ee,h as l,ht as te,i as u,n as d,ot as f,p,r as m,s as h,t as g,z as ne}from"./ui-tOlNMvOI.js";import{a as re,i as _,n as v,r as y,t as b}from"./VRButton-DzLHpgI-.js";var x=`/*
 * Opaque circular point-node fragment shader.
 * Pixels outside the disc are discarded instead of alpha blended.
 */

in float vPulse;
in float vVisibility;
out vec4 outColor;

void main() {
  if (vVisibility < 0.01) discard;
  vec2 centered = gl_PointCoord - 0.5;
  float distanceFromCenter = length(centered);
  if (distanceFromCenter > 0.5) discard;
  float core = 1.0 - smoothstep(0.05, 0.5, distanceFromCenter);
  vec3 color = mix(vec3(0.28, 0.25, 0.19), vec3(0.82, 0.77, 0.62), core) * vPulse;
  outColor = vec4(color, 1.0);
}
`,S=`/*
 * Procedural point-node vertex shader for subtle substrate resource anchors.
 * Point size is perspective-scaled and capped to keep fill cost bounded.
 */

uniform float uTimeSeconds;
uniform float uVolumeSizeMeters;
uniform float uPixelRatio;

out float vPulse;
out float vVisibility;

void main() {
  vec4 viewPosition = modelViewMatrix * vec4(position * uVolumeSizeMeters, 1.0);
  float perspectiveSize = 42.0 / max(1.0, -viewPosition.z);
  vVisibility = 1.0 - smoothstep(1.0, 5.0, uTimeSeconds);
  gl_PointSize = clamp(perspectiveSize * uPixelRatio * vVisibility, 0.0, 8.0);
  gl_Position = projectionMatrix * viewPosition;
  vPulse = 0.9 + sin(uTimeSeconds * 1.1 + float(gl_VertexID) * 0.37) * 0.1;
}
`,C=`/*
 * Cheap opaque shading for procedural mycelial tubes.
 * It avoids texture sampling, transparency, and dynamic lights so the cost
 * remains predictable for large WebGL2 instance counts in stereo rendering.
 */

uniform vec3 uFogColor;
uniform float uFogDensity;

in vec3 vNormal;
in float vReinforcement;
in float vMaturity;
in float vViewDepth;

out vec4 outColor;

void main() {
  vec3 lightDirection = normalize(vec3(0.45, 0.8, 0.35));
  float diffuse = 0.36 + max(dot(normalize(vNormal), lightDirection), 0.0) * 0.64;
  float cordBrightness = smoothstep(0.18, 0.86, vReinforcement) * vMaturity;
  vec3 fineHypha = vec3(0.72, 0.70, 0.63);
  vec3 transportCord = vec3(1.0, 0.98, 0.88);
  vec3 color = mix(fineHypha, transportCord, cordBrightness) * diffuse;
  float fog = 1.0 - exp(-uFogDensity * uFogDensity * vViewDepth * vViewDepth);
  outColor = vec4(mix(color, uFogColor, clamp(fog, 0.0, 1.0)), 1.0);
}
`,w=`/*
 * Procedural GLSL3 deformation for one continuous mycelial edge system.
 * Every tube starts as a fine hypha; its transport weight later controls
 * reinforcement or regression without a separate stable-edge category.
 */

uniform float uTimeSeconds;
uniform float uVolumeSizeMeters;

in vec3 aStart;
in vec3 aEnd;
in float aSeed;
in float aStartTimeSeconds;
in float aDurationSeconds;
in float aRadius;
in float aReinforcement;

out vec3 vNormal;
out float vReinforcement;
out float vMaturity;
out float vViewDepth;

const float PI = 3.141592653589793;

float hash(float value) {
  return fract(sin(value * 91.731) * 47593.5453);
}

vec3 safeDirection(vec3 vector) {
  float vectorLength = length(vector);
  return vectorLength > 0.00001 ? vector / vectorLength : vec3(0.0, 1.0, 0.0);
}

vec3 sideFor(vec3 direction) {
  vec3 reference = abs(direction.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  return safeDirection(cross(direction, reference));
}

vec3 centerline(float parameter) {
  vec3 direct = aEnd - aStart;
  float directLength = max(length(direct), 0.0001);
  vec3 direction = safeDirection(direct);
  vec3 side = sideFor(direction);
  vec3 up = safeDirection(cross(side, direction));
  vec3 base = mix(aStart, aEnd, parameter);
  float boundaryDistance = 0.48 - max(max(abs(base.x), abs(base.y)), abs(base.z));
  float amplitude = min(directLength * 0.075, max(0.0, boundaryDistance * 0.45));
  float envelope = sin(PI * parameter);
  float frequencyA = 0.65 + hash(aSeed) * 1.15;
  float frequencyB = 0.9 + hash(aSeed + 7.1) * 1.45;
  float waveA = sin((parameter * frequencyA + hash(aSeed + 2.3)) * PI * 2.0);
  float waveB = sin((parameter * frequencyB + hash(aSeed + 5.7)) * PI * 2.0);
  return base + (side * waveA + up * waveB * 0.72) * amplitude * envelope;
}

float visibleRadius(float parameter, float localAge) {
  float started = step(0.0, localAge);
  float growth = smoothstep(0.0, 1.0, clamp(localAge, 0.0, 1.0));
  float pathCoordinate = min(parameter, 1.0 - parameter) * 2.0;
  float revealed = 1.0 - smoothstep(growth, growth + 0.075, pathCoordinate);
  float maturity = smoothstep(1.05, 2.6, localAge);
  float transport = pow(aReinforcement, 1.8);
  float matureRadius = aRadius * mix(0.42, 8.0, transport);
  float radius = mix(aRadius, matureRadius, maturity);
  return radius * started * revealed;
}

void main() {
  float parameter = position.y + 0.5;
  float localAge = (uTimeSeconds - aStartTimeSeconds) / max(aDurationSeconds, 0.001);
  float radius = visibleRadius(parameter, localAge);
  float epsilon = 0.0125;
  vec3 previous = centerline(max(0.0, parameter - epsilon));
  vec3 next = centerline(min(1.0, parameter + epsilon));
  vec3 tangent = safeDirection(next - previous);
  vec3 normal = sideFor(tangent);
  vec3 binormal = safeDirection(cross(normal, tangent));
  vec3 radialOffset = normal * position.x + binormal * position.z;
  vec3 localPosition = (centerline(parameter) + radialOffset * radius) * uVolumeSizeMeters;
  vec4 viewPosition = modelViewMatrix * vec4(localPosition, 1.0);

  vNormal = normalize(mat3(modelMatrix) * radialOffset);
  vReinforcement = aReinforcement;
  vMaturity = smoothstep(1.05, 2.6, localAge);
  vViewDepth = -viewPosition.z;
  gl_Position = projectionMatrix * viewPosition;
}
`,T=`/*
 * Opaque boundary-line shader for the procedural volume.
 * The deliberately simple output keeps the volume to one cheap draw call.
 */

out vec4 outColor;

void main() {
  outColor = vec4(0.22, 0.3, 0.28, 1.0);
}
`,E=`/*
 * Vertex shader for the procedural unit-volume boundary.
 * One scale uniform expands the complete experiment without rebuilding data.
 */

uniform float uVolumeSizeMeters;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position * uVolumeSizeMeters, 1.0);
}
`,D=new l(`#08090b`),O=class{group=new e;timeSecondsUniform={value:0};volumeSizeMetersUniform={value:8};pixelRatioUniform={value:1};tendrilMaterial=k(this.timeSecondsUniform,this.volumeSizeMetersUniform);pointMaterial=A(this.timeSecondsUniform,this.volumeSizeMetersUniform,this.pixelRatioUniform);volumeMaterial=j(this.volumeSizeMetersUniform);volumeLines=P(this.volumeMaterial);tendrilMesh;pointMesh;currentStats={hyphaCount:0,triangleCount:0};constructor(e){this.group.add(this.volumeLines),e.add(this.group)}get stats(){return this.currentStats}setNetwork(e){this.removeNetworkGeometry(),this.tendrilMesh=M(e,this.tendrilMaterial),this.pointMesh=N(e.points,this.pointMaterial),this.group.add(this.tendrilMesh,this.pointMesh),this.currentStats={hyphaCount:e.hyphaCount,triangleCount:e.hyphaCount*96}}update(e){this.timeSecondsUniform.value=e}setVolumeSizeMeters(e){this.volumeSizeMetersUniform.value=e}setPixelRatio(e){this.pixelRatioUniform.value=e}dispose(){this.group.removeFromParent(),this.removeNetworkGeometry(),this.volumeLines.geometry.dispose(),this.tendrilMaterial.dispose(),this.pointMaterial.dispose(),this.volumeMaterial.dispose()}removeNetworkGeometry(){this.tendrilMesh&&=(this.group.remove(this.tendrilMesh),this.tendrilMesh.geometry.dispose(),void 0),this.pointMesh&&=(this.group.remove(this.pointMesh),this.pointMesh.geometry.dispose(),void 0)}};function k(e,t){return new o({glslVersion:r,vertexShader:w,fragmentShader:C,uniforms:{uTimeSeconds:e,uVolumeSizeMeters:t,uFogColor:{value:D},uFogDensity:{value:.035}}})}function A(e,t,n){return new o({glslVersion:r,vertexShader:S,fragmentShader:x,uniforms:{uTimeSeconds:e,uVolumeSizeMeters:t,uPixelRatio:n}})}function j(e){return new o({glslVersion:r,vertexShader:E,fragmentShader:T,uniforms:{uVolumeSizeMeters:e}})}function M(e,t){let n=v(e),r=new a(n,t);return r.frustumCulled=!1,r}function N(e,t){let r=new p;r.setAttribute(`position`,new n(e,3));let i=new c(r,t);return i.frustumCulled=!1,i}function P(e){let t=new p;t.setAttribute(`position`,new n(F(),3));let r=new ne(t,e);return r.frustumCulled=!1,r}function F(){let e=[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]];return[0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7].flatMap(t=>[...e[t]??[0,0,0]])}var ie=1.5,I=48,L=.05,R=180;function z(e){let t=new ee;t.background=new l(`#08090b`);let n=new f(I,window.innerWidth/window.innerHeight,L,R);n.position.set(9.5,6.8,9.5);let r=B(e),i=u(n,e),a=b.createButton(r);return document.body.appendChild(a),{scene:t,camera:n,renderer:r,controls:i,fitToVolume:e=>V(n,i,e),resize:()=>s(n,r,ie),dispose:()=>{a.remove(),i.dispose(),r.dispose()}}}function B(e){let t=new h({canvas:e,antialias:!1,powerPreference:`high-performance`});return t.outputColorSpace=te,t.xr.enabled=!0,t}function V(e,n,r){let i=e.position.clone().sub(n.target);i.lengthSq()===0&&i.copy(new t(1,.72,1)),i.normalize(),e.position.copy(n.target).addScaledVector(i,r*1.65),n.minDistance=r*.55,n.maxDistance=r*4,n.update()}function H(e){let t=U(),n=()=>{t.pointValue.value=t.pointSlider.value},r=()=>{e.onPointCountChange(Number(t.pointSlider.value))},i=()=>{let n=Number(t.volumeSlider.value);t.volumeValue.value=`${g(n)} m`,e.onVolumeSizeChange(n)};return t.pointSlider.min=String(_.minimum),t.pointSlider.max=String(_.maximum),n(),t.volumeValue.value=`${g(Number(t.volumeSlider.value))} m`,t.restartButton.addEventListener(`click`,e.onRestart),t.pauseButton.addEventListener(`click`,e.onTogglePause),t.pointSlider.addEventListener(`input`,n),t.pointSlider.addEventListener(`change`,r),t.volumeSlider.addEventListener(`input`,i),{canvas:t.canvas,getPointCount:()=>Number(t.pointSlider.value),getVolumeSizeMeters:()=>Number(t.volumeSlider.value),setPaused:e=>{t.pauseButton.textContent=e?`Weiter`:`Pausieren`},setStats:e=>W(t,e),dispose:()=>{t.restartButton.removeEventListener(`click`,e.onRestart),t.pauseButton.removeEventListener(`click`,e.onTogglePause),t.pointSlider.removeEventListener(`input`,n),t.pointSlider.removeEventListener(`change`,r),t.volumeSlider.removeEventListener(`input`,i)}}}function U(){return{canvas:m(`scene`,HTMLCanvasElement),volumeSlider:m(`volume-slider`,HTMLInputElement),volumeValue:m(`volume-value`,HTMLOutputElement),pointSlider:m(`point-slider`,HTMLInputElement),pointValue:m(`point-value`,HTMLOutputElement),restartButton:m(`restart-button`,HTMLButtonElement),pauseButton:m(`pause-button`,HTMLButtonElement),fpsValue:m(`fps-value`,HTMLElement),p95Value:m(`p95-value`,HTMLElement),hyphaValue:m(`hypha-value`,HTMLElement),cordValue:m(`cord-value`,HTMLElement),triangleValue:m(`triangle-value`,HTMLElement),generationValue:m(`generation-value`,HTMLElement)}}function W(e,t){e.fpsValue.textContent=g(t.framesPerSecond),e.p95Value.textContent=`${g(t.p95Milliseconds)} ms`,e.hyphaValue.textContent=d(t.hyphaCount),e.cordValue.textContent=d(t.reinforcedHyphaCount),e.triangleValue.textContent=d(t.triangleCount),e.generationValue.textContent=`${g(t.generationMilliseconds)} ms`}var G=20260820,K=.25;function q(){let e,t=H({onRestart:()=>ae(e),onTogglePause:()=>oe(e,!e.paused),onPointCountChange:t=>X(e,t),onVolumeSizeChange:t=>Q(e,t)});e=J(t);let n=()=>se(e);return window.addEventListener(`resize`,n),n(),Q(e,t.getVolumeSizeMeters()),$(e),e.sceneContext.renderer.setAnimationLoop(t=>{Y(e,t)}),()=>ce(e,n)}function J(e){let t=z(e.canvas),n=new O(t.scene),r=Z(G,e.getPointCount());n.setNetwork(r.network);let a=new i;return a.connect(document),{ui:e,sceneContext:t,view:n,timer:a,metrics:new re,network:r.network,seed:G,elapsedSeconds:0,statsElapsedSeconds:K,generationMilliseconds:r.milliseconds,paused:!1}}function Y(e,t){e.timer.update(t);let n=e.timer.getDelta();e.paused||(e.elapsedSeconds+=n),e.view.update(e.elapsedSeconds),e.sceneContext.controls.update(),e.sceneContext.renderer.render(e.sceneContext.scene,e.sceneContext.camera),e.metrics.recordFrame(n),e.statsElapsedSeconds+=n,!(e.statsElapsedSeconds<K)&&(e.statsElapsedSeconds=0,$(e))}function ae(e){e.seed+=1,X(e,e.ui.getPointCount())}function X(e,t){let n=Z(e.seed,t);e.network=n.network,e.generationMilliseconds=n.milliseconds,e.elapsedSeconds=0,e.view.setNetwork(n.network),$(e)}function Z(e,t){let n=performance.now();return{network:y({kind:`volume`,seed:e,pointCount:t}),milliseconds:performance.now()-n}}function Q(e,t){e.view.setVolumeSizeMeters(t),e.sceneContext.fitToVolume(t)}function oe(e,t){e.paused=t,e.ui.setPaused(t)}function $(e){e.ui.setStats({framesPerSecond:e.metrics.averageFramesPerSecond,p95Milliseconds:e.metrics.p95Milliseconds,hyphaCount:e.view.stats.hyphaCount,reinforcedHyphaCount:e.network.reinforcedHyphaCount,triangleCount:e.view.stats.triangleCount,generationMilliseconds:e.generationMilliseconds})}function se(e){e.view.setPixelRatio(e.sceneContext.resize())}function ce(e,t){e.sceneContext.renderer.setAnimationLoop(null),window.removeEventListener(`resize`,t),e.ui.dispose(),e.timer.dispose(),e.view.dispose(),e.sceneContext.dispose()}var le=q();window.addEventListener(`pagehide`,le,{once:!0});