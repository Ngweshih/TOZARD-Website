/*
============================================================
TOZARD RESEARCH LABORATORY - JAVASCRIPT

EDITING GUIDE:
- Navigation/menu behavior is handled here.
- Interactive buttons and small UI features are grouped
  into separate sections.
- Keep functions small and clearly named.
============================================================
*/


const btn=document.querySelector('.hamb');const menu=document.querySelector('.menu');if(btn){btn.addEventListener('click',()=>{menu.classList.toggle('open');btn.setAttribute('aria-expanded',menu.classList.contains('open'))})}
document.querySelectorAll('.copy').forEach(b=>b.addEventListener('click',async()=>{const text=b.dataset.copy||'';try{await navigator.clipboard.writeText(text);const old=b.textContent;b.textContent='Copied';setTimeout(()=>b.textContent=old,1200)}catch(e){b.textContent='Select manually'}}));
