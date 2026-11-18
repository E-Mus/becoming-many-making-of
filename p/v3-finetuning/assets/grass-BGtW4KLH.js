import{A as e,F as t,H as n,Nn as r,U as i,h as a,pt as o,tr as s}from"./three.core-6hjS66u_.js";import{a as c,i as l,o as u,t as d}from"./wind-Dz-lxrha.js";var f=`/*
 * Purpose: Shade grass with one opaque unlit vertical color gradient.
 * Context: The landscape needs readable grass without lights, textures, or blending.
 * Responsibility: Color every tuft from its root to its tip.
 * Boundary: Sense responses are injected by the composition root, not authored here.
 *
 * The root-to-tip gradient is this module's own color. It reaches the frame
 * only below full sense intensity: a sense effect injected after
 * <color_fragment> takes \`diffuseColor\` from here and returns its own.
 */

#include <common>

uniform vec3 grassRootColor;
uniform vec3 grassTipColor;

varying float grassHeightProgress;

void main() {
  vec4 diffuseColor = vec4(
    mix(grassRootColor, grassTipColor, grassHeightProgress),
    1.0
  );

  #include <color_fragment>

  gl_FragColor = diffuseColor;

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,p=`/*
 * Purpose: Place deterministic grass tufts and animate their tips on the GPU.
 * Context: Streamed CPU work supplies stable roots while ordinary frames update only time.
 * Responsibility: Apply per-tuft variation, rotation, height, and opaque wind deformation.
 * Boundary: World-surface sampling and chunk recycling remain in TypeScript.
 *
 * The three.js chunk includes are this module's material-effect hook. A sense
 * effect injects its declarations after <common> and its call after
 * <project_vertex>, exactly as it does in the built-in material passes, so
 * Grass answers to Echo Depth and Thermal Perception without either module
 * knowing that grass is not an ordinary instanced surface.
 */

#include <common>

attribute vec4 grassInstance;

uniform float grassTime;
uniform float grassMeadowHeight;
uniform float grassShrubSlopeHeightScale;
uniform vec2 grassWindDirection;
uniform float grassWindStrength;
uniform float grassWindSpeed;

varying float grassHeightProgress;

const float TAU = 6.28318530718;

vec2 rotateGrass(vec2 value, float angle) {
  float sine = sin(angle);
  float cosine = cos(angle);
  return mat2(cosine, -sine, sine, cosine) * value;
}

void main() {
  if (grassInstance.w < 0.0) {
    grassHeightProgress = 0.0;
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  float zoneHeightScale = mix(
    1.0,
    grassShrubSlopeHeightScale,
    step(1.0, grassInstance.w)
  );
  float seed = fract(grassInstance.w);
  float heightVariation = mix(0.4, 1.0, fract(seed * 43.17));
  float tuftHeight = grassMeadowHeight * zoneHeightScale * heightVariation;
  vec2 localPosition = rotateGrass(position.xz, seed * TAU) * tuftHeight;
  float bladeHeight = position.y * tuftHeight;

  float windPhase = dot(grassInstance.xz, vec2(0.12, 0.09));
  windPhase += grassTime * grassWindSpeed + seed * TAU;
  float wind = sin(windPhase);
  wind += sin(windPhase * 0.37 - grassTime * grassWindSpeed * 0.43) * 0.32;
  float tipWeight = position.y * position.y;
  vec2 windOffset = grassWindDirection * wind * grassWindStrength *
    tuftHeight * tipWeight;

  // The grass mesh never leaves the world origin, so a tuft's placement is
  // already world space. Handing it to <project_vertex> as \`transformed\`
  // keeps one projection path and leaves every sense effect the \`mvPosition\`
  // and world position it measures against.
  vec3 transformed = vec3(
    grassInstance.x + localPosition.x + windOffset.x,
    grassInstance.y + bladeHeight,
    grassInstance.z + localPosition.y + windOffset.y
  );

  grassHeightProgress = position.y;

  #include <project_vertex>
}
`,m=4,h=.32,g=4294967296,_=-1,v=1,y=60;function b({parameters:t,chunkSize:r,chunkSlotCount:i,worldSurface:a,effects:s=[]}){N(t);let c=P(t),u=Math.max(1,Math.round(r*Math.sqrt(c))),d=u**2,f=d*m,p=new Float32Array(f*i),h=new n(p,m);h.setUsage(e);let g=T(h,d,i),_=E(t);l(s,_);let v=new o(g,_);return v.frustumCulled=!1,v.visible=!1,v.name=`grass-field`,{mesh:v,parameters:t,chunkSize:r,maximumTuftsPerSquareMeter:c,tuftsPerSide:u,tuftsPerChunk:d,valuesPerChunk:f,worldSurface:a,renderedInstances:p,instanceAttribute:h,updateAnimation:e=>{let t=_.uniforms.grassTime;t&&(t.value=(Number(t.value)+e)%y)}}}function x(e,t){for(let n of t){let t=S(n);for(;!C(e,t););}e.instanceAttribute.clearUpdateRanges()}function S(e){return{assignment:e,nextRow:0}}function C(e,t){return D(e,t.assignment,t.nextRow),t.nextRow+=1,t.nextRow<e.tuftsPerSide?!1:(j(e,t.assignment),!0)}function w(e){e.mesh.geometry.dispose(),e.mesh.material.dispose()}function T(e,n,r){let a=h*.5,o=[-.16,0,0,a,0,0,0,1,0,0,0,-.16,0,0,a,0,1,0],s=new i;return s.setAttribute(`position`,new t(o,3)),s.setAttribute(`grassInstance`,e),s.instanceCount=n*r,s}function E(e){let t=e.zones.meadow?.bladeHeightMeters,n=e.zones.shrubSlope?.bladeHeightMeters,i=t??n??1;return new r({vertexShader:p,fragmentShader:f,side:2,uniforms:{grassTime:{value:0},grassMeadowHeight:{value:i},grassShrubSlopeHeightScale:{value:(n??i)/i},grassWindDirection:{value:new s(...d.directionXZ)},grassWindStrength:{value:d.strength},grassWindSpeed:{value:d.speed},grassRootColor:{value:new a(e.rootColor)},grassTipColor:{value:new a(e.tipColor)}}})}function D(e,t,n){for(let r=0;r<e.tuftsPerSide;r+=1)O(e,t,r,n)}function O(e,t,n,r){let i=e.chunkSize/e.tuftsPerSide,a=t.chunkX*e.tuftsPerSide+n,o=t.chunkZ*e.tuftsPerSide+r,s=M(a,o,0),c=M(a,o,1)-.5,l=M(a,o,2)-.5,u=t.originX+(n+.5+c*.7)*i,d=t.originZ+(r+.5+l*.7)*i,f=e.worldSurface.groundYAt(u,d),p=e.worldSurface.zoneAt(u,d),h=(t.slotIndex*e.tuftsPerChunk+r*e.tuftsPerSide+n)*m;e.renderedInstances[h]=u,e.renderedInstances[h+1]=f,e.renderedInstances[h+2]=d,e.renderedInstances[h+3]=k(e,p,s,a,o)}function k(e,t,n,r,i){let a=A(e.parameters,t);if(!a)return _;let o=a.tuftsPerSquareMeter/e.maximumTuftsPerSquareMeter;if(M(r,i,3)>=o)return _;switch(t){case`meadow`:return n;case`shrubSlope`:return n+v;case`water`:case`coniferForest`:case`deciduousForest`:return _}}function A(e,t){if(t===`meadow`||t===`shrubSlope`)return e.zones[t]}function j(e,t){e.instanceAttribute.addUpdateRange(t.slotIndex*e.valuesPerChunk,e.valuesPerChunk),e.instanceAttribute.needsUpdate=!0}function M(e,t,n){let r=Math.imul(e,73856093);return r^=Math.imul(t,19349663),r^=Math.imul(n+1,83492791),r=Math.imul(r^r>>>16,2246822519),r=Math.imul(r^r>>>13,3266489917),(r>>>0)/g}function N(e){let t=Object.entries(e.zones);if(t.length===0)throw Error(`Grass requires at least one configured zone`);for(let[e,n]of t)F(n.tuftsPerSquareMeter,`${e} grass density`),F(n.bladeHeightMeters,`${e} grass height`);let n=e.zones.meadow?.bladeHeightMeters,r=e.zones.shrubSlope?.bladeHeightMeters;if(n!==void 0&&r!==void 0&&r>n)throw RangeError(`Shrub-slope grass must be no taller than meadow grass`)}function P(e){return Math.max(...Object.values(e.zones).map(({tuftsPerSquareMeter:e})=>e))}function F(e,t){if(!(Number.isFinite(e)&&e>0))throw RangeError(`${t} must be a positive finite number`)}var I=2,L=1,R=64;function z(e){let t={currentStream:void 0};return{load:()=>B(t,e),activate:()=>U(t,!0),update:n=>V(t,e,n),deactivate:()=>U(t,!1),unload:()=>W(t,e.scene)}}function B(e,t){let n=G(t),r=n.chunkWindow.update(t.viewpoint.worldPosition.x,t.viewpoint.worldPosition.z);x(n.field,r),n.field.mesh.visible=!1,t.scene.add(n.field.mesh),e.currentStream=n}function V(e,{viewpoint:t,streamQueue:n},r){let i=e.currentStream;if(!i)return;i.field.updateAnimation(r);let a=i.chunkWindow.update(t.worldPosition.x,t.worldPosition.z);for(let t of a){let r=H(e,i,t);r&&n.enqueue(r)}}function H(e,t,n){let r=t.slotJobKeys[n.slotIndex];if(!r)return;let i=S(n);return{key:r,isCurrent:()=>e.currentStream===t&&t.chunkWindow.isCurrent(n),runStep:()=>C(t.field,i)}}function U(e,t){let n=e.currentStream;n&&(n.field.mesh.visible=t)}function W(e,t){let n=e.currentStream;n&&(e.currentStream=void 0,t.remove(n.field.mesh),w(n.field))}function G(e){let t=u(I),n=Math.min(e.viewpoint.viewDistanceMeters,R),r=Math.max(1,Math.ceil(n/t)),i=new c({level:I,radius:r+L});return{chunkWindow:i,field:b({parameters:e.preset,chunkSize:t,chunkSlotCount:i.slotCount,worldSurface:e.worldSurface,effects:e.effects}),slotJobKeys:Array.from({length:i.slotCount},()=>({}))}}export{z as createGrassModule};