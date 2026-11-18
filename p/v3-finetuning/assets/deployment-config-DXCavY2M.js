const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/organ-runtime-DtyJFHDa.js","assets/rolldown-runtime-CbXtAM7H.js"])))=>i.map(i=>d[i]);
import{n as e,t}from"./protocol-DQ9J0YtD.js";import{$ as n,$n as r,A as i,An as a,At as o,B as s,Bn as c,C as l,Cn as u,Ct as d,D as f,Dt as p,E as m,Et as h,F as g,Ft as _,Gn as v,H as y,Hn as b,Ht as x,I as S,In as C,It as w,J as T,K as E,Kn as D,L as O,Ln as ee,M as k,Mn as te,Mt as A,N as ne,Nn as j,Nt as re,O as ie,Ot as ae,P as M,Pn as oe,Pt as se,Q as N,Qn as ce,Rn as le,Rt as ue,S as de,St as fe,T as pe,Tn as me,Tt as he,U as ge,Un as _e,Ut as ve,V as ye,Vn as be,W as xe,Wn as Se,X as Ce,Y as we,Yn as Te,Z as Ee,Zn as De,_ as Oe,_r as P,_t as ke,a as Ae,ar as je,at as Me,b as Ne,bn as Pe,bt as F,c as Fe,cr as I,ct as Ie,dr as Le,dt as L,er as Re,et as ze,f as R,fr as z,ft as B,g as V,gr as Be,gt as Ve,h as H,hr as He,ht as Ue,i as We,ir as Ge,it as Ke,j as qe,jn as Je,jt as Ye,k as Xe,kt as Ze,l as U,lr as Qe,lt as $e,m as et,mr as tt,mt as nt,n as rt,nr as W,nt as it,o as at,or as ot,ot as st,p as ct,pr as lt,pt as G,q as ut,qn as dt,r as ft,rr as pt,rt as mt,s as ht,sr as gt,st as _t,tr as vt,tt as yt,u as bt,ur as xt,ut as K,v as St,vr as Ct,vt as wt,w as Tt,wn as Et,wt as Dt,x as Ot,xn as kt,xt as At,y as jt,yn as Mt,yt as Nt,z as Pt,zn as Ft}from"./three.core-6hjS66u_.js";import{a as It,i as Lt,n as Rt,o as zt,r as Bt}from"./wind-Dz-lxrha.js";import{t as Vt}from"./preload-helper-Czpn1I53.js";var Ht=[`en`,`de`],Ut=`en`,Wt={prologue:{fileStem:`1`,durationSeconds:{en:72.37,de:71.92}},scent:{fileStem:`2`,durationSeconds:{en:45,de:47.02}},echo:{fileStem:`3`,durationSeconds:{en:27.01,de:28.56}},motion:{fileStem:`4`,durationSeconds:{en:49.46,de:58.38}},thermal:{fileStem:`5`,durationSeconds:{en:41.17,de:44.63}},magnetic:{fileStem:`6`,durationSeconds:{en:51,de:49.51}},finale:{fileStem:`7`,durationSeconds:{en:105.14,de:106.89}},return:{fileStem:`8`,durationSeconds:{en:69.56,de:73.85}}};function Gt(e){return Ht.find(t=>t===e)??Ut}function Kt(e,t){return`/becoming-many-making-of/p/v3-finetuning/audio/${t}/${Wt[e].fileStem}.mp3`}function qt(e,t){return Wt[e].durationSeconds[t]}var Jt={"white-world":{backgroundColor:16777215,viewDistance:128,maximumGroundClearanceMeters:50,senses:[]},scent:{backgroundColor:16777215,viewDistance:128,maximumGroundClearanceMeters:50,senses:[`scent`]},echo:{backgroundColor:16250871,viewDistance:128,maximumGroundClearanceMeters:50,senses:[`scent`,`echo`]},motion:{backgroundColor:16250871,viewDistance:128,maximumGroundClearanceMeters:50,senses:[`scent`,`echo`,`motion`]},thermal:{backgroundColor:16250871,viewDistance:128,maximumGroundClearanceMeters:50,senses:[`scent`,`echo`,`motion`,`thermal`]},magnetic:{backgroundColor:16250871,viewDistance:128,maximumGroundClearanceMeters:50,senses:[`scent`,`echo`,`motion`,`thermal`,`magnetic`]},connections:{backgroundColor:16250871,viewDistance:128,maximumGroundClearanceMeters:50,senses:[`scent`,`echo`,`motion`,`thermal`,`magnetic`,`connections`]}};function Yt(e){return e.atSeconds-(e.worldLeadSeconds??0)}function Xt(e,t){let n=e.narration[0];for(let r of e.narration){if(Yt(r)>t)break;n=r}return n?.level}function Zt(e,t,n){let r=Xt(e,n);return r===void 0?void 0:t[r]}function Qt(e,t){let n=e.narration[0],r=e.narration[0];for(let i of e.narration){if(Yt(i)>t)break;r=n,n=i}if(!n||!r)return;let i=t-Yt(n),a=i>=4?1:Math.max(i/4,0);return{from:r.level,to:n.level,progress:a}}function $t(e,t,n,r){let i=0,a=0,o=0;for(let s of e.narration){let e=Yt(s);if(e>r)break;a=tn(i,a,o,e),i=e,o=+!!t[s.level].senses.includes(n)}return tn(i,a,o,r)}function en(e,t,n,r){return $t(e,t,n,r)>0?`live`:$t(e,t,n,r+20)>0?`warming`:`away`}function tn(e,t,n,r){let i=r-e;return i>=4?n:i<=0?t:t+(n-t)*i/4}function nn(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function rn(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},J={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new L},alphaMap:{value:null},alphaMapTransform:{value:new L},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new L}},envmap:{envMap:{value:null},envMapRotation:{value:new L},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new L}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new L}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new L},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new L},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new L},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new L}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new L}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new L}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new L},alphaTest:{value:0},uvTransform:{value:new L}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new L},alphaMap:{value:null},alphaMapTransform:{value:new L},alphaTest:{value:0}}},an={basic:{uniforms:He([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:He([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:He([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:He([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:He([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new H(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:He([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:He([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:He([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:He([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:He([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:He([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new L},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new L}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distance:{uniforms:He([J.common,J.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distance_vert,fragmentShader:q.distance_frag},shadow:{uniforms:He([J.lights,J.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};an.physical={uniforms:He([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new L},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new L},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new L},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new L},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new L},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new L},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new L},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new L},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new L},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new L},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new L},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new L}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var on={r:0,b:0,g:0},sn=new B,cn=new L;cn.set(-1,0,0,0,1,0,0,0,1);function ln(e,t,n,r,i,a){let s=new H(0),c=i===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function h(t){let r=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),r=!0);let o=e.xr.getEnvironmentBlendMode();o===`additive`?n.buffers.color.setClear(0,0,0,1,a):o===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let i=m(n);i&&(i.isCubeTexture||i.mapping===306)?(u===void 0&&(u=new G(new Fe(1,1,1),new j({name:`BackgroundCubeMaterial`,uniforms:I(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=i,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sn.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(cn),u.material.toneMapped=V.getTransfer(i.colorSpace)!==Je,(d!==i||f!==i.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=i,f=i.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):i&&i.isTexture&&(l===void 0&&(l=new G(new o(2,2),new j({name:`BackgroundMaterial`,uniforms:I(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=i,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=V.getTransfer(i.colorSpace)!==Je,i.matrixAutoUpdate===!0&&i.updateMatrix(),l.material.uniforms.uvTransform.value.copy(i.matrix),(d!==i||f!==i.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=i,f=i.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,r){t.getRGB(on,lt(e)),n.buffers.color.setClear(on.r,on.g,on.b,r,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function un(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function dn(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function fn(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(P(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&P(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function pn(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ze,s=new L,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var mn=4,hn=[.125,.215,.35,.446,.526,.582],gn=20,_n=256,vn=new p,yn=new H,bn=null,xn=0,Sn=0,Cn=!1,wn=new W,Tn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=wn}=i;bn=this._renderer.getRenderTarget(),xn=this._renderer.getActiveCubeFace(),Sn=this._renderer.getActiveMipmapLevel(),Cn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bn,xn,Sn),this._renderer.xr.enabled=Cn,e.scissorTest=!1,On(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bn=this._renderer.getRenderTarget(),xn=this._renderer.getActiveCubeFace(),Sn=this._renderer.getActiveMipmapLevel(),Cn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:it,minFilter:it,generateMipmaps:!1,type:s,format:x,colorSpace:Me,depthBuffer:!1},r=Dn(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dn(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=En(r)),this._blurMaterial=An(r,e,t),this._ggxMaterial=kn(r,e,t)}return r}_compileMaterial(e){let t=new G(new bt,e);this._renderer.compile(t,vn)}_sceneToCubeUV(e,t,n,r,i){let a=new ae(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(yn),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new G(new Fe,new nt({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(yn),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;On(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mn()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jn());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;On(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,vn)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-mn?n-d+mn:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,On(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,vn),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,On(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,vn)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&Le(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):gn;m>gn&&P(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gn}`);let h=[],g=0;for(let e=0;e<gn;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];On(t,3*v*(r>_-mn?r-_+mn:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,vn)}};function En(e){let t=[],n=[],r=[],i=e,a=e-mn+1+hn.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-mn?s=hn[o-e+mn-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new bt;h.setAttribute(`position`,new U(f,3)),h.setAttribute(`uv`,new U(p,2)),h.setAttribute(`faceIndex`,new U(m,1)),r.push(new G(h,null)),i>mn&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Dn(e,t,n){let r=new ot(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function On(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function kn(e,t,n){return new j({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:_n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nn(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function An(e,t,n){let r=new Float32Array(gn),i=new W(0,1,0);return new j({name:`SphericalGaussianBlur`,defines:{n:gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nn(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function jn(){return new j({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Nn(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mn(){return new j({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nn(){return`

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
	`}var Pn=class extends ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ne(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fe(5,5,5),i=new j({name:`CubemapFromEquirect`,uniforms:I(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new G(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=it),new St(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Fn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Pn(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Tn(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Tn(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function In(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ct(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ln(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?v:Se)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Rn(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function zn(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Le(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Bn(e,t,n){let r=new WeakMap,i=new pt;function a(a,o,s){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u===void 0?0:u.length,f=r.get(o);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],u=o.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),a===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*d),_=new l(g,m,h,d);_.type=S,_.needsUpdate=!0;let v=p*4;for(let t=0;t<d;t++){let r=s[t],o=c[t],l=u[t],d=m*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(l,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=l.itemSize===4?i.w:1)}}f={count:d,texture:_,size:new vt(m,h)},r.set(o,f);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,f.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,f.size)}return{update:a}}function Vn(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Hn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Un(e,t,n,r,i,a){let o=new ot(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new ie(t,n):void 0}),c=new ot(t,n,{type:s,depthBuffer:!1,stencilBuffer:!1}),l=new bt;l.setAttribute(`position`,new g([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new g([0,2,0,0,2,0],2));let u=new kt({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new G(l,u),f=new p(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,y=null,b=[],x=!1;this.setSize=function(e,t){o.setSize(e,t),c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<b.length;e++){let r=b[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(_||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=c;for(let i=0;i<b.length;i++){let a=b[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,u.defines={},V.getTransfer(m)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Hn[h];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(d,f),y=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),c.dispose(),l.dispose(),u.dispose()}}var Wn=new be,Gn=new ie(1,1),Kn=new l,qn=new de,Jn=new Ne,Yn=[],Xn=[],Zn=new Float32Array(16),Qn=new Float32Array(9),$n=new Float32Array(4);function er(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Yn[i];if(a===void 0&&(a=new Float32Array(i),Yn[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function tr(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function nr(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function rr(e,t){let n=Xn[t];n===void 0&&(n=new Int32Array(t),Xn[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ir(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ar(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tr(n,t))return;e.uniform2fv(this.addr,t),nr(n,t)}}function or(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(tr(n,t))return;e.uniform3fv(this.addr,t),nr(n,t)}}function sr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tr(n,t))return;e.uniform4fv(this.addr,t),nr(n,t)}}function cr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tr(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),nr(n,t)}else{if(tr(n,r))return;$n.set(r),e.uniformMatrix2fv(this.addr,!1,$n),nr(n,r)}}function lr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tr(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),nr(n,t)}else{if(tr(n,r))return;Qn.set(r),e.uniformMatrix3fv(this.addr,!1,Qn),nr(n,r)}}function ur(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tr(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),nr(n,t)}else{if(tr(n,r))return;Zn.set(r),e.uniformMatrix4fv(this.addr,!1,Zn),nr(n,r)}}function dr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function fr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tr(n,t))return;e.uniform2iv(this.addr,t),nr(n,t)}}function pr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tr(n,t))return;e.uniform3iv(this.addr,t),nr(n,t)}}function mr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tr(n,t))return;e.uniform4iv(this.addr,t),nr(n,t)}}function hr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function gr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tr(n,t))return;e.uniform2uiv(this.addr,t),nr(n,t)}}function _r(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tr(n,t))return;e.uniform3uiv(this.addr,t),nr(n,t)}}function vr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tr(n,t))return;e.uniform4uiv(this.addr,t),nr(n,t)}}function yr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Gn.compareFunction=n.isReversedDepthBuffer()?518:515,a=Gn):a=Wn,n.setTexture2D(t||a,i)}function br(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||qn,i)}function xr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Jn,i)}function Sr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Kn,i)}function Cr(e){switch(e){case 5126:return ir;case 35664:return ar;case 35665:return or;case 35666:return sr;case 35674:return cr;case 35675:return lr;case 35676:return ur;case 5124:case 35670:return dr;case 35667:case 35671:return fr;case 35668:case 35672:return pr;case 35669:case 35673:return mr;case 5125:return hr;case 36294:return gr;case 36295:return _r;case 36296:return vr;case 35678:case 36198:case 36298:case 36306:case 35682:return yr;case 35679:case 36299:case 36307:return br;case 35680:case 36300:case 36308:case 36293:return xr;case 36289:case 36303:case 36311:case 36292:return Sr}}function wr(e,t){e.uniform1fv(this.addr,t)}function Tr(e,t){let n=er(t,this.size,2);e.uniform2fv(this.addr,n)}function Er(e,t){let n=er(t,this.size,3);e.uniform3fv(this.addr,n)}function Dr(e,t){let n=er(t,this.size,4);e.uniform4fv(this.addr,n)}function Or(e,t){let n=er(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function kr(e,t){let n=er(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ar(e,t){let n=er(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function jr(e,t){e.uniform1iv(this.addr,t)}function Mr(e,t){e.uniform2iv(this.addr,t)}function Nr(e,t){e.uniform3iv(this.addr,t)}function Pr(e,t){e.uniform4iv(this.addr,t)}function Fr(e,t){e.uniform1uiv(this.addr,t)}function Ir(e,t){e.uniform2uiv(this.addr,t)}function Lr(e,t){e.uniform3uiv(this.addr,t)}function Rr(e,t){e.uniform4uiv(this.addr,t)}function zr(e,t,n){let r=this.cache,i=t.length,a=rr(n,i);tr(r,a)||(e.uniform1iv(this.addr,a),nr(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Gn:Wn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Br(e,t,n){let r=this.cache,i=t.length,a=rr(n,i);tr(r,a)||(e.uniform1iv(this.addr,a),nr(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||qn,a[e])}function Vr(e,t,n){let r=this.cache,i=t.length,a=rr(n,i);tr(r,a)||(e.uniform1iv(this.addr,a),nr(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Jn,a[e])}function Hr(e,t,n){let r=this.cache,i=t.length,a=rr(n,i);tr(r,a)||(e.uniform1iv(this.addr,a),nr(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Kn,a[e])}function Ur(e){switch(e){case 5126:return wr;case 35664:return Tr;case 35665:return Er;case 35666:return Dr;case 35674:return Or;case 35675:return kr;case 35676:return Ar;case 5124:case 35670:return jr;case 35667:case 35671:return Mr;case 35668:case 35672:return Nr;case 35669:case 35673:return Pr;case 5125:return Fr;case 36294:return Ir;case 36295:return Lr;case 36296:return Rr;case 35678:case 36198:case 36298:case 36306:case 35682:return zr;case 35679:case 36299:case 36307:return Br;case 35680:case 36300:case 36308:case 36293:return Vr;case 36289:case 36303:case 36311:case 36292:return Hr}}var Wr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cr(t.type)}},Gr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ur(t.type)}},Kr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},qr=/(\w+)(\])?(\[|\.)?/g;function Jr(e,t){e.seq.push(t),e.map[t.id]=t}function Yr(e,t,n){let r=e.name,i=r.length;for(qr.lastIndex=0;;){let a=qr.exec(r),o=qr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Jr(n,l===void 0?new Wr(s,e,t):new Gr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Kr(s),Jr(n,e)),n=e}}}var Xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Yr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Zr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Qr=37297,$r=0;function ei(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ti=new L;function ni(e){V._getMatrix(ti,V.workingColorSpace,e);let t=`mat3( ${ti.elements.map(e=>e.toFixed(4))} )`;switch(V.getTransfer(e)){case st:return[t,`LinearTransferOETF`];case Je:return[t,`sRGBTransferOETF`];default:return P(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ri(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ei(e.getShaderSource(t),r)}return i}function ii(e,t){let n=ni(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ai={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function oi(e,t){let n=ai[t];return n===void 0?(P(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var si=new W;function ci(){return V.getLuminanceCoefficients(si),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${si.x.toFixed(4)}, ${si.y.toFixed(4)}, ${si.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function li(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(fi).join(`
`)}function ui(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function di(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function fi(e){return e!==``}function pi(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mi(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hi=/^[ \t]*#include +<([\w\d./]+)>/gm;function gi(e){return e.replace(hi,vi)}var _i=new Map;function vi(e,t){let n=q[t];if(n===void 0){let e=_i.get(t);if(e!==void 0)n=q[e],P(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return gi(n)}var yi=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bi(e){return e.replace(yi,xi)}function xi(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Si(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Ci={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function wi(e){return Ci[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ti={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ei(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ti[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Di={302:`ENVMAP_MODE_REFRACTION`};function Oi(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Di[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ki={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ai(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ki[e.combine]||`ENVMAP_BLENDING_NONE`}function ji(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Mi(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=wi(n),l=Ei(n),u=Oi(n),d=Ai(n),f=ji(n),p=li(n),m=ui(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(fi).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(fi).join(`
`),_.length>0&&(_+=`
`)):(g=[Si(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(fi).join(`
`),_=[Si(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:oi(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,ii(`linearToOutputTexel`,n.outputColorSpace),ci(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(fi).join(`
`)),o=gi(o),o=pi(o,n),o=mi(o,n),s=gi(s),s=pi(s,n),s=mi(s,n),o=bi(o),s=bi(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Zr(i,i.VERTEX_SHADER,y),S=Zr(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ri(i,x,`vertex`),n=ri(i,S,`fragment`);Le(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):P(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Xr(i,h),T=di(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Qr)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$r++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ni=0,Pi=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fi(e),t.set(e,n)),n}},Fi=class{constructor(e){this.id=Ni++,this.code=e,this.usedTimes=0}};function Ii(e){return e===1030||e===37490||e===36285}function Li(e,t,n,r,i,a){let o=new Ee,s=new Pi,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&P(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=an[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let te=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,j=h.isBatchedMesh===!0,re=!!i.map,ie=!!i.matcap,ae=!!x,M=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,N=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=fe&&!!i.anisotropyMap,ye=pe&&!!i.clearcoatMap,be=pe&&!!i.clearcoatNormalMap,xe=pe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,Ae=_e&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,Pe=!!i.alphaHash,F=!!i.extensions,Fe=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let I={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:j,batchingColor:j&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:V.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:M,lightMap:oe,bumpMap:se,normalMap:N,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:N&&i.normalMapType===1,normalMapTangentSpace:N&&i.normalMapType===0,packedNormalMap:N&&i.normalMapType===0&&Ii(i.normalMap.format),metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:ve,clearcoat:pe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:Pe,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:M&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:N&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:ue&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(N||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&N===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&V.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&V.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:F&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(F&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return I.vertexUv1s=c.has(1),I.vertexUv2s=c.has(2),I.vertexUv3s=c.has(3),c.clear(),I}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=an[t];n=D.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Mi(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Ri(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function zi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Bi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Vi(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||zi),r.length>1&&r.sort(t||Bi),i.length>1&&i.sort(t||Bi),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Hi(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Vi,e.set(t,[i])):n>=r.length?(i=new Vi,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ui(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new W,color:new H};break;case`SpotLight`:n={position:new W,direction:new W,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function Wi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Gi=0;function Ki(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function qi(e){let t=new Ui,n=Wi(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new B,o=new B;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Ki);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Gi++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Ji(e){let t=new qi(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Yi(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ji(e),t.set(n,[a])):r>=i.length?(a=new Ji(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xi=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zi=`uniform sampler2D shadow_pass;
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
}`,Qi=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],$i=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],ea=new B,ta=new W,na=new W;function ra(e,t,n){let r=new O,i=new vt,a=new vt,o=new pt,c=new Ue,l=new Ve,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new j({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Xi,fragmentShader:Zi}),h=p.clone();h.defines.HORIZONTAL_PASS=1;let g=new bt;g.setAttribute(`position`,new U(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new G(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,c){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(P(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let h=y!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){P(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();i.multiply(g),a.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/g.x),i.x=a.x*g.x,f.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/g.y),i.y=a.y*g.y,f.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=_,f.map===null||h===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(u.isPointLight){P(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new ot(i.x,i.y,{format:Mt,type:s,minFilter:it,magFilter:it,generateMipmaps:!1}),f.map.texture.name=u.name+`.shadowMap`,f.map.depthTexture=new ie(i.x,i.y,S),f.map.depthTexture.name=u.name+`.shadowMapDepth`,f.map.depthTexture.format=m,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=fe,f.map.depthTexture.magFilter=fe}else u.isPointLight?(f.map=new Pn(i.x),f.map.depthTexture=new jt(i.x,De)):(f.map=new ot(i.x,i.y),f.map.depthTexture=new ie(i.x,i.y,De)),f.map.depthTexture.name=u.name+`.shadowMap`,f.map.depthTexture.format=m,this.type===1?(f.map.depthTexture.compareFunction=_?518:515,f.map.depthTexture.minFilter=it,f.map.depthTexture.magFilter=it):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=fe,f.map.depthTexture.magFilter=fe);f.camera.updateProjectionMatrix()}let v=f.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<v;t++){if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}if(u.isPointLight){let e=f.camera,n=f.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ta.setFromMatrixPosition(u.matrixWorld),e.position.copy(ta),na.copy(e.position),na.add(Qi[t]),e.up.copy($i[t]),e.lookAt(na),e.updateMatrixWorld(),n.makeTranslation(-ta.x,-ta.y,-ta.z),ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(ea,e.coordinateSystem,e.reversedDepth)}else f.updateMatrices(u);r=f.getFrustum(),C(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&b(f,c),f.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(l,u,f)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new ot(i.x,i.y,{format:Mt,type:s})),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,w)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function C(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)C(c[e],i,a,o,s)}function w(e){e.target.removeEventListener(`dispose`,w);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ia(e,t){function n(){let t=!1,n=new pt,r=null,i=new pt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=me[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=j>=1);let ie=null,ae={},M=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new pt().fromArray(M),N=new pt().fromArray(oe);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),ue(e.CULL_FACE),ve(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(de(e.BLEND),g=!1);return}if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Le(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Le(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Le(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Le(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==ee&&(ne&&e.lineWidth(t),ee=t)}function Ce(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function we(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+A-1),ie!==t&&(e.activeTexture(t),ie=t)}function Ee(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+A-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function De(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){Le(`WebGLState:`,e)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(e){Le(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){Le(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){Le(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Le(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Le(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){Le(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){Le(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){Le(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){Le(`WebGLState:`,e)}}function I(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function L(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){N.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),N.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function R(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function z(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,se.set(0,0,e.canvas.width,e.canvas.height),N.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:P,texImage2D:F,texImage3D:Fe,pixelStorei:Ie,getParameter:I,updateUBOMapping:ze,uniformBlockBinding:R,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:L,viewport:Re,reset:z}}function aa(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,u=new WeakMap,p=new Set,m,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):xt(`canvas`)}function v(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);m===void 0&&(m=_(n,a));let o=t?_(n,a):m;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),P(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&P(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];P(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||P(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?st:V.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,P(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),D(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&p.delete(t)}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),ee(t)}function D(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=h.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&O(e),Object.keys(i).length===0&&h.delete(n)}r.remove(e)}function O(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=h.get(i);delete a[n.__cacheKey],o.memory.textures--}function ee(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let k=0;function te(){k=0}function A(){return k}function ne(e){k=e}function j(){let e=k;return e>=i.maxTextures&&P(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),k+=1,e}function re(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ie(t,i){let a=r.get(t);if(t.isVideoTexture&&Oe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)P(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)P(`WebGLRenderer: Texture marked for update but image is incomplete`);else{me(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){me(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function M(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){me(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){he(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let se={[Et]:e.REPEAT,[et]:e.CLAMP_TO_EDGE,[At]:e.MIRRORED_REPEAT},N={[fe]:e.NEAREST,[Dt]:e.NEAREST_MIPMAP_NEAREST,[d]:e.NEAREST_MIPMAP_LINEAR,[it]:e.LINEAR,[Ke]:e.LINEAR_MIPMAP_NEAREST,[mt]:e.LINEAR_MIPMAP_LINEAR},ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function le(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&P(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,se[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,se[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,se[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,N[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,N[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ce[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ue(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,T));let i=n.source,a=h.get(i);a===void 0&&(a={},h.set(i,a));let s=re(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&O(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function pe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=de(n.start,r.width,4),c=de(t.start,r.width,4);n.start<=i+1&&a===c&&de(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function me(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ue(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=V.getPrimaries(V.workingColorSpace),r=o.colorSpace===``?null:V.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=ke(o,t);let r=a.convert(o.format,o.colorSpace),m=a.convert(o.type),h=S(o.internalFormat,r,m,o.normalized,o.colorSpace,o.isVideoTexture);le(c,o);let g,_=o.mipmaps,x=o.isVideoTexture!==!0,T=d.__version===void 0||l===!0,E=u.dataReady,D=w(o,t);if(o.isDepthTexture)h=C(o.format===f,o.type),T&&(x?n.texStorage2D(e.TEXTURE_2D,1,h,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,m,null));else if(o.isDataTexture){if(_.length>0){x&&T&&n.texStorage2D(e.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],x?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,m,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,m,g.data);o.generateMipmaps=!1}else x?(T&&n.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height),E&&pe(o,t,r,m)):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,m,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){x&&T&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,h,_[0].width,_[0].height,t.depth);for(let i=0,a=_.length;i<a;i++)if(g=_[i],o.format!==1023){if(r!==null){if(x){if(E){if(o.layerUpdates.size>0){let t=z(g.width,g.height,o.format,o.type);for(let a of o.layerUpdates){let o=g.data.subarray(a*t/g.data.BYTES_PER_ELEMENT,(a+1)*t/g.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,g.width,g.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,g.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,h,g.width,g.height,t.depth,0,g.data,0,0)}else P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else x?E&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,m,g.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,h,g.width,g.height,t.depth,0,r,m,g.data)}else{x&&T&&n.texStorage2D(e.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],o.format===1023?x?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,m,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,m,g.data):r===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):x?E&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,g.data):n.compressedTexImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,g.data)}}else if(o.isDataArrayTexture){if(x){if(T&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,h,t.width,t.height,t.depth),E){if(o.layerUpdates.size>0){let i=z(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,m,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,m,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,h,t.width,t.height,t.depth,0,r,m,t.data)}else if(o.isData3DTexture)x?(T&&n.texStorage3D(e.TEXTURE_3D,D,h,t.width,t.height,t.depth),E&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,m,t.data)):n.texImage3D(e.TEXTURE_3D,0,h,t.width,t.height,t.depth,0,r,m,t.data);else if(o.isFramebufferTexture){if(T){if(x)n.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<D;t++)n.texImage2D(e.TEXTURE_2D,t,h,i,a,0,r,m,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),p.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of p)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_.length>0){if(x&&T){let t=Ae(_[0]);n.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height)}for(let t=0,i=_.length;t<i;t++)g=_[t],x?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,m,g):n.texImage2D(e.TEXTURE_2D,t,h,r,m,g);o.generateMipmaps=!1}else if(x){if(T){let r=Ae(t);n.texStorage2D(e.TEXTURE_2D,D,h,r.width,r.height)}E&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,m,t)}else n.texImage2D(e.TEXTURE_2D,0,h,r,m,t);y(o)&&b(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,o,s){if(o.image.length!==6)return;let c=ue(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=V.getPrimaries(V.workingColorSpace),r=o.colorSpace===``?null:V.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ke(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),C=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=w(o,h);le(e.TEXTURE_CUBE_MAP,o);let O;if(f){C&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,x,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):C?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,C&&T){O.length>0&&D++;let t=Ae(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<O.length;r++){let i=O[r];C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ee(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;De(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);De(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ve(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,T)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),le(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ie(i.depthTexture,0);let u=l.__webglTexture,d=Ee(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ye(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ve(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ve(i.__webglFramebuffer[0],t,0):ve(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),_e(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),_e(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,i){let a=r.get(t);n!==void 0&&ge(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ye(t)}function xe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,E);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&De(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ee(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),_e(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),le(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ge(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)&&b(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),le(c,a),ge(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),le(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ge(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)&&b(r),n.unbindTexture()}t.depthBuffer&&ye(t)}function Se(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Ce=[],we=[];function Te(t){if(t.samples>0){if(De(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ce.length=0,we.length=0,Ce.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Ce.push(l),we.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,we)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ee(e){return Math.min(i.maxSamples,e.samples)}function De(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Oe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(V.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&P(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Le(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=te,this.getTextureUnits=A,this.setTextureUnits=ne,this.setTexture2D=ie,this.setTexture2DArray=ae,this.setTexture3D=M,this.setTextureCube=oe,this.rebindTextures=be,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function oa(e,t){function n(n,r=``){let i,a=V.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var sa=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ca=`
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

}`,la=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ne(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new j({vertexShader:sa,fragmentShader:ca,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new o(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ua=class extends k{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new la,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new vt,E=null,D=new ae;D.viewport=new pt;let O=new ae;O.viewport=new pt;let ee=[D,O],k=new Ae,te=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new gt,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new gt,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new gt,C[e]=t),t.getHandSpace()};function j(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}te=null,A=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(b),p=null,d=null,u=null,r=null,S=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?p:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,M),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?f:m,a=y.stencil?Te:De);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ot(d.textureWidth,d.textureHeight,{format:x,type:dt,depthTexture:new ie(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ot(p.framebufferWidth,p.framebufferHeight,{format:x,type:dt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let oe=new W,se=new W;function N(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),k.near=O.near=D.near=t,k.far=O.far=D.far=n,(te!==k.near||A!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),te=k.near,A=k.far),k.layers.mask=e.layers.mask|6,D.layers.mask=k.layers.mask&-5,O.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;ce(k,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?N(k,D,O):k.projectionMatrix.copy(D.projectionMatrix),le(e,k,i)};function le(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ue*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||p!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(e){return v[e]};let de=null;function fe(t,i){if(l=i.getViewerPose(c||a),h=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ee[n];o===void 0&&(o=new ae,o.layers.enable(n),o.viewport=new pt,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ne,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let pe=new nn;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},da=new B,fa=new L;fa.set(-1,0,0,0,1,0,0,0,1);function pa(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,lt(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(da.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(fa),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ma(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Le(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?P(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):P(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ha=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ga=null;function _a(){return ga===null&&(ga=new Tt(ha,16,16,Mt,s),ga.name=`DFG_LUT`,ga.minFilter=it,ga.magFilter=it,ga.wrapS=et,ga.wrapT=et,ga.generateMipmaps=!1,ga.needsUpdate=!0),ga}var va=class{constructor(e={}){let{canvas:t=Qe(),context:n=null,depth:i=!0,stencil:o=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p=`default`,failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:g=dt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=c;let v=g,y=new Set([ve,Pe,u]),b=new Set([dt,De,Re,Te,ce,r]),x=new Uint32Array(4),S=new Int32Array(4),C=new W,w=null,T=null,E=[],D=[],ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,te=!1,A=null,ne=null,j=null,re=null;this._outputColorSpace=a;let ie=0,ae=0,M=null,oe=-1,se=null,N=new pt,le=new pt,ue=null,de=new H(0),fe=0,pe=t.width,me=t.height,he=1,ge=null,_e=null,ye=new pt(0,0,pe,me),be=new pt(0,0,pe,me),xe=!1,Se=new O,Ce=!1,we=!1,Ee=new B,Oe=new W,ke=new pt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return M===null?he:1}let F=n;function Fe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:i,stencil:o,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,G,!1),F===null){let t=`webgl2`;if(F=Fe(t,e),F===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw Le(`WebGLRenderer: `+e.message),e}let I,Ie,L,ze,R,z,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,U,$e,et,nt,rt,it;function at(){I=new In(F),I.init(),nt=new oa(F,I),Ie=new fn(F,I,e,nt),L=new ia(F,I),Ie.reversedDepthBuffer&&h&&L.buffers.depth.setReversed(!0),ne=F.createFramebuffer(),j=F.createFramebuffer(),re=F.createFramebuffer(),ze=new zn(F),R=new Ri,z=new aa(F,I,L,R,Ie,nt,ze),Ve=new Fn(k),He=new rn(F),rt=new un(F,He),Ue=new Ln(F,He,ze,rt),We=new Vn(F,Ue,He,rt,ze),U=new Bn(F,Ie,z),Ye=new pn(R),Ge=new Li(k,Ve,I,Ie,rt,Ye),Ke=new pa(k,R),qe=new Hi,Je=new Yi(I),Ze=new ln(k,Ve,L,We,_,d),Xe=new ra(k,We,Ie),it=new ma(F,ze,Ie,L),$e=new dn(F,I,ze),et=new Rn(F,I,ze),ze.programs=Ge.programs,k.capabilities=Ie,k.extensions=I,k.properties=R,k.renderLists=qe,k.shadowMap=Xe,k.state=L,k.info=ze}at(),v!==1009&&(ee=new Un(v,t.width,t.height,l,i,o));let st=new ua(k,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=I.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=I.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){if(st.isPresenting){P(`WebGLRenderer: Can't change size while VR device is presenting.`);return}pe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(pe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009){Le(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){P(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(N)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),L.viewport(N.copy(ye).multiplyScalar(he).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),L.scissor(le.copy(be).multiplyScalar(he).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){L.setScissorTest(xe=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=y.has(t)}if(e){let e=M.texture.type,t=b.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(x[0]=i,x[1]=a,x[2]=o,x[3]=r,F.clearBufferuiv(F.COLOR,0,x)):(S[0]=i,S[1]=a,S[2]=o,S[3]=r,F.clearBufferiv(F.COLOR,0,S))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),A=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,G,!1),Ze.dispose(),qe.dispose(),Je.dispose(),R.dispose(),Ve.dispose(),We.dispose(),rt.dispose(),it.dispose(),Ge.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,yt),st.removeEventListener(`sessionend`,bt),xt.stop()};function ct(e){e.preventDefault(),tt(`WebGLRenderer: Context Lost.`),te=!0}function lt(){tt(`WebGLRenderer: Context Restored.`),te=!1;let e=ze.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;at(),ze.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function G(e){Le(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),ft(t)}function ft(e){ht(e),R.remove(e)}function ht(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=He.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(I.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,n),e.side=0,e.needsUpdate=!0,Et(e,t,n),e.side=2):Et(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),T=Je.get(n),T.init(t),D.push(T),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),T.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];gt(a,n,e),r.add(a)}else gt(t,n,e),r.add(t)}}),T=D.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){R.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}I.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new nn;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,st.setAnimationLoop(e),e===null?xt.stop():xt.start()},st.addEventListener(`sessionstart`,yt),st.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Le(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;A!==null&&A.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=ee!==null&&(M===null||n)&&ee.begin(k,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(k,e,t,M),T=Je.get(e,D.length),T.init(t),T.state.textureUnits=z.getTextureUnits(),D.push(T),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Se.setFromProjectionMatrix(Ee,je,t.reversedDepth),we=this.localClippingEnabled,Ce=Ye.init(this.clippingPlanes,we),w=qe.get(e,E.length),w.init(),E.push(w),st.enabled===!0&&st.isPresenting===!0){let e=k.xr.getDepthSensingMesh();e!==null&&K(e,t,-1/0,k.sortObjects)}K(e,t,0,k.sortObjects),w.finish(),k.sortObjects===!0&&w.sort(ge,_e,t.reversedDepth),Me=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Me&&Ze.addToRenderList(w,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&Ye.beginShadows();let i=T.state.shadowsArray;if(Xe.render(i,e,t),Ce===!0&&Ye.endShadows(),(r&&ee.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(T.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Me&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(w,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Me&&Ze.render(e),St(w,e,t)}M!==null&&ae===0&&(z.updateMultisampleRenderTarget(M),z.updateRenderTargetMipmap(M)),r&&ee.end(k),e.isScene===!0&&e.onAfterRender(k,e,t),rt.resetDefaultState(),oe=-1,se=null,D.pop(),D.length>0?(T=D[D.length-1],z.setTextureUnits(T.state.textureUnits),Ce===!0&&Ye.setGlobalState(k.clippingPlanes,T.state.camera)):T=null,E.pop(),w=E.length>0?E[E.length-1]:null,A!==null&&A.renderEnd()};function K(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)T.pushLightProbeGrid(e);else if(e.isLight)T.pushLight(e),e.castShadow&&T.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Se.intersectsSprite(e)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let t=We.update(e),i=e.material;i.visible&&w.push(e,t,i,n,ke.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Se.intersectsObject(e))){let t=We.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ke.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&w.push(e,t,s,n,ke.z,o)}}else i.visible&&w.push(e,t,i,n,ke.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)K(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;T.setupLightsView(n),Ce===!0&&Ye.setGlobalState(k.clippingPlanes,n),r&&L.viewport(N.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[r.id]===void 0){let e=I.has(`EXT_color_buffer_half_float`)||I.has(`EXT_color_buffer_float`);T.state.transmissionRenderTarget[r.id]=new ot(1,1,{generateMipmaps:!0,type:e?s:dt,minFilter:mt,samples:Math.max(4,Ie.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:V.workingColorSpace})}let i=T.state.transmissionRenderTarget[r.id],a=r.viewport||N;i.setSize(a.z*k.transmissionResolutionScale,a.w*k.transmissionResolutionScale);let c=k.getRenderTarget(),l=k.getActiveCubeFace(),u=k.getActiveMipmapLevel();k.setRenderTarget(i),k.getClearColor(de),fe=k.getClearAlpha(),fe<1&&k.setClearColor(16777215,.5),k.clear(),Me&&Ze.render(n);let d=k.toneMapping;k.toneMapping=0;let f=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),T.setupLightsView(r),Ce===!0&&Ye.setGlobalState(k.clippingPlanes,r),wt(e,n,r),z.updateMultisampleRenderTarget(i),z.updateRenderTargetMipmap(i),I.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(i),z.updateRenderTargetMipmap(i))}k.setRenderTarget(c,l,u),k.setClearColor(de,fe),f!==void 0&&(r.viewport=f),k.toneMapping=d}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function Et(e,t,n){t.isScene!==!0&&(t=Ae);let r=R.get(e),i=T.state.lights,a=T.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,T.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=Ge.getUniforms(e),A!==null&&e.isNodeMaterial&&A.build(e,n,s),e.onBeforeCompile(s,k),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),Ot(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=T.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Xr.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];C.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(C))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=Ae),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?k.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:V.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=k.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=T.state.lights;if(Ce===!0&&(we===!0||e!==se)){let t=e===se&&r.id===oe;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=T.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Et(r,t,i),A&&r.isNodeMaterial&&A.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,E=x.getUniforms(),D=v.uniforms;if(L.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==oe&&(oe=r.id,C=!0),v.needsLights){let e=kt(T.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||se!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(F,`projectionMatrix`,e.projectionMatrix),E.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(F,Oe.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&E.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),se!==e&&(se=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&E.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,z),y.state.spotShadowMap.length>0&&E.setValue(F,`spotShadowMap`,y.state.spotShadowMap,z),y.state.pointShadowMap.length>0&&E.setValue(F,`pointShadowMap`,y.state.pointShadowMap,z)),i.isSkinnedMesh){E.setOptional(F,i,`bindMatrix`),E.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(F,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(E.setOptional(F,i,`batchingTexture`),E.setValue(F,`batchingTexture`,i._matricesTexture,z),E.setOptional(F,i,`batchingIdTexture`),E.setValue(F,`batchingIdTexture`,i._indirectTexture,z),E.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(F,`batchingColorTexture`,i._colorsTexture,z));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&U.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=_a()),C){if(E.setValue(F,`toneMappingExposure`,k.toneMappingExposure),v.needsLights&&jt(D,w),a&&r.fog===!0&&Ke.refreshFogUniforms(D,a),Ke.refreshMaterialUniforms(D,r,he,me,T.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}Xr.upload(F,Dt(v),D,z)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Xr.upload(F,Dt(v),D,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(F,`center`,i.center),E.setValue(F,`modelViewMatrix`,i.modelViewMatrix),E.setValue(F,`normalMatrix`,i.normalMatrix),E.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ie=t,ae=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),N.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,L.viewport(N),L.scissor(le),L.setScissorTest(ue),oe=-1;return}if(o.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(o.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,N.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else N.copy(ye).multiplyScalar(he).floor(),le.copy(be).multiplyScalar(he).floor(),ue=xe;if(n!==0&&(r=ne),L.bindFramebuffer(F.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(N),L.scissor(le),L.setScissorTest(ue),i){let r=R.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}oe=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Le(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),!Ie.textureFormatReadable(c)){Le(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Ie.textureTypeReadable(l)){Le(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=M===null?null:R.get(M).__webglFramebuffer;L.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),!Ie.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ie.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0);let f=M===null?null:R.get(M).__webglFramebuffer;L.bindFramebuffer(F.FRAMEBUFFER,f);let p=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Be(F,p,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.deleteBuffer(d),F.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=F.TEXTURE_2D),L.activeTexture(F.TEXTURE0),L.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(F.UNPACK_ROW_LENGTH),b=L.getParameter(F.UNPACK_IMAGE_HEIGHT),x=L.getParameter(F.UNPACK_SKIP_PIXELS),S=L.getParameter(F.UNPACK_SKIP_ROWS),C=L.getParameter(F.UNPACK_SKIP_IMAGES);L.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(F.UNPACK_SKIP_PIXELS,l),L.pixelStorei(F.UNPACK_SKIP_ROWS,u),L.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);L.bindFramebuffer(F.READ_FRAMEBUFFER,null),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(F.READ_FRAMEBUFFER,j),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,re);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);L.bindFramebuffer(F.READ_FRAMEBUFFER,null),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(F.UNPACK_ROW_LENGTH,y),L.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(F.UNPACK_SKIP_PIXELS,x),L.pixelStorei(F.UNPACK_SKIP_ROWS,S),L.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){ie=0,ae=0,M=null,L.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=V._getDrawingBufferColorSpace(e),t.unpackColorSpace=V._getUnpackColorSpace()}},ya=new qe(0,0,0,`YXZ`),ba=new W,xa={type:`change`},Sa={type:`lock`},Ca={type:`unlock`},wa=.002,Ta=Math.PI/2,Ea=class extends Oe{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Da.bind(this),this._onPointerlockChange=Oa.bind(this),this._onPointerlockError=ka.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener(`mousemove`,this._onMouseMove),this.domElement.ownerDocument.addEventListener(`pointerlockchange`,this._onPointerlockChange),this.domElement.ownerDocument.addEventListener(`pointerlockerror`,this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener(`mousemove`,this._onMouseMove),this.domElement.ownerDocument.removeEventListener(`pointerlockchange`,this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener(`pointerlockerror`,this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;let t=this.object;ba.setFromMatrixColumn(t.matrix,0),ba.crossVectors(t.up,ba),t.position.addScaledVector(ba,e)}moveRight(e){if(this.enabled===!1)return;let t=this.object;ba.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(ba,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}};function Da(e){if(this.enabled===!1||this.isLocked===!1)return;let t=this.object;ya.setFromQuaternion(t.quaternion),ya.y-=e.movementX*wa*this.pointerSpeed,ya.x-=e.movementY*wa*this.pointerSpeed,ya.x=Math.max(Ta-this.maxPolarAngle,Math.min(Ta-this.minPolarAngle,ya.x)),t.quaternion.setFromEuler(ya),this.dispatchEvent(xa)}function Oa(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Sa),this.isLocked=!0):(this.dispatchEvent(Ca),this.isLocked=!1)}function ka(){console.error(`THREE.PointerLockControls: Unable to use Pointer Lock API`)}var Aa=20,ja=[`KeyW`,`ArrowUp`],Ma=[`KeyS`,`ArrowDown`],Na=[`KeyD`,`ArrowRight`],Pa=[`KeyA`,`ArrowLeft`],Fa=new Set([`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`KeyA`,`KeyD`,`KeyS`,`KeyW`]);function Ia(e,t,n){let r=new Ea(e,n),i=La();return n.addEventListener(`click`,()=>r.lock()),{update:e=>Ra(r,t,i,e)}}function La(){let e=new Set;return window.addEventListener(`keydown`,t=>{Fa.has(t.code)&&(t.preventDefault(),e.add(t.code))}),window.addEventListener(`keyup`,t=>{Fa.has(t.code)&&(t.preventDefault(),e.delete(t.code))}),window.addEventListener(`blur`,()=>e.clear()),e}function Ra(e,t,n,r){if(!e.isLocked)return;let i=Ha(n,ja,Ma),a=Ha(n,Na,Pa),o=Math.hypot(i,a);if(o===0)return;let s=Aa*r/o;e.object.getWorldQuaternion(za),Ba.set(0,0,-1).applyQuaternion(za).multiplyScalar(i*s),Va.set(1,0,0).applyQuaternion(za).multiplyScalar(a*s),t.position.add(Ba).add(Va)}var za=new _,Ba=new W,Va=new W;function Ha(e,t,n){let r=t.some(t=>e.has(t)),i=n.some(t=>e.has(t));return Number(r)-Number(i)}var Ua={glideSpeedMetersPerSecond:5,climbRateMetersPerSecond:10,yawRateRadiansPerSecond:.8,neutralDescentMetersPerSecond:1,viewPitchAssistDegrees:30,minimumGroundClearanceMeters:1},Wa=new W(0,1,0),Ga=new W(0,0,-1),Ka=new _,qa=new W;function Ja(e,t,n){let r=-t.pitch,i=-t.roll;Ka.setFromAxisAngle(Wa,-i*Ua.yawRateRadiansPerSecond*n),e.quaternion.premultiply(Ka),qa.copy(Ga).applyQuaternion(e.quaternion),qa.y=0;let a=qa.length();a>1e-6&&(qa.divideScalar(a),e.position.addScaledVector(qa,Ua.glideSpeedMetersPerSecond*n));let o=r*Ua.climbRateMetersPerSecond-Ua.neutralDescentMetersPerSecond;e.position.y+=o*n}function Ya(e,t,n){return{update(r){let i=n.readFrame();if(i){Ja(e,i,r);return}t.update(r)}}}function Xa(e,t,n){let r=t(e.x,e.z),i=n.minimumGroundClearanceMeters===void 0?-1/0:r+n.minimumGroundClearanceMeters,a=n.maximumGroundClearanceMeters===void 0?1/0:r+n.maximumGroundClearanceMeters;e.y=Math.min(Math.max(e.y,i),a)}var Za=Ua.minimumGroundClearanceMeters;function Qa(e,t){e.set(0,0,0),t.identity()}var $a={pollIntervalMilliseconds:167,staleAfterMilliseconds:1e3,expectedDeviceId:``,resumePoseLimit:.85,abruptStepLimit:.9,restPitch:0,restRoll:0,restTolerance:.08,stableDurationMilliseconds:5e3,maxFrameGapMilliseconds:1e3,smoothingFactor:.625};function eo(){let e=null,t=null,n=!1,r=()=>{e=null,n=!1};return{apply(i,a){return i.quality<=0||!Number.isFinite(a)?(r(),t=null,i):(t!==null&&!to(t,a)&&r(),t=a,no(i)?e===null?(e=a,i):a-e<$a.stableDurationMilliseconds?i:(n=!0,{...i,pitch:0,roll:0}):(r(),i))},isHoldingZero(){return n}}}function to(e,t){let n=t-e;return n>=0&&n<=$a.maxFrameGapMilliseconds}function no(e){return Math.abs(e.pitch-$a.restPitch)<=$a.restTolerance&&Math.abs(e.roll-$a.restRoll)<=$a.restTolerance}function ro(){return{pitch:0,roll:0,quality:0,buttonPressed:!1,buttonDown:!1,buttonUp:!1,controllerType:`m5`}}function io(e,t){return t.quality<=0||e.quality<=0&&oo(t)||e.quality>0&&so(e,t)?ao(t):t}function ao(e){return{...ro(),buttonPressed:e.buttonPressed,buttonDown:e.buttonDown,buttonUp:e.buttonUp}}function oo(e){return Math.abs(e.pitch)>=$a.resumePoseLimit||Math.abs(e.roll)>=$a.resumePoseLimit}function so(e,t){return Math.abs(t.pitch-e.pitch)>=$a.abruptStepLimit||Math.abs(t.roll-e.roll)>=$a.abruptStepLimit}function co(){let e=0,t=0;return{apply(n){if(n.quality<=0)return e=0,t=0,n;let r=lo(e,n.pitch,$a.smoothingFactor),i=lo(t,n.roll,$a.smoothingFactor);return e=r,t=i,{...n,pitch:r,roll:i}}}}function lo(e,t,n){return e+(t-e)*n}function uo(e,t){return{pitch:t.pitch,roll:t.roll,quality:t.quality,buttonPressed:t.buttonPressed,buttonDown:e!==void 0&&t.buttonPressCount>e.buttonPressCount,buttonUp:e!==void 0&&t.buttonReleaseCount>e.buttonReleaseCount,controllerType:`m5`}}function fo(e=$a.expectedDeviceId){let n=eo(),r=co(),i,a=ro(),o=null,s=!1,c=!1,l=!1,u=!1,d=e=>o===null||e-o>$a.staleAfterMilliseconds;return{pushState(d,f){if(u=d.firmwareVersion!==t,l=e.length>0&&d.deviceId!==e,l)return;let p=uo(i,d);i=d,o=f;let m=io(a,p),h=n.apply(m,f);a=n.isHoldingZero()?h:r.apply(h),s||=p.buttonDown,c||=p.buttonUp},readFrame(e){let t={...d(e)?ro():a,buttonDown:s,buttonUp:c};return s=!1,c=!1,t},readLatestState(e){if(!(l||d(e)))return i},readDeviceReport(e){let t=d(e);return{state:l?`wrong-device`:t?`connecting`:`live`,quality:t?0:a.quality,hasFirmwareMismatch:u}}}}function po(t,n){let r,i=!1,a=async t=>{if(!i){i=!0;try{let r=await fetch(t);if(!r.ok)return;let i=e(await r.text());i&&n(i)}catch{}finally{i=!1}}},o=()=>{r!==void 0&&clearInterval(r),r=void 0};return{watch(e){o();let n=e.trim();if(n.length===0)return;let i=`${(n.includes(`://`)?n:`http://${n}`).replace(/\/$/,``)}/state`;r=setInterval(()=>void a(i),t)},stop:o}}function mo(e){let t=fo(e),n=po($a.pollIntervalMilliseconds,e=>t.pushState(e,Date.now())),r=!1;return{setHost(e){r=e.trim().length>0,n.watch(e)},readFrame(){if(r)return t.readFrame(Date.now())},readLatestState(){if(r)return t.readLatestState(Date.now())},readOperatorStatus(){if(!r)return{state:`off`};let e=t.readDeviceReport(Date.now());return{state:e.state,quality:e.quality,hasFirmwareMismatch:e.hasFirmwareMismatch}},unload:n.stop}}var ho=class{states=new Map;load(e){this.states.has(e)||(e.load(),this.states.set(e,`inactive`))}warm(e){let t=this.states.get(e);t!==void 0&&t!==`warming`&&(t===`active`&&e.deactivate(),this.states.set(e,`warming`))}activate(e){let t=this.states.get(e);t!==void 0&&t!==`active`&&(e.activate(),this.states.set(e,`active`))}update(e){for(let[t,n]of this.states)n!==`inactive`&&t.update?.(e)}deactivate(e){let t=this.states.get(e);t!==void 0&&t!==`inactive`&&(t===`active`&&e.deactivate(),this.states.set(e,`inactive`))}unload(e){this.states.has(e)&&(this.deactivate(e),e.unload(),this.states.delete(e))}},go=1,_o=class{options;readTime;jobs=[];constructor(e,t=()=>performance.now()){this.options=e,this.readTime=t}get size(){return this.jobs.length}enqueue(e){this.removeObsoleteJobs();let t=this.jobs.findIndex(({key:t})=>t===e.key);return t>=0?(this.jobs[t]=e,!0):this.jobs.length>=this.options.capacity?!1:(this.jobs.push(e),!0)}update(){if(this.removeObsoleteJobs(),this.jobs.length===0)return;let e=this.readTime()+this.options.budgetMilliseconds,t=this.jobs.length,n=vo(this.jobs);for(let r=0;r<t;r+=1){if(this.readTime()>=e)return;let t=this.jobs.shift();if(t?.isCurrent()){if(yo(t)!==n){this.jobs.push(t);continue}!t.runStep()&&t.isCurrent()&&this.jobs.push(t)}}}removeObsoleteJobs(){for(let e=this.jobs.length-1;e>=0;--e)this.jobs[e]?.isCurrent()||this.jobs.splice(e,1)}};function vo(e){return Math.min(...e.map(yo))}function yo(e){return e.priority??go}function bo(e=0){let t=new Pt;t.name=`ViewerRig`;let n=new Pt;n.name=`ViewPitchAssist`,n.rotation.x=K.degToRad(e);let r=new ae;n.add(r),t.add(n);let i=new W;return{group:t,camera:r,viewpoint:{worldPosition:i,get viewDistanceMeters(){return r.far}},publish:()=>{t.updateMatrixWorld(!0),r.getWorldPosition(i)}}}function xo(e){let t=new W;return()=>(e.updateWorldMatrix(!0,!1),t.set(0,0,-1).applyQuaternion(e.quaternion),Math.atan2(-t.x,-t.z))}var So={renderer:{antialias:!1,alpha:!1,xrCompatible:!0},streamQueue:{budgetMilliseconds:.5,capacity:256}},Co={optionalFeatures:[`local-floor`]};function wo(e){e.xr.enabled=!0;let t=new Set,n=`unknown`,r=!1;function i(){let e={availability:n,isSessionActive:r};for(let n of t)n(e)}function a(e){e!==n&&(n=e,console.info(`XR: immersive-vr is ${e}.`),i())}function o(){if(!navigator.xr){a(`unsupported`);return}navigator.xr.isSessionSupported(`immersive-vr`).then(e=>a(e?`available`:`unsupported`),()=>a(`unsupported`))}return o(),navigator.xr?.addEventListener(`devicechange`,o),e.xr.addEventListener(`sessionstart`,()=>{r=!0,console.info(`XR: the renderer is presenting to the headset.`),i()}),e.xr.addEventListener(`sessionend`,()=>{r=!1,console.info(`XR: the session ended.`),i()}),{start:async()=>{if(e.xr.getSession()||!navigator.xr)return;console.info(`XR: requesting an immersive-vr session.`);let t=await navigator.xr.requestSession(`immersive-vr`,Co);console.info(`XR: session granted; handing it to the renderer.`);try{await e.xr.setSession(t)}catch(e){throw console.error(`XR: the renderer could not adopt the session.`,e),await t.end().catch(()=>void 0),e}},stop:async()=>{let t=e.xr.getSession();t&&(console.info(`XR: ending the session.`),await t.end())},subscribe:e=>(t.add(e),e({availability:n,isSessionActive:r}),()=>{t.delete(e)})}}function To(){let e=document.createElement(`canvas`),t=So.renderer,n=e.getContext(`webgl2`,t);if(n===null)throw Error(`The browser offered no WebGL2 context to render into.`);return e.addEventListener(`webglcontextlost`,()=>{console.warn(`Renderer: the WebGL context was lost.`)}),e.addEventListener(`webglcontextrestored`,()=>{console.warn(`Renderer: the WebGL context was restored.`)}),new va({...So.renderer,canvas:e,context:n})}async function Eo(e,t={}){let{setupWorld:n,frameControl:r,viewPitchAssistDegrees:i=0}=t,a=new te,o=bo(i);a.add(o.group);let s=o.camera,c=To(),l=new _e,u=new ho,d=new _o(So.streamQueue,r?.readStreamTimeMilliseconds);e.replaceChildren(c.domElement);let f=wo(c);l.connect(document);let p=await n?.({scene:a,camera:s,viewerRig:o.group,viewpoint:o.viewpoint,renderer:c,modules:u,streamQueue:d,xr:f});function m(){if(c.xr.isPresenting)return;let t=e.clientWidth,n=e.clientHeight;t!==0&&n!==0&&(c.setSize(t,n,!1),s.aspect=t/n,s.updateProjectionMatrix())}m(),new ResizeObserver(m).observe(e);let h=0;c.setAnimationLoop(e=>{l.update(e);let t=r?r.fixedDeltaSeconds:l.getDelta();if(p?.(t),o.publish(),u.update(t),d.update(),c.render(a,s),!r)return;let n={frameIndex:h,timeMilliseconds:e,renderer:c,streamQueue:d};h+=1,r.afterFrame(n)||c.setAnimationLoop(null)})}var Do={lines:[{role:`title`,text:`BECOMING MANY`},{role:`role`,text:`A Project By`},{role:`name`,text:`Erasmus Schmidt`},{role:`name`,text:`Tade Strehk`},{role:`name`,text:`Eddie Huesmann`}]};function Oo(e,t){let n=e.creditsAtSeconds;if(n===void 0)return 0;let r=t-n;return r<=0?0:r>=4?1:r/4}var ko=[],Ao=class{chunkSize;radius;slotCount;chunksPerSide;chunksPerLayer;assignedVolumes;centerChunkX;centerChunkY;centerChunkZ;constructor({level:e,radius:t}){this.chunkSize=zt(e),this.radius=t,this.chunksPerSide=t*2+1,this.chunksPerLayer=this.chunksPerSide**2,this.slotCount=this.chunksPerSide**3,this.assignedVolumes=jo(this.slotCount)}update(e,t,n){let r=this.getChunkCoordinateAt(e,t,n);return this.isCurrentCenter(r)?ko:(this.centerChunkX=r.chunkX,this.centerChunkY=r.chunkY,this.centerChunkZ=r.chunkZ,this.assignWindowVolumes(r))}isCurrent(e){let t=this.assignedVolumes[e.slotIndex];return t?.revision===e.revision&&t.chunkX===e.chunkX&&t.chunkY===e.chunkY&&t.chunkZ===e.chunkZ}getChunkCoordinateAt(e,t,n){return{chunkX:Math.floor(e/this.chunkSize),chunkY:Math.floor(t/this.chunkSize),chunkZ:Math.floor(n/this.chunkSize)}}isCurrentCenter(e){return this.centerChunkX===e.chunkX&&this.centerChunkY===e.chunkY&&this.centerChunkZ===e.chunkZ}assignWindowVolumes(e){let t=[];for(let n=0;n<this.slotCount;n+=1){let r=this.getWindowCoordinate(n,e),i=this.assignVolumeIfChanged(r);i&&t.push(i)}return t}getWindowCoordinate(e,t){let n=Math.floor(e/this.chunksPerLayer),r=e%this.chunksPerLayer,i=Math.floor(r/this.chunksPerSide),a=r%this.chunksPerSide;return{chunkX:t.chunkX+a-this.radius,chunkY:t.chunkY+n-this.radius,chunkZ:t.chunkZ+i-this.radius}}assignVolumeIfChanged(e){let t=Po(e,this.chunksPerSide),n=this.assignedVolumes[t];if(!(!n||Mo(n,e)))return n.revision+=1,n.chunkX=e.chunkX,n.chunkY=e.chunkY,n.chunkZ=e.chunkZ,No({slotIndex:t,revision:n.revision,coordinate:e,chunkSize:this.chunkSize})}};function jo(e){return Array.from({length:e},()=>({revision:0,chunkX:void 0,chunkY:void 0,chunkZ:void 0}))}function Mo(e,t){return e.chunkX===t.chunkX&&e.chunkY===t.chunkY&&e.chunkZ===t.chunkZ}function No({slotIndex:e,revision:t,coordinate:n,chunkSize:r}){return{slotIndex:e,revision:t,...n,originX:n.chunkX*r,originY:n.chunkY*r,originZ:n.chunkZ*r}}function Po(e,t){let n=Fo(e.chunkX,t),r=Fo(e.chunkZ,t);return Fo(e.chunkY,t)*t**2+r*t+n}function Fo(e,t){return(e%t+t)%t}var Io=`/*
 * Purpose: Clip an Air Particle point primitive to a circular shape.
 * Context: Square particles use PointsMaterial unchanged and circles opt into this fragment work.
 * Responsibility: Discard only point fragments outside the requested circle.
 * Boundary: Color, opacity, animation, visibility, and material lifecycle stay elsewhere.
 */

void discardOutsideAirParticleCircle() {
  vec2 centerOffset = gl_PointCoord - vec2(0.5);
  if (dot(centerOffset, centerOffset) > 0.25) discard;
}
`,Lo=`/*
 * Purpose: Apply Air Particles movement and visibility in the vertex stage.
 * Context: Particles drift without CPU uploads and underground candidates remain invisible.
 * Responsibility: Offset visible points and move hidden points outside clip space.
 * Boundary: Surface classification, point size, color, shape, and lifecycle stay in TypeScript.
 */

uniform float airParticleTime;
uniform float airParticleHorizontalAmplitude;
uniform float airParticleVerticalAmplitude;
attribute float airParticleVisible;

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

vec4 getAirParticleClipPosition(vec4 visibleClipPosition) {
  if (airParticleVisible > 0.5) return visibleClipPosition;

  // Points below the sampled world surface remain in the fixed GPU buffer but
  // are moved beyond clip space before rasterization.
  return vec4(2.0, 2.0, 2.0, 1.0);
}
`,Ro={defaultShape:`square`,volumeChunkLevel:2,preloadLayerCount:1,surfaceClearanceMeters:.5,animationLoopSeconds:60},zo=`#include <common>`,Bo=`#include <begin_vertex>`,Vo=`#include <project_vertex>`,Ho=`#include <clipping_planes_fragment>`,Uo=`air-particle-material-v1`;function Wo({appearance:e,motion:t}){let n=e.shape??Ro.defaultShape,r={value:0},i={value:t.horizontalAmplitudeMeters},a={value:t.verticalAmplitudeMeters},o=new re({color:e.color,size:e.sizeMeters,sizeAttenuation:!0});return o.onBeforeCompile=e=>{e.uniforms.airParticleTime=r,e.uniforms.airParticleHorizontalAmplitude=i,e.uniforms.airParticleVerticalAmplitude=a,e.vertexShader=Go(e.vertexShader),e.fragmentShader=Ko(e.fragmentShader,n)},o.customProgramCacheKey=()=>`${Uo}:${n}`,{pointsMaterial:o,update:e=>{r.value=(r.value+e*t.speedMultiplier)%Ro.animationLoopSeconds}}}function Go(e){return e.replace(zo,`${zo}\n${Lo}`).replace(Bo,`${Bo}\ntransformed = animateAirParticle(transformed);`).replace(Vo,`${Vo}\ngl_Position = getAirParticleClipPosition(gl_Position);`)}function Ko(e,t){return t===`square`?e:e.replace(zo,`${zo}\n${Io}`).replace(Ho,`${Ho}\ndiscardOutsideAirParticleCircle();`)}var qo=3,Jo=4294967296;function Yo({parameters:e,chunkSize:t,chunkSlotCount:n,surfaceYAt:r}){let a=e.density.particlesPerChunk,o=a*qo,s=new Float32Array(o*n),c=new Float32Array(a*n),l=new U(s,qo),u=new U(c,1);l.setUsage(i),u.setUsage(i);let d=new bt;d.setAttribute(`position`,l),d.setAttribute(`airParticleVisible`,u);let f=Wo({appearance:e.appearance,motion:e.motion}),p=new A(d,f.pointsMaterial);return p.frustumCulled=!1,{points:p,material:f,particlesPerChunk:a,valuesPerChunk:o,chunkSize:t,surfaceYAt:r,renderedPositions:s,renderedVisibility:c,positionAttribute:l,visibilityAttribute:u}}function Xo(e,t){for(let n of t)$o(e,n)}function Zo(e,t){$o(e,t);let n=t.slotIndex*e.particlesPerChunk,r=n*qo;e.positionAttribute.addUpdateRange(r,e.valuesPerChunk),e.visibilityAttribute.addUpdateRange(n,e.particlesPerChunk),e.positionAttribute.needsUpdate=!0,e.visibilityAttribute.needsUpdate=!0}function Qo(e){e.points.geometry.dispose(),e.points.material.dispose()}function $o(e,t){let n={assignment:t,firstParticleIndex:t.slotIndex*e.particlesPerChunk};for(let t=0;t<e.particlesPerChunk;t+=1)es(e,n,t)}function es(e,t,n){let{assignment:r}=t,i=ts(r,n,0),a=ts(r,n,1),o=ts(r,n,2),s=t.firstParticleIndex+n,c=s*qo,l=r.originX+i*e.chunkSize,u=r.originY+a*e.chunkSize,d=r.originZ+o*e.chunkSize;e.renderedPositions[c]=l,e.renderedPositions[c+1]=u,e.renderedPositions[c+2]=d;let f=e.surfaceYAt?e.surfaceYAt(l,d)+Ro.surfaceClearanceMeters:-1/0;e.renderedVisibility[s]=Number(u>=f)}function ts(e,t,n){let r=Math.imul(e.chunkX,73856093);return r^=Math.imul(e.chunkZ,19349663),r^=Math.imul(e.chunkY,2971215073),r^=Math.imul(t+1,83492791),r^=Math.imul(n+1,1103515245),r=Math.imul(r^r>>>16,2246822519),r=Math.imul(r^r>>>13,3266489917),(r>>>0)/Jo}function ns(e){let t={currentStream:void 0};return{load:()=>rs(t,e),activate:()=>os(t,!0),update:n=>is(t,e,n),deactivate:()=>os(t,!1),unload:()=>ss(t,e.scene)}}function rs(e,t){let{viewpoint:n,scene:r}=t,i=cs(t),a=i.volumeWindow.update(n.worldPosition.x,n.worldPosition.y,n.worldPosition.z);Xo(i.particleCloud,a),i.particleCloud.points.visible=!1,r.add(i.particleCloud.points),e.currentStream=i}function is(e,{viewpoint:t,streamQueue:n},r){let i=e.currentStream;if(!i)return;i.particleCloud.material.update(r);let a=i.volumeWindow.update(t.worldPosition.x,t.worldPosition.y,t.worldPosition.z);for(let t of a){let r=as(e,i,t);r&&(n.enqueue(r)||Zo(i.particleCloud,t))}}function as(e,t,n){let r=t.slotJobKeys[n.slotIndex];if(r)return{key:r,isCurrent:()=>e.currentStream===t&&t.volumeWindow.isCurrent(n),runStep:()=>(Zo(t.particleCloud,n),!0)}}function os(e,t){let n=e.currentStream;n&&(n.particleCloud.points.visible=t)}function ss(e,t){let n=e.currentStream;n&&(e.currentStream=void 0,t.remove(n.particleCloud.points),Qo(n.particleCloud))}function cs({viewpoint:e,parameters:t,surfaceYAt:n}){let r=zt(Ro.volumeChunkLevel),i=Math.ceil(e.viewDistanceMeters/r)+Ro.preloadLayerCount,a=new Ao({level:Ro.volumeChunkLevel,radius:i});return{volumeWindow:a,particleCloud:Yo({parameters:t,chunkSize:r,chunkSlotCount:a.slotCount,surfaceYAt:n}),slotJobKeys:Array.from({length:a.slotCount},()=>({}))}}function ls(e){let t=new Map,n=new Map,r=e.clone();return us(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function us(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)us(e.children[r],t.children[r],n)}function ds(e,t,n){for(let r of e.passages){if(r.passageId!==t)continue;let e=n-r.atSeconds;if(!(e<0||e>=r.durationSeconds))return e/r.durationSeconds}}function fs(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var ps=class extends _t{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new ys(e)}),this.register(function(e){return new bs(e)}),this.register(function(e){return new ks(e)}),this.register(function(e){return new As(e)}),this.register(function(e){return new js(e)}),this.register(function(e){return new Ss(e)}),this.register(function(e){return new Cs(e)}),this.register(function(e){return new ws(e)}),this.register(function(e){return new Ts(e)}),this.register(function(e){return new vs(e)}),this.register(function(e){return new Es(e)}),this.register(function(e){return new xs(e)}),this.register(function(e){return new Os(e)}),this.register(function(e){return new Ds(e)}),this.register(function(e){return new gs(e)}),this.register(function(e){return new Ms(e,Y.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Ms(e,Y.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Ns(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Ie.extractUrlBase(e);a=Ie.resolveURL(t,this.path)}else a=Ie.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new M(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Ps){try{a[Y.KHR_BINARY_GLTF]=new Ls(e)}catch(e){r&&r(e);return}i=JSON.parse(a[Y.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new lc(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case Y.KHR_MATERIALS_UNLIT:a[t]=new _s;break;case Y.KHR_DRACO_MESH_COMPRESSION:a[t]=new Rs(i,this.dracoLoader);break;case Y.KHR_TEXTURE_TRANSFORM:a[t]=new zs;break;case Y.KHR_MESH_QUANTIZATION:a[t]=new Bs;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function ms(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function hs(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var Y={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},gs=class{constructor(e){this.parser=e,this.name=Y.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new H(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Me);let l=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new Xe(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new Ye(s),o.distance=l;break;case`spot`:o=new c(s),o.distance=l,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),tc(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},_s=class{constructor(){this.name=Y.KHR_MATERIALS_UNLIT}getMaterialType(){return nt}extendParams(e,t,n){let r=[];e.color=new H(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Me),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,a))}return Promise.all(r)}},vs=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=hs(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ys=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return hs(this.parser,e,this.name)===null?null:Nt}extendMaterialParams(e,t){let n=hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new vt(e,e)}return Promise.all(r)}},bs=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_DISPERSION}getMaterialType(e){return hs(this.parser,e,this.name)===null?null:Nt}extendMaterialParams(e,t){let n=hs(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},xs=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return hs(this.parser,e,this.name)===null?null:Nt}extendMaterialParams(e,t){let n=hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Ss=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_SHEEN}getMaterialType(e){return hs(this.parser,e,this.name)===null?null:Nt}extendMaterialParams(e,t){let n=hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new H(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Me)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,a)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Cs=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return hs(this.parser,e,this.name)===null?null:Nt}extendMaterialParams(e,t){let n=hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},ws=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_VOLUME}getMaterialType(e){return hs(this.parser,e,this.name)===null?null:Nt}extendMaterialParams(e,t){let n=hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new H().setRGB(i[0],i[1],i[2],Me),Promise.all(r)}},Ts=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_IOR}getMaterialType(e){return hs(this.parser,e,this.name)===null?null:Nt}extendMaterialParams(e,t){let n=hs(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},Es=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_SPECULAR}getMaterialType(e){return hs(this.parser,e,this.name)===null?null:Nt}extendMaterialParams(e,t){let n=hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new H().setRGB(i[0],i[1],i[2],Me),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,a)),Promise.all(r)}},Ds=class{constructor(e){this.parser=e,this.name=Y.EXT_MATERIALS_BUMP}getMaterialType(e){return hs(this.parser,e,this.name)===null?null:Nt}extendMaterialParams(e,t){let n=hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Os=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return hs(this.parser,e,this.name)===null?null:Nt}extendMaterialParams(e,t){let n=hs(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},ks=class{constructor(e){this.parser=e,this.name=Y.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},As=class{constructor(e){this.parser=e,this.name=Y.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},js=class{constructor(e){this.parser=e,this.name=Y.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Ms=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Ns=class{constructor(e){this.name=Y.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Ws.TRIANGLES&&e.mode!==Ws.TRIANGLE_STRIP&&e.mode!==Ws.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new B,n=new W,a=new _,s=new W(1,1,1),c=new xe(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new y(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);h.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Ps=`glTF`,Fs=12,Is={JSON:1313821514,BIN:5130562},Ls=class{constructor(e){this.name=Y.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Fs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ps)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Fs,i=new DataView(e,Fs),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Is.JSON){let r=new Uint8Array(e,Fs+a,t);this.content=n.decode(r)}else if(r===Is.BIN){let n=Fs+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Rs=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=Y.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=Ys[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=Ys[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Gs[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Me,n)})})}},zs=class{constructor(){this.name=Y.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},Bs=class{constructor(){this.name=Y.KHR_MESH_QUANTIZATION}},Vs=class extends T{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Hs=new _,Us=class extends Vs{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Hs.fromArray(i).normalize().toArray(i),i}},Ws={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ks={9728:fe,9729:it,9984:Dt,9985:Ke,9986:d,9987:mt},qs={33071:et,33648:At,10497:Et},Js={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ys={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Xs={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},Zs={CUBICSPLINE:void 0,LINEAR:Ce,STEP:we},Qs={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function $s(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new F({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function ec(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function tc(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function nc(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function rc(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function ic(e){let t,n=e.extensions&&e.extensions[Y.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+ac(n.attributes):e.indices+`:`+ac(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+ac(e.targets[n]);return t}function ac(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function oc(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function sc(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var cc=new B,lc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ms,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new b(this.options.manager):new ye(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new M(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return ec(i,a,r),tc(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Y.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Ie.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=Js[r.type],t=Gs[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new U(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=Js[r.type],o=Gs[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new E(f,u/s),t.cache.add(n,c)),p=new ut(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new U(f,a,d);if(r.sparse!==void 0){let t=Js.SCALAR,n=Gs[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new U(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Ks[n.magFilter]||1006,t.minFilter=Ks[n.minFilter]||1008,t.wrapS=qs[n.wrapS]||1e3,t.wrapT=qs[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new be(e);t.needsUpdate=!0,n(t)}),t.load(Ie.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),tc(e,a),e.userData.mimeType=a.mimeType||sc(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[Y.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[Y.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[Y.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,r=e.material,i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+r.uuid,t=this.cache.get(e);t||(t=new re,$e.prototype.copy.call(t,r),t.color.copy(r.color),t.map=r.map,t.sizeAttenuation=!1,this.cache.add(e,t)),r=t}else if(e.isLine){let e=`LineBasicMaterial:`+r.uuid,t=this.cache.get(e);t||(t=new n,$e.prototype.copy.call(t,r),t.color.copy(r.color),t.map=r.map,this.cache.add(e,t)),r=t}if(i||a||o){let e=`ClonedMaterial:`+r.uuid+`:`;i&&(e+=`derivative-tangents:`),a&&(e+=`vertex-colors:`),o&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=r.clone(),a&&(t.vertexColors=!0),o&&(t.flatShading=!0),i&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(r))),r=t}e.material=r}getMaterialType(){return F}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],o,s={},c=i.extensions||{},l=[];if(c[Y.KHR_MATERIALS_UNLIT]){let e=r[Y.KHR_MATERIALS_UNLIT];o=e.getMaterialType(),l.push(e.extendParams(s,i,t))}else{let n=i.pbrMetallicRoughness||{};if(s.color=new H(1,1,1),s.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;s.color.setRGB(e[0],e[1],e[2],Me),s.opacity=e[3]}n.baseColorTexture!==void 0&&l.push(t.assignTexture(s,`map`,n.baseColorTexture,a)),s.metalness=n.metallicFactor===void 0?1:n.metallicFactor,s.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(s,`metalnessMap`,n.metallicRoughnessTexture)),l.push(t.assignTexture(s,`roughnessMap`,n.metallicRoughnessTexture))),o=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,s)})))}i.doubleSided===!0&&(s.side=2);let u=i.alphaMode||Qs.OPAQUE;if(u===Qs.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,u===Qs.MASK&&(s.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&o!==nt&&(l.push(t.assignTexture(s,`normalMap`,i.normalTexture)),s.normalScale=new vt(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;s.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&o!==nt&&(l.push(t.assignTexture(s,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&o!==nt){let e=i.emissiveFactor;s.emissive=new H().setRGB(e[0],e[1],e[2],Me)}return i.emissiveTexture!==void 0&&o!==nt&&l.push(t.assignTexture(s,`emissiveMap`,i.emissiveTexture,a)),Promise.all(l).then(function(){let n=new o(s);return i.name&&(n.name=i.name),tc(n,i),t.associations.set(n,{materials:e}),i.extensions&&ec(r,n,i),n})}createUniqueName(e){let t=se.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[Y.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return dc(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=ic(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[Y.KHR_DRACO_MESH_COMPRESSION]?i(o):dc(new bt,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?$s(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===Ws.TRIANGLES||u.mode===Ws.TRIANGLE_STRIP||u.mode===Ws.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new ee(l,f):new G(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===Ws.TRIANGLE_STRIP?d.geometry=fs(d.geometry,1):u.mode===Ws.TRIANGLE_FAN&&(d.geometry=fs(d.geometry,2));else if(u.mode===Ws.LINES)d=new yt(l,f);else if(u.mode===Ws.LINE_STRIP)d=new N(l,f);else if(u.mode===Ws.LINE_LOOP)d=new ze(l,f);else if(u.mode===Ws.POINTS)d=new A(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&rc(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),tc(d,i),u.extensions&&ec(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&ec(r,c[0],i),c[0];let l=new Pt;i.extensions&&ec(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new ae(K.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new p(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),tc(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new B;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new C(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new ft(i,void 0,l);return tc(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,cc)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new W().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new at:t.length>1?new Pt:t.length===1?t[0]:new h,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),tc(o,i),i.extensions&&ec(n,o,i),i.matrix!==void 0){let e=new B;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new Pt;n.name&&(i.name=r.createUniqueName(n.name)),tc(i,n),n.extensions&&ec(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(ls(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof $e||e instanceof be)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Xs[i.path]===Xs.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Xs[i.path]){case Xs.weights:l=he;break;case Xs.rotation:l=w;break;case Xs.translation:case Xs.scale:l=Ge;break;default:switch(n.itemSize){case 1:l=he;break;default:l=Ge}}let u=r.interpolation===void 0?Ce:Zs[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Xs[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=oc(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof w?Us:Vs)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function uc(e,t,n){let r=t.attributes,i=new ht;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new W(t[0],t[1],t[2]),new W(a[0],a[1],a[2])),e.normalized){let t=oc(Gs[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new W,t=new W;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=oc(Gs[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new le;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function dc(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=Ys[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return V.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${V.workingColorSpace}" not supported.`),tc(e,t),uc(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:nc(e,t.targets,n)})}async function fc(e){mc(e);let t=new ps,n=[...new Set(e.map(({url:e})=>e))],r=await Promise.all(n.map(async e=>[e,await t.loadAsync(e)])),i=new Map(r);return new Map(e.map(({id:e,url:t})=>{let n=i.get(t);if(!n)throw Error(`GLTF asset did not load: ${t}`);return[e,n]}))}function pc(e){let t=new Set,n=new Set,r=new Set,i=new Set([...e.values()].map(({scene:e})=>e));for(let e of i)e.traverse(e=>{if(!(e instanceof G))return;t.add(e.geometry);let i=Array.isArray(e.material)?e.material:[e.material];for(let e of i)hc(e,n,r);e instanceof ee&&e.skeleton.dispose()});for(let e of t)e.dispose();for(let e of n)e.dispose();for(let e of r)e.dispose()}function mc(e){let t=new Set;for(let{id:n}of e){if(t.has(n))throw Error(`Duplicate GLTF asset id: ${n}`);t.add(n)}}function hc(e,t,n){t.add(e);for(let t of Object.values(e))t instanceof be&&n.add(t)}function gc(e,t){let n=e,r=e.transparent||e.alphaTest>0;return new nt({name:`${e.name||`gltf-material`}-unlit`,color:t??n.color?.getHex()??16777215,map:t===void 0?n.map??null:null,alphaMap:n.alphaMap??null,alphaTest:r?Math.max(e.alphaTest,.5):0,side:e.side,vertexColors:e.vertexColors,transparent:!1,depthWrite:!0})}var _c=new W(-.0013108253479003906,0,-.00017023086547851562).normalize(),vc=[{passageId:`bat`,modelUrl:`/becoming-many-making-of/p/v3-finetuning/passages/bat.glb`,routeUrl:`/becoming-many-making-of/p/v3-finetuning/passages/bat-route.glb`,wingspanMeters:.7,routeDurationSeconds:10.416667,approachDurationSeconds:0,approachPoints:[],exitDurationSeconds:6,routeScaleToMeters:2,routeRotation:new _().setFromUnitVectors(_c,new W(0,0,-1)),routeStart:new W(3.285576581954956,1.0420538187026978,2.665073871612549),modelForward:new W(1,0,0),modelRollOffsetRadians:-Math.PI/2,flapClipName:`Armature.001Action`,flapTimeScale:1,groundClearanceMeters:.45,frameYaw:{kind:`viewHeading`}}],yc={passageId:`mosquitoes`,routeUrl:`/becoming-many-making-of/p/v3-finetuning/passages/mosquito-route.glb`,durationSeconds:15,routeScaleToMeters:1,axisStretch:new W(1.5,1.5,.5),routeStart:new W(2,0,2),pointCount:220,cloudRadiusMeters:1.6,cloudHeightMeters:.7,groundClearanceMeters:.8},bc=Uint8Array,xc=Uint16Array,Sc=Int32Array,Cc=new bc([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),wc=new bc([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Tc=new bc([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ec=function(e,t){for(var n=new xc(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Sc(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},Dc=Ec(Cc,2),Oc=Dc.b,kc=Dc.r;Oc[28]=258,kc[258]=28;var Ac=Ec(wc,0),jc=Ac.b;Ac.r;for(var Mc=new xc(32768),Nc=0;Nc<32768;++Nc){var Pc=(Nc&43690)>>1|(Nc&21845)<<1;Pc=(Pc&52428)>>2|(Pc&13107)<<2,Pc=(Pc&61680)>>4|(Pc&3855)<<4,Mc[Nc]=((Pc&65280)>>8|(Pc&255)<<8)>>1}for(var Fc=(function(e,t,n){for(var r=e.length,i=0,a=new xc(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new xc(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new xc(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[Mc[d]>>c]=l}else for(s=new xc(r),i=0;i<r;++i)e[i]&&(s[i]=Mc[o[e[i]-1]++]>>15-e[i]);return s}),Ic=new bc(288),Nc=0;Nc<144;++Nc)Ic[Nc]=8;for(var Nc=144;Nc<256;++Nc)Ic[Nc]=9;for(var Nc=256;Nc<280;++Nc)Ic[Nc]=7;for(var Nc=280;Nc<288;++Nc)Ic[Nc]=8;for(var Lc=new bc(32),Nc=0;Nc<32;++Nc)Lc[Nc]=5;var Rc=Fc(Ic,9,1),zc=Fc(Lc,5,1),Bc=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Vc=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},Hc=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Uc=function(e){return(e+7)/8|0},Wc=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new bc(e.subarray(t,n))},Gc=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],Kc=function(e,t,n){var r=Error(t||Gc[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Kc),!n)throw r;return r},qc=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new bc(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new bc(i*3));var l=function(e){var t=n.length;if(e>t){var r=new bc(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=Vc(e,d,1);var v=Vc(e,d+1,3);if(d+=3,!v){var y=Uc(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&Kc(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}if(v==1)p=Rc,m=zc,h=9,g=5;else if(v==2){var S=Vc(e,d,31)+257,C=Vc(e,d+10,15)+4,w=S+Vc(e,d+5,31)+1;d+=14;for(var T=new bc(w),E=new bc(19),D=0;D<C;++D)E[Tc[D]]=Vc(e,d+D*3,7);d+=C*3;for(var O=Bc(E),ee=(1<<O)-1,k=Fc(E,O,1),D=0;D<w;){var te=k[Vc(e,d,ee)];d+=te&15;var y=te>>4;if(y<16)T[D++]=y;else{var A=0,ne=0;for(y==16?(ne=3+Vc(e,d,3),d+=2,A=T[D-1]):y==17?(ne=3+Vc(e,d,7),d+=3):y==18&&(ne=11+Vc(e,d,127),d+=7);ne--;)T[D++]=A}}var j=T.subarray(0,S),re=T.subarray(S);h=Bc(j),g=Bc(re),p=Fc(j,h,1),m=Fc(re,g,1)}else Kc(1);if(d>_){c&&Kc(0);break}}s&&l(f+131072);for(var ie=(1<<h)-1,ae=(1<<g)-1,M=d;;M=d){var A=p[Hc(e,d)&ie],oe=A>>4;if(d+=A&15,d>_){c&&Kc(0);break}if(A||Kc(2),oe<256)n[f++]=oe;else if(oe==256){M=d,p=null;break}else{var se=oe-254;if(oe>264){var D=oe-257,N=Cc[D];se=Vc(e,d,(1<<N)-1)+Oc[D],d+=N}var ce=m[Hc(e,d)&ae],le=ce>>4;ce||Kc(3),d+=ce&15;var re=jc[le];if(le>3){var N=wc[le];re+=Hc(e,d)&(1<<N)-1,d+=N}if(d>_){c&&Kc(0);break}s&&l(f+131072);var ue=f+se;if(f<re){var de=a-re,fe=Math.min(re,ue);for(de+f<0&&Kc(3);f<fe;++f)n[f]=r[de+f]}for(;f<ue;++f)n[f]=n[f-re]}}t.l=p,t.p=M,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?Wc(n,0,f):n.subarray(0,f)},Jc=new bc(0),Yc=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&Kc(6,`invalid zlib data`),(e[1]>>5&1)==+!t&&Kc(6,`invalid zlib data: `+(e[1]&32?`need`:`unexpected`)+` dictionary`),(e[1]>>3&4)+2};function Xc(e,t){return qc(e.subarray(Yc(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var Zc=typeof TextDecoder<`u`&&new TextDecoder;try{Zc.decode(Jc,{stream:!0})}catch{}function Qc(e,t,n){let r=n.length-e-1;if(t>=n[r])return r-1;if(t<=n[e])return e;let i=e,a=r,o=Math.floor((i+a)/2);for(;t<n[o]||t>=n[o+1];)t<n[o]?a=o:i=o,o=Math.floor((i+a)/2);return o}function $c(e,t,n,r){let i=[],a=[],o=[];i[0]=1;for(let s=1;s<=n;++s){a[s]=t-r[e+1-s],o[s]=r[e+s]-t;let n=0;for(let e=0;e<s;++e){let t=o[e+1],r=a[s-e],c=i[e]/(t+r);i[e]=n+t*c,n=r*c}i[s]=n}return i}function el(e,t,n,r){let i=Qc(e,r,t),a=$c(i,r,e,t),o=new pt(0,0,0,0);for(let t=0;t<=e;++t){let r=n[i-e+t],s=a[t],c=r.w*s;o.x+=r.x*c,o.y+=r.y*c,o.z+=r.z*c,o.w+=r.w*s}return o}function tl(e,t,n,r,i){let a=[];for(let e=0;e<=n;++e)a[e]=0;let o=[];for(let e=0;e<=r;++e)o[e]=a.slice(0);let s=[];for(let e=0;e<=n;++e)s[e]=a.slice(0);s[0][0]=1;let c=a.slice(0),l=a.slice(0);for(let r=1;r<=n;++r){c[r]=t-i[e+1-r],l[r]=i[e+r]-t;let n=0;for(let e=0;e<r;++e){let t=l[e+1],i=c[r-e];s[r][e]=t+i;let a=s[e][r-1]/s[r][e];s[e][r]=n+t*a,n=i*a}s[r][r]=n}for(let e=0;e<=n;++e)o[0][e]=s[e][n];for(let e=0;e<=n;++e){let t=0,i=1,c=[];for(let e=0;e<=n;++e)c[e]=a.slice(0);c[0][0]=1;for(let a=1;a<=r;++a){let r=0,l=e-a,u=n-a;e>=a&&(c[i][0]=c[t][0]/s[u+1][l],r=c[i][0]*s[l][u]);let d=l>=-1?1:-l,f=e-1<=u?a-1:n-e;for(let e=d;e<=f;++e)c[i][e]=(c[t][e]-c[t][e-1])/s[u+1][l+e],r+=c[i][e]*s[l+e][u];e<=u&&(c[i][a]=-c[t][a-1]/s[u+1][e],r+=c[i][a]*s[e][u]),o[a][e]=r;let p=t;t=i,i=p}}let u=n;for(let e=1;e<=r;++e){for(let t=0;t<=n;++t)o[e][t]*=u;u*=n-e}return o}function nl(e,t,n,r,i){let a=i<e?i:e,o=[],s=Qc(e,r,t),c=tl(s,r,e,a,t),l=[];for(let e=0;e<n.length;++e){let t=n[e].clone(),r=t.w;t.x*=r,t.y*=r,t.z*=r,l[e]=t}for(let t=0;t<=a;++t){let n=l[s-e].clone().multiplyScalar(c[t][0]);for(let r=1;r<=e;++r)n.add(l[s-e+r].clone().multiplyScalar(c[t][r]));o[t]=n}for(let e=a+1;e<=i+1;++e)o[e]=new pt(0,0,0);return o}function rl(e,t){let n=1;for(let t=2;t<=e;++t)n*=t;let r=1;for(let e=2;e<=t;++e)r*=e;for(let n=2;n<=e-t;++n)r*=n;return n/r}function il(e){let t=e.length,n=[],r=[];for(let i=0;i<t;++i){let t=e[i];n[i]=new W(t.x,t.y,t.z),r[i]=t.w}let i=[];for(let e=0;e<t;++e){let t=n[e].clone();for(let n=1;n<=e;++n)t.sub(i[e-n].clone().multiplyScalar(rl(e,n)*r[n]));i[e]=t.divideScalar(r[0])}return i}function al(e,t,n,r,i){return il(nl(e,t,n,r,i))}var ol=class extends Ot{constructor(e,t,n,r,i){super();let a=t?t.length-1:0,o=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=i||a;for(let e=0;e<o;++e){let t=n[e];this.controlPoints[e]=new pt(t.x,t.y,t.z,t.w)}}getPoint(e,t=new W){let n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),i=el(this.degree,this.knots,this.controlPoints,r);return i.w!==1&&i.divideScalar(i.w),n.set(i.x,i.y,i.z)}getTangent(e,t=new W){let n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),i=al(this.degree,this.knots,this.controlPoints,r,1);return n.copy(i[1]).normalize(),n}toJSON(){let e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(e=>e.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(e=>new pt(e[0],e[1],e[2],e[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}},X,sl,cl,ll=class extends _t{constructor(e){super(e)}load(e,t,n,r){let i=this,a=i.path===``?Ie.extractUrlBase(e):i.path,o=new M(this.manager);o.setPath(i.path),o.setResponseType(`arraybuffer`),o.setRequestHeader(i.requestHeader),o.setWithCredentials(i.withCredentials),o.load(e,function(n){try{t(i.parse(n,a))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e,t){if(_l(e))X=new ml().parse(e);else{let t=Ol(e);if(!vl(t))throw Error(`THREE.FBXLoader: Unknown format.`);if(yl(t)<7e3)throw Error(`THREE.FBXLoader: FBX version not supported, FileVersion: `+yl(t));X=new pl().parse(t)}return new ul(new b(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin),this.manager).parse(X)}},ul=class{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){sl=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),i=new dl().parse(r);return this.parseScene(r,i,n),cl}parseConnections(){let e=new Map;return`Connections`in X&&X.Connections.connections.forEach(function(t){let n=t[0],r=t[1],i=t[2];e.has(n)||e.set(n,{parents:[],children:[]});let a={ID:r,relationship:i};e.get(n).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});let o={ID:n,relationship:i};e.get(r).children.push(o)}),e}parseImages(){let e={},t={};if(`Video`in X.Objects){let n=X.Objects.Video;for(let r in n){let i=n[r],a=parseInt(r);if(e[a]=i.RelativeFilename||i.Filename,`Content`in i){let e=i.Content instanceof ArrayBuffer&&i.Content.byteLength>0,a=typeof i.Content==`string`&&i.Content!==``;if(e||a){let e=this.parseImage(n[r]);t[i.RelativeFilename||i.Filename]=e}}}}for(let n in e){let r=e[n];e[n]=t[r]===void 0?e[n].split(`\\`).pop():t[r]}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(`.`)+1).toLowerCase(),i;switch(r){case`bmp`:i=`image/bmp`;break;case`jpg`:case`jpeg`:i=`image/jpeg`;break;case`png`:i=`image/png`;break;case`tif`:i=`image/tiff`;break;case`tga`:this.manager.getHandler(`.tga`)===null&&console.warn(`FBXLoader: TGA loader not found, skipping `,n),i=`image/tga`;break;case`webp`:i=`image/webp`;break;default:console.warn(`FBXLoader: Image type "`+r+`" is not supported.`);return}if(typeof t==`string`)return`data:`+i+`;base64,`+t;{let e=new Uint8Array(t);return window.URL.createObjectURL(new Blob([e],{type:i}))}}parseTextures(e){let t=new Map;if(`Texture`in X.Objects){let n=X.Objects.Texture;for(let r in n){let i=this.parseTexture(n[r],e);t.set(parseInt(r),i)}}return t}parseTexture(e,t){let n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;let r=e.WrapModeU,i=e.WrapModeV,a=r===void 0?0:r.value,o=i===void 0?0:i.value;if(n.wrapS=a===0?Et:et,n.wrapT=o===0?Et:et,`Scaling`in e){let t=e.Scaling.value;n.repeat.x=t[0],n.repeat.y=t[1]}if(`Translation`in e){let t=e.Translation.value;n.offset.x=t[0],n.offset.y=t[1]}return n}loadTexture(e,t){let n=e.FileName.split(`.`).pop().toLowerCase(),r=this.manager.getHandler(`.${n}`);r===null&&(r=this.textureLoader);let i=r.path;i||r.setPath(this.textureLoader.path);let a=sl.get(e.id).children,o;if(a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(o=t[a[0].ID],(o.indexOf(`blob:`)===0||o.indexOf(`data:`)===0)&&r.setPath(void 0)),o===void 0)return console.warn(`FBXLoader: Undefined filename, creating placeholder texture.`),new be;let s=r.load(o);return r.setPath(i),s}parseMaterials(e){let t=new Map;if(`Material`in X.Objects){let n=X.Objects.Material;for(let r in n){let i=this.parseMaterial(n[r],e);i!==null&&t.set(parseInt(r),i)}}return t}parseMaterial(e,t){let n=e.id,r=e.attrName,i=e.ShadingModel;if(typeof i==`object`&&(i=i.value),!sl.has(n))return null;let a=this.parseParameters(e,t,n),o;switch(i.toLowerCase()){case`phong`:o=new wt;break;case`lambert`:o=new ke;break;default:console.warn(`THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.`,i),o=new wt}return o.setValues(a),o.name=r,o}parseParameters(e,t,n){let r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=V.colorSpaceToWorking(new H().fromArray(e.Diffuse.value),a):e.DiffuseColor&&(e.DiffuseColor.type===`Color`||e.DiffuseColor.type===`ColorRGB`)&&(r.color=V.colorSpaceToWorking(new H().fromArray(e.DiffuseColor.value),a)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=V.colorSpaceToWorking(new H().fromArray(e.Emissive.value),a):e.EmissiveColor&&(e.EmissiveColor.type===`Color`||e.EmissiveColor.type===`ColorRGB`)&&(r.emissive=V.colorSpaceToWorking(new H().fromArray(e.EmissiveColor.value),a)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),r.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(r.opacity===1||r.opacity===0)&&(r.opacity=e.Opacity?parseFloat(e.Opacity.value):null,r.opacity===null&&(r.opacity=1)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=V.colorSpaceToWorking(new H().fromArray(e.Specular.value),a):e.SpecularColor&&e.SpecularColor.type===`Color`&&(r.specular=V.colorSpaceToWorking(new H().fromArray(e.SpecularColor.value),a));let i=this;return sl.get(n).children.forEach(function(e){let n=e.relationship;switch(n){case`Bump`:r.bumpMap=i.getTexture(t,e.ID);break;case`Maya|TEX_ao_map`:r.aoMap=i.getTexture(t,e.ID);break;case`DiffuseColor`:case`Maya|TEX_color_map`:r.map=i.getTexture(t,e.ID),r.map!==void 0&&(r.map.colorSpace=a);break;case`DisplacementColor`:r.displacementMap=i.getTexture(t,e.ID);break;case`EmissiveColor`:r.emissiveMap=i.getTexture(t,e.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=a);break;case`NormalMap`:case`Maya|TEX_normal_map`:r.normalMap=i.getTexture(t,e.ID);break;case`ReflectionColor`:r.envMap=i.getTexture(t,e.ID),r.envMap!==void 0&&(r.envMap.mapping=303,r.envMap.colorSpace=a);break;case`SpecularColor`:r.specularMap=i.getTexture(t,e.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=a);break;case`TransparentColor`:case`TransparencyFactor`:r.alphaMap=i.getTexture(t,e.ID),r.transparent=!0;break;default:console.warn(`THREE.FBXLoader: %s map is not supported in three.js, skipping texture.`,n)}}),r}getTexture(e,t){return`LayeredTexture`in X.Objects&&t in X.Objects.LayeredTexture&&(console.warn(`THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.`),t=sl.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if(`Deformer`in X.Objects){let n=X.Objects.Deformer;for(let r in n){let i=n[r],a=sl.get(parseInt(r));if(i.attrType===`Skin`){let t=this.parseSkeleton(a,n);t.ID=r,a.parents.length>1&&console.warn(`THREE.FBXLoader: skeleton attached to more than one geometry is not supported.`),t.geometryID=a.parents[0].ID,e[r]=t}else if(i.attrType===`BlendShape`){let e={id:r};e.rawTargets=this.parseMorphTargets(a,n),e.id=r,a.parents.length>1&&console.warn(`THREE.FBXLoader: morph target attached to more than one geometry is not supported.`),t[r]=e}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(e){let r=t[e.ID];if(r.attrType!==`Cluster`)return;let i={ID:e.ID,indices:[],weights:[],transformLink:new B().fromArray(r.TransformLink.a)};`Indexes`in r&&(i.indices=r.Indexes.a,i.weights=r.Weights.a),n.push(i)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let r=0;r<e.children.length;r++){let i=e.children[r],a=t[i.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!==`BlendShapeChannel`)return;o.geoID=sl.get(parseInt(i.ID)).children.filter(function(e){return e.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){cl=new Pt;let r=this.parseModels(e.skeletons,t,n),i=X.Objects.Model,a=this;r.forEach(function(e){let t=i[e.ID];a.setLookAtProperties(e,t),sl.get(e.ID).parents.forEach(function(t){let n=r.get(t.ID);n!==void 0&&n.add(e)}),e.parent===null&&cl.add(e)}),this.addGlobalSceneSettings(),cl.traverse(function(e){if(e.userData.transformData){e.parent&&(e.userData.transformData.parentMatrix=e.parent.matrix,e.userData.transformData.parentMatrixWorld=e.parent.matrixWorld);let t=Tl(e.userData.transformData);e.applyMatrix4(t),e.updateWorldMatrix()}});let o=this.parsePoseNodes(),s=new Set;for(let t in e.skeletons)e.skeletons[t].rawBones.forEach(function(n,r){let i=e.skeletons[t].bones[r];i&&s.add(i.ID)});let c=new B;cl.traverse(function(e){if(e.isBone&&e.ID!==void 0&&!s.has(e.ID)){let t=o[e.ID];t!==void 0&&(e.parent?(c.copy(e.parent.matrixWorld).invert(),c.multiply(t)):c.copy(t),c.decompose(e.position,e.quaternion,e.scale),e.updateMatrix(),e.matrixWorld.copy(t))}}),this.bindSkeleton(e.skeletons,t,r);let l=new fl().parse();cl.children.length===1&&cl.children[0].isGroup&&(cl.children[0].animations=l,cl=cl.children[0]),cl.animations=l,`GlobalSettings`in X&&`UpAxis`in X.GlobalSettings&&X.GlobalSettings.UpAxis.value===2&&(console.warn(`THREE.FBXLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted.`),cl.rotation.set(-Math.PI/2,0,0))}parseModels(e,t,n){let r=new Map,i=X.Objects.Model;for(let a in i){let o=parseInt(a),s=i[a],c=sl.get(o),l=this.buildSkeleton(c,e,o,s.attrName);if(!l){switch(s.attrType){case`Camera`:l=this.createCamera(c);break;case`Light`:l=this.createLight(c);break;case`Mesh`:l=this.createMesh(c,t,n);break;case`NurbsCurve`:l=this.createCurve(c,t);break;case`LimbNode`:case`Root`:l=new at;break;default:l=new Pt}l.name=s.attrName?se.sanitizeNodeName(s.attrName):``,l.userData.originalName=s.attrName,l.ID=o}this.getTransformData(l,s),r.set(o,l)}return r}buildSkeleton(e,t,n,r){let i=null;return e.parents.forEach(function(e){for(let a in t){let o=t[a];o.rawBones.forEach(function(t,a){if(t.ID===e.ID){let e=i;i=new at,i.matrixWorld.copy(t.transformLink),i.name=r?se.sanitizeNodeName(r):``,i.userData.originalName=r,i.ID=n,o.bones[a]=i,e!==null&&i.add(e)}})}}),i}createCamera(e){let t,n;if(e.children.forEach(function(e){let t=X.Objects.NodeAttribute[e.ID];t!==void 0&&(n=t)}),n===void 0)t=new h;else{let e=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(e=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let i=1e3;n.FarPlane!==void 0&&(i=n.FarPlane.value/1e3);let a=window.innerWidth,o=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,o=n.AspectHeight.value);let s=a/o,c=45;n.FieldOfView!==void 0&&(c=n.FieldOfView.value);let l=n.FocalLength?n.FocalLength.value:null;switch(e){case 0:t=new ae(c,s,r,i),l!==null&&t.setFocalLength(l);break;case 1:console.warn(`THREE.FBXLoader: Orthographic cameras not supported yet.`),t=new h;break;default:console.warn(`THREE.FBXLoader: Unknown camera type `+e+`.`),t=new h}}return t}createLight(e){let t,n;if(e.children.forEach(function(e){let t=X.Objects.NodeAttribute[e.ID];t!==void 0&&(n=t)}),n===void 0)t=new h;else{let e;e=n.LightType===void 0?0:n.LightType.value;let r=16777215;n.Color!==void 0&&(r=V.colorSpaceToWorking(new H().fromArray(n.Color.value),a));let i=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(i=0);let o=0;switch(n.FarAttenuationEnd!==void 0&&(o=n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?0:n.FarAttenuationEnd.value),e){case 0:t=new Ye(r,i,o,1);break;case 1:t=new Xe(r,i);break;case 2:let e=Math.PI/3,a=0;n.OuterAngle===void 0?n.InnerAngle!==void 0&&(e=K.degToRad(n.InnerAngle.value)):(e=K.degToRad(n.OuterAngle.value),n.InnerAngle!==void 0&&(a=1-n.InnerAngle.value/n.OuterAngle.value,a=Math.max(0,a))),t=new c(r,i,o,e,a,1);break;default:console.warn(`THREE.FBXLoader: Unknown light type `+n.LightType.value+`, defaulting to a PointLight.`),t=new Ye(r,i)}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,i=null,a=null,o=[];if(e.children.forEach(function(e){t.has(e.ID)&&(i=t.get(e.ID)),n.has(e.ID)&&o.push(n.get(e.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new wt({name:_t.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),`color`in i.attributes&&o.forEach(function(e){e.vertexColors=!0}),i.groups.length>0){let e=!1;for(let t=0,n=i.groups.length;t<n;t++){let n=i.groups[t];(n.materialIndex<0||n.materialIndex>=o.length)&&(n.materialIndex=o.length,e=!0)}if(e){let e=new wt;o.push(e)}}return i.FBX_Deformer?(r=new ee(i,a),r.normalizeSkinWeights()):r=new G(i,a),r}createCurve(e,t){let r=e.children.reduce(function(e,n){return t.has(n.ID)&&(e=t.get(n.ID)),e},null),i=new n({name:_t.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new N(r,i)}getTransformData(e,t){let n={};`InheritType`in t&&(n.inheritType=parseInt(t.InheritType.value)),n.eulerOrder=`RotationOrder`in t?El(t.RotationOrder.value):El(0),`Lcl_Translation`in t&&(n.translation=t.Lcl_Translation.value),`PreRotation`in t&&(n.preRotation=t.PreRotation.value),`Lcl_Rotation`in t&&(n.rotation=t.Lcl_Rotation.value),`PostRotation`in t&&(n.postRotation=t.PostRotation.value),`Lcl_Scaling`in t&&(n.scale=t.Lcl_Scaling.value),`ScalingOffset`in t&&(n.scalingOffset=t.ScalingOffset.value),`ScalingPivot`in t&&(n.scalingPivot=t.ScalingPivot.value),`RotationOffset`in t&&(n.rotationOffset=t.RotationOffset.value),`RotationPivot`in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){`LookAtProperty`in t&&sl.get(e.ID).children.forEach(function(t){if(t.relationship===`LookAtProperty`){let n=X.Objects.Model[t.ID];if(`Lcl_Translation`in n){let t=n.Lcl_Translation.value;e.target===void 0?e.lookAt(new W().fromArray(t)):(e.target.position.fromArray(t),cl.add(e.target))}}})}bindSkeleton(e,t,n){for(let r in e){let i=e[r],a=[];for(let e=0,t=i.bones.length;e<t;e++){let t=new B;i.bones[e]&&i.rawBones[e]&&t.copy(i.rawBones[e].transformLink).invert(),a.push(t)}sl.get(parseInt(i.ID)).parents.forEach(function(e){if(t.has(e.ID)){let t=e.ID;sl.get(t).parents.forEach(function(e){if(n.has(e.ID)){let t=n.get(e.ID);t.updateMatrixWorld(!0),t.bind(new C(i.bones,a),t.matrixWorld)}})}})}}parsePoseNodes(){let e={};if(`Pose`in X.Objects){let t=X.Objects.Pose;for(let n in t)if(t[n].attrType===`BindPose`&&t[n].NbPoseNodes>0){let r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(t){e[t.Node]=new B().fromArray(t.Matrix.a)}):e[r.Node]=new B().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if(`GlobalSettings`in X){if(`AmbientColor`in X.GlobalSettings){let e=X.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){let e=new H().setRGB(t,n,r,a);cl.add(new rt(e,1))}}`UnitScaleFactor`in X.GlobalSettings&&(cl.userData.unitScaleFactor=X.GlobalSettings.UnitScaleFactor.value)}}},dl=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if(`Geometry`in X.Objects){let n=X.Objects.Geometry;for(let r in n){let i=sl.get(parseInt(r)),a=this.parseGeometry(i,n[r],e);t.set(parseInt(r),a)}}return this.negativeMaterialIndices===!0&&console.warn(`THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected.`),t}parseGeometry(e,t,n){switch(t.attrType){case`Mesh`:return this.parseMeshGeometry(e,t,n);case`NurbsCurve`:return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let r=n.skeletons,i=[],a=e.parents.map(function(e){return X.Objects.Model[e.ID]});if(a.length===0)return;let o=e.children.reduce(function(e,t){return r[t.ID]!==void 0&&(e=r[t.ID]),e},null);e.children.forEach(function(e){n.morphTargets[e.ID]!==void 0&&i.push(n.morphTargets[e.ID])});let s=a[0],c={};`RotationOrder`in s&&(c.eulerOrder=El(s.RotationOrder.value)),`InheritType`in s&&(c.inheritType=parseInt(s.InheritType.value)),`GeometricTranslation`in s&&(c.translation=s.GeometricTranslation.value),`GeometricRotation`in s&&(c.rotation=s.GeometricRotation.value),`GeometricScaling`in s&&(c.scale=s.GeometricScaling.value);let l=Tl(c);return this.genGeometry(t,o,i,l)}genGeometry(e,t,n,r){let i=new bt;e.attrName&&(i.name=e.attrName);let a=this.parseGeoNode(e,t),o=this.genBuffers(a),s=new g(o.vertex,3);if(s.applyMatrix4(r),i.setAttribute(`position`,s),o.colors.length>0&&i.setAttribute(`color`,new g(o.colors,3)),t&&(i.setAttribute(`skinIndex`,new Se(o.weightsIndices,4)),i.setAttribute(`skinWeight`,new g(o.vertexWeights,4)),i.FBX_Deformer=t),o.normal.length>0){let e=new L().getNormalMatrix(r),t=new g(o.normal,3);t.applyNormalMatrix(e),i.setAttribute(`normal`,t)}if(o.uvs.forEach(function(e,t){let n=t===0?`uv`:`uv${t}`;i.setAttribute(n,new g(o.uvs[t],2))}),a.material&&a.material.mappingType!==`AllSame`){let e=o.materialIndex[0],t=0;if(o.materialIndex.forEach(function(n,r){n!==e&&(i.addGroup(t,r-t,e),e=n,t=r)}),i.groups.length>0){let t=i.groups[i.groups.length-1],n=t.start+t.count;n!==o.materialIndex.length&&i.addGroup(n,o.materialIndex.length-n,e)}i.groups.length===0&&i.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(i,e,n,r),i}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices===void 0?[]:e.Vertices.a,n.vertexIndices=e.PolygonVertexIndex===void 0?[]:e.PolygonVertexIndex.a,e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let t=0;for(;e.LayerElementUV[t];)e.LayerElementUV[t].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[t])),t++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(e,t){e.indices.forEach(function(r,i){n.weightTable[r]===void 0&&(n.weightTable[r]=[]),n.weightTable[r].push({id:t,weight:e.weights[i]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,r=0,i=!1,a=[],o=[],s=[],c=[],l=[],u=[],d=this;return e.vertexIndices.forEach(function(f,p){let m,h=!1;f<0&&(f^=-1,h=!0);let g=[],_=[];if(a.push(f*3,f*3+1,f*3+2),e.color){let t=Sl(p,n,f,e.color);s.push(t[0],t[1],t[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(e){_.push(e.weight),g.push(e.id)}),_.length>4){i||=(console.warn(`THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.`),!0);let e=[0,0,0,0],t=[0,0,0,0];_.forEach(function(n,r){let i=n,a=g[r];t.forEach(function(t,n,r){if(i>t){r[n]=i,i=t;let o=e[n];e[n]=a,a=o}})}),g=e,_=t}for(;_.length<4;)_.push(0),g.push(0);for(let e=0;e<4;++e)l.push(_[e]),u.push(g[e])}if(e.normal){let t=Sl(p,n,f,e.normal);o.push(t[0],t[1],t[2])}e.material&&e.material.mappingType!==`AllSame`&&(m=Sl(p,n,f,e.material)[0],m<0&&(d.negativeMaterialIndices=!0,m=0)),e.uv&&e.uv.forEach(function(e,t){let r=Sl(p,n,f,e);c[t]===void 0&&(c[t]=[]),c[t].push(r[0]),c[t].push(r[1])}),r++,h&&(d.genFace(t,e,a,m,o,s,c,l,u,r),n++,r=0,a=[],o=[],s=[],c=[],l=[],u=[])}),t}getNormalNewell(e){let t=new W(0,0,0);for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t.x+=(r.y-i.y)*(r.z+i.z),t.y+=(r.z-i.z)*(r.x+i.x),t.z+=(r.x-i.x)*(r.y+i.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),n=(Math.abs(t.z)>.5?new W(0,1,0):new W(0,0,1)).cross(t).normalize();return{normal:t,tangent:n,bitangent:t.clone().cross(n).normalize()}}flattenVertex(e,t,n){return new vt(e.dot(t),e.dot(n))}genFace(e,t,n,r,i,a,o,s,c,l){let u;if(l>3){let e=[],r=t.baseVertexPositions||t.vertexPositions;for(let t=0;t<n.length;t+=3)e.push(new W(r[n[t]],r[n[t+1]],r[n[t+2]]));let{tangent:i,bitangent:a}=this.getNormalTangentAndBitangent(e),o=[];for(let t of e)o.push(this.flattenVertex(t,i,a));u=oe.triangulateShape(o,[])}else u=[[0,1,2]];for(let[l,d,f]of u)e.vertex.push(t.vertexPositions[n[l*3]]),e.vertex.push(t.vertexPositions[n[l*3+1]]),e.vertex.push(t.vertexPositions[n[l*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),t.skeleton&&(e.vertexWeights.push(s[l*4]),e.vertexWeights.push(s[l*4+1]),e.vertexWeights.push(s[l*4+2]),e.vertexWeights.push(s[l*4+3]),e.vertexWeights.push(s[d*4]),e.vertexWeights.push(s[d*4+1]),e.vertexWeights.push(s[d*4+2]),e.vertexWeights.push(s[d*4+3]),e.vertexWeights.push(s[f*4]),e.vertexWeights.push(s[f*4+1]),e.vertexWeights.push(s[f*4+2]),e.vertexWeights.push(s[f*4+3]),e.weightsIndices.push(c[l*4]),e.weightsIndices.push(c[l*4+1]),e.weightsIndices.push(c[l*4+2]),e.weightsIndices.push(c[l*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3])),t.color&&(e.colors.push(a[l*3]),e.colors.push(a[l*3+1]),e.colors.push(a[l*3+2]),e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[f*3]),e.colors.push(a[f*3+1]),e.colors.push(a[f*3+2])),t.material&&t.material.mappingType!==`AllSame`&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(i[l*3]),e.normal.push(i[l*3+1]),e.normal.push(i[l*3+2]),e.normal.push(i[d*3]),e.normal.push(i[d*3+1]),e.normal.push(i[d*3+2]),e.normal.push(i[f*3]),e.normal.push(i[f*3+1]),e.normal.push(i[f*3+2])),t.uv&&t.uv.forEach(function(t,n){e.uvs[n]===void 0&&(e.uvs[n]=[]),e.uvs[n].push(o[n][l*2]),e.uvs[n].push(o[n][l*2+1]),e.uvs[n].push(o[n][d*2]),e.uvs[n].push(o[n][d*2+1]),e.uvs[n].push(o[n][f*2]),e.uvs[n].push(o[n][f*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let i=r.clone().setPosition(0,0,0),a=this;n.forEach(function(n){n.rawTargets.forEach(function(n){let r=X.Objects.Geometry[n.geoID];r!==void 0&&a.genMorphGeometry(e,t,r,i,n.name)})})}genMorphGeometry(e,t,n,r,i){let a=t.Vertices===void 0?[]:t.Vertices.a,o=t.PolygonVertexIndex===void 0?[]:t.PolygonVertexIndex.a,s=n.Vertices===void 0?[]:n.Vertices.a,c=n.Indexes===void 0?[]:n.Indexes.a,l=e.attributes.position.count*3,u=new Float32Array(l);for(let e=0;e<c.length;e++){let t=c[e]*3;u[t]=s[e*3],u[t+1]=s[e*3+1],u[t+2]=s[e*3+2]}let d={vertexIndices:o,vertexPositions:u,baseVertexPositions:a},f=this.genBuffers(d),p=new g(f.vertex,3);p.name=i||n.attrName,p.applyMatrix4(r),e.morphAttributes.position.push(p)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a,i=[];return n===`IndexToDirect`&&(`NormalIndex`in e?i=e.NormalIndex.a:`NormalsIndex`in e&&(i=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:i,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a,i=[];return n===`IndexToDirect`&&(i=e.UVIndex.a),{dataSize:2,buffer:r,indices:i,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a,i=[];n===`IndexToDirect`&&(i=e.ColorIndex.a);for(let e=0,t=new H;e<r.length;e+=4)t.fromArray(r,e),V.colorSpaceToWorking(t,a),t.toArray(r,e);return{dataSize:4,buffer:r,indices:i,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t===`NoMappingInformation`)return{dataSize:1,buffer:[0],indices:[0],mappingType:`AllSame`,referenceType:n};let r=e.Materials.a,i=[];for(let e=0;e<r.length;++e)i.push(e);return{dataSize:1,buffer:r,indices:i,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error(`THREE.FBXLoader: Invalid Order %s given for geometry ID: %s`,e.Order,e.id),new bt;let n=t-1,r=e.KnotVector.a,i=[],a=e.Points.a;for(let e=0,t=a.length;e<t;e+=4)i.push(new pt().fromArray(a,e));let o,s;if(e.Form===`Closed`)i.push(i[0]);else if(e.Form===`Periodic`){o=n,s=r.length-1-o;for(let e=0;e<n;++e)i.push(i[e])}let c=new ol(n,r,i,o,s).getPoints(i.length*12);return new bt().setFromPoints(c)}},fl=class{parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let r=t[n],i=this.addClip(r);e.push(i)}return e}parseClips(){if(X.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=X.Objects.AnimationCurveNode,t=new Map;for(let n in e){let r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){let e={id:r.id,attr:r.attrName,curves:{}};t.set(e.id,e)}}return t}parseAnimationCurves(e){let t=X.Objects.AnimationCurve;for(let n in t){let r={id:t[n].id,times:t[n].KeyTime.a.map(bl),values:t[n].KeyValueFloat.a},i=sl.get(r.id);if(i!==void 0){let t=i.parents[0].ID,n=i.parents[0].relationship;n.match(/X/)?e.get(t).curves.x=r:n.match(/Y/)?e.get(t).curves.y=r:n.match(/Z/)?e.get(t).curves.z=r:n.match(/DeformPercent/)&&e.has(t)&&(e.get(t).curves.morph=r)}}}parseAnimationLayers(e){let t=X.Objects.AnimationLayer,n=new Map;for(let r in t){let t=[],i=sl.get(parseInt(r));i!==void 0&&(i.children.forEach(function(n,r){if(e.has(n.ID)){let i=e.get(n.ID);if(i.curves.x!==void 0||i.curves.y!==void 0||i.curves.z!==void 0){if(t[r]===void 0){let e=sl.get(n.ID).parents.filter(function(e){return e.relationship!==void 0});if(e.length===0)return;let i=e[0].ID;if(i!==void 0){let e=X.Objects.Model[i.toString()];if(e===void 0){console.warn(`THREE.FBXLoader: Encountered a unused curve.`,n);return}let a={modelName:e.attrName?se.sanitizeNodeName(e.attrName):``,ID:e.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};cl.traverse(function(t){t.ID===e.id&&(a.transform=t.matrix,t.userData.transformData&&(a.eulerOrder=t.userData.transformData.eulerOrder,t.userData.transformData.rotation&&(a.initialRotation=t.userData.transformData.rotation)))}),a.transform||=new B,`PreRotation`in e&&(a.preRotation=e.PreRotation.value),`PostRotation`in e&&(a.postRotation=e.PostRotation.value),t[r]=a}}t[r]&&(t[r][i.attr]=i)}else if(i.curves.morph!==void 0){if(t[r]===void 0){let e=sl.get(n.ID).parents.filter(function(e){return e.relationship!==void 0});if(e.length===0)return;let i=e[0].ID,a=sl.get(i).parents[0].ID,o=sl.get(a).parents[0].ID,s=sl.get(o).parents[0].ID,c=X.Objects.Model[s],l={modelName:c.attrName?se.sanitizeNodeName(c.attrName):``,morphName:X.Objects.Deformer[i].attrName};t[r]=l}t[r][i.attr]=i}}}),n.set(parseInt(r),t))}return n}parseAnimStacks(e){let t=X.Objects.AnimationStack,n={};for(let r in t){let i=sl.get(parseInt(r)).children;i.length>1&&console.warn(`THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.`);let a=e.get(i[0].ID);n[r]={name:t[r].attrName,layer:a}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(e){t=t.concat(n.generateTracks(e))}),new ft(e.name,-1,t)}generateTracks(e){let t=[],n=new W,r=new W;if(e.transform&&e.transform.decompose(n,new _,r),n=n.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.T.curves,n,`position`);r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let n=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder,e.initialRotation);n!==void 0&&t.push(n)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let n=this.generateVectorTrack(e.modelName,e.S.curves,r,`scale`);n!==void 0&&t.push(n)}if(e.DeformPercent!==void 0){let n=this.generateMorphTrack(e);n!==void 0&&t.push(n)}return t}generateVectorTrack(e,t,n,r){let i=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(i,t,n);return new Ge(e+`.`+r,i,a)}generateRotationTrack(e,t,n,r,i,a){let o,s;if(t.x!==void 0||t.y!==void 0||t.z!==void 0){let e=this.getTimesForAllAxes(t);if(e.length>0){let n=a||[0,0,0],r=this.synchronizeCurve(t.x,e,n[0]),c=this.synchronizeCurve(t.y,e,n[1]),l=this.synchronizeCurve(t.z,e,n[2]),u=this.interpolateRotations(r,c,l,i);o=u[0],s=u[1]}}let c=El(0);n!==void 0&&(n=n.map(K.degToRad),n.push(c),n=new qe().fromArray(n),n=new _().setFromEuler(n)),r!==void 0&&(r=r.map(K.degToRad),r.push(c),r=new qe().fromArray(r),r=new _().setFromEuler(r).invert());let l=new _,u=new qe,d=[];if(!(!s||!o)){for(let e=0;e<s.length;e+=3)u.set(s[e],s[e+1],s[e+2],i),l.setFromEuler(u),n!==void 0&&l.premultiply(n),r!==void 0&&l.multiply(r),e>2&&new _().fromArray(d,(e-3)/3*4).dot(l)<0&&l.set(-l.x,-l.y,-l.z,-l.w),l.toArray(d,e/3*4);return new w(e+`.quaternion`,o,d)}}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(e){return e/100}),r=cl.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new he(e.modelName+`.morphTargetInfluences[`+r+`]`,t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(e,t){return e-t}),t.length>1){let e=1,n=t[0];for(let r=1;r<t.length;r++){let i=t[r];i!==n&&(t[e]=i,n=i,e++)}t=t.slice(0,e)}return t}getKeyframeTrackValues(e,t,n){let r=n,i=[],a=-1,o=-1,s=-1;return e.forEach(function(e){if(t.x&&(a=t.x.times.indexOf(e)),t.y&&(o=t.y.times.indexOf(e)),t.z&&(s=t.z.times.indexOf(e)),a!==-1){let e=t.x.values[a];i.push(e),r[0]=e}else i.push(r[0]);if(o!==-1){let e=t.y.values[o];i.push(e),r[1]=e}else i.push(r[1]);if(s!==-1){let e=t.z.values[s];i.push(e),r[2]=e}else i.push(r[2])}),i}synchronizeCurve(e,t,n){if(e===void 0)return{times:t,values:t.map(()=>n)};if(e.times.length===t.length)return e;let r=[];for(let i=0;i<t.length;i++)r.push(this.sampleCurveValue(e,t[i],n));return{times:t,values:r}}sampleCurveValue(e,t,n){let r=e.times,i=e.values;if(t<=r[0])return i[0];if(t>=r[r.length-1])return i[i.length-1];for(let e=0;e<r.length-1;e++)if(t>=r[e]&&t<=r[e+1]){if(r[e]===t)return i[e];let n=(t-r[e])/(r[e+1]-r[e]);return i[e]*(1-n)+i[e+1]*n}return n}interpolateRotations(e,t,n,r){let i=[],a=[];i.push(e.times[0]),a.push(K.degToRad(e.values[0])),a.push(K.degToRad(t.values[0])),a.push(K.degToRad(n.values[0]));for(let o=1;o<e.values.length;o++){let s=[e.values[o-1],t.values[o-1],n.values[o-1]];if(isNaN(s[0])||isNaN(s[1])||isNaN(s[2]))continue;let c=s.map(K.degToRad),l=[e.values[o],t.values[o],n.values[o]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;let u=l.map(K.degToRad),d=[l[0]-s[0],l[1]-s[1],l[2]-s[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){let t=Math.max(...f)/180,n=new qe(...c,r),s=new qe(...u,r),l=new _().setFromEuler(n),d=new _().setFromEuler(s);l.dot(d)<0&&d.set(-d.x,-d.y,-d.z,-d.w);let p=e.times[o-1],m=e.times[o]-p,h=new _,g=new qe;for(let e=0;e<1;e+=1/t)h.copy(l.clone().slerp(d.clone(),e)),i.push(p+e*m),g.setFromQuaternion(h,r),a.push(g.x),a.push(g.y),a.push(g.z)}else i.push(e.times[o]),a.push(K.degToRad(e.values[o])),a.push(K.degToRad(t.values[o])),a.push(K.degToRad(n.values[o]))}return[i,a]}},pl=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),--this.currentIndent}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new gl,this.nodeStack=[],this.currentProp=[],this.currentPropName=``;let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(e,r){let i=e.match(/^[\s\t]*;/),a=e.match(/^[\s\t]*$/);if(i||a)return;let o=e.match(`^\\t{`+t.currentIndent+`}(\\w+):(.*){`,``),s=e.match(`^\\t{`+t.currentIndent+`}(\\w+):[\\s\\t\\r\\n](.*)`),c=e.match(`^\\t{`+(t.currentIndent-1)+`}}`);o?t.parseNodeBegin(e,o):s?t.parseNodeProperty(e,s,n[++r]):c?t.popStack():e.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(e)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,``).replace(/"$/,``),r=t[2].split(`,`).map(function(e){return e.trim().replace(/^"/,``).replace(/"$/,``)}),i={name:n},a=this.parseNodeAttr(r),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,i):n in o?(n===`PoseNode`?o.PoseNode.push(i):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==``&&(o[n][a.id]=i)):typeof a.id==`number`?(o[n]={},o[n][a.id]=i):n!==`Properties70`&&(o[n]=n===`PoseNode`?[i]:i),typeof a.id==`number`&&(i.id=a.id),a.name!==``&&(i.attrName=a.name),a.type!==``&&(i.attrType=a.type),this.pushStack(i)}parseNodeAttr(e){let t=e[0];e[0]!==``&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n=``,r=``;return e.length>1&&(n=e[1].replace(/^(\w+)::/,``),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,``).replace(/"$/,``).trim(),i=t[2].replace(/^"/,``).replace(/"$/,``).trim();r===`Content`&&i===`,`&&(i=n.replace(/"/g,``).replace(/,$/,``).trim());let a=this.getCurrentNode();if(a.name===`Properties70`){this.parseNodeSpecialProperty(e,r,i);return}if(r===`C`){let e=i.split(`,`).slice(1),t=parseInt(e[0]),n=parseInt(e[1]),o=i.split(`,`).slice(3);o=o.map(function(e){return e.trim().replace(/^"/,``)}),r=`connections`,i=[t,n],kl(i,o),a[r]===void 0&&(a[r]=[])}r===`Node`&&(a.id=i),r in a&&Array.isArray(a[r])?a[r].push(i):r===`a`?a.a=i:a[r]=i,this.setCurrentProp(a,r),r===`a`&&i.slice(-1)!==`,`&&(a.a=Dl(i))}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==`,`&&(t.a=Dl(t.a))}parseNodeSpecialProperty(e,t,n){let r=n.split(`",`).map(function(e){return e.trim().replace(/^\"/,``).replace(/\s/,`_`)}),i=r[0],a=r[1],o=r[2],s=r[3],c=r[4];switch(a){case`int`:case`enum`:case`bool`:case`ULongLong`:case`double`:case`Number`:case`FieldOfView`:c=parseFloat(c);break;case`Color`:case`ColorRGB`:case`Vector3D`:case`Lcl_Translation`:case`Lcl_Rotation`:case`Lcl_Scaling`:c=Dl(c)}this.getPrevNode()[i]={type:a,type2:o,flag:s,value:c},this.setCurrentProp(this.getPrevNode(),i)}},ml=class{parse(e){let t=new hl(e);t.skip(23);let n=t.getUint32();if(n<6400)throw Error(`THREE.FBXLoader: FBX version not supported, FileVersion: `+n);let r=new gl;for(;!this.endOfContent(t);){let e=this.parseNode(t,n);e!==null&&r.add(e.name,e)}return r}endOfContent(e){return e.size()%16==0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},r=t>=7500?e.getUint64():e.getUint32(),i=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let a=e.getUint8(),o=e.getString(a);if(r===0)return null;let s=[];for(let t=0;t<i;t++)s.push(this.parseProperty(e));let c=s.length>0?s[0]:``,l=s.length>1?s[1]:``,u=s.length>2?s[2]:``;for(n.singleProperty=i===1&&e.getOffset()===r;r>e.getOffset();){let r=this.parseNode(e,t);r!==null&&this.parseSubNode(o,n,r)}return n.propertyList=s,typeof c==`number`&&(n.id=c),l!==``&&(n.attrName=l),u!==``&&(n.attrType=u),o!==``&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let e=n.propertyList[0];Array.isArray(e)?(t[n.name]=n,n.a=e):t[n.name]=e}else if(e===`Connections`&&n.name===`C`){let e=[];n.propertyList.forEach(function(t,n){n!==0&&e.push(t)}),t.connections===void 0&&(t.connections=[]),t.connections.push(e)}else if(n.name===`Properties70`)Object.keys(n).forEach(function(e){t[e]=n[e]});else if(e===`Properties70`&&n.name===`P`){let e=n.propertyList[0],r=n.propertyList[1],i=n.propertyList[2],a=n.propertyList[3],o;e.indexOf(`Lcl `)===0&&(e=e.replace(`Lcl `,`Lcl_`)),r.indexOf(`Lcl `)===0&&(r=r.replace(`Lcl `,`Lcl_`)),o=r===`Color`||r===`ColorRGB`||r===`Vector`||r===`Vector3D`||r.indexOf(`Lcl_`)===0?[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:n.propertyList[4],t[e]={type:r,type2:i,flag:a,value:o}}else t[n.name]===void 0?typeof n.id==`number`?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name===`PoseNode`?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case`C`:return e.getBoolean();case`D`:return e.getFloat64();case`F`:return e.getFloat32();case`I`:return e.getInt32();case`L`:return e.getInt64();case`R`:return n=e.getUint32(),e.getArrayBuffer(n);case`S`:return n=e.getUint32(),e.getString(n);case`Y`:return e.getInt16();case`b`:case`c`:case`d`:case`f`:case`i`:case`l`:let r=e.getUint32(),i=e.getUint32(),a=e.getUint32();if(i===0)switch(t){case`b`:case`c`:return e.getBooleanArray(r);case`d`:return e.getFloat64Array(r);case`f`:return e.getFloat32Array(r);case`i`:return e.getInt32Array(r);case`l`:return e.getInt64Array(r)}let o=new hl(Xc(new Uint8Array(e.getArrayBuffer(a))).buffer);switch(t){case`b`:case`c`:return o.getBooleanArray(r);case`d`:return o.getFloat64Array(r);case`f`:return o.getFloat32Array(r);case`i`:return o.getInt32Array(r);case`l`:return o.getInt64Array(r)}break;default:throw Error(`THREE.FBXLoader: Unknown property type `+t)}}},hl=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t===void 0||t,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)==1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let r=n.indexOf(0);return r>=0&&(n=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(n)}},gl=class{add(e,t){this[e]=t}};function _l(e){return e.byteLength>=21&&Ol(e,0,21)===`Kaydara FBX Binary  \0`}function vl(e){let t=[`K`,`a`,`y`,`d`,`a`,`r`,`a`,`\\`,`F`,`B`,`X`,`\\`,`B`,`i`,`n`,`a`,`r`,`y`,`\\`,`\\`],n=0;function r(t){let r=e[t-1];return e=e.slice(n+t),n++,r}for(let e=0;e<t.length;++e)if(r(1)===t[e])return!1;return!0}function yl(e){let t=e.match(/FBXVersion: (\d+)/);if(t)return parseInt(t[1]);throw Error(`THREE.FBXLoader: Cannot find the version number for the file given.`)}function bl(e){return e/46186158e3}var xl=[];function Sl(e,t,n,r){let i;switch(r.mappingType){case`ByPolygonVertex`:i=e;break;case`ByPolygon`:i=t;break;case`ByVertice`:i=n;break;case`AllSame`:i=r.indices[0];break;default:console.warn(`THREE.FBXLoader: unknown attribute mapping type `+r.mappingType)}r.referenceType===`IndexToDirect`&&(i=r.indices[i]);let a=i*r.dataSize,o=a+r.dataSize;return Al(xl,r.buffer,a,o)}var Cl=new qe,wl=new W;function Tl(e){let t=new B,n=new B,r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B,d=new B,f=new B,p=e.inheritType?e.inheritType:0;e.translation&&t.setPosition(wl.fromArray(e.translation));let m=El(0);if(e.preRotation){let t=e.preRotation.map(K.degToRad);t.push(m),n.makeRotationFromEuler(Cl.fromArray(t))}if(e.rotation){let t=e.rotation.map(K.degToRad);t.push(e.eulerOrder||m),r.makeRotationFromEuler(Cl.fromArray(t))}if(e.postRotation){let t=e.postRotation.map(K.degToRad);t.push(m),i.makeRotationFromEuler(Cl.fromArray(t)),i.invert()}e.scale&&a.scale(wl.fromArray(e.scale)),e.scalingOffset&&s.setPosition(wl.fromArray(e.scalingOffset)),e.scalingPivot&&o.setPosition(wl.fromArray(e.scalingPivot)),e.rotationOffset&&c.setPosition(wl.fromArray(e.rotationOffset)),e.rotationPivot&&l.setPosition(wl.fromArray(e.rotationPivot)),e.parentMatrixWorld&&(d.copy(e.parentMatrix),u.copy(e.parentMatrixWorld));let h=n.clone().multiply(r).multiply(i),g=new B;g.extractRotation(u);let _=new B;_.copyPosition(u);let v=_.clone().invert().multiply(u),y=g.clone().invert().multiply(v),b=a,x=new B;if(p===0)x.copy(g).multiply(h).multiply(y).multiply(b);else if(p===1)x.copy(g).multiply(y).multiply(h).multiply(b);else{let e=new B().scale(new W().setFromMatrixScale(d)).clone().invert(),t=y.clone().multiply(e);x.copy(g).multiply(h).multiply(t).multiply(b)}let S=l.clone().invert(),C=o.clone().invert(),w=t.clone().multiply(c).multiply(l).multiply(n).multiply(r).multiply(i).multiply(S).multiply(s).multiply(o).multiply(a).multiply(C),T=new B().copyPosition(w),E=u.clone().multiply(T);return f.copyPosition(E),w=f.clone().multiply(x),w.premultiply(u.invert()),w}function El(e){e||=0;let t=[`ZYX`,`YZX`,`XZY`,`ZXY`,`YXZ`,`XYZ`];return e===6?(console.warn(`THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.`),t[0]):t[e]}function Dl(e){return e.split(`,`).map(function(e){return parseFloat(e)})}function Ol(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=e.byteLength),new TextDecoder().decode(new Uint8Array(e,t,n))}function kl(e,t){for(let n=0,r=e.length,i=t.length;n<i;n++,r++)e[r]=t[n]}function Al(e,t,n,r){for(let i=n,a=0;i<r;i++,a++)e[a]=t[i];return e}async function jl(e,t,n){let r=await Nl(e),i=r.tracks.find(e=>e.name.endsWith(`.position`));if(!i)throw Error(`Passage route has no position track: ${e}`);return Fl(i,t,n??r.duration,r.duration)}function Ml(e,t,n){let{points:r,times:i}=e,a=r[0];if(!a)return n.set(0,0,0);let o=r.length-1,s=r[o];if(r.length===1||t<=(i[0]??0))return n.copy(a);if(t>=(i[o]??0))return n.copy(s);for(let e=0;e<o;e+=1){let a=i[e]??0,o=i[e+1]??0;if(t<a||t>o)continue;let s=(t-a)/Math.max(o-a,1e-4);return n.copy(r[e]).lerp(r[e+1],s)}return n.copy(s)}async function Nl(e){let t=new M;t.setResponseType(`arraybuffer`);let n=await t.loadAsync(e),r=e.slice(0,e.lastIndexOf(`/`)+1),i=(new TextDecoder().decode(new Uint8Array(n,0,Math.min(n.byteLength,24))).startsWith(`Kaydara FBX`)?new ll().parse(n,r).animations:await Pl(n,r)).find(e=>e.tracks.some(e=>e.name.endsWith(`.position`)));if(!i)throw Error(`Passage route carries no animation: ${e}`);return i}function Pl(e,t){return new Promise((n,r)=>{new ps().parse(e,t,e=>n(e.animations),r)})}function Fl(e,t,n,r){let i=e.values,a=new W(i[0],i[1],i[2]),o=[];for(let e=0;e<i.length;e+=3)o.push(Il(new W(i[e],i[e+1],i[e+2]),a,t));let s=[0];for(let e=1;e<o.length;e+=1){let t=o[e-1],n=o[e];s.push((s[e-1]??0)+(t&&n?t.distanceTo(n):0))}let c=Math.max(s[s.length-1]??0,1e-4);return{points:o,times:s.map(e=>e/c*n),durationSeconds:n,distanceMeters:c,endDirection:Ll(e,a,t,r)}}function Il(e,t,n){let r=e.sub(t).multiplyScalar(n.scaleToMeters);return n.axisStretch&&r.multiply(n.axisStretch),r.applyQuaternion(n.rotation).add(n.start)}function Ll(e,t,n,r){let i=Math.max(r-.55,0),a=Math.max(r-.18,i+.01),o=Il(Rl(e,i),t,n),s=Il(Rl(e,a),t,n).sub(o);return s.lengthSq()<1e-4?new W(0,1,0):s.normalize()}function Rl(e,t){let{times:n,values:r}=e,i=e=>new W(r[e*3]??0,r[e*3+1]??0,r[e*3+2]??0),a=n.length-1;if(t<=(n[0]??0))return i(0);if(t>=(n[a]??0))return i(a);for(let e=0;e<a;e+=1){let r=n[e]??0,a=n[e+1]??0;if(t<r||t>a)continue;let o=(t-r)/Math.max(a-r,1e-4);return i(e).lerp(i(e+1),o)}return i(a)}var zl=.55,Bl=.995,Vl=2.4,Hl=.08,Ul=.14,Wl=.035,Gl=new W(0,1,0),Kl=[0,4,11,24,55],ql=[0,.12,.35,.72,1.05],Jl=[0,0,.4,.8,1];function Yl(e){let{definition:t,route:n,viewpoint:r}=e,i=new Pt;i.name=`Passage:${t.passageId}`,i.visible=!1;let a=Zl(e.model,t);i.add(e.model);let o=$l(e.model),s=Ql(e.model,e.animations,t),c=Xl(t,n),l=t.approachDurationSeconds+n.durationSeconds,u=l+t.exitDurationSeconds,d,f,p=new _,m={position:new W,lookAt:new W,direction:new W,world:new W,quaternion:new _,right:new W,up:new W,binormal:new W,matrix:new B};function h(n){if(t.groundClearanceMeters<=0)return;m.world.copy(n),i.localToWorld(m.world);let r=e.groundYAt(m.world.x,m.world.z)+t.groundClearanceMeters;m.world.y>=r||(m.world.y=r,i.worldToLocal(m.world),n.copy(m.world))}function g(e,t){return e.lengthSq()<1e-4?t:(e.normalize(),m.up.set(0,1,0),Math.abs(e.dot(m.up))>.94&&m.up.set(0,0,1),m.right.crossVectors(m.up,e).normalize(),m.binormal.crossVectors(m.right,e).normalize(),m.matrix.makeBasis(m.right,e,m.binormal),t.setFromRotationMatrix(m.matrix))}function v(e){e.lengthSq()<1e-4||g(e,a.quaternion)}function y(e){let r=Math.max(n.durationSeconds,1e-4),i=K.clamp(e,0,r);if(!c||t.approachDurationSeconds<=0)return i;let a=Math.min(Vl,r),o=n.distanceMeters*1.9/Math.max(a,1e-4),s=Math.min(c.getLength()/t.approachDurationSeconds,o),l=(n.distanceMeters-s*a*.5)/Math.max(r-a*.5,1e-4),u;if(i<a){let e=(l-s)/Math.max(a,1e-4);u=s*i+e*i*i*.5}else u=(s+l)*a*.5+l*(i-a);return K.clamp(u/n.distanceMeters,0,1)*n.durationSeconds}function b(e){if(!c)return;let n=K.clamp(e/Math.max(t.approachDurationSeconds,1e-4),0,1);c.getPointAt(n,m.position),c.getPointAt(Math.min(n+Wl,1),m.lookAt),h(m.position),h(m.lookAt),a.position.copy(m.position),v(m.direction.subVectors(m.lookAt,m.position))}function x(){if(c)return d||(c.getPointAt(1,m.lookAt),c.getPointAt(.965,m.position),d=g(m.direction.subVectors(m.lookAt,m.position),new _).clone(),d)}function S(e){if(e>=Vl)return;let t=x();if(!t)return;let n=K.smoothstep(e,0,Vl);m.quaternion.copy(a.quaternion),a.quaternion.copy(t).slerp(m.quaternion,n)}function C(e){let t=K.clamp(e,0,n.durationSeconds);Ml(n,y(t),m.position),h(m.position),a.position.copy(m.position),Ml(n,y(Math.min(t+Hl,n.durationSeconds)),m.lookAt),h(m.lookAt),m.lookAt.distanceToSquared(m.position)<1e-4&&(Ml(n,y(Math.max(t-Ul,0)),m.lookAt),h(m.lookAt),m.lookAt.subVectors(m.position,m.lookAt).add(m.position),h(m.lookAt)),m.direction.subVectors(m.lookAt,m.position),t>=n.durationSeconds-.45&&m.direction.copy(n.endDirection),v(m.direction),S(e)}function w(){if(f)return f;C(n.durationSeconds);let e=a.position.clone(),t=new W(0,1,0).applyQuaternion(a.quaternion).normalize(),r=T(t),i=e.clone(),o=[e.clone()],s=new W;for(let e=1;e<Kl.length;e+=1){let n=Jl[e]??1;s.copy(t).applyAxisAngle(Gl,r*n).multiplyScalar((Kl[e]??0)-(Kl[e-1]??0)),i.add(s),i.y+=(ql[e]??0)-(ql[e-1]??0),o.push(i.clone())}return f=new ct(o,!1,`centripetal`,.2),f}function T(n){let r=t.departureBearingRadians;return r===void 0?0:(r-(t.frameYaw.kind===`world`?t.frameYaw.radians:e.readViewHeadingRadians())-Math.atan2(n.x,n.z)+Math.PI*3)%(Math.PI*2)-Math.PI}function E(e){for(let t of o)t.opacity=e}function D(e){let n=w(),r=K.clamp(e/Math.max(t.exitDurationSeconds,1e-4),0,1),o=r*r;n.getPointAt(o,m.position),n.getPointAt(Math.min(o+.08,1),m.lookAt),h(m.position),h(m.lookAt),a.position.copy(m.position),v(m.direction.subVectors(m.lookAt,m.position)),E(1-K.smoothstep(r,zl,1)),i.visible=r<Bl}return{root:i,durationSeconds:u,anchor:()=>{p.setFromAxisAngle(Gl,t.frameYaw.kind===`viewHeading`?e.readViewHeadingRadians():t.frameYaw.radians),f=void 0},applyProgress:e=>{i.position.copy(r.worldPosition),i.quaternion.copy(p),E(1),i.visible=!0;let n=K.clamp(e,0,1)*u;if(s?.setTime(n),c&&n<t.approachDurationSeconds){b(n);return}if(n<l){C(n-t.approachDurationSeconds);return}D(n-l)},dispose:()=>{i.removeFromParent(),s?.stopAllAction()}}}function Xl(e,t){let n=t.points[0],r=t.points[1];if(e.approachDurationSeconds<=0||e.approachPoints.length===0||!n||!r)return;let i=r.clone().sub(n);i.lengthSq()<1e-4?i.set(0,0,-1):i.normalize();let a=n.clone().addScaledVector(i,-2.5),o=e.approachPoints.map(e=>e.clone()),s=o[o.length-1];return(!s||s.distanceToSquared(a)>.01)&&o.push(a),o.push(n.clone()),new ct(o,!1,`centripetal`,.35)}function Zl(e,t){let n=new Pt;n.name=`PassageVisualOrientation`,n.quaternion.setFromUnitVectors(t.modelForward.clone().normalize(),new W(0,1,0)).premultiply(new _().setFromAxisAngle(new W(0,1,0),t.modelRollOffsetRadians));for(let t of[...e.children])n.add(t);return e.add(n),e.traverse(e=>{e instanceof G&&(e.frustumCulled=!1)}),e}function Ql(e,t,n){let r=n.flapClipName?ft.findByName([...t],n.flapClipName):t[0];if(!r)return;let i=new We(e),a=i.clipAction(r);return a.timeScale=n.flapTimeScale,a.play(),i}function $l(e){let t=[];return e.traverse(e=>{if(!(e instanceof G))return;let n=Array.isArray(e.material)?e.material:[e.material];t.push(...n)}),t}async function eu(e){let t=cu(e),n=su(e),[r,i,a]=await Promise.all([fc(t.map(({passageId:e,modelUrl:t})=>({id:e,url:t}))),Promise.all(t.map(async e=>[e.passageId,await jl(e.routeUrl,{scaleToMeters:e.routeScaleToMeters,rotation:e.routeRotation,start:e.routeStart},e.routeDurationSeconds)])),n?jl(yc.routeUrl,{scaleToMeters:yc.routeScaleToMeters,axisStretch:yc.axisStretch,rotation:new _,start:yc.routeStart},yc.durationSeconds):void 0]),o=new Map(i);return a&&o.set(yc.passageId,a),{models:r,routes:o}}function tu(e){let t=[],n=!1,r=0,i=new W;return{module:{load:()=>nu(t,e),activate:()=>{n=!0},deactivate:()=>{n=!1;for(let e of t)ru(e)},unload:()=>iu(t,e)},followShowTime:i=>{if(r=i,n)for(let n of t){let t=ds(e.schedule,n.definition.passageId,i);if(t===void 0){ru(n);continue}n.crossing||=(n.flight.anchor(),!0),n.flight.applyProgress(t)}},swarm:su(e.schedule)?{pointCount:yc.pointCount,cloudRadiusMeters:yc.cloudRadiusMeters,cloudHeightMeters:yc.cloudHeightMeters,read:t=>{let n=e.resources.routes.get(yc.passageId),a=ds(e.schedule,yc.passageId,r);if(!n||a===void 0)return;let o=a*yc.durationSeconds;return Ml(n,o,i),t.copy(e.viewpoint.worldPosition).add(i).setY(Math.max(e.viewpoint.worldPosition.y+i.y,e.worldSurface.groundYAt(e.viewpoint.worldPosition.x+i.x,e.viewpoint.worldPosition.z+i.z)+yc.groundClearanceMeters)),o}}:void 0}}function nu(e,t){for(let n of cu(t.schedule)){let r=t.resources.models.get(n.passageId),i=t.resources.routes.get(n.passageId);if(!r||!i)throw Error(`Passage was not loaded: ${n.passageId}`);let a=Yl({definition:n,route:i,model:au(r.scene,n),animations:r.animations,viewpoint:t.viewpoint,groundYAt:t.worldSurface.groundYAt,readViewHeadingRadians:t.readViewHeadingRadians});t.scene.add(a.root),e.push({definition:n,flight:a,crossing:!1})}}function ru(e){e.flight.root.visible=!1,e.crossing=!1}function iu(e,t){for(let n of e)t.scene.remove(n.flight.root),n.flight.dispose();e.length=0,pc(t.resources.models)}function au(e,t){let n=ls(e);n.updateMatrixWorld(!0);let r=ou(n);return n.scale.setScalar(t.wingspanMeters/Math.max(r,1e-4)),n.traverse(e=>{if(!(e instanceof G))return;let t=(Array.isArray(e.material)?e.material:[e.material]).map(e=>{let t=gc(e);return t.transparent=!0,t});e.material=Array.isArray(e.material)?t:t[0]??e.material}),n}function ou(e){let t=1/0,n=-1/0;e.traverse(e=>{if(!(e instanceof G))return;e.geometry.computeBoundingBox();let r=e.geometry.boundingBox;r&&(t=Math.min(t,r.min.x),n=Math.max(n,r.max.x))});let r=n-t;if(!Number.isFinite(r)||r<=0)throw Error(`Passage model has no measurable span`);return r}function su(e){return e.passages.some(({passageId:e})=>e===yc.passageId)}function cu(e){let t=[];for(let{passageId:n}of e.passages){let e=vc.find(e=>e.passageId===n);if(e){t.push(e);continue}if(n!==yc.passageId)throw Error(`Scheduled passage has no definition: ${n}`)}return t}var lu=4294967296,uu=.7;function du(e,t){let n=e/t;if(!Number.isInteger(n)||n<=0)throw RangeError(`Candidate spacing must divide the chunk size exactly`);return{spacingMeters:t,cellsPerSide:n,candidateCount:n**2}}function fu(e,t,n,r){let i=r%t.cellsPerSide,a=Math.floor(r/t.cellsPerSide),o=e.chunkX*t.cellsPerSide+i,s=e.chunkZ*t.cellsPerSide+a,c=pu(n,o,s,0)-.5,l=pu(n,o,s,1)-.5;return{worldX:e.originX+(i+.5+c*uu)*t.spacingMeters,worldZ:e.originZ+(a+.5+l*uu)*t.spacingMeters,cellX:o,cellZ:s}}function pu(e,t,n,r){let i=Math.imul(e,1103515245);return i^=Math.imul(t,73856093),i^=Math.imul(n,19349663),i^=Math.imul(r+1,83492791),i=Math.imul(i^i>>>16,2246822519),i=Math.imul(i^i>>>13,3266489917),(i>>>0)/lu}var mu=2,hu=1e-6;function gu(e){let t=new W,n=new W,r=new W,i=new B;return(a,o)=>{_u(e,a.position.x,a.position.z,t),vu(n,t,o),r.crossVectors(t,n).normalize(),n.crossVectors(r,t).normalize(),i.makeBasis(r,t,n),a.quaternion.setFromRotationMatrix(i)}}function _u(e,t,n,r){let i=mu,a=e.surfaceYAt(t-i,n),o=e.surfaceYAt(t+i,n),s=e.surfaceYAt(t,n-i),c=e.surfaceYAt(t,n+i);r.set(a-o,4,s-c).normalize()}function vu(e,t,n){e.set(Math.sin(n),0,Math.cos(n)).projectOnPlane(t),e.lengthSq()<hu&&e.set(0,0,1).projectOnPlane(t),e.normalize()}var yu=12,bu=2.2,xu=2.5,Su=1.5,Cu=1,wu=.05,Tu=Math.PI*2,Eu=.35,Du=.8,Ou=.002;function ku(e){let t=new Pt;t.name=`Animals`;let n=Au(e,t),r=gu(e.worldSurface);return{group:t,actors:n,parameters:e.parameters,worldSurface:e.worldSurface,alignToSurface:r}}function Au(e,t){let n=ju(e.parameters.species);return n.map((r,i)=>{let a=Ru(e.assets,e.colors,e.effectsFor,r,i);return Vu(a,e,i,n.length),t.add(a.root),a})}function ju(e){return e.flatMap((e,t)=>Array.from({length:e.count},(n,r)=>({species:e,speciesIndex:t,speciesActorIndex:r}))).sort((e,t)=>e.speciesActorIndex-t.speciesActorIndex||e.speciesIndex-t.speciesIndex)}function Mu(e,t,n){for(let[r,i]of e.actors.entries())Xu(e,i,r,t),Zu(e,i,n);id(e,t);for(let t of e.actors)Nu(t,n),t.root.visible&&(e.alignToSurface(t.root,t.headingRadians),t.mixer.update(n))}function Nu(e,t){let n=+!!e.selected,r=t/Du;e.appearance=Math.abs(n-e.appearance)<=r?n:e.appearance+Math.sign(n-e.appearance)*r,e.root.visible=e.appearance>Ou;for(let t of e.materials)t.opacity=e.appearance}function Pu(e,t){let n=0;for(let r of e.actors){if(!r.root.visible)continue;let e=t[n];e||(e={x:0,y:0,z:0,headingRadians:0,heightMeters:0,speciesId:``},t[n]=e),e.x=r.root.position.x,e.y=r.root.position.y,e.z=r.root.position.z,e.headingRadians=r.headingRadians,e.heightMeters=r.species.heightMeters,e.speciesId=r.species.id,n++}t.length=n}function Fu(e,t){let n=0;for(let r of e.actors){if(!r.root.visible)continue;let e=n*3;if(e+3>t.length)break;t[e]=r.root.position.x,t[e+1]=r.root.position.y,t[e+2]=r.root.position.z,n+=1}return n}function Iu(e){let t=new Set;for(let n of e.actors){n.mixer.stopAllAction(),n.mixer.uncacheRoot(n.root);for(let e of n.materials)e.dispose();n.root.traverse(e=>{e instanceof ee&&t.add(e.skeleton)})}for(let e of t)e.dispose();e.group.clear()}function Lu(e,t){let n=(e.min.x+e.max.x)/2,r=(e.min.z+e.max.z)/2;return new B().makeScale(1/t,1/t,1/t).multiply(new B().makeTranslation(-n,-e.min.y,-r))}function Ru(e,t,n,r,i){let{species:a}=r,o=Bu(e,a.id),s=ls(o.scene);s.updateMatrixWorld(!0);let c=new ht().setFromObject(s),l=c.max.y-c.min.y;if(!Number.isFinite(l)||l<=0)throw Error(`Animal has no measurable height: ${a.id}`);let u=Lu(c,l),d=[];s.traverse(e=>{if(e instanceof G){let r=(Array.isArray(e.material)?e.material:[e.material]).map(e=>gc(e,zu(t,e.name)));for(let e of r)e.transparent=!0;if(n){let t=u.clone().multiply(e.matrixWorld);Lt(n(t),r)}e.material=Array.isArray(e.material)?r:r[0]??e.material,d.push(...r)}e instanceof ee&&(e.frustumCulled=!1)}),s.position.y-=c.min.y;let f=new Pt;f.name=`Animal:${a.id}:${i}`,f.scale.setScalar(a.heightMeters/l),f.add(s);let p=new We(f),m=o.animations.find(({name:e})=>e===a.walkAnimation);if(!m)throw Error(`GLTF animation not found: ${a.id}/${a.walkAnimation}`);p.clipAction(m).play();let h=pu(593,i,0,0)*Math.PI*2;return{root:f,mixer:p,materials:d,species:a,hasHabitat:!1,headingRadians:h,targetHeadingRadians:h,selected:!1,appearance:0}}function zu(e,t){return t===`furLight`?e.lightFurColor:t===`furDark`?e.darkFurColor:t===`feature`?e.featureColor:e.furColor}function Bu(e,t){let n=e.get(t);if(!n)throw Error(`Missing animal asset: ${t}`);return n}function Vu(e,t,n,r){let i=Hu({...t,actor:e,actorCount:r,actorIndex:n});e.hasHabitat=i!==void 0,i&&(e.appearance=0,e.root.position.set(i.x,t.worldSurface.surfaceYAt(i.x,i.z),i.z))}function Hu(e){return Ku(e,Uu(e)).find(t=>e.actor.species.allowedZones.includes(e.worldSurface.zoneAt(t.x,t.z)))}function Uu(e){let t=Wu(e),n=Gu(e);return{x:e.startX+Math.sin(t)*n,z:e.startZ+Math.cos(t)*n}}function Wu(e){let t=Tu/e.actorCount,n=pu(e.parameters.seed,e.actorIndex,0,2);return(e.actorIndex+.5)*t+(n-.5)*t*.5}function Gu(e){let t=Eu+pu(e.parameters.seed,e.actorIndex,0,3)*.4;return e.parameters.activeRadiusMeters*t}function Ku(e,t){let n=Math.floor(e.parameters.activeRadiusMeters/yu),r=n*2+1;return Array.from({length:r**2},(t,i)=>qu(e,i,r,n)).filter(t=>Ju(e,t)).sort((e,n)=>Yu(e,t)-Yu(n,t))}function qu(e,t,n,r){return{x:e.startX+(t%n-r)*yu,z:e.startZ+(Math.floor(t/n)-r)*yu}}function Ju(e,t){return Yu(t,{x:e.startX,z:e.startZ})<=e.parameters.activeRadiusMeters**2}function Yu(e,t){return(e.x-t.x)**2+(e.z-t.z)**2}function Xu(e,t,n,r){let i=ld(t.root.position.x,t.root.position.z,r.worldPosition.x,r.worldPosition.z);t.hasHabitat&&i<=e.parameters.activeRadiusMeters||Vu(t,{parameters:e.parameters,worldSurface:e.worldSurface,startX:r.worldPosition.x,startZ:r.worldPosition.z},n,e.actors.length)}function Zu(e,t,n){td(t,n),Qu(e,t,ed(t))||nd(t)&&(t.targetHeadingRadians=t.headingRadians+bu);let r=t.species.speedMetersPerSecond*n;if(!Qu(e,t,r))return;let i=t.root.position.x+Math.sin(t.headingRadians)*r,a=t.root.position.z+Math.cos(t.headingRadians)*r;t.root.position.set(i,e.worldSurface.surfaceYAt(i,a),a)}function Qu(e,t,n){let r=t.root.position.x+Math.sin(t.headingRadians)*n,i=t.root.position.z+Math.cos(t.headingRadians)*n;return t.species.allowedZones.includes(e.worldSurface.zoneAt(r,i))}function $u(e){return e.species.heightMeters*xu}function ed(e){return $u(e)*Su+Cu}function td(e,t){let n=rd(e.targetHeadingRadians-e.headingRadians),r=e.species.speedMetersPerSecond/$u(e)*t;e.headingRadians+=Math.abs(n)<=r?n:Math.sign(n)*r}function nd(e){let t=rd(e.targetHeadingRadians-e.headingRadians);return Math.abs(t)<=wu}function rd(e){return Math.atan2(Math.sin(e),Math.cos(e))}function id(e,t){for(let t of e.actors)t.selected=!1;e.group.visible&&(ad(e,t),od(e,t))}function ad(e,t){for(let n=0;n<e.parameters.maxVisible;n+=1){let r=sd(e.actors,t,n,e.parameters.maxVisible);r&&(r.selected=!0)}}function od(e,t){let n=e.actors.filter(({selected:e})=>e).length;for(;n<e.parameters.maxVisible;){let r=sd(e.actors,t);if(!r)return;r.selected=!0,n+=1}}function sd(e,t,n,r){let i,a=1/0;for(let o of e){if(!o.hasHabitat||o.selected||!cd(o,t,n,r))continue;let e=o.root.position.distanceToSquared(t.worldPosition);e>=a||(i=o,a=e)}return i}function cd(e,t,n,r){if(n===void 0||r===void 0)return!0;let i=(Math.atan2(e.root.position.x-t.worldPosition.x,e.root.position.z-t.worldPosition.z)+Tu)%Tu;return Math.floor(i/Tu*r)===n}function ld(e,t,n,r){return Math.hypot(e-n,t-r)}function ud(e){dd(e.definition);let t={population:void 0,bodies:[]},n=new Float32Array(e.definition.maxVisible*3);return{module:{load:()=>fd(t,e),activate:()=>md(t,!0),update:n=>pd(t,e,n),deactivate:()=>md(t,!1),unload:()=>hd(t,e.scene,e.assets)},getVisibleWorldPositions:()=>{let e=t.population?Fu(t.population,n):0;return n.subarray(0,e*3)}}}function dd(e){let t=new Set(e.species.map(({id:e})=>e)),n=e.species.reduce((e,t)=>e+t.count,0);if(t.size!==e.species.length)throw Error(`Animal species ids must be unique`);if(!Number.isInteger(e.maxVisible)||e.maxVisible<0||e.maxVisible>n)throw RangeError(`Animal maxVisible must fit the configured population`);if(e.activeRadiusMeters<=0)throw RangeError(`Animal activeRadiusMeters must be positive`);if(e.species.some(({allowedZones:e,count:t,heightMeters:n,speedMetersPerSecond:r})=>!Number.isInteger(t)||t<=0||e.length===0||n<=0||r<0))throw RangeError(`Animal count, habitat, height, or speed is invalid`)}function fd(e,t){let n=ku({assets:t.assets,parameters:t.definition,colors:t.preset.colors,effectsFor:t.effectsFor,worldSurface:t.worldSurface,startX:t.viewpoint.worldPosition.x,startZ:t.viewpoint.worldPosition.z});n.group.visible=!1,t.scene.add(n.group),e.population=n}function pd(e,t,n){e.population&&(Mu(e.population,t.viewpoint,n),!(!t.onBodiesUpdated||!e.population.group.visible)&&(Pu(e.population,e.bodies),t.onBodiesUpdated(e.bodies)))}function md(e,t){e.population&&(e.population.group.visible=t)}function hd(e,t,n){let r=e.population;r&&(e.population=void 0,t.remove(r.group),Iu(r),pc(n))}var gd={seed:953,maxVisible:6,activeRadiusMeters:96,species:[{id:`deer`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/animals/deer.glb`,count:5,heightMeters:1.4,speedMetersPerSecond:.65,allowedZones:[`meadow`,`deciduousForest`],walkAnimation:`Walk`},{id:`stag`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/animals/stag.glb`,count:3,heightMeters:1.6,speedMetersPerSecond:.605,allowedZones:[`coniferForest`,`deciduousForest`],walkAnimation:`Walk`},{id:`fox`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/animals/fox.glb`,count:6,heightMeters:.7,speedMetersPerSecond:.79,allowedZones:[`coniferForest`,`deciduousForest`,`shrubSlope`],walkAnimation:`Walk`},{id:`rat`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/animals/rat.glb`,count:6,heightMeters:.25,speedMetersPerSecond:.325,allowedZones:[`meadow`,`shrubSlope`],walkAnimation:`RatArmature|Rat_Walk`}]},_d=`#include <common>`,vd=`#include <color_fragment>`;function yd(e,t){let n=e.onBeforeCompile.bind(e),r=e.customProgramCacheKey();e.onBeforeCompile=(e,r)=>{n(e,r),Object.assign(e.uniforms,t.uniforms),e.vertexShader=e.vertexShader.replace(_d,`${_d}\n${t.vertexHeader}`).replace(t.vertexAnchor,`${t.vertexAnchor}\n${t.vertexCall}`),e.fragmentShader=e.fragmentShader.replace(_d,`${_d}\n${t.fragmentHeader}`).replace(vd,`${vd}\n${t.colorFragmentCall}`)},e.customProgramCacheKey=()=>`${r}:${t.cacheKey}`}function bd(e){return Number.isFinite(e)&&e>0}function xd(e){return Number.isFinite(e)&&e>=0&&e<=1}var Sd=`/*
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
`,Cd=`/*
 * Purpose: Measure camera distance for the echo depth ramp.
 * Context: Depth cues must stay stable while the viewer flies and turns the headset.
 * Responsibility: Write the radial view distance of the current vertex.
 * Boundary: Ramp colors and mixing stay in the fragment shader; geometry stays with owners.
 */

varying float echoViewDistance;

void passEchoDepth(vec4 viewPosition) {
  echoViewDistance = length(viewPosition.xyz);
}
`,wd={nearShadeStopFraction:.2,midStopFraction:.5,farStopFraction:.8},Td=`echo-depth-v2`;function Ed(e){Dd(e);let t={echoIntensity:{value:e.intensity},echoNearDistance:{value:e.nearDistanceMeters},echoFarDistance:{value:e.farDistanceMeters},echoRampStops:{value:new W(wd.nearShadeStopFraction,wd.midStopFraction,wd.farStopFraction)},echoNearColor:{value:new H(e.colors.nearColor)},echoNearShadeColor:{value:new H(e.colors.nearShadeColor)},echoMidColor:{value:new H(e.colors.midColor)},echoFarColor:{value:new H(e.colors.farColor)},echoHazeColor:{value:new H(e.colors.hazeColor)}};return{applyTo:e=>{yd(e,{cacheKey:Td,uniforms:t,vertexHeader:Cd,vertexAnchor:`#include <project_vertex>`,vertexCall:`passEchoDepth(mvPosition);`,fragmentHeader:Sd,colorFragmentCall:`diffuseColor.rgb = applyEchoDepth(diffuseColor.rgb);`})}}}function Dd(e){if(!xd(e.intensity))throw RangeError(`Echo depth intensity must be between zero and one`);if(![e.nearDistanceMeters,e.farDistanceMeters].every(bd)||e.nearDistanceMeters>=e.farDistanceMeters)throw RangeError(`Echo depth distances must be positive with near below far`)}function Od(e){let t=K.degToRad(e.viewPitchDegrees),n=e.distanceMeters*Math.cos(t),r=e.distanceMeters*Math.sin(t),i=new W,a=new W,o=new W,s=new W(0,0,-1);return{position:i,lookTarget:a,place:(e,t)=>{o.set(0,0,-1).applyQuaternion(t),o.y=0,o.lengthSq()<1e-6?o.copy(s):(o.normalize(),s.copy(o)),i.copy(e).addScaledVector(o,n),i.y=e.y+r,a.copy(e)}}}var kd={distanceMeters:3.2,widthMeters:3.4,canvasWidthPixels:2048,canvasHeightPixels:1280,textureAnisotropy:8,textColor:`#000000`,fontFamilyName:`Rubik`,fontFamily:`Rubik, system-ui, sans-serif`,fontWeight:`700`,fontUrl:`/becoming-many-making-of/p/v3-finetuning/fonts/rubik/Rubik-Bold.ttf`,typeSizePixels:{title:104,role:40,name:50},titleCenterY:.26,titleGapPixels:333,lineHeightPixels:88,renderOrder:999};function Ad(e){let t=kd,n=document.createElement(`canvas`);n.width=t.canvasWidthPixels,n.height=t.canvasHeightPixels;let r=n.getContext(`2d`);if(!r)throw Error(`The end credits need a 2D canvas context`);Nd(r,e);let i=new R(n);return i.colorSpace=a,i.anisotropy=t.textureAnisotropy,Md().then(()=>{Nd(r,e),i.needsUpdate=!0}),i}var jd;function Md(){if(!jd){let e=kd;jd=new FontFace(e.fontFamilyName,`url(${e.fontUrl})`,{weight:e.fontWeight}).load().then(e=>{document.fonts.add(e)}).catch(e=>{console.warn(`[end-credits] Rubik failed to load — using fallback`,e)})}return jd}function Nd(e,t){let n=kd,r=n.canvasWidthPixels/2;e.clearRect(0,0,n.canvasWidthPixels,n.canvasHeightPixels),e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=n.textColor;let i=n.titleCenterY*n.canvasHeightPixels,a;for(let o of t.lines)a!==void 0&&(i+=a===`title`?n.titleGapPixels:n.lineHeightPixels),e.font=`${n.fontWeight} ${Pd(o.role)}px ${n.fontFamily}`,e.fillText(o.text,r,i),a=o.role}function Pd(e){let t=kd.typeSizePixels;return e===`title`?t.title:e===`role`?t.role:t.name}function Fd(e){let t=kd,n=Od({distanceMeters:t.distanceMeters,viewPitchDegrees:e.viewPitchDegrees}),r,i=0;function a(){r&&(r.panel.material.opacity=i,r.panel.visible=i>0)}return{setPresence:e=>{i=e,a()},module:{load:()=>{let n=Ad(e.definition),i=t.widthMeters*t.canvasHeightPixels/t.canvasWidthPixels,s=new nt({map:n,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),c=new G(new o(t.widthMeters,i),s);c.name=`EndCreditsPanel`,c.frustumCulled=!1,c.renderOrder=t.renderOrder,c.visible=!1,e.scene.add(c),r={panel:c},a()},activate:a,update:()=>{r?.panel.visible&&(n.place(e.viewpoint.worldPosition,e.viewerRig.quaternion),r.panel.position.copy(n.position),r.panel.lookAt(n.lookTarget))},deactivate:()=>{r&&(r.panel.visible=!1)},unload:()=>{if(!r)return;let{panel:t}=r;r=void 0,e.scene.remove(t),t.geometry.dispose(),t.material.map?.dispose(),t.material.dispose()}}}}var Id=`/*
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
`,Ld=`/*
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
`,Rd={layout:{ring:4,levels:1,coverage0Meters:171},density:{stepsUp:0,stepsDown:3,dissolve:.68,jitter:1.6},fade:{startMeters:24,endMeters:60},detail:{segments:[4,3,2,2],uniformSegmentIndex:1,switchDistanceMeters:[9,20,50],hysteresis:1.12,byDistance:!1,tierOfDetail:[0,0,1,2]},wind:{phaseSpeed:1.35,phaseScalePerMeter:.055,strengthScale:.375},instanceGridBits:8,cullRadiusMeters:3,blade:{curve:.52,minAngularWidth:.0022,cross:!0},lighting:{sunDirection:[.4,.4,.8],sunColor:16773332,skyColor:8103638,ambientOcclusion:.74,translucency:.9,exposure:1.06,fogDensity:.011},heightField:{texelMeters:2,sizeTexels:192,recenterMeters:32,rowsPerStep:8},zoneCoverage:{meadow:1,shrubSlope:.45}},zd=[0,1,2];function Bd(e){let t=Rd.layout,n=Vd(t.ring,t.levels),r=n*2,i=t.coverage0Meters/n,a=Kd(),o=qd(e),s=new Pt;s.matrixAutoUpdate=!1;let c=Array.from({length:t.levels},(t,s)=>Xd({index:s,ring:n,span:r,chunkSizeMeters:i,cells:a,shared:o,options:e}));for(let e of c)for(let t of e.chunks)s.add(t);let l={seconds:0},u=new O,d=new B,f=!1;return{group:s,followCamera:(e,t)=>{let i=!1;for(let r of c){let a=r.chunkSizeMeters,o=c.length===1,s=o?Math.floor(e/a)-n:Math.floor(e/(2*a))*2-n,l=o?Math.floor(t/a)-n:Math.floor(t/(2*a))*2-n;(s!==r.startX||l!==r.startZ||!f)&&(r.startX=s,r.startZ=l,i=!0)}return i?(nf(c,r),f=!0,!0):!1},selectDetail:(t,n)=>sf(c,t,n,e.preset),updateFrustum:e=>{e.updateMatrixWorld(),d.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),u.setFromProjectionMatrix(d);for(let e=0;e<4;e++){let t=u.planes[e],n=o.uGrassFrustum.value[e];!t||!n||n.set(t.normal.x,t.normal.y,t.normal.z,t.constant)}},advanceWind:e=>{l.seconds=Bt(l.seconds+e),o.uGrassTime.value=l.seconds;let t=Rt(l.seconds);o.uGrassWindDirection.value.set(t.directionX,t.directionZ),o.uGrassWindStrength.value=t.strength*Rd.wind.strengthScale},publishHeightWindow:()=>{o.uGrassHeightPlacement.value.copy(e.heightField.placement)},dispose:()=>{for(let e of c){for(let t of e.geometries)for(let e of t)e.dispose();for(let t of e.materials)for(let e of t)e.dispose()}}}}function Vd(e,t){let n=Math.max(2,Math.round(e/2)*2);return t>1?Math.max(4,n):n}function Hd(e,t){let n=Rd.layout,r=Vd(n.ring,n.levels),i=n.coverage0Meters/r*2**e,a=e===0?0:n.coverage0Meters*2**(e-1),o=4**Rd.instanceGridBits,s=Ud(a,t),c=Math.max(16,Math.round(s*i*i));return c>o&&(c=o,s=c/(i*i)),{chunkSizeMeters:i,innerEdgeMeters:a,allocatedDensity:s,baseInstanceCount:c,largestStepInstanceCount:Math.round(c*Gd(0)),instanceCeiling:o}}function Ud(e,t){let n=t.fullDensityRadiusMeters/Math.max(e,t.fullDensityRadiusMeters);return t.tuftsPerSquareMeter*n*n}function Wd(){let e=Rd.density;return e.stepsUp+e.stepsDown+1}function Gd(e){return 4**(Rd.density.stepsUp-e)}function Kd(){let e=Rd.instanceGridBits,t=1<<e,n=t*t,r=new Float32Array(n*3);for(let i=0;i<n;i++){let a=0,o=0;for(let t=0;t<e;t++)a|=(i>>2*t&1)<<e-1-t,o|=(i>>2*t+1&1)<<e-1-t;r[i*3]=(a+.5)/t,r[i*3+1]=(o+.5)/t,r[i*3+2]=i/n}return{attribute:new y(r,3),maxInstances:n}}function qd(e){let{preset:t}=e,n=Rd,r=n.lighting,[i,a,o]=r.sunDirection;return{uGrassTime:{value:0},uGrassBladeHeight:{value:t.bladeHeightMeters},uGrassBladeWidth:{value:t.bladeWidthMeters},uGrassMinAngular:{value:n.blade.minAngularWidth},uGrassCurve:{value:n.blade.curve},uGrassWindDirection:{value:new vt(1,0)},uGrassWindStrength:{value:0},uGrassWindSpeed:{value:n.wind.phaseSpeed},uGrassWindScale:{value:n.wind.phaseScalePerMeter},uGrassFadeStart:{value:n.fade.startMeters},uGrassFadeEnd:{value:n.fade.endMeters},uGrassDensityRef:{value:t.fullDensityRadiusMeters},uGrassDissolve:{value:n.density.dissolve},uGrassJitter:{value:n.density.jitter},uGrassDensity0:{value:t.tuftsPerSquareMeter},uGrassFrustum:{value:[0,1,2,3].map(()=>new pt)},uGrassCullRadius:{value:n.cullRadiusMeters},uGrassHeightField:{value:e.heightField.texture},uGrassHeightPlacement:{value:e.heightField.placement.clone()},uGrassHeightRange:{value:e.heightField.range.clone()},uGrassSunDirection:{value:new W(i,a,o).normalize()},uGrassSunColor:{value:new H(r.sunColor)},uGrassSkyColor:{value:new H(r.skyColor)},uGrassRootColor:{value:new H(t.colors.rootColor)},uGrassTipColor:{value:new H(t.colors.tipColor)},uGrassFogColor:{value:new H(e.fogColor)},uGrassFogDensity:{value:r.fogDensity},uGrassExposure:{value:r.exposure},uGrassAmbientOcclusion:{value:r.ambientOcclusion},uGrassTranslucency:{value:r.translucency}}}function Jd(e,t){return{GRASS_LIT:+!!t,GRASS_WIND:1,GRASS_CURVE:1,GRASS_WIND_SIMPLE:+(e>=1),GRASS_FLUTTER:+(e===0),GRASS_NORMAL_BEND:+(e===0),GRASS_SPECULAR:+(e===0),GRASS_TRANSLUCENCY:+(e<=1)}}function Yd(e,t){let n=[],r=[],i=t=>{let i=n.length/3;for(let r=0;r<e;r++){let i=r/e;n.push(-1,i,t,1,i,t)}n.push(0,1,t);for(let t=0;t<e-1;t++){let e=i+2*t;r.push(e,e+2,e+1,e+1,e+2,e+3)}let a=i+2*(e-1);r.push(a,i+2*e,a+1)};i(0),Rd.blade.cross&&i(1);let a=new ge;return a.setAttribute(`position`,new g(n,3)),a.setIndex(r),a.setAttribute(`aGrassCell`,t),a}function Xd(e){let{index:t,span:n,cells:r,shared:i,options:a}=e,o=Rd,s=Hd(t,a.preset),{chunkSizeMeters:c,innerEdgeMeters:l,allocatedDensity:u}=s,d=s.baseInstanceCount,f=Wd(),p=e=>Math.max(16,Math.min(r.maxInstances,Math.round(d*Gd(e)))),m=new le(new W(c*.5,1,c*.5),c*.7072+5),h={value:c},g=o.detail.segments.map(e=>Array.from({length:f},(t,n)=>{let i=Yd(e,r.attribute);return i.instanceCount=p(n),i.boundingSphere=m,i})),_=Array.from({length:f},(e,t)=>({uGrassRankScale:{value:r.maxInstances/p(t)},uGrassDensityGain:{value:a.preset.tuftsPerSquareMeter/(p(t)/(c*c))}})),v=a.effects??[],y=zd.map(e=>Array.from({length:f},(t,n)=>{let r=new j({vertexShader:Ld,fragmentShader:Id,side:2,defines:Jd(e,v.length===0),uniforms:{...i,uGrassChunkSize:h,..._[n]}});return Lt(v,r),r})),b=n*n,x=[],S=[];for(let e=0;e<b;e++){let e=new G(g[0]?.[0],y[0]?.[0]);e.matrixAutoUpdate=!1,e.visible=!1,e.renderOrder=t,x.push(e),S.push({detailIndex:-1,densityStep:-1,placed:!1})}return{index:t,chunkSizeMeters:c,innerEdgeMeters:l,allocatedDensity:u,geometries:g,materials:y,chunks:x,chunkStates:S,startX:0,startZ:0}}function Zd(e,t){if(!e)return;let n=e.chunkSizeMeters;return{minX:e.startX*n,maxX:(e.startX+t)*n,minZ:e.startZ*n,maxZ:(e.startZ+t)*n}}function Qd(e,t,n,r){return e?t>=e.minX&&t+r<=e.maxX&&n>=e.minZ&&n+r<=e.maxZ:!1}function $d(e,t,n,r){let i=e.chunks[t],a=e.chunkStates[t];!i||!a||(a.placed=!0,i.visible=!0,i.matrix.makeTranslation(n,0,r),i.matrixWorldNeedsUpdate=!0)}function ef(e,t){let n=e.chunks[t],r=e.chunkStates[t];!n||!r||(n.visible=!1,r.placed=!1)}function tf(e,t,n){let r=e.chunkSizeMeters,i=0;for(let a=0;a<n;a++)for(let o=0;o<n;o++){let n=(e.startX+a)*r,s=(e.startZ+o)*r;Qd(t,n,s,r)||($d(e,i,n,s),i++)}for(;i<e.chunks.length;i++)ef(e,i)}function nf(e,t){e.forEach((n,r)=>{tf(n,Zd(e[r-1],t),t)})}function rf(e,t,n,r){let i=t*.5,a=e.matrix.elements[12]??0,o=e.matrix.elements[14]??0,s=Math.max(0,Math.abs(n-(a+i))-i),c=Math.max(0,Math.abs(r-(o+i))-i);return Math.sqrt(s*s+c*c)}function af(e,t){let n=Rd.detail;if(!n.byDistance)return n.uniformSegmentIndex;for(let r=0;r<n.switchDistanceMeters.length;r++)if(e<(n.switchDistanceMeters[r]??0)*(t<=r?n.hysteresis:1))return r;return n.segments.length-1}function of(e,t,n){let r=Ud(e,n)/t,i=Rd.density;return Math.min(Wd()-1,Math.max(0,i.stepsUp-Math.ceil(Math.log2(r)/2)))}function sf(e,t,n,r){for(let i of e)i.chunks.forEach((e,a)=>{let o=i.chunkStates[a];if(!o?.placed)return;let s=rf(e,i.chunkSizeMeters,t,n),c=s<Rd.fade.endMeters;if(e.visible!==c&&(e.visible=c),!c)return;let l=af(s,o.detailIndex),u=of(s,i.allocatedDensity,r);if(l===o.detailIndex&&u===o.densityStep)return;o.detailIndex=l,o.densityStep=u;let d=i.geometries[l]?.[u],f=Math.max(0,Rd.detail.tierOfDetail[l]??0),p=i.materials[f]?.[u];d&&(e.geometry=d),p&&(e.material=p)})}var{lerp:cf}=K,lf=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let e=0;e<256;e++)lf[256+e]=lf[e];function uf(e){return e*e*e*(e*(e*6-15)+10)}function df(e,t,n,r){let i=e&15,a=i<8?t:n,o=i<4?n:i==12||i==14?t:r;return(i&1?-a:a)+(i&2?-o:o)}var ff=class{noise(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=r&255,s=i&255,c=a&255;e-=r,t-=i,n-=a;let l=e-1,u=t-1,d=n-1,f=uf(e),p=uf(t),m=uf(n),h=lf[o]+s,g=lf[h]+c,_=lf[h+1]+c,v=lf[o+1]+s,y=lf[v]+c,b=lf[v+1]+c;return cf(cf(cf(df(lf[g],e,t,n),df(lf[y],l,t,n),f),cf(df(lf[_],e,u,n),df(lf[b],l,u,n),f),p),cf(cf(df(lf[g+1],e,t,d),df(lf[y+1],l,t,d),f),cf(df(lf[_+1],e,u,d),df(lf[b+1],l,u,d),f),p),m)}},pf=new ff;function mf(e,t,n){let r=_f(e,t,n),i=yf(e,t,n),a=bf(n.river.channelHalfWidthMeters,n.river.bankHalfWidthMeters,i),o=xf(n.river.riverBedHeightY,r,a);return Math.min(r,o)}function hf(e,t,n){let{groundY:r,hasWater:i}=gf(e,t,n);return i?n.river.waterHeightY:r}function gf(e,t,n){let r=mf(e,t,n);return{groundY:r,hasWater:yf(e,t,n)<=n.river.channelHalfWidthMeters&&r<n.river.waterHeightY}}function _f(e,t,n){let{heightField:r,seed:i}=n,a=i/1e3,o=pf.noise(e/r.rollingFeatureSizeMeters,t/r.rollingFeatureSizeMeters,a)*r.rollingElevationMeters,s=pf.noise(e/r.detailFeatureSizeMeters,t/r.detailFeatureSizeMeters,a+17)*r.detailElevationMeters,c=bf(0,.55,pf.noise(e/r.mountainRegionSizeMeters,t/r.mountainRegionSizeMeters,a+31)),l=pf.noise(e/r.mountainFeatureSizeMeters,t/r.mountainFeatureSizeMeters,a+53),u=c*(1-l*l)**3*r.mountainElevationMeters;return r.baseHeightY+o+s+u}function vf(e){let{heightField:t,river:n}=e,r=t.baseHeightY-t.rollingElevationMeters-t.detailElevationMeters,i=t.baseHeightY+t.rollingElevationMeters+t.detailElevationMeters+t.mountainElevationMeters;return{minimumElevation:Math.min(r,n.riverBedHeightY),maximumElevation:i}}function yf(e,t,n){let{river:r,seed:i}=n,a=i%360*Math.PI/180,o=Math.sin(t/r.primaryMeanderLengthMeters+a)*r.primaryMeanderAmplitudeMeters+Math.sin(t/r.secondaryMeanderLengthMeters-a)*r.secondaryMeanderAmplitudeMeters;return Math.abs(e-o)}function bf(e,t,n){let r=Math.min(Math.max((n-e)/(t-e),0),1);return r*r*(3-2*r)}function xf(e,t,n){return e+(t-e)*n}function Sf(e){let t=Rd.heightField,n=t.sizeTexels,r=new Uint16Array(n*n*2),i=new Tt(r,n,n,Mt,s);i.magFilter=it,i.minFilter=it,i.generateMipmaps=!1,i.wrapS=et,i.wrapT=et;let a=vf(e.surfaceSettings),o=new vt(a.minimumElevation,Math.max(a.maximumElevation-a.minimumElevation,1)),c=new pt(0,0,t.texelMeters,n),l={pendingOriginX:0,pendingOriginZ:0,nextRow:0},u=(e,r)=>{let i=(n-1)/2*t.texelMeters;l.pendingOriginX=Math.round((e-i)/t.texelMeters)*t.texelMeters,l.pendingOriginZ=Math.round((r-i)/t.texelMeters)*t.texelMeters,l.nextRow=0},d=()=>{let a=Math.min(n,l.nextRow+t.rowsPerStep);for(let t=l.nextRow;t<a;t++)Cf(t,r,l,o,e);return l.nextRow=a,l.nextRow<n?!1:(c.x=l.pendingOriginX,c.y=l.pendingOriginZ,i.needsUpdate=!0,!0)};for(u(e.cameraX,e.cameraZ);!d(););return{texture:i,placement:c,range:o,needsRecenter:(e,r)=>{let i=(n-1)/2*t.texelMeters,a=c.x+i,o=c.y+i;return Math.abs(e-a)>t.recenterMeters||Math.abs(r-o)>t.recenterMeters},fillNextRows:d,beginRecenter:u,dispose:()=>i.dispose()}}function Cf(e,t,n,r,i){let a=Rd.heightField,o=a.sizeTexels,s=n.pendingOriginZ+e*a.texelMeters;for(let c=0;c<o;c++){let l=n.pendingOriginX+c*a.texelMeters,u=(i.worldSurface.groundYAt(l,s)-r.x)/r.y,d=(e*o+c)*2;t[d]=pe.toHalfFloat(u),t[d+1]=pe.toHalfFloat(wf(i.worldSurface,l,s))}}function wf(e,t,n){let r=e.zoneAt(t,n);return Rd.zoneCoverage[r]??0}function Tf(e){let t={currentResources:void 0};return{load:()=>Ef(t,e),activate:()=>kf(t,!0),update:n=>Df(t,e,n),deactivate:()=>kf(t,!1),unload:()=>Af(t,e.scene)}}function Ef(e,t){let n=Sf({worldSurface:t.worldSurface,surfaceSettings:t.surfaceSettings,cameraX:t.viewpoint.worldPosition.x,cameraZ:t.viewpoint.worldPosition.z}),r=Bd({preset:t.preset,heightField:n,fogColor:t.fogColor,effects:t.effects});r.publishHeightWindow();let{worldPosition:i}=t.viewpoint;r.followCamera(i.x,i.z),r.selectDetail(i.x,i.z),r.group.visible=!1,t.scene.add(r.group),e.currentResources={heightField:n,field:r,refillKey:{},refilling:!1}}function Df(e,t,n){let r=e.currentResources;if(!r)return;let{viewpoint:i,frustumCamera:a,streamQueue:o}=t,s=i.worldPosition.x,c=i.worldPosition.z;r.field.advanceWind(n),r.field.updateFrustum(a),r.field.followCamera(s,c),r.field.selectDetail(s,c),!r.refilling&&r.heightField.needsRecenter(s,c)&&(r.heightField.beginRecenter(s,c),r.refilling=o.enqueue(Of(e,r)))}function Of(e,t){return{key:t.refillKey,isCurrent:()=>e.currentResources===t,runStep:()=>t.heightField.fillNextRows()?(t.field.publishHeightWindow(),t.refilling=!1,!0):!1}}function kf(e,t){let n=e.currentResources;n&&(n.field.group.visible=t)}function Af(e,t){let n=e.currentResources;n&&(e.currentResources=void 0,t.remove(n.field.group),n.field.dispose(),n.heightField.dispose())}var jf={animationLoopSeconds:3600,shimmer:{grainFrequency:30,baseAmount:0,poleAmount:2.85,poleWidthExponent:20,contrast:1,iridescence:.7,breathe:1,driftHeadingDegrees:60,driftSpeed:.4,driftVertical:.25,stretch:1,neutralColor:11777732},sky:{domeRadiusMeters:120,widthSegments:32,heightSegments:16}},Mf=`/*
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
`,Nf=`/*
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
`;function Pf(e){let t={currentResources:void 0};return{load:()=>Ff(t,e),activate:()=>Lf(t,!0),update:()=>If(t,e.viewpoint),deactivate:()=>Lf(t,!1),unload:()=>Rf(t,e.scene)}}function Ff(e,t){let n=jf.sky,r=jf.shimmer,i=new Ft(n.domeRadiusMeters,n.widthSegments,n.heightSegments),a=new j({vertexShader:Nf,fragmentShader:Mf,side:1,depthWrite:!1,uniforms:{magneticFieldAxis:t.fieldAxisUniform,magneticIntensity:t.intensityUniform,magneticTime:t.timeUniform,magneticHorizonColor:t.hazeColorUniform,magneticZenithColor:{value:t.colors.zenith},magneticNorthColor:{value:t.colors.north},magneticSouthColor:{value:t.colors.south},magneticNeutralColor:{value:t.colors.neutral},magneticDriftVelocity:{value:t.driftVelocity},magneticGrainFrequency:{value:r.grainFrequency},magneticBaseAmount:{value:r.baseAmount},magneticPoleAmount:{value:r.poleAmount},magneticPoleWidth:{value:r.poleWidthExponent},magneticContrast:{value:r.contrast},magneticIridescence:{value:r.iridescence},magneticBreathe:{value:r.breathe},magneticStretch:{value:r.stretch}}}),o=new G(i,a);o.renderOrder=-1,o.frustumCulled=!1,o.visible=!1,o.position.copy(t.viewpoint.worldPosition),t.scene.add(o),e.currentResources={dome:o}}function If(e,t){e.currentResources?.dome.position.copy(t.worldPosition)}function Lf(e,t){let n=e.currentResources;n&&(n.dome.visible=t)}function Rf(e,t){let n=e.currentResources;n&&(e.currentResources=void 0,t.remove(n.dome),n.dome.geometry.dispose(),n.dome.material.dispose())}function zf(e,t){Uf(e);let n={value:Vf(e)},r={value:e.intensity},i={value:new H(t.skyHazeColor)},a={value:0},o=jf.animationLoopSeconds,s=Pf({scene:t.scene,viewpoint:t.viewpoint,hazeColorUniform:i,colors:Bf(e),driftVelocity:Hf(),fieldAxisUniform:n,intensityUniform:r,timeUniform:a});return{module:{...s,update:e=>{a.value=(a.value+e)%o,s.update?.(e)}},setIntensity:e=>{r.value=e},setSkyBackground:e=>{i.value.copy(e)}}}function Bf(e){return{zenith:new H(e.colors.zenithColor),north:new H(e.colors.northColor),south:new H(e.colors.southColor),neutral:new H(jf.shimmer.neutralColor)}}function Vf(e){let t=K.degToRad(e.fieldDirectionDegreesFromNorth),n=K.degToRad(e.fieldElevationDegrees),r=Math.cos(n);return new W(Math.sin(t)*r,Math.sin(n),Math.cos(t)*r)}function Hf(){let e=jf.shimmer,t=K.degToRad(e.driftHeadingDegrees);return new W(Math.sin(t),e.driftVertical,Math.cos(t)).multiplyScalar(e.driftSpeed)}function Uf(e){if(!Number.isFinite(e.fieldDirectionDegreesFromNorth))throw RangeError(`Magnetic field direction must be finite`);if(!Wf(e.fieldElevationDegrees))throw RangeError(`Magnetic field elevation must lie between the horizon and the zenith`);if(!Gf(e.intensity))throw RangeError(`Magnetic intensity must be between zero and one`)}function Wf(e){return Number.isFinite(e)&&e>=0&&e<=90}function Gf(e){return Number.isFinite(e)&&e>=0&&e<=1}var Kf=`/*
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
`,Z={nearRing:{minMeters:5,maxMeters:18},farRing:{minMeters:35,maxMeters:65},reanchorDistanceMeters:80,swarmFadeSeconds:.55,swarmFadeStaggerSeconds:.12,groundClearanceMeters:.9,groundSlopeSampleMeters:2,swarmRadiusMeters:1.45,swarmHeightMeters:.65,swarmShape:{minAxisScale:.6,maxAxisScale:1.45,lobesPerSwarm:3,lobeAngleJitter:.4,lobeOffsetFraction:.55,minLobeSpread:.42,maxLobeSpread:.72,lobeDriftFraction:.55,lobeDriftRate:{minHertz:.03,maxHertz:.11}},swarmCorePull:2.6,swarmDriftPull:.9,swarmRelaxRadii:.5,swarmDissolveRadii:3,swarmRecapturePull:8,swarmLobePull:1.2,swarmLobeReachRadii:1.2,flyBinding:{minimum:.18,skewToHeld:.3},minFlightSpeed:.45,maxFlightSpeed:1.8,maxForce:13,neighbourSamples:8,placementAttemptsPerAnchor:16,maxBoidStepSeconds:.05,anchorGroundFollowRate:.2,trailIntensityFloor:.04,birdOrbitRadius:{minMeters:30,maxMeters:90},birdAnchorFollowRate:.02,birdScatter:{radiusMeters:6,heightMeters:1.5},birdFlockSizeVariation:.65,minBirdsPerFlock:3,birdWingSpanMeters:.9,birdFlapAmplitudeMeters:.28,birdFlapFrequency:{minHertz:4,maxHertz:8},birdPointsPerBird:3,birdBodyValuesPerBird:5,birdWingBeatRadians:.75,birdWingRootShare:.22},qf=`bird-wing-beat-v1`,Jf={id:`bird`,url:`/becoming-many-making-of/p/v3-finetuning/birds/bird.glb`},Yf=new W(0,1,0);function Xf(e){let t=Zf(e.asset,e.appearance),n=Qf(e),r=new xe(t,n,e.birdCount);r.name=`BirdBodies`,r.instanceMatrix.setUsage(i),r.frustumCulled=!1,r.visible=!1;let a=new y(new Float32Array(e.birdCount),1);a.setUsage(i),t.setAttribute(`birdBeat`,a),e.scene.add(r);let o={mesh:r,beats:a},s=new W().setScalar(1),c=new B,l=new _,u=new W;return{update:t=>{let n=Z.birdBodyValuesPerBird;for(let r=0;r<e.birdCount;r+=1){let e=r*n;u.set(t[e]??0,t[e+1]??0,t[e+2]??0),l.setFromAxisAngle(Yf,t[e+3]??0),c.compose(u,l,s),o.mesh.setMatrixAt(r,c),o.beats.setX(r,t[e+4]??0)}o.mesh.instanceMatrix.needsUpdate=!0,o.beats.needsUpdate=!0},setVisible:e=>{o.mesh.visible=e},dispose:()=>{e.scene.remove(o.mesh),o.mesh.dispose(),t.dispose(),n.dispose()}}}function Zf(e,t){e.scene.updateMatrixWorld(!0);let n;if(e.scene.traverse(e=>{e instanceof G&&!n&&(n=e)}),!n)throw Error(`The bird model holds no mesh`);let r=n.geometry.clone().applyMatrix4(n.matrixWorld);r.computeBoundingBox();let i=r.boundingBox;if(!i)throw Error(`The bird model has no measurable bounds`);let a=i.max.z-i.min.z,o=Math.max(Math.abs(i.min.x),Math.abs(i.max.x));if(a<=0||o<=0)throw Error(`The bird model has no measurable length or span`);r.scale(t.lengthMeters/a,t.lengthMeters/a,t.lengthMeters/a);let s=r.attributes.position;if(!s)throw Error(`The bird model holds no positions`);let c=o*t.lengthMeters/a,l=new Float32Array(s.count);for(let e=0;e<s.count;e+=1)l[e]=s.getX(e)/c;return r.setAttribute(`birdWingSpan`,new U(l,1)),r}function Qf(e){let t;e.asset.scene.traverse(e=>{e instanceof G&&!t&&(t=e)});let n=Array.isArray(t?.material)?t?.material[0]:t?.material;if(!n)throw Error(`The bird model holds no material`);let r=gc(n,e.appearance.color);return r.name=`bird-body`,Lt(e.effects,r),yd(r,{cacheKey:qf,uniforms:{birdWingBeatRadians:{value:Z.birdWingBeatRadians},birdWingRootShare:{value:Z.birdWingRootShare}},vertexHeader:Kf,vertexAnchor:`#include <begin_vertex>`,vertexCall:`transformed = applyBirdWingBeat(transformed);`,fragmentHeader:``,colorFragmentCall:``}),r}var $f=4294967296;function Q(e,t,n=0,r=0){let i=Math.imul(e+1,73856093);return i^=Math.imul(t+1,19349663),i^=Math.imul(n+1,2971215073),i^=Math.imul(r+1,83492791),i=Math.imul(i^i>>>16,2246822519),i=Math.imul(i^i>>>13,3266489917),(i>>>0)/$f}var ep=101,tp=Math.PI*2;function np(e,t){let n=Math.max(Q(e,t),2**-52),r=Q(e,t+ep);return Math.sqrt(-2*Math.log(n))*Math.cos(tp*r)}function rp(e,t,n){let r=Math.imul(e+1,374761393)^Math.imul(t+1,668265263)^Math.imul(n+1,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/2147483647-1}var ip=3,ap=Math.PI*2,op=1e-8,sp=0,cp=1,lp=2,up=3,dp=4,fp=5,pp=6;function mp(e){return e.flockCount*e.birdsPerFlock}function hp(e){return e.flockCount*e.birdsPerFlock*Z.birdPointsPerBird}function gp(e){let{birds:t}=e,n=Z,r=t.flockCount*t.birdsPerFlock,i=_p(t.flockCount,t.birdsPerFlock),a=yp(i),o=new Float32Array(hp(t)*ip),s=new Float32Array(r*Z.birdBodyValuesPerBird),c=new Float32Array(r*ip),l=new Float32Array(r),u=new Float32Array(r),d=Array.from({length:t.flockCount},()=>({x:e.initialPlayerX,z:e.initialPlayerZ})),f=new Float32Array(t.flockCount),p=new Float32Array(t.flockCount*ip),m=0;for(let e=0;e<r;e+=1){let t=e*ip,r=Q(e,sp)*ap,i=Math.sqrt(Q(e,cp))*n.birdScatter.radiusMeters;c[t]=Math.cos(r)*i,c[t+1]=(Q(e,lp)*2-1)*n.birdScatter.heightMeters,c[t+2]=Math.sin(r)*i,l[e]=n.birdFlapFrequency.minHertz+Q(e,up)*(n.birdFlapFrequency.maxHertz-n.birdFlapFrequency.minHertz),u[e]=Q(e,dp)*ap}for(let e=0;e<t.flockCount;e+=1)f[e]=Q(e,fp)*ap;let h=!1,g=()=>{for(let n=0;n<t.flockCount;n+=1)xp({options:e,flockIndex:n,flockSize:i[n]??0,firstBirdIndex:a[n]??0,anchor:d[n]??{x:0,z:0},orbitAngle:f[n]??0,elapsedSeconds:m,worldPositions:o,bodyStream:s,hasFlown:h,flockCenters:p,scatterOffsets:c,flapFrequencies:l,flapPhases:u});h=!0};return g(),{getWorldPositions:()=>o,getBodyStream:()=>s,getFlockCenters:()=>p,update:(e,r,i)=>{if(!(e<=0)){m+=e;for(let a=0;a<t.flockCount;a+=1){let o=d[a];o&&(o.x+=(r-o.x)*n.birdAnchorFollowRate,o.z+=(i-o.z)*n.birdAnchorFollowRate,f[a]=(f[a]??0)+t.flightSpeedMetersPerSecond/bp(a,t.flockCount)*e)}g()}}}}function _p(e,t){let n=e*t,{birdFlockSizeVariation:r,minBirdsPerFlock:i}=Z,a=Math.min(i,Math.floor(n/e)),o=Array.from({length:e},(e,t)=>1+(Q(t,pp)-.5)*2*r),s=o.reduce((e,t)=>e+t,0),c=o.map(e=>Math.max(a,Math.round(n*e/s))),l=n-c.reduce((e,t)=>e+t,0);for(;l!==0;){let e=Math.sign(l),t=vp(c,e,a);if(t===-1)break;c[t]=(c[t]??0)+e,l-=e}return c}function vp(e,t,n){let r=-1,i=-1;return e.forEach((e,a)=>{t<0&&e<=n||e>i&&(i=e,r=a)}),r}function yp(e){let t=[],n=0;for(let r of e)t.push(n),n+=r;return t}function bp(e,t){let{birdOrbitRadius:n}=Z,r=t<=1?0:e/(t-1);return n.minMeters+(n.maxMeters-n.minMeters)*r}function xp(e){let{birds:t,groundYAt:n}=e.options,r=Z,i=bp(e.flockIndex,t.flockCount),a=e.anchor.x+Math.cos(e.orbitAngle)*i,o=e.anchor.z+Math.sin(e.orbitAngle)*i,s=Math.atan2(-Math.sin(e.orbitAngle),Math.cos(e.orbitAngle)),c=r.birdWingSpanMeters/2,l=e.flockIndex*ip;e.flockCenters[l]=a,e.flockCenters[l+1]=n(a,o)+t.flightHeightMeters,e.flockCenters[l+2]=o;for(let i=0;i<e.flockSize;i+=1){let l=e.firstBirdIndex+i,u=l*ip,d=a+(e.scatterOffsets[u]??0),f=o+(e.scatterOffsets[u+2]??0),p=n(d,f)+t.flightHeightMeters+(e.scatterOffsets[u+1]??0),m=e.elapsedSeconds*(e.flapFrequencies[l]??6)*ap+(e.flapPhases[l]??0),h=Math.sin(m),g=h*r.birdFlapAmplitudeMeters,_=l*r.birdBodyValuesPerBird,v=Sp({bodyStream:e.bodyStream,bodyOffset:_,bodyX:d,bodyZ:f,hasFlown:e.hasFlown,tangentHeading:s}),y=-Math.cos(v),b=Math.sin(v);e.bodyStream[_]=d,e.bodyStream[_+1]=p,e.bodyStream[_+2]=f,e.bodyStream[_+3]=v,e.bodyStream[_+4]=h;let x=l*r.birdPointsPerBird*ip;e.worldPositions[x]=d,e.worldPositions[x+1]=p,e.worldPositions[x+2]=f,e.worldPositions[x+3]=d+y*c,e.worldPositions[x+4]=p+g,e.worldPositions[x+5]=f+b*c,e.worldPositions[x+6]=d-y*c,e.worldPositions[x+7]=p+g,e.worldPositions[x+8]=f-b*c}}function Sp(e){if(!e.hasFlown)return e.tangentHeading;let t=e.bodyStream[e.bodyOffset+3]??0,n=e.bodyX-(e.bodyStream[e.bodyOffset]??0),r=e.bodyZ-(e.bodyStream[e.bodyOffset+2]??0);return n*n+r*r<op?t:Math.atan2(n,r)}var Cp=`/*
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
`,wp=`/*
 * Purpose: Clip a fly point primitive to a circular speck shape.
 * Context: Flies read as small round insects instead of square points.
 * Responsibility: Discard only point fragments outside the circle.
 * Boundary: Color, swarm simulation, and material lifecycle stay elsewhere.
 */

void discardOutsideFlySwarmCircle() {
  vec2 centerOffset = gl_PointCoord - vec2(0.5);
  if (dot(centerOffset, centerOffset) > 0.25) discard;
}
`,Tp=`#include <common>`,Ep=`#include <clipping_planes_fragment>`,Dp=`#include <logdepthbuf_vertex>`,Op=`motion-fly-material-v4`;function kp(e,t){let n=new re({color:e.flyColor,size:e.flySizeMeters,sizeAttenuation:!0});return n.onBeforeCompile=e=>{e.uniforms.motionSenseFade=t??{value:1},e.vertexShader=e.vertexShader.replace(Tp,`${Tp}\nuniform float motionSenseFade;\nattribute float flyArrival;\nattribute float flySenseArrival;\n${Cp}`).replace(Dp,`gl_PointSize *= flySenseArrivalScale(motionSenseFade, flySenseArrival) * flyArrival;\n${Dp}`),e.fragmentShader=e.fragmentShader.replace(Tp,`${Tp}\n${wp}`).replace(Ep,`${Ep}\ndiscardOutsideFlySwarmCircle();`)},n.customProgramCacheKey=()=>Op,n}var Ap=Math.PI*2,jp=8,Mp=9;function Np(e){return Array.from({length:e},()=>({x:0,y:0,z:0,groundSlopeX:0,groundSlopeZ:0}))}function Pp(e,t,n,r,i){for(let a=0;a<e.length;a+=1)Fp(e,a,t,n,r,i)}function Fp(e,t,n,r,i,a){let o=e[t];if(!o)return;let s=zp(t,e.length);for(let e=0;e<Z.placementAttemptsPerAnchor;e+=1){let c=Q(t,jp,r,e)*Ap,l=s.minMeters+Math.sqrt(Q(t,Mp,r,e))*(s.maxMeters-s.minMeters);if(o.x=i+Math.cos(c)*l,o.z=a+Math.sin(c)*l,n.zoneAt(o.x,o.z)!==`water`)break}Rp(n.groundYAt,o.x,o.z),o.y=Lp.height+Z.groundClearanceMeters,o.groundSlopeX=Lp.slopeX,o.groundSlopeZ=Lp.slopeZ}function Ip(e,t){Rp(t,e.x,e.z);let n=Z.anchorGroundFollowRate,r=Lp.height+Z.groundClearanceMeters;e.y+=(r-e.y)*n,e.groundSlopeX+=(Lp.slopeX-e.groundSlopeX)*n,e.groundSlopeZ+=(Lp.slopeZ-e.groundSlopeZ)*n}var Lp={height:0,slopeX:0,slopeZ:0};function Rp(e,t,n){let r=Z.groundSlopeSampleMeters;Lp.height=e(t,n),Lp.slopeX=(e(t+r,n)-e(t-r,n))/(2*r),Lp.slopeZ=(e(t,n+r)-e(t,n-r))/(2*r)}function zp(e,t){let{nearRing:n,farRing:r}=Z,i=t<=1?0:e/(t-1);return{minMeters:n.minMeters+(r.minMeters-n.minMeters)*i,maxMeters:n.maxMeters+(r.maxMeters-n.maxMeters)*i}}var Bp=3,Vp=Math.PI*2,Hp=20,Up=21,Wp=22,Gp=23,Kp=24,qp=25,Jp=26,Yp=27,Xp=28,Zp=29,Qp=30,$p=31,em=32,tm=977,nm=1.8;function rm(e){return Array.from({length:e},(e,t)=>im(t))}function im(e){let{swarmRadiusMeters:t,swarmHeightMeters:n,swarmShape:r}=Z,i=t*am(e,Hp),a=n*am(e,Up),o=t*am(e,Wp),s=Q(e,Gp)*Vp;return{radiusX:i,radiusY:a,radiusZ:o,yawCos:Math.cos(s),yawSin:Math.sin(s),lobes:Array.from({length:r.lobesPerSwarm},(t,n)=>om(e,n,i,a,o))}}function am(e,t){let{minAxisScale:n,maxAxisScale:r}=Z.swarmShape;return n+Q(e,t)*(r-n)}function om(e,t,n,r,i){let a=Z.swarmShape,o=e*tm+t,s=(t/a.lobesPerSwarm+(Q(o,Kp)-.5)*a.lobeAngleJitter/a.lobesPerSwarm)*Vp,c=a.lobeOffsetFraction*(.35+Q(o,qp)*.65),l=Z.swarmShape.lobeDriftRate;return{restX:Math.cos(s)*c*n,restY:(Q(o,Jp)*2-1)*c*r,restZ:Math.sin(s)*c*i,spread:a.minLobeSpread+Q(o,Yp)*(a.maxLobeSpread-a.minLobeSpread),driftMeters:a.lobeDriftFraction*n,driftHertz:l.minHertz+Q(o,Xp)*(l.maxHertz-l.minHertz),driftPhase:Q(o,Zp)*Vp}}function sm(e){return e*Z.swarmShape.lobesPerSwarm}function cm(e,t){let{lobesPerSwarm:n}=Z.swarmShape;return Math.min(n-1,Math.floor(Q(e,t)*n))}function lm(e,t){return e*Z.swarmShape.lobesPerSwarm+t}function um(e,t,n){let{lobesPerSwarm:r}=Z.swarmShape;for(let i=0;i<e.length;i+=1){let a=e[i];if(a)for(let e=0;e<r;e+=1){let r=a.lobes[e];if(!r)continue;let o=Vp*r.driftHertz*t+r.driftPhase,s=r.restX+Math.sin(o)*r.driftMeters,c=r.restY+Math.sin(o*1.31)*r.driftMeters*.35,l=r.restZ+Math.cos(o*.83)*r.driftMeters,u=lm(i,e)*Bp;n[u]=s*a.yawCos-l*a.yawSin,n[u+1]=c,n[u+2]=s*a.yawSin+l*a.yawCos}}}function dm(e,t,n,r,i){let a=e.lobes[t];if(!a){i.x=0,i.y=0,i.z=0;return}let o=a.spread/Math.sqrt(r),s=a.restX+fm(n,Qp)*o*e.radiusX,c=a.restY+fm(n,$p)*o*e.radiusY,l=a.restZ+fm(n,em)*o*e.radiusZ;i.x=s*e.yawCos-l*e.yawSin,i.y=c,i.z=s*e.yawSin+l*e.yawCos}function fm(e,t){let n=np(e,t);return Math.max(-1.8,Math.min(nm,n))}function pm(e,t,n,r,i,a){ym(e,n,r,i,_m);let o=vm(_m);bm(e,_m,t*(o<=1?Z.swarmCorePull:mm(Math.sqrt(o))),a)}function mm(e){let t=Z;if(e<=1)return t.swarmCorePull;let n=(e-1)/t.swarmRelaxRadii,r=t.swarmDriftPull+(t.swarmCorePull-t.swarmDriftPull)/(1+n),i=Math.max(0,e-t.swarmDissolveRadii);return(r+t.swarmRecapturePull*i*i)/e}function hm(e,t,n,r,i){ym(e,t,n,r,_m);let a=vm(_m)/Z.swarmLobeReachRadii**2;bm(e,_m,Z.swarmLobePull/(1+a),i)}function gm(e,t){let{minimum:n,skewToHeld:r}=Z.flyBinding;return n+(1-n)*Q(e,t)**r}var _m={x:0,y:0,z:0};function vm(e){return e.x*e.x+e.y*e.y+e.z*e.z}function ym(e,t,n,r,i){i.x=(t*e.yawCos+r*e.yawSin)/e.radiusX,i.y=n/e.radiusY,i.z=(-t*e.yawSin+r*e.yawCos)/e.radiusZ}function bm(e,t,n,r){let i=t.x*n/e.radiusX,a=t.y*n/e.radiusY,o=t.z*n/e.radiusZ;r.x-=i*e.yawCos-o*e.yawSin,r.y-=a,r.z-=i*e.yawSin+o*e.yawCos}var xm=3,Sm=Math.PI*2,Cm=0,wm=1,Tm=3,Em=4,Dm=5,Om=6,km=7,Am=8,jm=12,Mm=16,Nm=.8,Pm=.9,Fm=1.25,Im=.18,Lm=.35;function Rm(e){let{parameters:t}=e,{swarmCount:n,fliesPerSwarm:r}=t.swarms,a=n*r,o=new Float32Array(a*xm),s=new Float32Array(a*xm),c=new Float32Array(a*xm),l=new Float32Array(a),u=new Float32Array(a),d=new Float32Array(a),f=new Int32Array(a),p=new Float32Array(a),m=rm(n),h=new Float32Array(sm(n)*xm),g=Np(n),_=new Float32Array(n*xm),v={x:e.initialPlayerX,z:e.initialPlayerZ},y=0,b=0;Um(e,m,{localPositions:o,velocities:s,phases:l,frequencies:u,strengths:d,lobeSlots:f,bindings:p}),Pp(g,e,y,v.x,v.z);let x=new U(c,xm);x.setUsage(i);let S=new Float32Array(a).fill(1),C=new U(S,1);C.setUsage(i);let w=new Float32Array(a);for(let e=0;e<a;e+=1)w[e]=Q(e,Am);let T=zm(n),E=new bt;E.setAttribute(`position`,x),E.setAttribute(`flyArrival`,C),E.setAttribute(`flySenseArrival`,new U(w,1));let D=new A(E,kp(t.appearance,e.senseFadeUniform));D.frustumCulled=!1;let O={localPositions:o,velocities:s,worldPositions:c,phases:l,frequencies:u,strengths:d,lobeSlots:f,bindings:p,lobeCentres:h,shapes:m,anchors:g};return Qm(e,O,x),{points:D,getWorldPositions:()=>c,readSwarmCenters:()=>(g.forEach((e,t)=>{let n=t*xm;_[n]=e.x,_[n+1]=e.y,_[n+2]=e.z}),_),update:(t,n,i)=>{let a=n-v.x,o=i-v.z,s=Z.reanchorDistanceMeters;a*a+o*o>s**2&&(y+=1,v.x=n,v.z=i,Bm(T,y,n,i)),!(t<=0)&&(Vm(T,e,g,t)&&Hm(T,r,S,C),b+=t,Gm(e,O,t,b),Qm(e,O,x))},dispose:()=>{E.dispose(),D.material.dispose()}}}function zm(e){return Array.from({length:e},()=>({arrival:1,target:1,holdSeconds:0,pendingEpoch:-1,pendingX:0,pendingZ:0}))}function Bm(e,t,n,r){e.forEach((e,i)=>{e.target=0,e.holdSeconds=i*Z.swarmFadeStaggerSeconds,e.pendingEpoch=t,e.pendingX=n,e.pendingZ=r})}function Vm(e,t,n,r){let i=r/Z.swarmFadeSeconds,a=!1;return e.forEach((e,o)=>{if(e.holdSeconds>0){e.holdSeconds-=r;return}e.arrival!==e.target&&(e.arrival=Math.abs(e.target-e.arrival)<=i?e.target:e.arrival+Math.sign(e.target-e.arrival)*i,a=!0,!(e.pendingEpoch<0||e.arrival>0)&&(Fp(n,o,t,e.pendingEpoch,e.pendingX,e.pendingZ),e.pendingEpoch=-1,e.target=1))}),a}function Hm(e,t,n,r){e.forEach((e,r)=>{let i=r*t;n.fill(e.arrival,i,i+t)}),r.needsUpdate=!0}function Um({parameters:e},t,n){let{swarmCount:r,fliesPerSwarm:i,flightSpeedMultiplier:a}=e.swarms,o=Math.max(0,a),s={x:0,y:0,z:0};for(let e=0;e<r*i;e+=1){let r=e*xm,a=Math.floor(e/i),c=t[a],l=cm(e,Cm),u=gm(e,wm);n.lobeSlots[e]=lm(a,l),n.bindings[e]=u,s.x=0,s.y=0,s.z=0,c&&dm(c,l,e,u,s),n.localPositions[r]=s.x,n.localPositions[r+1]=s.y,n.localPositions[r+2]=s.z;let d=Q(e,Tm)*Sm,f=(Z.minFlightSpeed+Q(e,Em)*(Z.maxFlightSpeed-Z.minFlightSpeed))*o;n.velocities[r]=Math.cos(d)*f,n.velocities[r+1]=(Q(e,Em)-.5)*f,n.velocities[r+2]=Math.sin(d)*f,n.phases[e]=Q(e,Dm)*Sm,n.frequencies[e]=jm+Q(e,Om)*Mm,n.strengths[e]=Nm+Q(e,km)*Pm}}var Wm={x:0,y:0,z:0};function Gm({parameters:e},t,n,r){let i=Z,a=Math.max(0,e.swarms.flightSpeedMultiplier),o={fliesPerSwarm:e.swarms.fliesPerSwarm,speedScale:a,stepSeconds:Math.min(n,i.maxBoidStepSeconds),minSpeed:i.minFlightSpeed*a,maxSpeed:i.maxFlightSpeed*a,minLocalY:-i.groundClearanceMeters+Im,elapsedSeconds:r};um(t.shapes,r,t.lobeCentres);for(let e=0;e<t.anchors.length;e+=1){let n=t.shapes[e],r=t.anchors[e];if(!n||!r)continue;let i=e*o.fliesPerSwarm;for(let e=0;e<o.fliesPerSwarm;e+=1)Km(t,o,n,r,i,e)}}function Km(e,t,n,r,i,a){let o=i+a,s=o*xm,c=e.localPositions[s]??0,l=e.localPositions[s+1]??0,u=e.localPositions[s+2]??0;qm(e,t,o),Jm(e,t,i,a,c,l,u),Ym(e,n,o,c,l,u),pm(n,e.bindings[o]??1,c,l,u,Wm),Xm(),Zm(e,t,r,s,c,l,u)}function qm(e,t,n){let r=t.elapsedSeconds*(e.frequencies[n]??18)*t.speedScale+(e.phases[n]??0),i=Math.floor(r*Fm),a=e.strengths[n]??1;Wm.x=rp(n,0,i)*4.5*a,Wm.y=rp(n,1,i)*3.2*a,Wm.z=rp(n,2,i)*4.5*a}function Jm(e,t,n,r,i,a,o){let s=Math.min(Z.neighbourSamples,t.fliesPerSwarm-1);for(let c=0;c<s;c+=1){let s=(n+(r+1+c*31)%t.fliesPerSwarm)*xm,l=e.localPositions[s]??0,u=e.localPositions[s+1]??0,d=e.localPositions[s+2]??0,f=i-l,p=a-u,m=o-d,h=f*f+p*p+m*m;if(h<.025&&h>1e-6){let e=.025/h;Wm.x+=f*e,Wm.y+=p*e,Wm.z+=m*e}h<.8&&(Wm.x+=(l-i)*.025,Wm.y+=(u-a)*.018,Wm.z+=(d-o)*.025)}}function Ym(e,t,n,r,i,a){let o=(e.lobeSlots[n]??0)*xm;hm(t,r-(e.lobeCentres[o]??0),i-(e.lobeCentres[o+1]??0),a-(e.lobeCentres[o+2]??0),Wm)}function Xm(){let e=Wm.x*Wm.x+Wm.y*Wm.y+Wm.z*Wm.z;if(e<=Z.maxForce**2)return;let t=Z.maxForce/Math.sqrt(e);Wm.x*=t,Wm.y*=t,Wm.z*=t}function Zm(e,t,n,r,i,a,o){let s=(e.velocities[r]??0)+Wm.x*t.stepSeconds,c=(e.velocities[r+1]??0)+Wm.y*t.stepSeconds,l=(e.velocities[r+2]??0)+Wm.z*t.stepSeconds,u=Math.sqrt(s*s+c*c+l*l),d=Math.min(t.maxSpeed,Math.max(t.minSpeed,u));if(u>1e-4){let e=d/u;s*=e,c*=e,l*=e}let f=i+s*t.stepSeconds,p=o+l*t.stepSeconds,m=t.minLocalY+n.groundSlopeX*f+n.groundSlopeZ*p,h=a+c*t.stepSeconds,g=Math.max(m,h);h<m&&(c=Math.abs(c)*Lm),e.velocities[r]=s,e.velocities[r+1]=c,e.velocities[r+2]=l,e.localPositions[r]=f,e.localPositions[r+1]=g,e.localPositions[r+2]=p}function Qm(e,t,n){let{fliesPerSwarm:r}=e.parameters.swarms;for(let n=0;n<t.anchors.length;n+=1){let i=t.anchors[n];if(!i)continue;Ip(i,e.groundYAt);let a=n*r;for(let e=0;e<r;e+=1){let n=(a+e)*xm;t.worldPositions[n]=i.x+(t.localPositions[n]??0),t.worldPositions[n+1]=i.y+(t.localPositions[n+1]??0),t.worldPositions[n+2]=i.z+(t.localPositions[n+2]??0)}}n.addUpdateRange(0,t.worldPositions.length),n.needsUpdate=!0}var $m=`/*
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
`,eh=`/*
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
`,th=`#include <common>`,nh=`#include <begin_vertex>`,rh=`#include <project_vertex>`,ih=`#include <logdepthbuf_vertex>`,ah=`#include <clipping_planes_fragment>`,oh=`motion-trail-material-v1`;function sh({appearance:e,trail:t,intensity:n,senseFadeUniform:r}){let i={value:0},a={value:n},o={value:t.lifetimeFrames},s={value:t.expansionDistanceMeters},c={value:t.fadePower},l=new re({color:e.trailColor,size:e.trailSizeMeters,sizeAttenuation:!0,transparent:!0,depthWrite:!1,opacity:e.trailOpacity});return l.onBeforeCompile=e=>{e.uniforms.motionFrame=i,e.uniforms.motionIntensity=a,e.uniforms.motionSenseFade=r??{value:1},e.uniforms.motionLifetimeFrames=o,e.uniforms.motionExpansionMeters=s,e.uniforms.motionFadePower=c,e.vertexShader=ch(e.vertexShader),e.fragmentShader=lh(e.fragmentShader)},l.customProgramCacheKey=()=>oh,{pointsMaterial:l,setFrame:e=>{i.value=e}}}function ch(e){return e.replace(th,`${th}\n${eh}`).replace(nh,`${nh}\ntransformed = expandMotionTrailParticle(transformed);`).replace(rh,`${rh}\ngl_Position = getMotionTrailClipPosition(gl_Position);`).replace(ih,`gl_PointSize *= getMotionTrailSizeScale();\n${ih}`)}function lh(e){return e.replace(th,`${th}\n${$m}`).replace(ah,`${ah}\ndiscardOutsideMotionTrailCircle();\ndiffuseColor.a *= getMotionTrailAlpha();`)}var uh=3;function dh({pointCount:e,trail:t,appearance:n,intensity:r,senseFadeUniform:i}){let a=e*t.lifetimeFrames,o=new Float32Array(a*uh),s=new Float32Array(a*uh),c=new Float32Array(a),l=new Float32Array(a),u=hh(o,uh),d=hh(s,uh),f=hh(c,1),p=hh(l,1),m=new bt;m.setAttribute(`position`,u),m.setAttribute(`motionExpansionDirection`,d),m.setAttribute(`motionSpawnIntensity`,f),m.setAttribute(`motionSpawnFrame`,p);let h=sh({appearance:n,trail:t,intensity:r,senseFadeUniform:i}),g=new A(m,h.pointsMaterial);g.frustumCulled=!1;let _=0,v=new Float32Array(e*uh),y=!1;return{points:g,spawnFromWorldPoints:n=>{let r=_%t.lifetimeFrames*e;fh({worldPositions:n,pointCount:e,trail:t,slotStart:r,frame:_,previousPositions:v,previousReady:y,printedPositions:o,expansionDirections:s,spawnIntensities:c,spawnFrames:l}),y=!0,gh(u,r,e),gh(d,r,e),gh(f,r,e),gh(p,r,e),h.setFrame(_),_+=1},forgetHistory:()=>{y=!1},dispose:()=>{m.dispose(),h.pointsMaterial.dispose()}}}function fh(e){let[t,n,r]=_h(e.worldPositions,e.pointCount);for(let i=0;i<e.pointCount;i+=1)ph(e,i,t,n,r)}function ph(e,t,n,r,i){let{trail:a,slotStart:o,frame:s}=e,c=t*uh,l=(o+t)*uh,u=e.worldPositions[c]??0,d=e.worldPositions[c+1]??0,f=e.worldPositions[c+2]??0,p=mh(e,c,u,d,f);e.printedPositions[l]=u,e.printedPositions[l+1]=d,e.printedPositions[l+2]=f,vh(e.expansionDirections,l,u-n,d-r,f-i),e.spawnIntensities[o+t]=yh(t,a.density)?bh(p*a.motionGain):0,e.spawnFrames[o+t]=s}function mh(e,t,n,r,i){let a=e.previousReady?Math.hypot(n-(e.previousPositions[t]??0),r-(e.previousPositions[t+1]??0),i-(e.previousPositions[t+2]??0)):0;return e.previousPositions[t]=n,e.previousPositions[t+1]=r,e.previousPositions[t+2]=i,a}function hh(e,t){let n=new U(e,t);return n.setUsage(i),n}function gh(e,t,n){e.addUpdateRange(t*e.itemSize,n*e.itemSize),e.needsUpdate=!0}function _h(e,t){if(t===0)return[0,0,0];let n=0,r=0,i=0;for(let a=0;a<t;a+=1){let t=a*uh;n+=e[t]??0,r+=e[t+1]??0,i+=e[t+2]??0}return[n/t,r/t,i/t]}function vh(e,t,n,r,i){let a=Math.hypot(n,r,i);if(a<1e-6){e[t]=0,e[t+1]=1,e[t+2]=0;return}e[t]=n/a,e[t+1]=r/a,e[t+2]=i/a}function yh(e,t){if(t>=1)return!0;let n=Math.imul(e,2654435761)|0;return n=Math.imul(n^n>>>13,1274126177),(n>>>16&65535)/65536<t}function bh(e){return Math.min(1,Math.max(Z.trailIntensityFloor,e))}var xh=new Float32Array;function Sh(e){let t={value:1},n={currentResources:void 0,isActive:!1,hasBodyPresence:!0};return{module:{load:()=>wh(n,e,t),activate:()=>Eh(n,!0),update:t=>Th(n,e,t),deactivate:()=>Eh(n,!1),unload:()=>Oh(n,e)},setIntensity:e=>{t.value=e},setBodyPresence:e=>{n.hasBodyPresence=e>0,Dh(n)},readActorCenters:e=>Ch(n,e)}}function Ch(e,t){let n=e.currentResources;return n?t===`flies`?n.flySwarms.readSwarmCenters():n.birdFlocks?.getFlockCenters()??xh:xh}function wh(e,t,n){let{viewpoint:r,scene:i,parameters:a}=t,o=Rm({parameters:a,groundYAt:t.groundYAt,zoneAt:t.zoneAt,initialPlayerX:r.worldPosition.x,initialPlayerZ:r.worldPosition.z,senseFadeUniform:n}),s=[{source:o,trail:dh({pointCount:a.swarms.swarmCount*a.swarms.fliesPerSwarm,trail:a.trail,appearance:a.appearance,intensity:a.intensity,senseFadeUniform:n})}],c=a.birds?gp({birds:a.birds,groundYAt:t.groundYAt,initialPlayerX:r.worldPosition.x,initialPlayerZ:r.worldPosition.z}):void 0;c&&a.birds&&s.push({source:c,trail:dh({pointCount:hp(a.birds),trail:{...a.trail,lifetimeFrames:a.birds.trailLifetimeFrames},appearance:a.birds.appearance,intensity:a.intensity,senseFadeUniform:n})});let l=t.birdBody?.assets.get(Jf.id),u=c&&a.birds?.body&&t.birdBody&&l?Xf({scene:i,asset:l,appearance:a.birds.body,birdCount:mp(a.birds),effects:t.birdBody.effects}):void 0;o.points.visible=!1,i.add(o.points);for(let e of s)e.trail.points.visible=!1,i.add(e.trail.points);e.currentResources={flySwarms:o,birdFlocks:c,birdBodies:u,printers:s}}function Th(e,{viewpoint:t},n){let r=e.currentResources;if(r){r.flySwarms.update(n,t.worldPosition.x,t.worldPosition.z),r.birdFlocks?.update(n,t.worldPosition.x,t.worldPosition.z),r.birdFlocks&&r.birdBodies&&r.birdBodies.update(r.birdFlocks.getBodyStream());for(let e of r.printers)e.trail.spawnFromWorldPoints(e.source.getWorldPositions())}}function Eh(e,t){let n=e.currentResources;if(n){n.flySwarms.points.visible=t;for(let e of n.printers)e.trail.points.visible=t;e.isActive=t,Dh(e)}}function Dh(e){e.currentResources?.birdBodies?.setVisible(e.isActive&&e.hasBodyPresence)}function Oh(e,t){let n=e.currentResources;if(!n)return;let r=t.scene;e.currentResources=void 0,n.birdBodies?.dispose(),t.birdBody&&pc(t.birdBody.assets),r.remove(n.flySwarms.points),n.flySwarms.dispose();for(let e of n.printers)r.remove(e.trail.points),e.trail.dispose()}var kh=3,Ah=Math.PI*2,jh=new W,Mh=12,Nh=13,Ph=14,Fh=15,Ih=16,Lh=17,Rh=14,zh=14,Bh=.06,Vh=.06;function Hh(e){let t={trail:void 0,worldPositions:new Float32Array(e.pointCount*kh),crossing:!1};return{load:()=>Uh(t,e),activate:()=>Kh(t,!0),update:()=>Wh(t,e),deactivate:()=>Kh(t,!1),unload:()=>qh(t,e.scene)}}function Uh(e,t){let{parameters:n}=t,r=dh({pointCount:t.pointCount,trail:n.trail,appearance:n.appearance,intensity:n.intensity});r.points.visible=!1,t.scene.add(r.points),e.trail=r}function Wh(e,t){let n=e.trail;if(!n)return;let r=jh,i=t.readCrossing(r);i===void 0?e.crossing=!1:(e.crossing||=(n.forgetHistory(),!0),Gh(e.worldPositions,t,r,i)),n.spawnFromWorldPoints(e.worldPositions)}function Gh(e,t,n,r){for(let i=0;i<t.pointCount;i+=1){let a=Q(i,Mh)*Ah,o=Math.sqrt(Q(i,Nh))*t.cloudRadiusMeters,s=(Q(i,Ph)*2-1)*t.cloudHeightMeters,c=Rh+Q(i,Fh)*zh,l=Q(i,Ih)*Ah,u=Bh+Q(i,Lh)*Vh,d=r*c+l,f=i*kh;e[f]=n.x+Math.cos(a)*o+Math.sin(d)*u,e[f+1]=n.y+s+Math.sin(d*1.47+l)*u*.7,e[f+2]=n.z+Math.sin(a)*o+Math.cos(d*1.83)*u}}function Kh(e,t){e.trail&&(e.trail.points.visible=t)}function qh(e,t){let n=e.trail;n&&(e.trail=void 0,t.remove(n.points),n.dispose())}var $={chunkLevel:0,buildChunkRadius:2,gatherChunkRadius:3,neighborsPerNode:2,soilNodesPerSquareMeter:.5,nodeSlotCapacity:192,edgeSlotCapacity:384,animalLinkCapacity:4,surfaceRootDepthMeters:.02,soilMinimumDepthMeters:.35,soilDepthSpanMeters:3.5,soilDepthBias:1.8,webFadeBandMeters:12,edgeBaseWidthMeters:.26,edgeWeightWidthSpanMeters:.18,filamentWidthFraction:.18,edgeSegments:8,wobbleAmplitudeMeters:.5,pulseLengthFraction:.25,knotSpacingMeters:2.5,nodeBaseSizeMeters:.22,nodePixelScale:300,animalLinkHysteresis:1.25,webRenderOrder:-1,soilBareOpacity:.5,soilCoveredOpacity:.9,growthNearDistanceMeters:6,growthFarFraction:.3,animationLoopSeconds:60,edgeFadeSeconds:.6},Jh=`/*
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
`,Yh=`/*
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
`,Xh=`/*
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
`,Zh=`/*
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
`,Qh=3,$h=4294967296,eg=-1;function tg(e,t){let{animalLinkCapacity:n,nodeSlotCapacity:r,edgeSlotCapacity:i}=$,a=t.gatherSlotCount*r,o=n+t.buildSlotCount*i,s=new ge,{positions:c,indices:l}=sg($.edgeSegments);s.setAttribute(`position`,new U(c,Qh)),s.setIndex(l);let u=ug(o,3),d=ug(o,3),f=ug(o,3),p=ug(o,1),m=ug(o,1),h=ug(o,1);s.setAttribute(`edgeStart`,u),s.setAttribute(`edgeEnd`,d),s.setAttribute(`edgeColor`,f),s.setAttribute(`edgeWeight`,p),s.setAttribute(`edgePhase`,m),s.setAttribute(`edgeUpload`,h),s.instanceCount=o;let g=new G(s,cg(Yh,Jh,e)),_=new bt,v=dg(a,3),y=dg(a,3),b=dg(a,1);return b.array.fill(eg),_.setAttribute(`position`,v),_.setAttribute(`nodeColor`,y),_.setAttribute(`nodeWeight`,b),_.setDrawRange(0,a),{edges:g,nodes:new A(_,cg(Zh,Xh,e)),edgeStartAttribute:u,edgeEndAttribute:d,edgeColorAttribute:f,edgeWeightAttribute:p,edgePhaseAttribute:m,edgeUploadAttribute:h,nodePositionAttribute:v,nodeColorAttribute:y,nodeWeightAttribute:b,animalTargetNodes:new Int32Array($.animalLinkCapacity).fill(-1)}}function ng(e){return e*$.nodeSlotCapacity}function rg(e,t,n,r,i,a){let{nodeSlotCapacity:o}=$,s=ng(t),c=e.nodePositionAttribute.array,l=e.nodeColorAttribute.array,u=e.nodeWeightAttribute.array;for(let e=0;e<o;e+=1){let t=(s+e)*Qh;if(e>=i){u[s+e]=eg;continue}let o=e*Qh,d=a[r[e]??0];c[t]=n[o]??0,c[t+1]=n[o+1]??0,c[t+2]=n[o+2]??0,lg(l,t,d),u[s+e]=d?.weight??0}_g(e,s,o)}function ig(e,t,n,r){let{animalLinkCapacity:i,edgeSlotCapacity:a}=$,o=i+t.buildSlotIndex*a,s=e.edgeStartAttribute.array,c=e.edgeEndAttribute.array,l=e.edgeColorAttribute.array,u=e.edgeWeightAttribute.array,d=e.edgePhaseAttribute.array,f=e.edgeUploadAttribute.array,p=Math.min(t.edgeCount,a);for(let e=0;e<a;e+=1){let i=(o+e)*Qh;if(e>=p){for(let e=0;e<Qh;e+=1)s[i+e]=0,c[i+e]=0;continue}let a=e*Qh;for(let e=0;e<Qh;e+=1)s[i+e]=t.edgeStarts[a+e]??0,c[i+e]=t.edgeEnds[a+e]??0;lg(l,i,n[t.edgeHubClasses[e]??0]),u[o+e]=t.edgeWeights[e]??0,d[o+e]=gg(t.edgeStarts,t.edgeEnds,e),f[o+e]=r}vg(e,o,a)}function ag(e,t,n,r){let{animalLinkCapacity:i,animalLinkHysteresis:a}=$,o=e.nodePositionAttribute.array,s=e.nodeWeightAttribute.array,c=Math.min(Math.floor(t.length/3),i);for(let l=0;l<i;l+=1){let u=t[l*3]??0,d=t[l*3+1]??0,f=t[l*3+2]??0,p=l>=c?-1:mg(o,s,u,d,f);if(p<0){e.animalTargetNodes[l]=-1,pg(e,l);continue}let m=e.animalTargetNodes[l]??-1,h=m>=0&&(s[m]??eg)>=0&&hg(o,m,u,d,f)<=hg(o,p,u,d,f)*a**2?m:p;e.animalTargetNodes[l]=h,fg(e.edgeStartAttribute,l,o,h);let g=e.edgeEndAttribute.array;g[l*3]=u,g[l*3+1]=d,g[l*3+2]=f;let _=e.edgeColorAttribute.array;_[l*3]=n.color.r,_[l*3+1]=n.color.g,_[l*3+2]=n.color.b,e.edgeWeightAttribute.array[l]=n.weight,e.edgePhaseAttribute.array[l]=l/i,e.edgeUploadAttribute.array[l]=r-$.edgeFadeSeconds}vg(e,0,i)}function og(e){e.edges.geometry.dispose(),e.edges.material.dispose(),e.nodes.geometry.dispose(),e.nodes.material.dispose()}function sg(e){let t=new Float32Array((e+1)*2*3),n=[];for(let r=0;r<=e;r+=1){let i=r/e,a=r*2*3;if(t[a]=i,t[a+1]=-1,t[a+3]=i,t[a+4]=1,r===0)continue;let o=r*2,s=o-2;n.push(s,o,s+1,o,o+1,s+1)}return{positions:t,indices:n}}function cg(e,t,n){return new j({vertexShader:e,fragmentShader:t,uniforms:n,transparent:!0,depthTest:!0,depthWrite:!1})}function lg(e,t,n){e[t]=n?.color.r??0,e[t+1]=n?.color.g??0,e[t+2]=n?.color.b??0}function ug(e,t){let n=new y(new Float32Array(e*t),t);return n.setUsage(i),n}function dg(e,t){let n=new U(new Float32Array(e*t),t);return n.setUsage(i),n}function fg(e,t,n,r){let i=e.array,a=r*Qh;i[t*3]=n[a]??0,i[t*3+1]=n[a+1]??0,i[t*3+2]=n[a+2]??0}function pg(e,t){let n=e.edgeStartAttribute.array,r=e.edgeEndAttribute.array;for(let e=0;e<3;e+=1)n[t*3+e]=0,r[t*3+e]=0}function mg(e,t,n,r,i){let a=-1,o=1/0;for(let s=0;s<t.length;s+=1){if((t[s]??eg)<0)continue;let c=hg(e,s,n,r,i);c>=o||(a=s,o=c)}return a}function hg(e,t,n,r,i){let a=t*Qh,o=(e[a]??0)-n,s=(e[a+1]??0)-r,c=(e[a+2]??0)-i;return o*o+s*s+c*c}function gg(e,t,n){let r=n*Qh,i=Math.imul(Math.round(e[r]??0),73856093);return i^=Math.imul(Math.round(e[r+2]??0),19349663),i^=Math.imul(Math.round(t[r]??0),83492791),i^=Math.imul(Math.round(t[r+2]??0),2971215073),i=Math.imul(i^i>>>16,2246822519),i=Math.imul(i^i>>>13,3266489917),(i>>>0)/$h}function _g(e,t,n){e.nodePositionAttribute.addUpdateRange(t*Qh,n*Qh),e.nodePositionAttribute.needsUpdate=!0,e.nodeColorAttribute.addUpdateRange(t*Qh,n*Qh),e.nodeColorAttribute.needsUpdate=!0,e.nodeWeightAttribute.addUpdateRange(t,n),e.nodeWeightAttribute.needsUpdate=!0}function vg(e,t,n){for(let r of[e.edgeStartAttribute,e.edgeEndAttribute,e.edgeColorAttribute])r.addUpdateRange(t*3,n*3),r.needsUpdate=!0;for(let r of[e.edgeWeightAttribute,e.edgePhaseAttribute,e.edgeUploadAttribute])r.addUpdateRange(t,n),r.needsUpdate=!0}var yg=4294967296,bg=0,xg=1,Sg=2;function Cg(e){return{sourceClass:`soil`,appendChunkAnchors:(t,n,r,i)=>{Tg(e,t,n,r,i)}}}function wg(e){return Math.round(e*e*$.soilNodesPerSquareMeter)}function Tg(e,t,n,r,i){let{soilMinimumDepthMeters:a,soilDepthSpanMeters:o,soilDepthBias:s}=$,c=t*r,l=n*r,u=wg(r);for(let d=0;d<u;d+=1){let u=c+Eg(t,n,d,bg)*r,f=l+Eg(t,n,d,xg)*r,p=a+Eg(t,n,d,Sg)**s*o;i(u,e.groundYAt(u,f)-p,f)}}function Eg(e,t,n,r){let i=Math.imul(e,73856093);return i^=Math.imul(t,19349663),i^=Math.imul(n+1,83492791),i^=Math.imul(r+1,2971215073),i=Math.imul(i^i>>>16,2246822519),i=Math.imul(i^i>>>13,3266489917),(i>>>0)/yg}var Dg=`/*
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
`,Og=`/*
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
`,kg=`connections-soil-opening-v3`;function Ag(e,t){let n={connectionsSoilOpening:e,connectionsSoilBareOpacity:{value:$.soilBareOpacity},connectionsSoilCoveredOpacity:{value:$.soilCoveredOpacity}};return{coverAt:t,applyTo:e=>{e.transparent=!0,yd(e,{cacheKey:kg,uniforms:n,vertexHeader:Og,vertexAnchor:`#include <begin_vertex>`,vertexCall:`passConnectionsSoil();`,fragmentHeader:Dg,colorFragmentCall:`openConnectionsSoil(diffuseColor);`})}}}function jg(){let e=new Worker(new URL(`/becoming-many-making-of/p/v3-finetuning/assets/topology.worker-DymyXG66.js`,``+import.meta.url),{type:`module`});return{postRequest:t=>e.postMessage(t,[t.own.positions.buffer,t.own.weights.buffer,t.own.classIndices.buffer,t.halo.positions.buffer,t.halo.weights.buffer,t.halo.classIndices.buffer]),setResultHandler:t=>{e.onmessage=e=>t(e.data)},terminate:()=>e.terminate()}}var Mg=2,Ng=3,Pg=[`vegetation`,`scentEmitters`,`animals`,`rocks`,`soil`],Fg=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function Ig(e,t){Yg(e);let n={value:0},r={value:0},i={value:e.intensity},a={connectionsTime:n,connectionsClock:r,connectionsIntensity:i,connectionsWebRadius:{value:e.webRadiusMeters},connectionsWebFadeBand:{value:$.webFadeBandMeters},connectionsPulseSpeed:{value:e.pulseSpeedMetersPerSecond},connectionsPulseLength:{value:$.pulseLengthFraction},connectionsEdgeBaseWidth:{value:$.edgeBaseWidthMeters},connectionsEdgeWidthSpan:{value:$.edgeWeightWidthSpanMeters},connectionsFilamentWidth:{value:$.filamentWidthFraction},connectionsWobbleAmplitude:{value:$.wobbleAmplitudeMeters},connectionsKnotSpacing:{value:$.knotSpacingMeters},connectionsGrowthNearDistance:{value:$.growthNearDistanceMeters},connectionsGrowthFarFraction:{value:$.growthFarFraction},connectionsEdgeFade:{value:$.edgeFadeSeconds},connectionsNodeBaseSize:{value:$.nodeBaseSizeMeters},connectionsNodePixelScale:{value:$.nodePixelScale},connectionsDepthColor:{value:new H(e.colors.depthColor)},connectionsPulseColor:{value:new H(e.colors.pulseColor)}},o=Jg(e),s=Ag(i,t.groundCoverAt),c={...t,staticSources:[...t.staticSources,Cg(t.worldSurface)]},l={currentStream:void 0,clockSeconds:0};return{module:{load:()=>Lg(l,o,a,c),activate:()=>Kg(l,!0),update:e=>{l.clockSeconds+=e,r.value=l.clockSeconds,n.value=(n.value+e)%$.animationLoopSeconds,Rg(l,o,c)},deactivate:()=>Kg(l,!1),unload:()=>qg(l,t.scene)},setIntensity:e=>{i.value=e},terrain:s}}function Lg(e,t,n,r){let i=new It({level:$.chunkLevel,radius:$.gatherChunkRadius}),a=new It({level:$.chunkLevel,radius:$.buildChunkRadius}),o=tg(n,{gatherSlotCount:i.slotCount,buildSlotCount:a.slotCount});o.edges.frustumCulled=!1,o.nodes.frustumCulled=!1,o.edges.visible=!1,o.nodes.visible=!1,o.edges.renderOrder=$.webRenderOrder,o.nodes.renderOrder=$.webRenderOrder,r.scene.add(o.edges),r.scene.add(o.nodes);let s=r.createTopologyPort?r.createTopologyPort():jg(),c=Gg(i.slotCount),l={staging:c,gatherWindow:i,buildWindow:a,web:o,topologyPort:s,slotJobKeys:Array.from({length:i.slotCount},()=>({})),buildAssignments:Array.from({length:a.slotCount}),buildPending:new Uint8Array(a.slotCount)};s.setResultHandler(n=>Wg(e,t,n)),e.currentStream=l;let{x:u,z:d}=r.viewpoint.worldPosition;for(let e of i.update(u,d))Bg(l,c,t,r,e);for(let e of a.update(u,d))l.buildAssignments[e.slotIndex]=e,l.buildPending[e.slotIndex]=1;Vg(l,c)}function Rg(e,t,n){let r=e.currentStream;if(!r)return;let{staging:i}=r,{x:a,z:o}=n.viewpoint.worldPosition;for(let e of r.gatherWindow.update(a,o))i.isGathered[e.slotIndex]=0,n.streamQueue.enqueue(zg(r,i,t,n,e));for(let e of r.buildWindow.update(a,o))r.buildAssignments[e.slotIndex]=e,r.buildPending[e.slotIndex]=1;Vg(r,i);let s=t[Mg];n.animalSource&&s&&ag(r.web,n.animalSource.getWorldPositions(),s,e.clockSeconds)}function zg(e,t,n,r,i){return{key:e.slotJobKeys[i.slotIndex]??{},priority:0,isCurrent:()=>e.gatherWindow.isCurrent(i),runStep:()=>(Bg(e,t,n,r,i),!0)}}function Bg(e,t,n,r,i){let{nodeSlotCapacity:a}=$,o=zt($.chunkLevel),s=ng(i.slotIndex),c=0,l=0;for(let e of r.staticSources){let r=Pg.indexOf(e.sourceClass),u=r>=0?n[r]:void 0;if(r<0||!u)continue;let d=e.sourceClass===`soil`?0:$.surfaceRootDepthMeters;e.appendChunkAnchors(i.chunkX,i.chunkZ,o,(e,n,i)=>{if(c>=a){l+=1;return}let o=(s+c)*Ng;t.positions[o]=e,t.positions[o+1]=n-d,t.positions[o+2]=i,t.classIndices[s+c]=r,t.weights[s+c]=u.weight,c+=1})}l>0&&console.warn(`Connections web dropped ${l} anchors beyond one chunk's node capacity`),t.slotNodeCounts[i.slotIndex]=c,t.gatheredChunkX[i.slotIndex]=i.chunkX,t.gatheredChunkZ[i.slotIndex]=i.chunkZ,t.isGathered[i.slotIndex]=1,rg(e.web,i.slotIndex,t.positions.subarray(s*Ng,(s+c)*Ng),t.classIndices.subarray(s,s+c),c,n)}function Vg(e,t){for(let n=0;n<e.buildPending.length;n+=1){if(e.buildPending[n]!==1)continue;let r=e.buildAssignments[n];if(!r)continue;let i=Hg(e,t,r.chunkX,r.chunkZ);if(i<0)continue;let a=[],o=!0;for(let[n,i]of Fg){let s=Hg(e,t,r.chunkX+n,r.chunkZ+i);if(s<0){o=!1;break}a.push(s)}o&&(e.topologyPort.postRequest({buildSlotIndex:n,revision:r.revision,own:Ug(t,[i]),halo:Ug(t,a),neighborsPerNode:$.neighborsPerNode,edgeCapacity:$.edgeSlotCapacity}),e.buildPending[n]=0)}}function Hg(e,t,n,r){let i=e.gatherWindow.slotIndexFor(n,r);return t.isGathered[i]!==1||t.gatheredChunkX[i]!==n||t.gatheredChunkZ[i]!==r?-1:i}function Ug(e,t){let n=0;for(let r of t)n+=e.slotNodeCounts[r]??0;let r=new Float32Array(n*Ng),i=new Float32Array(n),a=new Uint8Array(n),o=0;for(let n of t){let t=e.slotNodeCounts[n]??0,s=ng(n);r.set(e.positions.subarray(s*Ng,(s+t)*Ng),o*Ng),i.set(e.weights.subarray(s,s+t),o),a.set(e.classIndices.subarray(s,s+t),o),o+=t}return{positions:r,weights:i,classIndices:a,nodeCount:n}}function Wg(e,t,n){let r=e.currentStream;if(!r)return;let i=r.buildAssignments[n.buildSlotIndex];!i||i.revision!==n.revision||(n.droppedEdgeCount>0&&console.warn(`Connections web dropped ${n.droppedEdgeCount} edges beyond one chunk's capacity`),ig(r.web,n,t,e.clockSeconds))}function Gg(e){let t=e*$.nodeSlotCapacity;return{positions:new Float32Array(t*Ng),weights:new Float32Array(t),classIndices:new Uint8Array(t),slotNodeCounts:new Int32Array(e),gatheredChunkX:new Int32Array(e),gatheredChunkZ:new Int32Array(e),isGathered:new Uint8Array(e)}}function Kg(e,t){let n=e.currentStream;n&&(n.web.edges.visible=t,n.web.nodes.visible=t)}function qg(e,t){let n=e.currentStream;n&&(e.currentStream=void 0,t.remove(n.web.edges),t.remove(n.web.nodes),og(n.web),n.topologyPort.terminate())}function Jg(e){return Pg.map(t=>{let n=e.sources[t];return n?{color:new H(n.nodeColor),weight:n.weight}:void 0})}function Yg(e){if(!xd(e.intensity))throw RangeError(`Connections intensity must be between zero and one`);if(!bd(e.webRadiusMeters))throw RangeError(`Connections web radius must be positive and finite`);let t=$.buildChunkRadius*zt($.chunkLevel);if(e.webRadiusMeters>t)throw RangeError(`Connections web radius must stay within the ${t}-metre topology window coverage`);if(!Number.isFinite(e.pulseSpeedMetersPerSecond)||e.pulseSpeedMetersPerSecond<0)throw RangeError(`Connections pulse speed must be finite and non-negative`);let n=Object.values(e.sources).filter(e=>e!==void 0);if(n.length===0)throw RangeError(`Connections require at least one source class`);if(!n.every(e=>xd(e.weight)))throw RangeError(`Connections source weights must be between zero and one`)}var Xg=1e4,Zg=5;function Qg(e,t,n){let r=pu(e,n.cellX,n.cellZ,Zg);return t.minimumHeightMeters+(t.maximumHeightMeters-t.minimumHeightMeters)*r}function $g(e,t){return{...e,instancesPerHectareByZone:t.instancesPerHectareByZone}}function e_(e,t,n,r,i){let a=fu(r,t,e.seed,i),o=n.zoneAt(a.worldX,a.worldZ);if(o===`water`)return;let s=e.instancesPerHectareByZone[o],c=e.variantsByZone[o];if(s===void 0||!c)return;let l=pu(e.seed,a.cellX,a.cellZ,2);if(!t_(s,t.spacingMeters,l))return;let u=pu(e.seed,a.cellX,a.cellZ,3),d=n_(e.assets,c,u);return d?{candidate:a,model:d}:void 0}function t_(e,t,n){return n<e*t**2/Xg}function n_(e,t,n){let r=n*t.reduce((e,{weight:t})=>e+t,0);for(let n of t)if(r-=n.weight,r<=0)return e.find(({id:e})=>e===n.assetId)}function r_(e,t,n,r,i,a,o){i_(e,t,n,r,i,a,({candidate:e},t)=>o(e.worldX,t,e.worldZ))}function i_(e,t,n,r,i,a,o){let s=r/i.chunkSizeMeters,c=t.cellsPerSide/s;if(!Number.isInteger(s)||!Number.isInteger(c))throw RangeError(`Anchor requests must align with the placement chunk and candidate grid`);let l=Math.floor(i.chunkX/s),u=Math.floor(i.chunkZ/s),d={slotIndex:0,revision:0,chunkX:l,chunkZ:u,originX:l*r,originZ:u*r},f=(i.chunkX-l*s)*c,p=(i.chunkZ-u*s)*c;for(let r=p;r<p+c;r+=1)for(let i=f;i<f+c;i+=1){let s=e_(e,t,n,d,r*t.cellsPerSide+i);!s||!a(s.candidate)||o(s,n.groundYAt(s.candidate.worldX,s.candidate.worldZ))}}function a_(e,t,n){let r=new Set(e.assets.map(({id:e})=>e));if(r.size!==e.assets.length)throw Error(`${n} asset ids must be unique`);for(let t of e.assets)s_(t,n);du(t,e.candidateSpacingMeters),o_(e,r,n)}function o_(e,t,n){let r=Object.entries(e.instancesPerHectareByZone);for(let[i,a]of r){c_(a,e.candidateSpacingMeters,n);let r=e.variantsByZone[i];if(!r||r.length===0)throw Error(`${n} zone ${i} requires asset variants`);for(let e of r)l_(e,t,n)}}function s_(e,t){if(!(e.minimumHeightMeters>0&&e.maximumHeightMeters>=e.minimumHeightMeters))throw RangeError(`${t} heights must be positive and ordered`)}function c_(e,t,n){let r=e*t**2/Xg;if(!(Number.isFinite(r)&&r>=0&&r<=1))throw RangeError(`${n} density exceeds candidate-grid capacity`)}function l_(e,t,n){if(!t.has(e.assetId))throw Error(`Unknown ${n} asset: ${e.assetId}`);if(!(Number.isFinite(e.weight)&&e.weight>0))throw RangeError(`${n} variant weights must be positive`)}var u_=[{assetId:`rock-pack`,weight:1},{assetId:`rock-medium`,weight:1},{assetId:`rock-small`,weight:1},{assetId:`gold-rock`,weight:.1}],d_={seed:719,candidateSpacingMeters:8,assets:[{id:`rock-pack`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/rocks/rock-pack.glb`,objectName:`Rock_2`,minimumHeightMeters:.4,maximumHeightMeters:1},{id:`rock-medium`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/rocks/rock-medium.glb`,objectName:`Rock_Medium_2`,minimumHeightMeters:.5,maximumHeightMeters:1.2},{id:`rock-small`,url:`/becoming-many-making-of/p/v3-finetuning/rocks/rocks.glb`,objectName:`Rock_3`,minimumHeightMeters:.25,maximumHeightMeters:.65},{id:`gold-rock`,url:`/becoming-many-making-of/p/v3-finetuning/rocks/gold-rocks.glb`,objectName:`Resource_Gold_3`,minimumHeightMeters:.3,maximumHeightMeters:.8}],variantsByZone:{meadow:u_,coniferForest:u_,deciduousForest:u_,shrubSlope:u_}},f_=2;function p_(e,t){let n=$g(d_,e),r=zt(f_),i=du(r,n.candidateSpacingMeters);return{sourceClass:`rocks`,appendChunkAnchors:(e,a,o,s)=>r_(n,i,t,r,{chunkX:e,chunkZ:a,chunkSizeMeters:o},()=>!0,s)}}function m_(e,t,n){e.scene.updateMatrixWorld(!0);let r=e.scene.getObjectByName(t);if(!r)throw Error(`GLTF object not found: ${t}`);let i=[],a=new ht,o=g_(r.matrixWorld);if(r.traverse(e=>{if(!(e instanceof G))return;let t=o.clone().multiply(e.matrixWorld);i.push(v_(e,t,n)),y_(a,e.geometry,t)}),i.length===0)throw Error(`GLTF object contains no meshes: ${t}`);let s=a.max.y-a.min.y;if(!Number.isFinite(s)||s<=0)throw Error(`GLTF object has no measurable height: ${t}`);return{parts:i,height:s,minimumY:a.min.y,footprintRadius:h_(a)}}function h_(e){let t=Math.max(Math.abs(e.min.x),Math.abs(e.max.x)),n=Math.max(Math.abs(e.min.z),Math.abs(e.max.z));return Math.hypot(t,n)}function g_(e){let t=new _,n=new W;return e.decompose(new W,t,n),new B().compose(new W,t,n).multiply(e.clone().invert())}function __(e){for(let t of e.parts)b_(t)}function v_(e,t,n){let r=Array.isArray(e.material)?e.material.map(t=>gc(t,n?.(t,e.name))):gc(e.material,n?.(e.material,e.name));return{geometry:e.geometry,material:r,sourceMatrix:t}}function y_(e,t,n){t.boundingBox||t.computeBoundingBox(),t.boundingBox&&e.union(t.boundingBox.clone().applyMatrix4(n))}function b_(e){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.dispose()}var x_=16;function S_({name:e,sources:t,slotCount:n,maxInstancesPerSlot:r}){F_(t,n,r);let i=new Pt;i.name=e,i.visible=!1;let a=new Map;for(let e of t){let t=k_(e,n,r);for(let e of t.meshes)i.add(e);a.set(e.id,t)}return{group:i,variants:a,maxInstancesPerSlot:r,slotCount:n,modelMatrix:new B,partMatrix:new B,needsUpload:!1}}function C_(e,t){I_(e,t);for(let n of e.variants.values())n.stagingCounts[t]=0}function w_(e,t){I_(e,t);for(let n of e.variants.values())n.committedCounts[t]=0;e.needsUpload=!0}function T_(e,t,n,r){I_(e,n);let i=e.variants.get(t);if(!i)throw Error(`Unknown instanced model: ${t}`);let a=i.stagingCounts[n]??0;if(a>=e.maxInstancesPerSlot)return;let o=i.stagingMatrices[n];o&&(r.toArray(o,a*x_),i.stagingCounts[n]=a+1)}function E_(e,t){I_(e,t);for(let n of e.variants.values())j_(n,t);e.needsUpload=!0}function D_(e){if(e.needsUpload){for(let t of e.variants.values())M_(e,t);e.needsUpload=!1}}function O_(e){for(let t of e.variants.values()){for(let e of t.meshes)e.dispose();__(t.model)}e.group.clear()}function k_(e,t,n){let r=t*n,a=e.model.parts.map((t,n)=>{let a=new xe(t.geometry,t.material,r);return a.name=`${e.id}-${n}`,a.count=0,a.instanceMatrix.setUsage(i),a.frustumCulled=!1,a}),o=A_(t,n),s=A_(t,n);return{...e,meshes:a,committedMatrices:o,committedCounts:new Uint16Array(t),stagingMatrices:s,stagingCounts:new Uint16Array(t)}}function A_(e,t){return Array.from({length:e},()=>new Float32Array(t*x_))}function j_(e,t){let n=e.committedMatrices[t],r=e.stagingMatrices[t];!n||!r||(e.committedMatrices[t]=r,e.stagingMatrices[t]=n,e.committedCounts[t]=e.stagingCounts[t]??0)}function M_(e,t){let n=0;for(let r=0;r<t.committedCounts.length;r+=1)n=N_(e,t,r,n);for(let e of t.meshes)e.count=n,e.instanceMatrix.clearUpdateRanges(),n>0&&(e.instanceMatrix.addUpdateRange(0,n*x_),e.instanceMatrix.needsUpdate=!0)}function N_(e,t,n,r){let i=t.committedMatrices[n],a=t.committedCounts[n]??0;if(!i)return r;let o=r;for(let n=0;n<a;n+=1)e.modelMatrix.fromArray(i,n*x_),P_(e,t,o),o+=1;return o}function P_(e,t,n){for(let[r,i]of t.model.parts.entries()){let a=t.meshes[r];a&&(e.partMatrix.multiplyMatrices(e.modelMatrix,i.sourceMatrix),a.setMatrixAt(n,e.partMatrix))}}function F_(e,t,n){if(new Set(e.map(({id:e})=>e)).size!==e.length)throw Error(`Instanced model ids must be unique`);if(!Number.isInteger(t)||t<=0)throw RangeError(`Instanced model slotCount must be a positive integer`);if(!Number.isInteger(n)||n<=0||n>65535)throw RangeError(`Instanced model slot capacity is invalid`)}function I_(e,t){if(!Number.isInteger(t)||t<0||t>=e.slotCount)throw RangeError(`Instanced model slot is out of range: ${t}`)}var L_=Math.PI*2,R_=new W(0,1,0);function z_({parameters:e,colors:t,assets:n,chunkSize:r,chunkSlotCount:i,worldSurface:a,effects:o}){a_(e,r,`Rock`);let s=du(r,e.candidateSpacingMeters),c=e.assets.map((e,r)=>({id:e.id,model:m_(Z_(n,e.id),e.objectName,e=>B_(t,e.name,r))}));if(o)for(let{model:e}of c)for(let t of e.parts)Lt(o,t.material);return{parameters:e,worldSurface:a,candidateGrid:s,modelPool:S_({name:`Rocks`,sources:c,slotCount:i,maxInstancesPerSlot:s.candidateCount}),matrix:new B,position:new W,rotation:new _,scale:new W}}function B_(e,t,n){return t===`light`?e.lightColor:t===`dark`||n%2==0?e.darkColor:e.lightColor}function V_(e,t){for(let n of t){let t=H_(n);for(;!U_(e,t););}W_(e)}function H_(e){return{assignment:e,nextRow:0}}function U_(e,t){return t.nextRow===0&&C_(e.modelPool,t.assignment.slotIndex),q_(e,t.assignment,t.nextRow),t.nextRow+=1,t.nextRow<e.candidateGrid.cellsPerSide?!1:(E_(e.modelPool,t.assignment.slotIndex),!0)}function W_(e){D_(e.modelPool)}function G_(e,t){for(let n of t)w_(e.modelPool,n.slotIndex)}function K_(e){O_(e.modelPool)}function q_(e,t,n){let r=n*e.candidateGrid.cellsPerSide;for(let n=0;n<e.candidateGrid.cellsPerSide;n+=1)J_(e,t,r+n)}function J_(e,t,n){let r=e_(e.parameters,e.candidateGrid,e.worldSurface,t,n);r&&Y_(e,t,r.model,r.candidate)}function Y_(e,t,n,r){let i=e.modelPool.variants.get(n.id);if(!i)return;let a=X_(e,n,r)/i.model.height,o=e.worldSurface.groundYAt(r.worldX,r.worldZ)-i.model.minimumY*a;e.position.set(r.worldX,o,r.worldZ),e.rotation.setFromAxisAngle(R_,pu(e.parameters.seed,r.cellX,r.cellZ,4)*L_),e.scale.setScalar(a),e.matrix.compose(e.position,e.rotation,e.scale),T_(e.modelPool,n.id,t.slotIndex,e.matrix)}function X_(e,t,n){return Q_(t.minimumHeightMeters,t.maximumHeightMeters,pu(e.parameters.seed,n.cellX,n.cellZ,5))}function Z_(e,t){let n=e.get(t);if(!n)throw Error(`Rock asset not loaded: ${t}`);return n}function Q_(e,t,n){return e+(t-e)*n}var $_=2;function ev(e){let t={currentStream:void 0},n={...e,parameters:$g(d_,e.preset),colors:e.preset.colors};return{load:()=>tv(t,n),activate:()=>av(t,!0),update:()=>nv(t,n),deactivate:()=>av(t,!1),unload:()=>ov(t,n.scene,n.assets)}}function tv(e,t){let n=iv(t),r=n.chunkWindow.update(t.viewpoint.worldPosition.x,t.viewpoint.worldPosition.z);V_(n.instances,r),t.scene.add(n.instances.modelPool.group),e.currentStream=n}function nv(e,{viewpoint:t,streamQueue:n}){let r=e.currentStream;if(!r)return;W_(r.instances);let i=r.chunkWindow.update(t.worldPosition.x,t.worldPosition.z);G_(r.instances,i),W_(r.instances);for(let t of i){let i=rv(e,r,t);i&&n.enqueue(i)}}function rv(e,t,n){let r=t.slotJobKeys[n.slotIndex];if(!r)return;let i=H_(n);return{key:r,isCurrent:()=>e.currentStream===t&&t.chunkWindow.isCurrent(n),runStep:()=>U_(t.instances,i)}}function iv(e){let t=zt($_),n=Math.max(1,Math.ceil(e.viewpoint.viewDistanceMeters/t)),r=new It({level:$_,radius:n});return{chunkWindow:r,instances:z_({parameters:e.parameters,colors:e.colors,assets:e.assets,chunkSize:t,chunkSlotCount:r.slotCount,worldSurface:e.worldSurface,effects:e.effects}),slotJobKeys:Array.from({length:r.slotCount},()=>({}))}}function av(e,t){let n=e.currentStream;n&&(n.instances.modelPool.group.visible=t)}function ov(e,t,n){let r=e.currentStream;r&&(e.currentStream=void 0,t.remove(r.instances.modelPool.group),K_(r.instances),pc(n))}var sv=4294967296;function cv(){return{chunkX:0,chunkZ:0,sourceIndex:0,particleIndex:-1}}function lv(e,t){let n=Math.imul(e.chunkX,73856093);return n^=Math.imul(e.chunkZ,19349663),n^=Math.imul(e.sourceIndex+1,2971215073),n^=Math.imul(e.particleIndex+2,83492791),n^=Math.imul(t+1,1103515245),n=Math.imul(n^n>>>16,2246822519),n=Math.imul(n^n>>>13,3266489917),(n>>>0)/sv}var uv=2,dv=4,fv=.7,pv=4,mv=[`coniferForest`,`deciduousForest`],hv=2,gv=8;function _v(e,t){let n=zt(uv);return{sourceClass:`scentEmitters`,appendChunkAnchors:(r,i,a,o)=>{let s=n/a;if(!Number.isInteger(s)||s<1)throw RangeError(`Anchor requests must align with the clearing chunk grid`);let c=Math.floor(r/s),l=Math.floor(i/s),u={chunkX:c,chunkZ:l,originX:c*n,originZ:l*n},d=r*a,f=i*a,p={chunk:u,chunkSizeMeters:n,groundYAt:e,zoneAt:t,randomKey:{...cv(),chunkX:u.chunkX,chunkZ:u.chunkZ}};for(let e=0;e<dv;e+=1){let t=vv(p,e);t&&(t.worldX<d||t.worldX>=d+a||t.worldZ<f||t.worldZ>=f+a||o(t.worldX,t.worldY,t.worldZ))}}}}function vv(e,t){let{chunk:n,chunkSizeMeters:r,groundYAt:i,zoneAt:a,randomKey:o}=e;o.sourceIndex=t;for(let e=0;e<pv;e+=1){let t=gv+e*2,s=n.originX+lv(o,t)*r,c=n.originZ+lv(o,t+1)*r;if(mv.includes(a(s,c)))return{worldX:s,worldY:i(s,c)+fv+lv(o,hv)*.6000000000000001,worldZ:c}}}var yv=`/*
 * Purpose: Clip a Scent Particle point primitive to a circular puff shape.
 * Context: Scent signatures read as soft round clouds instead of square points.
 * Responsibility: Discard only point fragments outside the circle.
 * Boundary: Color, animation, fading, and material lifecycle stay elsewhere.
 */

void discardOutsideScentParticleCircle() {
  vec2 centerOffset = gl_PointCoord - vec2(0.5);
  if (dot(centerOffset, centerOffset) > 0.25) discard;
}
`,bv=`/*
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
`,xv={chunkLevel:2,preloadLayerCount:1,animationLoopSeconds:60,defaultIntensity:1},Sv=`/*
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
`,Cv=`#include <common>`,wv=`#include <begin_vertex>`,Tv=`#include <project_vertex>`,Ev=`#include <logdepthbuf_vertex>`,Dv=`#include <clipping_planes_fragment>`,Ov=`scent-particle-material-v2`,kv=`scent-trail-material-v1`;function Av(e,t,n){let r={value:0},i={value:new vt};return{pointsMaterial:Nv(e.sizeMeters),uniforms:{scentTime:r,scentIntensity:{value:Pv(e.intensity)},scentSenseFade:n??{value:1},scentDriftAmplitude:{value:t.driftAmplitudeMeters},scentWind:i},setTime:e=>{r.value=e},setWind:(e,t)=>i.value.set(e,t)}}function jv({appearance:e,motion:t,senseFadeUniform:n}){Fv(t.riseDurationSeconds);let r=Av(e,t,n),{pointsMaterial:i}=r,a={...r.uniforms,scentRiseDuration:{value:t.riseDurationSeconds}};return i.onBeforeCompile=e=>{Object.assign(e.uniforms,a),e.vertexShader=Lv(e.vertexShader,bv,{animate:`animateScentParticle`,clip:`getScentParticleClipPosition`,size:`getScentParticleSizeScale`}),e.fragmentShader=Rv(e.fragmentShader)},i.customProgramCacheKey=()=>Ov,{pointsMaterial:i,setTime:r.setTime,setWind:r.setWind}}function Mv({appearance:e,motion:t,animals:n,senseFadeUniform:r}){Iv(n.lifetimeSeconds);let i=Av(e,t,r),{pointsMaterial:a}=i,o={...i.uniforms,scentLoopSeconds:{value:xv.animationLoopSeconds},scentTrailLifetime:{value:n.lifetimeSeconds},scentTrailRiseHeight:{value:n.riseHeightMeters}};return a.onBeforeCompile=e=>{Object.assign(e.uniforms,o),e.vertexShader=Lv(e.vertexShader,Sv,{animate:`animateScentTrailParticle`,clip:`getScentTrailClipPosition`,size:`getScentTrailSizeScale`}),e.fragmentShader=Rv(e.fragmentShader)},a.customProgramCacheKey=()=>kv,{pointsMaterial:a,setTime:i.setTime,setWind:i.setWind}}function Nv(e){return new re({vertexColors:!0,size:e,sizeAttenuation:!0})}function Pv(e){return e??xv.defaultIntensity}function Fv(e){let t=xv.animationLoopSeconds;if(!(e>0&&Number.isInteger(t/e)))throw RangeError(`Scent rise duration must divide ${t} seconds evenly`)}function Iv(e){let t=xv.animationLoopSeconds;if(!(e>0&&e<=t))throw RangeError(`Scent trail lifetime must be above 0 and at most ${t} seconds`)}function Lv(e,t,n){return e.replace(Cv,`${Cv}\n${t}`).replace(wv,`${wv}\ntransformed = ${n.animate}(transformed);`).replace(Tv,`${Tv}\ngl_Position = ${n.clip}(gl_Position);`).replace(Ev,`gl_PointSize *= ${n.size}();\n${Ev}`)}function Rv(e){return e.replace(Cv,`${Cv}\n${yv}`).replace(Dv,`${Dv}\ndiscardOutsideScentParticleCircle();`)}var zv=3,Bv=0,Vv=1,Hv=3,Uv=5,Wv=Math.PI*2,Gv=.18;function Kv({parameters:e,plantSource:t,chunkSize:n,chunkSlotCount:r,senseFadeUniform:a}){let o=t.groupIds.map(t=>e.plants[t]),s=o.reduce((e,{particlesPerPlant:t})=>Math.max(e,t),0),c=t.maxPlantsPerChunk(n)*s,l=c*zv,u=new Float32Array(l*r),d=new Float32Array(l*r),f=new Float32Array(c*r),p=new Float32Array(c*r),m=new Float32Array(c*r),h=new U(u,zv),g=new U(d,zv),_=new U(f,1),v=new U(p,1),y=new U(m,1);h.setUsage(i),g.setUsage(i),_.setUsage(i),v.setUsage(i),y.setUsage(i);let b=new bt;b.setAttribute(`position`,h),b.setAttribute(`color`,g),b.setAttribute(`scentPhase`,_),b.setAttribute(`scentRise`,v),b.setAttribute(`scentVisible`,y);let x=jv({appearance:e.appearance,motion:e.motion,senseFadeUniform:a}),S=new A(b,x.pointsMaterial);return S.frustumCulled=!1,{points:S,material:x,parameters:e,plantSource:t,signatures:o,signatureColors:ny(o),particlesPerChunk:c,valuesPerChunk:l,chunkSize:n,renderedPositions:u,renderedColors:d,renderedPhases:f,renderedRises:p,renderedVisibility:m,positionAttribute:h,colorAttribute:g,phaseAttribute:_,riseAttribute:v,visibilityAttribute:y,randomKey:cv()}}var qv=256;function Jv(e){return{assignment:e,plants:[],gathered:!1,nextPlant:0,particleCursor:0}}function Yv(e,t){if(!t.gathered)return Xv(e,t),t.plants.length===0;let n=t.assignment.slotIndex*e.particlesPerChunk+e.particlesPerChunk,r=0;for(;t.nextPlant<t.plants.length&&r<qv;){let i=t.plants[t.nextPlant];if(t.nextPlant+=1,!i)continue;let a=e.signatures[i.groupIndex];if(!a)continue;let o=t.particleCursor+a.particlesPerPlant;o>n||(ey(e,t.assignment,{signature:a,groupIndex:i.groupIndex,plantIndex:t.nextPlant-1,firstParticleIndex:t.particleCursor,worldX:i.worldX,groundY:i.groundY,worldZ:i.worldZ,heightMeters:i.heightMeters}),t.particleCursor=o,r+=a.particlesPerPlant)}return t.nextPlant>=t.plants.length}function Xv(e,t){let{assignment:n}=t,r=n.slotIndex*e.particlesPerChunk;e.renderedVisibility.fill(0,r,r+e.particlesPerChunk),t.gathered=!0,t.particleCursor=r,e.plantSource.appendChunkPlants(n.chunkX,n.chunkZ,e.chunkSize,(e,n,r,i,a)=>{t.plants.push({worldX:e,groundY:n,worldZ:r,heightMeters:i,groupIndex:a})})}function Zv(e,t){for(let n of t){let t=Jv(n);for(;!Yv(e,t););}}function Qv(e,t){let n=t*e.particlesPerChunk,r=n*zv;e.positionAttribute.addUpdateRange(r,e.valuesPerChunk),e.colorAttribute.addUpdateRange(r,e.valuesPerChunk),e.phaseAttribute.addUpdateRange(n,e.particlesPerChunk),e.riseAttribute.addUpdateRange(n,e.particlesPerChunk),e.visibilityAttribute.addUpdateRange(n,e.particlesPerChunk),e.positionAttribute.needsUpdate=!0,e.colorAttribute.needsUpdate=!0,e.phaseAttribute.needsUpdate=!0,e.riseAttribute.needsUpdate=!0,e.visibilityAttribute.needsUpdate=!0}function $v(e){e.points.geometry.dispose(),e.points.material.dispose()}function ey(e,t,n){let{signature:r,heightMeters:i}=n,{randomKey:a}=e;a.chunkX=t.chunkX,a.chunkZ=t.chunkZ,a.sourceIndex=n.plantIndex;let o=n.groupIndex*zv,s=r.emissionRadiusFraction*i,c=r.emissionBottomFraction*i,l=(r.emissionTopFraction-r.emissionBottomFraction)*i;for(let t=0;t<r.particlesPerPlant;t+=1){let i=n.firstParticleIndex+t,u=i*zv;a.particleIndex=t;let d=lv(a,Bv),f=lv(a,Vv)*Wv,p=ty(a,s);e.renderedPositions[u]=n.worldX+Math.cos(f)*p,e.renderedPositions[u+1]=n.groundY+c+d*l,e.renderedPositions[u+2]=n.worldZ+Math.sin(f)*p;for(let t=0;t<zv;t+=1)e.renderedColors[u+t]=e.signatureColors[o+t]??0;e.renderedPhases[i]=lv(a,Uv),e.renderedRises[i]=r.riseHeightMeters,e.renderedVisibility[i]=1}}function ty(e,t){let n=Gv+.8200000000000001*lv(e,Hv);return Math.sqrt(n)*t}function ny(e){let t=new Float32Array(e.length*zv),n=new H;return e.forEach((e,r)=>{n.set(e.color);let i=r*zv;t[i]=n.r,t[i+1]=n.g,t[i+2]=n.b}),t}var ry=3,iy=0,ay=1,oy=3,sy=5,cy=8;function ly({parameters:e,animals:t,maxActorCount:n,senseFadeUniform:r}){let a=Math.ceil(t.printsPerSecond*t.lifetimeSeconds),o=Math.max(1,n*a),s=new Float32Array(o*ry),c=new Float32Array(o*ry),l=new Float32Array(o),u=new Float32Array(o),d=new Float32Array(o),f=new U(s,ry),p=new U(c,ry),m=new U(l,1),h=new U(u,1),g=new U(d,1);f.setUsage(i),p.setUsage(i),m.setUsage(i),h.setUsage(i),g.setUsage(i);let _=new bt;_.setAttribute(`position`,f),_.setAttribute(`color`,p),_.setAttribute(`scentPrintTime`,m),_.setAttribute(`scentPhase`,h),_.setAttribute(`scentVisible`,g);let v=Mv({appearance:e.appearance,motion:e.motion,animals:t,senseFadeUniform:r}),y=new A(_,v.pointsMaterial);y.frustumCulled=!1;let b=Object.keys(t.signatures);return{points:y,material:v,animals:t,capacity:o,speciesColors:gy(t,b),colorIndexBySpecies:new Map(b.map((e,t)=>[e,t])),printedPositions:s,printedColors:c,printTimes:l,printedPhases:u,printedVisibility:d,positionAttribute:f,colorAttribute:p,printTimeAttribute:m,phaseAttribute:h,visibilityAttribute:g,pendingPrints:new Float32Array(n),randomKey:cv(),printCursor:0,printCounter:0}}function uy(e,t,n,r){let i=e.printCursor,a=0;for(let i=0;i<t.length;i+=1){let o=t[i],s=e.pendingPrints[i];if(!o||s===void 0)break;let c=s+e.animals.printsPerSecond*r,l=Math.min(Math.floor(c),cy);e.pendingPrints[i]=c-Math.floor(c);let u=e.colorIndexBySpecies.get(o.speciesId);if(u!==void 0)for(let t=0;t<l;t+=1)fy(e,o,u,n),a+=1}a!==0&&py(e,i,a)}function dy(e){e.points.geometry.dispose(),e.points.material.dispose()}function fy(e,t,n,r){let{animals:i,randomKey:a}=e,o=e.printCursor;a.chunkX=e.printCounter,a.chunkZ=o;let s=o*ry,c=n*ry,l=i.emissionRadiusFraction*t.heightMeters,u=lv(a,iy),d=i.emissionBottomFraction+u*(i.emissionTopFraction-i.emissionBottomFraction);e.printedPositions[s]=t.x+hy(a,ay,l),e.printedPositions[s+1]=t.y+d*t.heightMeters,e.printedPositions[s+2]=t.z+hy(a,oy,l);for(let t=0;t<ry;t+=1)e.printedColors[s+t]=e.speciesColors[c+t]??0;e.printTimes[o]=r,e.printedPhases[o]=lv(a,sy),e.printedVisibility[o]=1,e.printCursor=(o+1)%e.capacity,e.printCounter+=1}function py(e,t,n){let r=Math.min(n,e.capacity-t);my(e,t,r),n>r&&my(e,0,n-r),e.positionAttribute.needsUpdate=!0,e.colorAttribute.needsUpdate=!0,e.printTimeAttribute.needsUpdate=!0,e.phaseAttribute.needsUpdate=!0,e.visibilityAttribute.needsUpdate=!0}function my(e,t,n){let r=t*ry,i=n*ry;e.positionAttribute.addUpdateRange(r,i),e.colorAttribute.addUpdateRange(r,i),e.printTimeAttribute.addUpdateRange(t,n),e.phaseAttribute.addUpdateRange(t,n),e.visibilityAttribute.addUpdateRange(t,n)}function hy(e,t,n){return(lv(e,t)+lv(e,t+1)-1)*n}function gy(e,t){let n=new Float32Array(t.length*ry),r=new H;return t.forEach((t,i)=>{let a=e.signatures[t];if(!a)return;r.set(a.color);let o=i*ry;n[o]=r.r,n[o+1]=r.g,n[o+2]=r.b}),n}function _y(e){let t={value:1},n={currentStream:void 0,trailField:void 0,timeSeconds:0,windSeconds:0,lastDeltaSeconds:0,active:!1};return{module:{load:()=>vy(n,e,t),activate:()=>wy(n,!0),update:t=>yy(n,e,t),deactivate:()=>wy(n,!1),unload:()=>Ty(n,e.scene)},setIntensity:e=>{t.value=e},observeActorBodies:e=>xy(n,e)}}function vy(e,t,n){let{viewpoint:r,scene:i,parameters:a,plantSource:o,maxActorCount:s}=t;if(o){let a=Ey(t,o,n),s=a.chunkWindow.update(r.worldPosition.x,r.worldPosition.z);Zv(a.particleField,s),a.particleField.points.visible=!1,i.add(a.particleField.points),e.currentStream=a}if(a.animals&&s){let t=ly({parameters:a,animals:a.animals,maxActorCount:s,senseFadeUniform:n});t.points.visible=!1,i.add(t.points),e.trailField=t}}function yy(e,{viewpoint:t,streamQueue:n,parameters:r},i){e.timeSeconds=(e.timeSeconds+i*r.motion.speedMultiplier)%xv.animationLoopSeconds,e.windSeconds=Bt(e.windSeconds+i),e.lastDeltaSeconds=i;let a=Rt(e.windSeconds),o=e.currentStream?.particleField.material;o&&(o.setTime(e.timeSeconds),by(o,a,r.motion.windResponseMeters));let s=e.trailField?.material;s&&r.animals&&(s.setTime(e.timeSeconds),by(s,a,r.animals.windResponseMeters));let c=e.currentStream;if(!c)return;let l=c.chunkWindow.update(t.worldPosition.x,t.worldPosition.z);for(let t of l){let r=Sy(e,c,t);r&&(n.enqueue(r)||Cy(c.particleField,t))}}function by(e,t,n){let r=t.strength*n;e.setWind(t.directionX*r,t.directionZ*r)}function xy(e,t){let n=e.trailField;!n||!e.active||uy(n,t,e.timeSeconds,e.lastDeltaSeconds)}function Sy(e,t,n){let r=t.slotJobKeys[n.slotIndex];if(!r)return;let i=Jv(n);return{key:r,isCurrent:()=>e.currentStream===t&&t.chunkWindow.isCurrent(n),runStep:()=>{let e=Yv(t.particleField,i);return e&&Qv(t.particleField,i.assignment.slotIndex),e}}}function Cy(e,t){let n=Jv(t);for(;!Yv(e,n););Qv(e,t.slotIndex)}function wy(e,t){e.active=t,e.currentStream&&(e.currentStream.particleField.points.visible=t),e.trailField&&(e.trailField.points.visible=t)}function Ty(e,t){let n=e.currentStream,r=e.trailField;e.currentStream=void 0,e.trailField=void 0,e.active=!1,n&&(t.remove(n.particleField.points),$v(n.particleField)),r&&(t.remove(r.points),dy(r))}function Ey({viewpoint:e,parameters:t},n,r){let i=zt(xv.chunkLevel),a=Math.ceil(e.viewDistanceMeters/i)+xv.preloadLayerCount,o=new It({level:xv.chunkLevel,radius:a});return{chunkWindow:o,particleField:Kv({parameters:t,plantSource:n,senseFadeUniform:r,chunkSize:i,chunkSlotCount:o.slotCount}),slotJobKeys:Array.from({length:o.slotCount},()=>({}))}}var Dy={seed:8123,chunkLevel:2,candidateSpacingMeters:16,lengthMeters:{minimum:1.6,maximum:2.4},ringCount:11,sideCount:6,girthProfile:[.55,.95,1,.98,.97,.96,.94,.88,.74,.5,.12],bodyRadiusMeters:.085,crawlSpeedMetersPerSecond:.52,crawlDistanceMeters:13,zoneWeights:{meadow:.18,coniferForest:.55,deciduousForest:.55,shrubSlope:1},maximumGroundFallMeters:3};function Oy(){let{ringCount:e,sideCount:t,girthProfile:n}=Dy,r=e*t,i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r);for(let r=0;r<e;r+=1){let s=r/(e-1),c=ky(n,s);for(let e=0;e<t;e+=1){let n=e/t*Math.PI*2,l=r*t+e,u=l*3;i[u]=Math.cos(n)*c,i[u+1]=Math.sin(n)*c*.62,i[u+2]=s,a[u]=Math.cos(n),a[u+1]=Math.sin(n),a[u+2]=0,o[l]=s}}let s=[];for(let n=0;n<e-1;n+=1)for(let e=0;e<t;e+=1){let r=(e+1)%t,i=n*t,a=(n+1)*t;s.push(i+e,a+e,i+r,i+r,a+e,a+r)}let c=new bt;return c.setAttribute(`position`,new U(i,3)),c.setAttribute(`normal`,new U(a,3)),c.setAttribute(`snakeAlongBody`,new U(o,1)),c.setIndex(s),c}function ky(e,t){let n=e.length-1,r=Math.min(t,1)*n,i=Math.min(n,Math.floor(r)),a=Math.min(n,i+1),o=r-i,s=e[i]??0;return s+((e[a]??s)-s)*o}var Ay=`/*
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
`,jy=`snake-slither-v1`,My=2,Ny=3,Py=4,Fy=5,Iy=6,Ly=new W(0,1,0),Ry=new B,zy=new W,By=new _,Vy=new W,Hy=.09,Uy=1.35,Wy=.9;function Gy(e){let t={currentStream:void 0,elapsedSeconds:0};return{load:()=>Ky(t,e),activate:()=>nb(t,!0),update:n=>qy(t,e,n),deactivate:()=>nb(t,!1),unload:()=>rb(t,e.scene)}}function Ky(e,t){let n=zt(Dy.chunkLevel),r=Math.max(1,Math.ceil(t.viewpoint.viewDistanceMeters/n)),a=new It({level:Dy.chunkLevel,radius:r}),o=du(n,Dy.candidateSpacingMeters),s=a.slotCount*o.candidateCount,c={value:0},l=Oy(),u=eb(t,c),d=new xe(l,u,s);d.name=`Snakes`,d.instanceMatrix.setUsage(i),d.count=0,d.visible=!1,d.frustumCulled=!1;let f=new y(new Float32Array(s),1);f.setUsage(i),l.setAttribute(`snakePhase`,f),t.scene.add(d);let p={chunkWindow:a,candidateGrid:o,mesh:d,phases:f,slotSnakes:Array.from({length:a.slotCount},()=>[]),slotJobKeys:Array.from({length:a.slotCount},()=>({})),crawling:[],timeUniform:c};e.currentStream=p;let m=a.update(t.viewpoint.worldPosition.x,t.viewpoint.worldPosition.z);for(let e of m)Yy(p,t,e);Zy(p),Qy(p,t,0)}function qy(e,t,n){let r=e.currentStream;if(r){e.elapsedSeconds+=n,r.timeUniform.value=e.elapsedSeconds;for(let n of r.chunkWindow.update(t.viewpoint.worldPosition.x,t.viewpoint.worldPosition.z)){let i=Jy(e,r,t,n);i&&t.streamQueue.enqueue(i)||(Yy(r,t,n),Zy(r))}Qy(r,t,e.elapsedSeconds)}}function Jy(e,t,n,r){let i=t.slotJobKeys[r.slotIndex];if(i)return{key:i,isCurrent:()=>e.currentStream===t&&t.chunkWindow.isCurrent(r),runStep:()=>(Yy(t,n,r),Zy(t),!0)}}function Yy(e,t,n){let r=e.slotSnakes[n.slotIndex];if(r){r.length=0;for(let i=0;i<e.candidateGrid.candidateCount;i+=1){let a=Xy(fu(n,e.candidateGrid,Dy.seed,i),t);a&&r.push(a)}}}function Xy(e,t){let n=t=>pu(Dy.seed,e.cellX,e.cellZ,t);if(n(My)>=t.preset.crawlingShare)return;let r=n(Ny)*Math.PI*2,i=Math.sin(r),a=Math.cos(r),o=$y(e.worldX,e.worldZ,i,a,t.worldSurface);if(o<=0||n(Iy)>=o)return;let{minimum:s,maximum:c}=Dy.lengthMeters;return{startX:e.worldX,startZ:e.worldZ,headingX:i,headingZ:a,heading:r,lengthMeters:s+n(Py)*(c-s),phase:n(Fy)}}function Zy(e){e.crawling.length=0;for(let t of e.slotSnakes)for(let n of t)e.crawling.push(n);for(let[t,n]of e.crawling.entries())e.phases.setX(t,n.phase);e.phases.needsUpdate=!0}function Qy(e,t,n){let{crawlSpeedMetersPerSecond:r,crawlDistanceMeters:i}=Dy;for(let[a,o]of e.crawling.entries()){let s=(n*r+o.phase*17)%i,c=o.startX+o.headingX*s,l=o.startZ+o.headingZ*s;zy.set(c,t.worldSurface.groundYAt(c,l)+Dy.bodyRadiusMeters,l),By.setFromAxisAngle(Ly,o.heading+Math.PI),Vy.set(Dy.bodyRadiusMeters,Dy.bodyRadiusMeters,o.lengthMeters),Ry.compose(zy,By,Vy),e.mesh.setMatrixAt(a,Ry)}e.mesh.count=e.crawling.length,e.mesh.instanceMatrix.needsUpdate=!0}function $y(e,t,n,r,i){let a=1/0,o=-1/0,s=1;for(let c=0;c<=4;c+=1){let l=c/4*Dy.crawlDistanceMeters,u=e+n*l,d=t+r*l,f=i.zoneAt(u,d),p=Dy.zoneWeights[f]??0;if(p<=0)return 0;s=Math.min(s,p);let m=i.groundYAt(u,d);a=Math.min(a,m),o=Math.max(o,m)}return o-a>Dy.maximumGroundFallMeters?0:s}function eb(e,t){let n=new nt({color:e.preset.color});return n.name=`snake-skin`,Lt(e.effects??[],n),yd(n,{cacheKey:jy,uniforms:{snakeTime:t,snakeWaveLengths:{value:Uy},snakeWaveSpeed:{value:Wy},snakeWaveAmplitude:{value:tb()}},vertexHeader:Ay,vertexAnchor:`#include <begin_vertex>`,vertexCall:`transformed = applySnakeSlither(transformed);`,fragmentHeader:``,colorFragmentCall:``}),n}function tb(){let{lengthMeters:e,bodyRadiusMeters:t}=Dy;return Hy*((e.minimum+e.maximum)/2)/t}function nb(e,t){e.currentStream&&(e.currentStream.mesh.visible=t)}function rb(e,t){let n=e.currentStream;if(!n)return;e.currentStream=void 0,t.remove(n.mesh),n.mesh.geometry.dispose();let r=Array.isArray(n.mesh.material)?n.mesh.material:[n.mesh.material];for(let e of r)e.dispose();n.mesh.dispose()}function ib(){return{material:new nt({colorWrite:!1}),segmentsPerSide:8}}var ab=3,ob=14674133;function sb({worldSurface:e,chunkSize:t,chunkSlotCount:n,segmentsPerSide:r,opacity:i,presentation:a,effects:o=[]}){let s=Math.min(Math.max(i,0),1),c=a?.material??new nt({color:ob});c.opacity=s,c.transparent=s<1;for(let e of o)e.applyTo(c);let l=a?.conditionsAt!==void 0,u=o.some(e=>e.warmthAt!==void 0),d=o.some(e=>e.coverAt!==void 0),f=new Pt,p=Array.from({length:n},()=>fb({chunkSize:t,segmentsPerSide:r,material:c,storesZoneConditions:l,storesThermalWarmth:u,storesGroundCover:d}));for(let e of p)f.add(e.mesh);return{group:f,worldSurface:e,chunkSize:t,segmentsPerSide:r,verticesPerSide:r+1,material:c,slots:p,presentation:a,effects:o}}function cb(e,t){for(let n of t){let t=lb(e,n);if(t)for(;!ub(e,t););}}function lb(e,t){let n=e.slots[t.slotIndex];if(n)return{assignment:t,slot:n,nextRow:0}}function ub(e,t){return mb(e,t,t.nextRow),t.nextRow+=1,t.nextRow<e.verticesPerSide?!1:(vb(e,t),!0)}function db(e){for(let t of e.slots)t.mesh.geometry.dispose();e.material.dispose()}function fb({chunkSize:e,segmentsPerSide:t,material:n,storesZoneConditions:r,storesThermalWarmth:a,storesGroundCover:s}){let c=new o(e,e,t,t);c.rotateX(-Math.PI/2),c.deleteAttribute(`normal`),c.deleteAttribute(`uv`);let l=c.getAttribute(`position`);if(!(l instanceof U))throw Error(`PlaneGeometry must provide a BufferAttribute position`);l.setUsage(i);let u=(t+1)**2,d=pb(u,4,r);d&&c.setAttribute(`zoneConditions`,d);let f=pb(u,1,a);f&&c.setAttribute(`thermalWarmth`,f);let p=pb(u,1,s);p&&c.setAttribute(`groundCover`,p);let m=new G(c,n);return m.visible=!1,{mesh:m,positionAttribute:l,zoneConditionsAttribute:d,thermalWarmthAttribute:f,groundCoverAttribute:p,stagedGroundHeights:new Float32Array(u)}}function pb(e,t,n){if(!n)return;let r=new g(e*t,t);return r.setUsage(i),r}function mb(e,t,n){let{assignment:r,slot:i}=t;for(let t=0;t<e.verticesPerSide;t+=1){let a=n*e.verticesPerSide+t,o=r.originX+t/e.segmentsPerSide*e.chunkSize,s=r.originZ+n/e.segmentsPerSide*e.chunkSize,c=e.worldSurface.groundYAt(o,s);i.stagedGroundHeights[a]=c,_b(e,i,a,o,s),hb(e,i,a,o,s,c),gb(e,i,a,o,s)}}function hb(e,t,n,r,i,a){let o=e.effects.find(e=>e.warmthAt!==void 0)?.warmthAt,s=t.thermalWarmthAttribute;!o||!s||s.setX(n,o(r,i,a))}function gb(e,t,n,r,i){let a=e.effects.find(e=>e.coverAt!==void 0)?.coverAt,o=t.groundCoverAttribute;!a||!o||o.setX(n,a(r,i))}function _b(e,t,n,r,i){let a=e.presentation?.conditionsAt,o=t.zoneConditionsAttribute;if(!a||!o)return;let s=a(r,i);o.setXYZW(n,s.riverChannelMarginMeters,s.waterDepthMeters,s.groundSlope,s.forestRegionValue)}function vb(e,t){let{assignment:n,slot:r}=t,i=r.positionAttribute.array;for(let e=0;e<r.stagedGroundHeights.length;e+=1){let t=e*ab;i[t+1]=r.stagedGroundHeights[e]??0}r.positionAttribute.needsUpdate=!0,r.zoneConditionsAttribute&&(r.zoneConditionsAttribute.needsUpdate=!0),r.thermalWarmthAttribute&&(r.thermalWarmthAttribute.needsUpdate=!0),r.groundCoverAttribute&&(r.groundCoverAttribute.needsUpdate=!0);let a=e.chunkSize/2;r.mesh.position.set(n.originX+a,0,n.originZ+a),r.mesh.geometry.computeBoundingSphere(),r.mesh.visible=!0}var yb=2,bb=32;function xb(e){let t={currentStream:void 0};return{load:()=>Sb(t,e),activate:()=>Eb(t,!0),update:n=>Cb(t,e,n),deactivate:()=>Eb(t,!1),unload:()=>Db(t,e.scene)}}function Sb(e,t){let n=Ob(t),r=n.chunkWindow.update(t.viewpoint.worldPosition.x,t.viewpoint.worldPosition.z);cb(n.geometry,r),n.geometry.group.visible=!1,t.scene.add(n.geometry.group),e.currentStream=n}function Cb(e,{viewpoint:t,streamQueue:n},r){let i=e.currentStream;if(i){i.geometry.presentation?.update?.(r);for(let e of i.geometry.effects)e.update?.(r);wb(e,i,i.chunkWindow.update(t.worldPosition.x,t.worldPosition.z),n)}}function wb(e,t,n,r){for(let i of n){let n=Tb(e,t,i);n&&r.enqueue(n)}}function Tb(e,t,n){let r=t.slotJobKeys[n.slotIndex],i=lb(t.geometry,n);if(!(!r||!i))return{key:r,priority:0,isCurrent:()=>e.currentStream===t&&t.chunkWindow.isCurrent(n),runStep:()=>ub(t.geometry,i)}}function Eb(e,t){let n=e.currentStream;n&&(n.geometry.group.visible=t)}function Db(e,t){let n=e.currentStream;n&&(e.currentStream=void 0,t.remove(n.geometry.group),db(n.geometry))}function Ob(e){let t=zt(yb),n=Math.max(1,Math.ceil(e.viewpoint.viewDistanceMeters/t)),r=new It({level:yb,radius:n});return{chunkWindow:r,geometry:sb({worldSurface:e.worldSurface,chunkSize:t,chunkSlotCount:r.slotCount,segmentsPerSide:e.presentation?.segmentsPerSide??bb,opacity:e.parameters.opacity,presentation:e.presentation,effects:e.effects}),slotJobKeys:Array.from({length:r.slotCount},()=>({}))}}var kb=`/*
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
`,Ab=`/*
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
`,jb=`#include <common>`,Mb=`#include <begin_vertex>`,Nb=`vec4 diffuseColor = vec4( diffuse, opacity );`,Pb=`terrain-colors-v1`;function Fb(e,t,n){let r=new nt({color:16777215}),{minimumElevation:i,maximumElevation:a}=vf(t);return r.onBeforeCompile=t=>{Object.assign(t.uniforms,{terrainLowElevationColor:{value:new H(e.lowElevationColor)},terrainHighElevationColor:{value:new H(e.highElevationColor)},terrainWaterColor:{value:new H(e.waterColor)},terrainMinimumElevation:{value:i},terrainMaximumElevation:{value:a}}),t.vertexShader=t.vertexShader.replace(jb,`${jb}\n${Ab}`).replace(Mb,`${Mb}\npassTerrainElevationColor(transformed);`),t.fragmentShader=t.fragmentShader.replace(jb,`${jb}\n${kb}`).replace(Nb,`vec4 diffuseColor = vec4(getTerrainColor(), opacity);`)},r.customProgramCacheKey=()=>Pb,{material:r,conditionsAt:n.zoneConditionsAt}}var Ib=new ff,Lb=1;function Rb(e,t,n){let{surface:r,zones:i}=n,a=mf(e,t,r),o=yf(e,t,r);return{riverChannelMarginMeters:r.river.channelHalfWidthMeters-o,waterDepthMeters:r.river.waterHeightY-a,groundSlope:Vb(e,t,r),forestRegionValue:Ib.noise(e/i.featureSizeMeters,t/i.featureSizeMeters,r.seed/1e3+41)}}function zb(e,t){return Bb(e)?`water`:e.groundSlope>=t.shrubSlopeThreshold?`shrubSlope`:e.forestRegionValue<=t.coniferForestThreshold?`coniferForest`:e.forestRegionValue>=t.deciduousForestThreshold?`deciduousForest`:`meadow`}function Bb(e){return e.riverChannelMarginMeters>=0&&e.waterDepthMeters>0}function Vb(e,t,n){let r=Lb,i=(mf(e+r,t,n)-mf(e-r,t,n))/2,a=(mf(e,t+r,n)-mf(e,t-r,n))/2;return Math.hypot(i,a)}var Hb=`/*
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
`,Ub=`/*
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
`,Wb=`/*
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
`,Gb={coldStopFraction:.18,coolStopFraction:.44,warmStopFraction:.7,hotStopFraction:.86,terrainWarmth:{shorelineWarmth:.05,waterColdPerDepthMeter:.02,landWarmthFloor:.06,landElevationWarmthSpan:.7,forestWarmthBoost:.05,slopeWarmthBoost:.04},actorBody:{coreHeightFraction:.62,coreRadiusFraction:.14,extremityReachFraction:.5,horizontalWeight:.55},texture:{octaves:4,featureSizeMeters:5,bodyFeatureFraction:.35,lacunarity:2.9,gain:.7,quietWarmth:.8,quietAmount:.45},definition:{terrainPivot:.28,grassPivot:.3,vegetationPivot:.56,undergrowthPivot:.34,rockPivot:.28,actorPivot:.75},bandKneeWarmth:.11,heat:{maxSources:4,bodyHalfLengthFraction:.55,coreHeightFraction:.45,shapeIrregularityMeters:1.8},instanceHashCellMeters:1},Kb=`/*
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
`,qb=[`#define THERMAL_HEAT_SOURCES ${Gb.heat.maxSources}`,`#define THERMAL_TEXTURE_OCTAVES ${Gb.texture.octaves}`].join(`
`),Jb=`thermal-terrain-v8`,Yb=`thermal-instanced-v8`,Xb=`thermal-actor-v8`;function Zb(e,t){ox(e);let n=ex(e.heatEmission),r={thermalIntensity:{value:e.intensity},thermalRadiusMeters:{value:e.radiusMeters},thermalEdgeFeatherMeters:{value:e.edgeFeatherMeters},thermalCarriedColorBlend:{value:e.carriedColorBlend},thermalRampStops:{value:new pt(Gb.coldStopFraction,Gb.coolStopFraction,Gb.warmStopFraction,Gb.hotStopFraction)},thermalColdestColor:{value:new H(e.colors.coldestColor)},thermalColdColor:{value:new H(e.colors.coldColor)},thermalCoolColor:{value:new H(e.colors.coolColor)},thermalWarmColor:{value:new H(e.colors.warmColor)},thermalHotColor:{value:new H(e.colors.hotColor)},thermalHottestColor:{value:new H(e.colors.hottestColor)},thermalTextureShape:{value:new pt(Gb.texture.lacunarity,Gb.texture.gain,Gb.texture.quietWarmth,Gb.texture.quietAmount)},thermalHeatShapeMeters:{value:Gb.heat.shapeIrregularityMeters},...n.uniforms},i=Gb.texture.featureSizeMeters,a=Gb.actorBody,o={thermalActorWarmth:{value:e.actorWarmth},thermalActorExtremityFalloff:{value:e.actorExtremityFalloff},...rx(e.actorTextureWarmth,Gb.texture.bodyFeatureFraction),...nx(e.actorContrast,Gb.definition.actorPivot),...tx(e.bands.animals),thermalActorBodyShape:{value:new pt(a.coreHeightFraction,a.coreRadiusFraction,a.extremityReachFraction,a.horizontalWeight)}};return{setHeatSources:n.setSources,setIntensity:e=>{r.thermalIntensity.value=e},terrain:{applyTo:Qb({cacheKey:Jb,uniforms:{...r,...rx(e.terrainTextureWarmth,i),...nx(e.terrainContrast,Gb.definition.terrainPivot),...tx(e.bands.terrain),...$b},vertexHeader:Kb}),warmthAt:ax(t)},vegetation:{applyTo:Qb({cacheKey:Yb,uniforms:{...r,...ix(e.surfaces.vegetationWarmth,e.surfaces.vegetationWarmthSpread,e.surfaces.vegetationHeightWarmthPerMeter,e.surfaces.vegetationAxisWarmthPerMeter),...rx(e.surfaces.vegetationTextureWarmth,i),...nx(e.surfaces.vegetationContrast,Gb.definition.vegetationPivot),...tx(e.bands.vegetation),...$b},vertexHeader:Ub})},undergrowth:{applyTo:Qb({cacheKey:Yb,uniforms:{...r,...ix(e.surfaces.undergrowthWarmth,e.surfaces.undergrowthWarmthSpread,e.surfaces.undergrowthHeightWarmthPerMeter,e.surfaces.undergrowthAxisWarmthPerMeter),...rx(e.surfaces.undergrowthTextureWarmth,i),...nx(e.surfaces.undergrowthContrast,Gb.definition.undergrowthPivot),...tx(e.bands.undergrowth),...$b},vertexHeader:Ub})},grass:{applyTo:Qb({cacheKey:Yb,uniforms:{...r,...ix(e.surfaces.grassWarmth,0,0,0),...rx(e.surfaces.grassTextureWarmth,i),...nx(e.surfaces.grassContrast,Gb.definition.grassPivot),...tx(e.bands.grass),...$b},vertexHeader:Ub})},rocks:{applyTo:Qb({cacheKey:Yb,uniforms:{...r,...ix(e.surfaces.rockWarmth,e.surfaces.rockWarmthSpread,e.surfaces.rockHeightWarmthPerMeter,e.surfaces.rockAxisWarmthPerMeter),...rx(e.surfaces.rockTextureWarmth,i),...nx(e.surfaces.rockContrast,Gb.definition.rockPivot),...tx(e.bands.rocks),...$b},vertexHeader:Ub})},animals:e=>({applyTo:Qb({cacheKey:Xb,uniforms:{...r,...o,thermalHeatResponse:{value:0},thermalActorBodyMatrix:{value:e}},vertexHeader:Hb})})}}function Qb(e){return t=>{yd(t,{...e,vertexAnchor:`#include <project_vertex>`,vertexCall:`passThermalPerception(mvPosition, transformed);`,fragmentHeader:`${qb}\n${Wb}`,colorFragmentCall:`diffuseColor.rgb = applyThermalPerception(diffuseColor.rgb);`})}}var $b={thermalHeatResponse:{value:1}};function ex(e){let{maxSources:t,bodyHalfLengthFraction:n,coreHeightFraction:r}=Gb.heat,i=Array.from({length:t},()=>new pt),a=Array.from({length:t},()=>new pt),o={value:0};return{uniforms:{thermalHeatCount:o,thermalHeatBodies:{value:i},thermalHeatAxes:{value:a}},setSources:s=>{let c=Math.min(s.length,t);for(let t=0;t<c;t++){let o=s[t];if(!o)continue;let{heightMeters:c}=o;i[t]?.set(o.x,o.y+c*r,o.z,c*n),a[t]?.set(Math.sin(o.headingRadians),Math.cos(o.headingRadians),c*e.reachPerBodyHeight,e.strength)}o.value=c}}}function tx(e){return{thermalBand:{value:new vt(e.floorWarmth,e.ceilingWarmth)},thermalBandKnee:{value:Gb.bandKneeWarmth}}}function nx(e,t){return{thermalContrast:{value:new vt(e,t)}}}function rx(e,t){return{thermalTextureWarmth:{value:e},thermalTextureFeatureSize:{value:t}}}function ix(e,t,n,r){return{thermalBaseWarmth:{value:e},thermalWarmthSpread:{value:t},thermalHeightWarmthPerMeter:{value:n},thermalAxisWarmthPerMeter:{value:r},thermalHashCellMeters:{value:Gb.instanceHashCellMeters}}}function ax({surfaceSettings:e,conditionsAt:t}){let{minimumElevation:n,maximumElevation:r}=vf(e),i=r-n,a=Gb.terrainWarmth;return(e,r,o)=>{let s=t(e,r);if(Bb(s))return Math.max(0,a.shorelineWarmth-s.waterDepthMeters*a.waterColdPerDepthMeter);let c=Math.min(Math.max((o-n)/i,0),1),l=Math.min(Math.abs(s.forestRegionValue),1)*a.forestWarmthBoost,u=Math.min(s.groundSlope,1)*a.slopeWarmthBoost;return Math.min(1,a.landWarmthFloor+c*a.landElevationWarmthSpan+l+u)}}function ox(e){if(![e.intensity,e.carriedColorBlend,e.surfaces.vegetationWarmth,e.surfaces.vegetationWarmthSpread,e.surfaces.rockWarmth,e.surfaces.rockWarmthSpread,e.actorWarmth,e.actorExtremityFalloff,e.terrainTextureWarmth,e.actorTextureWarmth,e.surfaces.vegetationTextureWarmth,e.surfaces.undergrowthWarmth,e.surfaces.undergrowthWarmthSpread,e.surfaces.undergrowthTextureWarmth,e.surfaces.undergrowthContrast,e.surfaces.rockTextureWarmth,e.heatEmission.strength,e.terrainContrast,e.actorContrast,e.surfaces.vegetationContrast,e.surfaces.rockContrast,...Object.values(e.bands).flatMap(e=>[e.floorWarmth,e.ceilingWarmth])].every(xd))throw RangeError(`Thermal intensity and warmth values must be between zero and one`);if(![e.surfaces.vegetationHeightWarmthPerMeter,e.surfaces.vegetationAxisWarmthPerMeter,e.surfaces.undergrowthHeightWarmthPerMeter,e.surfaces.undergrowthAxisWarmthPerMeter,e.surfaces.rockHeightWarmthPerMeter,e.surfaces.rockAxisWarmthPerMeter].every(e=>Number.isFinite(e)))throw RangeError(`Thermal surface gradients must be finite`);if(Object.values(e.bands).some(e=>e.floorWarmth>=e.ceilingWarmth))throw RangeError(`Thermal warmth bands must rise from floor to ceiling`);if(!bd(e.heatEmission.reachPerBodyHeight))throw RangeError(`Thermal heat reach must be positive and finite`);if(!bd(e.radiusMeters))throw RangeError(`Thermal radius must be positive and finite`);if(!bd(e.edgeFeatherMeters)||e.edgeFeatherMeters>=e.radiusMeters)throw RangeError(`Thermal edge feather must be positive and fit inside the radius`)}var sx=new Set([`bush`,`flowering-bush`]);function cx(e){return sx.has(e)?`undergrowth`:`canopy`}var lx={seed:341,candidateSpacingMeters:8,assets:[{id:`pine-1`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-01.glb`,objectName:`Pine_4`,minimumHeightMeters:5,maximumHeightMeters:9.5},{id:`pine-2`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-02.glb`,objectName:`Pine_5`,minimumHeightMeters:4.5,maximumHeightMeters:8.5},{id:`pine-3`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-pack.glb`,objectName:`PineTree_5`,minimumHeightMeters:5,maximumHeightMeters:9},{id:`deciduous-tree-1`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/deciduous-pack.glb`,objectName:`NormalTree_1`,minimumHeightMeters:5,maximumHeightMeters:9.5},{id:`deciduous-tree-2`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/deciduous-pack.glb`,objectName:`NormalTree_2`,minimumHeightMeters:4.5,maximumHeightMeters:8.5},{id:`deciduous-tree-3`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/deciduous-pack.glb`,objectName:`NormalTree_3`,minimumHeightMeters:6,maximumHeightMeters:10},{id:`bush`,url:`/becoming-many-making-of/p/v3-finetuning/trees/bush.glb`,objectName:`Bush_Common`,minimumHeightMeters:.7,maximumHeightMeters:1.3},{id:`flowering-bush`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/flowering-bush.glb`,objectName:`Bush_Common_Flowers`,minimumHeightMeters:.6,maximumHeightMeters:1.2},{id:`pine-4`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-pack.glb`,objectName:`PineTree_1`,minimumHeightMeters:5,maximumHeightMeters:9.5},{id:`pine-5`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-pack.glb`,objectName:`PineTree_2`,minimumHeightMeters:4,maximumHeightMeters:8},{id:`pine-6`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-pack.glb`,objectName:`PineTree_3`,minimumHeightMeters:5.5,maximumHeightMeters:10},{id:`pine-7`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/pine-pack.glb`,objectName:`PineTree_4`,minimumHeightMeters:4.5,maximumHeightMeters:8.5},{id:`deciduous-tree-4`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/deciduous-pack.glb`,objectName:`NormalTree_4`,minimumHeightMeters:5,maximumHeightMeters:9},{id:`deciduous-tree-5`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/deciduous-pack.glb`,objectName:`NormalTree_5`,minimumHeightMeters:4,maximumHeightMeters:8},{id:`birch-1`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/birch-pack.glb`,objectName:`BirchTree_1`,minimumHeightMeters:6.5,maximumHeightMeters:11},{id:`birch-2`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/birch-pack.glb`,objectName:`BirchTree_2`,minimumHeightMeters:6,maximumHeightMeters:10.5},{id:`birch-3`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/birch-pack.glb`,objectName:`BirchTree_3`,minimumHeightMeters:7,maximumHeightMeters:12},{id:`dead-tree-1`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/dead-tree-pack.glb`,objectName:`DeadTree_6`,minimumHeightMeters:4,maximumHeightMeters:8},{id:`dead-tree-2`,url:`/becoming-many-making-of/p/web-release/becoming-many/models/vegetation/dead-tree-pack.glb`,objectName:`DeadTree_7`,minimumHeightMeters:3.5,maximumHeightMeters:7}],variantsByZone:{meadow:[{assetId:`deciduous-tree-1`,weight:.5},{assetId:`deciduous-tree-2`,weight:.5},{assetId:`deciduous-tree-3`,weight:.5},{assetId:`deciduous-tree-4`,weight:.5},{assetId:`deciduous-tree-5`,weight:.5},{assetId:`birch-1`,weight:.5},{assetId:`bush`,weight:7}],coniferForest:[{assetId:`pine-1`,weight:1},{assetId:`pine-2`,weight:1},{assetId:`pine-3`,weight:1},{assetId:`pine-4`,weight:1},{assetId:`pine-5`,weight:1},{assetId:`pine-6`,weight:1},{assetId:`pine-7`,weight:.15},{assetId:`dead-tree-1`,weight:.5}],deciduousForest:[{assetId:`deciduous-tree-1`,weight:1},{assetId:`deciduous-tree-2`,weight:1},{assetId:`deciduous-tree-3`,weight:1},{assetId:`deciduous-tree-4`,weight:1},{assetId:`deciduous-tree-5`,weight:1},{assetId:`birch-1`,weight:1},{assetId:`birch-2`,weight:1},{assetId:`birch-3`,weight:1},{assetId:`dead-tree-2`,weight:.5}],shrubSlope:[{assetId:`bush`,weight:4},{assetId:`flowering-bush`,weight:1},{assetId:`dead-tree-1`,weight:.3}]}},ux=Math.PI*2,dx=.82,fx=1.18,px=new W(0,1,0);function mx({parameters:e,colors:t,assets:n,chunkSize:r,chunkSlotCount:i,worldSurface:a,effectsFor:o}){a_(e,r,`Vegetation`);let s=du(r,e.candidateSpacingMeters),c=e.assets.map((e,r)=>({id:e.id,model:m_(Dx(n,e.id),e.objectName,e=>hx(t,e.name,r))}));if(o)for(let{id:e,model:t}of c){let n=o(cx(e));if(n)for(let e of t.parts)Lt(n,e.material)}return{parameters:e,worldSurface:a,candidateGrid:s,modelPool:S_({name:`Vegetation`,sources:c,slotCount:i,maxInstancesPerSlot:s.candidateCount}),matrix:new B,position:new W,rotation:new _,scale:new W}}function hx(e,t,n){return t===`trunk`?e.trunkColor:t===`flower`?e.flowerColor:n%2==0?e.leafColor:e.leafAccentColor}function gx(e,t){for(let n of t){let t=_x(n);for(;!vx(e,t););}yx(e)}function _x(e){return{assignment:e,nextRow:0}}function vx(e,t){return t.nextRow===0&&C_(e.modelPool,t.assignment.slotIndex),Sx(e,t.assignment,t.nextRow),t.nextRow+=1,t.nextRow<e.candidateGrid.cellsPerSide?!1:(E_(e.modelPool,t.assignment.slotIndex),!0)}function yx(e){D_(e.modelPool)}function bx(e,t){for(let n of t)w_(e.modelPool,n.slotIndex)}function xx(e){O_(e.modelPool)}function Sx(e,t,n){let r=n*e.candidateGrid.cellsPerSide;for(let n=0;n<e.candidateGrid.cellsPerSide;n+=1)Cx(e,t,r+n)}function Cx(e,t,n){let r=e_(e.parameters,e.candidateGrid,e.worldSurface,t,n);r&&wx(e,t,r.model,r.candidate)}function wx(e,t,n,r){let i=e.modelPool.variants.get(n.id);if(!i)return;let a=Qg(e.parameters.seed,n,r)/i.model.height,o=Ex(e,r,6),s=Ex(e,r,7),c=i.model.footprintRadius*a*Math.max(o,s);if(!Tx(e.worldSurface,r,c))return;let l=e.worldSurface.groundYAt(r.worldX,r.worldZ)-i.model.minimumY*a;e.position.set(r.worldX,l,r.worldZ),e.rotation.setFromAxisAngle(px,pu(e.parameters.seed,r.cellX,r.cellZ,4)*ux),e.scale.set(a*o,a,a*s),e.matrix.compose(e.position,e.rotation,e.scale),T_(e.modelPool,n.id,t.slotIndex,e.matrix)}function Tx(e,t,n){let{riverChannelMarginMeters:r}=e.zoneConditionsAt(t.worldX,t.worldZ);return-r>=n}function Ex(e,t,n){return Ox(dx,fx,pu(e.parameters.seed,t.cellX,t.cellZ,n))}function Dx(e,t){let n=e.get(t);if(!n)throw Error(`Vegetation asset not loaded: ${t}`);return n}function Ox(e,t,n){return e+(t-e)*n}var kx=2;function Ax(e){let t={currentStream:void 0},n={...e,parameters:$g(lx,e.preset),colors:e.preset.colors};return{load:()=>jx(t,n),activate:()=>Fx(t,!0),update:()=>Mx(t,n),deactivate:()=>Fx(t,!1),unload:()=>Ix(t,n.scene,n.assets)}}function jx(e,t){let n=Px(t),r=n.chunkWindow.update(t.viewpoint.worldPosition.x,t.viewpoint.worldPosition.z);gx(n.instances,r),t.scene.add(n.instances.modelPool.group),e.currentStream=n}function Mx(e,{viewpoint:t,streamQueue:n}){let r=e.currentStream;if(!r)return;yx(r.instances);let i=r.chunkWindow.update(t.worldPosition.x,t.worldPosition.z);bx(r.instances,i),yx(r.instances);for(let t of i){let i=Nx(e,r,t);i&&n.enqueue(i)}}function Nx(e,t,n){let r=t.slotJobKeys[n.slotIndex];if(!r)return;let i=_x(n);return{key:r,isCurrent:()=>e.currentStream===t&&t.chunkWindow.isCurrent(n),runStep:()=>vx(t.instances,i)}}function Px(e){let t=zt(kx),n=Math.max(1,Math.ceil(e.viewpoint.viewDistanceMeters/t)),r=new It({level:kx,radius:n});return{chunkWindow:r,instances:mx({parameters:e.parameters,colors:e.colors,assets:e.assets,chunkSize:t,chunkSlotCount:r.slotCount,worldSurface:e.worldSurface,effectsFor:e.effectsFor}),slotJobKeys:Array.from({length:r.slotCount},()=>({}))}}function Fx(e,t){let n=e.currentStream;n&&(n.instances.modelPool.group.visible=t)}function Ix(e,t,n){let r=e.currentStream;r&&(e.currentStream=void 0,t.remove(r.instances.modelPool.group),xx(r.instances),pc(n))}var Lx=2,Rx=2.5;function zx(e,t){let n=$g(lx,e),r=zt(Lx),i=du(r,n.candidateSpacingMeters);return{sourceClass:`vegetation`,appendChunkAnchors:(e,a,o,s)=>r_(n,i,t,r,{chunkX:e,chunkZ:a,chunkSizeMeters:o},e=>{let{riverChannelMarginMeters:n}=t.zoneConditionsAt(e.worldX,e.worldZ);return-n>=Rx},s)}}var Bx=[`conifer`,`deciduous`,`birch`,`bush`,`floweringBush`,`deadWood`],Vx=2,Hx=2.5,Ux={"pine-1":`conifer`,"pine-2":`conifer`,"pine-3":`conifer`,"pine-4":`conifer`,"pine-5":`conifer`,"pine-6":`conifer`,"pine-7":`conifer`,"deciduous-tree-1":`deciduous`,"deciduous-tree-2":`deciduous`,"deciduous-tree-3":`deciduous`,"deciduous-tree-4":`deciduous`,"deciduous-tree-5":`deciduous`,"birch-1":`birch`,"birch-2":`birch`,"birch-3":`birch`,bush:`bush`,"flowering-bush":`floweringBush`,"dead-tree-1":`deadWood`,"dead-tree-2":`deadWood`};function Wx(e,t){let n=$g(lx,e),r=zt(Vx),i=du(r,n.candidateSpacingMeters),a=Gx();return{groupIds:Bx,maxPlantsPerChunk:e=>{let t=r/e,n=i.cellsPerSide/t;if(!Number.isInteger(t)||!Number.isInteger(n))throw RangeError(`Scent requests must align with the vegetation placement grid`);return n**2},appendChunkPlants:(e,o,s,c)=>i_(n,i,t,r,{chunkX:e,chunkZ:o,chunkSizeMeters:s},e=>{let{riverChannelMarginMeters:n}=t.zoneConditionsAt(e.worldX,e.worldZ);return-n>=Hx},({candidate:e,model:t},r)=>{let i=a.get(t.id);i!==void 0&&c(e.worldX,r,e.worldZ,Qg(n.seed,t,e),i)})}}function Gx(){let e=new Map;for(let{id:t}of lx.assets){let n=Ux[t];if(!n)throw Error(`Vegetation asset has no scent group: ${t}`);e.set(t,Bx.indexOf(n))}return e}var Kx=`/*
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
`,qx=`world-fade-v1`;function Jx(){let e={value:1},t={value:new H(16777215)};return{setPresence:t=>{e.value=t},setBackground:e=>{t.value.copy(e)},applyTo:n=>{yd(n,{cacheKey:qx,uniforms:{worldFadePresence:e,worldFadeBackground:t},vertexHeader:``,vertexAnchor:`#include <begin_vertex>`,vertexCall:``,fragmentHeader:Kx,colorFragmentCall:`diffuseColor.rgb = applyWorldFade(diffuseColor.rgb);`})}}}var Yx={seed:174,heightField:{baseHeightY:-8,rollingElevationMeters:5,rollingFeatureSizeMeters:48,detailElevationMeters:2.5,detailFeatureSizeMeters:20,mountainElevationMeters:28,mountainFeatureSizeMeters:450,mountainRegionSizeMeters:425},river:{waterHeightY:-7,riverBedHeightY:-9.5,channelHalfWidthMeters:2.5,bankHalfWidthMeters:24,primaryMeanderAmplitudeMeters:52,primaryMeanderLengthMeters:170,secondaryMeanderAmplitudeMeters:34,secondaryMeanderLengthMeters:72}};function Xx(e,t){let n={surface:e,zones:t},r=(e,t)=>Rb(e,t,n);return{groundYAt:(t,n)=>mf(t,n,e),surfaceYAt:(t,n)=>hf(t,n,e),zoneConditionsAt:r,zoneAt:(e,n)=>zb(r(e,n),t)}}var Zx={featureSizeMeters:112,coniferForestThreshold:-.25,deciduousForestThreshold:.28,shrubSlopeThreshold:.27};function Qx(e){let t=Xx(Yx,Zx),n=$x({...e,worldSurface:t,testModules:e.testModules});return{worldSurface:t,modules:n.modules,reach:n.reach,hasGround:e.level.invisibleGround===!0||xS(e.level)}}function $x(e){let t=[],n=new Map,r=(e,r)=>{if(!r||(t.push(r),!e))return;let i=n.get(e);i?i.push(r):n.set(e,[r])},i=e.forShow?Jx():void 0,a=e.forShow?Jx():void 0,o=e.forShow?Fd({scene:e.world.scene,viewpoint:e.world.viewpoint,viewerRig:e.world.viewerRig,viewPitchDegrees:Ua.viewPitchAssistDegrees,definition:Do}):void 0,s=sS(e.level),c=rS(e),l=nS(e),u=uS(e),d=vS(e,c,a,u?.observeActorBodies),f=tS(e,d),p=iS(e,a),m=aS(e),h=oS(e,m);return r(`echo`,cS(e,s,c,i,f?.terrain)),r(void 0,lS(e)),r(`scent`,u?.module),r(void 0,pS(e,s,c,i)),r(void 0,fS(e,s,c,i)),r(`echo`,mS(e,s,c,i)),r(`echo`,gS(e,s,c,i)),r(`thermal`,hS(e,s,i)),r(`thermal`,d?.module),r(`motion`,p?.module),r(`magnetic`,l?.module),r(`connections`,f?.module),r(void 0,m?.module),r(void 0,h),r(void 0,o?.module),{modules:t,reach:eS(n,{scent:u,motion:p,thermal:c,magnetic:l,connections:f,passages:m,structureFade:i,animalsFade:a,endCredits:o})}}function eS(e,t){return{gates:e,senses:{scent:t.scent?.setIntensity,motion:t.motion?.setIntensity,thermal:t.thermal?.setIntensity,magnetic:t.magnetic?.setIntensity,connections:t.connections?.setIntensity},worldFades:{structure:t.structureFade,animals:t.animalsFade},setSkyBackground:t.magnetic?.setSkyBackground,setEndCreditsPresence:t.endCredits?.setPresence,setBirdBodyPresence:t.motion?.setBodyPresence,followPassages:t.passages?.followShowTime,readMotionActorCenters:t.motion?.readActorCenters}}function tS(e,t){let n=e.level.connections;if(!n||n.intensity===0)return;let{level:r,worldSurface:i}=e,a=[];r.vegetation&&n.sources.vegetation&&a.push(zx(r.vegetation,i)),r.scentParticles&&n.sources.scentEmitters&&a.push(_v(i.groundYAt,i.zoneAt)),r.rocks&&n.sources.rocks&&a.push(p_(r.rocks,i));let o=t&&n.sources.animals?{sourceClass:`animals`,getWorldPositions:t.getVisibleWorldPositions}:void 0,s=e.level.grassClipmap?(e,t)=>wf(i,e,t):()=>0;return Ig(n,{scene:e.world.scene,viewpoint:e.world.viewpoint,streamQueue:e.world.streamQueue,worldSurface:i,staticSources:a,animalSource:o,groundCoverAt:s})}function nS(e){let t=e.level.magnetic;if(!(!t||t.intensity===0))return zf(t,{scene:e.world.scene,viewpoint:e.world.viewpoint,skyHazeColor:e.materialHazeColor})}function rS(e){let t=e.level.thermal;if(!(!t||t.intensity===0))return Zb(t,{surfaceSettings:Yx,conditionsAt:e.worldSurface.zoneConditionsAt})}function iS(e,t){let n=e.level.motion;if(!n||n.intensity===0)return;let r=CS(e.level)?{assets:e.assets.birds,effects:t?[t]:[]}:void 0;return Sh({scene:e.world.scene,viewpoint:e.world.viewpoint,parameters:n,groundYAt:e.worldSurface.groundYAt,zoneAt:e.worldSurface.zoneAt,birdBody:r})}function aS(e){let{passages:t,assets:n}=e;if(!t||!n.passages)return;let{world:r}=e;return tu({scene:r.scene,viewpoint:r.viewpoint,worldSurface:e.worldSurface,schedule:t,resources:n.passages,readViewHeadingRadians:xo(r.viewerRig)})}function oS(e,t){let n=t?.swarm,r=e.level.motion;if(!(!n||!r))return Hh({scene:e.world.scene,parameters:r,pointCount:n.pointCount,cloudRadiusMeters:n.cloudRadiusMeters,cloudHeightMeters:n.cloudHeightMeters,readCrossing:n.read})}function sS(e){let t=e.echoDepth;if(!(!t||t.intensity===0))return Ed(t)}function cS(e,t,n,r,i){let a=e.level.terrain;if(!a)return e.level.invisibleGround?xb({scene:e.world.scene,viewpoint:e.world.viewpoint,worldSurface:e.worldSurface,streamQueue:e.world.streamQueue,parameters:{opacity:1},presentation:ib()}):void 0;let o=bS(a,e),s=[];return r&&s.push(r),n&&s.push(n.terrain),t&&s.push(t),i&&s.push(i),xb({scene:e.world.scene,viewpoint:e.world.viewpoint,worldSurface:e.worldSurface,streamQueue:e.world.streamQueue,parameters:{opacity:a.opacity},presentation:o,effects:s})}function lS(e){let t=e.level.airParticles;if(!t)return;let n=xS(e.level)?e.worldSurface.surfaceYAt:void 0;return ns({scene:e.world.scene,viewpoint:e.world.viewpoint,parameters:t,streamQueue:e.world.streamQueue,surfaceYAt:n})}function uS(e){let t=e.level.scentParticles;if(!t)return;let{level:n,worldSurface:r}=e,i=n.vegetation??n.invisibleVegetation,a=!!(n.animals&&t.animals);return a&&dS(t),_y({scene:e.world.scene,viewpoint:e.world.viewpoint,parameters:t,streamQueue:e.world.streamQueue,plantSource:i?Wx(i,r):void 0,maxActorCount:a?gd.maxVisible:0})}function dS(e){let t=e.animals?.signatures??{};for(let{id:e}of gd.species)if(!t[e])throw Error(`Animal species has no scent signature: ${e}`)}function fS(e,t,n,r){let i=e.level.grassClipmap;if(i)return Tf({scene:e.world.scene,viewpoint:e.world.viewpoint,frustumCamera:e.world.camera,preset:i,streamQueue:e.world.streamQueue,worldSurface:e.worldSurface,surfaceSettings:Yx,fogColor:e.materialHazeColor,effects:_S(r,n?.grass,t)})}function pS(e,t,n,r){let i=e.level.grass;if(!i)return;let a=e.testModules?.createLegacyGrass;if(!a)throw Error(`Legacy Grass module was not loaded`);return a({scene:e.world.scene,viewpoint:e.world.viewpoint,preset:i,streamQueue:e.world.streamQueue,worldSurface:e.worldSurface,effects:_S(r,n?.vegetation,t)})}function mS(e,t,n,r){let i=e.level.vegetation;if(i)return Ax({scene:e.world.scene,viewpoint:e.world.viewpoint,preset:i,assets:e.assets.vegetation,streamQueue:e.world.streamQueue,worldSurface:e.worldSurface,effectsFor:e=>_S(r,e===`undergrowth`?n?.undergrowth:n?.vegetation,t)})}function hS(e,t,n){let r=e.level.snakes;if(r)return Gy({scene:e.world.scene,viewpoint:e.world.viewpoint,preset:r,worldSurface:e.worldSurface,streamQueue:e.world.streamQueue,effects:_S(n,void 0,t)})}function gS(e,t,n,r){let i=e.level.rocks;if(i)return ev({scene:e.world.scene,viewpoint:e.world.viewpoint,preset:i,assets:e.assets.rocks,streamQueue:e.world.streamQueue,worldSurface:e.worldSurface,effects:_S(r,n?.rocks,t)})}function _S(e,t,n){let r=[e,t,n].filter(e=>e!==void 0);return r.length>0?r:void 0}function vS(e,t,n,r){if(!e.level.animals)return;let i=t||n?e=>[n,t?.animals(e)].filter(e=>e!==void 0):void 0;return ud({scene:e.world.scene,viewpoint:e.world.viewpoint,definition:gd,preset:e.level.animals,assets:e.assets.animals,worldSurface:e.worldSurface,effectsFor:i,onBodiesUpdated:yS(t?.setHeatSources,r)})}function yS(...e){let t=e.filter(e=>e!==void 0);if(t.length!==0)return e=>{for(let n of t)n(e)}}function bS(e,t){if(e.presentation===`zones`){let e=t.testModules?.createZonePresentation;if(!e)throw Error(`Zone Visualizer module was not loaded`);return e(t.worldSurface,Zx)}if(e.colors)return Fb(e.colors,Yx,t.worldSurface)}function xS(e){return!!(e.terrain||e.grass||e.vegetation||e.rocks||e.animals)}async function SS(e,t){let[n,r,i,a,o]=await Promise.all([fc(e.vegetation?wS(lx.assets):[]),fc(e.rocks?wS(d_.assets):[]),fc(e.animals?wS(gd.species):[]),fc(CS(e)?[Jf]:[]),t?eu(t):void 0]);return{vegetation:n,rocks:r,animals:i,birds:a,passages:o}}function CS(e){let t=e.motion;return!!(t&&t.intensity!==0&&t.birds?.body)}function wS(e){return e.map(({id:e,url:t})=>({id:e,url:t}))}async function TS(e){await e.renderer.compileAsync(e.scene,e.camera),ES(e)}function ES(e){let{renderer:t,scene:n,camera:r}=e,i=t.getRenderTarget(),a=t.getActiveCubeFace(),o=t.getActiveMipmapLevel(),s=new ot(1,1);s.texture.colorSpace=t.outputColorSpace;try{t.setRenderTarget(s),t.render(n,r)}finally{t.setRenderTarget(i,a,o),s.dispose()}}function DS(e,t){if(t>=e.durationSeconds)return;let n=e.narration.findIndex(e=>e.atSeconds>t),r=(n===-1?e.narration.length:n)-1,i=e.narration[r];if(i)return{cueId:i.cueId,offsetSeconds:t-i.atSeconds}}var OS=[`wind`,`choir`,`sonar`,`birdWingBeat`,`insectWingBeat`,`bassLoop`,`pressureWave`,`polyRhythm`,`hiHat`],kS={pulseSeconds:60/54,voices:{"white-world":[`wind`],scent:[`wind`,`choir`],echo:[`wind`,`choir`,`sonar`],motion:[`wind`,`choir`,`sonar`,`birdWingBeat`,`insectWingBeat`],thermal:[`wind`,`choir`,`sonar`,`birdWingBeat`,`insectWingBeat`,`bassLoop`],magnetic:[`wind`,`choir`,`sonar`,`birdWingBeat`,`insectWingBeat`,`bassLoop`,`pressureWave`],connections:OS}};function AS(e,t,n,r){let i=0,a=0,o=0;for(let s of e.narration){let e=Yt(s);if(e>r)break;a=tn(i,a,o,e),i=e,o=+!!t.voices[s.level].includes(n)}return tn(i,a,o,r)}function jS(e,t){if(!bd(e))throw RangeError(`Show duration must be positive and finite, received ${e}`);let n=0,r=t(),i=1,a=!1;function o(){if(!a)return n;let o=(t()-r)*i;return MS(n+o,e)}function s(){n=o(),r=t()}function c(i){if(!Number.isFinite(i))throw RangeError(`Seek target must be finite, received ${i}`);n=MS(i,e),r=t()}return{sample:()=>({timeSeconds:o(),isPlaying:a,timeScale:i}),play(){s(),a=!0},pause(){s(),a=!1},seekTo:c,seekBy(e){c(o()+e)},setTimeScale(e){if(!bd(e))throw RangeError(`Time scale must be positive and finite, received ${e}`);s(),i=e}}}function MS(e,t){return e<0?0:e>t?t:e}var NS=[`pointerdown`,`keydown`];function PS(){let e=new AudioContext;function t(){for(let e of NS)window.removeEventListener(e,n)}function n(){e.resume().then(t,()=>void 0)}for(let e of NS)window.addEventListener(e,n);return{readSeconds:()=>e.currentTime,readState:()=>e.state,unload(){t(),e.close()}}}function FS(e){let t,n=!1;return Vt(async()=>{let{startOrganRuntime:e}=await import(`./organ-runtime-DtyJFHDa.js`);return{startOrganRuntime:e}},__vite__mapDeps([0,1])).then(({startOrganRuntime:r})=>{n||(t=r(e))}),{update:e=>{t?.update(e)},unload:()=>{n=!0,t?.dispose(),t=void 0}}}var IS=.25;function LS({language:e,cueIds:t}){let n=new Map;for(let r of t)n.set(r,zS(r,e));let r,i=!1;function a(){r!==void 0&&(n.get(r)?.pause(),r=void 0)}function o(){i||(i=!0,console.warn(`Narration stays blocked until the page receives a gesture.`))}return{follow({position:t,isPlaying:i,timeScale:s}){if(!t||BS(t,e)){a();return}let c=n.get(t.cueId);if(!c)return;let l=t.cueId!==r;l&&(a(),r=t.cueId),RS(c,{offsetSeconds:t.offsetSeconds,isNewCue:l,isPlaying:i,timeScale:s,onBlocked:o})},unload(){for(let e of n.values())e.pause(),e.removeAttribute(`src`),e.load();n.clear(),r=void 0}}}function RS(e,{offsetSeconds:t,isNewCue:n,isPlaying:r,timeScale:i,onBlocked:a}){if(e.playbackRate=i,(n||!r||HS(e,t))&&VS(e,t),!r){e.paused||e.pause();return}e.paused&&e.play().catch(a)}function zS(e,t){let n=new Audio(Kt(e,t));return n.preload=`auto`,n}function BS(e,t){return e.offsetSeconds>=qt(e.cueId,t)}function VS(e,t){e.readyState<HTMLMediaElement.HAVE_METADATA||(e.currentTime=t)}function HS(e,t){return Math.abs(e.currentTime-t)>IS}var US=new Float32Array;function WS(e,t,n,r){let{schedule:i,states:a}=e,o=Xt(i,0);if(!o)throw Error(`A show schedule needs at least one cue`);let s=PS(),c=jS(i.durationSeconds,s.readSeconds),l=i.narration.map(e=>e.cueId),u=e.language,d=LS({language:u,cueIds:l}),f=FS({pulseSeconds:kS.pulseSeconds}),p,m={wind:0,choir:0,sonar:0,birdWingBeat:0,insectWingBeat:0,bassLoop:0,pressureWave:0,polyRhythm:0,hiHat:0},h={x:0,y:0,z:0,yawRadians:0,pitchRadians:0},g=new H(16777215),_=qS(a);function v(e){let n=Xt(i,e);n!==void 0&&n!==p&&(t.camera.far=a[n].viewDistance,t.camera.updateProjectionMatrix(),p=n)}function y(e){let r=Qt(i,e);r&&(g.copy(_[r.from]).lerp(_[r.to],r.progress),t.renderer.setClearColor(g),n.worldFades.structure?.setBackground(g),n.worldFades.animals?.setBackground(g),n.setSkyBackground?.(g))}function b(e,r,o){n.senses[e]?.(r);let s=n.gates.get(e);if(!s)return;let c=en(i,a,e,o);for(let e of s)c===`live`?t.modules.activate(e):c===`warming`?t.modules.warm(e):t.modules.deactivate(e)}function x(e){let t=$t(i,a,`scent`,e),r=$t(i,a,`echo`,e),o=$t(i,a,`motion`,e),s=$t(i,a,`thermal`,e),c=$t(i,a,`magnetic`,e),l=$t(i,a,`connections`,e);b(`scent`,t,e),b(`echo`,r,e),b(`motion`,o,e),b(`thermal`,s,e),b(`magnetic`,c,e),b(`connections`,l,e),n.worldFades.structure?.setPresence(r),n.worldFades.animals?.setPresence(s),n.setBirdBodyPresence?.(s),n.setEndCreditsPresence?.(Oo(i,e))}function S(e){v(e),y(e),x(e),n.followPassages?.(e)}function C(e){for(let t of OS)m[t]=AS(i,kS,t,e.timeSeconds);GS(t,h),f.update({showTimeSeconds:e.timeSeconds,isPlaying:e.isPlaying,timeScale:e.timeScale,voiceStrengths:m,listener:h,groundYMeters:r.groundYAt(h.x,h.z),readGroupCenters:e=>KS(n,e)})}return S(0),{update:()=>{let e=c.sample();d.follow({position:DS(i,e.timeSeconds),isPlaying:e.isPlaying,timeScale:e.timeScale}),S(e.timeSeconds),C(e)},readActiveLevelState:()=>a[p??o],running:{clock:c,readLanguage:()=>u,readActiveLevel:()=>p??o,readAudioState:s.readState,setLanguage:e=>{e!==u&&(c.pause(),d.unload(),u=e,d=LS({language:u,cueIds:l}))}}}}function GS(e,t){let n=e.viewpoint.worldPosition;t.x=n.x,t.y=n.y,t.z=n.z;let r=e.camera.matrixWorld.elements,i=-(r[8]??0),a=-(r[9]??0),o=-(r[10]??1);t.yawRadians=Math.atan2(i,o),t.pitchRadians=Math.asin(Math.min(1,Math.max(-1,a)))}function KS(e,t){return e.readMotionActorCenters?.(t===`insects`?`flies`:`birds`)??US}function qS(e){return{"white-world":new H(e[`white-world`].backgroundColor),scent:new H(e.scent.backgroundColor),echo:new H(e.echo.backgroundColor),motion:new H(e.motion.backgroundColor),thermal:new H(e.thermal.backgroundColor),magnetic:new H(e.magnetic.backgroundColor),connections:new H(e.connections.backgroundColor)}}async function JS(e,t){if(!(e instanceof HTMLElement))throw Error(`Missing level container element`);let n=t.kind===`static`?t.preset:t.composition.world,r=await SS(n,ZS(t)),i;if(await Eo(e,{setupWorld:async a=>{let o=await YS(e,a,n,r,t);return i=o.running,o.update},frameControl:t.kind===`static`?t.benchmark:void 0,viewPitchAssistDegrees:Ua.viewPitchAssistDegrees}),!i)throw Error(`The world runtime skipped level setup`);return i}async function YS(e,t,n,r,i){let{worldSurface:a,reach:o,hasGround:s}=await XS({world:t,level:n,assets:r,request:i}),c=i.kind===`static`?i.benchmark:void 0,{flightControl:l,m5:u}=$S(t,c,i.m5ExpectedDeviceId),d=i.frameMetrics,f=()=>d?.read(),p=eC({container:e,world:t,request:i,benchmark:c,readFrameMetrics:f,factory:i.testOverlay}),m=tC({request:i,benchmark:c,world:t,reach:o,worldSurface:a}),h=i.kind===`static`?i.preset.maximumGroundClearanceMeters:void 0;return{update:nC({world:t,worldSurface:a,benchmark:c,flightControl:l,show:m,frameMetrics:d,heightLimits:{minimumGroundClearanceMeters:s?Za:void 0,maximumGroundClearanceMeters:h},staticMaximumGroundClearanceMeters:h,testOverlay:p}),running:{show:m?.running,resetFlight:()=>Qa(t.viewerRig.position,t.viewerRig.quaternion),readFrameMetrics:f,m5:u,xr:t.xr}}}async function XS(e){let{world:t,level:n,assets:r,request:i}=e;rC(t,QS(i));let a=Qx({world:t,level:n,assets:r,materialHazeColor:i.kind===`static`?i.preset.backgroundColor:i.composition.materialHazeColor,forShow:i.kind===`show`,passages:ZS(i),testModules:i.testModules});return iC(t,a.modules),i.kind===`show`&&await TS(t),{worldSurface:a.worldSurface,reach:a.reach,hasGround:a.hasGround}}function ZS(e){return e.kind===`show`?e.composition.passages:void 0}function QS(e){if(e.kind===`static`)return e.preset;let t=Zt(e.show.schedule,e.show.states,0);if(!t)throw Error(`A show schedule needs at least one cue`);return t}function $S(e,t,n){if(t)return{flightControl:void 0,m5:void 0};let r=Ia(e.camera,e.viewerRig,e.renderer.domElement),i=mo(n);return{flightControl:Ya(e.viewerRig,r,i),m5:i}}function eC(e){if(!(e.benchmark||e.request.kind!==`static`||!e.request.preset.testUi||!e.factory))return e.factory(e.container,e.world.renderer,e.readFrameMetrics)}function tC(e){if(!(e.benchmark||e.request.kind!==`show`))return WS(e.request.show,e.world,e.reach,e.worldSurface)}function nC(e){return t=>{e.frameMetrics?.add(t),e.benchmark?e.benchmark.placeViewer(e.world.viewerRig):e.flightControl?.update(t),e.show?.update(),e.heightLimits.maximumGroundClearanceMeters=e.show?e.show.readActiveLevelState().maximumGroundClearanceMeters:e.staticMaximumGroundClearanceMeters,(e.heightLimits.minimumGroundClearanceMeters!==void 0||e.heightLimits.maximumGroundClearanceMeters!==void 0)&&Xa(e.world.viewerRig.position,e.worldSurface.groundYAt,e.heightLimits),e.testOverlay?.update(t)}}function rC({camera:e,renderer:t},n){t.setClearColor(n.backgroundColor),e.far=n.viewDistance,e.updateProjectionMatrix()}function iC(e,t){for(let n of t)e.modules.load(n),e.modules.activate(n)}var aC={density:{particlesPerChunk:270},appearance:{color:2105638,sizeMeters:.075},motion:{horizontalAmplitudeMeters:.12,verticalAmplitudeMeters:.24,speedMultiplier:1}},oC={colors:{furColor:1513239,lightFurColor:4802889,darkFurColor:1052688,featureColor:1052688}},sC={intensity:1,webRadiusMeters:30,pulseSpeedMetersPerSecond:1.5,sources:{vegetation:{nodeColor:10862019,weight:1},scentEmitters:{nodeColor:13657984,weight:1},rocks:{nodeColor:2698837,weight:.25},soil:{nodeColor:15918035,weight:.2}},colors:{depthColor:6830938,pulseColor:14917204}},cC={intensity:1,nearDistanceMeters:6,farDistanceMeters:96,colors:{nearColor:1052688,nearShadeColor:4802889,midColor:9803157,farColor:14869218,hazeColor:16250871}},lC={tuftsPerSquareMeter:21.85,fullDensityRadiusMeters:14,bladeHeightMeters:3,bladeWidthMeters:.2,colors:{rootColor:1451020,tipColor:9749334}},uC={intensity:1,fieldDirectionDegreesFromNorth:0,fieldElevationDegrees:7.5,colors:{northColor:0,southColor:16777215,zenithColor:12900342}},dC={flockCount:5,birdsPerFlock:12,flightSpeedMetersPerSecond:7.44,trailLifetimeFrames:40,flightHeightMeters:14,appearance:{trailColor:1097435,trailSizeMeters:.18,trailOpacity:1}},fC={intensity:1,swarms:{swarmCount:12,fliesPerSwarm:60,flightSpeedMultiplier:.93},appearance:{flyColor:2171187,flySizeMeters:.12,trailColor:3221336,trailSizeMeters:.085,trailOpacity:1},trail:{lifetimeFrames:14,expansionDistanceMeters:.22,motionGain:26,fadePower:1.6,density:1},birds:dC},pC={...fC,birds:{...dC,appearance:{...dC.appearance,trailColor:16473878},body:{lengthMeters:.26,color:1513239}}},mC={colors:{darkColor:1513239,lightColor:4802889},instancesPerHectareByZone:{meadow:8,coniferForest:10,deciduousForest:10,shrubSlope:60}},hC={plants:{conifer:{color:5624250,particlesPerPlant:84,emissionBottomFraction:.25,emissionTopFraction:1,emissionRadiusFraction:.34,riseHeightMeters:2.2},deciduous:{color:7002845,particlesPerPlant:84,emissionBottomFraction:.45,emissionTopFraction:1,emissionRadiusFraction:.46,riseHeightMeters:2.2},birch:{color:11634114,particlesPerPlant:72,emissionBottomFraction:.5,emissionTopFraction:1,emissionRadiusFraction:.38,riseHeightMeters:2},bush:{color:5291649,particlesPerPlant:40,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.85,riseHeightMeters:.7},floweringBush:{color:11036103,particlesPerPlant:52,emissionBottomFraction:.1,emissionTopFraction:1,emissionRadiusFraction:.95,riseHeightMeters:.9},deadWood:{color:11706751,particlesPerPlant:18,emissionBottomFraction:.2,emissionTopFraction:.9,emissionRadiusFraction:.28,riseHeightMeters:.5}},animals:{signatures:{deer:{color:16628564},stag:{color:15699772},fox:{color:16622493},rat:{color:14193052}},printsPerSecond:20,lifetimeSeconds:25,emissionBottomFraction:.15,emissionTopFraction:.85,emissionRadiusFraction:.35,riseHeightMeters:.8,windResponseMeters:4},appearance:{sizeMeters:.16},motion:{riseDurationSeconds:10,driftAmplitudeMeters:1.3,speedMultiplier:1,windResponseMeters:7}},gC={crawlingShare:.56,color:16473878},_C={opacity:1},vC={intensity:1,radiusMeters:35,edgeFeatherMeters:12,carriedColorBlend:.42,colors:{coldestColor:919080,coldColor:469885,coolColor:1862795,warmColor:13965706,hotColor:16473878,hottestColor:16567875},surfaces:{vegetationWarmth:.76,vegetationWarmthSpread:.05,vegetationHeightWarmthPerMeter:-.06,vegetationAxisWarmthPerMeter:-.11,vegetationTextureWarmth:.26,vegetationContrast:.34,undergrowthWarmth:.42,undergrowthWarmthSpread:.07,undergrowthHeightWarmthPerMeter:-.09,undergrowthAxisWarmthPerMeter:-.16,undergrowthTextureWarmth:.28,undergrowthContrast:.5,rockWarmth:.2,rockWarmthSpread:.18,rockHeightWarmthPerMeter:.05,rockAxisWarmthPerMeter:-.03,rockTextureWarmth:.24,rockContrast:.52,grassWarmth:.34,grassTextureWarmth:.28,grassContrast:.5},bands:{terrain:{floorWarmth:0,ceilingWarmth:.48},vegetation:{floorWarmth:.16,ceilingWarmth:.82},undergrowth:{floorWarmth:0,ceilingWarmth:.6},rocks:{floorWarmth:0,ceilingWarmth:.48},grass:{floorWarmth:0,ceilingWarmth:.54},animals:{floorWarmth:.72,ceilingWarmth:1}},terrainTextureWarmth:.28,terrainContrast:.7,actorWarmth:.96,actorExtremityFalloff:.2,actorTextureWarmth:.07,actorContrast:.3,heatEmission:{strength:.05,reachPerBodyHeight:1.2}},yC={meadow:12,coniferForest:150,deciduousForest:150,shrubSlope:70},bC={colors:{trunkColor:1052688,leafColor:1513239,leafAccentColor:4802889,flowerColor:9803157},instancesPerHectareByZone:yC},xC={airParticles:aC},SC={scentParticles:hC},CC={echoDepth:cC,terrain:_C,grassClipmap:lC,vegetation:bC,rocks:mC},wC={motion:fC},TC={motion:pC,animals:oC,thermal:vC,snakes:gC},EC={magnetic:uC},DC={connections:sC};function OC(e){if(typeof e!=`object`||!e)return{};let t=e;return{...kC(t,`m5Host`),...kC(t,`m5DeviceId`),...kC(t,`stationName`)}}function kC(e,t){let n=e[t];if(typeof n!=`string`)return{};let r=n.trim();return r.length===0?{}:{[t]:r}}async function AC(){try{let e=await fetch(`/config`);return e.ok?OC(await e.json()):{}}catch{return{}}}export{wC as a,xC as c,DS as d,So as f,Gt as g,qt as h,EC as i,yC as l,Ht as m,DC as n,SC as o,Jt as p,CC as r,TC as s,AC as t,JS as u};