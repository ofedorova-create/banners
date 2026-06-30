document.addEventListener("DOMContentLoaded", function () {
  const clickArea = document.querySelector(".click-area");

  if (!clickArea) {
    return;
  }

  clickArea.addEventListener("mouseup", function (event) {
    const isLeftButton = event.button === 0;

    if (!isLeftButton) {
      return;
    }

    if (typeof window.callClick === "function") {
      window.callClick();
    }
  });
});
