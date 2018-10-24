function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    headerEl = document.getElementById("search-header");
  storeDetailsEl = document.getElementById("store-details");

  if (distanceY > shrinkOn) {
    headerEl.classList.add("shrink");
    storeDetailsEl.classList.add("move-out");
  } else {
    headerEl.classList.remove("shrink");
    storeDetailsEl.classList.remove("move-out");
  }
}

window.addEventListener("scroll", resizeHeaderOnScroll);
