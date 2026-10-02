document.addEventListener("DOMContentLoaded", function () {
  const clickArea = document.querySelector(".click-area");
  const disclaimer = document.querySelector(".disclaimer");

  function fitDisclaimer() {
    if (!disclaimer) { return; }

    const banner = document.querySelector(".banner");
    const bannerHeight = banner ? banner.clientHeight : 60;
    const minFontSize = 8;
    const maxFontSize = 9;
    const step = 0.1;
    const bottomGap = 5;

    let size = maxFontSize;
    while (size >= minFontSize - 0.001) {
      const roundedSize = Math.round(size * 10) / 10;
      // Keep the first visible glyph at about 20 px from the banner top.
      const top = 18.3;
      const lineHeight = Math.max(7.4, Math.round((roundedSize - 0.6) * 10) / 10);

      disclaimer.style.fontSize = roundedSize + "px";
      disclaimer.style.lineHeight = lineHeight + "px";
      disclaimer.style.top = top + "px";

      const availableHeight = bannerHeight - top - bottomGap;
      const fitsHeight = disclaimer.scrollHeight <= availableHeight + 0.5;
      const fitsWidth = disclaimer.scrollWidth <= disclaimer.clientWidth + 0.5;

      if (fitsHeight && fitsWidth) { break; }
      size -= step;
    }
  }

  fitDisclaimer();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitDisclaimer);
  }
  window.addEventListener("resize", fitDisclaimer);

  if (!clickArea) { return; }
  clickArea.addEventListener("mouseup", function (event) {
    const isLeftButton = event.button === 0;
    if (!isLeftButton) { return; }
    if (typeof window.callClick === "function") {
      window.callClick();
    }
  });
});
