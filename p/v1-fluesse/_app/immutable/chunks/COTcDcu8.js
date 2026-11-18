import{f,dH as h,aB as v,B as S,t as p,q as g,aC as m,eQ as w}from"./DiSDQgbj.js";const M={radius:500,colors:[655392,1704e3,4853888,16744544],animationSpeed:0},T=`
varying vec3 vWorldPosition;
void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function P(t){return`
uniform vec3 uColors[${t}];
uniform float uTime;
uniform float uAnimSpeed;
varying vec3 vWorldPosition;

void main() {
  // Normalize Y to [0..1] based on world position
  float t = normalize(vWorldPosition).y * 0.5 + 0.5;

  // Optional subtle animation: shift gradient over time
  t = fract(t + uTime * uAnimSpeed);

  // N-stop gradient interpolation
  float segment = t * ${(t-1).toFixed(1)};
  int idx = int(floor(segment));
  float frac = fract(segment);

  vec3 col = uColors[0];
  ${Array.from({length:t-1},(e,o)=>`if (idx == ${o}) col = mix(uColors[${o}], uColors[${o+1}], frac);`).join(`
  `)}

  gl_FragColor = vec4(col, 1.0);
}
`}function C(t){const e={...M,...t},o=e.colors.map(s=>new f(s)),n=new h(e.radius,4);n.scale(-1,1,1);const r=new v({vertexShader:T,fragmentShader:P(o.length),uniforms:{uColors:{value:o},uTime:{value:0},uAnimSpeed:{value:e.animationSpeed}},side:S,depthWrite:!1}),i=new p(n,r);return i.renderOrder=-1,i.frustumCulled=!1,i}function _(t,e){const o=t.material;o.uniforms.uTime&&(o.uniforms.uTime.value=e)}const A={count:1500,radius:400,minSize:.5,maxSize:2.5,color:16777215,twinkleSpeed:1},x=`
attribute float aSize;
attribute float aPhase;
uniform float uTime;
uniform float uTwinkleSpeed;
varying float vBrightness;

void main() {
  vBrightness = 0.5 + 0.5 * sin(uTime * uTwinkleSpeed + aPhase);
  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * (300.0 / -mvPos.z);
  gl_Position = projectionMatrix * mvPos;
}
`,y=`
uniform vec3 uColor;
varying float vBrightness;

void main() {
  // Soft circular point
  float dist = length(gl_PointCoord - vec2(0.5));
  float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
  gl_FragColor = vec4(uColor * vBrightness, alpha);
}
`;function b(t){const e={...A,...t},o=new Float32Array(e.count*3),n=new Float32Array(e.count),r=new Float32Array(e.count);for(let a=0;a<e.count;a++){const d=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),u=e.radius*(.8+Math.random()*.2);o[a*3]=u*Math.sin(l)*Math.cos(d),o[a*3+1]=u*Math.sin(l)*Math.sin(d),o[a*3+2]=u*Math.cos(l),n[a]=e.minSize+Math.random()*(e.maxSize-e.minSize),r[a]=Math.random()*Math.PI*2}const i=new g;i.setAttribute("position",new m(o,3)),i.setAttribute("aSize",new m(n,1)),i.setAttribute("aPhase",new m(r,1));const s=new v({vertexShader:x,fragmentShader:y,uniforms:{uTime:{value:0},uColor:{value:new f(e.color)},uTwinkleSpeed:{value:e.twinkleSpeed}},transparent:!0,depthWrite:!1}),c=new w(i,s);return c.frustumCulled=!1,c}function F(t,e){const o=t.material;o.uniforms.uTime&&(o.uniforms.uTime.value=e)}export{b as a,F as b,C as c,_ as u};
