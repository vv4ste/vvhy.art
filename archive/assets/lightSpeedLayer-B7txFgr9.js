var Rt=Object.defineProperty;var Ft=(a,t,e)=>t in a?Rt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var r=(a,t,e)=>Ft(a,typeof t!="symbol"?t+"":t,e);import{E as _t,R as Wt,a as Et,B as Dt}from"./index-CFc2J-Rj.js";import{B as ot,p as U,aH as z,a1 as at,aI as Ot,ab as nt,A as lt,aE as Ut,aF as zt,aD as gt,Z as G,b as Y,a as b,aJ as y,d as It,aK as Gt,P as Yt,e as Nt,aL as jt,C as Bt,V as E,av as vt,S as J,a5 as wt,M as Q,aM as Vt,aN as Xt,aO as yt,I as R}from"./three-BfG4JoNj.js";import{O as Ht,i as Z,P as $t,p as ht,Q as I,R as ct,S as qt,T as dt,U as Zt,A as Kt,V as ft,W as Jt,X as Qt}from"./index-DAMUPOp-.js";function j(a,t){const e=document.createElement("canvas");e.width=a,e.height=a;const o=e.getContext("2d");o.clearRect(0,0,a,a),o.fillStyle="#ffffff",t(o);const s=new gt(e);return s.magFilter=G,s.minFilter=G,s}function te(){return j(7,a=>{for(let t=0;t<7;t++)a.fillRect(3,t,1,1),a.fillRect(t,3,1,1);a.fillRect(2,2,1,1),a.fillRect(4,2,1,1),a.fillRect(2,4,1,1),a.fillRect(4,4,1,1),a.fillRect(2,3,3,1),a.fillRect(3,2,1,3)})}function ee(){return j(5,a=>{a.fillRect(2,0,1,5),a.fillRect(0,2,5,1),a.fillRect(1,2,3,1),a.fillRect(2,1,1,3)})}function ie(){return j(3,a=>{a.fillRect(1,0,1,3),a.fillRect(0,1,3,1)})}function se(){return j(2,a=>{a.fillRect(0,0,2,2)})}function re(){const e=document.createElement("canvas");e.width=8,e.height=16;const o=e.getContext("2d");o.fillStyle="#6b3a1f",o.fillRect(2,0,4,3);const s=["#cc2222","#ffffff","#dd3333","#aaaaaa","#cc2222","#ffffff","#bb1111"];for(let i=0;i<s.length;i++)o.fillStyle=s[i],o.fillRect(1,3+i*1.5,6,1.5);o.fillStyle="#222222",o.fillRect(2,13,4,3);const l=new gt(e);return l.magFilter=G,l.minFilter=G,l}const K=[[3359948,5596910,7833855,16777215,13426175],[16746496,16755234,16763972,16769126,16777215],[2271778,4508740,6745668,8978278,16777215],[8921804,11158766,13395711,15632639,16777215],[13378082,15615044,16737894,16746632,16777215],[13412864,15649826,16772676,16777096,16777215],[16724787,3407667,3355647,16777011,16724991]].map(a=>a.map(t=>new b(t))),M=8,W=300,A=20,H=4,oe=[1.8,1.2,.8,.6],$=2.5,ut=1.5,q=[1.2,3];class ae{constructor(){r(this,"phase","idle");r(this,"rocketPos",new Y);r(this,"rocketVel",new Y);r(this,"rocketTargetY",0);r(this,"trail",new Float32Array(A*3));r(this,"trailWritten",0);r(this,"count",0);r(this,"pos",new Float32Array(W*3));r(this,"vel",new Float32Array(W*3));r(this,"rgb",new Float32Array(W*3));r(this,"texType",new Uint8Array(W));r(this,"palette",K[0]);r(this,"age",0)}launch(t,e,o,s){this.phase="rising",this.rocketPos.set(t,-15,e),this.rocketVel.set((Math.random()-.5)*2,35+Math.random()*15,(Math.random()-.5)*2),this.rocketTargetY=o,this.trailWritten=0,this.palette=s,this.age=0,this.count=0}explode(){this.phase="exploding",this.age=0,this.count=180+Math.floor(Math.random()*120);const{x:t,y:e,z:o}=this.rocketPos,s=this.palette;for(let l=0;l<this.count;l++){const i=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),d=(8+Math.random()*12)*(.85+Math.random()*.3),h=l*3;this.pos[h]=t,this.pos[h+1]=e,this.pos[h+2]=o,this.vel[h]=Math.sin(n)*Math.cos(i)*d,this.vel[h+1]=Math.sin(n)*Math.sin(i)*d,this.vel[h+2]=Math.cos(n)*d;const c=s[Math.floor(Math.random()*s.length)];this.rgb[h]=c.r,this.rgb[h+1]=c.g,this.rgb[h+2]=c.b,this.texType[l]=Math.random()<.3?0:Math.random()<.6?1:Math.random()<.8?2:3}}update(t){if(this.phase==="idle")return!1;if(this.phase==="rising"){this.rocketPos.addScaledVector(this.rocketVel,t),this.rocketVel.y-=5*t;const h=this.trailWritten%A*3;return this.trail[h]=this.rocketPos.x,this.trail[h+1]=this.rocketPos.y,this.trail[h+2]=this.rocketPos.z,this.trailWritten++,this.rocketPos.y>=this.rocketTargetY?(this.explode(),!0):!1}this.age+=t;const e=3.5,o=t*60,s=Math.pow(.98,o),l=Math.pow(.985,o),{pos:i,vel:n,count:d}=this;for(let h=0;h<d;h++){const c=h*3;i[c]+=n[c]*t,i[c+1]+=n[c+1]*t,i[c+2]+=n[c+2]*t,n[c+1]-=e*t,n[c]*=s,n[c+1]*=l,n[c+2]*=s}return this.age>$+ut?this.phase="idle":this.age>$&&(this.phase="fading"),!1}get opacity(){return this.phase==="fading"?Math.max(0,1-(this.age-$)/ut):1}}class N{constructor(t,e,o){r(this,"scene");r(this,"pool",[]);r(this,"textures");r(this,"rocketTex");r(this,"particlePoints",[]);r(this,"particlePos",[]);r(this,"particleCol",[]);r(this,"particleCounts",new Int32Array(H));r(this,"trailPoints");r(this,"trailPos",new Float32Array(M*A*3));r(this,"trailCol",new Float32Array(M*A*3));r(this,"rockets",[]);r(this,"rocketMat");r(this,"clock",0);r(this,"nextLaunchTime",0);r(this,"roadWidth");r(this,"roadLength");r(this,"timers",[]);r(this,"disposed",!1);this.scene=t,this.roadWidth=e,this.roadLength=o,this.textures=[te(),ee(),ie(),se()],this.rocketTex=re();for(let i=0;i<M;i++)this.pool.push(new ae);const s=M*W;for(let i=0;i<H;i++){const n=new Float32Array(s*3),d=new Float32Array(s*4),h=new ot;h.setAttribute("position",new U(n,3).setUsage(z)),h.setAttribute("color",new U(d,4).setUsage(z)),h.setDrawRange(0,0);const c=new at({map:this.textures[i],size:oe[i],vertexColors:!0,transparent:!0,alphaTest:.1,blending:Ot,depthWrite:!1,sizeAttenuation:!0}),f=new nt(h,c);f.frustumCulled=!1,f.visible=!1,t.add(f),this.particlePoints.push(f),this.particlePos.push(n),this.particleCol.push(d)}const l=new ot;l.setAttribute("position",new U(this.trailPos,3).setUsage(z)),l.setAttribute("color",new U(this.trailCol,3).setUsage(z)),l.setDrawRange(0,0),this.trailPoints=new nt(l,new at({size:.5,vertexColors:!0,transparent:!0,opacity:.6,blending:lt,depthWrite:!1})),this.trailPoints.frustumCulled=!1,this.trailPoints.visible=!1,t.add(this.trailPoints),this.rocketMat=new Ut({map:this.rocketTex,transparent:!0,depthWrite:!1,blending:lt});for(let i=0;i<M;i++){const n=new zt(this.rocketMat);n.scale.set(.8,1.6,1),n.visible=!1,n.frustumCulled=!1,t.add(n),this.rockets.push(n)}this.nextLaunchTime=0,this.later(100),this.later(400),this.later(800)}later(t){const e=window.setTimeout(()=>{this.timers=this.timers.filter(o=>o!==e),this.disposed||this.spawnFirework()},t);this.timers.push(e)}spawnFirework(){const t=this.pool.find(i=>i.phase==="idle");if(!t)return;const e=Math.random()>.5?1:-1,o=(this.roadWidth+5+Math.random()*20)*e,s=-(20+Math.random()*(this.roadLength*.3)),l=30+Math.random()*40;t.launch(o,s,l,K[Math.floor(Math.random()*K.length)])}update(t){if(!this.disposed){this.clock+=t,this.clock>=this.nextLaunchTime&&(this.spawnFirework(),this.nextLaunchTime=this.clock+q[0]+Math.random()*(q[1]-q[0]),Math.random()>.6&&this.later(200+Math.random()*400),Math.random()>.8&&this.later(500+Math.random()*600));for(const e of this.pool)e.update(t)&&Ht("/archive/fw.mp3");this.writeBuffers()}}writeBuffers(){const t=this.particleCounts;t.fill(0);let e=0,o=0;for(const s of this.pool){if(s.phase==="rising"){const c=this.rockets[o++];c.position.copy(s.rocketPos),c.visible=!0;const f=Math.min(s.trailWritten,A);for(let u=0;u<f;u++){const v=(s.trailWritten-f+u)%A*3,g=e*3;this.trailPos[g]=s.trail[v],this.trailPos[g+1]=s.trail[v+1],this.trailPos[g+2]=s.trail[v+2];const p=u/f;this.trailCol[g]=1,this.trailCol[g+1]=.7+p*.3,this.trailCol[g+2]=.3+p*.7,e++}continue}if(s.phase==="idle"||s.count===0)continue;const l=s.opacity,{pos:i,rgb:n,texType:d,count:h}=s;for(let c=0;c<h;c++){const f=d[c],u=t[f]++,v=this.particlePos[f],g=this.particleCol[f],p=c*3,L=u*3,w=u*4;v[L]=i[p],v[L+1]=i[p+1],v[L+2]=i[p+2],g[w]=n[p],g[w+1]=n[p+1],g[w+2]=n[p+2],g[w+3]=l}}for(let s=o;s<M;s++)this.rockets[s].visible=!1;for(let s=0;s<H;s++)N.upload(this.particlePoints[s],t[s]);N.upload(this.trailPoints,e)}static upload(t,e){if(e===0){t.visible=!1;return}t.visible=!0,t.geometry.setDrawRange(0,e);for(const o of Object.values(t.geometry.attributes)){const s=o;s.clearUpdateRanges(),s.addUpdateRange(0,e*s.itemSize),s.needsUpdate=!0}}dispose(){this.disposed=!0;for(const t of this.timers)clearTimeout(t);this.timers=[];for(const t of this.particlePoints)this.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.scene.remove(this.trailPoints),this.trailPoints.geometry.dispose(),this.trailPoints.material.dispose();for(const t of this.rockets)this.scene.remove(t);this.rocketMat.dispose();for(const t of this.textures)t.dispose();this.rocketTex.dispose()}}const ne=`
  #define USE_FOG;
  varying vec2 vUv;
  uniform vec3 uColor;
  ${y.fog_pars_fragment}
  void main() {
    vec3 color = vec3(uColor);
    gl_FragColor = vec4(color, 1.);
    ${y.fog_fragment}
  }
`,le=`
  #define USE_FOG;
  uniform float uTime;
  ${y.fog_pars_vertex}
  uniform float uTravelLength;
  varying vec2 vUv;
  #include <getDistortion_vertex>
  void main() {
    vec3 transformed = position.xyz;
    vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
    transformed.x += distortion.x;
    transformed.z += distortion.y;
    transformed.y += -1. * distortion.z;

    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    ${y.fog_vertex}
  }
`,he=`
  #define USE_FOG;
  ${y.fog_pars_fragment}
  varying vec3 vColor;
  varying vec2 vUv;
  uniform vec2 uFade;
  void main() {
    vec3 color = vec3(vColor);
    float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
    gl_FragColor = vec4(color, alpha);
    if (gl_FragColor.a < 0.0001) discard;
    ${y.fog_fragment}
  }
`,ce=`
  #define USE_FOG;
  ${y.fog_pars_vertex}
  attribute vec3 aOffset;
  attribute vec3 aMetrics;
  attribute vec3 aColor;
  uniform float uTravelLength;
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vColor;
  #include <getDistortion_vertex>
  void main() {
    vec3 transformed = position.xyz;
    float radius = aMetrics.r;
    float myLength = aMetrics.g;
    float speed = aMetrics.b;

    transformed.xy *= radius;
    transformed.z *= myLength;

    transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
    transformed.xy += aOffset.xy;

    float progress = abs(transformed.z / uTravelLength);
    transformed.xyz += getDistortion(progress);

    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vColor = aColor;
    ${y.fog_vertex}
  }
`,de=`
  #define USE_FOG;
  ${y.fog_pars_vertex}
  attribute float aOffset;
  attribute vec3 aColor;
  attribute vec2 aMetrics;
  uniform float uTravelLength;
  uniform float uTime;
  varying vec3 vColor;
  mat4 rotationY( in float angle ) {
    return mat4(
      cos(angle),        0,        sin(angle),    0,
      0,                1.0,    0,            0,
      -sin(angle),        0,        cos(angle),    0,
      0,                 0,        0,            1
    );
  }
  #include <getDistortion_vertex>
  void main(){
    vec3 transformed = position.xyz;
    float width = aMetrics.x;
    float height = aMetrics.y;

    transformed.xy *= vec2(width, height);
    float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

    transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;
    transformed.z += - uTravelLength + time;

    float progress = abs(transformed.z / uTravelLength);
    transformed.xyz += getDistortion(progress);

    transformed.y += height / 2.;
    transformed.x += -width / 2.;
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition;
    vColor = aColor;
    ${y.fog_vertex}
  }
`,fe=`
  #define USE_FOG;
  ${y.fog_pars_fragment}
  varying vec3 vColor;
  void main(){
    vec3 color = vec3(vColor);
    gl_FragColor = vec4(color,1.);
    ${y.fog_fragment}
  }
`,ue={length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:30,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:131586,islandColor:131586,background:0,leftCars:[65535,35071,65518],rightCars:[16711935,16711816,15597823],sticks:65535}},me={uFreq:{value:new E(3,4)},uAmp:{value:new E(8,6)},uPowY:{value:new E(10,1.4)}},pe={deepDistortion:{uniforms:me,getDistortion:`
      uniform vec2 uFreq;
      uniform vec2 uAmp;
      uniform vec2 uPowY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          sin(progress * PI * uFreq.x + uTime) * uAmp.x
        );
      }
      float getDistortionY(float progress){
        return (
          pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.02),
          getDistortionY(progress) - getDistortionY(0.02),
          0.
        );
      }
    `}};function x(a){return Array.isArray(a)?Math.random()*(a[1]-a[0])+a[0]:Math.random()*a}function Pt(a){return Array.isArray(a)?a[Math.floor(Math.random()*a.length)]:a}function mt(a,t,e=.1,o=.001){let s=(t-a)*e;return Math.abs(s)<o&&(s=t-a),s}class pt{constructor(t,e,o,s,l){r(this,"webgl");r(this,"options");r(this,"colors");r(this,"speed");r(this,"fade");r(this,"mesh");this.webgl=t,this.options=e,this.colors=o,this.speed=s,this.fade=l}init(){const t=this.options,e=new Vt(new Y(0,0,0),new Y(0,0,-1)),o=new Xt(e,40,1,8,!1),s=new yt;s.copy(o),s.instanceCount=t.lightPairsPerRoadWay*2;const l=t.roadWidth/t.lanesPerRoad,i=[],n=[],d=[];let h;Array.isArray(this.colors)?h=this.colors.map(u=>new b(u)):h=[new b(this.colors)];for(let u=0;u<t.lightPairsPerRoadWay;u++){const v=x(t.carLightsRadius),g=x(t.carLightsLength),p=x(this.speed);let w=u%t.lanesPerRoad*l-t.roadWidth/2+l/2;const F=x(t.carWidthPercentage)*l,D=x(t.carShiftX)*l;w+=D;const k=x(t.carFloorSeparation)+v*1.3,T=-x(t.length);i.push(w-F/2),i.push(k),i.push(T),i.push(w+F/2),i.push(k),i.push(T),n.push(v),n.push(g),n.push(p),n.push(v),n.push(g),n.push(p);const S=Pt(h);d.push(S.r),d.push(S.g),d.push(S.b),d.push(S.r),d.push(S.g),d.push(S.b)}s.setAttribute("aOffset",new R(new Float32Array(i),3,!1)),s.setAttribute("aMetrics",new R(new Float32Array(n),3,!1)),s.setAttribute("aColor",new R(new Float32Array(d),3,!1));const c=new J({fragmentShader:he,vertexShader:ce,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:t.length},uFade:{value:this.fade}},this.webgl.fogUniforms,(typeof this.options.distortion=="object"?this.options.distortion.uniforms:{})||{})});c.onBeforeCompile=u=>{u.vertexShader=u.vertexShader.replace("#include <getDistortion_vertex>",typeof this.options.distortion=="object"?this.options.distortion.getDistortion:"")};const f=new Q(s,c);f.frustumCulled=!1,this.webgl.scene.add(f),this.mesh=f}update(t){this.mesh.material.uniforms.uTime&&(this.mesh.material.uniforms.uTime.value=t)}}class ge{constructor(t,e){r(this,"webgl");r(this,"options");r(this,"mesh");this.webgl=t,this.options=e}init(){const t=this.options,e=new vt(1,1),o=new yt;o.copy(e);const s=t.totalSideLightSticks;o.instanceCount=s;const l=t.length/(s-1),i=[],n=[],d=[];let h;Array.isArray(t.colors.sticks)?h=t.colors.sticks.map(u=>new b(u)):h=[new b(t.colors.sticks)];for(let u=0;u<s;u++){const v=x(t.lightStickWidth),g=x(t.lightStickHeight);i.push((u-1)*l*2+l*Math.random());const p=Pt(h);n.push(p.r),n.push(p.g),n.push(p.b),d.push(v),d.push(g)}o.setAttribute("aOffset",new R(new Float32Array(i),1,!1)),o.setAttribute("aColor",new R(new Float32Array(n),3,!1)),o.setAttribute("aMetrics",new R(new Float32Array(d),2,!1));const c=new J({fragmentShader:fe,vertexShader:de,side:wt,uniforms:Object.assign({uTravelLength:{value:t.length},uTime:{value:0}},this.webgl.fogUniforms,(typeof t.distortion=="object"?t.distortion.uniforms:{})||{})});c.onBeforeCompile=u=>{u.vertexShader=u.vertexShader.replace("#include <getDistortion_vertex>",typeof this.options.distortion=="object"?this.options.distortion.getDistortion:"")};const f=new Q(o,c);f.frustumCulled=!1,this.webgl.scene.add(f),this.mesh=f}update(t){this.mesh.material.uniforms.uTime&&(this.mesh.material.uniforms.uTime.value=t)}}class ve{constructor(t,e){r(this,"webgl");r(this,"options");r(this,"uTime");r(this,"leftRoadWay");r(this,"rightRoadWay");r(this,"island");this.webgl=t,this.options=e,this.uTime={value:0}}createPlane(t,e){const o=this.options,s=100,l=new vt(e?o.roadWidth:o.islandWidth,o.length,20,s),i={uTravelLength:{value:o.length},uColor:{value:new b(e?o.colors.roadColor:o.colors.islandColor)},uTime:this.uTime},n=new J({fragmentShader:ne,vertexShader:le,side:wt,uniforms:Object.assign(i,this.webgl.fogUniforms,(typeof o.distortion=="object"?o.distortion.uniforms:{})||{})});n.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <getDistortion_vertex>",typeof this.options.distortion=="object"?this.options.distortion.getDistortion:"")};const d=new Q(l,n);return d.rotation.x=-Math.PI/2,d.position.z=-o.length/2,d.position.x+=(this.options.islandWidth/2+o.roadWidth/2)*t,this.webgl.scene.add(d),d}init(){this.leftRoadWay=this.createPlane(-1,!0),this.rightRoadWay=this.createPlane(1,!0),this.island=this.createPlane(0,!1)}update(t){this.uTime.value=t}}class we{constructor(t,e){r(this,"container");r(this,"options");r(this,"renderer");r(this,"composer");r(this,"camera");r(this,"scene");r(this,"renderPass");r(this,"bloomPass");r(this,"clock");r(this,"disposed");r(this,"road");r(this,"leftCarLights");r(this,"rightCarLights");r(this,"leftSticks");r(this,"fogUniforms");r(this,"fovTarget");r(this,"speedUpTarget");r(this,"speedUp");r(this,"timeOffset");r(this,"baseCameraY");r(this,"fireworks");r(this,"frozen");r(this,"width",0);r(this,"height",0);r(this,"staticDrawn",!1);this.options=e,this.container=t;const o=Math.max(1,t.offsetWidth||window.innerWidth),s=Math.max(1,t.offsetHeight||window.innerHeight);this.width=o,this.height=s,this.renderer=new It({antialias:!1,alpha:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setSize(o,s,!1);const l=Z();this.renderer.setPixelRatio(e.pixelRatio??1),this.frozen=!!e.frozen,this.renderer.toneMapping=Gt,this.renderer.toneMappingExposure=l?1:.85,this.renderer.domElement.style.setProperty("height","100%"),this.renderer.domElement.style.setProperty("width","100%"),this.composer=new _t(this.renderer,{multisampling:e.multisampling??0}),t.appendChild(this.renderer.domElement),this.camera=new Yt(e.fov,o/s,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new Nt,this.scene.background=new b(0);const i=new jt(e.colors.background,e.length*.2,e.length*.95);this.scene.fog=i,this.fogUniforms={fogColor:{value:i.color},fogNear:{value:i.near},fogFar:{value:i.far}},this.clock=new Bt,this.disposed=!1,this.fireworks=null,this.road=new ve(this,e),this.leftCarLights=new pt(this,e,e.colors.leftCars,e.movingAwaySpeed,new E(0,1-e.carLightsFade)),this.rightCarLights=new pt(this,e,e.colors.rightCars,e.movingCloserSpeed,new E(1,0+e.carLightsFade)),this.leftSticks=new ge(this,e),this.fovTarget=e.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.baseCameraY=8,this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize)}onWindowResize(){const t=Math.max(1,this.container.offsetWidth||window.innerWidth),e=Math.max(1,this.container.offsetHeight||window.innerHeight);t===this.width&&e===this.height||(this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.composer.setSize(t,e,!1),this.staticDrawn=!1)}initPasses(){this.renderPass=new Wt(this.scene,this.camera),this.renderPass.renderToScreen=!1;const t=Z();this.bloomPass=new Et(this.camera,new Dt({luminanceThreshold:t?.25:.4,luminanceSmoothing:.075,resolutionScale:t?.25:.5,intensity:t?1.8:1.5})),this.bloomPass.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass)}init(){this.initPasses();const t=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-t.roadWidth/2-t.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(t.roadWidth/2+t.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(t.roadWidth+t.islandWidth/2)),this.frozen||(this.fireworks=new N(this.scene,this.options.roadWidth+this.options.islandWidth,this.options.length))}warm(){this.renderer.setRenderTarget(this.composer.inputBuffer);let t;try{t=this.renderer.compileAsync(this.scene,this.camera)}finally{this.renderer.setRenderTarget(null)}return t.then(()=>{this.disposed||this.composer.render()})}update(t){const e=Math.exp(-(-60*Math.log2(.9))*t);this.speedUp+=mt(this.speedUp,this.speedUpTarget,e,1e-5),this.timeOffset+=this.speedUp*t;const o=this.frozen?this.timeOffset:this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(o),this.leftCarLights.update(o),this.leftSticks.update(o),this.road.update(o),this.fireworks&&this.fireworks.update(t);const s=mt(this.camera.fov,this.fovTarget,e);s!==0&&(this.camera.fov+=s*t*6,this.camera.updateProjectionMatrix()),this.camera.position.y=this.baseCameraY,this.camera.lookAt(this.camera.position.x,this.camera.position.y,this.camera.position.z-10)}render(t){this.composer.render(t)}dispose(){this.disposed=!0,window.removeEventListener("resize",this.onWindowResize),this.fireworks&&(this.fireworks.dispose(),this.fireworks=null),this.scene.traverse(e=>{const o=e;if(o.geometry&&o.geometry.dispose(),o.material){const s=Array.isArray(o.material)?o.material:[o.material];for(const l of s){for(const i of Object.values(l))i?.isTexture&&i.dispose();l.dispose()}}}),this.composer.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss();const t=this.renderer.domElement;t.width=1,t.height=1,t.remove()}tick(){if(this.disposed)return;const t=Math.min(.05,this.clock.getDelta());this.frozen&&this.staticDrawn||(this.render(t),this.update(t),this.staticDrawn=!0)}}const ye=300;function Ce(){const a=Z(),t=$t(),e=window.devicePixelRatio||1,o=!ht("highway-noaa")&&(a||e<1.5),s=ht("highway-dpr15")?Math.min(1.5,e):1,l=document.createElement("div");l.id="lightspeed-layer",l.style.cssText="position:fixed;inset:0;z-index:5;opacity:0;pointer-events:none;display:none;transition:none",document.body.appendChild(l);let i=null,n=0,d=!1,h=!1,c=!1,f=null,u=0,v=0,g=Zt,p=0,L=0,w=0,F=0,D="none";function k(m){m!==F&&(F=m,l.style.opacity=String(m))}function T(m){m!==D&&(D=m,l.style.display=m)}function S(){if(!c||!i){f=null;return}try{i.tick()}catch(m){++u<=3&&console.warn("[LightSpeed] tick error:",m)}f=requestAnimationFrame(S)}function St(){f===null&&i&&c&&(f=requestAnimationFrame(S))}function xt(){f!==null&&(cancelAnimationFrame(f),f=null)}function Tt(){return{...ue,distortion:pe.deepDistortion,length:400,roadWidth:10,islandWidth:2,lanesPerRoad:3,fov:90,carLightsFade:.4,totalSideLightSticks:a?30:50,lightPairsPerRoadWay:a?30:50,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:131586,islandColor:131586,background:0,leftCars:[16724527,10694672,11015432],rightCars:[16645616,15982240,14859144],sticks:16645616},multisampling:o?4:0,pixelRatio:s,frozen:t}}function tt(m){console.error("[LightSpeed] init failed:",m),d=!0,O()}let B=!1;function et(m){m.preventDefault(),!B&&(console.warn("[LightSpeed] WebGL context lost; the engine renders through"),d=!0,O())}function it(){T("block");const m=l.getBoundingClientRect();if(m.width===0||m.height===0)return console.warn("[LightSpeed] container has 0 dimensions, deferring init"),T("none"),!1;try{i=new we(l,Tt()),i.renderer.domElement.addEventListener("webglcontextlost",et),n=1}catch(C){tt(C)}return T("none"),n===1}function st(){if(!i)return!1;try{return i.init(),i.timeOffset=5,n=2,!0}catch(m){return tt(m),!1}}function Ct(){if(i)try{i.renderer.compile(i.scene,i.camera),i.composer.render(),n=3}catch(m){console.warn("[LightSpeed] shader warmup failed:",m)}}function bt(){if(!i)return;const m=p,C=i;C.warm().then(()=>{m===p&&i===C&&(n=3)}).catch(P=>console.warn("[LightSpeed] shader warmup failed:",P))}function Lt(){if(w)return;const m=p,C=++L;w=C,Kt(()=>{w===C&&(w=0,!(h||d||m!==p)&&(v<g||v>=I||(n===0?it():n===1&&st()&&bt())))},ye)}function kt(){w=0,!(n===0&&!it())&&(n===1&&!st()||Ct())}function rt(){c||!i||(c=!0,T("block"),i.onWindowResize(),i.fovTarget=130,i.speedUpTarget=t?0:1.4,t&&(i.camera.fov=130,i.camera.updateProjectionMatrix()),i.camera.position.set(0,2.5,-3),i.baseCameraY=2.5,St())}function V(){k(0),c&&(c=!1,xt(),T("none"))}let X=!1;function O(){if(X=!1,V(),p++,w=0,i){B=!0,i.renderer.domElement.removeEventListener("webglcontextlost",et);try{i.dispose()}catch(m){console.warn("[LightSpeed] dispose failed:",m)}B=!1}i=null,n=0,u=0,g=ct}function Mt(m,C,P){if(v=P,n<2&&!d&&!h&&P<I&&(P>=ct?kt():P>=g&&Lt()),n>=1&&P<qt){O();return}if(!(n<2)){if(P>=I){const _=1-ft(P,I,Jt);if(_<=0||!c&&!X){V();return}rt(),k(_);return}if(P>=dt){rt();const _=ft(P,dt,Qt);k(_),_>=1&&(X=!0);return}V()}}function At(){h=!0,O(),l.remove()}return{update:Mt,exit:At,get rendering(){return c&&n>=2&&i!==null}}}export{Ce as createLightSpeedLayer};
