(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,722512,e=>{"use strict";var o=e.i(843476),t=e.i(271645);let i=`#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`,r=`#version 300 es
precision highp float;
uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
out vec4 fragColor;

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x2 = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x2) - 0.5;
  vec3 ox = floor(x2 + 0.5);
  vec3 a0 = x2 - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop { vec3 color; float position; };

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);

  int index = 0;
  for (int i = 0; i < 2; i++) {
    if (colors[i].position <= uv.x) index = i;
  }
  float range = colors[index + 1].position - colors[index].position;
  float lerpFactor = (uv.x - colors[index].position) / range;
  vec3 rampColor = mix(colors[index].color, colors[index + 1].color, lerpFactor);

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  vec3 auroraColor = intensity * rampColor;
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;e.s(["default",0,function({colorStops:n=["#FF4D00","#FF8952","#FF4D00"],amplitude:l=1,blend:u=.5,speed:a=1}){let s=(0,t.useRef)(null),c=(0,t.useRef)({colorStops:n,amplitude:l,blend:u,speed:a});return c.current={colorStops:n,amplitude:l,blend:u,speed:a},(0,t.useEffect)(()=>{let o=s.current;if(!o)return;let t=!1;return e.A(232313).then(({Renderer:e,Program:a,Mesh:s,Color:v,Triangle:m})=>{let x;if(t||!o)return;let d=new e({alpha:!0,premultipliedAlpha:!0,antialias:!0}),p=d.gl;function f(){o&&(d.setSize(o.offsetWidth,o.offsetHeight),x&&(x.uniforms.uResolution.value=[o.offsetWidth,o.offsetHeight]))}p.clearColor(0,0,0,0),p.enable(p.BLEND),p.blendFunc(p.ONE,p.ONE_MINUS_SRC_ALPHA),p.canvas.style.backgroundColor="transparent",window.addEventListener("resize",f);let h=new m(p);h.attributes.uv&&delete h.attributes.uv,x=new a(p,{vertex:i,fragment:r,uniforms:{uTime:{value:0},uAmplitude:{value:l},uColorStops:{value:n.map(e=>{let o=new v(e);return[o.r,o.g,o.b]})},uResolution:{value:[o.offsetWidth,o.offsetHeight]},uBlend:{value:u}}});let C=new s(p,{geometry:h,program:x});o.appendChild(p.canvas);let g=0,y=e=>{g=requestAnimationFrame(y);let o=c.current;x.uniforms.uTime.value=.01*e*(o.speed??1)*.1,x.uniforms.uAmplitude.value=o.amplitude??1,x.uniforms.uBlend.value=o.blend??.5,x.uniforms.uColorStops.value=(o.colorStops??n).map(e=>{let o=new v(e);return[o.r,o.g,o.b]}),d.render({scene:C})};return g=requestAnimationFrame(y),f(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",f),o&&p.canvas.parentNode===o&&o.removeChild(p.canvas),p.getExtension("WEBGL_lose_context")?.loseContext()}}),()=>{t=!0}},[l,u,n,a]),(0,o.jsx)("div",{ref:s,style:{width:"100%",height:"100%"}})}])},639214,e=>{e.n(e.i(722512))},232313,e=>{e.v(o=>Promise.all(["static/chunks/0uzk6~y8_~90i.js"].map(o=>e.l(o))).then(()=>o(940298)))}]);