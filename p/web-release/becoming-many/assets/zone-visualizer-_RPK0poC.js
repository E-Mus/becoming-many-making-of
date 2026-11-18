import{_ as e,_t as t}from"./three.core-SeG8ZZoG.js";var n=`/*
 * Purpose: Convert interpolated world-zone conditions into hard diagnostic colors.
 * Context: The test view must expose zone placement without grid-shaped vertex boundaries.
 * Responsibility: Apply the same water, slope, and forest priority used by World Surface.
 * Boundary: Natural blends, textures, lighting, and authored zone values live elsewhere.
 */

varying vec4 interpolatedZoneConditions;

uniform float zoneConiferForestThreshold;
uniform float zoneDeciduousForestThreshold;
uniform float zoneShrubSlopeThreshold;
uniform vec3 zoneWaterColor;
uniform vec3 zoneMeadowColor;
uniform vec3 zoneConiferForestColor;
uniform vec3 zoneDeciduousForestColor;
uniform vec3 zoneShrubSlopeColor;

vec3 getZoneColor() {
  float riverChannelMarginMeters = interpolatedZoneConditions.x;
  float waterDepthMeters = interpolatedZoneConditions.y;
  float groundSlope = interpolatedZoneConditions.z;
  float forestRegionValue = interpolatedZoneConditions.w;

  if (riverChannelMarginMeters >= 0.0 && waterDepthMeters > 0.0) {
    return zoneWaterColor;
  }
  if (groundSlope >= zoneShrubSlopeThreshold) {
    return zoneShrubSlopeColor;
  }
  if (forestRegionValue <= zoneConiferForestThreshold) {
    return zoneConiferForestColor;
  }
  if (forestRegionValue >= zoneDeciduousForestThreshold) {
    return zoneDeciduousForestColor;
  }
  return zoneMeadowColor;
}
`,r=`/*
 * Purpose: Pass continuous zone conditions from Terrain to each rendered pixel.
 * Context: Hard zone boundaries should cross triangles instead of following vertex colors.
 * Responsibility: Forward one compact vec4 without changing terrain positions.
 * Boundary: World Surface calculates values; the fragment shader classifies them.
 */

attribute vec4 zoneConditions;
varying vec4 interpolatedZoneConditions;

void passZoneConditionsToFragment() {
  interpolatedZoneConditions = zoneConditions;
}
`,i=`#include <common>`,a=`#include <begin_vertex>`,o=`vec4 diffuseColor = vec4( diffuse, opacity );`,s=`zone-visualizer-v1`,c={water:5215170,meadow:5155179,coniferForest:14724415,deciduousForest:14240581,shrubSlope:10177994};function l(l,u){let d=new t({color:16777215});return d.onBeforeCompile=t=>{t.uniforms.zoneConiferForestThreshold={value:u.coniferForestThreshold},t.uniforms.zoneDeciduousForestThreshold={value:u.deciduousForestThreshold},t.uniforms.zoneShrubSlopeThreshold={value:u.shrubSlopeThreshold},t.uniforms.zoneWaterColor={value:new e(c.water)},t.uniforms.zoneMeadowColor={value:new e(c.meadow)},t.uniforms.zoneConiferForestColor={value:new e(c.coniferForest)},t.uniforms.zoneDeciduousForestColor={value:new e(c.deciduousForest)},t.uniforms.zoneShrubSlopeColor={value:new e(c.shrubSlope)},t.vertexShader=t.vertexShader.replace(i,`${i}\n${r}`).replace(a,`${a}\npassZoneConditionsToFragment();`),t.fragmentShader=t.fragmentShader.replace(i,`${i}\n${n}`).replace(o,`vec4 diffuseColor = vec4(getZoneColor(), opacity);`)},d.customProgramCacheKey=()=>s,{material:d,conditionsAt:l.zoneConditionsAt}}export{l as createZoneVisualizer};