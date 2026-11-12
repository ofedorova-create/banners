(function(){"use strict";var a=document.querySelector(".click-area");if(!a||a.dataset.clickBound==="1")return;a.dataset.clickBound="1";a.addEventListener("click",function(e){if(e.button!==0)return;if(typeof window.callClick==="function")window.callClick();});})();
(function(){
const b=document.querySelector('.banner');let done=false;let timeout;
function release(){if(done)return;done=true;clearTimeout(timeout);requestAnimationFrame(()=>b.classList.add('fonts-ready'));}
timeout=setTimeout(release,2500);
if(!document.fonts){release();return;}
Promise.all([document.fonts.load('500 12px "DINProCondensed"'),document.fonts.load('700 54px "DINProCondensed"'),document.fonts.ready]).then(release,release);
})();
