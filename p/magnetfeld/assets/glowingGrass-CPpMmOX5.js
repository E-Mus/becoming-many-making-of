import{S as e,_ as t,a as n,b as r,d as i,f as a,g as o,h as s,i as c,l,m as ee,n as te,o as ne,p as re,r as ie,t as ae,u as oe,v as se,x as u,y as ce}from"./magnetic-terrain-surface-CAn63gb2.js";var d=[{id:`circle`,label:`Kreis`,viewHalfAngleRadians:null,radiusMultiplier:1},{id:`front-focus`,label:`Front Fokus`,viewHalfAngleRadians:Math.PI/2,radiusMultiplier:1.75},{id:`heavy-front-focus`,label:`Heavy Front Fokus`,viewHalfAngleRadians:Math.PI/3,radiusMultiplier:2.5}];function le(e){return d.some(t=>t.id===e)}function ue(e){return f(e).viewHalfAngleRadians}function de(e,t){return e*f(t).radiusMultiplier}function f(e){let t=d.find(t=>t.id===e);if(!t)throw Error(`Unknown grass render shape: ${e}`);return t}var p=4e3,m={dense:{extentMeters:{minimum:30,maximum:150},tuftsPerSquareMeter:{minimum:2,maximum:32}},medium:{extentMeters:{minimum:100,maximum:600},tuftsPerSquareMeter:{minimum:.25,maximum:4}},far:{extentMeters:{minimum:300,maximum:1200},tuftsPerSquareMeter:{minimum:.015625,maximum:.25}},transitionSoftness:{minimum:.05,maximum:1}};function fe(e){let t=h(e),n=g(e);return[{index:0,density:e.far.tuftsPerSquareMeter,generationRadius:_(e,`heavy-front-focus`),phase:[.17,.63]},{index:1,density:e.medium.tuftsPerSquareMeter-e.far.tuftsPerSquareMeter,generationRadius:t.medium+n.medium*.5,phase:[.71,.29]},{index:2,density:e.dense.tuftsPerSquareMeter-e.medium.tuftsPerSquareMeter,generationRadius:t.dense+n.dense*.5,phase:[.43,.83]}].map(me).filter(e=>Number.isFinite(e.spacing))}function h(e){let t=e.dense.extentMeters,n=t+e.medium.extentMeters;return{dense:t,medium:n,far:n+e.far.extentMeters}}function g(e){return{dense:e.dense.extentMeters*e.transitionSoftness,medium:e.medium.extentMeters*e.transitionSoftness,far:e.far.extentMeters*e.transitionSoftness}}function _(e,t){let n=h(e);return Math.min(p,n.medium+de(e.far.extentMeters,t))}function v(e){return e<=0?1/0:1/Math.sqrt(e)}function y(e){let t=b(e.dense,m.dense),n=b(e.medium,m.medium),r=b(e.far,m.far);return{dense:t,medium:{...n,tuftsPerSquareMeter:Math.min(t.tuftsPerSquareMeter,n.tuftsPerSquareMeter)},far:{...r,tuftsPerSquareMeter:Math.min(n.tuftsPerSquareMeter,r.tuftsPerSquareMeter)},transitionSoftness:x(e.transitionSoftness,m.transitionSoftness)}}function pe(e,t){return e.transitionSoftness===t.transitionSoftness&&S(e.dense,t.dense)&&S(e.medium,t.medium)&&S(e.far,t.far)}function me(e){return{index:e.index,spacing:v(e.density),generationRadius:e.generationRadius,phaseX:e.phase[0],phaseZ:e.phase[1]}}function b(e,t){return{extentMeters:x(e.extentMeters,t.extentMeters),tuftsPerSquareMeter:x(e.tuftsPerSquareMeter,t.tuftsPerSquareMeter)}}function x(e,t){return Math.min(t.maximum,Math.max(t.minimum,e))}function S(e,t){return e.extentMeters===t.extentMeters&&e.tuftsPerSquareMeter===t.tuftsPerSquareMeter}var C={minimumBladeHeightMeters:.08,maximumBladeHeightMeters:.4,bladeWidthToHeightRatio:.32,tuftRadiusToHeightRatio:.16};function w(e){return Math.min(C.maximumBladeHeightMeters,Math.max(C.minimumBladeHeightMeters,e))}var T=100,E=25,he=60,ge=12,D=Math.PI*2,O=D/ge,_e=class{underfootRange;farSectors;layerOrigins=[new u,new u,new u];layerSpacings=[1,1,1];forwardX=0;forwardZ=-1;radiusIndex;geometryVariant;placement;renderShape;constructor(e,t,n){this.geometryVariant=n.geometryVariant,this.placement=y(n.placement),this.updateLayerSpacings(),this.radiusIndex=I({...n,placement:this.placement}),this.renderShape=n.renderShape;let r=ve(this.placement);this.underfootRange=Ce(t,r.underfootBuckets,`magnetic-grass-underfoot-buffer`,this.geometryVariant),this.farSectors=r.farSectorBuckets.map((e,n)=>we(t,e,n,this.geometryVariant)),e.add(this.underfootRange.mesh,...je(this.farSectors)),this.applyRadiusAndVisibility()}get instanceCount(){let e=this.underfootRange.mesh.geometry.instanceCount;for(let t of this.farSectors)t.mesh.visible&&(e+=t.mesh.geometry.instanceCount);return e}setSettings(e){let t=y(e.placement),n=e.geometryVariant!==this.geometryVariant;this.geometryVariant=e.geometryVariant,pe(t,this.placement)?n&&this.rebuildTopology():this.rebuildPlacement(t),this.radiusIndex=I({...e,placement:t}),this.renderShape=e.renderShape,this.applyRadiusAndVisibility()}update(e,t){this.updateCenter(e),this.updateViewDirection(t)}dispose(){P(this.underfootRange);for(let e of this.farSectors)P(e)}rebuildPlacement(e){let t=ve(e);j(this.underfootRange,t.underfootBuckets,this.geometryVariant),this.farSectors.forEach((e,n)=>{let r=t.farSectorBuckets[n];if(!r)throw Error(`Missing grass sector: ${n}`);j(e,r,this.geometryVariant)}),this.placement=e,this.updateLayerSpacings()}rebuildTopology(){M(this.underfootRange,this.geometryVariant);for(let e of this.farSectors)M(e,this.geometryVariant)}applyRadiusAndVisibility(){N(this.underfootRange,this.radiusIndex);for(let e of this.farSectors)N(e,this.radiusIndex);this.updateFarSectorVisibility()}updateCenter(e){for(let t=0;t<this.layerOrigins.length;t+=1){let n=this.layerSpacings[t]??1;this.layerOrigins[t]?.set(L(e.x,n),L(e.z,n))}}updateLayerSpacings(){this.layerSpacings.fill(1);for(let e of fe(this.placement))this.layerSpacings[e.index]=e.spacing}updateViewDirection(e){let t=Math.hypot(e.x,e.z);t<.01||(this.forwardX=e.x/t,this.forwardZ=e.z/t,this.updateFarSectorVisibility())}updateFarSectorVisibility(){let e=ue(this.renderShape);for(let t of this.farSectors)t.mesh.visible=t.mesh.geometry.instanceCount>0&&Ae(t,e,this.forwardX,this.forwardZ)}};function ve(e){let t={underfootBuckets:ye(),farSectorBuckets:Array.from({length:ge},ye)};for(let n of fe(e))be(t,n);return t}function ye(){let e=(p-T)/E+1;return Array.from({length:e},()=>[])}function be(e,t){let n=Math.floor(t.generationRadius/t.spacing);for(let r=-n;r<=n;r+=1)for(let i=-n;i<=n;i+=1){let n=(i+t.phaseX)*t.spacing,a=(r+t.phaseZ)*t.spacing;Math.hypot(n,a)>t.generationRadius||xe(e,n,a,t.index)}}function xe(e,t,n,r){let i=Math.hypot(t,n),a=F(i);if(i<=he){e.underfootBuckets[a]?.push(t,n,r);return}let o=Se(t,n);e.farSectorBuckets[o]?.[a]?.push(t,n,r)}function Se(e,t){let n=((Math.atan2(t,e)+D)%D+O*.5)%D;return Math.floor(n/O)}function Ce(e,t,n,r){let{offsets:i,instanceCountsByRadius:a}=Te(t);return{instanceData:i,mesh:De(e,i,n,r),instanceCountsByRadius:a}}function we(e,t,n,r){let i=n*O;return{...Ce(e,t,`magnetic-grass-sector-${n}`,r),directionX:Math.cos(i),directionZ:Math.sin(i)}}function Te(e){let t=new Uint32Array(e.length),n=new Float32Array(Ee(e)),r=0,i=0;return e.forEach((e,a)=>{n.set(e,r),r+=e.length,i+=e.length/3,t[a]=i}),{offsets:n,instanceCountsByRadius:t}}function Ee(e){return e.reduce((e,t)=>e+t.length,0)}function De(e,n,r,i){let a=new t(k(n,i),e);return a.frustumCulled=!1,a.visible=!1,a.name=r,a}function k(e,t){let n=[];Oe(n,t);let r=new s(e,3);r.setUsage(ce);let i=new o;return i.setAttribute(`position`,new ee(n,3)),i.setAttribute(`aInstanceData`,r),i.instanceCount=0,i}function Oe(e,t){if(t===`volume`){ke(e);return}A(e,0),t===`cross`&&A(e,Math.PI*.5)}function A(e,t){let n=C.bladeWidthToHeightRatio*.5,r=Math.cos(t+Math.PI*.5)*n,i=Math.sin(t+Math.PI*.5)*n;e.push(-r,0,-i,r,0,i,0,1,0)}function ke(e){let t=C.tuftRadiusToHeightRatio,n=Array.from({length:3},(e,n)=>{let r=n/3*D;return[Math.cos(r)*t,Math.sin(r)*t]});for(let t=0;t<n.length;t+=1){let r=n[t],i=n[(t+1)%n.length];!r||!i||e.push(r[0],0,r[1],i[0],0,i[1],0,1,0)}}function j(e,t,n){let r=e.mesh.geometry,{offsets:i,instanceCountsByRadius:a}=Te(t);e.instanceData=i,e.mesh.geometry=k(i,n),e.instanceCountsByRadius=a,r.dispose()}function M(e,t){let n=e.mesh.geometry,r=n.instanceCount;e.mesh.geometry=k(e.instanceData,t),e.mesh.geometry.instanceCount=r,n.dispose()}function N(e,t){e.mesh.geometry.instanceCount=e.instanceCountsByRadius[t]??0,e.mesh.visible=e.mesh.geometry.instanceCount>0}function Ae(e,t,n,r){if(t===null)return!0;let i=Math.cos(t+O*.5);return e.directionX*n+e.directionZ*r>=i}function je(e){return e.map(e=>e.mesh)}function P(e){e.mesh.removeFromParent(),e.mesh.geometry.dispose()}function F(e){let t=Math.ceil((e-T)/E),n=(p-T)/E;return Math.min(n,Math.max(0,t))}function I(e){return F(_(e.placement,e.renderShape))}function L(e,t){return Math.round(e/t)*t}var Me=`/**
 * Colors opaque grass with the shared magnetic line and animation functions.
 * Bright shader colors create the glow cue without lights or post-processing.
 */

varying float vBladeHeight;

uniform float uLineGlow;

const vec3 GRASS_LOW_COLOR = vec3(0.018, 0.090, 0.045);
const vec3 GRASS_HIGH_COLOR = vec3(0.090, 0.320, 0.145);
const vec3 DARK_GRASS_LOW_COLOR = vec3(0.004, 0.035, 0.018);
const vec3 DARK_GRASS_HIGH_COLOR = vec3(0.018, 0.130, 0.060);
const vec3 LINE_COLOR = vec3(0.080, 0.860, 0.420);
const vec3 FLOW_COLOR = vec3(0.320, 1.000, 0.620);
const float LINE_SOFTNESS = 0.045;

void main() {
  FieldCoordinates field = getFieldCoordinates();
  AnimationSample animation = getAnimation(field);
  float halfWidth =
    uLineWidth * animation.widthScale / (uLineSpacing * 2.0);
  vec3 lineSample = getLineMask(field.stream, halfWidth, LINE_SOFTNESS);

  vec3 baseColor = mix(GRASS_LOW_COLOR, GRASS_HIGH_COLOR, vBladeHeight);
  if (uDarkMode > 0.5) {
    baseColor = mix(
      DARK_GRASS_LOW_COLOR,
      DARK_GRASS_HIGH_COLOR,
      vBladeHeight
    );
  }

  float heightResponse = mix(0.78, 1.0, vBladeHeight);
  float lineStrength = clamp(
    lineSample.x * heightResponse * uLineGlow,
    0.0,
    1.0
  );
  float animationStrength = clamp(
    lineSample.x * lineSample.y * animation.brightness * 1.35 * uLineGlow,
    0.0,
    1.0
  );
  vec3 color = mix(baseColor, LINE_COLOR, lineStrength);
  color = mix(color, FLOW_COLOR, animationStrength);
  color += LINE_COLOR * lineSample.z * uLineGlow * 0.12;

  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Ne=`${te}\n/**
 * Places metric grass tufts on the shared terrain and bends only their tips.
 * Layer-specific origins keep continuous grid densities stable while flying.
 */

varying vec3 vWorldPosition;
varying float vTerrainCrossSlope;
varying float vBladeHeight;

// x/y contain the local grid position; z stores the placement-layer index.
attribute vec3 aInstanceData;

uniform float uTimeSeconds;
uniform float uMaximumBladeHeightMeters;
uniform float uGrassRadius;
uniform float uGrassTransitionWidth;
uniform float uWindStrength;
uniform float uWindSpeed;
uniform vec2 uGrassLayerOrigins[3];
uniform float uGrassLayerSpacings[3];
uniform vec2 uGrassZoneRadii;
uniform vec2 uGrassZoneTransitionWidths;

const float TAU = 6.28318530718;
// A tuft stays inside its source cell (maximum offset: 41% of spacing). This
// hides the grid while retaining predictable density and stable world hashes.
const float POSITION_JITTER_FRACTION = 0.82;
const float EDGE_FADE_NOISE_FRACTION = 0.65;
const float DISTANT_LOD_START_METERS = 80.0;
const float DISTANT_LOD_END_METERS = 900.0;
const float DISTANT_WIDTH_SCALE = 5.0;
const vec2 WIND_DIRECTION = vec2(0.8137, 0.5812);

/** Cheap cell hash: stable across floating-origin shifts and free of sin(). */
float hashCell(vec2 cell) {
  vec3 value = fract(vec3(cell.xyx) * vec3(0.1031, 0.1030, 0.0973));
  value += dot(value, value.yzx + 33.33);
  return fract((value.x + value.y) * value.z);
}

vec2 rotate2d(vec2 value, float angle) {
  float sine = sin(angle);
  float cosine = cos(angle);
  return mat2(cosine, -sine, sine, cosine) * value;
}

vec2 getLayerOrigin(float layer) {
  if (layer < 0.5) return uGrassLayerOrigins[0];
  if (layer < 1.5) return uGrassLayerOrigins[1];
  return uGrassLayerOrigins[2];
}

float getLayerSpacing(float layer) {
  if (layer < 0.5) return uGrassLayerSpacings[0];
  if (layer < 1.5) return uGrassLayerSpacings[1];
  return uGrassLayerSpacings[2];
}

/**
 * Supplementary medium and dense grids dissolve gradually at their boundary.
 * World-position noise staggers the opaque vertex shrink without transparency,
 * textures, sorting, or a post-processing pass.
 */
float getDensityFade(
  float layer,
  float distanceFromViewer,
  float seed
) {
  if (layer < 0.5) return 1.0;
  float boundary = layer < 1.5
    ? uGrassZoneRadii.y
    : uGrassZoneRadii.x;
  float width = layer < 1.5
    ? uGrassZoneTransitionWidths.y
    : uGrassZoneTransitionWidths.x;
  float ratio = 1.0 - smoothstep(
    boundary - width * 0.5,
    boundary + width * 0.5,
    distanceFromViewer
  );
  return smoothstep(seed - 0.12, seed + 0.12, ratio);
}

/** The outer edge uses the same opaque shrink strategy as internal seams. */
float getEdgeFade(float distanceFromViewer, float seed) {
  float fadeWidth = max(1.0, uGrassTransitionWidth);
  float noisyRadius = uGrassRadius +
    (seed - 0.5) * fadeWidth * EDGE_FADE_NOISE_FRACTION;
  return 1.0 - smoothstep(
    noisyRadius - fadeWidth,
    noisyRadius,
    distanceFromViewer
  );
}

void main() {
  float layer = aInstanceData.z;
  vec2 instancePosition = aInstanceData.xy;
  vec2 nominalWorldPosition = getLayerOrigin(layer) + instancePosition;
  float layerSpacing = getLayerSpacing(layer);

  // Hashing reconstructed float positions caused tiny rounding differences to
  // avalanche whenever an origin snapped. Integer world cells stay identical.
  vec2 worldCell = floor(nominalWorldPosition / layerSpacing);
  float seed = hashCell(worldCell + vec2(layer * 37.0, layer * 71.0));
  vec2 positionVariation = vec2(
    fract(seed * 17.31),
    fract(seed * 71.83)
  ) - 0.5;
  vec2 rootPosition = nominalWorldPosition +
    positionVariation * layerSpacing * POSITION_JITTER_FRACTION;

  float distanceFromViewer = length(instancePosition);
  float edgeFade = getEdgeFade(distanceFromViewer, seed);
  float densityFade = getDensityFade(layer, distanceFromViewer, seed);
  float visibility = edgeFade * densityFade;
  float distanceLod = smoothstep(
    DISTANT_LOD_START_METERS,
    DISTANT_LOD_END_METERS,
    distanceFromViewer
  );

  // The configured maximum is exact: random and distant blades never exceed it.
  float heightVariation = mix(0.40, 1.0, fract(seed * 43.17));
  vec2 localPosition = rotate2d(position.xz, seed * TAU);
  localPosition *= uMaximumBladeHeightMeters * heightVariation;
  localPosition *= mix(1.0, DISTANT_WIDTH_SCALE, distanceLod);
  float bladeHeight = position.y * uMaximumBladeHeightMeters *
    heightVariation * visibility;
  float groundHeight = terrainHeight(rootPosition);

  float windPhase = dot(rootPosition, vec2(0.12, 0.09));
  windPhase += uTimeSeconds * uWindSpeed + seed * TAU;
  float wind = sin(windPhase);
  wind += sin(windPhase * 0.37 - uTimeSeconds * uWindSpeed * 0.43) * 0.32;
  float tipWeight = position.y * position.y;
  // Wind strength is a height-relative bend ratio, so short grass cannot move
  // farther than tall grass merely because both use the same control value.
  vec2 windOffset = WIND_DIRECTION * wind * uWindStrength *
    uMaximumBladeHeightMeters * tipWeight * visibility;

  vec3 renderedWorldPosition = vec3(
    rootPosition.x + localPosition.x + windOffset.x,
    groundHeight + bladeHeight,
    rootPosition.y + localPosition.y + windOffset.y
  );

  // Field sampling excludes wind so the magnetic pattern never swims.
  vWorldPosition = vec3(
    rootPosition.x + localPosition.x,
    groundHeight,
    rootPosition.y + localPosition.y
  );
  vTerrainCrossSlope = 0.0;
  vBladeHeight = position.y * visibility;
  gl_Position = projectionMatrix * viewMatrix * vec4(renderedWorldPosition, 1.0);
}
`,Pe=`${ie}\n${c}\n${Me}`,Fe=class{uniforms=Ie();material=new se({vertexShader:Ne,fragmentShader:Pe,uniforms:this.uniforms,side:2});constructor(e){this.setSettings(e)}updateTime(e){this.uniforms.uTimeSeconds.value=e}setRenderBoundary(e,t){this.uniforms.uGrassRadius.value=e,this.uniforms.uGrassTransitionWidth.value=t}setPlacementSettings(e){let t=y(e),n=h(t),r=g(t);this.uniforms.uGrassZoneRadii.value.set(n.dense,n.medium),this.uniforms.uGrassZoneTransitionWidths.value.set(r.dense,r.medium)}setPlacementLayers(e,t){this.uniforms.uGrassLayerOrigins.value=e,this.uniforms.uGrassLayerSpacings.value=t}setSettings(e){ne(this.uniforms,e),this.uniforms.uMaximumBladeHeightMeters.value=w(e.maximumBladeHeightMeters),this.uniforms.uLineGlow.value=e.lineGlow,this.uniforms.uWindStrength.value=e.windStrength,this.uniforms.uWindSpeed.value=e.windSpeed}dispose(){this.material.dispose()}};function Ie(){return{...n(),uMaximumBladeHeightMeters:{value:.4},uGrassRadius:{value:1},uGrassTransitionWidth:{value:100},uGrassLayerOrigins:{value:[new u,new u,new u]},uGrassLayerSpacings:{value:[1,1,1]},uGrassZoneRadii:{value:new u},uGrassZoneTransitionWidths:{value:new u},uLineGlow:{value:1},uWindStrength:{value:0},uWindSpeed:{value:1}}}var R={lineIntensity:.06,lineSoftness:.04},Le=class{viewDirection=new e;terrain;grassMaterial;grass;constructor(e,t){this.terrain=new ae(e,t,V(t)),this.grassMaterial=new Fe(t),B(this.grassMaterial,t),this.grass=new _e(e,this.grassMaterial.material,z(t)),this.grassMaterial.setPlacementLayers(this.grass.layerOrigins,this.grass.layerSpacings),this.grassMaterial.setPlacementSettings(t.grassPlacement)}get instanceCount(){return this.grass.instanceCount}update(e,t){return this.grassMaterial.updateTime(e),t.getWorldDirection(this.viewDirection),this.grass.update(t.position,this.viewDirection),this.terrain.update(e,t.position)}setSettings(e){this.terrain.setSettings(e),this.terrain.setStyle(V(e)),this.grassMaterial.setSettings(e),this.grassMaterial.setPlacementSettings(e.grassPlacement),B(this.grassMaterial,e),this.grass.setSettings(z(e))}dispose(){this.grass.dispose(),this.grassMaterial.dispose(),this.terrain.dispose()}};function z(e){return{geometryVariant:e.grassGeometryVariant,placement:e.grassPlacement,renderShape:e.renderViewShape}}function B(e,t){let n=y(t.grassPlacement);e.setRenderBoundary(_(n,t.renderViewShape),g(n).far)}function V(e){return{...R,lineIntensity:R.lineIntensity*e.lineGlow}}var H={terrainHeight:24,hillSize:82,terrainWarpMode:`height`,terrainWarpStrength:.72,lineSpacing:14,lineWidth:.3,flowSpeed:7,animationSpeed:1,animationScale:44,animationPattern:`flow`,darkMode:!0,fieldAngleDegrees:325,maximumBladeHeightMeters:.32,grassGeometryVariant:`cross`,grassPlacement:{dense:{extentMeters:50,tuftsPerSquareMeter:12},medium:{extentMeters:200,tuftsPerSquareMeter:.75},far:{extentMeters:1e3,tuftsPerSquareMeter:.04},transitionSoftness:.25},lineGlow:1,renderViewShape:`front-focus`,windStrength:.15,windSpeed:1.2,flightSpeed:35},U=[{id:`volume`,label:`Volumen · 3 Flächen`},{id:`cross`,label:`Kreuz · 2 Flächen`},{id:`single`,label:`Fläche · 1 Fläche`}];function Re(e){return U.some(t=>t.id===e)}var ze=120;function Be(e,t){let n=Ve();He(n),Ye(n.animationPattern),Xe(n.renderViewShape),Ze(n.grassGeometryVariant),Ge(n,e),Je(n,e);let r,i=()=>{let t=qe(n,e);return Ke(n,t),Je(n,t),t},a=()=>{t(i())},o=()=>{let e=i();window.clearTimeout(r),r=window.setTimeout(()=>t(e),ze)},s=()=>{window.clearTimeout(r),r=void 0,t(i())},c=Ue(n);for(let e of c)e.addEventListener(`input`,a);let l=We(n);for(let e of l)e.addEventListener(`input`,o),e.addEventListener(`change`,s);return{setPerformanceStats:e=>Qe(n,e),dispose:()=>{for(let e of c)e.removeEventListener(`input`,a);for(let e of l)e.removeEventListener(`input`,o),e.removeEventListener(`change`,s);window.clearTimeout(r)}}}function Ve(){return{darkMode:X(`dark-mode`),denseZoneRadius:X(`dense-zone-radius`),denseZoneDensity:X(`dense-zone-density`),mediumZoneRadius:X(`medium-zone-radius`),mediumZoneDensity:X(`medium-zone-density`),farZoneRadius:X(`far-zone-radius`),farZoneDensity:X(`far-zone-density`),zoneTransitionSoftness:X(`zone-transition-softness`),grassGeometryVariant:Q(`grass-geometry-variant`),grassHeight:X(`grass-height`),windStrength:X(`wind-strength`),windSpeed:X(`wind-speed`),lineSpacing:X(`line-spacing`),lineWidth:X(`line-width`),lineGlow:X(`line-glow`),renderViewShape:Q(`render-view-shape`),animationPattern:Q(`animation-pattern`),flowSpeed:X(`flow-speed`),animationSpeed:X(`animation-speed`),fieldAngleDegrees:X(`field-angle`),flightSpeed:X(`flight-speed`),outputs:[Z(`dense-zone-radius-value`),Z(`dense-zone-density-value`),Z(`medium-zone-radius-value`),Z(`medium-zone-density-value`),Z(`far-zone-radius-value`),Z(`far-zone-density-value`),Z(`zone-transition-softness-value`),Z(`grass-height-value`),Z(`wind-strength-value`),Z(`wind-speed-value`),Z(`line-spacing-value`),Z(`line-width-value`),Z(`line-glow-value`),Z(`flow-speed-value`),Z(`animation-speed-value`),Z(`field-angle-value`),Z(`flight-speed-value`)],fpsValue:$(`fps-value`),p95Value:$(`p95-value`),drawCallValue:$(`draw-call-value`),triangleValue:$(`triangle-value`),grassInstanceValue:$(`grass-instance-value`)}}function He(e){W(e.denseZoneRadius,e.denseZoneDensity,m.dense),W(e.mediumZoneRadius,e.mediumZoneDensity,m.medium),W(e.farZoneRadius,e.farZoneDensity,m.far),G(e.zoneTransitionSoftness,m.transitionSoftness),G(e.grassHeight,{minimum:C.minimumBladeHeightMeters,maximum:C.maximumBladeHeightMeters})}function W(e,t,n){G(e,n.extentMeters),G(t,n.tuftsPerSquareMeter)}function G(e,t){e.min=String(t.minimum),e.max=String(t.maximum),e.step=`any`}function Ue(e){return[e.darkMode,e.renderViewShape,e.grassGeometryVariant,e.grassHeight,e.windStrength,e.windSpeed,e.lineSpacing,e.lineWidth,e.lineGlow,e.animationPattern,e.flowSpeed,e.animationSpeed,e.fieldAngleDegrees,e.flightSpeed]}function We(e){return[e.denseZoneRadius,e.denseZoneDensity,e.mediumZoneRadius,e.mediumZoneDensity,e.farZoneRadius,e.farZoneDensity,e.zoneTransitionSoftness]}function Ge(e,t){e.darkMode.checked=t.darkMode,Ke(e,t),e.renderViewShape.value=t.renderViewShape,e.grassGeometryVariant.value=t.grassGeometryVariant,e.grassHeight.valueAsNumber=t.maximumBladeHeightMeters,e.windStrength.valueAsNumber=t.windStrength,e.windSpeed.valueAsNumber=t.windSpeed,e.lineSpacing.valueAsNumber=t.lineSpacing,e.lineWidth.valueAsNumber=t.lineWidth,e.lineGlow.valueAsNumber=t.lineGlow,e.animationPattern.value=t.animationPattern,e.flowSpeed.valueAsNumber=t.flowSpeed,e.animationSpeed.valueAsNumber=t.animationSpeed,e.fieldAngleDegrees.valueAsNumber=t.fieldAngleDegrees,e.flightSpeed.valueAsNumber=t.flightSpeed}function Ke(e,t){K(e.denseZoneRadius,e.denseZoneDensity,t.grassPlacement.dense),K(e.mediumZoneRadius,e.mediumZoneDensity,t.grassPlacement.medium),K(e.farZoneRadius,e.farZoneDensity,t.grassPlacement.far),e.zoneTransitionSoftness.valueAsNumber=t.grassPlacement.transitionSoftness}function qe(e,t){let n=e.animationPattern.value;if(!oe(n))throw Error(`Unknown magnetic animation: ${n}`);let r=e.renderViewShape.value;if(!le(r))throw Error(`Unknown grass render shape: ${r}`);let i=e.grassGeometryVariant.value;if(!Re(i))throw Error(`Unknown grass geometry: ${i}`);return{...t,darkMode:e.darkMode.checked,grassPlacement:y({dense:q(e.denseZoneRadius,e.denseZoneDensity),medium:q(e.mediumZoneRadius,e.mediumZoneDensity),far:q(e.farZoneRadius,e.farZoneDensity),transitionSoftness:e.zoneTransitionSoftness.valueAsNumber}),renderViewShape:r,grassGeometryVariant:i,maximumBladeHeightMeters:w(e.grassHeight.valueAsNumber),windStrength:e.windStrength.valueAsNumber,windSpeed:e.windSpeed.valueAsNumber,lineSpacing:e.lineSpacing.valueAsNumber,lineWidth:e.lineWidth.valueAsNumber,lineGlow:e.lineGlow.valueAsNumber,animationPattern:n,flowSpeed:e.flowSpeed.valueAsNumber,animationSpeed:e.animationSpeed.valueAsNumber,fieldAngleDegrees:e.fieldAngleDegrees.valueAsNumber,flightSpeed:e.flightSpeed.valueAsNumber}}function Je(e,t){let n=h(t.grassPlacement),r=_(t.grassPlacement,t.renderViewShape),i=J(t.grassPlacement.far.extentMeters,n.far),a=[J(t.grassPlacement.dense.extentMeters,n.dense),Y(t.grassPlacement.dense.tuftsPerSquareMeter),J(t.grassPlacement.medium.extentMeters,n.medium),Y(t.grassPlacement.medium.tuftsPerSquareMeter),`${i} · Sicht ${r.toFixed(0)} m`,Y(t.grassPlacement.far.tuftsPerSquareMeter),`${(t.grassPlacement.transitionSoftness*100).toFixed(0)} %`,`${t.maximumBladeHeightMeters.toFixed(2)} m`,`${(t.windStrength*100).toFixed(0)} %`,t.windSpeed.toFixed(1),`${t.lineSpacing.toFixed(1)} m`,`${t.lineWidth.toFixed(2)} m`,`${t.lineGlow.toFixed(2)}×`,`${t.flowSpeed.toFixed(1)} m/s`,`${t.animationSpeed.toFixed(2)}×`,`${t.fieldAngleDegrees.toFixed(0)}°`,`${t.flightSpeed.toFixed(0)} m/s`];e.outputs.forEach((e,t)=>{e.value=a[t]??``})}function K(e,t,n){e.valueAsNumber=n.extentMeters,t.valueAsNumber=n.tuftsPerSquareMeter}function q(e,t){return{extentMeters:e.valueAsNumber,tuftsPerSquareMeter:t.valueAsNumber}}function J(e,t){return`+${e.toFixed(0)} m · bis ${t.toFixed(0)} m`}function Y(e){let t=v(e),n=e<1?3:1;return`${e.toFixed(n)} /m² · ${t.toFixed(2)} m`}function Ye(e){e.replaceChildren(...l.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.label,t}))}function Xe(e){e.replaceChildren(...d.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.label,t}))}function Ze(e){e.replaceChildren(...U.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.label,t}))}function Qe(e,t){e.fpsValue.textContent=t.framesPerSecond.toFixed(0),e.p95Value.textContent=`${t.p95Milliseconds.toFixed(1)} ms`,e.drawCallValue.textContent=t.drawCalls.toLocaleString(`de-DE`),e.triangleValue.textContent=t.triangleCount.toLocaleString(`de-DE`),e.grassInstanceValue.textContent=t.grassInstanceCount.toLocaleString(`de-DE`)}function X(e){let t=document.querySelector(`#${e}`);if(!t)throw Error(`Missing input: ${e}`);return t}function Z(e){let t=document.querySelector(`#${e}`);if(!t)throw Error(`Missing output: ${e}`);return t}function Q(e){let t=document.querySelector(`#${e}`);if(!t)throw Error(`Missing select: ${e}`);return t}function $(e){let t=document.getElementById(e);if(!t)throw Error(`Missing element: ${e}`);return t}var $e=.25,et={backgroundColor:`#aebcb4`,darkBackgroundColor:`#010403`,cameraPosition:[15,7,28],cameraTarget:[0,2,-24]};function tt(){let e=document.querySelector(`#scene`);if(!e)throw Error(`Scene canvas is missing.`);return e}function nt(){let e=rt();return e.sceneContext.renderer.setAnimationLoop(t=>{it(e,t)}),()=>ot(e)}function rt(){let e=tt(),t=i(e,et);t.setDarkMode(H.darkMode);let n=new Le(t.scene,H),o=new re({camera:t.camera,canvas:e,renderer:t.renderer,speed:H.flightSpeed}),s=Be(H,e=>{n.setSettings(e),t.setDarkMode(e.darkMode),o.setSpeed(e.flightSpeed)}),c=new r;return c.connect(document),{sceneContext:t,grassView:n,flightControls:o,frameMetrics:new a,timer:c,ui:s,performanceElapsedSeconds:$e}}function it(e,t){e.timer.update(t);let n=Math.min(e.timer.getDelta(),.05);e.flightControls.update(n);let r=e.grassView.update(e.timer.getElapsed(),e.sceneContext.camera);e.sceneContext.setViewDistance(r),e.sceneContext.renderer.render(e.sceneContext.scene,e.sceneContext.camera),at(e,n)}function at(e,t){e.frameMetrics.recordFrame(t),e.performanceElapsedSeconds+=t,!(e.performanceElapsedSeconds<$e)&&(e.performanceElapsedSeconds=0,e.ui.setPerformanceStats({framesPerSecond:e.frameMetrics.averageFramesPerSecond,p95Milliseconds:e.frameMetrics.p95Milliseconds,drawCalls:e.sceneContext.renderer.info.render.calls,triangleCount:e.sceneContext.renderer.info.render.triangles,grassInstanceCount:e.grassView.instanceCount}))}function ot(e){e.sceneContext.renderer.setAnimationLoop(null),e.ui.dispose(),e.flightControls.dispose(),e.timer.dispose(),e.grassView.dispose(),e.sceneContext.dispose()}var st=nt();window.addEventListener(`pagehide`,st,{once:!0});