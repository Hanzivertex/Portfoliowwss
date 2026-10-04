const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});

const menu=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>links.classList.toggle('open'));
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

document.querySelectorAll('video').forEach(video=>{
  video.addEventListener('loadeddata',()=>{video.classList.add('video-ready'); video.setAttribute('data-ready','true');});
  video.addEventListener('error',()=>{video.classList.remove('video-ready');});
});

document.querySelectorAll('.work-card').forEach(card=>{
  const video=card.querySelector('video'), btn=card.querySelector('.play-btn');
  if(!video || !btn) return;
  btn.addEventListener('click',()=>{
    if(video.paused){ video.play(); btn.textContent='❚❚'; }
    else{ video.pause(); btn.textContent='▶'; }
  });
  card.addEventListener('mouseenter',()=>{if(video.paused) video.play().catch(()=>{});});
  card.addEventListener('mouseleave',()=>{if(!video.paused){video.pause(); video.currentTime=0; btn.textContent='▶';}});
});

const heroVideo=document.querySelector('.featured-frame video');
const sound=document.querySelector('.sound-toggle');
sound?.addEventListener('click',()=>{
  heroVideo.muted=!heroVideo.muted;
  sound.textContent=heroVideo.muted?'SOUND OFF':'SOUND ON';
  if(!heroVideo.paused) heroVideo.play().catch(()=>{});
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible');});
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
