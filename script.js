const header=document.querySelector('.site-header');
const updateHeader=()=>header.classList.toggle('scrolled',window.scrollY>24);
updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});
const items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.12});items.forEach(i=>io.observe(i));}else{items.forEach(i=>i.classList.add('visible'));}
