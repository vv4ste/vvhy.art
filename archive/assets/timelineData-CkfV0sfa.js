// Local VFX catalogue: no accounts, submissions, or remote services.
function preloadStaticTiles(){return Promise.resolve((window.VV_CONTENT?.tracks||[]).map(t=>({...t,type:'project',subtitle:(t.collection||'VFX project')+' · vv',imageUrl:t.cover||'/archive/assets/placeholder-1.svg',_epochMs:new Date(t.date).getTime()})))}
async function loadTimelineData(){const tiles=await preloadStaticTiles();return{tiles,rawTiles:tiles}}
function startDataPrep(){return preloadStaticTiles()}
function enrichLateStems(){return Promise.resolve([])}
export{preloadStaticTiles,loadTimelineData,startDataPrep,enrichLateStems};
