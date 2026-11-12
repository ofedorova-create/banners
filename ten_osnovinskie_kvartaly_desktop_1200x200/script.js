(function(){"use strict";var a=document.querySelector(".click-area");if(!a||a.dataset.clickBound==="1")return;a.dataset.clickBound="1";a.addEventListener("click",function(e){if(e.button!==0)return;if(typeof window.callClick==="function")window.callClick();});})();

(function(){
  function initializeFontGate(){
    var banner=document.querySelector(".banner");
    if(!banner)return;
    var completed=false;
    var timeout;
    function release(){
      if(completed)return;
      completed=true;
      clearTimeout(timeout);
      requestAnimationFrame(function(){banner.classList.add("fonts-ready");});
    }
    timeout=setTimeout(release,2500);
    if(!document.fonts){release();return;}
    Promise.all([
      document.fonts.load('500 14px "DINProCondensed"'),
      document.fonts.load('700 54px "DINProCondensed"'),
      document.fonts.ready
    ]).then(release,release);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initializeFontGate,{once:true});
  else initializeFontGate();
})();