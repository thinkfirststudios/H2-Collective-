// ── CURSOR ──────────────────────────────────────
const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
if(cur && window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
  (function raf(){rx+=(mx-rx)*.13;ry+=(my-ry)*.13;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(raf)})();
  document.querySelectorAll('a,button,.svc-card,.rev-card,.gal-item,.trust-card,.side-link').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cur.classList.add('big');ring.classList.add('big')});
    el.addEventListener('mouseleave',()=>{cur.classList.remove('big');ring.classList.remove('big')});
  });
}

// ── SIDEBAR ──────────────────────────────────────
const sideNav = document.querySelector('.side-nav');
const burger = document.querySelector('.side-burger');
if(burger && sideNav){
  burger.addEventListener('click',()=>{
    sideNav.classList.toggle('open');
    burger.classList.toggle('open');
  });
}

// Mobile: tap to expand services dropdown
document.querySelectorAll('.side-item.has-sub > .side-link').forEach(link=>{
  link.addEventListener('click',e=>{
    if(window.innerWidth <= 880){
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});

// Close sidebar on link click (mobile)
document.querySelectorAll('.side-sub a, .side-link[href]:not(.has-sub > .side-link)').forEach(a=>{
  a.addEventListener('click',()=>{
    if(window.innerWidth <= 880 && sideNav){
      sideNav.classList.remove('open');
      if(burger) burger.classList.remove('open');
    }
  });
});

// ── SPEED LINES (hero only) ──────────────────────
const sl = document.getElementById('slines');
if(sl){
  for(let i=0;i<16;i++){
    const d = document.createElement('div');
    d.className='sline';
    const top = Math.random()*100;
    const w = 80+Math.random()*180;
    const dur = 2.8+Math.random()*3.5;
    const delay = Math.random()*6;
    d.style.cssText=`top:${top}%;width:${w}px;animation-duration:${dur}s;animation-delay:${delay}s`;
    sl.appendChild(d);
  }
}

// ── SCROLL REVEAL ────────────────────────────────
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}
  });
},{threshold:0.1});
document.querySelectorAll('.rev,.rev-l,.rev-r').forEach(el=>io.observe(el));
