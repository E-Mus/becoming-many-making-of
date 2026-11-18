const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/organ-runtime-Cl9Ag_-R.js","assets/Tone-D55wj6dz.js","assets/rolldown-runtime-CbXtAM7H.js","assets/Tone-imY4xajJ.js","assets/zone-visualizer-_RPK0poC.js","assets/three.core-SeG8ZZoG.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{n as t,t as n}from"./level-routes-m5xJsTf1.js";import{t as r}from"./preload-helper-Czpn1I53.js";import{$ as i,$n as a,A as o,At as s,Bn as c,Bt as l,C as u,Cn as d,Ct as f,D as p,Dn as m,Dt as h,E as g,Et as _,F as v,Fn as y,Ft as b,G as x,Gn as S,H as C,Hn as w,Ht as T,I as E,In as D,It as O,J as ee,Jn as te,K as k,Kn as ne,Kt as re,L as A,Ln as j,Lt as M,M as N,Mt as ie,N as ae,Nt as oe,O as se,On as ce,Ot as le,P as ue,Pn as P,Pt as de,Q as fe,R as pe,Rn as me,Rt as he,S as ge,Sr as _e,St as ve,T as ye,Tn as be,Tt as xe,U as Se,Un as Ce,V as we,Vn as Te,W as Ee,Wn as F,X as De,Xn as Oe,Y as ke,Yn as I,Z as Ae,Zn as je,_ as L,_r as R,_t as z,a as Me,ar as Ne,at as Pe,b as Fe,br as Ie,bt as Le,c as Re,cr as ze,ct as Be,d as B,dr as Ve,dt as He,et as Ue,f as We,fr as Ge,ft as Ke,g as qe,gr as Je,gt as Ye,h as Xe,hr as Ze,ht as V,i as Qe,ir as $e,it as et,j as tt,jt as nt,k as rt,kn as it,kt as at,l as ot,lr as st,lt as ct,m as lt,mr as ut,mt as H,n as dt,nr as ft,nt as pt,o as mt,or as U,ot as ht,pr as gt,pt as W,qn as _t,qt as vt,r as yt,rr as bt,rt as xt,s as St,sr as Ct,st as wt,tr as Tt,tt as Et,u as Dt,ur as Ot,ut as kt,v as G,vr as At,vt as jt,w as Mt,wn as Nt,wt as Pt,x as Ft,xr as It,xt as Lt,y as Rt,yr as zt,yt as Bt,z as Vt,zt as Ht}from"./three.core-SeG8ZZoG.js";import{t as Ut}from"./Tone-D55wj6dz.js";import{o as Wt}from"./dom-CmLQVD4h.js";var Gt=[`en`,`de`],Kt=`en`,qt={prologue:{durationSeconds:{en:72.37,de:71.92}},scent:{durationSeconds:{en:45,de:47.02}},echo:{durationSeconds:{en:27.01,de:28.56}},motion:{durationSeconds:{en:49.46,de:58.38}},thermal:{durationSeconds:{en:41.17,de:44.63}},magnetic:{durationSeconds:{en:51,de:49.51}},finale:{durationSeconds:{en:105.14,de:106.89}},return:{durationSeconds:{en:69.56,de:73.85}}};function Jt(e){return Gt.find(t=>t===e)??Kt}function Yt(e,t){return`/becoming-many-making-of/p/web-release/becoming-many/audio/narration/${t}/${e}.mp3`}function Xt(e,t){return qt[e].durationSeconds[t]}var Zt=[`scent`,`echo`,`motion`,`thermal`,`magnetic`,`connections`];function Qt(e,t){return t===`scent`?+!!e.scentParticles:t===`echo`?e.echoDepth?.intensity??0:e[t]?.intensity??0}function $t(e){return e.atSeconds-(e.worldLeadSeconds??0)}function en(e,t){let n=e.narration[0];for(let r of e.narration){if($t(r)>t)break;n=r}return n?.level}function tn(e,t,n){let r=en(e,n);return r===void 0?void 0:t[r]}function nn(e,t){let n=e.narration[0],r=e.narration[0];for(let i of e.narration){if($t(i)>t)break;r=n,n=i}if(!n||!r)return;let i=t-$t(n),a=i>=4?1:Math.max(i/4,0);return{from:r.level,to:n.level,progress:a}}function rn(e,t,n,r){let i=0,a=0,o=0;for(let s of e.narration){let e=$t(s);if(e>r)break;a=on(i,a,o,e),i=e,o=Qt(t[s.level],n)}return on(i,a,o,r)}function an(e,t,n,r){return rn(e,t,n,r)>0?`live`:rn(e,t,n,r+20)>0?`warming`:`away`}function on(e,t,n,r){let i=r-e;return i>=4?n:i<=0?t:t+(n-t)*i/4}var sn={backgroundColor:16250871,viewDistance:128,maximumGroundClearanceMeters:20,airParticles:{density:{particlesPerChunk:270},appearance:{color:2105638,sizeMeters:.075},motion:{horizontalAmplitudeMeters:.12,verticalAmplitudeMeters:.24,speedMultiplier:1}},scentParticles:{plants:{conifer:{color:5624250,particlesPerPlant:84,emissionBottomFraction:.25,emissionTopFraction:1,emissionRadiusFraction:.34,riseHeightMeters:2.2},deciduous:{color:7002845,particlesPerPlant:84,emissionBottomFraction:.45,emissionTopFraction:1,emissionRadiusFraction:.46,riseHeightMeters:2.2},birch:{color:11634114,particlesPerPlant:72,emissionBottomFraction:.5,emissionTopFraction:1,emissionRadiusFraction:.38,riseHeightMeters:2},bush:{color:5291649,particlesPerPlant:40,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.85,riseHeightMeters:.7},floweringBush:{color:11036103,particlesPerPlant:52,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.95,riseHeightMeters:.9},deadWood:{color:11706751,particlesPerPlant:18,emissionBottomFraction:.2,emissionTopFraction:.9,emissionRadiusFraction:.28,riseHeightMeters:.5}},animals:{signatures:{deer:{color:16628564},stag:{color:15699772},fox:{color:16622493},rat:{color:14193052}},printsPerSecond:20,lifetimeSeconds:25,emissionBottomFraction:.15,emissionTopFraction:.85,emissionRadiusFraction:.35,riseHeightMeters:.8,windResponseMeters:4},appearance:{sizeMeters:.16},motion:{riseDurationSeconds:10,driftAmplitudeMeters:1.3,speedMultiplier:1,windResponseMeters:7}},echoDepth:{intensity:1,nearDistanceMeters:6,farDistanceMeters:96,colors:{nearColor:1052688,nearShadeColor:4802889,midColor:9803157,farColor:14869218,hazeColor:16250871}},terrain:{opacity:1},grassClipmap:{tuftsPerSquareMeter:21.85,fullDensityRadiusMeters:14,bladeHeightMeters:3,bladeWidthMeters:.2,colors:{rootColor:1451020,tipColor:9749334}},vegetation:{colors:{trunkColor:1052688,leafColor:1513239,leafAccentColor:4802889,flowerColor:9803157},instancesPerHectareByZone:{meadow:12,coniferForest:150,deciduousForest:150,shrubSlope:70}},rocks:{colors:{darkColor:1513239,lightColor:4802889},instancesPerHectareByZone:{meadow:8,coniferForest:10,deciduousForest:10,shrubSlope:60}},motion:{intensity:1,swarms:{swarmCount:12,fliesPerSwarm:60,flightSpeedMultiplier:.93},appearance:{flyColor:2171187,flySizeMeters:.12,trailColor:3221336,trailSizeMeters:.085,trailOpacity:1},trail:{lifetimeFrames:14,expansionDistanceMeters:.22,motionGain:26,fadePower:1.6,density:1},birds:{flockCount:5,birdsPerFlock:12,flightSpeedMetersPerSecond:7.44,trailLifetimeFrames:40,flightHeightMeters:14,appearance:{trailColor:16473878,trailSizeMeters:.18,trailOpacity:1},body:{lengthMeters:.26,color:1513239}}},animals:{colors:{furColor:1513239,lightFurColor:4802889,darkFurColor:1052688,featureColor:1052688}},snakes:{crawlingShare:.56,color:16473878},thermal:{intensity:1,radiusMeters:35,edgeFeatherMeters:12,carriedColorBlend:.42,colors:{coldestColor:919080,coldColor:469885,coolColor:1862795,warmColor:13965706,hotColor:16473878,hottestColor:16567875},surfaces:{vegetationWarmth:.76,vegetationWarmthSpread:.05,vegetationHeightWarmthPerMeter:-.06,vegetationAxisWarmthPerMeter:-.11,vegetationTextureWarmth:.26,vegetationContrast:.34,undergrowthWarmth:.42,undergrowthWarmthSpread:.07,undergrowthHeightWarmthPerMeter:-.09,undergrowthAxisWarmthPerMeter:-.16,undergrowthTextureWarmth:.28,undergrowthContrast:.5,rockWarmth:.2,rockWarmthSpread:.18,rockHeightWarmthPerMeter:.05,rockAxisWarmthPerMeter:-.03,rockTextureWarmth:.24,rockContrast:.52,grassWarmth:.34,grassTextureWarmth:.28,grassContrast:.5},bands:{terrain:{floorWarmth:0,ceilingWarmth:.48},vegetation:{floorWarmth:.16,ceilingWarmth:.82},undergrowth:{floorWarmth:0,ceilingWarmth:.6},rocks:{floorWarmth:0,ceilingWarmth:.48},grass:{floorWarmth:0,ceilingWarmth:.54},animals:{floorWarmth:.72,ceilingWarmth:1}},terrainTextureWarmth:.28,terrainContrast:.7,actorWarmth:.96,actorExtremityFalloff:.2,actorTextureWarmth:.07,actorContrast:.3,heatEmission:{strength:.05,reachPerBodyHeight:1.2}},magnetic:{intensity:1,fieldDirectionDegreesFromNorth:0,fieldElevationDegrees:7.5,colors:{northColor:0,southColor:16777215,zenithColor:12900342}},connections:{intensity:1,webRadiusMeters:30,pulseSpeedMetersPerSecond:1.5,sources:{vegetation:{nodeColor:10862019,weight:1},scentEmitters:{nodeColor:13657984,weight:1},rocks:{nodeColor:2698837,weight:.25},soil:{nodeColor:15918035,weight:.2}},colors:{depthColor:6830938,pulseColor:14917204}}};function cn(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ln(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new L(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new L(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new L(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new L(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},un={basic:{uniforms:zt([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:zt([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new L(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:zt([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new L(0)},specular:{value:new L(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:zt([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new L(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:zt([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new L(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:zt([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:zt([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:zt([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:zt([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:zt([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:zt([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:zt([q.common,q.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:zt([q.lights,q.fog,{color:{value:new L(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};un.physical={uniforms:zt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new L(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new L(0)},specularColor:{value:new L(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var dn={r:0,b:0,g:0},fn=new V,pn=new H;pn.set(-1,0,0,0,1,0,0,0,1);function mn(e,t,n,r,i,a){let o=new L(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Ye(new Dt(1,1,1),new j({name:`BackgroundCubeMaterial`,uniforms:Ge(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(fn.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pn),l.material.toneMapped=G.getTransfer(i.colorSpace)!==y,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Ye(new oe(2,2),new j({name:`BackgroundMaterial`,uniforms:Ge(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=G.getTransfer(i.colorSpace)!==y,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(dn,R(e)),n.buffers.color.setClear(dn.r,dn.g,dn.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function hn(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function gn(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function _n(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(It(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&It(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function vn(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ie,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var yn=4,bn=[.125,.215,.35,.446,.526,.582],xn=20,Sn=256,Cn=new s,wn=new L,Tn=null,En=0,Dn=0,On=!1,kn=new U,An=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=kn}=i;Tn=this._renderer.getRenderTarget(),En=this._renderer.getActiveCubeFace(),Dn=this._renderer.getActiveMipmapLevel(),On=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ln(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=In(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tn,En,Dn),this._renderer.xr.enabled=On,e.scissorTest=!1,Nn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tn=this._renderer.getRenderTarget(),En=this._renderer.getActiveCubeFace(),Dn=this._renderer.getActiveMipmapLevel(),On=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:C,format:re,colorSpace:Be,depthBuffer:!1},r=Mn(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mn(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jn(r)),this._blurMaterial=Fn(r,e,t),this._ggxMaterial=Pn(r,e,t)}return r}_compileMaterial(e){let t=new Ye(new We,e);this._renderer.compile(t,Cn)}_sceneToCubeUV(e,t,n,r,i){let a=new nt(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(wn),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new Dt,new z({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(wn),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Nn(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ln()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=In());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Nn(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Cn)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-yn?n-d+yn:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Nn(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Cn),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Nn(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Cn)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&Ze(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):xn;m>xn&&It(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xn}`);let h=[],g=0;for(let e=0;e<xn;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Nn(t,3*v*(r>_-yn?r-_+yn:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Cn)}};function jn(e){let t=[],n=[],r=[],i=e,a=e-yn+1+bn.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-yn?s=bn[o-e+yn-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new We;h.setAttribute(`position`,new B(f,3)),h.setAttribute(`uv`,new B(p,2)),h.setAttribute(`faceIndex`,new B(m,1)),r.push(new Ye(h,null)),i>yn&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Mn(e,t,n){let r=new Ot(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Nn(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Pn(e,t,n){return new j({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Sn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fn(e,t,n){let r=new Float32Array(xn),i=new U(0,1,0);return new j({name:`SphericalGaussianBlur`,defines:{n:xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function In(){return new j({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Rn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ln(){return new j({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var zn=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ge(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Dt(5,5,5),i=new j({name:`CubemapFromEquirect`,uniforms:Ge(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Ye(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Pe),new Fe(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Bn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new zn(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new An(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new An(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Vn(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&_e(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Hn(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?I:te)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Un(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Wn(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Ze(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Gn(e,t,n){let r=new WeakMap,i=new Ct;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ye(h,p,m,u);g.type=pe,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Ne(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Kn(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var qn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Jn(e,t,n,r,i,a){let c=new Ot(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new o(t,n):void 0}),l=new Ot(t,n,{type:C,depthBuffer:!1,stencilBuffer:!1}),u=new We;u.setAttribute(`position`,new A([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new A([0,2,0,0,2,0],2));let d=new be({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ye(u,d),p=new s(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){c.setSize(e,t),l.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=c.width,n=c.height;for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(c.width!==e||c.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(c),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=c,r=l;for(let i=0;i<y.length;i++){let a=y[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},G.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=qn[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),l.dispose(),u.dispose(),d.dispose()}}var Yn=new S,Xn=new o(1,1),Zn=new ye,Qn=new Mt,$n=new ge,er=[],tr=[],nr=new Float32Array(16),rr=new Float32Array(9),ir=new Float32Array(4);function ar(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=er[i];if(a===void 0&&(a=new Float32Array(i),er[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function or(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function sr(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function cr(e,t){let n=tr[t];n===void 0&&(n=new Int32Array(t),tr[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function lr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ur(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(or(n,t))return;e.uniform2fv(this.addr,t),sr(n,t)}}function dr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(or(n,t))return;e.uniform3fv(this.addr,t),sr(n,t)}}function fr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(or(n,t))return;e.uniform4fv(this.addr,t),sr(n,t)}}function pr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(or(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),sr(n,t)}else{if(or(n,r))return;ir.set(r),e.uniformMatrix2fv(this.addr,!1,ir),sr(n,r)}}function mr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(or(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),sr(n,t)}else{if(or(n,r))return;rr.set(r),e.uniformMatrix3fv(this.addr,!1,rr),sr(n,r)}}function hr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(or(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),sr(n,t)}else{if(or(n,r))return;nr.set(r),e.uniformMatrix4fv(this.addr,!1,nr),sr(n,r)}}function gr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function _r(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(or(n,t))return;e.uniform2iv(this.addr,t),sr(n,t)}}function vr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(or(n,t))return;e.uniform3iv(this.addr,t),sr(n,t)}}function yr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(or(n,t))return;e.uniform4iv(this.addr,t),sr(n,t)}}function br(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function xr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(or(n,t))return;e.uniform2uiv(this.addr,t),sr(n,t)}}function Sr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(or(n,t))return;e.uniform3uiv(this.addr,t),sr(n,t)}}function Cr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(or(n,t))return;e.uniform4uiv(this.addr,t),sr(n,t)}}function wr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Xn.compareFunction=n.isReversedDepthBuffer()?518:515,a=Xn):a=Yn,n.setTexture2D(t||a,i)}function Tr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Qn,i)}function Er(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||$n,i)}function Dr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Zn,i)}function Or(e){switch(e){case 5126:return lr;case 35664:return ur;case 35665:return dr;case 35666:return fr;case 35674:return pr;case 35675:return mr;case 35676:return hr;case 5124:case 35670:return gr;case 35667:case 35671:return _r;case 35668:case 35672:return vr;case 35669:case 35673:return yr;case 5125:return br;case 36294:return xr;case 36295:return Sr;case 36296:return Cr;case 35678:case 36198:case 36298:case 36306:case 35682:return wr;case 35679:case 36299:case 36307:return Tr;case 35680:case 36300:case 36308:case 36293:return Er;case 36289:case 36303:case 36311:case 36292:return Dr}}function kr(e,t){e.uniform1fv(this.addr,t)}function Ar(e,t){let n=ar(t,this.size,2);e.uniform2fv(this.addr,n)}function jr(e,t){let n=ar(t,this.size,3);e.uniform3fv(this.addr,n)}function Mr(e,t){let n=ar(t,this.size,4);e.uniform4fv(this.addr,n)}function Nr(e,t){let n=ar(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Pr(e,t){let n=ar(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Fr(e,t){let n=ar(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ir(e,t){e.uniform1iv(this.addr,t)}function Lr(e,t){e.uniform2iv(this.addr,t)}function Rr(e,t){e.uniform3iv(this.addr,t)}function zr(e,t){e.uniform4iv(this.addr,t)}function Br(e,t){e.uniform1uiv(this.addr,t)}function Vr(e,t){e.uniform2uiv(this.addr,t)}function Hr(e,t){e.uniform3uiv(this.addr,t)}function Ur(e,t){e.uniform4uiv(this.addr,t)}function Wr(e,t,n){let r=this.cache,i=t.length,a=cr(n,i);or(r,a)||(e.uniform1iv(this.addr,a),sr(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Xn:Yn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Gr(e,t,n){let r=this.cache,i=t.length,a=cr(n,i);or(r,a)||(e.uniform1iv(this.addr,a),sr(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Qn,a[e])}function Kr(e,t,n){let r=this.cache,i=t.length,a=cr(n,i);or(r,a)||(e.uniform1iv(this.addr,a),sr(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||$n,a[e])}function qr(e,t,n){let r=this.cache,i=t.length,a=cr(n,i);or(r,a)||(e.uniform1iv(this.addr,a),sr(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Zn,a[e])}function Jr(e){switch(e){case 5126:return kr;case 35664:return Ar;case 35665:return jr;case 35666:return Mr;case 35674:return Nr;case 35675:return Pr;case 35676:return Fr;case 5124:case 35670:return Ir;case 35667:case 35671:return Lr;case 35668:case 35672:return Rr;case 35669:case 35673:return zr;case 5125:return Br;case 36294:return Vr;case 36295:return Hr;case 36296:return Ur;case 35678:case 36198:case 36298:case 36306:case 35682:return Wr;case 35679:case 36299:case 36307:return Gr;case 35680:case 36300:case 36308:case 36293:return Kr;case 36289:case 36303:case 36311:case 36292:return qr}}var Yr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Or(t.type)}},Xr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jr(t.type)}},Zr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Qr=/(\w+)(\])?(\[|\.)?/g;function $r(e,t){e.seq.push(t),e.map[t.id]=t}function ei(e,t,n){let r=e.name,i=r.length;for(Qr.lastIndex=0;;){let a=Qr.exec(r),o=Qr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){$r(n,l===void 0?new Yr(s,e,t):new Xr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Zr(s),$r(n,e)),n=e}}}var ti=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ei(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ni(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ri=37297,ii=0;function ai(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var oi=new H;function si(e){G._getMatrix(oi,G.workingColorSpace,e);let t=`mat3( ${oi.elements.map(e=>e.toFixed(4))} )`;switch(G.getTransfer(e)){case ct:return[t,`LinearTransferOETF`];case y:return[t,`sRGBTransferOETF`];default:return It(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ci(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ai(e.getShaderSource(t),r)}return i}function li(e,t){let n=si(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ui={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function di(e,t){let n=ui[t];return n===void 0?(It(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var fi=new U;function pi(){return G.getLuminanceCoefficients(fi),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${fi.x.toFixed(4)}, ${fi.y.toFixed(4)}, ${fi.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function mi(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(_i).join(`
`)}function hi(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function gi(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function _i(e){return e!==``}function vi(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yi(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bi=/^[ \t]*#include +<([\w\d./]+)>/gm;function xi(e){return e.replace(bi,Ci)}var Si=new Map;function Ci(e,t){let n=K[t];if(n===void 0){let e=Si.get(t);if(e!==void 0)n=K[e],It(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return xi(n)}var wi=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ti(e){return e.replace(wi,Ei)}function Ei(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Di(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Oi={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ki(e){return Oi[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ai={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function ji(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ai[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Mi={302:`ENVMAP_MODE_REFRACTION`};function Ni(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Mi[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Pi={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Fi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Pi[e.combine]||`ENVMAP_BLENDING_NONE`}function Ii(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Li(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ki(n),l=ji(n),u=Ni(n),d=Fi(n),f=Ii(n),p=mi(n),m=hi(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(_i).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(_i).join(`
`),_.length>0&&(_+=`
`)):(g=[Di(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(_i).join(`
`),_=[Di(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:di(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,li(`linearToOutputTexel`,n.outputColorSpace),pi(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(_i).join(`
`)),o=xi(o),o=vi(o,n),o=yi(o,n),s=xi(s),s=vi(s,n),s=yi(s,n),o=Ti(o),s=Ti(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ni(i,i.VERTEX_SHADER,y),S=ni(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ci(i,x,`vertex`),n=ci(i,S,`fragment`);Ze(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):It(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ti(i,h),T=gi(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,ri)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ii++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ri=0,zi=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bi(e),t.set(e,n)),n}},Bi=class{constructor(e){this.id=Ri++,this.code=e,this.usedTimes=0}};function Vi(e){return e===1030||e===37490||e===36285}function Hi(e,t,n,r,a,o){let s=new i,c=new zi,l=new Set,u=[],d=new Map,f=r.logarithmicDepthBuffer,p=r.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(i,a,s,u,d,g){let _=u.fog,v=d.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=m[i.type];i.precision!==null&&(p=r.getMaxPrecision(i.precision),p!==i.precision&&It(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,p,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,te;if(C){let e=un[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=c.getVertexShaderStage(i),t=c.getFragmentShaderStage(i);c.update(i,e,t),ee=e.id,te=t.id}let k=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=d.isInstancedMesh===!0,A=d.isBatchedMesh===!0,j=!!i.map,M=!!i.matcap,N=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,P=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=de&&!!i.anisotropyMap,ve=fe&&!!i.clearcoatMap,ye=fe&&!!i.clearcoatNormalMap,be=fe&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,F=!!i.specularIntensityMap,De=ge&&!!i.transmissionMap,Oe=ge&&!!i.thicknessMap,ke=!!i.gradientMap,I=!!i.alphaMap,Ae=i.alphaTest>0,je=!!i.alphaHash,L=!!i.extensions,R=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(R=e.toneMapping);let z={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:p,batching:A,batchingColor:A&&d._colorsTexture!==null,instancing:re,instancingColor:re&&d.instanceColor!==null,instancingMorph:re&&d.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:G.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:j,matcap:M,envMap:N,envMapMode:N&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Vi(i.normalMap.format),metalnessMap:ue,roughnessMap:P,anisotropy:de,anisotropyMap:_e,clearcoat:fe,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:F,transmission:ge,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:I,alphaTest:Ae,alphaHash:je,combine:i.combine,mapUv:j&&h(i.map.channel),aoMapUv:ie&&h(i.aoMap.channel),lightMapUv:ae&&h(i.lightMap.channel),bumpMapUv:oe&&h(i.bumpMap.channel),normalMapUv:se&&h(i.normalMap.channel),displacementMapUv:ce&&h(i.displacementMap.channel),emissiveMapUv:le&&h(i.emissiveMap.channel),metalnessMapUv:ue&&h(i.metalnessMap.channel),roughnessMapUv:P&&h(i.roughnessMap.channel),anisotropyMapUv:_e&&h(i.anisotropyMap.channel),clearcoatMapUv:ve&&h(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&h(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&h(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&h(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&h(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&h(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&h(i.sheenRoughnessMap.channel),specularMapUv:Te&&h(i.specularMap.channel),specularColorMapUv:Ee&&h(i.specularColorMap.channel),specularIntensityMapUv:F&&h(i.specularIntensityMap.channel),transmissionMapUv:De&&h(i.transmissionMap.channel),thicknessMapUv:Oe&&h(i.thicknessMap.channel),alphaMapUv:I&&h(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!v.attributes.uv&&(j||I),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:a.directional.length,numPointLights:a.point.length,numSpotLights:a.spot.length,numSpotLightMaps:a.spotLightMap.length,numRectAreaLights:a.rectArea.length,numHemiLights:a.hemi.length,numDirLightShadows:a.directionalShadowMap.length,numPointLightShadows:a.pointShadowMap.length,numSpotLightShadows:a.spotShadowMap.length,numSpotLightShadowsWithMaps:a.numSpotLightShadowsWithMaps,numLightProbes:a.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&s.length>0,shadowMapType:e.shadowMap.type,toneMapping:R,decodeVideoTexture:j&&i.map.isVideoTexture===!0&&G.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&G.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:L&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(L&&i.extensions.multiDraw===!0||A)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return z.vertexUv1s=l.has(1),z.vertexUv2s=l.has(2),z.vertexUv3s=l.has(3),l.clear(),z}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),t.hasPositionAttribute&&s.enable(23),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=un[t];n=Oe.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=d.get(n);return r===void 0?(r=new Li(e,n,t,a),u.push(r),d.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Ui(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Wi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Gi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ki(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Wi),r.length>1&&r.sort(t||Gi),i.length>1&&i.sort(t||Gi),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function qi(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ki,e.set(t,[i])):n>=r.length?(i=new Ki,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ji(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new U,color:new L};break;case`SpotLight`:n={position:new U,direction:new U,color:new L,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new L,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new L,groundColor:new L};break;case`RectAreaLight`:n={color:new L,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function Yi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Xi=0;function Zi(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Qi(e){let t=new Ji,n=Yi(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new V,o=new V;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Zi);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Xi++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function $i(e){let t=new Qi(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ea(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new $i(e),t.set(n,[a])):r>=i.length?(a=new $i(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ta=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,na=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ra=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ia=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],aa=new V,oa=new U,sa=new U;function ca(e,t,n){let r=new Vt,i=new Ne,a=new Ne,s=new Ct,c=new jt,l=new Bt,u={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new j({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:ta,fragmentShader:na}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new We;g.setAttribute(`position`,new B(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ye(g,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,c){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(It(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=y!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],p=u.shadow;if(p===void 0){It(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=_,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(u.isPointLight){It(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Ot(i.x,i.y,{format:d,type:C,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),p.map.texture.name=u.name+`.shadowMap`,p.map.depthTexture=new o(i.x,i.y,pe),p.map.depthTexture.name=u.name+`.shadowMapDepth`,p.map.depthTexture.format=se,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=xe,p.map.depthTexture.magFilter=xe}else u.isPointLight?(p.map=new zn(i.x),p.map.depthTexture=new Ft(i.x,Tt)):(p.map=new Ot(i.x,i.y),p.map.depthTexture=new o(i.x,i.y,Tt)),p.map.depthTexture.name=u.name+`.shadowMap`,p.map.depthTexture.format=se,this.type===1?(p.map.depthTexture.compareFunction=_?518:515,p.map.depthTexture.minFilter=Pe,p.map.depthTexture.magFilter=Pe):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=xe,p.map.depthTexture.magFilter=xe);p.camera.updateProjectionMatrix()}let v=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<v;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(s)}if(u.isPointLight){let e=p.camera,n=p.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),oa.setFromMatrixPosition(u.matrixWorld),e.position.copy(oa),sa.copy(e.position),sa.add(ra[t]),e.up.copy(ia[t]),e.lookAt(sa),e.updateMatrixWorld(),n.makeTranslation(-oa.x,-oa.y,-oa.z),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(aa,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(u);r=p.getFrustum(),S(n,c,p.camera,u,this.type)}p.isPointLightShadow!==!0&&this.type===3&&b(p,c),p.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(l,u,p)};function b(n,r){let a=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ot(i.x,i.y,{format:d,type:C})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,w)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function w(e){e.target.removeEventListener(`dispose`,w);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function la(e,t){function n(){let t=!1,n=new Ct,r=null,i=new Ct(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):P(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=it[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):P(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new L(0,0,0),T=0,E=!1,D=null,O=null,ee=null,te=null,k=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,A=0,j=e.getParameter(e.VERSION);j.indexOf(`WebGL`)===-1?j.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),re=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(j)[1]),re=A>=1);let M=null,N={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Ct().fromArray(ie),se=new Ct().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),ue(e.CULL_FACE),ge(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function P(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(P(e.BLEND),g=!1);return}if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ze(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Ze(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Ze(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Ze(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?P(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):P(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?P(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==ee&&(re&&e.lineWidth(t),ee=t)}function xe(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(te!==n||k!==r)&&(te=n,k=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):P(e.POLYGON_OFFSET_FILL)}function Se(t){t?ue(e.SCISSOR_TEST):P(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+ne-1),M!==t&&(e.activeTexture(t),M=t)}function we(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+ne-1:M);let i=N[r];i===void 0&&(i={type:void 0,texture:void 0},N[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=N[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){Ze(`WebGLState:`,e)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(e){Ze(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){Ze(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){Ze(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Ze(`WebGLState:`,e)}}function I(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Ze(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){Ze(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){Ze(`WebGLState:`,e)}}function R(){try{e.texImage2D(...arguments)}catch(e){Ze(`WebGLState:`,e)}}function z(){try{e.texImage3D(...arguments)}catch(e){Ze(`WebGLState:`,e)}}function Me(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Pe(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Fe(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,N={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new L(0,0,0),T=0,E=!1,D=null,O=null,ee=null,te=null,k=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:P,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:F,texImage2D:R,texImage3D:z,pixelStorei:Ne,getParameter:Me,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:Ae,texStorage3D:je,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:I,scissor:Pe,viewport:Fe,reset:Re}}function ua(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function g(e,t){return m?new OffscreenCanvas(e,t):ut(`canvas`)}function v(e,t,n){let r=1,i=ke(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=g(n,a));let o=t?g(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),It(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&It(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];It(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||It(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ct:G.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,It(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),D(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),ee(t)}function D(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&O(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function O(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ee(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let te=0;function k(){te=0}function ne(){return te}function re(e){te=e}function A(){let e=te;return e>=i.maxTextures&&It(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),te+=1,e}function j(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&De(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)It(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)It(`WebGLRenderer: Texture marked for update but image is incomplete`);else{pe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){pe(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){pe(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){me(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let oe={[ce]:e.REPEAT,[qe]:e.CLAMP_TO_EDGE,[Pt]:e.MIRRORED_REPEAT},se={[xe]:e.NEAREST,[h]:e.NEAREST_MIPMAP_NEAREST,[_]:e.NEAREST_MIPMAP_LINEAR,[Pe]:e.LINEAR,[wt]:e.LINEAR_MIPMAP_NEAREST,[ht]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ue(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&It(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,oe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,oe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,oe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,se[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,se[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,le[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function P(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,T));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=j(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&O(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function fe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=de(n.start,r.width,4),c=de(t.start,r.width,4);n.start<=i+1&&a===c&&de(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function pe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=P(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=G.getPrimaries(G.workingColorSpace),r=o.colorSpace===``?null:G.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=Oe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ue(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===rt,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&fe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=Je(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else It(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?It(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Je(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=ke(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=ke(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function me(t,o,s){if(o.image.length!==6)return;let c=P(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=G.getPrimaries(G.workingColorSpace),r=o.colorSpace===``?null:G.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Oe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),C=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=w(o,h);ue(e.TEXTURE_CUBE_MAP,o);let O;if(f){C&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,x,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?It(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):C?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,C&&T){O.length>0&&D++;let t=ke(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<O.length;r++){let i=O[r];C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ee(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _e(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,T)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else M(i.depthTexture,0);let u=l.__webglTexture,d=Ee(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ve(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)_e(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?_e(i.__webglFramebuffer[0],t,0):_e(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ge(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ge(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,i){let a=r.get(t);n!==void 0&&he(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ve(t)}function be(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,E);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&F(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ee(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)he(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else he(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)&&b(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ue(c,a),he(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ue(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)he(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else he(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)&&b(r),n.unbindTexture()}t.depthBuffer&&ve(t)}function Se(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Ce=[],we=[];function Te(t){if(t.samples>0){if(F(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ce.length=0,we.length=0,Ce.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Ce.push(l),we.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,we)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ee(e){return Math.min(i.maxSamples,e.samples)}function F(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function De(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Oe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(G.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&It(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Ze(`WebGLTextures: Unsupported texture color space:`,n)),t}function ke(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=A,this.resetTextureUnits=k,this.getTextureUnits=ne,this.setTextureUnits=re,this.setTexture2D=M,this.setTexture2DArray=N,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=F,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function da(e,t){function n(n,r=``){let i,a=G.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var fa=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pa=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ma=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new v(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new j({vertexShader:fa,fragmentShader:pa,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ha=class extends ue{constructor(e,t){super();let n=this,r=null,i=1,s=null,c=`local-floor`,l=1,u=null,d=null,f=null,p=null,m=null,h=null,g=typeof XRWebGLBinding<`u`,_=new ma,y={},b=t.getContextAttributes(),x=null,S=null,C=[],w=[],E=new Ne,D=null,O=new nt;O.viewport=new Ct;let ee=new nt;ee.viewport=new Ct;let te=[O,ee],k=new Me,ne=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Ve,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Ve,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Ve,C[e]=t),t.getHandSpace()};function j(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,u||s),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ne=null,A=null,_.reset();for(let e in y)delete y[e];e.setRenderTarget(x),m=null,p=null,f=null,r=null,S=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&It(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){c=e,n.isPresenting===!0&&It(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(e){u=e},this.getBaseLayer=function(){return p===null?m:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(d){if(r=d,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,s=null,c=null;b.depth&&(c=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?rt:se,s=b.stencil?a:Tt);let l={colorFormat:t.RGBA8,depthFormat:c,scaleFactor:i};f=this.getBinding(),p=f.createProjectionLayer(l),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new Ot(p.textureWidth,p.textureHeight,{format:re,type:je,depthTexture:new o(p.textureWidth,p.textureHeight,s,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Ot(m.framebufferWidth,m.framebufferHeight,{format:re,type:je,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(c),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ie=new U,ae=new U;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),k.near=ee.near=O.near=t,k.far=ee.far=O.far=n,(ne!==k.near||A!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),ne=k.near,A=k.far),k.layers.mask=e.layers.mask|6,O.layers.mask=k.layers.mask&-5,ee.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;ce(k,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?oe(k,O,ee):k.projectionMatrix.copy(O.projectionMatrix),le(e,k,i)};function le(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=T*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(p!==null||m!==null)return l},this.setFoveation=function(e){l=e,p!==null&&(p.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(e){return y[e]};let ue=null;function P(t,i){if(d=i.getViewerPose(u||s),h=i,d!==null){let t=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(m!==null)a=m.getViewport(r);else{let t=f.getViewSubImage(p,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new nt,o.layers.enable(n),o.viewport=new Ct,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){f=n.getBinding();let e=f.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),f=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=y[n];e||(e=new v,y[n]=e);let t=f.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,u||s)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let de=new cn;de.setAnimationLoop(P),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},ga=new V,_a=new H;_a.set(-1,0,0,0,1,0,0,0,1);function va(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,R(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ga.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(_a),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ya(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Ze(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?It(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):It(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ba=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xa=null;function Sa(){return xa===null&&(xa=new g(ba,16,16,d,C),xa.name=`DFG_LUT`,xa.minFilter=Pe,xa.magFilter=Pe,xa.wrapS=qe,xa.wrapT=qe,xa.generateMipmaps=!1,xa.needsUpdate=!0),xa}var Ca=class{constructor(e={}){let{canvas:t=gt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=je}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=o;let g=p,_=new Set([vt,Nt,m]),v=new Set([je,Tt,$e,a,ft,bt]),y=new Uint32Array(4),b=new Int32Array(4),x=new U,S=null,w=null,T=[],E=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,ee=!1,te=null,k=null,ne=null,re=null;this._outputColorSpace=P;let A=0,j=0,M=null,N=-1,ie=null,ae=new Ct,oe=new Ct,se=null,ce=new L(0),le=0,ue=t.width,de=t.height,fe=1,pe=null,me=null,he=new Ct(0,0,ue,de),ge=new Ct(0,0,ue,de),_e=!1,ve=new Vt,ye=!1,be=!1,xe=new V,Se=new U,Ce=new Ct,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ee(){return M===null?fe:1}let F=n;function De(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,Qe,!1),t.addEventListener(`webglcontextrestored`,et,!1),t.addEventListener(`webglcontextcreationerror`,tt,!1),F===null){let t=`webgl2`;if(F=De(t,e),F===null)throw De(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw Ze(`WebGLRenderer: `+e.message),e}let Oe,ke,I,Ae,R,z,Me,Ne,Pe,Fe,Le,Re,ze,Be,B,Ve,He,Ue,We,Ge,Ke,qe,Je;function Ye(){Oe=new Vn(F),Oe.init(),Ke=new da(F,Oe),ke=new _n(F,Oe,e,Ke),I=new la(F,Oe),ke.reversedDepthBuffer&&f&&I.buffers.depth.setReversed(!0),k=F.createFramebuffer(),ne=F.createFramebuffer(),re=F.createFramebuffer(),Ae=new Wn(F),R=new Ui,z=new ua(F,Oe,I,R,ke,Ke,Ae),Me=new Bn(O),Ne=new ln(F),qe=new hn(F,Ne),Pe=new Hn(F,Ne,Ae,qe),Fe=new Kn(F,Pe,Ne,qe,Ae),Ue=new Gn(F,ke,z),B=new vn(R),Le=new Hi(O,Me,Oe,ke,qe,B),Re=new va(O,R),ze=new qi,Be=new ea(Oe),He=new mn(O,Me,I,Fe,h,c),Ve=new ca(O,Fe,ke),Je=new ya(F,Ae,ke,I),We=new gn(F,Oe,Ae),Ge=new Un(F,Oe,Ae),Ae.programs=Le.programs,O.capabilities=ke,O.extensions=Oe,O.properties=R,O.renderLists=ze,O.shadowMap=Ve,O.state=I,O.info=Ae}Ye(),g!==1009&&(D=new Jn(g,t.width,t.height,s,r,i));let Xe=new ha(O,F);this.xr=Xe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Oe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Oe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(e){e!==void 0&&(fe=e,this.setSize(ue,de,!1))},this.getSize=function(e){return e.set(ue,de)},this.setSize=function(e,n,r=!0){if(Xe.isPresenting){It(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ue=e,de=n,t.width=Math.floor(e*fe),t.height=Math.floor(n*fe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ue*fe,de*fe).floor()},this.setDrawingBufferSize=function(e,n,r){ue=e,de=n,fe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(g===1009){Ze(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){It(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}D.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ae)},this.getViewport=function(e){return e.copy(he)},this.setViewport=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),I.viewport(ae.copy(he).multiplyScalar(fe).round())},this.getScissor=function(e){return e.copy(ge)},this.setScissor=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),I.scissor(oe.copy(ge).multiplyScalar(fe).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(e){I.setScissorTest(_e=e)},this.setOpaqueSort=function(e){pe=e},this.setTransparentSort=function(e){me=e},this.getClearColor=function(e){return e.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=_.has(t)}if(e){let e=M.texture.type,t=v.has(e),n=He.getClearColor(),r=He.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,F.clearBufferuiv(F.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,F.clearBufferiv(F.COLOR,0,b))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),te=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Qe,!1),t.removeEventListener(`webglcontextrestored`,et,!1),t.removeEventListener(`webglcontextcreationerror`,tt,!1),He.dispose(),ze.dispose(),Be.dispose(),R.dispose(),Me.dispose(),Fe.dispose(),qe.dispose(),Je.dispose(),Le.dispose(),Xe.dispose(),Xe.removeEventListener(`sessionstart`,lt),Xe.removeEventListener(`sessionend`,ut),H.stop()};function Qe(e){e.preventDefault(),At(`WebGLRenderer: Context Lost.`),ee=!0}function et(){At(`WebGLRenderer: Context Restored.`),ee=!1;let e=Ae.autoReset,t=Ve.enabled,n=Ve.autoUpdate,r=Ve.needsUpdate,i=Ve.type;Ye(),Ae.autoReset=e,Ve.enabled=t,Ve.autoUpdate=n,Ve.needsUpdate=r,Ve.type=i}function tt(e){Ze(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function nt(e){let t=e.target;t.removeEventListener(`dispose`,nt),rt(t)}function rt(e){it(e),R.remove(e)}function it(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Le.releaseProgram(e)}),e.isShaderMaterial&&Le.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=we);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Pe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;qe.setup(i,r,s,n,c);let h,g=We;if(c!==null&&(h=Ne.get(c),g=Ge,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ee()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ee()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Oe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ne.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function at(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,yt(e,t,n),e.side=0,e.needsUpdate=!0,yt(e,t,n),e.side=2):yt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),w=Be.get(n),w.init(t),E.push(w),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),w.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];at(a,n,e),r.add(a)}else at(t,n,e),r.add(t)}}),w=E.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){R.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Oe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ot=null;function ct(e){ot&&ot(e)}function lt(){H.stop()}function ut(){H.start()}let H=new cn;H.setAnimationLoop(ct),typeof self<`u`&&H.setContext(self),this.setAnimationLoop=function(e){ot=e,Xe.setAnimationLoop(e),e===null?H.stop():H.start()},Xe.addEventListener(`sessionstart`,lt),Xe.addEventListener(`sessionend`,ut),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Ze(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;te!==null&&te.renderStart(e,t);let n=Xe.enabled===!0&&Xe.isPresenting===!0,r=D!==null&&(M===null||n)&&D.begin(O,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(t),t=Xe.getCamera()),e.isScene===!0&&e.onBeforeRender(O,e,t,M),w=Be.get(e,E.length),w.init(t),w.state.textureUnits=z.getTextureUnits(),E.push(w),xe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ve.setFromProjectionMatrix(xe,st,t.reversedDepth),be=this.localClippingEnabled,ye=B.init(this.clippingPlanes,be),S=ze.get(e,T.length),S.init(),T.push(S),Xe.enabled===!0&&Xe.isPresenting===!0){let e=O.xr.getDepthSensingMesh();e!==null&&dt(e,t,-1/0,O.sortObjects)}dt(e,t,0,O.sortObjects),S.finish(),O.sortObjects===!0&&S.sort(pe,me,t.reversedDepth),Te=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Te&&He.addToRenderList(S,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&B.beginShadows();let i=w.state.shadowsArray;if(Ve.render(i,e,t),ye===!0&&B.endShadows(),(r&&D.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(w.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];mt(n,r,e,a)}Te&&He.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];pt(S,e,n,n.viewport)}}else r.length>0&&mt(n,r,e,t),Te&&He.render(e),pt(S,e,t)}M!==null&&j===0&&(z.updateMultisampleRenderTarget(M),z.updateRenderTargetMipmap(M)),r&&D.end(O),e.isScene===!0&&e.onAfterRender(O,e,t),qe.resetDefaultState(),N=-1,ie=null,E.pop(),E.length>0?(w=E[E.length-1],z.setTextureUnits(w.state.textureUnits),ye===!0&&B.setGlobalState(O.clippingPlanes,w.state.camera)):w=null,T.pop(),S=T.length>0?T[T.length-1]:null,te!==null&&te.renderEnd()};function dt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)w.pushLightProbeGrid(e);else if(e.isLight)w.pushLight(e),e.castShadow&&w.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ve.intersectsSprite(e)){r&&Ce.setFromMatrixPosition(e.matrixWorld).applyMatrix4(xe);let t=Fe.update(e),i=e.material;i.visible&&S.push(e,t,i,n,Ce.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ve.intersectsObject(e))){let t=Fe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ce.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ce.copy(e.boundingSphere.center)),Ce.applyMatrix4(e.matrixWorld).applyMatrix4(xe)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&S.push(e,t,s,n,Ce.z,o)}}else i.visible&&S.push(e,t,i,n,Ce.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)dt(i[e],t,n,r)}function pt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;w.setupLightsView(n),ye===!0&&B.setGlobalState(O.clippingPlanes,n),r&&I.viewport(ae.copy(r)),i.length>0&&W(i,t,n),a.length>0&&W(a,t,n),o.length>0&&W(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function mt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[r.id]===void 0){let e=Oe.has(`EXT_color_buffer_half_float`)||Oe.has(`EXT_color_buffer_float`);w.state.transmissionRenderTarget[r.id]=new Ot(1,1,{generateMipmaps:!0,type:e?C:je,minFilter:ht,samples:Math.max(4,ke.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:G.workingColorSpace})}let a=w.state.transmissionRenderTarget[r.id],o=r.viewport||ae;a.setSize(o.z*O.transmissionResolutionScale,o.w*O.transmissionResolutionScale);let s=O.getRenderTarget(),c=O.getActiveCubeFace(),l=O.getActiveMipmapLevel();O.setRenderTarget(a),O.getClearColor(ce),le=O.getClearAlpha(),le<1&&O.setClearColor(16777215,.5),O.clear(),Te&&He.render(n);let u=O.toneMapping;O.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),w.setupLightsView(r),ye===!0&&B.setGlobalState(O.clippingPlanes,r),W(e,n,r),z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a),Oe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,_t(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a))}O.setRenderTarget(s,c,l),O.setClearColor(ce,le),d!==void 0&&(r.viewport=d),O.toneMapping=u}function W(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&_t(o,t,n,s,l,c)}}function _t(e,t,n,r,i,a){e.onBeforeRender(O,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(O,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=2):O.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(O,t,n,r,i,a)}function yt(e,t,n){t.isScene!==!0&&(t=we);let r=R.get(e),i=w.state.lights,a=w.state.shadowsArray,o=i.state.version,s=Le.getParameters(e,i.state,a,t,n,w.state.lightProbeGridArray),c=Le.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Me.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,nt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return St(e,s),d}else s.uniforms=Le.getUniforms(e),te!==null&&e.isNodeMaterial&&te.build(e,n,s),e.onBeforeCompile(s,O),d=Le.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=B.uniform),St(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=w.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function xt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ti.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function St(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function Et(e,t,n,r,i){t.isScene!==!0&&(t=we),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?O.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:G.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Me.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=O.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=w.state.lights;if(ye===!0&&(be===!0||e!==ie)){let t=e===ie&&r.id===N;B.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==B.numPlanes||v.numIntersection!==B.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=w.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=yt(r,t,i),te&&r.isNodeMaterial&&te.onUpdateProgram(r,x,v));let S=!1,C=!1,T=!1,E=x.getUniforms(),D=v.uniforms;if(I.useProgram(x.program)&&(S=!0,C=!0,T=!0),r.id!==N&&(N=r.id,C=!0),v.needsLights){let e=wt(w.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ie!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(F,`projectionMatrix`,e.projectionMatrix),E.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(F,Se.setFromMatrixPosition(e.matrixWorld)),ke.logarithmicDepthBuffer&&E.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),ie!==e&&(ie=e,C=!0,T=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&E.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,z),y.state.spotShadowMap.length>0&&E.setValue(F,`spotShadowMap`,y.state.spotShadowMap,z),y.state.pointShadowMap.length>0&&E.setValue(F,`pointShadowMap`,y.state.pointShadowMap,z)),i.isSkinnedMesh){E.setOptional(F,i,`bindMatrix`),E.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(F,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(E.setOptional(F,i,`batchingTexture`),E.setValue(F,`batchingTexture`,i._matricesTexture,z),E.setOptional(F,i,`batchingIdTexture`),E.setValue(F,`batchingIdTexture`,i._indirectTexture,z),E.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(F,`batchingColorTexture`,i._colorsTexture,z));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Ue.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Sa()),C){if(E.setValue(F,`toneMappingExposure`,O.toneMappingExposure),v.needsLights&&Dt(D,T),a&&r.fog===!0&&Re.refreshFogUniforms(D,a),Re.refreshMaterialUniforms(D,r,fe,de,w.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}ti.upload(F,xt(v),D,z)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ti.upload(F,xt(v),D,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(F,`center`,i.center),E.setValue(F,`modelViewMatrix`,i.modelViewMatrix),E.setValue(F,`normalMatrix`,i.normalMatrix),E.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Je.update(n,x),Je.bind(n,x)}}return x}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,A=t,j=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest,I.viewport(ae),I.scissor(oe),I.setScissorTest(se),N=-1;return}if(o.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(o.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest}else ae.copy(he).multiplyScalar(fe).floor(),oe.copy(ge).multiplyScalar(fe).floor(),se=_e;if(n!==0&&(r=k),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(ae),I.scissor(oe),I.setScissorTest(se),i){let r=R.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}N=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Ze(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),!ke.textureFormatReadable(c)){Ze(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!ke.textureTypeReadable(l)){Ze(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,Ke.convert(c),Ke.convert(l),a)}finally{let e=M===null?null:R.get(M).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),!ke.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!ke.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,Ke.convert(l),Ke.convert(u),0);let f=M===null?null:R.get(M).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,f);let p=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ie(F,p,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.deleteBuffer(d),F.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ke.convert(t.format),_=Ke.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,ne),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,re);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){A=0,j=0,M=null,I.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return st}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=G._getDrawingBufferColorSpace(e),t.unpackColorSpace=G._getUnpackColorSpace()}};function wa(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new We,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Ta(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Ta(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Ta(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new B(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Ea(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function Da(e){let t=new Map,n=new Map,r=e.clone();return Oa(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function Oa(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)Oa(e.children[r],t.children[r],n)}var ka=class extends kt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Fa(e)}),this.register(function(e){return new Ia(e)}),this.register(function(e){return new Ga(e)}),this.register(function(e){return new Ka(e)}),this.register(function(e){return new qa(e)}),this.register(function(e){return new Ra(e)}),this.register(function(e){return new za(e)}),this.register(function(e){return new Ba(e)}),this.register(function(e){return new Va(e)}),this.register(function(e){return new Pa(e)}),this.register(function(e){return new Ha(e)}),this.register(function(e){return new La(e)}),this.register(function(e){return new Wa(e)}),this.register(function(e){return new Ua(e)}),this.register(function(e){return new Ma(e)}),this.register(function(e){return new Ja(e,J.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Ja(e,J.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Ya(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=He.extractUrlBase(e);a=He.resolveURL(t,this.path)}else a=He.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new E(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Xa){try{a[J.KHR_BINARY_GLTF]=new $a(e)}catch(e){r&&r(e);return}i=JSON.parse(a[J.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new Eo(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case J.KHR_MATERIALS_UNLIT:a[t]=new Na;break;case J.KHR_DRACO_MESH_COMPRESSION:a[t]=new eo(i,this.dracoLoader);break;case J.KHR_TEXTURE_TRANSFORM:a[t]=new to;break;case J.KHR_MESH_QUANTIZATION:a[t]=new no;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function Aa(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function ja(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var J={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Ma=class{constructor(e){this.parser=e,this.name=J.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new L(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Be);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new tt(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new de(s),o.distance=c;break;case`spot`:o=new F(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),vo(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Na=class{constructor(){this.name=J.KHR_MATERIALS_UNLIT}getMaterialType(){return z}extendParams(e,t,n){let r=[];e.color=new L(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Be),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,P))}return Promise.all(r)}},Pa=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=ja(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Fa=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ja(this.parser,e,this.name)===null?null:ve}extendMaterialParams(e,t){let n=ja(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(e,e)}return Promise.all(r)}},Ia=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ja(this.parser,e,this.name)===null?null:ve}extendMaterialParams(e,t){let n=ja(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},La=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ja(this.parser,e,this.name)===null?null:ve}extendMaterialParams(e,t){let n=ja(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Ra=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_SHEEN}getMaterialType(e){return ja(this.parser,e,this.name)===null?null:ve}extendMaterialParams(e,t){let n=ja(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new L(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Be)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,P)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},za=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ja(this.parser,e,this.name)===null?null:ve}extendMaterialParams(e,t){let n=ja(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Ba=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_VOLUME}getMaterialType(e){return ja(this.parser,e,this.name)===null?null:ve}extendMaterialParams(e,t){let n=ja(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new L().setRGB(i[0],i[1],i[2],Be),Promise.all(r)}},Va=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_IOR}getMaterialType(e){return ja(this.parser,e,this.name)===null?null:ve}extendMaterialParams(e,t){let n=ja(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},Ha=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ja(this.parser,e,this.name)===null?null:ve}extendMaterialParams(e,t){let n=ja(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new L().setRGB(i[0],i[1],i[2],Be),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,P)),Promise.all(r)}},Ua=class{constructor(e){this.parser=e,this.name=J.EXT_MATERIALS_BUMP}getMaterialType(e){return ja(this.parser,e,this.name)===null?null:ve}extendMaterialParams(e,t){let n=ja(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Wa=class{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ja(this.parser,e,this.name)===null?null:ve}extendMaterialParams(e,t){let n=ja(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Ga=class{constructor(e){this.parser=e,this.name=J.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Ka=class{constructor(e){this.parser=e,this.name=J.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},qa=class{constructor(e){this.parser=e,this.name=J.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Ja=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Ya=class{constructor(e){this.name=J.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==oo.TRIANGLES&&e.mode!==oo.TRIANGLE_STRIP&&e.mode!==oo.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new V,n=new U,a=new Ht,s=new U(1,1,1),c=new k(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new Ee(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);at.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Xa=`glTF`,Za=12,Qa={JSON:1313821514,BIN:5130562},$a=class{constructor(e){this.name=J.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Za),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xa)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Za,i=new DataView(e,Za),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Qa.JSON){let r=new Uint8Array(e,Za+a,t);this.content=n.decode(r)}else if(r===Qa.BIN){let n=Za+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},eo=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=J.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=fo[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=fo[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=so[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Be,n)})})}},to=class{constructor(){this.name=J.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},no=class{constructor(){this.name=J.KHR_MESH_QUANTIZATION}},ro=class extends De{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},io=new Ht,ao=class extends ro{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return io.fromArray(i).normalize().toArray(i),i}},oo={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},so={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},co={9728:xe,9729:Pe,9984:h,9985:wt,9986:_,9987:ht},lo={33071:qe,33648:Pt,10497:ce},uo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fo={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},po={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},mo={CUBICSPLINE:void 0,LINEAR:fe,STEP:Ae},ho={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function go(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new f({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function _o(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function vo(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function yo(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function bo(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function xo(e){let t,n=e.extensions&&e.extensions[J.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+So(n.attributes):e.indices+`:`+So(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+So(e.targets[n]);return t}function So(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function Co(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function wo(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var To=new V,Eo=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Aa,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new ne(this.options.manager):new Se(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new E(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return _o(i,a,r),vo(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[J.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(He.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=uo[r.type],t=so[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new B(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=uo[r.type],o=so[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new ee(f,u/s),t.cache.add(n,c)),p=new ke(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new B(f,a,d);if(r.sparse!==void 0){let t=uo.SCALAR,n=so[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new B(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=co[n.magFilter]||1006,t.minFilter=co[n.minFilter]||1008,t.wrapS=lo[n.wrapS]||1e3,t.wrapT=lo[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new S(e);t.needsUpdate=!0,n(t)}),t.load(He.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),vo(e,a),e.userData.mimeType=a.mimeType||wo(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[J.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[J.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[J.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new O,Ke.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new pt,Ke.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return f}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[J.KHR_MATERIALS_UNLIT]){let e=r[J.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new L(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Be),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,P)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||ho.OPAQUE;if(l===ho.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===ho.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==z&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new Ne(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==z&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==z){let e=i.emissiveFactor;o.emissive=new L().setRGB(e[0],e[1],e[2],Be)}return i.emissiveTexture!==void 0&&a!==z&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,P)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),vo(n,i),t.associations.set(n,{materials:e}),i.extensions&&_o(r,n,i),n})}createUniqueName(e){let t=he.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[J.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Oo(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=xo(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[J.KHR_DRACO_MESH_COMPRESSION]?i(o):Oo(new We,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?go(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===oo.TRIANGLES||u.mode===oo.TRIANGLE_STRIP||u.mode===oo.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new Te(l,f):new Ye(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===oo.TRIANGLE_STRIP?d.geometry=Ea(d.geometry,1):u.mode===oo.TRIANGLE_FAN&&(d.geometry=Ea(d.geometry,2));else if(u.mode===oo.LINES)d=new et(l,f);else if(u.mode===oo.LINE_STRIP)d=new Ue(l,f);else if(u.mode===oo.LINE_LOOP)d=new xt(l,f);else if(u.mode===oo.POINTS)d=new b(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&bo(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),vo(d,i),u.extensions&&_o(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&_o(r,c[0],i),c[0];let l=new we;i.extensions&&_o(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new nt(W.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new s(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vo(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new V;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new c(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new yt(i,void 0,l);return vo(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,To)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new U().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Re:t.length>1?new we:t.length===1?t[0]:new at,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),vo(o,i),i.extensions&&_o(n,o,i),i.matrix!==void 0){let e=new V;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new we;n.name&&(i.name=r.createUniqueName(n.name)),vo(i,n),n.extensions&&_o(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(Da(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Ke||e instanceof S)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}po[i.path]===po.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let u;switch(po[i.path]){case po.weights:u=le;break;case po.rotation:u=l;break;case po.translation:case po.scale:u=ze;break;default:switch(n.itemSize){case 1:u=le;break;default:u=ze}}let d=r.interpolation===void 0?fe:mo[r.interpolation],f=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new u(s[e]+`.`+po[i.path],t.array,f,d);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=Co(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof l?ao:ro)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Do(e,t,n){let r=t.attributes,i=new ot;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new U(t[0],t[1],t[2]),new U(a[0],a[1],a[2])),e.normalized){let t=Co(so[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new U,t=new U;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=Co(so[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new w;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Oo(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=fo[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return G.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${G.workingColorSpace}" not supported.`),vo(e,t),Do(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:yo(e,t.targets,n)})}async function ko(e,t){jo(e),t?.throwIfAborted();let n=new ka,r=[...new Set(e.map(({url:e})=>e))],i=await Promise.allSettled(r.map(e=>n.loadAsync(e))),a=new Map;for(let[e,t]of i.entries())t.status===`fulfilled`&&a.set(r[e],t.value);let o=i.find(e=>e.status===`rejected`);if(o||t?.aborted){let e=o?.reason??t?.reason;try{Ao(a)}catch(t){throw AggregateError([e,t],`GLTF loading and cleanup failed`)}throw e}return new Map(e.map(({id:e,url:t})=>{let n=a.get(t);if(!n)throw Error(`GLTF asset did not load: ${t}`);return[e,n]}))}function Ao(e){let t=new Set,n=new Set,r=new Set,i=new Set,a=new Set,o=new Set([...e.values()].flatMap(({scene:e,scenes:t})=>[e,...t]));for(let e of o)e.traverse(e=>{if(!(e instanceof Ye))return;t.add(e.geometry);let a=Array.isArray(e.material)?e.material:[e.material];for(let e of a)Mo(e,n,r);e instanceof Te&&i.add(e.skeleton)});for(let e of r)typeof ImageBitmap<`u`&&e.source.data instanceof ImageBitmap&&a.add(e.source.data);let s=[];for(let e of[...t,...n,...i,...r])try{e.dispose()}catch(e){s.push(e)}for(let e of a)try{e.close()}catch(e){s.push(e)}if(s.length)throw AggregateError(s,`GLTF cleanup failed`)}function jo(e){let t=new Set;for(let{id:n}of e){if(t.has(n))throw Error(`Duplicate GLTF asset id: ${n}`);t.add(n)}}function Mo(e,t,n){t.add(e);for(let t of Object.values(e))t instanceof S&&n.add(t)}var No={fadeSeconds:2.5,arrivalClearanceMeters:8,veilLiftSeconds:4},Po={sectionCapacity:4,ringCapacity:24,pulseDb:-26.83275,clickingDb:-40.83275,baseDb:-35.83275,padDb:-31.202418,padSpeakingDb:-43.202418,fadeSeconds:.6,clickingSources:3,minimumDetuneCents:-2400,clickGrainSeconds:.12,clickOverlapSeconds:.04,baseHeads:3,baseGrainSeconds:.8,baseOverlapSeconds:.35,ringRefDistance:3,baseRefDistance:15,rolloff:1,reverbWet:.25,limiterDb:-6,reverbSeconds:2.8,audiblePresence:.02,assetRoot:`/becoming-many-making-of/p/v3-v07/audio/tutorial/atmosphere/`},Fo=Ut();async function Io(e){Lo(e.settings);let t=await Vo(e);e.signal?.throwIfAborted();let n=new Ho(e,t);try{return await n.prepare(),e.signal?.throwIfAborted(),n}catch(e){throw n.unload(),e}}function Lo(e){for(let[t,n]of Object.entries(e))if(typeof n==`number`&&!Number.isFinite(n))throw RangeError(`Invalid audio setting: ${t}`);if([e.sectionCapacity,e.ringCapacity,e.clickingSources,e.baseHeads].some(e=>!Number.isInteger(e)||e<1))throw RangeError(`Audio capacities must be positive integers`);if(Ro(e),e.minimumDetuneCents>0||e.rolloff<0)throw RangeError(`Invalid audio detune or rolloff`);if([e.reverbWet,e.audiblePresence].some(e=>e<0||e>1))throw RangeError(`Audio presence and wet mix must be between zero and one`);if(zo(e.clickOverlapSeconds,e.clickGrainSeconds),zo(e.baseOverlapSeconds,e.baseGrainSeconds),!e.assetRoot)throw RangeError(`Audio asset root is required`)}function Ro(e){if([e.fadeSeconds,e.clickGrainSeconds,e.baseGrainSeconds,e.ringRefDistance,e.baseRefDistance,e.reverbSeconds].some(e=>e<=0))throw RangeError(`Audio durations and distances must be positive`)}function zo(e,t){if(e<0||e>=t)throw RangeError(`Grain overlap must be nonnegative and smaller than the grain`)}function Bo(e,t){if(!Number.isInteger(e.index)||e.index<0||e.index>=t)throw RangeError(`Invalid audio ring index`);if(![...e.center.toArray(),...e.direction.toArray(),e.radiusMeters].every(Number.isFinite)||e.radiusMeters<=0||e.direction.lengthSq()===0)throw RangeError(`Invalid audio ring geometry`)}async function Vo(e){let t=await Promise.all([`ring_pulse`,`ring_clicking`,`ring_base`,`pad`].map(async t=>{let n=await fetch(`${e.settings.assetRoot}${t}.wav`,{signal:e.signal});if(!n.ok)throw Error(`Cannot load Start atmosphere: ${t} (${n.status})`);return[t,await e.listener.context.decodeAudioData(await n.arrayBuffer())]}));return Object.fromEntries(t)}var Ho=class{options;buffers;sections=new Map;voices=new Set;reverb;limiter;pad;active=!1;presence=1;disposed=!1;constructor(e,t){this.options=e,this.buffers=t;let{context:n,settings:r,listener:i}=e;this.reverb=new Fo.Reverb({context:n,decay:r.reverbSeconds,wet:r.reverbWet}),this.limiter=new Fo.Limiter({context:n,threshold:r.limiterDb}),this.reverb.connect(this.limiter),this.limiter.connect(i.getInput()),this.pad=this.makeVoice(new Fo.Player({context:n,url:t.pad,loop:!0}))}async prepare(){await this.reverb.ready}configureSection(e,t){if(this.disposed)return;if(e<0||e>=this.options.settings.sectionCapacity||!Number.isInteger(e))throw RangeError(`Invalid audio section slot`);this.validateSection(t),this.clearSection(e);let n=new Set(this.voices);try{let n=t.rings.map(e=>this.createRing(e)),r=Array.from({length:this.options.settings.baseHeads},(e,n)=>this.createBed(t.center,n));this.sections.set(e,{rings:n,beds:r})}catch(e){for(let e of this.voices)n.has(e)||this.disposeVoice(e);throw e}}validateSection(e){let t=this.options.settings.ringCapacity;if(e.rings.length>t)throw RangeError(`Audio ring capacity exceeded`);if(!e.center.toArray().every(Number.isFinite))throw RangeError(`Invalid audio section center`);let n=new Set;for(let r of e.rings){if(Bo(r,t),n.has(r.index))throw RangeError(`Duplicate audio ring index`);n.add(r.index)}}createRing(e){let t=this.makeVoice(new Fo.Player({context:this.options.context,url:this.buffers.ring_pulse}));this.place(t,e.center,this.options.settings.ringRefDistance);let n=Array.from({length:this.options.settings.clickingSources},(t,n)=>this.createClick(e,n));return{index:e.index,pulse:t,clicks:n,counter:0}}createClick(e,t){let n=this.options.settings,r=new Fo.GrainPlayer({context:this.options.context,url:this.buffers.ring_clicking,loop:!0,detune:Math.random()*n.minimumDetuneCents,grainSize:n.clickGrainSeconds,overlap:n.clickOverlapSeconds}),i=this.makeVoice(r);i.offset=Math.random()*this.buffers.ring_clicking.duration;let a=t*Math.PI*2/n.clickingSources,o=new Ht().setFromUnitVectors(new U(0,0,1),e.direction.clone().normalize()),s=new U(Math.cos(a),Math.sin(a),0).multiplyScalar(e.radiusMeters).applyQuaternion(o).add(e.center);return this.place(i,s,n.ringRefDistance),i}createBed(e,t){let n=this.options.settings,r=this.makeVoice(new Fo.GrainPlayer({context:this.options.context,url:this.buffers.ring_base,loop:!0,detune:0,grainSize:n.baseGrainSeconds,overlap:n.baseOverlapSeconds}));return r.offset=this.buffers.ring_base.duration*t/n.baseHeads,this.place(r,e,n.baseRefDistance),r}makeVoice(e){let t;try{t=this.options.listener.context.createGain(),t.gain.value=0,e.connect(t),(0,Fo.connect)(t,this.reverb);let n={player:e,gain:t,offset:0,targetGain:0};return this.voices.add(n),n}catch(n){throw e.dispose(),t?.disconnect(),n}}place(e,t,n){let r=new M(this.options.listener);e.spatial=r,e.gain.disconnect(),r.gain.disconnect(),r.setNodeSource(e.gain),r.setRefDistance(n).setRolloffFactor(this.options.settings.rolloff),r.setDistanceModel(`inverse`),r.position.copy(t),r.updateMatrixWorld(!0),(0,Fo.connect)(r.gain,this.reverb)}updateSection(e,t){let n=this.sections.get(e);if(!n||this.disposed)return;let r=0;for(let e of n.rings){let n=Math.max(0,Math.min(1,t.presence[e.index]??0));r=Math.max(r,n),this.updateRing(e,{amount:n,counter:t.pulses[e.index]??0})}for(let e of n.beds)this.loop(e,r,this.options.settings.baseDb-10*Math.log10(n.beds.length))}updateRing(e,t){let n=this.options.settings;for(let r of e.clicks)this.loop(r,t.amount,n.clickingDb);this.volume(e.pulse,this.active?t.amount:0,n.pulseDb),this.active&&t.amount>n.audiblePresence&&t.counter>e.counter&&e.pulse.player.start(this.options.context.immediate()),e.counter=t.counter}update(e){if(this.disposed)return;this.presence=Math.max(0,Math.min(1,e.presence??1)),this.active=e.active&&this.options.context.state===`running`;let t=this.options.settings;if(this.loop(this.pad,1,e.speaking?t.padSpeakingDb:t.padDb),!this.active)for(let e of this.sections.values())this.silence(e)}loop(e,t,n){let r=this.active&&t>this.options.settings.audiblePresence;r&&e.player.state!==`started`&&e.player.start(void 0,e.offset),this.volume(e,r?t:0,n),!r&&e.player.state===`started`&&e.player.stop()}volume(e,t,n){let r=t*this.presence*10**(n/20);if(e.targetGain===r)return;e.targetGain=r;let i=this.options.listener.context;e.gain.gain.cancelAndHoldAtTime(i.currentTime),e.gain.gain.setTargetAtTime(r,i.currentTime,this.options.settings.fadeSeconds)}silence(e){for(let t of e.rings){this.volume(t.pulse,0,0);for(let e of t.clicks)this.loop(e,0,0)}for(let t of e.beds)this.loop(t,0,0)}clearSection(e){let t=this.sections.get(e);if(t){for(let e of t.rings){this.disposeVoice(e.pulse);for(let t of e.clicks)this.disposeVoice(t)}for(let e of t.beds)this.disposeVoice(e);this.sections.delete(e)}}disposeVoice(e){this.voices.delete(e),e.player.dispose(),e.gain.disconnect(),e.spatial?.panner.disconnect(),e.spatial?.gain.disconnect()}unload(){if(!this.disposed){this.disposed=!0;for(let e of this.sections.keys())this.clearSection(e);for(let e of this.voices)this.disposeVoice(e);this.reverb.dispose(),this.limiter.dispose()}}},Uo=new ae(0,0,0,`YXZ`),Wo=new U,Go={type:`change`},Ko={type:`lock`},qo={type:`unlock`},Jo=.002,Yo=Math.PI/2,Xo=class extends Rt{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Zo.bind(this),this._onPointerlockChange=Qo.bind(this),this._onPointerlockError=$o.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener(`mousemove`,this._onMouseMove),this.domElement.ownerDocument.addEventListener(`pointerlockchange`,this._onPointerlockChange),this.domElement.ownerDocument.addEventListener(`pointerlockerror`,this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener(`mousemove`,this._onMouseMove),this.domElement.ownerDocument.removeEventListener(`pointerlockchange`,this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener(`pointerlockerror`,this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;let t=this.object;Wo.setFromMatrixColumn(t.matrix,0),Wo.crossVectors(t.up,Wo),t.position.addScaledVector(Wo,e)}moveRight(e){if(this.enabled===!1)return;let t=this.object;Wo.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Wo,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}};function Zo(e){if(this.enabled===!1||this.isLocked===!1)return;let t=this.object;Uo.setFromQuaternion(t.quaternion),Uo.y-=e.movementX*Jo*this.pointerSpeed,Uo.x-=e.movementY*Jo*this.pointerSpeed,Uo.x=Math.max(Yo-this.maxPolarAngle,Math.min(Yo-this.minPolarAngle,Uo.x)),t.quaternion.setFromEuler(Uo),this.dispatchEvent(Go)}function Qo(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Ko),this.isLocked=!0):(this.dispatchEvent(qo),this.isLocked=!1)}function $o(){console.error(`THREE.PointerLockControls: Unable to use Pointer Lock API`)}var es={glideSpeedMetersPerSecond:5,maximumPitchRadians:Math.PI/4,maximumBankRadians:Math.PI/4,keyboardTiltPerSecond:2,yawRateRadiansPerSecond:.8,minimumGroundClearanceMeters:1},ts=new Set([`KeyW`,`ArrowUp`,`KeyS`,`ArrowDown`,`KeyD`,`ArrowRight`,`KeyA`,`ArrowLeft`]);function ns(e,t){let n=new Xo(e,t),r=new AbortController,{signal:i}=r,a=new Set,o={forwardTilt:0,rightTilt:0},s,c;return t.addEventListener(`click`,l,{signal:i}),window.addEventListener(`keydown`,u,{signal:i}),window.addEventListener(`keyup`,u,{signal:i}),window.addEventListener(`blur`,d,{signal:i}),t.ownerDocument.addEventListener(`pointerlockchange`,f,{signal:i}),{readInput:p,unload:m};function l(){s||=t.requestPointerLock().catch(e=>{i.aborted||console.warn(`Desktop pointer lock failed.`,e)}).finally(()=>{s=void 0})}function u(e){!n.isLocked||!ts.has(e.code)||(e.preventDefault(),e.type===`keydown`?a.add(e.code):a.delete(e.code))}function d(){a.clear(),o.forwardTilt=0,o.rightTilt=0}function f(){n.isLocked||d()}function p(e){let t=Number(a.has(`KeyW`)||a.has(`ArrowUp`)),n=Number(a.has(`KeyS`)||a.has(`ArrowDown`)),r=Number(a.has(`KeyD`)||a.has(`ArrowRight`)),i=Number(a.has(`KeyA`)||a.has(`ArrowLeft`)),s=Number.isFinite(e)?Math.max(0,e)*es.keyboardTiltPerSecond:0;return o.forwardTilt=rs(o.forwardTilt,t-n,s),o.rightTilt=rs(o.rightTilt,r-i,s),o}function m(){return c||(r.abort(),d(),n.dispose(),c=h(),c)}async function h(){await s;let e=t.ownerDocument;e.pointerLockElement===t&&await new Promise((t,n)=>{let r=()=>t();e.addEventListener(`pointerlockchange`,r,{once:!0});try{e.exitPointerLock()}catch(t){e.removeEventListener(`pointerlockchange`,r),n(t)}})}}function rs(e,t,n){return e+Math.max(-n,Math.min(n,t-e))}function is(e,t){let n=new ae(0,0,0,`YXZ`),r=new U,i={forwardTilt:0,rightTilt:0};return{update(a,o=es.glideSpeedMetersPerSecond,s=!1){let c=os(a);as(t,i,c);let l=os(o)*c;l!==0&&(n.setFromQuaternion(e.quaternion,`YXZ`),n.x=-i.forwardTilt*es.maximumPitchRadians,n.z=-i.rightTilt*es.maximumBankRadians,n.y-=i.rightTilt*es.yawRateRadiansPerSecond*c,r.set(0,0,-1).applyEuler(n),e.position.addScaledVector(r,l),s&&(n.x=n.z=0),e.quaternion.setFromEuler(n))}}}function as(e,t,n){t.forwardTilt=0,t.rightTilt=0;for(let r of e){let e=r.readInput(n);t.forwardTilt+=Number.isFinite(e.forwardTilt)?e.forwardTilt:0,t.rightTilt+=Number.isFinite(e.rightTilt)?e.rightTilt:0}t.forwardTilt=Math.max(-1,Math.min(1,t.forwardTilt)),t.rightTilt=Math.max(-1,Math.min(1,t.rightTilt))}function os(e){return Number.isFinite(e)&&e>0?e:0}function ss(e,t,n){let r=t(e.x,e.z),i=n.minimumGroundClearanceMeters===void 0?-1/0:r+n.minimumGroundClearanceMeters,a=n.maximumGroundClearanceMeters===void 0?1/0:r+n.maximumGroundClearanceMeters;e.y=Math.min(Math.max(e.y,i),a)}function cs(e,t){e.set(0,0,0),t.identity()}var ls={lines:[{role:`title`,text:`BECOMING MANY`},{role:`role`,text:`A Project By`},{role:`name`,text:`Erasmus Schmidt`},{role:`name`,text:`Tade Strehk`},{role:`name`,text:`Eddie Huesmann`}]};function us(e,t){let n=e.creditsAtSeconds;if(n===void 0)return 0;let r=t-n;return r<=0?0:r>=4?1:r/4}var ds=[`wind`,`choir`,`sonar`,`birdWingBeat`,`insectWingBeat`,`bassLoop`,`pressureWave`,`polyRhythm`,`hiHat`],fs={pulseSeconds:60/54,voices:{"white-world":[`wind`],scent:[`wind`,`choir`],echo:[`wind`,`choir`,`sonar`],motion:[`wind`,`choir`,`sonar`,`birdWingBeat`,`insectWingBeat`],thermal:[`wind`,`choir`,`sonar`,`birdWingBeat`,`insectWingBeat`,`bassLoop`],magnetic:[`wind`,`choir`,`sonar`,`birdWingBeat`,`insectWingBeat`,`bassLoop`,`pressureWave`],connections:ds}};function ps(e,t,n,r){let i=0,a=0,o=0;for(let s of e.narration){let e=$t(s);if(e>r)break;a=on(i,a,o,e),i=e,o=+!!t.voices[s.level].includes(n)}return on(i,a,o,r)}var ms={pollIntervalMilliseconds:167,staleAfterMilliseconds:1e3};function hs(){let e=!1,t=``,n,r=-1/0,i,a={forwardTilt:0,rightTilt:0};function o(){return Date.now()-r<=ms.staleAfterMilliseconds?n:void 0}function s(a){e||(i?.(),i=void 0,n=void 0,r=-1/0,t=a.trim(),t&&(i=gs(`${(t.includes(`://`)?t:`http://${t}`).replace(/\/$/,``)}/state`,e=>{n=e,r=Date.now()})))}return{setHost:s,readInput:()=>{let e=o();return a.forwardTilt=e?.pitch??0,a.rightTilt=!e||e.roll===0?0:-e.roll,a},readObservation:()=>{let e=o();return{host:t,status:t?e?`live`:`connecting`:`off`,sample:e,...n?{receivedState:n}:{}}},unload:()=>{s(``),e=!0}}}function gs(e,t){let n=new AbortController,r=!1,i=async()=>{if(r||n.signal.aborted)return;r=!0;let i=AbortSignal.any([n.signal,AbortSignal.timeout(ms.staleAfterMilliseconds)]);try{let n=await fetch(e,{signal:i});if(!n.ok)return;let r=Wt(await n.text());r&&!i.aborted&&t(r)}catch{}finally{r=!1}},a=setInterval(()=>void i(),ms.pollIntervalMilliseconds);return i(),()=>{n.abort(),clearInterval(a)}}function _s(e,t,n){for(let r of e.passages){if(r.passageId!==t)continue;let e=n-r.atSeconds;if(!(e<0||e>=r.durationSeconds))return e/r.durationSeconds}}function vs(e,t){let n=e,r=e.transparent||e.alphaTest>0;return new z({name:`${e.name||`gltf-material`}-unlit`,color:t??n.color?.getHex()??16777215,map:t===void 0?n.map??null:null,alphaMap:n.alphaMap??null,alphaTest:r?Math.max(e.alphaTest,.5):0,side:e.side,vertexColors:e.vertexColors,transparent:!1,depthWrite:!0})}var ys=new U(-.0013108253479003906,0,-.00017023086547851562).normalize(),bs=[{passageId:`bat`,modelUrl:`/becoming-many-making-of/p/web-release/becoming-many/models/animals/bat.glb`,routeUrl:`/becoming-many-making-of/p/v3-v075/routes/animal-passages/bat-route.glb`,wingspanMeters:.7,routeDurationSeconds:10.416667,approachDurationSeconds:0,approachPoints:[],exitDurationSeconds:6,routeScaleToMeters:2,routeRotation:new Ht().setFromUnitVectors(ys,new U(0,0,-1)),routeStart:new U(3.285576581954956,1.0420538187026978,2.665073871612549),modelForward:new U(1,0,0),modelRollOffsetRadians:-Math.PI/2,flapClipName:`Armature.001Action`,flapTimeScale:1,groundClearanceMeters:.45,frameYaw:{kind:`viewHeading`}}],xs={passageId:`mosquitoes`,routeUrl:`/becoming-many-making-of/p/v3-v075/routes/animal-passages/mosquito-route.glb`,durationSeconds:15,routeScaleToMeters:1,axisStretch:new U(1.5,1.5,.5),routeStart:new U(2,0,2),pointCount:220,cloudRadiusMeters:1.6,cloudHeightMeters:.7,groundClearanceMeters:.8},Ss=Uint8Array,Cs=Uint16Array,ws=Int32Array,Ts=new Ss([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Es=new Ss([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ds=new Ss([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Os=function(e,t){for(var n=new Cs(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new ws(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},ks=Os(Ts,2),As=ks.b,js=ks.r;As[28]=258,js[258]=28;var Ms=Os(Es,0),Ns=Ms.b;Ms.r;for(var Ps=new Cs(32768),Fs=0;Fs<32768;++Fs){var Is=(Fs&43690)>>1|(Fs&21845)<<1;Is=(Is&52428)>>2|(Is&13107)<<2,Is=(Is&61680)>>4|(Is&3855)<<4,Ps[Fs]=((Is&65280)>>8|(Is&255)<<8)>>1}for(var Ls=(function(e,t,n){for(var r=e.length,i=0,a=new Cs(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new Cs(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new Cs(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[Ps[d]>>c]=l}else for(s=new Cs(r),i=0;i<r;++i)e[i]&&(s[i]=Ps[o[e[i]-1]++]>>15-e[i]);return s}),Rs=new Ss(288),Fs=0;Fs<144;++Fs)Rs[Fs]=8;for(var Fs=144;Fs<256;++Fs)Rs[Fs]=9;for(var Fs=256;Fs<280;++Fs)Rs[Fs]=7;for(var Fs=280;Fs<288;++Fs)Rs[Fs]=8;for(var zs=new Ss(32),Fs=0;Fs<32;++Fs)zs[Fs]=5;var Bs=Ls(Rs,9,1),Vs=Ls(zs,5,1),Hs=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Us=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},Ws=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Gs=function(e){return(e+7)/8|0},Ks=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new Ss(e.subarray(t,n))},qs=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],Js=function(e,t,n){var r=Error(t||qs[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Js),!n)throw r;return r},Ys=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new Ss(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new Ss(i*3));var l=function(e){var t=n.length;if(e>t){var r=new Ss(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=Us(e,d,1);var v=Us(e,d+1,3);if(d+=3,!v){var y=Gs(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&Js(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}if(v==1)p=Bs,m=Vs,h=9,g=5;else if(v==2){var S=Us(e,d,31)+257,C=Us(e,d+10,15)+4,w=S+Us(e,d+5,31)+1;d+=14;for(var T=new Ss(w),E=new Ss(19),D=0;D<C;++D)E[Ds[D]]=Us(e,d+D*3,7);d+=C*3;for(var O=Hs(E),ee=(1<<O)-1,te=Ls(E,O,1),D=0;D<w;){var k=te[Us(e,d,ee)];d+=k&15;var y=k>>4;if(y<16)T[D++]=y;else{var ne=0,re=0;for(y==16?(re=3+Us(e,d,3),d+=2,ne=T[D-1]):y==17?(re=3+Us(e,d,7),d+=3):y==18&&(re=11+Us(e,d,127),d+=7);re--;)T[D++]=ne}}var A=T.subarray(0,S),j=T.subarray(S);h=Hs(A),g=Hs(j),p=Ls(A,h,1),m=Ls(j,g,1)}else Js(1);if(d>_){c&&Js(0);break}}s&&l(f+131072);for(var M=(1<<h)-1,N=(1<<g)-1,ie=d;;ie=d){var ne=p[Ws(e,d)&M],ae=ne>>4;if(d+=ne&15,d>_){c&&Js(0);break}if(ne||Js(2),ae<256)n[f++]=ae;else if(ae==256){ie=d,p=null;break}else{var oe=ae-254;if(ae>264){var D=ae-257,se=Ts[D];oe=Us(e,d,(1<<se)-1)+As[D],d+=se}var ce=m[Ws(e,d)&N],le=ce>>4;ce||Js(3),d+=ce&15;var j=Ns[le];if(le>3){var se=Es[le];j+=Ws(e,d)&(1<<se)-1,d+=se}if(d>_){c&&Js(0);break}s&&l(f+131072);var ue=f+oe;if(f<j){var P=a-j,de=Math.min(j,ue);for(P+f<0&&Js(3);f<de;++f)n[f]=r[P+f]}for(;f<ue;++f)n[f]=n[f-j]}}t.l=p,t.p=ie,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?Ks(n,0,f):n.subarray(0,f)},Xs=new Ss(0),Zs=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&Js(6,`invalid zlib data`),(e[1]>>5&1)==+!t&&Js(6,`invalid zlib data: `+(e[1]&32?`need`:`unexpected`)+` dictionary`),(e[1]>>3&4)+2};function Qs(e,t){return Ys(e.subarray(Zs(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var $s=typeof TextDecoder<`u`&&new TextDecoder;try{$s.decode(Xs,{stream:!0})}catch{}function ec(e,t,n){let r=n.length-e-1;if(t>=n[r])return r-1;if(t<=n[e])return e;let i=e,a=r,o=Math.floor((i+a)/2);for(;t<n[o]||t>=n[o+1];)t<n[o]?a=o:i=o,o=Math.floor((i+a)/2);return o}function tc(e,t,n,r){let i=[],a=[],o=[];i[0]=1;for(let s=1;s<=n;++s){a[s]=t-r[e+1-s],o[s]=r[e+s]-t;let n=0;for(let e=0;e<s;++e){let t=o[e+1],r=a[s-e],c=i[e]/(t+r);i[e]=n+t*c,n=r*c}i[s]=n}return i}function nc(e,t,n,r){let i=ec(e,r,t),a=tc(i,r,e,t),o=new Ct(0,0,0,0);for(let t=0;t<=e;++t){let r=n[i-e+t],s=a[t],c=r.w*s;o.x+=r.x*c,o.y+=r.y*c,o.z+=r.z*c,o.w+=r.w*s}return o}function rc(e,t,n,r,i){let a=[];for(let e=0;e<=n;++e)a[e]=0;let o=[];for(let e=0;e<=r;++e)o[e]=a.slice(0);let s=[];for(let e=0;e<=n;++e)s[e]=a.slice(0);s[0][0]=1;let c=a.slice(0),l=a.slice(0);for(let r=1;r<=n;++r){c[r]=t-i[e+1-r],l[r]=i[e+r]-t;let n=0;for(let e=0;e<r;++e){let t=l[e+1],i=c[r-e];s[r][e]=t+i;let a=s[e][r-1]/s[r][e];s[e][r]=n+t*a,n=i*a}s[r][r]=n}for(let e=0;e<=n;++e)o[0][e]=s[e][n];for(let e=0;e<=n;++e){let t=0,i=1,c=[];for(let e=0;e<=n;++e)c[e]=a.slice(0);c[0][0]=1;for(let a=1;a<=r;++a){let r=0,l=e-a,u=n-a;e>=a&&(c[i][0]=c[t][0]/s[u+1][l],r=c[i][0]*s[l][u]);let d=l>=-1?1:-l,f=e-1<=u?a-1:n-e;for(let e=d;e<=f;++e)c[i][e]=(c[t][e]-c[t][e-1])/s[u+1][l+e],r+=c[i][e]*s[l+e][u];e<=u&&(c[i][a]=-c[t][a-1]/s[u+1][e],r+=c[i][a]*s[e][u]),o[a][e]=r;let p=t;t=i,i=p}}let u=n;for(let e=1;e<=r;++e){for(let t=0;t<=n;++t)o[e][t]*=u;u*=n-e}return o}function ic(e,t,n,r,i){let a=i<e?i:e,o=[],s=ec(e,r,t),c=rc(s,r,e,a,t),l=[];for(let e=0;e<n.length;++e){let t=n[e].clone(),r=t.w;t.x*=r,t.y*=r,t.z*=r,l[e]=t}for(let t=0;t<=a;++t){let n=l[s-e].clone().multiplyScalar(c[t][0]);for(let r=1;r<=e;++r)n.add(l[s-e+r].clone().multiplyScalar(c[t][r]));o[t]=n}for(let e=a+1;e<=i+1;++e)o[e]=new Ct(0,0,0);return o}function ac(e,t){let n=1;for(let t=2;t<=e;++t)n*=t;let r=1;for(let e=2;e<=t;++e)r*=e;for(let n=2;n<=e-t;++n)r*=n;return n/r}function oc(e){let t=e.length,n=[],r=[];for(let i=0;i<t;++i){let t=e[i];n[i]=new U(t.x,t.y,t.z),r[i]=t.w}let i=[];for(let e=0;e<t;++e){let t=n[e].clone();for(let n=1;n<=e;++n)t.sub(i[e-n].clone().multiplyScalar(ac(e,n)*r[n]));i[e]=t.divideScalar(r[0])}return i}function sc(e,t,n,r,i){return oc(ic(e,t,n,r,i))}var cc=class extends u{constructor(e,t,n,r,i){super();let a=t?t.length-1:0,o=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=i||a;for(let e=0;e<o;++e){let t=n[e];this.controlPoints[e]=new Ct(t.x,t.y,t.z,t.w)}}getPoint(e,t=new U){let n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),i=nc(this.degree,this.knots,this.controlPoints,r);return i.w!==1&&i.divideScalar(i.w),n.set(i.x,i.y,i.z)}getTangent(e,t=new U){let n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),i=sc(this.degree,this.knots,this.controlPoints,r,1);return n.copy(i[1]).normalize(),n}toJSON(){let e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(e=>e.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(e=>new Ct(e[0],e[1],e[2],e[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}},Y,lc,uc,dc=class extends kt{constructor(e){super(e)}load(e,t,n,r){let i=this,a=i.path===``?He.extractUrlBase(e):i.path,o=new E(this.manager);o.setPath(i.path),o.setResponseType(`arraybuffer`),o.setRequestHeader(i.requestHeader),o.setWithCredentials(i.withCredentials),o.load(e,function(n){try{t(i.parse(n,a))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e,t){if(yc(e))Y=new gc().parse(e);else{let t=Ac(e);if(!bc(t))throw Error(`THREE.FBXLoader: Unknown format.`);if(xc(t)<7e3)throw Error(`THREE.FBXLoader: FBX version not supported, FileVersion: `+xc(t));Y=new hc().parse(t)}return new fc(new ne(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin),this.manager).parse(Y)}},fc=class{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){lc=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),i=new pc().parse(r);return this.parseScene(r,i,n),uc}parseConnections(){let e=new Map;return`Connections`in Y&&Y.Connections.connections.forEach(function(t){let n=t[0],r=t[1],i=t[2];e.has(n)||e.set(n,{parents:[],children:[]});let a={ID:r,relationship:i};e.get(n).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});let o={ID:n,relationship:i};e.get(r).children.push(o)}),e}parseImages(){let e={},t={};if(`Video`in Y.Objects){let n=Y.Objects.Video;for(let r in n){let i=n[r],a=parseInt(r);if(e[a]=i.RelativeFilename||i.Filename,`Content`in i){let e=i.Content instanceof ArrayBuffer&&i.Content.byteLength>0,a=typeof i.Content==`string`&&i.Content!==``;if(e||a){let e=this.parseImage(n[r]);t[i.RelativeFilename||i.Filename]=e}}}}for(let n in e){let r=e[n];e[n]=t[r]===void 0?e[n].split(`\\`).pop():t[r]}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(`.`)+1).toLowerCase(),i;switch(r){case`bmp`:i=`image/bmp`;break;case`jpg`:case`jpeg`:i=`image/jpeg`;break;case`png`:i=`image/png`;break;case`tif`:i=`image/tiff`;break;case`tga`:this.manager.getHandler(`.tga`)===null&&console.warn(`FBXLoader: TGA loader not found, skipping `,n),i=`image/tga`;break;case`webp`:i=`image/webp`;break;default:console.warn(`FBXLoader: Image type "`+r+`" is not supported.`);return}if(typeof t==`string`)return`data:`+i+`;base64,`+t;{let e=new Uint8Array(t);return window.URL.createObjectURL(new Blob([e],{type:i}))}}parseTextures(e){let t=new Map;if(`Texture`in Y.Objects){let n=Y.Objects.Texture;for(let r in n){let i=this.parseTexture(n[r],e);t.set(parseInt(r),i)}}return t}parseTexture(e,t){let n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;let r=e.WrapModeU,i=e.WrapModeV,a=r===void 0?0:r.value,o=i===void 0?0:i.value;if(n.wrapS=a===0?ce:qe,n.wrapT=o===0?ce:qe,`Scaling`in e){let t=e.Scaling.value;n.repeat.x=t[0],n.repeat.y=t[1]}if(`Translation`in e){let t=e.Translation.value;n.offset.x=t[0],n.offset.y=t[1]}return n}loadTexture(e,t){let n=e.FileName.split(`.`).pop().toLowerCase(),r=this.manager.getHandler(`.${n}`);r===null&&(r=this.textureLoader);let i=r.path;i||r.setPath(this.textureLoader.path);let a=lc.get(e.id).children,o;if(a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(o=t[a[0].ID],(o.indexOf(`blob:`)===0||o.indexOf(`data:`)===0)&&r.setPath(void 0)),o===void 0)return console.warn(`FBXLoader: Undefined filename, creating placeholder texture.`),new S;let s=r.load(o);return r.setPath(i),s}parseMaterials(e){let t=new Map;if(`Material`in Y.Objects){let n=Y.Objects.Material;for(let r in n){let i=this.parseMaterial(n[r],e);i!==null&&t.set(parseInt(r),i)}}return t}parseMaterial(e,t){let n=e.id,r=e.attrName,i=e.ShadingModel;if(typeof i==`object`&&(i=i.value),!lc.has(n))return null;let a=this.parseParameters(e,t,n),o;switch(i.toLowerCase()){case`phong`:o=new Lt;break;case`lambert`:o=new Le;break;default:console.warn(`THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.`,i),o=new Lt}return o.setValues(a),o.name=r,o}parseParameters(e,t,n){let r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=G.colorSpaceToWorking(new L().fromArray(e.Diffuse.value),P):e.DiffuseColor&&(e.DiffuseColor.type===`Color`||e.DiffuseColor.type===`ColorRGB`)&&(r.color=G.colorSpaceToWorking(new L().fromArray(e.DiffuseColor.value),P)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=G.colorSpaceToWorking(new L().fromArray(e.Emissive.value),P):e.EmissiveColor&&(e.EmissiveColor.type===`Color`||e.EmissiveColor.type===`ColorRGB`)&&(r.emissive=G.colorSpaceToWorking(new L().fromArray(e.EmissiveColor.value),P)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),r.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(r.opacity===1||r.opacity===0)&&(r.opacity=e.Opacity?parseFloat(e.Opacity.value):null,r.opacity===null&&(r.opacity=1)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=G.colorSpaceToWorking(new L().fromArray(e.Specular.value),P):e.SpecularColor&&e.SpecularColor.type===`Color`&&(r.specular=G.colorSpaceToWorking(new L().fromArray(e.SpecularColor.value),P));let i=this;return lc.get(n).children.forEach(function(e){let n=e.relationship;switch(n){case`Bump`:r.bumpMap=i.getTexture(t,e.ID);break;case`Maya|TEX_ao_map`:r.aoMap=i.getTexture(t,e.ID);break;case`DiffuseColor`:case`Maya|TEX_color_map`:r.map=i.getTexture(t,e.ID),r.map!==void 0&&(r.map.colorSpace=P);break;case`DisplacementColor`:r.displacementMap=i.getTexture(t,e.ID);break;case`EmissiveColor`:r.emissiveMap=i.getTexture(t,e.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=P);break;case`NormalMap`:case`Maya|TEX_normal_map`:r.normalMap=i.getTexture(t,e.ID);break;case`ReflectionColor`:r.envMap=i.getTexture(t,e.ID),r.envMap!==void 0&&(r.envMap.mapping=303,r.envMap.colorSpace=P);break;case`SpecularColor`:r.specularMap=i.getTexture(t,e.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=P);break;case`TransparentColor`:case`TransparencyFactor`:r.alphaMap=i.getTexture(t,e.ID),r.transparent=!0;break;default:console.warn(`THREE.FBXLoader: %s map is not supported in three.js, skipping texture.`,n)}}),r}getTexture(e,t){return`LayeredTexture`in Y.Objects&&t in Y.Objects.LayeredTexture&&(console.warn(`THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.`),t=lc.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if(`Deformer`in Y.Objects){let n=Y.Objects.Deformer;for(let r in n){let i=n[r],a=lc.get(parseInt(r));if(i.attrType===`Skin`){let t=this.parseSkeleton(a,n);t.ID=r,a.parents.length>1&&console.warn(`THREE.FBXLoader: skeleton attached to more than one geometry is not supported.`),t.geometryID=a.parents[0].ID,e[r]=t}else if(i.attrType===`BlendShape`){let e={id:r};e.rawTargets=this.parseMorphTargets(a,n),e.id=r,a.parents.length>1&&console.warn(`THREE.FBXLoader: morph target attached to more than one geometry is not supported.`),t[r]=e}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(e){let r=t[e.ID];if(r.attrType!==`Cluster`)return;let i={ID:e.ID,indices:[],weights:[],transformLink:new V().fromArray(r.TransformLink.a)};`Indexes`in r&&(i.indices=r.Indexes.a,i.weights=r.Weights.a),n.push(i)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let r=0;r<e.children.length;r++){let i=e.children[r],a=t[i.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!==`BlendShapeChannel`)return;o.geoID=lc.get(parseInt(i.ID)).children.filter(function(e){return e.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){uc=new we;let r=this.parseModels(e.skeletons,t,n),i=Y.Objects.Model,a=this;r.forEach(function(e){let t=i[e.ID];a.setLookAtProperties(e,t),lc.get(e.ID).parents.forEach(function(t){let n=r.get(t.ID);n!==void 0&&n.add(e)}),e.parent===null&&uc.add(e)}),this.addGlobalSceneSettings(),uc.traverse(function(e){if(e.userData.transformData){e.parent&&(e.userData.transformData.parentMatrix=e.parent.matrix,e.userData.transformData.parentMatrixWorld=e.parent.matrixWorld);let t=Dc(e.userData.transformData);e.applyMatrix4(t),e.updateWorldMatrix()}});let o=this.parsePoseNodes(),s=new Set;for(let t in e.skeletons)e.skeletons[t].rawBones.forEach(function(n,r){let i=e.skeletons[t].bones[r];i&&s.add(i.ID)});let c=new V;uc.traverse(function(e){if(e.isBone&&e.ID!==void 0&&!s.has(e.ID)){let t=o[e.ID];t!==void 0&&(e.parent?(c.copy(e.parent.matrixWorld).invert(),c.multiply(t)):c.copy(t),c.decompose(e.position,e.quaternion,e.scale),e.updateMatrix(),e.matrixWorld.copy(t))}}),this.bindSkeleton(e.skeletons,t,r);let l=new mc().parse();uc.children.length===1&&uc.children[0].isGroup&&(uc.children[0].animations=l,uc=uc.children[0]),uc.animations=l,`GlobalSettings`in Y&&`UpAxis`in Y.GlobalSettings&&Y.GlobalSettings.UpAxis.value===2&&(console.warn(`THREE.FBXLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted.`),uc.rotation.set(-Math.PI/2,0,0))}parseModels(e,t,n){let r=new Map,i=Y.Objects.Model;for(let a in i){let o=parseInt(a),s=i[a],c=lc.get(o),l=this.buildSkeleton(c,e,o,s.attrName);if(!l){switch(s.attrType){case`Camera`:l=this.createCamera(c);break;case`Light`:l=this.createLight(c);break;case`Mesh`:l=this.createMesh(c,t,n);break;case`NurbsCurve`:l=this.createCurve(c,t);break;case`LimbNode`:case`Root`:l=new Re;break;default:l=new we}l.name=s.attrName?he.sanitizeNodeName(s.attrName):``,l.userData.originalName=s.attrName,l.ID=o}this.getTransformData(l,s),r.set(o,l)}return r}buildSkeleton(e,t,n,r){let i=null;return e.parents.forEach(function(e){for(let a in t){let o=t[a];o.rawBones.forEach(function(t,a){if(t.ID===e.ID){let e=i;i=new Re,i.matrixWorld.copy(t.transformLink),i.name=r?he.sanitizeNodeName(r):``,i.userData.originalName=r,i.ID=n,o.bones[a]=i,e!==null&&i.add(e)}})}}),i}createCamera(e){let t,n;if(e.children.forEach(function(e){let t=Y.Objects.NodeAttribute[e.ID];t!==void 0&&(n=t)}),n===void 0)t=new at;else{let e=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(e=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let i=1e3;n.FarPlane!==void 0&&(i=n.FarPlane.value/1e3);let a=window.innerWidth,o=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,o=n.AspectHeight.value);let s=a/o,c=45;n.FieldOfView!==void 0&&(c=n.FieldOfView.value);let l=n.FocalLength?n.FocalLength.value:null;switch(e){case 0:t=new nt(c,s,r,i),l!==null&&t.setFocalLength(l);break;case 1:console.warn(`THREE.FBXLoader: Orthographic cameras not supported yet.`),t=new at;break;default:console.warn(`THREE.FBXLoader: Unknown camera type `+e+`.`),t=new at}}return t}createLight(e){let t,n;if(e.children.forEach(function(e){let t=Y.Objects.NodeAttribute[e.ID];t!==void 0&&(n=t)}),n===void 0)t=new at;else{let e;e=n.LightType===void 0?0:n.LightType.value;let r=16777215;n.Color!==void 0&&(r=G.colorSpaceToWorking(new L().fromArray(n.Color.value),P));let i=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(i=0);let a=0;switch(n.FarAttenuationEnd!==void 0&&(a=n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?0:n.FarAttenuationEnd.value),e){case 0:t=new de(r,i,a,1);break;case 1:t=new tt(r,i);break;case 2:let e=Math.PI/3,o=0;n.OuterAngle===void 0?n.InnerAngle!==void 0&&(e=W.degToRad(n.InnerAngle.value)):(e=W.degToRad(n.OuterAngle.value),n.InnerAngle!==void 0&&(o=1-n.InnerAngle.value/n.OuterAngle.value,o=Math.max(0,o))),t=new F(r,i,a,e,o,1);break;default:console.warn(`THREE.FBXLoader: Unknown light type `+n.LightType.value+`, defaulting to a PointLight.`),t=new de(r,i)}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,i=null,a=null,o=[];if(e.children.forEach(function(e){t.has(e.ID)&&(i=t.get(e.ID)),n.has(e.ID)&&o.push(n.get(e.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new Lt({name:kt.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),`color`in i.attributes&&o.forEach(function(e){e.vertexColors=!0}),i.groups.length>0){let e=!1;for(let t=0,n=i.groups.length;t<n;t++){let n=i.groups[t];(n.materialIndex<0||n.materialIndex>=o.length)&&(n.materialIndex=o.length,e=!0)}if(e){let e=new Lt;o.push(e)}}return i.FBX_Deformer?(r=new Te(i,a),r.normalizeSkinWeights()):r=new Ye(i,a),r}createCurve(e,t){let n=e.children.reduce(function(e,n){return t.has(n.ID)&&(e=t.get(n.ID)),e},null),r=new pt({name:kt.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Ue(n,r)}getTransformData(e,t){let n={};`InheritType`in t&&(n.inheritType=parseInt(t.InheritType.value)),n.eulerOrder=`RotationOrder`in t?Oc(t.RotationOrder.value):Oc(0),`Lcl_Translation`in t&&(n.translation=t.Lcl_Translation.value),`PreRotation`in t&&(n.preRotation=t.PreRotation.value),`Lcl_Rotation`in t&&(n.rotation=t.Lcl_Rotation.value),`PostRotation`in t&&(n.postRotation=t.PostRotation.value),`Lcl_Scaling`in t&&(n.scale=t.Lcl_Scaling.value),`ScalingOffset`in t&&(n.scalingOffset=t.ScalingOffset.value),`ScalingPivot`in t&&(n.scalingPivot=t.ScalingPivot.value),`RotationOffset`in t&&(n.rotationOffset=t.RotationOffset.value),`RotationPivot`in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){`LookAtProperty`in t&&lc.get(e.ID).children.forEach(function(t){if(t.relationship===`LookAtProperty`){let n=Y.Objects.Model[t.ID];if(`Lcl_Translation`in n){let t=n.Lcl_Translation.value;e.target===void 0?e.lookAt(new U().fromArray(t)):(e.target.position.fromArray(t),uc.add(e.target))}}})}bindSkeleton(e,t,n){for(let r in e){let i=e[r],a=[];for(let e=0,t=i.bones.length;e<t;e++){let t=new V;i.bones[e]&&i.rawBones[e]&&t.copy(i.rawBones[e].transformLink).invert(),a.push(t)}lc.get(parseInt(i.ID)).parents.forEach(function(e){if(t.has(e.ID)){let t=e.ID;lc.get(t).parents.forEach(function(e){if(n.has(e.ID)){let t=n.get(e.ID);t.updateMatrixWorld(!0),t.bind(new c(i.bones,a),t.matrixWorld)}})}})}}parsePoseNodes(){let e={};if(`Pose`in Y.Objects){let t=Y.Objects.Pose;for(let n in t)if(t[n].attrType===`BindPose`&&t[n].NbPoseNodes>0){let r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(t){e[t.Node]=new V().fromArray(t.Matrix.a)}):e[r.Node]=new V().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if(`GlobalSettings`in Y){if(`AmbientColor`in Y.GlobalSettings){let e=Y.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){let e=new L().setRGB(t,n,r,P);uc.add(new dt(e,1))}}`UnitScaleFactor`in Y.GlobalSettings&&(uc.userData.unitScaleFactor=Y.GlobalSettings.UnitScaleFactor.value)}}},pc=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if(`Geometry`in Y.Objects){let n=Y.Objects.Geometry;for(let r in n){let i=lc.get(parseInt(r)),a=this.parseGeometry(i,n[r],e);t.set(parseInt(r),a)}}return this.negativeMaterialIndices===!0&&console.warn(`THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected.`),t}parseGeometry(e,t,n){switch(t.attrType){case`Mesh`:return this.parseMeshGeometry(e,t,n);case`NurbsCurve`:return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let r=n.skeletons,i=[],a=e.parents.map(function(e){return Y.Objects.Model[e.ID]});if(a.length===0)return;let o=e.children.reduce(function(e,t){return r[t.ID]!==void 0&&(e=r[t.ID]),e},null);e.children.forEach(function(e){n.morphTargets[e.ID]!==void 0&&i.push(n.morphTargets[e.ID])});let s=a[0],c={};`RotationOrder`in s&&(c.eulerOrder=Oc(s.RotationOrder.value)),`InheritType`in s&&(c.inheritType=parseInt(s.InheritType.value)),`GeometricTranslation`in s&&(c.translation=s.GeometricTranslation.value),`GeometricRotation`in s&&(c.rotation=s.GeometricRotation.value),`GeometricScaling`in s&&(c.scale=s.GeometricScaling.value);let l=Dc(c);return this.genGeometry(t,o,i,l)}genGeometry(e,t,n,r){let i=new We;e.attrName&&(i.name=e.attrName);let a=this.parseGeoNode(e,t),o=this.genBuffers(a),s=new A(o.vertex,3);if(s.applyMatrix4(r),i.setAttribute(`position`,s),o.colors.length>0&&i.setAttribute(`color`,new A(o.colors,3)),t&&(i.setAttribute(`skinIndex`,new te(o.weightsIndices,4)),i.setAttribute(`skinWeight`,new A(o.vertexWeights,4)),i.FBX_Deformer=t),o.normal.length>0){let e=new H().getNormalMatrix(r),t=new A(o.normal,3);t.applyNormalMatrix(e),i.setAttribute(`normal`,t)}if(o.uvs.forEach(function(e,t){let n=t===0?`uv`:`uv${t}`;i.setAttribute(n,new A(o.uvs[t],2))}),a.material&&a.material.mappingType!==`AllSame`){let e=o.materialIndex[0],t=0;if(o.materialIndex.forEach(function(n,r){n!==e&&(i.addGroup(t,r-t,e),e=n,t=r)}),i.groups.length>0){let t=i.groups[i.groups.length-1],n=t.start+t.count;n!==o.materialIndex.length&&i.addGroup(n,o.materialIndex.length-n,e)}i.groups.length===0&&i.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(i,e,n,r),i}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices===void 0?[]:e.Vertices.a,n.vertexIndices=e.PolygonVertexIndex===void 0?[]:e.PolygonVertexIndex.a,e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let t=0;for(;e.LayerElementUV[t];)e.LayerElementUV[t].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[t])),t++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(e,t){e.indices.forEach(function(r,i){n.weightTable[r]===void 0&&(n.weightTable[r]=[]),n.weightTable[r].push({id:t,weight:e.weights[i]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,r=0,i=!1,a=[],o=[],s=[],c=[],l=[],u=[],d=this;return e.vertexIndices.forEach(function(f,p){let m,h=!1;f<0&&(f^=-1,h=!0);let g=[],_=[];if(a.push(f*3,f*3+1,f*3+2),e.color){let t=wc(p,n,f,e.color);s.push(t[0],t[1],t[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(e){_.push(e.weight),g.push(e.id)}),_.length>4){i||=(console.warn(`THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.`),!0);let e=[0,0,0,0],t=[0,0,0,0];_.forEach(function(n,r){let i=n,a=g[r];t.forEach(function(t,n,r){if(i>t){r[n]=i,i=t;let o=e[n];e[n]=a,a=o}})}),g=e,_=t}for(;_.length<4;)_.push(0),g.push(0);for(let e=0;e<4;++e)l.push(_[e]),u.push(g[e])}if(e.normal){let t=wc(p,n,f,e.normal);o.push(t[0],t[1],t[2])}e.material&&e.material.mappingType!==`AllSame`&&(m=wc(p,n,f,e.material)[0],m<0&&(d.negativeMaterialIndices=!0,m=0)),e.uv&&e.uv.forEach(function(e,t){let r=wc(p,n,f,e);c[t]===void 0&&(c[t]=[]),c[t].push(r[0]),c[t].push(r[1])}),r++,h&&(d.genFace(t,e,a,m,o,s,c,l,u,r),n++,r=0,a=[],o=[],s=[],c=[],l=[],u=[])}),t}getNormalNewell(e){let t=new U(0,0,0);for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t.x+=(r.y-i.y)*(r.z+i.z),t.y+=(r.z-i.z)*(r.x+i.x),t.z+=(r.x-i.x)*(r.y+i.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),n=(Math.abs(t.z)>.5?new U(0,1,0):new U(0,0,1)).cross(t).normalize();return{normal:t,tangent:n,bitangent:t.clone().cross(n).normalize()}}flattenVertex(e,t,n){return new Ne(e.dot(t),e.dot(n))}genFace(e,t,n,r,i,a,o,s,c,l){let u;if(l>3){let e=[],r=t.baseVertexPositions||t.vertexPositions;for(let t=0;t<n.length;t+=3)e.push(new U(r[n[t]],r[n[t+1]],r[n[t+2]]));let{tangent:i,bitangent:a}=this.getNormalTangentAndBitangent(e),o=[];for(let t of e)o.push(this.flattenVertex(t,i,a));u=me.triangulateShape(o,[])}else u=[[0,1,2]];for(let[l,d,f]of u)e.vertex.push(t.vertexPositions[n[l*3]]),e.vertex.push(t.vertexPositions[n[l*3+1]]),e.vertex.push(t.vertexPositions[n[l*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),t.skeleton&&(e.vertexWeights.push(s[l*4]),e.vertexWeights.push(s[l*4+1]),e.vertexWeights.push(s[l*4+2]),e.vertexWeights.push(s[l*4+3]),e.vertexWeights.push(s[d*4]),e.vertexWeights.push(s[d*4+1]),e.vertexWeights.push(s[d*4+2]),e.vertexWeights.push(s[d*4+3]),e.vertexWeights.push(s[f*4]),e.vertexWeights.push(s[f*4+1]),e.vertexWeights.push(s[f*4+2]),e.vertexWeights.push(s[f*4+3]),e.weightsIndices.push(c[l*4]),e.weightsIndices.push(c[l*4+1]),e.weightsIndices.push(c[l*4+2]),e.weightsIndices.push(c[l*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3])),t.color&&(e.colors.push(a[l*3]),e.colors.push(a[l*3+1]),e.colors.push(a[l*3+2]),e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[f*3]),e.colors.push(a[f*3+1]),e.colors.push(a[f*3+2])),t.material&&t.material.mappingType!==`AllSame`&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(i[l*3]),e.normal.push(i[l*3+1]),e.normal.push(i[l*3+2]),e.normal.push(i[d*3]),e.normal.push(i[d*3+1]),e.normal.push(i[d*3+2]),e.normal.push(i[f*3]),e.normal.push(i[f*3+1]),e.normal.push(i[f*3+2])),t.uv&&t.uv.forEach(function(t,n){e.uvs[n]===void 0&&(e.uvs[n]=[]),e.uvs[n].push(o[n][l*2]),e.uvs[n].push(o[n][l*2+1]),e.uvs[n].push(o[n][d*2]),e.uvs[n].push(o[n][d*2+1]),e.uvs[n].push(o[n][f*2]),e.uvs[n].push(o[n][f*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let i=r.clone().setPosition(0,0,0),a=this;n.forEach(function(n){n.rawTargets.forEach(function(n){let r=Y.Objects.Geometry[n.geoID];r!==void 0&&a.genMorphGeometry(e,t,r,i,n.name)})})}genMorphGeometry(e,t,n,r,i){let a=t.Vertices===void 0?[]:t.Vertices.a,o=t.PolygonVertexIndex===void 0?[]:t.PolygonVertexIndex.a,s=n.Vertices===void 0?[]:n.Vertices.a,c=n.Indexes===void 0?[]:n.Indexes.a,l=e.attributes.position.count*3,u=new Float32Array(l);for(let e=0;e<c.length;e++){let t=c[e]*3;u[t]=s[e*3],u[t+1]=s[e*3+1],u[t+2]=s[e*3+2]}let d={vertexIndices:o,vertexPositions:u,baseVertexPositions:a},f=this.genBuffers(d),p=new A(f.vertex,3);p.name=i||n.attrName,p.applyMatrix4(r),e.morphAttributes.position.push(p)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a,i=[];return n===`IndexToDirect`&&(`NormalIndex`in e?i=e.NormalIndex.a:`NormalsIndex`in e&&(i=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:i,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a,i=[];return n===`IndexToDirect`&&(i=e.UVIndex.a),{dataSize:2,buffer:r,indices:i,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a,i=[];n===`IndexToDirect`&&(i=e.ColorIndex.a);for(let e=0,t=new L;e<r.length;e+=4)t.fromArray(r,e),G.colorSpaceToWorking(t,P),t.toArray(r,e);return{dataSize:4,buffer:r,indices:i,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t===`NoMappingInformation`)return{dataSize:1,buffer:[0],indices:[0],mappingType:`AllSame`,referenceType:n};let r=e.Materials.a,i=[];for(let e=0;e<r.length;++e)i.push(e);return{dataSize:1,buffer:r,indices:i,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error(`THREE.FBXLoader: Invalid Order %s given for geometry ID: %s`,e.Order,e.id),new We;let n=t-1,r=e.KnotVector.a,i=[],a=e.Points.a;for(let e=0,t=a.length;e<t;e+=4)i.push(new Ct().fromArray(a,e));let o,s;if(e.Form===`Closed`)i.push(i[0]);else if(e.Form===`Periodic`){o=n,s=r.length-1-o;for(let e=0;e<n;++e)i.push(i[e])}let c=new cc(n,r,i,o,s).getPoints(i.length*12);return new We().setFromPoints(c)}},mc=class{parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let r=t[n],i=this.addClip(r);e.push(i)}return e}parseClips(){if(Y.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=Y.Objects.AnimationCurveNode,t=new Map;for(let n in e){let r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){let e={id:r.id,attr:r.attrName,curves:{}};t.set(e.id,e)}}return t}parseAnimationCurves(e){let t=Y.Objects.AnimationCurve;for(let n in t){let r={id:t[n].id,times:t[n].KeyTime.a.map(Sc),values:t[n].KeyValueFloat.a},i=lc.get(r.id);if(i!==void 0){let t=i.parents[0].ID,n=i.parents[0].relationship;n.match(/X/)?e.get(t).curves.x=r:n.match(/Y/)?e.get(t).curves.y=r:n.match(/Z/)?e.get(t).curves.z=r:n.match(/DeformPercent/)&&e.has(t)&&(e.get(t).curves.morph=r)}}}parseAnimationLayers(e){let t=Y.Objects.AnimationLayer,n=new Map;for(let r in t){let t=[],i=lc.get(parseInt(r));i!==void 0&&(i.children.forEach(function(n,r){if(e.has(n.ID)){let i=e.get(n.ID);if(i.curves.x!==void 0||i.curves.y!==void 0||i.curves.z!==void 0){if(t[r]===void 0){let e=lc.get(n.ID).parents.filter(function(e){return e.relationship!==void 0});if(e.length===0)return;let i=e[0].ID;if(i!==void 0){let e=Y.Objects.Model[i.toString()];if(e===void 0){console.warn(`THREE.FBXLoader: Encountered a unused curve.`,n);return}let a={modelName:e.attrName?he.sanitizeNodeName(e.attrName):``,ID:e.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};uc.traverse(function(t){t.ID===e.id&&(a.transform=t.matrix,t.userData.transformData&&(a.eulerOrder=t.userData.transformData.eulerOrder,t.userData.transformData.rotation&&(a.initialRotation=t.userData.transformData.rotation)))}),a.transform||=new V,`PreRotation`in e&&(a.preRotation=e.PreRotation.value),`PostRotation`in e&&(a.postRotation=e.PostRotation.value),t[r]=a}}t[r]&&(t[r][i.attr]=i)}else if(i.curves.morph!==void 0){if(t[r]===void 0){let e=lc.get(n.ID).parents.filter(function(e){return e.relationship!==void 0});if(e.length===0)return;let i=e[0].ID,a=lc.get(i).parents[0].ID,o=lc.get(a).parents[0].ID,s=lc.get(o).parents[0].ID,c=Y.Objects.Model[s],l={modelName:c.attrName?he.sanitizeNodeName(c.attrName):``,morphName:Y.Objects.Deformer[i].attrName};t[r]=l}t[r][i.attr]=i}}}),n.set(parseInt(r),t))}return n}parseAnimStacks(e){let t=Y.Objects.AnimationStack,n={};for(let r in t){let i=lc.get(parseInt(r)).children;i.length>1&&console.warn(`THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.`);let a=e.get(i[0].ID);n[r]={name:t[r].attrName,layer:a}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(e){t=t.concat(n.generateTracks(e))}),new yt(e.name,-1,t)}generateTracks(e){let t=[],n=new U,r=new U;if(e.transform&&e.transform.decompose(n,new Ht,r),n=n.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.T.curves,n,`position`);r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let n=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder,e.initialRotation);n!==void 0&&t.push(n)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let n=this.generateVectorTrack(e.modelName,e.S.curves,r,`scale`);n!==void 0&&t.push(n)}if(e.DeformPercent!==void 0){let n=this.generateMorphTrack(e);n!==void 0&&t.push(n)}return t}generateVectorTrack(e,t,n,r){let i=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(i,t,n);return new ze(e+`.`+r,i,a)}generateRotationTrack(e,t,n,r,i,a){let o,s;if(t.x!==void 0||t.y!==void 0||t.z!==void 0){let e=this.getTimesForAllAxes(t);if(e.length>0){let n=a||[0,0,0],r=this.synchronizeCurve(t.x,e,n[0]),c=this.synchronizeCurve(t.y,e,n[1]),l=this.synchronizeCurve(t.z,e,n[2]),u=this.interpolateRotations(r,c,l,i);o=u[0],s=u[1]}}let c=Oc(0);n!==void 0&&(n=n.map(W.degToRad),n.push(c),n=new ae().fromArray(n),n=new Ht().setFromEuler(n)),r!==void 0&&(r=r.map(W.degToRad),r.push(c),r=new ae().fromArray(r),r=new Ht().setFromEuler(r).invert());let u=new Ht,d=new ae,f=[];if(!(!s||!o)){for(let e=0;e<s.length;e+=3)d.set(s[e],s[e+1],s[e+2],i),u.setFromEuler(d),n!==void 0&&u.premultiply(n),r!==void 0&&u.multiply(r),e>2&&new Ht().fromArray(f,(e-3)/3*4).dot(u)<0&&u.set(-u.x,-u.y,-u.z,-u.w),u.toArray(f,e/3*4);return new l(e+`.quaternion`,o,f)}}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(e){return e/100}),r=uc.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new le(e.modelName+`.morphTargetInfluences[`+r+`]`,t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(e,t){return e-t}),t.length>1){let e=1,n=t[0];for(let r=1;r<t.length;r++){let i=t[r];i!==n&&(t[e]=i,n=i,e++)}t=t.slice(0,e)}return t}getKeyframeTrackValues(e,t,n){let r=n,i=[],a=-1,o=-1,s=-1;return e.forEach(function(e){if(t.x&&(a=t.x.times.indexOf(e)),t.y&&(o=t.y.times.indexOf(e)),t.z&&(s=t.z.times.indexOf(e)),a!==-1){let e=t.x.values[a];i.push(e),r[0]=e}else i.push(r[0]);if(o!==-1){let e=t.y.values[o];i.push(e),r[1]=e}else i.push(r[1]);if(s!==-1){let e=t.z.values[s];i.push(e),r[2]=e}else i.push(r[2])}),i}synchronizeCurve(e,t,n){if(e===void 0)return{times:t,values:t.map(()=>n)};if(e.times.length===t.length)return e;let r=[];for(let i=0;i<t.length;i++)r.push(this.sampleCurveValue(e,t[i],n));return{times:t,values:r}}sampleCurveValue(e,t,n){let r=e.times,i=e.values;if(t<=r[0])return i[0];if(t>=r[r.length-1])return i[i.length-1];for(let e=0;e<r.length-1;e++)if(t>=r[e]&&t<=r[e+1]){if(r[e]===t)return i[e];let n=(t-r[e])/(r[e+1]-r[e]);return i[e]*(1-n)+i[e+1]*n}return n}interpolateRotations(e,t,n,r){let i=[],a=[];i.push(e.times[0]),a.push(W.degToRad(e.values[0])),a.push(W.degToRad(t.values[0])),a.push(W.degToRad(n.values[0]));for(let o=1;o<e.values.length;o++){let s=[e.values[o-1],t.values[o-1],n.values[o-1]];if(isNaN(s[0])||isNaN(s[1])||isNaN(s[2]))continue;let c=s.map(W.degToRad),l=[e.values[o],t.values[o],n.values[o]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;let u=l.map(W.degToRad),d=[l[0]-s[0],l[1]-s[1],l[2]-s[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){let t=Math.max(...f)/180,n=new ae(...c,r),s=new ae(...u,r),l=new Ht().setFromEuler(n),d=new Ht().setFromEuler(s);l.dot(d)<0&&d.set(-d.x,-d.y,-d.z,-d.w);let p=e.times[o-1],m=e.times[o]-p,h=new Ht,g=new ae;for(let e=0;e<1;e+=1/t)h.copy(l.clone().slerp(d.clone(),e)),i.push(p+e*m),g.setFromQuaternion(h,r),a.push(g.x),a.push(g.y),a.push(g.z)}else i.push(e.times[o]),a.push(W.degToRad(e.values[o])),a.push(W.degToRad(t.values[o])),a.push(W.degToRad(n.values[o]))}return[i,a]}},hc=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),--this.currentIndent}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new vc,this.nodeStack=[],this.currentProp=[],this.currentPropName=``;let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(e,r){let i=e.match(/^[\s\t]*;/),a=e.match(/^[\s\t]*$/);if(i||a)return;let o=e.match(`^\\t{`+t.currentIndent+`}(\\w+):(.*){`,``),s=e.match(`^\\t{`+t.currentIndent+`}(\\w+):[\\s\\t\\r\\n](.*)`),c=e.match(`^\\t{`+(t.currentIndent-1)+`}}`);o?t.parseNodeBegin(e,o):s?t.parseNodeProperty(e,s,n[++r]):c?t.popStack():e.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(e)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,``).replace(/"$/,``),r=t[2].split(`,`).map(function(e){return e.trim().replace(/^"/,``).replace(/"$/,``)}),i={name:n},a=this.parseNodeAttr(r),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,i):n in o?(n===`PoseNode`?o.PoseNode.push(i):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==``&&(o[n][a.id]=i)):typeof a.id==`number`?(o[n]={},o[n][a.id]=i):n!==`Properties70`&&(o[n]=n===`PoseNode`?[i]:i),typeof a.id==`number`&&(i.id=a.id),a.name!==``&&(i.attrName=a.name),a.type!==``&&(i.attrType=a.type),this.pushStack(i)}parseNodeAttr(e){let t=e[0];e[0]!==``&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n=``,r=``;return e.length>1&&(n=e[1].replace(/^(\w+)::/,``),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,``).replace(/"$/,``).trim(),i=t[2].replace(/^"/,``).replace(/"$/,``).trim();r===`Content`&&i===`,`&&(i=n.replace(/"/g,``).replace(/,$/,``).trim());let a=this.getCurrentNode();if(a.name===`Properties70`){this.parseNodeSpecialProperty(e,r,i);return}if(r===`C`){let e=i.split(`,`).slice(1),t=parseInt(e[0]),n=parseInt(e[1]),o=i.split(`,`).slice(3);o=o.map(function(e){return e.trim().replace(/^"/,``)}),r=`connections`,i=[t,n],jc(i,o),a[r]===void 0&&(a[r]=[])}r===`Node`&&(a.id=i),r in a&&Array.isArray(a[r])?a[r].push(i):r===`a`?a.a=i:a[r]=i,this.setCurrentProp(a,r),r===`a`&&i.slice(-1)!==`,`&&(a.a=kc(i))}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==`,`&&(t.a=kc(t.a))}parseNodeSpecialProperty(e,t,n){let r=n.split(`",`).map(function(e){return e.trim().replace(/^\"/,``).replace(/\s/,`_`)}),i=r[0],a=r[1],o=r[2],s=r[3],c=r[4];switch(a){case`int`:case`enum`:case`bool`:case`ULongLong`:case`double`:case`Number`:case`FieldOfView`:c=parseFloat(c);break;case`Color`:case`ColorRGB`:case`Vector3D`:case`Lcl_Translation`:case`Lcl_Rotation`:case`Lcl_Scaling`:c=kc(c)}this.getPrevNode()[i]={type:a,type2:o,flag:s,value:c},this.setCurrentProp(this.getPrevNode(),i)}},gc=class{parse(e){let t=new _c(e);t.skip(23);let n=t.getUint32();if(n<6400)throw Error(`THREE.FBXLoader: FBX version not supported, FileVersion: `+n);let r=new vc;for(;!this.endOfContent(t);){let e=this.parseNode(t,n);e!==null&&r.add(e.name,e)}return r}endOfContent(e){return e.size()%16==0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},r=t>=7500?e.getUint64():e.getUint32(),i=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let a=e.getUint8(),o=e.getString(a);if(r===0)return null;let s=[];for(let t=0;t<i;t++)s.push(this.parseProperty(e));let c=s.length>0?s[0]:``,l=s.length>1?s[1]:``,u=s.length>2?s[2]:``;for(n.singleProperty=i===1&&e.getOffset()===r;r>e.getOffset();){let r=this.parseNode(e,t);r!==null&&this.parseSubNode(o,n,r)}return n.propertyList=s,typeof c==`number`&&(n.id=c),l!==``&&(n.attrName=l),u!==``&&(n.attrType=u),o!==``&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let e=n.propertyList[0];Array.isArray(e)?(t[n.name]=n,n.a=e):t[n.name]=e}else if(e===`Connections`&&n.name===`C`){let e=[];n.propertyList.forEach(function(t,n){n!==0&&e.push(t)}),t.connections===void 0&&(t.connections=[]),t.connections.push(e)}else if(n.name===`Properties70`)Object.keys(n).forEach(function(e){t[e]=n[e]});else if(e===`Properties70`&&n.name===`P`){let e=n.propertyList[0],r=n.propertyList[1],i=n.propertyList[2],a=n.propertyList[3],o;e.indexOf(`Lcl `)===0&&(e=e.replace(`Lcl `,`Lcl_`)),r.indexOf(`Lcl `)===0&&(r=r.replace(`Lcl `,`Lcl_`)),o=r===`Color`||r===`ColorRGB`||r===`Vector`||r===`Vector3D`||r.indexOf(`Lcl_`)===0?[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:n.propertyList[4],t[e]={type:r,type2:i,flag:a,value:o}}else t[n.name]===void 0?typeof n.id==`number`?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name===`PoseNode`?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case`C`:return e.getBoolean();case`D`:return e.getFloat64();case`F`:return e.getFloat32();case`I`:return e.getInt32();case`L`:return e.getInt64();case`R`:return n=e.getUint32(),e.getArrayBuffer(n);case`S`:return n=e.getUint32(),e.getString(n);case`Y`:return e.getInt16();case`b`:case`c`:case`d`:case`f`:case`i`:case`l`:let r=e.getUint32(),i=e.getUint32(),a=e.getUint32();if(i===0)switch(t){case`b`:case`c`:return e.getBooleanArray(r);case`d`:return e.getFloat64Array(r);case`f`:return e.getFloat32Array(r);case`i`:return e.getInt32Array(r);case`l`:return e.getInt64Array(r)}let o=new _c(Qs(new Uint8Array(e.getArrayBuffer(a))).buffer);switch(t){case`b`:case`c`:return o.getBooleanArray(r);case`d`:return o.getFloat64Array(r);case`f`:return o.getFloat32Array(r);case`i`:return o.getInt32Array(r);case`l`:return o.getInt64Array(r)}break;default:throw Error(`THREE.FBXLoader: Unknown property type `+t)}}},_c=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t===void 0||t,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)==1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let r=n.indexOf(0);return r>=0&&(n=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(n)}},vc=class{add(e,t){this[e]=t}};function yc(e){return e.byteLength>=21&&Ac(e,0,21)===`Kaydara FBX Binary  \0`}function bc(e){let t=[`K`,`a`,`y`,`d`,`a`,`r`,`a`,`\\`,`F`,`B`,`X`,`\\`,`B`,`i`,`n`,`a`,`r`,`y`,`\\`,`\\`],n=0;function r(t){let r=e[t-1];return e=e.slice(n+t),n++,r}for(let e=0;e<t.length;++e)if(r(1)===t[e])return!1;return!0}function xc(e){let t=e.match(/FBXVersion: (\d+)/);if(t)return parseInt(t[1]);throw Error(`THREE.FBXLoader: Cannot find the version number for the file given.`)}function Sc(e){return e/46186158e3}var Cc=[];function wc(e,t,n,r){let i;switch(r.mappingType){case`ByPolygonVertex`:i=e;break;case`ByPolygon`:i=t;break;case`ByVertice`:i=n;break;case`AllSame`:i=r.indices[0];break;default:console.warn(`THREE.FBXLoader: unknown attribute mapping type `+r.mappingType)}r.referenceType===`IndexToDirect`&&(i=r.indices[i]);let a=i*r.dataSize,o=a+r.dataSize;return Mc(Cc,r.buffer,a,o)}var Tc=new ae,Ec=new U;function Dc(e){let t=new V,n=new V,r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V,d=new V,f=new V,p=e.inheritType?e.inheritType:0;e.translation&&t.setPosition(Ec.fromArray(e.translation));let m=Oc(0);if(e.preRotation){let t=e.preRotation.map(W.degToRad);t.push(m),n.makeRotationFromEuler(Tc.fromArray(t))}if(e.rotation){let t=e.rotation.map(W.degToRad);t.push(e.eulerOrder||m),r.makeRotationFromEuler(Tc.fromArray(t))}if(e.postRotation){let t=e.postRotation.map(W.degToRad);t.push(m),i.makeRotationFromEuler(Tc.fromArray(t)),i.invert()}e.scale&&a.scale(Ec.fromArray(e.scale)),e.scalingOffset&&s.setPosition(Ec.fromArray(e.scalingOffset)),e.scalingPivot&&o.setPosition(Ec.fromArray(e.scalingPivot)),e.rotationOffset&&c.setPosition(Ec.fromArray(e.rotationOffset)),e.rotationPivot&&l.setPosition(Ec.fromArray(e.rotationPivot)),e.parentMatrixWorld&&(d.copy(e.parentMatrix),u.copy(e.parentMatrixWorld));let h=n.clone().multiply(r).multiply(i),g=new V;g.extractRotation(u);let _=new V;_.copyPosition(u);let v=_.clone().invert().multiply(u),y=g.clone().invert().multiply(v),b=a,x=new V;if(p===0)x.copy(g).multiply(h).multiply(y).multiply(b);else if(p===1)x.copy(g).multiply(y).multiply(h).multiply(b);else{let e=new V().scale(new U().setFromMatrixScale(d)).clone().invert(),t=y.clone().multiply(e);x.copy(g).multiply(h).multiply(t).multiply(b)}let S=l.clone().invert(),C=o.clone().invert(),w=t.clone().multiply(c).multiply(l).multiply(n).multiply(r).multiply(i).multiply(S).multiply(s).multiply(o).multiply(a).multiply(C),T=new V().copyPosition(w),E=u.clone().multiply(T);return f.copyPosition(E),w=f.clone().multiply(x),w.premultiply(u.invert()),w}function Oc(e){e||=0;let t=[`ZYX`,`YZX`,`XZY`,`ZXY`,`YXZ`,`XYZ`];return e===6?(console.warn(`THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.`),t[0]):t[e]}function kc(e){return e.split(`,`).map(function(e){return parseFloat(e)})}function Ac(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=e.byteLength),new TextDecoder().decode(new Uint8Array(e,t,n))}function jc(e,t){for(let n=0,r=e.length,i=t.length;n<i;n++,r++)e[r]=t[n]}function Mc(e,t,n,r){for(let i=n,a=0;i<r;i++,a++)e[a]=t[i];return e}async function Nc(e,t,n){let r=await Fc(e),i=r.tracks.find(e=>e.name.endsWith(`.position`));if(!i)throw Error(`Passage route has no position track: ${e}`);return Lc(i,t,n??r.duration,r.duration)}function Pc(e,t,n){let{points:r,times:i}=e,a=r[0];if(!a)return n.set(0,0,0);let o=r.length-1,s=r[o];if(r.length===1||t<=(i[0]??0))return n.copy(a);if(t>=(i[o]??0))return n.copy(s);for(let e=0;e<o;e+=1){let a=i[e]??0,o=i[e+1]??0;if(t<a||t>o)continue;let s=(t-a)/Math.max(o-a,1e-4);return n.copy(r[e]).lerp(r[e+1],s)}return n.copy(s)}async function Fc(e){let t=new E;t.setResponseType(`arraybuffer`);let n=await t.loadAsync(e),r=e.slice(0,e.lastIndexOf(`/`)+1),i=(new TextDecoder().decode(new Uint8Array(n,0,Math.min(n.byteLength,24))).startsWith(`Kaydara FBX`)?new dc().parse(n,r).animations:await Ic(n,r)).find(e=>e.tracks.some(e=>e.name.endsWith(`.position`)));if(!i)throw Error(`Passage route carries no animation: ${e}`);return i}function Ic(e,t){return new Promise((n,r)=>{new ka().parse(e,t,e=>n(e.animations),r)})}function Lc(e,t,n,r){let i=e.values,a=new U(i[0],i[1],i[2]),o=[];for(let e=0;e<i.length;e+=3)o.push(Rc(new U(i[e],i[e+1],i[e+2]),a,t));let s=[0];for(let e=1;e<o.length;e+=1){let t=o[e-1],n=o[e];s.push((s[e-1]??0)+(t&&n?t.distanceTo(n):0))}let c=Math.max(s[s.length-1]??0,1e-4);return{points:o,times:s.map(e=>e/c*n),durationSeconds:n,distanceMeters:c,endDirection:zc(e,a,t,r)}}function Rc(e,t,n){let r=e.sub(t).multiplyScalar(n.scaleToMeters);return n.axisStretch&&r.multiply(n.axisStretch),r.applyQuaternion(n.rotation).add(n.start)}function zc(e,t,n,r){let i=Math.max(r-.55,0),a=Math.max(r-.18,i+.01),o=Rc(Bc(e,i),t,n),s=Rc(Bc(e,a),t,n).sub(o);return s.lengthSq()<1e-4?new U(0,1,0):s.normalize()}function Bc(e,t){let{times:n,values:r}=e,i=e=>new U(r[e*3]??0,r[e*3+1]??0,r[e*3+2]??0),a=n.length-1;if(t<=(n[0]??0))return i(0);if(t>=(n[a]??0))return i(a);for(let e=0;e<a;e+=1){let r=n[e]??0,a=n[e+1]??0;if(t<r||t>a)continue;let o=(t-r)/Math.max(a-r,1e-4);return i(e).lerp(i(e+1),o)}return i(a)}var Vc=.55,Hc=.995,Uc=2.4,Wc=.08,Gc=.14,Kc=.035,qc=new U(0,1,0),Jc=[0,4,11,24,55],Yc=[0,.12,.35,.72,1.05],Xc=[0,0,.4,.8,1];function Zc(e){let{definition:t,route:n,viewpoint:r}=e,i=new we;i.name=`Passage:${t.passageId}`,i.visible=!1;let a=$c(e.model,t);i.add(e.model);let o=tl(e.model),s=el(e.model,e.animations,t),c=Qc(t,n),l=t.approachDurationSeconds+n.durationSeconds,u=l+t.exitDurationSeconds,d,f,p=new Ht,m={position:new U,lookAt:new U,direction:new U,world:new U,quaternion:new Ht,right:new U,up:new U,binormal:new U,matrix:new V};function h(n){if(t.groundClearanceMeters<=0)return;m.world.copy(n),i.localToWorld(m.world);let r=e.groundYAt(m.world.x,m.world.z)+t.groundClearanceMeters;m.world.y>=r||(m.world.y=r,i.worldToLocal(m.world),n.copy(m.world))}function g(e,t){return e.lengthSq()<1e-4?t:(e.normalize(),m.up.set(0,1,0),Math.abs(e.dot(m.up))>.94&&m.up.set(0,0,1),m.right.crossVectors(m.up,e).normalize(),m.binormal.crossVectors(m.right,e).normalize(),m.matrix.makeBasis(m.right,e,m.binormal),t.setFromRotationMatrix(m.matrix))}function _(e){e.lengthSq()<1e-4||g(e,a.quaternion)}function v(e){let r=Math.max(n.durationSeconds,1e-4),i=W.clamp(e,0,r);if(!c||t.approachDurationSeconds<=0)return i;let a=Math.min(Uc,r),o=n.distanceMeters*1.9/Math.max(a,1e-4),s=Math.min(c.getLength()/t.approachDurationSeconds,o),l=(n.distanceMeters-s*a*.5)/Math.max(r-a*.5,1e-4),u;if(i<a){let e=(l-s)/Math.max(a,1e-4);u=s*i+e*i*i*.5}else u=(s+l)*a*.5+l*(i-a);return W.clamp(u/n.distanceMeters,0,1)*n.durationSeconds}function y(e){if(!c)return;let n=W.clamp(e/Math.max(t.approachDurationSeconds,1e-4),0,1);c.getPointAt(n,m.position),c.getPointAt(Math.min(n+Kc,1),m.lookAt),h(m.position),h(m.lookAt),a.position.copy(m.position),_(m.direction.subVectors(m.lookAt,m.position))}function b(){if(c)return d||(c.getPointAt(1,m.lookAt),c.getPointAt(.965,m.position),d=g(m.direction.subVectors(m.lookAt,m.position),new Ht).clone(),d)}function x(e){if(e>=Uc)return;let t=b();if(!t)return;let n=W.smoothstep(e,0,Uc);m.quaternion.copy(a.quaternion),a.quaternion.copy(t).slerp(m.quaternion,n)}function S(e){let t=W.clamp(e,0,n.durationSeconds);Pc(n,v(t),m.position),h(m.position),a.position.copy(m.position),Pc(n,v(Math.min(t+Wc,n.durationSeconds)),m.lookAt),h(m.lookAt),m.lookAt.distanceToSquared(m.position)<1e-4&&(Pc(n,v(Math.max(t-Gc,0)),m.lookAt),h(m.lookAt),m.lookAt.subVectors(m.position,m.lookAt).add(m.position),h(m.lookAt)),m.direction.subVectors(m.lookAt,m.position),t>=n.durationSeconds-.45&&m.direction.copy(n.endDirection),_(m.direction),x(e)}function C(){if(f)return f;S(n.durationSeconds);let e=a.position.clone(),t=new U(0,1,0).applyQuaternion(a.quaternion).normalize(),r=w(t),i=e.clone(),o=[e.clone()],s=new U;for(let e=1;e<Jc.length;e+=1){let n=Xc[e]??1;s.copy(t).applyAxisAngle(qc,r*n).multiplyScalar((Jc[e]??0)-(Jc[e-1]??0)),i.add(s),i.y+=(Yc[e]??0)-(Yc[e-1]??0),o.push(i.clone())}return f=new Xe(o,!1,`centripetal`,.2),f}function w(n){let r=t.departureBearingRadians;return r===void 0?0:(r-(t.frameYaw.kind===`world`?t.frameYaw.radians:e.readViewHeadingRadians())-Math.atan2(n.x,n.z)+Math.PI*3)%(Math.PI*2)-Math.PI}function T(e){for(let t of o)t.opacity=e}function E(e){let n=C(),r=W.clamp(e/Math.max(t.exitDurationSeconds,1e-4),0,1),o=r*r;n.getPointAt(o,m.position),n.getPointAt(Math.min(o+.08,1),m.lookAt),h(m.position),h(m.lookAt),a.position.copy(m.position),_(m.direction.subVectors(m.lookAt,m.position)),T(1-W.smoothstep(r,Vc,1)),i.visible=r<Hc}return{root:i,durationSeconds:u,anchor:()=>{p.setFromAxisAngle(qc,t.frameYaw.kind===`viewHeading`?e.readViewHeadingRadians():t.frameYaw.radians),f=void 0},applyProgress:e=>{i.position.copy(r.worldPosition),i.quaternion.copy(p),T(1),i.visible=!0;let n=W.clamp(e,0,1)*u;if(s?.setTime(n),c&&n<t.approachDurationSeconds){y(n);return}if(n<l){S(n-t.approachDurationSeconds);return}E(n-l)},dispose:()=>{i.removeFromParent(),s?.stopAllAction()}}}function Qc(e,t){let n=t.points[0],r=t.points[1];if(e.approachDurationSeconds<=0||e.approachPoints.length===0||!n||!r)return;let i=r.clone().sub(n);i.lengthSq()<1e-4?i.set(0,0,-1):i.normalize();let a=n.clone().addScaledVector(i,-2.5),o=e.approachPoints.map(e=>e.clone()),s=o[o.length-1];return(!s||s.distanceToSquared(a)>.01)&&o.push(a),o.push(n.clone()),new Xe(o,!1,`centripetal`,.35)}function $c(e,t){let n=new we;n.name=`PassageVisualOrientation`,n.quaternion.setFromUnitVectors(t.modelForward.clone().normalize(),new U(0,1,0)).premultiply(new Ht().setFromAxisAngle(new U(0,1,0),t.modelRollOffsetRadians));for(let t of[...e.children])n.add(t);return e.add(n),e.traverse(e=>{e instanceof Ye&&(e.frustumCulled=!1)}),e}function el(e,t,n){let r=n.flapClipName?yt.findByName([...t],n.flapClipName):t[0];if(!r)return;let i=new Qe(e),a=i.clipAction(r);return a.timeScale=n.flapTimeScale,a.play(),i}function tl(e){let t=[];return e.traverse(e=>{if(!(e instanceof Ye))return;let n=Array.isArray(e.material)?e.material:[e.material];t.push(...n)}),t}async function nl(e,t){let n=ul(e),r=ll(e),[i,a,o]=await Promise.allSettled([ko(n.map(({passageId:e,modelUrl:t})=>({id:e,url:t})),t),Promise.allSettled(n.map(async e=>[e.passageId,await Nc(e.routeUrl,{scaleToMeters:e.routeScaleToMeters,rotation:e.routeRotation,start:e.routeStart},e.routeDurationSeconds)])).then(e=>{let t=e.flatMap(e=>e.status===`rejected`?[e.reason]:[]);if(t.length)throw AggregateError(t,`Passage routes failed to load`);return e.flatMap(e=>e.status===`fulfilled`?[e.value]:[])}),r?Nc(xs.routeUrl,{scaleToMeters:xs.routeScaleToMeters,axisStretch:xs.axisStretch,rotation:new Ht,start:xs.routeStart},xs.durationSeconds):void 0]);if(i.status===`rejected`||a.status===`rejected`||o.status===`rejected`||t?.aborted){let e=[...[i,a,o].flatMap(e=>e.status===`rejected`?[e.reason]:[]),...t?.aborted?[t.reason]:[]];try{i.status===`fulfilled`&&Ao(i.value)}catch(t){e.push(t)}throw t?.aborted&&e.every(e=>e===t.reason)?t.reason:AggregateError(e,`Passage resources failed to load`)}let s=new Map(a.value);return o.value&&s.set(xs.passageId,o.value),{models:i.value,routes:s}}function rl(e){let t=[],n=!1,r=0,i=new U;return{module:{load:()=>il(t,e),activate:()=>{n=!0},deactivate:()=>{n=!1;for(let e of t)al(e)},unload:()=>ol(t,e)},followShowTime:i=>{if(r=i,n)for(let n of t){let t=_s(e.schedule,n.definition.passageId,i);if(t===void 0){al(n);continue}n.crossing||=(n.flight.anchor(),!0),n.flight.applyProgress(t)}},swarm:ll(e.schedule)?{pointCount:xs.pointCount,cloudRadiusMeters:xs.cloudRadiusMeters,cloudHeightMeters:xs.cloudHeightMeters,read:t=>{let n=e.resources.routes.get(xs.passageId),a=_s(e.schedule,xs.passageId,r);if(!n||a===void 0)return;let o=a*xs.durationSeconds;return Pc(n,o,i),t.copy(e.viewpoint.worldPosition).add(i).setY(Math.max(e.viewpoint.worldPosition.y+i.y,e.worldSurface.groundYAt(e.viewpoint.worldPosition.x+i.x,e.viewpoint.worldPosition.z+i.z)+xs.groundClearanceMeters)),o}}:void 0}}function il(e,t){for(let n of ul(t.schedule)){let r=t.resources.models.get(n.passageId),i=t.resources.routes.get(n.passageId);if(!r||!i)throw Error(`Passage was not loaded: ${n.passageId}`);let a=Zc({definition:n,route:i,model:sl(r.scene,n),animations:r.animations,viewpoint:t.viewpoint,groundYAt:t.worldSurface.groundYAt,readViewHeadingRadians:t.readViewHeadingRadians});t.scene.add(a.root),e.push({definition:n,flight:a,crossing:!1})}}function al(e){e.flight.root.visible=!1,e.crossing=!1}function ol(e,t){for(let n of e)t.scene.remove(n.flight.root),n.flight.dispose();e.length=0}function sl(e,t){let n=Da(e);n.updateMatrixWorld(!0);let r=cl(n);return n.scale.setScalar(t.wingspanMeters/Math.max(r,1e-4)),n.traverse(e=>{if(!(e instanceof Ye))return;let t=(Array.isArray(e.material)?e.material:[e.material]).map(e=>{let t=vs(e);return t.transparent=!0,t});e.material=Array.isArray(e.material)?t:t[0]??e.material}),n}function cl(e){let t=1/0,n=-1/0;e.traverse(e=>{if(!(e instanceof Ye))return;e.geometry.computeBoundingBox();let r=e.geometry.boundingBox;r&&(t=Math.min(t,r.min.x),n=Math.max(n,r.max.x))});let r=n-t;if(!Number.isFinite(r)||r<=0)throw Error(`Passage model has no measurable span`);return r}function ll(e){return e.passages.some(({passageId:e})=>e===xs.passageId)}function ul(e){let t=[];for(let{passageId:n}of e.passages){let e=bs.find(e=>e.passageId===n);if(e){t.push(e);continue}if(n!==xs.passageId)throw Error(`Scheduled passage has no definition: ${n}`)}return t}function dl(e,t){let n=Array.isArray(t)?t:[t];for(let t of e)for(let e of n)t.applyTo(e)}var fl=4294967296,pl=.7;function ml(e,t){let n=e/t;if(!Number.isInteger(n)||n<=0)throw RangeError(`Candidate spacing must divide the chunk size exactly`);return{spacingMeters:t,cellsPerSide:n,candidateCount:n**2}}function hl(e,t,n,r){let i=r%t.cellsPerSide,a=Math.floor(r/t.cellsPerSide),o=e.chunkX*t.cellsPerSide+i,s=e.chunkZ*t.cellsPerSide+a,c=gl(n,o,s,0)-.5,l=gl(n,o,s,1)-.5;return{worldX:e.originX+(i+.5+c*pl)*t.spacingMeters,worldZ:e.originZ+(a+.5+l*pl)*t.spacingMeters,cellX:o,cellZ:s}}function gl(e,t,n,r){let i=Math.imul(e,1103515245);return i^=Math.imul(t,73856093),i^=Math.imul(n,19349663),i^=Math.imul(r+1,83492791),i=Math.imul(i^i>>>16,2246822519),i=Math.imul(i^i>>>13,3266489917),(i>>>0)/fl}var _l=2,vl=1e-6;function yl(e){let t=new U,n=new U,r=new U,i=new V;return(a,o)=>{bl(e,a.position.x,a.position.z,t),xl(n,t,o),r.crossVectors(t,n).normalize(),n.crossVectors(r,t).normalize(),i.makeBasis(r,t,n),a.quaternion.setFromRotationMatrix(i)}}function bl(e,t,n,r){let i=_l,a=e.surfaceYAt(t-i,n),o=e.surfaceYAt(t+i,n),s=e.surfaceYAt(t,n-i),c=e.surfaceYAt(t,n+i);r.set(a-o,4,s-c).normalize()}function xl(e,t,n){e.set(Math.sin(n),0,Math.cos(n)).projectOnPlane(t),e.lengthSq()<vl&&e.set(0,0,1).projectOnPlane(t),e.normalize()}var Sl=12,Cl=2.2,wl=2.5,Tl=1.5,El=1,Dl=.05,Ol=Math.PI*2,kl=.35,Al=.8,jl=.002;function Ml(e){let t=new we;t.name=`Animals`;let n=[],r={group:t,actors:n,parameters:e.parameters,worldSurface:e.worldSurface,alignToSurface:yl(e.worldSurface)},i=Nl(e.parameters.species);try{for(let[r,a]of i.entries()){let o=Bl(e.assets,e.colors,e.effectsFor,a,r);n.push(o),Ul(o,e,r,i.length),t.add(o.root)}return r}catch(e){throw Ll(r),e}}function Nl(e){return e.flatMap((e,t)=>Array.from({length:e.count},(n,r)=>({species:e,speciesIndex:t,speciesActorIndex:r}))).sort((e,t)=>e.speciesActorIndex-t.speciesActorIndex||e.speciesIndex-t.speciesIndex)}function Pl(e,t,n){for(let[r,i]of e.actors.entries())Ql(e,i,r,t),$l(e,i,n);ou(e,t);for(let t of e.actors)Fl(t,n),t.root.visible&&(e.alignToSurface(t.root,t.headingRadians),t.mixer.update(n))}function Fl(e,t){let n=+!!e.selected,r=t/Al;e.appearance=Math.abs(n-e.appearance)<=r?n:e.appearance+Math.sign(n-e.appearance)*r,e.root.visible=e.appearance>jl;for(let t of e.materials)t.opacity=e.appearance}function Il(e,t){let n=0;for(let r of e.actors){if(!r.root.visible)continue;let e=t[n];e||(e={x:0,y:0,z:0,headingRadians:0,heightMeters:0,speciesId:r.species.id},t[n]=e),e.x=r.root.position.x,e.y=r.root.position.y,e.z=r.root.position.z,e.headingRadians=r.headingRadians,e.heightMeters=r.species.heightMeters,e.speciesId=r.species.id,n++}t.length=n}function Ll(e){for(let t of e.actors)Rl(t);e.group.clear()}function Rl(e){e.mixer.stopAllAction(),e.mixer.uncacheRoot(e.root);for(let t of e.materials)t.dispose();let t=new Set;e.root.traverse(e=>{e instanceof Te&&t.add(e.skeleton)});for(let e of t)e.dispose()}function zl(e,t){let n=(e.min.x+e.max.x)/2,r=(e.min.z+e.max.z)/2;return new V().makeScale(1/t,1/t,1/t).multiply(new V().makeTranslation(-n,-e.min.y,-r))}function Bl(e,t,n,r,i){let{species:a}=r,o=Hl(e,a.id),s=o.animations.find(({name:e})=>e===a.walkAnimation);if(!s)throw Error(`GLTF animation not found: ${a.id}/${a.walkAnimation}`);let c=Da(o.scene),l=new we;l.add(c);let u=new Qe(l),d=[];try{c.updateMatrixWorld(!0);let e=new ot().setFromObject(c),r=e.max.y-e.min.y;if(!Number.isFinite(r)||r<=0)throw Error(`Animal has no measurable height: ${a.id}`);let o=zl(e,r);c.traverse(e=>{if(e instanceof Ye){let r=(Array.isArray(e.material)?e.material:[e.material]).map(e=>vs(e,Vl(t,e.name)));for(let e of r)e.transparent=!0;d.push(...r),n&&dl(n(o.clone().multiply(e.matrixWorld)),r),e.material=Array.isArray(e.material)?r:r[0]??e.material}e instanceof Te&&(e.frustumCulled=!1)}),c.position.y-=e.min.y,l.name=`Animal:${a.id}:${i}`,l.scale.setScalar(a.heightMeters/r),u.clipAction(s).play();let f=gl(593,i,0,0)*Math.PI*2;return{root:l,mixer:u,materials:d,species:a,hasHabitat:!1,headingRadians:f,targetHeadingRadians:f,selected:!1,appearance:0}}catch(e){throw Rl({root:l,mixer:u,materials:d}),e}}function Vl(e,t){return t===`furLight`?e.lightFurColor:t===`furDark`?e.darkFurColor:t===`feature`?e.featureColor:e.furColor}function Hl(e,t){let n=e.get(t);if(!n)throw Error(`Missing animal asset: ${t}`);return n}function Ul(e,t,n,r){let i=Wl({...t,actor:e,actorCount:r,actorIndex:n});e.hasHabitat=i!==void 0,i&&(e.appearance=0,e.root.position.set(i.x,t.worldSurface.surfaceYAt(i.x,i.z),i.z))}function Wl(e){return Jl(e,Gl(e)).find(t=>e.actor.species.allowedZones.includes(e.worldSurface.zoneAt(t.x,t.z)))}function Gl(e){let t=Kl(e),n=ql(e);return{x:e.startX+Math.sin(t)*n,z:e.startZ+Math.cos(t)*n}}function Kl(e){let t=Ol/e.actorCount,n=gl(e.parameters.seed,e.actorIndex,0,2);return(e.actorIndex+.5)*t+(n-.5)*t*.5}function ql(e){let t=kl+gl(e.parameters.seed,e.actorIndex,0,3)*.4;return e.parameters.activeRadiusMeters*t}function Jl(e,t){let n=Math.floor(e.parameters.activeRadiusMeters/Sl),r=n*2+1;return Array.from({length:r**2},(t,i)=>Yl(e,i,r,n)).filter(t=>Xl(e,t)).sort((e,n)=>Zl(e,t)-Zl(n,t))}function Yl(e,t,n,r){return{x:e.startX+(t%n-r)*Sl,z:e.startZ+(Math.floor(t/n)-r)*Sl}}function Xl(e,t){return Zl(t,{x:e.startX,z:e.startZ})<=e.parameters.activeRadiusMeters**2}function Zl(e,t){return(e.x-t.x)**2+(e.z-t.z)**2}function Ql(e,t,n,r){let i=du(t.root.position.x,t.root.position.z,r.worldPosition.x,r.worldPosition.z);t.hasHabitat&&i<=e.parameters.activeRadiusMeters||Ul(t,{parameters:e.parameters,worldSurface:e.worldSurface,startX:r.worldPosition.x,startZ:r.worldPosition.z},n,e.actors.length)}function $l(e,t,n){ru(t,n),eu(e,t,nu(t))||iu(t)&&(t.targetHeadingRadians=t.headingRadians+Cl);let r=t.species.speedMetersPerSecond*n;if(!eu(e,t,r))return;let i=t.root.position.x+Math.sin(t.headingRadians)*r,a=t.root.position.z+Math.cos(t.headingRadians)*r;t.root.position.set(i,e.worldSurface.surfaceYAt(i,a),a)}function eu(e,t,n){let r=t.root.position.x+Math.sin(t.headingRadians)*n,i=t.root.position.z+Math.cos(t.headingRadians)*n;return t.species.allowedZones.includes(e.worldSurface.zoneAt(r,i))}function tu(e){return e.species.heightMeters*wl}function nu(e){return tu(e)*Tl+El}function ru(e,t){let n=au(e.targetHeadingRadians-e.headingRadians),r=e.species.speedMetersPerSecond/tu(e)*t;e.headingRadians+=Math.abs(n)<=r?n:Math.sign(n)*r}function iu(e){let t=au(e.targetHeadingRadians-e.headingRadians);return Math.abs(t)<=Dl}function au(e){return Math.atan2(Math.sin(e),Math.cos(e))}function ou(e,t){for(let t of e.actors)t.selected=!1;e.group.visible&&(su(e,t),cu(e,t))}function su(e,t){for(let n=0;n<e.parameters.maxVisible;n+=1){let r=lu(e.actors,t,n,e.parameters.maxVisible);r&&(r.selected=!0)}}function cu(e,t){let n=e.actors.filter(({selected:e})=>e).length;for(;n<e.parameters.maxVisible;){let r=lu(e.actors,t);if(!r)return;r.selected=!0,n+=1}}function lu(e,t,n,r){let i,a=1/0;for(let o of e){if(!o.hasHabitat||o.selected||!uu(o,t,n,r))continue;let e=o.root.position.distanceToSquared(t.worldPosition);e>=a||(i=o,a=e)}return i}function uu(e,t,n,r){if(n===void 0||r===void 0)return!0;let i=(Math.atan2(e.root.position.x-t.worldPosition.x,e.root.position.z-t.worldPosition.z)+Ol)%Ol;return Math.floor(i/Ol*r)===n}function du(e,t,n,r){return Math.hypot(e-n,t-r)}function fu(e){pu(e.definition);let t={population:void 0,bodies:[]};return{load:()=>mu(t,e),activate:()=>gu(t,!0),update:n=>hu(t,e,n),deactivate:()=>gu(t,!1),unload:()=>_u(t,e.scene)}}function pu(e){let t=new Set(e.species.map(({id:e})=>e)),n=e.species.reduce((e,t)=>e+t.count,0);if(t.size!==e.species.length)throw Error(`Animal species ids must be unique`);if(!Number.isInteger(e.maxVisible)||e.maxVisible<0||e.maxVisible>n)throw RangeError(`Animal maxVisible must fit the configured population`);if(e.activeRadiusMeters<=0)throw RangeError(`Animal activeRadiusMeters must be positive`);if(e.species.some(({allowedZones:e,count:t,heightMeters:n,speedMetersPerSecond:r})=>!Number.isInteger(t)||t<=0||e.length===0||n<=0||r<0))throw RangeError(`Animal count, habitat, height, or speed is invalid`)}function mu(e,t){let n=Ml({assets:t.assets,parameters:t.definition,colors:t.preset.colors,effectsFor:t.effectsFor,worldSurface:t.worldSurface,startX:t.viewpoint.worldPosition.x,startZ:t.viewpoint.worldPosition.z});n.group.visible=!1,t.scene.add(n.group),e.population=n}function hu(e,t,n){e.population&&(Pl(e.population,t.viewpoint,n),!(!t.onBodiesUpdated||!e.population.group.visible)&&(Il(e.population,e.bodies),t.onBodiesUpdated(e.bodies)))}function gu(e,t){e.population&&(e.population.group.visible=t)}function _u(e,t){let n=e.population;n&&(e.population=void 0,t.remove(n.group),Ll(n))}var vu={seed:953,maxVisible:6,activeRadiusMeters:96,species:[{id:`deer`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/animals/deer.glb`,count:5,heightMeters:1.4,speedMetersPerSecond:.65,allowedZones:[`meadow`,`deciduousForest`],walkAnimation:`Walk`},{id:`stag`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/animals/stag.glb`,count:3,heightMeters:1.6,speedMetersPerSecond:.605,allowedZones:[`coniferForest`,`deciduousForest`],walkAnimation:`Walk`},{id:`fox`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/animals/fox.glb`,count:6,heightMeters:.7,speedMetersPerSecond:.79,allowedZones:[`coniferForest`,`deciduousForest`,`shrubSlope`],walkAnimation:`Walk`},{id:`rat`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/animals/rat.glb`,count:6,heightMeters:.25,speedMetersPerSecond:.325,allowedZones:[`meadow`,`shrubSlope`],walkAnimation:`RatArmature|Rat_Walk`}]},yu=`#include <common>`,bu=`#include <color_fragment>`;function xu(e,t){let n=e.onBeforeCompile.bind(e),r=e.customProgramCacheKey();e.onBeforeCompile=(r,i)=>{n(r,i);for(let[n,i,a]of[[`vertexShader`,yu,t.vertexHeader],[`vertexShader`,t.vertexAnchor,t.vertexCall],[`fragmentShader`,yu,t.fragmentHeader],[`fragmentShader`,bu,t.colorFragmentCall]])if(a&&!r[n].includes(i))throw Error(`Material "${e.name||e.type}" cannot apply "${t.cacheKey}": missing ${n} anchor "${i}"`);Object.assign(r.uniforms,t.uniforms),r.vertexShader=r.vertexShader.replace(yu,`${yu}\n${t.vertexHeader}`).replace(t.vertexAnchor,`${t.vertexAnchor}\n${t.vertexCall}`),r.fragmentShader=r.fragmentShader.replace(yu,`${yu}\n${t.fragmentHeader}`).replace(bu,`${bu}\n${t.colorFragmentCall}`)},e.customProgramCacheKey=()=>`${r}:${t.cacheKey}`}function Su(e){return Number.isFinite(e)&&e>0}function Cu(e){return Number.isFinite(e)&&e>=0&&e<=1}var wu=`/*
 * Purpose: Replace surface color with the distance-driven echolocation ramp.
 * Context: Level 03 shows the result of echolocation directly; no visible echo waves.
 * Responsibility: Map view distance onto the authored palette between near and far.
 * Boundary: Distance measurement stays in the vertex shader; base colors stay with owners.
 */

uniform float echoIntensity;
uniform float echoNearDistance;
uniform float echoFarDistance;
uniform vec3 echoRampStops;
uniform vec3 echoNearColor;
uniform vec3 echoNearShadeColor;
uniform vec3 echoMidColor;
uniform vec3 echoFarColor;
uniform vec3 echoHazeColor;

varying float echoViewDistance;

vec3 applyEchoDepth(vec3 baseColor) {
  float rampProgress = clamp(
    (echoViewDistance - echoNearDistance) /
      (echoFarDistance - echoNearDistance),
    0.0,
    1.0
  );
  vec3 ramp = mix(
    echoNearColor,
    echoNearShadeColor,
    smoothstep(0.0, echoRampStops.x, rampProgress)
  );
  ramp = mix(
    ramp,
    echoMidColor,
    smoothstep(echoRampStops.x, echoRampStops.y, rampProgress)
  );
  ramp = mix(
    ramp,
    echoFarColor,
    smoothstep(echoRampStops.y, echoRampStops.z, rampProgress)
  );
  ramp = mix(
    ramp,
    echoHazeColor,
    smoothstep(echoRampStops.z, 1.0, rampProgress)
  );
  return mix(baseColor, ramp, echoIntensity);
}
`,Tu=`/*
 * Purpose: Measure camera distance for the echo depth ramp.
 * Context: Depth cues must stay stable while the viewer flies and turns the headset.
 * Responsibility: Write the radial view distance of the current vertex.
 * Boundary: Ramp colors and mixing stay in the fragment shader; geometry stays with owners.
 */

varying float echoViewDistance;

void passEchoDepth(vec4 viewPosition) {
  echoViewDistance = length(viewPosition.xyz);
}
`,Eu={nearShadeStopFraction:.2,midStopFraction:.5,farStopFraction:.8},Du=`echo-depth-v2`;function Ou(e){ku(e);let t={echoIntensity:{value:e.intensity},echoNearDistance:{value:e.nearDistanceMeters},echoFarDistance:{value:e.farDistanceMeters},echoRampStops:{value:new U(Eu.nearShadeStopFraction,Eu.midStopFraction,Eu.farStopFraction)},echoNearColor:{value:new L(e.colors.nearColor)},echoNearShadeColor:{value:new L(e.colors.nearShadeColor)},echoMidColor:{value:new L(e.colors.midColor)},echoFarColor:{value:new L(e.colors.farColor)},echoHazeColor:{value:new L(e.colors.hazeColor)}};return{applyTo:e=>{xu(e,{cacheKey:Du,uniforms:t,vertexHeader:Tu,vertexAnchor:`#include <project_vertex>`,vertexCall:`passEchoDepth(mvPosition);`,fragmentHeader:wu,colorFragmentCall:`diffuseColor.rgb = applyEchoDepth(diffuseColor.rgb);`})}}}function ku(e){if(!Cu(e.intensity))throw RangeError(`Echo depth intensity must be between zero and one`);if(![e.nearDistanceMeters,e.farDistanceMeters].every(Su)||e.nearDistanceMeters>=e.farDistanceMeters)throw RangeError(`Echo depth distances must be positive with near below far`)}var Au={distanceMeters:3.2,widthMeters:3.4,canvasWidthPixels:2048,canvasHeightPixels:1280,textureAnisotropy:8,textColor:`#000000`,fontFamilyName:`Rubik`,fontFamily:`Rubik, system-ui, sans-serif`,fontWeight:`700`,fontUrl:`/becoming-many-making-of/p/v3-v075/fonts/rubik/rubik-bold.ttf`,typeSizePixels:{title:104,role:40,name:50},titleCenterY:.26,titleGapPixels:333,lineHeightPixels:88,renderOrder:999};function ju(e){let t=Au,n=document.createElement(`canvas`);n.width=t.canvasWidthPixels,n.height=t.canvasHeightPixels;let r=n.getContext(`2d`);if(!r)throw Error(`The end credits need a 2D canvas context`);Pu(r,e);let i=new lt(n);return i.colorSpace=P,i.anisotropy=t.textureAnisotropy,Nu().then(()=>{Pu(r,e),i.needsUpdate=!0}),i}var Mu;function Nu(){if(!Mu){let e=Au;Mu=new FontFace(e.fontFamilyName,`url(${e.fontUrl})`,{weight:e.fontWeight}).load().then(e=>{document.fonts.add(e)}).catch(e=>{console.warn(`[end-credits] Rubik failed to load — using fallback`,e)})}return Mu}function Pu(e,t){let n=Au,r=n.canvasWidthPixels/2;e.clearRect(0,0,n.canvasWidthPixels,n.canvasHeightPixels),e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=n.textColor;let i=n.titleCenterY*n.canvasHeightPixels,a;for(let o of t.lines)a!==void 0&&(i+=a===`title`?n.titleGapPixels:n.lineHeightPixels),e.font=`${n.fontWeight} ${Fu(o.role)}px ${n.fontFamily}`,e.fillText(o.text,r,i),a=o.role}function Fu(e){let t=Au.typeSizePixels;return e===`title`?t.title:e===`role`?t.role:t.name}function Iu(e){let t=Au,n,r=0;function i(){n&&(n.panel.material.opacity=r,n.panel.visible=r>0)}return{setPresence:e=>{r=e,i()},module:{load:()=>{let r=ju(e.definition),a=t.widthMeters*t.canvasHeightPixels/t.canvasWidthPixels,o=new z({map:r,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),s=new Ye(new oe(t.widthMeters,a),o);s.name=`EndCreditsPanel`,s.frustumCulled=!1,s.renderOrder=t.renderOrder,s.visible=!1,e.scene.add(s),n={panel:s},i()},activate:i,update:()=>{n?.panel.visible&&(n.panel.position.copy(e.viewpoint.worldPosition).addScaledVector(e.viewpoint.worldBodyDirection,t.distanceMeters),n.panel.lookAt(e.viewpoint.worldPosition))},deactivate:()=>{n&&(n.panel.visible=!1)},unload:()=>{if(!n)return;let{panel:t}=n;n=void 0,e.scene.remove(t),t.geometry.dispose(),t.material.map?.dispose(),t.material.dispose()}}}}var Lu={directionXZ:[.8137,.5812],strength:.65,speed:1,swingDegrees:44,gustVariation:.6,loopSeconds:120},Ru=Math.PI*2,zu=Math.PI/180,Bu=1,Vu=3,Hu=.38,Uu=1.7,Wu=2,Gu=.9,Ku=5,qu=.5,Ju=2.4;function Yu(e){let t=Ru*e/Lu.loopSeconds,n=Math.sin(t*Bu)+Hu*Math.sin(t*Vu+Uu),r=(Math.sin(t*Wu+Gu)+qu*Math.sin(t*Ku+Ju))/1.5,[i,a]=Lu.directionXZ,o=Math.atan2(a,i)+n*Lu.swingDegrees*zu;return{directionX:Math.cos(o),directionZ:Math.sin(o),strength:Lu.strength*(1+r*Lu.gustVariation)}}function Xu(e){return e%Lu.loopSeconds}var Zu=`/*
 * Purpose: Write the color the vertex stage already finished.
 * Context: At tens of blades per square metre, per-vertex shading beats per-fragment shading.
 * Responsibility: Emit the interpolated color and hand it to the sense effects.
 * Boundary: Lighting, fog, and tonemapping all happen in the vertex stage.
 *
 * The vertex color reaches the frame only where no sense overrides it: an
 * effect injected after <color_fragment> takes \`diffuseColor\` from here and
 * returns its own.
 */

#include <common>

varying vec3 vGrassColor;

void main() {
  vec4 diffuseColor = vec4(vGrassColor, 1.0);

  #include <color_fragment>

  gl_FragColor = diffuseColor;

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Qu=`/*
 * Purpose: Build, place, light, and cull one grass blade entirely in the vertex stage.
 * Context: The field is geometry-bound, so every instruction here is paid a million times a frame.
 * Responsibility: Derive world position, height, bend, wind, and color from one instance value.
 * Boundary: The ground height and the zone cover arrive sampled; the fragment stage only writes.
 *
 * The three.js chunk includes are this module's material-effect hook. A sense
 * injects its declarations after <common> and its call after
 * <project_vertex>, exactly as it does in the built-in passes, so the field
 * answers to Echo Depth and Thermal Perception without either module knowing
 * that this grass is not an ordinary surface.
 */

#include <common>

/*
 * One blade is one instance. The template geometry carries only
 * \`position.x\` (side: -1 / +1, 0 at the tip), \`position.y\` (height 0..1), and
 * \`position.z\` (which strip of the cross tuft). Everything else — world
 * position, facing, height, bend, wind, color, and the whole lighting — is
 * derived here from a hash of the world position.
 *
 * Per instance exactly one vec3 leaves memory: the low-discrepancy grid cell
 * inside the chunk and the blade's rank. Because the instances follow a
 * low-discrepancy sequence, every subset "rank < f" is spread evenly over the
 * chunk, so f can come continuously from the distance without leaving holes.
 */
attribute vec3 aGrassCell;

uniform float uGrassTime;
uniform float uGrassChunkSize;

uniform float uGrassBladeHeight;
uniform float uGrassBladeWidth;
uniform float uGrassMinAngular;
uniform float uGrassCurve;

uniform vec2 uGrassWindDirection;
uniform float uGrassWindStrength;
uniform float uGrassWindSpeed;
uniform float uGrassWindScale;

uniform float uGrassFadeStart;
uniform float uGrassFadeEnd;

uniform float uGrassDensityGain;
uniform float uGrassDensityRef;
uniform float uGrassRankScale;
uniform float uGrassDissolve;
uniform float uGrassJitter;
uniform float uGrassDensity0;

uniform vec4 uGrassFrustum[4];
uniform float uGrassCullRadius;

uniform sampler2D uGrassHeightField;
/** World XZ of the centre of texel zero, metres per texel, texels per side. */
uniform vec4 uGrassHeightPlacement;
/** Lowest ground height and the span the normalized channel covers. */
uniform vec2 uGrassHeightRange;

uniform vec3 uGrassSunDirection;
uniform vec3 uGrassSunColor;
uniform vec3 uGrassSkyColor;
uniform vec3 uGrassRootColor;
uniform vec3 uGrassTipColor;
uniform vec3 uGrassFogColor;
uniform float uGrassFogDensity;
uniform float uGrassExposure;
uniform float uGrassAmbientOcclusion;
uniform float uGrassTranslucency;

varying vec3 vGrassColor;

/** Dave Hoskins' hash: three random values from a position, without a texture. */
vec3 grassHash32(vec2 point) {
  vec3 spread = fract(vec3(point.xyx) * vec3(0.1031, 0.1030, 0.0973));
  spread += dot(spread, spread.yxz + 33.33);
  return fract((spread.xxy + spread.yzz) * spread.zyx);
}

/*
 * Large-scale clumpiness: drives blade height, bare patches, and the darkening
 * underneath. A sum of directed waves, not a product of sines — a product sits
 * near zero across the whole zero grid of both factors, the value clumps
 * around one half and the contrast disappears. Three waves with different
 * directions and wavelengths interfere into a broad, axis-free pattern at the
 * price of three sines instead of four hashes.
 */
float grassClump(vec2 point) {
  float wave = sin(dot(point, vec2(0.213, 0.077)) + 0.7) +
    sin(dot(point, vec2(-0.068, 0.139)) - 1.9) +
    0.85 * sin(dot(point, vec2(0.121, -0.286)) + 2.3);
  return clamp(wave * 0.185 + 0.5, 0.0, 1.0);
}

vec3 grassTonemap(vec3 color) {
  return clamp(
    (color * (2.51 * color + 0.03)) / (color * (2.43 * color + 0.59) + 0.14),
    0.0,
    1.0
  );
}

void main() {
  float side = position.x;
  float t = position.y;

  // The cell is chunk-local and the chunk position sits in the model matrix.
  // Reading its translation column directly saves a full 4x4 multiply, which
  // counts because these lines also run for every blade discarded below.
  vec2 cellWorld = modelMatrix[3].xz + aGrassCell.xy * uGrassChunkSize;

  // The early, cheap rejection, before every hash, sample, and sine. A
  // discarded blade costs about twenty instructions instead of three hundred,
  // and all vertices of an instance take the same branch, so the triangle
  // degenerates and falls out at setup. This is what moves frustum culling
  // from the CPU into the shader and makes the chunk size a free parameter.
  float roughDistance = distance(cellWorld, cameraPosition.xz);
  float ref = uGrassDensityRef / max(roughDistance, uGrassDensityRef);
  float keep = min(uGrassDensityGain * ref * ref, 1.0);
  float rank = aGrassCell.z * uGrassRankScale;
  // A blade crossing the threshold shrinks across a band instead of vanishing.
  float dissolve = 1.0 - smoothstep(
    keep * (1.0 - uGrassDissolve),
    keep * (1.0 + uGrassDissolve),
    rank
  );
  // Offset the outer edge per blade, or a visible ring travels along it.
  float edgeJitter = fract(rank) - 0.5;
  float fadeEnd = uGrassFadeEnd * (1.0 + edgeJitter * 0.10);

  // Rank and distance first: they need nothing but arithmetic already done,
  // and in the far field the rank test alone discards most of the blades.
  if (dissolve <= 0.002 || roughDistance >= fadeEnd) {
    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
    return;
  }

  vec3 random = grassHash32(cellWorld);
  vec3 random2 = grassHash32(cellWorld + 71.31);

  /*
   * The true mean blade spacing from the density law, 1/sqrt(D(d)). Not the
   * spacing of the allocated cells: after thinning the blades stand
   * 1/sqrt(keep) further apart, and a scatter scaled to the allocation is far
   * too small in the distance, which lets the cell grid show through. The
   * width below needs the same value, so it costs nothing extra.
   */
  float spacing = inversesqrt(max(uGrassDensity0 * ref * ref, 1e-4));
  vec2 bladeXZ = cellWorld + (random.xy - 0.5) * spacing * uGrassJitter;

  // The ground and the zone cover in one fetch. The window is camera-following
  // and snapped to its own texel grid, so this stays stable while walking.
  vec2 heightUv =
    (bladeXZ - uGrassHeightPlacement.xy) / uGrassHeightPlacement.z;
  heightUv = (heightUv + 0.5) / uGrassHeightPlacement.w;
  vec2 ground = texture2D(uGrassHeightField, heightUv).rg;
  float groundY = uGrassHeightRange.x + ground.r * uGrassHeightRange.y;
  float cover = ground.g;
  if (cover <= 0.004) {
    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
    return;
  }

  vec3 root = vec3(bladeXZ.x, groundY, bladeXZ.y);

  // The frustum test runs on the real root, not on the cell at ground level
  // zero. Testing a flat probe needs a cull radius that covers the whole
  // elevation range of the world, and the angular error of that offset is
  // largest exactly where the blades are closest — which cuts a circle of
  // bare ground around the viewer while the distance stays grown. The radius
  // now only has to cover a blade's own height and its scatter.
  bool inside = true;
  for (int plane = 0; plane < 4; plane++) {
    inside = inside &&
      (dot(uGrassFrustum[plane].xyz, root) + uGrassFrustum[plane].w >
        -uGrassCullRadius);
  }
  if (!inside) {
    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
    return;
  }

  vec3 toCamera = cameraPosition - root;
  float dist = length(toCamera);
  vec3 view = toCamera / max(dist, 1e-4);

  float clump = grassClump(bladeXZ);
  // Both factors reach at most one, so the authored height is an exact maximum
  // rather than a nominal value that scatter and clumping quietly multiply.
  float height = uGrassBladeHeight *
    mix(0.30, 1.0, random.z * random.z) *
    mix(0.72, 1.0, clump);
  // Bare patches: some blades fail entirely. Without them the field reads as
  // freshly mown rather than grown.
  height *= smoothstep(0.05, 0.32, clump * 0.72 + random2.x * 0.28);
  height *= cover;
  // Both transitions act on the height, so a blade grows as it comes closer
  // instead of appearing.
  height *= dissolve;
  height *= 1.0 - smoothstep(
    uGrassFadeStart * (1.0 + edgeJitter * 0.10),
    fadeEnd,
    dist
  );

  float yaw = random2.y * 6.2831853;
  vec2 facing = vec2(cos(yaw), sin(yaw));
  vec2 bendDirection = facing;
  float wind = 0.0;

#if GRASS_WIND
  float phase =
    dot(bladeXZ, uGrassWindDirection) * uGrassWindScale -
    uGrassTime * uGrassWindSpeed;
#if GRASS_WIND_SIMPLE
  // Distant blades: one sine instead of a nested gust and per-blade sway. The
  // factor keeps the mean identical to the full variant, or the tier border
  // would show as a strip where the field suddenly blows harder.
  float gust = 0.5 + 0.5 * sin(phase * 0.31);
  wind = uGrassWindStrength * (0.18 + 0.82 * gust * gust) * 0.675;
#else
  float gust = 0.5 + 0.5 * sin(phase * 0.31 + sin(phase * 0.117) * 2.2);
  float sway = 0.5 + 0.5 * sin(phase * 1.7 + random2.z * 6.2831853);
  wind = uGrassWindStrength *
    (0.18 + 0.82 * gust * gust) *
    (0.35 + 0.65 * sway);
#endif
#if GRASS_FLUTTER
  wind += sin(uGrassTime * (5.5 + 3.0 * random2.z) + random.x * 6.2831853) *
    0.09 * wind;
#endif
  // The bending plane turns into the wind as it rises, so the whole field lays
  // over coherently while keeping its variance.
  bendDirection = normalize(
    mix(facing, uGrassWindDirection, clamp(wind * 1.1, 0.0, 0.88)) +
      vec2(1e-4, 1e-4)
  );
#endif

  vec2 sideDirection = vec2(bendDirection.y, -bendDirection.x);

  // The blade is a circular arc, not a displaced strip: the arc length is
  // preserved exactly, so bending never stretches or squashes it. Long blades
  // hang further than short ones — the difference between lawn and meadow.
#if GRASS_CURVE
  float heightFraction = height / max(uGrassBladeHeight, 1e-3);
  float theta = uGrassCurve *
    (0.30 + 1.35 * random2.z * random2.z) *
    (0.45 + 0.75 * heightFraction);
  theta = max(theta + wind * 1.35, 0.02);
  float arc = theta * t;
  float arcSin = sin(arc);
  float arcCos = cos(arc);
  float up = height * arcSin / theta;
  float forward = height * (1.0 - arcCos) / theta;
#else
  float theta = max(wind * 1.35, 0.02);
  float arcSin = sin(theta);
  float arcCos = cos(theta);
  float up = height * t * arcCos;
  float forward = height * t * arcSin;
#endif

  // Near blades keep their true width; beyond a distance they inflate to a
  // minimum angular width instead of falling under pixel size. A max(), not a
  // multiply: exact up close, stable far away.
  float width = uGrassBladeWidth * (0.72 + 0.56 * random.y);
  width = max(width, max(dist * uGrassMinAngular, spacing * 0.26));
  float taper = sqrt(max(1.0 - t * t * 0.88, 0.0));
  float halfWidth = width * 0.5 * taper * side;

  // The second strip of a cross tuft bends around the same axis; only its
  // width axis is turned, so the tuft stays visible from every direction.
  vec2 widthDirection = position.z > 0.5 ? bendDirection : sideDirection;
  vec3 sideVector = vec3(widthDirection.x, 0.0, widthDirection.y);
  vec3 bendVector = vec3(bendDirection.x, 0.0, bendDirection.y);
  vec3 world =
    root + sideVector * halfWidth + bendVector * forward + vec3(0.0, up, 0.0);

#if GRASS_LIT
  vec3 tangent = vec3(bendDirection.x * arcSin, arcCos, bendDirection.y * arcSin);
  vec3 normal = cross(sideVector, tangent);
#if GRASS_NORMAL_BEND
  // The flat geometry is shaded round. sideVector and normal are orthonormal,
  // so the result is already unit length and a normalize would be waste.
  float bend = 0.62 * side * taper;
  normal = normal * cos(bend) + sideVector * sin(bend);
#endif
  // Blades are visible from both sides: turn the normal toward the camera
  // instead of paying for gl_FrontFacing in the fragment stage.
  normal *= sign(dot(normal, view));

  float lambert = dot(normal, uGrassSunDirection);
  float diffuse = lambert * 0.5 + 0.5;
  diffuse *= diffuse;

  // Ambient occlusion: dark at the base, darker inside dense clumps. Without a
  // dark undergrowth every grass field reads flat.
  float occlusion =
    mix(1.0 - uGrassAmbientOcclusion, 1.0, t * t * 0.65 + t * 0.35) *
    mix(0.68, 1.0, 1.0 - clump * 0.5);

  vec3 albedo = mix(uGrassRootColor, uGrassTipColor, t * 0.75 + 0.25 * t * t);
  albedo *= 0.84 + 0.32 * random2.x;

  // Direct sun is occluded far more than diffuse sky light, so each carries
  // its own share of the occlusion.
  vec3 ambient = uGrassSkyColor * (0.5 + 0.5 * normal.y) * mix(0.42, 1.0, occlusion);
  vec3 lit = albedo * (uGrassSunColor * diffuse * occlusion + ambient);
  // Bounce: green scattered light from the field catches the blade bases.
  lit += albedo * uGrassTipColor * (0.28 * (1.0 - t * t) * occlusion);

#if GRASS_TRANSLUCENCY
  float through = max(dot(-view, uGrassSunDirection), 0.0);
  lit += uGrassSunColor * uGrassTipColor *
    (uGrassTranslucency * through * through * through * mix(0.15, 1.0, t));
#endif

#if GRASS_SPECULAR
  vec3 halfway = normalize(uGrassSunDirection + view);
  lit += uGrassSunColor * pow(max(dot(normal, halfway), 0.0), 70.0) * (0.22 * t * t);
#endif

  // Cubic rather than quadratic: the near field stays clear and the distance
  // thickens quickly, which hides that the blades shrink to zero out there.
  float fogDepth = dist * uGrassFogDensity;
  float fog = 1.0 - exp(-fogDepth * fogDepth * fogDepth);
  lit = mix(lit, uGrassFogColor, fog);

  vGrassColor = grassTonemap(lit * uGrassExposure);
#else
  // A sense owns the color here: Echo Depth replaces it with its distance ramp
  // and Thermal covers it inside its radius. What remains is the root-to-tip
  // gradient that shows below full sense intensity — so the whole lighting
  // block above, some eighty instructions per vertex, is compiled out.
  vGrassColor = mix(uGrassRootColor, uGrassTipColor, t * 0.75 + 0.25 * t * t);
#endif

  // The chunk matrix is a pure translation, so subtracting it returns the
  // local position <project_vertex> expects. That keeps one projection path
  // and leaves every sense effect the \`mvPosition\` and the \`transformed\` it
  // measures against — both variants resolve to the same world position.
  vec3 transformed = world - modelMatrix[3].xyz;

  #include <project_vertex>
}
`,$u={layout:{ring:4,levels:1,coverage0Meters:171},density:{stepsUp:0,stepsDown:3,dissolve:.68,jitter:1.6},fade:{startMeters:24,endMeters:60},detail:{segments:[4,3,2,2],uniformSegmentIndex:1,switchDistanceMeters:[9,20,50],hysteresis:1.12,byDistance:!1,tierOfDetail:[0,0,1,2]},wind:{phaseSpeed:1.35,phaseScalePerMeter:.055,strengthScale:.375},instanceGridBits:8,cullRadiusMeters:3,blade:{curve:.52,minAngularWidth:.0022,cross:!0},lighting:{sunDirection:[.4,.4,.8],sunColor:16773332,skyColor:8103638,ambientOcclusion:.74,translucency:.9,exposure:1.06,fogDensity:.011},heightField:{texelMeters:2,sizeTexels:192,recenterMeters:32,rowsPerStep:8},zoneCoverage:{meadow:1,shrubSlope:.45}},ed=[0,1,2];function td(e){let t=$u.layout,n=nd(t.ring,t.levels),r=n*2,i=t.coverage0Meters/n,a=sd(),o=cd(e),s=new we;s.matrixAutoUpdate=!1;let c=Array.from({length:t.levels},(t,s)=>dd({index:s,ring:n,span:r,chunkSizeMeters:i,cells:a,shared:o,options:e}));for(let e of c)for(let t of e.chunks)s.add(t);try{for(let t of c)for(let n of t.materials)for(let t of n)dl(e.effects??[],t)}catch(e){throw p(),e}let l={seconds:0},u=new Vt,d=new V,f=!1;return{group:s,followCamera:(e,t)=>{let i=!1;for(let r of c){let a=r.chunkSizeMeters,o=c.length===1,s=o?Math.floor(e/a)-n:Math.floor(e/(2*a))*2-n,l=o?Math.floor(t/a)-n:Math.floor(t/(2*a))*2-n;(s!==r.startX||l!==r.startZ||!f)&&(r.startX=s,r.startZ=l,i=!0)}return i?(_d(c,r),f=!0,!0):!1},selectDetail:(t,n)=>xd(c,t,n,e.preset),updateFrustum:e=>{e.updateMatrixWorld(),d.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),u.setFromProjectionMatrix(d);for(let e=0;e<4;e++){let t=u.planes[e],n=o.uGrassFrustum.value[e];!t||!n||n.set(t.normal.x,t.normal.y,t.normal.z,t.constant)}},advanceWind:e=>{l.seconds=Xu(l.seconds+e),o.uGrassTime.value=l.seconds;let t=Yu(l.seconds);o.uGrassWindDirection.value.set(t.directionX,t.directionZ),o.uGrassWindStrength.value=t.strength*$u.wind.strengthScale},publishHeightWindow:()=>{o.uGrassHeightPlacement.value.copy(e.heightField.placement)},dispose:p};function p(){for(let e of c){for(let t of e.geometries)for(let e of t)e.dispose();for(let t of e.materials)for(let e of t)e.dispose()}}}function nd(e,t){let n=Math.max(2,Math.round(e/2)*2);return t>1?Math.max(4,n):n}function rd(e,t){let n=$u.layout,r=nd(n.ring,n.levels),i=n.coverage0Meters/r*2**e,a=e===0?0:n.coverage0Meters*2**(e-1),o=4**$u.instanceGridBits,s=id(a,t),c=Math.max(16,Math.round(s*i*i));return c>o&&(c=o,s=c/(i*i)),{chunkSizeMeters:i,innerEdgeMeters:a,allocatedDensity:s,baseInstanceCount:c,largestStepInstanceCount:Math.round(c*od(0)),instanceCeiling:o}}function id(e,t){let n=t.fullDensityRadiusMeters/Math.max(e,t.fullDensityRadiusMeters);return t.tuftsPerSquareMeter*n*n}function ad(){let e=$u.density;return e.stepsUp+e.stepsDown+1}function od(e){return 4**($u.density.stepsUp-e)}function sd(){let e=$u.instanceGridBits,t=1<<e,n=t*t,r=new Float32Array(n*3);for(let i=0;i<n;i++){let a=0,o=0;for(let t=0;t<e;t++)a|=(i>>2*t&1)<<e-1-t,o|=(i>>2*t+1&1)<<e-1-t;r[i*3]=(a+.5)/t,r[i*3+1]=(o+.5)/t,r[i*3+2]=i/n}return{attribute:new Ee(r,3),maxInstances:n}}function cd(e){let{preset:t}=e,n=$u,r=n.lighting,[i,a,o]=r.sunDirection;return{uGrassTime:{value:0},uGrassBladeHeight:{value:t.bladeHeightMeters},uGrassBladeWidth:{value:t.bladeWidthMeters},uGrassMinAngular:{value:n.blade.minAngularWidth},uGrassCurve:{value:n.blade.curve},uGrassWindDirection:{value:new Ne(1,0)},uGrassWindStrength:{value:0},uGrassWindSpeed:{value:n.wind.phaseSpeed},uGrassWindScale:{value:n.wind.phaseScalePerMeter},uGrassFadeStart:{value:n.fade.startMeters},uGrassFadeEnd:{value:n.fade.endMeters},uGrassDensityRef:{value:t.fullDensityRadiusMeters},uGrassDissolve:{value:n.density.dissolve},uGrassJitter:{value:n.density.jitter},uGrassDensity0:{value:t.tuftsPerSquareMeter},uGrassFrustum:{value:[0,1,2,3].map(()=>new Ct)},uGrassCullRadius:{value:n.cullRadiusMeters},uGrassHeightField:{value:e.heightField.texture},uGrassHeightPlacement:{value:e.heightField.placement.clone()},uGrassHeightRange:{value:e.heightField.range.clone()},uGrassSunDirection:{value:new U(i,a,o).normalize()},uGrassSunColor:{value:new L(r.sunColor)},uGrassSkyColor:{value:new L(r.skyColor)},uGrassRootColor:{value:new L(t.colors.rootColor)},uGrassTipColor:{value:new L(t.colors.tipColor)},uGrassFogColor:{value:new L(e.fogColor)},uGrassFogDensity:{value:r.fogDensity},uGrassExposure:{value:r.exposure},uGrassAmbientOcclusion:{value:r.ambientOcclusion},uGrassTranslucency:{value:r.translucency}}}function ld(e,t){return{GRASS_LIT:+!!t,GRASS_WIND:1,GRASS_CURVE:1,GRASS_WIND_SIMPLE:+(e>=1),GRASS_FLUTTER:+(e===0),GRASS_NORMAL_BEND:+(e===0),GRASS_SPECULAR:+(e===0),GRASS_TRANSLUCENCY:+(e<=1)}}function ud(e,t){let n=[],r=[],i=t=>{let i=n.length/3;for(let r=0;r<e;r++){let i=r/e;n.push(-1,i,t,1,i,t)}n.push(0,1,t);for(let t=0;t<e-1;t++){let e=i+2*t;r.push(e,e+2,e+1,e+1,e+2,e+3)}let a=i+2*(e-1);r.push(a,i+2*e,a+1)};i(0),$u.blade.cross&&i(1);let a=new x;return a.setAttribute(`position`,new A(n,3)),a.setIndex(r),a.setAttribute(`aGrassCell`,t),a}function dd(e){let{index:t,span:n,cells:r,shared:i,options:a}=e,o=$u,s=rd(t,a.preset),{chunkSizeMeters:c,innerEdgeMeters:l,allocatedDensity:u}=s,d=s.baseInstanceCount,f=ad(),p=e=>Math.max(16,Math.min(r.maxInstances,Math.round(d*od(e)))),m=o.fade.endMeters*1.05,h=1/Math.sqrt(Math.max(id(m,a.preset),1e-4)),g=h*o.density.jitter*Math.SQRT1_2,_=Math.max(a.preset.bladeWidthMeters*1.28,m*o.blade.minAngularWidth,h*.26)*.5,{range:v}=a.heightField,y=new w(new U(c*.5,v.x+v.y*.5,c*.5),Math.hypot(c*Math.SQRT1_2,v.y*.5)+g+a.preset.bladeHeightMeters+_),b={value:c},x=o.detail.segments.map(e=>Array.from({length:f},(t,n)=>{let i=ud(e,r.attribute);return i.instanceCount=p(n),i.boundingSphere=y,i})),S=Array.from({length:f},(e,t)=>({uGrassRankScale:{value:r.maxInstances/p(t)},uGrassDensityGain:{value:a.preset.tuftsPerSquareMeter/(p(t)/(c*c))}})),C=a.effects??[],T=ed.map(e=>Array.from({length:f},(t,n)=>new j({vertexShader:Qu,fragmentShader:Zu,side:2,defines:ld(e,C.length===0),uniforms:{...i,uGrassChunkSize:b,...S[n]}}))),E=n*n,D=[],O=[];for(let e=0;e<E;e++){let e=new Ye(x[0]?.[0],T[0]?.[0]);e.matrixAutoUpdate=!1,e.visible=!1,e.renderOrder=t,D.push(e),O.push({detailIndex:-1,densityStep:-1,placed:!1})}return{index:t,chunkSizeMeters:c,innerEdgeMeters:l,allocatedDensity:u,geometries:x,materials:T,chunks:D,chunkStates:O,startX:0,startZ:0}}function fd(e,t){if(!e)return;let n=e.chunkSizeMeters;return{minX:e.startX*n,maxX:(e.startX+t)*n,minZ:e.startZ*n,maxZ:(e.startZ+t)*n}}function pd(e,t,n,r){return e?t>=e.minX&&t+r<=e.maxX&&n>=e.minZ&&n+r<=e.maxZ:!1}function md(e,t,n,r){let i=e.chunks[t],a=e.chunkStates[t];!i||!a||(a.placed=!0,i.visible=!0,i.matrix.makeTranslation(n,0,r),i.matrixWorldNeedsUpdate=!0)}function hd(e,t){let n=e.chunks[t],r=e.chunkStates[t];!n||!r||(n.visible=!1,r.placed=!1)}function gd(e,t,n){let r=e.chunkSizeMeters,i=0;for(let a=0;a<n;a++)for(let o=0;o<n;o++){let n=(e.startX+a)*r,s=(e.startZ+o)*r;pd(t,n,s,r)||(md(e,i,n,s),i++)}for(;i<e.chunks.length;i++)hd(e,i)}function _d(e,t){e.forEach((n,r)=>{gd(n,fd(e[r-1],t),t)})}function vd(e,t,n,r){let i=t*.5,a=e.matrix.elements[12]??0,o=e.matrix.elements[14]??0,s=Math.max(0,Math.abs(n-(a+i))-i),c=Math.max(0,Math.abs(r-(o+i))-i);return Math.sqrt(s*s+c*c)}function yd(e,t){let n=$u.detail;if(!n.byDistance)return n.uniformSegmentIndex;for(let r=0;r<n.switchDistanceMeters.length;r++)if(e<(n.switchDistanceMeters[r]??0)*(t<=r?n.hysteresis:1))return r;return n.segments.length-1}function bd(e,t,n){let r=id(e,n)/t,i=$u.density;return Math.min(ad()-1,Math.max(0,i.stepsUp-Math.ceil(Math.log2(r)/2)))}function xd(e,t,n,r){for(let i of e)i.chunks.forEach((e,a)=>{let o=i.chunkStates[a];if(!o?.placed)return;let s=vd(e,i.chunkSizeMeters,t,n),c=s<$u.fade.endMeters;if(e.visible!==c&&(e.visible=c),!c)return;let l=yd(s,o.detailIndex),u=bd(s,i.allocatedDensity,r);if(l===o.detailIndex&&u===o.densityStep)return;o.detailIndex=l,o.densityStep=u;let d=i.geometries[l]?.[u],f=Math.max(0,$u.detail.tierOfDetail[l]??0),p=i.materials[f]?.[u];d&&(e.geometry=d),p&&(e.material=p)})}var{lerp:Sd}=W,Cd=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let e=0;e<256;e++)Cd[256+e]=Cd[e];function wd(e){return e*e*e*(e*(e*6-15)+10)}function Td(e,t,n,r){let i=e&15,a=i<8?t:n,o=i<4?n:i==12||i==14?t:r;return(i&1?-a:a)+(i&2?-o:o)}var Ed=class{noise(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=r&255,s=i&255,c=a&255;e-=r,t-=i,n-=a;let l=e-1,u=t-1,d=n-1,f=wd(e),p=wd(t),m=wd(n),h=Cd[o]+s,g=Cd[h]+c,_=Cd[h+1]+c,v=Cd[o+1]+s,y=Cd[v]+c,b=Cd[v+1]+c;return Sd(Sd(Sd(Td(Cd[g],e,t,n),Td(Cd[y],l,t,n),f),Sd(Td(Cd[_],e,u,n),Td(Cd[b],l,u,n),f),p),Sd(Sd(Td(Cd[g+1],e,t,d),Td(Cd[y+1],l,t,d),f),Sd(Td(Cd[_+1],e,u,d),Td(Cd[b+1],l,u,d),f),p),m)}},Dd=new Ed;function Od(e,t,n){let r=jd(e,t,n),i=Nd(e,t,n),a=W.smoothstep(i,n.river.channelHalfWidthMeters,n.river.bankHalfWidthMeters),o=Pd(n.river.riverBedHeightY,r,a);return Math.min(r,o)}function kd(e,t,n){let{groundY:r,hasWater:i}=Ad(e,t,n);return i?n.river.waterHeightY:r}function Ad(e,t,n){let r=Od(e,t,n);return{groundY:r,hasWater:Nd(e,t,n)<=n.river.channelHalfWidthMeters&&r<n.river.waterHeightY}}function jd(e,t,n){let{heightField:r,seed:i}=n,a=i/1e3,o=Dd.noise(e/r.rollingFeatureSizeMeters,t/r.rollingFeatureSizeMeters,a)*r.rollingElevationMeters,s=Dd.noise(e/r.detailFeatureSizeMeters,t/r.detailFeatureSizeMeters,a+17)*r.detailElevationMeters,c=W.smoothstep(Dd.noise(e/r.mountainRegionSizeMeters,t/r.mountainRegionSizeMeters,a+31),0,.55),l=Dd.noise(e/r.mountainFeatureSizeMeters,t/r.mountainFeatureSizeMeters,a+53),u=c*(1-l*l)**3*r.mountainElevationMeters;return r.baseHeightY+o+s+u}function Md(e){let{heightField:t,river:n}=e,r=t.baseHeightY-t.rollingElevationMeters-t.detailElevationMeters,i=t.baseHeightY+t.rollingElevationMeters+t.detailElevationMeters+t.mountainElevationMeters;return{minimumElevation:Math.min(r,n.riverBedHeightY),maximumElevation:i}}function Nd(e,t,n){let{river:r,seed:i}=n,a=i%360*Math.PI/180,o=Math.sin(t/r.primaryMeanderLengthMeters+a)*r.primaryMeanderAmplitudeMeters+Math.sin(t/r.secondaryMeanderLengthMeters-a)*r.secondaryMeanderAmplitudeMeters;return Math.abs(e-o)}function Pd(e,t,n){return e+(t-e)*n}function Fd(e){let t=$u.heightField,n=t.sizeTexels,r=new Uint16Array(n*n*2),i=new g(r,n,n,d,C);i.magFilter=Pe,i.minFilter=Pe,i.generateMipmaps=!1,i.wrapS=qe,i.wrapT=qe;let a=Md(e.surfaceSettings),o=new Ne(a.minimumElevation,Math.max(a.maximumElevation-a.minimumElevation,1)),s=new Ct(0,0,t.texelMeters,n),c={pendingOriginX:0,pendingOriginZ:0,nextRow:0},l=(e,r)=>{let i=(n-1)/2*t.texelMeters;c.pendingOriginX=Math.round((e-i)/t.texelMeters)*t.texelMeters,c.pendingOriginZ=Math.round((r-i)/t.texelMeters)*t.texelMeters,c.nextRow=0},u=()=>{let a=Math.min(n,c.nextRow+t.rowsPerStep);for(let t=c.nextRow;t<a;t++)Id(t,r,c,o,e);return c.nextRow=a,c.nextRow<n?!1:(s.x=c.pendingOriginX,s.y=c.pendingOriginZ,i.needsUpdate=!0,!0)};try{for(l(e.cameraX,e.cameraZ);!u(););}catch(e){throw i.dispose(),e}return{texture:i,placement:s,range:o,needsRecenter:(e,r)=>{let i=(n-1)/2*t.texelMeters,a=s.x+i,o=s.y+i;return Math.abs(e-a)>t.recenterMeters||Math.abs(r-o)>t.recenterMeters},fillNextRows:u,beginRecenter:l,dispose:()=>i.dispose()}}function Id(e,t,n,r,i){let a=$u.heightField,o=a.sizeTexels,s=n.pendingOriginZ+e*a.texelMeters;for(let c=0;c<o;c++){let l=n.pendingOriginX+c*a.texelMeters,u=(i.worldSurface.groundYAt(l,s)-r.x)/r.y,d=(e*o+c)*2;t[d]=p.toHalfFloat(u),t[d+1]=p.toHalfFloat(Ld(i.worldSurface,l,s))}}function Ld(e,t,n){let r=e.zoneInfluencesAt(t,n),i=$u.zoneCoverage;return r.meadow*i.meadow+r.shrubSlope*i.shrubSlope}function Rd(e){let t={currentResources:void 0};return{load:()=>zd(t,e),activate:()=>Hd(t,!0),update:n=>Bd(t,e,n),deactivate:()=>Hd(t,!1),unload:()=>Ud(t,e.scene)}}function zd(e,t){let n=Fd({worldSurface:t.worldSurface,surfaceSettings:t.surfaceSettings,cameraX:t.viewpoint.worldPosition.x,cameraZ:t.viewpoint.worldPosition.z}),r;try{r=td({preset:t.preset,heightField:n,fogColor:t.fogColor,effects:t.effects})}catch(e){throw n.dispose(),e}e.currentResources={heightField:n,field:r,refillKey:{},refilling:!1},r.publishHeightWindow();let{worldPosition:i}=t.viewpoint;r.followCamera(i.x,i.z),r.selectDetail(i.x,i.z),r.group.visible=!1,t.scene.add(r.group)}function Bd(e,t,n){let r=e.currentResources;if(!r)return;let{viewpoint:i,frustumCamera:a,streamQueue:o}=t,s=i.worldPosition.x,c=i.worldPosition.z;r.field.advanceWind(n),r.field.updateFrustum(a),r.field.followCamera(s,c),r.field.selectDetail(s,c),!r.refilling&&r.heightField.needsRecenter(s,c)&&(r.heightField.beginRecenter(s,c),r.refilling=o.enqueue(Vd(e,r)))}function Vd(e,t){return{key:t.refillKey,isCurrent:()=>e.currentResources===t,runStep:()=>t.heightField.fillNextRows()?(t.field.publishHeightWindow(),t.refilling=!1,!0):!1}}function Hd(e,t){let n=e.currentResources;n&&(n.field.group.visible=t)}function Ud(e,t){let n=e.currentResources;n&&(e.currentResources=void 0,t.remove(n.field.group),n.field.dispose(),n.heightField.dispose())}var Wd={animationLoopSeconds:3600,shimmer:{grainFrequency:30,baseAmount:0,poleAmount:2.85,poleWidthExponent:20,contrast:1,iridescence:.7,breathe:1,driftHeadingDegrees:60,driftSpeed:.4,driftVertical:.25,stretch:1,neutralColor:11777732},sky:{domeRadiusMeters:120,widthSegments:32,heightSegments:16}},Gd=`/*
 * Purpose: Paint the radical-pair shimmer of the geomagnetic field on one sky dome.
 * Context: Ported from the previous version's sky mode "birdspec", its saved state hardcoded.
 * Responsibility: Grade the dome by view direction and condense a grain pattern at the field axis.
 * Boundary: Terrain, ground presentation, and every lit surface stay elsewhere.
 */

uniform vec3 magneticFieldAxis;
uniform float magneticIntensity;
uniform float magneticTime;
uniform vec3 magneticHorizonColor;
uniform vec3 magneticZenithColor;
uniform vec3 magneticNorthColor;
uniform vec3 magneticSouthColor;
uniform vec3 magneticNeutralColor;
uniform vec3 magneticDriftVelocity;
uniform float magneticGrainFrequency;
uniform float magneticBaseAmount;
uniform float magneticPoleAmount;
uniform float magneticPoleWidth;
uniform float magneticContrast;
uniform float magneticIridescence;
uniform float magneticBreathe;
uniform float magneticStretch;

varying vec3 magneticSkyDirection;

// Below this the pattern cannot reach a displayable value, and the four-octave
// noise behind it is by far the most expensive work on the dome.
const float PATTERN_CUTOFF = 0.002;

float magneticHash(vec3 cell) {
  return fract(sin(dot(cell, vec3(127.1, 311.7, 74.7))) * 43758.5453);
}

/** Trilinear value noise; the previous version's \`noise3\`, unchanged. */
float magneticNoise(vec3 position) {
  vec3 cell = floor(position);
  vec3 offset = fract(position);
  vec3 weight = offset * offset * (3.0 - 2.0 * offset);
  float n000 = magneticHash(cell);
  float n100 = magneticHash(cell + vec3(1.0, 0.0, 0.0));
  float n010 = magneticHash(cell + vec3(0.0, 1.0, 0.0));
  float n110 = magneticHash(cell + vec3(1.0, 1.0, 0.0));
  float n001 = magneticHash(cell + vec3(0.0, 0.0, 1.0));
  float n101 = magneticHash(cell + vec3(1.0, 0.0, 1.0));
  float n011 = magneticHash(cell + vec3(0.0, 1.0, 1.0));
  float n111 = magneticHash(cell + vec3(1.0, 1.0, 1.0));
  float x00 = mix(n000, n100, weight.x);
  float x10 = mix(n010, n110, weight.x);
  float x01 = mix(n001, n101, weight.x);
  float x11 = mix(n011, n111, weight.x);
  return mix(mix(x00, x10, weight.y), mix(x01, x11, weight.y), weight.z);
}

/** Four octaves, unrolled; the previous version's \`fbm\` with its exact constants. */
float magneticFbm(vec3 position) {
  vec3 step = vec3(11.5, 21.7, 31.9);
  vec3 point = position;
  float value = magneticNoise(point) * 0.5;
  point = point * 2.07 + step;
  value += magneticNoise(point) * 0.25;
  point = point * 2.07 + step;
  value += magneticNoise(point) * 0.125;
  point = point * 2.07 + step;
  value += magneticNoise(point) * 0.0625;
  return value;
}

void main() {
  vec3 direction = normalize(magneticSkyDirection);
  vec3 sky = mix(
    magneticHorizonColor,
    magneticZenithColor,
    smoothstep(0.0, 0.75, direction.y)
  );

  // Signed position on the field axis: +1 at the magnetic north point, −1 at
  // the southern counter-pole. The shimmer condenses at both.
  float along = dot(direction, magneticFieldAxis);
  float axial = abs(along);
  float breathe = sin(magneticTime * 0.5) * 0.05 * magneticBreathe;
  float poleZone = pow(clamp(axial + breathe, 0.0, 1.0), magneticPoleWidth);
  float amount = clamp(
    magneticBaseAmount + poleZone * magneticPoleAmount,
    0.0,
    1.2
  ) * magneticIntensity;

  // One coherent branch: the open sky between the poles carries no pattern, and
  // skipping the noise there costs nothing in divergence but saves the frame.
  if (amount > PATTERN_CUTOFF) {
    // Anisotropy stretches or squashes the grain along the field axis.
    vec3 anisotropic =
      direction + magneticFieldAxis * (along * (magneticStretch - 1.0));
    float noise = magneticFbm(
      anisotropic * magneticGrainFrequency +
        magneticDriftVelocity * magneticTime
    );
    float grain = smoothstep(0.34, 0.66, noise);
    float pattern = clamp(grain * amount * magneticContrast, 0.0, 1.0);

    vec3 poleColor = mix(
      magneticSouthColor,
      magneticNorthColor,
      smoothstep(-0.6, 0.6, along)
    );
    vec3 grainColor = mix(
      magneticNeutralColor,
      poleColor,
      smoothstep(0.15, 0.75, axial)
    );
    sky = mix(sky, grainColor, pattern);

    // Iridescent breathing over the grain, inside the pole zones only.
    float phase = noise * 25.0 - magneticTime * 1.4;
    vec3 iridescent =
      vec3(sin(phase), sin(phase + 2.09), sin(phase + 4.18)) * 0.5 + 0.5;
    sky += iridescent *
      grain *
      poleZone *
      magneticIridescence *
      0.6 *
      magneticIntensity;
  }

  // Meet the carried level haze at the horizon so the dome and the fogged
  // distance agree instead of showing a seam.
  sky = mix(
    sky,
    magneticHorizonColor,
    (1.0 - smoothstep(0.0, 0.1, abs(direction.y))) * 0.6
  );

  gl_FragColor = vec4(sky, 1.0);
  // Uniform colors arrive linear and the world's other materials convert on
  // output; without this the dome alone would skip the conversion.
  #include <colorspace_fragment>
}
`,Kd=`/*
 * Purpose: Pass the view direction of the camera-centred sky dome to the fragment shader.
 * Context: The dome follows the camera, so local vertex positions are view directions.
 * Responsibility: Forward the local position and project the dome vertex.
 * Boundary: Glow mathematics and colors stay in the fragment shader.
 */

varying vec3 magneticSkyDirection;

void main() {
  magneticSkyDirection = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function qd(e){let t={currentResources:void 0};return{load:()=>Jd(t,e),activate:()=>Xd(t,!0),update:()=>Yd(t,e.viewpoint),deactivate:()=>Xd(t,!1),unload:()=>Zd(t,e.scene)}}function Jd(e,t){let n=Wd.sky,r=Wd.shimmer,i=new Ce(n.domeRadiusMeters,n.widthSegments,n.heightSegments),a=new j({vertexShader:Kd,fragmentShader:Gd,side:1,depthWrite:!1,uniforms:{magneticFieldAxis:t.fieldAxisUniform,magneticIntensity:t.intensityUniform,magneticTime:t.timeUniform,magneticHorizonColor:t.hazeColorUniform,magneticZenithColor:{value:t.colors.zenith},magneticNorthColor:{value:t.colors.north},magneticSouthColor:{value:t.colors.south},magneticNeutralColor:{value:t.colors.neutral},magneticDriftVelocity:{value:t.driftVelocity},magneticGrainFrequency:{value:r.grainFrequency},magneticBaseAmount:{value:r.baseAmount},magneticPoleAmount:{value:r.poleAmount},magneticPoleWidth:{value:r.poleWidthExponent},magneticContrast:{value:r.contrast},magneticIridescence:{value:r.iridescence},magneticBreathe:{value:r.breathe},magneticStretch:{value:r.stretch}}}),o=new Ye(i,a);o.renderOrder=-1,o.frustumCulled=!1,o.visible=!1,o.position.copy(t.viewpoint.worldPosition),t.scene.add(o),e.currentResources={dome:o}}function Yd(e,t){e.currentResources?.dome.position.copy(t.worldPosition)}function Xd(e,t){let n=e.currentResources;n&&(n.dome.visible=t)}function Zd(e,t){let n=e.currentResources;n&&(e.currentResources=void 0,t.remove(n.dome),n.dome.geometry.dispose(),n.dome.material.dispose())}function Qd(e,t){nf(e);let n={value:ef(e)},r={value:e.intensity},i={value:new L(t.skyHazeColor)},a={value:0},o=Wd.animationLoopSeconds,s=qd({scene:t.scene,viewpoint:t.viewpoint,hazeColorUniform:i,colors:$d(e),driftVelocity:tf(),fieldAxisUniform:n,intensityUniform:r,timeUniform:a});return{module:{...s,update:e=>{a.value=(a.value+e)%o,s.update?.(e)}},setIntensity:e=>{r.value=e},setSkyBackground:e=>{i.value.copy(e)}}}function $d(e){return{zenith:new L(e.colors.zenithColor),north:new L(e.colors.northColor),south:new L(e.colors.southColor),neutral:new L(Wd.shimmer.neutralColor)}}function ef(e){let t=W.degToRad(e.fieldDirectionDegreesFromNorth),n=W.degToRad(e.fieldElevationDegrees),r=Math.cos(n);return new U(Math.sin(t)*r,Math.sin(n),Math.cos(t)*r)}function tf(){let e=Wd.shimmer,t=W.degToRad(e.driftHeadingDegrees);return new U(Math.sin(t),e.driftVertical,Math.cos(t)).multiplyScalar(e.driftSpeed)}function nf(e){if(!Number.isFinite(e.fieldDirectionDegreesFromNorth))throw RangeError(`Magnetic field direction must be finite`);if(!rf(e.fieldElevationDegrees))throw RangeError(`Magnetic field elevation must lie between the horizon and the zenith`);if(!af(e.intensity))throw RangeError(`Magnetic intensity must be between zero and one`)}function rf(e){return Number.isFinite(e)&&e>=0&&e<=90}function af(e){return Number.isFinite(e)&&e>=0&&e<=1}var of=`/*
 * Purpose: Beat the wings of every instanced bird body in the vertex stage.
 * Context: One pool of birds shares one geometry; a skeleton each is not affordable.
 * Responsibility: Swing wing vertices about the flight axis by this bird's beat.
 * Boundary: Where a bird is and how fast it beats is written by the flock simulation.
 */

uniform float birdWingBeatRadians;
uniform float birdWingRootShare;

// Signed place across the wings, −1 at the left tip and 1 at the right.
attribute float birdWingSpan;
// This bird's beat, between −1 and 1, written once per instance per frame.
attribute float birdBeat;

vec3 applyBirdWingBeat(vec3 restingPosition) {
  // The fuselage holds still and the swing grows out of the wing root, so a
  // wing bends where a wing bends instead of the whole bird tilting.
  float reach = smoothstep(birdWingRootShare, 1.0, abs(birdWingSpan));
  float angle = birdBeat * birdWingBeatRadians * reach * sign(birdWingSpan);

  float turnCos = cos(angle);
  float turnSin = sin(angle);

  // Turn about the flight axis: the wing keeps its span and gains its lift.
  return vec3(
    restingPosition.x * turnCos - restingPosition.y * turnSin,
    restingPosition.x * turnSin + restingPosition.y * turnCos,
    restingPosition.z
  );
}
`,X={nearRing:{minMeters:5,maxMeters:18},farRing:{minMeters:35,maxMeters:65},reanchorDistanceMeters:80,swarmFadeSeconds:.55,swarmFadeStaggerSeconds:.12,groundClearanceMeters:.9,groundSlopeSampleMeters:2,swarmRadiusMeters:1.45,swarmHeightMeters:.65,swarmShape:{minAxisScale:.6,maxAxisScale:1.45,lobesPerSwarm:3,lobeAngleJitter:.4,lobeOffsetFraction:.55,minLobeSpread:.42,maxLobeSpread:.72,lobeDriftFraction:.55,lobeDriftRate:{minHertz:.03,maxHertz:.11}},swarmCorePull:2.6,swarmDriftPull:.9,swarmRelaxRadii:.5,swarmDissolveRadii:3,swarmRecapturePull:8,swarmLobePull:1.2,swarmLobeReachRadii:1.2,flyBinding:{minimum:.18,skewToHeld:.3},minFlightSpeed:.45,maxFlightSpeed:1.8,maxForce:13,neighbourSamples:8,placementAttemptsPerAnchor:16,maxBoidStepSeconds:.05,anchorGroundFollowRate:.2,trailIntensityFloor:.04,birdOrbitRadius:{minMeters:30,maxMeters:90},birdAnchorFollowRate:.02,birdScatter:{radiusMeters:6,heightMeters:1.5},birdFlockSizeVariation:.65,minBirdsPerFlock:3,birdWingSpanMeters:.9,birdFlapAmplitudeMeters:.28,birdFlapFrequency:{minHertz:4,maxHertz:8},birdPointsPerBird:3,birdBodyValuesPerBird:5,birdWingBeatRadians:.75,birdWingRootShare:.22},sf=`bird-wing-beat-v1`,cf={id:`bird`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/animals/flock-bird.glb`},lf=new U(0,1,0);function uf(e){let t=df(e.asset,e.appearance),n;try{n=ff(e)}catch(e){throw t.dispose(),e}let r=new k(t,n,e.birdCount);r.name=`BirdBodies`,r.instanceMatrix.setUsage(N),r.frustumCulled=!1,r.visible=!1;let i=new Ee(new Float32Array(e.birdCount),1);i.setUsage(N),t.setAttribute(`birdBeat`,i),e.scene.add(r);let a={mesh:r,beats:i},o=new U().setScalar(1),s=new V,c=new Ht,l=new U;return{update:t=>{let n=X.birdBodyValuesPerBird;for(let r=0;r<e.birdCount;r+=1){let e=r*n;l.set(t[e]??0,t[e+1]??0,t[e+2]??0),c.setFromAxisAngle(lf,t[e+3]??0),s.compose(l,c,o),a.mesh.setMatrixAt(r,s),a.beats.setX(r,t[e+4]??0)}a.mesh.instanceMatrix.needsUpdate=!0,a.beats.needsUpdate=!0},setVisible:e=>{a.mesh.visible=e},dispose:()=>{e.scene.remove(a.mesh),a.mesh.dispose(),t.dispose(),n.dispose()}}}function df(e,t){e.scene.updateMatrixWorld(!0);let n;if(e.scene.traverse(e=>{e instanceof Ye&&!n&&(n=e)}),!n)throw Error(`The bird model holds no mesh`);let r=n.geometry.clone().applyMatrix4(n.matrixWorld);r.computeBoundingBox();let i=r.boundingBox;if(!i)throw Error(`The bird model has no measurable bounds`);let a=i.max.z-i.min.z,o=Math.max(Math.abs(i.min.x),Math.abs(i.max.x));if(a<=0||o<=0)throw Error(`The bird model has no measurable length or span`);r.scale(t.lengthMeters/a,t.lengthMeters/a,t.lengthMeters/a);let s=r.attributes.position;if(!s)throw Error(`The bird model holds no positions`);let c=o*t.lengthMeters/a,l=new Float32Array(s.count);for(let e=0;e<s.count;e+=1)l[e]=s.getX(e)/c;return r.setAttribute(`birdWingSpan`,new B(l,1)),r}function ff(e){let t;e.asset.scene.traverse(e=>{e instanceof Ye&&!t&&(t=e)});let n=Array.isArray(t?.material)?t?.material[0]:t?.material;if(!n)throw Error(`The bird model holds no material`);let r=vs(n,e.appearance.color);return r.name=`bird-body`,dl(e.effects,r),xu(r,{cacheKey:sf,uniforms:{birdWingBeatRadians:{value:X.birdWingBeatRadians},birdWingRootShare:{value:X.birdWingRootShare}},vertexHeader:of,vertexAnchor:`#include <begin_vertex>`,vertexCall:`transformed = applyBirdWingBeat(transformed);`,fragmentHeader:``,colorFragmentCall:``}),r}var pf=4294967296;function Z(e,t,n=0,r=0){let i=Math.imul(e+1,73856093);return i^=Math.imul(t+1,19349663),i^=Math.imul(n+1,2971215073),i^=Math.imul(r+1,83492791),i=Math.imul(i^i>>>16,2246822519),i=Math.imul(i^i>>>13,3266489917),(i>>>0)/pf}var mf=101,hf=Math.PI*2;function gf(e,t){let n=Math.max(Z(e,t),2**-52),r=Z(e,t+mf);return Math.sqrt(-2*Math.log(n))*Math.cos(hf*r)}function _f(e,t,n){let r=Math.imul(e+1,374761393)^Math.imul(t+1,668265263)^Math.imul(n+1,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/2147483647-1}var vf=3,yf=Math.PI*2,bf=1e-8,xf=0,Sf=1,Cf=2,wf=3,Tf=4,Ef=5,Df=6;function Of(e){return e.flockCount*e.birdsPerFlock}function kf(e){return e.flockCount*e.birdsPerFlock*X.birdPointsPerBird}function Af(e){let{birds:t}=e,n=X,r=t.flockCount*t.birdsPerFlock,i=jf(t.flockCount,t.birdsPerFlock),a=Nf(i),o=new Float32Array(kf(t)*vf),s=new Float32Array(r*X.birdBodyValuesPerBird),c=new Float32Array(r*vf),l=new Float32Array(r),u=new Float32Array(r),d=Array.from({length:t.flockCount},()=>({x:e.initialPlayerX,z:e.initialPlayerZ})),f=new Float32Array(t.flockCount),p=new Float32Array(t.flockCount*vf),m=0;for(let e=0;e<r;e+=1){let t=e*vf,r=Z(e,xf)*yf,i=Math.sqrt(Z(e,Sf))*n.birdScatter.radiusMeters;c[t]=Math.cos(r)*i,c[t+1]=(Z(e,Cf)*2-1)*n.birdScatter.heightMeters,c[t+2]=Math.sin(r)*i,l[e]=n.birdFlapFrequency.minHertz+Z(e,wf)*(n.birdFlapFrequency.maxHertz-n.birdFlapFrequency.minHertz),u[e]=Z(e,Tf)*yf}for(let e=0;e<t.flockCount;e+=1)f[e]=Z(e,Ef)*yf;let h=!1,g=()=>{for(let n=0;n<t.flockCount;n+=1)Ff({options:e,flockIndex:n,flockSize:i[n]??0,firstBirdIndex:a[n]??0,anchor:d[n]??{x:0,z:0},orbitAngle:f[n]??0,elapsedSeconds:m,worldPositions:o,bodyStream:s,hasFlown:h,flockCenters:p,scatterOffsets:c,flapFrequencies:l,flapPhases:u});h=!0};return g(),{getWorldPositions:()=>o,getBodyStream:()=>s,getFlockCenters:()=>p,update:(e,r,i)=>{if(!(e<=0)){m+=e;for(let a=0;a<t.flockCount;a+=1){let o=d[a];o&&(o.x+=(r-o.x)*n.birdAnchorFollowRate,o.z+=(i-o.z)*n.birdAnchorFollowRate,f[a]=(f[a]??0)+t.flightSpeedMetersPerSecond/Pf(a,t.flockCount)*e)}g()}}}}function jf(e,t){let n=e*t,{birdFlockSizeVariation:r,minBirdsPerFlock:i}=X,a=Math.min(i,Math.floor(n/e)),o=Array.from({length:e},(e,t)=>1+(Z(t,Df)-.5)*2*r),s=o.reduce((e,t)=>e+t,0),c=o.map(e=>Math.max(a,Math.round(n*e/s))),l=n-c.reduce((e,t)=>e+t,0);for(;l!==0;){let e=Math.sign(l),t=Mf(c,e,a);if(t===-1)break;c[t]=(c[t]??0)+e,l-=e}return c}function Mf(e,t,n){let r=-1,i=-1;return e.forEach((e,a)=>{t<0&&e<=n||e>i&&(i=e,r=a)}),r}function Nf(e){let t=[],n=0;for(let r of e)t.push(n),n+=r;return t}function Pf(e,t){let{birdOrbitRadius:n}=X,r=t<=1?0:e/(t-1);return n.minMeters+(n.maxMeters-n.minMeters)*r}function Ff(e){let{birds:t,groundYAt:n}=e.options,r=X,i=Pf(e.flockIndex,t.flockCount),a=e.anchor.x+Math.cos(e.orbitAngle)*i,o=e.anchor.z+Math.sin(e.orbitAngle)*i,s=Math.atan2(-Math.sin(e.orbitAngle),Math.cos(e.orbitAngle)),c=r.birdWingSpanMeters/2,l=e.flockIndex*vf;e.flockCenters[l]=a,e.flockCenters[l+1]=n(a,o)+t.flightHeightMeters,e.flockCenters[l+2]=o;for(let i=0;i<e.flockSize;i+=1){let l=e.firstBirdIndex+i,u=l*vf,d=a+(e.scatterOffsets[u]??0),f=o+(e.scatterOffsets[u+2]??0),p=n(d,f)+t.flightHeightMeters+(e.scatterOffsets[u+1]??0),m=e.elapsedSeconds*(e.flapFrequencies[l]??6)*yf+(e.flapPhases[l]??0),h=Math.sin(m),g=h*r.birdFlapAmplitudeMeters,_=l*r.birdBodyValuesPerBird,v=If({bodyStream:e.bodyStream,bodyOffset:_,bodyX:d,bodyZ:f,hasFlown:e.hasFlown,tangentHeading:s}),y=-Math.cos(v),b=Math.sin(v);e.bodyStream[_]=d,e.bodyStream[_+1]=p,e.bodyStream[_+2]=f,e.bodyStream[_+3]=v,e.bodyStream[_+4]=h;let x=l*r.birdPointsPerBird*vf;e.worldPositions[x]=d,e.worldPositions[x+1]=p,e.worldPositions[x+2]=f,e.worldPositions[x+3]=d+y*c,e.worldPositions[x+4]=p+g,e.worldPositions[x+5]=f+b*c,e.worldPositions[x+6]=d-y*c,e.worldPositions[x+7]=p+g,e.worldPositions[x+8]=f-b*c}}function If(e){if(!e.hasFlown)return e.tangentHeading;let t=e.bodyStream[e.bodyOffset+3]??0,n=e.bodyX-(e.bodyStream[e.bodyOffset]??0),r=e.bodyZ-(e.bodyStream[e.bodyOffset+2]??0);return n*n+r*r<bf?t:Math.atan2(n,r)}var Lf=`/*
 * Purpose: Spread the show's Motion sense fade across the fly pool.
 * Context: Opaque specks all cross the pixel they need in the same instant.
 * Responsibility: Turn one sense strength into this fly's own share of it.
 * Boundary: Swarm placement, buzz, and the point shape stay beside this file.
 */

// The share of the fade window one fly takes for itself. The rest of the
// window is what the pool spreads across, so the swarms gather over the whole
// fade rather than arriving as one block.
const float FLY_SENSE_ARRIVAL_SHARE = 0.4;

float flySenseArrivalScale(float senseFade, float share) {
  float start = share * (1.0 - FLY_SENSE_ARRIVAL_SHARE);
  return smoothstep(start, start + FLY_SENSE_ARRIVAL_SHARE, senseFade);
}
`,Rf=`/*
 * Purpose: Clip a fly point primitive to a circular speck shape.
 * Context: Flies read as small round insects instead of square points.
 * Responsibility: Discard only point fragments outside the circle.
 * Boundary: Color, swarm simulation, and material lifecycle stay elsewhere.
 */

void discardOutsideFlySwarmCircle() {
  vec2 centerOffset = gl_PointCoord - vec2(0.5);
  if (dot(centerOffset, centerOffset) > 0.25) discard;
}
`,zf=`#include <common>`,Bf=`#include <clipping_planes_fragment>`,Vf=`#include <logdepthbuf_vertex>`,Hf=`motion-fly-material-v4`;function Uf(e,t){let n=new O({color:e.flyColor,size:e.flySizeMeters,sizeAttenuation:!0});return n.onBeforeCompile=e=>{e.uniforms.motionSenseFade=t??{value:1},e.vertexShader=e.vertexShader.replace(zf,`${zf}\nuniform float motionSenseFade;\nattribute float flyArrival;\nattribute float flySenseArrival;\n${Lf}`).replace(Vf,`gl_PointSize *= flySenseArrivalScale(motionSenseFade, flySenseArrival) * flyArrival;\n${Vf}`),e.fragmentShader=e.fragmentShader.replace(zf,`${zf}\n${Rf}`).replace(Bf,`${Bf}\ndiscardOutsideFlySwarmCircle();`)},n.customProgramCacheKey=()=>Hf,n}var Wf=Math.PI*2,Gf=8,Kf=9;function qf(e){return Array.from({length:e},()=>({x:0,y:0,z:0,groundSlopeX:0,groundSlopeZ:0}))}function Jf(e,t,n,r,i){for(let a=0;a<e.length;a+=1)Yf(e,a,t,n,r,i)}function Yf(e,t,n,r,i,a){let o=e[t];if(!o)return;let s=$f(t,e.length);for(let e=0;e<X.placementAttemptsPerAnchor;e+=1){let c=Z(t,Gf,r,e)*Wf,l=s.minMeters+Math.sqrt(Z(t,Kf,r,e))*(s.maxMeters-s.minMeters);if(o.x=i+Math.cos(c)*l,o.z=a+Math.sin(c)*l,n.zoneAt(o.x,o.z)!==`water`)break}Qf(n.groundYAt,o.x,o.z),o.y=Zf.height+X.groundClearanceMeters,o.groundSlopeX=Zf.slopeX,o.groundSlopeZ=Zf.slopeZ}function Xf(e,t){Qf(t,e.x,e.z);let n=X.anchorGroundFollowRate,r=Zf.height+X.groundClearanceMeters;e.y+=(r-e.y)*n,e.groundSlopeX+=(Zf.slopeX-e.groundSlopeX)*n,e.groundSlopeZ+=(Zf.slopeZ-e.groundSlopeZ)*n}var Zf={height:0,slopeX:0,slopeZ:0};function Qf(e,t,n){let r=X.groundSlopeSampleMeters;Zf.height=e(t,n),Zf.slopeX=(e(t+r,n)-e(t-r,n))/(2*r),Zf.slopeZ=(e(t,n+r)-e(t,n-r))/(2*r)}function $f(e,t){let{nearRing:n,farRing:r}=X,i=t<=1?0:e/(t-1);return{minMeters:n.minMeters+(r.minMeters-n.minMeters)*i,maxMeters:n.maxMeters+(r.maxMeters-n.maxMeters)*i}}var ep=3,tp=Math.PI*2,np=20,rp=21,ip=22,ap=23,op=24,sp=25,cp=26,lp=27,up=28,dp=29,fp=30,pp=31,mp=32,hp=977,gp=1.8;function _p(e){return Array.from({length:e},(e,t)=>vp(t))}function vp(e){let{swarmRadiusMeters:t,swarmHeightMeters:n,swarmShape:r}=X,i=t*yp(e,np),a=n*yp(e,rp),o=t*yp(e,ip),s=Z(e,ap)*tp;return{radiusX:i,radiusY:a,radiusZ:o,yawCos:Math.cos(s),yawSin:Math.sin(s),lobes:Array.from({length:r.lobesPerSwarm},(t,n)=>bp(e,n,i,a,o))}}function yp(e,t){let{minAxisScale:n,maxAxisScale:r}=X.swarmShape;return n+Z(e,t)*(r-n)}function bp(e,t,n,r,i){let a=X.swarmShape,o=e*hp+t,s=(t/a.lobesPerSwarm+(Z(o,op)-.5)*a.lobeAngleJitter/a.lobesPerSwarm)*tp,c=a.lobeOffsetFraction*(.35+Z(o,sp)*.65),l=X.swarmShape.lobeDriftRate;return{restX:Math.cos(s)*c*n,restY:(Z(o,cp)*2-1)*c*r,restZ:Math.sin(s)*c*i,spread:a.minLobeSpread+Z(o,lp)*(a.maxLobeSpread-a.minLobeSpread),driftMeters:a.lobeDriftFraction*n,driftHertz:l.minHertz+Z(o,up)*(l.maxHertz-l.minHertz),driftPhase:Z(o,dp)*tp}}function xp(e){return e*X.swarmShape.lobesPerSwarm}function Sp(e,t){let{lobesPerSwarm:n}=X.swarmShape;return Math.min(n-1,Math.floor(Z(e,t)*n))}function Cp(e,t){return e*X.swarmShape.lobesPerSwarm+t}function wp(e,t,n){let{lobesPerSwarm:r}=X.swarmShape;for(let i=0;i<e.length;i+=1){let a=e[i];if(a)for(let e=0;e<r;e+=1){let r=a.lobes[e];if(!r)continue;let o=tp*r.driftHertz*t+r.driftPhase,s=r.restX+Math.sin(o)*r.driftMeters,c=r.restY+Math.sin(o*1.31)*r.driftMeters*.35,l=r.restZ+Math.cos(o*.83)*r.driftMeters,u=Cp(i,e)*ep;n[u]=s*a.yawCos-l*a.yawSin,n[u+1]=c,n[u+2]=s*a.yawSin+l*a.yawCos}}}function Tp(e,t,n,r,i){let a=e.lobes[t];if(!a){i.x=0,i.y=0,i.z=0;return}let o=a.spread/Math.sqrt(r),s=a.restX+Ep(n,fp)*o*e.radiusX,c=a.restY+Ep(n,pp)*o*e.radiusY,l=a.restZ+Ep(n,mp)*o*e.radiusZ;i.x=s*e.yawCos-l*e.yawSin,i.y=c,i.z=s*e.yawSin+l*e.yawCos}function Ep(e,t){let n=gf(e,t);return Math.max(-1.8,Math.min(gp,n))}function Dp(e,t,n,r,i,a){Np(e,n,r,i,jp);let o=Mp(jp);Pp(e,jp,t*(o<=1?X.swarmCorePull:Op(Math.sqrt(o))),a)}function Op(e){let t=X;if(e<=1)return t.swarmCorePull;let n=(e-1)/t.swarmRelaxRadii,r=t.swarmDriftPull+(t.swarmCorePull-t.swarmDriftPull)/(1+n),i=Math.max(0,e-t.swarmDissolveRadii);return(r+t.swarmRecapturePull*i*i)/e}function kp(e,t,n,r,i){Np(e,t,n,r,jp);let a=Mp(jp)/X.swarmLobeReachRadii**2;Pp(e,jp,X.swarmLobePull/(1+a),i)}function Ap(e,t){let{minimum:n,skewToHeld:r}=X.flyBinding;return n+(1-n)*Z(e,t)**r}var jp={x:0,y:0,z:0};function Mp(e){return e.x*e.x+e.y*e.y+e.z*e.z}function Np(e,t,n,r,i){i.x=(t*e.yawCos+r*e.yawSin)/e.radiusX,i.y=n/e.radiusY,i.z=(-t*e.yawSin+r*e.yawCos)/e.radiusZ}function Pp(e,t,n,r){let i=t.x*n/e.radiusX,a=t.y*n/e.radiusY,o=t.z*n/e.radiusZ;r.x-=i*e.yawCos-o*e.yawSin,r.y-=a,r.z-=i*e.yawSin+o*e.yawCos}var Fp=3,Ip=Math.PI*2,Lp=0,Rp=1,zp=3,Bp=4,Vp=5,Hp=6,Up=7,Wp=8,Gp=12,Kp=16,qp=.8,Jp=.9,Yp=1.25,Xp=.18,Zp=.35;function Qp(e){let{parameters:t}=e,{swarmCount:n,fliesPerSwarm:r}=t.swarms,i=n*r,a=new Float32Array(i*Fp),o=new Float32Array(i*Fp),s=new Float32Array(i*Fp),c=new Float32Array(i),l=new Float32Array(i),u=new Float32Array(i),d=new Int32Array(i),f=new Float32Array(i),p=_p(n),m=new Float32Array(xp(n)*Fp),h=qf(n),g=new Float32Array(n*Fp),_={x:e.initialPlayerX,z:e.initialPlayerZ},v=0,y=0;rm(e,p,{localPositions:a,velocities:o,phases:c,frequencies:l,strengths:u,lobeSlots:d,bindings:f}),Jf(h,e,v,_.x,_.z);let x=new B(s,Fp);x.setUsage(N);let S=new Float32Array(i).fill(1),C=new B(S,1);C.setUsage(N);let w=new Float32Array(i);for(let e=0;e<i;e+=1)w[e]=Z(e,Wp);let T=$p(n),E=new We;E.setAttribute(`position`,x),E.setAttribute(`flyArrival`,C),E.setAttribute(`flySenseArrival`,new B(w,1));let D=new b(E,Uf(t.appearance,e.senseFadeUniform));D.frustumCulled=!1;let O={localPositions:a,velocities:o,worldPositions:s,phases:c,frequencies:l,strengths:u,lobeSlots:d,bindings:f,lobeCentres:m,shapes:p,anchors:h};try{fm(e,O,x)}catch(e){throw E.dispose(),D.material.dispose(),e}return{points:D,getWorldPositions:()=>s,readSwarmCenters:()=>(h.forEach((e,t)=>{let n=t*Fp;g[n]=e.x,g[n+1]=e.y,g[n+2]=e.z}),g),update:(t,n,i)=>{let a=n-_.x,o=i-_.z,s=X.reanchorDistanceMeters;a*a+o*o>s**2&&(v+=1,_.x=n,_.z=i,em(T,v,n,i)),!(t<=0)&&(tm(T,e,h,t)&&nm(T,r,S,C),y+=t,am(e,O,t,y),fm(e,O,x))},dispose:()=>{E.dispose(),D.material.dispose()}}}function $p(e){return Array.from({length:e},()=>({arrival:1,target:1,holdSeconds:0,pendingEpoch:-1,pendingX:0,pendingZ:0}))}function em(e,t,n,r){e.forEach((e,i)=>{e.target=0,e.holdSeconds=i*X.swarmFadeStaggerSeconds,e.pendingEpoch=t,e.pendingX=n,e.pendingZ=r})}function tm(e,t,n,r){let i=r/X.swarmFadeSeconds,a=!1;return e.forEach((e,o)=>{if(e.holdSeconds>0){e.holdSeconds-=r;return}e.arrival!==e.target&&(e.arrival=Math.abs(e.target-e.arrival)<=i?e.target:e.arrival+Math.sign(e.target-e.arrival)*i,a=!0,!(e.pendingEpoch<0||e.arrival>0)&&(Yf(n,o,t,e.pendingEpoch,e.pendingX,e.pendingZ),e.pendingEpoch=-1,e.target=1))}),a}function nm(e,t,n,r){e.forEach((e,r)=>{let i=r*t;n.fill(e.arrival,i,i+t)}),r.needsUpdate=!0}function rm({parameters:e},t,n){let{swarmCount:r,fliesPerSwarm:i,flightSpeedMultiplier:a}=e.swarms,o=Math.max(0,a),s={x:0,y:0,z:0};for(let e=0;e<r*i;e+=1){let r=e*Fp,a=Math.floor(e/i),c=t[a],l=Sp(e,Lp),u=Ap(e,Rp);n.lobeSlots[e]=Cp(a,l),n.bindings[e]=u,s.x=0,s.y=0,s.z=0,c&&Tp(c,l,e,u,s),n.localPositions[r]=s.x,n.localPositions[r+1]=s.y,n.localPositions[r+2]=s.z;let d=Z(e,zp)*Ip,f=(X.minFlightSpeed+Z(e,Bp)*(X.maxFlightSpeed-X.minFlightSpeed))*o;n.velocities[r]=Math.cos(d)*f,n.velocities[r+1]=(Z(e,Bp)-.5)*f,n.velocities[r+2]=Math.sin(d)*f,n.phases[e]=Z(e,Vp)*Ip,n.frequencies[e]=Gp+Z(e,Hp)*Kp,n.strengths[e]=qp+Z(e,Up)*Jp}}var im={x:0,y:0,z:0};function am({parameters:e},t,n,r){let i=X,a=Math.max(0,e.swarms.flightSpeedMultiplier),o={fliesPerSwarm:e.swarms.fliesPerSwarm,speedScale:a,stepSeconds:Math.min(n,i.maxBoidStepSeconds),minSpeed:i.minFlightSpeed*a,maxSpeed:i.maxFlightSpeed*a,minLocalY:-i.groundClearanceMeters+Xp,elapsedSeconds:r};wp(t.shapes,r,t.lobeCentres);for(let e=0;e<t.anchors.length;e+=1){let n=t.shapes[e],r=t.anchors[e];if(!n||!r)continue;let i=e*o.fliesPerSwarm;for(let e=0;e<o.fliesPerSwarm;e+=1)om(t,o,n,r,i,e)}}function om(e,t,n,r,i,a){let o=i+a,s=o*Fp,c=e.localPositions[s]??0,l=e.localPositions[s+1]??0,u=e.localPositions[s+2]??0;sm(e,t,o),cm(e,t,i,a,c,l,u),lm(e,n,o,c,l,u),Dp(n,e.bindings[o]??1,c,l,u,im),um(),dm(e,t,r,s,c,l,u)}function sm(e,t,n){let r=t.elapsedSeconds*(e.frequencies[n]??18)*t.speedScale+(e.phases[n]??0),i=Math.floor(r*Yp),a=e.strengths[n]??1;im.x=_f(n,0,i)*4.5*a,im.y=_f(n,1,i)*3.2*a,im.z=_f(n,2,i)*4.5*a}function cm(e,t,n,r,i,a,o){let s=Math.min(X.neighbourSamples,t.fliesPerSwarm-1);for(let c=0;c<s;c+=1){let s=(n+(r+1+c*31)%t.fliesPerSwarm)*Fp,l=e.localPositions[s]??0,u=e.localPositions[s+1]??0,d=e.localPositions[s+2]??0,f=i-l,p=a-u,m=o-d,h=f*f+p*p+m*m;if(h<.025&&h>1e-6){let e=.025/h;im.x+=f*e,im.y+=p*e,im.z+=m*e}h<.8&&(im.x+=(l-i)*.025,im.y+=(u-a)*.018,im.z+=(d-o)*.025)}}function lm(e,t,n,r,i,a){let o=(e.lobeSlots[n]??0)*Fp;kp(t,r-(e.lobeCentres[o]??0),i-(e.lobeCentres[o+1]??0),a-(e.lobeCentres[o+2]??0),im)}function um(){let e=im.x*im.x+im.y*im.y+im.z*im.z;if(e<=X.maxForce**2)return;let t=X.maxForce/Math.sqrt(e);im.x*=t,im.y*=t,im.z*=t}function dm(e,t,n,r,i,a,o){let s=(e.velocities[r]??0)+im.x*t.stepSeconds,c=(e.velocities[r+1]??0)+im.y*t.stepSeconds,l=(e.velocities[r+2]??0)+im.z*t.stepSeconds,u=Math.sqrt(s*s+c*c+l*l),d=Math.min(t.maxSpeed,Math.max(t.minSpeed,u));if(u>1e-4){let e=d/u;s*=e,c*=e,l*=e}let f=i+s*t.stepSeconds,p=o+l*t.stepSeconds,m=t.minLocalY+n.groundSlopeX*f+n.groundSlopeZ*p,h=a+c*t.stepSeconds,g=Math.max(m,h);h<m&&(c=Math.abs(c)*Zp),e.velocities[r]=s,e.velocities[r+1]=c,e.velocities[r+2]=l,e.localPositions[r]=f,e.localPositions[r+1]=g,e.localPositions[r+2]=p}function fm(e,t,n){let{fliesPerSwarm:r}=e.parameters.swarms;for(let n=0;n<t.anchors.length;n+=1){let i=t.anchors[n];if(!i)continue;Xf(i,e.groundYAt);let a=n*r;for(let e=0;e<r;e+=1){let n=(a+e)*Fp;t.worldPositions[n]=i.x+(t.localPositions[n]??0),t.worldPositions[n+1]=i.y+(t.localPositions[n+1]??0),t.worldPositions[n+2]=i.z+(t.localPositions[n+2]??0)}}n.addUpdateRange(0,t.worldPositions.length),n.needsUpdate=!0}var pm=`/*
 * Purpose: Shape and fade Motion Trail point primitives in the fragment stage.
 * Context: Trails read as soft ink specks that dissolve while drifting outward.
 * Responsibility: Discard fragments outside the circle and fade alpha with particle age.
 * Boundary: Age math, spawn intensity, colors, and material lifecycle stay elsewhere.
 */

varying float motionTrailFade;

const float MOTION_ALPHA_EASE = 0.6;

void discardOutsideMotionTrailCircle() {
  vec2 centerOffset = gl_PointCoord - vec2(0.5);
  if (dot(centerOffset, centerOffset) > 0.25) discard;
}

float getMotionTrailAlpha() {
  return pow(motionTrailFade, MOTION_ALPHA_EASE);
}
`,mm=`/*
 * Purpose: Age, fade, and expand Motion Trail particles in the vertex stage.
 * Context: The CPU prints one ring slot per frame; everything older animates GPU-only.
 * Responsibility: Derive age from the frame uniform, drift points outward, and collapse dead ones.
 * Boundary: Ring bookkeeping, spawn intensity, thinning, and colors stay in TypeScript.
 */

uniform float motionFrame;
uniform float motionIntensity;
uniform float motionSenseFade;
uniform float motionLifetimeFrames;
uniform float motionExpansionMeters;
uniform float motionFadePower;
attribute vec3 motionExpansionDirection;
attribute float motionSpawnIntensity;
attribute float motionSpawnFrame;
varying float motionTrailFade;

const float MOTION_EXPANSION_EASE = 1.25;
const float MOTION_MINIMUM_VISIBLE_FADE = 0.005;
const float MOTION_MINIMUM_SIZE_SCALE = 0.3;

vec3 expandMotionTrailParticle(vec3 printedPosition) {
  float age = clamp(
    (motionFrame - motionSpawnFrame) / max(motionLifetimeFrames - 1.0, 1.0),
    0.0,
    1.0
  );

  // Thinned particles carry zero spawn intensity and never rasterize.
  motionTrailFade = pow(1.0 - age, motionFadePower)
    * motionSpawnIntensity * motionIntensity * motionSenseFade;

  return printedPosition
    + motionExpansionDirection * pow(age, MOTION_EXPANSION_EASE) * motionExpansionMeters;
}

vec4 getMotionTrailClipPosition(vec4 visibleClipPosition) {
  if (motionTrailFade > MOTION_MINIMUM_VISIBLE_FADE) return visibleClipPosition;

  // Fully faded points stay in the fixed ring buffer but are moved beyond
  // clip space so an expired slot rasterizes nothing.
  return vec4(2.0, 2.0, 2.0, 1.0);
}

float getMotionTrailSizeScale() {
  return MOTION_MINIMUM_SIZE_SCALE
    + (1.0 - MOTION_MINIMUM_SIZE_SCALE) * motionTrailFade;
}
`,hm=`#include <common>`,gm=`#include <begin_vertex>`,_m=`#include <project_vertex>`,vm=`#include <logdepthbuf_vertex>`,ym=`#include <clipping_planes_fragment>`,bm=`motion-trail-material-v1`;function xm({appearance:e,trail:t,intensity:n,senseFadeUniform:r}){let i={value:0},a={value:n},o={value:t.lifetimeFrames},s={value:t.expansionDistanceMeters},c={value:t.fadePower},l=new O({color:e.trailColor,size:e.trailSizeMeters,sizeAttenuation:!0,transparent:!0,depthWrite:!1,opacity:e.trailOpacity});return l.onBeforeCompile=e=>{e.uniforms.motionFrame=i,e.uniforms.motionIntensity=a,e.uniforms.motionSenseFade=r??{value:1},e.uniforms.motionLifetimeFrames=o,e.uniforms.motionExpansionMeters=s,e.uniforms.motionFadePower=c,e.vertexShader=Sm(e.vertexShader),e.fragmentShader=Cm(e.fragmentShader)},l.customProgramCacheKey=()=>bm,{pointsMaterial:l,setFrame:e=>{i.value=e}}}function Sm(e){return e.replace(hm,`${hm}\n${mm}`).replace(gm,`${gm}\ntransformed = expandMotionTrailParticle(transformed);`).replace(_m,`${_m}\ngl_Position = getMotionTrailClipPosition(gl_Position);`).replace(vm,`gl_PointSize *= getMotionTrailSizeScale();\n${vm}`)}function Cm(e){return e.replace(hm,`${hm}\n${pm}`).replace(ym,`${ym}\ndiscardOutsideMotionTrailCircle();\ndiffuseColor.a *= getMotionTrailAlpha();`)}var wm=3;function Tm({pointCount:e,trail:t,appearance:n,intensity:r,senseFadeUniform:i}){let a=e*t.lifetimeFrames,o=new Float32Array(a*wm),s=new Float32Array(a*wm),c=new Float32Array(a),l=new Float32Array(a),u=km(o,wm),d=km(s,wm),f=km(c,1),p=km(l,1),m=new We;m.setAttribute(`position`,u),m.setAttribute(`motionExpansionDirection`,d),m.setAttribute(`motionSpawnIntensity`,f),m.setAttribute(`motionSpawnFrame`,p);let h=xm({appearance:n,trail:t,intensity:r,senseFadeUniform:i}),g=new b(m,h.pointsMaterial);g.frustumCulled=!1;let _=0,v=new Float32Array(e*wm),y=!1;return{points:g,spawnFromWorldPoints:n=>{let r=_%t.lifetimeFrames*e;Em({worldPositions:n,pointCount:e,trail:t,slotStart:r,frame:_,previousPositions:v,previousReady:y,printedPositions:o,expansionDirections:s,spawnIntensities:c,spawnFrames:l}),y=!0,Am(u,r,e),Am(d,r,e),Am(f,r,e),Am(p,r,e),h.setFrame(_),_+=1},forgetHistory:()=>{y=!1},dispose:()=>{m.dispose(),h.pointsMaterial.dispose()}}}function Em(e){let[t,n,r]=jm(e.worldPositions,e.pointCount);for(let i=0;i<e.pointCount;i+=1)Dm(e,i,t,n,r)}function Dm(e,t,n,r,i){let{trail:a,slotStart:o,frame:s}=e,c=t*wm,l=(o+t)*wm,u=e.worldPositions[c]??0,d=e.worldPositions[c+1]??0,f=e.worldPositions[c+2]??0,p=Om(e,c,u,d,f);e.printedPositions[l]=u,e.printedPositions[l+1]=d,e.printedPositions[l+2]=f,Mm(e.expansionDirections,l,u-n,d-r,f-i),e.spawnIntensities[o+t]=Nm(t,a.density)?Pm(p*a.motionGain):0,e.spawnFrames[o+t]=s}function Om(e,t,n,r,i){let a=e.previousReady?Math.hypot(n-(e.previousPositions[t]??0),r-(e.previousPositions[t+1]??0),i-(e.previousPositions[t+2]??0)):0;return e.previousPositions[t]=n,e.previousPositions[t+1]=r,e.previousPositions[t+2]=i,a}function km(e,t){let n=new B(e,t);return n.setUsage(N),n}function Am(e,t,n){e.addUpdateRange(t*e.itemSize,n*e.itemSize),e.needsUpdate=!0}function jm(e,t){if(t===0)return[0,0,0];let n=0,r=0,i=0;for(let a=0;a<t;a+=1){let t=a*wm;n+=e[t]??0,r+=e[t+1]??0,i+=e[t+2]??0}return[n/t,r/t,i/t]}function Mm(e,t,n,r,i){let a=Math.hypot(n,r,i);if(a<1e-6){e[t]=0,e[t+1]=1,e[t+2]=0;return}e[t]=n/a,e[t+1]=r/a,e[t+2]=i/a}function Nm(e,t){if(t>=1)return!0;let n=Math.imul(e,2654435761)|0;return n=Math.imul(n^n>>>13,1274126177),(n>>>16&65535)/65536<t}function Pm(e){return Math.min(1,Math.max(X.trailIntensityFloor,e))}var Fm=new Float32Array;function Im(e){if(!Cu(e.parameters.intensity))throw RangeError(`Motion intensity must be between zero and one`);let t={value:1},n={currentResources:void 0,isActive:!1,hasBodyPresence:!0};return{module:{load:()=>Rm(n,e,t),activate:()=>Bm(n,!0),update:t=>zm(n,e,t),deactivate:()=>Bm(n,!1),unload:()=>Hm(n,e.scene)},setIntensity:e=>{t.value=e},readActorCenters:e=>Lm(n,e),setBodyPresence:e=>{n.hasBodyPresence=e>0,Vm(n)}}}function Lm(e,t){let n=e.currentResources;return n?t===`flies`?n.flySwarms.readSwarmCenters():n.birdFlocks?.getFlockCenters()??Fm:Fm}function Rm(e,t,n){let{viewpoint:r,scene:i,parameters:a}=t,o=a.birds?Af({birds:a.birds,groundYAt:t.groundYAt,initialPlayerX:r.worldPosition.x,initialPlayerZ:r.worldPosition.z}):void 0,s=Qp({parameters:a,groundYAt:t.groundYAt,zoneAt:t.zoneAt,initialPlayerX:r.worldPosition.x,initialPlayerZ:r.worldPosition.z,senseFadeUniform:n}),c=[],l={flySwarms:s,birdFlocks:o,birdBodies:void 0,printers:c};e.currentResources=l,c.push({source:s,trail:Tm({pointCount:a.swarms.swarmCount*a.swarms.fliesPerSwarm,trail:a.trail,appearance:a.appearance,intensity:a.intensity,senseFadeUniform:n})}),o&&a.birds&&c.push({source:o,trail:Tm({pointCount:kf(a.birds),trail:{...a.trail,lifetimeFrames:a.birds.trailLifetimeFrames},appearance:a.birds.appearance,intensity:a.intensity,senseFadeUniform:n})}),o&&a.birds?.body&&t.birdBody&&(l.birdBodies=uf({scene:i,asset:t.birdBody.asset,appearance:a.birds.body,birdCount:Of(a.birds),effects:t.birdBody.effects})),s.points.visible=!1,i.add(s.points);for(let e of c)e.trail.points.visible=!1,i.add(e.trail.points)}function zm(e,{viewpoint:t},n){let r=e.currentResources;if(r){r.flySwarms.update(n,t.worldPosition.x,t.worldPosition.z),r.birdFlocks?.update(n,t.worldPosition.x,t.worldPosition.z),r.birdFlocks&&r.birdBodies&&r.birdBodies.update(r.birdFlocks.getBodyStream());for(let e of r.printers)e.trail.spawnFromWorldPoints(e.source.getWorldPositions())}}function Bm(e,t){let n=e.currentResources;if(n){n.flySwarms.points.visible=t;for(let e of n.printers)e.trail.points.visible=t;e.isActive=t,Vm(e)}}function Vm(e){e.currentResources?.birdBodies?.setVisible(e.isActive&&e.hasBodyPresence)}function Hm(e,t){let n=e.currentResources;if(n){e.currentResources=void 0,n.birdBodies?.dispose(),t.remove(n.flySwarms.points),n.flySwarms.dispose();for(let e of n.printers)t.remove(e.trail.points),e.trail.dispose()}}var Um=3,Wm=Math.PI*2,Gm=new U,Km=12,qm=13,Jm=14,Ym=15,Xm=16,Zm=17,Qm=14,$m=14,eh=.06,th=.06;function nh(e){let t={trail:void 0,worldPositions:new Float32Array(e.pointCount*Um),crossing:!1};return{load:()=>rh(t,e),activate:()=>oh(t,!0),update:()=>ih(t,e),deactivate:()=>oh(t,!1),unload:()=>sh(t,e.scene)}}function rh(e,t){let{parameters:n}=t,r=Tm({pointCount:t.pointCount,trail:n.trail,appearance:n.appearance,intensity:n.intensity});r.points.visible=!1,t.scene.add(r.points),e.trail=r}function ih(e,t){let n=e.trail;if(!n)return;let r=Gm,i=t.readCrossing(r);i===void 0?e.crossing=!1:(e.crossing||=(n.forgetHistory(),!0),ah(e.worldPositions,t,r,i)),n.spawnFromWorldPoints(e.worldPositions)}function ah(e,t,n,r){for(let i=0;i<t.pointCount;i+=1){let a=Z(i,Km)*Wm,o=Math.sqrt(Z(i,qm))*t.cloudRadiusMeters,s=(Z(i,Jm)*2-1)*t.cloudHeightMeters,c=Qm+Z(i,Ym)*$m,l=Z(i,Xm)*Wm,u=eh+Z(i,Zm)*th,d=r*c+l,f=i*Um;e[f]=n.x+Math.cos(a)*o+Math.sin(d)*u,e[f+1]=n.y+s+Math.sin(d*1.47+l)*u*.7,e[f+2]=n.z+Math.sin(a)*o+Math.cos(d*1.83)*u}}function oh(e,t){e.trail&&(e.trail.points.visible=t)}function sh(e,t){let n=e.trail;n&&(e.trail=void 0,t.remove(n.points),n.dispose())}var ch=[],lh=class{chunkSize;radius;slotCount;chunksPerSide;assignedChunks;centerChunkX;centerChunkZ;constructor({level:e,radius:t}){this.chunkSize=uh(e),this.radius=t,this.chunksPerSide=t*2+1,this.slotCount=this.chunksPerSide**2,this.assignedChunks=dh(this.slotCount)}update(e,t){let n=Math.floor(e/this.chunkSize),r=Math.floor(t/this.chunkSize);return this.centerChunkX===n&&this.centerChunkZ===r?ch:(this.centerChunkX=n,this.centerChunkZ=r,this.assignWindowChunks(n,r))}slotIndexFor(e,t){return fh(e,t,this.chunksPerSide)}isCurrent(e){let t=this.assignedChunks[e.slotIndex];return t?.revision===e.revision&&t.chunkX===e.chunkX&&t.chunkZ===e.chunkZ}assignWindowChunks(e,t){let n=[];for(let r=0;r<this.slotCount;r+=1){let{chunkX:i,chunkZ:a}=this.getChunkCoordinate(r,e,t),o=this.assignChunkIfChanged(i,a);o&&n.push(o)}return n}getChunkCoordinate(e,t,n){let r=e%this.chunksPerSide,i=Math.floor(e/this.chunksPerSide);return{chunkX:t+r-this.radius,chunkZ:n+i-this.radius}}assignChunkIfChanged(e,t){let n=fh(e,t,this.chunksPerSide),r=this.assignedChunks[n];if(r&&(r.chunkX!==e||r.chunkZ!==t))return r.revision+=1,r.chunkX=e,r.chunkZ=t,{slotIndex:n,revision:r.revision,chunkX:e,chunkZ:t,originX:e*this.chunkSize,originZ:t*this.chunkSize}}};function uh(e){return 16*2**e}function dh(e){return Array.from({length:e},()=>({revision:0,chunkX:void 0,chunkZ:void 0}))}function fh(e,t,n){let r=ph(e,n);return ph(t,n)*n+r}function ph(e,t){return(e%t+t)%t}var mh=1,hh=class{options;readTime;jobs=[];constructor(e,t=()=>performance.now()){this.options=e,this.readTime=t}get size(){return this.jobs.length}enqueue(e){this.removeObsoleteJobs();let t=this.jobs.findIndex(({key:t})=>t===e.key);return t>=0?(this.jobs[t]=e,!0):this.jobs.length>=this.options.capacity?!1:(this.jobs.push(e),!0)}update(){if(this.removeObsoleteJobs(),this.jobs.length===0)return;let e=this.readTime()+this.options.budgetMilliseconds,t=this.jobs.length,n=gh(this.jobs);for(let r=0;r<t;r+=1){if(this.readTime()>=e)return;let t=this.jobs.shift();if(t?.isCurrent()){if(_h(t)!==n){this.jobs.push(t);continue}!t.runStep()&&t.isCurrent()&&this.jobs.push(t)}}}removeObsoleteJobs(){for(let e=this.jobs.length-1;e>=0;--e)this.jobs[e]?.isCurrent()||this.jobs.splice(e,1)}};function gh(e){return Math.min(...e.map(_h))}function _h(e){return e.priority??mh}var Q={chunkLevel:0,buildChunkRadius:2,gatherChunkRadius:3,neighborsPerNode:2,soilNodesPerSquareMeter:.5,nodeSlotCapacity:192,edgeSlotCapacity:384,surfaceRootDepthMeters:.02,soilMinimumDepthMeters:.35,soilDepthSpanMeters:3.5,soilDepthBias:1.8,webFadeBandMeters:12,edgeBaseWidthMeters:.26,edgeWeightWidthSpanMeters:.18,filamentWidthFraction:.18,edgeSegments:8,wobbleAmplitudeMeters:.5,pulseLengthFraction:.25,knotSpacingMeters:2.5,nodeBaseSizeMeters:.22,nodePixelScale:300,webRenderOrder:-1,soilBareOpacity:.5,soilCoveredOpacity:.9,growthNearDistanceMeters:6,growthFarFraction:.3,animationLoopSeconds:60,edgeFadeSeconds:.6},vh=`/*
 * Purpose: Draw several fine meandering filaments and knots inside one cord envelope.
 * Context: One real edge reads as a strand bundle with intermediate junctions,
 * so the web looks far denser than its actual node and edge counts.
 * Responsibility: Place the filaments, knots, and pulses; blend them over the carried world.
 * Boundary: Envelope placement, wobble, and collapse stay in the vertex shader.
 */

uniform float connectionsIntensity;
uniform float connectionsTime;
uniform float connectionsWebRadius;
uniform float connectionsWebFadeBand;
uniform float connectionsPulseSpeed;
uniform float connectionsPulseLength;
uniform float connectionsFilamentWidth;
uniform float connectionsKnotSpacing;
uniform vec3 connectionsDepthColor;
uniform vec3 connectionsPulseColor;

varying float connectionsEdgeT;
varying float connectionsEdgeSide;
varying float connectionsEdgeLength;
varying float connectionsEdgePhase;
varying float connectionsEdgeWeight;
varying float connectionsEdgeViewDistance;
varying float connectionsEdgeGrowth;
varying vec3 connectionsEdgeColor;

const float TAU = 6.28318530718;
const int FILAMENTS_PER_CORD = 3;

void main() {
  float webMask = 1.0 -
    smoothstep(
      connectionsWebRadius - connectionsWebFadeBand,
      connectionsWebRadius,
      connectionsEdgeViewDistance
    );
  if (webMask <= 0.0) discard;

  // Each filament meanders across the envelope at its own spatial frequency
  // and converges onto the centerline at both anchors, so the bundle splits
  // mid-cord and rejoins at its nodes. When a strand falls below pixel
  // resolution it dims by its coverage ratio instead of widening, so far
  // and grazing cords dissolve rather than fattening.
  float pinch = sin(3.14159265 * connectionsEdgeT);
  float resolvedHalfWidth =
    max(connectionsFilamentWidth, fwidth(connectionsEdgeSide) * 0.75);
  float coverage = connectionsFilamentWidth / resolvedHalfWidth;
  // Every present cord carries its full bundle: proximity decides how many
  // cords are out, not how detailed each one is, so a cord that is there is
  // there at full strength.
  float strand = 0.0;
  for (int filament = 0; filament < FILAMENTS_PER_CORD; filament += 1) {
    float offset = float(filament);
    float center = 0.75 * pinch *
      sin(TAU * (
        connectionsEdgeT * (connectionsEdgeLength / (1.5 + offset)) +
        connectionsEdgePhase +
        offset * 0.31
      ));
    float distanceToFilament = abs(connectionsEdgeSide - center);
    strand = max(
      strand,
      1.0 - smoothstep(
        resolvedHalfWidth * 0.5,
        resolvedHalfWidth,
        distanceToFilament
      )
    );
  }
  strand *= coverage;
  float alpha = strand * webMask * connectionsEdgeGrowth * connectionsIntensity;
  if (alpha <= 0.02) discard;

  // Cords sag toward the deep underground tone at their midpoint. Against the
  // carried world's pale haze this is what makes a strand legible at all, so
  // it dips harder than the sparse web's tint did.
  float depthDip = 4.0 * connectionsEdgeT * (1.0 - connectionsEdgeT);
  vec3 cord = mix(connectionsEdgeColor, connectionsDepthColor, depthDip * 0.55);

  float travel = fract(
    connectionsEdgeT -
      connectionsTime * connectionsPulseSpeed / connectionsEdgeLength +
      connectionsEdgePhase
  );
  float pulse = 1.0 - smoothstep(0.0, connectionsPulseLength, travel);

  // Hallucinated in-between junctions: periodic bright knots along the cord
  // stand in for nodes that do not exist in the topology.
  float knotCount = max(1.0, floor(connectionsEdgeLength / connectionsKnotSpacing));
  float knot = pinch *
    pow(
      max(0.0, sin(TAU * (connectionsEdgeT * knotCount + connectionsEdgePhase))),
      24.0
    );

  vec3 lit = mix(
    cord,
    connectionsPulseColor,
    max(pulse * (0.5 + 0.5 * connectionsEdgeWeight), knot * 0.6)
  );

  gl_FragColor = vec4(lit, alpha);
}
`,yh=`/*
 * Purpose: Expand one instanced cord into a wobbling camera-facing ribbon envelope.
 * Context: The web renders every edge of the Connections topology in one draw call.
 * Responsibility: Bend the segmented centerline, collapse cords beyond the reveal, pass varyings.
 * Boundary: The fine filaments, knots, pulses, and the reveal mask stay in the fragment shader.
 *
 * The subdivided base strip encodes position.x as the along-cord progress and
 * position.y as the ribbon side. The ribbon is a widened invisible envelope;
 * the fragment shader draws the visible filaments inside it. Degenerate
 * instances (start equals end) collapse.
 */

attribute vec3 edgeStart;
attribute vec3 edgeEnd;
attribute vec3 edgeColor;
attribute float edgeWeight;
attribute float edgePhase;
attribute float edgeUpload;

uniform float connectionsWebRadius;
uniform float connectionsEdgeBaseWidth;
uniform float connectionsEdgeWidthSpan;
uniform float connectionsWobbleAmplitude;
uniform float connectionsGrowthNearDistance;
uniform float connectionsGrowthFarFraction;
uniform float connectionsClock;
uniform float connectionsEdgeFade;

varying float connectionsEdgeT;
varying float connectionsEdgeSide;
varying float connectionsEdgeLength;
varying float connectionsEdgePhase;
varying float connectionsEdgeWeight;
varying float connectionsEdgeViewDistance;
varying float connectionsEdgeGrowth;
varying vec3 connectionsEdgeColor;

const float TAU = 6.28318530718;

/** Density band a cord fades in across, so approaching grows rather than pops. */
const float APPEAR_BAND = 0.18;

void main() {
  float progress = position.x;
  vec3 along = mix(edgeStart, edgeEnd, progress);
  vec3 cordDelta = edgeEnd - edgeStart;
  float cordLength = length(cordDelta);
  vec3 cordDirection = cordLength > 0.0001
    ? cordDelta / cordLength
    : vec3(0.0, 1.0, 0.0);
  vec3 viewDirection = normalize(cameraPosition - along);
  vec3 ribbonSide = normalize(cross(viewDirection, cordDirection));
  float viewDistance = distance(cameraPosition, along);

  // Two deterministic sine octaves bend the centerline; the sine envelope
  // pins both ends to their anchors so cords still meet their nodes exactly.
  float endPin = sin(3.14159265 * progress);
  float wobble = endPin *
    min(cordLength * 0.08, connectionsWobbleAmplitude) *
    (0.6 * sin(TAU * (progress * 1.7 + edgePhase)) +
      0.4 * sin(TAU * (progress * 3.9 + edgePhase * 2.63)));

  // Proximity growth, the grass field's density rejection read backwards: the
  // topology is seeded once at full density, and what changes as the visitor
  // closes in is how large a share of it is present. Every cord carries a
  // stable threshold and comes out once the local density reaches it, so the
  // mat genuinely thickens with more roots rather than with fatter ones.
  float density = mix(
    connectionsGrowthFarFraction,
    1.0,
    1.0 - smoothstep(connectionsGrowthNearDistance, connectionsWebRadius, viewDistance)
  );
  // Decorrelated from the phase driving the wobble, so a cord's appearance and
  // its meander are not visibly the same draw.
  float appearance = fract(edgePhase * 13.71 + 0.37);
  float growth = smoothstep(appearance - APPEAR_BAND, appearance, density);

  // Ground entering the window grows in rather than appearing. Resident chunks
  // are never rewritten, so nothing already on screen ever runs this ramp.
  float sinceUpload = max(0.0, connectionsClock - edgeUpload);
  growth *= smoothstep(0.0, connectionsEdgeFade, sinceUpload);

  // Collapse the ribbon beyond the web radius, for cords the density has not
  // reached yet, and for degenerate pool rows, so everything unseen costs no
  // fragments.
  float alive = step(0.0001, cordLength) *
    (1.0 - step(connectionsWebRadius, viewDistance)) *
    step(0.0001, growth);
  float halfWidth = alive *
    (connectionsEdgeBaseWidth + edgeWeight * connectionsEdgeWidthSpan) * 0.5;

  connectionsEdgeT = progress;
  connectionsEdgeSide = position.y;
  connectionsEdgeLength = max(cordLength, 0.0001);
  connectionsEdgePhase = edgePhase;
  connectionsEdgeWeight = edgeWeight;
  connectionsEdgeViewDistance = viewDistance;
  connectionsEdgeGrowth = growth;
  connectionsEdgeColor = edgeColor;

  vec3 worldPosition = along +
    ribbonSide * (position.y * halfWidth + wobble * alive);
  gl_Position = projectionMatrix * viewMatrix * vec4(worldPosition, 1.0);
}
`,bh=`/*
 * Purpose: Paint one node glow as a small bright core inside a soft halo.
 * Context: Hubs must read as points of origin, never as flat plates.
 * Responsibility: Shape the falloff and blend the glow over the carried world.
 * Boundary: Point placement, size cap, and the radius mask stay in the vertex shader.
 */

uniform float connectionsIntensity;

varying float connectionsNodeMask;
varying float connectionsNodeWeight;
varying vec3 connectionsNodeColor;

void main() {
  if (connectionsNodeMask <= 0.0) discard;
  vec2 fromCenter = gl_PointCoord - vec2(0.5);
  float radial = length(fromCenter) * 2.0;

  float core = 1.0 - smoothstep(0.0, 0.4, radial);
  float halo = (1.0 - smoothstep(0.15, 1.0, radial)) * 0.35;
  float glow = (core + halo) * (0.6 + 0.4 * connectionsNodeWeight);
  float alpha = min(glow, 1.0) * connectionsNodeMask * connectionsIntensity;
  if (alpha <= 0.04) discard;

  gl_FragColor = vec4(connectionsNodeColor * (0.7 + 0.9 * core), alpha);
}
`,xh=`/*
 * Purpose: Size one web node glow by its class weight and the web radius mask.
 * Context: Node glows mark the deterministic source anchors of the web.
 * Responsibility: Attenuate point size with distance and collapse masked nodes.
 * Boundary: The circular glow falloff stays in the fragment shader.
 */

attribute vec3 nodeColor;
attribute float nodeWeight;

uniform float connectionsWebRadius;
uniform float connectionsWebFadeBand;
uniform float connectionsNodeBaseSize;
uniform float connectionsNodePixelScale;
uniform float connectionsGrowthNearDistance;
uniform float connectionsGrowthFarFraction;

varying float connectionsNodeMask;
varying float connectionsNodeWeight;
varying vec3 connectionsNodeColor;

const float MAX_NODE_PIXELS = 42.0;

/** Density band a node fades in across, matching the cords it anchors. */
const float APPEAR_BAND = 0.18;

/** Stable 0..1 draw for one node, so the same node always appears at the same reach. */
float nodeAppearance(vec3 worldPosition) {
  return fract(
    sin(dot(floor(worldPosition * 4.0), vec3(12.9898, 78.233, 37.719))) *
      43758.5453
  );
}

void main() {
  vec4 viewPosition = viewMatrix * vec4(position, 1.0);
  float viewDistance = length(viewPosition.xyz);
  // Rows no chunk has filled carry a negative weight and collapse here, which
  // is how a fixed pool cut into per-chunk ranges stays cheap while partly
  // empty.
  connectionsNodeMask = step(0.0, nodeWeight);
  connectionsNodeMask *= 1.0 -
    smoothstep(
      connectionsWebRadius - connectionsWebFadeBand,
      connectionsWebRadius,
      viewDistance
    );
  connectionsNodeWeight = nodeWeight;
  connectionsNodeColor = nodeColor;

  // Nodes appear with the cords they anchor: the same proximity density, the
  // same stable per-element threshold, so approaching thickens one mat rather
  // than growing a web through a fixed field of dots.
  float density = mix(
    connectionsGrowthFarFraction,
    1.0,
    1.0 - smoothstep(connectionsGrowthNearDistance, connectionsWebRadius, viewDistance)
  );
  float growth = smoothstep(
    nodeAppearance(position) - APPEAR_BAND,
    nodeAppearance(position),
    density
  );
  connectionsNodeMask *= growth;

  // The pixel cap keeps close fly-bys from inflating a glow into a plate.
  float sizeMeters = connectionsNodeBaseSize * (0.5 + nodeWeight);
  gl_PointSize = min(
    connectionsNodeMask * sizeMeters * connectionsNodePixelScale /
      max(viewDistance, 0.0001),
    MAX_NODE_PIXELS
  );
  gl_Position = projectionMatrix * viewPosition;
}
`,Sh=3,Ch=4294967296,wh=-1;function Th(e,t){let{nodeSlotCapacity:n,edgeSlotCapacity:r}=Q,i=t.gatherSlotCount*n,a=t.buildSlotCount*r,o=new x,{positions:s,indices:c}=Ah(Q.edgeSegments);o.setAttribute(`position`,new B(s,Sh)),o.setIndex(c);let l=Nh(a,3),u=Nh(a,3),d=Nh(a,3),f=Nh(a,1),p=Nh(a,1),m=Nh(a,1);o.setAttribute(`edgeStart`,l),o.setAttribute(`edgeEnd`,u),o.setAttribute(`edgeColor`,d),o.setAttribute(`edgeWeight`,f),o.setAttribute(`edgePhase`,p),o.setAttribute(`edgeUpload`,m),o.instanceCount=a;let h=new Ye(o,jh(yh,vh,e)),g=new We,_=Ph(i,3),v=Ph(i,3),y=Ph(i,1);return y.array.fill(wh),g.setAttribute(`position`,_),g.setAttribute(`nodeColor`,v),g.setAttribute(`nodeWeight`,y),g.setDrawRange(0,i),{edges:h,nodes:new b(g,jh(xh,bh,e)),edgeStartAttribute:l,edgeEndAttribute:u,edgeColorAttribute:d,edgeWeightAttribute:f,edgePhaseAttribute:p,edgeUploadAttribute:m,nodePositionAttribute:_,nodeColorAttribute:v,nodeWeightAttribute:y}}function Eh(e){return e*Q.nodeSlotCapacity}function Dh(e,t,n,r,i,a){let{nodeSlotCapacity:o}=Q,s=Eh(t),c=e.nodePositionAttribute.array,l=e.nodeColorAttribute.array,u=e.nodeWeightAttribute.array;for(let e=0;e<o;e+=1){let t=(s+e)*Sh;if(e>=i){u[s+e]=wh;continue}let o=e*Sh,d=a[r[e]??0];c[t]=n[o]??0,c[t+1]=n[o+1]??0,c[t+2]=n[o+2]??0,Mh(l,t,d),u[s+e]=d?.weight??0}Ih(e,s,o)}function Oh(e,t,n,r){let{edgeSlotCapacity:i}=Q,a=t.buildSlotIndex*i,o=e.edgeStartAttribute.array,s=e.edgeEndAttribute.array,c=e.edgeColorAttribute.array,l=e.edgeWeightAttribute.array,u=e.edgePhaseAttribute.array,d=e.edgeUploadAttribute.array,f=Math.min(t.edgeCount,i);for(let e=0;e<i;e+=1){let i=(a+e)*Sh;if(e>=f){for(let e=0;e<Sh;e+=1)o[i+e]=0,s[i+e]=0;continue}let p=e*Sh;for(let e=0;e<Sh;e+=1)o[i+e]=t.edgeStarts[p+e]??0,s[i+e]=t.edgeEnds[p+e]??0;Mh(c,i,n[t.edgeHubClasses[e]??0]),l[a+e]=t.edgeWeights[e]??0,u[a+e]=Fh(t.edgeStarts,t.edgeEnds,e),d[a+e]=r}Lh(e,a,i)}function kh(e){e.edges.geometry.dispose(),e.edges.material.dispose(),e.nodes.geometry.dispose(),e.nodes.material.dispose()}function Ah(e){let t=new Float32Array((e+1)*2*3),n=[];for(let r=0;r<=e;r+=1){let i=r/e,a=r*2*3;if(t[a]=i,t[a+1]=-1,t[a+3]=i,t[a+4]=1,r===0)continue;let o=r*2,s=o-2;n.push(s,o,s+1,o,o+1,s+1)}return{positions:t,indices:n}}function jh(e,t,n){return new j({vertexShader:e,fragmentShader:t,uniforms:n,transparent:!0,depthTest:!0,depthWrite:!1})}function Mh(e,t,n){e[t]=n?.color.r??0,e[t+1]=n?.color.g??0,e[t+2]=n?.color.b??0}function Nh(e,t){let n=new Ee(new Float32Array(e*t),t);return n.setUsage(N),n}function Ph(e,t){let n=new B(new Float32Array(e*t),t);return n.setUsage(N),n}function Fh(e,t,n){let r=n*Sh,i=Math.imul(Math.round(e[r]??0),73856093);return i^=Math.imul(Math.round(e[r+2]??0),19349663),i^=Math.imul(Math.round(t[r]??0),83492791),i^=Math.imul(Math.round(t[r+2]??0),2971215073),i=Math.imul(i^i>>>16,2246822519),i=Math.imul(i^i>>>13,3266489917),(i>>>0)/Ch}function Ih(e,t,n){e.nodePositionAttribute.addUpdateRange(t*Sh,n*Sh),e.nodePositionAttribute.needsUpdate=!0,e.nodeColorAttribute.addUpdateRange(t*Sh,n*Sh),e.nodeColorAttribute.needsUpdate=!0,e.nodeWeightAttribute.addUpdateRange(t,n),e.nodeWeightAttribute.needsUpdate=!0}function Lh(e,t,n){for(let r of[e.edgeStartAttribute,e.edgeEndAttribute,e.edgeColorAttribute])r.addUpdateRange(t*3,n*3),r.needsUpdate=!0;for(let r of[e.edgeWeightAttribute,e.edgePhaseAttribute,e.edgeUploadAttribute])r.addUpdateRange(t,n),r.needsUpdate=!0}var Rh=4294967296,zh=0,Bh=1,Vh=2;function Hh(e){return{sourceClass:`soil`,appendChunkAnchors:(t,n,r,i)=>{Wh(e,t,n,r,i)}}}function Uh(e){return Math.round(e*e*Q.soilNodesPerSquareMeter)}function Wh(e,t,n,r,i){let{soilMinimumDepthMeters:a,soilDepthSpanMeters:o,soilDepthBias:s}=Q,c=t*r,l=n*r,u=Uh(r);for(let d=0;d<u;d+=1){let u=c+Gh(t,n,d,zh)*r,f=l+Gh(t,n,d,Bh)*r,p=a+Gh(t,n,d,Vh)**s*o;i(u,e.groundYAt(u,f)-p,f)}}function Gh(e,t,n,r){let i=Math.imul(e,73856093);return i^=Math.imul(t,19349663),i^=Math.imul(n+1,83492791),i^=Math.imul(r+1,2971215073),i=Math.imul(i^i>>>16,2246822519),i=Math.imul(i^i>>>13,3266489917),(i>>>0)/Rh}var Kh=`/*
 * Purpose: Open the ground where nothing grows on it, so the root mat reads through.
 * Context: Level 07 shows a buried system; a lawn above it must still look like a lawn.
 * Responsibility: Scale the ground's alpha between its bare and its covered value.
 * Boundary: Cords, nodes, and their own reveal stay with the Mycelium web material.
 *
 * Two values, not one. Bare earth opens far enough to read the mat through it.
 * Ground the grass field already covers stays nearly solid: the blades standing
 * on it are opaque anyway, so the cords below show only between them, which is
 * the weakened reading a lawn should give. One alpha for both would either wash
 * out the meadow or bury the open soil.
 */

uniform float connectionsSoilOpening;
uniform float connectionsSoilBareOpacity;
uniform float connectionsSoilCoveredOpacity;

varying float connectionsGroundCover;

/** Applied to \`diffuseColor\`, so whatever the carried ramps painted is kept. */
void openConnectionsSoil(inout vec4 groundColor) {
  float opened = mix(
    connectionsSoilBareOpacity,
    connectionsSoilCoveredOpacity,
    clamp(connectionsGroundCover, 0.0, 1.0)
  );
  groundColor.a *= mix(1.0, opened, connectionsSoilOpening);
}
`,qh=`/*
 * Purpose: Hand the ground surface its streamed grass coverage.
 * Context: Terrain streams the sampler the opening declares, one value per vertex.
 * Responsibility: Pass that value to the fragment stage.
 * Boundary: The two opacities and the blend stay in the fragment shader.
 */

attribute float groundCover;
varying float connectionsGroundCover;

void passConnectionsSoil() {
  connectionsGroundCover = groundCover;
}
`,Jh=`connections-soil-opening-v3`;function Yh(e,t){let n={connectionsSoilOpening:e,connectionsSoilBareOpacity:{value:Q.soilBareOpacity},connectionsSoilCoveredOpacity:{value:Q.soilCoveredOpacity}};return{coverAt:t,applyTo:e=>{e.transparent=!0,xu(e,{cacheKey:Jh,uniforms:n,vertexHeader:qh,vertexAnchor:`#include <begin_vertex>`,vertexCall:`passConnectionsSoil();`,fragmentHeader:Kh,colorFragmentCall:`openConnectionsSoil(diffuseColor);`})}}}function Xh(){let e=new Worker(new URL(`/becoming-many-making-of/p/v3-v075/assets/topology.worker-DymyXG66.js`,``+import.meta.url),{type:`module`});return{postRequest:t=>e.postMessage(t,[t.own.positions.buffer,t.own.weights.buffer,t.own.classIndices.buffer,t.halo.positions.buffer,t.halo.weights.buffer,t.halo.classIndices.buffer]),setResultHandler:t=>{e.onmessage=e=>t(e.data)},terminate:()=>e.terminate()}}var Zh=3,Qh={edgeCount:0,droppedEdgeCount:0,edgeStarts:new Float32Array,edgeEnds:new Float32Array,edgeWeights:new Float32Array,edgeHubClasses:new Uint8Array},$h=[`vegetation`,`scentEmitters`,`rocks`,`soil`],eg=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function tg(e,t){mg(e);let n={value:0},r={value:0},i={value:e.intensity},a={connectionsTime:n,connectionsClock:r,connectionsIntensity:i,connectionsWebRadius:{value:e.webRadiusMeters},connectionsWebFadeBand:{value:Q.webFadeBandMeters},connectionsPulseSpeed:{value:e.pulseSpeedMetersPerSecond},connectionsPulseLength:{value:Q.pulseLengthFraction},connectionsEdgeBaseWidth:{value:Q.edgeBaseWidthMeters},connectionsEdgeWidthSpan:{value:Q.edgeWeightWidthSpanMeters},connectionsFilamentWidth:{value:Q.filamentWidthFraction},connectionsWobbleAmplitude:{value:Q.wobbleAmplitudeMeters},connectionsKnotSpacing:{value:Q.knotSpacingMeters},connectionsGrowthNearDistance:{value:Q.growthNearDistanceMeters},connectionsGrowthFarFraction:{value:Q.growthFarFraction},connectionsEdgeFade:{value:Q.edgeFadeSeconds},connectionsNodeBaseSize:{value:Q.nodeBaseSizeMeters},connectionsNodePixelScale:{value:Q.nodePixelScale},connectionsDepthColor:{value:new L(e.colors.depthColor)},connectionsPulseColor:{value:new L(e.colors.pulseColor)}},o=pg(e),s=Yh(i,t.groundCoverAt),c={...t,staticSources:[...t.staticSources,Hh(t.worldSurface)]},l={currentStream:void 0,clockSeconds:0};return{module:{load:()=>ng(l,o,a,c),activate:()=>dg(l,!0),update:e=>{l.clockSeconds+=e,r.value=l.clockSeconds,n.value=(n.value+e)%Q.animationLoopSeconds,rg(l,o,c)},deactivate:()=>dg(l,!1),unload:()=>fg(l,t.scene)},setIntensity:e=>{i.value=e},terrain:s}}function ng(e,t,n,r){let i=new lh({level:Q.chunkLevel,radius:Q.gatherChunkRadius}),a=new lh({level:Q.chunkLevel,radius:Q.buildChunkRadius}),o=Th(n,{gatherSlotCount:i.slotCount,buildSlotCount:a.slotCount});o.edges.frustumCulled=!1,o.nodes.frustumCulled=!1,o.edges.visible=!1,o.nodes.visible=!1,o.edges.renderOrder=Q.webRenderOrder,o.nodes.renderOrder=Q.webRenderOrder,r.scene.add(o.edges),r.scene.add(o.nodes);let s=r.createTopologyPort?r.createTopologyPort():Xh(),c={staging:ug(i.slotCount),gatherWindow:i,buildWindow:a,web:o,topologyPort:s,slotJobKeys:Array.from({length:i.slotCount},()=>({})),admissionRetryJobs:Array.from({length:i.slotCount}),buildAssignments:Array.from({length:a.slotCount}),buildPending:new Uint8Array(a.slotCount)};s.setResultHandler(n=>lg(e,c,t,n)),e.currentStream=c;let{x:l,z:u}=r.viewpoint.worldPosition;for(let e of i.update(l,u))ag(c,t,r,e);for(let e of a.update(l,u))c.buildAssignments[e.slotIndex]=e,c.buildPending[e.slotIndex]=1;og(c)}function rg(e,t,n){let r=e.currentStream;if(!r)return;let{staging:i}=r,{x:a,z:o}=n.viewpoint.worldPosition;for(let s of r.gatherWindow.update(a,o))i.isGathered[s.slotIndex]=0,Dh(r.web,s.slotIndex,Qh.edgeStarts,Qh.edgeHubClasses,0,t),r.admissionRetryJobs[s.slotIndex]=ig(e,r,t,n,s);for(let n of r.buildWindow.update(a,o))r.buildAssignments[n.slotIndex]=n,r.buildPending[n.slotIndex]=1,Oh(r.web,{...Qh,buildSlotIndex:n.slotIndex,revision:n.revision},t,e.clockSeconds);for(let e=0;e<r.admissionRetryJobs.length;e+=1){let t=r.admissionRetryJobs[e];if(t){if(!n.streamQueue.enqueue(t))break;r.admissionRetryJobs[e]=void 0}}og(r)}function ig(e,t,n,r,i){return{key:t.slotJobKeys[i.slotIndex]??{},priority:0,isCurrent:()=>e.currentStream===t&&t.gatherWindow.isCurrent(i),runStep:()=>(ag(t,n,r,i),!0)}}function ag(e,t,n,r){let{staging:i}=e,{nodeSlotCapacity:a}=Q,o=uh(Q.chunkLevel),s=Eh(r.slotIndex),c=0,l=0;for(let e of n.staticSources){let n=$h.indexOf(e.sourceClass),u=n>=0?t[n]:void 0;if(n<0||!u)continue;let d=e.sourceClass===`soil`?0:Q.surfaceRootDepthMeters;e.appendChunkAnchors(r.chunkX,r.chunkZ,o,(e,t,r)=>{if(c>=a){l+=1;return}let o=(s+c)*Zh;i.positions[o]=e,i.positions[o+1]=t-d,i.positions[o+2]=r,i.classIndices[s+c]=n,i.weights[s+c]=u.weight,c+=1})}l>0&&console.warn(`Connections web dropped ${l} anchors beyond one chunk's node capacity`),i.slotNodeCounts[r.slotIndex]=c,i.gatheredChunkX[r.slotIndex]=r.chunkX,i.gatheredChunkZ[r.slotIndex]=r.chunkZ,i.isGathered[r.slotIndex]=1,Dh(e.web,r.slotIndex,i.positions.subarray(s*Zh,(s+c)*Zh),i.classIndices.subarray(s,s+c),c,t)}function og(e){let{staging:t}=e;for(let n=0;n<e.buildPending.length;n+=1){if(e.buildPending[n]!==1)continue;let r=e.buildAssignments[n];if(!r)continue;let i=sg(e,r.chunkX,r.chunkZ);if(i<0)continue;let a=[],o=!0;for(let[t,n]of eg){let i=sg(e,r.chunkX+t,r.chunkZ+n);if(i<0){o=!1;break}a.push(i)}o&&(e.topologyPort.postRequest({buildSlotIndex:n,revision:r.revision,own:cg(t,[i]),halo:cg(t,a),neighborsPerNode:Q.neighborsPerNode,edgeCapacity:Q.edgeSlotCapacity}),e.buildPending[n]=0)}}function sg(e,t,n){let{staging:r}=e,i=e.gatherWindow.slotIndexFor(t,n);return r.isGathered[i]!==1||r.gatheredChunkX[i]!==t||r.gatheredChunkZ[i]!==n?-1:i}function cg(e,t){let n=0;for(let r of t)n+=e.slotNodeCounts[r]??0;let r=new Float32Array(n*Zh),i=new Float32Array(n),a=new Uint8Array(n),o=0;for(let n of t){let t=e.slotNodeCounts[n]??0,s=Eh(n);r.set(e.positions.subarray(s*Zh,(s+t)*Zh),o*Zh),i.set(e.weights.subarray(s,s+t),o),a.set(e.classIndices.subarray(s,s+t),o),o+=t}return{positions:r,weights:i,classIndices:a,nodeCount:n}}function lg(e,t,n,r){if(e.currentStream!==t)return;let i=t.buildAssignments[r.buildSlotIndex];!i||i.revision!==r.revision||(r.droppedEdgeCount>0&&console.warn(`Connections web dropped ${r.droppedEdgeCount} edges beyond one chunk's capacity`),Oh(t.web,r,n,e.clockSeconds))}function ug(e){let t=e*Q.nodeSlotCapacity;return{positions:new Float32Array(t*Zh),weights:new Float32Array(t),classIndices:new Uint8Array(t),slotNodeCounts:new Int32Array(e),gatheredChunkX:new Int32Array(e),gatheredChunkZ:new Int32Array(e),isGathered:new Uint8Array(e)}}function dg(e,t){let n=e.currentStream;n&&(n.web.edges.visible=t,n.web.nodes.visible=t)}function fg(e,t){let n=e.currentStream;n&&(e.currentStream=void 0,t.remove(n.web.edges),t.remove(n.web.nodes),kh(n.web),n.topologyPort.terminate())}function pg(e){return $h.map(t=>{let n=e.sources[t];return n?{color:new L(n.nodeColor),weight:n.weight}:void 0})}function mg(e){if(!Cu(e.intensity))throw RangeError(`Connections intensity must be between zero and one`);if(!Su(e.webRadiusMeters))throw RangeError(`Connections web radius must be positive and finite`);let t=Q.buildChunkRadius*uh(Q.chunkLevel);if(e.webRadiusMeters>t)throw RangeError(`Connections web radius must stay within the ${t}-metre topology window coverage`);if(!Number.isFinite(e.pulseSpeedMetersPerSecond)||e.pulseSpeedMetersPerSecond<0)throw RangeError(`Connections pulse speed must be finite and non-negative`);let n=Object.values(e.sources).filter(e=>e!==void 0);if(n.length===0)throw RangeError(`Connections require at least one source class`);if(!n.every(e=>Cu(e.weight)))throw RangeError(`Connections source weights must be between zero and one`)}function hg(e,t,n){e.scene.updateMatrixWorld(!0);let r=e.scene.getObjectByName(t);if(!r)throw Error(`GLTF object not found: ${t}`);let i=[],a=new ot,o=gg(r.matrixWorld);try{if(r.traverse(e=>{if(!(e instanceof Ye))return;let t=o.clone().multiply(e.matrixWorld);i.push(vg(e,t,n)),yg(a,e.geometry,t)}),i.length===0)throw Error(`GLTF object contains no meshes: ${t}`);let e=a.max.y-a.min.y;if(!Number.isFinite(e)||e<=0)throw Error(`GLTF object has no measurable height: ${t}`);return{parts:i,height:e,minimumY:a.min.y}}catch(e){for(let e of i)bg(e);throw e}}function gg(e){let t=new Ht,n=new U;return e.decompose(new U,t,n),new V().compose(new U,t,n).multiply(e.clone().invert())}function _g(e){for(let t of e.parts)bg(t)}function vg(e,t,n){let r=Array.isArray(e.material)?e.material:[e.material],i=[];try{for(let t of r)i.push(vs(t,n?.(t,e.name)))}catch(e){for(let e of i)e.dispose();throw e}let a=Array.isArray(e.material)?i:i[0];if(!a)throw Error(`GLTF mesh has no material: ${e.name}`);return{geometry:e.geometry,material:a,sourceMatrix:t}}function yg(e,t,n){t.boundingBox||t.computeBoundingBox(),t.boundingBox&&e.union(t.boundingBox.clone().applyMatrix4(n))}function bg(e){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.dispose()}var xg=16;function Sg({name:e,sources:t,slotCount:n,maxInstancesPerSlot:r}){Fg(t,n,r);let i=new we;i.name=e,i.visible=!1;let a=new Map;for(let e of t){let t=kg(e,n,r);for(let e of t.meshes)i.add(e);a.set(e.id,t)}return{group:i,variants:a,maxInstancesPerSlot:r,slotCount:n,modelMatrix:new V,partMatrix:new V,needsUpload:!1}}function Cg(e,t){Ig(e,t);for(let n of e.variants.values())n.stagingCounts[t]=0}function wg(e,t){Ig(e,t);for(let n of e.variants.values())n.committedCounts[t]=0;e.needsUpload=!0}function Tg(e,t,n,r){Ig(e,n);let i=e.variants.get(t);if(!i)throw Error(`Unknown instanced model: ${t}`);let a=i.stagingCounts[n]??0;if(a>=e.maxInstancesPerSlot)return;let o=i.stagingMatrices[n];o&&(r.toArray(o,a*xg),i.stagingCounts[n]=a+1)}function Eg(e,t){Ig(e,t);for(let n of e.variants.values())jg(n,t);e.needsUpload=!0}function Dg(e){if(e.needsUpload){for(let t of e.variants.values())Mg(e,t);e.needsUpload=!1}}function Og(e){for(let t of e.variants.values()){for(let e of t.meshes)e.dispose();_g(t.model)}e.group.clear()}function kg(e,t,n){let r=t*n,i=e.model.parts.map((t,n)=>{let i=new k(t.geometry,t.material,r);return i.name=`${e.id}-${n}`,i.count=0,i.instanceMatrix.setUsage(N),i.frustumCulled=!1,i}),a=Ag(t,n),o=Ag(t,n);return{...e,meshes:i,committedMatrices:a,committedCounts:new Uint16Array(t),stagingMatrices:o,stagingCounts:new Uint16Array(t)}}function Ag(e,t){return Array.from({length:e},()=>new Float32Array(t*xg))}function jg(e,t){let n=e.committedMatrices[t],r=e.stagingMatrices[t];!n||!r||(e.committedMatrices[t]=r,e.stagingMatrices[t]=n,e.committedCounts[t]=e.stagingCounts[t]??0)}function Mg(e,t){let n=0;for(let r=0;r<t.committedCounts.length;r+=1)n=Ng(e,t,r,n);for(let e of t.meshes)e.count=n,e.instanceMatrix.clearUpdateRanges(),n>0&&(e.instanceMatrix.addUpdateRange(0,n*xg),e.instanceMatrix.needsUpdate=!0)}function Ng(e,t,n,r){let i=t.committedMatrices[n],a=t.committedCounts[n]??0;if(!i)return r;let o=r;for(let n=0;n<a;n+=1)e.modelMatrix.fromArray(i,n*xg),Pg(e,t,o),o+=1;return o}function Pg(e,t,n){for(let[r,i]of t.model.parts.entries()){let a=t.meshes[r];a&&(e.partMatrix.multiplyMatrices(e.modelMatrix,i.sourceMatrix),a.setMatrixAt(n,e.partMatrix))}}function Fg(e,t,n){if(new Set(e.map(({id:e})=>e)).size!==e.length)throw Error(`Instanced model ids must be unique`);if(!Number.isInteger(t)||t<=0)throw RangeError(`Instanced model slotCount must be a positive integer`);if(!Number.isInteger(n)||n<=0||n>65535)throw RangeError(`Instanced model slot capacity is invalid`)}function Ig(e,t){if(!Number.isInteger(t)||t<0||t>=e.slotCount)throw RangeError(`Instanced model slot is out of range: ${t}`)}var Lg=1e4,Rg=2,zg=[`meadow`,`coniferForest`,`deciduousForest`,`shrubSlope`],Bg=5;function Vg(e){return{parameters:e.parameters,worldSurface:e.worldSurface,candidateGrid:e.candidateGrid,modelPool:Sg({name:e.name,sources:e.sources,slotCount:e.chunkSlotCount,maxInstancesPerSlot:e.candidateGrid.candidateCount}),matrix:new V,position:new U,rotation:new Ht,scale:new U,writeTransform:e.writeTransform}}function Hg(e,t){let n;return{load:()=>{let r=uh(Rg),i=new lh({level:Rg,radius:Math.max(1,Math.ceil(e.viewpoint.viewDistanceMeters/r))}),a=t(r,i.slotCount);n={chunkWindow:i,instances:a,slotJobKeys:Array.from({length:i.slotCount},()=>({}))};let{x:o,z:s}=e.viewpoint.worldPosition;Ug(a,i.update(o,s)),e.scene.add(a.modelPool.group)},activate:()=>{n&&(n.instances.modelPool.group.visible=!0)},update:()=>{let t=n;if(!t)return;Dg(t.instances.modelPool);let{x:r,z:i}=e.viewpoint.worldPosition,a=t.chunkWindow.update(r,i);Gg(t.instances,a),Dg(t.instances.modelPool);for(let r of a){let i=t.slotJobKeys[r.slotIndex];if(!i)continue;let a={assignment:r,nextRow:0};e.streamQueue.enqueue({key:i,isCurrent:()=>n===t&&t.chunkWindow.isCurrent(r),runStep:()=>Wg(t.instances,a)})}},deactivate:()=>{n&&(n.instances.modelPool.group.visible=!1)},unload:()=>{let t=n;t&&(n=void 0,e.scene.remove(t.instances.modelPool.group),Og(t.instances.modelPool))}}}function Ug(e,t){for(let n of t){let t={assignment:n,nextRow:0};for(;!Wg(e,t););}Dg(e.modelPool)}function Wg(e,t){let{assignment:n}=t;t.nextRow===0&&Cg(e.modelPool,n.slotIndex);let r=t.nextRow*e.candidateGrid.cellsPerSide;for(let t=0;t<e.candidateGrid.cellsPerSide;t++){let i=Jg(e.parameters,e.candidateGrid,e.worldSurface,n,r+t);i&&e.writeTransform(e,n,i.model,i.candidate)}return t.nextRow++,t.nextRow<e.candidateGrid.cellsPerSide?!1:(Eg(e.modelPool,n.slotIndex),!0)}function Gg(e,t){for(let n of t)wg(e.modelPool,n.slotIndex)}function Kg(e,t,n){let r=gl(e,n.cellX,n.cellZ,Bg);return t.minimumHeightMeters+(t.maximumHeightMeters-t.minimumHeightMeters)*r}function qg(e,t){return{...e,instancesPerHectareByZone:t.instancesPerHectareByZone}}function Jg(e,t,n,r,i){let a=hl(r,t,e.seed,i),o=n.zoneInfluencesAt(a.worldX,a.worldZ),s=gl(e.seed,a.cellX,a.cellZ,2);for(let n of zg){let r=e.instancesPerHectareByZone[n]??0,i=o[n]*(r*t.spacingMeters**2/Lg);if(s>=i){s-=i;continue}let c=e.variantsByZone[n];if(!c)return;let l=gl(e.seed,a.cellX,a.cellZ,3),u=Yg(e.assets,c,l);return u?{candidate:a,model:u}:void 0}}function Yg(e,t,n){let r=n*t.reduce((e,{weight:t})=>e+t,0);for(let n of t)if(r-=n.weight,r<=0)return e.find(({id:e})=>e===n.assetId)}function Xg(e,t,n,r,i,a,o){Zg(e,t,n,r,i,a,({candidate:e},t)=>o(e.worldX,t,e.worldZ))}function Zg(e,t,n,r,i,a,o){let s=r/i.chunkSizeMeters,c=t.cellsPerSide/s;if(!Number.isInteger(s)||!Number.isInteger(c))throw RangeError(`Anchor requests must align with the placement chunk and candidate grid`);let l=Math.floor(i.chunkX/s),u=Math.floor(i.chunkZ/s),d={slotIndex:0,revision:0,chunkX:l,chunkZ:u,originX:l*r,originZ:u*r},f=(i.chunkX-l*s)*c,p=(i.chunkZ-u*s)*c;for(let r=p;r<p+c;r+=1)for(let i=f;i<f+c;i+=1){let s=Jg(e,t,n,d,r*t.cellsPerSide+i);!s||!a(s.candidate)||o(s,n.groundYAt(s.candidate.worldX,s.candidate.worldZ))}}function Qg(e,t,n){let r=new Set(e.assets.map(({id:e})=>e));if(r.size!==e.assets.length)throw Error(`${n} asset ids must be unique`);for(let t of e.assets)e_(t,n);ml(t,e.candidateSpacingMeters),$g(e,r,n)}function $g(e,t,n){let r=Object.entries(e.instancesPerHectareByZone);for(let[i,a]of r){t_(a,e.candidateSpacingMeters,n);let r=e.variantsByZone[i];if(!r||r.length===0)throw Error(`${n} zone ${i} requires asset variants`);for(let e of r)n_(e,t,n)}}function e_(e,t){if(!(e.minimumHeightMeters>0&&e.maximumHeightMeters>=e.minimumHeightMeters))throw RangeError(`${t} heights must be positive and ordered`)}function t_(e,t,n){let r=e*t**2/Lg;if(!(Number.isFinite(r)&&r>=0&&r<=1))throw RangeError(`${n} density exceeds candidate-grid capacity`)}function n_(e,t,n){if(!t.has(e.assetId))throw Error(`Unknown ${n} asset: ${e.assetId}`);if(!(Number.isFinite(e.weight)&&e.weight>0))throw RangeError(`${n} variant weights must be positive`)}var r_=[{assetId:`rock-pack`,weight:1},{assetId:`rock-medium`,weight:1},{assetId:`rock-small`,weight:1},{assetId:`gold-rock`,weight:.1}],i_={seed:719,candidateSpacingMeters:8,assets:[{id:`rock-pack`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/rocks/rock-pack.glb`,objectName:`Rock_2`,minimumHeightMeters:.4,maximumHeightMeters:1},{id:`rock-medium`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/rocks/rock-medium.glb`,objectName:`Rock_Medium_2`,minimumHeightMeters:.5,maximumHeightMeters:1.2},{id:`rock-small`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/rocks/rock-small.glb`,objectName:`Rock_3`,minimumHeightMeters:.25,maximumHeightMeters:.65},{id:`gold-rock`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/rocks/gold-rock.glb`,objectName:`Resource_Gold_3`,minimumHeightMeters:.3,maximumHeightMeters:.8}],variantsByZone:{meadow:r_,coniferForest:r_,deciduousForest:r_,shrubSlope:r_}},a_=2;function o_(e,t){let n=qg(i_,e),r=uh(a_),i=ml(r,n.candidateSpacingMeters);return{sourceClass:`rocks`,appendChunkAnchors:(e,a,o,s)=>Xg(n,i,t,r,{chunkX:e,chunkZ:a,chunkSizeMeters:o},()=>!0,s)}}var s_=Math.PI*2,c_=new U(0,1,0);function l_({parameters:e,colors:t,assets:n,chunkSize:r,chunkSlotCount:i,worldSurface:a,effects:o}){Qg(e,r,`Rock`);let s=ml(r,e.candidateSpacingMeters),c=[];try{for(let[r,i]of e.assets.entries())c.push({id:i.id,model:hg(f_(n,i.id),i.objectName,e=>u_(t,e.name,r))});if(o)for(let{model:e}of c)for(let t of e.parts)dl(o,t.material);return Vg({name:`Rocks`,parameters:e,worldSurface:a,candidateGrid:s,sources:c,chunkSlotCount:i,writeTransform:d_})}catch(e){for(let{model:e}of c)_g(e);throw e}}function u_(e,t,n){return t===`light`?e.lightColor:t===`dark`||n%2==0?e.darkColor:e.lightColor}function d_(e,t,n,r){let i=e.modelPool.variants.get(n.id);if(!i)return;let a=Kg(e.parameters.seed,n,r)/i.model.height,o=e.worldSurface.groundYAt(r.worldX,r.worldZ)-i.model.minimumY*a;e.position.set(r.worldX,o,r.worldZ),e.rotation.setFromAxisAngle(c_,gl(e.parameters.seed,r.cellX,r.cellZ,4)*s_),e.scale.setScalar(a),e.matrix.compose(e.position,e.rotation,e.scale),Tg(e.modelPool,n.id,t.slotIndex,e.matrix)}function f_(e,t){let n=e.get(t);if(!n)throw Error(`Rock asset not loaded: ${t}`);return n}function p_(e){let t=qg(i_,e.preset);return Hg(e,(n,r)=>l_({parameters:t,colors:e.preset.colors,assets:e.assets,chunkSize:n,chunkSlotCount:r,worldSurface:e.worldSurface,effects:e.effects}))}var m_=4294967296;function h_(){return{chunkX:0,chunkZ:0,sourceIndex:0,particleIndex:-1}}function g_(e,t){let n=Math.imul(e.chunkX,73856093);return n^=Math.imul(e.chunkZ,19349663),n^=Math.imul(e.sourceIndex+1,2971215073),n^=Math.imul(e.particleIndex+2,83492791),n^=Math.imul(t+1,1103515245),n=Math.imul(n^n>>>16,2246822519),n=Math.imul(n^n>>>13,3266489917),(n>>>0)/m_}var __=2,v_=4,y_=.7,b_=4,x_=[`coniferForest`,`deciduousForest`],S_=2,C_=8;function w_(e,t){let n=uh(__);return{sourceClass:`scentEmitters`,appendChunkAnchors:(r,i,a,o)=>{let s=n/a;if(!Number.isInteger(s)||s<1)throw RangeError(`Anchor requests must align with the clearing chunk grid`);let c=Math.floor(r/s),l=Math.floor(i/s),u={chunkX:c,chunkZ:l,originX:c*n,originZ:l*n},d=r*a,f=i*a,p={chunk:u,chunkSizeMeters:n,groundYAt:e,zoneAt:t,randomKey:{...h_(),chunkX:u.chunkX,chunkZ:u.chunkZ}};for(let e=0;e<v_;e+=1){let t=T_(p,e);t&&(t.worldX<d||t.worldX>=d+a||t.worldZ<f||t.worldZ>=f+a||o(t.worldX,t.worldY,t.worldZ))}}}}function T_(e,t){let{chunk:n,chunkSizeMeters:r,groundYAt:i,zoneAt:a,randomKey:o}=e;o.sourceIndex=t;for(let e=0;e<b_;e+=1){let t=C_+e*2,s=n.originX+g_(o,t)*r,c=n.originZ+g_(o,t+1)*r;if(x_.includes(a(s,c)))return{worldX:s,worldY:i(s,c)+y_+g_(o,S_)*.6000000000000001,worldZ:c}}}var E_=`/*
 * Purpose: Clip a Scent Particle point primitive to a circular puff shape.
 * Context: Scent signatures read as soft round clouds instead of square points.
 * Responsibility: Discard only point fragments outside the circle.
 * Boundary: Color, animation, fading, and material lifecycle stay elsewhere.
 */

void discardOutsideScentParticleCircle() {
  vec2 centerOffset = gl_PointCoord - vec2(0.5);
  if (dot(centerOffset, centerOffset) > 0.25) discard;
}
`,D_=`/*
 * Purpose: Apply Scent Particle rise, drift, wind, and lifecycle fade in the vertex stage.
 * Context: Scent clouds animate without CPU uploads from one looping time uniform.
 * Responsibility: Offset points along their life cycle and scale faded points to nothing.
 * Boundary: Emitter placement, colors, point shape, and lifecycle stay in TypeScript.
 */

uniform float scentTime;
uniform float scentIntensity;
uniform float scentSenseFade;
uniform float scentRiseDuration;
uniform float scentDriftAmplitude;

// Metres a particle is carried downwind across one whole life, already
// scaled by the current wind strength on the CPU.
uniform vec2 scentWind;

attribute float scentPhase;
attribute float scentVisible;

// How far this particle's own plant lifts its scent. A bush that released
// its scent as high as a pine would leave the plant it belongs to.
attribute float scentRise;

const float SCENT_TAU = 6.2831853;
// 5 * TAU / 60 keeps the drift seamless at the 60-second time-uniform wrap;
// only whole turns per wrap do. Down from seven: the churn was reading as
// weather blowing through the air rather than as scent hanging in it.
const float SCENT_DRIFT_RATE = 0.5235988;
const float SCENT_DRIFT_PHASE_SCALE = 1.7;
/*
 * A particle is carried and drifts by its age, so a long fade-in only ever
 * shows the scent once it has already left the plant, and the plant's upwind
 * side stayed empty. Fading in fast and out slow keeps the near air around
 * the plant occupied while the far end of the plume still thins out.
 */
const float SCENT_FADE_IN_PORTION = 0.08;
const float SCENT_FADE_OUT_PORTION = 0.3;
const float SCENT_MINIMUM_VISIBLE_SCALE = 0.01;
// Spread of the per-particle drift amplitude around the authored value.
const float SCENT_AMPLITUDE_SPREAD = 0.55;
/*
 * The life phase also decides the age, so particles visible at one moment
 * hold a narrow band of phases. Reusing it directly as a drift phase would
 * hand every visible particle nearly the same drift again. Scrambling it
 * spreads that band across the whole turn, which is what decorrelates the
 * drift from the life cycle without paying for a second attribute.
 */
const float SCENT_PHASE_SCRAMBLE = 13.37;
const float SCENT_PHASE_OFFSET = 0.37;
/*
 * A second, faster turn per particle, so no two neighbours trace one circle.
 * The rate has to stay a whole multiple of the drift rate, or the drift no
 * longer closes at the 60-second wrap. Carrying most of the drift on the fast
 * turn is what reads as turbulence rather than as one wide swirl: the same
 * travel, taken in smaller and quicker steps.
 */
const float SCENT_DRIFT_DETAIL_RATE = 3.0;
const float SCENT_DRIFT_DETAIL_SHARE = 0.62;
/*
 * The drift opens out with age rather than holding one amplitude for the
 * whole life. A particle leaves its plant tight and loosens as it travels,
 * which is the difference between a cloud that churns in place and one that
 * disperses. Near one the opening is even across the life; higher, the drift
 * stays small for most of it and only lets go near the end, which held the
 * air around the plant too still.
 */
const float SCENT_DRIFT_SPREAD_POWER = 1.05;
/*
 * The share of the show's fade window one particle takes for itself. Scaling
 * every speck by the same sense strength makes the whole field cross the one
 * pixel it needs to rasterize in the same instant, which reads as the scent
 * appearing at once rather than gathering. Each particle instead starts its
 * own ramp at its own point of the window, so the field condenses speck by
 * speck and thins out the same way.
 */
const float SCENT_SENSE_ARRIVAL_SHARE = 0.4;

float scentSizeScale = 0.0;

/** This particle's share of the sense fade, from the phase it already has. */
float scentSenseArrival(float scrambled) {
  float start = scrambled * (1.0 - SCENT_SENSE_ARRIVAL_SHARE);
  return smoothstep(start, start + SCENT_SENSE_ARRIVAL_SHARE, scentSenseFade);
}

vec3 animateScentParticle(vec3 restingPosition) {
  float age = fract(scentTime / scentRiseDuration + scentPhase);

  // The drift phase is the particle's own, not its position's. Deriving it
  // from the resting place alone gave every particle of one plant nearly the
  // same phase, so the cloud slid about as a rigid block instead of churning.
  // It doubles as this particle's place in the sense fade.
  float scrambled = fract(scentPhase * SCENT_PHASE_SCRAMBLE + SCENT_PHASE_OFFSET);

  // Particles of emitters without a source-zone anchor never rasterize.
  scentSizeScale = scentVisible * scentIntensity * scentSenseArrival(scrambled)
    * smoothstep(0.0, SCENT_FADE_IN_PORTION, age)
    * (1.0 - smoothstep(1.0 - SCENT_FADE_OUT_PORTION, 1.0, age));
  float ownPhase = scrambled * SCENT_TAU;
  float placePhase = dot(restingPosition, vec3(0.083, 0.059, 0.101));
  float driftPhase = ownPhase + placePhase;
  float amplitude = scentDriftAmplitude
    * (1.0 + (scrambled - 0.5) * SCENT_AMPLITUDE_SPREAD);

  vec2 slowTurn = vec2(
    cos(scentTime * SCENT_DRIFT_RATE + driftPhase),
    sin(scentTime * SCENT_DRIFT_RATE + driftPhase * SCENT_DRIFT_PHASE_SCALE)
  );
  vec2 fastTurn = vec2(
    cos(scentTime * SCENT_DRIFT_RATE * SCENT_DRIFT_DETAIL_RATE - ownPhase),
    sin(scentTime * SCENT_DRIFT_RATE * SCENT_DRIFT_DETAIL_RATE + ownPhase)
  );
  vec2 drift = amplitude
    * pow(age, SCENT_DRIFT_SPREAD_POWER)
    * mix(slowTurn, fastTurn, SCENT_DRIFT_DETAIL_SHARE);

  // Wind grows with age: the scent leaves its plant the longer it has been
  // in the air, so a stand reads as plants with plumes rather than as fog.
  vec2 carried = scentWind * age;

  vec3 lifeOffset = vec3(
    drift.x + carried.x,
    age * scentRise,
    drift.y + carried.y
  );

  return restingPosition + lifeOffset;
}

vec4 getScentParticleClipPosition(vec4 visibleClipPosition) {
  if (scentSizeScale > SCENT_MINIMUM_VISIBLE_SCALE) return visibleClipPosition;

  // Fully faded points stay in the fixed GPU buffer but are moved beyond
  // clip space so intensity zero rasterizes nothing.
  return vec4(2.0, 2.0, 2.0, 1.0);
}

float getScentParticleSizeScale() {
  return scentSizeScale;
}
`,O_={chunkLevel:2,preloadLayerCount:1,animationLoopSeconds:60,defaultIntensity:1},k_=`/*
 * Purpose: Age, carry, and scatter the scent an animal printed as it passed.
 * Context: Printed particles stay where they were left; only age and wind move them.
 * Responsibility: Turn one print time into a drifting, spreading, thinning particle.
 * Boundary: Printing, positions, colors, and the ring buffer stay in TypeScript.
 */

uniform float scentTime;
uniform float scentIntensity;
uniform float scentSenseFade;
uniform float scentLoopSeconds;
uniform float scentTrailLifetime;
uniform float scentTrailRiseHeight;
uniform float scentDriftAmplitude;

// Metres a print is carried downwind across one whole lifetime, already
// scaled by the current wind strength on the CPU.
uniform vec2 scentWind;

attribute float scentPrintTime;
attribute float scentPhase;
attribute float scentVisible;

const float SCENT_TAU = 6.2831853;
// Matches the plant layer, so both drift on one breath of air.
const float SCENT_DRIFT_RATE = 0.5235988;
const float SCENT_TRAIL_FADE_IN = 0.06;
const float SCENT_TRAIL_HOLD = 0.5;
const float SCENT_MINIMUM_VISIBLE_SCALE = 0.01;
// The spread grows faster than the age, so the far end of a route opens out
// into a fan while the fresh end stays a readable line.
const float SCENT_TRAIL_SPREAD_POWER = 1.6;
// Each print keeps its own direction, so a route frays instead of sliding.
const float SCENT_TRAIL_DIRECTION_SPREAD = 1.0;
// The share of the show's fade window one print takes for itself, as in the
// plant layer: prints arrive and leave one by one rather than as one block.
const float SCENT_SENSE_ARRIVAL_SHARE = 0.4;

float scentSizeScale = 0.0;

/** This print's share of the sense fade, from the phase it already has. */
float scentSenseArrival() {
  float start = scentPhase * (1.0 - SCENT_SENSE_ARRIVAL_SHARE);
  return smoothstep(start, start + SCENT_SENSE_ARRIVAL_SHARE, scentSenseFade);
}

vec3 animateScentTrailParticle(vec3 printedPosition) {
  // The looping clock wraps, so the age is the wrapped difference. Lifetimes
  // above the loop length would alias and are rejected on the CPU side.
  float ageSeconds = mod(
    scentTime - scentPrintTime + scentLoopSeconds,
    scentLoopSeconds
  );
  float age = ageSeconds / scentTrailLifetime;

  // Slots never printed, and prints older than one lifetime, never rasterize.
  scentSizeScale = scentVisible * scentIntensity * scentSenseArrival()
    * step(age, 1.0)
    * smoothstep(0.0, SCENT_TRAIL_FADE_IN, age)
    * (1.0 - smoothstep(SCENT_TRAIL_HOLD, 1.0, age));

  // Every print walks away along its own bearing at its own pace. The older
  // the print, the further it has walked, so the route opens out behind the
  // animal instead of staying one thin thread.
  float ownPhase = scentPhase * SCENT_TAU;
  float spread = pow(age, SCENT_TRAIL_SPREAD_POWER)
    * scentDriftAmplitude
    * SCENT_TRAIL_DIRECTION_SPREAD;
  vec2 bearing = vec2(cos(ownPhase), sin(ownPhase));
  vec2 wander = vec2(
    cos(scentTime * SCENT_DRIFT_RATE + ownPhase),
    sin(scentTime * SCENT_DRIFT_RATE + ownPhase)
  );
  vec2 scatter = spread * (bearing + wander * 0.4);

  // Wind carries the whole route downwind, and carries the old end furthest.
  vec2 carried = scentWind * age;

  vec3 lifeOffset = vec3(
    scatter.x + carried.x,
    age * scentTrailRiseHeight,
    scatter.y + carried.y
  );

  return printedPosition + lifeOffset;
}

vec4 getScentTrailClipPosition(vec4 visibleClipPosition) {
  if (scentSizeScale > SCENT_MINIMUM_VISIBLE_SCALE) return visibleClipPosition;

  // Faded prints stay in the fixed GPU buffer but are moved beyond clip space
  // so an expired or unused slot rasterizes nothing.
  return vec4(2.0, 2.0, 2.0, 1.0);
}

float getScentTrailSizeScale() {
  return scentSizeScale;
}
`,A_=`#include <common>`,j_=`#include <begin_vertex>`,M_=`#include <project_vertex>`,N_=`#include <logdepthbuf_vertex>`,P_=`#include <clipping_planes_fragment>`,F_=`scent-particle-material-v2`,I_=`scent-trail-material-v1`;function L_(e,t,n){let r={value:0},i={value:new Ne};return{pointsMaterial:B_(e.sizeMeters),uniforms:{scentTime:r,scentIntensity:{value:V_(e.intensity)},scentSenseFade:n??{value:1},scentDriftAmplitude:{value:t.driftAmplitudeMeters},scentWind:i},setTime:e=>{r.value=e},setWind:(e,t)=>i.value.set(e,t)}}function R_({appearance:e,motion:t,senseFadeUniform:n}){H_(t.riseDurationSeconds);let r=L_(e,t,n),{pointsMaterial:i}=r,a={...r.uniforms,scentRiseDuration:{value:t.riseDurationSeconds}};return i.onBeforeCompile=e=>{Object.assign(e.uniforms,a),e.vertexShader=W_(e.vertexShader,D_,{animate:`animateScentParticle`,clip:`getScentParticleClipPosition`,size:`getScentParticleSizeScale`}),e.fragmentShader=G_(e.fragmentShader)},i.customProgramCacheKey=()=>F_,{pointsMaterial:i,setTime:r.setTime,setWind:r.setWind}}function z_({appearance:e,motion:t,animals:n,senseFadeUniform:r}){U_(n.lifetimeSeconds);let i=L_(e,t,r),{pointsMaterial:a}=i,o={...i.uniforms,scentLoopSeconds:{value:O_.animationLoopSeconds},scentTrailLifetime:{value:n.lifetimeSeconds},scentTrailRiseHeight:{value:n.riseHeightMeters}};return a.onBeforeCompile=e=>{Object.assign(e.uniforms,o),e.vertexShader=W_(e.vertexShader,k_,{animate:`animateScentTrailParticle`,clip:`getScentTrailClipPosition`,size:`getScentTrailSizeScale`}),e.fragmentShader=G_(e.fragmentShader)},a.customProgramCacheKey=()=>I_,{pointsMaterial:a,setTime:i.setTime,setWind:i.setWind}}function B_(e){return new O({vertexColors:!0,size:e,sizeAttenuation:!0})}function V_(e){return e??O_.defaultIntensity}function H_(e){let t=O_.animationLoopSeconds;if(!(e>0&&Number.isInteger(t/e)))throw RangeError(`Scent rise duration must divide ${t} seconds evenly`)}function U_(e){let t=O_.animationLoopSeconds;if(!(e>0&&e<=t))throw RangeError(`Scent trail lifetime must be above 0 and at most ${t} seconds`)}function W_(e,t,n){return e.replace(A_,`${A_}\n${t}`).replace(j_,`${j_}\ntransformed = ${n.animate}(transformed);`).replace(M_,`${M_}\ngl_Position = ${n.clip}(gl_Position);`).replace(N_,`gl_PointSize *= ${n.size}();\n${N_}`)}function G_(e){return e.replace(A_,`${A_}\n${E_}`).replace(P_,`${P_}\ndiscardOutsideScentParticleCircle();`)}var K_=3,q_=0,J_=1,Y_=3,X_=5,Z_=Math.PI*2,Q_=.18;function $_({parameters:e,plantSource:t,chunkSize:n,chunkSlotCount:r,senseFadeUniform:i}){let a=t.groupIds.map(t=>e.plants[t]),o=a.reduce((e,{particlesPerPlant:t})=>Math.max(e,t),0),s=t.maxPlantsPerChunk(n)*o,c=s*K_,l=new Float32Array(c*r),u=new Float32Array(c*r),d=new Float32Array(s*r),f=new Float32Array(s*r),p=new Uint8Array(s*r),m=new B(l,K_),h=new B(u,K_),g=new B(d,1),_=new B(f,1),v=new B(p,1);m.setUsage(N),h.setUsage(N),g.setUsage(N),_.setUsage(N),v.setUsage(N);let y=new We;y.setAttribute(`position`,m),y.setAttribute(`color`,h),y.setAttribute(`scentPhase`,g),y.setAttribute(`scentRise`,_),y.setAttribute(`scentVisible`,v);let x=R_({appearance:e.appearance,motion:e.motion,senseFadeUniform:i}),S=new b(y,x.pointsMaterial);return S.frustumCulled=!1,{points:S,material:x,parameters:e,plantSource:t,signatures:a,signatureColors:uv(a),particlesPerChunk:s,valuesPerChunk:c,chunkSize:n,renderedPositions:l,renderedColors:u,renderedPhases:d,renderedRises:f,renderedVisibility:p,positionAttribute:m,colorAttribute:h,phaseAttribute:g,riseAttribute:_,visibilityAttribute:v,randomKey:h_()}}var ev=256;function tv(e){return{assignment:e,plants:[],gathered:!1,nextPlant:0,particleCursor:0}}function nv(e,t){if(!t.gathered)return rv(e,t),t.plants.length===0;let n=t.assignment.slotIndex*e.particlesPerChunk+e.particlesPerChunk,r=0;for(;t.nextPlant<t.plants.length&&r<ev;){let i=t.plants[t.nextPlant];if(t.nextPlant+=1,!i)continue;let a=e.plantSource.groupIds.indexOf(i.groupId),o=e.signatures[a];if(!o)continue;let s=t.particleCursor+o.particlesPerPlant;s>n||(cv(e,t.assignment,{signature:o,groupIndex:a,plantIndex:t.nextPlant-1,firstParticleIndex:t.particleCursor,worldX:i.worldX,groundY:i.groundY,worldZ:i.worldZ,heightMeters:i.heightMeters}),t.particleCursor=s,r+=o.particlesPerPlant)}let i=t.nextPlant>=t.plants.length;return i&&e.renderedVisibility.fill(1,t.assignment.slotIndex*e.particlesPerChunk,t.particleCursor),i}function rv(e,t){let{assignment:n}=t;t.gathered=!0,t.particleCursor=n.slotIndex*e.particlesPerChunk,e.plantSource.appendChunkPlants(n.chunkX,n.chunkZ,e.chunkSize,(e,n,r,i,a)=>{t.plants.push({worldX:e,groundY:n,worldZ:r,heightMeters:i,groupId:a})})}function iv(e,t){for(let n of t){let t=tv(n);for(;!nv(e,t););}}function av(e,t){let n=t*e.particlesPerChunk;e.renderedVisibility.fill(0,n,n+e.particlesPerChunk),e.visibilityAttribute.addUpdateRange(n,e.particlesPerChunk),e.visibilityAttribute.needsUpdate=!0}function ov(e,t){let n=t*e.particlesPerChunk,r=n*K_;e.positionAttribute.addUpdateRange(r,e.valuesPerChunk),e.colorAttribute.addUpdateRange(r,e.valuesPerChunk),e.phaseAttribute.addUpdateRange(n,e.particlesPerChunk),e.riseAttribute.addUpdateRange(n,e.particlesPerChunk),e.visibilityAttribute.addUpdateRange(n,e.particlesPerChunk),e.positionAttribute.needsUpdate=!0,e.colorAttribute.needsUpdate=!0,e.phaseAttribute.needsUpdate=!0,e.riseAttribute.needsUpdate=!0,e.visibilityAttribute.needsUpdate=!0}function sv(e){e.points.geometry.dispose(),e.points.material.dispose()}function cv(e,t,n){let{signature:r,heightMeters:i}=n,{randomKey:a}=e;a.chunkX=t.chunkX,a.chunkZ=t.chunkZ,a.sourceIndex=n.plantIndex;let o=n.groupIndex*K_,s=r.emissionRadiusFraction*i,c=r.emissionBottomFraction*i,l=(r.emissionTopFraction-r.emissionBottomFraction)*i;for(let t=0;t<r.particlesPerPlant;t+=1){let i=n.firstParticleIndex+t,u=i*K_;a.particleIndex=t;let d=g_(a,q_),f=g_(a,J_)*Z_,p=lv(a,s);e.renderedPositions[u]=n.worldX+Math.cos(f)*p,e.renderedPositions[u+1]=n.groundY+c+d*l,e.renderedPositions[u+2]=n.worldZ+Math.sin(f)*p;for(let t=0;t<K_;t+=1)e.renderedColors[u+t]=e.signatureColors[o+t]??0;e.renderedPhases[i]=g_(a,X_),e.renderedRises[i]=r.riseHeightMeters}}function lv(e,t){let n=Q_+.8200000000000001*g_(e,Y_);return Math.sqrt(n)*t}function uv(e){let t=new Float32Array(e.length*K_),n=new L;return e.forEach((e,r)=>{n.set(e.color);let i=r*K_;t[i]=n.r,t[i+1]=n.g,t[i+2]=n.b}),t}var dv=3,fv=0,pv=1,mv=3,hv=5,gv=8;function _v({parameters:e,animals:t,maxActorCount:n,senseFadeUniform:r}){let i=Math.ceil(t.printsPerSecond*t.lifetimeSeconds),a=Math.max(1,n*i),o=new Float32Array(a*dv),s=new Float32Array(a*dv),c=new Float32Array(a),l=new Float32Array(a),u=new Float32Array(a),d=new B(o,dv),f=new B(s,dv),p=new B(c,1),m=new B(l,1),h=new B(u,1);d.setUsage(N),f.setUsage(N),p.setUsage(N),m.setUsage(N),h.setUsage(N);let g=new We;g.setAttribute(`position`,d),g.setAttribute(`color`,f),g.setAttribute(`scentPrintTime`,p),g.setAttribute(`scentPhase`,m),g.setAttribute(`scentVisible`,h);let _=z_({appearance:e.appearance,motion:e.motion,animals:t,senseFadeUniform:r}),v=new b(g,_.pointsMaterial);v.frustumCulled=!1;let y=Object.entries(t.signatures);return{points:v,material:_,animals:t,capacity:a,speciesColors:wv(y),colorIndexBySpecies:new Map(y.map(([e],t)=>[e,t])),printedPositions:o,printedColors:s,printTimes:c,printedPhases:l,printedVisibility:u,positionAttribute:d,colorAttribute:f,printTimeAttribute:p,phaseAttribute:m,visibilityAttribute:h,pendingPrints:new Float32Array(n),randomKey:h_(),printCursor:0,printCounter:0}}function vv(e,t,n,r){let i=e.printCursor,a=0;for(let i=0;i<t.length;i+=1){let o=t[i],s=e.pendingPrints[i];if(!o||s===void 0)break;let c=s+e.animals.printsPerSecond*r,l=Math.min(Math.floor(c),gv);e.pendingPrints[i]=c-Math.floor(c);let u=e.colorIndexBySpecies.get(o.speciesId);if(u!==void 0)for(let t=0;t<l;t+=1)bv(e,o,u,n),a+=1}a!==0&&xv(e,i,a)}function yv(e){e.points.geometry.dispose(),e.points.material.dispose()}function bv(e,t,n,r){let{animals:i,randomKey:a}=e,o=e.printCursor;a.chunkX=e.printCounter,a.chunkZ=o;let s=o*dv,c=n*dv,l=i.emissionRadiusFraction*t.heightMeters,u=g_(a,fv),d=i.emissionBottomFraction+u*(i.emissionTopFraction-i.emissionBottomFraction);e.printedPositions[s]=t.x+Cv(a,pv,l),e.printedPositions[s+1]=t.y+d*t.heightMeters,e.printedPositions[s+2]=t.z+Cv(a,mv,l);for(let t=0;t<dv;t+=1)e.printedColors[s+t]=e.speciesColors[c+t]??0;e.printTimes[o]=r,e.printedPhases[o]=g_(a,hv),e.printedVisibility[o]=1,e.printCursor=(o+1)%e.capacity,e.printCounter+=1}function xv(e,t,n){let r=Math.min(n,e.capacity-t);Sv(e,t,r),n>r&&Sv(e,0,n-r),e.positionAttribute.needsUpdate=!0,e.colorAttribute.needsUpdate=!0,e.printTimeAttribute.needsUpdate=!0,e.phaseAttribute.needsUpdate=!0,e.visibilityAttribute.needsUpdate=!0}function Sv(e,t,n){let r=t*dv,i=n*dv;e.positionAttribute.addUpdateRange(r,i),e.colorAttribute.addUpdateRange(r,i),e.printTimeAttribute.addUpdateRange(t,n),e.phaseAttribute.addUpdateRange(t,n),e.visibilityAttribute.addUpdateRange(t,n)}function Cv(e,t,n){return(g_(e,t)+g_(e,t+1)-1)*n}function wv(e){let t=new Float32Array(e.length*dv),n=new L;return e.forEach(([,e],r)=>{if(!e)return;n.set(e.color);let i=r*dv;t[i]=n.r,t[i+1]=n.g,t[i+2]=n.b}),t}function Tv(e){let t={value:1},n={currentStream:void 0,trailField:void 0,timeSeconds:0,windSeconds:0,lastDeltaSeconds:0,active:!1};return{module:{load:()=>Ev(n,e,t),activate:()=>jv(n,!0),update:t=>Dv(n,e,t),deactivate:()=>jv(n,!1),unload:()=>Mv(n,e.scene)},setIntensity:e=>{t.value=e},observeActorBodies:e=>kv(n,e)}}function Ev(e,t,n){let{viewpoint:r,scene:i,parameters:a,plantSource:o,maxActorCount:s}=t;if(o){let a=Nv(t,o,n),s=a.chunkWindow.update(r.worldPosition.x,r.worldPosition.z);iv(a.particleField,s),a.particleField.points.visible=!1,i.add(a.particleField.points),e.currentStream=a}if(a.animals&&s){let t=_v({parameters:a,animals:a.animals,maxActorCount:s,senseFadeUniform:n});t.points.visible=!1,i.add(t.points),e.trailField=t}}function Dv(e,{viewpoint:t,streamQueue:n,parameters:r},i){e.timeSeconds=(e.timeSeconds+i*r.motion.speedMultiplier)%O_.animationLoopSeconds,e.windSeconds=Xu(e.windSeconds+i),e.lastDeltaSeconds=i;let a=Yu(e.windSeconds),o=e.currentStream?.particleField.material;o&&(o.setTime(e.timeSeconds),Ov(o,a,r.motion.windResponseMeters));let s=e.trailField?.material;s&&r.animals&&(s.setTime(e.timeSeconds),Ov(s,a,r.animals.windResponseMeters));let c=e.currentStream;if(!c)return;let l=c.chunkWindow.update(t.worldPosition.x,t.worldPosition.z);for(let t of l){av(c.particleField,t.slotIndex);let n=c.slots[t.slotIndex];n&&(n.pendingJob=Av(e,c,t))}for(let e of c.slots)if(e.pendingJob){if(!n.enqueue(e.pendingJob))break;e.pendingJob=void 0}}function Ov(e,t,n){let r=t.strength*n;e.setWind(t.directionX*r,t.directionZ*r)}function kv(e,t){let n=e.trailField;!n||!e.active||vv(n,t,e.timeSeconds,e.lastDeltaSeconds)}function Av(e,t,n){let r=t.slots[n.slotIndex];if(!r)return;let i=tv(n);return{key:r,isCurrent:()=>e.currentStream===t&&t.chunkWindow.isCurrent(n),runStep:()=>{let e=nv(t.particleField,i);return e&&ov(t.particleField,i.assignment.slotIndex),e}}}function jv(e,t){e.active=t,e.currentStream&&(e.currentStream.particleField.points.visible=t),e.trailField&&(e.trailField.points.visible=t)}function Mv(e,t){let n=e.currentStream,r=e.trailField;e.currentStream=void 0,e.trailField=void 0,e.active=!1,n&&(t.remove(n.particleField.points),sv(n.particleField)),r&&(t.remove(r.points),yv(r))}function Nv({viewpoint:e,parameters:t},n,r){let i=uh(O_.chunkLevel),a=Math.ceil(e.viewDistanceMeters/i)+O_.preloadLayerCount,o=new lh({level:O_.chunkLevel,radius:a});return{chunkWindow:o,particleField:$_({parameters:t,plantSource:n,senseFadeUniform:r,chunkSize:i,chunkSlotCount:o.slotCount}),slots:Array.from({length:o.slotCount},()=>({pendingJob:void 0}))}}var Pv={seed:8123,chunkLevel:2,candidateSpacingMeters:16,lengthMeters:{minimum:1.6,maximum:2.4},ringCount:11,sideCount:6,girthProfile:[.55,.95,1,.98,.97,.96,.94,.88,.74,.5,.12],bodyRadiusMeters:.085,crawlSpeedMetersPerSecond:.52,crawlDistanceMeters:13,zoneWeights:{meadow:.18,coniferForest:.55,deciduousForest:.55,shrubSlope:1},maximumGroundFallMeters:3};function Fv(){let{ringCount:e,sideCount:t,girthProfile:n}=Pv,r=e*t,i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r);for(let r=0;r<e;r+=1){let s=r/(e-1),c=Iv(n,s);for(let e=0;e<t;e+=1){let n=e/t*Math.PI*2,l=r*t+e,u=l*3;i[u]=Math.cos(n)*c,i[u+1]=Math.sin(n)*c*.62,i[u+2]=s,a[u]=Math.cos(n),a[u+1]=Math.sin(n),a[u+2]=0,o[l]=s}}let s=[];for(let n=0;n<e-1;n+=1)for(let e=0;e<t;e+=1){let r=(e+1)%t,i=n*t,a=(n+1)*t;s.push(i+e,a+e,i+r,i+r,a+e,a+r)}let c=new We;return c.setAttribute(`position`,new B(i,3)),c.setAttribute(`normal`,new B(a,3)),c.setAttribute(`snakeAlongBody`,new B(o,1)),c.setIndex(s),c}function Iv(e,t){let n=e.length-1,r=Math.min(t,1)*n,i=Math.min(n,Math.floor(r)),a=Math.min(n,i+1),o=r-i,s=e[i]??0;return s+((e[a]??s)-s)*o}var Lv=`/*
 * Purpose: Run one travelling wave down every snake body in the vertex stage.
 * Context: A pool of snakes shares one geometry; a skeleton each is not affordable.
 * Responsibility: Bend the body sideways by its place along it and this snake's phase.
 * Boundary: Where a snake is and which way it faces is written by the module.
 */

uniform float snakeTime;
uniform float snakeWaveLengths;
uniform float snakeWaveAmplitude;
uniform float snakeWaveSpeed;

// Zero at the head, one at the tail tip.
attribute float snakeAlongBody;
// This snake's own place in the wave, so no two crawl in step.
attribute float snakePhase;

vec3 applySnakeSlither(vec3 restingPosition) {
  const float TAU = 6.2831853;
  // The wave travels from head to tail, which is what pushes a snake forward
  // rather than making it wag: the head barely leaves the line it crawls on
  // and the body swings wider the further back it lies.
  float wave = sin(
    (snakeAlongBody * snakeWaveLengths - snakeTime * snakeWaveSpeed + snakePhase) * TAU
  );
  float reach = smoothstep(0.0, 0.35, snakeAlongBody);

  return vec3(
    restingPosition.x + wave * snakeWaveAmplitude * reach,
    restingPosition.y,
    restingPosition.z
  );
}
`,Rv=`snake-slither-v1`,zv=2,Bv=3,Vv=4,Hv=5,Uv=6,Wv=new U(0,1,0),Gv=new V,Kv=new U,qv=new Ht,Jv=new U,Yv=.09,Xv=1.35,Zv=.9;function Qv(e){if(!Cu(e.preset.crawlingShare))throw RangeError(`Snake crawling share must be between zero and one`);let t={currentStream:void 0,elapsedSeconds:0};return{load:()=>$v(t,e),activate:()=>ly(t,!0),update:n=>ey(t,e,n),deactivate:()=>ly(t,!1),unload:()=>uy(t,e.scene)}}function $v(e,t){let n=uh(Pv.chunkLevel),r=Math.max(1,Math.ceil(t.viewpoint.viewDistanceMeters/n)),i=new lh({level:Pv.chunkLevel,radius:r}),a=ml(n,Pv.candidateSpacingMeters),o=i.slotCount*a.candidateCount,s={value:0},c=Fv(),l=sy(t,s),u=new k(c,l,o);u.name=`Snakes`,u.instanceMatrix.setUsage(N),u.count=0,u.visible=!1,u.frustumCulled=!1;let d=new Ee(new Float32Array(o),1);d.setUsage(N),c.setAttribute(`snakePhase`,d),t.scene.add(u);let f={chunkWindow:i,candidateGrid:a,mesh:u,phases:d,slotSnakes:Array.from({length:i.slotCount},()=>[]),slotJobKeys:Array.from({length:i.slotCount},()=>({})),crawling:[],timeUniform:s};e.currentStream=f;let p=i.update(t.viewpoint.worldPosition.x,t.viewpoint.worldPosition.z);for(let e of p)ny(f,t,e);iy(f),ay(f,t,0)}function ey(e,t,n){let r=e.currentStream;if(r){e.elapsedSeconds+=n,r.timeUniform.value=e.elapsedSeconds;for(let n of r.chunkWindow.update(t.viewpoint.worldPosition.x,t.viewpoint.worldPosition.z)){let i=ty(e,r,t,n);i&&t.streamQueue.enqueue(i)||(ny(r,t,n),iy(r))}ay(r,t,e.elapsedSeconds)}}function ty(e,t,n,r){let i=t.slotJobKeys[r.slotIndex];if(i)return{key:i,isCurrent:()=>e.currentStream===t&&t.chunkWindow.isCurrent(r),runStep:()=>(ny(t,n,r),iy(t),!0)}}function ny(e,t,n){let r=e.slotSnakes[n.slotIndex];if(r){r.length=0;for(let i=0;i<e.candidateGrid.candidateCount;i+=1){let a=ry(hl(n,e.candidateGrid,Pv.seed,i),t);a&&r.push(a)}}}function ry(e,t){let n=t=>gl(Pv.seed,e.cellX,e.cellZ,t);if(n(zv)>=t.preset.crawlingShare)return;let r=n(Bv)*Math.PI*2,i=Math.sin(r),a=Math.cos(r),o=oy(e.worldX,e.worldZ,i,a,t.worldSurface);if(o<=0||n(Uv)>=o)return;let{minimum:s,maximum:c}=Pv.lengthMeters;return{startX:e.worldX,startZ:e.worldZ,headingX:i,headingZ:a,heading:r,lengthMeters:s+n(Vv)*(c-s),phase:n(Hv)}}function iy(e){e.crawling.length=0;for(let t of e.slotSnakes)for(let n of t)e.crawling.push(n);for(let[t,n]of e.crawling.entries())e.phases.setX(t,n.phase);e.phases.needsUpdate=!0}function ay(e,t,n){let{crawlSpeedMetersPerSecond:r,crawlDistanceMeters:i}=Pv;for(let[a,o]of e.crawling.entries()){let s=(n*r+o.phase*17)%i,c=o.startX+o.headingX*s,l=o.startZ+o.headingZ*s;Kv.set(c,t.worldSurface.groundYAt(c,l)+Pv.bodyRadiusMeters,l),qv.setFromAxisAngle(Wv,o.heading+Math.PI),Jv.set(Pv.bodyRadiusMeters,Pv.bodyRadiusMeters,o.lengthMeters),Gv.compose(Kv,qv,Jv),e.mesh.setMatrixAt(a,Gv)}e.mesh.count=e.crawling.length,e.mesh.instanceMatrix.needsUpdate=!0}function oy(e,t,n,r,i){let a=1/0,o=-1/0,s=1;for(let c=0;c<=4;c+=1){let l=c/4*Pv.crawlDistanceMeters,u=e+n*l,d=t+r*l,f=i.zoneAt(u,d),p=Pv.zoneWeights[f]??0;if(p<=0)return 0;s=Math.min(s,p);let m=i.groundYAt(u,d);a=Math.min(a,m),o=Math.max(o,m)}return o-a>Pv.maximumGroundFallMeters?0:s}function sy(e,t){let n=new z({color:e.preset.color});return n.name=`snake-skin`,dl(e.effects??[],n),xu(n,{cacheKey:Rv,uniforms:{snakeTime:t,snakeWaveLengths:{value:Xv},snakeWaveSpeed:{value:Zv},snakeWaveAmplitude:{value:cy()}},vertexHeader:Lv,vertexAnchor:`#include <begin_vertex>`,vertexCall:`transformed = applySnakeSlither(transformed);`,fragmentHeader:``,colorFragmentCall:``}),n}function cy(){let{lengthMeters:e,bodyRadiusMeters:t}=Pv;return Yv*((e.minimum+e.maximum)/2)/t}function ly(e,t){e.currentStream&&(e.currentStream.mesh.visible=t)}function uy(e,t){let n=e.currentStream;if(!n)return;e.currentStream=void 0,t.remove(n.mesh),n.mesh.geometry.dispose();let r=Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material];for(let e of r)e.dispose();n.mesh.dispose()}var dy=[],fy=class{chunkSize;radius;slotCount;chunksPerSide;chunksPerLayer;assignedVolumes;centerChunkX;centerChunkY;centerChunkZ;constructor({level:e,radius:t}){this.chunkSize=uh(e),this.radius=t,this.chunksPerSide=t*2+1,this.chunksPerLayer=this.chunksPerSide**2,this.slotCount=this.chunksPerSide**3,this.assignedVolumes=py(this.slotCount)}update(e,t,n){let r=this.getChunkCoordinateAt(e,t,n);return this.isCurrentCenter(r)?dy:(this.centerChunkX=r.chunkX,this.centerChunkY=r.chunkY,this.centerChunkZ=r.chunkZ,this.assignWindowVolumes(r))}isCurrent(e){let t=this.assignedVolumes[e.slotIndex];return t?.revision===e.revision&&t.chunkX===e.chunkX&&t.chunkY===e.chunkY&&t.chunkZ===e.chunkZ}getChunkCoordinateAt(e,t,n){return{chunkX:Math.floor(e/this.chunkSize),chunkY:Math.floor(t/this.chunkSize),chunkZ:Math.floor(n/this.chunkSize)}}isCurrentCenter(e){return this.centerChunkX===e.chunkX&&this.centerChunkY===e.chunkY&&this.centerChunkZ===e.chunkZ}assignWindowVolumes(e){let t=[];for(let n=0;n<this.slotCount;n+=1){let r=this.getWindowCoordinate(n,e),i=this.assignVolumeIfChanged(r);i&&t.push(i)}return t}getWindowCoordinate(e,t){let n=Math.floor(e/this.chunksPerLayer),r=e%this.chunksPerLayer,i=Math.floor(r/this.chunksPerSide),a=r%this.chunksPerSide;return{chunkX:t.chunkX+a-this.radius,chunkY:t.chunkY+n-this.radius,chunkZ:t.chunkZ+i-this.radius}}assignVolumeIfChanged(e){let t=gy(e,this.chunksPerSide),n=this.assignedVolumes[t];if(!(!n||my(n,e)))return n.revision+=1,n.chunkX=e.chunkX,n.chunkY=e.chunkY,n.chunkZ=e.chunkZ,hy({slotIndex:t,revision:n.revision,coordinate:e,chunkSize:this.chunkSize})}};function py(e){return Array.from({length:e},()=>({revision:0,chunkX:void 0,chunkY:void 0,chunkZ:void 0}))}function my(e,t){return e.chunkX===t.chunkX&&e.chunkY===t.chunkY&&e.chunkZ===t.chunkZ}function hy({slotIndex:e,revision:t,coordinate:n,chunkSize:r}){return{slotIndex:e,revision:t,...n,originX:n.chunkX*r,originY:n.chunkY*r,originZ:n.chunkZ*r}}function gy(e,t){let n=ph(e.chunkX,t),r=ph(e.chunkZ,t);return ph(e.chunkY,t)*t**2+r*t+n}var _y=`/*
 * Purpose: Clip an Air Particle point primitive to a circular shape.
 * Context: Square particles use PointsMaterial unchanged and circles opt into this fragment work.
 * Responsibility: Discard only point fragments outside the requested circle.
 * Boundary: Color, opacity, animation, visibility, and material lifecycle stay elsewhere.
 */

void discardOutsideAirParticleCircle() {
  vec2 centerOffset = gl_PointCoord - vec2(0.5);
  if (dot(centerOffset, centerOffset) > 0.25) discard;
}
`,vy=`/* Fade a local field before resident world-space chunks recycle. */
varying float airParticleDistanceOpacity;
`,yy=`/*
 * Purpose: Apply Air Particles movement and visibility in the vertex stage.
 * Context: Particles drift without CPU uploads and underground candidates remain invisible.
 * Responsibility: Offset visible points and move hidden points outside clip space.
 * Boundary: Surface classification, point size, color, shape, and lifecycle stay in TypeScript.
 */

uniform float airParticleTime;
uniform float airParticleHorizontalAmplitude;
uniform float airParticleVerticalAmplitude;
attribute float airParticleVisible;

#ifdef AIR_PARTICLE_DISTANCE_FADE
uniform float airParticleFadeStart;
uniform float airParticleFadeEnd;
varying float airParticleDistanceOpacity;
const float AIR_PARTICLE_NEAR_FADE_START_METERS = 0.5;
const float AIR_PARTICLE_NEAR_FADE_END_METERS = 2.0;
const float AIR_PARTICLE_MAXIMUM_SIZE_PIXELS = 12.0;
#endif

const float AIR_PARTICLE_VERTICAL_RATE = 0.45;
const float AIR_PARTICLE_HORIZONTAL_RATE = 0.31;
const float AIR_PARTICLE_PHASE_SCALE = 1.7;

vec3 animateAirParticle(vec3 restingPosition) {
  float phase = dot(restingPosition, vec3(0.071, 0.113, 0.053));
  float verticalDrift = sin(
    airParticleTime * AIR_PARTICLE_VERTICAL_RATE + phase
  ) * airParticleVerticalAmplitude;
  float horizontalDrift = cos(
    airParticleTime * AIR_PARTICLE_HORIZONTAL_RATE + phase * AIR_PARTICLE_PHASE_SCALE
  ) * airParticleHorizontalAmplitude;

  return restingPosition + vec3(horizontalDrift, verticalDrift, 0.0);
}

vec4 getAirParticleClipPosition(vec4 visibleClipPosition, vec3 viewPosition) {
  #ifdef AIR_PARTICLE_DISTANCE_FADE
  float distanceMeters = length(viewPosition);
  airParticleDistanceOpacity = 1.0 - smoothstep(
    airParticleFadeStart, airParticleFadeEnd, distanceMeters
  );
  airParticleDistanceOpacity *= smoothstep(
    AIR_PARTICLE_NEAR_FADE_START_METERS, AIR_PARTICLE_NEAR_FADE_END_METERS, distanceMeters
  );
  if (airParticleDistanceOpacity <= 0.0) return vec4(2.0, 2.0, 2.0, 1.0);
  #endif

  if (airParticleVisible > 0.5) return visibleClipPosition;

  // Points below the sampled world surface remain in the fixed GPU buffer but
  // are moved beyond clip space before rasterization.
  return vec4(2.0, 2.0, 2.0, 1.0);
}
`,by={defaultShape:`square`,volumeChunkLevel:2,preloadLayerCount:1,surfaceClearanceMeters:.5,animationLoopSeconds:60},xy=`#include <common>`,Sy=`#include <begin_vertex>`,Cy=`#include <project_vertex>`,wy=`#include <logdepthbuf_vertex>`,Ty=`#include <clipping_planes_fragment>`,Ey=`air-particle-material-v2`;function Dy({appearance:e,motion:t,streaming:n}){let r=e.shape??by.defaultShape,i={value:0},a={value:t.horizontalAmplitudeMeters},o={value:t.verticalAmplitudeMeters},s=new O({color:e.color,size:e.sizeMeters,sizeAttenuation:!0,transparent:n!==void 0,depthWrite:n===void 0});return n&&(s.defines={AIR_PARTICLE_DISTANCE_FADE:1}),s.onBeforeCompile=e=>{e.uniforms.airParticleTime=i,e.uniforms.airParticleHorizontalAmplitude=a,e.uniforms.airParticleVerticalAmplitude=o,n&&(e.uniforms.airParticleFadeStart={value:n.fadeStartMeters},e.uniforms.airParticleFadeEnd={value:n.viewDistanceMeters}),e.vertexShader=Oy(e.vertexShader),e.fragmentShader=ky(e.fragmentShader,r),n&&(e.vertexShader=e.vertexShader.replace(wy,`gl_PointSize = min(gl_PointSize, AIR_PARTICLE_MAXIMUM_SIZE_PIXELS);\n${wy}`),e.fragmentShader=e.fragmentShader.replace(xy,`${xy}\n${vy}`).replace(Ty,`${Ty}\ndiffuseColor.a *= airParticleDistanceOpacity;`))},s.customProgramCacheKey=()=>`${Ey}:${r}:${n!==void 0}`,{pointsMaterial:s,update:e=>{i.value=(i.value+e*t.speedMultiplier)%by.animationLoopSeconds}}}function Oy(e){return e.replace(xy,`${xy}\n${yy}`).replace(Sy,`${Sy}\ntransformed = animateAirParticle(transformed);`).replace(Cy,`${Cy}\ngl_Position = getAirParticleClipPosition(gl_Position, mvPosition.xyz);`)}function ky(e,t){return t===`square`?e:e.replace(xy,`${xy}\n${_y}`).replace(Ty,`${Ty}\ndiscardOutsideAirParticleCircle();`)}var Ay=3,jy=4294967296;function My({parameters:e,chunkSize:t,chunkSlotCount:n,surfaceYAt:r}){let i=e.density.particlesPerChunk,a=i*Ay,o=new Float32Array(a*n),s=new Float32Array(i*n),c=new B(o,Ay),l=new B(s,1);c.setUsage(N),l.setUsage(N);let u=new We;u.setAttribute(`position`,c),u.setAttribute(`airParticleVisible`,l);let d=Dy({appearance:e.appearance,motion:e.motion,streaming:e.streaming}),f=new b(u,d.pointsMaterial);return f.frustumCulled=!1,{points:f,material:d,particlesPerChunk:i,valuesPerChunk:a,chunkSize:t,surfaceYAt:r,renderedPositions:o,renderedVisibility:s,positionAttribute:c,visibilityAttribute:l}}function Ny(e,t){for(let n of t)Iy(e,n)}function Py(e,t){Iy(e,t);let n=t.slotIndex*e.particlesPerChunk,r=n*Ay;e.positionAttribute.addUpdateRange(r,e.valuesPerChunk),e.visibilityAttribute.addUpdateRange(n,e.particlesPerChunk),e.positionAttribute.needsUpdate=!0,e.visibilityAttribute.needsUpdate=!0}function Fy(e){e.points.geometry.dispose(),e.points.material.dispose()}function Iy(e,t){let n={assignment:t,firstParticleIndex:t.slotIndex*e.particlesPerChunk};for(let t=0;t<e.particlesPerChunk;t+=1)Ly(e,n,t)}function Ly(e,t,n){let{assignment:r}=t,i=Ry(r,n,0),a=Ry(r,n,1),o=Ry(r,n,2),s=t.firstParticleIndex+n,c=s*Ay,l=r.originX+i*e.chunkSize,u=r.originY+a*e.chunkSize,d=r.originZ+o*e.chunkSize;e.renderedPositions[c]=l,e.renderedPositions[c+1]=u,e.renderedPositions[c+2]=d;let f=e.surfaceYAt?e.surfaceYAt(l,d)+by.surfaceClearanceMeters:-1/0;e.renderedVisibility[s]=Number(u>=f)}function Ry(e,t,n){let r=Math.imul(e.chunkX,73856093);return r^=Math.imul(e.chunkZ,19349663),r^=Math.imul(e.chunkY,2971215073),r^=Math.imul(t+1,83492791),r^=Math.imul(n+1,1103515245),r=Math.imul(r^r>>>16,2246822519),r=Math.imul(r^r>>>13,3266489917),(r>>>0)/jy}function zy(e){let t={currentStream:void 0};return{load:()=>Vy(t,e),activate:()=>{By(t,e),Wy(t,!0)},update:n=>{By(t,e),Hy(t,e,n)},deactivate:()=>Wy(t,!1),unload:()=>Gy(t,e.scene)}}function By(e,t){if(!t.readPresence||!e.currentStream)return;let n=e.currentStream.particleCloud.material.pointsMaterial;n.transparent=!0,n.depthWrite=!1,n.opacity=t.readPresence()}function Vy(e,t){let{viewpoint:n,scene:r}=t,i=Ky(t);e.currentStream=i;let a=i.volumeWindow.update(n.worldPosition.x,n.worldPosition.y,n.worldPosition.z);Ny(i.particleCloud,a),i.particleCloud.points.visible=!1,r.add(i.particleCloud.points)}function Hy(e,{viewpoint:t,streamQueue:n},r){let i=e.currentStream;if(!i)return;i.particleCloud.material.update(r);let a=i.volumeWindow.update(t.worldPosition.x,t.worldPosition.y,t.worldPosition.z);for(let t of a){let r=Uy(e,i,t);r&&(n.enqueue(r)||Py(i.particleCloud,t))}}function Uy(e,t,n){let r=t.slotJobKeys[n.slotIndex];if(r)return{key:r,isCurrent:()=>e.currentStream===t&&t.volumeWindow.isCurrent(n),runStep:()=>(Py(t.particleCloud,n),!0)}}function Wy(e,t){let n=e.currentStream;n&&(n.particleCloud.points.visible=t)}function Gy(e,t){let n=e.currentStream;n&&(e.currentStream=void 0,t.remove(n.particleCloud.points),Fy(n.particleCloud))}function Ky({viewpoint:e,parameters:t,surfaceYAt:n}){let r=t.streaming;if(r&&(!Number.isFinite(r.viewDistanceMeters)||!Number.isFinite(r.fadeStartMeters)||r.fadeStartMeters<0||r.viewDistanceMeters<=r.fadeStartMeters))throw Error(`Air particle streaming requires an ordered finite fade range`);let i=r?.chunkLevel??by.volumeChunkLevel,a=uh(i),o=new fy({level:i,radius:Math.ceil((r?.viewDistanceMeters??e.viewDistanceMeters)/a)+by.preloadLayerCount});return{volumeWindow:o,particleCloud:My({parameters:t,chunkSize:a,chunkSlotCount:o.slotCount,surfaceYAt:n}),slotJobKeys:Array.from({length:o.slotCount},()=>({}))}}var qy=class{states=new Map;load(e){this.states.get(e)||(this.states.set(e,`inactive`),e.load())}warm(e){let t=this.states.get(e);t!==void 0&&t!==`warming`&&(t===`active`&&e.deactivate(),this.states.set(e,`warming`))}activate(e){let t=this.states.get(e);t!==void 0&&t!==`active`&&(e.activate(),this.states.set(e,`active`))}update(e){for(let[t,n]of this.states)n!==`inactive`&&t.update?.(e)}deactivate(e){let t=this.states.get(e);t!==void 0&&t!==`inactive`&&(t===`active`&&e.deactivate(),this.states.set(e,`inactive`))}unload(e){if(!this.states.has(e))return;let t=[];try{this.deactivate(e)}catch(e){t.push(e)}this.states.delete(e);try{e.unload()}catch(e){t.push(e)}if(t.length)throw AggregateError(t,`Module cleanup failed`)}},Jy={widthSegments:8,lengthSegments:24,smoothingSeconds:.15,maximumFrameSeconds:.25,minimumTravelMeters:1e-5,minimumCurvature:1e-5,maximumPreviewAngle:Math.PI/2,edgePosition:.8,edgeSoftness:.14,centerOpacity:.025,outerEdgeFade:4,rearFadePower:3,forwardFadePower:2},Yy=new U(0,0,-1),Xy=Jy.widthSegments+1;function Zy(e){return new Qy(e)}var Qy=class{options;road;previousPosition=new U;previousDirection=new U;hasPreviousFrame=!1;curvature=0;verticalCurvature=0;pathPoint=new U;pathSide=new U;constructor(e){this.options=e}load=()=>{if(this.road)return;let{parameters:e,scene:t}=this.options,n=eb(e);this.road=new Ye(n,$y(e)),this.road.name=`StartFlightGuidance`,this.road.visible=!1,t.add(this.road)};activate=()=>{this.hasPreviousFrame=!1,this.update(),this.road&&(this.road.visible=!0)};deactivate=()=>{this.road&&(this.road.visible=!1)};unload=()=>{this.road&&(this.road.removeFromParent(),this.road.geometry.dispose(),this.road.material.dispose(),this.road=void 0,this.hasPreviousFrame=!1)};update=(e=0)=>{if(!this.road)return;let{viewpoint:t,parameters:n}=this.options,r=t.worldFlightPosition??t.worldPosition;this.road.position.copy(r),this.road.position.y-=n.belowFlightMeters,this.readCurvature(e),this.updateRoad()};readCurvature(e){let{viewpoint:t,parameters:n}=this.options,r=t.worldFlightPosition??t.worldPosition,i=t.worldFlightDirection??Yy,a=Math.hypot(r.x-this.previousPosition.x,r.z-this.previousPosition.z);this.hasPreviousFrame&&e>0&&e<=Jy.maximumFrameSeconds&&a>Jy.minimumTravelMeters&&a<n.lengthMeters?this.smoothCurvature(a,e):this.curvature=this.verticalCurvature=0,this.previousPosition.copy(r),this.previousDirection.copy(i),this.hasPreviousFrame=!0}smoothCurvature(e,t){let{viewpoint:n}=this.options,r=n.worldFlightDirection??Yy,i=n.worldFlightPosition??n.worldPosition,a=this.previousDirection,o=Math.atan2(a.x*r.z-a.z*r.x,a.x*r.x+a.z*r.z),s=1-Math.exp(-t/Jy.smoothingSeconds),c=this.previousPosition.distanceTo(i);this.curvature+=(o/e-this.curvature)*s;let l=(r.y-a.y)/c;this.verticalCurvature+=(l-this.verticalCurvature)*s}samplePath(e,t){let{viewpoint:n,constrainFlightPosition:r}=this.options,i=n.worldFlightPosition??n.worldPosition,a=n.worldFlightDirection??Yy;this.sampleHorizontalArc(e,t),this.pathPoint.y=a.y*e+this.sampleVerticalBend(e),this.pathPoint.add(i),r(this.pathPoint),this.pathPoint.sub(i)}sampleHorizontalArc(e,t){let n=this.options.viewpoint.worldFlightDirection??Yy,r=Math.hypot(n.x,n.z),i=n.x/r,a=n.z/r,o=t*r*e,s=Math.sin(o),c=Math.cos(o),l=Math.abs(t)>Jy.minimumCurvature,u=l?s/t:r*e,d=l?(1-c)/t:0;this.pathPoint.set(i*u-a*d,0,a*u+i*d),this.pathSide.set(-a*c-i*s,0,i*c-a*s)}sampleVerticalBend(e){let{lengthMeters:t,verticalBendMeters:n}=this.options.parameters;return Math.max(-n,Math.min(n,this.verticalCurvature*t**2/2))*(e/t)**2}updateRoad(){if(!this.road)return;let{parameters:e}=this.options,t=this.road.geometry.getAttribute(`position`),n=this.road.geometry.getAttribute(`uv`),r=Math.max(-1/e.widthMeters,Math.min(1/e.widthMeters,this.curvature)),i=this.readMaximumDistance(r);for(let a=0;a<t.count;a+=Xy){let t=n.getY(a)*(e.lengthMeters+e.behindMeters)-e.behindMeters,o=t<0?e.behindMeters:e.lengthMeters;this.samplePath(t*Math.min(1,i/o),r),this.updateRoadRow(a)}t.needsUpdate=!0,this.road.geometry.computeBoundingSphere()}readMaximumDistance(e){let t=this.options.viewpoint.worldFlightDirection??Yy;return Jy.maximumPreviewAngle/Math.max(Math.abs(e)*Math.hypot(t.x,t.z),Jy.minimumCurvature)}updateRoadRow(e){if(!this.road)return;let t=this.road.geometry.getAttribute(`position`),n=this.road.geometry.getAttribute(`uv`);for(let r=e;r<e+Xy;r++){let e=(n.getX(r)-.5)*this.options.parameters.widthMeters;t.setXYZ(r,this.pathPoint.x+this.pathSide.x*e,this.pathPoint.y,this.pathPoint.z+this.pathSide.z*e)}}};function $y(e){return new z({color:e.color,opacity:e.opacity,vertexColors:!0,transparent:!0,depthWrite:!1,side:2,forceSinglePass:!0})}function eb(e){let{widthMeters:t,lengthMeters:n,behindMeters:r}=e,i=new oe(t,n+r,Jy.widthSegments,Jy.lengthSegments);i.rotateX(-Math.PI/2).translate(0,0,(r-n)/2);let a=i.getAttribute(`position`);return i.setAttribute(`color`,tb(a,e)),a.setUsage(N),i}function tb(e,t){let n=new A(e.count*4,4);for(let r=0;r<e.count;r++){let i=Math.abs(e.getX(r))/(t.widthMeters/2),a=nb(e.getZ(r),t),o=Math.exp(-(((i-Jy.edgePosition)/Jy.edgeSoftness)**2)),s=(Jy.centerOpacity+o)*Math.min(1,(1-i)*Jy.outerEdgeFade)*a;n.setXYZW(r,1,1,1,s)}return n}function nb(e,t){let n=e>0?t.behindMeters:t.lengthMeters,r=Math.min(1,Math.abs(e)/n);return e>0?(1-r)**Jy.rearFadePower:(1-r*r)**Jy.forwardFadePower}var rb=new U(0,1,0);function ib(e,t){let n=new U,r=new U;e.route.sample(e.route.lengthMeters,n),e.route.sampleDirection(e.route.lengthMeters,r),n.applyAxisAngle(rb,e.pose.yawRadians).add(e.pose.position),r.applyAxisAngle(rb,e.pose.yawRadians);let i=Math.atan2(-r.x,-r.z),a=new U;return t.sample(0,a),n.sub(a.applyAxisAngle(rb,i)),{position:n,yawRadians:i}}function ab(e){let t;return{begin(e){t=e},append(n){if(!t)throw Error(`Begin the flight course before appending`);let r={route:n,pose:e(t,n)};return t=r,r},clear(){t=void 0}}}var ob={spacingMeters:2,maximumSegments:256},sb=new U(0,1,0);function cb(e,t,n){let r=lb(e);return r.points.unshift(new U().copy(t)),new ub(r,t,n)}function lb(e){let t=Math.ceil(e.route.lengthMeters/ob.spacingMeters);if(t>ob.maximumSegments)throw RangeError(`Deviation route exceeds capacity`);let n=[],r=[];for(let i=0;i<=t;i++){let t=Math.min(i*ob.spacingMeters,e.route.lengthMeters),a=new U;e.route.sample(t,a),a.applyAxisAngle(sb,e.pose.yawRadians).add(e.pose.position),n.push(a),t>=e.route.exerciseStartMeters&&t<=e.route.exerciseEndMeters&&r.push(a)}return{points:n,ringArea:r}}var ub=class{samples;parameters;previous=new U;segment=new Et;closest=new U;relative=new U;outsideMeters=0;nearestIndex=0;constructor(e,t,n){this.samples=e,this.parameters=n,this.previous.copy(t)}update=(e,t)=>{let n=this.previous.distanceTo(e);if(this.previous.copy(e),n===0)return!1;let r=this.distanceToRoute(e)>this.parameters.distanceMeters&&this.isDeparting(e,t)&&!this.isVisible(t);return this.outsideMeters=r&&n<=this.parameters.maximumStepMeters?this.outsideMeters+n:0,this.outsideMeters>=this.parameters.outsideTravelMeters};distanceToRoute(e){let t=1/0;for(let n=1;n<this.samples.points.length;n++){let r=this.samples.points[n-1],i=this.samples.points[n];if(!r||!i)continue;this.segment.set(r,i).closestPointToPoint(e,!0,this.closest);let a=this.closest.distanceTo(e);a>=t||(t=a,this.nearestIndex=n)}return t}isDeparting(e,t){let n=t.worldFlightDirection;if(!n||n.lengthSq()===0)return!1;let r=Math.ceil(this.parameters.lookAheadMeters/ob.spacingMeters),i=this.samples.points[Math.min(this.nearestIndex+r,this.samples.points.length-1)];return i?(this.relative.subVectors(i,e).normalize(),this.relative.dot(n)/n.length()<Math.cos(this.parameters.directionDifferenceRadians)):!1}isVisible(e){let t=this.parameters.visibilityPaddingMeters;return this.samples.ringArea.some(n=>{this.relative.subVectors(n,e.worldPosition);let r=this.relative.length();if(r<=t)return!0;if(r-t>e.viewDistanceMeters)return!1;let i=e.viewHalfAngleRadians+Math.asin(t/r);return this.relative.dot(e.worldDirection)/r>=Math.cos(Math.min(Math.PI,i))})}},db=new U(0,1,0);function fb(e,t){let n=Math.hypot(t.x,t.z),r=n>0?t.y/n:0;return{lengthMeters:e,exerciseStartMeters:e,exerciseEndMeters:e,sample(t,n){let i=Math.max(0,Math.min(t,e));n.set(0,r*(t-i**2/(2*e)),-t)},sampleDirection(t,n){n.set(0,r*(1-Math.max(0,Math.min(1,t/e))),-1).normalize()}}}function pb(e,t){let n=new U().subVectors(t.pose.position,e.pose.position).applyAxisAngle(db,-e.pose.yawRadians),r=t.pose.yawRadians-e.pose.yawRadians,i=e.route.lengthMeters;return{pose:e.pose,route:{lengthMeters:i+t.route.lengthMeters,exerciseStartMeters:i+t.route.exerciseStartMeters,exerciseEndMeters:i+t.route.exerciseEndMeters,sample(a,o){if(a<i)return e.route.sample(a,o);t.route.sample(a-i,o),o.applyAxisAngle(db,r).add(n)},sampleDirection(n,a){if(n<i)return e.route.sampleDirection(n,a);t.route.sampleDirection(n-i,a),a.applyAxisAngle(db,r)}}}}function mb(e){return new hb(e)}var hb=class{options;cloud;material;frontMeters=0;incomingMeters=0;routeEndMeters=0;readContinuationMeters=()=>Math.max(0,this.frontMeters-this.routeEndMeters);readRevealMeters=()=>this.options.growth?this.frontMeters-this.options.growth.softEdgeMeters:1/0;isRevealed=()=>!this.options.growth||this.frontMeters>=this.routeEndMeters+this.options.growth.softEdgeMeters;fadeSeconds=0;fadeDuration=0;revealDuration=0;revealElapsed=0;fadeStartOpacity=1;constructor(e){this.options=e}load=()=>{this.cloud||(this.material=this.options.createMaterial(),this.cloud=new b(new We,this.material.pointsMaterial),this.cloud.name=`StartFlightPath`,this.cloud.visible=!1)};activate=()=>{this.deactivate()};deactivate=()=>{this.cloud&&(this.cloud.visible=!1),this.cloud?.removeFromParent(),this.fadeDuration=0};unload=()=>{this.cloud&&(this.deactivate(),this.cloud.geometry.dispose(),this.cloud.material.dispose(),this.cloud=void 0,this.material=void 0)};isVisible=()=>this.cloud?.visible??!1;show=(e,t,n={})=>{if(!this.cloud)throw Error(`Load the flight path before showing geometry`);this.cloud.geometry.dispose(),this.cloud.geometry=e,this.incomingMeters=n.incomingMeters??0,this.resetGrowth(e),this.cloud.position.copy(t.position),this.cloud.position.y-=this.options.belowFlightMeters,this.cloud.rotation.y=t.yawRadians,this.revealDuration=n.fadeSeconds??0,this.revealElapsed=0,this.cloud.material.opacity=this.revealDuration>0?0:(this.options.opacity??1)*(this.options.readPresence?.()??1),this.cloud.visible=!0,this.fadeDuration=0,this.options.scene.add(this.cloud)};resetGrowth(e){let t=e.getAttribute(`routeDistance`);this.routeEndMeters=t?t.getX(e.drawRange.count===1/0?t.count-1:e.drawRange.count-1):0,this.frontMeters=0,this.material?.setRevealMeters?.(this.incomingMeters)}retire=e=>{this.fadeDuration=e,this.fadeSeconds=0,this.fadeStartOpacity=this.cloud?.material.opacity??1,e<=0&&this.deactivate()};update=e=>{if(this.options.growth&&this.fadeDuration<=0&&(this.frontMeters=Math.min(this.routeEndMeters+this.options.growth.softEdgeMeters,this.frontMeters+Math.max(0,e)*this.options.growth.speedMetersPerSecond),this.material?.setRevealMeters?.(this.frontMeters+this.incomingMeters)),this.material?.update(e),this.cloud){if(this.fadeDuration<=0){this.updateReveal(e);return}this.fadeSeconds+=e,this.cloud.material.opacity=Math.max(0,this.fadeStartOpacity*(1-this.fadeSeconds/this.fadeDuration)),this.fadeSeconds>=this.fadeDuration&&this.deactivate()}};updateReveal(e){this.cloud&&(this.revealElapsed+=e,this.cloud.material.opacity=(this.options.opacity??1)*(this.revealDuration>0?Math.min(1,this.revealElapsed/this.revealDuration):1)*(this.options.readPresence?.()??1))}},gb=new U(0,0,-1);function _b(e,t,n){let r=e.worldFlightDirection??gb,i=new U().copy(r);i.lengthSq()===0&&i.copy(gb);let a=new U().copy(e.worldFlightPosition??e.worldPosition);a.addScaledVector(i.normalize(),t),n(a);let o=Math.hypot(r.x,r.z)>0?r:gb;return{position:a,yawRadians:Math.atan2(-o.x,-o.z)}}function vb(e,t){Sb(e);let n=xb(e.turnRadiusMeters,t),r=xb(e.turnDegrees,t+1)*Math.PI/180,i=r*(e.turnPlane===`vertical`?2:1),a=e.straightMeters+n*i;return{lengthMeters:a+e.outroMeters,exerciseStartMeters:e.straightMeters,exerciseEndMeters:a,sample:(t,i)=>yb({parameters:e,radius:n,angle:r},t,i),sampleDirection:(t,r)=>{let a=Math.min(i,Math.max(0,t-e.straightMeters)/n),o=e.turnPlane===`vertical`,s=o?Math.min(a,i-a):a;r.set(o?0:e.turnSign*Math.sin(s),o?e.turnSign*Math.sin(s):0,-Math.cos(s))}}}function yb(e,t,n){let{parameters:r,radius:i,angle:a}=e;if(r.turnPlane===`vertical`){bb(e,t,n);return}let o=Math.min(a,Math.max(0,t-r.straightMeters)/i),s=Math.max(0,t-r.straightMeters-i*a);n.set(r.turnSign*(i*(1-Math.cos(o))+s*Math.sin(a)),0,-r.leadMeters-Math.min(t,r.straightMeters)-i*Math.sin(o)-s*Math.cos(a))}function bb(e,t,n){let{parameters:r,radius:i,angle:a}=e,o=Math.min(2*a,Math.max(0,t-r.straightMeters)/i),s=o>a,c=s?2*a-o:o,l=i*(s?1-2*Math.cos(a)+Math.cos(c):1-Math.cos(c)),u=i*(s?2*Math.sin(a)-Math.sin(c):Math.sin(c)),d=Math.max(0,t-r.straightMeters-2*i*a);n.set(0,r.turnSign*l,-r.leadMeters-Math.min(t,r.straightMeters)-u-d)}function xb(e,t){let n=((Math.imul(t,1597334677)^3812015801)>>>0)/4294967296;return e.from+(e.to-e.from)*n}function Sb(e){if([e.leadMeters,e.straightMeters,e.outroMeters].some(e=>!Number.isFinite(e)||e<0))throw RangeError(`Route entry and exit lengths must be finite and nonnegative`);if(Cb(e.turnRadiusMeters,Number.MIN_VALUE,1/0),Cb(e.turnDegrees,0,e.turnPlane===`vertical`?45:360),e.turnSign!==-1&&e.turnSign!==1)throw RangeError(`Turn direction must be -1 (left) or 1 (right)`)}function Cb(e,t,n){if(!Number.isFinite(e.from)||!Number.isFinite(e.to)||e.from<t||e.to>n||e.to<e.from)throw RangeError(`Invalid route parameter range`)}var wb=1e5;function Tb(e){return new Db(e)}function Eb(e){let t=new We;for(let[n,r]of Object.entries({position:3,routeDistance:1,color:3,pathParticleSize:1,airParticleVisible:1}))t.setAttribute(n,new A(e*r,r));return t.setDrawRange(0,0),t}var Db=class{options;geometry;bounds=new w().makeEmpty();offset=0;distance=0;sliceIndex=0;transferred=!1;cancelled=!1;finished=!1;constructor(e){this.options=e;let t=Math.ceil(e.route.lengthMeters*e.maximumDensity);if(!Number.isFinite(t)||t<0||t>wb||!Number.isFinite(e.metersPerStep)||e.metersPerStep<=0)throw RangeError(`Invalid particle generation budget`);this.geometry=Eb(t)}isReady=()=>this.finished&&!this.cancelled;step=()=>{if(this.cancelled||this.finished)return!0;let e=this.distance,t=Math.min(this.options.metersPerStep,this.options.route.lengthMeters-e),n=this.options.createSlice({lengthMeters:t,sample:(t,n)=>this.options.route.sample(e+t,n)},this.sliceIndex++);try{this.appendSlice(n)}finally{n.dispose()}return this.distance+=t,this.distance>=this.options.route.lengthMeters&&this.finish(),this.finished};appendSlice(e){let t=e.getAttribute(`position`).count;for(let t of Object.keys(this.geometry.attributes)){let n=this.geometry.getAttribute(t);n.array.set(e.getAttribute(t).array,this.offset*n.itemSize)}let n=this.geometry.getAttribute(`routeDistance`);for(let e=this.offset;e<this.offset+t;e++)n.setX(e,n.getX(e)+this.distance);e.boundingSphere||e.computeBoundingSphere(),e.boundingSphere&&this.bounds.union(e.boundingSphere),this.offset+=t}finish(){this.geometry.setDrawRange(0,this.offset),this.geometry.boundingSphere=this.bounds.clone(),this.finished=!0}takeGeometry=()=>{if(!this.isReady()||this.transferred)throw Error(`Particle geometry is not available`);return this.transferred=!0,this.geometry};dispose=()=>{this.cancelled||this.transferred||(this.cancelled=!0,this.geometry.dispose())}},Ob={sectionMeters:1,maximumParticles:1e5,material:{appearance:{color:16777215,sizeMeters:1,shape:`circle`},motion:{horizontalAmplitudeMeters:.12,verticalAmplitudeMeters:.16,speedMultiplier:.65},streaming:{chunkLevel:0,viewDistanceMeters:96,fadeStartMeters:72}}};function kb(e,t){Ib(e,t);let n=jb(e,t),r=new We,i={position:new A(n.positions,3),routeDistance:new A(n.distances,1),color:new A(n.colors,3),pathParticleSize:new A(n.sizes,1),airParticleVisible:new A(n.sizes.map(()=>1),1)};for(let[e,t]of Object.entries(i))r.setAttribute(e,t);return Ab(r),r}function Ab(e){e.computeBoundingSphere();let t=Ob.material.motion;e.boundingSphere&&(e.boundingSphere.radius+=Math.hypot(t.horizontalAmplitudeMeters,t.verticalAmplitudeMeters))}function jb(e,t){let n=[],r=[],i=[],a=Fb(t.seed),o=new U,s=new L,c=new L(t.color.from),l=new L(t.color.to),u=Mb(e.lengthMeters,t.densityPerMeter,a);for(let d of u)e.sample(d,o),Nb(o,t.spreadMeters,a),n.push(o.x,o.y,o.z),s.lerpColors(c,l,a()),r.push(s.r,s.g,s.b),i.push(Pb(t.sizeMeters,a));return{positions:n,colors:r,sizes:i,distances:u}}function Mb(e,t,n){let r=[],i=Math.ceil(e/Ob.sectionMeters);for(let a=0;a<i;a++){let i=a*Ob.sectionMeters,o=Math.min(Ob.sectionMeters,e-i),s=Math.floor(Pb(t,n)*o);for(let e=0;e<s;e++)r.push(i+(e+.5)/s*o)}return r}function Nb(e,t,n){e.x+=(n()+n()-1)*t,e.y+=(n()+n()-1)*t,e.z+=(n()+n()-1)*t}function Pb(e,t){return e.from+(e.to-e.from)*t()}function Fb(e){return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function Ib(e,t){if(Rb(t.densityPerMeter,`densityPerMeter`),Rb(t.sizeMeters,`sizeMeters`),t.sizeMeters.from===0)throw RangeError(`Particle size must be positive`);for(let e of[t.color.from,t.color.to])if(!Number.isInteger(e)||e<0||e>16777215)throw RangeError(`Particle colors must be sRGB hex values`);if(!Number.isFinite(t.spreadMeters)||t.spreadMeters<0||!Number.isInteger(t.seed))throw RangeError(`Invalid particle scatter or seed`);Lb(e.lengthMeters,t.densityPerMeter.to)}function Lb(e,t){if(!Number.isFinite(e)||e<0||Math.ceil(e/Ob.sectionMeters)>Ob.maximumParticles||e*t>Ob.maximumParticles)throw RangeError(`Particle route exceeds the bounded generation budget`)}function Rb(e,t){if(!Number.isFinite(e.from)||!Number.isFinite(e.to)||e.from<0||e.to<e.from)throw RangeError(`Invalid particle range: ${t}`)}function zb(e){let t=e(Ob.material),n=t.pointsMaterial,r=n.onBeforeCompile.bind(n),i=n.customProgramCacheKey();return n.vertexColors=!0,n.onBeforeCompile=(e,t)=>{r(e,t),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float pathParticleSize;`).replace(`gl_PointSize = size;`,`gl_PointSize = size * pathParticleSize;`)},n.customProgramCacheKey=()=>`${i}:path-particle-size-v1`,t}function Bb(e,t){let n={value:0},r=e.pointsMaterial.onBeforeCompile.bind(e.pointsMaterial),i=e.pointsMaterial.customProgramCacheKey();return e.pointsMaterial.onBeforeCompile=(e,i)=>{r(e,i),e.uniforms.pathRevealFront=n,e.uniforms.pathRevealWidth={value:t},e.vertexShader=Vb(e.vertexShader),e.fragmentShader=Hb(e.fragmentShader)},e.pointsMaterial.customProgramCacheKey=()=>`${i}:growing-route-v2`,{...e,setRevealMeters:e=>{n.value=e}}}function Vb(e){return e.replace(`transformed = animateAirParticle(transformed);`,`vec3 restingWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
      vec3 worldWind = animateAirParticle(restingWorld) - restingWorld;
      transformed += vec3(dot(modelMatrix[0].xyz, worldWind),
        dot(modelMatrix[1].xyz, worldWind), dot(modelMatrix[2].xyz, worldWind));`).replace(`#include <common>`,`#include <common>
attribute float routeDistance; varying float pathDistance;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
pathDistance = routeDistance;`)}function Hb(e){return e.replace(`#include <common>`,`#include <common>
varying float pathDistance; uniform float pathRevealFront; uniform float pathRevealWidth;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
diffuseColor.a *= smoothstep(0.0, pathRevealWidth, pathRevealFront - pathDistance);`)}function Ub(e){if(!Number.isFinite(e)||e<=0)throw RangeError(`Arrow length must be positive`);let t=[[-.5,0,.5,0],[.18,.22,.5,0],[.18,-.22,.5,0]].map(([t=0,n=0,r=0,i=0])=>({x:t*e,y:n*e,dx:(r-t)*e,dy:(i-n)*e,length:Math.hypot(r-t,i-n)*e}));return{lengthMeters:t.reduce((e,t)=>e+t.length,0),sample(n,r){for(let e of t){if(n<=e.length){let t=Math.max(0,n/e.length);r.set(e.x+e.dx*t,e.y+e.dy*t,0);return}n-=e.length}r.set(e*.5,0,0)}}}var Wb={maximumPairs:12,tangentSampleMeters:2,curvatureEpsilon:1e-4};function Gb(e,t){Jb(t),Yb(e,t);let n=[],r=new U(1,0,0);for(let i=0;i<t.ringCount;i++){let a=Math.max(t.firstMeters,e.exerciseStartMeters)+i*t.spacingMeters;if(n.push(Kb(e,a,`ring`)),t.showArrows===!1)continue;let o=a+t.spacingMeters*t.arrowPhaseFraction;if(o<e.exerciseStartMeters||o>e.exerciseEndMeters)continue;r=qb(e,o,r);let s=Kb(e,o,`arrow`);s.position.addScaledVector(r,t.arrowOffsetMeters),n.push(s)}return n}function Kb(e,t,n){let r=new U,i=new U;return e.sample(t,r),e.sampleDirection(t,i),{kind:n,position:r,direction:i,routeDistanceMeters:t}}function qb(e,t,n){let r=new U,i=new U;e.sampleDirection(Math.max(0,t-Wb.tangentSampleMeters),r),e.sampleDirection(Math.min(e.lengthMeters,t+Wb.tangentSampleMeters),i);let a=i.sub(r),o=new U;return e.sampleDirection(t,o),a.addScaledVector(o,-a.dot(o)),a.lengthSq()>Wb.curvatureEpsilon?a.normalize().negate():n}function Jb(e){if(!Number.isFinite(e.spacingMeters)||!Number.isFinite(e.firstMeters)||e.spacingMeters<=0||e.firstMeters<0||!Number.isFinite(e.arrowPhaseFraction)||e.arrowPhaseFraction<0||e.arrowPhaseFraction>=1)throw RangeError(`Invalid element spacing`)}function Yb(e,t){if(!Number.isInteger(t.ringCount)||t.ringCount<0||t.ringCount>Wb.maximumPairs)throw RangeError(`Ring count must be an integer between 0 and 12`);if(t.ringCount!==0&&Math.max(t.firstMeters,e.exerciseStartMeters)+(t.ringCount-1)*t.spacingMeters>e.exerciseEndMeters)throw RangeError(`Ring count and spacing exceed the exercise length; reduce count/spacing or increase turn radius/angle`)}function Xb(e){return new Zb(e)}var Zb=class{settings;presence;bounds=[];relative=new U;direction=new U;mode;remainingSeconds=0;constructor(e){this.settings=e,this.presence=new Float32Array(e.capacity)}reset=e=>{if(e.length>this.presence.length)throw RangeError(`Retirement capacity exceeded`);this.bounds=e.map(e=>({center:new U().copy(e.center),radius:e.radius})),this.presence.fill(1),this.mode=void 0,this.remainingSeconds=0};request=(e=`completed`,t=this.settings.dissolveSeconds)=>{this.mode!==`abandoned`&&(this.mode=e,this.remainingSeconds=Math.max(0,t))};update=(e,t)=>{if(this.mode===`abandoned`){this.fadeCourse(e);return}if(!this.mode||t.direction.lengthSq()===0)return;this.direction.copy(t.direction).normalize();let n=this.settings.dissolveSeconds>0?Math.max(0,e)/this.settings.dissolveSeconds:1;this.bounds.forEach((e,r)=>{this.relative.subVectors(e.center,t.position).dot(this.direction)+e.radius>=-this.settings.clearanceMeters||(this.presence[r]=Math.max(0,(this.presence[r]??0)-n))})};fadeCourse(e){let t=Math.min(Math.max(0,e),this.remainingSeconds),n=this.remainingSeconds>0?1-t/this.remainingSeconds:0;this.presence.forEach((e,t)=>{this.presence[t]=e*n}),this.remainingSeconds-=t}isFinished=()=>this.mode!==void 0&&this.bounds.every((e,t)=>this.presence[t]===0)};function Qb(e,t,n){let{distanceMeters:r,aboveMeters:i,sideMeters:a}=n,o=t.find(e=>e.kind===`ring`);if(!o)return;$b(n,o.routeDistanceMeters);let s=new U;e.sample(r,s);let c=new U;return e.sampleDirection(r,c),s.addScaledVector(new U(-c.z,0,c.x).normalize(),a),s.y+=i,{kind:`arrow`,position:s,direction:new U().subVectors(o.position,s).normalize(),routeDistanceMeters:r}}function $b(e,t){let{distanceMeters:n,aboveMeters:r,sideMeters:i}=e;if(!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(n)||n<0||n>=t)throw RangeError(`Entry arrow must precede the first gate on the route`)}function ex(e){let t=0,n=0;return{reset:()=>{t=0,n=0},reveal:()=>{n=1},dissolve:()=>{n=0},update:r=>{let i=n?e.revealSeconds:e.dissolveSeconds,a=i>0?Math.max(0,r)/i:1;return t+=Math.sign(n-t)*Math.min(Math.abs(n-t),a),t*t*(3-2*t)},isFinished:()=>n===0&&t===0}}function tx(e){return new nx(e)}var nx=class{settings;presence;elapsed;distances=[];time=0;origin=0;cancelled=!1;constructor(e){if(this.settings=e,!Number.isInteger(e.capacity)||e.capacity<1||!Number.isFinite(e.fadeSeconds)||e.fadeSeconds<=0||!Number.isFinite(e.speedMetersPerSecond)||e.speedMetersPerSecond<=0)throw RangeError(`Invalid element reveal settings`);this.presence=new Float32Array(e.capacity),this.elapsed=new Float32Array(e.capacity)}reset=e=>{if(e.length>this.settings.capacity)throw RangeError(`Reveal capacity exceeded`);this.distances=[...e],this.origin=Math.min(...e),this.time=0,this.cancelled=!1,this.presence.fill(0),this.elapsed.fill(0)};update=(e,t)=>{this.cancelled||(this.time+=Math.max(0,e),this.distances.forEach((n,r)=>{if(t<n||this.time<(n-this.origin)/this.settings.speedMetersPerSecond)return;this.elapsed[r]=(this.elapsed[r]??0)+Math.max(0,e);let i=Math.min(1,(this.elapsed[r]??0)/this.settings.fadeSeconds);this.presence[r]=i*i*(3-2*i)}))};cancel=()=>{this.cancelled=!0}},rx=new U(0,1,0),ix=new U(1,0,0),ax=12.9898,ox=2e4,sx=16;function cx(e){return new lx(e)}var lx=class{options;cloud;material;targets=new Float32Array;readFront=()=>1/0;scatter=new Float32Array;constructor(e){if(this.options=e,!Number.isInteger(e.grainsPerSample)||e.grainsPerSample<1||e.grainsPerSample>sx)throw RangeError(`Invalid grain budget`)}load=()=>{this.cloud||(this.material=this.options.createMaterial(),this.cloud=new b(new We,this.material.pointsMaterial),this.cloud.name=`StartParticleElements`,this.cloud.visible=!1,this.cloud.frustumCulled=!1)};activate=()=>{this.deactivate()};deactivate=()=>{this.options.animation.reset(),this.options.reveal?.reset([]),this.options.light.reset(0),this.options.retirement.reset([]),this.cloud&&(this.cloud.visible=!1),this.cloud?.removeFromParent()};unload=()=>{this.deactivate(),this.cloud?.geometry.dispose(),this.material?.pointsMaterial.dispose(),this.cloud=void 0,this.material=void 0,this.targets=new Float32Array,this.scatter=new Float32Array,this.options.simulation.reset(this.targets)};show=(e,t,n=()=>1/0)=>{if(!this.cloud)throw Error(`Load particle elements before showing them`);if(e.length===0){this.deactivate();return}this.readFront=n,this.options.reveal?.reset(e.map(e=>e.placement.routeDistanceMeters));let r=this.createGeometry(e,t);this.cloud.geometry.dispose(),this.cloud.geometry=r,this.targets=new Float32Array(r.getAttribute(`elementCenter`).array),this.scatter=this.targets.map((e,t)=>Math.sin(t*ax)*this.options.animationSettings.scatterMeters),this.options.simulation.reset(this.targets),this.options.light.reset(e.length),this.options.animation.reveal(),this.material&&(this.material.pointsMaterial.opacity=0),this.cloud.visible=!0,this.options.scene.add(this.cloud)};createGeometry(e,t){let n=[];try{if(e.forEach((e,r)=>{n.push(this.placeGeometry(e,t,r))}),n.reduce((e,t)=>e+t.getAttribute(`position`).count,0)>ox)throw RangeError(`Element particle budget exceeded`);let r=wa(n);if(!r)throw Error(`Incompatible element particle attributes`);try{return this.resetRetirement(n),this.createGrains(r)}finally{r.dispose()}}finally{for(let e of n)e.dispose()}}resetRetirement(e){this.options.retirement.reset(e.map(e=>{if(e.computeBoundingSphere(),!e.boundingSphere)throw Error(`Missing element bounds`);return e.boundingSphere}))}createGrains(e){let t=new x,n=e.getAttribute(`position`).count;t.instanceCount=this.options.grainsPerSample,t.setAttribute(`position`,new A(n*3,3));let r=new Float32Array(this.options.grainsPerSample);for(let e=0;e<r.length;e++)r[e]=e;t.setAttribute(`grainIndex`,new Ee(r,1));for(let[n,r]of Object.entries(e.attributes)){let e=new A(new Float32Array(r.array),r.itemSize);n===`position`&&e.setUsage(N),t.setAttribute(n===`position`?`elementCenter`:n,e)}return t}placeGeometry(e,t,n){let r=this.options.createGeometry(e.shape,e.placement.kind);this.tagGeometry(r,n);let{placement:i}=e;return r.applyQuaternion(new Ht().setFromUnitVectors(ix,i.direction)),r.translate(i.position.x,i.position.y,i.position.z),r.applyQuaternion(new Ht().setFromAxisAngle(rx,t.yawRadians)),r.translate(t.position.x,t.position.y-this.options.belowFlightMeters,t.position.z),r}tagGeometry(e,t){e.computeBoundingBox();let n=e.getAttribute(`position`),r=e.boundingBox?.min.x??0,i=Math.max(.001,(e.boundingBox?.max.x??0)-r),a=new Float32Array(n.count);for(let e=0;e<a.length;e++)a[e]=(n.getX(e)-r)/i;e.setAttribute(`elementAxis`,new A(a,1)),e.setAttribute(`elementIndex`,new A(new Float32Array(n.count).fill(t),1))}isVisible=()=>this.cloud?.visible??!1;dissolve=(e=`completed`,t)=>{this.options.reveal?.cancel(),this.options.retirement.request(e,t)};update=e=>{if(!this.cloud?.visible||!this.material)return;this.options.retirement.update(e,{position:this.options.readPosition(),direction:this.options.readDirection()}),this.options.reveal?.update(e,this.readFront());let t=this.options.animation.update(e);this.material.pointsMaterial.opacity=t*(this.options.readPresence?.()??1),this.material.update(e);let n=this.options.simulation.update(e,this.options.readPosition());this.updatePositions(n,t),this.options.retirement.isFinished()&&this.deactivate()};updatePositions(e,t){if(!this.cloud)return;let n=this.cloud.geometry.getAttribute(`elementCenter`),r=this.cloud.geometry.getAttribute(`elementIndex`),i=n.array;for(let n=0;n<i.length;n++){let a=this.options.reveal?.presence[r.getX(Math.floor(n/3))]??t;i[n]=(this.targets[n]??0)+(e[n]??0)+(this.scatter[n]??0)*(1-a)}n.needsUpdate=!0}};function ux(e){return new dx(e)}var dx=class{settings;elapsedSeconds=0;pulses=[];cycles=[];readPulses=()=>this.pulses;passedAt=[];frames=[];constructor(e){this.settings=e}reset=e=>{if(!Number.isInteger(e)||e<0||e>this.settings.capacity)throw RangeError(`Element light capacity exceeded`);this.elapsedSeconds=0,this.pulses=Array(e).fill(0),this.cycles=Array(e).fill(-1),this.passedAt=Array(e).fill(1/0),this.frames=Array.from({length:e},()=>({head:-1,strength:0}))};pass=e=>{this.passedAt[e]===1/0&&(this.passedAt[e]=this.elapsedSeconds,this.pulses[e]=(this.pulses[e]??0)+1)};update=e=>(this.elapsedSeconds+=Math.max(0,e),this.frames.forEach((e,t)=>{this.updateFrame(e,t)}),this.frames);updatePulse(e){let t=e*this.settings.staggerSeconds%this.settings.periodSeconds,n=Math.floor((this.elapsedSeconds-t)/this.settings.periodSeconds);n<0||n===this.cycles[e]||(this.cycles[e]=n,this.pulses[e]=(this.pulses[e]??0)+1)}updateFrame(e,t){let n=this.settings,r=this.elapsedSeconds-(this.passedAt[t]??1/0),i=r>=0;i||this.updatePulse(t);let a=i?r:(this.elapsedSeconds+n.periodSeconds-t*n.staggerSeconds%n.periodSeconds)%n.periodSeconds,o=i?n.flashSeconds:n.sweepSeconds;e.head=-n.bandWidth+a/o*(1+2*n.bandWidth),e.strength=i?1:n.guideStrength}};function fx(e){return new px(e)}var px=class{settings;targets=new Float32Array;offsets=new Float32Array;velocities=new Float32Array;active=new Uint8Array;damping=1;hasImpulse=!1;previous;segment=new Et;movement=new U;particle=new U;nearest=new U;constructor(e){this.settings=e}reset=e=>{this.targets=e,this.offsets=new Float32Array(e.length),this.velocities=new Float32Array(e.length),this.active=new Uint8Array(e.length/3),this.previous=void 0};update=(e,t)=>{let n=Math.min(Math.max(0,e),this.settings.maximumDeltaSeconds);this.segment.start.copy(this.previous??t),this.segment.end.copy(t),this.movement.subVectors(t,this.segment.start),(this.movement.length()>this.settings.maximumStepMeters||n===0)&&this.movement.set(0,0,0),this.hasImpulse=this.movement.lengthSq()>0,this.damping=Math.exp(-this.settings.damping*n),this.previous??=new U,this.previous.copy(t);for(let e=0;e<this.targets.length;e+=3)this.updateParticle(e,n);return this.offsets};updateParticle(e,t){let n=e/3;if(!this.hasImpulse&&!this.active[n])return;let r=this.hasImpulse?this.sampleInfluence(e):0;if(!(r===0&&!this.active[n])){this.active[n]=1;for(let n=0;n<3;n++){let i=e+n,a=this.movement.getComponent(n)*r*this.settings.impulse,o=((this.velocities[i]??0)+a-(this.offsets[i]??0)*this.settings.spring*t)*this.damping;this.velocities[i]=o,this.offsets[i]=Math.max(-this.settings.maximumOffsetMeters,Math.min(this.settings.maximumOffsetMeters,(this.offsets[i]??0)+o*t))}}}sampleInfluence(e){return this.particle.fromArray(this.targets,e),this.segment.closestPointToPoint(this.particle,!0,this.nearest),Math.max(0,1-this.particle.distanceTo(this.nearest)/this.settings.radiusMeters)}},mx=`// Individual dust grains use a restrained spherical shading cue and soft edges.
uniform float elementRelief;
varying float volumeOpacity;
uniform vec3 elementLightColor;
uniform float elementLightGain;
uniform float elementGlintStrength;
varying float grainLight;
varying float grainGlass;

// Preserve the authored hue; only small glass highlights approach white.
vec3 illuminateGrain(vec3 pigment, vec3 normal) {
  float glint = pow(max(0.0, dot(normal, normalize(vec3(-0.35, 0.45, 0.82)))), 24.0);
  float intensity = clamp(grainLight * elementLightGain, 0.0, 1.0);
  return mix(pigment, elementLightColor, intensity)
    + vec3(glint * grainGlass * grainLight * elementGlintStrength);
}

vec4 shadeElementGrain(vec4 pigment) {
  vec2 disc = gl_PointCoord * 2.0 - 1.0;
  float radius = length(disc);
  float feather = max(fwidth(radius), 0.04);
  float coverage = 1.0 - smoothstep(1.0 - feather, 1.0, radius);
  vec3 normal = vec3(disc.x, -disc.y, sqrt(max(0.0, 1.0 - dot(disc, disc))));
  float light = max(0.0, dot(normal, normalize(vec3(-0.45, 0.65, 0.65))));
  pigment.rgb += vec3(light * light * elementRelief);
  pigment.rgb = illuminateGrain(pigment.rgb, normal);
  pigment.a *= coverage * volumeOpacity;
  return pigment;
}
`,hx=`// 1. Shared grain placement and per-element animation inputs
attribute float elementOpacity;
attribute float elementSeed;
attribute vec3 elementCenter;
attribute float grainIndex;
attribute float elementAxis;
attribute float elementIndex;
uniform vec2 elementEffects[ELEMENT_CAPACITY];
uniform float elementPresence[ELEMENT_CAPACITY];
uniform float elementReveal[ELEMENT_CAPACITY];
uniform float elementGrainSpread;
uniform float elementLightSizeBoost;
uniform float elementAccentFraction;
uniform float elementBandWidth;
uniform float elementGlassFraction;
varying float volumeOpacity;
varying float grainLight;
varying float grainGlass;

// 2. Sweep along local forward; visibility belongs to the whole section
vec3 placeElementGrain(float seed) {
  vec2 elementEffect = elementEffects[int(elementIndex)];
  vec3 offset = vec3(sin(seed * 137.0), cos(seed * 93.0), sin(seed * 71.0));
  float wave = (elementAxis - elementEffect.x) / elementBandWidth;
  grainLight = exp(-wave * wave * 4.0) * elementEffect.y;
  grainGlass = 1.0 - step(elementGlassFraction, seed);
  volumeOpacity = elementOpacity * elementPresence[int(elementIndex)] * elementReveal[int(elementIndex)];
  return elementCenter + offset * elementGrainSpread * sqrt(seed);
}
`,gx=`// 1. A smooth random field: neighboring grains share the same changing air movement.
uniform float elementWindTime;
uniform float elementWindPeriod;
uniform float elementWindAmplitude;
uniform float elementWindIndividual;
uniform float elementWindCoherence;

vec3 windLattice(vec2 cell) {
  cell = mod(cell, elementWindPeriod);
  vec3 hash = fract(vec3(cell.x, cell.y, cell.x) * vec3(0.1031, 0.1030, 0.0973));
  hash += dot(hash, hash.yxz + 33.33);
  return fract((hash.xxy + hash.yxx) * hash.zyx) * 2.0 - 1.0;
}

// Quintic interpolation joins lattice cells without jumps in velocity or acceleration.
vec3 sampleWindField(vec2 coordinate) {
  vec2 cell = floor(coordinate);
  vec2 blend = fract(coordinate);
  blend = blend * blend * blend * (blend * (blend * 6.0 - 15.0) + 10.0);
  vec3 before = mix(windLattice(cell), windLattice(cell + vec2(1.0, 0.0)), blend.x);
  vec3 after = mix(windLattice(cell + vec2(0.0, 1.0)), windLattice(cell + vec2(1.0)), blend.x);
  return mix(before, after, blend.y);
}

// 2. Bounded drift preserves the ring, with a much smaller individual contribution.
vec3 sampleElementWind(vec3 restingPosition, float seed) {
  vec3 position = restingPosition / elementWindCoherence;
  vec2 field = vec2(dot(position, vec3(0.83, 0.41, 0.37)),
    elementWindTime + dot(position, vec3(0.19, 0.31, 0.23)));
  vec3 shared = sampleWindField(field);
  vec3 individual = sampleWindField(vec2(seed * 71.0, elementWindTime + seed * 13.0));
  return shared * elementWindAmplitude + individual * elementWindIndividual;
}
`,_x=256;function vx(e,t){let n=e.getAttribute(`position`),r=new Float32Array(n.count),i=new Float32Array(n.count),a=e.getAttribute(`pathParticleSize`),o=bx(t.seed),s=new U,c=new U;for(let e=0;e<n.count;e++){i[e]=o();let l=yx(t,o,s);r[e]=l;let u=l===t.coreOpacity?t.coreSizeScale:t.haloSizeScale;a&&a.setX(e,a.getX(e)*u),c.fromBufferAttribute(n,e).add(s),n.setXYZ(e,c.x,c.y,c.z)}return e.setAttribute(`elementOpacity`,new A(r,1)),e.setAttribute(`elementSeed`,new A(i,1)),e.computeBoundingSphere(),e}function yx(e,t,n){let r=t()<e.haloFraction,i=r?e.haloRadiusMeters:e.coreRadiusMeters,a=t()*Math.PI*2,o=t()*2-1,s=i*(r?Math.cbrt(t()):t()**.65),c=Math.sqrt(1-o*o)*s;return n.set(Math.cos(a)*c,o*s,Math.sin(a)*c),r?e.haloOpacity.from+t()*(e.haloOpacity.to-e.haloOpacity.from):e.coreOpacity}function bx(e){return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function xx(e,t,n){let r=wx(t,n),i=e.pointsMaterial,a=i.onBeforeCompile.bind(i),o=i.customProgramCacheKey();return i.onBeforeCompile=(e,t)=>{a(e,t),Object.assign(e.uniforms,r),e.uniforms.elementPresence={value:n.retirement.presence},e.uniforms.elementReveal={value:n.reveal??new Float32Array(n.retirement.presence.length).fill(1)},e.vertexShader=Tx(e.vertexShader).replaceAll(`ELEMENT_CAPACITY`,String(n.settings.capacity)),e.fragmentShader=Ex(e.fragmentShader)},i.customProgramCacheKey=()=>`${o}:particle-volume-directional-light-spatial-wind-v13:${n.settings.capacity}`,{pointsMaterial:i,update(t){e.update(t),Sx(r,n,t)}}}function Sx(e,t,n){e.elementWindTime.value=(e.elementWindTime.value+Math.max(0,n)/t.wind.changeSeconds)%_x,Cx(t.animation.update(n),e.elementEffects.value)}function Cx(e,t){e.forEach((e,n)=>{t[n]?.set(e.head,e.strength)})}function wx(e,t){let n=t.settings;return{elementWindTime:{value:0},elementWindPeriod:{value:_x},elementWindAmplitude:{value:t.wind.amplitudeMeters},elementWindIndividual:{value:t.wind.individualAmplitudeMeters},elementWindCoherence:{value:t.wind.coherenceMeters},elementEffects:{value:Array.from({length:n.capacity},()=>new Ne(-1,0))},elementLightColor:{value:new L(n.color)},elementLightGain:{value:n.lightGain},elementLightSizeBoost:{value:n.lightSizeBoost},elementGlintStrength:{value:n.glintStrength},elementBandWidth:{value:n.bandWidth},elementGlassFraction:{value:n.glassFraction},elementRelief:{value:e.relief},elementGrainSpread:{value:e.grainSpreadMeters},elementAccentFraction:{value:e.accentFraction}}}function Tx(e){return e.replace(`#include <common>`,`#include <common>\n${hx}\n${gx}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
      float seed = fract(sin(elementSeed * 137.0 + grainIndex * 91.7) * 43758.5453);
      transformed = placeElementGrain(seed);
    `).replace(`transformed = animateAirParticle(transformed);`,`transformed += sampleElementWind(transformed, seed);`).replace(`gl_PointSize = size * pathParticleSize;`,`gl_PointSize = size * pathParticleSize * (seed < elementAccentFraction ? 1.8 : 0.45 + seed * 0.55) * (1.0 + grainLight * elementLightSizeBoost);`)}function Ex(e){return e.replace(`#include <common>`,`#include <common>\n${mx}`).replace(`#include <color_fragment>`,`#include <color_fragment>
diffuseColor = shadeElementGrain(diffuseColor);`)}function Dx(e,t=0){return new Ox(e,t)}var Ox=class{maximumStepMeters;paddingMeters;rings=[];previous=new U;relative=new U;crossing=new U;passed=new Set;events=[];constructor(e,t){this.maximumStepMeters=e,this.paddingMeters=t}readPassed=e=>{if(e<=0||this.rings.length<e)return!1;for(let t=0;t<e;t++){let e=this.rings[t];if(!e||!this.passed.has(e.elementIndex))return!1}return!0};reset=(e,t)=>{this.rings=e.map(e=>({...e,center:new U().copy(e.center),direction:new U().copy(e.direction).normalize()})),this.previous.copy(t),this.passed.clear(),this.events.length=0};update=e=>{if(this.events.length=0,this.previous.distanceTo(e)<=this.maximumStepMeters)for(let t of this.rings)this.passed.has(t.elementIndex)||!this.crosses(t,e)||(this.passed.add(t.elementIndex),this.events.push(t.elementIndex));return this.previous.copy(e),this.events};crosses(e,t){let n=this.relative.subVectors(this.previous,e.center).dot(e.direction),r=this.relative.subVectors(t,e.center).dot(e.direction);return n>=0||r<0?!1:(this.crossing.lerpVectors(this.previous,t,-n/(r-n)),this.crossing.distanceToSquared(e.center)<=(e.radiusMeters+this.paddingMeters)**2)}};function kx(e){if(!Number.isFinite(e)||e<=0)throw RangeError(`Ring radius must be positive`);return{lengthMeters:Math.PI*2*e,sample:(t,n)=>{let r=t/e;n.set(0,Math.cos(r)*e,Math.sin(r)*e)}}}var Ax={right:{url:`/becoming-many-making-of/p/v3-v07/audio/tutorial/en/introduction-right.wav`,durationSeconds:18.174938,instructionAtSeconds:17.16},left:{url:`/becoming-many-making-of/p/v3-v07/audio/tutorial/en/left.wav`,durationSeconds:3.002396,instructionAtSeconds:1.36},up:{url:`/becoming-many-making-of/p/v3-v07/audio/tutorial/en/up.wav`,durationSeconds:3.507542,instructionAtSeconds:2.38},down:{url:`/becoming-many-making-of/p/v3-v07/audio/tutorial/en/down.wav`,durationSeconds:2.102063,instructionAtSeconds:.66},complete:{url:`/becoming-many-making-of/p/v3-v07/audio/tutorial/en/complete.wav`,durationSeconds:13.297396,instructionAtSeconds:0}},jx={approachMeters:18.48,pathAtSeconds:8,pathFadeSeconds:3.2,worldReveal:{atSeconds:12.94,fadeSeconds:3.2}};function Mx(e,t){let n=t.closingPathFadeSeconds,r=n+t.closingWorldFadeSeconds;return{course:Nx(e/n),world:Nx((e-n)/t.closingWorldFadeSeconds),ready:e>=r+t.closingWhiteHoldSeconds}}function Nx(e){let t=Math.max(0,Math.min(1,e));return 1-t*t*(3-2*t)}var Px={maximumExerciseSeconds:90,voiceSafetySeconds:.75,closingAtmosphereFadeSeconds:6,closingPathFadeSeconds:3,closingWorldFadeSeconds:3,closingWhiteHoldSeconds:2},$={demonstrationCueSeconds:2,completeVoice:{url:`/becoming-many-making-of/p/v3-v07/audio/tutorial/de/complete.wav`,durationSeconds:13.861479,instructionAtSeconds:0},showFlightGuidance:!1,pathOpacity:.22,retireSeconds:2.5,belowFlightMeters:.5,seed:17,entryLineMeters:20,entryBehindMeters:4,recoveryLeadMeters:6,keepPathBehindMeters:12,pathPoolSize:4,elementPoolSize:4,generationMetersPerStep:4,revealSeconds:.8,pathGrowth:{speedMetersPerSecond:12,softEdgeMeters:3},elementReveal:{capacity:24,fadeSeconds:2,speedMetersPerSecond:12},elementAnimation:{revealSeconds:1.3,dissolveSeconds:1.2,scatterMeters:.8},elementLight:{capacity:24,periodSeconds:3.4,sweepSeconds:1.4,staggerSeconds:.18,guideStrength:.6,lightGain:3.2,lightSizeBoost:.8,glintStrength:.45,flashSeconds:.85,bandWidth:.3,glassFraction:.32,color:16473878},elementRetirement:{capacity:24,dissolveSeconds:1.2,clearanceMeters:2},elementPassage:{maximumStepMeters:3,paddingMeters:2.95,requiredRings:2},elementSimulation:{radiusMeters:5.2,impulse:4,spring:3,damping:2.2,maximumStepMeters:3,maximumOffsetMeters:.8,maximumDeltaSeconds:.05},elementWind:{amplitudeMeters:.18,individualAmplitudeMeters:.025,coherenceMeters:3.5,changeSeconds:4.5},arrowVolume:{haloFraction:0,coreRadiusMeters:.4},elementVolume:{coreRadiusMeters:.55,haloRadiusMeters:1.2,haloFraction:.18,coreOpacity:.72,coreSizeScale:1.35,haloSizeScale:.7,relief:.12,grainsPerSample:12,grainSpreadMeters:.14,accentFraction:.06,haloOpacity:{from:.08,to:.3},seed:137},elementParticles:{densityPerMeter:{from:64,to:80},color:{from:0,to:0},sizeMeters:{from:.03,to:.06},spreadMeters:0,seed:43}},Fx=[{id:`right`,sequence:{approachMeters:26,pathAtSeconds:6.38,pathFadeSeconds:3.2,worldReveal:{atSeconds:13.36,fadeSeconds:3.2}},voice:{url:`/becoming-many-making-of/p/v3-v07/audio/tutorial/de/introduction-right.wav`,durationSeconds:20.725729,instructionAtSeconds:19.3},route:{leadMeters:0,straightMeters:3,outroMeters:3,turnSign:1,turnRadiusMeters:{from:10,to:10.5},turnDegrees:{from:110,to:110}},particles:{densityPerMeter:{from:40,to:68},color:{from:2917773,to:7847618},sizeMeters:{from:.025,to:.055},spreadMeters:.55,seed:17},elements:{showArrows:!1,entryArrow:{distanceMeters:10,aboveMeters:1.8,sideMeters:-5},ringCount:3,firstMeters:13,spacingMeters:4.2,ringRadiusMeters:3.6,arrowLengthMeters:4.8,arrowOffsetMeters:7,arrowPhaseFraction:.5},deviation:{distanceMeters:12,outsideTravelMeters:8,directionDifferenceRadians:.87,lookAheadMeters:20,visibilityPaddingMeters:6,maximumStepMeters:3},progress:{checkpointSpacingMeters:2,toleranceMeters:3,extraTravelMeters:7,maximumStepMeters:3}},{id:`left`,sequence:{approachMeters:10},voice:{url:`/becoming-many-making-of/p/v3-v07/audio/tutorial/de/left.wav`,durationSeconds:2.735417,instructionAtSeconds:1.14},route:{leadMeters:0,straightMeters:9,outroMeters:6,turnSign:-1,turnRadiusMeters:{from:10,to:10.5},turnDegrees:{from:110,to:110}},particles:{densityPerMeter:{from:40,to:68},color:{from:2917773,to:7847618},sizeMeters:{from:.025,to:.055},spreadMeters:.55,seed:17},elements:{showArrows:!1,ringCount:3,firstMeters:10,spacingMeters:4.2,ringRadiusMeters:3.6,arrowLengthMeters:4.6,arrowOffsetMeters:7,arrowPhaseFraction:.5},deviation:{distanceMeters:12,outsideTravelMeters:8,directionDifferenceRadians:.87,lookAheadMeters:20,visibilityPaddingMeters:6,maximumStepMeters:3},progress:{checkpointSpacingMeters:2,toleranceMeters:3,extraTravelMeters:7,maximumStepMeters:3}},{id:`up`,sequence:{approachMeters:10},voice:{url:`/becoming-many-making-of/p/v3-v07/audio/tutorial/de/up.wav`,durationSeconds:4.334896,instructionAtSeconds:2.66},route:{turnPlane:`vertical`,leadMeters:0,straightMeters:8,outroMeters:3,turnSign:1,turnRadiusMeters:{from:12,to:12.5},turnDegrees:{from:24,to:24}},particles:{densityPerMeter:{from:40,to:68},color:{from:2917773,to:7847618},sizeMeters:{from:.025,to:.055},spreadMeters:.55,seed:17},elements:{showArrows:!1,ringCount:3,firstMeters:9,spacingMeters:4.2,ringRadiusMeters:3.6,arrowLengthMeters:4.6,arrowOffsetMeters:7,arrowPhaseFraction:.5},deviation:{distanceMeters:12,outsideTravelMeters:8,directionDifferenceRadians:.87,lookAheadMeters:20,visibilityPaddingMeters:6,maximumStepMeters:3},progress:{checkpointSpacingMeters:2,toleranceMeters:3,extraTravelMeters:7,maximumStepMeters:3}},{id:`down`,sequence:{approachMeters:10},voice:{url:`/becoming-many-making-of/p/v3-v07/audio/tutorial/de/down.wav`,durationSeconds:2.552583,instructionAtSeconds:1.04},route:{turnPlane:`vertical`,leadMeters:0,straightMeters:8,outroMeters:3,turnSign:-1,turnRadiusMeters:{from:12,to:12.5},turnDegrees:{from:24,to:24}},particles:{densityPerMeter:{from:40,to:68},color:{from:2917773,to:7847618},sizeMeters:{from:.025,to:.055},spreadMeters:.55,seed:17},elements:{showArrows:!1,ringCount:3,firstMeters:9,spacingMeters:4.2,ringRadiusMeters:3.6,arrowLengthMeters:4.6,arrowOffsetMeters:7,arrowPhaseFraction:.5},deviation:{distanceMeters:12,outsideTravelMeters:8,directionDifferenceRadians:.87,lookAheadMeters:20,visibilityPaddingMeters:6,maximumStepMeters:3},progress:{checkpointSpacingMeters:2,toleranceMeters:3,extraTravelMeters:7,maximumStepMeters:3}}];function Ix(e){return new Lx(e)}var Lx=class{settings;state=this.initialState();exercisePassed=!1;completedChunks=0;constructor(e){this.settings=e}readState=()=>this.state;readProgress=()=>({completedChunks:this.completedChunks,totalChunks:this.settings.exerciseCount,phase:this.state.phase===`closing`||this.state.phase===`complete`?`closing`:`active`});finishExercises=()=>{let e=this.state.phase;if(e!==`complete`)return this.enterPhase(`complete`),e===`closing`?void 0:`complete`};reset=()=>{this.state=this.initialState(),this.completedChunks=0,this.exercisePassed=!1};initialState(){return{phase:`instruction`,exerciseIndex:0,attempt:1,elapsedSeconds:0}}update=e=>{switch(this.state.elapsedSeconds+=Math.max(0,e.deltaSeconds),this.state.phase){case`instruction`:return e.deviated?this.recover(!1):!e.instructionReleased||!e.prepared?void 0:(this.enterPhase(`flying`),`show`);case`recovering`:this.state.elapsedSeconds>=this.settings.retireSeconds&&this.enterPhase(`instruction`);return;case`flying`:return this.observeExercise(e);case`closing`:return e.reachedEnd?(this.enterPhase(`complete`),`finish`):void 0;case`complete`:return;case`outro`:return this.observeExit(e)}};observeExercise(e){if(e.deviated&&!this.exercisePassed)return this.recover(!1);if(e.progress===`passed`&&!this.exercisePassed&&(this.exercisePassed=!0,this.completedChunks=Math.min(this.settings.exerciseCount,this.completedChunks+1)),this.exercisePassed)return this.settings.repeatSequence===!1&&this.state.exerciseIndex===this.settings.exerciseCount-1?(this.enterPhase(`closing`),`complete`):(this.enterPhase(`outro`),`prepare-next`)}observeExit(e){if(e.deviated)return this.recover(!0);if(!(!e.prepared||!e.instructionReleased))return this.advanceExercise(),this.enterPhase(`flying`),`advance`}recover(e){return e?this.advanceExercise():this.state.attempt++,this.enterPhase(`recovering`),`recover`}advanceExercise(){this.state.exerciseIndex=(this.state.exerciseIndex+1)%this.settings.exerciseCount,this.state.attempt++}enterPhase(e){e===`flying`&&(this.exercisePassed=!1),this.state.phase=e,this.state.elapsedSeconds=0}};function Rx(e,t,n){let r=zx(e,n);if(t===n)return r;let i=Bx(e,t),a=Bx(e,n);return{...r,timeMap:i.map((e,t)=>({offsetSeconds:e,nativeSeconds:a[t]??r.durationSeconds}))}}function zx(e,t){if(t===`en`)return Ax[e];if(e===`complete`)return $.completeVoice;let n=Fx.find(t=>t.id===e);if(!n)throw Error(`Unknown Start recording`);return n.voice}function Bx(e,t){let n=zx(e,t);if(e===`complete`){let e=Px.closingPathFadeSeconds,t=e+Px.closingWorldFadeSeconds;return[e,t,t+Px.closingWhiteHoldSeconds,n.durationSeconds]}if(e!==`right`)return[n.instructionAtSeconds,n.durationSeconds];let r=t===`en`?jx:Fx[0].sequence;return[r.pathAtSeconds??0,(r.pathAtSeconds??0)+(r.pathFadeSeconds??0),r.worldReveal?.atSeconds??0,(r.worldReveal?.atSeconds??0)+(r.worldReveal?.fadeSeconds??0),n.instructionAtSeconds,n.durationSeconds]}function Vx(e,t){return Ux(e.worldReveal,t)}function Hx(e,t){return e.pathAtSeconds===void 0?1:Ux({atSeconds:e.pathAtSeconds,fadeSeconds:e.pathFadeSeconds??1},t)}function Ux(e,t){if(!e)return 1;if(!Number.isFinite(e.atSeconds)||e.atSeconds<0||!Number.isFinite(e.fadeSeconds)||e.fadeSeconds<=0)throw RangeError(`World reveal requires a nonnegative cue and positive fade duration`);let n=Math.max(0,Math.min(1,(t-e.atSeconds)/e.fadeSeconds));return n*n*(3-2*n)}var Wx=class{settings;started=!1;elapsedSeconds=0;constructor(e){this.settings=e}reset(){this.started=!1,this.elapsedSeconds=0}update(e,t){this.started||=t>0,this.started&&Number.isFinite(e)&&(this.elapsedSeconds+=Math.max(0,e))}canPlay(e){return this.elapsedSeconds+e+this.settings.voiceSafetySeconds<this.settings.maximumExerciseSeconds}expired(){return this.elapsedSeconds>=this.settings.maximumExerciseSeconds}};function Gx(e){return new Kx(e)}var Kx=class{options;exercises;currentVoice;runtime=new qy;generationKey={};noFlightDirection=new U;game;timing=new Wx(Px);paths;elements;bindings=new Map;feedback=new Map;retiringPaths=new Map;course=ab(ib);relative=new U;entry;recoveryEntryNeeded=!1;modules;current;pending;active=!1;paused=!1;worldPresence=1;presence=1;closing={course:1,world:1,ready:!1};pathPresence=1;openingNeeded=!1;constructor(e){this.options=e,this.exercises=Fx.map(e=>this.localizeExercise(e)),this.game=Ix({exerciseCount:this.exercises.length,repeatSequence:!e.voice,retireSeconds:$.retireSeconds}),this.paths=this.createPaths(),this.elements=Array.from({length:$.elementPoolSize},()=>this.createElements()),this.modules=this.createModules()}localizeExercise(e){return this.options.language===`en`?{...e,voice:Ax[e.id],sequence:e.id===`right`?jx:e.sequence}:e}createPaths(){return Array.from({length:$.pathPoolSize},()=>mb({scene:this.options.scene,belowFlightMeters:$.belowFlightMeters,opacity:$.pathOpacity,growth:$.pathGrowth,readPresence:()=>this.pathPresence*this.presence*this.closing.course,createMaterial:()=>Bb(zb(Dy),$.pathGrowth.softEdgeMeters)}))}createModules(){return[zy({...this.options,readPresence:()=>this.worldPresence*this.presence*this.closing.world}),...this.paths,...this.elements,...$.showFlightGuidance?[Zy({scene:this.options.scene,viewpoint:this.options.viewpoint,parameters:this.options.guidance,constrainFlightPosition:this.options.constrainFlightPosition})]:[]]}createElements(){let e=this.createFeedback(),{light:t,retirement:n,reveal:r}=e,i=cx({light:t,reveal:r,retirement:n,readDirection:()=>this.options.viewpoint.worldFlightDirection??this.noFlightDirection,grainsPerSample:$.elementVolume.grainsPerSample,scene:this.options.scene,belowFlightMeters:$.belowFlightMeters,animationSettings:$.elementAnimation,animation:ex($.elementAnimation),simulation:fx($.elementSimulation),readPosition:()=>this.readPosition(),readPresence:()=>this.presence*this.closing.course,createGeometry:this.createElementGeometry,createMaterial:()=>this.createElementMaterial(t,n,r.presence)});return this.feedback.set(i,e),i}createFeedback(){return{light:ux($.elementLight),passage:Dx($.elementPassage.maximumStepMeters,$.elementPassage.paddingMeters),retirement:Xb($.elementRetirement),reveal:tx($.elementReveal),presence:new Float32Array($.elementReveal.capacity)}}createElementMaterial(e,t,n){return xx(zb(Dy),$.elementVolume,{settings:$.elementLight,animation:e,retirement:t,reveal:n,wind:$.elementWind})}createElementGeometry=(e,t)=>vx(kb(e,$.elementParticles),t===`arrow`?{...$.elementVolume,...$.arrowVolume}:$.elementVolume);load=()=>{for(let e of this.modules)this.runtime.load(e)};activate=()=>{for(let{passage:e}of this.feedback.values())e.reset([],this.readPosition());this.cancelPending(),this.game.reset(),this.timing.reset(),this.current=void 0,this.bindings.clear(),this.retiringPaths.clear(),this.course.clear(),this.entry=void 0,this.recoveryEntryNeeded=!1,this.worldPresence=+!this.options.voice,this.pathPresence=this.worldPresence,this.openingNeeded=!0,this.active=!0,this.setPresence(1),this.closing={course:1,world:1,ready:!1};for(let e of this.modules)this.runtime.activate(e);this.playInstruction(!1),this.updateOpening()};deactivate=()=>{this.stopCourse();for(let e of this.modules)this.runtime.deactivate(e)};unload=()=>{this.stopCourse(),this.current=void 0;let e=[];for(let t of this.modules)try{this.runtime.unload(t)}catch(t){e.push(t)}if(this.options.atmosphere?.unload(),e.length)throw AggregateError(e,`Start cleanup failed`)};stopCourse(){this.active=!1,this.stopAtmosphere(),this.currentVoice=void 0,this.options.voice?.stop(),this.bindings.clear(),this.retiringPaths.clear(),this.course.clear(),this.entry=void 0,this.recoveryEntryNeeded=!1;for(let{passage:e}of this.feedback.values())e.reset([],this.readPosition());this.cancelPending()}readComplete=()=>{let e=this.options.voice?.read();return this.active&&this.game.readState().phase===`complete`&&!!e&&e.ended&&this.closing.ready&&!e.failed};readProgress=()=>this.game.readProgress();setPaused=e=>{this.paused=e,this.options.voice?.setPaused(e),e&&this.options.atmosphere?.update({active:!1,speaking:!1})};readPlayback=()=>{if(this.paused||!this.active)return`paused`;let e=this.options.voice?.readStatus();return e===`loading`?`buffering`:!e||e===`ended`?`playing`:e};setPresence=e=>{this.presence=Number.isFinite(e)?Math.max(0,Math.min(1,e)):0,this.options.voice?.setPresence(this.presence)};update=e=>{if(this.readPlayback()!==`playing`){this.options.atmosphere?.update({active:!1,speaking:!1});return}this.timing.update(e,this.options.voice?.read().offsetSeconds??0),this.updateOpening(),this.updateRetiredPaths(),this.resumeRecovery(),this.enqueuePending(),this.publishPreparedPath();let t=this.readPosition();for(let{light:e,passage:n}of this.feedback.values())for(let r of n.update(t))e.pass(r);this.applyAction(this.observeFlight(e)),this.updateClosing(),this.runtime.update(e),this.updateAtmosphere()};updateClosing(){let e=this.game.readState().phase;(e===`closing`||e===`complete`)&&(this.closing=Mx(this.options.voice?.read().offsetSeconds??0,Px))}updateOpening(){let e=this.exercises[0];if(!e)throw Error(`Missing Start opening exercise`);if(this.options.voice&&(this.worldPresence<1||this.pathPresence<1)){let t=this.options.voice.read();t.failed||(this.worldPresence=Math.max(this.worldPresence,Vx(e.sequence,t.offsetSeconds)),this.pathPresence=Math.max(this.pathPresence,Hx(e.sequence,t.offsetSeconds)))}!this.openingNeeded||this.pathPresence<=0||this.showEntry(!1)&&(this.openingNeeded=!1,this.prepareSection(!1))}observeFlight(e){let t=this.options.voice?.read();if(this.timing.expired()&&t&&(t.ended||t.failed))return this.cancelPending(),this.recoveryEntryNeeded=!1,this.game.finishExercises();let n=this.readPosition(),r=this.readRingProgress();return this.game.update({deltaSeconds:e,progress:r?`passed`:`pending`,reachedEnd:r,deviated:this.current?.deviation.update(n,this.options.viewpoint)??!1,prepared:!!this.pending?.display&&(this.bindings.has(this.pending.display)||!this.pending.continuation&&this.elements.every(e=>!e.isVisible())),instructionReleased:this.instructionReleased(),instructionEnded:!this.options.voice||this.options.voice.read().ended&&!this.options.voice.read().failed})}applyAction(e){e===`show`&&this.beginPreparedSection(!1),e===`prepare-next`&&this.playInstruction(!1,!0)&&this.prepareSection(!0),e===`complete`&&this.playVoice(`complete`,0),e===`finish`&&this.current&&this.retireElements(this.current.display),e===`advance`&&this.beginPreparedSection(!0),e===`recover`&&this.recoverCourse()}prepareSection(e){this.cancelPending();let t=this.game.readState(),n=(t.exerciseIndex+Number(e))%this.exercises.length,r=this.exercises[n];if(!r)return;let i=t.attempt+Number(e),a=vb(r.route,$.seed+i);this.pending={section:this.course.append(a),generation:this.createGeneration(a,r.particles,i),continuation:e,elements:this.createElementSources(a,r),queued:!1},!e&&this.entry&&(this.current=this.observeSection(this.pending.section,this.entry.display,this.entry)),this.enqueuePending()}createElementSources(e,t){let n=Gb(e,t.elements);if(t.elements.entryArrow!==void 0){let r=Qb(e,n,t.elements.entryArrow);r&&n.push(r)}return n.map(e=>({placement:e,openingRadiusMeters:e.kind===`ring`?t.elements.ringRadiusMeters-$.elementVolume.coreRadiusMeters:void 0,shape:e.kind===`ring`?kx(t.elements.ringRadiusMeters):Ub(t.elements.arrowLengthMeters)}))}createGeneration(e,t,n){return Tb({route:e,maximumDensity:t.densityPerMeter.to,metersPerStep:$.generationMetersPerStep,createSlice:(e,r)=>kb(e,{...t,seed:t.seed+n+r})})}enqueuePending(){let e=this.pending;!e||e.queued||e.generation.isReady()||(e.queued=this.options.streamQueue.enqueue({key:this.generationKey,isCurrent:()=>this.active&&this.pending===e,runStep:e.generation.step}))}cancelPending(){this.pending?.generation.dispose(),this.pending=void 0}availableDisplay(){return this.paths.find(e=>!e.isVisible())}publishPreparedPath(){let e=this.pending;if(!(!e?.generation.isReady()||!this.pathReleased())){if(!e.display){let t=e.continuation?this.current?.display:this.entry?.display;if(t&&!t.isRevealed())return;let n=this.availableDisplay();if(!n)return;n.show(e.generation.takeGeometry(),e.section.pose,{incomingMeters:t?.readContinuationMeters()??0}),e.display=n,e.continuation||this.observeEntry(n)}e.continuation&&this.instructionReleased()&&this.showElements(e.display,e.elements,e.section.pose)}}observeEntry(e){this.current&&={...this.current,display:e},this.entry&&this.retainPath(this.entry,this.entry.display),this.entry=void 0}beginPreparedSection(e){let t=this.pending;t?.display&&(this.showElements(t.display,t.elements,t.section.pose),e&&(this.current&&(this.retainPath(this.current,this.current.display),this.retireElements(this.current.display)),this.current=this.observeSection(t.section,t.display)),this.pending=void 0)}retainPath(e,t){let n=new U;e.route.sample(e.route.lengthMeters,n),n.applyAxisAngle(new U(0,1,0),e.pose.yawRadians).add(e.pose.position),this.retiringPaths.set(t,n)}updateRetiredPaths(){let e=this.options.viewpoint.worldFlightDirection??this.noFlightDirection;for(let[t,n]of this.retiringPaths)this.relative.subVectors(n,this.readPosition()).dot(e)>=-$.keepPathBehindMeters||(t.retire($.retireSeconds),this.retiringPaths.delete(t))}retireElements(e){let t=this.bindings.get(e);t&&(t.dissolve(),this.feedback.get(t)?.passage.reset([],this.readPosition()),this.bindings.delete(e))}showEntry(e){let t=this.availableDisplay(),n=this.exercises[this.game.readState().exerciseIndex];if(!t||!n)return!1;let r=this.options.viewpoint.worldFlightDirection??this.noFlightDirection,i=fb(!e&&this.options.voice?n.sequence.approachMeters:$.entryLineMeters,r),a=_b(this.options.viewpoint,e?$.recoveryLeadMeters:0,this.options.constrainFlightPosition),o=e?0:$.entryBehindMeters,s=kb({lengthMeters:i.lengthMeters+o,sample:(e,t)=>i.sample(e-o,t)},n.particles);return t.show(s,a,{fadeSeconds:e?$.revealSeconds:0}),this.entry={route:i,pose:a,display:t},this.course.begin(this.entry),!0}recoverCourse(){this.cancelPending();for(let e of this.paths)e.retire($.retireSeconds);for(let e of this.elements)e.dissolve(`abandoned`,$.retireSeconds);for(let{passage:e}of this.feedback.values())e.reset([],this.readPosition());this.bindings.clear(),this.course.clear(),this.retiringPaths.clear(),this.current=void 0,this.entry=void 0,this.recoveryEntryNeeded=!0,this.resumeRecovery()}resumeRecovery(){!this.recoveryEntryNeeded||!this.showEntry(!0)||(this.recoveryEntryNeeded=!1,this.playInstruction(!0),this.prepareSection(!1))}readRingProgress(){if(!this.current)return!1;let e=this.bindings.get(this.current.display);return e?this.feedback.get(e)?.passage.readPassed($.elementPassage.requiredRings)??!1:!1}showElements(e,t,n){if(this.bindings.has(e))return;let r=this.elements.find(e=>!e.isVisible());r&&(r.show(t,n,e.readRevealMeters),this.bindings.set(e,r),this.placeSectionAudio(e,r,this.createRingTargets(t,n)),this.feedback.get(r)?.passage.reset(this.createRingTargets(t,n),this.readPosition()))}placeSectionAudio(e,t,n){let r=this.pending?.display===e?this.pending.section:this.current;if(!r||!this.options.atmosphere)return;let i=new U;r.route.sample(r.route.lengthMeters/2,i),i.applyAxisAngle(new U(0,1,0),r.pose.yawRadians).add(r.pose.position),i.y-=$.belowFlightMeters,this.options.atmosphere.configureSection(this.elements.indexOf(t),{center:i,rings:n.map(e=>({...e,index:e.elementIndex}))})}updateAtmosphere(){let e=this.options.atmosphere;if(!e)return;let t=this.options.voice?.read();e.update({active:this.active,presence:this.presence*this.readAtmospherePresence(),speaking:!!t&&!t.ended&&!t.failed}),this.elements.forEach((t,n)=>{if(!t.isVisible()){e.clearSection(n);return}let r=this.feedback.get(t);if(r){for(let e=0;e<r.presence.length;e++)r.presence[e]=(r.reveal.presence[e]??0)*(r.retirement.presence[e]??0);e.updateSection(n,{presence:r.presence,pulses:r.light.readPulses()})}})}stopAtmosphere(){this.options.atmosphere?.update({active:!1,speaking:!1}),this.elements.forEach((e,t)=>{this.options.atmosphere?.clearSection(t)})}readAtmospherePresence(){let e=this.game.readState().phase;if(e!==`closing`&&e!==`complete`)return 1;let t=this.options.voice?.read().offsetSeconds??0;return Math.max(0,1-t/Px.closingAtmosphereFadeSeconds)}createRingTargets(e,t){let n=[];return e.forEach((e,r)=>{if(!e.openingRadiusMeters)return;let i=e.placement.position.clone().applyAxisAngle(new U(0,1,0),t.yawRadians).add(t.position);i.y-=$.belowFlightMeters,n.push({elementIndex:r,center:i,radiusMeters:e.openingRadiusMeters,direction:e.placement.direction.clone().applyAxisAngle(new U(0,1,0),t.yawRadians)})}),n}observeSection(e,t,n){n&&(e=pb(n,e));let r=this.exercises[this.game.readState().exerciseIndex];if(!r)throw Error(`Unknown Start exercise`);let i=cb(e,this.readPosition(),r.deviation);return{...e,display:t,deviation:i}}pathReleased(){if(!this.options.voice)return this.instructionReleased();let e=this.game.readState(),t=this.exercises[e.exerciseIndex+Number(e.phase===`outro`)],n=t?.sequence.pathAtSeconds??t?.voice.instructionAtSeconds,r=this.options.voice.read();return n!==void 0&&!r.failed&&r.offsetSeconds>=n}instructionReleased(){let e=this.game.readState();if(!this.options.voice)return e.elapsedSeconds>=$.demonstrationCueSeconds||e.phase===`outro`;let t=e.exerciseIndex+Number(e.phase===`outro`),n=this.exercises[t]?.voice,r=this.options.voice.read();return!!n&&!r.failed&&r.offsetSeconds>=n.instructionAtSeconds}playInstruction(e,t=!1){let n=this.options.voice;if(!n||e&&!n.read().ended)return!0;let r=this.game.readState().exerciseIndex+Number(t),i=this.exercises[r];if(!i)return!1;let a=i.voice,o=e?a.instructionAtSeconds:0;return this.timing.canPlay(a.durationSeconds-o)?(this.playVoice(i.id,o),!0):!1}refreshLanguage=()=>{this.currentVoice&&this.options.voice?.replace(this.readRecording(this.currentVoice))};readRecording(e){let t=this.options.language??`de`;return Rx(e,t,this.options.readLanguage?.()??t)}playVoice(e,t){this.currentVoice=e,this.options.voice?.play(this.readRecording(e),t)}readPosition(){return this.options.viewpoint.worldFlightPosition??this.options.viewpoint.worldPosition}};function qx(){return{material:new z({colorWrite:!1}),segmentsPerSide:8}}var Jx=3,Yx=14674133;function Xx({worldSurface:e,chunkSize:t,chunkSlotCount:n,segmentsPerSide:r,opacity:i,presentation:a,effects:o=[]}){let s=Math.min(Math.max(i,0),1),c=a?.material??new z({color:Yx});c.opacity=s,c.transparent=s<1;try{for(let e of o)e.applyTo(c)}catch(e){throw c.dispose(),e}let l=a?.conditionsAt!==void 0,u=o.some(e=>e.warmthAt!==void 0),d=o.some(e=>e.coverAt!==void 0),f=new we,p=Array.from({length:n},()=>tS({chunkSize:t,segmentsPerSide:r,material:c,storesZoneConditions:l,storesThermalWarmth:u,storesGroundCover:d}));for(let e of p)f.add(e.mesh);return{group:f,worldSurface:e,chunkSize:t,segmentsPerSide:r,verticesPerSide:r+1,material:c,slots:p,presentation:a,effects:o}}function Zx(e,t){for(let n of t){let t=Qx(e,n);if(t)for(;!$x(e,t););}}function Qx(e,t){let n=e.slots[t.slotIndex];if(n)return{assignment:t,slot:n,nextRow:0}}function $x(e,t){return rS(e,t,t.nextRow),t.nextRow+=1,t.nextRow<e.verticesPerSide?!1:(sS(e,t),!0)}function eS(e){for(let t of e.slots)t.mesh.geometry.dispose();e.material.dispose()}function tS({chunkSize:e,segmentsPerSide:t,material:n,storesZoneConditions:r,storesThermalWarmth:i,storesGroundCover:a}){let o=new oe(e,e,t,t);o.rotateX(-Math.PI/2),o.deleteAttribute(`normal`),o.deleteAttribute(`uv`);let s=o.getAttribute(`position`);if(!(s instanceof B))throw Error(`PlaneGeometry must provide a BufferAttribute position`);s.setUsage(N);let c=(t+1)**2,l=nS(c,4,r);l&&o.setAttribute(`zoneConditions`,l);let u=nS(c,1,i);u&&o.setAttribute(`thermalWarmth`,u);let d=nS(c,1,a);d&&o.setAttribute(`groundCover`,d);let f=new Ye(o,n);return f.visible=!1,{mesh:f,positionAttribute:s,zoneConditionsAttribute:l,thermalWarmthAttribute:u,groundCoverAttribute:d,stagedGroundHeights:new Float32Array(c)}}function nS(e,t,n){if(!n)return;let r=new A(e*t,t);return r.setUsage(N),r}function rS(e,t,n){let{assignment:r,slot:i}=t;for(let t=0;t<e.verticesPerSide;t+=1){let a=n*e.verticesPerSide+t,o=r.originX+t/e.segmentsPerSide*e.chunkSize,s=r.originZ+n/e.segmentsPerSide*e.chunkSize,c=e.worldSurface.groundYAt(o,s);i.stagedGroundHeights[a]=c,oS(e,i,a,o,s),iS(e,i,a,o,s,c),aS(e,i,a,o,s)}}function iS(e,t,n,r,i,a){let o=e.effects.find(e=>e.warmthAt!==void 0)?.warmthAt,s=t.thermalWarmthAttribute;!o||!s||s.setX(n,o(r,i,a))}function aS(e,t,n,r,i){let a=e.effects.find(e=>e.coverAt!==void 0)?.coverAt,o=t.groundCoverAttribute;!a||!o||o.setX(n,a(r,i))}function oS(e,t,n,r,i){let a=e.presentation?.conditionsAt,o=t.zoneConditionsAttribute;if(!a||!o)return;let s=a(r,i);o.setXYZW(n,s.riverChannelMarginMeters,s.waterDepthMeters,s.groundSlope,s.forestRegionValue)}function sS(e,t){let{assignment:n,slot:r}=t,i=r.positionAttribute.array;for(let e=0;e<r.stagedGroundHeights.length;e+=1){let t=e*Jx;i[t+1]=r.stagedGroundHeights[e]??0}r.positionAttribute.needsUpdate=!0,r.zoneConditionsAttribute&&(r.zoneConditionsAttribute.needsUpdate=!0),r.thermalWarmthAttribute&&(r.thermalWarmthAttribute.needsUpdate=!0),r.groundCoverAttribute&&(r.groundCoverAttribute.needsUpdate=!0);let a=e.chunkSize/2;r.mesh.position.set(n.originX+a,0,n.originZ+a),r.mesh.geometry.computeBoundingSphere(),r.mesh.visible=!0}var cS=2,lS=32;function uS(e){let t={currentStream:void 0};return{load:()=>dS(t,e),activate:()=>hS(t,!0),update:n=>fS(t,e,n),deactivate:()=>hS(t,!1),unload:()=>gS(t,e.scene)}}function dS(e,t){let n=_S(t);e.currentStream=n;let r=n.chunkWindow.update(t.viewpoint.worldPosition.x,t.viewpoint.worldPosition.z);Zx(n.geometry,r),n.geometry.group.visible=!1,t.scene.add(n.geometry.group)}function fS(e,{viewpoint:t,streamQueue:n},r){let i=e.currentStream;if(i){i.geometry.presentation?.update?.(r);for(let e of i.geometry.effects)e.update?.(r);pS(e,i,i.chunkWindow.update(t.worldPosition.x,t.worldPosition.z),n)}}function pS(e,t,n,r){for(let i of n){let n=mS(e,t,i);n&&r.enqueue(n)}}function mS(e,t,n){let r=t.slotJobKeys[n.slotIndex],i=Qx(t.geometry,n);if(!(!r||!i))return{key:r,priority:0,isCurrent:()=>e.currentStream===t&&t.chunkWindow.isCurrent(n),runStep:()=>$x(t.geometry,i)}}function hS(e,t){let n=e.currentStream;n&&(n.geometry.group.visible=t)}function gS(e,t){let n=e.currentStream;n&&(e.currentStream=void 0,t.remove(n.geometry.group),eS(n.geometry))}function _S(e){let t=uh(cS),n=new lh({level:cS,radius:Math.max(1,Math.ceil(e.viewpoint.viewDistanceMeters/t))});return{chunkWindow:n,geometry:Xx({worldSurface:e.worldSurface,chunkSize:t,chunkSlotCount:n.slotCount,segmentsPerSide:e.presentation?.segmentsPerSide??lS,opacity:e.parameters.opacity,presentation:e.presentation,effects:e.effects}),slotJobKeys:Array.from({length:n.slotCount},()=>({}))}}var vS=`/*
 * Purpose: Apply the elevation color calculated by the Terrain vertex shader.
 * Context: The gradient stays inside Terrain's existing opaque material pass.
 * Responsibility: Replace the neutral base color without textures or extra geometry.
 * Boundary: Elevation mapping and authored values stay outside this shader.
 */

varying vec3 terrainElevationColor;
varying vec4 interpolatedZoneConditions;

uniform vec3 terrainWaterColor;

vec3 getTerrainColor() {
  float riverChannelMarginMeters = interpolatedZoneConditions.x;
  float waterDepthMeters = interpolatedZoneConditions.y;
  bool hasWater = riverChannelMarginMeters >= 0.0 && waterDepthMeters > 0.0;
  return hasWater ? terrainWaterColor : terrainElevationColor;
}
`,yS=`/*
 * Purpose: Derive a terrain color from each vertex elevation.
 * Context: Design levels author low and high colors without adding CPU color buffers.
 * Responsibility: Interpolate the authored colors across the configured elevation range.
 * Boundary: Terrain geometry, world-surface sampling, and material lifecycle stay in TypeScript.
 */

uniform vec3 terrainLowElevationColor;
uniform vec3 terrainHighElevationColor;
uniform float terrainMinimumElevation;
uniform float terrainMaximumElevation;

attribute vec4 zoneConditions;
varying vec3 terrainElevationColor;
varying vec4 interpolatedZoneConditions;

void passTerrainElevationColor(vec3 transformedPosition) {
  float progress = smoothstep(
    terrainMinimumElevation,
    terrainMaximumElevation,
    transformedPosition.y
  );
  terrainElevationColor = mix(
    terrainLowElevationColor,
    terrainHighElevationColor,
    progress
  );
  interpolatedZoneConditions = zoneConditions;
}
`,bS=`#include <common>`,xS=`#include <begin_vertex>`,SS=`vec4 diffuseColor = vec4( diffuse, opacity );`,CS=`terrain-colors-v1`;function wS(e,t,n){let r=new z({color:16777215}),{minimumElevation:i,maximumElevation:a}=Md(t);return r.onBeforeCompile=t=>{Object.assign(t.uniforms,{terrainLowElevationColor:{value:new L(e.lowElevationColor)},terrainHighElevationColor:{value:new L(e.highElevationColor)},terrainWaterColor:{value:new L(e.waterColor)},terrainMinimumElevation:{value:i},terrainMaximumElevation:{value:a}}),t.vertexShader=t.vertexShader.replace(bS,`${bS}\n${yS}`).replace(xS,`${xS}\npassTerrainElevationColor(transformed);`),t.fragmentShader=t.fragmentShader.replace(bS,`${bS}\n${vS}`).replace(SS,`vec4 diffuseColor = vec4(getTerrainColor(), opacity);`)},r.customProgramCacheKey=()=>CS,{material:r,conditionsAt:n.zoneConditionsAt}}var TS=new Ed,ES=1;function DS(e,t,n){let{surface:r,zones:i}=n,a=Od(e,t,r),o=Nd(e,t,r);return{riverChannelMarginMeters:r.river.channelHalfWidthMeters-o,waterDepthMeters:r.river.waterHeightY-a,groundSlope:jS(e,t,r),forestRegionValue:TS.noise(e/i.featureSizeMeters,t/i.featureSizeMeters,r.seed/1e3+41)}}function OS(e,t){return AS(e)?`water`:e.groundSlope>=t.shrubSlopeThreshold?`shrubSlope`:e.forestRegionValue<=t.coniferForestThreshold?`coniferForest`:e.forestRegionValue>=t.deciduousForestThreshold?`deciduousForest`:`meadow`}function kS(e,t){if(AS(e))return{meadow:0,coniferForest:0,deciduousForest:0,shrubSlope:0};let n=t.forestTransitionWidth/2,r=t.slopeTransitionWidth/2,i=W.smoothstep(e.groundSlope,t.shrubSlopeThreshold-r,t.shrubSlopeThreshold+r),a=(1-i)*(1-W.smoothstep(e.forestRegionValue,t.coniferForestThreshold-n,t.coniferForestThreshold+n)),o=(1-i-a)*W.smoothstep(e.forestRegionValue,t.deciduousForestThreshold-n,t.deciduousForestThreshold+n);return{meadow:1-i-a-o,coniferForest:a,deciduousForest:o,shrubSlope:i}}function AS(e){return e.riverChannelMarginMeters>=0&&e.waterDepthMeters>0}function jS(e,t,n){let r=ES,i=(Od(e+r,t,n)-Od(e-r,t,n))/2,a=(Od(e,t+r,n)-Od(e,t-r,n))/2;return Math.hypot(i,a)}var MS=`/*
 * Purpose: Give animated animals a warm body core that cools toward extremities.
 * Context: Being alive means giving off heat, and a body is never one temperature.
 * Responsibility: Map the posed vertex into body space and fall off from the core.
 * Boundary: Skinning happens before projection; ramp colors stay in the fragment shader.
 */

uniform float thermalActorWarmth;
uniform float thermalActorExtremityFalloff;
uniform mat4 thermalActorBodyMatrix;
uniform vec4 thermalActorBodyShape;
uniform float thermalTextureFeatureSize;

varying float thermalViewDistance;
varying float interpolatedThermalWarmth;
varying vec3 thermalTexturePosition;
varying vec3 thermalWorldPosition;

void passThermalPerception(vec4 viewPosition, vec3 localPosition) {
  thermalViewDistance = length(viewPosition.xyz);
  // Skinning has already posed the vertex, so the authored body matrix maps
  // the living pose onto normalized body space: y runs 0..1 from hoof to
  // crown and xz stay isotropic around the body's own vertical axis. The
  // measurement therefore fits every species without per-species values.
  vec3 bodyPosition = (thermalActorBodyMatrix * vec4(localPosition, 1.0)).xyz;
  float axisDistance = length(bodyPosition.xz) * thermalActorBodyShape.w;
  float coreOffset = bodyPosition.y - thermalActorBodyShape.x;
  float coreDistance = length(vec2(axisDistance, coreOffset));
  // One smooth falloff: the torso holds the peak, and legs, snouts, tails,
  // and antlers cool with how far they reach away from it.
  float falloff = smoothstep(
    thermalActorBodyShape.y,
    thermalActorBodyShape.z,
    coreDistance
  );
  interpolatedThermalWarmth = clamp(
    thermalActorWarmth - falloff * thermalActorExtremityFalloff,
    0.0,
    1.0
  );
  // Body space, not world space: the fine variation belongs to the animal
  // and travels with it, instead of sliding over its coat as it walks. The
  // feature size is a share of body height, so a fox and a stag carry the
  // same density of detail.
  thermalTexturePosition = bodyPosition / thermalTextureFeatureSize;
  thermalWorldPosition = (modelMatrix * vec4(localPosition, 1.0)).xyz;
}
`,NS=`/*
 * Purpose: Give instanced surface props a stable temperature and an internal gradient.
 * Context: Vegetation and rocks need variation between objects and across each one.
 * Responsibility: Hash the instance around a base warmth, then shade it by local position.
 * Boundary: Instance transforms stay with the model pools; ramp colors stay in the fragment shader.
 */

uniform float thermalBaseWarmth;
uniform float thermalWarmthSpread;
uniform float thermalHashCellMeters;
uniform float thermalHeightWarmthPerMeter;
uniform float thermalAxisWarmthPerMeter;
uniform float thermalTextureFeatureSize;

varying float thermalViewDistance;
varying float interpolatedThermalWarmth;
varying vec3 thermalTexturePosition;
varying vec3 thermalWorldPosition;

float thermalInstanceHash(vec2 cell) {
  return fract(sin(dot(cell, vec2(127.1, 311.7))) * 43758.5453123);
}

void passThermalPerception(vec4 viewPosition, vec3 localPosition) {
  thermalViewDistance = length(viewPosition.xyz);
  float variation = 0.0;
  float gradient = 0.0;
#ifdef USE_INSTANCING
  vec3 worldPosition =
    (modelMatrix * instanceMatrix * vec4(localPosition, 1.0)).xyz;
  // Quantizing the instance origin lets every part of one plant or rock
  // hash into the same cell and agree on a single base warmth.
  vec3 instanceOrigin =
    (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  vec2 hashCell = floor(instanceOrigin.xz / thermalHashCellMeters);
  variation = (thermalInstanceHash(hashCell) - 0.5) * 2.0;
  // Metres from the object's own base and axis. The instance matrix carries
  // the per-object scale, so one authored gradient per metre reads the same
  // on a 0.6 m shrub and a 10 m tree: warmth held near the ground and near
  // the trunk, shed toward an outer canopy that radiates to the sky.
  vec3 offsetMeters = worldPosition - instanceOrigin;
  gradient =
    offsetMeters.y * thermalHeightWarmthPerMeter +
    length(offsetMeters.xz) * thermalAxisWarmthPerMeter;
#else
  vec3 worldPosition = (modelMatrix * vec4(localPosition, 1.0)).xyz;
#endif
  interpolatedThermalWarmth = clamp(
    thermalBaseWarmth + variation * thermalWarmthSpread + gradient,
    0.0,
    1.0
  );
  // World space, like the ground: neighbouring plants sample one continuous
  // field, so a stand varies across itself instead of repeating per model.
  thermalTexturePosition = worldPosition / thermalTextureFeatureSize;
  thermalWorldPosition = worldPosition;
}
`,PS=`/*
 * Purpose: Replace surface color with the warmth-driven false-color ramp.
 * Context: Level 05 shows heat directly; the sense reaches only a bounded radius.
 * Responsibility: Texture the warmth, map it onto the palette, and feather out at the edge.
 * Boundary: Warmth measurement stays in the vertex shaders; base colors stay with owners.
 */

uniform float thermalIntensity;
uniform float thermalRadiusMeters;
uniform float thermalEdgeFeatherMeters;
uniform float thermalCarriedColorBlend;
uniform vec4 thermalRampStops;
uniform vec4 thermalTextureShape;
uniform float thermalTextureWarmth;
uniform float thermalHeatResponse;
uniform int thermalHeatCount;
uniform vec4 thermalHeatBodies[THERMAL_HEAT_SOURCES];
uniform vec4 thermalHeatAxes[THERMAL_HEAT_SOURCES];
uniform float thermalHeatShapeMeters;
uniform vec2 thermalContrast;
uniform vec2 thermalBand;
uniform float thermalBandKnee;
uniform vec3 thermalColdestColor;
uniform vec3 thermalColdColor;
uniform vec3 thermalCoolColor;
uniform vec3 thermalWarmColor;
uniform vec3 thermalHotColor;
uniform vec3 thermalHottestColor;

varying float thermalViewDistance;
varying float interpolatedThermalWarmth;
varying vec3 thermalTexturePosition;
varying vec3 thermalWorldPosition;

/*
 * Hashing without sin(): world coordinates reach into the hundreds of metres,
 * where a driver's sin approximation loses precision and bands the field.
 */
float thermalTextureHash(vec3 cell) {
  vec3 point = fract(cell * 0.1031);
  point += dot(point, point.yzx + 33.33);
  return fract((point.x + point.y) * point.z);
}

/** One octave of value noise; quintic weights keep the lattice off the image. */
float thermalTextureNoise(vec3 samplePosition) {
  vec3 cell = floor(samplePosition);
  vec3 local = fract(samplePosition);
  vec3 weight = local * local * local * (local * (local * 6.0 - 15.0) + 10.0);
  float lower = mix(
    mix(
      thermalTextureHash(cell + vec3(0.0, 0.0, 0.0)),
      thermalTextureHash(cell + vec3(1.0, 0.0, 0.0)),
      weight.x
    ),
    mix(
      thermalTextureHash(cell + vec3(0.0, 1.0, 0.0)),
      thermalTextureHash(cell + vec3(1.0, 1.0, 0.0)),
      weight.x
    ),
    weight.y
  );
  float upper = mix(
    mix(
      thermalTextureHash(cell + vec3(0.0, 0.0, 1.0)),
      thermalTextureHash(cell + vec3(1.0, 0.0, 1.0)),
      weight.x
    ),
    mix(
      thermalTextureHash(cell + vec3(0.0, 1.0, 1.0)),
      thermalTextureHash(cell + vec3(1.0, 1.0, 1.0)),
      weight.x
    ),
    weight.y
  );
  return mix(lower, upper, weight.z);
}

/*
 * Several octaves, centred on zero. Each octave is turned by an orthonormal
 * rotation and stepped by a non-integer factor, so neither the lattice axes
 * nor the octave periods can ever line up: no grid, no checkerboard, and no
 * repeat, only irregular patches at every size at once. The coarsest octave
 * is what keeps a wide flat surface from reading as one temperature; the
 * finest is what keeps it from reading as smooth up close.
 */
float thermalTextureField(vec3 samplePosition) {
  mat3 turn = mat3(
    0.00, 0.80, 0.60,
    -0.80, 0.36, -0.48,
    -0.60, -0.48, 0.64
  );
  vec3 point = samplePosition;
  float amplitude = 1.0;
  float total = 0.0;
  float sum = 0.0;
  for (int octave = 0; octave < THERMAL_TEXTURE_OCTAVES; octave++) {
    sum += amplitude * thermalTextureNoise(point);
    total += amplitude;
    point = turn * point * thermalTextureShape.x;
    amplitude *= thermalTextureShape.y;
  }
  return sum / total * 2.0 - 1.0;
}

/*
 * Warmth radiated onto this surface by the living bodies near it. Each body
 * emits along a segment on its own axis, so the pool is as long as the animal
 * and turns with it; displacing the measured distance by the texture field
 * pulls the bloom out of symmetry so it never reads as a shape laid on the
 * ground.
 */
float thermalRadiatedWarmth(float shapeOffsetMeters) {
  if (thermalHeatResponse == 0.0) {
    return 0.0;
  }
  float radiated = 0.0;
  for (int index = 0; index < THERMAL_HEAT_SOURCES; index++) {
    if (index >= thermalHeatCount) {
      break;
    }
    vec4 body = thermalHeatBodies[index];
    vec4 axis = thermalHeatAxes[index];
    vec3 toSurface = thermalWorldPosition - body.xyz;
    float along = clamp(dot(toSurface.xz, axis.xy), -body.w, body.w);
    vec3 nearestOnBody = vec3(axis.x, 0.0, axis.y) * along;
    float distanceMeters =
      max(length(toSurface - nearestOnBody) + shapeOffsetMeters, 0.0);
    // A gaussian tail: warmth thins out forever instead of stopping at a
    // distance, so the pool has no edge anywhere to read as a ring, and its
    // spread reaches far enough that the falloff is gradual throughout.
    float spread = max(axis.z, 0.0001);
    float reach = distanceMeters / spread;
    radiated += axis.w * exp(-reach * reach);
  }
  return radiated;
}

/*
 * Pull warmth away from an authored pivot so nearby readings separate. Two
 * halves meet at the pivot, each flat at its own end and steepest where they
 * join, which fixes cold, pivot, and full heat in place while expanding
 * everything between them. The curve is monotone and smooth, so structures
 * gain contrast without an outline or a posterized band appearing: warmth
 * that changes quickly across a surface separates the most, and warmth that
 * barely changes stays where it was.
 */
float thermalDefinedWarmth(float warmth) {
  float pivot = thermalContrast.y;
  float shaped;
  if (warmth < pivot) {
    float local = warmth / max(pivot, 0.0001);
    shaped = pivot * local * local;
  } else {
    float local = (warmth - pivot) / max(1.0 - pivot, 0.0001);
    float remaining = 1.0 - local;
    shaped = pivot + (1.0 - pivot) * (1.0 - remaining * remaining);
  }
  return mix(warmth, shaped, thermalContrast.x);
}

/*
 * Fold a reading into the temperature range its own material belongs to.
 * Both ends approach asymptotically inside a soft knee, so ground cannot
 * climb into the colors of a living body however its elevation, texture, and
 * contrast happen to add up, and nothing piles into a flat plateau at the
 * edge of the band. Outside the knees the reading passes through untouched.
 */
float thermalBandedWarmth(float warmth) {
  float knee = max(thermalBandKnee, 0.0001);
  float overCeiling = warmth - (thermalBand.y - knee);
  if (overCeiling > 0.0) {
    return thermalBand.y - knee * exp(-overCeiling / knee);
  }
  float underFloor = (thermalBand.x + knee) - warmth;
  if (underFloor > 0.0) {
    return thermalBand.x + knee * exp(-underFloor / knee);
  }
  return warmth;
}

vec3 applyThermalPerception(vec3 baseColor) {
  float senseReach = 1.0 - smoothstep(
    thermalRadiusMeters - thermalEdgeFeatherMeters,
    thermalRadiusMeters,
    thermalViewDistance
  );
  float sensed = senseReach * thermalIntensity;
  // Surfaces outside the sensed radius keep the carried color and pay for
  // neither the texture nor the ramp.
  if (sensed <= 0.0) {
    return baseColor;
  }

  float warmth = clamp(interpolatedThermalWarmth, 0.0, 1.0);
  float texture = thermalTextureField(thermalTexturePosition);
  // The texture eases off across the hottest surfaces, so a living body core
  // keeps its defined shape while cooler surfaces carry the fine variation.
  float textureGain =
    1.0 -
    smoothstep(thermalTextureShape.z, 1.0, warmth) * thermalTextureShape.w;
  warmth = clamp(warmth + texture * thermalTextureWarmth * textureGain, 0.0, 1.0);
  // Definition next: the curve acts on the surface's own finished reading, so
  // its base warmth, its internal gradient, and its texture all gain contrast
  // from the same natural temperature difference.
  warmth = thermalDefinedWarmth(warmth);
  // Then the material's own range closes over all of it.
  warmth = thermalBandedWarmth(warmth);
  // Radiated warmth is added last and outside the band: heat borrowed from a
  // body nearby is not the surface's own temperature, and it is the one thing
  // that may carry ground past the range its substance would ever reach. It
  // is added on top of the surface's reading, so ground inside a warm pool
  // keeps the variation it had rather than flooding flat.
  warmth = clamp(
    warmth +
      thermalHeatResponse *
        thermalRadiatedWarmth(texture * thermalHeatShapeMeters),
    0.0,
    1.0
  );

  vec3 ramp = mix(
    thermalColdestColor,
    thermalColdColor,
    smoothstep(0.0, thermalRampStops.x, warmth)
  );
  ramp = mix(
    ramp,
    thermalCoolColor,
    smoothstep(thermalRampStops.x, thermalRampStops.y, warmth)
  );
  ramp = mix(
    ramp,
    thermalWarmColor,
    smoothstep(thermalRampStops.y, thermalRampStops.z, warmth)
  );
  ramp = mix(
    ramp,
    thermalHotColor,
    smoothstep(thermalRampStops.z, thermalRampStops.w, warmth)
  );
  ramp = mix(
    ramp,
    thermalHottestColor,
    smoothstep(thermalRampStops.w, 1.0, warmth)
  );
  // The carried world keeps a fixed share of every sensed surface, so the
  // false color reads as heat seen through that world instead of replacing
  // it, and its near-dark to far-pale shading stays as a quiet depth cue.
  return mix(baseColor, ramp, sensed * (1.0 - thermalCarriedColorBlend));
}
`,FS={coldStopFraction:.18,coolStopFraction:.44,warmStopFraction:.7,hotStopFraction:.86,terrainWarmth:{shorelineWarmth:.05,waterColdPerDepthMeter:.02,landWarmthFloor:.06,landElevationWarmthSpan:.7,forestWarmthBoost:.05,slopeWarmthBoost:.04},actorBody:{coreHeightFraction:.62,coreRadiusFraction:.14,extremityReachFraction:.5,horizontalWeight:.55},texture:{octaves:4,featureSizeMeters:5,bodyFeatureFraction:.35,lacunarity:2.9,gain:.7,quietWarmth:.8,quietAmount:.45},definition:{terrainPivot:.28,grassPivot:.3,vegetationPivot:.56,undergrowthPivot:.34,rockPivot:.28,actorPivot:.75},bandKneeWarmth:.11,heat:{maxSources:4,bodyHalfLengthFraction:.55,coreHeightFraction:.45,shapeIrregularityMeters:1.8},instanceHashCellMeters:1},IS=`/*
 * Purpose: Forward the CPU-sampled ground warmth, view distance, and texture position.
 * Context: Terrain streams a per-vertex warmth attribute from elevation and zone facts.
 * Responsibility: Write the radial view distance and pass the warmth attribute through.
 * Boundary: Warmth sampling stays on the CPU; ramp colors stay in the fragment shader.
 */

uniform float thermalTextureFeatureSize;

attribute float thermalWarmth;

varying float thermalViewDistance;
varying float interpolatedThermalWarmth;
varying vec3 thermalTexturePosition;
varying vec3 thermalWorldPosition;

void passThermalPerception(vec4 viewPosition, vec3 localPosition) {
  thermalViewDistance = length(viewPosition.xyz);
  interpolatedThermalWarmth = thermalWarmth;
  // World space: the ground's fine variation belongs to the place, so it
  // stays put underfoot however the traveler moves across it.
  thermalTexturePosition =
    (modelMatrix * vec4(localPosition, 1.0)).xyz / thermalTextureFeatureSize;
  thermalWorldPosition = (modelMatrix * vec4(localPosition, 1.0)).xyz;
}
`,LS=[`#define THERMAL_HEAT_SOURCES ${FS.heat.maxSources}`,`#define THERMAL_TEXTURE_OCTAVES ${FS.texture.octaves}`].join(`
`),RS=`thermal-terrain-v8`,zS=`thermal-instanced-v8`,BS=`thermal-actor-v8`;function VS(e,t){XS(e);let n=WS(e.heatEmission),r={thermalIntensity:{value:e.intensity},thermalRadiusMeters:{value:e.radiusMeters},thermalEdgeFeatherMeters:{value:e.edgeFeatherMeters},thermalCarriedColorBlend:{value:e.carriedColorBlend},thermalRampStops:{value:new Ct(FS.coldStopFraction,FS.coolStopFraction,FS.warmStopFraction,FS.hotStopFraction)},thermalColdestColor:{value:new L(e.colors.coldestColor)},thermalColdColor:{value:new L(e.colors.coldColor)},thermalCoolColor:{value:new L(e.colors.coolColor)},thermalWarmColor:{value:new L(e.colors.warmColor)},thermalHotColor:{value:new L(e.colors.hotColor)},thermalHottestColor:{value:new L(e.colors.hottestColor)},thermalTextureShape:{value:new Ct(FS.texture.lacunarity,FS.texture.gain,FS.texture.quietWarmth,FS.texture.quietAmount)},thermalHeatShapeMeters:{value:FS.heat.shapeIrregularityMeters},...n.uniforms},i=FS.texture.featureSizeMeters,a=FS.actorBody,o={thermalActorWarmth:{value:e.actorWarmth},thermalActorExtremityFalloff:{value:e.actorExtremityFalloff},...qS(e.actorTextureWarmth,FS.texture.bodyFeatureFraction),...KS(e.actorContrast,FS.definition.actorPivot),...GS(e.bands.animals),thermalActorBodyShape:{value:new Ct(a.coreHeightFraction,a.coreRadiusFraction,a.extremityReachFraction,a.horizontalWeight)}};return{setHeatSources:n.setSources,setIntensity:e=>{r.thermalIntensity.value=e},terrain:{applyTo:HS({cacheKey:RS,uniforms:{...r,...qS(e.terrainTextureWarmth,i),...KS(e.terrainContrast,FS.definition.terrainPivot),...GS(e.bands.terrain),...US},vertexHeader:IS}),warmthAt:YS(t)},vegetation:{applyTo:HS({cacheKey:zS,uniforms:{...r,...JS(e.surfaces.vegetationWarmth,e.surfaces.vegetationWarmthSpread,e.surfaces.vegetationHeightWarmthPerMeter,e.surfaces.vegetationAxisWarmthPerMeter),...qS(e.surfaces.vegetationTextureWarmth,i),...KS(e.surfaces.vegetationContrast,FS.definition.vegetationPivot),...GS(e.bands.vegetation),...US},vertexHeader:NS})},undergrowth:{applyTo:HS({cacheKey:zS,uniforms:{...r,...JS(e.surfaces.undergrowthWarmth,e.surfaces.undergrowthWarmthSpread,e.surfaces.undergrowthHeightWarmthPerMeter,e.surfaces.undergrowthAxisWarmthPerMeter),...qS(e.surfaces.undergrowthTextureWarmth,i),...KS(e.surfaces.undergrowthContrast,FS.definition.undergrowthPivot),...GS(e.bands.undergrowth),...US},vertexHeader:NS})},grass:{applyTo:HS({cacheKey:zS,uniforms:{...r,...JS(e.surfaces.grassWarmth,0,0,0),...qS(e.surfaces.grassTextureWarmth,i),...KS(e.surfaces.grassContrast,FS.definition.grassPivot),...GS(e.bands.grass),...US},vertexHeader:NS})},rocks:{applyTo:HS({cacheKey:zS,uniforms:{...r,...JS(e.surfaces.rockWarmth,e.surfaces.rockWarmthSpread,e.surfaces.rockHeightWarmthPerMeter,e.surfaces.rockAxisWarmthPerMeter),...qS(e.surfaces.rockTextureWarmth,i),...KS(e.surfaces.rockContrast,FS.definition.rockPivot),...GS(e.bands.rocks),...US},vertexHeader:NS})},animals:e=>({applyTo:HS({cacheKey:BS,uniforms:{...r,...o,thermalHeatResponse:{value:0},thermalActorBodyMatrix:{value:e}},vertexHeader:MS})})}}function HS(e){return t=>{xu(t,{...e,vertexAnchor:`#include <project_vertex>`,vertexCall:`passThermalPerception(mvPosition, transformed);`,fragmentHeader:`${LS}\n${PS}`,colorFragmentCall:`diffuseColor.rgb = applyThermalPerception(diffuseColor.rgb);`})}}var US={thermalHeatResponse:{value:1}};function WS(e){let{maxSources:t,bodyHalfLengthFraction:n,coreHeightFraction:r}=FS.heat,i=Array.from({length:t},()=>new Ct),a=Array.from({length:t},()=>new Ct),o={value:0};return{uniforms:{thermalHeatCount:o,thermalHeatBodies:{value:i},thermalHeatAxes:{value:a}},setSources:s=>{let c=Math.min(s.length,t);for(let t=0;t<c;t++){let o=s[t];if(!o)continue;let{heightMeters:c}=o;i[t]?.set(o.x,o.y+c*r,o.z,c*n),a[t]?.set(Math.sin(o.headingRadians),Math.cos(o.headingRadians),c*e.reachPerBodyHeight,e.strength)}o.value=c}}}function GS(e){return{thermalBand:{value:new Ne(e.floorWarmth,e.ceilingWarmth)},thermalBandKnee:{value:FS.bandKneeWarmth}}}function KS(e,t){return{thermalContrast:{value:new Ne(e,t)}}}function qS(e,t){return{thermalTextureWarmth:{value:e},thermalTextureFeatureSize:{value:t}}}function JS(e,t,n,r){return{thermalBaseWarmth:{value:e},thermalWarmthSpread:{value:t},thermalHeightWarmthPerMeter:{value:n},thermalAxisWarmthPerMeter:{value:r},thermalHashCellMeters:{value:FS.instanceHashCellMeters}}}function YS({surfaceSettings:e,conditionsAt:t}){let{minimumElevation:n,maximumElevation:r}=Md(e),i=r-n,a=FS.terrainWarmth;return(e,r,o)=>{let s=t(e,r);if(AS(s))return Math.max(0,a.shorelineWarmth-s.waterDepthMeters*a.waterColdPerDepthMeter);let c=Math.min(Math.max((o-n)/i,0),1),l=Math.min(Math.abs(s.forestRegionValue),1)*a.forestWarmthBoost,u=Math.min(s.groundSlope,1)*a.slopeWarmthBoost;return Math.min(1,a.landWarmthFloor+c*a.landElevationWarmthSpan+l+u)}}function XS(e){if(![e.intensity,e.carriedColorBlend,e.surfaces.vegetationWarmth,e.surfaces.vegetationWarmthSpread,e.surfaces.rockWarmth,e.surfaces.rockWarmthSpread,e.actorWarmth,e.actorExtremityFalloff,e.terrainTextureWarmth,e.actorTextureWarmth,e.surfaces.vegetationTextureWarmth,e.surfaces.undergrowthWarmth,e.surfaces.undergrowthWarmthSpread,e.surfaces.undergrowthTextureWarmth,e.surfaces.undergrowthContrast,e.surfaces.rockTextureWarmth,e.heatEmission.strength,e.terrainContrast,e.actorContrast,e.surfaces.vegetationContrast,e.surfaces.rockContrast,...Object.values(e.bands).flatMap(e=>[e.floorWarmth,e.ceilingWarmth])].every(Cu))throw RangeError(`Thermal intensity and warmth values must be between zero and one`);if(![e.surfaces.vegetationHeightWarmthPerMeter,e.surfaces.vegetationAxisWarmthPerMeter,e.surfaces.undergrowthHeightWarmthPerMeter,e.surfaces.undergrowthAxisWarmthPerMeter,e.surfaces.rockHeightWarmthPerMeter,e.surfaces.rockAxisWarmthPerMeter].every(e=>Number.isFinite(e)))throw RangeError(`Thermal surface gradients must be finite`);if(Object.values(e.bands).some(e=>e.floorWarmth>=e.ceilingWarmth))throw RangeError(`Thermal warmth bands must rise from floor to ceiling`);if(!Su(e.heatEmission.reachPerBodyHeight))throw RangeError(`Thermal heat reach must be positive and finite`);if(!Su(e.radiusMeters))throw RangeError(`Thermal radius must be positive and finite`);if(!Su(e.edgeFeatherMeters)||e.edgeFeatherMeters>=e.radiusMeters)throw RangeError(`Thermal edge feather must be positive and fit inside the radius`)}var ZS=1;function QS(e,t){let{riverChannelMarginMeters:n}=e.zoneConditionsAt(t.worldX,t.worldZ);return-n>=ZS}var $S=new Set([`bush`,`flowering-bush`]);function eC(e){return $S.has(e)?`undergrowth`:`canopy`}var tC={seed:341,candidateSpacingMeters:8,assets:[{id:`pine-1`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-01.glb`,objectName:`Pine_4`,minimumHeightMeters:5,maximumHeightMeters:9.5},{id:`pine-2`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-02.glb`,objectName:`Pine_5`,minimumHeightMeters:4.5,maximumHeightMeters:8.5},{id:`pine-3`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-pack.glb`,objectName:`PineTree_5`,minimumHeightMeters:5,maximumHeightMeters:9},{id:`deciduous-tree-1`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/deciduous-pack.glb`,objectName:`NormalTree_1`,minimumHeightMeters:5,maximumHeightMeters:9.5},{id:`deciduous-tree-2`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/deciduous-pack.glb`,objectName:`NormalTree_2`,minimumHeightMeters:4.5,maximumHeightMeters:8.5},{id:`deciduous-tree-3`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/deciduous-pack.glb`,objectName:`NormalTree_3`,minimumHeightMeters:6,maximumHeightMeters:10},{id:`bush`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/bush.glb`,objectName:`Bush_Common`,minimumHeightMeters:.7,maximumHeightMeters:1.3},{id:`flowering-bush`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/flowering-bush.glb`,objectName:`Bush_Common_Flowers`,minimumHeightMeters:.6,maximumHeightMeters:1.2},{id:`pine-4`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-pack.glb`,objectName:`PineTree_1`,minimumHeightMeters:5,maximumHeightMeters:9.5},{id:`pine-5`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-pack.glb`,objectName:`PineTree_2`,minimumHeightMeters:4,maximumHeightMeters:8},{id:`pine-6`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-pack.glb`,objectName:`PineTree_3`,minimumHeightMeters:5.5,maximumHeightMeters:10},{id:`pine-7`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-pack.glb`,objectName:`PineTree_4`,minimumHeightMeters:4.5,maximumHeightMeters:8.5},{id:`deciduous-tree-4`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/deciduous-pack.glb`,objectName:`NormalTree_4`,minimumHeightMeters:5,maximumHeightMeters:9},{id:`deciduous-tree-5`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/deciduous-pack.glb`,objectName:`NormalTree_5`,minimumHeightMeters:4,maximumHeightMeters:8},{id:`birch-1`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/birch-pack.glb`,objectName:`BirchTree_1`,minimumHeightMeters:6.5,maximumHeightMeters:11},{id:`birch-2`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/birch-pack.glb`,objectName:`BirchTree_2`,minimumHeightMeters:6,maximumHeightMeters:10.5},{id:`birch-3`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/birch-pack.glb`,objectName:`BirchTree_3`,minimumHeightMeters:7,maximumHeightMeters:12},{id:`dead-tree-1`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/dead-tree-pack.glb`,objectName:`DeadTree_6`,minimumHeightMeters:4,maximumHeightMeters:8},{id:`dead-tree-2`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/dead-tree-pack.glb`,objectName:`DeadTree_7`,minimumHeightMeters:3.5,maximumHeightMeters:7}],variantsByZone:{meadow:[{assetId:`deciduous-tree-1`,weight:.5},{assetId:`deciduous-tree-2`,weight:.5},{assetId:`deciduous-tree-3`,weight:.5},{assetId:`deciduous-tree-4`,weight:.5},{assetId:`deciduous-tree-5`,weight:.5},{assetId:`birch-1`,weight:.5},{assetId:`bush`,weight:7}],coniferForest:[{assetId:`pine-1`,weight:1},{assetId:`pine-2`,weight:1},{assetId:`pine-3`,weight:1},{assetId:`pine-4`,weight:1},{assetId:`pine-5`,weight:1},{assetId:`pine-6`,weight:1},{assetId:`pine-7`,weight:.15},{assetId:`dead-tree-1`,weight:.5}],deciduousForest:[{assetId:`deciduous-tree-1`,weight:1},{assetId:`deciduous-tree-2`,weight:1},{assetId:`deciduous-tree-3`,weight:1},{assetId:`deciduous-tree-4`,weight:1},{assetId:`deciduous-tree-5`,weight:1},{assetId:`birch-1`,weight:1},{assetId:`birch-2`,weight:1},{assetId:`birch-3`,weight:1},{assetId:`dead-tree-2`,weight:.5}],shrubSlope:[{assetId:`bush`,weight:4},{assetId:`flowering-bush`,weight:1},{assetId:`dead-tree-1`,weight:.3}]}},nC=Math.PI*2,rC=.82,iC=1.18,aC=new U(0,1,0);function oC({parameters:e,colors:t,assets:n,chunkSize:r,chunkSlotCount:i,worldSurface:a,effectsFor:o}){Qg(e,r,`Vegetation`);let s=ml(r,e.candidateSpacingMeters),c=[];try{for(let[r,i]of e.assets.entries())c.push({id:i.id,model:hg(uC(n,i.id),i.objectName,e=>sC(t,e.name,r))});if(o)for(let{id:e,model:t}of c){let n=o(eC(e));if(n)for(let e of t.parts)dl(n,e.material)}return Vg({name:`Vegetation`,parameters:e,worldSurface:a,candidateGrid:s,sources:c,chunkSlotCount:i,writeTransform:cC})}catch(e){for(let{model:e}of c)_g(e);throw e}}function sC(e,t,n){return t===`trunk`?e.trunkColor:t===`flower`?e.flowerColor:n%2==0?e.leafColor:e.leafAccentColor}function cC(e,t,n,r){if(!QS(e.worldSurface,r))return;let i=e.modelPool.variants.get(n.id);if(!i)return;let a=Kg(e.parameters.seed,n,r)/i.model.height,o=lC(e,r,6),s=lC(e,r,7),c=e.worldSurface.groundYAt(r.worldX,r.worldZ)-i.model.minimumY*a;e.position.set(r.worldX,c,r.worldZ),e.rotation.setFromAxisAngle(aC,gl(e.parameters.seed,r.cellX,r.cellZ,4)*nC),e.scale.set(a*o,a,a*s),e.matrix.compose(e.position,e.rotation,e.scale),Tg(e.modelPool,n.id,t.slotIndex,e.matrix)}function lC(e,t,n){return dC(rC,iC,gl(e.parameters.seed,t.cellX,t.cellZ,n))}function uC(e,t){let n=e.get(t);if(!n)throw Error(`Vegetation asset not loaded: ${t}`);return n}function dC(e,t,n){return e+(t-e)*n}function fC(e){let t=qg(tC,e.preset);return Hg(e,(n,r)=>oC({parameters:t,colors:e.preset.colors,assets:e.assets,chunkSize:n,chunkSlotCount:r,worldSurface:e.worldSurface,effectsFor:e.effectsFor}))}var pC=2;function mC(e,t){let n=qg(tC,e),r=uh(pC),i=ml(r,n.candidateSpacingMeters);return{sourceClass:`vegetation`,appendChunkAnchors:(e,a,o,s)=>Xg(n,i,t,r,{chunkX:e,chunkZ:a,chunkSizeMeters:o},e=>QS(t,e),s)}}var hC=[`conifer`,`deciduous`,`birch`,`bush`,`floweringBush`,`deadWood`],gC=2,_C={"pine-1":`conifer`,"pine-2":`conifer`,"pine-3":`conifer`,"pine-4":`conifer`,"pine-5":`conifer`,"pine-6":`conifer`,"pine-7":`conifer`,"deciduous-tree-1":`deciduous`,"deciduous-tree-2":`deciduous`,"deciduous-tree-3":`deciduous`,"deciduous-tree-4":`deciduous`,"deciduous-tree-5":`deciduous`,"birch-1":`birch`,"birch-2":`birch`,"birch-3":`birch`,bush:`bush`,"flowering-bush":`floweringBush`,"dead-tree-1":`deadWood`,"dead-tree-2":`deadWood`};function vC(e,t){let n=qg(tC,e),r=uh(gC),i=ml(r,n.candidateSpacingMeters);for(let{id:e}of tC.assets)if(!_C[e])throw Error(`Vegetation asset has no scent group: ${e}`);return{groupIds:hC,maxPlantsPerChunk:e=>{let t=r/e,n=i.cellsPerSide/t;if(!Number.isInteger(t)||!Number.isInteger(n))throw RangeError(`Scent requests must align with the vegetation placement grid`);return n**2},appendChunkPlants:(e,a,o,s)=>Zg(n,i,t,r,{chunkX:e,chunkZ:a,chunkSizeMeters:o},e=>QS(t,e),({candidate:e,model:t},r)=>{let i=_C[t.id];i!==void 0&&s(e.worldX,r,e.worldZ,Kg(n.seed,t,e),i)})}}var yC=1,bC=1e4;function xC(e){let t,n=1,r=!1;function i(){t&&(t.material.opacity=n,t.visible=r&&n>0)}return{setPresence:e=>{n=Math.min(1,Math.max(0,e)),i()},module:{load:()=>{t=new Ye(new Ce(yC,16,8),new z({color:16777215,side:1,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1})),t.renderOrder=bC,t.frustumCulled=!1,t.position.copy(e.viewpoint.worldPosition),e.scene.add(t),i()},activate:()=>{r=!0,i()},update:()=>{t?.position.copy(e.viewpoint.worldPosition)},deactivate:()=>{r=!1,i()},unload:()=>{t&&=(e.scene.remove(t),t.geometry.dispose(),t.material.dispose(),void 0)}}}}var SC=`/*
 * Purpose: Blend a sensed surface's final color toward the live background.
 * Context: World states fade in and out of the haze during a show.
 * Responsibility: Mix the finished fragment color by one presence value.
 * Boundary: What drives presence and background stays with the show driver.
 */

uniform float worldFadePresence;
uniform vec3 worldFadeBackground;

vec3 applyWorldFade(vec3 baseColor) {
  return mix(worldFadeBackground, baseColor, worldFadePresence);
}
`,CC=`world-fade-v1`;function wC(){let e={value:1},t={value:new L(16777215)};return{setPresence:t=>{e.value=t},setBackground:e=>{t.value.copy(e)},applyTo:n=>{xu(n,{cacheKey:CC,uniforms:{worldFadePresence:e,worldFadeBackground:t},vertexHeader:``,vertexAnchor:`#include <begin_vertex>`,vertexCall:``,fragmentHeader:SC,colorFragmentCall:`diffuseColor.rgb = applyWorldFade(diffuseColor.rgb);`})}}}var TC=[`pointerdown`,`keydown`];function EC(){let e=new AudioContext,t;function n(){t||e.state===`running`||e.resume().catch(()=>void 0)}for(let e of TC)window.addEventListener(e,n);return{readSeconds:()=>e.currentTime,readState:()=>e.state,unload(){for(let e of TC)window.removeEventListener(e,n);return t??=e.close(),t}}}function DC(e,t){let n,i=new AbortController,a,o=r(async()=>{let{startOrganRuntime:e}=await import(`./organ-runtime-Cl9Ag_-R.js`);return{startOrganRuntime:e}},__vite__mapDeps([0,1,2])).then(async({startOrganRuntime:r})=>{n=await r(e,t,i.signal)});return o.catch(e=>console.error(`Organ startup failed`,e)),{update:e=>{i.signal.aborted||n?.update(e)},unload:()=>(i.abort(),a??=o.then(()=>n?.unload()),a)}}var OC=.25,kC=2;function AC(e){let t=new Map,n,r,i=!1;function a(){i=!0;let e=[];for(let n of new Set([...t.values(),r]))if(n)try{u(n)}catch(t){e.push(t)}if(t.clear(),r=void 0,e.length)throw AggregateError(e,`Narration cleanup failed`)}function o(e){if(!i)try{for(let[n,i]of t)e.some(e=>e.cueId===n&&e.url===i.url)||(i!==r&&u(i),t.delete(n));for(let i of e){let e=t.get(i.cueId)??(n===i.cueId&&r?.url===i.url?r:void 0);if(e){e.durationSeconds=i.durationSeconds,t.set(i.cueId,e);continue}let a=new Audio(i.url);a.preload=`auto`,t.set(i.cueId,{element:a,url:i.url,durationSeconds:i.durationSeconds})}}catch(e){try{a()}catch(t){throw AggregateError([e,t],`Narration preparation failed`)}throw e}}o(e.recordings);let s=!1;function c(){if(n===void 0)return;let e=t.get(n);e&&e!==r&&l(e),r&&(l(r),e!==r&&u(r)),r=void 0,n=void 0}function l(e){e.playAttempt=void 0,e.heldSeekSeconds=void 0,e.requestedOffsetSeconds=void 0,e.pendingStartSeconds=void 0,e.replacementSeeks=void 0,e.playbackFailed=!1,e.element.pause()}function u(e){e.playAttempt=void 0,e.element.pause(),e.element.removeAttribute(`src`),e.element.load()}function d(){i||s||(s=!0,console.warn(`Narration playback failed; use Pause then Play to retry.`))}return{readHasEnded(e){let i=n===e?r:t.get(e);return!!(!i||i.element.ended||i.element.error||i.playbackFailed)},readOffsetSeconds(e){return!i&&n===e?r?.element.currentTime:void 0},readIsPlaying(){let e=r?.element;return!!(!i&&e&&!e.paused&&!e.ended&&e.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA)},follow(e){let{position:a,isPlaying:o,preserveNaturalEnd:s=!1}=e;if(i)return;let l=a?t.get(a.cueId):void 0;if(!a||!l||!s&&a.offsetSeconds>=l.durationSeconds){c();return}let u=a.cueId!==n;u&&(c(),n=a.cueId,r=l,l.element.muted=!1),r&&r!==l&&(p(r,e,!1),l.element.muted=!0),p(l,e,u),f(l,o)},setRecordings:o,unload:a};function f(e,t){r===e||e.element.readyState<HTMLMediaElement.HAVE_CURRENT_DATA||e.element.seeking||e.element.error||e.playbackFailed||t&&(e.element.paused||e.playAttempt)||(r&&u(r),r=e,e.replacementSeeks=void 0,e.element.muted=!1)}function p(e,t,n){let{position:r,timeScale:i,preserveNaturalEnd:a=!1}=t;if(!r)return;let{offsetSeconds:o}=r,{element:s}=e;if(!a&&o>=e.durationSeconds){(!s.paused||e.playAttempt)&&l(e);return}let c=a&&e.requestedOffsetSeconds!==void 0&&o+OC<e.requestedOffsetSeconds;e.requestedOffsetSeconds=o,a&&(n||c)&&(e.pendingStartSeconds=o),!(a&&s.ended&&!n&&!c)&&(s.playbackRate!==i&&(s.playbackRate=i),m(e,t,n||c),g(e,t.isPlaying))}function m(e,{position:t,isPlaying:n,preserveNaturalEnd:i=!1},a){if(!t)return;let{offsetSeconds:o}=t,{element:s}=e;if(!(r!==e&&n&&!h(e))&&(a||e.pendingStartSeconds!==void 0||!i&&(!n||Math.abs(s.currentTime-o)>OC))&&s.readyState>=HTMLMediaElement.HAVE_METADATA&&(n||e.heldSeekSeconds!==o)){let t=e.pendingStartSeconds??o;s.currentTime!==t&&(s.currentTime=t),e.heldSeekSeconds=t,e.pendingStartSeconds=void 0,r!==e&&(e.replacementSeeks=(e.replacementSeeks??0)+1)}}function h(e){return e.element.seeking?!1:!e.replacementSeeks||e.replacementSeeks<kC&&!e.playAttempt&&!e.element.paused}function g(e,t){let{element:n}=e;if(!t){(!n.paused||e.playAttempt)&&n.pause(),e.playAttempt=void 0,e.playbackFailed=!1;return}if(e.heldSeekSeconds=void 0,!n.paused||e.playAttempt)return;let r=n.play();e.playAttempt=r,r.then(()=>{e.playAttempt===r&&(e.playAttempt=void 0)},()=>{e.playAttempt===r&&(e.playbackFailed=!0,d())})}}function jC(e,t){let n=e.value;e.cancelScheduledValues(0),e.setValueAtTime(n,t)}var MC=3,NC=1/30,PC=[`pointerdown`,`keydown`];async function FC(t,n){let{Context:i,getContext:a,setContext:o}=await r(async()=>{let{Context:t,getContext:n,setContext:r}=await import(`./Tone-imY4xajJ.js`).then(t=>e(t.default,1));return{Context:t,getContext:n,setContext:r}},__vite__mapDeps([3,1,2])),s=a();if(!(s instanceof i))throw Error(`Spatial audio needs a live Tone context`);let c=s.state===`closed`?new i:s;c!==s&&o(c);let l,u;function d(){u||c.state===`running`||c.resume().catch(()=>void 0)}function f(){return u??=(async()=>{for(let e of PC)window.removeEventListener(e,d);let e=[];for(let t of[()=>l?.gain.disconnect(),()=>c.close(),()=>c.dispose()])try{await t()}catch(t){e.push(t)}if(e.length)throw AggregateError(e,`Spatial audio cleanup failed`)})(),u}try{n.throwIfAborted(),mt.setContext(c.rawContext);let e=new St;l=e,e.matrixAutoUpdate=!1;let r=new V,i=new U,a=new Ht,o=new U,s=new U,p=new U,m=c.rawContext.listener,h=[m.positionX,m.positionY,m.positionZ,m.forwardX,m.forwardY,m.forwardZ,m.upX,m.upY,m.upZ],g=!1,_=MC;for(let e of PC)window.addEventListener(e,d);return{context:c,listener:e,update(){if(u||c.state!==`running`||(_+=1,_<MC)||(t.updateWorldMatrix(!0,!1),g&&r.equals(t.matrixWorld)))return;g=!0,_=0,r.copy(t.matrixWorld),r.decompose(i,a,o),s.set(0,0,-1).applyQuaternion(a),p.set(0,1,0).applyQuaternion(a);let e=c.immediate();for(let t of h)jC(t,e);let n=e+NC;m.positionX.linearRampToValueAtTime(i.x,n),m.positionY.linearRampToValueAtTime(i.y,n),m.positionZ.linearRampToValueAtTime(i.z,n),m.forwardX.linearRampToValueAtTime(s.x,n),m.forwardY.linearRampToValueAtTime(s.y,n),m.forwardZ.linearRampToValueAtTime(s.z,n),m.upX.linearRampToValueAtTime(p.x,n),m.upY.linearRampToValueAtTime(p.y,n),m.upZ.linearRampToValueAtTime(p.z,n)},unload:f}}catch(e){try{await f()}catch(t){throw AggregateError([e,t],`Spatial audio startup failed`)}throw e}}var IC=.05;function LC(e){return new RC(e)}var RC=class{options;audio;recording;replacement;observation={offsetSeconds:0,ended:!1,failed:!1};revision=0;pending=!1;requested=!1;started=!1;blocked=!1;unloaded=!1;paused=!1;seekSeconds;constructor(e){this.options=e,this.audio=e.createAudio?.()??new Audio,this.audio.preload=`auto`,this.audio.addEventListener(`loadedmetadata`,this.seek),e.gestures.addEventListener(`pointerdown`,this.retryBlocked),e.gestures.addEventListener(`keydown`,this.retryBlocked)}play=(e,t)=>{if(!this.unloaded){if(!Number.isFinite(t)||t<0)throw RangeError(`Voice offset must be finite and nonnegative`);this.stop(),this.recording=e,this.requested=!0,this.seekSeconds=zC(e,t,`offsetSeconds`),this.audio.getAttribute(`src`)!==e.url&&(this.audio.src=e.url,this.audio.load()),this.seek(),this.start()}};replace=e=>{if(this.unloaded||!this.requested||e.url===this.replacement?.recording.url||(this.cancelReplacement(),e.url===this.recording?.url||this.audio.ended))return;let t=this.options.createAudio?.()??new Audio,n=()=>this.prepareReplacement(),r=()=>this.cancelReplacement(),i=[`loadedmetadata`,`canplay`,`seeked`];for(let e of i)t.addEventListener(e,n);t.addEventListener(`error`,r),this.replacement={audio:t,recording:e,seekStage:`unprepared`,pending:!1,started:!1,blocked:!1,revision:0,cleanup:()=>{for(let e of i)t.removeEventListener(e,n);t.removeEventListener(`error`,r)}},t.preload=`auto`,t.volume=0,t.src=e.url,t.load(),this.prepareReplacement()};prepareReplacement(){let e=this.replacement;if(!e||e.pending||e.blocked)return;if(this.audio.ended){this.cancelReplacement();return}let{audio:t}=e;if(!(t.readyState<1||t.seeking)&&!(e.seekStage===`unprepared`&&(e.seekStage=`prepared`,!this.seekReplacement()))&&!(t.readyState<3)){if(!this.paused&&!e.started){this.startReplacement();return}e.seekStage===`prepared`&&(e.seekStage=`synchronized`,!this.seekReplacement())||this.commitReplacement()}}seekReplacement(){let e=this.replacement;if(!e)return!1;let t=zC(this.recording,this.seekSeconds??this.audio.currentTime,`nativeSeconds`),n=zC(e.recording,t,`offsetSeconds`);return Math.abs(e.audio.currentTime-n)>IC&&(e.audio.currentTime=n),!e.audio.seeking}startReplacement(){let e=this.replacement;if(!e)return;let t=e.revision;e.pending=!0,e.audio.play().then(()=>{this.replacement===e&&e.revision===t&&(e.pending=!1,e.started=!0,this.prepareReplacement())},n=>{this.replacement===e&&e.revision===t&&(e.pending=!1,e.blocked=n instanceof DOMException&&n.name===`NotAllowedError`,e.blocked||this.cancelReplacement())})}commitReplacement(){let e=this.replacement;if(!e)return;this.replacement=void 0,e.cleanup();let t=this.audio.volume;this.audio.removeEventListener(`loadedmetadata`,this.seek),this.audio.pause(),this.audio.removeAttribute(`src`),this.audio.load(),this.audio=e.audio,this.recording=e.recording,this.audio.volume=t,this.audio.addEventListener(`loadedmetadata`,this.seek),this.revision++,this.pending=this.blocked=this.observation.failed=!1,this.started=!0,this.seekSeconds=void 0}cancelReplacement(){let e=this.replacement;e&&(this.replacement=void 0,e.cleanup(),e.audio.pause(),e.audio.removeAttribute(`src`),e.audio.load())}seek=()=>{this.seekSeconds===void 0||this.audio.readyState<1||(this.audio.currentTime=this.seekSeconds,this.seekSeconds=void 0)};start(){if(!this.requested||this.pending||this.unloaded||this.paused)return;let e=this.revision;this.pending=!0,this.blocked=!1,this.observation.failed=!1,this.audio.play().then(()=>{e===this.revision&&(this.pending=!1,this.started=!0)},t=>{e===this.revision&&(this.pending=!1,this.blocked=t instanceof DOMException&&t.name===`NotAllowedError`,this.observation.failed=!0)})}retryBlocked=()=>{this.blocked&&this.start(),this.replacement?.blocked&&(this.replacement.blocked=!1,this.prepareReplacement())};setPaused=e=>{if(this.unloaded)return;if(this.paused===e){!e&&this.blocked&&this.start();return}this.paused=e;let t=this.replacement;if(t&&(t.revision++,t.pending=t.started=!1,t.seekStage=`unprepared`,t.audio.pause(),this.prepareReplacement()),!e){this.audio.ended||this.start();return}this.revision++,this.pending=!1,this.audio.pause()};readStatus=()=>this.unloaded?`ended`:this.paused?`paused`:this.blocked?`blocked`:this.read().failed?`error`:!this.requested||this.audio.ended?`ended`:this.pending||!this.started||this.audio.readyState<3?`loading`:`playing`;read=()=>{let e=this.requested&&this.started&&this.seekSeconds===void 0;return this.observation.failed||=!!this.audio.error,this.observation.offsetSeconds=e&&!this.observation.failed?Math.max(this.observation.offsetSeconds,zC(this.recording,this.audio.currentTime,`nativeSeconds`)):0,this.observation.ended=e&&!this.observation.failed&&this.audio.ended,this.observation};setPresence=e=>{this.unloaded||(this.audio.volume=Number.isFinite(e)?Math.max(0,Math.min(1,e)):0)};stop=()=>{this.cancelReplacement(),this.revision++,this.requested=this.pending=this.started=this.blocked=!1,this.seekSeconds=void 0,this.observation.offsetSeconds=0,this.observation.ended=this.observation.failed=!1,this.audio.pause()};unload=()=>{this.unloaded||(this.stop(),this.unloaded=!0,this.audio.removeEventListener(`loadedmetadata`,this.seek),this.options.gestures.removeEventListener(`pointerdown`,this.retryBlocked),this.options.gestures.removeEventListener(`keydown`,this.retryBlocked),this.audio.removeAttribute(`src`),this.audio.load())}};function zC(e,t,n){let r=e?.timeMap;if(!r?.length)return t;let i=n===`offsetSeconds`?`nativeSeconds`:`offsetSeconds`,a=0,o=0;for(let e of r){if(t<=e[n]){let r=e[n]-a;return o+(r>0?(t-a)/r:0)*(e[i]-o)}a=e[n],o=e[i]}return o+t-a}function BC(e=0){return new VC(e)}var VC=class{group=new we;camera=new nt;viewpoint=HC(this.camera);frameStartPosition=new U;frameStarted=!1;viewPose=new we;xrPitchRadians;desktopPosition=new U;desktopOrientation=this.camera.quaternion.clone();desktopFieldOfViewDegrees=this.camera.fov;constructor(e){this.group.name=`ViewerRig`,this.xrPitchRadians=W.degToRad(e),this.viewPose.name=`ViewPose`,this.viewPose.add(this.camera),this.group.add(this.viewPose)}enterXr=()=>{this.desktopPosition.copy(this.camera.position),this.desktopOrientation.copy(this.camera.quaternion),this.desktopFieldOfViewDegrees=this.camera.fov};leaveXr=()=>{this.camera.position.copy(this.desktopPosition),this.camera.quaternion.copy(this.desktopOrientation),this.camera.fov=this.desktopFieldOfViewDegrees};beginFrame=()=>{this.group.getWorldPosition(this.frameStartPosition),this.frameStarted=!0};publish=(e=!1)=>{this.group.updateWorldMatrix(!0,!1);let{viewpoint:t,camera:n,group:r}=this;t.worldFlightPosition.setFromMatrixPosition(r.matrixWorld),this.publishFlightDirection(),this.viewPose.rotation.x=e?this.xrPitchRadians:0,this.viewPose.updateMatrixWorld(!0),t.worldBodyDirection.setFromMatrixColumn(this.viewPose.matrixWorld,2).negate().normalize(),t.worldPosition.setFromMatrixPosition(n.matrixWorld),t.worldDirection.setFromMatrixColumn(n.matrixWorld,2).negate().normalize(),t.worldUp.setFromMatrixColumn(n.matrixWorld,1).normalize(),t.viewHalfAngleRadians=UC(n)};publishFlightDirection(){let{worldFlightPosition:e,worldFlightDirection:t}=this.viewpoint;this.frameStarted&&t.subVectors(e,this.frameStartPosition),(!this.frameStarted||t.lengthSq()===0)&&t.setFromMatrixColumn(this.group.matrixWorld,2).negate(),t.normalize(),this.frameStarted=!1}};function HC(e){return{worldPosition:new U,worldFlightPosition:new U,worldFlightDirection:new U(0,0,-1),worldBodyDirection:new U(0,0,-1),worldDirection:new U(0,0,-1),worldUp:new U(0,1,0),viewHalfAngleRadians:W.degToRad(e.getEffectiveFOV())/2,get viewDistanceMeters(){return e.far}}}function UC(e){let t=e.projectionMatrix.elements;return Math.atan(Math.max(0,Math.min((1-Math.abs(t[8]))/t[0],(1-Math.abs(t[9]))/t[5])))}function WC(e){let t=new U;return()=>(e.updateWorldMatrix(!0,!1),t.set(0,0,-1).applyQuaternion(e.quaternion),Math.atan2(-t.x,-t.z))}var GC={xrMirror:{maximumWidth:1280,maximumHeight:720},renderer:{antialias:!1,alpha:!1,xrCompatible:!0},streamQueue:{budgetMilliseconds:.5,capacity:256}};function KC(e){if(!e.xr.isPresenting)return;let t=e.xr.getCamera().cameras[0];if(!t)return;let n=t.viewport,r=e.getContext(),i=r.drawingBufferWidth,a=r.drawingBufferHeight;if(n.z===0||n.w===0||i===0||a===0)return;let o=e.getRenderTarget(),s=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),l=Math.min(i/n.z,a/n.w),u=Math.round(n.z*l),d=Math.round(n.w*l),f=Math.floor((i-u)/2),p=Math.floor((a-d)/2);try{e.state.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),e.state.setScissorTest(!1),e.clear(!0,!1,!1),r.blitFramebuffer(n.x,n.y,n.x+n.z,n.y+n.w,f,p,f+u,p+d,r.COLOR_BUFFER_BIT,r.LINEAR)}finally{e.setRenderTarget(o,s,c)}}var qC={optionalFeatures:[`local-floor`]};function JC(e){e.enabledFeatures?.includes(`layers`)||typeof XRWebGLBinding>`u`||Reflect.deleteProperty(XRWebGLBinding.prototype,`createProjectionLayer`)}function YC(e){e.xr.enabled=!0;let t=new Set,n=`unknown`,r,i,a;function o(){if(a)return;let r={availability:n,isSessionActive:e.xr.isPresenting};for(let e of t)e(r)}function s(e){a||e===n||(n=e,console.info(`XR: immersive-vr is ${e}.`),o())}function c(){if(!navigator.xr){s(`unsupported`);return}navigator.xr.isSessionSupported(`immersive-vr`).then(e=>s(e?`available`:`unsupported`),()=>s(`unsupported`))}return c(),navigator.xr?.addEventListener(`devicechange`,c),e.xr.addEventListener(`sessionstart`,o),e.xr.addEventListener(`sessionend`,o),{start:()=>a||i?Promise.reject(Error(`XR control is ending`)):r||(e.xr.getSession()||!navigator.xr?Promise.resolve():(r=l(navigator.xr).finally(()=>{r=void 0}),r)),stop:u,unload:()=>a||(a=u(),navigator.xr?.removeEventListener(`devicechange`,c),e.xr.removeEventListener(`sessionstart`,o),e.xr.removeEventListener(`sessionend`,o),t.clear(),a),subscribe:r=>a?()=>{}:(t.add(r),r({availability:n,isSessionActive:e.xr.isPresenting}),()=>{t.delete(r)})};async function l(t){let n=await t.requestSession(`immersive-vr`,qC);if(a||i){await n.end();return}try{JC(n),await e.xr.setSession(n)}catch(e){try{await n.end()}catch(t){throw AggregateError([e,t],`XR adoption and cleanup failed`)}throw e}}function u(){return i||(i=(async()=>{let t=await Promise.allSettled([r]),n=e.xr.getSession(),i=[],a=t[0];a?.status===`rejected`&&i.push(a.reason);try{await n?.end()}catch(e){i.push(e)}if(i.length)throw AggregateError(i,`XR stop failed`)})().finally(()=>{i=void 0}),i)}}function XC({canvas:e,viewport:t},n={}){let{xrViewPitchAssistDegrees:r=0}=n,i=new D,a=BC(r);i.add(a.group);let o=a.camera,s=new AbortController,c=ZC(e,s.signal),l=new _t,u=new qy,d=new hh(GC.streamQueue),f=YC(c);c.xr.addEventListener(`sessionstart`,b),c.xr.addEventListener(`sessionend`,x);let p,m,h,g;return l.connect(document),{scene:i,camera:o,viewerRig:a.group,viewpoint:a.viewpoint,renderer:c,modules:u,streamQueue:d,xr:f,prepareRenderer:y,start:v,stop:_,unload:()=>(g??=(async()=>{let e=[];try{await _()}catch(t){e.push(t)}for(let t of[()=>c.dispose(),()=>c.forceContextLoss(),()=>i.clear()])try{t()}catch(t){e.push(t)}if(e.length)throw AggregateError(e,`World cleanup failed`)})(),g)};function _(){return h??=(async()=>{s.abort();let e=[];for(let t of[()=>c.setAnimationLoop(null),()=>p?.disconnect(),()=>c.xr.removeEventListener(`sessionstart`,b),()=>c.xr.removeEventListener(`sessionend`,x),()=>l.dispose()])try{t()}catch(t){e.push(t)}let t=await Promise.allSettled([f.unload(),m]);for(let n of t)n.status===`rejected`&&n.reason!==s.signal.reason&&e.push(n.reason);if(e.length)throw AggregateError(e,`World stop failed`)})(),h}function v(e){s.signal.throwIfAborted(),S(),p??=new ResizeObserver(S),p.observe(t),c.setAnimationLoop(t=>{if(s.signal.aborted||(l.update(t),m))return;let n=l.getDelta();a.beginFrame(),e(n),!s.signal.aborted&&(a.publish(c.xr.isPresenting),u.update(n),d.update(),c.render(i,o),KC(c))})}function y(){return s.signal.throwIfAborted(),m??=(async()=>{await c.compileAsync(i,o),s.signal.throwIfAborted();let e=c.getRenderTarget(),t=c.getActiveCubeFace(),n=c.getActiveMipmapLevel(),r=c.xr.enabled,a=new Ot(1,1);a.texture.colorSpace=c.outputColorSpace;let l=[];try{i.traverse(e=>{l.push([e,e.visible,e.frustumCulled]),e.visible=!0,e.frustumCulled=!1}),c.xr.enabled=!1,c.setRenderTarget(a),c.render(i,o)}finally{for(let[e,t,n]of l)e.visible=t,e.frustumCulled=n;c.setRenderTarget(e,t,n),c.xr.enabled=r,a.dispose()}})().finally(()=>{m=void 0}),m}function b(){a.enterXr(),S()}function x(){a.leaveXr(),S()}function S(){if(s.signal.aborted)return;let n=t.clientWidth,r=t.clientHeight;if(n!==0&&r!==0){if(c.xr.isPresenting){let t=GC.xrMirror,i=Math.min(1,t.maximumWidth/n,t.maximumHeight/r),a=Math.max(1,Math.round(n*i)),o=Math.max(1,Math.round(r*i));e.width!==a&&(e.width=a),e.height!==o&&(e.height=o);return}c.setSize(n,r,!1),o.aspect=n/r,o.updateProjectionMatrix()}}}function ZC(e,t){let n=GC.renderer,r=e.getContext(`webgl2`,n);if(r===null)throw Error(`The browser offered no WebGL2 context to render into.`);return e.addEventListener(`webglcontextlost`,()=>{console.warn(`Renderer: the WebGL context was lost.`)},{signal:t}),e.addEventListener(`webglcontextrestored`,()=>{console.warn(`Renderer: the WebGL context was restored.`)},{signal:t}),new Ca({...GC.renderer,canvas:e,context:r})}var QC={seed:174,heightField:{baseHeightY:-8,rollingElevationMeters:5,rollingFeatureSizeMeters:48,detailElevationMeters:2.5,detailFeatureSizeMeters:20,mountainElevationMeters:28,mountainFeatureSizeMeters:450,mountainRegionSizeMeters:425},river:{waterHeightY:-7,riverBedHeightY:-9.5,channelHalfWidthMeters:2.5,bankHalfWidthMeters:24,primaryMeanderAmplitudeMeters:52,primaryMeanderLengthMeters:170,secondaryMeanderAmplitudeMeters:34,secondaryMeanderLengthMeters:72}};function $C(e,t){let n={surface:e,zones:t},r=(e,t)=>DS(e,t,n);return{groundYAt:(t,n)=>Od(t,n,e),surfaceYAt:(t,n)=>kd(t,n,e),zoneConditionsAt:r,zoneInfluencesAt:(e,n)=>kS(r(e,n),t),zoneAt:(e,n)=>OS(r(e,n),t)}}var ew={featureSizeMeters:112,coniferForestThreshold:-.25,deciduousForestThreshold:.28,shrubSlopeThreshold:.27,forestTransitionWidth:.1,slopeTransitionWidth:.08};function tw(e,t){if(t>=e.durationSeconds)return;let n=e.narration.findIndex(e=>e.atSeconds>t),r=(n===-1?e.narration.length:n)-1,i=e.narration[r];if(i)return{cueId:i.cueId,offsetSeconds:t-i.atSeconds}}function nw(e,t){if(!Su(e))throw RangeError(`Show duration must be positive and finite, received ${e}`);let n=0,r=t(),i=1,a=!1;function o(){if(!a)return n;let o=(t()-r)*i;return rw(n+o,e)}function s(){n=o(),r=t()}function c(i){if(!Number.isFinite(i))throw RangeError(`Seek target must be finite, received ${i}`);n=rw(i,e),r=t()}return{sample:()=>({timeSeconds:o(),isPlaying:a,timeScale:i}),play(){s(),a=!0},pause(){s(),a=!1},seekTo:c,seekBy(e){c(o()+e)},setTimeScale(e){if(!Su(e))throw RangeError(`Time scale must be positive and finite, received ${e}`);s(),i=e}}}function rw(e,t){return e<0?0:e>t?t:e}var iw=new Float32Array;function aw(e){cw(e.schedule.durationSeconds,`Show`);let t=en(e.schedule,0);if(!t)throw Error(`A show schedule needs at least one cue`);return t}async function ow(e,t){let n=new sw(e,t,aw(e));try{return n.prepare(),n}catch(e){try{await n.unload()}catch(t){throw AggregateError([e,t],`Show startup failed`)}throw e}}var sw=class{request;options;openingLevel;clock;targetBackground=new L;liveBackground=new L(16777215);listenerPose={x:0,y:0,z:0,yawRadians:0,pitchRadians:0};voiceStrengths={wind:0,choir:0,sonar:0,birdWingBeat:0,insectWingBeat:0,bassLoop:0,pressureWave:0,polyRhythm:0,hiHat:0};language;narration;unloading;activeLevel;constructor(e,t,n){this.request=e,this.options=t,this.openingLevel=n,this.language=e.language}prepare(){this.clock=nw(this.request.schedule.durationSeconds,this.options.timebase.readSeconds),this.prepareNarration(),this.followWorld(0)}unload=()=>(this.clock?.pause(),this.unloading??=this.releaseAudio(),this.unloading);async releaseAudio(){let e=(await Promise.allSettled([Promise.resolve().then(()=>this.narration?.unload()),this.options.droneOrgan?.unload(),this.options.timebase.unload()])).flatMap(e=>e.status===`rejected`?[e.reason]:[]);if(e.length)throw AggregateError(e,`Show cleanup failed`)}prepareNarration(){let e=this.request.schedule.narration.map(({cueId:e})=>({cueId:e,url:Yt(e,this.language),durationSeconds:Xt(e,this.language)}));this.narration??=this.options.createNarration(),this.narration.setRecordings(e)}followBackground(e){let t=nn(this.request.schedule,e);if(!t)return;this.targetBackground.setHex(this.request.states[t.to].backgroundColor),this.liveBackground.setHex(this.request.states[t.from].backgroundColor).lerp(this.targetBackground,t.progress);let{world:n,reach:r}=this.options;n.renderer.setClearColor(this.liveBackground),r.worldFades.structure?.setBackground(this.liveBackground),r.worldFades.animals?.setBackground(this.liveBackground),r.setSkyBackground?.(this.liveBackground)}setSense(e,t,n){let{reach:r,world:i}=this.options;r.senses[e]?.(t);let a=r.gates.get(e)??[],o=t>0?`live`:a.length===0?`away`:an(this.request.schedule,this.request.states,e,n);for(let e of a)o===`live`?i.modules.activate(e):o===`warming`?i.modules.warm(e):i.modules.deactivate(e);e===`echo`&&r.worldFades.structure?.setPresence(t),e===`thermal`&&r.worldFades.animals?.setPresence(t)}followWorld(e){let t=en(this.request.schedule,e);if(t!==void 0&&t!==this.activeLevel){let{camera:e}=this.options.world;e.far=this.request.states[t].viewDistance,e.updateProjectionMatrix(),this.activeLevel=t}this.followBackground(e);for(let t of Zt)this.setSense(t,rn(this.request.schedule,this.request.states,t,e),e);this.options.reach.setEndCreditsPresence?.(us(this.request.schedule,e)),this.options.reach.followPassages?.(e)}followOrgan(e){for(let t of ds)this.voiceStrengths[t]=ps(this.request.schedule,fs,t,e.timeSeconds);lw(this.options.world,this.listenerPose),this.options.droneOrgan?.update({showTimeSeconds:e.timeSeconds,isPlaying:e.isPlaying,timeScale:e.timeScale,voiceStrengths:this.voiceStrengths,listener:this.listenerPose,groundYMeters:this.options.worldSurface.groundYAt(this.listenerPose.x,this.listenerPose.z),readGroupCenters:e=>this.options.reach.readMotionActorCenters?.(e===`insects`?`flies`:`birds`)??iw})}readActiveLevelState=()=>this.request.states[this.readActiveLevel()];update=()=>{if(this.unloading)return;let e=this.clock.sample();this.narration?.follow({position:tw(this.request.schedule,e.timeSeconds),isPlaying:e.isPlaying,timeScale:e.timeScale}),this.followWorld(e.timeSeconds),this.followOrgan(e)};pause=()=>{this.clock.pause()};resetTime=()=>{this.clock.seekTo(0),this.clock.pause()};setLanguage=e=>{this.unloading||e===this.language||(this.language=e,this.prepareNarration())};play=()=>{this.clock.play()};seekTo=e=>{this.clock.seekTo(e)};seekBy=e=>{this.clock.seekBy(e)};setTimeScale=e=>{this.clock.setTimeScale(e)};togglePlayback=()=>{this.clock.sample().isPlaying?this.pause():this.clock.play()};readLanguage=()=>this.language;readActiveLevel=()=>this.activeLevel??this.openingLevel;readAudioState=()=>this.options.timebase.readState();sample=()=>this.clock.sample();running={sample:this.sample,play:this.play,pause:this.pause,seekTo:this.seekTo,seekBy:this.seekBy,setTimeScale:this.setTimeScale,togglePlayback:this.togglePlayback,resetTime:this.resetTime,readLanguage:this.readLanguage,readActiveLevel:this.readActiveLevel,readAudioState:this.readAudioState,setLanguage:this.setLanguage}};function cw(e,t){if(!Number.isFinite(e)||e<=0)throw RangeError(`${t} duration must be positive and finite`)}function lw(e,t){let n=e.viewpoint.worldPosition;t.x=n.x,t.y=n.y,t.z=n.z;let r=e.camera.matrixWorld.elements,i=-(r[8]??0),a=-(r[9]??0),o=-(r[10]??1);t.yawRadians=Math.atan2(i,o),t.pitchRadians=Math.asin(Math.min(1,Math.max(-1,a)))}async function uw({language:e=`en`,readLanguage:t,world:n,level:i,assets:a,forShow:o,passages:s,signal:c=new AbortController().signal,sharedAudio:l}){let u=$C(QC,ew),d,f,p,m,h=[],g=new Set,_=new Map,v=(e,t)=>{if(!t||(h.push(t),g.add(t),!e))return;let n=_.get(e);n?n.push(t):_.set(e,[t])};try{i.flightGuidance&&!o&&(p=l??await FC(n.camera,c),m=await Io({...p,settings:Po,signal:c}),c.throwIfAborted());let e=o?wC():void 0,t=o?wC():void 0,r=o?Iu({scene:n.scene,viewpoint:n.viewpoint,definition:ls}):void 0;r&&g.add(r.module);let a=i.echoDepth&&i.echoDepth.intensity!==0?Ou(i.echoDepth):void 0,s=i.thermal&&i.thermal.intensity!==0?VS(i.thermal,{surfaceSettings:QC,conditionsAt:u.zoneConditionsAt}):void 0,k=i.magnetic&&i.magnetic.intensity!==0?Qd(i.magnetic,{scene:n.scene,viewpoint:n.viewpoint,skyHazeColor:i.backgroundColor}):void 0;k&&g.add(k.module);let ne=T();ne&&g.add(ne.module);let re=te(s,t,ne?.observeActorBodies);re&&g.add(re);let A=y();A&&g.add(A.module);let j=i.motion&&i.motion.intensity!==0?Im({scene:n.scene,viewpoint:n.viewpoint,parameters:i.motion,groundYAt:u.groundYAt,zoneAt:u.zoneAt,birdBody:b(t)}):void 0;j&&g.add(j.module);let M=x();M&&g.add(M.module);let N=S(M);return N&&g.add(N),v(`echo`,await C(a,s,e,A?.terrain)),v(void 0,w()),v(`scent`,ne?.module),v(void 0,E(a,s,e)),v(`echo`,D(a,s,e)),v(`echo`,ee(a,s,e)),v(`thermal`,O(a,e)),v(`thermal`,re),v(`motion`,j?.module),v(`magnetic`,k?.module),v(`connections`,A?.module),v(void 0,M?.module),v(void 0,N),v(void 0,r?.module),{worldSurface:u,voice:d,tutorial:f,audio:p,modules:h,hasGround:i.invisibleGround===!0||gw(i),reach:{gates:_,senses:{scent:ne?.setIntensity,motion:j?.setIntensity,thermal:pw(s?.setIntensity,j?.setBodyPresence),magnetic:k?.setIntensity,connections:A?.setIntensity},worldFades:{structure:e,animals:t},setSkyBackground:k?.setSkyBackground,setEndCreditsPresence:r?.setPresence,followPassages:M?.followShowTime,readMotionActorCenters:j?.readActorCenters}}}catch(e){let t=[e];try{d?.unload()}catch(e){t.push(e)}for(let e of[...g].reverse())try{e.unload()}catch(e){t.push(e)}try{m?.unload(),l||await p?.unload()}catch(e){t.push(e)}throw t.length>1?AggregateError(t,`Composition construction and cleanup failed`):e}function y(){let e=i.connections;if(!e||e.intensity===0)return;let t=[];i.vegetation&&e.sources.vegetation&&t.push(mC(i.vegetation,u)),i.scentParticles&&e.sources.scentEmitters&&t.push(w_(u.groundYAt,u.zoneAt)),i.rocks&&e.sources.rocks&&t.push(o_(i.rocks,u));let r=i.grassClipmap?(e,t)=>Ld(u,e,t):()=>0;return tg(e,{scene:n.scene,viewpoint:n.viewpoint,streamQueue:n.streamQueue,worldSurface:u,staticSources:t,groundCoverAt:r})}function b(e){if(!mw(i))return;let t=a.birds.get(cf.id);if(!t)throw Error(`The flock bird model was not loaded`);return{asset:t,effects:e?[e]:[]}}function x(){let e=a.passages;if(!(!s||!e))return rl({scene:n.scene,viewpoint:n.viewpoint,worldSurface:u,schedule:s,resources:e,readViewHeadingRadians:WC(n.viewerRig)})}function S(e){let t=e?.swarm,r=i.motion;if(!(!t||!r))return nh({scene:n.scene,parameters:r,pointCount:t.pointCount,cloudRadiusMeters:t.cloudRadiusMeters,cloudHeightMeters:t.cloudHeightMeters,readCrossing:t.read})}async function C(e,t,r,a){let o=i.terrain;if(!o)return i.invisibleGround?uS({scene:n.scene,viewpoint:n.viewpoint,worldSurface:u,streamQueue:n.streamQueue,parameters:{opacity:1},presentation:qx()}):void 0;let s=await k(o),c=[];return r&&c.push(r),t&&c.push(t.terrain),e&&c.push(e),a&&c.push(a),uS({scene:n.scene,viewpoint:n.viewpoint,worldSurface:u,streamQueue:n.streamQueue,parameters:{opacity:o.opacity},presentation:s,effects:c})}function w(){let r=i.airParticles;if(!r)return;let a=gw(i)?u.surfaceYAt:void 0,s={scene:n.scene,viewpoint:n.viewpoint,parameters:r,streamQueue:n.streamQueue,surfaceYAt:a},c={minimumGroundClearanceMeters:gw(i)||i.invisibleGround?es.minimumGroundClearanceMeters:void 0,maximumGroundClearanceMeters:i.maximumGroundClearanceMeters};return i.flightGuidance&&!o&&(d=LC({gestures:window})),i.flightGuidance?(f=Gx({language:e,readLanguage:t,voice:d,atmosphere:m,...s,guidance:i.flightGuidance,constrainFlightPosition:e=>ss(e,u.groundYAt,c)}),f):zy(s)}function T(){let e=i.scentParticles;if(!e)return;let t=i.vegetation??i.invisibleVegetation,r=!!(i.animals&&e.animals);return r&&dw(e),Tv({scene:n.scene,viewpoint:n.viewpoint,parameters:e,streamQueue:n.streamQueue,plantSource:t?vC(t,u):void 0,maxActorCount:r?vu.maxVisible:0})}function E(e,t,r){let a=i.grassClipmap;if(a)return Rd({scene:n.scene,viewpoint:n.viewpoint,frustumCamera:n.camera,preset:a,streamQueue:n.streamQueue,worldSurface:u,surfaceSettings:QC,fogColor:i.backgroundColor,effects:fw(r,t?.grass,e)})}function D(e,t,r){let o=i.vegetation;if(o)return fC({scene:n.scene,viewpoint:n.viewpoint,preset:o,assets:a.vegetation,streamQueue:n.streamQueue,worldSurface:u,effectsFor:n=>fw(r,n===`undergrowth`?t?.undergrowth:t?.vegetation,e)})}function O(e,t){let r=i.snakes;if(r)return Qv({scene:n.scene,viewpoint:n.viewpoint,preset:r,worldSurface:u,streamQueue:n.streamQueue,effects:fw(t,void 0,e)})}function ee(e,t,r){let o=i.rocks;if(o)return p_({scene:n.scene,viewpoint:n.viewpoint,preset:o,assets:a.rocks,streamQueue:n.streamQueue,worldSurface:u,effects:fw(r,t?.rocks,e)})}function te(e,t,r){if(!i.animals)return;let o=e||t?n=>[t,e?.animals(n)].filter(e=>e!==void 0):void 0;return fu({scene:n.scene,viewpoint:n.viewpoint,definition:vu,preset:i.animals,assets:a.animals,worldSurface:u,effectsFor:o,onBodiesUpdated:hw(e?.setHeatSources,r)})}async function k(e){if(e.presentation===`zones`){let{createZoneVisualizer:e}=await r(async()=>{let{createZoneVisualizer:e}=await import(`./zone-visualizer-_RPK0poC.js`);return{createZoneVisualizer:e}},__vite__mapDeps([4,5]));return e(u,ew)}if(e.colors)return wS(e.colors,QC,u)}}function dw(e){let t=e.animals?.signatures??{};for(let{id:e}of vu.species)if(!t[e])throw Error(`Animal species has no scent signature: ${e}`)}function fw(e,t,n){let r=[e,t,n].filter(e=>e!==void 0);return r.length>0?r:void 0}function pw(...e){let t=e.filter(e=>e!==void 0);return t.length<=1?t[0]:e=>{for(let n of t)n(e)}}function mw(e){let t=e.motion;return!!(t&&t.intensity!==0&&t.birds?.body)}function hw(...e){let t=e.filter(e=>e!==void 0);if(t.length!==0)return e=>{for(let n of t)n(e)}}function gw(e){return!!(e.terrain||e.grassClipmap||e.vegetation||e.rocks||e.animals)}async function _w(e,t,n){let[r,i,a,o,s]=await Promise.allSettled([ko(e.vegetation?tC.assets:[],n),ko(e.rocks?i_.assets:[],n),ko(e.animals?vu.species:[],n),ko(mw(e)?[cf]:[],n),t?nl(t,n):void 0]);if(r.status===`rejected`||i.status===`rejected`||a.status===`rejected`||o.status===`rejected`||s.status===`rejected`||n?.aborted){let e=[...[r,i,a,o,s].flatMap(e=>e.status===`rejected`?[e.reason]:[]),...n?.aborted?[n.reason]:[]],t=[r,i,a,o].flatMap(e=>e.status===`fulfilled`?[e.value]:[]);s.status===`fulfilled`&&s.value&&t.push(s.value.models);for(let n of t)try{Ao(n)}catch(t){e.push(t)}throw n?.aborted&&e.every(e=>e===n.reason)?n.reason:AggregateError(e,`Level assets failed to load`)}return{vegetation:r.value,rocks:i.value,animals:a.value,birds:o.value,passages:s.value}}function vw(e){return XC(e,{xrViewPitchAssistDegrees:30})}function yw(e){return xC({scene:e.scene,viewpoint:e.viewpoint})}function bw(e,t){let n=hs(),r;try{return r=ns(e.camera,e.renderer.domElement),{...xw(e,t.groundYAt),m5:n,desktop:r,flight:is(e.viewerRig,[n,r])}}catch(e){throw r?.unload(),n.unload(),e}}function xw(e,t){return{resetRig:()=>cs(e.viewerRig.position,e.viewerRig.quaternion),constrainHeight:n=>ss(e.viewerRig.position,t,n),minimumGroundClearanceMeters:es.minimumGroundClearanceMeters}}async function Sw(e,t){aw(e);let n=await FC(t.world.camera,t.signal);try{return t.signal.throwIfAborted(),{audio:n,playback:await Cw(e,t,n)}}catch(e){return ww([n],e)}}async function Cw(e,t,n){let r=EC(),i;try{i=DC({pulseSeconds:fs.pulseSeconds},n)}catch(e){return ww([r],e)}return ow(e,{...t,timebase:r,createNarration:()=>AC({recordings:[]}),droneOrgan:i})}async function ww(e,t){let n=[t];for(let t of e)try{await t?.unload()}catch(e){n.push(e)}throw n.length>1?AggregateError(n,`Sound construction and cleanup failed`):t}async function Tw(e,t){let n=new Ew(t);try{return await n.start(e),n}catch(e){try{await n.unload()}catch(t){throw AggregateError([e,t],`Level startup and cleanup failed`)}throw e}}var Ew=class{request;lifetime=new AbortController;signal;level;assets;world;worldSurface;reach;hasGround=!1;modules=[];audio;voice;controls;playback;unloading;tutorial;tutorialRestart;tutorialHeld;tutorialFailed=!1;tutorialChunkCount=0;staticTutorial;skipTarget;tutorialAssets;handoffElapsed;mainFieldOfViewDegrees=0;veil;veilPresence=1;showListeners=new Set;heightLimits={minimumGroundClearanceMeters:void 0,maximumGroundClearanceMeters:void 0};get m5(){return this.controls?.m5}constructor(e){this.request=e,this.level=e.preset,this.tutorialHeld=e.kind===`show`&&e.initiallyPaused===!0,this.signal=e.signal?AbortSignal.any([e.signal,this.lifetime.signal]):this.lifetime.signal}get xr(){return this.world.xr}get show(){return!this.signal.aborted&&!this.tutorial&&!this.tutorialRestart&&!this.tutorialFailed&&this.request.kind===`show`?this.playback?.running:void 0}async start(e){this.signal.throwIfAborted();let t=Ow(this.request);this.assets=await _w(this.level,this.requestedPassages(),this.signal),this.signal.throwIfAborted(),this.world=vw(e);let n=this.level.desktopFieldOfViewDegrees??this.world.camera.fov;this.mainFieldOfViewDegrees=n,this.present(t,n),this.raiseVeil(),await this.loadComposition(),this.signal.throwIfAborted(),this.controls=bw(this.world,this.worldSurface),this.request.kind===`show`&&(await this.startPlayback(),await this.startTutorial(),this.request.tutorial||this.openShowWithoutTutorial()),this.signal.throwIfAborted(),this.signal.addEventListener(`abort`,this.onAbort,{once:!0}),this.world.start(this.updateFrame)}subscribeShow=e=>(this.showListeners.add(e),e(this.show),()=>{this.showListeners.delete(e)});readLanguage=()=>{if(!this.signal.aborted)return this.request.kind===`show`?this.playback?.running.readLanguage()??this.request.show.language:this.request.language??`en`};setLanguage=e=>{this.signal.aborted||this.request.kind!==`show`||(this.playback?.running.setLanguage(e),this.tutorial?.tutorial?.refreshLanguage())};readAudioState=()=>this.signal.aborted?`closed`:this.show?.readAudioState()??this.audio?.context.state??`closed`;readTutorial=()=>{if(this.signal.aborted)return;if((this.tutorialRestart||this.tutorialFailed)&&!this.tutorial)return{completedChunks:0,totalChunks:this.tutorialChunkCount,phase:this.tutorialFailed?`error`:`loading`,playback:this.readPlayback()};let e=(this.tutorial?.tutorial??this.staticTutorial)?.readProgress();if(e)return{...e,playback:this.readPlayback(),phase:this.handoffElapsed===void 0?e.phase:`transition`}};readPlayback=()=>{if(this.signal.aborted)return`ended`;if(this.tutorialFailed)return`error`;if(this.tutorialRestart)return`loading`;let e=this.tutorial?.tutorial??this.staticTutorial;return e?e.readPlayback():this.request.kind===`static`||this.show?.sample().isPlaying?`playing`:`paused`};togglePlayback=()=>{if(this.signal.aborted||this.tutorialRestart)return;if(this.readPlayback()===`error`){this.resetShowAndFlight();return}let e=this.tutorial?.tutorial??this.staticTutorial;if(!e){this.show?.togglePlayback();return}let t=this.readPlayback();this.tutorialHeld=t===`playing`||t===`buffering`,e.setPaused(this.tutorialHeld)};skipTutorial=(e,t=!0)=>{this.signal.aborted||!this.tutorial||this.request.kind!==`show`||Number.isFinite(e)&&(this.skipTarget={timeSeconds:Math.max(0,Math.min(this.request.show.schedule.durationSeconds,e)),playing:t},this.tutorialHeld=!1,this.tutorial.tutorial?.setPaused(!1),this.handoffElapsed??=0)};async startTutorial(){if(this.request.kind!==`show`||!this.request.tutorial)return;let e=this.request.tutorial,t=await _w(e,void 0,this.signal);this.tutorialAssets=t,this.tutorial=await uw({world:this.world,level:e,assets:t,forShow:!1,signal:this.signal,sharedAudio:this.audio,readLanguage:this.readLanguage,language:this.playback?.running.readLanguage()??this.request.show.language}),this.activateTutorial(this.tutorial,e)}activateTutorial(e,t){for(let t of e.modules)this.world.modules.load(t);if(this.signal.throwIfAborted(),!e.tutorial)throw Error(`Tutorial preset needs a Start module`);e.tutorial.setPaused(this.tutorialHeld),this.tutorialChunkCount=e.tutorial.readProgress().totalChunks;for(let e of this.modules)this.world.modules.deactivate(e);this.present(t,t.desktopFieldOfViewDegrees??this.world.camera.fov);for(let t of e.modules)this.world.modules.activate(t)}updateHandoff(e){if(this.tutorialHeld)return;let t=this.tutorial?.tutorial;if(!t||this.handoffElapsed===void 0&&!t.readComplete())return;this.handoffElapsed=(this.handoffElapsed??0)+Math.max(0,e);let n=Math.min(1,this.handoffElapsed/No.fadeSeconds);t.setPresence(1-n*n*(3-2*n)),n===1&&this.finishTutorial()}finishTutorial(){let e=this.skipTarget;this.releaseTutorial(),this.placeRigAtArrival(),this.present(Ow(this.request),this.mainFieldOfViewDegrees);for(let e of this.modules)this.world.modules.activate(e);e&&this.playback?.running.seekTo(e.timeSeconds),this.playback?.update(),e?.playing===!1?this.playback?.running.pause():this.playback?.running.play();for(let e of this.showListeners)e(this.show)}openShowWithoutTutorial(){this.request.kind===`show`&&(this.placeRigAtArrival(),this.request.initiallyPaused||this.playback?.running.play())}placeRigAtArrival(){this.controls?.resetRig(),this.controls?.constrainHeight({minimumGroundClearanceMeters:No.arrivalClearanceMeters,maximumGroundClearanceMeters:No.arrivalClearanceMeters})}releaseTutorial(){let e=this.tutorial;this.tutorial=void 0,this.skipTarget=void 0,this.handoffElapsed=void 0;let t=this.tutorialAssets;this.tutorialAssets=void 0;let n=[...(e?.modules??[]).map(e=>()=>this.world.modules.unload(e)),()=>e?.voice?.unload(),...Dw(t)],r=[];for(let e of n)try{e()}catch(e){r.push(e)}if(r.length)throw AggregateError(r,`Tutorial cleanup failed`)}resetShowAndFlight=()=>{if(this.signal.aborted||this.tutorialRestart||(this.cutToWhite(),this.tutorialHeld=!0,this.tutorialFailed=!1,this.controls?.resetRig(),this.playback?.running.resetTime(),this.playback?.update(),this.request.kind!==`show`))return;if(!this.request.tutorial){this.placeRigAtArrival();return}try{this.releaseTutorial()}catch(e){this.tutorialFailed=!0,console.error(`Tutorial reset failed`,e);return}for(let e of this.modules)this.world.modules.deactivate(e);this.present(this.request.tutorial,this.request.tutorial.desktopFieldOfViewDegrees??this.mainFieldOfViewDegrees);let e=this.startTutorial();this.tutorialRestart=e;for(let e of this.showListeners)e(void 0);this.finishRestart(e)};async finishRestart(e){try{await e}catch(e){if(this.signal.aborted)return;this.tutorialFailed=!0,console.error(`Tutorial restart failed`,e);try{this.releaseTutorial()}catch(e){console.error(`Tutorial restart cleanup failed`,e)}}finally{this.tutorialRestart=void 0}}resetFlight=()=>{this.controls?.resetRig()};unload=()=>this.unloading?this.unloading:(this.signal.removeEventListener(`abort`,this.onAbort),this.lifetime.abort(),this.showListeners.clear(),this.unloading=this.endChildren(),this.unloading);requestedPassages(){return this.request.kind===`show`?this.request.show.passages:void 0}async loadComposition(){if(!this.assets)throw Error(`Level assets are unavailable`);let e=await uw({world:this.world,level:this.level,assets:this.assets,forShow:this.request.kind===`show`,passages:this.requestedPassages(),language:this.request.kind===`show`?this.request.show.language:this.request.language,signal:this.signal});this.staticTutorial=e.tutorial,this.voice=e.voice,this.audio=e.audio,this.modules=[...e.modules],this.worldSurface=e.worldSurface,this.reach=e.reach,this.hasGround=e.hasGround;for(let t of e.modules)this.world.modules.load(t),this.world.modules.activate(t);this.request.kind===`show`&&await this.world.prepareRenderer()}async startPlayback(){if(this.request.kind!==`show`)return;let e=await Sw(this.request.show,{signal:this.signal,world:this.world,reach:this.reach,worldSurface:this.worldSurface});this.audio=e.audio,this.playback=e.playback}present(e,t){this.world.renderer.setClearColor(e.backgroundColor),this.world.camera.fov=t,this.world.camera.far=e.viewDistance,this.world.camera.updateProjectionMatrix()}updateFrame=e=>{this.signal.aborted||(this.updateFlight(e),!this.tutorial&&!this.tutorialRestart&&!this.tutorialFailed&&this.playback?.update(),this.updateHandoff(e),this.updateVeil(e),this.audio?.update(),this.updateHeightLimits())};raiseVeil(){this.request.kind===`show`&&(this.veil=yw(this.world),this.world.modules.load(this.veil.module),this.world.modules.activate(this.veil.module))}cutToWhite(){this.veilPresence=1,this.veil?.setPresence(1)}updateVeil(e){if(!this.veil||this.veilPresence===0||this.readPlayback()!==`playing`)return;this.veilPresence=Math.max(0,this.veilPresence-Math.max(0,e)/No.veilLiftSeconds);let t=1-this.veilPresence;this.veil.setPresence(1-t*t*(3-2*t))}updateFlight(e){this.controls?.flight.update(e,this.tutorialRestart||this.readPlayback()!==`playing`||this.handoffElapsed!==void 0&&!this.skipTarget?0:this.flightSpeed(),this.world.renderer.xr.isPresenting)}flightSpeed(){return this.request.kind===`static`?this.level.flightSpeedMetersPerSecond:this.tutorial?this.request.tutorial?.flightSpeedMetersPerSecond:void 0}updateHeightLimits(){this.tutorial||this.tutorialRestart||this.tutorialFailed||(this.heightLimits.minimumGroundClearanceMeters=this.hasGround?this.controls?.minimumGroundClearanceMeters:void 0,this.heightLimits.maximumGroundClearanceMeters=this.request.kind===`show`&&this.playback?this.playback.readActiveLevelState().maximumGroundClearanceMeters:this.level.maximumGroundClearanceMeters,(this.heightLimits.minimumGroundClearanceMeters!==void 0||this.heightLimits.maximumGroundClearanceMeters!==void 0)&&this.controls?.constrainHeight(this.heightLimits))}onAbort=()=>{this.unload().catch(e=>console.error(`Level cleanup failed`,e))};async endChildren(){let e=[this.controls?.desktop,this.m5,this.playback],t=(await Promise.allSettled([this.tutorialRestart?.catch(()=>void 0),(async()=>this.world?.stop())(),...e.map(async e=>{await e?.unload()})])).flatMap(e=>e.status===`rejected`?[e.reason]:[]);for(let e of this.remainingReleases())try{await e()}catch(e){t.push(e)}if(t.length)throw AggregateError(t,`Level cleanup failed`)}remainingReleases(){return[()=>this.releaseTutorial(),()=>this.voice?.unload(),...[...this.modules].reverse().map(e=>()=>this.world?.modules.unload(e)),()=>this.veil&&this.world?.modules.unload(this.veil.module),()=>this.audio?.unload(),...Dw(this.assets),()=>this.world?.unload()]}};function Dw(e){return[e?.vegetation,e?.rocks,e?.animals,e?.birds,e?.passages?.models].map(e=>()=>{e&&Ao(e)})}function Ow(e){if(e.kind===`static`)return e.preset;let t=tn(e.show.schedule,e.show.states,0);if(!t)throw Error(`A show schedule needs at least one cue`);return t}var kw={start:{flightSpeedMetersPerSecond:2,backgroundColor:16777215,viewDistance:128,desktopFieldOfViewDegrees:80,maximumGroundClearanceMeters:40,flightGuidance:{color:15776848,opacity:.6,lengthMeters:18,behindMeters:4,verticalBendMeters:.75,widthMeters:3,belowFlightMeters:.5},airParticles:{streaming:{chunkLevel:0,viewDistanceMeters:16,fadeStartMeters:12},density:{particlesPerChunk:384},appearance:{color:9015446,sizeMeters:.045,shape:`circle`},motion:{horizontalAmplitudeMeters:.12,verticalAmplitudeMeters:.24,speedMultiplier:.45}}},"white-world":{backgroundColor:16777215,viewDistance:128,maximumGroundClearanceMeters:20,airParticles:{density:{particlesPerChunk:270},appearance:{color:2105638,sizeMeters:.075},motion:{horizontalAmplitudeMeters:.12,verticalAmplitudeMeters:.24,speedMultiplier:1}}},scent:{backgroundColor:16777215,viewDistance:128,maximumGroundClearanceMeters:20,invisibleGround:!0,invisibleVegetation:{instancesPerHectareByZone:{meadow:12,coniferForest:150,deciduousForest:150,shrubSlope:70}},airParticles:{density:{particlesPerChunk:270},appearance:{color:2105638,sizeMeters:.075},motion:{horizontalAmplitudeMeters:.12,verticalAmplitudeMeters:.24,speedMultiplier:1}},scentParticles:{plants:{conifer:{color:5624250,particlesPerPlant:84,emissionBottomFraction:.25,emissionTopFraction:1,emissionRadiusFraction:.34,riseHeightMeters:2.2},deciduous:{color:7002845,particlesPerPlant:84,emissionBottomFraction:.45,emissionTopFraction:1,emissionRadiusFraction:.46,riseHeightMeters:2.2},birch:{color:11634114,particlesPerPlant:72,emissionBottomFraction:.5,emissionTopFraction:1,emissionRadiusFraction:.38,riseHeightMeters:2},bush:{color:5291649,particlesPerPlant:40,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.85,riseHeightMeters:.7},floweringBush:{color:11036103,particlesPerPlant:52,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.95,riseHeightMeters:.9},deadWood:{color:11706751,particlesPerPlant:18,emissionBottomFraction:.2,emissionTopFraction:.9,emissionRadiusFraction:.28,riseHeightMeters:.5}},animals:{signatures:{deer:{color:16628564},stag:{color:15699772},fox:{color:16622493},rat:{color:14193052}},printsPerSecond:20,lifetimeSeconds:25,emissionBottomFraction:.15,emissionTopFraction:.85,emissionRadiusFraction:.35,riseHeightMeters:.8,windResponseMeters:4},appearance:{sizeMeters:.16},motion:{riseDurationSeconds:10,driftAmplitudeMeters:1.3,speedMultiplier:1,windResponseMeters:7}}},echo:{backgroundColor:16250871,viewDistance:128,maximumGroundClearanceMeters:20,airParticles:{density:{particlesPerChunk:270},appearance:{color:2105638,sizeMeters:.075},motion:{horizontalAmplitudeMeters:.12,verticalAmplitudeMeters:.24,speedMultiplier:1}},scentParticles:{plants:{conifer:{color:5624250,particlesPerPlant:84,emissionBottomFraction:.25,emissionTopFraction:1,emissionRadiusFraction:.34,riseHeightMeters:2.2},deciduous:{color:7002845,particlesPerPlant:84,emissionBottomFraction:.45,emissionTopFraction:1,emissionRadiusFraction:.46,riseHeightMeters:2.2},birch:{color:11634114,particlesPerPlant:72,emissionBottomFraction:.5,emissionTopFraction:1,emissionRadiusFraction:.38,riseHeightMeters:2},bush:{color:5291649,particlesPerPlant:40,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.85,riseHeightMeters:.7},floweringBush:{color:11036103,particlesPerPlant:52,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.95,riseHeightMeters:.9},deadWood:{color:11706751,particlesPerPlant:18,emissionBottomFraction:.2,emissionTopFraction:.9,emissionRadiusFraction:.28,riseHeightMeters:.5}},animals:{signatures:{deer:{color:16628564},stag:{color:15699772},fox:{color:16622493},rat:{color:14193052}},printsPerSecond:20,lifetimeSeconds:25,emissionBottomFraction:.15,emissionTopFraction:.85,emissionRadiusFraction:.35,riseHeightMeters:.8,windResponseMeters:4},appearance:{sizeMeters:.16},motion:{riseDurationSeconds:10,driftAmplitudeMeters:1.3,speedMultiplier:1,windResponseMeters:7}},echoDepth:{intensity:1,nearDistanceMeters:6,farDistanceMeters:96,colors:{nearColor:1052688,nearShadeColor:4802889,midColor:9803157,farColor:14869218,hazeColor:16250871}},terrain:{opacity:1},grassClipmap:{tuftsPerSquareMeter:21.85,fullDensityRadiusMeters:14,bladeHeightMeters:3,bladeWidthMeters:.2,colors:{rootColor:1451020,tipColor:9749334}},vegetation:{colors:{trunkColor:1052688,leafColor:1513239,leafAccentColor:4802889,flowerColor:9803157},instancesPerHectareByZone:{meadow:12,coniferForest:150,deciduousForest:150,shrubSlope:70}},rocks:{colors:{darkColor:1513239,lightColor:4802889},instancesPerHectareByZone:{meadow:8,coniferForest:10,deciduousForest:10,shrubSlope:60}}},motion:{backgroundColor:16250871,viewDistance:128,maximumGroundClearanceMeters:20,airParticles:{density:{particlesPerChunk:270},appearance:{color:2105638,sizeMeters:.075},motion:{horizontalAmplitudeMeters:.12,verticalAmplitudeMeters:.24,speedMultiplier:1}},scentParticles:{plants:{conifer:{color:5624250,particlesPerPlant:84,emissionBottomFraction:.25,emissionTopFraction:1,emissionRadiusFraction:.34,riseHeightMeters:2.2},deciduous:{color:7002845,particlesPerPlant:84,emissionBottomFraction:.45,emissionTopFraction:1,emissionRadiusFraction:.46,riseHeightMeters:2.2},birch:{color:11634114,particlesPerPlant:72,emissionBottomFraction:.5,emissionTopFraction:1,emissionRadiusFraction:.38,riseHeightMeters:2},bush:{color:5291649,particlesPerPlant:40,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.85,riseHeightMeters:.7},floweringBush:{color:11036103,particlesPerPlant:52,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.95,riseHeightMeters:.9},deadWood:{color:11706751,particlesPerPlant:18,emissionBottomFraction:.2,emissionTopFraction:.9,emissionRadiusFraction:.28,riseHeightMeters:.5}},animals:{signatures:{deer:{color:16628564},stag:{color:15699772},fox:{color:16622493},rat:{color:14193052}},printsPerSecond:20,lifetimeSeconds:25,emissionBottomFraction:.15,emissionTopFraction:.85,emissionRadiusFraction:.35,riseHeightMeters:.8,windResponseMeters:4},appearance:{sizeMeters:.16},motion:{riseDurationSeconds:10,driftAmplitudeMeters:1.3,speedMultiplier:1,windResponseMeters:7}},echoDepth:{intensity:1,nearDistanceMeters:6,farDistanceMeters:96,colors:{nearColor:1052688,nearShadeColor:4802889,midColor:9803157,farColor:14869218,hazeColor:16250871}},terrain:{opacity:1},grassClipmap:{tuftsPerSquareMeter:21.85,fullDensityRadiusMeters:14,bladeHeightMeters:3,bladeWidthMeters:.2,colors:{rootColor:1451020,tipColor:9749334}},vegetation:{colors:{trunkColor:1052688,leafColor:1513239,leafAccentColor:4802889,flowerColor:9803157},instancesPerHectareByZone:{meadow:12,coniferForest:150,deciduousForest:150,shrubSlope:70}},rocks:{colors:{darkColor:1513239,lightColor:4802889},instancesPerHectareByZone:{meadow:8,coniferForest:10,deciduousForest:10,shrubSlope:60}},motion:{intensity:1,swarms:{swarmCount:12,fliesPerSwarm:60,flightSpeedMultiplier:.93},appearance:{flyColor:2171187,flySizeMeters:.12,trailColor:3221336,trailSizeMeters:.085,trailOpacity:1},trail:{lifetimeFrames:14,expansionDistanceMeters:.22,motionGain:26,fadePower:1.6,density:1},birds:{flockCount:5,birdsPerFlock:12,flightSpeedMetersPerSecond:7.44,trailLifetimeFrames:40,flightHeightMeters:14,appearance:{trailColor:1097435,trailSizeMeters:.18,trailOpacity:1}}}},thermal:{backgroundColor:16250871,viewDistance:128,maximumGroundClearanceMeters:20,airParticles:{density:{particlesPerChunk:270},appearance:{color:2105638,sizeMeters:.075},motion:{horizontalAmplitudeMeters:.12,verticalAmplitudeMeters:.24,speedMultiplier:1}},scentParticles:{plants:{conifer:{color:5624250,particlesPerPlant:84,emissionBottomFraction:.25,emissionTopFraction:1,emissionRadiusFraction:.34,riseHeightMeters:2.2},deciduous:{color:7002845,particlesPerPlant:84,emissionBottomFraction:.45,emissionTopFraction:1,emissionRadiusFraction:.46,riseHeightMeters:2.2},birch:{color:11634114,particlesPerPlant:72,emissionBottomFraction:.5,emissionTopFraction:1,emissionRadiusFraction:.38,riseHeightMeters:2},bush:{color:5291649,particlesPerPlant:40,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.85,riseHeightMeters:.7},floweringBush:{color:11036103,particlesPerPlant:52,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.95,riseHeightMeters:.9},deadWood:{color:11706751,particlesPerPlant:18,emissionBottomFraction:.2,emissionTopFraction:.9,emissionRadiusFraction:.28,riseHeightMeters:.5}},animals:{signatures:{deer:{color:16628564},stag:{color:15699772},fox:{color:16622493},rat:{color:14193052}},printsPerSecond:20,lifetimeSeconds:25,emissionBottomFraction:.15,emissionTopFraction:.85,emissionRadiusFraction:.35,riseHeightMeters:.8,windResponseMeters:4},appearance:{sizeMeters:.16},motion:{riseDurationSeconds:10,driftAmplitudeMeters:1.3,speedMultiplier:1,windResponseMeters:7}},echoDepth:{intensity:1,nearDistanceMeters:6,farDistanceMeters:96,colors:{nearColor:1052688,nearShadeColor:4802889,midColor:9803157,farColor:14869218,hazeColor:16250871}},terrain:{opacity:1},grassClipmap:{tuftsPerSquareMeter:21.85,fullDensityRadiusMeters:14,bladeHeightMeters:3,bladeWidthMeters:.2,colors:{rootColor:1451020,tipColor:9749334}},vegetation:{colors:{trunkColor:1052688,leafColor:1513239,leafAccentColor:4802889,flowerColor:9803157},instancesPerHectareByZone:{meadow:12,coniferForest:150,deciduousForest:150,shrubSlope:70}},rocks:{colors:{darkColor:1513239,lightColor:4802889},instancesPerHectareByZone:{meadow:8,coniferForest:10,deciduousForest:10,shrubSlope:60}},motion:{intensity:1,swarms:{swarmCount:12,fliesPerSwarm:60,flightSpeedMultiplier:.93},appearance:{flyColor:2171187,flySizeMeters:.12,trailColor:3221336,trailSizeMeters:.085,trailOpacity:1},trail:{lifetimeFrames:14,expansionDistanceMeters:.22,motionGain:26,fadePower:1.6,density:1},birds:{flockCount:5,birdsPerFlock:12,flightSpeedMetersPerSecond:7.44,trailLifetimeFrames:40,flightHeightMeters:14,appearance:{trailColor:16473878,trailSizeMeters:.18,trailOpacity:1},body:{lengthMeters:.26,color:1513239}}},animals:{colors:{furColor:1513239,lightFurColor:4802889,darkFurColor:1052688,featureColor:1052688}},snakes:{crawlingShare:.56,color:16473878},thermal:{intensity:1,radiusMeters:35,edgeFeatherMeters:12,carriedColorBlend:.42,colors:{coldestColor:919080,coldColor:469885,coolColor:1862795,warmColor:13965706,hotColor:16473878,hottestColor:16567875},surfaces:{vegetationWarmth:.76,vegetationWarmthSpread:.05,vegetationHeightWarmthPerMeter:-.06,vegetationAxisWarmthPerMeter:-.11,vegetationTextureWarmth:.26,vegetationContrast:.34,undergrowthWarmth:.42,undergrowthWarmthSpread:.07,undergrowthHeightWarmthPerMeter:-.09,undergrowthAxisWarmthPerMeter:-.16,undergrowthTextureWarmth:.28,undergrowthContrast:.5,rockWarmth:.2,rockWarmthSpread:.18,rockHeightWarmthPerMeter:.05,rockAxisWarmthPerMeter:-.03,rockTextureWarmth:.24,rockContrast:.52,grassWarmth:.34,grassTextureWarmth:.28,grassContrast:.5},bands:{terrain:{floorWarmth:0,ceilingWarmth:.48},vegetation:{floorWarmth:.16,ceilingWarmth:.82},undergrowth:{floorWarmth:0,ceilingWarmth:.6},rocks:{floorWarmth:0,ceilingWarmth:.48},grass:{floorWarmth:0,ceilingWarmth:.54},animals:{floorWarmth:.72,ceilingWarmth:1}},terrainTextureWarmth:.28,terrainContrast:.7,actorWarmth:.96,actorExtremityFalloff:.2,actorTextureWarmth:.07,actorContrast:.3,heatEmission:{strength:.05,reachPerBodyHeight:1.2}}},magnetic:{backgroundColor:16250871,viewDistance:128,maximumGroundClearanceMeters:20,airParticles:{density:{particlesPerChunk:270},appearance:{color:2105638,sizeMeters:.075},motion:{horizontalAmplitudeMeters:.12,verticalAmplitudeMeters:.24,speedMultiplier:1}},scentParticles:{plants:{conifer:{color:5624250,particlesPerPlant:84,emissionBottomFraction:.25,emissionTopFraction:1,emissionRadiusFraction:.34,riseHeightMeters:2.2},deciduous:{color:7002845,particlesPerPlant:84,emissionBottomFraction:.45,emissionTopFraction:1,emissionRadiusFraction:.46,riseHeightMeters:2.2},birch:{color:11634114,particlesPerPlant:72,emissionBottomFraction:.5,emissionTopFraction:1,emissionRadiusFraction:.38,riseHeightMeters:2},bush:{color:5291649,particlesPerPlant:40,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.85,riseHeightMeters:.7},floweringBush:{color:11036103,particlesPerPlant:52,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.95,riseHeightMeters:.9},deadWood:{color:11706751,particlesPerPlant:18,emissionBottomFraction:.2,emissionTopFraction:.9,emissionRadiusFraction:.28,riseHeightMeters:.5}},animals:{signatures:{deer:{color:16628564},stag:{color:15699772},fox:{color:16622493},rat:{color:14193052}},printsPerSecond:20,lifetimeSeconds:25,emissionBottomFraction:.15,emissionTopFraction:.85,emissionRadiusFraction:.35,riseHeightMeters:.8,windResponseMeters:4},appearance:{sizeMeters:.16},motion:{riseDurationSeconds:10,driftAmplitudeMeters:1.3,speedMultiplier:1,windResponseMeters:7}},echoDepth:{intensity:1,nearDistanceMeters:6,farDistanceMeters:96,colors:{nearColor:1052688,nearShadeColor:4802889,midColor:9803157,farColor:14869218,hazeColor:16250871}},terrain:{opacity:1},grassClipmap:{tuftsPerSquareMeter:21.85,fullDensityRadiusMeters:14,bladeHeightMeters:3,bladeWidthMeters:.2,colors:{rootColor:1451020,tipColor:9749334}},vegetation:{colors:{trunkColor:1052688,leafColor:1513239,leafAccentColor:4802889,flowerColor:9803157},instancesPerHectareByZone:{meadow:12,coniferForest:150,deciduousForest:150,shrubSlope:70}},rocks:{colors:{darkColor:1513239,lightColor:4802889},instancesPerHectareByZone:{meadow:8,coniferForest:10,deciduousForest:10,shrubSlope:60}},motion:{intensity:1,swarms:{swarmCount:12,fliesPerSwarm:60,flightSpeedMultiplier:.93},appearance:{flyColor:2171187,flySizeMeters:.12,trailColor:3221336,trailSizeMeters:.085,trailOpacity:1},trail:{lifetimeFrames:14,expansionDistanceMeters:.22,motionGain:26,fadePower:1.6,density:1},birds:{flockCount:5,birdsPerFlock:12,flightSpeedMetersPerSecond:7.44,trailLifetimeFrames:40,flightHeightMeters:14,appearance:{trailColor:16473878,trailSizeMeters:.18,trailOpacity:1},body:{lengthMeters:.26,color:1513239}}},animals:{colors:{furColor:1513239,lightFurColor:4802889,darkFurColor:1052688,featureColor:1052688}},snakes:{crawlingShare:.56,color:16473878},thermal:{intensity:1,radiusMeters:35,edgeFeatherMeters:12,carriedColorBlend:.42,colors:{coldestColor:919080,coldColor:469885,coolColor:1862795,warmColor:13965706,hotColor:16473878,hottestColor:16567875},surfaces:{vegetationWarmth:.76,vegetationWarmthSpread:.05,vegetationHeightWarmthPerMeter:-.06,vegetationAxisWarmthPerMeter:-.11,vegetationTextureWarmth:.26,vegetationContrast:.34,undergrowthWarmth:.42,undergrowthWarmthSpread:.07,undergrowthHeightWarmthPerMeter:-.09,undergrowthAxisWarmthPerMeter:-.16,undergrowthTextureWarmth:.28,undergrowthContrast:.5,rockWarmth:.2,rockWarmthSpread:.18,rockHeightWarmthPerMeter:.05,rockAxisWarmthPerMeter:-.03,rockTextureWarmth:.24,rockContrast:.52,grassWarmth:.34,grassTextureWarmth:.28,grassContrast:.5},bands:{terrain:{floorWarmth:0,ceilingWarmth:.48},vegetation:{floorWarmth:.16,ceilingWarmth:.82},undergrowth:{floorWarmth:0,ceilingWarmth:.6},rocks:{floorWarmth:0,ceilingWarmth:.48},grass:{floorWarmth:0,ceilingWarmth:.54},animals:{floorWarmth:.72,ceilingWarmth:1}},terrainTextureWarmth:.28,terrainContrast:.7,actorWarmth:.96,actorExtremityFalloff:.2,actorTextureWarmth:.07,actorContrast:.3,heatEmission:{strength:.05,reachPerBodyHeight:1.2}},magnetic:{intensity:1,fieldDirectionDegreesFromNorth:0,fieldElevationDegrees:7.5,colors:{northColor:0,southColor:16777215,zenithColor:12900342}}},connections:sn,diagnostic:{backgroundColor:16777215,viewDistance:180,maximumGroundClearanceMeters:40,airParticles:{density:{particlesPerChunk:80},appearance:{color:2105638,sizeMeters:.075},motion:{horizontalAmplitudeMeters:.12,verticalAmplitudeMeters:.24,speedMultiplier:1}},terrain:{opacity:1,presentation:`zones`},magnetic:{intensity:1,fieldDirectionDegreesFromNorth:0,fieldElevationDegrees:7.5,colors:{northColor:14252057,southColor:16777215,zenithColor:12900342}},grassClipmap:{tuftsPerSquareMeter:1.5,fullDensityRadiusMeters:14,bladeHeightMeters:.75,bladeWidthMeters:.2,colors:{rootColor:1522226,tipColor:7319164}},vegetation:{colors:{trunkColor:6243894,leafColor:5214021,leafAccentColor:7911514,flowerColor:14049165},instancesPerHectareByZone:{meadow:12,coniferForest:150,deciduousForest:150,shrubSlope:70}},rocks:{colors:{darkColor:4869719,lightColor:8160140},instancesPerHectareByZone:{meadow:8,coniferForest:10,deciduousForest:10,shrubSlope:60}},animals:{colors:{furColor:8804669,lightFurColor:10918277,darkFurColor:6833455,featureColor:2697513}}},"visual-integration":{backgroundColor:15397115,viewDistance:180,maximumGroundClearanceMeters:40,airParticles:{density:{particlesPerChunk:80},appearance:{color:2697778,sizeMeters:.075},motion:{horizontalAmplitudeMeters:.12,verticalAmplitudeMeters:.24,speedMultiplier:1}},terrain:{opacity:1,colors:{lowElevationColor:5325181,highElevationColor:12830161,waterColor:10215131}},grassClipmap:{tuftsPerSquareMeter:1.5,fullDensityRadiusMeters:14,bladeHeightMeters:.75,bladeWidthMeters:.2,colors:{rootColor:4797067,tipColor:6805165}},vegetation:{colors:{trunkColor:5325947,leafColor:4797046,leafAccentColor:6845071,flowerColor:16044911},instancesPerHectareByZone:{meadow:12,coniferForest:150,deciduousForest:150,shrubSlope:70}},rocks:{colors:{darkColor:3618127,lightColor:7577512},instancesPerHectareByZone:{meadow:8,coniferForest:10,deciduousForest:10,shrubSlope:60}},animals:{colors:{furColor:15979343,lightFurColor:16772746,darkFurColor:14261055,featureColor:4866141}}}},Aw=`connections`;function jw(e){return e===null?Aw:t(e)?e:(console.warn(`Unknown level "${e}". Opening "${Aw}" instead. Known levels: ${n.join(`, `)}.`),Aw)}function Mw(e){if(typeof e!=`object`||!e)return{};let t=e;return{...Nw(t,`m5Host`),...Nw(t,`m5DeviceId`),...Nw(t,`stationName`)}}function Nw(e,t){let n=e[t];if(typeof n!=`string`)return{};let r=n.trim();return r.length===0?{}:{[t]:r}}async function Pw(){try{let e=await fetch(`/config`);return e.ok?Mw(await e.json()):{}}catch{return{}}}export{sn as a,Tw as i,kw as n,Gt as o,jw as r,Jt as s,Pw as t};