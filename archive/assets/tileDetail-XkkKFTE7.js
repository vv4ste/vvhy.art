import{j as S,E as W,G as O,I as x,J as z,g as G}from"./index-DAMUPOp-.js";import{e as a}from"./dom-BJTSIi2w.js";import{t as E}from"./tileColors-fZM1Z4Sj.js";let r=null,g={};function et(t){g=t}function at(t,e,c,i,o){const n=document.createElement("div");n.className="tile-detail",n.innerHTML=j(t,null),U(n,t,e,c,i,o);const s=n.querySelector(".tile-detail__fav-btn");s?.addEventListener("click",_=>{_.stopPropagation();const l=S().toggleFavorite(t.id);s.classList.toggle("is-on",l),s.setAttribute("aria-pressed",String(l)),s.title=l?"Unfavorite":"Favorite";const f=s.querySelector("svg");f&&f.setAttribute("fill",l?"currentColor":"none"),W("favorite:change",{tileId:t.id,favorited:l})});}function U(t,e,c,i,o,n){r&&q();const s=t.querySelector(".tile-detail__card"),p=Math.max(o,180),_=Math.max(n,240);s.style.width=`${p}px`,s.style.height=`${_}px`,s.style.left=`${c-p/2}px`,s.style.top=`${i-_/2}px`,document.body.appendChild(t);const l=z(t,{id:"tile-detail",afterClose:"remove",labelledBy:".tile-detail__title",onClose:()=>{r?.panel===l&&(r=null),g.onClose?.()}});t.querySelector(".tile-detail__close-btn")?.addEventListener("click",()=>l.close()),r={panel:l,tile:e},l.open();const f=window.innerWidth,m=window.innerHeight,h=Math.min(460,f*.9),v=Math.min(620,m*.85),k=(f-h)/2,d=(m-v)/2;G.to(s,{left:k,top:d,width:h,height:v,rotateY:180,duration:.55,ease:"power2.inOut",onUpdate:function(){const u=this.progress(),$=Math.sin(u*Math.PI)*40;s.style.boxShadow=`0 ${$}px ${$*2}px rgba(0,0,0,${.3+u*.3})`}})}function st(...args){return at(...args)}function q(){if(!r)return;const{panel:t}=r;r=null,t.close()}function it(){return false}function M(t,e){if(!e||e.length===0)return"";const c=e.map(i=>{const o=a(i.title||i.url||i.tileId||"untitled");return i.url&&x(i.url)?`<a class="tile-detail__conn" href="${a(i.url)}" target="_blank" rel="noopener noreferrer">${o}<span class="tile-detail__conn-arrow">↗</span></a>`:`<span class="tile-detail__conn tile-detail__conn--internal" data-tile-id="${a(i.tileId||"")}">${o}</span>`}).join("");return`
    <div class="tile-detail__conn-section">
      <span class="tile-detail__conn-label">${a(t)} <em>${e.length}</em></span>
      <div class="tile-detail__conn-list">${c}</div>
    </div>
  `}function j(t,e){const c=E(t.type),i=e?.title??t.title,o=e?.subtitle??t.subtitle??"",n=e?.description??t.description??"",s=e?.date??t.date??"",p=e?.tags??t.tags??[],_=e?.bpm,l=e?.musicalKey,f=e?.trackLength,m=e?.producer,h=e?.geniusUrl,v=e?.facts??[],k=`
    <div class="tile-detail__face tile-detail__front">
      <img class="tile-detail__front-img" src="${a(t.imageUrl?O(t.imageUrl):"/archive/assets/placeholder-1.svg")}" alt="" />
      <div class="tile-detail__front-overlay">
        <span class="tile-detail__front-type" style="color:${c}">${a(t.type.toUpperCase())}</span>
        <span class="tile-detail__front-title">${a(t.title)}</span>
      </div>
    </div>
  `,d=[],u=(b,w)=>`<div class="tile-detail__meta-row"><span class="tile-detail__meta-label">${b}</span><span class="tile-detail__meta-value">${w}</span></div>`;s&&d.push(u("date",a(s))),f&&d.push(u("length",a(f))),_&&d.push(u("bpm",a(String(_)))),l&&d.push(u("key",a(l))),m&&d.push(u("produced by",a(m))),h&&x(h)&&d.push(u("lyrics",`<a href="${a(h)}" target="_blank" rel="noopener" style="color:#4ade80;text-decoration:underline">genius</a>`));const $=v.length>0?`<div class="tile-detail__facts">
        <span class="tile-detail__facts-label">// facts</span>
        <ul class="tile-detail__facts-list">
          ${v.map(b=>`<li>${a(b)}</li>`).join("")}
        </ul>
      </div>`:"",F=p.length>0?`<div class="tile-detail__tags">${p.map(b=>`<span class="tile-detail__tag">${a(b)}</span>`).join("")}</div>`:"",I=t.links?`<div class="tile-detail__links">${Object.entries(t.links).filter(([,b])=>x(b)).map(([b,w])=>`<a class="tile-detail__link" href="${a(w)}" target="_blank" rel="noopener noreferrer">${a(b)}</a>`).join("")}</div>`:"",A=[M("remixes",e?.remixes??t.remixes),M("samples",e?.samples??t.samples),M("sampled in",e?.sampledIn??t.sampledIn)].join(""),D=false,y=S().isFavorited(t.id),P=`<svg viewBox="0 0 24 24" fill="${y?"currentColor":"none"}" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="14" height="14"><path d="M12 2.5l2.9 6.5 7.1.7-5.4 4.8 1.6 7-6.2-3.6-6.2 3.6 1.6-7L1.9 9.7l7.1-.7z"/></svg>`,R=`
    <div class="tile-detail__face tile-detail__back">
      <div class="tile-detail__back-scroll">
        <div class="tile-detail__back-header">
          <span class="tile-detail__type-badge" style="color:${c}">${a(t.type)}</span>
          <div class="tile-detail__back-header-right">
            <button class="tile-detail__fav-btn ${y?"is-on":""}" title="${y?"Unfavorite":"Favorite"}" aria-pressed="${y}">${P}</button>
            <button class="tile-detail__close-btn brand-btn brand-btn--ghost" title="Close">esc</button>
          </div>
        </div>
        <h2 class="tile-detail__title">${a(i)}</h2>
        ${o?`<p class="tile-detail__subtitle">${a(o)}</p>`:""}
        ${d.length>0?`<div class="tile-detail__meta">${d.join("")}</div>`:""}
        ${n?`<p class="tile-detail__description">${a(n)}</p>`:""}
        ${$}
        ${F}
        ${I}
        ${A}

      </div>
    </div>
  `;return`<div class="tile-detail__card">${k}${R}</div>`}export{at as a,q as c,st as o,et as s,it as t};
