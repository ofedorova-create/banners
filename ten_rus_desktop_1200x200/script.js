document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".click-area")?.addEventListener("mouseup",e=>{if(e.button===0&&typeof window.callClick==="function")window.callClick()})});
